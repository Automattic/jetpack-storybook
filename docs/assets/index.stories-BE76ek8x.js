import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{t as r,u as i}from"./build-module-DCeMkz7k2.js";import{M as a,O as o,P as s,X as c,t as l,z as u}from"./providers-D8kYWlIB.js";import{c as d,r as f,s as p,t as m}from"./chart-decorator-C8qfhhK1.js";import{n as h,r as ee,t as g}from"./legend-config-DvuGdtSm.js";import{S as te,T as _,b as v,i as ne,t as y}from"./sample-data-Cx3-uFO8.js";import{t as re}from"./stories-C7kZHUba.js";import{n as b,r as ie}from"./leaderboard-chart--Z2MEY8_.js";var ae=e({AdvancedFormatting:()=>K,Animation:()=>F,AspectRatio:()=>E,CurrencyFormatting:()=>H,CustomColors:()=>I,CustomLabel:()=>G,Default:()=>w,EmptyData:()=>R,EmptyDataWithChildren:()=>z,FixedDimensions:()=>T,Interactive:()=>P,LargeValues:()=>B,Loading:()=>M,MissingComparisonRows:()=>A,MissingComparisonRowsWithOverlayLabel:()=>j,NegativeGrowth:()=>V,NumberFormatting:()=>U,OverlayLabelWithImage:()=>J,SmallDataset:()=>L,WithCompositionLegend:()=>Z,WithLegend:()=>Y,WithLegendLabels:()=>X,WithOverlayLabel:()=>O,WithoutComparison:()=>D,__namedExportsOrder:()=>Q,default:()=>C}),x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{r(),l(),re(),h(),s(),ie(),x=n(),{action:S}=__STORYBOOK_MODULE_ACTIONS__,C={title:`JS Packages/Charts Library/Charts/Leaderboard Chart`,component:b,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{data:{control:`object`,description:`Array of leaderboard entries to display`,table:{type:{summary:`LeaderboardEntry[]`}}},withComparison:{control:`boolean`,description:`Whether to show comparison data (previous period bars and delta values)`,table:{defaultValue:{summary:`false`}}},primaryColor:{control:`color`,description:`Primary color for current period bars`,table:{defaultValue:{summary:a.leaderboardChart.primaryColor}}},secondaryColor:{control:`color`,description:`Secondary color for comparison period bars`,table:{defaultValue:{summary:a.leaderboardChart.secondaryColor}}},valueFormatter:{control:!1,description:`Custom formatter function for values`,table:{type:{summary:`(value: number) => string`},defaultValue:{summary:`formatMetricValue with compact notation`}}},deltaFormatter:{control:!1,description:`Custom formatter function for delta values`,table:{type:{summary:`(value: number) => string`},defaultValue:{summary:`formatMetricValue as percentage`}}},loading:{control:`boolean`,description:`Whether the chart is in loading state`,table:{defaultValue:{summary:`false`}}},className:{control:`text`,description:`Additional CSS class name for the chart container`,table:{type:{summary:`string`}}},style:{control:`object`,description:`Custom styling for the chart container`,table:{type:{summary:`React.CSSProperties`}}},withOverlayLabel:{control:`boolean`,description:`Whether to overlay the label on top of the bar`,table:{defaultValue:{summary:`false`}}},legendLabels:{control:`object`,description:`Custom labels for legend items`,table:{category:`Legend`,type:{summary:`{ primary?: string; comparison?: string }`},defaultValue:{summary:`undefined`}}},...f,...ee,...d},args:{primaryColor:void 0,secondaryColor:void 0,themeName:`default`,showLegend:!1,legendPosition:`bottom`,legendAlignment:`center`,legendOrientation:`horizontal`,legendShape:`circle`,withOverlayLabel:!1},decorators:[m],render:e=>{let t=g(e);return(0,x.jsx)(b,{...e,legend:t})}},w={args:{...p,data:_,withComparison:!0,loading:!1}},T={args:{...w.args,width:300,height:400}},E={args:{...w.args,aspectRatio:.4}},D={args:{data:_,withComparison:!1,loading:!1}},O={args:{data:_,withOverlayLabel:!0}},k=_.map(e=>e.id===`social`||e.id===`referral`?{id:e.id,label:e.label,currentValue:e.currentValue,currentShare:e.currentShare}:e),A={args:{data:k,withComparison:!0,loading:!1},parameters:{docs:{description:{story:'Rows without a matching comparison-period value ("Social Media" and "Referral" here) omit `previousValue`/`previousShare`/`delta`. Those rows render no comparison bar and show a placeholder in the delta column instead of a fabricated value.'}}}},j={args:{data:k,withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--a8c--charts--leaderboard--bar--border-radius":`4px`}},parameters:{docs:{description:{story:`Missing comparison rows in the overlay-label variant, as used by the Premium Analytics Stats widgets. The delta column still shows a placeholder for rows without comparison data.`}}}},M={args:{data:_,withComparison:!0,loading:!0}},N=S(`leaderboard-item-click`),P={args:{data:_.map(e=>({...e,label:(0,x.jsx)(`span`,{style:{display:`flex`,alignItems:`center`,minHeight:`40px`,padding:`0 6px`,fontSize:`13px`},children:e.label}),onClick:()=>N(e.id)})),withComparison:!0,withOverlayLabel:!0,style:{"--a8c--charts--leaderboard--bar--border-radius":`4px`}},render:e=>(0,x.jsx)(q,{...e}),parameters:{docs:{description:{story:"Rows with an `onClick` become interactive: the whole row is clickable and keyboard-focusable (Enter/Space), with a chevron revealed on hover/focus. The consumer supplies the action (e.g. drill-down)."}}}},F={args:{...w.args,animation:!0}},I={args:{data:_,withComparison:!0,loading:!1,primaryColor:`red`,secondaryColor:`green`}},L={args:{data:te,withComparison:!0,loading:!1}},R={args:{data:[],withComparison:!0,loading:!1}},z={args:{data:[],withComparison:!0,loading:!1},render:e=>(0,x.jsx)(b,{...e,children:(0,x.jsx)(i,{direction:`row`,gap:`xs`,align:`center`,justify:`center`,children:`Child element`})})},B={args:{data:v,withComparison:!0,loading:!1}},V={args:{data:ne,withComparison:!0,loading:!1}},H={args:{data:_,withComparison:!0,loading:!1,valueFormatter:e=>c(e,`currency`,{useMultipliers:!0,decimals:1}),deltaFormatter:e=>c(e/100,`average`,{decimals:0})}},U={args:{data:_,withComparison:!0,loading:!1,valueFormatter:e=>c(e,`number`,{useMultipliers:!1,decimals:0}),deltaFormatter:e=>c(e/100,`average`,{decimals:1})}},W=({label:e,imageColor:t,style:n={}})=>(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,...n},children:[(0,x.jsx)(`img`,{src:`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='${encodeURIComponent(t)}'/></svg>`,alt:`icon`,style:{width:`28px`,height:`28px`,verticalAlign:`middle`,borderRadius:`4px`}}),(0,x.jsx)(`span`,{style:{fontSize:`13px`},children:e})]}),G={args:{data:y.map(e=>({...e,label:(0,x.jsx)(W,{label:e.label,imageColor:e.imageColor})})),withComparison:!1,loading:!1}},K={args:{data:v,withComparison:!0,loading:!1,valueFormatter:e=>e>=1e6?c(e,`currency`,{useMultipliers:!0,decimals:1}):c(e,`currency`,{useMultipliers:!1,decimals:0}),deltaFormatter:e=>c(e/100,`average`,{decimals:1,signDisplay:`always`})}},q=e=>{let{getElementStyles:t}=o(),{color:n}=t({index:0,overrideColor:e.primaryColor}),r=u(n,.08);return(0,x.jsx)(b,{...e,primaryColor:r})},J={args:{data:y.map(e=>({...e,label:(0,x.jsx)(W,{label:e.label,imageColor:e.imageColor,style:{padding:`6px`}})})),withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--a8c--charts--leaderboard--bar--border-radius":`4px`}},render:e=>(0,x.jsx)(q,{...e})},Y={args:{data:_,withComparison:!0,loading:!1,showLegend:!0},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},X={args:{data:_,withComparison:!0,loading:!1,showLegend:!0,legendLabels:{primary:`Aug 11-Sep 9, 2025`,comparison:`Jul 11-Aug 11, 2025`}},parameters:{docs:{description:{story:"Props-based legend using `showLegend`, the `legend` config object, and the `legendLabels` prop to customize primary and comparison labels. Other legend options (position, alignment, orientation, shape, interactivity) can be adjusted via Storybook controls."}}}},Z={render:e=>{let t=g(e);return(0,x.jsx)(b,{...e,legend:{interactive:t?.interactive},chartId:`composition-leaderboard-chart`,children:(0,x.jsx)(b.Legend,{...t,shapeStyles:{width:8,height:8,...t?.shapeStyles}})})},args:{data:_,withComparison:!0,loading:!1},parameters:{docs:{description:{story:"Composition API using `<LeaderboardChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    data: sampleData,
    withComparison: true,
    loading: false
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 300,
    height: 400
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.4
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: false,
    loading: false
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withOverlayLabel: true
  }
}`,...O.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    data: missingComparisonData,
    withComparison: true,
    loading: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Rows without a matching comparison-period value ("Social Media" and "Referral" here) omit \`previousValue\`/\`previousShare\`/\`delta\`. Those rows render no comparison bar and show a placeholder in the delta column instead of a fabricated value.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    data: missingComparisonData,
    withComparison: true,
    withOverlayLabel: true,
    loading: false,
    style: {
      '--a8c--charts--leaderboard--bar--border-radius': '4px'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Missing comparison rows in the overlay-label variant, as used by the Premium Analytics Stats widgets. The delta column still shows a placeholder for rows without comparison data.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: true
  }
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData.map(entry => ({
      ...entry,
      label: <span style={{
        display: 'flex',
        alignItems: 'center',
        minHeight: '40px',
        padding: '0 6px',
        fontSize: '13px'
      }}>
                    {entry.label}
                </span>,
      onClick: () => onLeaderboardItemClick(entry.id)
    })),
    withComparison: true,
    withOverlayLabel: true,
    style: {
      '--a8c--charts--leaderboard--bar--border-radius': '4px'
    }
  },
  render: args => <LeaderboardChartWithOverlayLabelImage {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Rows with an \`onClick\` become interactive: the whole row is clickable and keyboard-focusable (Enter/Space), with a chevron revealed on hover/focus. The consumer supplies the action (e.g. drill-down).'
      }
    }
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
    const legend = extractLegendConfig<ChartLegendConfig<LeaderboardEntry>>(args);
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
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`FixedDimensions`,`AspectRatio`,`WithoutComparison`,`WithOverlayLabel`,`MissingComparisonRows`,`MissingComparisonRowsWithOverlayLabel`,`Loading`,`Interactive`,`Animation`,`CustomColors`,`SmallDataset`,`EmptyData`,`EmptyDataWithChildren`,`LargeValues`,`NegativeGrowth`,`CurrencyFormatting`,`NumberFormatting`,`CustomLabel`,`AdvancedFormatting`,`OverlayLabelWithImage`,`WithLegend`,`WithLegendLabels`,`WithCompositionLegend`]}));$();export{K as AdvancedFormatting,F as Animation,E as AspectRatio,H as CurrencyFormatting,I as CustomColors,G as CustomLabel,w as Default,R as EmptyData,z as EmptyDataWithChildren,T as FixedDimensions,P as Interactive,B as LargeValues,M as Loading,A as MissingComparisonRows,j as MissingComparisonRowsWithOverlayLabel,V as NegativeGrowth,U as NumberFormatting,J as OverlayLabelWithImage,L as SmallDataset,Z as WithCompositionLegend,Y as WithLegend,X as WithLegendLabels,O as WithOverlayLabel,D as WithoutComparison,Q as __namedExportsOrder,C as default,$ as n,ae as t};