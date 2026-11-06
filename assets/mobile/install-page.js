(function(){
'use strict';
var button=document.getElementById('installNow'),status=document.getElementById('status'),mode=document.getElementById('mode'),manual=document.getElementById('manual');
var app=document.body.getAttribute('data-app-name'),installUrl=document.body.getAttribute('data-install-url'),worker=document.body.getAttribute('data-sw');
var ua=navigator.userAgent,embedded=/MicroMessenger|\bQQ\//i.test(ua),ios=/iPad|iPhone|iPod/.test(ua)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
var standalone=(window.matchMedia&&matchMedia('(display-mode: standalone)').matches)||navigator.standalone===true;
var promptEvent=window.__studyInstallPrompt||null,installed=false,busy=false,manualUsed=false;
// Capture starts in the document head, before deferred scripts or worker readiness.
function ready(){if(window.__studyInstallPrompt)promptEvent=window.__studyInstallPrompt;render();}
function render(){
 if(installed){mode.textContent='系统已确认安装';status.textContent='请返回手机桌面查找“'+app+'”。';button.textContent='已安装到桌面';button.disabled=true;return;}
 if(busy){button.disabled=true;return;}
 button.disabled=false;
 if(promptEvent&&!embedded&&!ios){mode.textContent='浏览器支持直接安装';button.textContent='安装到手机桌面';status.textContent='点击下面按钮，然后在系统弹窗中确认“安装”。';return;}
 mode.textContent=embedded?'请使用外部浏览器':ios?'通过 Safari 添加':standalone?'请先在浏览器中打开':'通过浏览器菜单添加';
 button.textContent=ios?'查看 Safari 添加步骤':'查看手机桌面添加方法';
 if(!manualUsed)status.textContent=embedded?'此内置浏览器不能直接安装，请先复制地址到外部浏览器。':standalone?'复制本页地址，在 Chrome 或系统浏览器打开后添加。':'暂未收到系统安装许可，请使用下方菜单步骤。已安装过此应用时也可能不再显示弹窗。';
}
function showManual(message){manualUsed=true;manual.setAttribute('tabindex','-1');manual.focus({preventScroll:false});status.textContent=message||'请按下方步骤操作；只有完成系统确认，桌面图标才会生成。';}
window.addEventListener('study-install-ready',ready);
window.addEventListener('appinstalled',function(){installed=true;busy=false;promptEvent=null;window.__studyInstallPrompt=null;render();});
button.addEventListener('click',function(){
 if(!promptEvent||embedded||ios){showManual();return;}
 // prompt() must run synchronously within this tap, not after an awaited fetch.
 var nativeEvent=promptEvent;promptEvent=null;window.__studyInstallPrompt=null;busy=true;button.disabled=true;button.textContent='等待系统确认…';status.textContent='请查看浏览器弹出的安装确认框。';
 try{
  var result=nativeEvent.prompt();
  Promise.resolve(result).then(function(){return nativeEvent.userChoice;}).then(function(choice){
   busy=false;if(installed){render();return;}
   manualUsed=true;render();
   if(choice&&choice.outcome==='accepted'){status.textContent='你已确认安装，系统正在处理。请返回桌面检查；图标显示前不要重复添加。';button.textContent='查看手动添加方法';}
   else{status.textContent='安装已取消，没有创建新图标。可以从浏览器菜单重新添加。';}
  }).catch(function(){busy=false;manualUsed=true;render();showManual('浏览器未能打开安装框。请按下方步骤在浏览器菜单添加。');});
 }catch(e){busy=false;manualUsed=true;render();showManual('安装请求未获浏览器允许。请按下方菜单步骤添加。');}
});
if(embedded)document.getElementById('embedded').hidden=false;
if(standalone)document.getElementById('standalone').hidden=false;
if(ios){document.getElementById('manualTitle').textContent='Safari 添加到主屏幕';document.getElementById('manualSteps').innerHTML='<li>在 <b>Safari</b> 中打开本页。</li><li>点击“分享”按钮。</li><li>选择 <b>添加到主屏幕</b>。</li><li>核对名称为 <b>'+app+'</b>，点“添加”。</li>';}
var copy=document.getElementById('copyInstall');copy.addEventListener('click',function(){
 function done(){status.textContent='已复制地址，请粘贴到手机浏览器中打开。';copy.textContent='地址已复制';setTimeout(function(){copy.textContent='复制本页地址';},1800);}
 function fallback(){var area=document.createElement('textarea');area.value=installUrl;area.setAttribute('readonly','');area.style.position='fixed';area.style.opacity='0';document.body.appendChild(area);area.select();try{if(document.execCommand('copy'))done();else status.textContent='请长按本页地址复制。';}catch(e){status.textContent='请长按本页地址复制。';}area.remove();}
 if(navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(installUrl).then(done).catch(fallback);else fallback();
});
if('serviceWorker'in navigator&&worker&&/^https?:$/.test(location.protocol))navigator.serviceWorker.register(worker,{updateViaCache:'none'}).then(function(reg){return reg.update();}).catch(function(){/* Menu-based shortcuts remain available if SW registration fails. */});
render();
})();