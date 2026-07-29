import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{t as o,x as s}from"./build-module-Nbr4nybP.js";import{C as c,T as l,X as u,bt as ee,ln as te,mn as ne,ot as d,t as f}from"./date-fns-B2pKki1V.js";import{Cn as p,Dn as m,Un as h,n as g}from"./build-module-DmVuor49.js";import{n as _,o as v}from"./heatmap-chart-De_yQlRj.js";import{B as y,R as b,t as x}from"./build-module-Bglq1Wx9.js";import{A as re,t as S}from"./src-B3le4dug.js";import{Ct as C,c as ie,fr as ae,jn as oe,jr as se}from"./chart-tooltip-vFLt4K3t.js";import{I as ce,L as le,U as ue,q as de}from"./report-metric-DLwhERVn.js";import{t as fe}from"./widget-state-D1YXrbM2.js";import{C as pe,D as me,E as he,S as ge,T as _e,b as ve,t as w,w as ye,x as T}from"./src-DHOMSJKb.js";var E,D,O,k,A,j,be=e((()=>{E=`_root_1uv97_4`,D=`_pager_1uv97_11`,O=`_body_1uv97_23`,k=`_content_1uv97_28`,A=`_heatmap_1uv97_44`,j={root:E,pager:D,body:O,content:k,heatmap:A}}));function xe(e,t,n){let{data:r,isLoading:a,isFetching:o,isError:s,refetch:f}=oe({postId:e,fields:[`data`]}),[p,m]=(0,i.useState)(0);(0,i.useEffect)(()=>{m(0)},[t.from,t.to,n]);let h=ie(t.from),g=ie(t.to),{days:_,isPaged:v,canShowOlder:y}=(0,i.useMemo)(()=>{if(!h||!g||h>g)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=te(c(h),{weekStartsOn:1}),a=d(c(g),{weekStartsOn:1}),o=i<l(a,n-1),s=l(a,p*n),f=l(s,n-1);if(o&&f<i){f=i;let e=ne(i,n-1);s=e<a?e:a}return{days:ee({start:f,end:s}).map(e=>{let n=u(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=h&&n<=g?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<f}},[r,h,g,p,n]),b=(0,i.useCallback)(()=>{m(e=>y?e+1:e)},[y]),x=(0,i.useCallback)(()=>{m(e=>Math.max(0,e-1))},[]);return{days:_,isPaged:v,canShowOlder:y,canShowNewer:p>0,showOlder:b,showNewer:x,isLoading:a,isFetching:o,isError:s,hasData:!!r,refetch:f}}var Se=e((()=>{C(),a(),f(),w()}));function Ce(e){return e?Math.max(F,Math.floor((e-P)/68)):I}function we(){let{reportParams:e}=de(),n=se(e.post_id),[r,a]=(0,i.useState)(),o=s(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);a(t=>t===e?t:e)}}),{days:c,isPaged:l,canShowOlder:u,canShowNewer:ee,showOlder:te,showNewer:ne,isLoading:d,isFetching:f,isError:h,hasData:g,refetch:x}=xe(n,e,Ce(r)*7),{data:S,rowLabels:C}=(0,i.useMemo)(()=>v(c),[c]);return(0,N.jsx)(`div`,{ref:o,className:j.root,children:(0,N.jsx)(`div`,{className:j.body,children:(0,N.jsx)(fe,{isLoading:d&&!g,isFetching:f,isError:h,isEmpty:n<=0||S.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:x}]},empty:{icon:re,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},children:(0,N.jsxs)(`div`,{className:j.content,children:[l&&(0,N.jsxs)(b,{align:`center`,justify:`flex-end`,gap:`sm`,className:j.pager,children:[(0,N.jsx)(y,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:te,disabled:!u,"aria-label":t(`Older activity`,`jetpack-premium-analytics-pkg`),children:(0,N.jsx)(y.Icon,{icon:m,size:16})}),(0,N.jsx)(y,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:ne,disabled:!ee,"aria-label":t(`Newer activity`,`jetpack-premium-analytics-pkg`),children:(0,N.jsx)(y.Icon,{icon:p,size:16})})]}),(0,N.jsx)(_,{data:S,rowLabels:C,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:42,className:j.heatmap})]})})})})}function M({attributes:e={}}){return(0,N.jsx)(ue,{attributes:e,children:(0,N.jsx)(we,{})})}var N,P,F,I,Te=e((()=>{C(),S(),w(),o(),a(),n(),g(),x(),be(),Se(),N=r(),P=48,F=4,I=16})),L,Ee=e((()=>{g(),L={icon:h,attributes:[],example:{attributes:{}}}})),R,z,B,V,H,U,W,De=e((()=>{R=`jpa/post-traffic-activity`,z=`Traffic activity`,B=`Daily views for the post or page being viewed, as a calendar heatmap.`,V={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},H=`stats`,U=`framed`,W={name:R,title:z,description:B,help:V,category:H,presentation:U}}));function G({hasPostScope:e,preset:t},n=!1){return{reportParams:{...ae(n,t),...e?{post_id:J}:{}}}}function K(e){return(0,q.jsx)(M,{attributes:G(e)})}function Oe({hasPostScope:e,preset:t,...n}){return(0,q.jsx)(_e,{...n,widgetType:ge(W,L),renderModule:ke,renderComponent:M,attributes:G({hasPostScope:e,preset:t},!0)})}var q,J,ke,Ae,Y,X,Z,Q,$;e((()=>{C(),ce(),he(),pe(),ve(),Te(),Ee(),De(),q=r(),le(),J=779,ke=`storybook/post-traffic-activity`,Ae={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:M,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},Y={render:K,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[T]},X={render:K,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[T]},Z={render:K,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[T]},Q={render:e=>(0,q.jsx)(Oe,{...e}),args:{...ye,widgetWidth:4,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...me,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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