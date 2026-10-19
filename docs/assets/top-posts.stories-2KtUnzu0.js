import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{d as r,n as i,t as a}from"./build-module-BXPCp--5.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{At as s,dn as c,gt as ee,t as l}from"./src-hJfttuzM.js";import{f as u,m as d,o as f,v as te,vt as p,xt as m,zt as h}from"./charts-provider-DtMzsgV2.js";import{a as g}from"./src-B84QAM_k.js";import"./rows-DAmD2BmE.js";import{r as _,t as ne}from"./leaderboard-skeleton-ChcA58x6.js";import{n as re,r as ie}from"./register-report-mocks-CDiWgFqy.js";import{t as v}from"./widget-state-i3-RAkgN.js";import{n as y,r as b}from"./with-story-router-B8AmDh4M.js";import{i as ae}from"./build-leaderboard-chart-data-Ye9V1J-U.js";import{f as oe,l as se,o as x}from"./leaderboard-DfSrb_Iw.js";import{C as S,L as ce,R as le,V as ue,t as de,z as fe}from"./src-CkUrciEb.js";import{a as pe,g as me,h as he,i as ge,m as _e,n as ve,p as ye,r as C}from"./with-widget-canvas-ixC2fu1y.js";import{n as be,t as xe}from"./register-stats-mocks-DbeEJSlI.js";import{n as Se,t as w}from"./force-stats-mock-state-Cdq-Wrem.js";var T,E,D,Ce=t((()=>{T=`_root_cb7tq_1`,E=`_content_cb7tq_10`,D={root:T,content:E}}));function we(e,t,n){return e.children?.length?n?{kind:`drillDown`,onClick:()=>n(e),ariaLabel:r(i(`View %s archive pages`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}:{kind:`postLink`,id:e.postId,href:e.href,search:t}}function Te(e,t,n,r){let i=p(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,a)=>{let o=e.previousValue;return{id:`${a}-${e.href??e.label}`,...ae({label:e.label,media:{kind:`none`},action:we(e,n,r)}),currentValue:e.value,currentShare:m(e.value,i),previousValue:o,previousShare:t&&o!==void 0?m(o,i):void 0,delta:t&&o!==void 0?h(e.value,o):void 0}})}function Ee(e){return e.map(e=>{let t=Number(e.id),n=g(e.link);return{label:String(e.label??``)||i(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.views,...e.previousViews===void 0?{}:{previousValue:e.previousViews},...n?{href:n}:{},...Number.isFinite(t)&&t>0?{postId:t}:{},type:String(e.type??``)}})}function De(){let{reportParams:e}=te(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:a,isFetching:o,isError:c,refetch:ee}=s((0,A.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),l=(0,A.useMemo)(()=>Ee(n?.rows??[]),[n]),d=u({origin:{report:`posts`,section:`posts-pages`}}),f=r;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`div`,{className:D.content,children:(0,j.jsx)(v,{isLoading:a,isFetching:o,isError:l.length===0&&c,isEmpty:l.length===0,error:{description:i(`We couldn't load posts and pages. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ee}]},renderLoading:(0,j.jsx)(ne,{rows:10}),children:(0,j.jsx)(N,{rows:l,withComparison:f,detailSearch:d,rowsLabel:i(`Pages`,`jetpack-premium-analytics-pkg`)})})}),(0,j.jsxs)(x,{children:[(0,j.jsx)(oe,{report:`posts`,section:`posts-pages`}),(0,j.jsx)(S,{exporter:ue,status:{isLoading:a,isFetching:o,isError:t.isError},rowCount:l.length})]})]})}function O(e,t=!0){return e.map(e=>{let n=String(e.label??``),r=e.children?.length?O(e.children,!1):void 0,a=g(e.link),o=n;return t?o=fe(n):r&&(o=le(n)),{label:o||i(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.value,type:`archive`,...e.previousValue===void 0?{}:{previousValue:e.previousValue},...a?{href:a}:{},...r?{children:r}:{}}})}function Oe(){let{reportParams:e}=te(),{drillDownItem:t,drillDown:n,resetDrillDown:r}=f(),{primary:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:l,isError:u,refetch:d}=ee(e,{maxRows:10}),p=(0,A.useMemo)(()=>O((o?.rows??[]).filter(e=>String(e.label)!==`home`)),[o]),m=s,{activeRows:h,backLabel:g,isPathResolved:_}=(0,A.useMemo)(()=>{let e=p,n=null,r=null,a=!0;for(let o of t??[]){let t=e.find(e=>e.label===o);if(!t?.children?.length){a=!1;break}n=r??i(`All archives`,`jetpack-premium-analytics-pkg`),e=t.children,r=o}return{activeRows:e,backLabel:n,isPathResolved:a}},[p,t]);(0,A.useEffect)(()=>{t&&!_&&!c&&!l&&r()},[t,_,c,l,r]);let re=(0,A.useCallback)(e=>{n([...t??[],e.label])},[n,t]),ie=(0,A.useCallback)(()=>{let e=t??[];if(e.length<=1){r();return}n(e.slice(0,-1))},[n,t,r]),y=h===p?null:(0,j.jsx)(se,{label:g??i(`All archives`,`jetpack-premium-analytics-pkg`),ariaLabel:i(`Back to the previous archive list`,`jetpack-premium-analytics-pkg`),onClick:ie});return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(`div`,{className:D.content,children:[y,(0,j.jsx)(v,{isLoading:c,isFetching:l,isError:p.length===0&&u,isEmpty:h.length===0,error:{description:i(`We couldn't load archives. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},renderLoading:(0,j.jsx)(ne,{rows:10}),children:(0,j.jsx)(N,{rows:h,withComparison:m,onDrillDown:re,rowsLabel:i(`Archives`,`jetpack-premium-analytics-pkg`)})})]}),(0,j.jsxs)(x,{children:[(0,j.jsx)(oe,{report:`posts`,section:`archives`}),(0,j.jsx)(S,{exporter:ce,status:{isLoading:c,isFetching:l,isError:a.isError},rowCount:p.length})]})]})}function k({attributes:e={}}){let t=e.contentView??`posts`;return(0,j.jsx)(d,{attributes:e,children:(0,j.jsx)(`div`,{className:D.root,children:t===`archives`?(0,j.jsx)(Oe,{}):(0,j.jsx)(De,{})})})}var A,j,M,N,ke=t((()=>{l(),de(),a(),A=e(n(),1),Ce(),j=o(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=({rows:e=[],withComparison:t=!1,onDrillDown:n,detailSearch:r={},rowsLabel:a})=>(0,j.jsx)(_,{chartTitle:i(`Top pages`,`jetpack-premium-analytics-pkg`),data:Te(e,t,r,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:M,columns:{label:a,metric:`views`}})})),P,Ae=t((()=>{a(),P={attributes:[{id:`contentView`,label:i(`View`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:i(`Posts & pages`,`jetpack-premium-analytics-pkg`),value:`posts`},{label:i(`Archives`,`jetpack-premium-analytics-pkg`),value:`archives`}],relevance:`high`}],example:{attributes:{contentView:`posts`}}}})),F,I,L,R,z,B,V,je,Me=t((()=>{F=`jpa/stats-top-posts`,I=`jpa/page`,L=`Top pages`,R=`Your most viewed posts, pages, and archives.`,z={content:`Your most popular posts and pages, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,je={name:F,icon:I,title:L,description:R,help:z,category:B,presentation:V}}));function H({withComparison:e,contentView:t}){return(0,W.jsx)(k,{attributes:{contentView:t,reportParams:c(e)}})}function Ne({withComparison:e,contentView:t,...n}){return(0,W.jsx)(_e,{...n,widgetType:Fe,renderModule:Pe,renderComponent:k,attributes:{contentView:t,reportParams:c(e)}})}function U(e){return(0,W.jsx)(k,{attributes:{contentView:`posts`,reportParams:c(!1,e)}})}var W,Pe,Fe,G,Ie,K,q,J,Y,X,Z,Q,$;t((()=>{l(),re(),xe(),he(),Se(),y(),pe(),ve(),ke(),Ae(),Me(),W=o(),ie(),be(),Pe=`storybook/top-posts`,Fe=ge(je,P),G=e=>(0,W.jsx)(`div`,{style:{width:`100%`,height:`340px`},children:(0,W.jsx)(e,{})}),Ie={title:`Packages/Premium Analytics/Widgets/TopPosts`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`},contentView:{control:`inline-radio`,options:[`posts`,`archives`],description:`Which report the widget shows: posts & pages, or aggregate archive-page views. Rendered as an inline control in the widget frame header by the host.`}},parameters:{docs:{description:{component:'The "Most viewed" widget. Shows the most-viewed posts and pages as a ranked leaderboard, using the global dashboard date range; each row links to the published content, and the homepage-as-latest-posts views from the archives report are folded into the list. The `contentView` attribute switches to aggregate archive-page views (taxonomy, post-type, search, and date archives).'}}}},K={render:H,args:{withComparison:!1,contentView:`posts`},decorators:[G,b]},q={render:H,args:{withComparison:!0,contentView:`posts`},decorators:[G,b]},J={render:H,args:{withComparison:!0,contentView:`archives`},decorators:[G,b],parameters:{docs:{description:{story:`The Archives view: one aggregate row per archive type (taxonomy, post-type, and search archives), with comparison deltas when the previous period overlaps. Grouped rows drill down into their individual archive pages (taxonomies drill twice: taxonomy → terms) with a back link, following the Locations/Clicks drill-down convention. The homepage entry is surfaced in the Posts & pages view instead, matching the Stats card.`}}}},Y={render:e=>(0,W.jsx)(Ne,{...e}),args:{...ye,withComparison:!0,contentView:`posts`},argTypes:{...me,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},X={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[C,b],beforeEach:()=>(w(`stats/top-posts`,`loading`),()=>w(`stats/top-posts`,null))},Z={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[C,b],beforeEach:()=>(w(`stats/top-posts`,`error`),()=>w(`stats/top-posts`,null))},Q={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[C,b],beforeEach:()=>(w(`stats/top-posts`,`empty`),()=>w(`stats/top-posts`,null))},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
glyph and "We couldn’t find results for this time period.").`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Archives`,`WidgetDashboardWithWidget`,`Loading`,`Error`,`Empty`]}))();export{J as Archives,K as Default,Q as Empty,Z as Error,X as Loading,Y as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,Ie as default};