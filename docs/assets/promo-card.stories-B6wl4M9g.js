import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{Cc as o,n as s}from"./build-module-j0f5js0M.js";import{Hn as c,Kn as l,ci as u,cr as d,ct as f,fr as p,ir as m,ur as h}from"./build-module-vwO17YW3.js";import{t as g}from"./src-DMHlbKtp.js";import{K as _,c as v,i as y}from"./charts-provider-CztY3Jeb.js";import{a as b,t as x}from"./src-DfspuZSX.js";function S({href:e,label:t,variant:n=`primary`,trackClick:r}){if(!t)return null;let i=b(e);return i?(0,C.jsx)(f,{href:i,variant:w[n],openInNewTab:!0,onClick:r,children:t}):(0,C.jsx)(`span`,{children:t})}var C,w,T=e((()=>{g(),x(),C=a(),w={primary:`solid`,secondary:`outline`}}));function E({promo:e}){let{slug:t,placement:n,dismissible:i}=e,{isDismissed:a,willBeFinal:s,dismiss:f}=_(e),g=v(),y=(0,D.useRef)(null),b=(0,D.useId)();(0,D.useEffect)(()=>{let e=y.current;if(a||!e||k.has(n))return;let r=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(r.disconnect(),k.has(n)||(k.add(n),g(`jetpack_premium_analytics_promo_view`,{slug:t,placement:n})))});return r.observe(e),()=>r.disconnect()},[a,n,t,g]);let x=(0,D.useCallback)(()=>g(`jetpack_premium_analytics_promo_click`,{slug:t,placement:n,label:`cta`}),[g,t,n]),C=(0,D.useCallback)(()=>{g(`jetpack_premium_analytics_promo_dismiss`,{slug:t,placement:n,dismissal:s?`final`:`snooze`});let e=y.current?.parentElement;e&&(e.tabIndex=-1,e.focus(),e.addEventListener(`blur`,()=>e.removeAttribute(`tabindex`),{once:!0})),f()},[s,g,t,n,f]);return a?null:(0,O.jsxs)(p,{ref:y,role:`complementary`,"aria-labelledby":b,"data-testid":`promo-card`,children:[(0,O.jsx)(h,{children:(0,O.jsxs)(l,{direction:`row`,justify:`space-between`,align:`center`,gap:`md`,children:[(0,O.jsx)(m,{id:b,render:(0,O.jsx)(`h3`,{}),children:e.title}),i&&(0,O.jsx)(c,{icon:o,label:r(`Dismiss`,`jetpack-premium-analytics-pkg`),variant:`minimal`,tone:`neutral`,size:`small`,onClick:C})]})}),(0,O.jsx)(d,{children:(0,O.jsxs)(l,{direction:`column`,gap:`md`,align:`flex-start`,children:[(0,O.jsx)(u,{variant:`body-md`,children:e.description}),(0,O.jsx)(S,{href:e.cta_url,label:e.cta_label,variant:e.cta_variant,trackClick:x})]})})]})}var D,O,k,A=e((()=>{g(),i(),s(),D=t(n(),1),y(),T(),O=a(),k=new Set})),j,M,N,P,F,I;e((()=>{A(),j={slug:`storybook/offer`,placement:`settings`,order:10,title:`Grow your audience with Acme`,description:`Turn readers into subscribers with tools that work alongside your dashboard.`,cta_label:`Try Acme`,cta_url:`https://example.com/acme`,cta_variant:`primary`,dismissible:!1,snooze_days:90},M={title:`Packages/Premium Analytics/Widgets Toolkit/Components/PromoCard`,component:E,tags:[`autodocs`],parameters:{docs:{description:{component:`A promo drawn as a card: the frame, the title, the close control when it is dismissible, and the registered description and call to action.`}}}},N={args:{promo:j}},P={args:{promo:{...j,slug:`storybook/outlined`,cta_variant:`secondary`}}},F={args:{promo:{...j,slug:`storybook/dismissible`,dismissible:!0}}},I=[`Default`,`Outlined`,`Dismissible`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    promo: basePromo
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    promo: {
      ...basePromo,
      slug: 'storybook/outlined',
      cta_variant: 'secondary'
    }
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    promo: {
      ...basePromo,
      slug: 'storybook/dismissible',
      dismissible: true
    }
  }
}`,...F.parameters?.docs?.source}}}}))();export{N as Default,F as Dismissible,P as Outlined,I as __namedExportsOrder,M as default};