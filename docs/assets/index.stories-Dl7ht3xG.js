import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{c as r,n as i,o as a,r as o,s,t as c}from"./chart-decorator-Dl3MwuZB.js";import{c as l,d as u,l as d,p as f,s as p,u as m}from"./sample-data-D3PJ9Amq.js";import{a as h,o as g,r as _,t as v}from"./heatmap-chart-BNCpodoe.js";var y=e({AspectRatio:()=>M,Calendar:()=>O,Compact:()=>C,CompactCalendarPartialMonth:()=>k,Default:()=>S,ErrorStates:()=>N,FixedDimensions:()=>j,LargeValues:()=>w,MaximumCellSize:()=>E,MinimumCellSize:()=>D,WithCompositionLegend:()=>A,WithSummaryColumn:()=>T,__namedExportsOrder:()=>P,default:()=>x}),b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F=t((()=>{i(),f(),a(),v(),h(),b=n(),x={title:`JS Packages/Charts Library/Charts/Heatmap Chart`,component:_,parameters:{layout:`centered`},decorators:[c],argTypes:{...o,...r,compact:{control:`boolean`,table:{category:`Visual Style`}},showValues:{control:`boolean`,table:{category:`Visual Style`}},maxCellWidth:{control:{type:`number`,min:1},description:`Maximum cell width in pixels in non-compact mode`,table:{category:`Cell Size`}},maxCellHeight:{control:{type:`number`,min:1},description:`Maximum cell height in pixels in non-compact mode`,table:{category:`Cell Size`}},minCellWidth:{control:{type:`number`,min:0},description:`Minimum cell width in pixels in non-compact mode`,table:{category:`Cell Size`}},minCellHeight:{control:{type:`number`,min:0},description:`Minimum cell height in pixels in non-compact mode`,table:{category:`Cell Size`}}}},S={args:{...s,data:p,rowLabels:[`Mon`,``,`Wed`,``,`Fri`,``,``],withTooltips:!0}},C={args:{...S.args,compact:!0,containerHeight:`160px`}},w={args:{...S.args,data:m}},T={args:{...S.args,data:l}},E={args:{...S.args,containerWidth:`1000px`,containerHeight:`420px`,maxCellWidth:64,maxCellHeight:42}},D={args:{...S.args,containerWidth:`480px`,containerHeight:`280px`,minCellWidth:44,minCellHeight:32}},O={render:({weekStartsOn:e,hideOutOfRangeDays:t,...n})=>{let{data:r,rowLabels:i}=g(d.slice(2,115),{weekStartsOn:e,hideOutOfRangeDays:t});return(0,b.jsx)(_,{...n,data:r,rowLabels:i})},args:{...s,withTooltips:!0,weekStartsOn:1,hideOutOfRangeDays:!0},argTypes:{weekStartsOn:{control:{type:`inline-radio`,labels:{0:`Sunday`,1:`Monday`}},options:[1,0],table:{category:`Calendar`}},hideOutOfRangeDays:{control:`boolean`,table:{category:`Calendar`}}}},k={render:({weekStartsOn:e,...t})=>{let{data:n,rowLabels:r}=g(u,{weekStartsOn:e});return(0,b.jsx)(_,{...t,data:n,rowLabels:r})},args:{...s,compact:!0,withTooltips:!0,weekStartsOn:1},argTypes:{weekStartsOn:{control:{type:`inline-radio`,labels:{0:`Sunday`,1:`Monday`}},options:[1,0],table:{category:`Calendar`}}}},A={render:e=>(0,b.jsx)(_,{...e,chartId:`composition-heatmap`,children:(0,b.jsx)(_.Legend,{})}),args:{...S.args}},j={args:{...S.args,width:720,height:220}},M={args:{...S.args,aspectRatio:.4}},N={args:{...S.args,data:[]}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    data: heatmapActivityMatrix,
    rowLabels: ['Mon', '', 'Wed', '', 'Fri', '', ''],
    withTooltips: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    compact: true,
    containerHeight: '160px'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: heatmapLargeValueMatrix
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: heatmapActivityMatrixWithTotals
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    containerWidth: '1000px',
    containerHeight: '420px',
    maxCellWidth: 64,
    maxCellHeight: 42
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    containerWidth: '480px',
    containerHeight: '280px',
    minCellWidth: 44,
    minCellHeight: 32
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: ({
    weekStartsOn,
    hideOutOfRangeDays,
    ...args
  }) => {
    // A mid-week span (Wed to Wed) so both calendar edges are ragged.
    const {
      data,
      rowLabels
    } = buildCalendarHeatmapData(heatmapCalendarSeries.slice(2, 115), {
      weekStartsOn,
      hideOutOfRangeDays
    });
    return <HeatmapChart {...args} data={data} rowLabels={rowLabels} />;
  },
  args: {
    ...sharedThemeArgs,
    withTooltips: true,
    weekStartsOn: 1,
    hideOutOfRangeDays: true
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
    },
    hideOutOfRangeDays: {
      control: 'boolean',
      table: {
        category: 'Calendar'
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: ({
    weekStartsOn,
    ...args
  }) => {
    const {
      data,
      rowLabels
    } = buildCalendarHeatmapData(heatmapPartialMonthCalendarSeries, {
      weekStartsOn
    });
    return <HeatmapChart {...args} data={data} rowLabels={rowLabels} />;
  },
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <HeatmapChart {...args} chartId="composition-heatmap">
            <HeatmapChart.Legend />
        </HeatmapChart>,
  args: {
    ...Default.args
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 720,
    height: 220
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.4
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: []
  }
}`,...N.parameters?.docs?.source}}},P=[`Default`,`Compact`,`LargeValues`,`WithSummaryColumn`,`MaximumCellSize`,`MinimumCellSize`,`Calendar`,`CompactCalendarPartialMonth`,`WithCompositionLegend`,`FixedDimensions`,`AspectRatio`,`ErrorStates`]}));F();export{M as AspectRatio,O as Calendar,C as Compact,k as CompactCalendarPartialMonth,S as Default,N as ErrorStates,j as FixedDimensions,w as LargeValues,E as MaximumCellSize,D as MinimumCellSize,A as WithCompositionLegend,T as WithSummaryColumn,P as __namedExportsOrder,x as default,F as n,y as t};