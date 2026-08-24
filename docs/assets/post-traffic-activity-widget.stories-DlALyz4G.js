import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{t as o,y as s}from"./build-module-BShXUI3N.js";import{n as c,xl as l}from"./build-module-CDRs4YxF.js";import{C as u,Et as d,T as f,bn as ee,et as te,hn as p,t as m,ut as ne}from"./date-fns-Bm9dQUxr.js";import{J as h,at as g,j as _,k as v,q as y,tt as b}from"./report-metric-CUJ3Gh6_.js";import{n as re,o as ie}from"./heatmap-chart-DyoM_q_m.js";import{M as ae,t as x}from"./src-BKLK-O8P.js";import{ft as oe,hn as se,qt as S,t as C}from"./src-56SjHKng.js";import{o as ce}from"./calendar-heatmap-window-CAjE-3fH.js";import{m as le}from"./hooks-CPSMJd7m.js";import{r as ue,v as w}from"./chart-tooltip-WHUgZUgy.js";import{r as de}from"./metric-sparkline-skeleton-CK-bXD5h.js";import{t as fe}from"./widget-state-B-6QxAet.js";import{C as pe,D as me,E as he,S as ge,T as _e,b as ve,t as T,w as ye,x as E}from"./src-KyGwFKrH.js";var D,O,k,A,j,M,N,be=e((()=>{D=`_root_15yzs_3`,O=`_body_15yzs_12`,k=`_content_15yzs_3`,A=`_chartArea_15yzs_30`,j=`_chartHost_15yzs_44`,M=`_heatmap_15yzs_51`,N={root:D,body:O,content:k,chartArea:A,chartHost:j,heatmap:M}}));function xe(e,t,n){let{data:r,isLoading:a,isFetching:o,isError:s,refetch:c}=oe({postId:e,fields:[`data`]}),[l,m]=(0,i.useState)(0);(0,i.useEffect)(()=>{m(0)},[t.from,t.to,n]);let h=w(t.from),g=w(t.to),{days:_,isPaged:v,canShowOlder:y}=(0,i.useMemo)(()=>{if(!h||!g||h>g)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=p(u(h),{weekStartsOn:1}),a=ne(u(g),{weekStartsOn:1}),o=i<f(a,n-1),s=f(a,l*n),c=f(s,n-1);if(o&&c<i){c=i;let e=ee(i,n-1);s=e<a?e:a}let m=u(g);return{days:d({start:c,end:m<s?m:s}).map(e=>{let n=te(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=h&&n<=g?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,h,g,l,n]),b=(0,i.useCallback)(()=>{m(e=>y?e+1:e)},[y]),re=(0,i.useCallback)(()=>{m(e=>Math.max(0,e-1))},[]);return{days:_,isPaged:v,canShowOlder:y,canShowNewer:l>0,showOlder:b,showNewer:re,isLoading:a,isFetching:o,isError:s,hasData:!!r,refetch:c}}var Se=e((()=>{C(),a(),m(),T()}));function Ce(e){return e?ce({availWidth:e,cellWidth:I,cellGap:4,minColumns:L}):R}function we(e){return e?Math.max(B,Math.min(z,Math.floor((e-V)/7))):z}function Te(){let{reportParams:e}=g(),n=se(e.post_id),[r,a]=(0,i.useState)(),o=s(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);a(t=>t===e?t:e)}}),{days:c,isPaged:l,canShowOlder:u,canShowNewer:d,showOlder:f,showNewer:ee,isLoading:te,isFetching:p,isError:m,refetch:ne}=xe(n,e,Ce(r)*7),[h,y]=le(),b=we(y.height),{data:x,rowLabels:oe}=(0,i.useMemo)(()=>ie(c),[c]),S=w(e.from),C=w(e.to),ce=(0,i.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=c[i*7+r];return(0,F.jsx)(v,{value:e,cellLabel:n,emptyLabel:a&&S&&C&&a.dateString>=S&&a.dateString<=C?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:ue})},[c,S,C]);return(0,F.jsx)(`div`,{ref:o,className:N.root,children:(0,F.jsx)(`div`,{className:N.body,children:(0,F.jsx)(fe,{isLoading:te,isFetching:p,isError:m,isEmpty:n<=0||x.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ne}]},empty:{icon:ae,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,F.jsx)(de,{}),children:(0,F.jsx)(`div`,{className:N.content,children:(0,F.jsx)(`div`,{ref:h,className:N.chartArea,children:(0,F.jsx)(_,{pager:l?{canShowOlder:u,canShowNewer:d,showOlder:f,showNewer:ee}:void 0,className:N.chartHost,children:(0,F.jsx)(re,{data:x,rowLabels:oe,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:b,renderTooltip:ce,className:N.heatmap})})})})})})})}function P({attributes:e={}}){return(0,F.jsx)(b,{attributes:e,children:(0,F.jsx)(Te,{})})}var F,I,L,R,z,B,V,Ee=e((()=>{C(),x(),T(),o(),a(),n(),be(),Se(),F=r(),I=64,L=4,R=16,z=42,B=8,V=44})),H,De=e((()=>{c(),H={icon:l,attributes:[],example:{attributes:{}}}})),U,W,G,Oe,ke,Ae,K,je=e((()=>{U=`jpa/post-traffic-activity`,W=`Traffic activity`,G=`Daily views for the post or page being viewed, as a calendar heatmap.`,Oe={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},ke=`stats`,Ae=`framed`,K={name:U,title:W,description:G,help:Oe,category:ke,presentation:Ae}}));function Me({hasPostScope:e,preset:t},n=!1){return{reportParams:{...S(n,t),...e?{post_id:Pe}:{}}}}function q(e){return(0,J.jsx)(P,{attributes:Me(e)})}function Ne({hasPostScope:e,preset:t,...n}){return(0,J.jsx)(_e,{...n,widgetType:ge(K,H),renderModule:Fe,renderComponent:P,attributes:Me({hasPostScope:e,preset:t},!0)})}var J,Pe,Fe,Ie,Y,X,Z,Q,$;e((()=>{C(),y(),he(),pe(),ve(),Ee(),De(),je(),J=r(),h(),Pe=779,Fe=`storybook/post-traffic-activity`,Ie={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:P,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},Y={render:q,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[E]},X={render:q,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[E]},Z={render:q,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[E]},Q={render:e=>(0,J.jsx)(Ne,{...e}),args:{...ye,widgetWidth:4,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...me,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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