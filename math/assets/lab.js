(function () {
  "use strict";
  const escape = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);
  const catalog = [
    {id:"g1-up",kind:"addition",title:"苹果去野餐",topic:"加法 · 整体与部分",story:"篮子里有3个苹果，又来了几个？先猜一猜，合在一起会有多少个。",label:"又来了",unit:"个",min:1,max:7,value:4,action:"把苹果合起来",after:"分回两只篮子",answer:n=>n+3,question:"合起来一共有多少个苹果？",formula:n=>`3 + ${n} = ${n+3}`,rule:"加法，就是把两个部分合成一个整体。",explain:n=>`原来3个，又来了${n}个。合起来是${n+3}个。改变一部分，整体也会跟着变。`},
    {id:"g1-down",kind:"subtract",title:"十个一捆，减法不难",topic:"退位减法 · 破十法",story:"13根小棒，拿走一些。先从一捆10根里拿，再加上旁边的3根。",label:"拿走",unit:"根",min:6,max:9,value:8,action:"从10根里拿走",after:"把小棒放回来",answer:n=>13-n,question:"13根拿走这些，还剩多少根？",formula:n=>`13 − ${n} = (10 − ${n}) + 3 = ${13-n}`,rule:"把13分成10和3，先用10减，再加上3。",explain:n=>`先算10−${n}=${10-n}，再把剩下的${10-n}根和旁边3根合起来，共${13-n}根。`},
    {id:"g2-up",kind:"multiply",title:"小熊的点心盘",topic:"乘法 · 几个几",story:"每盘放3块点心。盘数变了，总数怎样变化？每盘同样多，才能这样乘。",label:"盘数",unit:"盘",min:1,max:6,value:4,action:"排成小方阵",after:"放回点心盘",answer:n=>3*n,question:"这些点心一共有多少块？",formula:n=>`每盘3块 × ${n}盘 = ${3*n}块`,rule:"几个相同加数的和，可以用乘法计算。",explain:n=>`${n}个3相加，写作3×${n}=${3*n}。每多一盘，就多3块。`},
    {id:"g2-down",kind:"divide",title:"17颗糖，怎么分？",topic:"有余数的除法",story:"把17颗糖按每袋一样多装起来。装不满一袋的糖，就是余数。",label:"每袋",unit:"颗",min:2,max:6,value:4,action:"装进小袋子",after:"倒回大盘子",answer:n=>17%n,question:"装完这些袋子后，还剩多少颗？",formula:n=>`17 ÷ ${n} = ${Math.floor(17/n)}（袋）…… ${17%n}（颗）`,rule:"余数一定比除数小，否则还能再装一袋。",explain:n=>`每袋${n}颗，能装满${Math.floor(17/n)}袋，剩${17%n}颗。检查：${Math.floor(17/n)}×${n}+${17%n}=17。`},
    {id:"g3-up",kind:"fraction",title:"巧克力分一分",topic:"分数 · 平均分",story:"同一块巧克力平均分成6份。拿走几份，就表示这块巧克力的六分之几。",label:"拿取",unit:"份",min:1,max:6,value:2,action:"拿出选中的几份",after:"放回整块巧克力",answer:n=>n,question:"这个分数的分子应该是多少？",formula:n=>`平均6份，取${n}份 → ${n}/6`,rule:"分母说平均分成几份，分子说取了几份。",explain:n=>`每一份都是整块的1/6。取${n}份就是${n}/6。注意：每份必须同样大。`},
    {id:"g3-down",kind:"area",title:"小花园，围还是铺？",topic:"长方形 · 周长与面积",story:"长固定4厘米。围栅栏看外面一圈，铺草坪看里面的方格。两者单位也不同。",label:"宽",unit:"厘米",min:1,max:6,value:3,action:"沿边走一圈",after:"看看里面的方格",answer:n=>4*n,question:"每个方格1平方厘米，草坪面积是多少？",formula:n=>`周长 (4 + ${n}) × 2 = ${2*(4+n)}厘米\n面积 4 × ${n} = ${4*n}平方厘米`,rule:"周长是一圈的长度，面积是面的大小。",explain:n=>`里面有4列、${n}行，共${4*n}格。边界是两条长、两条宽，共${2*(4+n)}厘米。`},
    {id:"g4-up",kind:"price",title:"文具店小掌柜",topic:"单价 · 数量 · 总价",story:"每本笔记本8元。单价不变，增加一本，就增加一份8元。",label:"购买",unit:"本",min:1,max:10,value:4,action:"算一算总价",after:"回到购物清单",answer:n=>8*n,question:"这些笔记本总共要付多少元？",formula:n=>`8元/本 × ${n}本 = ${8*n}元`,rule:"单价乘数量得到总价，单位也要对应。",explain:n=>`${n}本，每本8元，共${8*n}元。总价÷数量，又能算回单价8元/本。`},
    {id:"g4-down",kind:"average",title:"果汁怎样分才公平？",topic:"平均数 · 移多补少",story:"三杯果汁高低不同。保持总量不变，把多的倒给少的，最后每杯一样多。",label:"第三杯",unit:"份",min:1,max:4,value:2,display:n=>`${n*3}份`,action:"移多补少，分一样多",after:"看看原来的三杯",answer:n=>n+2,question:"平均以后，每杯应该有多少份？",formula:n=>`(2 + 4 + ${3*n}) ÷ 3 = ${n+2}份`,rule:"平均数=总数÷份数。分配前后，总量不变。",explain:n=>`总共${6+3*n}份，平均分给3杯，每杯${n+2}份；检查3×${n+2}=${6+3*n}。`},
    {id:"g5-up",kind:"triangle",title:"两个三角形的秘密",topic:"三角形面积 · 转化",story:"用两个完全一样的直角三角形拼成长方形。一个三角形，只占这个长方形的一半。",label:"高",unit:"厘米",min:2,max:8,value:5,action:"再拼上一个相同三角形",after:"只看原来的一个",answer:n=>4*n,question:"原来一个三角形的面积是多少平方厘米？",formula:n=>`8 × ${n} ÷ 2 = ${4*n}平方厘米`,rule:"底×高是拼成的长方形面积，所以三角形还要除以2。",explain:n=>`拼成的长方形面积是8×${n}=${8*n}平方厘米，一个三角形是它的一半：${4*n}平方厘米。`},
    {id:"g5-down",kind:"volume",title:"小方块盖房子",topic:"长方体体积 · 单位立方体",story:"每个小方块都是1立方厘米。每层3排、每排2个，叠起来看看一共有多少个。",label:"高度",unit:"层",min:1,max:5,value:3,action:"突出最上面一层",after:"看看完整长方体",answer:n=>6*n,question:"这些小方块的总体积是多少立方厘米？",formula:n=>`3 × 2 × ${n} = ${6*n}立方厘米`,rule:"一层的个数×层数，就是长×宽×高。",explain:n=>`每层3×2=6个，${n}层一共6×${n}=${6*n}个。每个1立方厘米，所以体积${6*n}立方厘米。`},
    {id:"g6-up",kind:"circle",title:"圆，剪一剪就懂了",topic:"圆的面积 · 转化",story:"把圆分成许多相同的扇形，交错拼一拼。分得越细，越接近一个长方形。",label:"半径",unit:"厘米",min:1,max:5,value:3,action:"把扇形交错拼起来",after:"重新拼成一个圆",answer:n=>n*n,question:"面积是“几π”平方厘米？",formula:n=>`S = π × ${n}² = ${n*n}π平方厘米`,rule:"近似长方形的长是圆周长的一半πr，宽是r，所以S=πr²。",explain:n=>`半径${n}厘米，πr×r=π×${n}×${n}=${n*n}π平方厘米。图中只分16份，所以边缘仍是弧线。`},
    {id:"g6-down",kind:"discount",title:"折扣不是减几元",topic:"百分数应用 · 折扣",story:"原价200元，平均分成10份，每份20元。几折就是付其中的几份。",label:"折扣",unit:"折",min:1,max:10,value:8,action:"把原价分成10份",after:"看看价格标签",answer:n=>20*n,question:"这个折扣下，应该付多少元？",formula:n=>`200 × ${10*n}% = ${20*n}元`,rule:"几折就是原价的百分之几十，不是减去几元。",explain:n=>`${n}折=原价的${n*10}%。付${n}份，每份20元，共${20*n}元，便宜${200-20*n}元。`}
  ];
  const memory = new Map();
  let timer = null, controller = null, mounted = null, current = null, state = null;
  const reduce = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  const tokens = (count, fn) => Array.from({length:count}, (_,i) => fn(i)).join("");
  const text = (x,y,value,cls="") => `<text x="${x}" y="${y}" class="${cls}" text-anchor="middle">${escape(value)}</text>`;
  const dot = (x,y,id,color="mint",size=10) => `<g data-key="${id}"><circle cx="${x}" cy="${y}" r="${size}" class="ml-dot ${color}"/><circle cx="${x-3}" cy="${y-3}" r="2.4" fill="white" opacity=".55"/>${id.startsWith('apple')?`<path d="M${x} ${y-size+1}q-2-9 8-7q0 7-8 7" fill="#579b77"/>`:''}</g>`;
  const svg = (body,label) => `<svg class="ml-svg" viewBox="0 0 320 240" role="img" aria-label="${escape(label)}">${body}</svg>`;
  function scene(lesson,n,action) {
    const kind=lesson.kind;
    if(kind==="addition") {
      const total=n+3;
      const bowls=action?'<rect x="24" y="55" width="272" height="137" rx="28" class="ml-tray"/>':'<rect x="16" y="55" width="128" height="137" rx="24" class="ml-tray"/><rect x="176" y="55" width="128" height="137" rx="24" class="ml-tray orange"/>';
      const dots=tokens(total,i=>{const orange=i>=3, pos=action?i:(orange?i-3:i), x=action?50+(pos%5)*55:(orange?199:43)+(pos%3)*36, y=action?100+Math.floor(pos/5)*48:90+Math.floor(pos/3)*40;return dot(x,y,`apple${i}`,orange?"orange":"mint",12)});
      return svg(bowls+dots+(action?text(160,222,`合起来 ${total} 个`):text(80,222,"原来 3 个")+text(240,222,`又来 ${n} 个`))+(!action?text(160,125,"＋","ml-big"):""),`原来3个苹果，又来${n}个，共${total}个`);
    }
    if(kind==="subtract") {
      return svg('<rect x="20" y="30" width="280" height="120" rx="18" class="ml-tray"/>'+tokens(13,i=>{const x=40+(i%10)*26,y=i<10?82:193,taken=action&&i<n;return `<g data-key="stick${i}" opacity="${taken?.2:1}"><rect x="${x}" y="${y-28}" width="8" height="53" rx="4" class="ml-fill ${i<10?'mint':'orange'}"/>${taken?`<path d="M${x-6} ${y+5}l20-15" class="ml-cross"/>`:""}</g>`})+text(160,29,"一捆 10 根")+text(196,198,"旁边还有 3 根")+text(160,235,action?`10 − ${n}，再加 3 → ${13-n}`:"先把13分成10和3"),`13根小棒，拿走${n}根，剩${13-n}根`);
    }
    if(kind==="multiply") {
      const trays=action?'':tokens(n,i=>`<rect x="${13+(i%3)*102}" y="${22+Math.floor(i/3)*96}" width="90" height="76" rx="17" class="ml-tray"/>`);
      return svg(trays+tokens(3*n,i=>{const group=Math.floor(i/3),j=i%3,x=action?160-(n-1)*19+(i%n)*38:37+(group%3)*102+(j%2)*36,y=action?62+Math.floor(i/n)*50:47+Math.floor(group/3)*96+Math.floor(j/2)*27;return dot(x,y,`cake${i}`,group%2?"orange":"mint",11)})+text(160,230,`${n}盘，每盘3块，共${3*n}块`),`${n}盘点心，每盘3块，总数${3*n}`);
    }
    if(kind==="divide") {
      const groups=Math.floor(17/n),r=17%n;
      const trays=action?tokens(groups,g=>`<rect x="${9+(g%4)*77}" y="${18+Math.floor(g/4)*78}" width="69" height="65" rx="13" class="ml-tray"/>`):'<rect x="23" y="25" width="274" height="165" rx="25" class="ml-tray"/>';
      const dots=tokens(17,i=>{const g=Math.floor(i/n),j=i%n,left=action&&g>=groups;let x,y;if(!action){x=61+(i%5)*49;y=62+Math.floor(i/5)*35;}else if(left){x=74+(i-groups*n)*24;y=205;}else{x=26+(g%4)*77+(j%3)*17;y=39+Math.floor(g/4)*78+Math.floor(j/3)*23;}return dot(x,y,`sweet${i}`,left?"orange":"mint",7)});
      return svg(trays+dots+text(160,235,action?`${groups}袋装满，余下${r}颗`:`17颗糖，每袋装${n}颗`),`17颗糖，每袋${n}颗，装满${groups}袋，剩${r}颗`);
    }
    if(kind==="fraction") {
      return svg(tokens(6,i=>{const selected=i<n,y=70+(action&&selected?-16:0);return `<g data-key="choco${i}"><rect x="${24+i*46}" y="${y}" width="42" height="79" rx="6" class="ml-choco ${selected?'selected':''}"/><rect x="${30+i*46}" y="${y+7}" width="30" height="64" rx="3" fill="none" stroke="white" opacity=".25"/>${text(45+i*46,y+102,"1/6")}</g>`})+text(160,33,"同一块巧克力，平均分成6份")+text(160,225,`取${n}份，是整块的 ${n}/6`),`巧克力平均分成6份，取${n}份，是${n}/6`);
    }
    if(kind==="area") {
      const w=4*27,h=n*27,x=106,y=35;
      return svg(tokens(4*n,i=>`<rect x="${x+(i%4)*27}" y="${y+Math.floor(i/4)*27}" width="27" height="27" class="ml-cell"/>`)+`<rect x="${x}" y="${y}" width="${w}" height="${h}" class="ml-outline ${action?'walk':''}"/>`+text(160,22,"长 4 厘米")+text(46,y+h/2,`宽${n}厘米`)+text(160,226,action?`围一圈：${2*(4+n)}厘米`:`铺里面：${4*n}平方厘米`),`长4厘米宽${n}厘米，周长${2*(4+n)}厘米，面积${4*n}平方厘米`);
    }
    if(kind==="price") {
      return svg(tokens(n,i=>{const x=28+(i%5)*58,y=33+Math.floor(i/5)*82;return `<g data-key="book${i}"><rect x="${x}" y="${y}" width="44" height="64" rx="5" class="ml-fill ${i%2?'orange':'mint'}"/><path d="M${x+8} ${y}v64" stroke="white" opacity=".55"/>${text(x+26,y+36,"8元")}</g>`})+text(160,226,action?`结账：${8*n}元`:`${n}本笔记本，每本8元`),`${n}本笔记本，每本8元，共${8*n}元`);
    }
    if(kind==="average") {
      const levels=action?[n+2,n+2,n+2]:[2,4,n*3];
      return svg(tokens(3,i=>{const x=39+i*91,height=levels[i]*10;return `<rect x="${x}" y="38" width="58" height="145" rx="7" class="ml-glass"/><rect data-key="juice${i}" x="${x+5}" y="${178-height}" width="48" height="${height}" rx="4" class="ml-juice"/>${tokens(12,j=>`<path d="M${x+1} ${178-j*10}h7" stroke="#9bb8bd"/>`)}${text(x+29,207,`${levels[i]}份`)}`})+(action?`<path d="M28 ${178-(n+2)*10}H292" class="ml-dash"/>`:"")+text(160,235,action?"每杯一样多，总量不变":"总量不变，移多补少"),`三杯原来2、4、${n*3}份，平均后每杯${n+2}份`);
    }
    if(kind==="triangle") {
      const x=72,w=176,h=n*22,y=205;
      return svg((action?`<path d="M${x} ${y-h}H${x+w}V${y}Z" class="ml-fill orange ml-arrive"/>`:"")+`<path d="M${x} ${y}H${x+w}L${x} ${y-h}Z" class="ml-fill mint"/><path d="M${x} ${y}V${y-h}" class="ml-dash"/>`+text(160,229,"底 8 厘米")+text(41,y-h/2,`高 ${n}`,"ml-small")+text(160,18,action?"两个相同三角形 → 长方形":"一个三角形占多少？"),`底8厘米高${n}厘米的直角三角形，两个拼成面积${8*n}平方厘米的长方形`);
    }
    if(kind==="volume") {
      const body=[];
      for(let z=0;z<n;z++)for(let y=1;y>=0;y--)for(let x=0;x<3;x++){
        const px=124+(x-y)*25,py=184+(x+y)*12-z*25;
        body.push(`<g data-key="cube${x}-${y}-${z}" opacity="${action&&z<n-1?.24:1}"><path d="M${px} ${py}l25 12v-25l-25-12Z" fill="#80bcb0" stroke="#fff"/><path d="M${px+25} ${py+12}l25-12v-25l-25 12Z" fill="#4b948a" stroke="#fff"/><path d="M${px} ${py-25}l25-12 25 12-25 12Z" fill="#c7e7dc" stroke="#fff"/></g>`);
      }
      return svg(body.join("")+text(160,25,`每层 3×2=6 个，叠 ${n} 层`)+text(160,235,`每个小方块 1立方厘米 → 共${6*n}立方厘米`),`每层6个单位立方体，${n}层体积${6*n}立方厘米`);
    }
    if(kind==="circle") {
      const r=16*n,N=16,a=Math.PI/N,w=2*r*Math.sin(a),left=(320-(N/2+.5)*w)/2;
      const body=tokens(N,i=>{
        let cx=160,cy=120,angle=i*2*Math.PI/N;
        if(action){cx=left+(Math.floor(i/2)+(i%2?1:.5))*w;cy=i%2?168-r*Math.cos(a):168;angle=i%2?Math.PI/2:-Math.PI/2;}
        const p1=[cx+r*Math.cos(angle-a),cy+r*Math.sin(angle-a)],p2=[cx+r*Math.cos(angle+a),cy+r*Math.sin(angle+a)];
        return `<g data-key="sector${i}"><path d="M${cx} ${cy}L${p1}A${r} ${r} 0 0 1 ${p2}Z" fill="${i%2?'#eebda0':'#8ac9b6'}" stroke="white" stroke-width=".7"/></g>`;
      });
      return svg(body+(action?text(160,212,"长约 πr，宽约 r"):text(160,224,`半径 ${n} 厘米`))+(!action?`<path d="M160 120h${r}" class="ml-dash"/>`:"")+text(160,24,action?"分得越细，越接近长方形":"一个圆分成16个扇形"),`圆半径${n}厘米，分成16扇形，${action?'交错排列近似长方形':'原位组成圆'}，面积${n*n}π平方厘米`);
    }
    return svg(`<rect x="29" y="31" width="262" height="105" rx="15" class="ml-tray"/>`+text(160,56,"原价 200 元")+(action?tokens(10,i=>`<rect x="${34+i*25.2}" y="86" width="22.5" height="33" rx="3" class="ml-fill ${i<n?'mint':'pale'}"/>`):text(160,109,`现价 ${20*n} 元`,"ml-price"))+text(160,169,`${n}折 = ${n*10}%`)+text(160,211,action?`付${n}份 × 每份20元 = ${20*n}元`:`便宜了 ${200-20*n} 元`),`原价200元，${n}折，现价${20*n}元，便宜${200-20*n}元`);
  }

  function render(bookId) {
    const lesson=catalog.find(item=>item.id===bookId);
    return `<section class="ml-classroom" data-lesson="${lesson.id}" aria-labelledby="mlTitle">
      <div class="ml-heading"><div><p class="eyebrow">本册示范小课 · 看见数学</p><h3 id="mlTitle">${lesson.title}</h3></div><span class="ml-topic">${lesson.topic}</span></div>
      <div class="ml-route" aria-label="学习步骤"><button type="button" data-phase="0">01 看一看</button><button type="button" data-phase="1">02 动手试</button><button type="button" data-phase="2">03 说规律</button></div>
      <div class="ml-layout"><div class="ml-theater"><div class="ml-scene"></div><div class="ml-caption"><span class="ml-guide" aria-hidden="true">?</span><p></p></div></div>
      <div class="ml-workbench"><p class="ml-control-title">动一动，看看会发生什么</p><div class="ml-value-row"><label for="mlRange">${lesson.label}</label><output id="mlValue" for="mlRange"></output></div>
        <div class="ml-adjust"><button type="button" data-delta="-1" aria-label="减少数值">−</button><input id="mlRange" type="range" min="${lesson.min}" max="${lesson.max}" value="${lesson.value}"><button type="button" data-delta="1" aria-label="增加数值">＋</button></div>
        <button class="ml-action" type="button" data-action="transform">${lesson.action}</button>
        <div class="ml-player"><button type="button" data-action="play" aria-pressed="false">播放变化</button><button type="button" data-action="reset">重来一次</button></div>
        <div class="ml-predict"><p class="ml-question"></p><div class="ml-choices"></div><p class="ml-feedback" role="status"></p><button class="ml-retry" type="button" data-action="retry" hidden>再想一次</button></div>
      </div></div>
      <div class="ml-rule" hidden><span>原来是这样</span><strong class="ml-equation"></strong><p class="ml-explanation"></p><p class="ml-takeaway"></p></div>
      <button class="ml-reveal" type="button" data-action="reveal">看看数量关系 →</button><p class="ml-note">每册先用一个核心小实验帮助理解；更多主题可在知识地图里继续学习。</p>
    </section>`;
  }
  function stop() {
    if(timer)clearInterval(timer);
    timer=null;
    if(controller)controller.abort();
    controller=null;
    mounted=null;
  }
  function stopPlayback() {
    if(timer)clearInterval(timer);
    timer=null;
    const btn=mounted?.querySelector('[data-action="play"]');
    if(btn){btn.textContent="播放变化";btn.setAttribute("aria-pressed","false");}
  }
  function draw(animate=true) {
    if(!mounted||!current)return;
    const root=mounted,lesson=current,s=state;
    const canvas=root.querySelector('.ml-scene');
    const old=new Map([...canvas.querySelectorAll('[data-key]')].map(el=>[el.dataset.key,el.getBoundingClientRect()]));
    canvas.innerHTML=scene(lesson,s.n,s.action);
    if(animate&&!reduce()) {
      canvas.querySelectorAll('[data-key]').forEach(el=>{const previous=old.get(el.dataset.key),now=el.getBoundingClientRect();if(previous){const dx=previous.x-now.x,dy=previous.y-now.y;if(Math.abs(dx)+Math.abs(dy)>1)el.animate([{transform:`translate(${dx}px,${dy}px)`},{transform:'translate(0,0)'}],{duration:400,easing:'cubic-bezier(.2,.75,.2,1)'});}else el.animate([{opacity:0},{opacity:1}],{duration:280});});
    }
    root.querySelector('#mlRange').value=s.n;
    root.querySelector('#mlRange').setAttribute('aria-valuetext',lesson.display?lesson.display(s.n):`${s.n}${lesson.unit}`);
    root.querySelector('#mlValue').textContent=lesson.display?lesson.display(s.n):`${s.n}${lesson.unit}`;
    root.querySelector('.ml-caption p').textContent=s.phase===0?lesson.story:s.phase===1?'试着改变数值，再点绿色按钮。图中的数量怎样变化？数一数，猜一猜。':lesson.explain(s.n);
    root.querySelector('[data-action="transform"]').textContent=s.action?lesson.after:lesson.action;
    root.querySelector('[data-action="transform"]').setAttribute('aria-pressed',s.action);
    root.querySelector('[data-delta="-1"]').disabled=s.n===lesson.min;
    root.querySelector('[data-delta="1"]').disabled=s.n===lesson.max;
    root.querySelectorAll('[data-phase]').forEach(btn=>{const active=Number(btn.dataset.phase)===s.phase;btn.setAttribute('aria-pressed',active);});
    root.querySelector('.ml-rule').hidden=s.phase<2;
    root.querySelector('.ml-equation').textContent=lesson.formula(s.n);
    root.querySelector('.ml-explanation').textContent=lesson.explain(s.n);
    root.querySelector('.ml-takeaway').textContent=lesson.rule;
    root.querySelector('[data-action="reveal"]').hidden=s.phase===2;
    root.querySelector('.ml-question').textContent=`猜一猜：${lesson.question}`;
    const correct=lesson.answer(s.n);
    const offsets=[-1,0,1];
    const answers=[...new Set(offsets.map(d=>Math.max(0,correct+d)))];
    if(answers.length<3)answers.push(correct+2);
    root.querySelector('.ml-choices').innerHTML=answers.map(value=>`<button type="button" data-guess="${value}" ${s.guess!==null?'disabled':''} class="${s.guess!==null&&value===correct?'correct':s.guess===value?'wrong':''}">${value}</button>`).join('');
    root.querySelector('.ml-feedback').textContent=s.guess===null?'试着先判断，再打开关系式。':s.guess===correct?'答对了！再说一说你是怎么想的。':`这次是${correct}。看图数一数，或查看下面的数量关系。`;
    root.querySelector('[data-action="retry"]').hidden=s.guess===null||s.guess===correct;
  }
  function mount(root,bookId) {
    stop();
    mounted=root.querySelector('.ml-classroom');
    if(!mounted)return;
    current=catalog.find(item=>item.id===bookId);
    if(!memory.has(bookId))memory.set(bookId,{n:current.value,action:false,phase:0,guess:null});
    state=memory.get(bookId);
    controller=new AbortController();
    const signal=controller.signal;
    mounted.addEventListener('input',event=>{
      if(event.target.id!=='mlRange')return;
      stopPlayback();state.n=Number(event.target.value);state.phase=Math.max(1,state.phase);state.guess=null;draw();
    },{signal});
    mounted.addEventListener('click',event=>{
      const btn=event.target.closest('button');if(!btn)return;
      if(btn.dataset.delta){stopPlayback();state.n=Math.min(current.max,Math.max(current.min,state.n+Number(btn.dataset.delta)));state.guess=null;state.phase=Math.max(1,state.phase);draw();}
      else if(btn.hasAttribute('data-phase')){stopPlayback();state.phase=Number(btn.dataset.phase);if(state.phase===0)state.action=false;draw(false);}
      else if(btn.hasAttribute('data-guess')){stopPlayback();state.guess=Number(btn.dataset.guess);draw(false);}
      else if(btn.dataset.action==='retry'){state.guess=null;draw(false);}
      else if(btn.dataset.action==='transform'){stopPlayback();state.action=!state.action;state.phase=Math.max(1,state.phase);draw();}
      else if(btn.dataset.action==='reveal'){stopPlayback();state.phase=2;draw(false);}
      else if(btn.dataset.action==='reset'){stopPlayback();Object.assign(state,{n:current.value,action:false,phase:0,guess:null});draw();}
      else if(btn.dataset.action==='play'){
        if(timer){stopPlayback();return;}
        state.phase=1;state.action=true;state.guess=null;
        if(state.n>=current.max)state.n=current.min;
        draw();
        if(reduce()){state.n=current.max;state.phase=2;draw(false);return;}
        btn.textContent='暂停变化';btn.setAttribute('aria-pressed','true');
        timer=setInterval(()=>{if(state.n>=current.max){stopPlayback();state.phase=2;draw(false);return;}state.n++;draw();},1000);
      }
    },{signal});
    draw(false);
  }
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stopPlayback();});
  window.MathLab={catalog,render,mount,stop,pause:stopPlayback};
})();
