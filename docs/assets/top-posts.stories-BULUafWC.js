import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{b as r,n as i,t as a}from"./build-module-BXs6jvWf.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{A as s,B as ee,I as c,M as l,O as u,f as d,k as f,m as p,o as m}from"./charts-provider-CWhu2BwR.js";import{Ct as te,Lt as h,bn as g,t as _}from"./src-CzKIwJBE.js";import{a as v}from"./src-DcbOfRWj.js";import{t as ne}from"./widget-state-DBojU_uo.js";import{U as re,t as y}from"./src-nLhh7Zmz.js";import"./constants-fgWwZmhw.js";import{r as ie,t as b}from"./leaderboard-skeleton--1Y4SvwN.js";import{n as ae,r as oe}from"./register-report-mocks-NHXSwhdT.js";import{s as se}from"./locations-geo-chart-5CfKayyL.js";import{n as ce,r as x}from"./with-story-router-DMx_gM_Q.js";import{a as le,c as ue,i as de,l as fe,n as pe,o as me,r as S,s as he}from"./with-widget-canvas-D8wrVwGz.js";import{n as ge,t as _e}from"./register-stats-mocks-DjNQZaeB.js";import{n as ve,t as C}from"./force-stats-mock-state-DYr-BqQo.js";var w,T,E,ye=e((()=>{w=`_root_cb7tq_1`,T=`_content_cb7tq_10`,E={root:w,content:T}}));function be(e,t,n){return e.children?.length?n?{kind:`drillDown`,onClick:()=>n(e),ariaLabel:r(i(`View %s archive pages`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}:{kind:`postLink`,id:e.postId,href:e.href,search:t}}function xe(e,t,n){return e.map((e,r)=>({id:`${r}-${e.href??e.label}`,...se({label:e.label,media:{kind:`none`},action:be(e,t,n)}),currentValue:e.value,previousValue:e.previousValue}))}function Se(e){return e.map(e=>{let t=Number(e.id),n=v(e.link);return{label:String(e.label??``)||i(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.views,...e.previousViews===void 0?{}:{previousValue:e.previousViews},...n?{href:n}:{},...Number.isFinite(t)&&t>0?{postId:t}:{},type:String(e.type??``)}})}function Ce(){let{reportParams:e}=ee(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:a,isFetching:o,isError:s,refetch:c}=h((0,k.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),u=(0,k.useMemo)(()=>Se(n?.rows??[]),[n]),f=p({origin:{report:`posts`,section:`posts-pages`}}),m=r;return d({report:`posts`,section:`posts-pages`,csv:{exporter:l,status:{isLoading:a,isFetching:o,isError:t.isError},rowCount:u.length}}),(0,A.jsx)(`div`,{className:E.content,children:(0,A.jsx)(ne,{isLoading:a,isFetching:o,isError:u.length===0&&s,isEmpty:u.length===0,error:{description:i(`We couldn't load posts and pages. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},renderLoading:(0,A.jsx)(b,{rows:10}),children:(0,A.jsx)(M,{rows:u,withComparison:m,detailSearch:f,rowsLabel:i(`Pages`,`jetpack-premium-analytics-pkg`)})})})}function D(e,t=!0){return e.map(e=>{let n=String(e.label??``),r=e.children?.length?D(e.children,!1):void 0,a=v(e.link),o=n;return t?o=s(n):r&&(o=f(n)),{label:o||i(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.value,type:`archive`,...e.previousValue===void 0?{}:{previousValue:e.previousValue},...a?{href:a}:{},...r?{children:r}:{}}})}function we(){let{reportParams:e}=ee(),{drillDownItem:t,drillDown:n,resetDrillDown:r}=m(),{primary:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:l,isError:f,refetch:p}=te(e,{maxRows:10}),h=(0,k.useMemo)(()=>D((o?.rows??[]).filter(e=>String(e.label)!==`home`)),[o]),g=s,{activeRows:_,backLabel:v,isPathResolved:y}=(0,k.useMemo)(()=>{let e=h,n=null,r=null,a=!0;for(let o of t??[]){let t=e.find(e=>e.label===o);if(!t?.children?.length){a=!1;break}n=r??i(`All archives`,`jetpack-premium-analytics-pkg`),e=t.children,r=o}return{activeRows:e,backLabel:n,isPathResolved:a}},[h,t]);(0,k.useEffect)(()=>{t&&!y&&!c&&!l&&r()},[t,y,c,l,r]);let ie=(0,k.useCallback)(e=>{n([...t??[],e.label])},[n,t]),ae=(0,k.useCallback)(()=>{let e=t??[];if(e.length<=1){r();return}n(e.slice(0,-1))},[n,t,r]),oe=_===h?null:(0,A.jsx)(re,{label:v??i(`All archives`,`jetpack-premium-analytics-pkg`),ariaLabel:i(`Back to the previous archive list`,`jetpack-premium-analytics-pkg`),onClick:ae});return d({report:`posts`,section:`archives`,csv:{exporter:u,status:{isLoading:c,isFetching:l,isError:a.isError},rowCount:h.length}}),(0,A.jsxs)(`div`,{className:E.content,children:[oe,(0,A.jsx)(ne,{isLoading:c,isFetching:l,isError:h.length===0&&f,isEmpty:_.length===0,error:{description:i(`We couldn't load archives. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:p}]},renderLoading:(0,A.jsx)(b,{rows:10}),children:(0,A.jsx)(M,{rows:_,withComparison:g,onDrillDown:ie,rowsLabel:i(`Archives`,`jetpack-premium-analytics-pkg`)})})]})}function O({attributes:e={}}){let t=e.contentView??`posts`;return(0,A.jsx)(c,{attributes:e,children:(0,A.jsx)(`div`,{className:E.root,children:t===`archives`?(0,A.jsx)(we,{}):(0,A.jsx)(Ce,{})})})}var k,A,j,M,Te=e((()=>{_(),y(),a(),k=t(n(),1),ye(),A=o(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=({rows:e=[],withComparison:t=!1,onDrillDown:n,detailSearch:r={},rowsLabel:a})=>(0,A.jsx)(ie,{chartTitle:i(`Top pages`,`jetpack-premium-analytics-pkg`),data:xe(e,r,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:j,columns:{label:a,metric:`views`}})})),N,Ee=e((()=>{N={example:{attributes:{contentView:`posts`}}}})),P,F,I,L,R,z,B,V,De,Oe=e((()=>{P=`jpa/stats-top-posts`,F=`jpa/page`,I=`Top pages`,L=`Your most viewed posts, pages, and archives.`,R={content:`Your most popular posts and pages, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V=[{id:`contentView`,type:`jpa/select`,label:`View`,relevance:`high`,elements:[{value:`posts`,label:`Posts & pages`},{value:`archives`,label:`Archives`}]}],De={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B,attributes:V}}));function H({withComparison:e,contentView:t}){return(0,W.jsx)(O,{attributes:{contentView:t,reportParams:g(e)}})}function ke({withComparison:e,contentView:t,...n}){return(0,W.jsx)(he,{...n,widgetType:je,renderModule:Ae,renderComponent:O,attributes:{contentView:t,reportParams:g(e)}})}function U(e){return(0,W.jsx)(O,{attributes:{contentView:`posts`,reportParams:g(!1,e)}})}var W,Ae,je,G,Me,K,q,J,Y,X,Z,Q,$;e((()=>{_(),ae(),_e(),ue(),ve(),ce(),le(),pe(),Te(),Ee(),Oe(),W=o(),oe(),ge(),Ae=`storybook/top-posts`,je=de(De,N),G=e=>(0,W.jsx)(`div`,{style:{width:`100%`,height:`340px`},children:(0,W.jsx)(e,{})}),Me={title:`Packages/Premium Analytics/Widgets/TopPosts`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`},contentView:{control:`inline-radio`,options:[`posts`,`archives`],description:`Which report the widget shows: posts & pages, or aggregate archive-page views. Rendered as an inline control in the widget frame header by the host.`}},parameters:{docs:{description:{component:'The "Most viewed" widget. Shows the most-viewed posts and pages as a ranked leaderboard, using the global dashboard date range; each row links to the published content, and the homepage-as-latest-posts views from the archives report are folded into the list. The `contentView` attribute switches to aggregate archive-page views (taxonomy, post-type, search, and date archives).'}}}},K={render:H,args:{withComparison:!1,contentView:`posts`},decorators:[G,x]},q={render:H,args:{withComparison:!0,contentView:`posts`},decorators:[G,x]},J={render:H,args:{withComparison:!0,contentView:`archives`},decorators:[G,x],parameters:{docs:{description:{story:`The Archives view: one aggregate row per archive type (taxonomy, post-type, and search archives), with comparison deltas when the previous period overlaps. Grouped rows drill down into their individual archive pages (taxonomies drill twice: taxonomy → terms) with a back link, following the Locations/Clicks drill-down convention. The homepage entry is surfaced in the Posts & pages view instead, matching the Stats card.`}}}},Y={render:e=>(0,W.jsx)(ke,{...e}),args:{...me,withComparison:!0,contentView:`posts`},argTypes:{...fe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},X={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/top-posts`,`loading`),()=>C(`stats/top-posts`,null))},Z={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/top-posts`,`error`),()=>C(`stats/top-posts`,null))},Q={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/top-posts`,`empty`),()=>C(`stats/top-posts`,null))},$=[`Default`,`WithComparison`,`Archives`,`WidgetDashboardWithWidget`,`Loading`,`Error`,`Empty`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
glyph and "We couldn’t find results for this time period.").`,...Q.parameters?.docs?.description}}}}))();export{J as Archives,K as Default,Q as Empty,Z as Error,X as Loading,Y as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,Me as default};