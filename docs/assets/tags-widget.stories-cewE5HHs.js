import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-DQ5lAs4a.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{N as a,t as o}from"./build-module-DMs68Vfd.js";import{X as s,ll as c,n as l}from"./build-module-Bt8gOW8e.js";import{F as u,S as d,d as ee,r as te,s as f,tn as p}from"./hooks-Bvvxelsf.js";import{H as m,R as h,t as ne,u as re}from"./build-module-BAze1CUO.js";import{i as ie,t as ae}from"./src-CaCJrOts.js";import{t as oe}from"./leaderboard-chart-C-5XAZ-c.js";import{i as g,n as se,t as ce}from"./register-report-mocks-CuqI1p-5.js";import{o as le}from"./report-metric-b7rmAkf1.js";import{t as ue}from"./widget-state-Cmg_M35h.js";import{S as _,b as v,t as y,x as b,y as x}from"./src-ltgLebdV.js";var S,C,w,T,E,D,O,k,A=e((()=>{S=`_root_fero5_1`,C=`_content_fero5_11`,w=`_itemLabel_fero5_21`,T=`_itemIcon_fero5_30`,E=`_itemLabelText_fero5_34`,D=`_childList_fero5_48`,O=`_childRow_fero5_54`,k={root:S,content:C,itemLabel:w,itemIcon:T,itemLabelText:E,childList:D,childRow:O}}));function de({reportParams:e,max:t}){let{data:n,isLoading:r,isFetching:i,isError:o,refetch:s}=u({...e,max:t}),c=(0,a.useMemo)(()=>(n?.data?.[0]?.items??[]).slice(0,t>0?t:void 0).map(e=>{let t=e.link??e.labelText,n=(e.children??[]).map(e=>({id:e.link??`${t}-${e.label}`,label:e.label,labelIcon:e.labelIcon,link:e.link}));return{id:t,label:e.labelText,labelIcon:e.label[0]?.labelIcon??``,value:e.value,link:e.link,children:n}}),[n,t]);return{data:c,isLoading:r,isFetching:i,isError:c.length===0&&o,refetch:s}}var fe=e((()=>{o(),d()}));function j({labelIcon:e,label:t,link:n}){return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(m,{icon:I(e),size:20,className:k.itemIcon}),n?(0,F.jsx)(re,{className:k.itemLabelText,href:n,variant:`unstyled`,openInNewTab:!0,title:t,children:t}):(0,F.jsx)(`span`,{className:k.itemLabelText,title:t,children:t})]})}function M({members:e}){return(0,F.jsx)(h,{direction:`column`,className:k.childList,children:e.map(e=>(0,F.jsx)(`div`,{className:k.childRow,children:(0,F.jsx)(j,{labelIcon:e.labelIcon,label:e.label,link:e.link})},e.id))})}function N({max:e=10}){let{reportParams:n}=ee(),{data:i,isLoading:o,isFetching:s,isError:c,refetch:l}=de({reportParams:n,max:e}),{drillDownItem:u,drillDown:d,resetDrillDown:f}=te(),p=(0,a.useMemo)(()=>u?i.find(e=>e.label===u)??null:null,[i,u]);(0,a.useEffect)(()=>{u&&!p&&f()},[u,p,f]);let m=(0,a.useMemo)(()=>{let e=Math.max(...i.map(e=>e.value),0);return i.map(n=>{let i=n.children.length>0;return{id:n.id,label:(0,F.jsx)(h,{align:`center`,className:k.itemLabel,children:(0,F.jsx)(j,{labelIcon:n.labelIcon,label:n.label,link:n.link})}),currentValue:n.value,currentShare:e>0?n.value/e*100:0,...i&&{onClick:()=>d(n.label),ariaLabel:r(t(`View the tags and categories in %s`,`jetpack-premium-analytics`),n.label)}}})},[i,d]);return(0,F.jsx)(h,{className:k.root,children:(0,F.jsxs)(`div`,{className:k.content,children:[p&&(0,F.jsx)(le,{label:t(`All tags & categories`,`jetpack-premium-analytics`),onClick:f}),(0,F.jsx)(ue,{isLoading:o,isFetching:s,isError:c,isEmpty:i.length===0,error:{description:t(`We couldn't load tags & categories. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:l}]},empty:{icon:ie,description:t(`Learn about your most visited tags & categories to track engaging topics.`,`jetpack-premium-analytics`)},children:p?(0,F.jsx)(M,{members:p.children}):(0,F.jsx)(oe,{data:m,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})})}function P({attributes:e={}}){return(0,F.jsx)(f,{attributes:e,children:(0,F.jsx)(N,{max:e.max})})}var F,I,L=e((()=>{y(),ae(),o(),n(),l(),ne(),A(),fe(),F=i(),I=e=>e===`folder`?c:s})),R,z=e((()=>{n(),l(),R={name:`jpa/tags`,title:t(`Tags & categories`,`jetpack-premium-analytics`),icon:s,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}}));function B({withComparison:e}){return(0,H.jsx)(P,{attributes:{max:10,reportParams:p(e)}})}function V(e){return(0,H.jsx)(P,{attributes:{max:e,reportParams:p(!1)}})}function pe(e){return(0,H.jsx)(P,{...e})}function me({withComparison:e,...t}){return(0,H.jsx)(v,{...t,widgetType:W,renderModule:U,renderComponent:pe,attributes:{max:10,reportParams:p(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),b(),ce(),L(),z(),H=i(),se(),U=`storybook/tags`,W={name:R.name,title:R.title,icon:R.icon,presentation:`framed`},G=e=>(0,H.jsx)(`div`,{style:{width:`380px`,height:`520px`,margin:`0 auto`,padding:`16px`,boxSizing:`border-box`,background:`#fff`,border:`1px solid #e0e0e0`,borderRadius:`8px`,overflow:`hidden`},children:(0,H.jsx)(e,{})}),K={title:`Packages/Premium Analytics/Widgets/Tags`,component:P,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Tags & categories" widget. Displays the site's most visited tags and categories for the selected period, ranked by views. Single tags/categories link to their archive; grouped rows (several tags/categories sharing posts) drill down to their members. Ported from the Jetpack Stats Tags & categories module.`}}}},q={render:B,args:{withComparison:!1},decorators:[G]},J={render:B,args:{withComparison:!0},decorators:[G],parameters:{docs:{description:{story:"The `tags` endpoint returns no comparison rows, so no deltas are shown even when the date range picker enables a comparison period."}}}},Y={render:()=>V(9),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(g(`stats/tags`,`loading`),()=>g(`stats/tags`,null))},X={render:()=>V(8),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(g(`stats/tags`,`error`),()=>g(`stats/tags`,null))},Z={render:()=>V(7),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(g(`stats/tags`,`empty`),()=>g(`stats/tags`,null))},Q={render:e=>(0,H.jsx)(me,{...e}),args:{...x,withComparison:!0},argTypes:{..._,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTags,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderTags,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      description: {
        story: 'The \`tags\` endpoint returns no comparison rows, so no deltas are shown even when the date range picker enables a comparison period.'
      }
    }
  }
}`,...J.parameters?.docs?.source},description:{story:`The date range picker's comparison parameters are passed through, but the Stats
\`tags\` endpoint has no comparison period, so the widget renders single-period
values only — no period-over-period deltas are shown.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderTagsWithMax(9),
  // Kept off the shared autodocs page: the mock override is keyed by path, so it
  // would otherwise force the sibling stories on that page into the same state.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/tags', 'loading');
    return () => setReportMockState('stats/tags', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderTagsWithMax(8),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/tags', 'error');
    return () => setReportMockState('stats/tags', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderTagsWithMax(7),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/tags', 'empty');
    return () => setReportMockState('stats/tags', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral tag glyph
and "Learn about your most visited tags & categories to track engaging topics.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <TagsDashboardStory {...args} />,
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