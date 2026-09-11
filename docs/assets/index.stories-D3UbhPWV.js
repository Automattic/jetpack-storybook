import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{c as r,n as i,o as a,r as o,s,t as c}from"./chart-decorator-Bj8OSATY.js";import{c as l,d as u,l as d,p as f,s as p,u as m}from"./sample-data-D3PJ9Amq.js";import{a as h,r as g,t as _}from"./heatmap-chart-D88cKM98.js";var v=e({AspectRatio:()=>P,Calendar:()=>A,Compact:()=>S,CompactCalendarPartialMonth:()=>j,Default:()=>x,ErrorStates:()=>F,FixedDimensions:()=>N,LargeValues:()=>C,MaximumCellSize:()=>T,MinimumCellSize:()=>E,WithCompositionLegend:()=>M,WithSummaryColumn:()=>w,__namedExportsOrder:()=>I,default:()=>b}),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L=t((()=>{i(),f(),a(),_(),y=n(),b={title:`JS Packages/Charts Library/Charts/Heatmap Chart`,component:h,parameters:{layout:`centered`},decorators:[c],argTypes:{...o,...r,compact:{control:`boolean`,table:{category:`Visual Style`}},showValues:{control:`boolean`,table:{category:`Visual Style`}},maxCellWidth:{control:{type:`number`,min:1},description:`Maximum cell width in pixels in non-compact mode`,table:{category:`Cell Size`}},maxCellHeight:{control:{type:`number`,min:1},description:`Maximum cell height in pixels in non-compact mode`,table:{category:`Cell Size`}},minCellWidth:{control:{type:`number`,min:0},description:`Minimum cell width in pixels in non-compact mode`,table:{category:`Cell Size`}},minCellHeight:{control:{type:`number`,min:0},description:`Minimum cell height in pixels in non-compact mode`,table:{category:`Cell Size`}}}},x={args:{...s,data:p,rowLabels:[`Mon`,``,`Wed`,``,`Fri`,``,``],withTooltips:!0}},S={args:{...x.args,compact:!0,containerHeight:`160px`}},C={args:{...x.args,data:m}},w={args:{...x.args,data:l}},T={args:{...x.args,containerWidth:`1000px`,containerHeight:`420px`,maxCellWidth:64,maxCellHeight:42}},E={args:{...x.args,containerWidth:`480px`,containerHeight:`280px`,minCellWidth:44,minCellHeight:32}},D=({series:e,weekStartsOn:t,hideOutOfRangeDays:n,locale:r,timeZone:i,...a})=>{let{data:o,rowLabels:s}=g(e,{weekStartsOn:t,hideOutOfRangeDays:n,locale:r||void 0,timeZone:i||void 0});return(0,y.jsx)(h,{...a,data:o,rowLabels:s})},O={weekStartsOn:{control:{type:`inline-radio`,labels:{0:`Sunday`,1:`Monday`}},options:[1,0],table:{category:`Calendar`}},hideOutOfRangeDays:{control:`boolean`,table:{category:`Calendar`}},locale:{control:`text`,description:`BCP-47 tag for the labels. Empty falls back to the provider, then the runtime's.`,table:{category:`Calendar`}},timeZone:{control:`text`,description:`IANA zone the series is bucketed into days in.`,table:{category:`Calendar`}}},k=d.slice(2,115),A={render:e=>(0,y.jsx)(D,{...e,series:k}),args:{...s,withTooltips:!0,weekStartsOn:1,hideOutOfRangeDays:!0,locale:``,timeZone:``},argTypes:O},j={render:e=>(0,y.jsx)(D,{...e,series:u}),args:{...s,compact:!0,withTooltips:!0,weekStartsOn:1},argTypes:{weekStartsOn:{control:{type:`inline-radio`,labels:{0:`Sunday`,1:`Monday`}},options:[1,0],table:{category:`Calendar`}}}},M={render:e=>(0,y.jsx)(h,{...e,chartId:`composition-heatmap`,children:(0,y.jsx)(h.Legend,{})}),args:{...x.args}},N={args:{...x.args,width:720,height:220}},P={args:{...x.args,aspectRatio:.4}},F={args:{...x.args,data:[]}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    data: heatmapActivityMatrix,
    rowLabels: ['Mon', '', 'Wed', '', 'Fri', '', ''],
    withTooltips: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    compact: true,
    containerHeight: '160px'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: heatmapLargeValueMatrix
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: heatmapActivityMatrixWithTotals
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    containerWidth: '1000px',
    containerHeight: '420px',
    maxCellWidth: 64,
    maxCellHeight: 42
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    containerWidth: '480px',
    containerHeight: '280px',
    minCellWidth: 44,
    minCellHeight: 32
  }
}`,...E.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <HeatmapChart {...args} chartId="composition-heatmap">
            <HeatmapChart.Legend />
        </HeatmapChart>,
  args: {
    ...Default.args
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 720,
    height: 220
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.4
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: []
  }
}`,...F.parameters?.docs?.source}}},I=[`Default`,`Compact`,`LargeValues`,`WithSummaryColumn`,`MaximumCellSize`,`MinimumCellSize`,`Calendar`,`CompactCalendarPartialMonth`,`WithCompositionLegend`,`FixedDimensions`,`AspectRatio`,`ErrorStates`]}));L();export{P as AspectRatio,A as Calendar,S as Compact,j as CompactCalendarPartialMonth,x as Default,F as ErrorStates,N as FixedDimensions,C as LargeValues,T as MaximumCellSize,E as MinimumCellSize,M as WithCompositionLegend,w as WithSummaryColumn,I as __namedExportsOrder,b as default,L as n,v as t};