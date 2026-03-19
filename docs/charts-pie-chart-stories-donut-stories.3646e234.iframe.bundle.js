"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[805],{"../charts/src/charts/pie-chart/stories/donut.stories.tsx"(b,y,t){t.r(y),t.d(y,{Animation:()=>A,CustomLegend:()=>j,Default:()=>s,ErrorStates:()=>c,Thin:()=>x,WithCompositionLegend:()=>C,WithLegend:()=>E,WithSize:()=>_,WithTooltips:()=>T,WithoutCenter:()=>f,__namedExportsOrder:()=>P,default:()=>u});var i=t("../../../node_modules/.pnpm/@wordpress+components@32.3.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.mjs"),d=t("../../../node_modules/.pnpm/@wordpress+components@32.3.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.mjs"),p=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=t("../charts/src/stories/chart-decorator.tsx"),l=t("../charts/src/stories/theme-config.tsx"),g=t("../charts/src/stories/legend-config.tsx"),S=t("../charts/src/stories/sample-data/index.ts"),h=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),a=t("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),n=t("../charts/src/charts/pie-chart/pie-chart.tsx"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=[{label:"Active Users",value:65e3,valueDisplay:"65K",percentage:65},{label:"Inactive Users",value:35e3,valueDisplay:"35K",percentage:35}],u={title:"JS Packages/Charts Library/Charts/Donut Chart",component:n.A,parameters:{layout:"centered"},decorators:[m.OI],argTypes:{...m.xo,...l.jW,...g.r,legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}}},render:v=>{const L=(0,g.D)(v);return(0,e.jsx)(n.A,{...v,legend:L})}},s={args:{...l.In,containerWidth:"432px",containerHeight:"432px",thickness:.5,gapScale:.03,cornerScale:.03,withTooltips:!0,data:o,children:(0,e.jsxs)(h.A,{children:[(0,e.jsx)(a.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"User Activity"}),(0,e.jsx)(a.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Total: 100K Users"})]})}},_={args:{...s.args,size:200,thickness:.3,showLabels:!1,children:(0,e.jsxs)(h.A,{children:[(0,e.jsx)(a.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:-16,children:"User Activity"}),(0,e.jsx)(a.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:16,children:"Total: 100K Users"})]})}},f={args:{...s.args,children:void 0}},c={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Empty Data"}),(0,e.jsx)(n.A,{height:300,thickness:.6,data:[]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Single Value"}),(0,e.jsx)(n.A,{height:300,thickness:.6,data:[{label:"Single",value:100,percentage:100}]})]})]})},x={args:{...s.args,thickness:.2,gapScale:.01,showLabels:!1,children:(0,e.jsxs)(h.A,{children:[(0,e.jsx)(a.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"Thin Donut"}),(0,e.jsx)(a.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Thickness: 20%"})]})}},A={args:{...s.args,animation:!0}},T={args:{...s.args,showLabels:!1,withTooltips:!0,children:(0,e.jsxs)(h.A,{children:[(0,e.jsx)(a.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:-10,children:"Hover over segments"}),(0,e.jsx)(a.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:10,children:"to see tooltips"})]})}},E={args:{...s.args,showLegend:!0,containerHeight:"500px"},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},C={render:v=>{const L=(0,g.D)(v);return(0,e.jsxs)(n.A,{...v,legend:{interactive:L?.interactive},chartId:"composition-donut-chart",children:[v.children,(0,e.jsx)(n.A.Legend,{...L})]})},args:{...s.args,containerHeight:"500px"},parameters:{docs:{description:{story:"Composition API using `<PieChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},D=({chartItems:v,items:L,withComparison:I})=>(0,e.jsx)("div",{style:{display:"inline-grid",gridTemplateColumns:"1fr auto auto",gap:"var(--wpds-dimension-gap-xs, 4px) var(--wpds-dimension-gap-sm, 8px)"},children:L.map((O,w)=>{const{color:W}=v[w];return(0,e.jsxs)(p.Fragment,{children:[(0,e.jsxs)(i.A,{direction:"row",justify:"flex-start",spacing:2,children:[(0,e.jsx)("div",{style:{width:"8px",height:"8px",borderRadius:"50%",flexShrink:0,backgroundColor:W}}),(0,e.jsx)(d.A,{size:"small",children:O.label})]}),(0,e.jsx)(d.A,{size:"small",weight:600,style:{textAlign:"right"},children:O.formattedValue}),(0,e.jsx)(d.A,{size:"small",style:{textAlign:"right",color:"#008a20"},children:I&&O.comparison})]},w)})}),j={render:v=>(0,e.jsx)(n.W,{...v,children:(0,e.jsx)(n.W.Legend,{render:L=>(0,e.jsx)(D,{chartItems:L,items:S.AC,withComparison:v.withComparison})})}),args:{...s.args,data:S.TW,showLabels:!1,thickness:.3,cornerScale:.03,gapScale:.01,size:164,withComparison:!0,withTooltips:!1,containerHeight:"300px"},parameters:{docs:{description:{story:"Demonstrates how to customize the legend using the render prop."}}}},P=["Default","WithSize","WithoutCenter","ErrorStates","Thin","Animation","WithTooltips","WithLegend","WithCompositionLegend","CustomLegend"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: undefined
  }
}`,...f.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...A.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig(args);
    return <PieChart {...args} legend={{
      interactive: legend?.interactive
    }} chartId="composition-donut-chart">
                {args.children}
                <PieChart.Legend {...legend} />
            </PieChart>;
  },
  args: {
    ...Default.args,
    containerHeight: '500px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Composition API using \`<PieChart.Legend />\` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}}},"../charts/src/charts/private/svg-empty-state/svg-empty-state.tsx"(b,y,t){t.d(y,{R:()=>a});var i=t("../../../node_modules/.pnpm/@wordpress+ui@0.8.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1_stylelint@16.26.1/node_modules/@wordpress/ui/build-module/stack/stack.mjs"),d=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=t.n(d),m=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/private/svg-empty-state/svg-empty-state.module.scss"),l={};l.insert="head",l.singleton=!1;var g=p()(m.A,l);const S=m.A.locals||{};var h=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a=({x:n,y:e,width:o,height:r,children:u})=>(0,h.jsx)("foreignObject",{x:n-o/2,y:e-r/2,width:o,height:r,children:(0,h.jsx)(i.B,{align:"center",justify:"center",className:S["svg-empty-state"],children:u})});try{a.displayName="SvgEmptyState",a.__docgenInfo={description:`Renders empty-state text inside an SVG using foreignObject so that the
message wraps onto multiple lines instead of being clipped.

The component centers the text within the specified area.`,displayName:"SvgEmptyState",props:{x:{defaultValue:null,description:"X coordinate of the center point",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"Y coordinate of the center point",name:"y",required:!0,type:{name:"number"}},width:{defaultValue:null,description:"Available width for the text area",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"Available height for the text area",name:"height",required:!0,type:{name:"number"}},children:{defaultValue:null,description:"Text content",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/svg-empty-state/svg-empty-state.tsx#SvgEmptyState"]={docgenInfo:a.__docgenInfo,name:"SvgEmptyState",path:"../charts/src/charts/private/svg-empty-state/svg-empty-state.tsx#SvgEmptyState"})}catch{}},"../charts/src/components/legend/hooks/use-chart-legend-items.ts"(b,y,t){t.d(y,{f:()=>a});var i=t("../number-formatters/src/index.ts"),d=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=t("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),m=t("../charts/src/utils/format-percentage.ts");function l(n,e,o="percentage"){if(!e||o==="none")return"";if("percentage"in n){const r=n;switch(o){case"percentage":return(0,m.E)(r.percentage);case"value":return(0,i.ZV)(r.value);case"valueDisplay":return r.valueDisplay||(0,i.ZV)(r.value);default:return""}}return"value"in n&&n.value!==null?(0,i.ZV)(n.value):""}function g(n,e,o,r,u){if(e){const s=o||r;if(s)return{...n,glyphSize:u,renderGlyph:s}}return n}function S(n,e,o,r,u,s,_){const f=(c,x)=>{const{color:A,glyph:T,shapeStyles:E}=e({data:c,index:x,legendShape:_}),C={label:c.label,value:o?c.data?.length?.toString()||"0":"",color:A,shapeStyle:E};return g(C,r,T,s,u)};return n.map(f)}function h(n,e,o,r,u,s,_,f){const c=(x,A)=>{const{color:T,glyph:E,shapeStyles:C}=e({data:x,index:A,legendShape:f}),D={label:x.label,value:l(x,o,r),color:T,shapeStyle:C};return g(D,u,E,_,s)};return n.map(c)}function a(n,e={},o){const{showValues:r=!1,legendValueDisplay:u="percentage",withGlyph:s=!1,glyphSize:_=8,renderGlyph:f}=e,{getElementStyles:c}=(0,p.j)();return(0,d.useMemo)(()=>!n||!Array.isArray(n)||n.length===0?[]:"data"in n[0]?S(n,c,r,s,_,f,o):h(n,c,r,u,s,_,f,o),[n,c,r,u,s,_,f,o])}},"../charts/src/stories/legend-config.tsx"(b,y,t){t.d(y,{D:()=>d,r:()=>i});const i={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for individual legend items. This allows consumers to customize legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."},legendShapeStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:"{ width?: number; height?: number; margin?: string | number }"}},description:"Styles for legend shapes (width, height, margin)."},legendItemStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:'{ margin?: string | number; flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" }'}},description:"Styles for each legend item (margin, flexDirection)."}};function d(p){const{legendPosition:m,legendAlignment:l,legendOrientation:g,legendShape:S,legendInteractive:h,legendItemClassName:a,legendMaxWidth:n,legendTextOverflow:e,legendShapeStyles:o,legendItemStyles:r}=p;if(!(m!==void 0||l!==void 0||g!==void 0||S!==void 0||h!==void 0||a!==void 0||n!==void 0||e!==void 0||o!==void 0||r!==void 0))return;const s={};return g!==void 0&&(s.orientation=g),m!==void 0&&(s.position=m),l!==void 0&&(s.alignment=l),S!==void 0&&(s.shape=S),h!==void 0&&(s.interactive=h),a!==void 0&&(s.itemClassName=a),(n!==void 0||e!==void 0)&&(s.labelStyles={},n!==void 0&&(s.labelStyles.maxWidth=n),e!==void 0&&(s.labelStyles.textOverflow=e)),o!==void 0&&(s.shapeStyles=o),r!==void 0&&(s.itemStyles=r),s}try{d.displayName="extractLegendConfig",d.__docgenInfo={description:"Extracts flat legend story args into a `ChartLegendConfig` object.\nUse in story render functions to bridge flat Storybook controls to the nested `legend` prop.",displayName:"extractLegendConfig",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#extractLegendConfig"]={docgenInfo:d.__docgenInfo,name:"extractLegendConfig",path:"../charts/src/stories/legend-config.tsx#extractLegendConfig"})}catch{}try{i.displayName="legendArgTypes",i.__docgenInfo={description:"Shared legend configuration for chart stories.\nProvides consistent argTypes and decorators across all chart legend stories.\n\nThese use flat keys for reliable Storybook controls. Use `extractLegendConfig`\nin render functions to map them to the nested `legend` prop.",displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:i.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../charts/src/utils/format-percentage.ts"(b,y,t){t.d(y,{E:()=>d});var i=t("../number-formatters/src/index.ts");const d=p=>(0,i.ZV)(p/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/private/svg-empty-state/svg-empty-state.module.scss"(b,y,t){t.d(y,{A:()=>g});var i=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=t.n(i),p=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),m=t.n(p),l=m()(d());l.push([b.id,".W96yaSYqyuTgaNOtqtwb{text-align:center;width:100%;height:100%;font-size:var(--wpds-font-size-md, 13px);color:var(--wpds-color-fg-content-neutral-weak, #6d6d6d)}",""]),l.locals={"svg-empty-state":"W96yaSYqyuTgaNOtqtwb"};const g=l}}]);
