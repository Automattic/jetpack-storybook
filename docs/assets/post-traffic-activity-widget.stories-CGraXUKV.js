import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{t as o,x as s}from"./build-module-Nbr4nybP.js";import{C as c,T as l,X as u,bt as d,ln as f,mn as ee,ot as p,t as m}from"./date-fns-B2pKki1V.js";import{Gn as h,Tn as g,kn as _,n as v}from"./build-module-DoJYX5DX.js";import{G as y,W as b,Z as x,tt as S}from"./report-metric-WG7ZNOz1.js";import{n as te,o as ne}from"./heatmap-chart-CLiSd-Xr.js";import{B as C,R as re,t as ie}from"./build-module-9_QNfiDl.js";import{A as ae,t as oe}from"./src-B3le4dug.js";import{c as se,kn as ce,kr as le,ur as ue,xt as w}from"./chart-tooltip-DL-4iUUY.js";import{t as de}from"./widget-state-CrbkVDzl.js";import{C as fe,D as pe,E as me,S as he,T as ge,b as _e,t as T,w as ve,x as E}from"./src-CqSb8IKj.js";var D,O,k,A,j,M,ye=e((()=>{D=`_root_1uv97_4`,O=`_pager_1uv97_11`,k=`_body_1uv97_23`,A=`_content_1uv97_28`,j=`_heatmap_1uv97_44`,M={root:D,pager:O,body:k,content:A,heatmap:j}}));function be(e,t,n){let{data:r,isLoading:a,isFetching:o,isError:s,refetch:m}=ce({postId:e,fields:[`data`]}),[h,g]=(0,i.useState)(0);(0,i.useEffect)(()=>{g(0)},[t.from,t.to,n]);let _=se(t.from),v=se(t.to),{days:y,isPaged:b,canShowOlder:x}=(0,i.useMemo)(()=>{if(!_||!v||_>v)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=f(c(_),{weekStartsOn:1}),a=p(c(v),{weekStartsOn:1}),o=i<l(a,n-1),s=l(a,h*n),m=l(s,n-1);if(o&&m<i){m=i;let e=ee(i,n-1);s=e<a?e:a}return{days:d({start:m,end:s}).map(e=>{let n=u(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=_&&n<=v?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<m}},[r,_,v,h,n]),S=(0,i.useCallback)(()=>{g(e=>x?e+1:e)},[x]),te=(0,i.useCallback)(()=>{g(e=>Math.max(0,e-1))},[]);return{days:y,isPaged:b,canShowOlder:x,canShowNewer:h>0,showOlder:S,showNewer:te,isLoading:a,isFetching:o,isError:s,hasData:!!r,refetch:m}}var xe=e((()=>{w(),a(),m(),T()}));function Se(e){return e?Math.max(I,Math.floor((e-F)/68)):L}function Ce(){let{reportParams:e}=S(),n=le(e.post_id),[r,a]=(0,i.useState)(),o=s(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);a(t=>t===e?t:e)}}),{days:c,isPaged:l,canShowOlder:u,canShowNewer:d,showOlder:f,showNewer:ee,isLoading:p,isFetching:m,isError:h,hasData:v,refetch:y}=be(n,e,Se(r)*7),{data:b,rowLabels:x}=(0,i.useMemo)(()=>ne(c),[c]);return(0,P.jsx)(`div`,{ref:o,className:M.root,children:(0,P.jsx)(`div`,{className:M.body,children:(0,P.jsx)(de,{isLoading:p&&!v,isFetching:m,isError:h,isEmpty:n<=0||b.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:y}]},empty:{icon:ae,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},children:(0,P.jsxs)(`div`,{className:M.content,children:[l&&(0,P.jsxs)(re,{align:`center`,justify:`flex-end`,gap:`sm`,className:M.pager,children:[(0,P.jsx)(C,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:f,disabled:!u,"aria-label":t(`Older activity`,`jetpack-premium-analytics-pkg`),children:(0,P.jsx)(C.Icon,{icon:_,size:16})}),(0,P.jsx)(C,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:ee,disabled:!d,"aria-label":t(`Newer activity`,`jetpack-premium-analytics-pkg`),children:(0,P.jsx)(C.Icon,{icon:g,size:16})})]}),(0,P.jsx)(te,{data:b,rowLabels:x,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:42,className:M.heatmap})]})})})})}function N({attributes:e={}}){return(0,P.jsx)(x,{attributes:e,children:(0,P.jsx)(Ce,{})})}var P,F,I,L,we=e((()=>{w(),oe(),T(),o(),a(),n(),v(),ie(),ye(),xe(),P=r(),F=48,I=4,L=16})),R,Te=e((()=>{v(),R={icon:h,attributes:[],example:{attributes:{}}}})),z,B,V,H,U,W,G,Ee=e((()=>{z=`jpa/post-traffic-activity`,B=`Traffic activity`,V=`Daily views for the post or page being viewed, as a calendar heatmap.`,H={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},U=`stats`,W=`framed`,G={name:z,title:B,description:V,help:H,category:U,presentation:W}}));function De({hasPostScope:e,preset:t},n=!1){return{reportParams:{...ue(n,t),...e?{post_id:J}:{}}}}function K(e){return(0,q.jsx)(N,{attributes:De(e)})}function Oe({hasPostScope:e,preset:t,...n}){return(0,q.jsx)(ge,{...n,widgetType:he(G,R),renderModule:ke,renderComponent:N,attributes:De({hasPostScope:e,preset:t},!0)})}var q,J,ke,Ae,Y,X,Z,Q,$;e((()=>{w(),b(),me(),fe(),_e(),we(),Te(),Ee(),q=r(),y(),J=779,ke=`storybook/post-traffic-activity`,Ae={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:N,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},Y={render:K,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[E]},X={render:K,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[E]},Z={render:K,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[E]},Q={render:e=>(0,q.jsx)(Oe,{...e}),args:{...ve,widgetWidth:4,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...pe,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderPostTrafficActivity,
  args: {
    hasPostScope: true,
    preset: 'last-30-days'
  },
  decorators: [withWidgetCanvas]
}`,...Y.parameters?.docs?.source},description:{story:`Default — the scoped post's daily view heatmap for the dashboard range.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPostTrafficActivity,
  args: {
    hasPostScope: true,
    preset: 'last-365-days'
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source},description:{story:`Paged — a deterministic year-long range that always exceeds one page at
the default story width, exposing both pager controls for direct review.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderPostTrafficActivity,
  args: {
    hasPostScope: false,
    preset: 'last-30-days'
  },
  decorators: [withWidgetCanvas]
}`,...Z.parameters?.docs?.source},description:{story:`NoPostScope — the widget without a \`post_id\` report param, as when added
outside a post detail page. Renders the scopeless empty state without
firing a stats request.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`Paged`,`NoPostScope`,`WidgetDashboardWithWidget`]}))();export{Y as Default,Z as NoPostScope,X as Paged,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Ae as default};