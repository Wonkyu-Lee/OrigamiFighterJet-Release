(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],f=0,p=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"16cc":function(e,t,n){e.exports=n.p+"img/singapore.03bb582a.svg"},"1f85":function(e,t,n){e.exports=n.p+"img/canada.48fabe4d.svg"},"2a80":function(e,t,n){},"395b":function(e,t,n){e.exports=n.p+"img/f-16_skin02.c9db2502.svg"},"3b1b":function(e,t,n){var r={"./f-16_skin01.svg":"e19e","./f-16_skin02.svg":"395b","./mirage_skin01.svg":"c04b","./mirage_skin02.svg":"d9fc","./su-57.svg":"c05d"};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id="3b1b"},"3f92":function(e,t,n){},"4afd":function(e,t,n){e.exports=n.p+"img/romania.fa80ca31.svg"},"55f4":function(e,t,n){e.exports=n.p+"img/india.1c4ace5c.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("div",{staticClass:"container"},[n("Editor",{attrs:{analytics:e.analytics}})],1)])],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"editor"}},[n("div",{style:e.paperSize,attrs:{id:"paper"}},[n(e.currentComponent,{tag:"component",attrs:{roundel:e.roundel},on:{openColorInput:e.openColorInput}})],1),n("div",{staticStyle:{margin:"10px"}},[n("v-select",{attrs:{items:e.items,"item-text":"name","item-value":"fileName",label:"Skin","persistent-hint":"","return-object":"","single-line":""},model:{value:e.skin,callback:function(t){e.skin=t},expression:"skin"}}),n("div",{staticStyle:{display:"flex","flex-direction":"column"}},e._l(Object.entries(e.colors),(function(t){var r=t[0],i=t[1];return n("div",{key:r},[n("input",{ref:r,refInFor:!0,attrs:{type:"color",name:r},domProps:{value:i},on:{input:function(t){return e.update(r,t)}}}),n("label",{attrs:{for:r}},[e._v(e._s(r))])])})),0),n("roundel-picker",{model:{value:e.roundel,callback:function(t){e.roundel=t},expression:"roundel"}}),n("v-btn",{attrs:{block:""},on:{click:function(t){return e.printOut("paper")}}},[e._v("Print")])],1)])},s=[],c=n("1da1"),u=(n("96cf"),n("ac1f"),n("5319"),n("466d"),n("99af"),n("b0c0"),n("add5")),l=n.n(u),f=n("3835"),p=(n("d3b7"),n("4fad"),n("cb29"),n("5530")),g=n("b85c");n("159b");function d(e){var t=r(e),n=Object(f["a"])(t,2);function r(e){var t=new DOMParser,n=t.parseFromString(e,"image/svg+xml"),r=n.getElementsByTagName("svg")[0],s=i(r),c=o(r),u=a(s,c);return[r,u]}function i(e){function t(e,r){if(null!=e){var i=n(e);null!=i&&(r[e.id]=i);var o,a=Object(g["a"])(e.children);try{for(a.s();!(o=a.n()).done;){var s=o.value;t(s,r)}}catch(c){a.e(c)}finally{a.f()}}}function n(e){var t=r(e),n=i(e),s=o(e),c=a(e),u=null;return null!=t?u={el:e,fill:t}:null!=n?u={el:e,stroke:n}:null!=c&&(u={el:e,roundel:c}),null!=u&&null!=s&&(u.pattern=s),u}function r(e){var t=e.getAttribute("fill");return"string"==typeof t&&"none"!=t?t:null}function i(e){var t=e.getAttribute("stroke");return"string"==typeof t&&"none"!=t?t:null}function o(e){var t=e.id.match(/(pattern_\w+)-/);return null==t?null:t[1]}function a(e){var t=e.id.match(/(roundel_\w+)$/);if(null==t)return null;var n=e.getAttribute("xlink:href"),r=n.match(/.*\/(\w+)[.]svg$/);return null==r?null:r[1]}var s={};return t(e,s),s}function o(e){function t(e,n){if(null==e)return null;"string"==typeof e.id&&null!=/pattern_\w+$/.exec(e.id)&&n.push(e);var r,i=Object(g["a"])(e.children);try{for(i.s();!(r=i.n()).done;){var o=r.value;t(o,n)}}catch(a){i.e(a)}finally{i.f()}}var n=[];return t(e,n),n}function a(e,t){var n={};return t.forEach((function(t){for(var r={},i=0,o=Object.entries(e);i<o.length;i++){var a=Object(f["a"])(o[i],2),s=a[0],c=a[1];void 0!==c.pattern&&c.pattern!==t.id||(r[s]=Object(p["a"])({},c))}n[t.id]=r})),n}this.svg=n[0],this.skins=n[1]}var v=n("be02"),h=n("3b1b");function m(e){return v("./"+e+".svg")}function b(e){return h("./"+e+".svg")}function k(e){return w.apply(this,arguments)}function w(){return w=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,i,o,a,s,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return n=e.sent,i=Object(f["a"])(n,4),o=i[0],a=i[1],s=i[2],c=i[3],u=r["a"].component("fighter",{template:o,props:{colors:{type:Object,default:function(){return a}},roundel:{type:String,default:"france"}},data:function(){return{target:"base",fighterText:"",currentComponent:null}},methods:{clickMe:function(){console.log("click")},setTarget:function(e){console.log('setTarget("'.concat(e,'")')),this.target=e,this.$emit("openColorInput",e)},getColor:function(e){return this.colors[e]},roundelPath:function(e){return m(e)}},watch:{color:{handler:function(e){console.log("watch change taget color(".concat(this.target,", ").concat(e,")"));var t=Object.assign({},this.colors);"string"==typeof e?t[this.target]=e:e.hex&&(t[this.target]=e.hex),this.colors=t}}}}),e.abrupt("return",{component:u,width:s,height:c,colors:a});case 10:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}function x(e){return y.apply(this,arguments)}function y(){return y=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,r,i,o,a,s,c,u,l,p,g,v,h,m,k,w,x,y,O,_,j,A,S,C,P,R,M,N;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=b(t),console.log(n),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.text();case 7:for(i=e.sent,o=new d(i),a=o.svg.getAttribute("width"),s=o.svg.getAttribute("height"),o.svg.setAttribute("width","100%"),o.svg.setAttribute("height","100%"),c=0,u=Object.entries(o.skins);c<u.length;c++)for(l=Object(f["a"])(u[c],2),p=l[0],g=l[1],console.log(p),v=0,h=Object.entries(g);v<h.length;v++)m=Object(f["a"])(h[v],2),k=m[0],w=m[1],w.roundel&&(w.el.removeAttribute("xlink:href"),w.el.setAttribute("v-bind:xlink:href","roundelPath(roundel)")),w.fill&&(w.el.removeAttribute("fill"),w.el.setAttribute("v-bind:fill",'getColor("'.concat(k,'")')),w.el.setAttribute("v-on:click.prevent",'setTarget("'.concat(k,'")'))),w.stroke&&(w.el.removeAttribute("stroke"),w.el.setAttribute("v-bind:stroke",'getColor("'.concat(k,'")')),w.el.setAttribute("v-on:click.prevent",'setTarget("'.concat(k,'")')));for(x={},y=0,O=Object.entries(o.skins);y<O.length;y++)for(_=Object(f["a"])(O[y],2),j=_[0],A=_[1],console.log(j),S=0,C=Object.entries(A);S<C.length;S++)P=Object(f["a"])(C[S],2),R=P[0],M=P[1],M.fill?x[R]=M.fill:M.stroke&&(x[R]=M.stroke);return N=o.svg.outerHTML,e.abrupt("return",[N,x,a,s]);case 18:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}var O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"roundels"},e._l(e.roundels,(function(t){return n("div",{key:t,staticStyle:{width:"70px"}},[n("img",{staticClass:"roundel",attrs:{src:e.assetPath(t),width:32*e.roundelRatio(t),height:"32"},on:{click:function(n){return e.setRoundel(t)}}})])})),0)},_=[],j={props:["value"],data:function(){return{roundel:this.value,roundels:["france","saudi","canada","swiss","us","us_low","us_white","greece","german","soviet","korea","japan","czech","india","italy","poland","romania","singapore","spain","sweden","uk","ukraine"],roundelsRatios:{us:204/108,us_low:204/108,us_white:204/108,korea:1160/481.4}}},methods:{assetPath:function(e){var t=n("be02");return t("./"+e+".svg")},setRoundel:function(e){this.roundel=e,this.$emit("input",e)},roundelRatio:function(e){var t=this.roundelsRatios[e];return void 0===t?1:t}}},A=j,S=(n("599a"),n("2877")),C=Object(S["a"])(A,O,_,!1,null,"84abaa6e",null),P=C.exports,R=n("000b"),M={props:["analytics"],components:{RoundelPicker:P},data:function(){return{currentComponent:null,roundel:"france",width:null,height:null,paperSize:null,skin:{name:"Mirage (1)",fileName:"mirage_skin01"},items:[{name:"Mirage (1)",fileName:"mirage_skin01"},{name:"Mirage (2)",fileName:"mirage_skin02"},{name:"F-16 (1)",fileName:"f-16_skin01"},{name:"F-16 (2)",fileName:"f-16_skin02"}],colors:{}}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.replace();case 2:case"end":return t.stop()}}),t)})))()},methods:{replace:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.skin.fileName,t.next=3,k(n);case 3:r=t.sent,e.width=r.width,e.height=r.height,i=r.width.match(/\d+/g)[0],o=r.height.match(/\d+/g)[0],e.paperSize="width:500px; height:".concat(500*o/i,"px;"),e.currentComponent=r.component,e.colors=r.colors;case 11:case"end":return t.stop()}}),t)})))()},update:function(e,t){console.log("set prop ".concat(e," with ").concat(t.target.value)),this.colors[e]=t.target.value},openColorInput:function(e){console.log("open color input of ".concat(e));var t=this.$refs[e][0];t.focus(),t.click()},printOut:function(e){Object(R["b"])(this.analytics,"print_triggered"),Object(R["b"])(this.analytics,"print ".concat(this.skin.name)),l()({printable:e,header:this.skin.name,type:"html",style:"#paper { width:".concat(this.width,"; height:").concat(this.height,"; margin-left:auto; margin-right: 0;}"),scanStyles:!1})}},watch:{skin:{handler:function(e){this.replace(e.fileName)}}}},N=M,E=(n("6cc2"),n("6544")),T=n.n(E),I=n("8336"),$=n("b974"),z=Object(S["a"])(N,a,s,!1,null,"275d9905",null),D=z.exports;T()(z,{VBtn:I["a"],VSelect:$["a"]});var F=n("260b"),B={apiKey:"AIzaSyBmaBOAaPCG0VKfxwRuZiMz6Ja17p5Q3_g",authDomain:"origami-skin.firebaseapp.com",projectId:"origami-skin",storageBucket:"origami-skin.appspot.com",messagingSenderId:"569029957939",appId:"1:569029957939:web:0fb024fa637842be464646",measurementId:"G-ELHG0SG728"},V=Object(F["a"])(B),G={name:"App",components:{Editor:D},data:function(){return{analytics:Object(R["a"])(V)}}},L=G,U=(n("c5e7"),n("7496")),J=n("f6c4"),H=Object(S["a"])(L,i,o,!1,null,"1766854b",null),K=H.exports;T()(H,{VApp:U["a"],VMain:J["a"]});var Q=n("f309");r["a"].use(Q["a"]);var Z=new Q["a"]({}),q=n("f6dd");r["a"].config.productionTip=!1,r["a"].use(q["a"]),new r["a"]({vuetify:Z,render:function(e){return e(K)}}).$mount("#app")},"599a":function(e,t,n){"use strict";n("3f92")},"5bf1":function(e,t,n){e.exports=n.p+"img/us.8105602b.svg"},"62eb":function(e,t,n){e.exports=n.p+"img/ukraine.c16bba30.svg"},"632d":function(e,t,n){e.exports=n.p+"img/soviet.b65b90ca.svg"},"634c":function(e,t,n){e.exports=n.p+"img/spain.028e8d03.svg"},6559:function(e,t,n){e.exports=n.p+"img/uk.b68f5897.svg"},"65a2":function(e,t,n){e.exports=n.p+"img/czech.d48166a5.svg"},"6cc2":function(e,t,n){"use strict";n("bb88")},"71d0":function(e,t,n){e.exports=n.p+"img/france.8c4833dd.svg"},7413:function(e,t,n){e.exports=n.p+"img/us_low.86aa1d0e.svg"},"8b0f":function(e,t,n){e.exports=n.p+"img/greece.5958f057.svg"},"9e33":function(e,t,n){e.exports=n.p+"img/sweden.3224b747.svg"},a2c4:function(e,t,n){e.exports=n.p+"img/us_white.1c973490.svg"},ac97:function(e,t,n){e.exports=n.p+"img/poland.c6f9265c.svg"},b04d:function(e,t,n){e.exports=n.p+"img/swiss.17c44bad.svg"},bb88:function(e,t,n){},be02:function(e,t,n){var r={"./canada.svg":"1f85","./czech.svg":"65a2","./france.svg":"71d0","./german.svg":"fe2c","./greece.svg":"8b0f","./india.svg":"55f4","./italy.svg":"c297","./japan.svg":"e22f","./korea.svg":"e893c","./poland.svg":"ac97","./romania.svg":"4afd","./saudi.svg":"e489","./singapore.svg":"16cc","./soviet.svg":"632d","./spain.svg":"634c","./sweden.svg":"9e33","./swiss.svg":"b04d","./uk.svg":"6559","./ukraine.svg":"62eb","./us.svg":"5bf1","./us_low.svg":"7413","./us_white.svg":"a2c4"};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id="be02"},c04b:function(e,t,n){e.exports=n.p+"img/mirage_skin01.b8b69332.svg"},c05d:function(e,t,n){e.exports=n.p+"img/su-57.09b05d6d.svg"},c297:function(e,t,n){e.exports=n.p+"img/italy.40ec2dc6.svg"},c5e7:function(e,t,n){"use strict";n("2a80")},d9fc:function(e,t,n){e.exports=n.p+"img/mirage_skin02.0efe8a65.svg"},e19e:function(e,t,n){e.exports=n.p+"img/f-16_skin01.c73dacc0.svg"},e22f:function(e,t,n){e.exports=n.p+"img/japan.219e0ce2.svg"},e489:function(e,t,n){e.exports=n.p+"img/saudi.e9e7a7cf.svg"},e893c:function(e,t,n){e.exports=n.p+"img/korea.3803f607.svg"},fe2c:function(e,t,n){e.exports=n.p+"img/german.9e1b1f84.svg"}});