import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{t as r}from"./react-DVCOKQW8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Et as a}from"./esm-CeWr-X4G.js";import{ht as o,j as s,z as ee}from"./chart-scope-DKbZdo95.js";import{t as te}from"./providers-BMtCyPq1.js";import{c,l as ne,r as re,t as ie}from"./chart-decorator-ChapNOnT.js";import{n as ae,r as oe,t as se}from"./legend-config-BJNKT_wW.js";import{C as ce,T as le,a as ue,k as l,n as de}from"./sample-data-BJw5YSHu.js";import{t as fe}from"./stories-CWF00joW.js";import{n as pe,t as me}from"./build-module-swvKQOcz.js";import{a as he,i as ge,n as u,r as _e,t as ve}from"./leaderboard-chart-Bv5ikZUD.js";var ye=e({AdvancedFormatting:()=>K,Animation:()=>F,AspectRatio:()=>y,CurrencyFormatting:()=>H,CustomColors:()=>I,CustomLabel:()=>G,Default:()=>_,EmptyData:()=>R,EmptyDataWithChildren:()=>z,FitRows:()=>Q,FitRowsInteractive:()=>$,FixedDimensions:()=>v,Interactive:()=>j,InteractiveLabel:()=>M,InteractiveMixed:()=>P,LargeValues:()=>B,Loading:()=>D,MissingComparisonRows:()=>T,MissingComparisonRowsWithOverlayLabel:()=>E,NegativeGrowth:()=>V,NumberFormatting:()=>U,OverlayLabelWithImage:()=>J,SmallDataset:()=>L,UnavailableDelta:()=>C,WithCompositionLegend:()=>Z,WithLegend:()=>Y,WithLegendLabels:()=>X,WithOverlayLabel:()=>x,WithoutComparison:()=>b,ZeroChange:()=>S,__namedExportsOrder:()=>Ee,default:()=>xe}),be,d,f,p,m,h,g,xe,_,v,y,b,x,Se,S,Ce,C,w,T,E,D,O,k,we,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,Te,q,J,Y,X,Z,Q,$,Ee,De=n((()=>{me(),be=t(r(),1),te(),fe(),ae(),s(),ge(),_e(),d=i(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,{expect:p,userEvent:m,waitFor:h,within:g}=__STORYBOOK_MODULE_TEST__,xe={title:`JS Packages/Charts Library/Charts/Leaderboard Chart`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{data:{control:`object`,description:`Array of leaderboard entries to display`,table:{type:{summary:`LeaderboardEntry[]`}}},withComparison:{control:`boolean`,description:`Whether to show comparison data (previous period bars and delta values)`,table:{defaultValue:{summary:`false`}}},primaryColor:{control:`color`,description:"Primary color for current period bars. Defaults to the first palette slot, `--a8c-charts-color-series-1`."},secondaryColor:{control:`color`,description:"Secondary color for comparison period bars. Defaults to the second palette slot, `--a8c-charts-color-series-2`."},valueFormatter:{control:!1,description:`Custom formatter function for values`,table:{type:{summary:`(value: number) => string`},defaultValue:{summary:`formatMetricValue with compact notation`}}},deltaFormatter:{control:!1,description:`Custom formatter function for delta values`,table:{type:{summary:`(value: number) => string`},defaultValue:{summary:`formatMetricValue as percentage`}}},loading:{control:`boolean`,description:`Whether the chart is in loading state`,table:{defaultValue:{summary:`false`}}},className:{control:`text`,description:`Additional CSS class name for the chart container`,table:{type:{summary:`string`}}},style:{control:`object`,description:`Custom styling for the chart container`,table:{type:{summary:`React.CSSProperties`}}},withOverlayLabel:{control:`boolean`,description:`Whether to overlay the label on top of the bar`,table:{defaultValue:{summary:`false`}}},legendLabels:{control:`object`,description:`Custom labels for legend items`,table:{category:`Legend`,type:{summary:`{ primary?: string; comparison?: string }`},defaultValue:{summary:`undefined`}}},...re,...oe,...ne},args:{primaryColor:void 0,secondaryColor:void 0,themeName:`default`,showLegend:!1,legendPosition:`bottom`,legendAlignment:`center`,legendOrientation:`horizontal`,legendShape:`circle`,withOverlayLabel:!1},decorators:[ie],render:e=>{let t=se(e);return(0,d.jsx)(u,{...e,legend:t})}},_={args:{...c,data:l,withComparison:!0,loading:!1}},v={args:{..._.args,width:300,height:400}},y={args:{..._.args,aspectRatio:.4}},b={args:{data:l,withComparison:!1,loading:!1}},x={args:{data:l,withOverlayLabel:!0},render:e=>(0,d.jsx)(q,{...e})},Se=l.map((e,t)=>t===0?{...e,currentValue:0,previousValue:0,currentShare:0,previousShare:0,delta:0}:e),S={args:{data:Se,withComparison:!0,loading:!1},parameters:{docs:{description:{story:"The first row is `0` in both periods, so its genuine zero change renders as a neutral `0%` rather than an unavailable-delta placeholder."}}},play:async({canvasElement:e})=>{let t=g(e);await p(t.getByText(`0%`)).toBeInTheDocument(),await p(t.queryByText(`Percentage change unavailable`)).not.toBeInTheDocument()}},Ce=l.map((e,t)=>t===0?{...e,previousValue:0,previousShare:0,delta:void 0}:e),C={args:{data:Ce,withComparison:!0,loading:!1},parameters:{docs:{description:{story:"The first row has a known previous value of `0`, so its comparison data remains available while its mathematically undefined percentage change renders as an em dash instead of `+100%`."}}},play:async({canvasElement:e})=>{let t=g(e);await p(t.getAllByText(`—`)).toHaveLength(1),await p(t.getByText(`Percentage change unavailable`)).toBeInTheDocument(),await p(t.queryByText(`No comparison data`)).not.toBeInTheDocument(),await p(t.queryByText(`+100%`)).not.toBeInTheDocument()}},w=l.map(e=>e.id===`social`||e.id===`referral`?{id:e.id,label:e.label,currentValue:e.currentValue,currentShare:e.currentShare}:e),T={args:{data:w,withComparison:!0,loading:!1},parameters:{docs:{description:{story:'Rows without a matching comparison-period value ("Social Media" and "Referral" here) omit `previousValue`/`previousShare`/`delta`. Those rows render no comparison bar and show a placeholder in the delta column instead of a fabricated value.'}}},play:async({canvasElement:e})=>{let t=g(e);await p(t.getAllByText(`—`)).toHaveLength(2),await p(t.getAllByText(`No comparison data`)).toHaveLength(2)}},E={args:{data:w,withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--a8c-charts-border-radius-leaderboard-bar":`4px`}},render:e=>(0,d.jsx)(q,{...e}),parameters:{docs:{description:{story:`Missing comparison rows in the overlay-label variant, as used by the Premium Analytics Stats widgets. The delta column still shows a placeholder for rows without comparison data.`}}}},D={args:{data:l,withComparison:!0,loading:!0}},O=f(`leaderboard-item-click`),k=({children:e})=>(0,d.jsx)(`span`,{style:{display:`flex`,alignItems:`center`,minHeight:`40px`,padding:`0 6px`,fontSize:`13px`},children:e}),we=f(`label-link-click`),A=({entry:e})=>{let t=(0,be.useCallback)(t=>{t.preventDefault(),we(e.id)},[e.id]);return(0,d.jsx)(`a`,{href:`#${e.id}`,onClick:t,children:e.label})},j={args:{data:l.map(e=>({...e,label:(0,d.jsx)(k,{children:e.label}),onClick:()=>O(e.id)})),withComparison:!0,withOverlayLabel:!0,style:{"--a8c-charts-border-radius-leaderboard-bar":`4px`}},render:e=>(0,d.jsx)(q,{...e}),parameters:{docs:{description:{story:"Rows with an `onClick` become interactive: the whole row is clickable and keyboard-focusable (Enter/Space), with a chevron revealed on hover/focus. The consumer supplies the action (e.g. drill-down)."}}}},M={args:{...c,data:l.map(e=>({...e,label:(0,d.jsx)(k,{children:(0,d.jsx)(A,{entry:e})}),onClick:()=>O(e.id),ariaLabel:`View details for ${e.label}`,hasInteractiveLabel:!0})),withComparison:!0,withOverlayLabel:!0,style:{"--a8c-charts-border-radius-leaderboard-bar":`4px`}},render:e=>(0,d.jsx)(q,{...e}),parameters:{docs:{description:{story:"A row that drills down and also links its label. With `hasInteractiveLabel`, clicking the name fires only `label-link-click` and clicking anywhere else on the row fires only `leaderboard-item-click`; Tab reaches the link, then the row button."}}},play:async({canvasElement:e})=>{let t=g(e);p(t.getByRole(`button`,{name:`View details for ${l[0].label}`})).not.toContainElement(t.getByRole(`link`,{name:String(l[0].label)}))}},N=[`drill-down`,`drill-down-with-link`,`inert`,`link-only`,`drill-down`],P={args:{...c,data:l.map((e,t)=>{let n=()=>O(e.id);switch(N[t%N.length]){case`drill-down`:return{...e,label:(0,d.jsx)(k,{children:e.label}),onClick:n};case`drill-down-with-link`:return{...e,label:(0,d.jsx)(k,{children:(0,d.jsx)(A,{entry:e})}),onClick:n,ariaLabel:`View details for ${e.label}`,hasInteractiveLabel:!0};case`link-only`:return{...e,label:(0,d.jsx)(k,{children:(0,d.jsx)(A,{entry:e})})};default:return{...e,label:(0,d.jsx)(k,{children:e.label})}}}),withComparison:!0,withOverlayLabel:!0,style:{"--a8c-charts-border-radius-leaderboard-bar":`4px`}},render:e=>(0,d.jsx)(q,{...e}),parameters:{docs:{description:{story:"Drill-down rows, a drill-down row whose label is also a link, an inert row, and an inert row whose label is a link, with the overlay-label presentation used by Jetpack Stats. `hasInteractiveLabel` is set per entry, like `onClick`, and only the row that both drills down and links uses it; a row without `onClick` can hold a link without it. Being clickable is a visual affordance only — it must not change a row height or column alignment, otherwise a drill-down that swaps clickable parent rows for non-clickable child rows visibly shifts the list."}}},play:async({canvasElement:e})=>{let t=e.querySelector(`[class*="leaderboardChart__content"] > *`),n=t.querySelectorAll(`:scope > [role="listitem"]`);p(n).toHaveLength(l.length);let r=t.querySelectorAll(`:scope > [role="listitem"] > button`).length;p(r).toBeGreaterThan(0),p(r).toBeLessThan(l.length),p(new Set([...n].map(e=>e.getBoundingClientRect().height)).size).toBe(1);let i=(e,n)=>new Set([...t.querySelectorAll(e)].map(e=>e.getBoundingClientRect()[n]));p(i(`[class*="barWithLabelContainer"]`,`left`).size).toBe(1),p(i(`[class*="valueContainer"]`,`right`).size).toBe(1)}},F={args:{..._.args,animation:!0}},I={args:{data:l,withComparison:!0,loading:!1,primaryColor:`red`,secondaryColor:`green`}},L={args:{data:le,withComparison:!0,loading:!1}},R={args:{data:[],withComparison:!0,loading:!1}},z={args:{data:[],withComparison:!0,loading:!1},render:e=>(0,d.jsx)(u,{...e,children:(0,d.jsx)(pe,{direction:`row`,gap:`xs`,align:`center`,justify:`center`,children:`Child element`})})},B={args:{data:ce,withComparison:!0,loading:!1}},V={args:{data:ue,withComparison:!0,loading:!1}},H={args:{data:l,withComparison:!0,loading:!1,valueFormatter:e=>o(e,`currency`,{useMultipliers:!0,decimals:1}),deltaFormatter:e=>o(e/100,`average`,{decimals:0})}},U={args:{data:l,withComparison:!0,loading:!1,valueFormatter:e=>o(e,`number`,{useMultipliers:!1,decimals:0}),deltaFormatter:e=>o(e/100,`average`,{decimals:1})}},W=({label:e,imageColor:t,style:n={}})=>(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,...n},children:[(0,d.jsx)(`img`,{src:`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='${encodeURIComponent(t)}'/></svg>`,alt:`icon`,style:{width:`28px`,height:`28px`,verticalAlign:`middle`,borderRadius:`4px`}}),(0,d.jsx)(`span`,{style:{fontSize:`13px`},children:e})]}),G={args:{data:de.map(e=>({...e,label:(0,d.jsx)(W,{label:e.label,imageColor:e.imageColor})})),withComparison:!1,loading:!1}},K={args:{data:ce,withComparison:!0,loading:!1,valueFormatter:e=>e>=1e6?o(e,`currency`,{useMultipliers:!0,decimals:1}):o(e,`currency`,{useMultipliers:!1,decimals:0}),deltaFormatter:e=>o(e/100,`average`,{decimals:1,signDisplay:`always`})}},Te=.08,q=e=>{let{getElementStyles:t}=a(),{color:n}=t({index:0,overrideColor:e.primaryColor}),r=ee(n,1-Te);return(0,d.jsx)(u,{...e,primaryColor:r})},J={args:{data:de.map(e=>({...e,label:(0,d.jsx)(W,{label:e.label,imageColor:e.imageColor,style:{padding:`6px`}})})),withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--a8c-charts-border-radius-leaderboard-bar":`4px`}},render:e=>(0,d.jsx)(q,{...e})},Y={args:{data:l,withComparison:!0,loading:!1,showLegend:!0},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},X={args:{data:l,withComparison:!0,loading:!1,showLegend:!0,legendLabels:{primary:`Aug 11-Sep 9, 2025`,comparison:`Jul 11-Aug 11, 2025`}},parameters:{docs:{description:{story:"Props-based legend using `showLegend`, the `legend` config object, and the `legendLabels` prop to customize primary and comparison labels. Other legend options (position, alignment, orientation, shape, interactivity) can be adjusted via Storybook controls."}}}},Z={render:e=>{let t=se(e);return(0,d.jsx)(u,{...e,legend:{interactive:t?.interactive},chartId:`composition-leaderboard-chart`,children:(0,d.jsx)(u.Legend,{...t,shapeStyles:{width:8,height:8,...t?.shapeStyles}})})},args:{data:l,withComparison:!0,loading:!1},parameters:{docs:{description:{story:"Composition API using `<LeaderboardChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},Q={render:e=>(0,d.jsx)(ve,{...e,fitRows:!0}),args:{data:l,loading:!1,containerWidth:`360px`,containerHeight:`180px`,withPadding:!1,resize:`vertical`},parameters:{docs:{description:{story:"`fitRows` shows only the rows that fit the chart height instead of scrolling, for charts placed in a fixed-height container such as a dashboard tile. Rows that do not fit keep their place in the layout but are hidden from painting, hit testing, focus order, and the accessibility tree, so growing the container reveals them again immediately. Drag the container's resize handle to watch the visible row count follow the height — a row appears only once it fits whole."}}},play:async({canvasElement:e})=>{await document.fonts.ready;let t=e.querySelector(`[class*="leaderboardChart__content"]`),n=[...t.querySelector(`:scope > [data-leaderboard-grid]`).querySelectorAll(`:scope > [data-row-index]`)],r=e=>getComputedStyle(e).visibility===`hidden`,i=()=>new Set(n.filter(e=>!r(e)).map(e=>e.getAttribute(`data-row-index`))).size;await h(()=>{let e=n.filter(r);p(e.length).toBeGreaterThan(0),p(e.length).toBeLessThan(n.length)}),p(getComputedStyle(t).overflow).toBe(`hidden`);let a=()=>{let e=t.getBoundingClientRect().bottom;for(let t of n)r(t)||p(t.getBoundingClientRect().bottom).toBeLessThanOrEqual(e+he)};a();let o=e.querySelector(`[data-testid="chart-story-container"]`),s=async(e,t)=>(o.style.height=`${e}px`,await h(()=>t(i())),a(),i()),ee=i(),te=await s(100,e=>p(e).toBeLessThan(ee));await s(280,e=>p(e).toBeGreaterThan(te)),await s(100,e=>p(e).toBe(te)),await s(180,e=>p(e).toBe(ee))}},$={render:e=>(0,d.jsx)(ve,{...e,fitRows:!0}),args:{data:l.map(e=>({...e,onClick:()=>O(e.id)})),loading:!1,containerWidth:`360px`,containerHeight:`180px`,withPadding:!1,resize:`vertical`},parameters:{docs:{description:{story:"`fitRows` with interactive rows: the rows that do not fit are hidden with `visibility: hidden`, which also removes them from the tab order and the accessibility tree. Tab through the chart to verify focus only ever lands on a fully visible row."}}},play:async({canvasElement:e})=>{await document.fonts.ready;let t=[...e.querySelectorAll(`[data-row-index] > button`)],n=e=>getComputedStyle(e).visibility===`hidden`,r=[];await h(()=>{r=t.filter(e=>!n(e)),p(r.length).toBeGreaterThan(0),p(r.length).toBeLessThan(t.length)}),r[0].focus(),p(r[0]).toHaveFocus();for(let e of r.slice(1))await m.tab(),p(e).toHaveFocus();await m.tab(),p(t.filter(n)).not.toContain(e.ownerDocument.activeElement)}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    data: sampleData,
    withComparison: true,
    loading: false
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 300,
    height: 400
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.4
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: false,
    loading: false
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withOverlayLabel: true
  },
  render: args => <LeaderboardChartWithOverlayLabel {...args} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: true
  }
}`,...D.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData.map(entry => ({
      ...entry,
      label: <InteractiveRowLabel>{entry.label}</InteractiveRowLabel>,
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
    data: sampleData.map(entry => ({
      ...entry,
      // The span fills the label cell, so only the name itself is the link.
      label: <InteractiveRowLabel>
                    <DemoLabelLink entry={entry} />
                </InteractiveRowLabel>,
      onClick: () => onLeaderboardItemClick(entry.id),
      ariaLabel: \`View details for \${entry.label}\`,
      hasInteractiveLabel: true
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
        story: 'A row that drills down and also links its label. With \`hasInteractiveLabel\`, clicking the name fires only \`label-link-click\` and clicking anywhere else on the row fires only \`leaderboard-item-click\`; Tab reaches the link, then the row button.'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: \`View details for \${sampleData[0].label}\`
    });
    expect(button).not.toContainElement(canvas.getByRole('link', {
      name: String(sampleData[0].label)
    }));
  }
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    data: sampleData.map((entry, index): LeaderboardEntry => {
      const onClick = () => onLeaderboardItemClick(entry.id);
      switch (MIXED_ROW_KINDS[index % MIXED_ROW_KINDS.length]) {
        case 'drill-down':
          return {
            ...entry,
            label: <InteractiveRowLabel>{entry.label}</InteractiveRowLabel>,
            onClick
          };
        case 'drill-down-with-link':
          return {
            ...entry,
            label: <InteractiveRowLabel>
                                <DemoLabelLink entry={entry} />
                            </InteractiveRowLabel>,
            onClick,
            ariaLabel: \`View details for \${entry.label}\`,
            hasInteractiveLabel: true
          };
        case 'link-only':
          return {
            ...entry,
            label: <InteractiveRowLabel>
                                <DemoLabelLink entry={entry} />
                            </InteractiveRowLabel>
          };
        default:
          return {
            ...entry,
            label: <InteractiveRowLabel>{entry.label}</InteractiveRowLabel>
          };
      }
    }),
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
        story: 'Drill-down rows, a drill-down row whose label is also a link, an inert row, and an inert row whose label is a link, with the overlay-label presentation used by Jetpack Stats. \`hasInteractiveLabel\` is set per entry, like \`onClick\`, and only the row that both drills down and links uses it; a row without \`onClick\` can hold a link without it. Being clickable is a visual affordance only — it must not change a row height or column alignment, otherwise a drill-down that swaps clickable parent rows for non-clickable child rows visibly shifts the list.'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const grid = canvasElement.querySelector('[class*="leaderboardChart__content"] > *');

    // Every entry is a list item; only the plain drill-down ones are a button directly.
    const rows = grid.querySelectorAll(':scope > [role="listitem"]');
    expect(rows).toHaveLength(sampleData.length);

    // The story must actually mix both row types for the rest to mean anything.
    const interactiveRows = grid.querySelectorAll(':scope > [role="listitem"] > button').length;
    expect(interactiveRows).toBeGreaterThan(0);
    expect(interactiveRows).toBeLessThan(sampleData.length);

    // Interactive and static list items must have the same height.
    const heights = new Set([...rows].map(row => row.getBoundingClientRect().height));
    expect(heights.size).toBe(1);

    // Column edges are read off the cells themselves, since the row padding
    // insets them from the list item edge.
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
      '--a8c-charts-border-radius-leaderboard-bar': '4px'
    }
  },
  render: args => <LeaderboardChartWithOverlayLabel {...args} />
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
    const rows = [...canvasElement.querySelectorAll<HTMLElement>('[data-row-index] > button')];
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
}`,...$.parameters?.docs?.source}}},Ee=`Default.FixedDimensions.AspectRatio.WithoutComparison.WithOverlayLabel.ZeroChange.UnavailableDelta.MissingComparisonRows.MissingComparisonRowsWithOverlayLabel.Loading.Interactive.InteractiveLabel.InteractiveMixed.Animation.CustomColors.SmallDataset.EmptyData.EmptyDataWithChildren.LargeValues.NegativeGrowth.CurrencyFormatting.NumberFormatting.CustomLabel.AdvancedFormatting.OverlayLabelWithImage.WithLegend.WithLegendLabels.WithCompositionLegend.FitRows.FitRowsInteractive`.split(`.`)}));De();export{K as AdvancedFormatting,F as Animation,y as AspectRatio,H as CurrencyFormatting,I as CustomColors,G as CustomLabel,_ as Default,R as EmptyData,z as EmptyDataWithChildren,Q as FitRows,$ as FitRowsInteractive,v as FixedDimensions,j as Interactive,M as InteractiveLabel,P as InteractiveMixed,B as LargeValues,D as Loading,T as MissingComparisonRows,E as MissingComparisonRowsWithOverlayLabel,V as NegativeGrowth,U as NumberFormatting,J as OverlayLabelWithImage,L as SmallDataset,C as UnavailableDelta,Z as WithCompositionLegend,Y as WithLegend,X as WithLegendLabels,x as WithOverlayLabel,b as WithoutComparison,S as ZeroChange,Ee as __namedExportsOrder,xe as default,De as n,ye as t};