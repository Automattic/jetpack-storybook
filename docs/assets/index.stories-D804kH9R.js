import{n as e,o as t,r as n}from"./rolldown-runtime-DAXXjFlN.js";import{t as r}from"./react-_iuu1rfF.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{Et as a}from"./esm-DcGP48K6.js";import{t as o}from"./providers-BWq8Lvkg.js";import{n as s}from"./line-chart-QfMg7Wjs.js";import{c,i as l,l as u}from"./chart-decorator-DVAsQbCt.js";import{t as d}from"./stories-BxFLayIC.js";import{h as f,m as p}from"./chart-layout-BEHjIyGR.js";import{K as m,Kt as h,t as g}from"./build-module-DnRKAfXV.js";import{t as _}from"./line-chart-CaMds6iM.js";import{n as v}from"./bar-chart-yeG1WS1x.js";import{t as y}from"./bar-chart-D7N8ydCK.js";import{r as b,t as x}from"./pie-chart-CAASFZQe.js";var ee=n({AlignmentOptions:()=>q,ComparisonItem:()=>X,ComparisonSeriesItems:()=>Z,ControlledItem:()=>W,CustomShape:()=>Y,DashboardExample:()=>K,Default:()=>O,InteractiveLegend:()=>F,ProgrammaticVisibility:()=>z,StandaloneLegendWithChartId:()=>N,TextOverflow:()=>J,Vertical:()=>k,WithBarChart:()=>j,WithLineChart:()=>A,__namedExportsOrder:()=>Q,default:()=>w}),S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{g(),S=t(r(),1),y(),_(),x(),o(),d(),f(),C=i(),w={title:`JS Packages/Charts Library/Components/Legend`,component:p,parameters:{layout:`centered`},decorators:[l],argTypes:{...u}},T=[{label:`Desktop`,data:[{date:new Date(`2023-01-01`),value:100},{date:new Date(`2023-01-02`),value:150},{date:new Date(`2023-01-03`),value:120}]},{label:`Mobile`,data:[{date:new Date(`2023-01-01`),value:80},{date:new Date(`2023-01-02`),value:90},{date:new Date(`2023-01-03`),value:110}]}],E=[{label:`Q1 Sales`,data:[{label:`Jan`,value:1e3},{label:`Feb`,value:1200},{label:`Mar`,value:1100}]},{label:`Q2 Sales`,data:[{label:`Jan`,value:800},{label:`Feb`,value:900},{label:`Mar`,value:1e3}]}],D=[{label:`Desktop`,value:65},{label:`Mobile`,value:35}],O={render:e=>{let{themeName:t,accentColor:n,...r}=e;return(0,C.jsx)(p,{...r})},args:{...c,items:[{label:`Desktop`,value:`65%`,color:`#3858E9`},{label:`Mobile`,value:`35%`,color:`#80C8FF`}]}},k={render:e=>{let{themeName:t,accentColor:n,...r}=e;return(0,C.jsx)(p,{...r})},args:{...c,items:[{label:`Desktop`,value:`65%`,color:`#3858E9`},{label:`Mobile`,value:`35%`,color:`#80C8FF`},{label:`Tablet`,value:`12%`,color:`#44B556`}],orientation:`vertical`}},A={render:()=>(0,C.jsx)(s,{data:T,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1,chartId:`legend-line-chart`,children:(0,C.jsx)(s.Legend,{})})},j={render:()=>(0,C.jsx)(v,{data:E,width:400,height:300,chartId:`legend-bar-chart`,children:(0,C.jsx)(v.Legend,{})})},M=()=>(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,C.jsx)(s,{chartId:`standalone-legend-chart`,data:T,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,C.jsx)(p,{chartId:`standalone-legend-chart`,shape:`line`})]}),N={render:()=>(0,C.jsx)(M,{})},P=()=>(0,C.jsx)(s,{chartId:`interactive-legend-demo`,data:T,showLegend:!0,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1,legend:{interactive:!0}}),F={render:()=>(0,C.jsx)(P,{})},I=`programmatic-visibility-demo`,L=T.map(e=>e.label),R=()=>{let{isSeriesVisible:e,toggleSeriesVisibility:t}=a(),n=L.every(t=>e(I,t)),r=L.every(t=>!e(I,t)),i=(0,S.useCallback)((n,r)=>{n.forEach(n=>{e(I,n)!==r&&t(I,n)})},[e,t]),o=(0,S.useCallback)(()=>i([`Desktop`],!1),[i]),c=(0,S.useCallback)(()=>i(L,!1),[i]),l=(0,S.useCallback)(()=>i(L,!0),[i]);return(0,C.jsxs)(m,{direction:`column`,gap:`md`,children:[(0,C.jsxs)(m,{direction:`row`,gap:`sm`,children:[(0,C.jsx)(h,{variant:`outline`,disabled:!e(I,`Desktop`),onClick:o,children:`Hide Desktop`}),(0,C.jsx)(h,{variant:`outline`,disabled:r,onClick:c,children:`Hide all`}),(0,C.jsx)(h,{variant:`outline`,disabled:n,onClick:l,children:`Show all`})]}),(0,C.jsx)(s,{chartId:I,data:T,showLegend:!0,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1,legend:{interactive:!1},rescaleYOnVisibilityChange:!1})]})},z={render:()=>(0,C.jsx)(R,{})},B=`#757575`,V=[[90,120,130],[70,85,80]],H=T.map((e,t)=>({label:`${e.label} (previous period)`,data:e.data.map((e,n)=>({...e,value:V[t][n]})),options:{stroke:B,seriesLineStyle:{strokeDasharray:`4 4`}}})),U=()=>{let[e,t]=(0,S.useState)(!1),n=(0,S.useCallback)(()=>t(e=>!e),[]),{getElementStyles:r}=a();return(0,C.jsxs)(m,{direction:`column`,gap:`md`,children:[(0,C.jsx)(s,{chartId:`controlled-item-demo`,data:e?[...T,...H]:T,showLegend:!1,width:600,height:300,withGradientFill:!1}),(0,C.jsx)(p,{chartId:`controlled-item-demo`,interactive:!0,shape:`line`,items:[...T.map((e,t)=>({label:e.label,color:r({index:t,data:e}).color})),{label:`Previous period`,color:B,shapeStyle:{strokeDasharray:`4 4`},pressed:e,onToggle:n}]})]})},W={render:()=>(0,C.jsx)(U,{}),parameters:{docs:{description:{story:"The Previous period item is not a series. It reports its pressed state and calls `onToggle` instead of changing series visibility, so the consumer decides what it controls: here, whether the dashed previous-period lines are passed to the chart."}}}},G=()=>(0,C.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 300px`,gap:`20px`,padding:`20px`,backgroundColor:`#f5f5f5`,borderRadius:`8px`},children:[(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,C.jsxs)(`div`,{style:{backgroundColor:`white`,padding:`20px`,borderRadius:`4px`},children:[(0,C.jsx)(`h3`,{style:{margin:`0 0 20px 0`},children:`Revenue Trends`}),(0,C.jsx)(s,{chartId:`dashboard-revenue`,data:T,showLegend:!1,height:300,withGradientFill:!1,withLegendGlyph:!1})]}),(0,C.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`20px`},children:[(0,C.jsxs)(`div`,{style:{backgroundColor:`white`,padding:`20px`,borderRadius:`4px`},children:[(0,C.jsx)(`h3`,{style:{margin:`0 0 20px 0`},children:`Sales by Quarter`}),(0,C.jsx)(v,{chartId:`dashboard-sales`,data:E,showLegend:!1,height:300})]}),(0,C.jsxs)(`div`,{style:{backgroundColor:`white`,padding:`20px`,borderRadius:`4px`},children:[(0,C.jsx)(`h3`,{style:{margin:`0 0 20px 0`},children:`Device Distribution`}),(0,C.jsx)(b,{chartId:`dashboard-devices`,data:D,showLegend:!1,height:300})]})]})]}),(0,C.jsxs)(`aside`,{style:{backgroundColor:`white`,padding:`20px`,borderRadius:`4px`},children:[(0,C.jsx)(`h3`,{style:{margin:`0 0 20px 0`},children:`Legend`}),(0,C.jsxs)(`div`,{style:{marginBottom:`20px`},children:[(0,C.jsx)(`h4`,{style:{margin:`0 0 10px 0`,fontSize:`14px`,color:`#666`},children:`Revenue Trends`}),(0,C.jsx)(p,{chartId:`dashboard-revenue`,orientation:`vertical`,shape:`line`})]}),(0,C.jsxs)(`div`,{style:{marginBottom:`20px`},children:[(0,C.jsx)(`h4`,{style:{margin:`0 0 10px 0`,fontSize:`14px`,color:`#666`},children:`Sales by Quarter`}),(0,C.jsx)(p,{chartId:`dashboard-sales`,orientation:`vertical`})]}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`h4`,{style:{margin:`0 0 10px 0`,fontSize:`14px`,color:`#666`},children:`Device Distribution`}),(0,C.jsx)(p,{chartId:`dashboard-devices`,orientation:`vertical`,shape:`circle`})]})]})]}),K={render:()=>(0,C.jsx)(G,{}),parameters:{layout:`fullscreen`}},q={args:{items:[{label:`Series 1`,value:`25%`,color:`#3858E9`},{label:`Series 2`,value:`35%`,color:`#80C8FF`},{label:`Series 3`,value:`40%`,color:`#44B556`}],alignment:`start`}},J={render:e=>{let{themeName:t,accentColor:n,...r}=e,i=e.labelStyles?.maxWidth,a=e.labelStyles?.textOverflow;return(0,C.jsxs)(`div`,{style:e.orientation===`horizontal`?{width:`600px`,border:`1px solid #ddd`,padding:`20px`}:{width:`350px`,border:`1px solid #ddd`,padding:`20px`},children:[(0,C.jsx)(`h4`,{style:{marginBottom:`10px`},children:i?`Legend with ${a===`ellipsis`?`Ellipsis`:`Text Wrapping`} (maxWidth: ${i})`:`Legend without maxWidth constraint`}),(0,C.jsx)(p,{...r})]})},args:{items:[{label:`Very Long Legend Item Label That Demonstrates Text Overflow Behavior`,value:`25%`,color:`#3858E9`},{label:`Another Extremely Long Label for Testing Different Display Options`,value:`35%`,color:`#80C8FF`},{label:`Short Label`,value:`15%`,color:`#44B556`},{label:`Medium Length Label Text`,value:`25%`,color:`#FFC107`}],orientation:`horizontal`,labelStyles:{maxWidth:`150px`,textOverflow:`wrap`},position:`bottom`,alignment:`center`},argTypes:{orientation:{control:{type:`radio`},options:[`horizontal`,`vertical`]},labelStyles:{control:`object`},position:{control:{type:`radio`},options:[`top`,`bottom`]},alignment:{control:{type:`radio`},options:[`start`,`center`,`end`]}}},Y={args:{items:[{label:`Desktop`,value:`65%`,color:`#3858E9`},{label:`Mobile`,value:`35%`,color:`#80C8FF`}],shape:`circle`}},X={render:()=>(0,C.jsx)(s,{withGradientFill:!1,width:600,height:300,data:[{...T[0],group:`desktop`},{...T[1],label:`Previous desktop`,group:`desktop`,options:{type:`comparison`}}],legend:{collapseGroups:!0,comparisonItem:`Desktop`,interactive:!0},children:(0,C.jsx)(s.Legend,{interactive:!0})}),parameters:{docs:{description:{story:`The comparison item deliberately shares the metric label. Only the solid metric item toggles the two series; the dashed comparison item stays visible.`}}}},Z={render:()=>(0,C.jsx)(s,{withGradientFill:!1,width:600,height:300,data:[{...T[0],group:`desktop`},{label:`Previous desktop`,group:`desktop`,options:{type:`comparison`},data:[{date:new Date(`2023-01-01`),value:90},{date:new Date(`2023-01-02`),value:110},{date:new Date(`2023-01-03`),value:130}]},{...T[1],group:`mobile`},{label:`Previous mobile`,group:`mobile`,options:{type:`comparison`},data:[{date:new Date(`2023-01-01`),value:70},{date:new Date(`2023-01-02`),value:95},{date:new Date(`2023-01-03`),value:85}]}],legend:{collapseGroups:!0,comparisonSeriesItems:e=>`${e} (Prev. period)`,interactive:!0},children:(0,C.jsx)(s.Legend,{interactive:!0})}),parameters:{docs:{description:{story:"Each metric gets its own static comparison item, named by `legend.comparisonSeriesItems`. Hiding **Mobile** also removes **Mobile (Prev. period)**."}}}},Q=[`Default`,`Vertical`,`WithLineChart`,`WithBarChart`,`StandaloneLegendWithChartId`,`InteractiveLegend`,`ProgrammaticVisibility`,`ControlledItem`,`DashboardExample`,`AlignmentOptions`,`TextOverflow`,`CustomShape`,`ComparisonItem`,`ComparisonSeriesItems`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <LineChart data={lineChartData} width={600} height={300} withGradientFill={false} withLegendGlyph={false} chartId="legend-line-chart">
            <LineChart.Legend />
        </LineChart>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <BarChart data={barChartData} width={400} height={300} chartId="legend-bar-chart">
            <BarChart.Legend />
        </BarChart>
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <StandaloneLegendWithChartIdComponent />
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveLegendComponent />
}`,...F.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <ProgrammaticVisibilityComponent />
}`,...z.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledItemComponent />,
  parameters: {
    docs: {
      description: {
        story: 'The Previous period item is not a series. It reports its pressed state and calls \`onToggle\` instead of changing series visibility, so the consumer decides what it controls: here, whether the dashed previous-period lines are passed to the chart.'
      }
    }
  }
}`,...W.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <DashboardWithCentralizedLegend />,
  parameters: {
    layout: 'fullscreen'
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <LineChart withGradientFill={false} width={600} height={300} data={[{
    ...lineChartData[0],
    group: 'desktop'
  }, {
    ...lineChartData[1],
    label: 'Previous desktop',
    group: 'desktop',
    options: {
      type: 'comparison'
    }
  }]} legend={{
    collapseGroups: true,
    comparisonItem: 'Desktop',
    interactive: true
  }}>
            <LineChart.Legend interactive />
        </LineChart>,
  parameters: {
    docs: {
      description: {
        story: 'The comparison item deliberately shares the metric label. Only the solid metric item toggles the two series; the dashed comparison item stays visible.'
      }
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <LineChart withGradientFill={false} width={600} height={300} data={[{
    ...lineChartData[0],
    group: 'desktop'
  }, {
    label: 'Previous desktop',
    group: 'desktop',
    options: {
      type: 'comparison'
    },
    data: [{
      date: new Date('2023-01-01'),
      value: 90
    }, {
      date: new Date('2023-01-02'),
      value: 110
    }, {
      date: new Date('2023-01-03'),
      value: 130
    }]
  }, {
    ...lineChartData[1],
    group: 'mobile'
  }, {
    label: 'Previous mobile',
    group: 'mobile',
    options: {
      type: 'comparison'
    },
    data: [{
      date: new Date('2023-01-01'),
      value: 70
    }, {
      date: new Date('2023-01-02'),
      value: 95
    }, {
      date: new Date('2023-01-03'),
      value: 85
    }]
  }]} legend={{
    collapseGroups: true,
    comparisonSeriesItems: label => \`\${label} (Prev. period)\`,
    interactive: true
  }}>
            <LineChart.Legend interactive />
        </LineChart>,
  parameters: {
    docs: {
      description: {
        story: 'Each metric gets its own static comparison item, named by \`legend.comparisonSeriesItems\`. Hiding **Mobile** also removes **Mobile (Prev. period)**.'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}}}));$();export{q as AlignmentOptions,X as ComparisonItem,Z as ComparisonSeriesItems,W as ControlledItem,Y as CustomShape,K as DashboardExample,O as Default,F as InteractiveLegend,z as ProgrammaticVisibility,N as StandaloneLegendWithChartId,J as TextOverflow,k as Vertical,j as WithBarChart,A as WithLineChart,Q as __namedExportsOrder,w as default,$ as n,ee as t};