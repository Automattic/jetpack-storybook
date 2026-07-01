import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,t as r}from"./metric-delta-C3S7I9rZ.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{n(),i=t(),a={title:`Packages/Premium Analytics/Widgets Toolkit/Components/MetricDelta`,component:r,tags:[`autodocs`],argTypes:{current:{control:`number`,description:`The current/new value`},previous:{control:`number`,description:`The previous/comparison value`},invertColors:{control:`boolean`,description:`For metrics where decrease is improvement (e.g., bounce rate)`},hideZero:{control:`boolean`,description:`Whether to hide when delta is zero`},showAbsolute:{control:`boolean`,description:`Show absolute change instead of percentage`},absoluteFormat:{control:`select`,options:[`number`,`currency`],description:`Format for absolute values`},fallback:{control:`text`,description:`What to display when calculation is not possible`}}},o={args:{current:150,previous:100}},s={args:{current:80,previous:100}},c={args:{current:100,previous:100}},l={args:{current:80,previous:100,invertColors:!0}},u={args:{current:120,previous:100,invertColors:!0}},d={args:{current:1100,previous:100}},f={args:{current:100.5,previous:100}},p={args:{current:100,previous:0,fallback:`N/A`}},m={args:{current:100,previous:100,hideZero:!0}},h={args:{current:150,previous:100,showAbsolute:!0}},g={args:{current:1500,previous:1e3,showAbsolute:!0,absoluteFormat:`currency`}},_={args:{current:800,previous:1e3,showAbsolute:!0,absoluteFormat:`currency`}},v={args:{current:100,previous:0,fallback:`—`,justify:`flex-end`},decorators:[e=>(0,i.jsx)(`div`,{style:{width:100,border:`1px dashed #ccc`},children:(0,i.jsx)(e,{})})]},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    current: 150,
    previous: 100
  }
}`,...o.parameters?.docs?.source},description:{story:`Positive change (green, increase)`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    current: 80,
    previous: 100
  }
}`,...s.parameters?.docs?.source},description:{story:`Negative change (red, decrease)`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    current: 100,
    previous: 100
  }
}`,...c.parameters?.docs?.source},description:{story:`Zero change (neutral)`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    current: 80,
    previous: 100,
    invertColors: true
  }
}`,...l.parameters?.docs?.source},description:{story:`Inverted colors for metrics where decrease is good (e.g., bounce rate, returns)
Here a decrease shows as green (positive)`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    current: 120,
    previous: 100,
    invertColors: true
  }
}`,...u.parameters?.docs?.source},description:{story:`Inverted colors: increase shows as red (negative)`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    current: 1100,
    previous: 100
  }
}`,...d.parameters?.docs?.source},description:{story:`Large percentage change (1000%+)`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    current: 100.5,
    previous: 100
  }
}`,...f.parameters?.docs?.source},description:{story:`Small percentage change (< 1%)`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    current: 100,
    previous: 0,
    fallback: 'N/A'
  }
}`,...p.parameters?.docs?.source},description:{story:`Fallback when previous value is zero (can't calculate percentage)`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    current: 100,
    previous: 100,
    hideZero: true
  }
}`,...m.parameters?.docs?.source},description:{story:`Hide when delta is zero`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    current: 150,
    previous: 100,
    showAbsolute: true
  }
}`,...h.parameters?.docs?.source},description:{story:`Show absolute change instead of percentage`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    current: 1500,
    previous: 1000,
    showAbsolute: true,
    absoluteFormat: 'currency'
  }
}`,...g.parameters?.docs?.source},description:{story:`Show absolute change with currency format`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    current: 800,
    previous: 1000,
    showAbsolute: true,
    absoluteFormat: 'currency'
  }
}`,..._.parameters?.docs?.source},description:{story:`Negative absolute change`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    current: 100,
    previous: 0,
    fallback: '—',
    justify: 'flex-end'
  },
  decorators: [(Story: React.ComponentType) => <div style={{
    width: 100,
    border: '1px dashed #ccc'
  }}>
                <Story />
            </div>]
}`,...v.parameters?.docs?.source},description:{story:`Fallback with justify="flex-end" - tests alignment of dash character.
Used in legend rows where the dash should align right with percentage values.`,...v.parameters?.docs?.description}}},y=[`Positive`,`Negative`,`Zero`,`InvertedColorsDecrease`,`InvertedColorsIncrease`,`LargeChange`,`SmallChange`,`FallbackZeroPrevious`,`HideZero`,`AbsoluteChange`,`AbsoluteChangeCurrency`,`AbsoluteChangeNegative`,`FallbackJustifyEnd`]}))();export{h as AbsoluteChange,g as AbsoluteChangeCurrency,_ as AbsoluteChangeNegative,v as FallbackJustifyEnd,p as FallbackZeroPrevious,m as HideZero,l as InvertedColorsDecrease,u as InvertedColorsIncrease,d as LargeChange,s as Negative,o as Positive,f as SmallChange,c as Zero,y as __namedExportsOrder,a as default};