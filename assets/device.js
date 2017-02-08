window.JsBridge=function(a,f){a=a||{};typeof Array.prototype.forEach!="function"&&(Array.prototype.forEach=function(h,i){for(var g=0,j=this.length;g<j;g++){typeof h==="function"&&Object.prototype.hasOwnProperty.call(this,g)&&h.call(i,this[g],g,this)}});typeof Array.prototype.map!="function"&&(Array.prototype.map=function(h,j){var i=[];if(typeof h==="function"){for(var g=0,l=this.length;g<l;g++){i.push(h.call(j,this[g],g,this))}}return i});typeof Array.prototype.filter!="function"&&(Array.prototype.filter=function(h,j){var i=[];if(typeof h==="function"){for(var g=0,l=this.length;g<l;g++){h.call(j,this[g],g,this)&&i.push(this[g])}}return i});typeof Array.prototype.indexOf!="function"&&(Array.prototype.indexOf=function(j,h){var i=-1;h=h*1||0;for(var g=0,l=this.length;g<l;g++){if(g>=h&&this[g]===j){i=g;break}}return i});typeof Array.prototype.lastIndexOf!="function"&&(Array.prototype.lastIndexOf=function(l,h){var i=-1,j=this.length;h=h*1||j-1;for(var g=j-1;g>-1;g--){if(g<=h&&this[g]===l){i=g;break}}return i});a.android=a.iOS=false;navigator.userAgent.indexOf("Android")>-1?a.android=true:/iPhone|iPad|iPod/.test(navigator.userAgent)&&(a.iOS=true);var c=[];function e(){var g=document.createElement("iframe");g.className="_jsb";g.style.cssText="position:absolute;left:0;top:0;width:0;height:0;visibility:hidden;";g.frameBorder="0";document.body.appendChild(g);return g}a._callWithScheme=a.callWithScheme=function(h){c=document.querySelectorAll("iframe._jsb");var g;for(var j=0;g=c[j];j++){if(!g._busy){break}}(!g||g._busy)&&(g=e());g._busy=true;g.src=h;setTimeout(function(){g._busy=false},0);window.device&&device.log(decodeURIComponent(h),"#0ff")};var b=1,d={};a._call=a.call=function(k){var i=[],j=null;[].slice.call(arguments,1).forEach(function(l){typeof l=="function"?j=l:l!==undefined&&i.push(l)});var h=["jsbridge:/",k];h.push(b);if(j&&typeof i[0]=="object"){var g=i[0];g.callbackKey=g.callbackKey||"callback";g[g.callbackKey]==undefined&&(g[g.callbackKey]="JsBridge._callback"+b,a["_callback"+b]=function(l,m){return function(){var n=d[l].callback;n&&n.apply(null,arguments);!m&&delete a["_callback"+l]}}(b,g.keepCallback),delete g.keepCallback);delete g.callbackKey}i.forEach(function(l){h.push(encodeURIComponent(typeof l=="object"?JSON.stringify(l):l+""))});h=h.join("/");d[b++]={callback:j};a._callWithScheme(h)};return a}(window.JsBridge,window);window.Stat=function(o){var d=window.location.protocol+"//device.qq.com/cgi-bin/appstage/light_app_report",e=function(r,s,t){var u=new RegExp("(?:^|[?&#])"+r+"=([^?&#]*)","i"),p=u.exec(s||window.location.href),q=p?p[1]:"";return t?q:decodeURIComponent(q)},f=function(q){var p=[];for(var r in q){p.push(encodeURIComponent(r)+"="+encodeURIComponent(q[r]))}p=p.concat([].slice.call(arguments,1));return p.join("&")},h=function(q){var p=document.createElement("img");p.onload=p.onerror=function(){p=null};p.src=q;setTimeout(function(){},1e3)},i=function(p){p=p||{};var q=new XMLHttpRequest();q.open("POST",p.url,true);q.withCredentials=true;q.setRequestHeader("Content-Type","application/x-www-form-urlencoded");q.send(f(p.params))},j=function(q){var s=new RegExp("(?:^|;+|\\s+)"+q+"=([^;]*)"),p=document.cookie.match(s);return p?p[1]:""},k=function(){var p=j("uin").match(/\d+/);return p?+p[0]:0},c=navigator.userAgent,a;c.indexOf("Android")>-1?a=1:/iPhone|iPad|iPod/.test(c)?a=2:/Windows Phone|WPDesktop/.test(c)?a=3:a=4;var l=/QQ\/([\d\.]+)/,m=function(p){return p?p[1]:"0"}(c.match(l)),b={platform:a+"",version:m,pid:e("productId"),din:e("din"),uin:k()+""},n={100:{tid:0,list:[]},200:{tid:0,list:[]}},g=function(t,p,r){if(!p||!t){return}var q=n[t];typeof p=="string"&&(p=p.split(","));typeof r=="string"&&(r=r.split(","));for(var s=0,v=p.length;s<v;s++){if(p[s]){var u={platform:b.platform,version:b.version,pid:b.pid,din:b.din,uin:b.uin,via:p[s],reserve1:t};r&&r[s]&&(u.reserve2=r[s]);q.list.push(u)}}!q.tid&&(q.tid=setTimeout(function(){var y=q.list.length;if(!y){return}var w={data:JSON.stringify({list:q.list}),r:Math.random()},x=function(){y>4?i({url:d,params:w}):h(d+"?"+f(w))};window.device?device.checkApi({list:["postCgiProxy"],onSuccess:function(z){z.postCgiProxy?device.postCgiProxy({params:{name:"light_app_report",params:w},callback:function(A,B){A!=0&&x()}}):x()}}):x();q.tid=0;q.list=[]},200))};return{exposure:function(p,q){g(100,p,q)},click:function(p,q){g(200,p,q)}}}(window);window.device=function(b,i){var H="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(av){var ay=typeof Uint8Array!=="undefined"?Uint8Array:Array,az="+".charCodeAt(0),aA="/".charCodeAt(0),au="0".charCodeAt(0),aw="a".charCodeAt(0),ax="A".charCodeAt(0),aB="-".charCodeAt(0),aC="_".charCodeAt(0);function k(aG){var aF=aG.charCodeAt(0);if(aF===az||aF===aB){return 62}if(aF===aA||aF===aC){return 63}if(aF<au){return-1}if(aF<au+10){return aF-au+26+26}if(aF<ax+26){return aF-ax}if(aF<aw+26){return aF-aw+26}}function aD(aF){var aG,aL,aM,aH,aJ,aK;if(aF.length%4>0){throw new Error("Invalid string. Length must be a multiple of 4")}var aN=aF.length;aJ="="===aF.charAt(aN-2)?2:"="===aF.charAt(aN-1)?1:0;aK=new ay(aF.length*3/4-aJ);aM=aJ>0?aF.length-4:aF.length;var aO=0;function aI(aP){aK[aO++]=aP}for(aG=0,aL=0;aG<aM;aG+=4,aL+=3){aH=k(aF.charAt(aG))<<18|k(aF.charAt(aG+1))<<12|k(aF.charAt(aG+2))<<6|k(aF.charAt(aG+3));aI((aH&16711680)>>16);aI((aH&65280)>>8);aI(aH&255)}aJ===2?(aH=k(aF.charAt(aG))<<2|k(aF.charAt(aG+1))>>4,aI(aH&255)):aJ===1&&(aH=k(aF.charAt(aG))<<10|k(aF.charAt(aG+1))<<4|k(aF.charAt(aG+2))>>2,aI(aH>>8&255),aI(aH&255));return aK}function aE(aF){var aJ,aK=aF.length%3,aG="",aH,aL;function aI(aN){return H.charAt(aN)}function aM(aN){return aI(aN>>18&63)+aI(aN>>12&63)+aI(aN>>6&63)+aI(aN&63)}for(aJ=0,aL=aF.length-aK;aJ<aL;aJ+=3){aH=(aF[aJ]<<16)+(aF[aJ+1]<<8)+aF[aJ+2];aG+=aM(aH)}switch(aK){case 1:aH=aF[aF.length-1];aG+=aI(aH>>2);aG+=aI(aH<<4&63);aG+="==";break;case 2:aH=(aF[aF.length-2]<<8)+aF[aF.length-1];aG+=aI(aH>>10);aG+=aI(aH>>4&63);aG+=aI(aH<<2&63);aG+="=";break}return aG}av.toByteArray=aD;av.fromByteArray=aE}(typeof e==="undefined"?this.base64={}:e);var t=navigator.userAgent,u=function(au,av){au=String(au).split(".");av=String(av).split(".");try{for(var k=0,ay=Math.max(au.length,av.length);k<ay;k++){var aw=isFinite(au[k])&&Number(au[k])||0,ax=isFinite(av[k])&&Number(av[k])||0;if(aw<ax){return-1}else if(aw>ax){return 1}}}catch(az){return-1}return 0};window.QQVersion=function(){var k=[],av=/(?:V1_AND_SQI?_|QQ\/)([\d\.]+)/g;av.lastIndex=0;var au=av.exec(t);while(au&&au[1]){k.push(au[1]);au=av.exec(t)}if(k[1]&&u(k[0],k[1])<0){return k[1]}else{return k[0]||"0"}}();var q=function(k){return u(window.QQVersion,k)},j=function(k){return typeof k=="string"?document.getElementById(k):k},a=function(k){return null===k?"null":void 0===k?"undefined":Object.prototype.toString.call(k).slice(8,-1).toLowerCase()},g=function(av,aw,ax){var ay=new RegExp("(?:^|[?&#])"+av+"=([^?&#]*)","i"),k=ay.exec(aw||window.location.href),au=k?k[1]:"";return ax?au:decodeURIComponent(au)},r=function(au){var k=[];for(var av in au){k.push(encodeURIComponent(av)+"="+encodeURIComponent(au[av]))}k=k.concat([].slice.call(arguments,1));return k.join("&")},v=function(au){var av=new RegExp("(?:^|;+|\\s+)"+au+"=([^;]*)"),k=document.cookie.match(av);return k?k[1]:""},w=function(av,aw,ax,ay,k){if(k){var au=new Date();au.setTime(au.getTime()+36e5*k)}var az=k?"expires="+au.toGMTString()+"; ":"",aA="path="+(ay||"/")+"; ",aB="domain="+(ax||document.domain)+";";document.cookie=av+"="+aw+"; "+az+aA+aB},I=function(k,au,av){var aw="expires=Mon, 26 Jul 1997 05:00:00 GMT; ",ax="path="+(av||"/")+"; ",ay="domain="+(au||document.domain)+";";document.cookie=k+"=; "+aw+ax+ay},n=function(k,au,aw,ax){if((k=String(k)).length<au){var av=new Array(au-k.length);av[ax?"unshift":"push"](k);k=av.join(aw||"0")}return k},s=function(k){var au=new XMLHttpRequest();k.method=(k.method||k.type||"GET").toUpperCase();k.method=="GET"&&(k.url+=(k.url.indexOf("?")>-1?"&":"?")+r(k.params));au.open(k.method,k.url,true);au.onload=function(){var av;try{av=JSON.parse(au.responseText)}catch(aw){av={code:-998,msg:"数据解析失败",responseText:au.responseText}}av.code==undefined&&(av.code=av.ret);k.onSuccess&&k.onSuccess(av);k.callback&&k.callback(av)};au.onerror=function(){var av={code:-999,msg:"请求失败"};k.onError&&k.onError(av);k.callback&&k.callback(av)};k.withCredentials&&(au.withCredentials=true);k.method=="POST"?k.requestType=="json"?(au.setRequestHeader("Content-Type","text/plain"),au.send(JSON.stringify(k.params))):window.FormData&&k.params instanceof window.FormData?au.send(k.params):(au.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),au.send(r(k.params))):au.send(null)};var g=function(av,aw,ax){var ay=new RegExp("(?:^|[?&#])"+av+"=([^?&#]*)","i"),k=ay.exec(aw||window.location.href),au=k?k[1]:"";return ax?au:decodeURIComponent(au)},x=function(au){var k=document.createElement("img");k.onload=k.onerror=function(){k=null};k.src=au;setTimeout(function(){},1e3)},aq=function(av,k,au){if(!av){return}k=k||"iot.qq.com";au=au||window.location.pathname;var aw=[window.location.protocol+"//pinghot.qq.com/pingd?dm=",k,".hot&url=",au,"&hottag=",av,"&hotx=9999&hoty=9999&sds=",Math.random()].join("");x(aw)},J=function(aw,au,k){var ax=function(aB,aC,az){var aF=/(?:^|;+|\s+)pgv_pvid=([^;]*)/i,aG=/(?:^|;+|\s+)pgv_info=([^;]*)/i,aH=/[\?\#]/,aI=function(){var aK,aL,aM,aN;aK=document.cookie.match(aF);aK&&aK.length&&aK.length>1?aL=aK[1]:(aL=Math.round(Math.random()*2147483647)*(new Date().getUTCMilliseconds())%1e10,document.cookie="pgv_pvid="+aL+"; path=/; domain=qq.com; expires=Sun, 18 Jan 2038 00:00:00 GMT;");aM=document.cookie.match(aG);!aM&&(aN=Math.round(Math.random()*2147483647)*(new Date().getUTCMilliseconds())%1e10,document.cookie="pgv_info=ssid=s"+aN+"; path=/; domain=qq.com;");return aL}();aB=aB||"iot.qq.com";aC=aC||location.pathname;az=az||{};az.referURL=az.referURL||document.referrer;var aA,aD,aE;aA=az.referURL.split(aH);aA=aA[0];aA=aA.split("/");aD=aA[2]||"-";aE="/"+aA.slice(3).join("/");az.referDomain=az.referDomain||aD;az.referPath=az.referPath||aE;var aJ=window.location.protocol+"//pingfore.qq.com/pingd?cc=-&ct=-&java=1&lang=-&pf=-&scl=-&scr=-&tt=-&tz=-8&vs=3.3&flash=&dm="+aB+"&url="+aC+"&rdm="+az.referDomain+"&rurl="+az.referPath+"&pgv_pvid="+aI+"&sds="+Math.random();x(aJ)};k=k||{};var av=g("from");if(av){au=au||location.pathname;var ay=au.replace(/\..+/,"").split("/").slice(-2).join("-");k.referDomain="ADTAG";k.referPath=ay+"."+av}ax(aw,au,k)};var K=["log","checkApi","xhr","sso","getLocation","getPicture","getLocalImage","showActionSheet","operateSendFile","screenShot"],y={"5.4":["onReceive","onChange","send","startVideoChat","startVideoMessage","showToast","query","openApi"],"5.5":["sendPicture","takePicture","openDeviceMsg"],"5.6":["openCameraControl","sendShareMsg"],"5.7":["openCameraControlEx"],"5.8":["onPushData"],"5.9":["onServerPush"],"6.2":["setTitlebar","sendFile","onAVSessionConnect","sendCameraCmd"],"6.3":["postCgiProxy"],"6.3.1":["shareQZoneAlbum","shareDevice"],"6.5.0":["moreSetRefresh"]},z={"5.6":["onReceive","onChange","send","startVideoChat","startVideoMessage","showToast"],"5.8":["openDeviceMsg","openCameraControl","onPushData","query","openApi"],"5.9":["onServerPush","sendPicture","takePicture","sendShareMsg"],"6.2":["setTitlebar","sendFile"],"6.3":["postCgiProxy","onAVSessionConnect","sendCameraCmd"],"6.3.1":["shareQZoneAlbum","shareDevice"],"6.5.0":["moreSetRefresh"]},A=function(av,au){for(var aw in au){if(au[aw].indexOf(av)>-1){return true}}return false},d={success:0,args:-1,version:-2,iOS:-3,platform:-4},l={0:"执行完毕","-1":"缺少必要的参数或参数错误","-2":"为了更好地使用该功能，请先将手机QQ升级到最新版本","-3":"该功能暂不支持iOS版，可先使用Android手机QQ体验","-4":"该功能暂不支持该平台，请使用最新Android/iOS手机QQ重试"},f=function(au,az){if(device.debug!==true){return d.args}au=a(au)!="string"?JSON.stringify(au):au;window.console&&window.console.log("%c"+au,"color:"+(az||""));var k=j("device-log-dialog");if(!k){document.body.lastElementChild.insertAdjacentHTML("afterEnd",['<div id="device-log-dialog" style="position: fixed;z-index: 99999;top: 10px;left: 10px;font-size: 14px;width: 300px;background-color: rgba(0,0,0,.8);color: #FFF;word-break: break-all;text-shadow: none;display: none;">','<div style="padding: 5px;background-color: #000;font-weight: bold;">',"<span>调试模式</span>",'<span id="device-log-close" style="float: right;color: yellow;">关闭</span>','<span id="device-log-hide" style="float: right;color: yellow;margin-right: 10px;">收起</span>','<span ontouchend="location.reload(true);" style="float: right;color: yellow;margin-right: 10px;">刷新</span>','<span ontouchend="device.log(location.href);" style="float: right;color: yellow;margin-right: 10px;">地址</span>',"</div>",'<div style="padding: 5px;max-height: 300px;overflow: auto;"><p style="float: right;">End</p></div>',"</div>",'<div id="device-log-ico" style="position: fixed;z-index: 99999;bottom: 80px;right: 10px;font-size: 14px;width: 30px;height: 30px;line-height: 30px;text-align: center; border-radius: 50%;background-color: rgba(0,0,0,.8);color: #FFF;word-break: break-all;text-shadow: none;">',"D","</div>"].join(""));k=j("device-log-dialog");var av=j("device-log-ico"),ax="iot_log_hide-"+document.domain.replace(/\./g,"_"),aA=function(){av.style.display="none";k.style.display="";I(ax)},aB=function(){k.style.display="none";av.style.display="";w(ax,1,null,null,24)};!device.debugHidden&&!v(ax)&&aA();j("device-log-close").addEventListener("touchend",function(aD){aD.preventDefault();k.parentNode.removeChild(k);av.parentNode.removeChild(av)},false);j("device-log-hide").addEventListener("touchend",function(aD){aD.preventDefault();aB()},false);av.addEventListener("click",function(aD){k.style.display=="none"?aA():aB()},false);var aC=function(aE,aD){aD=aD||aE;var aF=0,aG=0;aE.addEventListener("touchstart",function(aI){var aH=aI.changedTouches[0];aF=aH.clientX-aD.offsetLeft;aG=aH.clientY-aD.offsetTop},false);aE.addEventListener("touchmove",function(aH){aH.preventDefault();var aI=aH.changedTouches[0];aD.style.left=aI.clientX-aF+"px";aD.style.top=Math.max(0,aI.clientY-aG)+"px";return false},false)};aC(k.firstElementChild,k);aC(av);var ay=0;k.lastElementChild.addEventListener("touchstart",function(aD){var aE=aD.changedTouches[0];ay=aE.clientY},false);k.lastElementChild.addEventListener("touchmove",function(aD){aD.stopPropagation();var aE=aD.changedTouches[0];(aE.clientY>ay&&this.scrollTop<=0||aE.clientY<ay&&this.scrollTop+this.offsetHeight>=this.scrollHeight)&&aD.preventDefault()},false)}var aw=new Date();k.lastElementChild.insertAdjacentHTML("afterBegin",['<p style="border-bottom: 1px dashed gray;width: 290px;">','<span style="font-weight:bold;">'+(n(aw.getHours(),2)+":"+n(aw.getMinutes(),2)+":"+n(aw.getSeconds(),2)+"."+n(aw.getMilliseconds(),3))+"</span>: ",'<span style="color:'+(az||"")+';">'+au+"</span>","</p>"].join(""))},B=function(k){if(a(k)!="object"||a(k.list)!="array"||a(k.onSuccess)!="function"){return d.args}var au={},av=b.iOS?z:b.android?y:{};k.list.forEach(function(aw){au[aw]=false;if(device[aw]){if(K.indexOf(aw)>-1){au[aw]=true}else{for(var ax in av){if(q(ax)>=0&&av[ax].indexOf(aw)>-1){au[aw]=true;break}}}}});k.onSuccess(au)},L=function(au,av){var k;device.noCheck?k=av?av():0:B({list:[au],onSuccess:function(aw){aw[au]?k=av?av():0:b.iOS&&A(au,y)&&!A(au,z)?(k=d.iOS,m(l[k])):b.android||b.iOS?(k=d.version,m(l[k])):(k=d.platform,f(l[k],"red"))}});k=k||d.success;k==0;return{code:k,msg:l[k]}},h=v("iot_send_id")||0,o=h,C=[],D=[],E=[],F=[],G=[],c={};window.pushData=function(k){k=a(k)=="string"?JSON.parse(k):k;f("pushData: "+JSON.stringify(k),"yellow");C.forEach(function(au){au(k)})};window.serverPush=function(k){k=a(k)=="string"?JSON.parse(k):k;f("serverPush: "+JSON.stringify(k),"yellow");D.forEach(function(au){au(k)})};window.onReceiveDataPoint=function(k){k=a(k)=="string"?JSON.parse(k):k;k.type=="bytearray"&&(k.value=base64.toByteArray(k.value));f("onReceiveDataPoint: "+JSON.stringify(k),"lime");E.forEach(function(av){av(k)});var au=k.seq;au&&c[au].onSuccess&&(k.msg="接收成功",c[au].onSuccess(k),delete c[au].onSuccess)};window.onDeviceInfoChange=function(k){k=a(k)=="string"?JSON.parse(k):k;f("onDeviceInfoChange: "+JSON.stringify(k),"yellow");F.forEach(function(au){au(k)})};window.onSendDataPointResult=function(k){k=a(k)=="string"?JSON.parse(k):k;var au=k.cookie;k.sendResult==1?(k.msg=k.msg||"发送成功",f("onSendDataPointResult: "+JSON.stringify(k),"lime"),c[au]&&c[au].onSuccess&&(c[au].onSuccess(k),c[au].onAck&&delete c[au].onSuccess)):(k.msg=k.msg||(k.sendResult==2?"发送频率过高":"发送失败"),f("onSendDataPointResult: "+JSON.stringify(k),"red"),c[au]&&(clearTimeout(c[au].timeoutId),c[au].onError&&(c[au].onError(k),delete c[au].onError)))};window.onAckDataPoint=function(k){k=a(k)=="string"?JSON.parse(k):k;var au=k.cookie;k.msg=k.msg||"接收成功";f("onAckDataPoint: "+JSON.stringify(k),"lime");c[au]&&(clearTimeout(c[au].timeoutId),c[au].onAck&&(c[au].onAck(k),delete c[au].onAck))};window.AVSessionConnect=function(k){k=a(k)=="string"?JSON.parse(k):k;var au=k.code||0;k.msg=k.msg||(au==1?"视频连接已建立":"视频连接未建立");f("AVSessionConnect: "+JSON.stringify(k),"yellow");G.forEach(function(av){av(k)});au!=1&&m("视频连接还没建立，不能使用该功能")};var ar=function(k){if(a(k)!="function"){return d.args}C.push(k)},M=function(k){if(a(k)!="function"){return d.args}D.push(k)},N=function(k){if(a(k)!="function"){return d.args}E.push(k)},O=function(k){if(a(k)!="function"){return d.args}F.push(k)},P=function(k,au){c[k]={};a(au.onSuccess)=="function"&&(c[k].onSuccess=au.onSuccess);a(au.onAck)=="function"&&(c[k].onAck=au.onAck);a(au.onError)=="function"&&(c[k].onError=au.onError);a(au.onTimeout)=="function"&&(c[k].onTimeout=au.onTimeout,c[k].timeoutId=setTimeout(function(){var av={cookie:k,timeout:au.timeout,msg:"结果返回超时"};f("onAckDataPointResult: "+JSON.stringify(av),"red");c[k].onTimeout&&(c[k].onTimeout(av),delete c[k].onTimeout)},au.timeout||5e3))},Q=function(k){if(a(k)!="function"){return d.args}G.push(k)},R=function(k){if(a(k)!="object"||a(k.datapoint)!="array"&&a(k.datapoint)!="object"){return d.args}++o==Math.pow(2,16)&&(o=0);++h==Math.pow(2,16)&&(h=0);w("iot_send_id",h,null,null,0.1);var au={};a(k.datapoint)=="object"?au.datapoint=[k.datapoint]:au.datapoint=k.datapoint;if(q("5.8")>=0){au.cookie=h;a(k.onAck)=="function"&&(au.ack=1)}else if(au.datapoint[0].type==undefined||a(k.onAck)=="function"){m(l[d.version]);return d.version}au.datapoint.forEach(function(av){q("5.8")<0&&(av.seq=o,av.cookie=h,av.apiName=av.apiName||"set_data_point",av.type==undefined&&(a(av.value)=="number"?av.type="int32":a(av.value)=="array"?av.type="bytearray":av.type="string"));av.type=="bytearray"&&(av.seq=av.seq!=undefined?av.seq:o,av.value=base64.fromByteArray(av.value))});k.vibrate!=undefined&&(au.vibrate=k.vibrate);k.nfc!=undefined&&(au.nfc=k.nfc);k.lifetime!=undefined&&(au.lifetime=Math.max(1,Math.min(k.lifetime,604800))||604800);P(h,k);b.call("deviceapp/sendDataPoint",au)},S=function(k){if(a(k)!="object"||a(k.list)!="array"||a(k.onSuccess)!="function"||k.onError!==undefined&&a(k.onError)!="function"){return d.args}k.interval!=undefined&&(k.interval=Math.max(1e3,k.interval));var au=[];k.list.forEach(function(aw){a(aw)=="object"?(aw.propertyid=+aw.id,delete aw.id,aw.num!=undefined?(aw.num=aw.num+"",aw.type="1"):aw.begin_time!=undefined||aw.end_time!=undefined?aw.type="2":(aw.num="1",aw.type="1"),au.push(aw)):au.push({propertyid:+aw,type:"1",num:"1"})});var av=function(){s({url:window.location.protocol+"//device.qq.com/cgi-bin/appstage/app_get_datapoint_v3",params:{din:g("din"),appid:g("appid"),openid:g("openId"),openkey:g("openkey"),data:JSON.stringify({data:au}),_r:Math.random()},onSuccess:function(aw){aw.code==0?k.onSuccess(aw):k.onError&&k.onError(aw)},onError:k.onError})};av();k.interval&&setTimeout(function(){av();setTimeout(arguments.callee,k.interval)},k.interval)},T=function(k){if(a(k)!="object"||a(k.name)!="string"||k.params!==undefined&&a(k.params)!="object"||a(k.onSuccess)!="function"||k.onError!==undefined&&a(k.onError)!="function"){return d.args}k.params=k.params||{};s({method:"POST",requestType:"json",url:"https://yun.tim.qq.com/v4/SmartDeviceApi/"+k.name+"?apn=0",params:{din:g("din"),appid:g("appid"),pid:g("productId"),openid:g("openId"),openkey:g("openkey"),params:r(k.params)},onSuccess:function(au){au.code==0?k.onSuccess(au):k.onError&&k.onError(au)},onError:k.onError})},m=function(k){k=k||"";b.call("deviceapp/showToast",k)},U=function(k){b.call("deviceapp/startVideoChat",k||"");i.click("QQCONNECT_VIDEO_CALL")},V=function(k){b.call("deviceapp/startVideoMessage",k||"");i.click("QQCONNECT_VIDEO_MESSAGE")},W=function(k){b.call("deviceapp/sendPicture",k||"");i.click("QQCONNECT_PICTURE_UPLODE")},X=function(k){b.call("deviceapp/takePicture",k||"");i.click("QQCONNECT_PHOTO_UPLODE")},Y=function(k){b.call("deviceapp/openDeviceMsg",k||"")},Z=function(k){b.call("deviceapp/openCameraControl",k||"")},aa=function(k){b.call("deviceapp/openCameraControlEx",k||"")},ab=function(k){b.call("deviceapp/sendShareMsg",k||"")},ac=function(k){k=k||{};k.jumpTab=k.jumpTab||0;b.call("deviceapp/sendFile",k)},ad=function(k){b.call("deviceapp/setTitlebar",k||"")},ae=function(k){b.call("deviceapp/sendCameraCmd",k||"")},af=function(k){if(a(k)!="object"||a(k.params)!="object"||k.callback!==undefined&&a(k.callback)!="function"){return d.args}var au=function(av){var aw=[].slice.call(arguments);av=av||{};av.code==undefined&&(av.code=av.businessRet);if(typeof av.data=="string"){try{av.data=JSON.parse(av.data)}catch(ax){}}aw[0]=av;f("sso "+k.params.cmd+" callback: "+JSON.stringify(aw),"lime");k.callback&&k.callback.apply(null,aw)};b.iOS&&window.qw?qw.sso.uniAgent(k.params,au):b.call("deviceapp/uniAgent",k.params,au)},ag=function(k){if(a(k)!="object"||k.params!==undefined&&a(k.params)!="object"||a(k.callback)!="function"){return d.args}k.params=k.params||{};b.iOS&&window.mqq?mqq.sensor.getLocation(k.params,k.callback):b.call("deviceapp/getLocation",k.params,k.callback)},ah=function(k){if(a(k)!="object"||a(k.params)!="object"||a(k.callback)!="function"){return d.args}b.call("deviceapp/getPicture",k.params,k.callback)},ai=function(k){if(a(k)!="object"||a(k.params)!="object"||a(k.callback)!="function"){return d.args}b.iOS&&window.mqq?mqq.media.getLocalImage(k.params,k.callback):b.call("deviceapp/getLocalImage",k.params,k.callback)},aj=function(k){if(a(k)!="object"||a(k.params)!="object"||a(k.callback)!="function"){return d.args}b.iOS&&window.mqq?mqq.ui.showActionSheet(k.params,k.callback):(k.params.callbackKey="onclick",b.call("deviceapp/showActionSheet",k.params,k.callback))},ak=function(k){if(a(k)!="object"||a(k.params)!="object"||a(k.callback)!="function"){return d.args}k.params.keepCallback=true;b.call("deviceapp/operateSendFile",k.params,k.callback)},al=function(k){if(a(k)!="object"||k.params!==undefined&&a(k.params)!="object"||k.callback!==undefined&&a(k.callback)!="function"){return d.args}k.params=k.params||{};b.call("deviceapp/commentCapture",k.params,k.callback)},am=function(k){if(a(k)!="object"||a(k.params)!="object"||k.callback!==undefined&&a(k.callback)!="function"){return d.args}var au=function(ax,av){var aw=[].slice.call(arguments);av=av||{};if(typeof av=="string"){try{av=JSON.parse(av)}catch(ay){}}av.code==undefined&&(av.code=av.ret);aw[1]=av;f("postCgiProxy "+k.params.name+" callback: "+JSON.stringify(aw),"lime");k.callback&&k.callback.apply(null,aw)};b.call("deviceapp/postCgiProxy",k.params,au)},an=function(k){if(a(k)!="function"){return d.args}b.call("deviceapp/shareQZoneAlbum",{},k)},ao=function(k){b.call("deviceapp/shareDevice",k||"")},at=function(k){b.call("deviceapp/openVisualDoor",k||"")},ap=function(k){b.call("deviceapp/moreSetRefresh",k||"")};i.exposure("QQCONNECT_APP_SHOW");J("iot.qq.com","/deviceAPI"+location.pathname);var e={log:f,checkApi:B,onServerPush:M,onReceive:N,onChange:O,send:R,query:S,openApi:T,startVideoChat:U,startVideoMessage:V,showToast:m,sendPicture:W,takePicture:X,openDeviceMsg:Y,openCameraControl:Z,sendShareMsg:ab,setTitlebar:ad,sendFile:ac,onAVSessionConnect:Q,sendCameraCmd:ae,shareQZoneAlbum:an,shareDevice:ao,moreSetRefresh:ap,getPicture:ah,getLocalImage:ai,operateSendFile:ak};/(qq\.com)$/.test(window.location.hostname)&&(e.openCameraControlEx=aa,e.xhr=s,e.sso=af,e.getLocation=ag,e.showActionSheet=aj,e.screenShot=al,e.postCgiProxy=am);for(var p in e){a(e[p])=="function"&&(e[p]=function(au,av){return function(){var k=arguments;return L(au,function(){return av.apply(e,k)})}}(p,e[p]))}return e}(window.JsBridge,window.Stat);/*  |xGv00|6e7641cf4c296e70a7a0d0be9cddecfc */