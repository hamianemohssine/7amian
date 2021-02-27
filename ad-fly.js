var viru = 0;
var X3ele = document.getElementsByTagName("a");
var Xdad=X3ele.length;
function extractHostname(url) {var hostname;if (url.indexOf("//") > -1) {hostname = url.split('/')[2];}else {hostname = url.split('/')[0];}hostname = hostname.split(':')[0];hostname = hostname.split('?')[0];hostname = hostname.replace("www.","");return hostname;}
do {
  var hXbl = X3ele[viru].href;
  var kx3j = extractHostname(hXbl)
    if (sd3Xsd.indexOf(kx3j)>-1){
    }else{
       hXbl = encodeURIComponent(hXbl);
X3ele[viru].href="https://cut-my-url-hamiane.blogspot.com/?url="+ btoa(hXbl);}
++viru;
} while (viru < Xdad);
