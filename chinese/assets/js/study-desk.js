/** Small progressive enhancements; the existing learning app owns all data and canvases. */
(function () {
  'use strict';
  var main = document.querySelector('main.wrap');
  var activeModal = null;
  var returnFocus = null;
  var queued = false;
  var closeIds = { modal: 'modalClose', zoomModal: 'zoomClose', gridModal: 'gridModalClose' };
  var selector = '.cell, .elem-cell, .seq-item, .gr-chip, .search-res .r, .ref-row .ex span, .ref-result .ex span';

  function enhance() {
    queued = false;
    document.querySelectorAll(selector).forEach(function (el) {
      el.setAttribute('role', 'button');
      el.tabIndex = 0;
      var label = el.textContent.trim().replace(/\s+/g, ' ');
      if (el.classList.contains('cell') || el.classList.contains('elem-cell')) {
        el.setAttribute('aria-pressed', el.classList.contains('on') ? 'true' : 'false');
        el.setAttribute('aria-label', label + '，查看笔顺');
      } else if (el.classList.contains('seq-item')) {
        el.setAttribute('aria-label', label + '，单独查看');
        el.setAttribute('aria-pressed', el.classList.contains('on') ? 'true' : 'false');
      } else el.setAttribute('aria-label', label);
    });
    document.querySelectorAll('.main-tab, .grade-tab, .term-tab').forEach(function (el) {
      el.setAttribute('aria-pressed', el.classList.contains('on') ? 'true' : 'false');
    });
    document.querySelectorAll('.zoom-btn').forEach(function (el) { el.setAttribute('aria-label', '放大查看田字格'); });
    document.querySelectorAll('.modal-close').forEach(function (el) { el.setAttribute('aria-label', '关闭弹窗'); });
    ['demoCanvas', 'readCanvas', 'elemCanvas'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) { el.setAttribute('role', 'img'); el.setAttribute('aria-label', '汉字田字格笔顺演示，使用下方按钮播放或逐笔查看'); }
    });
    syncModal();
  }

  function syncModal() {
    var shown = Array.prototype.find.call(document.querySelectorAll('.modal'), function (el) { return !el.hidden; }) || null;
    if (shown === activeModal) return;
    if (shown) {
      if (!activeModal) returnFocus = document.activeElement;
      activeModal = shown;
      shown.setAttribute('role', 'dialog');
      shown.setAttribute('aria-modal', 'true');
      var title = shown.querySelector('.modal-head .t');
      if (title && title.id) shown.setAttribute('aria-labelledby', title.id);
      if (main && 'inert' in main) main.inert = true;
      var close = document.getElementById(closeIds[shown.id]);
      if (close) close.focus({ preventScroll: true });
    } else {
      activeModal = null;
      if (main && 'inert' in main) main.inert = false;
      if (returnFocus && returnFocus.isConnected && returnFocus.getClientRects().length) returnFocus.focus({ preventScroll: true });
      returnFocus = null;
    }
  }

  document.addEventListener('keydown', function (e) {
    var typing = e.target.closest('input, textarea, select, [contenteditable="true"]');
    if (activeModal) {
      if (e.key === 'Escape') {
        e.preventDefault(); e.stopImmediatePropagation();
        document.getElementById(closeIds[activeModal.id]).click();
        return;
      }
      if (e.key === 'Tab') {
        var items = Array.prototype.filter.call(activeModal.querySelectorAll('button:not(:disabled), a[href], input, [tabindex="0"]'), function (el) { return el.getClientRects().length; });
        var first = items[0], last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    if (!typing && !activeModal && e.key === '/' && !e.ctrlKey && !e.metaKey) {
      e.preventDefault(); document.getElementById('gSearch').focus(); return;
    }
    if (!typing && (e.key === 'Enter' || e.key === ' ') && e.target.matches('[role="button"]:not(button):not(a)')) {
      e.preventDefault(); e.target.click();
    }
  }, true);

  // A tap should bring the practice area into view on a phone, without moving
  // the page on a two-column tablet or while stepping through strokes.
  ['readGrid', 'elemGrid'].forEach(function (id) {
    document.getElementById(id).addEventListener('click', function (e) {
      if (!e.target.closest('.cell, .elem-cell') || window.innerWidth >= 760) return;
      var card = this.closest('[id^="view"]').querySelector('.card');
      if (!card || card.getBoundingClientRect().top < window.innerHeight - 120) return;
      window.scrollTo({ top: window.pageYOffset + card.getBoundingClientRect().top - 16,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
  });

  // Observe structural changes, not animation frames/progress bar styles.
  new MutationObserver(function (records) {
    var structural = false;
    records.forEach(function (r) {
      if (r.type === 'childList') {
        // Progress labels change every animation frame; only new elements
        // need enhancement, not replacement text nodes.
        if (Array.prototype.some.call(r.addedNodes, function (n) { return n.nodeType === 1; })) structural = true;
      } else if (r.attributeName === 'hidden') {
        syncModal();
      } else if (r.target.matches('.main-tab, .grade-tab, .term-tab, .cell, .elem-cell, .seq-item')) {
        r.target.setAttribute('aria-pressed', r.target.classList.contains('on') ? 'true' : 'false');
      }
    });
    if (!structural || queued) return;
    queued = true;
    setTimeout(enhance, 0);
  }).observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ['class', 'hidden'] });
  enhance();
})();
