"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[805],{"../charts/src/charts/pie-chart/stories/donut.stories.tsx"(D,S,r){r.r(S),r.d(S,{Animation:()=>y,CustomLegend:()=>b,Default:()=>t,ErrorStates:()=>a,Thin:()=>m,WithCompositionLegend:()=>v,WithLegend:()=>A,WithSize:()=>d,WithTooltips:()=>_,WithoutCenter:()=>c,__namedExportsOrder:()=>O,default:()=>p});var l=r("../../../node_modules/.pnpm/@wordpress+components@32.3.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.mjs"),g=r("../../../node_modules/.pnpm/@wordpress+components@32.3.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.mjs"),x=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),T=r("../charts/src/stories/chart-decorator.tsx"),C=r("../charts/src/stories/theme-config.tsx"),u=r("../charts/src/stories/legend-config.tsx"),L=r("../charts/src/stories/sample-data/index.ts"),h=r("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),i=r("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),n=r("../charts/src/charts/pie-chart/pie-chart.tsx"),e=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=[{label:"Active Users",value:65e3,valueDisplay:"65K",percentage:65},{label:"Inactive Users",value:35e3,valueDisplay:"35K",percentage:35}],p={title:"JS Packages/Charts Library/Charts/Donut Chart",component:n.A,parameters:{layout:"centered"},decorators:[T.OI],argTypes:{...T.xo,...C.jW,...u.r,legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}}},render:f=>{const E=(0,u.D)(f);return(0,e.jsx)(n.A,{...f,legend:E})}},t={args:{...C.In,containerWidth:"432px",containerHeight:"432px",thickness:.5,gapScale:.03,cornerScale:.03,withTooltips:!0,data:s,children:(0,e.jsxs)(h.A,{children:[(0,e.jsx)(i.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"User Activity"}),(0,e.jsx)(i.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Total: 100K Users"})]})}},d={args:{...t.args,size:200,thickness:.3,showLabels:!1,children:(0,e.jsxs)(h.A,{children:[(0,e.jsx)(i.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:-16,children:"User Activity"}),(0,e.jsx)(i.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:16,children:"Total: 100K Users"})]})}},c={args:{...t.args,children:void 0}},a={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Empty Data"}),(0,e.jsx)(n.A,{height:300,thickness:.6,data:[]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Single Value"}),(0,e.jsx)(n.A,{height:300,thickness:.6,data:[{label:"Single",value:100,percentage:100}]})]})]})},m={args:{...t.args,thickness:.2,gapScale:.01,showLabels:!1,children:(0,e.jsxs)(h.A,{children:[(0,e.jsx)(i.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"Thin Donut"}),(0,e.jsx)(i.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Thickness: 20%"})]})}},y={args:{...t.args,animation:!0}},_={args:{...t.args,showLabels:!1,withTooltips:!0,children:(0,e.jsxs)(h.A,{children:[(0,e.jsx)(i.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:-10,children:"Hover over segments"}),(0,e.jsx)(i.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:10,children:"to see tooltips"})]})}},A={args:{...t.args,showLegend:!0,containerHeight:"500px"},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},v={render:f=>{const E=(0,u.D)(f);return(0,e.jsxs)(n.A,{...f,size:300,thickness:.5,legend:{interactive:E?.interactive},chartId:"composition-donut-chart",children:[(0,e.jsxs)(h.A,{children:[(0,e.jsx)(i.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,e.jsx)(i.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]}),(0,e.jsx)(n.A.Legend,{...E})]})},args:{data:s,thickness:.5},parameters:{docs:{description:{story:"Composition API using `<PieChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},P=({chartItems:f,items:E,withComparison:W})=>(0,e.jsx)("div",{style:{display:"inline-grid",gridTemplateColumns:"1fr auto auto",gap:"var(--wpds-dimension-gap-xs, 4px) var(--wpds-dimension-gap-sm, 8px)"},children:E.map((j,w)=>{const{color:I}=f[w];return(0,e.jsxs)(x.Fragment,{children:[(0,e.jsxs)(l.A,{direction:"row",justify:"flex-start",spacing:2,children:[(0,e.jsx)("div",{style:{width:"8px",height:"8px",borderRadius:"50%",flexShrink:0,backgroundColor:I}}),(0,e.jsx)(g.A,{size:"small",children:j.label})]}),(0,e.jsx)(g.A,{size:"small",weight:600,style:{textAlign:"right"},children:j.formattedValue}),(0,e.jsx)(g.A,{size:"small",style:{textAlign:"right",color:"#008a20"},children:W&&j.comparison})]},w)})}),b={render:f=>(0,e.jsx)(n.W,{...f,children:(0,e.jsx)(n.W.Legend,{render:E=>(0,e.jsx)(P,{chartItems:E,items:L.AC,withComparison:f.withComparison})})}),args:{...t.args,data:L.TW,showLabels:!1,thickness:.3,cornerScale:.03,gapScale:.01,size:164,withComparison:!0,withTooltips:!1,containerHeight:"300px"},parameters:{docs:{description:{story:"Demonstrates how to customize the legend using the render prop."}}}},O=["Default","WithSize","WithoutCenter","ErrorStates","Thin","Animation","WithTooltips","WithLegend","WithCompositionLegend","CustomLegend"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: undefined
  }
}`,...c.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...y.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    containerHeight: '500px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Props-based legend using \`showLegend\` and the \`legend\` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig(args);
    return <PieChart {...args} size={300} thickness={0.5} legend={{
      interactive: legend?.interactive
    }} chartId="composition-donut-chart">
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
        story: 'Composition API using \`<PieChart.Legend />\` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}}},"../charts/src/components/legend/hooks/use-chart-legend-items.ts"(D,S,r){r.d(S,{f:()=>i});var l=r("../number-formatters/src/index.ts"),g=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),x=r("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),T=r("../charts/src/utils/format-percentage.ts");function C(n,e,s="percentage"){if(!e||s==="none")return"";if("percentage"in n){const o=n;switch(s){case"percentage":return(0,T.E)(o.percentage);case"value":return(0,l.ZV)(o.value);case"valueDisplay":return o.valueDisplay||(0,l.ZV)(o.value);default:return""}}return"value"in n&&n.value!==null?(0,l.ZV)(n.value):""}function u(n,e,s,o,p){if(e){const t=s||o;if(t)return{...n,glyphSize:p,renderGlyph:t}}return n}function L(n,e,s,o,p,t,d){const c=(a,m)=>{const{color:y,glyph:_,shapeStyles:A}=e({data:a,index:m,legendShape:d}),v={label:a.label,value:s?a.data?.length?.toString()||"0":"",color:y,shapeStyle:A};return u(v,o,_,t,p)};return n.map(c)}function h(n,e,s,o,p,t,d,c){const a=(m,y)=>{const{color:_,glyph:A,shapeStyles:v}=e({data:m,index:y,legendShape:c}),P={label:m.label,value:C(m,s,o),color:_,shapeStyle:v};return u(P,p,A,d,t)};return n.map(a)}function i(n,e={},s){const{showValues:o=!1,legendValueDisplay:p="percentage",withGlyph:t=!1,glyphSize:d=8,renderGlyph:c}=e,{getElementStyles:a}=(0,x.j)();return(0,g.useMemo)(()=>!n||!Array.isArray(n)||n.length===0?[]:"data"in n[0]?L(n,a,o,t,d,c,s):h(n,a,o,p,t,d,c,s),[n,a,o,p,t,d,c,s])}},"../charts/src/stories/legend-config.tsx"(D,S,r){r.d(S,{D:()=>g,r:()=>l});const l={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for individual legend items. This allows consumers to customize legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."},legendShapeStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:"{ width?: number; height?: number; margin?: string | number }"}},description:"Styles for legend shapes (width, height, margin)."},legendItemStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:'{ margin?: string | number; flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" }'}},description:"Styles for each legend item (margin, flexDirection)."}};function g(x){const{legendPosition:T,legendAlignment:C,legendOrientation:u,legendShape:L,legendInteractive:h,legendItemClassName:i,legendMaxWidth:n,legendTextOverflow:e,legendShapeStyles:s,legendItemStyles:o}=x;if(!(T!==void 0||C!==void 0||u!==void 0||L!==void 0||h!==void 0||i!==void 0||n!==void 0||e!==void 0||s!==void 0||o!==void 0))return;const t={};return u!==void 0&&(t.orientation=u),T!==void 0&&(t.position=T),C!==void 0&&(t.alignment=C),L!==void 0&&(t.shape=L),h!==void 0&&(t.interactive=h),i!==void 0&&(t.itemClassName=i),(n!==void 0||e!==void 0)&&(t.labelStyles={},n!==void 0&&(t.labelStyles.maxWidth=n),e!==void 0&&(t.labelStyles.textOverflow=e)),s!==void 0&&(t.shapeStyles=s),o!==void 0&&(t.itemStyles=o),t}try{g.displayName="extractLegendConfig",g.__docgenInfo={description:"Extracts flat legend story args into a `ChartLegendConfig` object.\nUse in story render functions to bridge flat Storybook controls to the nested `legend` prop.",displayName:"extractLegendConfig",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#extractLegendConfig"]={docgenInfo:g.__docgenInfo,name:"extractLegendConfig",path:"../charts/src/stories/legend-config.tsx#extractLegendConfig"})}catch{}try{l.displayName="legendArgTypes",l.__docgenInfo={description:"Shared legend configuration for chart stories.\nProvides consistent argTypes and decorators across all chart legend stories.\n\nThese use flat keys for reliable Storybook controls. Use `extractLegendConfig`\nin render functions to map them to the nested `legend` prop.",displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:l.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../charts/src/utils/format-percentage.ts"(D,S,r){r.d(S,{E:()=>g});var l=r("../number-formatters/src/index.ts");const g=x=>(0,l.ZV)(x/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})}}]);
