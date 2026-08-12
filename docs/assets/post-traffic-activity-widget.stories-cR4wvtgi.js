import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{_ as o,t as s}from"./build-module-CbwHEf9N.js";import{t as c,y as l}from"./build-module-BShXUI3N.js";import{Zc as u,n as d,tl as f,xl as p}from"./build-module-CDRs4YxF.js";import{C as m,Et as h,T as g,bn as ee,et as te,hn as _,t as v,ut as y}from"./date-fns-Bm9dQUxr.js";import{lr as b,t as x,xr as S}from"./src-BK3moDvd.js";import{$ as C,K as w,q as T,rt as ne}from"./report-metric-CfDrBwgo.js";import{n as re,o as ie}from"./heatmap-chart-B9emwLZK.js";import{A as ae,t as E}from"./src-tEZrN6jJ.js";import{n as oe,t as se}from"./src-CaR1T9Ff.js";import{Br as ce,Mt as D,Sr as le,Vn as ue,_ as O}from"./chart-tooltip-r8TscMPi.js";import{t as de}from"./widget-state-teBrQEcv.js";import{C as fe,D as pe,E as me,S as he,T as ge,b as _e,t as k,w as ve,x as A}from"./src-C3nV94bs.js";var j,M,N,P,F,I,ye=e((()=>{j=`_root_1uv97_4`,M=`_pager_1uv97_11`,N=`_body_1uv97_23`,P=`_content_1uv97_28`,F=`_heatmap_1uv97_44`,I={root:j,pager:M,body:N,content:P,heatmap:F}}));function be(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:s,refetch:c}=ue({postId:e,fields:[`data`]}),[l,u]=(0,o.useState)(0);(0,o.useEffect)(()=>{u(0)},[t.from,t.to,n]);let d=O(t.from),f=O(t.to),{days:p,isPaged:v,canShowOlder:b}=(0,o.useMemo)(()=>{if(!d||!f||d>f)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=_(m(d),{weekStartsOn:1}),a=y(m(f),{weekStartsOn:1}),o=i<g(a,n-1),s=g(a,l*n),c=g(s,n-1);if(o&&c<i){c=i;let e=ee(i,n-1);s=e<a?e:a}let u=m(f);return{days:h({start:c,end:u<s?u:s}).map(e=>{let n=te(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=d&&n<=f?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,d,f,l,n]),x=(0,o.useCallback)(()=>{u(e=>b?e+1:e)},[b]),S=(0,o.useCallback)(()=>{u(e=>Math.max(0,e-1))},[]);return{days:p,isPaged:v,canShowOlder:b,canShowNewer:l>0,showOlder:x,showNewer:S,isLoading:i,isFetching:a,isError:s,hasData:!!r,refetch:c}}var xe=e((()=>{D(),s(),v(),k()}));function Se(e){return e?Math.max(B,Math.floor((e-z)/68)):V}function Ce(){let{reportParams:e}=ne(),i=ce(e.post_id),[a,s]=(0,o.useState)(),c=l(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);s(t=>t===e?t:e)}}),{days:d,isPaged:p,canShowOlder:m,canShowNewer:h,showOlder:g,showNewer:ee,isLoading:te,isFetching:_,isError:v,hasData:y,refetch:x}=be(i,e,Se(a)*7),{data:C,rowLabels:w}=(0,o.useMemo)(()=>ie(d),[d]),T=O(e.from),E=O(e.to),se=(0,o.useCallback)(({value:e,cellLabel:i,row:a,column:o})=>{let s;if(e!==null)s=t(r(`%s view`,`%s views`,e,`jetpack-premium-analytics-pkg`),oe(e,`number`,{decimals:0}));else{let e=d[o*7+a];s=e&&T&&E&&e.dateString>=T&&e.dateString<=E?n(`No views`,`jetpack-premium-analytics-pkg`):n(`No data`,`jetpack-premium-analytics-pkg`)}return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`strong`,{children:s}),(0,R.jsx)(`div`,{children:i})]})},[d,T,E]);return(0,R.jsx)(`div`,{ref:c,className:I.root,children:(0,R.jsx)(`div`,{className:I.body,children:(0,R.jsx)(de,{isLoading:te&&!y,isFetching:_,isError:v,isEmpty:i<=0||C.length===0,error:{description:n(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:x}]},empty:{icon:ae,description:n(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},children:(0,R.jsxs)(`div`,{className:I.content,children:[p&&(0,R.jsxs)(b,{align:`center`,justify:`flex-end`,gap:`sm`,className:I.pager,children:[(0,R.jsx)(S,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:g,disabled:!m,"aria-label":n(`Older activity`,`jetpack-premium-analytics-pkg`),children:(0,R.jsx)(S.Icon,{icon:f,size:16})}),(0,R.jsx)(S,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:ee,disabled:!h,"aria-label":n(`Newer activity`,`jetpack-premium-analytics-pkg`),children:(0,R.jsx)(S.Icon,{icon:u,size:16})})]}),(0,R.jsx)(re,{data:C,rowLabels:w,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:42,renderTooltip:se,className:I.heatmap})]})})})})}function L({attributes:e={}}){return(0,R.jsx)(C,{attributes:e,children:(0,R.jsx)(Ce,{})})}var R,z,B,V,we=e((()=>{D(),se(),E(),k(),c(),s(),i(),d(),x(),ye(),xe(),R=a(),z=48,B=4,V=16})),H,Te=e((()=>{d(),H={icon:p,attributes:[],example:{attributes:{}}}})),U,W,G,Ee,De,Oe,ke,Ae=e((()=>{U=`jpa/post-traffic-activity`,W=`Traffic activity`,G=`Daily views for the post or page being viewed, as a calendar heatmap.`,Ee={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},De=`stats`,Oe=`framed`,ke={name:U,title:W,description:G,help:Ee,category:De,presentation:Oe}}));function je({hasPostScope:e,preset:t},n=!1){return{reportParams:{...le(n,t),...e?{post_id:J}:{}}}}function K(e){return(0,q.jsx)(L,{attributes:je(e)})}function Me({hasPostScope:e,preset:t,...n}){return(0,q.jsx)(ge,{...n,widgetType:he(ke,H),renderModule:Ne,renderComponent:L,attributes:je({hasPostScope:e,preset:t},!0)})}var q,J,Ne,Pe,Y,X,Z,Q,$;e((()=>{D(),w(),me(),fe(),_e(),we(),Te(),Ae(),q=a(),T(),J=779,Ne=`storybook/post-traffic-activity`,Pe={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:L,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},Y={render:K,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[A]},X={render:K,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[A]},Z={render:K,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[A]},Q={render:e=>(0,q.jsx)(Me,{...e}),args:{...ve,widgetWidth:4,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...pe,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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