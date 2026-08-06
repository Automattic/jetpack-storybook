import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{t as o,y as s}from"./build-module-BShXUI3N.js";import{$c as c,Yc as l,n as u,yl as d}from"./build-module-Bb7IR3OP.js";import{C as f,T as p,X as ee,bt as m,ln as h,mn as g,ot as te,t as _}from"./date-fns-B2pKki1V.js";import{lr as v,t as y,xr as b}from"./src-BpqnjMWs.js";import{$ as x,K as S,q as ne,rt as re}from"./report-metric-BAUfAG3E.js";import{n as ie,o as ae}from"./heatmap-chart-CiJYIpKA.js";import{A as oe,t as se}from"./src-q13B8HIT.js";import{Ct as C,Mn as ce,Mr as le,pr as ue,u as w}from"./chart-tooltip-BikeUN0i.js";import{C as de,D as fe,E as pe,S as me,T as he,b as ge,t as T,w as _e,x as E}from"./src-v76cCQiE.js";import{t as ve}from"./widget-state-Cwf-uDw4.js";var D,O,k,A,j,M,ye=e((()=>{D=`_root_1uv97_4`,O=`_pager_1uv97_11`,k=`_body_1uv97_23`,A=`_content_1uv97_28`,j=`_heatmap_1uv97_44`,M={root:D,pager:O,body:k,content:A,heatmap:j}}));function be(e,t,n){let{data:r,isLoading:a,isFetching:o,isError:s,refetch:c}=ce({postId:e,fields:[`data`]}),[l,u]=(0,i.useState)(0);(0,i.useEffect)(()=>{u(0)},[t.from,t.to,n]);let d=w(t.from),_=w(t.to),{days:v,isPaged:y,canShowOlder:b}=(0,i.useMemo)(()=>{if(!d||!_||d>_)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=h(f(d),{weekStartsOn:1}),a=te(f(_),{weekStartsOn:1}),o=i<p(a,n-1),s=p(a,l*n),c=p(s,n-1);if(o&&c<i){c=i;let e=g(i,n-1);s=e<a?e:a}return{days:m({start:c,end:s}).map(e=>{let n=ee(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=d&&n<=_?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,d,_,l,n]),x=(0,i.useCallback)(()=>{u(e=>b?e+1:e)},[b]),S=(0,i.useCallback)(()=>{u(e=>Math.max(0,e-1))},[]);return{days:v,isPaged:y,canShowOlder:b,canShowNewer:l>0,showOlder:x,showNewer:S,isLoading:a,isFetching:o,isError:s,hasData:!!r,refetch:c}}var xe=e((()=>{C(),a(),_(),T()}));function Se(e){return e?Math.max(I,Math.floor((e-F)/68)):L}function Ce(){let{reportParams:e}=re(),n=le(e.post_id),[r,a]=(0,i.useState)(),o=s(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);a(t=>t===e?t:e)}}),{days:u,isPaged:d,canShowOlder:f,canShowNewer:p,showOlder:ee,showNewer:m,isLoading:h,isFetching:g,isError:te,hasData:_,refetch:y}=be(n,e,Se(r)*7),{data:x,rowLabels:S}=(0,i.useMemo)(()=>ae(u),[u]);return(0,P.jsx)(`div`,{ref:o,className:M.root,children:(0,P.jsx)(`div`,{className:M.body,children:(0,P.jsx)(ve,{isLoading:h&&!_,isFetching:g,isError:te,isEmpty:n<=0||x.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:y}]},empty:{icon:oe,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},children:(0,P.jsxs)(`div`,{className:M.content,children:[d&&(0,P.jsxs)(v,{align:`center`,justify:`flex-end`,gap:`sm`,className:M.pager,children:[(0,P.jsx)(b,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:ee,disabled:!f,"aria-label":t(`Older activity`,`jetpack-premium-analytics-pkg`),children:(0,P.jsx)(b.Icon,{icon:c,size:16})}),(0,P.jsx)(b,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:m,disabled:!p,"aria-label":t(`Newer activity`,`jetpack-premium-analytics-pkg`),children:(0,P.jsx)(b.Icon,{icon:l,size:16})})]}),(0,P.jsx)(ie,{data:x,rowLabels:S,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:42,className:M.heatmap})]})})})})}function N({attributes:e={}}){return(0,P.jsx)(x,{attributes:e,children:(0,P.jsx)(Ce,{})})}var P,F,I,L,we=e((()=>{C(),se(),T(),o(),a(),n(),u(),y(),ye(),xe(),P=r(),F=48,I=4,L=16})),R,Te=e((()=>{u(),R={icon:d,attributes:[],example:{attributes:{}}}})),z,B,V,H,U,W,G,Ee=e((()=>{z=`jpa/post-traffic-activity`,B=`Traffic activity`,V=`Daily views for the post or page being viewed, as a calendar heatmap.`,H={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},U=`stats`,W=`framed`,G={name:z,title:B,description:V,help:H,category:U,presentation:W}}));function De({hasPostScope:e,preset:t},n=!1){return{reportParams:{...ue(n,t),...e?{post_id:J}:{}}}}function K(e){return(0,q.jsx)(N,{attributes:De(e)})}function Oe({hasPostScope:e,preset:t,...n}){return(0,q.jsx)(he,{...n,widgetType:me(G,R),renderModule:ke,renderComponent:N,attributes:De({hasPostScope:e,preset:t},!0)})}var q,J,ke,Ae,Y,X,Z,Q,$;e((()=>{C(),S(),pe(),de(),ge(),we(),Te(),Ee(),q=r(),ne(),J=779,ke=`storybook/post-traffic-activity`,Ae={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:N,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},Y={render:K,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[E]},X={render:K,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[E]},Z={render:K,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[E]},Q={render:e=>(0,q.jsx)(Oe,{...e}),args:{..._e,widgetWidth:4,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...fe,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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