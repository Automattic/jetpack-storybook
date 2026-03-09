"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[582],{"../charts/src/charts/leaderboard-chart/stories/index.stories.tsx"(j,O,r){r.r(O),r.d(O,{AdvancedFormatting:()=>_,Animation:()=>p,AspectRatio:()=>d,CurrencyFormatting:()=>v,CustomColors:()=>u,CustomLabel:()=>L,CustomLegendLabels:()=>E,Default:()=>o,EmptyData:()=>y,EmptyDataWithChildren:()=>b,FixedDimensions:()=>l,InteractiveLegend:()=>A,LargeValues:()=>f,Loading:()=>g,NegativeGrowth:()=>C,NumberFormatting:()=>w,OverlayLabelWithImage:()=>S,SmallDataset:()=>h,WithCompositionLegend:()=>D,WithLegend:()=>x,WithOverlayLabel:()=>m,WithoutComparison:()=>c,__namedExportsOrder:()=>K,default:()=>U});var n=r("../../../node_modules/.pnpm/@wordpress+ui@0.8.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1_stylelint@16.26.1/node_modules/@wordpress/ui/build-module/stack/stack.mjs"),P=r("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),I=r("../charts/src/providers/chart-context/themes.ts"),T=r("../charts/src/stories/chart-decorator.tsx"),F=r("../charts/src/stories/theme-config.tsx"),a=r("../charts/src/stories/sample-data/index.ts"),V=r("../charts/src/stories/legend-config.tsx"),s=r("../charts/src/utils/format-metric-value.ts"),B=r("../charts/src/utils/color-utils.ts"),i=r("../charts/src/charts/leaderboard-chart/leaderboard-chart.tsx"),t=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const U={title:"JS Packages/Charts Library/Charts/Leaderboard Chart",component:i.A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of leaderboard entries to display",table:{type:{summary:"LeaderboardEntry[]"}}},withComparison:{control:"boolean",description:"Whether to show comparison data (previous period bars and delta values)",table:{defaultValue:{summary:"false"}}},primaryColor:{control:"color",description:"Primary color for current period bars",table:{defaultValue:{summary:I.z.leaderboardChart.primaryColor}}},secondaryColor:{control:"color",description:"Secondary color for comparison period bars",table:{defaultValue:{summary:I.z.leaderboardChart.secondaryColor}}},valueFormatter:{control:!1,description:"Custom formatter function for values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue with compact notation"}}},deltaFormatter:{control:!1,description:"Custom formatter function for delta values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue as percentage"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name for the chart container",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}},withOverlayLabel:{control:"boolean",description:"Whether to overlay the label on top of the bar",table:{defaultValue:{summary:"false"}}},legendShapeStyles:{control:"object",description:"Styles for legend shapes (width, height, margin)",table:{category:"Legend",type:{summary:"{ width?: number; height?: number; margin?: string | number }"},defaultValue:{summary:"{ width: 8, height: 8 }"}}},legendLabels:{control:"object",description:"Custom labels for legend items",table:{category:"Legend",type:{summary:"{ primary?: string; comparison?: string }"},defaultValue:{summary:"undefined"}}},...T.xo,...V.r,...F.jW},args:{primaryColor:void 0,secondaryColor:void 0,themeName:"default",showLegend:!1,legendPosition:"bottom",legendAlignment:"center",legendOrientation:"horizontal",legendShape:"circle",withOverlayLabel:!1},decorators:[T.OI]},o={args:{...F.In,data:a.EJ,withComparison:!0,loading:!1}},l={args:{...o.args,width:300,height:400}},d={args:{...o.args,aspectRatio:.4}},c={args:{data:a.EJ,withComparison:!1,loading:!1}},m={args:{data:a.EJ,withOverlayLabel:!0}},g={args:{data:a.EJ,withComparison:!0,loading:!0}},p={args:{...o.args,animation:!0}},u={args:{data:a.EJ,withComparison:!0,loading:!1,primaryColor:"red",secondaryColor:"green"}},h={args:{data:a.mg,withComparison:!0,loading:!1}},y={args:{data:[],withComparison:!0,loading:!1}},b={args:{data:[],withComparison:!0,loading:!1},render:e=>(0,t.jsx)(i.A,{...e,children:(0,t.jsx)(n.B,{direction:"row",gap:"xs",align:"center",justify:"center",children:"Child element"})})},f={args:{data:a.wP,withComparison:!0,loading:!1}},C={args:{data:a.Ff,withComparison:!0,loading:!1}},v={args:{data:a.EJ,withComparison:!0,loading:!1,valueFormatter:e=>(0,s.d)(e,"currency",{useMultipliers:!0,decimals:1}),deltaFormatter:e=>(0,s.d)(e/100,"average",{decimals:0})}},w={args:{data:a.EJ,withComparison:!0,loading:!1,valueFormatter:e=>(0,s.d)(e,"number",{useMultipliers:!1,decimals:0}),deltaFormatter:e=>(0,s.d)(e/100,"average",{decimals:1})}},R=({label:e,imageColor:W,style:M={}})=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px",...M},children:[(0,t.jsx)("img",{src:`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='${encodeURIComponent(W)}'/></svg>`,alt:"icon",style:{width:"28px",height:"28px",verticalAlign:"middle",borderRadius:"4px"}}),(0,t.jsx)("span",{style:{fontSize:"13px"},children:e})]}),L={args:{data:a.n$.map(e=>({...e,label:(0,t.jsx)(R,{label:e.label,imageColor:e.imageColor})})),withComparison:!1,loading:!1}},_={args:{data:a.wP,withComparison:!0,loading:!1,valueFormatter:e=>e>=1e6?(0,s.d)(e,"currency",{useMultipliers:!0,decimals:1}):(0,s.d)(e,"currency",{useMultipliers:!1,decimals:0}),deltaFormatter:e=>(0,s.d)(e/100,"average",{decimals:1,signDisplay:"always"})}},J=e=>{const{getElementStyles:W}=(0,P.j)(),{color:M}=W({index:0,overrideColor:e.primaryColor}),N=(0,B.j5)(M,.08);return(0,t.jsx)(i.A,{...e,primaryColor:N})},S={args:{data:a.n$.map(e=>({...e,label:(0,t.jsx)(R,{label:e.label,imageColor:e.imageColor,style:{padding:"6px"}})})),withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--a8c--charts--leaderboard--bar--border-radius":"4px",fontFamily:'"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'}},render:e=>(0,t.jsx)(J,{...e})},x={args:{data:a.EJ,withComparison:!0,loading:!1,showLegend:!0}},E={args:{data:a.EJ,withComparison:!0,loading:!1,showLegend:!0,legendLabels:{primary:"Aug 11-Sep 9, 2025",comparison:"Jul 11-Aug 11, 2025"}}},D={render:e=>(0,t.jsx)(i.A,{...e,children:(0,t.jsx)(i.A.Legend,{shape:"circle",shapeStyles:{width:8,height:8},orientation:e.legendOrientation||"horizontal",alignment:e.legendAlignment||"center",position:e.legendPosition||"bottom"})}),args:{data:a.EJ,withComparison:!0,loading:!1,legendLabels:{primary:"Aug 11-Sep 9, 2025",comparison:"Jul 11-Aug 11, 2025"}},argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{docs:{description:{story:"Demonstrates the composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control over legend positioning and styling."}}}},A={args:{data:a.EJ,withComparison:!0,loading:!1,showLegend:!0,legendInteractive:!0,legendLabels:{primary:"Current period",comparison:"Previous period"}},parameters:{docs:{description:{story:"Interactive legend allows users to click legend items to toggle the visibility of current and previous period data. Click on the legend items to show/hide the corresponding bars and values. When all series are hidden, a message is displayed."}}}},K=["Default","FixedDimensions","AspectRatio","WithoutComparison","WithOverlayLabel","Loading","Animation","CustomColors","SmallDataset","EmptyData","EmptyDataWithChildren","LargeValues","NegativeGrowth","CurrencyFormatting","NumberFormatting","CustomLabel","AdvancedFormatting","OverlayLabelWithImage","WithLegend","CustomLegendLabels","WithCompositionLegend","InteractiveLegend"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    data: sampleData,
    withComparison: true,
    loading: false
  }
}`,...o.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 300,
    height: 400
  }
}`,...l.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.4
  }
}`,...d.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: false,
    loading: false
  }
}`,...c.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withOverlayLabel: true
  }
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: true
  }
}`,...g.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...p.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    primaryColor: 'red',
    secondaryColor: 'green'
  }
}`,...u.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    data: smallDataset,
    withComparison: true,
    loading: false
  }
}`,...h.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    withComparison: true,
    loading: false
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    data: largeValues,
    withComparison: true,
    loading: false
  }
}`,...f.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    data: negativeGrowth,
    withComparison: true,
    loading: false
  }
}`,...C.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataWithImageColor.map(entry => ({
      ...entry,
      label: <CustomLabelComponent label={entry.label} imageColor={entry.imageColor} />
    })),
    withComparison: false,
    loading: false
  }
}`,...L.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    showLegend: true
  }
}`,...x.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <LeaderboardChart {...args}>
            <LeaderboardChart.Legend shape="circle" shapeStyles={{
      width: 8,
      height: 8
    }} orientation={args.legendOrientation || 'horizontal'} alignment={args.legendAlignment || 'center'} position={args.legendPosition || 'bottom'} />
        </LeaderboardChart>,
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    legendLabels: {
      primary: 'Aug 11-Sep 9, 2025',
      comparison: 'Jul 11-Aug 11, 2025'
    }
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
        story: 'Demonstrates the composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control over legend positioning and styling.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}}},"../charts/src/stories/legend-config.tsx"(j,O,r){r.d(O,{r:()=>n});const n={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."}};try{n.displayName="legendArgTypes",n.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:n.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}}]);
