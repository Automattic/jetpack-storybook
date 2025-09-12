"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8145],{"../charts/src/components/leaderboard-chart/stories/index.stories.tsx":((T,l,r)=>{r.r(l),r.d(l,{AdvancedFormatting:()=>L,CurrencyFormatting:()=>b,CustomColors:()=>u,CustomLabel:()=>v,CustomLegendLabels:()=>E,Default:()=>c,EmptyData:()=>y,LargeValues:()=>f,Loading:()=>g,NegativeGrowth:()=>C,NumberFormatting:()=>w,OverlayLabelWithImage:()=>_,SmallDataset:()=>h,WithCompositionLegend:()=>S,WithLegend:()=>x,WithOverlayLabel:()=>p,WithoutComparison:()=>m,__namedExportsOrder:()=>F,default:()=>P});var s=r("../charts/src/providers/chart-context/themes.ts"),o=r("../charts/src/stories/chart-decorator.tsx"),i=r("../charts/src/stories/theme-config.tsx"),a=r("../charts/src/stories/sample-data/index.ts"),A=r("../charts/src/stories/legend-config.tsx"),n=r("../charts/src/utils/format-metric-value.ts"),O=r("../charts/src/utils/color-utils.ts"),d=r("../charts/src/components/leaderboard-chart/leaderboard-chart.tsx"),t=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const P={title:"JS Packages/Charts/Types/Leaderboard Chart",component:d.A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of leaderboard entries to display",table:{type:{summary:"LeaderboardEntry[]"}}},withComparison:{control:"boolean",description:"Whether to show comparison data (previous period bars and delta values)",table:{defaultValue:{summary:"false"}}},primaryColor:{control:"color",description:"Primary color for current period bars",table:{defaultValue:{summary:s.zQ.leaderboardChart.primaryColor}}},secondaryColor:{control:"color",description:"Secondary color for comparison period bars",table:{defaultValue:{summary:s.zQ.leaderboardChart.secondaryColor}}},valueFormatter:{control:!1,description:"Custom formatter function for values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue with compact notation"}}},deltaFormatter:{control:!1,description:"Custom formatter function for delta values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue as percentage"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name for the chart container",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}},withOverlayLabel:{control:"boolean",description:"Whether to overlay the label on top of the bar",table:{defaultValue:{summary:"false"}}},legendShapeWidth:{control:"number",description:"Width of legend shapes in pixels",table:{category:"Legend",type:{summary:"number"},defaultValue:{summary:"8"}}},legendShapeHeight:{control:"number",description:"Height of legend shapes in pixels",table:{category:"Legend",type:{summary:"number"},defaultValue:{summary:"8"}}},legendLabels:{control:"object",description:"Custom labels for legend items",table:{category:"Legend",type:{summary:"{ primary?: string; comparison?: string }"},defaultValue:{summary:"undefined"}}},...o.xo,...A.r,...i.jW},args:{primaryColor:void 0,secondaryColor:void 0,themeName:"default",showLegend:!1,legendPosition:"bottom",legendAlignment:"center",legendOrientation:"horizontal",legendShape:"circle",legendShapeWidth:8,legendShapeHeight:8,withOverlayLabel:!1},decorators:[o.OI]},c={args:{data:a.EJ,withComparison:!0,loading:!1}},m={args:{data:a.EJ,withComparison:!1,loading:!1}},p={args:{data:a.EJ,withOverlayLabel:!0}},g={args:{data:a.EJ,withComparison:!0,loading:!0}},u={args:{data:a.EJ,withComparison:!0,loading:!1,primaryColor:"red",secondaryColor:"green"}},h={args:{data:a.mg,withComparison:!0,loading:!1}},y={args:{data:[],withComparison:!0,loading:!1}},f={args:{data:a.wP,withComparison:!0,loading:!1}},C={args:{data:a.Ff,withComparison:!0,loading:!1}},b={args:{data:a.EJ,withComparison:!0,loading:!1,valueFormatter:e=>(0,n.d)(e,"currency",{useMultipliers:!0,decimals:1}),deltaFormatter:e=>(0,n.d)(e/100,"average",{decimals:0})}},w={args:{data:a.EJ,withComparison:!0,loading:!1,valueFormatter:e=>(0,n.d)(e,"number",{useMultipliers:!1,decimals:0}),deltaFormatter:e=>(0,n.d)(e/100,"average",{decimals:1})}},W=({label:e,imageColor:D,style:M={}})=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px",...M},children:[(0,t.jsx)("img",{src:`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='${encodeURIComponent(D)}'/></svg>`,alt:"icon",style:{width:"28px",height:"28px",verticalAlign:"middle",borderRadius:"4px"}}),(0,t.jsx)("span",{style:{fontSize:"13px"},children:e})]}),v={args:{data:a.n$.map(e=>({...e,label:(0,t.jsx)(W,{label:e.label,imageColor:e.imageColor})})),withComparison:!1,loading:!1}},L={args:{data:a.wP,withComparison:!0,loading:!1,valueFormatter:e=>e>=1e6?(0,n.d)(e,"currency",{useMultipliers:!0,decimals:1}):(0,n.d)(e,"currency",{useMultipliers:!1,decimals:0}),deltaFormatter:e=>(0,n.d)(e/100,"average",{decimals:1,signDisplay:"always"})}},_={args:{data:a.n$.map(e=>({...e,label:(0,t.jsx)(W,{label:e.label,imageColor:e.imageColor,style:{padding:"6px"}})})),withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--a8c--charts--leaderboard--bar--border-radius":"4px",fontFamily:'"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'}},render:e=>{const D=e.themeName||"default",I=i.yI[D]?.leaderboardChart?.primaryColor||s.zQ.leaderboardChart.primaryColor,V=(0,O.j)(I,.08);return(0,t.jsx)(d.A,{...e,primaryColor:V})}},x={args:{data:a.EJ,withComparison:!0,loading:!1,showLegend:!0}},E={args:{data:a.EJ,withComparison:!0,loading:!1,showLegend:!0,legendLabels:{primary:"Aug 11-Sep 9, 2025",comparison:"Jul 11-Aug 11, 2025"}}},S={render:e=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"start"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{style:{marginTop:0,marginBottom:"1rem"},children:"Traditional Props-based Legend"}),(0,t.jsx)(d.A,{...e,showLegend:!0})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{style:{marginTop:0,marginBottom:"1rem"},children:"Composition API with Legend Component"}),(0,t.jsx)(d.A,{...e,children:(0,t.jsx)(d.A.Legend,{shape:"circle",shapeWidth:8,shapeHeight:8,style:{marginTop:"16px"}})})]})]}),args:{data:a.EJ,withComparison:!0,loading:!1,legendLabels:{primary:"Aug 11-Sep 9, 2025",comparison:"Jul 11-Aug 11, 2025"}},parameters:{docs:{description:{story:"Demonstrates the composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control over legend positioning and styling."}}}},F=["Default","WithoutComparison","WithOverlayLabel","Loading","CustomColors","SmallDataset","EmptyData","LargeValues","NegativeGrowth","CurrencyFormatting","NumberFormatting","CustomLabel","AdvancedFormatting","OverlayLabelWithImage","WithLegend","CustomLegendLabels","WithCompositionLegend"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false
  }
}`,...c.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: false,
    loading: false
  }
}`,...m.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withOverlayLabel: true
  }
}`,...p.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: true
  }
}`,...g.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataWithImageColor.map(entry => ({
      ...entry,
      label: <CustomLabelComponent label={entry.label} imageColor={entry.imageColor} />
    })),
    withComparison: false,
    loading: false
  }
}`,...v.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
  render: args => {
    const themeName = args.themeName || 'default';
    const theme = CHART_THEME_MAP[themeName];
    const primaryColor = theme?.leaderboardChart?.primaryColor || defaultTheme.leaderboardChart.primaryColor;
    const primaryColorWithAlpha = hexToRgba(primaryColor, 0.08);
    return <LeaderboardChart {...args} primaryColor={primaryColorWithAlpha} />;
  }
}`,..._.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'start'
  }}>
            <div>
                <h3 style={{
        marginTop: 0,
        marginBottom: '1rem'
      }}>Traditional Props-based Legend</h3>
                <LeaderboardChart {...args} showLegend={true} />
            </div>
            <div>
                <h3 style={{
        marginTop: 0,
        marginBottom: '1rem'
      }}>
                    Composition API with Legend Component
                </h3>
                <LeaderboardChart {...args}>
                    <LeaderboardChart.Legend shape="circle" shapeWidth={8} shapeHeight={8} style={{
          marginTop: '16px'
        }} />
                </LeaderboardChart>
            </div>
        </div>,
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
}`,...S.parameters?.docs?.source}}}}),"../charts/src/stories/legend-config.tsx":((T,l,r)=>{r.d(l,{r:()=>s});const s={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'}};try{s.displayName="legendArgTypes",s.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:s.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}),"../charts/src/utils/color-utils.ts":((T,l,r)=>{r.d(l,{j:()=>s});const s=(o,i)=>{if(typeof o!="string")throw new Error("Hex color must be a string");if(!o.startsWith("#"))throw new Error("Hex color must start with #");if(o.length!==7)throw new Error("Hex color must be 7 characters long (e.g., #ff0000)");const a=o.slice(1);if(!/^[0-9a-fA-F]{6}$/.test(a))throw new Error("Hex color contains invalid characters. Only 0-9, a-f, A-F are allowed");if(typeof i!="number"||isNaN(i))throw new Error("Alpha must be a number");const A=parseInt(o.slice(1,3),16),n=parseInt(o.slice(3,5),16),O=parseInt(o.slice(5,7),16);return`rgba(${A}, ${n}, ${O}, ${i})`}})}]);
