import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{t as o,y as s}from"./build-module-BShXUI3N.js";import{n as c,xl as l}from"./build-module-CDRs4YxF.js";import{C as u,Ot as d,T as f,ft as p,nt as ee,t as m,wn as h,yn as g}from"./date-fns-C16LGmyW.js";import{b as _,g as v}from"./hooks-DLRnGdxm.js";import{n as te,o as ne}from"./heatmap-chart-D0i8sGWs.js";import{M as y,t as b}from"./src-B64ifip5.js";import{ft as x,qt as S,t as C,vn as re}from"./src-mgRI7HQW.js";import{s as w}from"./calendar-heatmap-window-ji_-aGhA.js";import{n as ie}from"./use-element-size-CXefbCaN.js";import{D as T,c as ae}from"./chart-tooltip-C2xsGLGS.js";import{r as oe}from"./metric-sparkline-skeleton-CwdNpp-U.js";import{K as E,j as se,k as ce,q as D}from"./report-metric-C6krLLgS.js";import{t as le}from"./widget-state-vh7fsUwi.js";import{C as ue,D as de,E as fe,S as pe,T as me,b as he,t as O,w as ge,x as k}from"./src-CeTeJJrY.js";var A,j,M,N,P,F,I,_e=e((()=>{A=`_root_15yzs_3`,j=`_body_15yzs_12`,M=`_content_15yzs_3`,N=`_chartArea_15yzs_30`,P=`_chartHost_15yzs_44`,F=`_heatmap_15yzs_51`,I={root:A,body:j,content:M,chartArea:N,chartHost:P,heatmap:F}}));function ve(e,t,n){let{data:r,isLoading:a,isFetching:o,isError:s,refetch:c}=x({postId:e,fields:[`data`]}),[l,m]=(0,i.useState)(0);(0,i.useEffect)(()=>{m(0)},[t.from,t.to,n]);let _=T(t.from),v=T(t.to),{days:te,isPaged:ne,canShowOlder:y}=(0,i.useMemo)(()=>{if(!_||!v||_>v)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=g(u(_),{weekStartsOn:1}),a=p(u(v),{weekStartsOn:1}),o=i<f(a,n-1),s=f(a,l*n),c=f(s,n-1);if(o&&c<i){c=i;let e=h(i,n-1);s=e<a?e:a}let m=u(v);return{days:d({start:c,end:m<s?m:s}).map(e=>{let n=ee(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=_&&n<=v?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,_,v,l,n]),b=(0,i.useCallback)(()=>{m(e=>y?e+1:e)},[y]),S=(0,i.useCallback)(()=>{m(e=>Math.max(0,e-1))},[]);return{days:te,isPaged:ne,canShowOlder:y,canShowNewer:l>0,showOlder:b,showNewer:S,isLoading:a,isFetching:o,isError:s,hasData:!!r,refetch:c}}var ye=e((()=>{C(),a(),m(),O()}));function be(e){return e?w({availWidth:e,cellWidth:Ce,cellGap:4,minColumns:z}):B}function xe(e){return e?Math.max(H,Math.min(V,Math.floor((e-U)/7))):V}function Se(){let{reportParams:e}=_(),n=re(e.post_id),[r,a]=(0,i.useState)(),o=s(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);a(t=>t===e?t:e)}}),{days:c,isPaged:l,canShowOlder:u,canShowNewer:d,showOlder:f,showNewer:p,isLoading:ee,isFetching:m,isError:h,refetch:g}=ve(n,e,be(r)*7),[v,b]=ie(),x=xe(b.height),{data:S,rowLabels:C}=(0,i.useMemo)(()=>ne(c),[c]),w=T(e.from),E=T(e.to),D=(0,i.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=c[i*7+r];return(0,R.jsx)(ce,{value:e,cellLabel:n,emptyLabel:a&&w&&E&&a.dateString>=w&&a.dateString<=E?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:ae})},[c,w,E]);return(0,R.jsx)(`div`,{ref:o,className:I.root,children:(0,R.jsx)(`div`,{className:I.body,children:(0,R.jsx)(le,{isLoading:ee,isFetching:m,isError:h,isEmpty:n<=0||S.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:g}]},empty:{icon:y,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,R.jsx)(oe,{}),children:(0,R.jsx)(`div`,{className:I.content,children:(0,R.jsx)(`div`,{ref:v,className:I.chartArea,children:(0,R.jsx)(se,{pager:l?{canShowOlder:u,canShowNewer:d,showOlder:f,showNewer:p}:void 0,className:I.chartHost,children:(0,R.jsx)(te,{data:S,rowLabels:C,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:x,renderTooltip:D,className:I.heatmap})})})})})})})}function L({attributes:e={}}){return(0,R.jsx)(v,{attributes:e,children:(0,R.jsx)(Se,{})})}var R,Ce,z,B,V,H,U,we=e((()=>{C(),b(),O(),o(),a(),n(),_e(),ye(),R=r(),Ce=64,z=4,B=16,V=42,H=8,U=44})),W,Te=e((()=>{c(),W={icon:l,attributes:[],example:{attributes:{}}}})),G,Ee,De,Oe,ke,Ae,K,je=e((()=>{G=`jpa/post-traffic-activity`,Ee=`Traffic activity`,De=`Daily views for the post or page being viewed, as a calendar heatmap.`,Oe={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},ke=`stats`,Ae=`framed`,K={name:G,title:Ee,description:De,help:Oe,category:ke,presentation:Ae}}));function Me({hasPostScope:e,preset:t},n=!1){return{reportParams:{...S(n,t),...e?{post_id:Pe}:{}}}}function q(e){return(0,J.jsx)(L,{attributes:Me(e)})}function Ne({hasPostScope:e,preset:t,...n}){return(0,J.jsx)(me,{...n,widgetType:pe(K,W),renderModule:Fe,renderComponent:L,attributes:Me({hasPostScope:e,preset:t},!0)})}var J,Pe,Fe,Ie,Y,X,Z,Q,$;e((()=>{C(),E(),fe(),ue(),he(),we(),Te(),je(),J=r(),D(),Pe=779,Fe=`storybook/post-traffic-activity`,Ie={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:L,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},Y={render:q,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[k]},X={render:q,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[k]},Z={render:q,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[k]},Q={render:e=>(0,J.jsx)(Ne,{...e}),args:{...ge,widgetWidth:4,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...de,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`Paged`,`NoPostScope`,`WidgetDashboardWithWidget`]}))();export{Y as Default,Z as NoPostScope,X as Paged,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Ie as default};