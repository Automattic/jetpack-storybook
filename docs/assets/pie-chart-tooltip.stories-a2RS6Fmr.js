import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,t as r}from"./pie-chart-tooltip-CcGARPJe.js";import{n as i,t as a}from"./tooltip-box-DkZ86_r3.js";var o,s,c,l,u,d,f;e((()=>{n(),i(),o=t(),s={title:`Packages/Premium Analytics/Widgets Toolkit/Components/PieChartTooltip`,component:r,tags:[`autodocs`],parameters:{layout:`centered`}},c={render:()=>(0,o.jsx)(a,{children:(0,o.jsx)(r,{tooltipData:{label:`Completed`,value:45,color:`#3858E9`},dataFormat:{type:`number`}})}),parameters:{docs:{description:{story:`Pie chart tooltip with number formatting. Shows color indicator, label, and formatted value.`}}}},l={render:()=>(0,o.jsx)(a,{children:(0,o.jsx)(r,{tooltipData:{label:`Online Sales`,value:45e3,color:`#3858E9`},dataFormat:{type:`currency`,options:{useMultipliers:!0,decimals:0}}})}),parameters:{docs:{description:{story:`Pie chart tooltip with currency formatting.`}}}},u={render:()=>(0,o.jsx)(a,{children:(0,o.jsx)(r,{tooltipData:{label:`Conversion Rate`,value:.0325,color:`#66BDFF`},dataFormat:{type:`percentage`}})}),parameters:{docs:{description:{story:`Pie chart tooltip with percentage formatting.`}}}},d={render:()=>(0,o.jsx)(a,{children:(0,o.jsx)(r,{tooltipData:{label:`Cancelled`,value:15,color:`#FF5630`},dataFormat:{type:`number`}})}),parameters:{docs:{description:{story:`Pie chart tooltip showing a custom red color indicator.`}}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipBox>
            <PieChartTooltip tooltipData={{
      label: 'Completed',
      value: 45,
      color: '#3858E9'
    }} dataFormat={{
      type: 'number'
    }} />
        </TooltipBox>,
  parameters: {
    docs: {
      description: {
        story: 'Pie chart tooltip with number formatting. Shows color indicator, label, and formatted value.'
      }
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`NumberFormat: Pie tooltip with number formatting.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipBox>
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
        </TooltipBox>,
  parameters: {
    docs: {
      description: {
        story: 'Pie chart tooltip with currency formatting.'
      }
    }
  }
}`,...l.parameters?.docs?.source},description:{story:`CurrencyFormat: Pie tooltip with currency formatting.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipBox>
            <PieChartTooltip tooltipData={{
      label: 'Conversion Rate',
      value: 0.0325,
      color: '#66BDFF'
    }} dataFormat={{
      type: 'percentage'
    }} />
        </TooltipBox>,
  parameters: {
    docs: {
      description: {
        story: 'Pie chart tooltip with percentage formatting.'
      }
    }
  }
}`,...u.parameters?.docs?.source},description:{story:`PercentageFormat: Pie tooltip with percentage formatting.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipBox>
            <PieChartTooltip tooltipData={{
      label: 'Cancelled',
      value: 15,
      color: '#FF5630'
    }} dataFormat={{
      type: 'number'
    }} />
        </TooltipBox>,
  parameters: {
    docs: {
      description: {
        story: 'Pie chart tooltip showing a custom red color indicator.'
      }
    }
  }
}`,...d.parameters?.docs?.source},description:{story:`CustomColor: Pie tooltip with a custom segment color.`,...d.parameters?.docs?.description}}},f=[`NumberFormat`,`CurrencyFormat`,`PercentageFormat`,`CustomColor`]}))();export{l as CurrencyFormat,d as CustomColor,c as NumberFormat,u as PercentageFormat,f as __namedExportsOrder,s as default};