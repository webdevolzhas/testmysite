!function(t,o){function n(){for(var t="",o="ABCDE1234567890",n=0;n<3;n++)t+=o.charAt(Math.floor(Math.random()*o.length));return t+(new Date).getTime()}function e(t,n,e){var i=new Date;i.setTime(i.getTime()+24*e*60*60*1e3);var r="expires="+i.toUTCString();o.cookie=t+"="+n+"; "+r+";path=/"}function i(t){for(var n=t+"=",e=o.cookie.split(";"),i=0;i<e.length;i++){for(var r=e[i];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(n))return r.substring(n.length,r.length)}return""}if(void 0===t.monsidoUrl){var r=function(t){try{var n=o.createElement("script");n.type="text/javascript",n.async=!0,n.src=t;var e=o.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)}catch(t){}},a=function(t){var o=new Image;o.src=t,o.setAttribute("style","display:none"),o.setAttribute("height",1),o.setAttribute("width",1)},s=function(n){return"uninitialized"!=o.readyState&&"loading"!=o.readyState?n():void(t.attachEvent?t.attachEvent("onload",n):t.addEventListener("load",n,!1))};try{t.monsidoUrl="https://app.monsido.com",t.monsidoTrackingUrl="https://tracking.monsido.com",t.monsidoEnv="production";var c=o.URL,d=(c.indexOf("#"),t.location.hash);if(d.indexOf("#_monT=")!==-1){var m,p=d.split(/=(.+)?/);if("#_monT"===p[0]){var l=p[1].split("~"),h=l[0].split("~")[0].split("=")[1];if(l.length>=2&&(m=l[1].split("~")[0].split("=")[1]),h)switch(m){case"1":r("https://cdn.monsido.com/tool/javascripts/monsido_sop_test.js");break;case"2":r("https://cdn.monsido.com/tool/javascripts/monsido_sop_old.js");break;default:r("https://cdn.monsido.com/tool/javascripts/monsido_sop.js")}}}else{var v=_monsido[0][1];if(_monsido.length>=2&&"_withStatistics"==_monsido[1][0]&&"true"!=_monsido[1][1]){var f=o.URL,g=monsidoUrl+"/api/page_hit?token="+encodeURIComponent(v)+"&page_url="+encodeURIComponent(f);a(g)}else{var u=i("monsido"),U=n();u||(u=n()),e("monsido",u,30),s(function(){var n=encodeURIComponent(_monsido[0][1]),e=encodeURIComponent(o.URL),i=encodeURIComponent(u),r=encodeURIComponent(t.screen.width+"x"+t.screen.height),s=encodeURIComponent(o.referrer),c=encodeURIComponent(U),d=0;try{d=t.performance.timing.domContentLoadedEventEnd-t.performance.timing.navigationStart}catch(t){}d=encodeURIComponent(d),a(monsidoTrackingUrl+"/?a="+n+"&b="+e+"&c="+i+"&d="+r+"&e="+s+"&f="+c+"&g="+d+"&h=2")})}}}catch(t){}}}(window,document);