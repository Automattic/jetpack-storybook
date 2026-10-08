import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i,u as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{t as s,yi as c}from"./build-module-DNhkEVJn.js";import{Nn as l,ct as u,t as d,wt as f}from"./src-Cu4d7qjy.js";import{_ as p,h as m,ln as h,o as ee,on as g,sn as _,x as v}from"./charts-provider-K04X_Hm1.js";import{a as y}from"./src-BRIctaTi.js";import"./rows-DAmD2BmE.js";import{r as b,t as x}from"./leaderboard-skeleton-CzQRK-kq.js";import{n as te,r as S}from"./with-story-router-Beljd9ki.js";import{n as ne,r as re}from"./register-report-mocks-BG_hwAg4.js";import{_ as ie,b as ae,i as oe,m as se}from"./leaderboard-CuZefP7f.js";import{t as ce}from"./widget-state-Dm1Fd0B8.js";import{_ as le,g as ue,h as de,n as fe,y as pe}from"./components-BOUgdiNO.js";import{t as me}from"./src-Cp_Y0ru0.js";import{a as he,g as ge,h as _e,i as ve,m as ye,n as be,p as xe,r as C}from"./with-widget-canvas-DsQeJZGe.js";import{n as Se,t as Ce}from"./register-stats-mocks-B5sM1nsa.js";import{n as we,t as w}from"./force-stats-mock-state-sGJh6Kjd.js";var T,E,D,Te=t((()=>{T=`_root_cb7tq_1`,E=`_content_cb7tq_10`,D={root:T,content:E}}));function Ee(e,t,n){return e.children?.length?n?{kind:`drillDown`,onClick:()=>n(e),ariaLabel:a(r(`View %s archive pages`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}:{kind:`postLink`,id:e.postId,href:e.href,search:t}}function De(e,t,n,r){let i=_(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,a)=>{let o=e.previousValue;return{id:`${a}-${e.href??e.label}`,...oe({label:e.label,media:{kind:`none`},action:Ee(e,n,r)}),currentValue:e.value,currentShare:g(e.value,i),previousValue:o,previousShare:t&&o!==void 0?g(o,i):void 0,delta:t&&o!==void 0?h(e.value,o):void 0}})}function Oe(e){return e.map(e=>{let t=Number(e.id),n=y(e.link);return{label:String(e.label??``)||r(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.views,...e.previousViews===void 0?{}:{previousValue:e.previousViews},...n?{href:n}:{},...Number.isFinite(t)&&t>0?{postId:t}:{},type:String(e.type??``)}})}function ke(){let{reportParams:e}=v(),{primary:t,comparisonRows:n,hasComparison:i,isLoading:a,isFetching:o,isError:s,refetch:c}=f((0,A.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),l=(0,A.useMemo)(()=>Oe(n?.rows??[]),[n]),u=m({origin:{report:`posts`,section:`posts-pages`}}),d=i;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`div`,{className:D.content,children:(0,j.jsx)(ce,{isLoading:a,isFetching:o,isError:l.length===0&&s,isEmpty:l.length===0,error:{description:r(`We couldn't load posts and pages. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},renderLoading:(0,j.jsx)(x,{rows:10}),children:(0,j.jsx)(N,{rows:l,withComparison:d,detailSearch:u})})}),(0,j.jsxs)(se,{children:[(0,j.jsx)(ae,{report:`posts`,section:`posts-pages`}),(0,j.jsx)(fe,{exporter:pe,status:{isLoading:a,isFetching:o,isError:t.isError},rowCount:l.length})]})]})}function O(e,t=!0){return e.map(e=>{let n=String(e.label??``),i=e.children?.length?O(e.children,!1):void 0,a=y(e.link),o=n;return t?o=le(n):i&&(o=ue(n)),{label:o||r(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.value,type:`archive`,...e.previousValue===void 0?{}:{previousValue:e.previousValue},...a?{href:a}:{},...i?{children:i}:{}}})}function Ae(){let{reportParams:e}=v(),{drillDownItem:t,drillDown:n,resetDrillDown:i}=ee(),{primary:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:l,isError:d,refetch:f}=u(e,{maxRows:10}),p=(0,A.useMemo)(()=>O((o?.rows??[]).filter(e=>String(e.label)!==`home`)),[o]),m=s,{activeRows:h,backLabel:g,isPathResolved:_}=(0,A.useMemo)(()=>{let e=p,n=null,i=null,a=!0;for(let o of t??[]){let t=e.find(e=>e.label===o);if(!t?.children?.length){a=!1;break}n=i??r(`All archives`,`jetpack-premium-analytics-pkg`),e=t.children,i=o}return{activeRows:e,backLabel:n,isPathResolved:a}},[p,t]);(0,A.useEffect)(()=>{t&&!_&&!c&&!l&&i()},[t,_,c,l,i]);let y=(0,A.useCallback)(e=>{n([...t??[],e.label])},[n,t]),b=(0,A.useCallback)(()=>{let e=t??[];if(e.length<=1){i();return}n(e.slice(0,-1))},[n,t,i]),te=h===p?null:(0,j.jsx)(ie,{label:g??r(`All archives`,`jetpack-premium-analytics-pkg`),ariaLabel:r(`Back to the previous archive list`,`jetpack-premium-analytics-pkg`),onClick:b});return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(`div`,{className:D.content,children:[te,(0,j.jsx)(ce,{isLoading:c,isFetching:l,isError:p.length===0&&d,isEmpty:h.length===0,error:{description:r(`We couldn't load archives. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:f}]},renderLoading:(0,j.jsx)(x,{rows:10}),children:(0,j.jsx)(N,{rows:h,withComparison:m,onDrillDown:y})})]}),(0,j.jsxs)(se,{children:[(0,j.jsx)(ae,{report:`posts`,section:`archives`}),(0,j.jsx)(fe,{exporter:de,status:{isLoading:c,isFetching:l,isError:a.isError},rowCount:p.length})]})]})}function k({attributes:e={}}){let t=e.contentView??`posts`;return(0,j.jsx)(p,{attributes:e,children:(0,j.jsx)(`div`,{className:D.root,children:t===`archives`?(0,j.jsx)(Ae,{}):(0,j.jsx)(ke,{})})})}var A,j,M,N,je=t((()=>{d(),me(),i(),A=e(n(),1),Te(),j=o(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=({rows:e=[],withComparison:t=!1,onDrillDown:n,detailSearch:r={}})=>(0,j.jsx)(b,{data:De(e,t,r,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:M})})),P,Me=t((()=>{i(),s(),P={icon:c,attributes:[{id:`contentView`,label:r(`View`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:r(`Posts & pages`,`jetpack-premium-analytics-pkg`),value:`posts`},{label:r(`Archives`,`jetpack-premium-analytics-pkg`),value:`archives`}],relevance:`high`}],example:{attributes:{contentView:`posts`}}}})),F,I,L,R,z,B,Ne,Pe=t((()=>{F=`jpa/stats-top-posts`,I=`Top pages`,L=`Your most viewed posts, pages, and archives.`,R={content:`Your most popular posts and pages, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,Ne={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function V({withComparison:e,contentView:t}){return(0,U.jsx)(k,{attributes:{contentView:t,reportParams:l(e)}})}function Fe({withComparison:e,contentView:t,...n}){return(0,U.jsx)(ye,{...n,widgetType:W,renderModule:Ie,renderComponent:k,attributes:{contentView:t,reportParams:l(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{contentView:`posts`,reportParams:l(!1,e)}})}var U,Ie,W,G,Le,K,q,J,Y,X,Z,Q,$;t((()=>{d(),ne(),Ce(),_e(),we(),te(),he(),be(),je(),Me(),Pe(),U=o(),re(),Se(),Ie=`storybook/top-posts`,W=ve(Ne,P),G=e=>(0,U.jsx)(`div`,{style:{width:`100%`,height:`340px`},children:(0,U.jsx)(e,{})}),Le={title:`Packages/Premium Analytics/Widgets/TopPosts`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`},contentView:{control:`inline-radio`,options:[`posts`,`archives`],description:`Which report the widget shows: posts & pages, or aggregate archive-page views. Rendered as an inline control in the widget frame header by the host.`}},parameters:{docs:{description:{component:'The "Most viewed" widget. Shows the most-viewed posts and pages as a ranked leaderboard, using the global dashboard date range; each row links to the published content, and the homepage-as-latest-posts views from the archives report are folded into the list. The `contentView` attribute switches to aggregate archive-page views (taxonomy, post-type, search, and date archives).'}}}},K={render:V,args:{withComparison:!1,contentView:`posts`},decorators:[G,S]},q={render:V,args:{withComparison:!0,contentView:`posts`},decorators:[G,S]},J={render:V,args:{withComparison:!0,contentView:`archives`},decorators:[G,S],parameters:{docs:{description:{story:`The Archives view: one aggregate row per archive type (taxonomy, post-type, and search archives), with comparison deltas when the previous period overlaps. Grouped rows drill down into their individual archive pages (taxonomies drill twice: taxonomy → terms) with a back link, following the Locations/Clicks drill-down convention. The homepage entry is surfaced in the Posts & pages view instead, matching the Stats card.`}}}},Y={render:e=>(0,U.jsx)(Fe,{...e}),args:{...xe,withComparison:!0,contentView:`posts`},argTypes:{...ge,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},X={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/top-posts`,`loading`),()=>w(`stats/top-posts`,null))},Z={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/top-posts`,`error`),()=>w(`stats/top-posts`,null))},Q={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/top-posts`,`empty`),()=>w(`stats/top-posts`,null))},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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