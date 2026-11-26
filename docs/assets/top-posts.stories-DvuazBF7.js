import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{b as r,n as i,t as a}from"./build-module-BXs6jvWf.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{Jt as s,Pn as c,Pt as ee,t as l}from"./src-CAeVry9S.js";import{A as u,Ht as d,M as te,P as f,R as ne,W as p,g as m,j as h,m as g,o as re}from"./charts-provider-CLTdq-Ei.js";import{a as _}from"./src-CHc5LFf_.js";import{t as v}from"./widget-state-DErObxxB.js";import{i as y,n as b,q as ie,r as x}from"./with-story-router-DvnbnZaC.js";import"./constants-obwTJAVB.js";import{r as ae,t as oe}from"./leaderboard-skeleton-CQWOJLga.js";import{n as se,r as ce}from"./register-report-mocks-DkiLvmPg.js";import{s as le}from"./locations-geo-chart-gpouurCO.js";import{a as ue,c as de,i as S,l as fe,o as pe,r as me,s as he,u as ge}from"./with-widget-canvas-DmNPWDHb.js";import{n as _e,t as ve}from"./register-stats-mocks-CutN0CmB.js";import{n as ye,t as C}from"./force-stats-mock-state-C0AFQ1mu.js";var w,T,E,be=e((()=>{w=`_root_cb7tq_1`,T=`_content_cb7tq_10`,E={root:w,content:T}}));function xe(e,t,n){return e.children?.length?n?{kind:`drillDown`,onClick:()=>n(e),ariaLabel:r(i(`View %s archive pages`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}:{kind:`postLink`,id:e.postId,href:e.href,postType:e.type,search:t}}function Se(e,t,n){return e.map((e,r)=>{let a={label:e.label,media:{kind:`none`}},o=xe(e,t,n);return{id:`${r}-${e.href??e.label}`,...le(o.kind===`postLink`&&e.publishedInPeriod?{...a,action:o,indicator:i(`Published in this period`,`jetpack-premium-analytics-pkg`)}:{...a,action:o}),currentValue:e.value,previousValue:e.previousValue}})}function Ce(e,{from:t,to:n}){let r=typeof e==`string`?d(e):void 0,i=d(t),a=d(n);return!!r&&!!i&&!!a&&r>=i&&r<=a}function we(e,t){return e.map(e=>{let n=Number(e.id),r=_(e.link);return{label:String(e.label??``)||i(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.views,...e.previousViews===void 0?{}:{previousValue:e.previousViews},...r?{href:r}:{},...Number.isFinite(n)&&n>0?{postId:n}:{},type:String(e.type??``),...Ce(e.date,t)?{publishedInPeriod:!0}:{}}})}function Te(){let{reportParams:e}=p(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:a,isFetching:o,isError:c,refetch:ee}=s((0,k.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),l=(0,k.useMemo)(()=>we(n?.rows??[],e),[n,e]),u=m({origin:{report:`posts`,section:`posts-pages`}}),d=r;return g({report:`posts`,section:`posts-pages`,csv:{exporter:f,status:{isLoading:a,isFetching:o,isError:t.isError},rowCount:l.length}}),(0,A.jsx)(`div`,{className:E.content,children:(0,A.jsx)(v,{isLoading:a,isFetching:o,isError:l.length===0&&c,isEmpty:l.length===0,error:{description:i(`We couldn't load posts and pages. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ee}]},renderLoading:(0,A.jsx)(oe,{rows:10}),children:(0,A.jsx)(M,{rows:l,withComparison:d,detailSearch:u,rowsLabel:i(`Pages`,`jetpack-premium-analytics-pkg`)})})})}function D(e,t=!0){return e.map(e=>{let n=String(e.label??``),r=e.children?.length?D(e.children,!1):void 0,a=_(e.link),o=n;return t?o=te(n):r&&(o=h(n)),{label:o||i(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.value,type:`archive`,...e.previousValue===void 0?{}:{previousValue:e.previousValue},...a?{href:a}:{},...r?{children:r}:{}}})}function Ee(){let{reportParams:e}=p(),{drillDownItem:t,drillDown:n,resetDrillDown:r}=re(),{primary:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:l,isError:d,refetch:te}=ee(e,{maxRows:10}),f=(0,k.useMemo)(()=>D((o?.rows??[]).filter(e=>String(e.label)!==`home`)),[o]),ne=s,{activeRows:m,backLabel:h,isPathResolved:_}=(0,k.useMemo)(()=>{let e=f,n=null,r=null,a=!0;for(let o of t??[]){let t=e.find(e=>e.label===o);if(!t?.children?.length){a=!1;break}n=r??i(`All archives`,`jetpack-premium-analytics-pkg`),e=t.children,r=o}return{activeRows:e,backLabel:n,isPathResolved:a}},[f,t]);(0,k.useEffect)(()=>{t&&!_&&!c&&!l&&r()},[t,_,c,l,r]);let y=(0,k.useCallback)(e=>{n([...t??[],e.label])},[n,t]),b=(0,k.useCallback)(()=>{let e=t??[];if(e.length<=1){r();return}n(e.slice(0,-1))},[n,t,r]),x=m===f?null:(0,A.jsx)(ie,{label:h??i(`All archives`,`jetpack-premium-analytics-pkg`),ariaLabel:i(`Back to the previous archive list`,`jetpack-premium-analytics-pkg`),onClick:b});return g({report:`posts`,section:`archives`,csv:{exporter:u,status:{isLoading:c,isFetching:l,isError:a.isError},rowCount:f.length}}),(0,A.jsxs)(`div`,{className:E.content,children:[x,(0,A.jsx)(v,{isLoading:c,isFetching:l,isError:f.length===0&&d,isEmpty:m.length===0,error:{description:i(`We couldn't load archives. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:te}]},renderLoading:(0,A.jsx)(oe,{rows:10}),children:(0,A.jsx)(M,{rows:m,withComparison:ne,onDrillDown:y,rowsLabel:i(`Archives`,`jetpack-premium-analytics-pkg`)})})]})}function O({attributes:e={}}){let t=e.contentView??`posts`;return(0,A.jsx)(ne,{attributes:e,children:(0,A.jsx)(`div`,{className:E.root,children:t===`archives`?(0,A.jsx)(Ee,{}):(0,A.jsx)(Te,{})})})}var k,A,j,M,De=e((()=>{l(),y(),a(),k=t(n(),1),be(),A=o(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=({rows:e=[],withComparison:t=!1,onDrillDown:n,detailSearch:r={},rowsLabel:i})=>(0,A.jsx)(ae,{data:Se(e,r,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:j,columns:{label:i,metric:`views`}})})),N,Oe=e((()=>{N={example:{attributes:{contentView:`posts`}}}})),P,F,I,L,R,z,B,V,H,ke=e((()=>{P=`jpa/stats-top-posts`,F=`jpa/page`,I=`Top pages`,L=`Your most viewed posts, pages, and archives.`,R={content:`Your most popular posts and pages, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V=[{id:`contentView`,type:`jpa/toggle-group`,label:`View`,relevance:`high`,elements:[{value:`posts`,label:`Posts & pages`},{value:`archives`,label:`Archives`}]}],H={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B,attributes:V}}));function U({withComparison:e,contentView:t}){return(0,G.jsx)(O,{attributes:{contentView:t,reportParams:c(e)}})}function Ae({withComparison:e,contentView:t,...n}){return(0,G.jsx)(de,{...n,widgetType:Me,renderModule:je,renderComponent:O,attributes:{contentView:t,reportParams:c(e)}})}function W(e){return(0,G.jsx)(O,{attributes:{contentView:`posts`,reportParams:c(!1,e)}})}var G,je,Me,Ne,K,q,J,Y,X,Z,Q,$;e((()=>{l(),se(),ve(),fe(),ye(),b(),pe(),me(),De(),Oe(),ke(),G=o(),ce(),_e(),je=`storybook/top-posts`,Me=ue(H,N),Ne={title:`Packages/Premium Analytics/Widgets/TopPosts`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`},contentView:{control:`inline-radio`,options:[`posts`,`archives`],description:`Which report the widget shows: posts & pages, or aggregate archive-page views. Rendered as an inline control in the widget frame header by the host.`}},parameters:{docs:{description:{component:'The "Most viewed" widget. Shows the most-viewed posts and pages as a ranked leaderboard, using the global dashboard date range; each row links to the published content, and the homepage-as-latest-posts views from the archives report are folded into the list. The `contentView` attribute switches to aggregate archive-page views (taxonomy, post-type, search, and date archives).'}}}},K={render:U,args:{withComparison:!1,contentView:`posts`},decorators:[S,x]},q={render:U,args:{withComparison:!0,contentView:`posts`},decorators:[S,x]},J={render:U,args:{withComparison:!0,contentView:`archives`},decorators:[S,x],parameters:{docs:{description:{story:`The Archives view: one aggregate row per archive type (taxonomy, post-type, and search archives), with comparison deltas when the previous period overlaps. Grouped rows drill down into their individual archive pages (taxonomies drill twice: taxonomy → terms) with a back link, following the Locations/Clicks drill-down convention. The homepage entry is surfaced in the Posts & pages view instead, matching the Stats card.`}}}},Y={tags:[`widget-dashboard`],render:e=>(0,G.jsx)(Ae,{...e}),args:{...he,withComparison:!0,contentView:`posts`},argTypes:{...ge,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},X={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/top-posts`,`loading`),()=>C(`stats/top-posts`,null))},Z={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/top-posts`,`error`),()=>C(`stats/top-posts`,null))},Q={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/top-posts`,`empty`),()=>C(`stats/top-posts`,null))},$=[`Default`,`WithComparison`,`Archives`,`WidgetDashboardWithWidget`,`Loading`,`Error`,`Empty`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderTopPostsWidget,
  args: {
    withComparison: false,
    contentView: 'posts'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTopPostsWidget,
  args: {
    withComparison: true,
    contentView: 'posts'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderTopPostsWidget,
  args: {
    withComparison: true,
    contentView: 'archives'
  },
  decorators: [withWidgetCanvas, withStoryRouter],
  parameters: {
    docs: {
      description: {
        story: 'The Archives view: one aggregate row per archive type (taxonomy, post-type, and search archives), with comparison deltas when the previous period overlaps. Grouped rows drill down into their individual archive pages (taxonomies drill twice: taxonomy → terms) with a back link, following the Locations/Clicks drill-down convention. The homepage entry is surfaced in the Posts & pages view instead, matching the Stats card.'
      }
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  tags: ['widget-dashboard'],
  render: args => <TopPostsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true,
    contentView: 'posts'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean',
      description: 'Include previous-period comparison report params and deltas.'
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderTopPostsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/top-posts', 'loading');
    return () => forceStatsMockState('stats/top-posts', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderTopPostsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/top-posts', 'error');
    return () => forceStatsMockState('stats/top-posts', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => renderTopPostsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/top-posts', 'empty');
    return () => forceStatsMockState('stats/top-posts', null);
  }
}`,...Q.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows the generic empty state (the magnifier
glyph and "We couldn’t find results for this time period.").`,...Q.parameters?.docs?.description}}}}))();export{J as Archives,K as Default,Q as Empty,Z as Error,X as Loading,Y as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,Ne as default};