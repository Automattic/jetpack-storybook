import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{an as o,n as s}from"./build-module-DmVuor49.js";import{D as c,H as l,J as u,N as d,S as ee,V as f,W as p}from"./report-metric-RxrgYsSy.js";import{R as te,t as ne}from"./build-module-C3cxGc45.js";import{$t as re,Dr as m,q as ie,ur as h,xt as g}from"./chart-tooltip-BW3VFuvI.js";import{t as ae}from"./leaderboard-chart-BL99qpD3.js";import{t as oe}from"./widget-state-DoKcWfPi.js";import{r as se}from"./src-BOAZ_ptK.js";import{C as _,D as v,E as y,O as b,S as ce,T as le,b as ue,k as x,t as de,w as fe,x as S}from"./src-widaXXxT.js";import{n as pe,t as me}from"./src-BfHWilEy.js";var C,w,T,he=e((()=>{C=`_root_1hs5m_1`,w=`_content_1hs5m_11`,T={root:C,content:w}}));function E(e){return typeof e==`string`?e:String(e)}function ge({view:e,max:t}){let{data:n,isLoading:r,isFetching:a,isError:o,refetch:s}=re(),c=(0,i.useMemo)(()=>((n?.data?.[0]?.items??[]).find(t=>t.label===e)?.children??[]).map(t=>{if(e===`authors`){let e=t,n=E(e.label);return{id:e.icon??`author-${n}`,label:n,value:e.value,avatarUrl:e.icon??void 0,link:e.link??void 0}}let n=t,r=E(n.label);return{id:n.id==null?n.link??`post-${r}`:String(n.id),label:r,value:n.value,link:n.link??void 0}}).sort((e,t)=>t.value-e.value).slice(0,t>0?t:void 0),[n,e,t]);return{data:c,isLoading:r,isFetching:a,isError:c.length===0&&o,refetch:s}}var _e=e((()=>{a(),g()}));function ve(e){return typeof e==`string`&&A.includes(e)}function ye(e,t){if(t===`authors`)return d({label:e.label,media:{kind:`avatar`,url:e.avatarUrl,name:e.label},action:e.link?{kind:`link`,href:e.link}:{kind:`static`}});let n=se(e.link);return d({label:e.label,media:{kind:`none`},action:n?{kind:`link`,href:n}:{kind:`static`}})}function be({max:e=10,view:n}){let{data:r,isLoading:a,isFetching:s,isError:l,refetch:u}=ge({view:n,max:e}),d=(0,i.useMemo)(()=>{let e=Math.max(...r.map(e=>e.value),0);return r.map(t=>({id:t.id,...ye(t,n),currentValue:t.value,currentShare:ie(t.value,e)}))},[r,n]);return(0,O.jsxs)(te,{className:T.root,children:[(0,O.jsx)(`div`,{className:T.content,children:(0,O.jsx)(oe,{isLoading:a,isFetching:s,isError:l,isEmpty:r.length===0,error:{description:t(`We couldn't load comments. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{icon:o,description:t(`Learn about the comments your site receives by authors, posts, and pages.`,`jetpack-premium-analytics-pkg`)},children:(0,O.jsx)(ae,{data:d,withOverlayLabel:!0,showLegend:!1,dataFormat:k})})}),(0,O.jsx)(c,{children:(0,O.jsx)(ee,{report:`comments`,section:n})})]})}function D({attributes:e={}}){let t=ve(e.view)?e.view:`authors`;return(0,O.jsx)(u,{attributes:e,children:(0,O.jsx)(be,{max:e.max,view:t})})}var O,k,A,j=e((()=>{de(),a(),n(),s(),ne(),he(),_e(),O=r(),k={type:`number`,options:{useMultipliers:!0,decimals:0}},A=[`authors`,`posts`]})),M,xe=e((()=>{n(),s(),me(),M={icon:o,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`},{id:`view`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:pe,elements:[{label:t(`Authors`,`jetpack-premium-analytics-pkg`),value:`authors`},{label:t(`Posts & pages`,`jetpack-premium-analytics-pkg`),value:`posts`}],relevance:`high`}],example:{attributes:{max:10,view:`authors`}}}})),N,P,F,I,L,R,z,Se=e((()=>{N=`jpa/comments`,P=`Comments`,F=`The authors and posts that receive the most comments on your site.`,I={content:`A breakdown of comments, grouped by author and by post or page.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({view:e}){return(0,H.jsx)(D,{attributes:{view:e,reportParams:h()}})}function Ce(e){return(0,H.jsx)(D,{...e})}function V(e){return()=>(m.removeQueries({queryKey:K}),p(`stats/comments`,e),()=>{p(`stats/comments`,null),m.removeQueries({queryKey:K})})}function we({view:e,...t}){return(0,H.jsx)(le,{...t,widgetType:W,renderModule:U,renderComponent:Ce,attributes:{view:e,reportParams:h(!0)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),y(),b(),_(),ue(),f(),j(),xe(),Se(),H=r(),l(),U=`storybook/comments`,W=ce(z,M),G={control:`inline-radio`,options:[`authors`,`posts`]},K=[`stats`,`comments`],q={title:`Packages/Premium Analytics/Widgets/Comments`,component:D,tags:[`autodocs`],argTypes:{view:G},parameters:{docs:{description:{component:`The "Comments" widget. Ranks the site's comment authors and its most-commented posts and pages by comment count. The active view is the host-rendered "View by" header control (Authors / Posts & pages). Ported from the Jetpack Stats Comments module.`}}}},J={render:B,args:{view:`authors`},decorators:[S,x]},Y={render:B,args:{view:`authors`},tags:[`!autodocs`],decorators:[S,x],beforeEach:V(`loading`)},X={render:B,args:{view:`authors`},tags:[`!autodocs`],decorators:[S,x],beforeEach:V(`error`)},Z={render:B,args:{view:`authors`},tags:[`!autodocs`],decorators:[S,x],beforeEach:V(`empty`)},Q={render:e=>(0,H.jsx)(we,{...e}),args:{...fe,view:`authors`},argTypes:{...v,view:G},decorators:[x]},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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