import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,t as r}from"./pie-chart-tooltip-Cmx5LP2u.js";var i,a,o,s,c,l,u,d;e((()=>{n(),i=t(),a={title:`Packages/Premium Analytics/Widgets Toolkit/Components/PieChartTooltip`,component:r,tags:[`autodocs`],parameters:{layout:`centered`}},o=({children:e})=>(0,i.jsx)(`div`,{style:{background:`var(--wpds-color-background-surface-neutral)`,padding:`20px`,borderRadius:`8px`},children:e}),s={render:()=>(0,i.jsx)(o,{children:(0,i.jsx)(r,{tooltipData:{label:`Completed`,value:45,color:`#3858E9`},dataFormat:{type:`number`}})}),parameters:{docs:{description:{story:`Pie chart tooltip with number formatting. Shows color indicator, label, and formatted value.`}}}},c={render:()=>(0,i.jsx)(o,{children:(0,i.jsx)(r,{tooltipData:{label:`Online Sales`,value:45e3,color:`#3858E9`},dataFormat:{type:`currency`,options:{useMultipliers:!0,decimals:0}}})}),parameters:{docs:{description:{story:`Pie chart tooltip with currency formatting.`}}}},l={render:()=>(0,i.jsx)(o,{children:(0,i.jsx)(r,{tooltipData:{label:`Conversion Rate`,value:.0325,color:`#66BDFF`},dataFormat:{type:`percentage`}})}),parameters:{docs:{description:{story:`Pie chart tooltip with percentage formatting.`}}}},u={render:()=>(0,i.jsx)(o,{children:(0,i.jsx)(r,{tooltipData:{label:`Cancelled`,value:15,color:`#FF5630`},dataFormat:{type:`number`}})}),parameters:{docs:{description:{story:`Pie chart tooltip showing a custom red color indicator.`}}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipWrapper>
            <PieChartTooltip tooltipData={{
      label: 'Completed',
      value: 45,
      color: '#3858E9'
    }} dataFormat={{
      type: 'number'
    }} />
        </TooltipWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'Pie chart tooltip with number formatting. Shows color indicator, label, and formatted value.'
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`NumberFormat: Pie tooltip with number formatting.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipWrapper>
            <PieChartTooltip tooltipData={{
      label: 'Online Sales',
      value: 45000,
      color: '#3858E9'
    }} dataFormat={{
      type: 'currency',
      options: {
        useMultipliers: true,
        decimals: 0
      }
    }} />
        </TooltipWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'Pie chart tooltip with currency formatting.'
      }
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`CurrencyFormat: Pie tooltip with currency formatting.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipWrapper>
            <PieChartTooltip tooltipData={{
      label: 'Conversion Rate',
      value: 0.0325,
      color: '#66BDFF'
    }} dataFormat={{
      type: 'percentage'
    }} />
        </TooltipWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'Pie chart tooltip with percentage formatting.'
      }
    }
  }
}`,...l.parameters?.docs?.source},description:{story:`PercentageFormat: Pie tooltip with percentage formatting.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipWrapper>
            <PieChartTooltip tooltipData={{
      label: 'Cancelled',
      value: 15,
      color: '#FF5630'
    }} dataFormat={{
      type: 'number'
    }} />
        </TooltipWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'Pie chart tooltip showing a custom red color indicator.'
      }
    }
  }
}`,...u.parameters?.docs?.source},description:{story:`CustomColor: Pie tooltip with a custom segment color.`,...u.parameters?.docs?.description}}},d=[`NumberFormat`,`CurrencyFormat`,`PercentageFormat`,`CustomColor`]}))();export{c as CurrencyFormat,u as CustomColor,s as NumberFormat,l as PercentageFormat,d as __namedExportsOrder,a as default};