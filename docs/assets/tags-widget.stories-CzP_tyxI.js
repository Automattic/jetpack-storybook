import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Vu as a,ku as o,ml as s,t as c}from"./build-module-DNhkEVJn.js";import{At as l}from"./build-module-DmDwTLpf2.js";import{m as u,r as ee}from"./hooks-C6_0wJbG.js";import{o as te,t as d}from"./src-DzwlO62w.js";import{t as f}from"./src-DUzInW34.js";import{$t as p,C as m,t as h}from"./src-Bv5Ihcha.js";import{Et as ne}from"./helpers-2uuc1TR_.js";import"./rows-DAmD2BmE.js";import{r as re,t as ie}from"./leaderboard-skeleton-B1xHwVvu.js";import{n as ae,r as g}from"./with-story-router-Dr9jGymE.js";import{n as oe,r as se,s as _}from"./register-report-mocks-CRx4Nd42.js";import{_ as v,b as y,i as ce,m as le,o as b,r as ue}from"./leaderboard-Cr3O3SHZ.js";import{t as de}from"./widget-state-DBqOMFpG.js";import{a as x,r as S}from"./src-uVNYrwa0.js";import{t as fe}from"./src-CfqvH2lw.js";import{a as pe,d as me,f as he,i as ge,n as _e,p as ve,r as C,u as ye}from"./with-widget-canvas-nZJ8264w.js";var w,T,E,D,O=e((()=>{w=`_root_15if1_1`,T=`_content_15if1_9`,E=`_childList_15if1_19`,D={root:w,content:T,childList:E}}));function k({max:e}){let{data:t,isLoading:n,isFetching:r,isError:i,refetch:o}=m({max:e}),s=(0,a.useMemo)(()=>(t?.data?.[0]?.items??[]).slice(0,e>0?e:void 0).map(e=>{let t=e.link??e.labelText,n=(e.children??[]).map(e=>({id:e.link??`${t}-${e.label}`,label:e.label,labelIcon:e.labelIcon,link:e.link}));return{id:t,label:e.labelText,labelIcon:e.label[0]?.labelIcon??``,value:e.value,link:e.link,children:n}}),[t,e]);return{data:s,isLoading:n,isFetching:r,isError:s.length===0&&i,refetch:o}}var A=e((()=>{o(),h()}));function j({members:e}){return(0,P.jsx)(l,{direction:`column`,className:D.childList,children:e.map(e=>(0,P.jsx)(ue,{label:e.label,media:{kind:`icon`,icon:S(e.labelIcon)},action:b({href:x(e.link)??void 0,hasChildren:!1})},e.id))})}function M(){let{data:e,isLoading:n,isFetching:i,isError:o,refetch:s}=k({max:10}),{drillDownItem:c,drillDown:u,resetDrillDown:d}=ee(),f=(0,a.useMemo)(()=>c?e.find(e=>e.label===c)??null:null,[e,c]);(0,a.useEffect)(()=>{c&&!f&&d()},[c,f,d]);let p=(0,a.useMemo)(()=>{let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let i=e.children.length>0;return{id:e.id,currentValue:e.value,currentShare:ne(e.value,n),...ce({label:e.label,media:{kind:`icon`,icon:S(e.labelIcon)},action:b({href:x(e.link)??void 0,hasChildren:i,drillDown:{onClick:()=>u(e.label),ariaLabel:r(t(`View the tags and categories in %s`,`jetpack-premium-analytics-pkg`),e.label)}})})}})},[e,u]);return(0,P.jsxs)(l,{className:D.root,children:[(0,P.jsxs)(`div`,{className:D.content,children:[f&&(0,P.jsx)(v,{label:t(`All tags & categories`,`jetpack-premium-analytics-pkg`),onClick:d}),(0,P.jsx)(de,{isLoading:n,isFetching:i,isError:o,isEmpty:e.length===0,error:{description:t(`We couldn't load tags & categories. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:te,description:t(`Learn about your most visited tags & categories to track engaging topics.`,`jetpack-premium-analytics-pkg`)},renderLoading:f?void 0:(0,P.jsx)(ie,{rows:10}),children:f?(0,P.jsx)(j,{members:f.children}):(0,P.jsx)(re,{data:p,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!1,decimals:0}}})})]}),(0,P.jsx)(le,{children:(0,P.jsx)(y,{report:`tags`})})]})}function N({attributes:e={}}){return(0,P.jsx)(u,{attributes:e,children:(0,P.jsx)(M,{})})}var P,be=e((()=>{fe(),d(),o(),n(),f(),O(),A(),P=i()})),F,xe=e((()=>{c(),F={icon:s,attributes:[],example:{attributes:{}}}})),I,L,R,z,B,V,H,Se=e((()=>{I=`jpa/tags`,L=`Top tags & categories in the last 7 days`,R=`Your most visited tags and categories, ranked by views.`,z={content:`The tags and categories associated with your most-viewed content, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(N,{attributes:{reportParams:p()}})}function Ce(e){return(0,W.jsx)(N,{...e})}function we(e){return(0,W.jsx)(me,{...e,widgetType:K,renderModule:G,renderComponent:Ce,attributes:{reportParams:p(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),he(),ae(),pe(),_e(),oe(),be(),xe(),Se(),W=i(),se(),G=`storybook/tags`,K=ge(H,F),q={title:`Packages/Premium Analytics/Widgets/Tags`,component:N,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Tags & categories" widget. Displays the site's most visited tags and categories over the seven days ending yesterday, ranked by views — the endpoint takes no date parameters, so the section's date filter does not reach it. Single tags/categories link to their archive; grouped rows (several tags/categories sharing posts) drill down to their members. Ported from the Jetpack Stats Tags & categories module.`}}}},J={render:U,decorators:[C,g]},Y={render:U,tags:[`!autodocs`],decorators:[C,g],beforeEach:()=>(_(`stats/tags`,`loading`),()=>_(`stats/tags`,null))},X={render:U,tags:[`!autodocs`],decorators:[C,g],beforeEach:()=>(_(`stats/tags`,`error`),()=>_(`stats/tags`,null))},Z={render:U,tags:[`!autodocs`],decorators:[C,g],beforeEach:()=>(_(`stats/tags`,`empty`),()=>_(`stats/tags`,null))},Q={render:e=>(0,W.jsx)(we,{...e}),args:{...ye},argTypes:{...ve},decorators:[g]},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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