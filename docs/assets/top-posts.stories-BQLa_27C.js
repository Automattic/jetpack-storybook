import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i,u as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{t as s,yi as c}from"./build-module-DNhkEVJn.js";import{_ as l,dn as u,fn as d,h as f,mn as ee,o as te,x as p}from"./charts-provider-anfyGsni.js";import{St as m,fn as h,ot as ne,t as g}from"./src-BA0D9M6V.js";import"./rows-DAmD2BmE.js";import{r as _,t as v}from"./leaderboard-skeleton-XF9iwas0.js";import{n as y,r as b}from"./with-story-router-D7Twxnvj.js";import{n as re,r as ie}from"./register-report-mocks-DpGO4M3z.js";import{_ as ae,b as oe,i as se,m as ce}from"./leaderboard-elUnVk74.js";import{t as le}from"./widget-state-Cmr7gNAU.js";import{a as ue}from"./src-2IHc1q3d.js";import{C as de,b as fe,o as pe,x as me,y as he}from"./report-metric-Bxx4Rg9I.js";import{t as ge}from"./src-CWZ4y_mc.js";import{a as _e,d as ve,f as ye,i as be,n as xe,p as Se,r as x,u as Ce}from"./with-widget-canvas-lVH9KC5b.js";import{n as we,t as Te}from"./register-stats-mocks-Bg0pSd3s.js";import{n as Ee,t as S}from"./force-stats-mock-state-DXFycYqj.js";var C,w,T,De=t((()=>{C=`_root_cb7tq_1`,w=`_content_cb7tq_10`,T={root:C,content:w}}));function Oe(e,t,n){return e.children?.length?n?{kind:`drillDown`,onClick:()=>n(e),ariaLabel:a(r(`View %s archive pages`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}:{kind:`postLink`,id:e.postId,href:e.href,search:t}}function ke(e,t,n,r){let i=d(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,a)=>{let o=e.previousValue;return{id:`${a}-${e.href??e.label}`,...se({label:e.label,media:{kind:`none`},action:Oe(e,n,r)}),currentValue:e.value,currentShare:u(e.value,i),previousValue:o,previousShare:t&&o!==void 0?u(o,i):void 0,delta:t&&o!==void 0?ee(e.value,o):void 0}})}function Ae(e){return e.map(e=>{let t=Number(e.id),n=ue(e.link);return{label:String(e.label??``)||r(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.views,...e.previousViews===void 0?{}:{previousValue:e.previousViews},...n?{href:n}:{},...Number.isFinite(t)&&t>0?{postId:t}:{},type:String(e.type??``)}})}function je(){let{reportParams:e}=p(),{primary:t,comparisonRows:n,hasComparison:i,isLoading:a,isFetching:o,isError:s,refetch:c}=m((0,O.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),l=(0,O.useMemo)(()=>Ae(n?.rows??[]),[n]),u=f({origin:{report:`posts`,section:`posts-pages`}}),d=i;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`div`,{className:T.content,children:(0,k.jsx)(le,{isLoading:a,isFetching:o,isError:l.length===0&&s,isEmpty:l.length===0,error:{description:r(`We couldn't load posts and pages. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},renderLoading:(0,k.jsx)(v,{rows:10}),children:(0,k.jsx)(j,{rows:l,withComparison:d,detailSearch:u})})}),(0,k.jsxs)(ce,{children:[(0,k.jsx)(oe,{report:`posts`,section:`posts-pages`}),(0,k.jsx)(pe,{exporter:de,status:{isLoading:a,isFetching:o,isError:t.isError},rowCount:l.length})]})]})}function E(e,t=!0){return e.map(e=>{let n=String(e.label??``),i=e.children?.length?E(e.children,!1):void 0,a=ue(e.link),o=n;return t?o=me(n):i&&(o=fe(n)),{label:o||r(`Untitled`,`jetpack-premium-analytics-pkg`),value:e.value,type:`archive`,...e.previousValue===void 0?{}:{previousValue:e.previousValue},...a?{href:a}:{},...i?{children:i}:{}}})}function Me(){let{reportParams:e}=p(),{drillDownItem:t,drillDown:n,resetDrillDown:i}=te(),{primary:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:l,isError:u,refetch:d}=ne(e,{maxRows:10}),f=(0,O.useMemo)(()=>E((o?.rows??[]).filter(e=>String(e.label)!==`home`)),[o]),ee=s,{activeRows:m,backLabel:h,isPathResolved:g}=(0,O.useMemo)(()=>{let e=f,n=null,i=null,a=!0;for(let o of t??[]){let t=e.find(e=>e.label===o);if(!t?.children?.length){a=!1;break}n=i??r(`All archives`,`jetpack-premium-analytics-pkg`),e=t.children,i=o}return{activeRows:e,backLabel:n,isPathResolved:a}},[f,t]);(0,O.useEffect)(()=>{t&&!g&&!c&&!l&&i()},[t,g,c,l,i]);let _=(0,O.useCallback)(e=>{n([...t??[],e.label])},[n,t]),y=(0,O.useCallback)(()=>{let e=t??[];if(e.length<=1){i();return}n(e.slice(0,-1))},[n,t,i]),b=m===f?null:(0,k.jsx)(ae,{label:h??r(`All archives`,`jetpack-premium-analytics-pkg`),ariaLabel:r(`Back to the previous archive list`,`jetpack-premium-analytics-pkg`),onClick:y});return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(`div`,{className:T.content,children:[b,(0,k.jsx)(le,{isLoading:c,isFetching:l,isError:f.length===0&&u,isEmpty:m.length===0,error:{description:r(`We couldn't load archives. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},renderLoading:(0,k.jsx)(v,{rows:10}),children:(0,k.jsx)(j,{rows:m,withComparison:ee,onDrillDown:_})})]}),(0,k.jsxs)(ce,{children:[(0,k.jsx)(oe,{report:`posts`,section:`archives`}),(0,k.jsx)(pe,{exporter:he,status:{isLoading:c,isFetching:l,isError:a.isError},rowCount:f.length})]})]})}function D({attributes:e={}}){let t=e.contentView??`posts`;return(0,k.jsx)(l,{attributes:e,children:(0,k.jsx)(`div`,{className:T.root,children:t===`archives`?(0,k.jsx)(Me,{}):(0,k.jsx)(je,{})})})}var O,k,A,j,Ne=t((()=>{g(),ge(),i(),O=e(n(),1),De(),k=o(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j=({rows:e=[],withComparison:t=!1,onDrillDown:n,detailSearch:r={}})=>(0,k.jsx)(_,{data:ke(e,t,r,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:A})})),M,Pe=t((()=>{i(),s(),M={icon:c,attributes:[{id:`contentView`,label:r(`View`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:r(`Posts & pages`,`jetpack-premium-analytics-pkg`),value:`posts`},{label:r(`Archives`,`jetpack-premium-analytics-pkg`),value:`archives`}],relevance:`high`}],example:{attributes:{contentView:`posts`}}}})),N,P,F,I,L,R,z,Fe=t((()=>{N=`jpa/stats-top-posts`,P=`Top pages`,F=`Your most viewed posts, pages, and archives.`,I={content:`Your most popular posts and pages, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({withComparison:e,contentView:t}){return(0,H.jsx)(D,{attributes:{contentView:t,reportParams:h(e)}})}function Ie({withComparison:e,contentView:t,...n}){return(0,H.jsx)(ve,{...n,widgetType:W,renderModule:U,renderComponent:D,attributes:{contentView:t,reportParams:h(e)}})}function V(e){return(0,H.jsx)(D,{attributes:{contentView:`posts`,reportParams:h(!1,e)}})}var H,U,W,G,Le,K,q,J,Y,X,Z,Q,$;t((()=>{g(),re(),Te(),ye(),Ee(),y(),_e(),xe(),Ne(),Pe(),Fe(),H=o(),ie(),we(),U=`storybook/top-posts`,W=be(z,M),G=e=>(0,H.jsx)(`div`,{style:{width:`100%`,height:`340px`},children:(0,H.jsx)(e,{})}),Le={title:`Packages/Premium Analytics/Widgets/TopPosts`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`},contentView:{control:`inline-radio`,options:[`posts`,`archives`],description:`Which report the widget shows: posts & pages, or aggregate archive-page views. Rendered as an inline control in the widget frame header by the host.`}},parameters:{docs:{description:{component:'The "Most viewed" widget. Shows the most-viewed posts and pages as a ranked leaderboard, using the global dashboard date range; each row links to the published content, and the homepage-as-latest-posts views from the archives report are folded into the list. The `contentView` attribute switches to aggregate archive-page views (taxonomy, post-type, search, and date archives).'}}}},K={render:B,args:{withComparison:!1,contentView:`posts`},decorators:[G,b]},q={render:B,args:{withComparison:!0,contentView:`posts`},decorators:[G,b]},J={render:B,args:{withComparison:!0,contentView:`archives`},decorators:[G,b],parameters:{docs:{description:{story:`The Archives view: one aggregate row per archive type (taxonomy, post-type, and search archives), with comparison deltas when the previous period overlaps. Grouped rows drill down into their individual archive pages (taxonomies drill twice: taxonomy → terms) with a back link, following the Locations/Clicks drill-down convention. The homepage entry is surfaced in the Posts & pages view instead, matching the Stats card.`}}}},Y={render:e=>(0,H.jsx)(Ie,{...e}),args:{...Ce,withComparison:!0,contentView:`posts`},argTypes:{...Se,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},X={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/top-posts`,`loading`),()=>S(`stats/top-posts`,null))},Z={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/top-posts`,`error`),()=>S(`stats/top-posts`,null))},Q={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/top-posts`,`empty`),()=>S(`stats/top-posts`,null))},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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