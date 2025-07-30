"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":(_,v,o)=>{o.r(v),o.d(v,{Default:()=>e,ErrorStates:()=>h,FixedDimensions:()=>n,HorizontalBarChart:()=>m,ManyDataSeries:()=>r,SingleSeries:()=>i,SmartFormatting:()=>f,TimeSeries:()=>d,WithPatterns:()=>c,ZeroValueComparison:()=>y,__namedExportsOrder:()=>D,default:()=>t});var g=o("../charts/src/components/line-chart/stories/large-values-sample.ts"),b=o("../charts/src/components/line-chart/stories/site-traffic-sample.ts"),u=o("../charts/src/components/bar-chart/bar-chart.tsx"),s=o("../charts/src/components/bar-chart/stories/sample-data.ts"),a=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t={title:"JS Packages/Charts/Types/Bar Chart",component:u.A,parameters:{layout:"centered"},decorators:[w=>(0,a.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,a.jsx)(w,{})})],argTypes:{maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}}}},e={args:{withTooltips:!0,data:[s.A[0],s.A[1],s.A[2]],gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300}},i={args:{...e.args,data:[s.A[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},d={args:{...e.args,data:[{...b.A[0],label:"Data with dateString and date",data:[...b.A[0].data,{dateString:"2024-01-31",value:2230},{dateString:"2024-02-01",value:2580},{date:new Date("2024-02-02 00:00:00"),value:3500},{dateString:"2024-02-03 00:00:00",value:1500},{dateString:"2024-02-04",value:2500},{dateString:"2024-02-05 00:00",value:3e3}]}],options:{axis:{x:{tickFormat:w=>new Date(w).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},r={args:{...e.args,data:s.A},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},n={args:{...e.args,width:800,height:400,data:[s.A[0],s.A[1],s.A[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},c={args:{...e.args,withPatterns:!0,data:s.A.map(w=>({...w,data:w.data.filter(x=>parseInt(x.label)>=2016)}))}},h={render:()=>(0,a.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Empty Data"}),(0,a.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,a.jsx)(u.A,{data:[]})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Invalid Data"}),(0,a.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,a.jsx)(u.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};h.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const f={args:{withTooltips:!0,data:g.A,gridVisibility:"x"}};f.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const m={args:{...e.args,data:[s.A[0],s.A[1],s.A[2]],orientation:"horizontal",gridVisibility:"none"}},l=[{group:"United States",label:"United States",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:3}]},{group:"Great Britain",label:"Great Britain",data:[{label:"1896",value:1},{label:"1900",value:0},{label:"1904",value:1},{label:"1908",value:10},{label:"1912",value:9}]},{group:"Japan",label:"Japan",data:[{label:"1896",value:2},{label:"1900",value:1},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:2}]}],y={render:()=>(0,a.jsxs)("div",{style:{display:"grid",gap:"40px"},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Zero Value Display: Disabled (Default)"}),(0,a.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are not visually displayed. Bars with zero values have no height."}),(0,a.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,a.jsx)(u.A,{data:l,showZeroValues:!1,withTooltips:!0,gridVisibility:"x"})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Zero Value Display: Enabled"}),(0,a.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are visually displayed with minimum height bars. The tooltip still shows the actual value of 0, while the bar has a small visual height for better UX."}),(0,a.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,a.jsx)(u.A,{data:l,showZeroValues:!0,withTooltips:!0,gridVisibility:"x"})})]})]}),parameters:{docs:{description:{story:"Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights."}}}},D=["Default","SingleSeries","TimeSeries","ManyDataSeries","FixedDimensions","WithPatterns","ErrorStates","SmartFormatting","HorizontalBarChart","ZeroValueComparison"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: [data[0], data[1], data[2]],
    // limit to 3 series for better readability
    gridVisibility: 'x',
    maxWidth: 1200,
    aspectRatio: 0.5,
    resizeDebounceTime: 300
  }
}`,...e.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    gridVisibility: 'x'
  }
}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [data[0], data[1], data[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,...m.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}}},"../charts/src/components/line-chart/stories/large-values-sample.ts":(_,v,o)=>{o.d(v,{A:()=>b});const b=[{label:"Revenue (Billions)",data:[{date:new Date("2024-01-01"),value:12e8},{date:new Date("2024-02-01"),value:145e7},{date:new Date("2024-03-01"),value:168e7},{date:new Date("2024-04-01"),value:21e8},{date:new Date("2024-05-01"),value:235e7},{date:new Date("2024-06-01"),value:28e8}],options:{stroke:"#3858E9"}},{label:"Users (Millions)",data:[{date:new Date("2024-01-01"),value:45e6},{date:new Date("2024-02-01"),value:52e6},{date:new Date("2024-03-01"),value:48e6},{date:new Date("2024-04-01"),value:61e6},{date:new Date("2024-05-01"),value:75e6},{date:new Date("2024-06-01"),value:89e6}],options:{stroke:"#00BA37"}}]},"../charts/src/components/line-chart/stories/site-traffic-sample.ts":(_,v,o)=>{o.d(v,{A:()=>g});const g=[{label:"Views",options:{stroke:"#069e08"},data:[{date:new Date("2024-01-01"),value:2558},{date:new Date("2024-01-02"),value:3399},{date:new Date("2024-01-03"),value:2260},{date:new Date("2024-01-04"),value:2331},{date:new Date("2024-01-05"),value:3302},{date:new Date("2024-01-06"),value:1852},{date:new Date("2024-01-07"),value:2607},{date:new Date("2024-01-08"),value:2804},{date:new Date("2024-01-09"),value:3260},{date:new Date("2024-01-10"),value:2941},{date:new Date("2024-01-11"),value:2857},{date:new Date("2024-01-12"),value:3461},{date:new Date("2024-01-13"),value:1548},{date:new Date("2024-01-14"),value:2739},{date:new Date("2024-01-15"),value:3288},{date:new Date("2024-01-16"),value:2869},{date:new Date("2024-01-17"),value:2590},{date:new Date("2024-01-18"),value:2609},{date:new Date("2024-01-19"),value:2648},{date:new Date("2024-01-20"),value:1805},{date:new Date("2024-01-21"),value:2531},{date:new Date("2024-01-22"),value:3605},{date:new Date("2024-01-23"),value:2366},{date:new Date("2024-01-24"),value:2782},{date:new Date("2024-01-25"),value:2885},{date:new Date("2024-01-26"),value:2918},{date:new Date("2024-01-27"),value:2518},{date:new Date("2024-01-28"),value:2378},{date:new Date("2024-01-29"),value:2714},{date:new Date("2024-01-30"),value:3279}]},{label:"Visitors",options:{stroke:"rgb(230, 139, 40)"},data:[{date:new Date("2024-01-01"),value:2412},{date:new Date("2024-01-02"),value:1899},{date:new Date("2024-01-03"),value:2061},{date:new Date("2024-01-04"),value:1939},{date:new Date("2024-01-05"),value:1986},{date:new Date("2024-01-06"),value:1560},{date:new Date("2024-01-07"),value:1741},{date:new Date("2024-01-08"),value:2120},{date:new Date("2024-01-09"),value:1889},{date:new Date("2024-01-10"),value:1666},{date:new Date("2024-01-11"),value:2396},{date:new Date("2024-01-12"),value:2276},{date:new Date("2024-01-13"),value:1218},{date:new Date("2024-01-14"),value:1228},{date:new Date("2024-01-15"),value:1600},{date:new Date("2024-01-16"),value:1814},{date:new Date("2024-01-17"),value:1701},{date:new Date("2024-01-18"),value:1507},{date:new Date("2024-01-19"),value:1833},{date:new Date("2024-01-20"),value:1407},{date:new Date("2024-01-21"),value:965},{date:new Date("2024-01-22"),value:2288},{date:new Date("2024-01-23"),value:2135},{date:new Date("2024-01-24"),value:1824},{date:new Date("2024-01-25"),value:2219},{date:new Date("2024-01-26"),value:1918},{date:new Date("2024-01-27"),value:1101},{date:new Date("2024-01-28"),value:1695},{date:new Date("2024-01-29"),value:1615},{date:new Date("2024-01-30"),value:2056}]}]},"../charts/src/components/shared/use-chart-data-transform.ts":(_,v,o)=>{o.d(v,{E:()=>t});var g=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),b=o("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js"),u=o("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js"),s=o("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse.js");const a=e=>/T.*[Z]$|T.*[+-]\d{2}:?\d{2}$/.test(e),p=e=>{const i=e.trim();if(a(i)){const r=(0,b.H)(i);return(0,u.f)(r)?r:new Date(NaN)}const d=["yyyy-MM-dd","yyyy-MM-dd HH:mm:ss","yyyy-MM-dd HH:mm","yyyy-MM-dd'T'HH:mm:ss","yyyy-MM-dd'T'HH:mm:ss.SSS","yyyy-MM-dd'T'HH:mm"];for(const r of d){const n=(0,s.qg)(i,r,new Date);if((0,u.f)(n))return n}return new Date(NaN)},t=e=>(0,g.useMemo)(()=>{const i=e?.[0]?.data?.[0];return i&&("date"in i||"dateString"in i)?e.map(r=>({...r,data:r.data.map(n=>{let c;return"date"in n&&n.date?c=n.date:"dateString"in n&&n.dateString&&(c=p(n.dateString)),{...n,date:c}}).sort((n,c)=>!n.date||!c.date?0:n.date.getTime()-c.date.getTime())})):e},[e])},"../charts/src/components/shared/use-chart-margin.tsx":(_,v,o)=>{o.d(v,{a:()=>a});var g=o("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),b=o("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),u=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=o("../charts/src/components/shared/utils.ts");const a=(p,t,e,i,d=!1)=>{const r=(0,u.useMemo)(()=>{const n=e.flatMap(m=>m.data);if(d)return n.map(m=>m.label||t.axis?.y?.tickFormat(m.date.getTime(),0,[]));const c=Math.min(...n.map(m=>m.value)),h=Math.max(...n.map(m=>m.value)),f=(0,g.A)({...t.yScale,domain:[c,h],range:[p,0]});return(0,b.A)(f,t.axis?.y?.numTicks)},[t,e,p,d]);return(0,u.useMemo)(()=>{const n={top:10,right:20,bottom:20,left:20},c=40,h=t.axis?.y?.orientation,f=h==="right"?i.axisStyles.y.right:i.axisStyles.y.left,l=((0,s.S)(r,t.axis?.y?.tickFormat,f.axisLabel)??c)+(f?.tickLength??0);return h==="right"?n.right=l:n.left=l,t.axis?.x?.orientation==="top"&&(n.top=20,n.bottom=10),n},[t,i,r])}},"../charts/src/components/shared/utils.ts":(_,v,o)=>{o.d(v,{S:()=>b,n:()=>u});var g=o("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js");const b=(s,a,p)=>{const t=s.map(i=>a(i,0,[])),e=t.reduce((i,d)=>i.length>=d.length?i:d,t[0]);return(0,g.A)(e,p)},u=()=>typeof navigator<"u"&&navigator.userAgent?/^((?!chrome|android).)*safari/i.test(navigator.userAgent):!1},"../charts/src/components/tooltip/accessible-tooltip.tsx":(_,v,o)=>{o.d(v,{JZ:()=>p,OZ:()=>a});var g=o("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/context/TooltipContext.js"),b=o("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),u=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a=({renderTooltip:t,selectedIndex:e,tooltipRef:i,keyboardFocusedClassName:d,series:r=[],mode:n="group",...c})=>{const h=(0,u.useContext)(g.A),f=(0,u.useMemo)(()=>{if(n!=="individual")return[];if(r.length===0)return[];const l=Math.max(...r.map(D=>D.data.length)),y=[];for(let D=0;D<l;D++)for(let w=0;w<r.length;w++){const x=r[w];D<x.data.length&&y.push({datum:x.data[D],seriesLabel:x.label,seriesIndex:w,dataPointIndex:D})}return y},[r,n]);(0,u.useEffect)(()=>{if(e===void 0){h?.hideTooltip();return}if(n==="group")r.forEach((l,y)=>{if(e<l.data.length){const D=l.data[e];h?.showTooltip({datum:D,key:l.label,index:y})}});else if(n==="individual"&&e<f.length){const l=f[e];h?.showTooltip({datum:l.datum,key:l.seriesLabel,index:l.seriesIndex})}},[e,f,r]);const m=(0,u.useMemo)(()=>{if(t)return l=>{const y=t(l);return e!==void 0?(0,s.jsx)("div",{ref:i,tabIndex:-1,role:"tooltip","aria-atomic":"true",className:d,"data-testid":`chart-tooltip-${e}`,children:y},`chart-tooltip-${e}`):(0,s.jsx)("div",{role:"tooltip","aria-live":"polite",children:y})}},[t,e,i,d]);return(0,s.jsx)(b.A,{...c,renderTooltip:m})},p=({selectedIndex:t,setSelectedIndex:e,isNavigating:i,setIsNavigating:d,chartRef:r,totalPoints:n})=>{const c=(0,u.useCallback)(l=>{l&&t!==void 0&&l.focus()},[t]),h=(0,u.useCallback)(()=>{!i&&t!==void 0&&e(0)},[i,t,e]),f=(0,u.useCallback)(()=>{d(!1)},[d]),m=(0,u.useCallback)(l=>{if(n===0)return;if(l.key==="Tab"){r.current?.focus(),e(void 0),d(!1);return}const y=t===void 0?-1:t;if(y+1>=n&&["ArrowRight"].includes(l.key)){r.current?.focus(),e(void 0),d(!1);return}l.preventDefault(),["ArrowRight"].includes(l.key)?(d(!0),e((y+1)%n)):["ArrowLeft"].includes(l.key)?(d(!0),e((y-1+n)%n)):l.key==="Escape"&&(e(void 0),d(!1),r.current?.focus())},[n,t,e,d,r]);return{tooltipRef:c,onChartFocus:h,onChartBlur:f,onChartKeyDown:m}};try{a.displayName="AccessibleTooltip",a.__docgenInfo={description:"",displayName:"AccessibleTooltip",props:{renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!1,type:{name:"number"}},tooltipRef:{defaultValue:null,description:"",name:"tooltipRef",required:!1,type:{name:"(element: HTMLDivElement) => void"}},keyboardFocusedClassName:{defaultValue:null,description:"",name:"keyboardFocusedClassName",required:!1,type:{name:"string"}},tooltipData:{defaultValue:null,description:`Flattened tooltip data prepared by parent component
Each index corresponds to one tooltip to show`,name:"tooltipData",required:!1,type:{name:"FlattenedTooltipData[]"}},series:{defaultValue:{value:"[]"},description:`For line charts: series data to show all series at selected data point
When provided, shows all series instead of individual tooltips`,name:"series",required:!1,type:{name:"SeriesData[]"}},mode:{defaultValue:{value:"group"},description:`Whether to combine tooltip information from multiple series into a single tooltip. This is useful for line charts.
Or to show individual tooltips for each series. This is useful for bar charts.`,name:"mode",required:!1,type:{name:"enum",value:[{value:'"group"'},{value:'"individual"'}]}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<DataPointDate>) => React.ReactNode"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"]={docgenInfo:a.__docgenInfo,name:"AccessibleTooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"})}catch{}try{p.displayName="useKeyboardNavigation",p.__docgenInfo={description:"",displayName:"useKeyboardNavigation",props:{selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!0,type:{name:"number"}},setSelectedIndex:{defaultValue:null,description:"",name:"setSelectedIndex",required:!0,type:{name:"(index: number) => void"}},isNavigating:{defaultValue:null,description:"",name:"isNavigating",required:!0,type:{name:"boolean"}},setIsNavigating:{defaultValue:null,description:"",name:"setIsNavigating",required:!0,type:{name:"(navigating: boolean) => void"}},chartRef:{defaultValue:null,description:"",name:"chartRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}},totalPoints:{defaultValue:null,description:"Total number of navigation points (length of tooltip data array)",name:"totalPoints",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"]={docgenInfo:p.__docgenInfo,name:"useKeyboardNavigation",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"})}catch{}try{accessibletooltip.displayName="accessibletooltip",accessibletooltip.__docgenInfo={description:`This is a wrapper component which bails early if tooltip is not visible.
If scroll detection is enabled in UseTooltipPortalOptions, this avoids re-rendering
the component on every scroll. If many charts with Tooltips are rendered on a page,
this also avoids creating many resize observers / hitting browser limits.`,displayName:"accessibletooltip",props:{renderTooltip:{defaultValue:null,description:`When TooltipContext.tooltipOpen=true, this function is invoked and if the
return value is non-null, its content is rendered inside the tooltip container.
Content will be rendered in an HTML parent.`,name:"renderTooltip",required:!0,type:{name:"(params: RenderTooltipParams<Datum>) => React.ReactNode"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<Datum>) => React.ReactNode"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"]={docgenInfo:accessibletooltip.__docgenInfo,name:"accessibletooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(_,v,o)=>{o.d(v,{A:()=>u});function g(s){var a,p,t="";if(typeof s=="string"||typeof s=="number")t+=s;else if(typeof s=="object")if(Array.isArray(s)){var e=s.length;for(a=0;a<e;a++)s[a]&&(p=g(s[a]))&&(t&&(t+=" "),t+=p)}else for(p in s)s[p]&&(t&&(t+=" "),t+=p);return t}function b(){for(var s,a,p=0,t="",e=arguments.length;p<e;p++)(s=arguments[p])&&(a=g(s))&&(t&&(t+=" "),t+=a);return t}const u=b}}]);
