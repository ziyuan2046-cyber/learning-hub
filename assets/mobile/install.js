(function(){
'use strict';
var script=document.currentScript,app=script&&script.getAttribute('data-app'),sw=script&&script.getAttribute('data-sw');
// Compatibility for cached 2026-11-05 HTML: no floating tools on any lesson page.
if(app==='hub'){
 document.querySelectorAll('[data-mobile-open]').forEach(function(el){
  if(el.tagName==='A')return;
  el.addEventListener('click',function(){location.href='/learning-hub/install/';});
 });
}
if('serviceWorker'in navigator&&sw&&/^https?:$/.test(location.protocol))navigator.serviceWorker.register(sw,{updateViaCache:'none'}).then(function(reg){return reg.update();}).catch(function(){});
})();