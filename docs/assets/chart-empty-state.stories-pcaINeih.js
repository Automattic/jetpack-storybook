import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{C as n,S as r,h as i,u as a}from"./library-Djn3c8VE.js";import{t as o}from"./src-Dklj63E7.js";import{n as s,t as c}from"./chart-empty-state-ORRwfYPp.js";var l,u,d,f,p,m,h,g;e((()=>{o(),s(),l=t(),u={title:`Packages/Premium Analytics/Widgets Toolkit/Components/ChartEmptyState`,component:c,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`A reusable empty state component for charts. With no props it renders the generic "no results for this time period" state (the search magnifier from @jetpack-premium-analytics/icons), with support for other illustrated icons from the same package.`}}},argTypes:{icon:{control:!1,description:`Icon to display in the empty state. Defaults to the search magnifier from @jetpack-premium-analytics/icons. Can be overridden with custom icons.`},text:{control:`text`,description:`Text to display in the empty state.`}}},d=({title:e,children:t,width:n=`300px`,height:r=`280px`})=>(0,l.jsxs)(`div`,{style:{width:n,height:r,border:`1px solid var(--wpds-color-stroke-surface-neutral-weak)`,borderRadius:`var(--wpds-border-radius-md)`,background:`var(--wpds-color-background-surface-neutral)`,display:`flex`,flexDirection:`column`,overflow:`hidden`},children:[(0,l.jsx)(`div`,{style:{padding:`var(--wpds-dimension-gap-lg)`,borderBottom:`1px solid var(--wpds-color-stroke-surface-neutral-weak)`,fontWeight:600,fontSize:`var(--wpds-typography-font-size-sm)`,color:`var(--wpds-color-foreground-content-neutral)`},children:e}),(0,l.jsx)(`div`,{style:{flex:1,display:`flex`},children:t})]}),f={args:{},decorators:[e=>(0,l.jsx)(d,{title:`Widget Title`,children:(0,l.jsx)(e,{})})]},p={args:{text:`No payments found for this period.`,icon:a},decorators:[e=>(0,l.jsx)(d,{title:`Custom Empty State`,children:(0,l.jsx)(e,{})})]},m={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:`var(--wpds-dimension-gap-xl)`,alignItems:`flex-start`,flexWrap:`wrap`},children:[(0,l.jsx)(d,{title:`Small (256px)`,width:`256px`,height:`200px`,children:(0,l.jsx)(c,{icon:i})}),(0,l.jsx)(d,{title:`Medium (350px)`,width:`350px`,height:`280px`,children:(0,l.jsx)(c,{icon:n})}),(0,l.jsx)(d,{title:`Large (450px)`,width:`450px`,height:`350px`,children:(0,l.jsx)(c,{icon:r})})]})},h={render:()=>(0,l.jsx)(`div`,{style:{width:`600px`,height:`26px`,outline:`1px dashed currentColor`},children:(0,l.jsx)(c,{})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => <WidgetCard title="Widget Title">
                <Story />
            </WidgetCard>]
}`,...f.parameters?.docs?.source},description:{story:`Default: the generic "no results for this time period" state`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'No payments found for this period.',
    icon: payment
  },
  decorators: [Story => <WidgetCard title="Custom Empty State">
                <Story />
            </WidgetCard>]
}`,...p.parameters?.docs?.source},description:{story:`Empty state with custom icon and text`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--wpds-dimension-gap-xl)',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  }}>
            <WidgetCard title="Small (256px)" width="256px" height="200px">
                <ChartEmptyState icon={customer} />
            </WidgetCard>
            <WidgetCard title="Medium (350px)" width="350px" height="280px">
                <ChartEmptyState icon={device} />
            </WidgetCard>
            <WidgetCard title="Large (450px)" width="450px" height="350px">
                <ChartEmptyState icon={location} />
            </WidgetCard>
        </div>
}`,...m.parameters?.docs?.source},description:{story:`Different Container Sizes

Shows how the empty state adapts to different widget sizes,
featuring different domain icons (customer, device, location).`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '600px',
    height: '26px',
    outline: '1px dashed currentColor'
  }}>
            <ChartEmptyState />
        </div>
}`,...h.parameters?.docs?.source},description:{story:`A sparkline-high chart area, as a one-row metric chart leaves: the message
sheds its icon and block padding so it fits on one line without scrolling.`,...h.parameters?.docs?.description}}},g=[`Default`,`Custom`,`ContainerSizes`,`ShortChartArea`]}))();export{m as ContainerSizes,p as Custom,f as Default,h as ShortChartArea,g as __namedExportsOrder,u as default};