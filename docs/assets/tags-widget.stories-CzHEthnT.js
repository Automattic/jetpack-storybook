import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-DQ5lAs4a.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{N as a,t as o}from"./build-module-DMs68Vfd.js";import{X as s,dl as c,n as l}from"./build-module-C6Ow06jV.js";import{r as ee}from"./hooks-BCwpDVcN.js";import{H as u,R as d,t as f,u as p}from"./build-module-JNPAD9ni.js";import{i as te,t as m}from"./src-Bf8IXmOS.js";import{Yn as h,ut as g,wt as _}from"./chart-tooltip-BYCQMN6a.js";import{t as v}from"./leaderboard-chart-Cl5ZDKsB.js";import{C as ne,N as re,S as ie,T as y,f as ae,k as oe}from"./report-metric-SMRr-c1r.js";import{t as se}from"./widget-state-DROZBPus.js";import{S as ce,b as le,t as ue,x as b,y as de}from"./src-CNd5WjxR.js";var x,S,C,w,T,E,D,O,k=e((()=>{x=`_root_fero5_1`,S=`_content_fero5_11`,C=`_itemLabel_fero5_21`,w=`_itemIcon_fero5_30`,T=`_itemLabelText_fero5_34`,E=`_childList_fero5_48`,D=`_childRow_fero5_54`,O={root:x,content:S,itemLabel:C,itemIcon:w,itemLabelText:T,childList:E,childRow:D}}));function A({reportParams:e,max:t}){let{data:n,isLoading:r,isFetching:i,isError:o,refetch:s}=_({...e,max:t}),c=(0,a.useMemo)(()=>(n?.data?.[0]?.items??[]).slice(0,t>0?t:void 0).map(e=>{let t=e.link??e.labelText,n=(e.children??[]).map(e=>({id:e.link??`${t}-${e.label}`,label:e.label,labelIcon:e.labelIcon,link:e.link}));return{id:t,label:e.labelText,labelIcon:e.label[0]?.labelIcon??``,value:e.value,link:e.link,children:n}}),[n,t]);return{data:c,isLoading:r,isFetching:i,isError:c.length===0&&o,refetch:s}}var j=e((()=>{o(),g()}));function M({labelIcon:e,label:t,link:n}){return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(u,{icon:I(e),size:20,className:O.itemIcon}),n?(0,F.jsx)(p,{className:O.itemLabelText,href:n,variant:`unstyled`,openInNewTab:!0,title:t,children:t}):(0,F.jsx)(`span`,{className:O.itemLabelText,title:t,children:t})]})}function fe({members:e}){return(0,F.jsx)(d,{direction:`column`,className:O.childList,children:e.map(e=>(0,F.jsx)(`div`,{className:O.childRow,children:(0,F.jsx)(M,{labelIcon:e.labelIcon,label:e.label,link:e.link})},e.id))})}function N({max:e=10}){let{reportParams:n}=re(),{data:i,isLoading:o,isFetching:s,isError:c,refetch:l}=A({reportParams:n,max:e}),{drillDownItem:u,drillDown:f,resetDrillDown:p}=ee(),m=(0,a.useMemo)(()=>u?i.find(e=>e.label===u)??null:null,[i,u]);(0,a.useEffect)(()=>{u&&!m&&p()},[u,m,p]);let h=(0,a.useMemo)(()=>{let e=Math.max(...i.map(e=>e.value),0);return i.map(n=>{let i=n.children.length>0;return{id:n.id,label:(0,F.jsx)(d,{align:`center`,className:O.itemLabel,children:(0,F.jsx)(M,{labelIcon:n.labelIcon,label:n.label,link:n.link})}),currentValue:n.value,currentShare:e>0?n.value/e*100:0,...i&&{onClick:()=>f(n.label),ariaLabel:r(t(`View the tags and categories in %s`,`jetpack-premium-analytics`),n.label)}}})},[i,f]);return(0,F.jsx)(d,{className:O.root,children:(0,F.jsxs)(`div`,{className:O.content,children:[m&&(0,F.jsx)(ae,{label:t(`All tags & categories`,`jetpack-premium-analytics`),onClick:p}),(0,F.jsx)(se,{isLoading:o,isFetching:s,isError:c,isEmpty:i.length===0,error:{description:t(`We couldn't load tags & categories. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:l}]},empty:{icon:te,description:t(`Learn about your most visited tags & categories to track engaging topics.`,`jetpack-premium-analytics`)},children:m?(0,F.jsx)(fe,{members:m.children}):(0,F.jsx)(v,{data:h,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})})}function P({attributes:e={}}){return(0,F.jsx)(oe,{attributes:e,children:(0,F.jsx)(N,{max:e.max})})}var F,I,L=e((()=>{ue(),m(),o(),n(),l(),f(),k(),j(),F=i(),I=e=>e===`folder`?c:s})),R,z=e((()=>{n(),l(),R={name:`jpa/tags`,title:t(`Tags & categories`,`jetpack-premium-analytics`),help:{content:t(`Most visited tags & categories. Learn about the most engaging topics.`,`jetpack-premium-analytics`)},icon:s,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}}));function B({withComparison:e}){return(0,H.jsx)(P,{attributes:{max:10,reportParams:h(e)}})}function V(e){return(0,H.jsx)(P,{attributes:{max:e,reportParams:h(!1)}})}function pe(e){return(0,H.jsx)(P,{...e})}function me({withComparison:e,...t}){return(0,H.jsx)(le,{...t,widgetType:W,renderModule:U,renderComponent:pe,attributes:{max:10,reportParams:h(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),b(),ie(),L(),z(),H=i(),ne(),U=`storybook/tags`,W={name:R.name,title:R.title,icon:R.icon,presentation:`framed`},G=e=>(0,H.jsx)(`div`,{style:{width:`380px`,height:`520px`,margin:`0 auto`,padding:`16px`,boxSizing:`border-box`,background:`#fff`,border:`1px solid #e0e0e0`,borderRadius:`8px`,overflow:`hidden`},children:(0,H.jsx)(e,{})}),K={title:`Packages/Premium Analytics/Widgets/Tags`,component:P,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Tags & categories" widget. Displays the site's most visited tags and categories for the selected period, ranked by views. Single tags/categories link to their archive; grouped rows (several tags/categories sharing posts) drill down to their members. Ported from the Jetpack Stats Tags & categories module.`}}}},q={render:B,args:{withComparison:!1},decorators:[G]},J={render:B,args:{withComparison:!0},decorators:[G],parameters:{docs:{description:{story:"The `tags` endpoint returns no comparison rows, so no deltas are shown even when the date range picker enables a comparison period."}}}},Y={render:()=>V(9),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(y(`stats/tags`,`loading`),()=>y(`stats/tags`,null))},X={render:()=>V(8),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(y(`stats/tags`,`error`),()=>y(`stats/tags`,null))},Z={render:()=>V(7),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(y(`stats/tags`,`empty`),()=>y(`stats/tags`,null))},Q={render:e=>(0,H.jsx)(me,{...e}),args:{...de,withComparison:!0},argTypes:{...ce,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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