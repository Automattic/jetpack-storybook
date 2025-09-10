"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":((A,D,e)=>{e.r(D),e.d(D,{CustomLegendPositioning:()=>f,Default:()=>d,ErrorStates:()=>S,FixedDimensions:()=>m,HorizontalBarChart:()=>y,ManyDataSeries:()=>r,SingleSeries:()=>p,SmartFormatting:()=>a,TimeSeries:()=>c,WithCompositionLegend:()=>n,WithLegend:()=>t,WithPatterns:()=>_,ZeroValueComparison:()=>z,__namedExportsOrder:()=>te,default:()=>o});var x=e("../charts/src/stories/chart-decorator.tsx"),C=e("../charts/src/stories/theme-config.tsx"),g=e("../charts/src/stories/legend-config.tsx"),i=e("../charts/src/stories/sample-data/index.ts"),u=e("../charts/src/components/bar-chart/bar-chart.tsx"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o={title:"JS Packages/Charts/Types/Bar Chart",component:u.A,parameters:{layout:"centered"},decorators:[x.OI],argTypes:{...x.xo,...C.jW,...g.r}},d={args:{withTooltips:!0,data:[i._E[0],i._E[1],i._E[2]],gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300}},p={args:{...d.args,data:[i._E[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},c={args:{...d.args,data:[{...i.Sb[0],label:"Data with dateString and date",data:[...i.Sb[0].data,{dateString:"2024-01-31",value:2230},{dateString:"2024-02-01",value:2580},{date:new Date("2024-02-02 00:00:00"),value:3500},{dateString:"2024-02-03 00:00:00",value:1500},{dateString:"2024-02-04",value:2500},{dateString:"2024-02-05 00:00",value:3e3}]}],options:{axis:{x:{tickFormat:N=>new Date(N).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},r={args:{...d.args,data:i._E},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},m={args:{...d.args,width:800,height:400,data:[i._E[0],i._E[1],i._E[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},_={args:{...d.args,withPatterns:!0,data:d.args.data.map(N=>({...N,data:N.data.filter(J=>parseInt(J.label)>=2016)}))}},S={render:()=>(0,s.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Empty Data"}),(0,s.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,s.jsx)(u.A,{data:[]})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Invalid Data"}),(0,s.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,s.jsx)(u.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};S.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const a={args:{withTooltips:!0,data:i.Gv,gridVisibility:"x"}};a.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const t={args:{...d.args,showLegend:!0}},n={render:()=>(0,s.jsx)("div",{style:{width:"800px"},children:(0,s.jsx)(u.A,{data:[i._E[0],i._E[1],i._E[2]],withTooltips:!0,gridVisibility:"x",maxWidth:1200,aspectRatio:.5,children:(0,s.jsx)(u.A.Legend,{orientation:"horizontal",alignment:"center",position:"bottom"})})}),parameters:{docs:{description:{story:"Demonstrates using the composition API with `<BarChart.Legend />` as a child component. This provides the same functionality as the `showLegend` prop but allows for more flexible composition patterns."}}}},f={args:{withTooltips:!0,data:i._E.slice(0,3),gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top"},parameters:{docs:{description:{story:"Bar chart with top-left positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities."}}}},y={args:{...d.args,data:[i._E[0],i._E[1],i._E[2]],orientation:"horizontal",gridVisibility:"none"}},L=[{group:"United States",label:"United States",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:3}]},{group:"Great Britain",label:"Great Britain",data:[{label:"1896",value:1},{label:"1900",value:0},{label:"1904",value:1},{label:"1908",value:10},{label:"1912",value:9}]},{group:"Japan",label:"Japan",data:[{label:"1896",value:2},{label:"1900",value:1},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:2}]}],z={render:()=>(0,s.jsxs)("div",{style:{display:"grid",gap:"40px"},children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Zero Value Display: Disabled (Default)"}),(0,s.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are not visually displayed. Bars with zero values have no height."}),(0,s.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,s.jsx)(u.A,{data:L,showZeroValues:!1,withTooltips:!0,gridVisibility:"x"})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Zero Value Display: Enabled"}),(0,s.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are visually displayed with minimum height bars. The tooltip still shows the actual value of 0, while the bar has a small visual height for better UX."}),(0,s.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,s.jsx)(u.A,{data:L,showZeroValues:!0,withTooltips:!0,gridVisibility:"x"})})]})]}),parameters:{docs:{description:{story:"Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights."}}}},te=["Default","SingleSeries","TimeSeries","ManyDataSeries","FixedDimensions","WithPatterns","ErrorStates","SmartFormatting","WithLegend","WithCompositionLegend","CustomLegendPositioning","HorizontalBarChart","ZeroValueComparison"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    // limit to 3 series for better readability
    gridVisibility: 'x',
    maxWidth: 1200,
    aspectRatio: 0.5,
    resizeDebounceTime: 300
  }
}`,...d.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    gridVisibility: 'x'
  }
}`,...a.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...t.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '800px'
  }}>
            <BarChart data={[medalCountsData[0], medalCountsData[1], medalCountsData[2]]} withTooltips={true} gridVisibility="x" maxWidth={1200} aspectRatio={0.5}>
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
}`,...n.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,...y.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}}}),"../../../node_modules/.pnpm/@wordpress+deprecated@4.30.0/node_modules/@wordpress/deprecated/build-module/index.js":((A,D,e)=>{e.d(D,{A:()=>g});var x=e("../../../node_modules/.pnpm/@wordpress+hooks@4.30.0/node_modules/@wordpress/hooks/build-module/index.js");const C=Object.create(null);function g(i,u={}){const{since:s,version:l,alternative:o,plugin:d,link:p,hint:c}=u,r=d?` from ${d}`:"",m=s?` since version ${s}`:"",_=l?` and will be removed${r} in version ${l}`:"",S=o?` Please use ${o} instead.`:"",a=p?` See: ${p}`:"",t=c?` Note: ${c}`:"",n=`${i} is deprecated${m}${_}.${S}${a}${t}`;n in C||((0,x.Eo)("deprecated",i,u,n),console.warn(n),C[n]=!0)}}),"../charts/src/components/bar-chart/bar-chart.tsx":((A,D,e)=>{e.d(D,{A:()=>Ee});var x=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),C=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),g=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),i=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),u=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),s=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),l=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),o=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),d=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),p=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),c=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=e("../charts/src/hooks/use-xychart-theme.ts"),_=e("../charts/src/hooks/use-chart-data-transform.ts");const S=(h,V={enabled:!1})=>{const{enabled:w,minValueRatio:j=.6,maxValueRatio:k=.008}=V;return(0,r.useMemo)(()=>{if(!w)return h;const W=[];for(const E of h)for(const O of E.data)O.value!==null&&O.value!==0&&W.push(O.value);if(W.length===0)return h;const B=W.map(Math.abs),M=Math.min(...B),K=Math.max(...B),I=Math.min(M*j,K*k);return h.map(E=>({...E,data:E.data.map(O=>O.value===0?{...O,visualValue:I}:O)}))},[h,w,j,k])};var a=e("../charts/src/hooks/use-chart-margin.tsx"),t=e("../charts/src/hooks/use-element-height.ts"),n=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),f=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),y=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),L=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),z=e("../charts/src/utils/create-composition.ts"),te=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),N=e("../charts/src/components/legend/legend.tsx"),J=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),ve=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),de=e("../charts/src/components/tooltip/accessible-tooltip.tsx"),xe=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_e=e.n(xe),ce=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.4.47_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),ae={};ae.insert="head",ae.singleton=!1;var Ye=_e()(ce.A,ae);const F=ce.A.locals||{};var Se=e("../number-formatters/src/index.ts");const Te=h=>new Date(h).toLocaleDateString(void 0,{month:"short",day:"numeric"}),De=h=>typeof h.paddingInner=="number"?h.paddingInner:0;function Ce(h,V,w={}){const j=(0,r.useMemo)(()=>{const k={type:"band",padding:.2,paddingInner:.1},W={type:"linear",nice:!0,zero:!1},B=h?.[0]?.data?.[0]?.label?E=>E:Te,M=Se.qe,K=E=>E?.label||E?.date,I=E=>{const O=E;return O?.visualValue!==void 0?O.visualValue:E?.value};return{vertical:{xTickFormat:B,yTickFormat:M,tooltipLabelFormatter:B,xAccessor:K,yAccessor:I,gridVisibility:"x",xScale:k,yScale:W},horizontal:{xTickFormat:M,yTickFormat:B,tooltipLabelFormatter:B,xAccessor:I,yAccessor:K,gridVisibility:"y",xScale:W,yScale:k}}},[h]);return(0,r.useMemo)(()=>{const k=V?"horizontal":"vertical",{xTickFormat:W,yTickFormat:B,tooltipLabelFormatter:M,xAccessor:K,yAccessor:I,gridVisibility:E,xScale:O,yScale:oe}=j[k],Q={...O,...w.xScale||{}},q={...oe,...w.yScale||{}},Y=V?w.axis?.y?.tickFormat:w.axis?.x?.tickFormat;return{gridVisibility:E,xScale:Q,yScale:q,accessors:{xAccessor:K,yAccessor:I},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:W,...w.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:B,...w.axis?.y||{}}},barGroup:{padding:De(V?q:Q)},tooltip:{labelFormatter:Y||M}}},[j,w,V])}var b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const je=p.__,we=h=>h?.length?h.some(w=>w.data.some(j=>isNaN(j.value)||j.value===null||j.value===void 0||!j.label&&(!("date"in j&&j.date)||isNaN(j.date.getTime()))))?"Invalid data":null:"No data available",se=(h,V)=>`bar-pattern-${h}-${V}`,ue=({data:h,chartId:V,width:w,height:j=400,className:k,margin:W,withTooltips:B=!1,showLegend:M=!1,legendOrientation:K="horizontal",legendPosition:I="bottom",legendAlignment:E="center",legendShape:O="rect",gridVisibility:oe,renderTooltip:Q,options:q={},orientation:Y="vertical",withPatterns:X=!1,showZeroValues:Oe=!1,children:Ve})=>{const ne=Y==="horizontal",P=(0,n.R)(V),pe=(0,m.O)(h),G=(0,_.E)(h),me=S(G,{enabled:Oe}),Ae=(0,te.f)(G),R=Ce(me,ne,q),he=(0,a.a)(j,R,G,pe,ne),[Me,ie]=(0,t.v)(),fe=(0,r.useRef)(null),[$,Pe]=(0,r.useState)(void 0),[Le,Be]=(0,r.useState)(!1),Re=Math.max(0,...h.map(v=>v.data?.length||0))*h.length,{tooltipRef:We,onChartFocus:Ie,onChartBlur:Fe,onChartKeyDown:ke}=(0,de.JZ)({selectedIndex:$,setSelectedIndex:Pe,isNavigating:Le,setIsNavigating:Be,chartRef:fe,totalPoints:Re}),{resolveGroupColor:ye}=(0,f.j)(),ee=(0,r.useCallback)((v,T)=>ye({group:v.group,index:T,overrideColor:v.options?.stroke}),[ye]),ze=(0,r.useCallback)(v=>()=>X?`url(#${se(P,v)})`:ee(G[v],v),[X,ee,G,P]),Ne=(0,r.useCallback)(({tooltipData:v})=>{const T=v?.nearestDatum?.datum;return T?(0,b.jsxs)("div",{className:F["bar-chart__tooltip"],children:[(0,b.jsx)("div",{className:F["bar-chart__tooltip-header"],children:v?.nearestDatum?.key}),(0,b.jsxs)("div",{className:F["bar-chart__tooltip-row"],children:[(0,b.jsxs)("span",{className:F["bar-chart__tooltip-label"],children:[R.tooltip.labelFormatter(T.label||(T.date?T.date.getTime():0),0,[]),":"]}),(0,b.jsx)("span",{className:F["bar-chart__tooltip-value"],children:T.value})]})]}):null},[R.tooltip]),Ke=(0,r.useCallback)((v,T)=>{const H=v%4,U=se(P,v),Z={id:U,stroke:"white",strokeWidth:1,background:T};switch(H){case 0:default:return(0,b.jsx)(x.A,{...Z,width:5,height:5,orientation:["diagonal"]},U);case 1:return(0,b.jsx)(C.A,{...Z,width:6,height:6,fill:"white"},U);case 2:return(0,b.jsx)(g.A,{...Z,width:4,height:4},U);case 3:return(0,b.jsx)(i.A,{...Z,size:8,height:3},U)}},[P]),Ge=(0,r.useCallback)((v,T)=>`
			.visx-bar[fill="url(#${se(P,v)})"] {
				stroke: ${T};
				stroke-width: 1;
				}
			`,[P]),Ue=(0,r.useCallback)(()=>{if($===void 0)return"";const v=Math.max(...h.map(Ze=>Ze.data.length)),T=Math.floor($/h.length),H=$%h.length;if(T>=v||H>=h.length)return"";const U=h[H];if(T>=U.data.length)return"";const Z=H*v+T;return`
			.bar-chart[data-chart-id="bar-chart-${P}"] .visx-bar-group .visx-bar:nth-child(${Z+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[$,h,P]),le=we(G),$e=!le,He=(0,r.useMemo)(()=>({orientation:Y,withPatterns:X}),[Y,X]);if((0,y.t)({chartId:P,legendItems:Ae,chartType:"bar",isDataValid:$e,metadata:He}),le)return(0,b.jsx)("div",{className:(0,c.A)("bar-chart",F["bar-chart"]),children:le});const ge=oe??R.gridVisibility,be=Ue();return(0,b.jsx)(J.O.Provider,{value:{chartId:P,chartWidth:w,chartHeight:j-(M?ie:0)},children:(0,b.jsxs)("div",{className:(0,c.A)("bar-chart",F["bar-chart"],k),"data-testid":"bar-chart",role:"grid","aria-label":je("Bar chart","jetpack-charts"),style:{width:w,height:j,display:"flex",flexDirection:M&&I==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:ke,onFocus:Ie,onBlur:Fe,ref:fe,"data-chart-id":`bar-chart-${P}`,children:[(0,b.jsxs)(u.A,{theme:pe,width:w,height:j-(M?ie:0),margin:{...he,...W,...M&&I==="top"?{top:(he.top||0)+ie}:{}},xScale:R.xScale,yScale:R.yScale,horizontal:ne,pointerEventsDataKey:"nearest",children:[(0,b.jsx)(s.A,{columns:ge.includes("y"),rows:ge.includes("x"),numTicks:4}),X&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("defs",{"data-testid":"bar-chart-patterns",children:G.map((v,T)=>Ke(T,ee(v,T)))}),(0,b.jsx)("style",{children:G.map((v,T)=>Ge(T,ee(v,T)))})]}),be&&(0,b.jsx)("style",{children:be}),(0,b.jsx)(l.A,{padding:R.barGroup.padding,children:me.map((v,T)=>(0,b.jsx)(o.A,{dataKey:v?.label,data:v.data,yAccessor:R.accessors.yAccessor,xAccessor:R.accessors.xAccessor,colorAccessor:ze(T)},v?.label))}),(0,b.jsx)(d.A,{...R.axis.x}),(0,b.jsx)(d.A,{...R.axis.y}),B&&(0,b.jsx)(de.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:Q||Ne,selectedIndex:$,tooltipRef:We,keyboardFocusedClassName:F["bar-chart__tooltip--keyboard-focused"],series:h,mode:"individual"})]}),M&&(0,b.jsx)(N.s,{orientation:K,position:I,alignment:E,className:F["bar-chart__legend"],shape:O,ref:Me,chartId:P}),Ve]})})},re=h=>(0,r.useContext)(L.m)?(0,b.jsx)(ue,{...h}):(0,b.jsx)(L.S,{children:(0,b.jsx)(ue,{...h})});re.displayName="BarChart";const Xe=(0,z.E)(re,{Legend:N.s}),Ee=(0,z.E)((0,ve.F)(re),{Legend:N.s})}),"../charts/src/components/tooltip/accessible-tooltip.tsx":((A,D,e)=>{e.d(D,{JZ:()=>s,OZ:()=>u});var x=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/context/TooltipContext.js"),C=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),g=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u=({renderTooltip:l,selectedIndex:o,tooltipRef:d,keyboardFocusedClassName:p,series:c=[],mode:r="group",...m})=>{const _=(0,g.useContext)(x.A),S=(0,g.useMemo)(()=>{if(r!=="individual")return[];if(c.length===0)return[];const t=Math.max(...c.map(f=>f.data.length)),n=[];for(let f=0;f<t;f++)for(let y=0;y<c.length;y++){const L=c[y];f<L.data.length&&n.push({datum:L.data[f],seriesLabel:L.label,seriesIndex:y,dataPointIndex:f})}return n},[c,r]);(0,g.useEffect)(()=>{if(o===void 0){_?.hideTooltip();return}if(r==="group")c.forEach((t,n)=>{if(o<t.data.length){const f=t.data[o];_?.showTooltip({datum:f,key:t.label,index:n})}});else if(r==="individual"&&o<S.length){const t=S[o];_?.showTooltip({datum:t.datum,key:t.seriesLabel,index:t.seriesIndex})}},[o,S,c]);const a=(0,g.useMemo)(()=>{if(l)return t=>{const n=l(t);return o!==void 0?(0,i.jsx)("div",{ref:d,tabIndex:-1,role:"tooltip","aria-atomic":"true",className:p,"data-testid":`chart-tooltip-${o}`,children:n},`chart-tooltip-${o}`):(0,i.jsx)("div",{role:"tooltip","aria-live":"polite",children:n})}},[l,o,d,p]);return(0,i.jsx)(C.A,{...m,renderTooltip:a})},s=({selectedIndex:l,setSelectedIndex:o,isNavigating:d,setIsNavigating:p,chartRef:c,totalPoints:r})=>{const m=(0,g.useCallback)(t=>{t&&l!==void 0&&t.focus()},[l]),_=(0,g.useCallback)(()=>{!d&&l!==void 0&&o(0)},[d,l,o]),S=(0,g.useCallback)(()=>{p(!1)},[p]),a=(0,g.useCallback)(t=>{if(r===0)return;if(t.key==="Tab"){c.current?.focus(),o(void 0),p(!1);return}const n=l===void 0?-1:l;if(n+1>=r&&["ArrowRight"].includes(t.key)){c.current?.focus(),o(void 0),p(!1);return}t.preventDefault(),["ArrowRight"].includes(t.key)?(p(!0),o((n+1)%r)):["ArrowLeft"].includes(t.key)?(p(!0),o((n-1+r)%r)):t.key==="Escape"&&(o(void 0),p(!1),c.current?.focus())},[r,l,o,p,c]);return{tooltipRef:m,onChartFocus:_,onChartBlur:S,onChartKeyDown:a}};try{u.displayName="AccessibleTooltip",u.__docgenInfo={description:"",displayName:"AccessibleTooltip",props:{renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!1,type:{name:"number"}},tooltipRef:{defaultValue:null,description:"",name:"tooltipRef",required:!1,type:{name:"(element: HTMLDivElement) => void"}},keyboardFocusedClassName:{defaultValue:null,description:"",name:"keyboardFocusedClassName",required:!1,type:{name:"string"}},tooltipData:{defaultValue:null,description:`Flattened tooltip data prepared by parent component
Each index corresponds to one tooltip to show`,name:"tooltipData",required:!1,type:{name:"FlattenedTooltipData[]"}},series:{defaultValue:{value:"[]"},description:`For line charts: series data to show all series at selected data point
When provided, shows all series instead of individual tooltips`,name:"series",required:!1,type:{name:"SeriesData[]"}},mode:{defaultValue:{value:"group"},description:`Whether to combine tooltip information from multiple series into a single tooltip. This is useful for line charts.
Or to show individual tooltips for each series. This is useful for bar charts.`,name:"mode",required:!1,type:{name:"enum",value:[{value:'"group"'},{value:'"individual"'}]}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<DataPointDate>) => React.ReactNode"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"]={docgenInfo:u.__docgenInfo,name:"AccessibleTooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"})}catch{}try{s.displayName="useKeyboardNavigation",s.__docgenInfo={description:"",displayName:"useKeyboardNavigation",props:{selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!0,type:{name:"number"}},setSelectedIndex:{defaultValue:null,description:"",name:"setSelectedIndex",required:!0,type:{name:"(index: number) => void"}},isNavigating:{defaultValue:null,description:"",name:"isNavigating",required:!0,type:{name:"boolean"}},setIsNavigating:{defaultValue:null,description:"",name:"setIsNavigating",required:!0,type:{name:"(navigating: boolean) => void"}},chartRef:{defaultValue:null,description:"",name:"chartRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}},totalPoints:{defaultValue:null,description:"Total number of navigation points (length of tooltip data array)",name:"totalPoints",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"]={docgenInfo:s.__docgenInfo,name:"useKeyboardNavigation",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"})}catch{}try{accessibletooltip.displayName="accessibletooltip",accessibletooltip.__docgenInfo={description:`This is a wrapper component which bails early if tooltip is not visible.
If scroll detection is enabled in UseTooltipPortalOptions, this avoids re-rendering
the component on every scroll. If many charts with Tooltips are rendered on a page,
this also avoids creating many resize observers / hitting browser limits.`,displayName:"accessibletooltip",props:{renderTooltip:{defaultValue:null,description:`When TooltipContext.tooltipOpen=true, this function is invoked and if the
return value is non-null, its content is rendered inside the tooltip container.
Content will be rendered in an HTML parent.`,name:"renderTooltip",required:!0,type:{name:"(params: RenderTooltipParams<Datum>) => React.ReactNode"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<Datum>) => React.ReactNode"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"]={docgenInfo:accessibletooltip.__docgenInfo,name:"accessibletooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"})}catch{}}),"../charts/src/hooks/use-chart-data-transform.ts":((A,D,e)=>{e.d(D,{E:()=>l});var x=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),C=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js"),g=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js"),i=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse.js");const u=o=>/T.*[Z]$|T.*[+-]\d{2}:?\d{2}$/.test(o),s=o=>{const d=o.trim();if(u(d)){const c=(0,C.H)(d);return(0,g.f)(c)?c:new Date(NaN)}const p=["yyyy-MM-dd","yyyy-MM-dd HH:mm:ss","yyyy-MM-dd HH:mm","yyyy-MM-dd'T'HH:mm:ss","yyyy-MM-dd'T'HH:mm:ss.SSS","yyyy-MM-dd'T'HH:mm"];for(const c of p){const r=(0,i.qg)(d,c,new Date);if((0,g.f)(r))return r}return new Date(NaN)},l=o=>(0,x.useMemo)(()=>{const d=o?.[0]?.data?.[0];return d&&("date"in d||"dateString"in d)?o.map(c=>({...c,data:c.data.map(r=>{let m;return"date"in r&&r.date?m=r.date:"dateString"in r&&r.dateString&&(m=s(r.dateString)),{...r,date:m}}).sort((r,m)=>!r.date||!m.date?0:r.date.getTime()-m.date.getTime())})):o},[o])}),"../charts/src/hooks/use-chart-margin.tsx":((A,D,e)=>{e.d(D,{a:()=>s});var x=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),C=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),g=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js");const u=(l,o,d)=>{const p=l.map(r=>o(r,0,[])),c=p.reduce((r,m)=>r.length>=m.length?r:m,p[0]);return(0,i.A)(c,d)},s=(l,o,d,p,c=!1)=>{const r=(0,g.useMemo)(()=>{const m=d.flatMap(t=>t.data);if(c)return m.map(t=>t.label||o.axis?.y?.tickFormat(t.date.getTime(),0,[]));const _=Math.min(...m.map(t=>t.value)),S=Math.max(...m.map(t=>t.value)),a=(0,x.A)({...o.yScale,domain:[_,S],range:[l,0]});return(0,C.A)(a,o.axis?.y?.numTicks)},[o,d,l,c]);return(0,g.useMemo)(()=>{const m={top:10,right:20,bottom:20,left:20},_=40,S=o.axis?.y?.orientation,a=S==="right"?p.axisStyles.y.right:p.axisStyles.y.left,n=(u(r,o.axis?.y?.tickFormat,a.axisLabel)??_)+(a?.tickLength??0);return S==="right"?m.right=n:m.left=n,o.axis?.x?.orientation==="top"&&(m.top=20,m.bottom=10),m},[o,p,r])}}),"../charts/src/hooks/use-xychart-theme.ts":((A,D,e)=>{e.d(D,{O:()=>i});var x=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),C=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts");const i=u=>{const s=(0,g.p)();return(0,C.useMemo)(()=>{const l=(u??[]).map(o=>o.options?.stroke).filter(o=>!!o);return(0,x.A)({...s,colors:[...l,...s.colors??[]]})},[s,u])}}),"../charts/src/stories/legend-config.tsx":((A,D,e)=>{e.d(D,{r:()=>x});const x={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'}};try{x.displayName="legendArgTypes",x.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:x.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((A,D,e)=>{e.d(D,{A:()=>g});function x(i){var u,s,l="";if(typeof i=="string"||typeof i=="number")l+=i;else if(typeof i=="object")if(Array.isArray(i)){var o=i.length;for(u=0;u<o;u++)i[u]&&(s=x(i[u]))&&(l&&(l+=" "),l+=s)}else for(s in i)i[s]&&(l&&(l+=" "),l+=s);return l}function C(){for(var i,u,s=0,l="",o=arguments.length;s<o;s++)(i=arguments[s])&&(u=x(i))&&(l&&(l+=" "),l+=u);return l}const g=C}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.4.47_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":((A,D,e)=>{e.d(D,{A:()=>s});var x=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),C=e.n(x),g=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(g),u=i()(C());u.push([A.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),u.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const s=u}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(A=>{var D=function(t){return e(t)&&!x(t)};function e(a){return!!a&&typeof a=="object"}function x(a){var t=Object.prototype.toString.call(a);return t==="[object RegExp]"||t==="[object Date]"||i(a)}var C=typeof Symbol=="function"&&Symbol.for,g=C?Symbol.for("react.element"):60103;function i(a){return a.$$typeof===g}function u(a){return Array.isArray(a)?[]:{}}function s(a,t){return t.clone!==!1&&t.isMergeableObject(a)?_(u(a),a,t):a}function l(a,t,n){return a.concat(t).map(function(f){return s(f,n)})}function o(a,t){if(!t.customMerge)return _;var n=t.customMerge(a);return typeof n=="function"?n:_}function d(a){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(a).filter(function(t){return Object.propertyIsEnumerable.call(a,t)}):[]}function p(a){return Object.keys(a).concat(d(a))}function c(a,t){try{return t in a}catch{return!1}}function r(a,t){return c(a,t)&&!(Object.hasOwnProperty.call(a,t)&&Object.propertyIsEnumerable.call(a,t))}function m(a,t,n){var f={};return n.isMergeableObject(a)&&p(a).forEach(function(y){f[y]=s(a[y],n)}),p(t).forEach(function(y){r(a,y)||(c(a,y)&&n.isMergeableObject(t[y])?f[y]=o(y,n)(a[y],t[y],n):f[y]=s(t[y],n))}),f}function _(a,t,n){n=n||{},n.arrayMerge=n.arrayMerge||l,n.isMergeableObject=n.isMergeableObject||D,n.cloneUnlessOtherwiseSpecified=s;var f=Array.isArray(t),y=Array.isArray(a),L=f===y;return L?f?n.arrayMerge(a,t,n):m(a,t,n):s(t,n)}_.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(f,y){return _(f,y,n)},{})};var S=_;A.exports=S})}]);
