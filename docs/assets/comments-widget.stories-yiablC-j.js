import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{an as s,n as c}from"./build-module-DmVuor49.js";import{R as ee,t as l,u}from"./build-module-C-EAdV8N.js";import{L as te,Ut as ne,_r as d,dt as f,er as p}from"./chart-tooltip-QdAL8Ewv.js";import{t as m}from"./leaderboard-chart-_JE2G2T8.js";import{M as h,P as g,R as re,g as _,j as ie,v as ae,w as oe}from"./report-metric-3HLY8J8_.js";import{t as se}from"./widget-state-DhIXtDuu.js";import{C as ce,D as v,E as le,S as y,T as ue,b as de,t as fe,w as pe,x as b}from"./src-BIAuFjPC.js";import{n as x,t as S}from"./src-Bp2JaaB0.js";var C,w,T,E,D,O,me=e((()=>{C=`_root_1d1vt_1`,w=`_content_1d1vt_11`,T=`_avatar_1d1vt_22`,E=`_postLabel_1d1vt_32`,D=`_authorLabel_1d1vt_52`,O={root:C,content:w,avatar:T,postLabel:E,authorLabel:D}}));function k(e){return typeof e==`string`?e:String(e)}function A({view:e,max:t}){let{data:n,isLoading:r,isFetching:i,isError:o,refetch:s}=ne(),c=(0,a.useMemo)(()=>((n?.data?.[0]?.items??[]).find(t=>t.label===e)?.children??[]).map(t=>{if(e===`authors`){let e=t,n=k(e.label);return{id:e.icon??`author-${n}`,label:n,value:e.value,avatarUrl:e.icon??void 0,link:e.link??void 0}}let n=t,r=k(n.label);return{id:n.id==null?n.link??`post-${r}`:String(n.id),label:r,value:n.value,link:n.link??void 0}}).sort((e,t)=>t.value-e.value).slice(0,t>0?t:void 0),[n,e,t]);return{data:c,isLoading:r,isFetching:i,isError:c.length===0&&o,refetch:s}}var j=e((()=>{o(),f()}));function M(e){return typeof e==`string`&&R.includes(e)}function N(e,r){if(r===`authors`){let r=(0,I.jsx)(oe,{label:e.label,imageUrl:e.avatarUrl,imageAlt:e.link?``:t(n(`Avatar of %s`,`jetpack-premium-analytics`),e.label),imageClassName:O.avatar});return e.link?(0,I.jsx)(u,{className:O.authorLabel,href:e.link,variant:`unstyled`,openInNewTab:!0,title:e.label,children:r}):r}return e.link?(0,I.jsx)(u,{className:O.postLabel,href:e.link,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,I.jsx)(`span`,{className:O.postLabel,title:e.label,children:e.label})}function P({max:e=10,view:t}){let{data:r,isLoading:i,isFetching:o,isError:c,refetch:l}=A({view:t,max:e}),u=(0,a.useMemo)(()=>{let e=Math.max(...r.map(e=>e.value),0);return r.map(n=>({id:n.id,label:N(n,t),currentValue:n.value,currentShare:te(n.value,e)}))},[r,t]);return(0,I.jsxs)(ee,{className:O.root,children:[(0,I.jsx)(`div`,{className:O.content,children:(0,I.jsx)(se,{isLoading:i,isFetching:o,isError:c,isEmpty:r.length===0,error:{description:n(`We couldn't load comments. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:l}]},empty:{icon:s,description:n(`Learn about the comments your site receives by authors, posts, and pages.`,`jetpack-premium-analytics`)},children:(0,I.jsx)(m,{data:u,withOverlayLabel:!0,showLegend:!1,dataFormat:L})})}),(0,I.jsx)(ae,{children:(0,I.jsx)(_,{report:`comments`,section:t})})]})}function F({attributes:e={}}){let t=M(e.view)?e.view:`authors`;return(0,I.jsx)(re,{attributes:e,children:(0,I.jsx)(P,{max:e.max,view:t})})}var I,L,R,he=e((()=>{fe(),o(),r(),c(),l(),me(),j(),I=i(),L={type:`number`,options:{useMultipliers:!0,decimals:0}},R=[`authors`,`posts`]})),z,ge=e((()=>{r(),c(),S(),z={name:`jpa/comments`,title:n(`Comments`,`jetpack-premium-analytics`),help:{content:n(`A breakdown of comments, grouped by author and by post or page.`,`jetpack-premium-analytics`),links:[{label:n(`Learn more`,`jetpack-premium-analytics`),href:`https://jetpack.com/support/jetpack-stats/`}]},icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`},{id:`view`,label:n(`View by`,`jetpack-premium-analytics`),type:`text`,Edit:x,elements:[{label:n(`Authors`,`jetpack-premium-analytics`),value:`authors`},{label:n(`Posts & pages`,`jetpack-premium-analytics`),value:`posts`}],relevance:`high`}],example:{attributes:{max:10,view:`authors`}}}}));function B({view:e}){return(0,H.jsx)(F,{attributes:{view:e,reportParams:p()}})}function _e(e){return(0,H.jsx)(F,{...e})}function V(e){return()=>(d.removeQueries({queryKey:K}),g(`stats/comments`,e),()=>{g(`stats/comments`,null),d.removeQueries({queryKey:K})})}function ve({view:e,...t}){return(0,H.jsx)(ce,{...t,widgetType:W,renderModule:U,renderComponent:_e,attributes:{view:e,reportParams:p(!0)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),pe(),le(),de(),ie(),he(),ge(),H=i(),h(),U=`storybook/comments`,W={name:z.name,title:z.title,icon:z.icon,attributes:z.attributes,example:z.example,presentation:`framed`},G={control:`inline-radio`,options:[`authors`,`posts`]},K=[`stats`,`comments`],q={title:`Packages/Premium Analytics/Widgets/Comments`,component:F,tags:[`autodocs`],argTypes:{view:G},parameters:{docs:{description:{component:`The "Comments" widget. Ranks the site's comment authors and its most-commented posts and pages by comment count. The active view is the host-rendered "View by" header control (Authors / Posts & pages). Ported from the Jetpack Stats Comments module.`}}}},J={render:B,args:{view:`authors`},decorators:[b,v]},Y={render:B,args:{view:`authors`},tags:[`!autodocs`],decorators:[b,v],beforeEach:V(`loading`)},X={render:B,args:{view:`authors`},tags:[`!autodocs`],decorators:[b,v],beforeEach:V(`error`)},Z={render:B,args:{view:`authors`},tags:[`!autodocs`],decorators:[b,v],beforeEach:V(`empty`)},Q={render:e=>(0,H.jsx)(ve,{...e}),args:{...y,view:`authors`},argTypes:{...ue,view:G},decorators:[v]},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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