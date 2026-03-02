(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[582],{"../charts/src/charts/leaderboard-chart/stories/index.stories.tsx"(f,p,e){"use strict";e.r(p),e.d(p,{AdvancedFormatting:()=>s,Animation:()=>A,CurrencyFormatting:()=>j,CustomColors:()=>W,CustomLabel:()=>d,CustomLegendLabels:()=>N,Default:()=>b,EmptyData:()=>M,InteractiveLegend:()=>V,LargeValues:()=>I,Loading:()=>T,NegativeGrowth:()=>D,NumberFormatting:()=>L,OverlayLabelWithImage:()=>F,SmallDataset:()=>P,WithCompositionLegend:()=>B,WithLegend:()=>R,WithOverlayLabel:()=>O,WithoutComparison:()=>E,__namedExportsOrder:()=>k,default:()=>x});var r=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),l=e("../charts/src/providers/chart-context/themes.ts"),i=e("../charts/src/stories/chart-decorator.tsx"),t=e("../charts/src/stories/theme-config.tsx"),a=e("../charts/src/stories/sample-data/index.ts"),c=e("../charts/src/stories/legend-config.tsx"),u=e("../charts/src/utils/format-metric-value.ts"),g=e("../charts/src/utils/color-utils.ts"),h=e("../charts/src/charts/leaderboard-chart/leaderboard-chart.tsx"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const x={title:"JS Packages/Charts Library/Charts/Leaderboard Chart",component:h.A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of leaderboard entries to display",table:{type:{summary:"LeaderboardEntry[]"}}},withComparison:{control:"boolean",description:"Whether to show comparison data (previous period bars and delta values)",table:{defaultValue:{summary:"false"}}},primaryColor:{control:"color",description:"Primary color for current period bars",table:{defaultValue:{summary:l.z.leaderboardChart.primaryColor}}},secondaryColor:{control:"color",description:"Secondary color for comparison period bars",table:{defaultValue:{summary:l.z.leaderboardChart.secondaryColor}}},valueFormatter:{control:!1,description:"Custom formatter function for values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue with compact notation"}}},deltaFormatter:{control:!1,description:"Custom formatter function for delta values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue as percentage"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name for the chart container",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}},withOverlayLabel:{control:"boolean",description:"Whether to overlay the label on top of the bar",table:{defaultValue:{summary:"false"}}},legendShapeWidth:{control:"number",description:"Width of legend shapes in pixels",table:{category:"Legend",type:{summary:"number"},defaultValue:{summary:"8"}}},legendShapeHeight:{control:"number",description:"Height of legend shapes in pixels",table:{category:"Legend",type:{summary:"number"},defaultValue:{summary:"8"}}},legendLabels:{control:"object",description:"Custom labels for legend items",table:{category:"Legend",type:{summary:"{ primary?: string; comparison?: string }"},defaultValue:{summary:"undefined"}}},...i.xo,...c.r,...t.jW},args:{primaryColor:void 0,secondaryColor:void 0,themeName:"default",showLegend:!1,legendPosition:"bottom",legendAlignment:"center",legendOrientation:"horizontal",legendShape:"circle",legendShapeWidth:8,legendShapeHeight:8,withOverlayLabel:!1},decorators:[i.OI]},b={args:{...t.In,data:a.EJ,withComparison:!0,loading:!1}},E={args:{data:a.EJ,withComparison:!1,loading:!1}},O={args:{data:a.EJ,withOverlayLabel:!0}},T={args:{data:a.EJ,withComparison:!0,loading:!0}},A={args:{...b.args,animation:!0}},W={args:{data:a.EJ,withComparison:!0,loading:!1,primaryColor:"red",secondaryColor:"green"}},P={args:{data:a.mg,withComparison:!0,loading:!1}},M={args:{data:[],withComparison:!0,loading:!1}},I={args:{data:a.wP,withComparison:!0,loading:!1}},D={args:{data:a.Ff,withComparison:!0,loading:!1}},j={args:{data:a.EJ,withComparison:!0,loading:!1,valueFormatter:o=>(0,u.d)(o,"currency",{useMultipliers:!0,decimals:1}),deltaFormatter:o=>(0,u.d)(o/100,"average",{decimals:0})}},L={args:{data:a.EJ,withComparison:!0,loading:!1,valueFormatter:o=>(0,u.d)(o,"number",{useMultipliers:!1,decimals:0}),deltaFormatter:o=>(0,u.d)(o/100,"average",{decimals:1})}},re=({label:o,imageColor:Z,style:n={}})=>(0,m.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px",...n},children:[(0,m.jsx)("img",{src:`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='${encodeURIComponent(Z)}'/></svg>`,alt:"icon",style:{width:"28px",height:"28px",verticalAlign:"middle",borderRadius:"4px"}}),(0,m.jsx)("span",{style:{fontSize:"13px"},children:o})]}),d={args:{data:a.n$.map(o=>({...o,label:(0,m.jsx)(re,{label:o.label,imageColor:o.imageColor})})),withComparison:!1,loading:!1}},s={args:{data:a.wP,withComparison:!0,loading:!1,valueFormatter:o=>o>=1e6?(0,u.d)(o,"currency",{useMultipliers:!0,decimals:1}):(0,u.d)(o,"currency",{useMultipliers:!1,decimals:0}),deltaFormatter:o=>(0,u.d)(o/100,"average",{decimals:1,signDisplay:"always"})}},U=o=>{const{getElementStyles:Z}=(0,r.j)(),{color:n}=Z({index:0,overrideColor:o.primaryColor}),S=(0,g.j5)(n,.08);return(0,m.jsx)(h.A,{...o,primaryColor:S})},F={args:{data:a.n$.map(o=>({...o,label:(0,m.jsx)(re,{label:o.label,imageColor:o.imageColor,style:{padding:"6px"}})})),withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--a8c--charts--leaderboard--bar--border-radius":"4px",fontFamily:'"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'}},render:o=>(0,m.jsx)(U,{...o})},R={args:{data:a.EJ,withComparison:!0,loading:!1,showLegend:!0}},N={args:{data:a.EJ,withComparison:!0,loading:!1,showLegend:!0,legendLabels:{primary:"Aug 11-Sep 9, 2025",comparison:"Jul 11-Aug 11, 2025"}}},B={render:o=>(0,m.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"start"},children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("h3",{style:{marginTop:0,marginBottom:"1rem"},children:"Traditional Props-based Legend"}),(0,m.jsx)(h.A,{...o,showLegend:!0})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h3",{style:{marginTop:0,marginBottom:"1rem"},children:"Composition API with Legend Component"}),(0,m.jsx)(h.A,{...o,children:(0,m.jsx)(h.A.Legend,{shape:"circle",shapeWidth:8,shapeHeight:8,style:{marginTop:"16px"}})})]})]}),args:{data:a.EJ,withComparison:!0,loading:!1,legendLabels:{primary:"Aug 11-Sep 9, 2025",comparison:"Jul 11-Aug 11, 2025"}},argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{docs:{description:{story:"Demonstrates the composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control over legend positioning and styling."}}}},V={args:{data:a.EJ,withComparison:!0,loading:!1,showLegend:!0,legendInteractive:!0,legendLabels:{primary:"Current period",comparison:"Previous period"}},parameters:{docs:{description:{story:"Interactive legend allows users to click legend items to toggle the visibility of current and previous period data. Click on the legend items to show/hide the corresponding bars and values. When all series are hidden, a message is displayed."}}}},k=["Default","WithoutComparison","WithOverlayLabel","Loading","Animation","CustomColors","SmallDataset","EmptyData","LargeValues","NegativeGrowth","CurrencyFormatting","NumberFormatting","CustomLabel","AdvancedFormatting","OverlayLabelWithImage","WithLegend","CustomLegendLabels","WithCompositionLegend","InteractiveLegend"];b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    data: sampleData,
    withComparison: true,
    loading: false
  }
}`,...b.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: false,
    loading: false
  }
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withOverlayLabel: true
  }
}`,...O.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: true
  }
}`,...T.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...A.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    primaryColor: 'red',
    secondaryColor: 'green'
  }
}`,...W.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    data: smallDataset,
    withComparison: true,
    loading: false
  }
}`,...P.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    withComparison: true,
    loading: false
  }
}`,...M.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    data: largeValues,
    withComparison: true,
    loading: false
  }
}`,...I.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    data: negativeGrowth,
    withComparison: true,
    loading: false
  }
}`,...D.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataWithImageColor.map(entry => ({
      ...entry,
      label: <CustomLabelComponent label={entry.label} imageColor={entry.imageColor} />
    })),
    withComparison: false,
    loading: false
  }
}`,...d.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    showLegend: true
  }
}`,...R.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}}},"../charts/src/charts/leaderboard-chart/leaderboard-chart.tsx"(f,p,e){"use strict";e.d(p,{A:()=>Z});var r=e("../../../node_modules/.pnpm/@wordpress+components@32.2.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.mjs"),l=e("../../../node_modules/.pnpm/@wordpress+components@32.2.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/grid/component.mjs"),i=e("../../../node_modules/.pnpm/@wordpress+components@32.2.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.mjs"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+i18n@6.13.0/node_modules/@wordpress/i18n/build-module/index.mjs"),c=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),u=e("../charts/src/components/legend/legend.tsx"),g=e("../charts/src/hooks/use-prefers-reduced-motion.ts"),h=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),m=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),_=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),x=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),b=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),E=e("../charts/src/utils/format-metric-value.ts"),O=e("../charts/src/utils/create-composition.ts"),T=e("../charts/src/charts/private/chart-composition/use-chart-children.ts"),A=e("../charts/src/charts/private/single-chart-context/single-chart-context.tsx"),W=e("../charts/src/charts/private/with-responsive/with-responsive.tsx");const P=a.__;function M({data:n,primaryColor:S,secondaryColor:y,withComparison:v=!1,withOverlayLabel:H=!1,legendLabels:w}){const{leaderboardChart:K}=(0,m.p)(),{getElementStyles:q}=(0,_.j)();return(0,t.useMemo)(()=>{if(!n||n.length===0)return[];const X=[],{color:J}=q({index:0,overrideColor:S||K.primaryColor});if(X.push({label:w?.primary||P("Current period","jetpack-charts"),value:"",color:J}),v&&!H){const{color:Y}=q({index:1,overrideColor:y||K.secondaryColor});X.push({label:w?.comparison||P("Previous period","jetpack-charts"),value:"",color:Y})}return X},[n,S,y,v,w,K,q,H])}var I=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=e.n(I),j=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/leaderboard-chart/leaderboard-chart.module.scss"),L={};L.insert="head",L.singleton=!1;var re=D()(j.A,L);const d=j.A.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const U=a.__,F=n=>(0,E.d)(n,"number",{useMultipliers:!0,decimals:1}),R=n=>(0,E.d)(n/100,"average",{decimals:0,signDisplay:"exceptZero"}),N=({label:n})=>(0,s.jsx)(s.Fragment,{children:typeof n=="string"?(0,s.jsx)(r.A,{className:d.label,children:n}):n}),B=({entry:n,withComparison:S,withOverlayLabel:y,primaryColor:v,secondaryColor:H,animation:w,isPrimaryVisible:K=!0,isComparisonVisible:q=!0})=>(0,s.jsxs)("div",{className:(0,c.A)(d.barWithLabelContainer,{[d["is-overlay"]]:y}),children:[(0,s.jsx)(N,{label:n.label}),K&&(0,s.jsx)("div",{className:(0,c.A)(d.bar,{[d["bar--animated"]]:w}),style:{width:n.currentShare+"%",backgroundColor:v}}),S&&!y&&q&&(0,s.jsx)("div",{className:(0,c.A)(d.bar,{[d["bar--animated"]]:w}),style:{width:n.previousShare+"%",backgroundColor:H}})]}),V=({data:n,chartId:S,withComparison:y=!1,withOverlayLabel:v=!1,primaryColor:H,secondaryColor:w,valueFormatter:K=F,deltaFormatter:q=R,animation:X,loading:J=!1,showLegend:Y=!1,legendOrientation:ie="horizontal",legendPosition:te="bottom",legendAlignment:de="center",legendShape:ce="circle",legendShapeWidth:ue=8,legendShapeHeight:me=8,legendLabels:pe,legendInteractive:z=!1,className:oe,style:ne,children:he})=>{const C=(0,h.R)(S),{leaderboardChart:ge}=(0,m.p)(),{otherChildren:se}=(0,T.n)(he,"LeaderboardChart"),{labelSpacing:fe,rowGap:ye,columnGap:be,primaryColor:ve,secondaryColor:Ce,deltaColors:_e}=ge,{getElementStyles:le,isSeriesVisible:ee}=(0,_.j)(),{color:xe}=le({index:0,overrideColor:H||ve}),{color:Le}=le({index:1,overrideColor:w||Ce}),G=M({data:n||[],primaryColor:H,secondaryColor:w,withComparison:y,withOverlayLabel:v,legendLabels:pe}),Q=(0,t.useMemo)(()=>!C||!z||G.length===0?!0:ee(C,G[0].label),[C,z,G,ee]),ae=(0,t.useMemo)(()=>!C||!z||G.length<2?!0:ee(C,G[1].label),[C,z,G,ee]),Se=(0,t.useMemo)(()=>z?y&&!v?!Q&&!ae:!Q:!1,[z,Q,ae,y,v]),we=!!(n&&n.length>0),Ee=(0,t.useMemo)(()=>({withComparison:y,withOverlayLabel:v}),[y,v]);(0,x.t)({chartId:C,legendItems:G,chartType:"leaderboard",isDataValid:we,metadata:Ee});const Oe=(0,g.j)();return!n||n.length===0?(0,s.jsx)(A.O.Provider,{value:{chartId:C,chartWidth:0,chartHeight:0},children:(0,s.jsxs)("div",{className:(0,c.A)(d.leaderboardChart,{[d["leaderboardChart--loading"]]:J},oe),style:ne,children:[(0,s.jsx)("div",{className:d.emptyState,children:U(J?"Loading\u2026":"No data available","jetpack-charts")}),se]})}):(0,s.jsx)(A.O.Provider,{value:{chartId:C,chartWidth:0,chartHeight:0},children:(0,s.jsxs)("div",{className:(0,c.A)(d.leaderboardChart,{[d["leaderboardChart--loading"]]:J,[d["leaderboardChart--with-legend"]]:Y,[d["leaderboardChart--legend-top"]]:Y&&te==="top"},oe),style:ne,children:[Se?(0,s.jsx)("div",{className:d.emptyState,children:U("All series are hidden. Click legend items to show data.","jetpack-charts")}):(0,s.jsx)(l.A,{templateColumns:"minmax(0, 1fr) auto",rowGap:ye,columnGap:be,children:n.map($=>{const Ae=Math.sign($.delta)+1,Pe=_e[Ae];return(0,s.jsxs)(t.Fragment,{children:[(0,s.jsx)(i.A,{spacing:fe,children:(0,s.jsx)(B,{entry:$,withComparison:y,withOverlayLabel:v,primaryColor:xe,secondaryColor:Le,isPrimaryVisible:Q,isComparisonVisible:ae,animation:X&&!J&&!Oe})}),(0,s.jsxs)("div",{className:(0,c.A)(d.valueContainer,{[d.overlayLabel]:v}),children:[Q&&(0,s.jsx)(r.A,{children:K($.currentValue)}),y&&ae&&(0,s.jsx)(r.A,{style:{color:Pe},children:q($.delta)})]})]},$.id)})}),Y&&(0,s.jsx)(u.s,{orientation:ie,position:te,alignment:de,shape:ce,shapeWidth:ue,shapeHeight:me,chartId:C,interactive:z}),se]})})},k=n=>(0,t.useContext)(b.m)?(0,s.jsx)(V,{...n}):(0,s.jsx)(b.S,{children:(0,s.jsx)(V,{...n})});k.displayName="LeaderboardChart";const o=(0,O.E)(k,{Legend:u.s}),Z=(0,O.E)((0,W.F)(k),{Legend:u.s});try{leaderboardchart.displayName="leaderboardchart",leaderboardchart.__docgenInfo={description:"",displayName:"leaderboardchart",props:{className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Child components for composition API",name:"children",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"Custom styling for the chart container",name:"style",required:!1,type:{name:"CSSProperties & { '--a8c--charts--leaderboard--bar--border-radius'?: string; }"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"LeaderboardEntry[]"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},animation:{defaultValue:null,description:"Whether to show chart animation on initial render or not",name:"animation",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<LeaderboardEntry, number>"}},legendPosition:{defaultValue:{value:"bottom"},description:`Legend position (where the legend appears)
TODO: Add 'left' | 'right' positioning support in future implementation`,name:"legendPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},legendAlignment:{defaultValue:{value:"center"},description:"Legend alignment within its position",name:"legendAlignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},legendInteractive:{defaultValue:{value:"false"},description:`Enable interactive legend items that can toggle series visibility.
Supported for LineChart, PieChart, and PieSemiCircleChart.
Requires chartId and GlobalChartsProvider.
For pie charts, percentages are recalculated so visible segments total 100%.`,name:"legendInteractive",required:!1,type:{name:"boolean"}},withComparison:{defaultValue:{value:"false"},description:"Whether to show comparison data",name:"withComparison",required:!1,type:{name:"boolean"}},withOverlayLabel:{defaultValue:{value:"false"},description:"Whether to overlay the label on top of bar",name:"withOverlayLabel",required:!1,type:{name:"boolean"}},primaryColor:{defaultValue:null,description:"Primary color for current period bars",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:null,description:"Secondary color for comparison period bars",name:"secondaryColor",required:!1,type:{name:"string"}},valueFormatter:{defaultValue:{value:`( value: number ): string => {
	return formatMetricValue( value, 'number', {
		useMultipliers: true,
		decimals: 1,
	} );
}`},description:"Formatter for values",name:"valueFormatter",required:!1,type:{name:"(value: number) => string"}},deltaFormatter:{defaultValue:{value:`( value: number ): string => {
	return formatMetricValue( value / 100, 'average', {
		decimals: 0,
		signDisplay: 'exceptZero',
	} );
}`},description:"Formatter for delta values",name:"deltaFormatter",required:!1,type:{name:"(value: number) => string"}},legendShapeWidth:{defaultValue:{value:"8"},description:"Width of legend shapes in pixels",name:"legendShapeWidth",required:!1,type:{name:"number"}},legendShapeHeight:{defaultValue:{value:"8"},description:"Height of legend shapes in pixels",name:"legendShapeHeight",required:!1,type:{name:"number"}},legendLabels:{defaultValue:null,description:"Custom labels for legend items",name:"legendLabels",required:!1,type:{name:"{ primary?: string; comparison?: string; }"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:`The aspect ratio of the chart (height = width * aspectRatio).
When provided, height is calculated from width.
When omitted, the chart fills the parent container's height.`,name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/leaderboard-chart/leaderboard-chart.tsx#leaderboardchart"]={docgenInfo:leaderboardchart.__docgenInfo,name:"leaderboardchart",path:"../charts/src/charts/leaderboard-chart/leaderboard-chart.tsx#leaderboardchart"})}catch{}try{LeaderboardChartUnresponsive.displayName="LeaderboardChart",LeaderboardChartUnresponsive.__docgenInfo={description:"",displayName:"LeaderboardChart",props:{withComparison:{defaultValue:{value:"false"},description:"Whether to show comparison data",name:"withComparison",required:!1,type:{name:"boolean"}},withOverlayLabel:{defaultValue:{value:"false"},description:"Whether to overlay the label on top of bar",name:"withOverlayLabel",required:!1,type:{name:"boolean"}},primaryColor:{defaultValue:null,description:"Primary color for current period bars",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:null,description:"Secondary color for comparison period bars",name:"secondaryColor",required:!1,type:{name:"string"}},valueFormatter:{defaultValue:{value:`( value: number ): string => {
	return formatMetricValue( value, 'number', {
		useMultipliers: true,
		decimals: 1,
	} );
}`},description:"Formatter for values",name:"valueFormatter",required:!1,type:{name:"(value: number) => string"}},deltaFormatter:{defaultValue:{value:`( value: number ): string => {
	return formatMetricValue( value / 100, 'average', {
		decimals: 0,
		signDisplay: 'exceptZero',
	} );
}`},description:"Formatter for delta values",name:"deltaFormatter",required:!1,type:{name:"(value: number) => string"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"Custom styling for the chart container",name:"style",required:!1,type:{name:"CSSProperties & { '--a8c--charts--leaderboard--bar--border-radius'?: string; }"}},legendShapeWidth:{defaultValue:{value:"8"},description:"Width of legend shapes in pixels",name:"legendShapeWidth",required:!1,type:{name:"number"}},legendShapeHeight:{defaultValue:{value:"8"},description:"Height of legend shapes in pixels",name:"legendShapeHeight",required:!1,type:{name:"number"}},legendLabels:{defaultValue:null,description:"Custom labels for legend items",name:"legendLabels",required:!1,type:{name:"{ primary?: string; comparison?: string; }"}},children:{defaultValue:null,description:"Child components for composition API",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"LeaderboardEntry[]"}},size:{defaultValue:null,description:`Maximum diameter of the pie in pixels (pie and donut charts only).
The pie will shrink if the container is smaller than this value.
When omitted, the pie fills the available space.`,name:"size",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart container in pixels. When omitted, the chart fills its parent's height.",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart container in pixels. When omitted, the chart fills its parent's width.",name:"width",required:!1,type:{name:"number"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},animation:{defaultValue:null,description:"Whether to show chart animation on initial render or not",name:"animation",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<LeaderboardEntry, number>"}},legendPosition:{defaultValue:{value:"bottom"},description:`Legend position (where the legend appears)
TODO: Add 'left' | 'right' positioning support in future implementation`,name:"legendPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},legendAlignment:{defaultValue:{value:"center"},description:"Legend alignment within its position",name:"legendAlignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},legendInteractive:{defaultValue:{value:"false"},description:`Enable interactive legend items that can toggle series visibility.
Supported for LineChart, PieChart, and PieSemiCircleChart.
Requires chartId and GlobalChartsProvider.
For pie charts, percentages are recalculated so visible segments total 100%.`,name:"legendInteractive",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/leaderboard-chart/leaderboard-chart.tsx#LeaderboardChart"]={docgenInfo:o.__docgenInfo,name:"LeaderboardChart",path:"../charts/src/charts/leaderboard-chart/leaderboard-chart.tsx#LeaderboardChart"})}catch{}},"../charts/src/charts/private/chart-composition/use-chart-children.ts"(f,p,e){"use strict";e.d(p,{n:()=>i});var r=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function i(t,a){return(0,l.useMemo)(()=>{const c=[],u=[],g=[];return l.Children.forEach(t,h=>{if((0,l.isValidElement)(h)){const _=h.type?.displayName;_===`${a}.SVG`||_==="Chart.SVG"?h.props?.children&&l.Children.forEach(h.props.children,x=>{c.push(x)}):_===`${a}.HTML`||_==="Chart.HTML"?h.props?.children&&l.Children.forEach(h.props.children,x=>{u.push(x)}):h.type===r.A?c.push(h):g.push(h)}}),{svgChildren:c,htmlChildren:u,otherChildren:g}},[t,a])}},"../charts/src/stories/legend-config.tsx"(f,p,e){"use strict";e.d(p,{r:()=>r});const r={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."}};try{r.displayName="legendArgTypes",r.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:r.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../charts/src/utils/format-metric-value.ts"(f,p,e){"use strict";e.d(p,{d:()=>l});var r=e("../number-formatters/src/index.ts");const l=(i,t="number",{decimals:a,useMultipliers:c=!1,signDisplay:u}={})=>{if(i==null)return"";const g=Number(i);if(isNaN(g))return"";switch(t){case"currency":return`$${c?(0,r.qe)(g,{decimals:a??2,numberFormatOptions:{maximumFractionDigits:a??2,signDisplay:u}}):(0,r.ZV)(g,{decimals:a??2,numberFormatOptions:{signDisplay:u}})}`;case"average":return Number.isFinite(g)?(0,r.ZV)(g,{decimals:a??0,numberFormatOptions:{style:"percent",signDisplay:u??"exceptZero"}}):"\u2014";case"number":default:return c?(0,r.qe)(g,{decimals:a??0,numberFormatOptions:{maximumFractionDigits:a??0,signDisplay:u}}):(0,r.ZV)(g,{decimals:a??0,numberFormatOptions:{signDisplay:u}})}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/leaderboard-chart/leaderboard-chart.module.scss"(f,p,e){"use strict";e.d(p,{A:()=>c});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(r),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),t=e.n(i),a=t()(l());a.push([f.id,'.OZg4Iat6TJ5_sYJ8HmC8{display:flex;flex-direction:column;transition:opacity .3s ease-in-out}.gvHWLKGPXONtU0P7w6hj{flex-direction:column-reverse}.RSQBuK1dHDFQPMRpNTh3{gap:16px}.dWpqHb19KqudQcMabW57{opacity:.5}.AGL8PEHy1iHZJElau1SR{display:grid;align-items:center;grid-template-columns:1fr;row-gap:6px;isolation:isolate}.AGL8PEHy1iHZJElau1SR.uyZCnpA8suJqCVMwFjqm{grid-template:"overlap" 1fr/1fr}.AGL8PEHy1iHZJElau1SR.uyZCnpA8suJqCVMwFjqm>*{-ms-grid-row:1;-ms-grid-column:1;grid-area:overlap}.AGL8PEHy1iHZJElau1SR.uyZCnpA8suJqCVMwFjqm .r5K0kOu5NBKSKkBXSQAk{padding-left:8px}.AGL8PEHy1iHZJElau1SR .oPFERjtZlvJISgblxziz{height:100%;min-height:6px;border-radius:var(--a8c--charts--leaderboard--bar--border-radius, 9999px);z-index:-1}.AGL8PEHy1iHZJElau1SR .XNg2erI4auuYF1gzh1rE{transform-origin:left;transform-box:fill-box;transform:scaleX(0);animation:eno0h_NakvyzDVBiGVa2 1s ease-out forwards}@keyframes eno0h_NakvyzDVBiGVa2{to{transform:scaleX(1)}}.iVw4P3GHdE0LKEGM0Vkd{display:flex;gap:4px;justify-content:flex-end}.llFMxB71uebrXgPdTLGz{align-items:center}.wt_qXsP0KBtoScEkbqOr{padding:32px 16px;text-align:center;color:#666;font-size:14px;font-style:italic}',""]),a.locals={leaderboardChart:"OZg4Iat6TJ5_sYJ8HmC8","leaderboardChart--legend-top":"gvHWLKGPXONtU0P7w6hj","leaderboardChart--with-legend":"RSQBuK1dHDFQPMRpNTh3","leaderboardChart--loading":"dWpqHb19KqudQcMabW57",barWithLabelContainer:"AGL8PEHy1iHZJElau1SR","is-overlay":"uyZCnpA8suJqCVMwFjqm",label:"r5K0kOu5NBKSKkBXSQAk",bar:"oPFERjtZlvJISgblxziz","bar--animated":"XNg2erI4auuYF1gzh1rE",stretch:"eno0h_NakvyzDVBiGVa2",valueContainer:"iVw4P3GHdE0LKEGM0Vkd",overlayLabel:"llFMxB71uebrXgPdTLGz",emptyState:"wt_qXsP0KBtoScEkbqOr"};const c=a},"../../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js"(f){"use strict";f.exports=function p(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var l,i,t;if(Array.isArray(e)){if(l=e.length,l!=r.length)return!1;for(i=l;i--!==0;)if(!p(e[i],r[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(t=Object.keys(e),l=t.length,l!==Object.keys(r).length)return!1;for(i=l;i--!==0;)if(!Object.prototype.hasOwnProperty.call(r,t[i]))return!1;for(i=l;i--!==0;){var a=t[i];if(!p(e[a],r[a]))return!1}return!0}return e!==e&&r!==r}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js"(f,p,e){"use strict";var r=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function l(){}function i(){}i.resetWarningCache=l,f.exports=function(){function t(u,g,h,m,_,x){if(x!==r){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}}t.isRequired=t;function a(){return t}var c={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:a,element:t,elementType:t,instanceOf:a,node:t,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:l};return c.PropTypes=c,c}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"(f,p,e){if(0)var r,l;else f.exports=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js"(f){"use strict";var p="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";f.exports=p}}]);
