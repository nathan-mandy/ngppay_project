(()=>{"use strict";var e,t,i,r={619:e=>{e.exports=window.wp.hooks}},n={};function a(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return r[e](i,i.exports,a),i.exports}a.m=r,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,i)=>(a.f[i](e,t),t)),[])),a.u=e=>e+".js",a.miniCssF=e=>e+".css",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="vital-swiper:",a.l=(i,r,n,s)=>{if(e[i])e[i].push(r);else{var o,l;if(void 0!==n)for(var p=document.getElementsByTagName("script"),d=0;d<p.length;d++){var c=p[d];if(c.getAttribute("src")==i||c.getAttribute("data-webpack")==t+n){o=c;break}}o||(l=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+n),o.src=i),e[i]=[r];var u=(t,r)=>{o.onerror=o.onload=null,clearTimeout(f);var n=e[i];if(delete e[i],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),l&&document.head.appendChild(o)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=i[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e+"../"})(),(()=>{if("undefined"!=typeof document){var e={900:0};a.f.miniCss=(t,i)=>{e[t]?i.push(e[t]):0!==e[t]&&{183:1}[t]&&i.push(e[t]=(e=>new Promise(((t,i)=>{var r=a.miniCssF(e),n=a.p+r;if(((e,t)=>{for(var i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var n=(s=i[r]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(n===e||n===t))return s}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var s;if((n=(s=a[r]).getAttribute("data-href"))===e||n===t)return s}})(r,n))return t();((e,t,i,r,n)=>{var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",a.nc&&(s.nonce=a.nc),s.onerror=s.onload=i=>{if(s.onerror=s.onload=null,"load"===i.type)r();else{var a=i&&i.type,o=i&&i.target&&i.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+o+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=o,s.parentNode&&s.parentNode.removeChild(s),n(l)}},s.href=t,document.head.appendChild(s)})(e,n,0,t,i)})))(t).then((()=>{e[t]=0}),(i=>{throw delete e[t],i})))}}})(),(()=>{var e={900:0};a.f.j=(t,i)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var n=new Promise(((i,n)=>r=e[t]=[i,n]));i.push(r[2]=n);var s=a.p+a.u(t),o=new Error;a.l(s,(i=>{if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;o.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",o.name="ChunkLoadError",o.type=n,o.request=s,r[1](o)}}),"chunk-"+t,t)}};var t=(t,i)=>{var r,n,[s,o,l]=i,p=0;if(s.some((t=>0!==e[t]))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);l&&l(a)}for(t&&t(i);p<s.length;p++)n=s[p],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0},i=globalThis.webpackChunkvital_swiper=globalThis.webpackChunkvital_swiper||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),i=a(619),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".wp-block-vital-swiper");e&&setTimeout((()=>{!function(e){a.e(183).then(a.bind(a,183)),a.e(59).then(a.bind(a,59)).then((t=>{e.forEach((e=>setTimeout((()=>{!function(e,t){if(!e)return null;const r=e.querySelector(".swiper");if(!r)return null;new t(r,(0,i.applyFilters)("vitalSwiper.swiperConfig",{speed:300,slidesPerView:1},e,t))}(e,t.Swiper)}),0)))}))}(e)}),0)})),(0,i.addFilter)("vitalSwiper.swiperConfig","vitalSwiper.swiperConfig.speed",((e,t)=>{const{speed:i}=t.dataset;return i?Object.assign({},e,{speed:parseInt(i)}):e})),(0,i.addFilter)("vitalSwiper.swiperConfig","vitalSwiper.swiperConfig.slidesPerView",((e,t)=>{if(!Object.keys(t.dataset).includes("slidesPerView"))return e;const{slidesPerView:i}=t.dataset,r=parseInt(i);return!r||Number.isNaN(r)?Object.assign({},e,{slidesPerView:"auto"}):Object.assign({},e,{slidesPerView:r})})),(0,i.addFilter)("vitalSwiper.swiperConfig","vitalSwiper.swiperConfig.spaceBetween",((e,t)=>{const{spaceBetween:i}=t.dataset;return i?Object.assign({},e,{spaceBetween:parseInt(i)}):e})),(0,i.addFilter)("vitalSwiper.swiperConfig","vitalSwiper.swiperConfig.autoplay",((e,t,i)=>{if(!t.classList.contains("autoplay"))return e;const{Autoplay:r}=i,n=parseInt(t.dataset.autoplayDelay),a="true"===t.dataset.pauseOnMouseEnter,s=!a;return Object.assign({},e,{autoplay:{delay:n,pauseOnMouseEnter:a,disableOnInteraction:s}})})),(0,i.addFilter)("vitalSwiper.swiperConfig","vitalSwiper.swiperConfig.loop",((e,t)=>t.classList.contains("infinite")?Object.assign({},e,{loop:!0}):e)),(0,i.addFilter)("vitalSwiper.swiperConfig","vitalSwiper.swiperConfig.autoHeight",((e,t)=>t.classList.contains("autoheight-slides")?Object.assign({},e,{autoHeight:!0}):e)),(0,i.addFilter)("vitalSwiper.swiperConfig","vitalSwiper.swiperConfig.centeredSlides",((e,t)=>t.classList.contains("centered-slides")?Object.assign({},e,{centeredSlides:!0}):e)),(0,i.addFilter)("vitalSwiper.swiperConfig","vitalSwiper.swiperConfig.navigation",((e,t,i)=>{if(!t.classList.contains("has-navigation"))return e;const{Navigation:r}=i;return Object.assign({},e,{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})})),(0,i.addFilter)("vitalSwiper.swiperConfig","vitalSwiper.swiperConfig.pagination",((e,t,i)=>{if(!t.classList.contains("has-pagination"))return e;const{Pagination:r}=i;return Object.assign({},e,{pagination:{el:".swiper-pagination",clickable:!0}})})),(0,i.addFilter)("vitalSwiper.swiperConfig","vitalSwiper.swiperConfig.scrollbar",((e,t,i)=>{if(!t.classList.contains("has-scrollbar"))return e;const{Scrollbar:r}=i;return Object.assign({},e,{scrollbar:{el:".swiper-scrollbar",draggable:!0}})})),(0,i.addFilter)("vitalSwiper.swiperConfig","vitalSwiper.swiperConfig.fade",((e,t,i)=>{if(!t.classList.contains("has-effect-fade"))return e;const{EffectFade:r}=i;return Object.assign({},e,{effect:"fade"})})),(0,i.addFilter)("vitalSwiper.swiperConfig","vitalSwiper.swiperConfig.advancedSettingsJSON",((e,t)=>{const{advancedSettings:i}=t.dataset;if(!i)return e;try{const t=JSON.parse(i);return Object.assign({},e,t)}catch(t){return console.warn(t),e}})),(0,i.addFilter)("vitalSwiper.swiperConfig","vitalSwiper.swiperConfig.dispatchInit",((e,t)=>Object.assign({},e,{on:{...e.on,afterInit:function(){t.dispatchEvent(new CustomEvent("vital-swiper-initialized",{detail:{swiper:this}}))}}})))})();