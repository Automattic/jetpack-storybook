"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":(x,_,d)=>{d.r(_),d.d(_,{CustomLegendPositioning:()=>c,Default:()=>u,ErrorStates:()=>a,FixedDimensions:()=>e,HorizontalBarChart:()=>f,ManyDataSeries:()=>s,SingleSeries:()=>y,SmartFormatting:()=>i,TimeSeries:()=>h,WithLegend:()=>n,WithPatterns:()=>t,ZeroValueComparison:()=>w,__namedExportsOrder:()=>S,default:()=>l});var v=d("../charts/src/stories/legend-config.tsx"),b=d("../charts/src/components/line-chart/stories/large-values-sample.ts"),g=d("../charts/src/components/line-chart/stories/site-traffic-sample.ts"),m=d("../charts/src/components/bar-chart/bar-chart.tsx"),p=d("../charts/src/components/bar-chart/stories/sample-data.ts"),r=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const l={title:"JS Packages/Charts/Types/Bar Chart",component:m.A,parameters:{layout:"centered"},decorators:[T=>(0,r.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,r.jsx)(T,{})})],argTypes:{maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}},...v.r}},u={args:{withTooltips:!0,data:[p.A[0],p.A[1],p.A[2]],gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300}},y={args:{...u.args,data:[p.A[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},h={args:{...u.args,data:[{...g.A[0],label:"Data with dateString and date",data:[...g.A[0].data,{dateString:"2024-01-31",value:2230},{dateString:"2024-02-01",value:2580},{date:new Date("2024-02-02 00:00:00"),value:3500},{dateString:"2024-02-03 00:00:00",value:1500},{dateString:"2024-02-04",value:2500},{dateString:"2024-02-05 00:00",value:3e3}]}],options:{axis:{x:{tickFormat:T=>new Date(T).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},s={args:{...u.args,data:p.A},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},e={args:{...u.args,width:800,height:400,data:[p.A[0],p.A[1],p.A[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},t={args:{...u.args,withPatterns:!0,data:p.A.map(T=>({...T,data:T.data.filter(E=>parseInt(E.label)>=2016)}))}},a={render:()=>(0,r.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Empty Data"}),(0,r.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,r.jsx)(m.A,{data:[]})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Invalid Data"}),(0,r.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,r.jsx)(m.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};a.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const i={args:{withTooltips:!0,data:b.A,gridVisibility:"x"}};i.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const n={args:{...u.args,showLegend:!0}},c={args:{withTooltips:!0,data:p.A.slice(0,3),gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top"},parameters:{docs:{description:{story:"Bar chart with top-left positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities."}}}},f={args:{...u.args,data:[p.A[0],p.A[1],p.A[2]],orientation:"horizontal",gridVisibility:"none"}},D=[{group:"United States",label:"United States",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:3}]},{group:"Great Britain",label:"Great Britain",data:[{label:"1896",value:1},{label:"1900",value:0},{label:"1904",value:1},{label:"1908",value:10},{label:"1912",value:9}]},{group:"Japan",label:"Japan",data:[{label:"1896",value:2},{label:"1900",value:1},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:2}]}],w={render:()=>(0,r.jsxs)("div",{style:{display:"grid",gap:"40px"},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Zero Value Display: Disabled (Default)"}),(0,r.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are not visually displayed. Bars with zero values have no height."}),(0,r.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,r.jsx)(m.A,{data:D,showZeroValues:!1,withTooltips:!0,gridVisibility:"x"})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Zero Value Display: Enabled"}),(0,r.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are visually displayed with minimum height bars. The tooltip still shows the actual value of 0, while the bar has a small visual height for better UX."}),(0,r.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,r.jsx)(m.A,{data:D,showZeroValues:!0,withTooltips:!0,gridVisibility:"x"})})]})]}),parameters:{docs:{description:{story:"Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights."}}}},S=["Default","SingleSeries","TimeSeries","ManyDataSeries","FixedDimensions","WithPatterns","ErrorStates","SmartFormatting","WithLegend","CustomLegendPositioning","HorizontalBarChart","ZeroValueComparison"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: [data[0], data[1], data[2]],
    // limit to 3 series for better readability
    gridVisibility: 'x',
    maxWidth: 1200,
    aspectRatio: 0.5,
    resizeDebounceTime: 300
  }
}`,...u.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    gridVisibility: 'x'
  }
}`,...i.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...n.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [data[0], data[1], data[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,...f.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}}},"../charts/src/components/line-chart/stories/large-values-sample.ts":(x,_,d)=>{d.d(_,{A:()=>b});const b=[{label:"Revenue (Billions)",data:[{date:new Date("2024-01-01"),value:12e8},{date:new Date("2024-02-01"),value:145e7},{date:new Date("2024-03-01"),value:168e7},{date:new Date("2024-04-01"),value:21e8},{date:new Date("2024-05-01"),value:235e7},{date:new Date("2024-06-01"),value:28e8}],options:{stroke:"#3858E9"}},{label:"Users (Millions)",data:[{date:new Date("2024-01-01"),value:45e6},{date:new Date("2024-02-01"),value:52e6},{date:new Date("2024-03-01"),value:48e6},{date:new Date("2024-04-01"),value:61e6},{date:new Date("2024-05-01"),value:75e6},{date:new Date("2024-06-01"),value:89e6}],options:{stroke:"#00BA37"}}]},"../charts/src/components/line-chart/stories/site-traffic-sample.ts":(x,_,d)=>{d.d(_,{A:()=>v});const v=[{label:"Views",options:{stroke:"#069e08"},data:[{date:new Date("2024-01-01"),value:2558},{date:new Date("2024-01-02"),value:3399},{date:new Date("2024-01-03"),value:2260},{date:new Date("2024-01-04"),value:2331},{date:new Date("2024-01-05"),value:3302},{date:new Date("2024-01-06"),value:1852},{date:new Date("2024-01-07"),value:2607},{date:new Date("2024-01-08"),value:2804},{date:new Date("2024-01-09"),value:3260},{date:new Date("2024-01-10"),value:2941},{date:new Date("2024-01-11"),value:2857},{date:new Date("2024-01-12"),value:3461},{date:new Date("2024-01-13"),value:1548},{date:new Date("2024-01-14"),value:2739},{date:new Date("2024-01-15"),value:3288},{date:new Date("2024-01-16"),value:2869},{date:new Date("2024-01-17"),value:2590},{date:new Date("2024-01-18"),value:2609},{date:new Date("2024-01-19"),value:2648},{date:new Date("2024-01-20"),value:1805},{date:new Date("2024-01-21"),value:2531},{date:new Date("2024-01-22"),value:3605},{date:new Date("2024-01-23"),value:2366},{date:new Date("2024-01-24"),value:2782},{date:new Date("2024-01-25"),value:2885},{date:new Date("2024-01-26"),value:2918},{date:new Date("2024-01-27"),value:2518},{date:new Date("2024-01-28"),value:2378},{date:new Date("2024-01-29"),value:2714},{date:new Date("2024-01-30"),value:3279}]},{label:"Visitors",options:{stroke:"rgb(230, 139, 40)"},data:[{date:new Date("2024-01-01"),value:2412},{date:new Date("2024-01-02"),value:1899},{date:new Date("2024-01-03"),value:2061},{date:new Date("2024-01-04"),value:1939},{date:new Date("2024-01-05"),value:1986},{date:new Date("2024-01-06"),value:1560},{date:new Date("2024-01-07"),value:1741},{date:new Date("2024-01-08"),value:2120},{date:new Date("2024-01-09"),value:1889},{date:new Date("2024-01-10"),value:1666},{date:new Date("2024-01-11"),value:2396},{date:new Date("2024-01-12"),value:2276},{date:new Date("2024-01-13"),value:1218},{date:new Date("2024-01-14"),value:1228},{date:new Date("2024-01-15"),value:1600},{date:new Date("2024-01-16"),value:1814},{date:new Date("2024-01-17"),value:1701},{date:new Date("2024-01-18"),value:1507},{date:new Date("2024-01-19"),value:1833},{date:new Date("2024-01-20"),value:1407},{date:new Date("2024-01-21"),value:965},{date:new Date("2024-01-22"),value:2288},{date:new Date("2024-01-23"),value:2135},{date:new Date("2024-01-24"),value:1824},{date:new Date("2024-01-25"),value:2219},{date:new Date("2024-01-26"),value:1918},{date:new Date("2024-01-27"),value:1101},{date:new Date("2024-01-28"),value:1695},{date:new Date("2024-01-29"),value:1615},{date:new Date("2024-01-30"),value:2056}]}]},"../charts/src/components/shared/use-chart-data-transform.ts":(x,_,d)=>{d.d(_,{E:()=>o});var v=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),b=d("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js"),g=d("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js"),m=d("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse.js");const p=l=>/T.*[Z]$|T.*[+-]\d{2}:?\d{2}$/.test(l),r=l=>{const u=l.trim();if(p(u)){const h=(0,b.H)(u);return(0,g.f)(h)?h:new Date(NaN)}const y=["yyyy-MM-dd","yyyy-MM-dd HH:mm:ss","yyyy-MM-dd HH:mm","yyyy-MM-dd'T'HH:mm:ss","yyyy-MM-dd'T'HH:mm:ss.SSS","yyyy-MM-dd'T'HH:mm"];for(const h of y){const s=(0,m.qg)(u,h,new Date);if((0,g.f)(s))return s}return new Date(NaN)},o=l=>(0,v.useMemo)(()=>{const u=l?.[0]?.data?.[0];return u&&("date"in u||"dateString"in u)?l.map(h=>({...h,data:h.data.map(s=>{let e;return"date"in s&&s.date?e=s.date:"dateString"in s&&s.dateString&&(e=r(s.dateString)),{...s,date:e}}).sort((s,e)=>!s.date||!e.date?0:s.date.getTime()-e.date.getTime())})):l},[l])},"../charts/src/components/shared/use-chart-margin.tsx":(x,_,d)=>{d.d(_,{a:()=>p});var v=d("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),b=d("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),g=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=d("../charts/src/components/shared/utils.ts");const p=(r,o,l,u,y=!1)=>{const h=(0,g.useMemo)(()=>{const s=l.flatMap(i=>i.data);if(y)return s.map(i=>i.label||o.axis?.y?.tickFormat(i.date.getTime(),0,[]));const e=Math.min(...s.map(i=>i.value)),t=Math.max(...s.map(i=>i.value)),a=(0,v.A)({...o.yScale,domain:[e,t],range:[r,0]});return(0,b.A)(a,o.axis?.y?.numTicks)},[o,l,r,y]);return(0,g.useMemo)(()=>{const s={top:10,right:20,bottom:20,left:20},e=40,t=o.axis?.y?.orientation,a=t==="right"?u.axisStyles.y.right:u.axisStyles.y.left,n=((0,m.S)(h,o.axis?.y?.tickFormat,a.axisLabel)??e)+(a?.tickLength??0);return t==="right"?s.right=n:s.left=n,o.axis?.x?.orientation==="top"&&(s.top=20,s.bottom=10),s},[o,u,h])}},"../charts/src/components/shared/utils.ts":(x,_,d)=>{d.d(_,{S:()=>b,n:()=>g});var v=d("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js");const b=(m,p,r)=>{const o=m.map(u=>p(u,0,[])),l=o.reduce((u,y)=>u.length>=y.length?u:y,o[0]);return(0,v.A)(l,r)},g=()=>typeof navigator<"u"&&navigator.userAgent?/^((?!chrome|android).)*safari/i.test(navigator.userAgent):!1},"../charts/src/components/tooltip/accessible-tooltip.tsx":(x,_,d)=>{d.d(_,{JZ:()=>r,OZ:()=>p});var v=d("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/context/TooltipContext.js"),b=d("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),g=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const p=({renderTooltip:o,selectedIndex:l,tooltipRef:u,keyboardFocusedClassName:y,series:h=[],mode:s="group",...e})=>{const t=(0,g.useContext)(v.A),a=(0,g.useMemo)(()=>{if(s!=="individual")return[];if(h.length===0)return[];const n=Math.max(...h.map(f=>f.data.length)),c=[];for(let f=0;f<n;f++)for(let D=0;D<h.length;D++){const w=h[D];f<w.data.length&&c.push({datum:w.data[f],seriesLabel:w.label,seriesIndex:D,dataPointIndex:f})}return c},[h,s]);(0,g.useEffect)(()=>{if(l===void 0){t?.hideTooltip();return}if(s==="group")h.forEach((n,c)=>{if(l<n.data.length){const f=n.data[l];t?.showTooltip({datum:f,key:n.label,index:c})}});else if(s==="individual"&&l<a.length){const n=a[l];t?.showTooltip({datum:n.datum,key:n.seriesLabel,index:n.seriesIndex})}},[l,a,h]);const i=(0,g.useMemo)(()=>{if(o)return n=>{const c=o(n);return l!==void 0?(0,m.jsx)("div",{ref:u,tabIndex:-1,role:"tooltip","aria-atomic":"true",className:y,"data-testid":`chart-tooltip-${l}`,children:c},`chart-tooltip-${l}`):(0,m.jsx)("div",{role:"tooltip","aria-live":"polite",children:c})}},[o,l,u,y]);return(0,m.jsx)(b.A,{...e,renderTooltip:i})},r=({selectedIndex:o,setSelectedIndex:l,isNavigating:u,setIsNavigating:y,chartRef:h,totalPoints:s})=>{const e=(0,g.useCallback)(n=>{n&&o!==void 0&&n.focus()},[o]),t=(0,g.useCallback)(()=>{!u&&o!==void 0&&l(0)},[u,o,l]),a=(0,g.useCallback)(()=>{y(!1)},[y]),i=(0,g.useCallback)(n=>{if(s===0)return;if(n.key==="Tab"){h.current?.focus(),l(void 0),y(!1);return}const c=o===void 0?-1:o;if(c+1>=s&&["ArrowRight"].includes(n.key)){h.current?.focus(),l(void 0),y(!1);return}n.preventDefault(),["ArrowRight"].includes(n.key)?(y(!0),l((c+1)%s)):["ArrowLeft"].includes(n.key)?(y(!0),l((c-1+s)%s)):n.key==="Escape"&&(l(void 0),y(!1),h.current?.focus())},[s,o,l,y,h]);return{tooltipRef:e,onChartFocus:t,onChartBlur:a,onChartKeyDown:i}};try{p.displayName="AccessibleTooltip",p.__docgenInfo={description:"",displayName:"AccessibleTooltip",props:{renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!1,type:{name:"number"}},tooltipRef:{defaultValue:null,description:"",name:"tooltipRef",required:!1,type:{name:"(element: HTMLDivElement) => void"}},keyboardFocusedClassName:{defaultValue:null,description:"",name:"keyboardFocusedClassName",required:!1,type:{name:"string"}},tooltipData:{defaultValue:null,description:`Flattened tooltip data prepared by parent component
Each index corresponds to one tooltip to show`,name:"tooltipData",required:!1,type:{name:"FlattenedTooltipData[]"}},series:{defaultValue:{value:"[]"},description:`For line charts: series data to show all series at selected data point
When provided, shows all series instead of individual tooltips`,name:"series",required:!1,type:{name:"SeriesData[]"}},mode:{defaultValue:{value:"group"},description:`Whether to combine tooltip information from multiple series into a single tooltip. This is useful for line charts.
Or to show individual tooltips for each series. This is useful for bar charts.`,name:"mode",required:!1,type:{name:"enum",value:[{value:'"group"'},{value:'"individual"'}]}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<DataPointDate>) => React.ReactNode"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"]={docgenInfo:p.__docgenInfo,name:"AccessibleTooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"})}catch{}try{r.displayName="useKeyboardNavigation",r.__docgenInfo={description:"",displayName:"useKeyboardNavigation",props:{selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!0,type:{name:"number"}},setSelectedIndex:{defaultValue:null,description:"",name:"setSelectedIndex",required:!0,type:{name:"(index: number) => void"}},isNavigating:{defaultValue:null,description:"",name:"isNavigating",required:!0,type:{name:"boolean"}},setIsNavigating:{defaultValue:null,description:"",name:"setIsNavigating",required:!0,type:{name:"(navigating: boolean) => void"}},chartRef:{defaultValue:null,description:"",name:"chartRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}},totalPoints:{defaultValue:null,description:"Total number of navigation points (length of tooltip data array)",name:"totalPoints",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"]={docgenInfo:r.__docgenInfo,name:"useKeyboardNavigation",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"})}catch{}try{accessibletooltip.displayName="accessibletooltip",accessibletooltip.__docgenInfo={description:`This is a wrapper component which bails early if tooltip is not visible.
If scroll detection is enabled in UseTooltipPortalOptions, this avoids re-rendering
the component on every scroll. If many charts with Tooltips are rendered on a page,
this also avoids creating many resize observers / hitting browser limits.`,displayName:"accessibletooltip",props:{renderTooltip:{defaultValue:null,description:`When TooltipContext.tooltipOpen=true, this function is invoked and if the
return value is non-null, its content is rendered inside the tooltip container.
Content will be rendered in an HTML parent.`,name:"renderTooltip",required:!0,type:{name:"(params: RenderTooltipParams<Datum>) => React.ReactNode"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<Datum>) => React.ReactNode"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"]={docgenInfo:accessibletooltip.__docgenInfo,name:"accessibletooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"})}catch{}},"../charts/src/stories/legend-config.tsx":(x,_,d)=>{d.d(_,{r:()=>b});var v=d("../charts/src/providers/theme/themes.ts");const b={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},theme:{control:{type:"select"},options:{default:void 0,jetpack:v.QI,woo:v.pk},defaultValue:void 0,table:{category:"Theme"}}};try{b.displayName="legendArgTypes",b.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:b.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(x,_,d)=>{d.d(_,{A:()=>g});function v(m){var p,r,o="";if(typeof m=="string"||typeof m=="number")o+=m;else if(typeof m=="object")if(Array.isArray(m)){var l=m.length;for(p=0;p<l;p++)m[p]&&(r=v(m[p]))&&(o&&(o+=" "),o+=r)}else for(r in m)m[r]&&(o&&(o+=" "),o+=r);return o}function b(){for(var m,p,r=0,o="",l=arguments.length;r<l;r++)(m=arguments[r])&&(p=v(m))&&(o&&(o+=" "),o+=p);return o}const g=b},"../../../node_modules/.pnpm/tannin@1.2.0/node_modules/tannin/index.js":(x,_,d)=>{d.d(_,{A:()=>s});var v,b,g,m;v={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1},b=["(","?"],g={")":["("],":":["?","?:"]},m=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;function p(e){for(var t=[],a=[],i,n,c,f;i=e.match(m);){for(n=i[0],c=e.substr(0,i.index).trim(),c&&t.push(c);f=a.pop();){if(g[n]){if(g[n][0]===f){n=g[n][1]||n;break}}else if(b.indexOf(f)>=0||v[f]<v[n]){a.push(f);break}t.push(f)}g[n]||a.push(n),e=e.substr(i.index+n.length)}return e=e.trim(),e&&t.push(e),t.concat(a.reverse())}var r={"!":function(e){return!e},"*":function(e,t){return e*t},"/":function(e,t){return e/t},"%":function(e,t){return e%t},"+":function(e,t){return e+t},"-":function(e,t){return e-t},"<":function(e,t){return e<t},"<=":function(e,t){return e<=t},">":function(e,t){return e>t},">=":function(e,t){return e>=t},"==":function(e,t){return e===t},"!=":function(e,t){return e!==t},"&&":function(e,t){return e&&t},"||":function(e,t){return e||t},"?:":function(e,t,a){if(e)throw t;return a}};function o(e,t){var a=[],i,n,c,f,D,w;for(i=0;i<e.length;i++){if(D=e[i],f=r[D],f){for(n=f.length,c=Array(n);n--;)c[n]=a.pop();try{w=f.apply(null,c)}catch(S){return S}}else t.hasOwnProperty(D)?w=t[D]:w=+D;a.push(w)}return a[0]}function l(e){var t=p(e);return function(a){return o(t,a)}}function u(e){var t=l(e);return function(a){return+t({n:a})}}var y={contextDelimiter:"",onMissingKey:null};function h(e){var t,a,i;for(t=e.split(";"),a=0;a<t.length;a++)if(i=t[a].trim(),i.indexOf("plural=")===0)return i.substr(7)}function s(e,t){var a;this.data=e,this.pluralForms={},this.options={};for(a in y)this.options[a]=t!==void 0&&a in t?t[a]:y[a]}s.prototype.getPluralForm=function(e,t){var a=this.pluralForms[e],i,n,c;return a||(i=this.data[e][""],c=i["Plural-Forms"]||i["plural-forms"]||i.plural_forms,typeof c!="function"&&(n=h(i["Plural-Forms"]||i["plural-forms"]||i.plural_forms),c=u(n)),a=this.pluralForms[e]=c),a(t)},s.prototype.dcnpgettext=function(e,t,a,i,n){var c,f,D;return n===void 0?c=0:c=this.getPluralForm(e,n),f=a,t&&(f=t+this.options.contextDelimiter+a),D=this.data[e][f],D&&D[c]?D[c]:(this.options.onMissingKey&&this.options.onMissingKey(a,e),c===0?a:i)}}}]);
