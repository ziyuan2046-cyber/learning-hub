/**
 * 笔顺数据解码（浏览器 / 小程序通用，无 DOM 依赖）
 * 与 build/path-codec.js 的编码规则严格对应。
 *
 * 单行格式（\t 分隔 5 段）：
 *   拼音 \t 笔画数 \t 部首 \t 字形结构 \t 笔顺数据
 *   笔顺数据 = 中线段 \x01 轮廓段
 *     中线段：每笔 "x,y;x,y"，笔间用 ~ 分隔
 *     轮廓段：每笔为 path-codec 编码串，笔间用 ~ 分隔
 */
var HanziCodec = (function () {
  var B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
  var M = {};
  for (var i = 0; i < B64.length; i++) M[B64[i]] = i;
  var REV = ['M', 'L', 'Q', 'C', 'Z'];
  var NP = { M: 2, L: 2, Q: 4, C: 6, Z: 0 };
  var SEP = '';

  /** 字符 -> 字母表索引 */
  function idx(ch) {
    var v = M[ch];
    return v === undefined ? 0 : v;
  }

  function rdVarint(s, st) {
    var shift = 0, z = 0, b;
    do {
      if (st.i >= s.length) return 0;
      b = idx(s.charAt(st.i++));
      z += (b & 31) * Math.pow(2, shift);
      shift += 5;
    } while (b & 32);
    return (z & 1) ? -((z + 1) / 2) : z / 2;
  }

  /** 解码单笔轮廓 -> 指令数组 */
  function decodePath(str) {
    if (!str) return [];
    var n = idx(str.charAt(0)) * 32 + idx(str.charAt(1));
    var st = { i: 2 };
    var cmds = [], k, cmd, np, j, px = 0, py = 0;
    for (k = 0; k < n; k++) cmds.push({ c: REV[idx(str.charAt(st.i++))], p: [] });
    for (k = 0; k < n; k++) {
      cmd = cmds[k];
      np = NP[cmd.c];
      for (j = 0; j < np; j++) {
        if (j % 2 === 0) { px = rdVarint(str, st) + px; cmd.p.push(px); }
        else { py = rdVarint(str, st) + py; cmd.p.push(py); }
      }
    }
    return cmds;
  }

  /** 解析中线段 */
  function parseMedians(txt) {
    if (!txt) return [];
    return txt.split('~').map(function (s) {
      return s.split(';').map(function (p) {
        var a = p.split(',');
        return [parseInt(a[0], 10), parseInt(a[1], 10)];
      });
    });
  }

  /** 解析一行 -> 字对象 */
  function parseLine(line) {
    var t = line.split('\t');
    var parts = (t[4] || '').split(SEP);
    return {
      pinyin: t[0] || '',
      count: parseInt(t[1], 10) || 0,
      radical: t[2] || '',
      struct: t[3] || '',
      medians: parseMedians(parts[0]),
      strokes: parts[1] ? parts[1].split('~').map(decodePath) : []
    };
  }

  /** 解析整册 -> { meta, chars } */
  function parseBook(text) {
    var lines = text.split('\n');
    var meta = JSON.parse(lines[0].charAt(0) === '#' ? lines[0].slice(1) : lines[0]);
    var chars = [];
    for (var i = 1; i < lines.length; i++) {
      if (lines[i]) chars.push(parseLine(lines[i]));
    }
    return { meta: meta, chars: chars };
  }

  /** 解析 radicals.txt -> { 字: {radical, struct} } */
  function parseRadicals(text) {
    var map = {};
    var lines = text.split('\n');
    for (var i = 0; i < lines.length; i++) {
      if (!lines[i]) continue;
      var t = lines[i].split('\t');
      map[t[0]] = { radical: t[1] || '', struct: t[2] || '' };
    }
    return map;
  }

  return {
    decodePath: decodePath,
    parseLine: parseLine,
    parseBook: parseBook,
    parseRadicals: parseRadicals
  };
})();

if (typeof module !== 'undefined' && module.exports) module.exports = HanziCodec;
