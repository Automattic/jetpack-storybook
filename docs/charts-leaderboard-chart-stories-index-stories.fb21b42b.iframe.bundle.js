"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[582],{"../charts/src/charts/leaderboard-chart/stories/index.stories.tsx"(B,d,r){r.r(d),r.d(d,{AdvancedFormatting:()=>A,Animation:()=>C,AspectRatio:()=>u,CurrencyFormatting:()=>E,CustomColors:()=>b,CustomLabel:()=>D,CustomLegendLabels:()=>M,Default:()=>l,EmptyData:()=>L,EmptyDataWithChildren:()=>w,FixedDimensions:()=>g,InteractiveLegend:()=>I,LargeValues:()=>_,Loading:()=>f,NegativeGrowth:()=>x,NumberFormatting:()=>S,OverlayLabelWithImage:()=>O,SmallDataset:()=>v,WithCompositionLegend:()=>P,WithLegend:()=>W,WithOverlayLabel:()=>y,WithoutComparison:()=>h,__namedExportsOrder:()=>N,default:()=>J});var n=r("../../../node_modules/.pnpm/@wordpress+ui@0.7.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1_stylelint@16.26.1/node_modules/@wordpress/ui/build-module/stack/stack.mjs"),i=r("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),T=r("../charts/src/providers/chart-context/themes.ts"),p=r("../charts/src/stories/chart-decorator.tsx"),c=r("../charts/src/stories/theme-config.tsx"),a=r("../charts/src/stories/sample-data/index.ts"),F=r("../charts/src/stories/legend-config.tsx"),s=r("../charts/src/utils/format-metric-value.ts"),o=r("../charts/src/utils/color-utils.ts"),m=r("../charts/src/charts/leaderboard-chart/leaderboard-chart.tsx"),t=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const J={title:"JS Packages/Charts Library/Charts/Leaderboard Chart",component:m.A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of leaderboard entries to display",table:{type:{summary:"LeaderboardEntry[]"}}},withComparison:{control:"boolean",description:"Whether to show comparison data (previous period bars and delta values)",table:{defaultValue:{summary:"false"}}},primaryColor:{control:"color",description:"Primary color for current period bars",table:{defaultValue:{summary:T.z.leaderboardChart.primaryColor}}},secondaryColor:{control:"color",description:"Secondary color for comparison period bars",table:{defaultValue:{summary:T.z.leaderboardChart.secondaryColor}}},valueFormatter:{control:!1,description:"Custom formatter function for values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue with compact notation"}}},deltaFormatter:{control:!1,description:"Custom formatter function for delta values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue as percentage"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name for the chart container",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}},withOverlayLabel:{control:"boolean",description:"Whether to overlay the label on top of the bar",table:{defaultValue:{summary:"false"}}},legendShapeWidth:{control:"number",description:"Width of legend shapes in pixels",table:{category:"Legend",type:{summary:"number"},defaultValue:{summary:"8"}}},legendShapeHeight:{control:"number",description:"Height of legend shapes in pixels",table:{category:"Legend",type:{summary:"number"},defaultValue:{summary:"8"}}},legendLabels:{control:"object",description:"Custom labels for legend items",table:{category:"Legend",type:{summary:"{ primary?: string; comparison?: string }"},defaultValue:{summary:"undefined"}}},...p.xo,...F.r,...c.jW},args:{primaryColor:void 0,secondaryColor:void 0,themeName:"default",showLegend:!1,legendPosition:"bottom",legendAlignment:"center",legendOrientation:"horizontal",legendShape:"circle",legendShapeWidth:8,legendShapeHeight:8,withOverlayLabel:!1},decorators:[p.OI]},l={args:{...c.In,data:a.EJ,withComparison:!0,loading:!1}},g={args:{...l.args,width:300,height:400}},u={args:{...l.args,aspectRatio:.4}},h={args:{data:a.EJ,withComparison:!1,loading:!1}},y={args:{data:a.EJ,withOverlayLabel:!0}},f={args:{data:a.EJ,withComparison:!0,loading:!0}},C={args:{...l.args,animation:!0}},b={args:{data:a.EJ,withComparison:!0,loading:!1,primaryColor:"red",secondaryColor:"green"}},v={args:{data:a.mg,withComparison:!0,loading:!1}},L={args:{data:[],withComparison:!0,loading:!1}},w={args:{data:[],withComparison:!0,loading:!1},render:e=>(0,t.jsx)(m.A,{...e,children:(0,t.jsx)(n.B,{direction:"row",gap:"xs",align:"center",justify:"center",children:"Child element"})})},_={args:{data:a.wP,withComparison:!0,loading:!1}},x={args:{data:a.Ff,withComparison:!0,loading:!1}},E={args:{data:a.EJ,withComparison:!0,loading:!1,valueFormatter:e=>(0,s.d)(e,"currency",{useMultipliers:!0,decimals:1}),deltaFormatter:e=>(0,s.d)(e/100,"average",{decimals:0})}},S={args:{data:a.EJ,withComparison:!0,loading:!1,valueFormatter:e=>(0,s.d)(e,"number",{useMultipliers:!1,decimals:0}),deltaFormatter:e=>(0,s.d)(e/100,"average",{decimals:1})}},U=({label:e,imageColor:V,style:j={}})=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px",...j},children:[(0,t.jsx)("img",{src:`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='${encodeURIComponent(V)}'/></svg>`,alt:"icon",style:{width:"28px",height:"28px",verticalAlign:"middle",borderRadius:"4px"}}),(0,t.jsx)("span",{style:{fontSize:"13px"},children:e})]}),D={args:{data:a.n$.map(e=>({...e,label:(0,t.jsx)(U,{label:e.label,imageColor:e.imageColor})})),withComparison:!1,loading:!1}},A={args:{data:a.wP,withComparison:!0,loading:!1,valueFormatter:e=>e>=1e6?(0,s.d)(e,"currency",{useMultipliers:!0,decimals:1}):(0,s.d)(e,"currency",{useMultipliers:!1,decimals:0}),deltaFormatter:e=>(0,s.d)(e/100,"average",{decimals:1,signDisplay:"always"})}},K=e=>{const{getElementStyles:V}=(0,i.j)(),{color:j}=V({index:0,overrideColor:e.primaryColor}),H=(0,o.j5)(j,.08);return(0,t.jsx)(m.A,{...e,primaryColor:H})},O={args:{data:a.n$.map(e=>({...e,label:(0,t.jsx)(U,{label:e.label,imageColor:e.imageColor,style:{padding:"6px"}})})),withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--a8c--charts--leaderboard--bar--border-radius":"4px",fontFamily:'"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'}},render:e=>(0,t.jsx)(K,{...e})},W={args:{data:a.EJ,withComparison:!0,loading:!1,showLegend:!0}},M={args:{data:a.EJ,withComparison:!0,loading:!1,showLegend:!0,legendLabels:{primary:"Aug 11-Sep 9, 2025",comparison:"Jul 11-Aug 11, 2025"}}},P={render:e=>(0,t.jsx)(m.A,{...e,children:(0,t.jsx)(m.A.Legend,{shape:"circle",shapeWidth:8,shapeHeight:8})}),args:{data:a.EJ,withComparison:!0,loading:!1,legendLabels:{primary:"Aug 11-Sep 9, 2025",comparison:"Jul 11-Aug 11, 2025"}},argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{docs:{description:{story:"Demonstrates the composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control over legend positioning and styling."}}}},I={args:{data:a.EJ,withComparison:!0,loading:!1,showLegend:!0,legendInteractive:!0,legendLabels:{primary:"Current period",comparison:"Previous period"}},parameters:{docs:{description:{story:"Interactive legend allows users to click legend items to toggle the visibility of current and previous period data. Click on the legend items to show/hide the corresponding bars and values. When all series are hidden, a message is displayed."}}}},N=["Default","FixedDimensions","AspectRatio","WithoutComparison","WithOverlayLabel","Loading","Animation","CustomColors","SmallDataset","EmptyData","EmptyDataWithChildren","LargeValues","NegativeGrowth","CurrencyFormatting","NumberFormatting","CustomLabel","AdvancedFormatting","OverlayLabelWithImage","WithLegend","CustomLegendLabels","WithCompositionLegend","InteractiveLegend"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    data: sampleData,
    withComparison: true,
    loading: false
  }
}`,...l.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 300,
    height: 400
  }
}`,...g.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.4
  }
}`,...u.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: false,
    loading: false
  }
}`,...h.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withOverlayLabel: true
  }
}`,...y.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: true
  }
}`,...f.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...C.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    primaryColor: 'red',
    secondaryColor: 'green'
  }
}`,...b.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    data: smallDataset,
    withComparison: true,
    loading: false
  }
}`,...v.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    withComparison: true,
    loading: false
  }
}`,...L.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    data: largeValues,
    withComparison: true,
    loading: false
  }
}`,..._.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: negativeGrowth,
    withComparison: true,
    loading: false
  }
}`,...x.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataWithImageColor.map(entry => ({
      ...entry,
      label: <CustomLabelComponent label={entry.label} imageColor={entry.imageColor} />
    })),
    withComparison: false,
    loading: false
  }
}`,...D.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    showLegend: true
  }
}`,...W.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <LeaderboardChart {...args}>
            <LeaderboardChart.Legend shape="circle" shapeWidth={8} shapeHeight={8} />
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
}`,...P.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}}},"../charts/src/charts/private/chart-composition/use-chart-children.ts"(B,d,r){r.d(d,{n:()=>T});var n=r("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),i=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function T(p,c){return(0,i.useMemo)(()=>{const a=[],F=[],s=[];return i.Children.forEach(p,o=>{if((0,i.isValidElement)(o)){const t=o.type?.displayName;t===`${c}.SVG`||t==="Chart.SVG"?o.props?.children&&i.Children.forEach(o.props.children,R=>{a.push(R)}):t===`${c}.HTML`||t==="Chart.HTML"?o.props?.children&&i.Children.forEach(o.props.children,R=>{F.push(R)}):o.type===n.A?a.push(o):s.push(o)}}),{svgChildren:a,htmlChildren:F,otherChildren:s}},[p,c])}},"../charts/src/stories/legend-config.tsx"(B,d,r){r.d(d,{r:()=>n});const n={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."}};try{n.displayName="legendArgTypes",n.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:n.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}}]);
