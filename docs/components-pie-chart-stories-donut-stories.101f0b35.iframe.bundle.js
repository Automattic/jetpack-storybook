"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1830],{"../charts/src/components/pie-chart/stories/donut.stories.tsx":(_,i,n)=>{n.r(i),n.d(i,{CustomLegendPositioning:()=>v,CustomTheme:()=>h,Default:()=>r,Doughnut:()=>g,ErrorStates:()=>p,Thin:()=>m,WithCompositionLegend:()=>A,WithLegend:()=>x,WithTooltipsDoughnut:()=>u,WithoutCenter:()=>l,__namedExportsOrder:()=>T,default:()=>f});var o=n("../charts/src/providers/theme/themes.ts"),a=n("../charts/src/stories/decorator-config.tsx"),c=n("../charts/src/stories/legend-config.tsx"),s=n("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),t=n("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),d=n("../charts/src/components/pie-chart/pie-chart.tsx"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=[{label:"Active Users",value:65e3,valueDisplay:"65K",percentage:65},{label:"Inactive Users",value:35e3,valueDisplay:"35K",percentage:35}],f={title:"JS Packages/Charts/Types/Donut Chart",component:d.A,parameters:{layout:"centered"},decorators:a.p,argTypes:{...c.r,size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}},theme:{control:{type:"select"},options:["default","jetpack","woo"],mapping:{default:void 0,jetpack:o.QI,woo:o.pk},defaultValue:"default"},maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}}}},r={args:{size:400,containerWidth:"432px",containerHeight:"432px",resize:"none",thickness:.5,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,data:y,theme:"default",children:(0,e.jsxs)(s.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"User Activity"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Total: 100K Users"})]})}},l={args:{...r.args,children:void 0}},h={args:{...r.args,theme:o.pk}},p={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Empty Data"}),(0,e.jsx)(d.A,{size:300,thickness:.6,data:[]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Single Value"}),(0,e.jsx)(d.A,{size:300,thickness:.6,data:[{label:"Single",value:100,percentage:100}]})]})]})},m={args:{...r.args,thickness:.2,gapScale:.01,size:700,containerWidth:"732px",containerHeight:"732px",children:(0,e.jsxs)(s.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"Thin Donut"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Thickness: 20%"})]})}},g={args:{...r.args,thickness:.5,gapScale:.03,cornerScale:.03,size:600,containerWidth:"632px",containerHeight:"632px",children:(0,e.jsxs)(s.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"\u{1F369} Doughnut"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fill:"#008A20",fontSize:18,y:16,children:"Three donuts for the price of one!"})]})},parameters:{docs:{description:{story:"Doughnut chart variant with the thickness set to 0.5 (50%)."}}}},u={args:{...r.args,thickness:.5,withTooltips:!0},parameters:{docs:{description:{story:"Doughnut chart with interactive tooltips that appear on hover."}}}},x={args:{...r.args,showLegend:!0}},A={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Traditional Props-based"}),(0,e.jsx)(d.A,{size:300,data:y,thickness:.5,showLegend:!0,legendPosition:"bottom",legendOrientation:"horizontal",children:(0,e.jsxs)(s.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]})})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Composition API"}),(0,e.jsxs)(d.A,{size:300,data:y,thickness:.5,children:[(0,e.jsxs)(s.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]}),(0,e.jsx)(d.A.Legend,{position:"bottom",orientation:"horizontal",alignment:"center"})]})]})]}),parameters:{docs:{description:{story:"Demonstrates the donut chart composition API, allowing flexible combination of chart elements and legends."}}}},v={args:{...r.args,thickness:.4,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top",data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],children:(0,e.jsx)(s.A,{children:(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:-8,children:"Distribution"})})},parameters:{docs:{description:{story:"Donut chart with vertical legend positioned at the top left."}}}},T=["Default","WithoutCenter","CustomTheme","ErrorStates","Thin","Doughnut","WithTooltipsDoughnut","WithLegend","WithCompositionLegend","CustomLegendPositioning"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 400,
    containerWidth: '432px',
    containerHeight: '432px',
    resize: 'none',
    thickness: 0.5,
    gapScale: 0.03,
    padding: 20,
    cornerScale: 0.03,
    withTooltips: true,
    data,
    theme: 'default',
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={24} y={-16}>
                    User Activity
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={18} y={16}>
                    Total: 100K Users
                </Text>
            </Group>
  }
}`,...r.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: undefined
  }
}`,...l.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    theme: wooTheme
  }
}`,...h.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Empty Data</h3>
                <PieChart size={300} thickness={0.6} data={[]} />
            </div>
            <div>
                <h3>Single Value</h3>
                <PieChart size={300} thickness={0.6} data={[{
        label: 'Single',
        value: 100,
        percentage: 100
      }]} />
            </div>
        </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.2,
    gapScale: 0.01,
    size: 700,
    containerWidth: '732px',
    containerHeight: '732px',
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={24} y={-16}>
                    Thin Donut
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={18} y={16}>
                    Thickness: 20%
                </Text>
            </Group>
  }
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.5,
    gapScale: 0.03,
    cornerScale: 0.03,
    size: 600,
    containerWidth: '632px',
    containerHeight: '632px',
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={24} y={-16}>
                    \u{1F369} Doughnut
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fill="#008A20" fontSize={18} y={16}>
                    Three donuts for the price of one!
                </Text>
            </Group>
  },
  parameters: {
    docs: {
      description: {
        story: 'Doughnut chart variant with the thickness set to 0.5 (50%).'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.5,
    withTooltips: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Doughnut chart with interactive tooltips that appear on hover.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...x.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center'
  }}>
            <div>
                <h3>Traditional Props-based</h3>
                <PieChart size={300} data={data} thickness={0.5} showLegend={true} legendPosition="bottom" legendOrientation="horizontal">
                    <Group>
                        <Text textAnchor="middle" verticalAnchor="middle" fontSize={16} y={-8}>
                            User Stats
                        </Text>
                        <Text textAnchor="middle" verticalAnchor="middle" fontSize={14} y={12} fill="#666">
                            100K Total
                        </Text>
                    </Group>
                </PieChart>
            </div>
            <div>
                <h3>Composition API</h3>
                <PieChart size={300} data={data} thickness={0.5}>
                    <Group>
                        <Text textAnchor="middle" verticalAnchor="middle" fontSize={16} y={-8}>
                            User Stats
                        </Text>
                        <Text textAnchor="middle" verticalAnchor="middle" fontSize={14} y={12} fill="#666">
                            100K Total
                        </Text>
                    </Group>
                    <PieChart.Legend position="bottom" orientation="horizontal" alignment="center" />
                </PieChart>
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the donut chart composition API, allowing flexible combination of chart elements and legends.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.4,
    showLegend: true,
    legendOrientation: 'vertical',
    legendAlignment: 'start',
    legendPosition: 'top',
    data: [{
      label: 'Desktop',
      value: 45000,
      valueDisplay: '45K',
      percentage: 45
    }, {
      label: 'Mobile',
      value: 35000,
      valueDisplay: '35K',
      percentage: 35
    }, {
      label: 'Tablet',
      value: 20000,
      valueDisplay: '20K',
      percentage: 20
    }],
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={18} y={-8}>
                    Distribution
                </Text>
            </Group>
  },
  parameters: {
    docs: {
      description: {
        story: 'Donut chart with vertical legend positioned at the top left.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}}},"../charts/src/stories/decorator-config.tsx":(_,i,n)=>{n.d(i,{p:()=>c});var o=n("../charts/src/providers/theme/theme-provider.tsx"),a=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c=[(s,{args:t})=>(0,a.jsx)(o.N,{theme:t.theme,children:(0,a.jsx)("div",{style:{resize:t.resize??"both",overflow:"auto",padding:"1rem",width:t.containerWidth??"800px",height:t.containerHeight??"600px",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,a.jsx)(s,{})})})];try{c.displayName="sharedDecorator",c.__docgenInfo={description:"Shared decorator for legend stories with theme support and resizable container",displayName:"sharedDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/decorator-config.tsx#sharedDecorator"]={docgenInfo:c.__docgenInfo,name:"sharedDecorator",path:"../charts/src/stories/decorator-config.tsx#sharedDecorator"})}catch{}},"../charts/src/stories/legend-config.tsx":(_,i,n)=>{n.d(i,{r:()=>o});const o={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"}};try{o.displayName="legendArgTypes",o.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:o.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}}]);
