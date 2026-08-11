import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{t as o,y as s}from"./build-module-BShXUI3N.js";import{Zc as c,n as l,tl as u,xl as d}from"./build-module-CDRs4YxF.js";import{C as f,Et as ee,T as p,bn as m,et as h,hn as g,t as _,ut as v}from"./date-fns-Bm9dQUxr.js";import{lr as y,t as b,xr as x}from"./src-I5b6mOdz.js";import{$ as S,K as C,q as te,rt as ne}from"./report-metric-D2eUyyVx.js";import{n as re,o as ie}from"./heatmap-chart-B9emwLZK.js";import{A as ae,t as oe}from"./src-tEZrN6jJ.js";import{Nr as se,Pn as ce,Tt as w,hr as le,u as T}from"./chart-tooltip-Y3SA-nRI.js";import{C as ue,D as de,E as fe,S as pe,T as me,b as he,t as E,w as ge,x as D}from"./src-BjKJ7i42.js";import{t as _e}from"./widget-state-Ba0_bM_U.js";var O,k,A,j,M,N,ve=e((()=>{O=`_root_1uv97_4`,k=`_pager_1uv97_11`,A=`_body_1uv97_23`,j=`_content_1uv97_28`,M=`_heatmap_1uv97_44`,N={root:O,pager:k,body:A,content:j,heatmap:M}}));function ye(e,t,n){let{data:r,isLoading:a,isFetching:o,isError:s,refetch:c}=ce({postId:e,fields:[`data`]}),[l,u]=(0,i.useState)(0);(0,i.useEffect)(()=>{u(0)},[t.from,t.to,n]);let d=T(t.from),_=T(t.to),{days:y,isPaged:b,canShowOlder:x}=(0,i.useMemo)(()=>{if(!d||!_||d>_)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=g(f(d),{weekStartsOn:1}),a=v(f(_),{weekStartsOn:1}),o=i<p(a,n-1),s=p(a,l*n),c=p(s,n-1);if(o&&c<i){c=i;let e=m(i,n-1);s=e<a?e:a}return{days:ee({start:c,end:s}).map(e=>{let n=h(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=d&&n<=_?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,d,_,l,n]),S=(0,i.useCallback)(()=>{u(e=>x?e+1:e)},[x]),C=(0,i.useCallback)(()=>{u(e=>Math.max(0,e-1))},[]);return{days:y,isPaged:b,canShowOlder:x,canShowNewer:l>0,showOlder:S,showNewer:C,isLoading:a,isFetching:o,isError:s,hasData:!!r,refetch:c}}var be=e((()=>{w(),a(),_(),E()}));function xe(e){return e?Math.max(L,Math.floor((e-I)/68)):R}function Se(){let{reportParams:e}=ne(),n=se(e.post_id),[r,a]=(0,i.useState)(),o=s(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);a(t=>t===e?t:e)}}),{days:l,isPaged:d,canShowOlder:f,canShowNewer:ee,showOlder:p,showNewer:m,isLoading:h,isFetching:g,isError:_,hasData:v,refetch:b}=ye(n,e,xe(r)*7),{data:S,rowLabels:C}=(0,i.useMemo)(()=>ie(l),[l]);return(0,F.jsx)(`div`,{ref:o,className:N.root,children:(0,F.jsx)(`div`,{className:N.body,children:(0,F.jsx)(_e,{isLoading:h&&!v,isFetching:g,isError:_,isEmpty:n<=0||S.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:b}]},empty:{icon:ae,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},children:(0,F.jsxs)(`div`,{className:N.content,children:[d&&(0,F.jsxs)(y,{align:`center`,justify:`flex-end`,gap:`sm`,className:N.pager,children:[(0,F.jsx)(x,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:p,disabled:!f,"aria-label":t(`Older activity`,`jetpack-premium-analytics-pkg`),children:(0,F.jsx)(x.Icon,{icon:u,size:16})}),(0,F.jsx)(x,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:m,disabled:!ee,"aria-label":t(`Newer activity`,`jetpack-premium-analytics-pkg`),children:(0,F.jsx)(x.Icon,{icon:c,size:16})})]}),(0,F.jsx)(re,{data:S,rowLabels:C,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:42,className:N.heatmap})]})})})})}function P({attributes:e={}}){return(0,F.jsx)(S,{attributes:e,children:(0,F.jsx)(Se,{})})}var F,I,L,R,Ce=e((()=>{w(),oe(),E(),o(),a(),n(),l(),b(),ve(),be(),F=r(),I=48,L=4,R=16})),z,we=e((()=>{l(),z={icon:d,attributes:[],example:{attributes:{}}}})),B,V,H,U,W,G,Te,Ee=e((()=>{B=`jpa/post-traffic-activity`,V=`Traffic activity`,H=`Daily views for the post or page being viewed, as a calendar heatmap.`,U={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},W=`stats`,G=`framed`,Te={name:B,title:V,description:H,help:U,category:W,presentation:G}}));function De({hasPostScope:e,preset:t},n=!1){return{reportParams:{...le(n,t),...e?{post_id:J}:{}}}}function K(e){return(0,q.jsx)(P,{attributes:De(e)})}function Oe({hasPostScope:e,preset:t,...n}){return(0,q.jsx)(me,{...n,widgetType:pe(Te,z),renderModule:ke,renderComponent:P,attributes:De({hasPostScope:e,preset:t},!0)})}var q,J,ke,Ae,Y,X,Z,Q,$;e((()=>{w(),C(),fe(),ue(),he(),Ce(),we(),Ee(),q=r(),te(),J=779,ke=`storybook/post-traffic-activity`,Ae={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:P,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},Y={render:K,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[D]},X={render:K,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[D]},Z={render:K,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[D]},Q={render:e=>(0,q.jsx)(Oe,{...e}),args:{...ge,widgetWidth:4,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...de,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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