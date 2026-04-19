import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{c as n,i as r,s as i}from"./chart-decorator-meeo7NN3.js";import{Ym as a}from"./iframe-Bq5xqLkB.js";import{n as o}from"./line-chart-ncZWI170.js";import{t as s}from"./stories-oL2yJZeU.js";import{n as c}from"./bar-chart-4jT0DGio.js";import{l,u}from"./chart-layout-D6sziBjk.js";import{t as d}from"./bar-chart-ASWKLd6B.js";import{r as f,t as p}from"./pie-chart-BMpLymrt.js";import{t as m}from"./line-chart-DiGvpjGq.js";var h=t({AlignmentOptions:()=>j,CustomShape:()=>N,DashboardExample:()=>A,Default:()=>x,InteractiveLegend:()=>O,StandaloneLegendWithChartId:()=>E,TextOverflow:()=>M,Vertical:()=>S,WithBarChart:()=>w,WithLineChart:()=>C,__namedExportsOrder:()=>P,default:()=>_}),g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F=e((()=>{d(),m(),p(),s(),u(),g=a(),_={title:`JS Packages/Charts Library/Components/Legend`,component:l,parameters:{layout:`centered`},decorators:[r],argTypes:{...n}},v=[{label:`Desktop`,data:[{date:new Date(`2023-01-01`),value:100},{date:new Date(`2023-01-02`),value:150},{date:new Date(`2023-01-03`),value:120}]},{label:`Mobile`,data:[{date:new Date(`2023-01-01`),value:80},{date:new Date(`2023-01-02`),value:90},{date:new Date(`2023-01-03`),value:110}]}],y=[{label:`Q1 Sales`,data:[{label:`Jan`,value:1e3},{label:`Feb`,value:1200},{label:`Mar`,value:1100}]},{label:`Q2 Sales`,data:[{label:`Jan`,value:800},{label:`Feb`,value:900},{label:`Mar`,value:1e3}]}],b=[{label:`Desktop`,value:65},{label:`Mobile`,value:35}],x={render:e=>{let{themeName:t,accentColor:n,...r}=e;return(0,g.jsx)(l,{...r})},args:{...i,items:[{label:`Desktop`,value:`65%`,color:`#3858E9`},{label:`Mobile`,value:`35%`,color:`#80C8FF`}]}},S={render:e=>{let{themeName:t,accentColor:n,...r}=e;return(0,g.jsx)(l,{...r})},args:{...i,items:[{label:`Desktop`,value:`65%`,color:`#3858E9`},{label:`Mobile`,value:`35%`,color:`#80C8FF`},{label:`Tablet`,value:`12%`,color:`#44B556`}],orientation:`vertical`}},C={render:()=>(0,g.jsx)(o,{data:v,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1,chartId:`legend-line-chart`,children:(0,g.jsx)(o.Legend,{})})},w={render:()=>(0,g.jsx)(c,{data:y,width:400,height:300,chartId:`legend-bar-chart`,children:(0,g.jsx)(c.Legend,{})})},T=()=>(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,g.jsx)(o,{chartId:`standalone-legend-chart`,data:v,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,g.jsx)(l,{chartId:`standalone-legend-chart`,shape:`line`})]}),E={render:()=>(0,g.jsx)(T,{})},D=()=>(0,g.jsx)(o,{chartId:`interactive-legend-demo`,data:v,showLegend:!0,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1,legend:{interactive:!0}}),O={render:()=>(0,g.jsx)(D,{})},k=()=>(0,g.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 300px`,gap:`20px`,padding:`20px`,backgroundColor:`#f5f5f5`,borderRadius:`8px`},children:[(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,g.jsxs)(`div`,{style:{backgroundColor:`white`,padding:`20px`,borderRadius:`4px`},children:[(0,g.jsx)(`h3`,{style:{margin:`0 0 20px 0`},children:`Revenue Trends`}),(0,g.jsx)(o,{chartId:`dashboard-revenue`,data:v,showLegend:!1,height:300,withGradientFill:!1,withLegendGlyph:!1})]}),(0,g.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`20px`},children:[(0,g.jsxs)(`div`,{style:{backgroundColor:`white`,padding:`20px`,borderRadius:`4px`},children:[(0,g.jsx)(`h3`,{style:{margin:`0 0 20px 0`},children:`Sales by Quarter`}),(0,g.jsx)(c,{chartId:`dashboard-sales`,data:y,showLegend:!1,height:300})]}),(0,g.jsxs)(`div`,{style:{backgroundColor:`white`,padding:`20px`,borderRadius:`4px`},children:[(0,g.jsx)(`h3`,{style:{margin:`0 0 20px 0`},children:`Device Distribution`}),(0,g.jsx)(f,{chartId:`dashboard-devices`,data:b,showLegend:!1,height:300})]})]})]}),(0,g.jsxs)(`aside`,{style:{backgroundColor:`white`,padding:`20px`,borderRadius:`4px`},children:[(0,g.jsx)(`h3`,{style:{margin:`0 0 20px 0`},children:`Legend`}),(0,g.jsxs)(`div`,{style:{marginBottom:`20px`},children:[(0,g.jsx)(`h4`,{style:{margin:`0 0 10px 0`,fontSize:`14px`,color:`#666`},children:`Revenue Trends`}),(0,g.jsx)(l,{chartId:`dashboard-revenue`,orientation:`vertical`,shape:`line`})]}),(0,g.jsxs)(`div`,{style:{marginBottom:`20px`},children:[(0,g.jsx)(`h4`,{style:{margin:`0 0 10px 0`,fontSize:`14px`,color:`#666`},children:`Sales by Quarter`}),(0,g.jsx)(l,{chartId:`dashboard-sales`,orientation:`vertical`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h4`,{style:{margin:`0 0 10px 0`,fontSize:`14px`,color:`#666`},children:`Device Distribution`}),(0,g.jsx)(l,{chartId:`dashboard-devices`,orientation:`vertical`,shape:`circle`})]})]})]}),A={render:()=>(0,g.jsx)(k,{}),parameters:{layout:`fullscreen`}},j={args:{items:[{label:`Series 1`,value:`25%`,color:`#3858E9`},{label:`Series 2`,value:`35%`,color:`#80C8FF`},{label:`Series 3`,value:`40%`,color:`#44B556`}],alignment:`start`}},M={render:e=>{let{themeName:t,accentColor:n,...r}=e,i=e.labelStyles?.maxWidth,a=e.labelStyles?.textOverflow;return(0,g.jsxs)(`div`,{style:e.orientation===`horizontal`?{width:`600px`,border:`1px solid #ddd`,padding:`20px`}:{width:`350px`,border:`1px solid #ddd`,padding:`20px`},children:[(0,g.jsx)(`h4`,{style:{marginBottom:`10px`},children:i?`Legend with ${a===`ellipsis`?`Ellipsis`:`Text Wrapping`} (maxWidth: ${i})`:`Legend without maxWidth constraint`}),(0,g.jsx)(l,{...r})]})},args:{items:[{label:`Very Long Legend Item Label That Demonstrates Text Overflow Behavior`,value:`25%`,color:`#3858E9`},{label:`Another Extremely Long Label for Testing Different Display Options`,value:`35%`,color:`#80C8FF`},{label:`Short Label`,value:`15%`,color:`#44B556`},{label:`Medium Length Label Text`,value:`25%`,color:`#FFC107`}],orientation:`horizontal`,labelStyles:{maxWidth:`150px`,textOverflow:`wrap`},position:`bottom`,alignment:`center`},argTypes:{orientation:{control:{type:`radio`},options:[`horizontal`,`vertical`]},labelStyles:{control:`object`},position:{control:{type:`radio`},options:[`top`,`bottom`]},alignment:{control:{type:`radio`},options:[`start`,`center`,`end`]}}},N={args:{items:[{label:`Desktop`,value:`65%`,color:`#3858E9`},{label:`Mobile`,value:`35%`,color:`#80C8FF`}],shape:`circle`}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      themeName,
      accentColor,
      ...legendProps
    } = args;
    return <Legend {...legendProps} />;
  },
  args: {
    ...sharedThemeArgs,
    items: [{
      label: 'Desktop',
      value: '65%',
      color: '#3858E9'
    }, {
      label: 'Mobile',
      value: '35%',
      color: '#80C8FF'
    }]
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      themeName,
      accentColor,
      ...legendProps
    } = args;
    return <Legend {...legendProps} />;
  },
  args: {
    ...sharedThemeArgs,
    items: [{
      label: 'Desktop',
      value: '65%',
      color: '#3858E9'
    }, {
      label: 'Mobile',
      value: '35%',
      color: '#80C8FF'
    }, {
      label: 'Tablet',
      value: '12%',
      color: '#44B556'
    }],
    orientation: 'vertical'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <LineChart data={lineChartData} width={600} height={300} withGradientFill={false} withLegendGlyph={false} chartId="legend-line-chart">
            <LineChart.Legend />
        </LineChart>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <BarChart data={barChartData} width={400} height={300} chartId="legend-bar-chart">
            <BarChart.Legend />
        </BarChart>
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <StandaloneLegendWithChartIdComponent />
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveLegendComponent />
}`,...O.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <DashboardWithCentralizedLegend />,
  parameters: {
    layout: 'fullscreen'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Series 1',
      value: '25%',
      color: '#3858E9'
    }, {
      label: 'Series 2',
      value: '35%',
      color: '#80C8FF'
    }, {
      label: 'Series 3',
      value: '40%',
      color: '#44B556'
    }],
    alignment: 'start'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      themeName,
      accentColor,
      ...legendProps
    } = args;
    const maxWidth = args.labelStyles?.maxWidth;
    const textOverflow = args.labelStyles?.textOverflow;
    const containerStyle = args.orientation === 'horizontal' ? {
      width: '600px',
      border: '1px solid #ddd',
      padding: '20px'
    } : {
      width: '350px',
      border: '1px solid #ddd',
      padding: '20px'
    };
    const titleText = maxWidth ? \`Legend with \${textOverflow === 'ellipsis' ? 'Ellipsis' : 'Text Wrapping'} (maxWidth: \${maxWidth})\` : 'Legend without maxWidth constraint';
    return <div style={containerStyle}>
                <h4 style={{
        marginBottom: '10px'
      }}>{titleText}</h4>
                <Legend {...legendProps} />
            </div>;
  },
  args: {
    items: [{
      label: 'Very Long Legend Item Label That Demonstrates Text Overflow Behavior',
      value: '25%',
      color: '#3858E9'
    }, {
      label: 'Another Extremely Long Label for Testing Different Display Options',
      value: '35%',
      color: '#80C8FF'
    }, {
      label: 'Short Label',
      value: '15%',
      color: '#44B556'
    }, {
      label: 'Medium Length Label Text',
      value: '25%',
      color: '#FFC107'
    }],
    orientation: 'horizontal',
    labelStyles: {
      maxWidth: '150px',
      textOverflow: 'wrap'
    },
    position: 'bottom',
    alignment: 'center'
  },
  argTypes: {
    orientation: {
      control: {
        type: 'radio'
      },
      options: ['horizontal', 'vertical']
    },
    labelStyles: {
      control: 'object'
    },
    position: {
      control: {
        type: 'radio'
      },
      options: ['top', 'bottom']
    },
    alignment: {
      control: {
        type: 'radio'
      },
      options: ['start', 'center', 'end']
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Desktop',
      value: '65%',
      color: '#3858E9'
    }, {
      label: 'Mobile',
      value: '35%',
      color: '#80C8FF'
    }],
    shape: 'circle'
  }
}`,...N.parameters?.docs?.source}}},P=[`Default`,`Vertical`,`WithLineChart`,`WithBarChart`,`StandaloneLegendWithChartId`,`InteractiveLegend`,`DashboardExample`,`AlignmentOptions`,`TextOverflow`,`CustomShape`]}));F();export{j as AlignmentOptions,N as CustomShape,A as DashboardExample,x as Default,O as InteractiveLegend,E as StandaloneLegendWithChartId,M as TextOverflow,S as Vertical,w as WithBarChart,C as WithLineChart,P as __namedExportsOrder,_ as default,F as n,h as t};