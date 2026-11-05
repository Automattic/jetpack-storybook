import{n as e,o as t,r as n}from"./rolldown-runtime-DAXXjFlN.js";import{t as r}from"./react-_iuu1rfF.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{ht as a,j as ee,z as o}from"./chart-scope-CNPXaNof.js";import{Et as te}from"./esm-BsHWmo0p.js";import{t as ne}from"./providers-oLMuMmft.js";import{c as re,l as ie,r as ae,t as oe}from"./chart-decorator-CmRVHVue.js";import{n as se,r as ce,t as le}from"./legend-config-bcak0szs.js";import{A as s,E as ue,a as de,n as fe,w as pe,x as me}from"./sample-data-BM1OOuQd.js";import{t as he}from"./stories-CRzsQyVn.js";import{K as ge,t as _e}from"./build-module-DnRKAfXV.js";import{a as ve,i as ye,n as c,r as be,t as l}from"./leaderboard-chart-Bv7fW9gk.js";var xe=n({AdvancedFormatting:()=>G,Animation:()=>P,AspectRatio:()=>g,CurrencyFormatting:()=>H,CustomColors:()=>F,CustomLabel:()=>W,Default:()=>m,EmptyData:()=>L,EmptyDataWithChildren:()=>R,FitRows:()=>Z,FitRowsInteractive:()=>Q,FixedDimensions:()=>h,Interactive:()=>O,InteractiveOverlayLabel:()=>A,InteractiveOverlayLabelLink:()=>j,InteractiveOverlayLabelMixed:()=>N,LargeValues:()=>z,Loading:()=>C,MissingComparisonRows:()=>x,MissingComparisonRowsWithOverlayLabel:()=>S,NegativeGrowth:()=>B,NegativeValues:()=>V,NumberFormatting:()=>U,OverlayLabelWithImage:()=>q,SmallDataset:()=>I,UnavailableDelta:()=>b,WithCompositionLegend:()=>X,WithLegend:()=>J,WithLegendLabels:()=>Y,WithOverlayLabel:()=>v,WithoutComparison:()=>_,ZeroChange:()=>y,__namedExportsOrder:()=>$,default:()=>Te}),Se,u,Ce,d,we,f,p,Te,m,h,g,_,v,Ee,y,De,b,Oe,x,S,C,w,T,E,D,O,ke,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,Ae,W,G,je,K,q,J,Y,X,Z,Q,$,Me=e((()=>{_e(),Se=t(r(),1),ne(),he(),se(),ee(),ye(),be(),u=i(),{action:Ce}=__STORYBOOK_MODULE_ACTIONS__,{expect:d,userEvent:we,waitFor:f,within:p}=__STORYBOOK_MODULE_TEST__,Te={title:`JS Packages/Charts Library/Charts/Leaderboard Chart`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{data:{control:`object`,description:`Array of leaderboard entries to display`,table:{type:{summary:`LeaderboardEntry[]`}}},withComparison:{control:`boolean`,description:`Whether to show comparison data (previous period bars and delta values)`,table:{defaultValue:{summary:`false`}}},primaryColor:{control:`color`,description:"Primary color for current period bars. Defaults to the first palette slot, `--a8c-charts-color-series-1`."},secondaryColor:{control:`color`,description:"Secondary color for comparison period bars. Defaults to the second palette slot, `--a8c-charts-color-series-2`."},valueFormatter:{control:!1,description:`Custom formatter function for values`,table:{type:{summary:`(value: number) => string`},defaultValue:{summary:`formatMetricValue with compact notation`}}},deltaFormatter:{control:!1,description:`Custom formatter function for delta values`,table:{type:{summary:`(value: number) => string`},defaultValue:{summary:`formatMetricValue as percentage`}}},loading:{control:`boolean`,description:`Whether the chart is in loading state`,table:{defaultValue:{summary:`false`}}},className:{control:`text`,description:`Additional CSS class name for the chart container`,table:{type:{summary:`string`}}},style:{control:`object`,description:`Custom styling for the chart container`,table:{type:{summary:`React.CSSProperties`}}},withOverlayLabel:{control:`boolean`,description:`Whether to overlay the label on top of the bar`,table:{defaultValue:{summary:`false`}}},negativeBars:{control:`inline-radio`,options:[`diverge`,`clamp`],description:`How a negative value draws: from a shared zero point, or as an empty bar`,table:{defaultValue:{summary:`diverge`}}},legendLabels:{control:`object`,description:`Custom labels for legend items`,table:{category:`Legend`,type:{summary:`{ primary?: string; comparison?: string }`},defaultValue:{summary:`undefined`}}},...ae,...ce,...ie},args:{primaryColor:void 0,secondaryColor:void 0,themeName:`default`,showLegend:!1,legendPosition:`bottom`,legendAlignment:`center`,legendOrientation:`horizontal`,legendShape:`circle`,withOverlayLabel:!1},decorators:[oe],render:e=>{let t=le(e);return(0,u.jsx)(c,{...e,legend:t})}},m={args:{...re,data:s,withComparison:!0,loading:!1}},h={args:{...m.args,width:300,height:400}},g={args:{...m.args,aspectRatio:.4}},_={args:{data:s,withComparison:!1,loading:!1}},v={args:{data:s,withOverlayLabel:!0},render:e=>(0,u.jsx)(K,{...e})},Ee=s.map((e,t)=>t===0?{...e,currentValue:0,previousValue:0}:e),y={args:{data:Ee,withComparison:!0,loading:!1},parameters:{docs:{description:{story:"The first row is `0` in both periods, so its genuine zero change renders as a neutral `0%` rather than an unavailable-delta placeholder."}}},play:async({canvasElement:e})=>{let t=p(e);await d(t.getByText(`0%`)).toBeInTheDocument(),await d(t.queryByText(`Percentage change unavailable`)).not.toBeInTheDocument()}},De=s.map((e,t)=>t===0?{...e,previousValue:0}:e),b={args:{data:De,withComparison:!0,loading:!1},parameters:{docs:{description:{story:"The first row has a known previous value of `0`, so its comparison data remains available while its mathematically undefined percentage change renders as an em dash instead of `+100%`."}}},play:async({canvasElement:e})=>{let t=p(e);await d(t.getAllByText(`—`)).toHaveLength(1),await d(t.getByText(`Percentage change unavailable`)).toBeInTheDocument(),await d(t.queryByText(`No comparison data`)).not.toBeInTheDocument(),await d(t.queryByText(`+100%`)).not.toBeInTheDocument()}},Oe=s.map(e=>e.id===`social`||e.id===`referral`?{id:e.id,label:e.label,currentValue:e.currentValue}:e),x={args:{data:Oe,withComparison:!0,loading:!1},parameters:{docs:{description:{story:'Rows without a matching comparison-period value ("Social Media" and "Referral" here) omit `previousValue`. Those rows render no comparison bar and show a placeholder in the delta column instead of a fabricated value.'}}},play:async({canvasElement:e})=>{let t=p(e);await d(t.getAllByText(`—`)).toHaveLength(2),await d(t.getAllByText(`No comparison data`)).toHaveLength(2)}},S={args:{data:Oe,withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--a8c-charts-border-radius-leaderboard-bar":`4px`}},render:e=>(0,u.jsx)(K,{...e}),parameters:{docs:{description:{story:`Missing comparison rows in the overlay-label variant, as used by the Premium Analytics Stats widgets. The delta column still shows a placeholder for rows without comparison data.`}}}},C={args:{data:s,withComparison:!0,loading:!0}},w=Ce(`leaderboard-item-click`),T=({children:e,title:t})=>(0,u.jsx)(`span`,{"data-testid":`interactive-row-label`,style:{display:`flex`,alignItems:`center`,minHeight:`40px`,minWidth:0,padding:`0 6px`,fontSize:`13px`},children:(0,u.jsx)(`span`,{title:t,style:{overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:e})}),E=[...s,{id:`long-campaign`,label:`black_friday_early_access_wordpress_hosting_bundle_2026_newsletter_campaign_for_returning_subscribers_in_europe_and_north_america`,currentValue:1500,previousValue:1200}],D=`Partner newsletter for returning subscribers in Europe and North America during the holiday sale week of 2026`,O={args:{data:[...s,{id:`long-label`,label:D,currentValue:1500,previousValue:1200}].map(e=>({...e,onClick:()=>w(e.id)})),withComparison:!0,containerWidth:`800px`},render:e=>(0,u.jsx)(l,{...e}),parameters:{docs:{description:{story:`Interactive rows with plain string labels and comparison bars. A string label on an interactive row stays on one line and ends in an ellipsis, so the narrower label on hover and focus never wraps and the rows below stay put.`}}},play:async({canvasElement:e})=>{let t=p(e).getByRole(`button`,{name:e=>e.startsWith(D)}),n=t.getBoundingClientRect().height;t.focus(),await Promise.all(t.getAnimations({subtree:!0}).map(({finished:e})=>e)),d(t.getBoundingClientRect().height).toBe(n)}},ke=Ce(`label-link-click`),k=({entry:e})=>{let t=(0,Se.useCallback)(t=>{t.preventDefault(),ke(e.id)},[e.id]);return(0,u.jsx)(`a`,{href:`#${e.id}`,onClick:t,children:e.label})},A={args:{data:E.map(e=>({...e,label:(0,u.jsx)(T,{title:String(e.label),children:e.label}),onClick:()=>w(e.id)})),withComparison:!0,withOverlayLabel:!0,style:{"--a8c-charts-border-radius-leaderboard-bar":`4px`}},render:e=>(0,u.jsx)(K,{...e}),parameters:{docs:{description:{story:"Rows with an `onClick` become interactive: the whole row is clickable and keyboard-focusable (Enter/Space), with a chevron revealed on hover/focus. The consumer supplies the action (e.g. drill-down)."}}},play:async({canvasElement:e})=>{let t=p(e),n=String(E[E.length-1].label),r=t.getByRole(`button`,{name:e=>e.startsWith(n)}),i=p(r).getByText(n),a=p(r).getByText(`1.5K`),ee=a.getBoundingClientRect().left;r.focus(),await Promise.all(r.getAnimations({subtree:!0}).map(({finished:e})=>e)),d(a.getBoundingClientRect().left).toBeLessThan(ee),d(i.getBoundingClientRect().right).toBeLessThanOrEqual(a.getBoundingClientRect().left)}},j={args:{...re,data:E.map(e=>({...e,label:(0,u.jsx)(T,{title:String(e.label),children:(0,u.jsx)(k,{entry:e})}),onClick:()=>w(e.id),ariaLabel:`View details for ${e.label}`,hasInteractiveLabel:!0})),withComparison:!0,withOverlayLabel:!0,style:{"--a8c-charts-border-radius-leaderboard-bar":`4px`}},render:e=>(0,u.jsx)(K,{...e}),parameters:{docs:{description:{story:"A row that drills down and also links its label. With `hasInteractiveLabel`, clicking the name fires only `label-link-click` and clicking anywhere else on the row fires only `leaderboard-item-click`; Tab reaches the link, then the row button."}}},play:async({canvasElement:e})=>{let t=p(e),n=t.getByRole(`button`,{name:`View details for ${s[0].label}`});d(n).not.toContainElement(t.getByRole(`link`,{name:String(s[0].label)}));let r=String(E[E.length-1].label),i=t.getAllByTestId(`interactive-row-label`).at(-1),a=i.getBoundingClientRect().right;t.getByRole(`link`,{name:r}).focus(),await Promise.all(document.getAnimations().map(({finished:e})=>e)),d(i.getBoundingClientRect().right).toBeLessThan(a)}},M=[`drill-down`,`drill-down-with-link`,`inert`,`link-only`,`drill-down`],N={args:{...re,data:E.map((e,t)=>{let n=()=>w(e.id);switch(M[t%M.length]){case`drill-down`:return{...e,label:(0,u.jsx)(T,{title:String(e.label),children:e.label}),onClick:n};case`drill-down-with-link`:return{...e,label:(0,u.jsx)(T,{title:String(e.label),children:(0,u.jsx)(k,{entry:e})}),onClick:n,ariaLabel:`View details for ${e.label}`,hasInteractiveLabel:!0};case`link-only`:return{...e,label:(0,u.jsx)(T,{title:String(e.label),children:(0,u.jsx)(k,{entry:e})})};default:return{...e,label:(0,u.jsx)(T,{title:String(e.label),children:e.label})}}}),withComparison:!0,withOverlayLabel:!0,style:{"--a8c-charts-border-radius-leaderboard-bar":`4px`}},render:e=>(0,u.jsx)(K,{...e}),parameters:{docs:{description:{story:"Drill-down rows, a drill-down row whose label is also a link, an inert row, and an inert row whose label is a link, with the overlay-label presentation used by Jetpack Stats. `hasInteractiveLabel` is set per entry, like `onClick`, and only the row that both drills down and links uses it; a row without `onClick` can hold a link without it. Being clickable is a visual affordance only — it must not change a row height or column alignment, otherwise a drill-down that swaps clickable parent rows for non-clickable child rows visibly shifts the list."}}},play:async({canvasElement:e})=>{let t=e.querySelector(`[class*="leaderboardChart__content"] > *`),n=t.querySelectorAll(`:scope > [role="listitem"]`);d(n).toHaveLength(E.length);let r=t.querySelectorAll(`:scope > [role="listitem"] > button`).length;d(r).toBeGreaterThan(0),d(r).toBeLessThan(E.length);let i=new Set([...n].map(e=>e.getBoundingClientRect().height));d(i.size).toBe(1);let a=(e,n)=>new Set([...t.querySelectorAll(e)].map(e=>e.getBoundingClientRect()[n]));d(a(`[class*="barWithLabelContainer"]`,`left`).size).toBe(1),d(a(`[class*="valueContainer"]`,`right`).size).toBe(1)}},P={args:{...m.args,animation:!0}},F={args:{data:s,withComparison:!0,loading:!1,primaryColor:`red`,secondaryColor:`green`}},I={args:{data:ue,withComparison:!0,loading:!1}},L={args:{data:[],withComparison:!0,loading:!1}},R={args:{data:[],withComparison:!0,loading:!1},render:e=>(0,u.jsx)(c,{...e,children:(0,u.jsx)(ge,{direction:`row`,gap:`xs`,align:`center`,justify:`center`,children:`Child element`})})},z={args:{data:pe,withComparison:!0,loading:!1}},B={args:{data:de,withComparison:!0,loading:!1}},V={args:{data:me,withComparison:!0,loading:!1,valueFormatter:e=>a(e,`currency`,{useMultipliers:!1,decimals:0})},parameters:{docs:{description:{story:`A negative value puts every row on a shared zero point, placed in proportion to the range of shares derived from the values: negative bars extend toward the inline start and positive bars toward the inline end.`}}}},H={args:{data:s,withComparison:!0,loading:!1,valueFormatter:e=>a(e,`currency`,{useMultipliers:!0,decimals:1}),deltaFormatter:e=>a(e/100,`average`,{decimals:0})}},U={args:{data:s,withComparison:!0,loading:!1,valueFormatter:e=>a(e,`number`,{useMultipliers:!1,decimals:0}),deltaFormatter:e=>a(e/100,`average`,{decimals:1})}},Ae=({label:e,imageColor:t,style:n={}})=>(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,...n},children:[(0,u.jsx)(`img`,{src:`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='${encodeURIComponent(t)}'/></svg>`,alt:`icon`,style:{width:`28px`,height:`28px`,verticalAlign:`middle`,borderRadius:`4px`}}),(0,u.jsx)(`span`,{style:{fontSize:`13px`},children:e})]}),W={args:{data:fe.map(e=>({...e,label:(0,u.jsx)(Ae,{label:e.label,imageColor:e.imageColor})})),withComparison:!1,loading:!1}},G={args:{data:pe,withComparison:!0,loading:!1,valueFormatter:e=>e>=1e6?a(e,`currency`,{useMultipliers:!0,decimals:1}):a(e,`currency`,{useMultipliers:!1,decimals:0}),deltaFormatter:e=>a(e/100,`average`,{decimals:1,signDisplay:`always`})}},je=.08,K=e=>{let{getElementStyles:t}=te(),{color:n}=t({index:0,overrideColor:e.primaryColor}),r=o(n,1-je);return(0,u.jsx)(c,{...e,primaryColor:r})},q={args:{data:[...fe,{id:`affiliate`,label:`Affiliate`,currentValue:2100,previousValue:-400,imageColor:`#00A32A`},{id:`email`,label:`Email`,currentValue:-1200,previousValue:800,imageColor:`#D63638`}].map(e=>({...e,label:(0,u.jsx)(Ae,{label:e.label,imageColor:e.imageColor,style:{padding:`6px`}})})),withComparison:!0,withOverlayLabel:!0,negativeBars:`clamp`,loading:!1,style:{"--a8c-charts-border-radius-leaderboard-bar":`4px`}},render:e=>(0,u.jsx)(K,{...e})},J={args:{data:s,withComparison:!0,loading:!1,showLegend:!0},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},Y={args:{data:s,withComparison:!0,loading:!1,showLegend:!0,legendLabels:{primary:`Aug 11-Sep 9, 2025`,comparison:`Jul 11-Aug 11, 2025`}},parameters:{docs:{description:{story:"Props-based legend using `showLegend`, the `legend` config object, and the `legendLabels` prop to customize primary and comparison labels. Other legend options (position, alignment, orientation, shape, interactivity) can be adjusted via Storybook controls."}}}},X={render:e=>{let t=le(e);return(0,u.jsx)(c,{...e,legend:{interactive:t?.interactive},chartId:`composition-leaderboard-chart`,children:(0,u.jsx)(c.Legend,{...t,shapeStyles:{width:8,height:8,...t?.shapeStyles}})})},args:{data:s,withComparison:!0,loading:!1},parameters:{docs:{description:{story:"Composition API using `<LeaderboardChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},Z={render:e=>(0,u.jsx)(l,{...e,fitRows:!0}),args:{data:s,loading:!1,containerWidth:`360px`,containerHeight:`180px`,withPadding:!1,resize:`vertical`},parameters:{docs:{description:{story:"`fitRows` shows only the rows that fit the chart height instead of scrolling, for charts placed in a fixed-height container such as a dashboard tile. Rows that do not fit keep their place in the layout but are hidden from painting, hit testing, focus order, and the accessibility tree, so growing the container reveals them again immediately. Drag the container's resize handle to watch the visible row count follow the height — a row appears only once it fits whole."}}},play:async({canvasElement:e})=>{await document.fonts.ready;let t=e.querySelector(`[class*="leaderboardChart__content"]`),n=[...t.querySelector(`:scope > [data-leaderboard-grid]`).querySelectorAll(`:scope > [data-row-index]`)],r=e=>getComputedStyle(e).visibility===`hidden`,i=()=>new Set(n.filter(e=>!r(e)).map(e=>e.getAttribute(`data-row-index`))).size;await f(()=>{let e=n.filter(r);d(e.length).toBeGreaterThan(0),d(e.length).toBeLessThan(n.length)}),d(getComputedStyle(t).overflow).toBe(`hidden`);let a=()=>{let e=t.getBoundingClientRect().bottom;for(let t of n)r(t)||d(t.getBoundingClientRect().bottom).toBeLessThanOrEqual(e+ve)};a();let ee=e.querySelector(`[data-testid="chart-story-container"]`),o=async(e,t)=>(ee.style.height=`${e}px`,await f(()=>t(i())),a(),i()),te=i(),ne=await o(100,e=>d(e).toBeLessThan(te));await o(280,e=>d(e).toBeGreaterThan(ne)),await o(100,e=>d(e).toBe(ne)),await o(180,e=>d(e).toBe(te))}},Q={render:e=>(0,u.jsx)(l,{...e,fitRows:!0}),args:{data:s.map(e=>({...e,onClick:()=>w(e.id)})),loading:!1,containerWidth:`360px`,containerHeight:`180px`,withPadding:!1,resize:`vertical`},parameters:{docs:{description:{story:"`fitRows` with interactive rows: the rows that do not fit are hidden with `visibility: hidden`, which also removes them from the tab order and the accessibility tree. Tab through the chart to verify focus only ever lands on a fully visible row."}}},play:async({canvasElement:e})=>{await document.fonts.ready;let t=[...e.querySelectorAll(`[data-row-index] > button`)],n=e=>getComputedStyle(e).visibility===`hidden`,r=[];await f(()=>{r=t.filter(e=>!n(e)),d(r.length).toBeGreaterThan(0),d(r.length).toBeLessThan(t.length)}),r[0].focus(),d(r[0]).toHaveFocus();for(let e of r.slice(1))await we.tab(),d(e).toHaveFocus();await we.tab();let i=t.filter(n);d(i).not.toContain(e.ownerDocument.activeElement)}},$=`Default.FixedDimensions.AspectRatio.WithoutComparison.WithOverlayLabel.ZeroChange.UnavailableDelta.MissingComparisonRows.MissingComparisonRowsWithOverlayLabel.Loading.Interactive.InteractiveOverlayLabel.InteractiveOverlayLabelLink.InteractiveOverlayLabelMixed.Animation.CustomColors.SmallDataset.EmptyData.EmptyDataWithChildren.LargeValues.NegativeGrowth.NegativeValues.CurrencyFormatting.NumberFormatting.CustomLabel.AdvancedFormatting.OverlayLabelWithImage.WithLegend.WithLegendLabels.WithCompositionLegend.FitRows.FitRowsInteractive`.split(`.`),m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    data: sampleData,
    withComparison: true,
    loading: false
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 300,
    height: 400
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.4
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: false,
    loading: false
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withOverlayLabel: true
  },
  render: args => <LeaderboardChartWithOverlayLabel {...args} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: missingComparisonData,
    withComparison: true,
    loading: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Rows without a matching comparison-period value ("Social Media" and "Referral" here) omit \`previousValue\`. Those rows render no comparison bar and show a placeholder in the delta column instead of a fabricated value.'
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: true
  }
}`,...C.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    data: [...sampleData, {
      id: 'long-label',
      label: nearlyFullWidthLabel,
      currentValue: 1500,
      previousValue: 1200
    }].map(entry => ({
      ...entry,
      onClick: () => onLeaderboardItemClick(entry.id)
    })),
    withComparison: true,
    containerWidth: '800px'
  },
  render: args => <LeaderboardChartUnresponsive {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive rows with plain string labels and comparison bars. A string label on an interactive row stays on one line and ends in an ellipsis, so the narrower label on hover and focus never wraps and the rows below stay put.'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const row = within(canvasElement).getByRole('button', {
      name: name => name.startsWith(nearlyFullWidthLabel)
    });
    const restingHeight = row.getBoundingClientRect().height;
    row.focus();
    await Promise.all(row.getAnimations({
      subtree: true
    }).map(({
      finished
    }) => finished));
    expect(row.getBoundingClientRect().height).toBe(restingHeight);
  }
}`,...O.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    data: interactiveData.map(entry => ({
      ...entry,
      label: <InteractiveRowLabel title={String(entry.label)}>{entry.label}</InteractiveRowLabel>,
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
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const longLabel = String(interactiveData[interactiveData.length - 1].label);
    const row = canvas.getByRole('button', {
      name: name => name.startsWith(longLabel)
    });
    const label = within(row).getByText(longLabel);
    const value = within(row).getByText('1.5K');
    const valueRestingLeft = value.getBoundingClientRect().left;
    row.focus();
    await Promise.all(row.getAnimations({
      subtree: true
    }).map(({
      finished
    }) => finished));
    expect(value.getBoundingClientRect().left).toBeLessThan(valueRestingLeft);
    expect(label.getBoundingClientRect().right).toBeLessThanOrEqual(value.getBoundingClientRect().left);
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    data: interactiveData.map(entry => ({
      ...entry,
      // The span fills the label cell, so only the name itself is the link.
      label: <InteractiveRowLabel title={String(entry.label)}>
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

    // A focused nested control turns the row's hover inset off, but must not lift the label cap.
    const longLabel = String(interactiveData[interactiveData.length - 1].label);
    const label = canvas.getAllByTestId('interactive-row-label').at(-1);
    const restingRight = label.getBoundingClientRect().right;
    canvas.getByRole('link', {
      name: longLabel
    }).focus();
    await Promise.all(document.getAnimations().map(({
      finished
    }) => finished));
    expect(label.getBoundingClientRect().right).toBeLessThan(restingRight);
  }
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    data: interactiveData.map((entry, index): LeaderboardEntry => {
      const onClick = () => onLeaderboardItemClick(entry.id);
      switch (MIXED_ROW_KINDS[index % MIXED_ROW_KINDS.length]) {
        case 'drill-down':
          return {
            ...entry,
            label: <InteractiveRowLabel title={String(entry.label)}>
                                {entry.label}
                            </InteractiveRowLabel>,
            onClick
          };
        case 'drill-down-with-link':
          return {
            ...entry,
            label: <InteractiveRowLabel title={String(entry.label)}>
                                <DemoLabelLink entry={entry} />
                            </InteractiveRowLabel>,
            onClick,
            ariaLabel: \`View details for \${entry.label}\`,
            hasInteractiveLabel: true
          };
        case 'link-only':
          return {
            ...entry,
            label: <InteractiveRowLabel title={String(entry.label)}>
                                <DemoLabelLink entry={entry} />
                            </InteractiveRowLabel>
          };
        default:
          return {
            ...entry,
            label: <InteractiveRowLabel title={String(entry.label)}>
                                {entry.label}
                            </InteractiveRowLabel>
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
    expect(rows).toHaveLength(interactiveData.length);

    // The story must actually mix both row types for the rest to mean anything.
    const interactiveRows = grid.querySelectorAll(':scope > [role="listitem"] > button').length;
    expect(interactiveRows).toBeGreaterThan(0);
    expect(interactiveRows).toBeLessThan(interactiveData.length);

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
        story: 'A negative value puts every row on a shared zero point, placed in proportion to the range of shares derived from the values: negative bars extend toward the inline start and positive bars toward the inline end.'
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
    data: [...dataWithImageColor, {
      id: 'affiliate',
      label: 'Affiliate',
      currentValue: 2100,
      previousValue: -400,
      imageColor: '#00A32A'
    }, {
      id: 'email',
      label: 'Email',
      currentValue: -1200,
      previousValue: 800,
      imageColor: '#D63638'
    }].map(entry => ({
      ...entry,
      label: <CustomLabelComponent label={entry.label} imageColor={entry.imageColor} style={{
        padding: '6px'
      }} />
    })),
    withComparison: true,
    withOverlayLabel: true,
    negativeBars: 'clamp',
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
}`,...Q.parameters?.docs?.source}}}}));Me();export{G as AdvancedFormatting,P as Animation,g as AspectRatio,H as CurrencyFormatting,F as CustomColors,W as CustomLabel,m as Default,L as EmptyData,R as EmptyDataWithChildren,Z as FitRows,Q as FitRowsInteractive,h as FixedDimensions,O as Interactive,A as InteractiveOverlayLabel,j as InteractiveOverlayLabelLink,N as InteractiveOverlayLabelMixed,z as LargeValues,C as Loading,x as MissingComparisonRows,S as MissingComparisonRowsWithOverlayLabel,B as NegativeGrowth,V as NegativeValues,U as NumberFormatting,q as OverlayLabelWithImage,I as SmallDataset,b as UnavailableDelta,X as WithCompositionLegend,J as WithLegend,Y as WithLegendLabels,v as WithOverlayLabel,_ as WithoutComparison,y as ZeroChange,$ as __namedExportsOrder,Te as default,Me as n,xe as t};