/*!
 * @license
 * 
 * dhtmlxGantt v.5.1.2 Professional Evaluation
 * This software is covered by DHTMLX Evaluation License. Contact sales@dhtmlx.com to get Commercial or Enterprise license. Usage without proper license is prohibited.
 * 
 * (c) Dinamenta, UAB.
 * 
 */
Gantt.plugin(function(e){!function(e){function t(r){if(a[r])return a[r].exports;var o=a[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var a={};t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}({7:function(e,t,a){e.exports=a(8)},8:function(t,a){e.date.date_to_str=function(t,a){return function(r){return t.replace(/%[a-zA-Z]/g,function(t){switch(t){case"%d":return a?e.date.to_fixed(r.getUTCDate()):e.date.to_fixed(r.getDate());case"%m":return a?e.date.to_fixed(r.getUTCMonth()+1):e.date.to_fixed(r.getMonth()+1);case"%j":return a?r.getUTCDate():r.getDate();case"%n":return a?r.getUTCMonth()+1:r.getMonth()+1;case"%y":return a?e.date.to_fixed(r.getUTCFullYear()%100):e.date.to_fixed(r.getFullYear()%100);case"%Y":return a?r.getUTCFullYear():r.getFullYear();case"%D":return a?e.locale.date.day_short[r.getUTCDay()]:e.locale.date.day_short[r.getDay()];case"%l":return a?e.locale.date.day_full[r.getUTCDay()]:e.locale.date.day_full[r.getDay()];case"%M":return a?e.locale.date.month_short[r.getUTCMonth()]:e.locale.date.month_short[r.getMonth()];case"%F":return a?e.locale.date.month_full[r.getUTCMonth()]:e.locale.date.month_full[r.getMonth()];case"%h":return a?e.date.to_fixed((r.getUTCHours()+11)%12+1):e.date.to_fixed((r.getHours()+11)%12+1);case"%g":return a?(r.getUTCHours()+11)%12+1:(r.getHours()+11)%12+1;case"%G":return a?r.getUTCHours():r.getHours();case"%H":return a?e.date.to_fixed(r.getUTCHours()):e.date.to_fixed(r.getHours());case"%i":return a?e.date.to_fixed(r.getUTCMinutes()):e.date.to_fixed(r.getMinutes());case"%a":return a?r.getUTCHours()>11?"pm":"am":r.getHours()>11?"pm":"am";case"%A":return a?r.getUTCHours()>11?"PM":"AM":r.getHours()>11?"PM":"AM";case"%s":return a?e.date.to_fixed(r.getUTCSeconds()):e.date.to_fixed(r.getSeconds());case"%W":return a?e.date.to_fixed(e.date.getUTCISOWeek(r)):e.date.to_fixed(e.date.getISOWeek(r));default:return t}})}},e.date.str_to_date=function(t,a){return function(r){for(var o=[0,0,1,0,0,0],n=r.match(/[a-zA-Z]+|[0-9]+/g),s=t.match(/%[a-zA-Z]/g),u=0;u<s.length;u++)switch(s[u]){case"%j":case"%d":o[2]=n[u]||1;break;case"%n":case"%m":o[1]=(n[u]||1)-1;break;case"%y":o[0]=1*n[u]+(n[u]>50?1900:2e3);break;case"%g":case"%G":case"%h":case"%H":o[3]=n[u]||0;break;case"%i":o[4]=n[u]||0;break;case"%Y":o[0]=n[u]||0;break;case"%a":case"%A":o[3]=o[3]%12+("am"==(n[u]||"").toLowerCase()?0:12);break;case"%s":o[5]=n[u]||0;break;case"%M":o[1]=e.locale.date.month_short_hash[n[u]]||0;break;case"%F":o[1]=e.locale.date.month_full_hash[n[u]]||0}return a?new Date(Date.UTC(o[0],o[1],o[2],o[3],o[4],o[5])):new Date(o[0],o[1],o[2],o[3],o[4],o[5])}}}})});
//# sourceMappingURL=dhtmlxgantt_csp.js.map