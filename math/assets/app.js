"use strict";
(function () {
  var data = window.MATH_DATA || { grades: [], books: [] };
  var books = data.books || [];
  var $ = function (s, root) { return (root || document).querySelector(s); };
  var $$ = function (s, root) { return Array.prototype.slice.call((root || document).querySelectorAll(s)); };
  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (c) {
      return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c];
    });
  }
  function bookHref(book) { return "./books/" + book.id + ".html"; }
  function gradeName(id) { var g = (data.grades || []).find(function (item) { return item.id === id; }); return g ? g.name : id + "年级"; }
  function gradeTone(id) { var g = (data.grades || []).find(function (item) { return item.id === id; }); return g ? g.tone : "mint"; }
  function renderGrades() {
    var grid = $("#gradeGrid"); if (!grid) return;
    grid.innerHTML = data.grades.map(function (g) {
      var list = books.filter(function (b) { return b.grade === g.id; });
      return '<article class="grade-card tone-' + escapeHtml(g.tone) + '" data-number="' + String(g.id).padStart(2,"0") + '">' +
        '<span class="grade-num">小学 ' + g.id + " 年级</span>" +
        '<h3>' + escapeHtml(g.name) + '</h3><p class="grade-sub">' + escapeHtml(g.sub) + "</p>" +
        '<div class="book-links">' + list.map(function (b) {
          return '<a href="' + bookHref(b) + '">' + escapeHtml(b.term) + '<span aria-hidden="true">→</span></a>';
        }).join("") + "</div></article>";
    }).join("");
  }
  var formulaGrade = "all";
  function renderFormulaFilters() {
    var row = $("#formulaFilters"); if (!row) return;
    var items = [{id:"all",label:"全部"}].concat(data.grades.map(function(g){return {id:String(g.id),label:g.name};}));
    row.innerHTML = items.map(function (item) {
      return '<button class="filter-button ' + (String(formulaGrade) === item.id ? "on" : "") + '" type="button" data-grade="' + item.id + '" aria-pressed="' + (String(formulaGrade) === item.id) + '">' + escapeHtml(item.label) + "</button>";
    }).join("");
    $$(".filter-button", row).forEach(function (btn) {
      btn.addEventListener("click", function () { formulaGrade = btn.dataset.grade; renderFormulaFilters(); renderFormulas(); });
    });
  }
  function renderFormulas() {
    var list = $("#formulaList"), more = $("#formulaMore"); if (!list) return;
    var all = [];
    books.forEach(function (b) { (b.formulas || []).forEach(function (f) { all.push({f:f,b:b}); }); });
    var filtered = formulaGrade === "all" ? all : all.filter(function (x) { return String(x.b.grade) === formulaGrade; });
    var shown = filtered.slice(0, 10);
    list.innerHTML = shown.map(function (x) {
      return '<article class="formula-card"><div class="formula-card-top"><span class="formula-title">' + escapeHtml(x.f.title) + '</span><span class="formula-grade">' + escapeHtml(x.b.term === "上册" ? x.b.grade + "上" : x.b.grade + "下") + '</span></div>' +
        '<p class="formula-expr">' + escapeHtml(x.f.expr) + '</p><p class="formula-explain">' + escapeHtml(x.f.explain) + '</p>' +
        '<p class="formula-example"><b>例：</b>' + escapeHtml(x.f.example) + "</p></article>";
    }).join("");
    if (more) more.textContent = filtered.length > shown.length ? "还有 " + (filtered.length - shown.length) + " 条公式，进入对应册页查看完整版。" : "已显示该范围内的全部公式。";
  }
  function renderMethods() {
    var grid = $("#methodGrid"); if (!grid) return;
    var picks = [];
    ["g1-up","g2-up","g3-down","g4-up","g5-up","g6-down"].forEach(function (id) {
      var book = books.find(function(b){return b.id===id;});
      if (book && book.applications && book.applications[0]) picks.push({book:book,app:book.applications[0]});
    });
    grid.innerHTML = picks.slice(0,6).map(function (x) {
      var a = x.app;
      return '<article class="method-card"><span class="method-kind">' + escapeHtml(a.kind) + '</span><h3>' + escapeHtml(a.title) + '</h3>' +
        '<p class="method-clues">' + (a.clues || []).map(function(c){return "<span>"+escapeHtml(c)+"</span>";}).join("") + '</p>' +
        '<p class="method-example"><strong>例题</strong>' + escapeHtml(a.example.question) + '<br><b>' + escapeHtml(a.example.work) + '</b></p></article>';
    }).join("");
  }
  function openSearch() {
    var dialog = $("#searchDialog"), input = $("#searchInput");
    if (!dialog) return; dialog.hidden = false; document.body.style.overflow = "hidden";
    window.setTimeout(function(){ if(input) input.focus(); }, 30);
  }
  function closeSearch() {
    var dialog = $("#searchDialog"); if (!dialog) return;
    dialog.hidden = true; document.body.style.overflow = ""; $("#searchOpen") && $("#searchOpen").focus();
  }
  function searchAll(query) {
    var q = query.trim().toLowerCase(); if (!q) return [];
    var results = [];
    books.forEach(function (b) {
      var base = gradeName(b.grade) + " · " + b.term;
      (b.units || []).forEach(function (u) {
        var hay = [u.title,u.tag,u.brief,(u.learn||[]).join(" "),u.tip].join(" ").toLowerCase();
        if (hay.indexOf(q) !== -1) results.push({title:u.title,meta:base + " · 单元",href:bookHref(b) + "#unit-" + u.no});
      });
      (b.formulas || []).forEach(function (f) {
        var hay = [f.title,f.expr,f.explain,f.example].join(" ").toLowerCase();
        if (hay.indexOf(q) !== -1) results.push({title:f.title,meta:base + " · 公式 · " + f.expr,href:bookHref(b) + "#formulas"});
      });
      (b.applications || []).forEach(function (a) {
        var hay = [a.kind,a.title,(a.clues||[]).join(" "),(a.steps||[]).join(" "),a.example.question,a.example.work,a.tip].join(" ").toLowerCase();
        if (hay.indexOf(q) !== -1) results.push({title:a.title,meta:base + " · 应用题 · " + a.kind,href:bookHref(b) + "#applications"});
      });
    });
    return results;
  }
  function renderSearchResults(query) {
    var box = $("#searchResults"); if (!box) return;
    var results = searchAll(query);
    if (!query.trim()) { box.innerHTML = '<p class="search-empty">输入关键词，例如“圆”“时间”“平均数”。</p>'; return; }
    if (!results.length) { box.innerHTML = '<p class="search-empty">暂时没找到“' + escapeHtml(query) + '”。可以试试点数少一些的关键词，或直接按年级浏览。</p>'; return; }
    box.innerHTML = results.slice(0,20).map(function(r){
      return '<a class="search-result" href="' + r.href + '"><strong>' + escapeHtml(r.title) + '</strong><small>' + escapeHtml(r.meta) + '</small></a>';
    }).join("");
  }
  function initSearch() {
    ["#searchOpen","#searchOpenInline"].forEach(function(s){ var el=$(s); if(el) el.addEventListener("click", openSearch); });
    var close = $("#searchClose"); if (close) close.addEventListener("click", closeSearch);
    var dialog = $("#searchDialog");
    if (dialog) dialog.addEventListener("click", function(e){ if(e.target === dialog) closeSearch(); });
    var input = $("#searchInput");
    if (input) {
      input.addEventListener("input", function(){ renderSearchResults(input.value); });
      input.addEventListener("keydown", function(e){ if(e.key === "Escape") closeSearch(); });
    }
    document.addEventListener("keydown", function(e){ if(e.key === "Escape" && dialog && !dialog.hidden) closeSearch(); });
    renderSearchResults("");
  }
  function initQuiz() {
    var row = $("#miniQuiz"), feedback = $("#miniFeedback"); if (!row || !feedback) return;
    $$("button", row).forEach(function(btn){
      btn.addEventListener("click", function(){
        $$("button", row).forEach(function(b){b.classList.remove("correct","incorrect");});
        if (btn.dataset.answer === "right") { btn.classList.add("correct"); feedback.innerHTML = "<strong>答对了。</strong> 12−7=5，小明比小红多5张。"; }
        else { btn.classList.add("incorrect"); feedback.innerHTML = "<strong>再想一想。</strong> 问相差几张，要用大数减小数：12−7。"; }
      });
    });
  }
  function init() {
    renderGrades(); renderFormulaFilters(); renderFormulas(); renderMethods(); initSearch(); initQuiz();
    var updated = $("#updatedDate"); if (updated) updated.textContent = data.updated || "2026-10-26";
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
