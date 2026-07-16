import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{S as s,n as c,zn as l}from"./build-module-DmVuor49.js";import{r as ee}from"./hooks-ZBOgb00M.js";import{H as u,R as d,t as f,u as p}from"./build-module-D9vmvjeg.js";import{i as te,t as m}from"./src-B3le4dug.js";import{Yn as h,ut as g,wt as _}from"./chart-tooltip-sRlAmTLU.js";import{t as v}from"./leaderboard-chart-Dj5M2tQS.js";import{C as y,N as ne,S as re,T as b,f as ie,k as ae}from"./report-metric-CYbuD8eS.js";import{t as x}from"./widget-state-D-SZHbdN.js";import{S,b as oe,t as C,x as w,y as se}from"./src-gAUmaX0_.js";var T,E,D,O,k,A,j,M,ce=e((()=>{T=`_root_1uma5_1`,E=`_content_1uma5_11`,D=`_itemLabel_1uma5_21`,O=`_itemIcon_1uma5_30`,k=`_itemLabelText_1uma5_34`,A=`_childList_1uma5_48`,j=`_childRow_1uma5_54`,M={root:T,content:E,itemLabel:D,itemIcon:O,itemLabelText:k,childList:A,childRow:j}}));function le({reportParams:e,max:t}){let{data:n,isLoading:r,isFetching:i,isError:o,refetch:s}=_({...e,max:t}),c=(0,a.useMemo)(()=>(n?.data?.[0]?.items??[]).slice(0,t>0?t:void 0).map(e=>{let t=e.link??e.labelText,n=(e.children??[]).map(e=>({id:e.link??`${t}-${e.label}`,label:e.label,labelIcon:e.labelIcon,link:e.link}));return{id:t,label:e.labelText,labelIcon:e.label[0]?.labelIcon??``,value:e.value,link:e.link,children:n}}),[n,t]);return{data:c,isLoading:r,isFetching:i,isError:c.length===0&&o,refetch:s}}var ue=e((()=>{o(),g()}));function N({labelIcon:e,label:t,link:n}){return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(u,{icon:I(e),size:20,className:M.itemIcon}),n?(0,F.jsx)(p,{className:M.itemLabelText,href:n,variant:`unstyled`,openInNewTab:!0,title:t,children:t}):(0,F.jsx)(`span`,{className:M.itemLabelText,title:t,children:t})]})}function de({members:e}){return(0,F.jsx)(d,{direction:`column`,className:M.childList,children:e.map(e=>(0,F.jsx)(`div`,{className:M.childRow,children:(0,F.jsx)(N,{labelIcon:e.labelIcon,label:e.label,link:e.link})},e.id))})}function fe({max:e=10}){let{reportParams:r}=ne(),{data:i,isLoading:o,isFetching:s,isError:c,refetch:l}=le({reportParams:r,max:e}),{drillDownItem:u,drillDown:f,resetDrillDown:p}=ee(),m=(0,a.useMemo)(()=>u?i.find(e=>e.label===u)??null:null,[i,u]);(0,a.useEffect)(()=>{u&&!m&&p()},[u,m,p]);let h=(0,a.useMemo)(()=>{let e=Math.max(...i.map(e=>e.value),0);return i.map(r=>{let i=r.children.length>0;return{id:r.id,label:(0,F.jsx)(d,{align:`center`,className:M.itemLabel,children:(0,F.jsx)(N,{labelIcon:r.labelIcon,label:r.label,link:r.link})}),currentValue:r.value,currentShare:e>0?r.value/e*100:0,...i&&{onClick:()=>f(r.label),ariaLabel:t(n(`View the tags and categories in %s`,`jetpack-premium-analytics`),r.label)}}})},[i,f]);return(0,F.jsx)(d,{className:M.root,children:(0,F.jsxs)(`div`,{className:M.content,children:[m&&(0,F.jsx)(ie,{label:n(`All tags & categories`,`jetpack-premium-analytics`),onClick:p}),(0,F.jsx)(x,{isLoading:o,isFetching:s,isError:c,isEmpty:i.length===0,error:{description:n(`We couldn't load tags & categories. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:l}]},empty:{icon:te,description:n(`Learn about your most visited tags & categories to track engaging topics.`,`jetpack-premium-analytics`)},children:m?(0,F.jsx)(de,{members:m.children}):(0,F.jsx)(v,{data:h,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})})}function P({attributes:e={}}){return(0,F.jsx)(ae,{attributes:e,children:(0,F.jsx)(fe,{max:e.max})})}var F,I,L=e((()=>{C(),m(),o(),r(),c(),f(),ce(),ue(),F=i(),I=e=>e===`folder`?l:s})),R,z=e((()=>{r(),c(),R={name:`jpa/tags`,title:n(`Tags & categories`,`jetpack-premium-analytics`),help:{content:n(`Most visited tags & categories. Learn about the most engaging topics.`,`jetpack-premium-analytics`)},icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}}));function B({withComparison:e}){return(0,H.jsx)(P,{attributes:{max:10,reportParams:h(e)}})}function V(e){return(0,H.jsx)(P,{attributes:{max:e,reportParams:h(!1)}})}function pe(e){return(0,H.jsx)(P,{...e})}function me({withComparison:e,...t}){return(0,H.jsx)(oe,{...t,widgetType:W,renderModule:U,renderComponent:pe,attributes:{max:10,reportParams:h(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),w(),re(),L(),z(),H=i(),y(),U=`storybook/tags`,W={name:R.name,title:R.title,icon:R.icon,presentation:`framed`},G=e=>(0,H.jsx)(`div`,{style:{width:`380px`,height:`520px`,margin:`0 auto`,padding:`16px`,boxSizing:`border-box`,background:`#fff`,border:`1px solid #e0e0e0`,borderRadius:`8px`,overflow:`hidden`},children:(0,H.jsx)(e,{})}),K={title:`Packages/Premium Analytics/Widgets/Tags`,component:P,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Tags & categories" widget. Displays the site's most visited tags and categories for the selected period, ranked by views. Single tags/categories link to their archive; grouped rows (several tags/categories sharing posts) drill down to their members. Ported from the Jetpack Stats Tags & categories module.`}}}},q={render:B,args:{withComparison:!1},decorators:[G]},J={render:B,args:{withComparison:!0},decorators:[G],parameters:{docs:{description:{story:"The `tags` endpoint returns no comparison rows, so no deltas are shown even when the date range picker enables a comparison period."}}}},Y={render:()=>V(9),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(b(`stats/tags`,`loading`),()=>b(`stats/tags`,null))},X={render:()=>V(8),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(b(`stats/tags`,`error`),()=>b(`stats/tags`,null))},Z={render:()=>V(7),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(b(`stats/tags`,`empty`),()=>b(`stats/tags`,null))},Q={render:e=>(0,H.jsx)(me,{...e}),args:{...se,withComparison:!0},argTypes:{...S,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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