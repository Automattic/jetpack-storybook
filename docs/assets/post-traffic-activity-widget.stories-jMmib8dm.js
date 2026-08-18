import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{t as o,y as s}from"./build-module-BShXUI3N.js";import{Zc as c,n as l,tl as u,xl as d}from"./build-module-CDRs4YxF.js";import{C as f,Et as p,T as m,bn as h,et as g,hn as _,t as v,ut as y}from"./date-fns-Bm9dQUxr.js";import{sn as ee,t as b,yn as x}from"./src-D6mrnv3D.js";import{$ as S,G as C,K as w,j as te,rt as ne}from"./report-metric-C9BdlXmy.js";import{n as re,o as ie}from"./heatmap-chart-eAV7zJqL.js";import{A as ae,t as T}from"./src-Cvyt29m2.js";import{o as oe}from"./calendar-heatmap-window-BM8EG75J.js";import{Cr as se,Hn as ce,Nt as E,Ur as le,r as ue,v as D}from"./chart-tooltip-CXOBUE8q.js";import{t as de}from"./widget-state-gnnyozZ8.js";import{C as fe,D as pe,E as me,S as he,T as ge,b as _e,t as O,w as ve,x as k}from"./src-CjbavHyO.js";var A,j,M,N,P,F,ye=e((()=>{A=`_root_1uv97_4`,j=`_pager_1uv97_11`,M=`_body_1uv97_23`,N=`_content_1uv97_28`,P=`_heatmap_1uv97_44`,F={root:A,pager:j,body:M,content:N,heatmap:P}}));function be(e,t,n){let{data:r,isLoading:a,isFetching:o,isError:s,refetch:c}=ce({postId:e,fields:[`data`]}),[l,u]=(0,i.useState)(0);(0,i.useEffect)(()=>{u(0)},[t.from,t.to,n]);let d=D(t.from),v=D(t.to),{days:ee,isPaged:b,canShowOlder:x}=(0,i.useMemo)(()=>{if(!d||!v||d>v)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=_(f(d),{weekStartsOn:1}),a=y(f(v),{weekStartsOn:1}),o=i<m(a,n-1),s=m(a,l*n),c=m(s,n-1);if(o&&c<i){c=i;let e=h(i,n-1);s=e<a?e:a}let u=f(v);return{days:p({start:c,end:u<s?u:s}).map(e=>{let n=g(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=d&&n<=v?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,d,v,l,n]),S=(0,i.useCallback)(()=>{u(e=>x?e+1:e)},[x]),C=(0,i.useCallback)(()=>{u(e=>Math.max(0,e-1))},[]);return{days:ee,isPaged:b,canShowOlder:x,canShowNewer:l>0,showOlder:S,showNewer:C,isLoading:a,isFetching:o,isError:s,hasData:!!r,refetch:c}}var xe=e((()=>{E(),a(),v(),O()}));function Se(e){return e?oe({availWidth:e,cellWidth:R,cellGap:z,minColumns:B}):V}function Ce(){let{reportParams:e}=ne(),n=le(e.post_id),[r,a]=(0,i.useState)(),o=s(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);a(t=>t===e?t:e)}}),{days:l,isPaged:d,canShowOlder:f,canShowNewer:p,showOlder:m,showNewer:h,isLoading:g,isFetching:_,isError:v,hasData:y,refetch:b}=be(n,e,Se(r)*7),{data:S,rowLabels:C}=(0,i.useMemo)(()=>ie(l),[l]),w=D(e.from),T=D(e.to),oe=(0,i.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=l[i*7+r];return(0,L.jsx)(te,{value:e,cellLabel:n,emptyLabel:a&&w&&T&&a.dateString>=w&&a.dateString<=T?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:ue})},[l,w,T]);return(0,L.jsx)(`div`,{ref:o,className:F.root,children:(0,L.jsx)(`div`,{className:F.body,children:(0,L.jsx)(de,{isLoading:g&&!y,isFetching:_,isError:v,isEmpty:n<=0||S.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:b}]},empty:{icon:ae,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},children:(0,L.jsxs)(`div`,{className:F.content,children:[d&&(0,L.jsxs)(ee,{align:`center`,justify:`flex-end`,gap:`sm`,className:F.pager,children:[(0,L.jsx)(x,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:m,disabled:!f,"aria-label":t(`Older activity`,`jetpack-premium-analytics-pkg`),children:(0,L.jsx)(x.Icon,{icon:u,size:16})}),(0,L.jsx)(x,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:h,disabled:!p,"aria-label":t(`Newer activity`,`jetpack-premium-analytics-pkg`),children:(0,L.jsx)(x.Icon,{icon:c,size:16})})]}),(0,L.jsx)(re,{data:S,rowLabels:C,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:42,renderTooltip:oe,className:F.heatmap})]})})})})}function I({attributes:e={}}){return(0,L.jsx)(S,{attributes:e,children:(0,L.jsx)(Ce,{})})}var L,R,z,B,V,we=e((()=>{E(),T(),O(),o(),a(),n(),l(),b(),ye(),xe(),L=r(),R=64,z=4,B=4,V=16})),H,Te=e((()=>{l(),H={icon:d,attributes:[],example:{attributes:{}}}})),U,W,G,K,Ee,De,Oe,ke=e((()=>{U=`jpa/post-traffic-activity`,W=`Traffic activity`,G=`Daily views for the post or page being viewed, as a calendar heatmap.`,K={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},Ee=`stats`,De=`framed`,Oe={name:U,title:W,description:G,help:K,category:Ee,presentation:De}}));function Ae({hasPostScope:e,preset:t},n=!1){return{reportParams:{...se(n,t),...e?{post_id:Y}:{}}}}function q(e){return(0,J.jsx)(I,{attributes:Ae(e)})}function je({hasPostScope:e,preset:t,...n}){return(0,J.jsx)(ge,{...n,widgetType:he(Oe,H),renderModule:Me,renderComponent:I,attributes:Ae({hasPostScope:e,preset:t},!0)})}var J,Y,Me,Ne,X,Z,Q,$,Pe;e((()=>{E(),C(),me(),fe(),_e(),we(),Te(),ke(),J=r(),w(),Y=779,Me=`storybook/post-traffic-activity`,Ne={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:I,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},X={render:q,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[k]},Z={render:q,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[k]},Q={render:q,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[k]},$={render:e=>(0,J.jsx)(je,{...e}),args:{...ve,widgetWidth:4,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...pe,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...$.parameters?.docs?.description}}},Pe=[`Default`,`Paged`,`NoPostScope`,`WidgetDashboardWithWidget`]}))();export{X as Default,Q as NoPostScope,Z as Paged,$ as WidgetDashboardWithWidget,Pe as __namedExportsOrder,Ne as default};