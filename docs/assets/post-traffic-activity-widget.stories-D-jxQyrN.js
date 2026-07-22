import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{t as o,x as s}from"./build-module-Nbr4nybP.js";import{C as c,T as l,X as u,bt as d,ln as f,mn as p,ot as m,t as h}from"./date-fns-B2pKki1V.js";import{Cn as g,Dn as _,Un as v,n as y}from"./build-module-DmVuor49.js";import{n as b,o as x}from"./heatmap-chart-jd0JE3NZ.js";import{B as S,R as C,t as w}from"./build-module-Ckp86Qtw.js";import{A as ee,t as T}from"./src-B3le4dug.js";import{Cn as E,Cr as te,ht as D,i as O,ir as ne}from"./chart-tooltip-BvKnA4Ej.js";import{M as re,N as ie,U as ae,z as oe}from"./report-metric-BBgOiYJZ.js";import{t as se}from"./widget-state-Dq0PZ7To.js";import{C as ce,S as le,T as ue,b as de,t as k,w as fe,x as A}from"./src-Vd2hm5Bb.js";var j,M,N,P,F,I,pe=e((()=>{j=`_root_1uv97_4`,M=`_pager_1uv97_11`,N=`_body_1uv97_23`,P=`_content_1uv97_28`,F=`_heatmap_1uv97_44`,I={root:j,pager:M,body:N,content:P,heatmap:F}}));function me(e,t,n){let{data:r,isLoading:a,isFetching:o,isError:s,refetch:h}=E({postId:e,fields:[`data`]}),[g,_]=(0,i.useState)(0);(0,i.useEffect)(()=>{_(0)},[t.from,t.to,n]);let v=O(t.from),y=O(t.to),{days:b,isPaged:x,canShowOlder:S}=(0,i.useMemo)(()=>{if(!v||!y||v>y)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=f(c(v),{weekStartsOn:1}),a=m(c(y),{weekStartsOn:1}),o=i<l(a,n-1),s=l(a,g*n),h=l(s,n-1);if(o&&h<i){h=i;let e=p(i,n-1);s=e<a?e:a}return{days:d({start:h,end:s}).map(e=>{let n=u(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=v&&n<=y?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<h}},[r,v,y,g,n]),C=(0,i.useCallback)(()=>{_(e=>S?e+1:e)},[S]),w=(0,i.useCallback)(()=>{_(e=>Math.max(0,e-1))},[]);return{days:b,isPaged:x,canShowOlder:S,canShowNewer:g>0,showOlder:C,showNewer:w,isLoading:a,isFetching:o,isError:s,hasData:!!r,refetch:h}}var he=e((()=>{D(),a(),h(),k()}));function ge(e){return e?Math.max(B,Math.floor((e-z)/68)):V}function _e(){let{reportParams:e}=ae(),n=te(e.post_id),[r,a]=(0,i.useState)(),o=s(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);a(t=>t===e?t:e)}}),{days:c,isPaged:l,canShowOlder:u,canShowNewer:d,showOlder:f,showNewer:p,isLoading:m,isFetching:h,isError:v,hasData:y,refetch:w}=me(n,e,ge(r)*7),{data:T,rowLabels:E}=(0,i.useMemo)(()=>x(c),[c]);return(0,R.jsx)(`div`,{ref:o,className:I.root,children:(0,R.jsx)(`div`,{className:I.body,children:(0,R.jsx)(se,{isLoading:m&&!y,isFetching:h,isError:v,isEmpty:n<=0||T.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:w}]},empty:{icon:ee,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics`)},children:(0,R.jsxs)(`div`,{className:I.content,children:[l&&(0,R.jsxs)(C,{align:`center`,justify:`flex-end`,gap:`sm`,className:I.pager,children:[(0,R.jsx)(S,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:f,disabled:!u,"aria-label":t(`Older activity`,`jetpack-premium-analytics`),children:(0,R.jsx)(S.Icon,{icon:_,size:16})}),(0,R.jsx)(S,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:p,disabled:!d,"aria-label":t(`Newer activity`,`jetpack-premium-analytics`),children:(0,R.jsx)(S.Icon,{icon:g,size:16})})]}),(0,R.jsx)(b,{data:T,rowLabels:E,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:42,className:I.heatmap})]})})})})}function L({attributes:e={}}){return(0,R.jsx)(oe,{attributes:e,children:(0,R.jsx)(_e,{})})}var R,z,B,V,ve=e((()=>{D(),T(),k(),o(),a(),n(),y(),w(),pe(),he(),R=r(),z=48,B=4,V=16})),H,ye=e((()=>{n(),y(),H={name:`jpa/post-traffic-activity`,title:t(`Traffic activity`,`jetpack-premium-analytics`),help:{content:t(`Daily views for the post or page being viewed, as a calendar heatmap.`,`jetpack-premium-analytics`)},icon:v,attributes:[],example:{attributes:{}}}}));function U({hasPostScope:e,preset:t},n=!1){return{reportParams:{...ne(n,t),...e?{post_id:K}:{}}}}function W(e){return(0,G.jsx)(L,{attributes:U(e)})}function be({hasPostScope:e,preset:t,...n}){return(0,G.jsx)(ce,{...n,widgetType:{...H,presentation:`framed`},renderModule:q,renderComponent:L,attributes:U({hasPostScope:e,preset:t},!0)})}var G,K,q,J,Y,X,Z,Q,$;e((()=>{D(),re(),fe(),de(),ve(),ye(),G=r(),ie(),K=779,q=`storybook/post-traffic-activity`,J={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:L,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},Y={render:W,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[A]},X={render:W,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[A]},Z={render:W,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[A]},Q={render:e=>(0,G.jsx)(be,{...e}),args:{...le,widgetWidth:4,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...ue,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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