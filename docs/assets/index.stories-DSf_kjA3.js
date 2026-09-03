import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{fo as r,ho as i}from"./iframe-DXIXYo1G.js";import{c as a,r as ee,s as o,t as s}from"./chart-decorator-CR7Psxjf.js";import{H as c,T as te,g as ne,l}from"./chart-scope-tYY-F3az.js";import{Vt as re,t as ie}from"./providers-DYLZKlI2.js";import{n as ae,r as oe,t as se}from"./legend-config-BJNKT_wW.js";import{S as ce,T as u,b as le,i as ue,t as d}from"./sample-data-Cx3-uFO8.js";import{t as de}from"./stories-DNczHwP5.js";import{a as fe,i as pe,n as f,r as me,t as p}from"./leaderboard-chart-BO33kpOt.js";var he=e({AdvancedFormatting:()=>G,Animation:()=>P,AspectRatio:()=>S,CurrencyFormatting:()=>V,CustomColors:()=>F,CustomLabel:()=>W,Default:()=>b,EmptyData:()=>L,EmptyDataWithChildren:()=>R,FitRows:()=>Z,FitRowsInteractive:()=>Q,FixedDimensions:()=>x,Interactive:()=>M,LargeValues:()=>z,Loading:()=>A,MissingComparisonRows:()=>O,MissingComparisonRowsWithOverlayLabel:()=>k,MixedInteractivity:()=>N,NegativeGrowth:()=>B,NumberFormatting:()=>H,OverlayLabelWithImage:()=>q,SmallDataset:()=>I,UnavailableDelta:()=>E,WithCompositionLegend:()=>X,WithLegend:()=>J,WithLegendLabels:()=>Y,WithOverlayLabel:()=>w,WithoutComparison:()=>C,ZeroChange:()=>T,__namedExportsOrder:()=>$,default:()=>y}),m,ge,h,g,_,v,y,b,x,S,C,w,_e,T,ve,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,ye,K,q,J,Y,X,Z,Q,$,be=t((()=>{r(),ie(),de(),ae(),ne(),pe(),me(),m=n(),{action:ge}=__STORYBOOK_MODULE_ACTIONS__,{expect:h,userEvent:g,waitFor:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`JS Packages/Charts Library/Charts/Leaderboard Chart`,component:f,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{data:{control:`object`,description:`Array of leaderboard entries to display`,table:{type:{summary:`LeaderboardEntry[]`}}},withComparison:{control:`boolean`,description:`Whether to show comparison data (previous period bars and delta values)`,table:{defaultValue:{summary:`false`}}},primaryColor:{control:`color`,description:`Primary color for current period bars`,table:{defaultValue:{summary:l.leaderboardChart.primaryColor}}},secondaryColor:{control:`color`,description:`Secondary color for comparison period bars`,table:{defaultValue:{summary:l.leaderboardChart.secondaryColor}}},valueFormatter:{control:!1,description:`Custom formatter function for values`,table:{type:{summary:`(value: number) => string`},defaultValue:{summary:`formatMetricValue with compact notation`}}},deltaFormatter:{control:!1,description:`Custom formatter function for delta values`,table:{type:{summary:`(value: number) => string`},defaultValue:{summary:`formatMetricValue as percentage`}}},loading:{control:`boolean`,description:`Whether the chart is in loading state`,table:{defaultValue:{summary:`false`}}},className:{control:`text`,description:`Additional CSS class name for the chart container`,table:{type:{summary:`string`}}},style:{control:`object`,description:`Custom styling for the chart container`,table:{type:{summary:`React.CSSProperties`}}},withOverlayLabel:{control:`boolean`,description:`Whether to overlay the label on top of the bar`,table:{defaultValue:{summary:`false`}}},legendLabels:{control:`object`,description:`Custom labels for legend items`,table:{category:`Legend`,type:{summary:`{ primary?: string; comparison?: string }`},defaultValue:{summary:`undefined`}}},...ee,...oe,...a},args:{primaryColor:void 0,secondaryColor:void 0,themeName:`default`,showLegend:!1,legendPosition:`bottom`,legendAlignment:`center`,legendOrientation:`horizontal`,legendShape:`circle`,withOverlayLabel:!1},decorators:[s],render:e=>{let t=se(e);return(0,m.jsx)(f,{...e,legend:t})}},b={args:{...o,data:u,withComparison:!0,loading:!1}},x={args:{...b.args,width:300,height:400}},S={args:{...b.args,aspectRatio:.4}},C={args:{data:u,withComparison:!1,loading:!1}},w={args:{data:u,withOverlayLabel:!0},render:e=>(0,m.jsx)(K,{...e})},_e=u.map((e,t)=>t===0?{...e,currentValue:0,previousValue:0,currentShare:0,previousShare:0,delta:0}:e),T={args:{data:_e,withComparison:!0,loading:!1},parameters:{docs:{description:{story:"The first row is `0` in both periods, so its genuine zero change renders as a neutral `0%` rather than an unavailable-delta placeholder."}}},play:async({canvasElement:e})=>{let t=v(e);await h(t.getByText(`0%`)).toBeInTheDocument(),await h(t.queryByText(`Percentage change unavailable`)).not.toBeInTheDocument()}},ve=u.map((e,t)=>t===0?{...e,previousValue:0,previousShare:0,delta:void 0}:e),E={args:{data:ve,withComparison:!0,loading:!1},parameters:{docs:{description:{story:"The first row has a known previous value of `0`, so its comparison data remains available while its mathematically undefined percentage change renders as an em dash instead of `+100%`."}}},play:async({canvasElement:e})=>{let t=v(e);await h(t.getAllByText(`—`)).toHaveLength(1),await h(t.getByText(`Percentage change unavailable`)).toBeInTheDocument(),await h(t.queryByText(`No comparison data`)).not.toBeInTheDocument(),await h(t.queryByText(`+100%`)).not.toBeInTheDocument()}},D=u.map(e=>e.id===`social`||e.id===`referral`?{id:e.id,label:e.label,currentValue:e.currentValue,currentShare:e.currentShare}:e),O={args:{data:D,withComparison:!0,loading:!1},parameters:{docs:{description:{story:'Rows without a matching comparison-period value ("Social Media" and "Referral" here) omit `previousValue`/`previousShare`/`delta`. Those rows render no comparison bar and show a placeholder in the delta column instead of a fabricated value.'}}},play:async({canvasElement:e})=>{let t=v(e);await h(t.getAllByText(`—`)).toHaveLength(2),await h(t.getAllByText(`No comparison data`)).toHaveLength(2)}},k={args:{data:D,withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--a8c-charts-border-radius-leaderboard-bar":`4px`}},render:e=>(0,m.jsx)(K,{...e}),parameters:{docs:{description:{story:`Missing comparison rows in the overlay-label variant, as used by the Premium Analytics Stats widgets. The delta column still shows a placeholder for rows without comparison data.`}}}},A={args:{data:u,withComparison:!0,loading:!0}},j=ge(`leaderboard-item-click`),M={args:{data:u.map(e=>({...e,label:(0,m.jsx)(`span`,{style:{display:`flex`,alignItems:`center`,minHeight:`40px`,padding:`0 6px`,fontSize:`13px`},children:e.label}),onClick:()=>j(e.id)})),withComparison:!0,withOverlayLabel:!0,style:{"--a8c-charts-border-radius-leaderboard-bar":`4px`}},render:e=>(0,m.jsx)(K,{...e}),parameters:{docs:{description:{story:"Rows with an `onClick` become interactive: the whole row is clickable and keyboard-focusable (Enter/Space), with a chevron revealed on hover/focus. The consumer supplies the action (e.g. drill-down)."}}}},N={args:{...o,data:u.map((e,t)=>t%2==0?{...e,onClick:()=>j(e.id)}:e),withComparison:!0,withOverlayLabel:!0},render:e=>(0,m.jsx)(K,{...e}),parameters:{docs:{description:{story:`Interactive and non-interactive rows with the overlay-label presentation used by Jetpack Stats. Being clickable is a visual affordance only — it must not change a row height or column alignment, otherwise a drill-down that swaps clickable parent rows for non-clickable child rows visibly shifts the list.`}}},play:async({canvasElement:e})=>{let t=e.querySelector(`[class*="leaderboardChart__content"] > *`),n=t.querySelectorAll(`:scope > [class*="row"]`);h(n).toHaveLength(u.length);let r=t.querySelectorAll(`:scope > button[class*="row"]`).length;h(r).toBeGreaterThan(0),h(r).toBeLessThan(u.length),h(new Set([...n].map(e=>e.getBoundingClientRect().height)).size).toBe(1);let i=(e,n)=>new Set([...t.querySelectorAll(e)].map(e=>e.getBoundingClientRect()[n]));h(i(`[class*="barWithLabelContainer"]`,`left`).size).toBe(1),h(i(`[class*="valueContainer"]`,`right`).size).toBe(1)}},P={args:{...b.args,animation:!0}},F={args:{data:u,withComparison:!0,loading:!1,primaryColor:`red`,secondaryColor:`green`}},I={args:{data:ce,withComparison:!0,loading:!1}},L={args:{data:[],withComparison:!0,loading:!1}},R={args:{data:[],withComparison:!0,loading:!1},render:e=>(0,m.jsx)(f,{...e,children:(0,m.jsx)(i,{direction:`row`,gap:`xs`,align:`center`,justify:`center`,children:`Child element`})})},z={args:{data:le,withComparison:!0,loading:!1}},B={args:{data:ue,withComparison:!0,loading:!1}},V={args:{data:u,withComparison:!0,loading:!1,valueFormatter:e=>c(e,`currency`,{useMultipliers:!0,decimals:1}),deltaFormatter:e=>c(e/100,`average`,{decimals:0})}},H={args:{data:u,withComparison:!0,loading:!1,valueFormatter:e=>c(e,`number`,{useMultipliers:!1,decimals:0}),deltaFormatter:e=>c(e/100,`average`,{decimals:1})}},U=({label:e,imageColor:t,style:n={}})=>(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,...n},children:[(0,m.jsx)(`img`,{src:`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='${encodeURIComponent(t)}'/></svg>`,alt:`icon`,style:{width:`28px`,height:`28px`,verticalAlign:`middle`,borderRadius:`4px`}}),(0,m.jsx)(`span`,{style:{fontSize:`13px`},children:e})]}),W={args:{data:d.map(e=>({...e,label:(0,m.jsx)(U,{label:e.label,imageColor:e.imageColor})})),withComparison:!1,loading:!1}},G={args:{data:le,withComparison:!0,loading:!1,valueFormatter:e=>e>=1e6?c(e,`currency`,{useMultipliers:!0,decimals:1}):c(e,`currency`,{useMultipliers:!1,decimals:0}),deltaFormatter:e=>c(e/100,`average`,{decimals:1,signDisplay:`always`})}},ye=.08,K=e=>{let{getElementStyles:t}=re(),{color:n}=t({index:0,overrideColor:e.primaryColor}),r=te(n,1-ye);return(0,m.jsx)(f,{...e,primaryColor:r})},q={args:{data:d.map(e=>({...e,label:(0,m.jsx)(U,{label:e.label,imageColor:e.imageColor,style:{padding:`6px`}})})),withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--a8c-charts-border-radius-leaderboard-bar":`4px`}},render:e=>(0,m.jsx)(K,{...e})},J={args:{data:u,withComparison:!0,loading:!1,showLegend:!0},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},Y={args:{data:u,withComparison:!0,loading:!1,showLegend:!0,legendLabels:{primary:`Aug 11-Sep 9, 2025`,comparison:`Jul 11-Aug 11, 2025`}},parameters:{docs:{description:{story:"Props-based legend using `showLegend`, the `legend` config object, and the `legendLabels` prop to customize primary and comparison labels. Other legend options (position, alignment, orientation, shape, interactivity) can be adjusted via Storybook controls."}}}},X={render:e=>{let t=se(e);return(0,m.jsx)(f,{...e,legend:{interactive:t?.interactive},chartId:`composition-leaderboard-chart`,children:(0,m.jsx)(f.Legend,{...t,shapeStyles:{width:8,height:8,...t?.shapeStyles}})})},args:{data:u,withComparison:!0,loading:!1},parameters:{docs:{description:{story:"Composition API using `<LeaderboardChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},Z={render:e=>(0,m.jsx)(p,{...e,fitRows:!0}),args:{data:u,loading:!1,containerWidth:`360px`,containerHeight:`180px`,withPadding:!1,resize:`vertical`},parameters:{docs:{description:{story:"`fitRows` shows only the rows that fit the chart height instead of scrolling, for charts placed in a fixed-height container such as a dashboard tile. Rows that do not fit keep their place in the layout but are hidden from painting, hit testing, focus order, and the accessibility tree, so growing the container reveals them again immediately. Drag the container's resize handle to watch the visible row count follow the height — a row appears only once it fits whole."}}},play:async({canvasElement:e})=>{await document.fonts.ready;let t=e.querySelector(`[class*="leaderboardChart__content"]`),n=[...t.querySelector(`:scope > [data-leaderboard-grid]`).querySelectorAll(`:scope > [data-row-index]`)],r=e=>getComputedStyle(e).visibility===`hidden`,i=()=>new Set(n.filter(e=>!r(e)).map(e=>e.getAttribute(`data-row-index`))).size;await _(()=>{let e=n.filter(r);h(e.length).toBeGreaterThan(0),h(e.length).toBeLessThan(n.length)}),h(getComputedStyle(t).overflow).toBe(`hidden`);let a=()=>{let e=t.getBoundingClientRect().bottom;for(let t of n)r(t)||h(t.getBoundingClientRect().bottom).toBeLessThanOrEqual(e+fe)};a();let ee=e.querySelector(`[data-testid="chart-story-container"]`),o=async(e,t)=>(ee.style.height=`${e}px`,await _(()=>t(i())),a(),i()),s=i(),c=await o(100,e=>h(e).toBeLessThan(s));await o(280,e=>h(e).toBeGreaterThan(c)),await o(100,e=>h(e).toBe(c)),await o(180,e=>h(e).toBe(s))}},Q={render:e=>(0,m.jsx)(p,{...e,fitRows:!0}),args:{data:u.map(e=>({...e,onClick:()=>j(e.id)})),loading:!1,containerWidth:`360px`,containerHeight:`180px`,withPadding:!1,resize:`vertical`},parameters:{docs:{description:{story:"`fitRows` with interactive rows: the rows that do not fit are hidden with `visibility: hidden`, which also removes them from the tab order and the accessibility tree. Tab through the chart to verify focus only ever lands on a fully visible row."}}},play:async({canvasElement:e})=>{await document.fonts.ready;let t=[...e.querySelectorAll(`[data-row-index]`)],n=e=>getComputedStyle(e).visibility===`hidden`,r=[];await _(()=>{r=t.filter(e=>!n(e)),h(r.length).toBeGreaterThan(0),h(r.length).toBeLessThan(t.length)}),r[0].focus(),h(r[0]).toHaveFocus();for(let e of r.slice(1))await g.tab(),h(e).toHaveFocus();await g.tab(),h(t.filter(n)).not.toContain(e.ownerDocument.activeElement)}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    data: sampleData,
    withComparison: true,
    loading: false
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 300,
    height: 400
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.4
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: false,
    loading: false
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withOverlayLabel: true
  },
  render: args => <LeaderboardChartWithOverlayLabel {...args} />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    data: zeroChangeData,
    withComparison: true,
    loading: false
  },
  parameters: {
    docs: {
      description: {
        story: 'The first row is \`0\` in both periods, so its genuine zero change renders as a neutral \`0%\` rather than an unavailable-delta placeholder.'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('0%')).toBeInTheDocument();
    await expect(canvas.queryByText('Percentage change unavailable')).not.toBeInTheDocument();
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    data: unavailableDeltaData,
    withComparison: true,
    loading: false
  },
  parameters: {
    docs: {
      description: {
        story: 'The first row has a known previous value of \`0\`, so its comparison data remains available while its mathematically undefined percentage change renders as an em dash instead of \`+100%\`.'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // getAllByText rather than getByText so adding another placeholder row to
    // the fixture fails on the count instead of on an ambiguous match.
    await expect(canvas.getAllByText('—')).toHaveLength(1);
    await expect(canvas.getByText('Percentage change unavailable')).toBeInTheDocument();
    // The discriminator: a known previous value of 0 must not fall into the
    // missing-comparison bucket.
    await expect(canvas.queryByText('No comparison data')).not.toBeInTheDocument();
    await expect(canvas.queryByText('+100%')).not.toBeInTheDocument();
  }
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText('—')).toHaveLength(2);
    await expect(canvas.getAllByText('No comparison data')).toHaveLength(2);
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    data: missingComparisonData,
    withComparison: true,
    withOverlayLabel: true,
    loading: false,
    style: {
      '--a8c-charts-border-radius-leaderboard-bar': '4px'
    }
  },
  render: args => <LeaderboardChartWithOverlayLabel {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Missing comparison rows in the overlay-label variant, as used by the Premium Analytics Stats widgets. The delta column still shows a placeholder for rows without comparison data.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: true
  }
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
      '--a8c-charts-border-radius-leaderboard-bar': '4px'
    }
  },
  render: args => <LeaderboardChartWithOverlayLabel {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Rows with an \`onClick\` become interactive: the whole row is clickable and keyboard-focusable (Enter/Space), with a chevron revealed on hover/focus. The consumer supplies the action (e.g. drill-down).'
      }
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    data: sampleData.map((entry, index) => index % 2 === 0 ? {
      ...entry,
      onClick: () => onLeaderboardItemClick(entry.id)
    } : entry),
    withComparison: true,
    withOverlayLabel: true
  },
  render: args => <LeaderboardChartWithOverlayLabel {...args} />,
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    primaryColor: 'red',
    secondaryColor: 'green'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    data: smallDataset,
    withComparison: true,
    loading: false
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    withComparison: true,
    loading: false
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    data: largeValues,
    withComparison: true,
    loading: false
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    data: negativeGrowth,
    withComparison: true,
    loading: false
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataWithImageColor.map(entry => ({
      ...entry,
      label: <CustomLabelComponent label={entry.label} imageColor={entry.imageColor} />
    })),
    withComparison: false,
    loading: false
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
      '--a8c-charts-border-radius-leaderboard-bar': '4px'
    }
  },
  render: args => <LeaderboardChartWithOverlayLabel {...args} />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <LeaderboardChartUnresponsive {...args} fitRows />,
  args: {
    data: sampleData,
    loading: false,
    // The decorator's box stands in for a fixed-height dashboard tile. The
    // chart fills it, so dragging its resize handle changes the height the
    // rows are fitted to. No padding, so the tile height is the chart height.
    containerWidth: '360px',
    containerHeight: '180px',
    withPadding: false,
    resize: 'vertical'
  },
  parameters: {
    docs: {
      description: {
        story: "\`fitRows\` shows only the rows that fit the chart height instead of scrolling, for charts placed in a fixed-height container such as a dashboard tile. Rows that do not fit keep their place in the layout but are hidden from painting, hit testing, focus order, and the accessibility tree, so growing the container reveals them again immediately. Drag the container's resize handle to watch the visible row count follow the height — a row appears only once it fits whole."
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    // Row heights depend on the web fonts, so measuring before they land
    // samples geometry the chart is still in the middle of correcting.
    await document.fonts.ready;
    const content = canvasElement.querySelector('[class*="leaderboardChart__content"]');
    const grid = content.querySelector(':scope > [data-leaderboard-grid]');
    const rows = [...grid.querySelectorAll(':scope > [data-row-index]')];
    const isHidden = row => getComputedStyle(row).visibility === 'hidden';
    const visibleCount = () => new Set(rows.filter(row => !isHidden(row)).map(row => row.getAttribute('data-row-index'))).size;

    // The story only means something if the height actually forces a cut.
    await waitFor(() => {
      const hidden = rows.filter(isHidden);
      expect(hidden.length).toBeGreaterThan(0);
      expect(hidden.length).toBeLessThan(rows.length);
    });

    // No inner scrollbar: the rows that do not fit are hidden, not scrolled to.
    expect(getComputedStyle(content).overflow).toBe('hidden');

    // Every row left visible is whole — none is clipped by the container edge.
    const wholeRowsOnly = () => {
      const contentBottom = content.getBoundingClientRect().bottom;
      for (const row of rows) {
        if (isHidden(row)) {
          continue;
        }
        expect(row.getBoundingClientRect().bottom).toBeLessThanOrEqual(contentBottom + SUBPIXEL_TOLERANCE);
      }
    };
    wholeRowsOnly();

    // Assert the round trip: a pinned pixel height passes the first render and
    // silently breaks re-growth. The decorator's box is the resize target.
    const box = canvasElement.querySelector<HTMLElement>('[data-testid="chart-story-container"]');
    // Poll for the effect rather than sleeping a fixed amount: ResizeObserver
    // delivery is tied to the rendering pipeline, and a loaded CI runner can
    // miss a flat deadline.
    const resizeTo = async (height, expected) => {
      box.style.height = \`\${height}px\`;
      await waitFor(() => expected(visibleCount()));
      wholeRowsOnly();
      return visibleCount();
    };
    const atStart = visibleCount();
    const whenShort = await resizeTo(100, count => expect(count).toBeLessThan(atStart));
    await resizeTo(280, count => expect(count).toBeGreaterThan(whenShort));
    await resizeTo(100, count => expect(count).toBe(whenShort));
    await resizeTo(180, count => expect(count).toBe(atStart));
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <LeaderboardChartUnresponsive {...args} fitRows />,
  args: {
    data: sampleData.map(entry => ({
      ...entry,
      onClick: () => onLeaderboardItemClick(entry.id)
    })),
    loading: false,
    containerWidth: '360px',
    containerHeight: '180px',
    withPadding: false,
    resize: 'vertical'
  },
  parameters: {
    docs: {
      description: {
        story: '\`fitRows\` with interactive rows: the rows that do not fit are hidden with \`visibility: hidden\`, which also removes them from the tab order and the accessibility tree. Tab through the chart to verify focus only ever lands on a fully visible row.'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    await document.fonts.ready;
    const rows = [...canvasElement.querySelectorAll<HTMLElement>('[data-row-index]')];
    const isHidden = (row: HTMLElement) => getComputedStyle(row).visibility === 'hidden';

    // The focus walk only means something if the height actually forces a cut.
    let visible: HTMLElement[] = [];
    await waitFor(() => {
      visible = rows.filter(row => !isHidden(row));
      expect(visible.length).toBeGreaterThan(0);
      expect(visible.length).toBeLessThan(rows.length);
    });

    // Tab lands on each fitted row in order…
    visible[0].focus();
    expect(visible[0]).toHaveFocus();
    for (const row of visible.slice(1)) {
      await userEvent.tab();
      expect(row).toHaveFocus();
    }

    // …then leaves the chart: no hidden row ever takes focus.
    await userEvent.tab();
    const hidden = rows.filter(isHidden);
    expect(hidden).not.toContain(canvasElement.ownerDocument.activeElement);
  }
}`,...Q.parameters?.docs?.source}}},$=`Default.FixedDimensions.AspectRatio.WithoutComparison.WithOverlayLabel.ZeroChange.UnavailableDelta.MissingComparisonRows.MissingComparisonRowsWithOverlayLabel.Loading.Interactive.MixedInteractivity.Animation.CustomColors.SmallDataset.EmptyData.EmptyDataWithChildren.LargeValues.NegativeGrowth.CurrencyFormatting.NumberFormatting.CustomLabel.AdvancedFormatting.OverlayLabelWithImage.WithLegend.WithLegendLabels.WithCompositionLegend.FitRows.FitRowsInteractive`.split(`.`)}));be();export{G as AdvancedFormatting,P as Animation,S as AspectRatio,V as CurrencyFormatting,F as CustomColors,W as CustomLabel,b as Default,L as EmptyData,R as EmptyDataWithChildren,Z as FitRows,Q as FitRowsInteractive,x as FixedDimensions,M as Interactive,z as LargeValues,A as Loading,O as MissingComparisonRows,k as MissingComparisonRowsWithOverlayLabel,N as MixedInteractivity,B as NegativeGrowth,H as NumberFormatting,q as OverlayLabelWithImage,I as SmallDataset,E as UnavailableDelta,X as WithCompositionLegend,J as WithLegend,Y as WithLegendLabels,w as WithOverlayLabel,C as WithoutComparison,T as ZeroChange,$ as __namedExportsOrder,y as default,be as n,he as t};