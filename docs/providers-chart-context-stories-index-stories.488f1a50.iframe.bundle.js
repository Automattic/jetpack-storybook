"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3513],{"../charts/src/providers/chart-context/stories/index.stories.tsx":(A,v,e)=>{e.r(v),e.d(v,{CustomTheme:()=>D,Default:()=>d,JetpackTheme:()=>c,NestedThemes:()=>p,WooTheme:()=>u,__namedExportsOrder:()=>L,default:()=>E});var w=e("../charts/src/components/line-chart/line-chart.tsx"),g=e("../charts/src/components/bar-chart/bar-chart.tsx"),T=e("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),_=e("../charts/src/components/bar-list-chart/bar-list-chart.tsx"),m=e("../charts/src/components/pie-chart/pie-chart.tsx"),r=e("../charts/src/providers/theme/theme-provider.tsx"),C=e("../charts/src/stories/sample-data/index.ts"),t=e("../charts/src/providers/theme/themes.ts"),l=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const E={title:"JS Packages/Charts/Chart Context",parameters:{layout:"centered"}},n=[C._E[0],C._E[1],C._E[2]],o=[{group:"united-states",label:"United States",data:[{date:new Date("2024-01-01"),value:10,label:"Jan 1"},{date:new Date("2024-01-02"),value:20,label:"Jan 2"},{date:new Date("2024-01-03"),value:15,label:"Jan 3"},{date:new Date("2024-01-04"),value:25,label:"Jan 4"},{date:new Date("2024-01-05"),value:30,label:"Jan 5"}]},{group:"united-states",label:"United States comparison",data:[{date:new Date("2024-01-01"),value:1,label:"Jan 1"},{date:new Date("2024-01-02"),value:2,label:"Jan 2"},{date:new Date("2024-01-03"),value:1.5,label:"Jan 3"},{date:new Date("2024-01-04"),value:2.5,label:"Jan 4"},{date:new Date("2024-01-05"),value:3,label:"Jan 5"}],options:{type:"comparison"}},{group:"great-britain",label:"Great Britain",data:[{date:new Date("2024-01-01"),value:8,label:"Jan 1"},{date:new Date("2024-01-02"),value:12,label:"Jan 2"},{date:new Date("2024-01-03"),value:18,label:"Jan 3"},{date:new Date("2024-01-04"),value:22,label:"Jan 4"},{date:new Date("2024-01-05"),value:28,label:"Jan 5"}]},{group:"great-britain",label:"Great Britain comparison",data:[{date:new Date("2024-01-01"),value:.8,label:"Jan 1"},{date:new Date("2024-01-02"),value:1.2,label:"Jan 2"},{date:new Date("2024-01-03"),value:1.8,label:"Jan 3"},{date:new Date("2024-01-04"),value:2.2,label:"Jan 4"},{date:new Date("2024-01-05"),value:2.8,label:"Jan 5"}],options:{type:"comparison"}},{group:"japan",label:"Japan",data:[{date:new Date("2024-01-01"),value:5,label:"Jan 1"},{date:new Date("2024-01-02"),value:8,label:"Jan 2"},{date:new Date("2024-01-03"),value:6,label:"Jan 3"},{date:new Date("2024-01-04"),value:12,label:"Jan 4"},{date:new Date("2024-01-05"),value:16,label:"Jan 5"}]},{group:"japan",label:"Japan comparison",data:[{date:new Date("2024-01-01"),value:.5,label:"Jan 1"},{date:new Date("2024-01-02"),value:.8,label:"Jan 2"},{date:new Date("2024-01-03"),value:.6,label:"Jan 3"},{date:new Date("2024-01-04"),value:1.2,label:"Jan 4"},{date:new Date("2024-01-05"),value:1.6,label:"Jan 5"}],options:{type:"comparison"}}],s=[{label:"United States",value:8e4,valueDisplay:"80K",percentage:65},{label:"Great Britain",value:3e4,valueDisplay:"30K",percentage:25},{label:"Japan",value:22e3,valueDisplay:"22K",percentage:10}],i=[{group:"united-states",label:"Jan 21-Aug 8, 2024",data:[{label:"Organic search",value:3e4},{label:"Affiliates",value:19e3},{label:"Display",value:18e3}]},{group:"great-britain",label:"Jan 21-Aug 8, 2023",data:[{label:"Organic search",value:2e4},{label:"Affiliates",value:15e3},{label:"Display",value:19900}]},{group:"japan",label:"Jan 21-Aug 8, 2022",data:[{label:"Organic search",value:15e3},{label:"Affiliates",value:12e3},{label:"Display",value:14e3}]}],h=[{label:"United States",value:8e4,valueDisplay:"80K",percentage:65},{label:"Great Britain",value:3e4,valueDisplay:"30K",percentage:25},{label:"Japan",value:22e3,valueDisplay:"22K",percentage:10}],b=({lineChartData:P,barChartData:J,pieChartData:x,barListChartData:j,donutChartData:B})=>(0,a.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"4rem",width:"100%"},children:[(0,a.jsx)(w.A,{data:P,width:350,height:250,withGradientFill:!1,withLegendGlyph:!1,withTooltips:!0,margin:{bottom:40}}),(0,a.jsx)(g.A,{data:J,width:350,height:250,withTooltips:!0,showLegend:!0}),(0,a.jsx)(T.A,{data:x,width:350,label:"Semi-Circle Chart",withTooltips:!0,showLegend:!0}),(0,a.jsx)(_.A,{data:j,width:350,height:250,withTooltips:!0}),(0,a.jsx)(m.A,{size:300,data:x,withTooltips:!0,showLegend:!0}),(0,a.jsx)(m.A,{size:300,thickness:.5,data:B,withTooltips:!0,showLegend:!0})]}),d={render:()=>(0,a.jsx)(l.Sx,{children:(0,a.jsx)(b,{lineChartData:o,barChartData:n,pieChartData:s,barListChartData:i,donutChartData:h})})},c={render:()=>(0,a.jsx)(l.Sx,{theme:t.QI,children:(0,a.jsx)(b,{lineChartData:o,barChartData:n,pieChartData:s,barListChartData:i,donutChartData:h})})},u={render:()=>(0,a.jsx)(l.Sx,{theme:t.pk,children:(0,a.jsx)(b,{lineChartData:o,barChartData:n,pieChartData:s,barListChartData:i,donutChartData:h})})},D={render:()=>(0,a.jsx)(l.Sx,{theme:{colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],seriesLineStyles:[{strokeWidth:1,strokeDasharray:"8 8",strokeLinecap:"square"},{strokeDasharray:"5 8",strokeWidth:2,strokeLinecap:"square"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},children:(0,a.jsx)(b,{lineChartData:o,barChartData:n,pieChartData:s,barListChartData:i,donutChartData:h})})},p={render:()=>(0,a.jsx)(l.Sx,{theme:t.pk,children:(0,a.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"4rem",width:"100%"},children:[(0,a.jsx)(r.N,{theme:{colors:["#FF6B6B",...t.pk.colors.slice(1)]},children:(0,a.jsx)(w.A,{data:o,width:350,height:250,withGradientFill:!1,withLegendGlyph:!1,withTooltips:!0,margin:{bottom:40}})}),(0,a.jsx)(r.N,{theme:{colors:["#2ECC71",...t.pk.colors.slice(1)]},children:(0,a.jsx)(g.A,{data:n,width:350,height:250,withTooltips:!0,showLegend:!0})}),(0,a.jsx)(r.N,{theme:{colors:["#E91E63",...t.pk.colors.slice(1)]},children:(0,a.jsx)(T.A,{data:s,width:350,label:"Semi-Circle Chart",withTooltips:!0,showLegend:!0})}),(0,a.jsx)(r.N,{theme:{colors:["#F9CA24",...t.pk.colors.slice(1)]},children:(0,a.jsx)(_.A,{data:i,width:350,height:250,withTooltips:!0})}),(0,a.jsx)(r.N,{theme:{colors:["#F0932B",...t.pk.colors.slice(1)]},children:(0,a.jsx)(m.A,{size:300,data:s,withTooltips:!0,showLegend:!0})}),(0,a.jsx)(r.N,{theme:{colors:["#EB4D4B",...t.pk.colors.slice(1)]},children:(0,a.jsx)(m.A,{size:300,thickness:.5,data:h,withTooltips:!0,showLegend:!0})})]})})},L=["Default","JetpackTheme","WooTheme","CustomTheme","NestedThemes"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <GlobalChartsProvider>
            <ChartGrid lineChartData={lineData} barChartData={barData} pieChartData={pieData} barListChartData={barListData} donutChartData={donutData} />
        </GlobalChartsProvider>
}`,...d.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <GlobalChartsProvider theme={jetpackTheme}>
            <ChartGrid lineChartData={lineData} barChartData={barData} pieChartData={pieData} barListChartData={barListData} donutChartData={donutData} />
        </GlobalChartsProvider>
}`,...c.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <GlobalChartsProvider theme={wooTheme}>
            <ChartGrid lineChartData={lineData} barChartData={barData} pieChartData={pieData} barListChartData={barListData} donutChartData={donutData} />
        </GlobalChartsProvider>
}`,...u.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <GlobalChartsProvider theme={{
    colors: ['#073B3A', '#0B6E4F', '#08A045', '#6BBF59', '#DDB771'],
    seriesLineStyles: [{
      strokeWidth: 1,
      strokeDasharray: '8 8',
      strokeLinecap: 'square'
    }, {
      strokeDasharray: '5 8',
      strokeWidth: 2,
      strokeLinecap: 'square'
    }],
    gridStyles: {
      stroke: '#ffe3e3',
      strokeWidth: 2
    }
  }}>
            <ChartGrid lineChartData={lineData} barChartData={barData} pieChartData={pieData} barListChartData={barListData} donutChartData={donutData} />
        </GlobalChartsProvider>
}`,...D.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <GlobalChartsProvider theme={wooTheme}>
                <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '4rem',
        width: '100%'
      }}>
                    <ThemeProvider theme={{
          colors: ['#FF6B6B', ...wooTheme.colors.slice(1)]
        }}>
                        <LineChart data={lineData} width={350} height={250} withGradientFill={false} withLegendGlyph={false} withTooltips={true} margin={{
            bottom: 40
          }} />
                    </ThemeProvider>

                    <ThemeProvider theme={{
          colors: ['#2ECC71', ...wooTheme.colors.slice(1)]
        }}>
                        <BarChart data={barData} width={350} height={250} withTooltips={true} showLegend={true} />
                    </ThemeProvider>

                    <ThemeProvider theme={{
          colors: ['#E91E63', ...wooTheme.colors.slice(1)]
        }}>
                        <PieSemiCircleChart data={pieData} width={350} label="Semi-Circle Chart" withTooltips={true} showLegend={true} />
                    </ThemeProvider>

                    <ThemeProvider theme={{
          colors: ['#F9CA24', ...wooTheme.colors.slice(1)]
        }}>
                        <BarListChart data={barListData} width={350} height={250} withTooltips={true} />
                    </ThemeProvider>

                    <ThemeProvider theme={{
          colors: ['#F0932B', ...wooTheme.colors.slice(1)]
        }}>
                        <PieChart size={300} data={pieData} withTooltips={true} showLegend={true} />
                    </ThemeProvider>

                    <ThemeProvider theme={{
          colors: ['#EB4D4B', ...wooTheme.colors.slice(1)]
        }}>
                        <PieChart size={300} thickness={0.5} data={donutData} withTooltips={true} showLegend={true} />
                    </ThemeProvider>
                </div>
            </GlobalChartsProvider>;
  }
}`,...p.parameters?.docs?.source}}}}}]);
