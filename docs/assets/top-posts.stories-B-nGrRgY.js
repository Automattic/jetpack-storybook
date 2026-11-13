import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{b as r,n as i,t as a}from"./build-module-BXs6jvWf.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{Bt as s,Cn as c,Et as l,t as u}from"./src-Bm9MmJNJ.js";import{A as d,H as f,I as p,M as m,O as ee,f as te,k as h,m as g,o as ne}from"./charts-provider--4PxmYT1.js";import{a as _}from"./src-Bi28EiYF.js";import{t as v}from"./widget-state-DnbF8hrz.js";import{G as re,i as y,n as ie,r as b}from"./with-story-router-BHhTIJcO.js";import"./constants-Cx6tCf49.js";import{r as ae,t as oe}from"./leaderboard-skeleton-BhhbTeeJ.js";import{n as se,r as ce}from"./register-report-mocks-D3lWkH8m.js";import{s as le}from"./locations-geo-chart-CcaJS0IV.js";import{a as ue,c as de,i as x,l as fe,o as pe,r as me,s as he,u as ge}from"./with-widget-canvas-ZzmEYGII.js";import{n as _e,t as ve}from"./register-stats-mocks-BLfWbTqK.js";import{n as ye,t as S}from"./force-stats-mock-state-fgUq0aLM.js";var C,w,T,be=e((()=>{C=`_root_cb7tq_1`,w=`_content_cb7tq_10`,T={root:C,content:w}}));function xe(e,t,n){return e.children?.length?n?{kind:`drillDown`,onClick:()=>n(e),ariaLabel:r(i(`View %s archive pages`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}:{kind:`postLink`,id:e.postId,href:e.href,search:t}}function Se(e,t,n){return e.map((e,r)=>({id:`${r}-${e.href??e.label}`,...le({label:e.label,media:{kind:`none`},action:xe(e,t,n)}),currentValue:e.value,previousValue:e.previousValue}))}function Ce(e){return e.map(e=>{let t=Number(e.id),n=_(e.link);return{label:String(e.label??``)||i(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.views,...e.previousViews===void 0?{}:{previousValue:e.previousViews},...n?{href:n}:{},...Number.isFinite(t)&&t>0?{postId:t}:{},type:String(e.type??``)}})}function we(){let{reportParams:e}=f(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:a,isFetching:o,isError:c,refetch:l}=s((0,O.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),u=(0,O.useMemo)(()=>Ce(n?.rows??[]),[n]),d=g({origin:{report:`posts`,section:`posts-pages`}}),p=r;return te({report:`posts`,section:`posts-pages`,csv:{exporter:m,status:{isLoading:a,isFetching:o,isError:t.isError},rowCount:u.length}}),(0,k.jsx)(`div`,{className:T.content,children:(0,k.jsx)(v,{isLoading:a,isFetching:o,isError:u.length===0&&c,isEmpty:u.length===0,error:{description:i(`We couldn't load posts and pages. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},renderLoading:(0,k.jsx)(oe,{rows:10}),children:(0,k.jsx)(j,{rows:u,withComparison:p,detailSearch:d,rowsLabel:i(`Pages`,`jetpack-premium-analytics-pkg`)})})})}function E(e,t=!0){return e.map(e=>{let n=String(e.label??``),r=e.children?.length?E(e.children,!1):void 0,a=_(e.link),o=n;return t?o=d(n):r&&(o=h(n)),{label:o||i(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.value,type:`archive`,...e.previousValue===void 0?{}:{previousValue:e.previousValue},...a?{href:a}:{},...r?{children:r}:{}}})}function Te(){let{reportParams:e}=f(),{drillDownItem:t,drillDown:n,resetDrillDown:r}=ne(),{primary:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:u,isError:d,refetch:p}=l(e,{maxRows:10}),m=(0,O.useMemo)(()=>E((o?.rows??[]).filter(e=>String(e.label)!==`home`)),[o]),h=s,{activeRows:g,backLabel:_,isPathResolved:y}=(0,O.useMemo)(()=>{let e=m,n=null,r=null,a=!0;for(let o of t??[]){let t=e.find(e=>e.label===o);if(!t?.children?.length){a=!1;break}n=r??i(`All archives`,`jetpack-premium-analytics-pkg`),e=t.children,r=o}return{activeRows:e,backLabel:n,isPathResolved:a}},[m,t]);(0,O.useEffect)(()=>{t&&!y&&!c&&!u&&r()},[t,y,c,u,r]);let ie=(0,O.useCallback)(e=>{n([...t??[],e.label])},[n,t]),b=(0,O.useCallback)(()=>{let e=t??[];if(e.length<=1){r();return}n(e.slice(0,-1))},[n,t,r]),ae=g===m?null:(0,k.jsx)(re,{label:_??i(`All archives`,`jetpack-premium-analytics-pkg`),ariaLabel:i(`Back to the previous archive list`,`jetpack-premium-analytics-pkg`),onClick:b});return te({report:`posts`,section:`archives`,csv:{exporter:ee,status:{isLoading:c,isFetching:u,isError:a.isError},rowCount:m.length}}),(0,k.jsxs)(`div`,{className:T.content,children:[ae,(0,k.jsx)(v,{isLoading:c,isFetching:u,isError:m.length===0&&d,isEmpty:g.length===0,error:{description:i(`We couldn't load archives. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:p}]},renderLoading:(0,k.jsx)(oe,{rows:10}),children:(0,k.jsx)(j,{rows:g,withComparison:h,onDrillDown:ie,rowsLabel:i(`Archives`,`jetpack-premium-analytics-pkg`)})})]})}function D({attributes:e={}}){let t=e.contentView??`posts`;return(0,k.jsx)(p,{attributes:e,children:(0,k.jsx)(`div`,{className:T.root,children:t===`archives`?(0,k.jsx)(Te,{}):(0,k.jsx)(we,{})})})}var O,k,A,j,Ee=e((()=>{u(),y(),a(),O=t(n(),1),be(),k=o(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j=({rows:e=[],withComparison:t=!1,onDrillDown:n,detailSearch:r={},rowsLabel:i})=>(0,k.jsx)(ae,{data:Se(e,r,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:A,columns:{label:i,metric:`views`}})})),M,De=e((()=>{M={example:{attributes:{contentView:`posts`}}}})),N,P,F,I,L,R,z,B,V,Oe=e((()=>{N=`jpa/stats-top-posts`,P=`jpa/page`,F=`Top pages`,I=`Your most viewed posts, pages, and archives.`,L={content:`Your most popular posts and pages, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B=[{id:`contentView`,type:`jpa/select`,label:`View`,relevance:`high`,elements:[{value:`posts`,label:`Posts & pages`},{value:`archives`,label:`Archives`}]}],V={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z,attributes:B}}));function H({withComparison:e,contentView:t}){return(0,W.jsx)(D,{attributes:{contentView:t,reportParams:c(e)}})}function ke({withComparison:e,contentView:t,...n}){return(0,W.jsx)(de,{...n,widgetType:je,renderModule:Ae,renderComponent:D,attributes:{contentView:t,reportParams:c(e)}})}function U(e){return(0,W.jsx)(D,{attributes:{contentView:`posts`,reportParams:c(!1,e)}})}var W,Ae,je,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),se(),ve(),fe(),ye(),ie(),pe(),me(),Ee(),De(),Oe(),W=o(),ce(),_e(),Ae=`storybook/top-posts`,je=ue(V,M),G={title:`Packages/Premium Analytics/Widgets/TopPosts`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`},contentView:{control:`inline-radio`,options:[`posts`,`archives`],description:`Which report the widget shows: posts & pages, or aggregate archive-page views. Rendered as an inline control in the widget frame header by the host.`}},parameters:{docs:{description:{component:'The "Most viewed" widget. Shows the most-viewed posts and pages as a ranked leaderboard, using the global dashboard date range; each row links to the published content, and the homepage-as-latest-posts views from the archives report are folded into the list. The `contentView` attribute switches to aggregate archive-page views (taxonomy, post-type, search, and date archives).'}}}},K={render:H,args:{withComparison:!1,contentView:`posts`},decorators:[x,b]},q={render:H,args:{withComparison:!0,contentView:`posts`},decorators:[x,b]},J={render:H,args:{withComparison:!0,contentView:`archives`},decorators:[x,b],parameters:{docs:{description:{story:`The Archives view: one aggregate row per archive type (taxonomy, post-type, and search archives), with comparison deltas when the previous period overlaps. Grouped rows drill down into their individual archive pages (taxonomies drill twice: taxonomy → terms) with a back link, following the Locations/Clicks drill-down convention. The homepage entry is surfaced in the Posts & pages view instead, matching the Stats card.`}}}},Y={tags:[`widget-dashboard`],render:e=>(0,W.jsx)(ke,{...e}),args:{...he,withComparison:!0,contentView:`posts`},argTypes:{...ge,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},X={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/top-posts`,`loading`),()=>S(`stats/top-posts`,null))},Z={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/top-posts`,`error`),()=>S(`stats/top-posts`,null))},Q={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/top-posts`,`empty`),()=>S(`stats/top-posts`,null))},$=[`Default`,`WithComparison`,`Archives`,`WidgetDashboardWithWidget`,`Loading`,`Error`,`Empty`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderTopPostsWidget,
  args: {
    withComparison: false,
    contentView: 'posts'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTopPostsWidget,
  args: {
    withComparison: true,
    contentView: 'posts'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderTopPostsWidget,
  args: {
    withComparison: true,
    contentView: 'archives'
  },
  decorators: [withWidgetCanvas, withStoryRouter],
  parameters: {
    docs: {
      description: {
        story: 'The Archives view: one aggregate row per archive type (taxonomy, post-type, and search archives), with comparison deltas when the previous period overlaps. Grouped rows drill down into their individual archive pages (taxonomies drill twice: taxonomy → terms) with a back link, following the Locations/Clicks drill-down convention. The homepage entry is surfaced in the Posts & pages view instead, matching the Stats card.'
      }
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  tags: ['widget-dashboard'],
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
glyph and "We couldn’t find results for this time period.").`,...Q.parameters?.docs?.description}}}}))();export{J as Archives,K as Default,Q as Empty,Z as Error,X as Loading,Y as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,G as default};