import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Uu as a,gl as o,ju as s,t as c}from"./build-module-2iv4IIRq.js";import{vt as l}from"./build-module-BX6MUpOQ2.js";import{en as u,g as d,r as ee}from"./hooks-hFuVIi58.js";import{o as te,t as f}from"./src-C-E2d-Lb.js";import{t as p}from"./src-EPY1F4KY.js";import{$t as m,D as ne,r as h}from"./date-period-dropdown-CPZQT5Bk.js";import{a as g,r as _}from"./src-DO95yEWv.js";import"./constants-B1kGztHF.js";import{r as re,t as ie}from"./leaderboard-skeleton-CRoXXj6t.js";import{i as ae,r as oe,s as v}from"./register-report-mocks-VojlBbJn.js";import{E as y,F as b,M as se,N as ce,S as le,w as ue}from"./report-metric-DSeVOQGj.js";import{t as x}from"./widget-state-DRxOjVt5.js";import{t as de}from"./src-wVrRhu2j.js";import{a as fe,c as pe,d as S,i as me,l as he,n as ge,o as _e,r as C,s as ve,u as ye}from"./with-widget-canvas-CqXLQIwD.js";var w,T,E,D,O=e((()=>{w=`_root_15if1_1`,T=`_content_15if1_9`,E=`_childList_15if1_19`,D={root:w,content:T,childList:E}}));function k({max:e}){let{data:t,isLoading:n,isFetching:r,isError:i,refetch:o}=ne({max:e}),s=(0,a.useMemo)(()=>(t?.data?.[0]?.items??[]).slice(0,e>0?e:void 0).map(e=>{let t=e.link??e.labelText,n=(e.children??[]).map(e=>({id:e.link??`${t}-${e.label}`,label:e.label,labelIcon:e.labelIcon,link:e.link}));return{id:t,label:e.labelText,labelIcon:e.label[0]?.labelIcon??``,value:e.value,link:e.link,children:n}}),[t,e]);return{data:s,isLoading:n,isFetching:r,isError:s.length===0&&i,refetch:o}}var A=e((()=>{s(),h()}));function j({members:e}){return(0,P.jsx)(l,{direction:`column`,className:D.childList,children:e.map(e=>(0,P.jsx)(se,{label:e.label,media:{kind:`icon`,icon:_(e.labelIcon)},action:b({href:g(e.link)??void 0,hasChildren:!1})},e.id))})}function M(){let{data:e,isLoading:n,isFetching:i,isError:o,refetch:s}=k({max:10}),{drillDownItem:c,drillDown:d,resetDrillDown:f}=ee(),p=(0,a.useMemo)(()=>c?e.find(e=>e.label===c)??null:null,[e,c]);(0,a.useEffect)(()=>{c&&!p&&f()},[c,p,f]);let m=(0,a.useMemo)(()=>{let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let i=e.children.length>0;return{id:e.id,currentValue:e.value,currentShare:u(e.value,n),...ce({label:e.label,media:{kind:`icon`,icon:_(e.labelIcon)},action:b({href:g(e.link)??void 0,hasChildren:i,drillDown:{onClick:()=>d(e.label),ariaLabel:r(t(`View the tags and categories in %s`,`jetpack-premium-analytics-pkg`),e.label)}})})}})},[e,d]);return(0,P.jsxs)(l,{className:D.root,children:[(0,P.jsxs)(`div`,{className:D.content,children:[p&&(0,P.jsx)(y,{label:t(`All tags & categories`,`jetpack-premium-analytics-pkg`),onClick:f}),(0,P.jsx)(x,{isLoading:n,isFetching:i,isError:o,isEmpty:e.length===0,error:{description:t(`We couldn't load tags & categories. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:te,description:t(`Learn about your most visited tags & categories to track engaging topics.`,`jetpack-premium-analytics-pkg`)},renderLoading:p?void 0:(0,P.jsx)(ie,{rows:10}),children:p?(0,P.jsx)(j,{members:p.children}):(0,P.jsx)(re,{data:m,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!1,decimals:0}}})})]}),(0,P.jsx)(ue,{children:(0,P.jsx)(le,{report:`tags`})})]})}function N({attributes:e={}}){return(0,P.jsx)(d,{attributes:e,children:(0,P.jsx)(M,{})})}var P,be=e((()=>{de(),f(),s(),n(),p(),O(),A(),P=i()})),F,xe=e((()=>{c(),F={icon:o,attributes:[],example:{attributes:{}}}})),I,L,R,z,B,V,H,Se=e((()=>{I=`jpa/tags`,L=`Top tags & categories in the last 7 days`,R=`Your most visited tags and categories, ranked by views.`,z={content:`The tags and categories associated with your most-viewed content, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(N,{attributes:{reportParams:m()}})}function Ce(e){return(0,W.jsx)(N,{...e})}function we(e){return(0,W.jsx)(ve,{...e,widgetType:K,renderModule:G,renderComponent:Ce,attributes:{reportParams:m(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),pe(),ye(),fe(),ge(),oe(),be(),xe(),Se(),W=i(),ae(),G=`storybook/tags`,K=me(H,F),q={title:`Packages/Premium Analytics/Widgets/Tags`,component:N,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Tags & categories" widget. Displays the site's most visited tags and categories over the seven days ending yesterday, ranked by views — the endpoint takes no date parameters, so the section's date filter does not reach it. Single tags/categories link to their archive; grouped rows (several tags/categories sharing posts) drill down to their members. Ported from the Jetpack Stats Tags & categories module.`}}}},J={render:U,decorators:[C,S]},Y={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(v(`stats/tags`,`loading`),()=>v(`stats/tags`,null))},X={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(v(`stats/tags`,`error`),()=>v(`stats/tags`,null))},Z={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(v(`stats/tags`,`empty`),()=>v(`stats/tags`,null))},Q={render:e=>(0,W.jsx)(we,{...e}),args:{..._e},argTypes:{...he},decorators:[S]},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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