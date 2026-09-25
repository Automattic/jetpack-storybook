import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{c as r,n as i,o as a,r as o,s,t as c}from"./chart-decorator-D_2rFJ0r.js";import{c as l,d as u,f as d,h as f,l as p,p as m,t as h,u as g}from"./sample-data-BJw5YSHu.js";import{a as _,r as v,s as y,t as b}from"./heatmap-chart-CuzhdMn2.js";var x=e({AspectRatio:()=>V,Calendar:()=>F,Compact:()=>D,CompactCalendarPartialMonth:()=>I,DarkTooltip:()=>z,Default:()=>E,ErrorStates:()=>H,FixedDimensions:()=>B,LargeValues:()=>O,MaximumCellSize:()=>A,MinimumCellSize:()=>j,MonthCalendar:()=>K,WithBarLegend:()=>R,WithColumnGroups:()=>U,WithCompositionLegend:()=>L,WithSummaryColumn:()=>k,__namedExportsOrder:()=>q,default:()=>T}),S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J=t((()=>{i(),f(),a(),b(),S=n(),{expect:C,within:w}=__STORYBOOK_MODULE_TEST__,T={title:`JS Packages/Charts Library/Charts/Heatmap Chart`,component:y,subcomponents:{"HeatmapChart.Legend":y.Legend},parameters:{layout:`centered`},decorators:[c],argTypes:{...o,...r,compact:{control:`boolean`,table:{category:`Visual Style`}},showValues:{control:`boolean`,table:{category:`Visual Style`}},tooltipVariant:{control:`radio`,options:[`light`,`dark`],table:{category:`Visual Style`}},maxCellWidth:{control:{type:`number`,min:1},description:`Maximum cell width in pixels in non-compact mode`,table:{category:`Cell Size`}},maxCellHeight:{control:{type:`number`,min:1},description:`Maximum cell height in pixels in non-compact mode`,table:{category:`Cell Size`}},minCellWidth:{control:{type:`number`,min:0},description:`Minimum cell width in pixels in non-compact mode`,table:{category:`Cell Size`}},minCellHeight:{control:{type:`number`,min:0},description:`Minimum cell height in pixels in non-compact mode`,table:{category:`Cell Size`}}}},E={args:{...s,data:l,rowLabels:[`Mon`,``,`Wed`,``,`Fri`,``,``],withTooltips:!0}},D={args:{...E.args,compact:!0,containerHeight:`160px`}},O={args:{...E.args,data:u}},k={args:{...E.args,data:p}},A={args:{...E.args,containerWidth:`1000px`,containerHeight:`420px`,maxCellWidth:64,maxCellHeight:42}},j={args:{...E.args,containerWidth:`480px`,containerHeight:`280px`,minCellWidth:44,minCellHeight:32}},M=({series:e,weekStartsOn:t,hideOutOfRangeDays:n,locale:r,timeZone:i,...a})=>{let{data:o,rowLabels:s}=_(e,{weekStartsOn:t,hideOutOfRangeDays:n,locale:r||void 0,timeZone:i||void 0});return(0,S.jsx)(y,{...a,data:o,rowLabels:s})},N={weekStartsOn:{control:{type:`inline-radio`,labels:{0:`Sunday`,1:`Monday`}},options:[1,0],table:{category:`Calendar`}},hideOutOfRangeDays:{control:`boolean`,table:{category:`Calendar`}},locale:{control:`text`,description:`BCP-47 tag for the labels. Empty falls back to the provider, then the runtime's.`,table:{category:`Calendar`}},timeZone:{control:`text`,description:`IANA zone the series is bucketed into days in.`,table:{category:`Calendar`}}},P=g.slice(2,115),F={render:e=>(0,S.jsx)(M,{...e,series:P}),args:{...s,withTooltips:!0,weekStartsOn:1,hideOutOfRangeDays:!0,locale:``,timeZone:``},argTypes:N},I={render:e=>(0,S.jsx)(M,{...e,series:d}),args:{...s,compact:!0,withTooltips:!0,weekStartsOn:1},argTypes:{weekStartsOn:{control:{type:`inline-radio`,labels:{0:`Sunday`,1:`Monday`}},options:[1,0],table:{category:`Calendar`}}}},L={render:e=>(0,S.jsx)(y,{...e,chartId:`composition-heatmap`,children:(0,S.jsx)(y.Legend,{})}),args:{...E.args}},R={render:e=>(0,S.jsx)(y,{...e,chartId:`bar-legend-heatmap`,children:(0,S.jsx)(y.Legend,{variant:`bar`})}),args:{...E.args}},z={args:{...E.args,tooltipVariant:`dark`}},B={args:{...E.args,width:720,height:220}},V={args:{...E.args,aspectRatio:.4}},H={args:{...E.args,data:[]}},U={args:{...E.args,data:p.map((e,t)=>({...e,label:e.summary?e.label:`Col ${t+1}`,data:e.data.map(({label:t,...n})=>e.summary?{label:t,...n}:n)})),rowLabels:[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],columnGroups:[{label:`Q1`,span:3},{label:`Q2`,span:3},{label:`Q3`,span:3},{label:`Q4`,span:3}]}},W=e=>{let t=new Date(`${h.end}T00:00:00Z`);return{start:new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth()-(e-1),1)).toISOString().slice(0,10),end:h.end}},G=({months:e=12,weekStartsOn:t,locale:n,...r})=>{let{data:i,columnGroups:a}=v(m,W(e),{weekStartsOn:t,locale:n||void 0});return(0,S.jsx)(y,{...r,data:i,columnGroups:a,keyboardNavigation:`calendar`,children:(0,S.jsx)(y.Legend,{lessLabel:`Fewer posts`,moreLabel:`More posts`})})},K={render:e=>(0,S.jsx)(G,{...e}),args:{...s,compact:!0,withTooltips:!0,ariaLabel:`Monthly posting activity`,containerWidth:`1200px`,containerHeight:`200px`,months:6,weekStartsOn:1,locale:``},argTypes:{months:{control:{type:`range`,min:1,max:12},description:`Months drawn, ending at the sample range end. Narrow the container until the gaps stop growing.`,table:{category:`Calendar`}},weekStartsOn:N.weekStartsOn,locale:N.locale},play:async({canvasElement:e})=>{let t=w(e),n=t.getByRole(`grid`,{name:`Monthly posting activity`});await C(t.getAllByRole(`grid`)).toHaveLength(1),await C(n).toHaveAttribute(`aria-colcount`,`42`);let r=t.getAllByTestId(`heatmap-group-label`);await C(r).toHaveLength(6);let[i,a]=r.map(e=>e.getBoundingClientRect());await C(a.left-i.right).toBeGreaterThan(24),await C(n.scrollWidth).toBe(n.clientWidth)}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    data: heatmapActivityMatrix,
    rowLabels: ['Mon', '', 'Wed', '', 'Fri', '', ''],
    withTooltips: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    compact: true,
    containerHeight: '160px'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: heatmapLargeValueMatrix
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: heatmapActivityMatrixWithTotals
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    containerWidth: '1000px',
    containerHeight: '420px',
    maxCellWidth: 64,
    maxCellHeight: 42
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    containerWidth: '480px',
    containerHeight: '280px',
    minCellWidth: 44,
    minCellHeight: 32
  }
}`,...j.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <CalendarGrid {...args} series={raggedCalendarSeries} />,
  args: {
    ...sharedThemeArgs,
    withTooltips: true,
    weekStartsOn: 1,
    hideOutOfRangeDays: true,
    locale: '',
    timeZone: ''
  },
  argTypes: calendarArgTypes
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <HeatmapChart {...args} chartId="composition-heatmap">
            <HeatmapChart.Legend />
        </HeatmapChart>,
  args: {
    ...Default.args
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => <HeatmapChart {...args} chartId="bar-legend-heatmap">
            <HeatmapChart.Legend variant="bar" />
        </HeatmapChart>,
  args: {
    ...Default.args
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    tooltipVariant: 'dark'
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 720,
    height: 220
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.4
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: []
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:`Column groups: a gap and a label under each quarter; the Total column stays outside them.
Cells carry no label of their own, so each is named by its group, column and row ("Q1 Col 3 Mon").`,...U.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:`Months as one grid sharing one scale: the "Monthly posting activity" layout.
Drag the container's corner: the month gaps share the width, shrink to the theme's
\`groupGap\`, and past that the container scrolls with the keyboard selection in view.
Arrow keys step by day and week, Page Up/Down by month.`,...K.parameters?.docs?.description}}},q=[`Default`,`Compact`,`LargeValues`,`WithSummaryColumn`,`MaximumCellSize`,`MinimumCellSize`,`Calendar`,`CompactCalendarPartialMonth`,`WithCompositionLegend`,`WithBarLegend`,`DarkTooltip`,`FixedDimensions`,`AspectRatio`,`ErrorStates`,`WithColumnGroups`,`MonthCalendar`]}));J();export{V as AspectRatio,F as Calendar,D as Compact,I as CompactCalendarPartialMonth,z as DarkTooltip,E as Default,H as ErrorStates,B as FixedDimensions,O as LargeValues,A as MaximumCellSize,j as MinimumCellSize,K as MonthCalendar,R as WithBarLegend,U as WithColumnGroups,L as WithCompositionLegend,k as WithSummaryColumn,q as __namedExportsOrder,T as default,J as n,x as t};