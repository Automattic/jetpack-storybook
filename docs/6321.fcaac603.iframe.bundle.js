"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6321],{"../../../node_modules/.pnpm/@storybook+addon-a11y@9.0.15_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-a11y/dist/preview.mjs":((Nt,ue,V)=>{V.r(ue),V.d(ue,{afterEach:()=>Be,initialGlobals:()=>Qe,parameters:()=>At});var nt=V("storybook/test"),X=V.n(nt),re=V("storybook/internal/preview-errors"),Ke=V.n(re),st=V("@storybook/global"),pt=V.n(st),rt=V("storybook/preview-api"),Et=V.n(rt),p="storybook/a11y",Rt=`${p}/panel`,xe=`${p}/result`,yt=`${p}/request`,He=`${p}/running`,he=`${p}/error`,De=`${p}/manual`,ze=`${p}/select`,Le={RESULT:xe,REQUEST:yt,RUNNING:He,ERROR:he,MANUAL:De,SELECT:ze},{document:et}=st.global,kt=(Pe,jt)=>{let it=et.location.pathname.replace(/iframe\.html$/,""),Ge={...Pe};return["incomplete","passes","violations"].forEach(B=>{Array.isArray(Pe[B])&&(Ge[B]=Pe[B].map(ie=>({...ie,nodes:ie.nodes.map((ot,Ie)=>{let lt=`${B}.${ie.id}.${Ie+1}`,dt=`${it}?path=/story/${jt}&addonPanel=${Rt}&a11ySelection=${lt}`;return{id:lt,...ot,linkPath:dt}})})))}),Ge},{document:$t}=st.global,xt=rt.addons.getChannel(),We={config:{},options:{}},tt=["region"],Ne=[],wt=!1,Bt=async()=>{if(Ne.length===0){wt=!1;return}wt=!0;let Pe=Ne.shift();Pe&&await Pe(),Bt()},Oe=async(Pe=We,jt)=>{let it=(await V.e(6253).then(V.t.bind(V,"../../../node_modules/.pnpm/axe-core@4.10.3/node_modules/axe-core/axe.js",23)))?.default||globalThis.axe,{config:Ge={},options:B={}}=Pe;if(Pe.element)throw new re.ElementA11yParameterError;let ie={include:$t?.body,exclude:[".sb-wrapper","#storybook-docs","#storybook-highlights-root"]};if(Pe.context){let Ie=typeof Pe.context=="object"&&"include"in Pe.context&&Pe.context.include!==void 0,lt=typeof Pe.context=="object"&&"exclude"in Pe.context&&Pe.context.exclude!==void 0;Ie?ie.include=Pe.context.include:!Ie&&!lt&&(ie.include=Pe.context),lt&&(ie.exclude=ie.exclude.concat(Pe.context.exclude))}it.reset();let ot={...Ge,rules:[...tt.map(Ie=>({id:Ie,enabled:!1})),...Ge?.rules??[]]};return it.configure(ot),new Promise((Ie,lt)=>{let dt=$t?.getElementById("storybook-highlights-root");dt&&(dt.style.display="none");let Pt=async()=>{try{let It=await it.run(ie,B),Jt=kt(It,jt);Ie(Jt)}catch(It){lt(It)}};Ne.push(Pt),wt||Bt(),dt&&(dt.style.display="")})};xt.on(Le.MANUAL,async(Pe,jt=We)=>{try{await(0,rt.waitForAnimations)();let it=await Oe(jt,Pe),Ge=JSON.parse(JSON.stringify(it));xt.emit(Le.RESULT,Ge,Pe)}catch(it){xt.emit(Le.ERROR,it)}});function ae(){try{return(void 0).VITEST_STORYBOOK==="false"}catch{return!1}}var ve=!1,Be=async({id:Pe,reporting:jt,parameters:it,globals:Ge,viewMode:B})=>{let ie=it.a11y,ot=Ge.a11y,Ie=ie?.disable!==!0&&ie?.test!=="off"&&ot?.manual!==!0,lt=()=>{switch(ie?.test){case"todo":return"warning";case"error":default:return"failed"}};if(Ie&&B==="story")try{let dt=await Oe(ie,Pe);if(dt){let Pt=(dt?.violations.length??0)>0;if(jt.addReport({type:"a11y",version:1,result:dt,status:Pt?lt():"passed"}),ae()&&Pt&&lt()==="failed"){if(!ve){let{toHaveNoViolations:It}=await V.e(5785).then(V.bind(V,"../../../node_modules/.pnpm/@storybook+addon-a11y@9.0.15_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-a11y/dist/matchers-7Z3WT2CE.mjs"));nt.expect.extend({toHaveNoViolations:It}),ve=!0}(0,nt.expect)(dt).toHaveNoViolations()}}}catch(dt){if(jt.addReport({type:"a11y",version:1,result:{error:dt},status:"failed"}),ae())throw dt}},Qe={a11y:{manual:!1}},At={a11y:{test:"todo"}}}),"../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist/preview.mjs":((Nt,ue,V)=>{V.r(ue),V.d(ue,{parameters:()=>X});var nt=Object.entries(globalThis.TAGS_OPTIONS??{}).reduce((re,Ke)=>{let[st,pt]=Ke;return pt.excludeFromDocsStories&&(re[st]=!0),re},{}),X={docs:{renderer:async()=>{let{DocsRenderer:re}=await Promise.all([V.e(4833),V.e(3327),V.e(1238)]).then(V.bind(V,"../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist/DocsRenderer-PQXLIZUC.mjs"));return new re},stories:{filter:re=>(re.tags||[]).filter(Ke=>nt[Ke]).length===0&&!re.parameters.docs?.disable}}}}),"../../../node_modules/.pnpm/@storybook+react@9.0.15_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@9.0.15_@t_4f19baafbfa87aa93afe352c3e49b5cc/node_modules/@storybook/react/dist/chunk-CKO6TW2F.mjs":((Nt,ue,V)=>{V.d(ue,{HA:()=>Yo,Jz:()=>Et,Rf:()=>rt});var nt=V("../../../node_modules/.pnpm/@storybook+react@9.0.15_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@9.0.15_@t_4f19baafbfa87aa93afe352c3e49b5cc/node_modules/@storybook/react/dist/chunk-XP5HYGXS.mjs"),X=V("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),re=(0,nt.P$)({"../../node_modules/@base2/pretty-print-object/dist/index.js"(y){var T=y&&y.__assign||function(){return T=Object.assign||function(C){for(var P,R=1,G=arguments.length;R<G;R++){P=arguments[R];for(var te in P)Object.prototype.hasOwnProperty.call(P,te)&&(C[te]=P[te])}return C},T.apply(this,arguments)},ce=y&&y.__spreadArrays||function(){for(var C=0,P=0,R=arguments.length;P<R;P++)C+=arguments[P].length;for(var G=Array(C),te=0,P=0;P<R;P++)for(var v=arguments[P],pe=0,K=v.length;pe<K;pe++,te++)G[te]=v[pe];return G};Object.defineProperty(y,"__esModule",{value:!0});var se=[];function mt(C){var P=typeof C;return C!==null&&(P==="object"||P==="function")}function s(C){return Object.prototype.toString.call(C)==="[object RegExp]"}function M(C){return Object.getOwnPropertySymbols(C).filter(function(P){return Object.prototype.propertyIsEnumerable.call(C,P)})}function I(C,P,R){R===void 0&&(R="");var G={indent:"	",singleQuotes:!0},te=T(T({},G),P),v;te.inlineCharacterLimit===void 0?v={newLine:`
`,newLineOrSpace:`
`,pad:R,indent:R+te.indent}:v={newLine:"@@__PRETTY_PRINT_NEW_LINE__@@",newLineOrSpace:"@@__PRETTY_PRINT_NEW_LINE_OR_SPACE__@@",pad:"@@__PRETTY_PRINT_PAD__@@",indent:"@@__PRETTY_PRINT_INDENT__@@"};var pe=function(D){if(te.inlineCharacterLimit===void 0)return D;var H=D.replace(new RegExp(v.newLine,"g"),"").replace(new RegExp(v.newLineOrSpace,"g")," ").replace(new RegExp(v.pad+"|"+v.indent,"g"),"");return H.length<=te.inlineCharacterLimit?H:D.replace(new RegExp(v.newLine+"|"+v.newLineOrSpace,"g"),`
`).replace(new RegExp(v.pad,"g"),R).replace(new RegExp(v.indent,"g"),R+te.indent)};if(se.indexOf(C)!==-1)return'"[Circular]"';if(C==null||typeof C=="number"||typeof C=="boolean"||typeof C=="function"||typeof C=="symbol"||s(C))return String(C);if(C instanceof Date)return"new Date('"+C.toISOString()+"')";if(Array.isArray(C)){if(C.length===0)return"[]";se.push(C);var K="["+v.newLine+C.map(function(D,H){var me=C.length-1===H?v.newLine:","+v.newLineOrSpace,oe=I(D,te,R+te.indent);return te.transform&&(oe=te.transform(C,H,oe)),v.indent+oe+me}).join("")+v.pad+"]";return se.pop(),pe(K)}if(mt(C)){var J=ce(Object.keys(C),M(C));if(te.filter&&(J=J.filter(function(H){return te.filter&&te.filter(C,H)})),J.length===0)return"{}";se.push(C);var K="{"+v.newLine+J.map(function(H,me){var oe=J.length-1===me?v.newLine:","+v.newLineOrSpace,Ze=typeof H=="symbol",Ee=!Ze&&/^[a-z$_][a-z$_0-9]*$/i.test(H.toString()),bt=Ze||Ee?H:I(H,te),St=I(C[H],te,R+te.indent);return te.transform&&(St=te.transform(C,H,St)),v.indent+String(bt)+": "+St+oe}).join("")+v.pad+"}";return se.pop(),pe(K)}return C=String(C).replace(/[\r\n]/g,function(D){return D===`
`?"\\n":"\\r"}),te.singleQuotes?(C=C.replace(/\\?'/g,"\\'"),"'"+C+"'"):(C=C.replace(/"/g,'\\"'),'"'+C+'"')}y.prettyPrint=I}}),Ke=(0,nt.P$)({"../../node_modules/react-element-to-jsx-string/node_modules/react-is/cjs/react-is.production.min.js"(y){var T=Symbol.for("react.element"),ce=Symbol.for("react.portal"),se=Symbol.for("react.fragment"),mt=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),I=Symbol.for("react.context"),C=Symbol.for("react.server_context"),P=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),K;K=Symbol.for("react.module.reference");function J(D){if(typeof D=="object"&&D!==null){var H=D.$$typeof;switch(H){case T:switch(D=D.type,D){case se:case s:case mt:case R:case G:return D;default:switch(D=D&&D.$$typeof,D){case C:case I:case P:case v:case te:case M:return D;default:return H}}case ce:return H}}}y.ContextConsumer=I,y.ContextProvider=M,y.Element=T,y.ForwardRef=P,y.Fragment=se,y.Lazy=v,y.Memo=te,y.Portal=ce,y.Profiler=s,y.StrictMode=mt,y.Suspense=R,y.SuspenseList=G,y.isAsyncMode=function(){return!1},y.isConcurrentMode=function(){return!1},y.isContextConsumer=function(D){return J(D)===I},y.isContextProvider=function(D){return J(D)===M},y.isElement=function(D){return typeof D=="object"&&D!==null&&D.$$typeof===T},y.isForwardRef=function(D){return J(D)===P},y.isFragment=function(D){return J(D)===se},y.isLazy=function(D){return J(D)===v},y.isMemo=function(D){return J(D)===te},y.isPortal=function(D){return J(D)===ce},y.isProfiler=function(D){return J(D)===s},y.isStrictMode=function(D){return J(D)===mt},y.isSuspense=function(D){return J(D)===R},y.isSuspenseList=function(D){return J(D)===G},y.isValidElementType=function(D){return typeof D=="string"||typeof D=="function"||D===se||D===s||D===mt||D===R||D===G||D===pe||typeof D=="object"&&D!==null&&(D.$$typeof===v||D.$$typeof===te||D.$$typeof===M||D.$$typeof===I||D.$$typeof===P||D.$$typeof===K||D.getModuleId!==void 0)},y.typeOf=J}}),st=(0,nt.P$)({"../../node_modules/react-element-to-jsx-string/node_modules/react-is/cjs/react-is.development.js"(y){}}),pt=(0,nt.P$)({"../../node_modules/react-element-to-jsx-string/node_modules/react-is/index.js"(y,T){T.exports=Ke()}}),rt=y=>y.$$typeof===Symbol.for("react.memo"),Et=y=>y.$$typeof===Symbol.for("react.forward_ref");function p(y){return Object.prototype.toString.call(y)==="[object Object]"}function Rt(y){var T,ce;return p(y)===!1?!1:(T=y.constructor,T===void 0?!0:(ce=T.prototype,!(p(ce)===!1||ce.hasOwnProperty("isPrototypeOf")===!1)))}var xe=(0,nt.f1)(re()),yt=(0,nt.f1)(pt()),He=function(y,T){return y===0?"":new Array(y*T).fill(" ").join("")};function he(y){"@babel/helpers - typeof";return he=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},he(y)}function De(y){return ze(y)||Le(y)||et(y)||$t()}function ze(y){if(Array.isArray(y))return kt(y)}function Le(y){if(typeof Symbol<"u"&&y[Symbol.iterator]!=null||y["@@iterator"]!=null)return Array.from(y)}function et(y,T){if(y){if(typeof y=="string")return kt(y,T);var ce=Object.prototype.toString.call(y).slice(8,-1);if(ce==="Object"&&y.constructor&&(ce=y.constructor.name),ce==="Map"||ce==="Set")return Array.from(y);if(ce==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ce))return kt(y,T)}}function kt(y,T){(T==null||T>y.length)&&(T=y.length);for(var ce=0,se=new Array(T);ce<T;ce++)se[ce]=y[ce];return se}function $t(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xt(y,T){return y===null||he(y)!=="object"||y instanceof Date||y instanceof RegExp||X.isValidElement(y)?y:(T.add(y),Array.isArray(y)?y.map(function(ce){return xt(ce,T)}):Object.keys(y).sort().reduce(function(ce,se){return se==="_owner"||(se==="current"||T.has(y[se])?ce[se]="[Circular]":ce[se]=xt(y[se],T)),ce},{}))}function We(y){return xt(y,new WeakSet)}var tt=function(y){return{type:"string",value:y}},Ne=function(y){return{type:"number",value:y}},wt=function(y,T,ce,se){return{type:"ReactElement",displayName:y,props:T,defaultProps:ce,childrens:se}},Bt=function(y,T){return{type:"ReactFragment",key:y,childrens:T}},Oe=!!X.Fragment,ae=function(y){return!y.name||y.name==="_default"?"No Display Name":y.name},ve=function y(T){switch(!0){case!!T.displayName:return T.displayName;case T.$$typeof===yt.Memo:return y(T.type);case T.$$typeof===yt.ForwardRef:return y(T.render);default:return ae(T)}},Be=function(y){switch(!0){case typeof y.type=="string":return y.type;case typeof y.type=="function":return y.type.displayName?y.type.displayName:ae(y.type);case(0,yt.isForwardRef)(y):case(0,yt.isMemo)(y):return ve(y.type);case(0,yt.isContextConsumer)(y):return"".concat(y.type._context.displayName||"Context",".Consumer");case(0,yt.isContextProvider)(y):return"".concat(y.type._context.displayName||"Context",".Provider");case(0,yt.isLazy)(y):return"Lazy";case(0,yt.isProfiler)(y):return"Profiler";case(0,yt.isStrictMode)(y):return"StrictMode";case(0,yt.isSuspense)(y):return"Suspense";default:return"UnknownElementType"}},Qe=function(y,T){return T!=="children"},At=function(y){return y!==!0&&y!==!1&&y!==null&&y!==""},Pe=function(y,T){var ce={};return Object.keys(y).filter(function(se){return T(y[se],se)}).forEach(function(se){return ce[se]=y[se]}),ce},jt=function y(T,ce){var se=ce.displayName,mt=se===void 0?Be:se;if(typeof T=="string")return tt(T);if(typeof T=="number")return Ne(T);if(!X.isValidElement(T))throw new Error("react-element-to-jsx-string: Expected a React.Element, got `".concat(he(T),"`"));var s=mt(T),M=Pe(T.props,Qe);T.ref!==null&&(M.ref=T.ref);var I=T.key;typeof I=="string"&&I.search(/^\./)&&(M.key=I);var C=Pe(T.type.defaultProps||{},Qe),P=X.Children.toArray(T.props.children).filter(At).map(function(R){return y(R,ce)});return Oe&&T.type===X.Fragment?Bt(I,P):wt(s,M,C,P)};function it(){}var Ge=function(y){return y.toString().split(`
`).map(function(T){return T.trim()}).join("")},B=Ge,ie=function(y,T){var ce=T.functionValue,se=ce===void 0?B:ce,mt=T.showFunctions;return se(!mt&&se===B?it:y)},ot=function(y,T,ce,se){var mt=We(y),s=(0,xe.prettyPrint)(mt,{transform:function(M,I,C){var P=M[I];return P&&(0,X.isValidElement)(P)?xo(jt(P,se),!0,ce,se):typeof P=="function"?ie(P,se):C}});return T?s.replace(/\s+/g," ").replace(/{ /g,"{").replace(/ }/g,"}").replace(/\[ /g,"[").replace(/ ]/g,"]"):s.replace(/\t/g,He(1,se.tabStop)).replace(/\n([^$])/g,`
`.concat(He(ce+1,se.tabStop),"$1"))},Ie=function(y){return y.replace(/"/g,"&quot;")},lt=function(y,T,ce,se){if(typeof y=="number")return"{".concat(String(y),"}");if(typeof y=="string")return'"'.concat(Ie(y),'"');if(he(y)==="symbol"){var mt=y.valueOf().toString().replace(/Symbol\((.*)\)/,"$1");return mt?"{Symbol('".concat(mt,"')}"):"{Symbol()}"}return typeof y=="function"?"{".concat(ie(y,se),"}"):(0,X.isValidElement)(y)?"{".concat(xo(jt(y,se),!0,ce,se),"}"):y instanceof Date?isNaN(y.valueOf())?"{new Date(NaN)}":'{new Date("'.concat(y.toISOString(),'")}'):Rt(y)||Array.isArray(y)?"{".concat(ot(y,T,ce,se),"}"):"{".concat(String(y),"}")},dt=function(y,T,ce,se,mt,s,M,I){if(!T&&!se)throw new Error('The prop "'.concat(y,'" has no value and no default: could not be formatted'));var C=T?ce:mt,P=I.useBooleanShorthandSyntax,R=I.tabStop,G=lt(C,s,M,I),te=" ",v=`
`.concat(He(M+1,R)),pe=G.includes(`
`);return P&&G==="{false}"&&!se?(te="",v=""):P&&G==="{true}"?(te+="".concat(y),v+="".concat(y)):(te+="".concat(y,"=").concat(G),v+="".concat(y,"=").concat(G)),{attributeFormattedInline:te,attributeFormattedMultiline:v,isMultilineAttribute:pe}},Pt=function(y,T){var ce=y.slice(0,y.length>0?y.length-1:0),se=y[y.length-1];return se&&(T.type==="string"||T.type==="number")&&(se.type==="string"||se.type==="number")?ce.push(tt(String(se.value)+String(T.value))):(se&&ce.push(se),ce.push(T)),ce},It=function(y){return["key","ref"].includes(y)},Jt=function(y){return function(T){var ce=T.includes("key"),se=T.includes("ref"),mt=T.filter(function(M){return!It(M)}),s=De(y?mt.sort():mt);return se&&s.unshift("ref"),ce&&s.unshift("key"),s}};function io(y,T){return Array.isArray(T)?function(ce){return T.indexOf(ce)===-1}:function(ce){return T(y[ce],ce)}}var Po=function(y,T,ce,se,mt){var s=mt.tabStop;return y.type==="string"?T.split(`
`).map(function(M,I){return I===0?M:"".concat(He(se,s)).concat(M)}).join(`
`):T},qo=function(y,T,ce){return function(se){return Po(se,xo(se,y,T,ce),y,T,ce)}},Wo=function(y,T){return function(ce){var se=Object.keys(y).includes(ce);return!se||se&&y[ce]!==T[ce]}},Lo=function(y,T,ce,se,mt){return mt?He(ce,se).length+T.length>mt:y.length>1},hn=function(y,T,ce,se,mt,s,M){return(Lo(y,T,mt,s,M)||ce)&&!se},Io=function(y,T,ce,se){var mt=y.type,s=y.displayName,M=s===void 0?"":s,I=y.childrens,C=y.props,P=C===void 0?{}:C,R=y.defaultProps,G=R===void 0?{}:R;if(mt!=="ReactElement")throw new Error('The "formatReactElementNode" function could only format node of type "ReactElement". Given:  '.concat(mt));var te=se.filterProps,v=se.maxInlineAttributesLineLength,pe=se.showDefaultProps,K=se.sortProps,J=se.tabStop,D="<".concat(M),H=D,me=D,oe=!1,Ze=[],Ee=io(P,te);Object.keys(P).filter(Ee).filter(Wo(G,P)).forEach(function(Dt){return Ze.push(Dt)}),Object.keys(G).filter(Ee).filter(function(){return pe}).filter(function(Dt){return!Ze.includes(Dt)}).forEach(function(Dt){return Ze.push(Dt)});var bt=Jt(K)(Ze);if(bt.forEach(function(Dt){var Ot=dt(Dt,Object.keys(P).includes(Dt),P[Dt],Object.keys(G).includes(Dt),G[Dt],T,ce,se),po=Ot.attributeFormattedInline,qt=Ot.attributeFormattedMultiline,Ut=Ot.isMultilineAttribute;Ut&&(oe=!0),H+=po,me+=qt}),me+=`
`.concat(He(ce,J)),hn(bt,H,oe,T,ce,J,v)?D=me:D=H,I&&I.length>0){var St=ce+1;D+=">",T||(D+=`
`,D+=He(St,J)),D+=I.reduce(Pt,[]).map(qo(T,St,se)).join(T?"":`
`.concat(He(St,J))),T||(D+=`
`,D+=He(St-1,J)),D+="</".concat(M,">")}else Lo(bt,H,ce,J,v)||(D+=" "),D+="/>";return D},Mo="",wo="React.Fragment",Go=function(y,T,ce){var se={};return T&&(se={key:T}),{type:"ReactElement",displayName:y,props:se,defaultProps:{},childrens:ce}},Xo=function(y){var T=y.key;return!!T},Co=function(y){var T=y.childrens;return T.length===0},Oo=function(y,T,ce,se){var mt=y.type,s=y.key,M=y.childrens;if(mt!=="ReactFragment")throw new Error('The "formatReactFragmentNode" function could only format node of type "ReactFragment". Given: '.concat(mt));var I=se.useFragmentShortSyntax,C;return I?Co(y)||Xo(y)?C=wo:C=Mo:C=wo,Io(Go(C,s,M),T,ce,se)},on=["<",">","{","}"],Ko=function(y){return on.some(function(T){return y.includes(T)})},Fo=function(y){return Ko(y)?"{`".concat(y,"`}"):y},So=function(y){var T=y;return T.endsWith(" ")&&(T=T.replace(/^(.*?)(\s+)$/,"$1{'$2'}")),T.startsWith(" ")&&(T=T.replace(/^(\s+)(.*)$/,"{'$1'}$2")),T},xo=function(y,T,ce,se){if(y.type==="number")return String(y.value);if(y.type==="string")return y.value?"".concat(So(Fo(String(y.value)))):"";if(y.type==="ReactElement")return Io(y,T,ce,se);if(y.type==="ReactFragment")return Oo(y,T,ce,se);throw new TypeError('Unknow format type "'.concat(y.type,'"'))},Ho=function(y,T){return xo(y,!1,0,T)},Yo=function(y){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},ce=T.filterProps,se=ce===void 0?[]:ce,mt=T.showDefaultProps,s=mt===void 0?!0:mt,M=T.showFunctions,I=M===void 0?!1:M,C=T.functionValue,P=T.tabStop,R=P===void 0?2:P,G=T.useBooleanShorthandSyntax,te=G===void 0?!0:G,v=T.useFragmentShortSyntax,pe=v===void 0?!0:v,K=T.sortProps,J=K===void 0?!0:K,D=T.maxInlineAttributesLineLength,H=T.displayName;if(!y)throw new Error("react-element-to-jsx-string: Expected a ReactElement");var me={filterProps:se,showDefaultProps:s,showFunctions:I,functionValue:C,tabStop:R,useBooleanShorthandSyntax:te,useFragmentShortSyntax:pe,sortProps:J,maxInlineAttributesLineLength:D,displayName:H};return Ho(jt(y,me),me)}}),"../../../node_modules/.pnpm/@storybook+react@9.0.15_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@9.0.15_@t_4f19baafbfa87aa93afe352c3e49b5cc/node_modules/@storybook/react/dist/chunk-XLZBPYSH.mjs":((Nt,ue,V)=>{V.d(ue,{t:()=>Ke});var nt=V("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),X=V("storybook/preview-api"),re=V.n(X),Ke=(st,pt)=>(0,X.defaultDecorateStory)(rt=>nt.createElement(st,rt),pt)}),"../../../node_modules/.pnpm/@storybook+react@9.0.15_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@9.0.15_@t_4f19baafbfa87aa93afe352c3e49b5cc/node_modules/@storybook/react/dist/chunk-XP5HYGXS.mjs":((Nt,ue,V)=>{V.d(ue,{E:()=>rt,P$:()=>Et,VA:()=>p,Yp:()=>yt,f1:()=>xe});var nt=Object.create,X=Object.defineProperty,re=Object.getOwnPropertyDescriptor,Ke=Object.getOwnPropertyNames,st=Object.getPrototypeOf,pt=Object.prototype.hasOwnProperty,rt=(He,he)=>function(){return He&&(he=(0,He[Ke(He)[0]])(He=0)),he},Et=(He,he)=>function(){return he||(0,He[Ke(He)[0]])((he={exports:{}}).exports,he),he.exports},p=(He,he)=>{for(var De in he)X(He,De,{get:he[De],enumerable:!0})},Rt=(He,he,De,ze)=>{if(he&&typeof he=="object"||typeof he=="function")for(let Le of Ke(he))!pt.call(He,Le)&&Le!==De&&X(He,Le,{get:()=>he[Le],enumerable:!(ze=re(he,Le))||ze.enumerable});return He},xe=(He,he,De)=>(De=He!=null?nt(st(He)):{},Rt(he||!He||!He.__esModule?X(De,"default",{value:He,enumerable:!0}):De,He)),yt=He=>Rt(X({},"__esModule",{value:!0}),He)}),"../../../node_modules/.pnpm/@storybook+react@9.0.15_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@9.0.15_@t_4f19baafbfa87aa93afe352c3e49b5cc/node_modules/@storybook/react/dist/entry-preview-argtypes.mjs":((Nt,ue,V)=>{V.r(ue),V.d(ue,{argTypesEnhancers:()=>Zr,parameters:()=>pr});var nt=V("../../../node_modules/.pnpm/@storybook+react@9.0.15_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@9.0.15_@t_4f19baafbfa87aa93afe352c3e49b5cc/node_modules/@storybook/react/dist/chunk-CKO6TW2F.mjs"),X=V("../../../node_modules/.pnpm/@storybook+react@9.0.15_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@9.0.15_@t_4f19baafbfa87aa93afe352c3e49b5cc/node_modules/@storybook/react/dist/chunk-XP5HYGXS.mjs"),re=V("../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/docs-tools/index.js"),Ke=(0,X.P$)({"../../node_modules/estraverse/estraverse.js"(e){(function t(o){var i,a,h,b,g,k;function A(O){var S={},j,Q;for(j in O)O.hasOwnProperty(j)&&(Q=O[j],typeof Q=="object"&&Q!==null?S[j]=A(Q):S[j]=Q);return S}function E(O,S){var j,Q,_e,Xe;for(Q=O.length,_e=0;Q;)j=Q>>>1,Xe=_e+j,S(O[Xe])?Q=j:(_e=Xe+1,Q-=j+1);return _e}i={AssignmentExpression:"AssignmentExpression",AssignmentPattern:"AssignmentPattern",ArrayExpression:"ArrayExpression",ArrayPattern:"ArrayPattern",ArrowFunctionExpression:"ArrowFunctionExpression",AwaitExpression:"AwaitExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ChainExpression:"ChainExpression",ClassBody:"ClassBody",ClassDeclaration:"ClassDeclaration",ClassExpression:"ClassExpression",ComprehensionBlock:"ComprehensionBlock",ComprehensionExpression:"ComprehensionExpression",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DebuggerStatement:"DebuggerStatement",DirectiveStatement:"DirectiveStatement",DoWhileStatement:"DoWhileStatement",EmptyStatement:"EmptyStatement",ExportAllDeclaration:"ExportAllDeclaration",ExportDefaultDeclaration:"ExportDefaultDeclaration",ExportNamedDeclaration:"ExportNamedDeclaration",ExportSpecifier:"ExportSpecifier",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForInStatement:"ForInStatement",ForOfStatement:"ForOfStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",GeneratorExpression:"GeneratorExpression",Identifier:"Identifier",IfStatement:"IfStatement",ImportExpression:"ImportExpression",ImportDeclaration:"ImportDeclaration",ImportDefaultSpecifier:"ImportDefaultSpecifier",ImportNamespaceSpecifier:"ImportNamespaceSpecifier",ImportSpecifier:"ImportSpecifier",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",MetaProperty:"MetaProperty",MethodDefinition:"MethodDefinition",ModuleSpecifier:"ModuleSpecifier",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",ObjectPattern:"ObjectPattern",PrivateIdentifier:"PrivateIdentifier",Program:"Program",Property:"Property",PropertyDefinition:"PropertyDefinition",RestElement:"RestElement",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SpreadElement:"SpreadElement",Super:"Super",SwitchStatement:"SwitchStatement",SwitchCase:"SwitchCase",TaggedTemplateExpression:"TaggedTemplateExpression",TemplateElement:"TemplateElement",TemplateLiteral:"TemplateLiteral",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement",YieldExpression:"YieldExpression"},h={AssignmentExpression:["left","right"],AssignmentPattern:["left","right"],ArrayExpression:["elements"],ArrayPattern:["elements"],ArrowFunctionExpression:["params","body"],AwaitExpression:["argument"],BlockStatement:["body"],BinaryExpression:["left","right"],BreakStatement:["label"],CallExpression:["callee","arguments"],CatchClause:["param","body"],ChainExpression:["expression"],ClassBody:["body"],ClassDeclaration:["id","superClass","body"],ClassExpression:["id","superClass","body"],ComprehensionBlock:["left","right"],ComprehensionExpression:["blocks","filter","body"],ConditionalExpression:["test","consequent","alternate"],ContinueStatement:["label"],DebuggerStatement:[],DirectiveStatement:[],DoWhileStatement:["body","test"],EmptyStatement:[],ExportAllDeclaration:["source"],ExportDefaultDeclaration:["declaration"],ExportNamedDeclaration:["declaration","specifiers","source"],ExportSpecifier:["exported","local"],ExpressionStatement:["expression"],ForStatement:["init","test","update","body"],ForInStatement:["left","right","body"],ForOfStatement:["left","right","body"],FunctionDeclaration:["id","params","body"],FunctionExpression:["id","params","body"],GeneratorExpression:["blocks","filter","body"],Identifier:[],IfStatement:["test","consequent","alternate"],ImportExpression:["source"],ImportDeclaration:["specifiers","source"],ImportDefaultSpecifier:["local"],ImportNamespaceSpecifier:["local"],ImportSpecifier:["imported","local"],Literal:[],LabeledStatement:["label","body"],LogicalExpression:["left","right"],MemberExpression:["object","property"],MetaProperty:["meta","property"],MethodDefinition:["key","value"],ModuleSpecifier:[],NewExpression:["callee","arguments"],ObjectExpression:["properties"],ObjectPattern:["properties"],PrivateIdentifier:[],Program:["body"],Property:["key","value"],PropertyDefinition:["key","value"],RestElement:["argument"],ReturnStatement:["argument"],SequenceExpression:["expressions"],SpreadElement:["argument"],Super:[],SwitchStatement:["discriminant","cases"],SwitchCase:["test","consequent"],TaggedTemplateExpression:["tag","quasi"],TemplateElement:[],TemplateLiteral:["quasis","expressions"],ThisExpression:[],ThrowStatement:["argument"],TryStatement:["block","handler","finalizer"],UnaryExpression:["argument"],UpdateExpression:["argument"],VariableDeclaration:["declarations"],VariableDeclarator:["id","init"],WhileStatement:["test","body"],WithStatement:["object","body"],YieldExpression:["argument"]},b={},g={},k={},a={Break:b,Skip:g,Remove:k};function U(O,S){this.parent=O,this.key=S}U.prototype.replace=function(O){this.parent[this.key]=O},U.prototype.remove=function(){return Array.isArray(this.parent)?(this.parent.splice(this.key,1),!0):(this.replace(null),!1)};function z(O,S,j,Q){this.node=O,this.path=S,this.wrap=j,this.ref=Q}function L(){}L.prototype.path=function(){var O,S,j,Q,_e,Xe;function qe(Ye,ft){if(Array.isArray(ft))for(j=0,Q=ft.length;j<Q;++j)Ye.push(ft[j]);else Ye.push(ft)}if(!this.__current.path)return null;for(_e=[],O=2,S=this.__leavelist.length;O<S;++O)Xe=this.__leavelist[O],qe(_e,Xe.path);return qe(_e,this.__current.path),_e},L.prototype.type=function(){var O=this.current();return O.type||this.__current.wrap},L.prototype.parents=function(){var O,S,j;for(j=[],O=1,S=this.__leavelist.length;O<S;++O)j.push(this.__leavelist[O].node);return j},L.prototype.current=function(){return this.__current.node},L.prototype.__execute=function(O,S){var j,Q;return Q=void 0,j=this.__current,this.__current=S,this.__state=null,O&&(Q=O.call(this,S.node,this.__leavelist[this.__leavelist.length-1].node)),this.__current=j,Q},L.prototype.notify=function(O){this.__state=O},L.prototype.skip=function(){this.notify(g)},L.prototype.break=function(){this.notify(b)},L.prototype.remove=function(){this.notify(k)},L.prototype.__initialize=function(O,S){this.visitor=S,this.root=O,this.__worklist=[],this.__leavelist=[],this.__current=null,this.__state=null,this.__fallback=null,S.fallback==="iteration"?this.__fallback=Object.keys:typeof S.fallback=="function"&&(this.__fallback=S.fallback),this.__keys=h,S.keys&&(this.__keys=Object.assign(Object.create(this.__keys),S.keys))};function x(O){return O==null?!1:typeof O=="object"&&typeof O.type=="string"}function F(O,S){return(O===i.ObjectExpression||O===i.ObjectPattern)&&S==="properties"}function le(O,S){for(var j=O.length-1;j>=0;--j)if(O[j].node===S)return!0;return!1}L.prototype.traverse=function(O,S){var j,Q,_e,Xe,qe,Ye,ft,Mt,oo,ro,so,Xt;for(this.__initialize(O,S),Xt={},j=this.__worklist,Q=this.__leavelist,j.push(new z(O,null,null,null)),Q.push(new z(null,null,null,null));j.length;){if(_e=j.pop(),_e===Xt){if(_e=Q.pop(),Ye=this.__execute(S.leave,_e),this.__state===b||Ye===b)return;continue}if(_e.node){if(Ye=this.__execute(S.enter,_e),this.__state===b||Ye===b)return;if(j.push(Xt),Q.push(_e),this.__state===g||Ye===g)continue;if(Xe=_e.node,qe=Xe.type||_e.wrap,ro=this.__keys[qe],!ro)if(this.__fallback)ro=this.__fallback(Xe);else throw new Error("Unknown node type "+qe+".");for(Mt=ro.length;(Mt-=1)>=0;)if(ft=ro[Mt],so=Xe[ft],!!so){if(Array.isArray(so)){for(oo=so.length;(oo-=1)>=0;)if(so[oo]&&!le(Q,so[oo])){if(F(qe,ro[Mt]))_e=new z(so[oo],[ft,oo],"Property",null);else if(x(so[oo]))_e=new z(so[oo],[ft,oo],null,null);else continue;j.push(_e)}}else if(x(so)){if(le(Q,so))continue;j.push(new z(so,ft,null,null))}}}}},L.prototype.replace=function(O,S){var j,Q,_e,Xe,qe,Ye,ft,Mt,oo,ro,so,Xt,en;function ur(Sn){var Te,qn,Tn,dr;if(Sn.ref.remove()){for(qn=Sn.ref.key,dr=Sn.ref.parent,Te=j.length;Te--;)if(Tn=j[Te],Tn.ref&&Tn.ref.parent===dr){if(Tn.ref.key<qn)break;--Tn.ref.key}}}for(this.__initialize(O,S),so={},j=this.__worklist,Q=this.__leavelist,Xt={root:O},Ye=new z(O,null,null,new U(Xt,"root")),j.push(Ye),Q.push(Ye);j.length;){if(Ye=j.pop(),Ye===so){if(Ye=Q.pop(),qe=this.__execute(S.leave,Ye),qe!==void 0&&qe!==b&&qe!==g&&qe!==k&&Ye.ref.replace(qe),(this.__state===k||qe===k)&&ur(Ye),this.__state===b||qe===b)return Xt.root;continue}if(qe=this.__execute(S.enter,Ye),qe!==void 0&&qe!==b&&qe!==g&&qe!==k&&(Ye.ref.replace(qe),Ye.node=qe),(this.__state===k||qe===k)&&(ur(Ye),Ye.node=null),this.__state===b||qe===b)return Xt.root;if(_e=Ye.node,!!_e&&(j.push(so),Q.push(Ye),!(this.__state===g||qe===g))){if(Xe=_e.type||Ye.wrap,oo=this.__keys[Xe],!oo)if(this.__fallback)oo=this.__fallback(_e);else throw new Error("Unknown node type "+Xe+".");for(ft=oo.length;(ft-=1)>=0;)if(en=oo[ft],ro=_e[en],!!ro)if(Array.isArray(ro)){for(Mt=ro.length;(Mt-=1)>=0;)if(ro[Mt]){if(F(Xe,oo[ft]))Ye=new z(ro[Mt],[en,Mt],"Property",new U(ro,Mt));else if(x(ro[Mt]))Ye=new z(ro[Mt],[en,Mt],null,new U(ro,Mt));else continue;j.push(Ye)}}else x(ro)&&j.push(new z(ro,en,null,new U(_e,en)))}}return Xt.root};function Ae(O,S){var j=new L;return j.traverse(O,S)}function Z(O,S){var j=new L;return j.replace(O,S)}function $e(O,S){var j;return j=E(S,function(Q){return Q.range[0]>O.range[0]}),O.extendedRange=[O.range[0],O.range[1]],j!==S.length&&(O.extendedRange[1]=S[j].range[0]),j-=1,j>=0&&(O.extendedRange[0]=S[j].range[1]),O}function $(O,S,j){var Q=[],_e,Xe,qe,Ye;if(!O.range)throw new Error("attachComments needs range information");if(!j.length){if(S.length){for(qe=0,Xe=S.length;qe<Xe;qe+=1)_e=A(S[qe]),_e.extendedRange=[0,O.range[0]],Q.push(_e);O.leadingComments=Q}return O}for(qe=0,Xe=S.length;qe<Xe;qe+=1)Q.push($e(A(S[qe]),j));return Ye=0,Ae(O,{enter:function(ft){for(var Mt;Ye<Q.length&&(Mt=Q[Ye],!(Mt.extendedRange[1]>ft.range[0]));)Mt.extendedRange[1]===ft.range[0]?(ft.leadingComments||(ft.leadingComments=[]),ft.leadingComments.push(Mt),Q.splice(Ye,1)):Ye+=1;if(Ye===Q.length)return a.Break;if(Q[Ye].extendedRange[0]>ft.range[1])return a.Skip}}),Ye=0,Ae(O,{leave:function(ft){for(var Mt;Ye<Q.length&&(Mt=Q[Ye],!(ft.range[1]<Mt.extendedRange[0]));)ft.range[1]===Mt.extendedRange[0]?(ft.trailingComments||(ft.trailingComments=[]),ft.trailingComments.push(Mt),Q.splice(Ye,1)):Ye+=1;if(Ye===Q.length)return a.Break;if(Q[Ye].extendedRange[0]>ft.range[1])return a.Skip}}),O}return o.Syntax=i,o.traverse=Ae,o.replace=Z,o.attachComments=$,o.VisitorKeys=h,o.VisitorOption=a,o.Controller=L,o.cloneEnvironment=function(){return t({})},o})(e)}}),st=(0,X.P$)({"../../node_modules/esutils/lib/ast.js"(e,t){(function(){function o(k){if(k==null)return!1;switch(k.type){case"ArrayExpression":case"AssignmentExpression":case"BinaryExpression":case"CallExpression":case"ConditionalExpression":case"FunctionExpression":case"Identifier":case"Literal":case"LogicalExpression":case"MemberExpression":case"NewExpression":case"ObjectExpression":case"SequenceExpression":case"ThisExpression":case"UnaryExpression":case"UpdateExpression":return!0}return!1}function i(k){if(k==null)return!1;switch(k.type){case"DoWhileStatement":case"ForInStatement":case"ForStatement":case"WhileStatement":return!0}return!1}function a(k){if(k==null)return!1;switch(k.type){case"BlockStatement":case"BreakStatement":case"ContinueStatement":case"DebuggerStatement":case"DoWhileStatement":case"EmptyStatement":case"ExpressionStatement":case"ForInStatement":case"ForStatement":case"IfStatement":case"LabeledStatement":case"ReturnStatement":case"SwitchStatement":case"ThrowStatement":case"TryStatement":case"VariableDeclaration":case"WhileStatement":case"WithStatement":return!0}return!1}function h(k){return a(k)||k!=null&&k.type==="FunctionDeclaration"}function b(k){switch(k.type){case"IfStatement":return k.alternate!=null?k.alternate:k.consequent;case"LabeledStatement":case"ForStatement":case"ForInStatement":case"WhileStatement":case"WithStatement":return k.body}return null}function g(k){var A;if(k.type!=="IfStatement"||k.alternate==null)return!1;A=k.consequent;do{if(A.type==="IfStatement"&&A.alternate==null)return!0;A=b(A)}while(A);return!1}t.exports={isExpression:o,isStatement:a,isIterationStatement:i,isSourceElement:h,isProblematicIfStatement:g,trailingStatement:b}})()}}),pt=(0,X.P$)({"../../node_modules/esutils/lib/code.js"(e,t){(function(){var o,i,a,h,b,g;i={NonAsciiIdentifierStart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,NonAsciiIdentifierPart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/},o={NonAsciiIdentifierStart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,NonAsciiIdentifierPart:/[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/};function k(Z){return 48<=Z&&Z<=57}function A(Z){return 48<=Z&&Z<=57||97<=Z&&Z<=102||65<=Z&&Z<=70}function E(Z){return Z>=48&&Z<=55}a=[5760,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279];function U(Z){return Z===32||Z===9||Z===11||Z===12||Z===160||Z>=5760&&a.indexOf(Z)>=0}function z(Z){return Z===10||Z===13||Z===8232||Z===8233}function L(Z){if(Z<=65535)return String.fromCharCode(Z);var $e=String.fromCharCode(Math.floor((Z-65536)/1024)+55296),$=String.fromCharCode((Z-65536)%1024+56320);return $e+$}for(h=new Array(128),g=0;g<128;++g)h[g]=g>=97&&g<=122||g>=65&&g<=90||g===36||g===95;for(b=new Array(128),g=0;g<128;++g)b[g]=g>=97&&g<=122||g>=65&&g<=90||g>=48&&g<=57||g===36||g===95;function x(Z){return Z<128?h[Z]:i.NonAsciiIdentifierStart.test(L(Z))}function F(Z){return Z<128?b[Z]:i.NonAsciiIdentifierPart.test(L(Z))}function le(Z){return Z<128?h[Z]:o.NonAsciiIdentifierStart.test(L(Z))}function Ae(Z){return Z<128?b[Z]:o.NonAsciiIdentifierPart.test(L(Z))}t.exports={isDecimalDigit:k,isHexDigit:A,isOctalDigit:E,isWhiteSpace:U,isLineTerminator:z,isIdentifierStartES5:x,isIdentifierPartES5:F,isIdentifierStartES6:le,isIdentifierPartES6:Ae}})()}}),rt=(0,X.P$)({"../../node_modules/esutils/lib/keyword.js"(e,t){(function(){var o=pt();function i(x){switch(x){case"implements":case"interface":case"package":case"private":case"protected":case"public":case"static":case"let":return!0;default:return!1}}function a(x,F){return!F&&x==="yield"?!1:h(x,F)}function h(x,F){if(F&&i(x))return!0;switch(x.length){case 2:return x==="if"||x==="in"||x==="do";case 3:return x==="var"||x==="for"||x==="new"||x==="try";case 4:return x==="this"||x==="else"||x==="case"||x==="void"||x==="with"||x==="enum";case 5:return x==="while"||x==="break"||x==="catch"||x==="throw"||x==="const"||x==="yield"||x==="class"||x==="super";case 6:return x==="return"||x==="typeof"||x==="delete"||x==="switch"||x==="export"||x==="import";case 7:return x==="default"||x==="finally"||x==="extends";case 8:return x==="function"||x==="continue"||x==="debugger";case 10:return x==="instanceof";default:return!1}}function b(x,F){return x==="null"||x==="true"||x==="false"||a(x,F)}function g(x,F){return x==="null"||x==="true"||x==="false"||h(x,F)}function k(x){return x==="eval"||x==="arguments"}function A(x){var F,le,Ae;if(x.length===0||(Ae=x.charCodeAt(0),!o.isIdentifierStartES5(Ae)))return!1;for(F=1,le=x.length;F<le;++F)if(Ae=x.charCodeAt(F),!o.isIdentifierPartES5(Ae))return!1;return!0}function E(x,F){return(x-55296)*1024+(F-56320)+65536}function U(x){var F,le,Ae,Z,$e;if(x.length===0)return!1;for($e=o.isIdentifierStartES6,F=0,le=x.length;F<le;++F){if(Ae=x.charCodeAt(F),55296<=Ae&&Ae<=56319){if(++F,F>=le||(Z=x.charCodeAt(F),!(56320<=Z&&Z<=57343)))return!1;Ae=E(Ae,Z)}if(!$e(Ae))return!1;$e=o.isIdentifierPartES6}return!0}function z(x,F){return A(x)&&!b(x,F)}function L(x,F){return U(x)&&!g(x,F)}t.exports={isKeywordES5:a,isKeywordES6:h,isReservedWordES5:b,isReservedWordES6:g,isRestrictedWord:k,isIdentifierNameES5:A,isIdentifierNameES6:U,isIdentifierES5:z,isIdentifierES6:L}})()}}),Et=(0,X.P$)({"../../node_modules/esutils/lib/utils.js"(e){(function(){e.ast=st(),e.code=pt(),e.keyword=rt()})()}}),p=(0,X.P$)({"../../node_modules/escodegen/node_modules/source-map/lib/base64.js"(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");e.encode=function(o){if(0<=o&&o<t.length)return t[o];throw new TypeError("Must be between 0 and 63: "+o)},e.decode=function(o){var i=65,a=90,h=97,b=122,g=48,k=57,A=43,E=47,U=26,z=52;return i<=o&&o<=a?o-i:h<=o&&o<=b?o-h+U:g<=o&&o<=k?o-g+z:o==A?62:o==E?63:-1}}}),Rt=(0,X.P$)({"../../node_modules/escodegen/node_modules/source-map/lib/base64-vlq.js"(e){var t=p(),o=5,i=1<<o,a=i-1,h=i;function b(k){return k<0?(-k<<1)+1:(k<<1)+0}function g(k){var A=(k&1)===1,E=k>>1;return A?-E:E}e.encode=function(k){var A="",E,U=b(k);do E=U&a,U>>>=o,U>0&&(E|=h),A+=t.encode(E);while(U>0);return A},e.decode=function(k,A,E){var U=k.length,z=0,L=0,x,F;do{if(A>=U)throw new Error("Expected more digits in base 64 VLQ value.");if(F=t.decode(k.charCodeAt(A++)),F===-1)throw new Error("Invalid base64 digit: "+k.charAt(A-1));x=!!(F&h),F&=a,z=z+(F<<L),L+=o}while(x);E.value=g(z),E.rest=A}}}),xe=(0,X.P$)({"../../node_modules/escodegen/node_modules/source-map/lib/util.js"(e){function t($,O,S){if(O in $)return $[O];if(arguments.length===3)return S;throw new Error('"'+O+'" is a required argument.')}e.getArg=t;var o=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,i=/^data:.+\,.+$/;function a($){var O=$.match(o);return O?{scheme:O[1],auth:O[2],host:O[3],port:O[4],path:O[5]}:null}e.urlParse=a;function h($){var O="";return $.scheme&&(O+=$.scheme+":"),O+="//",$.auth&&(O+=$.auth+"@"),$.host&&(O+=$.host),$.port&&(O+=":"+$.port),$.path&&(O+=$.path),O}e.urlGenerate=h;function b($){var O=$,S=a($);if(S){if(!S.path)return $;O=S.path}for(var j=e.isAbsolute(O),Q=O.split(/\/+/),_e,Xe=0,qe=Q.length-1;qe>=0;qe--)_e=Q[qe],_e==="."?Q.splice(qe,1):_e===".."?Xe++:Xe>0&&(_e===""?(Q.splice(qe+1,Xe),Xe=0):(Q.splice(qe,2),Xe--));return O=Q.join("/"),O===""&&(O=j?"/":"."),S?(S.path=O,h(S)):O}e.normalize=b;function g($,O){$===""&&($="."),O===""&&(O=".");var S=a(O),j=a($);if(j&&($=j.path||"/"),S&&!S.scheme)return j&&(S.scheme=j.scheme),h(S);if(S||O.match(i))return O;if(j&&!j.host&&!j.path)return j.host=O,h(j);var Q=O.charAt(0)==="/"?O:b($.replace(/\/+$/,"")+"/"+O);return j?(j.path=Q,h(j)):Q}e.join=g,e.isAbsolute=function($){return $.charAt(0)==="/"||o.test($)};function k($,O){$===""&&($="."),$=$.replace(/\/$/,"");for(var S=0;O.indexOf($+"/")!==0;){var j=$.lastIndexOf("/");if(j<0||($=$.slice(0,j),$.match(/^([^\/]+:\/)?\/*$/)))return O;++S}return Array(S+1).join("../")+O.substr($.length+1)}e.relative=k;var A=(function(){var $=Object.create(null);return!("__proto__"in $)})();function E($){return $}function U($){return L($)?"$"+$:$}e.toSetString=A?E:U;function z($){return L($)?$.slice(1):$}e.fromSetString=A?E:z;function L($){if(!$)return!1;var O=$.length;if(O<9||$.charCodeAt(O-1)!==95||$.charCodeAt(O-2)!==95||$.charCodeAt(O-3)!==111||$.charCodeAt(O-4)!==116||$.charCodeAt(O-5)!==111||$.charCodeAt(O-6)!==114||$.charCodeAt(O-7)!==112||$.charCodeAt(O-8)!==95||$.charCodeAt(O-9)!==95)return!1;for(var S=O-10;S>=0;S--)if($.charCodeAt(S)!==36)return!1;return!0}function x($,O,S){var j=le($.source,O.source);return j!==0||(j=$.originalLine-O.originalLine,j!==0)||(j=$.originalColumn-O.originalColumn,j!==0||S)||(j=$.generatedColumn-O.generatedColumn,j!==0)||(j=$.generatedLine-O.generatedLine,j!==0)?j:le($.name,O.name)}e.compareByOriginalPositions=x;function F($,O,S){var j=$.generatedLine-O.generatedLine;return j!==0||(j=$.generatedColumn-O.generatedColumn,j!==0||S)||(j=le($.source,O.source),j!==0)||(j=$.originalLine-O.originalLine,j!==0)||(j=$.originalColumn-O.originalColumn,j!==0)?j:le($.name,O.name)}e.compareByGeneratedPositionsDeflated=F;function le($,O){return $===O?0:$===null?1:O===null?-1:$>O?1:-1}function Ae($,O){var S=$.generatedLine-O.generatedLine;return S!==0||(S=$.generatedColumn-O.generatedColumn,S!==0)||(S=le($.source,O.source),S!==0)||(S=$.originalLine-O.originalLine,S!==0)||(S=$.originalColumn-O.originalColumn,S!==0)?S:le($.name,O.name)}e.compareByGeneratedPositionsInflated=Ae;function Z($){return JSON.parse($.replace(/^\)]}'[^\n]*\n/,""))}e.parseSourceMapInput=Z;function $e($,O,S){if(O=O||"",$&&($[$.length-1]!=="/"&&O[0]!=="/"&&($+="/"),O=$+O),S){var j=a(S);if(!j)throw new Error("sourceMapURL could not be parsed");if(j.path){var Q=j.path.lastIndexOf("/");Q>=0&&(j.path=j.path.substring(0,Q+1))}O=g(h(j),O)}return b(O)}e.computeSourceURL=$e}}),yt=(0,X.P$)({"../../node_modules/escodegen/node_modules/source-map/lib/array-set.js"(e){var t=xe(),o=Object.prototype.hasOwnProperty,i=typeof Map<"u";function a(){this._array=[],this._set=i?new Map:Object.create(null)}a.fromArray=function(h,b){for(var g=new a,k=0,A=h.length;k<A;k++)g.add(h[k],b);return g},a.prototype.size=function(){return i?this._set.size:Object.getOwnPropertyNames(this._set).length},a.prototype.add=function(h,b){var g=i?h:t.toSetString(h),k=i?this.has(h):o.call(this._set,g),A=this._array.length;(!k||b)&&this._array.push(h),k||(i?this._set.set(h,A):this._set[g]=A)},a.prototype.has=function(h){if(i)return this._set.has(h);var b=t.toSetString(h);return o.call(this._set,b)},a.prototype.indexOf=function(h){if(i){var b=this._set.get(h);if(b>=0)return b}else{var g=t.toSetString(h);if(o.call(this._set,g))return this._set[g]}throw new Error('"'+h+'" is not in the set.')},a.prototype.at=function(h){if(h>=0&&h<this._array.length)return this._array[h];throw new Error("No element indexed by "+h)},a.prototype.toArray=function(){return this._array.slice()},e.ArraySet=a}}),He=(0,X.P$)({"../../node_modules/escodegen/node_modules/source-map/lib/mapping-list.js"(e){var t=xe();function o(a,h){var b=a.generatedLine,g=h.generatedLine,k=a.generatedColumn,A=h.generatedColumn;return g>b||g==b&&A>=k||t.compareByGeneratedPositionsInflated(a,h)<=0}function i(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}i.prototype.unsortedForEach=function(a,h){this._array.forEach(a,h)},i.prototype.add=function(a){o(this._last,a)?(this._last=a,this._array.push(a)):(this._sorted=!1,this._array.push(a))},i.prototype.toArray=function(){return this._sorted||(this._array.sort(t.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},e.MappingList=i}}),he=(0,X.P$)({"../../node_modules/escodegen/node_modules/source-map/lib/source-map-generator.js"(e){var t=Rt(),o=xe(),i=yt().ArraySet,a=He().MappingList;function h(b){b||(b={}),this._file=o.getArg(b,"file",null),this._sourceRoot=o.getArg(b,"sourceRoot",null),this._skipValidation=o.getArg(b,"skipValidation",!1),this._sources=new i,this._names=new i,this._mappings=new a,this._sourcesContents=null}h.prototype._version=3,h.fromSourceMap=function(b){var g=b.sourceRoot,k=new h({file:b.file,sourceRoot:g});return b.eachMapping(function(A){var E={generated:{line:A.generatedLine,column:A.generatedColumn}};A.source!=null&&(E.source=A.source,g!=null&&(E.source=o.relative(g,E.source)),E.original={line:A.originalLine,column:A.originalColumn},A.name!=null&&(E.name=A.name)),k.addMapping(E)}),b.sources.forEach(function(A){var E=A;g!==null&&(E=o.relative(g,A)),k._sources.has(E)||k._sources.add(E);var U=b.sourceContentFor(A);U!=null&&k.setSourceContent(A,U)}),k},h.prototype.addMapping=function(b){var g=o.getArg(b,"generated"),k=o.getArg(b,"original",null),A=o.getArg(b,"source",null),E=o.getArg(b,"name",null);this._skipValidation||this._validateMapping(g,k,A,E),A!=null&&(A=String(A),this._sources.has(A)||this._sources.add(A)),E!=null&&(E=String(E),this._names.has(E)||this._names.add(E)),this._mappings.add({generatedLine:g.line,generatedColumn:g.column,originalLine:k!=null&&k.line,originalColumn:k!=null&&k.column,source:A,name:E})},h.prototype.setSourceContent=function(b,g){var k=b;this._sourceRoot!=null&&(k=o.relative(this._sourceRoot,k)),g!=null?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[o.toSetString(k)]=g):this._sourcesContents&&(delete this._sourcesContents[o.toSetString(k)],Object.keys(this._sourcesContents).length===0&&(this._sourcesContents=null))},h.prototype.applySourceMap=function(b,g,k){var A=g;if(g==null){if(b.file==null)throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);A=b.file}var E=this._sourceRoot;E!=null&&(A=o.relative(E,A));var U=new i,z=new i;this._mappings.unsortedForEach(function(L){if(L.source===A&&L.originalLine!=null){var x=b.originalPositionFor({line:L.originalLine,column:L.originalColumn});x.source!=null&&(L.source=x.source,k!=null&&(L.source=o.join(k,L.source)),E!=null&&(L.source=o.relative(E,L.source)),L.originalLine=x.line,L.originalColumn=x.column,x.name!=null&&(L.name=x.name))}var F=L.source;F!=null&&!U.has(F)&&U.add(F);var le=L.name;le!=null&&!z.has(le)&&z.add(le)},this),this._sources=U,this._names=z,b.sources.forEach(function(L){var x=b.sourceContentFor(L);x!=null&&(k!=null&&(L=o.join(k,L)),E!=null&&(L=o.relative(E,L)),this.setSourceContent(L,x))},this)},h.prototype._validateMapping=function(b,g,k,A){if(g&&typeof g.line!="number"&&typeof g.column!="number")throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if(!(b&&"line"in b&&"column"in b&&b.line>0&&b.column>=0&&!g&&!k&&!A)){if(b&&"line"in b&&"column"in b&&g&&"line"in g&&"column"in g&&b.line>0&&b.column>=0&&g.line>0&&g.column>=0&&k)return;throw new Error("Invalid mapping: "+JSON.stringify({generated:b,source:k,original:g,name:A}))}},h.prototype._serializeMappings=function(){for(var b=0,g=1,k=0,A=0,E=0,U=0,z="",L,x,F,le,Ae=this._mappings.toArray(),Z=0,$e=Ae.length;Z<$e;Z++){if(x=Ae[Z],L="",x.generatedLine!==g)for(b=0;x.generatedLine!==g;)L+=";",g++;else if(Z>0){if(!o.compareByGeneratedPositionsInflated(x,Ae[Z-1]))continue;L+=","}L+=t.encode(x.generatedColumn-b),b=x.generatedColumn,x.source!=null&&(le=this._sources.indexOf(x.source),L+=t.encode(le-U),U=le,L+=t.encode(x.originalLine-1-A),A=x.originalLine-1,L+=t.encode(x.originalColumn-k),k=x.originalColumn,x.name!=null&&(F=this._names.indexOf(x.name),L+=t.encode(F-E),E=F)),z+=L}return z},h.prototype._generateSourcesContent=function(b,g){return b.map(function(k){if(!this._sourcesContents)return null;g!=null&&(k=o.relative(g,k));var A=o.toSetString(k);return Object.prototype.hasOwnProperty.call(this._sourcesContents,A)?this._sourcesContents[A]:null},this)},h.prototype.toJSON=function(){var b={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return this._file!=null&&(b.file=this._file),this._sourceRoot!=null&&(b.sourceRoot=this._sourceRoot),this._sourcesContents&&(b.sourcesContent=this._generateSourcesContent(b.sources,b.sourceRoot)),b},h.prototype.toString=function(){return JSON.stringify(this.toJSON())},e.SourceMapGenerator=h}}),De=(0,X.P$)({"../../node_modules/escodegen/node_modules/source-map/lib/binary-search.js"(e){e.GREATEST_LOWER_BOUND=1,e.LEAST_UPPER_BOUND=2;function t(o,i,a,h,b,g){var k=Math.floor((i-o)/2)+o,A=b(a,h[k],!0);return A===0?k:A>0?i-k>1?t(k,i,a,h,b,g):g==e.LEAST_UPPER_BOUND?i<h.length?i:-1:k:k-o>1?t(o,k,a,h,b,g):g==e.LEAST_UPPER_BOUND?k:o<0?-1:o}e.search=function(o,i,a,h){if(i.length===0)return-1;var b=t(-1,i.length,o,i,a,h||e.GREATEST_LOWER_BOUND);if(b<0)return-1;for(;b-1>=0&&a(i[b],i[b-1],!0)===0;)--b;return b}}}),ze=(0,X.P$)({"../../node_modules/escodegen/node_modules/source-map/lib/quick-sort.js"(e){function t(a,h,b){var g=a[h];a[h]=a[b],a[b]=g}function o(a,h){return Math.round(a+Math.random()*(h-a))}function i(a,h,b,g){if(b<g){var k=o(b,g),A=b-1;t(a,k,g);for(var E=a[g],U=b;U<g;U++)h(a[U],E)<=0&&(A+=1,t(a,A,U));t(a,A+1,U);var z=A+1;i(a,h,b,z-1),i(a,h,z+1,g)}}e.quickSort=function(a,h){i(a,h,0,a.length-1)}}}),Le=(0,X.P$)({"../../node_modules/escodegen/node_modules/source-map/lib/source-map-consumer.js"(e){var t=xe(),o=De(),i=yt().ArraySet,a=Rt(),h=ze().quickSort;function b(E,U){var z=E;return typeof E=="string"&&(z=t.parseSourceMapInput(E)),z.sections!=null?new A(z,U):new g(z,U)}b.fromSourceMap=function(E,U){return g.fromSourceMap(E,U)},b.prototype._version=3,b.prototype.__generatedMappings=null,Object.defineProperty(b.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),b.prototype.__originalMappings=null,Object.defineProperty(b.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),b.prototype._charIsMappingSeparator=function(E,U){var z=E.charAt(U);return z===";"||z===","},b.prototype._parseMappings=function(E,U){throw new Error("Subclasses must implement _parseMappings")},b.GENERATED_ORDER=1,b.ORIGINAL_ORDER=2,b.GREATEST_LOWER_BOUND=1,b.LEAST_UPPER_BOUND=2,b.prototype.eachMapping=function(E,U,z){var L=U||null,x=z||b.GENERATED_ORDER,F;switch(x){case b.GENERATED_ORDER:F=this._generatedMappings;break;case b.ORIGINAL_ORDER:F=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var le=this.sourceRoot;F.map(function(Ae){var Z=Ae.source===null?null:this._sources.at(Ae.source);return Z=t.computeSourceURL(le,Z,this._sourceMapURL),{source:Z,generatedLine:Ae.generatedLine,generatedColumn:Ae.generatedColumn,originalLine:Ae.originalLine,originalColumn:Ae.originalColumn,name:Ae.name===null?null:this._names.at(Ae.name)}},this).forEach(E,L)},b.prototype.allGeneratedPositionsFor=function(E){var U=t.getArg(E,"line"),z={source:t.getArg(E,"source"),originalLine:U,originalColumn:t.getArg(E,"column",0)};if(z.source=this._findSourceIndex(z.source),z.source<0)return[];var L=[],x=this._findMapping(z,this._originalMappings,"originalLine","originalColumn",t.compareByOriginalPositions,o.LEAST_UPPER_BOUND);if(x>=0){var F=this._originalMappings[x];if(E.column===void 0)for(var le=F.originalLine;F&&F.originalLine===le;)L.push({line:t.getArg(F,"generatedLine",null),column:t.getArg(F,"generatedColumn",null),lastColumn:t.getArg(F,"lastGeneratedColumn",null)}),F=this._originalMappings[++x];else for(var Ae=F.originalColumn;F&&F.originalLine===U&&F.originalColumn==Ae;)L.push({line:t.getArg(F,"generatedLine",null),column:t.getArg(F,"generatedColumn",null),lastColumn:t.getArg(F,"lastGeneratedColumn",null)}),F=this._originalMappings[++x]}return L},e.SourceMapConsumer=b;function g(E,U){var z=E;typeof E=="string"&&(z=t.parseSourceMapInput(E));var L=t.getArg(z,"version"),x=t.getArg(z,"sources"),F=t.getArg(z,"names",[]),le=t.getArg(z,"sourceRoot",null),Ae=t.getArg(z,"sourcesContent",null),Z=t.getArg(z,"mappings"),$e=t.getArg(z,"file",null);if(L!=this._version)throw new Error("Unsupported version: "+L);le&&(le=t.normalize(le)),x=x.map(String).map(t.normalize).map(function($){return le&&t.isAbsolute(le)&&t.isAbsolute($)?t.relative(le,$):$}),this._names=i.fromArray(F.map(String),!0),this._sources=i.fromArray(x,!0),this._absoluteSources=this._sources.toArray().map(function($){return t.computeSourceURL(le,$,U)}),this.sourceRoot=le,this.sourcesContent=Ae,this._mappings=Z,this._sourceMapURL=U,this.file=$e}g.prototype=Object.create(b.prototype),g.prototype.consumer=b,g.prototype._findSourceIndex=function(E){var U=E;if(this.sourceRoot!=null&&(U=t.relative(this.sourceRoot,U)),this._sources.has(U))return this._sources.indexOf(U);var z;for(z=0;z<this._absoluteSources.length;++z)if(this._absoluteSources[z]==E)return z;return-1},g.fromSourceMap=function(E,U){var z=Object.create(g.prototype),L=z._names=i.fromArray(E._names.toArray(),!0),x=z._sources=i.fromArray(E._sources.toArray(),!0);z.sourceRoot=E._sourceRoot,z.sourcesContent=E._generateSourcesContent(z._sources.toArray(),z.sourceRoot),z.file=E._file,z._sourceMapURL=U,z._absoluteSources=z._sources.toArray().map(function(S){return t.computeSourceURL(z.sourceRoot,S,U)});for(var F=E._mappings.toArray().slice(),le=z.__generatedMappings=[],Ae=z.__originalMappings=[],Z=0,$e=F.length;Z<$e;Z++){var $=F[Z],O=new k;O.generatedLine=$.generatedLine,O.generatedColumn=$.generatedColumn,$.source&&(O.source=x.indexOf($.source),O.originalLine=$.originalLine,O.originalColumn=$.originalColumn,$.name&&(O.name=L.indexOf($.name)),Ae.push(O)),le.push(O)}return h(z.__originalMappings,t.compareByOriginalPositions),z},g.prototype._version=3,Object.defineProperty(g.prototype,"sources",{get:function(){return this._absoluteSources.slice()}});function k(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}g.prototype._parseMappings=function(E,U){for(var z=1,L=0,x=0,F=0,le=0,Ae=0,Z=E.length,$e=0,$={},O={},S=[],j=[],Q,_e,Xe,qe,Ye;$e<Z;)if(E.charAt($e)===";")z++,$e++,L=0;else if(E.charAt($e)===",")$e++;else{for(Q=new k,Q.generatedLine=z,qe=$e;qe<Z&&!this._charIsMappingSeparator(E,qe);qe++);if(_e=E.slice($e,qe),Xe=$[_e],Xe)$e+=_e.length;else{for(Xe=[];$e<qe;)a.decode(E,$e,O),Ye=O.value,$e=O.rest,Xe.push(Ye);if(Xe.length===2)throw new Error("Found a source, but no line and column");if(Xe.length===3)throw new Error("Found a source and line, but no column");$[_e]=Xe}Q.generatedColumn=L+Xe[0],L=Q.generatedColumn,Xe.length>1&&(Q.source=le+Xe[1],le+=Xe[1],Q.originalLine=x+Xe[2],x=Q.originalLine,Q.originalLine+=1,Q.originalColumn=F+Xe[3],F=Q.originalColumn,Xe.length>4&&(Q.name=Ae+Xe[4],Ae+=Xe[4])),j.push(Q),typeof Q.originalLine=="number"&&S.push(Q)}h(j,t.compareByGeneratedPositionsDeflated),this.__generatedMappings=j,h(S,t.compareByOriginalPositions),this.__originalMappings=S},g.prototype._findMapping=function(E,U,z,L,x,F){if(E[z]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+E[z]);if(E[L]<0)throw new TypeError("Column must be greater than or equal to 0, got "+E[L]);return o.search(E,U,x,F)},g.prototype.computeColumnSpans=function(){for(var E=0;E<this._generatedMappings.length;++E){var U=this._generatedMappings[E];if(E+1<this._generatedMappings.length){var z=this._generatedMappings[E+1];if(U.generatedLine===z.generatedLine){U.lastGeneratedColumn=z.generatedColumn-1;continue}}U.lastGeneratedColumn=1/0}},g.prototype.originalPositionFor=function(E){var U={generatedLine:t.getArg(E,"line"),generatedColumn:t.getArg(E,"column")},z=this._findMapping(U,this._generatedMappings,"generatedLine","generatedColumn",t.compareByGeneratedPositionsDeflated,t.getArg(E,"bias",b.GREATEST_LOWER_BOUND));if(z>=0){var L=this._generatedMappings[z];if(L.generatedLine===U.generatedLine){var x=t.getArg(L,"source",null);x!==null&&(x=this._sources.at(x),x=t.computeSourceURL(this.sourceRoot,x,this._sourceMapURL));var F=t.getArg(L,"name",null);return F!==null&&(F=this._names.at(F)),{source:x,line:t.getArg(L,"originalLine",null),column:t.getArg(L,"originalColumn",null),name:F}}}return{source:null,line:null,column:null,name:null}},g.prototype.hasContentsOfAllSources=function(){return this.sourcesContent?this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(E){return E==null}):!1},g.prototype.sourceContentFor=function(E,U){if(!this.sourcesContent)return null;var z=this._findSourceIndex(E);if(z>=0)return this.sourcesContent[z];var L=E;this.sourceRoot!=null&&(L=t.relative(this.sourceRoot,L));var x;if(this.sourceRoot!=null&&(x=t.urlParse(this.sourceRoot))){var F=L.replace(/^file:\/\//,"");if(x.scheme=="file"&&this._sources.has(F))return this.sourcesContent[this._sources.indexOf(F)];if((!x.path||x.path=="/")&&this._sources.has("/"+L))return this.sourcesContent[this._sources.indexOf("/"+L)]}if(U)return null;throw new Error('"'+L+'" is not in the SourceMap.')},g.prototype.generatedPositionFor=function(E){var U=t.getArg(E,"source");if(U=this._findSourceIndex(U),U<0)return{line:null,column:null,lastColumn:null};var z={source:U,originalLine:t.getArg(E,"line"),originalColumn:t.getArg(E,"column")},L=this._findMapping(z,this._originalMappings,"originalLine","originalColumn",t.compareByOriginalPositions,t.getArg(E,"bias",b.GREATEST_LOWER_BOUND));if(L>=0){var x=this._originalMappings[L];if(x.source===z.source)return{line:t.getArg(x,"generatedLine",null),column:t.getArg(x,"generatedColumn",null),lastColumn:t.getArg(x,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},e.BasicSourceMapConsumer=g;function A(E,U){var z=E;typeof E=="string"&&(z=t.parseSourceMapInput(E));var L=t.getArg(z,"version"),x=t.getArg(z,"sections");if(L!=this._version)throw new Error("Unsupported version: "+L);this._sources=new i,this._names=new i;var F={line:-1,column:0};this._sections=x.map(function(le){if(le.url)throw new Error("Support for url field in sections not implemented.");var Ae=t.getArg(le,"offset"),Z=t.getArg(Ae,"line"),$e=t.getArg(Ae,"column");if(Z<F.line||Z===F.line&&$e<F.column)throw new Error("Section offsets must be ordered and non-overlapping.");return F=Ae,{generatedOffset:{generatedLine:Z+1,generatedColumn:$e+1},consumer:new b(t.getArg(le,"map"),U)}})}A.prototype=Object.create(b.prototype),A.prototype.constructor=b,A.prototype._version=3,Object.defineProperty(A.prototype,"sources",{get:function(){for(var E=[],U=0;U<this._sections.length;U++)for(var z=0;z<this._sections[U].consumer.sources.length;z++)E.push(this._sections[U].consumer.sources[z]);return E}}),A.prototype.originalPositionFor=function(E){var U={generatedLine:t.getArg(E,"line"),generatedColumn:t.getArg(E,"column")},z=o.search(U,this._sections,function(x,F){var le=x.generatedLine-F.generatedOffset.generatedLine;return le||x.generatedColumn-F.generatedOffset.generatedColumn}),L=this._sections[z];return L?L.consumer.originalPositionFor({line:U.generatedLine-(L.generatedOffset.generatedLine-1),column:U.generatedColumn-(L.generatedOffset.generatedLine===U.generatedLine?L.generatedOffset.generatedColumn-1:0),bias:E.bias}):{source:null,line:null,column:null,name:null}},A.prototype.hasContentsOfAllSources=function(){return this._sections.every(function(E){return E.consumer.hasContentsOfAllSources()})},A.prototype.sourceContentFor=function(E,U){for(var z=0;z<this._sections.length;z++){var L=this._sections[z],x=L.consumer.sourceContentFor(E,!0);if(x)return x}if(U)return null;throw new Error('"'+E+'" is not in the SourceMap.')},A.prototype.generatedPositionFor=function(E){for(var U=0;U<this._sections.length;U++){var z=this._sections[U];if(z.consumer._findSourceIndex(t.getArg(E,"source"))!==-1){var L=z.consumer.generatedPositionFor(E);if(L){var x={line:L.line+(z.generatedOffset.generatedLine-1),column:L.column+(z.generatedOffset.generatedLine===L.line?z.generatedOffset.generatedColumn-1:0)};return x}}}return{line:null,column:null}},A.prototype._parseMappings=function(E,U){this.__generatedMappings=[],this.__originalMappings=[];for(var z=0;z<this._sections.length;z++)for(var L=this._sections[z],x=L.consumer._generatedMappings,F=0;F<x.length;F++){var le=x[F],Ae=L.consumer._sources.at(le.source);Ae=t.computeSourceURL(L.consumer.sourceRoot,Ae,this._sourceMapURL),this._sources.add(Ae),Ae=this._sources.indexOf(Ae);var Z=null;le.name&&(Z=L.consumer._names.at(le.name),this._names.add(Z),Z=this._names.indexOf(Z));var $e={source:Ae,generatedLine:le.generatedLine+(L.generatedOffset.generatedLine-1),generatedColumn:le.generatedColumn+(L.generatedOffset.generatedLine===le.generatedLine?L.generatedOffset.generatedColumn-1:0),originalLine:le.originalLine,originalColumn:le.originalColumn,name:Z};this.__generatedMappings.push($e),typeof $e.originalLine=="number"&&this.__originalMappings.push($e)}h(this.__generatedMappings,t.compareByGeneratedPositionsDeflated),h(this.__originalMappings,t.compareByOriginalPositions)},e.IndexedSourceMapConsumer=A}}),et=(0,X.P$)({"../../node_modules/escodegen/node_modules/source-map/lib/source-node.js"(e){var t=he().SourceMapGenerator,o=xe(),i=/(\r?\n)/,a=10,h="$$$isSourceNode$$$";function b(g,k,A,E,U){this.children=[],this.sourceContents={},this.line=g??null,this.column=k??null,this.source=A??null,this.name=U??null,this[h]=!0,E!=null&&this.add(E)}b.fromStringWithSourceMap=function(g,k,A){var E=new b,U=g.split(i),z=0,L=function(){var Z=$(),$e=$()||"";return Z+$e;function $(){return z<U.length?U[z++]:void 0}},x=1,F=0,le=null;return k.eachMapping(function(Z){if(le!==null)if(x<Z.generatedLine)Ae(le,L()),x++,F=0;else{var $e=U[z]||"",$=$e.substr(0,Z.generatedColumn-F);U[z]=$e.substr(Z.generatedColumn-F),F=Z.generatedColumn,Ae(le,$),le=Z;return}for(;x<Z.generatedLine;)E.add(L()),x++;if(F<Z.generatedColumn){var $e=U[z]||"";E.add($e.substr(0,Z.generatedColumn)),U[z]=$e.substr(Z.generatedColumn),F=Z.generatedColumn}le=Z},this),z<U.length&&(le&&Ae(le,L()),E.add(U.splice(z).join(""))),k.sources.forEach(function(Z){var $e=k.sourceContentFor(Z);$e!=null&&(A!=null&&(Z=o.join(A,Z)),E.setSourceContent(Z,$e))}),E;function Ae(Z,$e){if(Z===null||Z.source===void 0)E.add($e);else{var $=A?o.join(A,Z.source):Z.source;E.add(new b(Z.originalLine,Z.originalColumn,$,$e,Z.name))}}},b.prototype.add=function(g){if(Array.isArray(g))g.forEach(function(k){this.add(k)},this);else if(g[h]||typeof g=="string")g&&this.children.push(g);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+g);return this},b.prototype.prepend=function(g){if(Array.isArray(g))for(var k=g.length-1;k>=0;k--)this.prepend(g[k]);else if(g[h]||typeof g=="string")this.children.unshift(g);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+g);return this},b.prototype.walk=function(g){for(var k,A=0,E=this.children.length;A<E;A++)k=this.children[A],k[h]?k.walk(g):k!==""&&g(k,{source:this.source,line:this.line,column:this.column,name:this.name})},b.prototype.join=function(g){var k,A,E=this.children.length;if(E>0){for(k=[],A=0;A<E-1;A++)k.push(this.children[A]),k.push(g);k.push(this.children[A]),this.children=k}return this},b.prototype.replaceRight=function(g,k){var A=this.children[this.children.length-1];return A[h]?A.replaceRight(g,k):typeof A=="string"?this.children[this.children.length-1]=A.replace(g,k):this.children.push("".replace(g,k)),this},b.prototype.setSourceContent=function(g,k){this.sourceContents[o.toSetString(g)]=k},b.prototype.walkSourceContents=function(g){for(var k=0,A=this.children.length;k<A;k++)this.children[k][h]&&this.children[k].walkSourceContents(g);for(var E=Object.keys(this.sourceContents),k=0,A=E.length;k<A;k++)g(o.fromSetString(E[k]),this.sourceContents[E[k]])},b.prototype.toString=function(){var g="";return this.walk(function(k){g+=k}),g},b.prototype.toStringWithSourceMap=function(g){var k={code:"",line:1,column:0},A=new t(g),E=!1,U=null,z=null,L=null,x=null;return this.walk(function(F,le){k.code+=F,le.source!==null&&le.line!==null&&le.column!==null?((U!==le.source||z!==le.line||L!==le.column||x!==le.name)&&A.addMapping({source:le.source,original:{line:le.line,column:le.column},generated:{line:k.line,column:k.column},name:le.name}),U=le.source,z=le.line,L=le.column,x=le.name,E=!0):E&&(A.addMapping({generated:{line:k.line,column:k.column}}),U=null,E=!1);for(var Ae=0,Z=F.length;Ae<Z;Ae++)F.charCodeAt(Ae)===a?(k.line++,k.column=0,Ae+1===Z?(U=null,E=!1):E&&A.addMapping({source:le.source,original:{line:le.line,column:le.column},generated:{line:k.line,column:k.column},name:le.name})):k.column++}),this.walkSourceContents(function(F,le){A.setSourceContent(F,le)}),{code:k.code,map:A}},e.SourceNode=b}}),kt=(0,X.P$)({"../../node_modules/escodegen/node_modules/source-map/source-map.js"(e){e.SourceMapGenerator=he().SourceMapGenerator,e.SourceMapConsumer=Le().SourceMapConsumer,e.SourceNode=et().SourceNode}}),$t=(0,X.P$)({"../../node_modules/escodegen/package.json"(e,t){t.exports={name:"escodegen",description:"ECMAScript code generator",homepage:"http://github.com/estools/escodegen",main:"escodegen.js",bin:{esgenerate:"./bin/esgenerate.js",escodegen:"./bin/escodegen.js"},files:["LICENSE.BSD","README.md","bin","escodegen.js","package.json"],version:"2.1.0",engines:{node:">=6.0"},maintainers:[{name:"Yusuke Suzuki",email:"utatane.tea@gmail.com",web:"http://github.com/Constellation"}],repository:{type:"git",url:"http://github.com/estools/escodegen.git"},dependencies:{estraverse:"^5.2.0",esutils:"^2.0.2",esprima:"^4.0.1"},optionalDependencies:{"source-map":"~0.6.1"},devDependencies:{acorn:"^8.0.4",bluebird:"^3.4.7","bower-registry-client":"^1.0.0",chai:"^4.2.0","chai-exclude":"^2.0.2","commonjs-everywhere":"^0.9.7",gulp:"^4.0.2","gulp-eslint":"^6.0.0","gulp-mocha":"^7.0.2",minimist:"^1.2.5",optionator:"^0.9.1",semver:"^7.3.4"},license:"BSD-2-Clause",scripts:{test:"gulp travis","unit-test":"gulp test",lint:"gulp lint",release:"node tools/release.js","build-min":"./node_modules/.bin/cjsify -ma path: tools/entry-point.js > escodegen.browser.min.js",build:"./node_modules/.bin/cjsify -a path: tools/entry-point.js > escodegen.browser.js"}}}}),xt=(0,X.P$)({"../../node_modules/escodegen/escodegen.js"(e){(function(){var t,o,i,a,h,b,g,k,A,E,U,z,L,x,F,le,Ae,Z,$e,$,O,S,j,Q,_e,Xe;h=Ke(),b=Et(),t=h.Syntax;function qe(r){return co.Expression.hasOwnProperty(r.type)}function Ye(r){return co.Statement.hasOwnProperty(r.type)}o={Sequence:0,Yield:1,Assignment:1,Conditional:2,ArrowFunction:2,Coalesce:3,LogicalOR:4,LogicalAND:5,BitwiseOR:6,BitwiseXOR:7,BitwiseAND:8,Equality:9,Relational:10,BitwiseSHIFT:11,Additive:12,Multiplicative:13,Exponentiation:14,Await:15,Unary:15,Postfix:16,OptionalChaining:17,Call:18,New:19,TaggedTemplate:20,Member:21,Primary:22},i={"??":o.Coalesce,"||":o.LogicalOR,"&&":o.LogicalAND,"|":o.BitwiseOR,"^":o.BitwiseXOR,"&":o.BitwiseAND,"==":o.Equality,"!=":o.Equality,"===":o.Equality,"!==":o.Equality,is:o.Equality,isnt:o.Equality,"<":o.Relational,">":o.Relational,"<=":o.Relational,">=":o.Relational,in:o.Relational,instanceof:o.Relational,"<<":o.BitwiseSHIFT,">>":o.BitwiseSHIFT,">>>":o.BitwiseSHIFT,"+":o.Additive,"-":o.Additive,"*":o.Multiplicative,"%":o.Multiplicative,"/":o.Multiplicative,"**":o.Exponentiation};var ft=1,Mt=2,oo=4,ro=8,so=16,Xt=32,en=64,ur=Mt|oo,Sn=ft|Mt,Te=ft|Mt|oo,qn=ft,Tn=oo,dr=ft|oo,eo=ft,Uo=ft|Xt,Dr=0,di=ft|so,mi=ft|ro;function ei(){return{indent:null,base:null,parse:null,comment:!1,format:{indent:{style:"    ",base:0,adjustMultilineComment:!1},newline:`
`,space:" ",json:!1,renumber:!1,hexadecimal:!1,quotes:"single",escapeless:!1,compact:!1,parentheses:!0,semicolons:!0,safeConcatenation:!1,preserveBlankLines:!1},moz:{comprehensionExpressionStartsWithAssignment:!1,starlessGenerator:!1},sourceMap:null,sourceMapRoot:null,sourceMapWithCode:!1,directive:!1,raw:!0,verbatim:null,sourceCode:null}}function Bn(r,u){var l="";for(u|=0;u>0;u>>>=1,r+=r)u&1&&(l+=r);return l}function bi(r){return/[\r\n]/g.test(r)}function fo(r){var u=r.length;return u&&b.code.isLineTerminator(r.charCodeAt(u-1))}function ti(r,u){var l;for(l in u)u.hasOwnProperty(l)&&(r[l]=u[l]);return r}function Cr(r,u){var l,d;function f(Y){return typeof Y=="object"&&Y instanceof Object&&!(Y instanceof RegExp)}for(l in u)u.hasOwnProperty(l)&&(d=u[l],f(d)?f(r[l])?Cr(r[l],d):r[l]=Cr({},d):r[l]=d);return r}function hi(r){var u,l,d,f,Y;if(r!==r)throw new Error("Numeric literal whose value is NaN");if(r<0||r===0&&1/r<0)throw new Error("Numeric literal whose value is negative");if(r===1/0)return A?"null":E?"1e400":"1e+400";if(u=""+r,!E||u.length<3)return u;for(l=u.indexOf("."),!A&&u.charCodeAt(0)===48&&l===1&&(l=0,u=u.slice(1)),d=u,u=u.replace("e+","e"),f=0,(Y=d.indexOf("e"))>0&&(f=+d.slice(Y+1),d=d.slice(0,Y)),l>=0&&(f-=d.length-l-1,d=+(d.slice(0,l)+d.slice(l+1))+""),Y=0;d.charCodeAt(d.length+Y-1)===48;)--Y;return Y!==0&&(f-=Y,d=d.slice(0,Y)),f!==0&&(d+="e"+f),(d.length<u.length||U&&r>1e12&&Math.floor(r)===r&&(d="0x"+r.toString(16)).length<u.length)&&+d===r&&(u=d),u}function oi(r,u){return(r&-2)===8232?(u?"u":"\\u")+(r===8232?"2028":"2029"):r===10||r===13?(u?"":"\\")+(r===10?"n":"r"):String.fromCharCode(r)}function gi(r){var u,l,d,f,Y,ne,be,Fe;if(l=r.toString(),r.source){if(u=l.match(/\/([^/]*)$/),!u)return l;for(d=u[1],l="",be=!1,Fe=!1,f=0,Y=r.source.length;f<Y;++f)ne=r.source.charCodeAt(f),Fe?(l+=oi(ne,Fe),Fe=!1):(be?ne===93&&(be=!1):ne===47?l+="\\":ne===91&&(be=!0),l+=oi(ne,Fe),Fe=ne===92);return"/"+l+"/"+d}return l}function fi(r,u){var l;return r===8?"\\b":r===12?"\\f":r===9?"\\t":(l=r.toString(16).toUpperCase(),A||r>255?"\\u"+"0000".slice(l.length)+l:r===0&&!b.code.isDecimalDigit(u)?"\\0":r===11?"\\x0B":"\\x"+"00".slice(l.length)+l)}function ki(r){if(r===92)return"\\\\";if(r===10)return"\\n";if(r===13)return"\\r";if(r===8232)return"\\u2028";if(r===8233)return"\\u2029";throw new Error("Incorrectly classified character")}function _i(r){var u,l,d,f;for(f=z==="double"?'"':"'",u=0,l=r.length;u<l;++u)if(d=r.charCodeAt(u),d===39){f='"';break}else if(d===34){f="'";break}else d===92&&++u;return f+r+f}function wi(r){var u="",l,d,f,Y=0,ne=0,be,Fe;for(l=0,d=r.length;l<d;++l){if(f=r.charCodeAt(l),f===39)++Y;else if(f===34)++ne;else if(f===47&&A)u+="\\";else if(b.code.isLineTerminator(f)||f===92){u+=ki(f);continue}else if(!b.code.isIdentifierPartES5(f)&&(A&&f<32||!A&&!L&&(f<32||f>126))){u+=fi(f,r.charCodeAt(l+1));continue}u+=String.fromCharCode(f)}if(be=!(z==="double"||z==="auto"&&ne<Y),Fe=be?"'":'"',!(be?Y:ne))return Fe+u+Fe;for(r=u,u=Fe,l=0,d=r.length;l<d;++l)f=r.charCodeAt(l),(f===39&&be||f===34&&!be)&&(u+="\\"),u+=String.fromCharCode(f);return u+Fe}function ni(r){var u,l,d,f="";for(u=0,l=r.length;u<l;++u)d=r[u],f+=Array.isArray(d)?ni(d):d;return f}function Gt(r,u){if(!S)return Array.isArray(r)?ni(r):r;if(u==null){if(r instanceof a)return r;u={}}return u.loc==null?new a(null,null,S,r,u.name||null):new a(u.loc.start.line,u.loc.start.column,S===!0?u.loc.source||null:S,r,u.name||null)}function ko(){return F||" "}function gt(r,u){var l,d,f,Y;return l=Gt(r).toString(),l.length===0?[u]:(d=Gt(u).toString(),d.length===0?[r]:(f=l.charCodeAt(l.length-1),Y=d.charCodeAt(0),(f===43||f===45)&&f===Y||b.code.isIdentifierPartES5(f)&&b.code.isIdentifierPartES5(Y)||f===47&&Y===105?[r,ko(),u]:b.code.isWhiteSpace(f)||b.code.isLineTerminator(f)||b.code.isWhiteSpace(Y)||b.code.isLineTerminator(Y)?[r,u]:[r,F,u]))}function _o(r){return[g,r]}function lo(r){var u;u=g,g+=k,r(g),g=u}function yi(r){var u;for(u=r.length-1;u>=0&&!b.code.isLineTerminator(r.charCodeAt(u));--u);return r.length-1-u}function xi(r,u){var l,d,f,Y,ne,be,Fe,Lt;for(l=r.split(/\r\n|[\r\n]/),be=Number.MAX_VALUE,d=1,f=l.length;d<f;++d){for(Y=l[d],ne=0;ne<Y.length&&b.code.isWhiteSpace(Y.charCodeAt(ne));)++ne;be>ne&&(be=ne)}for(typeof u<"u"?(Fe=g,l[1][be]==="*"&&(u+=" "),g=u):(be&1&&--be,Fe=g),d=1,f=l.length;d<f;++d)Lt=Gt(_o(l[d].slice(be))),l[d]=S?Lt.join(""):Lt;return g=Fe,l.join(`
`)}function tn(r,u){if(r.type==="Line"){if(fo(r.value))return"//"+r.value;var l="//"+r.value;return Q||(l+=`
`),l}return $.format.indent.adjustMultilineComment&&/[\n\r]/.test(r.value)?xi("/*"+r.value+"*/",u):"/*"+r.value+"*/"}function ri(r,u){var l,d,f,Y,ne,be,Fe,Lt,bo,Pn,Gn,si,li,Vo;if(r.leadingComments&&r.leadingComments.length>0){if(Y=u,Q){for(f=r.leadingComments[0],u=[],Lt=f.extendedRange,bo=f.range,Gn=j.substring(Lt[0],bo[0]),Vo=(Gn.match(/\n/g)||[]).length,Vo>0?(u.push(Bn(`
`,Vo)),u.push(_o(tn(f)))):(u.push(Gn),u.push(tn(f))),Pn=bo,l=1,d=r.leadingComments.length;l<d;l++)f=r.leadingComments[l],bo=f.range,si=j.substring(Pn[1],bo[0]),Vo=(si.match(/\n/g)||[]).length,u.push(Bn(`
`,Vo)),u.push(_o(tn(f))),Pn=bo;li=j.substring(bo[1],Lt[1]),Vo=(li.match(/\n/g)||[]).length,u.push(Bn(`
`,Vo))}else for(f=r.leadingComments[0],u=[],Z&&r.type===t.Program&&r.body.length===0&&u.push(`
`),u.push(tn(f)),fo(Gt(u).toString())||u.push(`
`),l=1,d=r.leadingComments.length;l<d;++l)f=r.leadingComments[l],Fe=[tn(f)],fo(Gt(Fe).toString())||Fe.push(`
`),u.push(_o(Fe));u.push(_o(Y))}if(r.trailingComments)if(Q)f=r.trailingComments[0],Lt=f.extendedRange,bo=f.range,Gn=j.substring(Lt[0],bo[0]),Vo=(Gn.match(/\n/g)||[]).length,Vo>0?(u.push(Bn(`
`,Vo)),u.push(_o(tn(f)))):(u.push(Gn),u.push(tn(f)));else for(ne=!fo(Gt(u).toString()),be=Bn(" ",yi(Gt([g,u,k]).toString())),l=0,d=r.trailingComments.length;l<d;++l)f=r.trailingComments[l],ne?(l===0?u=[u,k]:u=[u,be],u.push(tn(f,be))):u=[u,_o(tn(f))],l!==d-1&&!fo(Gt(u).toString())&&(u=[u,`
`]);return u}function Wn(r,u,l){var d,f=0;for(d=r;d<u;d++)j[d]===`
`&&f++;for(d=1;d<f;d++)l.push(x)}function mo(r,u,l){return u<l?["(",r,")"]:r}function ii(r){var u,l,d;for(d=r.split(/\r\n|\n/),u=1,l=d.length;u<l;u++)d[u]=x+g+d[u];return d}function vi(r,u){var l,d,f;return l=r[$.verbatim],typeof l=="string"?d=mo(ii(l),o.Sequence,u):(d=ii(l.content),f=l.precedence!=null?l.precedence:o.Sequence,d=mo(d,f,u)),Gt(d,r)}function co(){}co.prototype.maybeBlock=function(r,u){var l,d,f=this;return d=!$.comment||!r.leadingComments,r.type===t.BlockStatement&&d?[F,this.generateStatement(r,u)]:r.type===t.EmptyStatement&&d?";":(lo(function(){l=[x,_o(f.generateStatement(r,u))]}),l)},co.prototype.maybeBlockSuffix=function(r,u){var l=fo(Gt(u).toString());return r.type===t.BlockStatement&&(!$.comment||!r.leadingComments)&&!l?[u,F]:l?[u,g]:[u,x,g]};function Do(r){return Gt(r.name,r)}function mr(r,u){return r.async?"async"+(u?ko():F):""}function Fr(r){var u=r.generator&&!$.moz.starlessGenerator;return u?"*"+F:""}function ai(r){var u=r.value,l="";return u.async&&(l+=mr(u,!r.computed)),u.generator&&(l+=Fr(u)?"*":""),l}co.prototype.generatePattern=function(r,u,l){return r.type===t.Identifier?Do(r):this.generateExpression(r,u,l)},co.prototype.generateFunctionParams=function(r){var u,l,d,f;if(f=!1,r.type===t.ArrowFunctionExpression&&!r.rest&&(!r.defaults||r.defaults.length===0)&&r.params.length===1&&r.params[0].type===t.Identifier)d=[mr(r,!0),Do(r.params[0])];else{for(d=r.type===t.ArrowFunctionExpression?[mr(r,!1)]:[],d.push("("),r.defaults&&(f=!0),u=0,l=r.params.length;u<l;++u)f&&r.defaults[u]?d.push(this.generateAssignment(r.params[u],r.defaults[u],"=",o.Assignment,Te)):d.push(this.generatePattern(r.params[u],o.Assignment,Te)),u+1<l&&d.push(","+F);r.rest&&(r.params.length&&d.push(","+F),d.push("..."),d.push(Do(r.rest))),d.push(")")}return d},co.prototype.generateFunctionBody=function(r){var u,l;return u=this.generateFunctionParams(r),r.type===t.ArrowFunctionExpression&&(u.push(F),u.push("=>")),r.expression?(u.push(F),l=this.generateExpression(r.body,o.Assignment,Te),l.toString().charAt(0)==="{"&&(l=["(",l,")"]),u.push(l)):u.push(this.maybeBlock(r.body,mi)),u},co.prototype.generateIterationForStatement=function(r,u,l){var d=["for"+(u.await?ko()+"await":"")+F+"("],f=this;return lo(function(){u.left.type===t.VariableDeclaration?lo(function(){d.push(u.left.kind+ko()),d.push(f.generateStatement(u.left.declarations[0],Dr))}):d.push(f.generateExpression(u.left,o.Call,Te)),d=gt(d,r),d=[gt(d,f.generateExpression(u.right,o.Assignment,Te)),")"]}),d.push(this.maybeBlock(u.body,l)),d},co.prototype.generatePropertyKey=function(r,u){var l=[];return u&&l.push("["),l.push(this.generateExpression(r,o.Assignment,Te)),u&&l.push("]"),l},co.prototype.generateAssignment=function(r,u,l,d,f){return o.Assignment<d&&(f|=ft),mo([this.generateExpression(r,o.Call,f),F+l+F,this.generateExpression(u,o.Assignment,f)],o.Assignment,d)},co.prototype.semicolon=function(r){return!Ae&&r&Xt?"":";"},co.Statement={BlockStatement:function(r,u){var l,d,f=["{",x],Y=this;return lo(function(){r.body.length===0&&Q&&(l=r.range,l[1]-l[0]>2&&(d=j.substring(l[0]+1,l[1]-1),d[0]===`
`&&(f=["{"]),f.push(d)));var ne,be,Fe,Lt;for(Lt=eo,u&ro&&(Lt|=so),ne=0,be=r.body.length;ne<be;++ne)Q&&(ne===0&&(r.body[0].leadingComments&&(l=r.body[0].leadingComments[0].extendedRange,d=j.substring(l[0],l[1]),d[0]===`
`&&(f=["{"])),r.body[0].leadingComments||Wn(r.range[0],r.body[0].range[0],f)),ne>0&&!r.body[ne-1].trailingComments&&!r.body[ne].leadingComments&&Wn(r.body[ne-1].range[1],r.body[ne].range[0],f)),ne===be-1&&(Lt|=Xt),r.body[ne].leadingComments&&Q?Fe=Y.generateStatement(r.body[ne],Lt):Fe=_o(Y.generateStatement(r.body[ne],Lt)),f.push(Fe),fo(Gt(Fe).toString())||Q&&ne<be-1&&r.body[ne+1].leadingComments||f.push(x),Q&&ne===be-1&&(r.body[ne].trailingComments||Wn(r.body[ne].range[1],r.range[1],f))}),f.push(_o("}")),f},BreakStatement:function(r,u){return r.label?"break "+r.label.name+this.semicolon(u):"break"+this.semicolon(u)},ContinueStatement:function(r,u){return r.label?"continue "+r.label.name+this.semicolon(u):"continue"+this.semicolon(u)},ClassBody:function(r,u){var l=["{",x],d=this;return lo(function(f){var Y,ne;for(Y=0,ne=r.body.length;Y<ne;++Y)l.push(f),l.push(d.generateExpression(r.body[Y],o.Sequence,Te)),Y+1<ne&&l.push(x)}),fo(Gt(l).toString())||l.push(x),l.push(g),l.push("}"),l},ClassDeclaration:function(r,u){var l,d;return l=["class"],r.id&&(l=gt(l,this.generateExpression(r.id,o.Sequence,Te))),r.superClass&&(d=gt("extends",this.generateExpression(r.superClass,o.Unary,Te)),l=gt(l,d)),l.push(F),l.push(this.generateStatement(r.body,Uo)),l},DirectiveStatement:function(r,u){return $.raw&&r.raw?r.raw+this.semicolon(u):_i(r.directive)+this.semicolon(u)},DoWhileStatement:function(r,u){var l=gt("do",this.maybeBlock(r.body,eo));return l=this.maybeBlockSuffix(r.body,l),gt(l,["while"+F+"(",this.generateExpression(r.test,o.Sequence,Te),")"+this.semicolon(u)])},CatchClause:function(r,u){var l,d=this;return lo(function(){var f;r.param?(l=["catch"+F+"(",d.generateExpression(r.param,o.Sequence,Te),")"],r.guard&&(f=d.generateExpression(r.guard,o.Sequence,Te),l.splice(2,0," if ",f))):l=["catch"]}),l.push(this.maybeBlock(r.body,eo)),l},DebuggerStatement:function(r,u){return"debugger"+this.semicolon(u)},EmptyStatement:function(r,u){return";"},ExportDefaultDeclaration:function(r,u){var l=["export"],d;return d=u&Xt?Uo:eo,l=gt(l,"default"),Ye(r.declaration)?l=gt(l,this.generateStatement(r.declaration,d)):l=gt(l,this.generateExpression(r.declaration,o.Assignment,Te)+this.semicolon(u)),l},ExportNamedDeclaration:function(r,u){var l=["export"],d,f=this;return d=u&Xt?Uo:eo,r.declaration?gt(l,this.generateStatement(r.declaration,d)):(r.specifiers&&(r.specifiers.length===0?l=gt(l,"{"+F+"}"):r.specifiers[0].type===t.ExportBatchSpecifier?l=gt(l,this.generateExpression(r.specifiers[0],o.Sequence,Te)):(l=gt(l,"{"),lo(function(Y){var ne,be;for(l.push(x),ne=0,be=r.specifiers.length;ne<be;++ne)l.push(Y),l.push(f.generateExpression(r.specifiers[ne],o.Sequence,Te)),ne+1<be&&l.push(","+x)}),fo(Gt(l).toString())||l.push(x),l.push(g+"}")),r.source?l=gt(l,["from"+F,this.generateExpression(r.source,o.Sequence,Te),this.semicolon(u)]):l.push(this.semicolon(u))),l)},ExportAllDeclaration:function(r,u){return["export"+F,"*"+F,"from"+F,this.generateExpression(r.source,o.Sequence,Te),this.semicolon(u)]},ExpressionStatement:function(r,u){var l,d;function f(be){var Fe;return be.slice(0,5)!=="class"?!1:(Fe=be.charCodeAt(5),Fe===123||b.code.isWhiteSpace(Fe)||b.code.isLineTerminator(Fe))}function Y(be){var Fe;return be.slice(0,8)!=="function"?!1:(Fe=be.charCodeAt(8),Fe===40||b.code.isWhiteSpace(Fe)||Fe===42||b.code.isLineTerminator(Fe))}function ne(be){var Fe,Lt,bo;if(be.slice(0,5)!=="async"||!b.code.isWhiteSpace(be.charCodeAt(5)))return!1;for(Lt=6,bo=be.length;Lt<bo&&b.code.isWhiteSpace(be.charCodeAt(Lt));++Lt);return Lt===bo||be.slice(Lt,Lt+8)!=="function"?!1:(Fe=be.charCodeAt(Lt+8),Fe===40||b.code.isWhiteSpace(Fe)||Fe===42||b.code.isLineTerminator(Fe))}return l=[this.generateExpression(r.expression,o.Sequence,Te)],d=Gt(l).toString(),d.charCodeAt(0)===123||f(d)||Y(d)||ne(d)||$e&&u&so&&r.expression.type===t.Literal&&typeof r.expression.value=="string"?l=["(",l,")"+this.semicolon(u)]:l.push(this.semicolon(u)),l},ImportDeclaration:function(r,u){var l,d,f=this;return r.specifiers.length===0?["import",F,this.generateExpression(r.source,o.Sequence,Te),this.semicolon(u)]:(l=["import"],d=0,r.specifiers[d].type===t.ImportDefaultSpecifier&&(l=gt(l,[this.generateExpression(r.specifiers[d],o.Sequence,Te)]),++d),r.specifiers[d]&&(d!==0&&l.push(","),r.specifiers[d].type===t.ImportNamespaceSpecifier?l=gt(l,[F,this.generateExpression(r.specifiers[d],o.Sequence,Te)]):(l.push(F+"{"),r.specifiers.length-d===1?(l.push(F),l.push(this.generateExpression(r.specifiers[d],o.Sequence,Te)),l.push(F+"}"+F)):(lo(function(Y){var ne,be;for(l.push(x),ne=d,be=r.specifiers.length;ne<be;++ne)l.push(Y),l.push(f.generateExpression(r.specifiers[ne],o.Sequence,Te)),ne+1<be&&l.push(","+x)}),fo(Gt(l).toString())||l.push(x),l.push(g+"}"+F)))),l=gt(l,["from"+F,this.generateExpression(r.source,o.Sequence,Te),this.semicolon(u)]),l)},VariableDeclarator:function(r,u){var l=u&ft?Te:ur;return r.init?[this.generateExpression(r.id,o.Assignment,l),F,"=",F,this.generateExpression(r.init,o.Assignment,l)]:this.generatePattern(r.id,o.Assignment,l)},VariableDeclaration:function(r,u){var l,d,f,Y,ne,be=this;l=[r.kind],ne=u&ft?eo:Dr;function Fe(){for(Y=r.declarations[0],$.comment&&Y.leadingComments?(l.push(`
`),l.push(_o(be.generateStatement(Y,ne)))):(l.push(ko()),l.push(be.generateStatement(Y,ne))),d=1,f=r.declarations.length;d<f;++d)Y=r.declarations[d],$.comment&&Y.leadingComments?(l.push(","+x),l.push(_o(be.generateStatement(Y,ne)))):(l.push(","+F),l.push(be.generateStatement(Y,ne)))}return r.declarations.length>1?lo(Fe):Fe(),l.push(this.semicolon(u)),l},ThrowStatement:function(r,u){return[gt("throw",this.generateExpression(r.argument,o.Sequence,Te)),this.semicolon(u)]},TryStatement:function(r,u){var l,d,f,Y;if(l=["try",this.maybeBlock(r.block,eo)],l=this.maybeBlockSuffix(r.block,l),r.handlers)for(d=0,f=r.handlers.length;d<f;++d)l=gt(l,this.generateStatement(r.handlers[d],eo)),(r.finalizer||d+1!==f)&&(l=this.maybeBlockSuffix(r.handlers[d].body,l));else{for(Y=r.guardedHandlers||[],d=0,f=Y.length;d<f;++d)l=gt(l,this.generateStatement(Y[d],eo)),(r.finalizer||d+1!==f)&&(l=this.maybeBlockSuffix(Y[d].body,l));if(r.handler)if(Array.isArray(r.handler))for(d=0,f=r.handler.length;d<f;++d)l=gt(l,this.generateStatement(r.handler[d],eo)),(r.finalizer||d+1!==f)&&(l=this.maybeBlockSuffix(r.handler[d].body,l));else l=gt(l,this.generateStatement(r.handler,eo)),r.finalizer&&(l=this.maybeBlockSuffix(r.handler.body,l))}return r.finalizer&&(l=gt(l,["finally",this.maybeBlock(r.finalizer,eo)])),l},SwitchStatement:function(r,u){var l,d,f,Y,ne,be=this;if(lo(function(){l=["switch"+F+"(",be.generateExpression(r.discriminant,o.Sequence,Te),")"+F+"{"+x]}),r.cases)for(ne=eo,f=0,Y=r.cases.length;f<Y;++f)f===Y-1&&(ne|=Xt),d=_o(this.generateStatement(r.cases[f],ne)),l.push(d),fo(Gt(d).toString())||l.push(x);return l.push(_o("}")),l},SwitchCase:function(r,u){var l,d,f,Y,ne,be=this;return lo(function(){for(r.test?l=[gt("case",be.generateExpression(r.test,o.Sequence,Te)),":"]:l=["default:"],f=0,Y=r.consequent.length,Y&&r.consequent[0].type===t.BlockStatement&&(d=be.maybeBlock(r.consequent[0],eo),l.push(d),f=1),f!==Y&&!fo(Gt(l).toString())&&l.push(x),ne=eo;f<Y;++f)f===Y-1&&u&Xt&&(ne|=Xt),d=_o(be.generateStatement(r.consequent[f],ne)),l.push(d),f+1!==Y&&!fo(Gt(d).toString())&&l.push(x)}),l},IfStatement:function(r,u){var l,d,f,Y=this;return lo(function(){l=["if"+F+"(",Y.generateExpression(r.test,o.Sequence,Te),")"]}),f=u&Xt,d=eo,f&&(d|=Xt),r.alternate?(l.push(this.maybeBlock(r.consequent,eo)),l=this.maybeBlockSuffix(r.consequent,l),r.alternate.type===t.IfStatement?l=gt(l,["else ",this.generateStatement(r.alternate,d)]):l=gt(l,gt("else",this.maybeBlock(r.alternate,d)))):l.push(this.maybeBlock(r.consequent,d)),l},ForStatement:function(r,u){var l,d=this;return lo(function(){l=["for"+F+"("],r.init?r.init.type===t.VariableDeclaration?l.push(d.generateStatement(r.init,Dr)):(l.push(d.generateExpression(r.init,o.Sequence,ur)),l.push(";")):l.push(";"),r.test&&(l.push(F),l.push(d.generateExpression(r.test,o.Sequence,Te))),l.push(";"),r.update&&(l.push(F),l.push(d.generateExpression(r.update,o.Sequence,Te))),l.push(")")}),l.push(this.maybeBlock(r.body,u&Xt?Uo:eo)),l},ForInStatement:function(r,u){return this.generateIterationForStatement("in",r,u&Xt?Uo:eo)},ForOfStatement:function(r,u){return this.generateIterationForStatement("of",r,u&Xt?Uo:eo)},LabeledStatement:function(r,u){return[r.label.name+":",this.maybeBlock(r.body,u&Xt?Uo:eo)]},Program:function(r,u){var l,d,f,Y,ne;for(Y=r.body.length,l=[Z&&Y>0?`
`:""],ne=di,f=0;f<Y;++f)!Z&&f===Y-1&&(ne|=Xt),Q&&(f===0&&(r.body[0].leadingComments||Wn(r.range[0],r.body[f].range[0],l)),f>0&&!r.body[f-1].trailingComments&&!r.body[f].leadingComments&&Wn(r.body[f-1].range[1],r.body[f].range[0],l)),d=_o(this.generateStatement(r.body[f],ne)),l.push(d),f+1<Y&&!fo(Gt(d).toString())&&(Q&&r.body[f+1].leadingComments||l.push(x)),Q&&f===Y-1&&(r.body[f].trailingComments||Wn(r.body[f].range[1],r.range[1],l));return l},FunctionDeclaration:function(r,u){return[mr(r,!0),"function",Fr(r)||ko(),r.id?Do(r.id):"",this.generateFunctionBody(r)]},ReturnStatement:function(r,u){return r.argument?[gt("return",this.generateExpression(r.argument,o.Sequence,Te)),this.semicolon(u)]:["return"+this.semicolon(u)]},WhileStatement:function(r,u){var l,d=this;return lo(function(){l=["while"+F+"(",d.generateExpression(r.test,o.Sequence,Te),")"]}),l.push(this.maybeBlock(r.body,u&Xt?Uo:eo)),l},WithStatement:function(r,u){var l,d=this;return lo(function(){l=["with"+F+"(",d.generateExpression(r.object,o.Sequence,Te),")"]}),l.push(this.maybeBlock(r.body,u&Xt?Uo:eo)),l}},ti(co.prototype,co.Statement),co.Expression={SequenceExpression:function(r,u,l){var d,f,Y;for(o.Sequence<u&&(l|=ft),d=[],f=0,Y=r.expressions.length;f<Y;++f)d.push(this.generateExpression(r.expressions[f],o.Assignment,l)),f+1<Y&&d.push(","+F);return mo(d,o.Sequence,u)},AssignmentExpression:function(r,u,l){return this.generateAssignment(r.left,r.right,r.operator,u,l)},ArrowFunctionExpression:function(r,u,l){return mo(this.generateFunctionBody(r),o.ArrowFunction,u)},ConditionalExpression:function(r,u,l){return o.Conditional<u&&(l|=ft),mo([this.generateExpression(r.test,o.Coalesce,l),F+"?"+F,this.generateExpression(r.consequent,o.Assignment,l),F+":"+F,this.generateExpression(r.alternate,o.Assignment,l)],o.Conditional,u)},LogicalExpression:function(r,u,l){return r.operator==="??"&&(l|=en),this.BinaryExpression(r,u,l)},BinaryExpression:function(r,u,l){var d,f,Y,ne,be,Fe;return ne=i[r.operator],f=r.operator==="**"?o.Postfix:ne,Y=r.operator==="**"?ne:ne+1,ne<u&&(l|=ft),be=this.generateExpression(r.left,f,l),Fe=be.toString(),Fe.charCodeAt(Fe.length-1)===47&&b.code.isIdentifierPartES5(r.operator.charCodeAt(0))?d=[be,ko(),r.operator]:d=gt(be,r.operator),be=this.generateExpression(r.right,Y,l),r.operator==="/"&&be.toString().charAt(0)==="/"||r.operator.slice(-1)==="<"&&be.toString().slice(0,3)==="!--"?(d.push(ko()),d.push(be)):d=gt(d,be),r.operator==="in"&&!(l&ft)?["(",d,")"]:(r.operator==="||"||r.operator==="&&")&&l&en?["(",d,")"]:mo(d,ne,u)},CallExpression:function(r,u,l){var d,f,Y;for(d=[this.generateExpression(r.callee,o.Call,Sn)],r.optional&&d.push("?."),d.push("("),f=0,Y=r.arguments.length;f<Y;++f)d.push(this.generateExpression(r.arguments[f],o.Assignment,Te)),f+1<Y&&d.push(","+F);return d.push(")"),l&Mt?mo(d,o.Call,u):["(",d,")"]},ChainExpression:function(r,u,l){o.OptionalChaining<u&&(l|=Mt);var d=this.generateExpression(r.expression,o.OptionalChaining,l);return mo(d,o.OptionalChaining,u)},NewExpression:function(r,u,l){var d,f,Y,ne,be;if(f=r.arguments.length,be=l&oo&&!le&&f===0?dr:qn,d=gt("new",this.generateExpression(r.callee,o.New,be)),!(l&oo)||le||f>0){for(d.push("("),Y=0,ne=f;Y<ne;++Y)d.push(this.generateExpression(r.arguments[Y],o.Assignment,Te)),Y+1<ne&&d.push(","+F);d.push(")")}return mo(d,o.New,u)},MemberExpression:function(r,u,l){var d,f;return d=[this.generateExpression(r.object,o.Call,l&Mt?Sn:qn)],r.computed?(r.optional&&d.push("?."),d.push("["),d.push(this.generateExpression(r.property,o.Sequence,l&Mt?Te:dr)),d.push("]")):(!r.optional&&r.object.type===t.Literal&&typeof r.object.value=="number"&&(f=Gt(d).toString(),f.indexOf(".")<0&&!/[eExX]/.test(f)&&b.code.isDecimalDigit(f.charCodeAt(f.length-1))&&!(f.length>=2&&f.charCodeAt(0)===48)&&d.push(" ")),d.push(r.optional?"?.":"."),d.push(Do(r.property))),mo(d,o.Member,u)},MetaProperty:function(r,u,l){var d;return d=[],d.push(typeof r.meta=="string"?r.meta:Do(r.meta)),d.push("."),d.push(typeof r.property=="string"?r.property:Do(r.property)),mo(d,o.Member,u)},UnaryExpression:function(r,u,l){var d,f,Y,ne,be;return f=this.generateExpression(r.argument,o.Unary,Te),F===""?d=gt(r.operator,f):(d=[r.operator],r.operator.length>2?d=gt(d,f):(ne=Gt(d).toString(),be=ne.charCodeAt(ne.length-1),Y=f.toString().charCodeAt(0),((be===43||be===45)&&be===Y||b.code.isIdentifierPartES5(be)&&b.code.isIdentifierPartES5(Y))&&d.push(ko()),d.push(f))),mo(d,o.Unary,u)},YieldExpression:function(r,u,l){var d;return r.delegate?d="yield*":d="yield",r.argument&&(d=gt(d,this.generateExpression(r.argument,o.Yield,Te))),mo(d,o.Yield,u)},AwaitExpression:function(r,u,l){var d=gt(r.all?"await*":"await",this.generateExpression(r.argument,o.Await,Te));return mo(d,o.Await,u)},UpdateExpression:function(r,u,l){return r.prefix?mo([r.operator,this.generateExpression(r.argument,o.Unary,Te)],o.Unary,u):mo([this.generateExpression(r.argument,o.Postfix,Te),r.operator],o.Postfix,u)},FunctionExpression:function(r,u,l){var d=[mr(r,!0),"function"];return r.id?(d.push(Fr(r)||ko()),d.push(Do(r.id))):d.push(Fr(r)||F),d.push(this.generateFunctionBody(r)),d},ArrayPattern:function(r,u,l){return this.ArrayExpression(r,u,l,!0)},ArrayExpression:function(r,u,l,d){var f,Y,ne=this;return r.elements.length?(Y=d?!1:r.elements.length>1,f=["[",Y?x:""],lo(function(be){var Fe,Lt;for(Fe=0,Lt=r.elements.length;Fe<Lt;++Fe)r.elements[Fe]?(f.push(Y?be:""),f.push(ne.generateExpression(r.elements[Fe],o.Assignment,Te))):(Y&&f.push(be),Fe+1===Lt&&f.push(",")),Fe+1<Lt&&f.push(","+(Y?x:F))}),Y&&!fo(Gt(f).toString())&&f.push(x),f.push(Y?g:""),f.push("]"),f):"[]"},RestElement:function(r,u,l){return"..."+this.generatePattern(r.argument)},ClassExpression:function(r,u,l){var d,f;return d=["class"],r.id&&(d=gt(d,this.generateExpression(r.id,o.Sequence,Te))),r.superClass&&(f=gt("extends",this.generateExpression(r.superClass,o.Unary,Te)),d=gt(d,f)),d.push(F),d.push(this.generateStatement(r.body,Uo)),d},MethodDefinition:function(r,u,l){var d,f;return r.static?d=["static"+F]:d=[],r.kind==="get"||r.kind==="set"?f=[gt(r.kind,this.generatePropertyKey(r.key,r.computed)),this.generateFunctionBody(r.value)]:f=[ai(r),this.generatePropertyKey(r.key,r.computed),this.generateFunctionBody(r.value)],gt(d,f)},Property:function(r,u,l){return r.kind==="get"||r.kind==="set"?[r.kind,ko(),this.generatePropertyKey(r.key,r.computed),this.generateFunctionBody(r.value)]:r.shorthand?r.value.type==="AssignmentPattern"?this.AssignmentPattern(r.value,o.Sequence,Te):this.generatePropertyKey(r.key,r.computed):r.method?[ai(r),this.generatePropertyKey(r.key,r.computed),this.generateFunctionBody(r.value)]:[this.generatePropertyKey(r.key,r.computed),":"+F,this.generateExpression(r.value,o.Assignment,Te)]},ObjectExpression:function(r,u,l){var d,f,Y,ne=this;return r.properties.length?(d=r.properties.length>1,lo(function(){Y=ne.generateExpression(r.properties[0],o.Sequence,Te)}),!d&&!bi(Gt(Y).toString())?["{",F,Y,F,"}"]:(lo(function(be){var Fe,Lt;if(f=["{",x,be,Y],d)for(f.push(","+x),Fe=1,Lt=r.properties.length;Fe<Lt;++Fe)f.push(be),f.push(ne.generateExpression(r.properties[Fe],o.Sequence,Te)),Fe+1<Lt&&f.push(","+x)}),fo(Gt(f).toString())||f.push(x),f.push(g),f.push("}"),f)):"{}"},AssignmentPattern:function(r,u,l){return this.generateAssignment(r.left,r.right,"=",u,l)},ObjectPattern:function(r,u,l){var d,f,Y,ne,be,Fe=this;if(!r.properties.length)return"{}";if(ne=!1,r.properties.length===1)be=r.properties[0],be.type===t.Property&&be.value.type!==t.Identifier&&(ne=!0);else for(f=0,Y=r.properties.length;f<Y;++f)if(be=r.properties[f],be.type===t.Property&&!be.shorthand){ne=!0;break}return d=["{",ne?x:""],lo(function(Lt){var bo,Pn;for(bo=0,Pn=r.properties.length;bo<Pn;++bo)d.push(ne?Lt:""),d.push(Fe.generateExpression(r.properties[bo],o.Sequence,Te)),bo+1<Pn&&d.push(","+(ne?x:F))}),ne&&!fo(Gt(d).toString())&&d.push(x),d.push(ne?g:""),d.push("}"),d},ThisExpression:function(r,u,l){return"this"},Super:function(r,u,l){return"super"},Identifier:function(r,u,l){return Do(r)},ImportDefaultSpecifier:function(r,u,l){return Do(r.id||r.local)},ImportNamespaceSpecifier:function(r,u,l){var d=["*"],f=r.id||r.local;return f&&d.push(F+"as"+ko()+Do(f)),d},ImportSpecifier:function(r,u,l){var d=r.imported,f=[d.name],Y=r.local;return Y&&Y.name!==d.name&&f.push(ko()+"as"+ko()+Do(Y)),f},ExportSpecifier:function(r,u,l){var d=r.local,f=[d.name],Y=r.exported;return Y&&Y.name!==d.name&&f.push(ko()+"as"+ko()+Do(Y)),f},Literal:function(r,u,l){var d;if(r.hasOwnProperty("raw")&&O&&$.raw)try{if(d=O(r.raw).body[0].expression,d.type===t.Literal&&d.value===r.value)return r.raw}catch{}return r.regex?"/"+r.regex.pattern+"/"+r.regex.flags:typeof r.value=="bigint"?r.value.toString()+"n":r.bigint?r.bigint+"n":r.value===null?"null":typeof r.value=="string"?wi(r.value):typeof r.value=="number"?hi(r.value):typeof r.value=="boolean"?r.value?"true":"false":gi(r.value)},GeneratorExpression:function(r,u,l){return this.ComprehensionExpression(r,u,l)},ComprehensionExpression:function(r,u,l){var d,f,Y,ne,be=this;return d=r.type===t.GeneratorExpression?["("]:["["],$.moz.comprehensionExpressionStartsWithAssignment&&(ne=this.generateExpression(r.body,o.Assignment,Te),d.push(ne)),r.blocks&&lo(function(){for(f=0,Y=r.blocks.length;f<Y;++f)ne=be.generateExpression(r.blocks[f],o.Sequence,Te),f>0||$.moz.comprehensionExpressionStartsWithAssignment?d=gt(d,ne):d.push(ne)}),r.filter&&(d=gt(d,"if"+F),ne=this.generateExpression(r.filter,o.Sequence,Te),d=gt(d,["(",ne,")"])),$.moz.comprehensionExpressionStartsWithAssignment||(ne=this.generateExpression(r.body,o.Assignment,Te),d=gt(d,ne)),d.push(r.type===t.GeneratorExpression?")":"]"),d},ComprehensionBlock:function(r,u,l){var d;return r.left.type===t.VariableDeclaration?d=[r.left.kind,ko(),this.generateStatement(r.left.declarations[0],Dr)]:d=this.generateExpression(r.left,o.Call,Te),d=gt(d,r.of?"of":"in"),d=gt(d,this.generateExpression(r.right,o.Sequence,Te)),["for"+F+"(",d,")"]},SpreadElement:function(r,u,l){return["...",this.generateExpression(r.argument,o.Assignment,Te)]},TaggedTemplateExpression:function(r,u,l){var d=Sn;l&Mt||(d=qn);var f=[this.generateExpression(r.tag,o.Call,d),this.generateExpression(r.quasi,o.Primary,Tn)];return mo(f,o.TaggedTemplate,u)},TemplateElement:function(r,u,l){return r.value.raw},TemplateLiteral:function(r,u,l){var d,f,Y;for(d=["`"],f=0,Y=r.quasis.length;f<Y;++f)d.push(this.generateExpression(r.quasis[f],o.Primary,Te)),f+1<Y&&(d.push("${"+F),d.push(this.generateExpression(r.expressions[f],o.Sequence,Te)),d.push(F+"}"));return d.push("`"),d},ModuleSpecifier:function(r,u,l){return this.Literal(r,u,l)},ImportExpression:function(r,u,l){return mo(["import(",this.generateExpression(r.source,o.Assignment,Te),")"],o.Call,u)}},ti(co.prototype,co.Expression),co.prototype.generateExpression=function(r,u,l){var d,f;return f=r.type||t.Property,$.verbatim&&r.hasOwnProperty($.verbatim)?vi(r,u):(d=this[f](r,u,l),$.comment&&(d=ri(r,d)),Gt(d,r))},co.prototype.generateStatement=function(r,u){var l,d;return l=this[r.type](r,u),$.comment&&(l=ri(r,l)),d=Gt(l).toString(),r.type===t.Program&&!Z&&x===""&&d.charAt(d.length-1)===`
`&&(l=S?Gt(l).replaceRight(/\s+$/,""):d.replace(/\s+$/,"")),Gt(l,r)};function Ei(r){var u;if(u=new co,Ye(r))return u.generateStatement(r,eo);if(qe(r))return u.generateExpression(r,o.Sequence,Te);throw new Error("Unknown node type: "+r.type)}function Ai(r,u){var l=ei(),d,f;return u!=null?(typeof u.indent=="string"&&(l.format.indent.style=u.indent),typeof u.base=="number"&&(l.format.indent.base=u.base),u=Cr(l,u),k=u.format.indent.style,typeof u.base=="string"?g=u.base:g=Bn(k,u.format.indent.base)):(u=l,k=u.format.indent.style,g=Bn(k,u.format.indent.base)),A=u.format.json,E=u.format.renumber,U=A?!1:u.format.hexadecimal,z=A?"double":u.format.quotes,L=u.format.escapeless,x=u.format.newline,F=u.format.space,u.format.compact&&(x=F=k=g=""),le=u.format.parentheses,Ae=u.format.semicolons,Z=u.format.safeConcatenation,$e=u.directive,O=A?null:u.parse,S=u.sourceMap,j=u.sourceCode,Q=u.format.preserveBlankLines&&j!==null,$=u,S&&(e.browser?a=V.g.sourceMap.SourceNode:a=kt().SourceNode),d=Ei(r),S?(f=d.toStringWithSourceMap({file:u.file,sourceRoot:u.sourceMapRoot}),u.sourceContent&&f.map.setSourceContent(u.sourceMap,u.sourceContent),u.sourceMapWithCode?f:f.map.toString()):(f={code:d.toString(),map:null},u.sourceMapWithCode?f:f.code)}_e={indent:{style:"",base:0},renumber:!0,hexadecimal:!0,quotes:"auto",escapeless:!0,compact:!0,parentheses:!1,semicolons:!1},Xe=ei().format,e.version=$t().version,e.generate=Ai,e.attachComments=h.attachComments,e.Precedence=Cr({},o),e.browser=!1,e.FORMAT_MINIFY=_e,e.FORMAT_DEFAULTS=Xe})()}}),We={};(0,X.VA)(We,{Node:()=>vo,Parser:()=>Vt,Position:()=>pe,SourceLocation:()=>K,TokContext:()=>go,Token:()=>Ve,TokenType:()=>T,defaultOptions:()=>J,getLineInfo:()=>Qe,isIdentifierChar:()=>wt,isIdentifierStart:()=>Ne,isNewLine:()=>ae,keywordTypes:()=>mt,lineBreak:()=>M,lineBreakG:()=>I,nonASCIIwhitespace:()=>C,parse:()=>wo,parseExpressionAt:()=>Go,tokContexts:()=>Ht,tokTypes:()=>s,tokenizer:()=>Xo,version:()=>Wt});function tt(e,t){for(var o=65536,i=0;i<t.length;i+=2){if(o+=t[i],o>e)return!1;if(o+=t[i+1],o>=e)return!0}}function Ne(e,t){return e<65?e===36:e<91?!0:e<97?e===95:e<123?!0:e<=65535?e>=170&&xo.test(String.fromCharCode(e)):t===!1?!1:tt(e,Yo)}function wt(e,t){return e<48?e===36:e<58?!0:e<65?!1:e<91?!0:e<97?e===95:e<123?!0:e<=65535?e>=170&&Ho.test(String.fromCharCode(e)):t===!1?!1:tt(e,Yo)||tt(e,y)}function Bt(e,t){return new T(e,{beforeExpr:!0,binop:t})}function Oe(e,t){return t===void 0&&(t={}),t.keyword=e,mt[e]=new T(e,t)}function ae(e,t){return e===10||e===13||!t&&(e===8232||e===8233)}function ve(e,t){return G.call(e,t)}function Be(e){return new RegExp("^(?:"+e.replace(/ /g,"|")+")$")}function Qe(e,t){for(var o=1,i=0;;){I.lastIndex=i;var a=I.exec(e);if(a&&a.index<t)++o,i=a.index+a[0].length;else return new pe(o,t-i)}}function At(e){var t={};for(var o in J)t[o]=e&&ve(e,o)?e[o]:J[o];if(t.ecmaVersion>=2015&&(t.ecmaVersion-=2009),t.allowReserved==null&&(t.allowReserved=t.ecmaVersion<5),v(t.onToken)){var i=t.onToken;t.onToken=function(a){return i.push(a)}}return v(t.onComment)&&(t.onComment=Pe(t,t.onComment)),t}function Pe(e,t){return function(o,i,a,h,b,g){var k={type:o?"Block":"Line",value:i,start:a,end:h};e.locations&&(k.loc=new K(this,b,g)),e.ranges&&(k.range=[a,h]),t.push(k)}}function jt(e,t){return H|(e?oe:0)|(t?Ze:0)}function it(){this.shorthandAssign=this.trailingComma=this.parenthesizedAssign=this.parenthesizedBind=this.doubleProto=-1}function Ge(e,t,o,i){return e.type=t,e.end=o,this.options.locations&&(e.loc.end=i),this.options.ranges&&(e.range[1]=o),e}function B(e){var t=ee[e]={binary:Be(Pr[e]+" "+Hn),nonBinary:{General_Category:Be(Hn),Script:Be(N[e])}};t.nonBinary.Script_Extensions=t.nonBinary.Script,t.nonBinary.gc=t.nonBinary.General_Category,t.nonBinary.sc=t.nonBinary.Script,t.nonBinary.scx=t.nonBinary.Script_Extensions}function ie(e){return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode((e>>10)+55296,(e&1023)+56320))}function ot(e){return e===36||e>=40&&e<=43||e===46||e===63||e>=91&&e<=94||e>=123&&e<=125}function Ie(e){return Ne(e,!0)||e===36||e===95}function lt(e){return wt(e,!0)||e===36||e===95||e===8204||e===8205}function dt(e){return e>=65&&e<=90||e>=97&&e<=122}function Pt(e){return e>=0&&e<=1114111}function It(e){return e===100||e===68||e===115||e===83||e===119||e===87}function Jt(e){return dt(e)||e===95}function io(e){return Jt(e)||Po(e)}function Po(e){return e>=48&&e<=57}function qo(e){return e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102}function Wo(e){return e>=65&&e<=70?10+(e-65):e>=97&&e<=102?10+(e-97):e-48}function Lo(e){return e>=48&&e<=55}function hn(e,t){return t?parseInt(e,8):parseFloat(e.replace(/_/g,""))}function Io(e){return typeof BigInt!="function"?null:BigInt(e.replace(/_/g,""))}function Mo(e){return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode((e>>10)+55296,(e&1023)+56320))}function wo(e,t){return Vt.parse(e,t)}function Go(e,t,o){return Vt.parseExpressionAt(e,t,o)}function Xo(e,t){return Vt.tokenizer(e,t)}var Co,Oo,on,Ko,Fo,So,xo,Ho,Yo,y,T,ce,se,mt,s,M,I,C,P,R,G,te,v,pe,K,J,D,H,me,oe,Ze,Ee,bt,St,Dt,Ot,po,qt,Ut,Kt,ut,Vt,yo,to,nn,at,ye,fe,Je,Ce,Re,je,Me,we,Ct,zt,Ft,No,vo,gn,go,Ht,rn,Xn,Kn,Br,Pr,Hn,In,m,w,N,ee,q,de,Ve,Se,vt,Wt,ht=(0,X.E)({"../../node_modules/acorn/dist/acorn.mjs"(){Co={3:"abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",5:"class enum extends super const export import",6:"enum",strict:"implements interface let package private protected public static yield",strictBind:"eval arguments"},Oo="break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",on={5:Oo,"5module":Oo+" export import",6:Oo+" const class extends export import super"},Ko=/^in(stanceof)?$/,Fo="\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC",So="\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF\u1AC0\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F",xo=new RegExp("["+Fo+"]"),Ho=new RegExp("["+Fo+So+"]"),Fo=So=null,Yo=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,107,20,28,22,13,52,76,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8952,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42717,35,4148,12,221,3,5761,15,7472,3104,541,1507,4938],y=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,4759,9,787719,239],T=function(e,t){t===void 0&&(t={}),this.label=e,this.keyword=t.keyword,this.beforeExpr=!!t.beforeExpr,this.startsExpr=!!t.startsExpr,this.isLoop=!!t.isLoop,this.isAssign=!!t.isAssign,this.prefix=!!t.prefix,this.postfix=!!t.postfix,this.binop=t.binop||null,this.updateContext=null},ce={beforeExpr:!0},se={startsExpr:!0},mt={},s={num:new T("num",se),regexp:new T("regexp",se),string:new T("string",se),name:new T("name",se),eof:new T("eof"),bracketL:new T("[",{beforeExpr:!0,startsExpr:!0}),bracketR:new T("]"),braceL:new T("{",{beforeExpr:!0,startsExpr:!0}),braceR:new T("}"),parenL:new T("(",{beforeExpr:!0,startsExpr:!0}),parenR:new T(")"),comma:new T(",",ce),semi:new T(";",ce),colon:new T(":",ce),dot:new T("."),question:new T("?",ce),questionDot:new T("?."),arrow:new T("=>",ce),template:new T("template"),invalidTemplate:new T("invalidTemplate"),ellipsis:new T("...",ce),backQuote:new T("`",se),dollarBraceL:new T("${",{beforeExpr:!0,startsExpr:!0}),eq:new T("=",{beforeExpr:!0,isAssign:!0}),assign:new T("_=",{beforeExpr:!0,isAssign:!0}),incDec:new T("++/--",{prefix:!0,postfix:!0,startsExpr:!0}),prefix:new T("!/~",{beforeExpr:!0,prefix:!0,startsExpr:!0}),logicalOR:Bt("||",1),logicalAND:Bt("&&",2),bitwiseOR:Bt("|",3),bitwiseXOR:Bt("^",4),bitwiseAND:Bt("&",5),equality:Bt("==/!=/===/!==",6),relational:Bt("</>/<=/>=",7),bitShift:Bt("<</>>/>>>",8),plusMin:new T("+/-",{beforeExpr:!0,binop:9,prefix:!0,startsExpr:!0}),modulo:Bt("%",10),star:Bt("*",10),slash:Bt("/",10),starstar:new T("**",{beforeExpr:!0}),coalesce:Bt("??",1),_break:Oe("break"),_case:Oe("case",ce),_catch:Oe("catch"),_continue:Oe("continue"),_debugger:Oe("debugger"),_default:Oe("default",ce),_do:Oe("do",{isLoop:!0,beforeExpr:!0}),_else:Oe("else",ce),_finally:Oe("finally"),_for:Oe("for",{isLoop:!0}),_function:Oe("function",se),_if:Oe("if"),_return:Oe("return",ce),_switch:Oe("switch"),_throw:Oe("throw",ce),_try:Oe("try"),_var:Oe("var"),_const:Oe("const"),_while:Oe("while",{isLoop:!0}),_with:Oe("with"),_new:Oe("new",{beforeExpr:!0,startsExpr:!0}),_this:Oe("this",se),_super:Oe("super",se),_class:Oe("class",se),_extends:Oe("extends",ce),_export:Oe("export"),_import:Oe("import",se),_null:Oe("null",se),_true:Oe("true",se),_false:Oe("false",se),_in:Oe("in",{beforeExpr:!0,binop:7}),_instanceof:Oe("instanceof",{beforeExpr:!0,binop:7}),_typeof:Oe("typeof",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_void:Oe("void",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_delete:Oe("delete",{beforeExpr:!0,prefix:!0,startsExpr:!0})},M=/\r\n?|\n|\u2028|\u2029/,I=new RegExp(M.source,"g"),C=/[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,P=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,R=Object.prototype,G=R.hasOwnProperty,te=R.toString,v=Array.isArray||function(e){return te.call(e)==="[object Array]"},pe=function(e,t){this.line=e,this.column=t},pe.prototype.offset=function(e){return new pe(this.line,this.column+e)},K=function(e,t,o){this.start=t,this.end=o,e.sourceFile!==null&&(this.source=e.sourceFile)},J={ecmaVersion:10,sourceType:"script",onInsertedSemicolon:null,onTrailingComma:null,allowReserved:null,allowReturnOutsideFunction:!1,allowImportExportEverywhere:!1,allowAwaitOutsideFunction:!1,allowHashBang:!1,locations:!1,onToken:null,onComment:null,ranges:!1,program:null,sourceFile:null,directSourceFile:null,preserveParens:!1},D=1,H=2,me=D|H,oe=4,Ze=8,Ee=16,bt=32,St=64,Dt=128,Ot=0,po=1,qt=2,Ut=3,Kt=4,ut=5,Vt=function(e,t,o){this.options=e=At(e),this.sourceFile=e.sourceFile,this.keywords=Be(on[e.ecmaVersion>=6?6:e.sourceType==="module"?"5module":5]);var i="";if(e.allowReserved!==!0){for(var a=e.ecmaVersion;!(i=Co[a]);a--);e.sourceType==="module"&&(i+=" await")}this.reservedWords=Be(i);var h=(i?i+" ":"")+Co.strict;this.reservedWordsStrict=Be(h),this.reservedWordsStrictBind=Be(h+" "+Co.strictBind),this.input=String(t),this.containsEsc=!1,o?(this.pos=o,this.lineStart=this.input.lastIndexOf(`
`,o-1)+1,this.curLine=this.input.slice(0,this.lineStart).split(M).length):(this.pos=this.lineStart=0,this.curLine=1),this.type=s.eof,this.value=null,this.start=this.end=this.pos,this.startLoc=this.endLoc=this.curPosition(),this.lastTokEndLoc=this.lastTokStartLoc=null,this.lastTokStart=this.lastTokEnd=this.pos,this.context=this.initialContext(),this.exprAllowed=!0,this.inModule=e.sourceType==="module",this.strict=this.inModule||this.strictDirective(this.pos),this.potentialArrowAt=-1,this.yieldPos=this.awaitPos=this.awaitIdentPos=0,this.labels=[],this.undefinedExports={},this.pos===0&&e.allowHashBang&&this.input.slice(0,2)==="#!"&&this.skipLineComment(2),this.scopeStack=[],this.enterScope(D),this.regexpState=null},yo={inFunction:{configurable:!0},inGenerator:{configurable:!0},inAsync:{configurable:!0},allowSuper:{configurable:!0},allowDirectSuper:{configurable:!0},treatFunctionsAsVar:{configurable:!0}},Vt.prototype.parse=function(){var e=this.options.program||this.startNode();return this.nextToken(),this.parseTopLevel(e)},yo.inFunction.get=function(){return(this.currentVarScope().flags&H)>0},yo.inGenerator.get=function(){return(this.currentVarScope().flags&Ze)>0},yo.inAsync.get=function(){return(this.currentVarScope().flags&oe)>0},yo.allowSuper.get=function(){return(this.currentThisScope().flags&St)>0},yo.allowDirectSuper.get=function(){return(this.currentThisScope().flags&Dt)>0},yo.treatFunctionsAsVar.get=function(){return this.treatFunctionsAsVarInScope(this.currentScope())},Vt.prototype.inNonArrowFunction=function(){return(this.currentThisScope().flags&H)>0},Vt.extend=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var o=this,i=0;i<e.length;i++)o=e[i](o);return o},Vt.parse=function(e,t){return new this(t,e).parse()},Vt.parseExpressionAt=function(e,t,o){var i=new this(o,e,t);return i.nextToken(),i.parseExpression()},Vt.tokenizer=function(e,t){return new this(t,e)},Object.defineProperties(Vt.prototype,yo),to=Vt.prototype,nn=/^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/,to.strictDirective=function(e){for(;;){P.lastIndex=e,e+=P.exec(this.input)[0].length;var t=nn.exec(this.input.slice(e));if(!t)return!1;if((t[1]||t[2])==="use strict"){P.lastIndex=e+t[0].length;var o=P.exec(this.input),i=o.index+o[0].length,a=this.input.charAt(i);return a===";"||a==="}"||M.test(o[0])&&!(/[(`.[+\-/*%<>=,?^&]/.test(a)||a==="!"&&this.input.charAt(i+1)==="=")}e+=t[0].length,P.lastIndex=e,e+=P.exec(this.input)[0].length,this.input[e]===";"&&e++}},to.eat=function(e){return this.type===e?(this.next(),!0):!1},to.isContextual=function(e){return this.type===s.name&&this.value===e&&!this.containsEsc},to.eatContextual=function(e){return this.isContextual(e)?(this.next(),!0):!1},to.expectContextual=function(e){this.eatContextual(e)||this.unexpected()},to.canInsertSemicolon=function(){return this.type===s.eof||this.type===s.braceR||M.test(this.input.slice(this.lastTokEnd,this.start))},to.insertSemicolon=function(){if(this.canInsertSemicolon())return this.options.onInsertedSemicolon&&this.options.onInsertedSemicolon(this.lastTokEnd,this.lastTokEndLoc),!0},to.semicolon=function(){!this.eat(s.semi)&&!this.insertSemicolon()&&this.unexpected()},to.afterTrailingComma=function(e,t){if(this.type===e)return this.options.onTrailingComma&&this.options.onTrailingComma(this.lastTokStart,this.lastTokStartLoc),t||this.next(),!0},to.expect=function(e){this.eat(e)||this.unexpected()},to.unexpected=function(e){this.raise(e??this.start,"Unexpected token")},to.checkPatternErrors=function(e,t){if(e){e.trailingComma>-1&&this.raiseRecoverable(e.trailingComma,"Comma is not permitted after the rest element");var o=t?e.parenthesizedAssign:e.parenthesizedBind;o>-1&&this.raiseRecoverable(o,"Parenthesized pattern")}},to.checkExpressionErrors=function(e,t){if(!e)return!1;var o=e.shorthandAssign,i=e.doubleProto;if(!t)return o>=0||i>=0;o>=0&&this.raise(o,"Shorthand property assignments are valid only in destructuring patterns"),i>=0&&this.raiseRecoverable(i,"Redefinition of __proto__ property")},to.checkYieldAwaitInDefaultParams=function(){this.yieldPos&&(!this.awaitPos||this.yieldPos<this.awaitPos)&&this.raise(this.yieldPos,"Yield expression cannot be a default value"),this.awaitPos&&this.raise(this.awaitPos,"Await expression cannot be a default value")},to.isSimpleAssignTarget=function(e){return e.type==="ParenthesizedExpression"?this.isSimpleAssignTarget(e.expression):e.type==="Identifier"||e.type==="MemberExpression"},at=Vt.prototype,at.parseTopLevel=function(e){var t={};for(e.body||(e.body=[]);this.type!==s.eof;){var o=this.parseStatement(null,!0,t);e.body.push(o)}if(this.inModule)for(var i=0,a=Object.keys(this.undefinedExports);i<a.length;i+=1){var h=a[i];this.raiseRecoverable(this.undefinedExports[h].start,"Export '"+h+"' is not defined")}return this.adaptDirectivePrologue(e.body),this.next(),e.sourceType=this.options.sourceType,this.finishNode(e,"Program")},ye={kind:"loop"},fe={kind:"switch"},at.isLet=function(e){if(this.options.ecmaVersion<6||!this.isContextual("let"))return!1;P.lastIndex=this.pos;var t=P.exec(this.input),o=this.pos+t[0].length,i=this.input.charCodeAt(o);if(i===91)return!0;if(e)return!1;if(i===123)return!0;if(Ne(i,!0)){for(var a=o+1;wt(this.input.charCodeAt(a),!0);)++a;var h=this.input.slice(o,a);if(!Ko.test(h))return!0}return!1},at.isAsyncFunction=function(){if(this.options.ecmaVersion<8||!this.isContextual("async"))return!1;P.lastIndex=this.pos;var e=P.exec(this.input),t=this.pos+e[0].length;return!M.test(this.input.slice(this.pos,t))&&this.input.slice(t,t+8)==="function"&&(t+8===this.input.length||!wt(this.input.charAt(t+8)))},at.parseStatement=function(e,t,o){var i=this.type,a=this.startNode(),h;switch(this.isLet(e)&&(i=s._var,h="let"),i){case s._break:case s._continue:return this.parseBreakContinueStatement(a,i.keyword);case s._debugger:return this.parseDebuggerStatement(a);case s._do:return this.parseDoStatement(a);case s._for:return this.parseForStatement(a);case s._function:return e&&(this.strict||e!=="if"&&e!=="label")&&this.options.ecmaVersion>=6&&this.unexpected(),this.parseFunctionStatement(a,!1,!e);case s._class:return e&&this.unexpected(),this.parseClass(a,!0);case s._if:return this.parseIfStatement(a);case s._return:return this.parseReturnStatement(a);case s._switch:return this.parseSwitchStatement(a);case s._throw:return this.parseThrowStatement(a);case s._try:return this.parseTryStatement(a);case s._const:case s._var:return h=h||this.value,e&&h!=="var"&&this.unexpected(),this.parseVarStatement(a,h);case s._while:return this.parseWhileStatement(a);case s._with:return this.parseWithStatement(a);case s.braceL:return this.parseBlock(!0,a);case s.semi:return this.parseEmptyStatement(a);case s._export:case s._import:if(this.options.ecmaVersion>10&&i===s._import){P.lastIndex=this.pos;var b=P.exec(this.input),g=this.pos+b[0].length,k=this.input.charCodeAt(g);if(k===40||k===46)return this.parseExpressionStatement(a,this.parseExpression())}return this.options.allowImportExportEverywhere||(t||this.raise(this.start,"'import' and 'export' may only appear at the top level"),this.inModule||this.raise(this.start,"'import' and 'export' may appear only with 'sourceType: module'")),i===s._import?this.parseImport(a):this.parseExport(a,o);default:if(this.isAsyncFunction())return e&&this.unexpected(),this.next(),this.parseFunctionStatement(a,!0,!e);var A=this.value,E=this.parseExpression();return i===s.name&&E.type==="Identifier"&&this.eat(s.colon)?this.parseLabeledStatement(a,A,E,e):this.parseExpressionStatement(a,E)}},at.parseBreakContinueStatement=function(e,t){var o=t==="break";this.next(),this.eat(s.semi)||this.insertSemicolon()?e.label=null:this.type!==s.name?this.unexpected():(e.label=this.parseIdent(),this.semicolon());for(var i=0;i<this.labels.length;++i){var a=this.labels[i];if((e.label==null||a.name===e.label.name)&&(a.kind!=null&&(o||a.kind==="loop")||e.label&&o))break}return i===this.labels.length&&this.raise(e.start,"Unsyntactic "+t),this.finishNode(e,o?"BreakStatement":"ContinueStatement")},at.parseDebuggerStatement=function(e){return this.next(),this.semicolon(),this.finishNode(e,"DebuggerStatement")},at.parseDoStatement=function(e){return this.next(),this.labels.push(ye),e.body=this.parseStatement("do"),this.labels.pop(),this.expect(s._while),e.test=this.parseParenExpression(),this.options.ecmaVersion>=6?this.eat(s.semi):this.semicolon(),this.finishNode(e,"DoWhileStatement")},at.parseForStatement=function(e){this.next();var t=this.options.ecmaVersion>=9&&(this.inAsync||!this.inFunction&&this.options.allowAwaitOutsideFunction)&&this.eatContextual("await")?this.lastTokStart:-1;if(this.labels.push(ye),this.enterScope(0),this.expect(s.parenL),this.type===s.semi)return t>-1&&this.unexpected(t),this.parseFor(e,null);var o=this.isLet();if(this.type===s._var||this.type===s._const||o){var i=this.startNode(),a=o?"let":this.value;return this.next(),this.parseVar(i,!0,a),this.finishNode(i,"VariableDeclaration"),(this.type===s._in||this.options.ecmaVersion>=6&&this.isContextual("of"))&&i.declarations.length===1?(this.options.ecmaVersion>=9&&(this.type===s._in?t>-1&&this.unexpected(t):e.await=t>-1),this.parseForIn(e,i)):(t>-1&&this.unexpected(t),this.parseFor(e,i))}var h=new it,b=this.parseExpression(!0,h);return this.type===s._in||this.options.ecmaVersion>=6&&this.isContextual("of")?(this.options.ecmaVersion>=9&&(this.type===s._in?t>-1&&this.unexpected(t):e.await=t>-1),this.toAssignable(b,!1,h),this.checkLVal(b),this.parseForIn(e,b)):(this.checkExpressionErrors(h,!0),t>-1&&this.unexpected(t),this.parseFor(e,b))},at.parseFunctionStatement=function(e,t,o){return this.next(),this.parseFunction(e,Ce|(o?0:Re),!1,t)},at.parseIfStatement=function(e){return this.next(),e.test=this.parseParenExpression(),e.consequent=this.parseStatement("if"),e.alternate=this.eat(s._else)?this.parseStatement("if"):null,this.finishNode(e,"IfStatement")},at.parseReturnStatement=function(e){return!this.inFunction&&!this.options.allowReturnOutsideFunction&&this.raise(this.start,"'return' outside of function"),this.next(),this.eat(s.semi)||this.insertSemicolon()?e.argument=null:(e.argument=this.parseExpression(),this.semicolon()),this.finishNode(e,"ReturnStatement")},at.parseSwitchStatement=function(e){this.next(),e.discriminant=this.parseParenExpression(),e.cases=[],this.expect(s.braceL),this.labels.push(fe),this.enterScope(0);for(var t,o=!1;this.type!==s.braceR;)if(this.type===s._case||this.type===s._default){var i=this.type===s._case;t&&this.finishNode(t,"SwitchCase"),e.cases.push(t=this.startNode()),t.consequent=[],this.next(),i?t.test=this.parseExpression():(o&&this.raiseRecoverable(this.lastTokStart,"Multiple default clauses"),o=!0,t.test=null),this.expect(s.colon)}else t||this.unexpected(),t.consequent.push(this.parseStatement(null));return this.exitScope(),t&&this.finishNode(t,"SwitchCase"),this.next(),this.labels.pop(),this.finishNode(e,"SwitchStatement")},at.parseThrowStatement=function(e){return this.next(),M.test(this.input.slice(this.lastTokEnd,this.start))&&this.raise(this.lastTokEnd,"Illegal newline after throw"),e.argument=this.parseExpression(),this.semicolon(),this.finishNode(e,"ThrowStatement")},Je=[],at.parseTryStatement=function(e){if(this.next(),e.block=this.parseBlock(),e.handler=null,this.type===s._catch){var t=this.startNode();if(this.next(),this.eat(s.parenL)){t.param=this.parseBindingAtom();var o=t.param.type==="Identifier";this.enterScope(o?bt:0),this.checkLVal(t.param,o?Kt:qt),this.expect(s.parenR)}else this.options.ecmaVersion<10&&this.unexpected(),t.param=null,this.enterScope(0);t.body=this.parseBlock(!1),this.exitScope(),e.handler=this.finishNode(t,"CatchClause")}return e.finalizer=this.eat(s._finally)?this.parseBlock():null,!e.handler&&!e.finalizer&&this.raise(e.start,"Missing catch or finally clause"),this.finishNode(e,"TryStatement")},at.parseVarStatement=function(e,t){return this.next(),this.parseVar(e,!1,t),this.semicolon(),this.finishNode(e,"VariableDeclaration")},at.parseWhileStatement=function(e){return this.next(),e.test=this.parseParenExpression(),this.labels.push(ye),e.body=this.parseStatement("while"),this.labels.pop(),this.finishNode(e,"WhileStatement")},at.parseWithStatement=function(e){return this.strict&&this.raise(this.start,"'with' in strict mode"),this.next(),e.object=this.parseParenExpression(),e.body=this.parseStatement("with"),this.finishNode(e,"WithStatement")},at.parseEmptyStatement=function(e){return this.next(),this.finishNode(e,"EmptyStatement")},at.parseLabeledStatement=function(e,t,o,i){for(var a=0,h=this.labels;a<h.length;a+=1){var b=h[a];b.name===t&&this.raise(o.start,"Label '"+t+"' is already declared")}for(var g=this.type.isLoop?"loop":this.type===s._switch?"switch":null,k=this.labels.length-1;k>=0;k--){var A=this.labels[k];if(A.statementStart===e.start)A.statementStart=this.start,A.kind=g;else break}return this.labels.push({name:t,kind:g,statementStart:this.start}),e.body=this.parseStatement(i?i.indexOf("label")===-1?i+"label":i:"label"),this.labels.pop(),e.label=o,this.finishNode(e,"LabeledStatement")},at.parseExpressionStatement=function(e,t){return e.expression=t,this.semicolon(),this.finishNode(e,"ExpressionStatement")},at.parseBlock=function(e,t,o){for(e===void 0&&(e=!0),t===void 0&&(t=this.startNode()),t.body=[],this.expect(s.braceL),e&&this.enterScope(0);this.type!==s.braceR;){var i=this.parseStatement(null);t.body.push(i)}return o&&(this.strict=!1),this.next(),e&&this.exitScope(),this.finishNode(t,"BlockStatement")},at.parseFor=function(e,t){return e.init=t,this.expect(s.semi),e.test=this.type===s.semi?null:this.parseExpression(),this.expect(s.semi),e.update=this.type===s.parenR?null:this.parseExpression(),this.expect(s.parenR),e.body=this.parseStatement("for"),this.exitScope(),this.labels.pop(),this.finishNode(e,"ForStatement")},at.parseForIn=function(e,t){var o=this.type===s._in;return this.next(),t.type==="VariableDeclaration"&&t.declarations[0].init!=null&&(!o||this.options.ecmaVersion<8||this.strict||t.kind!=="var"||t.declarations[0].id.type!=="Identifier")?this.raise(t.start,(o?"for-in":"for-of")+" loop variable declaration may not have an initializer"):t.type==="AssignmentPattern"&&this.raise(t.start,"Invalid left-hand side in for-loop"),e.left=t,e.right=o?this.parseExpression():this.parseMaybeAssign(),this.expect(s.parenR),e.body=this.parseStatement("for"),this.exitScope(),this.labels.pop(),this.finishNode(e,o?"ForInStatement":"ForOfStatement")},at.parseVar=function(e,t,o){for(e.declarations=[],e.kind=o;;){var i=this.startNode();if(this.parseVarId(i,o),this.eat(s.eq)?i.init=this.parseMaybeAssign(t):o==="const"&&!(this.type===s._in||this.options.ecmaVersion>=6&&this.isContextual("of"))?this.unexpected():i.id.type!=="Identifier"&&!(t&&(this.type===s._in||this.isContextual("of")))?this.raise(this.lastTokEnd,"Complex binding patterns require an initialization value"):i.init=null,e.declarations.push(this.finishNode(i,"VariableDeclarator")),!this.eat(s.comma))break}return e},at.parseVarId=function(e,t){e.id=this.parseBindingAtom(),this.checkLVal(e.id,t==="var"?po:qt,!1)},Ce=1,Re=2,je=4,at.parseFunction=function(e,t,o,i){this.initFunction(e),(this.options.ecmaVersion>=9||this.options.ecmaVersion>=6&&!i)&&(this.type===s.star&&t&Re&&this.unexpected(),e.generator=this.eat(s.star)),this.options.ecmaVersion>=8&&(e.async=!!i),t&Ce&&(e.id=t&je&&this.type!==s.name?null:this.parseIdent(),e.id&&!(t&Re)&&this.checkLVal(e.id,this.strict||e.generator||e.async?this.treatFunctionsAsVar?po:qt:Ut));var a=this.yieldPos,h=this.awaitPos,b=this.awaitIdentPos;return this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,this.enterScope(jt(e.async,e.generator)),t&Ce||(e.id=this.type===s.name?this.parseIdent():null),this.parseFunctionParams(e),this.parseFunctionBody(e,o,!1),this.yieldPos=a,this.awaitPos=h,this.awaitIdentPos=b,this.finishNode(e,t&Ce?"FunctionDeclaration":"FunctionExpression")},at.parseFunctionParams=function(e){this.expect(s.parenL),e.params=this.parseBindingList(s.parenR,!1,this.options.ecmaVersion>=8),this.checkYieldAwaitInDefaultParams()},at.parseClass=function(e,t){this.next();var o=this.strict;this.strict=!0,this.parseClassId(e,t),this.parseClassSuper(e);var i=this.startNode(),a=!1;for(i.body=[],this.expect(s.braceL);this.type!==s.braceR;){var h=this.parseClassElement(e.superClass!==null);h&&(i.body.push(h),h.type==="MethodDefinition"&&h.kind==="constructor"&&(a&&this.raise(h.start,"Duplicate constructor in the same class"),a=!0))}return this.strict=o,this.next(),e.body=this.finishNode(i,"ClassBody"),this.finishNode(e,t?"ClassDeclaration":"ClassExpression")},at.parseClassElement=function(e){var t=this;if(this.eat(s.semi))return null;var o=this.startNode(),i=function(k,A){A===void 0&&(A=!1);var E=t.start,U=t.startLoc;return t.eatContextual(k)?t.type!==s.parenL&&(!A||!t.canInsertSemicolon())?!0:(o.key&&t.unexpected(),o.computed=!1,o.key=t.startNodeAt(E,U),o.key.name=k,t.finishNode(o.key,"Identifier"),!1):!1};o.kind="method",o.static=i("static");var a=this.eat(s.star),h=!1;a||(this.options.ecmaVersion>=8&&i("async",!0)?(h=!0,a=this.options.ecmaVersion>=9&&this.eat(s.star)):i("get")?o.kind="get":i("set")&&(o.kind="set")),o.key||this.parsePropertyName(o);var b=o.key,g=!1;return!o.computed&&!o.static&&(b.type==="Identifier"&&b.name==="constructor"||b.type==="Literal"&&b.value==="constructor")?(o.kind!=="method"&&this.raise(b.start,"Constructor can't have get/set modifier"),a&&this.raise(b.start,"Constructor can't be a generator"),h&&this.raise(b.start,"Constructor can't be an async method"),o.kind="constructor",g=e):o.static&&b.type==="Identifier"&&b.name==="prototype"&&this.raise(b.start,"Classes may not have a static property named prototype"),this.parseClassMethod(o,a,h,g),o.kind==="get"&&o.value.params.length!==0&&this.raiseRecoverable(o.value.start,"getter should have no params"),o.kind==="set"&&o.value.params.length!==1&&this.raiseRecoverable(o.value.start,"setter should have exactly one param"),o.kind==="set"&&o.value.params[0].type==="RestElement"&&this.raiseRecoverable(o.value.params[0].start,"Setter cannot use rest params"),o},at.parseClassMethod=function(e,t,o,i){return e.value=this.parseMethod(t,o,i),this.finishNode(e,"MethodDefinition")},at.parseClassId=function(e,t){this.type===s.name?(e.id=this.parseIdent(),t&&this.checkLVal(e.id,qt,!1)):(t===!0&&this.unexpected(),e.id=null)},at.parseClassSuper=function(e){e.superClass=this.eat(s._extends)?this.parseExprSubscripts():null},at.parseExport=function(e,t){if(this.next(),this.eat(s.star))return this.options.ecmaVersion>=11&&(this.eatContextual("as")?(e.exported=this.parseIdent(!0),this.checkExport(t,e.exported.name,this.lastTokStart)):e.exported=null),this.expectContextual("from"),this.type!==s.string&&this.unexpected(),e.source=this.parseExprAtom(),this.semicolon(),this.finishNode(e,"ExportAllDeclaration");if(this.eat(s._default)){this.checkExport(t,"default",this.lastTokStart);var o;if(this.type===s._function||(o=this.isAsyncFunction())){var i=this.startNode();this.next(),o&&this.next(),e.declaration=this.parseFunction(i,Ce|je,!1,o)}else if(this.type===s._class){var a=this.startNode();e.declaration=this.parseClass(a,"nullableID")}else e.declaration=this.parseMaybeAssign(),this.semicolon();return this.finishNode(e,"ExportDefaultDeclaration")}if(this.shouldParseExportStatement())e.declaration=this.parseStatement(null),e.declaration.type==="VariableDeclaration"?this.checkVariableExport(t,e.declaration.declarations):this.checkExport(t,e.declaration.id.name,e.declaration.id.start),e.specifiers=[],e.source=null;else{if(e.declaration=null,e.specifiers=this.parseExportSpecifiers(t),this.eatContextual("from"))this.type!==s.string&&this.unexpected(),e.source=this.parseExprAtom();else{for(var h=0,b=e.specifiers;h<b.length;h+=1){var g=b[h];this.checkUnreserved(g.local),this.checkLocalExport(g.local)}e.source=null}this.semicolon()}return this.finishNode(e,"ExportNamedDeclaration")},at.checkExport=function(e,t,o){e&&(ve(e,t)&&this.raiseRecoverable(o,"Duplicate export '"+t+"'"),e[t]=!0)},at.checkPatternExport=function(e,t){var o=t.type;if(o==="Identifier")this.checkExport(e,t.name,t.start);else if(o==="ObjectPattern")for(var i=0,a=t.properties;i<a.length;i+=1){var h=a[i];this.checkPatternExport(e,h)}else if(o==="ArrayPattern")for(var b=0,g=t.elements;b<g.length;b+=1){var k=g[b];k&&this.checkPatternExport(e,k)}else o==="Property"?this.checkPatternExport(e,t.value):o==="AssignmentPattern"?this.checkPatternExport(e,t.left):o==="RestElement"?this.checkPatternExport(e,t.argument):o==="ParenthesizedExpression"&&this.checkPatternExport(e,t.expression)},at.checkVariableExport=function(e,t){if(e)for(var o=0,i=t;o<i.length;o+=1){var a=i[o];this.checkPatternExport(e,a.id)}},at.shouldParseExportStatement=function(){return this.type.keyword==="var"||this.type.keyword==="const"||this.type.keyword==="class"||this.type.keyword==="function"||this.isLet()||this.isAsyncFunction()},at.parseExportSpecifiers=function(e){var t=[],o=!0;for(this.expect(s.braceL);!this.eat(s.braceR);){if(o)o=!1;else if(this.expect(s.comma),this.afterTrailingComma(s.braceR))break;var i=this.startNode();i.local=this.parseIdent(!0),i.exported=this.eatContextual("as")?this.parseIdent(!0):i.local,this.checkExport(e,i.exported.name,i.exported.start),t.push(this.finishNode(i,"ExportSpecifier"))}return t},at.parseImport=function(e){return this.next(),this.type===s.string?(e.specifiers=Je,e.source=this.parseExprAtom()):(e.specifiers=this.parseImportSpecifiers(),this.expectContextual("from"),e.source=this.type===s.string?this.parseExprAtom():this.unexpected()),this.semicolon(),this.finishNode(e,"ImportDeclaration")},at.parseImportSpecifiers=function(){var e=[],t=!0;if(this.type===s.name){var o=this.startNode();if(o.local=this.parseIdent(),this.checkLVal(o.local,qt),e.push(this.finishNode(o,"ImportDefaultSpecifier")),!this.eat(s.comma))return e}if(this.type===s.star){var i=this.startNode();return this.next(),this.expectContextual("as"),i.local=this.parseIdent(),this.checkLVal(i.local,qt),e.push(this.finishNode(i,"ImportNamespaceSpecifier")),e}for(this.expect(s.braceL);!this.eat(s.braceR);){if(t)t=!1;else if(this.expect(s.comma),this.afterTrailingComma(s.braceR))break;var a=this.startNode();a.imported=this.parseIdent(!0),this.eatContextual("as")?a.local=this.parseIdent():(this.checkUnreserved(a.imported),a.local=a.imported),this.checkLVal(a.local,qt),e.push(this.finishNode(a,"ImportSpecifier"))}return e},at.adaptDirectivePrologue=function(e){for(var t=0;t<e.length&&this.isDirectiveCandidate(e[t]);++t)e[t].directive=e[t].expression.raw.slice(1,-1)},at.isDirectiveCandidate=function(e){return e.type==="ExpressionStatement"&&e.expression.type==="Literal"&&typeof e.expression.value=="string"&&(this.input[e.start]==='"'||this.input[e.start]==="'")},Me=Vt.prototype,Me.toAssignable=function(e,t,o){if(this.options.ecmaVersion>=6&&e)switch(e.type){case"Identifier":this.inAsync&&e.name==="await"&&this.raise(e.start,"Cannot use 'await' as identifier inside an async function");break;case"ObjectPattern":case"ArrayPattern":case"RestElement":break;case"ObjectExpression":e.type="ObjectPattern",o&&this.checkPatternErrors(o,!0);for(var i=0,a=e.properties;i<a.length;i+=1){var h=a[i];this.toAssignable(h,t),h.type==="RestElement"&&(h.argument.type==="ArrayPattern"||h.argument.type==="ObjectPattern")&&this.raise(h.argument.start,"Unexpected token")}break;case"Property":e.kind!=="init"&&this.raise(e.key.start,"Object pattern can't contain getter or setter"),this.toAssignable(e.value,t);break;case"ArrayExpression":e.type="ArrayPattern",o&&this.checkPatternErrors(o,!0),this.toAssignableList(e.elements,t);break;case"SpreadElement":e.type="RestElement",this.toAssignable(e.argument,t),e.argument.type==="AssignmentPattern"&&this.raise(e.argument.start,"Rest elements cannot have a default value");break;case"AssignmentExpression":e.operator!=="="&&this.raise(e.left.end,"Only '=' operator can be used for specifying default value."),e.type="AssignmentPattern",delete e.operator,this.toAssignable(e.left,t);case"AssignmentPattern":break;case"ParenthesizedExpression":this.toAssignable(e.expression,t,o);break;case"ChainExpression":this.raiseRecoverable(e.start,"Optional chaining cannot appear in left-hand side");break;case"MemberExpression":if(!t)break;default:this.raise(e.start,"Assigning to rvalue")}else o&&this.checkPatternErrors(o,!0);return e},Me.toAssignableList=function(e,t){for(var o=e.length,i=0;i<o;i++){var a=e[i];a&&this.toAssignable(a,t)}if(o){var h=e[o-1];this.options.ecmaVersion===6&&t&&h&&h.type==="RestElement"&&h.argument.type!=="Identifier"&&this.unexpected(h.argument.start)}return e},Me.parseSpread=function(e){var t=this.startNode();return this.next(),t.argument=this.parseMaybeAssign(!1,e),this.finishNode(t,"SpreadElement")},Me.parseRestBinding=function(){var e=this.startNode();return this.next(),this.options.ecmaVersion===6&&this.type!==s.name&&this.unexpected(),e.argument=this.parseBindingAtom(),this.finishNode(e,"RestElement")},Me.parseBindingAtom=function(){if(this.options.ecmaVersion>=6)switch(this.type){case s.bracketL:var e=this.startNode();return this.next(),e.elements=this.parseBindingList(s.bracketR,!0,!0),this.finishNode(e,"ArrayPattern");case s.braceL:return this.parseObj(!0)}return this.parseIdent()},Me.parseBindingList=function(e,t,o){for(var i=[],a=!0;!this.eat(e);)if(a?a=!1:this.expect(s.comma),t&&this.type===s.comma)i.push(null);else{if(o&&this.afterTrailingComma(e))break;if(this.type===s.ellipsis){var h=this.parseRestBinding();this.parseBindingListItem(h),i.push(h),this.type===s.comma&&this.raise(this.start,"Comma is not permitted after the rest element"),this.expect(e);break}else{var b=this.parseMaybeDefault(this.start,this.startLoc);this.parseBindingListItem(b),i.push(b)}}return i},Me.parseBindingListItem=function(e){return e},Me.parseMaybeDefault=function(e,t,o){if(o=o||this.parseBindingAtom(),this.options.ecmaVersion<6||!this.eat(s.eq))return o;var i=this.startNodeAt(e,t);return i.left=o,i.right=this.parseMaybeAssign(),this.finishNode(i,"AssignmentPattern")},Me.checkLVal=function(e,t,o){switch(t===void 0&&(t=Ot),e.type){case"Identifier":t===qt&&e.name==="let"&&this.raiseRecoverable(e.start,"let is disallowed as a lexically bound name"),this.strict&&this.reservedWordsStrictBind.test(e.name)&&this.raiseRecoverable(e.start,(t?"Binding ":"Assigning to ")+e.name+" in strict mode"),o&&(ve(o,e.name)&&this.raiseRecoverable(e.start,"Argument name clash"),o[e.name]=!0),t!==Ot&&t!==ut&&this.declareName(e.name,t,e.start);break;case"ChainExpression":this.raiseRecoverable(e.start,"Optional chaining cannot appear in left-hand side");break;case"MemberExpression":t&&this.raiseRecoverable(e.start,"Binding member expression");break;case"ObjectPattern":for(var i=0,a=e.properties;i<a.length;i+=1){var h=a[i];this.checkLVal(h,t,o)}break;case"Property":this.checkLVal(e.value,t,o);break;case"ArrayPattern":for(var b=0,g=e.elements;b<g.length;b+=1){var k=g[b];k&&this.checkLVal(k,t,o)}break;case"AssignmentPattern":this.checkLVal(e.left,t,o);break;case"RestElement":this.checkLVal(e.argument,t,o);break;case"ParenthesizedExpression":this.checkLVal(e.expression,t,o);break;default:this.raise(e.start,(t?"Binding":"Assigning to")+" rvalue")}},we=Vt.prototype,we.checkPropClash=function(e,t,o){if(!(this.options.ecmaVersion>=9&&e.type==="SpreadElement")&&!(this.options.ecmaVersion>=6&&(e.computed||e.method||e.shorthand))){var i=e.key,a;switch(i.type){case"Identifier":a=i.name;break;case"Literal":a=String(i.value);break;default:return}var h=e.kind;if(this.options.ecmaVersion>=6){a==="__proto__"&&h==="init"&&(t.proto&&(o?o.doubleProto<0&&(o.doubleProto=i.start):this.raiseRecoverable(i.start,"Redefinition of __proto__ property")),t.proto=!0);return}a="$"+a;var b=t[a];if(b){var g;h==="init"?g=this.strict&&b.init||b.get||b.set:g=b.init||b[h],g&&this.raiseRecoverable(i.start,"Redefinition of property")}else b=t[a]={init:!1,get:!1,set:!1};b[h]=!0}},we.parseExpression=function(e,t){var o=this.start,i=this.startLoc,a=this.parseMaybeAssign(e,t);if(this.type===s.comma){var h=this.startNodeAt(o,i);for(h.expressions=[a];this.eat(s.comma);)h.expressions.push(this.parseMaybeAssign(e,t));return this.finishNode(h,"SequenceExpression")}return a},we.parseMaybeAssign=function(e,t,o){if(this.isContextual("yield")){if(this.inGenerator)return this.parseYield(e);this.exprAllowed=!1}var i=!1,a=-1,h=-1;t?(a=t.parenthesizedAssign,h=t.trailingComma,t.parenthesizedAssign=t.trailingComma=-1):(t=new it,i=!0);var b=this.start,g=this.startLoc;(this.type===s.parenL||this.type===s.name)&&(this.potentialArrowAt=this.start);var k=this.parseMaybeConditional(e,t);if(o&&(k=o.call(this,k,b,g)),this.type.isAssign){var A=this.startNodeAt(b,g);return A.operator=this.value,A.left=this.type===s.eq?this.toAssignable(k,!1,t):k,i||(t.parenthesizedAssign=t.trailingComma=t.doubleProto=-1),t.shorthandAssign>=A.left.start&&(t.shorthandAssign=-1),this.checkLVal(k),this.next(),A.right=this.parseMaybeAssign(e),this.finishNode(A,"AssignmentExpression")}else i&&this.checkExpressionErrors(t,!0);return a>-1&&(t.parenthesizedAssign=a),h>-1&&(t.trailingComma=h),k},we.parseMaybeConditional=function(e,t){var o=this.start,i=this.startLoc,a=this.parseExprOps(e,t);if(this.checkExpressionErrors(t))return a;if(this.eat(s.question)){var h=this.startNodeAt(o,i);return h.test=a,h.consequent=this.parseMaybeAssign(),this.expect(s.colon),h.alternate=this.parseMaybeAssign(e),this.finishNode(h,"ConditionalExpression")}return a},we.parseExprOps=function(e,t){var o=this.start,i=this.startLoc,a=this.parseMaybeUnary(t,!1);return this.checkExpressionErrors(t)||a.start===o&&a.type==="ArrowFunctionExpression"?a:this.parseExprOp(a,o,i,-1,e)},we.parseExprOp=function(e,t,o,i,a){var h=this.type.binop;if(h!=null&&(!a||this.type!==s._in)&&h>i){var b=this.type===s.logicalOR||this.type===s.logicalAND,g=this.type===s.coalesce;g&&(h=s.logicalAND.binop);var k=this.value;this.next();var A=this.start,E=this.startLoc,U=this.parseExprOp(this.parseMaybeUnary(null,!1),A,E,h,a),z=this.buildBinary(t,o,e,U,k,b||g);return(b&&this.type===s.coalesce||g&&(this.type===s.logicalOR||this.type===s.logicalAND))&&this.raiseRecoverable(this.start,"Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"),this.parseExprOp(z,t,o,i,a)}return e},we.buildBinary=function(e,t,o,i,a,h){var b=this.startNodeAt(e,t);return b.left=o,b.operator=a,b.right=i,this.finishNode(b,h?"LogicalExpression":"BinaryExpression")},we.parseMaybeUnary=function(e,t){var o=this.start,i=this.startLoc,a;if(this.isContextual("await")&&(this.inAsync||!this.inFunction&&this.options.allowAwaitOutsideFunction))a=this.parseAwait(),t=!0;else if(this.type.prefix){var h=this.startNode(),b=this.type===s.incDec;h.operator=this.value,h.prefix=!0,this.next(),h.argument=this.parseMaybeUnary(null,!0),this.checkExpressionErrors(e,!0),b?this.checkLVal(h.argument):this.strict&&h.operator==="delete"&&h.argument.type==="Identifier"?this.raiseRecoverable(h.start,"Deleting local variable in strict mode"):t=!0,a=this.finishNode(h,b?"UpdateExpression":"UnaryExpression")}else{if(a=this.parseExprSubscripts(e),this.checkExpressionErrors(e))return a;for(;this.type.postfix&&!this.canInsertSemicolon();){var g=this.startNodeAt(o,i);g.operator=this.value,g.prefix=!1,g.argument=a,this.checkLVal(a),this.next(),a=this.finishNode(g,"UpdateExpression")}}return!t&&this.eat(s.starstar)?this.buildBinary(o,i,a,this.parseMaybeUnary(null,!1),"**",!1):a},we.parseExprSubscripts=function(e){var t=this.start,o=this.startLoc,i=this.parseExprAtom(e);if(i.type==="ArrowFunctionExpression"&&this.input.slice(this.lastTokStart,this.lastTokEnd)!==")")return i;var a=this.parseSubscripts(i,t,o);return e&&a.type==="MemberExpression"&&(e.parenthesizedAssign>=a.start&&(e.parenthesizedAssign=-1),e.parenthesizedBind>=a.start&&(e.parenthesizedBind=-1)),a},we.parseSubscripts=function(e,t,o,i){for(var a=this.options.ecmaVersion>=8&&e.type==="Identifier"&&e.name==="async"&&this.lastTokEnd===e.end&&!this.canInsertSemicolon()&&e.end-e.start===5&&this.potentialArrowAt===e.start,h=!1;;){var b=this.parseSubscript(e,t,o,i,a,h);if(b.optional&&(h=!0),b===e||b.type==="ArrowFunctionExpression"){if(h){var g=this.startNodeAt(t,o);g.expression=b,b=this.finishNode(g,"ChainExpression")}return b}e=b}},we.parseSubscript=function(e,t,o,i,a,h){var b=this.options.ecmaVersion>=11,g=b&&this.eat(s.questionDot);i&&g&&this.raise(this.lastTokStart,"Optional chaining cannot appear in the callee of new expressions");var k=this.eat(s.bracketL);if(k||g&&this.type!==s.parenL&&this.type!==s.backQuote||this.eat(s.dot)){var A=this.startNodeAt(t,o);A.object=e,A.property=k?this.parseExpression():this.parseIdent(this.options.allowReserved!=="never"),A.computed=!!k,k&&this.expect(s.bracketR),b&&(A.optional=g),e=this.finishNode(A,"MemberExpression")}else if(!i&&this.eat(s.parenL)){var E=new it,U=this.yieldPos,z=this.awaitPos,L=this.awaitIdentPos;this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0;var x=this.parseExprList(s.parenR,this.options.ecmaVersion>=8,!1,E);if(a&&!g&&!this.canInsertSemicolon()&&this.eat(s.arrow))return this.checkPatternErrors(E,!1),this.checkYieldAwaitInDefaultParams(),this.awaitIdentPos>0&&this.raise(this.awaitIdentPos,"Cannot use 'await' as identifier inside an async function"),this.yieldPos=U,this.awaitPos=z,this.awaitIdentPos=L,this.parseArrowExpression(this.startNodeAt(t,o),x,!0);this.checkExpressionErrors(E,!0),this.yieldPos=U||this.yieldPos,this.awaitPos=z||this.awaitPos,this.awaitIdentPos=L||this.awaitIdentPos;var F=this.startNodeAt(t,o);F.callee=e,F.arguments=x,b&&(F.optional=g),e=this.finishNode(F,"CallExpression")}else if(this.type===s.backQuote){(g||h)&&this.raise(this.start,"Optional chaining cannot appear in the tag of tagged template expressions");var le=this.startNodeAt(t,o);le.tag=e,le.quasi=this.parseTemplate({isTagged:!0}),e=this.finishNode(le,"TaggedTemplateExpression")}return e},we.parseExprAtom=function(e){this.type===s.slash&&this.readRegexp();var t,o=this.potentialArrowAt===this.start;switch(this.type){case s._super:return this.allowSuper||this.raise(this.start,"'super' keyword outside a method"),t=this.startNode(),this.next(),this.type===s.parenL&&!this.allowDirectSuper&&this.raise(t.start,"super() call outside constructor of a subclass"),this.type!==s.dot&&this.type!==s.bracketL&&this.type!==s.parenL&&this.unexpected(),this.finishNode(t,"Super");case s._this:return t=this.startNode(),this.next(),this.finishNode(t,"ThisExpression");case s.name:var i=this.start,a=this.startLoc,h=this.containsEsc,b=this.parseIdent(!1);if(this.options.ecmaVersion>=8&&!h&&b.name==="async"&&!this.canInsertSemicolon()&&this.eat(s._function))return this.parseFunction(this.startNodeAt(i,a),0,!1,!0);if(o&&!this.canInsertSemicolon()){if(this.eat(s.arrow))return this.parseArrowExpression(this.startNodeAt(i,a),[b],!1);if(this.options.ecmaVersion>=8&&b.name==="async"&&this.type===s.name&&!h)return b=this.parseIdent(!1),(this.canInsertSemicolon()||!this.eat(s.arrow))&&this.unexpected(),this.parseArrowExpression(this.startNodeAt(i,a),[b],!0)}return b;case s.regexp:var g=this.value;return t=this.parseLiteral(g.value),t.regex={pattern:g.pattern,flags:g.flags},t;case s.num:case s.string:return this.parseLiteral(this.value);case s._null:case s._true:case s._false:return t=this.startNode(),t.value=this.type===s._null?null:this.type===s._true,t.raw=this.type.keyword,this.next(),this.finishNode(t,"Literal");case s.parenL:var k=this.start,A=this.parseParenAndDistinguishExpression(o);return e&&(e.parenthesizedAssign<0&&!this.isSimpleAssignTarget(A)&&(e.parenthesizedAssign=k),e.parenthesizedBind<0&&(e.parenthesizedBind=k)),A;case s.bracketL:return t=this.startNode(),this.next(),t.elements=this.parseExprList(s.bracketR,!0,!0,e),this.finishNode(t,"ArrayExpression");case s.braceL:return this.parseObj(!1,e);case s._function:return t=this.startNode(),this.next(),this.parseFunction(t,0);case s._class:return this.parseClass(this.startNode(),!1);case s._new:return this.parseNew();case s.backQuote:return this.parseTemplate();case s._import:return this.options.ecmaVersion>=11?this.parseExprImport():this.unexpected();default:this.unexpected()}},we.parseExprImport=function(){var e=this.startNode();this.containsEsc&&this.raiseRecoverable(this.start,"Escape sequence in keyword import");var t=this.parseIdent(!0);switch(this.type){case s.parenL:return this.parseDynamicImport(e);case s.dot:return e.meta=t,this.parseImportMeta(e);default:this.unexpected()}},we.parseDynamicImport=function(e){if(this.next(),e.source=this.parseMaybeAssign(),!this.eat(s.parenR)){var t=this.start;this.eat(s.comma)&&this.eat(s.parenR)?this.raiseRecoverable(t,"Trailing comma is not allowed in import()"):this.unexpected(t)}return this.finishNode(e,"ImportExpression")},we.parseImportMeta=function(e){this.next();var t=this.containsEsc;return e.property=this.parseIdent(!0),e.property.name!=="meta"&&this.raiseRecoverable(e.property.start,"The only valid meta property for import is 'import.meta'"),t&&this.raiseRecoverable(e.start,"'import.meta' must not contain escaped characters"),this.options.sourceType!=="module"&&this.raiseRecoverable(e.start,"Cannot use 'import.meta' outside a module"),this.finishNode(e,"MetaProperty")},we.parseLiteral=function(e){var t=this.startNode();return t.value=e,t.raw=this.input.slice(this.start,this.end),t.raw.charCodeAt(t.raw.length-1)===110&&(t.bigint=t.raw.slice(0,-1).replace(/_/g,"")),this.next(),this.finishNode(t,"Literal")},we.parseParenExpression=function(){this.expect(s.parenL);var e=this.parseExpression();return this.expect(s.parenR),e},we.parseParenAndDistinguishExpression=function(e){var t=this.start,o=this.startLoc,i,a=this.options.ecmaVersion>=8;if(this.options.ecmaVersion>=6){this.next();var h=this.start,b=this.startLoc,g=[],k=!0,A=!1,E=new it,U=this.yieldPos,z=this.awaitPos,L;for(this.yieldPos=0,this.awaitPos=0;this.type!==s.parenR;)if(k?k=!1:this.expect(s.comma),a&&this.afterTrailingComma(s.parenR,!0)){A=!0;break}else if(this.type===s.ellipsis){L=this.start,g.push(this.parseParenItem(this.parseRestBinding())),this.type===s.comma&&this.raise(this.start,"Comma is not permitted after the rest element");break}else g.push(this.parseMaybeAssign(!1,E,this.parseParenItem));var x=this.start,F=this.startLoc;if(this.expect(s.parenR),e&&!this.canInsertSemicolon()&&this.eat(s.arrow))return this.checkPatternErrors(E,!1),this.checkYieldAwaitInDefaultParams(),this.yieldPos=U,this.awaitPos=z,this.parseParenArrowList(t,o,g);(!g.length||A)&&this.unexpected(this.lastTokStart),L&&this.unexpected(L),this.checkExpressionErrors(E,!0),this.yieldPos=U||this.yieldPos,this.awaitPos=z||this.awaitPos,g.length>1?(i=this.startNodeAt(h,b),i.expressions=g,this.finishNodeAt(i,"SequenceExpression",x,F)):i=g[0]}else i=this.parseParenExpression();if(this.options.preserveParens){var le=this.startNodeAt(t,o);return le.expression=i,this.finishNode(le,"ParenthesizedExpression")}else return i},we.parseParenItem=function(e){return e},we.parseParenArrowList=function(e,t,o){return this.parseArrowExpression(this.startNodeAt(e,t),o)},Ct=[],we.parseNew=function(){this.containsEsc&&this.raiseRecoverable(this.start,"Escape sequence in keyword new");var e=this.startNode(),t=this.parseIdent(!0);if(this.options.ecmaVersion>=6&&this.eat(s.dot)){e.meta=t;var o=this.containsEsc;return e.property=this.parseIdent(!0),e.property.name!=="target"&&this.raiseRecoverable(e.property.start,"The only valid meta property for new is 'new.target'"),o&&this.raiseRecoverable(e.start,"'new.target' must not contain escaped characters"),this.inNonArrowFunction()||this.raiseRecoverable(e.start,"'new.target' can only be used in functions"),this.finishNode(e,"MetaProperty")}var i=this.start,a=this.startLoc,h=this.type===s._import;return e.callee=this.parseSubscripts(this.parseExprAtom(),i,a,!0),h&&e.callee.type==="ImportExpression"&&this.raise(i,"Cannot use new with import()"),this.eat(s.parenL)?e.arguments=this.parseExprList(s.parenR,this.options.ecmaVersion>=8,!1):e.arguments=Ct,this.finishNode(e,"NewExpression")},we.parseTemplateElement=function(e){var t=e.isTagged,o=this.startNode();return this.type===s.invalidTemplate?(t||this.raiseRecoverable(this.start,"Bad escape sequence in untagged template literal"),o.value={raw:this.value,cooked:null}):o.value={raw:this.input.slice(this.start,this.end).replace(/\r\n?/g,`
`),cooked:this.value},this.next(),o.tail=this.type===s.backQuote,this.finishNode(o,"TemplateElement")},we.parseTemplate=function(e){e===void 0&&(e={});var t=e.isTagged;t===void 0&&(t=!1);var o=this.startNode();this.next(),o.expressions=[];var i=this.parseTemplateElement({isTagged:t});for(o.quasis=[i];!i.tail;)this.type===s.eof&&this.raise(this.pos,"Unterminated template literal"),this.expect(s.dollarBraceL),o.expressions.push(this.parseExpression()),this.expect(s.braceR),o.quasis.push(i=this.parseTemplateElement({isTagged:t}));return this.next(),this.finishNode(o,"TemplateLiteral")},we.isAsyncProp=function(e){return!e.computed&&e.key.type==="Identifier"&&e.key.name==="async"&&(this.type===s.name||this.type===s.num||this.type===s.string||this.type===s.bracketL||this.type.keyword||this.options.ecmaVersion>=9&&this.type===s.star)&&!M.test(this.input.slice(this.lastTokEnd,this.start))},we.parseObj=function(e,t){var o=this.startNode(),i=!0,a={};for(o.properties=[],this.next();!this.eat(s.braceR);){if(i)i=!1;else if(this.expect(s.comma),this.options.ecmaVersion>=5&&this.afterTrailingComma(s.braceR))break;var h=this.parseProperty(e,t);e||this.checkPropClash(h,a,t),o.properties.push(h)}return this.finishNode(o,e?"ObjectPattern":"ObjectExpression")},we.parseProperty=function(e,t){var o=this.startNode(),i,a,h,b;if(this.options.ecmaVersion>=9&&this.eat(s.ellipsis))return e?(o.argument=this.parseIdent(!1),this.type===s.comma&&this.raise(this.start,"Comma is not permitted after the rest element"),this.finishNode(o,"RestElement")):(this.type===s.parenL&&t&&(t.parenthesizedAssign<0&&(t.parenthesizedAssign=this.start),t.parenthesizedBind<0&&(t.parenthesizedBind=this.start)),o.argument=this.parseMaybeAssign(!1,t),this.type===s.comma&&t&&t.trailingComma<0&&(t.trailingComma=this.start),this.finishNode(o,"SpreadElement"));this.options.ecmaVersion>=6&&(o.method=!1,o.shorthand=!1,(e||t)&&(h=this.start,b=this.startLoc),e||(i=this.eat(s.star)));var g=this.containsEsc;return this.parsePropertyName(o),!e&&!g&&this.options.ecmaVersion>=8&&!i&&this.isAsyncProp(o)?(a=!0,i=this.options.ecmaVersion>=9&&this.eat(s.star),this.parsePropertyName(o,t)):a=!1,this.parsePropertyValue(o,e,i,a,h,b,t,g),this.finishNode(o,"Property")},we.parsePropertyValue=function(e,t,o,i,a,h,b,g){if((o||i)&&this.type===s.colon&&this.unexpected(),this.eat(s.colon))e.value=t?this.parseMaybeDefault(this.start,this.startLoc):this.parseMaybeAssign(!1,b),e.kind="init";else if(this.options.ecmaVersion>=6&&this.type===s.parenL)t&&this.unexpected(),e.kind="init",e.method=!0,e.value=this.parseMethod(o,i);else if(!t&&!g&&this.options.ecmaVersion>=5&&!e.computed&&e.key.type==="Identifier"&&(e.key.name==="get"||e.key.name==="set")&&this.type!==s.comma&&this.type!==s.braceR&&this.type!==s.eq){(o||i)&&this.unexpected(),e.kind=e.key.name,this.parsePropertyName(e),e.value=this.parseMethod(!1);var k=e.kind==="get"?0:1;if(e.value.params.length!==k){var A=e.value.start;e.kind==="get"?this.raiseRecoverable(A,"getter should have no params"):this.raiseRecoverable(A,"setter should have exactly one param")}else e.kind==="set"&&e.value.params[0].type==="RestElement"&&this.raiseRecoverable(e.value.params[0].start,"Setter cannot use rest params")}else this.options.ecmaVersion>=6&&!e.computed&&e.key.type==="Identifier"?((o||i)&&this.unexpected(),this.checkUnreserved(e.key),e.key.name==="await"&&!this.awaitIdentPos&&(this.awaitIdentPos=a),e.kind="init",t?e.value=this.parseMaybeDefault(a,h,e.key):this.type===s.eq&&b?(b.shorthandAssign<0&&(b.shorthandAssign=this.start),e.value=this.parseMaybeDefault(a,h,e.key)):e.value=e.key,e.shorthand=!0):this.unexpected()},we.parsePropertyName=function(e){if(this.options.ecmaVersion>=6){if(this.eat(s.bracketL))return e.computed=!0,e.key=this.parseMaybeAssign(),this.expect(s.bracketR),e.key;e.computed=!1}return e.key=this.type===s.num||this.type===s.string?this.parseExprAtom():this.parseIdent(this.options.allowReserved!=="never")},we.initFunction=function(e){e.id=null,this.options.ecmaVersion>=6&&(e.generator=e.expression=!1),this.options.ecmaVersion>=8&&(e.async=!1)},we.parseMethod=function(e,t,o){var i=this.startNode(),a=this.yieldPos,h=this.awaitPos,b=this.awaitIdentPos;return this.initFunction(i),this.options.ecmaVersion>=6&&(i.generator=e),this.options.ecmaVersion>=8&&(i.async=!!t),this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,this.enterScope(jt(t,i.generator)|St|(o?Dt:0)),this.expect(s.parenL),i.params=this.parseBindingList(s.parenR,!1,this.options.ecmaVersion>=8),this.checkYieldAwaitInDefaultParams(),this.parseFunctionBody(i,!1,!0),this.yieldPos=a,this.awaitPos=h,this.awaitIdentPos=b,this.finishNode(i,"FunctionExpression")},we.parseArrowExpression=function(e,t,o){var i=this.yieldPos,a=this.awaitPos,h=this.awaitIdentPos;return this.enterScope(jt(o,!1)|Ee),this.initFunction(e),this.options.ecmaVersion>=8&&(e.async=!!o),this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,e.params=this.toAssignableList(t,!0),this.parseFunctionBody(e,!0,!1),this.yieldPos=i,this.awaitPos=a,this.awaitIdentPos=h,this.finishNode(e,"ArrowFunctionExpression")},we.parseFunctionBody=function(e,t,o){var i=t&&this.type!==s.braceL,a=this.strict,h=!1;if(i)e.body=this.parseMaybeAssign(),e.expression=!0,this.checkParams(e,!1);else{var b=this.options.ecmaVersion>=7&&!this.isSimpleParamList(e.params);(!a||b)&&(h=this.strictDirective(this.end),h&&b&&this.raiseRecoverable(e.start,"Illegal 'use strict' directive in function with non-simple parameter list"));var g=this.labels;this.labels=[],h&&(this.strict=!0),this.checkParams(e,!a&&!h&&!t&&!o&&this.isSimpleParamList(e.params)),this.strict&&e.id&&this.checkLVal(e.id,ut),e.body=this.parseBlock(!1,void 0,h&&!a),e.expression=!1,this.adaptDirectivePrologue(e.body.body),this.labels=g}this.exitScope()},we.isSimpleParamList=function(e){for(var t=0,o=e;t<o.length;t+=1){var i=o[t];if(i.type!=="Identifier")return!1}return!0},we.checkParams=function(e,t){for(var o={},i=0,a=e.params;i<a.length;i+=1){var h=a[i];this.checkLVal(h,po,t?null:o)}},we.parseExprList=function(e,t,o,i){for(var a=[],h=!0;!this.eat(e);){if(h)h=!1;else if(this.expect(s.comma),t&&this.afterTrailingComma(e))break;var b=void 0;o&&this.type===s.comma?b=null:this.type===s.ellipsis?(b=this.parseSpread(i),i&&this.type===s.comma&&i.trailingComma<0&&(i.trailingComma=this.start)):b=this.parseMaybeAssign(!1,i),a.push(b)}return a},we.checkUnreserved=function(e){var t=e.start,o=e.end,i=e.name;if(this.inGenerator&&i==="yield"&&this.raiseRecoverable(t,"Cannot use 'yield' as identifier inside a generator"),this.inAsync&&i==="await"&&this.raiseRecoverable(t,"Cannot use 'await' as identifier inside an async function"),this.keywords.test(i)&&this.raise(t,"Unexpected keyword '"+i+"'"),!(this.options.ecmaVersion<6&&this.input.slice(t,o).indexOf("\\")!==-1)){var a=this.strict?this.reservedWordsStrict:this.reservedWords;a.test(i)&&(!this.inAsync&&i==="await"&&this.raiseRecoverable(t,"Cannot use keyword 'await' outside an async function"),this.raiseRecoverable(t,"The keyword '"+i+"' is reserved"))}},we.parseIdent=function(e,t){var o=this.startNode();return this.type===s.name?o.name=this.value:this.type.keyword?(o.name=this.type.keyword,(o.name==="class"||o.name==="function")&&(this.lastTokEnd!==this.lastTokStart+1||this.input.charCodeAt(this.lastTokStart)!==46)&&this.context.pop()):this.unexpected(),this.next(!!e),this.finishNode(o,"Identifier"),e||(this.checkUnreserved(o),o.name==="await"&&!this.awaitIdentPos&&(this.awaitIdentPos=o.start)),o},we.parseYield=function(e){this.yieldPos||(this.yieldPos=this.start);var t=this.startNode();return this.next(),this.type===s.semi||this.canInsertSemicolon()||this.type!==s.star&&!this.type.startsExpr?(t.delegate=!1,t.argument=null):(t.delegate=this.eat(s.star),t.argument=this.parseMaybeAssign(e)),this.finishNode(t,"YieldExpression")},we.parseAwait=function(){this.awaitPos||(this.awaitPos=this.start);var e=this.startNode();return this.next(),e.argument=this.parseMaybeUnary(null,!1),this.finishNode(e,"AwaitExpression")},zt=Vt.prototype,zt.raise=function(e,t){var o=Qe(this.input,e);t+=" ("+o.line+":"+o.column+")";var i=new SyntaxError(t);throw i.pos=e,i.loc=o,i.raisedAt=this.pos,i},zt.raiseRecoverable=zt.raise,zt.curPosition=function(){if(this.options.locations)return new pe(this.curLine,this.pos-this.lineStart)},Ft=Vt.prototype,No=function(e){this.flags=e,this.var=[],this.lexical=[],this.functions=[]},Ft.enterScope=function(e){this.scopeStack.push(new No(e))},Ft.exitScope=function(){this.scopeStack.pop()},Ft.treatFunctionsAsVarInScope=function(e){return e.flags&H||!this.inModule&&e.flags&D},Ft.declareName=function(e,t,o){var i=!1;if(t===qt){var a=this.currentScope();i=a.lexical.indexOf(e)>-1||a.functions.indexOf(e)>-1||a.var.indexOf(e)>-1,a.lexical.push(e),this.inModule&&a.flags&D&&delete this.undefinedExports[e]}else if(t===Kt){var h=this.currentScope();h.lexical.push(e)}else if(t===Ut){var b=this.currentScope();this.treatFunctionsAsVar?i=b.lexical.indexOf(e)>-1:i=b.lexical.indexOf(e)>-1||b.var.indexOf(e)>-1,b.functions.push(e)}else for(var g=this.scopeStack.length-1;g>=0;--g){var k=this.scopeStack[g];if(k.lexical.indexOf(e)>-1&&!(k.flags&bt&&k.lexical[0]===e)||!this.treatFunctionsAsVarInScope(k)&&k.functions.indexOf(e)>-1){i=!0;break}if(k.var.push(e),this.inModule&&k.flags&D&&delete this.undefinedExports[e],k.flags&me)break}i&&this.raiseRecoverable(o,"Identifier '"+e+"' has already been declared")},Ft.checkLocalExport=function(e){this.scopeStack[0].lexical.indexOf(e.name)===-1&&this.scopeStack[0].var.indexOf(e.name)===-1&&(this.undefinedExports[e.name]=e)},Ft.currentScope=function(){return this.scopeStack[this.scopeStack.length-1]},Ft.currentVarScope=function(){for(var e=this.scopeStack.length-1;;e--){var t=this.scopeStack[e];if(t.flags&me)return t}},Ft.currentThisScope=function(){for(var e=this.scopeStack.length-1;;e--){var t=this.scopeStack[e];if(t.flags&me&&!(t.flags&Ee))return t}},vo=function(e,t,o){this.type="",this.start=t,this.end=0,e.options.locations&&(this.loc=new K(e,o)),e.options.directSourceFile&&(this.sourceFile=e.options.directSourceFile),e.options.ranges&&(this.range=[t,0])},gn=Vt.prototype,gn.startNode=function(){return new vo(this,this.start,this.startLoc)},gn.startNodeAt=function(e,t){return new vo(this,e,t)},gn.finishNode=function(e,t){return Ge.call(this,e,t,this.lastTokEnd,this.lastTokEndLoc)},gn.finishNodeAt=function(e,t,o,i){return Ge.call(this,e,t,o,i)},go=function(e,t,o,i,a){this.token=e,this.isExpr=!!t,this.preserveSpace=!!o,this.override=i,this.generator=!!a},Ht={b_stat:new go("{",!1),b_expr:new go("{",!0),b_tmpl:new go("${",!1),p_stat:new go("(",!1),p_expr:new go("(",!0),q_tmpl:new go("`",!0,!0,function(e){return e.tryReadTemplateToken()}),f_stat:new go("function",!1),f_expr:new go("function",!0),f_expr_gen:new go("function",!0,!1,null,!0),f_gen:new go("function",!1,!1,null,!0)},rn=Vt.prototype,rn.initialContext=function(){return[Ht.b_stat]},rn.braceIsBlock=function(e){var t=this.curContext();return t===Ht.f_expr||t===Ht.f_stat?!0:e===s.colon&&(t===Ht.b_stat||t===Ht.b_expr)?!t.isExpr:e===s._return||e===s.name&&this.exprAllowed?M.test(this.input.slice(this.lastTokEnd,this.start)):e===s._else||e===s.semi||e===s.eof||e===s.parenR||e===s.arrow?!0:e===s.braceL?t===Ht.b_stat:e===s._var||e===s._const||e===s.name?!1:!this.exprAllowed},rn.inGeneratorContext=function(){for(var e=this.context.length-1;e>=1;e--){var t=this.context[e];if(t.token==="function")return t.generator}return!1},rn.updateContext=function(e){var t,o=this.type;o.keyword&&e===s.dot?this.exprAllowed=!1:(t=o.updateContext)?t.call(this,e):this.exprAllowed=o.beforeExpr},s.parenR.updateContext=s.braceR.updateContext=function(){if(this.context.length===1){this.exprAllowed=!0;return}var e=this.context.pop();e===Ht.b_stat&&this.curContext().token==="function"&&(e=this.context.pop()),this.exprAllowed=!e.isExpr},s.braceL.updateContext=function(e){this.context.push(this.braceIsBlock(e)?Ht.b_stat:Ht.b_expr),this.exprAllowed=!0},s.dollarBraceL.updateContext=function(){this.context.push(Ht.b_tmpl),this.exprAllowed=!0},s.parenL.updateContext=function(e){var t=e===s._if||e===s._for||e===s._with||e===s._while;this.context.push(t?Ht.p_stat:Ht.p_expr),this.exprAllowed=!0},s.incDec.updateContext=function(){},s._function.updateContext=s._class.updateContext=function(e){e.beforeExpr&&e!==s.semi&&e!==s._else&&!(e===s._return&&M.test(this.input.slice(this.lastTokEnd,this.start)))&&!((e===s.colon||e===s.braceL)&&this.curContext()===Ht.b_stat)?this.context.push(Ht.f_expr):this.context.push(Ht.f_stat),this.exprAllowed=!1},s.backQuote.updateContext=function(){this.curContext()===Ht.q_tmpl?this.context.pop():this.context.push(Ht.q_tmpl),this.exprAllowed=!1},s.star.updateContext=function(e){if(e===s._function){var t=this.context.length-1;this.context[t]===Ht.f_expr?this.context[t]=Ht.f_expr_gen:this.context[t]=Ht.f_gen}this.exprAllowed=!0},s.name.updateContext=function(e){var t=!1;this.options.ecmaVersion>=6&&e!==s.dot&&(this.value==="of"&&!this.exprAllowed||this.value==="yield"&&this.inGeneratorContext())&&(t=!0),this.exprAllowed=t},Xn="ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",Kn=Xn+" Extended_Pictographic",Br=Kn,Pr={9:Xn,10:Kn,11:Br},Hn="Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",In="Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",m=In+" Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",w=m+" Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",N={9:In,10:m,11:w},ee={},B(9),B(10),B(11),q=Vt.prototype,de=function(e){this.parser=e,this.validFlags="gim"+(e.options.ecmaVersion>=6?"uy":"")+(e.options.ecmaVersion>=9?"s":""),this.unicodeProperties=ee[e.options.ecmaVersion>=11?11:e.options.ecmaVersion],this.source="",this.flags="",this.start=0,this.switchU=!1,this.switchN=!1,this.pos=0,this.lastIntValue=0,this.lastStringValue="",this.lastAssertionIsQuantifiable=!1,this.numCapturingParens=0,this.maxBackReference=0,this.groupNames=[],this.backReferenceNames=[]},de.prototype.reset=function(e,t,o){var i=o.indexOf("u")!==-1;this.start=e|0,this.source=t+"",this.flags=o,this.switchU=i&&this.parser.options.ecmaVersion>=6,this.switchN=i&&this.parser.options.ecmaVersion>=9},de.prototype.raise=function(e){this.parser.raiseRecoverable(this.start,"Invalid regular expression: /"+this.source+"/: "+e)},de.prototype.at=function(e,t){t===void 0&&(t=!1);var o=this.source,i=o.length;if(e>=i)return-1;var a=o.charCodeAt(e);if(!(t||this.switchU)||a<=55295||a>=57344||e+1>=i)return a;var h=o.charCodeAt(e+1);return h>=56320&&h<=57343?(a<<10)+h-56613888:a},de.prototype.nextIndex=function(e,t){t===void 0&&(t=!1);var o=this.source,i=o.length;if(e>=i)return i;var a=o.charCodeAt(e),h;return!(t||this.switchU)||a<=55295||a>=57344||e+1>=i||(h=o.charCodeAt(e+1))<56320||h>57343?e+1:e+2},de.prototype.current=function(e){return e===void 0&&(e=!1),this.at(this.pos,e)},de.prototype.lookahead=function(e){return e===void 0&&(e=!1),this.at(this.nextIndex(this.pos,e),e)},de.prototype.advance=function(e){e===void 0&&(e=!1),this.pos=this.nextIndex(this.pos,e)},de.prototype.eat=function(e,t){return t===void 0&&(t=!1),this.current(t)===e?(this.advance(t),!0):!1},q.validateRegExpFlags=function(e){for(var t=e.validFlags,o=e.flags,i=0;i<o.length;i++){var a=o.charAt(i);t.indexOf(a)===-1&&this.raise(e.start,"Invalid regular expression flag"),o.indexOf(a,i+1)>-1&&this.raise(e.start,"Duplicate regular expression flag")}},q.validateRegExpPattern=function(e){this.regexp_pattern(e),!e.switchN&&this.options.ecmaVersion>=9&&e.groupNames.length>0&&(e.switchN=!0,this.regexp_pattern(e))},q.regexp_pattern=function(e){e.pos=0,e.lastIntValue=0,e.lastStringValue="",e.lastAssertionIsQuantifiable=!1,e.numCapturingParens=0,e.maxBackReference=0,e.groupNames.length=0,e.backReferenceNames.length=0,this.regexp_disjunction(e),e.pos!==e.source.length&&(e.eat(41)&&e.raise("Unmatched ')'"),(e.eat(93)||e.eat(125))&&e.raise("Lone quantifier brackets")),e.maxBackReference>e.numCapturingParens&&e.raise("Invalid escape");for(var t=0,o=e.backReferenceNames;t<o.length;t+=1){var i=o[t];e.groupNames.indexOf(i)===-1&&e.raise("Invalid named capture referenced")}},q.regexp_disjunction=function(e){for(this.regexp_alternative(e);e.eat(124);)this.regexp_alternative(e);this.regexp_eatQuantifier(e,!0)&&e.raise("Nothing to repeat"),e.eat(123)&&e.raise("Lone quantifier brackets")},q.regexp_alternative=function(e){for(;e.pos<e.source.length&&this.regexp_eatTerm(e););},q.regexp_eatTerm=function(e){return this.regexp_eatAssertion(e)?(e.lastAssertionIsQuantifiable&&this.regexp_eatQuantifier(e)&&e.switchU&&e.raise("Invalid quantifier"),!0):(e.switchU?this.regexp_eatAtom(e):this.regexp_eatExtendedAtom(e))?(this.regexp_eatQuantifier(e),!0):!1},q.regexp_eatAssertion=function(e){var t=e.pos;if(e.lastAssertionIsQuantifiable=!1,e.eat(94)||e.eat(36))return!0;if(e.eat(92)){if(e.eat(66)||e.eat(98))return!0;e.pos=t}if(e.eat(40)&&e.eat(63)){var o=!1;if(this.options.ecmaVersion>=9&&(o=e.eat(60)),e.eat(61)||e.eat(33))return this.regexp_disjunction(e),e.eat(41)||e.raise("Unterminated group"),e.lastAssertionIsQuantifiable=!o,!0}return e.pos=t,!1},q.regexp_eatQuantifier=function(e,t){return t===void 0&&(t=!1),this.regexp_eatQuantifierPrefix(e,t)?(e.eat(63),!0):!1},q.regexp_eatQuantifierPrefix=function(e,t){return e.eat(42)||e.eat(43)||e.eat(63)||this.regexp_eatBracedQuantifier(e,t)},q.regexp_eatBracedQuantifier=function(e,t){var o=e.pos;if(e.eat(123)){var i=0,a=-1;if(this.regexp_eatDecimalDigits(e)&&(i=e.lastIntValue,e.eat(44)&&this.regexp_eatDecimalDigits(e)&&(a=e.lastIntValue),e.eat(125)))return a!==-1&&a<i&&!t&&e.raise("numbers out of order in {} quantifier"),!0;e.switchU&&!t&&e.raise("Incomplete quantifier"),e.pos=o}return!1},q.regexp_eatAtom=function(e){return this.regexp_eatPatternCharacters(e)||e.eat(46)||this.regexp_eatReverseSolidusAtomEscape(e)||this.regexp_eatCharacterClass(e)||this.regexp_eatUncapturingGroup(e)||this.regexp_eatCapturingGroup(e)},q.regexp_eatReverseSolidusAtomEscape=function(e){var t=e.pos;if(e.eat(92)){if(this.regexp_eatAtomEscape(e))return!0;e.pos=t}return!1},q.regexp_eatUncapturingGroup=function(e){var t=e.pos;if(e.eat(40)){if(e.eat(63)&&e.eat(58)){if(this.regexp_disjunction(e),e.eat(41))return!0;e.raise("Unterminated group")}e.pos=t}return!1},q.regexp_eatCapturingGroup=function(e){if(e.eat(40)){if(this.options.ecmaVersion>=9?this.regexp_groupSpecifier(e):e.current()===63&&e.raise("Invalid group"),this.regexp_disjunction(e),e.eat(41))return e.numCapturingParens+=1,!0;e.raise("Unterminated group")}return!1},q.regexp_eatExtendedAtom=function(e){return e.eat(46)||this.regexp_eatReverseSolidusAtomEscape(e)||this.regexp_eatCharacterClass(e)||this.regexp_eatUncapturingGroup(e)||this.regexp_eatCapturingGroup(e)||this.regexp_eatInvalidBracedQuantifier(e)||this.regexp_eatExtendedPatternCharacter(e)},q.regexp_eatInvalidBracedQuantifier=function(e){return this.regexp_eatBracedQuantifier(e,!0)&&e.raise("Nothing to repeat"),!1},q.regexp_eatSyntaxCharacter=function(e){var t=e.current();return ot(t)?(e.lastIntValue=t,e.advance(),!0):!1},q.regexp_eatPatternCharacters=function(e){for(var t=e.pos,o=0;(o=e.current())!==-1&&!ot(o);)e.advance();return e.pos!==t},q.regexp_eatExtendedPatternCharacter=function(e){var t=e.current();return t!==-1&&t!==36&&!(t>=40&&t<=43)&&t!==46&&t!==63&&t!==91&&t!==94&&t!==124?(e.advance(),!0):!1},q.regexp_groupSpecifier=function(e){if(e.eat(63)){if(this.regexp_eatGroupName(e)){e.groupNames.indexOf(e.lastStringValue)!==-1&&e.raise("Duplicate capture group name"),e.groupNames.push(e.lastStringValue);return}e.raise("Invalid group")}},q.regexp_eatGroupName=function(e){if(e.lastStringValue="",e.eat(60)){if(this.regexp_eatRegExpIdentifierName(e)&&e.eat(62))return!0;e.raise("Invalid capture group name")}return!1},q.regexp_eatRegExpIdentifierName=function(e){if(e.lastStringValue="",this.regexp_eatRegExpIdentifierStart(e)){for(e.lastStringValue+=ie(e.lastIntValue);this.regexp_eatRegExpIdentifierPart(e);)e.lastStringValue+=ie(e.lastIntValue);return!0}return!1},q.regexp_eatRegExpIdentifierStart=function(e){var t=e.pos,o=this.options.ecmaVersion>=11,i=e.current(o);return e.advance(o),i===92&&this.regexp_eatRegExpUnicodeEscapeSequence(e,o)&&(i=e.lastIntValue),Ie(i)?(e.lastIntValue=i,!0):(e.pos=t,!1)},q.regexp_eatRegExpIdentifierPart=function(e){var t=e.pos,o=this.options.ecmaVersion>=11,i=e.current(o);return e.advance(o),i===92&&this.regexp_eatRegExpUnicodeEscapeSequence(e,o)&&(i=e.lastIntValue),lt(i)?(e.lastIntValue=i,!0):(e.pos=t,!1)},q.regexp_eatAtomEscape=function(e){return this.regexp_eatBackReference(e)||this.regexp_eatCharacterClassEscape(e)||this.regexp_eatCharacterEscape(e)||e.switchN&&this.regexp_eatKGroupName(e)?!0:(e.switchU&&(e.current()===99&&e.raise("Invalid unicode escape"),e.raise("Invalid escape")),!1)},q.regexp_eatBackReference=function(e){var t=e.pos;if(this.regexp_eatDecimalEscape(e)){var o=e.lastIntValue;if(e.switchU)return o>e.maxBackReference&&(e.maxBackReference=o),!0;if(o<=e.numCapturingParens)return!0;e.pos=t}return!1},q.regexp_eatKGroupName=function(e){if(e.eat(107)){if(this.regexp_eatGroupName(e))return e.backReferenceNames.push(e.lastStringValue),!0;e.raise("Invalid named reference")}return!1},q.regexp_eatCharacterEscape=function(e){return this.regexp_eatControlEscape(e)||this.regexp_eatCControlLetter(e)||this.regexp_eatZero(e)||this.regexp_eatHexEscapeSequence(e)||this.regexp_eatRegExpUnicodeEscapeSequence(e,!1)||!e.switchU&&this.regexp_eatLegacyOctalEscapeSequence(e)||this.regexp_eatIdentityEscape(e)},q.regexp_eatCControlLetter=function(e){var t=e.pos;if(e.eat(99)){if(this.regexp_eatControlLetter(e))return!0;e.pos=t}return!1},q.regexp_eatZero=function(e){return e.current()===48&&!Po(e.lookahead())?(e.lastIntValue=0,e.advance(),!0):!1},q.regexp_eatControlEscape=function(e){var t=e.current();return t===116?(e.lastIntValue=9,e.advance(),!0):t===110?(e.lastIntValue=10,e.advance(),!0):t===118?(e.lastIntValue=11,e.advance(),!0):t===102?(e.lastIntValue=12,e.advance(),!0):t===114?(e.lastIntValue=13,e.advance(),!0):!1},q.regexp_eatControlLetter=function(e){var t=e.current();return dt(t)?(e.lastIntValue=t%32,e.advance(),!0):!1},q.regexp_eatRegExpUnicodeEscapeSequence=function(e,t){t===void 0&&(t=!1);var o=e.pos,i=t||e.switchU;if(e.eat(117)){if(this.regexp_eatFixedHexDigits(e,4)){var a=e.lastIntValue;if(i&&a>=55296&&a<=56319){var h=e.pos;if(e.eat(92)&&e.eat(117)&&this.regexp_eatFixedHexDigits(e,4)){var b=e.lastIntValue;if(b>=56320&&b<=57343)return e.lastIntValue=(a-55296)*1024+(b-56320)+65536,!0}e.pos=h,e.lastIntValue=a}return!0}if(i&&e.eat(123)&&this.regexp_eatHexDigits(e)&&e.eat(125)&&Pt(e.lastIntValue))return!0;i&&e.raise("Invalid unicode escape"),e.pos=o}return!1},q.regexp_eatIdentityEscape=function(e){if(e.switchU)return this.regexp_eatSyntaxCharacter(e)?!0:e.eat(47)?(e.lastIntValue=47,!0):!1;var t=e.current();return t!==99&&(!e.switchN||t!==107)?(e.lastIntValue=t,e.advance(),!0):!1},q.regexp_eatDecimalEscape=function(e){e.lastIntValue=0;var t=e.current();if(t>=49&&t<=57){do e.lastIntValue=10*e.lastIntValue+(t-48),e.advance();while((t=e.current())>=48&&t<=57);return!0}return!1},q.regexp_eatCharacterClassEscape=function(e){var t=e.current();if(It(t))return e.lastIntValue=-1,e.advance(),!0;if(e.switchU&&this.options.ecmaVersion>=9&&(t===80||t===112)){if(e.lastIntValue=-1,e.advance(),e.eat(123)&&this.regexp_eatUnicodePropertyValueExpression(e)&&e.eat(125))return!0;e.raise("Invalid property name")}return!1},q.regexp_eatUnicodePropertyValueExpression=function(e){var t=e.pos;if(this.regexp_eatUnicodePropertyName(e)&&e.eat(61)){var o=e.lastStringValue;if(this.regexp_eatUnicodePropertyValue(e)){var i=e.lastStringValue;return this.regexp_validateUnicodePropertyNameAndValue(e,o,i),!0}}if(e.pos=t,this.regexp_eatLoneUnicodePropertyNameOrValue(e)){var a=e.lastStringValue;return this.regexp_validateUnicodePropertyNameOrValue(e,a),!0}return!1},q.regexp_validateUnicodePropertyNameAndValue=function(e,t,o){ve(e.unicodeProperties.nonBinary,t)||e.raise("Invalid property name"),e.unicodeProperties.nonBinary[t].test(o)||e.raise("Invalid property value")},q.regexp_validateUnicodePropertyNameOrValue=function(e,t){e.unicodeProperties.binary.test(t)||e.raise("Invalid property name")},q.regexp_eatUnicodePropertyName=function(e){var t=0;for(e.lastStringValue="";Jt(t=e.current());)e.lastStringValue+=ie(t),e.advance();return e.lastStringValue!==""},q.regexp_eatUnicodePropertyValue=function(e){var t=0;for(e.lastStringValue="";io(t=e.current());)e.lastStringValue+=ie(t),e.advance();return e.lastStringValue!==""},q.regexp_eatLoneUnicodePropertyNameOrValue=function(e){return this.regexp_eatUnicodePropertyValue(e)},q.regexp_eatCharacterClass=function(e){if(e.eat(91)){if(e.eat(94),this.regexp_classRanges(e),e.eat(93))return!0;e.raise("Unterminated character class")}return!1},q.regexp_classRanges=function(e){for(;this.regexp_eatClassAtom(e);){var t=e.lastIntValue;if(e.eat(45)&&this.regexp_eatClassAtom(e)){var o=e.lastIntValue;e.switchU&&(t===-1||o===-1)&&e.raise("Invalid character class"),t!==-1&&o!==-1&&t>o&&e.raise("Range out of order in character class")}}},q.regexp_eatClassAtom=function(e){var t=e.pos;if(e.eat(92)){if(this.regexp_eatClassEscape(e))return!0;if(e.switchU){var o=e.current();(o===99||Lo(o))&&e.raise("Invalid class escape"),e.raise("Invalid escape")}e.pos=t}var i=e.current();return i!==93?(e.lastIntValue=i,e.advance(),!0):!1},q.regexp_eatClassEscape=function(e){var t=e.pos;if(e.eat(98))return e.lastIntValue=8,!0;if(e.switchU&&e.eat(45))return e.lastIntValue=45,!0;if(!e.switchU&&e.eat(99)){if(this.regexp_eatClassControlLetter(e))return!0;e.pos=t}return this.regexp_eatCharacterClassEscape(e)||this.regexp_eatCharacterEscape(e)},q.regexp_eatClassControlLetter=function(e){var t=e.current();return Po(t)||t===95?(e.lastIntValue=t%32,e.advance(),!0):!1},q.regexp_eatHexEscapeSequence=function(e){var t=e.pos;if(e.eat(120)){if(this.regexp_eatFixedHexDigits(e,2))return!0;e.switchU&&e.raise("Invalid escape"),e.pos=t}return!1},q.regexp_eatDecimalDigits=function(e){var t=e.pos,o=0;for(e.lastIntValue=0;Po(o=e.current());)e.lastIntValue=10*e.lastIntValue+(o-48),e.advance();return e.pos!==t},q.regexp_eatHexDigits=function(e){var t=e.pos,o=0;for(e.lastIntValue=0;qo(o=e.current());)e.lastIntValue=16*e.lastIntValue+Wo(o),e.advance();return e.pos!==t},q.regexp_eatLegacyOctalEscapeSequence=function(e){if(this.regexp_eatOctalDigit(e)){var t=e.lastIntValue;if(this.regexp_eatOctalDigit(e)){var o=e.lastIntValue;t<=3&&this.regexp_eatOctalDigit(e)?e.lastIntValue=t*64+o*8+e.lastIntValue:e.lastIntValue=t*8+o}else e.lastIntValue=t;return!0}return!1},q.regexp_eatOctalDigit=function(e){var t=e.current();return Lo(t)?(e.lastIntValue=t-48,e.advance(),!0):(e.lastIntValue=0,!1)},q.regexp_eatFixedHexDigits=function(e,t){var o=e.pos;e.lastIntValue=0;for(var i=0;i<t;++i){var a=e.current();if(!qo(a))return e.pos=o,!1;e.lastIntValue=16*e.lastIntValue+Wo(a),e.advance()}return!0},Ve=function(e){this.type=e.type,this.value=e.value,this.start=e.start,this.end=e.end,e.options.locations&&(this.loc=new K(e,e.startLoc,e.endLoc)),e.options.ranges&&(this.range=[e.start,e.end])},Se=Vt.prototype,Se.next=function(e){!e&&this.type.keyword&&this.containsEsc&&this.raiseRecoverable(this.start,"Escape sequence in keyword "+this.type.keyword),this.options.onToken&&this.options.onToken(new Ve(this)),this.lastTokEnd=this.end,this.lastTokStart=this.start,this.lastTokEndLoc=this.endLoc,this.lastTokStartLoc=this.startLoc,this.nextToken()},Se.getToken=function(){return this.next(),new Ve(this)},typeof Symbol<"u"&&(Se[Symbol.iterator]=function(){var e=this;return{next:function(){var t=e.getToken();return{done:t.type===s.eof,value:t}}}}),Se.curContext=function(){return this.context[this.context.length-1]},Se.nextToken=function(){var e=this.curContext();if((!e||!e.preserveSpace)&&this.skipSpace(),this.start=this.pos,this.options.locations&&(this.startLoc=this.curPosition()),this.pos>=this.input.length)return this.finishToken(s.eof);if(e.override)return e.override(this);this.readToken(this.fullCharCodeAtPos())},Se.readToken=function(e){return Ne(e,this.options.ecmaVersion>=6)||e===92?this.readWord():this.getTokenFromCode(e)},Se.fullCharCodeAtPos=function(){var e=this.input.charCodeAt(this.pos);if(e<=55295||e>=57344)return e;var t=this.input.charCodeAt(this.pos+1);return(e<<10)+t-56613888},Se.skipBlockComment=function(){var e=this.options.onComment&&this.curPosition(),t=this.pos,o=this.input.indexOf("*/",this.pos+=2);if(o===-1&&this.raise(this.pos-2,"Unterminated comment"),this.pos=o+2,this.options.locations){I.lastIndex=t;for(var i;(i=I.exec(this.input))&&i.index<this.pos;)++this.curLine,this.lineStart=i.index+i[0].length}this.options.onComment&&this.options.onComment(!0,this.input.slice(t+2,o),t,this.pos,e,this.curPosition())},Se.skipLineComment=function(e){for(var t=this.pos,o=this.options.onComment&&this.curPosition(),i=this.input.charCodeAt(this.pos+=e);this.pos<this.input.length&&!ae(i);)i=this.input.charCodeAt(++this.pos);this.options.onComment&&this.options.onComment(!1,this.input.slice(t+e,this.pos),t,this.pos,o,this.curPosition())},Se.skipSpace=function(){e:for(;this.pos<this.input.length;){var e=this.input.charCodeAt(this.pos);switch(e){case 32:case 160:++this.pos;break;case 13:this.input.charCodeAt(this.pos+1)===10&&++this.pos;case 10:case 8232:case 8233:++this.pos,this.options.locations&&(++this.curLine,this.lineStart=this.pos);break;case 47:switch(this.input.charCodeAt(this.pos+1)){case 42:this.skipBlockComment();break;case 47:this.skipLineComment(2);break;default:break e}break;default:if(e>8&&e<14||e>=5760&&C.test(String.fromCharCode(e)))++this.pos;else break e}}},Se.finishToken=function(e,t){this.end=this.pos,this.options.locations&&(this.endLoc=this.curPosition());var o=this.type;this.type=e,this.value=t,this.updateContext(o)},Se.readToken_dot=function(){var e=this.input.charCodeAt(this.pos+1);if(e>=48&&e<=57)return this.readNumber(!0);var t=this.input.charCodeAt(this.pos+2);return this.options.ecmaVersion>=6&&e===46&&t===46?(this.pos+=3,this.finishToken(s.ellipsis)):(++this.pos,this.finishToken(s.dot))},Se.readToken_slash=function(){var e=this.input.charCodeAt(this.pos+1);return this.exprAllowed?(++this.pos,this.readRegexp()):e===61?this.finishOp(s.assign,2):this.finishOp(s.slash,1)},Se.readToken_mult_modulo_exp=function(e){var t=this.input.charCodeAt(this.pos+1),o=1,i=e===42?s.star:s.modulo;return this.options.ecmaVersion>=7&&e===42&&t===42&&(++o,i=s.starstar,t=this.input.charCodeAt(this.pos+2)),t===61?this.finishOp(s.assign,o+1):this.finishOp(i,o)},Se.readToken_pipe_amp=function(e){var t=this.input.charCodeAt(this.pos+1);if(t===e){if(this.options.ecmaVersion>=12){var o=this.input.charCodeAt(this.pos+2);if(o===61)return this.finishOp(s.assign,3)}return this.finishOp(e===124?s.logicalOR:s.logicalAND,2)}return t===61?this.finishOp(s.assign,2):this.finishOp(e===124?s.bitwiseOR:s.bitwiseAND,1)},Se.readToken_caret=function(){var e=this.input.charCodeAt(this.pos+1);return e===61?this.finishOp(s.assign,2):this.finishOp(s.bitwiseXOR,1)},Se.readToken_plus_min=function(e){var t=this.input.charCodeAt(this.pos+1);return t===e?t===45&&!this.inModule&&this.input.charCodeAt(this.pos+2)===62&&(this.lastTokEnd===0||M.test(this.input.slice(this.lastTokEnd,this.pos)))?(this.skipLineComment(3),this.skipSpace(),this.nextToken()):this.finishOp(s.incDec,2):t===61?this.finishOp(s.assign,2):this.finishOp(s.plusMin,1)},Se.readToken_lt_gt=function(e){var t=this.input.charCodeAt(this.pos+1),o=1;return t===e?(o=e===62&&this.input.charCodeAt(this.pos+2)===62?3:2,this.input.charCodeAt(this.pos+o)===61?this.finishOp(s.assign,o+1):this.finishOp(s.bitShift,o)):t===33&&e===60&&!this.inModule&&this.input.charCodeAt(this.pos+2)===45&&this.input.charCodeAt(this.pos+3)===45?(this.skipLineComment(4),this.skipSpace(),this.nextToken()):(t===61&&(o=2),this.finishOp(s.relational,o))},Se.readToken_eq_excl=function(e){var t=this.input.charCodeAt(this.pos+1);return t===61?this.finishOp(s.equality,this.input.charCodeAt(this.pos+2)===61?3:2):e===61&&t===62&&this.options.ecmaVersion>=6?(this.pos+=2,this.finishToken(s.arrow)):this.finishOp(e===61?s.eq:s.prefix,1)},Se.readToken_question=function(){var e=this.options.ecmaVersion;if(e>=11){var t=this.input.charCodeAt(this.pos+1);if(t===46){var o=this.input.charCodeAt(this.pos+2);if(o<48||o>57)return this.finishOp(s.questionDot,2)}if(t===63){if(e>=12){var i=this.input.charCodeAt(this.pos+2);if(i===61)return this.finishOp(s.assign,3)}return this.finishOp(s.coalesce,2)}}return this.finishOp(s.question,1)},Se.getTokenFromCode=function(e){switch(e){case 46:return this.readToken_dot();case 40:return++this.pos,this.finishToken(s.parenL);case 41:return++this.pos,this.finishToken(s.parenR);case 59:return++this.pos,this.finishToken(s.semi);case 44:return++this.pos,this.finishToken(s.comma);case 91:return++this.pos,this.finishToken(s.bracketL);case 93:return++this.pos,this.finishToken(s.bracketR);case 123:return++this.pos,this.finishToken(s.braceL);case 125:return++this.pos,this.finishToken(s.braceR);case 58:return++this.pos,this.finishToken(s.colon);case 96:if(this.options.ecmaVersion<6)break;return++this.pos,this.finishToken(s.backQuote);case 48:var t=this.input.charCodeAt(this.pos+1);if(t===120||t===88)return this.readRadixNumber(16);if(this.options.ecmaVersion>=6){if(t===111||t===79)return this.readRadixNumber(8);if(t===98||t===66)return this.readRadixNumber(2)}case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return this.readNumber(!1);case 34:case 39:return this.readString(e);case 47:return this.readToken_slash();case 37:case 42:return this.readToken_mult_modulo_exp(e);case 124:case 38:return this.readToken_pipe_amp(e);case 94:return this.readToken_caret();case 43:case 45:return this.readToken_plus_min(e);case 60:case 62:return this.readToken_lt_gt(e);case 61:case 33:return this.readToken_eq_excl(e);case 63:return this.readToken_question();case 126:return this.finishOp(s.prefix,1)}this.raise(this.pos,"Unexpected character '"+Mo(e)+"'")},Se.finishOp=function(e,t){var o=this.input.slice(this.pos,this.pos+t);return this.pos+=t,this.finishToken(e,o)},Se.readRegexp=function(){for(var e,t,o=this.pos;;){this.pos>=this.input.length&&this.raise(o,"Unterminated regular expression");var i=this.input.charAt(this.pos);if(M.test(i)&&this.raise(o,"Unterminated regular expression"),e)e=!1;else{if(i==="[")t=!0;else if(i==="]"&&t)t=!1;else if(i==="/"&&!t)break;e=i==="\\"}++this.pos}var a=this.input.slice(o,this.pos);++this.pos;var h=this.pos,b=this.readWord1();this.containsEsc&&this.unexpected(h);var g=this.regexpState||(this.regexpState=new de(this));g.reset(o,a,b),this.validateRegExpFlags(g),this.validateRegExpPattern(g);var k=null;try{k=new RegExp(a,b)}catch{}return this.finishToken(s.regexp,{pattern:a,flags:b,value:k})},Se.readInt=function(e,t,o){for(var i=this.options.ecmaVersion>=12&&t===void 0,a=o&&this.input.charCodeAt(this.pos)===48,h=this.pos,b=0,g=0,k=0,A=t??1/0;k<A;++k,++this.pos){var E=this.input.charCodeAt(this.pos),U=void 0;if(i&&E===95){a&&this.raiseRecoverable(this.pos,"Numeric separator is not allowed in legacy octal numeric literals"),g===95&&this.raiseRecoverable(this.pos,"Numeric separator must be exactly one underscore"),k===0&&this.raiseRecoverable(this.pos,"Numeric separator is not allowed at the first of digits"),g=E;continue}if(E>=97?U=E-97+10:E>=65?U=E-65+10:E>=48&&E<=57?U=E-48:U=1/0,U>=e)break;g=E,b=b*e+U}return i&&g===95&&this.raiseRecoverable(this.pos-1,"Numeric separator is not allowed at the last of digits"),this.pos===h||t!=null&&this.pos-h!==t?null:b},Se.readRadixNumber=function(e){var t=this.pos;this.pos+=2;var o=this.readInt(e);return o==null&&this.raise(this.start+2,"Expected number in radix "+e),this.options.ecmaVersion>=11&&this.input.charCodeAt(this.pos)===110?(o=Io(this.input.slice(t,this.pos)),++this.pos):Ne(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number"),this.finishToken(s.num,o)},Se.readNumber=function(e){var t=this.pos;!e&&this.readInt(10,void 0,!0)===null&&this.raise(t,"Invalid number");var o=this.pos-t>=2&&this.input.charCodeAt(t)===48;o&&this.strict&&this.raise(t,"Invalid number");var i=this.input.charCodeAt(this.pos);if(!o&&!e&&this.options.ecmaVersion>=11&&i===110){var a=Io(this.input.slice(t,this.pos));return++this.pos,Ne(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number"),this.finishToken(s.num,a)}o&&/[89]/.test(this.input.slice(t,this.pos))&&(o=!1),i===46&&!o&&(++this.pos,this.readInt(10),i=this.input.charCodeAt(this.pos)),(i===69||i===101)&&!o&&(i=this.input.charCodeAt(++this.pos),(i===43||i===45)&&++this.pos,this.readInt(10)===null&&this.raise(t,"Invalid number")),Ne(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number");var h=hn(this.input.slice(t,this.pos),o);return this.finishToken(s.num,h)},Se.readCodePoint=function(){var e=this.input.charCodeAt(this.pos),t;if(e===123){this.options.ecmaVersion<6&&this.unexpected();var o=++this.pos;t=this.readHexChar(this.input.indexOf("}",this.pos)-this.pos),++this.pos,t>1114111&&this.invalidStringToken(o,"Code point out of bounds")}else t=this.readHexChar(4);return t},Se.readString=function(e){for(var t="",o=++this.pos;;){this.pos>=this.input.length&&this.raise(this.start,"Unterminated string constant");var i=this.input.charCodeAt(this.pos);if(i===e)break;i===92?(t+=this.input.slice(o,this.pos),t+=this.readEscapedChar(!1),o=this.pos):(ae(i,this.options.ecmaVersion>=10)&&this.raise(this.start,"Unterminated string constant"),++this.pos)}return t+=this.input.slice(o,this.pos++),this.finishToken(s.string,t)},vt={},Se.tryReadTemplateToken=function(){this.inTemplateElement=!0;try{this.readTmplToken()}catch(e){if(e===vt)this.readInvalidTemplateToken();else throw e}this.inTemplateElement=!1},Se.invalidStringToken=function(e,t){if(this.inTemplateElement&&this.options.ecmaVersion>=9)throw vt;this.raise(e,t)},Se.readTmplToken=function(){for(var e="",t=this.pos;;){this.pos>=this.input.length&&this.raise(this.start,"Unterminated template");var o=this.input.charCodeAt(this.pos);if(o===96||o===36&&this.input.charCodeAt(this.pos+1)===123)return this.pos===this.start&&(this.type===s.template||this.type===s.invalidTemplate)?o===36?(this.pos+=2,this.finishToken(s.dollarBraceL)):(++this.pos,this.finishToken(s.backQuote)):(e+=this.input.slice(t,this.pos),this.finishToken(s.template,e));if(o===92)e+=this.input.slice(t,this.pos),e+=this.readEscapedChar(!0),t=this.pos;else if(ae(o)){switch(e+=this.input.slice(t,this.pos),++this.pos,o){case 13:this.input.charCodeAt(this.pos)===10&&++this.pos;case 10:e+=`
`;break;default:e+=String.fromCharCode(o);break}this.options.locations&&(++this.curLine,this.lineStart=this.pos),t=this.pos}else++this.pos}},Se.readInvalidTemplateToken=function(){for(;this.pos<this.input.length;this.pos++)switch(this.input[this.pos]){case"\\":++this.pos;break;case"$":if(this.input[this.pos+1]!=="{")break;case"`":return this.finishToken(s.invalidTemplate,this.input.slice(this.start,this.pos))}this.raise(this.start,"Unterminated template")},Se.readEscapedChar=function(e){var t=this.input.charCodeAt(++this.pos);switch(++this.pos,t){case 110:return`
`;case 114:return"\r";case 120:return String.fromCharCode(this.readHexChar(2));case 117:return Mo(this.readCodePoint());case 116:return"	";case 98:return"\b";case 118:return"\v";case 102:return"\f";case 13:this.input.charCodeAt(this.pos)===10&&++this.pos;case 10:return this.options.locations&&(this.lineStart=this.pos,++this.curLine),"";case 56:case 57:if(e){var o=this.pos-1;return this.invalidStringToken(o,"Invalid escape sequence in template string"),null}default:if(t>=48&&t<=55){var i=this.input.substr(this.pos-1,3).match(/^[0-7]+/)[0],a=parseInt(i,8);return a>255&&(i=i.slice(0,-1),a=parseInt(i,8)),this.pos+=i.length-1,t=this.input.charCodeAt(this.pos),(i!=="0"||t===56||t===57)&&(this.strict||e)&&this.invalidStringToken(this.pos-1-i.length,e?"Octal literal in template string":"Octal literal in strict mode"),String.fromCharCode(a)}return ae(t)?"":String.fromCharCode(t)}},Se.readHexChar=function(e){var t=this.pos,o=this.readInt(16,e);return o===null&&this.invalidStringToken(t,"Bad character escape sequence"),o},Se.readWord1=function(){this.containsEsc=!1;for(var e="",t=!0,o=this.pos,i=this.options.ecmaVersion>=6;this.pos<this.input.length;){var a=this.fullCharCodeAtPos();if(wt(a,i))this.pos+=a<=65535?1:2;else if(a===92){this.containsEsc=!0,e+=this.input.slice(o,this.pos);var h=this.pos;this.input.charCodeAt(++this.pos)!==117&&this.invalidStringToken(this.pos,"Expecting Unicode escape sequence \\uXXXX"),++this.pos;var b=this.readCodePoint();(t?Ne:wt)(b,i)||this.invalidStringToken(h,"Invalid Unicode escape"),e+=Mo(b),o=this.pos}else break;t=!1}return e+this.input.slice(o,this.pos)},Se.readWord=function(){var e=this.readWord1(),t=s.name;return this.keywords.test(e)&&(t=mt[e]),this.finishToken(t,e)},Wt="7.4.1",Vt.acorn={Parser:Vt,version:Wt,defaultOptions:J,Position:pe,SourceLocation:K,getLineInfo:Qe,Node:vo,TokenType:T,tokTypes:s,keywordTypes:mt,TokContext:go,tokContexts:Ht,isIdentifierChar:wt,isIdentifierStart:Ne,Token:Ve,isNewLine:ae,lineBreak:M,lineBreakG:I,nonASCIIwhitespace:C}}}),On=(0,X.P$)({"../../node_modules/acorn-jsx/xhtml.js"(e,t){t.exports={quot:'"',amp:"&",apos:"'",lt:"<",gt:">",nbsp:"\xA0",iexcl:"\xA1",cent:"\xA2",pound:"\xA3",curren:"\xA4",yen:"\xA5",brvbar:"\xA6",sect:"\xA7",uml:"\xA8",copy:"\xA9",ordf:"\xAA",laquo:"\xAB",not:"\xAC",shy:"\xAD",reg:"\xAE",macr:"\xAF",deg:"\xB0",plusmn:"\xB1",sup2:"\xB2",sup3:"\xB3",acute:"\xB4",micro:"\xB5",para:"\xB6",middot:"\xB7",cedil:"\xB8",sup1:"\xB9",ordm:"\xBA",raquo:"\xBB",frac14:"\xBC",frac12:"\xBD",frac34:"\xBE",iquest:"\xBF",Agrave:"\xC0",Aacute:"\xC1",Acirc:"\xC2",Atilde:"\xC3",Auml:"\xC4",Aring:"\xC5",AElig:"\xC6",Ccedil:"\xC7",Egrave:"\xC8",Eacute:"\xC9",Ecirc:"\xCA",Euml:"\xCB",Igrave:"\xCC",Iacute:"\xCD",Icirc:"\xCE",Iuml:"\xCF",ETH:"\xD0",Ntilde:"\xD1",Ograve:"\xD2",Oacute:"\xD3",Ocirc:"\xD4",Otilde:"\xD5",Ouml:"\xD6",times:"\xD7",Oslash:"\xD8",Ugrave:"\xD9",Uacute:"\xDA",Ucirc:"\xDB",Uuml:"\xDC",Yacute:"\xDD",THORN:"\xDE",szlig:"\xDF",agrave:"\xE0",aacute:"\xE1",acirc:"\xE2",atilde:"\xE3",auml:"\xE4",aring:"\xE5",aelig:"\xE6",ccedil:"\xE7",egrave:"\xE8",eacute:"\xE9",ecirc:"\xEA",euml:"\xEB",igrave:"\xEC",iacute:"\xED",icirc:"\xEE",iuml:"\xEF",eth:"\xF0",ntilde:"\xF1",ograve:"\xF2",oacute:"\xF3",ocirc:"\xF4",otilde:"\xF5",ouml:"\xF6",divide:"\xF7",oslash:"\xF8",ugrave:"\xF9",uacute:"\xFA",ucirc:"\xFB",uuml:"\xFC",yacute:"\xFD",thorn:"\xFE",yuml:"\xFF",OElig:"\u0152",oelig:"\u0153",Scaron:"\u0160",scaron:"\u0161",Yuml:"\u0178",fnof:"\u0192",circ:"\u02C6",tilde:"\u02DC",Alpha:"\u0391",Beta:"\u0392",Gamma:"\u0393",Delta:"\u0394",Epsilon:"\u0395",Zeta:"\u0396",Eta:"\u0397",Theta:"\u0398",Iota:"\u0399",Kappa:"\u039A",Lambda:"\u039B",Mu:"\u039C",Nu:"\u039D",Xi:"\u039E",Omicron:"\u039F",Pi:"\u03A0",Rho:"\u03A1",Sigma:"\u03A3",Tau:"\u03A4",Upsilon:"\u03A5",Phi:"\u03A6",Chi:"\u03A7",Psi:"\u03A8",Omega:"\u03A9",alpha:"\u03B1",beta:"\u03B2",gamma:"\u03B3",delta:"\u03B4",epsilon:"\u03B5",zeta:"\u03B6",eta:"\u03B7",theta:"\u03B8",iota:"\u03B9",kappa:"\u03BA",lambda:"\u03BB",mu:"\u03BC",nu:"\u03BD",xi:"\u03BE",omicron:"\u03BF",pi:"\u03C0",rho:"\u03C1",sigmaf:"\u03C2",sigma:"\u03C3",tau:"\u03C4",upsilon:"\u03C5",phi:"\u03C6",chi:"\u03C7",psi:"\u03C8",omega:"\u03C9",thetasym:"\u03D1",upsih:"\u03D2",piv:"\u03D6",ensp:"\u2002",emsp:"\u2003",thinsp:"\u2009",zwnj:"\u200C",zwj:"\u200D",lrm:"\u200E",rlm:"\u200F",ndash:"\u2013",mdash:"\u2014",lsquo:"\u2018",rsquo:"\u2019",sbquo:"\u201A",ldquo:"\u201C",rdquo:"\u201D",bdquo:"\u201E",dagger:"\u2020",Dagger:"\u2021",bull:"\u2022",hellip:"\u2026",permil:"\u2030",prime:"\u2032",Prime:"\u2033",lsaquo:"\u2039",rsaquo:"\u203A",oline:"\u203E",frasl:"\u2044",euro:"\u20AC",image:"\u2111",weierp:"\u2118",real:"\u211C",trade:"\u2122",alefsym:"\u2135",larr:"\u2190",uarr:"\u2191",rarr:"\u2192",darr:"\u2193",harr:"\u2194",crarr:"\u21B5",lArr:"\u21D0",uArr:"\u21D1",rArr:"\u21D2",dArr:"\u21D3",hArr:"\u21D4",forall:"\u2200",part:"\u2202",exist:"\u2203",empty:"\u2205",nabla:"\u2207",isin:"\u2208",notin:"\u2209",ni:"\u220B",prod:"\u220F",sum:"\u2211",minus:"\u2212",lowast:"\u2217",radic:"\u221A",prop:"\u221D",infin:"\u221E",ang:"\u2220",and:"\u2227",or:"\u2228",cap:"\u2229",cup:"\u222A",int:"\u222B",there4:"\u2234",sim:"\u223C",cong:"\u2245",asymp:"\u2248",ne:"\u2260",equiv:"\u2261",le:"\u2264",ge:"\u2265",sub:"\u2282",sup:"\u2283",nsub:"\u2284",sube:"\u2286",supe:"\u2287",oplus:"\u2295",otimes:"\u2297",perp:"\u22A5",sdot:"\u22C5",lceil:"\u2308",rceil:"\u2309",lfloor:"\u230A",rfloor:"\u230B",lang:"\u2329",rang:"\u232A",loz:"\u25CA",spades:"\u2660",clubs:"\u2663",hearts:"\u2665",diams:"\u2666"}}}),fn=(0,X.P$)({"../../node_modules/acorn-jsx/index.js"(e,t){var o=On(),i=/^[\da-fA-F]+$/,a=/^\d+$/,h=new WeakMap;function b(A){A=A.Parser.acorn||A;let E=h.get(A);if(!E){let U=A.tokTypes,z=A.TokContext,L=A.TokenType,x=new z("<tag",!1),F=new z("</tag",!1),le=new z("<tag>...</tag>",!0,!0),Ae={tc_oTag:x,tc_cTag:F,tc_expr:le},Z={jsxName:new L("jsxName"),jsxText:new L("jsxText",{beforeExpr:!0}),jsxTagStart:new L("jsxTagStart",{startsExpr:!0}),jsxTagEnd:new L("jsxTagEnd")};Z.jsxTagStart.updateContext=function(){this.context.push(le),this.context.push(x),this.exprAllowed=!1},Z.jsxTagEnd.updateContext=function($e){let $=this.context.pop();$===x&&$e===U.slash||$===F?(this.context.pop(),this.exprAllowed=this.curContext()===le):this.exprAllowed=!0},E={tokContexts:Ae,tokTypes:Z},h.set(A,E)}return E}function g(A){if(!A)return A;if(A.type==="JSXIdentifier")return A.name;if(A.type==="JSXNamespacedName")return A.namespace.name+":"+A.name.name;if(A.type==="JSXMemberExpression")return g(A.object)+"."+g(A.property)}t.exports=function(A){return A=A||{},function(E){return k({allowNamespaces:A.allowNamespaces!==!1,allowNamespacedObjects:!!A.allowNamespacedObjects},E)}},Object.defineProperty(t.exports,"tokTypes",{get:function(){return b((ht(),(0,X.Yp)(We))).tokTypes},configurable:!0,enumerable:!0});function k(A,E){let U=E.acorn||(ht(),(0,X.Yp)(We)),z=b(U),L=U.tokTypes,x=z.tokTypes,F=U.tokContexts,le=z.tokContexts.tc_oTag,Ae=z.tokContexts.tc_cTag,Z=z.tokContexts.tc_expr,$e=U.isNewLine,$=U.isIdentifierStart,O=U.isIdentifierChar;return class extends E{static get acornJsx(){return z}jsx_readToken(){let S="",j=this.pos;for(;;){this.pos>=this.input.length&&this.raise(this.start,"Unterminated JSX contents");let Q=this.input.charCodeAt(this.pos);switch(Q){case 60:case 123:return this.pos===this.start?Q===60&&this.exprAllowed?(++this.pos,this.finishToken(x.jsxTagStart)):this.getTokenFromCode(Q):(S+=this.input.slice(j,this.pos),this.finishToken(x.jsxText,S));case 38:S+=this.input.slice(j,this.pos),S+=this.jsx_readEntity(),j=this.pos;break;case 62:case 125:this.raise(this.pos,"Unexpected token `"+this.input[this.pos]+"`. Did you mean `"+(Q===62?"&gt;":"&rbrace;")+'` or `{"'+this.input[this.pos]+'"}`?');default:$e(Q)?(S+=this.input.slice(j,this.pos),S+=this.jsx_readNewLine(!0),j=this.pos):++this.pos}}}jsx_readNewLine(S){let j=this.input.charCodeAt(this.pos),Q;return++this.pos,j===13&&this.input.charCodeAt(this.pos)===10?(++this.pos,Q=S?`
`:`\r
`):Q=String.fromCharCode(j),this.options.locations&&(++this.curLine,this.lineStart=this.pos),Q}jsx_readString(S){let j="",Q=++this.pos;for(;;){this.pos>=this.input.length&&this.raise(this.start,"Unterminated string constant");let _e=this.input.charCodeAt(this.pos);if(_e===S)break;_e===38?(j+=this.input.slice(Q,this.pos),j+=this.jsx_readEntity(),Q=this.pos):$e(_e)?(j+=this.input.slice(Q,this.pos),j+=this.jsx_readNewLine(!1),Q=this.pos):++this.pos}return j+=this.input.slice(Q,this.pos++),this.finishToken(L.string,j)}jsx_readEntity(){let S="",j=0,Q,_e=this.input[this.pos];_e!=="&"&&this.raise(this.pos,"Entity must start with an ampersand");let Xe=++this.pos;for(;this.pos<this.input.length&&j++<10;){if(_e=this.input[this.pos++],_e===";"){S[0]==="#"?S[1]==="x"?(S=S.substr(2),i.test(S)&&(Q=String.fromCharCode(parseInt(S,16)))):(S=S.substr(1),a.test(S)&&(Q=String.fromCharCode(parseInt(S,10)))):Q=o[S];break}S+=_e}return Q||(this.pos=Xe,"&")}jsx_readWord(){let S,j=this.pos;do S=this.input.charCodeAt(++this.pos);while(O(S)||S===45);return this.finishToken(x.jsxName,this.input.slice(j,this.pos))}jsx_parseIdentifier(){let S=this.startNode();return this.type===x.jsxName?S.name=this.value:this.type.keyword?S.name=this.type.keyword:this.unexpected(),this.next(),this.finishNode(S,"JSXIdentifier")}jsx_parseNamespacedName(){let S=this.start,j=this.startLoc,Q=this.jsx_parseIdentifier();if(!A.allowNamespaces||!this.eat(L.colon))return Q;var _e=this.startNodeAt(S,j);return _e.namespace=Q,_e.name=this.jsx_parseIdentifier(),this.finishNode(_e,"JSXNamespacedName")}jsx_parseElementName(){if(this.type===x.jsxTagEnd)return"";let S=this.start,j=this.startLoc,Q=this.jsx_parseNamespacedName();for(this.type===L.dot&&Q.type==="JSXNamespacedName"&&!A.allowNamespacedObjects&&this.unexpected();this.eat(L.dot);){let _e=this.startNodeAt(S,j);_e.object=Q,_e.property=this.jsx_parseIdentifier(),Q=this.finishNode(_e,"JSXMemberExpression")}return Q}jsx_parseAttributeValue(){switch(this.type){case L.braceL:let S=this.jsx_parseExpressionContainer();return S.expression.type==="JSXEmptyExpression"&&this.raise(S.start,"JSX attributes must only be assigned a non-empty expression"),S;case x.jsxTagStart:case L.string:return this.parseExprAtom();default:this.raise(this.start,"JSX value should be either an expression or a quoted JSX text")}}jsx_parseEmptyExpression(){let S=this.startNodeAt(this.lastTokEnd,this.lastTokEndLoc);return this.finishNodeAt(S,"JSXEmptyExpression",this.start,this.startLoc)}jsx_parseExpressionContainer(){let S=this.startNode();return this.next(),S.expression=this.type===L.braceR?this.jsx_parseEmptyExpression():this.parseExpression(),this.expect(L.braceR),this.finishNode(S,"JSXExpressionContainer")}jsx_parseAttribute(){let S=this.startNode();return this.eat(L.braceL)?(this.expect(L.ellipsis),S.argument=this.parseMaybeAssign(),this.expect(L.braceR),this.finishNode(S,"JSXSpreadAttribute")):(S.name=this.jsx_parseNamespacedName(),S.value=this.eat(L.eq)?this.jsx_parseAttributeValue():null,this.finishNode(S,"JSXAttribute"))}jsx_parseOpeningElementAt(S,j){let Q=this.startNodeAt(S,j);Q.attributes=[];let _e=this.jsx_parseElementName();for(_e&&(Q.name=_e);this.type!==L.slash&&this.type!==x.jsxTagEnd;)Q.attributes.push(this.jsx_parseAttribute());return Q.selfClosing=this.eat(L.slash),this.expect(x.jsxTagEnd),this.finishNode(Q,_e?"JSXOpeningElement":"JSXOpeningFragment")}jsx_parseClosingElementAt(S,j){let Q=this.startNodeAt(S,j),_e=this.jsx_parseElementName();return _e&&(Q.name=_e),this.expect(x.jsxTagEnd),this.finishNode(Q,_e?"JSXClosingElement":"JSXClosingFragment")}jsx_parseElementAt(S,j){let Q=this.startNodeAt(S,j),_e=[],Xe=this.jsx_parseOpeningElementAt(S,j),qe=null;if(!Xe.selfClosing){e:for(;;)switch(this.type){case x.jsxTagStart:if(S=this.start,j=this.startLoc,this.next(),this.eat(L.slash)){qe=this.jsx_parseClosingElementAt(S,j);break e}_e.push(this.jsx_parseElementAt(S,j));break;case x.jsxText:_e.push(this.parseExprAtom());break;case L.braceL:_e.push(this.jsx_parseExpressionContainer());break;default:this.unexpected()}g(qe.name)!==g(Xe.name)&&this.raise(qe.start,"Expected corresponding JSX closing tag for <"+g(Xe.name)+">")}let Ye=Xe.name?"Element":"Fragment";return Q["opening"+Ye]=Xe,Q["closing"+Ye]=qe,Q.children=_e,this.type===L.relational&&this.value==="<"&&this.raise(this.start,"Adjacent JSX elements must be wrapped in an enclosing tag"),this.finishNode(Q,"JSX"+Ye)}jsx_parseText(){let S=this.parseLiteral(this.value);return S.type="JSXText",S}jsx_parseElement(){let S=this.start,j=this.startLoc;return this.next(),this.jsx_parseElementAt(S,j)}parseExprAtom(S){return this.type===x.jsxText?this.jsx_parseText():this.type===x.jsxTagStart?this.jsx_parseElement():super.parseExprAtom(S)}readToken(S){let j=this.curContext();if(j===Z)return this.jsx_readToken();if(j===le||j===Ae){if($(S))return this.jsx_readWord();if(S==62)return++this.pos,this.finishToken(x.jsxTagEnd);if((S===34||S===39)&&j==le)return this.jsx_readString(S)}return S===60&&this.exprAllowed&&this.input.charCodeAt(this.pos+1)!==33?(++this.pos,this.finishToken(x.jsxTagStart)):super.readToken(S)}updateContext(S){if(this.type==L.braceL){var j=this.curContext();j==le?this.context.push(F.b_expr):j==Z?this.context.push(F.b_tmpl):super.updateContext(S),this.exprAllowed=!0}else if(this.type===L.slash&&S===x.jsxTagStart)this.context.length-=2,this.context.push(Ae),this.exprAllowed=!1;else return super.updateContext(S)}}}}}),kn=(0,X.P$)({"../../node_modules/html-tags/html-tags.json"(e,t){t.exports=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","search","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"]}}),_n=(0,X.P$)({"../../node_modules/html-tags/index.js"(e,t){t.exports=kn()}}),Yn={};(0,X.VA)(Yn,{argTypesEnhancers:()=>Zr,parameters:()=>pr});var an="custom",wn="object",ao="array",Ir="class",sn="func",ln="element",Or=(0,X.f1)(xt());function Nr(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];var i=Array.from(typeof e=="string"?[e]:e);i[i.length-1]=i[i.length-1].replace(/\r?\n([\t ]*)$/,"");var a=i.reduce(function(g,k){var A=k.match(/\n([\t ]+|(?!\s).)/g);return A?g.concat(A.map(function(E){var U,z;return(z=(U=E.match(/[\t ]/g))===null||U===void 0?void 0:U.length)!==null&&z!==void 0?z:0})):g},[]);if(a.length){var h=new RegExp(`
[	 ]{`+Math.min.apply(Math,a)+"}","g");i=i.map(function(g){return g.replace(h,`
`)})}i[0]=i[0].replace(/^\r?\n/,"");var b=i[0];return t.forEach(function(g,k){var A=b.match(/(?:^|\n)( *)$/),E=A?A[1]:"",U=g;typeof g=="string"&&g.includes(`
`)&&(U=String(g).split(`
`).map(function(z,L){return L===0?z:""+E+z}).join(`
`)),b+=U+i[k+1]}),b}var Qn={format:{indent:{style:"  "},semicolons:!1}},Rr={...Qn,format:{newline:""}},Yt={...Qn};function Eo(e,t=!1){return(0,Or.generate)(e,t?Rr:Yt)}function Nn(e,t=!1){return t?yn(e):Eo(e)}function yn(e){let t=Eo(e,!0);return t.endsWith(" }")||(t=`${t.slice(0,-1)} }`),t}function Zn(e,t=!1){return t?ct(e):Rn(e)}function Rn(e){let t=Eo(e);return t.endsWith("  }]")&&(t=Nr(t)),t}function ct(e){let t=Eo(e,!0);return t.startsWith("[    ")&&(t=t.replace("[    ","[")),t}ht();var br=(0,X.f1)(fn());function Qo(e,t,o,i,a){o||(o=ge),(function h(b,g,k){var A=k||b.type,E=t[A];o[A](b,g,h),E&&E(b,g)})(e,i,a)}function er(e,t,o,i,a){var h=[];o||(o=ge),(function b(g,k,A){var E=A||g.type,U=t[E],z=g!==h[h.length-1];z&&h.push(g),o[E](g,k,b),U&&U(g,k||h,h),z&&h.pop()})(e,i,a)}function xn(e,t,o){o(e,t)}function Tt(e,t,o){}var ge={};ge.Program=ge.BlockStatement=function(e,t,o){for(var i=0,a=e.body;i<a.length;i+=1){var h=a[i];o(h,t,"Statement")}},ge.Statement=xn,ge.EmptyStatement=Tt,ge.ExpressionStatement=ge.ParenthesizedExpression=ge.ChainExpression=function(e,t,o){return o(e.expression,t,"Expression")},ge.IfStatement=function(e,t,o){o(e.test,t,"Expression"),o(e.consequent,t,"Statement"),e.alternate&&o(e.alternate,t,"Statement")},ge.LabeledStatement=function(e,t,o){return o(e.body,t,"Statement")},ge.BreakStatement=ge.ContinueStatement=Tt,ge.WithStatement=function(e,t,o){o(e.object,t,"Expression"),o(e.body,t,"Statement")},ge.SwitchStatement=function(e,t,o){o(e.discriminant,t,"Expression");for(var i=0,a=e.cases;i<a.length;i+=1){var h=a[i];h.test&&o(h.test,t,"Expression");for(var b=0,g=h.consequent;b<g.length;b+=1){var k=g[b];o(k,t,"Statement")}}},ge.SwitchCase=function(e,t,o){e.test&&o(e.test,t,"Expression");for(var i=0,a=e.consequent;i<a.length;i+=1){var h=a[i];o(h,t,"Statement")}},ge.ReturnStatement=ge.YieldExpression=ge.AwaitExpression=function(e,t,o){e.argument&&o(e.argument,t,"Expression")},ge.ThrowStatement=ge.SpreadElement=function(e,t,o){return o(e.argument,t,"Expression")},ge.TryStatement=function(e,t,o){o(e.block,t,"Statement"),e.handler&&o(e.handler,t),e.finalizer&&o(e.finalizer,t,"Statement")},ge.CatchClause=function(e,t,o){e.param&&o(e.param,t,"Pattern"),o(e.body,t,"Statement")},ge.WhileStatement=ge.DoWhileStatement=function(e,t,o){o(e.test,t,"Expression"),o(e.body,t,"Statement")},ge.ForStatement=function(e,t,o){e.init&&o(e.init,t,"ForInit"),e.test&&o(e.test,t,"Expression"),e.update&&o(e.update,t,"Expression"),o(e.body,t,"Statement")},ge.ForInStatement=ge.ForOfStatement=function(e,t,o){o(e.left,t,"ForInit"),o(e.right,t,"Expression"),o(e.body,t,"Statement")},ge.ForInit=function(e,t,o){e.type==="VariableDeclaration"?o(e,t):o(e,t,"Expression")},ge.DebuggerStatement=Tt,ge.FunctionDeclaration=function(e,t,o){return o(e,t,"Function")},ge.VariableDeclaration=function(e,t,o){for(var i=0,a=e.declarations;i<a.length;i+=1){var h=a[i];o(h,t)}},ge.VariableDeclarator=function(e,t,o){o(e.id,t,"Pattern"),e.init&&o(e.init,t,"Expression")},ge.Function=function(e,t,o){e.id&&o(e.id,t,"Pattern");for(var i=0,a=e.params;i<a.length;i+=1){var h=a[i];o(h,t,"Pattern")}o(e.body,t,e.expression?"Expression":"Statement")},ge.Pattern=function(e,t,o){e.type==="Identifier"?o(e,t,"VariablePattern"):e.type==="MemberExpression"?o(e,t,"MemberPattern"):o(e,t)},ge.VariablePattern=Tt,ge.MemberPattern=xn,ge.RestElement=function(e,t,o){return o(e.argument,t,"Pattern")},ge.ArrayPattern=function(e,t,o){for(var i=0,a=e.elements;i<a.length;i+=1){var h=a[i];h&&o(h,t,"Pattern")}},ge.ObjectPattern=function(e,t,o){for(var i=0,a=e.properties;i<a.length;i+=1){var h=a[i];h.type==="Property"?(h.computed&&o(h.key,t,"Expression"),o(h.value,t,"Pattern")):h.type==="RestElement"&&o(h.argument,t,"Pattern")}},ge.Expression=xn,ge.ThisExpression=ge.Super=ge.MetaProperty=Tt,ge.ArrayExpression=function(e,t,o){for(var i=0,a=e.elements;i<a.length;i+=1){var h=a[i];h&&o(h,t,"Expression")}},ge.ObjectExpression=function(e,t,o){for(var i=0,a=e.properties;i<a.length;i+=1){var h=a[i];o(h,t)}},ge.FunctionExpression=ge.ArrowFunctionExpression=ge.FunctionDeclaration,ge.SequenceExpression=function(e,t,o){for(var i=0,a=e.expressions;i<a.length;i+=1){var h=a[i];o(h,t,"Expression")}},ge.TemplateLiteral=function(e,t,o){for(var i=0,a=e.quasis;i<a.length;i+=1){var h=a[i];o(h,t)}for(var b=0,g=e.expressions;b<g.length;b+=1){var k=g[b];o(k,t,"Expression")}},ge.TemplateElement=Tt,ge.UnaryExpression=ge.UpdateExpression=function(e,t,o){o(e.argument,t,"Expression")},ge.BinaryExpression=ge.LogicalExpression=function(e,t,o){o(e.left,t,"Expression"),o(e.right,t,"Expression")},ge.AssignmentExpression=ge.AssignmentPattern=function(e,t,o){o(e.left,t,"Pattern"),o(e.right,t,"Expression")},ge.ConditionalExpression=function(e,t,o){o(e.test,t,"Expression"),o(e.consequent,t,"Expression"),o(e.alternate,t,"Expression")},ge.NewExpression=ge.CallExpression=function(e,t,o){if(o(e.callee,t,"Expression"),e.arguments)for(var i=0,a=e.arguments;i<a.length;i+=1){var h=a[i];o(h,t,"Expression")}},ge.MemberExpression=function(e,t,o){o(e.object,t,"Expression"),e.computed&&o(e.property,t,"Expression")},ge.ExportNamedDeclaration=ge.ExportDefaultDeclaration=function(e,t,o){e.declaration&&o(e.declaration,t,e.type==="ExportNamedDeclaration"||e.declaration.id?"Statement":"Expression"),e.source&&o(e.source,t,"Expression")},ge.ExportAllDeclaration=function(e,t,o){e.exported&&o(e.exported,t),o(e.source,t,"Expression")},ge.ImportDeclaration=function(e,t,o){for(var i=0,a=e.specifiers;i<a.length;i+=1){var h=a[i];o(h,t)}o(e.source,t,"Expression")},ge.ImportExpression=function(e,t,o){o(e.source,t,"Expression")},ge.ImportSpecifier=ge.ImportDefaultSpecifier=ge.ImportNamespaceSpecifier=ge.Identifier=ge.Literal=Tt,ge.TaggedTemplateExpression=function(e,t,o){o(e.tag,t,"Expression"),o(e.quasi,t,"Expression")},ge.ClassDeclaration=ge.ClassExpression=function(e,t,o){return o(e,t,"Class")},ge.Class=function(e,t,o){e.id&&o(e.id,t,"Pattern"),e.superClass&&o(e.superClass,t,"Expression"),o(e.body,t)},ge.ClassBody=function(e,t,o){for(var i=0,a=e.body;i<a.length;i+=1){var h=a[i];o(h,t)}},ge.MethodDefinition=ge.Property=function(e,t,o){e.computed&&o(e.key,t,"Expression"),o(e.value,t,"Expression")};var cn={...ge,JSXElement:()=>{}},jr=Vt.extend((0,br.default)());function vn(e){return e!=null?e.name:null}function hr(e){return e.filter(t=>t.type==="ObjectExpression"||t.type==="ArrayExpression")}function tr(e){let t=[];return er(e,{ObjectExpression(o,i){t.push(hr(i).length)},ArrayExpression(o,i){t.push(hr(i).length)}},cn),Math.max(...t)}function zr(e){return{inferredType:{type:"Identifier",identifier:vn(e)},ast:e}}function Lr(e){return{inferredType:{type:"Literal"},ast:e}}function or(e){let t;Qo(e.body,{JSXElement(a){t=a}},cn);let o={type:t!=null?"Element":"Function",params:e.params,hasParams:e.params.length!==0},i=vn(e.id);return i!=null&&(o.identifier=i),{inferredType:o,ast:e}}function En(e){let t;return Qo(e.body,{JSXElement(o){t=o}},cn),{inferredType:{type:t!=null?"Element":"Class",identifier:vn(e.id)},ast:e}}function Ro(e){let t={type:"Element"},o=vn(e.openingElement.name);return o!=null&&(t.identifier=o),{inferredType:t,ast:e}}function An(e){let t=e.callee.type==="MemberExpression"?e.callee.property:e.callee;return vn(t)==="shape"?pn(e.arguments[0]):null}function pn(e){return{inferredType:{type:"Object",depth:tr(e)},ast:e}}function gr(e){return{inferredType:{type:"Array",depth:tr(e)},ast:e}}function un(e){switch(e.type){case"Identifier":return zr(e);case"Literal":return Lr(e);case"FunctionExpression":case"ArrowFunctionExpression":return or(e);case"ClassExpression":return En(e);case"JSXElement":return Ro(e);case"CallExpression":return An(e);case"ObjectExpression":return pn(e);case"ArrayExpression":return gr(e);default:return null}}function jn(e){let t=jr.parse(`(${e})`,{ecmaVersion:2020}),o={inferredType:{type:"Unknown"},ast:t};if(t.body[0]!=null){let i=t.body[0];switch(i.type){case"ExpressionStatement":{let a=un(i.expression);a!=null&&(o=a);break}}}return o}function jo(e){try{return{...jn(e)}}catch{}return{inferredType:{type:"Unknown"}}}var zn=(0,X.f1)(_n());function dn(e){return zn.default.includes(e.toLowerCase())}function nr({inferredType:e,ast:t}){let{depth:o}=e;if(o<=2){let i=Zn(t,!0);if(!(0,re.Sy)(i))return(0,re.Ux)(i)}return(0,re.Ux)(ao,Zn(t))}function rr({inferredType:e,ast:t}){let{depth:o}=e;if(o===1){let i=Nn(t,!0);if(!(0,re.Sy)(i))return(0,re.Ux)(i)}return(0,re.Ux)(wn,Nn(t))}function mn(e,t){return t?`${e}( ... )`:`${e}()`}function Zo(e){return`<${e} />`}function Dn(e){let{type:t,identifier:o}=e;switch(t){case"Function":return mn(o,e.hasParams);case"Element":return Zo(o);default:return o}}function fr({inferredType:e,ast:t}){let{identifier:o}=e;if(o!=null)return(0,re.Ux)(Dn(e),Eo(t));let i=Eo(t,!0);return(0,re.Sy)(i)?(0,re.Ux)(sn,Eo(t)):(0,re.Ux)(i)}function Mr(e,t){let{inferredType:o}=t,{identifier:i}=o;if(i!=null&&!dn(i)){let a=Dn(o);return(0,re.Ux)(a,e)}return(0,re.Sy)(e)?(0,re.Ux)(ln,e):(0,re.Ux)(e)}function ir(e){try{let t=jo(e);switch(t.inferredType.type){case"Object":return rr(t);case"Function":return fr(t);case"Element":return Mr(e,t);case"Array":return nr(t);default:return null}}catch(t){console.error(t)}return null}function Jr(e){if(typeof e!="object"||e==null)return!1;if(Object.getPrototypeOf(e)===null)return!0;if(Object.prototype.toString.call(e)!=="[object Object]"){let o=e[Symbol.toStringTag];return o==null||!Object.getOwnPropertyDescriptor(e,Symbol.toStringTag)?.writable?!1:e.toString()===`[object ${o}]`}let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function kr(e){return typeof e=="function"}function Ur(e){return typeof e=="string"||e instanceof String}var ar=nt.HA;function _r(e){return e.$$typeof!=null}function wr(e,t){let{name:o}=e;return o!==""&&o!=="anonymous"&&o!==t?o:null}var Vr=e=>(0,re.Ux)(JSON.stringify(e));function $r(e){let{type:t}=e,{displayName:o}=t,i=ar(e,{});if(o!=null){let a=Zo(o);return(0,re.Ux)(a,i)}if(Ur(t)&&dn(t)){let a=ar(e,{tabStop:0}).replace(/\r?\n|\r/g,"");if(!(0,re.Sy)(a))return(0,re.Ux)(a)}return(0,re.Ux)(ln,i)}var qr=e=>{if(_r(e)&&e.type!=null)return $r(e);if(Jr(e)){let t=jo(JSON.stringify(e));return rr(t)}if(Array.isArray(e)){let t=jo(JSON.stringify(e));return nr(t)}return(0,re.Ux)(wn)},Wr=(e,t)=>{let o=!1,i;if(kr(e.render))o=!0;else if(e.prototype!=null&&kr(e.prototype.render))o=!0;else{let h;try{i=jo(e.toString());let{hasParams:b,params:g}=i.inferredType;b?g.length===1&&g[0].type==="ObjectPattern"&&(h=e({})):h=e(),h!=null&&_r(h)&&(o=!0)}catch{}}let a=wr(e,t.name);if(a!=null){if(o)return(0,re.Ux)(Zo(a));i!=null&&(i=jo(e.toString()));let{hasParams:h}=i.inferredType;return(0,re.Ux)(mn(a,h))}return(0,re.Ux)(o?ln:sn)},Gr=e=>(0,re.Ux)(e.toString()),yr={string:Vr,object:qr,function:Wr,default:Gr};function Xr(e={}){return{...yr,...e}}function Ln(e,t,o=yr){try{switch(typeof e){case"string":return o.string(e,t);case"object":return o.object(e,t);case"function":return o.function(e,t);default:return o.default(e,t)}}catch(i){console.error(i)}return null}function xr(e,t){let o=e!=null,i=t!=null;if(!o&&!i)return"";let a=[];if(o){let h=e.map(b=>{let g=b.getPrettyName(),k=b.getTypeName();return k!=null?`${g}: ${k}`:g});a.push(`(${h.join(", ")})`)}else a.push("()");return i&&a.push(`=> ${t.getTypeName()}`),a.join(" ")}function bn(e,t){let o=e!=null,i=t!=null;if(!o&&!i)return"";let a=[];return o?a.push("( ... )"):a.push("()"),i&&a.push(`=> ${t.getTypeName()}`),a.join(" ")}function uo(e){return e.replace(/,/g,`,\r
`)}var sr=150;function no({name:e,short:t,compact:o,full:i,inferredType:a}){return{name:e,short:t,compact:o,full:i??t,inferredType:a}}function To(e){return e.replace(/PropTypes./g,"").replace(/.isRequired/g,"")}function Mn(e){return e.split(/\r?\n/)}function Jn(e,t=!1){return To(Nn(e,t))}function lr(e,t=!1){return To(Eo(e,t))}function Kr(e){switch(e){case"Object":return wn;case"Array":return ao;case"Class":return Ir;case"Function":return sn;case"Element":return ln;default:return an}}function Bo(e,t){let{inferredType:o,ast:i}=jo(e),{type:a}=o,h,b,g;switch(a){case"Identifier":case"Literal":h=e,b=e;break;case"Object":{let{depth:k}=o;h=wn,b=k===1?Jn(i,!0):null,g=Jn(i);break}case"Element":{let{identifier:k}=o;h=k!=null&&!dn(k)?k:ln,b=Mn(e).length===1?e:null,g=e;break}case"Array":{let{depth:k}=o;h=ao,b=k<=2?lr(i,!0):null,g=lr(i);break}default:h=Kr(a),b=Mn(e).length===1?e:null,g=e;break}return no({name:t,short:h,compact:b,full:g,inferredType:a})}function Hr({raw:e}){return e!=null?Bo(e,"custom"):no({name:"custom",short:an,compact:an})}function vr(e){let{jsDocTags:t}=e;return t!=null&&(t.params!=null||t.returns!=null)?no({name:"func",short:bn(t.params,t.returns),compact:null,full:xr(t.params,t.returns)}):no({name:"func",short:sn,compact:sn})}function Jo(e,t){let o=Object.keys(e.value).map(b=>`${b}: ${c(e.value[b],t).full}`).join(", "),{inferredType:i,ast:a}=jo(`{ ${o} }`),{depth:h}=i;return no({name:"shape",short:wn,compact:h===1&&a?Jn(a,!0):null,full:a?Jn(a):null})}function Un(e){return`objectOf(${e})`}function Vn(e,t){let{short:o,compact:i,full:a}=c(e.value,t);return no({name:"objectOf",short:Un(o),compact:i!=null?Un(i):null,full:a&&Un(a)})}function Yr(e,t){if(Array.isArray(e.value)){let o=e.value.reduce((i,a)=>{let{short:h,compact:b,full:g}=c(a,t);return i.short.push(h),i.compact.push(b),i.full.push(g),i},{short:[],compact:[],full:[]});return no({name:"union",short:o.short.join(" | "),compact:o.compact.every(i=>i!=null)?o.compact.join(" | "):null,full:o.full.join(" | ")})}return no({name:"union",short:e.value,compact:null})}function Er({value:e,computed:t}){return t?Bo(e,"enumvalue"):no({name:"enumvalue",short:e,compact:e})}function Ar(e){if(Array.isArray(e.value)){let t=e.value.reduce((o,i)=>{let{short:a,compact:h,full:b}=Er(i);return o.short.push(a),o.compact.push(h),o.full.push(b),o},{short:[],compact:[],full:[]});return no({name:"enum",short:t.short.join(" | "),compact:t.compact.every(o=>o!=null)?t.compact.join(" | "):null,full:t.full.join(" | ")})}return no({name:"enum",short:e.value,compact:e.value})}function $n(e){return`${e}[]`}function Cn(e){return`[${e}]`}function cr(e,t,o){return no({name:"arrayOf",short:$n(e),compact:t!=null?Cn(t):null,full:o&&Cn(o)})}function n(e,t){let{name:o,short:i,compact:a,full:h,inferredType:b}=c(e.value,t);if(o==="custom"){if(b==="Object")return cr(i,a,h)}else if(o==="shape")return cr(i,a,h);return no({name:"arrayOf",short:$n(i),compact:$n(i)})}function c(e,t){try{switch(e.name){case"custom":return Hr(e);case"func":return vr(t);case"shape":return Jo(e,t);case"instanceOf":return no({name:"instanceOf",short:e.value,compact:e.value});case"objectOf":return Vn(e,t);case"union":return Yr(e,t);case"enum":return Ar(e);case"arrayOf":return n(e,t);default:return no({name:e.name,short:e.name,compact:e.name})}}catch(o){console.error(o)}return no({name:"unknown",short:"unknown",compact:"unknown"})}function _(e){let{type:t}=e.docgenInfo;if(t==null)return null;try{switch(t.name){case"custom":case"shape":case"instanceOf":case"objectOf":case"union":case"enum":case"arrayOf":{let{short:o,compact:i,full:a}=c(t,e);return i!=null&&!(0,re.i3)(i)?(0,re.Ux)(i):a?(0,re.Ux)(o,a):(0,re.Ux)(o)}case"func":{let{short:o,full:i}=c(t,e),a=o,h;return i&&i.length<sr?a=i:i&&(h=uo(i)),(0,re.Ux)(a,h)}default:return null}}catch(o){console.error(o)}return null}var W=(e,{name:t,type:o})=>{let i=o?.summary==="element"||o?.summary==="elementType",a=wr(e,t);if(a!=null){if(i)return(0,re.Ux)(Zo(a));let{hasParams:h}=jo(e.toString()).inferredType;return(0,re.Ux)(mn(a,h))}return(0,re.Ux)(i?ln:sn)},ke=Xr({function:W});function Ue(e,t){let{propTypes:o}=t;return o!=null?Object.keys(o).map(i=>e.find(a=>a.name===i)).filter(Boolean):e}function _t(e,t){let{propDef:o}=e,i=_(e);i!=null&&(o.type=i);let{defaultValue:a}=e.docgenInfo;if(a!=null&&a.value!=null){let h=ir(a.value);h!=null&&(o.defaultValue=h)}else if(t!=null){let h=Ln(t,o,ke);h!=null&&(o.defaultValue=h)}return o}function Qt(e,t){let o=t.defaultProps!=null?t.defaultProps:{},i=e.map(a=>_t(a,o[a.propDef.name]));return Ue(i,t)}function Zt(e,t){let{propDef:o}=e,{defaultValue:i}=e.docgenInfo;if(i!=null&&i.value!=null){let a=ir(i.value);a!=null&&(o.defaultValue=a)}else if(t!=null){let a=Ln(t,o);a!=null&&(o.defaultValue=a)}return o}function ho(e){return e.map(t=>Zt(t))}function zo(e,t){let o=e;!(0,re.TQ)(e)&&!e.propTypes&&(0,nt.Rf)(e)&&(o=e.type);let i=(0,re.p6)(o,t);if(i.length===0)return[];switch(i[0].typeSystem){case re.YF.JAVASCRIPT:return Qt(i,e);case re.YF.TYPESCRIPT:return ho(i);default:return i.map(a=>a.propDef)}}var Ao=e=>({rows:zo(e,"props")}),Fn=e=>{if(e){let{rows:t}=Ao(e);if(t)return t.reduce((o,i)=>{let{name:a,description:h,type:b,sbType:g,defaultValue:k,jsDocTags:A,required:E}=i;return o[a]={name:a,description:h,type:{required:E,...g},table:{type:b??void 0,jsDocTags:A,defaultValue:k??void 0}},o},{})}return null},pr={docs:{extractArgTypes:Fn,extractComponentDescription:re.rl}},Zr=[re.C2]}),"../../../node_modules/.pnpm/@storybook+react@9.0.15_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@9.0.15_@t_4f19baafbfa87aa93afe352c3e49b5cc/node_modules/@storybook/react/dist/entry-preview-docs.mjs":((Nt,ue,V)=>{V.r(ue),V.d(ue,{applyDecorators:()=>kt,decorators:()=>$t,parameters:()=>xt});var nt=V("../../../node_modules/.pnpm/@storybook+react@9.0.15_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@9.0.15_@t_4f19baafbfa87aa93afe352c3e49b5cc/node_modules/@storybook/react/dist/chunk-XLZBPYSH.mjs"),X=V("../../../node_modules/.pnpm/@storybook+react@9.0.15_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@9.0.15_@t_4f19baafbfa87aa93afe352c3e49b5cc/node_modules/@storybook/react/dist/chunk-CKO6TW2F.mjs"),re=V("../../../node_modules/.pnpm/@storybook+react@9.0.15_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@9.0.15_@t_4f19baafbfa87aa93afe352c3e49b5cc/node_modules/@storybook/react/dist/chunk-XP5HYGXS.mjs"),Ke=V("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),st=V("storybook/internal/client-logger"),pt=V("../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/docs-tools/index.js"),rt=V("storybook/preview-api"),Et={};(0,re.VA)(Et,{applyDecorators:()=>kt,decorators:()=>$t,parameters:()=>xt});var p=X.HA,Rt=We=>We.charAt(0).toUpperCase()+We.slice(1),xe=We=>(We.$$typeof||We).toString().replace(/^Symbol\((.*)\)$/,"$1").split(".").map(tt=>tt.split("_").map(Rt).join("")).join(".");function yt(We){if((0,Ke.isValidElement)(We)){let tt=Object.keys(We.props).reduce((Ne,wt)=>(Ne[wt]=yt(We.props[wt]),Ne),{});return{...We,props:tt,_owner:null}}return Array.isArray(We)?We.map(yt):We}var He=(We,tt)=>{if(typeof We>"u")return st.logger.warn("Too many skip or undefined component"),null;let Ne=We,wt=Ne.type;for(let ae=0;ae<tt?.skip;ae+=1){if(typeof Ne>"u")return st.logger.warn("Cannot skip undefined element"),null;if(Ke.Children.count(Ne)>1)return st.logger.warn("Trying to skip an array of elements"),null;typeof Ne.props.children>"u"?(st.logger.warn("Not enough children to skip elements."),typeof Ne.type=="function"&&Ne.type.name===""&&(Ne=Ke.createElement(wt,{...Ne.props}))):typeof Ne.props.children=="function"?Ne=Ne.props.children():Ne=Ne.props.children}let Bt;typeof tt?.displayName=="string"?Bt={showFunctions:!0,displayName:()=>tt.displayName}:Bt={displayName:ae=>ae.type.displayName?ae.type.displayName:(0,pt.UO)(ae.type,"displayName")?(0,pt.UO)(ae.type,"displayName"):ae.type.render?.displayName?ae.type.render.displayName:typeof ae.type=="symbol"||ae.type.$$typeof&&typeof ae.type.$$typeof=="symbol"?xe(ae.type):ae.type.name&&ae.type.name!=="_default"?ae.type.name:typeof ae.type=="function"?"No Display Name":(0,X.Jz)(ae.type)?ae.type.render.name:(0,X.Rf)(ae.type)?ae.type.type.name:ae.type};let Oe={...Bt,filterProps:(ae,ve)=>ae!==void 0,...tt};return Ke.Children.map(We,ae=>{let ve=typeof ae=="number"?ae.toString():ae,Be=(typeof p=="function"?p:p.default)(yt(ve),Oe);if(Be.indexOf("&quot;")>-1){let Qe=Be.match(/\S+=\\"([^"]*)\\"/g);Qe&&Qe.forEach(At=>{Be=Be.replace(At,At.replace(/&quot;/g,"'"))})}return Be}).join(`
`).replace(/function\s+noRefCheck\(\)\s*\{\}/g,"() => {}")},he={skip:0,showFunctions:!1,enableBeautify:!0,showDefaultProps:!1},De=We=>{let tt=We?.parameters.docs?.source,Ne=We?.parameters.__isArgsStory;return tt?.type===pt.Y1.DYNAMIC?!1:!Ne||tt?.code||tt?.type===pt.Y1.CODE},ze=We=>We.type?.displayName==="MDXCreateElement"&&!!We.props?.mdxType,Le=We=>{if(!ze(We))return We;let{mdxType:tt,originalType:Ne,children:wt,...Bt}=We.props,Oe=[];return wt&&(Oe=(Array.isArray(wt)?wt:[wt]).map(Le)),(0,Ke.createElement)(Ne,Bt,...Oe)},et=(We,tt)=>{let Ne=(0,rt.useRef)(void 0),wt=We(),Bt=De(tt),Oe={...he,...tt?.parameters.jsx||{}},ae=tt.originalStoryFn(tt.args,tt);return(0,rt.useEffect)(()=>{if(Bt)return;let ve=Le(ae),Be=He(ve,Oe);Be&&Ne.current!==Be&&((0,rt.emitTransformCode)(Be,tt),Ne.current=Be)}),wt},kt=(We,tt)=>{let Ne=tt.findIndex(Bt=>Bt.originalFn===et),wt=Ne===-1?tt:[...tt.splice(Ne,1),...tt];return(0,nt.t)(We,wt)},$t=[et],xt={docs:{story:{inline:!0}}}}),"../../../node_modules/.pnpm/@storybook+react@9.0.15_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@9.0.15_@t_4f19baafbfa87aa93afe352c3e49b5cc/node_modules/@storybook/react/dist/entry-preview.mjs":((Nt,ue,V)=>{V.r(ue),V.d(ue,{applyDecorators:()=>nt.t,beforeAll:()=>se,decorators:()=>T,mount:()=>y,parameters:()=>ce,render:()=>Oo,renderToCanvas:()=>Yo});var nt=V("../../../node_modules/.pnpm/@storybook+react@9.0.15_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@9.0.15_@t_4f19baafbfa87aa93afe352c3e49b5cc/node_modules/@storybook/react/dist/chunk-XLZBPYSH.mjs"),X=V("../../../node_modules/.pnpm/@storybook+react@9.0.15_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@9.0.15_@t_4f19baafbfa87aa93afe352c3e49b5cc/node_modules/@storybook/react/dist/chunk-XP5HYGXS.mjs"),re=V("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),Ke=V.t(re,2),st=V("@storybook/global"),pt=(0,X.P$)({"../../node_modules/semver/internal/constants.js"(s,M){var I="2.0.0",C=Number.MAX_SAFE_INTEGER||9007199254740991,P=16,R=250,G=["major","premajor","minor","preminor","patch","prepatch","prerelease"];M.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:P,MAX_SAFE_BUILD_LENGTH:R,MAX_SAFE_INTEGER:C,RELEASE_TYPES:G,SEMVER_SPEC_VERSION:I,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}}}),rt=(0,X.P$)({"../../node_modules/semver/internal/debug.js"(s,M){var I=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...C)=>console.error("SEMVER",...C):()=>{};M.exports=I}}),Et=(0,X.P$)({"../../node_modules/semver/internal/re.js"(s,M){var{MAX_SAFE_COMPONENT_LENGTH:I,MAX_SAFE_BUILD_LENGTH:C,MAX_LENGTH:P}=pt(),R=rt();s=M.exports={};var G=s.re=[],te=s.safeRe=[],v=s.src=[],pe=s.safeSrc=[],K=s.t={},J=0,D="[a-zA-Z0-9-]",H=[["\\s",1],["\\d",P],[D,C]],me=Ze=>{for(let[Ee,bt]of H)Ze=Ze.split(`${Ee}*`).join(`${Ee}{0,${bt}}`).split(`${Ee}+`).join(`${Ee}{1,${bt}}`);return Ze},oe=(Ze,Ee,bt)=>{let St=me(Ee),Dt=J++;R(Ze,Dt,Ee),K[Ze]=Dt,v[Dt]=Ee,pe[Dt]=St,G[Dt]=new RegExp(Ee,bt?"g":void 0),te[Dt]=new RegExp(St,bt?"g":void 0)};oe("NUMERICIDENTIFIER","0|[1-9]\\d*"),oe("NUMERICIDENTIFIERLOOSE","\\d+"),oe("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${D}*`),oe("MAINVERSION",`(${v[K.NUMERICIDENTIFIER]})\\.(${v[K.NUMERICIDENTIFIER]})\\.(${v[K.NUMERICIDENTIFIER]})`),oe("MAINVERSIONLOOSE",`(${v[K.NUMERICIDENTIFIERLOOSE]})\\.(${v[K.NUMERICIDENTIFIERLOOSE]})\\.(${v[K.NUMERICIDENTIFIERLOOSE]})`),oe("PRERELEASEIDENTIFIER",`(?:${v[K.NONNUMERICIDENTIFIER]}|${v[K.NUMERICIDENTIFIER]})`),oe("PRERELEASEIDENTIFIERLOOSE",`(?:${v[K.NONNUMERICIDENTIFIER]}|${v[K.NUMERICIDENTIFIERLOOSE]})`),oe("PRERELEASE",`(?:-(${v[K.PRERELEASEIDENTIFIER]}(?:\\.${v[K.PRERELEASEIDENTIFIER]})*))`),oe("PRERELEASELOOSE",`(?:-?(${v[K.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${v[K.PRERELEASEIDENTIFIERLOOSE]})*))`),oe("BUILDIDENTIFIER",`${D}+`),oe("BUILD",`(?:\\+(${v[K.BUILDIDENTIFIER]}(?:\\.${v[K.BUILDIDENTIFIER]})*))`),oe("FULLPLAIN",`v?${v[K.MAINVERSION]}${v[K.PRERELEASE]}?${v[K.BUILD]}?`),oe("FULL",`^${v[K.FULLPLAIN]}$`),oe("LOOSEPLAIN",`[v=\\s]*${v[K.MAINVERSIONLOOSE]}${v[K.PRERELEASELOOSE]}?${v[K.BUILD]}?`),oe("LOOSE",`^${v[K.LOOSEPLAIN]}$`),oe("GTLT","((?:<|>)?=?)"),oe("XRANGEIDENTIFIERLOOSE",`${v[K.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),oe("XRANGEIDENTIFIER",`${v[K.NUMERICIDENTIFIER]}|x|X|\\*`),oe("XRANGEPLAIN",`[v=\\s]*(${v[K.XRANGEIDENTIFIER]})(?:\\.(${v[K.XRANGEIDENTIFIER]})(?:\\.(${v[K.XRANGEIDENTIFIER]})(?:${v[K.PRERELEASE]})?${v[K.BUILD]}?)?)?`),oe("XRANGEPLAINLOOSE",`[v=\\s]*(${v[K.XRANGEIDENTIFIERLOOSE]})(?:\\.(${v[K.XRANGEIDENTIFIERLOOSE]})(?:\\.(${v[K.XRANGEIDENTIFIERLOOSE]})(?:${v[K.PRERELEASELOOSE]})?${v[K.BUILD]}?)?)?`),oe("XRANGE",`^${v[K.GTLT]}\\s*${v[K.XRANGEPLAIN]}$`),oe("XRANGELOOSE",`^${v[K.GTLT]}\\s*${v[K.XRANGEPLAINLOOSE]}$`),oe("COERCEPLAIN",`(^|[^\\d])(\\d{1,${I}})(?:\\.(\\d{1,${I}}))?(?:\\.(\\d{1,${I}}))?`),oe("COERCE",`${v[K.COERCEPLAIN]}(?:$|[^\\d])`),oe("COERCEFULL",v[K.COERCEPLAIN]+`(?:${v[K.PRERELEASE]})?(?:${v[K.BUILD]})?(?:$|[^\\d])`),oe("COERCERTL",v[K.COERCE],!0),oe("COERCERTLFULL",v[K.COERCEFULL],!0),oe("LONETILDE","(?:~>?)"),oe("TILDETRIM",`(\\s*)${v[K.LONETILDE]}\\s+`,!0),s.tildeTrimReplace="$1~",oe("TILDE",`^${v[K.LONETILDE]}${v[K.XRANGEPLAIN]}$`),oe("TILDELOOSE",`^${v[K.LONETILDE]}${v[K.XRANGEPLAINLOOSE]}$`),oe("LONECARET","(?:\\^)"),oe("CARETTRIM",`(\\s*)${v[K.LONECARET]}\\s+`,!0),s.caretTrimReplace="$1^",oe("CARET",`^${v[K.LONECARET]}${v[K.XRANGEPLAIN]}$`),oe("CARETLOOSE",`^${v[K.LONECARET]}${v[K.XRANGEPLAINLOOSE]}$`),oe("COMPARATORLOOSE",`^${v[K.GTLT]}\\s*(${v[K.LOOSEPLAIN]})$|^$`),oe("COMPARATOR",`^${v[K.GTLT]}\\s*(${v[K.FULLPLAIN]})$|^$`),oe("COMPARATORTRIM",`(\\s*)${v[K.GTLT]}\\s*(${v[K.LOOSEPLAIN]}|${v[K.XRANGEPLAIN]})`,!0),s.comparatorTrimReplace="$1$2$3",oe("HYPHENRANGE",`^\\s*(${v[K.XRANGEPLAIN]})\\s+-\\s+(${v[K.XRANGEPLAIN]})\\s*$`),oe("HYPHENRANGELOOSE",`^\\s*(${v[K.XRANGEPLAINLOOSE]})\\s+-\\s+(${v[K.XRANGEPLAINLOOSE]})\\s*$`),oe("STAR","(<|>)?=?\\s*\\*"),oe("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),oe("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")}}),p=(0,X.P$)({"../../node_modules/semver/internal/parse-options.js"(s,M){var I=Object.freeze({loose:!0}),C=Object.freeze({}),P=R=>R?typeof R!="object"?I:R:C;M.exports=P}}),Rt=(0,X.P$)({"../../node_modules/semver/internal/identifiers.js"(s,M){var I=/^[0-9]+$/,C=(R,G)=>{let te=I.test(R),v=I.test(G);return te&&v&&(R=+R,G=+G),R===G?0:te&&!v?-1:v&&!te?1:R<G?-1:1},P=(R,G)=>C(G,R);M.exports={compareIdentifiers:C,rcompareIdentifiers:P}}}),xe=(0,X.P$)({"../../node_modules/semver/classes/semver.js"(s,M){var I=rt(),{MAX_LENGTH:C,MAX_SAFE_INTEGER:P}=pt(),{safeRe:R,t:G}=Et(),te=p(),{compareIdentifiers:v}=Rt(),pe=class $o{constructor(J,D){if(D=te(D),J instanceof $o){if(J.loose===!!D.loose&&J.includePrerelease===!!D.includePrerelease)return J;J=J.version}else if(typeof J!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof J}".`);if(J.length>C)throw new TypeError(`version is longer than ${C} characters`);I("SemVer",J,D),this.options=D,this.loose=!!D.loose,this.includePrerelease=!!D.includePrerelease;let H=J.trim().match(D.loose?R[G.LOOSE]:R[G.FULL]);if(!H)throw new TypeError(`Invalid Version: ${J}`);if(this.raw=J,this.major=+H[1],this.minor=+H[2],this.patch=+H[3],this.major>P||this.major<0)throw new TypeError("Invalid major version");if(this.minor>P||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>P||this.patch<0)throw new TypeError("Invalid patch version");H[4]?this.prerelease=H[4].split(".").map(me=>{if(/^[0-9]+$/.test(me)){let oe=+me;if(oe>=0&&oe<P)return oe}return me}):this.prerelease=[],this.build=H[5]?H[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(J){if(I("SemVer.compare",this.version,this.options,J),!(J instanceof $o)){if(typeof J=="string"&&J===this.version)return 0;J=new $o(J,this.options)}return J.version===this.version?0:this.compareMain(J)||this.comparePre(J)}compareMain(J){return J instanceof $o||(J=new $o(J,this.options)),v(this.major,J.major)||v(this.minor,J.minor)||v(this.patch,J.patch)}comparePre(J){if(J instanceof $o||(J=new $o(J,this.options)),this.prerelease.length&&!J.prerelease.length)return-1;if(!this.prerelease.length&&J.prerelease.length)return 1;if(!this.prerelease.length&&!J.prerelease.length)return 0;let D=0;do{let H=this.prerelease[D],me=J.prerelease[D];if(I("prerelease compare",D,H,me),H===void 0&&me===void 0)return 0;if(me===void 0)return 1;if(H===void 0)return-1;if(H!==me)return v(H,me)}while(++D)}compareBuild(J){J instanceof $o||(J=new $o(J,this.options));let D=0;do{let H=this.build[D],me=J.build[D];if(I("build compare",D,H,me),H===void 0&&me===void 0)return 0;if(me===void 0)return 1;if(H===void 0)return-1;if(H!==me)return v(H,me)}while(++D)}inc(J,D,H){if(J.startsWith("pre")){if(!D&&H===!1)throw new Error("invalid increment argument: identifier is empty");if(D){let me=`-${D}`.match(this.options.loose?R[G.PRERELEASELOOSE]:R[G.PRERELEASE]);if(!me||me[1]!==D)throw new Error(`invalid identifier: ${D}`)}}switch(J){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",D,H);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",D,H);break;case"prepatch":this.prerelease.length=0,this.inc("patch",D,H),this.inc("pre",D,H);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",D,H),this.inc("pre",D,H);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let me=Number(H)?1:0;if(this.prerelease.length===0)this.prerelease=[me];else{let oe=this.prerelease.length;for(;--oe>=0;)typeof this.prerelease[oe]=="number"&&(this.prerelease[oe]++,oe=-2);if(oe===-1){if(D===this.prerelease.join(".")&&H===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(me)}}if(D){let oe=[D,me];H===!1&&(oe=[D]),v(this.prerelease[0],D)===0?isNaN(this.prerelease[1])&&(this.prerelease=oe):this.prerelease=oe}break}default:throw new Error(`invalid increment argument: ${J}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};M.exports=pe}}),yt=(0,X.P$)({"../../node_modules/semver/functions/parse.js"(s,M){var I=xe(),C=(P,R,G=!1)=>{if(P instanceof I)return P;try{return new I(P,R)}catch(te){if(!G)return null;throw te}};M.exports=C}}),He=(0,X.P$)({"../../node_modules/semver/functions/valid.js"(s,M){var I=yt(),C=(P,R)=>{let G=I(P,R);return G?G.version:null};M.exports=C}}),he=(0,X.P$)({"../../node_modules/semver/functions/clean.js"(s,M){var I=yt(),C=(P,R)=>{let G=I(P.trim().replace(/^[=v]+/,""),R);return G?G.version:null};M.exports=C}}),De=(0,X.P$)({"../../node_modules/semver/functions/inc.js"(s,M){var I=xe(),C=(P,R,G,te,v)=>{typeof G=="string"&&(v=te,te=G,G=void 0);try{return new I(P instanceof I?P.version:P,G).inc(R,te,v).version}catch{return null}};M.exports=C}}),ze=(0,X.P$)({"../../node_modules/semver/functions/diff.js"(s,M){var I=yt(),C=(P,R)=>{let G=I(P,null,!0),te=I(R,null,!0),v=G.compare(te);if(v===0)return null;let pe=v>0,K=pe?G:te,J=pe?te:G,D=!!K.prerelease.length;if(J.prerelease.length&&!D){if(!J.patch&&!J.minor)return"major";if(J.compareMain(K)===0)return J.minor&&!J.patch?"minor":"patch"}let H=D?"pre":"";return G.major!==te.major?H+"major":G.minor!==te.minor?H+"minor":G.patch!==te.patch?H+"patch":"prerelease"};M.exports=C}}),Le=(0,X.P$)({"../../node_modules/semver/functions/major.js"(s,M){var I=xe(),C=(P,R)=>new I(P,R).major;M.exports=C}}),et=(0,X.P$)({"../../node_modules/semver/functions/minor.js"(s,M){var I=xe(),C=(P,R)=>new I(P,R).minor;M.exports=C}}),kt=(0,X.P$)({"../../node_modules/semver/functions/patch.js"(s,M){var I=xe(),C=(P,R)=>new I(P,R).patch;M.exports=C}}),$t=(0,X.P$)({"../../node_modules/semver/functions/prerelease.js"(s,M){var I=yt(),C=(P,R)=>{let G=I(P,R);return G&&G.prerelease.length?G.prerelease:null};M.exports=C}}),xt=(0,X.P$)({"../../node_modules/semver/functions/compare.js"(s,M){var I=xe(),C=(P,R,G)=>new I(P,G).compare(new I(R,G));M.exports=C}}),We=(0,X.P$)({"../../node_modules/semver/functions/rcompare.js"(s,M){var I=xt(),C=(P,R,G)=>I(R,P,G);M.exports=C}}),tt=(0,X.P$)({"../../node_modules/semver/functions/compare-loose.js"(s,M){var I=xt(),C=(P,R)=>I(P,R,!0);M.exports=C}}),Ne=(0,X.P$)({"../../node_modules/semver/functions/compare-build.js"(s,M){var I=xe(),C=(P,R,G)=>{let te=new I(P,G),v=new I(R,G);return te.compare(v)||te.compareBuild(v)};M.exports=C}}),wt=(0,X.P$)({"../../node_modules/semver/functions/sort.js"(s,M){var I=Ne(),C=(P,R)=>P.sort((G,te)=>I(G,te,R));M.exports=C}}),Bt=(0,X.P$)({"../../node_modules/semver/functions/rsort.js"(s,M){var I=Ne(),C=(P,R)=>P.sort((G,te)=>I(te,G,R));M.exports=C}}),Oe=(0,X.P$)({"../../node_modules/semver/functions/gt.js"(s,M){var I=xt(),C=(P,R,G)=>I(P,R,G)>0;M.exports=C}}),ae=(0,X.P$)({"../../node_modules/semver/functions/lt.js"(s,M){var I=xt(),C=(P,R,G)=>I(P,R,G)<0;M.exports=C}}),ve=(0,X.P$)({"../../node_modules/semver/functions/eq.js"(s,M){var I=xt(),C=(P,R,G)=>I(P,R,G)===0;M.exports=C}}),Be=(0,X.P$)({"../../node_modules/semver/functions/neq.js"(s,M){var I=xt(),C=(P,R,G)=>I(P,R,G)!==0;M.exports=C}}),Qe=(0,X.P$)({"../../node_modules/semver/functions/gte.js"(s,M){var I=xt(),C=(P,R,G)=>I(P,R,G)>=0;M.exports=C}}),At=(0,X.P$)({"../../node_modules/semver/functions/lte.js"(s,M){var I=xt(),C=(P,R,G)=>I(P,R,G)<=0;M.exports=C}}),Pe=(0,X.P$)({"../../node_modules/semver/functions/cmp.js"(s,M){var I=ve(),C=Be(),P=Oe(),R=Qe(),G=ae(),te=At(),v=(pe,K,J,D)=>{switch(K){case"===":return typeof pe=="object"&&(pe=pe.version),typeof J=="object"&&(J=J.version),pe===J;case"!==":return typeof pe=="object"&&(pe=pe.version),typeof J=="object"&&(J=J.version),pe!==J;case"":case"=":case"==":return I(pe,J,D);case"!=":return C(pe,J,D);case">":return P(pe,J,D);case">=":return R(pe,J,D);case"<":return G(pe,J,D);case"<=":return te(pe,J,D);default:throw new TypeError(`Invalid operator: ${K}`)}};M.exports=v}}),jt=(0,X.P$)({"../../node_modules/semver/functions/coerce.js"(s,M){var I=xe(),C=yt(),{safeRe:P,t:R}=Et(),G=(te,v)=>{if(te instanceof I)return te;if(typeof te=="number"&&(te=String(te)),typeof te!="string")return null;v=v||{};let pe=null;if(!v.rtl)pe=te.match(v.includePrerelease?P[R.COERCEFULL]:P[R.COERCE]);else{let oe=v.includePrerelease?P[R.COERCERTLFULL]:P[R.COERCERTL],Ze;for(;(Ze=oe.exec(te))&&(!pe||pe.index+pe[0].length!==te.length);)(!pe||Ze.index+Ze[0].length!==pe.index+pe[0].length)&&(pe=Ze),oe.lastIndex=Ze.index+Ze[1].length+Ze[2].length;oe.lastIndex=-1}if(pe===null)return null;let K=pe[2],J=pe[3]||"0",D=pe[4]||"0",H=v.includePrerelease&&pe[5]?`-${pe[5]}`:"",me=v.includePrerelease&&pe[6]?`+${pe[6]}`:"";return C(`${K}.${J}.${D}${H}${me}`,v)};M.exports=G}}),it=(0,X.P$)({"../../node_modules/semver/internal/lrucache.js"(s,M){var I=class{constructor(){this.max=1e3,this.map=new Map}get(C){let P=this.map.get(C);if(P!==void 0)return this.map.delete(C),this.map.set(C,P),P}delete(C){return this.map.delete(C)}set(C,P){if(!this.delete(C)&&P!==void 0){if(this.map.size>=this.max){let R=this.map.keys().next().value;this.delete(R)}this.map.set(C,P)}return this}};M.exports=I}}),Ge=(0,X.P$)({"../../node_modules/semver/classes/range.js"(s,M){var I=/\s+/g,C=class Sr{constructor(fe,Je){if(Je=G(Je),fe instanceof Sr)return fe.loose===!!Je.loose&&fe.includePrerelease===!!Je.includePrerelease?fe:new Sr(fe.raw,Je);if(fe instanceof te)return this.raw=fe.value,this.set=[[fe]],this.formatted=void 0,this;if(this.options=Je,this.loose=!!Je.loose,this.includePrerelease=!!Je.includePrerelease,this.raw=fe.trim().replace(I," "),this.set=this.raw.split("||").map(Ce=>this.parseRange(Ce.trim())).filter(Ce=>Ce.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let Ce=this.set[0];if(this.set=this.set.filter(Re=>!Ee(Re[0])),this.set.length===0)this.set=[Ce];else if(this.set.length>1){for(let Re of this.set)if(Re.length===1&&bt(Re[0])){this.set=[Re];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let fe=0;fe<this.set.length;fe++){fe>0&&(this.formatted+="||");let Je=this.set[fe];for(let Ce=0;Ce<Je.length;Ce++)Ce>0&&(this.formatted+=" "),this.formatted+=Je[Ce].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(fe){let Je=((this.options.includePrerelease&&oe)|(this.options.loose&&Ze))+":"+fe,Ce=R.get(Je);if(Ce)return Ce;let Re=this.options.loose,je=Re?K[J.HYPHENRANGELOOSE]:K[J.HYPHENRANGE];fe=fe.replace(je,nn(this.options.includePrerelease)),v("hyphen replace",fe),fe=fe.replace(K[J.COMPARATORTRIM],D),v("comparator trim",fe),fe=fe.replace(K[J.TILDETRIM],H),v("tilde trim",fe),fe=fe.replace(K[J.CARETTRIM],me),v("caret trim",fe);let Me=fe.split(" ").map(Ft=>Dt(Ft,this.options)).join(" ").split(/\s+/).map(Ft=>to(Ft,this.options));Re&&(Me=Me.filter(Ft=>(v("loose invalid filter",Ft,this.options),!!Ft.match(K[J.COMPARATORLOOSE])))),v("range list",Me);let we=new Map,Ct=Me.map(Ft=>new te(Ft,this.options));for(let Ft of Ct){if(Ee(Ft))return[Ft];we.set(Ft.value,Ft)}we.size>1&&we.has("")&&we.delete("");let zt=[...we.values()];return R.set(Je,zt),zt}intersects(fe,Je){if(!(fe instanceof Sr))throw new TypeError("a Range is required");return this.set.some(Ce=>St(Ce,Je)&&fe.set.some(Re=>St(Re,Je)&&Ce.every(je=>Re.every(Me=>je.intersects(Me,Je)))))}test(fe){if(!fe)return!1;if(typeof fe=="string")try{fe=new pe(fe,this.options)}catch{return!1}for(let Je=0;Je<this.set.length;Je++)if(at(this.set[Je],fe,this.options))return!0;return!1}};M.exports=C;var P=it(),R=new P,G=p(),te=B(),v=rt(),pe=xe(),{safeRe:K,t:J,comparatorTrimReplace:D,tildeTrimReplace:H,caretTrimReplace:me}=Et(),{FLAG_INCLUDE_PRERELEASE:oe,FLAG_LOOSE:Ze}=pt(),Ee=ye=>ye.value==="<0.0.0-0",bt=ye=>ye.value==="",St=(ye,fe)=>{let Je=!0,Ce=ye.slice(),Re=Ce.pop();for(;Je&&Ce.length;)Je=Ce.every(je=>Re.intersects(je,fe)),Re=Ce.pop();return Je},Dt=(ye,fe)=>(v("comp",ye,fe),ye=Ut(ye,fe),v("caret",ye),ye=po(ye,fe),v("tildes",ye),ye=ut(ye,fe),v("xrange",ye),ye=yo(ye,fe),v("stars",ye),ye),Ot=ye=>!ye||ye.toLowerCase()==="x"||ye==="*",po=(ye,fe)=>ye.trim().split(/\s+/).map(Je=>qt(Je,fe)).join(" "),qt=(ye,fe)=>{let Je=fe.loose?K[J.TILDELOOSE]:K[J.TILDE];return ye.replace(Je,(Ce,Re,je,Me,we)=>{v("tilde",ye,Ce,Re,je,Me,we);let Ct;return Ot(Re)?Ct="":Ot(je)?Ct=`>=${Re}.0.0 <${+Re+1}.0.0-0`:Ot(Me)?Ct=`>=${Re}.${je}.0 <${Re}.${+je+1}.0-0`:we?(v("replaceTilde pr",we),Ct=`>=${Re}.${je}.${Me}-${we} <${Re}.${+je+1}.0-0`):Ct=`>=${Re}.${je}.${Me} <${Re}.${+je+1}.0-0`,v("tilde return",Ct),Ct})},Ut=(ye,fe)=>ye.trim().split(/\s+/).map(Je=>Kt(Je,fe)).join(" "),Kt=(ye,fe)=>{v("caret",ye,fe);let Je=fe.loose?K[J.CARETLOOSE]:K[J.CARET],Ce=fe.includePrerelease?"-0":"";return ye.replace(Je,(Re,je,Me,we,Ct)=>{v("caret",ye,Re,je,Me,we,Ct);let zt;return Ot(je)?zt="":Ot(Me)?zt=`>=${je}.0.0${Ce} <${+je+1}.0.0-0`:Ot(we)?je==="0"?zt=`>=${je}.${Me}.0${Ce} <${je}.${+Me+1}.0-0`:zt=`>=${je}.${Me}.0${Ce} <${+je+1}.0.0-0`:Ct?(v("replaceCaret pr",Ct),je==="0"?Me==="0"?zt=`>=${je}.${Me}.${we}-${Ct} <${je}.${Me}.${+we+1}-0`:zt=`>=${je}.${Me}.${we}-${Ct} <${je}.${+Me+1}.0-0`:zt=`>=${je}.${Me}.${we}-${Ct} <${+je+1}.0.0-0`):(v("no pr"),je==="0"?Me==="0"?zt=`>=${je}.${Me}.${we}${Ce} <${je}.${Me}.${+we+1}-0`:zt=`>=${je}.${Me}.${we}${Ce} <${je}.${+Me+1}.0-0`:zt=`>=${je}.${Me}.${we} <${+je+1}.0.0-0`),v("caret return",zt),zt})},ut=(ye,fe)=>(v("replaceXRanges",ye,fe),ye.split(/\s+/).map(Je=>Vt(Je,fe)).join(" ")),Vt=(ye,fe)=>{ye=ye.trim();let Je=fe.loose?K[J.XRANGELOOSE]:K[J.XRANGE];return ye.replace(Je,(Ce,Re,je,Me,we,Ct)=>{v("xRange",ye,Ce,Re,je,Me,we,Ct);let zt=Ot(je),Ft=zt||Ot(Me),No=Ft||Ot(we),vo=No;return Re==="="&&vo&&(Re=""),Ct=fe.includePrerelease?"-0":"",zt?Re===">"||Re==="<"?Ce="<0.0.0-0":Ce="*":Re&&vo?(Ft&&(Me=0),we=0,Re===">"?(Re=">=",Ft?(je=+je+1,Me=0,we=0):(Me=+Me+1,we=0)):Re==="<="&&(Re="<",Ft?je=+je+1:Me=+Me+1),Re==="<"&&(Ct="-0"),Ce=`${Re+je}.${Me}.${we}${Ct}`):Ft?Ce=`>=${je}.0.0${Ct} <${+je+1}.0.0-0`:No&&(Ce=`>=${je}.${Me}.0${Ct} <${je}.${+Me+1}.0-0`),v("xRange return",Ce),Ce})},yo=(ye,fe)=>(v("replaceStars",ye,fe),ye.trim().replace(K[J.STAR],"")),to=(ye,fe)=>(v("replaceGTE0",ye,fe),ye.trim().replace(K[fe.includePrerelease?J.GTE0PRE:J.GTE0],"")),nn=ye=>(fe,Je,Ce,Re,je,Me,we,Ct,zt,Ft,No,vo)=>(Ot(Ce)?Je="":Ot(Re)?Je=`>=${Ce}.0.0${ye?"-0":""}`:Ot(je)?Je=`>=${Ce}.${Re}.0${ye?"-0":""}`:Me?Je=`>=${Je}`:Je=`>=${Je}${ye?"-0":""}`,Ot(zt)?Ct="":Ot(Ft)?Ct=`<${+zt+1}.0.0-0`:Ot(No)?Ct=`<${zt}.${+Ft+1}.0-0`:vo?Ct=`<=${zt}.${Ft}.${No}-${vo}`:ye?Ct=`<${zt}.${Ft}.${+No+1}-0`:Ct=`<=${Ct}`,`${Je} ${Ct}`.trim()),at=(ye,fe,Je)=>{for(let Ce=0;Ce<ye.length;Ce++)if(!ye[Ce].test(fe))return!1;if(fe.prerelease.length&&!Je.includePrerelease){for(let Ce=0;Ce<ye.length;Ce++)if(v(ye[Ce].semver),ye[Ce].semver!==te.ANY&&ye[Ce].semver.prerelease.length>0){let Re=ye[Ce].semver;if(Re.major===fe.major&&Re.minor===fe.minor&&Re.patch===fe.patch)return!0}return!1}return!0}}}),B=(0,X.P$)({"../../node_modules/semver/classes/comparator.js"(s,M){var I=Symbol("SemVer ANY"),C=class Qr{static get ANY(){return I}constructor(D,H){if(H=P(H),D instanceof Qr){if(D.loose===!!H.loose)return D;D=D.value}D=D.trim().split(/\s+/).join(" "),v("comparator",D,H),this.options=H,this.loose=!!H.loose,this.parse(D),this.semver===I?this.value="":this.value=this.operator+this.semver.version,v("comp",this)}parse(D){let H=this.options.loose?R[G.COMPARATORLOOSE]:R[G.COMPARATOR],me=D.match(H);if(!me)throw new TypeError(`Invalid comparator: ${D}`);this.operator=me[1]!==void 0?me[1]:"",this.operator==="="&&(this.operator=""),me[2]?this.semver=new pe(me[2],this.options.loose):this.semver=I}toString(){return this.value}test(D){if(v("Comparator.test",D,this.options.loose),this.semver===I||D===I)return!0;if(typeof D=="string")try{D=new pe(D,this.options)}catch{return!1}return te(D,this.operator,this.semver,this.options)}intersects(D,H){if(!(D instanceof Qr))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new K(D.value,H).test(this.value):D.operator===""?D.value===""?!0:new K(this.value,H).test(D.semver):(H=P(H),H.includePrerelease&&(this.value==="<0.0.0-0"||D.value==="<0.0.0-0")||!H.includePrerelease&&(this.value.startsWith("<0.0.0")||D.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&D.operator.startsWith(">")||this.operator.startsWith("<")&&D.operator.startsWith("<")||this.semver.version===D.semver.version&&this.operator.includes("=")&&D.operator.includes("=")||te(this.semver,"<",D.semver,H)&&this.operator.startsWith(">")&&D.operator.startsWith("<")||te(this.semver,">",D.semver,H)&&this.operator.startsWith("<")&&D.operator.startsWith(">")))}};M.exports=C;var P=p(),{safeRe:R,t:G}=Et(),te=Pe(),v=rt(),pe=xe(),K=Ge()}}),ie=(0,X.P$)({"../../node_modules/semver/functions/satisfies.js"(s,M){var I=Ge(),C=(P,R,G)=>{try{R=new I(R,G)}catch{return!1}return R.test(P)};M.exports=C}}),ot=(0,X.P$)({"../../node_modules/semver/ranges/to-comparators.js"(s,M){var I=Ge(),C=(P,R)=>new I(P,R).set.map(G=>G.map(te=>te.value).join(" ").trim().split(" "));M.exports=C}}),Ie=(0,X.P$)({"../../node_modules/semver/ranges/max-satisfying.js"(s,M){var I=xe(),C=Ge(),P=(R,G,te)=>{let v=null,pe=null,K=null;try{K=new C(G,te)}catch{return null}return R.forEach(J=>{K.test(J)&&(!v||pe.compare(J)===-1)&&(v=J,pe=new I(v,te))}),v};M.exports=P}}),lt=(0,X.P$)({"../../node_modules/semver/ranges/min-satisfying.js"(s,M){var I=xe(),C=Ge(),P=(R,G,te)=>{let v=null,pe=null,K=null;try{K=new C(G,te)}catch{return null}return R.forEach(J=>{K.test(J)&&(!v||pe.compare(J)===1)&&(v=J,pe=new I(v,te))}),v};M.exports=P}}),dt=(0,X.P$)({"../../node_modules/semver/ranges/min-version.js"(s,M){var I=xe(),C=Ge(),P=Oe(),R=(G,te)=>{G=new C(G,te);let v=new I("0.0.0");if(G.test(v)||(v=new I("0.0.0-0"),G.test(v)))return v;v=null;for(let pe=0;pe<G.set.length;++pe){let K=G.set[pe],J=null;K.forEach(D=>{let H=new I(D.semver.version);switch(D.operator){case">":H.prerelease.length===0?H.patch++:H.prerelease.push(0),H.raw=H.format();case"":case">=":(!J||P(H,J))&&(J=H);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${D.operator}`)}}),J&&(!v||P(v,J))&&(v=J)}return v&&G.test(v)?v:null};M.exports=R}}),Pt=(0,X.P$)({"../../node_modules/semver/ranges/valid.js"(s,M){var I=Ge(),C=(P,R)=>{try{return new I(P,R).range||"*"}catch{return null}};M.exports=C}}),It=(0,X.P$)({"../../node_modules/semver/ranges/outside.js"(s,M){var I=xe(),C=B(),{ANY:P}=C,R=Ge(),G=ie(),te=Oe(),v=ae(),pe=At(),K=Qe(),J=(D,H,me,oe)=>{D=new I(D,oe),H=new R(H,oe);let Ze,Ee,bt,St,Dt;switch(me){case">":Ze=te,Ee=pe,bt=v,St=">",Dt=">=";break;case"<":Ze=v,Ee=K,bt=te,St="<",Dt="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(G(D,H,oe))return!1;for(let Ot=0;Ot<H.set.length;++Ot){let po=H.set[Ot],qt=null,Ut=null;if(po.forEach(Kt=>{Kt.semver===P&&(Kt=new C(">=0.0.0")),qt=qt||Kt,Ut=Ut||Kt,Ze(Kt.semver,qt.semver,oe)?qt=Kt:bt(Kt.semver,Ut.semver,oe)&&(Ut=Kt)}),qt.operator===St||qt.operator===Dt||(!Ut.operator||Ut.operator===St)&&Ee(D,Ut.semver)||Ut.operator===Dt&&bt(D,Ut.semver))return!1}return!0};M.exports=J}}),Jt=(0,X.P$)({"../../node_modules/semver/ranges/gtr.js"(s,M){var I=It(),C=(P,R,G)=>I(P,R,">",G);M.exports=C}}),io=(0,X.P$)({"../../node_modules/semver/ranges/ltr.js"(s,M){var I=It(),C=(P,R,G)=>I(P,R,"<",G);M.exports=C}}),Po=(0,X.P$)({"../../node_modules/semver/ranges/intersects.js"(s,M){var I=Ge(),C=(P,R,G)=>(P=new I(P,G),R=new I(R,G),P.intersects(R,G));M.exports=C}}),qo=(0,X.P$)({"../../node_modules/semver/ranges/simplify.js"(s,M){var I=ie(),C=xt();M.exports=(P,R,G)=>{let te=[],v=null,pe=null,K=P.sort((me,oe)=>C(me,oe,G));for(let me of K)I(me,R,G)?(pe=me,v||(v=me)):(pe&&te.push([v,pe]),pe=null,v=null);v&&te.push([v,null]);let J=[];for(let[me,oe]of te)me===oe?J.push(me):!oe&&me===K[0]?J.push("*"):oe?me===K[0]?J.push(`<=${oe}`):J.push(`${me} - ${oe}`):J.push(`>=${me}`);let D=J.join(" || "),H=typeof R.raw=="string"?R.raw:String(R);return D.length<H.length?D:R}}}),Wo=(0,X.P$)({"../../node_modules/semver/ranges/subset.js"(s,M){var I=Ge(),C=B(),{ANY:P}=C,R=ie(),G=xt(),te=(H,me,oe={})=>{if(H===me)return!0;H=new I(H,oe),me=new I(me,oe);let Ze=!1;e:for(let Ee of H.set){for(let bt of me.set){let St=K(Ee,bt,oe);if(Ze=Ze||St!==null,St)continue e}if(Ze)return!1}return!0},v=[new C(">=0.0.0-0")],pe=[new C(">=0.0.0")],K=(H,me,oe)=>{if(H===me)return!0;if(H.length===1&&H[0].semver===P){if(me.length===1&&me[0].semver===P)return!0;oe.includePrerelease?H=v:H=pe}if(me.length===1&&me[0].semver===P){if(oe.includePrerelease)return!0;me=pe}let Ze=new Set,Ee,bt;for(let ut of H)ut.operator===">"||ut.operator===">="?Ee=J(Ee,ut,oe):ut.operator==="<"||ut.operator==="<="?bt=D(bt,ut,oe):Ze.add(ut.semver);if(Ze.size>1)return null;let St;if(Ee&&bt&&(St=G(Ee.semver,bt.semver,oe),St>0||St===0&&(Ee.operator!==">="||bt.operator!=="<=")))return null;for(let ut of Ze){if(Ee&&!R(ut,String(Ee),oe)||bt&&!R(ut,String(bt),oe))return null;for(let Vt of me)if(!R(ut,String(Vt),oe))return!1;return!0}let Dt,Ot,po,qt,Ut=bt&&!oe.includePrerelease&&bt.semver.prerelease.length?bt.semver:!1,Kt=Ee&&!oe.includePrerelease&&Ee.semver.prerelease.length?Ee.semver:!1;Ut&&Ut.prerelease.length===1&&bt.operator==="<"&&Ut.prerelease[0]===0&&(Ut=!1);for(let ut of me){if(qt=qt||ut.operator===">"||ut.operator===">=",po=po||ut.operator==="<"||ut.operator==="<=",Ee){if(Kt&&ut.semver.prerelease&&ut.semver.prerelease.length&&ut.semver.major===Kt.major&&ut.semver.minor===Kt.minor&&ut.semver.patch===Kt.patch&&(Kt=!1),ut.operator===">"||ut.operator===">="){if(Dt=J(Ee,ut,oe),Dt===ut&&Dt!==Ee)return!1}else if(Ee.operator===">="&&!R(Ee.semver,String(ut),oe))return!1}if(bt){if(Ut&&ut.semver.prerelease&&ut.semver.prerelease.length&&ut.semver.major===Ut.major&&ut.semver.minor===Ut.minor&&ut.semver.patch===Ut.patch&&(Ut=!1),ut.operator==="<"||ut.operator==="<="){if(Ot=D(bt,ut,oe),Ot===ut&&Ot!==bt)return!1}else if(bt.operator==="<="&&!R(bt.semver,String(ut),oe))return!1}if(!ut.operator&&(bt||Ee)&&St!==0)return!1}return!(Ee&&po&&!bt&&St!==0||bt&&qt&&!Ee&&St!==0||Kt||Ut)},J=(H,me,oe)=>{if(!H)return me;let Ze=G(H.semver,me.semver,oe);return Ze>0?H:Ze<0||me.operator===">"&&H.operator===">="?me:H},D=(H,me,oe)=>{if(!H)return me;let Ze=G(H.semver,me.semver,oe);return Ze<0?H:Ze>0||me.operator==="<"&&H.operator==="<="?me:H};M.exports=te}}),Lo=(0,X.P$)({"../../node_modules/semver/index.js"(s,M){var I=Et(),C=pt(),P=xe(),R=Rt(),G=yt(),te=He(),v=he(),pe=De(),K=ze(),J=Le(),D=et(),H=kt(),me=$t(),oe=xt(),Ze=We(),Ee=tt(),bt=Ne(),St=wt(),Dt=Bt(),Ot=Oe(),po=ae(),qt=ve(),Ut=Be(),Kt=Qe(),ut=At(),Vt=Pe(),yo=jt(),to=B(),nn=Ge(),at=ie(),ye=ot(),fe=Ie(),Je=lt(),Ce=dt(),Re=Pt(),je=It(),Me=Jt(),we=io(),Ct=Po(),zt=qo(),Ft=Wo();M.exports={parse:G,valid:te,clean:v,inc:pe,diff:K,major:J,minor:D,patch:H,prerelease:me,compare:oe,rcompare:Ze,compareLoose:Ee,compareBuild:bt,sort:St,rsort:Dt,gt:Ot,lt:po,eq:qt,neq:Ut,gte:Kt,lte:ut,cmp:Vt,coerce:yo,Comparator:to,Range:nn,satisfies:at,toComparators:ye,maxSatisfying:fe,minSatisfying:Je,minVersion:Ce,validRange:Re,outside:je,gtr:Me,ltr:we,intersects:Ct,simplifyRange:zt,subset:Ft,SemVer:P,re:I.re,src:I.src,tokens:I.t,SEMVER_SPEC_VERSION:C.SEMVER_SPEC_VERSION,RELEASE_TYPES:C.RELEASE_TYPES,compareIdentifiers:R.compareIdentifiers,rcompareIdentifiers:R.rcompareIdentifiers}}}),hn={};(0,X.VA)(hn,{applyDecorators:()=>nt.t,beforeAll:()=>se,decorators:()=>T,mount:()=>y,parameters:()=>ce,render:()=>Oo,renderToCanvas:()=>Yo});var Io=(0,X.f1)(Lo()),Mo={...Ke};function wo(s){globalThis.IS_REACT_ACT_ENVIRONMENT=s}function Go(){return globalThis.IS_REACT_ACT_ENVIRONMENT}function Xo(s){return M=>{let I=Go();wo(!0);try{let C=!1,P=s(()=>{let R=M();return R!==null&&typeof R=="object"&&typeof R.then=="function"&&(C=!0),R});if(C){let R=P;return{then:(G,te)=>{R.then(v=>{wo(I),G(v)},v=>{wo(I),te(v)})}}}else return wo(I),P}catch(C){throw wo(I),C}}}var Co=async({disableAct:s=!1}={})=>I=>I(),Oo=(s,M)=>{let{id:I,component:C}=M;if(!C)throw new Error(`Unable to render story ${I} as the component annotation is missing from the default export`);return re.createElement(C,{...s})},{FRAMEWORK_OPTIONS:on}=st.global,Ko=class extends re.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidMount(){let{hasError:s}=this.state,{showMain:M}=this.props;s||M()}componentDidCatch(s){let{showException:M}=this.props;M(s)}render(){let{hasError:s}=this.state,{children:M}=this.props;return s?null:M}},Fo=on?.strictMode?re.StrictMode:re.Fragment,So=[],xo=!1,Ho=async()=>{if(xo||So.length===0)return;xo=!0;let s=So.shift();s&&await s(),xo=!1,Ho()};async function Yo({storyContext:s,unboundStoryFn:M,showMain:I,showException:C,forceRemount:P},R){let{renderElement:G,unmountElement:te}=await Promise.all([V.e(4833),V.e(9179)]).then(V.bind(V,"../../../node_modules/.pnpm/@storybook+react-dom-shim@9.0.15_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@_e427e85d904376ad8713331bbcac7bd5/node_modules/@storybook/react-dom-shim/dist/react-18.mjs")),v=M,pe=s.parameters.__isPortableStory?re.createElement(v,{...s}):re.createElement(Ko,{key:s.id,showMain:I,showException:C},re.createElement(v,{...s})),K=Fo?re.createElement(Fo,null,pe):pe;P&&te(R);let J=await Co({disableAct:s.viewMode==="docs"});return await new Promise(async(D,H)=>{So.push(async()=>{try{await J(async()=>{await G(K,R,s?.parameters?.react?.rootOptions)}),D()}catch(me){H(me)}}),Ho()}),async()=>{await J(()=>{te(R)})}}var y=s=>async M=>(M!=null&&(s.originalStoryFn=()=>M),await s.renderToCanvas(),s.canvas),T=[(s,M)=>{if(!M.parameters?.react?.rsc)return s();let I=Io.default.major(re.version),C=Io.default.minor(re.version);if(I<18||I===18&&C<3)throw new Error("React Server Components require React >= 18.3");return re.createElement(re.Suspense,null,s())}],ce={renderer:"react"},se=async()=>{try{let{configure:s}=await Promise.resolve().then(V.t.bind(V,"storybook/test",23)),M=await Co();s({unstable_advanceTimersWrapper:I=>M(I),asyncWrapper:async I=>{let C=Go();wo(!1);try{let P=await I();return await new Promise(R=>{setTimeout(()=>{R()},0),mt()&&jest.advanceTimersByTime(0)}),P}finally{wo(C)}},eventWrapper:I=>{let C;return M(()=>(C=I(),C)),C}})}catch{}};function mt(){return typeof jest<"u"&&jest!==null?setTimeout._isMockFunction===!0||Object.prototype.hasOwnProperty.call(setTimeout,"clock"):!1}}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/@wordpress+block-editor@15.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/block-editor/build-style/style.css":((Nt,ue,V)=>{V.d(ue,{A:()=>pt});var nt=V("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),X=V.n(nt),re=V("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),Ke=V.n(re),st=Ke()(X());st.push([Nt.id,`/**
 * Colors
 */
/**
 * Breakpoints & Media Queries
 */
/**
 * Colors
 */
/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
/**
 * Colors
 */
/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
/**
 * Breakpoints & Media Queries
 */
/**
*  Converts a hex value into the rgb equivalent.
*
* @param {string} hex - the hexadecimal value to convert
* @return {string} comma separated rgb values
*/
/**
 * Long content fade mixin
 *
 * Creates a fading overlay to signify that the content is longer
 * than the space allows.
 */
/**
 * Typography
 */
/**
 * Breakpoint mixins
 */
/**
 * Focus styles.
 */
/**
 * Applies editor left position to the selector passed as argument
 */
/**
 * Styles that are reused verbatim in a few places
 */
/**
 * Allows users to opt-out of animations via OS-level preferences.
 */
/**
 * Reset default styles for JavaScript UI based pages.
 * This is a WP-admin agnostic reset
 */
/**
 * Reset the WP Admin page styles for Gutenberg-like pages.
 */
/**
 * Colors
 */
/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
/**
 * Breakpoints & Media Queries
 */
/**
*  Converts a hex value into the rgb equivalent.
*
* @param {string} hex - the hexadecimal value to convert
* @return {string} comma separated rgb values
*/
/**
 * Long content fade mixin
 *
 * Creates a fading overlay to signify that the content is longer
 * than the space allows.
 */
/**
 * Typography
 */
/**
 * Breakpoint mixins
 */
/**
 * Focus styles.
 */
/**
 * Applies editor left position to the selector passed as argument
 */
/**
 * Styles that are reused verbatim in a few places
 */
/**
 * Allows users to opt-out of animations via OS-level preferences.
 */
/**
 * Reset default styles for JavaScript UI based pages.
 * This is a WP-admin agnostic reset
 */
/**
 * Reset the WP Admin page styles for Gutenberg-like pages.
 */
:root {
  --wp-block-synced-color: #7a00df;
  --wp-block-synced-color--rgb: 122, 0, 223;
  --wp-bound-block-color: var(--wp-block-synced-color);
  --wp-admin-theme-color: #007cba;
  --wp-admin-theme-color--rgb: 0, 124, 186;
  --wp-admin-theme-color-darker-10: #006ba1;
  --wp-admin-theme-color-darker-10--rgb: 0, 107, 161;
  --wp-admin-theme-color-darker-20: #005a87;
  --wp-admin-theme-color-darker-20--rgb: 0, 90, 135;
  --wp-admin-border-width-focus: 2px;
}
@media (min-resolution: 192dpi) {
  :root {
    --wp-admin-border-width-focus: 1.5px;
  }
}

.block-editor-autocompleters__block {
  white-space: nowrap;
}
.block-editor-autocompleters__block .block-editor-block-icon {
  margin-right: 8px;
}
.block-editor-autocompleters__block[aria-selected=true] .block-editor-block-icon {
  color: inherit !important;
}

.block-editor-autocompleters__link {
  white-space: nowrap;
}
.block-editor-autocompleters__link .block-editor-block-icon {
  margin-right: 8px;
}

.block-editor-global-styles-background-panel__inspector-media-replace-container {
  border: 1px solid #ddd;
  border-radius: 2px;
  grid-column: 1/-1;
}
.block-editor-global-styles-background-panel__inspector-media-replace-container.is-open {
  background-color: #f0f0f0;
}
.block-editor-global-styles-background-panel__inspector-media-replace-container .block-editor-global-styles-background-panel__image-tools-panel-item {
  flex-grow: 1;
  border: 0;
}
.block-editor-global-styles-background-panel__inspector-media-replace-container .block-editor-global-styles-background-panel__image-tools-panel-item .components-dropdown {
  display: block;
}
.block-editor-global-styles-background-panel__inspector-media-replace-container .block-editor-global-styles-background-panel__inspector-preview-inner {
  height: 100%;
}
.block-editor-global-styles-background-panel__inspector-media-replace-container .components-dropdown {
  display: block;
}
.block-editor-global-styles-background-panel__inspector-media-replace-container .components-dropdown .block-editor-global-styles-background-panel__dropdown-toggle {
  height: 40px;
}

.block-editor-global-styles-background-panel__image-tools-panel-item {
  border: 1px solid #ddd;
  grid-column: 1/-1;
  position: relative;
}
.block-editor-global-styles-background-panel__image-tools-panel-item .components-drop-zone__content-icon {
  display: none;
}
.block-editor-global-styles-background-panel__image-tools-panel-item .components-dropdown {
  display: block;
}
.block-editor-global-styles-background-panel__image-tools-panel-item button.components-button {
  color: #1e1e1e;
  width: 100%;
  display: block;
}
.block-editor-global-styles-background-panel__image-tools-panel-item button.components-button:hover {
  color: var(--wp-admin-theme-color);
}
.block-editor-global-styles-background-panel__image-tools-panel-item button.components-button:focus {
  box-shadow: inset 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
}
.block-editor-global-styles-background-panel__image-tools-panel-item .block-editor-global-styles-background-panel__loading {
  height: 100%;
  position: absolute;
  z-index: 1;
  width: 100%;
  padding: 10px 0 0 0;
}
.block-editor-global-styles-background-panel__image-tools-panel-item .block-editor-global-styles-background-panel__loading svg {
  margin: 0;
}

.block-editor-global-styles-background-panel__dropdown-toggle {
  cursor: pointer;
  background: transparent;
  border: none;
  height: 100%;
  width: 100%;
  padding-left: 12px;
}

.block-editor-global-styles-background-panel__inspector-media-replace-title {
  word-break: break-all;
  white-space: normal;
  text-align: start;
  text-align-last: center;
}

.block-editor-global-styles-background-panel__inspector-preview-inner .block-editor-global-styles-background-panel__inspector-image-indicator-wrapper {
  width: 20px;
  height: 20px;
  min-width: auto;
}

.block-editor-global-styles-background-panel__inspector-image-indicator {
  background-size: cover;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: block;
  position: relative;
}

.block-editor-global-styles-background-panel__inspector-image-indicator::after {
  content: "";
  position: absolute;
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
  border: 1px solid transparent;
  box-sizing: inherit;
}

.block-editor-global-styles-background-panel__dropdown-content-wrapper {
  min-width: 260px;
  overflow-x: hidden;
}
.block-editor-global-styles-background-panel__dropdown-content-wrapper .components-focal-point-picker-wrapper {
  background-color: #f0f0f0;
  width: 100%;
  border-radius: 2px;
  border: 1px solid #ddd;
}
.block-editor-global-styles-background-panel__dropdown-content-wrapper .components-focal-point-picker__media--image {
  max-height: 180px;
}
.block-editor-global-styles-background-panel__dropdown-content-wrapper .components-focal-point-picker::after {
  content: none;
}

.modal-open .block-editor-global-styles-background-panel__popover {
  z-index: 159890;
}

.block-editor-global-styles-background-panel__media-replace-popover .components-popover__content {
  width: 226px;
}
.block-editor-global-styles-background-panel__media-replace-popover .components-button {
  padding: 0 8px;
}
.block-editor-global-styles-background-panel__media-replace-popover .components-button .components-menu-items__item-icon.has-icon-right {
  margin-left: 16px;
}

.block-editor-block-alignment-control__menu-group .components-menu-item__info {
  margin-top: 0;
}

iframe[name=editor-canvas] {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: block;
  background-color: #ddd;
}
@media not (prefers-reduced-motion) {
  iframe[name=editor-canvas] {
    transition: all 400ms cubic-bezier(0.46, 0.03, 0.52, 0.96);
  }
}

.block-editor-block-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}
.block-editor-block-icon.has-colors svg {
  fill: currentColor;
}
@media (forced-colors: active) {
  .block-editor-block-icon.has-colors svg {
    fill: CanvasText;
  }
}
.block-editor-block-icon svg {
  min-width: 20px;
  min-height: 20px;
  max-width: 24px;
  max-height: 24px;
}

.block-editor-block-inspector p:not(.components-base-control__help) {
  margin-top: 0;
}
.block-editor-block-inspector h2,
.block-editor-block-inspector h3 {
  font-size: 13px;
  color: #1e1e1e;
  margin-bottom: 1.5em;
}
.block-editor-block-inspector .components-base-control:where(:not(:last-child)),
.block-editor-block-inspector .components-radio-control:where(:not(:last-child)),
.block-editor-block-inspector .block-editor-html-element-control:where(:not(:last-child)),
.block-editor-block-inspector .block-editor-image-size-control:where(:not(:last-child)) {
  margin-bottom: 16px;
}
.block-editor-block-inspector .components-focal-point-picker-control .components-base-control,
.block-editor-block-inspector .components-query-controls .components-base-control,
.block-editor-block-inspector .components-range-control .components-base-control,
.block-editor-block-inspector .block-editor-html-element-control .components-base-control,
.block-editor-block-inspector .block-editor-image-size-control .components-base-control {
  margin-bottom: 0;
}
.block-editor-block-inspector .components-panel__body {
  border: none;
  border-top: 1px solid #e0e0e0;
  margin-top: -1px;
}

.block-editor-block-inspector__no-blocks,
.block-editor-block-inspector__no-block-tools {
  display: block;
  font-size: 13px;
  background: #fff;
  padding: 32px 16px;
  text-align: center;
}

.block-editor-block-inspector__no-block-tools {
  border-top: 1px solid #ddd;
}

/**
 * Insertion Point.
 */
.block-editor-block-list__insertion-point {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.block-editor-block-list__insertion-point-indicator {
  position: absolute;
  background: var(--wp-admin-theme-color);
  border-radius: 2px;
  transform-origin: center;
  opacity: 0;
  will-change: transform, opacity;
}
.block-editor-block-list__insertion-point.is-vertical > .block-editor-block-list__insertion-point-indicator {
  top: calc(50% - 2px);
  height: 4px;
  width: 100%;
}
.block-editor-block-list__insertion-point.is-horizontal > .block-editor-block-list__insertion-point-indicator {
  top: 0;
  bottom: 0;
  left: calc(50% - 2px);
  width: 4px;
}

.block-editor-block-list__insertion-point-inserter {
  display: none;
  position: absolute;
  will-change: transform;
  justify-content: center;
  top: calc(50% - 12px);
  left: calc(50% - 12px);
}
@media (min-width: 480px) {
  .block-editor-block-list__insertion-point-inserter {
    display: flex;
  }
}

.block-editor-block-list__block-side-inserter-popover .components-popover__content > div {
  pointer-events: none;
}
.block-editor-block-list__block-side-inserter-popover .components-popover__content > div > * {
  pointer-events: all;
}

.block-editor-block-list__empty-block-inserter.block-editor-block-list__empty-block-inserter {
  position: absolute;
  top: 0;
  right: 0;
  line-height: 0;
}
.block-editor-block-list__empty-block-inserter.block-editor-block-list__empty-block-inserter:disabled {
  display: none;
}

.block-editor-block-list__empty-block-inserter .block-editor-inserter__toggle.components-button.has-icon,
.block-editor-block-list__insertion-point-inserter .block-editor-inserter__toggle.components-button.has-icon {
  background: #1e1e1e;
  color: #fff;
  padding: 0;
  min-width: 24px;
  height: 24px;
}
.block-editor-block-list__empty-block-inserter .block-editor-inserter__toggle.components-button.has-icon:hover,
.block-editor-block-list__insertion-point-inserter .block-editor-inserter__toggle.components-button.has-icon:hover {
  color: #fff;
  background: var(--wp-admin-theme-color);
}

.block-editor-block-list__insertion-point-inserter .block-editor-inserter__toggle.components-button.has-icon {
  background: var(--wp-admin-theme-color);
}
.block-editor-block-list__insertion-point-inserter .block-editor-inserter__toggle.components-button.has-icon:hover {
  background: #1e1e1e;
}

@keyframes hide-during-dragging {
  to {
    position: fixed;
    transform: translate(9999px, 9999px);
  }
}
.components-popover.block-editor-block-list__block-popover .block-editor-block-contextual-toolbar {
  pointer-events: all;
  margin-top: 8px;
  margin-bottom: 8px;
  border: 1px solid #1e1e1e;
  border-radius: 2px;
  overflow: visible;
  position: static;
  width: auto;
}
.components-popover.block-editor-block-list__block-popover .block-editor-block-contextual-toolbar.has-parent {
  margin-left: calc(48px + 8px);
}
.show-icon-labels .components-popover.block-editor-block-list__block-popover .block-editor-block-contextual-toolbar.has-parent {
  margin-left: 0;
}
.components-popover.block-editor-block-list__block-popover .block-editor-block-toolbar {
  overflow: visible;
}
.components-popover.block-editor-block-list__block-popover .block-editor-block-toolbar .components-toolbar-group,
.components-popover.block-editor-block-list__block-popover .block-editor-block-toolbar .components-toolbar {
  border-right-color: #1e1e1e;
}
.components-popover.block-editor-block-list__block-popover .is-inverted-toolbar {
  background-color: #1e1e1e;
  color: #f0f0f0;
}
.components-popover.block-editor-block-list__block-popover .is-inverted-toolbar.block-editor-block-contextual-toolbar {
  border-color: #2f2f2f;
}
.components-popover.block-editor-block-list__block-popover .is-inverted-toolbar button {
  color: #ddd;
}
.components-popover.block-editor-block-list__block-popover .is-inverted-toolbar button:hover {
  color: #fff;
}
.components-popover.block-editor-block-list__block-popover .is-inverted-toolbar button:focus::before {
  box-shadow: inset 0 0 0 1px #1e1e1e, 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
}
.components-popover.block-editor-block-list__block-popover .is-inverted-toolbar button:disabled, .components-popover.block-editor-block-list__block-popover .is-inverted-toolbar button[aria-disabled=true] {
  color: #757575;
}
.components-popover.block-editor-block-list__block-popover .is-inverted-toolbar .block-editor-block-parent-selector .block-editor-block-parent-selector__button {
  border-color: #2f2f2f;
  background-color: #1e1e1e;
}
.components-popover.block-editor-block-list__block-popover .is-inverted-toolbar .block-editor-block-switcher__toggle {
  color: #f0f0f0;
}
.components-popover.block-editor-block-list__block-popover .is-inverted-toolbar .components-toolbar-group,
.components-popover.block-editor-block-list__block-popover .is-inverted-toolbar .components-toolbar {
  border-right-color: #2f2f2f !important;
}
.components-popover.block-editor-block-list__block-popover .is-inverted-toolbar .is-pressed {
  color: var(--wp-admin-theme-color);
}
.components-popover.block-editor-block-list__block-popover.is-insertion-point-visible {
  visibility: hidden;
}
.is-dragging-components-draggable .components-popover.block-editor-block-list__block-popover {
  opacity: 0;
}
@media not (prefers-reduced-motion) {
  .is-dragging-components-draggable .components-popover.block-editor-block-list__block-popover {
    animation: hide-during-dragging 1ms linear forwards;
  }
}
.components-popover.block-editor-block-list__block-popover .block-editor-block-parent-selector {
  position: absolute;
  left: calc(-48px - 8px - 1px);
}
.components-popover.block-editor-block-list__block-popover .block-editor-block-parent-selector::before {
  content: "";
}
.components-popover.block-editor-block-list__block-popover .block-editor-block-parent-selector .block-editor-block-parent-selector__button {
  border: 1px solid #1e1e1e;
  padding-right: 6px;
  padding-left: 6px;
  background-color: #fff;
}
.show-icon-labels .components-popover.block-editor-block-list__block-popover .block-editor-block-parent-selector .block-editor-block-parent-selector__button {
  padding-right: 12px;
  padding-left: 12px;
}
.show-icon-labels .components-popover.block-editor-block-list__block-popover .block-editor-block-parent-selector {
  position: relative;
  left: auto;
  margin-left: -1px;
}
.show-icon-labels .components-popover.block-editor-block-list__block-popover .block-editor-block-mover__move-button-container,
.show-icon-labels .components-popover.block-editor-block-list__block-popover .block-editor-block-toolbar__block-controls .block-editor-block-mover {
  border-left: 1px solid #1e1e1e;
}

.is-dragging-components-draggable .components-tooltip {
  display: none;
}

.components-popover.block-editor-block-popover__inbetween .block-editor-button-pattern-inserter__button {
  pointer-events: all;
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  left: 50%;
}

.block-editor-block-lock-modal {
  z-index: 1000001;
}

.block-editor-block-lock-modal__options {
  border: 0;
  padding: 0;
  margin: 0;
}

.block-editor-block-lock-modal__options legend {
  margin-bottom: 16px;
  padding: 0;
}

.block-editor-block-lock-modal__checklist {
  list-style: none;
  padding: 0;
  margin: 0;
}

.block-editor-block-lock-modal__options-all {
  padding: 12px 0;
}
.block-editor-block-lock-modal__options-all .components-checkbox-control__label {
  font-weight: 600;
}

.block-editor-block-lock-modal__checklist-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 0;
  padding: 12px 0 12px 32px;
}
.block-editor-block-lock-modal__checklist-item .block-editor-block-lock-modal__lock-icon {
  flex-shrink: 0;
  margin-right: 12px;
  fill: #1e1e1e;
}
.block-editor-block-lock-modal__checklist-item:hover {
  background-color: #f0f0f0;
  border-radius: 2px;
}

.block-editor-block-lock-modal__template-lock {
  border-top: 1px solid #ddd;
  margin-top: 16px;
  padding-top: 16px;
}

.block-editor-block-lock-modal__actions {
  margin-top: 24px;
}

.block-editor-block-lock-toolbar .components-button.has-icon {
  min-width: 36px !important;
}

.block-editor-block-toolbar__block-controls .block-editor-block-lock-toolbar {
  margin-left: -6px !important;
}

.show-icon-labels .block-editor-block-toolbar__block-controls .block-editor-block-lock-toolbar {
  border-left: 1px solid #1e1e1e;
  margin-left: 6px !important;
  margin-right: -6px;
}

.block-editor-block-breadcrumb {
  list-style: none;
  padding: 0;
  margin: 0;
}
.block-editor-block-breadcrumb li {
  display: inline-flex;
  margin: 0;
}
.block-editor-block-breadcrumb li .block-editor-block-breadcrumb__separator {
  fill: currentColor;
  margin-left: -4px;
  margin-right: -4px;
  transform: scaleX(1) /*rtl:scaleX(-1);*/;
}
.block-editor-block-breadcrumb li:last-child .block-editor-block-breadcrumb__separator {
  display: none;
}

.block-editor-block-breadcrumb__current {
  cursor: default;
}

.block-editor-block-breadcrumb__button.block-editor-block-breadcrumb__button,
.block-editor-block-breadcrumb__current {
  color: #1e1e1e;
  padding: 0 8px;
  font-size: inherit;
}

.block-editor-block-card {
  align-items: flex-start;
  color: #1e1e1e;
  display: flex;
  padding: 16px;
}

.block-editor-block-card__title {
  font-weight: 500;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px 8px;
}
.block-editor-block-card__title.block-editor-block-card__title {
  font-size: 13px;
  line-height: 1.4;
  margin: 0;
}

.block-editor-block-card__name {
  padding: 3px 0;
}

.block-editor-block-card .block-editor-block-icon {
  flex: 0 0 24px;
  margin-left: 0;
  margin-right: 12px;
  width: 24px;
  height: 24px;
}

.block-editor-block-card.is-synced .block-editor-block-icon {
  color: var(--wp-block-synced-color);
}

/**
 * Invalid block comparison
 */
.block-editor-block-compare {
  height: auto;
}

.block-editor-block-compare__wrapper {
  display: flex;
  padding-bottom: 16px;
}
.block-editor-block-compare__wrapper > div {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 50%;
  padding: 0 16px 0 0;
  min-width: 200px;
  max-width: 600px;
}
.block-editor-block-compare__wrapper > div button {
  float: right;
}
.block-editor-block-compare__wrapper .block-editor-block-compare__converted {
  border-left: 1px solid #ddd;
  padding-left: 15px;
  padding-right: 0;
}
.block-editor-block-compare__wrapper .block-editor-block-compare__html {
  font-family: Menlo, Consolas, monaco, monospace;
  font-size: 12px;
  color: #1e1e1e;
  border-bottom: 1px solid #ddd;
  padding-bottom: 15px;
  line-height: 1.7;
}
.block-editor-block-compare__wrapper .block-editor-block-compare__html span {
  background-color: #e6ffed;
  padding-top: 3px;
  padding-bottom: 3px;
}
.block-editor-block-compare__wrapper .block-editor-block-compare__html span.block-editor-block-compare__added {
  background-color: #acf2bd;
}
.block-editor-block-compare__wrapper .block-editor-block-compare__html span.block-editor-block-compare__removed {
  background-color: #cc1818;
}
.block-editor-block-compare__wrapper .block-editor-block-compare__preview {
  padding: 0;
  padding-top: 16px;
}
.block-editor-block-compare__wrapper .block-editor-block-compare__preview p {
  font-size: 12px;
  margin-top: 0;
}
.block-editor-block-compare__wrapper .block-editor-block-compare__action {
  margin-top: 16px;
}
.block-editor-block-compare__wrapper .block-editor-block-compare__heading {
  font-size: 1em;
  font-weight: 400;
  margin: 0.67em 0;
}

.block-editor-block-draggable-chip-wrapper {
  position: absolute;
  top: -24px;
  left: 0;
}

.block-editor-block-draggable-chip {
  background-color: #1e1e1e;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 3px rgba(0, 0, 0, 0.04), 0 6px 6px rgba(0, 0, 0, 0.03), 0 8px 8px rgba(0, 0, 0, 0.02);
  color: #fff;
  cursor: grabbing;
  display: inline-flex;
  height: 48px;
  padding: 0 13px;
  position: relative;
  -webkit-user-select: none;
          user-select: none;
  width: max-content;
}
.block-editor-block-draggable-chip svg {
  fill: currentColor;
}
.block-editor-block-draggable-chip .block-editor-block-draggable-chip__content {
  margin: auto;
  justify-content: flex-start;
}
.block-editor-block-draggable-chip .block-editor-block-draggable-chip__content > .components-flex__item {
  margin-right: 6px;
}
.block-editor-block-draggable-chip .block-editor-block-draggable-chip__content > .components-flex__item:last-child {
  margin-right: 0;
}
.block-editor-block-draggable-chip .block-editor-block-draggable-chip__content .block-editor-block-icon svg {
  min-width: 18px;
  min-height: 18px;
}
.block-editor-block-draggable-chip .components-flex__item {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 13px;
}

.block-editor-block-draggable-chip__disabled.block-editor-block-draggable-chip__disabled {
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}
@media not (prefers-reduced-motion) {
  .block-editor-block-draggable-chip__disabled.block-editor-block-draggable-chip__disabled {
    transition: all 0.1s linear 0.1s;
  }
}
.block-editor-block-draggable-chip__disabled.block-editor-block-draggable-chip__disabled .block-editor-block-draggable-chip__disabled-icon {
  width: 20px;
  height: 20px;
  box-shadow: inset 0 0 0 1.5px #fff;
  border-radius: 50%;
  display: inline-block;
  padding: 0;
  background: transparent linear-gradient(-45deg, transparent 47.5%, #fff 47.5%, #fff 52.5%, transparent 52.5%);
}

.block-draggable-invalid-drag-token .block-editor-block-draggable-chip__disabled.block-editor-block-draggable-chip__disabled {
  background-color: #757575;
  opacity: 1;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 3px rgba(0, 0, 0, 0.04), 0 6px 6px rgba(0, 0, 0, 0.03), 0 8px 8px rgba(0, 0, 0, 0.02);
}

.block-editor-block-manager__no-results {
  font-style: italic;
  padding: 24px 0;
  text-align: center;
}

.block-editor-block-manager__search {
  margin: 16px 0;
}

.block-editor-block-manager__disabled-blocks-count {
  border: 1px solid #ddd;
  border-width: 1px 0;
  box-shadow: -32px 0 0 0 #fff, 32px 0 0 0 #fff;
  padding: 8px;
  background-color: #fff;
  text-align: center;
  position: sticky;
  top: -5px;
  z-index: 2;
}
.block-editor-block-manager__disabled-blocks-count ~ .block-editor-block-manager__results .block-editor-block-manager__category-title {
  top: 31px;
}
.block-editor-block-manager__disabled-blocks-count .is-link {
  margin-left: 12px;
}

.block-editor-block-manager__category {
  margin: 0 0 24px 0;
}

.block-editor-block-manager__category-title {
  position: sticky;
  top: -4px;
  padding: 16px 0;
  background-color: #fff;
  z-index: 1;
}
.block-editor-block-manager__category-title .components-checkbox-control__label {
  font-weight: 600;
}

.block-editor-block-manager__checklist {
  margin-top: 0;
}

.block-editor-block-manager__category-title,
.block-editor-block-manager__checklist-item {
  border-bottom: 1px solid #ddd;
}

.block-editor-block-manager__checklist-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
  padding: 8px 0 8px 16px;
}
.components-modal__content .block-editor-block-manager__checklist-item.components-checkbox-control__input-container {
  margin: 0 8px;
}
.block-editor-block-manager__checklist-item .block-editor-block-icon {
  margin-right: 10px;
  fill: #1e1e1e;
}

.block-editor-block-manager__results {
  border-top: 1px solid #ddd;
}

.block-editor-block-manager__disabled-blocks-count + .block-editor-block-manager__results {
  border-top-width: 0;
}

.block-editor-block-mover__move-button-container {
  display: flex;
  padding: 0;
  border: none;
  justify-content: center;
}
@media (min-width: 600px) {
  .block-editor-block-mover:not(.is-horizontal) .block-editor-block-mover__move-button-container {
    flex-direction: column;
  }
  .block-editor-block-mover:not(.is-horizontal) .block-editor-block-mover__move-button-container > * {
    height: 20px;
    width: 100%;
    min-width: 0 !important;
  }
  .block-editor-block-mover:not(.is-horizontal) .block-editor-block-mover__move-button-container > *::before {
    height: calc(100% - 4px);
  }
  .block-editor-block-mover:not(.is-horizontal) .block-editor-block-mover__move-button-container .block-editor-block-mover-button.is-up-button svg {
    top: 3px;
    flex-shrink: 0;
  }
  .block-editor-block-mover:not(.is-horizontal) .block-editor-block-mover__move-button-container .block-editor-block-mover-button.is-down-button svg {
    bottom: 3px;
    flex-shrink: 0;
  }
  .block-editor-block-mover.is-horizontal .block-editor-block-mover__move-button-container {
    width: 48px;
  }
  .block-editor-block-mover.is-horizontal .block-editor-block-mover__move-button-container > * {
    width: 24px;
    min-width: 0 !important;
    overflow: hidden;
  }
  .block-editor-block-mover.is-horizontal .block-editor-block-mover__move-button-container .block-editor-block-mover-button {
    padding-left: 0;
    padding-right: 0;
  }
  .block-editor-block-mover.is-horizontal .block-editor-block-mover__move-button-container .block-editor-block-mover-button.is-up-button svg {
    left: 5px;
  }
  .block-editor-block-mover.is-horizontal .block-editor-block-mover__move-button-container .block-editor-block-mover-button.is-down-button svg {
    right: 5px;
  }
}

.block-editor-block-mover__drag-handle {
  cursor: grab;
}
@media (min-width: 600px) {
  .block-editor-block-mover__drag-handle {
    width: 24px;
    min-width: 0 !important;
    overflow: hidden;
  }
  .block-editor-block-mover .block-editor-block-mover__drag-handle.has-icon.has-icon {
    padding-left: 0;
    padding-right: 0;
  }
}

.components-button.block-editor-block-mover-button {
  overflow: hidden;
}
.components-button.block-editor-block-mover-button::before {
  content: "";
  position: absolute;
  display: block;
  border-radius: 2px;
  height: 32px;
  left: 8px;
  right: 8px;
  z-index: -1;
}
@media not (prefers-reduced-motion) {
  .components-button.block-editor-block-mover-button::before {
    animation: components-button__appear-animation 0.1s ease;
    animation-fill-mode: forwards;
  }
}
.components-button.block-editor-block-mover-button:focus, .components-button.block-editor-block-mover-button:focus:enabled, .components-button.block-editor-block-mover-button:focus::before {
  box-shadow: none;
  outline: none;
}
.components-button.block-editor-block-mover-button:focus-visible::before {
  box-shadow: inset 0 0 0 1px #fff, 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
  outline: 2px solid transparent;
}

.block-editor-block-navigation__container {
  min-width: 280px;
}

.block-editor-block-navigation__label {
  margin: 0 0 12px;
  color: #757575;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 500;
}

.block-editor-block-patterns-list__list-item {
  cursor: pointer;
  margin-bottom: 16px;
  position: relative;
}
.block-editor-block-patterns-list__list-item.is-placeholder {
  min-height: 100px;
}
.block-editor-block-patterns-list__list-item[draggable=true] {
  cursor: grab;
}

.block-editor-block-patterns-list__item {
  height: 100%;
  scroll-margin-top: 24px;
  scroll-margin-bottom: 56px;
  outline: 0;
}
.block-editor-block-patterns-list__item .block-editor-block-patterns-list__item-title {
  flex-grow: 1;
  font-size: 12px;
  text-align: left;
}
.block-editor-block-patterns-list__item .block-editor-block-preview__container {
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 4px;
}
.block-editor-block-patterns-list__item .block-editor-block-preview__container::after {
  outline: 1px solid rgba(0, 0, 0, 0.1);
  outline-offset: -1px;
  border-radius: 4px;
}
@media not (prefers-reduced-motion) {
  .block-editor-block-patterns-list__item .block-editor-block-preview__container::after {
    transition: outline 0.1s linear;
  }
}
.block-editor-block-patterns-list__item.is-selected .block-editor-block-preview__container::after {
  outline-color: #1e1e1e;
  outline-width: var(--wp-admin-border-width-focus);
  outline-offset: calc(-1 * var(--wp-admin-border-width-focus));
}
.block-editor-block-patterns-list__item:hover .block-editor-block-preview__container::after {
  outline-color: rgba(0, 0, 0, 0.3);
}
.block-editor-block-patterns-list__item[data-focus-visible] .block-editor-block-preview__container::after {
  outline-color: var(--wp-admin-theme-color);
  outline-width: var(--wp-admin-border-width-focus);
  outline-offset: calc(-1 * var(--wp-admin-border-width-focus));
}
.block-editor-block-patterns-list__item .block-editor-patterns__pattern-details:not(:empty) {
  align-items: center;
  margin-top: 8px;
  padding-bottom: 4px;
}
.block-editor-block-patterns-list__item .block-editor-patterns__pattern-icon-wrapper {
  min-width: 24px;
  height: 24px;
}
.block-editor-block-patterns-list__item .block-editor-patterns__pattern-icon-wrapper .block-editor-patterns__pattern-icon {
  fill: var(--wp-block-synced-color);
}

.block-editor-patterns__grid-pagination-wrapper .block-editor-patterns__grid-pagination {
  border-top: 1px solid #2f2f2f;
  padding: 4px;
  justify-content: center;
}

.show-icon-labels .block-editor-patterns__grid-pagination-button {
  width: auto;
}
.show-icon-labels .block-editor-patterns__grid-pagination-button span {
  display: none;
}
.show-icon-labels .block-editor-patterns__grid-pagination-button::before {
  content: attr(aria-label);
}

.components-popover.block-editor-block-popover {
  z-index: 31;
  position: absolute;
  margin: 0 !important;
  pointer-events: none;
}
.components-popover.block-editor-block-popover .components-popover__content {
  margin: 0 !important;
  min-width: auto;
  width: max-content;
  overflow-y: visible;
}
.components-popover.block-editor-block-popover:not(.block-editor-block-popover__inbetween, .block-editor-block-popover__drop-zone, .block-editor-block-list__block-side-inserter-popover) .components-popover__content * {
  pointer-events: all;
}

.components-popover.block-editor-block-popover__inbetween {
  pointer-events: none;
}
.components-popover.block-editor-block-popover__inbetween * {
  pointer-events: none;
}
.components-popover.block-editor-block-popover__inbetween .is-with-inserter {
  pointer-events: all;
}
.components-popover.block-editor-block-popover__inbetween .is-with-inserter * {
  pointer-events: all;
}

.components-popover.block-editor-block-popover__drop-zone * {
  pointer-events: none;
}
.components-popover.block-editor-block-popover__drop-zone .block-editor-block-popover__drop-zone-foreground {
  position: absolute;
  inset: 0;
  background-color: var(--wp-admin-theme-color);
  border-radius: 2px;
}

.block-editor-block-preview__container {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.block-editor-block-preview__container .block-editor-block-preview__content {
  width: 100%;
  top: 0;
  left: 0;
  transform-origin: top left;
  text-align: initial;
  margin: 0;
  overflow: visible;
  min-height: auto;
}
.block-editor-block-preview__container .block-editor-block-preview__content .block-editor-block-list__insertion-point,
.block-editor-block-preview__container .block-editor-block-preview__content .block-list-appender {
  display: none;
}

.block-editor-block-preview__container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.block-editor-block-rename-modal {
  z-index: 1000001;
}

.block-editor-block-styles__preview-panel {
  display: none;
  z-index: 90;
}
@media (min-width: 782px) {
  .block-editor-block-styles__preview-panel {
    display: block;
  }
}
.block-editor-block-styles__preview-panel .block-editor-block-icon {
  display: none;
}

.block-editor-block-styles__variants {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
}
.block-editor-block-styles__variants button.components-button.block-editor-block-styles__item {
  color: #1e1e1e;
  box-shadow: inset 0 0 0 1px #ddd;
  display: inline-block;
  width: calc(50% - 4px);
}
.block-editor-block-styles__variants button.components-button.block-editor-block-styles__item:hover {
  color: var(--wp-admin-theme-color);
  box-shadow: inset 0 0 0 1px #ddd;
}
.block-editor-block-styles__variants button.components-button.block-editor-block-styles__item.is-active, .block-editor-block-styles__variants button.components-button.block-editor-block-styles__item.is-active:hover {
  background-color: #1e1e1e;
  box-shadow: none;
}
.block-editor-block-styles__variants button.components-button.block-editor-block-styles__item.is-active .block-editor-block-styles__item-text, .block-editor-block-styles__variants button.components-button.block-editor-block-styles__item.is-active:hover .block-editor-block-styles__item-text {
  color: #fff;
}
.block-editor-block-styles__variants button.components-button.block-editor-block-styles__item:focus, .block-editor-block-styles__variants button.components-button.block-editor-block-styles__item.is-active:focus {
  box-shadow: inset 0 0 0 1px #fff, 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
  outline: 2px solid transparent;
}
.block-editor-block-styles__variants .block-editor-block-styles__item-text {
  word-break: break-all;
  white-space: normal;
  text-align: start;
  text-align-last: center;
}

.block-editor-block-styles__block-preview-container,
.block-editor-block-styles__block-preview-container * {
  box-sizing: border-box !important;
}

.block-editor-block-switcher {
  position: relative;
}
.block-editor-block-switcher .components-button.components-dropdown-menu__toggle.has-icon.has-icon {
  min-width: 36px;
}

.block-editor-block-switcher__no-switcher-icon,
.block-editor-block-switcher__toggle {
  position: relative;
}

.components-button.block-editor-block-switcher__toggle,
.components-button.block-editor-block-switcher__no-switcher-icon {
  margin: 0;
  display: block;
  height: 48px;
}
.components-button.block-editor-block-switcher__toggle .block-editor-block-icon,
.components-button.block-editor-block-switcher__no-switcher-icon .block-editor-block-icon {
  margin: auto;
}

.components-button.block-editor-block-switcher__no-switcher-icon {
  display: flex;
}
.components-button.block-editor-block-switcher__no-switcher-icon .block-editor-block-icon {
  margin-right: auto;
  margin-left: auto;
  min-width: 24px !important;
}

.components-button.block-editor-block-switcher__no-switcher-icon[aria-disabled=true] {
  color: #1e1e1e;
}
.components-button.block-editor-block-switcher__no-switcher-icon[aria-disabled=true]:hover {
  color: #1e1e1e;
}

.components-popover.block-editor-block-switcher__popover .components-popover__content {
  min-width: 300px;
}

.block-editor-block-switcher__popover-preview-container {
  left: 0;
  position: absolute;
  top: -1px;
  width: 100%;
  bottom: 0;
  pointer-events: none;
}

.block-editor-block-switcher__popover-preview {
  overflow: hidden;
}
.block-editor-block-switcher__popover-preview .components-popover__content {
  width: 300px;
  border: 1px solid #1e1e1e;
  background: #fff;
  border-radius: 4px;
  outline: none;
  box-shadow: none;
  overflow: auto;
}
.block-editor-block-switcher__popover-preview .block-editor-block-switcher__preview {
  max-height: calc(500px - 32px);
  margin: 16px 0;
  padding: 0 16px;
  overflow: hidden;
}
.block-editor-block-switcher__popover-preview .block-editor-block-switcher__preview.is-pattern-list-preview {
  overflow: unset;
}

.block-editor-block-switcher__preview-title {
  margin-bottom: 12px;
  color: #757575;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 500;
}

.block-editor-block-contextual-toolbar .components-button.block-editor-block-switcher__no-switcher-icon {
  min-width: 36px;
}
.block-editor-block-contextual-toolbar .components-button.block-editor-block-switcher__no-switcher-icon,
.block-editor-block-contextual-toolbar .components-button.block-editor-block-switcher__toggle {
  height: 48px;
}
.block-editor-block-contextual-toolbar .components-button.block-editor-block-switcher__no-switcher-icon .block-editor-block-icon,
.block-editor-block-contextual-toolbar .components-button.block-editor-block-switcher__no-switcher-icon .block-editor-block-switcher__transform,
.block-editor-block-contextual-toolbar .components-button.block-editor-block-switcher__toggle .block-editor-block-icon,
.block-editor-block-contextual-toolbar .components-button.block-editor-block-switcher__toggle .block-editor-block-switcher__transform {
  width: 48px;
  height: 48px;
}
.block-editor-block-contextual-toolbar .components-button.block-editor-block-switcher__no-switcher-icon .block-editor-block-switcher__transform,
.block-editor-block-contextual-toolbar .components-button.block-editor-block-switcher__toggle .block-editor-block-switcher__transform {
  padding: 12px;
}

.block-editor-block-switcher__preview-patterns-container {
  padding-bottom: 16px;
}
.block-editor-block-switcher__preview-patterns-container .block-editor-block-switcher__preview-patterns-container-list__list-item {
  margin-top: 16px;
}
.block-editor-block-switcher__preview-patterns-container .block-editor-block-switcher__preview-patterns-container-list__list-item .block-editor-block-preview__container {
  cursor: pointer;
}
.block-editor-block-switcher__preview-patterns-container .block-editor-block-switcher__preview-patterns-container-list__list-item .block-editor-block-switcher__preview-patterns-container-list__item {
  height: 100%;
  border-radius: 2px;
  position: relative;
  border: 1px solid transparent;
}
@media not (prefers-reduced-motion) {
  .block-editor-block-switcher__preview-patterns-container .block-editor-block-switcher__preview-patterns-container-list__list-item .block-editor-block-switcher__preview-patterns-container-list__item {
    transition: all 0.05s ease-in-out;
  }
}
.block-editor-block-switcher__preview-patterns-container .block-editor-block-switcher__preview-patterns-container-list__list-item .block-editor-block-switcher__preview-patterns-container-list__item:hover, .block-editor-block-switcher__preview-patterns-container .block-editor-block-switcher__preview-patterns-container-list__list-item .block-editor-block-switcher__preview-patterns-container-list__item:focus {
  box-shadow: inset 0 0 0 1px #fff, 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
  outline: 2px solid transparent;
}
.block-editor-block-switcher__preview-patterns-container .block-editor-block-switcher__preview-patterns-container-list__list-item .block-editor-block-switcher__preview-patterns-container-list__item:hover {
  box-shadow: inset 0 0 0 1px #fff, 0 0 0 var(--wp-admin-border-width-focus) #1e1e1e;
}
.block-editor-block-switcher__preview-patterns-container .block-editor-block-switcher__preview-patterns-container-list__list-item .block-editor-block-switcher__preview-patterns-container-list__item .block-editor-block-switcher__preview-patterns-container-list__item-title {
  padding: 4px;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
}

.block-editor-block-switcher__no-transforms {
  color: #757575;
  padding: 6px 8px;
  margin: 0;
}

.block-editor-block-switcher__binding-indicator {
  display: block;
  padding: 8px;
}

.block-editor-block-types-list > [role=presentation] {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
}

.block-editor-block-pattern-setup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  border-radius: 2px;
}
.block-editor-block-pattern-setup.view-mode-grid {
  padding-top: 4px;
}
.block-editor-block-pattern-setup.view-mode-grid .block-editor-block-pattern-setup__toolbar {
  justify-content: center;
}
.block-editor-block-pattern-setup.view-mode-grid .block-editor-block-pattern-setup__container {
  column-gap: 24px;
  display: block;
  width: 100%;
  padding: 32px;
  padding-bottom: 0;
  padding-top: 0;
  column-count: 2;
}
@media (min-width: 1440px) {
  .block-editor-block-pattern-setup.view-mode-grid .block-editor-block-pattern-setup__container {
    column-count: 3;
  }
}
.block-editor-block-pattern-setup.view-mode-grid .block-editor-block-pattern-setup__container .block-editor-block-preview__container,
.block-editor-block-pattern-setup.view-mode-grid .block-editor-block-pattern-setup__container div[role=button] {
  cursor: pointer;
}
.block-editor-block-pattern-setup.view-mode-grid .block-editor-block-pattern-setup__container .block-editor-block-pattern-setup-list__item {
  scroll-margin: 5px 0;
}
.block-editor-block-pattern-setup.view-mode-grid .block-editor-block-pattern-setup__container .block-editor-block-pattern-setup-list__item:hover .block-editor-block-preview__container {
  box-shadow: 0 0 0 2px var(--wp-admin-theme-color);
}
.block-editor-block-pattern-setup.view-mode-grid .block-editor-block-pattern-setup__container .block-editor-block-pattern-setup-list__item:focus .block-editor-block-preview__container {
  box-shadow: 0 0 0 var(--wp-admin-border-width-focus) #fff, 0 0 0 calc(2 * var(--wp-admin-border-width-focus)) var(--wp-admin-theme-color);
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.block-editor-block-pattern-setup.view-mode-grid .block-editor-block-pattern-setup__container .block-editor-block-pattern-setup-list__item:hover .block-editor-block-pattern-setup-list__item-title, .block-editor-block-pattern-setup.view-mode-grid .block-editor-block-pattern-setup__container .block-editor-block-pattern-setup-list__item:focus .block-editor-block-pattern-setup-list__item-title {
  color: var(--wp-admin-theme-color);
}
.block-editor-block-pattern-setup.view-mode-grid .block-editor-block-pattern-setup__container .block-editor-block-pattern-setup-list__list-item {
  break-inside: avoid-column;
  margin-bottom: 24px;
}
.block-editor-block-pattern-setup.view-mode-grid .block-editor-block-pattern-setup__container .block-editor-block-pattern-setup-list__list-item .block-editor-block-pattern-setup-list__item-title {
  padding-top: 8px;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
}
.block-editor-block-pattern-setup.view-mode-grid .block-editor-block-pattern-setup__container .block-editor-block-pattern-setup-list__list-item .block-editor-block-preview__container {
  min-height: 100px;
  border-radius: 4px;
  border: 1px solid #ddd;
}
.block-editor-block-pattern-setup.view-mode-grid .block-editor-block-pattern-setup__container .block-editor-block-pattern-setup-list__list-item .block-editor-block-preview__content {
  width: 100%;
}
.block-editor-block-pattern-setup .block-editor-block-pattern-setup__toolbar {
  height: 64px;
  box-sizing: border-box;
  padding: 16px;
  width: 100%;
  text-align: left;
  margin: 0;
  color: #1e1e1e;
  position: absolute;
  bottom: 0;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ddd;
  align-self: stretch;
}
.block-editor-block-pattern-setup .block-editor-block-pattern-setup__toolbar .block-editor-block-pattern-setup__display-controls {
  display: flex;
}
.block-editor-block-pattern-setup .block-editor-block-pattern-setup__toolbar .block-editor-block-pattern-setup__navigation,
.block-editor-block-pattern-setup .block-editor-block-pattern-setup__toolbar .block-editor-block-pattern-setup__actions {
  width: calc(50% - 36px);
  display: flex;
}
.block-editor-block-pattern-setup .block-editor-block-pattern-setup__toolbar .block-editor-block-pattern-setup__actions {
  justify-content: flex-end;
}
.block-editor-block-pattern-setup .block-editor-block-pattern-setup__container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.block-editor-block-pattern-setup .block-editor-block-pattern-setup__container .carousel-container {
  overflow: hidden;
  position: relative;
  padding: 0;
  margin: 0;
  height: 100%;
  list-style: none;
  transform-style: preserve-3d;
}
.block-editor-block-pattern-setup .block-editor-block-pattern-setup__container .carousel-container * {
  box-sizing: border-box;
}
.block-editor-block-pattern-setup .block-editor-block-pattern-setup__container .carousel-container .pattern-slide {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin: auto;
  padding: 0;
  z-index: 100;
}
@media not (prefers-reduced-motion) {
  .block-editor-block-pattern-setup .block-editor-block-pattern-setup__container .carousel-container .pattern-slide {
    transition: transform 0.5s, z-index 0.5s;
  }
}
.block-editor-block-pattern-setup .block-editor-block-pattern-setup__container .carousel-container .pattern-slide.active-slide {
  opacity: 1;
  position: relative;
  z-index: 102;
}
.block-editor-block-pattern-setup .block-editor-block-pattern-setup__container .carousel-container .pattern-slide.previous-slide {
  transform: translateX(-100%);
  z-index: 101;
}
.block-editor-block-pattern-setup .block-editor-block-pattern-setup__container .carousel-container .pattern-slide.next-slide {
  transform: translateX(100%);
  z-index: 101;
}
.block-editor-block-pattern-setup .block-editor-block-pattern-setup__container .block-list-appender {
  display: none;
}

.block-editor-block-pattern-setup__carousel,
.block-editor-block-pattern-setup__grid {
  width: 100%;
}

.block-editor-block-variation-transforms:where(fieldset) {
  border: 0;
  padding: 0;
  margin: 0;
}

.block-editor-block-variation-transforms {
  box-sizing: border-box;
  padding: 0 16px 16px 52px;
  width: 100%;
}
.block-editor-block-variation-transforms .components-dropdown-menu__toggle {
  border: 1px solid #757575;
  border-radius: 2px;
  min-height: 30px;
  width: 100%;
  position: relative;
  text-align: left;
  justify-content: left;
  padding: 6px 12px;
}
.block-editor-block-variation-transforms .components-dropdown-menu__toggle.components-dropdown-menu__toggle {
  padding-right: 24px;
}
.block-editor-block-variation-transforms .components-dropdown-menu__toggle:focus:not(:disabled) {
  border-color: var(--wp-admin-theme-color);
  box-shadow: 0 0 0 calc(var(--wp-admin-border-width-focus) - 1px) var(--wp-admin-theme-color);
}
.block-editor-block-variation-transforms .components-dropdown-menu__toggle svg {
  height: 100%;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.block-editor-block-variation-transforms__popover .components-popover__content {
  min-width: 230px;
}

.components-border-radius-control__header {
  height: 16px;
  margin-bottom: 12px;
}

.components-border-radius-control {
  border: 0;
  padding: 0;
  margin: 0;
  margin-bottom: 12px;
}
.components-border-radius-control legend {
  margin-bottom: 0;
}
.components-border-radius-control .components-border-radius-control__input-controls-wrapper {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-right: 12px;
}
.components-border-radius-control .components-border-radius-control__linked-button {
  display: flex;
  justify-content: center;
}
.components-border-radius-control .components-border-radius-control__linked-button svg {
  margin-right: 0;
}

.components-border-radius-control__custom-select-control,
.components-border-radius-control__range-control {
  flex: 1;
}

.components-border-radius-control__icon {
  flex: 0 0 auto;
}

.block-editor-color-gradient-control .block-editor-color-gradient-control__color-indicator {
  margin-bottom: 12px;
}

.block-editor-color-gradient-control__fieldset {
  border: 0;
  padding: 0;
  margin: 0;
  min-width: 0;
}

.block-editor-panel-color-gradient-settings.block-editor-panel-color-gradient-settings, .block-editor-panel-color-gradient-settings.block-editor-panel-color-gradient-settings > div:not(:first-of-type) {
  display: block;
}

@media screen and (min-width: 782px) {
  .block-editor-panel-color-gradient-settings .components-circular-option-picker__swatches {
    display: grid;
    grid-template-columns: repeat(6, 28px);
  }
}
.block-editor-block-inspector .block-editor-panel-color-gradient-settings .components-base-control {
  margin-bottom: inherit;
}

.block-editor-panel-color-gradient-settings__dropdown-content .block-editor-color-gradient-control__panel {
  width: 260px;
  padding: 16px;
}

.block-editor-panel-color-gradient-settings__color-indicator {
  background: linear-gradient(-45deg, transparent 48%, #ddd 48%, #ddd 52%, transparent 52%);
}

/**
* The following styles replicate the separated border of the
* \`ItemGroup\` component but allows for hidden items. This is because
* to maintain the order of \`ToolsPanel\` controls, each \`ToolsPanelItem\`
* must at least render a placeholder which would otherwise interfere
* with the \`:last-child\` styles.
*/
.block-editor-tools-panel-color-gradient-settings__item {
  padding: 0;
  max-width: 100%;
  position: relative;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.block-editor-tools-panel-color-gradient-settings__item:nth-child(1 of .block-editor-tools-panel-color-gradient-settings__item) {
  margin-top: 24px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top: 1px solid #ddd;
}
.block-editor-tools-panel-color-gradient-settings__item:nth-last-child(1 of .block-editor-tools-panel-color-gradient-settings__item) {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
}
.block-editor-tools-panel-color-gradient-settings__item > div,
.block-editor-tools-panel-color-gradient-settings__item > div > button {
  border-radius: inherit;
}

.block-editor-tools-panel-color-gradient-settings__dropdown {
  display: block;
  padding: 0;
}
.block-editor-tools-panel-color-gradient-settings__dropdown > button {
  height: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: left;
}
.block-editor-tools-panel-color-gradient-settings__dropdown > button.is-open {
  background: #f0f0f0;
  color: var(--wp-admin-theme-color);
}
.block-editor-tools-panel-color-gradient-settings__dropdown .block-editor-panel-color-gradient-settings__color-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 44px);
}

.block-editor-panel-color-gradient-settings__dropdown {
  width: 100%;
}
.block-editor-panel-color-gradient-settings__dropdown .component-color-indicator {
  flex-shrink: 0;
}

.block-editor-panel-color-gradient-settings__reset {
  position: absolute;
  right: 0;
  top: 8px;
  margin: auto 8px auto;
  opacity: 0;
}
@media not (prefers-reduced-motion) {
  .block-editor-panel-color-gradient-settings__reset {
    transition: opacity 0.1s ease-in-out;
  }
}
.block-editor-panel-color-gradient-settings__reset.block-editor-panel-color-gradient-settings__reset {
  border-radius: 2px;
}
.block-editor-panel-color-gradient-settings__dropdown:hover + .block-editor-panel-color-gradient-settings__reset, .block-editor-panel-color-gradient-settings__reset:focus, .block-editor-panel-color-gradient-settings__reset:hover {
  opacity: 1;
}
@media (hover: none) {
  .block-editor-panel-color-gradient-settings__reset {
    opacity: 1;
  }
}

.block-editor-date-format-picker {
  margin: 0 0 16px;
  padding: 0;
  border: none;
}

.block-editor-date-format-picker__custom-format-select-control__custom-option {
  border-top: 1px solid #ddd;
}

.block-editor-duotone-control__popover.components-popover > .components-popover__content {
  padding: 8px;
  width: 260px;
}
.block-editor-duotone-control__popover.components-popover .components-menu-group__label {
  padding: 0;
}
.block-editor-duotone-control__popover.components-popover .components-circular-option-picker__swatches {
  display: grid;
  grid-template-columns: repeat(6, 28px);
  gap: 12px;
  justify-content: space-between;
}

.block-editor-duotone-control__unset-indicator {
  background: linear-gradient(-45deg, transparent 48%, #ddd 48%, #ddd 52%, transparent 52%);
}

.components-font-appearance-control [role=option] {
  color: #1e1e1e;
  text-transform: capitalize;
}

.block-editor-font-family-control:not(.is-next-has-no-margin-bottom) {
  margin-bottom: 8px;
}

.block-editor-global-styles__toggle-icon {
  fill: currentColor;
}

.block-editor-global-styles__shadow-popover-container {
  width: 230px;
}

.block-editor-global-styles__shadow__list {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  padding-bottom: 8px;
}

.block-editor-global-styles__clear-shadow {
  text-align: right;
}

.block-editor-global-styles-filters-panel__dropdown,
.block-editor-global-styles__shadow-dropdown {
  display: block;
  padding: 0;
  position: relative;
  border: 1px solid #ddd;
  border-radius: 2px;
}

.block-editor-global-styles-filters-panel__dropdown-toggle,
.block-editor-global-styles__shadow-dropdown-toggle {
  width: 100%;
  padding: 8px;
}
.block-editor-global-styles-filters-panel__dropdown-toggle.is-open,
.block-editor-global-styles__shadow-dropdown-toggle.is-open {
  background-color: #f0f0f0;
}

.block-editor-global-styles__shadow-editor__remove-button {
  position: absolute;
  right: 0;
  top: 8px;
  margin: auto 8px auto;
  opacity: 0;
}
@media not (prefers-reduced-motion) {
  .block-editor-global-styles__shadow-editor__remove-button {
    transition: opacity 0.1s ease-in-out;
  }
}
.block-editor-global-styles__shadow-dropdown:hover .block-editor-global-styles__shadow-editor__remove-button, .block-editor-global-styles__shadow-editor__remove-button:focus, .block-editor-global-styles__shadow-editor__remove-button:hover {
  opacity: 1;
}
@media (hover: none) {
  .block-editor-global-styles__shadow-editor__remove-button {
    opacity: 1;
  }
}

.block-editor-global-styles__shadow-indicator {
  appearance: none;
  background: none;
  color: #2f2f2f;
  border: #e0e0e0 1px solid;
  border-radius: 2px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  padding: 0;
  height: 26px;
  width: 26px;
  box-sizing: border-box;
  transform: scale(1);
  will-change: transform;
}
@media not (prefers-reduced-motion) {
  .block-editor-global-styles__shadow-indicator {
    transition: transform 0.1s ease;
  }
}
.block-editor-global-styles__shadow-indicator:focus {
  border: 2px solid #757575;
}
.block-editor-global-styles__shadow-indicator:hover {
  transform: scale(1.2);
}
.block-editor-global-styles__shadow-indicator.unset {
  background: linear-gradient(-45deg, transparent 48%, #ddd 48%, #ddd 52%, transparent 52%);
}

.block-editor-global-styles-advanced-panel__custom-css-input textarea {
  font-family: Menlo, Consolas, monaco, monospace;
  /*rtl:ignore*/
  direction: ltr;
}

.block-editor-panel-duotone-settings__reset {
  position: absolute;
  right: 0;
  top: 8px;
  margin: auto 8px auto;
  opacity: 0;
}
@media not (prefers-reduced-motion) {
  .block-editor-panel-duotone-settings__reset {
    transition: opacity 0.1s ease-in-out;
  }
}
.block-editor-global-styles-filters-panel__dropdown:hover .block-editor-panel-duotone-settings__reset, .block-editor-panel-duotone-settings__reset:focus, .block-editor-panel-duotone-settings__reset:hover {
  opacity: 1;
}
@media (hover: none) {
  .block-editor-panel-duotone-settings__reset {
    opacity: 1;
  }
}

.block-editor-grid-visualizer.block-editor-grid-visualizer.block-editor-grid-visualizer {
  z-index: 30;
}
.block-editor-grid-visualizer.block-editor-grid-visualizer.block-editor-grid-visualizer .components-popover__content * {
  pointer-events: none;
}
.block-editor-grid-visualizer.block-editor-grid-visualizer.block-editor-grid-visualizer.is-dropping-allowed .block-editor-grid-visualizer__drop-zone {
  pointer-events: all;
}
.block-editor-grid-visualizer.block-editor-grid-visualizer.block-editor-grid-visualizer .block-editor-inserter * {
  pointer-events: auto;
}

.block-editor-grid-visualizer__grid {
  display: grid;
  position: absolute;
}

.block-editor-grid-visualizer__cell {
  display: grid;
  position: relative;
}
.block-editor-grid-visualizer__cell .block-editor-inserter {
  color: inherit;
  z-index: 32;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
.block-editor-grid-visualizer__cell .block-editor-inserter .block-editor-grid-visualizer__appender {
  box-shadow: inset 0 0 0 1px color-mix(in srgb, currentColor 20%, rgba(0, 0, 0, 0));
  color: inherit;
  overflow: hidden;
  height: 100%;
  width: 100%;
  padding: 0 !important;
  opacity: 0;
}
.block-editor-grid-visualizer__cell.is-highlighted .block-editor-inserter,
.block-editor-grid-visualizer__cell.is-highlighted .block-editor-grid-visualizer__drop-zone {
  background: var(--wp-admin-theme-color);
}
.block-editor-grid-visualizer__cell:hover .block-editor-grid-visualizer__appender,
.block-editor-grid-visualizer__cell .block-editor-grid-visualizer__appender:focus {
  opacity: 1;
  background-color: color-mix(in srgb, currentColor 20%, rgba(0, 0, 0, 0));
}

.block-editor-grid-visualizer__drop-zone {
  background: rgba(204, 204, 204, 0.1);
  width: 100%;
  height: 100%;
  grid-column: 1;
  grid-row: 1;
  min-width: 8px;
  min-height: 8px;
}

.block-editor-grid-item-resizer.block-editor-grid-item-resizer.block-editor-grid-item-resizer {
  z-index: 30;
}
.block-editor-grid-item-resizer.block-editor-grid-item-resizer.block-editor-grid-item-resizer .components-popover__content * {
  pointer-events: none;
}

.block-editor-grid-item-resizer__box {
  border: 1px solid var(--wp-admin-theme-color);
}
.block-editor-grid-item-resizer__box .components-resizable-box__handle.components-resizable-box__handle.components-resizable-box__handle {
  pointer-events: all;
}

.block-editor-grid-item-mover__move-button-container {
  display: flex;
  padding: 0;
  border: none;
  justify-content: center;
}
.block-editor-grid-item-mover__move-button-container .block-editor-grid-item-mover-button {
  width: 24px;
  min-width: 0 !important;
  padding-left: 0;
  padding-right: 0;
}
.block-editor-grid-item-mover__move-button-container .block-editor-grid-item-mover-button svg {
  min-width: 24px;
}
.block-editor-grid-item-mover__move-button-container .block-editor-grid-item-mover-button::before {
  content: "";
  position: absolute;
  display: block;
  border-radius: 2px;
  height: 32px;
  left: 8px;
  right: 8px;
  z-index: -1;
}
@media not (prefers-reduced-motion) {
  .block-editor-grid-item-mover__move-button-container .block-editor-grid-item-mover-button::before {
    animation: components-button__appear-animation 0.1s ease;
    animation-fill-mode: forwards;
  }
}
.block-editor-grid-item-mover__move-button-container .block-editor-grid-item-mover-button:focus, .block-editor-grid-item-mover__move-button-container .block-editor-grid-item-mover-button:focus:enabled, .block-editor-grid-item-mover__move-button-container .block-editor-grid-item-mover-button:focus::before {
  box-shadow: none;
  outline: none;
}
.block-editor-grid-item-mover__move-button-container .block-editor-grid-item-mover-button:focus-visible::before {
  box-shadow: inset 0 0 0 1px #fff, 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
  outline: 2px solid transparent;
}

.block-editor-grid-item-mover__move-vertical-button-container {
  display: flex;
  position: relative;
}
@media (min-width: 600px) {
  .block-editor-grid-item-mover__move-vertical-button-container {
    flex-direction: column;
    justify-content: space-around;
  }
  .block-editor-grid-item-mover__move-vertical-button-container > .block-editor-grid-item-mover-button.block-editor-grid-item-mover-button {
    height: 20px !important;
    width: 100%;
    min-width: 0 !important;
  }
  .block-editor-grid-item-mover__move-vertical-button-container > .block-editor-grid-item-mover-button.block-editor-grid-item-mover-button::before {
    height: calc(100% - 4px);
  }
  .block-editor-grid-item-mover__move-vertical-button-container .block-editor-grid-item-mover-button.is-up-button svg,
.block-editor-grid-item-mover__move-vertical-button-container .block-editor-grid-item-mover-button.is-down-button svg {
    flex-shrink: 0;
    height: 20px;
  }
}

@media (min-width: 600px) {
  .editor-collapsible-block-toolbar .block-editor-grid-item-mover__move-vertical-button-container {
    height: 40px;
    position: relative;
    top: -4px;
  }
}

.show-icon-labels .block-editor-grid-item-mover__move-horizontal-button-container {
  position: relative;
}
@media (min-width: 600px) {
  .show-icon-labels .block-editor-grid-item-mover__move-horizontal-button-container::before {
    content: "";
    height: 100%;
    width: 1px;
    background: #e0e0e0;
    position: absolute;
    top: 0;
  }
}
@media (min-width: 782px) {
  .show-icon-labels .block-editor-grid-item-mover__move-horizontal-button-container::before {
    background: #1e1e1e;
  }
}
.show-icon-labels .block-editor-grid-item-mover__move-horizontal-button-container.is-left {
  padding-right: 6px;
}
.show-icon-labels .block-editor-grid-item-mover__move-horizontal-button-container.is-left::before {
  right: 0;
}
.show-icon-labels .block-editor-grid-item-mover__move-horizontal-button-container.is-right {
  padding-left: 6px;
}
.show-icon-labels .block-editor-grid-item-mover__move-horizontal-button-container.is-right::before {
  left: 0;
}
@media (min-width: 600px) {
  .show-icon-labels .block-editor-grid-item-mover__move-vertical-button-container::before {
    content: "";
    height: 1px;
    width: 100%;
    background: #e0e0e0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0);
    margin-top: -0.5px;
  }
}
@media (min-width: 782px) {
  .show-icon-labels .block-editor-grid-item-mover__move-vertical-button-container::before {
    background: #1e1e1e;
  }
}
.show-icon-labels .block-editor-grid-item-mover-button {
  white-space: nowrap;
}
.show-icon-labels .editor-collapsible-block-toolbar .block-editor-grid-item-mover__move-horizontal-button-container::before {
  height: 24px;
  background: #ddd;
  top: 4px;
}
.show-icon-labels .editor-collapsible-block-toolbar .block-editor-grid-item-mover__move-vertical-button-container::before {
  background: #ddd;
  width: calc(100% - 24px);
}

.block-editor-height-control {
  border: 0;
  margin: 0;
  padding: 0;
}

.block-editor-iframe__container {
  width: 100%;
  height: 100%;
}

.block-editor-iframe__scale-container {
  height: 100%;
}

.block-editor-iframe__scale-container.is-zoomed-out {
  width: var(--wp-block-editor-iframe-zoom-out-scale-container-width, 100vw);
  position: absolute;
  right: 0;
}

.block-editor-block-types-list__list-item {
  display: block;
  width: 33.33%;
  padding: 0;
  margin: 0;
}
.block-editor-block-types-list__list-item.is-synced .components-button.block-editor-block-types-list__item:not(:disabled) .block-editor-block-icon.has-colors {
  color: var(--wp-block-synced-color);
}
.block-editor-block-types-list__list-item.is-synced .components-button.block-editor-block-types-list__item:not(:disabled):hover .block-editor-block-types-list__item-title {
  color: var(--wp-block-synced-color) !important;
  filter: brightness(0.95);
}
.block-editor-block-types-list__list-item.is-synced .components-button.block-editor-block-types-list__item:not(:disabled):hover svg {
  color: var(--wp-block-synced-color) !important;
}
.block-editor-block-types-list__list-item.is-synced .components-button.block-editor-block-types-list__item:not(:disabled)::after {
  background: var(--wp-block-synced-color);
}

.components-button.block-editor-block-types-list__item {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 13px;
  color: #1e1e1e;
  padding: 8px;
  align-items: stretch;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  word-break: break-word;
  position: relative;
  height: auto;
}
@media not (prefers-reduced-motion) {
  .components-button.block-editor-block-types-list__item {
    transition: all 0.05s ease-in-out;
  }
}
.components-button.block-editor-block-types-list__item:disabled, .components-button.block-editor-block-types-list__item[aria-disabled=true] {
  opacity: 0.6;
  cursor: default;
}
.components-button.block-editor-block-types-list__item:not(:disabled, [aria-disabled=true]):hover .block-editor-block-types-list__item-title {
  color: var(--wp-admin-theme-color) !important;
  filter: brightness(0.95);
}
.components-button.block-editor-block-types-list__item:not(:disabled, [aria-disabled=true]):hover svg {
  color: var(--wp-admin-theme-color) !important;
}
.components-button.block-editor-block-types-list__item:not(:disabled, [aria-disabled=true]):hover::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 2px;
  opacity: 0.04;
  background: var(--wp-admin-theme-color);
  pointer-events: none;
}
.components-button.block-editor-block-types-list__item:not(:disabled, [aria-disabled=true]).is-active {
  color: #fff;
  background: #1e1e1e;
  outline: 2px solid transparent;
  outline-offset: -2px;
}
.components-button.block-editor-block-types-list__item:not(:disabled):focus {
  box-shadow: inset 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
}

.block-editor-block-types-list__item-icon {
  padding: 12px 20px;
  color: #1e1e1e;
}
@media not (prefers-reduced-motion) {
  .block-editor-block-types-list__item-icon {
    transition: all 0.05s ease-in-out;
  }
}
.block-editor-block-types-list__item-icon .block-editor-block-icon {
  margin-left: auto;
  margin-right: auto;
}
@media not (prefers-reduced-motion) {
  .block-editor-block-types-list__item-icon svg {
    transition: all 0.15s ease-out;
  }
}
.block-editor-block-types-list__list-item[draggable=true] .block-editor-block-types-list__item-icon {
  cursor: grab;
}

.block-editor-block-types-list__item-title {
  padding: 4px 2px 8px;
  font-size: 12px;
  hyphens: auto;
}

.block-editor-block-inspector__tabs [role=tablist] {
  width: 100%;
}

.block-editor-inspector-popover-header {
  margin-bottom: 16px;
}

.items-justified-left {
  justify-content: flex-start;
}

.items-justified-center {
  justify-content: center;
}

.items-justified-right {
  justify-content: flex-end;
}

.items-justified-space-between {
  justify-content: space-between;
}

@keyframes loadingpulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.block-editor-link-control {
  position: relative;
  min-width: 350px;
}
.components-popover__content .block-editor-link-control {
  min-width: auto;
  width: 90vw;
  max-width: 350px;
}
.show-icon-labels .block-editor-link-control .components-button.has-icon svg {
  display: none;
}
.show-icon-labels .block-editor-link-control .components-button.has-icon::before {
  content: attr(aria-label);
}
.show-icon-labels .block-editor-link-control .block-editor-link-control__search-item-top {
  gap: 4px;
  flex-wrap: wrap;
}
.show-icon-labels .block-editor-link-control .block-editor-link-control__search-item-top .components-button.has-icon {
  width: auto;
  padding: 4px;
}
.show-icon-labels .block-editor-link-control .is-preview .block-editor-link-control__search-item-header {
  min-width: 100%;
  margin-right: 0;
}

.block-editor-link-control__search-input-wrapper {
  margin-bottom: 8px;
  position: relative;
}

.block-editor-link-control__search-input-container,
.block-editor-link-control__search-input-wrapper {
  position: relative;
}

.block-editor-link-control__field {
  margin: 16px;
}
.block-editor-link-control__field .components-base-control__label {
  color: #1e1e1e;
}

.block-editor-link-control__search-error {
  margin: -8px 16px 16px;
}

.block-editor-link-control__search-actions {
  padding: 8px 16px 16px;
}

.block-editor-link-control__search-results-wrapper {
  position: relative;
}
.block-editor-link-control__search-results-wrapper::before, .block-editor-link-control__search-results-wrapper::after {
  content: "";
  position: absolute;
  left: -1px;
  right: 16px;
  display: block;
  pointer-events: none;
  z-index: 100;
}
.block-editor-link-control__search-results-wrapper::before {
  height: 8px;
  top: 0;
  bottom: auto;
}
.block-editor-link-control__search-results-wrapper::after {
  height: 16px;
  bottom: 0;
  top: auto;
}

.block-editor-link-control__search-results {
  margin-top: -16px;
  padding: 8px;
  max-height: 200px;
  overflow-y: auto;
}
.block-editor-link-control__search-results.is-loading {
  opacity: 0.2;
}

.block-editor-link-control__search-item.components-button.components-menu-item__button {
  height: auto;
  text-align: left;
}
.block-editor-link-control__search-item .components-menu-item__item {
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  width: 100%;
}
.block-editor-link-control__search-item .components-menu-item__item mark {
  font-weight: 600;
  color: inherit;
  background-color: transparent;
}
.block-editor-link-control__search-item .components-menu-item__shortcut {
  color: #757575;
  text-transform: capitalize;
  white-space: nowrap;
}
.block-editor-link-control__search-item[aria-selected] {
  background: #f0f0f0;
}
.block-editor-link-control__search-item.is-current {
  flex-direction: column;
  background: transparent;
  border: 0;
  width: 100%;
  cursor: default;
  padding: 16px;
}
.block-editor-link-control__search-item .block-editor-link-control__search-item-header {
  display: block;
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
  gap: 8px;
  white-space: pre-wrap;
  overflow-wrap: break-word;
}
.block-editor-link-control__search-item .block-editor-link-control__search-item-header .block-editor-link-control__search-item-info {
  color: #757575;
  line-height: 1.1;
  font-size: 12px;
  word-break: break-all;
}
.block-editor-link-control__search-item.is-preview .block-editor-link-control__search-item-header {
  display: flex;
  flex: 1;
}
.block-editor-link-control__search-item.is-error .block-editor-link-control__search-item-header {
  align-items: center;
}
.block-editor-link-control__search-item.is-url-title .block-editor-link-control__search-item-title {
  word-break: break-all;
}
.block-editor-link-control__search-item .block-editor-link-control__search-item-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
}
.block-editor-link-control__search-item .block-editor-link-control__search-item-header .block-editor-link-control__search-item-icon {
  background-color: #f0f0f0;
  width: 32px;
  height: 32px;
  border-radius: 2px;
}
.block-editor-link-control__search-item .block-editor-link-control__search-item-icon {
  position: relative;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.block-editor-link-control__search-item .block-editor-link-control__search-item-icon img {
  width: 16px;
}
.block-editor-link-control__search-item.is-error .block-editor-link-control__search-item-icon {
  top: 0;
  width: 32px;
  max-height: 32px;
}
.block-editor-link-control__search-item .block-editor-link-control__search-item-title {
  line-height: 1.1;
}
.block-editor-link-control__search-item .block-editor-link-control__search-item-title:focus {
  box-shadow: none;
}
.block-editor-link-control__search-item .block-editor-link-control__search-item-title:focus-visible {
  box-shadow: inset 0 0 0 1px #fff, 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
  outline: 2px solid transparent;
  text-decoration: none;
}
.block-editor-link-control__search-item .block-editor-link-control__search-item-title mark {
  font-weight: 600;
  color: inherit;
  background-color: transparent;
}
.block-editor-link-control__search-item .block-editor-link-control__search-item-title span {
  font-weight: normal;
}
.block-editor-link-control__search-item .block-editor-link-control__search-item-title .components-external-link__icon {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.block-editor-link-control__search-item-top {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
}

.block-editor-link-control__search-item.is-fetching .block-editor-link-control__search-item-icon svg,
.block-editor-link-control__search-item.is-fetching .block-editor-link-control__search-item-icon img {
  opacity: 0;
}
.block-editor-link-control__search-item.is-fetching .block-editor-link-control__search-item-icon::before {
  content: "";
  display: block;
  background-color: #f0f0f0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 100%;
}
@media not (prefers-reduced-motion) {
  .block-editor-link-control__search-item.is-fetching .block-editor-link-control__search-item-icon::before {
    animation: loadingpulse 1s linear infinite;
    animation-delay: 0.5s;
  }
}

.block-editor-link-control__loading {
  margin: 16px;
  display: flex;
  align-items: center;
}
.block-editor-link-control__loading .components-spinner {
  margin-top: 0;
}

.components-button + .block-editor-link-control__search-create {
  overflow: visible;
  padding: 12px 16px;
}
.components-button + .block-editor-link-control__search-create::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 0;
  display: block;
  width: 100%;
}

.block-editor-link-control__search-create {
  align-items: center;
}
.block-editor-link-control__search-create .block-editor-link-control__search-item-title {
  margin-bottom: 0;
}
.block-editor-link-control__search-create .block-editor-link-control__search-item-icon {
  top: 0;
}

.block-editor-link-control__drawer-inner {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  position: relative;
}

.block-editor-link-control__settings {
  border: 0;
  padding: 0;
  margin: 0;
}

.block-editor-link-control__setting {
  margin-bottom: 0;
  flex: 1;
  padding: 8px 0 8px 24px;
}
.block-editor-link-control__setting .components-base-control__field {
  display: flex;
}
.block-editor-link-control__setting .components-base-control__field .components-checkbox-control__label {
  color: #1e1e1e;
}
.block-editor-link-control__setting input {
  margin-left: 0;
}
.is-preview .block-editor-link-control__setting {
  padding: 20px 8px 8px 0;
}

.block-editor-link-control__tools {
  padding: 8px 8px 0 8px;
  margin-top: -16px;
}
.block-editor-link-control__tools .components-button.block-editor-link-control__drawer-toggle {
  padding-left: 0;
  gap: 0;
}
.block-editor-link-control__tools .components-button.block-editor-link-control__drawer-toggle[aria-expanded=true] {
  color: #1e1e1e;
}
.block-editor-link-control__tools .components-button.block-editor-link-control__drawer-toggle[aria-expanded=true] svg {
  visibility: visible;
  transform: rotate(90deg);
}
@media not (prefers-reduced-motion) {
  .block-editor-link-control__tools .components-button.block-editor-link-control__drawer-toggle[aria-expanded=true] svg {
    transition: transform 0.1s ease;
  }
}
.block-editor-link-control__tools .components-button.block-editor-link-control__drawer-toggle[aria-expanded=false] svg {
  visibility: visible;
  transform: rotate(0deg);
}
@media not (prefers-reduced-motion) {
  .block-editor-link-control__tools .components-button.block-editor-link-control__drawer-toggle[aria-expanded=false] svg {
    transition: transform 0.1s ease;
  }
}

.block-editor-link-control .block-editor-link-control__search-input .components-spinner {
  display: block;
}
.block-editor-link-control .block-editor-link-control__search-input .components-spinner.components-spinner {
  position: absolute;
  left: auto;
  bottom: auto;
  top: calc(50% - 16px / 2);
  right: 40px;
}

.block-editor-link-control .block-editor-link-control__search-input-wrapper.has-actions .components-spinner {
  top: calc(50% + 16px / 4);
  right: 12px;
}

.block-editor-list-view-tree {
  width: 100%;
  border-collapse: collapse;
  padding: 0;
  margin: 0;
}
.components-modal__content .block-editor-list-view-tree {
  margin: -12px -6px 0;
  width: calc(100% + 12px);
}
.block-editor-list-view-tree.is-dragging tbody {
  pointer-events: none;
}

.block-editor-list-view-leaf {
  position: relative;
  transform: translateY(0);
}
.block-editor-list-view-leaf.is-draggable, .block-editor-list-view-leaf.is-draggable .block-editor-list-view-block-contents {
  cursor: grab;
}
.block-editor-list-view-leaf .block-editor-list-view-block-select-button[aria-expanded=true] {
  color: inherit;
}
.block-editor-list-view-leaf .block-editor-list-view-block-select-button:hover {
  color: var(--wp-admin-theme-color);
}
.block-editor-list-view-leaf .block-editor-list-view-block-select-button svg {
  fill: currentColor;
}
@media (forced-colors: active) {
  .block-editor-list-view-leaf .block-editor-list-view-block-select-button svg {
    fill: CanvasText;
  }
}
.is-dragging-components-draggable .block-editor-list-view-leaf:not(.is-selected) .block-editor-list-view-block-select-button:hover {
  color: inherit;
}
.block-editor-list-view-leaf.is-selected td {
  background: var(--wp-admin-theme-color);
}
.block-editor-list-view-leaf.is-selected.is-synced td {
  background: var(--wp-block-synced-color);
}
.block-editor-list-view-leaf.is-synced:not(.is-selected) .block-editor-list-view-block-contents:hover, .block-editor-list-view-leaf.is-synced:not(.is-selected) .block-editor-list-view-block-contents:focus,
.block-editor-list-view-leaf.is-synced:not(.is-selected) .block-editor-list-view-block-contents .block-editor-block-icon {
  color: var(--wp-block-synced-color);
}
.block-editor-list-view-leaf.is-synced:not(.is-selected) .block-editor-list-view-block-contents:focus::after {
  box-shadow: inset 0 0 0 var(--wp-admin-border-width-focus) var(--wp-block-synced-color);
}
.block-editor-list-view-leaf.is-selected .block-editor-list-view-block-contents, .block-editor-list-view-leaf.is-selected .components-button.has-icon {
  color: #fff;
}
.block-editor-list-view-leaf.is-selected .block-editor-list-view-block-contents:focus::after {
  box-shadow: inset 0 0 0 1px #fff, 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
}
.block-editor-list-view-leaf.is-selected.is-synced .block-editor-list-view-block-contents:focus::after {
  box-shadow: inset 0 0 0 1px #fff, 0 0 0 var(--wp-admin-border-width-focus) var(--wp-block-synced-color);
}
.block-editor-list-view-leaf.is-selected .block-editor-list-view-block__menu:focus {
  box-shadow: inset 0 0 0 var(--wp-admin-border-width-focus) #fff;
}
.block-editor-list-view-leaf.is-first-selected td:first-child {
  border-top-left-radius: 2px;
}
.block-editor-list-view-leaf.is-first-selected td:last-child {
  border-top-right-radius: 2px;
}
.block-editor-list-view-leaf.is-last-selected td:first-child {
  border-bottom-left-radius: 2px;
}
.block-editor-list-view-leaf.is-last-selected td:last-child {
  border-bottom-right-radius: 2px;
}
.block-editor-list-view-leaf.is-branch-selected:not(.is-selected):not(.is-synced-branch) {
  background: rgba(var(--wp-admin-theme-color--rgb), 0.04);
}
.block-editor-list-view-leaf.is-synced-branch.is-branch-selected {
  background: rgba(var(--wp-block-synced-color--rgb), 0.04);
}
.block-editor-list-view-leaf.is-branch-selected.is-first-selected td:first-child {
  border-top-left-radius: 2px;
}
.block-editor-list-view-leaf.is-branch-selected.is-first-selected td:last-child {
  border-top-right-radius: 2px;
}
.block-editor-list-view-leaf[data-expanded=false].is-branch-selected.is-first-selected td:first-child {
  border-top-left-radius: 2px;
}
.block-editor-list-view-leaf[data-expanded=false].is-branch-selected.is-first-selected td:last-child {
  border-top-right-radius: 2px;
}
.block-editor-list-view-leaf[data-expanded=false].is-branch-selected.is-last-selected td:first-child {
  border-bottom-left-radius: 2px;
}
.block-editor-list-view-leaf[data-expanded=false].is-branch-selected.is-last-selected td:last-child {
  border-bottom-right-radius: 2px;
}
.block-editor-list-view-leaf.is-branch-selected:not(.is-selected) td {
  border-radius: 0;
}
.block-editor-list-view-leaf.is-displacement-normal {
  transform: translateY(0);
}
@media not (prefers-reduced-motion) {
  .block-editor-list-view-leaf.is-displacement-normal {
    transition: transform 0.2s;
  }
}
.block-editor-list-view-leaf.is-displacement-up {
  transform: translateY(-32px);
}
@media not (prefers-reduced-motion) {
  .block-editor-list-view-leaf.is-displacement-up {
    transition: transform 0.2s;
  }
}
.block-editor-list-view-leaf.is-displacement-down {
  transform: translateY(32px);
}
@media not (prefers-reduced-motion) {
  .block-editor-list-view-leaf.is-displacement-down {
    transition: transform 0.2s;
  }
}
.block-editor-list-view-leaf.is-after-dragged-blocks {
  transform: translateY(calc(var(--wp-admin--list-view-dragged-items-height, 32px) * -1));
}
@media not (prefers-reduced-motion) {
  .block-editor-list-view-leaf.is-after-dragged-blocks {
    transition: transform 0.2s;
  }
}
.block-editor-list-view-leaf.is-after-dragged-blocks.is-displacement-up {
  transform: translateY(calc(-32px + var(--wp-admin--list-view-dragged-items-height, 32px) * -1));
}
@media not (prefers-reduced-motion) {
  .block-editor-list-view-leaf.is-after-dragged-blocks.is-displacement-up {
    transition: transform 0.2s;
  }
}
.block-editor-list-view-leaf.is-after-dragged-blocks.is-displacement-down {
  transform: translateY(calc(32px + var(--wp-admin--list-view-dragged-items-height, 32px) * -1));
}
@media not (prefers-reduced-motion) {
  .block-editor-list-view-leaf.is-after-dragged-blocks.is-displacement-down {
    transition: transform 0.2s;
  }
}
.block-editor-list-view-leaf.is-dragging {
  opacity: 0;
  left: 0;
  pointer-events: none;
  z-index: -9999;
}
.block-editor-list-view-leaf .block-editor-list-view-block-contents {
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
  padding: 6px 4px 6px 0;
  text-align: left;
  position: relative;
  white-space: nowrap;
  border-radius: 2px;
  box-sizing: border-box;
  color: inherit;
  font-family: inherit;
  font-size: 13px;
  font-weight: 400;
  margin: 0;
  text-decoration: none;
}
@media not (prefers-reduced-motion) {
  .block-editor-list-view-leaf .block-editor-list-view-block-contents {
    transition: box-shadow 0.1s linear;
  }
}
.components-modal__content .block-editor-list-view-leaf .block-editor-list-view-block-contents {
  padding-left: 0;
  padding-right: 0;
}
.block-editor-list-view-leaf.is-nesting .block-editor-list-view-block-contents,
.block-editor-list-view-leaf .block-editor-list-view-block-contents:focus {
  box-shadow: none;
}
.block-editor-list-view-leaf.is-nesting .block-editor-list-view-block-contents::after,
.block-editor-list-view-leaf .block-editor-list-view-block-contents:focus::after {
  content: "";
  position: absolute;
  top: 0;
  right: -29px;
  bottom: 0;
  left: 0;
  border-radius: inherit;
  box-shadow: inset 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
  z-index: 2;
  pointer-events: none;
}
.block-editor-list-view-leaf.has-single-cell .block-editor-list-view-block-contents:focus::after {
  right: 0;
}
.block-editor-list-view-leaf.is-nesting .block-editor-list-view__menu,
.block-editor-list-view-leaf .block-editor-list-view-block__menu:focus {
  box-shadow: inset 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
  z-index: 1;
}
.block-editor-list-view-leaf.is-visible .block-editor-list-view-block-contents {
  opacity: 1;
}
@keyframes __wp-base-styles-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media not (prefers-reduced-motion) {
  .block-editor-list-view-leaf.is-visible .block-editor-list-view-block-contents {
    animation: __wp-base-styles-fade-in 0.08s linear 0s;
    animation-fill-mode: forwards;
  }
}
.block-editor-list-view-leaf .block-editor-block-icon {
  margin-right: 4px;
  flex: 0 0 24px;
}
.block-editor-list-view-leaf .block-editor-list-view-block__menu-cell,
.block-editor-list-view-leaf .block-editor-list-view-block__mover-cell,
.block-editor-list-view-leaf .block-editor-list-view-block__contents-cell {
  padding: 0;
}
.block-editor-list-view-leaf .block-editor-list-view-block__menu-cell,
.block-editor-list-view-leaf .block-editor-list-view-block__mover-cell {
  line-height: 0;
  width: 28px;
  vertical-align: middle;
}
.block-editor-list-view-leaf .block-editor-list-view-block__menu-cell > *,
.block-editor-list-view-leaf .block-editor-list-view-block__mover-cell > * {
  opacity: 0;
}
.block-editor-list-view-leaf .block-editor-list-view-block__menu-cell:hover > *, .block-editor-list-view-leaf .block-editor-list-view-block__menu-cell:focus-within > *, .block-editor-list-view-leaf .block-editor-list-view-block__menu-cell.is-visible > *,
.block-editor-list-view-leaf .block-editor-list-view-block__mover-cell:hover > *,
.block-editor-list-view-leaf .block-editor-list-view-block__mover-cell:focus-within > *,
.block-editor-list-view-leaf .block-editor-list-view-block__mover-cell.is-visible > * {
  opacity: 1;
}
.block-editor-list-view-leaf .block-editor-list-view-block__mover-cell-alignment-wrapper {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
}
.block-editor-list-view-leaf .block-editor-block-mover-button {
  position: relative;
  width: 36px;
  height: 24px;
}
.block-editor-list-view-leaf .block-editor-block-mover-button svg {
  position: relative;
  height: 24px;
}
.block-editor-list-view-leaf .block-editor-block-mover-button.is-up-button {
  margin-top: -6px;
  align-items: flex-end;
}
.block-editor-list-view-leaf .block-editor-block-mover-button.is-up-button svg {
  bottom: -4px;
}
.block-editor-list-view-leaf .block-editor-block-mover-button.is-down-button {
  margin-bottom: -6px;
  align-items: flex-start;
}
.block-editor-list-view-leaf .block-editor-block-mover-button.is-down-button svg {
  top: -4px;
}
.block-editor-list-view-leaf .block-editor-block-mover-button::before {
  height: 16px;
  min-width: 100%;
  left: 0;
  right: 0;
}
.block-editor-list-view-leaf .block-editor-inserter__toggle {
  background: #1e1e1e;
  color: #fff;
  height: 24px;
  margin: 6px 6px 6px 1px;
  min-width: 24px;
}
.block-editor-list-view-leaf .block-editor-inserter__toggle:active {
  color: #fff;
}
.block-editor-list-view-leaf .block-editor-list-view-block-select-button__label-wrapper svg {
  left: 2px;
  position: relative;
}
.block-editor-list-view-leaf .block-editor-list-view-block-select-button__title {
  flex: 1;
  position: relative;
}
.block-editor-list-view-leaf .block-editor-list-view-block-select-button__title .components-truncate {
  position: absolute;
  width: 100%;
  transform: translateY(-50%);
}
.block-editor-list-view-leaf .block-editor-list-view-block-select-button__anchor-wrapper {
  position: relative;
  max-width: min(110px, 40%);
  width: 100%;
}
.block-editor-list-view-leaf .block-editor-list-view-block-select-button__anchor {
  position: absolute;
  right: 0;
  transform: translateY(-50%);
}
.block-editor-list-view-leaf.is-selected .block-editor-list-view-block-select-button__anchor {
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
}
.block-editor-list-view-leaf .block-editor-list-view-block-select-button__lock,
.block-editor-list-view-leaf .block-editor-list-view-block-select-button__sticky {
  line-height: 0;
}
.block-editor-list-view-leaf .block-editor-list-view-block-select-button__images {
  display: flex;
}
.block-editor-list-view-leaf .block-editor-list-view-block-select-button__image {
  background-size: cover;
  width: 18px;
  height: 18px;
  border-radius: 1px;
}
.block-editor-list-view-leaf .block-editor-list-view-block-select-button__image:not(:only-child) {
  box-shadow: 0 0 0 2px #fff;
}
.block-editor-list-view-leaf .block-editor-list-view-block-select-button__image:not(:first-child) {
  margin-left: -6px;
}
.block-editor-list-view-leaf.is-selected .block-editor-list-view-block-select-button__image:not(:only-child) {
  box-shadow: 0 0 0 2px var(--wp-admin-theme-color);
}

.block-editor-list-view-draggable-chip {
  opacity: 0.8;
}

.block-editor-list-view-block__contents-cell .block-editor-list-view-block__contents-container,
.block-editor-list-view-block__contents-cell .block-editor-list-view-appender__container,
.block-editor-list-view-appender__cell .block-editor-list-view-block__contents-container,
.block-editor-list-view-appender__cell .block-editor-list-view-appender__container {
  display: flex;
}

.block-editor-list-view__expander {
  height: 24px;
  width: 24px;
  cursor: pointer;
}

.block-editor-list-view-leaf[aria-level] .block-editor-list-view__expander {
  margin-left: 192px;
}

.block-editor-list-view-leaf[aria-level="1"] .block-editor-list-view__expander {
  margin-left: 0;
}

.block-editor-list-view-leaf[aria-level="2"] .block-editor-list-view__expander {
  margin-left: 24px;
}

.block-editor-list-view-leaf[aria-level="3"] .block-editor-list-view__expander {
  margin-left: 48px;
}

.block-editor-list-view-leaf[aria-level="4"] .block-editor-list-view__expander {
  margin-left: 72px;
}

.block-editor-list-view-leaf[aria-level="5"] .block-editor-list-view__expander {
  margin-left: 96px;
}

.block-editor-list-view-leaf[aria-level="6"] .block-editor-list-view__expander {
  margin-left: 120px;
}

.block-editor-list-view-leaf[aria-level="7"] .block-editor-list-view__expander {
  margin-left: 144px;
}

.block-editor-list-view-leaf[aria-level="8"] .block-editor-list-view__expander {
  margin-left: 168px;
}

.block-editor-list-view-leaf .block-editor-list-view__expander {
  visibility: hidden;
}

.block-editor-list-view-leaf[data-expanded=true] .block-editor-list-view__expander svg {
  visibility: visible;
  transform: rotate(90deg);
}
@media not (prefers-reduced-motion) {
  .block-editor-list-view-leaf[data-expanded=true] .block-editor-list-view__expander svg {
    transition: transform 0.2s ease;
  }
}

.block-editor-list-view-leaf[data-expanded=false] .block-editor-list-view__expander svg {
  visibility: visible;
  transform: rotate(0deg);
}
@media not (prefers-reduced-motion) {
  .block-editor-list-view-leaf[data-expanded=false] .block-editor-list-view__expander svg {
    transition: transform 0.2s ease;
  }
}

.block-editor-list-view-drop-indicator {
  pointer-events: none;
}
.block-editor-list-view-drop-indicator .block-editor-list-view-drop-indicator__line {
  background: var(--wp-admin-theme-color);
  height: 4px;
  border-radius: 4px;
}

.block-editor-list-view-drop-indicator--preview {
  pointer-events: none;
}
.block-editor-list-view-drop-indicator--preview .components-popover__content {
  overflow: hidden !important;
}
.block-editor-list-view-drop-indicator--preview .block-editor-list-view-drop-indicator__line {
  background: rgba(var(--wp-admin-theme-color--rgb), 0.04);
  height: 32px;
  border-radius: 4px;
  overflow: hidden;
}
.block-editor-list-view-drop-indicator--preview .block-editor-list-view-drop-indicator__line--darker {
  background: rgba(var(--wp-admin-theme-color--rgb), 0.09);
}

.block-editor-list-view-placeholder {
  padding: 0;
  margin: 0;
  height: 32px;
}

.list-view-appender .block-editor-inserter__toggle {
  background-color: #1e1e1e;
  color: #fff;
  margin: 8px 0 0 24px;
  height: 24px;
  padding: 0;
}
.list-view-appender .block-editor-inserter__toggle.has-icon.is-next-40px-default-size {
  min-width: 24px;
}
.list-view-appender .block-editor-inserter__toggle:hover, .list-view-appender .block-editor-inserter__toggle:focus {
  background: var(--wp-admin-theme-color);
  color: #fff;
}

.list-view-appender__description {
  display: none;
}

.block-editor-media-placeholder__url-input-form {
  min-width: 260px;
}
@media (min-width: 600px) {
  .block-editor-media-placeholder__url-input-form {
    width: 300px;
  }
}
.block-editor-media-placeholder__url-input-form input {
  /* rtl:ignore */
  direction: ltr;
}

.modal-open .block-editor-media-replace-flow__options {
  display: none;
}

.block-editor-media-replace-flow__indicator {
  margin-left: 4px;
}

.block-editor-media-replace-flow__media-upload-menu:not(:empty) + .block-editor-media-flow__url-input {
  border-top: 1px solid #1e1e1e;
  margin-top: 8px;
  padding-bottom: 8px;
}

.block-editor-media-flow__url-input {
  margin-right: -8px;
  margin-left: -8px;
  padding: 16px;
}
.block-editor-media-flow__url-input .block-editor-media-replace-flow__image-url-label {
  display: block;
  top: 16px;
  margin-bottom: 8px;
}
.block-editor-media-flow__url-input .block-editor-link-control {
  width: 300px;
}
.block-editor-media-flow__url-input .block-editor-link-control .block-editor-url-input {
  padding: 0;
  margin: 0;
}
.block-editor-media-flow__url-input .block-editor-link-control .block-editor-link-control__tools {
  justify-content: flex-end;
  padding: 16px var(--wp-admin-border-width-focus) var(--wp-admin-border-width-focus);
}
.block-editor-media-flow__url-input .block-editor-link-control .block-editor-link-control__search-item.is-current {
  width: auto;
  padding: 0;
}
.block-editor-media-flow__url-input .block-editor-link-control .block-editor-link-control__search-input.block-editor-link-control__search-input input[type=text] {
  margin: 0;
  width: 100%;
}
.block-editor-media-flow__url-input .block-editor-link-control .block-editor-link-control__search-actions {
  padding: 8px 0 0;
}

.block-editor-media-flow__error {
  padding: 0 20px 20px 20px;
  max-width: 255px;
}
.block-editor-media-flow__error .components-with-notices-ui {
  max-width: 255px;
}
.block-editor-media-flow__error .components-with-notices-ui .components-notice__content {
  overflow: hidden;
  word-wrap: break-word;
}
.block-editor-media-flow__error .components-with-notices-ui .components-notice__dismiss {
  position: absolute;
  right: 10px;
}

.block-editor-multi-selection-inspector__card {
  padding: 16px;
}

.block-editor-multi-selection-inspector__card-title {
  font-weight: 500;
}

.block-editor-multi-selection-inspector__card .block-editor-block-icon {
  margin-left: -2px;
  padding: 0 3px;
  width: 36px;
  height: 24px;
}

.block-editor-responsive-block-control {
  margin-bottom: 28px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 14px;
}
.block-editor-responsive-block-control:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.block-editor-responsive-block-control__title {
  margin: 0;
  margin-bottom: 0.6em;
  margin-left: -3px;
}

.block-editor-responsive-block-control__label {
  font-weight: 600;
  margin-bottom: 0.6em;
  margin-left: -3px;
}

.block-editor-responsive-block-control__inner {
  margin-left: -1px;
}

.block-editor-responsive-block-control__toggle {
  margin-left: 1px;
}

.block-editor-responsive-block-control .components-base-control__help {
  border: 0;
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  word-wrap: normal !important;
}

.components-popover.block-editor-rich-text__inline-format-toolbar {
  z-index: 99998;
}
.components-popover.block-editor-rich-text__inline-format-toolbar .components-popover__content {
  width: auto;
  min-width: auto;
  margin-bottom: 8px;
  box-shadow: none;
  outline: none;
  border-radius: 2px;
}
.components-popover.block-editor-rich-text__inline-format-toolbar .components-toolbar {
  border-radius: 2px;
}
.components-popover.block-editor-rich-text__inline-format-toolbar .components-toolbar-group {
  background: none;
}
.components-popover.block-editor-rich-text__inline-format-toolbar .components-toolbar__control,
.components-popover.block-editor-rich-text__inline-format-toolbar .components-dropdown-menu__toggle {
  min-width: 48px;
  min-height: 48px;
  padding-left: 12px;
  padding-right: 12px;
}

.block-editor-rich-text__inline-format-toolbar-group .components-dropdown-menu__toggle {
  justify-content: center;
}

.show-icon-labels .block-editor-rich-text__inline-format-toolbar-group .components-button.has-icon {
  width: auto;
}
.show-icon-labels .block-editor-rich-text__inline-format-toolbar-group .components-button.has-icon svg {
  display: none;
}
.show-icon-labels .block-editor-rich-text__inline-format-toolbar-group .components-button.has-icon::after {
  content: attr(aria-label);
}

.block-editor-skip-to-selected-block {
  position: absolute;
  top: -9999em;
}
.block-editor-skip-to-selected-block:focus {
  font-size: 14px;
  font-weight: 600;
  background: #f1f1f1;
  z-index: 100000;
}

.block-editor-tabbed-sidebar {
  background-color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
}

.block-editor-tabbed-sidebar__tablist-and-close-button {
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  padding-right: 8px;
}

.block-editor-tabbed-sidebar__close-button {
  background: #fff;
  /* stylelint-disable-next-line property-disallowed-list -- This should be removed when https://github.com/WordPress/gutenberg/issues/59013 is fixed. */
  order: 1;
  align-self: center;
}

.block-editor-tabbed-sidebar__tablist {
  margin-bottom: -1px;
}

.block-editor-tabbed-sidebar__tabpanel {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-gutter: auto;
}

.block-editor-tool-selector__help {
  margin-top: 8px;
  margin-left: -8px;
  margin-right: -8px;
  margin-bottom: -8px;
  padding: 16px;
  border-top: 1px solid #ddd;
  color: #757575;
  min-width: 280px;
}

.block-editor-tool-selector__menu .components-menu-item__info {
  margin-left: 36px;
  text-align: left;
}

.block-editor-block-list__block .block-editor-url-input,
.components-popover .block-editor-url-input,
.block-editor-url-input {
  flex-grow: 1;
  position: relative;
  padding: 1px;
}
@media (min-width: 600px) {
  .block-editor-block-list__block .block-editor-url-input,
.components-popover .block-editor-url-input,
.block-editor-url-input {
    min-width: 300px;
    width: auto;
  }
}
.block-editor-block-list__block .block-editor-url-input.is-full-width,
.components-popover .block-editor-url-input.is-full-width,
.block-editor-url-input.is-full-width {
  width: 100%;
}
.block-editor-block-list__block .block-editor-url-input.is-full-width__suggestions,
.components-popover .block-editor-url-input.is-full-width__suggestions,
.block-editor-url-input.is-full-width__suggestions {
  width: 100%;
}
.block-editor-block-list__block .block-editor-url-input .components-spinner,
.components-popover .block-editor-url-input .components-spinner,
.block-editor-url-input .components-spinner {
  position: absolute;
  margin: 0;
  top: calc(50% - 16px / 2);
  right: 8px;
}

.block-editor-url-input__suggestions {
  max-height: 200px;
  padding: 4px 0;
  width: 302px;
  overflow-y: auto;
}
@media not (prefers-reduced-motion) {
  .block-editor-url-input__suggestions {
    transition: all 0.15s ease-in-out;
  }
}

.block-editor-url-input__suggestions,
.block-editor-url-input .components-spinner {
  display: none;
}
@media (min-width: 600px) {
  .block-editor-url-input__suggestions,
.block-editor-url-input .components-spinner {
    display: grid;
  }
}

.block-editor-url-input__suggestion {
  min-height: 36px;
  height: auto;
  color: #757575;
  display: block;
  font-size: 13px;
  cursor: pointer;
  background: #fff;
  width: 100%;
  border: none;
  text-align: left;
  box-shadow: none;
}
.block-editor-url-input__suggestion:hover {
  background: #ddd;
}
.block-editor-url-input__suggestion:focus, .block-editor-url-input__suggestion.is-selected {
  background: var(--wp-admin-theme-color-darker-20);
  color: #fff;
  outline: none;
}

.components-toolbar-group > .block-editor-url-input__button,
.components-toolbar > .block-editor-url-input__button {
  position: inherit;
}

.block-editor-url-input__button .block-editor-url-input__back {
  margin-right: 4px;
  overflow: visible;
}
.block-editor-url-input__button .block-editor-url-input__back::after {
  content: "";
  position: absolute;
  display: block;
  width: 1px;
  height: 24px;
  right: -1px;
  background: #ddd;
}

.block-editor-url-input__button-modal {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.02), 0 3px 3px rgba(0, 0, 0, 0.02), 0 4px 4px rgba(0, 0, 0, 0.01);
  border: 1px solid #ddd;
  background: #fff;
}

.block-editor-url-input__button-modal-line {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 0;
  align-items: flex-start;
}

.block-editor-url-popover__additional-controls {
  border-top: 1px solid #1e1e1e;
  padding: 8px 8px;
}

.block-editor-url-popover__input-container {
  padding: 8px;
}

.block-editor-url-popover__row {
  display: flex;
  gap: 4px;
  align-items: center;
}

.block-editor-url-popover__row > :not(.block-editor-url-popover__settings-toggle) {
  flex-grow: 1;
  gap: 8px;
}

.block-editor-url-popover__additional-controls .components-button.has-icon {
  padding-left: 8px;
  padding-right: 8px;
  height: auto;
  text-align: left;
}
.block-editor-url-popover__additional-controls .components-button.has-icon > svg {
  margin-right: 8px;
}

.block-editor-url-popover__settings-toggle {
  flex-shrink: 0;
}
.block-editor-url-popover__settings-toggle[aria-expanded=true] .dashicon {
  transform: rotate(180deg);
}

.block-editor-url-popover__settings {
  display: block;
  padding: 16px;
  border-top: 1px solid #1e1e1e;
}

.block-editor-url-popover__link-editor,
.block-editor-url-popover__link-viewer {
  display: flex;
}

.block-editor-url-popover__link-viewer-url {
  display: flex;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 8px;
  min-width: 150px;
  max-width: 350px;
}
.block-editor-url-popover__link-viewer-url.has-invalid-link {
  color: #cc1818;
}

.block-editor-url-popover__expand-on-click {
  display: flex;
  align-items: center;
  min-width: 350px;
  white-space: nowrap;
}
.block-editor-url-popover__expand-on-click .text {
  flex-grow: 1;
}
.block-editor-url-popover__expand-on-click .text p {
  margin: 0;
  line-height: 16px;
}
.block-editor-url-popover__expand-on-click .text p.description {
  color: #757575;
  font-size: 12px;
}

.block-editor-hooks__block-hooks {
  /**
   * Un-reverse the flex direction for the toggle's label.
   */
}
.block-editor-hooks__block-hooks .components-toggle-control .components-h-stack .components-h-stack {
  flex-direction: row;
}
.block-editor-hooks__block-hooks .block-editor-hooks__block-hooks-helptext {
  color: #757575;
  font-size: 12px;
  margin-bottom: 16px;
}

div.block-editor-bindings__panel {
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
}
div.block-editor-bindings__panel button:hover .block-editor-bindings__item span {
  color: inherit;
}

.border-block-support-panel .single-column {
  grid-column: span 1;
}

.color-block-support-panel {
  /* Increased specificity required to remove the slot wrapper's row gap */
  /**
   * After converting PanelColorGradientSettings to render as a ToolsPanel
   * we need to remove the top margin when wrapping inner content due to
   * rendering via SlotFills.
   */
}
.color-block-support-panel .block-editor-contrast-checker {
  grid-column: span 2;
  margin-top: 16px;
}
.color-block-support-panel .block-editor-contrast-checker .components-notice__content {
  margin-right: 0;
}
.color-block-support-panel.color-block-support-panel .color-block-support-panel__inner-wrapper {
  row-gap: 0;
}
.color-block-support-panel .block-editor-tools-panel-color-gradient-settings__item.first {
  margin-top: 0;
}

.dimensions-block-support-panel .single-column {
  grid-column: span 1;
}

.block-editor-hooks__layout-constrained .components-base-control {
  margin-bottom: 0;
}

.block-editor-hooks__layout-constrained-helptext {
  color: #757575;
  font-size: 12px;
  margin-bottom: 0;
}

.block-editor-hooks__flex-layout-justification-controls,
.block-editor-hooks__flex-layout-orientation-controls {
  margin-bottom: 12px;
}
.block-editor-hooks__flex-layout-justification-controls legend,
.block-editor-hooks__flex-layout-orientation-controls legend {
  margin-bottom: 8px;
}

.block-editor-hooks__grid-layout-columns-and-rows-controls,
.block-editor-hooks__grid-layout-minimum-width-control {
  border: 0;
  padding: 0;
  margin: 0;
}

.block-editor__spacing-visualizer {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.5;
  border-color: var(--wp-admin-theme-color);
  border-style: solid;
  pointer-events: none;
  box-sizing: border-box;
}

.typography-block-support-panel .single-column {
  grid-column: span 1;
}

/**
 * Block Toolbar
 */
.block-editor-block-toolbar {
  display: flex;
  flex-grow: 1;
  width: 100%;
  position: relative;
  overflow-y: hidden;
  overflow-x: auto;
}
@media not (prefers-reduced-motion) {
  .block-editor-block-toolbar {
    transition: border-color 0.1s linear, box-shadow 0.1s linear;
  }
}
@media (min-width: 600px) {
  .block-editor-block-toolbar {
    overflow: inherit;
  }
}
.block-editor-block-toolbar .components-toolbar-group,
.block-editor-block-toolbar .components-toolbar {
  background: none;
  margin-top: -1px;
  margin-bottom: -1px;
  border: 0;
  border-right: 1px solid #ddd;
}
.block-editor-block-toolbar.is-connected .block-editor-block-switcher .components-button::before {
  background: color-mix(in srgb, var(--wp-block-synced-color) 10%, transparent);
  border-radius: 2px;
}
.block-editor-block-toolbar.is-synced .block-editor-block-switcher .components-button .block-editor-block-icon, .block-editor-block-toolbar.is-connected .block-editor-block-switcher .components-button .block-editor-block-icon {
  color: var(--wp-block-synced-color);
}
.block-editor-block-toolbar.is-synced .components-toolbar-button.block-editor-block-switcher__no-switcher-icon:disabled .block-editor-block-icon.has-colors, .block-editor-block-toolbar.is-connected .components-toolbar-button.block-editor-block-switcher__no-switcher-icon:disabled .block-editor-block-icon.has-colors {
  color: var(--wp-block-synced-color);
}
.block-editor-block-toolbar > :last-child,
.block-editor-block-toolbar > :last-child .components-toolbar-group,
.block-editor-block-toolbar > :last-child .components-toolbar, .block-editor-block-toolbar:has(> :last-child:empty) > :nth-last-child(2), .block-editor-block-toolbar:has(> :last-child:empty) > :nth-last-child(2) .components-toolbar-group, .block-editor-block-toolbar:has(> :last-child:empty) > :nth-last-child(2) .components-toolbar {
  border-right: none;
}
.block-editor-block-toolbar .components-toolbar-group:empty {
  display: none;
}

.block-editor-block-contextual-toolbar {
  position: sticky;
  top: 0;
  z-index: 31;
  display: block;
  width: 100%;
  background-color: #fff;
  flex-shrink: 3;
}
.block-editor-block-contextual-toolbar.components-accessible-toolbar {
  border: none;
  border-radius: 0;
}
.block-editor-block-contextual-toolbar.is-unstyled {
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.133);
}
.block-editor-block-contextual-toolbar .block-editor-block-toolbar {
  overflow: auto;
  overflow-y: hidden;
  scrollbar-width: thin;
  scrollbar-gutter: stable both-edges;
  scrollbar-color: #e0e0e0 transparent;
  will-change: transform;
  scrollbar-gutter: auto;
}
.block-editor-block-contextual-toolbar .block-editor-block-toolbar::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}
.block-editor-block-contextual-toolbar .block-editor-block-toolbar::-webkit-scrollbar-track {
  background-color: transparent;
}
.block-editor-block-contextual-toolbar .block-editor-block-toolbar::-webkit-scrollbar-thumb {
  background-color: #e0e0e0;
  border-radius: 8px;
  border: 3px solid transparent;
  background-clip: padding-box;
}
.block-editor-block-contextual-toolbar .block-editor-block-toolbar:hover::-webkit-scrollbar-thumb, .block-editor-block-contextual-toolbar .block-editor-block-toolbar:focus::-webkit-scrollbar-thumb, .block-editor-block-contextual-toolbar .block-editor-block-toolbar:focus-within::-webkit-scrollbar-thumb {
  background-color: #949494;
}
.block-editor-block-contextual-toolbar .block-editor-block-toolbar:hover, .block-editor-block-contextual-toolbar .block-editor-block-toolbar:focus, .block-editor-block-contextual-toolbar .block-editor-block-toolbar:focus-within {
  scrollbar-color: #949494 transparent;
}
@media (hover: none) {
  .block-editor-block-contextual-toolbar .block-editor-block-toolbar {
    scrollbar-color: #949494 transparent;
  }
}
.block-editor-block-contextual-toolbar .block-editor-block-toolbar > :last-child::after,
.block-editor-block-contextual-toolbar .block-editor-block-toolbar > :last-child .components-toolbar-group::after,
.block-editor-block-contextual-toolbar .block-editor-block-toolbar > :last-child .components-toolbar::after {
  display: none;
}
.block-editor-block-contextual-toolbar > .block-editor-block-toolbar {
  flex-grow: initial;
  width: initial;
}
.block-editor-block-contextual-toolbar .block-editor-block-parent-selector {
  position: relative;
  margin-top: -1px;
  margin-bottom: -1px;
}
.block-editor-block-contextual-toolbar .block-editor-block-parent-selector::after {
  align-items: center;
  background-color: #1e1e1e;
  border-radius: 100%;
  content: "";
  display: inline-flex;
  height: 2px;
  position: absolute;
  right: 0;
  top: 15px;
  width: 2px;
}

.block-editor-block-toolbar__block-controls .block-editor-block-switcher .components-dropdown-menu__toggle .block-editor-block-icon,
.block-editor-block-toolbar__block-controls .block-editor-block-switcher__no-switcher-icon .block-editor-block-icon {
  width: 24px !important;
  margin: 0 !important;
}
.block-editor-block-toolbar__block-controls .components-toolbar-group {
  padding: 0;
}

.block-editor-block-toolbar .components-toolbar-group,
.block-editor-block-toolbar .components-toolbar,
.block-editor-rich-text__inline-format-toolbar-group .components-toolbar-group,
.block-editor-rich-text__inline-format-toolbar-group .components-toolbar {
  display: flex;
  flex-wrap: nowrap;
}

.block-editor-block-toolbar__slot {
  display: inline-flex;
}

.show-icon-labels .block-editor-block-toolbar .components-button.has-icon {
  width: auto;
}
.show-icon-labels .block-editor-block-toolbar .components-button.has-icon svg {
  display: none;
}
.show-icon-labels .block-editor-block-toolbar .components-button.has-icon::after {
  content: attr(aria-label);
  font-size: 12px;
}
.show-icon-labels .components-accessible-toolbar .components-toolbar-group > div:first-child:last-child > .components-button.has-icon {
  padding-left: 6px;
  padding-right: 6px;
}
.show-icon-labels .block-editor-block-switcher .components-dropdown-menu__toggle .block-editor-block-icon,
.show-icon-labels .block-editor-block-switcher__no-switcher-icon .block-editor-block-icon {
  width: 0 !important;
  height: 0 !important;
  min-width: 0 !important;
}
.show-icon-labels .block-editor-block-parent-selector .block-editor-block-parent-selector__button {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding-left: 12px;
  padding-right: 12px;
  text-wrap: nowrap;
}
.show-icon-labels .block-editor-block-parent-selector .block-editor-block-parent-selector__button .block-editor-block-icon {
  width: 0;
}
.show-icon-labels .block-editor-block-mover .block-editor-block-mover__move-button-container {
  width: auto;
  position: relative;
}
@media (min-width: 600px) {
  .show-icon-labels .block-editor-block-mover:not(.is-horizontal) .block-editor-block-mover__move-button-container::before {
    content: "";
    height: 1px;
    width: 100%;
    background: #e0e0e0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0);
    margin-top: -0.5px;
  }
}
@media (min-width: 782px) {
  .show-icon-labels .block-editor-block-mover:not(.is-horizontal) .block-editor-block-mover__move-button-container::before {
    background: #1e1e1e;
  }
}
.show-icon-labels .block-editor-block-mover.is-horizontal .block-editor-block-mover__move-button-container,
.show-icon-labels .block-editor-block-mover.is-horizontal .block-editor-block-mover-button {
  padding-left: 6px;
  padding-right: 6px;
}
.show-icon-labels .block-editor-block-mover:not(.is-horizontal) .block-editor-block-mover-button {
  padding-left: 8px;
  padding-right: 8px;
}
.show-icon-labels .block-editor-block-toolbar__block-controls .block-editor-block-mover {
  border-left: 1px solid #ddd;
  margin-left: 6px;
  margin-right: -6px;
  white-space: nowrap;
}
.show-icon-labels .block-editor-block-mover .block-editor-block-mover__drag-handle.has-icon {
  padding-left: 12px;
  padding-right: 12px;
}
.show-icon-labels .block-editor-block-contextual-toolbar .block-editor-block-mover.is-horizontal .block-editor-block-mover-button.block-editor-block-mover-button {
  width: auto;
}
.show-icon-labels .components-toolbar,
.show-icon-labels .components-toolbar-group {
  flex-shrink: 1;
}
.show-icon-labels .block-editor-rich-text__inline-format-toolbar-group .components-button + .components-button {
  margin-left: 6px;
}

.block-editor-block-toolbar-change-design-content-wrapper {
  padding: 12px;
  width: 320px;
}
.block-editor-block-toolbar-change-design-content-wrapper .block-editor-block-patterns-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
}
.block-editor-block-toolbar-change-design-content-wrapper .block-editor-block-patterns-list .block-editor-block-patterns-list__list-item {
  margin-bottom: 0;
}
.block-editor-block-toolbar-change-design-content-wrapper .block-editor-block-patterns-list .block-editor-inserter__media-list__list-item {
  min-height: 100px;
}

.block-editor-inserter {
  display: inline-block;
  background: none;
  border: none;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 13px;
  line-height: 0;
}
@media (min-width: 782px) {
  .block-editor-inserter {
    position: relative;
  }
}

.block-editor-inserter__main-area {
  height: 100%;
  gap: 16px;
  position: relative;
}
.block-editor-inserter__main-area.show-as-tabs {
  gap: 0;
}
@media (min-width: 782px) {
  .block-editor-inserter__main-area .block-editor-tabbed-sidebar {
    width: 350px;
  }
}

.block-editor-inserter__popover.is-quick .components-popover__content {
  border: none;
  outline: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.02), 0 3px 3px rgba(0, 0, 0, 0.02), 0 4px 4px rgba(0, 0, 0, 0.01);
}
.block-editor-inserter__popover.is-quick .components-popover__content .block-editor-inserter__quick-inserter > * {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.block-editor-inserter__popover.is-quick .components-popover__content .block-editor-inserter__quick-inserter > *:first-child {
  border-top: 1px solid #ccc;
  border-radius: 4px 4px 0 0;
}
.block-editor-inserter__popover.is-quick .components-popover__content .block-editor-inserter__quick-inserter > *:last-child {
  border-bottom: 1px solid #ccc;
  border-radius: 0 0 4px 4px;
}
.block-editor-inserter__popover.is-quick .components-popover__content .block-editor-inserter__quick-inserter > *.components-button {
  border: 1px solid #1e1e1e;
}

.block-editor-inserter__popover .block-editor-inserter__menu {
  margin: -12px;
}
.block-editor-inserter__popover .block-editor-inserter__menu .block-editor-inserter__tablist {
  top: 60px;
}
.block-editor-inserter__popover .block-editor-inserter__menu .block-editor-inserter__main-area {
  overflow: visible;
  height: auto;
}
.block-editor-inserter__popover .block-editor-inserter__menu .block-editor-inserter__preview-container {
  display: none;
}

.block-editor-inserter__toggle.components-button {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0;
}
@media not (prefers-reduced-motion) {
  .block-editor-inserter__toggle.components-button {
    transition: color 0.2s ease;
  }
}

.block-editor-inserter__menu {
  height: 100%;
  position: relative;
  overflow: visible;
}
@media (min-width: 782px) {
  .block-editor-inserter__menu.show-panel {
    width: 630px;
  }
}

.block-editor-inserter__inline-elements {
  margin-top: -1px;
}

.block-editor-inserter__menu.is-bottom::after {
  border-bottom-color: #fff;
}

.components-popover.block-editor-inserter__popover {
  z-index: 99999;
}

.block-editor-inserter__search {
  padding: 16px 16px 0 16px;
}

.block-editor-inserter__no-tab-container {
  overflow-y: auto;
  flex-grow: 1;
  position: relative;
}

.block-editor-inserter__panel-header {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 16px 16px 0;
}

.block-editor-inserter__panel-content {
  padding: 16px;
}

.block-editor-inserter__panel-title,
.block-editor-inserter__panel-title button {
  margin: 0 12px 0 0;
  color: #757575;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 500;
}

.block-editor-inserter__panel-dropdown select.components-select-control__input.components-select-control__input.components-select-control__input {
  height: 36px;
  line-height: 36px;
}

.block-editor-inserter__panel-dropdown select {
  border: none;
}

.block-editor-inserter__reusable-blocks-panel {
  position: relative;
  text-align: right;
}

.block-editor-inserter__no-results,
.block-editor-inserter__patterns-loading {
  padding: 32px;
  text-align: center;
}

.block-editor-inserter__child-blocks {
  padding: 0 16px;
}

.block-editor-inserter__parent-block-header {
  display: flex;
  align-items: center;
}
.block-editor-inserter__parent-block-header h2 {
  font-size: 13px;
}
.block-editor-inserter__parent-block-header .block-editor-block-icon {
  margin-right: 8px;
}

.block-editor-inserter__preview-container__popover {
  top: 16px !important;
}

.block-editor-inserter__preview-container {
  display: none;
  width: 280px;
  padding: 16px;
  max-height: calc(100% - 32px);
  overflow-y: hidden;
}
@media (min-width: 782px) {
  .block-editor-inserter__preview-container {
    display: block;
  }
}
.block-editor-inserter__preview-container .block-editor-inserter__media-list__list-item {
  height: 100%;
}
.block-editor-inserter__preview-container .block-editor-block-card {
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 4px;
}

.block-editor-inserter__insertable-blocks-at-selection {
  border-bottom: 1px solid #e0e0e0;
}

.block-editor-inserter__media-tabs-container,
.block-editor-inserter__block-patterns-tabs-container {
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.block-editor-inserter__category-tablist {
  margin-bottom: 8px;
}

.block-editor-inserter__category-panel {
  outline: 1px solid transparent;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
}
@media (min-width: 782px) {
  .block-editor-inserter__category-panel {
    border-left: 1px solid #e0e0e0;
    padding: 0;
    left: 350px;
    width: 280px;
    position: absolute;
    top: -1px;
    height: calc(100% + 1px);
    background: #f0f0f0;
    border-top: 1px solid #e0e0e0;
  }
  .block-editor-inserter__category-panel .block-editor-inserter__media-list,
.block-editor-inserter__category-panel .block-editor-block-patterns-list {
    padding: 0 24px 16px;
  }
}

.block-editor-inserter__patterns-category-panel-header {
  padding: 8px 0;
}
@media (min-width: 782px) {
  .block-editor-inserter__patterns-category-panel-header {
    padding: 8px 24px;
  }
}

.block-editor-inserter__patterns-category-no-results {
  margin-top: 24px;
}

.block-editor-inserter__patterns-filter-help {
  padding: 16px;
  border-top: 1px solid #ddd;
  color: #757575;
  min-width: 280px;
}

.block-editor-inserter__media-list,
.block-editor-block-patterns-list {
  overflow-y: auto;
  flex-grow: 1;
  height: 100%;
}

.block-editor-inserter__preview-content {
  background: #f0f0f0;
  display: grid;
  flex-grow: 1;
  align-items: center;
}

.block-editor-inserter__preview-content-missing {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 144px;
  color: #757575;
  background: #f0f0f0;
  border-radius: 2px;
}

.block-editor-inserter__tips {
  border-top: 1px solid #ddd;
  padding: 16px;
  flex-shrink: 0;
  position: relative;
}

.block-editor-inserter__quick-inserter {
  width: 100%;
  max-width: 100%;
}
@media (min-width: 782px) {
  .block-editor-inserter__quick-inserter {
    width: 350px;
  }
}

.block-editor-inserter__quick-inserter-results .block-editor-inserter__panel-header {
  height: 0;
  padding: 0;
  float: left;
}

.block-editor-inserter__quick-inserter.has-search .block-editor-inserter__panel-content,
.block-editor-inserter__quick-inserter.has-expand .block-editor-inserter__panel-content {
  padding: 16px;
}

.block-editor-inserter__quick-inserter-patterns .block-editor-block-patterns-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
}
.block-editor-inserter__quick-inserter-patterns .block-editor-block-patterns-list .block-editor-block-patterns-list__list-item {
  margin-bottom: 0;
}
.block-editor-inserter__quick-inserter-patterns .block-editor-block-patterns-list .block-editor-inserter__media-list__list-item {
  min-height: 100px;
}

.block-editor-inserter__quick-inserter-separator {
  border-top: 1px solid #ddd;
}

.block-editor-inserter__popover.is-quick > .components-popover__content {
  padding: 0;
}

.block-editor-inserter__quick-inserter-expand.components-button {
  display: block;
  background: #1e1e1e;
  color: #fff;
  width: 100%;
  border-radius: 0;
}
.block-editor-inserter__quick-inserter-expand.components-button:hover {
  color: #fff;
}
.block-editor-inserter__quick-inserter-expand.components-button:active {
  color: #ccc;
}
.block-editor-inserter__quick-inserter-expand.components-button.components-button:focus:not(:disabled) {
  box-shadow: none;
  background: var(--wp-admin-theme-color);
  border-color: var(--wp-admin-theme-color);
}

.block-editor-block-patterns-explorer__sidebar {
  position: absolute;
  top: 72px;
  left: 0;
  bottom: 0;
  width: 280px;
  padding: 24px 32px 32px;
  overflow-x: visible;
  overflow-y: auto;
}
.block-editor-block-patterns-explorer__sidebar__categories-list__item {
  display: block;
  width: 100%;
  height: 48px;
  text-align: left;
}
.block-editor-block-patterns-explorer__search {
  margin-bottom: 32px;
}
.block-editor-block-patterns-explorer__search-results-count {
  padding-bottom: 32px;
}
.block-editor-block-patterns-explorer__list {
  margin-left: 280px;
  padding: 24px 0 32px;
}
.block-editor-block-patterns-explorer__list .block-editor-patterns__sync-status-filter .components-input-control__container {
  width: 380px;
}
.block-editor-block-patterns-explorer .block-editor-block-patterns-list {
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 16px;
}
@media (min-width: 1080px) {
  .block-editor-block-patterns-explorer .block-editor-block-patterns-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1440px) {
  .block-editor-block-patterns-explorer .block-editor-block-patterns-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
.block-editor-block-patterns-explorer .block-editor-block-patterns-list .block-editor-block-patterns-list__list-item {
  min-height: 240px;
}
.block-editor-block-patterns-explorer .block-editor-block-patterns-list .block-editor-inserter__media-list__list-item {
  height: inherit;
  min-height: 100px;
  max-height: 800px;
}

.components-heading.block-editor-inserter__patterns-category-panel-title {
  font-weight: 500;
}

.block-editor-inserter__patterns-explore-button.components-button,
.block-editor-inserter__media-library-button.components-button {
  padding: 16px;
  justify-content: center;
  margin-top: 16px;
  width: 100%;
}

.block-editor-inserter__media-panel {
  min-height: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
}
@media (min-width: 782px) {
  .block-editor-inserter__media-panel {
    padding: 0;
  }
}
.block-editor-inserter__media-panel .block-editor-inserter__media-panel-spinner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.block-editor-inserter__media-panel .block-editor-inserter__media-panel-search {
  margin-bottom: 24px;
}
@media (min-width: 782px) {
  .block-editor-inserter__media-panel .block-editor-inserter__media-panel-search {
    margin-bottom: 0;
    padding: 16px 24px 16px;
  }
  .block-editor-inserter__media-panel .block-editor-inserter__media-panel-search:not(:focus-within) {
    --wp-components-color-background: #fff;
  }
}

.block-editor-inserter__media-list__list-item {
  position: relative;
  cursor: pointer;
  margin-bottom: 24px;
}
.block-editor-inserter__media-list__list-item.is-placeholder {
  min-height: 100px;
}
.block-editor-inserter__media-list__list-item[draggable=true] .block-editor-inserter__media-list__list-item {
  cursor: grab;
}
.block-editor-inserter__media-list__list-item.is-hovered .block-editor-inserter__media-list__item-preview > * {
  outline-color: rgba(0, 0, 0, 0.3);
}
.block-editor-inserter__media-list__list-item.is-hovered .block-editor-inserter__media-list__item-preview-options > button {
  display: block;
}
.block-editor-inserter__media-list__list-item .block-editor-inserter__media-list__item-preview-options {
  position: absolute;
  right: 8px;
  top: 8px;
}
.block-editor-inserter__media-list__list-item .block-editor-inserter__media-list__item-preview-options > button {
  background: #fff;
  display: none;
}
.block-editor-inserter__media-list__list-item .block-editor-inserter__media-list__item-preview-options > button.is-opened, .block-editor-inserter__media-list__list-item .block-editor-inserter__media-list__item-preview-options > button:focus {
  display: block;
}
.block-editor-inserter__media-list__list-item .block-editor-inserter__media-list__item-preview-options > button:hover {
  box-shadow: inset 0 0 0 2px #fff, 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
  outline: 2px solid transparent;
}

.block-editor-inserter__media-list__item {
  height: 100%;
}
.block-editor-inserter__media-list__item .block-editor-inserter__media-list__item-preview {
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 2px;
}
.block-editor-inserter__media-list__item .block-editor-inserter__media-list__item-preview > * {
  margin: 0 auto;
  max-width: 100%;
  outline: 1px solid rgba(0, 0, 0, 0.1);
  outline-offset: -1px;
}
.block-editor-inserter__media-list__item .block-editor-inserter__media-list__item-preview .block-editor-inserter__media-list__item-preview-spinner {
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  justify-content: center;
  background: rgba(255, 255, 255, 0.7);
  align-items: center;
  pointer-events: none;
}
.block-editor-inserter__media-list__item:focus .block-editor-inserter__media-list__item-preview > * {
  outline-color: var(--wp-admin-theme-color);
  outline-width: var(--wp-admin-border-width-focus);
  outline-offset: calc(-1 * var(--wp-admin-border-width-focus));
}
@media not (prefers-reduced-motion) {
  .block-editor-inserter__media-list__item:focus .block-editor-inserter__media-list__item-preview > * {
    transition: outline 0.1s linear;
  }
}

.block-editor-inserter__media-list__item-preview-options__popover .components-menu-item__button .components-menu-item__item {
  min-width: auto;
}

.block-editor-inserter__mobile-tab-navigation {
  padding: 16px;
  height: 100%;
}
.block-editor-inserter__mobile-tab-navigation > * {
  height: 100%;
}

@media (min-width: 600px) {
  .block-editor-inserter-media-tab-media-preview-inserter-external-image-modal {
    max-width: 480px;
  }
}
.block-editor-inserter-media-tab-media-preview-inserter-external-image-modal p {
  margin: 0;
}

.block-editor-inserter__hint {
  margin: 16px 16px 0;
}

.block-editor-patterns__sync-status-filter .components-input-control__container select.components-select-control__input {
  height: 40px;
}

.block-editor-inserter__pattern-panel-placeholder {
  display: none;
}

.block-editor-inserter__menu.is-zoom-out {
  display: flex;
}
@media (min-width: 782px) {
  .block-editor-inserter__menu.is-zoom-out.show-panel::after {
    content: "";
    display: block;
    width: 300px;
    height: 100%;
  }
}

@media (max-width: 959px) {
  .show-icon-labels .block-editor-block-patterns-explorer .block-editor-patterns__grid-pagination {
    flex-direction: column;
  }
  .show-icon-labels .block-editor-block-patterns-explorer .block-editor-patterns__grid-pagination .block-editor-patterns__grid-pagination-previous,
.show-icon-labels .block-editor-block-patterns-explorer .block-editor-patterns__grid-pagination .block-editor-patterns__grid-pagination-next {
    flex-direction: column;
  }
}
.show-icon-labels .block-editor-inserter__category-panel .block-editor-patterns__grid-pagination {
  flex-direction: column;
}
.show-icon-labels .block-editor-inserter__category-panel .block-editor-patterns__grid-pagination .block-editor-patterns__grid-pagination-previous,
.show-icon-labels .block-editor-inserter__category-panel .block-editor-patterns__grid-pagination .block-editor-patterns__grid-pagination-next {
  flex-direction: column;
}

.block-editor-tabbed-sidebar__tabpanel .block-editor-inserter__help-text {
  display: none;
  padding: 0 24px 16px;
}
@media (min-width: 480px) {
  .block-editor-tabbed-sidebar__tabpanel .block-editor-inserter__help-text {
    display: block;
  }
}

.spacing-sizes-control {
  border: 0;
  padding: 0;
  margin: 0;
}
.spacing-sizes-control .spacing-sizes-control__custom-value-input,
.spacing-sizes-control .spacing-sizes-control__label {
  margin-bottom: 0;
}
.spacing-sizes-control .spacing-sizes-control__range-control,
.spacing-sizes-control .spacing-sizes-control__custom-value-range {
  flex: 1;
  margin-bottom: 0;
}

.spacing-sizes-control__header {
  height: 16px;
  margin-bottom: 12px;
}

.spacing-sizes-control__dropdown {
  height: 24px;
}

.spacing-sizes-control__custom-select-control,
.spacing-sizes-control__custom-value-input {
  flex: 1;
}

.spacing-sizes-control__icon,
.spacing-sizes-control__custom-toggle {
  flex: 0 0 auto;
}

.spacing-sizes-control__icon {
  margin-left: -4px;
}

body.admin-color-light {
  --wp-admin-theme-color: #0085ba;
  --wp-admin-theme-color--rgb: 0, 133, 186;
  --wp-admin-theme-color-darker-10: #0073a1;
  --wp-admin-theme-color-darker-10--rgb: 0, 115, 161;
  --wp-admin-theme-color-darker-20: #006187;
  --wp-admin-theme-color-darker-20--rgb: 0, 97, 135;
  --wp-admin-border-width-focus: 2px;
}
@media (min-resolution: 192dpi) {
  body.admin-color-light {
    --wp-admin-border-width-focus: 1.5px;
  }
}

body.admin-color-modern {
  --wp-admin-theme-color: #3858e9;
  --wp-admin-theme-color--rgb: 56, 88, 233;
  --wp-admin-theme-color-darker-10: #2145e6;
  --wp-admin-theme-color-darker-10--rgb: 33, 69, 230;
  --wp-admin-theme-color-darker-20: #183ad6;
  --wp-admin-theme-color-darker-20--rgb: 24, 58, 214;
  --wp-admin-border-width-focus: 2px;
}
@media (min-resolution: 192dpi) {
  body.admin-color-modern {
    --wp-admin-border-width-focus: 1.5px;
  }
}

body.admin-color-blue {
  --wp-admin-theme-color: #096484;
  --wp-admin-theme-color--rgb: 9, 100, 132;
  --wp-admin-theme-color-darker-10: #07526c;
  --wp-admin-theme-color-darker-10--rgb: 7, 82, 108;
  --wp-admin-theme-color-darker-20: #064054;
  --wp-admin-theme-color-darker-20--rgb: 6, 64, 84;
  --wp-admin-border-width-focus: 2px;
}
@media (min-resolution: 192dpi) {
  body.admin-color-blue {
    --wp-admin-border-width-focus: 1.5px;
  }
}

body.admin-color-coffee {
  --wp-admin-theme-color: #46403c;
  --wp-admin-theme-color--rgb: 70, 64, 60;
  --wp-admin-theme-color-darker-10: #383330;
  --wp-admin-theme-color-darker-10--rgb: 56, 51, 48;
  --wp-admin-theme-color-darker-20: #2b2724;
  --wp-admin-theme-color-darker-20--rgb: 43, 39, 36;
  --wp-admin-border-width-focus: 2px;
}
@media (min-resolution: 192dpi) {
  body.admin-color-coffee {
    --wp-admin-border-width-focus: 1.5px;
  }
}

body.admin-color-ectoplasm {
  --wp-admin-theme-color: #523f6d;
  --wp-admin-theme-color--rgb: 82, 63, 109;
  --wp-admin-theme-color-darker-10: #46365d;
  --wp-admin-theme-color-darker-10--rgb: 70, 54, 93;
  --wp-admin-theme-color-darker-20: #3a2c4d;
  --wp-admin-theme-color-darker-20--rgb: 58, 44, 77;
  --wp-admin-border-width-focus: 2px;
}
@media (min-resolution: 192dpi) {
  body.admin-color-ectoplasm {
    --wp-admin-border-width-focus: 1.5px;
  }
}

body.admin-color-midnight {
  --wp-admin-theme-color: #e14d43;
  --wp-admin-theme-color--rgb: 225, 77, 67;
  --wp-admin-theme-color-darker-10: #dd382d;
  --wp-admin-theme-color-darker-10--rgb: 221, 56, 45;
  --wp-admin-theme-color-darker-20: #d02c21;
  --wp-admin-theme-color-darker-20--rgb: 208, 44, 33;
  --wp-admin-border-width-focus: 2px;
}
@media (min-resolution: 192dpi) {
  body.admin-color-midnight {
    --wp-admin-border-width-focus: 1.5px;
  }
}

body.admin-color-ocean {
  --wp-admin-theme-color: #627c83;
  --wp-admin-theme-color--rgb: 98, 124, 131;
  --wp-admin-theme-color-darker-10: #576e74;
  --wp-admin-theme-color-darker-10--rgb: 87, 110, 116;
  --wp-admin-theme-color-darker-20: #4c6066;
  --wp-admin-theme-color-darker-20--rgb: 76, 96, 102;
  --wp-admin-border-width-focus: 2px;
}
@media (min-resolution: 192dpi) {
  body.admin-color-ocean {
    --wp-admin-border-width-focus: 1.5px;
  }
}

body.admin-color-sunrise {
  --wp-admin-theme-color: #dd823b;
  --wp-admin-theme-color--rgb: 221, 130, 59;
  --wp-admin-theme-color-darker-10: #d97426;
  --wp-admin-theme-color-darker-10--rgb: 217, 116, 38;
  --wp-admin-theme-color-darker-20: #c36922;
  --wp-admin-theme-color-darker-20--rgb: 195, 105, 34;
  --wp-admin-border-width-focus: 2px;
}
@media (min-resolution: 192dpi) {
  body.admin-color-sunrise {
    --wp-admin-border-width-focus: 1.5px;
  }
}`,""]);const pt=st}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/@wordpress+block-library@9.30.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/block-library/build-style/editor.css":((Nt,ue,V)=>{V.d(ue,{A:()=>Rt});var nt=V("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),X=V.n(nt),re=V("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),Ke=V.n(re),st=V("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/getUrl.js"),pt=V.n(st),rt=new URL(V("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAADtgAAAAoBAMAAAA86gLBAAAAJFBMVEVMaXG7u7vBwcHDw8POzs68vLzGxsbMzMy+vr7AwMDQ0NDGxsYKLGzpAAAADHRSTlMA///zWf+/f///TMxNVGuqAAABwklEQVR4Ae3dMXLaQBTH4bfj8UCpx8hq0vgKvgFNemhT6Qo6gg6R+0ZahM2QLmyBJ99XWP9V5+o3jIUcLQEAAAAAAAAAAAAAAAAAAAAAAABQ8j0WL9lfTtlt18uNXAUA8O/KVtfa1tdcrOdSh9gCQAMlh1hMNbZZ1bsrsQWABsrhLRbz7z5in/32UbfUMUbkMQCAh5RfGYv82UdMdZ6HS2wjT2ILAI8r3XmM2B3WvM59vfO2xXYW2yYAENuPU8S+X/N67mKxzy225yaxBQCxLV392UdcvwV0jPVUj98ntkBWT7C7+9u2/V/vGtvXIWJ6/4rtbottWa6Ri0NUT/u72LYttrb97LHdvUXMxxrb8TO2W2TF1rYbbLG1bbGNjMi4+2Sbi1FsbbvNFlvbFtt5fDnE3d9sP1/XeIyV2Nr2U2/guZUuptNrH/dPI9eLB6SaAEBs6wPJf3/PNk9tYgsAYrv/8TFuzx/fvkFqGtrEFgDEdpcZUb7ejXy6ntrEFgDENvL6gsas4vbdyKt4DACI7TxElJv/Z7udpqFNbAFAbKduy2uU2trttM/x28UWAAAAAAAAAAAAAAAAAAAAAAAAAADgDyPwGmGTCZp7AAAAAElFTkSuQmCC"),V.b),Et=Ke()(X()),p=pt()(rt);Et.push([Nt.id,`/**
 * Colors
 */
/**
 * Breakpoints & Media Queries
 */
/**
 * Colors
 */
/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
/**
 * Colors
 */
/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
/**
 * Breakpoints & Media Queries
 */
/**
*  Converts a hex value into the rgb equivalent.
*
* @param {string} hex - the hexadecimal value to convert
* @return {string} comma separated rgb values
*/
/**
 * Long content fade mixin
 *
 * Creates a fading overlay to signify that the content is longer
 * than the space allows.
 */
/**
 * Typography
 */
/**
 * Breakpoint mixins
 */
/**
 * Focus styles.
 */
/**
 * Applies editor left position to the selector passed as argument
 */
/**
 * Styles that are reused verbatim in a few places
 */
/**
 * Allows users to opt-out of animations via OS-level preferences.
 */
/**
 * Reset default styles for JavaScript UI based pages.
 * This is a WP-admin agnostic reset
 */
/**
 * Reset the WP Admin page styles for Gutenberg-like pages.
 */
.wp-block-archives .wp-block-archives {
  margin: 0;
  border: 0;
}

.wp-block-audio {
  margin-left: 0;
  margin-right: 0;
  position: relative;
}
.wp-block-audio.is-transient audio {
  opacity: 0.3;
}
.wp-block-audio .components-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -9px;
  margin-left: -9px;
}

.wp-block-avatar__image img {
  width: 100%;
}

.wp-block-avatar.aligncenter .components-resizable-box__container {
  margin: 0 auto;
}

.wp-block[data-align=center] > .wp-block-button {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.wp-block[data-align=right] > .wp-block-button {
  /*!rtl:ignore*/
  text-align: right;
}

.wp-block-button {
  position: relative;
  cursor: text;
}
.wp-block-button:focus {
  box-shadow: 0 0 0 1px #fff, 0 0 0 3px var(--wp-admin-theme-color);
  outline: 2px solid transparent;
  outline-offset: -2px;
}
.wp-block-button[data-rich-text-placeholder]::after {
  opacity: 0.8;
}

div[data-type="core/button"] {
  display: table;
}

.wp-block-buttons {
  /* stylelint-disable @stylistic/indentation -- Disable the stylelint rule, otherwise this selector is ugly! */
}
.wp-block-buttons > .wp-block {
  margin: 0;
}
.wp-block-buttons > .wp-block-button.wp-block-button.wp-block-button.wp-block-button.wp-block-button {
  margin: 0;
}
.wp-block-buttons > .block-list-appender {
  display: inline-flex;
  align-items: center;
}
.wp-block-buttons.is-vertical > .block-list-appender .block-list-appender__toggle {
  justify-content: flex-start;
}
.wp-block-buttons > .wp-block-button:focus {
  box-shadow: none;
}
.wp-block-buttons:not(.is-content-justification-space-between,
.is-content-justification-right,
.is-content-justification-left,
.is-content-justification-center) .wp-block[data-align=center] {
  /* stylelint-enable @stylistic/indentation */
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  width: 100%;
}
.wp-block-buttons:not(.is-content-justification-space-between,
.is-content-justification-right,
.is-content-justification-left,
.is-content-justification-center) .wp-block[data-align=center] .wp-block-button {
  margin-bottom: 0;
}

.wp-block[data-align=center] > .wp-block-buttons {
  align-items: center;
  justify-content: center;
}

.wp-block[data-align=right] > .wp-block-buttons {
  justify-content: flex-end;
}

.wp-block-categories ul {
  padding-left: 2.5em;
}
.wp-block-categories ul ul {
  margin-top: 6px;
}

/* Center alignment for classic themes. */
[data-align=center] .wp-block-categories {
  text-align: center;
}

.wp-block-categories__indentation {
  padding-left: 16px;
}

.wp-block-code code {
  background: none;
}

.wp-block-columns :where(.wp-block) {
  max-width: none;
  margin-left: 0;
  margin-right: 0;
}

html :where(.wp-block-column) {
  margin-top: 0;
  margin-bottom: 0;
}

/* Styles for backwards compatibility with the legacy \`post-comments\` block */
.wp-block-post-comments, .wp-block-comments__legacy-placeholder {
  box-sizing: border-box;
  /* utility classes */
  /* end utility classes */
}
.wp-block-post-comments .alignleft, .wp-block-comments__legacy-placeholder .alignleft {
  float: left;
}
.wp-block-post-comments .alignright, .wp-block-comments__legacy-placeholder .alignright {
  float: right;
}
.wp-block-post-comments .navigation::after, .wp-block-comments__legacy-placeholder .navigation::after {
  content: "";
  display: table;
  clear: both;
}
.wp-block-post-comments .commentlist, .wp-block-comments__legacy-placeholder .commentlist {
  clear: both;
  list-style: none;
  margin: 0;
  padding: 0;
}
.wp-block-post-comments .commentlist .comment, .wp-block-comments__legacy-placeholder .commentlist .comment {
  min-height: 2.25em;
  padding-left: 3.25em;
}
.wp-block-post-comments .commentlist .comment p, .wp-block-comments__legacy-placeholder .commentlist .comment p {
  font-size: 1em;
  line-height: 1.8;
  margin: 1em 0;
}
.wp-block-post-comments .commentlist .children, .wp-block-comments__legacy-placeholder .commentlist .children {
  list-style: none;
  margin: 0;
  padding: 0;
}
.wp-block-post-comments .comment-author, .wp-block-comments__legacy-placeholder .comment-author {
  line-height: 1.5;
}
.wp-block-post-comments .comment-author .avatar, .wp-block-comments__legacy-placeholder .comment-author .avatar {
  border-radius: 1.5em;
  display: block;
  float: left;
  height: 2.5em;
  margin-top: 0.5em;
  margin-right: 0.75em;
  width: 2.5em;
}
.wp-block-post-comments .comment-author cite, .wp-block-comments__legacy-placeholder .comment-author cite {
  font-style: normal;
}
.wp-block-post-comments .comment-meta, .wp-block-comments__legacy-placeholder .comment-meta {
  font-size: 0.875em;
  line-height: 1.5;
}
.wp-block-post-comments .comment-meta b, .wp-block-comments__legacy-placeholder .comment-meta b {
  font-weight: normal;
}
.wp-block-post-comments .comment-meta .comment-awaiting-moderation, .wp-block-comments__legacy-placeholder .comment-meta .comment-awaiting-moderation {
  margin-top: 1em;
  margin-bottom: 1em;
  display: block;
}
.wp-block-post-comments .comment-body .commentmetadata, .wp-block-comments__legacy-placeholder .comment-body .commentmetadata {
  font-size: 0.875em;
}
.wp-block-post-comments .comment-form-comment label, .wp-block-comments__legacy-placeholder .comment-form-comment label,
.wp-block-post-comments .comment-form-author label,
.wp-block-comments__legacy-placeholder .comment-form-author label,
.wp-block-post-comments .comment-form-email label,
.wp-block-comments__legacy-placeholder .comment-form-email label,
.wp-block-post-comments .comment-form-url label,
.wp-block-comments__legacy-placeholder .comment-form-url label {
  display: block;
  margin-bottom: 0.25em;
}
.wp-block-post-comments .comment-form textarea, .wp-block-comments__legacy-placeholder .comment-form textarea,
.wp-block-post-comments .comment-form input:not([type=submit]):not([type=checkbox]),
.wp-block-comments__legacy-placeholder .comment-form input:not([type=submit]):not([type=checkbox]) {
  display: block;
  box-sizing: border-box;
  width: 100%;
}
.wp-block-post-comments .comment-form-cookies-consent, .wp-block-comments__legacy-placeholder .comment-form-cookies-consent {
  display: flex;
  gap: 0.25em;
}
.wp-block-post-comments .comment-form-cookies-consent #wp-comment-cookies-consent, .wp-block-comments__legacy-placeholder .comment-form-cookies-consent #wp-comment-cookies-consent {
  margin-top: 0.35em;
}
.wp-block-post-comments .comment-reply-title, .wp-block-comments__legacy-placeholder .comment-reply-title {
  margin-bottom: 0;
}
.wp-block-post-comments .comment-reply-title :where(small), .wp-block-comments__legacy-placeholder .comment-reply-title :where(small) {
  font-size: var(--wp--preset--font-size--medium, smaller);
  margin-left: 0.5em;
}
.wp-block-post-comments .reply, .wp-block-comments__legacy-placeholder .reply {
  font-size: 0.875em;
  margin-bottom: 1.4em;
}
.wp-block-post-comments textarea, .wp-block-comments__legacy-placeholder textarea,
.wp-block-post-comments input:not([type=submit]),
.wp-block-comments__legacy-placeholder input:not([type=submit]) {
  border: 1px solid #949494;
  font-size: 1em;
  font-family: inherit;
}
.wp-block-post-comments textarea, .wp-block-comments__legacy-placeholder textarea,
.wp-block-post-comments input:not([type=submit]):not([type=checkbox]),
.wp-block-comments__legacy-placeholder input:not([type=submit]):not([type=checkbox]) {
  padding: calc(0.667em + 2px);
}

:where(.wp-block-post-comments input[type=submit], .wp-block-comments__legacy-placeholder input[type=submit]) {
  border: none;
}

.wp-block-comments {
  box-sizing: border-box;
}

.block-library-comments-toolbar__popover .components-popover__content {
  min-width: 230px;
}

.wp-block-comments__legacy-placeholder * {
  pointer-events: none;
}

.wp-block-comment-author-avatar__placeholder {
  border: currentColor 1px dashed;
  width: 100%;
  height: 100%;
  stroke: currentColor;
  stroke-dasharray: 3;
}

.wp-block[data-align=center] > .wp-block-comments-pagination {
  justify-content: center;
}

:where(.editor-styles-wrapper) .wp-block-comments-pagination {
  max-width: 100%;
}

.wp-block-comments-pagination > .wp-block-comments-pagination-next,
.wp-block-comments-pagination > .wp-block-comments-pagination-previous,
.wp-block-comments-pagination > .wp-block-comments-pagination-numbers {
  font-size: inherit;
}

.wp-block-comments-pagination-numbers a {
  text-decoration: underline;
}
.wp-block-comments-pagination-numbers .page-numbers {
  margin-right: 2px;
}
.wp-block-comments-pagination-numbers .page-numbers:last-child {
  /*rtl:ignore*/
  margin-right: 0;
}

.wp-block-comments-title.has-background {
  padding: inherit;
}

.wp-block-cover.is-placeholder {
  padding: 0 !important;
  display: flex;
  align-items: stretch;
  min-height: 240px;
}
.wp-block-cover.is-placeholder .components-placeholder.is-large {
  justify-content: flex-start;
  z-index: 1;
}
.wp-block-cover.is-placeholder:focus::after {
  min-height: auto;
}
.wp-block-cover.components-placeholder h2 {
  color: inherit;
}
.wp-block-cover.is-transient {
  position: relative;
}
.wp-block-cover.is-transient::before {
  background-color: #fff;
  content: "";
  height: 100%;
  opacity: 0.3;
  position: absolute;
  width: 100%;
  z-index: 1;
}
.wp-block-cover.is-transient .wp-block-cover__inner-container {
  z-index: 2;
}
.wp-block-cover .components-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
}
.wp-block-cover .wp-block-cover__inner-container {
  text-align: left;
  margin-left: 0;
  margin-right: 0;
}
.wp-block-cover .wp-block-cover__placeholder-background-options {
  width: 100%;
}
.wp-block-cover .wp-block-cover__image--placeholder-image {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

[data-align=left] > .wp-block-cover,
[data-align=right] > .wp-block-cover {
  max-width: 420px;
  width: 100%;
}

.block-library-cover__reset-button {
  margin-left: auto;
}

.block-library-cover__resize-container {
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 50px;
}

.components-popover.block-editor-block-popover.block-library-cover__resizable-box-popover .components-popover__content > div,
.components-popover.block-editor-block-popover.block-library-cover__resizable-box-popover .block-library-cover__resize-container {
  pointer-events: none;
  overflow: visible;
}

.block-editor-block-patterns-list__list-item .has-parallax.wp-block-cover {
  background-attachment: scroll;
}

.color-block-support-panel__inner-wrapper > :not(.block-editor-tools-panel-color-gradient-settings__item) {
  margin-top: 24px;
}

.wp-block-details summary div {
  display: inline;
}

.wp-block-embed {
  margin-left: 0;
  margin-right: 0;
  clear: both;
}
.wp-block-embed.is-loading {
  display: flex;
  justify-content: center;
}
.wp-block-embed .wp-block-embed__placeholder-input {
  flex: 1 1 auto;
}
.wp-block-embed .components-placeholder__error {
  word-break: break-word;
}

.wp-block-post-content .wp-block-embed__learn-more a {
  color: var(--wp-admin-theme-color);
}

.block-library-embed__interactive-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
}

.wp-block[data-align=left] > .wp-block-embed,
.wp-block[data-align=right] > .wp-block-embed {
  max-width: 360px;
  width: 100%;
}
.wp-block[data-align=left] > .wp-block-embed .wp-block-embed__wrapper,
.wp-block[data-align=right] > .wp-block-embed .wp-block-embed__wrapper {
  min-width: 280px;
}

.wp-block-file {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
}
.wp-block[data-align=left] > .wp-block-file, .wp-block[data-align=right] > .wp-block-file {
  height: auto;
}
.wp-block[data-align=center] > .wp-block-file {
  text-align: center;
}
.wp-block-file .components-resizable-box__container {
  margin-bottom: 1em;
}
.wp-block-file .wp-block-file__preview {
  margin-bottom: 1em;
  width: 100%;
  height: 100%;
}
.wp-block-file .wp-block-file__preview-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.wp-block-file .wp-block-file__content-wrapper {
  flex-grow: 1;
}
.wp-block-file a {
  min-width: 1em;
}
.wp-block-file a:not(.wp-block-file__button) {
  display: inline-block;
}
.wp-block-file .wp-block-file__button-richtext-wrapper {
  display: inline-block;
  margin-left: 0.75em;
}

.wp-block-form-input .is-input-hidden {
  font-size: 0.85em;
  opacity: 0.3;
  border: 1px dashed;
  padding: 0.5em;
  box-sizing: border-box;
  background: repeating-linear-gradient(45deg, transparent, transparent 5px, currentColor 5px, currentColor 6px);
}
.wp-block-form-input .is-input-hidden input[type=text] {
  background: transparent;
}
.wp-block-form-input.is-selected .is-input-hidden {
  opacity: 1;
  background: none;
}
.wp-block-form-input.is-selected .is-input-hidden input[type=text] {
  background: unset;
}

.wp-block-form-submission-notification > * {
  opacity: 0.25;
  border: 1px dashed;
  box-sizing: border-box;
  background: repeating-linear-gradient(45deg, transparent, transparent 5px, currentColor 5px, currentColor 6px);
}
.wp-block-form-submission-notification.is-selected > *, .wp-block-form-submission-notification:has(.is-selected) > * {
  opacity: 1;
  background: none;
}
.wp-block-form-submission-notification.is-selected::after, .wp-block-form-submission-notification:has(.is-selected)::after {
  display: none !important;
}
.wp-block-form-submission-notification::after {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  font-size: 1.1em;
}
.wp-block-form-submission-notification.form-notification-type-success::after {
  content: attr(data-message-success);
}
.wp-block-form-submission-notification.form-notification-type-error::after {
  content: attr(data-message-error);
}

.wp-block-freeform.block-library-rich-text__tinymce {
  height: auto; /* Allow height of embed iframes to be calculated properly */
  /* Remove blue highlighting of selected images in WebKit */
  /* Image captions */
  /* WP Views */
}
.wp-block-freeform.block-library-rich-text__tinymce p,
.wp-block-freeform.block-library-rich-text__tinymce li {
  line-height: 1.8;
}
.wp-block-freeform.block-library-rich-text__tinymce ul,
.wp-block-freeform.block-library-rich-text__tinymce ol {
  padding-left: 2.5em;
  margin-left: 0;
}
.wp-block-freeform.block-library-rich-text__tinymce blockquote {
  margin: 0;
  box-shadow: inset 0 0 0 0 #ddd;
  border-left: 4px solid #000;
  padding-left: 1em;
}
.wp-block-freeform.block-library-rich-text__tinymce pre {
  white-space: pre-wrap;
  font-family: Menlo, Consolas, monaco, monospace;
  font-size: 15px;
  color: #1e1e1e;
}
.wp-block-freeform.block-library-rich-text__tinymce > *:first-child {
  margin-top: 0;
}
.wp-block-freeform.block-library-rich-text__tinymce > *:last-child {
  margin-bottom: 0;
}
.wp-block-freeform.block-library-rich-text__tinymce.mce-edit-focus {
  outline: none;
}
.wp-block-freeform.block-library-rich-text__tinymce a {
  color: var(--wp-admin-theme-color);
}
.wp-block-freeform.block-library-rich-text__tinymce:focus a[data-mce-selected] {
  padding: 0 2px;
  margin: 0 -2px;
  border-radius: 2px;
  box-shadow: 0 0 0 1px #e5f5fa;
  background: #e5f5fa;
}
.wp-block-freeform.block-library-rich-text__tinymce code {
  padding: 2px;
  border-radius: 2px;
  color: #1e1e1e;
  background: #f0f0f0;
  font-family: Menlo, Consolas, monaco, monospace;
  font-size: 14px;
}
.wp-block-freeform.block-library-rich-text__tinymce:focus code[data-mce-selected] {
  background: #ddd;
}
.wp-block-freeform.block-library-rich-text__tinymce .alignright {
  /*rtl:ignore*/
  float: right;
  /*rtl:ignore*/
  margin: 0.5em 0 0.5em 1em;
}
.wp-block-freeform.block-library-rich-text__tinymce .alignleft {
  /*rtl:ignore*/
  float: left;
  /*rtl:ignore*/
  margin: 0.5em 1em 0.5em 0;
}
.wp-block-freeform.block-library-rich-text__tinymce .aligncenter {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.wp-block-freeform.block-library-rich-text__tinymce .wp-more-tag {
  width: 96%;
  height: 20px;
  display: block;
  margin: 15px auto;
  outline: 0;
  cursor: default;
  background-image: url(${p});
  background-size: 1900px 20px;
  background-repeat: no-repeat;
  background-position: center;
}
.wp-block-freeform.block-library-rich-text__tinymce img::selection {
  background-color: transparent;
}
.wp-block-freeform.block-library-rich-text__tinymce div.mceTemp {
  -ms-user-select: element;
}
.wp-block-freeform.block-library-rich-text__tinymce dl.wp-caption {
  margin: 0; /* dl browser reset */
  max-width: 100%;
}
.wp-block-freeform.block-library-rich-text__tinymce dl.wp-caption a,
.wp-block-freeform.block-library-rich-text__tinymce dl.wp-caption img {
  display: block;
}
.wp-block-freeform.block-library-rich-text__tinymce dl.wp-caption, .wp-block-freeform.block-library-rich-text__tinymce dl.wp-caption * {
  -webkit-user-drag: none;
}
.wp-block-freeform.block-library-rich-text__tinymce dl.wp-caption .wp-caption-dd {
  padding-top: 0.5em;
  margin: 0; /* browser dd reset */
}
.wp-block-freeform.block-library-rich-text__tinymce .wpview {
  width: 99.99%; /* All IE need hasLayout, incl. 11 (ugh, not again!!) */
  position: relative;
  clear: both;
  margin-bottom: 16px;
  border: 1px solid transparent;
}
.wp-block-freeform.block-library-rich-text__tinymce .wpview iframe {
  display: block;
  max-width: 100%;
  background: transparent;
}
.wp-block-freeform.block-library-rich-text__tinymce .wpview .mce-shim {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.wp-block-freeform.block-library-rich-text__tinymce .wpview[data-mce-selected="2"] .mce-shim {
  display: none;
}
.wp-block-freeform.block-library-rich-text__tinymce .wpview .loading-placeholder {
  border: 1px dashed #ddd;
  padding: 10px;
}
.wp-block-freeform.block-library-rich-text__tinymce .wpview .wpview-error {
  border: 1px solid #ddd;
  padding: 1em 0;
  margin: 0;
  word-wrap: break-word;
}
.wp-block-freeform.block-library-rich-text__tinymce .wpview .wpview-error p {
  margin: 0;
  text-align: center;
}
.wp-block-freeform.block-library-rich-text__tinymce .wpview[data-mce-selected] .loading-placeholder, .wp-block-freeform.block-library-rich-text__tinymce .wpview[data-mce-selected] .wpview-error {
  border-color: transparent;
}
.wp-block-freeform.block-library-rich-text__tinymce .wpview .dashicons {
  display: block;
  margin: 0 auto;
  width: 32px;
  height: 32px;
  font-size: 32px;
}
.wp-block-freeform.block-library-rich-text__tinymce .wpview.wpview-type-gallery::after {
  content: "";
  display: table;
  clear: both;
}
.wp-block-freeform.block-library-rich-text__tinymce .gallery img[data-mce-selected]:focus {
  outline: none;
}
.wp-block-freeform.block-library-rich-text__tinymce .gallery a {
  cursor: default;
}
.wp-block-freeform.block-library-rich-text__tinymce .gallery {
  margin: auto -6px;
  padding: 6px 0;
  line-height: 1;
  overflow-x: hidden;
}
.wp-block-freeform.block-library-rich-text__tinymce .gallery .gallery-item {
  float: left;
  margin: 0;
  text-align: center;
  padding: 6px;
  box-sizing: border-box;
}
.wp-block-freeform.block-library-rich-text__tinymce .gallery .gallery-caption,
.wp-block-freeform.block-library-rich-text__tinymce .gallery .gallery-icon {
  margin: 0;
}
.wp-block-freeform.block-library-rich-text__tinymce .gallery .gallery-caption {
  font-size: 13px;
  margin: 4px 0;
}
.wp-block-freeform.block-library-rich-text__tinymce .gallery-columns-1 .gallery-item {
  width: 100%;
}
.wp-block-freeform.block-library-rich-text__tinymce .gallery-columns-2 .gallery-item {
  width: 50%;
}
.wp-block-freeform.block-library-rich-text__tinymce .gallery-columns-3 .gallery-item {
  width: 33.3333333333%;
}
.wp-block-freeform.block-library-rich-text__tinymce .gallery-columns-4 .gallery-item {
  width: 25%;
}
.wp-block-freeform.block-library-rich-text__tinymce .gallery-columns-5 .gallery-item {
  width: 20%;
}
.wp-block-freeform.block-library-rich-text__tinymce .gallery-columns-6 .gallery-item {
  width: 16.6666666667%;
}
.wp-block-freeform.block-library-rich-text__tinymce .gallery-columns-7 .gallery-item {
  width: 14.2857142857%;
}
.wp-block-freeform.block-library-rich-text__tinymce .gallery-columns-8 .gallery-item {
  width: 12.5%;
}
.wp-block-freeform.block-library-rich-text__tinymce .gallery-columns-9 .gallery-item {
  width: 11.1111111111%;
}
.wp-block-freeform.block-library-rich-text__tinymce .gallery img {
  max-width: 100%;
  height: auto;
  border: none;
  padding: 0;
}

div[data-type="core/freeform"]::before {
  border: 1px solid #ddd;
  outline: 1px solid transparent;
}
@media not (prefers-reduced-motion) {
  div[data-type="core/freeform"]::before {
    transition: border-color 0.1s linear, box-shadow 0.1s linear;
  }
}
div[data-type="core/freeform"].is-selected::before {
  border-color: #1e1e1e;
}
div[data-type="core/freeform"] .block-editor-block-contextual-toolbar + div {
  margin-top: 0;
  padding-top: 0;
}
div[data-type="core/freeform"].is-selected .block-library-rich-text__tinymce::after {
  content: "";
  display: table;
  clear: both;
}

.mce-toolbar-grp .mce-btn.mce-active button,
.mce-toolbar-grp .mce-btn.mce-active:hover button,
.mce-toolbar-grp .mce-btn.mce-active i,
.mce-toolbar-grp .mce-btn.mce-active:hover i {
  color: #1e1e1e;
}
.mce-toolbar-grp .mce-rtl .mce-flow-layout-item.mce-last {
  margin-right: 0;
  margin-left: 8px;
}
.mce-toolbar-grp .mce-btn i {
  font-style: normal;
}

.block-library-classic__toolbar {
  display: none;
  width: auto;
  margin: 0;
  position: sticky;
  z-index: 31;
  top: 0;
  border: 1px solid #ddd;
  border-bottom: none;
  border-radius: 2px;
  margin-bottom: 8px;
  padding: 0;
}
div[data-type="core/freeform"].is-selected .block-library-classic__toolbar {
  display: block;
  border-color: #1e1e1e;
}
.block-library-classic__toolbar .mce-tinymce {
  box-shadow: none;
}
@media (min-width: 600px) {
  .block-library-classic__toolbar {
    padding: 0;
  }
}
.block-library-classic__toolbar:empty {
  display: block;
  background: #f5f5f5;
  border-bottom: 1px solid #e2e4e7;
}
.block-library-classic__toolbar:empty::before {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 13px;
  content: attr(data-placeholder);
  color: #555d66;
  line-height: 37px;
  padding: 14px;
}
.block-library-classic__toolbar div.mce-toolbar-grp {
  border-bottom: 1px solid #1e1e1e;
}
.block-library-classic__toolbar .mce-tinymce-inline,
.block-library-classic__toolbar .mce-tinymce-inline > div,
.block-library-classic__toolbar div.mce-toolbar-grp,
.block-library-classic__toolbar div.mce-toolbar-grp > div,
.block-library-classic__toolbar .mce-menubar,
.block-library-classic__toolbar .mce-menubar > div {
  height: auto !important;
  width: 100% !important;
}
.block-library-classic__toolbar .mce-container-body.mce-abs-layout {
  overflow: visible;
}
.block-library-classic__toolbar .mce-menubar,
.block-library-classic__toolbar div.mce-toolbar-grp {
  position: static;
}
.block-library-classic__toolbar .mce-toolbar-grp > div {
  padding: 1px 3px;
}
.block-library-classic__toolbar .mce-toolbar-grp .mce-toolbar:not(:first-child) {
  display: none;
}
.block-library-classic__toolbar.has-advanced-toolbar .mce-toolbar-grp .mce-toolbar {
  display: block;
}

.block-editor-freeform-modal .block-editor-freeform-modal__content .mce-edit-area iframe {
  height: 50vh !important;
}
@media (min-width: 960px) {
  .block-editor-freeform-modal .block-editor-freeform-modal__content:not(.is-full-screen) {
    height: 9999rem;
  }
  .block-editor-freeform-modal .block-editor-freeform-modal__content .components-modal__header + div {
    height: 100%;
  }
  .block-editor-freeform-modal .block-editor-freeform-modal__content .mce-tinymce {
    height: calc(100% - 36px - 16px);
  }
  .block-editor-freeform-modal .block-editor-freeform-modal__content .mce-container-body {
    height: 100%;
    display: flex;
    flex-direction: column;
    min-width: 50vw;
  }
  .block-editor-freeform-modal .block-editor-freeform-modal__content .mce-edit-area {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  .block-editor-freeform-modal .block-editor-freeform-modal__content .mce-edit-area iframe {
    flex-grow: 1;
    height: 10px !important;
  }
}
.block-editor-freeform-modal__actions {
  margin-top: 16px;
}

:root :where(figure.wp-block-gallery) {
  display: block;
}
:root :where(figure.wp-block-gallery) > .blocks-gallery-caption {
  flex: 0 0 100%;
}
:root :where(figure.wp-block-gallery) > .blocks-gallery-media-placeholder-wrapper {
  flex-basis: 100%;
}
:root :where(figure.wp-block-gallery) .wp-block-image .components-notice.is-error {
  display: block;
}
:root :where(figure.wp-block-gallery) .wp-block-image .components-notice__content {
  margin: 4px 0;
}
:root :where(figure.wp-block-gallery) .wp-block-image .components-notice__dismiss {
  position: absolute;
  top: 0;
  right: 5px;
}
:root :where(figure.wp-block-gallery) .block-editor-media-placeholder.is-appender .components-placeholder__label {
  display: none;
}
:root :where(figure.wp-block-gallery) .block-editor-media-placeholder.is-appender .block-editor-media-placeholder__button {
  margin-bottom: 0;
}
:root :where(figure.wp-block-gallery) .block-editor-media-placeholder {
  margin: 0;
}
:root :where(figure.wp-block-gallery) .block-editor-media-placeholder .components-placeholder__label {
  display: flex;
}
:root :where(figure.wp-block-gallery) .block-editor-media-placeholder figcaption {
  z-index: 2;
}
:root :where(figure.wp-block-gallery) .components-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -9px;
  margin-left: -9px;
}

/**
 * Gallery inspector controls settings.
 */
.gallery-settings-buttons .components-button:first-child {
  margin-right: 8px;
}

/**
 * Deprecated css past this point. This can be removed once all galleries are migrated
 * to V2.
 */
.blocks-gallery-item figure:not(.is-selected):focus,
.blocks-gallery-item img:focus {
  outline: none;
}
.blocks-gallery-item figure.is-selected::before {
  box-shadow: 0 0 0 1px #fff inset, 0 0 0 3px var(--wp-admin-theme-color) inset;
  content: "";
  outline: 2px solid transparent;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
}
.blocks-gallery-item figure.is-transient img {
  opacity: 0.3;
}
.blocks-gallery-item .block-editor-media-placeholder {
  margin: 0;
  height: 100%;
}
.blocks-gallery-item .block-editor-media-placeholder .components-placeholder__label {
  display: flex;
}

.wp-block-gallery ul.blocks-gallery-grid {
  padding: 0;
  margin: 0;
}

@media (min-width: 600px) {
  .wp-block-update-gallery-modal {
    max-width: 480px;
  }
}

.wp-block-update-gallery-modal-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

/**
 * Group: All Alignment Settings
 */
.wp-block-group .block-editor-block-list__insertion-point {
  left: 0;
  right: 0;
}

[data-type="core/group"].is-selected .block-list-appender {
  margin-left: 0;
  margin-right: 0;
}
[data-type="core/group"].is-selected .has-background .block-list-appender {
  margin-top: 18px;
  margin-bottom: 18px;
}

.wp-block-group.is-layout-flex.block-editor-block-list__block > .block-list-appender:only-child {
  gap: inherit;
  pointer-events: none;
}
.wp-block-group.is-layout-flex.block-editor-block-list__block > .block-list-appender:only-child,
.wp-block-group.is-layout-flex.block-editor-block-list__block > .block-list-appender:only-child .block-editor-default-block-appender__content,
.wp-block-group.is-layout-flex.block-editor-block-list__block > .block-list-appender:only-child .block-editor-inserter {
  display: inherit;
  width: 100%;
  flex-direction: inherit;
  flex: 1;
}
.wp-block-group.is-layout-flex.block-editor-block-list__block > .block-list-appender:only-child::after {
  content: "";
  display: flex;
  flex: 1 0 40px;
  pointer-events: none;
  min-height: 38px;
  border: 1px dashed currentColor;
}
.wp-block-group.is-layout-flex.block-editor-block-list__block > .block-list-appender:only-child .block-editor-inserter,
.wp-block-group.is-layout-flex.block-editor-block-list__block > .block-list-appender:only-child .block-editor-button-block-appender {
  pointer-events: all;
}

.block-library-html__edit .block-library-html__preview-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.block-library-html__edit .block-editor-plain-text {
  display: block;
  box-sizing: border-box;
  max-height: 250px;
  font-family: Menlo, Consolas, monaco, monospace !important;
  color: #1e1e1e !important;
  background: #fff !important;
  padding: 12px !important;
  border: 1px solid #1e1e1e !important;
  box-shadow: none !important;
  border-radius: 2px !important;
  font-size: 16px !important;
  /*rtl:ignore*/
  direction: ltr;
}
@media (min-width: 600px) {
  .block-library-html__edit .block-editor-plain-text {
    font-size: 13px !important;
  }
}
.block-library-html__edit .block-editor-plain-text:focus {
  border-color: var(--wp-admin-theme-color) !important;
  box-shadow: 0 0 0 1px var(--wp-admin-theme-color) !important;
  outline: 2px solid transparent !important;
}

.wp-block-image.wp-block-image .block-editor-media-placeholder.is-small {
  min-height: 60px;
}

figure.wp-block-image:not(.wp-block) {
  margin: 0;
}

.wp-block-image {
  position: relative;
}
.wp-block-image .is-applying img, .wp-block-image.is-transient img {
  opacity: 0.3;
}
.wp-block-image figcaption img {
  display: inline;
}
.wp-block-image .components-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
}

.wp-block-image__placeholder {
  aspect-ratio: 4/3;
}
.wp-block-image__placeholder.has-illustration::before {
  background: #fff;
  opacity: 0.8;
}
.wp-block-image__placeholder .components-placeholder__illustration {
  opacity: 0.1;
}

.block-editor-block-list__block[data-type="core/image"] .block-editor-block-toolbar .block-editor-url-input__button-modal {
  position: absolute;
  left: 0;
  right: 0;
  margin: -1px 0;
}
@media (min-width: 600px) {
  .block-editor-block-list__block[data-type="core/image"] .block-editor-block-toolbar .block-editor-url-input__button-modal {
    margin: -1px;
  }
}

[data-align=wide] > .wp-block-image img,
[data-align=full] > .wp-block-image img {
  height: auto;
  width: 100%;
}

.wp-block[data-align=left] > .wp-block-image,
.wp-block[data-align=center] > .wp-block-image,
.wp-block[data-align=right] > .wp-block-image {
  display: table;
}
.wp-block[data-align=left] > .wp-block-image > figcaption,
.wp-block[data-align=center] > .wp-block-image > figcaption,
.wp-block[data-align=right] > .wp-block-image > figcaption {
  display: table-caption;
  caption-side: bottom;
}

.wp-block[data-align=left] > .wp-block-image {
  margin-right: 1em;
  margin-left: 0;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.wp-block[data-align=right] > .wp-block-image {
  margin-left: 1em;
  margin-right: 0;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.wp-block[data-align=center] > .wp-block-image {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.wp-block[data-align]:has(> .wp-block-image) {
  position: relative;
}

.wp-block-image__crop-area {
  position: relative;
  max-width: 100%;
  width: 100%;
  overflow: hidden;
}
.wp-block-image__crop-area .reactEasyCrop_Container {
  pointer-events: auto;
}
.wp-block-image__crop-area .reactEasyCrop_Container .reactEasyCrop_Image {
  border: none;
  border-radius: 0;
}

.wp-block-image__crop-icon {
  padding: 0 8px;
  min-width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wp-block-image__crop-icon svg {
  fill: currentColor;
}

.wp-block-image__zoom .components-popover__content {
  min-width: 260px;
  overflow: visible !important;
}

.wp-block-image__toolbar_content_textarea__container {
  padding: 8px;
}

.wp-block-image__toolbar_content_textarea {
  width: 250px;
}

.wp-block-latest-posts > li {
  overflow: hidden;
}

.wp-block-latest-posts li a > div {
  display: inline;
}

:root :where(.wp-block-latest-posts) {
  padding-left: 2.5em;
}

:root :where(.wp-block-latest-posts.is-grid),
:root :where(.wp-block-latest-posts__list) {
  padding-left: 0;
}

.wp-block-media-text__media {
  position: relative;
}
.wp-block-media-text__media.is-transient img {
  opacity: 0.3;
}
.wp-block-media-text__media .components-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -9px;
  margin-left: -9px;
}

.wp-block-media-text .__resizable_base__ {
  grid-column: 1/span 2;
  grid-row: 2;
}

.wp-block-media-text .editor-media-container__resizer {
  width: 100% !important;
}

.wp-block-media-text.is-image-fill .editor-media-container__resizer,
.wp-block-media-text.is-image-fill .components-placeholder.has-illustration,
.wp-block-media-text.is-image-fill-element .editor-media-container__resizer,
.wp-block-media-text.is-image-fill-element .components-placeholder.has-illustration {
  height: 100% !important;
}

.wp-block-media-text > .block-editor-block-list__layout > .block-editor-block-list__block {
  max-width: unset;
}

/* Make the featured image placeholder the same height as the media selection area. */
.wp-block-media-text--placeholder-image {
  min-height: 205px;
}

.block-editor-block-list__block[data-type="core/more"] {
  max-width: 100%;
  text-align: center;
  margin-top: 28px;
  margin-bottom: 28px;
}

.wp-block-more {
  display: block;
  text-align: center;
  white-space: nowrap;
}
.wp-block-more .rich-text {
  position: relative;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  color: #757575;
  display: inline-flex;
  white-space: nowrap;
  text-align: center;
  background: #fff;
  padding: 10px 36px;
}
.wp-block-more::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  border-top: 3px dashed #ccc;
}

/**
 * Editor only CSS.
 */
.editor-styles-wrapper .wp-block-navigation ul {
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
  padding-left: 0;
}
.editor-styles-wrapper .wp-block-navigation .wp-block-navigation-item.wp-block {
  margin: revert;
}

.wp-block-navigation-item__label {
  display: inline;
}

/**
 * Submenus.
 */
.wp-block-navigation__container,
.wp-block-navigation-item {
  background-color: inherit;
}

.wp-block-navigation:not(.is-selected):not(.has-child-selected) .has-child:hover > .wp-block-navigation__submenu-container {
  opacity: 0;
  visibility: hidden;
}

.has-child.is-selected > .wp-block-navigation__submenu-container, .has-child.has-child-selected > .wp-block-navigation__submenu-container {
  display: flex;
  opacity: 1;
  visibility: visible;
}

.is-dragging-components-draggable .has-child.is-dragging-within > .wp-block-navigation__submenu-container {
  opacity: 1;
  visibility: visible;
}

.is-editing > .wp-block-navigation__container {
  visibility: visible;
  opacity: 1;
  display: flex;
  flex-direction: column;
}

.is-dragging-components-draggable .wp-block-navigation-link > .wp-block-navigation__container {
  opacity: 1;
  visibility: hidden;
}
.is-dragging-components-draggable .wp-block-navigation-link > .wp-block-navigation__container .block-editor-block-draggable-chip-wrapper {
  visibility: visible;
}

.is-editing > .wp-block-navigation__submenu-container > .block-list-appender {
  display: block;
  position: static;
  width: 100%;
}
.is-editing > .wp-block-navigation__submenu-container > .block-list-appender .block-editor-button-block-appender {
  color: #fff;
  background: #1e1e1e;
  padding: 0;
  width: 24px;
  margin-right: 0;
  margin-left: auto;
}

.wp-block-navigation__submenu-container .block-list-appender {
  display: none;
}

/**
 * Colors Selector component
 */
.block-library-colors-selector {
  width: auto;
}
.block-library-colors-selector .block-library-colors-selector__toggle {
  display: block;
  margin: 0 auto;
  padding: 3px;
  width: auto;
}
.block-library-colors-selector .block-library-colors-selector__icon-container {
  height: 30px;
  position: relative;
  margin: 0 auto;
  padding: 3px;
  display: flex;
  align-items: center;
  border-radius: 4px;
}
.block-library-colors-selector .block-library-colors-selector__state-selection {
  margin-left: auto;
  margin-right: auto;
  border-radius: 11px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
  width: 22px;
  min-width: 22px;
  height: 22px;
  min-height: 22px;
  line-height: 20px;
  padding: 2px;
}
.block-library-colors-selector .block-library-colors-selector__state-selection > svg {
  min-width: auto !important;
}
.block-library-colors-selector .block-library-colors-selector__state-selection.has-text-color > svg,
.block-library-colors-selector .block-library-colors-selector__state-selection.has-text-color > svg path {
  color: inherit;
}

.block-library-colors-selector__popover .color-palette-controller-container {
  padding: 16px;
}
.block-library-colors-selector__popover .components-base-control__label {
  height: 20px;
  line-height: 20px;
}
.block-library-colors-selector__popover .component-color-indicator {
  float: right;
  margin-top: 2px;
}
.block-library-colors-selector__popover .components-panel__body-title {
  display: none;
}

.wp-block-navigation .wp-block + .block-list-appender .block-editor-button-block-appender {
  background-color: #1e1e1e;
  color: #fff;
  height: 24px;
}
.wp-block-navigation .wp-block + .block-list-appender .block-editor-button-block-appender.block-editor-button-block-appender.block-editor-button-block-appender {
  padding: 0;
}

.wp-block-navigation .wp-block .wp-block .block-editor-button-block-appender {
  background-color: transparent;
  color: #1e1e1e;
}

/**
 * Setup state
 */
@keyframes loadingpulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.components-placeholder.wp-block-navigation-placeholder {
  outline: none;
  padding: 0;
  box-shadow: none;
  background: none;
  min-height: 0;
  color: inherit;
}
.components-placeholder.wp-block-navigation-placeholder .components-placeholder__fieldset {
  font-size: inherit;
}
.components-placeholder.wp-block-navigation-placeholder .components-placeholder__fieldset .components-button {
  margin-bottom: 0;
}
.wp-block-navigation.is-selected .components-placeholder.wp-block-navigation-placeholder {
  color: #1e1e1e;
}

.wp-block-navigation-placeholder__preview {
  display: flex;
  align-items: center;
  min-width: 96px;
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  color: currentColor;
  background: transparent;
}
.wp-block-navigation.is-selected .wp-block-navigation-placeholder__preview {
  display: none;
}
.wp-block-navigation-placeholder__preview::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  border: 1px dashed currentColor;
  border-radius: inherit;
}
.wp-block-navigation-placeholder__preview > svg {
  fill: currentColor;
}

.wp-block-navigation.is-vertical .is-small .components-placeholder__fieldset,
.wp-block-navigation.is-vertical .is-medium .components-placeholder__fieldset {
  min-height: 90px;
}

.wp-block-navigation.is-vertical .is-large .components-placeholder__fieldset {
  min-height: 132px;
}

.wp-block-navigation-placeholder__preview,
.wp-block-navigation-placeholder__controls {
  padding: 6px 8px;
  flex-direction: row;
  align-items: flex-start;
}

.wp-block-navigation-placeholder__controls {
  border-radius: 2px;
  background-color: #fff;
  box-shadow: inset 0 0 0 1px #1e1e1e;
  display: none;
  position: relative;
  z-index: 1;
  float: left;
  width: 100%;
}
.wp-block-navigation.is-selected .wp-block-navigation-placeholder__controls {
  display: flex;
}
.is-small .wp-block-navigation-placeholder__controls .wp-block-navigation-placeholder__actions__indicator,
.is-small .wp-block-navigation-placeholder__controls .wp-block-navigation-placeholder__actions__indicator + hr, .is-medium .wp-block-navigation-placeholder__controls .wp-block-navigation-placeholder__actions__indicator,
.is-medium .wp-block-navigation-placeholder__controls .wp-block-navigation-placeholder__actions__indicator + hr {
  display: none;
}
.is-small .wp-block-navigation-placeholder__controls .wp-block-navigation-placeholder__actions, .wp-block-navigation.is-vertical .wp-block-navigation-placeholder__controls .wp-block-navigation-placeholder__actions {
  flex-direction: column;
  align-items: flex-start;
}
.is-small .wp-block-navigation-placeholder__controls .wp-block-navigation-placeholder__actions hr, .wp-block-navigation.is-vertical .wp-block-navigation-placeholder__controls .wp-block-navigation-placeholder__actions hr {
  display: none;
}
.wp-block-navigation-placeholder__controls .wp-block-navigation-placeholder__icon {
  margin-right: 12px;
  height: 36px;
}

.wp-block-navigation-placeholder__actions__indicator {
  display: flex;
  padding: 0 6px 0 0;
  align-items: center;
  justify-content: flex-start;
  line-height: 0;
  height: 36px;
  margin-left: 4px;
}
.wp-block-navigation-placeholder__actions__indicator svg {
  margin-right: 4px;
  fill: currentColor;
}

.wp-block-navigation .components-placeholder.is-medium .components-placeholder__fieldset {
  flex-direction: row !important;
}

.wp-block-navigation-placeholder__actions {
  display: flex;
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  gap: 6px;
  align-items: center;
  height: 100%;
}
.wp-block-navigation-placeholder__actions .components-dropdown,
.wp-block-navigation-placeholder__actions > .components-button {
  margin-right: 0;
}
.wp-block-navigation-placeholder__actions.wp-block-navigation-placeholder__actions hr {
  border: 0;
  min-height: 1px;
  min-width: 1px;
  background-color: #1e1e1e;
  margin: auto 0;
  height: 100%;
  max-height: 16px;
}

/**
 * Mobile menu.
 */
@media (min-width: 600px) {
  .wp-block-navigation__responsive-container:not(.is-menu-open) .components-button.wp-block-navigation__responsive-container-close {
    display: none;
  }
}

.wp-block-navigation__responsive-container.is-menu-open {
  position: fixed;
  top: 159px;
}
@media (min-width: 782px) {
  .wp-block-navigation__responsive-container.is-menu-open {
    top: 97px;
  }
}
@media (min-width: 782px) {
  .wp-block-navigation__responsive-container.is-menu-open {
    left: 36px;
  }
}
@media (min-width: 960px) {
  .wp-block-navigation__responsive-container.is-menu-open {
    left: 160px;
  }
}

.is-mobile-preview .wp-block-navigation__responsive-container.is-menu-open,
.is-tablet-preview .wp-block-navigation__responsive-container.is-menu-open {
  top: 145px;
}

.is-fullscreen-mode .wp-block-navigation__responsive-container.is-menu-open {
  left: 0;
  top: 159px;
}
@media (min-width: 782px) {
  .is-fullscreen-mode .wp-block-navigation__responsive-container.is-menu-open {
    top: 65px;
  }
}
.is-fullscreen-mode .is-mobile-preview .wp-block-navigation__responsive-container.is-menu-open,
.is-fullscreen-mode .is-tablet-preview .wp-block-navigation__responsive-container.is-menu-open {
  top: 113px;
}

body.editor-styles-wrapper .wp-block-navigation__responsive-container.is-menu-open {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.components-button.wp-block-navigation__responsive-container-open.wp-block-navigation__responsive-container-open,
.components-button.wp-block-navigation__responsive-container-close.wp-block-navigation__responsive-container-close {
  padding: 0;
  height: auto;
  color: inherit;
}

.components-heading.wp-block-navigation-off-canvas-editor__title {
  margin: 0;
}

.wp-block-navigation-off-canvas-editor__header {
  margin-bottom: 8px;
}

.is-menu-open .wp-block-navigation__responsive-container-content * .block-list-appender {
  margin-top: 16px;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.wp-block-navigation__loading-indicator-container {
  padding: 8px 12px;
}

.wp-block-navigation .wp-block-navigation__uncontrolled-inner-blocks-loading-indicator {
  margin-top: 0;
}

@keyframes fadeouthalf {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}
.wp-block-navigation-delete-menu-button {
  width: 100%;
  justify-content: center;
  margin-bottom: 16px;
}

.components-button.is-link.wp-block-navigation-manage-menus-button {
  margin-bottom: 16px;
}

.wp-block-navigation__overlay-menu-preview {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #f0f0f0;
  padding: 0 24px;
  height: 64px !important;
  grid-column: span 2;
}
.wp-block-navigation__overlay-menu-preview.open {
  box-shadow: inset 0 0 0 1px #e0e0e0;
  outline: 1px solid transparent;
  background-color: #fff;
}

.wp-block-navigation__toolbar-menu-selector.components-toolbar-group:empty {
  display: none;
}

.wp-block-navigation-placeholder__actions hr + hr {
  display: none;
}

/**
 * Navigation selector styles
 */
.wp-block-navigation__navigation-selector {
  margin-bottom: 16px;
  width: 100%;
}

.wp-block-navigation__navigation-selector-button {
  border: 1px solid;
  justify-content: space-between;
  width: 100%;
}

.wp-block-navigation__navigation-selector-button__icon {
  flex: 0 0 auto;
}

.wp-block-navigation__navigation-selector-button__label {
  flex: 0 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wp-block-navigation__navigation-selector-button--createnew {
  border: 1px solid;
  margin-bottom: 16px;
  width: 100%;
}

.wp-block-navigation__responsive-container-open.components-button {
  opacity: 1;
}

.wp-block-navigation__menu-inspector-controls {
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-gutter: stable both-edges;
  scrollbar-color: transparent transparent;
  will-change: transform;
}
.wp-block-navigation__menu-inspector-controls::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}
.wp-block-navigation__menu-inspector-controls::-webkit-scrollbar-track {
  background-color: transparent;
}
.wp-block-navigation__menu-inspector-controls::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 8px;
  border: 3px solid transparent;
  background-clip: padding-box;
}
.wp-block-navigation__menu-inspector-controls:hover::-webkit-scrollbar-thumb, .wp-block-navigation__menu-inspector-controls:focus::-webkit-scrollbar-thumb, .wp-block-navigation__menu-inspector-controls:focus-within::-webkit-scrollbar-thumb {
  background-color: #949494;
}
.wp-block-navigation__menu-inspector-controls:hover, .wp-block-navigation__menu-inspector-controls:focus, .wp-block-navigation__menu-inspector-controls:focus-within {
  scrollbar-color: #949494 transparent;
}
@media (hover: none) {
  .wp-block-navigation__menu-inspector-controls {
    scrollbar-color: #949494 transparent;
  }
}

.wp-block-navigation__menu-inspector-controls__empty-message {
  margin-left: 24px;
}

.editor-sidebar__panel .wp-block-navigation__submenu-header {
  margin-top: 0;
  margin-bottom: 0;
}

.wp-block-navigation__submenu-accessibility-notice {
  grid-column: span 2;
}

/**
 * Appender
 */
.wp-block-navigation .block-list-appender {
  position: relative;
}

/**
 * Submenus.
 */
.wp-block-navigation .has-child {
  cursor: pointer;
}
.wp-block-navigation .has-child .wp-block-navigation__submenu-container {
  z-index: 28;
}
.wp-block-navigation .has-child:hover .wp-block-navigation__submenu-container {
  z-index: 29;
}
.wp-block-navigation .has-child.is-selected > .wp-block-navigation__submenu-container, .wp-block-navigation .has-child.has-child-selected > .wp-block-navigation__submenu-container {
  visibility: visible !important;
  opacity: 1 !important;
  min-width: 200px !important;
  height: auto !important;
  width: auto !important;
  overflow: visible !important;
}

/**
 * Navigation Items.
 */
.wp-block-navigation-item .wp-block-navigation-item__content {
  cursor: text;
}
.wp-block-navigation-item.is-editing, .wp-block-navigation-item.is-selected {
  min-width: 20px;
}
.wp-block-navigation-item .block-list-appender {
  margin-top: 16px;
  margin-right: auto;
  margin-bottom: 16px;
  margin-left: 16px;
}

.wp-block-navigation-link__invalid-item {
  color: #000;
}

/**
 * Menu item setup state. Is shown when a menu item has no URL configured.
 */
.wp-block-navigation-link__placeholder {
  position: relative;
  text-decoration: none !important;
  box-shadow: none !important;
  background-image: none !important;
}
.wp-block-navigation-link__placeholder .wp-block-navigation-link__placeholder-text span {
  -webkit-text-decoration: wavy underline;
          text-decoration: wavy underline;
  -webkit-text-decoration-skip-ink: none;
          text-decoration-skip-ink: none;
  text-underline-offset: 0.25rem;
}
.wp-block-navigation-link__placeholder.wp-block-navigation-item__content {
  cursor: pointer;
}

/**
* Link Control Transforms
*/
.link-control-transform {
  border-top: 1px solid #ccc;
  padding: 0 16px 8px 16px;
}

.link-control-transform__subheading {
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 500;
  color: #1e1e1e;
  margin-bottom: 1.5em;
}

.link-control-transform__items {
  display: flex;
  justify-content: space-between;
}

.link-control-transform__item {
  flex-basis: 33%;
  flex-direction: column;
  gap: 8px;
  height: auto;
}

.wp-block-navigation-submenu {
  display: block;
}
.wp-block-navigation-submenu .wp-block-navigation__submenu-container {
  z-index: 28;
}
.wp-block-navigation-submenu.is-selected > .wp-block-navigation__submenu-container, .wp-block-navigation-submenu.has-child-selected > .wp-block-navigation__submenu-container {
  visibility: visible !important;
  opacity: 1 !important;
  min-width: 200px !important;
  height: auto !important;
  width: auto !important;
  position: absolute;
  left: -1px;
  top: 100%;
}
@media (min-width: 782px) {
  .wp-block-navigation-submenu.is-selected > .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container, .wp-block-navigation-submenu.has-child-selected > .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container {
    left: 100%;
    top: -1px;
  }
  .wp-block-navigation-submenu.is-selected > .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container::before, .wp-block-navigation-submenu.has-child-selected > .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container::before {
    content: "";
    position: absolute;
    right: 100%;
    height: 100%;
    display: block;
    width: 0.5em;
    background: transparent;
  }
}

.block-editor-block-list__block[data-type="core/nextpage"] {
  max-width: 100%;
  text-align: center;
  margin-top: 28px;
  margin-bottom: 28px;
}

.wp-block-nextpage {
  display: block;
  text-align: center;
  white-space: nowrap;
}
.wp-block-nextpage > span {
  font-size: 13px;
  position: relative;
  text-transform: uppercase;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  color: #757575;
  border-radius: 4px;
  background: #fff;
  padding: 6px 8px;
  height: 24px;
}
.wp-block-nextpage::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  border-top: 3px dashed #ccc;
}

.wp-block-navigation.items-justified-space-between .wp-block-page-list > div,
.wp-block-navigation.items-justified-space-between .wp-block-page-list {
  display: contents;
  flex: 1;
}
.wp-block-navigation.items-justified-space-between.has-child-selected .wp-block-page-list > div, .wp-block-navigation.items-justified-space-between.has-child-selected .wp-block-page-list, .wp-block-navigation.items-justified-space-between.is-selected .wp-block-page-list > div, .wp-block-navigation.items-justified-space-between.is-selected .wp-block-page-list {
  flex: inherit;
}

.wp-block-navigation .wp-block-navigation__submenu-container > .wp-block-page-list {
  display: block;
}

.wp-block-pages-list__item__link {
  pointer-events: none;
}

@media (min-width: 600px) {
  .wp-block-page-list-modal {
    max-width: 480px;
  }
}

.wp-block-page-list-modal-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.wp-block-page-list .open-on-click:focus-within > .wp-block-navigation__submenu-container {
  visibility: visible;
  opacity: 1;
  width: auto;
  height: auto;
  min-width: 200px;
}

.wp-block-page-list__loading-indicator-container {
  padding: 8px 12px;
}

.block-editor-block-list__block[data-type="core/paragraph"].has-drop-cap:focus {
  min-height: auto !important;
}

.block-editor-block-list__block[data-empty=true] [data-rich-text-placeholder] {
  opacity: 1;
}

.block-editor-block-list__block[data-empty=true] + .block-editor-block-list__block[data-empty=true]:not([data-custom-placeholder=true]) [data-rich-text-placeholder] {
  opacity: 0;
}

.block-editor-block-list__block[data-type="core/paragraph"].has-text-align-right[style*="writing-mode: vertical-rl"],
.block-editor-block-list__block[data-type="core/paragraph"].has-text-align-left[style*="writing-mode: vertical-lr"] {
  rotate: 180deg;
}

.is-zoomed-out .block-editor-block-list__block[data-empty=true] [data-rich-text-placeholder] {
  opacity: 0;
}

.wp-block-post-excerpt .wp-block-post-excerpt__excerpt.is-inline {
  display: inline;
}

.wp-block-pullquote.is-style-solid-color blockquote p {
  font-size: 32px;
}
.wp-block-pullquote.is-style-solid-color .wp-block-pullquote__citation {
  text-transform: none;
  font-style: normal;
}

.wp-block-pullquote__citation {
  color: inherit;
}

.wp-block-rss li a > div {
  display: inline;
}

.wp-block-rss__placeholder-form .wp-block-rss__placeholder-input {
  flex: 1 1 auto;
}

.wp-block-rss .wp-block-rss {
  all: inherit;
  margin: 0;
  padding: 0;
}

.wp-block[data-align=center] .wp-block-search .wp-block-search__inside-wrapper {
  margin: auto;
}

.wp-block-search :where(.wp-block-search__button) {
  height: auto;
  border-radius: initial;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.wp-block-search__inspector-controls .components-base-control {
  margin-bottom: 0;
}

.block-editor-block-list__block[data-type="core/separator"] {
  padding-top: 0.1px;
  padding-bottom: 0.1px;
}

.blocks-shortcode__textarea {
  box-sizing: border-box;
  max-height: 250px;
  resize: none;
  font-family: Menlo, Consolas, monaco, monospace !important;
  color: #1e1e1e !important;
  background: #fff !important;
  padding: 12px !important;
  border: 1px solid #1e1e1e !important;
  box-shadow: none !important;
  border-radius: 2px !important;
  font-size: 16px !important;
}
@media (min-width: 600px) {
  .blocks-shortcode__textarea {
    font-size: 13px !important;
  }
}
.blocks-shortcode__textarea:focus {
  border-color: var(--wp-admin-theme-color) !important;
  box-shadow: 0 0 0 1px var(--wp-admin-theme-color) !important;
  outline: 2px solid transparent !important;
}

.wp-block[data-align=center] > .wp-block-site-logo,
.wp-block-site-logo.aligncenter > div {
  display: table;
  margin-left: auto;
  margin-right: auto;
}

.wp-block-site-logo a {
  pointer-events: none;
}
.wp-block-site-logo .custom-logo-link {
  cursor: inherit;
}
.wp-block-site-logo .custom-logo-link:focus {
  box-shadow: none;
}
.wp-block-site-logo img {
  display: block;
  height: auto;
  max-width: 100%;
}
.wp-block-site-logo.is-transient {
  position: relative;
}
.wp-block-site-logo.is-transient img {
  opacity: 0.3;
}
.wp-block-site-logo.is-transient .components-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
}

.wp-block-site-logo.wp-block-site-logo.is-default-size .components-placeholder {
  height: 60px;
  width: 60px;
}
.wp-block-site-logo.wp-block-site-logo > div,
.wp-block-site-logo.wp-block-site-logo .components-resizable-box__container {
  border-radius: inherit;
}
.wp-block-site-logo.wp-block-site-logo .components-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-radius: inherit;
  min-height: 48px;
  min-width: 48px;
  height: 100%;
  width: 100%;
}
.wp-block-site-logo.wp-block-site-logo .components-placeholder .components-form-file-upload {
  display: none;
}
.wp-block-site-logo.wp-block-site-logo .components-placeholder .components-drop-zone__content-text {
  display: none;
}
.wp-block-site-logo.wp-block-site-logo .components-placeholder .components-button.components-button {
  padding: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  background: var(--wp-admin-theme-color);
  border-color: var(--wp-admin-theme-color);
  border-style: solid;
  color: #fff;
}
.wp-block-site-logo.wp-block-site-logo .components-placeholder .components-button.components-button > svg {
  color: inherit;
}

.block-library-site-logo__inspector-media-replace-container {
  position: relative;
}
.block-library-site-logo__inspector-media-replace-container .components-drop-zone__content-icon {
  display: none;
}
.block-library-site-logo__inspector-media-replace-container button.components-button {
  color: #1e1e1e;
  box-shadow: inset 0 0 0 1px #ccc;
  width: 100%;
  display: block;
  height: 40px;
}
.block-library-site-logo__inspector-media-replace-container button.components-button:hover {
  color: var(--wp-admin-theme-color);
}
.block-library-site-logo__inspector-media-replace-container button.components-button:focus {
  box-shadow: inset 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
}
.block-library-site-logo__inspector-media-replace-container .block-library-site-logo__inspector-media-replace-title {
  word-break: break-all;
  white-space: normal;
  text-align: start;
  text-align-last: center;
}
.block-library-site-logo__inspector-media-replace-container .components-dropdown {
  display: block;
}
.block-library-site-logo__inspector-media-replace-container img {
  width: 20px;
  min-width: 20px;
  aspect-ratio: 1;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
  border-radius: 50% !important;
}
.block-library-site-logo__inspector-media-replace-container .block-library-site-logo__inspector-readonly-logo-preview {
  padding: 6px 12px;
  display: flex;
  height: 40px;
}

.wp-block-site-tagline__placeholder {
  padding: 1em 0;
  border: 1px dashed;
}

.wp-block-site-title__placeholder {
  padding: 1em 0;
  border: 1px dashed;
}

.wp-block-social-links .wp-social-link {
  line-height: 0;
}

.wp-block-social-link-anchor {
  align-items: center;
  background: none;
  border: 0;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  font-size: inherit;
  color: currentColor;
  height: auto;
  font-weight: inherit;
  font-family: inherit;
  margin: 0;
  opacity: 1;
  padding: 0.25em;
}
.wp-block-social-link-anchor:hover {
  transform: none;
}

:root :where(.wp-block-social-links.is-style-pill-shape .wp-social-link button) {
  padding-left: 0.6666666667em;
  padding-right: 0.6666666667em;
}

:root :where(.wp-block-social-links.is-style-logos-only .wp-social-link button) {
  padding: 0;
}

.wp-block-social-link__toolbar_content_text {
  width: 250px;
}

.wp-block-social-links div.block-editor-url-input {
  display: inline-block;
  margin-left: 8px;
}

.wp-social-link:hover {
  transform: none;
}

:root :where(.wp-block-social-links) {
  padding: 0;
}

.wp-block[data-align=center] > .wp-block-social-links,
.wp-block.wp-block-social-links.aligncenter {
  justify-content: center;
}

.block-editor-block-preview__content .components-button:disabled {
  opacity: 1;
}

.wp-social-link.wp-social-link__is-incomplete {
  opacity: 0.5;
}

.wp-block-social-links .is-selected .wp-social-link__is-incomplete,
.wp-social-link.wp-social-link__is-incomplete:hover,
.wp-social-link.wp-social-link__is-incomplete:focus {
  opacity: 1;
}

.wp-block-social-links .block-list-appender {
  position: static;
}
.wp-block-social-links .block-list-appender .block-editor-inserter {
  font-size: inherit;
}
.wp-block-social-links .block-list-appender .block-editor-button-block-appender {
  height: 1.5em;
  width: 1.5em;
  font-size: inherit;
  padding: 0;
}

.block-editor-block-list__block[data-type="core/spacer"]::before {
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
  width: 100%;
  min-height: 8px;
  min-width: 8px;
  height: 100%;
}

.wp-block-spacer.is-hovered .block-library-spacer__resize-container,
.block-library-spacer__resize-container.has-show-handle,
.wp-block-spacer.is-selected.custom-sizes-disabled {
  background: rgba(0, 0, 0, 0.1);
}
.is-dark-theme .wp-block-spacer.is-hovered .block-library-spacer__resize-container,
.is-dark-theme .block-library-spacer__resize-container.has-show-handle,
.is-dark-theme .wp-block-spacer.is-selected.custom-sizes-disabled {
  background: rgba(255, 255, 255, 0.15);
}

.block-library-spacer__resize-container {
  clear: both;
}
.block-library-spacer__resize-container:not(.is-resizing) {
  height: 100% !important;
  width: 100% !important;
}
.block-library-spacer__resize-container .components-resizable-box__handle::before {
  content: none;
}
.block-library-spacer__resize-container.resize-horizontal {
  margin-bottom: 0;
  height: 100% !important;
}

.wp-block[data-align=left] > .wp-block-table, .wp-block[data-align=right] > .wp-block-table, .wp-block[data-align=center] > .wp-block-table {
  height: auto;
}
.wp-block[data-align=left] > .wp-block-table table, .wp-block[data-align=right] > .wp-block-table table, .wp-block[data-align=center] > .wp-block-table table {
  width: auto;
}
.wp-block[data-align=left] > .wp-block-table td,
.wp-block[data-align=left] > .wp-block-table th, .wp-block[data-align=right] > .wp-block-table td,
.wp-block[data-align=right] > .wp-block-table th, .wp-block[data-align=center] > .wp-block-table td,
.wp-block[data-align=center] > .wp-block-table th {
  word-break: break-word;
}
.wp-block[data-align=center] > .wp-block-table {
  text-align: initial;
}
.wp-block[data-align=center] > .wp-block-table table {
  margin: 0 auto;
}
.wp-block-table td,
.wp-block-table th {
  border: 1px solid;
  padding: 0.5em;
}
.wp-block-table td.is-selected,
.wp-block-table th.is-selected {
  border-color: var(--wp-admin-theme-color);
  box-shadow: inset 0 0 0 1px var(--wp-admin-theme-color);
  border-style: double;
}
.wp-block-table table.has-individual-borders > *,
.wp-block-table table.has-individual-borders tr,
.wp-block-table table.has-individual-borders th,
.wp-block-table table.has-individual-borders td {
  border-width: 1px;
  border-style: solid;
  border-color: currentColor;
}

.blocks-table__placeholder-form.blocks-table__placeholder-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}
@media (min-width: 782px) {
  .blocks-table__placeholder-form.blocks-table__placeholder-form {
    flex-direction: row;
    align-items: flex-end;
  }
}

.blocks-table__placeholder-input {
  width: 112px;
}

.wp-block-tag-cloud .wp-block-tag-cloud {
  margin: 0;
  padding: 0;
  border: none;
  border-radius: inherit;
}

.block-editor-template-part__selection-modal {
  z-index: 1000001;
}
.block-editor-template-part__selection-modal .block-editor-block-patterns-list {
  column-count: 2;
  column-gap: 24px;
}
@media (min-width: 1280px) {
  .block-editor-template-part__selection-modal .block-editor-block-patterns-list {
    column-count: 3;
  }
}
.block-editor-template-part__selection-modal .block-editor-block-patterns-list .block-editor-block-patterns-list__list-item {
  break-inside: avoid-column;
}

.block-library-template-part__selection-search {
  background: #fff;
  position: sticky;
  top: 0;
  padding: 16px 0;
  z-index: 2;
}

.block-editor-block-list__block:not(.remove-outline).wp-block-template-part.is-highlighted::after, .block-editor-block-list__block:not(.remove-outline).wp-block-template-part.is-selected::after,
.block-editor-block-list__block:not(.remove-outline).is-reusable.is-highlighted::after,
.block-editor-block-list__block:not(.remove-outline).is-reusable.is-selected::after {
  outline-color: var(--wp-block-synced-color);
}
.block-editor-block-list__block:not(.remove-outline).wp-block-template-part.block-editor-block-list__block:not([contenteditable]):focus::after,
.block-editor-block-list__block:not(.remove-outline).is-reusable.block-editor-block-list__block:not([contenteditable]):focus::after {
  outline-color: var(--wp-block-synced-color);
}

.is-outline-mode .block-editor-block-list__block:not(.remove-outline).wp-block-template-part.has-editable-outline::after {
  border: none;
}

.wp-block-text-columns .block-editor-rich-text__editable:focus {
  outline: 1px solid #ddd;
}

.wp-block[data-align=center] > .wp-block-video {
  text-align: center;
}

.wp-block-video {
  position: relative;
}
.wp-block-video.is-transient video {
  opacity: 0.3;
}
.wp-block-video .components-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -9px;
  margin-left: -9px;
}

.block-library-video-tracks-editor {
  z-index: 159990;
}

.block-library-video-tracks-editor__track-list-track {
  padding-left: 12px;
}

.block-library-video-tracks-editor__single-track-editor-kind-select {
  max-width: 240px;
}

.block-library-video-tracks-editor__tracks-informative-message-title,
.block-library-video-tracks-editor__single-track-editor-edit-track-label {
  margin-top: 4px;
  color: #757575;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 500;
  display: block;
}

.block-library-video-tracks-editor > .components-popover__content {
  width: 360px;
}

.block-library-video-tracks-editor__track-list .components-menu-group__label,
.block-library-video-tracks-editor__add-tracks-container .components-menu-group__label {
  padding: 0;
}

.block-library-video-tracks-editor__tracks-informative-message {
  padding: 8px;
}
.block-library-video-tracks-editor__tracks-informative-message-description {
  margin-bottom: 0;
}

.block-library-query-pattern__selection-modal .block-editor-block-patterns-list {
  column-count: 2;
  column-gap: 24px;
}
@media (min-width: 1280px) {
  .block-library-query-pattern__selection-modal .block-editor-block-patterns-list {
    column-count: 3;
  }
}
.block-library-query-pattern__selection-modal .block-editor-block-patterns-list .block-editor-block-patterns-list__list-item {
  break-inside: avoid-column;
}
.block-library-query-pattern__selection-modal .block-library-query-pattern__selection-search {
  background: #fff;
  position: sticky;
  top: 0;
  padding: 16px 0;
  transform: translateY(-4px);
  margin-bottom: -4px;
  z-index: 2;
}

@media (min-width: 600px) {
  .wp-block-query__enhanced-pagination-modal {
    max-width: 480px;
  }
}

.block-editor-block-settings-menu__popover.is-expanded {
  overflow-y: scroll;
}
.block-editor-block-settings-menu__popover .block-library-query-pattern__selection-content {
  height: 100%;
}
.block-editor-block-settings-menu__popover .block-editor-block-patterns-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 12px;
  min-width: 280px;
}
@media (min-width: 600px) {
  .block-editor-block-settings-menu__popover .block-editor-block-patterns-list {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 600px) {
  .block-editor-block-settings-menu__popover .block-editor-block-patterns-list {
    min-width: 480px;
  }
}
.block-editor-block-settings-menu__popover .block-editor-block-patterns-list__list-item {
  margin-bottom: 0;
}

.wp-block-query > .block-editor-media-placeholder.is-small {
  min-height: 60px;
}

.wp-block[data-align=center] > .wp-block-query-pagination {
  justify-content: center;
}

:where(.editor-styles-wrapper) .wp-block-query-pagination {
  max-width: 100%;
}
:where(.editor-styles-wrapper) .wp-block-query-pagination.block-editor-block-list__layout {
  margin: 0;
}

.wp-block-query-pagination-numbers a {
  text-decoration: underline;
}
.wp-block-query-pagination-numbers .page-numbers {
  margin-right: 2px;
}
.wp-block-query-pagination-numbers .page-numbers:last-child {
  /*rtl:ignore*/
  margin-right: 0;
}

.wp-block-post-featured-image .block-editor-media-placeholder {
  z-index: 1;
  backdrop-filter: none;
}
.wp-block-post-featured-image .wp-block-post-featured-image__placeholder,
.wp-block-post-featured-image .components-placeholder {
  justify-content: center;
  align-items: center;
  padding: 0;
  display: flex;
  min-height: 200px;
}
.wp-block-post-featured-image .wp-block-post-featured-image__placeholder .components-form-file-upload,
.wp-block-post-featured-image .components-placeholder .components-form-file-upload {
  display: none;
}
.wp-block-post-featured-image .wp-block-post-featured-image__placeholder .components-button,
.wp-block-post-featured-image .components-placeholder .components-button {
  margin: auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  background: var(--wp-admin-theme-color);
  border-color: var(--wp-admin-theme-color);
  border-style: solid;
  color: #fff;
}
.wp-block-post-featured-image .wp-block-post-featured-image__placeholder .components-button > svg,
.wp-block-post-featured-image .components-placeholder .components-button > svg {
  color: inherit;
}
.wp-block-post-featured-image .wp-block-post-featured-image__placeholder:where(.has-border-color),
.wp-block-post-featured-image .components-placeholder:where(.has-border-color),
.wp-block-post-featured-image img:where(.has-border-color) {
  border-style: solid;
}
.wp-block-post-featured-image .wp-block-post-featured-image__placeholder:where([style*=border-top-color]),
.wp-block-post-featured-image .components-placeholder:where([style*=border-top-color]),
.wp-block-post-featured-image img:where([style*=border-top-color]) {
  border-top-style: solid;
}
.wp-block-post-featured-image .wp-block-post-featured-image__placeholder:where([style*=border-right-color]),
.wp-block-post-featured-image .components-placeholder:where([style*=border-right-color]),
.wp-block-post-featured-image img:where([style*=border-right-color]) {
  border-right-style: solid;
}
.wp-block-post-featured-image .wp-block-post-featured-image__placeholder:where([style*=border-bottom-color]),
.wp-block-post-featured-image .components-placeholder:where([style*=border-bottom-color]),
.wp-block-post-featured-image img:where([style*=border-bottom-color]) {
  border-bottom-style: solid;
}
.wp-block-post-featured-image .wp-block-post-featured-image__placeholder:where([style*=border-left-color]),
.wp-block-post-featured-image .components-placeholder:where([style*=border-left-color]),
.wp-block-post-featured-image img:where([style*=border-left-color]) {
  border-left-style: solid;
}
.wp-block-post-featured-image .wp-block-post-featured-image__placeholder:where([style*=border-width]),
.wp-block-post-featured-image .components-placeholder:where([style*=border-width]),
.wp-block-post-featured-image img:where([style*=border-width]) {
  border-style: solid;
}
.wp-block-post-featured-image .wp-block-post-featured-image__placeholder:where([style*=border-top-width]),
.wp-block-post-featured-image .components-placeholder:where([style*=border-top-width]),
.wp-block-post-featured-image img:where([style*=border-top-width]) {
  border-top-style: solid;
}
.wp-block-post-featured-image .wp-block-post-featured-image__placeholder:where([style*=border-right-width]),
.wp-block-post-featured-image .components-placeholder:where([style*=border-right-width]),
.wp-block-post-featured-image img:where([style*=border-right-width]) {
  border-right-style: solid;
}
.wp-block-post-featured-image .wp-block-post-featured-image__placeholder:where([style*=border-bottom-width]),
.wp-block-post-featured-image .components-placeholder:where([style*=border-bottom-width]),
.wp-block-post-featured-image img:where([style*=border-bottom-width]) {
  border-bottom-style: solid;
}
.wp-block-post-featured-image .wp-block-post-featured-image__placeholder:where([style*=border-left-width]),
.wp-block-post-featured-image .components-placeholder:where([style*=border-left-width]),
.wp-block-post-featured-image img:where([style*=border-left-width]) {
  border-left-style: solid;
}
.wp-block-post-featured-image[style*=height] .components-placeholder {
  min-height: 48px;
  min-width: 48px;
  height: 100%;
  width: 100%;
}
.wp-block-post-featured-image > a {
  pointer-events: none;
}
.wp-block-post-featured-image.is-selected .components-placeholder.has-illustration .components-button,
.wp-block-post-featured-image.is-selected .components-placeholder.has-illustration .components-placeholder__instructions,
.wp-block-post-featured-image.is-selected .components-placeholder.has-illustration .components-placeholder__label {
  opacity: 1;
  pointer-events: auto;
}
.wp-block-post-featured-image.is-transient {
  position: relative;
}
.wp-block-post-featured-image.is-transient img {
  opacity: 0.3;
}
.wp-block-post-featured-image.is-transient .components-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

div[data-type="core/post-featured-image"] img {
  max-width: 100%;
  height: auto;
  display: block;
}

.wp-block-post-comments-form * {
  pointer-events: none;
}
.wp-block-post-comments-form *.block-editor-warning * {
  pointer-events: auto;
}

/**
 * Element styles for the editor
 */
.wp-element-button {
  cursor: revert;
}
.wp-element-button[role=textbox] {
  cursor: text;
}

.block-library-poster-image__container {
  position: relative;
}
.block-library-poster-image__container:hover .block-library-poster-image__actions, .block-library-poster-image__container:focus .block-library-poster-image__actions, .block-library-poster-image__container:focus-within .block-library-poster-image__actions {
  opacity: 1;
}
.block-library-poster-image__container .block-library-poster-image__actions.block-library-poster-image__actions-select {
  opacity: 1;
  margin-top: 16px;
}
.block-library-poster-image__container .components-drop-zone__content {
  border-radius: 2px;
}
.block-library-poster-image__container .components-drop-zone .components-drop-zone__content-inner {
  display: flex;
  align-items: center;
  gap: 8px;
}
.block-library-poster-image__container .components-drop-zone .components-drop-zone__content-inner .components-drop-zone__content-icon {
  margin: 0;
}
.block-library-poster-image__container .components-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -9px;
  margin-left: -9px;
}

.block-library-poster-image__preview {
  width: 100%;
  padding: 0;
  overflow: hidden;
  outline-offset: -1px;
  min-height: 40px;
  display: flex;
  justify-content: center;
  height: auto !important;
  outline: 1px solid rgba(0, 0, 0, 0.1);
}
.block-library-poster-image__preview .block-library-poster-image__preview-image {
  object-fit: cover;
  width: 100%;
  object-position: 50% 50%;
  aspect-ratio: 2/1;
}

.block-library-poster-image__actions:not(.block-library-poster-image__actions-select) {
  bottom: 0;
  opacity: 0;
  padding: 8px;
  position: absolute;
}
@media not (prefers-reduced-motion) {
  .block-library-poster-image__actions:not(.block-library-poster-image__actions-select) {
    transition: opacity 50ms ease-out;
  }
}
.block-library-poster-image__actions:not(.block-library-poster-image__actions-select) .block-library-poster-image__action {
  backdrop-filter: blur(16px) saturate(180%);
  background: rgba(255, 255, 255, 0.75);
}
.block-library-poster-image__actions .block-library-poster-image__action {
  flex-grow: 1;
  justify-content: center;
}

:root .editor-styles-wrapper {
  /* stylelint-disable @stylistic/function-comma-space-after -- We can not use spacing because of WP multi site kses rule. */
  /* stylelint-enable @stylistic/function-comma-space-after */
}
:root .editor-styles-wrapper .has-very-light-gray-background-color {
  background-color: #eee;
}
:root .editor-styles-wrapper .has-very-dark-gray-background-color {
  background-color: #313131;
}
:root .editor-styles-wrapper .has-very-light-gray-color {
  color: #eee;
}
:root .editor-styles-wrapper .has-very-dark-gray-color {
  color: #313131;
}
:root .editor-styles-wrapper .has-vivid-green-cyan-to-vivid-cyan-blue-gradient-background {
  background: linear-gradient(135deg, rgb(0, 208, 132) 0%, rgb(6, 147, 227) 100%);
}
:root .editor-styles-wrapper .has-purple-crush-gradient-background {
  background: linear-gradient(135deg, rgb(52, 226, 228) 0%, rgb(71, 33, 251) 50%, rgb(171, 29, 254) 100%);
}
:root .editor-styles-wrapper .has-hazy-dawn-gradient-background {
  background: linear-gradient(135deg, rgb(250, 172, 168) 0%, rgb(218, 208, 236) 100%);
}
:root .editor-styles-wrapper .has-subdued-olive-gradient-background {
  background: linear-gradient(135deg, rgb(250, 250, 225) 0%, rgb(103, 166, 113) 100%);
}
:root .editor-styles-wrapper .has-atomic-cream-gradient-background {
  background: linear-gradient(135deg, rgb(253, 215, 154) 0%, rgb(0, 74, 89) 100%);
}
:root .editor-styles-wrapper .has-nightshade-gradient-background {
  background: linear-gradient(135deg, rgb(51, 9, 104) 0%, rgb(49, 205, 207) 100%);
}
:root .editor-styles-wrapper .has-midnight-gradient-background {
  background: linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%);
}

:where(.editor-styles-wrapper) .has-regular-font-size {
  font-size: 16px;
}

:where(.editor-styles-wrapper) .has-larger-font-size {
  font-size: 42px;
}

/**
 * Editor Normalization Styles
 *
 * These are only output in the editor, but styles here are NOT prefixed .editor-styles-wrapper.
 * This allows us to create normalization styles that are easily overridden by editor styles.
 */
:where(.editor-styles-wrapper) iframe:not([frameborder]) {
  border: 0;
}`,""]);const Rt=Et}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/@wordpress+block-library@9.30.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/block-library/build-style/style.css":((Nt,ue,V)=>{V.d(ue,{A:()=>Rt});var nt=V("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),X=V.n(nt),re=V("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),Ke=V.n(re),st=V("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/getUrl.js"),pt=V.n(st),rt=new URL(V('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg>'),V.b),Et=Ke()(X()),p=pt()(rt);Et.push([Nt.id,`@charset "UTF-8";
/**
 * Colors
 */
/**
 * Breakpoints & Media Queries
 */
/**
 * Colors
 */
/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
/**
 * Colors
 */
/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
/**
 * Breakpoints & Media Queries
 */
/**
*  Converts a hex value into the rgb equivalent.
*
* @param {string} hex - the hexadecimal value to convert
* @return {string} comma separated rgb values
*/
/**
 * Long content fade mixin
 *
 * Creates a fading overlay to signify that the content is longer
 * than the space allows.
 */
/**
 * Typography
 */
/**
 * Breakpoint mixins
 */
/**
 * Focus styles.
 */
/**
 * Applies editor left position to the selector passed as argument
 */
/**
 * Styles that are reused verbatim in a few places
 */
/**
 * Allows users to opt-out of animations via OS-level preferences.
 */
/**
 * Reset default styles for JavaScript UI based pages.
 * This is a WP-admin agnostic reset
 */
/**
 * Reset the WP Admin page styles for Gutenberg-like pages.
 */
.wp-block-accordion-content {
  display: grid;
  grid-template-rows: max-content 0fr;
}

.wp-block-accordion-content.is-open {
  grid-template-rows: max-content 1fr;
}
.wp-block-accordion-content.is-open > .wp-block-accordion-header .accordion-content__toggle-icon.has-icon-plus {
  transform: rotate(45deg);
}

.accordion-content__heading {
  margin-block-start: 0;
  margin-block-end: 0;
}

.accordion-content__toggle {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  text-decoration: inherit;
  word-spacing: inherit;
  background: none;
  border: none;
  color: inherit;
  padding: var(--wp--preset--spacing--20, 1em) 0;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  text-align: inherit;
  position: relative;
  width: 100%;
}

.accordion-content__toggle > span {
  width: 100%;
}

.is-layout-flow > .wp-block-accordion-panel,
.wp-block-accordion-panel {
  overflow: hidden;
  margin: 0;
}

.accordion-panel__wrapper {
  padding-bottom: var(--wp--preset--spacing--20, 1em);
}

/* No icon block style */
.is-style-no-icon .accordion-content__toggle-icon {
  background-color: unset;
}

.wp-block-accordion-header.icon-position-left .accordion-content__toggle {
  /* stylelint-disable-next-line declaration-property-value-allowed-list -- This should be refactored to not use the row-reverse value. */
  flex-direction: row-reverse;
}

.accordion-content__toggle:focus-visible {
  outline: 2px solid -webkit-focus-ring-color;
  outline-offset: 2px;
}

/* Add transitions only for users who do not prefer reduced motion */
@media (prefers-reduced-motion: no-preference) {
  .wp-block-accordion-content .accordion-content__toggle-icon {
    transition: transform 0.2s ease-in-out;
  }
  .wp-block-accordion-content {
    transition: grid-template-rows 0.3s ease-out;
  }
}
.wp-block-archives {
  box-sizing: border-box;
}

.wp-block-archives-dropdown label {
  display: block;
}

.wp-block-avatar {
  box-sizing: border-box;
  line-height: 0;
}
.wp-block-avatar img {
  box-sizing: border-box;
}
.wp-block-avatar.aligncenter {
  text-align: center;
}

.wp-block-audio {
  box-sizing: border-box;
}
.wp-block-audio :where(figcaption) {
  margin-top: 0.5em;
  margin-bottom: 1em;
}
.wp-block-audio audio {
  width: 100%;
  min-width: 300px;
}

.wp-block-button__link {
  cursor: pointer;
  display: inline-block;
  text-align: center;
  word-break: break-word;
  box-sizing: border-box;
  height: 100%;
  align-content: center;
}
.wp-block-button__link.aligncenter {
  text-align: center;
}
.wp-block-button__link.alignright {
  /*rtl:ignore*/
  text-align: right;
}

:where(.wp-block-button__link) {
  box-shadow: none;
  text-decoration: none;
  border-radius: 9999px;
  padding: calc(0.667em + 2px) calc(1.333em + 2px);
}

.wp-block-button[style*=text-decoration] .wp-block-button__link {
  text-decoration: inherit;
}

.wp-block-buttons > .wp-block-button.has-custom-width {
  max-width: none;
}
.wp-block-buttons > .wp-block-button.has-custom-width .wp-block-button__link {
  width: 100%;
}
.wp-block-buttons > .wp-block-button.has-custom-font-size .wp-block-button__link {
  font-size: inherit;
}
.wp-block-buttons > .wp-block-button.wp-block-button__width-25 {
  width: calc(25% - var(--wp--style--block-gap, 0.5em) * 0.75);
}
.wp-block-buttons > .wp-block-button.wp-block-button__width-50 {
  width: calc(50% - var(--wp--style--block-gap, 0.5em) * 0.5);
}
.wp-block-buttons > .wp-block-button.wp-block-button__width-75 {
  width: calc(75% - var(--wp--style--block-gap, 0.5em) * 0.25);
}
.wp-block-buttons > .wp-block-button.wp-block-button__width-100 {
  width: 100%;
  flex-basis: 100%;
}

.wp-block-buttons.is-vertical > .wp-block-button.wp-block-button__width-25 {
  width: 25%;
}
.wp-block-buttons.is-vertical > .wp-block-button.wp-block-button__width-50 {
  width: 50%;
}
.wp-block-buttons.is-vertical > .wp-block-button.wp-block-button__width-75 {
  width: 75%;
}

.wp-block-button.is-style-squared,
.wp-block-button__link.wp-block-button.is-style-squared {
  border-radius: 0;
}

.wp-block-button.no-border-radius,
.wp-block-button__link.no-border-radius {
  border-radius: 0 !important;
}

:root :where(.wp-block-button.is-style-outline > .wp-block-button__link),
:root :where(.wp-block-button .wp-block-button__link.is-style-outline) {
  border: 2px solid currentColor;
  padding: 0.667em 1.333em;
}
:root :where(.wp-block-button.is-style-outline > .wp-block-button__link:not(.has-text-color)),
:root :where(.wp-block-button .wp-block-button__link.is-style-outline:not(.has-text-color)) {
  color: currentColor;
}
:root :where(.wp-block-button.is-style-outline > .wp-block-button__link:not(.has-background)),
:root :where(.wp-block-button .wp-block-button__link.is-style-outline:not(.has-background)) {
  background-color: transparent;
  background-image: none;
}

.wp-block-buttons {
  box-sizing: border-box;
  /* stylelint-disable @stylistic/indentation -- Disable the stylelint rule, otherwise this selector is ugly! */
}
.wp-block-buttons.is-vertical {
  flex-direction: column;
}
.wp-block-buttons.is-vertical > .wp-block-button:last-child {
  margin-bottom: 0;
}
.wp-block-buttons > .wp-block-button {
  display: inline-block;
  margin: 0;
}
.wp-block-buttons.is-content-justification-left {
  justify-content: flex-start;
}
.wp-block-buttons.is-content-justification-left.is-vertical {
  align-items: flex-start;
}
.wp-block-buttons.is-content-justification-center {
  justify-content: center;
}
.wp-block-buttons.is-content-justification-center.is-vertical {
  align-items: center;
}
.wp-block-buttons.is-content-justification-right {
  justify-content: flex-end;
}
.wp-block-buttons.is-content-justification-right.is-vertical {
  align-items: flex-end;
}
.wp-block-buttons.is-content-justification-space-between {
  justify-content: space-between;
}
.wp-block-buttons.aligncenter {
  text-align: center;
}
.wp-block-buttons:not(.is-content-justification-space-between,
.is-content-justification-right,
.is-content-justification-left,
.is-content-justification-center) .wp-block-button.aligncenter {
  /* stylelint-enable @stylistic/indentation */
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
.wp-block-buttons[style*=text-decoration] .wp-block-button,
.wp-block-buttons[style*=text-decoration] .wp-block-button__link {
  text-decoration: inherit;
}
.wp-block-buttons.has-custom-font-size .wp-block-button__link {
  font-size: inherit;
}
.wp-block-buttons .wp-block-button__link {
  width: 100%;
}

.wp-block-button.aligncenter {
  text-align: center;
}

.wp-block-calendar {
  text-align: center;
}
.wp-block-calendar th,
.wp-block-calendar td {
  padding: 0.25em;
  border: 1px solid;
}
.wp-block-calendar th {
  font-weight: 400;
}
.wp-block-calendar caption {
  background-color: inherit;
}
.wp-block-calendar table {
  width: 100%;
  border-collapse: collapse;
}
.wp-block-calendar table.has-background th {
  background-color: inherit;
}
.wp-block-calendar table.has-text-color th {
  color: inherit;
}
.wp-block-calendar :where(table:not(.has-text-color)) {
  color: #40464d;
}
.wp-block-calendar :where(table:not(.has-text-color)) th,
.wp-block-calendar :where(table:not(.has-text-color)) td {
  border-color: #ddd;
}

:where(.wp-block-calendar table:not(.has-background) th) {
  background: #ddd;
}

.wp-block-categories {
  box-sizing: border-box;
  /* Only apply the text align on dropdowns, not lists. */
}
.wp-block-categories.alignleft {
  /*rtl:ignore*/
  margin-right: 2em;
}
.wp-block-categories.alignright {
  /*rtl:ignore*/
  margin-left: 2em;
}
.wp-block-categories.wp-block-categories-dropdown.aligncenter {
  text-align: center;
}
.wp-block-categories .wp-block-categories__label {
  width: 100%;
  display: block;
}

.wp-block-code {
  box-sizing: border-box;
}
.wp-block-code code {
  display: block;
  font-family: inherit;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  /*!rtl:begin:ignore*/
  direction: ltr;
  text-align: initial;
  /*!rtl:end:ignore*/
}

.wp-block-columns {
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap !important;
  align-items: initial !important;
  /**
  * All Columns Alignment
  */
}
@media (min-width: 782px) {
  .wp-block-columns {
    flex-wrap: nowrap !important;
  }
}
.wp-block-columns.are-vertically-aligned-top {
  align-items: flex-start;
}
.wp-block-columns.are-vertically-aligned-center {
  align-items: center;
}
.wp-block-columns.are-vertically-aligned-bottom {
  align-items: flex-end;
}
@media (max-width: 781px) {
  .wp-block-columns:not(.is-not-stacked-on-mobile) > .wp-block-column {
    flex-basis: 100% !important;
  }
}
@media (min-width: 782px) {
  .wp-block-columns:not(.is-not-stacked-on-mobile) > .wp-block-column {
    flex-basis: 0;
    flex-grow: 1;
  }
  .wp-block-columns:not(.is-not-stacked-on-mobile) > .wp-block-column[style*=flex-basis] {
    flex-grow: 0;
  }
}
.wp-block-columns.is-not-stacked-on-mobile {
  flex-wrap: nowrap !important;
}
.wp-block-columns.is-not-stacked-on-mobile > .wp-block-column {
  flex-basis: 0;
  flex-grow: 1;
}
.wp-block-columns.is-not-stacked-on-mobile > .wp-block-column[style*=flex-basis] {
  flex-grow: 0;
}

:where(.wp-block-columns) {
  margin-bottom: 1.75em;
}

:where(.wp-block-columns.has-background) {
  padding: 1.25em 2.375em;
}

.wp-block-column {
  flex-grow: 1;
  min-width: 0;
  word-break: break-word;
  overflow-wrap: break-word;
  /**
  * Individual Column Alignment
  */
}
.wp-block-column.is-vertically-aligned-top {
  align-self: flex-start;
}
.wp-block-column.is-vertically-aligned-center {
  align-self: center;
}
.wp-block-column.is-vertically-aligned-bottom {
  align-self: flex-end;
}
.wp-block-column.is-vertically-aligned-stretch {
  align-self: stretch;
}
.wp-block-column.is-vertically-aligned-top, .wp-block-column.is-vertically-aligned-center, .wp-block-column.is-vertically-aligned-bottom {
  width: 100%;
}

/* Styles for backwards compatibility with the legacy \`post-comments\` block */
.wp-block-post-comments {
  box-sizing: border-box;
  /* utility classes */
  /* end utility classes */
}
.wp-block-post-comments .alignleft {
  float: left;
}
.wp-block-post-comments .alignright {
  float: right;
}
.wp-block-post-comments .navigation::after {
  content: "";
  display: table;
  clear: both;
}
.wp-block-post-comments .commentlist {
  clear: both;
  list-style: none;
  margin: 0;
  padding: 0;
}
.wp-block-post-comments .commentlist .comment {
  min-height: 2.25em;
  padding-left: 3.25em;
}
.wp-block-post-comments .commentlist .comment p {
  font-size: 1em;
  line-height: 1.8;
  margin: 1em 0;
}
.wp-block-post-comments .commentlist .children {
  list-style: none;
  margin: 0;
  padding: 0;
}
.wp-block-post-comments .comment-author {
  line-height: 1.5;
}
.wp-block-post-comments .comment-author .avatar {
  border-radius: 1.5em;
  display: block;
  float: left;
  height: 2.5em;
  margin-top: 0.5em;
  margin-right: 0.75em;
  width: 2.5em;
}
.wp-block-post-comments .comment-author cite {
  font-style: normal;
}
.wp-block-post-comments .comment-meta {
  font-size: 0.875em;
  line-height: 1.5;
}
.wp-block-post-comments .comment-meta b {
  font-weight: normal;
}
.wp-block-post-comments .comment-meta .comment-awaiting-moderation {
  margin-top: 1em;
  margin-bottom: 1em;
  display: block;
}
.wp-block-post-comments .comment-body .commentmetadata {
  font-size: 0.875em;
}
.wp-block-post-comments .comment-form-comment label,
.wp-block-post-comments .comment-form-author label,
.wp-block-post-comments .comment-form-email label,
.wp-block-post-comments .comment-form-url label {
  display: block;
  margin-bottom: 0.25em;
}
.wp-block-post-comments .comment-form textarea,
.wp-block-post-comments .comment-form input:not([type=submit]):not([type=checkbox]) {
  display: block;
  box-sizing: border-box;
  width: 100%;
}
.wp-block-post-comments .comment-form-cookies-consent {
  display: flex;
  gap: 0.25em;
}
.wp-block-post-comments .comment-form-cookies-consent #wp-comment-cookies-consent {
  margin-top: 0.35em;
}
.wp-block-post-comments .comment-reply-title {
  margin-bottom: 0;
}
.wp-block-post-comments .comment-reply-title :where(small) {
  font-size: var(--wp--preset--font-size--medium, smaller);
  margin-left: 0.5em;
}
.wp-block-post-comments .reply {
  font-size: 0.875em;
  margin-bottom: 1.4em;
}
.wp-block-post-comments textarea,
.wp-block-post-comments input:not([type=submit]) {
  border: 1px solid #949494;
  font-size: 1em;
  font-family: inherit;
}
.wp-block-post-comments textarea,
.wp-block-post-comments input:not([type=submit]):not([type=checkbox]) {
  padding: calc(0.667em + 2px);
}

:where(.wp-block-post-comments input[type=submit]) {
  border: none;
}

.wp-block-comments {
  box-sizing: border-box;
}

.wp-block-comments-pagination > .wp-block-comments-pagination-next,
.wp-block-comments-pagination > .wp-block-comments-pagination-previous,
.wp-block-comments-pagination > .wp-block-comments-pagination-numbers {
  font-size: inherit;
}
.wp-block-comments-pagination .wp-block-comments-pagination-previous-arrow {
  margin-right: 1ch;
  display: inline-block;
}
.wp-block-comments-pagination .wp-block-comments-pagination-previous-arrow:not(.is-arrow-chevron) {
  transform: scaleX(1) /*rtl:scaleX(-1);*/;
}
.wp-block-comments-pagination .wp-block-comments-pagination-next-arrow {
  margin-left: 1ch;
  display: inline-block;
}
.wp-block-comments-pagination .wp-block-comments-pagination-next-arrow:not(.is-arrow-chevron) {
  transform: scaleX(1) /*rtl:scaleX(-1);*/;
}
.wp-block-comments-pagination.aligncenter {
  justify-content: center;
}

.wp-block-comment-template {
  box-sizing: border-box;
  margin-bottom: 0;
  max-width: 100%;
  list-style: none;
  padding: 0;
}
.wp-block-comment-template li {
  clear: both;
}
.wp-block-comment-template ol {
  margin-bottom: 0;
  max-width: 100%;
  list-style: none;
  padding-left: 2rem;
}
.wp-block-comment-template.alignleft {
  float: left;
}
.wp-block-comment-template.aligncenter {
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
}
.wp-block-comment-template.alignright {
  float: right;
}

.wp-block-comment-date {
  box-sizing: border-box;
}

.comment-awaiting-moderation {
  display: block;
  font-size: 0.875em;
  line-height: 1.5;
}

.wp-block-comment-content {
  box-sizing: border-box;
}

.wp-block-comment-author-name {
  box-sizing: border-box;
}

.wp-block-comment-edit-link {
  box-sizing: border-box;
}

.wp-block-comment-reply-link {
  box-sizing: border-box;
}

.wp-block-cover-image,
.wp-block-cover {
  min-height: 430px;
  padding: 1em;
  position: relative;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  overflow: clip;
  box-sizing: border-box;
  /*rtl:raw: direction: ltr; */
  /**
   * Set a default background color for has-background-dim _unless_ it includes another
   * background-color class (e.g. has-green-background-color). The presence of another
   * background-color class implies that another style will provide the background color
   * for the overlay.
   *
   * See:
   *   - Issue with background color specificity: https://github.com/WordPress/gutenberg/issues/26545
   *   - Issue with alternative fix: https://github.com/WordPress/gutenberg/issues/26545
   */
}
.wp-block-cover-image.has-background-dim:not([class*=-background-color]),
.wp-block-cover-image .has-background-dim:not([class*=-background-color]),
.wp-block-cover.has-background-dim:not([class*=-background-color]),
.wp-block-cover .has-background-dim:not([class*=-background-color]) {
  background-color: #000;
}
.wp-block-cover-image .has-background-dim.has-background-gradient,
.wp-block-cover .has-background-dim.has-background-gradient {
  background-color: transparent;
}
.wp-block-cover-image.has-background-dim::before,
.wp-block-cover.has-background-dim::before {
  content: "";
  background-color: inherit;
}
.wp-block-cover-image.has-background-dim:not(.has-background-gradient)::before,
.wp-block-cover-image .wp-block-cover__background,
.wp-block-cover-image .wp-block-cover__gradient-background,
.wp-block-cover.has-background-dim:not(.has-background-gradient)::before,
.wp-block-cover .wp-block-cover__background,
.wp-block-cover .wp-block-cover__gradient-background {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.5;
}
.wp-block-cover-image.has-background-dim.has-background-dim-10:not(.has-background-gradient)::before,
.wp-block-cover-image.has-background-dim.has-background-dim-10 .wp-block-cover__background,
.wp-block-cover-image.has-background-dim.has-background-dim-10 .wp-block-cover__gradient-background,
.wp-block-cover.has-background-dim.has-background-dim-10:not(.has-background-gradient)::before,
.wp-block-cover.has-background-dim.has-background-dim-10 .wp-block-cover__background,
.wp-block-cover.has-background-dim.has-background-dim-10 .wp-block-cover__gradient-background {
  opacity: 0.1;
}
.wp-block-cover-image.has-background-dim.has-background-dim-20:not(.has-background-gradient)::before,
.wp-block-cover-image.has-background-dim.has-background-dim-20 .wp-block-cover__background,
.wp-block-cover-image.has-background-dim.has-background-dim-20 .wp-block-cover__gradient-background,
.wp-block-cover.has-background-dim.has-background-dim-20:not(.has-background-gradient)::before,
.wp-block-cover.has-background-dim.has-background-dim-20 .wp-block-cover__background,
.wp-block-cover.has-background-dim.has-background-dim-20 .wp-block-cover__gradient-background {
  opacity: 0.2;
}
.wp-block-cover-image.has-background-dim.has-background-dim-30:not(.has-background-gradient)::before,
.wp-block-cover-image.has-background-dim.has-background-dim-30 .wp-block-cover__background,
.wp-block-cover-image.has-background-dim.has-background-dim-30 .wp-block-cover__gradient-background,
.wp-block-cover.has-background-dim.has-background-dim-30:not(.has-background-gradient)::before,
.wp-block-cover.has-background-dim.has-background-dim-30 .wp-block-cover__background,
.wp-block-cover.has-background-dim.has-background-dim-30 .wp-block-cover__gradient-background {
  opacity: 0.3;
}
.wp-block-cover-image.has-background-dim.has-background-dim-40:not(.has-background-gradient)::before,
.wp-block-cover-image.has-background-dim.has-background-dim-40 .wp-block-cover__background,
.wp-block-cover-image.has-background-dim.has-background-dim-40 .wp-block-cover__gradient-background,
.wp-block-cover.has-background-dim.has-background-dim-40:not(.has-background-gradient)::before,
.wp-block-cover.has-background-dim.has-background-dim-40 .wp-block-cover__background,
.wp-block-cover.has-background-dim.has-background-dim-40 .wp-block-cover__gradient-background {
  opacity: 0.4;
}
.wp-block-cover-image.has-background-dim.has-background-dim-50:not(.has-background-gradient)::before,
.wp-block-cover-image.has-background-dim.has-background-dim-50 .wp-block-cover__background,
.wp-block-cover-image.has-background-dim.has-background-dim-50 .wp-block-cover__gradient-background,
.wp-block-cover.has-background-dim.has-background-dim-50:not(.has-background-gradient)::before,
.wp-block-cover.has-background-dim.has-background-dim-50 .wp-block-cover__background,
.wp-block-cover.has-background-dim.has-background-dim-50 .wp-block-cover__gradient-background {
  opacity: 0.5;
}
.wp-block-cover-image.has-background-dim.has-background-dim-60:not(.has-background-gradient)::before,
.wp-block-cover-image.has-background-dim.has-background-dim-60 .wp-block-cover__background,
.wp-block-cover-image.has-background-dim.has-background-dim-60 .wp-block-cover__gradient-background,
.wp-block-cover.has-background-dim.has-background-dim-60:not(.has-background-gradient)::before,
.wp-block-cover.has-background-dim.has-background-dim-60 .wp-block-cover__background,
.wp-block-cover.has-background-dim.has-background-dim-60 .wp-block-cover__gradient-background {
  opacity: 0.6;
}
.wp-block-cover-image.has-background-dim.has-background-dim-70:not(.has-background-gradient)::before,
.wp-block-cover-image.has-background-dim.has-background-dim-70 .wp-block-cover__background,
.wp-block-cover-image.has-background-dim.has-background-dim-70 .wp-block-cover__gradient-background,
.wp-block-cover.has-background-dim.has-background-dim-70:not(.has-background-gradient)::before,
.wp-block-cover.has-background-dim.has-background-dim-70 .wp-block-cover__background,
.wp-block-cover.has-background-dim.has-background-dim-70 .wp-block-cover__gradient-background {
  opacity: 0.7;
}
.wp-block-cover-image.has-background-dim.has-background-dim-80:not(.has-background-gradient)::before,
.wp-block-cover-image.has-background-dim.has-background-dim-80 .wp-block-cover__background,
.wp-block-cover-image.has-background-dim.has-background-dim-80 .wp-block-cover__gradient-background,
.wp-block-cover.has-background-dim.has-background-dim-80:not(.has-background-gradient)::before,
.wp-block-cover.has-background-dim.has-background-dim-80 .wp-block-cover__background,
.wp-block-cover.has-background-dim.has-background-dim-80 .wp-block-cover__gradient-background {
  opacity: 0.8;
}
.wp-block-cover-image.has-background-dim.has-background-dim-90:not(.has-background-gradient)::before,
.wp-block-cover-image.has-background-dim.has-background-dim-90 .wp-block-cover__background,
.wp-block-cover-image.has-background-dim.has-background-dim-90 .wp-block-cover__gradient-background,
.wp-block-cover.has-background-dim.has-background-dim-90:not(.has-background-gradient)::before,
.wp-block-cover.has-background-dim.has-background-dim-90 .wp-block-cover__background,
.wp-block-cover.has-background-dim.has-background-dim-90 .wp-block-cover__gradient-background {
  opacity: 0.9;
}
.wp-block-cover-image.has-background-dim.has-background-dim-100:not(.has-background-gradient)::before,
.wp-block-cover-image.has-background-dim.has-background-dim-100 .wp-block-cover__background,
.wp-block-cover-image.has-background-dim.has-background-dim-100 .wp-block-cover__gradient-background,
.wp-block-cover.has-background-dim.has-background-dim-100:not(.has-background-gradient)::before,
.wp-block-cover.has-background-dim.has-background-dim-100 .wp-block-cover__background,
.wp-block-cover.has-background-dim.has-background-dim-100 .wp-block-cover__gradient-background {
  opacity: 1;
}
.wp-block-cover-image .wp-block-cover__gradient-background.has-background-dim.has-background-dim-0,
.wp-block-cover-image .wp-block-cover__background.has-background-dim.has-background-dim-0,
.wp-block-cover .wp-block-cover__gradient-background.has-background-dim.has-background-dim-0,
.wp-block-cover .wp-block-cover__background.has-background-dim.has-background-dim-0 {
  opacity: 0;
}
.wp-block-cover-image .wp-block-cover__gradient-background.has-background-dim.has-background-dim-10,
.wp-block-cover-image .wp-block-cover__background.has-background-dim.has-background-dim-10,
.wp-block-cover .wp-block-cover__gradient-background.has-background-dim.has-background-dim-10,
.wp-block-cover .wp-block-cover__background.has-background-dim.has-background-dim-10 {
  opacity: 0.1;
}
.wp-block-cover-image .wp-block-cover__gradient-background.has-background-dim.has-background-dim-20,
.wp-block-cover-image .wp-block-cover__background.has-background-dim.has-background-dim-20,
.wp-block-cover .wp-block-cover__gradient-background.has-background-dim.has-background-dim-20,
.wp-block-cover .wp-block-cover__background.has-background-dim.has-background-dim-20 {
  opacity: 0.2;
}
.wp-block-cover-image .wp-block-cover__gradient-background.has-background-dim.has-background-dim-30,
.wp-block-cover-image .wp-block-cover__background.has-background-dim.has-background-dim-30,
.wp-block-cover .wp-block-cover__gradient-background.has-background-dim.has-background-dim-30,
.wp-block-cover .wp-block-cover__background.has-background-dim.has-background-dim-30 {
  opacity: 0.3;
}
.wp-block-cover-image .wp-block-cover__gradient-background.has-background-dim.has-background-dim-40,
.wp-block-cover-image .wp-block-cover__background.has-background-dim.has-background-dim-40,
.wp-block-cover .wp-block-cover__gradient-background.has-background-dim.has-background-dim-40,
.wp-block-cover .wp-block-cover__background.has-background-dim.has-background-dim-40 {
  opacity: 0.4;
}
.wp-block-cover-image .wp-block-cover__gradient-background.has-background-dim.has-background-dim-50,
.wp-block-cover-image .wp-block-cover__background.has-background-dim.has-background-dim-50,
.wp-block-cover .wp-block-cover__gradient-background.has-background-dim.has-background-dim-50,
.wp-block-cover .wp-block-cover__background.has-background-dim.has-background-dim-50 {
  opacity: 0.5;
}
.wp-block-cover-image .wp-block-cover__gradient-background.has-background-dim.has-background-dim-60,
.wp-block-cover-image .wp-block-cover__background.has-background-dim.has-background-dim-60,
.wp-block-cover .wp-block-cover__gradient-background.has-background-dim.has-background-dim-60,
.wp-block-cover .wp-block-cover__background.has-background-dim.has-background-dim-60 {
  opacity: 0.6;
}
.wp-block-cover-image .wp-block-cover__gradient-background.has-background-dim.has-background-dim-70,
.wp-block-cover-image .wp-block-cover__background.has-background-dim.has-background-dim-70,
.wp-block-cover .wp-block-cover__gradient-background.has-background-dim.has-background-dim-70,
.wp-block-cover .wp-block-cover__background.has-background-dim.has-background-dim-70 {
  opacity: 0.7;
}
.wp-block-cover-image .wp-block-cover__gradient-background.has-background-dim.has-background-dim-80,
.wp-block-cover-image .wp-block-cover__background.has-background-dim.has-background-dim-80,
.wp-block-cover .wp-block-cover__gradient-background.has-background-dim.has-background-dim-80,
.wp-block-cover .wp-block-cover__background.has-background-dim.has-background-dim-80 {
  opacity: 0.8;
}
.wp-block-cover-image .wp-block-cover__gradient-background.has-background-dim.has-background-dim-90,
.wp-block-cover-image .wp-block-cover__background.has-background-dim.has-background-dim-90,
.wp-block-cover .wp-block-cover__gradient-background.has-background-dim.has-background-dim-90,
.wp-block-cover .wp-block-cover__background.has-background-dim.has-background-dim-90 {
  opacity: 0.9;
}
.wp-block-cover-image .wp-block-cover__gradient-background.has-background-dim.has-background-dim-100,
.wp-block-cover-image .wp-block-cover__background.has-background-dim.has-background-dim-100,
.wp-block-cover .wp-block-cover__gradient-background.has-background-dim.has-background-dim-100,
.wp-block-cover .wp-block-cover__background.has-background-dim.has-background-dim-100 {
  opacity: 1;
}
.wp-block-cover-image.alignleft, .wp-block-cover-image.alignright,
.wp-block-cover.alignleft,
.wp-block-cover.alignright {
  max-width: 420px;
  width: 100%;
}
.wp-block-cover-image.aligncenter, .wp-block-cover-image.alignleft, .wp-block-cover-image.alignright,
.wp-block-cover.aligncenter,
.wp-block-cover.alignleft,
.wp-block-cover.alignright {
  display: flex;
}
.wp-block-cover-image .wp-block-cover__inner-container,
.wp-block-cover .wp-block-cover__inner-container {
  position: relative;
  width: 100%;
  color: inherit;
  /*rtl:raw: direction: rtl; */
}
.wp-block-cover-image.is-position-top-left,
.wp-block-cover.is-position-top-left {
  align-items: flex-start;
  justify-content: flex-start;
}
.wp-block-cover-image.is-position-top-center,
.wp-block-cover.is-position-top-center {
  align-items: flex-start;
  justify-content: center;
}
.wp-block-cover-image.is-position-top-right,
.wp-block-cover.is-position-top-right {
  align-items: flex-start;
  justify-content: flex-end;
}
.wp-block-cover-image.is-position-center-left,
.wp-block-cover.is-position-center-left {
  align-items: center;
  justify-content: flex-start;
}
.wp-block-cover-image.is-position-center-center,
.wp-block-cover.is-position-center-center {
  align-items: center;
  justify-content: center;
}
.wp-block-cover-image.is-position-center-right,
.wp-block-cover.is-position-center-right {
  align-items: center;
  justify-content: flex-end;
}
.wp-block-cover-image.is-position-bottom-left,
.wp-block-cover.is-position-bottom-left {
  align-items: flex-end;
  justify-content: flex-start;
}
.wp-block-cover-image.is-position-bottom-center,
.wp-block-cover.is-position-bottom-center {
  align-items: flex-end;
  justify-content: center;
}
.wp-block-cover-image.is-position-bottom-right,
.wp-block-cover.is-position-bottom-right {
  align-items: flex-end;
  justify-content: flex-end;
}
.wp-block-cover-image.has-custom-content-position.has-custom-content-position .wp-block-cover__inner-container,
.wp-block-cover.has-custom-content-position.has-custom-content-position .wp-block-cover__inner-container {
  margin: 0;
}
.wp-block-cover-image.has-custom-content-position.has-custom-content-position.is-position-top-left .wp-block-cover__inner-container, .wp-block-cover-image.has-custom-content-position.has-custom-content-position.is-position-top-right .wp-block-cover__inner-container, .wp-block-cover-image.has-custom-content-position.has-custom-content-position.is-position-center-left .wp-block-cover__inner-container, .wp-block-cover-image.has-custom-content-position.has-custom-content-position.is-position-center-right .wp-block-cover__inner-container, .wp-block-cover-image.has-custom-content-position.has-custom-content-position.is-position-bottom-left .wp-block-cover__inner-container, .wp-block-cover-image.has-custom-content-position.has-custom-content-position.is-position-bottom-right .wp-block-cover__inner-container,
.wp-block-cover.has-custom-content-position.has-custom-content-position.is-position-top-left .wp-block-cover__inner-container,
.wp-block-cover.has-custom-content-position.has-custom-content-position.is-position-top-right .wp-block-cover__inner-container,
.wp-block-cover.has-custom-content-position.has-custom-content-position.is-position-center-left .wp-block-cover__inner-container,
.wp-block-cover.has-custom-content-position.has-custom-content-position.is-position-center-right .wp-block-cover__inner-container,
.wp-block-cover.has-custom-content-position.has-custom-content-position.is-position-bottom-left .wp-block-cover__inner-container,
.wp-block-cover.has-custom-content-position.has-custom-content-position.is-position-bottom-right .wp-block-cover__inner-container {
  margin: 0;
  width: auto;
}
.wp-block-cover-image .wp-block-cover__image-background,
.wp-block-cover-image video.wp-block-cover__video-background,
.wp-block-cover .wp-block-cover__image-background,
.wp-block-cover video.wp-block-cover__video-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  max-width: none;
  max-height: none;
  object-fit: cover;
  outline: none;
  border: none;
  box-shadow: none;
}

.wp-block-cover-image.has-parallax,
.wp-block-cover.has-parallax,
.wp-block-cover__image-background.has-parallax,
video.wp-block-cover__video-background.has-parallax {
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
@supports (-webkit-touch-callout: inherit) {
  .wp-block-cover-image.has-parallax,
.wp-block-cover.has-parallax,
.wp-block-cover__image-background.has-parallax,
video.wp-block-cover__video-background.has-parallax {
    background-attachment: scroll;
  }
}
@media (prefers-reduced-motion: reduce) {
  .wp-block-cover-image.has-parallax,
.wp-block-cover.has-parallax,
.wp-block-cover__image-background.has-parallax,
video.wp-block-cover__video-background.has-parallax {
    background-attachment: scroll;
  }
}
.wp-block-cover-image.is-repeated,
.wp-block-cover.is-repeated,
.wp-block-cover__image-background.is-repeated,
video.wp-block-cover__video-background.is-repeated {
  background-repeat: repeat;
  background-size: auto;
}

section.wp-block-cover-image h2,
.wp-block-cover-image-text,
.wp-block-cover-text {
  color: #fff;
}
section.wp-block-cover-image h2 a,
section.wp-block-cover-image h2 a:hover,
section.wp-block-cover-image h2 a:focus,
section.wp-block-cover-image h2 a:active,
.wp-block-cover-image-text a,
.wp-block-cover-image-text a:hover,
.wp-block-cover-image-text a:focus,
.wp-block-cover-image-text a:active,
.wp-block-cover-text a,
.wp-block-cover-text a:hover,
.wp-block-cover-text a:focus,
.wp-block-cover-text a:active {
  color: #fff;
}

.wp-block-cover-image .wp-block-cover.has-left-content {
  justify-content: flex-start;
}
.wp-block-cover-image .wp-block-cover.has-right-content {
  justify-content: flex-end;
}

section.wp-block-cover-image.has-left-content > h2,
.wp-block-cover-image.has-left-content .wp-block-cover-image-text,
.wp-block-cover.has-left-content .wp-block-cover-text {
  margin-left: 0;
  text-align: left;
}

section.wp-block-cover-image.has-right-content > h2,
.wp-block-cover-image.has-right-content .wp-block-cover-image-text,
.wp-block-cover.has-right-content .wp-block-cover-text {
  margin-right: 0;
  text-align: right;
}

section.wp-block-cover-image > h2,
.wp-block-cover-image .wp-block-cover-image-text,
.wp-block-cover .wp-block-cover-text {
  font-size: 2em;
  line-height: 1.25;
  z-index: 1;
  margin-bottom: 0;
  max-width: 840px;
  padding: 0.44em;
  text-align: center;
}

:where(.wp-block-cover:not(.has-text-color)),
:where(.wp-block-cover-image:not(.has-text-color)) {
  color: #fff;
}

:where(.wp-block-cover.is-light:not(.has-text-color)),
:where(.wp-block-cover-image.is-light:not(.has-text-color)) {
  color: #000;
}

:root :where(.wp-block-cover p:not(.has-text-color)),
:root :where(.wp-block-cover h1:not(.has-text-color)),
:root :where(.wp-block-cover h2:not(.has-text-color)),
:root :where(.wp-block-cover h3:not(.has-text-color)),
:root :where(.wp-block-cover h4:not(.has-text-color)),
:root :where(.wp-block-cover h5:not(.has-text-color)),
:root :where(.wp-block-cover h6:not(.has-text-color)) {
  color: inherit;
}

body:not(.editor-styles-wrapper) .wp-block-cover:not(.wp-block-cover:has(.wp-block-cover__background + .wp-block-cover__inner-container)) .wp-block-cover__video-background {
  z-index: 0;
}
body:not(.editor-styles-wrapper) .wp-block-cover:not(.wp-block-cover:has(.wp-block-cover__background + .wp-block-cover__inner-container)) .wp-block-cover__image-background {
  z-index: 0;
}
body:not(.editor-styles-wrapper) .wp-block-cover:not(.wp-block-cover:has(.wp-block-cover__background + .wp-block-cover__inner-container)).has-background-dim:not(.has-background-gradient)::before,
body:not(.editor-styles-wrapper) .wp-block-cover:not(.wp-block-cover:has(.wp-block-cover__background + .wp-block-cover__inner-container)) .wp-block-cover__background,
body:not(.editor-styles-wrapper) .wp-block-cover:not(.wp-block-cover:has(.wp-block-cover__background + .wp-block-cover__inner-container)) .wp-block-cover__gradient-background {
  z-index: 1;
}
body:not(.editor-styles-wrapper) .wp-block-cover:not(.wp-block-cover:has(.wp-block-cover__background + .wp-block-cover__inner-container)) .wp-block-cover__inner-container {
  z-index: 1;
}
.has-modal-open body:not(.editor-styles-wrapper) .wp-block-cover:not(.wp-block-cover:has(.wp-block-cover__background + .wp-block-cover__inner-container)) .wp-block-cover__inner-container {
  z-index: auto;
}

.wp-block-details {
  box-sizing: border-box;
}

.wp-block-details summary {
  cursor: pointer;
}

.wp-block[data-align=left] > [data-type="core/embed"],
.wp-block[data-align=right] > [data-type="core/embed"],
.wp-block-embed.alignleft,
.wp-block-embed.alignright {
  max-width: 360px;
  width: 100%;
}
.wp-block[data-align=left] > [data-type="core/embed"] .wp-block-embed__wrapper,
.wp-block[data-align=right] > [data-type="core/embed"] .wp-block-embed__wrapper,
.wp-block-embed.alignleft .wp-block-embed__wrapper,
.wp-block-embed.alignright .wp-block-embed__wrapper {
  min-width: 280px;
}

.wp-block-cover .wp-block-embed {
  min-width: 320px;
  min-height: 240px;
}

.wp-block-embed {
  overflow-wrap: break-word;
}
.wp-block-embed :where(figcaption) {
  margin-top: 0.5em;
  margin-bottom: 1em;
}
.wp-block-embed iframe {
  max-width: 100%;
}

.wp-block-embed__wrapper {
  position: relative;
}

.wp-embed-responsive .wp-has-aspect-ratio .wp-block-embed__wrapper::before {
  content: "";
  display: block;
  padding-top: 50%;
}
.wp-embed-responsive .wp-has-aspect-ratio iframe {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.wp-embed-responsive .wp-embed-aspect-21-9 .wp-block-embed__wrapper::before {
  padding-top: 42.85%;
}
.wp-embed-responsive .wp-embed-aspect-18-9 .wp-block-embed__wrapper::before {
  padding-top: 50%;
}
.wp-embed-responsive .wp-embed-aspect-16-9 .wp-block-embed__wrapper::before {
  padding-top: 56.25%;
}
.wp-embed-responsive .wp-embed-aspect-4-3 .wp-block-embed__wrapper::before {
  padding-top: 75%;
}
.wp-embed-responsive .wp-embed-aspect-1-1 .wp-block-embed__wrapper::before {
  padding-top: 100%;
}
.wp-embed-responsive .wp-embed-aspect-9-16 .wp-block-embed__wrapper::before {
  padding-top: 177.77%;
}
.wp-embed-responsive .wp-embed-aspect-1-2 .wp-block-embed__wrapper::before {
  padding-top: 200%;
}

.wp-block-file {
  box-sizing: border-box;
}
.wp-block-file:not(.wp-element-button) {
  font-size: 0.8em;
}
.wp-block-file.aligncenter {
  text-align: center;
}
.wp-block-file.alignright {
  /*rtl:ignore*/
  text-align: right;
}
.wp-block-file * + .wp-block-file__button {
  margin-left: 0.75em;
}

:where(.wp-block-file) {
  margin-bottom: 1.5em;
}

.wp-block-file__embed {
  margin-bottom: 1em;
}

:where(.wp-block-file__button) {
  border-radius: 2em;
  padding: 0.5em 1em;
  display: inline-block;
}
:where(.wp-block-file__button):where(a):hover, :where(.wp-block-file__button):where(a):visited, :where(.wp-block-file__button):where(a):focus, :where(.wp-block-file__button):where(a):active {
  box-shadow: none;
  color: #fff;
  opacity: 0.85;
  text-decoration: none;
}

.wp-block-form-input__label {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  margin-bottom: 0.5em;
}
.wp-block-form-input__label.is-label-inline {
  flex-direction: row;
  gap: 0.5em;
  align-items: center;
}
.wp-block-form-input__label.is-label-inline .wp-block-form-input__label-content {
  margin-bottom: 0.5em;
}
.wp-block-form-input__label:has(input[type=checkbox]) {
  flex-direction: row;
  width: fit-content;
}
.wp-block-form-input__label:has(input[type=checkbox]) .wp-block-form-input__label-content {
  margin: 0;
}
.wp-block-form-input__label:has(.wp-block-form-input__label-content + input[type=checkbox]) {
  /* stylelint-disable-next-line declaration-property-value-allowed-list -- This style is required for old markup. */
  flex-direction: row-reverse;
}

.wp-block-form-input__label-content {
  width: fit-content;
}

.wp-block-form-input__input {
  padding: 0 0.5em;
  font-size: 1em;
  margin-bottom: 0.5em;
}
.wp-block-form-input__input[type=text], .wp-block-form-input__input[type=password], .wp-block-form-input__input[type=date], .wp-block-form-input__input[type=datetime], .wp-block-form-input__input[type=datetime-local], .wp-block-form-input__input[type=email], .wp-block-form-input__input[type=month], .wp-block-form-input__input[type=number], .wp-block-form-input__input[type=search], .wp-block-form-input__input[type=tel], .wp-block-form-input__input[type=time], .wp-block-form-input__input[type=url], .wp-block-form-input__input[type=week] {
  min-height: 2em;
  line-height: 2;
  border: 1px solid;
}

textarea.wp-block-form-input__input {
  min-height: 10em;
}

.wp-block-gallery:not(.has-nested-images),
.blocks-gallery-grid:not(.has-nested-images) {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-image,
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-item,
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-image,
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-item {
  margin: 0 1em 1em 0;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: calc(50% - 1em);
}
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-image:nth-of-type(even),
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-item:nth-of-type(even),
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-image:nth-of-type(even),
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-item:nth-of-type(even) {
  margin-right: 0;
}
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-image figure,
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-item figure,
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-image figure,
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-item figure {
  margin: 0;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-image img,
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-item img,
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-image img,
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-item img {
  display: block;
  max-width: 100%;
  height: auto;
  width: auto;
}
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-image figcaption,
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-item figcaption,
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-image figcaption,
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-item figcaption {
  position: absolute;
  bottom: 0;
  width: 100%;
  max-height: 100%;
  overflow: auto;
  padding: 3em 0.77em 0.7em;
  color: #fff;
  text-align: center;
  font-size: 0.8em;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0, rgba(0, 0, 0, 0.3) 70%, transparent);
  box-sizing: border-box;
  margin: 0;
  z-index: 2;
}
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-image figcaption img,
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-item figcaption img,
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-image figcaption img,
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-item figcaption img {
  display: inline;
}
.wp-block-gallery:not(.has-nested-images) figcaption,
.blocks-gallery-grid:not(.has-nested-images) figcaption {
  flex-grow: 1;
}
.wp-block-gallery:not(.has-nested-images).is-cropped .blocks-gallery-image a,
.wp-block-gallery:not(.has-nested-images).is-cropped .blocks-gallery-image img, .wp-block-gallery:not(.has-nested-images).is-cropped .blocks-gallery-item a,
.wp-block-gallery:not(.has-nested-images).is-cropped .blocks-gallery-item img,
.blocks-gallery-grid:not(.has-nested-images).is-cropped .blocks-gallery-image a,
.blocks-gallery-grid:not(.has-nested-images).is-cropped .blocks-gallery-image img,
.blocks-gallery-grid:not(.has-nested-images).is-cropped .blocks-gallery-item a,
.blocks-gallery-grid:not(.has-nested-images).is-cropped .blocks-gallery-item img {
  width: 100%;
  height: 100%;
  flex: 1;
  object-fit: cover;
}
.wp-block-gallery:not(.has-nested-images).columns-1 .blocks-gallery-image, .wp-block-gallery:not(.has-nested-images).columns-1 .blocks-gallery-item,
.blocks-gallery-grid:not(.has-nested-images).columns-1 .blocks-gallery-image,
.blocks-gallery-grid:not(.has-nested-images).columns-1 .blocks-gallery-item {
  width: 100%;
  margin-right: 0;
}
@media (min-width: 600px) {
  .wp-block-gallery:not(.has-nested-images).columns-3 .blocks-gallery-image, .wp-block-gallery:not(.has-nested-images).columns-3 .blocks-gallery-item,
.blocks-gallery-grid:not(.has-nested-images).columns-3 .blocks-gallery-image,
.blocks-gallery-grid:not(.has-nested-images).columns-3 .blocks-gallery-item {
    width: calc(33.3333333333% - 0.6666666667em);
    margin-right: 1em;
  }
  .wp-block-gallery:not(.has-nested-images).columns-4 .blocks-gallery-image, .wp-block-gallery:not(.has-nested-images).columns-4 .blocks-gallery-item,
.blocks-gallery-grid:not(.has-nested-images).columns-4 .blocks-gallery-image,
.blocks-gallery-grid:not(.has-nested-images).columns-4 .blocks-gallery-item {
    width: calc(25% - 0.75em);
    margin-right: 1em;
  }
  .wp-block-gallery:not(.has-nested-images).columns-5 .blocks-gallery-image, .wp-block-gallery:not(.has-nested-images).columns-5 .blocks-gallery-item,
.blocks-gallery-grid:not(.has-nested-images).columns-5 .blocks-gallery-image,
.blocks-gallery-grid:not(.has-nested-images).columns-5 .blocks-gallery-item {
    width: calc(20% - 0.8em);
    margin-right: 1em;
  }
  .wp-block-gallery:not(.has-nested-images).columns-6 .blocks-gallery-image, .wp-block-gallery:not(.has-nested-images).columns-6 .blocks-gallery-item,
.blocks-gallery-grid:not(.has-nested-images).columns-6 .blocks-gallery-image,
.blocks-gallery-grid:not(.has-nested-images).columns-6 .blocks-gallery-item {
    width: calc(16.6666666667% - 0.8333333333em);
    margin-right: 1em;
  }
  .wp-block-gallery:not(.has-nested-images).columns-7 .blocks-gallery-image, .wp-block-gallery:not(.has-nested-images).columns-7 .blocks-gallery-item,
.blocks-gallery-grid:not(.has-nested-images).columns-7 .blocks-gallery-image,
.blocks-gallery-grid:not(.has-nested-images).columns-7 .blocks-gallery-item {
    width: calc(14.2857142857% - 0.8571428571em);
    margin-right: 1em;
  }
  .wp-block-gallery:not(.has-nested-images).columns-8 .blocks-gallery-image, .wp-block-gallery:not(.has-nested-images).columns-8 .blocks-gallery-item,
.blocks-gallery-grid:not(.has-nested-images).columns-8 .blocks-gallery-image,
.blocks-gallery-grid:not(.has-nested-images).columns-8 .blocks-gallery-item {
    width: calc(12.5% - 0.875em);
    margin-right: 1em;
  }
  .wp-block-gallery:not(.has-nested-images).columns-1 .blocks-gallery-image:nth-of-type(1n), .wp-block-gallery:not(.has-nested-images).columns-1 .blocks-gallery-item:nth-of-type(1n),
.blocks-gallery-grid:not(.has-nested-images).columns-1 .blocks-gallery-image:nth-of-type(1n),
.blocks-gallery-grid:not(.has-nested-images).columns-1 .blocks-gallery-item:nth-of-type(1n) {
    margin-right: 0;
  }
  .wp-block-gallery:not(.has-nested-images).columns-2 .blocks-gallery-image:nth-of-type(2n), .wp-block-gallery:not(.has-nested-images).columns-2 .blocks-gallery-item:nth-of-type(2n),
.blocks-gallery-grid:not(.has-nested-images).columns-2 .blocks-gallery-image:nth-of-type(2n),
.blocks-gallery-grid:not(.has-nested-images).columns-2 .blocks-gallery-item:nth-of-type(2n) {
    margin-right: 0;
  }
  .wp-block-gallery:not(.has-nested-images).columns-3 .blocks-gallery-image:nth-of-type(3n), .wp-block-gallery:not(.has-nested-images).columns-3 .blocks-gallery-item:nth-of-type(3n),
.blocks-gallery-grid:not(.has-nested-images).columns-3 .blocks-gallery-image:nth-of-type(3n),
.blocks-gallery-grid:not(.has-nested-images).columns-3 .blocks-gallery-item:nth-of-type(3n) {
    margin-right: 0;
  }
  .wp-block-gallery:not(.has-nested-images).columns-4 .blocks-gallery-image:nth-of-type(4n), .wp-block-gallery:not(.has-nested-images).columns-4 .blocks-gallery-item:nth-of-type(4n),
.blocks-gallery-grid:not(.has-nested-images).columns-4 .blocks-gallery-image:nth-of-type(4n),
.blocks-gallery-grid:not(.has-nested-images).columns-4 .blocks-gallery-item:nth-of-type(4n) {
    margin-right: 0;
  }
  .wp-block-gallery:not(.has-nested-images).columns-5 .blocks-gallery-image:nth-of-type(5n), .wp-block-gallery:not(.has-nested-images).columns-5 .blocks-gallery-item:nth-of-type(5n),
.blocks-gallery-grid:not(.has-nested-images).columns-5 .blocks-gallery-image:nth-of-type(5n),
.blocks-gallery-grid:not(.has-nested-images).columns-5 .blocks-gallery-item:nth-of-type(5n) {
    margin-right: 0;
  }
  .wp-block-gallery:not(.has-nested-images).columns-6 .blocks-gallery-image:nth-of-type(6n), .wp-block-gallery:not(.has-nested-images).columns-6 .blocks-gallery-item:nth-of-type(6n),
.blocks-gallery-grid:not(.has-nested-images).columns-6 .blocks-gallery-image:nth-of-type(6n),
.blocks-gallery-grid:not(.has-nested-images).columns-6 .blocks-gallery-item:nth-of-type(6n) {
    margin-right: 0;
  }
  .wp-block-gallery:not(.has-nested-images).columns-7 .blocks-gallery-image:nth-of-type(7n), .wp-block-gallery:not(.has-nested-images).columns-7 .blocks-gallery-item:nth-of-type(7n),
.blocks-gallery-grid:not(.has-nested-images).columns-7 .blocks-gallery-image:nth-of-type(7n),
.blocks-gallery-grid:not(.has-nested-images).columns-7 .blocks-gallery-item:nth-of-type(7n) {
    margin-right: 0;
  }
  .wp-block-gallery:not(.has-nested-images).columns-8 .blocks-gallery-image:nth-of-type(8n), .wp-block-gallery:not(.has-nested-images).columns-8 .blocks-gallery-item:nth-of-type(8n),
.blocks-gallery-grid:not(.has-nested-images).columns-8 .blocks-gallery-image:nth-of-type(8n),
.blocks-gallery-grid:not(.has-nested-images).columns-8 .blocks-gallery-item:nth-of-type(8n) {
    margin-right: 0;
  }
}
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-image:last-child,
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-item:last-child,
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-image:last-child,
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-item:last-child {
  margin-right: 0;
}
.wp-block-gallery:not(.has-nested-images).alignleft, .wp-block-gallery:not(.has-nested-images).alignright,
.blocks-gallery-grid:not(.has-nested-images).alignleft,
.blocks-gallery-grid:not(.has-nested-images).alignright {
  max-width: 420px;
  width: 100%;
}
.wp-block-gallery:not(.has-nested-images).aligncenter .blocks-gallery-item figure,
.blocks-gallery-grid:not(.has-nested-images).aligncenter .blocks-gallery-item figure {
  justify-content: center;
}

.wp-block-gallery:not(.is-cropped) .blocks-gallery-item {
  align-self: flex-start;
}

figure.wp-block-gallery.has-nested-images {
  align-items: normal;
}

.wp-block-gallery.has-nested-images figure.wp-block-image:not(#individual-image) {
  width: calc(50% - var(--wp--style--unstable-gallery-gap, 16px) / 2);
  margin: 0;
}
.wp-block-gallery.has-nested-images figure.wp-block-image {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  position: relative;
  flex-direction: column;
  max-width: 100%;
  box-sizing: border-box;
}
.wp-block-gallery.has-nested-images figure.wp-block-image > div,
.wp-block-gallery.has-nested-images figure.wp-block-image > a {
  margin: 0;
  flex-direction: column;
  flex-grow: 1;
}
.wp-block-gallery.has-nested-images figure.wp-block-image img {
  display: block;
  height: auto;
  max-width: 100% !important;
  width: auto;
}
.wp-block-gallery.has-nested-images figure.wp-block-image:has(figcaption)::before,
.wp-block-gallery.has-nested-images figure.wp-block-image figcaption {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  max-height: 100%;
}
.wp-block-gallery.has-nested-images figure.wp-block-image:has(figcaption)::before {
  content: "";
  height: 100%;
  max-height: 40%;
  pointer-events: none;
  backdrop-filter: blur(3px);
  -webkit-mask-image: linear-gradient(0deg, #000 20%, transparent 100%);
          mask-image: linear-gradient(0deg, #000 20%, transparent 100%);
}
.wp-block-gallery.has-nested-images figure.wp-block-image figcaption {
  color: #fff;
  text-shadow: 0 0 1.5px #000;
  font-size: 13px;
  margin: 0;
  overflow: auto;
  padding: 1em;
  text-align: center;
  box-sizing: border-box;
  scrollbar-width: thin;
  scrollbar-gutter: stable both-edges;
  scrollbar-color: transparent transparent;
  will-change: transform;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, transparent 100%);
}
.wp-block-gallery.has-nested-images figure.wp-block-image figcaption::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}
.wp-block-gallery.has-nested-images figure.wp-block-image figcaption::-webkit-scrollbar-track {
  background-color: transparent;
}
.wp-block-gallery.has-nested-images figure.wp-block-image figcaption::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 8px;
  border: 3px solid transparent;
  background-clip: padding-box;
}
.wp-block-gallery.has-nested-images figure.wp-block-image figcaption:hover::-webkit-scrollbar-thumb, .wp-block-gallery.has-nested-images figure.wp-block-image figcaption:focus::-webkit-scrollbar-thumb, .wp-block-gallery.has-nested-images figure.wp-block-image figcaption:focus-within::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.8);
}
.wp-block-gallery.has-nested-images figure.wp-block-image figcaption:hover, .wp-block-gallery.has-nested-images figure.wp-block-image figcaption:focus, .wp-block-gallery.has-nested-images figure.wp-block-image figcaption:focus-within {
  scrollbar-color: rgba(255, 255, 255, 0.8) transparent;
}
@media (hover: none) {
  .wp-block-gallery.has-nested-images figure.wp-block-image figcaption {
    scrollbar-color: rgba(255, 255, 255, 0.8) transparent;
  }
}
.wp-block-gallery.has-nested-images figure.wp-block-image figcaption img {
  display: inline;
}
.wp-block-gallery.has-nested-images figure.wp-block-image figcaption a {
  color: inherit;
}
.wp-block-gallery.has-nested-images figure.wp-block-image.has-custom-border img {
  box-sizing: border-box;
}
.wp-block-gallery.has-nested-images figure.wp-block-image.is-style-rounded > div,
.wp-block-gallery.has-nested-images figure.wp-block-image.is-style-rounded > a, .wp-block-gallery.has-nested-images figure.wp-block-image.has-custom-border > div,
.wp-block-gallery.has-nested-images figure.wp-block-image.has-custom-border > a {
  flex: 1 1 auto;
}
.wp-block-gallery.has-nested-images figure.wp-block-image.is-style-rounded figcaption, .wp-block-gallery.has-nested-images figure.wp-block-image.has-custom-border figcaption {
  flex: initial;
  background: none;
  color: inherit;
  margin: 0;
  padding: 10px 10px 9px;
  position: relative;
  text-shadow: none;
}
.wp-block-gallery.has-nested-images figure.wp-block-image.is-style-rounded::before, .wp-block-gallery.has-nested-images figure.wp-block-image.has-custom-border::before {
  content: none;
}
.wp-block-gallery.has-nested-images figcaption {
  flex-grow: 1;
  flex-basis: 100%;
  text-align: center;
}
.wp-block-gallery.has-nested-images:not(.is-cropped) figure.wp-block-image:not(#individual-image) {
  margin-top: 0;
  margin-bottom: auto;
}
.wp-block-gallery.has-nested-images.is-cropped figure.wp-block-image:not(#individual-image) {
  align-self: inherit;
}
.wp-block-gallery.has-nested-images.is-cropped figure.wp-block-image:not(#individual-image) > div:not(.components-drop-zone),
.wp-block-gallery.has-nested-images.is-cropped figure.wp-block-image:not(#individual-image) > a {
  display: flex;
}
.wp-block-gallery.has-nested-images.is-cropped figure.wp-block-image:not(#individual-image) a,
.wp-block-gallery.has-nested-images.is-cropped figure.wp-block-image:not(#individual-image) img {
  width: 100%;
  flex: 1 0 0%;
  height: 100%;
  object-fit: cover;
}
.wp-block-gallery.has-nested-images.columns-1 figure.wp-block-image:not(#individual-image) {
  width: 100%;
}
@media (min-width: 600px) {
  .wp-block-gallery.has-nested-images.columns-3 figure.wp-block-image:not(#individual-image) {
    width: calc(33.3333333333% - (var(--wp--style--unstable-gallery-gap, 16px) * 0.6666666667));
  }
  .wp-block-gallery.has-nested-images.columns-4 figure.wp-block-image:not(#individual-image) {
    width: calc(25% - (var(--wp--style--unstable-gallery-gap, 16px) * 0.75));
  }
  .wp-block-gallery.has-nested-images.columns-5 figure.wp-block-image:not(#individual-image) {
    width: calc(20% - (var(--wp--style--unstable-gallery-gap, 16px) * 0.8));
  }
  .wp-block-gallery.has-nested-images.columns-6 figure.wp-block-image:not(#individual-image) {
    width: calc(16.6666666667% - (var(--wp--style--unstable-gallery-gap, 16px) * 0.8333333333));
  }
  .wp-block-gallery.has-nested-images.columns-7 figure.wp-block-image:not(#individual-image) {
    width: calc(14.2857142857% - (var(--wp--style--unstable-gallery-gap, 16px) * 0.8571428571));
  }
  .wp-block-gallery.has-nested-images.columns-8 figure.wp-block-image:not(#individual-image) {
    width: calc(12.5% - (var(--wp--style--unstable-gallery-gap, 16px) * 0.875));
  }
  .wp-block-gallery.has-nested-images.columns-default figure.wp-block-image:not(#individual-image) {
    width: calc(33.33% - (var(--wp--style--unstable-gallery-gap, 16px) * 0.6666666667));
  }
  .wp-block-gallery.has-nested-images.columns-default figure.wp-block-image:not(#individual-image):first-child:nth-last-child(2),
.wp-block-gallery.has-nested-images.columns-default figure.wp-block-image:not(#individual-image):first-child:nth-last-child(2) ~ figure.wp-block-image:not(#individual-image) {
    width: calc(50% - var(--wp--style--unstable-gallery-gap, 16px) * 0.5);
  }
  .wp-block-gallery.has-nested-images.columns-default figure.wp-block-image:not(#individual-image):first-child:nth-last-child(1) {
    width: 100%;
  }
}
.wp-block-gallery.has-nested-images.alignleft, .wp-block-gallery.has-nested-images.alignright {
  max-width: 420px;
  width: 100%;
}
.wp-block-gallery.has-nested-images.aligncenter {
  justify-content: center;
}

.wp-block-group {
  box-sizing: border-box;
}

:where(.wp-block-group.wp-block-group-is-layout-constrained) {
  position: relative;
}

h1.has-background,
h2.has-background,
h3.has-background,
h4.has-background,
h5.has-background,
h6.has-background {
  padding: 1.25em 2.375em;
}
h1.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]), h1.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]),
h2.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]),
h2.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]),
h3.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]),
h3.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]),
h4.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]),
h4.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]),
h5.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]),
h5.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]),
h6.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]),
h6.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]) {
  rotate: 180deg;
}

.wp-block-image > a,
.wp-block-image > figure > a {
  display: inline-block;
}
.wp-block-image img {
  height: auto;
  max-width: 100%;
  vertical-align: bottom;
  box-sizing: border-box;
}
@media not (prefers-reduced-motion) {
  .wp-block-image img.hide {
    visibility: hidden;
  }
  .wp-block-image img.show {
    animation: show-content-image 0.4s;
  }
}
.wp-block-image[style*=border-radius] > a,
.wp-block-image[style*=border-radius] img {
  border-radius: inherit;
}
.wp-block-image.has-custom-border img {
  box-sizing: border-box;
}
.wp-block-image.aligncenter {
  text-align: center;
}
.wp-block-image.alignfull > a, .wp-block-image.alignwide > a {
  width: 100%;
}
.wp-block-image.alignfull img, .wp-block-image.alignwide img {
  height: auto;
  width: 100%;
}
.wp-block-image.alignleft, .wp-block-image.alignright, .wp-block-image.aligncenter,
.wp-block-image .alignleft,
.wp-block-image .alignright,
.wp-block-image .aligncenter {
  display: table;
}
.wp-block-image.alignleft > figcaption, .wp-block-image.alignright > figcaption, .wp-block-image.aligncenter > figcaption,
.wp-block-image .alignleft > figcaption,
.wp-block-image .alignright > figcaption,
.wp-block-image .aligncenter > figcaption {
  display: table-caption;
  caption-side: bottom;
}
.wp-block-image .alignleft {
  /*rtl:ignore*/
  float: left;
  /*rtl:ignore*/
  margin-left: 0;
  /*rtl:ignore*/
  margin-right: 1em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.wp-block-image .alignright {
  /*rtl:ignore*/
  float: right;
  /*rtl:ignore*/
  margin-right: 0;
  /*rtl:ignore*/
  margin-left: 1em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.wp-block-image .aligncenter {
  margin-left: auto;
  margin-right: auto;
}
.wp-block-image :where(figcaption) {
  margin-top: 0.5em;
  margin-bottom: 1em;
}
.wp-block-image.is-style-circle-mask img {
  border-radius: 9999px;
}
@supports ((-webkit-mask-image: none) or (mask-image: none)) or (-webkit-mask-image: none) {
  .wp-block-image.is-style-circle-mask img {
    /* stylelint-disable-next-line function-url-quotes -- We need quotes for the data URL to use the SVG inline. */
    -webkit-mask-image: url(${p});
            mask-image: url(${p});
    mask-mode: alpha;
    -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
    -webkit-mask-size: contain;
            mask-size: contain;
    -webkit-mask-position: center;
            mask-position: center;
    border-radius: 0;
  }
}

:root :where(.wp-block-image.is-style-rounded img, .wp-block-image .is-style-rounded img) {
  border-radius: 9999px;
}

.wp-block-image figure {
  margin: 0;
}

.wp-lightbox-container {
  position: relative;
  display: flex;
  flex-direction: column;
}
.wp-lightbox-container img {
  cursor: zoom-in;
}
.wp-lightbox-container img:hover + button {
  opacity: 1;
}
.wp-lightbox-container button {
  opacity: 0;
  border: none;
  background-color: rgba(90, 90, 90, 0.25);
  backdrop-filter: blur(16px) saturate(180%);
  cursor: zoom-in;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  position: absolute;
  z-index: 100;
  top: 16px;
  right: 16px;
  text-align: center;
  padding: 0;
  border-radius: 4px;
}
@media not (prefers-reduced-motion) {
  .wp-lightbox-container button {
    transition: opacity 0.2s ease;
  }
}
.wp-lightbox-container button:focus-visible {
  outline: 3px auto rgba(90, 90, 90, 0.25);
  outline: 3px auto -webkit-focus-ring-color;
  outline-offset: 3px;
}
.wp-lightbox-container button:hover {
  cursor: pointer;
  opacity: 1;
}
.wp-lightbox-container button:focus {
  opacity: 1;
}
.wp-lightbox-container button:hover, .wp-lightbox-container button:focus, .wp-lightbox-container button:not(:hover):not(:active):not(.has-background) {
  background-color: rgba(90, 90, 90, 0.25);
  border: none;
}

.wp-lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  visibility: hidden;
  cursor: zoom-out;
}
.wp-lightbox-overlay .close-button {
  position: absolute;
  top: calc(env(safe-area-inset-top) + 16px);
  right: calc(env(safe-area-inset-right) + 16px);
  padding: 0;
  cursor: pointer;
  z-index: 5000000;
  min-width: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wp-lightbox-overlay .close-button:hover, .wp-lightbox-overlay .close-button:focus, .wp-lightbox-overlay .close-button:not(:hover):not(:active):not(.has-background) {
  background: none;
  border: none;
}
.wp-lightbox-overlay .lightbox-image-container {
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform-origin: top left;
  transform: translate(-50%, -50%);
  width: var(--wp--lightbox-container-width);
  height: var(--wp--lightbox-container-height);
  z-index: 9999999999;
}
.wp-lightbox-overlay .wp-block-image {
  position: relative;
  transform-origin: 0 0;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 3000000;
  margin: 0;
}
.wp-lightbox-overlay .wp-block-image img {
  min-width: var(--wp--lightbox-image-width);
  min-height: var(--wp--lightbox-image-height);
  width: var(--wp--lightbox-image-width);
  height: var(--wp--lightbox-image-height);
}
.wp-lightbox-overlay .wp-block-image figcaption {
  display: none;
}
.wp-lightbox-overlay button {
  border: none;
  background: none;
}
.wp-lightbox-overlay .scrim {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2000000;
  background-color: rgb(255, 255, 255);
  opacity: 0.9;
}
.wp-lightbox-overlay.active {
  visibility: visible;
}
@media not (prefers-reduced-motion) {
  .wp-lightbox-overlay.active {
    animation: both turn-on-visibility 0.25s;
  }
}
@media not (prefers-reduced-motion) {
  .wp-lightbox-overlay.active img {
    animation: both turn-on-visibility 0.35s;
  }
}
@media not (prefers-reduced-motion) {
  .wp-lightbox-overlay.show-closing-animation:not(.active) {
    animation: both turn-off-visibility 0.35s;
  }
}
@media not (prefers-reduced-motion) {
  .wp-lightbox-overlay.show-closing-animation:not(.active) img {
    animation: both turn-off-visibility 0.25s;
  }
}
@media not (prefers-reduced-motion) {
  .wp-lightbox-overlay.zoom.active {
    opacity: 1;
    visibility: visible;
    animation: none;
  }
  .wp-lightbox-overlay.zoom.active .lightbox-image-container {
    animation: lightbox-zoom-in 0.4s;
  }
  .wp-lightbox-overlay.zoom.active .lightbox-image-container img {
    animation: none;
  }
  .wp-lightbox-overlay.zoom.active .scrim {
    animation: turn-on-visibility 0.4s forwards;
  }
  .wp-lightbox-overlay.zoom.show-closing-animation:not(.active) {
    animation: none;
  }
  .wp-lightbox-overlay.zoom.show-closing-animation:not(.active) .lightbox-image-container {
    animation: lightbox-zoom-out 0.4s;
  }
  .wp-lightbox-overlay.zoom.show-closing-animation:not(.active) .lightbox-image-container img {
    animation: none;
  }
  .wp-lightbox-overlay.zoom.show-closing-animation:not(.active) .scrim {
    animation: turn-off-visibility 0.4s forwards;
  }
}

@keyframes show-content-image {
  0% {
    visibility: hidden;
  }
  99% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}
@keyframes turn-on-visibility {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes turn-off-visibility {
  0% {
    opacity: 1;
    visibility: visible;
  }
  99% {
    opacity: 0;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
@keyframes lightbox-zoom-in {
  0% {
    transform: translate(calc((-100vw + var(--wp--lightbox-scrollbar-width)) / 2 + var(--wp--lightbox-initial-left-position)), calc(-50vh + var(--wp--lightbox-initial-top-position))) scale(var(--wp--lightbox-scale));
  }
  100% {
    transform: translate(-50%, -50%) scale(1, 1);
  }
}
@keyframes lightbox-zoom-out {
  0% {
    visibility: visible;
    transform: translate(-50%, -50%) scale(1, 1);
  }
  99% {
    visibility: visible;
  }
  100% {
    visibility: hidden;
    transform: translate(calc((-100vw + var(--wp--lightbox-scrollbar-width)) / 2 + var(--wp--lightbox-initial-left-position)), calc(-50vh + var(--wp--lightbox-initial-top-position))) scale(var(--wp--lightbox-scale));
  }
}
ol.wp-block-latest-comments {
  margin-left: 0;
  box-sizing: border-box;
}

:where(.wp-block-latest-comments:not([style*=line-height] .wp-block-latest-comments__comment)) {
  line-height: 1.1;
}

:where(.wp-block-latest-comments:not([style*=line-height] .wp-block-latest-comments__comment-excerpt p)) {
  line-height: 1.8;
}

.has-dates :where(.wp-block-latest-comments:not([style*=line-height])),
.has-excerpts :where(.wp-block-latest-comments:not([style*=line-height])) {
  line-height: 1.5;
}

.wp-block-latest-comments .wp-block-latest-comments {
  padding-left: 0;
}

.wp-block-latest-comments__comment {
  list-style: none;
  margin-bottom: 1em;
}
.has-avatars .wp-block-latest-comments__comment {
  min-height: 2.25em;
  list-style: none;
}
.has-avatars .wp-block-latest-comments__comment .wp-block-latest-comments__comment-meta,
.has-avatars .wp-block-latest-comments__comment .wp-block-latest-comments__comment-excerpt {
  margin-left: 3.25em;
}

.wp-block-latest-comments__comment-excerpt p {
  font-size: 0.875em;
  margin: 0.36em 0 1.4em;
}

.wp-block-latest-comments__comment-date {
  display: block;
  font-size: 0.75em;
}

.wp-block-latest-comments .avatar,
.wp-block-latest-comments__comment-avatar {
  border-radius: 1.5em;
  display: block;
  float: left;
  height: 2.5em;
  margin-right: 0.75em;
  width: 2.5em;
}

.wp-block-latest-comments[style*=font-size] a,
.wp-block-latest-comments[class*=-font-size] a {
  font-size: inherit;
}

.wp-block-latest-posts {
  box-sizing: border-box;
}
.wp-block-latest-posts.alignleft {
  /*rtl:ignore*/
  margin-right: 2em;
}
.wp-block-latest-posts.alignright {
  /*rtl:ignore*/
  margin-left: 2em;
}
.wp-block-latest-posts.wp-block-latest-posts__list {
  list-style: none;
}
.wp-block-latest-posts.wp-block-latest-posts__list li {
  clear: both;
  overflow-wrap: break-word;
}
.wp-block-latest-posts.is-grid {
  display: flex;
  flex-wrap: wrap;
}
.wp-block-latest-posts.is-grid li {
  margin: 0 1.25em 1.25em 0;
  width: 100%;
}
@media (min-width: 600px) {
  .wp-block-latest-posts.columns-2 li {
    width: calc((100% / 2) - 1.25em + (1.25em / 2));
  }
  .wp-block-latest-posts.columns-2 li:nth-child(2n) {
    margin-right: 0;
  }
  .wp-block-latest-posts.columns-3 li {
    width: calc((100% / 3) - 1.25em + (1.25em / 3));
  }
  .wp-block-latest-posts.columns-3 li:nth-child(3n) {
    margin-right: 0;
  }
  .wp-block-latest-posts.columns-4 li {
    width: calc((100% / 4) - 1.25em + (1.25em / 4));
  }
  .wp-block-latest-posts.columns-4 li:nth-child(4n) {
    margin-right: 0;
  }
  .wp-block-latest-posts.columns-5 li {
    width: calc((100% / 5) - 1.25em + (1.25em / 5));
  }
  .wp-block-latest-posts.columns-5 li:nth-child(5n) {
    margin-right: 0;
  }
  .wp-block-latest-posts.columns-6 li {
    width: calc((100% / 6) - 1.25em + (1.25em / 6));
  }
  .wp-block-latest-posts.columns-6 li:nth-child(6n) {
    margin-right: 0;
  }
}

:root :where(.wp-block-latest-posts.is-grid) {
  padding: 0;
}
:root :where(.wp-block-latest-posts.wp-block-latest-posts__list) {
  padding-left: 0;
}

.wp-block-latest-posts__post-date,
.wp-block-latest-posts__post-author {
  display: block;
  font-size: 0.8125em;
}

.wp-block-latest-posts__post-excerpt,
.wp-block-latest-posts__post-full-content {
  margin-top: 0.5em;
  margin-bottom: 1em;
}

.wp-block-latest-posts__featured-image a {
  display: inline-block;
}
.wp-block-latest-posts__featured-image img {
  height: auto;
  width: auto;
  max-width: 100%;
}
.wp-block-latest-posts__featured-image.alignleft {
  /*rtl:ignore*/
  margin-right: 1em;
  /*rtl:ignore*/
  float: left;
}
.wp-block-latest-posts__featured-image.alignright {
  /*rtl:ignore*/
  margin-left: 1em;
  /*rtl:ignore*/
  float: right;
}
.wp-block-latest-posts__featured-image.aligncenter {
  margin-bottom: 1em;
  text-align: center;
}

ol,
ul {
  box-sizing: border-box;
}

:root :where(.wp-block-list.has-background) {
  padding: 1.25em 2.375em;
}

.wp-block-loginout {
  box-sizing: border-box;
}

.wp-block-media-text {
  /*!rtl:begin:ignore*/
  direction: ltr;
  /*!rtl:end:ignore*/
  display: grid;
  grid-template-columns: 50% 1fr;
  grid-template-rows: auto;
  box-sizing: border-box;
}
.wp-block-media-text.has-media-on-the-right {
  grid-template-columns: 1fr 50%;
}

.wp-block-media-text.is-vertically-aligned-top > .wp-block-media-text__content,
.wp-block-media-text.is-vertically-aligned-top > .wp-block-media-text__media {
  align-self: start;
}

.wp-block-media-text > .wp-block-media-text__content,
.wp-block-media-text > .wp-block-media-text__media,
.wp-block-media-text.is-vertically-aligned-center > .wp-block-media-text__content,
.wp-block-media-text.is-vertically-aligned-center > .wp-block-media-text__media {
  align-self: center;
}

.wp-block-media-text.is-vertically-aligned-bottom > .wp-block-media-text__content,
.wp-block-media-text.is-vertically-aligned-bottom > .wp-block-media-text__media {
  align-self: end;
}

.wp-block-media-text > .wp-block-media-text__media {
  /*!rtl:begin:ignore*/
  grid-column: 1;
  grid-row: 1;
  /*!rtl:end:ignore*/
  margin: 0;
}

.wp-block-media-text > .wp-block-media-text__content {
  direction: ltr;
  /*!rtl:begin:ignore*/
  grid-column: 2;
  grid-row: 1;
  /*!rtl:end:ignore*/
  padding: 0 8% 0 8%;
  word-break: break-word;
}

.wp-block-media-text.has-media-on-the-right > .wp-block-media-text__media {
  /*!rtl:begin:ignore*/
  grid-column: 2;
  grid-row: 1;
  /*!rtl:end:ignore*/
}

.wp-block-media-text.has-media-on-the-right > .wp-block-media-text__content {
  /*!rtl:begin:ignore*/
  grid-column: 1;
  grid-row: 1;
  /*!rtl:end:ignore*/
}

.wp-block-media-text__media a {
  display: block;
}

.wp-block-media-text__media img,
.wp-block-media-text__media video {
  height: auto;
  max-width: unset;
  width: 100%;
  vertical-align: middle;
}

/* \`is-image-fill\` is deprecated and the styles are kept for backwards compatibility. */
.wp-block-media-text.is-image-fill > .wp-block-media-text__media {
  height: 100%;
  min-height: 250px;
  background-size: cover;
}

.wp-block-media-text.is-image-fill > .wp-block-media-text__media > a {
  display: block;
  height: 100%;
}

.wp-block-media-text.is-image-fill > .wp-block-media-text__media img {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

/* Image fill for versions 8 and onwards */
.wp-block-media-text.is-image-fill-element > .wp-block-media-text__media {
  height: 100%;
  min-height: 250px;
}

.wp-block-media-text.is-image-fill-element > .wp-block-media-text__media > a {
  display: block;
  height: 100%;
}

.wp-block-media-text.is-image-fill-element > .wp-block-media-text__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/*
* Here we here not able to use a mobile first CSS approach.
* Custom widths are set using inline styles, and on mobile,
* we need 100% width, so we use important to overwrite the inline style.
* If the style were set on mobile first, on desktop styles,
* we would have no way of setting the style again to the inline style.
*/
@media (max-width: 600px) {
  .wp-block-media-text.is-stacked-on-mobile {
    grid-template-columns: 100% !important;
  }
  .wp-block-media-text.is-stacked-on-mobile > .wp-block-media-text__media {
    grid-column: 1;
    grid-row: 1;
  }
  .wp-block-media-text.is-stacked-on-mobile > .wp-block-media-text__content {
    grid-column: 1;
    grid-row: 2;
  }
}
.wp-block-navigation {
  position: relative;
  --navigation-layout-justification-setting: flex-start;
  --navigation-layout-direction: row;
  --navigation-layout-wrap: wrap;
  --navigation-layout-justify: flex-start;
  --navigation-layout-align: center;
}
.wp-block-navigation ul {
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
  padding-left: 0;
}
.wp-block-navigation ul,
.wp-block-navigation ul li {
  list-style: none;
  padding: 0;
}
.wp-block-navigation .wp-block-navigation-item {
  background-color: inherit;
  display: flex;
  align-items: center;
  position: relative;
}
.wp-block-navigation .wp-block-navigation-item .wp-block-navigation__submenu-container:empty {
  display: none;
}
.wp-block-navigation .wp-block-navigation-item__content {
  display: block;
  z-index: 1;
}
.wp-block-navigation .wp-block-navigation-item__content.wp-block-navigation-item__content {
  color: inherit;
}
.wp-block-navigation.has-text-decoration-underline .wp-block-navigation-item__content {
  text-decoration: underline;
}
.wp-block-navigation.has-text-decoration-underline .wp-block-navigation-item__content:focus, .wp-block-navigation.has-text-decoration-underline .wp-block-navigation-item__content:active {
  text-decoration: underline;
}
.wp-block-navigation.has-text-decoration-line-through .wp-block-navigation-item__content {
  text-decoration: line-through;
}
.wp-block-navigation.has-text-decoration-line-through .wp-block-navigation-item__content:focus, .wp-block-navigation.has-text-decoration-line-through .wp-block-navigation-item__content:active {
  text-decoration: line-through;
}
.wp-block-navigation :where(a), .wp-block-navigation :where(a:focus), .wp-block-navigation :where(a:active) {
  text-decoration: none;
}
.wp-block-navigation .wp-block-navigation__submenu-icon {
  align-self: center;
  line-height: 0;
  display: inline-block;
  font-size: inherit;
  padding: 0;
  background-color: inherit;
  color: currentColor;
  border: none;
  width: 0.6em;
  height: 0.6em;
  margin-left: 0.25em;
}
.wp-block-navigation .wp-block-navigation__submenu-icon svg {
  display: inline-block;
  stroke: currentColor;
  width: inherit;
  height: inherit;
  margin-top: 0.075em;
}
.wp-block-navigation.is-vertical {
  --navigation-layout-direction: column;
  --navigation-layout-justify: initial;
  --navigation-layout-align: flex-start;
}
.wp-block-navigation.no-wrap {
  --navigation-layout-wrap: nowrap;
}
.wp-block-navigation.items-justified-center {
  --navigation-layout-justification-setting: center;
  --navigation-layout-justify: center;
}
.wp-block-navigation.items-justified-center.is-vertical {
  --navigation-layout-align: center;
}
.wp-block-navigation.items-justified-right {
  --navigation-layout-justification-setting: flex-end;
  --navigation-layout-justify: flex-end;
}
.wp-block-navigation.items-justified-right.is-vertical {
  --navigation-layout-align: flex-end;
}
.wp-block-navigation.items-justified-space-between {
  --navigation-layout-justification-setting: space-between;
  --navigation-layout-justify: space-between;
}

.wp-block-navigation .has-child .wp-block-navigation__submenu-container {
  background-color: inherit;
  color: inherit;
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: normal;
  opacity: 0;
  visibility: hidden;
  width: 0;
  height: 0;
  overflow: hidden;
  left: -1px;
  top: 100%;
}
@media not (prefers-reduced-motion) {
  .wp-block-navigation .has-child .wp-block-navigation__submenu-container {
    transition: opacity 0.1s linear;
  }
}
.wp-block-navigation .has-child .wp-block-navigation__submenu-container > .wp-block-navigation-item > .wp-block-navigation-item__content {
  display: flex;
  flex-grow: 1;
  padding: 0.5em 1em;
}
.wp-block-navigation .has-child .wp-block-navigation__submenu-container > .wp-block-navigation-item > .wp-block-navigation-item__content .wp-block-navigation__submenu-icon {
  margin-right: 0;
  margin-left: auto;
}
.wp-block-navigation .has-child .wp-block-navigation__submenu-container .wp-block-navigation-item__content {
  margin: 0;
}
@media (min-width: 782px) {
  .wp-block-navigation .has-child .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container {
    left: 100%;
    top: -1px;
  }
  .wp-block-navigation .has-child .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container::before {
    content: "";
    position: absolute;
    right: 100%;
    height: 100%;
    display: block;
    width: 0.5em;
    background: transparent;
  }
  .wp-block-navigation .has-child .wp-block-navigation__submenu-container .wp-block-navigation__submenu-icon {
    margin-right: 0.25em;
  }
  .wp-block-navigation .has-child .wp-block-navigation__submenu-container .wp-block-navigation__submenu-icon svg {
    transform: rotate(-90deg);
  }
}
.wp-block-navigation .has-child:not(.open-on-click):hover > .wp-block-navigation__submenu-container {
  visibility: visible;
  overflow: visible;
  opacity: 1;
  width: auto;
  height: auto;
  min-width: 200px;
}
.wp-block-navigation .has-child:not(.open-on-click):not(.open-on-hover-click):focus-within > .wp-block-navigation__submenu-container {
  visibility: visible;
  overflow: visible;
  opacity: 1;
  width: auto;
  height: auto;
  min-width: 200px;
}
.wp-block-navigation .has-child .wp-block-navigation-submenu__toggle[aria-expanded=true] ~ .wp-block-navigation__submenu-container {
  visibility: visible;
  overflow: visible;
  opacity: 1;
  width: auto;
  height: auto;
  min-width: 200px;
}

.wp-block-navigation.has-background .has-child .wp-block-navigation__submenu-container {
  left: 0;
  top: 100%;
}
@media (min-width: 782px) {
  .wp-block-navigation.has-background .has-child .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container {
    left: 100%;
    top: 0;
  }
}

.wp-block-navigation-submenu {
  position: relative;
  display: flex;
}
.wp-block-navigation-submenu .wp-block-navigation__submenu-icon svg {
  stroke: currentColor;
}

button.wp-block-navigation-item__content {
  background-color: transparent;
  border: none;
  color: currentColor;
  font-size: inherit;
  font-family: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-style: inherit;
  font-weight: inherit;
  text-transform: inherit;
  text-align: left;
}

.wp-block-navigation-submenu__toggle {
  cursor: pointer;
}
.wp-block-navigation-submenu__toggle[aria-expanded=true] + .wp-block-navigation__submenu-icon > svg,
.wp-block-navigation-submenu__toggle[aria-expanded=true] > svg {
  transform: rotate(180deg);
}

.wp-block-navigation-item.open-on-click .wp-block-navigation-submenu__toggle {
  padding-left: 0;
  padding-right: 0.85em;
}
.wp-block-navigation-item.open-on-click .wp-block-navigation-submenu__toggle + .wp-block-navigation__submenu-icon {
  margin-left: -0.6em;
  pointer-events: none;
}

.wp-block-navigation-item.open-on-click button.wp-block-navigation-item__content:not(.wp-block-navigation-submenu__toggle) {
  padding: 0;
}

/**
 * Margins
 */
.wp-block-navigation__responsive-container,
.wp-block-navigation__responsive-close,
.wp-block-navigation__responsive-dialog,
.wp-block-navigation .wp-block-page-list,
.wp-block-navigation__container,
.wp-block-navigation__responsive-container-content {
  gap: inherit;
}

/**
 * Paddings
 */
:where(.wp-block-navigation.has-background .wp-block-navigation-item a:not(.wp-element-button)),
:where(.wp-block-navigation.has-background .wp-block-navigation-submenu a:not(.wp-element-button)) {
  padding: 0.5em 1em;
}

:where(.wp-block-navigation .wp-block-navigation__submenu-container .wp-block-navigation-item a:not(.wp-element-button)),
:where(.wp-block-navigation .wp-block-navigation__submenu-container .wp-block-navigation-submenu a:not(.wp-element-button)),
:where(.wp-block-navigation .wp-block-navigation__submenu-container .wp-block-navigation-submenu button.wp-block-navigation-item__content),
:where(.wp-block-navigation .wp-block-navigation__submenu-container .wp-block-pages-list__item button.wp-block-navigation-item__content) {
  padding: 0.5em 1em;
}

/**
 * Justifications.
 */
.wp-block-navigation.items-justified-space-between .wp-block-page-list > .has-child:last-child .wp-block-navigation__submenu-container,
.wp-block-navigation.items-justified-space-between > .wp-block-navigation__container > .has-child:last-child .wp-block-navigation__submenu-container,
.wp-block-navigation.items-justified-right .wp-block-page-list > .has-child .wp-block-navigation__submenu-container,
.wp-block-navigation.items-justified-right .wp-block-navigation__container .has-child .wp-block-navigation__submenu-container {
  left: auto;
  right: 0;
}
.wp-block-navigation.items-justified-space-between .wp-block-page-list > .has-child:last-child .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container,
.wp-block-navigation.items-justified-space-between > .wp-block-navigation__container > .has-child:last-child .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container,
.wp-block-navigation.items-justified-right .wp-block-page-list > .has-child .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container,
.wp-block-navigation.items-justified-right .wp-block-navigation__container .has-child .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container {
  left: -1px;
  right: -1px;
}
@media (min-width: 782px) {
  .wp-block-navigation.items-justified-space-between .wp-block-page-list > .has-child:last-child .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container,
.wp-block-navigation.items-justified-space-between > .wp-block-navigation__container > .has-child:last-child .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container,
.wp-block-navigation.items-justified-right .wp-block-page-list > .has-child .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container,
.wp-block-navigation.items-justified-right .wp-block-navigation__container .has-child .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container {
    left: auto;
    right: 100%;
  }
}

.wp-block-navigation:not(.has-background) .wp-block-navigation__submenu-container {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.wp-block-navigation.has-background .wp-block-navigation__submenu-container {
  background-color: inherit;
}

.wp-block-navigation:not(.has-text-color) .wp-block-navigation__submenu-container {
  color: #000;
}

.wp-block-navigation__container {
  display: flex;
  flex-wrap: var(--navigation-layout-wrap, wrap);
  flex-direction: var(--navigation-layout-direction, initial);
  justify-content: var(--navigation-layout-justify, initial);
  align-items: var(--navigation-layout-align, initial);
  list-style: none;
  margin: 0;
  padding-left: 0;
}
.wp-block-navigation__container .is-responsive {
  display: none;
}

.wp-block-navigation__container:only-child,
.wp-block-page-list:only-child {
  flex-grow: 1;
}

/**
 * Mobile menu.
 */
@keyframes overlay-menu__fade-in-animation {
  from {
    opacity: 0;
    transform: translateY(0.5em);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.wp-block-navigation__responsive-container {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.wp-block-navigation__responsive-container :where(.wp-block-navigation-item a) {
  color: inherit;
}
.wp-block-navigation__responsive-container .wp-block-navigation__responsive-container-content {
  display: flex;
  flex-wrap: var(--navigation-layout-wrap, wrap);
  flex-direction: var(--navigation-layout-direction, initial);
  justify-content: var(--navigation-layout-justify, initial);
  align-items: var(--navigation-layout-align, initial);
}
.wp-block-navigation__responsive-container:not(.is-menu-open.is-menu-open) {
  color: inherit !important;
  background-color: inherit !important;
}
.wp-block-navigation__responsive-container.is-menu-open {
  display: flex;
  flex-direction: column;
  background-color: inherit;
  padding-top: clamp(1rem, var(--wp--style--root--padding-top), 20rem);
  padding-right: clamp(1rem, var(--wp--style--root--padding-right), 20rem);
  padding-bottom: clamp(1rem, var(--wp--style--root--padding-bottom), 20rem);
  padding-left: clamp(1rem, var(--wp--style--root--padding-left), 20rem);
  overflow: auto;
  z-index: 100000;
}
@media not (prefers-reduced-motion) {
  .wp-block-navigation__responsive-container.is-menu-open {
    animation: overlay-menu__fade-in-animation 0.1s ease-out;
    animation-fill-mode: forwards;
  }
}
.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content {
  padding-top: calc(2rem + 24px);
  overflow: visible;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: var(--navigation-layout-justification-setting, inherit);
}
.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content,
.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .wp-block-page-list,
.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .wp-block-navigation__container {
  justify-content: flex-start;
}
.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .wp-block-navigation__submenu-icon {
  display: none;
}
.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .has-child .wp-block-navigation__submenu-container {
  opacity: 1;
  visibility: visible;
  height: auto;
  width: auto;
  overflow: initial;
  min-width: 200px;
  position: static;
  border: none;
  padding-left: 2rem;
  padding-right: 2rem;
}
.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .wp-block-navigation__submenu-container,
.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .wp-block-navigation__container {
  gap: inherit;
}
.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .wp-block-navigation__submenu-container {
  padding-top: var(--wp--style--block-gap, 2em);
}
.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .wp-block-navigation-item__content {
  padding: 0;
}
.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .wp-block-navigation__container,
.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .wp-block-navigation-item,
.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .wp-block-page-list {
  display: flex;
  flex-direction: column;
  align-items: var(--navigation-layout-justification-setting, initial);
}
.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-item .wp-block-navigation__submenu-container,
.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__container,
.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-item,
.wp-block-navigation__responsive-container.is-menu-open .wp-block-page-list {
  color: inherit !important;
  background: transparent !important;
}
.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__submenu-container.wp-block-navigation__submenu-container.wp-block-navigation__submenu-container.wp-block-navigation__submenu-container {
  right: auto;
  left: auto;
}
@media (min-width: 600px) {
  .wp-block-navigation__responsive-container:not(.hidden-by-default):not(.is-menu-open) {
    display: block;
    width: 100%;
    position: relative;
    z-index: auto;
    background-color: inherit;
  }
  .wp-block-navigation__responsive-container:not(.hidden-by-default):not(.is-menu-open) .wp-block-navigation__responsive-container-close {
    display: none;
  }
  .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__submenu-container.wp-block-navigation__submenu-container.wp-block-navigation__submenu-container.wp-block-navigation__submenu-container {
    left: 0;
  }
}

.wp-block-navigation:not(.has-background) .wp-block-navigation__responsive-container.is-menu-open {
  background-color: #fff;
}

.wp-block-navigation:not(.has-text-color) .wp-block-navigation__responsive-container.is-menu-open {
  color: #000;
}

.wp-block-navigation__toggle_button_label {
  font-size: 1rem;
  font-weight: bold;
}

.wp-block-navigation__responsive-container-open,
.wp-block-navigation__responsive-container-close {
  vertical-align: middle;
  cursor: pointer;
  color: currentColor;
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  text-transform: inherit;
}
.wp-block-navigation__responsive-container-open svg,
.wp-block-navigation__responsive-container-close svg {
  fill: currentColor;
  pointer-events: none;
  display: block;
  width: 24px;
  height: 24px;
}

.wp-block-navigation__responsive-container-open {
  display: flex;
}
.wp-block-navigation__responsive-container-open.wp-block-navigation__responsive-container-open.wp-block-navigation__responsive-container-open {
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
}
@media (min-width: 600px) {
  .wp-block-navigation__responsive-container-open:not(.always-shown) {
    display: none;
  }
}

.wp-block-navigation__responsive-container-close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
}
.wp-block-navigation__responsive-container-close.wp-block-navigation__responsive-container-close.wp-block-navigation__responsive-container-close {
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
}

.wp-block-navigation__responsive-close {
  width: 100%;
}
.has-modal-open .wp-block-navigation__responsive-close {
  max-width: var(--wp--style--global--wide-size, 100%);
  margin-left: auto;
  margin-right: auto;
}
.wp-block-navigation__responsive-close:focus {
  outline: none;
}

.is-menu-open .wp-block-navigation__responsive-close,
.is-menu-open .wp-block-navigation__responsive-dialog,
.is-menu-open .wp-block-navigation__responsive-container-content {
  box-sizing: border-box;
}

.wp-block-navigation__responsive-dialog {
  position: relative;
}

.has-modal-open .admin-bar .is-menu-open .wp-block-navigation__responsive-dialog {
  margin-top: 46px;
}
@media (min-width: 782px) {
  .has-modal-open .admin-bar .is-menu-open .wp-block-navigation__responsive-dialog {
    margin-top: 32px;
  }
}

html.has-modal-open {
  overflow: hidden;
}

.wp-block-navigation .wp-block-navigation-item__label {
  overflow-wrap: break-word;
}
.wp-block-navigation .wp-block-navigation-item__description {
  display: none;
}

.link-ui-tools {
  border-top: 1px solid #f0f0f0;
  padding: 8px;
}

.link-ui-block-inserter {
  padding-top: 8px;
}

.link-ui-block-inserter__back {
  margin-left: 8px;
  text-transform: uppercase;
}

.wp-block-navigation .wp-block-page-list {
  display: flex;
  flex-direction: var(--navigation-layout-direction, initial);
  justify-content: var(--navigation-layout-justify, initial);
  align-items: var(--navigation-layout-align, initial);
  flex-wrap: var(--navigation-layout-wrap, wrap);
  background-color: inherit;
}
.wp-block-navigation .wp-block-navigation-item {
  background-color: inherit;
}

.wp-block-page-list {
  box-sizing: border-box;
}

.is-small-text {
  font-size: 0.875em;
}

.is-regular-text {
  font-size: 1em;
}

.is-large-text {
  font-size: 2.25em;
}

.is-larger-text {
  font-size: 3em;
}

.has-drop-cap:not(:focus)::first-letter {
  float: left;
  font-size: 8.4em;
  line-height: 0.68;
  font-weight: 100;
  margin: 0.05em 0.1em 0 0;
  text-transform: uppercase;
  font-style: normal;
}

body.rtl .has-drop-cap:not(:focus)::first-letter {
  float: initial;
  margin-left: 0.1em;
}

p.has-drop-cap.has-background {
  overflow: hidden;
}

:root :where(p.has-background) {
  padding: 1.25em 2.375em;
}

:where(p.has-text-color:not(.has-link-color)) a {
  color: inherit;
}

p.has-text-align-right[style*="writing-mode:vertical-rl"],
p.has-text-align-left[style*="writing-mode:vertical-lr"] {
  rotate: 180deg;
}

.wp-block-post-author {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.wp-block-post-author__byline {
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 0.5em;
}
.wp-block-post-author__avatar {
  margin-right: 1em;
}
.wp-block-post-author__bio {
  margin-bottom: 0.7em;
  font-size: 0.7em;
}
.wp-block-post-author__content {
  flex-grow: 1;
  flex-basis: 0;
}
.wp-block-post-author__name {
  margin: 0;
}

.wp-block-post-author-biography {
  box-sizing: border-box;
}

:where(.wp-block-post-comments-form) textarea,
:where(.wp-block-post-comments-form) input:not([type=submit]) {
  border: 1px solid #949494;
  font-size: 1em;
  font-family: inherit;
}
:where(.wp-block-post-comments-form) textarea,
:where(.wp-block-post-comments-form) input:where(:not([type=submit]):not([type=checkbox])) {
  padding: calc(0.667em + 2px);
}

.wp-block-post-comments-form {
  box-sizing: border-box;
}
.wp-block-post-comments-form[style*=font-weight] :where(.comment-reply-title) {
  font-weight: inherit;
}
.wp-block-post-comments-form[style*=font-family] :where(.comment-reply-title) {
  font-family: inherit;
}
.wp-block-post-comments-form[class*=-font-size] :where(.comment-reply-title), .wp-block-post-comments-form[style*=font-size] :where(.comment-reply-title) {
  font-size: inherit;
}
.wp-block-post-comments-form[style*=line-height] :where(.comment-reply-title) {
  line-height: inherit;
}
.wp-block-post-comments-form[style*=font-style] :where(.comment-reply-title) {
  font-style: inherit;
}
.wp-block-post-comments-form[style*=letter-spacing] :where(.comment-reply-title) {
  letter-spacing: inherit;
}
.wp-block-post-comments-form :where(input[type=submit]) {
  box-shadow: none;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  overflow-wrap: break-word;
}
.wp-block-post-comments-form .comment-form textarea,
.wp-block-post-comments-form .comment-form input:not([type=submit]):not([type=checkbox]):not([type=hidden]) {
  display: block;
  box-sizing: border-box;
  width: 100%;
}
.wp-block-post-comments-form .comment-form-author label,
.wp-block-post-comments-form .comment-form-email label,
.wp-block-post-comments-form .comment-form-url label {
  display: block;
  margin-bottom: 0.25em;
}
.wp-block-post-comments-form .comment-form-cookies-consent {
  display: flex;
  gap: 0.25em;
}
.wp-block-post-comments-form .comment-form-cookies-consent #wp-comment-cookies-consent {
  margin-top: 0.35em;
}
.wp-block-post-comments-form .comment-reply-title {
  margin-bottom: 0;
}
.wp-block-post-comments-form .comment-reply-title :where(small) {
  font-size: var(--wp--preset--font-size--medium, smaller);
  margin-left: 0.5em;
}

.wp-block-post-comments-count {
  box-sizing: border-box;
}

.wp-block-post-content {
  display: flow-root;
}

.wp-block-post-comments-link {
  box-sizing: border-box;
}

.wp-block-post-date {
  box-sizing: border-box;
}

:where(.wp-block-post-excerpt) {
  box-sizing: border-box;
  margin-top: var(--wp--style--block-gap);
  margin-bottom: var(--wp--style--block-gap);
}

.wp-block-post-excerpt__excerpt {
  margin-top: 0;
  margin-bottom: 0;
}

.wp-block-post-excerpt__more-text {
  margin-top: var(--wp--style--block-gap);
  margin-bottom: 0;
}

.wp-block-post-excerpt__more-link {
  display: inline-block;
}

.wp-block-post-featured-image {
  margin-left: 0;
  margin-right: 0;
}
.wp-block-post-featured-image a {
  display: block;
  height: 100%;
}
.wp-block-post-featured-image :where(img) {
  max-width: 100%;
  width: 100%;
  height: auto;
  vertical-align: bottom;
  box-sizing: border-box;
}
.wp-block-post-featured-image.alignwide img, .wp-block-post-featured-image.alignfull img {
  width: 100%;
}
.wp-block-post-featured-image .wp-block-post-featured-image__overlay.has-background-dim {
  position: absolute;
  inset: 0;
  background-color: #000;
}
.wp-block-post-featured-image {
  position: relative;
}

.wp-block-post-featured-image .wp-block-post-featured-image__overlay.has-background-gradient {
  background-color: transparent;
}
.wp-block-post-featured-image .wp-block-post-featured-image__overlay.has-background-dim-0 {
  opacity: 0;
}
.wp-block-post-featured-image .wp-block-post-featured-image__overlay.has-background-dim-10 {
  opacity: 0.1;
}
.wp-block-post-featured-image .wp-block-post-featured-image__overlay.has-background-dim-20 {
  opacity: 0.2;
}
.wp-block-post-featured-image .wp-block-post-featured-image__overlay.has-background-dim-30 {
  opacity: 0.3;
}
.wp-block-post-featured-image .wp-block-post-featured-image__overlay.has-background-dim-40 {
  opacity: 0.4;
}
.wp-block-post-featured-image .wp-block-post-featured-image__overlay.has-background-dim-50 {
  opacity: 0.5;
}
.wp-block-post-featured-image .wp-block-post-featured-image__overlay.has-background-dim-60 {
  opacity: 0.6;
}
.wp-block-post-featured-image .wp-block-post-featured-image__overlay.has-background-dim-70 {
  opacity: 0.7;
}
.wp-block-post-featured-image .wp-block-post-featured-image__overlay.has-background-dim-80 {
  opacity: 0.8;
}
.wp-block-post-featured-image .wp-block-post-featured-image__overlay.has-background-dim-90 {
  opacity: 0.9;
}
.wp-block-post-featured-image .wp-block-post-featured-image__overlay.has-background-dim-100 {
  opacity: 1;
}
.wp-block-post-featured-image:where(.alignleft, .alignright) {
  width: 100%;
}

.wp-block-post-navigation-link .wp-block-post-navigation-link__arrow-previous {
  display: inline-block;
  margin-right: 1ch;
}
.wp-block-post-navigation-link .wp-block-post-navigation-link__arrow-previous:not(.is-arrow-chevron) {
  transform: scaleX(1) /*rtl:scaleX(-1);*/;
}
.wp-block-post-navigation-link .wp-block-post-navigation-link__arrow-next {
  display: inline-block;
  margin-left: 1ch;
}
.wp-block-post-navigation-link .wp-block-post-navigation-link__arrow-next:not(.is-arrow-chevron) {
  transform: scaleX(1) /*rtl:scaleX(-1);*/;
}
.wp-block-post-navigation-link.has-text-align-right[style*="writing-mode: vertical-rl"], .wp-block-post-navigation-link.has-text-align-left[style*="writing-mode: vertical-lr"] {
  rotate: 180deg;
}

.wp-block-post-terms {
  box-sizing: border-box;
}
.wp-block-post-terms .wp-block-post-terms__separator {
  white-space: pre-wrap;
}

.wp-block-post-time-to-read {
  box-sizing: border-box;
}

.wp-block-post-title {
  word-break: break-word;
  box-sizing: border-box;
}
.wp-block-post-title :where(a) {
  display: inline-block;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  text-decoration: inherit;
}

.wp-block-post-author-name {
  box-sizing: border-box;
}

.wp-block-preformatted {
  box-sizing: border-box;
  white-space: pre-wrap;
}

:where(.wp-block-preformatted.has-background) {
  padding: 1.25em 2.375em;
}

.wp-block-pullquote {
  text-align: center;
  overflow-wrap: break-word;
  box-sizing: border-box;
  margin: 0 0 1em 0;
  padding: 4em 0;
}
.wp-block-pullquote p,
.wp-block-pullquote blockquote {
  color: inherit;
}
.wp-block-pullquote blockquote {
  margin: 0;
}
.wp-block-pullquote p {
  margin-top: 0;
}
.wp-block-pullquote p:last-child {
  margin-bottom: 0;
}
.wp-block-pullquote.alignleft, .wp-block-pullquote.alignright {
  max-width: 420px;
}
.wp-block-pullquote cite,
.wp-block-pullquote footer {
  position: relative;
}
.wp-block-pullquote .has-text-color a {
  color: inherit;
}

.wp-block-pullquote.has-text-align-left blockquote {
  text-align: left;
}

.wp-block-pullquote.has-text-align-right blockquote {
  text-align: right;
}

.wp-block-pullquote.has-text-align-center blockquote {
  text-align: center;
}

.wp-block-pullquote.is-style-solid-color {
  border: none;
}
.wp-block-pullquote.is-style-solid-color blockquote {
  margin-left: auto;
  margin-right: auto;
  max-width: 60%;
}
.wp-block-pullquote.is-style-solid-color blockquote p {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2em;
}
.wp-block-pullquote.is-style-solid-color blockquote cite {
  text-transform: none;
  font-style: normal;
}

.wp-block-pullquote :where(cite) {
  color: inherit;
  display: block;
}

.wp-block-post-template {
  margin-top: 0;
  margin-bottom: 0;
  max-width: 100%;
  list-style: none;
  padding: 0;
  box-sizing: border-box;
}
.wp-block-post-template.is-flex-container {
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  gap: 1.25em;
}
.wp-block-post-template.is-flex-container > li {
  margin: 0;
  width: 100%;
}
@media (min-width: 600px) {
  .wp-block-post-template.is-flex-container.is-flex-container.columns-2 > li {
    width: calc((100% / 2) - 1.25em + (1.25em / 2));
  }
  .wp-block-post-template.is-flex-container.is-flex-container.columns-3 > li {
    width: calc((100% / 3) - 1.25em + (1.25em / 3));
  }
  .wp-block-post-template.is-flex-container.is-flex-container.columns-4 > li {
    width: calc((100% / 4) - 1.25em + (1.25em / 4));
  }
  .wp-block-post-template.is-flex-container.is-flex-container.columns-5 > li {
    width: calc((100% / 5) - 1.25em + (1.25em / 5));
  }
  .wp-block-post-template.is-flex-container.is-flex-container.columns-6 > li {
    width: calc((100% / 6) - 1.25em + (1.25em / 6));
  }
}

@media (max-width: 600px) {
  .wp-block-post-template-is-layout-grid.wp-block-post-template-is-layout-grid.wp-block-post-template-is-layout-grid.wp-block-post-template-is-layout-grid {
    grid-template-columns: 1fr;
  }
}
.wp-block-post-template-is-layout-constrained > li > .alignright,
.wp-block-post-template-is-layout-flow > li > .alignright {
  float: right;
  margin-inline-start: 2em;
  margin-inline-end: 0;
}

.wp-block-post-template-is-layout-constrained > li > .alignleft,
.wp-block-post-template-is-layout-flow > li > .alignleft {
  float: left;
  margin-inline-start: 0;
  margin-inline-end: 2em;
}

.wp-block-post-template-is-layout-constrained > li > .aligncenter,
.wp-block-post-template-is-layout-flow > li > .aligncenter {
  margin-inline-start: auto;
  margin-inline-end: auto;
}

.wp-block-query-pagination.is-content-justification-space-between > .wp-block-query-pagination-next:last-of-type {
  margin-inline-start: auto;
}
.wp-block-query-pagination.is-content-justification-space-between > .wp-block-query-pagination-previous:first-child {
  margin-inline-end: auto;
}
.wp-block-query-pagination .wp-block-query-pagination-previous-arrow {
  margin-right: 1ch;
  display: inline-block;
}
.wp-block-query-pagination .wp-block-query-pagination-previous-arrow:not(.is-arrow-chevron) {
  transform: scaleX(1) /*rtl:scaleX(-1);*/;
}
.wp-block-query-pagination .wp-block-query-pagination-next-arrow {
  margin-left: 1ch;
  display: inline-block;
}
.wp-block-query-pagination .wp-block-query-pagination-next-arrow:not(.is-arrow-chevron) {
  transform: scaleX(1) /*rtl:scaleX(-1);*/;
}
.wp-block-query-pagination.aligncenter {
  justify-content: center;
}

.wp-block-query-title {
  box-sizing: border-box;
}

.wp-block-query-total {
  box-sizing: border-box;
}

.wp-block-quote {
  box-sizing: border-box;
  overflow-wrap: break-word;
}
.wp-block-quote.is-style-large:where(:not(.is-style-plain)), .wp-block-quote.is-large:where(:not(.is-style-plain)) {
  margin-bottom: 1em;
  padding: 0 1em;
}
.wp-block-quote.is-style-large:where(:not(.is-style-plain)) p, .wp-block-quote.is-large:where(:not(.is-style-plain)) p {
  font-size: 1.5em;
  font-style: italic;
  line-height: 1.6;
}
.wp-block-quote.is-style-large:where(:not(.is-style-plain)) cite,
.wp-block-quote.is-style-large:where(:not(.is-style-plain)) footer, .wp-block-quote.is-large:where(:not(.is-style-plain)) cite,
.wp-block-quote.is-large:where(:not(.is-style-plain)) footer {
  font-size: 1.125em;
  text-align: right;
}
.wp-block-quote > cite {
  display: block;
}

.wp-block-read-more {
  display: block;
  width: fit-content;
}
.wp-block-read-more:where(:not([style*=text-decoration])) {
  text-decoration: none;
}
.wp-block-read-more:where(:not([style*=text-decoration])):focus, .wp-block-read-more:where(:not([style*=text-decoration])):active {
  text-decoration: none;
}

ul.wp-block-rss.alignleft {
  /*rtl:ignore*/
  margin-right: 2em;
}
ul.wp-block-rss.alignright {
  /*rtl:ignore*/
  margin-left: 2em;
}
ul.wp-block-rss.is-grid {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}
ul.wp-block-rss.is-grid li {
  margin: 0 1em 1em 0;
  width: 100%;
}
@media (min-width: 600px) {
  ul.wp-block-rss.columns-2 li {
    width: calc(( 100% / 2 ) - 1em);
  }
  ul.wp-block-rss.columns-3 li {
    width: calc(( 100% / 3 ) - 1em);
  }
  ul.wp-block-rss.columns-4 li {
    width: calc(( 100% / 4 ) - 1em);
  }
  ul.wp-block-rss.columns-5 li {
    width: calc(( 100% / 5 ) - 1em);
  }
  ul.wp-block-rss.columns-6 li {
    width: calc(( 100% / 6 ) - 1em);
  }
}

.wp-block-rss__item-publish-date,
.wp-block-rss__item-author {
  display: block;
  font-size: 0.8125em;
}

.wp-block-rss {
  box-sizing: border-box;
  list-style: none;
  padding: 0;
}

.wp-block-search__button {
  margin-left: 10px;
  word-break: normal;
}
.wp-block-search__button.has-icon {
  line-height: 0;
}
.wp-block-search__button svg {
  min-width: 24px;
  min-height: 24px;
  width: 1.25em;
  height: 1.25em;
  fill: currentColor;
  vertical-align: text-bottom;
}

:where(.wp-block-search__button) {
  border: 1px solid #ccc;
  padding: 6px 10px;
}

.wp-block-search__inside-wrapper {
  display: flex;
  flex: auto;
  flex-wrap: nowrap;
  max-width: 100%;
}

.wp-block-search__label {
  width: 100%;
}

.wp-block-search__input {
  padding: 8px;
  flex-grow: 1;
  margin-left: 0;
  margin-right: 0;
  min-width: 3rem;
  border: 1px solid #949494;
  text-decoration: unset !important;
  appearance: initial;
}

.wp-block-search.wp-block-search__button-only .wp-block-search__button {
  margin-left: 0;
  flex-shrink: 0;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}
.wp-block-search.wp-block-search__button-only .wp-block-search__inside-wrapper {
  transition-property: width;
  min-width: 0 !important;
}
.wp-block-search.wp-block-search__button-only .wp-block-search__input {
  transition-duration: 300ms;
  flex-basis: 100%;
}
.wp-block-search.wp-block-search__button-only.wp-block-search__searchfield-hidden {
  overflow: hidden;
}
.wp-block-search.wp-block-search__button-only.wp-block-search__searchfield-hidden .wp-block-search__inside-wrapper {
  overflow: hidden;
}
.wp-block-search.wp-block-search__button-only.wp-block-search__searchfield-hidden .wp-block-search__input {
  width: 0 !important;
  min-width: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  border-left-width: 0 !important;
  border-right-width: 0 !important;
  flex-grow: 0;
  margin: 0;
  flex-basis: 0;
}

:where(.wp-block-search__input) {
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  font-style: inherit;
}

:where(.wp-block-search__button-inside .wp-block-search__inside-wrapper) {
  padding: 4px;
  border: 1px solid #949494;
  background-color: #fff;
  box-sizing: border-box;
}
:where(.wp-block-search__button-inside .wp-block-search__inside-wrapper) .wp-block-search__input {
  border-radius: 0;
  border: none;
  padding: 0 4px;
}
:where(.wp-block-search__button-inside .wp-block-search__inside-wrapper) .wp-block-search__input:focus {
  outline: none;
}
:where(.wp-block-search__button-inside .wp-block-search__inside-wrapper) :where(.wp-block-search__button) {
  padding: 4px 8px;
}

.wp-block-search.aligncenter .wp-block-search__inside-wrapper {
  margin: auto;
}

.wp-block[data-align=right] .wp-block-search.wp-block-search__button-only .wp-block-search__inside-wrapper {
  float: right;
}

.wp-block-separator {
  border-top: 2px solid currentColor;
  border-left: none;
  border-right: none;
  border-bottom: none;
}

:root :where(.wp-block-separator.is-style-dots) {
  text-align: center;
  line-height: 1;
  height: auto;
}
:root :where(.wp-block-separator.is-style-dots)::before {
  content: "\xB7\xB7\xB7";
  color: currentColor;
  font-size: 1.5em;
  letter-spacing: 2em;
  /*rtl:ignore*/
  padding-left: 2em;
  font-family: serif;
}

.wp-block-separator.is-style-dots {
  background: none !important;
  border: none !important;
}

.wp-block-site-logo {
  box-sizing: border-box;
  line-height: 0;
}
.wp-block-site-logo a {
  display: inline-block;
  line-height: 0;
}
.wp-block-site-logo.is-default-size img {
  width: 120px;
  height: auto;
}
.wp-block-site-logo img {
  height: auto;
  max-width: 100%;
}
.wp-block-site-logo a,
.wp-block-site-logo img {
  border-radius: inherit;
}
.wp-block-site-logo.aligncenter {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

:root :where(.wp-block-site-logo.is-style-rounded) {
  border-radius: 9999px;
}

.wp-block-site-tagline {
  box-sizing: border-box;
}

.wp-block-site-title {
  box-sizing: border-box;
}
.wp-block-site-title :where(a) {
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  text-decoration: inherit;
}

.wp-block-social-links {
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 0;
  text-indent: 0;
  margin-left: 0;
  background: none;
}
.wp-block-social-links .wp-social-link a,
.wp-block-social-links .wp-social-link a:hover {
  text-decoration: none;
  border-bottom: 0;
  box-shadow: none;
}
.wp-block-social-links .wp-social-link svg {
  width: 1em;
  height: 1em;
}
.wp-block-social-links .wp-social-link span:not(.screen-reader-text) {
  margin-left: 0.5em;
  margin-right: 0.5em;
  font-size: 0.65em;
}
.wp-block-social-links.has-small-icon-size {
  font-size: 16px;
}
.wp-block-social-links, .wp-block-social-links.has-normal-icon-size {
  font-size: 24px;
}
.wp-block-social-links.has-large-icon-size {
  font-size: 36px;
}
.wp-block-social-links.has-huge-icon-size {
  font-size: 48px;
}
.wp-block-social-links.aligncenter {
  justify-content: center;
  display: flex;
}
.wp-block-social-links.alignright {
  justify-content: flex-end;
}

.wp-block-social-link {
  display: block;
  border-radius: 9999px;
  height: auto;
}
@media not (prefers-reduced-motion) {
  .wp-block-social-link {
    transition: transform 0.1s ease;
  }
}
.wp-block-social-link a {
  align-items: center;
  display: flex;
  line-height: 0;
}
.wp-block-social-link:hover {
  transform: scale(1.1);
}

.wp-block-social-links .wp-block-social-link.wp-social-link {
  display: inline-block;
  margin: 0;
  padding: 0;
}
.wp-block-social-links .wp-block-social-link.wp-social-link .wp-block-social-link-anchor, .wp-block-social-links .wp-block-social-link.wp-social-link .wp-block-social-link-anchor:hover, .wp-block-social-links .wp-block-social-link.wp-social-link .wp-block-social-link-anchor:active, .wp-block-social-links .wp-block-social-link.wp-social-link .wp-block-social-link-anchor:visited,
.wp-block-social-links .wp-block-social-link.wp-social-link .wp-block-social-link-anchor svg {
  color: currentColor;
  fill: currentColor;
}

:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link {
  background-color: #f0f0f0;
  color: #444;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-amazon {
  background-color: #f90;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-bandcamp {
  background-color: #1ea0c3;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-behance {
  background-color: #0757fe;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-bluesky {
  background-color: #0a7aff;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-codepen {
  background-color: #1e1f26;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-deviantart {
  background-color: #02e49b;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-discord {
  background-color: #5865f2;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-dribbble {
  background-color: #e94c89;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-dropbox {
  background-color: #4280ff;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-etsy {
  background-color: #f45800;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-facebook {
  background-color: #0866ff;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-fivehundredpx {
  background-color: #000;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-flickr {
  background-color: #0461dd;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-foursquare {
  background-color: #e65678;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-github {
  background-color: #24292d;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-goodreads {
  background-color: #eceadd;
  color: #382110;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-google {
  background-color: #ea4434;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-gravatar {
  background-color: #1d4fc4;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-instagram {
  background-color: #f00075;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-lastfm {
  background-color: #e21b24;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-linkedin {
  background-color: #0d66c2;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-mastodon {
  background-color: #3288d4;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-medium {
  background-color: #000;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-meetup {
  background-color: #f6405f;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-patreon {
  background-color: #000;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-pinterest {
  background-color: #e60122;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-pocket {
  background-color: #ef4155;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-reddit {
  background-color: #ff4500;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-skype {
  background-color: #0478d7;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-snapchat {
  background-color: #fefc00;
  color: #fff;
  stroke: #000;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-soundcloud {
  background-color: #ff5600;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-spotify {
  background-color: #1bd760;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-telegram {
  background-color: #2aabee;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-threads {
  background-color: #000;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-tiktok {
  background-color: #000;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-tumblr {
  background-color: #011835;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-twitch {
  background-color: #6440a4;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-twitter {
  background-color: #1da1f2;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-vimeo {
  background-color: #1eb7ea;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-vk {
  background-color: #4680c2;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-wordpress {
  background-color: #3499cd;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-whatsapp {
  background-color: #25d366;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-x {
  background-color: #000;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-yelp {
  background-color: #d32422;
  color: #fff;
}
:where(.wp-block-social-links:not(.is-style-logos-only)) .wp-social-link-youtube {
  background-color: #f00;
  color: #fff;
}

:where(.wp-block-social-links.is-style-logos-only) .wp-social-link {
  background: none;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link svg {
  width: 1.25em;
  height: 1.25em;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-amazon {
  color: #f90;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-bandcamp {
  color: #1ea0c3;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-behance {
  color: #0757fe;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-bluesky {
  color: #0a7aff;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-codepen {
  color: #1e1f26;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-deviantart {
  color: #02e49b;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-discord {
  color: #5865f2;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-dribbble {
  color: #e94c89;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-dropbox {
  color: #4280ff;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-etsy {
  color: #f45800;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-facebook {
  color: #0866ff;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-fivehundredpx {
  color: #000;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-flickr {
  color: #0461dd;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-foursquare {
  color: #e65678;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-github {
  color: #24292d;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-goodreads {
  color: #382110;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-google {
  color: #ea4434;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-gravatar {
  color: #1d4fc4;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-instagram {
  color: #f00075;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-lastfm {
  color: #e21b24;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-linkedin {
  color: #0d66c2;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-mastodon {
  color: #3288d4;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-medium {
  color: #000;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-meetup {
  color: #f6405f;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-patreon {
  color: #000;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-pinterest {
  color: #e60122;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-pocket {
  color: #ef4155;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-reddit {
  color: #ff4500;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-skype {
  color: #0478d7;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-snapchat {
  color: #fff;
  stroke: #000;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-soundcloud {
  color: #ff5600;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-spotify {
  color: #1bd760;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-telegram {
  color: #2aabee;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-threads {
  color: #000;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-tiktok {
  color: #000;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-tumblr {
  color: #011835;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-twitch {
  color: #6440a4;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-twitter {
  color: #1da1f2;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-vimeo {
  color: #1eb7ea;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-vk {
  color: #4680c2;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-whatsapp {
  color: #25d366;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-wordpress {
  color: #3499cd;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-x {
  color: #000;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-yelp {
  color: #d32422;
}
:where(.wp-block-social-links.is-style-logos-only) .wp-social-link-youtube {
  color: #f00;
}

.wp-block-social-links.is-style-pill-shape .wp-social-link {
  width: auto;
}

:root :where(.wp-block-social-links .wp-social-link a) {
  padding: 0.25em;
}

:root :where(.wp-block-social-links.is-style-logos-only .wp-social-link a) {
  padding: 0;
}

:root :where(.wp-block-social-links.is-style-pill-shape .wp-social-link a) {
  padding-left: 0.6666666667em;
  padding-right: 0.6666666667em;
}

.wp-block-social-links:not(.has-icon-color):not(.has-icon-background-color) .wp-social-link-snapchat .wp-block-social-link-label {
  color: #000;
}

.wp-block-spacer {
  clear: both;
}

.wp-block-tag-cloud {
  box-sizing: border-box;
}
.wp-block-tag-cloud.aligncenter {
  text-align: center;
  justify-content: center;
}
.wp-block-tag-cloud a {
  display: inline-block;
  margin-right: 5px;
}
.wp-block-tag-cloud span {
  display: inline-block;
  margin-left: 5px;
  text-decoration: none;
}

:root :where(.wp-block-tag-cloud.is-style-outline) {
  display: flex;
  flex-wrap: wrap;
  gap: 1ch;
}

:root :where(.wp-block-tag-cloud.is-style-outline a) {
  border: 1px solid currentColor;
  font-size: unset !important;
  margin-right: 0;
  padding: 1ch 2ch;
  text-decoration: none !important;
}

.wp-block-table {
  overflow-x: auto;
}
.wp-block-table table {
  border-collapse: collapse;
  width: 100%;
}
.wp-block-table thead {
  border-bottom: 3px solid;
}
.wp-block-table tfoot {
  border-top: 3px solid;
}
.wp-block-table td,
.wp-block-table th {
  border: 1px solid;
  padding: 0.5em;
}
.wp-block-table .has-fixed-layout {
  table-layout: fixed;
  width: 100%;
}
.wp-block-table .has-fixed-layout td,
.wp-block-table .has-fixed-layout th {
  word-break: break-word;
}
.wp-block-table.alignleft, .wp-block-table.aligncenter, .wp-block-table.alignright {
  display: table;
  width: auto;
}
.wp-block-table.alignleft td,
.wp-block-table.alignleft th, .wp-block-table.aligncenter td,
.wp-block-table.aligncenter th, .wp-block-table.alignright td,
.wp-block-table.alignright th {
  word-break: break-word;
}
.wp-block-table .has-subtle-light-gray-background-color {
  background-color: #f3f4f5;
}
.wp-block-table .has-subtle-pale-green-background-color {
  background-color: #e9fbe5;
}
.wp-block-table .has-subtle-pale-blue-background-color {
  background-color: #e7f5fe;
}
.wp-block-table .has-subtle-pale-pink-background-color {
  background-color: #fcf0ef;
}
.wp-block-table.is-style-stripes {
  border-spacing: 0;
  border-collapse: inherit;
  background-color: transparent;
  border-bottom: 1px solid #f0f0f0;
}
.wp-block-table.is-style-stripes tbody tr:nth-child(odd) {
  background-color: #f0f0f0;
}
.wp-block-table.is-style-stripes.has-subtle-light-gray-background-color tbody tr:nth-child(odd) {
  background-color: #f3f4f5;
}
.wp-block-table.is-style-stripes.has-subtle-pale-green-background-color tbody tr:nth-child(odd) {
  background-color: #e9fbe5;
}
.wp-block-table.is-style-stripes.has-subtle-pale-blue-background-color tbody tr:nth-child(odd) {
  background-color: #e7f5fe;
}
.wp-block-table.is-style-stripes.has-subtle-pale-pink-background-color tbody tr:nth-child(odd) {
  background-color: #fcf0ef;
}
.wp-block-table.is-style-stripes th,
.wp-block-table.is-style-stripes td {
  border-color: transparent;
}
.wp-block-table .has-border-color > *,
.wp-block-table .has-border-color tr,
.wp-block-table .has-border-color th,
.wp-block-table .has-border-color td {
  border-color: inherit;
}
.wp-block-table table[style*=border-top-color] > *,
.wp-block-table table[style*=border-top-color] tr:first-child {
  border-top-color: inherit;
}
.wp-block-table table[style*=border-top-color] > * th,
.wp-block-table table[style*=border-top-color] > * td,
.wp-block-table table[style*=border-top-color] tr:first-child th,
.wp-block-table table[style*=border-top-color] tr:first-child td {
  border-top-color: inherit;
}
.wp-block-table table[style*=border-top-color] tr:not(:first-child) {
  border-top-color: currentColor;
}
.wp-block-table table[style*=border-right-color] > *,
.wp-block-table table[style*=border-right-color] tr,
.wp-block-table table[style*=border-right-color] th,
.wp-block-table table[style*=border-right-color] td:last-child {
  border-right-color: inherit;
}
.wp-block-table table[style*=border-bottom-color] > *,
.wp-block-table table[style*=border-bottom-color] tr:last-child {
  border-bottom-color: inherit;
}
.wp-block-table table[style*=border-bottom-color] > * th,
.wp-block-table table[style*=border-bottom-color] > * td,
.wp-block-table table[style*=border-bottom-color] tr:last-child th,
.wp-block-table table[style*=border-bottom-color] tr:last-child td {
  border-bottom-color: inherit;
}
.wp-block-table table[style*=border-bottom-color] tr:not(:last-child) {
  border-bottom-color: currentColor;
}
.wp-block-table table[style*=border-left-color] > *,
.wp-block-table table[style*=border-left-color] tr,
.wp-block-table table[style*=border-left-color] th,
.wp-block-table table[style*=border-left-color] td:first-child {
  border-left-color: inherit;
}
.wp-block-table table[style*=border-style] > *,
.wp-block-table table[style*=border-style] tr,
.wp-block-table table[style*=border-style] th,
.wp-block-table table[style*=border-style] td {
  border-style: inherit;
}
.wp-block-table table[style*=border-width] > *,
.wp-block-table table[style*=border-width] tr,
.wp-block-table table[style*=border-width] th,
.wp-block-table table[style*=border-width] td {
  border-width: inherit;
  border-style: inherit;
}

:root :where(.wp-block-table-of-contents) {
  box-sizing: border-box;
}

:where(.wp-block-term-description) {
  box-sizing: border-box;
  margin-top: var(--wp--style--block-gap);
  margin-bottom: var(--wp--style--block-gap);
}

.wp-block-term-description p {
  margin-top: 0;
  margin-bottom: 0;
}

.wp-block-text-columns {
  display: flex;
}
.wp-block-text-columns.aligncenter {
  display: flex;
}
.wp-block-text-columns .wp-block-column {
  margin: 0 1em;
  padding: 0;
}
.wp-block-text-columns .wp-block-column:first-child {
  margin-left: 0;
}
.wp-block-text-columns .wp-block-column:last-child {
  margin-right: 0;
}
.wp-block-text-columns.columns-2 .wp-block-column {
  width: 50%;
}
.wp-block-text-columns.columns-3 .wp-block-column {
  width: 33.3333333333%;
}
.wp-block-text-columns.columns-4 .wp-block-column {
  width: 25%;
}

pre.wp-block-verse {
  overflow: auto;
  white-space: pre-wrap;
}

:where(pre.wp-block-verse) {
  font-family: inherit;
}

.wp-block-video {
  box-sizing: border-box;
}
.wp-block-video video {
  width: 100%;
  height: auto;
  vertical-align: middle;
}
@supports (position: sticky) {
  .wp-block-video [poster] {
    object-fit: cover;
  }
}
.wp-block-video.aligncenter {
  text-align: center;
}
.wp-block-video :where(figcaption) {
  margin-top: 0.5em;
  margin-bottom: 1em;
}

.editor-styles-wrapper,
.entry-content {
  counter-reset: footnotes;
}

a[data-fn].fn {
  vertical-align: super;
  font-size: smaller;
  counter-increment: footnotes;
  display: inline-flex;
  text-decoration: none;
  text-indent: -9999999px;
}

a[data-fn].fn::after {
  content: "[" counter(footnotes) "]";
  text-indent: 0;
  float: left;
}

/**
 * Element styles.
 */
.wp-element-button {
  cursor: pointer;
}

:root {
  /* stylelint-disable @stylistic/function-comma-space-after -- We can not use spacing because of WP multi site kses rule. */
  /* stylelint-enable @stylistic/function-comma-space-after */
  --wp--preset--font-size--normal: 16px;
  --wp--preset--font-size--huge: 42px;
}
:root .has-very-light-gray-background-color {
  background-color: #eee;
}
:root .has-very-dark-gray-background-color {
  background-color: #313131;
}
:root .has-very-light-gray-color {
  color: #eee;
}
:root .has-very-dark-gray-color {
  color: #313131;
}
:root .has-vivid-green-cyan-to-vivid-cyan-blue-gradient-background {
  background: linear-gradient(135deg, rgb(0, 208, 132) 0%, rgb(6, 147, 227) 100%);
}
:root .has-purple-crush-gradient-background {
  background: linear-gradient(135deg, rgb(52, 226, 228) 0%, rgb(71, 33, 251) 50%, rgb(171, 29, 254) 100%);
}
:root .has-hazy-dawn-gradient-background {
  background: linear-gradient(135deg, rgb(250, 172, 168) 0%, rgb(218, 208, 236) 100%);
}
:root .has-subdued-olive-gradient-background {
  background: linear-gradient(135deg, rgb(250, 250, 225) 0%, rgb(103, 166, 113) 100%);
}
:root .has-atomic-cream-gradient-background {
  background: linear-gradient(135deg, rgb(253, 215, 154) 0%, rgb(0, 74, 89) 100%);
}
:root .has-nightshade-gradient-background {
  background: linear-gradient(135deg, rgb(51, 9, 104) 0%, rgb(49, 205, 207) 100%);
}
:root .has-midnight-gradient-background {
  background: linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%);
}

.has-regular-font-size {
  font-size: 1em;
}

.has-larger-font-size {
  font-size: 2.625em;
}

.has-normal-font-size {
  font-size: var(--wp--preset--font-size--normal);
}

.has-huge-font-size {
  font-size: var(--wp--preset--font-size--huge);
}

.has-text-align-center {
  text-align: center;
}

.has-text-align-left {
  /*rtl:ignore*/
  text-align: left;
}

.has-text-align-right {
  /*rtl:ignore*/
  text-align: right;
}

#end-resizable-editor-section {
  display: none;
}

.aligncenter {
  clear: both;
}

.items-justified-left {
  justify-content: flex-start;
}

.items-justified-center {
  justify-content: center;
}

.items-justified-right {
  justify-content: flex-end;
}

.items-justified-space-between {
  justify-content: space-between;
}

.screen-reader-text {
  border: 0;
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  word-wrap: normal !important;
}

.screen-reader-text:focus {
  background-color: #ddd;
  clip-path: none;
  color: #444;
  display: block;
  font-size: 1em;
  height: auto;
  left: 5px;
  line-height: normal;
  padding: 15px 23px 14px;
  text-decoration: none;
  top: 5px;
  width: auto;
  z-index: 100000;
}

/**
 * The following provide a simple means of applying a default border style when
 * a user first makes a selection in the border block support panel.
 * This prevents issues such as where the user could set a border width
 * and see no border due there being no border style set.
 *
 * This is intended to be removed once intelligent defaults can be set while
 * making border selections via the block support.
 *
 * See: https://github.com/WordPress/gutenberg/pull/33743
 */
html :where(.has-border-color) {
  border-style: solid;
}

html :where([style*=border-top-color]) {
  border-top-style: solid;
}

html :where([style*=border-right-color]) {
  border-right-style: solid;
}

html :where([style*=border-bottom-color]) {
  border-bottom-style: solid;
}

html :where([style*=border-left-color]) {
  border-left-style: solid;
}

html :where([style*=border-width]) {
  border-style: solid;
}

html :where([style*=border-top-width]) {
  border-top-style: solid;
}

html :where([style*=border-right-width]) {
  border-right-style: solid;
}

html :where([style*=border-bottom-width]) {
  border-bottom-style: solid;
}

html :where([style*=border-left-width]) {
  border-left-style: solid;
}

/**
 * Provide baseline responsiveness for images.
 */
html :where(img[class*=wp-image-]) {
  height: auto;
  max-width: 100%;
}

/**
 * Reset user agent styles for figure element margins.
 */
:where(figure) {
  margin: 0 0 1em 0;
}

html :where(.is-position-sticky) {
  /* stylelint-disable length-zero-no-unit -- 0px is set explicitly so that it can be used in a calc value. */
  --wp-admin--admin-bar--position-offset: var(--wp-admin--admin-bar--height, 0px);
  /* stylelint-enable length-zero-no-unit */
}

@media screen and (max-width: 600px) {
  html :where(.is-position-sticky) {
    /* stylelint-disable length-zero-no-unit -- 0px is set explicitly so that it can be used in a calc value. */
    --wp-admin--admin-bar--position-offset: 0px;
    /* stylelint-enable length-zero-no-unit */
  }
}`,""]);const Rt=Et}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/@wordpress+block-library@9.30.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/block-library/build-style/theme.css":((Nt,ue,V)=>{V.d(ue,{A:()=>pt});var nt=V("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),X=V.n(nt),re=V("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),Ke=V.n(re),st=Ke()(X());st.push([Nt.id,`/**
 * Colors
 */
/**
 * Breakpoints & Media Queries
 */
/**
 * Colors
 */
/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
/**
 * Colors
 */
/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
/**
 * Breakpoints & Media Queries
 */
/**
*  Converts a hex value into the rgb equivalent.
*
* @param {string} hex - the hexadecimal value to convert
* @return {string} comma separated rgb values
*/
/**
 * Long content fade mixin
 *
 * Creates a fading overlay to signify that the content is longer
 * than the space allows.
 */
/**
 * Typography
 */
/**
 * Breakpoint mixins
 */
/**
 * Focus styles.
 */
/**
 * Applies editor left position to the selector passed as argument
 */
/**
 * Styles that are reused verbatim in a few places
 */
/**
 * Allows users to opt-out of animations via OS-level preferences.
 */
/**
 * Reset default styles for JavaScript UI based pages.
 * This is a WP-admin agnostic reset
 */
/**
 * Reset the WP Admin page styles for Gutenberg-like pages.
 */
.wp-block-audio :where(figcaption) {
  color: #555;
  font-size: 13px;
  text-align: center;
}
.is-dark-theme .wp-block-audio :where(figcaption) {
  color: rgba(255, 255, 255, 0.65);
}

.wp-block-audio {
  margin: 0 0 1em 0;
}

.wp-block-code {
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Menlo, Consolas, monaco, monospace;
  padding: 0.8em 1em;
}

.wp-block-embed :where(figcaption) {
  color: #555;
  font-size: 13px;
  text-align: center;
}
.is-dark-theme .wp-block-embed :where(figcaption) {
  color: rgba(255, 255, 255, 0.65);
}

.wp-block-embed {
  margin: 0 0 1em 0;
}

.blocks-gallery-caption {
  color: #555;
  font-size: 13px;
  text-align: center;
}
.is-dark-theme .blocks-gallery-caption {
  color: rgba(255, 255, 255, 0.65);
}

:root :where(.wp-block-image figcaption) {
  color: #555;
  font-size: 13px;
  text-align: center;
}
.is-dark-theme :root :where(.wp-block-image figcaption) {
  color: rgba(255, 255, 255, 0.65);
}

.wp-block-image {
  margin: 0 0 1em 0;
}

.wp-block-pullquote {
  border-top: 4px solid currentColor;
  border-bottom: 4px solid currentColor;
  margin-bottom: 1.75em;
  color: currentColor;
}
.wp-block-pullquote :where(cite),
.wp-block-pullquote :where(footer), .wp-block-pullquote__citation {
  color: currentColor;
  text-transform: uppercase;
  font-size: 0.8125em;
  font-style: normal;
}

.wp-block-quote {
  border-left: 0.25em solid currentColor;
  margin: 0 0 1.75em 0;
  padding-left: 1em;
}
.wp-block-quote cite,
.wp-block-quote footer {
  color: currentColor;
  font-size: 0.8125em;
  position: relative;
  font-style: normal;
}
.wp-block-quote:where(.has-text-align-right) {
  border-left: none;
  border-right: 0.25em solid currentColor;
  padding-left: 0;
  padding-right: 1em;
}
.wp-block-quote:where(.has-text-align-center) {
  border: none;
  padding-left: 0;
}
.wp-block-quote:where(.is-style-plain), .wp-block-quote.is-style-large, .wp-block-quote.is-large {
  border: none;
}

.wp-block-search .wp-block-search__label {
  font-weight: bold;
}

.wp-block-search__button {
  border: 1px solid #ccc;
  padding: 0.375em 0.625em;
}

:where(.wp-block-group.has-background) {
  padding: 1.25em 2.375em;
}

.wp-block-separator.has-css-opacity {
  opacity: 0.4;
}

.wp-block-separator {
  border: none;
  border-bottom: 2px solid currentColor;
  margin-left: auto;
  margin-right: auto;
}
.wp-block-separator.has-alpha-channel-opacity {
  opacity: initial;
}
.wp-block-separator:not(.is-style-wide):not(.is-style-dots) {
  width: 100px;
}
.wp-block-separator.has-background:not(.is-style-dots) {
  border-bottom: none;
  height: 1px;
}
.wp-block-separator.has-background:not(.is-style-wide):not(.is-style-dots) {
  height: 2px;
}

.wp-block-table {
  margin: 0 0 1em 0;
}
.wp-block-table td,
.wp-block-table th {
  word-break: normal;
}
.wp-block-table :where(figcaption) {
  color: #555;
  font-size: 13px;
  text-align: center;
}
.is-dark-theme .wp-block-table :where(figcaption) {
  color: rgba(255, 255, 255, 0.65);
}

.wp-block-video :where(figcaption) {
  color: #555;
  font-size: 13px;
  text-align: center;
}
.is-dark-theme .wp-block-video :where(figcaption) {
  color: rgba(255, 255, 255, 0.65);
}

.wp-block-video {
  margin: 0 0 1em 0;
}

:root :where(.wp-block-template-part.has-background) {
  padding: 1.25em 2.375em;
  margin-top: 0;
  margin-bottom: 0;
}`,""]);const pt=st}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-style/style.css":((Nt,ue,V)=>{V.d(ue,{A:()=>Rt});var nt=V("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),X=V.n(nt),re=V("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),Ke=V.n(re),st=V("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/getUrl.js"),pt=V.n(st),rt=new URL(V('data:image/svg+xml,%3Csvg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M6 8V6H4v2h2zM8 8V6h2v2H8zM10 16H8v-2h2v2zM12 16v-2h2v2h-2zM12 18v-2h-2v2H8v2h2v-2h2zM14 18v2h-2v-2h2zM16 18h-2v-2h2v2z" fill="%23555D65"/%3E%3Cpath fill-rule="evenodd" clip-rule="evenodd" d="M18 18h2v-2h-2v-2h2v-2h-2v-2h2V8h-2v2h-2V8h-2v2h2v2h-2v2h2v2h2v2zm-2-4v-2h2v2h-2z" fill="%23555D65"/%3E%3Cpath d="M18 18v2h-2v-2h2z" fill="%23555D65"/%3E%3Cpath fill-rule="evenodd" clip-rule="evenodd" d="M8 10V8H6v2H4v2h2v2H4v2h2v2H4v2h2v2H4v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2V8h-2V6h2V4h-2v2h-2V4h-2v2h-2V4h-2v2h-2V4h-2v2h2v2h-2v2H8zm0 2v-2H6v2h2zm2 0v-2h2v2h-2zm0 2v-2H8v2H6v2h2v2H6v2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2V8h-2V6h-2v2h-2V6h-2v2h-2v2h2v2h-2v2h-2z" fill="%23555D65"/%3E%3Cpath fill-rule="evenodd" clip-rule="evenodd" d="M4 0H2v2H0v2h2v2H0v2h2v2H0v2h2v2H0v2h2v2H0v2h2v2H0v2h2v2H0v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2V8h-2V6h2V4h-2V2h2V0h-2v2h-2V0h-2v2h-2V0h-2v2h-2V0h-2v2h-2V0h-2v2H8V0H6v2H4V0zm0 4V2H2v2h2zm2 0V2h2v2H6zm0 2V4H4v2H2v2h2v2H2v2h2v2H2v2h2v2H2v2h2v2H2v2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2V8h-2V6h2V4h-2V2h-2v2h-2V2h-2v2h-2V2h-2v2h-2V2h-2v2H8v2H6z" fill="%23555D65"/%3E%3C/svg%3E'),V.b),Et=Ke()(X()),p=pt()(rt);Et.push([Nt.id,`@charset "UTF-8";
/**
 * Colors
 */
/**
 * Breakpoints & Media Queries
 */
/**
 * Colors
 */
/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
/**
 * Colors
 */
/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
/**
 * Breakpoints & Media Queries
 */
/**
*  Converts a hex value into the rgb equivalent.
*
* @param {string} hex - the hexadecimal value to convert
* @return {string} comma separated rgb values
*/
/**
 * Long content fade mixin
 *
 * Creates a fading overlay to signify that the content is longer
 * than the space allows.
 */
/**
 * Typography
 */
/**
 * Breakpoint mixins
 */
/**
 * Focus styles.
 */
/**
 * Applies editor left position to the selector passed as argument
 */
/**
 * Styles that are reused verbatim in a few places
 */
/**
 * Allows users to opt-out of animations via OS-level preferences.
 */
/**
 * Reset default styles for JavaScript UI based pages.
 * This is a WP-admin agnostic reset
 */
/**
 * Reset the WP Admin page styles for Gutenberg-like pages.
 */
:root {
  --wp-admin-theme-color: #3858e9;
  --wp-admin-theme-color--rgb: 56, 88, 233;
  --wp-admin-theme-color-darker-10: #2145e6;
  --wp-admin-theme-color-darker-10--rgb: 33, 69, 230;
  --wp-admin-theme-color-darker-20: #183ad6;
  --wp-admin-theme-color-darker-20--rgb: 24, 58, 214;
  --wp-admin-border-width-focus: 2px;
}
@media (min-resolution: 192dpi) {
  :root {
    --wp-admin-border-width-focus: 1.5px;
  }
}

@media not (prefers-reduced-motion) {
  .components-animate__appear {
    animation: components-animate__appear-animation 0.1s cubic-bezier(0, 0, 0.2, 1) 0s;
    animation-fill-mode: forwards;
  }
}
.components-animate__appear.is-from-top, .components-animate__appear.is-from-top.is-from-left {
  transform-origin: top left;
}
.components-animate__appear.is-from-top.is-from-right {
  transform-origin: top right;
}
.components-animate__appear.is-from-bottom, .components-animate__appear.is-from-bottom.is-from-left {
  transform-origin: bottom left;
}
.components-animate__appear.is-from-bottom.is-from-right {
  transform-origin: bottom right;
}

@keyframes components-animate__appear-animation {
  from {
    transform: translateY(-2em) scaleY(0) scaleX(0);
  }
  to {
    transform: translateY(0%) scaleY(1) scaleX(1);
  }
}
@media not (prefers-reduced-motion) {
  .components-animate__slide-in {
    animation: components-animate__slide-in-animation 0.1s cubic-bezier(0, 0, 0.2, 1);
    animation-fill-mode: forwards;
  }
  .components-animate__slide-in.is-from-left {
    transform: translateX(100%);
  }
  .components-animate__slide-in.is-from-right {
    transform: translateX(-100%);
  }
}

@keyframes components-animate__slide-in-animation {
  100% {
    transform: translateX(0%);
  }
}
@media not (prefers-reduced-motion) {
  .components-animate__loading {
    animation: components-animate__loading 1.6s ease-in-out infinite;
  }
}

@keyframes components-animate__loading {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}
.components-autocomplete__popover .components-popover__content {
  padding: 8px;
  min-width: 200px;
}

.components-autocomplete__result.components-button {
  display: flex;
  height: auto;
  min-height: 36px;
  text-align: left;
  width: 100%;
}
.components-autocomplete__result.components-button:focus:not(:disabled) {
  box-shadow: inset 0 0 0 1px #fff, 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
  outline: 2px solid transparent;
}

.components-badge {
  box-sizing: border-box;
  background-color: color-mix(in srgb, #fff 90%, var(--base-color));
  color: color-mix(in srgb, #000 50%, var(--base-color));
  padding: 0 8px;
  min-height: 24px;
  max-width: 100%;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  display: inline-flex;
  align-items: center;
  gap: 2px;
}
.components-badge *,
.components-badge *::before,
.components-badge *::after {
  box-sizing: inherit;
}
.components-badge:where(.is-default) {
  background-color: #f0f0f0;
  color: #2f2f2f;
}
.components-badge.has-icon {
  padding-inline-start: 4px;
}
.components-badge.is-info {
  --base-color: #3858e9;
}
.components-badge.is-warning {
  --base-color: #f0b849;
}
.components-badge.is-error {
  --base-color: #cc1818;
}
.components-badge.is-success {
  --base-color: #4ab866;
}

.components-badge__icon {
  flex-shrink: 0;
}

.components-badge__content {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.components-button-group {
  display: inline-block;
}
.components-button-group .components-button {
  border-radius: 0;
  display: inline-flex;
  color: #1e1e1e;
  box-shadow: inset 0 0 0 1px #1e1e1e;
}
.components-button-group .components-button + .components-button {
  margin-left: -1px;
}
.components-button-group .components-button:first-child {
  border-radius: 2px 0 0 2px;
}
.components-button-group .components-button:last-child {
  border-radius: 0 2px 2px 0;
}
.components-button-group .components-button:focus, .components-button-group .components-button.is-primary {
  position: relative;
  z-index: 1;
}
.components-button-group .components-button.is-primary {
  box-shadow: inset 0 0 0 1px #1e1e1e;
}

/**
 * For easier testing of potential regressions, you can use a Button variant matrix
 * available in a special Storybook instance by running \`npm run storybook:e2e:dev\`.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/test/storybook-playwright/README.md
 */
.components-button {
  display: inline-flex;
  text-decoration: none;
  font-family: inherit;
  font-size: 13px;
  margin: 0;
  border: 0;
  cursor: pointer;
  -webkit-appearance: none;
  background: none;
  height: 36px;
  align-items: center;
  box-sizing: border-box;
  padding: 6px 12px;
  border-radius: 2px;
  color: var(--wp-components-color-foreground, #1e1e1e);
  /**
   * Primary button style.
   */
  /**
   * Secondary and tertiary buttons.
   */
  /**
   * Secondary button style.
   */
  /**
   * Tertiary buttons.
   */
  /**
   * Destructive buttons.
   */
  /**
   * Link buttons.
   */
}
@media not (prefers-reduced-motion) {
  .components-button {
    transition: box-shadow 0.1s linear;
  }
}
.components-button.is-next-40px-default-size {
  height: 40px;
}
.components-button[aria-expanded=true], .components-button:hover:not(:disabled, [aria-disabled=true]) {
  color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
}
.components-button:focus:not(:disabled) {
  box-shadow: 0 0 0 var(--wp-admin-border-width-focus) var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  outline: 3px solid transparent;
}
.components-button.is-primary {
  white-space: nowrap;
  background: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  color: var(--wp-components-color-accent-inverted, #fff);
  text-decoration: none;
  text-shadow: none;
  outline: 1px solid transparent;
}
.components-button.is-primary:hover:not(:disabled) {
  background: var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #2145e6));
  color: var(--wp-components-color-accent-inverted, #fff);
}
.components-button.is-primary:active:not(:disabled) {
  background: var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6));
  border-color: var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6));
  color: var(--wp-components-color-accent-inverted, #fff);
}
.components-button.is-primary:focus:not(:disabled) {
  box-shadow: inset 0 0 0 1px var(--wp-components-color-background, #fff), 0 0 0 var(--wp-admin-border-width-focus) var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
}
.components-button.is-primary:disabled, .components-button.is-primary:disabled:active:enabled, .components-button.is-primary[aria-disabled=true], .components-button.is-primary[aria-disabled=true]:enabled, .components-button.is-primary[aria-disabled=true]:active:enabled {
  color: var(--wp-components-color-foreground-inverted, #fff);
  background: var(--wp-components-color-gray-300, #ddd);
  border-color: var(--wp-components-color-gray-300, #ddd);
  outline: none;
}
.components-button.is-primary:disabled:focus:enabled, .components-button.is-primary:disabled:active:enabled:focus:enabled, .components-button.is-primary[aria-disabled=true]:focus:enabled, .components-button.is-primary[aria-disabled=true]:enabled:focus:enabled, .components-button.is-primary[aria-disabled=true]:active:enabled:focus:enabled {
  box-shadow: inset 0 0 0 1px var(--wp-components-color-background, #fff), 0 0 0 var(--wp-admin-border-width-focus) var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
}
.components-button.is-primary.is-busy, .components-button.is-primary.is-busy:disabled, .components-button.is-primary.is-busy[aria-disabled=true] {
  color: var(--wp-components-color-accent-inverted, #fff);
  background-size: 100px 100%;
  /* stylelint-disable -- Disable reason: This function call looks nicer when each argument is on its own line. */
  background-image: linear-gradient(-45deg, var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9)) 33%, var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6)) 33%, var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6)) 70%, var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9)) 70%);
  /* stylelint-enable */
  border-color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
}
.components-button.is-secondary, .components-button.is-tertiary {
  outline: 1px solid transparent;
}
.components-button.is-secondary:active:not(:disabled), .components-button.is-tertiary:active:not(:disabled) {
  box-shadow: none;
}
.components-button.is-secondary:disabled, .components-button.is-secondary[aria-disabled=true], .components-button.is-secondary[aria-disabled=true]:hover, .components-button.is-tertiary:disabled, .components-button.is-tertiary[aria-disabled=true], .components-button.is-tertiary[aria-disabled=true]:hover {
  color: #949494;
  background: transparent;
  transform: none;
}
.components-button.is-secondary {
  box-shadow: inset 0 0 0 1px var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9)), 0 0 0 currentColor;
  outline: 1px solid transparent;
  white-space: nowrap;
  color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  background: transparent;
}
.components-button.is-secondary:hover:not(:disabled, [aria-disabled=true], .is-pressed) {
  box-shadow: inset 0 0 0 1px var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6));
  color: var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6));
  background: color-mix(in srgb, var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9)) 4%, transparent);
}
.components-button.is-secondary:disabled:not(:focus), .components-button.is-secondary[aria-disabled=true]:not(:focus), .components-button.is-secondary[aria-disabled=true]:hover:not(:focus) {
  box-shadow: inset 0 0 0 1px #ddd;
}
.components-button.is-secondary:focus:not(:disabled) {
  box-shadow: 0 0 0 currentColor inset, 0 0 0 var(--wp-admin-border-width-focus) var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
}
.components-button.is-tertiary {
  white-space: nowrap;
  color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  background: transparent;
}
.components-button.is-tertiary:hover:not(:disabled, [aria-disabled=true], .is-pressed) {
  background: color-mix(in srgb, var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9)) 4%, transparent);
  color: var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6));
}
.components-button.is-tertiary:active:not(:disabled, [aria-disabled=true]) {
  background: color-mix(in srgb, var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9)) 8%, transparent);
}
p + .components-button.is-tertiary {
  margin-left: -6px;
}
.components-button.is-tertiary:disabled:not(:focus), .components-button.is-tertiary[aria-disabled=true]:not(:focus), .components-button.is-tertiary[aria-disabled=true]:hover:not(:focus) {
  box-shadow: none;
  outline: none;
}
.components-button.is-destructive {
  --wp-components-color-accent: #cc1818;
  --wp-components-color-accent-darker-10: #9e1313;
  --wp-components-color-accent-darker-20: #710d0d;
}
.components-button.is-destructive:not(.is-primary):not(.is-secondary):not(.is-tertiary):not(.is-link) {
  color: #cc1818;
}
.components-button.is-destructive:not(.is-primary):not(.is-secondary):not(.is-tertiary):not(.is-link):hover:not(:disabled, [aria-disabled=true]) {
  color: #710d0d;
}
.components-button.is-destructive:not(.is-primary):not(.is-secondary):not(.is-tertiary):not(.is-link):focus {
  box-shadow: 0 0 0 var(--wp-admin-border-width-focus) #cc1818;
}
.components-button.is-destructive:not(.is-primary):not(.is-secondary):not(.is-tertiary):not(.is-link):active:not(:disabled, [aria-disabled=true]) {
  background: #ccc;
}
.components-button.is-destructive:not(.is-primary):not(.is-secondary):not(.is-tertiary):not(.is-link):disabled, .components-button.is-destructive:not(.is-primary):not(.is-secondary):not(.is-tertiary):not(.is-link)[aria-disabled=true] {
  color: #949494;
}
.components-button.is-destructive.is-tertiary:hover:not(:disabled, [aria-disabled=true]), .components-button.is-destructive.is-secondary:hover:not(:disabled, [aria-disabled=true]) {
  background: rgba(204, 24, 24, 0.04);
}
.components-button.is-destructive.is-tertiary:active:not(:disabled, [aria-disabled=true]), .components-button.is-destructive.is-secondary:active:not(:disabled, [aria-disabled=true]) {
  background: rgba(204, 24, 24, 0.08);
}
.components-button.is-link {
  margin: 0;
  padding: 0;
  box-shadow: none;
  border: 0;
  border-radius: 0;
  background: none;
  outline: none;
  text-align: left;
  color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  text-decoration: underline;
  height: auto;
}
@media not (prefers-reduced-motion) {
  .components-button.is-link {
    transition-property: border, background, color;
    transition-duration: 0.05s;
    transition-timing-function: ease-in-out;
  }
}
.components-button.is-link:focus {
  border-radius: 2px;
}
.components-button.is-link:disabled, .components-button.is-link[aria-disabled=true] {
  color: #949494;
}
.components-button:not(:disabled, [aria-disabled=true]):active {
  color: var(--wp-components-color-foreground, #1e1e1e);
}
.components-button:disabled, .components-button[aria-disabled=true] {
  cursor: default;
  color: #949494;
}
.components-button.is-busy, .components-button.is-secondary.is-busy, .components-button.is-secondary.is-busy:disabled, .components-button.is-secondary.is-busy[aria-disabled=true] {
  background-size: 100px 100%;
  /* stylelint-disable -- Disable reason: This function call looks nicer when each argument is on its own line. */
  background-image: linear-gradient(-45deg, #fafafa 33%, #e0e0e0 33%, #e0e0e0 70%, #fafafa 70%);
  /* stylelint-enable */
}
@media not (prefers-reduced-motion) {
  .components-button.is-busy, .components-button.is-secondary.is-busy, .components-button.is-secondary.is-busy:disabled, .components-button.is-secondary.is-busy[aria-disabled=true] {
    animation: components-button__busy-animation 2500ms infinite linear;
  }
}
.components-button.is-compact {
  height: 32px;
}
.components-button.is-compact.has-icon:not(.has-text) {
  padding: 0;
  min-width: 32px;
}
.components-button.is-small {
  height: 24px;
  line-height: 22px;
  padding: 0 8px;
  font-size: 11px;
}
.components-button.is-small.has-icon:not(.has-text) {
  padding: 0;
  min-width: 24px;
}
.components-button.has-icon {
  padding: 6px;
  min-width: 36px;
  justify-content: center;
}
.components-button.has-icon.is-next-40px-default-size {
  min-width: 40px;
}
.components-button.has-icon .dashicon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  box-sizing: content-box;
}
.components-button.has-icon.has-text {
  justify-content: start;
  padding-right: 12px;
  padding-left: 8px;
  gap: 4px;
}
.components-button.is-pressed, .components-button.is-pressed:hover {
  color: var(--wp-components-color-foreground-inverted, #fff);
}
.components-button.is-pressed:not(:disabled, [aria-disabled=true]), .components-button.is-pressed:hover:not(:disabled, [aria-disabled=true]) {
  background: var(--wp-components-color-foreground, #1e1e1e);
}
.components-button.is-pressed:disabled, .components-button.is-pressed[aria-disabled=true] {
  color: #949494;
}
.components-button.is-pressed:disabled:not(.is-primary):not(.is-secondary):not(.is-tertiary), .components-button.is-pressed[aria-disabled=true]:not(.is-primary):not(.is-secondary):not(.is-tertiary) {
  color: var(--wp-components-color-foreground-inverted, #fff);
  background: #949494;
}
.components-button.is-pressed:focus:not(:disabled) {
  box-shadow: inset 0 0 0 1px var(--wp-components-color-background, #fff), 0 0 0 var(--wp-admin-border-width-focus) var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  outline: 2px solid transparent;
}
.components-button svg {
  fill: currentColor;
  outline: none;
}
@media (forced-colors: active) {
  .components-button svg {
    fill: CanvasText;
  }
}
.components-button .components-visually-hidden {
  height: auto;
}

@keyframes components-button__busy-animation {
  0% {
    background-position: 200px 0;
  }
}
/* Root of the component. */
.components-calendar {
  position: relative; /* Required to position the navigation toolbar. */
  box-sizing: border-box;
  display: inline flow-root;
  color: var(--wp-components-color-foreground, #1e1e1e);
  background-color: var(--wp-components-color-background, #fff);
  font-size: 13px;
  font-weight: 400;
  z-index: 0;
}
.components-calendar *,
.components-calendar *::before,
.components-calendar *::after {
  box-sizing: border-box;
}

.components-calendar__day {
  padding: 0;
  position: relative;
}
.components-calendar__day:has(.components-calendar__day-button:disabled) {
  color: var(--wp-components-color-gray-600, #949494);
}
.components-calendar__day:has(.components-calendar__day-button:hover:not(:disabled)), .components-calendar__day:has(.components-calendar__day-button:focus-visible) {
  color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
}

.components-calendar__day-button {
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 2px;
  font: inherit;
  font-variant-numeric: tabular-nums;
  color: inherit;
}
.components-calendar__day-button::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  border: none;
  border-radius: 2px;
}
.components-calendar__day-button::after {
  content: "";
  position: absolute;
  z-index: 1;
  inset: 0;
  pointer-events: none;
}
.components-calendar__day-button:disabled {
  cursor: revert;
}
@media (forced-colors: active) {
  .components-calendar__day-button:disabled {
    text-decoration: line-through;
  }
}
.components-calendar__day-button:focus-visible {
  outline: var(--wp-admin-border-width-focus) solid var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  outline-offset: 1px;
}

.components-calendar__caption-label {
  z-index: 1;
  position: relative;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  border: 0;
  text-transform: capitalize;
}

.components-calendar__button-next,
.components-calendar__button-previous {
  border: none;
  border-radius: 2px;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  appearance: none;
  width: 32px;
  height: 32px;
  color: inherit;
}
.components-calendar__button-next:disabled, .components-calendar__button-next[aria-disabled=true],
.components-calendar__button-previous:disabled,
.components-calendar__button-previous[aria-disabled=true] {
  cursor: revert;
  color: var(--wp-components-color-gray-600, #949494);
}
.components-calendar__button-next:focus-visible,
.components-calendar__button-previous:focus-visible {
  outline: var(--wp-admin-border-width-focus) solid var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
}

.components-calendar__chevron {
  display: inline-block;
  fill: currentColor;
  width: 16px;
  height: 16px;
}

.components-calendar[dir=rtl] .components-calendar__nav .components-calendar__chevron {
  transform: rotate(180deg);
  transform-origin: 50%;
}

.components-calendar__month-caption {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 32px;
  margin-bottom: 12px;
}

.components-calendar__months {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  max-width: fit-content;
}

.components-calendar__month-grid {
  border-collapse: separate;
  border-spacing: 0 4px;
}

.components-calendar__nav {
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
  inset-inline-end: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
}

.components-calendar__weekday {
  width: 32px;
  height: 32px;
  padding: 0;
  color: var(--wp-components-color-gray-700, #757575);
  text-align: center;
  text-transform: uppercase;
}

/* DAY MODIFIERS */
.components-calendar__day--today::after {
  content: "";
  position: absolute;
  z-index: 1;
  inset-block-start: 2px;
  inset-inline-end: 2px;
  width: 0;
  height: 0;
  border-radius: 50%;
  border: 2px solid currentColor;
}

.components-calendar__day--selected:not(.components-calendar__range-middle):has(.components-calendar__day-button,
.components-calendar__day-button:hover:not(:disabled)) {
  color: var(--wp-components-color-foreground-inverted, #fff);
}
.components-calendar__day--selected:not(.components-calendar__range-middle) .components-calendar__day-button::before {
  background-color: var(--wp-components-color-foreground, #1e1e1e);
  border: 1px solid transparent;
}
.components-calendar__day--selected:not(.components-calendar__range-middle) .components-calendar__day-button:disabled::before {
  background-color: var(--wp-components-color-gray-600, #949494);
}
.components-calendar__day--selected:not(.components-calendar__range-middle) .components-calendar__day-button:hover:not(:disabled)::before {
  background-color: var(--wp-components-color-gray-800, #2f2f2f);
}

.components-calendar__day--hidden {
  visibility: hidden;
}

.components-calendar__range-start:not(.components-calendar__range-end) .components-calendar__day-button, .components-calendar__range-start:not(.components-calendar__range-end) .components-calendar__day-button::before {
  border-start-end-radius: 0;
  border-end-end-radius: 0;
}

.components-calendar__range-middle .components-calendar__day-button::before {
  background-color: color-mix(in srgb, var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9)) 4%, transparent);
  border-radius: 0;
  border-width: 1px 0;
  border-color: transparent;
  border-style: solid;
}

.components-calendar__range-end:not(.components-calendar__range-start) .components-calendar__day-button, .components-calendar__range-end:not(.components-calendar__range-start) .components-calendar__day-button::before {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
}

/*
 * RANGE PREVIEW (range calendar only)
 *
 * The preview is rendered in the button's ::after pseudo-element, so that it
 * can be rendered over the button's contents.
 * The selection preview is shown with a dashed border. In order to have
 * control over the dash pattern (especially the seams between days), the
 * dashed borders are rendered as SVGs via the url() CSS function.
 * Since SVGs rendered in the url() function don't seem to be able to access
 * CSS variables, we're using the SVGs as masks, and using \`background-color\`
 * to consume the accent color variable.
 */
.components-calendar__day--preview svg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  color: color-mix(in srgb, var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9)) 16%, transparent);
}
@media (forced-colors: active) {
  .components-calendar__day--preview svg {
    color: inherit;
  }
}
.components-calendar[dir=rtl] .components-calendar__day--preview svg {
  transform: scaleX(-1);
}

.components-calendar__day--preview.components-calendar__range-middle .components-calendar__day-button::before {
  border: none;
}

/* ANIMATIONS */
@keyframes slide-in-left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slide-in-right {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slide-out-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes slide-out-right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.components-calendar__weeks-before-enter,
.components-calendar__weeks-before-exit,
.components-calendar__weeks-after-enter,
.components-calendar__weeks-after-exit,
.components-calendar__caption-after-enter,
.components-calendar__caption-after-exit,
.components-calendar__caption-before-enter,
.components-calendar__caption-before-exit {
  animation-duration: 0s;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-fill-mode: forwards;
}
@media not (prefers-reduced-motion) {
  .components-calendar__weeks-before-enter,
.components-calendar__weeks-before-exit,
.components-calendar__weeks-after-enter,
.components-calendar__weeks-after-exit,
.components-calendar__caption-after-enter,
.components-calendar__caption-after-exit,
.components-calendar__caption-before-enter,
.components-calendar__caption-before-exit {
    animation-duration: 0.3s;
  }
}

.components-calendar__weeks-before-enter,
.components-calendar[dir=rtl] .components-calendar__weeks-after-enter {
  animation-name: slide-in-left;
}

.components-calendar__weeks-before-exit,
.components-calendar[dir=rtl] .components-calendar__weeks-after-exit {
  animation-name: slide-out-left;
}

.components-calendar__weeks-after-enter,
.components-calendar[dir=rtl] .components-calendar__weeks-before-enter {
  animation-name: slide-in-right;
}

.components-calendar__weeks-after-exit,
.components-calendar[dir=rtl] .components-calendar__weeks-before-exit {
  animation-name: slide-out-right;
}

.components-calendar__caption-after-enter {
  animation-name: fade-in;
}

.components-calendar__caption-after-exit {
  animation-name: fade-out;
}

.components-calendar__caption-before-enter {
  animation-name: fade-in;
}

.components-calendar__caption-before-exit {
  animation-name: fade-out;
}

.components-checkbox-control {
  --checkbox-input-size: 24px;
  --checkbox-input-margin: 8px;
}
@media (min-width: 600px) {
  .components-checkbox-control {
    --checkbox-input-size: 16px;
  }
}

.components-checkbox-control__label {
  line-height: var(--checkbox-input-size);
  cursor: pointer;
}

.components-checkbox-control__input[type=checkbox] {
  border: 1px solid #1e1e1e;
  margin-right: 12px;
  transition: none;
  border-radius: 2px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  padding: 6px 8px;
  /* Fonts smaller than 16px causes mobile safari to zoom. */
  font-size: 16px;
  /* Override core line-height. To be reviewed. */
  line-height: normal;
  box-shadow: 0 0 0 transparent;
  border-radius: 2px;
  border: 1px solid #949494;
  background: #fff;
  color: #1e1e1e;
  clear: none;
  cursor: pointer;
  display: inline-block;
  line-height: 0;
  margin: 0 4px 0 0;
  outline: 0;
  padding: 0 !important;
  text-align: center;
  vertical-align: top;
  width: var(--checkbox-input-size);
  height: var(--checkbox-input-size);
  appearance: none;
}
@media not (prefers-reduced-motion) {
  .components-checkbox-control__input[type=checkbox] {
    transition: box-shadow 0.1s linear;
  }
}
@media (min-width: 600px) {
  .components-checkbox-control__input[type=checkbox] {
    font-size: 13px;
    /* Override core line-height. To be reviewed. */
    line-height: normal;
  }
}
.components-checkbox-control__input[type=checkbox]:focus {
  border-color: var(--wp-admin-theme-color);
  box-shadow: 0 0 0 0.5px var(--wp-admin-theme-color);
  outline: 2px solid transparent;
}
.components-checkbox-control__input[type=checkbox]::-webkit-input-placeholder {
  color: rgba(30, 30, 30, 0.62);
}
.components-checkbox-control__input[type=checkbox]::-moz-placeholder {
  color: rgba(30, 30, 30, 0.62);
}
.components-checkbox-control__input[type=checkbox]:-ms-input-placeholder {
  color: rgba(30, 30, 30, 0.62);
}
.components-checkbox-control__input[type=checkbox]:focus {
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--wp-admin-theme-color);
  outline: 2px solid transparent;
}
.components-checkbox-control__input[type=checkbox]:checked {
  background: var(--wp-admin-theme-color);
  border-color: var(--wp-admin-theme-color);
}
.components-checkbox-control__input[type=checkbox]:checked::-ms-check {
  opacity: 0;
}
.components-checkbox-control__input[type=checkbox]:checked::before, .components-checkbox-control__input[type=checkbox][aria-checked=mixed]::before {
  margin: -3px -5px;
  color: #fff;
}
@media (min-width: 782px) {
  .components-checkbox-control__input[type=checkbox]:checked::before, .components-checkbox-control__input[type=checkbox][aria-checked=mixed]::before {
    margin: -4px 0 0 -5px;
  }
}
.components-checkbox-control__input[type=checkbox][aria-checked=mixed] {
  background: var(--wp-admin-theme-color);
  border-color: var(--wp-admin-theme-color);
}
.components-checkbox-control__input[type=checkbox][aria-checked=mixed]::before {
  content: "\\f460";
  float: left;
  display: inline-block;
  vertical-align: middle;
  width: 16px;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword -- dashicons don't need a generic family keyword. */
  font: normal 30px/1 dashicons;
  speak: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media (min-width: 782px) {
  .components-checkbox-control__input[type=checkbox][aria-checked=mixed]::before {
    float: none;
    font-size: 21px;
  }
}
.components-checkbox-control__input[type=checkbox][aria-disabled=true], .components-checkbox-control__input[type=checkbox]:disabled {
  background: #f0f0f0;
  border-color: #ddd;
  cursor: default;
  opacity: 1;
}
@media not (prefers-reduced-motion) {
  .components-checkbox-control__input[type=checkbox] {
    transition: 0.1s border-color ease-in-out;
  }
}
.components-checkbox-control__input[type=checkbox]:focus {
  box-shadow: 0 0 0 var(--wp-admin-border-width-focus) #fff, 0 0 0 calc(2 * var(--wp-admin-border-width-focus)) var(--wp-admin-theme-color);
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.components-checkbox-control__input[type=checkbox]:checked, .components-checkbox-control__input[type=checkbox]:indeterminate {
  background: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  border-color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
}
.components-checkbox-control__input[type=checkbox]:checked::-ms-check, .components-checkbox-control__input[type=checkbox]:indeterminate::-ms-check {
  opacity: 0;
}
.components-checkbox-control__input[type=checkbox]:checked::before {
  content: none;
}

.components-checkbox-control__input-container {
  position: relative;
  display: inline-block;
  margin-right: var(--checkbox-input-margin);
  vertical-align: middle;
  width: var(--checkbox-input-size);
  aspect-ratio: 1;
  line-height: 1;
  flex-shrink: 0;
}

svg.components-checkbox-control__checked,
svg.components-checkbox-control__indeterminate {
  --checkmark-size: var(--checkbox-input-size);
  fill: #fff;
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: var(--checkmark-size);
  height: var(--checkmark-size);
  -webkit-user-select: none;
          user-select: none;
  pointer-events: none;
}
@media (min-width: 600px) {
  svg.components-checkbox-control__checked,
svg.components-checkbox-control__indeterminate {
    --checkmark-size: calc(var(--checkbox-input-size) + 4px);
  }
}

.components-checkbox-control__help {
  display: inline-block;
  margin-inline-start: calc(var(--checkbox-input-size) + var(--checkbox-input-margin));
}

.components-circular-option-picker {
  display: inline-block;
  width: 100%;
  min-width: 188px;
}
.components-circular-option-picker .components-circular-option-picker__custom-clear-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
}
.components-circular-option-picker .components-circular-option-picker__swatches {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  position: relative;
  z-index: 1;
}
.components-circular-option-picker > *:not(.components-circular-option-picker__swatches) {
  position: relative;
  z-index: 0;
}

.components-circular-option-picker__option-wrapper {
  display: inline-block;
  height: 28px;
  width: 28px;
  vertical-align: top;
  transform: scale(1);
}
@media not (prefers-reduced-motion) {
  .components-circular-option-picker__option-wrapper {
    transition: 100ms transform ease;
    will-change: transform;
  }
}
.components-circular-option-picker__option-wrapper:hover {
  transform: scale(1.2);
}
.components-circular-option-picker__option-wrapper > div {
  height: 100%;
  width: 100%;
}

.components-circular-option-picker__option-wrapper::before {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  bottom: 1px;
  right: 1px;
  border-radius: 50%;
  z-index: -1;
  /* stylelint-disable-next-line function-url-quotes -- We need quotes for the data URL to use the SVG inline. */
  background: url(${p});
}

.components-circular-option-picker__option {
  display: inline-block;
  vertical-align: top;
  height: 100% !important;
  aspect-ratio: 1;
  border: none;
  border-radius: 50%;
  background: transparent;
  box-shadow: inset 0 0 0 14px;
  cursor: pointer;
}
@media not (prefers-reduced-motion) {
  .components-circular-option-picker__option {
    transition: 100ms box-shadow ease;
  }
}
.components-circular-option-picker__option:hover {
  box-shadow: inset 0 0 0 14px !important;
}
.components-circular-option-picker__option[aria-pressed=true], .components-circular-option-picker__option[aria-selected=true] {
  box-shadow: inset 0 0 0 4px;
  position: relative;
  z-index: 1;
  overflow: visible;
}
.components-circular-option-picker__option[aria-pressed=true] + svg, .components-circular-option-picker__option[aria-selected=true] + svg {
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  z-index: 2;
  pointer-events: none;
}
.components-circular-option-picker__option::after {
  content: "";
  position: absolute;
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
  border: 1px solid transparent;
  box-sizing: inherit;
}
.components-circular-option-picker__option:focus::after {
  content: "";
  border-radius: 50%;
  box-shadow: inset 0 0 0 2px #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #757575;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
}
.components-circular-option-picker__option.components-button:focus {
  background-color: transparent;
  box-shadow: inset 0 0 0 14px;
  outline: none;
}

.components-circular-option-picker__button-action .components-circular-option-picker__option {
  color: #fff;
  background: #fff;
}

.components-circular-option-picker__dropdown-link-action {
  margin-right: 16px;
}
.components-circular-option-picker__dropdown-link-action .components-button {
  line-height: 22px;
}

.components-palette-edit__popover-gradient-picker {
  width: 260px;
  padding: 8px;
}

.components-dropdown-menu__menu .components-palette-edit__menu-button {
  width: 100%;
}

.component-color-indicator {
  width: 20px;
  height: 20px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  display: inline-block;
  padding: 0;
  background: #fff linear-gradient(-45deg, transparent 48%, #ddd 48%, #ddd 52%, transparent 52%);
}

.components-combobox-control {
  width: 100%;
}

input.components-combobox-control__input[type=text] {
  width: 100%;
  border: none;
  box-shadow: none;
  font-family: inherit;
  font-size: 16px;
  padding: 2px;
  margin: 0;
  line-height: inherit;
  min-height: auto;
  background: var(--wp-components-color-background, #fff);
  color: var(--wp-components-color-foreground, #1e1e1e);
}
@media (min-width: 600px) {
  input.components-combobox-control__input[type=text] {
    font-size: 13px;
  }
}
input.components-combobox-control__input[type=text]:focus {
  outline: none;
  box-shadow: none;
}

.components-combobox-control__suggestions-container {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  padding: 6px 8px;
  /* Fonts smaller than 16px causes mobile safari to zoom. */
  font-size: 16px;
  /* Override core line-height. To be reviewed. */
  line-height: normal;
  box-shadow: 0 0 0 transparent;
  border-radius: 2px;
  border: 1px solid #949494;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
  padding: 0;
}
@media not (prefers-reduced-motion) {
  .components-combobox-control__suggestions-container {
    transition: box-shadow 0.1s linear;
  }
}
@media (min-width: 600px) {
  .components-combobox-control__suggestions-container {
    font-size: 13px;
    /* Override core line-height. To be reviewed. */
    line-height: normal;
  }
}
.components-combobox-control__suggestions-container:focus {
  border-color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  box-shadow: 0 0 0 0.5px var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  outline: 2px solid transparent;
}
.components-combobox-control__suggestions-container::-webkit-input-placeholder {
  color: rgba(30, 30, 30, 0.62);
}
.components-combobox-control__suggestions-container::-moz-placeholder {
  color: rgba(30, 30, 30, 0.62);
}
.components-combobox-control__suggestions-container:-ms-input-placeholder {
  color: rgba(30, 30, 30, 0.62);
}
.components-combobox-control__suggestions-container:focus-within {
  border-color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  box-shadow: 0 0 0 0.5px var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  outline: 2px solid transparent;
}
.components-combobox-control__suggestions-container .components-spinner {
  margin: 0;
}

.components-color-palette__custom-color-wrapper {
  position: relative;
  z-index: 0;
}

.components-color-palette__custom-color-button {
  position: relative;
  border: none;
  background: none;
  height: 64px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  outline: 1px solid transparent;
  border-radius: 4px 4px 0 0;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
}
.components-color-palette__custom-color-button:focus {
  box-shadow: inset 0 0 0 var(--wp-admin-border-width-focus) var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  outline-width: 2px;
}
.components-color-palette__custom-color-button::after {
  content: "";
  position: absolute;
  inset: 1px;
  z-index: -1;
  /*rtl:begin:ignore*/
  background-image: repeating-linear-gradient(45deg, #e0e0e0 25%, transparent 25%, transparent 75%, #e0e0e0 75%, #e0e0e0), repeating-linear-gradient(45deg, #e0e0e0 25%, transparent 25%, transparent 75%, #e0e0e0 75%, #e0e0e0);
  background-position: 0 0, 24px 24px;
  /*rtl:end:ignore*/
  background-size: 48px 48px;
  border-radius: 3px 3px 0 0;
}

.components-color-palette__custom-color-text-wrapper {
  padding: 12px 16px;
  border-radius: 0 0 4px 4px;
  position: relative;
  font-size: 13px;
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.2), inset 1px 0 0 0 rgba(0, 0, 0, 0.2), inset -1px 0 0 0 rgba(0, 0, 0, 0.2);
}

.components-color-palette__custom-color-name {
  color: var(--wp-components-color-foreground, #1e1e1e);
  margin: 0 1px;
}

.components-color-palette__custom-color-value {
  color: #757575;
}
.components-color-palette__custom-color-value--is-hex {
  text-transform: uppercase;
}
.components-color-palette__custom-color-value:empty::after {
  content: "\u200B";
  visibility: hidden;
}

.components-custom-gradient-picker__gradient-bar {
  border-radius: 2px;
  width: 100%;
  height: 48px;
  position: relative;
  z-index: 1;
}
.components-custom-gradient-picker__gradient-bar.has-gradient {
  /*rtl:begin:ignore*/
  background-image: repeating-linear-gradient(45deg, #e0e0e0 25%, transparent 25%, transparent 75%, #e0e0e0 75%, #e0e0e0), repeating-linear-gradient(45deg, #e0e0e0 25%, transparent 25%, transparent 75%, #e0e0e0 75%, #e0e0e0);
  background-position: 0 0, 12px 12px;
  /*rtl:end:ignore*/
  background-size: 24px 24px;
}
.components-custom-gradient-picker__gradient-bar .components-custom-gradient-picker__gradient-bar-background {
  position: absolute;
  inset: 0;
}
.components-custom-gradient-picker__gradient-bar .components-custom-gradient-picker__markers-container {
  position: relative;
  width: calc(100% - 48px);
  margin-left: auto;
  margin-right: auto;
}
.components-custom-gradient-picker__gradient-bar .components-custom-gradient-picker__control-point-dropdown {
  position: absolute;
  height: 16px;
  width: 16px;
  top: 16px;
  display: flex;
}
.components-custom-gradient-picker__gradient-bar .components-custom-gradient-picker__insert-point-dropdown {
  position: relative;
  height: inherit;
  width: inherit;
  min-width: 16px !important;
  border-radius: 50%;
  background: #fff;
  padding: 2px;
  color: #1e1e1e;
}
.components-custom-gradient-picker__gradient-bar .components-custom-gradient-picker__insert-point-dropdown svg {
  height: 100%;
  width: 100%;
}
.components-custom-gradient-picker__gradient-bar .components-custom-gradient-picker__control-point-button {
  height: inherit;
  width: inherit;
  border-radius: 50%;
  padding: 0;
  box-shadow: inset 0 0 0 var(--wp-admin-border-width-focus) #fff, 0 0 2px 0 rgba(0, 0, 0, 0.25);
  outline: 2px solid transparent;
}
.components-custom-gradient-picker__gradient-bar .components-custom-gradient-picker__control-point-button:focus, .components-custom-gradient-picker__gradient-bar .components-custom-gradient-picker__control-point-button.is-active {
  box-shadow: inset 0 0 0 calc(var(--wp-admin-border-width-focus) * 2) #fff, 0 0 2px 0 rgba(0, 0, 0, 0.25);
  outline: 1.5px solid transparent;
}

.components-custom-gradient-picker__remove-control-point-wrapper {
  padding-bottom: 8px;
}

.components-custom-gradient-picker__inserter {
  /*rtl:ignore*/
  direction: ltr;
}

.components-custom-gradient-picker__liner-gradient-indicator {
  display: inline-block;
  flex: 0 auto;
  width: 20px;
  height: 20px;
}

.components-custom-gradient-picker__ui-line {
  position: relative;
  z-index: 0;
}

body.is-dragging-components-draggable {
  cursor: move; /* Fallback for IE/Edge < 14 */
  cursor: grabbing !important;
}

.components-draggable__invisible-drag-image {
  position: fixed;
  left: -1000px;
  height: 50px;
  width: 50px;
}

.components-draggable__clone {
  position: fixed;
  padding: 0;
  background: transparent;
  pointer-events: none;
  z-index: 1000000000;
}

.components-drop-zone {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 40;
  visibility: hidden;
  opacity: 0;
  border-radius: 2px;
}
.components-drop-zone.is-active {
  opacity: 1;
  visibility: visible;
}
.components-drop-zone .components-drop-zone__content {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: flex;
  background-color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  align-items: center;
  justify-content: center;
  z-index: 50;
  text-align: center;
  color: #fff;
  opacity: 0;
  pointer-events: none;
}
.components-drop-zone .components-drop-zone__content-inner {
  opacity: 0;
  transform: scale(0.9);
}
.components-drop-zone.is-active.is-dragging-over-element .components-drop-zone__content {
  opacity: 1;
}
@media not (prefers-reduced-motion) {
  .components-drop-zone.is-active.is-dragging-over-element .components-drop-zone__content {
    transition: opacity 0.2s ease-in-out;
  }
}
.components-drop-zone.is-active.is-dragging-over-element .components-drop-zone__content-inner {
  opacity: 1;
  transform: scale(1);
}
@media not (prefers-reduced-motion) {
  .components-drop-zone.is-active.is-dragging-over-element .components-drop-zone__content-inner {
    transition: opacity 0.1s ease-in-out 0.1s, transform 0.1s ease-in-out 0.1s;
  }
}

.components-drop-zone__content-icon,
.components-drop-zone__content-text {
  display: block;
}

.components-drop-zone__content-icon {
  margin: 0 auto 8px;
  line-height: 0;
  fill: currentColor;
  pointer-events: none;
}

.components-drop-zone__content-text {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 13px;
}

.components-dropdown {
  display: inline-block;
}

.components-dropdown__content .components-popover__content {
  padding: 8px;
}
.components-dropdown__content .components-popover__content:has(.components-menu-group) {
  padding: 0;
}
.components-dropdown__content .components-popover__content:has(.components-menu-group) .components-dropdown-menu__menu > .components-menu-item__button,
.components-dropdown__content .components-popover__content:has(.components-menu-group) > .components-menu-item__button {
  margin: 8px;
  width: auto;
}
.components-dropdown__content [role=menuitem] {
  white-space: nowrap;
}
.components-dropdown__content .components-menu-group {
  padding: 8px;
}
.components-dropdown__content .components-menu-group + .components-menu-group {
  border-top: 1px solid #ccc;
  padding: 8px;
}
.components-dropdown__content.is-alternate .components-menu-group + .components-menu-group {
  border-color: #1e1e1e;
}

.components-dropdown-menu__toggle {
  vertical-align: top;
}

.components-dropdown-menu__menu {
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 13px;
  line-height: 1.4;
}
.components-dropdown-menu__menu .components-dropdown-menu__menu-item,
.components-dropdown-menu__menu .components-menu-item {
  width: 100%;
  padding: 6px;
  outline: none;
  cursor: pointer;
  white-space: nowrap;
}
.components-dropdown-menu__menu .components-dropdown-menu__menu-item.has-separator,
.components-dropdown-menu__menu .components-menu-item.has-separator {
  margin-top: 6px;
  position: relative;
  overflow: visible;
}
.components-dropdown-menu__menu .components-dropdown-menu__menu-item.has-separator::before,
.components-dropdown-menu__menu .components-menu-item.has-separator::before {
  display: block;
  content: "";
  box-sizing: content-box;
  background-color: #ddd;
  position: absolute;
  top: -3px;
  left: 0;
  right: 0;
  height: 1px;
}
.components-dropdown-menu__menu .components-dropdown-menu__menu-item.is-active svg,
.components-dropdown-menu__menu .components-dropdown-menu__menu-item.is-active .dashicon,
.components-dropdown-menu__menu .components-menu-item.is-active svg,
.components-dropdown-menu__menu .components-menu-item.is-active .dashicon {
  color: #fff;
  background: #1e1e1e;
  box-shadow: 0 0 0 1px #1e1e1e;
  border-radius: 1px;
}
.components-dropdown-menu__menu .components-dropdown-menu__menu-item.is-icon-only,
.components-dropdown-menu__menu .components-menu-item.is-icon-only {
  width: auto;
}
.components-dropdown-menu__menu .components-menu-item__button,
.components-dropdown-menu__menu .components-menu-item__button.components-button {
  min-height: 40px;
  height: auto;
  text-align: left;
  padding-left: 8px;
  padding-right: 8px;
}

.components-duotone-picker__color-indicator::before {
  background: transparent;
}

.components-duotone-picker__color-indicator > .components-button {
  background: linear-gradient(-45deg, transparent 48%, #ddd 48%, #ddd 52%, transparent 52%);
  color: transparent;
}
.components-duotone-picker__color-indicator > .components-button.is-pressed:hover:not(:disabled) {
  background: linear-gradient(-45deg, transparent 48%, #ddd 48%, #ddd 52%, transparent 52%);
  color: transparent;
}
.components-duotone-picker__color-indicator > .components-button:hover:not(:disabled):not([aria-disabled=true]) {
  color: transparent;
}
.components-duotone-picker__color-indicator > .components-button:not([aria-disabled=true]):active {
  color: transparent;
}

.components-color-list-picker,
.components-color-list-picker__swatch-button {
  width: 100%;
}

.components-color-list-picker__color-picker {
  margin: 8px 0;
}

.components-color-list-picker__swatch-color {
  margin: 2px;
}

.components-external-link {
  text-decoration: none;
}

.components-external-link__contents {
  text-decoration: underline;
}

.components-external-link__icon {
  margin-left: 0.5ch;
  font-weight: 400;
}

.components-form-toggle {
  position: relative;
  display: inline-block;
  height: 16px;
}
.components-form-toggle .components-form-toggle__track {
  position: relative;
  content: "";
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
  background-color: #fff;
  border: 1px solid #949494;
  width: 32px;
  height: 16px;
  border-radius: 8px;
  overflow: hidden;
}
@media not (prefers-reduced-motion) {
  .components-form-toggle .components-form-toggle__track {
    transition: 0.2s background-color ease, 0.2s border-color ease;
  }
}
.components-form-toggle .components-form-toggle__track::after {
  content: "";
  position: absolute;
  inset: 0;
  box-sizing: border-box;
  border-top: 16px solid transparent;
  opacity: 0;
}
@media not (prefers-reduced-motion) {
  .components-form-toggle .components-form-toggle__track::after {
    transition: 0.2s opacity ease;
  }
}
.components-form-toggle .components-form-toggle__thumb {
  display: block;
  position: absolute;
  box-sizing: border-box;
  top: 2px;
  left: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #1e1e1e;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.02), 0 3px 3px rgba(0, 0, 0, 0.02), 0 4px 4px rgba(0, 0, 0, 0.01);
  border: 6px solid transparent;
}
@media not (prefers-reduced-motion) {
  .components-form-toggle .components-form-toggle__thumb {
    transition: 0.2s transform ease, 0.2s background-color ease-out;
  }
}
.components-form-toggle.is-checked .components-form-toggle__track {
  background-color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  border-color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
}
.components-form-toggle.is-checked .components-form-toggle__track::after {
  opacity: 1;
}
.components-form-toggle .components-form-toggle__input:focus + .components-form-toggle__track {
  box-shadow: 0 0 0 var(--wp-admin-border-width-focus) #fff, 0 0 0 calc(2 * var(--wp-admin-border-width-focus)) var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.components-form-toggle.is-checked .components-form-toggle__thumb {
  background-color: #fff;
  border-width: 0;
  transform: translateX(16px);
}
.components-form-toggle.is-disabled, .components-disabled .components-form-toggle {
  opacity: 0.3;
}

.components-form-toggle input.components-form-toggle__input[type=checkbox] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
  border: none;
}
.components-form-toggle input.components-form-toggle__input[type=checkbox]:checked {
  background: none;
}
.components-form-toggle input.components-form-toggle__input[type=checkbox]::before {
  content: "";
}
.components-form-toggle input.components-form-toggle__input[type=checkbox]:not(:disabled, [aria-disabled=true]) {
  cursor: pointer;
}

.components-form-token-field__input-container {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  padding: 6px 8px;
  /* Fonts smaller than 16px causes mobile safari to zoom. */
  font-size: 16px;
  /* Override core line-height. To be reviewed. */
  line-height: normal;
  box-shadow: 0 0 0 transparent;
  border-radius: 2px;
  border: 1px solid #949494;
  width: 100%;
  padding: 0;
  cursor: text;
}
@media not (prefers-reduced-motion) {
  .components-form-token-field__input-container {
    transition: box-shadow 0.1s linear;
  }
}
@media (min-width: 600px) {
  .components-form-token-field__input-container {
    font-size: 13px;
    /* Override core line-height. To be reviewed. */
    line-height: normal;
  }
}
.components-form-token-field__input-container:focus {
  border-color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  box-shadow: 0 0 0 0.5px var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  outline: 2px solid transparent;
}
.components-form-token-field__input-container::-webkit-input-placeholder {
  color: rgba(30, 30, 30, 0.62);
}
.components-form-token-field__input-container::-moz-placeholder {
  color: rgba(30, 30, 30, 0.62);
}
.components-form-token-field__input-container:-ms-input-placeholder {
  color: rgba(30, 30, 30, 0.62);
}
.components-form-token-field__input-container.is-disabled {
  background: #ddd;
  border-color: #ddd;
}
.components-form-token-field__input-container.is-active {
  border-color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  box-shadow: 0 0 0 0.5px var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  outline: 2px solid transparent;
}
.components-form-token-field__input-container input[type=text].components-form-token-field__input {
  display: inline-block;
  flex: 1;
  font-family: inherit;
  font-size: 16px;
  width: 100%;
  max-width: 100%;
  margin-left: 4px;
  padding: 0;
  min-height: 24px;
  min-width: 50px;
  background: inherit;
  border: 0;
  color: var(--wp-components-color-foreground, #1e1e1e);
  box-shadow: none;
}
@media (min-width: 600px) {
  .components-form-token-field__input-container input[type=text].components-form-token-field__input {
    font-size: 13px;
  }
}
.components-form-token-field__input-container input[type=text].components-form-token-field__input:focus, .components-form-token-field.is-active .components-form-token-field__input-container input[type=text].components-form-token-field__input {
  outline: none;
  box-shadow: none;
}
.components-form-token-field__input-container .components-form-token-field__token + input[type=text].components-form-token-field__input {
  width: auto;
}

.components-form-token-field__token {
  font-size: 13px;
  display: flex;
  color: #1e1e1e;
  max-width: 100%;
}
.components-form-token-field__token.is-success .components-form-token-field__token-text,
.components-form-token-field__token.is-success .components-form-token-field__remove-token {
  background: #4ab866;
}
.components-form-token-field__token.is-error .components-form-token-field__token-text,
.components-form-token-field__token.is-error .components-form-token-field__remove-token {
  background: #cc1818;
}
.components-form-token-field__token.is-validating .components-form-token-field__token-text,
.components-form-token-field__token.is-validating .components-form-token-field__remove-token {
  color: #757575;
}
.components-form-token-field__token.is-borderless {
  position: relative;
  padding: 0 24px 0 0;
}
.components-form-token-field__token.is-borderless .components-form-token-field__token-text {
  background: transparent;
}
.components-form-token-field__token.is-borderless:not(.is-disabled) .components-form-token-field__token-text {
  color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
}
.components-form-token-field__token.is-borderless .components-form-token-field__remove-token {
  background: transparent;
  color: #757575;
  position: absolute;
  top: 1px;
  right: 0;
}
.components-form-token-field__token.is-borderless.is-success .components-form-token-field__token-text {
  color: #4ab866;
}
.components-form-token-field__token.is-borderless.is-error .components-form-token-field__token-text {
  color: #cc1818;
  padding: 0 4px 0 6px;
}
.components-form-token-field__token.is-borderless.is-validating .components-form-token-field__token-text {
  color: #1e1e1e;
}

.components-form-token-field__token-text,
.components-form-token-field__remove-token.components-button {
  display: inline-block;
  height: auto;
  background: #ddd;
  min-width: unset;
}
@media not (prefers-reduced-motion) {
  .components-form-token-field__token-text,
.components-form-token-field__remove-token.components-button {
    transition: all 0.2s cubic-bezier(0.4, 1, 0.4, 1);
  }
}

.components-form-token-field__token-text {
  border-radius: 1px 0 0 1px;
  padding: 0 0 0 8px;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.components-form-token-field__remove-token.components-button {
  border-radius: 0 1px 1px 0;
  color: #1e1e1e;
  line-height: 10px;
  overflow: initial;
}
.components-form-token-field__remove-token.components-button:hover:not(:disabled) {
  color: #1e1e1e;
}

.components-form-token-field__suggestions-list {
  flex: 1 0 100%;
  min-width: 100%;
  max-height: 128px;
  overflow-y: auto;
  list-style: none;
  box-shadow: inset 0 1px 0 0 #949494;
  margin: 0;
  padding: 0;
}
@media not (prefers-reduced-motion) {
  .components-form-token-field__suggestions-list {
    transition: all 0.15s ease-in-out;
  }
}

.components-form-token-field__suggestion {
  color: var(--wp-components-color-foreground, #1e1e1e);
  display: block;
  font-size: 13px;
  padding: 8px 12px;
  min-height: 32px;
  margin: 0;
  box-sizing: border-box;
}
.components-form-token-field__suggestion.is-selected {
  background: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  color: var(--wp-components-color-foreground-inverted, #fff);
}
.components-form-token-field__suggestion[aria-disabled=true] {
  pointer-events: none;
  color: #949494;
}
.components-form-token-field__suggestion[aria-disabled=true].is-selected {
  background: color-mix(in srgb, var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9)) 4%, transparent);
}
.components-form-token-field__suggestion:not(.is-empty) {
  cursor: pointer;
}

@media (min-width: 600px) {
  .components-guide {
    width: 600px;
  }
}
.components-guide .components-modal__content {
  padding: 0;
  margin-top: 0;
}
.components-guide .components-modal__content::before {
  content: none;
}
.components-guide .components-modal__header {
  border-bottom: none;
  padding: 0;
  position: sticky;
  height: 64px;
}
.components-guide .components-modal__header .components-button {
  align-self: flex-start;
  margin: 8px 8px 0 0;
  position: static;
}
.components-guide .components-modal__header .components-button:hover svg {
  fill: #fff;
}
.components-guide .components-guide__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -64px;
  min-height: 100%;
}
.components-guide .components-guide__page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}
@media (min-width: 600px) {
  .components-guide .components-guide__page {
    min-height: 300px;
  }
}
.components-guide .components-guide__footer {
  align-content: center;
  display: flex;
  height: 36px;
  justify-content: center;
  margin: 0 0 24px 0;
  padding: 0 32px;
  position: relative;
  width: 100%;
}
.components-guide .components-guide__page-control {
  margin: 0;
  text-align: center;
}
.components-guide .components-guide__page-control li {
  display: inline-block;
  margin: 0;
}
.components-guide .components-guide__page-control .components-button {
  margin: -6px 0;
  color: #e0e0e0;
}
.components-guide .components-guide__page-control li[aria-current=step] .components-button {
  color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
}

.components-modal__frame.components-guide {
  border: none;
  min-width: 312px;
  max-height: 575px;
}
@media (max-width: 600px) {
  .components-modal__frame.components-guide {
    margin: auto;
    max-width: calc(100vw - 16px * 2);
  }
}

.components-button.components-guide__back-button, .components-button.components-guide__forward-button, .components-button.components-guide__finish-button {
  position: absolute;
}
.components-button.components-guide__back-button {
  left: 32px;
}
.components-button.components-guide__forward-button, .components-button.components-guide__finish-button {
  right: 32px;
}

[role=region] {
  position: relative;
}
[role=region].interface-interface-skeleton__content:focus-visible::after {
  content: "";
  position: absolute;
  pointer-events: none;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  outline-color: var(--wp-admin-theme-color);
  outline-style: solid;
  outline-width: calc(2 * (var(--wp-admin-border-width-focus) / var(--wp-block-editor-iframe-zoom-out-scale, 1)));
  outline-offset: calc(2 * ((-1 * var(--wp-admin-border-width-focus) ) / var(--wp-block-editor-iframe-zoom-out-scale, 1)));
  z-index: 1000000;
}

.is-focusing-regions [role=region]:focus::after {
  content: "";
  position: absolute;
  pointer-events: none;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  outline-color: var(--wp-admin-theme-color);
  outline-style: solid;
  outline-width: calc(2 * (var(--wp-admin-border-width-focus) / var(--wp-block-editor-iframe-zoom-out-scale, 1)));
  outline-offset: calc(2 * ((-1 * var(--wp-admin-border-width-focus) ) / var(--wp-block-editor-iframe-zoom-out-scale, 1)));
  z-index: 1000000;
}
.is-focusing-regions.is-distraction-free .interface-interface-skeleton__header .edit-post-header,
.is-focusing-regions .interface-interface-skeleton__sidebar .editor-layout__toggle-sidebar-panel,
.is-focusing-regions .interface-interface-skeleton__actions .editor-layout__toggle-publish-panel,
.is-focusing-regions .interface-interface-skeleton__actions .editor-layout__toggle-entities-saved-states-panel,
.is-focusing-regions .editor-post-publish-panel {
  outline-color: var(--wp-admin-theme-color);
  outline-style: solid;
  outline-width: calc(2 * (var(--wp-admin-border-width-focus) / var(--wp-block-editor-iframe-zoom-out-scale, 1)));
  outline-offset: calc(2 * ((-1 * var(--wp-admin-border-width-focus) ) / var(--wp-block-editor-iframe-zoom-out-scale, 1)));
}

.components-menu-group + .components-menu-group {
  padding-top: 8px;
  border-top: 1px solid #1e1e1e;
}
.components-menu-group + .components-menu-group.has-hidden-separator {
  border-top: none;
  margin-top: 0;
  padding-top: 0;
}

.components-menu-group:has(> div:empty) {
  display: none;
}

.components-menu-group__label {
  padding: 0 8px;
  margin-top: 4px;
  margin-bottom: 12px;
  color: #757575;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 500;
  white-space: nowrap;
}

.components-menu-item__button,
.components-menu-item__button.components-button {
  width: 100%;
}
.components-menu-item__button[role=menuitemradio] .components-menu-item__item:only-child, .components-menu-item__button[role=menuitemcheckbox] .components-menu-item__item:only-child,
.components-menu-item__button.components-button[role=menuitemradio] .components-menu-item__item:only-child,
.components-menu-item__button.components-button[role=menuitemcheckbox] .components-menu-item__item:only-child {
  padding-right: 48px;
  box-sizing: initial;
}
.components-menu-item__button .components-menu-items__item-icon,
.components-menu-item__button.components-button .components-menu-items__item-icon {
  display: inline-block;
  flex: 0 0 auto;
}
.components-menu-item__button .components-menu-items__item-icon.has-icon-right,
.components-menu-item__button.components-button .components-menu-items__item-icon.has-icon-right {
  margin-right: -2px;
  margin-left: 24px;
}
.components-menu-item__button .components-menu-item__shortcut + .components-menu-items__item-icon.has-icon-right,
.components-menu-item__button.components-button .components-menu-item__shortcut + .components-menu-items__item-icon.has-icon-right {
  margin-left: 8px;
}
.components-menu-item__button .block-editor-block-icon,
.components-menu-item__button.components-button .block-editor-block-icon {
  margin-left: -2px;
  margin-right: 8px;
}
.components-menu-item__button.is-primary,
.components-menu-item__button.components-button.is-primary {
  justify-content: center;
}
.components-menu-item__button.is-primary .components-menu-item__item,
.components-menu-item__button.components-button.is-primary .components-menu-item__item {
  margin-right: 0;
}
.components-menu-item__button:disabled.is-tertiary, .components-menu-item__button[aria-disabled=true].is-tertiary,
.components-menu-item__button.components-button:disabled.is-tertiary,
.components-menu-item__button.components-button[aria-disabled=true].is-tertiary {
  background: none;
  color: var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #2145e6));
  opacity: 0.3;
}

.components-menu-item__info-wrapper {
  display: flex;
  flex-direction: column;
  margin-right: auto;
}

.components-menu-item__info {
  margin-top: 4px;
  font-size: 12px;
  color: #757575;
  white-space: normal;
}

.components-menu-item__item {
  white-space: nowrap;
  min-width: 160px;
  margin-right: auto;
  display: inline-flex;
  align-items: center;
}

.components-menu-item__shortcut {
  align-self: center;
  margin-right: 0;
  margin-left: auto;
  padding-left: 24px;
  color: currentColor;
  display: none;
}
@media (min-width: 480px) {
  .components-menu-item__shortcut {
    display: inline;
  }
}

.components-menu-items-choice,
.components-menu-items-choice.components-button {
  min-height: 40px;
  height: auto;
}
.components-menu-items-choice svg,
.components-menu-items-choice.components-button svg {
  margin-right: 12px;
}
.components-menu-items-choice.has-icon,
.components-menu-items-choice.components-button.has-icon {
  padding-left: 12px;
}

.components-modal__screen-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 100000;
  display: flex;
}
@keyframes __wp-base-styles-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media not (prefers-reduced-motion) {
  .components-modal__screen-overlay {
    animation: __wp-base-styles-fade-in 0.08s linear 0s;
    animation-fill-mode: forwards;
  }
}
@keyframes __wp-base-styles-fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@media not (prefers-reduced-motion) {
  .components-modal__screen-overlay.is-animating-out {
    animation: __wp-base-styles-fade-out 0.08s linear 80ms;
    animation-fill-mode: forwards;
  }
}

.components-modal__frame {
  box-sizing: border-box;
  margin: 40px 0 0 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08), 0 15px 27px rgba(0, 0, 0, 0.07), 0 30px 36px rgba(0, 0, 0, 0.04), 0 50px 43px rgba(0, 0, 0, 0.02);
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  display: flex;
  animation-name: components-modal__appear-animation;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.29, 0, 0, 1);
}
.components-modal__frame *,
.components-modal__frame *::before,
.components-modal__frame *::after {
  box-sizing: inherit;
}
@media not (prefers-reduced-motion) {
  .components-modal__frame {
    animation-duration: var(--modal-frame-animation-duration);
  }
}
.components-modal__screen-overlay.is-animating-out .components-modal__frame {
  animation-name: components-modal__disappear-animation;
  animation-timing-function: cubic-bezier(1, 0, 0.2, 1);
}
@media (min-width: 600px) {
  .components-modal__frame {
    border-radius: 8px;
    margin: auto;
    width: auto;
    min-width: 350px;
    max-width: calc(100% - 32px);
    max-height: calc(100% - 128px);
  }
}
@media (min-width: 600px) and (min-width: 600px) {
  .components-modal__frame.is-full-screen {
    width: calc(100% - 32px);
    height: calc(100% - 32px);
    max-height: none;
  }
}
@media (min-width: 600px) and (min-width: 782px) {
  .components-modal__frame.is-full-screen {
    width: calc(100% - 80px);
    height: calc(100% - 80px);
    max-width: none;
  }
}
@media (min-width: 600px) {
  .components-modal__frame.has-size-small, .components-modal__frame.has-size-medium, .components-modal__frame.has-size-large {
    width: 100%;
  }
}
@media (min-width: 600px) {
  .components-modal__frame.has-size-small {
    max-width: 384px;
  }
}
@media (min-width: 600px) {
  .components-modal__frame.has-size-medium {
    max-width: 512px;
  }
}
@media (min-width: 600px) {
  .components-modal__frame.has-size-large {
    max-width: 840px;
  }
}
@media (min-width: 960px) {
  .components-modal__frame {
    max-height: 70%;
  }
}

@keyframes components-modal__appear-animation {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes components-modal__disappear-animation {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9);
  }
}
.components-modal__header {
  box-sizing: border-box;
  border-bottom: 1px solid transparent;
  padding: 24px 32px 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  width: 100%;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
}
.components-modal__header .components-modal__header-heading {
  font-size: 1.2rem;
  font-weight: 600;
}
.components-modal__header h1 {
  line-height: 1;
  margin: 0;
}
.components-modal__content.has-scrolled-content:not(.hide-header) .components-modal__header {
  border-bottom-color: #ddd;
}
.components-modal__header + p {
  margin-top: 0;
}

.components-modal__header-heading-container {
  align-items: center;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: left;
}

.components-modal__header-icon-container {
  display: inline-block;
}
.components-modal__header-icon-container svg {
  max-width: 36px;
  max-height: 36px;
  padding: 8px;
}

.components-modal__content {
  flex: 1;
  margin-top: 72px;
  padding: 4px 32px 32px;
  overflow: auto;
}
.components-modal__content.hide-header {
  margin-top: 0;
  padding-top: 32px;
}
.components-modal__content.is-scrollable:focus-visible {
  box-shadow: inset 0 0 0 var(--wp-admin-border-width-focus) var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  outline: 2px solid transparent;
  outline-offset: -2px;
}

.components-notice {
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 13px;
  background-color: #fff;
  border-left: 4px solid var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  padding: 8px 12px;
  align-items: center;
  color: #1e1e1e;
}
.components-notice.is-dismissible {
  position: relative;
}
.components-notice.is-success {
  border-left-color: #4ab866;
  background-color: #eff9f1;
}
.components-notice.is-warning {
  border-left-color: #f0b849;
  background-color: #fef8ee;
}
.components-notice.is-error {
  border-left-color: #cc1818;
  background-color: #f4a2a2;
}

.components-notice__content {
  flex-grow: 1;
  margin: 4px 25px 4px 0;
}

.components-notice__actions {
  display: flex;
  flex-wrap: wrap;
}

.components-notice__action.components-button {
  margin-right: 8px;
}
.components-notice__action.components-button, .components-notice__action.components-button.is-link {
  margin-left: 12px;
}
.components-notice__action.components-button.is-secondary {
  vertical-align: initial;
}

.components-notice__dismiss {
  color: #757575;
  align-self: flex-start;
  flex-shrink: 0;
}
.components-notice__dismiss:not(:disabled):not([aria-disabled=true]):not(.is-secondary):hover, .components-notice__dismiss:not(:disabled):not([aria-disabled=true]):not(.is-secondary):active, .components-notice__dismiss:not(:disabled):not([aria-disabled=true]):focus {
  color: #1e1e1e;
  background-color: transparent;
}
.components-notice__dismiss:not(:disabled):not([aria-disabled=true]):not(.is-secondary):hover {
  box-shadow: none;
}

.components-notice-list {
  max-width: 100vw;
  box-sizing: border-box;
}
.components-notice-list .components-notice__content {
  margin-top: 12px;
  margin-bottom: 12px;
  line-height: 2;
}
.components-notice-list .components-notice__action.components-button {
  display: block;
  margin-left: 0;
  margin-top: 8px;
}

.components-panel {
  background: #fff;
  border: 1px solid #e0e0e0;
}
.components-panel > .components-panel__header:first-child,
.components-panel > .components-panel__body:first-child {
  margin-top: -1px;
}
.components-panel > .components-panel__header:last-child,
.components-panel > .components-panel__body:last-child {
  border-bottom-width: 0;
}

.components-panel + .components-panel {
  margin-top: -1px;
}

.components-panel__body {
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}
.components-panel__body h3 {
  margin: 0 0 0.5em;
}
.components-panel__body.is-opened {
  padding: 16px;
}

.components-panel__header {
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid #ddd;
  box-sizing: content-box;
  height: 47px;
}
.components-panel__header h2 {
  margin: 0;
  font-size: inherit;
  color: inherit;
}

.components-panel__body + .components-panel__body,
.components-panel__body + .components-panel__header,
.components-panel__header + .components-panel__body,
.components-panel__header + .components-panel__header {
  margin-top: -1px;
}

.components-panel__body > .components-panel__body-title {
  display: block;
  padding: 0;
  font-size: inherit;
  margin-top: 0;
  margin-bottom: 0;
}
@media not (prefers-reduced-motion) {
  .components-panel__body > .components-panel__body-title {
    transition: 0.1s background ease-in-out;
  }
}

.components-panel__body.is-opened > .components-panel__body-title {
  margin: -16px;
  margin-bottom: 5px;
}

.components-panel__body > .components-panel__body-title:hover {
  background: #f0f0f0;
  border: none;
}

.components-panel__body-toggle.components-button {
  position: relative;
  padding: 16px 48px 16px 16px;
  outline: none;
  width: 100%;
  font-weight: 500;
  text-align: left;
  color: #1e1e1e;
  border: none;
  box-shadow: none;
  height: auto;
  /* rtl:begin:ignore */
  /* rtl:end:ignore */
}
@media not (prefers-reduced-motion) {
  .components-panel__body-toggle.components-button {
    transition: 0.1s background ease-in-out;
  }
}
.components-panel__body-toggle.components-button:focus {
  box-shadow: inset 0 0 0 var(--wp-admin-border-width-focus) var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  border-radius: 0;
}
.components-panel__body-toggle.components-button .components-panel__arrow {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #1e1e1e;
  fill: currentColor;
}
@media not (prefers-reduced-motion) {
  .components-panel__body-toggle.components-button .components-panel__arrow {
    transition: 0.1s color ease-in-out;
  }
}
body.rtl .components-panel__body-toggle.components-button .dashicons-arrow-right {
  transform: scaleX(-1);
  -ms-filter: fliph;
  filter: FlipH;
  margin-top: -10px;
}

.components-panel__icon {
  color: #757575;
  margin: -2px 0 -2px 6px;
}

.components-panel__body-toggle-icon {
  margin-right: -5px;
}

.components-panel__color-title {
  float: left;
  height: 19px;
}

.components-panel__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  min-height: 36px;
}
.components-panel__row select {
  min-width: 0;
}
.components-panel__row label {
  margin-right: 12px;
  flex-shrink: 0;
  max-width: 75%;
}
.components-panel__row:empty, .components-panel__row:first-of-type {
  margin-top: 0;
}

.components-panel .circle-picker {
  padding-bottom: 20px;
}

.components-placeholder.components-placeholder {
  font-size: 13px;
  box-sizing: border-box;
  position: relative;
  padding: 24px;
  width: 100%;
  text-align: left;
  margin: 0;
  color: #1e1e1e;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  -moz-font-smoothing: subpixel-antialiased;
  -webkit-font-smoothing: subpixel-antialiased;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: inset 0 0 0 1px #1e1e1e;
  outline: 1px solid transparent;
}

.components-placeholder__error,
.components-placeholder__instructions,
.components-placeholder__label,
.components-placeholder__fieldset {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 13px;
  letter-spacing: initial;
  line-height: initial;
  text-transform: none;
  font-weight: normal;
}

.components-placeholder__label {
  font-weight: 600;
  align-items: center;
  display: flex;
}
.components-placeholder__label > svg,
.components-placeholder__label .dashicon,
.components-placeholder__label .block-editor-block-icon {
  margin-right: 4px;
  fill: currentColor;
}
@media (forced-colors: active) {
  .components-placeholder__label > svg,
.components-placeholder__label .dashicon,
.components-placeholder__label .block-editor-block-icon {
    fill: CanvasText;
  }
}
.components-placeholder__label:empty {
  display: none;
}

.components-placeholder__fieldset,
.components-placeholder__fieldset form {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: flex-start;
}
.components-placeholder__fieldset p,
.components-placeholder__fieldset form p {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 13px;
}

.components-placeholder__fieldset.is-column-layout,
.components-placeholder__fieldset.is-column-layout form {
  flex-direction: column;
}

.components-placeholder__input[type=url] {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  padding: 6px 8px;
  /* Fonts smaller than 16px causes mobile safari to zoom. */
  font-size: 16px;
  /* Override core line-height. To be reviewed. */
  line-height: normal;
  box-shadow: 0 0 0 transparent;
  border-radius: 2px;
  border: 1px solid #949494;
  flex: 1 1 auto;
}
@media not (prefers-reduced-motion) {
  .components-placeholder__input[type=url] {
    transition: box-shadow 0.1s linear;
  }
}
@media (min-width: 600px) {
  .components-placeholder__input[type=url] {
    font-size: 13px;
    /* Override core line-height. To be reviewed. */
    line-height: normal;
  }
}
.components-placeholder__input[type=url]:focus {
  border-color: var(--wp-admin-theme-color);
  box-shadow: 0 0 0 0.5px var(--wp-admin-theme-color);
  outline: 2px solid transparent;
}
.components-placeholder__input[type=url]::-webkit-input-placeholder {
  color: rgba(30, 30, 30, 0.62);
}
.components-placeholder__input[type=url]::-moz-placeholder {
  color: rgba(30, 30, 30, 0.62);
}
.components-placeholder__input[type=url]:-ms-input-placeholder {
  color: rgba(30, 30, 30, 0.62);
}

.components-placeholder__error {
  width: 100%;
  gap: 8px;
}

.components-placeholder__fieldset .components-button:not(.is-link) ~ .components-button.is-link {
  margin-left: 10px;
  margin-right: 10px;
}
.components-placeholder__fieldset .components-button:not(.is-link) ~ .components-button.is-link:last-child {
  margin-right: 0;
}

.components-placeholder.is-medium .components-placeholder__instructions, .components-placeholder.is-small .components-placeholder__instructions {
  display: none;
}
.components-placeholder.is-medium .components-placeholder__fieldset,
.components-placeholder.is-medium .components-placeholder__fieldset form, .components-placeholder.is-small .components-placeholder__fieldset,
.components-placeholder.is-small .components-placeholder__fieldset form {
  flex-direction: column;
}
.components-placeholder.is-medium .components-placeholder__fieldset > *,
.components-placeholder.is-medium .components-button, .components-placeholder.is-small .components-placeholder__fieldset > *,
.components-placeholder.is-small .components-button {
  width: 100%;
  justify-content: center;
}
.components-placeholder.is-small {
  padding: 16px;
}

/**
 * Dashed style placeholders
 */
.components-placeholder.has-illustration {
  color: inherit;
  display: flex;
  box-shadow: none;
  border-radius: 0;
  backdrop-filter: blur(100px);
  background-color: transparent;
  backface-visibility: hidden;
  overflow: hidden;
}
.is-dark-theme .components-placeholder.has-illustration {
  background-color: rgba(0, 0, 0, 0.1);
}
.components-placeholder.has-illustration .components-placeholder__fieldset {
  margin-left: 0;
  margin-right: 0;
}
.components-placeholder.has-illustration .components-placeholder__label,
.components-placeholder.has-illustration .components-placeholder__instructions,
.components-placeholder.has-illustration .components-button {
  opacity: 0;
  pointer-events: none;
}
@media not (prefers-reduced-motion) {
  .components-placeholder.has-illustration .components-placeholder__label,
.components-placeholder.has-illustration .components-placeholder__instructions,
.components-placeholder.has-illustration .components-button {
    transition: opacity 0.1s linear;
  }
}
.is-selected > .components-placeholder.has-illustration .components-placeholder__label,
.is-selected > .components-placeholder.has-illustration .components-placeholder__instructions,
.is-selected > .components-placeholder.has-illustration .components-button {
  opacity: 1;
  pointer-events: auto;
}
.components-placeholder.has-illustration::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  background: currentColor;
  opacity: 0.1;
}
.is-selected .components-placeholder.has-illustration {
  overflow: auto;
}

.components-placeholder__preview {
  display: flex;
  justify-content: center;
}

.components-placeholder__illustration {
  box-sizing: content-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  stroke: currentColor;
  opacity: 0.25;
}

.components-popover {
  box-sizing: border-box;
  z-index: 1000000;
  will-change: transform;
}
.components-popover *,
.components-popover *::before,
.components-popover *::after {
  box-sizing: inherit;
}
.components-popover.is-expanded {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000000 !important;
}

.components-popover__content {
  background: #fff;
  box-shadow: 0 0 0 1px #ccc, 0 2px 3px rgba(0, 0, 0, 0.05), 0 4px 5px rgba(0, 0, 0, 0.04), 0 12px 12px rgba(0, 0, 0, 0.03), 0 16px 16px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  box-sizing: border-box;
  width: min-content;
}
.is-alternate .components-popover__content {
  box-shadow: 0 0 0 1px #1e1e1e;
  border-radius: 2px;
}
.is-unstyled .components-popover__content {
  background: none;
  border-radius: 0;
  box-shadow: none;
}
.components-popover.is-expanded .components-popover__content {
  position: static;
  height: calc(100% - 48px);
  overflow-y: visible;
  width: auto;
  box-shadow: 0 -1px 0 0 #ccc;
}
.components-popover.is-expanded.is-alternate .components-popover__content {
  box-shadow: 0 -1px 0 #1e1e1e;
}

.components-popover__header {
  align-items: center;
  background: #fff;
  display: flex;
  height: 48px;
  justify-content: space-between;
  padding: 0 8px 0 16px;
}

.components-popover__header-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.components-popover__close.components-button {
  z-index: 5;
}

.components-popover__arrow {
  position: absolute;
  width: 14px;
  height: 14px;
  pointer-events: none;
  display: flex;
}
.components-popover__arrow::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 1px;
  height: 2px;
  right: 1px;
  background-color: #fff;
}
.components-popover__arrow.is-top {
  bottom: -14px !important;
  transform: rotate(0);
}
.components-popover__arrow.is-right {
  /*rtl:begin:ignore*/
  left: -14px !important;
  transform: rotate(90deg);
}
.components-popover__arrow.is-bottom {
  top: -14px !important;
  transform: rotate(180deg);
}
.components-popover__arrow.is-left {
  /*rtl:begin:ignore*/
  right: -14px !important;
  transform: rotate(-90deg);
  /*rtl:end:ignore*/
}

.components-popover__triangle {
  display: block;
  flex: 1;
}

.components-popover__triangle-bg {
  fill: #fff;
}

.components-popover__triangle-border {
  fill: transparent;
  stroke-width: 1px;
  stroke: #ccc;
}
.is-alternate .components-popover__triangle-border {
  stroke: #1e1e1e;
}

.components-radio-control {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 13px;
}

.components-radio-control__group-wrapper.has-help {
  margin-block-end: 12px;
}

.components-radio-control__option {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto minmax(0, max-content);
  column-gap: 8px;
  align-items: center;
}

.components-radio-control__input[type=radio] {
  grid-column: 1;
  grid-row: 1;
  border: 1px solid #1e1e1e;
  margin-right: 12px;
  transition: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  min-width: 24px;
  max-width: 24px;
  position: relative;
  display: inline-flex;
  margin: 0;
  padding: 0;
  appearance: none;
  cursor: pointer;
}
@media not (prefers-reduced-motion) {
  .components-radio-control__input[type=radio] {
    transition: box-shadow 0.1s linear;
  }
}
@media (min-width: 600px) {
  .components-radio-control__input[type=radio] {
    height: 16px;
    width: 16px;
    min-width: 16px;
    max-width: 16px;
  }
}
.components-radio-control__input[type=radio]:checked::before {
  box-sizing: inherit;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  background-color: #fff;
  border: 4px solid #fff;
}
@media (min-width: 600px) {
  .components-radio-control__input[type=radio]:checked::before {
    width: 8px;
    height: 8px;
  }
}
.components-radio-control__input[type=radio]:focus {
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--wp-admin-theme-color);
  outline: 2px solid transparent;
}
.components-radio-control__input[type=radio]:checked {
  background: var(--wp-admin-theme-color);
  border: none;
}
.components-radio-control__input[type=radio]:focus {
  box-shadow: 0 0 0 var(--wp-admin-border-width-focus) #fff, 0 0 0 calc(2 * var(--wp-admin-border-width-focus)) var(--wp-admin-theme-color);
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.components-radio-control__input[type=radio]:checked {
  background: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  border-color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
}
.components-radio-control__input[type=radio]:checked::before {
  content: "";
  border-radius: 50%;
}

.components-radio-control__label {
  grid-column: 2;
  grid-row: 1;
  cursor: pointer;
  line-height: 24px;
}
@media (min-width: 600px) {
  .components-radio-control__label {
    line-height: 16px;
  }
}

.components-radio-control__option-description {
  grid-column: 2;
  grid-row: 2;
  padding-block-start: 4px;
}
.components-radio-control__option-description.components-radio-control__option-description {
  margin-top: 0;
}

.components-resizable-box__handle {
  display: none;
  width: 23px;
  height: 23px;
  z-index: 2;
}
.components-resizable-box__container.has-show-handle .components-resizable-box__handle {
  display: block;
}
.components-resizable-box__handle > div {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
  outline: none;
}

.components-resizable-box__container > img {
  width: inherit;
}

.components-resizable-box__handle::after {
  display: block;
  content: "";
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #fff;
  cursor: inherit;
  position: absolute;
  top: calc(50% - 8px);
  right: calc(50% - 8px);
  box-shadow: inset 0 0 0 var(--wp-admin-border-width-focus) var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9)), 0 1px 1px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.02), 0 3px 3px rgba(0, 0, 0, 0.02), 0 4px 4px rgba(0, 0, 0, 0.01);
  outline: 2px solid transparent;
}

.components-resizable-box__side-handle::before {
  display: block;
  border-radius: 9999px;
  content: "";
  width: 3px;
  height: 3px;
  background: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  cursor: inherit;
  position: absolute;
  top: calc(50% - 1px);
  right: calc(50% - 1px);
  opacity: 0;
}
@media not (prefers-reduced-motion) {
  .components-resizable-box__side-handle::before {
    transition: transform 0.1s ease-in;
    will-change: transform;
  }
}

.components-resizable-box__side-handle {
  z-index: 2;
}

.components-resizable-box__corner-handle {
  z-index: 2;
}

.components-resizable-box__side-handle.components-resizable-box__handle-top,
.components-resizable-box__side-handle.components-resizable-box__handle-bottom,
.components-resizable-box__side-handle.components-resizable-box__handle-top::before,
.components-resizable-box__side-handle.components-resizable-box__handle-bottom::before {
  width: 100%;
  left: 0;
  border-left: 0;
  border-right: 0;
}

.components-resizable-box__side-handle.components-resizable-box__handle-left,
.components-resizable-box__side-handle.components-resizable-box__handle-right,
.components-resizable-box__side-handle.components-resizable-box__handle-left::before,
.components-resizable-box__side-handle.components-resizable-box__handle-right::before {
  height: 100%;
  top: 0;
  border-top: 0;
  border-bottom: 0;
}

@media not (prefers-reduced-motion) {
  .components-resizable-box__side-handle.components-resizable-box__handle-top:hover::before,
.components-resizable-box__side-handle.components-resizable-box__handle-bottom:hover::before,
.components-resizable-box__side-handle.components-resizable-box__handle-top:active::before,
.components-resizable-box__side-handle.components-resizable-box__handle-bottom:active::before {
    animation: components-resizable-box__top-bottom-animation 0.1s ease-out 0s;
    animation-fill-mode: forwards;
  }
}

@media not (prefers-reduced-motion) {
  .components-resizable-box__side-handle.components-resizable-box__handle-left:hover::before,
.components-resizable-box__side-handle.components-resizable-box__handle-right:hover::before,
.components-resizable-box__side-handle.components-resizable-box__handle-left:active::before,
.components-resizable-box__side-handle.components-resizable-box__handle-right:active::before {
    animation: components-resizable-box__left-right-animation 0.1s ease-out 0s;
    animation-fill-mode: forwards;
  }
}

/* This CSS is shown only to Safari, which has a bug with table-caption making it jumpy.
See https://bugs.webkit.org/show_bug.cgi?id=187903. */
@media not all and (min-resolution: 0.001dpcm) {
  @supports (-webkit-appearance: none) {
    .components-resizable-box__side-handle.components-resizable-box__handle-top:hover::before,
.components-resizable-box__side-handle.components-resizable-box__handle-bottom:hover::before,
.components-resizable-box__side-handle.components-resizable-box__handle-top:active::before,
.components-resizable-box__side-handle.components-resizable-box__handle-bottom:active::before {
      animation: none;
    }
    .components-resizable-box__side-handle.components-resizable-box__handle-left:hover::before,
.components-resizable-box__side-handle.components-resizable-box__handle-right:hover::before,
.components-resizable-box__side-handle.components-resizable-box__handle-left:active::before,
.components-resizable-box__side-handle.components-resizable-box__handle-right:active::before {
      animation: none;
    }
  }
}
@keyframes components-resizable-box__top-bottom-animation {
  from {
    transform: scaleX(0);
    opacity: 0;
  }
  to {
    transform: scaleX(1);
    opacity: 1;
  }
}
@keyframes components-resizable-box__left-right-animation {
  from {
    transform: scaleY(0);
    opacity: 0;
  }
  to {
    transform: scaleY(1);
    opacity: 1;
  }
}
/*!rtl:begin:ignore*/
.components-resizable-box__handle-right {
  right: calc(11.5px * -1);
}

.components-resizable-box__handle-left {
  left: calc(11.5px * -1);
}

.components-resizable-box__handle-top {
  top: calc(11.5px * -1);
}

.components-resizable-box__handle-bottom {
  bottom: calc(11.5px * -1);
}

/*!rtl:end:ignore*/
.components-responsive-wrapper {
  position: relative;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.components-responsive-wrapper__content {
  display: block;
  max-width: 100%;
  width: 100%;
}

.components-sandbox {
  overflow: hidden;
}

iframe.components-sandbox {
  width: 100%;
}

html.lockscroll,
body.lockscroll {
  overflow: hidden;
}

.components-select-control__input {
  outline: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
}

.components-snackbar {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 13px;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(16px) saturate(180%);
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 3px rgba(0, 0, 0, 0.04), 0 6px 6px rgba(0, 0, 0, 0.03), 0 8px 8px rgba(0, 0, 0, 0.02);
  color: #fff;
  padding: 12px 20px;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
  cursor: pointer;
  pointer-events: auto;
}
@media (min-width: 600px) {
  .components-snackbar {
    width: fit-content;
  }
}
.components-snackbar:focus {
  box-shadow: inset 0 0 0 1px #fff, 0 0 0 var(--wp-admin-border-width-focus) var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
}
.components-snackbar.components-snackbar-explicit-dismiss {
  cursor: default;
}
.components-snackbar .components-snackbar__content-with-icon {
  position: relative;
  padding-left: 24px;
}
.components-snackbar .components-snackbar__icon {
  position: absolute;
  left: -8px;
  top: calc((5.8px) / -2);
}
.components-snackbar .components-snackbar__dismiss-button {
  margin-left: 24px;
  cursor: pointer;
}

.components-snackbar__action.components-button,
.components-snackbar__action.components-external-link {
  margin-left: 32px;
  color: #fff;
  flex-shrink: 0;
}
.components-snackbar__action.components-button:focus,
.components-snackbar__action.components-external-link:focus {
  box-shadow: none;
  outline: 1px dotted #fff;
}
.components-snackbar__action.components-button:hover,
.components-snackbar__action.components-external-link:hover {
  text-decoration: none;
  color: currentColor;
}

.components-snackbar__content {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  line-height: 1.4;
}

.components-snackbar-list {
  position: absolute;
  z-index: 100000;
  width: 100%;
  box-sizing: border-box;
  pointer-events: none;
}

.components-snackbar-list__notice-container {
  position: relative;
  padding-top: 8px;
}

.components-tab-panel__tabs {
  display: flex;
  align-items: stretch;
  flex-direction: row;
}
.components-tab-panel__tabs[aria-orientation=vertical] {
  flex-direction: column;
}

.components-tab-panel__tabs-item {
  position: relative;
  border-radius: 0;
  height: 48px !important;
  background: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
  padding: 3px 16px;
  margin-left: 0;
  font-weight: 500;
}
.components-tab-panel__tabs-item:focus:not(:disabled) {
  position: relative;
  box-shadow: none;
  outline: none;
}
.components-tab-panel__tabs-item::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  background: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  height: calc(0 * var(--wp-admin-border-width-focus));
  border-radius: 0;
}
@media not (prefers-reduced-motion) {
  .components-tab-panel__tabs-item::after {
    transition: all 0.1s linear;
  }
}
.components-tab-panel__tabs-item.is-active::after {
  height: calc(1 * var(--wp-admin-border-width-focus));
  outline: 2px solid transparent;
  outline-offset: -1px;
}
.components-tab-panel__tabs-item::before {
  content: "";
  position: absolute;
  top: 12px;
  right: 12px;
  bottom: 12px;
  left: 12px;
  pointer-events: none;
  box-shadow: 0 0 0 0 transparent;
  border-radius: 2px;
}
@media not (prefers-reduced-motion) {
  .components-tab-panel__tabs-item::before {
    transition: all 0.1s linear;
  }
}
.components-tab-panel__tabs-item:focus-visible::before {
  box-shadow: 0 0 0 var(--wp-admin-border-width-focus) var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  outline: 2px solid transparent;
}

.components-tab-panel__tab-content:focus {
  box-shadow: none;
  outline: none;
}
.components-tab-panel__tab-content:focus-visible {
  box-shadow: 0 0 0 var(--wp-admin-border-width-focus) var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  outline: 2px solid transparent;
  outline-offset: 0;
}

.components-text-control__input,
.components-text-control__input[type=text],
.components-text-control__input[type=tel],
.components-text-control__input[type=time],
.components-text-control__input[type=url],
.components-text-control__input[type=week],
.components-text-control__input[type=password],
.components-text-control__input[type=color],
.components-text-control__input[type=date],
.components-text-control__input[type=datetime],
.components-text-control__input[type=datetime-local],
.components-text-control__input[type=email],
.components-text-control__input[type=month],
.components-text-control__input[type=number] {
  width: 100%;
  height: 32px;
  margin: 0;
  background: var(--wp-components-color-background, #fff);
  color: var(--wp-components-color-foreground, #1e1e1e);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  padding: 6px 8px;
  /* Fonts smaller than 16px causes mobile safari to zoom. */
  font-size: 16px;
  /* Override core line-height. To be reviewed. */
  line-height: normal;
  box-shadow: 0 0 0 transparent;
  border-radius: 2px;
  border: 1px solid #949494;
  border-color: var(--wp-components-color-gray-600, #949494);
}
@media not (prefers-reduced-motion) {
  .components-text-control__input,
.components-text-control__input[type=text],
.components-text-control__input[type=tel],
.components-text-control__input[type=time],
.components-text-control__input[type=url],
.components-text-control__input[type=week],
.components-text-control__input[type=password],
.components-text-control__input[type=color],
.components-text-control__input[type=date],
.components-text-control__input[type=datetime],
.components-text-control__input[type=datetime-local],
.components-text-control__input[type=email],
.components-text-control__input[type=month],
.components-text-control__input[type=number] {
    transition: box-shadow 0.1s linear;
  }
}
@media (min-width: 600px) {
  .components-text-control__input,
.components-text-control__input[type=text],
.components-text-control__input[type=tel],
.components-text-control__input[type=time],
.components-text-control__input[type=url],
.components-text-control__input[type=week],
.components-text-control__input[type=password],
.components-text-control__input[type=color],
.components-text-control__input[type=date],
.components-text-control__input[type=datetime],
.components-text-control__input[type=datetime-local],
.components-text-control__input[type=email],
.components-text-control__input[type=month],
.components-text-control__input[type=number] {
    font-size: 13px;
    /* Override core line-height. To be reviewed. */
    line-height: normal;
  }
}
.components-text-control__input:focus,
.components-text-control__input[type=text]:focus,
.components-text-control__input[type=tel]:focus,
.components-text-control__input[type=time]:focus,
.components-text-control__input[type=url]:focus,
.components-text-control__input[type=week]:focus,
.components-text-control__input[type=password]:focus,
.components-text-control__input[type=color]:focus,
.components-text-control__input[type=date]:focus,
.components-text-control__input[type=datetime]:focus,
.components-text-control__input[type=datetime-local]:focus,
.components-text-control__input[type=email]:focus,
.components-text-control__input[type=month]:focus,
.components-text-control__input[type=number]:focus {
  border-color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  box-shadow: 0 0 0 0.5px var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
  outline: 2px solid transparent;
}
.components-text-control__input::placeholder,
.components-text-control__input[type=text]::placeholder,
.components-text-control__input[type=tel]::placeholder,
.components-text-control__input[type=time]::placeholder,
.components-text-control__input[type=url]::placeholder,
.components-text-control__input[type=week]::placeholder,
.components-text-control__input[type=password]::placeholder,
.components-text-control__input[type=color]::placeholder,
.components-text-control__input[type=date]::placeholder,
.components-text-control__input[type=datetime]::placeholder,
.components-text-control__input[type=datetime-local]::placeholder,
.components-text-control__input[type=email]::placeholder,
.components-text-control__input[type=month]::placeholder,
.components-text-control__input[type=number]::placeholder {
  color: color-mix(in srgb, var(--wp-components-color-foreground, #1e1e1e), transparent 38%);
}
.components-text-control__input.is-next-40px-default-size,
.components-text-control__input[type=text].is-next-40px-default-size,
.components-text-control__input[type=tel].is-next-40px-default-size,
.components-text-control__input[type=time].is-next-40px-default-size,
.components-text-control__input[type=url].is-next-40px-default-size,
.components-text-control__input[type=week].is-next-40px-default-size,
.components-text-control__input[type=password].is-next-40px-default-size,
.components-text-control__input[type=color].is-next-40px-default-size,
.components-text-control__input[type=date].is-next-40px-default-size,
.components-text-control__input[type=datetime].is-next-40px-default-size,
.components-text-control__input[type=datetime-local].is-next-40px-default-size,
.components-text-control__input[type=email].is-next-40px-default-size,
.components-text-control__input[type=month].is-next-40px-default-size,
.components-text-control__input[type=number].is-next-40px-default-size {
  height: 40px;
  padding-left: 12px;
  padding-right: 12px;
}

.components-text-control__input[type=email],
.components-text-control__input[type=url] {
  /* rtl:ignore */
  direction: ltr;
}

.components-tip {
  display: flex;
  color: #757575;
}
.components-tip svg {
  align-self: center;
  fill: #f0b849;
  flex-shrink: 0;
  margin-right: 16px;
}
.components-tip p {
  margin: 0;
}

.components-toggle-control__label {
  line-height: 16px;
}
.components-toggle-control__label:not(.is-disabled) {
  cursor: pointer;
}

.components-toggle-control__help {
  display: inline-block;
  margin-inline-start: 40px;
}

.components-accessible-toolbar {
  display: inline-flex;
  border: 1px solid var(--wp-components-color-foreground, #1e1e1e);
  border-radius: 2px;
  flex-shrink: 0;
}
.components-accessible-toolbar > .components-toolbar-group:last-child {
  border-right: none;
}
.components-accessible-toolbar.is-unstyled {
  border: none;
}
.components-accessible-toolbar.is-unstyled > .components-toolbar-group {
  border-right: none;
}

.components-accessible-toolbar[aria-orientation=vertical],
.components-toolbar[aria-orientation=vertical] {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.components-accessible-toolbar .components-button,
.components-toolbar .components-button {
  position: relative;
  height: 48px;
  z-index: 1;
  padding-left: 16px;
  padding-right: 16px;
}
.components-accessible-toolbar .components-button:focus:not(:disabled),
.components-toolbar .components-button:focus:not(:disabled) {
  box-shadow: none;
  outline: none;
}
.components-accessible-toolbar .components-button::before,
.components-toolbar .components-button::before {
  content: "";
  position: absolute;
  display: block;
  border-radius: 2px;
  height: 32px;
  left: 8px;
  right: 8px;
  z-index: -1;
}
@media not (prefers-reduced-motion) {
  .components-accessible-toolbar .components-button::before,
.components-toolbar .components-button::before {
    animation: components-button__appear-animation 0.1s ease;
    animation-fill-mode: forwards;
  }
}
.components-accessible-toolbar .components-button svg,
.components-toolbar .components-button svg {
  position: relative;
  margin-left: auto;
  margin-right: auto;
}
.components-accessible-toolbar .components-button.is-pressed,
.components-toolbar .components-button.is-pressed {
  background: transparent;
}
.components-accessible-toolbar .components-button.is-pressed:hover,
.components-toolbar .components-button.is-pressed:hover {
  background: transparent;
}
.components-accessible-toolbar .components-button.is-pressed::before,
.components-toolbar .components-button.is-pressed::before {
  background: var(--wp-components-color-foreground, #1e1e1e);
}
.components-accessible-toolbar .components-button:focus::before,
.components-toolbar .components-button:focus::before {
  box-shadow: inset 0 0 0 1px #fff, 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
  outline: 2px solid transparent;
}
.components-accessible-toolbar .components-button.has-icon.has-icon,
.components-toolbar .components-button.has-icon.has-icon {
  padding-left: 8px;
  padding-right: 8px;
  min-width: 48px;
}

@keyframes components-button__appear-animation {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}
.components-toolbar__control.components-button {
  position: relative;
}
.components-toolbar__control.components-button[data-subscript] svg {
  padding: 5px 10px 5px 0;
}
.components-toolbar__control.components-button[data-subscript]::after {
  content: attr(data-subscript);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 13px;
  font-weight: 600;
  line-height: 12px;
  position: absolute;
  right: 8px;
  bottom: 10px;
}
.components-toolbar__control.components-button:not(:disabled).is-pressed[data-subscript]::after {
  color: #fff;
}

.components-toolbar-group {
  min-height: 48px;
  border-right: 1px solid var(--wp-components-color-foreground, #1e1e1e);
  background-color: var(--wp-components-color-background, #fff);
  display: inline-flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  padding-left: 6px;
  padding-right: 6px;
  line-height: 0;
}
.components-toolbar-group .components-toolbar-group.components-toolbar-group {
  border-width: 0;
  margin: 0;
}
.components-toolbar-group .components-button.components-button,
.components-toolbar-group .components-button.has-icon.has-icon {
  justify-content: center;
  min-width: 36px;
  padding-left: 6px;
  padding-right: 6px;
}
.components-toolbar-group .components-button.components-button svg,
.components-toolbar-group .components-button.has-icon.has-icon svg {
  min-width: 24px;
}
.components-toolbar-group .components-button.components-button::before,
.components-toolbar-group .components-button.has-icon.has-icon::before {
  left: 2px;
  right: 2px;
}

.components-toolbar {
  min-height: 48px;
  margin: 0;
  border: 1px solid var(--wp-components-color-foreground, #1e1e1e);
  background-color: var(--wp-components-color-background, #fff);
  display: inline-flex;
  flex-shrink: 0;
  flex-wrap: wrap;
}
.components-toolbar .components-toolbar.components-toolbar {
  border-width: 0;
  margin: 0;
}

div.components-toolbar > div {
  display: flex;
  margin: 0;
}
div.components-toolbar > div + div.has-left-divider {
  margin-left: 6px;
  position: relative;
  overflow: visible;
}
div.components-toolbar > div + div.has-left-divider::before {
  display: inline-block;
  content: "";
  box-sizing: content-box;
  background-color: #ddd;
  position: absolute;
  top: 8px;
  left: -3px;
  width: 1px;
  height: 20px;
}

.components-tooltip {
  background: #000;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  border-radius: 2px;
  color: #f0f0f0;
  text-align: center;
  line-height: 1.4;
  font-size: 12px;
  padding: 4px 8px;
  z-index: 1000002;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 3px rgba(0, 0, 0, 0.04), 0 6px 6px rgba(0, 0, 0, 0.03), 0 8px 8px rgba(0, 0, 0, 0.02);
}

.components-tooltip__shortcut {
  margin-left: 8px;
}

.components-validated-control:has(:is(input, select):user-invalid) .components-input-control__backdrop {
  --wp-components-color-accent: $alert-red;
  border-color: #cc1818;
}
.components-validated-control :is(textarea, input[type=text]):user-invalid {
  --wp-admin-theme-color: $alert-red;
  --wp-components-color-accent: $alert-red;
  border-color: #cc1818;
}
.components-validated-control .components-combobox-control__suggestions-container:has(input:user-invalid):not(:has([aria-expanded=true])) {
  border-color: #cc1818;
}

.components-validated-control__wrapper-with-error-delegate {
  position: relative;
}
.components-validated-control__wrapper-with-error-delegate:has(select:user-invalid) .components-input-control__backdrop {
  --wp-components-color-accent: $alert-red;
  border-color: #cc1818;
}
.components-validated-control__wrapper-with-error-delegate:has(input[type=radio]:invalid) {
  --wp-components-color-accent: $alert-red;
}

.components-validated-control__error-delegate {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  pointer-events: none;
}

.components-validated-control__indicator {
  display: flex;
  align-items: flex-start;
  gap: 4px;
  margin: 8px 0 0;
  font-family: -apple-system, "system-ui", "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 0.75rem;
  line-height: 16px;
  color: var(--wp-components-color-gray-700, #757575);
  animation: components-validated-control__indicator-jump 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
.components-validated-control__indicator.is-invalid {
  color: #cc1818;
}
.components-validated-control__indicator.is-valid {
  color: color-mix(in srgb, #000 30%, #4ab866);
}

.components-validated-control__indicator-icon {
  flex-shrink: 0;
}

.components-validated-control__indicator-spinner {
  margin: 2px;
  width: 12px;
  height: 12px;
}

@keyframes components-validated-control__indicator-jump {
  0% {
    transform: translateY(-4px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}`,""]);const Rt=Et}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/@wordpress+format-library@5.30.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/format-library/build-style/style.css":((Nt,ue,V)=>{V.d(ue,{A:()=>pt});var nt=V("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),X=V.n(nt),re=V("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),Ke=V.n(re),st=Ke()(X());st.push([Nt.id,`/**
 * Colors
 */
/**
 * Breakpoints & Media Queries
 */
/**
 * Colors
 */
/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
/**
 * Colors
 */
/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
/**
 * Breakpoints & Media Queries
 */
/**
*  Converts a hex value into the rgb equivalent.
*
* @param {string} hex - the hexadecimal value to convert
* @return {string} comma separated rgb values
*/
/**
 * Long content fade mixin
 *
 * Creates a fading overlay to signify that the content is longer
 * than the space allows.
 */
/**
 * Typography
 */
/**
 * Breakpoint mixins
 */
/**
 * Focus styles.
 */
/**
 * Applies editor left position to the selector passed as argument
 */
/**
 * Styles that are reused verbatim in a few places
 */
/**
 * Allows users to opt-out of animations via OS-level preferences.
 */
/**
 * Reset default styles for JavaScript UI based pages.
 * This is a WP-admin agnostic reset
 */
/**
 * Reset the WP Admin page styles for Gutenberg-like pages.
 */
/**
 * Colors
 */
/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
/**
 * Breakpoints & Media Queries
 */
/**
*  Converts a hex value into the rgb equivalent.
*
* @param {string} hex - the hexadecimal value to convert
* @return {string} comma separated rgb values
*/
/**
 * Long content fade mixin
 *
 * Creates a fading overlay to signify that the content is longer
 * than the space allows.
 */
/**
 * Typography
 */
/**
 * Breakpoint mixins
 */
/**
 * Focus styles.
 */
/**
 * Applies editor left position to the selector passed as argument
 */
/**
 * Styles that are reused verbatim in a few places
 */
/**
 * Allows users to opt-out of animations via OS-level preferences.
 */
/**
 * Reset default styles for JavaScript UI based pages.
 * This is a WP-admin agnostic reset
 */
/**
 * Reset the WP Admin page styles for Gutenberg-like pages.
 */
:root {
  --wp-block-synced-color: #7a00df;
  --wp-block-synced-color--rgb: 122, 0, 223;
  --wp-bound-block-color: var(--wp-block-synced-color);
  --wp-admin-theme-color: #007cba;
  --wp-admin-theme-color--rgb: 0, 124, 186;
  --wp-admin-theme-color-darker-10: #006ba1;
  --wp-admin-theme-color-darker-10--rgb: 0, 107, 161;
  --wp-admin-theme-color-darker-20: #005a87;
  --wp-admin-theme-color-darker-20--rgb: 0, 90, 135;
  --wp-admin-border-width-focus: 2px;
}
@media (min-resolution: 192dpi) {
  :root {
    --wp-admin-border-width-focus: 1.5px;
  }
}

.block-editor-format-toolbar__image-popover {
  z-index: 159990;
}
.block-editor-format-toolbar__image-popover .block-editor-format-toolbar__image-container-content {
  width: 260px;
  padding: 16px;
}

.block-editor-format-toolbar__link-container-content {
  display: flex;
  align-items: center;
}

.block-editor-format-toolbar__link-container-value {
  margin: 7px;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 150px;
  max-width: 500px;
}
.block-editor-format-toolbar__link-container-value.has-invalid-link {
  color: #cc1818;
}

.format-library__inline-color-popover [role=tabpanel] {
  padding: 16px;
  width: 260px;
}

.block-editor-format-toolbar__language-popover .components-popover__content {
  width: auto;
  padding: 1rem;
}`,""]);const pt=st}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js":(Nt=>{Nt.exports=function(ue){var V=[];return V.toString=function(){return this.map(function(X){var re="",Ke=typeof X[5]<"u";return X[4]&&(re+="@supports (".concat(X[4],") {")),X[2]&&(re+="@media ".concat(X[2]," {")),Ke&&(re+="@layer".concat(X[5].length>0?" ".concat(X[5]):""," {")),re+=ue(X),Ke&&(re+="}"),X[2]&&(re+="}"),X[4]&&(re+="}"),re}).join("")},V.i=function(X,re,Ke,st,pt){typeof X=="string"&&(X=[[null,X,void 0]]);var rt={};if(Ke)for(var Et=0;Et<this.length;Et++){var p=this[Et][0];p!=null&&(rt[p]=!0)}for(var Rt=0;Rt<X.length;Rt++){var xe=[].concat(X[Rt]);Ke&&rt[xe[0]]||(typeof pt<"u"&&(typeof xe[5]>"u"||(xe[1]="@layer".concat(xe[5].length>0?" ".concat(xe[5]):""," {").concat(xe[1],"}")),xe[5]=pt),re&&(xe[2]&&(xe[1]="@media ".concat(xe[2]," {").concat(xe[1],"}")),xe[2]=re),st&&(xe[4]?(xe[1]="@supports (".concat(xe[4],") {").concat(xe[1],"}"),xe[4]=st):xe[4]="".concat(st)),V.push(xe))}},V}}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/getUrl.js":(Nt=>{Nt.exports=function(ue,V){return V||(V={}),ue&&(ue=String(ue.__esModule?ue.default:ue),/^['"].*['"]$/.test(ue)&&(ue=ue.slice(1,-1)),V.hash&&(ue+=V.hash),/["'() \t\n]|(%20)/.test(ue)||V.needQuotes?'"'.concat(ue.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):ue)}}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js":(Nt=>{Nt.exports=function(ue){return ue[1]}}),"../../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js":((Nt,ue,V)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nt=V("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),X=Symbol.for("react.element"),re=Symbol.for("react.fragment"),Ke=Object.prototype.hasOwnProperty,st=nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pt={key:!0,ref:!0,__self:!0,__source:!0};function rt(Et,p,Rt){var xe,yt={},He=null,he=null;Rt!==void 0&&(He=""+Rt),p.key!==void 0&&(He=""+p.key),p.ref!==void 0&&(he=p.ref);for(xe in p)Ke.call(p,xe)&&!pt.hasOwnProperty(xe)&&(yt[xe]=p[xe]);if(Et&&Et.defaultProps)for(xe in p=Et.defaultProps,p)yt[xe]===void 0&&(yt[xe]=p[xe]);return{$$typeof:X,type:Et,key:He,ref:he,props:yt,_owner:st.current}}ue.Fragment=re,ue.jsx=rt,ue.jsxs=rt}),"../../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.production.min.js":((Nt,ue)=>{/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V=Symbol.for("react.element"),nt=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),re=Symbol.for("react.strict_mode"),Ke=Symbol.for("react.profiler"),st=Symbol.for("react.provider"),pt=Symbol.for("react.context"),rt=Symbol.for("react.forward_ref"),Et=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),xe=Symbol.iterator;function yt(B){return B===null||typeof B!="object"?null:(B=xe&&B[xe]||B["@@iterator"],typeof B=="function"?B:null)}var He={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},he=Object.assign,De={};function ze(B,ie,ot){this.props=B,this.context=ie,this.refs=De,this.updater=ot||He}ze.prototype.isReactComponent={},ze.prototype.setState=function(B,ie){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,ie,"setState")},ze.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function Le(){}Le.prototype=ze.prototype;function et(B,ie,ot){this.props=B,this.context=ie,this.refs=De,this.updater=ot||He}var kt=et.prototype=new Le;kt.constructor=et,he(kt,ze.prototype),kt.isPureReactComponent=!0;var $t=Array.isArray,xt=Object.prototype.hasOwnProperty,We={current:null},tt={key:!0,ref:!0,__self:!0,__source:!0};function Ne(B,ie,ot){var Ie,lt={},dt=null,Pt=null;if(ie!=null)for(Ie in ie.ref!==void 0&&(Pt=ie.ref),ie.key!==void 0&&(dt=""+ie.key),ie)xt.call(ie,Ie)&&!tt.hasOwnProperty(Ie)&&(lt[Ie]=ie[Ie]);var It=arguments.length-2;if(It===1)lt.children=ot;else if(1<It){for(var Jt=Array(It),io=0;io<It;io++)Jt[io]=arguments[io+2];lt.children=Jt}if(B&&B.defaultProps)for(Ie in It=B.defaultProps,It)lt[Ie]===void 0&&(lt[Ie]=It[Ie]);return{$$typeof:V,type:B,key:dt,ref:Pt,props:lt,_owner:We.current}}function wt(B,ie){return{$$typeof:V,type:B.type,key:ie,ref:B.ref,props:B.props,_owner:B._owner}}function Bt(B){return typeof B=="object"&&B!==null&&B.$$typeof===V}function Oe(B){var ie={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(ot){return ie[ot]})}var ae=/\/+/g;function ve(B,ie){return typeof B=="object"&&B!==null&&B.key!=null?Oe(""+B.key):ie.toString(36)}function Be(B,ie,ot,Ie,lt){var dt=typeof B;(dt==="undefined"||dt==="boolean")&&(B=null);var Pt=!1;if(B===null)Pt=!0;else switch(dt){case"string":case"number":Pt=!0;break;case"object":switch(B.$$typeof){case V:case nt:Pt=!0}}if(Pt)return Pt=B,lt=lt(Pt),B=Ie===""?"."+ve(Pt,0):Ie,$t(lt)?(ot="",B!=null&&(ot=B.replace(ae,"$&/")+"/"),Be(lt,ie,ot,"",function(io){return io})):lt!=null&&(Bt(lt)&&(lt=wt(lt,ot+(!lt.key||Pt&&Pt.key===lt.key?"":(""+lt.key).replace(ae,"$&/")+"/")+B)),ie.push(lt)),1;if(Pt=0,Ie=Ie===""?".":Ie+":",$t(B))for(var It=0;It<B.length;It++){dt=B[It];var Jt=Ie+ve(dt,It);Pt+=Be(dt,ie,ot,Jt,lt)}else if(Jt=yt(B),typeof Jt=="function")for(B=Jt.call(B),It=0;!(dt=B.next()).done;)dt=dt.value,Jt=Ie+ve(dt,It++),Pt+=Be(dt,ie,ot,Jt,lt);else if(dt==="object")throw ie=String(B),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return Pt}function Qe(B,ie,ot){if(B==null)return B;var Ie=[],lt=0;return Be(B,Ie,"","",function(dt){return ie.call(ot,dt,lt++)}),Ie}function At(B){if(B._status===-1){var ie=B._result;ie=ie(),ie.then(function(ot){(B._status===0||B._status===-1)&&(B._status=1,B._result=ot)},function(ot){(B._status===0||B._status===-1)&&(B._status=2,B._result=ot)}),B._status===-1&&(B._status=0,B._result=ie)}if(B._status===1)return B._result.default;throw B._result}var Pe={current:null},jt={transition:null},it={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:jt,ReactCurrentOwner:We};function Ge(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:Qe,forEach:function(B,ie,ot){Qe(B,function(){ie.apply(this,arguments)},ot)},count:function(B){var ie=0;return Qe(B,function(){ie++}),ie},toArray:function(B){return Qe(B,function(ie){return ie})||[]},only:function(B){if(!Bt(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},ue.Component=ze,ue.Fragment=X,ue.Profiler=Ke,ue.PureComponent=et,ue.StrictMode=re,ue.Suspense=Et,ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=it,ue.act=Ge,ue.cloneElement=function(B,ie,ot){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var Ie=he({},B.props),lt=B.key,dt=B.ref,Pt=B._owner;if(ie!=null){if(ie.ref!==void 0&&(dt=ie.ref,Pt=We.current),ie.key!==void 0&&(lt=""+ie.key),B.type&&B.type.defaultProps)var It=B.type.defaultProps;for(Jt in ie)xt.call(ie,Jt)&&!tt.hasOwnProperty(Jt)&&(Ie[Jt]=ie[Jt]===void 0&&It!==void 0?It[Jt]:ie[Jt])}var Jt=arguments.length-2;if(Jt===1)Ie.children=ot;else if(1<Jt){It=Array(Jt);for(var io=0;io<Jt;io++)It[io]=arguments[io+2];Ie.children=It}return{$$typeof:V,type:B.type,key:lt,ref:dt,props:Ie,_owner:Pt}},ue.createContext=function(B){return B={$$typeof:pt,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:st,_context:B},B.Consumer=B},ue.createElement=Ne,ue.createFactory=function(B){var ie=Ne.bind(null,B);return ie.type=B,ie},ue.createRef=function(){return{current:null}},ue.forwardRef=function(B){return{$$typeof:rt,render:B}},ue.isValidElement=Bt,ue.lazy=function(B){return{$$typeof:Rt,_payload:{_status:-1,_result:B},_init:At}},ue.memo=function(B,ie){return{$$typeof:p,type:B,compare:ie===void 0?null:ie}},ue.startTransition=function(B){var ie=jt.transition;jt.transition={};try{B()}finally{jt.transition=ie}},ue.unstable_act=Ge,ue.useCallback=function(B,ie){return Pe.current.useCallback(B,ie)},ue.useContext=function(B){return Pe.current.useContext(B)},ue.useDebugValue=function(){},ue.useDeferredValue=function(B){return Pe.current.useDeferredValue(B)},ue.useEffect=function(B,ie){return Pe.current.useEffect(B,ie)},ue.useId=function(){return Pe.current.useId()},ue.useImperativeHandle=function(B,ie,ot){return Pe.current.useImperativeHandle(B,ie,ot)},ue.useInsertionEffect=function(B,ie){return Pe.current.useInsertionEffect(B,ie)},ue.useLayoutEffect=function(B,ie){return Pe.current.useLayoutEffect(B,ie)},ue.useMemo=function(B,ie){return Pe.current.useMemo(B,ie)},ue.useReducer=function(B,ie,ot){return Pe.current.useReducer(B,ie,ot)},ue.useRef=function(B){return Pe.current.useRef(B)},ue.useState=function(B){return Pe.current.useState(B)},ue.useSyncExternalStore=function(B,ie,ot){return Pe.current.useSyncExternalStore(B,ie,ot)},ue.useTransition=function(){return Pe.current.useTransition()},ue.version="18.3.1"}),"../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js":((Nt,ue,V)=>{Nt.exports=V("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.production.min.js")}),"../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js":((Nt,ue,V)=>{Nt.exports=V("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js")}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/csf/index.js":((Nt,ue,V)=>{V.d(ue,{aj:()=>$t,bU:()=>Le,hX:()=>ze});var nt=Object.create,X=Object.defineProperty,re=Object.getOwnPropertyDescriptor,Ke=Object.getOwnPropertyNames,st=Object.getPrototypeOf,pt=Object.prototype.hasOwnProperty,rt=(ae,ve)=>X(ae,"name",{value:ve,configurable:!0}),Et=(ae,ve)=>()=>(ve||ae((ve={exports:{}}).exports,ve),ve.exports),p=(ae,ve,Be,Qe)=>{if(ve&&typeof ve=="object"||typeof ve=="function")for(let At of Ke(ve))!pt.call(ae,At)&&At!==Be&&X(ae,At,{get:()=>ve[At],enumerable:!(Qe=re(ve,At))||Qe.enumerable});return ae},Rt=(ae,ve,Be)=>(Be=ae!=null?nt(st(ae)):{},p(ve||!ae||!ae.__esModule?X(Be,"default",{value:ae,enumerable:!0}):Be,ae)),xe=Et(ae=>{Object.defineProperty(ae,"__esModule",{value:!0}),ae.isEqual=(function(){var ve=Object.prototype.toString,Be=Object.getPrototypeOf,Qe=Object.getOwnPropertySymbols?function(At){return Object.keys(At).concat(Object.getOwnPropertySymbols(At))}:Object.keys;return function(At,Pe){return rt(function jt(it,Ge,B){var ie,ot,Ie,lt=ve.call(it),dt=ve.call(Ge);if(it===Ge)return!0;if(it==null||Ge==null)return!1;if(B.indexOf(it)>-1&&B.indexOf(Ge)>-1)return!0;if(B.push(it,Ge),lt!=dt||(ie=Qe(it),ot=Qe(Ge),ie.length!=ot.length||ie.some(function(Pt){return!jt(it[Pt],Ge[Pt],B)})))return!1;switch(lt.slice(8,-1)){case"Symbol":return it.valueOf()==Ge.valueOf();case"Date":case"Number":return+it==+Ge||+it!=+it&&+Ge!=+Ge;case"RegExp":case"Function":case"String":case"Boolean":return""+it==""+Ge;case"Set":case"Map":ie=it.entries(),ot=Ge.entries();do if(!jt((Ie=ie.next()).value,ot.next().value,B))return!1;while(!Ie.done);return!0;case"ArrayBuffer":it=new Uint8Array(it),Ge=new Uint8Array(Ge);case"DataView":it=new Uint8Array(it.buffer),Ge=new Uint8Array(Ge.buffer);case"Float32Array":case"Float64Array":case"Int8Array":case"Int16Array":case"Int32Array":case"Uint8Array":case"Uint16Array":case"Uint32Array":case"Uint8ClampedArray":case"Arguments":case"Array":if(it.length!=Ge.length)return!1;for(Ie=0;Ie<it.length;Ie++)if((Ie in it||Ie in Ge)&&(Ie in it!=Ie in Ge||!jt(it[Ie],Ge[Ie],B)))return!1;return!0;case"Object":return jt(Be(it),Be(Ge),B);default:return!1}},"n")(At,Pe,[])}})()});function yt(ae){return ae.replace(/_/g," ").replace(/-/g," ").replace(/\./g," ").replace(/([^\n])([A-Z])([a-z])/g,(ve,Be,Qe,At)=>`${Be} ${Qe}${At}`).replace(/([a-z])([A-Z])/g,(ve,Be,Qe)=>`${Be} ${Qe}`).replace(/([a-z])([0-9])/gi,(ve,Be,Qe)=>`${Be} ${Qe}`).replace(/([0-9])([a-z])/gi,(ve,Be,Qe)=>`${Be} ${Qe}`).replace(/(\s|^)(\w)/g,(ve,Be,Qe)=>`${Be}${Qe.toUpperCase()}`).replace(/ +/g," ").trim()}rt(yt,"toStartCaseStr");var He=Rt(xe(),1),he=rt(ae=>ae.map(ve=>typeof ve<"u").filter(Boolean).length,"count"),De=rt((ae,ve)=>{let{exists:Be,eq:Qe,neq:At,truthy:Pe}=ae;if(he([Be,Qe,At,Pe])>1)throw new Error(`Invalid conditional test ${JSON.stringify({exists:Be,eq:Qe,neq:At})}`);if(typeof Qe<"u")return(0,He.isEqual)(ve,Qe);if(typeof At<"u")return!(0,He.isEqual)(ve,At);if(typeof Be<"u"){let jt=typeof ve<"u";return Be?jt:!jt}return typeof Pe>"u"||Pe?!!ve:!ve},"testValue"),ze=rt((ae,ve,Be)=>{if(!ae.if)return!0;let{arg:Qe,global:At}=ae.if;if(he([Qe,At])!==1)throw new Error(`Invalid conditional value ${JSON.stringify({arg:Qe,global:At})}`);let Pe=Qe?ve[Qe]:Be[At];return De(ae.if,Pe)},"includeConditionalArg");function Le(ae){return ae!=null&&typeof ae=="object"&&"_tag"in ae&&ae?._tag==="Preview"}rt(Le,"isPreview");function et(ae){return ae!=null&&typeof ae=="object"&&"_tag"in ae&&ae?._tag==="Meta"}rt(et,"isMeta");function kt(ae){return ae!=null&&typeof ae=="object"&&"_tag"in ae&&ae?._tag==="Story"}rt(kt,"isStory");var $t=rt(ae=>ae.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"-").replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),"sanitize"),xt=null,We=null,tt=null;function Ne(ae,ve){return Array.isArray(ve)?ve.includes(ae):ae.match(ve)}rt(Ne,"matches");function wt(ae,{includeStories:ve,excludeStories:Be}){return ae!=="__esModule"&&(!ve||Ne(ae,ve))&&(!Be||!Ne(ae,Be))}rt(wt,"isExportStory");var Bt=null,Oe=null}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/docs-tools/index.js":((Nt,ue,V)=>{V.d(ue,{C2:()=>Xn,Op:()=>Hn,Sy:()=>Ze,TQ:()=>Pe,UO:()=>it,Ux:()=>Ee,Y1:()=>In,YF:()=>ve,i3:()=>oe,p6:()=>gn,rl:()=>Ht});var nt=V("storybook/internal/preview-errors"),X=V.n(nt),re=Object.create,Ke=Object.defineProperty,st=Object.getOwnPropertyDescriptor,pt=Object.getOwnPropertyNames,rt=Object.getPrototypeOf,Et=Object.prototype.hasOwnProperty,p=(m,w)=>Ke(m,"name",{value:w,configurable:!0}),Rt=(m,w)=>()=>(w||m((w={exports:{}}).exports,w),w.exports),xe=(m,w,N,ee)=>{if(w&&typeof w=="object"||typeof w=="function")for(let q of pt(w))!Et.call(m,q)&&q!==N&&Ke(m,q,{get:()=>w[q],enumerable:!(ee=st(w,q))||ee.enumerable});return m},yt=(m,w,N)=>(N=m!=null?re(rt(m)):{},xe(w||!m||!m.__esModule?Ke(N,"default",{value:m,enumerable:!0}):N,m)),He=Rt((m,w)=>{(function(N,ee){typeof m=="object"&&typeof w<"u"?ee(m):typeof define=="function"&&V.amdO?define(["exports"],ee):(N=typeof globalThis<"u"?globalThis:N||self,ee(N.jtpp={}))})(m,function(N){"use strict";function ee(n){return n.text!==void 0&&n.text!==""?`'${n.type}' with value '${n.text}'`:`'${n.type}'`}p(ee,"tokenToString");let q=class ci extends Error{constructor(c){super(`No parslet found for token: ${ee(c)}`),this.token=c,Object.setPrototypeOf(this,ci.prototype)}getToken(){return this.token}};p(q,"NoParsletFoundError");let de=q,Ve=class pi extends Error{constructor(c){super(`The parsing ended early. The next token was: ${ee(c)}`),this.token=c,Object.setPrototypeOf(this,pi.prototype)}getToken(){return this.token}};p(Ve,"EarlyEndOfParseError");let Se=Ve,vt=class ui extends Error{constructor(c,_){let W=`Unexpected type: '${c.type}'.`;_!==void 0&&(W+=` Message: ${_}`),super(W),Object.setPrototypeOf(this,ui.prototype)}};p(vt,"UnexpectedTypeError");let Wt=vt;function ht(n){return c=>c.startsWith(n)?{type:n,text:n}:null}p(ht,"makePunctuationRule");function On(n){let c=0,_,W=n[0],ke=!1;if(W!=="'"&&W!=='"')return null;for(;c<n.length;){if(c++,_=n[c],!ke&&_===W){c++;break}ke=!ke&&_==="\\"}if(_!==W)throw new Error("Unterminated String");return n.slice(0,c)}p(On,"getQuoted");let fn=new RegExp("[$_\\p{ID_Start}]|\\\\u\\p{Hex_Digit}{4}|\\\\u\\{0*(?:\\p{Hex_Digit}{1,5}|10\\p{Hex_Digit}{4})\\}","u"),kn=new RegExp("[$\\-\\p{ID_Continue}\\u200C\\u200D]|\\\\u\\p{Hex_Digit}{4}|\\\\u\\{0*(?:\\p{Hex_Digit}{1,5}|10\\p{Hex_Digit}{4})\\}","u");function _n(n){let c=n[0];if(!fn.test(c))return null;let _=1;do{if(c=n[_],!kn.test(c))break;_++}while(_<n.length);return n.slice(0,_)}p(_n,"getIdentifier");let Yn=/^(NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity))/;function an(n){var c,_;return(_=(c=Yn.exec(n))===null||c===void 0?void 0:c[0])!==null&&_!==void 0?_:null}p(an,"getNumber");let wn=p(n=>{let c=_n(n);return c==null?null:{type:"Identifier",text:c}},"identifierRule");function ao(n){return c=>{if(!c.startsWith(n))return null;let _=c[n.length];return _!==void 0&&kn.test(_)?null:{type:n,text:n}}}p(ao,"makeKeyWordRule");let Ir=p(n=>{let c=On(n);return c==null?null:{type:"StringValue",text:c}},"stringValueRule"),sn=p(n=>n.length>0?null:{type:"EOF",text:""},"eofRule"),ln=p(n=>{let c=an(n);return c===null?null:{type:"Number",text:c}},"numberRule"),Or=[sn,ht("=>"),ht("("),ht(")"),ht("{"),ht("}"),ht("["),ht("]"),ht("|"),ht("&"),ht("<"),ht(">"),ht(","),ht(";"),ht("*"),ht("?"),ht("!"),ht("="),ht(":"),ht("..."),ht("."),ht("#"),ht("~"),ht("/"),ht("@"),ao("undefined"),ao("null"),ao("function"),ao("this"),ao("new"),ao("module"),ao("event"),ao("external"),ao("typeof"),ao("keyof"),ao("readonly"),ao("import"),ao("is"),ao("in"),ao("asserts"),ln,wn,Ir],Nr=/^\s*\n\s*/,Qn=class Tr{static create(c){let _=this.read(c);c=_.text;let W=this.read(c);return c=W.text,new Tr(c,void 0,_.token,W.token)}constructor(c,_,W,ke){this.text="",this.text=c,this.previous=_,this.current=W,this.next=ke}static read(c,_=!1){_=_||Nr.test(c),c=c.trim();for(let W of Or){let ke=W(c);if(ke!==null){let Ue=Object.assign(Object.assign({},ke),{startOfLine:_});return c=c.slice(Ue.text.length),{text:c,token:Ue}}}throw new Error("Unexpected Token "+c)}advance(){let c=Tr.read(this.text);return new Tr(c.text,this.current,this.next,c.token)}};p(Qn,"Lexer");let Rr=Qn;function Yt(n){if(n===void 0)throw new Error("Unexpected undefined");if(n.type==="JsdocTypeKeyValue"||n.type==="JsdocTypeParameterList"||n.type==="JsdocTypeProperty"||n.type==="JsdocTypeReadonlyProperty"||n.type==="JsdocTypeObjectField"||n.type==="JsdocTypeJsdocObjectField"||n.type==="JsdocTypeIndexSignature"||n.type==="JsdocTypeMappedType")throw new Wt(n);return n}p(Yt,"assertRootResult");function Eo(n){return n.type==="JsdocTypeKeyValue"?yn(n):Yt(n)}p(Eo,"assertPlainKeyValueOrRootResult");function Nn(n){return n.type==="JsdocTypeName"?n:yn(n)}p(Nn,"assertPlainKeyValueOrNameResult");function yn(n){if(n.type!=="JsdocTypeKeyValue")throw new Wt(n);return n}p(yn,"assertPlainKeyValueResult");function Zn(n){var c;if(n.type==="JsdocTypeVariadic"){if(((c=n.element)===null||c===void 0?void 0:c.type)==="JsdocTypeName")return n;throw new Wt(n)}if(n.type!=="JsdocTypeNumber"&&n.type!=="JsdocTypeName")throw new Wt(n);return n}p(Zn,"assertNumberOrVariadicNameResult");function Rn(n){return n.type==="JsdocTypeIndexSignature"||n.type==="JsdocTypeMappedType"}p(Rn,"isSquaredProperty");var ct;(function(n){n[n.ALL=0]="ALL",n[n.PARAMETER_LIST=1]="PARAMETER_LIST",n[n.OBJECT=2]="OBJECT",n[n.KEY_VALUE=3]="KEY_VALUE",n[n.INDEX_BRACKETS=4]="INDEX_BRACKETS",n[n.UNION=5]="UNION",n[n.INTERSECTION=6]="INTERSECTION",n[n.PREFIX=7]="PREFIX",n[n.INFIX=8]="INFIX",n[n.TUPLE=9]="TUPLE",n[n.SYMBOL=10]="SYMBOL",n[n.OPTIONAL=11]="OPTIONAL",n[n.NULLABLE=12]="NULLABLE",n[n.KEY_OF_TYPE_OF=13]="KEY_OF_TYPE_OF",n[n.FUNCTION=14]="FUNCTION",n[n.ARROW=15]="ARROW",n[n.ARRAY_BRACKETS=16]="ARRAY_BRACKETS",n[n.GENERIC=17]="GENERIC",n[n.NAME_PATH=18]="NAME_PATH",n[n.PARENTHESIS=19]="PARENTHESIS",n[n.SPECIAL_TYPES=20]="SPECIAL_TYPES"})(ct||(ct={}));let br=class{constructor(c,_,W){this.grammar=c,typeof _=="string"?this._lexer=Rr.create(_):this._lexer=_,this.baseParser=W}get lexer(){return this._lexer}parse(){let c=this.parseType(ct.ALL);if(this.lexer.current.type!=="EOF")throw new Se(this.lexer.current);return c}parseType(c){return Yt(this.parseIntermediateType(c))}parseIntermediateType(c){let _=this.tryParslets(null,c);if(_===null)throw new de(this.lexer.current);return this.parseInfixIntermediateType(_,c)}parseInfixIntermediateType(c,_){let W=this.tryParslets(c,_);for(;W!==null;)c=W,W=this.tryParslets(c,_);return c}tryParslets(c,_){for(let W of this.grammar){let ke=W(this,_,c);if(ke!==null)return ke}return null}consume(c){return Array.isArray(c)||(c=[c]),c.includes(this.lexer.current.type)?(this._lexer=this.lexer.advance(),!0):!1}acceptLexerState(c){this._lexer=c.lexer}};p(br,"Parser");let Qo=br;function er(n){return n==="EOF"||n==="|"||n===","||n===")"||n===">"}p(er,"isQuestionMarkUnknownType");let xn=p((n,c,_)=>{let W=n.lexer.current.type,ke=n.lexer.next.type;return _==null&&W==="?"&&!er(ke)||_!=null&&W==="?"?(n.consume("?"),_==null?{type:"JsdocTypeNullable",element:n.parseType(ct.NULLABLE),meta:{position:"prefix"}}:{type:"JsdocTypeNullable",element:Yt(_),meta:{position:"suffix"}}):null},"nullableParslet");function Tt(n){let c=p((_,W,ke)=>{let Ue=_.lexer.current.type,_t=_.lexer.next.type;if(ke===null){if("parsePrefix"in n&&n.accept(Ue,_t))return n.parsePrefix(_)}else if("parseInfix"in n&&n.precedence>W&&n.accept(Ue,_t))return n.parseInfix(_,ke);return null},"parslet");return Object.defineProperty(c,"name",{value:n.name}),c}p(Tt,"composeParslet");let ge=Tt({name:"optionalParslet",accept:p(n=>n==="=","accept"),precedence:ct.OPTIONAL,parsePrefix:p(n=>(n.consume("="),{type:"JsdocTypeOptional",element:n.parseType(ct.OPTIONAL),meta:{position:"prefix"}}),"parsePrefix"),parseInfix:p((n,c)=>(n.consume("="),{type:"JsdocTypeOptional",element:Yt(c),meta:{position:"suffix"}}),"parseInfix")}),cn=Tt({name:"numberParslet",accept:p(n=>n==="Number","accept"),parsePrefix:p(n=>{let c=parseFloat(n.lexer.current.text);return n.consume("Number"),{type:"JsdocTypeNumber",value:c}},"parsePrefix")}),jr=Tt({name:"parenthesisParslet",accept:p(n=>n==="(","accept"),parsePrefix:p(n=>{if(n.consume("("),n.consume(")"))return{type:"JsdocTypeParameterList",elements:[]};let c=n.parseIntermediateType(ct.ALL);if(!n.consume(")"))throw new Error("Unterminated parenthesis");return c.type==="JsdocTypeParameterList"?c:c.type==="JsdocTypeKeyValue"?{type:"JsdocTypeParameterList",elements:[c]}:{type:"JsdocTypeParenthesis",element:Yt(c)}},"parsePrefix")}),vn=Tt({name:"specialTypesParslet",accept:p((n,c)=>n==="?"&&er(c)||n==="null"||n==="undefined"||n==="*","accept"),parsePrefix:p(n=>{if(n.consume("null"))return{type:"JsdocTypeNull"};if(n.consume("undefined"))return{type:"JsdocTypeUndefined"};if(n.consume("*"))return{type:"JsdocTypeAny"};if(n.consume("?"))return{type:"JsdocTypeUnknown"};throw new Error("Unacceptable token: "+n.lexer.current.text)},"parsePrefix")}),hr=Tt({name:"notNullableParslet",accept:p(n=>n==="!","accept"),precedence:ct.NULLABLE,parsePrefix:p(n=>(n.consume("!"),{type:"JsdocTypeNotNullable",element:n.parseType(ct.NULLABLE),meta:{position:"prefix"}}),"parsePrefix"),parseInfix:p((n,c)=>(n.consume("!"),{type:"JsdocTypeNotNullable",element:Yt(c),meta:{position:"suffix"}}),"parseInfix")});function tr({allowTrailingComma:n}){return Tt({name:"parameterListParslet",accept:p(c=>c===",","accept"),precedence:ct.PARAMETER_LIST,parseInfix:p((c,_)=>{let W=[Eo(_)];c.consume(",");do try{let ke=c.parseIntermediateType(ct.PARAMETER_LIST);W.push(Eo(ke))}catch(ke){if(n&&ke instanceof de)break;throw ke}while(c.consume(","));if(W.length>0&&W.slice(0,-1).some(ke=>ke.type==="JsdocTypeVariadic"))throw new Error("Only the last parameter may be a rest parameter");return{type:"JsdocTypeParameterList",elements:W}},"parseInfix")})}p(tr,"createParameterListParslet");let zr=Tt({name:"genericParslet",accept:p((n,c)=>n==="<"||n==="."&&c==="<","accept"),precedence:ct.GENERIC,parseInfix:p((n,c)=>{let _=n.consume(".");n.consume("<");let W=[];do W.push(n.parseType(ct.PARAMETER_LIST));while(n.consume(","));if(!n.consume(">"))throw new Error("Unterminated generic parameter list");return{type:"JsdocTypeGeneric",left:Yt(c),elements:W,meta:{brackets:"angle",dot:_}}},"parseInfix")}),Lr=Tt({name:"unionParslet",accept:p(n=>n==="|","accept"),precedence:ct.UNION,parseInfix:p((n,c)=>{n.consume("|");let _=[];do _.push(n.parseType(ct.UNION));while(n.consume("|"));return{type:"JsdocTypeUnion",elements:[Yt(c),..._]}},"parseInfix")}),or=[xn,ge,cn,jr,vn,hr,tr({allowTrailingComma:!0}),zr,Lr,ge];function En({allowSquareBracketsOnAnyType:n,allowJsdocNamePaths:c,pathGrammar:_}){return p(function(W,ke,Ue){if(Ue==null||ke>=ct.NAME_PATH)return null;let _t=W.lexer.current.type,Qt=W.lexer.next.type;if(!(_t==="."&&Qt!=="<"||_t==="["&&(n||Ue.type==="JsdocTypeName")||c&&(_t==="~"||_t==="#")))return null;let Zt,ho=!1;W.consume(".")?Zt="property":W.consume("[")?(Zt="property-brackets",ho=!0):W.consume("~")?Zt="inner":(W.consume("#"),Zt="instance");let zo=_!==null?new Qo(_,W.lexer,W):W,Ao=zo.parseIntermediateType(ct.NAME_PATH);W.acceptLexerState(zo);let Fn;switch(Ao.type){case"JsdocTypeName":Fn={type:"JsdocTypeProperty",value:Ao.value,meta:{quote:void 0}};break;case"JsdocTypeNumber":Fn={type:"JsdocTypeProperty",value:Ao.value.toString(10),meta:{quote:void 0}};break;case"JsdocTypeStringValue":Fn={type:"JsdocTypeProperty",value:Ao.value,meta:{quote:Ao.meta.quote}};break;case"JsdocTypeSpecialNamePath":if(Ao.specialType==="event")Fn=Ao;else throw new Wt(Ao,"Type 'JsdocTypeSpecialNamePath' is only allowed with specialType 'event'");break;default:throw new Wt(Ao,"Expecting 'JsdocTypeName', 'JsdocTypeNumber', 'JsdocStringValue' or 'JsdocTypeSpecialNamePath'")}if(ho&&!W.consume("]")){let pr=W.lexer.current;throw new Error(`Unterminated square brackets. Next token is '${pr.type}' with text '${pr.text}'`)}return{type:"JsdocTypeNamePath",left:Yt(Ue),right:Fn,pathType:Zt}},"namePathParslet")}p(En,"createNamePathParslet");function Ro({allowedAdditionalTokens:n}){return Tt({name:"nameParslet",accept:p(c=>c==="Identifier"||c==="this"||c==="new"||n.includes(c),"accept"),parsePrefix:p(c=>{let{type:_,text:W}=c.lexer.current;return c.consume(_),{type:"JsdocTypeName",value:W}},"parsePrefix")})}p(Ro,"createNameParslet");let An=Tt({name:"stringValueParslet",accept:p(n=>n==="StringValue","accept"),parsePrefix:p(n=>{let c=n.lexer.current.text;return n.consume("StringValue"),{type:"JsdocTypeStringValue",value:c.slice(1,-1),meta:{quote:c[0]==="'"?"single":"double"}}},"parsePrefix")});function pn({pathGrammar:n,allowedTypes:c}){return Tt({name:"specialNamePathParslet",accept:p(_=>c.includes(_),"accept"),parsePrefix:p(_=>{let W=_.lexer.current.type;if(_.consume(W),!_.consume(":"))return{type:"JsdocTypeName",value:W};let ke,Ue=_.lexer.current;if(_.consume("StringValue"))ke={type:"JsdocTypeSpecialNamePath",value:Ue.text.slice(1,-1),specialType:W,meta:{quote:Ue.text[0]==="'"?"single":"double"}};else{let Zt="",ho=["Identifier","@","/"];for(;ho.some(zo=>_.consume(zo));)Zt+=Ue.text,Ue=_.lexer.current;ke={type:"JsdocTypeSpecialNamePath",value:Zt,specialType:W,meta:{quote:void 0}}}let _t=new Qo(n,_.lexer,_),Qt=_t.parseInfixIntermediateType(ke,ct.ALL);return _.acceptLexerState(_t),Yt(Qt)},"parsePrefix")})}p(pn,"createSpecialNamePathParslet");let gr=[Ro({allowedAdditionalTokens:["external","module"]}),An,cn,En({allowSquareBracketsOnAnyType:!1,allowJsdocNamePaths:!0,pathGrammar:null})],un=[...gr,pn({allowedTypes:["event"],pathGrammar:gr})];function jn(n){let c;if(n.type==="JsdocTypeParameterList")c=n.elements;else if(n.type==="JsdocTypeParenthesis")c=[n.element];else throw new Wt(n);return c.map(_=>Eo(_))}p(jn,"getParameters");function jo(n){let c=jn(n);if(c.some(_=>_.type==="JsdocTypeKeyValue"))throw new Error("No parameter should be named");return c}p(jo,"getUnnamedParameters");function zn({allowNamedParameters:n,allowNoReturnType:c,allowWithoutParenthesis:_,allowNewAsFunctionKeyword:W}){return Tt({name:"functionParslet",accept:p((ke,Ue)=>ke==="function"||W&&ke==="new"&&Ue==="(","accept"),parsePrefix:p(ke=>{let Ue=ke.consume("new");ke.consume("function");let _t=ke.lexer.current.type==="(";if(!_t){if(!_)throw new Error("function is missing parameter list");return{type:"JsdocTypeName",value:"function"}}let Qt={type:"JsdocTypeFunction",parameters:[],arrow:!1,constructor:Ue,parenthesis:_t},Zt=ke.parseIntermediateType(ct.FUNCTION);if(n===void 0)Qt.parameters=jo(Zt);else{if(Ue&&Zt.type==="JsdocTypeFunction"&&Zt.arrow)return Qt=Zt,Qt.constructor=!0,Qt;Qt.parameters=jn(Zt);for(let ho of Qt.parameters)if(ho.type==="JsdocTypeKeyValue"&&!n.includes(ho.key))throw new Error(`only allowed named parameters are ${n.join(", ")} but got ${ho.type}`)}if(ke.consume(":"))Qt.returnType=ke.parseType(ct.PREFIX);else if(!c)throw new Error("function is missing return type");return Qt},"parsePrefix")})}p(zn,"createFunctionParslet");function dn({allowPostfix:n,allowEnclosingBrackets:c}){return Tt({name:"variadicParslet",accept:p(_=>_==="...","accept"),precedence:ct.PREFIX,parsePrefix:p(_=>{_.consume("...");let W=c&&_.consume("[");try{let ke=_.parseType(ct.PREFIX);if(W&&!_.consume("]"))throw new Error("Unterminated variadic type. Missing ']'");return{type:"JsdocTypeVariadic",element:Yt(ke),meta:{position:"prefix",squareBrackets:W}}}catch(ke){if(ke instanceof de){if(W)throw new Error("Empty square brackets for variadic are not allowed.");return{type:"JsdocTypeVariadic",meta:{position:void 0,squareBrackets:!1}}}else throw ke}},"parsePrefix"),parseInfix:n?(_,W)=>(_.consume("..."),{type:"JsdocTypeVariadic",element:Yt(W),meta:{position:"suffix",squareBrackets:!1}}):void 0})}p(dn,"createVariadicParslet");let nr=Tt({name:"symbolParslet",accept:p(n=>n==="(","accept"),precedence:ct.SYMBOL,parseInfix:p((n,c)=>{if(c.type!=="JsdocTypeName")throw new Error("Symbol expects a name on the left side. (Reacting on '(')");n.consume("(");let _={type:"JsdocTypeSymbol",value:c.value};if(!n.consume(")")){let W=n.parseIntermediateType(ct.SYMBOL);if(_.element=Zn(W),!n.consume(")"))throw new Error("Symbol does not end after value")}return _},"parseInfix")}),rr=Tt({name:"arrayBracketsParslet",precedence:ct.ARRAY_BRACKETS,accept:p((n,c)=>n==="["&&c==="]","accept"),parseInfix:p((n,c)=>(n.consume("["),n.consume("]"),{type:"JsdocTypeGeneric",left:{type:"JsdocTypeName",value:"Array"},elements:[Yt(c)],meta:{brackets:"square",dot:!1}}),"parseInfix")});function mn({objectFieldGrammar:n,allowKeyTypes:c}){return Tt({name:"objectParslet",accept:p(_=>_==="{","accept"),parsePrefix:p(_=>{_.consume("{");let W={type:"JsdocTypeObject",meta:{separator:"comma"},elements:[]};if(!_.consume("}")){let ke,Ue=new Qo(n,_.lexer,_);for(;;){Ue.acceptLexerState(_);let _t=Ue.parseIntermediateType(ct.OBJECT);_.acceptLexerState(Ue),_t===void 0&&c&&(_t=_.parseIntermediateType(ct.OBJECT));let Qt=!1;if(_t.type==="JsdocTypeNullable"&&(Qt=!0,_t=_t.element),_t.type==="JsdocTypeNumber"||_t.type==="JsdocTypeName"||_t.type==="JsdocTypeStringValue"){let Zt;_t.type==="JsdocTypeStringValue"&&(Zt=_t.meta.quote),W.elements.push({type:"JsdocTypeObjectField",key:_t.value.toString(),right:void 0,optional:Qt,readonly:!1,meta:{quote:Zt}})}else if(_t.type==="JsdocTypeObjectField"||_t.type==="JsdocTypeJsdocObjectField")W.elements.push(_t);else throw new Wt(_t);if(_.lexer.current.startOfLine)ke="linebreak";else if(_.consume(","))ke="comma";else if(_.consume(";"))ke="semicolon";else break;if(_.lexer.current.type==="}")break}if(W.meta.separator=ke??"comma",!_.consume("}"))throw new Error("Unterminated record type. Missing '}'")}return W},"parsePrefix")})}p(mn,"createObjectParslet");function Zo({allowSquaredProperties:n,allowKeyTypes:c,allowReadonly:_,allowOptional:W}){return Tt({name:"objectFieldParslet",precedence:ct.KEY_VALUE,accept:p(ke=>ke===":","accept"),parseInfix:p((ke,Ue)=>{var _t;let Qt=!1,Zt=!1;W&&Ue.type==="JsdocTypeNullable"&&(Qt=!0,Ue=Ue.element),_&&Ue.type==="JsdocTypeReadonlyProperty"&&(Zt=!0,Ue=Ue.element);let ho=(_t=ke.baseParser)!==null&&_t!==void 0?_t:ke;if(ho.acceptLexerState(ke),Ue.type==="JsdocTypeNumber"||Ue.type==="JsdocTypeName"||Ue.type==="JsdocTypeStringValue"||Rn(Ue)){if(Rn(Ue)&&!n)throw new Wt(Ue);ho.consume(":");let zo;Ue.type==="JsdocTypeStringValue"&&(zo=Ue.meta.quote);let Ao=ho.parseType(ct.KEY_VALUE);return ke.acceptLexerState(ho),{type:"JsdocTypeObjectField",key:Rn(Ue)?Ue:Ue.value.toString(),right:Ao,optional:Qt,readonly:Zt,meta:{quote:zo}}}else{if(!c)throw new Wt(Ue);ho.consume(":");let zo=ho.parseType(ct.KEY_VALUE);return ke.acceptLexerState(ho),{type:"JsdocTypeJsdocObjectField",left:Yt(Ue),right:zo}}},"parseInfix")})}p(Zo,"createObjectFieldParslet");function Dn({allowOptional:n,allowVariadic:c}){return Tt({name:"keyValueParslet",precedence:ct.KEY_VALUE,accept:p(_=>_===":","accept"),parseInfix:p((_,W)=>{let ke=!1,Ue=!1;if(n&&W.type==="JsdocTypeNullable"&&(ke=!0,W=W.element),c&&W.type==="JsdocTypeVariadic"&&W.element!==void 0&&(Ue=!0,W=W.element),W.type!=="JsdocTypeName")throw new Wt(W);_.consume(":");let _t=_.parseType(ct.KEY_VALUE);return{type:"JsdocTypeKeyValue",key:W.value,right:_t,optional:ke,variadic:Ue}},"parseInfix")})}p(Dn,"createKeyValueParslet");let fr=[...or,zn({allowWithoutParenthesis:!0,allowNamedParameters:["this","new"],allowNoReturnType:!0,allowNewAsFunctionKeyword:!1}),An,pn({allowedTypes:["module","external","event"],pathGrammar:un}),dn({allowEnclosingBrackets:!0,allowPostfix:!0}),Ro({allowedAdditionalTokens:["keyof"]}),nr,rr,En({allowSquareBracketsOnAnyType:!1,allowJsdocNamePaths:!0,pathGrammar:un})],Mr=[...fr,mn({objectFieldGrammar:[Ro({allowedAdditionalTokens:["module","in"]}),Zo({allowSquaredProperties:!1,allowKeyTypes:!0,allowOptional:!1,allowReadonly:!1}),...fr],allowKeyTypes:!0}),Dn({allowOptional:!0,allowVariadic:!0})],ir=Tt({name:"typeOfParslet",accept:p(n=>n==="typeof","accept"),parsePrefix:p(n=>(n.consume("typeof"),{type:"JsdocTypeTypeof",element:Yt(n.parseType(ct.KEY_OF_TYPE_OF))}),"parsePrefix")}),Jr=[Ro({allowedAdditionalTokens:["module","keyof","event","external","in"]}),xn,ge,An,cn,Zo({allowSquaredProperties:!1,allowKeyTypes:!1,allowOptional:!1,allowReadonly:!1})],kr=[...or,mn({allowKeyTypes:!1,objectFieldGrammar:Jr}),Ro({allowedAdditionalTokens:["event","external","in"]}),ir,zn({allowWithoutParenthesis:!1,allowNamedParameters:["this","new"],allowNoReturnType:!0,allowNewAsFunctionKeyword:!1}),dn({allowEnclosingBrackets:!1,allowPostfix:!1}),Ro({allowedAdditionalTokens:["keyof"]}),pn({allowedTypes:["module"],pathGrammar:un}),En({allowSquareBracketsOnAnyType:!1,allowJsdocNamePaths:!0,pathGrammar:un}),Dn({allowOptional:!1,allowVariadic:!1}),nr],Ur=Tt({name:"assertsParslet",accept:p(n=>n==="asserts","accept"),parsePrefix:p(n=>{n.consume("asserts");let c=n.parseIntermediateType(ct.SYMBOL);if(c.type!=="JsdocTypeName")throw new Wt(c,"A typescript asserts always has to have a name on the left side.");return n.consume("is"),{type:"JsdocTypeAsserts",left:c,right:Yt(n.parseIntermediateType(ct.INFIX))}},"parsePrefix")});function ar({allowQuestionMark:n}){return Tt({name:"tupleParslet",accept:p(c=>c==="[","accept"),parsePrefix:p(c=>{c.consume("[");let _={type:"JsdocTypeTuple",elements:[]};if(c.consume("]"))return _;let W=c.parseIntermediateType(ct.ALL);if(W.type==="JsdocTypeParameterList"?W.elements[0].type==="JsdocTypeKeyValue"?_.elements=W.elements.map(yn):_.elements=W.elements.map(Yt):W.type==="JsdocTypeKeyValue"?_.elements=[yn(W)]:_.elements=[Yt(W)],!c.consume("]"))throw new Error("Unterminated '['");if(!n&&_.elements.some(ke=>ke.type==="JsdocTypeUnknown"))throw new Error("Question mark in tuple not allowed");return _},"parsePrefix")})}p(ar,"createTupleParslet");let _r=Tt({name:"keyOfParslet",accept:p(n=>n==="keyof","accept"),parsePrefix:p(n=>(n.consume("keyof"),{type:"JsdocTypeKeyof",element:Yt(n.parseType(ct.KEY_OF_TYPE_OF))}),"parsePrefix")}),wr=Tt({name:"importParslet",accept:p(n=>n==="import","accept"),parsePrefix:p(n=>{if(n.consume("import"),!n.consume("("))throw new Error("Missing parenthesis after import keyword");let c=n.parseType(ct.PREFIX);if(c.type!=="JsdocTypeStringValue")throw new Error("Only string values are allowed as paths for imports");if(!n.consume(")"))throw new Error("Missing closing parenthesis after import keyword");return{type:"JsdocTypeImport",element:c}},"parsePrefix")}),Vr=Tt({name:"readonlyPropertyParslet",accept:p(n=>n==="readonly","accept"),parsePrefix:p(n=>(n.consume("readonly"),{type:"JsdocTypeReadonlyProperty",element:n.parseType(ct.KEY_VALUE)}),"parsePrefix")}),$r=Tt({name:"arrowFunctionParslet",precedence:ct.ARROW,accept:p(n=>n==="=>","accept"),parseInfix:p((n,c)=>(n.consume("=>"),{type:"JsdocTypeFunction",parameters:jn(c).map(Nn),arrow:!0,constructor:!1,parenthesis:!0,returnType:n.parseType(ct.OBJECT)}),"parseInfix")}),qr=Tt({name:"intersectionParslet",accept:p(n=>n==="&","accept"),precedence:ct.INTERSECTION,parseInfix:p((n,c)=>{n.consume("&");let _=[];do _.push(n.parseType(ct.INTERSECTION));while(n.consume("&"));return{type:"JsdocTypeIntersection",elements:[Yt(c),..._]}},"parseInfix")}),Wr=Tt({name:"predicateParslet",precedence:ct.INFIX,accept:p(n=>n==="is","accept"),parseInfix:p((n,c)=>{if(c.type!=="JsdocTypeName")throw new Wt(c,"A typescript predicate always has to have a name on the left side.");return n.consume("is"),{type:"JsdocTypePredicate",left:c,right:Yt(n.parseIntermediateType(ct.INFIX))}},"parseInfix")}),Gr=Tt({name:"objectSquareBracketPropertyParslet",accept:p(n=>n==="[","accept"),parsePrefix:p(n=>{if(n.baseParser===void 0)throw new Error("Only allowed inside object grammar");n.consume("[");let c=n.lexer.current.text;n.consume("Identifier");let _;if(n.consume(":")){let W=n.baseParser;W.acceptLexerState(n),_={type:"JsdocTypeIndexSignature",key:c,right:W.parseType(ct.INDEX_BRACKETS)},n.acceptLexerState(W)}else if(n.consume("in")){let W=n.baseParser;W.acceptLexerState(n),_={type:"JsdocTypeMappedType",key:c,right:W.parseType(ct.ARRAY_BRACKETS)},n.acceptLexerState(W)}else throw new Error("Missing ':' or 'in' inside square bracketed property.");if(!n.consume("]"))throw new Error("Unterminated square brackets");return _},"parsePrefix")}),yr=[Vr,Ro({allowedAdditionalTokens:["module","event","keyof","event","external","in"]}),xn,ge,An,cn,Zo({allowSquaredProperties:!0,allowKeyTypes:!1,allowOptional:!0,allowReadonly:!0}),Gr],Xr=[...or,mn({allowKeyTypes:!1,objectFieldGrammar:yr}),ir,_r,wr,An,zn({allowWithoutParenthesis:!0,allowNoReturnType:!1,allowNamedParameters:["this","new","args"],allowNewAsFunctionKeyword:!0}),ar({allowQuestionMark:!1}),dn({allowEnclosingBrackets:!1,allowPostfix:!1}),Ur,Ro({allowedAdditionalTokens:["event","external","in"]}),pn({allowedTypes:["module"],pathGrammar:un}),rr,$r,En({allowSquareBracketsOnAnyType:!0,allowJsdocNamePaths:!1,pathGrammar:un}),qr,Wr,Dn({allowVariadic:!0,allowOptional:!0})];function Ln(n,c){switch(c){case"closure":return new Qo(kr,n).parse();case"jsdoc":return new Qo(Mr,n).parse();case"typescript":return new Qo(Xr,n).parse()}}p(Ln,"parse");function xr(n,c=["typescript","closure","jsdoc"]){let _;for(let W of c)try{return Ln(n,W)}catch(ke){_=ke}throw _}p(xr,"tryParse");function bn(n,c){let _=n[c.type];if(_===void 0)throw new Error(`In this set of transform rules exists no rule for type ${c.type}.`);return _(c,W=>bn(n,W))}p(bn,"transform");function uo(n){throw new Error("This transform is not available. Are you trying the correct parsing mode?")}p(uo,"notAvailableTransform");function sr(n){let c={params:[]};for(let _ of n.parameters)_.type==="JsdocTypeKeyValue"?_.key==="this"?c.this=_.right:_.key==="new"?c.new=_.right:c.params.push(_):c.params.push(_);return c}p(sr,"extractSpecialParams");function no(n,c,_){return n==="prefix"?_+c:c+_}p(no,"applyPosition");function To(n,c){switch(c){case"double":return`"${n}"`;case"single":return`'${n}'`;case void 0:return n}}p(To,"quote");function Mn(){return{JsdocTypeParenthesis:p((n,c)=>`(${n.element!==void 0?c(n.element):""})`,"JsdocTypeParenthesis"),JsdocTypeKeyof:p((n,c)=>`keyof ${c(n.element)}`,"JsdocTypeKeyof"),JsdocTypeFunction:p((n,c)=>{if(n.arrow){if(n.returnType===void 0)throw new Error("Arrow function needs a return type.");let _=`(${n.parameters.map(c).join(", ")}) => ${c(n.returnType)}`;return n.constructor&&(_="new "+_),_}else{let _=n.constructor?"new":"function";return n.parenthesis&&(_+=`(${n.parameters.map(c).join(", ")})`,n.returnType!==void 0&&(_+=`: ${c(n.returnType)}`)),_}},"JsdocTypeFunction"),JsdocTypeName:p(n=>n.value,"JsdocTypeName"),JsdocTypeTuple:p((n,c)=>`[${n.elements.map(c).join(", ")}]`,"JsdocTypeTuple"),JsdocTypeVariadic:p((n,c)=>n.meta.position===void 0?"...":no(n.meta.position,c(n.element),"..."),"JsdocTypeVariadic"),JsdocTypeNamePath:p((n,c)=>{let _=c(n.left),W=c(n.right);switch(n.pathType){case"inner":return`${_}~${W}`;case"instance":return`${_}#${W}`;case"property":return`${_}.${W}`;case"property-brackets":return`${_}[${W}]`}},"JsdocTypeNamePath"),JsdocTypeStringValue:p(n=>To(n.value,n.meta.quote),"JsdocTypeStringValue"),JsdocTypeAny:p(()=>"*","JsdocTypeAny"),JsdocTypeGeneric:p((n,c)=>{if(n.meta.brackets==="square"){let _=n.elements[0],W=c(_);return _.type==="JsdocTypeUnion"||_.type==="JsdocTypeIntersection"?`(${W})[]`:`${W}[]`}else return`${c(n.left)}${n.meta.dot?".":""}<${n.elements.map(c).join(", ")}>`},"JsdocTypeGeneric"),JsdocTypeImport:p((n,c)=>`import(${c(n.element)})`,"JsdocTypeImport"),JsdocTypeObjectField:p((n,c)=>{let _="";return n.readonly&&(_+="readonly "),typeof n.key=="string"?_+=To(n.key,n.meta.quote):_+=c(n.key),n.optional&&(_+="?"),n.right===void 0?_:_+`: ${c(n.right)}`},"JsdocTypeObjectField"),JsdocTypeJsdocObjectField:p((n,c)=>`${c(n.left)}: ${c(n.right)}`,"JsdocTypeJsdocObjectField"),JsdocTypeKeyValue:p((n,c)=>{let _=n.key;return n.optional&&(_+="?"),n.variadic&&(_="..."+_),n.right===void 0?_:_+`: ${c(n.right)}`},"JsdocTypeKeyValue"),JsdocTypeSpecialNamePath:p(n=>`${n.specialType}:${To(n.value,n.meta.quote)}`,"JsdocTypeSpecialNamePath"),JsdocTypeNotNullable:p((n,c)=>no(n.meta.position,c(n.element),"!"),"JsdocTypeNotNullable"),JsdocTypeNull:p(()=>"null","JsdocTypeNull"),JsdocTypeNullable:p((n,c)=>no(n.meta.position,c(n.element),"?"),"JsdocTypeNullable"),JsdocTypeNumber:p(n=>n.value.toString(),"JsdocTypeNumber"),JsdocTypeObject:p((n,c)=>`{${n.elements.map(c).join((n.meta.separator==="comma"?",":";")+" ")}}`,"JsdocTypeObject"),JsdocTypeOptional:p((n,c)=>no(n.meta.position,c(n.element),"="),"JsdocTypeOptional"),JsdocTypeSymbol:p((n,c)=>`${n.value}(${n.element!==void 0?c(n.element):""})`,"JsdocTypeSymbol"),JsdocTypeTypeof:p((n,c)=>`typeof ${c(n.element)}`,"JsdocTypeTypeof"),JsdocTypeUndefined:p(()=>"undefined","JsdocTypeUndefined"),JsdocTypeUnion:p((n,c)=>n.elements.map(c).join(" | "),"JsdocTypeUnion"),JsdocTypeUnknown:p(()=>"?","JsdocTypeUnknown"),JsdocTypeIntersection:p((n,c)=>n.elements.map(c).join(" & "),"JsdocTypeIntersection"),JsdocTypeProperty:p(n=>To(n.value,n.meta.quote),"JsdocTypeProperty"),JsdocTypePredicate:p((n,c)=>`${c(n.left)} is ${c(n.right)}`,"JsdocTypePredicate"),JsdocTypeIndexSignature:p((n,c)=>`[${n.key}: ${c(n.right)}]`,"JsdocTypeIndexSignature"),JsdocTypeMappedType:p((n,c)=>`[${n.key} in ${c(n.right)}]`,"JsdocTypeMappedType"),JsdocTypeAsserts:p((n,c)=>`asserts ${c(n.left)} is ${c(n.right)}`,"JsdocTypeAsserts")}}p(Mn,"stringifyRules");let Jn=Mn();function lr(n){return bn(Jn,n)}p(lr,"stringify");let Kr=["null","true","false","break","case","catch","class","const","continue","debugger","default","delete","do","else","export","extends","finally","for","function","if","import","in","instanceof","new","return","super","switch","this","throw","try","typeof","var","void","while","with","yield"];function Bo(n){let c={type:"NameExpression",name:n};return Kr.includes(n)&&(c.reservedWord=!0),c}p(Bo,"makeName");let Hr={JsdocTypeOptional:p((n,c)=>{let _=c(n.element);return _.optional=!0,_},"JsdocTypeOptional"),JsdocTypeNullable:p((n,c)=>{let _=c(n.element);return _.nullable=!0,_},"JsdocTypeNullable"),JsdocTypeNotNullable:p((n,c)=>{let _=c(n.element);return _.nullable=!1,_},"JsdocTypeNotNullable"),JsdocTypeVariadic:p((n,c)=>{if(n.element===void 0)throw new Error("dots without value are not allowed in catharsis mode");let _=c(n.element);return _.repeatable=!0,_},"JsdocTypeVariadic"),JsdocTypeAny:p(()=>({type:"AllLiteral"}),"JsdocTypeAny"),JsdocTypeNull:p(()=>({type:"NullLiteral"}),"JsdocTypeNull"),JsdocTypeStringValue:p(n=>Bo(To(n.value,n.meta.quote)),"JsdocTypeStringValue"),JsdocTypeUndefined:p(()=>({type:"UndefinedLiteral"}),"JsdocTypeUndefined"),JsdocTypeUnknown:p(()=>({type:"UnknownLiteral"}),"JsdocTypeUnknown"),JsdocTypeFunction:p((n,c)=>{let _=sr(n),W={type:"FunctionType",params:_.params.map(c)};return _.this!==void 0&&(W.this=c(_.this)),_.new!==void 0&&(W.new=c(_.new)),n.returnType!==void 0&&(W.result=c(n.returnType)),W},"JsdocTypeFunction"),JsdocTypeGeneric:p((n,c)=>({type:"TypeApplication",applications:n.elements.map(_=>c(_)),expression:c(n.left)}),"JsdocTypeGeneric"),JsdocTypeSpecialNamePath:p(n=>Bo(n.specialType+":"+To(n.value,n.meta.quote)),"JsdocTypeSpecialNamePath"),JsdocTypeName:p(n=>n.value!=="function"?Bo(n.value):{type:"FunctionType",params:[]},"JsdocTypeName"),JsdocTypeNumber:p(n=>Bo(n.value.toString()),"JsdocTypeNumber"),JsdocTypeObject:p((n,c)=>{let _={type:"RecordType",fields:[]};for(let W of n.elements)W.type!=="JsdocTypeObjectField"&&W.type!=="JsdocTypeJsdocObjectField"?_.fields.push({type:"FieldType",key:c(W),value:void 0}):_.fields.push(c(W));return _},"JsdocTypeObject"),JsdocTypeObjectField:p((n,c)=>{if(typeof n.key!="string")throw new Error("Index signatures and mapped types are not supported");return{type:"FieldType",key:Bo(To(n.key,n.meta.quote)),value:n.right===void 0?void 0:c(n.right)}},"JsdocTypeObjectField"),JsdocTypeJsdocObjectField:p((n,c)=>({type:"FieldType",key:c(n.left),value:c(n.right)}),"JsdocTypeJsdocObjectField"),JsdocTypeUnion:p((n,c)=>({type:"TypeUnion",elements:n.elements.map(_=>c(_))}),"JsdocTypeUnion"),JsdocTypeKeyValue:p((n,c)=>({type:"FieldType",key:Bo(n.key),value:n.right===void 0?void 0:c(n.right)}),"JsdocTypeKeyValue"),JsdocTypeNamePath:p((n,c)=>{let _=c(n.left),W;n.right.type==="JsdocTypeSpecialNamePath"?W=c(n.right).name:W=To(n.right.value,n.right.meta.quote);let ke=n.pathType==="inner"?"~":n.pathType==="instance"?"#":".";return Bo(`${_.name}${ke}${W}`)},"JsdocTypeNamePath"),JsdocTypeSymbol:p(n=>{let c="",_=n.element,W=!1;return _?.type==="JsdocTypeVariadic"&&(_.meta.position==="prefix"?c="...":W=!0,_=_.element),_?.type==="JsdocTypeName"?c+=_.value:_?.type==="JsdocTypeNumber"&&(c+=_.value.toString()),W&&(c+="..."),Bo(`${n.value}(${c})`)},"JsdocTypeSymbol"),JsdocTypeParenthesis:p((n,c)=>c(Yt(n.element)),"JsdocTypeParenthesis"),JsdocTypeMappedType:uo,JsdocTypeIndexSignature:uo,JsdocTypeImport:uo,JsdocTypeKeyof:uo,JsdocTypeTuple:uo,JsdocTypeTypeof:uo,JsdocTypeIntersection:uo,JsdocTypeProperty:uo,JsdocTypePredicate:uo,JsdocTypeAsserts:uo};function vr(n){return bn(Hr,n)}p(vr,"catharsisTransform");function Jo(n){switch(n){case void 0:return"none";case"single":return"single";case"double":return"double"}}p(Jo,"getQuoteStyle");function Un(n){switch(n){case"inner":return"INNER_MEMBER";case"instance":return"INSTANCE_MEMBER";case"property":return"MEMBER";case"property-brackets":return"MEMBER"}}p(Un,"getMemberType");function Vn(n,c){return c.length===2?{type:n,left:c[0],right:c[1]}:{type:n,left:c[0],right:Vn(n,c.slice(1))}}p(Vn,"nestResults");let Yr={JsdocTypeOptional:p((n,c)=>({type:"OPTIONAL",value:c(n.element),meta:{syntax:n.meta.position==="prefix"?"PREFIX_EQUAL_SIGN":"SUFFIX_EQUALS_SIGN"}}),"JsdocTypeOptional"),JsdocTypeNullable:p((n,c)=>({type:"NULLABLE",value:c(n.element),meta:{syntax:n.meta.position==="prefix"?"PREFIX_QUESTION_MARK":"SUFFIX_QUESTION_MARK"}}),"JsdocTypeNullable"),JsdocTypeNotNullable:p((n,c)=>({type:"NOT_NULLABLE",value:c(n.element),meta:{syntax:n.meta.position==="prefix"?"PREFIX_BANG":"SUFFIX_BANG"}}),"JsdocTypeNotNullable"),JsdocTypeVariadic:p((n,c)=>{let _={type:"VARIADIC",meta:{syntax:n.meta.position==="prefix"?"PREFIX_DOTS":n.meta.position==="suffix"?"SUFFIX_DOTS":"ONLY_DOTS"}};return n.element!==void 0&&(_.value=c(n.element)),_},"JsdocTypeVariadic"),JsdocTypeName:p(n=>({type:"NAME",name:n.value}),"JsdocTypeName"),JsdocTypeTypeof:p((n,c)=>({type:"TYPE_QUERY",name:c(n.element)}),"JsdocTypeTypeof"),JsdocTypeTuple:p((n,c)=>({type:"TUPLE",entries:n.elements.map(c)}),"JsdocTypeTuple"),JsdocTypeKeyof:p((n,c)=>({type:"KEY_QUERY",value:c(n.element)}),"JsdocTypeKeyof"),JsdocTypeImport:p(n=>({type:"IMPORT",path:{type:"STRING_VALUE",quoteStyle:Jo(n.element.meta.quote),string:n.element.value}}),"JsdocTypeImport"),JsdocTypeUndefined:p(()=>({type:"NAME",name:"undefined"}),"JsdocTypeUndefined"),JsdocTypeAny:p(()=>({type:"ANY"}),"JsdocTypeAny"),JsdocTypeFunction:p((n,c)=>{let _=sr(n),W={type:n.arrow?"ARROW":"FUNCTION",params:_.params.map(ke=>{if(ke.type==="JsdocTypeKeyValue"){if(ke.right===void 0)throw new Error("Function parameter without ':' is not expected to be 'KEY_VALUE'");return{type:"NAMED_PARAMETER",name:ke.key,typeName:c(ke.right)}}else return c(ke)}),new:null,returns:null};return _.this!==void 0?W.this=c(_.this):n.arrow||(W.this=null),_.new!==void 0&&(W.new=c(_.new)),n.returnType!==void 0&&(W.returns=c(n.returnType)),W},"JsdocTypeFunction"),JsdocTypeGeneric:p((n,c)=>{let _={type:"GENERIC",subject:c(n.left),objects:n.elements.map(c),meta:{syntax:n.meta.brackets==="square"?"SQUARE_BRACKET":n.meta.dot?"ANGLE_BRACKET_WITH_DOT":"ANGLE_BRACKET"}};return n.meta.brackets==="square"&&n.elements[0].type==="JsdocTypeFunction"&&!n.elements[0].parenthesis&&(_.objects[0]={type:"NAME",name:"function"}),_},"JsdocTypeGeneric"),JsdocTypeObjectField:p((n,c)=>{if(typeof n.key!="string")throw new Error("Index signatures and mapped types are not supported");if(n.right===void 0)return{type:"RECORD_ENTRY",key:n.key,quoteStyle:Jo(n.meta.quote),value:null,readonly:!1};let _=c(n.right);return n.optional&&(_={type:"OPTIONAL",value:_,meta:{syntax:"SUFFIX_KEY_QUESTION_MARK"}}),{type:"RECORD_ENTRY",key:n.key.toString(),quoteStyle:Jo(n.meta.quote),value:_,readonly:!1}},"JsdocTypeObjectField"),JsdocTypeJsdocObjectField:p(()=>{throw new Error("Keys may not be typed in jsdoctypeparser.")},"JsdocTypeJsdocObjectField"),JsdocTypeKeyValue:p((n,c)=>{if(n.right===void 0)return{type:"RECORD_ENTRY",key:n.key,quoteStyle:"none",value:null,readonly:!1};let _=c(n.right);return n.optional&&(_={type:"OPTIONAL",value:_,meta:{syntax:"SUFFIX_KEY_QUESTION_MARK"}}),{type:"RECORD_ENTRY",key:n.key,quoteStyle:"none",value:_,readonly:!1}},"JsdocTypeKeyValue"),JsdocTypeObject:p((n,c)=>{let _=[];for(let W of n.elements)(W.type==="JsdocTypeObjectField"||W.type==="JsdocTypeJsdocObjectField")&&_.push(c(W));return{type:"RECORD",entries:_}},"JsdocTypeObject"),JsdocTypeSpecialNamePath:p(n=>{if(n.specialType!=="module")throw new Error(`jsdoctypeparser does not support type ${n.specialType} at this point.`);return{type:"MODULE",value:{type:"FILE_PATH",quoteStyle:Jo(n.meta.quote),path:n.value}}},"JsdocTypeSpecialNamePath"),JsdocTypeNamePath:p((n,c)=>{let _=!1,W,ke;n.right.type==="JsdocTypeSpecialNamePath"&&n.right.specialType==="event"?(_=!0,W=n.right.value,ke=Jo(n.right.meta.quote)):(W=n.right.value,ke=Jo(n.right.meta.quote));let Ue={type:Un(n.pathType),owner:c(n.left),name:W,quoteStyle:ke,hasEventPrefix:_};if(Ue.owner.type==="MODULE"){let _t=Ue.owner;return Ue.owner=Ue.owner.value,_t.value=Ue,_t}else return Ue},"JsdocTypeNamePath"),JsdocTypeUnion:p((n,c)=>Vn("UNION",n.elements.map(c)),"JsdocTypeUnion"),JsdocTypeParenthesis:p((n,c)=>({type:"PARENTHESIS",value:c(Yt(n.element))}),"JsdocTypeParenthesis"),JsdocTypeNull:p(()=>({type:"NAME",name:"null"}),"JsdocTypeNull"),JsdocTypeUnknown:p(()=>({type:"UNKNOWN"}),"JsdocTypeUnknown"),JsdocTypeStringValue:p(n=>({type:"STRING_VALUE",quoteStyle:Jo(n.meta.quote),string:n.value}),"JsdocTypeStringValue"),JsdocTypeIntersection:p((n,c)=>Vn("INTERSECTION",n.elements.map(c)),"JsdocTypeIntersection"),JsdocTypeNumber:p(n=>({type:"NUMBER_VALUE",number:n.value.toString()}),"JsdocTypeNumber"),JsdocTypeSymbol:uo,JsdocTypeProperty:uo,JsdocTypePredicate:uo,JsdocTypeMappedType:uo,JsdocTypeIndexSignature:uo,JsdocTypeAsserts:uo};function Er(n){return bn(Yr,n)}p(Er,"jtpTransform");function Ar(){return{JsdocTypeIntersection:p((n,c)=>({type:"JsdocTypeIntersection",elements:n.elements.map(c)}),"JsdocTypeIntersection"),JsdocTypeGeneric:p((n,c)=>({type:"JsdocTypeGeneric",left:c(n.left),elements:n.elements.map(c),meta:{dot:n.meta.dot,brackets:n.meta.brackets}}),"JsdocTypeGeneric"),JsdocTypeNullable:p(n=>n,"JsdocTypeNullable"),JsdocTypeUnion:p((n,c)=>({type:"JsdocTypeUnion",elements:n.elements.map(c)}),"JsdocTypeUnion"),JsdocTypeUnknown:p(n=>n,"JsdocTypeUnknown"),JsdocTypeUndefined:p(n=>n,"JsdocTypeUndefined"),JsdocTypeTypeof:p((n,c)=>({type:"JsdocTypeTypeof",element:c(n.element)}),"JsdocTypeTypeof"),JsdocTypeSymbol:p((n,c)=>{let _={type:"JsdocTypeSymbol",value:n.value};return n.element!==void 0&&(_.element=c(n.element)),_},"JsdocTypeSymbol"),JsdocTypeOptional:p((n,c)=>({type:"JsdocTypeOptional",element:c(n.element),meta:{position:n.meta.position}}),"JsdocTypeOptional"),JsdocTypeObject:p((n,c)=>({type:"JsdocTypeObject",meta:{separator:"comma"},elements:n.elements.map(c)}),"JsdocTypeObject"),JsdocTypeNumber:p(n=>n,"JsdocTypeNumber"),JsdocTypeNull:p(n=>n,"JsdocTypeNull"),JsdocTypeNotNullable:p((n,c)=>({type:"JsdocTypeNotNullable",element:c(n.element),meta:{position:n.meta.position}}),"JsdocTypeNotNullable"),JsdocTypeSpecialNamePath:p(n=>n,"JsdocTypeSpecialNamePath"),JsdocTypeObjectField:p((n,c)=>({type:"JsdocTypeObjectField",key:n.key,right:n.right===void 0?void 0:c(n.right),optional:n.optional,readonly:n.readonly,meta:n.meta}),"JsdocTypeObjectField"),JsdocTypeJsdocObjectField:p((n,c)=>({type:"JsdocTypeJsdocObjectField",left:c(n.left),right:c(n.right)}),"JsdocTypeJsdocObjectField"),JsdocTypeKeyValue:p((n,c)=>({type:"JsdocTypeKeyValue",key:n.key,right:n.right===void 0?void 0:c(n.right),optional:n.optional,variadic:n.variadic}),"JsdocTypeKeyValue"),JsdocTypeImport:p((n,c)=>({type:"JsdocTypeImport",element:c(n.element)}),"JsdocTypeImport"),JsdocTypeAny:p(n=>n,"JsdocTypeAny"),JsdocTypeStringValue:p(n=>n,"JsdocTypeStringValue"),JsdocTypeNamePath:p(n=>n,"JsdocTypeNamePath"),JsdocTypeVariadic:p((n,c)=>{let _={type:"JsdocTypeVariadic",meta:{position:n.meta.position,squareBrackets:n.meta.squareBrackets}};return n.element!==void 0&&(_.element=c(n.element)),_},"JsdocTypeVariadic"),JsdocTypeTuple:p((n,c)=>({type:"JsdocTypeTuple",elements:n.elements.map(c)}),"JsdocTypeTuple"),JsdocTypeName:p(n=>n,"JsdocTypeName"),JsdocTypeFunction:p((n,c)=>{let _={type:"JsdocTypeFunction",arrow:n.arrow,parameters:n.parameters.map(c),constructor:n.constructor,parenthesis:n.parenthesis};return n.returnType!==void 0&&(_.returnType=c(n.returnType)),_},"JsdocTypeFunction"),JsdocTypeKeyof:p((n,c)=>({type:"JsdocTypeKeyof",element:c(n.element)}),"JsdocTypeKeyof"),JsdocTypeParenthesis:p((n,c)=>({type:"JsdocTypeParenthesis",element:c(n.element)}),"JsdocTypeParenthesis"),JsdocTypeProperty:p(n=>n,"JsdocTypeProperty"),JsdocTypePredicate:p((n,c)=>({type:"JsdocTypePredicate",left:c(n.left),right:c(n.right)}),"JsdocTypePredicate"),JsdocTypeIndexSignature:p((n,c)=>({type:"JsdocTypeIndexSignature",key:n.key,right:c(n.right)}),"JsdocTypeIndexSignature"),JsdocTypeMappedType:p((n,c)=>({type:"JsdocTypeMappedType",key:n.key,right:c(n.right)}),"JsdocTypeMappedType"),JsdocTypeAsserts:p((n,c)=>({type:"JsdocTypeAsserts",left:c(n.left),right:c(n.right)}),"JsdocTypeAsserts")}}p(Ar,"identityTransformRules");let $n={JsdocTypeAny:[],JsdocTypeFunction:["parameters","returnType"],JsdocTypeGeneric:["left","elements"],JsdocTypeImport:[],JsdocTypeIndexSignature:["right"],JsdocTypeIntersection:["elements"],JsdocTypeKeyof:["element"],JsdocTypeKeyValue:["right"],JsdocTypeMappedType:["right"],JsdocTypeName:[],JsdocTypeNamePath:["left","right"],JsdocTypeNotNullable:["element"],JsdocTypeNull:[],JsdocTypeNullable:["element"],JsdocTypeNumber:[],JsdocTypeObject:["elements"],JsdocTypeObjectField:["right"],JsdocTypeJsdocObjectField:["left","right"],JsdocTypeOptional:["element"],JsdocTypeParenthesis:["element"],JsdocTypeSpecialNamePath:[],JsdocTypeStringValue:[],JsdocTypeSymbol:["element"],JsdocTypeTuple:["elements"],JsdocTypeTypeof:["element"],JsdocTypeUndefined:[],JsdocTypeUnion:["elements"],JsdocTypeUnknown:[],JsdocTypeVariadic:["element"],JsdocTypeProperty:[],JsdocTypePredicate:["left","right"],JsdocTypeAsserts:["left","right"]};function Cn(n,c,_,W,ke){W?.(n,c,_);let Ue=$n[n.type];for(let _t of Ue){let Qt=n[_t];if(Qt!==void 0)if(Array.isArray(Qt))for(let Zt of Qt)Cn(Zt,n,_t,W,ke);else Cn(Qt,n,_t,W,ke)}ke?.(n,c,_)}p(Cn,"_traverse");function cr(n,c,_){Cn(n,void 0,void 0,c,_)}p(cr,"traverse"),N.catharsisTransform=vr,N.identityTransformRules=Ar,N.jtpTransform=Er,N.parse=Ln,N.stringify=lr,N.stringifyRules=Mn,N.transform=bn,N.traverse=cr,N.tryParse=xr,N.visitorKeys=$n})}),he=p(m=>m.name==="literal","isLiteral"),De=p(m=>m.value.replace(/['|"]/g,""),"toEnumOption"),ze=p(m=>{switch(m.type){case"function":return{name:"function"};case"object":let w={};return m.signature.properties.forEach(N=>{w[N.key]=Le(N.value)}),{name:"object",value:w};default:throw new nt.UnknownArgTypesError({type:m,language:"Flow"})}},"convertSig"),Le=p(m=>{let{name:w,raw:N}=m,ee={};switch(typeof N<"u"&&(ee.raw=N),m.name){case"literal":return{...ee,name:"other",value:m.value};case"string":case"number":case"symbol":case"boolean":return{...ee,name:w};case"Array":return{...ee,name:"array",value:m.elements.map(Le)};case"signature":return{...ee,...ze(m)};case"union":return m.elements?.every(he)?{...ee,name:"enum",value:m.elements?.map(De)}:{...ee,name:w,value:m.elements?.map(Le)};case"intersection":return{...ee,name:w,value:m.elements?.map(Le)};default:return{...ee,name:"other",value:w}}},"convert");function et(m){if(!m||typeof m!="object")return!1;let w=Object.getPrototypeOf(m);return w===null||w===Object.prototype||Object.getPrototypeOf(w)===null?Object.prototype.toString.call(m)==="[object Object]":!1}p(et,"isPlainObject");function kt(m,w){let N={},ee=Object.keys(m);for(let q=0;q<ee.length;q++){let de=ee[q],Ve=m[de];N[de]=w(Ve,de,m)}return N}p(kt,"mapValues");var $t=/^['"]|['"]$/g,xt=p(m=>m.replace($t,""),"trimQuotes"),We=p(m=>$t.test(m),"includesQuotes"),tt=p(m=>{let w=xt(m);return We(m)||Number.isNaN(Number(w))?w:Number(w)},"parseLiteral"),Ne=/^\(.*\) => /,wt=p(m=>{let{name:w,raw:N,computed:ee,value:q}=m,de={};switch(typeof N<"u"&&(de.raw=N),w){case"enum":{let Se=ee?q:q.map(vt=>tt(vt.value));return{...de,name:w,value:Se}}case"string":case"number":case"symbol":return{...de,name:w};case"func":return{...de,name:"function"};case"bool":case"boolean":return{...de,name:"boolean"};case"arrayOf":case"array":return{...de,name:"array",value:q&&wt(q)};case"object":return{...de,name:w};case"objectOf":return{...de,name:w,value:wt(q)};case"shape":case"exact":let Ve=kt(q,Se=>wt(Se));return{...de,name:"object",value:Ve};case"union":return{...de,name:"union",value:q.map(Se=>wt(Se))};case"instanceOf":case"element":case"elementType":default:{if(w?.indexOf("|")>0)try{let Wt=w.split("|").map(ht=>JSON.parse(ht));return{...de,name:"enum",value:Wt}}catch{}let Se=q?`${w}(${q})`:w,vt=Ne.test(w)?"function":"other";return{...de,name:vt,value:Se}}}},"convert"),Bt=p(m=>{switch(m.type){case"function":return{name:"function"};case"object":let w={};return m.signature.properties.forEach(N=>{w[N.key]=Oe(N.value)}),{name:"object",value:w};default:throw new nt.UnknownArgTypesError({type:m,language:"Typescript"})}},"convertSig"),Oe=p(m=>{let{name:w,raw:N}=m,ee={};switch(typeof N<"u"&&(ee.raw=N),m.name){case"string":case"number":case"symbol":case"boolean":return{...ee,name:w};case"Array":return{...ee,name:"array",value:m.elements.map(Oe)};case"signature":return{...ee,...Bt(m)};case"union":let q;return m.elements?.every(de=>de.name==="literal")?q={...ee,name:"enum",value:m.elements?.map(de=>tt(de.value))}:q={...ee,name:w,value:m.elements?.map(Oe)},q;case"intersection":return{...ee,name:w,value:m.elements?.map(Oe)};default:return{...ee,name:"other",value:w}}},"convert"),ae=p(m=>{let{type:w,tsType:N,flowType:ee}=m;try{if(w!=null)return wt(w);if(N!=null)return Oe(N);if(ee!=null)return Le(ee)}catch(q){console.error(q)}return null},"convert"),ve=(m=>(m.JAVASCRIPT="JavaScript",m.FLOW="Flow",m.TYPESCRIPT="TypeScript",m.UNKNOWN="Unknown",m))(ve||{}),Be=["null","undefined"];function Qe(m){return Be.some(w=>w===m)}p(Qe,"isDefaultValueBlacklisted");var At=p(m=>{if(!m)return"";if(typeof m=="string")return m;throw new Error(`Description: expected string, got: ${JSON.stringify(m)}`)},"str");function Pe(m){return!!m.__docgenInfo}p(Pe,"hasDocgen");function jt(m){return m!=null&&Object.keys(m).length>0}p(jt,"isValidDocgenSection");function it(m,w){return Pe(m)?m.__docgenInfo[w]:null}p(it,"getDocgenSection");function Ge(m){return Pe(m)?At(m.__docgenInfo.description):""}p(Ge,"getDocgenDescription");var B;(function(m){m.start="/**",m.nostart="/***",m.delim="*",m.end="*/"})(B=B||(B={}));function ie(m){return/^\s+$/.test(m)}p(ie,"isSpace");function ot(m){let w=m.match(/\r+$/);return w==null?["",m]:[m.slice(-w[0].length),m.slice(0,-w[0].length)]}p(ot,"splitCR");function Ie(m){let w=m.match(/^\s+/);return w==null?["",m]:[m.slice(0,w[0].length),m.slice(w[0].length)]}p(Ie,"splitSpace");function lt(m){return m.split(/\n/)}p(lt,"splitLines");function dt(m={}){return Object.assign({tag:"",name:"",type:"",optional:!1,description:"",problems:[],source:[]},m)}p(dt,"seedSpec");function Pt(m={}){return Object.assign({start:"",delimiter:"",postDelimiter:"",tag:"",postTag:"",name:"",postName:"",type:"",postType:"",description:"",end:"",lineEnd:""},m)}p(Pt,"seedTokens");var It=/^@\S+/;function Jt({fence:m="```"}={}){let w=io(m),N=p((ee,q)=>w(ee)?!q:q,"toggleFence");return p(function(ee){let q=[[]],de=!1;for(let Ve of ee)It.test(Ve.tokens.description)&&!de?q.push([Ve]):q[q.length-1].push(Ve),de=N(Ve.tokens.description,de);return q},"parseBlock")}p(Jt,"getParser");function io(m){return typeof m=="string"?w=>w.split(m).length%2===0:m}p(io,"getFencer");function Po({startLine:m=0,markers:w=B}={}){let N=null,ee=m;return p(function(q){let de=q,Ve=Pt();if([Ve.lineEnd,de]=ot(de),[Ve.start,de]=Ie(de),N===null&&de.startsWith(w.start)&&!de.startsWith(w.nostart)&&(N=[],Ve.delimiter=de.slice(0,w.start.length),de=de.slice(w.start.length),[Ve.postDelimiter,de]=Ie(de)),N===null)return ee++,null;let Se=de.trimRight().endsWith(w.end);if(Ve.delimiter===""&&de.startsWith(w.delim)&&!de.startsWith(w.end)&&(Ve.delimiter=w.delim,de=de.slice(w.delim.length),[Ve.postDelimiter,de]=Ie(de)),Se){let vt=de.trimRight();Ve.end=de.slice(vt.length-w.end.length),de=vt.slice(0,-w.end.length)}if(Ve.description=de,N.push({number:ee,source:q,tokens:Ve}),ee++,Se){let vt=N.slice();return N=null,vt}return null},"parseSource")}p(Po,"getParser");function qo({tokenizers:m}){return p(function(w){var N;let ee=dt({source:w});for(let q of m)if(ee=q(ee),!((N=ee.problems[ee.problems.length-1])===null||N===void 0)&&N.critical)break;return ee},"parseSpec")}p(qo,"getParser");function Wo(){return m=>{let{tokens:w}=m.source[0],N=w.description.match(/\s*(@(\S+))(\s*)/);return N===null?(m.problems.push({code:"spec:tag:prefix",message:'tag should start with "@" symbol',line:m.source[0].number,critical:!0}),m):(w.tag=N[1],w.postTag=N[3],w.description=w.description.slice(N[0].length),m.tag=N[2],m)}}p(Wo,"tagTokenizer");function Lo(m="compact"){let w=Io(m);return N=>{let ee=0,q=[];for(let[Se,{tokens:vt}]of N.source.entries()){let Wt="";if(Se===0&&vt.description[0]!=="{")return N;for(let ht of vt.description)if(ht==="{"&&ee++,ht==="}"&&ee--,Wt+=ht,ee===0)break;if(q.push([vt,Wt]),ee===0)break}if(ee!==0)return N.problems.push({code:"spec:type:unpaired-curlies",message:"unpaired curlies",line:N.source[0].number,critical:!0}),N;let de=[],Ve=q[0][0].postDelimiter.length;for(let[Se,[vt,Wt]]of q.entries())vt.type=Wt,Se>0&&(vt.type=vt.postDelimiter.slice(Ve)+Wt,vt.postDelimiter=vt.postDelimiter.slice(0,Ve)),[vt.postType,vt.description]=Ie(vt.description.slice(Wt.length)),de.push(vt.type);return de[0]=de[0].slice(1),de[de.length-1]=de[de.length-1].slice(0,-1),N.type=w(de),N}}p(Lo,"typeTokenizer");var hn=p(m=>m.trim(),"trim");function Io(m){return m==="compact"?w=>w.map(hn).join(""):m==="preserve"?w=>w.join(`
`):m}p(Io,"getJoiner");var Mo=p(m=>m&&m.startsWith('"')&&m.endsWith('"'),"isQuoted");function wo(){let m=p((w,{tokens:N},ee)=>N.type===""?w:ee,"typeEnd");return w=>{let{tokens:N}=w.source[w.source.reduce(m,0)],ee=N.description.trimLeft(),q=ee.split('"');if(q.length>1&&q[0]===""&&q.length%2===1)return w.name=q[1],N.name=`"${q[1]}"`,[N.postName,N.description]=Ie(ee.slice(N.name.length)),w;let de=0,Ve="",Se=!1,vt;for(let ht of ee){if(de===0&&ie(ht))break;ht==="["&&de++,ht==="]"&&de--,Ve+=ht}if(de!==0)return w.problems.push({code:"spec:name:unpaired-brackets",message:"unpaired brackets",line:w.source[0].number,critical:!0}),w;let Wt=Ve;if(Ve[0]==="["&&Ve[Ve.length-1]==="]"){Se=!0,Ve=Ve.slice(1,-1);let ht=Ve.split("=");if(Ve=ht[0].trim(),ht[1]!==void 0&&(vt=ht.slice(1).join("=").trim()),Ve==="")return w.problems.push({code:"spec:name:empty-name",message:"empty name",line:w.source[0].number,critical:!0}),w;if(vt==="")return w.problems.push({code:"spec:name:empty-default",message:"empty default value",line:w.source[0].number,critical:!0}),w;if(!Mo(vt)&&/=(?!>)/.test(vt))return w.problems.push({code:"spec:name:invalid-default",message:"invalid default value syntax",line:w.source[0].number,critical:!0}),w}return w.optional=Se,w.name=Ve,N.name=Wt,vt!==void 0&&(w.default=vt),[N.postName,N.description]=Ie(ee.slice(N.name.length)),w}}p(wo,"nameTokenizer");function Go(m="compact",w=B){let N=Xo(m);return ee=>(ee.description=N(ee.source,w),ee)}p(Go,"descriptionTokenizer");function Xo(m){return m==="compact"?Co:m==="preserve"?Ko:m}p(Xo,"getJoiner");function Co(m,w=B){return m.map(({tokens:{description:N}})=>N.trim()).filter(N=>N!=="").join(" ")}p(Co,"compactJoiner");var Oo=p((m,{tokens:w},N)=>w.type===""?m:N,"lineNo"),on=p(({tokens:m})=>(m.delimiter===""?m.start:m.postDelimiter.slice(1))+m.description,"getDescription");function Ko(m,w=B){if(m.length===0)return"";m[0].tokens.description===""&&m[0].tokens.delimiter===w.start&&(m=m.slice(1));let N=m[m.length-1];return N!==void 0&&N.tokens.description===""&&N.tokens.end.endsWith(w.end)&&(m=m.slice(0,-1)),m=m.slice(m.reduce(Oo,0)),m.map(on).join(`
`)}p(Ko,"preserveJoiner");function Fo({startLine:m=0,fence:w="```",spacing:N="compact",markers:ee=B,tokenizers:q=[Wo(),Lo(N),wo(),Go(N)]}={}){if(m<0||m%1>0)throw new Error("Invalid startLine");let de=Po({startLine:m,markers:ee}),Ve=Jt({fence:w}),Se=qo({tokenizers:q}),vt=Xo(N);return function(Wt){let ht=[];for(let On of lt(Wt)){let fn=de(On);if(fn===null)continue;let kn=Ve(fn),_n=kn.slice(1).map(Se);ht.push({description:vt(kn[0],ee),tags:_n,source:fn,problems:_n.reduce((Yn,an)=>Yn.concat(an.problems),[])})}return ht}}p(Fo,"getParser");function So(m){return m.start+m.delimiter+m.postDelimiter+m.tag+m.postTag+m.type+m.postType+m.name+m.postName+m.description+m.end+m.lineEnd}p(So,"join");function xo(){return m=>m.source.map(({tokens:w})=>So(w)).join(`
`)}p(xo,"getStringifier");var Ho={line:0,start:0,delimiter:0,postDelimiter:0,tag:0,postTag:0,name:0,postName:0,type:0,postType:0,description:0,end:0,lineEnd:0},Yo=Object.keys(Ho);function y(m,w={}){return Fo(w)(m)}p(y,"parse");var T=xo(),ce=yt(He(),1);function se(m){return m!=null&&m.includes("@")}p(se,"containsJsDoc");function mt(m){let w=`/**
`+(m??"").split(`
`).map(ee=>` * ${ee}`).join(`
`)+`
*/`,N=y(w,{spacing:"preserve"});if(!N||N.length===0)throw new Error("Cannot parse JSDoc tags.");return N[0]}p(mt,"parse");var s={tags:["param","arg","argument","returns","ignore","deprecated"]},M=p((m,w=s)=>{if(!se(m))return{includesJsDoc:!1,ignore:!1};let N=mt(m),ee=I(N,w.tags);return ee.ignore?{includesJsDoc:!0,ignore:!0}:{includesJsDoc:!0,ignore:!1,description:N.description.trim(),extractedTags:ee}},"parseJsDoc");function I(m,w){let N={params:null,deprecated:null,returns:null,ignore:!1};for(let ee of m.tags)if(!(w!==void 0&&!w.includes(ee.tag)))if(ee.tag==="ignore"){N.ignore=!0;break}else switch(ee.tag){case"param":case"arg":case"argument":{let q=P(ee);q!=null&&(N.params==null&&(N.params=[]),N.params.push(q));break}case"deprecated":{let q=R(ee);q!=null&&(N.deprecated=q);break}case"returns":{let q=v(ee);q!=null&&(N.returns=q);break}default:break}return N}p(I,"extractJsDocTags");function C(m){return m.replace(/[\.-]$/,"")}p(C,"normaliseParamName");function P(m){if(!m.name||m.name==="-")return null;let w=J(m.type);return{name:m.name,type:w,description:te(m.description),getPrettyName:p(()=>C(m.name),"getPrettyName"),getTypeName:p(()=>w?D(w):null,"getTypeName")}}p(P,"extractParam");function R(m){return m.name?G(m.name,m.description):null}p(R,"extractDeprecated");function G(m,w){let N=m===""?w:`${m} ${w}`;return te(N)}p(G,"joinNameAndDescription");function te(m){let w=m.replace(/^- /g,"").trim();return w===""?null:w}p(te,"normaliseDescription");function v(m){let w=J(m.type);return w?{type:w,description:G(m.name,m.description),getTypeName:p(()=>D(w),"getTypeName")}:null}p(v,"extractReturns");var pe=(0,ce.stringifyRules)(),K=pe.JsdocTypeObject;pe.JsdocTypeAny=()=>"any",pe.JsdocTypeObject=(m,w)=>`(${K(m,w)})`,pe.JsdocTypeOptional=(m,w)=>w(m.element),pe.JsdocTypeNullable=(m,w)=>w(m.element),pe.JsdocTypeNotNullable=(m,w)=>w(m.element),pe.JsdocTypeUnion=(m,w)=>m.elements.map(w).join("|");function J(m){try{return(0,ce.parse)(m,"typescript")}catch{return null}}p(J,"extractType");function D(m){return(0,ce.transform)(pe,m)}p(D,"extractTypeName");var H=90,me=50;function oe(m){return m.length>90}p(oe,"isTooLongForTypeSummary");function Ze(m){return m.length>50}p(Ze,"isTooLongForDefaultValueSummary");function Ee(m,w){return m===w?{summary:m}:{summary:m,detail:w}}p(Ee,"createSummaryValue");var bt=null;function St(m,w){if(m!=null){let{value:N}=m;if(!Qe(N))return Ze(N)?Ee(w?.name,N):Ee(N)}return null}p(St,"createDefaultValue");function Dt({name:m,value:w,elements:N,raw:ee}){return w??(N!=null?N.map(Dt).join(" | "):ee??m)}p(Dt,"generateUnionElement");function Ot({name:m,raw:w,elements:N}){return N!=null?Ee(N.map(Dt).join(" | ")):w!=null?Ee(w.replace(/^\|\s*/,"")):Ee(m)}p(Ot,"generateUnion");function po({type:m,raw:w}){return w!=null?Ee(w):Ee(m)}p(po,"generateFuncSignature");function qt({type:m,raw:w}){return w!=null?oe(w)?Ee(m,w):Ee(w):Ee(m)}p(qt,"generateObjectSignature");function Ut(m){let{type:w}=m;return w==="object"?qt(m):po(m)}p(Ut,"generateSignature");function Kt({name:m,raw:w}){return w!=null?oe(w)?Ee(m,w):Ee(w):Ee(m)}p(Kt,"generateDefault");function ut(m){if(m==null)return null;switch(m.name){case"union":return Ot(m);case"signature":return Ut(m);default:return Kt(m)}}p(ut,"createType");var Vt=p((m,w)=>{let{flowType:N,description:ee,required:q,defaultValue:de}=w;return{name:m,type:ut(N),required:q,description:ee,defaultValue:St(de??null,N??null)}},"createFlowPropDef");function yo({defaultValue:m}){if(m!=null){let{value:w}=m;if(!Qe(w))return Ee(w)}return null}p(yo,"createDefaultValue");function to({tsType:m,required:w}){if(m==null)return null;let N=m.name;return w||(N=N.replace(" | undefined","")),Ee(["Array","Record","signature"].includes(m.name)?m.raw:N)}p(to,"createType");var nn=p((m,w)=>{let{description:N,required:ee}=w;return{name:m,type:to(w),required:ee,description:N,defaultValue:yo(w)}},"createTsPropDef");function at(m){return m!=null?Ee(m.name):null}p(at,"createType");function ye(m){let{computed:w,func:N}=m;return typeof w>"u"&&typeof N>"u"}p(ye,"isReactDocgenTypescript");function fe(m){return m?m.name==="string"?!0:m.name==="enum"?Array.isArray(m.value)&&m.value.every(({value:w})=>typeof w=="string"&&w[0]==='"'&&w[w.length-1]==='"'):!1:!1}p(fe,"isStringValued");function Je(m,w){if(m!=null){let{value:N}=m;if(!Qe(N))return ye(m)&&fe(w)?Ee(JSON.stringify(N)):Ee(N)}return null}p(Je,"createDefaultValue");function Ce(m,w,N){let{description:ee,required:q,defaultValue:de}=N;return{name:m,type:at(w),required:q,description:ee,defaultValue:Je(de,w)}}p(Ce,"createBasicPropDef");function Re(m,w){if(w?.includesJsDoc){let{description:N,extractedTags:ee}=w;N!=null&&(m.description=w.description);let q={...ee,params:ee?.params?.map(de=>({name:de.getPrettyName(),description:de.description}))};Object.values(q).filter(Boolean).length>0&&(m.jsDocTags=q)}return m}p(Re,"applyJsDocResult");var je=p((m,w,N)=>{let ee=Ce(m,w.type,w);return ee.sbType=ae(w),Re(ee,N)},"javaScriptFactory"),Me=p((m,w,N)=>{let ee=nn(m,w);return ee.sbType=ae(w),Re(ee,N)},"tsFactory"),we=p((m,w,N)=>{let ee=Vt(m,w);return ee.sbType=ae(w),Re(ee,N)},"flowFactory"),Ct=p((m,w,N)=>{let ee=Ce(m,{name:"unknown"},w);return Re(ee,N)},"unknownFactory"),zt=p(m=>{switch(m){case"JavaScript":return je;case"TypeScript":return Me;case"Flow":return we;default:return Ct}},"getPropDefFactory"),Ft=p(m=>m.type!=null?"JavaScript":m.flowType!=null?"Flow":m.tsType!=null?"TypeScript":"Unknown","getTypeSystem"),No=p(m=>{let w=Ft(m[0]),N=zt(w);return m.map(ee=>{let q=ee;return ee.type?.elements&&(q={...ee,type:{...ee.type,value:ee.type.elements}}),go(q.name,q,w,N)})},"extractComponentSectionArray"),vo=p(m=>{let w=Object.keys(m),N=Ft(m[w[0]]),ee=zt(N);return w.map(q=>{let de=m[q];return de!=null?go(q,de,N,ee):null}).filter(Boolean)},"extractComponentSectionObject"),gn=p((m,w)=>{let N=it(m,w);return jt(N)?Array.isArray(N)?No(N):vo(N):[]},"extractComponentProps");function go(m,w,N,ee){let q=M(w.description);return q.includesJsDoc&&q.ignore?null:{propDef:ee(m,w,q),jsDocTags:q.extractedTags,docgenInfo:w,typeSystem:N}}p(go,"extractProp");function Ht(m){return m!=null?Ge(m):""}p(Ht,"extractComponentDescription");var rn=p((...m)=>{let w={},N=m.filter(Boolean),ee=N.reduce((q,de)=>(Object.entries(de).forEach(([Ve,Se])=>{let vt=q[Ve];Array.isArray(Se)||typeof vt>"u"?q[Ve]=Se:et(Se)&&et(vt)?w[Ve]=!0:typeof Se<"u"&&(q[Ve]=Se)}),q),{});return Object.keys(w).forEach(q=>{let de=N.filter(Boolean).map(Ve=>Ve[q]).filter(Ve=>typeof Ve<"u");de.every(Ve=>et(Ve))?ee[q]=rn(...de):ee[q]=de[de.length-1]}),ee},"combineParameters"),Xn=p(m=>{let{component:w,argTypes:N,parameters:{docs:ee={}}}=m,{extractArgTypes:q}=ee;if(!q||!w)return N;let de=q(w);return de?rn(de,N):N},"enhanceArgTypes"),Kn="storybook/docs",Br=null,Pr="docs",Hn=`${Kn}/snippet-rendered`,In=(m=>(m.AUTO="auto",m.CODE="code",m.DYNAMIC="dynamic",m))(In||{})}),"../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":((Nt,ue,V)=>{var nt=(function(){var De;return function(){return typeof De>"u"&&(De=!!(window&&document&&document.all&&!window.atob)),De}})(),X=(function(){var De={};return function(Le){if(typeof De[Le]>"u"){var et=document.querySelector(Le);if(window.HTMLIFrameElement&&et instanceof window.HTMLIFrameElement)try{et=et.contentDocument.head}catch{et=null}De[Le]=et}return De[Le]}})(),re=[];function Ke(he){for(var De=-1,ze=0;ze<re.length;ze++)if(re[ze].identifier===he){De=ze;break}return De}function st(he,De){for(var ze={},Le=[],et=0;et<he.length;et++){var kt=he[et],$t=De.base?kt[0]+De.base:kt[0],xt=ze[$t]||0,We="".concat($t," ").concat(xt);ze[$t]=xt+1;var tt=Ke(We),Ne={css:kt[1],media:kt[2],sourceMap:kt[3]};tt!==-1?(re[tt].references++,re[tt].updater(Ne)):re.push({identifier:We,updater:He(Ne,De),references:1}),Le.push(We)}return Le}function pt(he){var De=document.createElement("style"),ze=he.attributes||{};if(typeof ze.nonce>"u"){var Le=V.nc;Le&&(ze.nonce=Le)}if(Object.keys(ze).forEach(function(kt){De.setAttribute(kt,ze[kt])}),typeof he.insert=="function")he.insert(De);else{var et=X(he.insert||"head");if(!et)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");et.appendChild(De)}return De}function rt(he){if(he.parentNode===null)return!1;he.parentNode.removeChild(he)}var Et=(function(){var De=[];return function(Le,et){return De[Le]=et,De.filter(Boolean).join(`
`)}})();function p(he,De,ze,Le){var et=ze?"":Le.media?"@media ".concat(Le.media," {").concat(Le.css,"}"):Le.css;if(he.styleSheet)he.styleSheet.cssText=Et(De,et);else{var kt=document.createTextNode(et),$t=he.childNodes;$t[De]&&he.removeChild($t[De]),$t.length?he.insertBefore(kt,$t[De]):he.appendChild(kt)}}function Rt(he,De,ze){var Le=ze.css,et=ze.media,kt=ze.sourceMap;if(et?he.setAttribute("media",et):he.removeAttribute("media"),kt&&typeof btoa<"u"&&(Le+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(kt))))," */")),he.styleSheet)he.styleSheet.cssText=Le;else{for(;he.firstChild;)he.removeChild(he.firstChild);he.appendChild(document.createTextNode(Le))}}var xe=null,yt=0;function He(he,De){var ze,Le,et;if(De.singleton){var kt=yt++;ze=xe||(xe=pt(De)),Le=p.bind(null,ze,kt,!1),et=p.bind(null,ze,kt,!0)}else ze=pt(De),Le=Rt.bind(null,ze,De),et=function(){rt(ze)};return Le(he),function(xt){if(xt){if(xt.css===he.css&&xt.media===he.media&&xt.sourceMap===he.sourceMap)return;Le(he=xt)}else et()}}Nt.exports=function(he,De){De=De||{},!De.singleton&&typeof De.singleton!="boolean"&&(De.singleton=nt()),he=he||[];var ze=st(he,De);return function(et){if(et=et||[],Object.prototype.toString.call(et)==="[object Array]"){for(var kt=0;kt<ze.length;kt++){var $t=ze[kt],xt=Ke($t);re[xt].references--}for(var We=st(et,De),tt=0;tt<ze.length;tt++){var Ne=ze[tt],wt=Ke(Ne);re[wt].references===0&&(re[wt].updater(),re.splice(wt,1))}ze=We}}}})}]);
