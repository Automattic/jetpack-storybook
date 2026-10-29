import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{C as r,n as i,t as a}from"./build-module-DQe4AOzJ.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{A as s,B as c,I as l,M as u,O as d,f as ee,in as f,k as p,m,o as te,sn as h,xn as g}from"./charts-provider-BXWttMH6.js";import{Ct as ne,Lt as re,t as _,vn as v}from"./src-DvzWgCqE.js";import{a as y}from"./src-CDsJ1V0E.js";import{t as b}from"./widget-state-B-3KFlZy.js";import{V as ie,i as x,n as ae,r as S}from"./with-story-router-TeMi98u_.js";import"./constants-B9OTkkI1.js";import{r as oe,t as se}from"./leaderboard-skeleton-C-y8R1eG.js";import{n as ce,r as le}from"./register-report-mocks-CI2bPEM7.js";import{s as ue}from"./locations-geo-chart-C6hMt7oL.js";import{a as de,g as fe,h as pe,i as me,m as he,n as ge,p as _e,r as C}from"./with-widget-canvas-ke8j5asA.js";import{n as ve,t as ye}from"./register-stats-mocks-Nvcu00DF.js";import{n as be,t as w}from"./force-stats-mock-state-B0U9Dr7D.js";var T,E,D,xe=e((()=>{T=`_root_cb7tq_1`,E=`_content_cb7tq_10`,D={root:T,content:E}}));function Se(e,t,n){return e.children?.length?n?{kind:`drillDown`,onClick:()=>n(e),ariaLabel:r(i(`View %s archive pages`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}:{kind:`postLink`,id:e.postId,href:e.href,search:t}}function Ce(e,t,n,r){let i=f(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,a)=>{let o=e.previousValue;return{id:`${a}-${e.href??e.label}`,...ue({label:e.label,media:{kind:`none`},action:Se(e,n,r)}),currentValue:e.value,currentShare:h(e.value,i),previousValue:o,previousShare:t&&o!==void 0?h(o,i):void 0,delta:t&&o!==void 0?g(e.value,o):void 0}})}function we(e){return e.map(e=>{let t=Number(e.id),n=y(e.link);return{label:String(e.label??``)||i(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.views,...e.previousViews===void 0?{}:{previousValue:e.previousViews},...n?{href:n}:{},...Number.isFinite(t)&&t>0?{postId:t}:{},type:String(e.type??``)}})}function Te(){let{reportParams:e}=c(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:a,isFetching:o,isError:s,refetch:l}=re((0,A.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),d=(0,A.useMemo)(()=>we(n?.rows??[]),[n]),f=m({origin:{report:`posts`,section:`posts-pages`}}),p=r;return ee({report:`posts`,section:`posts-pages`,csv:{exporter:u,status:{isLoading:a,isFetching:o,isError:t.isError},rowCount:d.length}}),(0,j.jsx)(`div`,{className:D.content,children:(0,j.jsx)(b,{isLoading:a,isFetching:o,isError:d.length===0&&s,isEmpty:d.length===0,error:{description:i(`We couldn't load posts and pages. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},renderLoading:(0,j.jsx)(se,{rows:10}),children:(0,j.jsx)(N,{rows:d,withComparison:p,detailSearch:f,rowsLabel:i(`Pages`,`jetpack-premium-analytics-pkg`)})})})}function O(e,t=!0){return e.map(e=>{let n=String(e.label??``),r=e.children?.length?O(e.children,!1):void 0,a=y(e.link),o=n;return t?o=s(n):r&&(o=p(n)),{label:o||i(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.value,type:`archive`,...e.previousValue===void 0?{}:{previousValue:e.previousValue},...a?{href:a}:{},...r?{children:r}:{}}})}function Ee(){let{reportParams:e}=c(),{drillDownItem:t,drillDown:n,resetDrillDown:r}=te(),{primary:a,comparisonRows:o,hasComparison:s,isLoading:l,isFetching:u,isError:f,refetch:p}=ne(e,{maxRows:10}),m=(0,A.useMemo)(()=>O((o?.rows??[]).filter(e=>String(e.label)!==`home`)),[o]),h=s,{activeRows:g,backLabel:re,isPathResolved:_}=(0,A.useMemo)(()=>{let e=m,n=null,r=null,a=!0;for(let o of t??[]){let t=e.find(e=>e.label===o);if(!t?.children?.length){a=!1;break}n=r??i(`All archives`,`jetpack-premium-analytics-pkg`),e=t.children,r=o}return{activeRows:e,backLabel:n,isPathResolved:a}},[m,t]);(0,A.useEffect)(()=>{t&&!_&&!l&&!u&&r()},[t,_,l,u,r]);let v=(0,A.useCallback)(e=>{n([...t??[],e.label])},[n,t]),y=(0,A.useCallback)(()=>{let e=t??[];if(e.length<=1){r();return}n(e.slice(0,-1))},[n,t,r]),x=g===m?null:(0,j.jsx)(ie,{label:re??i(`All archives`,`jetpack-premium-analytics-pkg`),ariaLabel:i(`Back to the previous archive list`,`jetpack-premium-analytics-pkg`),onClick:y});return ee({report:`posts`,section:`archives`,csv:{exporter:d,status:{isLoading:l,isFetching:u,isError:a.isError},rowCount:m.length}}),(0,j.jsxs)(`div`,{className:D.content,children:[x,(0,j.jsx)(b,{isLoading:l,isFetching:u,isError:m.length===0&&f,isEmpty:g.length===0,error:{description:i(`We couldn't load archives. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:p}]},renderLoading:(0,j.jsx)(se,{rows:10}),children:(0,j.jsx)(N,{rows:g,withComparison:h,onDrillDown:v,rowsLabel:i(`Archives`,`jetpack-premium-analytics-pkg`)})})]})}function k({attributes:e={}}){let t=e.contentView??`posts`;return(0,j.jsx)(l,{attributes:e,children:(0,j.jsx)(`div`,{className:D.root,children:t===`archives`?(0,j.jsx)(Ee,{}):(0,j.jsx)(Te,{})})})}var A,j,M,N,De=e((()=>{_(),x(),a(),A=t(n(),1),xe(),j=o(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=({rows:e=[],withComparison:t=!1,onDrillDown:n,detailSearch:r={},rowsLabel:a})=>(0,j.jsx)(oe,{chartTitle:i(`Top pages`,`jetpack-premium-analytics-pkg`),data:Ce(e,t,r,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:M,columns:{label:a,metric:`views`}})})),P,Oe=e((()=>{P={example:{attributes:{contentView:`posts`}}}})),F,I,L,R,z,B,V,ke,Ae,je=e((()=>{F=`jpa/stats-top-posts`,I=`jpa/page`,L=`Top pages`,R=`Your most viewed posts, pages, and archives.`,z={content:`Your most popular posts and pages, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,ke=[{id:`contentView`,type:`jpa/select`,label:`View`,relevance:`high`,elements:[{value:`posts`,label:`Posts & pages`},{value:`archives`,label:`Archives`}]}],Ae={name:F,icon:I,title:L,description:R,help:z,category:B,presentation:V,attributes:ke}}));function H({withComparison:e,contentView:t}){return(0,W.jsx)(k,{attributes:{contentView:t,reportParams:v(e)}})}function Me({withComparison:e,contentView:t,...n}){return(0,W.jsx)(he,{...n,widgetType:Pe,renderModule:Ne,renderComponent:k,attributes:{contentView:t,reportParams:v(e)}})}function U(e){return(0,W.jsx)(k,{attributes:{contentView:`posts`,reportParams:v(!1,e)}})}var W,Ne,Pe,G,Fe,K,q,J,Y,X,Z,Q,$;e((()=>{_(),ce(),ye(),pe(),be(),ae(),de(),ge(),De(),Oe(),je(),W=o(),le(),ve(),Ne=`storybook/top-posts`,Pe=me(Ae,P),G=e=>(0,W.jsx)(`div`,{style:{width:`100%`,height:`340px`},children:(0,W.jsx)(e,{})}),Fe={title:`Packages/Premium Analytics/Widgets/TopPosts`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`},contentView:{control:`inline-radio`,options:[`posts`,`archives`],description:`Which report the widget shows: posts & pages, or aggregate archive-page views. Rendered as an inline control in the widget frame header by the host.`}},parameters:{docs:{description:{component:'The "Most viewed" widget. Shows the most-viewed posts and pages as a ranked leaderboard, using the global dashboard date range; each row links to the published content, and the homepage-as-latest-posts views from the archives report are folded into the list. The `contentView` attribute switches to aggregate archive-page views (taxonomy, post-type, search, and date archives).'}}}},K={render:H,args:{withComparison:!1,contentView:`posts`},decorators:[G,S]},q={render:H,args:{withComparison:!0,contentView:`posts`},decorators:[G,S]},J={render:H,args:{withComparison:!0,contentView:`archives`},decorators:[G,S],parameters:{docs:{description:{story:`The Archives view: one aggregate row per archive type (taxonomy, post-type, and search archives), with comparison deltas when the previous period overlaps. Grouped rows drill down into their individual archive pages (taxonomies drill twice: taxonomy → terms) with a back link, following the Locations/Clicks drill-down convention. The homepage entry is surfaced in the Posts & pages view instead, matching the Stats card.`}}}},Y={render:e=>(0,W.jsx)(Me,{...e}),args:{..._e,withComparison:!0,contentView:`posts`},argTypes:{...fe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},X={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/top-posts`,`loading`),()=>w(`stats/top-posts`,null))},Z={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/top-posts`,`error`),()=>w(`stats/top-posts`,null))},Q={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/top-posts`,`empty`),()=>w(`stats/top-posts`,null))},$=[`Default`,`WithComparison`,`Archives`,`WidgetDashboardWithWidget`,`Loading`,`Error`,`Empty`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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