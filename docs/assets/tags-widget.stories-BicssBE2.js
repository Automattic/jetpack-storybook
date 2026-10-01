import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Vu as a,ku as o,ml as s,t as c}from"./build-module-DNhkEVJn.js";import{At as l}from"./build-module-DmDwTLpf2.js";import{m as u,r as ee}from"./hooks-DJOaOD3e.js";import{o as d,t as f}from"./src-DzwlO62w.js";import{t as p}from"./src-CqGCPYrJ.js";import{E as m,nn as h,t as g}from"./src-CEIY9bMd.js";import{Tt as te}from"./helpers-CL3xLBCo.js";import"./rows-DAmD2BmE.js";import{r as ne,t as re}from"./leaderboard-skeleton-xBcrkNps.js";import{n as ie,r as _}from"./with-story-router-MFiQcOyg.js";import{n as ae,r as oe,s as v}from"./register-report-mocks-DvyopDzD.js";import{_ as y,b as se,i as ce,m as le,o as b,r as ue}from"./leaderboard-IR9WDVLQ.js";import{t as de}from"./widget-state-D-iGePa_.js";import{a as x,r as S}from"./src-DXcDLDsX.js";import{t as C}from"./src-DCPXqmQY.js";import{a as fe,d as pe,f as me,i as he,n as ge,p as _e,r as w,u as ve}from"./with-widget-canvas-Dmn57l9G.js";var T,E,D,O,ye=e((()=>{T=`_root_15if1_1`,E=`_content_15if1_9`,D=`_childList_15if1_19`,O={root:T,content:E,childList:D}}));function k({max:e}){let{data:t,isLoading:n,isFetching:r,isError:i,refetch:o}=m({max:e}),s=(0,a.useMemo)(()=>(t?.data?.[0]?.items??[]).slice(0,e>0?e:void 0).map(e=>{let t=e.link??e.labelText,n=(e.children??[]).map(e=>({id:e.link??`${t}-${e.label}`,label:e.label,labelIcon:e.labelIcon,link:e.link}));return{id:t,label:e.labelText,labelIcon:e.label[0]?.labelIcon??``,value:e.value,link:e.link,children:n}}),[t,e]);return{data:s,isLoading:n,isFetching:r,isError:s.length===0&&i,refetch:o}}var A=e((()=>{o(),g()}));function j({members:e}){return(0,P.jsx)(l,{direction:`column`,className:O.childList,children:e.map(e=>(0,P.jsx)(ue,{label:e.label,media:{kind:`icon`,icon:S(e.labelIcon)},action:b({href:x(e.link)??void 0,hasChildren:!1})},e.id))})}function M(){let{data:e,isLoading:n,isFetching:i,isError:o,refetch:s}=k({max:10}),{drillDownItem:c,drillDown:u,resetDrillDown:f}=ee(),p=(0,a.useMemo)(()=>c?e.find(e=>e.label===c)??null:null,[e,c]);(0,a.useEffect)(()=>{c&&!p&&f()},[c,p,f]);let m=(0,a.useMemo)(()=>{let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let i=e.children.length>0;return{id:e.id,currentValue:e.value,currentShare:te(e.value,n),...ce({label:e.label,media:{kind:`icon`,icon:S(e.labelIcon)},action:b({href:x(e.link)??void 0,hasChildren:i,drillDown:{onClick:()=>u(e.label),ariaLabel:r(t(`View the tags and categories in %s`,`jetpack-premium-analytics-pkg`),e.label)}})})}})},[e,u]);return(0,P.jsxs)(l,{className:O.root,children:[(0,P.jsxs)(`div`,{className:O.content,children:[p&&(0,P.jsx)(y,{label:t(`All tags & categories`,`jetpack-premium-analytics-pkg`),onClick:f}),(0,P.jsx)(de,{isLoading:n,isFetching:i,isError:o,isEmpty:e.length===0,error:{description:t(`We couldn't load tags & categories. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:d,description:t(`Learn about your most visited tags & categories to track engaging topics.`,`jetpack-premium-analytics-pkg`)},renderLoading:p?void 0:(0,P.jsx)(re,{rows:10}),children:p?(0,P.jsx)(j,{members:p.children}):(0,P.jsx)(ne,{data:m,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!1,decimals:0}}})})]}),(0,P.jsx)(le,{children:(0,P.jsx)(se,{report:`tags`})})]})}function N({attributes:e={}}){return(0,P.jsx)(u,{attributes:e,children:(0,P.jsx)(M,{})})}var P,be=e((()=>{C(),f(),o(),n(),p(),ye(),A(),P=i()})),F,xe=e((()=>{c(),F={icon:s,attributes:[],example:{attributes:{}}}})),I,L,R,z,B,V,H,Se=e((()=>{I=`jpa/tags`,L=`Top tags & categories in the last 7 days`,R=`Your most visited tags and categories, ranked by views.`,z={content:`The tags and categories associated with your most-viewed content, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(N,{attributes:{reportParams:h()}})}function Ce(e){return(0,W.jsx)(N,{...e})}function we(e){return(0,W.jsx)(pe,{...e,widgetType:K,renderModule:G,renderComponent:Ce,attributes:{reportParams:h(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),me(),ie(),fe(),ge(),ae(),be(),xe(),Se(),W=i(),oe(),G=`storybook/tags`,K=he(H,F),q={title:`Packages/Premium Analytics/Widgets/Tags`,component:N,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Tags & categories" widget. Displays the site's most visited tags and categories over the seven days ending yesterday, ranked by views — the endpoint takes no date parameters, so the section's date filter does not reach it. Single tags/categories link to their archive; grouped rows (several tags/categories sharing posts) drill down to their members. Ported from the Jetpack Stats Tags & categories module.`}}}},J={render:U,decorators:[w,_]},Y={render:U,tags:[`!autodocs`],decorators:[w,_],beforeEach:()=>(v(`stats/tags`,`loading`),()=>v(`stats/tags`,null))},X={render:U,tags:[`!autodocs`],decorators:[w,_],beforeEach:()=>(v(`stats/tags`,`error`),()=>v(`stats/tags`,null))},Z={render:U,tags:[`!autodocs`],decorators:[w,_],beforeEach:()=>(v(`stats/tags`,`empty`),()=>v(`stats/tags`,null))},Q={render:e=>(0,W.jsx)(we,{...e}),args:{...ve},argTypes:{..._e},decorators:[_]},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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