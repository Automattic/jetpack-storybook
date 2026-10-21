import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{C as r,n as i,t as a}from"./build-module-DQe4AOzJ.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{Mt as s,pn as c,t as l,vt as u}from"./src-5g9sGwvT.js";import{Ot as d,dt as f,f as p,m,mt as h,o as ee,v as g}from"./charts-provider-Dz_9KfQe.js";import{F as te,I as _,L as v,Q as y,X as b,Y as ne,Z as re,ct as ie,lt as ae,ot as oe,st as se,t as ce,x as le,z as ue}from"./src-CwWcdYh9.js";import{a as de}from"./src-BHkmuvTS.js";import{t as fe}from"./widget-state-CgiqWOxt.js";import"./rows-DoJXoHhN.js";import{r as pe,t as me}from"./leaderboard-skeleton-Ciu6IUKd.js";import{a as he,o as ge}from"./widget-state-B6SJsJzX.js";import{n as _e,r as x}from"./with-story-router-Bwg0edRp.js";import{i as ve}from"./build-leaderboard-chart-data-B1eNI0zc.js";import{f as S,l as ye,o as C}from"./leaderboard-bG98GUJZ.js";import{n as be,t as xe}from"./register-stats-mocks-Nvcu00DF.js";import{n as Se,t as w}from"./force-stats-mock-state-BBDmAC5l.js";var T,E,D,Ce=e((()=>{T=`_root_cb7tq_1`,E=`_content_cb7tq_10`,D={root:T,content:E}}));function we(e,t,n){return e.children?.length?n?{kind:`drillDown`,onClick:()=>n(e),ariaLabel:r(i(`View %s archive pages`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}:{kind:`postLink`,id:e.postId,href:e.href,search:t}}function Te(e,t,n,r){let i=f(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,a)=>{let o=e.previousValue;return{id:`${a}-${e.href??e.label}`,...ve({label:e.label,media:{kind:`none`},action:we(e,n,r)}),currentValue:e.value,currentShare:h(e.value,i),previousValue:o,previousShare:t&&o!==void 0?h(o,i):void 0,delta:t&&o!==void 0?d(e.value,o):void 0}})}function Ee(e){return e.map(e=>{let t=Number(e.id),n=de(e.link);return{label:String(e.label??``)||i(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.views,...e.previousViews===void 0?{}:{previousValue:e.previousViews},...n?{href:n}:{},...Number.isFinite(t)&&t>0?{postId:t}:{},type:String(e.type??``)}})}function De(){let{reportParams:e}=g(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:a,isFetching:o,isError:c,refetch:l}=s((0,A.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),u=(0,A.useMemo)(()=>Ee(n?.rows??[]),[n]),d=p({origin:{report:`posts`,section:`posts-pages`}}),f=r;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`div`,{className:D.content,children:(0,j.jsx)(fe,{isLoading:a,isFetching:o,isError:u.length===0&&c,isEmpty:u.length===0,error:{description:i(`We couldn't load posts and pages. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},renderLoading:(0,j.jsx)(me,{rows:10}),children:(0,j.jsx)(N,{rows:u,withComparison:f,detailSearch:d,rowsLabel:i(`Pages`,`jetpack-premium-analytics-pkg`)})})}),(0,j.jsxs)(C,{children:[(0,j.jsx)(S,{report:`posts`,section:`posts-pages`}),(0,j.jsx)(le,{exporter:ue,status:{isLoading:a,isFetching:o,isError:t.isError},rowCount:u.length})]})]})}function O(e,t=!0){return e.map(e=>{let n=String(e.label??``),r=e.children?.length?O(e.children,!1):void 0,a=de(e.link),o=n;return t?o=v(n):r&&(o=_(n)),{label:o||i(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.value,type:`archive`,...e.previousValue===void 0?{}:{previousValue:e.previousValue},...a?{href:a}:{},...r?{children:r}:{}}})}function Oe(){let{reportParams:e}=g(),{drillDownItem:t,drillDown:n,resetDrillDown:r}=ee(),{primary:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:l,isError:d,refetch:f}=u(e,{maxRows:10}),p=(0,A.useMemo)(()=>O((o?.rows??[]).filter(e=>String(e.label)!==`home`)),[o]),m=s,{activeRows:h,backLabel:_,isPathResolved:v}=(0,A.useMemo)(()=>{let e=p,n=null,r=null,a=!0;for(let o of t??[]){let t=e.find(e=>e.label===o);if(!t?.children?.length){a=!1;break}n=r??i(`All archives`,`jetpack-premium-analytics-pkg`),e=t.children,r=o}return{activeRows:e,backLabel:n,isPathResolved:a}},[p,t]);(0,A.useEffect)(()=>{t&&!v&&!c&&!l&&r()},[t,v,c,l,r]);let y=(0,A.useCallback)(e=>{n([...t??[],e.label])},[n,t]),b=(0,A.useCallback)(()=>{let e=t??[];if(e.length<=1){r();return}n(e.slice(0,-1))},[n,t,r]),ne=h===p?null:(0,j.jsx)(ye,{label:_??i(`All archives`,`jetpack-premium-analytics-pkg`),ariaLabel:i(`Back to the previous archive list`,`jetpack-premium-analytics-pkg`),onClick:b});return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(`div`,{className:D.content,children:[ne,(0,j.jsx)(fe,{isLoading:c,isFetching:l,isError:p.length===0&&d,isEmpty:h.length===0,error:{description:i(`We couldn't load archives. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:f}]},renderLoading:(0,j.jsx)(me,{rows:10}),children:(0,j.jsx)(N,{rows:h,withComparison:m,onDrillDown:y,rowsLabel:i(`Archives`,`jetpack-premium-analytics-pkg`)})})]}),(0,j.jsxs)(C,{children:[(0,j.jsx)(S,{report:`posts`,section:`archives`}),(0,j.jsx)(le,{exporter:te,status:{isLoading:c,isFetching:l,isError:a.isError},rowCount:p.length})]})]})}function k({attributes:e={}}){let t=e.contentView??`posts`;return(0,j.jsx)(m,{attributes:e,children:(0,j.jsx)(`div`,{className:D.root,children:t===`archives`?(0,j.jsx)(Oe,{}):(0,j.jsx)(De,{})})})}var A,j,M,N,ke=e((()=>{l(),ce(),a(),A=t(n(),1),Ce(),j=o(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=({rows:e=[],withComparison:t=!1,onDrillDown:n,detailSearch:r={},rowsLabel:a})=>(0,j.jsx)(pe,{chartTitle:i(`Top pages`,`jetpack-premium-analytics-pkg`),data:Te(e,t,r,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:M,columns:{label:a,metric:`views`}})})),P,Ae=e((()=>{P={example:{attributes:{contentView:`posts`}}}})),F,I,L,R,z,B,je,Me,Ne,Pe=e((()=>{F=`jpa/stats-top-posts`,I=`jpa/page`,L=`Top pages`,R=`Your most viewed posts, pages, and archives.`,z={content:`Your most popular posts and pages, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,je=`framed`,Me=[{id:`contentView`,type:`jpa/select`,label:`View`,relevance:`high`,elements:[{value:`posts`,label:`Posts & pages`},{value:`archives`,label:`Archives`}]}],Ne={name:F,icon:I,title:L,description:R,help:z,category:B,presentation:je,attributes:Me}}));function V({withComparison:e,contentView:t}){return(0,U.jsx)(k,{attributes:{contentView:t,reportParams:c(e)}})}function Fe({withComparison:e,contentView:t,...n}){return(0,U.jsx)(se,{...n,widgetType:W,renderModule:Ie,renderComponent:k,attributes:{contentView:t,reportParams:c(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{contentView:`posts`,reportParams:c(!1,e)}})}var U,Ie,W,G,Le,K,q,J,Y,X,Z,Q,$;e((()=>{l(),he(),xe(),ie(),Se(),_e(),y(),ne(),ke(),Ae(),Pe(),U=o(),ge(),be(),Ie=`storybook/top-posts`,W=re(Ne,P),G=e=>(0,U.jsx)(`div`,{style:{width:`100%`,height:`340px`},children:(0,U.jsx)(e,{})}),Le={title:`Packages/Premium Analytics/Widgets/TopPosts`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`},contentView:{control:`inline-radio`,options:[`posts`,`archives`],description:`Which report the widget shows: posts & pages, or aggregate archive-page views. Rendered as an inline control in the widget frame header by the host.`}},parameters:{docs:{description:{component:'The "Most viewed" widget. Shows the most-viewed posts and pages as a ranked leaderboard, using the global dashboard date range; each row links to the published content, and the homepage-as-latest-posts views from the archives report are folded into the list. The `contentView` attribute switches to aggregate archive-page views (taxonomy, post-type, search, and date archives).'}}}},K={render:V,args:{withComparison:!1,contentView:`posts`},decorators:[G,x]},q={render:V,args:{withComparison:!0,contentView:`posts`},decorators:[G,x]},J={render:V,args:{withComparison:!0,contentView:`archives`},decorators:[G,x],parameters:{docs:{description:{story:`The Archives view: one aggregate row per archive type (taxonomy, post-type, and search archives), with comparison deltas when the previous period overlaps. Grouped rows drill down into their individual archive pages (taxonomies drill twice: taxonomy → terms) with a back link, following the Locations/Clicks drill-down convention. The homepage entry is surfaced in the Posts & pages view instead, matching the Stats card.`}}}},Y={render:e=>(0,U.jsx)(Fe,{...e}),args:{...oe,withComparison:!0,contentView:`posts`},argTypes:{...ae,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},X={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[b,x],beforeEach:()=>(w(`stats/top-posts`,`loading`),()=>w(`stats/top-posts`,null))},Z={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[b,x],beforeEach:()=>(w(`stats/top-posts`,`error`),()=>w(`stats/top-posts`,null))},Q={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[b,x],beforeEach:()=>(w(`stats/top-posts`,`empty`),()=>w(`stats/top-posts`,null))},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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