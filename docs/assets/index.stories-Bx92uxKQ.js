import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{c as r,n as i,o as a,r as o,s,t as c}from"./chart-decorator-B4pv9Ypw.js";import{c as l,d as u,l as d,s as f}from"./sample-data-BwMYxnT1.js";import{a as p,i as m,n as h,t as g}from"./heatmap-chart-tYxg0OXN.js";var _=e({AspectRatio:()=>E,Calendar:()=>C,Compact:()=>x,Default:()=>b,ErrorStates:()=>D,FixedDimensions:()=>T,LargeValues:()=>S,WithCompositionLegend:()=>w,__namedExportsOrder:()=>O,default:()=>y}),v,y,b,x,S,C,w,T,E,D,O,k=t((()=>{i(),u(),a(),g(),m(),v=n(),y={title:`JS Packages/Charts Library/Charts/Heatmap Chart`,component:h,parameters:{layout:`centered`},decorators:[c],argTypes:{...o,...r,compact:{control:`boolean`,table:{category:`Visual Style`}},showValues:{control:`boolean`,table:{category:`Visual Style`}}}},b={args:{...s,data:f,rowLabels:[`Mon`,``,`Wed`,``,`Fri`,``,``],withTooltips:!0}},x={args:{...b.args,compact:!0,containerHeight:`160px`}},S={args:{...b.args,data:d}},C={render:({weekStartsOn:e,...t})=>{let{data:n,rowLabels:r}=p(l,{weekStartsOn:e});return(0,v.jsx)(h,{...t,data:n,rowLabels:r})},args:{...s,withTooltips:!0,weekStartsOn:1},argTypes:{weekStartsOn:{control:{type:`inline-radio`,labels:{0:`Sunday`,1:`Monday`}},options:[1,0],table:{category:`Calendar`}}}},w={render:e=>(0,v.jsx)(h,{...e,chartId:`composition-heatmap`,children:(0,v.jsx)(h.Legend,{})}),args:{...b.args}},T={args:{...b.args,width:720,height:220}},E={args:{...b.args,aspectRatio:.4}},D={args:{...b.args,data:[]}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    data: heatmapActivityMatrix,
    rowLabels: ['Mon', '', 'Wed', '', 'Fri', '', ''],
    withTooltips: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    compact: true,
    containerHeight: '160px'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: heatmapLargeValueMatrix
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: ({
    weekStartsOn,
    ...args
  }) => {
    const {
      data,
      rowLabels
    } = buildCalendarHeatmapData(heatmapCalendarSeries, {
      weekStartsOn
    });
    return <HeatmapChart {...args} data={data} rowLabels={rowLabels} />;
  },
  args: {
    ...sharedThemeArgs,
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <HeatmapChart {...args} chartId="composition-heatmap">
            <HeatmapChart.Legend />
        </HeatmapChart>,
  args: {
    ...Default.args
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 720,
    height: 220
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.4
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: []
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`Compact`,`LargeValues`,`Calendar`,`WithCompositionLegend`,`FixedDimensions`,`AspectRatio`,`ErrorStates`]}));k();export{E as AspectRatio,C as Calendar,x as Compact,b as Default,D as ErrorStates,T as FixedDimensions,S as LargeValues,w as WithCompositionLegend,O as __namedExportsOrder,y as default,k as n,_ as t};