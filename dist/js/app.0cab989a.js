(function(e){function t(t){for(var n,s,o=t[0],c=t[1],l=t[2],f=0,d=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},i=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"17f2":function(e,t,r){"use strict";r("9a00")},2390:function(e,t,r){"use strict";r("ffe8")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("7b17"),r("ab8b");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header",{on:{search:e.searchMovies}}),r("Main",{attrs:{cards:e.cards}})],1)},i=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"header-container row"},[e._m(0),r("div",{staticClass:"icon-container col "},[r("div",{staticClass:"icon-content"},[r("ul",[r("li",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchString,expression:"searchString"}],attrs:{type:"text",placeholter:"search"},domProps:{value:e.searchString},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$emit("search",e.searchString)},input:function(t){t.target.composing||(e.searchString=t.target.value)}}})]),r("li",[r("i",{staticClass:"fas fa-search",on:{click:function(t){return e.$emit("search",e.searchString)}}})]),r("li",[e._v("BAMBINI")]),e._m(1)])])])])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logo-container col-6"},[n("div",{staticClass:"logo-content"},[n("img",{attrs:{src:r("cf05"),alt:"logo-Netflix"}})]),n("div",{staticClass:"nav col-12"},[n("ul",[n("li",[e._v("Home")]),n("li",[e._v("Serie Tv")]),n("li",[e._v("Film")]),n("li",[e._v("Originali")]),n("li",[e._v("Aggiunti di recente")]),n("li",[e._v("La mia lista")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("i",{staticClass:"fas fa-bell"})])}],c={name:"Header",data:function(){return{searchString:""}}},l=c,u=(r("665f"),r("2877")),f=Object(u["a"])(l,s,o,!1,null,"74e821e4",null),d=f.exports,p=r("bc3a"),v=r.n(p),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e._m(0),r("div",{staticClass:"row "},e._l(e.cards,(function(e){return r("Cards",{key:e.id,staticClass:"cover col",attrs:{poster_path:e.poster_path,title:e.title,original_title:e.original_title,original_language:e.original_language,vote_average:e.vote_average}})})),1)])},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("span",{staticClass:"title"},[e._v("I TITOLI DEL MOMENTO")])])}],_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cards-container"},[r("div",{staticClass:"cards-details",on:{mouseover:function(t){e.hover=!0},mouseleave:function(t){e.hover=!1}}},[r("div",{staticClass:"movie-poster"},[r("img",{attrs:{src:e.generateImg,alt:"poster"}})]),r("br"),e.hover?r("div",{staticClass:"movie-details"},[r("h5",[e._v(e._s(e.title))]),r("div",{staticClass:"original_launguage"},[e._v(" Original Language: "),"en"==e.original_language?r("flag",{attrs:{iso:"us"}}):r("flag",{attrs:{iso:e.original_language}})],1),r("div",{staticClass:"vote"},[e._v("Score: "+e._s(e.vote_average))])]):e._e()])])},m=[],b=(r("a9e3"),{name:"Cards",props:{poster_path:String,title:String,original_title:String,original_language:String,vote_average:Number},computed:{generateImg:function(){return"https://image.tmdb.org/t/p/w342"+this.poster_path}},data:function(){return{hover:!1}}}),y=b,C=(r("2390"),Object(u["a"])(y,_,m,!1,null,"49fc9dc7",null)),O=C.exports,S={name:"Main",components:{Cards:O},props:{cards:Array,filteredMovies:Array}},w=S,M=(r("17f2"),Object(u["a"])(w,g,h,!1,null,null,null)),x=M.exports,j={name:"App",components:{Header:d,Main:x},data:function(){return{filteredMovies:[],cards:[]}},created:function(){var e=this;v.a.get("https://api.themoviedb.org/3/movie/popular?api_key=7d3154d492e3c72fd9ee0846bf2ce25c").then((function(t){e.cards=t.data.results,e.filteredMovies=t.data.results}))},methods:{searchMovies:function(e){var t=this;0!=e.lenght?v.a.get("https://api.themoviedb.org/3/search/movie?api_key=7d3154d492e3c72fd9ee0846bf2ce25c&query=".concat(e)).then((function(e){t.cards=e.data.results})):this.filteredMovies=this.cards}}},k=j,E=Object(u["a"])(k,a,i,!1,null,null,null),$=E.exports,P=r("ecee"),I=r("c074"),T=r("ad3d");r("15f5");P["c"].add(I["a"]),n["a"].component("font-awesome-icon",T["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e($)}}).$mount("#app")},"665f":function(e,t,r){"use strict";r("f153")},"9a00":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.3483cbba.png"},f153:function(e,t,r){},ffe8:function(e,t,r){}});
//# sourceMappingURL=app.0cab989a.js.map