const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const context = { window: { MATH_DATA: { books: [] } } };
vm.createContext(context);
for (const name of ["index.js", "g1.js", "g2.js", "g3.js", "g4.js", "g5.js", "g6.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, "assets", "data", name), "utf8"), context);
}
const data = context.window.MATH_DATA;
const escape = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[char]);

function page(book) {
  const grade = data.grades.find((item) => item.id === book.grade);
  const other = data.books.find((item) => item.grade === book.grade && item.id !== book.id);
  const otherUrl = `./${other.id}.html`;
  const bookUrl = (id) => `./g${book.grade}-${id}.html`;
  const units = book.units.map((unit) => `
    <article class="chapter" id="unit-${unit.no}">
      <span class="chapter-number">${unit.no}</span>
      <div class="chapter-content"><p class="category">${escape(unit.tag)}</p><h3>${escape(unit.title)}</h3><p>${escape(unit.brief)}</p>
        <ul>${unit.learn.map((point) => `<li>${escape(point)}</li>`).join("")}</ul><p class="teaching-note"><b>记住</b>${escape(unit.tip)}</p>
      </div>
    </article>`).join("");
  const formulas = book.formulas.map((formula, index) => `
    <article class="formula-detail" id="formula-${index + 1}">
      <span class="formula-number">${String(index + 1).padStart(2, "0")}</span>
      <div><h3>${escape(formula.title)}</h3><p class="math-expression">${escape(formula.expr)}</p>
        <p>${escape(formula.explain)}</p><p class="math-example"><b>试试看</b>${escape(formula.example)}</p>
      </div>
    </article>`).join("");
  const applications = book.applications.map((method, index) => `
    <details class="application" id="application-${index + 1}" ${index === 0 ? "open" : ""}>
      <summary><span class="chapter-number">${String(index + 1).padStart(2, "0")}</span><span><small>${escape(method.kind)}</small><strong>${escape(method.title)}</strong></span><span class="plus" aria-hidden="true">＋</span></summary>
      <div class="application-content">
        <p class="clue-label">先找线索</p><div class="clues">${method.clues.map((clue) => `<span>${escape(clue)}</span>`).join("")}</div>
        <p class="clue-label">分步想</p><ol>${method.steps.map((step) => `<li>${escape(step)}</li>`).join("")}</ol>
        <div class="worked-example"><b>例题</b><p>${escape(method.example.question)}</p>
          <p class="working">${escape(method.example.work)}</p><p class="answer">答：${escape(method.example.answer)}</p></div>
        <p class="teaching-note"><b>易错提醒</b>${escape(method.tip)}</p>
      </div>
    </details>`).join("");
  const quiz = book.quiz.map((question, index) => `
    <fieldset class="quiz-question" data-question="${index}" data-answer="${question.answer}">
      <legend><span>${index + 1} / ${book.quiz.length}</span>${escape(question.question)}</legend>
      <div class="quiz-options">${question.options.map((option, choice) => `<button type="button" data-choice="${choice}">${escape(option)}</button>`).join("")}</div>
      <p class="quiz-feedback" aria-live="polite" hidden></p>
      <p class="quiz-reason" hidden>${escape(question.explain)}</p>
    </fieldset>`).join("");
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
  <meta name="theme-color" content="#f8faf7">
  <meta name="description" content="${escape(grade.name)}数学${escape(book.term)}：知识主题、核心公式、应用题解法与练习。${escape(book.edition)}。">
  <title>${escape(grade.name)}数学${escape(book.term)} · 数学知识本</title>
  <link rel="stylesheet" href="../assets/style.css">
  <link rel="stylesheet" href="../assets/book.css">
</head>
<body>
  <a class="skip" href="#main">跳到主要内容</a>
  <header class="topbar"><div class="topbar-inner">
    <a class="home-link" href="../"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg><span>返回数学首页</span></a>
    <a class="brand" href="../"><span class="brand-mark" aria-hidden="true">＋</span><span>数学知识本</span></a>
    <a class="icon-button" href="../?grade=${book.grade}&amp;term=${book.term === "上册" ? "up" : "down"}&amp;view=formulas" aria-label="查看本册公式" title="查看本册公式"><span class="tool-mark" aria-hidden="true">f</span></a>
  </div></header>
  <main id="main" class="book-main">
    <nav class="crumbs" aria-label="页面路径"><a href="../">数学首页</a><span aria-hidden="true">/</span><strong>${escape(grade.name)} ${escape(book.term)}</strong></nav>
    <div class="book-heading"><p class="eyebrow">${escape(grade.name)} · ${escape(book.term)} <span class="edition-badge">${escape(book.edition)}</span></p>
      <h1>${escape(book.theme)}</h1><p>${escape(book.intro)}</p>
    </div>
    <div class="book-toolbar"><div class="book-switcher" aria-label="选择册次">
      <a href="${bookUrl("up")}" ${book.term === "上册" ? 'aria-current="page"' : ""}>上册</a>
      <a href="${bookUrl("down")}" ${book.term === "下册" ? 'aria-current="page"' : ""}>下册</a></div>
      <span class="edition-note">${escape(book.editionNote)}</span>
    </div>
    <nav class="page-toc" aria-label="本册内容"><a href="#units">知识主题</a><a href="#formulas">核心公式</a><a href="#applications">应用题解法</a><a href="#quiz">练一练</a></nav>
    <section class="book-section" id="units"><div class="section-heading"><p class="eyebrow">01 / 知识主题</p><h2>这一册，学什么</h2><p>先看主要内容和易错点，遇到不懂的再往下查公式、看例题。</p></div><div class="chapter-list">${units}</div></section>
    <section class="book-section" id="formulas"><div class="section-heading"><p class="eyebrow">02 / 核心公式</p><h2>想明白，再记住</h2><p>每条关系式后面都有简短解释，别急着背。</p></div><div class="formula-detail-list">${formulas}</div></section>
    <section class="book-section" id="applications"><div class="section-heading"><p class="eyebrow">03 / 应用题解法</p><h2>看懂数量关系</h2><p>先找到条件与问题，再把数量关系写出来。</p></div>
      <div class="solve-steps"><span><b>1</b> 圈条件</span><span><b>2</b> 找关系</span><span><b>3</b> 列式算</span><span><b>4</b> 查单位</span></div>
      <div class="application-list">${applications}</div></section>
    <section class="book-section" id="quiz"><div class="section-heading"><p class="eyebrow">04 / 随堂自测</p><h2>做三题，验收一下</h2><p>选择后会显示正确答案和计算理由。</p></div>
      <div class="quiz-list">${quiz}</div><div class="quiz-summary"><p id="quizProgress" aria-live="polite">已完成 0 / ${book.quiz.length} 题</p><button id="resetQuiz" class="reset-quiz" type="button">重新练习</button></div></section>
    <div class="next-book"><span>继续学习</span><a href="${otherUrl}">${escape(grade.name)}${escape(other.term)}：${escape(other.theme)} →</a></div>
    <aside class="source-note"><strong>教材说明</strong><p>${escape(data.sourceNote)}</p><a href="https://jc.pep.com.cn/" target="_blank" rel="noopener noreferrer">到人教社教材平台核对课本 ↗</a></aside>
  </main>
  <footer class="footer"><span>${escape(grade.name)}数学${escape(book.term)}</span><a href="../../">返回学习空间</a></footer>
  <script src="../assets/book.js"></script>
</body>
</html>
`;
}

const outDir = path.join(root, "books");
fs.mkdirSync(outDir, { recursive: true });
for (const book of data.books) fs.writeFileSync(path.join(outDir, `${book.id}.html`), page(book), "utf8");
console.log(`Generated ${data.books.length} books in ${outDir}`);
