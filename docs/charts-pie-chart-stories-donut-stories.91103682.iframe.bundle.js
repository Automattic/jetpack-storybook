"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[805],{"../charts/src/charts/pie-chart/stories/donut.stories.tsx":((w,p,n)=>{n.r(p),n.d(p,{Animation:()=>A,CustomLegend:()=>E,CustomLegendPositioning:()=>b,Default:()=>s,Doughnut:()=>v,ErrorStates:()=>l,InteractiveLegend:()=>P,Thin:()=>g,WithCompositionLegend:()=>T,WithLegend:()=>f,WithTooltipsDoughnut:()=>y,WithoutCenter:()=>d,__namedExportsOrder:()=>I,default:()=>h});var i=n("../../../node_modules/.pnpm/@wordpress+components@32.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.mjs"),m=n("../../../node_modules/.pnpm/@wordpress+components@32.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.mjs"),D=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),C=n("../charts/src/providers/chart-context/global-charts-provider.tsx"),S=n("../charts/src/stories/chart-decorator.tsx"),u=n("../charts/src/stories/theme-config.tsx"),O=n("../charts/src/stories/legend-config.tsx"),_=n("../charts/src/stories/sample-data/index.ts"),c=n("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),t=n("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),a=n("../charts/src/charts/pie-chart/pie-chart.tsx"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=[{label:"Active Users",value:65e3,valueDisplay:"65K",percentage:65},{label:"Inactive Users",value:35e3,valueDisplay:"35K",percentage:35}],h={title:"JS Packages/Charts Library/Charts/Donut Chart",component:a.A,parameters:{layout:"centered"},decorators:[S.OI],argTypes:{...S.xo,...u.jW,...O.r,size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}}}},s={args:{...u.In,size:400,containerWidth:"432px",containerHeight:"432px",resize:"none",thickness:.5,gapScale:.03,cornerScale:.03,withTooltips:!0,data:o,children:(0,e.jsxs)(c.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"User Activity"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Total: 100K Users"})]})}},d={args:{...s.args,children:void 0}},l={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Empty Data"}),(0,e.jsx)(a.A,{size:300,thickness:.6,data:[]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Single Value"}),(0,e.jsx)(a.A,{size:300,thickness:.6,data:[{label:"Single",value:100,percentage:100}]})]})]})},g={args:{...s.args,thickness:.2,gapScale:.01,size:700,containerWidth:"732px",containerHeight:"732px",children:(0,e.jsxs)(c.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"Thin Donut"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Thickness: 20%"})]})}},v={args:{...s.args,thickness:.5,gapScale:.03,cornerScale:.03,size:600,containerWidth:"632px",containerHeight:"632px",children:(0,e.jsxs)(c.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"\u{1F369} Doughnut"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fill:"#008A20",fontSize:18,y:16,children:"Three donuts for the price of one!"})]})},parameters:{docs:{description:{story:"Doughnut chart variant with the thickness set to 0.5 (50%)."}}}},y={args:{...s.args,thickness:.5,withTooltips:!0},parameters:{docs:{description:{story:"Doughnut chart with interactive tooltips that appear on hover."}}}},A={args:{...s.args,animation:!0}},f={args:{...s.args,showLegend:!0,containerHeight:"500px"}},T={render:r=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Traditional Props-based"}),(0,e.jsx)(a.A,{size:300,data:r.data,thickness:.5,showLegend:!0,legendPosition:r.legendPosition||"bottom",legendOrientation:r.legendOrientation||"horizontal",legendAlignment:r.legendAlignment||"center",legendMaxWidth:r.legendMaxWidth,legendTextOverflow:r.legendTextOverflow||"wrap",legendValueDisplay:r.legendValueDisplay,children:(0,e.jsxs)(c.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]})})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Composition API"}),(0,e.jsxs)(a.A,{size:300,data:r.data,thickness:.5,legendValueDisplay:r.legendValueDisplay,children:[(0,e.jsxs)(c.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]}),(0,e.jsx)(a.A.Legend,{position:r.legendPosition||"bottom",orientation:r.legendOrientation||"horizontal",alignment:r.legendAlignment||"center",maxWidth:r.legendMaxWidth,textOverflow:r.legendTextOverflow||"wrap"})]})]})]}),args:{data:o,thickness:.5,containerHeight:"500px"},argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{docs:{description:{story:"Demonstrates the donut chart composition API, allowing flexible combination of chart elements and legends."}}}},P={render:r=>(0,e.jsx)(C.S,{children:(0,e.jsxs)("div",{style:{padding:"20px"},children:[(0,e.jsx)("h3",{children:"Interactive Donut Chart"}),(0,e.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Click legend items to show/hide segments. The total value updates dynamically."}),(0,e.jsx)(a.W,{chartId:"interactive-donut-chart",size:r.size||400,data:r.data,thickness:.5,showLegend:!0,legendInteractive:!0,legendPosition:r.legendPosition||"bottom",legendOrientation:r.legendOrientation||"horizontal",legendAlignment:r.legendAlignment||"center",legendValueDisplay:r.legendValueDisplay,children:(0,e.jsxs)(c.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]})})]})}),args:{data:o,size:400,thickness:.5,containerHeight:"600px"},parameters:{docs:{description:{story:"Interactive donut chart with clickable legend. Segments can be hidden/shown, and percentages recalculate automatically. Requires chartId and GlobalChartsProvider."}}}},b={args:{...s.args,thickness:.4,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top",data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],children:(0,e.jsx)(c.A,{children:(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:-8,children:"Distribution"})})},parameters:{docs:{description:{story:"Donut chart with vertical legend positioned at the top left."}}}},W=({chartItems:r,items:L,withComparison:M})=>(0,e.jsx)("div",{style:{display:"inline-grid",gridTemplateColumns:"1fr auto auto",gap:"var(--wpds-dimension-gap-2xs, 4px) var(--wpds-dimension-gap-xs, 8px)"},children:L.map((z,j)=>{const{color:k}=r[j];return(0,e.jsxs)(D.Fragment,{children:[(0,e.jsxs)(i.A,{direction:"row",justify:"flex-start",spacing:2,children:[(0,e.jsx)("div",{style:{width:"8px",height:"8px",borderRadius:"50%",flexShrink:0,backgroundColor:k}}),(0,e.jsx)(m.A,{size:"small",children:z.label})]}),(0,e.jsx)(m.A,{size:"small",weight:600,style:{textAlign:"right"},children:z.formattedValue}),(0,e.jsx)(m.A,{size:"small",style:{textAlign:"right",color:"#008a20"},children:M&&z.comparison})]},j)})}),E={render:r=>(0,e.jsx)(a.W,{...r,children:(0,e.jsx)(a.W.Legend,{render:L=>(0,e.jsx)(W,{chartItems:L,items:_.AC,withComparison:r.withComparison})})}),args:{...s.args,data:_.TW.map(r=>({...r,label:""})),thickness:.3,cornerScale:.03,gapScale:.01,size:164,withComparison:!0,withTooltips:!1,containerHeight:"300px"},parameters:{docs:{description:{story:"Demonstrates how to customize the legend using the render prop."}}}},I=["Default","WithoutCenter","ErrorStates","Thin","Doughnut","WithTooltipsDoughnut","Animation","WithLegend","WithCompositionLegend","InteractiveLegend","CustomLegendPositioning","CustomLegend"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    size: 400,
    containerWidth: '432px',
    containerHeight: '432px',
    resize: 'none',
    thickness: 0.5,
    gapScale: 0.03,
    cornerScale: 0.03,
    withTooltips: true,
    data,
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={24} y={-16}>
                    User Activity
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={18} y={16}>
                    Total: 100K Users
                </Text>
            </Group>
  }
}`,...s.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: undefined
  }
}`,...d.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...A.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    containerHeight: '500px'
  }
}`,...f.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center'
  }}>
            <div>
                <h3>Traditional Props-based</h3>
                <PieChart size={300} data={args.data} thickness={0.5} showLegend={true} legendPosition={args.legendPosition || 'bottom'} legendOrientation={args.legendOrientation || 'horizontal'} legendAlignment={args.legendAlignment || 'center'} legendMaxWidth={args.legendMaxWidth} legendTextOverflow={args.legendTextOverflow || 'wrap'} legendValueDisplay={args.legendValueDisplay}>
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
                <PieChart size={300} data={args.data} thickness={0.5} legendValueDisplay={args.legendValueDisplay}>
                    <Group>
                        <Text textAnchor="middle" verticalAnchor="middle" fontSize={16} y={-8}>
                            User Stats
                        </Text>
                        <Text textAnchor="middle" verticalAnchor="middle" fontSize={14} y={12} fill="#666">
                            100K Total
                        </Text>
                    </Group>
                    <PieChart.Legend position={args.legendPosition || 'bottom'} orientation={args.legendOrientation || 'horizontal'} alignment={args.legendAlignment || 'center'} maxWidth={args.legendMaxWidth} textOverflow={args.legendTextOverflow || 'wrap'} />
                </PieChart>
            </div>
        </div>,
  args: {
    data,
    thickness: 0.5,
    containerHeight: '500px'
  },
  argTypes: {
    legendInteractive: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the donut chart composition API, allowing flexible combination of chart elements and legends.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <GlobalChartsProvider>
            <div style={{
      padding: '20px'
    }}>
                <h3>Interactive Donut Chart</h3>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    Click legend items to show/hide segments. The total value updates dynamically.
                </p>
                <PieChartUnresponsive chartId="interactive-donut-chart" size={args.size || 400} data={args.data} thickness={0.5} showLegend={true} legendInteractive={true} legendPosition={args.legendPosition || 'bottom'} legendOrientation={args.legendOrientation || 'horizontal'} legendAlignment={args.legendAlignment || 'center'} legendValueDisplay={args.legendValueDisplay}>
                    <Group>
                        <Text textAnchor="middle" verticalAnchor="middle" fontSize={16} y={-8}>
                            User Stats
                        </Text>
                        <Text textAnchor="middle" verticalAnchor="middle" fontSize={14} y={12} fill="#666">
                            100K Total
                        </Text>
                    </Group>
                </PieChartUnresponsive>
            </div>
        </GlobalChartsProvider>,
  args: {
    data,
    size: 400,
    thickness: 0.5,
    containerHeight: '600px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive donut chart with clickable legend. Segments can be hidden/shown, and percentages recalculate automatically. Requires chartId and GlobalChartsProvider.'
      }
    }
  }
}`,...P.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <PieChartUnresponsive {...args}>
            <PieChartUnresponsive.Legend
    // eslint-disable-next-line react/jsx-no-bind
    render={items => <CustomPieLegend chartItems={items} items={customerRevenueLegendData} withComparison={args.withComparison} />} />
        </PieChartUnresponsive>,
  args: {
    ...Default.args,
    data: customerRevenueData.map(segment => ({
      ...segment,
      label: ''
    })),
    thickness: 0.3,
    cornerScale: 0.03,
    gapScale: 0.01,
    size: 164,
    withComparison: true,
    withTooltips: false,
    containerHeight: '300px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how to customize the legend using the render prop.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}}}),"../charts/src/components/legend/hooks/use-chart-legend-items.ts":((w,p,n)=>{n.d(p,{f:()=>c});var i=n("../number-formatters/src/index.ts"),m=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),D=n("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),C=n("../charts/src/utils/format-percentage.ts");function S(t,a,e="percentage"){if(!a||e==="none")return"";if("percentage"in t){const o=t;switch(e){case"percentage":return(0,C.E)(o.percentage);case"value":return(0,i.ZV)(o.value);case"valueDisplay":return o.valueDisplay||(0,i.ZV)(o.value);default:return""}}return"value"in t&&t.value!==null?(0,i.ZV)(t.value):""}function u(t,a,e,o,x){if(a){const h=e||o;if(h)return{...t,glyphSize:x,renderGlyph:h}}return t}function O(t,a,e,o,x,h,s){const d=(l,g)=>{const{color:v,glyph:y,shapeStyles:A}=a({data:l,index:g,legendShape:s}),f={label:l.label,value:e?l.data?.length?.toString()||"0":"",color:v,shapeStyle:A};return u(f,o,y,h,x)};return t.map(d)}function _(t,a,e,o,x,h,s,d){const l=(g,v)=>{const{color:y,glyph:A,shapeStyles:f}=a({data:g,index:v,legendShape:d}),T={label:g.label,value:S(g,e,o),color:y,shapeStyle:f};return u(T,x,A,s,h)};return t.map(l)}function c(t,a={},e){const{showValues:o=!1,legendValueDisplay:x="percentage",withGlyph:h=!1,glyphSize:s=8,renderGlyph:d}=a,{getElementStyles:l}=(0,D.j)();return(0,m.useMemo)(()=>!t||!Array.isArray(t)||t.length===0?[]:"data"in t[0]?O(t,l,o,h,s,d,e):_(t,l,o,x,h,s,d,e),[t,l,o,x,h,s,d,e])}}),"../charts/src/hooks/use-element-height.ts":((w,p,n)=>{n.d(p,{v:()=>m});var i=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function m({initialHeight:D=0}={}){const[C,S]=(0,i.useState)(D),u=(0,i.useRef)(null);return[(0,i.useCallback)(_=>{if(u.current&&(u.current.disconnect(),u.current=null),_){const c=()=>{S(_.getBoundingClientRect().height||0)};c();const t=new window.ResizeObserver(c);t.observe(_),u.current=t}},[]),C]}}),"../charts/src/stories/legend-config.tsx":((w,p,n)=>{n.d(p,{r:()=>i});const i={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."}};try{i.displayName="legendArgTypes",i.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:i.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}),"../charts/src/utils/format-percentage.ts":((w,p,n)=>{n.d(p,{E:()=>m});var i=n("../number-formatters/src/index.ts");const m=D=>(0,i.ZV)(D/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})})}]);
