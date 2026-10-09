import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-Cm3Kd3py.js";import{At as s}from"./build-module-D2aEjqke.js";import{c}from"./library-DTloIBum.js";import{t as l}from"./src-fQR6rGKL.js";import{t as u}from"./src-B4McG4EE.js";import{Mn as d,U as f,t as p}from"./src-DQYt8jCH.js";import{_ as m,en as ee,o as h}from"./charts-provider-THvfZibh.js";import{a as g,r as _}from"./src-6VTPAClr.js";import"./rows-DAmD2BmE.js";import{r as te,t as ne}from"./leaderboard-skeleton-DNkGgqAs.js";import{n as re,r as ie,s as v}from"./register-report-mocks-CKRy3LZg.js";import{t as ae}from"./widget-state-CADyyZl5.js";import{n as y,r as b}from"./with-story-router-Beljd9ki.js";import{g as oe,i as se,o as x,p as ce,r as le,y as ue}from"./leaderboard-B3gqTzsi.js";import{n as de}from"./components-Bh7_pEK4.js";import{t as fe,x as pe}from"./src-C7ZjB0TJ.js";import{a as me,g as he,h as ge,i as _e,m as ve,n as ye,p as be,r as S}from"./with-widget-canvas-Cr9xwJOJ.js";var C,w,T,E,D=e((()=>{C=`_root_15if1_1`,w=`_content_15if1_9`,T=`_childList_15if1_19`,E={root:C,content:w,childList:T}}));function O({max:e}){let{data:t,isLoading:n,isFetching:r,isError:i,refetch:o}=f({max:e}),s=(0,a.useMemo)(()=>(t?.data?.[0]?.items??[]).slice(0,e>0?e:void 0).map(e=>{let t=e.link??e.labelText,n=(e.children??[]).map(e=>({id:e.link??`${t}-${e.label}`,label:e.label,labelIcon:e.labelIcon,link:e.link}));return{id:t,label:e.labelText,labelIcon:e.label[0]?.labelIcon??``,value:e.value,link:e.link,children:n}}),[t,e]);return{data:s,isLoading:n,isFetching:r,isError:s.length===0&&i,refetch:o}}var k=e((()=>{o(),p()}));function A({members:e}){return(0,N.jsx)(s,{direction:`column`,className:E.childList,children:e.map(e=>(0,N.jsx)(le,{label:e.label,media:{kind:`icon`,icon:_(e.labelIcon)},action:x({href:g(e.link)??void 0,hasChildren:!1})},e.id))})}function j(){let{data:e,isLoading:n,isFetching:i,isError:o,refetch:l}=O({max:10}),{drillDownItem:u,drillDown:d,resetDrillDown:f}=h(),p=(0,a.useMemo)(()=>u?e.find(e=>e.label===u)??null:null,[e,u]);(0,a.useEffect)(()=>{u&&!p&&f()},[u,p,f]);let m=(0,a.useMemo)(()=>{let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let i=e.children.length>0;return{id:e.id,currentValue:e.value,currentShare:ee(e.value,n),...se({label:e.label,media:{kind:`icon`,icon:_(e.labelIcon)},action:x({href:g(e.link)??void 0,hasChildren:i,drillDown:{onClick:()=>d(e.label),ariaLabel:r(t(`View the tags and categories in %s`,`jetpack-premium-analytics-pkg`),e.label)}})})}})},[e,d]);return(0,N.jsxs)(s,{className:E.root,children:[(0,N.jsxs)(`div`,{className:E.content,children:[p&&(0,N.jsx)(oe,{label:t(`All tags & categories`,`jetpack-premium-analytics-pkg`),onClick:f}),(0,N.jsx)(ae,{isLoading:n,isFetching:i,isError:o,isEmpty:e.length===0,error:{description:t(`We couldn't load tags & categories. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:{icon:c,description:t(`Learn about your most visited tags & categories to track engaging topics.`,`jetpack-premium-analytics-pkg`)},renderLoading:p?void 0:(0,N.jsx)(ne,{rows:10}),children:p?(0,N.jsx)(A,{members:p.children}):(0,N.jsx)(te,{data:m,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!1,decimals:0}}})})]}),(0,N.jsxs)(ce,{children:[(0,N.jsx)(ue,{report:`tags`}),(0,N.jsx)(de,{exporter:pe,status:{isLoading:n,isFetching:i,isError:o},rowCount:e.length})]})]})}function M({attributes:e={}}){return(0,N.jsx)(m,{attributes:e,children:(0,N.jsx)(j,{})})}var N,xe=e((()=>{fe(),l(),o(),n(),u(),D(),k(),N=i()})),P,Se=e((()=>{P={attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,H,Ce=e((()=>{F=`jpa/tags`,I=`jpa/category`,L=`Top tags & categories in the last 7 days`,R=`Your most visited tags and categories, ranked by views.`,z={content:`The tags and categories associated with your most-viewed content, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:F,icon:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(M,{attributes:{reportParams:d()}})}function we(e){return(0,W.jsx)(M,{...e})}function Te(e){return(0,W.jsx)(ve,{...e,widgetType:K,renderModule:G,renderComponent:we,attributes:{reportParams:d(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),ge(),y(),me(),ye(),re(),xe(),Se(),Ce(),W=i(),ie(),G=`storybook/tags`,K=_e(H,P),q={title:`Packages/Premium Analytics/Widgets/Tags`,component:M,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Tags & categories" widget. Displays the site's most visited tags and categories over the seven days ending yesterday, ranked by views — the endpoint takes no date parameters, so the section's date filter does not reach it. Single tags/categories link to their archive; grouped rows (several tags/categories sharing posts) drill down to their members. Ported from the Jetpack Stats Tags & categories module.`}}}},J={render:U,decorators:[S,b]},Y={render:U,tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(v(`stats/tags`,`loading`),()=>v(`stats/tags`,null))},X={render:U,tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(v(`stats/tags`,`error`),()=>v(`stats/tags`,null))},Z={render:U,tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(v(`stats/tags`,`empty`),()=>v(`stats/tags`,null))},Q={render:e=>(0,W.jsx)(Te,{...e}),args:{...be},argTypes:{...he},decorators:[b]},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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