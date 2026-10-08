import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{n as r,t as i}from"./build-module-BxDuoEEo.js";import{Tt as a}from"./esm-DG7VpAg_.js";import{ht as o,j as s,z as c}from"./chart-scope-J2SALc3t.js";import{t as l}from"./providers-BqBl5ES3.js";import{c as ee,l as te,r as ne,t as re}from"./chart-decorator-DYcmYScg.js";import{n as ie,r as ae,t as oe}from"./legend-config-BJNKT_wW.js";import{C as se,T as ce,a as le,k as u,n as ue}from"./sample-data-BJw5YSHu.js";import{t as de}from"./stories-kTZpr6ls.js";import{a as fe,i as pe,n as d,r as me,t as he}from"./leaderboard-chart-J-b7eJi4.js";var ge=e({AdvancedFormatting:()=>W,Animation:()=>N,AspectRatio:()=>b,CurrencyFormatting:()=>B,CustomColors:()=>P,CustomLabel:()=>U,Default:()=>v,EmptyData:()=>I,EmptyDataWithChildren:()=>L,FitRows:()=>X,FitRowsInteractive:()=>Z,FixedDimensions:()=>y,Interactive:()=>j,LargeValues:()=>R,Loading:()=>k,MissingComparisonRows:()=>D,MissingComparisonRowsWithOverlayLabel:()=>O,MixedInteractivity:()=>M,NegativeGrowth:()=>z,NumberFormatting:()=>V,OverlayLabelWithImage:()=>K,SmallDataset:()=>F,UnavailableDelta:()=>T,WithCompositionLegend:()=>Y,WithLegend:()=>q,WithLegendLabels:()=>J,WithOverlayLabel:()=>S,WithoutComparison:()=>x,ZeroChange:()=>w,__namedExportsOrder:()=>Q,default:()=>_}),f,_e,p,m,h,g,_,v,y,b,x,S,C,w,ve,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,ye,G,K,q,J,Y,X,Z,Q,$=t((()=>{i(),l(),de(),ie(),s(),pe(),me(),f=n(),{action:_e}=__STORYBOOK_MODULE_ACTIONS__,{expect:p,userEvent:m,waitFor:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`JS Packages/Charts Library/Charts/Leaderboard Chart`,component:d,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{data:{control:`object`,description:`Array of leaderboard entries to display`,table:{type:{summary:`LeaderboardEntry[]`}}},withComparison:{control:`boolean`,description:`Whether to show comparison data (previous period bars and delta values)`,table:{defaultValue:{summary:`false`}}},primaryColor:{control:`color`,description:"Primary color for current period bars. Defaults to the first palette slot, `--a8c-charts-color-series-1`."},secondaryColor:{control:`color`,description:"Secondary color for comparison period bars. Defaults to the second palette slot, `--a8c-charts-color-series-2`."},valueFormatter:{control:!1,description:`Custom formatter function for values`,table:{type:{summary:`(value: number) => string`},defaultValue:{summary:`formatMetricValue with compact notation`}}},deltaFormatter:{control:!1,description:`Custom formatter function for delta values`,table:{type:{summary:`(value: number) => string`},defaultValue:{summary:`formatMetricValue as percentage`}}},loading:{control:`boolean`,description:`Whether the chart is in loading state`,table:{defaultValue:{summary:`false`}}},className:{control:`text`,description:`Additional CSS class name for the chart container`,table:{type:{summary:`string`}}},style:{control:`object`,description:`Custom styling for the chart container`,table:{type:{summary:`React.CSSProperties`}}},withOverlayLabel:{control:`boolean`,description:`Whether to overlay the label on top of the bar`,table:{defaultValue:{summary:`false`}}},legendLabels:{control:`object`,description:`Custom labels for legend items`,table:{category:`Legend`,type:{summary:`{ primary?: string; comparison?: string }`},defaultValue:{summary:`undefined`}}},...ne,...ae,...te},args:{primaryColor:void 0,secondaryColor:void 0,themeName:`default`,showLegend:!1,legendPosition:`bottom`,legendAlignment:`center`,legendOrientation:`horizontal`,legendShape:`circle`,withOverlayLabel:!1},decorators:[re],render:e=>{let t=oe(e);return(0,f.jsx)(d,{...e,legend:t})}},v={args:{...ee,data:u,withComparison:!0,loading:!1}},y={args:{...v.args,width:300,height:400}},b={args:{...v.args,aspectRatio:.4}},x={args:{data:u,withComparison:!1,loading:!1}},S={args:{data:u,withOverlayLabel:!0},render:e=>(0,f.jsx)(G,{...e})},C=u.map((e,t)=>t===0?{...e,currentValue:0,previousValue:0,currentShare:0,previousShare:0,delta:0}:e),w={args:{data:C,withComparison:!0,loading:!1},parameters:{docs:{description:{story:"The first row is `0` in both periods, so its genuine zero change renders as a neutral `0%` rather than an unavailable-delta placeholder."}}},play:async({canvasElement:e})=>{let t=g(e);await p(t.getByText(`0%`)).toBeInTheDocument(),await p(t.queryByText(`Percentage change unavailable`)).not.toBeInTheDocument()}},ve=u.map((e,t)=>t===0?{...e,previousValue:0,previousShare:0,delta:void 0}:e),T={args:{data:ve,withComparison:!0,loading:!1},parameters:{docs:{description:{story:"The first row has a known previous value of `0`, so its comparison data remains available while its mathematically undefined percentage change renders as an em dash instead of `+100%`."}}},play:async({canvasElement:e})=>{let t=g(e);await p(t.getAllByText(`—`)).toHaveLength(1),await p(t.getByText(`Percentage change unavailable`)).toBeInTheDocument(),await p(t.queryByText(`No comparison data`)).not.toBeInTheDocument(),await p(t.queryByText(`+100%`)).not.toBeInTheDocument()}},E=u.map(e=>e.id===`social`||e.id===`referral`?{id:e.id,label:e.label,currentValue:e.currentValue,currentShare:e.currentShare}:e),D={args:{data:E,withComparison:!0,loading:!1},parameters:{docs:{description:{story:'Rows without a matching comparison-period value ("Social Media" and "Referral" here) omit `previousValue`/`previousShare`/`delta`. Those rows render no comparison bar and show a placeholder in the delta column instead of a fabricated value.'}}},play:async({canvasElement:e})=>{let t=g(e);await p(t.getAllByText(`—`)).toHaveLength(2),await p(t.getAllByText(`No comparison data`)).toHaveLength(2)}},O={args:{data:E,withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--a8c-charts-border-radius-leaderboard-bar":`4px`}},render:e=>(0,f.jsx)(G,{...e}),parameters:{docs:{description:{story:`Missing comparison rows in the overlay-label variant, as used by the Premium Analytics Stats widgets. The delta column still shows a placeholder for rows without comparison data.`}}}},k={args:{data:u,withComparison:!0,loading:!0}},A=_e(`leaderboard-item-click`),j={args:{data:u.map(e=>({...e,label:(0,f.jsx)(`span`,{style:{display:`flex`,alignItems:`center`,minHeight:`40px`,padding:`0 6px`,fontSize:`13px`},children:e.label}),onClick:()=>A(e.id)})),withComparison:!0,withOverlayLabel:!0,style:{"--a8c-charts-border-radius-leaderboard-bar":`4px`}},render:e=>(0,f.jsx)(G,{...e}),parameters:{docs:{description:{story:"Rows with an `onClick` become interactive: the whole row is clickable and keyboard-focusable (Enter/Space), with a chevron revealed on hover/focus. The consumer supplies the action (e.g. drill-down)."}}}},M={args:{...ee,data:u.map((e,t)=>t%2==0?{...e,onClick:()=>A(e.id)}:e),withComparison:!0,withOverlayLabel:!0},render:e=>(0,f.jsx)(G,{...e}),parameters:{docs:{description:{story:`Interactive and non-interactive rows with the overlay-label presentation used by Jetpack Stats. Being clickable is a visual affordance only — it must not change a row height or column alignment, otherwise a drill-down that swaps clickable parent rows for non-clickable child rows visibly shifts the list.`}}},play:async({canvasElement:e})=>{let t=e.querySelector(`[class*="leaderboardChart__content"] > *`),n=t.querySelectorAll(`:scope > [class*="row"]`);p(n).toHaveLength(u.length);let r=t.querySelectorAll(`:scope > button[class*="row"]`).length;p(r).toBeGreaterThan(0),p(r).toBeLessThan(u.length),p(new Set([...n].map(e=>e.getBoundingClientRect().height)).size).toBe(1);let i=(e,n)=>new Set([...t.querySelectorAll(e)].map(e=>e.getBoundingClientRect()[n]));p(i(`[class*="barWithLabelContainer"]`,`left`).size).toBe(1),p(i(`[class*="valueContainer"]`,`right`).size).toBe(1)}},N={args:{...v.args,animation:!0}},P={args:{data:u,withComparison:!0,loading:!1,primaryColor:`red`,secondaryColor:`green`}},F={args:{data:ce,withComparison:!0,loading:!1}},I={args:{data:[],withComparison:!0,loading:!1}},L={args:{data:[],withComparison:!0,loading:!1},render:e=>(0,f.jsx)(d,{...e,children:(0,f.jsx)(r,{direction:`row`,gap:`xs`,align:`center`,justify:`center`,children:`Child element`})})},R={args:{data:se,withComparison:!0,loading:!1}},z={args:{data:le,withComparison:!0,loading:!1}},B={args:{data:u,withComparison:!0,loading:!1,valueFormatter:e=>o(e,`currency`,{useMultipliers:!0,decimals:1}),deltaFormatter:e=>o(e/100,`average`,{decimals:0})}},V={args:{data:u,withComparison:!0,loading:!1,valueFormatter:e=>o(e,`number`,{useMultipliers:!1,decimals:0}),deltaFormatter:e=>o(e/100,`average`,{decimals:1})}},H=({label:e,imageColor:t,style:n={}})=>(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,...n},children:[(0,f.jsx)(`img`,{src:`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='${encodeURIComponent(t)}'/></svg>`,alt:`icon`,style:{width:`28px`,height:`28px`,verticalAlign:`middle`,borderRadius:`4px`}}),(0,f.jsx)(`span`,{style:{fontSize:`13px`},children:e})]}),U={args:{data:ue.map(e=>({...e,label:(0,f.jsx)(H,{label:e.label,imageColor:e.imageColor})})),withComparison:!1,loading:!1}},W={args:{data:se,withComparison:!0,loading:!1,valueFormatter:e=>e>=1e6?o(e,`currency`,{useMultipliers:!0,decimals:1}):o(e,`currency`,{useMultipliers:!1,decimals:0}),deltaFormatter:e=>o(e/100,`average`,{decimals:1,signDisplay:`always`})}},ye=.08,G=e=>{let{getElementStyles:t}=a(),{color:n}=t({index:0,overrideColor:e.primaryColor}),r=c(n,1-ye);return(0,f.jsx)(d,{...e,primaryColor:r})},K={args:{data:ue.map(e=>({...e,label:(0,f.jsx)(H,{label:e.label,imageColor:e.imageColor,style:{padding:`6px`}})})),withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--a8c-charts-border-radius-leaderboard-bar":`4px`}},render:e=>(0,f.jsx)(G,{...e})},q={args:{data:u,withComparison:!0,loading:!1,showLegend:!0},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},J={args:{data:u,withComparison:!0,loading:!1,showLegend:!0,legendLabels:{primary:`Aug 11-Sep 9, 2025`,comparison:`Jul 11-Aug 11, 2025`}},parameters:{docs:{description:{story:"Props-based legend using `showLegend`, the `legend` config object, and the `legendLabels` prop to customize primary and comparison labels. Other legend options (position, alignment, orientation, shape, interactivity) can be adjusted via Storybook controls."}}}},Y={render:e=>{let t=oe(e);return(0,f.jsx)(d,{...e,legend:{interactive:t?.interactive},chartId:`composition-leaderboard-chart`,children:(0,f.jsx)(d.Legend,{...t,shapeStyles:{width:8,height:8,...t?.shapeStyles}})})},args:{data:u,withComparison:!0,loading:!1},parameters:{docs:{description:{story:"Composition API using `<LeaderboardChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},X={render:e=>(0,f.jsx)(he,{...e,fitRows:!0}),args:{data:u,loading:!1,containerWidth:`360px`,containerHeight:`180px`,withPadding:!1,resize:`vertical`},parameters:{docs:{description:{story:"`fitRows` shows only the rows that fit the chart height instead of scrolling, for charts placed in a fixed-height container such as a dashboard tile. Rows that do not fit keep their place in the layout but are hidden from painting, hit testing, focus order, and the accessibility tree, so growing the container reveals them again immediately. Drag the container's resize handle to watch the visible row count follow the height — a row appears only once it fits whole."}}},play:async({canvasElement:e})=>{await document.fonts.ready;let t=e.querySelector(`[class*="leaderboardChart__content"]`),n=[...t.querySelector(`:scope > [data-leaderboard-grid]`).querySelectorAll(`:scope > [data-row-index]`)],r=e=>getComputedStyle(e).visibility===`hidden`,i=()=>new Set(n.filter(e=>!r(e)).map(e=>e.getAttribute(`data-row-index`))).size;await h(()=>{let e=n.filter(r);p(e.length).toBeGreaterThan(0),p(e.length).toBeLessThan(n.length)}),p(getComputedStyle(t).overflow).toBe(`hidden`);let a=()=>{let e=t.getBoundingClientRect().bottom;for(let t of n)r(t)||p(t.getBoundingClientRect().bottom).toBeLessThanOrEqual(e+fe)};a();let o=e.querySelector(`[data-testid="chart-story-container"]`),s=async(e,t)=>(o.style.height=`${e}px`,await h(()=>t(i())),a(),i()),c=i(),l=await s(100,e=>p(e).toBeLessThan(c));await s(280,e=>p(e).toBeGreaterThan(l)),await s(100,e=>p(e).toBe(l)),await s(180,e=>p(e).toBe(c))}},Z={render:e=>(0,f.jsx)(he,{...e,fitRows:!0}),args:{data:u.map(e=>({...e,onClick:()=>A(e.id)})),loading:!1,containerWidth:`360px`,containerHeight:`180px`,withPadding:!1,resize:`vertical`},parameters:{docs:{description:{story:"`fitRows` with interactive rows: the rows that do not fit are hidden with `visibility: hidden`, which also removes them from the tab order and the accessibility tree. Tab through the chart to verify focus only ever lands on a fully visible row."}}},play:async({canvasElement:e})=>{await document.fonts.ready;let t=[...e.querySelectorAll(`[data-row-index]`)],n=e=>getComputedStyle(e).visibility===`hidden`,r=[];await h(()=>{r=t.filter(e=>!n(e)),p(r.length).toBeGreaterThan(0),p(r.length).toBeLessThan(t.length)}),r[0].focus(),p(r[0]).toHaveFocus();for(let e of r.slice(1))await m.tab(),p(e).toHaveFocus();await m.tab(),p(t.filter(n)).not.toContain(e.ownerDocument.activeElement)}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    data: sampleData,
    withComparison: true,
    loading: false
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 300,
    height: 400
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.4
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: false,
    loading: false
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withOverlayLabel: true
  },
  render: args => <LeaderboardChartWithOverlayLabel {...args} />
}`,...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: true
  }
}`,...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    primaryColor: 'red',
    secondaryColor: 'green'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    data: smallDataset,
    withComparison: true,
    loading: false
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    withComparison: true,
    loading: false
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    data: largeValues,
    withComparison: true,
    loading: false
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    data: negativeGrowth,
    withComparison: true,
    loading: false
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataWithImageColor.map(entry => ({
      ...entry,
      label: <CustomLabelComponent label={entry.label} imageColor={entry.imageColor} />
    })),
    withComparison: false,
    loading: false
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=`Default.FixedDimensions.AspectRatio.WithoutComparison.WithOverlayLabel.ZeroChange.UnavailableDelta.MissingComparisonRows.MissingComparisonRowsWithOverlayLabel.Loading.Interactive.MixedInteractivity.Animation.CustomColors.SmallDataset.EmptyData.EmptyDataWithChildren.LargeValues.NegativeGrowth.CurrencyFormatting.NumberFormatting.CustomLabel.AdvancedFormatting.OverlayLabelWithImage.WithLegend.WithLegendLabels.WithCompositionLegend.FitRows.FitRowsInteractive`.split(`.`)}));$();export{W as AdvancedFormatting,N as Animation,b as AspectRatio,B as CurrencyFormatting,P as CustomColors,U as CustomLabel,v as Default,I as EmptyData,L as EmptyDataWithChildren,X as FitRows,Z as FitRowsInteractive,y as FixedDimensions,j as Interactive,R as LargeValues,k as Loading,D as MissingComparisonRows,O as MissingComparisonRowsWithOverlayLabel,M as MixedInteractivity,z as NegativeGrowth,V as NumberFormatting,K as OverlayLabelWithImage,F as SmallDataset,T as UnavailableDelta,Y as WithCompositionLegend,q as WithLegend,J as WithLegendLabels,S as WithOverlayLabel,x as WithoutComparison,w as ZeroChange,Q as __namedExportsOrder,_ as default,$ as n,ge as t};