import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{N as i,t as a}from"./build-module-DMs68Vfd.js";import{On as o,n as s}from"./build-module-_6UNQmiR.js";import{Et as c,d as l,f as u,s as d,z as f}from"./hooks-BNS1kAO8.js";import{M as p,t as m,w as h}from"./build-module-Dn-OpUpS.js";import{o as g,t as _}from"./src-Df1rBecl.js";import{D as v}from"./chart-tooltip-B4-U7vwx.js";import{t as y}from"./leaderboard-chart-Kz1JOxEx.js";import{n as b,r as x,t as ee}from"./register-report-mocks-BXeKjVVl.js";import{t as te}from"./widget-state-LTMavFMO.js";import{i as ne,n as re,r as ie,t as S}from"./widget-dashboard-with-widget-CDzNDE4g.js";import{t as C}from"./src-sO3IKnq7.js";var w,T,E,D,O,k=e((()=>{w=`_root_19s7c_1`,T=`_content_19s7c_9`,E=`_itemLabel_19s7c_17`,D=`_itemLabelText_19s7c_23`,O={root:w,content:T,itemLabel:E,itemLabelText:D}}));function A(e){return typeof e.label==`string`?e.label:String(e.label)}function j({reportParams:e,max:t}){let{primary:n,comparison:r,hasComparison:i,isFetching:a,refetch:o}=f(e),s=n.data?.data?.[0]?.items??[],c=r.data?.data?.[0]?.items??[],l=new Map(c.map(e=>[A(e),e.views])),u=i&&!r.isError,d=s.map(e=>({label:A(e),views:e.views,previousViews:u?l.get(A(e))??0:0})).slice(0,t>0?t:void 0);return{data:d,isLoading:n.isLoading||i&&r.isLoading,isFetching:a,isError:d.length===0&&(n.isError||i&&r.isError),hasComparison:u,refetch:o}}var M=e((()=>{u()}));function ae({max:e=10}){let{reportParams:n}=l(),{data:r,isLoading:a,isFetching:o,isError:s,hasComparison:c,refetch:u}=j({reportParams:n,max:e}),d=(0,i.useMemo)(()=>{let e=Math.max(...r.map(e=>e.views),0),t=Math.max(...r.map(e=>e.previousViews),0);return r.map((n,r)=>({id:`${r}-${n.label}`,label:(0,P.jsx)(h,{align:`center`,className:O.itemLabel,children:(0,P.jsx)(p,{className:O.itemLabelText,children:n.label})}),currentValue:n.views,previousValue:n.previousViews,currentShare:e>0?n.views/e*100:0,previousShare:t>0?n.previousViews/t*100:0,delta:c?v(n.views,n.previousViews):0}))},[r,c]);return(0,P.jsx)(h,{className:O.root,children:(0,P.jsx)(`div`,{className:O.content,children:(0,P.jsx)(te,{isLoading:a,isFetching:o,isError:s,isEmpty:r.length===0,error:{description:t(`We couldn't load search terms. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:u}]},empty:{icon:g,description:t(`No search terms in this period.`,`jetpack-premium-analytics`)},children:(0,P.jsx)(y,{data:d,withComparison:c,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})})})}function N({attributes:e={}}){return(0,P.jsx)(d,{attributes:e,children:(0,P.jsx)(ae,{max:e.max})})}var P,F=e((()=>{C(),_(),a(),n(),m(),k(),M(),P=r()})),I,L=e((()=>{n(),s(),I={name:`jpa/search-terms`,title:t(`Search Terms`,`jetpack-premium-analytics`),icon:o,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}}));function R({withComparison:e}){return(0,H.jsx)(N,{attributes:{max:10,reportParams:c(e)}})}function z(e){return(0,H.jsx)(N,{attributes:{max:10,reportParams:c(!1,e)}})}function B(e){return(0,H.jsx)(N,{...e})}function V({withComparison:e,...t}){return(0,H.jsx)(re,{...t,widgetType:W,renderModule:U,renderComponent:B,attributes:{max:10,reportParams:c(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),ie(),ee(),F(),L(),H=r(),b(),U=`storybook/search-terms`,W={name:I.name,title:I.title,icon:I.icon,presentation:`framed`},G=e=>(0,H.jsx)(`div`,{style:{width:`380px`,height:`520px`,margin:`0 auto`,padding:`16px`,boxSizing:`border-box`,background:`#fff`,border:`1px solid #e0e0e0`,borderRadius:`8px`,overflow:`hidden`},children:(0,H.jsx)(e,{})}),K={title:`Packages/Premium Analytics/Widgets/SearchTerms`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Search Terms" widget. Displays the top search queries visitors used to reach the site, ranked by view count. Ported from the Jetpack Stats Search Terms module.`}}}},q={render:R,args:{withComparison:!1},decorators:[G]},J={render:R,args:{withComparison:!0},decorators:[G]},Y={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(x(`stats/search-terms`,`loading`),()=>x(`stats/search-terms`,null))},X={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(x(`stats/search-terms`,`error`),()=>x(`stats/search-terms`,null))},Z={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(x(`stats/search-terms`,`empty`),()=>x(`stats/search-terms`,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...S,withComparison:!0},argTypes:{...ne,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderSearchTerms,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderSearchTerms,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderSearchTermsOnPreset('last-90-days'),
  // Kept off the shared autodocs page: the mock override is keyed by path, so it
  // would otherwise force the sibling stories on that page into the same state.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/search-terms', 'loading');
    return () => setReportMockState('stats/search-terms', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderSearchTermsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/search-terms', 'error');
    return () => setReportMockState('stats/search-terms', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderSearchTermsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/search-terms', 'empty');
    return () => setReportMockState('stats/search-terms', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral search
glyph and "No search terms in this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <SearchTermsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};