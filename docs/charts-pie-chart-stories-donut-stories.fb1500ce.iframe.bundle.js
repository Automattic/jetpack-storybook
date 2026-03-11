"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[805],{"../charts/src/charts/pie-chart/stories/donut.stories.tsx"(O,y,n){n.r(y),n.d(y,{Animation:()=>T,CustomLegend:()=>w,CustomLegendPositioning:()=>P,Default:()=>a,ErrorStates:()=>x,InteractiveLegend:()=>E,Thin:()=>S,WithCompositionLegend:()=>b,WithLegend:()=>D,WithSize:()=>p,WithTooltips:()=>C,WithoutCenter:()=>c,__namedExportsOrder:()=>W,default:()=>o});var l=n("../../../node_modules/.pnpm/@wordpress+components@32.3.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.mjs"),h=n("../../../node_modules/.pnpm/@wordpress+components@32.3.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.mjs"),u=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),A=n("../charts/src/providers/chart-context/global-charts-provider.tsx"),v=n("../charts/src/stories/chart-decorator.tsx"),f=n("../charts/src/stories/theme-config.tsx"),m=n("../charts/src/stories/legend-config.tsx"),_=n("../charts/src/stories/sample-data/index.ts"),i=n("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),t=n("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),r=n("../charts/src/charts/pie-chart/pie-chart.tsx"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=[{label:"Active Users",value:65e3,valueDisplay:"65K",percentage:65},{label:"Inactive Users",value:35e3,valueDisplay:"35K",percentage:35}],o={title:"JS Packages/Charts Library/Charts/Donut Chart",component:r.A,parameters:{layout:"centered"},decorators:[v.OI],argTypes:{...v.xo,...f.jW,...m.r,legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}}},render:d=>{const L=(0,m.D)(d);return(0,e.jsx)(r.A,{...d,legend:L})}},a={args:{...f.In,containerWidth:"432px",containerHeight:"432px",thickness:.5,gapScale:.03,cornerScale:.03,withTooltips:!0,data:s,children:(0,e.jsxs)(i.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"User Activity"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Total: 100K Users"})]})}},p={args:{...a.args,size:200,thickness:.3,showLabels:!1,children:(0,e.jsxs)(i.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:-16,children:"User Activity"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:16,children:"Total: 100K Users"})]})}},c={args:{...a.args,children:void 0}},x={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Empty Data"}),(0,e.jsx)(r.A,{height:300,thickness:.6,data:[]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Single Value"}),(0,e.jsx)(r.A,{height:300,thickness:.6,data:[{label:"Single",value:100,percentage:100}]})]})]})},S={args:{...a.args,thickness:.2,gapScale:.01,showLabels:!1,children:(0,e.jsxs)(i.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"Thin Donut"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Thickness: 20%"})]})}},T={args:{...a.args,animation:!0}},C={args:{...a.args,showLabels:!1,withTooltips:!0,children:(0,e.jsxs)(i.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:-10,children:"Hover over segments"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:10,children:"to see tooltips"})]})}},D={args:{...a.args,showLegend:!0,containerHeight:"500px"}},b={render:d=>{const L=(0,m.D)(d);return(0,e.jsxs)(r.A,{size:300,data:d.data,thickness:.5,legendValueDisplay:d.legendValueDisplay,chartId:"composition-donut-chart",children:[(0,e.jsxs)(i.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]}),(0,e.jsx)(r.A.Legend,{...L})]})},args:{data:s,thickness:.5},parameters:{docs:{description:{story:"Demonstrates the donut chart composition API, allowing flexible combination of chart elements and legends."}}}},E={render:d=>(0,e.jsx)(A.S,{children:(0,e.jsxs)(r.W,{chartId:"interactive-donut-chart",size:d.size,data:d.data,thickness:.5,showLegend:!0,legend:(0,m.D)(d),legendValueDisplay:d.legendValueDisplay,children:[(0,e.jsxs)(i.A,{children:[(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]}),(0,e.jsx)("p",{style:{color:"#666"},children:"Click legend items to show/hide segments. The total value updates dynamically."})]})}),args:{data:s,thickness:.5,legendInteractive:!0},parameters:{docs:{description:{story:"Interactive donut chart with clickable legend. Segments can be hidden/shown, and percentages recalculate automatically. Requires chartId and GlobalChartsProvider."}}}},P={args:{...a.args,thickness:.4,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top",containerHeight:"450px",data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],children:(0,e.jsx)(i.A,{children:(0,e.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:-8,children:"Distribution"})})},parameters:{docs:{description:{story:"Donut chart with vertical legend positioned at the top left."}}}},I=({chartItems:d,items:L,withComparison:M})=>(0,e.jsx)("div",{style:{display:"inline-grid",gridTemplateColumns:"1fr auto auto",gap:"var(--wpds-dimension-gap-xs, 4px) var(--wpds-dimension-gap-sm, 8px)"},children:L.map((j,z)=>{const{color:U}=d[z];return(0,e.jsxs)(u.Fragment,{children:[(0,e.jsxs)(l.A,{direction:"row",justify:"flex-start",spacing:2,children:[(0,e.jsx)("div",{style:{width:"8px",height:"8px",borderRadius:"50%",flexShrink:0,backgroundColor:U}}),(0,e.jsx)(h.A,{size:"small",children:j.label})]}),(0,e.jsx)(h.A,{size:"small",weight:600,style:{textAlign:"right"},children:j.formattedValue}),(0,e.jsx)(h.A,{size:"small",style:{textAlign:"right",color:"#008a20"},children:M&&j.comparison})]},z)})}),w={render:d=>(0,e.jsx)(r.W,{...d,children:(0,e.jsx)(r.W.Legend,{render:L=>(0,e.jsx)(I,{chartItems:L,items:_.AC,withComparison:d.withComparison})})}),args:{...a.args,data:_.TW,showLabels:!1,thickness:.3,cornerScale:.03,gapScale:.01,size:164,withComparison:!0,withTooltips:!1,containerHeight:"300px"},parameters:{docs:{description:{story:"Demonstrates how to customize the legend using the render prop."}}}},W=["Default","WithSize","WithoutCenter","ErrorStates","Thin","Animation","WithTooltips","WithLegend","WithCompositionLegend","InteractiveLegend","CustomLegendPositioning","CustomLegend"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: undefined
  }
}`,...c.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...T.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    containerHeight: '500px'
  }
}`,...D.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig(args);
    return <PieChart size={300} data={args.data} thickness={0.5} legendValueDisplay={args.legendValueDisplay} chartId="composition-donut-chart">
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
}`,...b.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}}},"../charts/src/components/legend/hooks/use-chart-legend-items.ts"(O,y,n){n.d(y,{f:()=>i});var l=n("../number-formatters/src/index.ts"),h=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=n("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),A=n("../charts/src/utils/format-percentage.ts");function v(t,r,e="percentage"){if(!r||e==="none")return"";if("percentage"in t){const s=t;switch(e){case"percentage":return(0,A.E)(s.percentage);case"value":return(0,l.ZV)(s.value);case"valueDisplay":return s.valueDisplay||(0,l.ZV)(s.value);default:return""}}return"value"in t&&t.value!==null?(0,l.ZV)(t.value):""}function f(t,r,e,s,g){if(r){const o=e||s;if(o)return{...t,glyphSize:g,renderGlyph:o}}return t}function m(t,r,e,s,g,o,a){const p=(c,x)=>{const{color:S,glyph:T,shapeStyles:C}=r({data:c,index:x,legendShape:a}),D={label:c.label,value:e?c.data?.length?.toString()||"0":"",color:S,shapeStyle:C};return f(D,s,T,o,g)};return t.map(p)}function _(t,r,e,s,g,o,a,p){const c=(x,S)=>{const{color:T,glyph:C,shapeStyles:D}=r({data:x,index:S,legendShape:p}),b={label:x.label,value:v(x,e,s),color:T,shapeStyle:D};return f(b,g,C,a,o)};return t.map(c)}function i(t,r={},e){const{showValues:s=!1,legendValueDisplay:g="percentage",withGlyph:o=!1,glyphSize:a=8,renderGlyph:p}=r,{getElementStyles:c}=(0,u.j)();return(0,h.useMemo)(()=>!t||!Array.isArray(t)||t.length===0?[]:"data"in t[0]?m(t,c,s,o,a,p,e):_(t,c,s,g,o,a,p,e),[t,c,s,g,o,a,p,e])}},"../charts/src/hooks/use-element-size.ts"(O,y,n){n.d(y,{L:()=>h});var l=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function h({initialWidth:u=0,initialHeight:A=0}={}){const[v,f]=(0,l.useState)(u),[m,_]=(0,l.useState)(A),i=(0,l.useRef)(null);return[(0,l.useCallback)(r=>{if(i.current&&(i.current.disconnect(),i.current=null),r){const e=()=>{const g=r.getBoundingClientRect();f(g.width||0),_(g.height||0)};e();const s=new ResizeObserver(e);s.observe(r),i.current=s}},[]),v,m]}},"../charts/src/stories/legend-config.tsx"(O,y,n){n.d(y,{D:()=>h,r:()=>l});const l={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for individual legend items. This allows consumers to customize legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."},legendShapeStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:"{ width?: number; height?: number; margin?: string | number }"}},description:"Styles for legend shapes (width, height, margin)."},legendItemStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:'{ margin?: string | number; flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" }'}},description:"Styles for each legend item (margin, flexDirection)."}};function h(u){const{legendPosition:A,legendAlignment:v,legendOrientation:f,legendShape:m,legendInteractive:_,legendItemClassName:i,legendMaxWidth:t,legendTextOverflow:r,legendShapeStyles:e,legendItemStyles:s}=u;if(!(A!==void 0||v!==void 0||f!==void 0||m!==void 0||_!==void 0||i!==void 0||t!==void 0||r!==void 0||e!==void 0||s!==void 0))return;const o={};return f!==void 0&&(o.orientation=f),A!==void 0&&(o.position=A),v!==void 0&&(o.alignment=v),m!==void 0&&(o.shape=m),_!==void 0&&(o.interactive=_),i!==void 0&&(o.itemClassName=i),(t!==void 0||r!==void 0)&&(o.labelStyles={},t!==void 0&&(o.labelStyles.maxWidth=t),r!==void 0&&(o.labelStyles.textOverflow=r)),e!==void 0&&(o.shapeStyles=e),s!==void 0&&(o.itemStyles=s),o}try{h.displayName="extractLegendConfig",h.__docgenInfo={description:"Extracts flat legend story args into a `ChartLegendConfig` object.\nUse in story render functions to bridge flat Storybook controls to the nested `legend` prop.",displayName:"extractLegendConfig",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#extractLegendConfig"]={docgenInfo:h.__docgenInfo,name:"extractLegendConfig",path:"../charts/src/stories/legend-config.tsx#extractLegendConfig"})}catch{}try{l.displayName="legendArgTypes",l.__docgenInfo={description:"Shared legend configuration for chart stories.\nProvides consistent argTypes and decorators across all chart legend stories.\n\nThese use flat keys for reliable Storybook controls. Use `extractLegendConfig`\nin render functions to map them to the nested `legend` prop.",displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:l.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../charts/src/utils/format-percentage.ts"(O,y,n){n.d(y,{E:()=>h});var l=n("../number-formatters/src/index.ts");const h=u=>(0,l.ZV)(u/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})}}]);
