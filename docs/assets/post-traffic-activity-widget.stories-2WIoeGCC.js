import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{t as o,y as s}from"./build-module-BShXUI3N.js";import{n as c,xl as l}from"./build-module-CDRs4YxF.js";import{C as u,Ot as d,T as f,ft as p,nt as ee,t as m,wn as h,yn as g}from"./date-fns-C16LGmyW.js";import{b as _,g as v}from"./hooks-BGTJp5sH.js";import{n as te,o as y}from"./heatmap-chart-D0i8sGWs.js";import{M as b,t as x}from"./src-B64ifip5.js";import{ft as S,qt as C,t as w,vn as ne}from"./src-BPUHTRMa.js";import{s as T}from"./calendar-heatmap-window-ji_-aGhA.js";import{n as re}from"./use-element-size-CXefbCaN.js";import{D as E,c as ie}from"./chart-tooltip-DnYNQjDW.js";import{r as ae}from"./metric-sparkline-skeleton-BJqM4Fh1.js";import{D as oe,G as D,W as O,k as se}from"./report-metric-DHBJ3BIx.js";import{t as ce}from"./widget-state-Dk9JPLyn.js";import{C as le,D as ue,E as de,S as fe,T as pe,b as me,t as k,w as he,x as A}from"./src-CyvOXfF3.js";var j,M,N,P,F,I,L,ge=e((()=>{j=`_root_15yzs_3`,M=`_body_15yzs_12`,N=`_content_15yzs_3`,P=`_chartArea_15yzs_30`,F=`_chartHost_15yzs_44`,I=`_heatmap_15yzs_51`,L={root:j,body:M,content:N,chartArea:P,chartHost:F,heatmap:I}}));function _e(e,t,n){let{data:r,isLoading:a,isFetching:o,isError:s,refetch:c}=S({postId:e,fields:[`data`]}),[l,m]=(0,i.useState)(0);(0,i.useEffect)(()=>{m(0)},[t.from,t.to,n]);let _=E(t.from),v=E(t.to),{days:te,isPaged:y,canShowOlder:b}=(0,i.useMemo)(()=>{if(!_||!v||_>v)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=g(u(_),{weekStartsOn:1}),a=p(u(v),{weekStartsOn:1}),o=i<f(a,n-1),s=f(a,l*n),c=f(s,n-1);if(o&&c<i){c=i;let e=h(i,n-1);s=e<a?e:a}let m=u(v);return{days:d({start:c,end:m<s?m:s}).map(e=>{let n=ee(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=_&&n<=v?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,_,v,l,n]),x=(0,i.useCallback)(()=>{m(e=>b?e+1:e)},[b]),C=(0,i.useCallback)(()=>{m(e=>Math.max(0,e-1))},[]);return{days:te,isPaged:y,canShowOlder:b,canShowNewer:l>0,showOlder:x,showNewer:C,isLoading:a,isFetching:o,isError:s,hasData:!!r,refetch:c}}var ve=e((()=>{w(),a(),m(),k()}));function ye(e){return e?T({availWidth:e,cellWidth:Se,cellGap:4,minColumns:B}):V}function be(e){return e?Math.max(U,Math.min(H,Math.floor((e-W)/7))):H}function xe(){let{reportParams:e}=_(),n=ne(e.post_id),[r,a]=(0,i.useState)(),o=s(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);a(t=>t===e?t:e)}}),{days:c,isPaged:l,canShowOlder:u,canShowNewer:d,showOlder:f,showNewer:p,isLoading:ee,isFetching:m,isError:h,refetch:g}=_e(n,e,ye(r)*7),[v,x]=re(),S=be(x.height),{data:C,rowLabels:w}=(0,i.useMemo)(()=>y(c),[c]),T=E(e.from),D=E(e.to),O=(0,i.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=c[i*7+r];return(0,z.jsx)(oe,{value:e,cellLabel:n,emptyLabel:a&&T&&D&&a.dateString>=T&&a.dateString<=D?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:ie})},[c,T,D]);return(0,z.jsx)(`div`,{ref:o,className:L.root,children:(0,z.jsx)(`div`,{className:L.body,children:(0,z.jsx)(ce,{isLoading:ee,isFetching:m,isError:h,isEmpty:n<=0||C.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:g}]},empty:{icon:b,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,z.jsx)(ae,{}),children:(0,z.jsx)(`div`,{className:L.content,children:(0,z.jsx)(`div`,{ref:v,className:L.chartArea,children:(0,z.jsx)(se,{pager:l?{canShowOlder:u,canShowNewer:d,showOlder:f,showNewer:p}:void 0,className:L.chartHost,children:(0,z.jsx)(te,{data:C,rowLabels:w,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:S,renderTooltip:O,className:L.heatmap})})})})})})})}function R({attributes:e={}}){return(0,z.jsx)(v,{attributes:e,children:(0,z.jsx)(xe,{})})}var z,Se,B,V,H,U,W,Ce=e((()=>{w(),x(),k(),o(),a(),n(),ge(),ve(),z=r(),Se=64,B=4,V=16,H=42,U=8,W=44})),G,we=e((()=>{c(),G={icon:l,attributes:[],example:{attributes:{}}}})),K,Te,Ee,De,Oe,ke,q,Ae=e((()=>{K=`jpa/post-traffic-activity`,Te=`Traffic activity`,Ee=`Daily views for the post or page being viewed, as a calendar heatmap.`,De={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},Oe=`stats`,ke=`framed`,q={name:K,title:Te,description:Ee,help:De,category:Oe,presentation:ke}}));function je({hasPostScope:e,preset:t},n=!1){return{reportParams:{...C(n,t),...e?{post_id:Ne}:{}}}}function J(e){return(0,Y.jsx)(R,{attributes:je(e)})}function Me({hasPostScope:e,preset:t,...n}){return(0,Y.jsx)(pe,{...n,widgetType:fe(q,G),renderModule:Pe,renderComponent:R,attributes:je({hasPostScope:e,preset:t},!0)})}var Y,Ne,Pe,Fe,X,Z,Q,$,Ie;e((()=>{w(),O(),de(),le(),me(),Ce(),we(),Ae(),Y=r(),D(),Ne=779,Pe=`storybook/post-traffic-activity`,Fe={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:R,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},X={render:J,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[A]},Z={render:J,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[A]},Q={render:J,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[A]},$={render:e=>(0,Y.jsx)(Me,{...e}),args:{...he,widgetWidth:4,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...ue,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...$.parameters?.docs?.description}}},Ie=[`Default`,`Paged`,`NoPostScope`,`WidgetDashboardWithWidget`]}))();export{X as Default,Q as NoPostScope,Z as Paged,$ as WidgetDashboardWithWidget,Ie as __namedExportsOrder,Fe as default};