import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{an as o,n as s}from"./build-module-DmVuor49.js";import{R as c,t as l}from"./build-module-Oq2YRM6F.js";import{G as ee,Tr as u,Zt as d,cr as f,yt as p}from"./chart-tooltip-BtX3Jjce.js";import{t as m}from"./leaderboard-chart-6vbiAia1.js";import{F as h,M as g,N as te,g as _,v,w as y,z as ne}from"./report-metric-CWPPaMwH.js";import{t as re}from"./widget-state-CE3oTs97.js";import{C as ie,D as b,E as ae,S as x,T as oe,b as se,t as ce,w as S,x as C}from"./src-BAp3Kd5h.js";import{n as w,t as le}from"./src-wxObwIP2.js";var T,E,D,ue=e((()=>{T=`_root_1hs5m_1`,E=`_content_1hs5m_11`,D={root:T,content:E}}));function O(e){return typeof e==`string`?e:String(e)}function de({view:e,max:t}){let{data:n,isLoading:r,isFetching:a,isError:o,refetch:s}=d(),c=(0,i.useMemo)(()=>((n?.data?.[0]?.items??[]).find(t=>t.label===e)?.children??[]).map(t=>{if(e===`authors`){let e=t,n=O(e.label);return{id:e.icon??`author-${n}`,label:n,value:e.value,avatarUrl:e.icon??void 0,link:e.link??void 0}}let n=t,r=O(n.label);return{id:n.id==null?n.link??`post-${r}`:String(n.id),label:r,value:n.value,link:n.link??void 0}}).sort((e,t)=>t.value-e.value).slice(0,t>0?t:void 0),[n,e,t]);return{data:c,isLoading:r,isFetching:a,isError:c.length===0&&o,refetch:s}}var fe=e((()=>{a(),p()}));function k(e){return typeof e==`string`&&F.includes(e)}function A(e,t){return y(t===`authors`?{label:e.label,media:{kind:`avatar`,url:e.avatarUrl,name:e.label},action:e.link?{kind:`link`,href:e.link}:{kind:`static`}}:{label:e.label,media:{kind:`none`},action:e.link?{kind:`link`,href:e.link}:{kind:`static`}})}function j({max:e=10,view:n}){let{data:r,isLoading:a,isFetching:s,isError:l,refetch:u}=de({view:n,max:e}),d=(0,i.useMemo)(()=>{let e=Math.max(...r.map(e=>e.value),0);return r.map(t=>({id:t.id,...A(t,n),currentValue:t.value,currentShare:ee(t.value,e)}))},[r,n]);return(0,N.jsxs)(c,{className:D.root,children:[(0,N.jsx)(`div`,{className:D.content,children:(0,N.jsx)(re,{isLoading:a,isFetching:s,isError:l,isEmpty:r.length===0,error:{description:t(`We couldn't load comments. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:u}]},empty:{icon:o,description:t(`Learn about the comments your site receives by authors, posts, and pages.`,`jetpack-premium-analytics`)},children:(0,N.jsx)(m,{data:d,withOverlayLabel:!0,showLegend:!1,dataFormat:P})})}),(0,N.jsx)(v,{children:(0,N.jsx)(_,{report:`comments`,section:n})})]})}function M({attributes:e={}}){let t=k(e.view)?e.view:`authors`;return(0,N.jsx)(ne,{attributes:e,children:(0,N.jsx)(j,{max:e.max,view:t})})}var N,P,F,I=e((()=>{ce(),a(),n(),s(),l(),ue(),fe(),N=r(),P={type:`number`,options:{useMultipliers:!0,decimals:0}},F=[`authors`,`posts`]})),L,R=e((()=>{n(),s(),le(),L={name:`jpa/comments`,title:t(`Comments`,`jetpack-premium-analytics`),help:{content:t(`A breakdown of comments, grouped by author and by post or page.`,`jetpack-premium-analytics`),links:[{label:t(`Learn more`,`jetpack-premium-analytics`),href:`https://jetpack.com/support/jetpack-stats/`}]},icon:o,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`},{id:`view`,label:t(`View by`,`jetpack-premium-analytics`),type:`text`,Edit:w,elements:[{label:t(`Authors`,`jetpack-premium-analytics`),value:`authors`},{label:t(`Posts & pages`,`jetpack-premium-analytics`),value:`posts`}],relevance:`high`}],example:{attributes:{max:10,view:`authors`}}}}));function z({view:e}){return(0,H.jsx)(M,{attributes:{view:e,reportParams:f()}})}function B(e){return(0,H.jsx)(M,{...e})}function V(e){return()=>(u.removeQueries({queryKey:K}),h(`stats/comments`,e),()=>{h(`stats/comments`,null),u.removeQueries({queryKey:K})})}function pe({view:e,...t}){return(0,H.jsx)(ie,{...t,widgetType:W,renderModule:U,renderComponent:B,attributes:{view:e,reportParams:f(!0)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),S(),ae(),se(),g(),I(),R(),H=r(),te(),U=`storybook/comments`,W={name:L.name,title:L.title,icon:L.icon,attributes:L.attributes,example:L.example,presentation:`framed`},G={control:`inline-radio`,options:[`authors`,`posts`]},K=[`stats`,`comments`],q={title:`Packages/Premium Analytics/Widgets/Comments`,component:M,tags:[`autodocs`],argTypes:{view:G},parameters:{docs:{description:{component:`The "Comments" widget. Ranks the site's comment authors and its most-commented posts and pages by comment count. The active view is the host-rendered "View by" header control (Authors / Posts & pages). Ported from the Jetpack Stats Comments module.`}}}},J={render:z,args:{view:`authors`},decorators:[C,b]},Y={render:z,args:{view:`authors`},tags:[`!autodocs`],decorators:[C,b],beforeEach:V(`loading`)},X={render:z,args:{view:`authors`},tags:[`!autodocs`],decorators:[C,b],beforeEach:V(`error`)},Z={render:z,args:{view:`authors`},tags:[`!autodocs`],decorators:[C,b],beforeEach:V(`empty`)},Q={render:e=>(0,H.jsx)(pe,{...e}),args:{...x,view:`authors`},argTypes:{...oe,view:G},decorators:[b]},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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