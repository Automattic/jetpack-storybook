(()=>{var He=Object.defineProperty;var Ve=(g,l,s)=>l in g?He(g,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):g[l]=s;var ge=(g,l,s)=>(Ve(g,typeof l!="symbol"?l+"":l,s),s);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2462],{"../../plugins/protect/src/js/components/paid-accordion/stories/index.stories.jsx":(g,l,s)=>{var G,z,H;"use strict";s.r(l),s.d(l,{Default:()=>D,__namedExportsOrder:()=>q,default:()=>Q});var o=s("../components/components/text/index.tsx"),i=s("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/wordpress.js"),a=s("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/plugins.js"),r=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=s("../components/components/layout/use-breakpoint-match/index.ts"),u=s("../components/components/spinner/index.jsx"),_=s("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),n=s("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),m=s("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),h=s("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),S=s("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-up.js"),v=s("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js"),j=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),E=s.n(j),p=s("../../plugins/protect/src/js/state/store.js"),y=s("../../plugins/protect/src/js/components/severity/index.jsx"),b=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=s.n(b),O=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/paid-accordion/styles.module.scss"),k={};k.insert="head",k.singleton=!1;var Z=T()(O.Z,k);const P=O.Z.locals||{};var d=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const U=n.__,R=r.createContext(),C=({id:x,title:L,label:V,icon:ee,fixable:K,severity:se,children:re,onOpen:M})=>{const W=(0,r.useContext)(R),I=(W==null?void 0:W.open)===x,X=W==null?void 0:W.setOpen,$=(0,_.Z)(J=>J(p.t).getThreatsAreFixing()),ae=E()(P["accordion-body"],{[P["accordion-body-open"]]:I,[P["accordion-body-close"]]:!I}),de=(0,r.useCallback)(()=>{I||M==null||M(),X(J=>J===x?null:x)},[I,M,X,x]),[le]=(0,c.Z)(["sm","lg"],[null,"<"]);return(0,d.jsxs)("div",{className:P["accordion-item"],children:[(0,d.jsxs)("button",{className:P["accordion-header"],onClick:de,children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)(o.ZP,{className:P["accordion-header-label"],mb:1,children:[(0,d.jsx)(m.Z,{icon:ee,className:P["accordion-header-label-icon"]}),V]}),(0,d.jsx)(o.ZP,{className:P["accordion-header-description"],variant:I?"title-small":"body",children:L})]}),(0,d.jsx)("div",{children:(0,d.jsx)(y.Z,{severity:se})}),(0,d.jsx)("div",{children:K&&(0,d.jsxs)(d.Fragment,{children:[$.indexOf(x)>=0?(0,d.jsx)(u.Z,{color:"black"}):(0,d.jsx)(m.Z,{icon:h.Z,className:P["icon-check"],size:28}),le&&(0,d.jsx)("span",{children:U("Auto-fix","jetpack-protect")})]})}),(0,d.jsx)("div",{className:P["accordion-header-button"],children:(0,d.jsx)(m.Z,{icon:I?S.Z:v.Z,size:38})})]}),(0,d.jsx)("div",{className:ae,"aria-hidden":I?"false":"true",children:re})]})},F=({children:x})=>{const[L,V]=(0,r.useState)();return(0,d.jsx)(R.Provider,{value:{open:L,setOpen:V},children:(0,d.jsx)("div",{className:P.accordion,children:x})})},B=F;C.__docgenInfo={description:"",methods:[],displayName:"PaidAccordionItem"},F.__docgenInfo={description:"",methods:[],displayName:"PaidAccordion"};const Q={title:"Plugins/Protect/Paid Accordion",component:B,parameters:{layout:"centered"},decorators:[x=>(0,d.jsx)("div",{style:{width:800},children:(0,d.jsx)(x,{})})]},D=x=>(0,d.jsxs)(B,{children:[(0,d.jsxs)(C,{id:"wordpress",label:"WordPress (5.9-5.9.1)",title:"Contributor+ Stored Cross-Site Scripting",icon:i.Z,children:[(0,d.jsx)(o.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,d.jsxs)(o.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,d.jsx)(o.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,d.jsx)(o.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,d.jsxs)(C,{id:"jetpack",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:a.Z,children:[(0,d.jsx)(o.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,d.jsxs)(o.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,d.jsx)(o.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,d.jsx)(o.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,d.jsxs)(C,{id:"jetpack-2",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:a.Z,children:[(0,d.jsx)(o.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,d.jsxs)(o.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,d.jsx)(o.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,d.jsx)(o.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,d.jsxs)(C,{id:"jetpack-3",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:a.Z,children:[(0,d.jsx)(o.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,d.jsxs)(o.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,d.jsx)(o.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,d.jsx)(o.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,d.jsxs)(C,{id:"jetpack-4",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:a.Z,children:[(0,d.jsx)(o.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,d.jsxs)(o.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,d.jsx)(o.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,d.jsx)(o.ZP,{children:"Update to WordPress 5.9.2"})]})]});D.parameters={...D.parameters,docs:{...(G=D.parameters)==null?void 0:G.docs,source:{originalSource:`args => <PaidAccordion>
        <PaidAccordionItem id="wordpress" label="WordPress (5.9-5.9.1)" title="Contributor+ Stored Cross-Site Scripting" icon={wordpress}>
            <Text variant="title-small" mb={2}>
                What is the problem?
            </Text>
            <Text mb={5}>
                Post authors are able to bypass KSES restrictions in WordPress {'>'}= 5.9 (and or
                Gutenberg {'>'}= 9.8.0) due to the order filters are executed, which could allow them to
                perform to Stored Cross-Site Scripting attacks
            </Text>
            <Text variant="title-small" mb={2}>
                How to fix it?
            </Text>
            <Text>Update to WordPress 5.9.2</Text>
        </PaidAccordionItem>
        <PaidAccordionItem id="jetpack" label="Jetpack < 9.8" title="Carousel Module Non-Published Page/Post Attachment Comment Leak" icon={plugins}>
            <Text variant="title-small" mb={2}>
                What is the problem?
            </Text>
            <Text mb={5}>
                Post authors are able to bypass KSES restrictions in WordPress {'>'}= 5.9 (and or
                Gutenberg {'>'}= 9.8.0) due to the order filters are executed, which could allow them to
                perform to Stored Cross-Site Scripting attacks
            </Text>
            <Text variant="title-small" mb={2}>
                How to fix it?
            </Text>
            <Text>Update to WordPress 5.9.2</Text>
        </PaidAccordionItem>
        <PaidAccordionItem id="jetpack-2" label="Jetpack < 9.8" title="Carousel Module Non-Published Page/Post Attachment Comment Leak" icon={plugins}>
            <Text variant="title-small" mb={2}>
                What is the problem?
            </Text>
            <Text mb={5}>
                Post authors are able to bypass KSES restrictions in WordPress {'>'}= 5.9 (and or
                Gutenberg {'>'}= 9.8.0) due to the order filters are executed, which could allow them to
                perform to Stored Cross-Site Scripting attacks
            </Text>
            <Text variant="title-small" mb={2}>
                How to fix it?
            </Text>
            <Text>Update to WordPress 5.9.2</Text>
        </PaidAccordionItem>
        <PaidAccordionItem id="jetpack-3" label="Jetpack < 9.8" title="Carousel Module Non-Published Page/Post Attachment Comment Leak" icon={plugins}>
            <Text variant="title-small" mb={2}>
                What is the problem?
            </Text>
            <Text mb={5}>
                Post authors are able to bypass KSES restrictions in WordPress {'>'}= 5.9 (and or
                Gutenberg {'>'}= 9.8.0) due to the order filters are executed, which could allow them to
                perform to Stored Cross-Site Scripting attacks
            </Text>
            <Text variant="title-small" mb={2}>
                How to fix it?
            </Text>
            <Text>Update to WordPress 5.9.2</Text>
        </PaidAccordionItem>
        <PaidAccordionItem id="jetpack-4" label="Jetpack < 9.8" title="Carousel Module Non-Published Page/Post Attachment Comment Leak" icon={plugins}>
            <Text variant="title-small" mb={2}>
                What is the problem?
            </Text>
            <Text mb={5}>
                Post authors are able to bypass KSES restrictions in WordPress {'>'}= 5.9 (and or
                Gutenberg {'>'}= 9.8.0) due to the order filters are executed, which could allow them to
                perform to Stored Cross-Site Scripting attacks
            </Text>
            <Text variant="title-small" mb={2}>
                How to fix it?
            </Text>
            <Text>Update to WordPress 5.9.2</Text>
        </PaidAccordionItem>
    </PaidAccordion>`,...(H=(z=D.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};const q=["Default"]},"../../../node_modules/.pnpm/@wordpress+compose@6.30.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":(g,l,s)=>{"use strict";s.d(l,{Z:()=>a});var o=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function i(r){return r&&typeof window!="undefined"&&typeof window.matchMedia=="function"?window.matchMedia(r):null}function a(r){const c=(0,o.useMemo)(()=>{const u=i(r);return{subscribe(_){var n;return u?((n=u.addEventListener)==null||n.call(u,"change",_),()=>{var m;(m=u.removeEventListener)==null||m.call(u,"change",_)}):()=>{}},getValue(){var _;return(_=u==null?void 0:u.matches)!==null&&_!==void 0?_:!1}}},[r]);return(0,o.useSyncExternalStore)(c.subscribe,c.getValue,()=>!1)}},"../../../node_modules/.pnpm/@wordpress+deprecated@3.53.0/node_modules/@wordpress/deprecated/build-module/index.js":(g,l,s)=>{"use strict";s.d(l,{Z:()=>a});var o=s("../../../node_modules/.pnpm/@wordpress+hooks@3.53.0/node_modules/@wordpress/hooks/build-module/index.js");const i=Object.create(null);function a(r,c={}){const{since:u,version:_,alternative:n,plugin:m,link:h,hint:S}=c,v=m?` from ${m}`:"",j=u?` since version ${u}`:"",E=_?` and will be removed${v} in version ${_}`:"",p=n?` Please use ${n} instead.`:"",y=h?` See: ${h}`:"",b=S?` Note: ${S}`:"",T=`${r} is deprecated${j}${E}.${p}${y}${b}`;T in i||((0,o.Kw)("deprecated",r,c,T),console.warn(T),i[T]=!0)}},"../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(g,l,s)=>{"use strict";s.d(l,{Z:()=>a});var o=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function i({icon:r,size:c=24,...u},_){return(0,o.cloneElement)(r,{width:c,height:c,...u,ref:_})}const a=(0,o.forwardRef)(i)},"../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(g,l,s)=>{"use strict";s.d(l,{Z:()=>r});var o=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=s("../../../node_modules/.pnpm/@wordpress+primitives@3.51.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,o.createElement)(i.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(i.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(g,l,s)=>{"use strict";s.d(l,{Z:()=>r});var o=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=s("../../../node_modules/.pnpm/@wordpress+primitives@3.51.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,o.createElement)(i.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)(i.y$,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-up.js":(g,l,s)=>{"use strict";s.d(l,{Z:()=>r});var o=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=s("../../../node_modules/.pnpm/@wordpress+primitives@3.51.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,o.createElement)(i.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)(i.y$,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/plugins.js":(g,l,s)=>{"use strict";s.d(l,{Z:()=>r});var o=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=s("../../../node_modules/.pnpm/@wordpress+primitives@3.51.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,o.createElement)(i.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(i.y$,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/wordpress.js":(g,l,s)=>{"use strict";s.d(l,{Z:()=>r});var o=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=s("../../../node_modules/.pnpm/@wordpress+primitives@3.51.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,o.createElement)(i.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,o.createElement)(i.y$,{d:"M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"}))},"../../../node_modules/.pnpm/@wordpress+primitives@3.51.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(g,l,s)=>{"use strict";s.d(l,{Cd:()=>r,G:()=>c,UL:()=>m,Wj:()=>E,mg:()=>n,y$:()=>_});var o=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),i=s.n(o),a=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const r=p=>(0,a.createElement)("circle",p),c=p=>(0,a.createElement)("g",p),u=p=>createElement("line",p),_=p=>(0,a.createElement)("path",p),n=p=>(0,a.createElement)("polygon",p),m=p=>(0,a.createElement)("rect",p),h=p=>createElement("defs",p),S=p=>createElement("radialGradient",p),v=p=>createElement("linearGradient",p),j=p=>createElement("stop",p),E=(0,a.forwardRef)(({className:p,isPressed:y,...b},T)=>{const O={...b,className:i()(p,{"is-pressed":y})||void 0,"aria-hidden":!0,focusable:!1};return(0,a.createElement)("svg",{...O,ref:T})});E.displayName="SVG"},"../components/components/spinner/index.jsx":(g,l,s)=>{"use strict";s.d(l,{Z:()=>v});var o=s("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),i=s.n(o),a=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=s.n(r),u=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/spinner/style.scss"),_={};_.insert="head",_.singleton=!1;var n=c()(u.Z,_);const m=u.Z.locals||{};var h=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const S=j=>{const E=j.className+" jp-components-spinner",p={width:j.size,height:j.size,fontSize:j.size,borderTopColor:j.color},y={borderTopColor:j.color,borderRightColor:j.color};return(0,h.jsx)("div",{className:E,children:(0,h.jsx)("div",{className:"jp-components-spinner__outer",style:p,children:(0,h.jsx)("div",{className:"jp-components-spinner__inner",style:y})})})};S.propTypes={color:i().string,className:i().string,size:i().number},S.defaultProps={color:"#FFFFFF",className:"",size:20};const v=S;S.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{color:{defaultValue:{value:"'#FFFFFF'",computed:!1},description:"The spinner color.",type:{name:"string"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"CSS class names.",type:{name:"string"},required:!1},size:{defaultValue:{value:"20",computed:!1},description:"The spinner size.",type:{name:"number"},required:!1}}}},"../../plugins/protect/src/js/components/severity/index.jsx":(g,l,s)=>{"use strict";s.d(l,{Z:()=>j});var o=s("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),i=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=s.n(i),r=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/severity/styles.module.scss"),c={};c.insert="head",c.singleton=!1;var u=a()(r.Z,c);const _=r.Z.locals||{};var n=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const m=o.__,h=E=>E>=5?"is-critical":E>=3&&E<5?"is-high":"is-low",S=E=>{const p=m("Critical","jetpack-protect"),y=m("High","jetpack-protect"),b=m("Low","jetpack-protect");return E>=5?p:E>=3&&E<5?y:b},v=({severity:E})=>(0,n.jsx)("div",{className:`${_["threat-severity-badge"]} ${_[h(E)]}`,children:S(E)}),j=v;v.__docgenInfo={description:"",methods:[],displayName:"ThreatSeverityBadge"}},"../../plugins/protect/src/js/state/store.js":(g,l,s)=>{"use strict";s.d(l,{t:()=>he,N:()=>ze});var o=s("../../../node_modules/.pnpm/camelize@1.0.1/node_modules/camelize/index.js"),i=s.n(o),a=s("../../../node_modules/.pnpm/@wordpress+api-fetch@6.50.0/node_modules/@wordpress/api-fetch/build-module/index.js"),r=s("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js");const c=r._n,u=r.__,_="SET_CREDENTIALS_STATE_IS_FETCHING",n="SET_CREDENTIALS_STATE",m="SET_STATUS",h="SET_STATUS_PROGRESS",S="START_SCAN_OPTIMISTICALLY",v="SET_STATUS_IS_FETCHING",j="SET_SCAN_IS_UNAVAILABLE",E="SET_SCAN_IS_ENQUEUING",p="SET_INSTALLED_PLUGINS",y="SET_INSTALLED_THEMES",b="SET_WP_VERSION",T="SET_JETPACK_SCAN",O="SET_PRODUCT_DATA",k="SET_THREAT_IS_UPDATING",Z="SET_THREATS_ARE_FIXING",P="SET_MODAL",d="SET_NOTICE",U="CLEAR_NOTICE",R="SET_HAS_REQUIRED_PLAN",C="SET_ONBOARDING_PROGRESS",F="SET_WAF_IS_SEEN",B="SET_WAF_UPGRADE_IS_SEEN",Q="SET_WAF_IS_ENABLED",D="SET_WAF_IS_UPDATING",q="SET_WAF_IS_TOGGLING",G="SET_WAF_CONFIG",z="SET_WAF_STATS",H=e=>({type:m,status:e}),x=e=>({type:h,currentProgress:e}),L=()=>({type:S}),V=()=>({dispatch:e})=>{(0,a.Z)({path:"jetpack-protect/v1/check-plan",method:"GET"}).then(t=>e(_e(t)))},ee=e=>(0,a.Z)({path:`jetpack-protect/v1/status${e?"?hard_refresh=true":""}`,method:"GET"}),K=(e=!1)=>async({dispatch:t})=>(t(I(!0)),await new Promise((f,w)=>ee(e).then(se).then(A=>{t(X(A.status==="unavailable")),t(H(i()(A))),f(A)}).catch(A=>{w(A)}).finally(()=>{t(I(!1))}))),se=(e,t=0)=>new Promise((f,w)=>{e.status==="unavailable"&&t<3?ee(!0).then(A=>{setTimeout(()=>{se(A,t+1).then(ne=>f(ne)).catch(ne=>w(ne))},5e3)}).catch(w):f(e)}),re=()=>async({dispatch:e})=>await new Promise((t,f)=>(e(M(!0)),(0,a.Z)({path:"jetpack-protect/v1/check-credentials",method:"POST"}).then(w=>{e(W(w)),t(w)}).catch(w=>{f(w)}).finally(()=>{e(M(!1))}))),M=e=>({type:_,isFetching:e}),W=e=>({type:n,credentials:e}),I=e=>({type:v,status:e}),X=e=>({type:j,status:e}),$=e=>({type:E,isEnqueuing:e}),ae=e=>({type:p,plugins:e}),de=e=>({type:y,themes:e}),le=e=>({type:b,version:e}),J=e=>({type:T,scan:e}),te=(e,t)=>({type:k,payload:{threatId:e,isUpdating:t}}),ce=e=>({type:Z,threatIds:e}),Se=(e,t=()=>{})=>async({dispatch:f})=>(f(te(e,!0)),await new Promise(()=>(0,a.Z)({path:`jetpack-protect/v1/ignore-threat?threat_id=${e}`,method:"POST"}).then(()=>f(K())).then(()=>f(N({type:"success",message:u("Threat ignored","jetpack-protect")}))).catch(()=>f(N({type:"error",message:u("An error ocurred ignoring the threat.","jetpack-protect")}))).finally(()=>{f(te(e,!1)),t()}))),ue=e=>async({dispatch:t})=>{const f=e.reduce((w,A)=>`${w}threat_ids[]=${A}&`,"jetpack-protect/v1/fix-threats-status?");return t(ce(e)),await(0,a.Z)({path:f,method:"GET"}).then(async w=>{const A=Object.values(w.threats);if(A.filter(ie=>ie.status==="in_progress").length>0)return await new Promise(()=>{setTimeout(()=>{t(ue(e))},1e3)});if(!A.filter(ie=>ie.status==="fixed").length===e.length)throw"Not all threats could be fixed."}).then(()=>{t(K()),t(N({type:"success",message:(0,r.gB)(c("%s threat was fixed successfully","%s threats were fixed successfully",e.length,"jetpack-protect"),e.length)}))}).catch(()=>{t(N({type:"error",message:u("Not all threats could be fixed. Please contact our support.","jetpack-protect")}))}).finally(()=>{t(ce([]))})},Ee=(e,t=()=>{})=>async({dispatch:f})=>(e.forEach(w=>{f(te(w,!0))}),await new Promise(()=>(0,a.Z)({path:`jetpack-protect/v1/fix-threats?threat_ids=${e}`,method:"POST",data:{threatIds:e}}).then(()=>f(N({type:"success",message:u("We're hard at work fixing this threat in the background. Please check back shortly.","jetpack-protect")}))).then(()=>{setTimeout(()=>f(ue(e)),1e3)}).catch(()=>f(N({type:"error",message:u("Error fixing threats. Please contact support.","jetpack-protect")}))).finally(()=>{e.forEach(w=>{f(te(w,!1))}),t()}))),je=(e=()=>{})=>async({dispatch:t})=>(t($(!0)),await new Promise(()=>(0,a.Z)({path:"jetpack-protect/v1/scan",method:"POST"}).then(()=>{t(L()),setTimeout(()=>t(K(!0)),5e3)}).catch(()=>t(N({type:"error",message:u("An error ocurred enqueuing the scan","jetpack-protect")}))).finally(()=>{t($(!1)),e()}))),fe=e=>({type:P,payload:e}),N=e=>({type:d,payload:e}),Te=()=>({type:U}),_e=e=>({type:R,hasRequiredPlan:e}),pe={checkCredentials:re,setCredentials:W,setCredentialsIsFetching:M,setStatus:H,setStatusProgress:x,startScanOptimistically:L,refreshStatus:K,setStatusIsFetching:I,setScanIsEnqueuing:$,setInstalledPlugins:ae,setInstalledThemes:de,setwpVersion:le,setJetpackScan:J,ignoreThreat:Se,setModal:fe,setNotice:N,clearNotice:Te,fixThreats:Ee,scan:je,setThreatsAreFixing:ce,refreshPlan:V,setHasRequiredPlan:_e,setScanIsUnavailable:X,setOnboardingProgress:e=>({type:C,progress:e}),setWafIsEnabled:e=>({type:Q,isEnabled:e}),setWafIsSeen:e=>({type:F,isSeen:e}),setWafUpgradeIsSeen:e=>({type:B,upgradeIsSeen:e}),setWafIsUpdating:e=>({type:D,isUpdating:e}),setWafIsToggling:e=>({type:q,isToggling:e}),setWafConfig:e=>({type:G,config:e}),setWafStats:e=>({type:z,stats:e})};var me=s("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const ve=(e=null,t)=>{switch(t.type){case n:return t.credentials}return e},ye=(e=!1,t)=>{switch(t.type){case _:return t.isFetching}return e},Pe=(e={},t)=>{switch(t.type){case m:return t.status;case h:return{...e,currentProgress:t.currentProgress};case S:return{...e,currentProgress:0,status:"optimistically_scanning"}}return e},we=(e=!1,t)=>{switch(t.type){case v:return t.status}return e},be=(e=!1,t)=>{switch(t.type){case j:return t.status}return e},xe=(e=!1,t)=>{switch(t.type){case E:return t.isEnqueuing}return e},Ae=(e={},t)=>{switch(t.type){case p:return t.plugins}return e},Ie=(e={},t)=>{switch(t.type){case y:return t.themes}return e},Oe=(e={},t)=>{switch(t.type){case b:return t.version}return e},Ce=(e={},t)=>{switch(t.type){case T:return t.scan}return e},We=(e={},t)=>{switch(t.type){case k:return{...e,[t.payload.threatId]:t.payload.isUpdating}}return e},ke=(e=[],t)=>{switch(t.type){case Z:return t.threatIds}return e},Re=(e={},t)=>{switch(t.type){case P:return{...e,...t.payload}}return e},De=(e={},t)=>{switch(t.type){case d:return{...e,...t.payload};case U:return{}}return e},Me=(e=!1,t)=>{switch(t.type){case R:return t.hasRequiredPlan}return e},Ne=(e=null,t)=>{switch(t.type){case C:return t.progress}return e},Ue={wafSupported:null,bruteForceSupported:null,isSeen:!1,upgradeIsSeen:!1,isEnabled:!1,isUpdating:!1,isToggling:!1,config:void 0,stats:void 0},Le=(e=Ue,t)=>{switch(t.type){case F:return{...e,isSeen:t.isSeen};case B:return{...e,upgradeIsSeen:t.upgradeIsSeen};case Q:return{...e,isEnabled:t.isEnabled};case G:return{...e,config:t.config};case z:return{...e,stats:t.stats};case D:return{...e,isUpdating:t.isUpdating};case q:return{...e,isToggling:t.isToggling}}return e},Ke=(0,me.UY)({credentials:ve,credentialsIsFetching:ye,status:Pe,statusIsFetching:we,scanIsUnavailable:be,scanIsEnqueuing:xe,installedPlugins:Ae,installedThemes:Ie,wpVersion:Oe,jetpackScan:Ce,threatsUpdating:We,modal:Re,notice:De,setThreatsFixing:ke,hasRequiredPlan:Me,onboardingProgress:Ne,waf:Le}),Ze={getJetpackScan:{isFulfilled:e=>Object.keys(e==null?void 0:e.jetpackScan).length>0,fulfill:()=>async({dispatch:e})=>{const t=await(0,a.Z)({path:"/my-jetpack/v1/site/products/scan",method:"GET"});e(pe.setJetpackScan(t))}}},Fe={getCredentials:e=>e.credentials||null,getCredentialsIsFetching:e=>e.credentialsIsFetching||!1,getInstalledPlugins:e=>e.installedPlugins||{},getInstalledThemes:e=>e.installedThemes||{},getStatus:e=>e.status||{},getStatusIsFetching:e=>e.statusIsFetching||!1,getScanIsUnavailable:e=>e.scanIsUnavailable||!1,getScanIsEnqueuing:e=>e.scanIsEnqueuing||!1,getWpVersion:e=>e.wpVersion||"",getJetpackScan:e=>e.jetpackScan||{},getThreatsUpdating:e=>e.threatsUpdating||{},getModalType:e=>{var t;return((t=e.modal)==null?void 0:t.type)||null},getModalProps:e=>{var t;return((t=e.modal)==null?void 0:t.props)||{}},getNotice:e=>e.notice||null,getThreatsAreFixing:e=>e.threatsAreFixing||[],hasRequiredPlan:e=>e.hasRequiredPlan||!1,getOnboardingProgress:e=>e.onboardingProgress||null,getWaf:e=>e.waf};var Be=s("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const Y=class{static mayBeInit(t,f){Y.store===null&&(Y.store=(0,Be.Z)(t,f),(0,me.z2)(Y.store))}};let oe=Y;ge(oe,"store",null);const Ge=oe,he="jetpack-protect";function ze(){Ge.mayBeInit(he,{__experimentalUseThunks:!0,reducer:Ke,actions:pe,selectors:Fe,resolvers:Ze,initialState:i()(window.jetpackProtectInitialState)||{}})}},"../components/components/layout/use-breakpoint-match/index.ts":(g,l,s)=>{"use strict";s.d(l,{Z:()=>S});var o=s("../../../node_modules/.pnpm/@wordpress+compose@6.30.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),i=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=s.n(i),r=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),c={};c.insert="head",c.singleton=!1;var u=a()(r.Z,c);const _=r.Z.locals||{},n=["sm","md","lg"],m=(v,j,E)=>{const p=n.indexOf(v),y=p+1,b=j.includes("=");let T=[];return j.startsWith("<")&&(T=n.slice(0,b?y:p)),j.startsWith(">")&&(T=n.slice(b?p:y)),T!=null&&T.length?T.some(O=>E[O]):E[v]},S=(v,j)=>{const E=Array.isArray(v)?v:[v],p=Array.isArray(j)?j:[j],[y,b,T]=n,O=(0,o.Z)(_[y]),k=(0,o.Z)(_[b]),Z=(0,o.Z)(_[T]),P={sm:O,md:k,lg:Z};return E.map((d,U)=>{const R=p[U];return R?m(d,R,P):P[d]})}},"../../../node_modules/.pnpm/camelize@1.0.1/node_modules/camelize/index.js":g=>{"use strict";g.exports=function(n){return typeof n=="string"?s(n):l(n)};function l(n){return!n||typeof n!="object"||i(n)||a(n)?n:o(n)?u(n,l):_(c(n),function(m,h){var S=s(h);return m[S]=l(n[h]),m},{})}function s(n){return n.replace(/[_.-](\w|$)/g,function(m,h){return h.toUpperCase()})}var o=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"},i=function(n){return Object.prototype.toString.call(n)==="[object Date]"},a=function(n){return Object.prototype.toString.call(n)==="[object RegExp]"},r=Object.prototype.hasOwnProperty,c=Object.keys||function(n){var m=[];for(var h in n)r.call(n,h)&&m.push(h);return m};function u(n,m){if(n.map)return n.map(m);for(var h=[],S=0;S<n.length;S++)h.push(m(n[S],S));return h}function _(n,m,h){if(n.reduce)return n.reduce(m,h);for(var S=0;S<n.length;S++)h=m(h,n[S],S);return h}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(g,l)=>{var s,o;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var i={}.hasOwnProperty,a="[native code]";function r(){for(var c=[],u=0;u<arguments.length;u++){var _=arguments[u];if(_){var n=typeof _;if(n==="string"||n==="number")c.push(_);else if(Array.isArray(_)){if(_.length){var m=r.apply(null,_);m&&c.push(m)}}else if(n==="object"){if(_.toString!==Object.prototype.toString&&!_.toString.toString().includes("[native code]")){c.push(_.toString());continue}for(var h in _)i.call(_,h)&&_[h]&&c.push(h)}}}return c.join(" ")}g.exports?(r.default=r,g.exports=r):(s=[],o=function(){return r}.apply(l,s),o!==void 0&&(g.exports=o))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(g,l,s)=>{"use strict";s.d(l,{Z:()=>u});var o=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=s.n(o),a=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=s.n(a),c=r()(i());c.push([g.id,"",""]),c.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const u=c},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/spinner/style.scss":(g,l,s)=>{"use strict";s.d(l,{Z:()=>u});var o=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=s.n(o),a=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=s.n(a),c=r()(i());c.push([g.id,"@keyframes rotate-spinner{100%{transform:rotate(360deg)}}.jp-components-spinner{display:flex;align-items:center}.jp-components-spinner__outer,.jp-components-spinner__inner{margin:auto;box-sizing:border-box;border:.1em solid rgba(0,0,0,0);border-radius:50%;animation:3s linear infinite;animation-name:rotate-spinner}.jp-components-spinner__outer{border-top-color:#fff}.jp-components-spinner__inner{width:100%;height:100%;border-top-color:#fff;border-right-color:#fff;opacity:.4}",""]);const u=c},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/paid-accordion/styles.module.scss":(g,l,s)=>{"use strict";s.d(l,{Z:()=>u});var o=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=s.n(o),a=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=s.n(a),c=r()(i());c.push([g.id,".NA4kI3fa4uwjBTGpt8UD{display:inline-block;width:100%;border-radius:var(--jp-border-radius);border:1px solid var(--jp-gray)}.NA4kI3fa4uwjBTGpt8UD>*:not(:last-child){border-bottom:1px solid var(--jp-gray)}.GIZwBlRJvZP2PaSr88T2{background-color:var(--jp-white)}._0yrw_XKvISg1aOziRkyw{margin:0;display:grid;grid-template-columns:repeat(9, 1fr);cursor:pointer;box-sizing:border-box;background:none;border:none;width:100%;align-items:center;outline-color:var(--jp-black);padding:calc(var(--spacing-base)*2) calc(var(--spacing-base)*3);text-align:start}._0yrw_XKvISg1aOziRkyw>:first-of-type{grid-column:1/7}._0yrw_XKvISg1aOziRkyw>:last-of-type{grid-column:9}._0yrw_XKvISg1aOziRkyw>:not(:first-child){margin:auto}._0yrw_XKvISg1aOziRkyw:hover{background:var(--jp-gray-0)}.FjuHpgfVTecgiAhqqfw1{display:flex;align-items:center;font-size:var(--font-body-small);font-weight:normal}.gT_N0hPdjpwwK1nwJZEw{margin-right:var(--spacing-base)}.GtiTquGPXSf0jgFsKeSf{font-weight:600;margin-left:calc(var(--spacing-base)*4);margin-bottom:var(--spacing-base)}.HbVrG5Wjn8LZQVJXRUiT{align-items:center}.R34WryNVdEOBR0Gn7jah{transform-origin:top center;overflow:hidden}.cHvNO4WbRaFpr2aWqF_7{transition:all .1s;max-height:0;padding:0;transform:scaleY(0)}.Aq3jxnJodyk48Lf1Egsi{transition:max-height .3s,transform .2s;padding:calc(var(--spacing-base)*4) calc(var(--spacing-base)*7);max-height:1000px;transform:scaleY(1)}.L31iwjpSlfBZtW2CTbrV{fill:var(--jp-green-40)}@media(max-width: 599px){._0yrw_XKvISg1aOziRkyw{display:grid;grid-auto-rows:minmax(auto, auto)}._0yrw_XKvISg1aOziRkyw>:first-child{grid-column:1/8;grid-row:1}._0yrw_XKvISg1aOziRkyw>:nth-child(2){padding-left:calc(var(--spacing-base)*4);grid-row:2}._0yrw_XKvISg1aOziRkyw>:nth-child(3){grid-row:2}._0yrw_XKvISg1aOziRkyw>:nth-child(3) span{position:absolute;margin-top:var(--spacing-base)}._0yrw_XKvISg1aOziRkyw>:last-child{grid-column:10;grid-row:1/3}}",""]),c.locals={accordion:"NA4kI3fa4uwjBTGpt8UD","accordion-item":"GIZwBlRJvZP2PaSr88T2","accordion-header":"_0yrw_XKvISg1aOziRkyw","accordion-header-label":"FjuHpgfVTecgiAhqqfw1","accordion-header-label-icon":"gT_N0hPdjpwwK1nwJZEw","accordion-header-description":"GtiTquGPXSf0jgFsKeSf","accordion-header-button":"HbVrG5Wjn8LZQVJXRUiT","accordion-body":"R34WryNVdEOBR0Gn7jah","accordion-body-close":"cHvNO4WbRaFpr2aWqF_7","accordion-body-open":"Aq3jxnJodyk48Lf1Egsi","icon-check":"L31iwjpSlfBZtW2CTbrV"};const u=c},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/severity/styles.module.scss":(g,l,s)=>{"use strict";s.d(l,{Z:()=>u});var o=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=s.n(o),a=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=s.n(a),c=r()(i());c.push([g.id,".zxGKVKzezupGHaXbqzvL{border-radius:32px;flex-shrink:0;font-size:12px;font-style:normal;font-weight:600;line-height:16px;padding:calc(var(--spacing-base)/2);position:relative;text-align:center;width:60px}.ON74ROKby9KFKGzUM6hQ{background:var(--jp-red-5);color:var(--jp-red-60)}.qPVsjV8TZ_ZtYOqYJTUw{background:var(--jp-yellow-5);color:var(--jp-yellow-60)}._DIlMqD5CZwpdLHylkey{background:var(--jp-gray-0);color:var(--jp-gray-50)}",""]),c.locals={"threat-severity-badge":"zxGKVKzezupGHaXbqzvL","is-critical":"ON74ROKby9KFKGzUM6hQ","is-high":"qPVsjV8TZ_ZtYOqYJTUw","is-low":"_DIlMqD5CZwpdLHylkey"};const u=c},"../../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs":(g,l,s)=>{"use strict";s.d(l,{P:()=>i});/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function o(a){return Object.prototype.toString.call(a)==="[object Object]"}function i(a){var r,c;return o(a)===!1?!1:(r=a.constructor,r===void 0?!0:(c=r.prototype,!(o(c)===!1||c.hasOwnProperty("isPrototypeOf")===!1)))}}}]);})();
