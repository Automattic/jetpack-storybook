import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-yGZutq_9.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{t as o,wl as s}from"./build-module-zwSmKorH.js";import{gt as c}from"./build-module-Bfi49zLB.js";import{C as l,I as ee,Y as te,ot as ne,q as u,y as re}from"./wp-date-settings-DY2Ws1rc.js";import{t as d}from"./src-DzHVYHWf.js";import{r as ie}from"./heatmap-chart-NbRjxICh.js";import{M as ae,t as f}from"./src-DFNM1k7F.js";import{A as p,F as m,S as h,W as oe,m as g,p as _,t as v,u as se}from"./src-D3q39AVo.js";import{t as ce,u as le}from"./src-DKH4OHoS.js";import{Dn as ue,en as de,i as y,yt as fe}from"./date-filters-panel-COqVPElY.js";import{r as pe}from"./metric-sparkline-skeleton-C8-zY5x-.js";import{D as me,G as he,K as ge,Y as b}from"./report-metric-BBSC5AOL.js";import{t as _e}from"./widget-state-C2-3Ku0s.js";import{C as ve,D as ye,E as be,O as xe,S as Se,T as Ce,b as we,k as Te,t as Ee,w as De,x}from"./src-xxifZSu6.js";function Oe(e){return Object.entries(e).flatMap(([e,t])=>Object.keys(t.months).map(t=>S({year:Number(e),month:Number(t)-1})))}function ke(e,t,n){let r=e?.years??{},i=Oe(r);if(i.length===0)return[];let a=Math.min(...i,n?S(n):1/0),o=Math.max(S(t),...i),s=Math.floor(a/12),c=Math.floor(o/12),l=[];for(let e=c;e>=s;e--){let t=r[String(e)],n=Array.from({length:12},(n,r)=>{let i=S({year:e,month:r});return i<a?`before`:i>o?`after`:t?.months[String(r+1)]??0});l.push({year:e,months:n})}return l}var S,C=t((()=>{S=({year:e,month:t})=>e*12+t}));function Ae(e,t){let{lifeStartsAt:n,timeZone:r,now:i=new Date}=t,a=h(p([e.year,e.month,1],r),`month`,i);if(!a?.from||!a.to)return null;let o=n?m(n,r):void 0,s=o&&o>a.from?o:a.from;return s.getTime()<=a.to.getTime()?{from:s,to:a.to}:null}var je=t((()=>{v()})),w,T,E,Me=t((()=>{w=`_root_qcbnv_3`,T=`_chart_qcbnv_14`,E={root:w,chart:T}}));function Ne(e,t,n){let r=e[e.length-1],i=r?.months.findIndex(e=>typeof e==`number`)??-1;return!r||i<0||n&&r.year===n.year&&i===n.month?t:new Date(p([r.year,i,1],g()).getTime())}function Pe(e){let{data:t,isLoading:n,isFetching:r,isError:i,error:a,refetch:o}=fe({postId:e,fields:[`years`,`post`]}),s=(0,D.useMemo)(()=>{let e=t?.post;return se(e?.post_date??(e?.post_date_gmt?`${e.post_date_gmt}Z`:void 0))},[t]),{rows:c,lifeStartsAt:l}=(0,D.useMemo)(()=>{let e=_(),n=s?_(s):void 0,r=n&&{year:n.getFullYear(),month:n.getMonth()},i=ke(t,{year:e.getFullYear(),month:e.getMonth()},r);return{rows:i,lifeStartsAt:Ne(i,s,r)}},[t,s]);return{rows:c,lifeStartsAt:l,isLoading:n,isFetching:r,isError:i,error:a,refetch:o}}var D,Fe=t((()=>{y(),v(),D=e(n(),1),C()}));function Ie(){let{reportParams:e}=l(),t=ue(e.post_id),{rows:n,lifeStartsAt:i,isLoading:a,isFetching:o,isError:s,error:u,refetch:re}=Pe(t),{onChange:d,onApply:f,timeZone:p}=te(),m=(0,k.useCallback)(e=>{let t=n[Number(e.getAttribute(`data-row`))];if(!t)return;let r=Number(e.getAttribute(`data-column`)),a=Ae({year:t.year,month:r},{lifeStartsAt:i,timeZone:p});a&&(d(a,oe),f())},[n,i,p,d,f]),h=(0,k.useCallback)(e=>{let t=e.target.closest(P);t&&m(t)},[m]),g=(0,k.useCallback)(e=>{if(e.key!==`Enter`&&e.key!==` `)return;let t=e.target.closest(`[role="grid"]`)?.getAttribute(`aria-activedescendant`),n=t?document.getElementById(t):null;n&&e.currentTarget.contains(n)&&n.matches(P)&&(e.preventDefault(),m(n))},[m]),_=s&&n.length===0,v=(0,k.useMemo)(()=>Array.from({length:12},(e,t)=>({label:le(t,{short:!0}),data:n.map(e=>{let n=e.months[t];return typeof n==`number`?{value:n}:{value:null,placeholder:!0}})})),[n]),se=(0,k.useMemo)(()=>n.map(e=>String(e.year)),[n]),ce=(0,k.useCallback)(({value:e,columnLabel:t,rowLabel:n})=>(0,A.jsx)(me,{value:e,cellLabel:`${t??``} ${n??``}`.trim(),emptyLabel:r(`No views`,`jetpack-premium-analytics-pkg`),formatValue:ee}),[]);return(0,A.jsx)(_e,{isLoading:a,isFetching:o,isError:_,isEmpty:t<=0||n.length===0,error:_?ne(u,{retryDescription:r(`We couldn't load this post's traffic. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:re}):null,empty:{icon:ae,description:r(t>0?`No views yet.`:`Open a post or page report to see its all-time traffic here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(pe,{}),children:(0,A.jsx)(`div`,{className:E.root,onClick:h,onKeyDown:g,children:(0,A.jsx)(ie,{data:v,rowLabels:se,minCellWidth:j,minCellHeight:M,maxCellHeight:N,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,renderTooltip:ce,className:E.chart,children:(0,A.jsx)(c,{direction:`row`,justify:`center`,children:(0,A.jsx)(ie.Legend,{lessLabel:r(`Fewer views`,`jetpack-premium-analytics-pkg`),moreLabel:r(`More views`,`jetpack-premium-analytics-pkg`)})})})})})}function O({attributes:e={}}){return(0,A.jsx)(re,{attributes:e,children:(0,A.jsx)(Ie,{})})}var k,A,j,M,N,P,Le=t((()=>{y(),v(),d(),ce(),f(),u(),Ee(),i(),k=e(n(),1),C(),je(),Me(),Fe(),A=a(),j=56,M=28,N=40,P=`[role="gridcell"][data-column][data-row]`})),F,Re=t((()=>{o(),F={icon:s,attributes:[],example:{attributes:{}}}})),I,L,R,z,ze,Be,Ve,He=t((()=>{I=`jpa/post-all-time-traffic`,L=`All-time traffic`,R=`Every month of views for the post or page being viewed, across its whole life.`,z={content:`Every month of views for the post or page being viewed, shaded by how it compares to the rest. Always the full history: the period above doesn't narrow it. Pick a month to read the rest of the page over it.`},ze=`stats`,Be=`framed`,Ve={name:I,title:L,description:R,help:z,category:ze,presentation:Be}}));function Ue({hasPostScope:e},t=!1){return{reportParams:{...de(t),...e?{post_id:H}:{}}}}function B(e){return(0,V.jsx)(O,{attributes:Ue(e)})}function We({hasPostScope:e,...t}){return(0,V.jsx)(Ce,{...t,widgetType:Se(Ve,F),renderModule:Ge,renderComponent:O,attributes:Ue({hasPostScope:e},!0)})}var V,H,Ge,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{y(),he(),be(),ve(),xe(),we(),Le(),Re(),He(),V=a(),ge(),H=779,Ge=`storybook/post-all-time-traffic`,U=`stats/post/${H}`,W={control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},G={title:`Packages/Premium Analytics/Widgets/PostAllTimeTraffic`,component:O,tags:[`autodocs`],decorators:[Te],argTypes:{hasPostScope:W},parameters:{docs:{description:{component:`The "All-time traffic" widget: every month of the scoped post's views, one row per year. It always covers the post's whole life, whatever period the page shows, and picking a month applies that month to the page. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:B,args:{hasPostScope:!0},decorators:[x]},q={render:B,args:{hasPostScope:!1},decorators:[x]},J={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(U,`loading`),()=>b(U,null))},Y={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(U,`error`),()=>b(U,null))},X={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(U,`error-retryable`),()=>b(U,null))},Z={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(U,`empty`),()=>b(U,null))},Q={render:e=>(0,V.jsx)(We,{...e}),args:{...De,widgetWidth:3,widgetHeight:2,hasPostScope:!0},argTypes:{...ye,hasPostScope:W}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: true
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Default — the scoped post's monthly views across its life.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`NoPostScope — the widget without a \`post_id\` report param, as when added
outside a post detail page. Renders the scopeless empty state without
firing a stats request.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: true
  },
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(POST_STATS_REQUEST_PATH, 'loading');
    return () => setReportMockState(POST_STATS_REQUEST_PATH, null);
  }
}`,...J.parameters?.docs?.source},description:{story:`Loading — the first fetch is still in flight, so the widget shows its
heatmap skeleton. The mock is forced to never resolve for this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: true
  },
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(POST_STATS_REQUEST_PATH, 'error');
    return () => setReportMockState(POST_STATS_REQUEST_PATH, null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`Error — the fetch failed with a permission 403: neutral copy, no retry.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: true
  },
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(POST_STATS_REQUEST_PATH, 'error-retryable');
    return () => setReportMockState(POST_STATS_REQUEST_PATH, null);
  }
}`,...X.parameters?.docs?.source},description:{story:"ErrorRetryable — the proxy's `no_connection` 403, which can heal after\nreconnecting, so the widget offers a Retry action.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: true
  },
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(POST_STATS_REQUEST_PATH, 'empty');
    return () => setReportMockState(POST_STATS_REQUEST_PATH, null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Empty — a scoped post the endpoint has no yearly stats for.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <PostAllTimeTrafficDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 3,
    widgetHeight: 2,
    hasPostScope: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    hasPostScope: hasPostScopeArgType
  }
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`NoPostScope`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,q as NoPostScope,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,G as default};