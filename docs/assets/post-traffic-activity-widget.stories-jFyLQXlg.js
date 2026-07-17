import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{t as o,x as s}from"./build-module-Nbr4nybP.js";import{C as c,T as l,X as u,bt as d,ln as f,mn as p,ot as m,t as h}from"./date-fns-B2pKki1V.js";import{Cn as g,Dn as _,Un as v,n as y}from"./build-module-DmVuor49.js";import{n as b,o as x}from"./heatmap-chart-BPB_vSVp.js";import{B as S,R as C,t as w}from"./build-module-B81Cm3qk.js";import{A as ee,t as T}from"./src-B3le4dug.js";import{Yn as E,hn as D,ut as te}from"./chart-tooltip-CcrSDvi1.js";import{C as ne,N as re,S as ie,k as ae}from"./report-metric-BLYeYPaG.js";import{t as oe}from"./widget-state-ibDb7Mwz.js";import{S as se,b as ce,t as le,x as ue,y as de}from"./src-C6_nkI1C.js";var O,k,A,j,M,N,fe=e((()=>{O=`_root_1uv97_4`,k=`_pager_1uv97_11`,A=`_body_1uv97_23`,j=`_content_1uv97_28`,M=`_heatmap_1uv97_44`,N={root:O,pager:k,body:A,content:j,heatmap:M}}));function P(e){let t=e?.slice(0,10);return t&&/^\d{4}-\d{2}-\d{2}$/.test(t)&&!Number.isNaN(c(t).getTime())?t:void 0}function pe(e,t,n){let{data:r,isLoading:a,isFetching:o,isError:s,refetch:h}=D({postId:e,fields:[`data`]}),[g,_]=(0,i.useState)(0);(0,i.useEffect)(()=>{_(0)},[t.from,t.to,n]);let v=P(t.from),y=P(t.to),{days:b,isPaged:x,canShowOlder:S}=(0,i.useMemo)(()=>{if(!v||!y||v>y)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=f(c(v),{weekStartsOn:1}),a=m(c(y),{weekStartsOn:1}),o=i<l(a,n-1),s=l(a,g*n),h=l(s,n-1);if(o&&h<i){h=i;let e=p(i,n-1);s=e<a?e:a}return{days:d({start:h,end:s}).map(e=>{let n=u(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=v&&n<=y?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<h}},[r,v,y,g,n]),C=(0,i.useCallback)(()=>{_(e=>S?e+1:e)},[S]),w=(0,i.useCallback)(()=>{_(e=>Math.max(0,e-1))},[]);return{days:b,isPaged:x,canShowOlder:S,canShowNewer:g>0,showOlder:C,showNewer:w,isLoading:a,isFetching:o,isError:s,hasData:!!r,refetch:h}}var me=e((()=>{te(),a(),h()}));function he(e){return e?Math.max(R,Math.floor((e-L)/68)):z}function ge(){let{reportParams:e}=re(),n=Number(e.post_id),r=Number.isInteger(n)&&n>0?n:0,[a,o]=(0,i.useState)(),c=s(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);o(t=>t===e?t:e)}}),{days:l,isPaged:u,canShowOlder:d,canShowNewer:f,showOlder:p,showNewer:m,isLoading:h,isFetching:v,isError:y,hasData:w,refetch:T}=pe(r,e,he(a)*7),{data:E,rowLabels:D}=(0,i.useMemo)(()=>x(l),[l]);return(0,I.jsx)(`div`,{ref:c,className:N.root,children:(0,I.jsx)(`div`,{className:N.body,children:(0,I.jsx)(oe,{isLoading:h&&!w,isFetching:v,isError:y,isEmpty:r<=0||E.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:T}]},empty:{icon:ee,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics`)},children:(0,I.jsxs)(`div`,{className:N.content,children:[u&&(0,I.jsxs)(C,{align:`center`,justify:`flex-end`,gap:`sm`,className:N.pager,children:[(0,I.jsx)(S,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:p,disabled:!d,"aria-label":t(`Older activity`,`jetpack-premium-analytics`),children:(0,I.jsx)(S.Icon,{icon:_,size:16})}),(0,I.jsx)(S,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,onClick:m,disabled:!f,"aria-label":t(`Newer activity`,`jetpack-premium-analytics`),children:(0,I.jsx)(S.Icon,{icon:g,size:16})})]}),(0,I.jsx)(b,{data:E,rowLabels:D,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:42,className:N.heatmap})]})})})})}function F({attributes:e={}}){return(0,I.jsx)(ae,{attributes:e,children:(0,I.jsx)(ge,{})})}var I,L,R,z,_e=e((()=>{T(),le(),o(),a(),n(),y(),w(),fe(),me(),I=r(),L=48,R=4,z=16})),B,ve=e((()=>{n(),y(),B={name:`jpa/post-traffic-activity`,title:t(`Traffic activity`,`jetpack-premium-analytics`),help:{content:t(`Daily views for the post or page being viewed, as a calendar heatmap.`,`jetpack-premium-analytics`)},icon:v,attributes:[],example:{attributes:{}}}}));function V({hasPostScope:e,withComparison:t,preset:n}){return{reportParams:{...E(t,n),...e?{post_id:W}:{}}}}function H(e){return(0,U.jsx)(F,{attributes:V(e)})}function ye({hasPostScope:e,withComparison:t,preset:n,...r}){return(0,U.jsx)(ce,{...r,widgetType:{...B,presentation:`framed`},renderModule:G,renderComponent:F,attributes:V({hasPostScope:e,withComparison:t,preset:n})})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{te(),ie(),ue(),_e(),ve(),U=r(),ne(),W=779,G=`storybook/post-traffic-activity`,K=e=>(0,U.jsx)(`div`,{style:{width:`100%`,height:`400px`},children:(0,U.jsx)(e,{})}),q={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:F,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},withComparison:{control:`boolean`,description:`Include the date range picker comparison parameters.`},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},J={render:H,args:{hasPostScope:!0,withComparison:!1,preset:`last-30-days`},decorators:[K]},Y={render:H,args:{hasPostScope:!0,withComparison:!0,preset:`last-30-days`},decorators:[K],parameters:{docs:{description:{story:`The stats/post endpoint does not return a comparison series. This story verifies that comparison report parameters are accepted without inventing comparison activity.`}}}},X={render:H,args:{hasPostScope:!0,withComparison:!1,preset:`last-365-days`},decorators:[K]},Z={render:H,args:{hasPostScope:!1,withComparison:!1,preset:`last-30-days`},decorators:[K]},Q={render:e=>(0,U.jsx)(ye,{...e}),args:{...de,widgetWidth:4,widgetHeight:2,hasPostScope:!0,withComparison:!0,preset:`last-30-days`},argTypes:{...se,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},withComparison:{control:`boolean`,description:`Include the date range picker comparison parameters.`},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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