import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{N as i,t as a}from"./build-module-DMs68Vfd.js";import{Zc as o,_l as s,n as c,qc as l}from"./build-module-C6Ow06jV.js";import{t as u,w as d}from"./build-module-WkxPr6kR.js";import{C as f,T as p,X as m,bt as h,ln as g,mn as ee,ot as _,t as v}from"./date-fns-B2pKki1V.js";import{n as y,o as b}from"./heatmap-chart-CYFfSOKB.js";import{B as x,R as S,t as C}from"./build-module-JNPAD9ni.js";import{A as te,t as w}from"./src-Bf8IXmOS.js";import{pn as T,qn as E,ut as D}from"./chart-tooltip-UsOM9nrJ.js";import{C as ne,N as re,S as ie,k as ae}from"./report-metric-BAoGgSI-.js";import{t as oe}from"./widget-state-DIVmJJjd.js";import{S as se,b as ce,t as le,x as ue,y as de}from"./src-BMGro9H1.js";var O,k,A,j,M,N,fe=e((()=>{O=`_root_1u3ja_4`,k=`_pager_1u3ja_11`,A=`_body_1u3ja_23`,j=`_content_1u3ja_28`,M=`_heatmap_1u3ja_44`,N={root:O,pager:k,body:A,content:j,heatmap:M}}));function P(e){let t=e?.slice(0,10);return t&&/^\d{4}-\d{2}-\d{2}$/.test(t)&&!Number.isNaN(f(t).getTime())?t:void 0}function pe(e,t,n){let{data:r,isLoading:a,isFetching:o,isError:s,refetch:c}=T({postId:e,fields:[`data`]}),[l,u]=(0,i.useState)(0);(0,i.useEffect)(()=>{u(0)},[t.from,t.to,n]);let d=P(t.from),v=P(t.to),{days:y,isPaged:b,canShowOlder:x}=(0,i.useMemo)(()=>{if(!d||!v||d>v)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=g(f(d),{weekStartsOn:1}),a=_(f(v),{weekStartsOn:1}),o=i<p(a,n-1),s=p(a,l*n),c=p(s,n-1);if(o&&c<i){c=i;let e=ee(i,n-1);s=e<a?e:a}return{days:h({start:c,end:s}).map(e=>{let n=m(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=d&&n<=v?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,d,v,l,n]),S=(0,i.useCallback)(()=>{u(e=>x?e+1:e)},[x]),C=(0,i.useCallback)(()=>{u(e=>Math.max(0,e-1))},[]);return{days:y,isPaged:b,canShowOlder:x,canShowNewer:l>0,showOlder:S,showNewer:C,isLoading:a,isFetching:o,isError:s,hasData:!!r,refetch:c}}var me=e((()=>{D(),a(),v()}));function he(e){return e?Math.max(R,Math.floor((e-L)/68)):z}function ge(){let{reportParams:e}=re(),n=Number(e.post_id),r=Number.isInteger(n)&&n>0?n:0,[a,s]=(0,i.useState)(),c=d(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);s(t=>t===e?t:e)}}),{days:u,isPaged:f,canShowOlder:p,canShowNewer:m,showOlder:h,showNewer:g,isLoading:ee,isFetching:_,isError:v,hasData:C,refetch:w}=pe(r,e,he(a)*7),{data:T,rowLabels:E}=(0,i.useMemo)(()=>b(u),[u]);return(0,I.jsx)(`div`,{ref:c,className:N.root,children:(0,I.jsx)(`div`,{className:N.body,children:(0,I.jsx)(oe,{isLoading:ee&&!C,isFetching:_,isError:v,isEmpty:r<=0||T.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:w}]},empty:{icon:te,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics`)},children:(0,I.jsxs)(`div`,{className:N.content,children:[f&&(0,I.jsxs)(S,{align:`center`,justify:`flex-end`,gap:`sm`,className:N.pager,children:[(0,I.jsx)(x,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:h,disabled:!p,"aria-label":t(`Older activity`,`jetpack-premium-analytics`),children:(0,I.jsx)(x.Icon,{icon:o,size:16})}),(0,I.jsx)(x,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:g,disabled:!m,"aria-label":t(`Newer activity`,`jetpack-premium-analytics`),children:(0,I.jsx)(x.Icon,{icon:l,size:16})})]}),(0,I.jsx)(y,{data:T,rowLabels:E,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:42,className:N.heatmap})]})})})})}function F({attributes:e={}}){return(0,I.jsx)(ae,{attributes:e,children:(0,I.jsx)(ge,{})})}var I,L,R,z,_e=e((()=>{w(),le(),u(),a(),n(),c(),C(),fe(),me(),I=r(),L=48,R=4,z=16})),B,ve=e((()=>{n(),c(),B={name:`jpa/post-traffic-activity`,title:t(`Traffic activity`,`jetpack-premium-analytics`),help:{content:t(`Daily views for the post or page being viewed, as a calendar heatmap.`,`jetpack-premium-analytics`)},icon:s,attributes:[],example:{attributes:{}}}}));function V({hasPostScope:e,withComparison:t,preset:n}){return{reportParams:{...E(t,n),...e?{post_id:W}:{}}}}function H(e){return(0,U.jsx)(F,{attributes:V(e)})}function ye({hasPostScope:e,withComparison:t,preset:n,...r}){return(0,U.jsx)(ce,{...r,widgetType:{...B,presentation:`framed`},renderModule:G,renderComponent:F,attributes:V({hasPostScope:e,withComparison:t,preset:n})})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{D(),ie(),ue(),_e(),ve(),U=r(),ne(),W=779,G=`storybook/post-traffic-activity`,K=e=>(0,U.jsx)(`div`,{style:{width:`100%`,height:`400px`},children:(0,U.jsx)(e,{})}),q={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:F,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},withComparison:{control:`boolean`,description:`Include the date range picker comparison parameters.`},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},J={render:H,args:{hasPostScope:!0,withComparison:!1,preset:`last-30-days`},decorators:[K]},Y={render:H,args:{hasPostScope:!0,withComparison:!0,preset:`last-30-days`},decorators:[K],parameters:{docs:{description:{story:`The stats/post endpoint does not return a comparison series. This story verifies that comparison report parameters are accepted without inventing comparison activity.`}}}},X={render:H,args:{hasPostScope:!0,withComparison:!1,preset:`last-365-days`},decorators:[K]},Z={render:H,args:{hasPostScope:!1,withComparison:!1,preset:`last-30-days`},decorators:[K]},Q={render:e=>(0,U.jsx)(ye,{...e}),args:{...de,widgetWidth:4,widgetHeight:2,hasPostScope:!0,withComparison:!0,preset:`last-30-days`},argTypes:{...se,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},withComparison:{control:`boolean`,description:`Include the date range picker comparison parameters.`},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderPostTrafficActivity,
  args: {
    hasPostScope: true,
    withComparison: false,
    preset: 'last-30-days'
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`Default — the scoped post's daily view heatmap for the dashboard range.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderPostTrafficActivity,
  args: {
    hasPostScope: true,
    withComparison: true,
    preset: 'last-30-days'
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      description: {
        story: 'The stats/post endpoint does not return a comparison series. This story verifies that comparison report parameters are accepted without inventing comparison activity.'
      }
    }
  }
}`,...Y.parameters?.docs?.source},description:{story:`WithComparison — verifies that comparison report params from the date range
picker pass through the widget host. The stats/post endpoint has no separate
comparison rows, so the activity grid intentionally remains primary-only.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPostTrafficActivity,
  args: {
    hasPostScope: true,
    withComparison: false,
    preset: 'last-365-days'
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source},description:{story:`Paged — a deterministic year-long range that always exceeds one page at
the default story width, exposing both pager controls for direct review.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderPostTrafficActivity,
  args: {
    hasPostScope: false,
    withComparison: false,
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
    withComparison: true,
    preset: 'last-30-days'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    hasPostScope: {
      control: 'boolean',
      description: 'Include the \`post_id\` report param the post detail page seeds from its URL.'
    },
    withComparison: {
      control: 'boolean',
      description: 'Include the date range picker comparison parameters.'
    },
    preset: {
      control: 'select',
      options: ['last-30-days', 'last-365-days'],
      description: 'Dashboard date range used to exercise single-page and paged layouts.'
    }
  }
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Paged`,`NoPostScope`,`WidgetDashboardWithWidget`]}))();export{J as Default,Z as NoPostScope,X as Paged,Q as WidgetDashboardWithWidget,Y as WithComparison,$ as __namedExportsOrder,q as default};