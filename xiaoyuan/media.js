"use strict";
(() => {
  const courses = Array.isArray(window.XIAOYUAN_MEDIA) ? window.XIAOYUAN_MEDIA : [];
  const names = { rosie: "罗西历险记动画", cambridge: "外教口语剑桥绘本" };
  const $m = (selector) => document.querySelector(selector);
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const fmt = (seconds) => { const s = Math.max(0, Number.isFinite(seconds) ? Math.floor(seconds) : 0); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; };
  const icons = {
    play: '<path d="m8 5 11 7-11 7z" fill="currentColor"/>',
    pause: '<path d="M7 5h3v14H7zM14 5h3v14h-3z" fill="currentColor"/>',
    fullscreen: '<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
    minimize: '<path d="M3 8h5V3m8 0v5h5M8 21v-5H3m18 0h-5v5"/>'
  };
  const svg = (name) => `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">${icons[name]}</svg>`;
  let current = null;
  let video = null;
  let repeat = false;
  let autoNext = false;
  let showZh = true;
  let rowLimit = null;
  let saveAt = 0;
  let selectedLine = -1;
  let theatre = false;
  try { showZh = localStorage.getItem("xiaoyuan:media-show-chinese") !== "false"; } catch {}

  function catalog() {
    for (const group of ["rosie", "cambridge"]) {
      const grid = $m(`#${group}Grid`);
      if (!grid) { continue; }
      grid.innerHTML = courses.filter((c) => c.group === group).sort((a,b)=>a.number-b.number).map((c) => `<button class="media-card" type="button" data-media-id="${esc(c.id)}" aria-label="打开第 ${c.number} 节 ${esc(c.title)}"><span class="media-card-index">${String(c.number).padStart(2,"0")}</span><span class="media-card-copy"><strong>${esc(c.title)}</strong>${c.titleCn && c.titleCn !== c.title ? `<span>${esc(c.titleCn)}</span>` : ""}<small>${fmt(c.duration)} · ${group === "rosie" ? "片尾总结" : c.sentences.length + " 段绘本句子"}</small></span><span class="media-card-play" aria-hidden="true">▶</span></button>`).join("");
    }
  }

  function open(id, options = {}) {
    const next = courses.find((c) => c.id === id);
    if (!next) { return; }
    savePosition();
    stop();
    stopAllMedia();
    current = next;
    selectedLine = -1;
    rowLimit = null;
    catalogTrack = current.group;
    updateCatalogTrack();
    showView("media");
    const siblings = courses.filter((c) => c.group === current.group).sort((a,b)=>a.number-b.number);
    const index = siblings.findIndex((c) => c.id === current.id);
    $m("#mediaView").innerHTML = `
      <div class="content-wrap media-detail">
        <button class="back-link" type="button" data-media-back>← 返回${names[current.group]}</button>
        <header class="media-heading"><p class="eyebrow">${names[current.group]} · 第 ${current.number} 节</p><h1 id="mediaTitle">${esc(current.title)}</h1>${current.titleCn && current.titleCn !== current.title ? `<p>${esc(current.titleCn)}</p>` : ""}</header>
        <div class="media-player-shell" id="mediaPlayerShell" role="region" aria-label="视频播放器">
          <video id="lessonMediaVideo" src="${esc(current.video)}" poster="${esc(current.poster)}" preload="metadata" playsinline controls aria-label="${esc(current.title)}"></video>
          <button class="media-screen-toggle" type="button" data-media-toggle data-paused="true" aria-label="播放视频"><span>${svg("play")}</span></button>
          <button class="media-maximize" type="button" data-media-fullscreen aria-label="全屏播放">${svg("fullscreen")}</button>
          <div class="media-player-controls" aria-label="播放控制">
            <button class="media-play-toggle" type="button" data-media-toggle aria-label="播放视频">${svg("play")}</button>
            <span id="mediaCurrentTime" class="media-clock">0:00</span>
            <input id="mediaSeek" type="range" min="0" max="1000" value="0" step="1" aria-label="视频进度" aria-valuetext="0:00">
            <span id="mediaDuration" class="media-clock">${fmt(current.duration)}</span>
            <button type="button" data-media-fullscreen aria-label="全屏播放">${svg("fullscreen")}</button>
          </div>
          <p id="mediaPlayerError" class="media-error" role="status" hidden></p>
        </div>
        <div class="media-options">
          <button type="button" data-media-restart>重新播放</button>
          <button type="button" data-media-repeat aria-pressed="${repeat}">重复播放</button>
          <button type="button" data-media-autonext aria-pressed="${autoNext}">自动下一节</button>
          <label>倍速<select id="mediaPlaybackRate" aria-label="播放速度"><option value="0.75">0.75×</option><option value="1" selected>1×</option><option value="1.25">1.25×</option><option value="1.5">1.5×</option><option value="2">2×</option></select></label>
        </div>
        <p id="mediaPlaybackStatus" class="media-playback-status" role="status">${fmt(current.duration)} · ${current.group === "rosie" ? "动画与片尾总结" : "视频与绘本句子"}</p>
        ${current.group === "rosie" ? summaryMarkup() : ""}
        <section class="media-text-section" aria-labelledby="mediaTextTitle">
          <div class="media-text-heading"><h2 id="mediaTextTitle">${current.group === "rosie" ? "总结例句" : "绘本全文"}</h2><button type="button" id="mediaTranslationToggle" aria-controls="mediaSentenceList" aria-pressed="${showZh}" aria-label="显示中文翻译">${showZh ? "隐藏中文" : "显示中文"}</button></div>
          <p class="media-source-note">${current.group === "rosie" ? "例句据片尾整理；点击可回看总结。" : "据视频画面整理，点击句子可定位回看；中文为学习译文。"}</p>
          <ol id="mediaSentenceList" class="media-sentence-list">${current.sentences.map((line, i) => `<li class="media-sentence" data-media-line="${i}"><div class="media-sentence-copy"><p class="media-sentence-en" lang="en">${esc(line.text)}</p><p class="media-sentence-cn" data-media-cn ${showZh ? "" : "hidden"}>${esc(line.cn)}</p></div><button type="button" data-media-seek-line="${i}" aria-label="回看：${esc(line.text)}">▶<small>${fmt(line.time)}</small></button></li>`).join("")}</ol>
        </section>
        <nav class="media-lesson-nav" aria-label="课程翻页"><button type="button" data-media-open="${esc(siblings[index-1]?.id || "")}" ${index === 0 ? "disabled" : ""}>← 上一节</button><span>${index+1} / ${siblings.length}</span><button type="button" data-media-open="${esc(siblings[index+1]?.id || "")}" ${index === siblings.length-1 ? "disabled" : ""}>下一节 →</button></nav>
      </div>`;
    video = $m("#lessonMediaVideo");
    video.controls = false;
    video.addEventListener("play", () => { audio?.pause(); window.speechSynthesis?.cancel(); updatePlayback(); });
    video.addEventListener("pause", () => { savePosition(); updatePlayback(); });
    video.addEventListener("timeupdate", timeUpdate);
    video.addEventListener("loadedmetadata", () => {
      $m("#mediaDuration").textContent = fmt(video.duration);
      if (options.start != null) { video.currentTime = Math.min(video.duration-.05, Math.max(0, options.start)); }
      else {
        try {
          const saved = Number(localStorage.getItem("xiaoyuan:video-position:" + current.id));
          if (saved > 3 && saved < video.duration-4) { video.currentTime = saved; $m("#mediaPlaybackStatus").textContent = "已恢复到 " + fmt(saved); }
        } catch {}
      }
    });
    video.addEventListener("ended", onEnded);
    video.addEventListener("error", () => {
      const message = $m("#mediaPlayerError");
      if (message) { message.hidden = false; message.textContent = "视频暂未加载，请检查网络后重试；下方文字仍可阅读。"; }
    });
    video.addEventListener("webkitbeginfullscreen", syncFullscreen);
    video.addEventListener("webkitendfullscreen", syncFullscreen);
    video.addEventListener("ratechange", updatePlayback);
    document.title = current.title + " · 小猿英语";
    if (options.play) { play(); }
    window.scrollTo({top:0,behavior:"instant"});
  }

  function summaryMarkup() {
    const s = current.summary;
    return `<section class="media-summary" aria-labelledby="mediaSummaryTitle"><div class="media-text-heading"><h2 id="mediaSummaryTitle">片尾总结</h2><button type="button" data-media-summary>回看总结 ${fmt(current.summaryTime)}</button></div><h3>${esc(s.heading)}</h3><ul>${s.points.map(point=>`<li>${esc(point)}</li>`).join("")}</ul><p class="media-memory"><strong>记一记</strong> ${esc(s.memory)}</p><details class="media-summary-original"><summary>查看片尾原图</summary><img src="${esc(current.summaryImage)}" alt="第 ${current.number} 集最后完整显示的总结画面" loading="lazy" decoding="async"></details></section>`;
  }

  function play() {
    if (!video) { return; }
    video.play().catch(() => { const status = $m("#mediaPlaybackStatus"); if (status) { status.textContent = "点击播放器开始播放"; } });
  }
  function stop() {
    savePosition();
    video?.pause();
    rowLimit = null;
    if (theatre) { exitTheatre(); }
    if (document.fullscreenElement === $m("#mediaPlayerShell")) { document.exitFullscreen?.().catch(()=>{}); }
  }
  function savePosition() {
    if (!video || !current || !Number.isFinite(video.currentTime)) { return; }
    try { localStorage.setItem("xiaoyuan:video-position:"+current.id,String(video.currentTime)); } catch {}
  }
  function timeUpdate() {
    if (!video || !current) { return; }
    const cur = video.currentTime, dur = video.duration || current.duration;
    const time = $m("#mediaCurrentTime"), seek = $m("#mediaSeek");
    if (time) { time.textContent = fmt(cur); }
    if (seek && !seek.matches(":active")) { seek.value = String(dur ? Math.round(cur/dur*1000) : 0); seek.setAttribute("aria-valuetext",`${fmt(cur)} / ${fmt(dur)}`); }
    if (rowLimit != null && cur >= rowLimit) { video.pause(); rowLimit = null; }
    if (Date.now()-saveAt > 2500) { savePosition(); saveAt = Date.now(); }
    if (current.group === "cambridge") {
      const index = current.sentences.findIndex((line,i)=>cur>=line.time && cur<(current.sentences[i+1]?.time ?? dur));
      if (index !== selectedLine) { selectedLine = index; document.querySelectorAll("[data-media-line]").forEach(row=>row.classList.toggle("is-active", Number(row.dataset.mediaLine)===index)); }
    }
  }
  function updatePlayback() {
    if (!video) { return; }
    document.querySelectorAll("[data-media-toggle]").forEach(button=>{if(button.classList.contains("media-screen-toggle")){button.dataset.paused=String(video.paused);}else{button.innerHTML=svg(video.paused?"play":"pause");}button.setAttribute("aria-label",video.paused?"播放视频":"暂停视频");});
  }
  function onEnded() {
    savePosition();
    if (repeat) { video.currentTime=0; play(); return; }
    if (autoNext && current) {
      const next = courses.find(c=>c.group===current.group && c.number===current.number+1);
      if (next) { open(next.id,{play:true,start:0}); return; }
    }
    updatePlayback();
  }
  async function fullscreen() {
    const shell=$m("#mediaPlayerShell"), doc=document;
    if (!shell || !video) { return; }
    if (theatre) { exitTheatre(); return; }
    if (doc.fullscreenElement || doc.webkitFullscreenElement) { if (doc.exitFullscreen) { await doc.exitFullscreen().catch(()=>{}); } else { doc.webkitExitFullscreen?.(); } return; }
    try {
      if (shell.requestFullscreen) {
        let timer;
        const request = shell.requestFullscreen();
        await Promise.race([request, new Promise((_, reject) => { timer = setTimeout(() => reject(new Error("Fullscreen request timed out")), 1400); })]).finally(() => clearTimeout(timer));
        screen.orientation?.lock?.("landscape").catch(()=>{});
      }
      else if (shell.webkitRequestFullscreen) { shell.webkitRequestFullscreen(); }
      else if (video.webkitEnterFullscreen) { video.webkitEnterFullscreen(); }
      else { enterTheatre(); }
    } catch { enterTheatre(); }
    syncFullscreen();
  }
  function enterTheatre() { theatre=true; $m("#mediaPlayerShell")?.classList.add("is-theatre");document.body.classList.add("media-theatre-open");syncFullscreen(); }
  function exitTheatre() { theatre=false;$m("#mediaPlayerShell")?.classList.remove("is-theatre");document.body.classList.remove("media-theatre-open");syncFullscreen(); }
  function syncFullscreen() { if (theatre && document.fullscreenElement) { theatre=false; $m("#mediaPlayerShell")?.classList.remove("is-theatre"); document.body.classList.remove("media-theatre-open"); } const active=theatre||Boolean(document.fullscreenElement||document.webkitFullscreenElement||video?.webkitDisplayingFullscreen);document.querySelectorAll("[data-media-fullscreen]").forEach(button=>{button.setAttribute("aria-label",active?"退出全屏":"全屏播放");button.innerHTML=svg(active?"minimize":"fullscreen");}); }
  function seek(time, shouldPlay=false) {
    if (!video || !current) { return; }
    const next=Math.max(0,Math.min(time,(video.duration||current.duration)-.05));
    if (video.readyState) { video.currentTime=next; if (shouldPlay) { play(); } }
    else { video.addEventListener("loadedmetadata",()=>{video.currentTime=next;if(shouldPlay)play();},{once:true});video.load(); }
  }
  document.addEventListener("click",event=>{
    const target=event.target;
    const card=target.closest("[data-media-id]");if(card){open(card.dataset.mediaId);return;}
    const next=target.closest("[data-media-open]");if(next&&!next.disabled){open(next.dataset.mediaOpen);return;}
    if(target.closest("[data-media-back]")){stop();showView("catalog");return;}
    if(target.closest("[data-media-toggle]")){if(video?.paused)play();else video?.pause();return;}
    if(target.closest("[data-media-fullscreen]")){fullscreen();return;}
    if(target.closest("[data-media-restart]")){rowLimit=null;seek(0,true);return;}
    const loop=target.closest("[data-media-repeat]");if(loop){repeat=!repeat;loop.setAttribute("aria-pressed",String(repeat));return;}
    const auto=target.closest("[data-media-autonext]");if(auto){autoNext=!autoNext;auto.setAttribute("aria-pressed",String(autoNext));return;}
    if(target.closest("#mediaTranslationToggle")){showZh=!showZh;try{localStorage.setItem("xiaoyuan:media-show-chinese",String(showZh));}catch{}document.querySelectorAll("[data-media-cn]").forEach(el=>el.hidden=!showZh);const toggle=$m("#mediaTranslationToggle");toggle.textContent=showZh?"隐藏中文":"显示中文";toggle.setAttribute("aria-pressed",String(showZh));return;}
    if(target.closest("[data-media-summary]")){rowLimit=null;seek(current.summaryTime,true);$m("#mediaPlayerShell")?.scrollIntoView({behavior:"smooth",block:"center"});return;}
    const line=target.closest("[data-media-seek-line]");if(line){const i=Number(line.dataset.mediaSeekLine);rowLimit=current.group==='cambridge'?current.sentences[i].end:null;seek(current.sentences[i].time,true);return;}
  });
  document.addEventListener("input",event=>{if(event.target.id==="mediaSeek"){rowLimit=null;seek(Number(event.target.value)/1000*(video?.duration||current?.duration||0));}});
  document.addEventListener("change",event=>{if(event.target.id==="mediaPlaybackRate"&&video)video.playbackRate=Number(event.target.value);});
  document.addEventListener("keydown",event=>{
    if (event.key === "Escape" && theatre) { exitTheatre(); return; }
    if (currentView !== "media" || /INPUT|SELECT|TEXTAREA|BUTTON/.test(event.target.tagName)) { return; }
    if (event.code === "Space") { event.preventDefault();if(video?.paused)play();else video?.pause(); }
    if (event.key === "ArrowRight") { event.preventDefault();rowLimit=null;seek((video?.currentTime||0)+5); }
    if (event.key === "ArrowLeft") { event.preventDefault();rowLimit=null;seek((video?.currentTime||0)-5); }
  });
  document.addEventListener("fullscreenchange",syncFullscreen);
  document.addEventListener("webkitfullscreenchange",syncFullscreen);
  document.addEventListener("visibilitychange",()=>{if(document.hidden)savePosition();});
  window.addEventListener("pagehide",()=>{savePosition();});
  window.XIAOYUAN_MEDIA_PLAYER={stop,open,getCurrent:()=>current};
  if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",catalog,{once:true});}else{catalog();}
})();
