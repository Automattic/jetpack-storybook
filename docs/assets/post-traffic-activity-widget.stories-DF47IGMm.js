import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{t as o,x as s}from"./build-module-Nbr4nybP.js";import{C as c,T as l,X as u,bt as ee,ln as te,mn as d,ot as f,t as p}from"./date-fns-B2pKki1V.js";import{Cn as m,Dn as h,Un as g,n as _}from"./build-module-DmVuor49.js";import{n as v,o as y}from"./heatmap-chart-5vW9fhjh.js";import{B as b,R as x,t as S}from"./build-module-DNZEHly6.js";import{A as ne,t as C}from"./src-B3le4dug.js";import{Dn as re,Dr as ie,c as ae,cr as oe,yt as w}from"./chart-tooltip-C0tX-7b1.js";import{F as se,G as ce,P as le,V as ue}from"./report-metric-BYpUD3lN.js";import{t as de}from"./widget-state-CWk5Rbsj.js";import{C as fe,D as pe,E as me,S as he,T as ge,b as _e,t as T,w as ve,x as E}from"./src-DS4Qf8WS.js";var D,O,k,A,j,M,ye=e((()=>{D=`_root_1uv97_4`,O=`_pager_1uv97_11`,k=`_body_1uv97_23`,A=`_content_1uv97_28`,j=`_heatmap_1uv97_44`,M={root:D,pager:O,body:k,content:A,heatmap:j}}));function be(e,t,n){let{data:r,isLoading:a,isFetching:o,isError:s,refetch:p}=re({postId:e,fields:[`data`]}),[m,h]=(0,i.useState)(0);(0,i.useEffect)(()=>{h(0)},[t.from,t.to,n]);let g=ae(t.from),_=ae(t.to),{days:v,isPaged:y,canShowOlder:b}=(0,i.useMemo)(()=>{if(!g||!_||g>_)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=te(c(g),{weekStartsOn:1}),a=f(c(_),{weekStartsOn:1}),o=i<l(a,n-1),s=l(a,m*n),p=l(s,n-1);if(o&&p<i){p=i;let e=d(i,n-1);s=e<a?e:a}return{days:ee({start:p,end:s}).map(e=>{let n=u(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=g&&n<=_?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<p}},[r,g,_,m,n]),x=(0,i.useCallback)(()=>{h(e=>b?e+1:e)},[b]),S=(0,i.useCallback)(()=>{h(e=>Math.max(0,e-1))},[]);return{days:v,isPaged:y,canShowOlder:b,canShowNewer:m>0,showOlder:x,showNewer:S,isLoading:a,isFetching:o,isError:s,hasData:!!r,refetch:p}}var xe=e((()=>{w(),a(),p(),T()}));function Se(e){return e?Math.max(I,Math.floor((e-F)/68)):L}function Ce(){let{reportParams:e}=ce(),n=ie(e.post_id),[r,a]=(0,i.useState)(),o=s(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);a(t=>t===e?t:e)}}),{days:c,isPaged:l,canShowOlder:u,canShowNewer:ee,showOlder:te,showNewer:d,isLoading:f,isFetching:p,isError:g,hasData:_,refetch:S}=be(n,e,Se(r)*7),{data:C,rowLabels:re}=(0,i.useMemo)(()=>y(c),[c]);return(0,P.jsx)(`div`,{ref:o,className:M.root,children:(0,P.jsx)(`div`,{className:M.body,children:(0,P.jsx)(de,{isLoading:f&&!_,isFetching:p,isError:g,isEmpty:n<=0||C.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:S}]},empty:{icon:ne,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics`)},children:(0,P.jsxs)(`div`,{className:M.content,children:[l&&(0,P.jsxs)(x,{align:`center`,justify:`flex-end`,gap:`sm`,className:M.pager,children:[(0,P.jsx)(b,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:te,disabled:!u,"aria-label":t(`Older activity`,`jetpack-premium-analytics`),children:(0,P.jsx)(b.Icon,{icon:h,size:16})}),(0,P.jsx)(b,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:d,disabled:!ee,"aria-label":t(`Newer activity`,`jetpack-premium-analytics`),children:(0,P.jsx)(b.Icon,{icon:m,size:16})})]}),(0,P.jsx)(v,{data:C,rowLabels:re,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:42,className:M.heatmap})]})})})})}function N({attributes:e={}}){return(0,P.jsx)(ue,{attributes:e,children:(0,P.jsx)(Ce,{})})}var P,F,I,L,we=e((()=>{w(),C(),T(),o(),a(),n(),_(),S(),ye(),xe(),P=r(),F=48,I=4,L=16})),R,Te=e((()=>{_(),R={icon:g,attributes:[],example:{attributes:{}}}})),z,B,V,H,U,W,G,Ee=e((()=>{z=`jpa/post-traffic-activity`,B=`Traffic activity`,V=`Daily views for the post or page being viewed, as a calendar heatmap.`,H={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},U=`stats`,W=`framed`,G={name:z,title:B,description:V,help:H,category:U,presentation:W}}));function K({hasPostScope:e,preset:t},n=!1){return{reportParams:{...oe(n,t),...e?{post_id:Y}:{}}}}function q(e){return(0,J.jsx)(N,{attributes:K(e)})}function De({hasPostScope:e,preset:t,...n}){return(0,J.jsx)(ge,{...n,widgetType:he(G,R),renderModule:Oe,renderComponent:N,attributes:K({hasPostScope:e,preset:t},!0)})}var J,Y,Oe,ke,X,Z,Q,$,Ae;e((()=>{w(),le(),me(),fe(),_e(),we(),Te(),Ee(),J=r(),se(),Y=779,Oe=`storybook/post-traffic-activity`,ke={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:N,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},X={render:q,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[E]},Z={render:q,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[E]},Q={render:q,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[E]},$={render:e=>(0,J.jsx)(De,{...e}),args:{...ve,widgetWidth:4,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...pe,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPostTrafficActivity,
  args: {
    hasPostScope: true,
    preset: 'last-30-days'
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source},description:{story:`Default — the scoped post's daily view heatmap for the dashboard range.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderPostTrafficActivity,
  args: {
    hasPostScope: true,
    preset: 'last-365-days'
  },
  decorators: [withWidgetCanvas]
}`,...Z.parameters?.docs?.source},description:{story:`Paged — a deterministic year-long range that always exceeds one page at
the default story width, exposing both pager controls for direct review.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: renderPostTrafficActivity,
  args: {
    hasPostScope: false,
    preset: 'last-30-days'
  },
  decorators: [withWidgetCanvas]
}`,...Q.parameters?.docs?.source},description:{story:`NoPostScope — the widget without a \`post_id\` report param, as when added
outside a post detail page. Renders the scopeless empty state without
firing a stats request.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => <PostTrafficActivityDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 4,
    widgetHeight: 2,
    hasPostScope: true,
    preset: 'last-30-days'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    hasPostScope: {
      control: 'boolean',
      description: 'Include the \`post_id\` report param the post detail page seeds from its URL.'
    },
    preset: {
      control: 'select',
      options: ['last-30-days', 'last-365-days'],
      description: 'Dashboard date range used to exercise single-page and paged layouts.'
    }
  }
}`,...$.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...$.parameters?.docs?.description}}},Ae=[`Default`,`Paged`,`NoPostScope`,`WidgetDashboardWithWidget`]}))();export{X as Default,Q as NoPostScope,Z as Paged,$ as WidgetDashboardWithWidget,Ae as __namedExportsOrder,ke as default};