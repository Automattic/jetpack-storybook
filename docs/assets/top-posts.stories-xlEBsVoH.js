import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{d as r,n as i,t as a}from"./build-module-BXPCp--5.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Mt as s,pn as c,t as l,vt as u}from"./src-CFs84l7c.js";import{Lt as d,f,gt as p,m,o as ee,v as te,yt as h}from"./charts-provider-DwDs1k0n.js";import{a as g}from"./src-DIu-iWqU2.js";import"./rows-DAmD2BmE.js";import{r as _,t as ne}from"./leaderboard-skeleton-BnAxdV5e.js";import{n as re,r as ie}from"./register-report-mocks-CUUO0DYG.js";import{t as ae}from"./widget-state-HGsnRJAb.js";import{n as oe,r as v}from"./with-story-router-B8AmDh4M.js";import{i as se}from"./build-leaderboard-chart-data-DierAzTT.js";import{f as y,l as ce,o as b}from"./leaderboard-BwG2EreL.js";import{C as x,L as le,R as ue,V as de,t as fe,z as pe}from"./src-BcJ3rA0v.js";import{a as me,g as he,h as ge,i as _e,m as ve,n as ye,p as be,r as S}from"./with-widget-canvas-BX31JTd0.js";import{n as xe,t as Se}from"./register-stats-mocks-DeGOo2e_.js";import{n as Ce,t as C}from"./force-stats-mock-state-Bd8fyjOy.js";var w,T,E,we=t((()=>{w=`_root_cb7tq_1`,T=`_content_cb7tq_10`,E={root:w,content:T}}));function Te(e,t,n){return e.children?.length?n?{kind:`drillDown`,onClick:()=>n(e),ariaLabel:r(i(`View %s archive pages`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}:{kind:`postLink`,id:e.postId,href:e.href,search:t}}function Ee(e,t,n,r){let i=p(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,a)=>{let o=e.previousValue;return{id:`${a}-${e.href??e.label}`,...se({label:e.label,media:{kind:`none`},action:Te(e,n,r)}),currentValue:e.value,currentShare:h(e.value,i),previousValue:o,previousShare:t&&o!==void 0?h(o,i):void 0,delta:t&&o!==void 0?d(e.value,o):void 0}})}function De(e){return e.map(e=>{let t=Number(e.id),n=g(e.link);return{label:String(e.label??``)||i(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.views,...e.previousViews===void 0?{}:{previousValue:e.previousViews},...n?{href:n}:{},...Number.isFinite(t)&&t>0?{postId:t}:{},type:String(e.type??``)}})}function Oe(){let{reportParams:e}=te(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:a,isFetching:o,isError:c,refetch:l}=s((0,k.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),u=(0,k.useMemo)(()=>De(n?.rows??[]),[n]),d=f({origin:{report:`posts`,section:`posts-pages`}}),p=r;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`div`,{className:E.content,children:(0,A.jsx)(ae,{isLoading:a,isFetching:o,isError:u.length===0&&c,isEmpty:u.length===0,error:{description:i(`We couldn't load posts and pages. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},renderLoading:(0,A.jsx)(ne,{rows:10}),children:(0,A.jsx)(M,{rows:u,withComparison:p,detailSearch:d,rowsLabel:i(`Pages`,`jetpack-premium-analytics-pkg`)})})}),(0,A.jsxs)(b,{children:[(0,A.jsx)(y,{report:`posts`,section:`posts-pages`}),(0,A.jsx)(x,{exporter:de,status:{isLoading:a,isFetching:o,isError:t.isError},rowCount:u.length})]})]})}function D(e,t=!0){return e.map(e=>{let n=String(e.label??``),r=e.children?.length?D(e.children,!1):void 0,a=g(e.link),o=n;return t?o=pe(n):r&&(o=ue(n)),{label:o||i(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.value,type:`archive`,...e.previousValue===void 0?{}:{previousValue:e.previousValue},...a?{href:a}:{},...r?{children:r}:{}}})}function ke(){let{reportParams:e}=te(),{drillDownItem:t,drillDown:n,resetDrillDown:r}=ee(),{primary:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:l,isError:d,refetch:f}=u(e,{maxRows:10}),p=(0,k.useMemo)(()=>D((o?.rows??[]).filter(e=>String(e.label)!==`home`)),[o]),m=s,{activeRows:h,backLabel:g,isPathResolved:_}=(0,k.useMemo)(()=>{let e=p,n=null,r=null,a=!0;for(let o of t??[]){let t=e.find(e=>e.label===o);if(!t?.children?.length){a=!1;break}n=r??i(`All archives`,`jetpack-premium-analytics-pkg`),e=t.children,r=o}return{activeRows:e,backLabel:n,isPathResolved:a}},[p,t]);(0,k.useEffect)(()=>{t&&!_&&!c&&!l&&r()},[t,_,c,l,r]);let re=(0,k.useCallback)(e=>{n([...t??[],e.label])},[n,t]),ie=(0,k.useCallback)(()=>{let e=t??[];if(e.length<=1){r();return}n(e.slice(0,-1))},[n,t,r]),oe=h===p?null:(0,A.jsx)(ce,{label:g??i(`All archives`,`jetpack-premium-analytics-pkg`),ariaLabel:i(`Back to the previous archive list`,`jetpack-premium-analytics-pkg`),onClick:ie});return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(`div`,{className:E.content,children:[oe,(0,A.jsx)(ae,{isLoading:c,isFetching:l,isError:p.length===0&&d,isEmpty:h.length===0,error:{description:i(`We couldn't load archives. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:f}]},renderLoading:(0,A.jsx)(ne,{rows:10}),children:(0,A.jsx)(M,{rows:h,withComparison:m,onDrillDown:re,rowsLabel:i(`Archives`,`jetpack-premium-analytics-pkg`)})})]}),(0,A.jsxs)(b,{children:[(0,A.jsx)(y,{report:`posts`,section:`archives`}),(0,A.jsx)(x,{exporter:le,status:{isLoading:c,isFetching:l,isError:a.isError},rowCount:p.length})]})]})}function O({attributes:e={}}){let t=e.contentView??`posts`;return(0,A.jsx)(m,{attributes:e,children:(0,A.jsx)(`div`,{className:E.root,children:t===`archives`?(0,A.jsx)(ke,{}):(0,A.jsx)(Oe,{})})})}var k,A,j,M,Ae=t((()=>{l(),fe(),a(),k=e(n(),1),we(),A=o(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=({rows:e=[],withComparison:t=!1,onDrillDown:n,detailSearch:r={},rowsLabel:a})=>(0,A.jsx)(_,{chartTitle:i(`Top pages`,`jetpack-premium-analytics-pkg`),data:Ee(e,t,r,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:j,columns:{label:a,metric:`views`}})})),N,je=t((()=>{a(),N={attributes:[{id:`contentView`,label:i(`View`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:i(`Posts & pages`,`jetpack-premium-analytics-pkg`),value:`posts`},{label:i(`Archives`,`jetpack-premium-analytics-pkg`),value:`archives`}],relevance:`high`}],example:{attributes:{contentView:`posts`}}}})),P,F,I,L,R,z,B,V,Me=t((()=>{P=`jpa/stats-top-posts`,F=`jpa/page`,I=`Top pages`,L=`Your most viewed posts, pages, and archives.`,R={content:`Your most popular posts and pages, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e,contentView:t}){return(0,W.jsx)(O,{attributes:{contentView:t,reportParams:c(e)}})}function Ne({withComparison:e,contentView:t,...n}){return(0,W.jsx)(ve,{...n,widgetType:Fe,renderModule:Pe,renderComponent:O,attributes:{contentView:t,reportParams:c(e)}})}function U(e){return(0,W.jsx)(O,{attributes:{contentView:`posts`,reportParams:c(!1,e)}})}var W,Pe,Fe,G,Ie,K,q,J,Y,X,Z,Q,$;t((()=>{l(),re(),Se(),ge(),Ce(),oe(),me(),ye(),Ae(),je(),Me(),W=o(),ie(),xe(),Pe=`storybook/top-posts`,Fe=_e(V,N),G=e=>(0,W.jsx)(`div`,{style:{width:`100%`,height:`340px`},children:(0,W.jsx)(e,{})}),Ie={title:`Packages/Premium Analytics/Widgets/TopPosts`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`},contentView:{control:`inline-radio`,options:[`posts`,`archives`],description:`Which report the widget shows: posts & pages, or aggregate archive-page views. Rendered as an inline control in the widget frame header by the host.`}},parameters:{docs:{description:{component:'The "Most viewed" widget. Shows the most-viewed posts and pages as a ranked leaderboard, using the global dashboard date range; each row links to the published content, and the homepage-as-latest-posts views from the archives report are folded into the list. The `contentView` attribute switches to aggregate archive-page views (taxonomy, post-type, search, and date archives).'}}}},K={render:H,args:{withComparison:!1,contentView:`posts`},decorators:[G,v]},q={render:H,args:{withComparison:!0,contentView:`posts`},decorators:[G,v]},J={render:H,args:{withComparison:!0,contentView:`archives`},decorators:[G,v],parameters:{docs:{description:{story:`The Archives view: one aggregate row per archive type (taxonomy, post-type, and search archives), with comparison deltas when the previous period overlaps. Grouped rows drill down into their individual archive pages (taxonomies drill twice: taxonomy → terms) with a back link, following the Locations/Clicks drill-down convention. The homepage entry is surfaced in the Posts & pages view instead, matching the Stats card.`}}}},Y={render:e=>(0,W.jsx)(Ne,{...e}),args:{...be,withComparison:!0,contentView:`posts`},argTypes:{...he,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},X={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[S,v],beforeEach:()=>(C(`stats/top-posts`,`loading`),()=>C(`stats/top-posts`,null))},Z={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[S,v],beforeEach:()=>(C(`stats/top-posts`,`error`),()=>C(`stats/top-posts`,null))},Q={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[S,v],beforeEach:()=>(C(`stats/top-posts`,`empty`),()=>C(`stats/top-posts`,null))},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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