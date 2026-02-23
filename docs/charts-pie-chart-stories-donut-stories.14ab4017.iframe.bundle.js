"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[805],{"../charts/src/charts/pie-chart/stories/donut.stories.tsx"(w,m,n){n.r(m),n.d(m,{Animation:()=>v,CustomLegend:()=>E,CustomLegendPositioning:()=>P,Default:()=>a,ErrorStates:()=>p,InteractiveLegend:()=>L,Thin:()=>x,WithCompositionLegend:()=>T,WithLegend:()=>A,WithSize:()=>d,WithTooltips:()=>y,WithoutCenter:()=>l,__namedExportsOrder:()=>I,default:()=>g});var i=n("../../../node_modules/.pnpm/@wordpress+components@32.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.mjs"),u=n("../../../node_modules/.pnpm/@wordpress+components@32.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.mjs"),f=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),b=n("../charts/src/providers/chart-context/global-charts-provider.tsx"),S=n("../charts/src/stories/chart-decorator.tsx"),_=n("../charts/src/stories/theme-config.tsx"),C=n("../charts/src/stories/legend-config.tsx"),D=n("../charts/src/stories/sample-data/index.ts"),c=n("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),t=n("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),r=n("../charts/src/charts/pie-chart/pie-chart.tsx"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=[{label:"Active Users",value:65e3,valueDisplay:"65K",percentage:65},{label:"Inactive Users",value:35e3,valueDisplay:"35K",percentage:35}],g={title:"JS Packages/Charts Library/Charts/Donut Chart",component:r.A,parameters:{layout:"centered"},decorators:[S.OI],argTypes:{...S.xo,..._.jW,...C.r,size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}}}},a={args:{..._.In,containerWidth:"432px",containerHeight:"432px",thickness:.5,gapScale:.03,cornerScale:.03,withTooltips:!0,data:s,children:(0,e.jsxs)(c.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"User Activity"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Total: 100K Users"})]})}},d={args:{...a.args,size:200,thickness:.3,showLabels:!1,children:(0,e.jsxs)(c.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:-16,children:"User Activity"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:16,children:"Total: 100K Users"})]})}},l={args:{...a.args,children:void 0}},p={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Empty Data"}),(0,e.jsx)(r.A,{height:300,thickness:.6,data:[]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Single Value"}),(0,e.jsx)(r.A,{height:300,thickness:.6,data:[{label:"Single",value:100,percentage:100}]})]})]})},x={args:{...a.args,thickness:.2,gapScale:.01,showLabels:!1,children:(0,e.jsxs)(c.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"Thin Donut"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Thickness: 20%"})]})}},v={args:{...a.args,animation:!0}},y={args:{...a.args,showLabels:!1,withTooltips:!0,children:(0,e.jsxs)(c.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:-10,children:"Hover over segments"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:10,children:"to see tooltips"})]})}},A={args:{...a.args,showLegend:!0,containerHeight:"500px"}},T={render:o=>(0,e.jsxs)(r.A,{size:300,data:o.data,thickness:.5,legendValueDisplay:o.legendValueDisplay,children:[(0,e.jsxs)(c.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]}),(0,e.jsx)(r.A.Legend,{position:o.legendPosition||"bottom",orientation:o.legendOrientation||"horizontal",alignment:o.legendAlignment||"center",maxWidth:o.legendMaxWidth,textOverflow:o.legendTextOverflow||"wrap"})]}),args:{data:s,thickness:.5},argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{docs:{description:{story:"Demonstrates the donut chart composition API, allowing flexible combination of chart elements and legends."}}}},L={render:o=>(0,e.jsx)(b.S,{children:(0,e.jsxs)(r.W,{chartId:"interactive-donut-chart",size:o.size,data:o.data,thickness:.5,showLegend:!0,legendInteractive:!0,legendPosition:o.legendPosition||"bottom",legendOrientation:o.legendOrientation||"horizontal",legendAlignment:o.legendAlignment||"center",legendValueDisplay:o.legendValueDisplay,children:[(0,e.jsxs)(c.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]}),(0,e.jsx)("p",{style:{color:"#666"},children:"Click legend items to show/hide segments. The total value updates dynamically."})]})}),args:{data:s,thickness:.5},parameters:{docs:{description:{story:"Interactive donut chart with clickable legend. Segments can be hidden/shown, and percentages recalculate automatically. Requires chartId and GlobalChartsProvider."}}}},P={args:{...a.args,thickness:.4,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top",containerHeight:"450px",data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],children:(0,e.jsx)(c.A,{children:(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:-8,children:"Distribution"})})},parameters:{docs:{description:{story:"Donut chart with vertical legend positioned at the top left."}}}},W=({chartItems:o,items:O,withComparison:M})=>(0,e.jsx)("div",{style:{display:"inline-grid",gridTemplateColumns:"1fr auto auto",gap:"var(--wpds-dimension-gap-2xs, 4px) var(--wpds-dimension-gap-xs, 8px)"},children:O.map((j,z)=>{const{color:U}=o[z];return(0,e.jsxs)(f.Fragment,{children:[(0,e.jsxs)(i.A,{direction:"row",justify:"flex-start",spacing:2,children:[(0,e.jsx)("div",{style:{width:"8px",height:"8px",borderRadius:"50%",flexShrink:0,backgroundColor:U}}),(0,e.jsx)(u.A,{size:"small",children:j.label})]}),(0,e.jsx)(u.A,{size:"small",weight:600,style:{textAlign:"right"},children:j.formattedValue}),(0,e.jsx)(u.A,{size:"small",style:{textAlign:"right",color:"#008a20"},children:M&&j.comparison})]},z)})}),E={render:o=>(0,e.jsx)(r.W,{...o,children:(0,e.jsx)(r.W.Legend,{render:O=>(0,e.jsx)(W,{chartItems:O,items:D.AC,withComparison:o.withComparison})})}),args:{...a.args,data:D.TW,showLabels:!1,thickness:.3,cornerScale:.03,gapScale:.01,size:164,withComparison:!0,withTooltips:!1,containerHeight:"300px"},parameters:{docs:{description:{story:"Demonstrates how to customize the legend using the render prop."}}}},I=["Default","WithSize","WithoutCenter","ErrorStates","Thin","Animation","WithTooltips","WithLegend","WithCompositionLegend","InteractiveLegend","CustomLegendPositioning","CustomLegend"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    containerWidth: '432px',
    containerHeight: '432px',
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
}`,...a.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 200,
    thickness: 0.3,
    showLabels: false,
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={18} y={-16}>
                    User Activity
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={14} y={16}>
                    Total: 100K Users
                </Text>
            </Group>
  }
}`,...d.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: undefined
  }
}`,...l.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Empty Data</h3>
                <PieChart height={300} thickness={0.6} data={[]} />
            </div>
            <div>
                <h3>Single Value</h3>
                <PieChart height={300} thickness={0.6} data={[{
        label: 'Single',
        value: 100,
        percentage: 100
      }]} />
            </div>
        </div>
}`,...p.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.2,
    gapScale: 0.01,
    showLabels: false,
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={24} y={-16}>
                    Thin Donut
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={18} y={16}>
                    Thickness: 20%
                </Text>
            </Group>
  }
}`,...x.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLabels: false,
    withTooltips: true,
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={14} y={-10}>
                    Hover over segments
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={14} y={10}>
                    to see tooltips
                </Text>
            </Group>
  }
}`,...y.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    containerHeight: '500px'
  }
}`,...A.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <PieChart size={300} data={args.data} thickness={0.5} legendValueDisplay={args.legendValueDisplay}>
            <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={16} y={-8}>
                    User Stats
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={14} y={12} fill="#666">
                    100K Total
                </Text>
            </Group>
            <PieChart.Legend position={args.legendPosition || 'bottom'} orientation={args.legendOrientation || 'horizontal'} alignment={args.legendAlignment || 'center'} maxWidth={args.legendMaxWidth} textOverflow={args.legendTextOverflow || 'wrap'} />
        </PieChart>,
  args: {
    data,
    thickness: 0.5
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
}`,...T.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <GlobalChartsProvider>
            <PieChartUnresponsive chartId="interactive-donut-chart" size={args.size} data={args.data} thickness={0.5} showLegend={true} legendInteractive={true} legendPosition={args.legendPosition || 'bottom'} legendOrientation={args.legendOrientation || 'horizontal'} legendAlignment={args.legendAlignment || 'center'} legendValueDisplay={args.legendValueDisplay}>
                <Group>
                    <Text textAnchor="middle" verticalAnchor="middle" fontSize={16} y={-8}>
                        User Stats
                    </Text>
                    <Text textAnchor="middle" verticalAnchor="middle" fontSize={14} y={12} fill="#666">
                        100K Total
                    </Text>
                </Group>
                <p style={{
        color: '#666'
      }}>
                    Click legend items to show/hide segments. The total value updates dynamically.
                </p>
            </PieChartUnresponsive>
        </GlobalChartsProvider>,
  args: {
    data,
    thickness: 0.5
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive donut chart with clickable legend. Segments can be hidden/shown, and percentages recalculate automatically. Requires chartId and GlobalChartsProvider.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.4,
    showLegend: true,
    legendOrientation: 'vertical',
    legendAlignment: 'start',
    legendPosition: 'top',
    containerHeight: '450px',
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
}`,...P.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <PieChartUnresponsive {...args}>
            <PieChartUnresponsive.Legend
    // eslint-disable-next-line react/jsx-no-bind
    render={items => <CustomPieLegend chartItems={items} items={customerRevenueLegendData} withComparison={args.withComparison} />} />
        </PieChartUnresponsive>,
  args: {
    ...Default.args,
    data: customerRevenueData,
    showLabels: false,
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
}`,...E.parameters?.docs?.source}}}},"../charts/src/components/legend/hooks/use-chart-legend-items.ts"(w,m,n){n.d(m,{f:()=>c});var i=n("../number-formatters/src/index.ts"),u=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=n("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),b=n("../charts/src/utils/format-percentage.ts");function S(t,r,e="percentage"){if(!r||e==="none")return"";if("percentage"in t){const s=t;switch(e){case"percentage":return(0,b.E)(s.percentage);case"value":return(0,i.ZV)(s.value);case"valueDisplay":return s.valueDisplay||(0,i.ZV)(s.value);default:return""}}return"value"in t&&t.value!==null?(0,i.ZV)(t.value):""}function _(t,r,e,s,h){if(r){const g=e||s;if(g)return{...t,glyphSize:h,renderGlyph:g}}return t}function C(t,r,e,s,h,g,a){const d=(l,p)=>{const{color:x,glyph:v,shapeStyles:y}=r({data:l,index:p,legendShape:a}),A={label:l.label,value:e?l.data?.length?.toString()||"0":"",color:x,shapeStyle:y};return _(A,s,v,g,h)};return t.map(d)}function D(t,r,e,s,h,g,a,d){const l=(p,x)=>{const{color:v,glyph:y,shapeStyles:A}=r({data:p,index:x,legendShape:d}),T={label:p.label,value:S(p,e,s),color:v,shapeStyle:A};return _(T,h,y,a,g)};return t.map(l)}function c(t,r={},e){const{showValues:s=!1,legendValueDisplay:h="percentage",withGlyph:g=!1,glyphSize:a=8,renderGlyph:d}=r,{getElementStyles:l}=(0,f.j)();return(0,u.useMemo)(()=>!t||!Array.isArray(t)||t.length===0?[]:"data"in t[0]?C(t,l,s,g,a,d,e):D(t,l,s,h,g,a,d,e),[t,l,s,h,g,a,d,e])}},"../charts/src/hooks/use-element-size.ts"(w,m,n){n.d(m,{L:()=>u});var i=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function u({initialWidth:f=0,initialHeight:b=0}={}){const[S,_]=(0,i.useState)(f),[C,D]=(0,i.useState)(b),c=(0,i.useRef)(null);return[(0,i.useCallback)(r=>{if(c.current&&(c.current.disconnect(),c.current=null),r){const e=()=>{const h=r.getBoundingClientRect();_(h.width||0),D(h.height||0)};e();const s=new ResizeObserver(e);s.observe(r),c.current=s}},[]),S,C]}},"../charts/src/stories/legend-config.tsx"(w,m,n){n.d(m,{r:()=>i});const i={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."}};try{i.displayName="legendArgTypes",i.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:i.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../charts/src/utils/format-percentage.ts"(w,m,n){n.d(m,{E:()=>u});var i=n("../number-formatters/src/index.ts");const u=f=>(0,i.ZV)(f/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})}}]);
