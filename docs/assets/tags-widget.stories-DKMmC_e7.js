import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Vu as a,ku as o,ml as s,t as c}from"./build-module-DNhkEVJn.js";import{_ as l,dn as ee,o as te}from"./charts-provider-i3ilDE6i.js";import{Ot as u}from"./build-module-pI6Uihcg.js";import{o as ne,t as d}from"./src-DzwlO62w.js";import{t as f}from"./src-B3tfECTk.js";import{R as p,fn as m,t as h}from"./src-sapT-gA9.js";import"./rows-DAmD2BmE.js";import{r as g,t as re}from"./leaderboard-skeleton-B9aJDHKF.js";import{n as ie,r as _}from"./with-story-router-thBJi0Jx.js";import{n as ae,r as oe,s as v}from"./register-report-mocks-C7K6kQVR.js";import{_ as se,b as ce,i as y,m as le,o as b,r as ue}from"./leaderboard-BklTNiET.js";import{t as de}from"./widget-state-BVHHQlNQ.js";import{a as x,r as S}from"./src-CAR-oEsb.js";import{o as fe}from"./report-metric-DXPsBxxI.js";import{k as pe,t as me}from"./src-BD0Zo-vQ.js";import{a as he,d as ge,f as _e,i as ve,n as ye,p as be,r as C,u as xe}from"./with-widget-canvas-BOQ7NWrR.js";var w,T,E,D,O=e((()=>{w=`_root_15if1_1`,T=`_content_15if1_9`,E=`_childList_15if1_19`,D={root:w,content:T,childList:E}}));function k({max:e}){let{data:t,isLoading:n,isFetching:r,isError:i,refetch:o}=p({max:e}),s=(0,a.useMemo)(()=>(t?.data?.[0]?.items??[]).slice(0,e>0?e:void 0).map(e=>{let t=e.link??e.labelText,n=(e.children??[]).map(e=>({id:e.link??`${t}-${e.label}`,label:e.label,labelIcon:e.labelIcon,link:e.link}));return{id:t,label:e.labelText,labelIcon:e.label[0]?.labelIcon??``,value:e.value,link:e.link,children:n}}),[t,e]);return{data:s,isLoading:n,isFetching:r,isError:s.length===0&&i,refetch:o}}var A=e((()=>{o(),h()}));function j({members:e}){return(0,P.jsx)(u,{direction:`column`,className:D.childList,children:e.map(e=>(0,P.jsx)(ue,{label:e.label,media:{kind:`icon`,icon:S(e.labelIcon)},action:b({href:x(e.link)??void 0,hasChildren:!1})},e.id))})}function M(){let{data:e,isLoading:n,isFetching:i,isError:o,refetch:s}=k({max:10}),{drillDownItem:c,drillDown:l,resetDrillDown:d}=te(),f=(0,a.useMemo)(()=>c?e.find(e=>e.label===c)??null:null,[e,c]);(0,a.useEffect)(()=>{c&&!f&&d()},[c,f,d]);let p=(0,a.useMemo)(()=>{let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let i=e.children.length>0;return{id:e.id,currentValue:e.value,currentShare:ee(e.value,n),...y({label:e.label,media:{kind:`icon`,icon:S(e.labelIcon)},action:b({href:x(e.link)??void 0,hasChildren:i,drillDown:{onClick:()=>l(e.label),ariaLabel:r(t(`View the tags and categories in %s`,`jetpack-premium-analytics-pkg`),e.label)}})})}})},[e,l]);return(0,P.jsxs)(u,{className:D.root,children:[(0,P.jsxs)(`div`,{className:D.content,children:[f&&(0,P.jsx)(se,{label:t(`All tags & categories`,`jetpack-premium-analytics-pkg`),onClick:d}),(0,P.jsx)(de,{isLoading:n,isFetching:i,isError:o,isEmpty:e.length===0,error:{description:t(`We couldn't load tags & categories. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:ne,description:t(`Learn about your most visited tags & categories to track engaging topics.`,`jetpack-premium-analytics-pkg`)},renderLoading:f?void 0:(0,P.jsx)(re,{rows:10}),children:f?(0,P.jsx)(j,{members:f.children}):(0,P.jsx)(g,{data:p,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!1,decimals:0}}})})]}),(0,P.jsxs)(le,{children:[(0,P.jsx)(ce,{report:`tags`}),(0,P.jsx)(fe,{exporter:pe,status:{isLoading:n,isFetching:i,isError:o},rowCount:e.length})]})]})}function N({attributes:e={}}){return(0,P.jsx)(l,{attributes:e,children:(0,P.jsx)(M,{})})}var P,Se=e((()=>{me(),d(),o(),n(),f(),O(),A(),P=i()})),F,Ce=e((()=>{c(),F={icon:s,attributes:[],example:{attributes:{}}}})),I,L,R,z,B,V,H,we=e((()=>{I=`jpa/tags`,L=`Top tags & categories in the last 7 days`,R=`Your most visited tags and categories, ranked by views.`,z={content:`The tags and categories associated with your most-viewed content, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(N,{attributes:{reportParams:m()}})}function Te(e){return(0,W.jsx)(N,{...e})}function Ee(e){return(0,W.jsx)(ge,{...e,widgetType:K,renderModule:G,renderComponent:Te,attributes:{reportParams:m(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),_e(),ie(),he(),ye(),ae(),Se(),Ce(),we(),W=i(),oe(),G=`storybook/tags`,K=ve(H,F),q={title:`Packages/Premium Analytics/Widgets/Tags`,component:N,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Tags & categories" widget. Displays the site's most visited tags and categories over the seven days ending yesterday, ranked by views — the endpoint takes no date parameters, so the section's date filter does not reach it. Single tags/categories link to their archive; grouped rows (several tags/categories sharing posts) drill down to their members. Ported from the Jetpack Stats Tags & categories module.`}}}},J={render:U,decorators:[C,_]},Y={render:U,tags:[`!autodocs`],decorators:[C,_],beforeEach:()=>(v(`stats/tags`,`loading`),()=>v(`stats/tags`,null))},X={render:U,tags:[`!autodocs`],decorators:[C,_],beforeEach:()=>(v(`stats/tags`,`error`),()=>v(`stats/tags`,null))},Z={render:U,tags:[`!autodocs`],decorators:[C,_],beforeEach:()=>(v(`stats/tags`,`empty`),()=>v(`stats/tags`,null))},Q={render:e=>(0,W.jsx)(Ee,{...e}),args:{...xe},argTypes:{...be},decorators:[_]},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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