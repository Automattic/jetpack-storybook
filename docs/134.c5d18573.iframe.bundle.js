(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[134],{"../../../node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/extends.js":(K,D,x)=>{"use strict";x.d(D,{Z:()=>_});function _(){return _=Object.assign?Object.assign.bind():function(O){for(var C=1;C<arguments.length;C++){var p=arguments[C];for(var w in p)Object.prototype.hasOwnProperty.call(p,w)&&(O[w]=p[w])}return O},_.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js":(K,D,x)=>{"use strict";x.d(D,{Z:()=>Ye});function _(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function O(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var C=function(){function e(n){var t=this;this._insertTag=function(a){var f;t.tags.length===0?t.insertionPoint?f=t.insertionPoint.nextSibling:t.prepend?f=t.container.firstChild:f=t.before:f=t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(a,f),t.tags.push(a)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(t){t.forEach(this._insertTag)},r.insert=function(t){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(O(this));var a=this.tags[this.tags.length-1];if(!1)var f;if(this.isSpeedy){var S=_(a);try{S.insertRule(t,S.cssRules.length)}catch(v){}}else a.appendChild(document.createTextNode(t));this.ctr++},r.flush=function(){this.tags.forEach(function(t){return t.parentNode&&t.parentNode.removeChild(t)}),this.tags=[],this.ctr=0},e}(),p=Math.abs,w=String.fromCharCode,E=Object.assign;function d(e,r){return P(e,0)^45?(((r<<2^P(e,0))<<2^P(e,1))<<2^P(e,2))<<2^P(e,3):0}function T(e){return e.trim()}function L(e,r){return(e=r.exec(e))?e[0]:e}function s(e,r,n){return e.replace(r,n)}function re(e,r){return e.indexOf(r)}function P(e,r){return e.charCodeAt(r)|0}function te(e,r,n){return e.slice(r,n)}function H(e){return e.length}function oe(e){return e.length}function ie(e,r){return r.push(e),e}function me(e,r){return e.map(r).join("")}var se=1,V=1,ce=0,M=0,b=0,z="";function ne(e,r,n,t,a,f,S){return{value:e,root:r,parent:n,type:t,props:a,children:f,line:se,column:V,length:S,return:""}}function l(e,r){return E(ne("",null,null,"",null,null,0),e,{length:-e.length},r)}function i(){return b}function o(){return b=M>0?P(z,--M):0,V--,b===10&&(V=1,se--),b}function c(){return b=M<ce?P(z,M++):0,V++,b===10&&(V=1,se++),b}function m(){return P(z,M)}function h(){return M}function y(e,r){return te(z,e,r)}function $(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function q(e){return se=V=1,ce=H(z=e),M=0,[]}function Z(e){return z="",e}function J(e){return T(y(M-1,de(e===91?e+2:e===40?e+1:e)))}function ye(e){return Z(Ce(q(e)))}function Ae(e){for(;(b=m())&&b<33;)c();return $(e)>2||$(b)>3?"":" "}function Ce(e){for(;c();)switch($(b)){case 0:append(ge(M-1),e);break;case 2:append(J(b),e);break;default:append(from(b),e)}return e}function Re(e,r){for(;--r&&c()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return y(e,h()+(r<6&&m()==32&&c()==32))}function de(e){for(;c();)switch(b){case e:return M;case 34:case 39:e!==34&&e!==39&&de(b);break;case 40:e===41&&de(e);break;case 92:c();break}return M}function Oe(e,r){for(;c()&&e+b!==47+10;)if(e+b===42+42&&m()===47)break;return"/*"+y(r,M-1)+"*"+w(e===47?e:c())}function ge(e){for(;!$(m());)c();return y(e,M)}var U="-ms-",fe="-moz-",u="-webkit-",be="comm",pe="rule",he="decl",Ge="@page",Ze="@media",Te="@import",Xe="@charset",qe="@viewport",Je="@supports",Qe="@document",er="@namespace",ve="@keyframes",rr="@font-face",tr="@counter-style",nr="@font-feature-values",Pe="@layer";function ae(e,r){for(var n="",t=oe(e),a=0;a<t;a++)n+=r(e[a],a,e,r)||"";return n}function Me(e,r,n,t){switch(e.type){case Pe:if(e.children.length)break;case Te:case he:return e.return=e.return||e.value;case be:return"";case ve:return e.return=e.value+"{"+ae(e.children,t)+"}";case pe:e.value=e.props.join(",")}return H(n=ae(e.children,t))?e.return=e.value+"{"+n+"}":""}function Ie(e){var r=oe(e);return function(n,t,a,f){for(var S="",v=0;v<r;v++)S+=e[v](n,t,a,f)||"";return S}}function ze(e){return function(r){r.root||(r=r.return)&&e(r)}}function ar(e,r,n,t){if(e.length>-1&&!e.return)switch(e.type){case DECLARATION:e.return=prefix(e.value,e.length,n);return;case KEYFRAMES:return serialize([copy(e,{value:replace(e.value,"@","@"+WEBKIT)})],t);case RULESET:if(e.length)return combine(e.props,function(a){switch(match(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return serialize([copy(e,{props:[replace(a,/:(read-\w+)/,":"+MOZ+"$1")]})],t);case"::placeholder":return serialize([copy(e,{props:[replace(a,/:(plac\w+)/,":"+WEBKIT+"input-$1")]}),copy(e,{props:[replace(a,/:(plac\w+)/,":"+MOZ+"$1")]}),copy(e,{props:[replace(a,/:(plac\w+)/,MS+"input-$1")]})],t)}return""})}}function ir(e){switch(e.type){case RULESET:e.props=e.props.map(function(r){return combine(tokenize(r),function(n,t,a){switch(charat(n,0)){case 12:return substr(n,1,strlen(n));case 0:case 40:case 43:case 62:case 126:return n;case 58:a[++t]==="global"&&(a[t]="",a[++t]="\f"+substr(a[t],t=1,-1));case 32:return t===1?"":n;default:switch(t){case 0:return e=n,sizeof(a)>1?"":n;case(t=sizeof(a)-1):case 2:return t===2?n+e+e:n+e;default:return n}}})})}}function $e(e){return Z(ue("",null,null,null,[""],e=q(e),0,[0],e))}function ue(e,r,n,t,a,f,S,v,I){for(var W=0,R=0,N=S,X=0,Q=0,B=0,k=1,F=1,A=1,j=0,Y="",le=a,ee=f,G=t,g=Y;F;)switch(B=j,j=c()){case 40:if(B!=108&&P(g,N-1)==58){re(g+=s(J(j),"&","&\f"),"&\f")!=-1&&(A=-1);break}case 34:case 39:case 91:g+=J(j);break;case 9:case 10:case 13:case 32:g+=Ae(B);break;case 92:g+=Re(h()-1,7);continue;case 47:switch(m()){case 42:case 47:ie(Le(Oe(c(),h()),r,n),I);break;default:g+="/"}break;case 123*k:v[W++]=H(g)*A;case 125*k:case 59:case 0:switch(j){case 0:case 125:F=0;case 59+R:A==-1&&(g=s(g,/\f/g,"")),Q>0&&H(g)-N&&ie(Q>32?we(g+";",t,n,N-1):we(s(g," ","")+";",t,n,N-2),I);break;case 59:g+=";";default:if(ie(G=_e(g,r,n,W,R,a,v,Y,le=[],ee=[],N),f),j===123)if(R===0)ue(g,r,G,G,le,f,N,v,ee);else switch(X===99&&P(g,3)===110?100:X){case 100:case 108:case 109:case 115:ue(e,G,G,t&&ie(_e(e,G,G,0,0,a,v,Y,a,le=[],N),ee),a,ee,N,v,t?le:ee);break;default:ue(g,G,G,G,[""],ee,0,v,ee)}}W=R=Q=0,k=A=1,Y=g="",N=S;break;case 58:N=1+H(g),Q=B;default:if(k<1){if(j==123)--k;else if(j==125&&k++==0&&o()==125)continue}switch(g+=w(j),j*k){case 38:A=R>0?1:(g+="\f",-1);break;case 44:v[W++]=(H(g)-1)*A,A=1;break;case 64:m()===45&&(g+=J(c())),X=m(),R=N=H(Y=g+=ge(h())),j++;break;case 45:B===45&&H(g)==2&&(k=0)}}return f}function _e(e,r,n,t,a,f,S,v,I,W,R){for(var N=a-1,X=a===0?f:[""],Q=oe(X),B=0,k=0,F=0;B<t;++B)for(var A=0,j=te(e,N+1,N=p(k=S[B])),Y=e;A<Q;++A)(Y=T(k>0?X[A]+" "+j:s(j,/&\f/g,X[A])))&&(I[F++]=Y);return ne(e,r,n,a===0?pe:v,I,W,R)}function Le(e,r,n){return ne(e,r,n,be,w(i()),te(e,2,-2),0)}function we(e,r,n,t){return ne(e,r,n,he,te(e,0,t),te(e,t+1,-1),t)}var Ue=function(r,n,t){for(var a=0,f=0;a=f,f=m(),a===38&&f===12&&(n[t]=1),!$(f);)c();return y(r,M)},Ne=function(r,n){var t=-1,a=44;do switch($(a)){case 0:a===38&&m()===12&&(n[t]=1),r[t]+=Ue(M-1,n,t);break;case 2:r[t]+=J(a);break;case 4:if(a===44){r[++t]=m()===58?"&\f":"",n[t]=r[t].length;break}default:r[t]+=w(a)}while(a=c());return r},je=function(r,n){return Z(Ne(q(r),n))},ke=new WeakMap,De=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var n=r.value,t=r.parent,a=r.column===t.column&&r.line===t.line;t.type!=="rule";)if(t=t.parent,!t)return;if(!(r.props.length===1&&n.charCodeAt(0)!==58&&!ke.get(t))&&!a){ke.set(r,!0);for(var f=[],S=je(n,f),v=t.props,I=0,W=0;I<S.length;I++)for(var R=0;R<v.length;R++,W++)r.props[W]=f[I]?S[I].replace(/&\f/g,v[R]):v[R]+" "+S[I]}}},We=function(r){if(r.type==="decl"){var n=r.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(r.return="",r.value="")}},Fe="emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason",Be=function(r){return r.type==="comm"&&r.children.indexOf(Fe)>-1},sr=function(r){return function(n,t,a){if(!(n.type!=="rule"||r.compat)){var f=n.value.match(/(:first|:nth|:nth-last)-child/g);if(f){for(var S=!!n.parent,v=S?n.parent.children:a,I=v.length-1;I>=0;I--){var W=v[I];if(W.line<n.line)break;if(W.column<n.column){if(Be(W))return;break}}f.forEach(function(R){console.error('The pseudo class "'+R+'" is potentially unsafe when doing server-side rendering. Try changing it to "'+R.split("-child")[0]+'-of-type".')})}}}},xe=function(r){return r.type.charCodeAt(1)===105&&r.type.charCodeAt(0)===64},Ve=function(r,n){for(var t=r-1;t>=0;t--)if(!xe(n[t]))return!0;return!1},Ee=function(r){r.type="",r.value="",r.return="",r.children="",r.props=""},or=function(r,n,t){xe(r)&&(r.parent?(console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."),Ee(r)):Ve(n,t)&&(console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."),Ee(r)))};function Se(e,r){switch(d(e,r)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+fe+e+U+e+e;case 6828:case 4268:return u+e+U+e+e;case 6165:return u+e+U+"flex-"+e+e;case 5187:return u+e+s(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+U+"flex-$1$2")+e;case 5443:return u+e+U+"flex-item-"+s(e,/flex-|-self/,"")+e;case 4675:return u+e+U+"flex-line-pack"+s(e,/align-content|flex-|-self/,"")+e;case 5548:return u+e+U+s(e,"shrink","negative")+e;case 5292:return u+e+U+s(e,"basis","preferred-size")+e;case 6060:return u+"box-"+s(e,"-grow","")+u+e+U+s(e,"grow","positive")+e;case 4554:return u+s(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return s(s(s(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return s(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return s(s(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+U+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4095:case 3583:case 4068:case 2532:return s(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(H(e)-1-r>6)switch(P(e,r+1)){case 109:if(P(e,r+4)!==45)break;case 102:return s(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+fe+(P(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~re(e,"stretch")?Se(s(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(P(e,r+1)!==115)break;case 6444:switch(P(e,H(e)-3-(~re(e,"!important")&&10))){case 107:return s(e,":",":"+u)+e;case 101:return s(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+u+(P(e,14)===45?"inline-":"")+"box$3$1"+u+"$2$3$1"+U+"$2box$3")+e}break;case 5936:switch(P(e,r+11)){case 114:return u+e+U+s(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+U+s(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+U+s(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return u+e+U+e+e}return e}var He=function(r,n,t,a){if(r.length>-1&&!r.return)switch(r.type){case he:r.return=Se(r.value,r.length);break;case ve:return ae([l(r,{value:s(r.value,"@","@"+u)})],a);case pe:if(r.length)return me(r.props,function(f){switch(L(f,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ae([l(r,{props:[s(f,/:(read-\w+)/,":"+fe+"$1")]})],a);case"::placeholder":return ae([l(r,{props:[s(f,/:(plac\w+)/,":"+u+"input-$1")]}),l(r,{props:[s(f,/:(plac\w+)/,":"+fe+"$1")]}),l(r,{props:[s(f,/:(plac\w+)/,U+"input-$1")]})],a)}return""})}},Ke=[He],Ye=function(r){var n=r.key;if(n==="css"){var t=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(t,function(k){var F=k.getAttribute("data-emotion");F.indexOf(" ")!==-1&&(document.head.appendChild(k),k.setAttribute("data-s",""))})}var a=r.stylisPlugins||Ke,f={},S,v=[];S=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(k){for(var F=k.getAttribute("data-emotion").split(" "),A=1;A<F.length;A++)f[F[A]]=!0;v.push(k)});var I,W=[De,We];{var R,N=[Me,ze(function(k){R.insert(k)})],X=Ie(W.concat(a,N)),Q=function(F){return ae($e(F),X)};I=function(F,A,j,Y){R=j,Q(F?F+"{"+A.styles+"}":A.styles),Y&&(B.inserted[A.name]=!0)}}var B={key:n,sheet:new C({key:n,container:S,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:f,registered:{},insert:I};return B.sheet.hydrate(v),B}},"../../../node_modules/.pnpm/@emotion+is-prop-valid@1.2.2/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js":(K,D,x)=>{"use strict";x.d(D,{Z:()=>C});var _=x("../../../node_modules/.pnpm/@emotion+memoize@0.8.1/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js"),O=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,C=(0,_.Z)(function(p){return O.test(p)||p.charCodeAt(0)===111&&p.charCodeAt(1)===110&&p.charCodeAt(2)<91})},"../../../node_modules/.pnpm/@emotion+memoize@0.8.1/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js":(K,D,x)=>{"use strict";x.d(D,{Z:()=>_});function _(O){var C=Object.create(null);return function(p){return C[p]===void 0&&(C[p]=O(p)),C[p]}}},"../../../node_modules/.pnpm/@emotion+serialize@1.1.4/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js":(K,D,x)=>{"use strict";x.d(D,{O:()=>ne});function _(l){for(var i=0,o,c=0,m=l.length;m>=4;++c,m-=4)o=l.charCodeAt(c)&255|(l.charCodeAt(++c)&255)<<8|(l.charCodeAt(++c)&255)<<16|(l.charCodeAt(++c)&255)<<24,o=(o&65535)*1540483477+((o>>>16)*59797<<16),o^=o>>>24,i=(o&65535)*1540483477+((o>>>16)*59797<<16)^(i&65535)*1540483477+((i>>>16)*59797<<16);switch(m){case 3:i^=(l.charCodeAt(c+2)&255)<<16;case 2:i^=(l.charCodeAt(c+1)&255)<<8;case 1:i^=l.charCodeAt(c)&255,i=(i&65535)*1540483477+((i>>>16)*59797<<16)}return i^=i>>>13,i=(i&65535)*1540483477+((i>>>16)*59797<<16),((i^i>>>15)>>>0).toString(36)}var O={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},C=x("../../../node_modules/.pnpm/@emotion+memoize@0.8.1/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js"),p=`You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,w="You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",E=/[A-Z]|^ms/g,d=/_EMO_([^_]+?)_([^]*?)_EMO_/g,T=function(i){return i.charCodeAt(1)===45},L=function(i){return i!=null&&typeof i!="boolean"},s=(0,C.Z)(function(l){return T(l)?l:l.replace(E,"-$&").toLowerCase()}),re=function(i,o){switch(i){case"animation":case"animationName":if(typeof o=="string")return o.replace(d,function(c,m,h){return z={name:m,styles:h,next:z},m})}return O[i]!==1&&!T(i)&&typeof o=="number"&&o!==0?o+"px":o};if(!1)var P,te,H,oe,ie,me;var se=null;function V(l,i,o){if(o==null)return"";if(o.__emotion_styles!==void 0)return o;switch(typeof o){case"boolean":return"";case"object":{if(o.anim===1)return z={name:o.name,styles:o.styles,next:z},o.name;if(o.styles!==void 0){var c=o.next;if(c!==void 0)for(;c!==void 0;)z={name:c.name,styles:c.styles,next:z},c=c.next;var m=o.styles+";";return m}return ce(l,i,o)}case"function":{if(l!==void 0){var h=z,y=o(l);return z=h,V(l,i,y)}break}case"string":if(!1)var $,q;break}if(i==null)return o;var Z=i[o];return Z!==void 0?Z:o}function ce(l,i,o){var c="";if(Array.isArray(o))for(var m=0;m<o.length;m++)c+=V(l,i,o[m])+";";else for(var h in o){var y=o[h];if(typeof y!="object")i!=null&&i[y]!==void 0?c+=h+"{"+i[y]+"}":L(y)&&(c+=s(h)+":"+re(h,y)+";");else if(Array.isArray(y)&&typeof y[0]=="string"&&(i==null||i[y[0]]===void 0))for(var $=0;$<y.length;$++)L(y[$])&&(c+=s(h)+":"+re(h,y[$])+";");else{var q=V(l,i,y);switch(h){case"animation":case"animationName":{c+=s(h)+":"+q+";";break}default:c+=h+"{"+q+"}"}}}return c}var M=/label:\s*([^\s;\n{]+)\s*(;|$)/g,b,z,ne=function(i,o,c){if(i.length===1&&typeof i[0]=="object"&&i[0]!==null&&i[0].styles!==void 0)return i[0];var m=!0,h="";z=void 0;var y=i[0];y==null||y.raw===void 0?(m=!1,h+=V(c,o,y)):h+=y[0];for(var $=1;$<i.length;$++)h+=V(c,o,i[$]),m&&(h+=y[$]);var q;M.lastIndex=0;for(var Z="",J;(J=M.exec(h))!==null;)Z+="-"+J[1];var ye=_(h)+Z;return{name:ye,styles:h,next:z}}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(K,D,x)=>{"use strict";var _;x.d(D,{L:()=>w,j:()=>E});var O=x("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),C=function(T){return T()},p=(_||(_=x.t(O,2)))["useInsertionEffect"]?(_||(_=x.t(O,2)))["useInsertionEffect"]:!1,w=p||C,E=p||O.useLayoutEffect},"../../../node_modules/.pnpm/@emotion+utils@1.2.1/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js":(K,D,x)=>{"use strict";x.d(D,{My:()=>p,fp:()=>O,hC:()=>C});var _=!0;function O(w,E,d){var T="";return d.split(" ").forEach(function(L){w[L]!==void 0?E.push(w[L]+";"):T+=L+" "}),T}var C=function(E,d,T){var L=E.key+"-"+d.name;(T===!1||_===!1)&&E.registered[L]===void 0&&(E.registered[L]=d.styles)},p=function(E,d,T){C(E,d,T);var L=E.key+"-"+d.name;if(E.inserted[d.name]===void 0){var s=d;do E.insert(d===s?"."+L:"",s,E.sheet,!0),s=s.next;while(s!==void 0)}}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(K,D)=>{var x,_;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var O={}.hasOwnProperty,C="[native code]";function p(){for(var w=[],E=0;E<arguments.length;E++){var d=arguments[E];if(d){var T=typeof d;if(T==="string"||T==="number")w.push(d);else if(Array.isArray(d)){if(d.length){var L=p.apply(null,d);L&&w.push(L)}}else if(T==="object"){if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]")){w.push(d.toString());continue}for(var s in d)O.call(d,s)&&d[s]&&w.push(s)}}}return w.join(" ")}K.exports?(p.default=p,K.exports=p):(x=[],_=function(){return p}.apply(D,x),_!==void 0&&(K.exports=_))})()}}]);})();
