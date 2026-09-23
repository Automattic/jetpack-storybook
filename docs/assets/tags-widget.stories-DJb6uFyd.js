import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Uu as a,gl as o,ju as s,t as c}from"./build-module-2iv4IIRq.js";import{Et as l}from"./build-module-l8c-_EUg2.js";import{fn as u,m as d,r as ee}from"./hooks-CLouKpYL.js";import{o as te,t as f}from"./src-C-E2d-Lb.js";import{t as p}from"./src-Gkv0in2D.js";import{O as m,r as h,tn as g}from"./date-period-dropdown-B9HL1A4f.js";import{a as _,r as v}from"./src-v88tkFid2.js";import"./constants-B1kGztHF.js";import{r as ne,t as re}from"./leaderboard-skeleton-DhbiPp0o.js";import{c as y,i as ie,r as b}from"./register-report-mocks-LJY9MSCg.js";import{A as x,N as S,S as ae,j as oe,v as se,w as ce}from"./report-metric-CvgLNLEf.js";import{t as le}from"./widget-state-CVdvG6n8.js";import{t as ue}from"./src-9-uNBHt6.js";import{a as de,c as fe,d as C,i as pe,l as me,n as he,o as ge,r as w,s as _e,u as ve}from"./with-widget-canvas-BMc4Tpft.js";var T,E,D,O,ye=e((()=>{T=`_root_15if1_1`,E=`_content_15if1_9`,D=`_childList_15if1_19`,O={root:T,content:E,childList:D}}));function k({max:e}){let{data:t,isLoading:n,isFetching:r,isError:i,refetch:o}=m({max:e}),s=(0,a.useMemo)(()=>(t?.data?.[0]?.items??[]).slice(0,e>0?e:void 0).map(e=>{let t=e.link??e.labelText,n=(e.children??[]).map(e=>({id:e.link??`${t}-${e.label}`,label:e.label,labelIcon:e.labelIcon,link:e.link}));return{id:t,label:e.labelText,labelIcon:e.label[0]?.labelIcon??``,value:e.value,link:e.link,children:n}}),[t,e]);return{data:s,isLoading:n,isFetching:r,isError:s.length===0&&i,refetch:o}}var A=e((()=>{s(),h()}));function j({members:e}){return(0,P.jsx)(l,{direction:`column`,className:O.childList,children:e.map(e=>(0,P.jsx)(x,{label:e.label,media:{kind:`icon`,icon:v(e.labelIcon)},action:S({href:_(e.link)??void 0,hasChildren:!1})},e.id))})}function M(){let{data:e,isLoading:n,isFetching:i,isError:o,refetch:s}=k({max:10}),{drillDownItem:c,drillDown:d,resetDrillDown:f}=ee(),p=(0,a.useMemo)(()=>c?e.find(e=>e.label===c)??null:null,[e,c]);(0,a.useEffect)(()=>{c&&!p&&f()},[c,p,f]);let m=(0,a.useMemo)(()=>{let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let i=e.children.length>0;return{id:e.id,currentValue:e.value,currentShare:u(e.value,n),...oe({label:e.label,media:{kind:`icon`,icon:v(e.labelIcon)},action:S({href:_(e.link)??void 0,hasChildren:i,drillDown:{onClick:()=>d(e.label),ariaLabel:r(t(`View the tags and categories in %s`,`jetpack-premium-analytics-pkg`),e.label)}})})}})},[e,d]);return(0,P.jsxs)(l,{className:O.root,children:[(0,P.jsxs)(`div`,{className:O.content,children:[p&&(0,P.jsx)(ce,{label:t(`All tags & categories`,`jetpack-premium-analytics-pkg`),onClick:f}),(0,P.jsx)(le,{isLoading:n,isFetching:i,isError:o,isEmpty:e.length===0,error:{description:t(`We couldn't load tags & categories. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:te,description:t(`Learn about your most visited tags & categories to track engaging topics.`,`jetpack-premium-analytics-pkg`)},renderLoading:p?void 0:(0,P.jsx)(re,{rows:10}),children:p?(0,P.jsx)(j,{members:p.children}):(0,P.jsx)(ne,{data:m,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!1,decimals:0}}})})]}),(0,P.jsx)(ae,{children:(0,P.jsx)(se,{report:`tags`})})]})}function N({attributes:e={}}){return(0,P.jsx)(d,{attributes:e,children:(0,P.jsx)(M,{})})}var P,be=e((()=>{ue(),f(),s(),n(),p(),ye(),A(),P=i()})),F,xe=e((()=>{c(),F={icon:o,attributes:[],example:{attributes:{}}}})),I,L,R,z,B,V,H,Se=e((()=>{I=`jpa/tags`,L=`Top tags & categories in the last 7 days`,R=`Your most visited tags and categories, ranked by views.`,z={content:`The tags and categories associated with your most-viewed content, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(N,{attributes:{reportParams:g()}})}function Ce(e){return(0,W.jsx)(N,{...e})}function we(e){return(0,W.jsx)(_e,{...e,widgetType:K,renderModule:G,renderComponent:Ce,attributes:{reportParams:g(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),fe(),ve(),de(),he(),b(),be(),xe(),Se(),W=i(),ie(),G=`storybook/tags`,K=pe(H,F),q={title:`Packages/Premium Analytics/Widgets/Tags`,component:N,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Tags & categories" widget. Displays the site's most visited tags and categories over the seven days ending yesterday, ranked by views — the endpoint takes no date parameters, so the section's date filter does not reach it. Single tags/categories link to their archive; grouped rows (several tags/categories sharing posts) drill down to their members. Ported from the Jetpack Stats Tags & categories module.`}}}},J={render:U,decorators:[w,C]},Y={render:U,tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(y(`stats/tags`,`loading`),()=>y(`stats/tags`,null))},X={render:U,tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(y(`stats/tags`,`error`),()=>y(`stats/tags`,null))},Z={render:U,tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(y(`stats/tags`,`empty`),()=>y(`stats/tags`,null))},Q={render:e=>(0,W.jsx)(we,{...e}),args:{...ge},argTypes:{...me},decorators:[C]},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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