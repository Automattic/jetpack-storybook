import{n as e,o as t,r as n}from"./rolldown-runtime-DAXXjFlN.js";import{t as r}from"./react-_iuu1rfF.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{Et as a}from"./esm-DQmjfI0R.js";import{ht as o,j as s,z as ee}from"./chart-scope-DsN2GSep.js";import{t as c}from"./providers-1yOGduzp.js";import{c as l,l as te,r as ne,t as re}from"./chart-decorator-BazPAoaY.js";import{n as ie,r as ae,t as oe}from"./legend-config-bcak0szs.js";import{A as u,E as se,a as ce,n as le,w as ue,x as de}from"./sample-data-CI3FKCZD.js";import{t as fe}from"./stories-BoOyIGqo.js";import{n as pe,t as me}from"./build-module-BL89XTut.js";import{a as he,i as ge,n as d,r as _e,t as ve}from"./leaderboard-chart-DUOWlVyX.js";var ye=n({AdvancedFormatting:()=>K,Animation:()=>P,AspectRatio:()=>v,CurrencyFormatting:()=>H,CustomColors:()=>F,CustomLabel:()=>G,Default:()=>g,EmptyData:()=>L,EmptyDataWithChildren:()=>R,FitRows:()=>Q,FitRowsInteractive:()=>$,FixedDimensions:()=>_,Interactive:()=>A,InteractiveLabel:()=>j,InteractiveMixed:()=>N,LargeValues:()=>z,Loading:()=>E,MissingComparisonRows:()=>w,MissingComparisonRowsWithOverlayLabel:()=>T,NegativeGrowth:()=>B,NegativeValues:()=>V,NumberFormatting:()=>U,OverlayLabelWithImage:()=>J,SmallDataset:()=>I,UnavailableDelta:()=>S,WithCompositionLegend:()=>Z,WithLegend:()=>Y,WithLegendLabels:()=>X,WithOverlayLabel:()=>b,WithoutComparison:()=>y,ZeroChange:()=>x,__namedExportsOrder:()=>Oe,default:()=>Ce}),be,f,xe,p,Se,m,h,Ce,g,_,v,y,b,we,x,Te,S,C,w,T,E,D,O,Ee,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,De,q,J,Y,X,Z,Q,$,Oe,ke=e((()=>{me(),be=t(r(),1),c(),fe(),ie(),s(),ge(),_e(),f=i(),{action:xe}=__STORYBOOK_MODULE_ACTIONS__,{expect:p,userEvent:Se,waitFor:m,within:h}=__STORYBOOK_MODULE_TEST__,Ce={title:`JS Packages/Charts Library/Charts/Leaderboard Chart`,component:d,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{data:{control:`object`,description:`Array of leaderboard entries to display`,table:{type:{summary:`LeaderboardEntry[]`}}},withComparison:{control:`boolean`,description:`Whether to show comparison data (previous period bars and delta values)`,table:{defaultValue:{summary:`false`}}},primaryColor:{control:`color`,description:"Primary color for current period bars. Defaults to the first palette slot, `--a8c-charts-color-series-1`."},secondaryColor:{control:`color`,description:"Secondary color for comparison period bars. Defaults to the second palette slot, `--a8c-charts-color-series-2`."},valueFormatter:{control:!1,description:`Custom formatter function for values`,table:{type:{summary:`(value: number) => string`},defaultValue:{summary:`formatMetricValue with compact notation`}}},deltaFormatter:{control:!1,description:`Custom formatter function for delta values`,table:{type:{summary:`(value: number) => string`},defaultValue:{summary:`formatMetricValue as percentage`}}},loading:{control:`boolean`,description:`Whether the chart is in loading state`,table:{defaultValue:{summary:`false`}}},className:{control:`text`,description:`Additional CSS class name for the chart container`,table:{type:{summary:`string`}}},style:{control:`object`,description:`Custom styling for the chart container`,table:{type:{summary:`React.CSSProperties`}}},withOverlayLabel:{control:`boolean`,description:`Whether to overlay the label on top of the bar`,table:{defaultValue:{summary:`false`}}},legendLabels:{control:`object`,description:`Custom labels for legend items`,table:{category:`Legend`,type:{summary:`{ primary?: string; comparison?: string }`},defaultValue:{summary:`undefined`}}},...ne,...ae,...te},args:{primaryColor:void 0,secondaryColor:void 0,themeName:`default`,showLegend:!1,legendPosition:`bottom`,legendAlignment:`center`,legendOrientation:`horizontal`,legendShape:`circle`,withOverlayLabel:!1},decorators:[re],render:e=>{let t=oe(e);return(0,f.jsx)(d,{...e,legend:t})}},g={args:{...l,data:u,withComparison:!0,loading:!1}},_={args:{...g.args,width:300,height:400}},v={args:{...g.args,aspectRatio:.4}},y={args:{data:u,withComparison:!1,loading:!1}},b={args:{data:u,withOverlayLabel:!0},render:e=>(0,f.jsx)(q,{...e})},we=u.map((e,t)=>t===0?{...e,currentValue:0,previousValue:0,currentShare:0,previousShare:0,delta:0}:e),x={args:{data:we,withComparison:!0,loading:!1},parameters:{docs:{description:{story:"The first row is `0` in both periods, so its genuine zero change renders as a neutral `0%` rather than an unavailable-delta placeholder."}}},play:async({canvasElement:e})=>{let t=h(e);await p(t.getByText(`0%`)).toBeInTheDocument(),await p(t.queryByText(`Percentage change unavailable`)).not.toBeInTheDocument()}},Te=u.map((e,t)=>t===0?{...e,previousValue:0,previousShare:0,delta:void 0}:e),S={args:{data:Te,withComparison:!0,loading:!1},parameters:{docs:{description:{story:"The first row has a known previous value of `0`, so its comparison data remains available while its mathematically undefined percentage change renders as an em dash instead of `+100%`."}}},play:async({canvasElement:e})=>{let t=h(e);await p(t.getAllByText(`—`)).toHaveLength(1),await p(t.getByText(`Percentage change unavailable`)).toBeInTheDocument(),await p(t.queryByText(`No comparison data`)).not.toBeInTheDocument(),await p(t.queryByText(`+100%`)).not.toBeInTheDocument()}},C=u.map(e=>e.id===`social`||e.id===`referral`?{id:e.id,label:e.label,currentValue:e.currentValue,currentShare:e.currentShare}:e),w={args:{data:C,withComparison:!0,loading:!1},parameters:{docs:{description:{story:'Rows without a matching comparison-period value ("Social Media" and "Referral" here) omit `previousValue`/`previousShare`/`delta`. Those rows render no comparison bar and show a placeholder in the delta column instead of a fabricated value.'}}},play:async({canvasElement:e})=>{let t=h(e);await p(t.getAllByText(`—`)).toHaveLength(2),await p(t.getAllByText(`No comparison data`)).toHaveLength(2)}},T={args:{data:C,withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--a8c-charts-border-radius-leaderboard-bar":`4px`}},render:e=>(0,f.jsx)(q,{...e}),parameters:{docs:{description:{story:`Missing comparison rows in the overlay-label variant, as used by the Premium Analytics Stats widgets. The delta column still shows a placeholder for rows without comparison data.`}}}},E={args:{data:u,withComparison:!0,loading:!0}},D=xe(`leaderboard-item-click`),O=({children:e})=>(0,f.jsx)(`span`,{style:{display:`flex`,alignItems:`center`,minHeight:`40px`,padding:`0 6px`,fontSize:`13px`},children:e}),Ee=xe(`label-link-click`),k=({entry:e})=>{let t=(0,be.useCallback)(t=>{t.preventDefault(),Ee(e.id)},[e.id]);return(0,f.jsx)(`a`,{href:`#${e.id}`,onClick:t,children:e.label})},A={args:{data:u.map(e=>({...e,label:(0,f.jsx)(O,{children:e.label}),onClick:()=>D(e.id)})),withComparison:!0,withOverlayLabel:!0,style:{"--a8c-charts-border-radius-leaderboard-bar":`4px`}},render:e=>(0,f.jsx)(q,{...e}),parameters:{docs:{description:{story:"Rows with an `onClick` become interactive: the whole row is clickable and keyboard-focusable (Enter/Space), with a chevron revealed on hover/focus. The consumer supplies the action (e.g. drill-down)."}}}},j={args:{...l,data:u.map(e=>({...e,label:(0,f.jsx)(O,{children:(0,f.jsx)(k,{entry:e})}),onClick:()=>D(e.id),ariaLabel:`View details for ${e.label}`,hasInteractiveLabel:!0})),withComparison:!0,withOverlayLabel:!0,style:{"--a8c-charts-border-radius-leaderboard-bar":`4px`}},render:e=>(0,f.jsx)(q,{...e}),parameters:{docs:{description:{story:"A row that drills down and also links its label. With `hasInteractiveLabel`, clicking the name fires only `label-link-click` and clicking anywhere else on the row fires only `leaderboard-item-click`; Tab reaches the link, then the row button."}}},play:async({canvasElement:e})=>{let t=h(e),n=t.getByRole(`button`,{name:`View details for ${u[0].label}`});p(n).not.toContainElement(t.getByRole(`link`,{name:String(u[0].label)}))}},M=[`drill-down`,`drill-down-with-link`,`inert`,`link-only`,`drill-down`],N={args:{...l,data:u.map((e,t)=>{let n=()=>D(e.id);switch(M[t%M.length]){case`drill-down`:return{...e,label:(0,f.jsx)(O,{children:e.label}),onClick:n};case`drill-down-with-link`:return{...e,label:(0,f.jsx)(O,{children:(0,f.jsx)(k,{entry:e})}),onClick:n,ariaLabel:`View details for ${e.label}`,hasInteractiveLabel:!0};case`link-only`:return{...e,label:(0,f.jsx)(O,{children:(0,f.jsx)(k,{entry:e})})};default:return{...e,label:(0,f.jsx)(O,{children:e.label})}}}),withComparison:!0,withOverlayLabel:!0,style:{"--a8c-charts-border-radius-leaderboard-bar":`4px`}},render:e=>(0,f.jsx)(q,{...e}),parameters:{docs:{description:{story:"Drill-down rows, a drill-down row whose label is also a link, an inert row, and an inert row whose label is a link, with the overlay-label presentation used by Jetpack Stats. `hasInteractiveLabel` is set per entry, like `onClick`, and only the row that both drills down and links uses it; a row without `onClick` can hold a link without it. Being clickable is a visual affordance only — it must not change a row height or column alignment, otherwise a drill-down that swaps clickable parent rows for non-clickable child rows visibly shifts the list."}}},play:async({canvasElement:e})=>{let t=e.querySelector(`[class*="leaderboardChart__content"] > *`),n=t.querySelectorAll(`:scope > [role="listitem"]`);p(n).toHaveLength(u.length);let r=t.querySelectorAll(`:scope > [role="listitem"] > button`).length;p(r).toBeGreaterThan(0),p(r).toBeLessThan(u.length);let i=new Set([...n].map(e=>e.getBoundingClientRect().height));p(i.size).toBe(1);let a=(e,n)=>new Set([...t.querySelectorAll(e)].map(e=>e.getBoundingClientRect()[n]));p(a(`[class*="barWithLabelContainer"]`,`left`).size).toBe(1),p(a(`[class*="valueContainer"]`,`right`).size).toBe(1)}},P={args:{...g.args,animation:!0}},F={args:{data:u,withComparison:!0,loading:!1,primaryColor:`red`,secondaryColor:`green`}},I={args:{data:se,withComparison:!0,loading:!1}},L={args:{data:[],withComparison:!0,loading:!1}},R={args:{data:[],withComparison:!0,loading:!1},render:e=>(0,f.jsx)(d,{...e,children:(0,f.jsx)(pe,{direction:`row`,gap:`xs`,align:`center`,justify:`center`,children:`Child element`})})},z={args:{data:ue,withComparison:!0,loading:!1}},B={args:{data:ce,withComparison:!0,loading:!1}},V={args:{data:de,withComparison:!0,loading:!1,valueFormatter:e=>o(e,`currency`,{useMultipliers:!1,decimals:0})},parameters:{docs:{description:{story:"A negative `currentShare` or `previousShare` puts every row on a shared zero point, placed in proportion to the range of shares: negative bars extend toward the inline start and positive bars toward the inline end."}}}},H={args:{data:u,withComparison:!0,loading:!1,valueFormatter:e=>o(e,`currency`,{useMultipliers:!0,decimals:1}),deltaFormatter:e=>o(e/100,`average`,{decimals:0})}},U={args:{data:u,withComparison:!0,loading:!1,valueFormatter:e=>o(e,`number`,{useMultipliers:!1,decimals:0}),deltaFormatter:e=>o(e/100,`average`,{decimals:1})}},W=({label:e,imageColor:t,style:n={}})=>(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,...n},children:[(0,f.jsx)(`img`,{src:`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='${encodeURIComponent(t)}'/></svg>`,alt:`icon`,style:{width:`28px`,height:`28px`,verticalAlign:`middle`,borderRadius:`4px`}}),(0,f.jsx)(`span`,{style:{fontSize:`13px`},children:e})]}),G={args:{data:le.map(e=>({...e,label:(0,f.jsx)(W,{label:e.label,imageColor:e.imageColor})})),withComparison:!1,loading:!1}},K={args:{data:ue,withComparison:!0,loading:!1,valueFormatter:e=>e>=1e6?o(e,`currency`,{useMultipliers:!0,decimals:1}):o(e,`currency`,{useMultipliers:!1,decimals:0}),deltaFormatter:e=>o(e/100,`average`,{decimals:1,signDisplay:`always`})}},De=.08,q=e=>{let{getElementStyles:t}=a(),{color:n}=t({index:0,overrideColor:e.primaryColor}),r=ee(n,1-De);return(0,f.jsx)(d,{...e,primaryColor:r})},J={args:{data:le.map(e=>({...e,label:(0,f.jsx)(W,{label:e.label,imageColor:e.imageColor,style:{padding:`6px`}})})),withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--a8c-charts-border-radius-leaderboard-bar":`4px`}},render:e=>(0,f.jsx)(q,{...e})},Y={args:{data:u,withComparison:!0,loading:!1,showLegend:!0},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},X={args:{data:u,withComparison:!0,loading:!1,showLegend:!0,legendLabels:{primary:`Aug 11-Sep 9, 2025`,comparison:`Jul 11-Aug 11, 2025`}},parameters:{docs:{description:{story:"Props-based legend using `showLegend`, the `legend` config object, and the `legendLabels` prop to customize primary and comparison labels. Other legend options (position, alignment, orientation, shape, interactivity) can be adjusted via Storybook controls."}}}},Z={render:e=>{let t=oe(e);return(0,f.jsx)(d,{...e,legend:{interactive:t?.interactive},chartId:`composition-leaderboard-chart`,children:(0,f.jsx)(d.Legend,{...t,shapeStyles:{width:8,height:8,...t?.shapeStyles}})})},args:{data:u,withComparison:!0,loading:!1},parameters:{docs:{description:{story:"Composition API using `<LeaderboardChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},Q={render:e=>(0,f.jsx)(ve,{...e,fitRows:!0}),args:{data:u,loading:!1,containerWidth:`360px`,containerHeight:`180px`,withPadding:!1,resize:`vertical`},parameters:{docs:{description:{story:"`fitRows` shows only the rows that fit the chart height instead of scrolling, for charts placed in a fixed-height container such as a dashboard tile. Rows that do not fit keep their place in the layout but are hidden from painting, hit testing, focus order, and the accessibility tree, so growing the container reveals them again immediately. Drag the container's resize handle to watch the visible row count follow the height — a row appears only once it fits whole."}}},play:async({canvasElement:e})=>{await document.fonts.ready;let t=e.querySelector(`[class*="leaderboardChart__content"]`),n=[...t.querySelector(`:scope > [data-leaderboard-grid]`).querySelectorAll(`:scope > [data-row-index]`)],r=e=>getComputedStyle(e).visibility===`hidden`,i=()=>new Set(n.filter(e=>!r(e)).map(e=>e.getAttribute(`data-row-index`))).size;await m(()=>{let e=n.filter(r);p(e.length).toBeGreaterThan(0),p(e.length).toBeLessThan(n.length)}),p(getComputedStyle(t).overflow).toBe(`hidden`);let a=()=>{let e=t.getBoundingClientRect().bottom;for(let t of n)r(t)||p(t.getBoundingClientRect().bottom).toBeLessThanOrEqual(e+he)};a();let o=e.querySelector(`[data-testid="chart-story-container"]`),s=async(e,t)=>(o.style.height=`${e}px`,await m(()=>t(i())),a(),i()),ee=i(),c=await s(100,e=>p(e).toBeLessThan(ee));await s(280,e=>p(e).toBeGreaterThan(c)),await s(100,e=>p(e).toBe(c)),await s(180,e=>p(e).toBe(ee))}},$={render:e=>(0,f.jsx)(ve,{...e,fitRows:!0}),args:{data:u.map(e=>({...e,onClick:()=>D(e.id)})),loading:!1,containerWidth:`360px`,containerHeight:`180px`,withPadding:!1,resize:`vertical`},parameters:{docs:{description:{story:"`fitRows` with interactive rows: the rows that do not fit are hidden with `visibility: hidden`, which also removes them from the tab order and the accessibility tree. Tab through the chart to verify focus only ever lands on a fully visible row."}}},play:async({canvasElement:e})=>{await document.fonts.ready;let t=[...e.querySelectorAll(`[data-row-index] > button`)],n=e=>getComputedStyle(e).visibility===`hidden`,r=[];await m(()=>{r=t.filter(e=>!n(e)),p(r.length).toBeGreaterThan(0),p(r.length).toBeLessThan(t.length)}),r[0].focus(),p(r[0]).toHaveFocus();for(let e of r.slice(1))await Se.tab(),p(e).toHaveFocus();await Se.tab();let i=t.filter(n);p(i).not.toContain(e.ownerDocument.activeElement)}},Oe=`Default.FixedDimensions.AspectRatio.WithoutComparison.WithOverlayLabel.ZeroChange.UnavailableDelta.MissingComparisonRows.MissingComparisonRowsWithOverlayLabel.Loading.Interactive.InteractiveLabel.InteractiveMixed.Animation.CustomColors.SmallDataset.EmptyData.EmptyDataWithChildren.LargeValues.NegativeGrowth.NegativeValues.CurrencyFormatting.NumberFormatting.CustomLabel.AdvancedFormatting.OverlayLabelWithImage.WithLegend.WithLegendLabels.WithCompositionLegend.FitRows.FitRowsInteractive`.split(`.`),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    data: sampleData,
    withComparison: true,
    loading: false
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 300,
    height: 400
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.4
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: false,
    loading: false
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withOverlayLabel: true
  },
  render: args => <LeaderboardChartWithOverlayLabel {...args} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: true
  }
}`,...E.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
    data: netSalesData,
    withComparison: true,
    loading: false,
    valueFormatter: (value: number) => formatMetricValue(value, 'currency', {
      useMultipliers: false,
      decimals: 0
    })
  },
  parameters: {
    docs: {
      description: {
        story: 'A negative \`currentShare\` or \`previousShare\` puts every row on a shared zero point, placed in proportion to the range of shares: negative bars extend toward the inline start and positive bars toward the inline end.'
      }
    }
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
}`,...$.parameters?.docs?.source}}}}));ke();export{K as AdvancedFormatting,P as Animation,v as AspectRatio,H as CurrencyFormatting,F as CustomColors,G as CustomLabel,g as Default,L as EmptyData,R as EmptyDataWithChildren,Q as FitRows,$ as FitRowsInteractive,_ as FixedDimensions,A as Interactive,j as InteractiveLabel,N as InteractiveMixed,z as LargeValues,E as Loading,w as MissingComparisonRows,T as MissingComparisonRowsWithOverlayLabel,B as NegativeGrowth,V as NegativeValues,U as NumberFormatting,J as OverlayLabelWithImage,I as SmallDataset,S as UnavailableDelta,Z as WithCompositionLegend,Y as WithLegend,X as WithLegendLabels,b as WithOverlayLabel,y as WithoutComparison,x as ZeroChange,Oe as __namedExportsOrder,Ce as default,ke as n,ye as t};