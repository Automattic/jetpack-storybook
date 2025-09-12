"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":((k,S,e)=>{e.r(S),e.d(S,{CustomLegendPositioning:()=>g,Default:()=>h,ErrorStates:()=>E,FixedDimensions:()=>L,HorizontalBarChart:()=>u,ManyDataSeries:()=>c,SingleSeries:()=>C,SmartFormatting:()=>t,TimeSeries:()=>j,WithCompositionLegend:()=>n,WithLegend:()=>s,WithPatterns:()=>b,ZeroValueComparison:()=>K,__namedExportsOrder:()=>ee,default:()=>A});var v=e("../charts/src/stories/chart-decorator.tsx"),w=e("../charts/src/stories/theme-config.tsx"),B=e("../charts/src/stories/legend-config.tsx"),r=e("../charts/src/stories/sample-data/index.ts"),l=e("../charts/src/components/bar-chart/bar-chart.tsx"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const A={title:"JS Packages/Charts/Types/Bar Chart",component:l.A,parameters:{layout:"centered"},decorators:[v.OI],argTypes:{...v.xo,...w.jW,...B.r}},h={args:{withTooltips:!0,data:[r._E[0],r._E[1],r._E[2]],gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300}},C={args:{...h.args,data:[r._E[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},j={args:{...h.args,data:[{...r.Sb[0],label:"Data with dateString and date",data:[...r.Sb[0].data,{dateString:"2024-01-31",value:2230},{dateString:"2024-02-01",value:2580},{date:new Date("2024-02-02 00:00:00"),value:3500},{dateString:"2024-02-03 00:00:00",value:1500},{dateString:"2024-02-04",value:2500},{dateString:"2024-02-05 00:00",value:3e3}]}],options:{axis:{x:{tickFormat:_=>new Date(_).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},c={args:{...h.args,data:r._E},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},L={args:{...h.args,width:800,height:400,data:[r._E[0],r._E[1],r._E[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},b={args:{...h.args,withPatterns:!0,data:h.args.data.map(_=>({..._,data:_.data.filter(H=>parseInt(H.label)>=2016)}))}},E={render:()=>(0,a.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Empty Data"}),(0,a.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,a.jsx)(l.A,{data:[]})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Invalid Data"}),(0,a.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,a.jsx)(l.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};E.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const t={args:{withTooltips:!0,data:r.Gv,gridVisibility:"x"}};t.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const s={args:{...h.args,showLegend:!0}},n={render:_=>(0,a.jsx)("div",{style:{width:"800px"},children:(0,a.jsx)(l.A,{data:_.data||[r._E[0],r._E[1],r._E[2]],withTooltips:!0,gridVisibility:"x",maxWidth:1200,aspectRatio:.5,children:(0,a.jsx)(l.A.Legend,{orientation:_.legendOrientation||"horizontal",alignment:_.legendAlignment||"center",position:_.legendPosition||"bottom",maxWidth:_.legendMaxWidth,textOverflow:_.legendTextOverflow||"wrap"})})}),parameters:{docs:{description:{story:"Demonstrates using the composition API with `<BarChart.Legend />` as a child component. This provides the same functionality as the `showLegend` prop but allows for more flexible composition patterns."}}}},g={args:{withTooltips:!0,data:r._E.slice(0,3),gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top"},parameters:{docs:{description:{story:"Bar chart with top-left positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities."}}}},u={args:{...h.args,data:[r._E[0],r._E[1],r._E[2]],orientation:"horizontal",gridVisibility:"none"}},z=[{group:"United States",label:"United States",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:3}]},{group:"Great Britain",label:"Great Britain",data:[{label:"1896",value:1},{label:"1900",value:0},{label:"1904",value:1},{label:"1908",value:10},{label:"1912",value:9}]},{group:"Japan",label:"Japan",data:[{label:"1896",value:2},{label:"1900",value:1},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:2}]}],K={render:()=>(0,a.jsxs)("div",{style:{display:"grid",gap:"40px"},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Zero Value Display: Disabled (Default)"}),(0,a.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are not visually displayed. Bars with zero values have no height."}),(0,a.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,a.jsx)(l.A,{data:z,showZeroValues:!1,withTooltips:!0,gridVisibility:"x"})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Zero Value Display: Enabled"}),(0,a.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are visually displayed with minimum height bars. The tooltip still shows the actual value of 0, while the bar has a small visual height for better UX."}),(0,a.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,a.jsx)(l.A,{data:z,showZeroValues:!0,withTooltips:!0,gridVisibility:"x"})})]})]}),parameters:{docs:{description:{story:"Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights."}}}},ee=["Default","SingleSeries","TimeSeries","ManyDataSeries","FixedDimensions","WithPatterns","ErrorStates","SmartFormatting","WithLegend","WithCompositionLegend","CustomLegendPositioning","HorizontalBarChart","ZeroValueComparison"];h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    // limit to 3 series for better readability
    gridVisibility: 'x',
    maxWidth: 1200,
    aspectRatio: 0.5,
    resizeDebounceTime: 300
  }
}`,...h.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [medalCountsData[0]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with a single data series.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: medalCountsData
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with many data series.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 800,
    height: 400,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with fixed dimensions that override the responsive behavior.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    withPatterns: true,
    data: Default.args.data.map(country => {
      return {
        ...country,
        data: country.data.filter(d => parseInt(d.label) >= 2016)
      };
    })
  }
}`,...b.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    gridVisibility: 'x'
  }
}`,...t.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...s.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '800px'
  }}>
            <BarChart data={args.data || [medalCountsData[0], medalCountsData[1], medalCountsData[2]]} withTooltips={true} gridVisibility="x" maxWidth={1200} aspectRatio={0.5}>
                <BarChart.Legend orientation={args.legendOrientation || 'horizontal'} alignment={args.legendAlignment || 'center'} position={args.legendPosition || 'bottom'} maxWidth={args.legendMaxWidth} textOverflow={args.legendTextOverflow || 'wrap'} />
            </BarChart>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates using the composition API with \`<BarChart.Legend />\` as a child component. This provides the same functionality as the \`showLegend\` prop but allows for more flexible composition patterns.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: medalCountsData.slice(0, 3),
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
}`,...g.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,...u.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}}}),"../../../node_modules/.pnpm/@wordpress+deprecated@4.30.0/node_modules/@wordpress/deprecated/build-module/index.js":((k,S,e)=>{e.d(S,{A:()=>B});var v=e("../../../node_modules/.pnpm/@wordpress+hooks@4.30.0/node_modules/@wordpress/hooks/build-module/index.js");const w=Object.create(null);function B(r,l={}){const{since:a,version:p,alternative:A,plugin:h,link:C,hint:j}=l,c=h?` from ${h}`:"",L=a?` since version ${a}`:"",b=p?` and will be removed${c} in version ${p}`:"",E=A?` Please use ${A} instead.`:"",t=C?` See: ${C}`:"",s=j?` Note: ${j}`:"",n=`${r} is deprecated${L}${b}.${E}${t}${s}`;n in w||((0,v.Eo)("deprecated",r,l,n),console.warn(n),w[n]=!0)}}),"../charts/src/components/bar-chart/bar-chart.tsx":((k,S,e)=>{e.d(S,{A:()=>Ee});var v=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),w=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),B=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),r=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),l=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),a=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),p=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),A=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),h=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),C=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),j=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),L=e("../charts/src/hooks/use-xychart-theme.ts"),b=e("../charts/src/hooks/use-chart-data-transform.ts");const E=(o,T={enabled:!1})=>{const{enabled:y,minValueRatio:x=.6,maxValueRatio:R=.008}=T;return(0,c.useMemo)(()=>{if(!y)return o;const P=[];for(const f of o)for(const D of f.data)D.value!==null&&D.value!==0&&P.push(D.value);if(P.length===0)return o;const I=P.map(Math.abs),O=Math.min(...I),N=Math.max(...I),W=Math.min(O*x,N*R);return o.map(f=>({...f,data:f.data.map(D=>D.value===0?{...D,visualValue:W}:D)}))},[o,y,x,R])};var t=e("../charts/src/hooks/use-chart-margin.tsx"),s=e("../charts/src/hooks/use-element-height.ts"),n=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),g=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),u=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),z=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),K=e("../charts/src/utils/create-composition.ts"),ee=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),_=e("../charts/src/components/legend/legend.tsx"),H=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),fe=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),ce=e("../charts/src/components/tooltip/accessible-tooltip.tsx"),_e=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Se=e.n(_e),ue=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),te={};te.insert="head",te.singleton=!1;var Je=Se()(ue.A,te);const F=ue.A.locals||{};var je=e("../number-formatters/src/index.ts");const De=o=>new Date(o).toLocaleDateString(void 0,{month:"short",day:"numeric"}),we=o=>typeof o.paddingInner=="number"?o.paddingInner:0;function Ce(o,T,y={}){const x=(0,c.useMemo)(()=>{const R={type:"band",padding:.2,paddingInner:.1},P={type:"linear",nice:!0,zero:!1},I=o?.[0]?.data?.[0]?.label?f=>f:De,O=je.qe,N=f=>f?.label||f?.date,W=f=>{const D=f;return D?.visualValue!==void 0?D.visualValue:f?.value};return{vertical:{xTickFormat:I,yTickFormat:O,tooltipLabelFormatter:I,xAccessor:N,yAccessor:W,gridVisibility:"x",xScale:R,yScale:P},horizontal:{xTickFormat:O,yTickFormat:I,tooltipLabelFormatter:I,xAccessor:W,yAccessor:N,gridVisibility:"y",xScale:P,yScale:R}}},[o]);return(0,c.useMemo)(()=>{const R=T?"horizontal":"vertical",{xTickFormat:P,yTickFormat:I,tooltipLabelFormatter:O,xAccessor:N,yAccessor:W,gridVisibility:f,xScale:D,yScale:re}=x[R],J={...D,...y.xScale||{}},Q={...re,...y.yScale||{}},ne=T?y.axis?.y?.tickFormat:y.axis?.x?.tickFormat;return{gridVisibility:f,xScale:J,yScale:Q,accessors:{xAccessor:N,yAccessor:W},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:P,...y.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:I,...y.axis?.y||{}}},barGroup:{padding:we(T?Q:J)},tooltip:{labelFormatter:ne||O}}},[x,y,T])}var i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const Te=C.__,Ae=o=>o?.length?o.some(y=>y.data.some(x=>isNaN(x.value)||x.value===null||x.value===void 0||!x.label&&(!("date"in x&&x.date)||isNaN(x.date.getTime()))))?"Invalid data":null:"No data available",ae=(o,T)=>`bar-pattern-${o}-${T}`,me=({data:o,chartId:T,width:y,height:x=400,className:R,margin:P,withTooltips:I=!1,showLegend:O=!1,legendOrientation:N="horizontal",legendPosition:W="bottom",legendAlignment:f="center",legendMaxWidth:D,legendTextOverflow:re="wrap",legendShape:J="rect",gridVisibility:Q,renderTooltip:ne,options:Oe={},orientation:oe="vertical",withPatterns:Y=!1,showZeroValues:Me=!1,children:Be})=>{const ie=oe==="horizontal",M=(0,n.R)(T),pe=(0,L.O)(o),U=(0,b.E)(o),he=E(U,{enabled:Me}),Le=(0,ee.f)(U),V=Ce(he,ie,Oe),ge=(0,t.a)(x,V,U,pe,ie),[Ie,le]=(0,s.v)(),ve=(0,c.useRef)(null),[$,Ve]=(0,c.useState)(void 0),[Pe,We]=(0,c.useState)(!1),Fe=Math.max(0,...o.map(d=>d.data?.length||0))*o.length,{tooltipRef:Re,onChartFocus:ke,onChartBlur:Ke,onChartKeyDown:Ne}=(0,ce.JZ)({selectedIndex:$,setSelectedIndex:Ve,isNavigating:Pe,setIsNavigating:We,chartRef:ve,totalPoints:Fe}),{resolveGroupColor:xe}=(0,g.j)(),q=(0,c.useCallback)((d,m)=>xe({group:d.group,index:m,overrideColor:d.options?.stroke}),[xe]),Ue=(0,c.useCallback)(d=>()=>Y?`url(#${ae(M,d)})`:q(U[d],d),[Y,q,U,M]),ze=(0,c.useCallback)(({tooltipData:d})=>{const m=d?.nearestDatum?.datum;return m?(0,i.jsxs)("div",{className:F["bar-chart__tooltip"],children:[(0,i.jsx)("div",{className:F["bar-chart__tooltip-header"],children:d?.nearestDatum?.key}),(0,i.jsxs)("div",{className:F["bar-chart__tooltip-row"],children:[(0,i.jsxs)("span",{className:F["bar-chart__tooltip-label"],children:[V.tooltip.labelFormatter(m.label||(m.date?m.date.getTime():0),0,[]),":"]}),(0,i.jsx)("span",{className:F["bar-chart__tooltip-value"],children:m.value})]})]}):null},[V.tooltip]),Ze=(0,c.useCallback)((d,m)=>{const G=d%4,Z=ae(M,d),X={id:Z,stroke:"white",strokeWidth:1,background:m};switch(G){case 0:default:return(0,i.jsx)(v.A,{...X,width:5,height:5,orientation:["diagonal"]},Z);case 1:return(0,i.jsx)(w.A,{...X,width:6,height:6,fill:"white"},Z);case 2:return(0,i.jsx)(B.A,{...X,width:4,height:4},Z);case 3:return(0,i.jsx)(r.A,{...X,size:8,height:3},Z)}},[M]),$e=(0,c.useCallback)((d,m)=>`
			.visx-bar[fill="url(#${ae(M,d)})"] {
				stroke: ${m};
				stroke-width: 1;
				}
			`,[M]),Ge=(0,c.useCallback)(()=>{if($===void 0)return"";const d=Math.max(...o.map(He=>He.data.length)),m=Math.floor($/o.length),G=$%o.length;if(m>=d||G>=o.length)return"";const Z=o[G];if(m>=Z.data.length)return"";const X=G*d+m;return`
			.bar-chart[data-chart-id="bar-chart-${M}"] .visx-bar-group .visx-bar:nth-child(${X+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[$,o,M]),de=Ae(U),Xe=!de,Ye=(0,c.useMemo)(()=>({orientation:oe,withPatterns:Y}),[oe,Y]);if((0,u.t)({chartId:M,legendItems:Le,chartType:"bar",isDataValid:Xe,metadata:Ye}),de)return(0,i.jsx)("div",{className:(0,j.A)("bar-chart",F["bar-chart"]),children:de});const be=Q??V.gridVisibility,ye=Ge();return(0,i.jsx)(H.O.Provider,{value:{chartId:M,chartWidth:y,chartHeight:x-(O?le:0)},children:(0,i.jsxs)("div",{className:(0,j.A)("bar-chart",F["bar-chart"],R),"data-testid":"bar-chart",role:"grid","aria-label":Te("Bar chart","jetpack-charts"),style:{width:y,height:x,display:"flex",flexDirection:O&&W==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:Ne,onFocus:ke,onBlur:Ke,ref:ve,"data-chart-id":`bar-chart-${M}`,children:[(0,i.jsxs)(l.A,{theme:pe,width:y,height:x-(O?le:0),margin:{...ge,...P,...O&&W==="top"?{top:(ge.top||0)+le}:{}},xScale:V.xScale,yScale:V.yScale,horizontal:ie,pointerEventsDataKey:"nearest",children:[(0,i.jsx)(a.A,{columns:be.includes("y"),rows:be.includes("x"),numTicks:4}),Y&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("defs",{"data-testid":"bar-chart-patterns",children:U.map((d,m)=>Ze(m,q(d,m)))}),(0,i.jsx)("style",{children:U.map((d,m)=>$e(m,q(d,m)))})]}),ye&&(0,i.jsx)("style",{children:ye}),(0,i.jsx)(p.A,{padding:V.barGroup.padding,children:he.map((d,m)=>(0,i.jsx)(A.A,{dataKey:d?.label,data:d.data,yAccessor:V.accessors.yAccessor,xAccessor:V.accessors.xAccessor,colorAccessor:Ue(m)},d?.label))}),(0,i.jsx)(h.A,{...V.axis.x}),(0,i.jsx)(h.A,{...V.axis.y}),I&&(0,i.jsx)(ce.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:ne||ze,selectedIndex:$,tooltipRef:Re,keyboardFocusedClassName:F["bar-chart__tooltip--keyboard-focused"],series:o,mode:"individual"})]}),O&&(0,i.jsx)(_.s,{orientation:N,position:W,alignment:f,maxWidth:D,textOverflow:re,className:F["bar-chart__legend"],shape:J,ref:Ie,chartId:M}),Be]})})},se=o=>(0,c.useContext)(z.m)?(0,i.jsx)(me,{...o}):(0,i.jsx)(z.S,{children:(0,i.jsx)(me,{...o})});se.displayName="BarChart";const Qe=(0,K.E)(se,{Legend:_.s}),Ee=(0,K.E)((0,fe.F)(se),{Legend:_.s})}),"../charts/src/stories/legend-config.tsx":((k,S,e)=>{e.d(S,{r:()=>v});const v={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'}};try{v.displayName="legendArgTypes",v.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:v.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((k,S,e)=>{e.d(S,{A:()=>B});function v(r){var l,a,p="";if(typeof r=="string"||typeof r=="number")p+=r;else if(typeof r=="object")if(Array.isArray(r)){var A=r.length;for(l=0;l<A;l++)r[l]&&(a=v(r[l]))&&(p&&(p+=" "),p+=a)}else for(a in r)r[a]&&(p&&(p+=" "),p+=a);return p}function w(){for(var r,l,a=0,p="",A=arguments.length;a<A;a++)(r=arguments[a])&&(l=v(r))&&(p&&(p+=" "),p+=l);return p}const B=w}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":((k,S,e)=>{e.d(S,{A:()=>a});var v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=e.n(v),B=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(B),l=r()(w());l.push([k.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),l.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const a=l}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(k=>{var S=function(s){return e(s)&&!v(s)};function e(t){return!!t&&typeof t=="object"}function v(t){var s=Object.prototype.toString.call(t);return s==="[object RegExp]"||s==="[object Date]"||r(t)}var w=typeof Symbol=="function"&&Symbol.for,B=w?Symbol.for("react.element"):60103;function r(t){return t.$$typeof===B}function l(t){return Array.isArray(t)?[]:{}}function a(t,s){return s.clone!==!1&&s.isMergeableObject(t)?b(l(t),t,s):t}function p(t,s,n){return t.concat(s).map(function(g){return a(g,n)})}function A(t,s){if(!s.customMerge)return b;var n=s.customMerge(t);return typeof n=="function"?n:b}function h(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(s){return Object.propertyIsEnumerable.call(t,s)}):[]}function C(t){return Object.keys(t).concat(h(t))}function j(t,s){try{return s in t}catch{return!1}}function c(t,s){return j(t,s)&&!(Object.hasOwnProperty.call(t,s)&&Object.propertyIsEnumerable.call(t,s))}function L(t,s,n){var g={};return n.isMergeableObject(t)&&C(t).forEach(function(u){g[u]=a(t[u],n)}),C(s).forEach(function(u){c(t,u)||(j(t,u)&&n.isMergeableObject(s[u])?g[u]=A(u,n)(t[u],s[u],n):g[u]=a(s[u],n))}),g}function b(t,s,n){n=n||{},n.arrayMerge=n.arrayMerge||p,n.isMergeableObject=n.isMergeableObject||S,n.cloneUnlessOtherwiseSpecified=a;var g=Array.isArray(s),u=Array.isArray(t),z=g===u;return z?g?n.arrayMerge(t,s,n):L(t,s,n):a(s,n)}b.all=function(s,n){if(!Array.isArray(s))throw new Error("first argument should be an array");return s.reduce(function(g,u){return b(g,u,n)},{})};var E=b;k.exports=E})}]);
