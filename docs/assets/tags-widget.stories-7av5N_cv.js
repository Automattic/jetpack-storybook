import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{h as a,t as o}from"./build-module-DuNGIx6S.js";import{Y as s,ml as c,t as l}from"./build-module-CR6EsQjA.js";import{pn as u,t as d}from"./src-B78WroZb.js";import{b as ee,g as f,r as te}from"./hooks-DowxzTP6.js";import{o as ne,t as p}from"./src-CldFJNXL.js";import{qt as m,t as h,x as re}from"./src-CAjmSz3B.js";import"./constants-B1kGztHF.js";import{mt as ie}from"./chart-tooltip-BAdPOomj.js";import{r as g}from"./src-CbuSCp4Y2.js";import{r as ae,t as oe}from"./leaderboard-skeleton-D-zvyuJN.js";import{F as _,G as se,K as ce,M as le,N as ue,S as v,Y as y,b as de,w as fe}from"./report-metric-DjfJhXCx.js";import{t as pe}from"./widget-state-DpgpCyQB.js";import{C as me,D as b,E as he,O as ge,S as _e,T as ve,b as ye,k as x,t as be,w as xe,x as S}from"./src-C9sCk2Ob.js";var C,w,T,E,D=e((()=>{C=`_root_jiv31_1`,w=`_content_jiv31_9`,T=`_childList_jiv31_20`,E={root:C,content:w,childList:T}}));function O({reportParams:e,max:t}){let{data:n,isLoading:r,isFetching:i,isError:o,refetch:s}=re({...e,max:t}),c=(0,a.useMemo)(()=>(n?.data?.[0]?.items??[]).slice(0,t>0?t:void 0).map(e=>{let t=e.link??e.labelText,n=(e.children??[]).map(e=>({id:e.link??`${t}-${e.label}`,label:e.label,labelIcon:e.labelIcon,link:e.link}));return{id:t,label:e.labelText,labelIcon:e.label[0]?.labelIcon??``,value:e.value,link:e.link,children:n}}),[n,t]);return{data:c,isLoading:r,isFetching:i,isError:c.length===0&&o,refetch:s}}var k=e((()=>{o(),h()}));function A({members:e}){return(0,N.jsx)(u,{direction:`column`,className:E.childList,children:e.map(e=>(0,N.jsx)(le,{label:e.label,media:{kind:`icon`,icon:P(e.labelIcon)},action:_({href:g(e.link)??void 0,hasChildren:!1})},e.id))})}function j(){let{reportParams:e}=ee(),{data:r,isLoading:i,isFetching:o,isError:s,refetch:c}=O({reportParams:e,max:10}),{drillDownItem:l,drillDown:d,resetDrillDown:f}=te(),p=(0,a.useMemo)(()=>l?r.find(e=>e.label===l)??null:null,[r,l]);(0,a.useEffect)(()=>{l&&!p&&f()},[l,p,f]);let m=(0,a.useMemo)(()=>{let e=Math.max(...r.map(e=>e.value),0);return r.map(r=>{let i=r.children.length>0;return{id:r.id,currentValue:r.value,currentShare:ie(r.value,e),...ue({label:r.label,media:{kind:`icon`,icon:P(r.labelIcon)},action:_({href:g(r.link)??void 0,hasChildren:i,drillDown:{onClick:()=>d(r.label),ariaLabel:t(n(`View the tags and categories in %s`,`jetpack-premium-analytics-pkg`),r.label)}})})}})},[r,d]);return(0,N.jsxs)(u,{className:E.root,children:[(0,N.jsxs)(`div`,{className:E.content,children:[p&&(0,N.jsx)(fe,{label:n(`All tags & categories`,`jetpack-premium-analytics-pkg`),onClick:f}),(0,N.jsx)(pe,{isLoading:i,isFetching:o,isError:s,isEmpty:r.length===0,error:{description:n(`We couldn't load tags & categories. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},empty:{icon:ne,description:n(`Learn about your most visited tags & categories to track engaging topics.`,`jetpack-premium-analytics-pkg`)},renderLoading:p?void 0:(0,N.jsx)(oe,{rows:10}),children:p?(0,N.jsx)(A,{members:p.children}):(0,N.jsx)(ae,{data:m,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]}),(0,N.jsx)(v,{children:(0,N.jsx)(de,{report:`tags`})})]})}function M({attributes:e={}}){return(0,N.jsx)(f,{attributes:e,children:(0,N.jsx)(j,{})})}var N,P,Se=e((()=>{be(),p(),o(),r(),l(),d(),D(),k(),N=i(),P=e=>e===`folder`?c:s})),F,Ce=e((()=>{l(),F={icon:c,attributes:[],example:{attributes:{}}}})),I,L,R,z,B,V,H,we=e((()=>{I=`jpa/tags`,L=`Top tags & categories`,R=`Your most visited tags and categories, ranked by views.`,z={content:`The tags and categories associated with your most-viewed content, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(M,{attributes:{reportParams:m()}})}function Te(e){return(0,W.jsx)(M,{...e})}function Ee(e){return(0,W.jsx)(ve,{...e,widgetType:K,renderModule:G,renderComponent:Te,attributes:{reportParams:m(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),he(),ge(),me(),ye(),se(),Se(),Ce(),we(),W=i(),ce(),G=`storybook/tags`,K=_e(H,F),q={title:`Packages/Premium Analytics/Widgets/Tags`,component:M,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Tags & categories" widget. Displays the site's most visited tags and categories for the selected period, ranked by views. Single tags/categories link to their archive; grouped rows (several tags/categories sharing posts) drill down to their members. Ported from the Jetpack Stats Tags & categories module.`}}}},J={render:U,decorators:[S,x]},Y={render:U,tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(y(`stats/tags`,`loading`),()=>y(`stats/tags`,null))},X={render:U,tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(y(`stats/tags`,`error`),()=>y(`stats/tags`,null))},Z={render:U,tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(y(`stats/tags`,`empty`),()=>y(`stats/tags`,null))},Q={render:e=>(0,W.jsx)(Ee,{...e}),args:{...xe},argTypes:{...b},decorators:[x]},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderTags,
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderTags,
  // Kept off the shared autodocs page: the mock override is keyed by path, so it
  // would otherwise force the sibling stories on that page into the same state.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/tags', 'loading');
    return () => setReportMockState('stats/tags', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderTags,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/tags', 'error');
    return () => setReportMockState('stats/tags', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderTags,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/tags', 'empty');
    return () => setReportMockState('stats/tags', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral tag glyph
and "Learn about your most visited tags & categories to track engaging topics.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <TagsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  },
  decorators: [withStoryRouter]
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,q as default};