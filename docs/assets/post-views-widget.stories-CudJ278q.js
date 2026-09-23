import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Tn as i,Uu as a,ju as o,t as s}from"./build-module-2iv4IIRq.js";import{C as c,Et as l,Ot as u,Sn as ee,nt as d,t as te,wt as ne}from"./date-fns-D_SPQh_w.js";import{Tt as f,m as re,v as ie,vt as p}from"./hooks-D2-uOzcc.js";import{M as ae,t as oe}from"./src-C-E2d-Lb.js";import{t as se,u as m}from"./src-CJGEmgc4.js";import{$t as h,Mn as g,cn as ce,r as le,t as _,vt as ue}from"./src-0ge7d6kt.js";import{r as de,t as fe}from"./metric-tabs-chart-skeleton-DDrIswPR.js";import{i as pe,r as me}from"./register-report-mocks-DAHzORiq.js";import{t as he}from"./widget-state-BlFCjv4l.js";import{t as v}from"./src-Ddik3icB.js";import{a as ge,d as _e,f as ve,i as ye,n as be,p as xe,r as y,u as b}from"./with-widget-canvas-q45aoI9y.js";import{n as x,t as S}from"./preset-for-story-interval-BNlf8FMF.js";import{n as C,r as w,t as T}from"./with-site-time-zone-ngtW_VDw.js";var E,D,O=e((()=>{E=`_root_10isw_1`,D={root:E}}));function k(e,t){let n=f(e),r=f(t);if(!(!n||!r))return{from:n,to:r}}function A(e,t){if(e.from>e.to)return[];let n={start:c(e.from),end:c(e.to)},r=u(n);return t===`week`?r=ne(n,{weekStartsOn:1}):t===`month`&&(r=l(n)),r.map((t,n)=>{let i=d(t,`yyyy-MM-dd`),a=r[n+1],o=a?d(ee(a,-1),`yyyy-MM-dd`):e.to;return{date:i,from:i<e.from?e.from:i,to:o>e.to?e.to:o}})}function j(e,t){let n=new Map(t.map(e=>[e.date,0]));for(let r of e){let e=t.find(e=>r.date>=e.from&&r.date<=e.to);e&&n.set(e.date,(n.get(e.date)??0)+r.views)}return t.flatMap(e=>{let t=m(e.date);return t?[{date:t,value:n.get(e.date)??0}]:[]})}function M(e,t,n){let{data:r,isLoading:i,isFetching:o,isError:s,refetch:c}=ue({postId:e,fields:[`data`]});return{current:(0,a.useMemo)(()=>{let e=r?.data??[],i=k(t.from,t.to);return j(e,i?A(i,n):[])},[r,n,t.from,t.to]),isLoading:i,isFetching:o,isError:s,hasData:!!r,refetch:c}}var Se=e((()=>{_(),se(),v(),o(),te()}));function Ce({chartType:e}){let{reportParams:n}=ie(),r=g(n.post_id),{current:i,isLoading:o,isFetching:s,isError:c,refetch:l}=M(r,n,le(n.interval,ce)),u=(0,a.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),value:i.reduce((e,t)=>e+t.value,0),current:i}],[i]);return(0,P.jsx)(`div`,{className:D.root,children:(0,P.jsx)(he,{isLoading:o,isFetching:s,isError:c,isEmpty:r<=0,error:{description:t(`We couldn't load this post's views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:{icon:ae,description:t(`Open a post or page report to see its views here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,P.jsx)(fe,{}),children:(0,P.jsx)(de,{metrics:u,dataFormat:F,chartType:e})})})}function N({attributes:e={}}){return(0,P.jsx)(re,{attributes:e,children:(0,P.jsx)(Ce,{chartType:e?.chartType===`line`?`line`:`bar`})})}var P,F,we=e((()=>{_(),oe(),v(),o(),n(),O(),Se(),P=r(),F={type:`number`,options:{useMultipliers:!0,decimals:0}}})),I,Te=e((()=>{s(),v(),I={icon:i,attributes:[p()],example:{attributes:{chartType:`bar`}}}})),L,R,z,B,V,H,U,Ee=e((()=>{L=`jpa/post-views`,R=`Post views`,z=`The view trend of the post or page being viewed over the selected period.`,B={content:`The view trend of the post or page being viewed over the selected period.`},V=`stats`,H=`framed`,U={name:L,title:R,description:z,help:B,category:V,presentation:H}}));function W({hasPostScope:e,interval:t,chartType:n},r=!1){return{chartType:n,reportParams:{...h(r,x(t)),interval:t,...e?{post_id:q}:{}}}}function G(e){return(0,K.jsx)(N,{attributes:W(e)})}function De({hasPostScope:e,interval:t,chartType:n,...r}){return(0,K.jsx)(_e,{...r,widgetType:ye(U,I),renderModule:J,renderComponent:N,attributes:W({hasPostScope:e,interval:t,chartType:n},!0)})}var K,q,J,Y,X,Z,Q,$;e((()=>{_(),me(),ve(),ge(),S(),be(),T(),we(),Te(),Ee(),K=r(),pe(),q=779,J=`storybook/post-views`,Y={title:`Packages/Premium Analytics/Widgets/PostViews`,component:N,tags:[`autodocs`],decorators:[w],argTypes:{...C,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`},chartType:{control:`radio`,options:[`line`,`bar`],description:`The "Chart type" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:`The "Post views" widget: the scoped post's view trend over the dashboard date range as a bar chart by default. The view series comes from \`stats/post\`'s full daily history, zero-filled and bucketed client-side at the page's chart interval. The post detail page has no comparison control, so comparison report params are ignored. Without a post scope the widget renders a scopeless empty state.`}}}},X={render:G,args:{hasPostScope:!0,interval:`day`,chartType:`bar`},decorators:[y]},Z={render:G,args:{hasPostScope:!1,interval:`day`,chartType:`bar`},decorators:[y]},Q={render:e=>(0,K.jsx)(De,{...e}),args:{...b,widgetWidth:2,widgetHeight:2,hasPostScope:!0,interval:`day`},argTypes:{...xe,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPostViews,
  args: {
    hasPostScope: true,
    interval: 'day',
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source},description:{story:`Default — the scoped post's views for the selected period as bars.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderPostViews,
  args: {
    hasPostScope: false,
    interval: 'day',
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...Z.parameters?.docs?.source},description:{story:`NoPostScope — the widget without a \`post_id\` report param, as when added
outside a post detail page. Renders the scopeless empty state without
firing a stats request.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <PostViewsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 2,
    widgetHeight: 2,
    hasPostScope: true,
    interval: 'day'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    hasPostScope: {
      control: 'boolean',
      description: 'Include the \`post_id\` report param the post detail page seeds from its URL.'
    },
    interval: {
      control: 'radio',
      options: ['day', 'week', 'month'],
      description: 'The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`NoPostScope`,`WidgetDashboardWithWidget`]}))();export{X as Default,Z as NoPostScope,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Y as default};