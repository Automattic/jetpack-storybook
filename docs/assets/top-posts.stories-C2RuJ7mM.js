import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i,u as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{t as s,yi as c}from"./build-module-DNhkEVJn.js";import{Dn as l,St as u,ot as d,t as f}from"./src-Cr7HbVgM.js";import{_ as p,dn as m,fn as h,h as ee,mn as g,o as te,x as _}from"./charts-provider-CIK4EFua.js";import{a as v}from"./src-DbkcHYC7.js";import"./rows-DAmD2BmE.js";import{r as y,t as b}from"./leaderboard-skeleton-Dkku7SAZ.js";import{n as ne,r as x}from"./with-story-router-Beljd9ki.js";import{n as re,r as ie}from"./register-report-mocks-yeAKzrTe.js";import{_ as ae,b as oe,i as se,m as ce}from"./leaderboard-B2LU2Pp3.js";import{t as le}from"./widget-state-B4PhPsC_.js";import{C as ue,b as de,o as fe,x as pe,y as me}from"./report-metric-Df9u0qG8.js";import{t as he}from"./src-IcZ4EWZz.js";import{a as ge,d as _e,f as ve,i as ye,n as be,p as xe,r as S,u as Se}from"./with-widget-canvas-CrpEdyMJ.js";import{n as Ce,t as we}from"./register-stats-mocks-DMY6OBci.js";import{n as Te,t as C}from"./force-stats-mock-state-DLwYcvho.js";var w,T,E,Ee=t((()=>{w=`_root_cb7tq_1`,T=`_content_cb7tq_10`,E={root:w,content:T}}));function De(e,t,n){return e.children?.length?n?{kind:`drillDown`,onClick:()=>n(e),ariaLabel:a(r(`View %s archive pages`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}:{kind:`postLink`,id:e.postId,href:e.href,search:t}}function Oe(e,t,n,r){let i=h(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,a)=>{let o=e.previousValue;return{id:`${a}-${e.href??e.label}`,...se({label:e.label,media:{kind:`none`},action:De(e,n,r)}),currentValue:e.value,currentShare:m(e.value,i),previousValue:o,previousShare:t&&o!==void 0?m(o,i):void 0,delta:t&&o!==void 0?g(e.value,o):void 0}})}function ke(e){return e.map(e=>{let t=Number(e.id),n=v(e.link);return{label:String(e.label??``)||r(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.views,...e.previousViews===void 0?{}:{previousValue:e.previousViews},...n?{href:n}:{},...Number.isFinite(t)&&t>0?{postId:t}:{},type:String(e.type??``)}})}function Ae(){let{reportParams:e}=_(),{primary:t,comparisonRows:n,hasComparison:i,isLoading:a,isFetching:o,isError:s,refetch:c}=u((0,k.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),l=(0,k.useMemo)(()=>ke(n?.rows??[]),[n]),d=ee({origin:{report:`posts`,section:`posts-pages`}}),f=i;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`div`,{className:E.content,children:(0,A.jsx)(le,{isLoading:a,isFetching:o,isError:l.length===0&&s,isEmpty:l.length===0,error:{description:r(`We couldn't load posts and pages. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},renderLoading:(0,A.jsx)(b,{rows:10}),children:(0,A.jsx)(M,{rows:l,withComparison:f,detailSearch:d})})}),(0,A.jsxs)(ce,{children:[(0,A.jsx)(oe,{report:`posts`,section:`posts-pages`}),(0,A.jsx)(fe,{exporter:ue,status:{isLoading:a,isFetching:o,isError:t.isError},rowCount:l.length})]})]})}function D(e,t=!0){return e.map(e=>{let n=String(e.label??``),i=e.children?.length?D(e.children,!1):void 0,a=v(e.link),o=n;return t?o=pe(n):i&&(o=de(n)),{label:o||r(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.value,type:`archive`,...e.previousValue===void 0?{}:{previousValue:e.previousValue},...a?{href:a}:{},...i?{children:i}:{}}})}function je(){let{reportParams:e}=_(),{drillDownItem:t,drillDown:n,resetDrillDown:i}=te(),{primary:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:l,isError:u,refetch:f}=d(e,{maxRows:10}),p=(0,k.useMemo)(()=>D((o?.rows??[]).filter(e=>String(e.label)!==`home`)),[o]),m=s,{activeRows:h,backLabel:ee,isPathResolved:g}=(0,k.useMemo)(()=>{let e=p,n=null,i=null,a=!0;for(let o of t??[]){let t=e.find(e=>e.label===o);if(!t?.children?.length){a=!1;break}n=i??r(`All archives`,`jetpack-premium-analytics-pkg`),e=t.children,i=o}return{activeRows:e,backLabel:n,isPathResolved:a}},[p,t]);(0,k.useEffect)(()=>{t&&!g&&!c&&!l&&i()},[t,g,c,l,i]);let v=(0,k.useCallback)(e=>{n([...t??[],e.label])},[n,t]),y=(0,k.useCallback)(()=>{let e=t??[];if(e.length<=1){i();return}n(e.slice(0,-1))},[n,t,i]),ne=h===p?null:(0,A.jsx)(ae,{label:ee??r(`All archives`,`jetpack-premium-analytics-pkg`),ariaLabel:r(`Back to the previous archive list`,`jetpack-premium-analytics-pkg`),onClick:y});return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(`div`,{className:E.content,children:[ne,(0,A.jsx)(le,{isLoading:c,isFetching:l,isError:p.length===0&&u,isEmpty:h.length===0,error:{description:r(`We couldn't load archives. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:f}]},renderLoading:(0,A.jsx)(b,{rows:10}),children:(0,A.jsx)(M,{rows:h,withComparison:m,onDrillDown:v})})]}),(0,A.jsxs)(ce,{children:[(0,A.jsx)(oe,{report:`posts`,section:`archives`}),(0,A.jsx)(fe,{exporter:me,status:{isLoading:c,isFetching:l,isError:a.isError},rowCount:p.length})]})]})}function O({attributes:e={}}){let t=e.contentView??`posts`;return(0,A.jsx)(p,{attributes:e,children:(0,A.jsx)(`div`,{className:E.root,children:t===`archives`?(0,A.jsx)(je,{}):(0,A.jsx)(Ae,{})})})}var k,A,j,M,Me=t((()=>{f(),he(),i(),k=e(n(),1),Ee(),A=o(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=({rows:e=[],withComparison:t=!1,onDrillDown:n,detailSearch:r={}})=>(0,A.jsx)(y,{data:Oe(e,t,r,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:j})})),N,Ne=t((()=>{i(),s(),N={icon:c,attributes:[{id:`contentView`,label:r(`View`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:r(`Posts & pages`,`jetpack-premium-analytics-pkg`),value:`posts`},{label:r(`Archives`,`jetpack-premium-analytics-pkg`),value:`archives`}],relevance:`high`}],example:{attributes:{contentView:`posts`}}}})),P,F,I,L,R,z,B,Pe=t((()=>{P=`jpa/stats-top-posts`,F=`Top pages`,I=`Your most viewed posts, pages, and archives.`,L={content:`Your most popular posts and pages, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e,contentView:t}){return(0,U.jsx)(O,{attributes:{contentView:t,reportParams:l(e)}})}function Fe({withComparison:e,contentView:t,...n}){return(0,U.jsx)(_e,{...n,widgetType:W,renderModule:Ie,renderComponent:O,attributes:{contentView:t,reportParams:l(e)}})}function H(e){return(0,U.jsx)(O,{attributes:{contentView:`posts`,reportParams:l(!1,e)}})}var U,Ie,W,G,Le,K,q,J,Y,X,Z,Q,$;t((()=>{f(),re(),we(),ve(),Te(),ne(),ge(),be(),Me(),Ne(),Pe(),U=o(),ie(),Ce(),Ie=`storybook/top-posts`,W=ye(B,N),G=e=>(0,U.jsx)(`div`,{style:{width:`100%`,height:`340px`},children:(0,U.jsx)(e,{})}),Le={title:`Packages/Premium Analytics/Widgets/TopPosts`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`},contentView:{control:`inline-radio`,options:[`posts`,`archives`],description:`Which report the widget shows: posts & pages, or aggregate archive-page views. Rendered as an inline control in the widget frame header by the host.`}},parameters:{docs:{description:{component:'The "Most viewed" widget. Shows the most-viewed posts and pages as a ranked leaderboard, using the global dashboard date range; each row links to the published content, and the homepage-as-latest-posts views from the archives report are folded into the list. The `contentView` attribute switches to aggregate archive-page views (taxonomy, post-type, search, and date archives).'}}}},K={render:V,args:{withComparison:!1,contentView:`posts`},decorators:[G,x]},q={render:V,args:{withComparison:!0,contentView:`posts`},decorators:[G,x]},J={render:V,args:{withComparison:!0,contentView:`archives`},decorators:[G,x],parameters:{docs:{description:{story:`The Archives view: one aggregate row per archive type (taxonomy, post-type, and search archives), with comparison deltas when the previous period overlaps. Grouped rows drill down into their individual archive pages (taxonomies drill twice: taxonomy → terms) with a back link, following the Locations/Clicks drill-down convention. The homepage entry is surfaced in the Posts & pages view instead, matching the Stats card.`}}}},Y={render:e=>(0,U.jsx)(Fe,{...e}),args:{...Se,withComparison:!0,contentView:`posts`},argTypes:{...xe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},X={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/top-posts`,`loading`),()=>C(`stats/top-posts`,null))},Z={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/top-posts`,`error`),()=>C(`stats/top-posts`,null))},Q={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/top-posts`,`empty`),()=>C(`stats/top-posts`,null))},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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