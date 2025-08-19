"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":(D,v,s)=>{s.r(v),s.d(v,{CustomLegendPositioning:()=>m,Default:()=>d,ErrorStates:()=>_,FixedDimensions:()=>b,HorizontalBarChart:()=>h,ManyDataSeries:()=>i,SingleSeries:()=>p,SmartFormatting:()=>t,TimeSeries:()=>c,WithCompositionLegend:()=>o,WithLegend:()=>e,WithPatterns:()=>g,ZeroValueComparison:()=>S,__namedExportsOrder:()=>A,default:()=>r});var y=s("../charts/src/stories/legend-config.tsx"),w=s("../charts/src/components/line-chart/stories/large-values-sample.ts"),f=s("../charts/src/components/line-chart/stories/site-traffic-sample.ts"),u=s("../charts/src/components/bar-chart/bar-chart.tsx"),l=s("../charts/src/components/bar-chart/stories/sample-data.ts"),a=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r={title:"JS Packages/Charts/Types/Bar Chart",component:u.A,parameters:{layout:"centered"},decorators:[T=>(0,a.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,a.jsx)(T,{})})],argTypes:{maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}},...y.r}},d={args:{withTooltips:!0,data:[l.A[0],l.A[1],l.A[2]],gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300}},p={args:{...d.args,data:[l.A[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},c={args:{...d.args,data:[{...f.A[0],label:"Data with dateString and date",data:[...f.A[0].data,{dateString:"2024-01-31",value:2230},{dateString:"2024-02-01",value:2580},{date:new Date("2024-02-02 00:00:00"),value:3500},{dateString:"2024-02-03 00:00:00",value:1500},{dateString:"2024-02-04",value:2500},{dateString:"2024-02-05 00:00",value:3e3}]}],options:{axis:{x:{tickFormat:T=>new Date(T).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},i={args:{...d.args,data:l.A},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},b={args:{...d.args,width:800,height:400,data:[l.A[0],l.A[1],l.A[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},g={args:{...d.args,withPatterns:!0,data:l.A.map(T=>({...T,data:T.data.filter(O=>parseInt(O.label)>=2016)}))}},_={render:()=>(0,a.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Empty Data"}),(0,a.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,a.jsx)(u.A,{data:[]})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Invalid Data"}),(0,a.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,a.jsx)(u.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};_.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const t={args:{withTooltips:!0,data:w.A,gridVisibility:"x"}};t.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const e={args:{...d.args,showLegend:!0}},o={render:()=>(0,a.jsx)("div",{style:{width:"800px"},children:(0,a.jsx)(u.A,{data:[l.A[0],l.A[1],l.A[2]],withTooltips:!0,gridVisibility:"x",maxWidth:1200,aspectRatio:.5,children:(0,a.jsx)(u.A.Legend,{orientation:"horizontal",alignment:"center",position:"bottom"})})}),parameters:{docs:{description:{story:"Demonstrates using the composition API with `<BarChart.Legend />` as a child component. This provides the same functionality as the `showLegend` prop but allows for more flexible composition patterns."}}}},m={args:{withTooltips:!0,data:l.A.slice(0,3),gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top"},parameters:{docs:{description:{story:"Bar chart with top-left positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities."}}}},h={args:{...d.args,data:[l.A[0],l.A[1],l.A[2]],orientation:"horizontal",gridVisibility:"none"}},x=[{group:"United States",label:"United States",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:3}]},{group:"Great Britain",label:"Great Britain",data:[{label:"1896",value:1},{label:"1900",value:0},{label:"1904",value:1},{label:"1908",value:10},{label:"1912",value:9}]},{group:"Japan",label:"Japan",data:[{label:"1896",value:2},{label:"1900",value:1},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:2}]}],S={render:()=>(0,a.jsxs)("div",{style:{display:"grid",gap:"40px"},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Zero Value Display: Disabled (Default)"}),(0,a.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are not visually displayed. Bars with zero values have no height."}),(0,a.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,a.jsx)(u.A,{data:x,showZeroValues:!1,withTooltips:!0,gridVisibility:"x"})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Zero Value Display: Enabled"}),(0,a.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are visually displayed with minimum height bars. The tooltip still shows the actual value of 0, while the bar has a small visual height for better UX."}),(0,a.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,a.jsx)(u.A,{data:x,showZeroValues:!0,withTooltips:!0,gridVisibility:"x"})})]})]}),parameters:{docs:{description:{story:"Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights."}}}},A=["Default","SingleSeries","TimeSeries","ManyDataSeries","FixedDimensions","WithPatterns","ErrorStates","SmartFormatting","WithLegend","WithCompositionLegend","CustomLegendPositioning","HorizontalBarChart","ZeroValueComparison"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: [data[0], data[1], data[2]],
    // limit to 3 series for better readability
    gridVisibility: 'x',
    maxWidth: 1200,
    aspectRatio: 0.5,
    resizeDebounceTime: 300
  }
}`,...d.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [data[0]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with a single data series.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [{
      ...trafficData[0],
      label: 'Data with dateString and date',
      data: [...trafficData[0].data, {
        dateString: '2024-01-31',
        value: 2230
      }, {
        dateString: '2024-02-01',
        value: 2580
      }, {
        date: new Date('2024-02-02 00:00:00'),
        value: 3500
      }, {
        dateString: '2024-02-03 00:00:00',
        value: 1500
      }, {
        dateString: '2024-02-04',
        value: 2500
      }, {
        dateString: '2024-02-05 00:00',
        value: 3000
      }]
    }],
    options: {
      axis: {
        x: {
          tickFormat: (timestamp: number) => {
            const date = new Date(timestamp);
            return date.toLocaleDateString('en-US', {
              dateStyle: 'short'
            });
          }
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with a time series.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with many data series.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 800,
    height: 400,
    data: [data[0], data[1], data[2]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with fixed dimensions that override the responsive behavior.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    withPatterns: true,
    data: data.map(country => {
      return {
        ...country,
        data: country.data.filter(d => parseInt(d.label) >= 2016)
      };
    })
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '20px'
  }}>
            <div>
                <h3>Empty Data</h3>
                <div style={{
        width: '400px',
        height: '300px'
      }}>
                    <BarChart data={[]} />
                </div>
            </div>

            <div>
                <h3>Invalid Data</h3>
                <div style={{
        width: '400px',
        height: '300px'
      }}>
                    <BarChart data={[{
          label: 'Invalid Series',
          data: [{
            date: new Date('invalid'),
            value: 10,
            label: 'Invalid Date'
          }, {
            date: new Date('2024-01-02'),
            value: null,
            label: 'Null Value'
          }],
          options: {}
        }]} />
                </div>
            </div>
        </div>
}`,..._.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    gridVisibility: 'x'
  }
}`,...t.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...e.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '800px'
  }}>
            <BarChart data={[data[0], data[1], data[2]]} withTooltips={true} gridVisibility="x" maxWidth={1200} aspectRatio={0.5}>
                <BarChart.Legend orientation="horizontal" alignment="center" position="bottom" />
            </BarChart>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates using the composition API with \`<BarChart.Legend />\` as a child component. This provides the same functionality as the \`showLegend\` prop but allows for more flexible composition patterns.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: data.slice(0, 3),
    // Use first 3 series for cleaner legend
    gridVisibility: 'x',
    maxWidth: 1200,
    aspectRatio: 0.5,
    resizeDebounceTime: 300,
    // showLegend defaults to false, explicitly enabling for demonstration
    showLegend: true,
    legendOrientation: 'vertical',
    legendAlignment: 'start',
    legendPosition: 'top'
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with top-left positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [data[0], data[1], data[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,...h.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '40px'
  }}>
            <div>
                <h3>Zero Value Display: Disabled (Default)</h3>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    Zero values are not visually displayed. Bars with zero values have no height.
                </p>
                <div style={{
        width: '600px',
        height: '300px'
      }}>
                    <BarChart data={dataWithZeroValues} showZeroValues={false} withTooltips={true} gridVisibility="x" />
                </div>
            </div>

            <div>
                <h3>Zero Value Display: Enabled</h3>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    Zero values are visually displayed with minimum height bars. The tooltip still shows the
                    actual value of 0, while the bar has a small visual height for better UX.
                </p>
                <div style={{
        width: '600px',
        height: '300px'
      }}>
                    <BarChart data={dataWithZeroValues} showZeroValues={true} withTooltips={true} gridVisibility="x" />
                </div>
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}}},"../charts/src/components/line-chart/stories/large-values-sample.ts":(D,v,s)=>{s.d(v,{A:()=>w});const w=[{label:"Revenue (Billions)",data:[{date:new Date("2024-01-01"),value:12e8},{date:new Date("2024-02-01"),value:145e7},{date:new Date("2024-03-01"),value:168e7},{date:new Date("2024-04-01"),value:21e8},{date:new Date("2024-05-01"),value:235e7},{date:new Date("2024-06-01"),value:28e8}],options:{stroke:"#3858E9"}},{label:"Users (Millions)",data:[{date:new Date("2024-01-01"),value:45e6},{date:new Date("2024-02-01"),value:52e6},{date:new Date("2024-03-01"),value:48e6},{date:new Date("2024-04-01"),value:61e6},{date:new Date("2024-05-01"),value:75e6},{date:new Date("2024-06-01"),value:89e6}],options:{stroke:"#00BA37"}}]},"../charts/src/components/line-chart/stories/site-traffic-sample.ts":(D,v,s)=>{s.d(v,{A:()=>y});const y=[{label:"Views",options:{stroke:"#069e08"},data:[{date:new Date("2024-01-01"),value:2558},{date:new Date("2024-01-02"),value:3399},{date:new Date("2024-01-03"),value:2260},{date:new Date("2024-01-04"),value:2331},{date:new Date("2024-01-05"),value:3302},{date:new Date("2024-01-06"),value:1852},{date:new Date("2024-01-07"),value:2607},{date:new Date("2024-01-08"),value:2804},{date:new Date("2024-01-09"),value:3260},{date:new Date("2024-01-10"),value:2941},{date:new Date("2024-01-11"),value:2857},{date:new Date("2024-01-12"),value:3461},{date:new Date("2024-01-13"),value:1548},{date:new Date("2024-01-14"),value:2739},{date:new Date("2024-01-15"),value:3288},{date:new Date("2024-01-16"),value:2869},{date:new Date("2024-01-17"),value:2590},{date:new Date("2024-01-18"),value:2609},{date:new Date("2024-01-19"),value:2648},{date:new Date("2024-01-20"),value:1805},{date:new Date("2024-01-21"),value:2531},{date:new Date("2024-01-22"),value:3605},{date:new Date("2024-01-23"),value:2366},{date:new Date("2024-01-24"),value:2782},{date:new Date("2024-01-25"),value:2885},{date:new Date("2024-01-26"),value:2918},{date:new Date("2024-01-27"),value:2518},{date:new Date("2024-01-28"),value:2378},{date:new Date("2024-01-29"),value:2714},{date:new Date("2024-01-30"),value:3279}]},{label:"Visitors",options:{stroke:"rgb(230, 139, 40)"},data:[{date:new Date("2024-01-01"),value:2412},{date:new Date("2024-01-02"),value:1899},{date:new Date("2024-01-03"),value:2061},{date:new Date("2024-01-04"),value:1939},{date:new Date("2024-01-05"),value:1986},{date:new Date("2024-01-06"),value:1560},{date:new Date("2024-01-07"),value:1741},{date:new Date("2024-01-08"),value:2120},{date:new Date("2024-01-09"),value:1889},{date:new Date("2024-01-10"),value:1666},{date:new Date("2024-01-11"),value:2396},{date:new Date("2024-01-12"),value:2276},{date:new Date("2024-01-13"),value:1218},{date:new Date("2024-01-14"),value:1228},{date:new Date("2024-01-15"),value:1600},{date:new Date("2024-01-16"),value:1814},{date:new Date("2024-01-17"),value:1701},{date:new Date("2024-01-18"),value:1507},{date:new Date("2024-01-19"),value:1833},{date:new Date("2024-01-20"),value:1407},{date:new Date("2024-01-21"),value:965},{date:new Date("2024-01-22"),value:2288},{date:new Date("2024-01-23"),value:2135},{date:new Date("2024-01-24"),value:1824},{date:new Date("2024-01-25"),value:2219},{date:new Date("2024-01-26"),value:1918},{date:new Date("2024-01-27"),value:1101},{date:new Date("2024-01-28"),value:1695},{date:new Date("2024-01-29"),value:1615},{date:new Date("2024-01-30"),value:2056}]}]},"../charts/src/components/shared/use-chart-data-transform.ts":(D,v,s)=>{s.d(v,{E:()=>n});var y=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),w=s("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js"),f=s("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js"),u=s("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse.js");const l=r=>/T.*[Z]$|T.*[+-]\d{2}:?\d{2}$/.test(r),a=r=>{const d=r.trim();if(l(d)){const c=(0,w.H)(d);return(0,f.f)(c)?c:new Date(NaN)}const p=["yyyy-MM-dd","yyyy-MM-dd HH:mm:ss","yyyy-MM-dd HH:mm","yyyy-MM-dd'T'HH:mm:ss","yyyy-MM-dd'T'HH:mm:ss.SSS","yyyy-MM-dd'T'HH:mm"];for(const c of p){const i=(0,u.qg)(d,c,new Date);if((0,f.f)(i))return i}return new Date(NaN)},n=r=>(0,y.useMemo)(()=>{const d=r?.[0]?.data?.[0];return d&&("date"in d||"dateString"in d)?r.map(c=>({...c,data:c.data.map(i=>{let b;return"date"in i&&i.date?b=i.date:"dateString"in i&&i.dateString&&(b=a(i.dateString)),{...i,date:b}}).sort((i,b)=>!i.date||!b.date?0:i.date.getTime()-b.date.getTime())})):r},[r])},"../charts/src/components/shared/use-chart-margin.tsx":(D,v,s)=>{s.d(v,{a:()=>l});var y=s("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),w=s("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),f=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=s("../charts/src/components/shared/utils.ts");const l=(a,n,r,d,p=!1)=>{const c=(0,f.useMemo)(()=>{const i=r.flatMap(t=>t.data);if(p)return i.map(t=>t.label||n.axis?.y?.tickFormat(t.date.getTime(),0,[]));const b=Math.min(...i.map(t=>t.value)),g=Math.max(...i.map(t=>t.value)),_=(0,y.A)({...n.yScale,domain:[b,g],range:[a,0]});return(0,w.A)(_,n.axis?.y?.numTicks)},[n,r,a,p]);return(0,f.useMemo)(()=>{const i={top:10,right:20,bottom:20,left:20},b=40,g=n.axis?.y?.orientation,_=g==="right"?d.axisStyles.y.right:d.axisStyles.y.left,e=((0,u.S)(c,n.axis?.y?.tickFormat,_.axisLabel)??b)+(_?.tickLength??0);return g==="right"?i.right=e:i.left=e,n.axis?.x?.orientation==="top"&&(i.top=20,i.bottom=10),i},[n,d,c])}},"../charts/src/components/shared/utils.ts":(D,v,s)=>{s.d(v,{S:()=>w,n:()=>f});var y=s("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js");const w=(u,l,a)=>{const n=u.map(d=>l(d,0,[])),r=n.reduce((d,p)=>d.length>=p.length?d:p,n[0]);return(0,y.A)(r,a)},f=()=>typeof navigator<"u"&&navigator.userAgent?/^((?!chrome|android).)*safari/i.test(navigator.userAgent):!1},"../charts/src/components/tooltip/accessible-tooltip.tsx":(D,v,s)=>{s.d(v,{JZ:()=>a,OZ:()=>l});var y=s("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/context/TooltipContext.js"),w=s("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),f=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const l=({renderTooltip:n,selectedIndex:r,tooltipRef:d,keyboardFocusedClassName:p,series:c=[],mode:i="group",...b})=>{const g=(0,f.useContext)(y.A),_=(0,f.useMemo)(()=>{if(i!=="individual")return[];if(c.length===0)return[];const e=Math.max(...c.map(m=>m.data.length)),o=[];for(let m=0;m<e;m++)for(let h=0;h<c.length;h++){const x=c[h];m<x.data.length&&o.push({datum:x.data[m],seriesLabel:x.label,seriesIndex:h,dataPointIndex:m})}return o},[c,i]);(0,f.useEffect)(()=>{if(r===void 0){g?.hideTooltip();return}if(i==="group")c.forEach((e,o)=>{if(r<e.data.length){const m=e.data[r];g?.showTooltip({datum:m,key:e.label,index:o})}});else if(i==="individual"&&r<_.length){const e=_[r];g?.showTooltip({datum:e.datum,key:e.seriesLabel,index:e.seriesIndex})}},[r,_,c]);const t=(0,f.useMemo)(()=>{if(n)return e=>{const o=n(e);return r!==void 0?(0,u.jsx)("div",{ref:d,tabIndex:-1,role:"tooltip","aria-atomic":"true",className:p,"data-testid":`chart-tooltip-${r}`,children:o},`chart-tooltip-${r}`):(0,u.jsx)("div",{role:"tooltip","aria-live":"polite",children:o})}},[n,r,d,p]);return(0,u.jsx)(w.A,{...b,renderTooltip:t})},a=({selectedIndex:n,setSelectedIndex:r,isNavigating:d,setIsNavigating:p,chartRef:c,totalPoints:i})=>{const b=(0,f.useCallback)(e=>{e&&n!==void 0&&e.focus()},[n]),g=(0,f.useCallback)(()=>{!d&&n!==void 0&&r(0)},[d,n,r]),_=(0,f.useCallback)(()=>{p(!1)},[p]),t=(0,f.useCallback)(e=>{if(i===0)return;if(e.key==="Tab"){c.current?.focus(),r(void 0),p(!1);return}const o=n===void 0?-1:n;if(o+1>=i&&["ArrowRight"].includes(e.key)){c.current?.focus(),r(void 0),p(!1);return}e.preventDefault(),["ArrowRight"].includes(e.key)?(p(!0),r((o+1)%i)):["ArrowLeft"].includes(e.key)?(p(!0),r((o-1+i)%i)):e.key==="Escape"&&(r(void 0),p(!1),c.current?.focus())},[i,n,r,p,c]);return{tooltipRef:b,onChartFocus:g,onChartBlur:_,onChartKeyDown:t}};try{l.displayName="AccessibleTooltip",l.__docgenInfo={description:"",displayName:"AccessibleTooltip",props:{renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!1,type:{name:"number"}},tooltipRef:{defaultValue:null,description:"",name:"tooltipRef",required:!1,type:{name:"(element: HTMLDivElement) => void"}},keyboardFocusedClassName:{defaultValue:null,description:"",name:"keyboardFocusedClassName",required:!1,type:{name:"string"}},tooltipData:{defaultValue:null,description:`Flattened tooltip data prepared by parent component
Each index corresponds to one tooltip to show`,name:"tooltipData",required:!1,type:{name:"FlattenedTooltipData[]"}},series:{defaultValue:{value:"[]"},description:`For line charts: series data to show all series at selected data point
When provided, shows all series instead of individual tooltips`,name:"series",required:!1,type:{name:"SeriesData[]"}},mode:{defaultValue:{value:"group"},description:`Whether to combine tooltip information from multiple series into a single tooltip. This is useful for line charts.
Or to show individual tooltips for each series. This is useful for bar charts.`,name:"mode",required:!1,type:{name:"enum",value:[{value:'"group"'},{value:'"individual"'}]}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<DataPointDate>) => React.ReactNode"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"]={docgenInfo:l.__docgenInfo,name:"AccessibleTooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"})}catch{}try{a.displayName="useKeyboardNavigation",a.__docgenInfo={description:"",displayName:"useKeyboardNavigation",props:{selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!0,type:{name:"number"}},setSelectedIndex:{defaultValue:null,description:"",name:"setSelectedIndex",required:!0,type:{name:"(index: number) => void"}},isNavigating:{defaultValue:null,description:"",name:"isNavigating",required:!0,type:{name:"boolean"}},setIsNavigating:{defaultValue:null,description:"",name:"setIsNavigating",required:!0,type:{name:"(navigating: boolean) => void"}},chartRef:{defaultValue:null,description:"",name:"chartRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}},totalPoints:{defaultValue:null,description:"Total number of navigation points (length of tooltip data array)",name:"totalPoints",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"]={docgenInfo:a.__docgenInfo,name:"useKeyboardNavigation",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"})}catch{}try{accessibletooltip.displayName="accessibletooltip",accessibletooltip.__docgenInfo={description:`This is a wrapper component which bails early if tooltip is not visible.
If scroll detection is enabled in UseTooltipPortalOptions, this avoids re-rendering
the component on every scroll. If many charts with Tooltips are rendered on a page,
this also avoids creating many resize observers / hitting browser limits.`,displayName:"accessibletooltip",props:{renderTooltip:{defaultValue:null,description:`When TooltipContext.tooltipOpen=true, this function is invoked and if the
return value is non-null, its content is rendered inside the tooltip container.
Content will be rendered in an HTML parent.`,name:"renderTooltip",required:!0,type:{name:"(params: RenderTooltipParams<Datum>) => React.ReactNode"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<Datum>) => React.ReactNode"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"]={docgenInfo:accessibletooltip.__docgenInfo,name:"accessibletooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"})}catch{}},"../charts/src/hooks/use-xychart-theme.ts":(D,v,s)=>{s.d(v,{O:()=>u});var y=s("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),w=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=s("../charts/src/hooks/use-global-chart-theme.ts");const u=l=>{const a=(0,f.u)();return(0,w.useMemo)(()=>{const n=(l??[]).map(r=>r.options?.stroke).filter(r=>!!r);return(0,y.A)({...a,colors:[...n,...a.colors??[]]})},[a,l])}},"../charts/src/stories/legend-config.tsx":(D,v,s)=>{s.d(v,{r:()=>y});const y={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"}};try{y.displayName="legendArgTypes",y.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:y.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(D,v,s)=>{s.d(v,{A:()=>f});function y(u){var l,a,n="";if(typeof u=="string"||typeof u=="number")n+=u;else if(typeof u=="object")if(Array.isArray(u)){var r=u.length;for(l=0;l<r;l++)u[l]&&(a=y(u[l]))&&(n&&(n+=" "),n+=a)}else for(a in u)u[a]&&(n&&(n+=" "),n+=a);return n}function w(){for(var u,l,a=0,n="",r=arguments.length;a<r;a++)(u=arguments[a])&&(l=y(u))&&(n&&(n+=" "),n+=l);return n}const f=w},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":D=>{var v=function(e){return s(e)&&!y(e)};function s(t){return!!t&&typeof t=="object"}function y(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||u(t)}var w=typeof Symbol=="function"&&Symbol.for,f=w?Symbol.for("react.element"):60103;function u(t){return t.$$typeof===f}function l(t){return Array.isArray(t)?[]:{}}function a(t,e){return e.clone!==!1&&e.isMergeableObject(t)?g(l(t),t,e):t}function n(t,e,o){return t.concat(e).map(function(m){return a(m,o)})}function r(t,e){if(!e.customMerge)return g;var o=e.customMerge(t);return typeof o=="function"?o:g}function d(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(e){return Object.propertyIsEnumerable.call(t,e)}):[]}function p(t){return Object.keys(t).concat(d(t))}function c(t,e){try{return e in t}catch{return!1}}function i(t,e){return c(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))}function b(t,e,o){var m={};return o.isMergeableObject(t)&&p(t).forEach(function(h){m[h]=a(t[h],o)}),p(e).forEach(function(h){i(t,h)||(c(t,h)&&o.isMergeableObject(e[h])?m[h]=r(h,o)(t[h],e[h],o):m[h]=a(e[h],o))}),m}function g(t,e,o){o=o||{},o.arrayMerge=o.arrayMerge||n,o.isMergeableObject=o.isMergeableObject||v,o.cloneUnlessOtherwiseSpecified=a;var m=Array.isArray(e),h=Array.isArray(t),x=m===h;return x?m?o.arrayMerge(t,e,o):b(t,e,o):a(e,o)}g.all=function(e,o){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(m,h){return g(m,h,o)},{})};var _=g;D.exports=_}}]);
