import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i,u as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Dt as s,dt as c,t as l,wn as u}from"./src-BXGbBQuk.js";import{$t as d,Xt as f,Zt as p,_ as m,h,o as ee,x as te}from"./charts-provider-CPqqWd8T.js";import{a as g}from"./src-CO_V8Snc.js";import"./rows-DAmD2BmE.js";import{r as _,t as ne}from"./leaderboard-skeleton-CzpMkhaw.js";import{n as re,r as ie}from"./register-report-mocks-HpcX_mM9.js";import{t as ae}from"./widget-state-Ct82KwxU.js";import{n as oe,r as v}from"./with-story-router-Beljd9ki.js";import{g as se,i as ce,p as y,y as b}from"./leaderboard-CH7EAciD.js";import{_ as le,g as ue,h as de,n as fe,y as pe}from"./components-zhFTPI41.js";import{t as me}from"./src-BO6UD8Zu.js";import{a as he,g as ge,h as _e,i as ve,m as ye,n as be,p as xe,r as x}from"./with-widget-canvas-Bkxis0Y9.js";import{n as Se,t as Ce}from"./register-stats-mocks-C8L9U9rH.js";import{n as we,t as S}from"./force-stats-mock-state-CH1j2nnE.js";var C,w,T,Te=t((()=>{C=`_root_cb7tq_1`,w=`_content_cb7tq_10`,T={root:C,content:w}}));function Ee(e,t,n){return e.children?.length?n?{kind:`drillDown`,onClick:()=>n(e),ariaLabel:a(r(`View %s archive pages`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}:{kind:`postLink`,id:e.postId,href:e.href,search:t}}function De(e,t,n,r){let i=p(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,a)=>{let o=e.previousValue;return{id:`${a}-${e.href??e.label}`,...ce({label:e.label,media:{kind:`none`},action:Ee(e,n,r)}),currentValue:e.value,currentShare:f(e.value,i),previousValue:o,previousShare:t&&o!==void 0?f(o,i):void 0,delta:t&&o!==void 0?d(e.value,o):void 0}})}function Oe(e){return e.map(e=>{let t=Number(e.id),n=g(e.link);return{label:String(e.label??``)||r(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.views,...e.previousViews===void 0?{}:{previousValue:e.previousViews},...n?{href:n}:{},...Number.isFinite(t)&&t>0?{postId:t}:{},type:String(e.type??``)}})}function ke(){let{reportParams:e}=te(),{primary:t,comparisonRows:n,hasComparison:i,isLoading:a,isFetching:o,isError:c,refetch:l}=s((0,O.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),u=(0,O.useMemo)(()=>Oe(n?.rows??[]),[n]),d=h({origin:{report:`posts`,section:`posts-pages`}}),f=i;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`div`,{className:T.content,children:(0,k.jsx)(ae,{isLoading:a,isFetching:o,isError:u.length===0&&c,isEmpty:u.length===0,error:{description:r(`We couldn't load posts and pages. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},renderLoading:(0,k.jsx)(ne,{rows:10}),children:(0,k.jsx)(j,{rows:u,withComparison:f,detailSearch:d})})}),(0,k.jsxs)(y,{children:[(0,k.jsx)(b,{report:`posts`,section:`posts-pages`}),(0,k.jsx)(fe,{exporter:pe,status:{isLoading:a,isFetching:o,isError:t.isError},rowCount:u.length})]})]})}function E(e,t=!0){return e.map(e=>{let n=String(e.label??``),i=e.children?.length?E(e.children,!1):void 0,a=g(e.link),o=n;return t?o=le(n):i&&(o=ue(n)),{label:o||r(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.value,type:`archive`,...e.previousValue===void 0?{}:{previousValue:e.previousValue},...a?{href:a}:{},...i?{children:i}:{}}})}function Ae(){let{reportParams:e}=te(),{drillDownItem:t,drillDown:n,resetDrillDown:i}=ee(),{primary:a,comparisonRows:o,hasComparison:s,isLoading:l,isFetching:u,isError:d,refetch:f}=c(e,{maxRows:10}),p=(0,O.useMemo)(()=>E((o?.rows??[]).filter(e=>String(e.label)!==`home`)),[o]),m=s,{activeRows:h,backLabel:g,isPathResolved:_}=(0,O.useMemo)(()=>{let e=p,n=null,i=null,a=!0;for(let o of t??[]){let t=e.find(e=>e.label===o);if(!t?.children?.length){a=!1;break}n=i??r(`All archives`,`jetpack-premium-analytics-pkg`),e=t.children,i=o}return{activeRows:e,backLabel:n,isPathResolved:a}},[p,t]);(0,O.useEffect)(()=>{t&&!_&&!l&&!u&&i()},[t,_,l,u,i]);let re=(0,O.useCallback)(e=>{n([...t??[],e.label])},[n,t]),ie=(0,O.useCallback)(()=>{let e=t??[];if(e.length<=1){i();return}n(e.slice(0,-1))},[n,t,i]),oe=h===p?null:(0,k.jsx)(se,{label:g??r(`All archives`,`jetpack-premium-analytics-pkg`),ariaLabel:r(`Back to the previous archive list`,`jetpack-premium-analytics-pkg`),onClick:ie});return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(`div`,{className:T.content,children:[oe,(0,k.jsx)(ae,{isLoading:l,isFetching:u,isError:p.length===0&&d,isEmpty:h.length===0,error:{description:r(`We couldn't load archives. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:f}]},renderLoading:(0,k.jsx)(ne,{rows:10}),children:(0,k.jsx)(j,{rows:h,withComparison:m,onDrillDown:re})})]}),(0,k.jsxs)(y,{children:[(0,k.jsx)(b,{report:`posts`,section:`archives`}),(0,k.jsx)(fe,{exporter:de,status:{isLoading:l,isFetching:u,isError:a.isError},rowCount:p.length})]})]})}function D({attributes:e={}}){let t=e.contentView??`posts`;return(0,k.jsx)(m,{attributes:e,children:(0,k.jsx)(`div`,{className:T.root,children:t===`archives`?(0,k.jsx)(Ae,{}):(0,k.jsx)(ke,{})})})}var O,k,A,j,je=t((()=>{l(),me(),i(),O=e(n(),1),Te(),k=o(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j=({rows:e=[],withComparison:t=!1,onDrillDown:n,detailSearch:r={}})=>(0,k.jsx)(_,{data:De(e,t,r,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:A})})),M,Me=t((()=>{i(),M={attributes:[{id:`contentView`,label:r(`View`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:r(`Posts & pages`,`jetpack-premium-analytics-pkg`),value:`posts`},{label:r(`Archives`,`jetpack-premium-analytics-pkg`),value:`archives`}],relevance:`high`}],example:{attributes:{contentView:`posts`}}}})),N,P,F,I,L,R,z,B,Ne=t((()=>{N=`jpa/stats-top-posts`,P=`jpa/page`,F=`Top pages`,I=`Your most viewed posts, pages, and archives.`,L={content:`Your most popular posts and pages, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e,contentView:t}){return(0,U.jsx)(D,{attributes:{contentView:t,reportParams:u(e)}})}function Pe({withComparison:e,contentView:t,...n}){return(0,U.jsx)(ye,{...n,widgetType:Fe,renderModule:W,renderComponent:D,attributes:{contentView:t,reportParams:u(e)}})}function H(e){return(0,U.jsx)(D,{attributes:{contentView:`posts`,reportParams:u(!1,e)}})}var U,W,Fe,G,Ie,K,q,J,Y,X,Z,Q,$;t((()=>{l(),re(),Ce(),_e(),we(),oe(),he(),be(),je(),Me(),Ne(),U=o(),ie(),Se(),W=`storybook/top-posts`,Fe=ve(B,M),G=e=>(0,U.jsx)(`div`,{style:{width:`100%`,height:`340px`},children:(0,U.jsx)(e,{})}),Ie={title:`Packages/Premium Analytics/Widgets/TopPosts`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`},contentView:{control:`inline-radio`,options:[`posts`,`archives`],description:`Which report the widget shows: posts & pages, or aggregate archive-page views. Rendered as an inline control in the widget frame header by the host.`}},parameters:{docs:{description:{component:'The "Most viewed" widget. Shows the most-viewed posts and pages as a ranked leaderboard, using the global dashboard date range; each row links to the published content, and the homepage-as-latest-posts views from the archives report are folded into the list. The `contentView` attribute switches to aggregate archive-page views (taxonomy, post-type, search, and date archives).'}}}},K={render:V,args:{withComparison:!1,contentView:`posts`},decorators:[G,v]},q={render:V,args:{withComparison:!0,contentView:`posts`},decorators:[G,v]},J={render:V,args:{withComparison:!0,contentView:`archives`},decorators:[G,v],parameters:{docs:{description:{story:`The Archives view: one aggregate row per archive type (taxonomy, post-type, and search archives), with comparison deltas when the previous period overlaps. Grouped rows drill down into their individual archive pages (taxonomies drill twice: taxonomy → terms) with a back link, following the Locations/Clicks drill-down convention. The homepage entry is surfaced in the Posts & pages view instead, matching the Stats card.`}}}},Y={render:e=>(0,U.jsx)(Pe,{...e}),args:{...xe,withComparison:!0,contentView:`posts`},argTypes:{...ge,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},X={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x,v],beforeEach:()=>(S(`stats/top-posts`,`loading`),()=>S(`stats/top-posts`,null))},Z={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x,v],beforeEach:()=>(S(`stats/top-posts`,`error`),()=>S(`stats/top-posts`,null))},Q={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[x,v],beforeEach:()=>(S(`stats/top-posts`,`empty`),()=>S(`stats/top-posts`,null))},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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