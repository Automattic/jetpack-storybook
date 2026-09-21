import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Uu as a,gl as o,ju as s,t as c}from"./build-module-2iv4IIRq.js";import{Et as l}from"./build-module-l8c-_EUg2.js";import{m as u,r as ee,sn as te}from"./hooks-dNLTgJT3.js";import{o as ne,t as d}from"./src-C-E2d-Lb.js";import{t as f}from"./src-C0NSI4UJ.js";import{O as p,r as m,tn as h}from"./date-period-dropdown-Cqf-rUWL.js";import{a as g,r as _}from"./src-Cnnl_J6B.js";import"./constants-C7AKabD4.js";import{r as re,t as ie}from"./leaderboard-skeleton-wr4AUF6m.js";import{c as v,i as ae,r as y}from"./register-report-mocks-DtBZuojW.js";import{O as b,S as oe,b as se,j as x,k as ce,v as le}from"./report-metric-DyF3WRCr.js";import{t as S}from"./widget-state-D2xrzzvz.js";import{t as ue}from"./src-BX0QnOQ5.js";import{a as de,c as fe,d as C,i as pe,l as me,n as he,o as ge,r as w,s as _e,u as ve}from"./with-widget-canvas-TkRcCiew.js";var T,E,D,O,ye=e((()=>{T=`_root_15if1_1`,E=`_content_15if1_9`,D=`_childList_15if1_19`,O={root:T,content:E,childList:D}}));function k({max:e}){let{data:t,isLoading:n,isFetching:r,isError:i,refetch:o}=p({max:e}),s=(0,a.useMemo)(()=>(t?.data?.[0]?.items??[]).slice(0,e>0?e:void 0).map(e=>{let t=e.link??e.labelText,n=(e.children??[]).map(e=>({id:e.link??`${t}-${e.label}`,label:e.label,labelIcon:e.labelIcon,link:e.link}));return{id:t,label:e.labelText,labelIcon:e.label[0]?.labelIcon??``,value:e.value,link:e.link,children:n}}),[t,e]);return{data:s,isLoading:n,isFetching:r,isError:s.length===0&&i,refetch:o}}var A=e((()=>{s(),m()}));function j({members:e}){return(0,P.jsx)(l,{direction:`column`,className:O.childList,children:e.map(e=>(0,P.jsx)(b,{label:e.label,media:{kind:`icon`,icon:_(e.labelIcon)},action:x({href:g(e.link)??void 0,hasChildren:!1})},e.id))})}function M(){let{data:e,isLoading:n,isFetching:i,isError:o,refetch:s}=k({max:10}),{drillDownItem:c,drillDown:u,resetDrillDown:d}=ee(),f=(0,a.useMemo)(()=>c?e.find(e=>e.label===c)??null:null,[e,c]);(0,a.useEffect)(()=>{c&&!f&&d()},[c,f,d]);let p=(0,a.useMemo)(()=>{let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let i=e.children.length>0;return{id:e.id,currentValue:e.value,currentShare:te(e.value,n),...ce({label:e.label,media:{kind:`icon`,icon:_(e.labelIcon)},action:x({href:g(e.link)??void 0,hasChildren:i,drillDown:{onClick:()=>u(e.label),ariaLabel:r(t(`View the tags and categories in %s`,`jetpack-premium-analytics-pkg`),e.label)}})})}})},[e,u]);return(0,P.jsxs)(l,{className:O.root,children:[(0,P.jsxs)(`div`,{className:O.content,children:[f&&(0,P.jsx)(oe,{label:t(`All tags & categories`,`jetpack-premium-analytics-pkg`),onClick:d}),(0,P.jsx)(S,{isLoading:n,isFetching:i,isError:o,isEmpty:e.length===0,error:{description:t(`We couldn't load tags & categories. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:ne,description:t(`Learn about your most visited tags & categories to track engaging topics.`,`jetpack-premium-analytics-pkg`)},renderLoading:f?void 0:(0,P.jsx)(ie,{rows:10}),children:f?(0,P.jsx)(j,{members:f.children}):(0,P.jsx)(re,{data:p,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!1,decimals:0}}})})]}),(0,P.jsx)(se,{children:(0,P.jsx)(le,{report:`tags`})})]})}function N({attributes:e={}}){return(0,P.jsx)(u,{attributes:e,children:(0,P.jsx)(M,{})})}var P,be=e((()=>{ue(),d(),s(),n(),f(),ye(),A(),P=i()})),F,xe=e((()=>{c(),F={icon:o,attributes:[],example:{attributes:{}}}})),I,L,R,z,B,V,H,Se=e((()=>{I=`jpa/tags`,L=`Top tags & categories in the last 7 days`,R=`Your most visited tags and categories, ranked by views.`,z={content:`The tags and categories associated with your most-viewed content, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(N,{attributes:{reportParams:h()}})}function Ce(e){return(0,W.jsx)(N,{...e})}function we(e){return(0,W.jsx)(_e,{...e,widgetType:K,renderModule:G,renderComponent:Ce,attributes:{reportParams:h(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),fe(),ve(),de(),he(),y(),be(),xe(),Se(),W=i(),ae(),G=`storybook/tags`,K=pe(H,F),q={title:`Packages/Premium Analytics/Widgets/Tags`,component:N,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Tags & categories" widget. Displays the site's most visited tags and categories over the seven days ending yesterday, ranked by views — the endpoint takes no date parameters, so the section's date filter does not reach it. Single tags/categories link to their archive; grouped rows (several tags/categories sharing posts) drill down to their members. Ported from the Jetpack Stats Tags & categories module.`}}}},J={render:U,decorators:[w,C]},Y={render:U,tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(v(`stats/tags`,`loading`),()=>v(`stats/tags`,null))},X={render:U,tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(v(`stats/tags`,`error`),()=>v(`stats/tags`,null))},Z={render:U,tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(v(`stats/tags`,`empty`),()=>v(`stats/tags`,null))},Q={render:e=>(0,W.jsx)(we,{...e}),args:{...ge},argTypes:{...me},decorators:[C]},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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