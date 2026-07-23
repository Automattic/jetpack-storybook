import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{t as r,u as i}from"./build-module-C7Ebl95X2.js";import{M as a,O as ee,P as o,X as s,t as c,z as l}from"./providers-D8kYWlIB.js";import{c as te,r as ne,s as u,t as re}from"./chart-decorator-3fijXZGH.js";import{n as ie,r as ae,t as d}from"./legend-config-DvuGdtSm.js";import{S as f,T as p,b as m,i as h,t as g}from"./sample-data-Cx3-uFO8.js";import{t as _}from"./stories-BYEajPn2.js";import{n as v,r as oe}from"./leaderboard-chart-jeRKLDHN.js";var se=e({AdvancedFormatting:()=>K,Animation:()=>F,AspectRatio:()=>T,CurrencyFormatting:()=>H,CustomColors:()=>I,CustomLabel:()=>G,Default:()=>C,EmptyData:()=>R,EmptyDataWithChildren:()=>z,FixedDimensions:()=>w,Interactive:()=>N,LargeValues:()=>B,Loading:()=>j,MissingComparisonRows:()=>k,MissingComparisonRowsWithOverlayLabel:()=>A,MixedInteractivity:()=>P,NegativeGrowth:()=>V,NumberFormatting:()=>U,OverlayLabelWithImage:()=>J,SmallDataset:()=>L,WithCompositionLegend:()=>Z,WithLegend:()=>Y,WithLegendLabels:()=>X,WithOverlayLabel:()=>D,WithoutComparison:()=>E,__namedExportsOrder:()=>Q,default:()=>S}),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{r(),c(),_(),ie(),o(),oe(),y=n(),{action:b}=__STORYBOOK_MODULE_ACTIONS__,{expect:x}=__STORYBOOK_MODULE_TEST__,S={title:`JS Packages/Charts Library/Charts/Leaderboard Chart`,component:v,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{data:{control:`object`,description:`Array of leaderboard entries to display`,table:{type:{summary:`LeaderboardEntry[]`}}},withComparison:{control:`boolean`,description:`Whether to show comparison data (previous period bars and delta values)`,table:{defaultValue:{summary:`false`}}},primaryColor:{control:`color`,description:`Primary color for current period bars`,table:{defaultValue:{summary:a.leaderboardChart.primaryColor}}},secondaryColor:{control:`color`,description:`Secondary color for comparison period bars`,table:{defaultValue:{summary:a.leaderboardChart.secondaryColor}}},valueFormatter:{control:!1,description:`Custom formatter function for values`,table:{type:{summary:`(value: number) => string`},defaultValue:{summary:`formatMetricValue with compact notation`}}},deltaFormatter:{control:!1,description:`Custom formatter function for delta values`,table:{type:{summary:`(value: number) => string`},defaultValue:{summary:`formatMetricValue as percentage`}}},loading:{control:`boolean`,description:`Whether the chart is in loading state`,table:{defaultValue:{summary:`false`}}},className:{control:`text`,description:`Additional CSS class name for the chart container`,table:{type:{summary:`string`}}},style:{control:`object`,description:`Custom styling for the chart container`,table:{type:{summary:`React.CSSProperties`}}},withOverlayLabel:{control:`boolean`,description:`Whether to overlay the label on top of the bar`,table:{defaultValue:{summary:`false`}}},legendLabels:{control:`object`,description:`Custom labels for legend items`,table:{category:`Legend`,type:{summary:`{ primary?: string; comparison?: string }`},defaultValue:{summary:`undefined`}}},...ne,...ae,...te},args:{primaryColor:void 0,secondaryColor:void 0,themeName:`default`,showLegend:!1,legendPosition:`bottom`,legendAlignment:`center`,legendOrientation:`horizontal`,legendShape:`circle`,withOverlayLabel:!1},decorators:[re],render:e=>{let t=d(e);return(0,y.jsx)(v,{...e,legend:t})}},C={args:{...u,data:p,withComparison:!0,loading:!1}},w={args:{...C.args,width:300,height:400}},T={args:{...C.args,aspectRatio:.4}},E={args:{data:p,withComparison:!1,loading:!1}},D={args:{data:p,withOverlayLabel:!0}},O=p.map(e=>e.id===`social`||e.id===`referral`?{id:e.id,label:e.label,currentValue:e.currentValue,currentShare:e.currentShare}:e),k={args:{data:O,withComparison:!0,loading:!1},parameters:{docs:{description:{story:'Rows without a matching comparison-period value ("Social Media" and "Referral" here) omit `previousValue`/`previousShare`/`delta`. Those rows render no comparison bar and show a placeholder in the delta column instead of a fabricated value.'}}}},A={args:{data:O,withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--a8c--charts--leaderboard--bar--border-radius":`4px`}},parameters:{docs:{description:{story:`Missing comparison rows in the overlay-label variant, as used by the Premium Analytics Stats widgets. The delta column still shows a placeholder for rows without comparison data.`}}}},j={args:{data:p,withComparison:!0,loading:!0}},M=b(`leaderboard-item-click`),N={args:{data:p.map(e=>({...e,label:(0,y.jsx)(`span`,{style:{display:`flex`,alignItems:`center`,minHeight:`40px`,padding:`0 6px`,fontSize:`13px`},children:e.label}),onClick:()=>M(e.id)})),withComparison:!0,withOverlayLabel:!0,style:{"--a8c--charts--leaderboard--bar--border-radius":`4px`}},render:e=>(0,y.jsx)(q,{...e}),parameters:{docs:{description:{story:"Rows with an `onClick` become interactive: the whole row is clickable and keyboard-focusable (Enter/Space), with a chevron revealed on hover/focus. The consumer supplies the action (e.g. drill-down)."}}}},P={args:{...u,data:p.map((e,t)=>t%2==0?{...e,onClick:()=>M(e.id)}:e),withComparison:!0,withOverlayLabel:!0},parameters:{docs:{description:{story:`Interactive and non-interactive rows with the overlay-label presentation used by Jetpack Stats. Being clickable is a visual affordance only — it must not change a row height or column alignment, otherwise a drill-down that swaps clickable parent rows for non-clickable child rows visibly shifts the list.`}}},play:async({canvasElement:e})=>{let t=e.querySelector(`[class*="leaderboardChart__content"] > *`),n=t.querySelectorAll(`:scope > [class*="row"]`);x(n).toHaveLength(p.length);let r=t.querySelectorAll(`:scope > button[class*="row"]`).length;x(r).toBeGreaterThan(0),x(r).toBeLessThan(p.length),x(new Set([...n].map(e=>e.getBoundingClientRect().height)).size).toBe(1);let i=(e,n)=>new Set([...t.querySelectorAll(e)].map(e=>e.getBoundingClientRect()[n]));x(i(`[class*="barWithLabelContainer"]`,`left`).size).toBe(1),x(i(`[class*="valueContainer"]`,`right`).size).toBe(1)}},F={args:{...C.args,animation:!0}},I={args:{data:p,withComparison:!0,loading:!1,primaryColor:`red`,secondaryColor:`green`}},L={args:{data:f,withComparison:!0,loading:!1}},R={args:{data:[],withComparison:!0,loading:!1}},z={args:{data:[],withComparison:!0,loading:!1},render:e=>(0,y.jsx)(v,{...e,children:(0,y.jsx)(i,{direction:`row`,gap:`xs`,align:`center`,justify:`center`,children:`Child element`})})},B={args:{data:m,withComparison:!0,loading:!1}},V={args:{data:h,withComparison:!0,loading:!1}},H={args:{data:p,withComparison:!0,loading:!1,valueFormatter:e=>s(e,`currency`,{useMultipliers:!0,decimals:1}),deltaFormatter:e=>s(e/100,`average`,{decimals:0})}},U={args:{data:p,withComparison:!0,loading:!1,valueFormatter:e=>s(e,`number`,{useMultipliers:!1,decimals:0}),deltaFormatter:e=>s(e/100,`average`,{decimals:1})}},W=({label:e,imageColor:t,style:n={}})=>(0,y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,...n},children:[(0,y.jsx)(`img`,{src:`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='${encodeURIComponent(t)}'/></svg>`,alt:`icon`,style:{width:`28px`,height:`28px`,verticalAlign:`middle`,borderRadius:`4px`}}),(0,y.jsx)(`span`,{style:{fontSize:`13px`},children:e})]}),G={args:{data:g.map(e=>({...e,label:(0,y.jsx)(W,{label:e.label,imageColor:e.imageColor})})),withComparison:!1,loading:!1}},K={args:{data:m,withComparison:!0,loading:!1,valueFormatter:e=>e>=1e6?s(e,`currency`,{useMultipliers:!0,decimals:1}):s(e,`currency`,{useMultipliers:!1,decimals:0}),deltaFormatter:e=>s(e/100,`average`,{decimals:1,signDisplay:`always`})}},q=e=>{let{getElementStyles:t}=ee(),{color:n}=t({index:0,overrideColor:e.primaryColor}),r=l(n,.08);return(0,y.jsx)(v,{...e,primaryColor:r})},J={args:{data:g.map(e=>({...e,label:(0,y.jsx)(W,{label:e.label,imageColor:e.imageColor,style:{padding:`6px`}})})),withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--a8c--charts--leaderboard--bar--border-radius":`4px`}},render:e=>(0,y.jsx)(q,{...e})},Y={args:{data:p,withComparison:!0,loading:!1,showLegend:!0},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},X={args:{data:p,withComparison:!0,loading:!1,showLegend:!0,legendLabels:{primary:`Aug 11-Sep 9, 2025`,comparison:`Jul 11-Aug 11, 2025`}},parameters:{docs:{description:{story:"Props-based legend using `showLegend`, the `legend` config object, and the `legendLabels` prop to customize primary and comparison labels. Other legend options (position, alignment, orientation, shape, interactivity) can be adjusted via Storybook controls."}}}},Z={render:e=>{let t=d(e);return(0,y.jsx)(v,{...e,legend:{interactive:t?.interactive},chartId:`composition-leaderboard-chart`,children:(0,y.jsx)(v.Legend,{...t,shapeStyles:{width:8,height:8,...t?.shapeStyles}})})},args:{data:p,withComparison:!0,loading:!1},parameters:{docs:{description:{story:"Composition API using `<LeaderboardChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    data: sampleData,
    withComparison: true,
    loading: false
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 300,
    height: 400
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.4
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: false,
    loading: false
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withOverlayLabel: true
  }
}`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: true
  }
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    data: sampleData.map((entry, index) => index % 2 === 0 ? {
      ...entry,
      onClick: () => onLeaderboardItemClick(entry.id)
    } : entry),
    withComparison: true,
    withOverlayLabel: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive and non-interactive rows with the overlay-label presentation used by Jetpack Stats. Being clickable is a visual affordance only — it must not change a row height or column alignment, otherwise a drill-down that swaps clickable parent rows for non-clickable child rows visibly shifts the list.'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const grid = canvasElement.querySelector('[class*="leaderboardChart__content"] > *');

    // Every entry uses the same row wrapper; only the interactive rows are buttons.
    const rows = grid.querySelectorAll(':scope > [class*="row"]');
    expect(rows).toHaveLength(sampleData.length);

    // The story must actually mix both row types for the rest to mean anything.
    const interactiveRows = grid.querySelectorAll(':scope > button[class*="row"]').length;
    expect(interactiveRows).toBeGreaterThan(0);
    expect(interactiveRows).toBeLessThan(sampleData.length);

    // Both wrapper types must have the same height.
    const heights = new Set([...rows].map(row => row.getBoundingClientRect().height));
    expect(heights.size).toBe(1);

    // Column edges are read off the cells themselves — the button wrapper spans
    // the full row even when its padding insets the cells inside it.
    const edge = (selector: string, side: 'left' | 'right') => new Set([...grid.querySelectorAll(selector)].map(cell => cell.getBoundingClientRect()[side]));
    expect(edge('[class*="barWithLabelContainer"]', 'left').size).toBe(1);
    expect(edge('[class*="valueContainer"]', 'right').size).toBe(1);
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
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`FixedDimensions`,`AspectRatio`,`WithoutComparison`,`WithOverlayLabel`,`MissingComparisonRows`,`MissingComparisonRowsWithOverlayLabel`,`Loading`,`Interactive`,`MixedInteractivity`,`Animation`,`CustomColors`,`SmallDataset`,`EmptyData`,`EmptyDataWithChildren`,`LargeValues`,`NegativeGrowth`,`CurrencyFormatting`,`NumberFormatting`,`CustomLabel`,`AdvancedFormatting`,`OverlayLabelWithImage`,`WithLegend`,`WithLegendLabels`,`WithCompositionLegend`]}));$();export{K as AdvancedFormatting,F as Animation,T as AspectRatio,H as CurrencyFormatting,I as CustomColors,G as CustomLabel,C as Default,R as EmptyData,z as EmptyDataWithChildren,w as FixedDimensions,N as Interactive,B as LargeValues,j as Loading,k as MissingComparisonRows,A as MissingComparisonRowsWithOverlayLabel,P as MixedInteractivity,V as NegativeGrowth,U as NumberFormatting,J as OverlayLabelWithImage,L as SmallDataset,Z as WithCompositionLegend,Y as WithLegend,X as WithLegendLabels,D as WithOverlayLabel,E as WithoutComparison,Q as __namedExportsOrder,S as default,$ as n,se as t};