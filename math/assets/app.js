(function () {
  "use strict";

  const data = window.MATH_DATA;
  const books = data.books;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const escape = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
  const bookUrl = (book) => `./books/${book.id}.html`;
  const params = new URLSearchParams(location.search);
  const saved = (() => { try { return localStorage.getItem("math-book"); } catch (_) { return null; } })();
  const initial = books.find((book) => book.id === `g${params.get("grade")}-${params.get("term")}`)
    || books.find((book) => book.id === saved) || books[0];
  const views = ["units", "lab", "formulas", "methods", "quiz"];
  const state = { grade: initial.grade, term: initial.term === "上册" ? "up" : "down", view: views.includes(params.get("view")) ? params.get("view") : "lab" };

  function currentBook() { return books.find((book) => book.id === `g${state.grade}-${state.term}`); }
  function gradeName(grade) { return data.grades.find((item) => item.id === grade).name; }
  function syncUrl() {
    const url = new URL(location.href);
    url.searchParams.set("grade", state.grade);
    url.searchParams.set("term", state.term);
    url.searchParams.set("view", state.view);
    history.replaceState(null, "", url);
    try { localStorage.setItem("math-book", currentBook().id); } catch (_) { /* Storage may be disabled. */ }
  }

  function renderPicker() {
    $("#gradeChoices").innerHTML = data.grades.map((item) => `<button type="button" data-grade="${item.id}" aria-pressed="${item.id === state.grade}">${escape(item.name)}</button>`).join("");
    $("#termChoices").innerHTML = [["up", "上册"], ["down", "下册"]].map(([value, label]) =>
      `<button type="button" data-term="${value}" aria-pressed="${value === state.term}">${label}</button>`).join("");
  }

  function renderUnits(book) {
    return `<div class="content-heading"><div><p class="eyebrow">${book.units.length} 个知识主题</p><h3>本册学什么</h3></div></div>
      <button class="ml-invite" type="button" data-open-lab>先动手：${window.MathLab.catalog.find(item=>item.id===book.id).title} <span>去小课堂 →</span></button>
      <div class="learning-layout"><div class="unit-list">${book.units.map((unit) => `
        <details class="unit-row" id="unit-${unit.no}"><summary>
          <span class="unit-number">${unit.no}</span><span class="unit-copy"><strong>${escape(unit.title)}</strong><small>${escape(unit.brief)}</small></span>
          <span class="unit-arrow" aria-hidden="true">＋</span>
        </summary><div class="unit-detail"><ul>${unit.learn.map((point) => `<li>${escape(point)}</li>`).join("")}</ul>
          <p><b>记住</b> ${escape(unit.tip)}</p><a href="${bookUrl(book)}#unit-${unit.no}">在册页查看 →</a></div></details>`).join("")}</div>
        <aside class="first-step"><p class="eyebrow">试着记住这一条</p><h4>${escape(book.formulas[0].title)}</h4>
          <div class="first-formula">${escape(book.formulas[0].expr)}</div>
          ${book.id === "g1-up" ? '<img class="part-whole" src="./assets/part-whole.svg" alt="线段图：左边3份、右边2份，合起来是5份" width="360" height="130">' : ""}
          <p>${escape(book.formulas[0].explain)}</p>
          <a href="${bookUrl(book)}#formulas">查看本册全部公式 →</a></aside></div>`;
  }

  function renderFormulas(book) {
    return `<div class="content-heading"><div><p class="eyebrow">${book.formulas.length} 条核心公式</p><h3>公式与例子</h3></div></div>
      <div class="formula-list">${book.formulas.map((formula, index) => `<article class="formula-row" id="formula-${index + 1}">
        <span class="formula-index">${String(index + 1).padStart(2, "0")}</span><div><h4>${escape(formula.title)}</h4>
        <p class="formula-expression">${escape(formula.expr)}</p><p>${escape(formula.explain)}</p>
        <small>例如：${escape(formula.example)}</small></div></article>`).join("")}</div>`;
  }

  function renderMethods(book) {
    return `<div class="content-heading"><div><p class="eyebrow">${book.applications.length} 种应用题</p><h3>先想关系，再列算式</h3></div></div>
      <div class="solve-steps" aria-label="应用题解题步骤"><span><b>1</b> 圈出已知和问题</span><span><b>2</b> 画图或写数量关系</span><span><b>3</b> 分步列式计算</span><span><b>4</b> 检查结果与单位</span></div>
      <div class="method-list">${book.applications.map((method, index) => `<details class="method-item" id="method-${index + 1}" ${index === 0 ? "open" : ""}>
        <summary><span class="method-index">${String(index + 1).padStart(2, "0")}</span><span><strong>${escape(method.title)}</strong><small>${escape(method.kind)} · ${method.clues.map(escape).join(" / ")}</small></span><span class="expand-mark" aria-hidden="true">＋</span></summary>
        <div class="method-body"><ol>${method.steps.map((step) => `<li>${escape(step)}</li>`).join("")}</ol>
          <div class="worked-example"><p class="example-label">例题</p><p>${escape(method.example.question)}</p>
            <strong>${escape(method.example.work)}</strong><p class="answer">答：${escape(method.example.answer)}</p></div>
          <p class="reminder"><b>别忘记</b> ${escape(method.tip)}</p></div></details>`).join("")}</div>`;
  }

  function renderLab(book) {
    return window.MathLab.render(book.id);
  }
  function stopLabPlayback() { window.MathLab.stop(); }

  function renderQuiz(book) {
    return `<div class="content-heading"><div><p class="eyebrow">3 道小练习</p><h3>做一做</h3></div></div>
      <div class="quiz-list">${book.quiz.map((question, index) => `<fieldset class="quiz-question" data-question="${index}">
        <legend><span>${index + 1} / ${book.quiz.length}</span>${escape(question.question)}</legend>
        <div class="quiz-options">${question.options.map((option, choice) => `<button type="button" data-choice="${choice}">${escape(option)}</button>`).join("")}</div>
        <p class="quiz-feedback" aria-live="polite"></p></fieldset>`).join("")}</div>
      <div class="quiz-summary"><p id="quizProgress" aria-live="polite">已完成 0 / ${book.quiz.length} 题</p><button class="reset-quiz" id="resetQuiz" type="button">重新练习</button></div>`;
  }

  function render() {
    window.MathLab.stop();
    const book = currentBook();
    document.body.classList.toggle("view-lab", state.view === "lab");
    $$("[data-grade]").forEach((button) => button.setAttribute("aria-pressed", button.dataset.grade === String(state.grade)));
    $$("[data-term]").forEach((button) => button.setAttribute("aria-pressed", button.dataset.term === state.term));
    $$("#studyTabs button").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.view === state.view);
      if (button.dataset.view === state.view) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
    $("#editionLabel").textContent = book.edition;
    $("#bookMeta").textContent = `${gradeName(book.grade)} · ${book.term} · ${book.edition}`;
    $("#bookTitle").textContent = book.theme;
    $("#bookIntro").textContent = book.intro;
    $("#bookLink").href = bookUrl(book);
    $("#studyContent").innerHTML = ({ units: renderUnits, lab: renderLab, formulas: renderFormulas, methods: renderMethods, quiz: renderQuiz })[state.view](book);
    if (state.view === "lab") window.MathLab.mount($("#studyContent"), book.id);
    const rail = $("#gradeChoices");
    const selected = $("#gradeChoices [aria-pressed=true]");
    const railBox = rail.getBoundingClientRect();
    const selectedBox = selected.getBoundingClientRect();
    if (selectedBox.left < railBox.left + 4 || selectedBox.right > railBox.right - 4) {
      const delta = selectedBox.left - railBox.left - (rail.clientWidth - selected.clientWidth) / 2;
      rail.scrollBy({left: delta, behavior: "auto"});
    }
    syncUrl();
  }

  $("#gradeChoices").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-grade]");
    if (!button || Number(button.dataset.grade) === state.grade) return;
    stopLabPlayback();
    state.grade = Number(button.dataset.grade); render(); $(`#gradeChoices [data-grade="${state.grade}"]`).focus();
  });
  $("#termChoices").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-term]");
    if (!button || button.dataset.term === state.term) return;
    stopLabPlayback();
    state.term = button.dataset.term; render(); $(`#termChoices [data-term="${state.term}"]`).focus();
  });
  $("#studyTabs").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-view]");
    if (!button || button.dataset.view === state.view) return;
    stopLabPlayback();
    state.view = button.dataset.view; render(); $(`#studyTabs [data-view="${state.view}"]`).focus();
    const content = $("#studyContent");
    const top = content.getBoundingClientRect().top + scrollY - $("#studyTabs").offsetHeight - $(".topbar").offsetHeight - 8;
    if (content.getBoundingClientRect().top < 130) {
      window.scrollTo({top, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"});
    }
  });
  $("#studyContent").addEventListener("click", (event) => {
    if(event.target.closest('[data-open-lab]')) {
      state.view="lab";render();$("#studyTabs [data-view=lab]").focus();return;
    }
    const button = event.target.closest("button[data-choice], #resetQuiz");
    if (!button || state.view !== "quiz") return;
    if (button.id === "resetQuiz") { render(); return; }
    const fieldset = button.closest("[data-question]");
    if (fieldset.dataset.answered) return;
    const question = currentBook().quiz[Number(fieldset.dataset.question)];
    const correct = Number(button.dataset.choice) === question.answer;
    fieldset.dataset.answered = correct ? "correct" : "wrong";
    $$("button", fieldset).forEach((option) => {
      option.disabled = true;
      if (Number(option.dataset.choice) === question.answer) option.classList.add("is-correct");
      else if (option === button) option.classList.add("is-wrong");
    });
    $(".quiz-feedback", fieldset).textContent = `${correct ? "答对了。" : `正确答案：${question.options[question.answer]}。`}${question.explain}`;
    const answered = $$("[data-question][data-answered]").length;
    const right = $$("[data-question][data-answered=correct]").length;
    $("#quizProgress").textContent = answered === currentBook().quiz.length ? `完成啦，答对 ${right} / ${answered} 题。` : `已完成 ${answered} / ${currentBook().quiz.length} 题`;
  });

  const searchDialog = $("#searchDialog");
  const searchInput = $("#searchInput");
  let searchTrigger = null;
  function searchResults(query) {
    const results = [];
    const term = query.trim().toLowerCase();
    if (!term) return results;
    books.forEach((book) => {
      const prefix = `${gradeName(book.grade)} · ${book.term}`;
      const lesson = window.MathLab.catalog.find(item=>item.id===book.id);
      const entries = [
        {title:lesson.title, terms:[lesson.title,lesson.topic,lesson.story], type:"互动实验", view:"lab", id:"mlTitle"},
        ...book.units.map((item) => ({ title: item.title, terms: [item.title, item.brief, ...item.learn, item.tip], type: "知识点", view: "units", id: `unit-${item.no}` })),
        ...book.formulas.map((item, index) => ({ title: item.title, terms: [item.title, item.expr, item.explain, item.example], type: "公式", view: "formulas", id: `formula-${index + 1}` })),
        ...book.applications.map((item, index) => ({ title: item.title, terms: [item.kind, item.title, ...item.clues, ...item.steps, item.example.question, item.example.work, item.tip], type: "应用题", view: "methods", id: `method-${index + 1}` }))
      ];
      entries.forEach((entry) => {
        if (entry.terms.join(" ").toLowerCase().includes(term)) results.push({ ...entry, prefix, bookId: book.id });
      });
    });
    return results.sort((a, b) =>
      Number(b.bookId === currentBook().id) - Number(a.bookId === currentBook().id)
      || Number(b.title.includes(term)) - Number(a.title.includes(term))
    );
  }
  function renderSearch() {
    const term = searchInput.value.trim();
    const target = $("#searchResults");
    if (!term) {
      target.innerHTML = '<div class="search-empty">试试搜索「面积」「平均数」或「折扣」。</div>';
      return;
    }
    const results = searchResults(term);
    target.innerHTML = results.length ? results.slice(0, 30).map((result) => `
      <button type="button" data-book="${result.bookId}" data-view="${result.view}" data-target="${result.id}">
        <span><strong>${escape(result.title)}</strong><small>${escape(result.prefix)} · ${escape(result.type)}</small></span>
        <span class="search-arrow" aria-hidden="true">→</span></button>`).join("") :
      `<div class="search-empty">没有找到「${escape(term)}」。试试缩短关键词，或按年级浏览。</div>`;
  }
  ["#searchOpen", "#searchOpenInline"].forEach((selector) => {
    $(selector).addEventListener("click", (event) => {
      searchTrigger = event.currentTarget;
      window.MathLab.pause();
      searchDialog.showModal();
      searchInput.focus();
      renderSearch();
    });
  });
  $("#searchClose").addEventListener("click", () => searchDialog.close());
  searchDialog.addEventListener("click", (event) => { if (event.target === searchDialog) searchDialog.close(); });
  searchDialog.addEventListener("close", () => { if (searchTrigger) searchTrigger.focus(); });
  searchInput.addEventListener("input", renderSearch);
  $("#searchResults").addEventListener("click", (event) => {
    const result = event.target.closest("button[data-book]");
    if (!result) return;
    stopLabPlayback();
    const book = books.find((item) => item.id === result.dataset.book);
    state.grade = book.grade;
    state.term = book.term === "上册" ? "up" : "down";
    state.view = result.dataset.view;
    searchTrigger = null;
    searchDialog.close();
    render();
    const target = document.getElementById(result.dataset.target);
    if (!target) return;
    if (target.matches("details")) target.open = true;
    target.classList.add("search-highlight");
    const focusTarget = target.querySelector("summary") || target;
    if (!focusTarget.hasAttribute("tabindex") && focusTarget === target) focusTarget.tabIndex = -1;
    focusTarget.focus({preventScroll: true});
    window.scrollTo({top: target.getBoundingClientRect().top + scrollY - 145, behavior: "smooth"});
    setTimeout(() => target.classList.remove("search-highlight"), 2000);
  });

  renderPicker();
  $("#sourceNote").textContent = data.sourceNote;
  $("#updatedDate").textContent = data.updated;
  $("#updatedDate").dateTime = data.updated;
  render();
})();
