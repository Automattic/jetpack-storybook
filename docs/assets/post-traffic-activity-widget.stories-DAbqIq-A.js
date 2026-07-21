import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{t as o,x as s}from"./build-module-Nbr4nybP.js";import{C as c,T as l,X as u,bt as d,ln as f,mn as p,ot as m,t as h}from"./date-fns-B2pKki1V.js";import{Cn as g,Dn as _,Un as v,n as y}from"./build-module-DmVuor49.js";import{n as b,o as x}from"./heatmap-chart-27d7PHtM.js";import{B as S,R as C,t as w}from"./build-module-BCI4ly35.js";import{A as ee,t as T}from"./src-B3le4dug.js";import{dt as E,er as te,yn as ne,yr as re}from"./chart-tooltip-n6Tv2X_4.js";import{H as D,M as ie,R as ae,j as oe}from"./report-metric-Bj6E0k7I.js";import{t as se}from"./widget-state-BYd-Spjo.js";import{C as ce,S as le,T as ue,b as de,t as fe,w as pe,x as O}from"./src-DknkQpM4.js";var k,A,j,M,N,P,me=e((()=>{k=`_root_1uv97_4`,A=`_pager_1uv97_11`,j=`_body_1uv97_23`,M=`_content_1uv97_28`,N=`_heatmap_1uv97_44`,P={root:k,pager:A,body:j,content:M,heatmap:N}}));function F(e){let t=e?.slice(0,10);return t&&/^\d{4}-\d{2}-\d{2}$/.test(t)&&!Number.isNaN(c(t).getTime())?t:void 0}function he(e,t,n){let{data:r,isLoading:a,isFetching:o,isError:s,refetch:h}=ne({postId:e,fields:[`data`]}),[g,_]=(0,i.useState)(0);(0,i.useEffect)(()=>{_(0)},[t.from,t.to,n]);let v=F(t.from),y=F(t.to),{days:b,isPaged:x,canShowOlder:S}=(0,i.useMemo)(()=>{if(!v||!y||v>y)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=f(c(v),{weekStartsOn:1}),a=m(c(y),{weekStartsOn:1}),o=i<l(a,n-1),s=l(a,g*n),h=l(s,n-1);if(o&&h<i){h=i;let e=p(i,n-1);s=e<a?e:a}return{days:d({start:h,end:s}).map(e=>{let n=u(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=v&&n<=y?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<h}},[r,v,y,g,n]),C=(0,i.useCallback)(()=>{_(e=>S?e+1:e)},[S]),w=(0,i.useCallback)(()=>{_(e=>Math.max(0,e-1))},[]);return{days:b,isPaged:x,canShowOlder:S,canShowNewer:g>0,showOlder:C,showNewer:w,isLoading:a,isFetching:o,isError:s,hasData:!!r,refetch:h}}var ge=e((()=>{E(),a(),h()}));function _e(e){return e?Math.max(z,Math.floor((e-R)/68)):B}function ve(){let{reportParams:e}=D(),n=re(e.post_id),[r,a]=(0,i.useState)(),o=s(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);a(t=>t===e?t:e)}}),{days:c,isPaged:l,canShowOlder:u,canShowNewer:d,showOlder:f,showNewer:p,isLoading:m,isFetching:h,isError:v,hasData:y,refetch:w}=he(n,e,_e(r)*7),{data:T,rowLabels:E}=(0,i.useMemo)(()=>x(c),[c]);return(0,L.jsx)(`div`,{ref:o,className:P.root,children:(0,L.jsx)(`div`,{className:P.body,children:(0,L.jsx)(se,{isLoading:m&&!y,isFetching:h,isError:v,isEmpty:n<=0||T.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:w}]},empty:{icon:ee,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics`)},children:(0,L.jsxs)(`div`,{className:P.content,children:[l&&(0,L.jsxs)(C,{align:`center`,justify:`flex-end`,gap:`sm`,className:P.pager,children:[(0,L.jsx)(S,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:f,disabled:!u,"aria-label":t(`Older activity`,`jetpack-premium-analytics`),children:(0,L.jsx)(S.Icon,{icon:_,size:16})}),(0,L.jsx)(S,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:p,disabled:!d,"aria-label":t(`Newer activity`,`jetpack-premium-analytics`),children:(0,L.jsx)(S.Icon,{icon:g,size:16})})]}),(0,L.jsx)(b,{data:T,rowLabels:E,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:42,className:P.heatmap})]})})})})}function I({attributes:e={}}){return(0,L.jsx)(ae,{attributes:e,children:(0,L.jsx)(ve,{})})}var L,R,z,B,ye=e((()=>{E(),T(),fe(),o(),a(),n(),y(),w(),me(),ge(),L=r(),R=48,z=4,B=16})),V,be=e((()=>{n(),y(),V={name:`jpa/post-traffic-activity`,title:t(`Traffic activity`,`jetpack-premium-analytics`),help:{content:t(`Daily views for the post or page being viewed, as a calendar heatmap.`,`jetpack-premium-analytics`)},icon:v,attributes:[],example:{attributes:{}}}}));function H({hasPostScope:e,preset:t},n=!1){return{reportParams:{...te(n,t),...e?{post_id:K}:{}}}}function U(e){return(0,G.jsx)(I,{attributes:H(e)})}function W({hasPostScope:e,preset:t,...n}){return(0,G.jsx)(ce,{...n,widgetType:{...V,presentation:`framed`},renderModule:q,renderComponent:I,attributes:H({hasPostScope:e,preset:t},!0)})}var G,K,q,J,Y,X,Z,Q,$;e((()=>{E(),oe(),pe(),de(),ye(),be(),G=r(),ie(),K=779,q=`storybook/post-traffic-activity`,J={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:I,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},Y={render:U,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[O]},X={render:U,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[O]},Z={render:U,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[O]},Q={render:e=>(0,G.jsx)(W,{...e}),args:{...le,widgetWidth:4,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...ue,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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