import{n as e,r as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./jsx-runtime-CFwixLRt.js";import{c as r,l as i,n as a,r as o,s,t as c}from"./chart-decorator-BLG2ebe4.js";import{c as l,d as u,f as d,g as f,h as p,l as m,m as h,p as g,t as _,u as v,v as y}from"./sample-data-BfFexz7h.js";import{a as b,o as x,r as S,t as C}from"./heatmap-chart-CaNWLhYf.js";var ee=t({AspectRatio:()=>G,Calendar:()=>B,Compact:()=>k,CompactCalendarPartialMonth:()=>V,Default:()=>O,ErrorStates:()=>K,FixedDimensions:()=>W,LargeValues:()=>A,LongSiteHistory:()=>P,MaximumCellSize:()=>M,MinimumCellSize:()=>N,MonthCalendar:()=>Z,MonthCalendarFitCells:()=>X,ScaleComparison:()=>L,SinglePostHistory:()=>F,WithBarLegend:()=>U,WithColumnGroups:()=>q,WithCompositionLegend:()=>H,WithSummaryColumn:()=>j,__namedExportsOrder:()=>Q,default:()=>D}),w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{a(),y(),s(),C(),w=n(),{expect:T,within:E}=__STORYBOOK_MODULE_TEST__,D={title:`JS Packages/Charts Library/Charts/Heatmap Chart`,component:x,subcomponents:{"HeatmapChart.Legend":x.Legend},parameters:{layout:`centered`},decorators:[c],argTypes:{...o,...i,compact:{control:`boolean`,table:{category:`Visual Style`}},showValues:{control:`boolean`,table:{category:`Visual Style`}},scale:{control:{type:`inline-radio`},options:[`linear`,`log`,`buckets`],description:`Whether a value picks its color by distance, by distance in log space, or by its rank in the series.`,table:{category:`Visual Style`}},maxCellWidth:{control:{type:`number`,min:1},description:`Maximum cell width in pixels in non-compact mode`,table:{category:`Cell Size`}},maxCellHeight:{control:{type:`number`,min:1},description:`Maximum cell height in pixels in non-compact mode`,table:{category:`Cell Size`}},minCellWidth:{control:{type:`number`,min:0},description:`Minimum cell width in pixels in non-compact mode`,table:{category:`Cell Size`}},minCellHeight:{control:{type:`number`,min:0},description:`Minimum cell height in pixels in non-compact mode`,table:{category:`Cell Size`}}}},O={args:{...r,data:l,rowLabels:[`Mon`,``,`Wed`,``,`Fri`,``,``],withTooltips:!0}},k={args:{...O.args,compact:!0,containerHeight:`160px`}},A={args:{...O.args,data:u}},j={args:{...O.args,data:m}},M={args:{...O.args,containerWidth:`1000px`,containerHeight:`420px`,maxCellWidth:64,maxCellHeight:42}},N={args:{...O.args,containerWidth:`480px`,containerHeight:`280px`,minCellWidth:44,minCellHeight:32}},P={render:e=>(0,w.jsx)(`div`,{style:{height:`100%`,"--a8c-charts-dimension-heatmap-cell-gap":`0px`,"--a8c-charts-border-radius-cell":`0`},children:(0,w.jsx)(x,{...e,chartId:`long-site-history-heatmap`,children:(0,w.jsx)(x.Legend,{variant:`bar`,lessLabel:`Fewer views`,moreLabel:`More views`})})}),args:{...r,...f,scale:`buckets`,withTooltips:!0,ariaLabel:`Views over years`,containerWidth:`1000px`,containerHeight:`620px`}},F={render:e=>(0,w.jsx)(x,{...e,chartId:`single-post-history-heatmap`,children:(0,w.jsx)(x.Legend,{variant:`bar`,lessLabel:`Fewer views`,moreLabel:`More views`})}),args:{...r,...g,scale:`log`,withTooltips:!0,ariaLabel:`Post views by month`,containerWidth:`960px`,containerHeight:`280px`}},I={linear:`linear places a value by its distance from the largest. The recent months are unmistakable, and eight years of real differences share the lightest tone.`,log:`log places a value by its distance in log space. Each step is a jump of the same factor, so the quiet years and the busy ones both keep their spread.`,buckets:`buckets places a value by its rank. Every step holds about a fifth of the months whatever the shape of the series, and the distances between them are gone: the busiest month and one a tenth its size can share the darkest step.`},L={render:e=>(0,w.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`28px`},children:[`linear`,`log`,`buckets`].map(t=>(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{style:{margin:`0 0 8px`,maxWidth:`62em`,fontSize:`13px`,lineHeight:1.5},children:I[t]}),(0,w.jsx)(x,{...e,scale:t,height:260,chartId:`scale-comparison-${t}`,children:(0,w.jsx)(x.Legend,{variant:`bar`,lessLabel:`Fewer views`,moreLabel:`More views`})})]},t))}),args:{...r,...p,withTooltips:!0,ariaLabel:`Post views by month`,containerWidth:`1000px`,containerHeight:`auto`},argTypes:{scale:{control:!1,table:{disable:!0}}}},R=({series:e,weekStartsOn:t,hideOutOfRangeDays:n,locale:r,timeZone:i,children:a,...o})=>{let{data:s,rowLabels:c}=b(e,{weekStartsOn:t,hideOutOfRangeDays:n,locale:r||void 0,timeZone:i||void 0});return(0,w.jsx)(x,{...o,data:s,rowLabels:c,children:a})},z={weekStartsOn:{control:{type:`inline-radio`,labels:{0:`Sunday`,1:`Monday`}},options:[1,0],table:{category:`Calendar`}},hideOutOfRangeDays:{control:`boolean`,table:{category:`Calendar`}},locale:{control:`text`,description:`BCP-47 tag for the labels. Empty falls back to the provider, then the runtime's.`,table:{category:`Calendar`}},timeZone:{control:`text`,description:`IANA zone the series is bucketed into days in.`,table:{category:`Calendar`}}},B={render:({dataset:e,...t})=>(0,w.jsx)(R,{...t,series:v[e],children:(0,w.jsx)(x.Legend,{})}),args:{...r,withTooltips:!0,weekStartsOn:1,hideOutOfRangeDays:!0,locale:``,timeZone:``,dataset:`Steady traffic`,scale:`linear`},argTypes:{...z,dataset:{control:`radio`,options:Object.keys(v),description:`Traffic shape the calendar draws, for comparing how the color scale reads on each.`,table:{category:`Calendar`}}}},V={render:e=>(0,w.jsx)(R,{...e,series:d}),args:{...r,compact:!0,withTooltips:!0,weekStartsOn:1},argTypes:{weekStartsOn:{control:{type:`inline-radio`,labels:{0:`Sunday`,1:`Monday`}},options:[1,0],table:{category:`Calendar`}}}},H={render:e=>(0,w.jsx)(x,{...e,chartId:`composition-heatmap`,children:(0,w.jsx)(x.Legend,{})}),args:{...O.args}},U={render:e=>(0,w.jsx)(x,{...e,chartId:`bar-legend-heatmap`,children:(0,w.jsx)(x.Legend,{variant:`bar`})}),args:{...O.args}},W={args:{...O.args,width:720,height:220}},G={args:{...O.args,aspectRatio:.4}},K={args:{...O.args,data:[]}},q={args:{...O.args,data:m.map((e,t)=>({...e,label:e.summary?e.label:`Col ${t+1}`,data:e.data.map(({label:t,...n})=>e.summary?{label:t,...n}:n)})),rowLabels:[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],columnGroups:[{label:`Q1`,span:3},{label:`Q2`,span:3},{label:`Q3`,span:3},{label:`Q4`,span:3}]}},J=e=>{let t=new Date(`${_.end}T00:00:00Z`);return{start:new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth()-(e-1),1)).toISOString().slice(0,10),end:_.end}},Y=({months:e=12,weekStartsOn:t,locale:n,...r})=>{let{data:i,columnGroups:a}=S(h,J(e),{weekStartsOn:t,locale:n||void 0});return(0,w.jsx)(x,{...r,data:i,columnGroups:a,keyboardNavigation:`calendar`,children:(0,w.jsx)(x.Legend,{lessLabel:`Fewer posts`,moreLabel:`More posts`})})},X={render:e=>(0,w.jsx)(Y,{...e}),args:{...r,compact:!0,fitCells:!0,withTooltips:!0,ariaLabel:`Monthly posting activity`,containerWidth:`1200px`,containerHeight:`360px`,months:12,weekStartsOn:1,locale:``}},Z={render:e=>(0,w.jsx)(Y,{...e}),args:{...r,compact:!0,withTooltips:!0,ariaLabel:`Monthly posting activity`,containerWidth:`1200px`,containerHeight:`200px`,months:6,weekStartsOn:1,locale:``},argTypes:{months:{control:{type:`range`,min:1,max:12},description:`Months drawn, ending at the sample range end. Narrow the container until the gaps stop growing.`,table:{category:`Calendar`}},weekStartsOn:z.weekStartsOn,locale:z.locale},play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`grid`,{name:`Monthly posting activity`});await T(t.getAllByRole(`grid`)).toHaveLength(1),await T(n).toHaveAttribute(`aria-colcount`,`42`);let r=t.getAllByTestId(`heatmap-group-label`);await T(r).toHaveLength(6);let[i,a]=r.map(e=>e.getBoundingClientRect());await T(a.left-i.right).toBeGreaterThan(24),await T(n.scrollWidth).toBe(n.clientWidth)}},Q=[`Default`,`Compact`,`LargeValues`,`WithSummaryColumn`,`MaximumCellSize`,`MinimumCellSize`,`LongSiteHistory`,`SinglePostHistory`,`ScaleComparison`,`Calendar`,`CompactCalendarPartialMonth`,`WithCompositionLegend`,`WithBarLegend`,`FixedDimensions`,`AspectRatio`,`ErrorStates`,`WithColumnGroups`,`MonthCalendarFitCells`,`MonthCalendar`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    data: heatmapActivityMatrix,
    rowLabels: ['Mon', '', 'Wed', '', 'Fri', '', ''],
    withTooltips: true
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    compact: true,
    containerHeight: '160px'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: heatmapLargeValueMatrix
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: heatmapActivityMatrixWithTotals
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    containerWidth: '1000px',
    containerHeight: '420px',
    maxCellWidth: 64,
    maxCellHeight: 42
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    containerWidth: '480px',
    containerHeight: '280px',
    minCellWidth: 44,
    minCellHeight: 32
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args =>
  // Flush square cells, so sixteen years read as one surface and the bands in it are not
  // broken up by the grid. Both are catalog properties; the chart has no prop for either.
  <div style={{
    height: '100%',
    '--a8c-charts-dimension-heatmap-cell-gap': '0px',
    '--a8c-charts-border-radius-cell': '0'
  } as CSSProperties}>
            <HeatmapChart {...args} chartId="long-site-history-heatmap">
                <HeatmapChart.Legend variant="bar" lessLabel="Fewer views" moreLabel="More views" />
            </HeatmapChart>
        </div>,
  args: {
    ...sharedThemeArgs,
    ...heatmapViewsOverYears,
    scale: 'buckets',
    withTooltips: true,
    ariaLabel: 'Views over years',
    containerWidth: '1000px',
    containerHeight: '620px'
  }
}`,...P.parameters?.docs?.source},description:{story:`The "Views over years" shape, from a site that has run for sixteen years: a launch month of
195 views, a first year in the tens of thousands, a peak of 800,000 in April 2020, and
thirteen years that all sit between 200,000 and 600,000. The hardest distribution the scales
meet, because almost every month belongs to that middle band. Switch **scale** to compare
them. The launch month (Feb 2011) and the current month (Nov 2026) cover part of a month, so
they are hatched instead of shaded: they are not read as quiet months, and they sit outside
the scale. Months before launch and after the current month are faded slots.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <HeatmapChart {...args} chartId="single-post-history-heatmap">
            <HeatmapChart.Legend variant="bar" lessLabel="Fewer views" moreLabel="More views" />
        </HeatmapChart>,
  args: {
    ...sharedThemeArgs,
    ...heatmapPostHistory,
    scale: 'log',
    withTooltips: true,
    ariaLabel: 'Post views by month',
    containerWidth: '960px',
    containerHeight: '280px'
  }
}`,...F.parameters?.docs?.source},description:{story:`A post's all-time traffic: fourteen months from the month it was published. One spike sits
two orders of magnitude above the rest, yet the quieter months still tell apart. The
publish month (Oct 2024) and the current month (Nov 2025) are hatched; the months before
publication and after the current month are faded slots.`,...F.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '28px'
  }}>
            {(['linear', 'log', 'buckets'] as const).map(scale => <div key={scale}>
                    <p style={{
        margin: '0 0 8px',
        maxWidth: '62em',
        fontSize: '13px',
        lineHeight: 1.5
      }}>
                        {SCALE_CAPTIONS[scale]}
                    </p>
                    <HeatmapChart {...args} scale={scale} height={260} chartId={\`scale-comparison-\${scale}\`}>
                        <HeatmapChart.Legend variant="bar" lessLabel="Fewer views" moreLabel="More views" />
                    </HeatmapChart>
                </div>)}
        </div>,
  args: {
    ...sharedThemeArgs,
    ...heatmapScaleComparison,
    withTooltips: true,
    ariaLabel: 'Post views by month',
    containerWidth: '1000px',
    containerHeight: 'auto'
  },
  // This story sets the scale on each chart it draws, so the control would move nothing.
  argTypes: {
    scale: {
      control: false,
      table: {
        disable: true
      }
    }
  }
}`,...L.parameters?.docs?.source},description:{story:`The same ten years of a post's traffic on all three scales, so they can be read against each
other. Values are above zero throughout, which the log scale requires.`,...L.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: ({
    dataset,
    ...args
  }) => <CalendarGrid {...args} series={heatmapCalendarDatasets[dataset]}>
            <HeatmapChart.Legend />
        </CalendarGrid>,
  args: {
    ...sharedThemeArgs,
    withTooltips: true,
    weekStartsOn: 1,
    hideOutOfRangeDays: true,
    locale: '',
    timeZone: '',
    dataset: 'Steady traffic',
    scale: 'linear'
  },
  argTypes: {
    ...calendarArgTypes,
    dataset: {
      // Radio, not select: the select control carries an empty "Choose option" entry, and this
      // arg indexes the series the calendar draws, so there is no series for it to pick.
      control: 'radio' as const,
      options: Object.keys(heatmapCalendarDatasets),
      description: 'Traffic shape the calendar draws, for comparing how the color scale reads on each.',
      table: {
        category: 'Calendar'
      }
    }
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <CalendarGrid {...args} series={heatmapPartialMonthCalendarSeries} />,
  args: {
    ...sharedThemeArgs,
    compact: true,
    withTooltips: true,
    weekStartsOn: 1
  },
  argTypes: {
    weekStartsOn: {
      control: {
        type: 'inline-radio',
        labels: {
          0: 'Sunday',
          1: 'Monday'
        }
      },
      options: [1, 0],
      table: {
        category: 'Calendar'
      }
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <HeatmapChart {...args} chartId="composition-heatmap">
            <HeatmapChart.Legend />
        </HeatmapChart>,
  args: {
    ...Default.args
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => <HeatmapChart {...args} chartId="bar-legend-heatmap">
            <HeatmapChart.Legend variant="bar" />
        </HeatmapChart>,
  args: {
    ...Default.args
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 720,
    height: 220
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.4
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: []
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: heatmapActivityMatrixWithTotals.map((column, index) => ({
      ...column,
      label: column.summary ? column.label : \`Col \${index + 1}\`,
      data: column.data.map(({
        label,
        ...cell
      }) => column.summary ? {
        label,
        ...cell
      } : cell)
    })),
    rowLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    columnGroups: [{
      label: 'Q1',
      span: 3
    }, {
      label: 'Q2',
      span: 3
    }, {
      label: 'Q3',
      span: 3
    }, {
      label: 'Q4',
      span: 3
    }]
  }
}`,...q.parameters?.docs?.source},description:{story:`Column groups: a gap and a label under each quarter; the Total column stays outside them.
Cells carry no label of their own, so each is named by its group, column and row ("Q1 Col 3 Mon").`,...q.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => <MonthCalendarGrid {...args} />,
  args: {
    ...sharedThemeArgs,
    compact: true,
    fitCells: true,
    withTooltips: true,
    ariaLabel: 'Monthly posting activity',
    containerWidth: '1200px',
    containerHeight: '360px',
    months: 12,
    weekStartsOn: 1,
    locale: ''
  }
}`,...X.parameters?.docs?.source},description:{story:"`fitCells` grows the days with the container, wrapping the months onto more rows when\nthat makes them larger. Drag the container's corner to see the row count change.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <MonthCalendarGrid {...args} />,
  args: {
    ...sharedThemeArgs,
    compact: true,
    withTooltips: true,
    ariaLabel: 'Monthly posting activity',
    containerWidth: '1200px',
    containerHeight: '200px',
    months: 6,
    weekStartsOn: 1,
    locale: ''
  },
  argTypes: {
    months: {
      control: {
        type: 'range',
        min: 1,
        max: 12
      },
      description: 'Months drawn, ending at the sample range end. Narrow the container until the gaps stop growing.',
      table: {
        category: 'Calendar'
      }
    },
    weekStartsOn: calendarArgTypes.weekStartsOn,
    locale: calendarArgTypes.locale
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const grid = canvas.getByRole('grid', {
      name: 'Monthly posting activity'
    });
    await expect(canvas.getAllByRole('grid')).toHaveLength(1);
    await expect(grid).toHaveAttribute('aria-colcount', '42');
    const labels = canvas.getAllByTestId('heatmap-group-label');
    await expect(labels).toHaveLength(6);
    // Six months leave width over at 1200px, so the gaps grow past groupGap.
    const [first, second] = labels.map(label => label.getBoundingClientRect());
    await expect(second.left - first.right).toBeGreaterThan(24);
    await expect(grid.scrollWidth).toBe(grid.clientWidth);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Months as one grid sharing one scale: the "Monthly posting activity" layout.
Drag the container's corner: the month gaps share the width, shrink to the theme's
\`groupGap\`, and past that the container scrolls with the keyboard selection in view.
Arrow keys step by day and week, Page Up/Down by month.`,...Z.parameters?.docs?.description}}}}));$();export{G as AspectRatio,B as Calendar,k as Compact,V as CompactCalendarPartialMonth,O as Default,K as ErrorStates,W as FixedDimensions,A as LargeValues,P as LongSiteHistory,M as MaximumCellSize,N as MinimumCellSize,Z as MonthCalendar,X as MonthCalendarFitCells,L as ScaleComparison,F as SinglePostHistory,U as WithBarLegend,q as WithColumnGroups,H as WithCompositionLegend,j as WithSummaryColumn,Q as __namedExportsOrder,D as default,$ as n,ee as t};