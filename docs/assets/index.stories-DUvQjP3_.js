import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{t as r}from"./react-DVCOKQW8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{E as a,t as o}from"./build-module-DA0JNxL8.js";import{Pa as s,ka as c}from"./iframe-BRmrT7YP.js";import{Ht as l,t as u}from"./providers-DKU8ktQ0.js";import{n as d}from"./line-chart-PcKfuF8E.js";import{c as f,i as p,s as m}from"./chart-decorator-CBQawEJu.js";import{t as h}from"./stories-Bc0u_k2x.js";import{h as g,m as _}from"./chart-layout-DCssef5X.js";import{t as v}from"./line-chart-DdliU6Du.js";import{n as y}from"./bar-chart-1CiaAgdO.js";import{t as b}from"./bar-chart-BQ0hlXro.js";import{r as x,t as S}from"./pie-chart-etOKdxFj.js";var C=e({AlignmentOptions:()=>W,CustomShape:()=>K,DashboardExample:()=>U,Default:()=>A,InteractiveLegend:()=>L,ProgrammaticVisibility:()=>V,StandaloneLegendWithChartId:()=>F,TextOverflow:()=>G,Vertical:()=>j,WithBarChart:()=>N,WithLineChart:()=>M,__namedExportsOrder:()=>q,default:()=>E}),w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J=n((()=>{o(),c(),w=t(r(),1),b(),v(),S(),u(),h(),g(),T=i(),E={title:`JS Packages/Charts Library/Components/Legend`,component:_,parameters:{layout:`centered`},decorators:[p],argTypes:{...f}},D=[{label:`Desktop`,data:[{date:new Date(`2023-01-01`),value:100},{date:new Date(`2023-01-02`),value:150},{date:new Date(`2023-01-03`),value:120}]},{label:`Mobile`,data:[{date:new Date(`2023-01-01`),value:80},{date:new Date(`2023-01-02`),value:90},{date:new Date(`2023-01-03`),value:110}]}],O=[{label:`Q1 Sales`,data:[{label:`Jan`,value:1e3},{label:`Feb`,value:1200},{label:`Mar`,value:1100}]},{label:`Q2 Sales`,data:[{label:`Jan`,value:800},{label:`Feb`,value:900},{label:`Mar`,value:1e3}]}],k=[{label:`Desktop`,value:65},{label:`Mobile`,value:35}],A={render:e=>{let{themeName:t,accentColor:n,...r}=e;return(0,T.jsx)(_,{...r})},args:{...m,items:[{label:`Desktop`,value:`65%`,color:`#3858E9`},{label:`Mobile`,value:`35%`,color:`#80C8FF`}]}},j={render:e=>{let{themeName:t,accentColor:n,...r}=e;return(0,T.jsx)(_,{...r})},args:{...m,items:[{label:`Desktop`,value:`65%`,color:`#3858E9`},{label:`Mobile`,value:`35%`,color:`#80C8FF`},{label:`Tablet`,value:`12%`,color:`#44B556`}],orientation:`vertical`}},M={render:()=>(0,T.jsx)(d,{data:D,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1,chartId:`legend-line-chart`,children:(0,T.jsx)(d.Legend,{})})},N={render:()=>(0,T.jsx)(y,{data:O,width:400,height:300,chartId:`legend-bar-chart`,children:(0,T.jsx)(y.Legend,{})})},P=()=>(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,T.jsx)(d,{chartId:`standalone-legend-chart`,data:D,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,T.jsx)(_,{chartId:`standalone-legend-chart`,shape:`line`})]}),F={render:()=>(0,T.jsx)(P,{})},I=()=>(0,T.jsx)(d,{chartId:`interactive-legend-demo`,data:D,showLegend:!0,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1,legend:{interactive:!0}}),L={render:()=>(0,T.jsx)(I,{})},R=`programmatic-visibility-demo`,z=D.map(e=>e.label),B=()=>{let{isSeriesVisible:e,toggleSeriesVisibility:t}=l(),n=z.every(t=>e(R,t)),r=z.every(t=>!e(R,t)),i=(0,w.useCallback)((n,r)=>{n.forEach(n=>{e(R,n)!==r&&t(R,n)})},[e,t]),o=(0,w.useCallback)(()=>i([`Desktop`],!1),[i]),c=(0,w.useCallback)(()=>i(z,!1),[i]),u=(0,w.useCallback)(()=>i(z,!0),[i]);return(0,T.jsxs)(s,{direction:`column`,gap:`md`,children:[(0,T.jsxs)(s,{direction:`row`,gap:`sm`,children:[(0,T.jsx)(a,{variant:`secondary`,disabled:!e(R,`Desktop`),onClick:o,children:`Hide Desktop`}),(0,T.jsx)(a,{variant:`secondary`,disabled:r,onClick:c,children:`Hide all`}),(0,T.jsx)(a,{variant:`secondary`,disabled:n,onClick:u,children:`Show all`})]}),(0,T.jsx)(d,{chartId:R,data:D,showLegend:!0,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1,legend:{interactive:!1},rescaleYOnVisibilityChange:!1})]})},V={render:()=>(0,T.jsx)(B,{})},H=()=>(0,T.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 300px`,gap:`20px`,padding:`20px`,backgroundColor:`#f5f5f5`,borderRadius:`8px`},children:[(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,T.jsxs)(`div`,{style:{backgroundColor:`white`,padding:`20px`,borderRadius:`4px`},children:[(0,T.jsx)(`h3`,{style:{margin:`0 0 20px 0`},children:`Revenue Trends`}),(0,T.jsx)(d,{chartId:`dashboard-revenue`,data:D,showLegend:!1,height:300,withGradientFill:!1,withLegendGlyph:!1})]}),(0,T.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`20px`},children:[(0,T.jsxs)(`div`,{style:{backgroundColor:`white`,padding:`20px`,borderRadius:`4px`},children:[(0,T.jsx)(`h3`,{style:{margin:`0 0 20px 0`},children:`Sales by Quarter`}),(0,T.jsx)(y,{chartId:`dashboard-sales`,data:O,showLegend:!1,height:300})]}),(0,T.jsxs)(`div`,{style:{backgroundColor:`white`,padding:`20px`,borderRadius:`4px`},children:[(0,T.jsx)(`h3`,{style:{margin:`0 0 20px 0`},children:`Device Distribution`}),(0,T.jsx)(x,{chartId:`dashboard-devices`,data:k,showLegend:!1,height:300})]})]})]}),(0,T.jsxs)(`aside`,{style:{backgroundColor:`white`,padding:`20px`,borderRadius:`4px`},children:[(0,T.jsx)(`h3`,{style:{margin:`0 0 20px 0`},children:`Legend`}),(0,T.jsxs)(`div`,{style:{marginBottom:`20px`},children:[(0,T.jsx)(`h4`,{style:{margin:`0 0 10px 0`,fontSize:`14px`,color:`#666`},children:`Revenue Trends`}),(0,T.jsx)(_,{chartId:`dashboard-revenue`,orientation:`vertical`,shape:`line`})]}),(0,T.jsxs)(`div`,{style:{marginBottom:`20px`},children:[(0,T.jsx)(`h4`,{style:{margin:`0 0 10px 0`,fontSize:`14px`,color:`#666`},children:`Sales by Quarter`}),(0,T.jsx)(_,{chartId:`dashboard-sales`,orientation:`vertical`})]}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`h4`,{style:{margin:`0 0 10px 0`,fontSize:`14px`,color:`#666`},children:`Device Distribution`}),(0,T.jsx)(_,{chartId:`dashboard-devices`,orientation:`vertical`,shape:`circle`})]})]})]}),U={render:()=>(0,T.jsx)(H,{}),parameters:{layout:`fullscreen`}},W={args:{items:[{label:`Series 1`,value:`25%`,color:`#3858E9`},{label:`Series 2`,value:`35%`,color:`#80C8FF`},{label:`Series 3`,value:`40%`,color:`#44B556`}],alignment:`start`}},G={render:e=>{let{themeName:t,accentColor:n,...r}=e,i=e.labelStyles?.maxWidth,a=e.labelStyles?.textOverflow;return(0,T.jsxs)(`div`,{style:e.orientation===`horizontal`?{width:`600px`,border:`1px solid #ddd`,padding:`20px`}:{width:`350px`,border:`1px solid #ddd`,padding:`20px`},children:[(0,T.jsx)(`h4`,{style:{marginBottom:`10px`},children:i?`Legend with ${a===`ellipsis`?`Ellipsis`:`Text Wrapping`} (maxWidth: ${i})`:`Legend without maxWidth constraint`}),(0,T.jsx)(_,{...r})]})},args:{items:[{label:`Very Long Legend Item Label That Demonstrates Text Overflow Behavior`,value:`25%`,color:`#3858E9`},{label:`Another Extremely Long Label for Testing Different Display Options`,value:`35%`,color:`#80C8FF`},{label:`Short Label`,value:`15%`,color:`#44B556`},{label:`Medium Length Label Text`,value:`25%`,color:`#FFC107`}],orientation:`horizontal`,labelStyles:{maxWidth:`150px`,textOverflow:`wrap`},position:`bottom`,alignment:`center`},argTypes:{orientation:{control:{type:`radio`},options:[`horizontal`,`vertical`]},labelStyles:{control:`object`},position:{control:{type:`radio`},options:[`top`,`bottom`]},alignment:{control:{type:`radio`},options:[`start`,`center`,`end`]}}},K={args:{items:[{label:`Desktop`,value:`65%`,color:`#3858E9`},{label:`Mobile`,value:`35%`,color:`#80C8FF`}],shape:`circle`}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <LineChart data={lineChartData} width={600} height={300} withGradientFill={false} withLegendGlyph={false} chartId="legend-line-chart">
            <LineChart.Legend />
        </LineChart>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <BarChart data={barChartData} width={400} height={300} chartId="legend-bar-chart">
            <BarChart.Legend />
        </BarChart>
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <StandaloneLegendWithChartIdComponent />
}`,...F.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveLegendComponent />
}`,...L.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <ProgrammaticVisibilityComponent />
}`,...V.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <DashboardWithCentralizedLegend />,
  parameters: {
    layout: 'fullscreen'
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q=[`Default`,`Vertical`,`WithLineChart`,`WithBarChart`,`StandaloneLegendWithChartId`,`InteractiveLegend`,`ProgrammaticVisibility`,`DashboardExample`,`AlignmentOptions`,`TextOverflow`,`CustomShape`]}));J();export{W as AlignmentOptions,K as CustomShape,U as DashboardExample,A as Default,L as InteractiveLegend,V as ProgrammaticVisibility,F as StandaloneLegendWithChartId,G as TextOverflow,j as Vertical,N as WithBarChart,M as WithLineChart,q as __namedExportsOrder,E as default,J as n,C as t};