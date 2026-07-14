import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-DQ5lAs4a.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{N as a,t as o}from"./build-module-DMs68Vfd.js";import{dc as s,n as c}from"./build-module-Bt8gOW8e.js";import{$ as l,T as u,in as d,pn as f,s as ee}from"./hooks-CarZ30eZ.js";import{R as te,t as ne,u as re}from"./build-module-BAze1CUO.js";import{t as ie}from"./leaderboard-chart-C-5XAZ-c.js";import{i as p,n as ae,t as m}from"./register-report-mocks-Kc4EQ2dV.js";import{p as oe}from"./report-metric-CgEdsU3V.js";import{t as se}from"./widget-state-BhQmNdN9.js";import{S as h,b as g,t as _,x as ce,y as v}from"./src-B4R7bqCJ.js";var y,b,x,S,C,le=e((()=>{y=`_root_c9t9e_1`,b=`_content_c9t9e_11`,x=`_avatar_c9t9e_22`,S=`_postLabel_c9t9e_31`,C={root:y,content:b,avatar:x,postLabel:S}}));function w(e){return typeof e==`string`?e:String(e)}function T({view:e,max:t}){let{data:n,isLoading:r,isFetching:i,isError:o,refetch:s}=l(),c=(0,a.useMemo)(()=>((n?.data?.[0]?.items??[]).find(t=>t.label===e)?.children??[]).map(t=>{if(e===`authors`){let e=t,n=w(e.label);return{id:e.icon??`author-${n}`,label:n,value:e.value,avatarUrl:e.icon??void 0}}let n=t,r=w(n.label);return{id:n.id==null?n.link??`post-${r}`:String(n.id),label:r,value:n.value,link:n.link??void 0}}).sort((e,t)=>t.value-e.value).slice(0,t>0?t:void 0),[n,e,t]);return{data:c,isLoading:r,isFetching:i,isError:c.length===0&&o,refetch:s}}var E=e((()=>{o(),u()}));function D(e){return typeof e==`string`&&M.includes(e)}function O(e,n){return n===`authors`?(0,A.jsx)(oe,{label:e.label,imageUrl:e.avatarUrl,imageAlt:r(t(`Avatar of %s`,`jetpack-premium-analytics`),e.label),imageClassName:C.avatar}):e.link?(0,A.jsx)(re,{className:C.postLabel,href:e.link,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,A.jsx)(`span`,{className:C.postLabel,title:e.label,children:e.label})}function ue({max:e=10,view:n}){let{data:r,isLoading:i,isFetching:o,isError:c,refetch:l}=T({view:n,max:e}),u=(0,a.useMemo)(()=>{let e=Math.max(...r.map(e=>e.value),0);return r.map(t=>({id:t.id,label:O(t,n),currentValue:t.value,currentShare:e>0?t.value/e*100:0}))},[r,n]);return(0,A.jsx)(te,{className:C.root,children:(0,A.jsx)(`div`,{className:C.content,children:(0,A.jsx)(se,{isLoading:i,isFetching:o,isError:c,isEmpty:r.length===0,error:{description:t(`We couldn't load comments. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:l}]},empty:{icon:s,description:t(`Learn about the comments your site receives by authors, posts, and pages.`,`jetpack-premium-analytics`)},children:(0,A.jsx)(ie,{data:u,withOverlayLabel:!0,showLegend:!1,dataFormat:j})})})})}function k({attributes:e={}}){let t=D(e.view)?e.view:`authors`;return(0,A.jsx)(ee,{attributes:e,children:(0,A.jsx)(ue,{max:e.max,view:t})})}var A,j,M,N=e((()=>{_(),o(),n(),c(),ne(),le(),E(),A=i(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=[`authors`,`posts`]})),P,F=e((()=>{n(),c(),P={name:`jpa/comments`,title:t(`Comments`,`jetpack-premium-analytics`),icon:s,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`},{id:`view`,label:t(`View by`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Authors`,`jetpack-premium-analytics`),value:`authors`},{label:t(`Posts & pages`,`jetpack-premium-analytics`),value:`posts`}],relevance:`high`}],example:{attributes:{max:10,view:`authors`}}}}));function I({withComparison:e,view:t}){return(0,B.jsx)(k,{attributes:{view:t,reportParams:d(e)}})}function L(e){return(0,B.jsx)(k,{...e})}function R(e){return()=>(f.removeQueries({queryKey:W}),p(`stats/comments`,e),()=>{p(`stats/comments`,null),f.removeQueries({queryKey:W})})}function z({withComparison:e,view:t,...n}){return(0,B.jsx)(g,{...n,widgetType:H,renderModule:V,renderComponent:L,attributes:{view:t,reportParams:d(e)}})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),ce(),m(),N(),F(),B=i(),ae(),V=`storybook/comments`,H={name:P.name,title:P.title,icon:P.icon,attributes:P.attributes,example:P.example,presentation:`framed`},U={control:`inline-radio`,options:[`authors`,`posts`]},W=[`stats`,`comments`],G=e=>(0,B.jsx)(`div`,{style:{width:`380px`,height:`520px`,margin:`0 auto`,padding:`16px`,boxSizing:`border-box`,background:`#fff`,border:`1px solid #e0e0e0`,borderRadius:`8px`,overflow:`hidden`},children:(0,B.jsx)(e,{})}),K={title:`Packages/Premium Analytics/Widgets/Comments`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},view:U},parameters:{docs:{description:{component:`The "Comments" widget. Ranks the site's comment authors and its most-commented posts and pages by comment count. The active view is the host-rendered "View by" header control (Authors / Posts & pages). Ported from the Jetpack Stats Comments module.`}}}},q={render:I,args:{withComparison:!1,view:`authors`},decorators:[G]},J={render:I,args:{withComparison:!0,view:`authors`},decorators:[G],parameters:{docs:{description:{story:`The Stats Comments module has no comparison data, so this renders the same as Default without fabricated deltas.`}}}},Y={render:I,args:{withComparison:!1,view:`authors`},tags:[`!autodocs`],decorators:[G],beforeEach:R(`loading`)},X={render:I,args:{withComparison:!1,view:`authors`},tags:[`!autodocs`],decorators:[G],beforeEach:R(`error`)},Z={render:I,args:{withComparison:!1,view:`authors`},tags:[`!autodocs`],decorators:[G],beforeEach:R(`empty`)},Q={render:e=>(0,B.jsx)(z,{...e}),args:{...v,withComparison:!0,view:`authors`},argTypes:{...h,withComparison:{control:`boolean`},view:U}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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