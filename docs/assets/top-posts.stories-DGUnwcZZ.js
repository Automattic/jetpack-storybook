import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{C as r,n as i,t as a}from"./build-module-DQe4AOzJ.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{A as s,B as ee,I as c,M as l,O as u,f as d,k as f,m as p,o as m}from"./charts-provider-CJceu84j.js";import{Ct as te,Lt as h,t as g,vn as _}from"./src-DvzWgCqE.js";import{a as v}from"./src-CXKaTWRV.js";import{t as ne}from"./widget-state-BygCceVJ.js";import{V as re,i as y,n as ie,r as b}from"./with-story-router-Bl7d_9HM.js";import"./constants-B9OTkkI1.js";import{r as ae,t as x}from"./leaderboard-skeleton-9Ba15YQj.js";import{n as oe,r as se}from"./register-report-mocks-CI2bPEM7.js";import{s as ce}from"./locations-geo-chart-CRxPU1Bn.js";import{a as le,g as ue,h as de,i as fe,m as pe,n as me,p as he,r as S}from"./with-widget-canvas-BX79mBf6.js";import{n as ge,t as _e}from"./register-stats-mocks-Nvcu00DF.js";import{n as ve,t as C}from"./force-stats-mock-state-B0U9Dr7D.js";var w,T,E,ye=e((()=>{w=`_root_cb7tq_1`,T=`_content_cb7tq_10`,E={root:w,content:T}}));function be(e,t,n){return e.children?.length?n?{kind:`drillDown`,onClick:()=>n(e),ariaLabel:r(i(`View %s archive pages`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}:{kind:`postLink`,id:e.postId,href:e.href,search:t}}function xe(e,t,n){return e.map((e,r)=>({id:`${r}-${e.href??e.label}`,...ce({label:e.label,media:{kind:`none`},action:be(e,t,n)}),currentValue:e.value,previousValue:e.previousValue}))}function Se(e){return e.map(e=>{let t=Number(e.id),n=v(e.link);return{label:String(e.label??``)||i(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.views,...e.previousViews===void 0?{}:{previousValue:e.previousViews},...n?{href:n}:{},...Number.isFinite(t)&&t>0?{postId:t}:{},type:String(e.type??``)}})}function Ce(){let{reportParams:e}=ee(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:a,isFetching:o,isError:s,refetch:c}=h((0,k.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),u=(0,k.useMemo)(()=>Se(n?.rows??[]),[n]),f=p({origin:{report:`posts`,section:`posts-pages`}}),m=r;return d({report:`posts`,section:`posts-pages`,csv:{exporter:l,status:{isLoading:a,isFetching:o,isError:t.isError},rowCount:u.length}}),(0,A.jsx)(`div`,{className:E.content,children:(0,A.jsx)(ne,{isLoading:a,isFetching:o,isError:u.length===0&&s,isEmpty:u.length===0,error:{description:i(`We couldn't load posts and pages. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},renderLoading:(0,A.jsx)(x,{rows:10}),children:(0,A.jsx)(M,{rows:u,withComparison:m,detailSearch:f,rowsLabel:i(`Pages`,`jetpack-premium-analytics-pkg`)})})})}function D(e,t=!0){return e.map(e=>{let n=String(e.label??``),r=e.children?.length?D(e.children,!1):void 0,a=v(e.link),o=n;return t?o=s(n):r&&(o=f(n)),{label:o||i(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.value,type:`archive`,...e.previousValue===void 0?{}:{previousValue:e.previousValue},...a?{href:a}:{},...r?{children:r}:{}}})}function we(){let{reportParams:e}=ee(),{drillDownItem:t,drillDown:n,resetDrillDown:r}=m(),{primary:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:l,isError:f,refetch:p}=te(e,{maxRows:10}),h=(0,k.useMemo)(()=>D((o?.rows??[]).filter(e=>String(e.label)!==`home`)),[o]),g=s,{activeRows:_,backLabel:v,isPathResolved:y}=(0,k.useMemo)(()=>{let e=h,n=null,r=null,a=!0;for(let o of t??[]){let t=e.find(e=>e.label===o);if(!t?.children?.length){a=!1;break}n=r??i(`All archives`,`jetpack-premium-analytics-pkg`),e=t.children,r=o}return{activeRows:e,backLabel:n,isPathResolved:a}},[h,t]);(0,k.useEffect)(()=>{t&&!y&&!c&&!l&&r()},[t,y,c,l,r]);let ie=(0,k.useCallback)(e=>{n([...t??[],e.label])},[n,t]),b=(0,k.useCallback)(()=>{let e=t??[];if(e.length<=1){r();return}n(e.slice(0,-1))},[n,t,r]),ae=_===h?null:(0,A.jsx)(re,{label:v??i(`All archives`,`jetpack-premium-analytics-pkg`),ariaLabel:i(`Back to the previous archive list`,`jetpack-premium-analytics-pkg`),onClick:b});return d({report:`posts`,section:`archives`,csv:{exporter:u,status:{isLoading:c,isFetching:l,isError:a.isError},rowCount:h.length}}),(0,A.jsxs)(`div`,{className:E.content,children:[ae,(0,A.jsx)(ne,{isLoading:c,isFetching:l,isError:h.length===0&&f,isEmpty:_.length===0,error:{description:i(`We couldn't load archives. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:p}]},renderLoading:(0,A.jsx)(x,{rows:10}),children:(0,A.jsx)(M,{rows:_,withComparison:g,onDrillDown:ie,rowsLabel:i(`Archives`,`jetpack-premium-analytics-pkg`)})})]})}function O({attributes:e={}}){let t=e.contentView??`posts`;return(0,A.jsx)(c,{attributes:e,children:(0,A.jsx)(`div`,{className:E.root,children:t===`archives`?(0,A.jsx)(we,{}):(0,A.jsx)(Ce,{})})})}var k,A,j,M,Te=e((()=>{g(),y(),a(),k=t(n(),1),ye(),A=o(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=({rows:e=[],withComparison:t=!1,onDrillDown:n,detailSearch:r={},rowsLabel:a})=>(0,A.jsx)(ae,{chartTitle:i(`Top pages`,`jetpack-premium-analytics-pkg`),data:xe(e,r,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:j,columns:{label:a,metric:`views`}})})),N,Ee=e((()=>{N={example:{attributes:{contentView:`posts`}}}})),P,F,I,L,R,z,B,V,H,De=e((()=>{P=`jpa/stats-top-posts`,F=`jpa/page`,I=`Top pages`,L=`Your most viewed posts, pages, and archives.`,R={content:`Your most popular posts and pages, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V=[{id:`contentView`,type:`jpa/select`,label:`View`,relevance:`high`,elements:[{value:`posts`,label:`Posts & pages`},{value:`archives`,label:`Archives`}]}],H={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B,attributes:V}}));function U({withComparison:e,contentView:t}){return(0,G.jsx)(O,{attributes:{contentView:t,reportParams:_(e)}})}function Oe({withComparison:e,contentView:t,...n}){return(0,G.jsx)(pe,{...n,widgetType:Ae,renderModule:ke,renderComponent:O,attributes:{contentView:t,reportParams:_(e)}})}function W(e){return(0,G.jsx)(O,{attributes:{contentView:`posts`,reportParams:_(!1,e)}})}var G,ke,Ae,K,je,q,J,Y,X,Z,Q,$,Me;e((()=>{g(),oe(),_e(),de(),ve(),ie(),le(),me(),Te(),Ee(),De(),G=o(),se(),ge(),ke=`storybook/top-posts`,Ae=fe(H,N),K=e=>(0,G.jsx)(`div`,{style:{width:`100%`,height:`340px`},children:(0,G.jsx)(e,{})}),je={title:`Packages/Premium Analytics/Widgets/TopPosts`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`},contentView:{control:`inline-radio`,options:[`posts`,`archives`],description:`Which report the widget shows: posts & pages, or aggregate archive-page views. Rendered as an inline control in the widget frame header by the host.`}},parameters:{docs:{description:{component:'The "Most viewed" widget. Shows the most-viewed posts and pages as a ranked leaderboard, using the global dashboard date range; each row links to the published content, and the homepage-as-latest-posts views from the archives report are folded into the list. The `contentView` attribute switches to aggregate archive-page views (taxonomy, post-type, search, and date archives).'}}}},q={render:U,args:{withComparison:!1,contentView:`posts`},decorators:[K,b]},J={render:U,args:{withComparison:!0,contentView:`posts`},decorators:[K,b]},Y={render:U,args:{withComparison:!0,contentView:`archives`},decorators:[K,b],parameters:{docs:{description:{story:`The Archives view: one aggregate row per archive type (taxonomy, post-type, and search archives), with comparison deltas when the previous period overlaps. Grouped rows drill down into their individual archive pages (taxonomies drill twice: taxonomy → terms) with a back link, following the Locations/Clicks drill-down convention. The homepage entry is surfaced in the Posts & pages view instead, matching the Stats card.`}}}},X={render:e=>(0,G.jsx)(Oe,{...e}),args:{...he,withComparison:!0,contentView:`posts`},argTypes:{...ue,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},Z={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(C(`stats/top-posts`,`loading`),()=>C(`stats/top-posts`,null))},Q={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(C(`stats/top-posts`,`error`),()=>C(`stats/top-posts`,null))},$={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(C(`stats/top-posts`,`empty`),()=>C(`stats/top-posts`,null))},Me=[`Default`,`WithComparison`,`Archives`,`WidgetDashboardWithWidget`,`Loading`,`Error`,`Empty`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTopPostsWidget,
  args: {
    withComparison: false,
    contentView: 'posts'
  },
  decorators: [withTopPostsCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderTopPostsWidget,
  args: {
    withComparison: true,
    contentView: 'posts'
  },
  decorators: [withTopPostsCanvas, withStoryRouter]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderTopPostsWidget,
  args: {
    withComparison: true,
    contentView: 'archives'
  },
  decorators: [withTopPostsCanvas, withStoryRouter],
  parameters: {
    docs: {
      description: {
        story: 'The Archives view: one aggregate row per archive type (taxonomy, post-type, and search archives), with comparison deltas when the previous period overlaps. Grouped rows drill down into their individual archive pages (taxonomies drill twice: taxonomy → terms) with a back link, following the Locations/Clicks drill-down convention. The homepage entry is surfaced in the Posts & pages view instead, matching the Stats card.'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderTopPostsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/top-posts', 'loading');
    return () => forceStatsMockState('stats/top-posts', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => renderTopPostsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/top-posts', 'error');
    return () => forceStatsMockState('stats/top-posts', null);
  }
}`,...Q.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => renderTopPostsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/top-posts', 'empty');
    return () => forceStatsMockState('stats/top-posts', null);
  }
}`,...$.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows the generic empty state (the magnifier
glyph and "We couldn’t find results for this time period.").`,...$.parameters?.docs?.description}}}}))();export{Y as Archives,q as Default,$ as Empty,Q as Error,Z as Loading,X as WidgetDashboardWithWidget,J as WithComparison,Me as __namedExportsOrder,je as default};