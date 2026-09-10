import{i as e}from"./preload-helper-usAeo7Bx.js";import{f as t,n,t as r}from"./build-module-yGZutq_9.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o,Y as s,t as c,vl as l}from"./build-module-zwSmKorH.js";import{bt as u}from"./build-module-CRH4RouM.js";import{Wt as ee,o as te,y as d}from"./wp-date-settings-B7RT01wI.js";import{t as f}from"./src-KcgAjefs.js";import{o as ne,t as p}from"./src-DFNM1k7F.js";import{O as re,en as m,i as h}from"./date-filters-panel-Ccn_gPhW.js";import{r as g}from"./src-CBVz-cOZ.js";import"./constants-B1kGztHF.js";import{r as ie,t as ae}from"./leaderboard-skeleton-DeGj_J9G.js";import{F as oe,J as se,L as _,P as ce,S as v,Z as y,b as le,q as ue,w as de}from"./report-metric-BHcY1-V2.js";import{t as fe}from"./widget-state-CsjV8Rih.js";import{C as b,D as pe,E as me,O as he,S as ge,T as _e,b as ve,k as x,t as ye,w as be,x as S}from"./src-DfyDuJLO.js";var C,w,T,E,D=e((()=>{C=`_root_15if1_1`,w=`_content_15if1_9`,T=`_childList_15if1_19`,E={root:C,content:w,childList:T}}));function O({max:e}){let{data:t,isLoading:n,isFetching:r,isError:i,refetch:o}=re({max:e}),s=(0,a.useMemo)(()=>(t?.data?.[0]?.items??[]).slice(0,e>0?e:void 0).map(e=>{let t=e.link??e.labelText,n=(e.children??[]).map(e=>({id:e.link??`${t}-${e.label}`,label:e.label,labelIcon:e.labelIcon,link:e.link}));return{id:t,label:e.labelText,labelIcon:e.label[0]?.labelIcon??``,value:e.value,link:e.link,children:n}}),[t,e]);return{data:s,isLoading:n,isFetching:r,isError:s.length===0&&i,refetch:o}}var k=e((()=>{o(),h()}));function A({members:e}){return(0,N.jsx)(u,{direction:`column`,className:E.childList,children:e.map(e=>(0,N.jsx)(ce,{label:e.label,media:{kind:`icon`,icon:P(e.labelIcon)},action:_({href:g(e.link)??void 0,hasChildren:!1})},e.id))})}function j(){let{data:e,isLoading:r,isFetching:i,isError:o,refetch:s}=O({max:10}),{drillDownItem:c,drillDown:l,resetDrillDown:d}=te(),f=(0,a.useMemo)(()=>c?e.find(e=>e.label===c)??null:null,[e,c]);(0,a.useEffect)(()=>{c&&!f&&d()},[c,f,d]);let p=(0,a.useMemo)(()=>{let r=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let i=e.children.length>0;return{id:e.id,currentValue:e.value,currentShare:ee(e.value,r),...oe({label:e.label,media:{kind:`icon`,icon:P(e.labelIcon)},action:_({href:g(e.link)??void 0,hasChildren:i,drillDown:{onClick:()=>l(e.label),ariaLabel:t(n(`View the tags and categories in %s`,`jetpack-premium-analytics-pkg`),e.label)}})})}})},[e,l]);return(0,N.jsxs)(u,{className:E.root,children:[(0,N.jsxs)(`div`,{className:E.content,children:[f&&(0,N.jsx)(de,{label:n(`All tags & categories`,`jetpack-premium-analytics-pkg`),onClick:d}),(0,N.jsx)(fe,{isLoading:r,isFetching:i,isError:o,isEmpty:e.length===0,error:{description:n(`We couldn't load tags & categories. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:ne,description:n(`Learn about your most visited tags & categories to track engaging topics.`,`jetpack-premium-analytics-pkg`)},renderLoading:f?void 0:(0,N.jsx)(ae,{rows:10}),children:f?(0,N.jsx)(A,{members:f.children}):(0,N.jsx)(ie,{data:p,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!1,decimals:0}}})})]}),(0,N.jsx)(v,{children:(0,N.jsx)(le,{report:`tags`})})]})}function M({attributes:e={}}){return(0,N.jsx)(d,{attributes:e,children:(0,N.jsx)(j,{})})}var N,P,xe=e((()=>{ye(),p(),o(),r(),c(),f(),D(),k(),N=i(),P=e=>e===`folder`?l:s})),F,Se=e((()=>{c(),F={icon:l,attributes:[],example:{attributes:{}}}})),I,L,R,z,B,V,H,Ce=e((()=>{I=`jpa/tags`,L=`Top tags & categories`,R=`Your most visited tags and categories, ranked by views.`,z={content:`The tags and categories associated with your most-viewed content, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(M,{attributes:{reportParams:m()}})}function we(e){return(0,W.jsx)(M,{...e})}function Te(e){return(0,W.jsx)(_e,{...e,widgetType:K,renderModule:G,renderComponent:we,attributes:{reportParams:m(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),me(),he(),b(),ve(),ue(),xe(),Se(),Ce(),W=i(),se(),G=`storybook/tags`,K=ge(H,F),q={title:`Packages/Premium Analytics/Widgets/Tags`,component:M,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Tags & categories" widget. Displays the site's most visited tags and categories over the seven days ending yesterday, ranked by views — the endpoint takes no date parameters, so the section's date filter does not reach it. Single tags/categories link to their archive; grouped rows (several tags/categories sharing posts) drill down to their members. Ported from the Jetpack Stats Tags & categories module.`}}}},J={render:U,decorators:[S,x]},Y={render:U,tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(y(`stats/tags`,`loading`),()=>y(`stats/tags`,null))},X={render:U,tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(y(`stats/tags`,`error`),()=>y(`stats/tags`,null))},Z={render:U,tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(y(`stats/tags`,`empty`),()=>y(`stats/tags`,null))},Q={render:e=>(0,W.jsx)(Te,{...e}),args:{...be},argTypes:{...pe},decorators:[x]},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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