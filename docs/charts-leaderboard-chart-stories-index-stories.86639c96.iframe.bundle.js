"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[582],{"../charts/src/charts/leaderboard-chart/stories/index.stories.tsx"(N,j,n){n.r(j),n.d(j,{AdvancedFormatting:()=>W,Animation:()=>L,AspectRatio:()=>y,CurrencyFormatting:()=>D,CustomColors:()=>w,CustomLabel:()=>I,CustomLegendLabels:()=>T,Default:()=>i,EmptyData:()=>_,EmptyDataWithChildren:()=>x,FixedDimensions:()=>r,InteractiveLegend:()=>R,LargeValues:()=>E,Loading:()=>v,NegativeGrowth:()=>A,NumberFormatting:()=>O,OverlayLabelWithImage:()=>M,SmallDataset:()=>S,WithCompositionLegend:()=>F,WithLegend:()=>P,WithOverlayLabel:()=>b,WithoutComparison:()=>C,__namedExportsOrder:()=>K,default:()=>f});var c=n("../../../node_modules/.pnpm/@wordpress+ui@0.8.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1_stylelint@16.26.1/node_modules/@wordpress/ui/build-module/stack/stack.mjs"),m=n("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),g=n("../charts/src/providers/chart-context/themes.ts"),p=n("../charts/src/stories/chart-decorator.tsx"),u=n("../charts/src/stories/theme-config.tsx"),a=n("../charts/src/stories/sample-data/index.ts"),d=n("../charts/src/stories/legend-config.tsx"),o=n("../charts/src/utils/format-metric-value.ts"),h=n("../charts/src/utils/color-utils.ts"),s=n("../charts/src/charts/leaderboard-chart/leaderboard-chart.tsx"),t=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f={title:"JS Packages/Charts Library/Charts/Leaderboard Chart",component:s.A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of leaderboard entries to display",table:{type:{summary:"LeaderboardEntry[]"}}},withComparison:{control:"boolean",description:"Whether to show comparison data (previous period bars and delta values)",table:{defaultValue:{summary:"false"}}},primaryColor:{control:"color",description:"Primary color for current period bars",table:{defaultValue:{summary:g.z.leaderboardChart.primaryColor}}},secondaryColor:{control:"color",description:"Secondary color for comparison period bars",table:{defaultValue:{summary:g.z.leaderboardChart.secondaryColor}}},valueFormatter:{control:!1,description:"Custom formatter function for values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue with compact notation"}}},deltaFormatter:{control:!1,description:"Custom formatter function for delta values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue as percentage"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name for the chart container",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}},withOverlayLabel:{control:"boolean",description:"Whether to overlay the label on top of the bar",table:{defaultValue:{summary:"false"}}},legendLabels:{control:"object",description:"Custom labels for legend items",table:{category:"Legend",type:{summary:"{ primary?: string; comparison?: string }"},defaultValue:{summary:"undefined"}}},...p.xo,...d.r,...u.jW},args:{primaryColor:void 0,secondaryColor:void 0,themeName:"default",showLegend:!1,legendPosition:"bottom",legendAlignment:"center",legendOrientation:"horizontal",legendShape:"circle",withOverlayLabel:!1},decorators:[p.OI],render:e=>{const l=(0,d.D)(e);return(0,t.jsx)(s.A,{...e,legend:l})}},i={args:{...u.In,data:a.EJ,withComparison:!0,loading:!1}},r={args:{...i.args,width:300,height:400}},y={args:{...i.args,aspectRatio:.4}},C={args:{data:a.EJ,withComparison:!1,loading:!1}},b={args:{data:a.EJ,withOverlayLabel:!0}},v={args:{data:a.EJ,withComparison:!0,loading:!0}},L={args:{...i.args,animation:!0}},w={args:{data:a.EJ,withComparison:!0,loading:!1,primaryColor:"red",secondaryColor:"green"}},S={args:{data:a.mg,withComparison:!0,loading:!1}},_={args:{data:[],withComparison:!0,loading:!1}},x={args:{data:[],withComparison:!0,loading:!1},render:e=>(0,t.jsx)(s.A,{...e,children:(0,t.jsx)(c.B,{direction:"row",gap:"xs",align:"center",justify:"center",children:"Child element"})})},E={args:{data:a.wP,withComparison:!0,loading:!1}},A={args:{data:a.Ff,withComparison:!0,loading:!1}},D={args:{data:a.EJ,withComparison:!0,loading:!1,valueFormatter:e=>(0,o.d)(e,"currency",{useMultipliers:!0,decimals:1}),deltaFormatter:e=>(0,o.d)(e/100,"average",{decimals:0})}},O={args:{data:a.EJ,withComparison:!0,loading:!1,valueFormatter:e=>(0,o.d)(e,"number",{useMultipliers:!1,decimals:0}),deltaFormatter:e=>(0,o.d)(e/100,"average",{decimals:1})}},U=({label:e,imageColor:l,style:B={}})=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px",...B},children:[(0,t.jsx)("img",{src:`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='${encodeURIComponent(l)}'/></svg>`,alt:"icon",style:{width:"28px",height:"28px",verticalAlign:"middle",borderRadius:"4px"}}),(0,t.jsx)("span",{style:{fontSize:"13px"},children:e})]}),I={args:{data:a.n$.map(e=>({...e,label:(0,t.jsx)(U,{label:e.label,imageColor:e.imageColor})})),withComparison:!1,loading:!1}},W={args:{data:a.wP,withComparison:!0,loading:!1,valueFormatter:e=>e>=1e6?(0,o.d)(e,"currency",{useMultipliers:!0,decimals:1}):(0,o.d)(e,"currency",{useMultipliers:!1,decimals:0}),deltaFormatter:e=>(0,o.d)(e/100,"average",{decimals:1,signDisplay:"always"})}},J=e=>{const{getElementStyles:l}=(0,m.j)(),{color:B}=l({index:0,overrideColor:e.primaryColor}),k=(0,h.j5)(B,.08);return(0,t.jsx)(s.A,{...e,primaryColor:k})},M={args:{data:a.n$.map(e=>({...e,label:(0,t.jsx)(U,{label:e.label,imageColor:e.imageColor,style:{padding:"6px"}})})),withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--a8c--charts--leaderboard--bar--border-radius":"4px",fontFamily:'"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'}},render:e=>(0,t.jsx)(J,{...e})},P={args:{data:a.EJ,withComparison:!0,loading:!1,showLegend:!0}},T={args:{data:a.EJ,withComparison:!0,loading:!1,showLegend:!0,legendLabels:{primary:"Aug 11-Sep 9, 2025",comparison:"Jul 11-Aug 11, 2025"}}},F={render:e=>{const l=(0,d.D)(e);return(0,t.jsx)(s.A,{...e,chartId:"composition-leaderboard-chart",children:(0,t.jsx)(s.A.Legend,{...l,shapeStyles:{width:8,height:8,...l?.shapeStyles}})})},args:{data:a.EJ,withComparison:!0,loading:!1,legendLabels:{primary:"Aug 11-Sep 9, 2025",comparison:"Jul 11-Aug 11, 2025"}},parameters:{docs:{description:{story:"Demonstrates the composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control over legend positioning and styling."}}}},R={args:{data:a.EJ,withComparison:!0,loading:!1,showLegend:!0,legendInteractive:!0,legendLabels:{primary:"Current period",comparison:"Previous period"}},parameters:{docs:{description:{story:"Interactive legend allows users to click legend items to toggle the visibility of current and previous period data. Click on the legend items to show/hide the corresponding bars and values. When all series are hidden, a message is displayed."}}}},K=["Default","FixedDimensions","AspectRatio","WithoutComparison","WithOverlayLabel","Loading","Animation","CustomColors","SmallDataset","EmptyData","EmptyDataWithChildren","LargeValues","NegativeGrowth","CurrencyFormatting","NumberFormatting","CustomLabel","AdvancedFormatting","OverlayLabelWithImage","WithLegend","CustomLegendLabels","WithCompositionLegend","InteractiveLegend"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    data: sampleData,
    withComparison: true,
    loading: false
  }
}`,...i.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 300,
    height: 400
  }
}`,...r.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.4
  }
}`,...y.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: false,
    loading: false
  }
}`,...C.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withOverlayLabel: true
  }
}`,...b.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: true
  }
}`,...v.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...L.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    primaryColor: 'red',
    secondaryColor: 'green'
  }
}`,...w.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    data: smallDataset,
    withComparison: true,
    loading: false
  }
}`,...S.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    withComparison: true,
    loading: false
  }
}`,..._.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    withComparison: true,
    loading: false
  },
  render: args => <LeaderboardChart {...args}>
            <Stack direction="row" gap="xs" align="center" justify="center">
                Child element
            </Stack>
        </LeaderboardChart>
}`,...x.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    data: largeValues,
    withComparison: true,
    loading: false
  }
}`,...E.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    data: negativeGrowth,
    withComparison: true,
    loading: false
  }
}`,...A.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    valueFormatter: (value: number) => formatMetricValue(value, 'currency', {
      useMultipliers: true,
      decimals: 1
    }),
    deltaFormatter: (value: number) => formatMetricValue(value / 100, 'average', {
      decimals: 0
    })
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    valueFormatter: (value: number) => formatMetricValue(value, 'number', {
      useMultipliers: false,
      decimals: 0
    }),
    deltaFormatter: (value: number) => formatMetricValue(value / 100, 'average', {
      decimals: 1
    })
  }
}`,...O.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataWithImageColor.map(entry => ({
      ...entry,
      label: <CustomLabelComponent label={entry.label} imageColor={entry.imageColor} />
    })),
    withComparison: false,
    loading: false
  }
}`,...I.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    data: largeValues,
    withComparison: true,
    loading: false,
    valueFormatter: (value: number) => {
      if (value >= 1000000) {
        return formatMetricValue(value, 'currency', {
          useMultipliers: true,
          decimals: 1
        });
      }
      return formatMetricValue(value, 'currency', {
        useMultipliers: false,
        decimals: 0
      });
    },
    deltaFormatter: (value: number) => formatMetricValue(value / 100, 'average', {
      decimals: 1,
      signDisplay: 'always'
    })
  }
}`,...W.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataWithImageColor.map(entry => ({
      ...entry,
      label: <CustomLabelComponent label={entry.label} imageColor={entry.imageColor} style={{
        padding: '6px'
      }} />
    })),
    withComparison: true,
    withOverlayLabel: true,
    loading: false,
    style: {
      '--a8c--charts--leaderboard--bar--border-radius': '4px',
      fontFamily: \`"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif\`
    }
  },
  render: args => <LeaderboardChartWithOverlayLabelImage {...args} />
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    showLegend: true
  }
}`,...P.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    showLegend: true,
    legendLabels: {
      primary: 'Aug 11-Sep 9, 2025',
      comparison: 'Jul 11-Aug 11, 2025'
    }
  }
}`,...T.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig(args);
    return <LeaderboardChart {...args} chartId="composition-leaderboard-chart">
                <LeaderboardChart.Legend {...legend} shapeStyles={{
        width: 8,
        height: 8,
        ...legend?.shapeStyles
      }} />
            </LeaderboardChart>;
  },
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    legendLabels: {
      primary: 'Aug 11-Sep 9, 2025',
      comparison: 'Jul 11-Aug 11, 2025'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control over legend positioning and styling.'
      }
    }
  }
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    showLegend: true,
    legendInteractive: true,
    legendLabels: {
      primary: 'Current period',
      comparison: 'Previous period'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive legend allows users to click legend items to toggle the visibility of current and previous period data. Click on the legend items to show/hide the corresponding bars and values. When all series are hidden, a message is displayed.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}}},"../charts/src/stories/legend-config.tsx"(N,j,n){n.d(j,{D:()=>m,r:()=>c});const c={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for individual legend items. This allows consumers to customize legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."},legendShapeStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:"{ width?: number; height?: number; margin?: string | number }"}},description:"Styles for legend shapes (width, height, margin)."},legendItemStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:'{ margin?: string | number; flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" }'}},description:"Styles for each legend item (margin, flexDirection)."}};function m(g){const{legendPosition:p,legendAlignment:u,legendOrientation:a,legendShape:d,legendInteractive:o,legendItemClassName:h,legendMaxWidth:s,legendTextOverflow:t,legendShapeStyles:V,legendItemStyles:f}=g;if(!(p!==void 0||u!==void 0||a!==void 0||d!==void 0||o!==void 0||h!==void 0||s!==void 0||t!==void 0||V!==void 0||f!==void 0))return;const r={};return a!==void 0&&(r.orientation=a),p!==void 0&&(r.position=p),u!==void 0&&(r.alignment=u),d!==void 0&&(r.shape=d),o!==void 0&&(r.interactive=o),h!==void 0&&(r.itemClassName=h),(s!==void 0||t!==void 0)&&(r.labelStyles={},s!==void 0&&(r.labelStyles.maxWidth=s),t!==void 0&&(r.labelStyles.textOverflow=t)),V!==void 0&&(r.shapeStyles=V),f!==void 0&&(r.itemStyles=f),r}try{m.displayName="extractLegendConfig",m.__docgenInfo={description:"Extracts flat legend story args into a `ChartLegendConfig` object.\nUse in story render functions to bridge flat Storybook controls to the nested `legend` prop.",displayName:"extractLegendConfig",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#extractLegendConfig"]={docgenInfo:m.__docgenInfo,name:"extractLegendConfig",path:"../charts/src/stories/legend-config.tsx#extractLegendConfig"})}catch{}try{c.displayName="legendArgTypes",c.__docgenInfo={description:"Shared legend configuration for chart stories.\nProvides consistent argTypes and decorators across all chart legend stories.\n\nThese use flat keys for reliable Storybook controls. Use `extractLegendConfig`\nin render functions to map them to the nested `legend` prop.",displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:c.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}}]);
