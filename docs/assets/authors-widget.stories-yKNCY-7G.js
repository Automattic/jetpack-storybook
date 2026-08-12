import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{S as r,n as i,t as a}from"./build-module-DyKOxfM8.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Wr as s,n as c}from"./build-module-CDRs4YxF.js";import{E as l,K as u,M as d,O as f,S as ee,X as p,et as m,it as h,q as g,w as _}from"./report-metric-BZ-9rtlV.js";import{r as te}from"./hooks-nuqqSLvH.js";import{Q as v,Tt as y,Z as b,et as x,g as ne,hn as re,hr as S,xt as ie}from"./chart-tooltip-BMeWiyL-.js";import{t as ae}from"./leaderboard-chart-C0CTrh99.js";import{t as oe}from"./widget-state-B8RHjzuI.js";import{C as se,D as ce,E as le,O as ue,S as de,T as fe,b as pe,k as C,t as w,w as me,x as T}from"./src-B4C48Aim.js";function he(e){let t=typeof e.label==`string`?e.label:``;return!t||t===E?i(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function ge(e){let t=v(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:b(e.views,t),previousShare:r===void 0?void 0:b(r,t),delta:r===void 0?void 0:x(e.views,r)}})}function _e(e=[]){if(e.length===0)return[];let t=v(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,label:he(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:b(e.views,t),previousShare:n===void 0?void 0:b(n,t),delta:n===void 0?void 0:x(e.views,n),posts:ge(e.children??[])}})}var E,ve=t((()=>{w(),a(),E=`Untracked Authors`})),D,O,k,ye=t((()=>{D=`_root_buj5x_1`,O=`_content_buj5x_11`,k={root:D,content:O}}));function be({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:a=!1,refetch:o,withComparison:c=!1,legendLabels:l}){let{drillDownItem:u,drillDown:p,resetDrillDown:m}=te(),h=(0,j.useMemo)(()=>u?e.find(e=>e.id===u)??null:null,[e,u]);(0,j.useEffect)(()=>{u&&!h&&!t&&!n&&m()},[u,h,t,n,m]);let g=(0,j.useMemo)(()=>h?h.posts.map(e=>({id:e.id,label:(0,M.jsx)(ee,{id:e.postId,label:e.title,link:e.link}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>({id:e.id,...d({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>p(e.id),ariaLabel:r(i(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})),[e,h,p]),_=!!h;return(0,M.jsxs)(`div`,{className:k.content,children:[h&&(0,M.jsx)(f,{label:i(`All authors`,`jetpack-premium-analytics-pkg`),onClick:m}),(0,M.jsx)(oe,{isLoading:t,isFetching:n,isError:a,isEmpty:g.length===0,error:{description:i(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:{icon:s,description:i(_?`This author has no posts with views for the selected period.`:`No author views in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,M.jsx)(ae,{data:g,withComparison:c,withOverlayLabel:!0,showLegend:!1,legendLabels:l,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function xe({max:e}){let{reportParams:t}=h(),{primary:n,comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:c,refetch:u}=re((0,j.useMemo)(()=>({...t,max:e}),[t,e]),{maxRows:e}),d=(a||n.isPending)&&!s,f=(0,j.useMemo)(()=>_e(r?.rows??[]),[r]),ee=(0,j.useMemo)(()=>ie(t),[t]);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(be,{rows:f,isLoading:d,isFetching:o,isError:f.length===0&&c,refetch:u,withComparison:i,legendLabels:ee}),(0,M.jsx)(l,{children:(0,M.jsx)(_,{report:`authors`})})]})}function A({attributes:e={}}){return(0,M.jsx)(m,{attributes:e,children:(0,M.jsx)(`div`,{className:k.root,children:(0,M.jsx)(xe,{max:ne(e.max,N)})})})}var j,M,N,Se=t((()=>{y(),w(),a(),j=e(n(),1),c(),ve(),ye(),M=o(),N=7})),P,Ce=t((()=>{a(),c(),P={icon:s,attributes:[{id:`max`,label:i(`Maximum authors`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:7}}}})),F,I,L,R,z,B,V,we=t((()=>{F=`jpa/authors`,I=`Popular authors`,L=`Top authors by views, with their most viewed posts.`,R={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(A,{attributes:{max:7,reportParams:S(e)}})}function U(e){return(0,W.jsx)(A,{attributes:{max:7,reportParams:S(!1,e)}})}function Te(e){return(0,W.jsx)(A,{...e})}function Ee({withComparison:e,...t}){return(0,W.jsx)(fe,{...t,widgetType:De,renderModule:G,renderComponent:Te,attributes:{max:7,reportParams:S(e)}})}var W,G,De,K,q,J,Y,X,Z,Q,$;t((()=>{y(),le(),se(),ue(),pe(),u(),Se(),Ce(),we(),W=o(),g(),G=`storybook/authors`,De=de(V,P),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:H,args:{withComparison:!1},decorators:[T,C]},J={render:H,args:{withComparison:!0},decorators:[T,C]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(p(`stats/top-authors`,`loading`),()=>p(`stats/top-authors`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(p(`stats/top-authors`,`error`),()=>p(`stats/top-authors`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(p(`stats/top-authors`,`empty`),()=>p(`stats/top-authors`,null))},Q={render:e=>(0,W.jsx)(Ee,{...e}),args:{...me,withComparison:!0},argTypes:{...ce,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderAuthors,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderAuthors,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderAuthorsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/top-authors', 'loading');
    return () => setReportMockState('stats/top-authors', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderAuthorsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/top-authors', 'error');
    return () => setReportMockState('stats/top-authors', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderAuthorsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
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