"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[805],{"../charts/src/charts/pie-chart/stories/donut.stories.tsx"(j,S,n){n.r(S),n.d(S,{Animation:()=>v,CustomLegend:()=>w,CustomLegendPositioning:()=>P,Default:()=>a,ErrorStates:()=>p,InteractiveLegend:()=>E,Thin:()=>y,WithCompositionLegend:()=>L,WithLegend:()=>_,WithSize:()=>c,WithTooltips:()=>A,WithoutCenter:()=>i,__namedExportsOrder:()=>W,default:()=>r});var h=n("../../../node_modules/.pnpm/@wordpress+components@32.3.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.mjs"),g=n("../../../node_modules/.pnpm/@wordpress+components@32.3.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.mjs"),f=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),D=n("../charts/src/providers/chart-context/global-charts-provider.tsx"),T=n("../charts/src/stories/chart-decorator.tsx"),x=n("../charts/src/stories/theme-config.tsx"),m=n("../charts/src/stories/legend-config.tsx"),C=n("../charts/src/stories/sample-data/index.ts"),d=n("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),t=n("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),s=n("../charts/src/charts/pie-chart/pie-chart.tsx"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=[{label:"Active Users",value:65e3,valueDisplay:"65K",percentage:65},{label:"Inactive Users",value:35e3,valueDisplay:"35K",percentage:35}],r={title:"JS Packages/Charts Library/Charts/Donut Chart",component:s.A,parameters:{layout:"centered"},decorators:[T.OI],argTypes:{...T.xo,...x.jW,...m.r,legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}}},render:l=>{const b=(0,m.D)(l);return(0,e.jsx)(s.A,{...l,legend:b})}},a={args:{...x.In,containerWidth:"432px",containerHeight:"432px",thickness:.5,gapScale:.03,cornerScale:.03,withTooltips:!0,data:o,children:(0,e.jsxs)(d.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"User Activity"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Total: 100K Users"})]})}},c={args:{...a.args,size:200,thickness:.3,showLabels:!1,children:(0,e.jsxs)(d.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:-16,children:"User Activity"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:16,children:"Total: 100K Users"})]})}},i={args:{...a.args,children:void 0}},p={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Empty Data"}),(0,e.jsx)(s.A,{height:300,thickness:.6,data:[]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Single Value"}),(0,e.jsx)(s.A,{height:300,thickness:.6,data:[{label:"Single",value:100,percentage:100}]})]})]})},y={args:{...a.args,thickness:.2,gapScale:.01,showLabels:!1,children:(0,e.jsxs)(d.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"Thin Donut"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Thickness: 20%"})]})}},v={args:{...a.args,animation:!0}},A={args:{...a.args,showLabels:!1,withTooltips:!0,children:(0,e.jsxs)(d.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:-10,children:"Hover over segments"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:10,children:"to see tooltips"})]})}},_={args:{...a.args,showLegend:!0,containerHeight:"500px"}},L={render:l=>{const b=(0,m.D)(l);return(0,e.jsxs)(s.A,{...l,size:300,thickness:.5,chartId:"composition-donut-chart",children:[(0,e.jsxs)(d.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]}),(0,e.jsx)(s.A.Legend,{...b})]})},args:{data:o,thickness:.5},parameters:{docs:{description:{story:"Demonstrates the donut chart composition API, allowing flexible combination of chart elements and legends."}}}},E={render:l=>(0,e.jsx)(D.S,{children:(0,e.jsxs)(s.W,{chartId:"interactive-donut-chart",size:l.size,data:l.data,thickness:.5,showLegend:!0,legend:(0,m.D)(l),legendValueDisplay:l.legendValueDisplay,children:[(0,e.jsxs)(d.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]}),(0,e.jsx)("p",{style:{color:"#666"},children:"Click legend items to show/hide segments. The total value updates dynamically."})]})}),args:{data:o,thickness:.5,legendInteractive:!0},parameters:{docs:{description:{story:"Interactive donut chart with clickable legend. Segments can be hidden/shown, and percentages recalculate automatically. Requires chartId and GlobalChartsProvider."}}}},P={args:{...a.args,thickness:.4,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top",containerHeight:"450px",data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],children:(0,e.jsx)(d.A,{children:(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:-8,children:"Distribution"})})},parameters:{docs:{description:{story:"Donut chart with vertical legend positioned at the top left."}}}},z=({chartItems:l,items:b,withComparison:M})=>(0,e.jsx)("div",{style:{display:"inline-grid",gridTemplateColumns:"1fr auto auto",gap:"var(--wpds-dimension-gap-xs, 4px) var(--wpds-dimension-gap-sm, 8px)"},children:b.map((O,I)=>{const{color:U}=l[I];return(0,e.jsxs)(f.Fragment,{children:[(0,e.jsxs)(h.A,{direction:"row",justify:"flex-start",spacing:2,children:[(0,e.jsx)("div",{style:{width:"8px",height:"8px",borderRadius:"50%",flexShrink:0,backgroundColor:U}}),(0,e.jsx)(g.A,{size:"small",children:O.label})]}),(0,e.jsx)(g.A,{size:"small",weight:600,style:{textAlign:"right"},children:O.formattedValue}),(0,e.jsx)(g.A,{size:"small",style:{textAlign:"right",color:"#008a20"},children:M&&O.comparison})]},I)})}),w={render:l=>(0,e.jsx)(s.W,{...l,children:(0,e.jsx)(s.W.Legend,{render:b=>(0,e.jsx)(z,{chartItems:b,items:C.AC,withComparison:l.withComparison})})}),args:{...a.args,data:C.TW,showLabels:!1,thickness:.3,cornerScale:.03,gapScale:.01,size:164,withComparison:!0,withTooltips:!1,containerHeight:"300px"},parameters:{docs:{description:{story:"Demonstrates how to customize the legend using the render prop."}}}},W=["Default","WithSize","WithoutCenter","ErrorStates","Thin","Animation","WithTooltips","WithLegend","WithCompositionLegend","InteractiveLegend","CustomLegendPositioning","CustomLegend"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: undefined
  }
}`,...i.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...v.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    containerHeight: '500px'
  }
}`,..._.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig(args);
    return <PieChart {...args} size={300} thickness={0.5} chartId="composition-donut-chart">
                <Group>
                    <Text textAnchor="middle" verticalAnchor="middle" fontSize={16} y={-8}>
                        User Stats
                    </Text>
                    <Text textAnchor="middle" verticalAnchor="middle" fontSize={14} y={12} fill="#666">
                        100K Total
                    </Text>
                </Group>
                <PieChart.Legend {...legend} />
            </PieChart>;
  },
  args: {
    data,
    thickness: 0.5
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the donut chart composition API, allowing flexible combination of chart elements and legends.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <GlobalChartsProvider>
            <PieChartUnresponsive chartId="interactive-donut-chart" size={args.size} data={args.data} thickness={0.5} showLegend={true} legend={extractLegendConfig(args)} legendValueDisplay={args.legendValueDisplay}>
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
    thickness: 0.5,
    legendInteractive: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive donut chart with clickable legend. Segments can be hidden/shown, and percentages recalculate automatically. Requires chartId and GlobalChartsProvider.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}}},"../charts/src/components/legend/hooks/use-chart-legend-items.ts"(j,S,n){n.d(S,{f:()=>d});var h=n("../number-formatters/src/index.ts"),g=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=n("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),D=n("../charts/src/utils/format-percentage.ts");function T(t,s,e="percentage"){if(!s||e==="none")return"";if("percentage"in t){const o=t;switch(e){case"percentage":return(0,D.E)(o.percentage);case"value":return(0,h.ZV)(o.value);case"valueDisplay":return o.valueDisplay||(0,h.ZV)(o.value);default:return""}}return"value"in t&&t.value!==null?(0,h.ZV)(t.value):""}function x(t,s,e,o,u){if(s){const r=e||o;if(r)return{...t,glyphSize:u,renderGlyph:r}}return t}function m(t,s,e,o,u,r,a){const c=(i,p)=>{const{color:y,glyph:v,shapeStyles:A}=s({data:i,index:p,legendShape:a}),_={label:i.label,value:e?i.data?.length?.toString()||"0":"",color:y,shapeStyle:A};return x(_,o,v,r,u)};return t.map(c)}function C(t,s,e,o,u,r,a,c){const i=(p,y)=>{const{color:v,glyph:A,shapeStyles:_}=s({data:p,index:y,legendShape:c}),L={label:p.label,value:T(p,e,o),color:v,shapeStyle:_};return x(L,u,A,a,r)};return t.map(i)}function d(t,s={},e){const{showValues:o=!1,legendValueDisplay:u="percentage",withGlyph:r=!1,glyphSize:a=8,renderGlyph:c}=s,{getElementStyles:i}=(0,f.j)();return(0,g.useMemo)(()=>!t||!Array.isArray(t)||t.length===0?[]:"data"in t[0]?m(t,i,o,r,a,c,e):C(t,i,o,u,r,a,c,e),[t,i,o,u,r,a,c,e])}},"../charts/src/stories/legend-config.tsx"(j,S,n){n.d(S,{D:()=>g,r:()=>h});const h={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for individual legend items. This allows consumers to customize legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."},legendShapeStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:"{ width?: number; height?: number; margin?: string | number }"}},description:"Styles for legend shapes (width, height, margin)."},legendItemStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:'{ margin?: string | number; flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" }'}},description:"Styles for each legend item (margin, flexDirection)."}};function g(f){const{legendPosition:D,legendAlignment:T,legendOrientation:x,legendShape:m,legendInteractive:C,legendItemClassName:d,legendMaxWidth:t,legendTextOverflow:s,legendShapeStyles:e,legendItemStyles:o}=f;if(!(D!==void 0||T!==void 0||x!==void 0||m!==void 0||C!==void 0||d!==void 0||t!==void 0||s!==void 0||e!==void 0||o!==void 0))return;const r={};return x!==void 0&&(r.orientation=x),D!==void 0&&(r.position=D),T!==void 0&&(r.alignment=T),m!==void 0&&(r.shape=m),C!==void 0&&(r.interactive=C),d!==void 0&&(r.itemClassName=d),(t!==void 0||s!==void 0)&&(r.labelStyles={},t!==void 0&&(r.labelStyles.maxWidth=t),s!==void 0&&(r.labelStyles.textOverflow=s)),e!==void 0&&(r.shapeStyles=e),o!==void 0&&(r.itemStyles=o),r}try{g.displayName="extractLegendConfig",g.__docgenInfo={description:"Extracts flat legend story args into a `ChartLegendConfig` object.\nUse in story render functions to bridge flat Storybook controls to the nested `legend` prop.",displayName:"extractLegendConfig",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#extractLegendConfig"]={docgenInfo:g.__docgenInfo,name:"extractLegendConfig",path:"../charts/src/stories/legend-config.tsx#extractLegendConfig"})}catch{}try{h.displayName="legendArgTypes",h.__docgenInfo={description:"Shared legend configuration for chart stories.\nProvides consistent argTypes and decorators across all chart legend stories.\n\nThese use flat keys for reliable Storybook controls. Use `extractLegendConfig`\nin render functions to map them to the nested `legend` prop.",displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:h.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../charts/src/utils/format-percentage.ts"(j,S,n){n.d(S,{E:()=>g});var h=n("../number-formatters/src/index.ts");const g=f=>(0,h.ZV)(f/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})}}]);
