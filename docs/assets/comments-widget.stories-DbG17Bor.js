import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{an as o,n as s}from"./build-module-DmVuor49.js";import{R as c,t as l}from"./build-module-DDoIgE2E.js";import{G as u,Tr as d,Zt as f,cr as p,yt as m}from"./chart-tooltip-C_Y00_tm.js";import{t as ee}from"./leaderboard-chart-Btsjec7-.js";import{E as te,F as h,L as g,P as ne,V as re,b as ie,v as ae}from"./report-metric-g5-n2BXz.js";import{t as oe}from"./widget-state-DH8_FpDV.js";import{C as se,D as ce,E as _,O as le,S as ue,T as de,b as fe,k as v,t as pe,w as me,x as y}from"./src-Dw1m72HI.js";import{n as b,t as x}from"./src-D8RJDeDL.js";var S,C,w,he=e((()=>{S=`_root_1hs5m_1`,C=`_content_1hs5m_11`,w={root:S,content:C}}));function T(e){return typeof e==`string`?e:String(e)}function ge({view:e,max:t}){let{data:n,isLoading:r,isFetching:a,isError:o,refetch:s}=f(),c=(0,i.useMemo)(()=>((n?.data?.[0]?.items??[]).find(t=>t.label===e)?.children??[]).map(t=>{if(e===`authors`){let e=t,n=T(e.label);return{id:e.icon??`author-${n}`,label:n,value:e.value,avatarUrl:e.icon??void 0,link:e.link??void 0}}let n=t,r=T(n.label);return{id:n.id==null?n.link??`post-${r}`:String(n.id),label:r,value:n.value,link:n.link??void 0}}).sort((e,t)=>t.value-e.value).slice(0,t>0?t:void 0),[n,e,t]);return{data:c,isLoading:r,isFetching:a,isError:c.length===0&&o,refetch:s}}var _e=e((()=>{a(),m()}));function ve(e){return typeof e==`string`&&k.includes(e)}function ye(e,t){return te(t===`authors`?{label:e.label,media:{kind:`avatar`,url:e.avatarUrl,name:e.label},action:e.link?{kind:`link`,href:e.link}:{kind:`static`}}:{label:e.label,media:{kind:`none`},action:e.link?{kind:`link`,href:e.link}:{kind:`static`}})}function be({max:e=10,view:n}){let{data:r,isLoading:a,isFetching:s,isError:l,refetch:d}=ge({view:n,max:e}),f=(0,i.useMemo)(()=>{let e=Math.max(...r.map(e=>e.value),0);return r.map(t=>({id:t.id,...ye(t,n),currentValue:t.value,currentShare:u(t.value,e)}))},[r,n]);return(0,D.jsxs)(c,{className:w.root,children:[(0,D.jsx)(`div`,{className:w.content,children:(0,D.jsx)(oe,{isLoading:a,isFetching:s,isError:l,isEmpty:r.length===0,error:{description:t(`We couldn't load comments. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:d}]},empty:{icon:o,description:t(`Learn about the comments your site receives by authors, posts, and pages.`,`jetpack-premium-analytics`)},children:(0,D.jsx)(ee,{data:f,withOverlayLabel:!0,showLegend:!1,dataFormat:O})})}),(0,D.jsx)(ie,{children:(0,D.jsx)(ae,{report:`comments`,section:n})})]})}function E({attributes:e={}}){let t=ve(e.view)?e.view:`authors`;return(0,D.jsx)(re,{attributes:e,children:(0,D.jsx)(be,{max:e.max,view:t})})}var D,O,k,A=e((()=>{pe(),a(),n(),s(),l(),he(),_e(),D=r(),O={type:`number`,options:{useMultipliers:!0,decimals:0}},k=[`authors`,`posts`]})),j,M=e((()=>{n(),s(),x(),j={icon:o,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`},{id:`view`,label:t(`View by`,`jetpack-premium-analytics`),type:`text`,Edit:b,elements:[{label:t(`Authors`,`jetpack-premium-analytics`),value:`authors`},{label:t(`Posts & pages`,`jetpack-premium-analytics`),value:`posts`}],relevance:`high`}],example:{attributes:{max:10,view:`authors`}}}})),N,P,F,I,L,R,z,xe=e((()=>{N=`jpa/comments`,P=`Comments`,F=`The authors and posts that receive the most comments on your site.`,I={content:`A breakdown of comments, grouped by author and by post or page.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({view:e}){return(0,H.jsx)(E,{attributes:{view:e,reportParams:p()}})}function Se(e){return(0,H.jsx)(E,{...e})}function V(e){return()=>(d.removeQueries({queryKey:K}),g(`stats/comments`,e),()=>{g(`stats/comments`,null),d.removeQueries({queryKey:K})})}function Ce({view:e,...t}){return(0,H.jsx)(de,{...t,widgetType:W,renderModule:U,renderComponent:Se,attributes:{view:e,reportParams:p(!0)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),_(),le(),se(),fe(),ne(),A(),M(),xe(),H=r(),h(),U=`storybook/comments`,W=ue(z,j),G={control:`inline-radio`,options:[`authors`,`posts`]},K=[`stats`,`comments`],q={title:`Packages/Premium Analytics/Widgets/Comments`,component:E,tags:[`autodocs`],argTypes:{view:G},parameters:{docs:{description:{component:`The "Comments" widget. Ranks the site's comment authors and its most-commented posts and pages by comment count. The active view is the host-rendered "View by" header control (Authors / Posts & pages). Ported from the Jetpack Stats Comments module.`}}}},J={render:B,args:{view:`authors`},decorators:[y,v]},Y={render:B,args:{view:`authors`},tags:[`!autodocs`],decorators:[y,v],beforeEach:V(`loading`)},X={render:B,args:{view:`authors`},tags:[`!autodocs`],decorators:[y,v],beforeEach:V(`error`)},Z={render:B,args:{view:`authors`},tags:[`!autodocs`],decorators:[y,v],beforeEach:V(`empty`)},Q={render:e=>(0,H.jsx)(Ce,{...e}),args:{...me,view:`authors`},argTypes:{...ce,view:G},decorators:[v]},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderComments,
  args: {
    view: 'authors'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderComments,
  args: {
    view: 'authors'
  },
  // Kept off the shared autodocs page: the mock override is keyed by path, so it
  // would otherwise force the sibling stories on that page into the same state.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: forceCommentsState('loading')
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderComments,
  args: {
    view: 'authors'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: forceCommentsState('error')
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderComments,
  args: {
    view: 'authors'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: forceCommentsState('empty')
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral comment
glyph and "Learn about the comments your site receives…").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <CommentsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    view: 'authors'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    view: VIEW_CONTROL
  },
  decorators: [withStoryRouter]
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`ErrorState`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as Default,Z as Empty,X as ErrorState,Y as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,q as default};