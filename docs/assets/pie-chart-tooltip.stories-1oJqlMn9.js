import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{r as n}from"./bounded-tooltip-CNDgoe47.js";import{t as r}from"./src-eClfXXpQ.js";import{n as i,t as a}from"./with-chart-theme-CSkV7y4v.js";import{n as o,t as s}from"./pie-chart-tooltip-Kn3wM_R6.js";var c,l,u,d,f,p,m;e((()=>{r(),a(),o(),c=t(),l={title:`Packages/Premium Analytics/Widgets Toolkit/Components/PieChartTooltip`,component:s,tags:[`autodocs`],decorators:[i],parameters:{layout:`centered`}},u={render:()=>(0,c.jsx)(n,{children:(0,c.jsx)(s,{tooltipData:{label:`Completed`,value:45,color:`#3858E9`},dataFormat:{type:`number`}})}),parameters:{docs:{description:{story:`Pie chart tooltip with number formatting. Shows color indicator, label, and formatted value.`}}}},d={render:()=>(0,c.jsx)(n,{children:(0,c.jsx)(s,{tooltipData:{label:`Online Sales`,value:45e3,color:`#3858E9`},dataFormat:{type:`currency`,options:{useMultipliers:!0,decimals:0}}})}),parameters:{docs:{description:{story:`Pie chart tooltip with currency formatting.`}}}},f={render:()=>(0,c.jsx)(n,{children:(0,c.jsx)(s,{tooltipData:{label:`Conversion Rate`,value:.0325,color:`#66BDFF`},dataFormat:{type:`percentage`}})}),parameters:{docs:{description:{story:`Pie chart tooltip with percentage formatting.`}}}},p={render:()=>(0,c.jsx)(n,{children:(0,c.jsx)(s,{tooltipData:{label:`Cancelled`,value:15,color:`#FF5630`},dataFormat:{type:`number`}})}),parameters:{docs:{description:{story:`Pie chart tooltip showing a custom red color indicator.`}}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:`NumberFormat: Pie tooltip with number formatting.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:`CurrencyFormat: Pie tooltip with currency formatting.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`PercentageFormat: Pie tooltip with percentage formatting.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`CustomColor: Pie tooltip with a custom segment color.`,...p.parameters?.docs?.description}}},m=[`NumberFormat`,`CurrencyFormat`,`PercentageFormat`,`CustomColor`]}))();export{d as CurrencyFormat,p as CustomColor,u as NumberFormat,f as PercentageFormat,m as __namedExportsOrder,l as default};