import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Uu as a,gl as o,ju as s,t as c}from"./build-module-2iv4IIRq.js";import{vt as l}from"./build-module-BX6MUpOQ2.js";import{an as u,g as d,r as ee}from"./hooks-B3JnccDr.js";import{o as te,t as f}from"./src-C-E2d-Lb.js";import{t as p}from"./src-D7Yr4SSS.js";import{O as m,en as h,r as g}from"./date-period-dropdown-0E4d4hmh.js";import{a as _,r as v}from"./src-DC7qTaXK.js";import"./constants-B1kGztHF.js";import{r as ne,t as re}from"./leaderboard-skeleton-DZjG4ULi.js";import{i as ie,r as ae,s as y}from"./register-report-mocks-CSw4EMOD.js";import{O as b,S as oe,b as se,j as x,k as ce,v as le}from"./report-metric-vw2Bh-kL.js";import{t as ue}from"./widget-state-CK_yuOUz.js";import{t as de}from"./src-Hnhz506f.js";import{a as fe,c as pe,d as S,i as me,l as he,n as ge,o as _e,r as C,s as ve,u as ye}from"./with-widget-canvas-Doxu6JHw.js";var w,T,E,D,be=e((()=>{w=`_root_15if1_1`,T=`_content_15if1_9`,E=`_childList_15if1_19`,D={root:w,content:T,childList:E}}));function O({max:e}){let{data:t,isLoading:n,isFetching:r,isError:i,refetch:o}=m({max:e}),s=(0,a.useMemo)(()=>(t?.data?.[0]?.items??[]).slice(0,e>0?e:void 0).map(e=>{let t=e.link??e.labelText,n=(e.children??[]).map(e=>({id:e.link??`${t}-${e.label}`,label:e.label,labelIcon:e.labelIcon,link:e.link}));return{id:t,label:e.labelText,labelIcon:e.label[0]?.labelIcon??``,value:e.value,link:e.link,children:n}}),[t,e]);return{data:s,isLoading:n,isFetching:r,isError:s.length===0&&i,refetch:o}}var k=e((()=>{s(),g()}));function A({members:e}){return(0,N.jsx)(l,{direction:`column`,className:D.childList,children:e.map(e=>(0,N.jsx)(b,{label:e.label,media:{kind:`icon`,icon:v(e.labelIcon)},action:x({href:_(e.link)??void 0,hasChildren:!1})},e.id))})}function j(){let{data:e,isLoading:n,isFetching:i,isError:o,refetch:s}=O({max:10}),{drillDownItem:c,drillDown:d,resetDrillDown:f}=ee(),p=(0,a.useMemo)(()=>c?e.find(e=>e.label===c)??null:null,[e,c]);(0,a.useEffect)(()=>{c&&!p&&f()},[c,p,f]);let m=(0,a.useMemo)(()=>{let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let i=e.children.length>0;return{id:e.id,currentValue:e.value,currentShare:u(e.value,n),...ce({label:e.label,media:{kind:`icon`,icon:v(e.labelIcon)},action:x({href:_(e.link)??void 0,hasChildren:i,drillDown:{onClick:()=>d(e.label),ariaLabel:r(t(`View the tags and categories in %s`,`jetpack-premium-analytics-pkg`),e.label)}})})}})},[e,d]);return(0,N.jsxs)(l,{className:D.root,children:[(0,N.jsxs)(`div`,{className:D.content,children:[p&&(0,N.jsx)(oe,{label:t(`All tags & categories`,`jetpack-premium-analytics-pkg`),onClick:f}),(0,N.jsx)(ue,{isLoading:n,isFetching:i,isError:o,isEmpty:e.length===0,error:{description:t(`We couldn't load tags & categories. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:te,description:t(`Learn about your most visited tags & categories to track engaging topics.`,`jetpack-premium-analytics-pkg`)},renderLoading:p?void 0:(0,N.jsx)(re,{rows:10}),children:p?(0,N.jsx)(A,{members:p.children}):(0,N.jsx)(ne,{data:m,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!1,decimals:0}}})})]}),(0,N.jsx)(se,{children:(0,N.jsx)(le,{report:`tags`})})]})}function M({attributes:e={}}){return(0,N.jsx)(d,{attributes:e,children:(0,N.jsx)(j,{})})}var N,xe=e((()=>{de(),f(),s(),n(),p(),be(),k(),N=i()})),P,Se=e((()=>{c(),P={icon:o,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,Ce=e((()=>{F=`jpa/tags`,I=`Top tags & categories in the last 7 days`,L=`Your most visited tags and categories, ranked by views.`,R={content:`The tags and categories associated with your most-viewed content, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H(){return(0,W.jsx)(M,{attributes:{reportParams:h()}})}function U(e){return(0,W.jsx)(M,{...e})}function we(e){return(0,W.jsx)(ve,{...e,widgetType:K,renderModule:G,renderComponent:U,attributes:{reportParams:h(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),pe(),ye(),fe(),ge(),ae(),xe(),Se(),Ce(),W=i(),ie(),G=`storybook/tags`,K=me(V,P),q={title:`Packages/Premium Analytics/Widgets/Tags`,component:M,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Tags & categories" widget. Displays the site's most visited tags and categories over the seven days ending yesterday, ranked by views — the endpoint takes no date parameters, so the section's date filter does not reach it. Single tags/categories link to their archive; grouped rows (several tags/categories sharing posts) drill down to their members. Ported from the Jetpack Stats Tags & categories module.`}}}},J={render:H,decorators:[C,S]},Y={render:H,tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(y(`stats/tags`,`loading`),()=>y(`stats/tags`,null))},X={render:H,tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(y(`stats/tags`,`error`),()=>y(`stats/tags`,null))},Z={render:H,tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(y(`stats/tags`,`empty`),()=>y(`stats/tags`,null))},Q={render:e=>(0,W.jsx)(we,{...e}),args:{..._e},argTypes:{...he},decorators:[S]},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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