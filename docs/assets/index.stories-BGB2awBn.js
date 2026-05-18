import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{c as n,r,s as i,t as a}from"./chart-decorator-BMITM1Cw.js";import{El as o,sx as s,wl as c}from"./iframe-CGzARjSS.js";import{C as l,h as u,k as d,t as f,v as p,y as m}from"./providers-xQiLL-AM.js";import{n as h,r as g,t as _}from"./legend-config-tJy46Dt1.js";import{g as v,i as y,t as b,v as x,x as S}from"./sample-data-BfcHm5eo.js";import{t as C}from"./stories-CEsrCWvT.js";import{n as w,t as T}from"./leaderboard-chart-CTBl2WyB.js";var E=t({AdvancedFormatting:()=>K,Animation:()=>F,AspectRatio:()=>j,CurrencyFormatting:()=>H,CustomColors:()=>I,CustomLabel:()=>G,Default:()=>k,EmptyData:()=>R,EmptyDataWithChildren:()=>z,FixedDimensions:()=>A,LargeValues:()=>B,Loading:()=>P,NegativeGrowth:()=>V,NumberFormatting:()=>U,OverlayLabelWithImage:()=>J,SmallDataset:()=>L,WithCompositionLegend:()=>Z,WithLegend:()=>Y,WithLegendLabels:()=>X,WithOverlayLabel:()=>N,WithoutComparison:()=>M,__namedExportsOrder:()=>Q,default:()=>O}),D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{c(),f(),C(),h(),m(),w(),D=s(),O={title:`JS Packages/Charts Library/Charts/Leaderboard Chart`,component:T,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{data:{control:`object`,description:`Array of leaderboard entries to display`,table:{type:{summary:`LeaderboardEntry[]`}}},withComparison:{control:`boolean`,description:`Whether to show comparison data (previous period bars and delta values)`,table:{defaultValue:{summary:`false`}}},primaryColor:{control:`color`,description:`Primary color for current period bars`,table:{defaultValue:{summary:p.leaderboardChart.primaryColor}}},secondaryColor:{control:`color`,description:`Secondary color for comparison period bars`,table:{defaultValue:{summary:p.leaderboardChart.secondaryColor}}},valueFormatter:{control:!1,description:`Custom formatter function for values`,table:{type:{summary:`(value: number) => string`},defaultValue:{summary:`formatMetricValue with compact notation`}}},deltaFormatter:{control:!1,description:`Custom formatter function for delta values`,table:{type:{summary:`(value: number) => string`},defaultValue:{summary:`formatMetricValue as percentage`}}},loading:{control:`boolean`,description:`Whether the chart is in loading state`,table:{defaultValue:{summary:`false`}}},className:{control:`text`,description:`Additional CSS class name for the chart container`,table:{type:{summary:`string`}}},style:{control:`object`,description:`Custom styling for the chart container`,table:{type:{summary:`React.CSSProperties`}}},withOverlayLabel:{control:`boolean`,description:`Whether to overlay the label on top of the bar`,table:{defaultValue:{summary:`false`}}},legendLabels:{control:`object`,description:`Custom labels for legend items`,table:{category:`Legend`,type:{summary:`{ primary?: string; comparison?: string }`},defaultValue:{summary:`undefined`}}},...r,...g,...n},args:{primaryColor:void 0,secondaryColor:void 0,themeName:`default`,showLegend:!1,legendPosition:`bottom`,legendAlignment:`center`,legendOrientation:`horizontal`,legendShape:`circle`,withOverlayLabel:!1},decorators:[a],render:e=>{let t=_(e);return(0,D.jsx)(T,{...e,legend:t})}},k={args:{...i,data:S,withComparison:!0,loading:!1}},A={args:{...k.args,width:300,height:400}},j={args:{...k.args,aspectRatio:.4}},M={args:{data:S,withComparison:!1,loading:!1}},N={args:{data:S,withOverlayLabel:!0}},P={args:{data:S,withComparison:!0,loading:!0}},F={args:{...k.args,animation:!0}},I={args:{data:S,withComparison:!0,loading:!1,primaryColor:`red`,secondaryColor:`green`}},L={args:{data:x,withComparison:!0,loading:!1}},R={args:{data:[],withComparison:!0,loading:!1}},z={args:{data:[],withComparison:!0,loading:!1},render:e=>(0,D.jsx)(T,{...e,children:(0,D.jsx)(o,{direction:`row`,gap:`xs`,align:`center`,justify:`center`,children:`Child element`})})},B={args:{data:v,withComparison:!0,loading:!1}},V={args:{data:y,withComparison:!0,loading:!1}},H={args:{data:S,withComparison:!0,loading:!1,valueFormatter:e=>d(e,`currency`,{useMultipliers:!0,decimals:1}),deltaFormatter:e=>d(e/100,`average`,{decimals:0})}},U={args:{data:S,withComparison:!0,loading:!1,valueFormatter:e=>d(e,`number`,{useMultipliers:!1,decimals:0}),deltaFormatter:e=>d(e/100,`average`,{decimals:1})}},W=({label:e,imageColor:t,style:n={}})=>(0,D.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,...n},children:[(0,D.jsx)(`img`,{src:`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='${encodeURIComponent(t)}'/></svg>`,alt:`icon`,style:{width:`28px`,height:`28px`,verticalAlign:`middle`,borderRadius:`4px`}}),(0,D.jsx)(`span`,{style:{fontSize:`13px`},children:e})]}),G={args:{data:b.map(e=>({...e,label:(0,D.jsx)(W,{label:e.label,imageColor:e.imageColor})})),withComparison:!1,loading:!1}},K={args:{data:v,withComparison:!0,loading:!1,valueFormatter:e=>e>=1e6?d(e,`currency`,{useMultipliers:!0,decimals:1}):d(e,`currency`,{useMultipliers:!1,decimals:0}),deltaFormatter:e=>d(e/100,`average`,{decimals:1,signDisplay:`always`})}},q=e=>{let{getElementStyles:t}=u(),{color:n}=t({index:0,overrideColor:e.primaryColor}),r=l(n,.08);return(0,D.jsx)(T,{...e,primaryColor:r})},J={args:{data:b.map(e=>({...e,label:(0,D.jsx)(W,{label:e.label,imageColor:e.imageColor,style:{padding:`6px`}})})),withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--a8c--charts--leaderboard--bar--border-radius":`4px`}},render:e=>(0,D.jsx)(q,{...e})},Y={args:{data:S,withComparison:!0,loading:!1,showLegend:!0},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},X={args:{data:S,withComparison:!0,loading:!1,showLegend:!0,legendLabels:{primary:`Aug 11-Sep 9, 2025`,comparison:`Jul 11-Aug 11, 2025`}},parameters:{docs:{description:{story:"Props-based legend using `showLegend`, the `legend` config object, and the `legendLabels` prop to customize primary and comparison labels. Other legend options (position, alignment, orientation, shape, interactivity) can be adjusted via Storybook controls."}}}},Z={render:e=>{let t=_(e);return(0,D.jsx)(T,{...e,legend:{interactive:t?.interactive},chartId:`composition-leaderboard-chart`,children:(0,D.jsx)(T.Legend,{...t,shapeStyles:{width:8,height:8,...t?.shapeStyles}})})},args:{data:S,withComparison:!0,loading:!1},parameters:{docs:{description:{story:"Composition API using `<LeaderboardChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    data: sampleData,
    withComparison: true,
    loading: false
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 300,
    height: 400
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.4
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: false,
    loading: false
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withOverlayLabel: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    primaryColor: 'red',
    secondaryColor: 'green'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    data: smallDataset,
    withComparison: true,
    loading: false
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    withComparison: true,
    loading: false
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    data: largeValues,
    withComparison: true,
    loading: false
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    data: negativeGrowth,
    withComparison: true,
    loading: false
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataWithImageColor.map(entry => ({
      ...entry,
      label: <CustomLabelComponent label={entry.label} imageColor={entry.imageColor} />
    })),
    withComparison: false,
    loading: false
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
      '--a8c--charts--leaderboard--bar--border-radius': '4px'
    }
  },
  render: args => <LeaderboardChartWithOverlayLabelImage {...args} />
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    showLegend: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Props-based legend using \`showLegend\` and the \`legend\` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity.'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    showLegend: true,
    legendLabels: {
      primary: 'Aug 11-Sep 9, 2025',
      comparison: 'Jul 11-Aug 11, 2025'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Props-based legend using \`showLegend\`, the \`legend\` config object, and the \`legendLabels\` prop to customize primary and comparison labels. Other legend options (position, alignment, orientation, shape, interactivity) can be adjusted via Storybook controls.'
      }
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig(args);
    return <LeaderboardChart {...args} legend={{
      interactive: legend?.interactive
    }} chartId="composition-leaderboard-chart">
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
    loading: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Composition API using \`<LeaderboardChart.Legend />\` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning.'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`FixedDimensions`,`AspectRatio`,`WithoutComparison`,`WithOverlayLabel`,`Loading`,`Animation`,`CustomColors`,`SmallDataset`,`EmptyData`,`EmptyDataWithChildren`,`LargeValues`,`NegativeGrowth`,`CurrencyFormatting`,`NumberFormatting`,`CustomLabel`,`AdvancedFormatting`,`OverlayLabelWithImage`,`WithLegend`,`WithLegendLabels`,`WithCompositionLegend`]}));$();export{K as AdvancedFormatting,F as Animation,j as AspectRatio,H as CurrencyFormatting,I as CustomColors,G as CustomLabel,k as Default,R as EmptyData,z as EmptyDataWithChildren,A as FixedDimensions,B as LargeValues,P as Loading,V as NegativeGrowth,U as NumberFormatting,J as OverlayLabelWithImage,L as SmallDataset,Z as WithCompositionLegend,Y as WithLegend,X as WithLegendLabels,N as WithOverlayLabel,M as WithoutComparison,Q as __namedExportsOrder,O as default,$ as n,E as t};