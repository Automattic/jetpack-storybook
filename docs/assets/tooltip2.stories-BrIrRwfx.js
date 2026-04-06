import{n as e}from"./chunk-zsgVPwQN.js";import{Rh as t,Wn as n,qn as r}from"./iframe-uev8Eqlb.js";import{c as i,n as a,o,r as s,s as c,t as l}from"./chart-decorator-BbTNxoHT.js";import{n as u,r as d}from"./legend-config--CzlDlxb.js";import{c as f,h as p}from"./sample-data-CBS5eoCH.js";import{n as m,t as h}from"./pie-semi-circle-chart-CK1W3GME.js";var g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{r(),a(),u(),f(),o(),h(),g=t(),_={Windows:`🪟`,MacOS:`🍎`,Linux:`🐧`,Other:`🖥️`},v=e=>_[e]||`📊`,y={title:`JS Packages/Charts Library/Charts/Pie Semi Circle Chart/Tooltips`,component:m,parameters:{layout:`centered`},decorators:[l],argTypes:{...s,...i,...d,width:{control:{type:`range`,min:100,max:1e3,step:10}},thickness:{control:{type:`range`,min:0,max:1,step:.01}}}},b=e=>(0,g.jsx)(m,{...e}),x={...c,data:p,withTooltips:!0,label:`OS Usage`,note:`Q4 2023`},S=b.bind({}),S.args={...x},S.parameters={docs:{description:{story:`Default semi-circle pie chart with tooltips enabled using the built-in BaseTooltip component.`}}},C=b.bind({}),C.args={...x,withTooltips:!1},C.parameters={docs:{description:{story:`Semi-circle pie chart with tooltips disabled.`}}},w=b.bind({}),w.args={...x,renderTooltip:({tooltipData:e})=>(0,g.jsxs)(`div`,{style:{backgroundColor:`#1a1a2e`,color:`#eaeaea`,padding:`12px 16px`,borderRadius:`8px`,boxShadow:`0 4px 12px rgba(0, 0, 0, 0.3)`,minWidth:`150px`},children:[(0,g.jsx)(`div`,{style:{fontSize:`16px`,fontWeight:`bold`,marginBottom:`8px`,borderBottom:`1px solid #333`,paddingBottom:`8px`},children:e.label}),(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,g.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,g.jsx)(`span`,{style:{color:`#888`},children:`Value:`}),(0,g.jsx)(`span`,{style:{fontWeight:`bold`},children:n(e.value)})]}),(0,g.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,g.jsx)(`span`,{style:{color:`#888`},children:`Percentage:`}),(0,g.jsxs)(`span`,{style:{fontWeight:`bold`,color:`#4ade80`},children:[e.percentage,`%`]})]})]})]})},w.parameters={docs:{description:{story:`Custom tooltip rendering using the \`renderTooltip\` prop. This example demonstrates a dark-themed tooltip with styled layout.

**Usage:**
\`\`\`tsx
<PieSemiCircleChart
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
\`\`\``}}},T=b.bind({}),T.args={...x,renderTooltip:({tooltipData:e})=>(0,g.jsxs)(`div`,{style:{backgroundColor:`white`,padding:`12px`,borderRadius:`12px`,boxShadow:`0 2px 8px rgba(0, 0, 0, 0.15)`,textAlign:`center`},children:[(0,g.jsx)(`div`,{style:{fontSize:`32px`,marginBottom:`4px`},children:v(e.label)}),(0,g.jsx)(`div`,{style:{fontWeight:`bold`,fontSize:`14px`},children:e.label}),(0,g.jsxs)(`div`,{style:{color:`#666`,fontSize:`12px`},children:[e.percentage,`% share`]})]})},T.parameters={docs:{description:{story:`Custom tooltip with emoji icons based on the data label. Demonstrates dynamic content rendering.`}}},E=b.bind({}),E.args={...x,renderTooltip:({tooltipData:e})=>(0,g.jsxs)(`table`,{style:{borderCollapse:`collapse`,backgroundColor:`white`,boxShadow:`0 2px 8px rgba(0, 0, 0, 0.15)`,borderRadius:`4px`,overflow:`hidden`},children:[(0,g.jsx)(`thead`,{children:(0,g.jsx)(`tr`,{style:{backgroundColor:`#f5f5f5`},children:(0,g.jsx)(`th`,{colSpan:2,style:{padding:`8px 12px`,borderBottom:`1px solid #ddd`,fontWeight:`bold`},children:e.label})})}),(0,g.jsxs)(`tbody`,{children:[(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{style:{padding:`6px 12px`,borderBottom:`1px solid #eee`,color:`#666`},children:`Value`}),(0,g.jsx)(`td`,{style:{padding:`6px 12px`,borderBottom:`1px solid #eee`,textAlign:`right`,fontWeight:`bold`},children:n(e.value)})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{style:{padding:`6px 12px`,color:`#666`},children:`Share`}),(0,g.jsxs)(`td`,{style:{padding:`6px 12px`,textAlign:`right`,fontWeight:`bold`},children:[e.percentage,`%`]})]})]})]})},E.parameters={docs:{description:{story:`Custom tooltip rendered as an HTML table for a more structured data presentation.`}}},D={render:()=>(0,g.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`,alignItems:`start`},children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h3`,{children:`Default Offset (0, -15)`}),(0,g.jsx)(m,{...x,width:350})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h3`,{children:`Custom Offset (20, -30)`}),(0,g.jsx)(m,{...x,width:350,tooltipOffsetX:20,tooltipOffsetY:-30})]})]}),args:{containerWidth:`800px`,containerHeight:`300px`},parameters:{docs:{description:{story:"Demonstrates tooltip positioning with `tooltipOffsetX` and `tooltipOffsetY` props. The right chart has a custom offset applied."}}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <PieSemiCircleChart {...args} />`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => <PieSemiCircleChart {...args} />`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => <PieSemiCircleChart {...args} />`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => <PieSemiCircleChart {...args} />`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <PieSemiCircleChart {...args} />`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'start'
  }}>
            <div>
                <h3>Default Offset (0, -15)</h3>
                <PieSemiCircleChart {...tooltipStoryArgs} width={350} />
            </div>
            <div>
                <h3>Custom Offset (20, -30)</h3>
                <PieSemiCircleChart {...tooltipStoryArgs} width={350} tooltipOffsetX={20} tooltipOffsetY={-30} />
            </div>
        </div>,
  args: {
    containerWidth: '800px',
    containerHeight: '300px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates tooltip positioning with \`tooltipOffsetX\` and \`tooltipOffsetY\` props. The right chart has a custom offset applied.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`NoTooltips`,`Custom`,`CustomWithEmoji`,`CustomTableTooltip`,`TooltipOffset`]}))();export{w as Custom,E as CustomTableTooltip,T as CustomWithEmoji,S as Default,C as NoTooltips,D as TooltipOffset,O as __namedExportsOrder,y as default};