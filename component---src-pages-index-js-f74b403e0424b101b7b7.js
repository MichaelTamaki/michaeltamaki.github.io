"use strict";(self.webpackChunkmichaeltamaki_github_io=self.webpackChunkmichaeltamaki_github_io||[]).push([[678],{8032:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return v},P:function(){return w},S:function(){return D},_:function(){return s},a:function(){return i},b:function(){return m},g:function(){return d},h:function(){return c}});var r=a(7294),l=(a(2369),a(5697)),n=a.n(l);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(l[a]=e[a]);return l}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function o(e,t,a){const r={};let l="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(l="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:l,"data-gatsby-image-wrapper":"",style:r}}function m(e,t,a,r,l){return void 0===l&&(l={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},l,{opacity:t?1:0})})}function d(e,t,a,r,l,n,s,c){const o={};n&&(o.backgroundColor=n,"fixed"===a?(o.width=r,o.height=l,o.backgroundColor=n,o.position="relative"):("constrained"===a||"fullWidth"===a)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),s&&(o.objectFit=s),c&&(o.objectPosition=c);const m=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return m}const u=["children"],A=function(e){let{layout:t,width:a,height:l}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:l/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+l+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=s(e,u);return r.createElement(r.Fragment,null,r.createElement(A,i({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:a,loading:l,alt:n="",shouldLoad:c}=e,o=s(e,f);return r.createElement("img",i({},o,{decoding:"async",loading:l,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:n}))},E=function(e){let{fallback:t,sources:a=[],shouldLoad:l=!0}=e,n=s(e,g);const c=n.sizes||(null==t?void 0:t.sizes),o=r.createElement(h,i({},n,t,{sizes:c,shouldLoad:l}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:c})})),o):o};var b;h.propTypes={src:l.string.isRequired,alt:l.string.isRequired,sizes:l.string,srcSet:l.string,shouldLoad:l.bool},E.displayName="Picture",E.propTypes={alt:l.string.isRequired,shouldLoad:l.bool,fallback:l.exact({src:l.string.isRequired,srcSet:l.string,sizes:l.string}),sources:l.arrayOf(l.oneOfType([l.exact({media:l.string.isRequired,type:l.string,sizes:l.string,srcSet:l.string.isRequired}),l.exact({media:l.string,type:l.string.isRequired,sizes:l.string,srcSet:l.string.isRequired})]))};const y=["fallback"],w=function(e){let{fallback:t}=e,a=s(e,y);return t?r.createElement(E,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};w.displayName="Placeholder",w.propTypes={fallback:l.string,sources:null==(b=E.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const v=function(e){return r.createElement(r.Fragment,null,r.createElement(E,i({},e)),r.createElement("noscript",null,r.createElement(E,i({},e,{shouldLoad:!0}))))};v.displayName="MainImage",v.propTypes=E.propTypes;const x=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],B=["style","className"],k=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var r=arguments.length,l=new Array(r>3?r-3:0),i=3;i<r;i++)l[i-3]=arguments[i];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(l)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:n().object.isRequired,alt:S},Q=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],M=new Set;let T,L;const I=function(e){let{as:t="div",image:l,style:n,backgroundColor:m,className:d,class:u,onStartLoad:A,onLoad:p,onError:f}=e,g=s(e,Q);const{width:h,height:E,layout:b}=l,y=o(h,E,b),{style:w,className:v}=y,x=s(y,N),B=(0,r.useRef)(),k=(0,r.useMemo)((()=>JSON.stringify(l.images)),[l.images]);u&&(d=u);const S=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,h,E);return(0,r.useEffect)((()=>{T||(T=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return L=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=B.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==A||A({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==A||A({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void M.add(k);if(L&&M.has(k))return;let t,r;return T.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;B.current&&(B.current.innerHTML=a(i({isLoading:!0,isLoaded:M.has(k),image:l},g)),M.has(k)||(t=requestAnimationFrame((()=>{B.current&&(r=s(B.current,k,M,n,A,p,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[l]),(0,r.useLayoutEffect)((()=>{M.has(k)&&L&&(B.current.innerHTML=L(i({isLoading:M.has(k),isLoaded:M.has(k),image:l},g)),null==A||A({wasCached:!0}),null==p||p({wasCached:!0}))}),[l]),(0,r.createElement)(t,i({},x,{style:i({},w,n,{backgroundColor:m}),className:v+(d?" "+d:""),ref:B,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},R=(0,r.memo)((function(e){return e.image?(0,r.createElement)(I,e):null}));R.propTypes=C,R.displayName="GatsbyImage";const F=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function O(e){return function(t){let{src:a,__imageData:l,__error:n}=t,c=s(t,F);return n&&console.warn(n),l?r.createElement(e,i({image:l},c)):(console.warn("Image not loaded",a),null)}}const H=O((function(e){let{as:t="div",className:a,class:l,style:n,image:c,loading:u="lazy",imgClassName:A,imgStyle:f,backgroundColor:g,objectFit:h,objectPosition:E}=e,b=s(e,x);if(!c)return console.warn("[gatsby-plugin-image] Missing image prop"),null;l&&(a=l),f=i({objectFit:h,objectPosition:E,backgroundColor:g},f);const{width:y,height:S,layout:C,images:Q,placeholder:N,backgroundColor:M}=c,T=o(y,S,C),{style:L,className:I}=T,R=s(T,B),F={fallback:void 0,sources:[]};return Q.fallback&&(F.fallback=i({},Q.fallback,{srcSet:Q.fallback.srcSet?k(Q.fallback.srcSet):void 0})),Q.sources&&(F.sources=Q.sources.map((e=>i({},e,{srcSet:k(e.srcSet)})))),r.createElement(t,i({},R,{style:i({},L,n,{backgroundColor:g}),className:I+(a?" "+a:"")}),r.createElement(p,{layout:C,width:y,height:S},r.createElement(w,i({},d(N,!1,C,y,S,M,h,E))),r.createElement(v,i({"data-gatsby-image-ssr":"",className:A},b,m("eager"===u,!1,F,u,f)))))})),P=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),l=2;l<a;l++)r[l-2]=arguments[l];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},Z=new Set(["fixed","fullWidth","constrained"]),j={src:n().string.isRequired,alt:S,width:P,height:P,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!Z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};H.displayName="StaticImage",H.propTypes=j;const D=O(R);D.displayName="StaticImage",D.propTypes=j},2369:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,l=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,i=new RegExp("^"+n.source),s=new RegExp(n.source+l.source,"gu"),c=new RegExp("\\d+"+l.source,"gu"),o=(e,l)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(l={pascalCase:!1,preserveConsecutiveUppercase:!1,...l},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===l.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(l.locale),o=!1===l.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(l.locale);if(1===e.length)return l.pascalCase?o(e):n(e);return e!==n(e)&&(e=((e,r,l)=>{let n=!1,i=!1,s=!1;for(let c=0;c<e.length;c++){const o=e[c];n&&t.test(o)?(e=e.slice(0,c)+"-"+e.slice(c),n=!1,s=i,i=!0,c++):i&&s&&a.test(o)?(e=e.slice(0,c-1)+"-"+e.slice(c-1),s=i,i=!1,n=!0):(n=r(o)===o&&l(o)!==o,s=i,i=l(o)===o&&r(o)!==o)}return e})(e,n,o)),e=e.replace(i,""),e=l.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,n):n(e),l.pascalCase&&(e=o(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,c.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(c,(e=>t(e)))))(e,o)};e.exports=o,e.exports.default=o},8411:function(e,t,a){a.r(t),a.d(t,{Head:function(){return k},default:function(){return B}});var r=a(7294);var l=function(){return r.createElement(r.Fragment,null,r.createElement("html",{lang:"en"}),r.createElement("title",null,"Michael Tamaki"),r.createElement("meta",{name:"description",content:"Michael Tamaki personal website"}),r.createElement("meta",{name:"og:title",content:"Michael Tamaki"}),r.createElement("meta",{name:"og:description",content:"Michael Tamaki personal website"}),r.createElement("meta",{name:"og:type",content:"website"}))},n=a(8032);var i=function(){return r.createElement(n.S,{src:"../../images/portrait.JPG",className:"rounded-lg",alt:"Michael Tamaki portrait",placeholder:"blurred",layout:"constrained",width:128,height:128,quality:100,__imageData:a(3303)})};const s=()=>r.createElement("svg",{role:"img",className:"fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("title",null,"GitHub icon"),r.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})),c=()=>r.createElement("svg",{role:"img",className:"fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("title",null,"LinkedIn icon"),r.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})),o=()=>r.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:"stroke-current inline-block w-4 h-4",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),m=()=>r.createElement("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})),d=()=>r.createElement("svg",{id:"ade8c9af-7e2e-4eda-b5c8-b06129257226","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-full",width:"1076.06371",height:"755.2279",viewBox:"0 0 1076.06371 755.2279"},r.createElement("title",null,"Web Developer"),r.createElement("path",{d:"M926.11393,774.80937c-6.98452,26.59789-31.459,43.21966-31.459,43.21966s-13.15033-26.50193-6.16581-53.09982,31.459-43.21966,31.459-43.21966S933.09845,748.21148,926.11393,774.80937Z",transform:"translate(-61.96814 -72.38605)",fill:"#3f3d56"}),r.createElement("path",{d:"M915.52,769.18266c-19.56251,19.32716-21.75117,48.83128-21.75117,48.83128s29.52845-1.83141,49.091-21.15858,21.75116-48.83129,21.75116-48.83129S935.08248,749.85549,915.52,769.18266Z",transform:"translate(-61.96814 -72.38605)",fill:"#276749"}),r.createElement("path",{d:"M206.70221,674.19438h36.8414l90.78774-35.52564s64.47245-26.31528,59.20939,23.68376-14.47341,117.103-14.47341,117.103-28.94681-13.15764-44.736-9.21035-5.26306-80.26162-5.26306-80.26162-128.9449,61.84092-140.78678,53.94634-14.4734-63.15669-14.4734-63.15669Z",transform:"translate(-61.96814 -72.38605)",fill:"#2f2e41"}),r.createElement("path",{d:"M206.70221,674.19438h36.8414l90.78774-35.52564s64.47245-26.31528,59.20939,23.68376-14.47341,117.103-14.47341,117.103-28.94681-13.15764-44.736-9.21035-5.26306-80.26162-5.26306-80.26162-128.9449,61.84092-140.78678,53.94634-14.4734-63.15669-14.4734-63.15669Z",transform:"translate(-61.96814 -72.38605)",opacity:"0.1"}),r.createElement("path",{d:"M264.74607,558.82036l44.58576,64.05921L413.2772,709.72s96.0508,22.368,82.89315,38.15717S402.75109,732.088,402.75109,732.088s-119.73455-86.84044-123.68184-93.41927S231.70174,570.249,231.70174,570.249Z",transform:"translate(-61.96814 -72.38605)",fill:"#a0616a"}),r.createElement("path",{d:"M264.74607,558.82036l44.58576,64.05921L413.2772,709.72s96.0508,22.368,82.89315,38.15717S402.75109,732.088,402.75109,732.088s-119.73455-86.84044-123.68184-93.41927S231.70174,570.249,231.70174,570.249Z",transform:"translate(-61.96814 -72.38605)",opacity:"0.1"}),r.createElement("path",{d:"M238.28056,507.09232l28.94681,56.57786s-6.57882,27.63105-17.10494,30.26258-55.26209-34.20987-55.26209-34.20987Z",transform:"translate(-61.96814 -72.38605)",fill:"#d0cde1"}),r.createElement("path",{d:"M238.28056,507.09232l28.94681,56.57786s-6.57882,27.63105-17.10494,30.26258-55.26209-34.20987-55.26209-34.20987Z",transform:"translate(-61.96814 -72.38605)",opacity:"0.1"}),r.createElement("path",{d:"M591.4193,644.90044,599.97,680.172a2.20311,2.20311,0,0,1-.04279,1.19048L561.13956,802.57374a2.20306,2.20306,0,0,1-4.28722-.42269l-5.36581-47.21916a2.203,2.203,0,0,1,.09431-.93128L587.1836,644.737A2.20306,2.20306,0,0,1,591.4193,644.90044Z",transform:"translate(-61.96814 -72.38605)",fill:"#2f2e41"}),r.createElement("polygon",{points:"526.306 575.493 534.2 605.756 499.99 716.28 492.096 682.07 526.306 575.493",fill:"#f2f2f2"}),r.createElement("path",{d:"M415.90873,812.34963c1.31577,3.94729,136.83949-1.31577,138.15525-2.63153a28.56086,28.56086,0,0,0,2.89462-5.26306c1.2369-2.63153,2.36844-5.26306,2.36844-5.26306L554.064,756.58753l-134.208-4.76306s-3.35527,36.10458-4.03949,52.63057C415.64564,808.626,415.64564,811.56012,415.90873,812.34963Z",transform:"translate(-61.96814 -72.38605)",fill:"#2f2e41"}),r.createElement("polygon",{points:"474.991 689.965 477.622 726.806 418.413 726.806 418.413 689.965 474.991 689.965",opacity:"0.1"}),r.createElement("polygon",{points:"398.677 701.806 399.03 701.736 397.361 717.596 364.467 717.596 364.467 701.806 398.677 701.806",opacity:"0.1"}),r.createElement("path",{d:"M415.90873,812.34963c1.31577,3.94729,136.83949-1.31577,138.15525-2.63153a28.56086,28.56086,0,0,0,2.89462-5.26306H415.81654C415.64564,808.626,415.64564,811.56012,415.90873,812.34963Z",transform:"translate(-61.96814 -72.38605)",opacity:"0.1"}),r.createElement("circle",{cx:"196.04888",cy:"357.07618",r:"59.20939",fill:"#a0616a"}),r.createElement("path",{d:"M254.06973,482.0928s-19.73647,34.20987-23.68376,52.63057-59.20939-36.8414-59.20939-36.8414l-7.2367-19.07858s51.97268-24.34164,48.02539-44.07811S254.06973,482.0928,254.06973,482.0928Z",transform:"translate(-61.96814 -72.38605)",fill:"#a0616a"}),r.createElement("path",{d:"M264.59584,584.72241l53.94634,71.05127,128.9449,96.05079s93.41926,19.73647,72.367,34.20987-81.57738-13.15764-81.57738-13.15764S308.01606,703.14119,280.385,674.19438s-78.94585-77.63009-78.94585-77.63009Z",transform:"translate(-61.96814 -72.38605)",fill:"#a0616a"}),r.createElement("path",{d:"M192.22881,695.24661,208.018,720.24613l94.2313-29.64581c20.67581-6.50474,43.34783-4.11124,61.68676,7.44229,16.44706,10.36164,26.97317,26.80869,3.28941,51.15033-47.36751,48.68328-78.94585,22.368-78.94585,22.368S129.07212,846.5595,102.75684,809.7181s-27.631-55.2621-27.631-55.2621S176.43964,691.29931,192.22881,695.24661Z",transform:"translate(-61.96814 -72.38605)",fill:"#2f2e41"}),r.createElement("path",{d:"M389.59345,782.08705s42.10445,27.63105-7.89459,40.78869-86.84044-5.26306-86.84044-5.26306-43.42022,0-43.42022-22.368,14.47341-24.99952,14.47341-24.99952l44.736,6.57882S364.59393,762.35059,389.59345,782.08705Z",transform:"translate(-61.96814 -72.38605)",fill:"#d0cde1"}),r.createElement("path",{d:"M306.58925,414.56777c4.03,1.79653,8.02621,3.92291,12.40755,4.4444s9.37055-1.00819,11.44376-4.903c1.11982-2.10373,1.24778-4.57826,1.3-6.96089.15849-7.22517-.36406-15.03591-4.94264-20.6274-2.9139-3.55854-7.16747-5.80183-10.18374-9.274-2.161-2.48761-3.59924-5.50284-5.14786-8.41141-5.866-11.01725-14.55128-21.60559-26.62195-24.78175-5.04041-1.32629-10.328-1.26157-15.53945-1.188l-30.39725.42884c-4.91906.0694-9.914.15005-14.623,1.57383-9.784,2.95823-16.90779,11.18591-23.43216,19.05427-4.88119,5.88668-9.7753,11.83425-13.43862,18.54685a65.07888,65.07888,0,0,0-7.71423,31.88675,29.83261,29.83261,0,0,0,1.09276,8.43732,46.82177,46.82177,0,0,0,3.31627,7.28423c5.70049,11.19673,9.08523,25.18219,2.66543,35.98258,11.15187-4.55542,22.18591-10.52835,29.54232-20.0677,3.29093-4.26748,5.87181-9.26316,10.25758-12.39472s11.532-3.40321,14.34592,1.1928a12.85719,12.85719,0,0,1,1.4508,6.02242c.20551,3.44983.1999,7.03258,1.66258,10.16374s4.94686,5.65758,8.27337,4.72061c5.72869-1.61358,5.18009-10.406,9.59251-14.4,3.35094-3.03318,8.52074-2.45334,12.82574-3.83026,5.01582-1.60428,8.77937-5.94959,10.92379-10.75939,1.63-3.65594,1.60645-13.223,4.69084-15.20283C294.20755,409.02219,303.00386,412.96943,306.58925,414.56777Z",transform:"translate(-61.96814 -72.38605)",fill:"#2f2e41"}),r.createElement("path",{d:"M159.2397,472.56207a15.61579,15.61579,0,0,1,8.128.02069c8.44618,2.26753,27.38021,8.27035,31.43989,17.40462,5.26306,11.84188,23.68376,30.26258,23.68376,30.26258s24.99952,24.99952,19.73646,42.10446-24.99952,36.8414-24.99952,36.8414,5.26306,81.57738-21.05223,102.62961-36.8414,6.57882-36.8414,26.31528S77.75732,809.7181,61.96814,771.56094c0,0,7.89459-71.05128,5.26306-96.0508C64.63762,650.87116,68.43448,497.14537,159.2397,472.56207Z",transform:"translate(-61.96814 -72.38605)",fill:"#d0cde1"}),r.createElement("path",{d:"M201.43916,505.77655s80.26162,59.2094,65.78821,84.20892c0,0-48.68328,23.68375-59.20939,22.368s-51.31481-47.36751-61.84092-51.31481S130.38789,486.04009,201.43916,505.77655Z",transform:"translate(-61.96814 -72.38605)",fill:"#d0cde1"}),r.createElement("circle",{cx:"498.06371",cy:"237.45791",r:"65",fill:"#f2f2f2"}),r.createElement("path",{d:"M1096.8978,225.42666H732.64912V149.20722H1096.8978ZM734.25374,223.822h361.03944v-73.0102H734.25374Z",transform:"translate(-61.96814 -72.38605)",fill:"#3f3d56"}),r.createElement("rect",{x:"645.80936",y:"92.06506",width:"362.64407",height:"74.61482",fill:"#276749"}),r.createElement("circle",{cx:"416.56486",cy:"15.24386",r:"5.61624",fill:"#276749"}),r.createElement("circle",{cx:"435.8203",cy:"15.24386",r:"5.61624",fill:"#276749"}),r.createElement("circle",{cx:"455.07573",cy:"15.24386",r:"5.61624",fill:"#276749"}),r.createElement("path",{d:"M1138.03186,512.05187H462.48693V72.38605h675.54493Zm-673.94031-1.60462h672.33569V73.99067H464.09155Z",transform:"translate(-61.96814 -72.38605)",fill:"#3f3d56"}),r.createElement("rect",{x:"401.3211",y:"24.33804",width:"673.9403",height:"1.60462",fill:"#3f3d56"}),r.createElement("path",{d:"M480.13775,91.64149a6.41848,6.41848,0,1,1,6.41848-6.41848A6.42592,6.42592,0,0,1,480.13775,91.64149Zm0-11.23234a4.81386,4.81386,0,1,0,4.81386,4.81386A4.81945,4.81945,0,0,0,480.13775,80.40915Z",transform:"translate(-61.96814 -72.38605)",fill:"#3f3d56"}),r.createElement("path",{d:"M499.39319,91.64149a6.41848,6.41848,0,1,1,6.41848-6.41848A6.42592,6.42592,0,0,1,499.39319,91.64149Zm0-11.23234a4.81386,4.81386,0,1,0,4.81386,4.81386A4.81945,4.81945,0,0,0,499.39319,80.40915Z",transform:"translate(-61.96814 -72.38605)",fill:"#3f3d56"}),r.createElement("path",{d:"M518.64863,91.64149A6.41848,6.41848,0,1,1,525.0671,85.223,6.42593,6.42593,0,0,1,518.64863,91.64149Zm0-11.23234a4.81386,4.81386,0,1,0,4.81385,4.81386A4.81946,4.81946,0,0,0,518.64863,80.40915Z",transform:"translate(-61.96814 -72.38605)",fill:"#3f3d56"}),r.createElement("rect",{x:"612.10922",y:"25.14035",width:"1.60462",height:"414.34565",fill:"#3f3d56"}),r.createElement("rect",{x:"688.73293",y:"228.85889",width:"117.93955",height:"16.0462",fill:"#f2f2f2"}),r.createElement("rect",{x:"874.06652",y:"228.85889",width:"117.93955",height:"16.0462",fill:"#f2f2f2"}),r.createElement("path",{d:"M875.86143,310.07035H756.31726V292.41953H875.86143Zm-117.93955-1.60462H874.25681V294.02415H757.92188Z",transform:"translate(-61.96814 -72.38605)",fill:"#3f3d56"}),r.createElement("rect",{x:"688.73293",y:"353.21693",width:"117.93955",height:"16.0462",fill:"#f2f2f2"}),r.createElement("path",{d:"M875.86143,434.42838H756.31726V416.77757H875.86143Zm-117.93955-1.60462H874.25681V418.38219H757.92188Z",transform:"translate(-61.96814 -72.38605)",fill:"#3f3d56"}),r.createElement("rect",{x:"689.13409",y:"289.43329",width:"303.27314",height:"16.0462",fill:"#f2f2f2"}),r.createElement("path",{d:"M1061.59617,372.24937H756.71841V354.59855h304.87776ZM758.323,370.64475h301.66852V356.20317H758.323Z",transform:"translate(-61.96814 -72.38605)",fill:"#3f3d56"}),r.createElement("path",{d:"M1061.195,310.07035H941.65084V292.41953H1061.195Zm-117.93955-1.60462h116.33493V294.02415H943.25546Z",transform:"translate(-61.96814 -72.38605)",fill:"#3f3d56"}),r.createElement("path",{d:"M571.03186,357.844a66,66,0,1,1,66-66A66.07468,66.07468,0,0,1,571.03186,357.844Zm0-130a64,64,0,1,0,64,64A64.0727,64.0727,0,0,0,571.03186,227.844Z",transform:"translate(-61.96814 -72.38605)",fill:"#3f3d56"}),r.createElement("rect",{x:"748.06371",y:"744.45791",width:"283",height:"2",fill:"#3f3d56"}));var u=function(e){let{href:t,Icon:a,text:l,isLightText:n}=e;return r.createElement("a",{className:(n?"hover:text-green-400":"hover:text-green-800")+" inline-block",href:t,target:"_blank",rel:"noreferrer"},r.createElement("span",{className:"w-6 mr-2 inline-block align-middle"},r.createElement(a,null)),r.createElement("span",{className:"inline-block align-middle"},l))};var A=function(e){let{isLightText:t}=e;return r.createElement("div",{className:"space-y-1"},r.createElement("div",null,r.createElement(u,{href:"https://github.com/MichaelTamaki",Icon:s,text:"Github",isLightText:t})),r.createElement("div",null,r.createElement(u,{href:"https://www.linkedin.com/in/michaeltamaki",Icon:c,text:"LinkedIn",isLightText:t})))};var p=function(){return r.createElement("section",{className:"bg-gradient-to-br from-green-500 to-green-900"},r.createElement("div",{className:"py-16 md:py-32 landing-bg"},r.createElement("div",{className:"container text-center mx-auto"},r.createElement("div",{className:"bg-gray-100 rounded-lg p-6 sm:p-8 shadow-2xl inline-flex flex-col sm:flex-row"},r.createElement("div",{className:"w-32 mx-auto mb-4 sm:mb-0 sm:mr-8 flex-initial"},r.createElement(i,null)),r.createElement("div",{className:"flex-1 flex flex-col justify-between text-left"},r.createElement("div",{className:"mb-3"},r.createElement("h1",{className:"text-2xl text-gray-900"},"Michael Tamaki"),r.createElement("h2",{className:"text-green-800"},"Front-end / Full Stack Engineer")),r.createElement(A,null))))))};var f=function(){return r.createElement("div",{className:"container mx-auto my-16 sm:my-32 px-3 flex flex-col sm:flex-row items-center content-center"},r.createElement("div",{className:"flex-auto sm:w-2/3 pr-3"},r.createElement("h2",{className:"text-2xl"},"Hey, I'm Michael! I'm a front-end/full stack web developer at Okta. My team builds developer tools that localize Okta's apps. Previously, I studied Computer Science at UC Berkeley. I look forward to connecting with you!")),r.createElement("div",{className:"flex-auto w-2/3 mt-8 sm:w-1/3 sm:mt-0"},r.createElement(d,null)))};const g={REACT:"React",VUE:"Vue",TYPESCRIPT:"Typescript",D3:"D3.js",BROWSER_EXTENSION:"Browser Extension",JAVA:"Java",PYTHON:"Python",WORDPRESS:"Wordpress",INFRASTRUCTURE:"Infrastructure"},h={DEFAULT:"Default",ALPHABETICAL_ASC:"Name A-Z",ALPHABETICAL_DSC:"Name Z-A"},E={};E[h.DEFAULT]=(e,t)=>e.defaultOrder-t.defaultOrder,E[h.ALPHABETICAL_ASC]=(e,t)=>e.title.localeCompare(t.title),E[h.ALPHABETICAL_DSC]=(e,t)=>t.title.localeCompare(e.title);const b=[{title:"Okta, Inc.",link:"https://www.okta.com",positions:[{name:"Senior Software Engineer",date:"November '21 to Present"},{name:"Software Engineer",date:"August '19 to November '21"},{name:"Software Engineer Intern",date:"Summer '18"}],description:"Front-end and full stack work on the end-user dashboard, browser plugins, and admin rate limit dashboard.",skills:[g.REACT,g.TYPESCRIPT,g.D3,g.BROWSER_EXTENSION,g.JAVA],defaultOrder:0},{title:"Cal Band",link:"https://www.calband.org",positions:[{name:"Computer Coordinator",date:"Spring '18 to Spring '19"},{name:"Computer Committee",date:"Spring '17 to Spring '18"}],description:"Automated the student-run marching band's logistical tasks with an internal Django website. Lead and managed a team of web developers.",skills:[g.PYTHON,g.WORDPRESS,g.INFRASTRUCTURE],defaultOrder:1},{title:"The Daily Californian",link:"https://www.dailycal.org",positions:[{name:"Online Manager",date:"Summer '18 to Spring '19"},{name:"Online Team",date:"Fall '17 to Spring '18"}],description:"Improved and updated the student-run newspaper's website and servers. Lead and managed a team of web developers.",skills:[g.WORDPRESS,g.INFRASTRUCTURE],defaultOrder:2},{title:"CalChart",link:"https://github.com/calband/calchart-redesign",description:"Web application for plotting Cal Band marchers on the field.",skills:[g.VUE,g.TYPESCRIPT],defaultOrder:3},{title:"Personal Website",link:"https://github.com/MichaelTamaki/michaeltamaki.github.io",description:"Website for personal brand.",skills:[g.REACT],defaultOrder:4}];var y=function(e){let{skill:t,selectedFilters:a,toggleFilter:l,...n}=e;const i=n["aria-describedby"],s=a.includes(t);return r.createElement("button",{className:(s?"bg-green-300":"bg-gray-300")+"\n      inline-block hover:bg-green-400 rounded-full mr-2 px-3 py-1 text-sm font-semibold",role:"checkbox","aria-checked":s,"aria-describedby":i,onClick:()=>l(t)},t)};var w=function(e){let{title:t,link:a,positions:l,description:n,skills:i,selectedFilters:s,toggleFilter:c}=e;return r.createElement("div",{className:"shadow-xl rounded p-6 bg-white flex flex-col justify-between"},r.createElement("div",{className:"space-y-1"},r.createElement("h4",{className:"text-xl"},t),l&&r.createElement("div",null,l.map((e=>{let{name:t,date:a}=e;return r.createElement("p",{key:t},r.createElement("span",{className:"font-bold italic text-green-800"},t)," ",a)}))),r.createElement("p",null,n),a&&r.createElement("p",null,r.createElement("a",{href:a,className:"font-bold hover:text-green-800 break-words",target:"_blank",rel:"noreferrer"},a," ",r.createElement(o,null)))),r.createElement("div",{className:"mt-3 space-y-2"},i.map((e=>r.createElement(y,{key:e,skill:e,selectedFilters:s,toggleFilter:c})))))};var v=function(){const{0:e,1:t}=(0,r.useState)(b),{0:a,1:l}=(0,r.useState)([]),{0:n,1:i}=(0,r.useState)(h.DEFAULT);(0,r.useEffect)((()=>{let e=b.slice();0!==a.length&&(e=e.filter((e=>a.some((t=>e.skills.includes(t)))))),e.sort(E[n]),t(e)}),[a,n]);const s=e=>{const t=a.indexOf(e);-1!==t?a.splice(t,1):a.push(e),l(a.slice())},c=e=>{i(e.target.value)};return r.createElement("div",{className:"container px-3 mt-16 mx-auto"},r.createElement("h2",{className:"text-2xl mb-3"},"Experiences and Projects"),r.createElement("div",{className:"space-y-2 mb-2"},r.createElement("h3",{id:"filter-by-label",className:"inline-block mr-2"},"Filter by skills"),Object.values(g).map((e=>r.createElement(y,{key:e,"aria-describedby":"filter-by-label",skill:e,selectedFilters:a,toggleFilter:s})))),r.createElement("div",null,r.createElement("h3",{id:"sort-by-label",className:"inline-block mr-2"},"Sort by"),r.createElement("div",{className:"inline-block relative"},r.createElement("select",{"aria-labelledby":"sort-by-label",value:n,onChange:c,onBlur:c,className:"block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-2 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:ring"},Object.values(h).map((e=>r.createElement("option",{key:e,value:e},e)))),r.createElement("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},r.createElement(m,null)))),r.createElement("div",{className:"mt-6 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"},e.map((e=>r.createElement(w,Object.assign({},e,{key:e.title,selectedFilters:a,toggleFilter:s}))))))};var x=function(){return r.createElement("footer",{className:"mt-16 py-16 px-3 bg-gray-800 text-gray-400"},r.createElement("div",{className:"container mx-auto"},r.createElement("h2",{className:"mb-6"},"Made by Michael Tamaki"),r.createElement(A,{isLightText:!0})))};var B=()=>r.createElement(r.Fragment,null,r.createElement("main",null,r.createElement(p,null),r.createElement(f,null),r.createElement(v,null)),r.createElement(x,null));const k=l},3303:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAQFBgcC/8QAFwEAAwEAAAAAAAAAAAAAAAAABAUGA//aAAwDAQACEAMQAAAB5vFgWpWmgZE0B5xfkwp8iibf/8QAGhAAAwEBAQEAAAAAAAAAAAAAAgMEBQEAEf/aAAgBAQABBQK/pT5qMvczqWSGZK0QmnPcNs666SGTv0S75DT6r//EACQRAAIBAQcFAQAAAAAAAAAAAAECEQQAAxIUISJyMjORsbLw/9oACAEDAQE/Aad6AUlcKhhmlF1l94EYmhiBImDq43HBqANSfH6LXncbm30bJ0JxX0Lf/8QAJBEAAQIFAgcAAAAAAAAAAAAAAQIDAAQRIjEzshMhQWFyc5H/2gAIAQIBAT8BmH1idlEtuJS1dxx0FAKBZpbUckYuzkRUd/sOajnkrdDOk1629qI//8QAKBAAAgEDAwMCBwAAAAAAAAAAAgMBBBIhAAURIjFRExQVI0FygqGx/9oACAEBAAY/Aq+oo1RUPpaNzkK+hvAJlQFmOmT4u4zxE5jVB7/ci3ZO4Ur2Pv2f4Ye0VyxE4QMhJLdTMH1lwDPnL4UzmYZm4D6eOIxz207EE6QkVp73Hb0wc5iB57z+tAkWQ2fSBrLaM6MvczJ3C+5zYN8jNxGqRTMTEDHaBxiPHjSec3tfd+F9um/b/A0OfPnzr//EABwQAQEAAwADAQAAAAAAAAAAAAERACExQVFhcf/aAAgBAQABPyFzpPorMI61DIO3Bl9YiPvij8qSSOqq006d3d5xQYGpkBN3wxBOTvc4dQz/AM/TcdA/AVDQUB5tde7iwipVtaXfhbdBjGuokZsQRH9xR0+PRF71m33n/9oADAMBAAIAAwAAABAAKL7/xAAeEQEAAgEEAwAAAAAAAAAAAAABABExIVGBkWFx8P/aAAgBAwEBPxDJLRagZE6FAIVIizCuvmvPNTt2ed7eNzPuZf/EABwRAQEBAAIDAQAAAAAAAAAAAAERIQBBMVFhcf/aAAgBAgEBPxB9qXm2FcLuJw5wps3HFOvG+PX6fbpXW9fd7wi6CrK6q2V7Xn//xAAbEAEBAQEBAAMAAAAAAAAAAAABESEAMUFRof/aAAgBAQABPxAIh+r1RgCiygt2fECoQhaV3o9FURq3yy/CoCjVqM2gmOYEhOdhQtoluPloX4gEy4ehIUDH4MenEFmFkGGNJ4EYE5gQh4AmAtgUaP1zxogRgW22oBRVS4QP/9k="},"images":{"fallback":{"src":"/static/10e465216c0d8ee3fda913f14b7f580e/e1fe2/portrait.jpg","srcSet":"/static/10e465216c0d8ee3fda913f14b7f580e/08e7d/portrait.jpg 32w,\\n/static/10e465216c0d8ee3fda913f14b7f580e/0e7af/portrait.jpg 64w,\\n/static/10e465216c0d8ee3fda913f14b7f580e/e1fe2/portrait.jpg 128w,\\n/static/10e465216c0d8ee3fda913f14b7f580e/80079/portrait.jpg 256w","sizes":"(min-width: 128px) 128px, 100vw"},"sources":[{"srcSet":"/static/10e465216c0d8ee3fda913f14b7f580e/4ab4c/portrait.webp 32w,\\n/static/10e465216c0d8ee3fda913f14b7f580e/bfa43/portrait.webp 64w,\\n/static/10e465216c0d8ee3fda913f14b7f580e/b529c/portrait.webp 128w,\\n/static/10e465216c0d8ee3fda913f14b7f580e/99d55/portrait.webp 256w","type":"image/webp","sizes":"(min-width: 128px) 128px, 100vw"}]},"width":128,"height":128}')}}]);
//# sourceMappingURL=component---src-pages-index-js-f74b403e0424b101b7b7.js.map