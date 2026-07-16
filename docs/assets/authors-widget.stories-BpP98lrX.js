import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i,u as a}from"./build-module-DQ5lAs4a.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Wr as s,n as c}from"./build-module-C6Ow06jV.js";import{r as l}from"./hooks-BCwpDVcN.js";import{t as u,u as d}from"./build-module-JNPAD9ni.js";import{L as f,Yn as p,Zt as m,it as h,ut as g}from"./chart-tooltip-9LAfP_cV.js";import{t as ee}from"./leaderboard-chart-Cl5ZDKsB.js";import{C as _,N as te,S as ne,T as v,f as y,g as re,k as ie}from"./report-metric-DGejQO1_.js";import{t as b}from"./widget-state-BY5gdNrv.js";import{S as ae,b as oe,t as x,x as se,y as ce}from"./src-D_idzdSs.js";import{n as le,r as S}from"./with-widget-canvas-Dz43KNHY.js";function C(e){let t=typeof e.label==`string`?e.label:``;return!t||t===E?r(`Untracked authors`,`jetpack-premium-analytics`):t}function w(e){let t=Math.max(...e.map(e=>Math.max(e.views,e.previousViews??0)),1);return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:e.views/t*100,previousShare:r===void 0?void 0:r/t*100,delta:r===void 0?void 0:f(e.views,r)}})}function T(e=[]){if(e.length===0)return[];let t=Math.max(...e.map(e=>Math.max(e.views,e.previousViews??0)),1);return e.map(e=>{let n=e.previousViews;return{id:e.key,label:C(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:e.views/t*100,previousShare:n===void 0?void 0:n/t*100,delta:n===void 0?void 0:f(e.views,n),posts:w(e.children??[])}})}var E,D=t((()=>{x(),i(),E=`Untracked Authors`})),O,k,A,j,M,ue=t((()=>{O=`_root_u187s_1`,k=`_content_u187s_11`,A=`_avatar_u187s_21`,j=`_postLabel_u187s_30`,M={root:O,content:k,avatar:A,postLabel:j}}));function de({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:i=!1,refetch:o,withComparison:c=!1,legendLabels:u}){let{drillDownItem:f,drillDown:p,resetDrillDown:m}=l(),h=(0,P.useMemo)(()=>f?e.find(e=>e.id===f)??null:null,[e,f]);(0,P.useEffect)(()=>{f&&!h&&!t&&!n&&m()},[f,h,t,n,m]);let g=(0,P.useMemo)(()=>h?h.posts.map(e=>{let t=e.link?(0,F.jsx)(d,{className:M.postLabel,href:e.link,variant:`unstyled`,openInNewTab:!0,title:e.title,children:e.title}):(0,F.jsx)(`span`,{className:M.postLabel,title:e.title,children:e.title});return{id:e.id,label:t,currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta}}):e.map(e=>({id:e.id,label:(0,F.jsx)(re,{label:e.label,imageUrl:e.avatarUrl??void 0,imageAlt:a(r(`Avatar of %s`,`jetpack-premium-analytics`),e.label),imageClassName:M.avatar}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta,...e.posts.length>0&&{onClick:()=>p(e.id),ariaLabel:a(r(`View posts by %s`,`jetpack-premium-analytics`),e.label)}})),[e,h,p]),_=!!h;return(0,F.jsxs)(`div`,{className:M.content,children:[h&&(0,F.jsx)(y,{label:r(`All authors`,`jetpack-premium-analytics`),onClick:m}),(0,F.jsx)(b,{isLoading:t,isFetching:n,isError:i,isEmpty:g.length===0,error:{description:r(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics`),actions:o?[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:o}]:void 0},empty:{icon:s,description:r(_?`This author has no posts with views for the selected period.`:`No author views in this period.`,`jetpack-premium-analytics`)},children:(0,F.jsx)(ee,{data:g,withComparison:c,withOverlayLabel:!0,showLegend:!1,legendLabels:u,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function fe({max:e}){let{reportParams:t}=te(),{primary:n,comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:c,refetch:l}=m((0,P.useMemo)(()=>({...t,max:e}),[t,e]),{maxRows:e}),u=(a||n.isPending)&&!s,d=(0,P.useMemo)(()=>T(r?.rows??[]),[r]),f=(0,P.useMemo)(()=>h(t),[t]);return(0,F.jsx)(de,{rows:d,isLoading:u,isFetching:o,isError:d.length===0&&c,refetch:l,withComparison:i,legendLabels:f})}function N({attributes:e={}}){return(0,F.jsx)(ie,{attributes:e,children:(0,F.jsx)(`div`,{className:M.root,children:(0,F.jsx)(fe,{max:L(e.max,I)})})})}var P,F,I,L,R=t((()=>{g(),x(),i(),u(),P=e(n(),1),c(),D(),ue(),F=o(),I=7,L=(e,t)=>{let n=typeof e==`number`?e:Number.parseInt(e??``,10);return Number.isFinite(n)&&n>0?n:t}})),z,B=t((()=>{i(),c(),z={name:`jpa/authors`,title:r(`Authors`,`jetpack-premium-analytics`),help:{content:r(`Learn about your most popular authors to better understand how they contribute to grow your site.`,`jetpack-premium-analytics`)},icon:s,attributes:[{id:`max`,label:r(`Maximum authors`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:7}}}}));function V({withComparison:e}){return(0,U.jsx)(N,{attributes:{max:7,reportParams:p(e)}})}function H(e){return(0,U.jsx)(N,{attributes:{max:7,reportParams:p(!1,e)}})}function pe(e){return(0,U.jsx)(N,{...e})}function me({withComparison:e,...t}){return(0,U.jsx)(oe,{...t,widgetType:G,renderModule:W,renderComponent:pe,attributes:{max:7,reportParams:p(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{g(),se(),le(),ne(),R(),B(),U=o(),_(),W=`storybook/authors`,G={name:z.name,title:z.title,icon:z.icon,presentation:`framed`},K={title:`Packages/Premium Analytics/Widgets/Authors`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[S]},J={render:V,args:{withComparison:!0},decorators:[S]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(v(`stats/top-authors`,`loading`),()=>v(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(v(`stats/top-authors`,`error`),()=>v(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(v(`stats/top-authors`,`empty`),()=>v(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(me,{...e}),args:{...ce,withComparison:!0},argTypes:{...ae,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderAuthors,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderAuthors,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderAuthorsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/top-authors', 'loading');
    return () => setReportMockState('stats/top-authors', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderAuthorsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/top-authors', 'error');
    return () => setReportMockState('stats/top-authors', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderAuthorsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/top-authors', 'empty');
    return () => setReportMockState('stats/top-authors', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral author
glyph and the introductory description).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <AuthorsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};