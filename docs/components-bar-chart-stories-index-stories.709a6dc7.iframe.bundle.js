"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":(w,h,s)=>{s.r(h),s.d(h,{CustomLegendPositioning:()=>v,Default:()=>o,ErrorStates:()=>g,FixedDimensions:()=>p,HorizontalBarChart:()=>D,ManyDataSeries:()=>a,SingleSeries:()=>u,SmartFormatting:()=>m,TimeSeries:()=>d,WithLegend:()=>i,WithPatterns:()=>b,ZeroValueComparison:()=>_,__namedExportsOrder:()=>V,default:()=>n});var f=s("../charts/src/stories/legend-config.tsx"),y=s("../charts/src/components/line-chart/stories/large-values-sample.ts"),c=s("../charts/src/components/line-chart/stories/site-traffic-sample.ts"),l=s("../charts/src/components/bar-chart/bar-chart.tsx"),r=s("../charts/src/components/bar-chart/stories/sample-data.ts"),e=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n={title:"JS Packages/Charts/Types/Bar Chart",component:l.A,parameters:{layout:"centered"},decorators:[T=>(0,e.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,e.jsx)(T,{})})],argTypes:{maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}},...f.r}},o={args:{withTooltips:!0,data:[r.A[0],r.A[1],r.A[2]],gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300}},u={args:{...o.args,data:[r.A[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},d={args:{...o.args,data:[{...c.A[0],label:"Data with dateString and date",data:[...c.A[0].data,{dateString:"2024-01-31",value:2230},{dateString:"2024-02-01",value:2580},{date:new Date("2024-02-02 00:00:00"),value:3500},{dateString:"2024-02-03 00:00:00",value:1500},{dateString:"2024-02-04",value:2500},{dateString:"2024-02-05 00:00",value:3e3}]}],options:{axis:{x:{tickFormat:T=>new Date(T).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},a={args:{...o.args,data:r.A},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},p={args:{...o.args,width:800,height:400,data:[r.A[0],r.A[1],r.A[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},b={args:{...o.args,withPatterns:!0,data:r.A.map(T=>({...T,data:T.data.filter(S=>parseInt(S.label)>=2016)}))}},g={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Empty Data"}),(0,e.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,e.jsx)(l.A,{data:[]})})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Invalid Data"}),(0,e.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,e.jsx)(l.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};g.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const m={args:{withTooltips:!0,data:y.A,gridVisibility:"x"}};m.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const i={args:{...o.args,showLegend:!0}},v={args:{withTooltips:!0,data:r.A.slice(0,3),gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,showLegend:!0,legendOrientation:"vertical",legendAlignmentHorizontal:"left",legendAlignmentVertical:"top"},parameters:{docs:{description:{story:"Bar chart with top-left positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities."}}}},D={args:{...o.args,data:[r.A[0],r.A[1],r.A[2]],orientation:"horizontal",gridVisibility:"none"}},x=[{group:"United States",label:"United States",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:3}]},{group:"Great Britain",label:"Great Britain",data:[{label:"1896",value:1},{label:"1900",value:0},{label:"1904",value:1},{label:"1908",value:10},{label:"1912",value:9}]},{group:"Japan",label:"Japan",data:[{label:"1896",value:2},{label:"1900",value:1},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:2}]}],_={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"40px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Zero Value Display: Disabled (Default)"}),(0,e.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are not visually displayed. Bars with zero values have no height."}),(0,e.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,e.jsx)(l.A,{data:x,showZeroValues:!1,withTooltips:!0,gridVisibility:"x"})})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Zero Value Display: Enabled"}),(0,e.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are visually displayed with minimum height bars. The tooltip still shows the actual value of 0, while the bar has a small visual height for better UX."}),(0,e.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,e.jsx)(l.A,{data:x,showZeroValues:!0,withTooltips:!0,gridVisibility:"x"})})]})]}),parameters:{docs:{description:{story:"Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights."}}}},V=["Default","SingleSeries","TimeSeries","ManyDataSeries","FixedDimensions","WithPatterns","ErrorStates","SmartFormatting","WithLegend","CustomLegendPositioning","HorizontalBarChart","ZeroValueComparison"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: [data[0], data[1], data[2]],
    // limit to 3 series for better readability
    gridVisibility: 'x',
    maxWidth: 1200,
    aspectRatio: 0.5,
    resizeDebounceTime: 300
  }
}`,...o.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    gridVisibility: 'x'
  }
}`,...m.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...i.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    legendAlignmentHorizontal: 'left',
    legendAlignmentVertical: 'top'
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with top-left positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [data[0], data[1], data[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,...D.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}}},"../charts/src/components/line-chart/stories/large-values-sample.ts":(w,h,s)=>{s.d(h,{A:()=>y});const y=[{label:"Revenue (Billions)",data:[{date:new Date("2024-01-01"),value:12e8},{date:new Date("2024-02-01"),value:145e7},{date:new Date("2024-03-01"),value:168e7},{date:new Date("2024-04-01"),value:21e8},{date:new Date("2024-05-01"),value:235e7},{date:new Date("2024-06-01"),value:28e8}],options:{stroke:"#3858E9"}},{label:"Users (Millions)",data:[{date:new Date("2024-01-01"),value:45e6},{date:new Date("2024-02-01"),value:52e6},{date:new Date("2024-03-01"),value:48e6},{date:new Date("2024-04-01"),value:61e6},{date:new Date("2024-05-01"),value:75e6},{date:new Date("2024-06-01"),value:89e6}],options:{stroke:"#00BA37"}}]},"../charts/src/components/line-chart/stories/site-traffic-sample.ts":(w,h,s)=>{s.d(h,{A:()=>f});const f=[{label:"Views",options:{stroke:"#069e08"},data:[{date:new Date("2024-01-01"),value:2558},{date:new Date("2024-01-02"),value:3399},{date:new Date("2024-01-03"),value:2260},{date:new Date("2024-01-04"),value:2331},{date:new Date("2024-01-05"),value:3302},{date:new Date("2024-01-06"),value:1852},{date:new Date("2024-01-07"),value:2607},{date:new Date("2024-01-08"),value:2804},{date:new Date("2024-01-09"),value:3260},{date:new Date("2024-01-10"),value:2941},{date:new Date("2024-01-11"),value:2857},{date:new Date("2024-01-12"),value:3461},{date:new Date("2024-01-13"),value:1548},{date:new Date("2024-01-14"),value:2739},{date:new Date("2024-01-15"),value:3288},{date:new Date("2024-01-16"),value:2869},{date:new Date("2024-01-17"),value:2590},{date:new Date("2024-01-18"),value:2609},{date:new Date("2024-01-19"),value:2648},{date:new Date("2024-01-20"),value:1805},{date:new Date("2024-01-21"),value:2531},{date:new Date("2024-01-22"),value:3605},{date:new Date("2024-01-23"),value:2366},{date:new Date("2024-01-24"),value:2782},{date:new Date("2024-01-25"),value:2885},{date:new Date("2024-01-26"),value:2918},{date:new Date("2024-01-27"),value:2518},{date:new Date("2024-01-28"),value:2378},{date:new Date("2024-01-29"),value:2714},{date:new Date("2024-01-30"),value:3279}]},{label:"Visitors",options:{stroke:"rgb(230, 139, 40)"},data:[{date:new Date("2024-01-01"),value:2412},{date:new Date("2024-01-02"),value:1899},{date:new Date("2024-01-03"),value:2061},{date:new Date("2024-01-04"),value:1939},{date:new Date("2024-01-05"),value:1986},{date:new Date("2024-01-06"),value:1560},{date:new Date("2024-01-07"),value:1741},{date:new Date("2024-01-08"),value:2120},{date:new Date("2024-01-09"),value:1889},{date:new Date("2024-01-10"),value:1666},{date:new Date("2024-01-11"),value:2396},{date:new Date("2024-01-12"),value:2276},{date:new Date("2024-01-13"),value:1218},{date:new Date("2024-01-14"),value:1228},{date:new Date("2024-01-15"),value:1600},{date:new Date("2024-01-16"),value:1814},{date:new Date("2024-01-17"),value:1701},{date:new Date("2024-01-18"),value:1507},{date:new Date("2024-01-19"),value:1833},{date:new Date("2024-01-20"),value:1407},{date:new Date("2024-01-21"),value:965},{date:new Date("2024-01-22"),value:2288},{date:new Date("2024-01-23"),value:2135},{date:new Date("2024-01-24"),value:1824},{date:new Date("2024-01-25"),value:2219},{date:new Date("2024-01-26"),value:1918},{date:new Date("2024-01-27"),value:1101},{date:new Date("2024-01-28"),value:1695},{date:new Date("2024-01-29"),value:1615},{date:new Date("2024-01-30"),value:2056}]}]},"../charts/src/components/shared/use-chart-data-transform.ts":(w,h,s)=>{s.d(h,{E:()=>t});var f=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),y=s("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js"),c=s("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js"),l=s("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse.js");const r=n=>/T.*[Z]$|T.*[+-]\d{2}:?\d{2}$/.test(n),e=n=>{const o=n.trim();if(r(o)){const d=(0,y.H)(o);return(0,c.f)(d)?d:new Date(NaN)}const u=["yyyy-MM-dd","yyyy-MM-dd HH:mm:ss","yyyy-MM-dd HH:mm","yyyy-MM-dd'T'HH:mm:ss","yyyy-MM-dd'T'HH:mm:ss.SSS","yyyy-MM-dd'T'HH:mm"];for(const d of u){const a=(0,l.qg)(o,d,new Date);if((0,c.f)(a))return a}return new Date(NaN)},t=n=>(0,f.useMemo)(()=>{const o=n?.[0]?.data?.[0];return o&&("date"in o||"dateString"in o)?n.map(d=>({...d,data:d.data.map(a=>{let p;return"date"in a&&a.date?p=a.date:"dateString"in a&&a.dateString&&(p=e(a.dateString)),{...a,date:p}}).sort((a,p)=>!a.date||!p.date?0:a.date.getTime()-p.date.getTime())})):n},[n])},"../charts/src/components/shared/use-chart-margin.tsx":(w,h,s)=>{s.d(h,{a:()=>r});var f=s("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),y=s("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),c=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=s("../charts/src/components/shared/utils.ts");const r=(e,t,n,o,u=!1)=>{const d=(0,c.useMemo)(()=>{const a=n.flatMap(m=>m.data);if(u)return a.map(m=>m.label||t.axis?.y?.tickFormat(m.date.getTime(),0,[]));const p=Math.min(...a.map(m=>m.value)),b=Math.max(...a.map(m=>m.value)),g=(0,f.A)({...t.yScale,domain:[p,b],range:[e,0]});return(0,y.A)(g,t.axis?.y?.numTicks)},[t,n,e,u]);return(0,c.useMemo)(()=>{const a={top:10,right:20,bottom:20,left:20},p=40,b=t.axis?.y?.orientation,g=b==="right"?o.axisStyles.y.right:o.axisStyles.y.left,i=((0,l.S)(d,t.axis?.y?.tickFormat,g.axisLabel)??p)+(g?.tickLength??0);return b==="right"?a.right=i:a.left=i,t.axis?.x?.orientation==="top"&&(a.top=20,a.bottom=10),a},[t,o,d])}},"../charts/src/components/shared/utils.ts":(w,h,s)=>{s.d(h,{S:()=>y,n:()=>c});var f=s("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js");const y=(l,r,e)=>{const t=l.map(o=>r(o,0,[])),n=t.reduce((o,u)=>o.length>=u.length?o:u,t[0]);return(0,f.A)(n,e)},c=()=>typeof navigator<"u"&&navigator.userAgent?/^((?!chrome|android).)*safari/i.test(navigator.userAgent):!1},"../charts/src/components/tooltip/accessible-tooltip.tsx":(w,h,s)=>{s.d(h,{JZ:()=>e,OZ:()=>r});var f=s("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/context/TooltipContext.js"),y=s("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),c=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=({renderTooltip:t,selectedIndex:n,tooltipRef:o,keyboardFocusedClassName:u,series:d=[],mode:a="group",...p})=>{const b=(0,c.useContext)(f.A),g=(0,c.useMemo)(()=>{if(a!=="individual")return[];if(d.length===0)return[];const i=Math.max(...d.map(D=>D.data.length)),v=[];for(let D=0;D<i;D++)for(let x=0;x<d.length;x++){const _=d[x];D<_.data.length&&v.push({datum:_.data[D],seriesLabel:_.label,seriesIndex:x,dataPointIndex:D})}return v},[d,a]);(0,c.useEffect)(()=>{if(n===void 0){b?.hideTooltip();return}if(a==="group")d.forEach((i,v)=>{if(n<i.data.length){const D=i.data[n];b?.showTooltip({datum:D,key:i.label,index:v})}});else if(a==="individual"&&n<g.length){const i=g[n];b?.showTooltip({datum:i.datum,key:i.seriesLabel,index:i.seriesIndex})}},[n,g,d]);const m=(0,c.useMemo)(()=>{if(t)return i=>{const v=t(i);return n!==void 0?(0,l.jsx)("div",{ref:o,tabIndex:-1,role:"tooltip","aria-atomic":"true",className:u,"data-testid":`chart-tooltip-${n}`,children:v},`chart-tooltip-${n}`):(0,l.jsx)("div",{role:"tooltip","aria-live":"polite",children:v})}},[t,n,o,u]);return(0,l.jsx)(y.A,{...p,renderTooltip:m})},e=({selectedIndex:t,setSelectedIndex:n,isNavigating:o,setIsNavigating:u,chartRef:d,totalPoints:a})=>{const p=(0,c.useCallback)(i=>{i&&t!==void 0&&i.focus()},[t]),b=(0,c.useCallback)(()=>{!o&&t!==void 0&&n(0)},[o,t,n]),g=(0,c.useCallback)(()=>{u(!1)},[u]),m=(0,c.useCallback)(i=>{if(a===0)return;if(i.key==="Tab"){d.current?.focus(),n(void 0),u(!1);return}const v=t===void 0?-1:t;if(v+1>=a&&["ArrowRight"].includes(i.key)){d.current?.focus(),n(void 0),u(!1);return}i.preventDefault(),["ArrowRight"].includes(i.key)?(u(!0),n((v+1)%a)):["ArrowLeft"].includes(i.key)?(u(!0),n((v-1+a)%a)):i.key==="Escape"&&(n(void 0),u(!1),d.current?.focus())},[a,t,n,u,d]);return{tooltipRef:p,onChartFocus:b,onChartBlur:g,onChartKeyDown:m}};try{r.displayName="AccessibleTooltip",r.__docgenInfo={description:"",displayName:"AccessibleTooltip",props:{renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!1,type:{name:"number"}},tooltipRef:{defaultValue:null,description:"",name:"tooltipRef",required:!1,type:{name:"(element: HTMLDivElement) => void"}},keyboardFocusedClassName:{defaultValue:null,description:"",name:"keyboardFocusedClassName",required:!1,type:{name:"string"}},tooltipData:{defaultValue:null,description:`Flattened tooltip data prepared by parent component
Each index corresponds to one tooltip to show`,name:"tooltipData",required:!1,type:{name:"FlattenedTooltipData[]"}},series:{defaultValue:{value:"[]"},description:`For line charts: series data to show all series at selected data point
When provided, shows all series instead of individual tooltips`,name:"series",required:!1,type:{name:"SeriesData[]"}},mode:{defaultValue:{value:"group"},description:`Whether to combine tooltip information from multiple series into a single tooltip. This is useful for line charts.
Or to show individual tooltips for each series. This is useful for bar charts.`,name:"mode",required:!1,type:{name:"enum",value:[{value:'"group"'},{value:'"individual"'}]}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<DataPointDate>) => React.ReactNode"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"]={docgenInfo:r.__docgenInfo,name:"AccessibleTooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"})}catch{}try{e.displayName="useKeyboardNavigation",e.__docgenInfo={description:"",displayName:"useKeyboardNavigation",props:{selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!0,type:{name:"number"}},setSelectedIndex:{defaultValue:null,description:"",name:"setSelectedIndex",required:!0,type:{name:"(index: number) => void"}},isNavigating:{defaultValue:null,description:"",name:"isNavigating",required:!0,type:{name:"boolean"}},setIsNavigating:{defaultValue:null,description:"",name:"setIsNavigating",required:!0,type:{name:"(navigating: boolean) => void"}},chartRef:{defaultValue:null,description:"",name:"chartRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}},totalPoints:{defaultValue:null,description:"Total number of navigation points (length of tooltip data array)",name:"totalPoints",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"]={docgenInfo:e.__docgenInfo,name:"useKeyboardNavigation",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"})}catch{}try{accessibletooltip.displayName="accessibletooltip",accessibletooltip.__docgenInfo={description:`This is a wrapper component which bails early if tooltip is not visible.
If scroll detection is enabled in UseTooltipPortalOptions, this avoids re-rendering
the component on every scroll. If many charts with Tooltips are rendered on a page,
this also avoids creating many resize observers / hitting browser limits.`,displayName:"accessibletooltip",props:{renderTooltip:{defaultValue:null,description:`When TooltipContext.tooltipOpen=true, this function is invoked and if the
return value is non-null, its content is rendered inside the tooltip container.
Content will be rendered in an HTML parent.`,name:"renderTooltip",required:!0,type:{name:"(params: RenderTooltipParams<Datum>) => React.ReactNode"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<Datum>) => React.ReactNode"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"]={docgenInfo:accessibletooltip.__docgenInfo,name:"accessibletooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"})}catch{}},"../charts/src/stories/legend-config.tsx":(w,h,s)=>{s.d(h,{r:()=>y});var f=s("../charts/src/providers/theme/themes.ts");const y={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendAlignmentHorizontal:{control:{type:"select"},options:["left","center","right"],table:{category:"Legend"}},legendAlignmentVertical:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},theme:{control:{type:"select"},options:{default:void 0,jetpack:f.QI,woo:f.pk},defaultValue:void 0,table:{category:"Theme"}}};try{y.displayName="legendArgTypes",y.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:y.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(w,h,s)=>{s.d(h,{A:()=>c});function f(l){var r,e,t="";if(typeof l=="string"||typeof l=="number")t+=l;else if(typeof l=="object")if(Array.isArray(l)){var n=l.length;for(r=0;r<n;r++)l[r]&&(e=f(l[r]))&&(t&&(t+=" "),t+=e)}else for(e in l)l[e]&&(t&&(t+=" "),t+=e);return t}function y(){for(var l,r,e=0,t="",n=arguments.length;e<n;e++)(l=arguments[e])&&(r=f(l))&&(t&&(t+=" "),t+=r);return t}const c=y}}]);
