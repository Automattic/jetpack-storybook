"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8692],{"../components/components/global-notices/stories/index.stories.tsx":(w,u,e)=>{var X,K,W;e.r(u),e.d(u,{_Default:()=>y,__namedExportsOrder:()=>oe,default:()=>ee});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=e("../components/components/button/index.tsx"),d=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=e("../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-reduced-motion/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+a11y@4.0.0/node_modules/@wordpress/a11y/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+element@6.0.0/node_modules/@wordpress/element/build-module/serialize.js"),g=e("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),D=e("../../../node_modules/.pnpm/@wordpress+warning@3.0.0/node_modules/@wordpress/warning/build-module/index.js"),O=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const S=1e4;function k(a,i){const n=typeof a=="string"?a:(0,m.ZP)(a);(0,o.useEffect)(()=>{n&&(0,r.D)(n,i)},[n,i])}function C({className:a,children:i,spokenMessage:n=i,politeness:c="polite",actions:p=[],onRemove:v,icon:R=null,explicitDismiss:_=!1,onDismiss:T,listRef:V},te){function U(E){var f;E&&E.preventDefault&&E.preventDefault(),(f=V==null?void 0:V.current)==null||f.focus(),T==null||T(),v==null||v()}function ae(E,f){E.stopPropagation(),v==null||v(),f&&f(E)}k(n,c);const se=(0,o.useRef)({onDismiss:T,onRemove:v});(0,o.useLayoutEffect)(()=>{se.current={onDismiss:T,onRemove:v}}),(0,o.useEffect)(()=>{const E=setTimeout(()=>{var f,H,F,J;_||((H=(f=se.current).onDismiss)==null||H.call(f),(J=(F=se.current).onRemove)==null||J.call(F))},S);return()=>clearTimeout(E)},[_]);const re=(0,d.Z)(a,"components-snackbar",{"components-snackbar-explicit-dismiss":!!_});p&&p.length>1&&(globalThis.SCRIPT_DEBUG===!0&&(0,D.Z)("Snackbar can only have one action. Use Notice if your message requires many actions."),p=[p[0]]);const de=(0,d.Z)("components-snackbar__content",{"components-snackbar__content-with-icon":!!R});return(0,t.jsx)("div",{ref:te,className:re,onClick:_?void 0:U,tabIndex:0,role:_?void 0:"button",onKeyPress:_?void 0:U,"aria-label":_?void 0:(0,g.__)("Dismiss this notice"),"data-testid":"snackbar",children:(0,t.jsxs)("div",{className:de,children:[R&&(0,t.jsx)("div",{className:"components-snackbar__icon",children:R}),i,p.map(({label:E,onClick:f,url:H},F)=>(0,t.jsx)(O.ZP,{href:H,variant:"tertiary",onClick:J=>ae(J,f),className:"components-snackbar__action",children:E},F)),_&&(0,t.jsx)("span",{role:"button","aria-label":(0,g.__)("Dismiss this notice"),tabIndex:0,className:"components-snackbar__dismiss-button",onClick:U,onKeyPress:U,children:"\u2715"})]})})}const h=(0,o.forwardRef)(C);var I=e("../../../node_modules/.pnpm/framer-motion@11.2.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),j=e("../../../node_modules/.pnpm/framer-motion@11.2.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/render/dom/motion.mjs");const z={init:{height:0,opacity:0},open:{height:"auto",opacity:1,transition:{height:{type:"tween",duration:.3,ease:[0,0,.2,1]},opacity:{type:"tween",duration:.25,delay:.05,ease:[0,0,.2,1]}}},exit:{opacity:0,transition:{type:"tween",duration:.1,ease:[0,0,.2,1]}}};function P({notices:a,className:i,children:n,onRemove:c}){const p=(0,o.useRef)(null),v=(0,l.Z)();i=(0,d.Z)("components-snackbar-list",i);const R=_=>()=>c==null?void 0:c(_.id);return(0,t.jsxs)("div",{className:i,tabIndex:-1,ref:p,"data-testid":"snackbar-list",children:[n,(0,t.jsx)(I.M,{children:a.map(_=>{const{content:T,...V}=_;return(0,t.jsx)(j.E.div,{layout:!v,initial:"init",animate:"open",exit:"exit",variants:v?void 0:z,children:(0,t.jsx)("div",{className:"components-snackbar-list__notice-container",children:(0,t.jsx)(h,{...V,onRemove:R(_),listRef:p,children:_.content})})},_.id)})})]})}const $=P;var x=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Y=e.n(x),N=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/global-notices/styles.module.scss"),L={};L.insert="head",L.singleton=!1;var Z=Y()(N.Z,L);const Q=N.Z.locals||{};var M=e("../../../node_modules/.pnpm/@wordpress+data@10.0.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),q=e("../../../node_modules/.pnpm/@wordpress+data@10.0.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-select/index.js"),G=e("../../../node_modules/.pnpm/@wordpress+notices@5.0.0_react@18.3.1/node_modules/@wordpress/notices/build-module/index.js");function B(){const a=(0,M.Z)(G.h),i=(0,q.Z)(n=>n(G.h).getNotices(),[]);return{...a,createNotice(n,c,p){return a.createNotice(n,c,{type:"snackbar",...p})},createErrorNotice(n,c){return a.createErrorNotice(n,{type:"snackbar",...c})},createInfoNotice(n,c){return a.createInfoNotice(n,{type:"snackbar",...c})},createSuccessNotice(n,c){return a.createSuccessNotice(n,{type:"snackbar",...c})},createWarningNotice(n,c){return a.createWarningNotice(n,{type:"snackbar",...c})},getNotices:()=>i}}function A({maxVisibleNotices:a=3}){const{getNotices:i,removeNotice:n}=B(),c=i().filter(({type:p})=>p==="snackbar").slice(-a);return(0,t.jsx)($,{notices:c,className:Q["global-notices"],onRemove:n})}try{A.displayName="GlobalNotices",A.__docgenInfo={description:"Renders the global notices.",displayName:"GlobalNotices",props:{maxVisibleNotices:{defaultValue:{value:"3"},description:"",name:"maxVisibleNotices",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/global-notices/global-notices.tsx#GlobalNotices"]={docgenInfo:A.__docgenInfo,name:"GlobalNotices",path:"../components/components/global-notices/global-notices.tsx#GlobalNotices"})}catch(a){}const ee={title:"JS Packages/Components/GlobalNotices",component:A,decorators:[a=>(0,t.jsx)("div",{style:{padding:"3rem"},children:a()})]},y=(a=>{const{createErrorNotice:i,createSuccessNotice:n,createInfoNotice:c,createWarningNotice:p}=B();return(0,t.jsxs)("div",{children:[(0,t.jsx)(A,{...a}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"start",gap:"1rem",flexDirection:"column"},children:[(0,t.jsx)(s.Z,{onClick:(0,o.useCallback)(()=>{n("This is a success notice")},[n]),children:"Create Success Notice"}),(0,t.jsx)(s.Z,{onClick:(0,o.useCallback)(()=>{i("This is an error notice")},[i]),children:"Create Error Notice"}),(0,t.jsx)(s.Z,{onClick:(0,o.useCallback)(()=>{c("This is an info notice")},[c]),children:"Create Info Notice"}),(0,t.jsx)(s.Z,{onClick:(0,o.useCallback)(()=>{p("This is a warning notice")},[p]),children:"Create Warning Notice"})]})]})}).bind({});y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  const {
    createErrorNotice,
    createSuccessNotice,
    createInfoNotice,
    createWarningNotice
  } = useGlobalNotices();
  return <div>
            <GlobalNotices {...args} />
            <div style={{
      display: 'flex',
      alignItems: 'start',
      gap: '1rem',
      flexDirection: 'column'
    }}>
                <Button onClick={useCallback(() => {
        createSuccessNotice('This is a success notice');
      }, [createSuccessNotice])}>
                    Create Success Notice
                </Button>
                <Button onClick={useCallback(() => {
        createErrorNotice('This is an error notice');
      }, [createErrorNotice])}>
                    Create Error Notice
                </Button>
                <Button onClick={useCallback(() => {
        createInfoNotice('This is an info notice');
      }, [createInfoNotice])}>
                    Create Info Notice
                </Button>
                <Button onClick={useCallback(() => {
        createWarningNotice('This is a warning notice');
      }, [createWarningNotice])}>
                    Create Warning Notice
                </Button>
            </div>
        </div>;
}`,...(W=(K=y.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};const oe=["_Default"]},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(w,u,e)=>{e.d(u,{ZP:()=>I});var o=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),s=e("../../../node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.1_react@18.3.1__@types+react@18.3.1_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),d=e("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),l=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function m(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const g=d.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,D=(0,s.Z)("svg",{target:"ea4tfvq2"})("width:",l.Z.spinnerSize,"px;height:",l.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",r.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),O={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},t=(0,s.Z)("circle",{target:"ea4tfvq1"})(O,";stroke:",r.D.gray[300],";"),S=(0,s.Z)("path",{target:"ea4tfvq0"})(O,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",g,";");var k=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),C=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function b({className:j,...z},P){return(0,C.jsxs)(D,{className:(0,o.Z)("components-spinner",j),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...z,ref:P,children:[(0,C.jsx)(t,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,C.jsx)(S,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const I=(0,k.forwardRef)(b)},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js":(w,u,e)=>{e.d(u,{Z:()=>g});var o=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");const d="36px",l="12px",r={controlSurfaceColor:s.D.white,controlTextActiveColor:s.D.theme.accent,controlPaddingX:l,controlPaddingXLarge:`calc(${l} * 1.3334)`,controlPaddingXSmall:`calc(${l} / 1.3334)`,controlBackgroundColor:s.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${s.D.theme.accent}`,controlDestructiveBorderColor:s.D.alert.red,controlHeight:d,controlHeightXSmall:`calc( ${d} * 0.6 )`,controlHeightSmall:`calc( ${d} * 0.8 )`,controlHeightLarge:`calc( ${d} * 1.2 )`,controlHeightXLarge:`calc( ${d} * 1.4 )`},m={toggleGroupControlBackgroundColor:r.controlBackgroundColor,toggleGroupControlBorderColor:s.D.ui.border,toggleGroupControlBackdropBackgroundColor:r.controlSurfaceColor,toggleGroupControlBackdropBorderColor:s.D.ui.border,toggleGroupControlButtonColorActive:r.controlBackgroundColor},g=Object.assign({},r,m,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.4",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,o.D)(2)}`,cardPaddingSmall:`${(0,o.D)(4)}`,cardPaddingMedium:`${(0,o.D)(4)} ${(0,o.D)(6)}`,cardPaddingLarge:`${(0,o.D)(6)} ${(0,o.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:s.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:s.D.white,surfaceColor:s.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(w,u,e)=>{e.d(u,{Z:()=>d});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function s({icon:l,size:r=24,...m},g){return(0,o.cloneElement)(l,{width:r,height:r,...m,ref:g})}const d=(0,o.forwardRef)(s)},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(w,u,e)=>{e.d(u,{Z:()=>l});var o=e("../../../node_modules/.pnpm/@wordpress+primitives@4.0.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const l=(0,s.jsx)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(o.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})},"../components/components/button/index.tsx":(w,u,e)=>{e.d(u,{Z:()=>z});var o=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js"),g=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),D=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),O=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(O),S=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),k={};k.insert="head",k.singleton=!1;var C=t()(S.Z,k);const b=S.Z.locals||{};var h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const I=l.__,j=(0,D.forwardRef)((P,$)=>{var i,n;const{children:x,variant:Y="primary",size:N="normal",weight:L="bold",icon:Z,iconSize:Q,disabled:M,isDestructive:q,isLoading:G,isExternalLink:B,className:A,text:ee,fullWidth:ne,...y}=P,oe=(0,g.Z)(b.button,A,{[b.normal]:N==="normal",[b.small]:N==="small",[b.icon]:!!Z,[b.loading]:G,[b.regular]:L==="regular",[b["full-width"]]:ne,[b["is-icon-button"]]:!!Z&&!x});y.ref=$;const X=N==="normal"?20:16,K=B&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.Z,{size:X,icon:m.Z,className:b["external-icon"]}),(0,h.jsx)(o.Z,{as:"span",children:I("(opens in a new tab)","jetpack")})]}),W=B?"_blank":void 0,a=(x==null?void 0:x[0])&&x[0]!==null&&((n=(i=x==null?void 0:x[0])==null?void 0:i.props)==null?void 0:n.className)!=="components-tooltip";return(0,h.jsxs)(s.ZP,{target:W,variant:Y,className:(0,g.Z)(oe,{"has-text":!!Z&&a}),icon:B?void 0:Z,iconSize:Q,disabled:M,"aria-disabled":M,isDestructive:q,text:ee,...y,children:[G&&(0,h.jsx)(d.ZP,{}),(0,h.jsx)("span",{children:x}),K]})});j.displayName="Button";const z=j;try{j.displayName="Button",j.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:j.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(P){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(w,u,e)=>{e.d(u,{Z:()=>m});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(o),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),l=e.n(d),r=l()(s());r.push([w.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),r.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const m=r},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/global-notices/styles.module.scss":(w,u,e)=>{e.d(u,{Z:()=>m});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(o),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),l=e.n(d),r=l()(s());r.push([w.id,".K_OQHcuBiF34LevaDW4H.components-snackbar-list{position:fixed;inset-block-start:auto;inset-block-end:0;inset-inline:0;z-index:100001}@media(min-width: 600px){.K_OQHcuBiF34LevaDW4H.components-snackbar-list{width:auto;inset-inline:unset;inset-block-start:4rem;inset-inline-end:1rem}}@media(min-width: 782px){.K_OQHcuBiF34LevaDW4H.components-snackbar-list{inset-block-start:3rem}}",""]),r.locals={"global-notices":"K_OQHcuBiF34LevaDW4H"};const m=r}}]);})();
