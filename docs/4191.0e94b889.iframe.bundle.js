"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4191],{"../../../node_modules/.pnpm/@babel+runtime@7.24.7/node_modules/@babel/runtime/helpers/esm/extends.js":(re,D,_)=>{_.d(D,{A:()=>E});function E(){return E=Object.assign?Object.assign.bind():function(T){for(var A=1;A<arguments.length;A++){var g=arguments[A];for(var I in g)({}).hasOwnProperty.call(g,I)&&(T[I]=g[I])}return T},E.apply(null,arguments)}},"../../../node_modules/.pnpm/@emotion+cache@11.13.1/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js":(re,D,_)=>{_.d(D,{A:()=>je});var E=!1;function T(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function A(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var g=function(){function e(n){var t=this;this._insertTag=function(a){var u;t.tags.length===0?t.insertionPoint?u=t.insertionPoint.nextSibling:t.prepend?u=t.container.firstChild:u=t.before:u=t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(a,u),t.tags.push(a)},this.isSpeedy=n.speedy===void 0?!E:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(t){t.forEach(this._insertTag)},r.insert=function(t){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(A(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var u=T(a);try{u.insertRule(t,u.cssRules.length)}catch(C){}}else a.appendChild(document.createTextNode(t));this.ctr++},r.flush=function(){this.tags.forEach(function(t){var a;return(a=t.parentNode)==null?void 0:a.removeChild(t)}),this.tags=[],this.ctr=0},e}(),I=Math.abs,v=String.fromCharCode,R=Object.assign;function F(e,r){return x(e,0)^45?(((r<<2^x(e,0))<<2^x(e,1))<<2^x(e,2))<<2^x(e,3):0}function z(e){return e.trim()}function V(e,r){return(e=r.exec(e))?e[0]:e}function l(e,r,n){return e.replace(r,n)}function X(e,r){return e.indexOf(r)}function x(e,r){return e.charCodeAt(r)|0}function q(e,r,n){return e.slice(r,n)}function b(e){return e.length}function ie(e){return e.length}function f(e,r){return r.push(e),e}function i(e,r){return e.map(r).join("")}var o=1,p=1,h=0,c=0,s=0,S="";function W(e,r,n,t,a,u,C){return{value:e,root:r,parent:n,type:t,props:a,children:u,line:o,column:p,length:C,return:""}}function j(e,r){return R(W("",null,null,"",null,null,0),e,{length:-e.length},r)}function J(){return s}function te(){return s=c>0?x(S,--c):0,p--,s===10&&(p=1,o--),s}function L(){return s=c<h?x(S,c++):0,p++,s===10&&(p=1,o++),s}function K(){return x(S,c)}function ce(){return c}function se(e,r){return q(S,e,r)}function ne(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function de(e){return o=p=1,h=b(S=e),c=0,[]}function pe(e){return S="",e}function oe(e){return z(se(c-1,he(e===91?e+2:e===40?e+1:e)))}function Be(e){return pe(Ae(de(e)))}function Ee(e){for(;(s=K())&&s<33;)L();return ne(e)>2||ne(s)>3?"":" "}function Ae(e){for(;L();)switch(ne(s)){case 0:append(ye(c-1),e);break;case 2:append(oe(s),e);break;default:append(from(s),e)}return e}function Se(e,r){for(;--r&&L()&&!(s<48||s>102||s>57&&s<65||s>70&&s<97););return se(e,ce()+(r<6&&K()==32&&L()==32))}function he(e){for(;L();)switch(s){case e:return c;case 34:case 39:e!==34&&e!==39&&he(s);break;case 40:e===41&&he(e);break;case 92:L();break}return c}function Ce(e,r){for(;L()&&e+s!==47+10;)if(e+s===42+42&&K()===47)break;return"/*"+se(r,c-1)+"*"+v(e===47?e:L())}function ye(e){for(;!ne(K());)L();return se(e,c)}var O="-ms-",fe="-moz-",d="-webkit-",be="comm",me="rule",ge="decl",He="@page",Ve="@media",Te="@import",Ke="@charset",Ge="@viewport",Ye="@supports",Xe="@document",Ze="@namespace",ke="@keyframes",qe="@font-face",Je="@counter-style",Qe="@font-feature-values",Re="@layer";function ae(e,r){for(var n="",t=ie(e),a=0;a<t;a++)n+=r(e[a],a,e,r)||"";return n}function Oe(e,r,n,t){switch(e.type){case Re:if(e.children.length)break;case Te:case ge:return e.return=e.return||e.value;case be:return"";case ke:return e.return=e.value+"{"+ae(e.children,t)+"}";case me:e.value=e.props.join(",")}return b(n=ae(e.children,t))?e.return=e.value+"{"+n+"}":""}function Pe(e){var r=ie(e);return function(n,t,a,u){for(var C="",k=0;k<r;k++)C+=e[k](n,t,a,u)||"";return C}}function Me(e){return function(r){r.root||(r=r.return)&&e(r)}}function er(e,r,n,t){if(e.length>-1&&!e.return)switch(e.type){case DECLARATION:e.return=prefix(e.value,e.length,n);return;case KEYFRAMES:return serialize([copy(e,{value:replace(e.value,"@","@"+WEBKIT)})],t);case RULESET:if(e.length)return combine(e.props,function(a){switch(match(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return serialize([copy(e,{props:[replace(a,/:(read-\w+)/,":"+MOZ+"$1")]})],t);case"::placeholder":return serialize([copy(e,{props:[replace(a,/:(plac\w+)/,":"+WEBKIT+"input-$1")]}),copy(e,{props:[replace(a,/:(plac\w+)/,":"+MOZ+"$1")]}),copy(e,{props:[replace(a,/:(plac\w+)/,MS+"input-$1")]})],t)}return""})}}function rr(e){switch(e.type){case RULESET:e.props=e.props.map(function(r){return combine(tokenize(r),function(n,t,a){switch(charat(n,0)){case 12:return substr(n,1,strlen(n));case 0:case 40:case 43:case 62:case 126:return n;case 58:a[++t]==="global"&&(a[t]="",a[++t]="\f"+substr(a[t],t=1,-1));case 32:return t===1?"":n;default:switch(t){case 0:return e=n,sizeof(a)>1?"":n;case(t=sizeof(a)-1):case 2:return t===2?n+e+e:n+e;default:return n}}})})}}function $e(e){return pe(ue("",null,null,null,[""],e=de(e),0,[0],e))}function ue(e,r,n,t,a,u,C,k,U){for(var H=0,P=0,M=C,Z=0,Q=0,B=0,y=1,N=1,w=1,$=0,G="",le=a,ee=u,Y=t,m=G;N;)switch(B=$,$=L()){case 40:if(B!=108&&x(m,M-1)==58){X(m+=l(oe($),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:m+=oe($);break;case 9:case 10:case 13:case 32:m+=Ee(B);break;case 92:m+=Se(ce()-1,7);continue;case 47:switch(K()){case 42:case 47:f(ze(Ce(L(),ce()),r,n),U);break;default:m+="/"}break;case 123*y:k[H++]=b(m)*w;case 125*y:case 59:case 0:switch($){case 0:case 125:N=0;case 59+P:w==-1&&(m=l(m,/\f/g,"")),Q>0&&b(m)-M&&f(Q>32?ve(m+";",t,n,M-1):ve(l(m," ","")+";",t,n,M-2),U);break;case 59:m+=";";default:if(f(Y=we(m,r,n,H,P,a,k,G,le=[],ee=[],M),u),$===123)if(P===0)ue(m,r,Y,Y,le,u,M,k,ee);else switch(Z===99&&x(m,3)===110?100:Z){case 100:case 108:case 109:case 115:ue(e,Y,Y,t&&f(we(e,Y,Y,0,0,a,k,G,a,le=[],M),ee),a,ee,M,k,t?le:ee);break;default:ue(m,Y,Y,Y,[""],ee,0,k,ee)}}H=P=Q=0,y=w=1,G=m="",M=C;break;case 58:M=1+b(m),Q=B;default:if(y<1){if($==123)--y;else if($==125&&y++==0&&te()==125)continue}switch(m+=v($),$*y){case 38:w=P>0?1:(m+="\f",-1);break;case 44:k[H++]=(b(m)-1)*w,w=1;break;case 64:K()===45&&(m+=oe(L())),Z=K(),P=M=b(G=m+=ye(ce())),$++;break;case 45:B===45&&b(m)==2&&(y=0)}}return u}function we(e,r,n,t,a,u,C,k,U,H,P){for(var M=a-1,Z=a===0?u:[""],Q=ie(Z),B=0,y=0,N=0;B<t;++B)for(var w=0,$=q(e,M+1,M=I(y=C[B])),G=e;w<Q;++w)(G=z(y>0?Z[w]+" "+$:l($,/&\f/g,Z[w])))&&(U[N++]=G);return W(e,r,n,a===0?me:k,U,H,P)}function ze(e,r,n){return W(e,r,n,be,v(J()),q(e,2,-2),0)}function ve(e,r,n,t){return W(e,r,n,ge,q(e,0,t),q(e,t+1,-1),t)}var Ie=function(r,n,t){for(var a=0,u=0;a=u,u=K(),a===38&&u===12&&(n[t]=1),!ne(u);)L();return se(r,c)},Le=function(r,n){var t=-1,a=44;do switch(ne(a)){case 0:a===38&&K()===12&&(n[t]=1),r[t]+=Ie(c-1,n,t);break;case 2:r[t]+=oe(a);break;case 4:if(a===44){r[++t]=K()===58?"&\f":"",n[t]=r[t].length;break}default:r[t]+=v(a)}while(a=L());return r},Ue=function(r,n){return pe(Le(de(r),n))},xe=new WeakMap,Ne=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var n=r.value,t=r.parent,a=r.column===t.column&&r.line===t.line;t.type!=="rule";)if(t=t.parent,!t)return;if(!(r.props.length===1&&n.charCodeAt(0)!==58&&!xe.get(t))&&!a){xe.set(r,!0);for(var u=[],C=Ue(n,u),k=t.props,U=0,H=0;U<C.length;U++)for(var P=0;P<k.length;P++,H++)r.props[H]=u[U]?C[U].replace(/&\f/g,k[P]):k[P]+" "+C[U]}}},De=function(r){if(r.type==="decl"){var n=r.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(r.return="",r.value="")}};function _e(e,r){switch(F(e,r)){case 5103:return d+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return d+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return d+e+fe+e+O+e+e;case 6828:case 4268:return d+e+O+e+e;case 6165:return d+e+O+"flex-"+e+e;case 5187:return d+e+l(e,/(\w+).+(:[^]+)/,d+"box-$1$2"+O+"flex-$1$2")+e;case 5443:return d+e+O+"flex-item-"+l(e,/flex-|-self/,"")+e;case 4675:return d+e+O+"flex-line-pack"+l(e,/align-content|flex-|-self/,"")+e;case 5548:return d+e+O+l(e,"shrink","negative")+e;case 5292:return d+e+O+l(e,"basis","preferred-size")+e;case 6060:return d+"box-"+l(e,"-grow","")+d+e+O+l(e,"grow","positive")+e;case 4554:return d+l(e,/([^-])(transform)/g,"$1"+d+"$2")+e;case 6187:return l(l(l(e,/(zoom-|grab)/,d+"$1"),/(image-set)/,d+"$1"),e,"")+e;case 5495:case 3959:return l(e,/(image-set\([^]*)/,d+"$1$`$1");case 4968:return l(l(e,/(.+:)(flex-)?(.*)/,d+"box-pack:$3"+O+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+d+e+e;case 4095:case 3583:case 4068:case 2532:return l(e,/(.+)-inline(.+)/,d+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(b(e)-1-r>6)switch(x(e,r+1)){case 109:if(x(e,r+4)!==45)break;case 102:return l(e,/(.+:)(.+)-([^]+)/,"$1"+d+"$2-$3$1"+fe+(x(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~X(e,"stretch")?_e(l(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(x(e,r+1)!==115)break;case 6444:switch(x(e,b(e)-3-(~X(e,"!important")&&10))){case 107:return l(e,":",":"+d)+e;case 101:return l(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+d+(x(e,14)===45?"inline-":"")+"box$3$1"+d+"$2$3$1"+O+"$2box$3")+e}break;case 5936:switch(x(e,r+11)){case 114:return d+e+O+l(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return d+e+O+l(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return d+e+O+l(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return d+e+O+e+e}return e}var Fe=function(r,n,t,a){if(r.length>-1&&!r.return)switch(r.type){case ge:r.return=_e(r.value,r.length);break;case ke:return ae([j(r,{value:l(r.value,"@","@"+d)})],a);case me:if(r.length)return i(r.props,function(u){switch(V(u,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ae([j(r,{props:[l(u,/:(read-\w+)/,":"+fe+"$1")]})],a);case"::placeholder":return ae([j(r,{props:[l(u,/:(plac\w+)/,":"+d+"input-$1")]}),j(r,{props:[l(u,/:(plac\w+)/,":"+fe+"$1")]}),j(r,{props:[l(u,/:(plac\w+)/,O+"input-$1")]})],a)}return""})}},We=[Fe],je=function(r){var n=r.key;if(n==="css"){var t=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(t,function(y){var N=y.getAttribute("data-emotion");N.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var a=r.stylisPlugins||We,u={},C,k=[];C=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var N=y.getAttribute("data-emotion").split(" "),w=1;w<N.length;w++)u[N[w]]=!0;k.push(y)});var U,H=[Ne,De];{var P,M=[Oe,Me(function(y){P.insert(y)})],Z=Pe(H.concat(a,M)),Q=function(N){return ae($e(N),Z)};U=function(N,w,$,G){P=$,Q(N?N+"{"+w.styles+"}":w.styles),G&&(B.inserted[w.name]=!0)}}var B={key:n,sheet:new g({key:n,container:C,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:u,registered:{},insert:U};return B.sheet.hydrate(k),B}},"../../../node_modules/.pnpm/@emotion+is-prop-valid@1.3.0/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js":(re,D,_)=>{_.d(D,{A:()=>A});var E=_("../../../node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js"),T=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,A=(0,E.A)(function(g){return T.test(g)||g.charCodeAt(0)===111&&g.charCodeAt(1)===110&&g.charCodeAt(2)<91})},"../../../node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js":(re,D,_)=>{_.d(D,{A:()=>E});function E(T){var A=Object.create(null);return function(g){return A[g]===void 0&&(A[g]=T(g)),A[g]}}},"../../../node_modules/.pnpm/@emotion+serialize@1.3.1/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js":(re,D,_)=>{_.d(D,{J:()=>ie});function E(f){for(var i=0,o,p=0,h=f.length;h>=4;++p,h-=4)o=f.charCodeAt(p)&255|(f.charCodeAt(++p)&255)<<8|(f.charCodeAt(++p)&255)<<16|(f.charCodeAt(++p)&255)<<24,o=(o&65535)*1540483477+((o>>>16)*59797<<16),o^=o>>>24,i=(o&65535)*1540483477+((o>>>16)*59797<<16)^(i&65535)*1540483477+((i>>>16)*59797<<16);switch(h){case 3:i^=(f.charCodeAt(p+2)&255)<<16;case 2:i^=(f.charCodeAt(p+1)&255)<<8;case 1:i^=f.charCodeAt(p)&255,i=(i&65535)*1540483477+((i>>>16)*59797<<16)}return i^=i>>>13,i=(i&65535)*1540483477+((i>>>16)*59797<<16),((i^i>>>15)>>>0).toString(36)}var T={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},A=_("../../../node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js"),g=!1,I=/[A-Z]|^ms/g,v=/_EMO_([^_]+?)_([^]*?)_EMO_/g,R=function(i){return i.charCodeAt(1)===45},F=function(i){return i!=null&&typeof i!="boolean"},z=(0,A.A)(function(f){return R(f)?f:f.replace(I,"-$&").toLowerCase()}),V=function(i,o){switch(i){case"animation":case"animationName":if(typeof o=="string")return o.replace(v,function(p,h,c){return b={name:h,styles:c,next:b},h})}return T[i]!==1&&!R(i)&&typeof o=="number"&&o!==0?o+"px":o},l="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function X(f,i,o){if(o==null)return"";var p=o;if(p.__emotion_styles!==void 0)return p;switch(typeof o){case"boolean":return"";case"object":{var h=o;if(h.anim===1)return b={name:h.name,styles:h.styles,next:b},h.name;var c=o;if(c.styles!==void 0){var s=c.next;if(s!==void 0)for(;s!==void 0;)b={name:s.name,styles:s.styles,next:b},s=s.next;var S=c.styles+";";return S}return x(f,i,o)}case"function":{if(f!==void 0){var W=b,j=o(f);return b=W,X(f,i,j)}break}}var J=o;if(i==null)return J;var te=i[J];return te!==void 0?te:J}function x(f,i,o){var p="";if(Array.isArray(o))for(var h=0;h<o.length;h++)p+=X(f,i,o[h])+";";else for(var c in o){var s=o[c];if(typeof s!="object"){var S=s;i!=null&&i[S]!==void 0?p+=c+"{"+i[S]+"}":F(S)&&(p+=z(c)+":"+V(c,S)+";")}else{if(c==="NO_COMPONENT_SELECTOR"&&g)throw new Error(l);if(Array.isArray(s)&&typeof s[0]=="string"&&(i==null||i[s[0]]===void 0))for(var W=0;W<s.length;W++)F(s[W])&&(p+=z(c)+":"+V(c,s[W])+";");else{var j=X(f,i,s);switch(c){case"animation":case"animationName":{p+=z(c)+":"+j+";";break}default:p+=c+"{"+j+"}"}}}}return p}var q=/label:\s*([^\s;\n{]+)\s*(;|$)/g,b;function ie(f,i,o){if(f.length===1&&typeof f[0]=="object"&&f[0]!==null&&f[0].styles!==void 0)return f[0];var p=!0,h="";b=void 0;var c=f[0];if(c==null||c.raw===void 0)p=!1,h+=X(o,i,c);else{var s=c;h+=s[0]}for(var S=1;S<f.length;S++)if(h+=X(o,i,f[S]),p){var W=c;h+=W[S]}q.lastIndex=0;for(var j="",J;(J=q.exec(h))!==null;)j+="-"+J[1];var te=E(h)+j;return{name:te,styles:h,next:b}}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.1.0_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(re,D,_)=>{var E;_.d(D,{s:()=>I});var T=_("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),A=function(F){return F()},g=(E||(E=_.t(T,2)))["useInsertionEffect"]?(E||(E=_.t(T,2)))["useInsertionEffect"]:!1,I=g||A,v=g||T.useLayoutEffect},"../../../node_modules/.pnpm/@emotion+utils@1.4.0/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js":(re,D,_)=>{_.d(D,{Rk:()=>T,SF:()=>A,sk:()=>g});var E=!0;function T(I,v,R){var F="";return R.split(" ").forEach(function(z){I[z]!==void 0?v.push(I[z]+";"):F+=z+" "}),F}var A=function(v,R,F){var z=v.key+"-"+R.name;(F===!1||E===!1)&&v.registered[z]===void 0&&(v.registered[z]=R.styles)},g=function(v,R,F){A(v,R,F);var z=v.key+"-"+R.name;if(v.inserted[R.name]===void 0){var V=R;do v.insert(R===V?"."+z:"",V,v.sheet,!0),V=V.next;while(V!==void 0)}}}}]);})();
