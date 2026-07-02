import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{a as n,n as r}from"./src-B1Hf-orG.js";import{A as i,t as a}from"./providers-BQ8Ha7b7.js";import{c as o,n as s,o as c,r as l,s as u,t as d}from"./chart-decorator-B4pv9Ypw.js";import{n as f,r as p}from"./legend-config-DvuGdtSm.js";import{_ as m,d as h}from"./sample-data-BwMYxnT1.js";import{r as g,t as _}from"./pie-chart-LTrMBm6-.js";var v,y,b,x,S,C,w,T,E,D,O;e((()=>{n(),a(),s(),f(),h(),c(),_(),v=t(),y={title:`JS Packages/Charts Library/Charts/Pie Chart/Tooltips`,component:g,parameters:{layout:`centered`},decorators:[d],argTypes:{...l,...o,...p,size:{control:{type:`range`,min:100,max:800,step:10,default:400},description:`Diameter of the pie chart in pixels`,table:{category:`Dimensions`}}}},b=e=>(0,v.jsx)(g,{...e}),x={...u,data:m,withTooltips:!0,containerWidth:`432px`,containerHeight:`432px`},S=b.bind({}),S.args={...x},S.parameters={docs:{description:{story:`Default pie chart with tooltips enabled using the built-in BaseTooltip component.`}}},C=b.bind({}),C.args={...x,withTooltips:!1},C.parameters={docs:{description:{story:`Pie chart with tooltips disabled.`}}},w=b.bind({}),w.args={...x,renderTooltip:({tooltipData:e})=>(0,v.jsxs)(`div`,{style:{backgroundColor:`#1a1a2e`,color:`#eaeaea`,padding:`12px 16px`,borderRadius:`8px`,boxShadow:`0 4px 12px rgba(0, 0, 0, 0.3)`,minWidth:`150px`},children:[(0,v.jsx)(`div`,{style:{fontSize:`16px`,fontWeight:`bold`,marginBottom:`8px`,borderBottom:`1px solid #333`,paddingBottom:`8px`},children:e.label}),(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,v.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,v.jsx)(`span`,{style:{color:`#888`},children:`Value:`}),(0,v.jsx)(`span`,{style:{fontWeight:`bold`},children:r(e.value)})]}),(0,v.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,v.jsx)(`span`,{style:{color:`#888`},children:`Percentage:`}),(0,v.jsxs)(`span`,{style:{fontWeight:`bold`,color:`#4ade80`},children:[e.percentage,`%`]})]})]})]})},w.parameters={docs:{description:{story:`Custom tooltip rendering using the \`renderTooltip\` prop. This example demonstrates a dark-themed tooltip with styled layout.

**Usage:**
\`\`\`tsx
<PieChart
  data={data}
  withTooltips={true}
  renderTooltip={({ tooltipData }) => (
    <div>
      <h3>{tooltipData.label}</h3>
      <p>Value: {tooltipData.value}</p>
      <p>Percentage: {tooltipData.percentage}%</p>
    </div>
  )}
/>
\`\`\``}}},T=b.bind({}),T.args={...x,renderTooltip:({tooltipData:e})=>(0,v.jsxs)(`div`,{style:{backgroundColor:`white`,padding:`12px`,borderRadius:`12px`,boxShadow:`0 2px 8px rgba(0, 0, 0, 0.15)`,textAlign:`center`},children:[(0,v.jsx)(`div`,{style:{fontSize:`32px`,marginBottom:`4px`},children:(e=>({Windows:`🪟`,MacOS:`🍎`,Linux:`🐧`,Other:`🖥️`})[e]||`📊`)(e.label)}),(0,v.jsx)(`div`,{style:{fontWeight:`bold`,fontSize:`14px`},children:e.label}),(0,v.jsxs)(`div`,{style:{color:`#666`,fontSize:`12px`},children:[e.percentage,`% share`]})]})},T.parameters={docs:{description:{story:`Custom tooltip with emoji icons based on the data label. Demonstrates dynamic content rendering.`}}},E=b.bind({}),E.args={...x,renderTooltip:({tooltipData:e})=>(0,v.jsxs)(`table`,{style:{borderCollapse:`collapse`,backgroundColor:`white`,boxShadow:`0 2px 8px rgba(0, 0, 0, 0.15)`,borderRadius:`4px`,overflow:`hidden`},children:[(0,v.jsx)(`thead`,{children:(0,v.jsx)(`tr`,{style:{backgroundColor:`#f5f5f5`},children:(0,v.jsx)(`th`,{colSpan:2,style:{padding:`8px 12px`,borderBottom:`1px solid #ddd`,fontWeight:`bold`},children:e.label})})}),(0,v.jsxs)(`tbody`,{children:[(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{style:{padding:`6px 12px`,borderBottom:`1px solid #eee`,color:`#666`},children:`Value`}),(0,v.jsx)(`td`,{style:{padding:`6px 12px`,borderBottom:`1px solid #eee`,textAlign:`right`,fontWeight:`bold`},children:r(e.value)})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{style:{padding:`6px 12px`,color:`#666`},children:`Share`}),(0,v.jsxs)(`td`,{style:{padding:`6px 12px`,textAlign:`right`,fontWeight:`bold`},children:[e.percentage,`%`]})]})]})]})},E.parameters={docs:{description:{story:`Custom tooltip rendered as an HTML table for a more structured data presentation.`}}},D={render:()=>(0,v.jsx)(i,{children:(0,v.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`,alignItems:`start`},children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h3`,{children:`Default Offset (0, -15)`}),(0,v.jsx)(g,{...x,height:300})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h3`,{children:`Custom Offset (20, -30)`}),(0,v.jsx)(g,{...x,height:300,tooltipOffsetX:20,tooltipOffsetY:-30})]})]})}),args:{containerWidth:`700px`,containerHeight:`400px`},parameters:{docs:{description:{story:"Demonstrates tooltip positioning with `tooltipOffsetX` and `tooltipOffsetY` props. The right chart has a custom offset applied."}}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <PieChart {...args} />`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => <PieChart {...args} />`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => <PieChart {...args} />`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => <PieChart {...args} />`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <PieChart {...args} />`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <GlobalChartsProvider>
            <div style={{
      display: 'grid',
      gap: '2rem',
      gridTemplateColumns: 'repeat(2, 1fr)',
      alignItems: 'start'
    }}>
                <div>
                    <h3>Default Offset (0, -15)</h3>
                    <PieChart {...tooltipStoryArgs} height={300} />
                </div>
                <div>
                    <h3>Custom Offset (20, -30)</h3>
                    <PieChart {...tooltipStoryArgs} height={300} tooltipOffsetX={20} tooltipOffsetY={-30} />
                </div>
            </div>
        </GlobalChartsProvider>,
  args: {
    containerWidth: '700px',
    containerHeight: '400px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates tooltip positioning with \`tooltipOffsetX\` and \`tooltipOffsetY\` props. The right chart has a custom offset applied.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`NoTooltips`,`Custom`,`CustomWithEmoji`,`CustomTableTooltip`,`TooltipOffset`]}))();export{w as Custom,E as CustomTableTooltip,T as CustomWithEmoji,S as Default,C as NoTooltips,D as TooltipOffset,O as __namedExportsOrder,y as default};