import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{c as r,n as i,o as a,r as o,s,t as c}from"./chart-decorator-kSZQYnVU.js";import{c as l,f as u,l as d,s as f,u as p}from"./sample-data-Cx3-uFO8.js";import{a as m,o as h,r as g,t as _}from"./heatmap-chart-CbFo4PTZ.js";var v=e({AspectRatio:()=>A,Calendar:()=>E,Compact:()=>S,CompactCalendarPartialMonth:()=>D,Default:()=>x,ErrorStates:()=>j,FixedDimensions:()=>k,LargeValues:()=>C,MaximumCellSize:()=>w,MinimumCellSize:()=>T,WithCompositionLegend:()=>O,__namedExportsOrder:()=>M,default:()=>b}),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N=t((()=>{i(),u(),a(),_(),m(),y=n(),b={title:`JS Packages/Charts Library/Charts/Heatmap Chart`,component:g,parameters:{layout:`centered`},decorators:[c],argTypes:{...o,...r,compact:{control:`boolean`,table:{category:`Visual Style`}},showValues:{control:`boolean`,table:{category:`Visual Style`}},maxCellWidth:{control:{type:`number`,min:1},description:`Maximum cell width in pixels in non-compact mode`,table:{category:`Cell Size`}},maxCellHeight:{control:{type:`number`,min:1},description:`Maximum cell height in pixels in non-compact mode`,table:{category:`Cell Size`}},minCellWidth:{control:{type:`number`,min:0},description:`Minimum cell width in pixels in non-compact mode`,table:{category:`Cell Size`}},minCellHeight:{control:{type:`number`,min:0},description:`Minimum cell height in pixels in non-compact mode`,table:{category:`Cell Size`}}}},x={args:{...s,data:f,rowLabels:[`Mon`,``,`Wed`,``,`Fri`,``,``],withTooltips:!0}},S={args:{...x.args,compact:!0,containerHeight:`160px`}},C={args:{...x.args,data:d}},w={args:{...x.args,containerWidth:`1000px`,containerHeight:`420px`,maxCellWidth:64,maxCellHeight:42}},T={args:{...x.args,containerWidth:`480px`,containerHeight:`280px`,minCellWidth:44,minCellHeight:32}},E={render:({weekStartsOn:e,hideOutOfRangeDays:t,...n})=>{let{data:r,rowLabels:i}=h(l.slice(2,115),{weekStartsOn:e,hideOutOfRangeDays:t});return(0,y.jsx)(g,{...n,data:r,rowLabels:i})},args:{...s,withTooltips:!0,weekStartsOn:1,hideOutOfRangeDays:!0},argTypes:{weekStartsOn:{control:{type:`inline-radio`,labels:{0:`Sunday`,1:`Monday`}},options:[1,0],table:{category:`Calendar`}},hideOutOfRangeDays:{control:`boolean`,table:{category:`Calendar`}}}},D={render:({weekStartsOn:e,...t})=>{let{data:n,rowLabels:r}=h(p,{weekStartsOn:e});return(0,y.jsx)(g,{...t,data:n,rowLabels:r})},args:{...s,compact:!0,withTooltips:!0,weekStartsOn:1},argTypes:{weekStartsOn:{control:{type:`inline-radio`,labels:{0:`Sunday`,1:`Monday`}},options:[1,0],table:{category:`Calendar`}}}},O={render:e=>(0,y.jsx)(g,{...e,chartId:`composition-heatmap`,children:(0,y.jsx)(g.Legend,{})}),args:{...x.args}},k={args:{...x.args,width:720,height:220}},A={args:{...x.args,aspectRatio:.4}},j={args:{...x.args,data:[]}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
    containerWidth: '1000px',
    containerHeight: '420px',
    maxCellWidth: 64,
    maxCellHeight: 42
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    containerWidth: '480px',
    containerHeight: '280px',
    minCellWidth: 44,
    minCellHeight: 32
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <HeatmapChart {...args} chartId="composition-heatmap">
            <HeatmapChart.Legend />
        </HeatmapChart>,
  args: {
    ...Default.args
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 720,
    height: 220
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.4
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: []
  }
}`,...j.parameters?.docs?.source}}},M=[`Default`,`Compact`,`LargeValues`,`MaximumCellSize`,`MinimumCellSize`,`Calendar`,`CompactCalendarPartialMonth`,`WithCompositionLegend`,`FixedDimensions`,`AspectRatio`,`ErrorStates`]}));N();export{A as AspectRatio,E as Calendar,S as Compact,D as CompactCalendarPartialMonth,x as Default,j as ErrorStates,k as FixedDimensions,C as LargeValues,w as MaximumCellSize,T as MinimumCellSize,O as WithCompositionLegend,M as __namedExportsOrder,b as default,N as n,v as t};