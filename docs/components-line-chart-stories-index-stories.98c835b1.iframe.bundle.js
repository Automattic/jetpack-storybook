"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4722],{"../charts/src/components/line-chart/stories/index.stories.tsx":(T,s,t)=>{t.r(s),t.d(s,{BrokenLine:()=>h,CurveTypes:()=>_,CustomDimensions:()=>u,CustomLegendPositioning:()=>o,DateStringFormats:()=>S,Default:()=>r,ErrorStates:()=>L,FixedDimensions:()=>l,GradientFilled:()=>m,SingleSeries:()=>g,SmartFormatting:()=>d,WithCompositionLegend:()=>y,WithLegend:()=>p,WithPointerEvents:()=>w,WithoutSmoothing:()=>v,__namedExportsOrder:()=>A,default:()=>x});var i=t("../charts/src/stories/legend-config.tsx"),a=t("../charts/src/components/line-chart/line-chart.tsx"),D=t("../charts/src/components/line-chart/stories/config.tsx"),b=t("../charts/src/components/line-chart/stories/large-values-sample.ts"),C=t("../charts/src/components/line-chart/stories/sample-data.ts"),f=t("../charts/src/components/line-chart/stories/site-traffic-sample.ts"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const x={...D.N,title:"JS Packages/Charts/Types/Line Chart",argTypes:{...D.N.argTypes,...i.r}},n=c=>(0,e.jsx)(a.A,{...c}),r=n.bind({});r.args={...D.p};const g=n.bind({});g.args={data:[C.A[0]]};const p=n.bind({});p.args={...D.p,showLegend:!0};const o=n.bind({});o.args={data:C.A,showLegend:!0,height:400,legendAlignmentHorizontal:"left",legendAlignmentVertical:"top",legendOrientation:"horizontal",withLegendGlyph:!0},o.parameters={docs:{description:{story:"Line chart with top-left positioned horizontal legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with temperature data for London, Canberra, and Mars."}}};const y={render:()=>(0,e.jsx)("div",{style:{width:"600px",height:"400px"},children:(0,e.jsx)(a.A,{data:f.A,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1,children:(0,e.jsx)(a.A.Legend,{orientation:"horizontal",alignmentHorizontal:"center",alignmentVertical:"bottom"})})}),parameters:{docs:{description:{story:"Legend used with LineChart using the composition API, positioned below the chart."}}}},u=n.bind({});u.args={width:800,height:400,data:C.A};const l=n.bind({});l.args={width:800,height:400,data:C.A,withTooltips:!0},l.parameters={docs:{description:{story:"Line chart with fixed dimensions that override the responsive behavior."}}};const m=n.bind({});m.args={...r.args,margin:void 0,data:f.A,withGradientFill:!0,options:{axis:{y:{orientation:"right"}}}};const L={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Empty Data"}),(0,e.jsx)(a.A,{width:300,height:200,data:[],withGradientFill:!1,withLegendGlyph:!1})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Invalid Date Values"}),(0,e.jsx)(a.A,{width:300,height:200,data:[{label:"Invalid Dates",data:[{date:new Date("invalid"),value:10},{date:new Date("2024-01-02"),value:20}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Invalid Values"}),(0,e.jsx)(a.A,{width:300,height:200,data:[{label:"Invalid Values",data:[{date:new Date("2024-01-01"),value:NaN},{date:new Date("2024-01-02"),value:null}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Single Data Point"}),(0,e.jsx)(a.A,{width:300,height:200,data:[{label:"Single Point",data:[{date:new Date("2024-01-01"),value:100}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]})]}),parameters:{docs:{description:{story:"Examples of how the line chart handles various error states and edge cases."}}}},v=n.bind({});v.args={...r.args,smoothing:!1};const w=n.bind({});w.args={...r.args,onPointerDown:({datum:c})=>alert("Pointer down:"+JSON.stringify(c))};const _={render:()=>{const c=[{label:"Sample Series",data:[{date:new Date("2024-01-01"),value:10},{date:new Date("2024-01-02"),value:90},{date:new Date("2024-01-03"),value:85},{date:new Date("2024-01-04"),value:82},{date:new Date("2024-01-05"),value:5},{date:new Date("2024-01-06"),value:8},{date:new Date("2024-01-07"),value:10}],options:{}}];return(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Linear Curve"}),(0,e.jsx)(a.A,{width:300,height:200,data:c,curveType:"linear",withGradientFill:!1,withLegendGlyph:!1})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Smooth Curve (Catmull-Rom)"}),(0,e.jsx)(a.A,{width:300,height:200,data:c,curveType:"smooth",withGradientFill:!1,withLegendGlyph:!1})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Monotone X Curve"}),(0,e.jsx)(a.A,{width:300,height:200,data:c,curveType:"monotone",withGradientFill:!1,withLegendGlyph:!1})]})]})},parameters:{docs:{description:{story:"Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points."}}}},d=n.bind({});d.args={data:b.A,withGradientFill:!1,smoothing:!0,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}}},d.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const h=n.bind({});h.args={...r.args,margin:{bottom:40},data:[{...f.A[0],label:"Vistors to compare",options:{...f.A[0].options,seriesLineStyle:{strokeDasharray:"5 5 1"},legendShapeStyle:{strokeDasharray:"5 5 1"}}},f.A[1]]},h.parameters={docs:{description:{story:"Demonstrates the option of setting a seriesLineStyle to a dash array."}}};const S={render:()=>(0,e.jsx)(a.A,{data:[{label:"String Dates",data:[{dateString:"2024-01-01",value:10},{dateString:"2024-01-02",value:20},{dateString:"2024-01-03 00:00:00",value:15},{dateString:"2024-01-04",value:25},{dateString:"2024-01-05 00:00",value:30}],options:{}}],withGradientFill:!1,withLegendGlyph:!1}),parameters:{docs:{description:{story:`Demonstrates the line chart's ability to handle various date string formats and mixed date types. All dates are converted to local timezone. The chart can process:
- Simple date strings (YYYY-MM-DD)
- Date with time (YYYY-MM-DD 00:00:00)
- Date with time (YYYY-MM-DD 00:00)
- ISO format (YYYY-MM-DDT00:00:00)
- UTC format (YYYY-MM-DDT00:00:00Z)
- Timezone offset (YYYY-MM-DDT00:00:00\xB1HH:mm)
`}}}},A=["Default","SingleSeries","WithLegend","CustomLegendPositioning","WithCompositionLegend","CustomDimensions","FixedDimensions","GradientFilled","ErrorStates","WithoutSmoothing","WithPointerEvents","CurveTypes","SmartFormatting","BrokenLine","DateStringFormats"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...r.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...g.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...p.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...o.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '600px',
    height: '400px'
  }}>
            <LineChart data={webTrafficData} width={600} height={300} withGradientFill={false} withLegendGlyph={false}>
                <LineChart.Legend orientation="horizontal" alignmentHorizontal="center" alignmentVertical="bottom" />
            </LineChart>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with LineChart using the composition API, positioned below the chart.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...u.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...l.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...m.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Empty Data</h3>
                <LineChart width={300} height={200} data={[]} withGradientFill={false} withLegendGlyph={false} />
            </div>
            <div>
                <h3>Invalid Date Values</h3>
                <LineChart width={300} height={200} data={[{
        label: 'Invalid Dates',
        data: [{
          date: new Date('invalid'),
          value: 10
        }, {
          date: new Date('2024-01-02'),
          value: 20
        }],
        options: {}
      }]} withGradientFill={false} withLegendGlyph={false} />
            </div>
            <div>
                <h3>Invalid Values</h3>
                <LineChart width={300} height={200} data={[{
        label: 'Invalid Values',
        data: [{
          date: new Date('2024-01-01'),
          value: NaN
        }, {
          date: new Date('2024-01-02'),
          value: null as number | null
        }],
        options: {}
      }]} withGradientFill={false} withLegendGlyph={false} />
            </div>
            <div>
                <h3>Single Data Point</h3>
                <LineChart width={300} height={200} data={[{
        label: 'Single Point',
        data: [{
          date: new Date('2024-01-01'),
          value: 100
        }],
        options: {}
      }]} withGradientFill={false} withLegendGlyph={false} />
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of how the line chart handles various error states and edge cases.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...v.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...w.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    // Create sample data that highlights the difference between curve types
    // Monotone X will prevent overshooting on steep changes followed by gradual changes
    const curveData = [{
      label: 'Sample Series',
      data: [{
        date: new Date('2024-01-01'),
        value: 10
      }, {
        date: new Date('2024-01-02'),
        value: 90
      },
      // Sharp rise
      {
        date: new Date('2024-01-03'),
        value: 85
      },
      // Slight decline
      {
        date: new Date('2024-01-04'),
        value: 82
      },
      // Gradual decline
      {
        date: new Date('2024-01-05'),
        value: 5
      },
      // Sharp drop
      {
        date: new Date('2024-01-06'),
        value: 8
      },
      // Slight rise
      {
        date: new Date('2024-01-07'),
        value: 10
      } // Gradual rise
      ],
      options: {}
    }];
    return <div style={{
      display: 'grid',
      gap: '2rem',
      gridTemplateColumns: 'repeat(3, 1fr)'
    }}>
                <div>
                    <h3>Linear Curve</h3>
                    <LineChart width={300} height={200} data={curveData} curveType="linear" withGradientFill={false} withLegendGlyph={false} />
                </div>
                <div>
                    <h3>Smooth Curve (Catmull-Rom)</h3>
                    <LineChart width={300} height={200} data={curveData} curveType="smooth" withGradientFill={false} withLegendGlyph={false} />
                </div>
                <div>
                    <h3>Monotone X Curve</h3>
                    <LineChart width={300} height={200} data={curveData} curveType="monotone" withGradientFill={false} withLegendGlyph={false} />
                </div>
            </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...d.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...h.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <LineChart data={[{
      label: 'String Dates',
      data: [{
        dateString: '2024-01-01',
        value: 10
      }, {
        dateString: '2024-01-02',
        value: 20
      }, {
        dateString: '2024-01-03 00:00:00',
        value: 15
      }, {
        dateString: '2024-01-04',
        value: 25
      }, {
        dateString: '2024-01-05 00:00',
        value: 30
      }],
      options: {}
    }]} withGradientFill={false} withLegendGlyph={false} />;
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates the line chart's ability to handle various date string formats and mixed date types. All dates are converted to local timezone. The chart can process:\\n" + '- Simple date strings (YYYY-MM-DD)\\n' + '- Date with time (YYYY-MM-DD 00:00:00)\\n' + '- Date with time (YYYY-MM-DD 00:00)\\n' + '- ISO format (YYYY-MM-DDT00:00:00)\\n' + '- UTC format (YYYY-MM-DDT00:00:00Z)\\n' + '- Timezone offset (YYYY-MM-DDT00:00:00\xB1HH:mm)\\n'
      }
    }
  }
}`,...S.parameters?.docs?.source}}}},"../charts/src/components/line-chart/stories/large-values-sample.ts":(T,s,t)=>{t.d(s,{A:()=>a});const a=[{label:"Revenue (Billions)",data:[{date:new Date("2024-01-01"),value:12e8},{date:new Date("2024-02-01"),value:145e7},{date:new Date("2024-03-01"),value:168e7},{date:new Date("2024-04-01"),value:21e8},{date:new Date("2024-05-01"),value:235e7},{date:new Date("2024-06-01"),value:28e8}],options:{stroke:"#3858E9"}},{label:"Users (Millions)",data:[{date:new Date("2024-01-01"),value:45e6},{date:new Date("2024-02-01"),value:52e6},{date:new Date("2024-03-01"),value:48e6},{date:new Date("2024-04-01"),value:61e6},{date:new Date("2024-05-01"),value:75e6},{date:new Date("2024-06-01"),value:89e6}],options:{stroke:"#00BA37"}}]},"../charts/src/components/line-chart/stories/site-traffic-sample.ts":(T,s,t)=>{t.d(s,{A:()=>i});const i=[{label:"Views",options:{stroke:"#069e08"},data:[{date:new Date("2024-01-01"),value:2558},{date:new Date("2024-01-02"),value:3399},{date:new Date("2024-01-03"),value:2260},{date:new Date("2024-01-04"),value:2331},{date:new Date("2024-01-05"),value:3302},{date:new Date("2024-01-06"),value:1852},{date:new Date("2024-01-07"),value:2607},{date:new Date("2024-01-08"),value:2804},{date:new Date("2024-01-09"),value:3260},{date:new Date("2024-01-10"),value:2941},{date:new Date("2024-01-11"),value:2857},{date:new Date("2024-01-12"),value:3461},{date:new Date("2024-01-13"),value:1548},{date:new Date("2024-01-14"),value:2739},{date:new Date("2024-01-15"),value:3288},{date:new Date("2024-01-16"),value:2869},{date:new Date("2024-01-17"),value:2590},{date:new Date("2024-01-18"),value:2609},{date:new Date("2024-01-19"),value:2648},{date:new Date("2024-01-20"),value:1805},{date:new Date("2024-01-21"),value:2531},{date:new Date("2024-01-22"),value:3605},{date:new Date("2024-01-23"),value:2366},{date:new Date("2024-01-24"),value:2782},{date:new Date("2024-01-25"),value:2885},{date:new Date("2024-01-26"),value:2918},{date:new Date("2024-01-27"),value:2518},{date:new Date("2024-01-28"),value:2378},{date:new Date("2024-01-29"),value:2714},{date:new Date("2024-01-30"),value:3279}]},{label:"Visitors",options:{stroke:"rgb(230, 139, 40)"},data:[{date:new Date("2024-01-01"),value:2412},{date:new Date("2024-01-02"),value:1899},{date:new Date("2024-01-03"),value:2061},{date:new Date("2024-01-04"),value:1939},{date:new Date("2024-01-05"),value:1986},{date:new Date("2024-01-06"),value:1560},{date:new Date("2024-01-07"),value:1741},{date:new Date("2024-01-08"),value:2120},{date:new Date("2024-01-09"),value:1889},{date:new Date("2024-01-10"),value:1666},{date:new Date("2024-01-11"),value:2396},{date:new Date("2024-01-12"),value:2276},{date:new Date("2024-01-13"),value:1218},{date:new Date("2024-01-14"),value:1228},{date:new Date("2024-01-15"),value:1600},{date:new Date("2024-01-16"),value:1814},{date:new Date("2024-01-17"),value:1701},{date:new Date("2024-01-18"),value:1507},{date:new Date("2024-01-19"),value:1833},{date:new Date("2024-01-20"),value:1407},{date:new Date("2024-01-21"),value:965},{date:new Date("2024-01-22"),value:2288},{date:new Date("2024-01-23"),value:2135},{date:new Date("2024-01-24"),value:1824},{date:new Date("2024-01-25"),value:2219},{date:new Date("2024-01-26"),value:1918},{date:new Date("2024-01-27"),value:1101},{date:new Date("2024-01-28"),value:1695},{date:new Date("2024-01-29"),value:1615},{date:new Date("2024-01-30"),value:2056}]}]},"../charts/src/stories/legend-config.tsx":(T,s,t)=>{t.d(s,{r:()=>a});var i=t("../charts/src/providers/theme/themes.ts");const a={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendAlignmentHorizontal:{control:{type:"select"},options:["left","center","right"],table:{category:"Legend"}},legendAlignmentVertical:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},theme:{control:{type:"select"},options:{default:void 0,jetpack:i.QI,woo:i.pk},defaultValue:void 0,table:{category:"Theme"}}};try{a.displayName="legendArgTypes",a.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:a.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}}]);
