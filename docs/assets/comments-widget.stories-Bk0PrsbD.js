import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{an as s,n as c}from"./build-module-DmVuor49.js";import{R as l,t as u,u as d}from"./build-module-Buh8Aa_7.js";import{Yn as f,ar as p,ut as m,zt as ee}from"./chart-tooltip-LurPU7pO.js";import{t as te}from"./leaderboard-chart-CVoUMhAs.js";import{C as ne,S as re,T as h,g,k as ie}from"./report-metric-AgW_eWLn.js";import{t as _}from"./widget-state-DBLCYj9j.js";import{S as v,b as ae,t as oe,x as y,y as b}from"./src-D-r-2lag.js";import{n as se,t as x}from"./src-DssGirpX.js";var S,C,w,T,E,D=e((()=>{S=`_root_wpk9e_1`,C=`_content_wpk9e_11`,w=`_avatar_wpk9e_22`,T=`_postLabel_wpk9e_31`,E={root:S,content:C,avatar:w,postLabel:T}}));function O(e){return typeof e==`string`?e:String(e)}function ce({view:e,max:t}){let{data:n,isLoading:r,isFetching:i,isError:o,refetch:s}=ee(),c=(0,a.useMemo)(()=>((n?.data?.[0]?.items??[]).find(t=>t.label===e)?.children??[]).map(t=>{if(e===`authors`){let e=t,n=O(e.label);return{id:e.icon??`author-${n}`,label:n,value:e.value,avatarUrl:e.icon??void 0}}let n=t,r=O(n.label);return{id:n.id==null?n.link??`post-${r}`:String(n.id),label:r,value:n.value,link:n.link??void 0}}).sort((e,t)=>t.value-e.value).slice(0,t>0?t:void 0),[n,e,t]);return{data:c,isLoading:r,isFetching:i,isError:c.length===0&&o,refetch:s}}var le=e((()=>{o(),m()}));function ue(e){return typeof e==`string`&&M.includes(e)}function de(e,r){return r===`authors`?(0,A.jsx)(g,{label:e.label,imageUrl:e.avatarUrl,imageAlt:t(n(`Avatar of %s`,`jetpack-premium-analytics`),e.label),imageClassName:E.avatar}):e.link?(0,A.jsx)(d,{className:E.postLabel,href:e.link,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,A.jsx)(`span`,{className:E.postLabel,title:e.label,children:e.label})}function fe({max:e=10,view:t}){let{data:r,isLoading:i,isFetching:o,isError:c,refetch:u}=ce({view:t,max:e}),d=(0,a.useMemo)(()=>{let e=Math.max(...r.map(e=>e.value),0);return r.map(n=>({id:n.id,label:de(n,t),currentValue:n.value,currentShare:e>0?n.value/e*100:0}))},[r,t]);return(0,A.jsx)(l,{className:E.root,children:(0,A.jsx)(`div`,{className:E.content,children:(0,A.jsx)(_,{isLoading:i,isFetching:o,isError:c,isEmpty:r.length===0,error:{description:n(`We couldn't load comments. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:u}]},empty:{icon:s,description:n(`Learn about the comments your site receives by authors, posts, and pages.`,`jetpack-premium-analytics`)},children:(0,A.jsx)(te,{data:d,withOverlayLabel:!0,showLegend:!1,dataFormat:j})})})})}function k({attributes:e={}}){let t=ue(e.view)?e.view:`authors`;return(0,A.jsx)(ie,{attributes:e,children:(0,A.jsx)(fe,{max:e.max,view:t})})}var A,j,M,N=e((()=>{oe(),o(),r(),c(),u(),D(),le(),A=i(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=[`authors`,`posts`]})),P,F=e((()=>{r(),c(),x(),P={name:`jpa/comments`,title:n(`Comments`,`jetpack-premium-analytics`),help:{content:n(`Learn about the comments your site receives by authors, posts, and pages.`,`jetpack-premium-analytics`)},icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`},{id:`view`,label:n(`View by`,`jetpack-premium-analytics`),type:`text`,Edit:se,elements:[{label:n(`Authors`,`jetpack-premium-analytics`),value:`authors`},{label:n(`Posts & pages`,`jetpack-premium-analytics`),value:`posts`}],relevance:`high`}],example:{attributes:{max:10,view:`authors`}}}}));function I({withComparison:e,view:t}){return(0,B.jsx)(k,{attributes:{view:t,reportParams:f(e)}})}function L(e){return(0,B.jsx)(k,{...e})}function R(e){return()=>(p.removeQueries({queryKey:W}),h(`stats/comments`,e),()=>{h(`stats/comments`,null),p.removeQueries({queryKey:W})})}function z({withComparison:e,view:t,...n}){return(0,B.jsx)(ae,{...n,widgetType:H,renderModule:V,renderComponent:L,attributes:{view:t,reportParams:f(e)}})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),y(),re(),N(),F(),B=i(),ne(),V=`storybook/comments`,H={name:P.name,title:P.title,icon:P.icon,attributes:P.attributes,example:P.example,presentation:`framed`},U={control:`inline-radio`,options:[`authors`,`posts`]},W=[`stats`,`comments`],G=e=>(0,B.jsx)(`div`,{style:{width:`380px`,height:`520px`,margin:`0 auto`,padding:`16px`,boxSizing:`border-box`,background:`#fff`,border:`1px solid #e0e0e0`,borderRadius:`8px`,overflow:`hidden`},children:(0,B.jsx)(e,{})}),K={title:`Packages/Premium Analytics/Widgets/Comments`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},view:U},parameters:{docs:{description:{component:`The "Comments" widget. Ranks the site's comment authors and its most-commented posts and pages by comment count. The active view is the host-rendered "View by" header control (Authors / Posts & pages). Ported from the Jetpack Stats Comments module.`}}}},q={render:I,args:{withComparison:!1,view:`authors`},decorators:[G]},J={render:I,args:{withComparison:!0,view:`authors`},decorators:[G],parameters:{docs:{description:{story:`The Stats Comments module has no comparison data, so this renders the same as Default without fabricated deltas.`}}}},Y={render:I,args:{withComparison:!1,view:`authors`},tags:[`!autodocs`],decorators:[G],beforeEach:R(`loading`)},X={render:I,args:{withComparison:!1,view:`authors`},tags:[`!autodocs`],decorators:[G],beforeEach:R(`error`)},Z={render:I,args:{withComparison:!1,view:`authors`},tags:[`!autodocs`],decorators:[G],beforeEach:R(`empty`)},Q={render:e=>(0,B.jsx)(z,{...e}),args:{...b,withComparison:!0,view:`authors`},argTypes:{...v,withComparison:{control:`boolean`},view:U}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderComments,
  args: {
    withComparison: false,
    view: 'authors'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderComments,
  args: {
    withComparison: true,
    view: 'authors'
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      description: {
        story: 'The Stats Comments module has no comparison data, so this renders the same as Default without fabricated deltas.'
      }
    }
  }
}`,...J.parameters?.docs?.source},description:{story:`The Comments endpoint is all-time and returns no comparison rows, so enabling
the date-range picker's comparison parameters renders the widget identically
to \`Default\` — no period-over-period deltas are shown.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderComments,
  args: {
    withComparison: false,
    view: 'authors'
  },
  // Kept off the shared autodocs page: the mock override is keyed by path, so it
  // would otherwise force the sibling stories on that page into the same state.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceCommentsState('loading')
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderComments,
  args: {
    withComparison: false,
    view: 'authors'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceCommentsState('error')
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderComments,
  args: {
    withComparison: false,
    view: 'authors'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceCommentsState('empty')
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral comment
glyph and "Learn about the comments your site receives…").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <CommentsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true,
    view: 'authors'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    },
    view: VIEW_CONTROL
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`ErrorState`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as ErrorState,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};