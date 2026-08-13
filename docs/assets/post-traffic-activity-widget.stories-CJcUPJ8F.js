import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{t as o,y as s}from"./build-module-BShXUI3N.js";import{Zc as c,n as l,tl as u,xl as d}from"./build-module-CDRs4YxF.js";import{C as f,Et as p,T as m,bn as ee,et as h,hn as g,t as _,ut as v}from"./date-fns-Bm9dQUxr.js";import{lr as te,t as y,xr as b}from"./src-WeEeIP1Z.js";import{$ as x,G as S,K as C,j as ne,rt as re}from"./report-metric-BzKghyTx.js";import{n as ie,o as ae}from"./heatmap-chart-B9emwLZK.js";import{A as oe,t as w}from"./src-Cvyt29m2.js";import{o as se}from"./calendar-heatmap-window-DcnfuZDx.js";import{Ft as T,Tr as ce,Ur as le,Wn as ue,b as E,r as de}from"./chart-tooltip-BhKdsXLa.js";import{t as fe}from"./widget-state-B3UzwDPm.js";import{C as pe,D as me,E as he,S as ge,T as _e,b as ve,t as D,w as ye,x as O}from"./src-CZm1GJoa.js";var k,A,j,M,N,P,be=e((()=>{k=`_root_1uv97_4`,A=`_pager_1uv97_11`,j=`_body_1uv97_23`,M=`_content_1uv97_28`,N=`_heatmap_1uv97_44`,P={root:k,pager:A,body:j,content:M,heatmap:N}}));function xe(e,t,n){let{data:r,isLoading:a,isFetching:o,isError:s,refetch:c}=ue({postId:e,fields:[`data`]}),[l,u]=(0,i.useState)(0);(0,i.useEffect)(()=>{u(0)},[t.from,t.to,n]);let d=E(t.from),_=E(t.to),{days:te,isPaged:y,canShowOlder:b}=(0,i.useMemo)(()=>{if(!d||!_||d>_)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=g(f(d),{weekStartsOn:1}),a=v(f(_),{weekStartsOn:1}),o=i<m(a,n-1),s=m(a,l*n),c=m(s,n-1);if(o&&c<i){c=i;let e=ee(i,n-1);s=e<a?e:a}let u=f(_);return{days:p({start:c,end:u<s?u:s}).map(e=>{let n=h(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=d&&n<=_?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,d,_,l,n]),x=(0,i.useCallback)(()=>{u(e=>b?e+1:e)},[b]),S=(0,i.useCallback)(()=>{u(e=>Math.max(0,e-1))},[]);return{days:te,isPaged:y,canShowOlder:b,canShowNewer:l>0,showOlder:x,showNewer:S,isLoading:a,isFetching:o,isError:s,hasData:!!r,refetch:c}}var Se=e((()=>{T(),a(),_(),D()}));function Ce(e){return e?se({availWidth:e,cellWidth:L,cellGap:R,minColumns:z}):B}function we(){let{reportParams:e}=re(),n=le(e.post_id),[r,a]=(0,i.useState)(),o=s(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);a(t=>t===e?t:e)}}),{days:l,isPaged:d,canShowOlder:f,canShowNewer:p,showOlder:m,showNewer:ee,isLoading:h,isFetching:g,isError:_,hasData:v,refetch:y}=xe(n,e,Ce(r)*7),{data:x,rowLabels:S}=(0,i.useMemo)(()=>ae(l),[l]),C=E(e.from),w=E(e.to),se=(0,i.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=l[i*7+r];return(0,I.jsx)(ne,{value:e,cellLabel:n,emptyLabel:a&&C&&w&&a.dateString>=C&&a.dateString<=w?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:de})},[l,C,w]);return(0,I.jsx)(`div`,{ref:o,className:P.root,children:(0,I.jsx)(`div`,{className:P.body,children:(0,I.jsx)(fe,{isLoading:h&&!v,isFetching:g,isError:_,isEmpty:n<=0||x.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:y}]},empty:{icon:oe,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},children:(0,I.jsxs)(`div`,{className:P.content,children:[d&&(0,I.jsxs)(te,{align:`center`,justify:`flex-end`,gap:`sm`,className:P.pager,children:[(0,I.jsx)(b,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:m,disabled:!f,"aria-label":t(`Older activity`,`jetpack-premium-analytics-pkg`),children:(0,I.jsx)(b.Icon,{icon:u,size:16})}),(0,I.jsx)(b,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:ee,disabled:!p,"aria-label":t(`Newer activity`,`jetpack-premium-analytics-pkg`),children:(0,I.jsx)(b.Icon,{icon:c,size:16})})]}),(0,I.jsx)(ie,{data:x,rowLabels:S,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:42,renderTooltip:se,className:P.heatmap})]})})})})}function F({attributes:e={}}){return(0,I.jsx)(x,{attributes:e,children:(0,I.jsx)(we,{})})}var I,L,R,z,B,Te=e((()=>{T(),w(),D(),o(),a(),n(),l(),y(),be(),Se(),I=r(),L=64,R=4,z=4,B=16})),V,Ee=e((()=>{l(),V={icon:d,attributes:[],example:{attributes:{}}}})),H,U,W,G,De,Oe,ke,Ae=e((()=>{H=`jpa/post-traffic-activity`,U=`Traffic activity`,W=`Daily views for the post or page being viewed, as a calendar heatmap.`,G={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},De=`stats`,Oe=`framed`,ke={name:H,title:U,description:W,help:G,category:De,presentation:Oe}}));function je({hasPostScope:e,preset:t},n=!1){return{reportParams:{...ce(n,t),...e?{post_id:J}:{}}}}function K(e){return(0,q.jsx)(F,{attributes:je(e)})}function Me({hasPostScope:e,preset:t,...n}){return(0,q.jsx)(_e,{...n,widgetType:ge(ke,V),renderModule:Ne,renderComponent:F,attributes:je({hasPostScope:e,preset:t},!0)})}var q,J,Ne,Pe,Y,X,Z,Q,$;e((()=>{T(),S(),he(),pe(),ve(),Te(),Ee(),Ae(),q=r(),C(),J=779,Ne=`storybook/post-traffic-activity`,Pe={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:F,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},Y={render:K,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[O]},X={render:K,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[O]},Z={render:K,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[O]},Q={render:e=>(0,q.jsx)(Me,{...e}),args:{...ye,widgetWidth:4,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...me,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`Paged`,`NoPostScope`,`WidgetDashboardWithWidget`]}))();export{Y as Default,Z as NoPostScope,X as Paged,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Pe as default};