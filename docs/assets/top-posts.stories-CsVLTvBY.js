import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i,u as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{t as s,yi as c}from"./build-module-DNhkEVJn.js";import{f as l,m as u,r as d,v as f}from"./hooks-QRByV9Uq.js";import{J as ee,ft as p,nn as m,t as h}from"./src-DkTnZFaK.js";import{Et as g,Ot as _,Tt as v}from"./helpers-Bxmj6qb6.js";import"./rows-DAmD2BmE.js";import{r as y,t as b}from"./leaderboard-skeleton-DEuU8H1D.js";import{n as x,r as S}from"./with-story-router-C2eTsgCd.js";import{n as te,r as ne}from"./register-report-mocks-6zBcENt4.js";import{_ as re,b as ie,i as ae,m as oe}from"./leaderboard-nnQu9tjJ.js";import{t as se}from"./widget-state-BtSVOKtG.js";import{a as ce}from"./src-D3QnJLP4.js";import{o as le}from"./report-metric-CMSJe2RX.js";import{C as ue,b as de,t as fe,x as pe,y as me}from"./src-BjGO-V3v.js";import{a as he,d as ge,f as _e,i as ve,n as ye,p as be,r as C,u as xe}from"./with-widget-canvas-BAewXotS.js";import{n as Se,t as Ce}from"./register-stats-mocks-Dhi1Ov65.js";import{n as we,t as w}from"./force-stats-mock-state-zNrZ0-TZ.js";var T,E,D,Te=t((()=>{T=`_root_cb7tq_1`,E=`_content_cb7tq_10`,D={root:T,content:E}}));function Ee(e,t,n){return e.children?.length?n?{kind:`drillDown`,onClick:()=>n(e),ariaLabel:a(r(`View %s archive pages`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}:{kind:`postLink`,id:e.postId,href:e.href,search:t}}function De(e,t,n,r){let i=g(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,a)=>{let o=e.previousValue;return{id:`${a}-${e.href??e.label}`,...ae({label:e.label,media:{kind:`none`},action:Ee(e,n,r)}),currentValue:e.value,currentShare:v(e.value,i),previousValue:o,previousShare:t&&o!==void 0?v(o,i):void 0,delta:t&&o!==void 0?_(e.value,o):void 0}})}function Oe(e){return e.map(e=>{let t=Number(e.id),n=ce(e.link);return{label:String(e.label??``)||r(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.views,...e.previousViews===void 0?{}:{previousValue:e.previousViews},...n?{href:n}:{},...Number.isFinite(t)&&t>0?{postId:t}:{},type:String(e.type??``)}})}function ke(){let{reportParams:e}=f(),{comparisonRows:t,hasComparison:n,isLoading:i,isFetching:a,isError:o,refetch:s}=p((0,A.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),c=(0,A.useMemo)(()=>Oe(t?.rows??[]),[t]),u=l({origin:{report:`posts`,section:`posts-pages`}}),d=n;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`div`,{className:D.content,children:(0,j.jsx)(se,{isLoading:i,isFetching:a,isError:c.length===0&&o,isEmpty:c.length===0,error:{description:r(`We couldn't load posts and pages. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},renderLoading:(0,j.jsx)(b,{rows:10}),children:(0,j.jsx)(N,{rows:c,withComparison:d,detailSearch:u})})}),(0,j.jsxs)(oe,{children:[(0,j.jsx)(ie,{report:`posts`,section:`posts-pages`}),(0,j.jsx)(le,{exporter:ue,status:{isLoading:i,isFetching:a,isError:o},rowCount:c.length})]})]})}function O(e,t=!0){return e.map(e=>{let n=String(e.label??``),i=e.children?.length?O(e.children,!1):void 0,a=ce(e.link),o=n;return t?o=pe(n):i&&(o=de(n)),{label:o||r(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.value,type:`archive`,...e.previousValue===void 0?{}:{previousValue:e.previousValue},...a?{href:a}:{},...i?{children:i}:{}}})}function Ae(){let{reportParams:e}=f(),{drillDownItem:t,drillDown:n,resetDrillDown:i}=d(),{comparisonRows:a,hasComparison:o,isLoading:s,isFetching:c,isError:l,refetch:u}=ee(e,{maxRows:10}),p=(0,A.useMemo)(()=>O((a?.rows??[]).filter(e=>String(e.label)!==`home`)),[a]),m=o,{activeRows:h,backLabel:g,isPathResolved:_}=(0,A.useMemo)(()=>{let e=p,n=null,i=null,a=!0;for(let o of t??[]){let t=e.find(e=>e.label===o);if(!t?.children?.length){a=!1;break}n=i??r(`All archives`,`jetpack-premium-analytics-pkg`),e=t.children,i=o}return{activeRows:e,backLabel:n,isPathResolved:a}},[p,t]);(0,A.useEffect)(()=>{t&&!_&&!s&&!c&&i()},[t,_,s,c,i]);let v=(0,A.useCallback)(e=>{n([...t??[],e.label])},[n,t]),y=(0,A.useCallback)(()=>{let e=t??[];if(e.length<=1){i();return}n(e.slice(0,-1))},[n,t,i]),x=h===p?null:(0,j.jsx)(re,{label:g??r(`All archives`,`jetpack-premium-analytics-pkg`),ariaLabel:r(`Back to the previous archive list`,`jetpack-premium-analytics-pkg`),onClick:y});return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(`div`,{className:D.content,children:[x,(0,j.jsx)(se,{isLoading:s,isFetching:c,isError:p.length===0&&l,isEmpty:h.length===0,error:{description:r(`We couldn't load archives. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},renderLoading:(0,j.jsx)(b,{rows:10}),children:(0,j.jsx)(N,{rows:h,withComparison:m,onDrillDown:v})})]}),(0,j.jsxs)(oe,{children:[(0,j.jsx)(ie,{report:`posts`,section:`archives`}),(0,j.jsx)(le,{exporter:me,status:{isLoading:s,isFetching:c,isError:l},rowCount:p.length})]})]})}function k({attributes:e={}}){let t=e.contentView??`posts`;return(0,j.jsx)(u,{attributes:e,children:(0,j.jsx)(`div`,{className:D.root,children:t===`archives`?(0,j.jsx)(Ae,{}):(0,j.jsx)(ke,{})})})}var A,j,M,N,je=t((()=>{h(),fe(),i(),A=e(n(),1),Te(),j=o(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=({rows:e=[],withComparison:t=!1,onDrillDown:n,detailSearch:r={}})=>(0,j.jsx)(y,{data:De(e,t,r,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:M})})),P,Me=t((()=>{i(),s(),P={icon:c,attributes:[{id:`contentView`,label:r(`View`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:r(`Posts & pages`,`jetpack-premium-analytics-pkg`),value:`posts`},{label:r(`Archives`,`jetpack-premium-analytics-pkg`),value:`archives`}],relevance:`high`}],example:{attributes:{contentView:`posts`}}}})),F,I,L,R,z,B,Ne,Pe=t((()=>{F=`jpa/stats-top-posts`,I=`Top pages`,L=`Your most viewed posts, pages, and archives.`,R={content:`Your most popular posts and pages, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,Ne={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function V({withComparison:e,contentView:t}){return(0,U.jsx)(k,{attributes:{contentView:t,reportParams:m(e)}})}function Fe({withComparison:e,contentView:t,...n}){return(0,U.jsx)(ge,{...n,widgetType:W,renderModule:Ie,renderComponent:k,attributes:{contentView:t,reportParams:m(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{contentView:`posts`,reportParams:m(!1,e)}})}var U,Ie,W,G,Le,K,q,J,Y,X,Z,Q,$;t((()=>{h(),te(),Ce(),_e(),we(),x(),he(),ye(),je(),Me(),Pe(),U=o(),ne(),Se(),Ie=`storybook/top-posts`,W=ve(Ne,P),G=e=>(0,U.jsx)(`div`,{style:{width:`100%`,height:`340px`},children:(0,U.jsx)(e,{})}),Le={title:`Packages/Premium Analytics/Widgets/TopPosts`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`},contentView:{control:`inline-radio`,options:[`posts`,`archives`],description:`Which report the widget shows: posts & pages, or aggregate archive-page views. Rendered as an inline control in the widget frame header by the host.`}},parameters:{docs:{description:{component:'The "Most viewed" widget. Shows the most-viewed posts and pages as a ranked leaderboard, using the global dashboard date range; each row links to the published content, and the homepage-as-latest-posts views from the archives report are folded into the list. The `contentView` attribute switches to aggregate archive-page views (taxonomy, post-type, search, and date archives).'}}}},K={render:V,args:{withComparison:!1,contentView:`posts`},decorators:[G,S]},q={render:V,args:{withComparison:!0,contentView:`posts`},decorators:[G,S]},J={render:V,args:{withComparison:!0,contentView:`archives`},decorators:[G,S],parameters:{docs:{description:{story:`The Archives view: one aggregate row per archive type (taxonomy, post-type, and search archives), with comparison deltas when the previous period overlaps. Grouped rows drill down into their individual archive pages (taxonomies drill twice: taxonomy → terms) with a back link, following the Locations/Clicks drill-down convention. The homepage entry is surfaced in the Posts & pages view instead, matching the Stats card.`}}}},Y={render:e=>(0,U.jsx)(Fe,{...e}),args:{...xe,withComparison:!0,contentView:`posts`},argTypes:{...be,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},X={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/top-posts`,`loading`),()=>w(`stats/top-posts`,null))},Z={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/top-posts`,`error`),()=>w(`stats/top-posts`,null))},Q={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/top-posts`,`empty`),()=>w(`stats/top-posts`,null))},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
glyph and "We couldn’t find results for this time period.").`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Archives`,`WidgetDashboardWithWidget`,`Loading`,`Error`,`Empty`]}))();export{J as Archives,K as Default,Q as Empty,Z as Error,X as Loading,Y as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,Le as default};