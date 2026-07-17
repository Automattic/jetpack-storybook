import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{t as o,x as s}from"./build-module-Nbr4nybP.js";import{C as c,T as l,X as u,bt as d,ln as f,mn as p,ot as m,t as h}from"./date-fns-B2pKki1V.js";import{Cn as g,Dn as _,Un as v,n as y}from"./build-module-DmVuor49.js";import{n as b,o as x}from"./heatmap-chart-Bv1O9cD6.js";import{B as S,R as C,t as w}from"./build-module-Co71Jhbm.js";import{A as ee,t as T}from"./src-B3le4dug.js";import{$n as E,ut as D,vn as te}from"./chart-tooltip-C4NUtjXe.js";import{F as ne,T as re,j as ie,w as ae}from"./report-metric-DerWADBf.js";import{t as oe}from"./widget-state-B76seV2w.js";import{C as se,S as ce,T as le,b as ue,t as de,w as fe,x as O}from"./src-0WK5HJj0.js";var k,A,j,M,N,P,pe=e((()=>{k=`_root_1uv97_4`,A=`_pager_1uv97_11`,j=`_body_1uv97_23`,M=`_content_1uv97_28`,N=`_heatmap_1uv97_44`,P={root:k,pager:A,body:j,content:M,heatmap:N}}));function F(e){let t=e?.slice(0,10);return t&&/^\d{4}-\d{2}-\d{2}$/.test(t)&&!Number.isNaN(c(t).getTime())?t:void 0}function I(e,t,n){let{data:r,isLoading:a,isFetching:o,isError:s,refetch:h}=te({postId:e,fields:[`data`]}),[g,_]=(0,i.useState)(0);(0,i.useEffect)(()=>{_(0)},[t.from,t.to,n]);let v=F(t.from),y=F(t.to),{days:b,isPaged:x,canShowOlder:S}=(0,i.useMemo)(()=>{if(!v||!y||v>y)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=f(c(v),{weekStartsOn:1}),a=m(c(y),{weekStartsOn:1}),o=i<l(a,n-1),s=l(a,g*n),h=l(s,n-1);if(o&&h<i){h=i;let e=p(i,n-1);s=e<a?e:a}return{days:d({start:h,end:s}).map(e=>{let n=u(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=v&&n<=y?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<h}},[r,v,y,g,n]),C=(0,i.useCallback)(()=>{_(e=>S?e+1:e)},[S]),w=(0,i.useCallback)(()=>{_(e=>Math.max(0,e-1))},[]);return{days:b,isPaged:x,canShowOlder:S,canShowNewer:g>0,showOlder:C,showNewer:w,isLoading:a,isFetching:o,isError:s,hasData:!!r,refetch:h}}var me=e((()=>{D(),a(),h()}));function he(e){return e?Math.max(B,Math.floor((e-z)/68)):V}function ge(){let{reportParams:e}=ne(),n=Number(e.post_id),r=Number.isInteger(n)&&n>0?n:0,[a,o]=(0,i.useState)(),c=s(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);o(t=>t===e?t:e)}}),{days:l,isPaged:u,canShowOlder:d,canShowNewer:f,showOlder:p,showNewer:m,isLoading:h,isFetching:v,isError:y,hasData:w,refetch:T}=I(r,e,he(a)*7),{data:E,rowLabels:D}=(0,i.useMemo)(()=>x(l),[l]);return(0,R.jsx)(`div`,{ref:c,className:P.root,children:(0,R.jsx)(`div`,{className:P.body,children:(0,R.jsx)(oe,{isLoading:h&&!w,isFetching:v,isError:y,isEmpty:r<=0||E.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:T}]},empty:{icon:ee,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics`)},children:(0,R.jsxs)(`div`,{className:P.content,children:[u&&(0,R.jsxs)(C,{align:`center`,justify:`flex-end`,gap:`sm`,className:P.pager,children:[(0,R.jsx)(S,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:p,disabled:!d,"aria-label":t(`Older activity`,`jetpack-premium-analytics`),children:(0,R.jsx)(S.Icon,{icon:_,size:16})}),(0,R.jsx)(S,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:m,disabled:!f,"aria-label":t(`Newer activity`,`jetpack-premium-analytics`),children:(0,R.jsx)(S.Icon,{icon:g,size:16})})]}),(0,R.jsx)(b,{data:E,rowLabels:D,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:42,className:P.heatmap})]})})})})}function L({attributes:e={}}){return(0,R.jsx)(ie,{attributes:e,children:(0,R.jsx)(ge,{})})}var R,z,B,V,_e=e((()=>{T(),de(),o(),a(),n(),y(),w(),pe(),me(),R=r(),z=48,B=4,V=16})),H,ve=e((()=>{n(),y(),H={name:`jpa/post-traffic-activity`,title:t(`Traffic activity`,`jetpack-premium-analytics`),help:{content:t(`Daily views for the post or page being viewed, as a calendar heatmap.`,`jetpack-premium-analytics`)},icon:v,attributes:[],example:{attributes:{}}}}));function U({hasPostScope:e,preset:t},n=!1){return{reportParams:{...E(n,t),...e?{post_id:K}:{}}}}function W(e){return(0,G.jsx)(L,{attributes:U(e)})}function ye({hasPostScope:e,preset:t,...n}){return(0,G.jsx)(se,{...n,widgetType:{...H,presentation:`framed`},renderModule:q,renderComponent:L,attributes:U({hasPostScope:e,preset:t},!0)})}var G,K,q,J,Y,X,Z,Q,$;e((()=>{D(),ae(),fe(),ue(),_e(),ve(),G=r(),re(),K=779,q=`storybook/post-traffic-activity`,J={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:L,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},Y={render:W,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[O]},X={render:W,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[O]},Z={render:W,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[O]},Q={render:e=>(0,G.jsx)(ye,{...e}),args:{...ce,widgetWidth:4,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...le,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`Paged`,`NoPostScope`,`WidgetDashboardWithWidget`]}))();export{Y as Default,Z as NoPostScope,X as Paged,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,J as default};