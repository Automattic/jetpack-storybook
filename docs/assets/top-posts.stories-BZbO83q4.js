import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{d as r,n as i,t as a}from"./build-module-BXPCp--5.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{At as ee,dn as s,gt as c,t as l}from"./src-C1YcyEB5.js";import{It as u,f as d,ht as f,m as p,o as te,v as ne,vt as m}from"./charts-provider-q0xtBWpO.js";import{a as h}from"./src-DyGwiL1n.js";import"./rows-DAmD2BmE.js";import{r as g,t as re}from"./leaderboard-skeleton-B22FfQqy.js";import{n as ie,r as ae}from"./register-report-mocks-CEevu_RO.js";import{t as oe}from"./widget-state-B0Ufqr9y.js";import{n as _,r as v}from"./with-story-router-B8AmDh4M.js";import{i as se}from"./build-leaderboard-chart-data-DfZsKPel.js";import{f as y,l as ce,o as le}from"./leaderboard-DvdkMQL1.js";import{C as b,L as ue,R as de,V as fe,t as pe,z as me}from"./src-qkLIvpoK.js";import{a as he,g as ge,h as _e,i as ve,m as ye,n as be,p as xe,r as x}from"./with-widget-canvas-Baz2N_eL.js";import{n as Se,t as Ce}from"./register-stats-mocks-BTa7qeJL.js";import{n as we,t as S}from"./force-stats-mock-state-DR7Yg1s5.js";var C,w,T,Te=t((()=>{C=`_root_cb7tq_1`,w=`_content_cb7tq_10`,T={root:C,content:w}}));function Ee(e,t,n){return e.children?.length?n?{kind:`drillDown`,onClick:()=>n(e),ariaLabel:r(i(`View %s archive pages`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}:{kind:`postLink`,id:e.postId,href:e.href,search:t}}function De(e,t,n,r){let i=f(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,a)=>{let o=e.previousValue;return{id:`${a}-${e.href??e.label}`,...se({label:e.label,media:{kind:`none`},action:Ee(e,n,r)}),currentValue:e.value,currentShare:m(e.value,i),previousValue:o,previousShare:t&&o!==void 0?m(o,i):void 0,delta:t&&o!==void 0?u(e.value,o):void 0}})}function Oe(e){return e.map(e=>{let t=Number(e.id),n=h(e.link);return{label:String(e.label??``)||i(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.views,...e.previousViews===void 0?{}:{previousValue:e.previousViews},...n?{href:n}:{},...Number.isFinite(t)&&t>0?{postId:t}:{},type:String(e.type??``)}})}function ke(){let{reportParams:e}=ne(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:a,isFetching:o,isError:s,refetch:c}=ee((0,O.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),l=(0,O.useMemo)(()=>Oe(n?.rows??[]),[n]),u=d({origin:{report:`posts`,section:`posts-pages`}}),f=r;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`div`,{className:T.content,children:(0,k.jsx)(oe,{isLoading:a,isFetching:o,isError:l.length===0&&s,isEmpty:l.length===0,error:{description:i(`We couldn't load posts and pages. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},renderLoading:(0,k.jsx)(re,{rows:10}),children:(0,k.jsx)(j,{rows:l,withComparison:f,detailSearch:u,rowsLabel:i(`Pages`,`jetpack-premium-analytics-pkg`)})})}),(0,k.jsxs)(le,{children:[(0,k.jsx)(y,{report:`posts`,section:`posts-pages`}),(0,k.jsx)(b,{exporter:fe,status:{isLoading:a,isFetching:o,isError:t.isError},rowCount:l.length})]})]})}function E(e,t=!0){return e.map(e=>{let n=String(e.label??``),r=e.children?.length?E(e.children,!1):void 0,a=h(e.link),o=n;return t?o=me(n):r&&(o=de(n)),{label:o||i(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.value,type:`archive`,...e.previousValue===void 0?{}:{previousValue:e.previousValue},...a?{href:a}:{},...r?{children:r}:{}}})}function Ae(){let{reportParams:e}=ne(),{drillDownItem:t,drillDown:n,resetDrillDown:r}=te(),{primary:a,comparisonRows:o,hasComparison:ee,isLoading:s,isFetching:l,isError:u,refetch:d}=c(e,{maxRows:10}),f=(0,O.useMemo)(()=>E((o?.rows??[]).filter(e=>String(e.label)!==`home`)),[o]),p=ee,{activeRows:m,backLabel:h,isPathResolved:g}=(0,O.useMemo)(()=>{let e=f,n=null,r=null,a=!0;for(let o of t??[]){let t=e.find(e=>e.label===o);if(!t?.children?.length){a=!1;break}n=r??i(`All archives`,`jetpack-premium-analytics-pkg`),e=t.children,r=o}return{activeRows:e,backLabel:n,isPathResolved:a}},[f,t]);(0,O.useEffect)(()=>{t&&!g&&!s&&!l&&r()},[t,g,s,l,r]);let ie=(0,O.useCallback)(e=>{n([...t??[],e.label])},[n,t]),ae=(0,O.useCallback)(()=>{let e=t??[];if(e.length<=1){r();return}n(e.slice(0,-1))},[n,t,r]),_=m===f?null:(0,k.jsx)(ce,{label:h??i(`All archives`,`jetpack-premium-analytics-pkg`),ariaLabel:i(`Back to the previous archive list`,`jetpack-premium-analytics-pkg`),onClick:ae});return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(`div`,{className:T.content,children:[_,(0,k.jsx)(oe,{isLoading:s,isFetching:l,isError:f.length===0&&u,isEmpty:m.length===0,error:{description:i(`We couldn't load archives. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},renderLoading:(0,k.jsx)(re,{rows:10}),children:(0,k.jsx)(j,{rows:m,withComparison:p,onDrillDown:ie,rowsLabel:i(`Archives`,`jetpack-premium-analytics-pkg`)})})]}),(0,k.jsxs)(le,{children:[(0,k.jsx)(y,{report:`posts`,section:`archives`}),(0,k.jsx)(b,{exporter:ue,status:{isLoading:s,isFetching:l,isError:a.isError},rowCount:f.length})]})]})}function D({attributes:e={}}){let t=e.contentView??`posts`;return(0,k.jsx)(p,{attributes:e,children:(0,k.jsx)(`div`,{className:T.root,children:t===`archives`?(0,k.jsx)(Ae,{}):(0,k.jsx)(ke,{})})})}var O,k,A,j,je=t((()=>{l(),pe(),a(),O=e(n(),1),Te(),k=o(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j=({rows:e=[],withComparison:t=!1,onDrillDown:n,detailSearch:r={},rowsLabel:i})=>(0,k.jsx)(g,{data:De(e,t,r,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:A,columns:{label:i,metric:`views`}})})),M,Me=t((()=>{a(),M={attributes:[{id:`contentView`,label:i(`View`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:i(`Posts & pages`,`jetpack-premium-analytics-pkg`),value:`posts`},{label:i(`Archives`,`jetpack-premium-analytics-pkg`),value:`archives`}],relevance:`high`}],example:{attributes:{contentView:`posts`}}}})),N,P,F,I,L,R,z,B,Ne=t((()=>{N=`jpa/stats-top-posts`,P=`jpa/page`,F=`Top pages`,I=`Your most viewed posts, pages, and archives.`,L={content:`Your most popular posts and pages, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e,contentView:t}){return(0,U.jsx)(D,{attributes:{contentView:t,reportParams:s(e)}})}function Pe({withComparison:e,contentView:t,...n}){return(0,U.jsx)(ye,{...n,widgetType:Fe,renderModule:W,renderComponent:D,attributes:{contentView:t,reportParams:s(e)}})}function H(e){return(0,U.jsx)(D,{attributes:{contentView:`posts`,reportParams:s(!1,e)}})}var U,W,Fe,G,Ie,K,q,J,Y,X,Z,Q,$;t((()=>{l(),ie(),Ce(),_e(),we(),_(),he(),be(),je(),Me(),Ne(),U=o(),ae(),Se(),W=`storybook/top-posts`,Fe=ve(B,M),G=e=>(0,U.jsx)(`div`,{style:{width:`100%`,height:`340px`},children:(0,U.jsx)(e,{})}),Ie={title:`Packages/Premium Analytics/Widgets/TopPosts`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`},contentView:{control:`inline-radio`,options:[`posts`,`archives`],description:`Which report the widget shows: posts & pages, or aggregate archive-page views. Rendered as an inline control in the widget frame header by the host.`}},parameters:{docs:{description:{component:'The "Most viewed" widget. Shows the most-viewed posts and pages as a ranked leaderboard, using the global dashboard date range; each row links to the published content, and the homepage-as-latest-posts views from the archives report are folded into the list. The `contentView` attribute switches to aggregate archive-page views (taxonomy, post-type, search, and date archives).'}}}},K={render:V,args:{withComparison:!1,contentView:`posts`},decorators:[G,v]},q={render:V,args:{withComparison:!0,contentView:`posts`},decorators:[G,v]},J={render:V,args:{withComparison:!0,contentView:`archives`},decorators:[G,v],parameters:{docs:{description:{story:`The Archives view: one aggregate row per archive type (taxonomy, post-type, and search archives), with comparison deltas when the previous period overlaps. Grouped rows drill down into their individual archive pages (taxonomies drill twice: taxonomy → terms) with a back link, following the Locations/Clicks drill-down convention. The homepage entry is surfaced in the Posts & pages view instead, matching the Stats card.`}}}},Y={render:e=>(0,U.jsx)(Pe,{...e}),args:{...xe,withComparison:!0,contentView:`posts`},argTypes:{...ge,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},X={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x,v],beforeEach:()=>(S(`stats/top-posts`,`loading`),()=>S(`stats/top-posts`,null))},Z={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x,v],beforeEach:()=>(S(`stats/top-posts`,`error`),()=>S(`stats/top-posts`,null))},Q={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[x,v],beforeEach:()=>(S(`stats/top-posts`,`empty`),()=>S(`stats/top-posts`,null))},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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