import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{t as o,x as s}from"./build-module-Nbr4nybP.js";import{C as c,T as l,X as u,bt as d,ln as f,mn as p,ot as ee,t as m}from"./date-fns-B2pKki1V.js";import{Cn as h,Dn as g,Un as _,n as v}from"./build-module-DmVuor49.js";import{H as y,J as b,Q as x,V as S}from"./report-metric-CpDmxKQk.js";import{n as C,o as te}from"./heatmap-chart-BlIgYq9G.js";import{B as w,R as ne,t as re}from"./build-module-B5TaN1BK.js";import{A as ie,t as ae}from"./src-B3le4dug.js";import{c as oe,kn as se,kr as ce,ur as le,xt as T}from"./chart-tooltip-iyih-Xxg.js";import{t as ue}from"./widget-state-DVrKdzTg.js";import{C as de,D as fe,E as pe,S as me,T as he,b as ge,t as E,w as _e,x as D}from"./src-CfCTmtdI.js";var O,k,A,j,M,N,ve=e((()=>{O=`_root_1uv97_4`,k=`_pager_1uv97_11`,A=`_body_1uv97_23`,j=`_content_1uv97_28`,M=`_heatmap_1uv97_44`,N={root:O,pager:k,body:A,content:j,heatmap:M}}));function ye(e,t,n){let{data:r,isLoading:a,isFetching:o,isError:s,refetch:m}=se({postId:e,fields:[`data`]}),[h,g]=(0,i.useState)(0);(0,i.useEffect)(()=>{g(0)},[t.from,t.to,n]);let _=oe(t.from),v=oe(t.to),{days:y,isPaged:b,canShowOlder:x}=(0,i.useMemo)(()=>{if(!_||!v||_>v)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=f(c(_),{weekStartsOn:1}),a=ee(c(v),{weekStartsOn:1}),o=i<l(a,n-1),s=l(a,h*n),m=l(s,n-1);if(o&&m<i){m=i;let e=p(i,n-1);s=e<a?e:a}return{days:d({start:m,end:s}).map(e=>{let n=u(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=_&&n<=v?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<m}},[r,_,v,h,n]),S=(0,i.useCallback)(()=>{g(e=>x?e+1:e)},[x]),C=(0,i.useCallback)(()=>{g(e=>Math.max(0,e-1))},[]);return{days:y,isPaged:b,canShowOlder:x,canShowNewer:h>0,showOlder:S,showNewer:C,isLoading:a,isFetching:o,isError:s,hasData:!!r,refetch:m}}var be=e((()=>{T(),a(),m(),E()}));function xe(e){return e?Math.max(L,Math.floor((e-I)/68)):R}function Se(){let{reportParams:e}=x(),n=ce(e.post_id),[r,a]=(0,i.useState)(),o=s(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);a(t=>t===e?t:e)}}),{days:c,isPaged:l,canShowOlder:u,canShowNewer:d,showOlder:f,showNewer:p,isLoading:ee,isFetching:m,isError:_,hasData:v,refetch:y}=ye(n,e,xe(r)*7),{data:b,rowLabels:S}=(0,i.useMemo)(()=>te(c),[c]);return(0,F.jsx)(`div`,{ref:o,className:N.root,children:(0,F.jsx)(`div`,{className:N.body,children:(0,F.jsx)(ue,{isLoading:ee&&!v,isFetching:m,isError:_,isEmpty:n<=0||b.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:y}]},empty:{icon:ie,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},children:(0,F.jsxs)(`div`,{className:N.content,children:[l&&(0,F.jsxs)(ne,{align:`center`,justify:`flex-end`,gap:`sm`,className:N.pager,children:[(0,F.jsx)(w,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:f,disabled:!u,"aria-label":t(`Older activity`,`jetpack-premium-analytics-pkg`),children:(0,F.jsx)(w.Icon,{icon:g,size:16})}),(0,F.jsx)(w,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:p,disabled:!d,"aria-label":t(`Newer activity`,`jetpack-premium-analytics-pkg`),children:(0,F.jsx)(w.Icon,{icon:h,size:16})})]}),(0,F.jsx)(C,{data:b,rowLabels:S,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:42,className:N.heatmap})]})})})})}function P({attributes:e={}}){return(0,F.jsx)(b,{attributes:e,children:(0,F.jsx)(Se,{})})}var F,I,L,R,Ce=e((()=>{T(),ae(),E(),o(),a(),n(),v(),re(),ve(),be(),F=r(),I=48,L=4,R=16})),z,we=e((()=>{v(),z={icon:_,attributes:[],example:{attributes:{}}}})),B,V,H,U,W,G,Te,Ee=e((()=>{B=`jpa/post-traffic-activity`,V=`Traffic activity`,H=`Daily views for the post or page being viewed, as a calendar heatmap.`,U={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},W=`stats`,G=`framed`,Te={name:B,title:V,description:H,help:U,category:W,presentation:G}}));function De({hasPostScope:e,preset:t},n=!1){return{reportParams:{...le(n,t),...e?{post_id:J}:{}}}}function K(e){return(0,q.jsx)(P,{attributes:De(e)})}function Oe({hasPostScope:e,preset:t,...n}){return(0,q.jsx)(he,{...n,widgetType:me(Te,z),renderModule:ke,renderComponent:P,attributes:De({hasPostScope:e,preset:t},!0)})}var q,J,ke,Ae,Y,X,Z,Q,$;e((()=>{T(),S(),pe(),de(),ge(),Ce(),we(),Ee(),q=r(),y(),J=779,ke=`storybook/post-traffic-activity`,Ae={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:P,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},Y={render:K,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[D]},X={render:K,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[D]},Z={render:K,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[D]},Q={render:e=>(0,q.jsx)(Oe,{...e}),args:{..._e,widgetWidth:4,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...fe,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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