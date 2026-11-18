/* Browse a static index built from the two textbook tables. */
(function () {
  'use strict';
  var categories = [
    ['shape', '易混字', '未 · 末', '形近字对照'], ['poly', '多音字', '行', '不同读音'],
    ['same', '同音字', '在 · 再', '声调相同'], ['words', '同音词', '报道 · 报到', '同音不同义'],
    ['rare', '生僻字', '仞', '教材中的二、三级字'], ['places', '易读错的地名', '六安', '读音与地区'],
    ['read', '易读错的字', '氛', '看词辨音'], ['write', '易写错的字', '肺', '看字辨形']
  ];
  var pageSize = 24;
  var singleKinds = ['poly', 'rare', 'read', 'write'];
  var extraWritePinyin = { '肺': 'fèi', '沛': 'pèi', '熙': 'xī', '敝': 'bì', '尴': 'gān' };
  var get = function (id) { return document.getElementById(id); };

  function node(tag, cls, text) {
    var el = document.createElement(tag);
    if (cls) el.className = cls;
    if (text) el.textContent = text;
    return el;
  }

  function pinyinKey(value) {
    return value.toLowerCase().replace(/ü/g, 'v').normalize('NFD')
      .replace(/u\u0308/g, 'v').replace(/[\u0300-\u036f]/g, '').replace(/[\s’'·]/g, '');
  }

  window.HanziMistakes = function (openChar) {
    var data = window.__HANZI_EASY_MISTAKES__;
    var menu = get('mistakeCategories');
    var list = get('mistakeResults');
    var query = get('mistakeSearch');
    var grade = get('mistakeGrade');
    var title = get('mistakeResultTitle');
    var count = get('mistakeCount');
    var more = get('mistakeMore');
    var scope = get('mistakeScope');
    var jumping = false;
    var active = 'shape';
    var limit = pageSize;

    if (!data) {
      count.textContent = '分类数据未能加载。';
      query.disabled = grade.disabled = true;
      return;
    }

    scope.textContent = data.summary.books + ' 册教材 · ' + data.summary.unique + ' 个汉字';
    get('tabMistakeCount').textContent = data.summary.classified + ' 字';
    var textbookPinyin = Object.create(null);
    data.kinds.all.forEach(function (row) { textbookPinyin[row[0][0]] = row[1]; });
    categories.forEach(function (category) {
      var btn = node('button', 'mistake-category');
      btn.type = 'button';
      btn.dataset.kind = category[0];
      btn.setAttribute('aria-controls', 'mistakeResults');
      btn.append(node('span', 'mistake-mini', category[2]), node('span', 'mistake-category-name', category[1]),
        node('span', 'mistake-badge', String(data.kinds[category[0]].length)));
      menu.appendChild(btn);
    });

    function render() {
      var category = categories.find(function (c) { return c[0] === active; });
      title.textContent = category[1];
      get('mistakeRule').textContent = category[3];
      menu.querySelectorAll('button').forEach(function (btn) {
        btn.setAttribute('aria-pressed', String(btn.dataset.kind === active));
      });
      var q = query.value.trim().toLowerCase();
      var key = pinyinKey(q);
      var single = singleKinds.includes(active);
      list.dataset.kind = active;
      list.classList.toggle('mistake-results-single', single);
      var matchGrade = grade.value ? 1 << (Number(grade.value) - 1) : 0;
      var matches = data.kinds[active].filter(function (row) {
        if (matchGrade && !Array.from(row[3]).some(function (ch) {
          return data.refs[ch] && (data.refs[ch][0] & matchGrade);
        })) return false;
        return !q || row[0].join(' ').includes(q) || row[3].includes(q) || row[2].includes(q) ||
          row[1].includes(q) || (!!key && pinyinKey(row[1] + ' ' + readingFor(row)).includes(key));
      });
      count.textContent = '共 ' + matches.length + (['shape', 'same', 'words'].includes(active) ? ' 组' : ' 条');
      list.textContent = '';
      matches.slice(0, limit).forEach(function (row) {
        var card = node('li', 'mistake-entry');
        var glyphs = node('div', 'mistake-glyphs');
        var pinyin = readingFor(row);
        if (pinyin || single) card.appendChild(node('div', 'mistake-pinyin', pinyin));
        row[0].forEach(function (label) {
          var isChar = Array.from(label).length === 1;
          if (isChar && data.refs[label]) {
            glyphs.appendChild(glyphButton(label));
          } else {
            glyphs.appendChild(node('span', isChar ? 'mistake-glyph' : 'mistake-word', label));
          }
        });
        card.appendChild(glyphs);
        if (active === 'write' && row[1]) card.appendChild(node('div', 'mistake-example', row[1]));
        if (row[2]) card.appendChild(node('p', 'mistake-note', row[2]));
        if (!Array.from(row[3]).some(function (ch) { return data.refs[ch]; })) {
          card.appendChild(node('span', 'mistake-extra', '拓展'));
        }
        if (row[4]) {
          var source = node('a', 'mistake-source', '读音出处');
          source.href = row[4];
          source.target = '_blank';
          source.rel = 'noopener noreferrer';
          card.appendChild(source);
        }
        if (active === 'places') {
          var practice = node('div', 'mistake-glyphs mistake-place-practice');
          Array.from(row[3]).filter(function (ch) { return data.refs[ch]; }).forEach(function (ch) {
            practice.appendChild(glyphButton(ch));
          });
          if (practice.children.length) card.appendChild(practice);
        }
        list.appendChild(card);
      });
      get('mistakeEmpty').hidden = !!matches.length;
      more.hidden = matches.length <= limit;
      if (!more.hidden) more.textContent = '再显示 ' + Math.min(pageSize, matches.length - limit) + ' 条';
    }

    function readingFor(row) {
      if (active !== 'write') return row[1];
      var ch = row[0][0];
      return textbookPinyin[ch] || extraWritePinyin[ch] || '';
    }

    function glyphButton(ch) {
      var btn = node('button', 'mistake-glyph', ch);
      btn.type = 'button';
      btn.dataset.hanzi = ch;
      btn.setAttribute('aria-label', ch + '，查看笔顺');
      return btn;
    }

    function setKind(kind) {
      active = kind;
      limit = pageSize;
      render();
    }

    menu.addEventListener('click', function (event) {
      var btn = event.target.closest('button[data-kind]');
      if (btn) setKind(btn.dataset.kind);
    });
    query.addEventListener('input', function () { setKind(active); });
    grade.addEventListener('change', function () { setKind(active); });
    more.addEventListener('click', function () {
      var firstNew = list.children.length;
      limit += pageSize;
      render();
      var item = list.children[firstNew];
      if (item) {
        item.tabIndex = -1;
        item.focus({ preventScroll: true });
        item.scrollIntoView({ block: 'nearest' });
      }
    });
    list.addEventListener('click', function (event) {
      var btn = event.target.closest('button[data-hanzi]');
      if (!btn || jumping) return;
      var ch = btn.dataset.hanzi;
      var ref = data.refs[ch];
      jumping = true;
      get('mistakeJumpStatus').textContent = '';
      Promise.resolve(openChar({ch: ch, kind: ref[1], book: ref[2], i: ref[3]})).then(function (ok) {
        if (!ok) get('mistakeJumpStatus').textContent = '未能加载该字的笔顺，请重试。';
      }, function () {
        get('mistakeJumpStatus').textContent = '未能加载该字的笔顺，请重试。';
      }).then(function () { jumping = false; });
    });
    render();
  };
})();
