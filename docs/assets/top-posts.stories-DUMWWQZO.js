import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{C as r,n as i,t as a}from"./build-module-DQe4AOzJ.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{D as s,F as c,O as l,bn as u,f as ee,j as te,k as d,m as f,o as ne,on as p,rn as m,z as re}from"./charts-provider-DWkxm3u5.js";import{Pt as h,bt as ie,hn as g,t as _}from"./src-DfQ3R5pV.js";import{a as v}from"./src-DoZ_nM3_.js";import{t as y}from"./widget-state-B-3KFlZy.js";import{L as ae,i as b,n as oe,r as x}from"./with-story-router-lCcAreTD.js";import"./constants-B9OTkkI1.js";import{r as se,t as ce}from"./leaderboard-skeleton-COjQurU9.js";import{n as le,r as ue}from"./register-report-mocks-xm2nLXrN.js";import{s as de}from"./locations-geo-chart-ZZNuTCMY.js";import{a as fe,g as pe,h as me,i as he,m as ge,n as _e,p as ve,r as S}from"./with-widget-canvas-DXflARoK.js";import{n as ye,t as be}from"./register-stats-mocks-Nvcu00DF.js";import{n as xe,t as C}from"./force-stats-mock-state-rsmsojFj.js";var w,T,E,Se=e((()=>{w=`_root_cb7tq_1`,T=`_content_cb7tq_10`,E={root:w,content:T}}));function Ce(e,t,n){return e.children?.length?n?{kind:`drillDown`,onClick:()=>n(e),ariaLabel:r(i(`View %s archive pages`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}:{kind:`postLink`,id:e.postId,href:e.href,search:t}}function we(e,t,n,r){let i=m(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,a)=>{let o=e.previousValue;return{id:`${a}-${e.href??e.label}`,...de({label:e.label,media:{kind:`none`},action:Ce(e,n,r)}),currentValue:e.value,currentShare:p(e.value,i),previousValue:o,previousShare:t&&o!==void 0?p(o,i):void 0,delta:t&&o!==void 0?u(e.value,o):void 0}})}function Te(e){return e.map(e=>{let t=Number(e.id),n=v(e.link);return{label:String(e.label??``)||i(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.views,...e.previousViews===void 0?{}:{previousValue:e.previousViews},...n?{href:n}:{},...Number.isFinite(t)&&t>0?{postId:t}:{},type:String(e.type??``)}})}function Ee(){let{reportParams:e}=re(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:a,isFetching:o,isError:s,refetch:c}=h((0,k.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),l=(0,k.useMemo)(()=>Te(n?.rows??[]),[n]),u=f({origin:{report:`posts`,section:`posts-pages`}}),d=r;return ee({report:`posts`,section:`posts-pages`,csv:{exporter:te,status:{isLoading:a,isFetching:o,isError:t.isError},rowCount:l.length}}),(0,A.jsx)(`div`,{className:E.content,children:(0,A.jsx)(y,{isLoading:a,isFetching:o,isError:l.length===0&&s,isEmpty:l.length===0,error:{description:i(`We couldn't load posts and pages. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},renderLoading:(0,A.jsx)(ce,{rows:10}),children:(0,A.jsx)(M,{rows:l,withComparison:d,detailSearch:u,rowsLabel:i(`Pages`,`jetpack-premium-analytics-pkg`)})})})}function D(e,t=!0){return e.map(e=>{let n=String(e.label??``),r=e.children?.length?D(e.children,!1):void 0,a=v(e.link),o=n;return t?o=d(n):r&&(o=l(n)),{label:o||i(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.value,type:`archive`,...e.previousValue===void 0?{}:{previousValue:e.previousValue},...a?{href:a}:{},...r?{children:r}:{}}})}function De(){let{reportParams:e}=re(),{drillDownItem:t,drillDown:n,resetDrillDown:r}=ne(),{primary:a,comparisonRows:o,hasComparison:c,isLoading:l,isFetching:u,isError:te,refetch:d}=ie(e,{maxRows:10}),f=(0,k.useMemo)(()=>D((o?.rows??[]).filter(e=>String(e.label)!==`home`)),[o]),p=c,{activeRows:m,backLabel:h,isPathResolved:g}=(0,k.useMemo)(()=>{let e=f,n=null,r=null,a=!0;for(let o of t??[]){let t=e.find(e=>e.label===o);if(!t?.children?.length){a=!1;break}n=r??i(`All archives`,`jetpack-premium-analytics-pkg`),e=t.children,r=o}return{activeRows:e,backLabel:n,isPathResolved:a}},[f,t]);(0,k.useEffect)(()=>{t&&!g&&!l&&!u&&r()},[t,g,l,u,r]);let _=(0,k.useCallback)(e=>{n([...t??[],e.label])},[n,t]),v=(0,k.useCallback)(()=>{let e=t??[];if(e.length<=1){r();return}n(e.slice(0,-1))},[n,t,r]),b=m===f?null:(0,A.jsx)(ae,{label:h??i(`All archives`,`jetpack-premium-analytics-pkg`),ariaLabel:i(`Back to the previous archive list`,`jetpack-premium-analytics-pkg`),onClick:v});return ee({report:`posts`,section:`archives`,csv:{exporter:s,status:{isLoading:l,isFetching:u,isError:a.isError},rowCount:f.length}}),(0,A.jsxs)(`div`,{className:E.content,children:[b,(0,A.jsx)(y,{isLoading:l,isFetching:u,isError:f.length===0&&te,isEmpty:m.length===0,error:{description:i(`We couldn't load archives. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},renderLoading:(0,A.jsx)(ce,{rows:10}),children:(0,A.jsx)(M,{rows:m,withComparison:p,onDrillDown:_,rowsLabel:i(`Archives`,`jetpack-premium-analytics-pkg`)})})]})}function O({attributes:e={}}){let t=e.contentView??`posts`;return(0,A.jsx)(c,{attributes:e,children:(0,A.jsx)(`div`,{className:E.root,children:t===`archives`?(0,A.jsx)(De,{}):(0,A.jsx)(Ee,{})})})}var k,A,j,M,Oe=e((()=>{_(),b(),a(),k=t(n(),1),Se(),A=o(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=({rows:e=[],withComparison:t=!1,onDrillDown:n,detailSearch:r={},rowsLabel:a})=>(0,A.jsx)(se,{chartTitle:i(`Top pages`,`jetpack-premium-analytics-pkg`),data:we(e,t,r,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:j,columns:{label:a,metric:`views`}})})),N,ke=e((()=>{N={example:{attributes:{contentView:`posts`}}}})),P,F,I,L,R,z,B,V,Ae,je=e((()=>{P=`jpa/stats-top-posts`,F=`jpa/page`,I=`Top pages`,L=`Your most viewed posts, pages, and archives.`,R={content:`Your most popular posts and pages, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V=[{id:`contentView`,type:`jpa/select`,label:`View`,relevance:`high`,elements:[{value:`posts`,label:`Posts & pages`},{value:`archives`,label:`Archives`}]}],Ae={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B,attributes:V}}));function H({withComparison:e,contentView:t}){return(0,W.jsx)(O,{attributes:{contentView:t,reportParams:g(e)}})}function Me({withComparison:e,contentView:t,...n}){return(0,W.jsx)(ge,{...n,widgetType:Pe,renderModule:Ne,renderComponent:O,attributes:{contentView:t,reportParams:g(e)}})}function U(e){return(0,W.jsx)(O,{attributes:{contentView:`posts`,reportParams:g(!1,e)}})}var W,Ne,Pe,G,Fe,K,q,J,Y,X,Z,Q,$;e((()=>{_(),le(),be(),me(),xe(),oe(),fe(),_e(),Oe(),ke(),je(),W=o(),ue(),ye(),Ne=`storybook/top-posts`,Pe=he(Ae,N),G=e=>(0,W.jsx)(`div`,{style:{width:`100%`,height:`340px`},children:(0,W.jsx)(e,{})}),Fe={title:`Packages/Premium Analytics/Widgets/TopPosts`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`},contentView:{control:`inline-radio`,options:[`posts`,`archives`],description:`Which report the widget shows: posts & pages, or aggregate archive-page views. Rendered as an inline control in the widget frame header by the host.`}},parameters:{docs:{description:{component:'The "Most viewed" widget. Shows the most-viewed posts and pages as a ranked leaderboard, using the global dashboard date range; each row links to the published content, and the homepage-as-latest-posts views from the archives report are folded into the list. The `contentView` attribute switches to aggregate archive-page views (taxonomy, post-type, search, and date archives).'}}}},K={render:H,args:{withComparison:!1,contentView:`posts`},decorators:[G,x]},q={render:H,args:{withComparison:!0,contentView:`posts`},decorators:[G,x]},J={render:H,args:{withComparison:!0,contentView:`archives`},decorators:[G,x],parameters:{docs:{description:{story:`The Archives view: one aggregate row per archive type (taxonomy, post-type, and search archives), with comparison deltas when the previous period overlaps. Grouped rows drill down into their individual archive pages (taxonomies drill twice: taxonomy → terms) with a back link, following the Locations/Clicks drill-down convention. The homepage entry is surfaced in the Posts & pages view instead, matching the Stats card.`}}}},Y={render:e=>(0,W.jsx)(Me,{...e}),args:{...ve,withComparison:!0,contentView:`posts`},argTypes:{...pe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},X={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/top-posts`,`loading`),()=>C(`stats/top-posts`,null))},Z={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/top-posts`,`error`),()=>C(`stats/top-posts`,null))},Q={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/top-posts`,`empty`),()=>C(`stats/top-posts`,null))},$=[`Default`,`WithComparison`,`Archives`,`WidgetDashboardWithWidget`,`Loading`,`Error`,`Empty`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderTopPostsWidget,
  args: {
    withComparison: false,
    contentView: 'posts'
  },
  decorators: [withTopPostsCanvas, withStoryRouter]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTopPostsWidget,
  args: {
    withComparison: true,
    contentView: 'posts'
  },
  decorators: [withTopPostsCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
glyph and "We couldn’t find results for this time period.").`,...Q.parameters?.docs?.description}}}}))();export{J as Archives,K as Default,Q as Empty,Z as Error,X as Loading,Y as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,Fe as default};