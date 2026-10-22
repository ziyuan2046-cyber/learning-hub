(function () {
  'use strict';

  var root = document.documentElement;
  var themeButton = document.getElementById('themeButton');
  var installButton = document.getElementById('installButton');
  var installHelp = document.getElementById('installHelp');
  var helpDialog = document.getElementById('helpDialog');
  var qrDialog = document.getElementById('qrDialog');
  var installPrompt = null;
  var $ = function (selector) { return document.querySelector(selector); };

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('learning-hub-theme', theme); } catch (e) {}
    if (themeButton) {
      var label = theme === 'dark' ? '切换浅色模式' : '切换深色模式';
      themeButton.setAttribute('aria-label', label);
      themeButton.title = label;
    }
  }

  var storedTheme = null;
  try { storedTheme = localStorage.getItem('learning-hub-theme'); } catch (e) {}
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : (prefersDark ? 'dark' : 'light'));
  if (!storedTheme && window.matchMedia) {
    var scheme = window.matchMedia('(prefers-color-scheme: dark)');
    var onSchemeChange = function (event) { if (!root.hasAttribute('data-theme-manual')) { setTheme(event.matches ? 'dark' : 'light'); } };
    if (scheme.addEventListener) { scheme.addEventListener('change', onSchemeChange); }
    else if (scheme.addListener) { scheme.addListener(onSchemeChange); }
  }
  if (themeButton) {
    themeButton.addEventListener('click', function () {
      root.setAttribute('data-theme-manual', '');
      setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  function updateClock() {
    var now = new Date();
    var clock = document.getElementById('clock');
    var weekday = document.getElementById('weekday');
    var todayLabel = document.getElementById('todayLabel');
    var weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    if (clock) { clock.textContent = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0'); }
    if (weekday) { weekday.textContent = weekdays[now.getDay()]; }
    if (todayLabel) { todayLabel.textContent = (now.getMonth() + 1) + '月' + now.getDate() + '日 · ' + weekdays[now.getDay()]; }
  }
  updateClock();
  window.setInterval(updateClock, 30000);

  function openDialog(dialog) {
    if (!dialog) { return; }
    if (typeof dialog.showModal === 'function') { dialog.showModal(); }
    else { dialog.setAttribute('open', ''); }
  }
  function closeDialog(dialog) {
    if (!dialog) { return; }
    if (typeof dialog.close === 'function') { dialog.close(); }
    else { dialog.removeAttribute('open'); }
  }

  window.addEventListener('beforeinstallprompt', function (event) {
    event.preventDefault();
    installPrompt = event;
    if (installButton) { installButton.classList.add('can-install'); }
  });
  if (installButton) {
    installButton.addEventListener('click', function () {
      if (!installPrompt) { openDialog(helpDialog); return; }
      installPrompt.prompt();
      installPrompt.userChoice.then(function () {
        installPrompt = null;
        installButton.classList.remove('can-install');
      });
    });
  }
  window.addEventListener('appinstalled', function () {
    installPrompt = null;
    if (installButton) { installButton.classList.remove('can-install'); }
    showToast('已添加到主屏幕');
  });

  if (installHelp) { installHelp.addEventListener('click', function () { openDialog(helpDialog); }); }
  if ($('#helpClose')) { $('#helpClose').addEventListener('click', function () { closeDialog(helpDialog); }); }
  if ($('#qrButton')) { $('#qrButton').addEventListener('click', function () { openDialog(qrDialog); }); }
  if ($('#qrClose')) { $('#qrClose').addEventListener('click', function () { closeDialog(qrDialog); }); }
  [helpDialog, qrDialog].forEach(function (dialog) {
    if (!dialog) { return; }
    dialog.addEventListener('click', function (event) { if (event.target === dialog) { closeDialog(dialog); } });
  });

  function showToast(message) {
    var old = $('.toast-message');
    if (old) { old.remove(); }
    var toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.setAttribute('role', 'status');
    toast.textContent = message;
    document.body.appendChild(toast);
    window.setTimeout(function () { toast.classList.add('show'); }, 20);
    window.setTimeout(function () {
      toast.classList.remove('show');
      window.setTimeout(function () { toast.remove(); }, 300);
    }, 1900);
  }

  var permanentAddress = 'https://ziyuan2046-cyber.github.io/learning-hub/';
  var qrAddress = $('#qrAddress');
  if (qrAddress && /github\.io$/.test(window.location.hostname)) { permanentAddress = window.location.origin + '/learning-hub/'; qrAddress.textContent = permanentAddress; }
  if ($('#copyButton')) {
    $('#copyButton').addEventListener('click', function () {
      var button = this;
      var done = function () {
        button.textContent = '已复制';
        showToast('永久地址已复制');
        window.setTimeout(function () { button.textContent = '复制永久地址'; }, 1800);
      };
      var fallback = function () {
        var area = document.createElement('textarea');
        area.value = permanentAddress;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        try { document.execCommand('copy'); done(); } catch (e) { showToast('请长按地址复制'); }
        area.remove();
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(permanentAddress).then(done).catch(fallback);
      } else { fallback(); }
    });
  }

  window.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') { return; }
    if (helpDialog && helpDialog.open) { closeDialog(helpDialog); }
    if (qrDialog && qrDialog.open) { closeDialog(qrDialog); }
  });

  if ('serviceWorker' in navigator && /^https?:$/.test(window.location.protocol)) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('./sw.js').catch(function () {});
    });
  }
})();