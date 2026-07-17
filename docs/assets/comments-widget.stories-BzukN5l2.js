import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{an as s,n as c}from"./build-module-DmVuor49.js";import{R as l,t as u,u as d}from"./build-module-Co71Jhbm.js";import{$n as f,Ht as p,mr as m,ut as h}from"./chart-tooltip-C4NUtjXe.js";import{t as ee}from"./leaderboard-chart-nczqka5w.js";import{D as g,T as te,f as ne,j as re,u as ie,v as ae,w as oe}from"./report-metric-DerWADBf.js";import{t as se}from"./widget-state-B76seV2w.js";import{C as _,D as v,E as y,S as ce,T as le,b as ue,t as de,w as fe,x as b}from"./src-0WK5HJj0.js";import{n as x,t as S}from"./src-Dh4_FIP6.js";var C,w,T,E,D,pe=e((()=>{C=`_root_wpk9e_1`,w=`_content_wpk9e_11`,T=`_avatar_wpk9e_22`,E=`_postLabel_wpk9e_31`,D={root:C,content:w,avatar:T,postLabel:E}}));function O(e){return typeof e==`string`?e:String(e)}function k({view:e,max:t}){let{data:n,isLoading:r,isFetching:i,isError:o,refetch:s}=p(),c=(0,a.useMemo)(()=>((n?.data?.[0]?.items??[]).find(t=>t.label===e)?.children??[]).map(t=>{if(e===`authors`){let e=t,n=O(e.label);return{id:e.icon??`author-${n}`,label:n,value:e.value,avatarUrl:e.icon??void 0}}let n=t,r=O(n.label);return{id:n.id==null?n.link??`post-${r}`:String(n.id),label:r,value:n.value,link:n.link??void 0}}).sort((e,t)=>t.value-e.value).slice(0,t>0?t:void 0),[n,e,t]);return{data:c,isLoading:r,isFetching:i,isError:c.length===0&&o,refetch:s}}var A=e((()=>{o(),h()}));function j(e){return typeof e==`string`&&L.includes(e)}function M(e,r){return r===`authors`?(0,F.jsx)(ae,{label:e.label,imageUrl:e.avatarUrl,imageAlt:t(n(`Avatar of %s`,`jetpack-premium-analytics`),e.label),imageClassName:D.avatar}):e.link?(0,F.jsx)(d,{className:D.postLabel,href:e.link,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,F.jsx)(`span`,{className:D.postLabel,title:e.label,children:e.label})}function N({max:e=10,view:t}){let{data:r,isLoading:i,isFetching:o,isError:c,refetch:u}=k({view:t,max:e}),d=(0,a.useMemo)(()=>{let e=Math.max(...r.map(e=>e.value),0);return r.map(n=>({id:n.id,label:M(n,t),currentValue:n.value,currentShare:e>0?n.value/e*100:0}))},[r,t]);return(0,F.jsxs)(l,{className:D.root,children:[(0,F.jsx)(`div`,{className:D.content,children:(0,F.jsx)(se,{isLoading:i,isFetching:o,isError:c,isEmpty:r.length===0,error:{description:n(`We couldn't load comments. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:u}]},empty:{icon:s,description:n(`Learn about the comments your site receives by authors, posts, and pages.`,`jetpack-premium-analytics`)},children:(0,F.jsx)(ee,{data:d,withOverlayLabel:!0,showLegend:!1,dataFormat:I})})}),(0,F.jsx)(ne,{children:(0,F.jsx)(ie,{report:`comments`,section:t})})]})}function P({attributes:e={}}){let t=j(e.view)?e.view:`authors`;return(0,F.jsx)(re,{attributes:e,children:(0,F.jsx)(N,{max:e.max,view:t})})}var F,I,L,R=e((()=>{de(),o(),r(),c(),u(),pe(),A(),F=i(),I={type:`number`,options:{useMultipliers:!0,decimals:0}},L=[`authors`,`posts`]})),z,me=e((()=>{r(),c(),S(),z={name:`jpa/comments`,title:n(`Comments`,`jetpack-premium-analytics`),help:{content:n(`A breakdown of comments, grouped by author and by post or page.`,`jetpack-premium-analytics`),links:[{label:n(`Learn more`,`jetpack-premium-analytics`),href:`https://jetpack.com/support/jetpack-stats/`}]},icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`},{id:`view`,label:n(`View by`,`jetpack-premium-analytics`),type:`text`,Edit:x,elements:[{label:n(`Authors`,`jetpack-premium-analytics`),value:`authors`},{label:n(`Posts & pages`,`jetpack-premium-analytics`),value:`posts`}],relevance:`high`}],example:{attributes:{max:10,view:`authors`}}}}));function B({view:e}){return(0,H.jsx)(P,{attributes:{view:e,reportParams:f()}})}function he(e){return(0,H.jsx)(P,{...e})}function V(e){return()=>(m.removeQueries({queryKey:K}),g(`stats/comments`,e),()=>{g(`stats/comments`,null),m.removeQueries({queryKey:K})})}function ge({view:e,...t}){return(0,H.jsx)(_,{...t,widgetType:W,renderModule:U,renderComponent:he,attributes:{view:e,reportParams:f(!0)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),fe(),y(),ue(),oe(),R(),me(),H=i(),te(),U=`storybook/comments`,W={name:z.name,title:z.title,icon:z.icon,attributes:z.attributes,example:z.example,presentation:`framed`},G={control:`inline-radio`,options:[`authors`,`posts`]},K=[`stats`,`comments`],q={title:`Packages/Premium Analytics/Widgets/Comments`,component:P,tags:[`autodocs`],argTypes:{view:G},parameters:{docs:{description:{component:`The "Comments" widget. Ranks the site's comment authors and its most-commented posts and pages by comment count. The active view is the host-rendered "View by" header control (Authors / Posts & pages). Ported from the Jetpack Stats Comments module.`}}}},J={render:B,args:{view:`authors`},decorators:[b,v]},Y={render:B,args:{view:`authors`},tags:[`!autodocs`],decorators:[b,v],beforeEach:V(`loading`)},X={render:B,args:{view:`authors`},tags:[`!autodocs`],decorators:[b,v],beforeEach:V(`error`)},Z={render:B,args:{view:`authors`},tags:[`!autodocs`],decorators:[b,v],beforeEach:V(`empty`)},Q={render:e=>(0,H.jsx)(ge,{...e}),args:{...ce,view:`authors`},argTypes:{...le,view:G},decorators:[v]},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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