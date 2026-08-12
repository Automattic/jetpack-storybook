import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{_ as o,t as s}from"./build-module-CbwHEf9N.js";import{t as c,y as l}from"./build-module-BShXUI3N.js";import{Zc as u,n as d,tl as f,xl as p}from"./build-module-CDRs4YxF.js";import{C as m,Et as h,T as g,bn as ee,et as _,hn as v,t as y,ut as b}from"./date-fns-Bm9dQUxr.js";import{lr as x,t as S,xr as C}from"./src-BSLPjMFP.js";import{K as w,et as T,it as te,q as E}from"./report-metric-Ca_kXAW3.js";import{n as ne,o as re}from"./heatmap-chart-B9emwLZK.js";import{A as ie,t as D}from"./src-Cvyt29m2.js";import{n as ae,t as oe}from"./src-BZevBsj7.js";import{Nr as se,Pn as ce,Tt as O,hr as le,u as k}from"./chart-tooltip-BQsM5vre.js";import{t as ue}from"./widget-state-CXHVbl5s.js";import{C as de,D as fe,E as pe,S as me,T as he,b as ge,t as A,w as _e,x as j}from"./src-C9i3aD_R.js";var M,N,P,F,I,L,ve=e((()=>{M=`_root_1uv97_4`,N=`_pager_1uv97_11`,P=`_body_1uv97_23`,F=`_content_1uv97_28`,I=`_heatmap_1uv97_44`,L={root:M,pager:N,body:P,content:F,heatmap:I}}));function ye(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:s,refetch:c}=ce({postId:e,fields:[`data`]}),[l,u]=(0,o.useState)(0);(0,o.useEffect)(()=>{u(0)},[t.from,t.to,n]);let d=k(t.from),f=k(t.to),{days:p,isPaged:y,canShowOlder:x}=(0,o.useMemo)(()=>{if(!d||!f||d>f)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=v(m(d),{weekStartsOn:1}),a=b(m(f),{weekStartsOn:1}),o=i<g(a,n-1),s=g(a,l*n),c=g(s,n-1);if(o&&c<i){c=i;let e=ee(i,n-1);s=e<a?e:a}let u=m(f);return{days:h({start:c,end:u<s?u:s}).map(e=>{let n=_(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=d&&n<=f?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,d,f,l,n]),S=(0,o.useCallback)(()=>{u(e=>x?e+1:e)},[x]),C=(0,o.useCallback)(()=>{u(e=>Math.max(0,e-1))},[]);return{days:p,isPaged:y,canShowOlder:x,canShowNewer:l>0,showOlder:S,showNewer:C,isLoading:i,isFetching:a,isError:s,hasData:!!r,refetch:c}}var be=e((()=>{O(),s(),y(),A()}));function xe(e){return e?Math.max(V,Math.floor((e-B)/68)):H}function Se(){let{reportParams:e}=te(),i=se(e.post_id),[a,s]=(0,o.useState)(),c=l(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);s(t=>t===e?t:e)}}),{days:d,isPaged:p,canShowOlder:m,canShowNewer:h,showOlder:g,showNewer:ee,isLoading:_,isFetching:v,isError:y,hasData:b,refetch:S}=ye(i,e,xe(a)*7),{data:w,rowLabels:T}=(0,o.useMemo)(()=>re(d),[d]),E=k(e.from),D=k(e.to),oe=(0,o.useCallback)(({value:e,cellLabel:i,row:a,column:o})=>{let s;if(e!==null)s=t(r(`%s view`,`%s views`,e,`jetpack-premium-analytics-pkg`),ae(e,`number`,{decimals:0}));else{let e=d[o*7+a];s=e&&E&&D&&e.dateString>=E&&e.dateString<=D?n(`No views`,`jetpack-premium-analytics-pkg`):n(`No data`,`jetpack-premium-analytics-pkg`)}return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`strong`,{children:s}),(0,z.jsx)(`div`,{children:i})]})},[d,E,D]);return(0,z.jsx)(`div`,{ref:c,className:L.root,children:(0,z.jsx)(`div`,{className:L.body,children:(0,z.jsx)(ue,{isLoading:_&&!b,isFetching:v,isError:y,isEmpty:i<=0||w.length===0,error:{description:n(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:S}]},empty:{icon:ie,description:n(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},children:(0,z.jsxs)(`div`,{className:L.content,children:[p&&(0,z.jsxs)(x,{align:`center`,justify:`flex-end`,gap:`sm`,className:L.pager,children:[(0,z.jsx)(C,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:g,disabled:!m,"aria-label":n(`Older activity`,`jetpack-premium-analytics-pkg`),children:(0,z.jsx)(C.Icon,{icon:f,size:16})}),(0,z.jsx)(C,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:ee,disabled:!h,"aria-label":n(`Newer activity`,`jetpack-premium-analytics-pkg`),children:(0,z.jsx)(C.Icon,{icon:u,size:16})})]}),(0,z.jsx)(ne,{data:w,rowLabels:T,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:42,renderTooltip:oe,className:L.heatmap})]})})})})}function R({attributes:e={}}){return(0,z.jsx)(T,{attributes:e,children:(0,z.jsx)(Se,{})})}var z,B,V,H,Ce=e((()=>{O(),oe(),D(),A(),c(),s(),i(),d(),S(),ve(),be(),z=a(),B=48,V=4,H=16})),U,we=e((()=>{d(),U={icon:p,attributes:[],example:{attributes:{}}}})),W,G,K,Te,Ee,De,Oe,ke=e((()=>{W=`jpa/post-traffic-activity`,G=`Traffic activity`,K=`Daily views for the post or page being viewed, as a calendar heatmap.`,Te={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},Ee=`stats`,De=`framed`,Oe={name:W,title:G,description:K,help:Te,category:Ee,presentation:De}}));function Ae({hasPostScope:e,preset:t},n=!1){return{reportParams:{...le(n,t),...e?{post_id:Y}:{}}}}function q(e){return(0,J.jsx)(R,{attributes:Ae(e)})}function je({hasPostScope:e,preset:t,...n}){return(0,J.jsx)(he,{...n,widgetType:me(Oe,U),renderModule:Me,renderComponent:R,attributes:Ae({hasPostScope:e,preset:t},!0)})}var J,Y,Me,Ne,X,Z,Q,$,Pe;e((()=>{O(),w(),pe(),de(),ge(),Ce(),we(),ke(),J=a(),E(),Y=779,Me=`storybook/post-traffic-activity`,Ne={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:R,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},X={render:q,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[j]},Z={render:q,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[j]},Q={render:q,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[j]},$={render:e=>(0,J.jsx)(je,{...e}),args:{..._e,widgetWidth:4,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...fe,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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