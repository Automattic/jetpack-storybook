"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":(P,D,t)=>{t.r(D),t.d(D,{CustomLegendPositioning:()=>e,Default:()=>n,ErrorStates:()=>u,FixedDimensions:()=>l,HorizontalBarChart:()=>i,ManyDataSeries:()=>h,SingleSeries:()=>s,SmartFormatting:()=>_,TimeSeries:()=>y,WithCompositionLegend:()=>a,WithLegend:()=>C,WithPatterns:()=>r,ZeroValueComparison:()=>g,__namedExportsOrder:()=>B,default:()=>c});var S=t("../charts/src/stories/legend-config.tsx"),d=t("../charts/src/stories/sample-data/index.ts"),m=t("../charts/src/components/bar-chart/bar-chart.tsx"),o=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c={title:"JS Packages/Charts/Types/Bar Chart",component:m.A,parameters:{layout:"centered"},decorators:[F=>(0,o.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,o.jsx)(F,{})})],argTypes:{maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}},...S.r}},n={args:{withTooltips:!0,data:[d._E[0],d._E[1],d._E[2]],gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300}},s={args:{...n.args,data:[d._E[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},y={args:{...n.args,data:[{...d.Sb[0],label:"Data with dateString and date",data:[...d.Sb[0].data,{dateString:"2024-01-31",value:2230},{dateString:"2024-02-01",value:2580},{date:new Date("2024-02-02 00:00:00"),value:3500},{dateString:"2024-02-03 00:00:00",value:1500},{dateString:"2024-02-04",value:2500},{dateString:"2024-02-05 00:00",value:3e3}]}],options:{axis:{x:{tickFormat:F=>new Date(F).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},h={args:{...n.args,data:d._E},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},l={args:{...n.args,width:800,height:400,data:[d._E[0],d._E[1],d._E[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},r={args:{...n.args,withPatterns:!0,data:n.args.data.map(F=>({...F,data:F.data.filter($=>parseInt($.label)>=2016)}))}},u={render:()=>(0,o.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Empty Data"}),(0,o.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,o.jsx)(m.A,{data:[]})})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Invalid Data"}),(0,o.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,o.jsx)(m.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};u.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const _={args:{withTooltips:!0,data:d.Gv,gridVisibility:"x"}};_.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const C={args:{...n.args,showLegend:!0}},a={render:()=>(0,o.jsx)("div",{style:{width:"800px"},children:(0,o.jsx)(m.A,{data:[d._E[0],d._E[1],d._E[2]],withTooltips:!0,gridVisibility:"x",maxWidth:1200,aspectRatio:.5,children:(0,o.jsx)(m.A.Legend,{orientation:"horizontal",alignment:"center",position:"bottom"})})}),parameters:{docs:{description:{story:"Demonstrates using the composition API with `<BarChart.Legend />` as a child component. This provides the same functionality as the `showLegend` prop but allows for more flexible composition patterns."}}}},e={args:{withTooltips:!0,data:d._E.slice(0,3),gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top"},parameters:{docs:{description:{story:"Bar chart with top-left positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities."}}}},i={args:{...n.args,data:[d._E[0],d._E[1],d._E[2]],orientation:"horizontal",gridVisibility:"none"}},x=[{group:"United States",label:"United States",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:3}]},{group:"Great Britain",label:"Great Britain",data:[{label:"1896",value:1},{label:"1900",value:0},{label:"1904",value:1},{label:"1908",value:10},{label:"1912",value:9}]},{group:"Japan",label:"Japan",data:[{label:"1896",value:2},{label:"1900",value:1},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:2}]}],g={render:()=>(0,o.jsxs)("div",{style:{display:"grid",gap:"40px"},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Zero Value Display: Disabled (Default)"}),(0,o.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are not visually displayed. Bars with zero values have no height."}),(0,o.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,o.jsx)(m.A,{data:x,showZeroValues:!1,withTooltips:!0,gridVisibility:"x"})})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Zero Value Display: Enabled"}),(0,o.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are visually displayed with minimum height bars. The tooltip still shows the actual value of 0, while the bar has a small visual height for better UX."}),(0,o.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,o.jsx)(m.A,{data:x,showZeroValues:!0,withTooltips:!0,gridVisibility:"x"})})]})]}),parameters:{docs:{description:{story:"Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights."}}}},B=["Default","SingleSeries","TimeSeries","ManyDataSeries","FixedDimensions","WithPatterns","ErrorStates","SmartFormatting","WithLegend","WithCompositionLegend","CustomLegendPositioning","HorizontalBarChart","ZeroValueComparison"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    // limit to 3 series for better readability
    gridVisibility: 'x',
    maxWidth: 1200,
    aspectRatio: 0.5,
    resizeDebounceTime: 300
  }
}`,...n.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    gridVisibility: 'x'
  }
}`,..._.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...C.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,...i.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}}},"../charts/src/components/bar-chart/bar-chart.tsx":(P,D,t)=>{t.d(D,{A:()=>Ve});var S=t("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),d=t("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),m=t("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),o=t("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),f=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),c=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),n=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),s=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),y=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),h=t("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),l=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=t("../charts/src/hooks/use-xychart-theme.ts"),_=t("../charts/src/hooks/use-chart-data-transform.ts");const C=(p,E={enabled:!1})=>{const{enabled:w,minValueRatio:j=.6,maxValueRatio:k=.008}=E;return(0,r.useMemo)(()=>{if(!w)return p;const W=[];for(const V of p)for(const O of V.data)O.value!==null&&O.value!==0&&W.push(O.value);if(W.length===0)return p;const L=W.map(Math.abs),A=Math.min(...L),N=Math.max(...L),I=Math.min(A*j,N*k);return p.map(V=>({...V,data:V.data.map(O=>O.value===0?{...O,visualValue:I}:O)}))},[p,w,j,k])};var a=t("../charts/src/hooks/use-chart-margin.tsx"),e=t("../charts/src/hooks/use-element-height.ts"),i=t("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),x=t("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),g=t("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),B=t("../charts/src/providers/chart-context/global-charts-provider.tsx"),F=t("../charts/src/utils/create-composition.ts"),$=t("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),ee=t("../charts/src/components/legend/legend.tsx"),be=t("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),ve=t("../charts/src/components/private/with-responsive/with-responsive.tsx"),le=t("../charts/src/components/tooltip/accessible-tooltip.tsx"),xe=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_e=t.n(xe),de=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),te={};te.insert="head",te.singleton=!1;var Xe=_e()(de.A,te);const z=de.A.locals||{};var Se=t("../number-formatters/src/index.ts");const Te=p=>new Date(p).toLocaleDateString(void 0,{month:"short",day:"numeric"}),De=p=>typeof p.paddingInner=="number"?p.paddingInner:0;function Ce(p,E,w={}){const j=(0,r.useMemo)(()=>{const k={type:"band",padding:.2,paddingInner:.1},W={type:"linear",nice:!0,zero:!1},L=p?.[0]?.data?.[0]?.label?V=>V:Te,A=Se.qe,N=V=>V?.label||V?.date,I=V=>{const O=V;return O?.visualValue!==void 0?O.visualValue:V?.value};return{vertical:{xTickFormat:L,yTickFormat:A,tooltipLabelFormatter:L,xAccessor:N,yAccessor:I,gridVisibility:"x",xScale:k,yScale:W},horizontal:{xTickFormat:A,yTickFormat:L,tooltipLabelFormatter:L,xAccessor:I,yAccessor:N,gridVisibility:"y",xScale:W,yScale:k}}},[p]);return(0,r.useMemo)(()=>{const k=E?"horizontal":"vertical",{xTickFormat:W,yTickFormat:L,tooltipLabelFormatter:A,xAccessor:N,yAccessor:I,gridVisibility:V,xScale:O,yScale:re}=j[k],J={...O,...w.xScale||{}},q={...re,...w.yScale||{}},Y=E?w.axis?.y?.tickFormat:w.axis?.x?.tickFormat;return{gridVisibility:V,xScale:J,yScale:q,accessors:{xAccessor:N,yAccessor:I},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:W,...w.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:L,...w.axis?.y||{}}},barGroup:{padding:De(E?q:J)},tooltip:{labelFormatter:Y||A}}},[j,w,E])}var b=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const je=h.__,we=p=>p?.length?p.some(w=>w.data.some(j=>isNaN(j.value)||j.value===null||j.value===void 0||!j.label&&(!("date"in j&&j.date)||isNaN(j.date.getTime()))))?"Invalid data":null:"No data available",ae=(p,E)=>`bar-pattern-${p}-${E}`,ce=({data:p,chartId:E,width:w,height:j=400,className:k,margin:W,withTooltips:L=!1,showLegend:A=!1,legendOrientation:N="horizontal",legendPosition:I="bottom",legendAlignment:V="center",legendShape:O="rect",gridVisibility:re,renderTooltip:J,options:q={},orientation:Y="vertical",withPatterns:X=!1,showZeroValues:Oe=!1,children:Ee})=>{const oe=Y==="horizontal",M=(0,i.R)(E),ue=(0,u.O)(p),K=(0,_.E)(p),pe=C(K,{enabled:Oe}),Ae=(0,$.f)(K),R=Ce(pe,oe,q),me=(0,a.a)(j,R,K,ue,oe),[Me,ne]=(0,e.v)(),he=(0,r.useRef)(null),[U,Pe]=(0,r.useState)(void 0),[Le,Re]=(0,r.useState)(!1),Be=Math.max(0,...p.map(v=>v.data?.length||0))*p.length,{tooltipRef:We,onChartFocus:Ie,onChartBlur:Fe,onChartKeyDown:ze}=(0,le.JZ)({selectedIndex:U,setSelectedIndex:Pe,isNavigating:Le,setIsNavigating:Re,chartRef:he,totalPoints:Be}),{resolveGroupColor:fe}=(0,x.j)(),Q=(0,r.useCallback)((v,T)=>fe({group:v.group,index:T,overrideColor:v.options?.stroke}),[fe]),ke=(0,r.useCallback)(v=>()=>X?`url(#${ae(M,v)})`:Q(K[v],v),[X,Q,K,M]),Ne=(0,r.useCallback)(({tooltipData:v})=>{const T=v?.nearestDatum?.datum;return T?(0,b.jsxs)("div",{className:z["bar-chart__tooltip"],children:[(0,b.jsx)("div",{className:z["bar-chart__tooltip-header"],children:v?.nearestDatum?.key}),(0,b.jsxs)("div",{className:z["bar-chart__tooltip-row"],children:[(0,b.jsxs)("span",{className:z["bar-chart__tooltip-label"],children:[R.tooltip.labelFormatter(T.label||(T.date?T.date.getTime():0),0,[]),":"]}),(0,b.jsx)("span",{className:z["bar-chart__tooltip-value"],children:T.value})]})]}):null},[R.tooltip]),Ke=(0,r.useCallback)((v,T)=>{const H=v%4,G=ae(M,v),Z={id:G,stroke:"white",strokeWidth:1,background:T};switch(H){case 0:default:return(0,b.jsx)(S.A,{...Z,width:5,height:5,orientation:["diagonal"]},G);case 1:return(0,b.jsx)(d.A,{...Z,width:6,height:6,fill:"white"},G);case 2:return(0,b.jsx)(m.A,{...Z,width:4,height:4},G);case 3:return(0,b.jsx)(o.A,{...Z,size:8,height:3},G)}},[M]),Ge=(0,r.useCallback)((v,T)=>`
			.visx-bar[fill="url(#${ae(M,v)})"] {
				stroke: ${T};
				stroke-width: 1;
				}
			`,[M]),Ue=(0,r.useCallback)(()=>{if(U===void 0)return"";const v=Math.max(...p.map(Ye=>Ye.data.length)),T=Math.floor(U/p.length),H=U%p.length;if(T>=v||H>=p.length)return"";const G=p[H];if(T>=G.data.length)return"";const Z=H*v+T;return`
			.bar-chart[data-chart-id="bar-chart-${M}"] .visx-bar-group .visx-bar:nth-child(${Z+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[U,p,M]),ie=we(K),He=!ie,Ze=(0,r.useMemo)(()=>({orientation:Y,withPatterns:X}),[Y,X]);if((0,g.t)({chartId:M,legendItems:Ae,chartType:"bar",isDataValid:He,metadata:Ze}),ie)return(0,b.jsx)("div",{className:(0,l.A)("bar-chart",z["bar-chart"]),children:ie});const ye=re??R.gridVisibility,ge=Ue();return(0,b.jsx)(be.O.Provider,{value:{chartId:M,chartWidth:w,chartHeight:j-(A?ne:0)},children:(0,b.jsxs)("div",{className:(0,l.A)("bar-chart",z["bar-chart"],k),"data-testid":"bar-chart",role:"grid","aria-label":je("Bar chart","jetpack-charts"),style:{width:w,height:j,display:"flex",flexDirection:A&&I==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:ze,onFocus:Ie,onBlur:Fe,ref:he,"data-chart-id":`bar-chart-${M}`,children:[(0,b.jsxs)(f.A,{theme:ue,width:w,height:j-(A?ne:0),margin:{...me,...W,...A&&I==="top"?{top:(me.top||0)+ne}:{}},xScale:R.xScale,yScale:R.yScale,horizontal:oe,pointerEventsDataKey:"nearest",children:[(0,b.jsx)(c.A,{columns:ye.includes("y"),rows:ye.includes("x"),numTicks:4}),X&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("defs",{"data-testid":"bar-chart-patterns",children:K.map((v,T)=>Ke(T,Q(v,T)))}),(0,b.jsx)("style",{children:K.map((v,T)=>Ge(T,Q(v,T)))})]}),ge&&(0,b.jsx)("style",{children:ge}),(0,b.jsx)(n.A,{padding:R.barGroup.padding,children:pe.map((v,T)=>(0,b.jsx)(s.A,{dataKey:v?.label,data:v.data,yAccessor:R.accessors.yAccessor,xAccessor:R.accessors.xAccessor,colorAccessor:ke(T)},v?.label))}),(0,b.jsx)(y.A,{...R.axis.x}),(0,b.jsx)(y.A,{...R.axis.y}),L&&(0,b.jsx)(le.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:J||Ne,selectedIndex:U,tooltipRef:We,keyboardFocusedClassName:z["bar-chart__tooltip--keyboard-focused"],series:p,mode:"individual"})]}),A&&(0,b.jsx)(ee.s,{orientation:N,position:I,alignment:V,className:z["bar-chart__legend"],shape:O,ref:Me,chartId:M}),Ee]})})},se=p=>(0,r.useContext)(B.m)?(0,b.jsx)(ce,{...p}):(0,b.jsx)(B.S,{children:(0,b.jsx)(ce,{...p})});se.displayName="BarChart";const $e=(0,F.E)(se,{Legend:ee.s}),Ve=(0,F.E)((0,ve.F)(se),{Legend:ee.s})},"../charts/src/components/tooltip/accessible-tooltip.tsx":(P,D,t)=>{t.d(D,{JZ:()=>c,OZ:()=>f});var S=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/context/TooltipContext.js"),d=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),m=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f=({renderTooltip:n,selectedIndex:s,tooltipRef:y,keyboardFocusedClassName:h,series:l=[],mode:r="group",...u})=>{const _=(0,m.useContext)(S.A),C=(0,m.useMemo)(()=>{if(r!=="individual")return[];if(l.length===0)return[];const e=Math.max(...l.map(x=>x.data.length)),i=[];for(let x=0;x<e;x++)for(let g=0;g<l.length;g++){const B=l[g];x<B.data.length&&i.push({datum:B.data[x],seriesLabel:B.label,seriesIndex:g,dataPointIndex:x})}return i},[l,r]);(0,m.useEffect)(()=>{if(s===void 0){_?.hideTooltip();return}if(r==="group")l.forEach((e,i)=>{if(s<e.data.length){const x=e.data[s];_?.showTooltip({datum:x,key:e.label,index:i})}});else if(r==="individual"&&s<C.length){const e=C[s];_?.showTooltip({datum:e.datum,key:e.seriesLabel,index:e.seriesIndex})}},[s,C,l]);const a=(0,m.useMemo)(()=>{if(n)return e=>{const i=n(e);return s!==void 0?(0,o.jsx)("div",{ref:y,tabIndex:-1,role:"tooltip","aria-atomic":"true",className:h,"data-testid":`chart-tooltip-${s}`,children:i},`chart-tooltip-${s}`):(0,o.jsx)("div",{role:"tooltip","aria-live":"polite",children:i})}},[n,s,y,h]);return(0,o.jsx)(d.A,{...u,renderTooltip:a})},c=({selectedIndex:n,setSelectedIndex:s,isNavigating:y,setIsNavigating:h,chartRef:l,totalPoints:r})=>{const u=(0,m.useCallback)(e=>{e&&n!==void 0&&e.focus()},[n]),_=(0,m.useCallback)(()=>{!y&&n!==void 0&&s(0)},[y,n,s]),C=(0,m.useCallback)(()=>{h(!1)},[h]),a=(0,m.useCallback)(e=>{if(r===0)return;if(e.key==="Tab"){l.current?.focus(),s(void 0),h(!1);return}const i=n===void 0?-1:n;if(i+1>=r&&["ArrowRight"].includes(e.key)){l.current?.focus(),s(void 0),h(!1);return}e.preventDefault(),["ArrowRight"].includes(e.key)?(h(!0),s((i+1)%r)):["ArrowLeft"].includes(e.key)?(h(!0),s((i-1+r)%r)):e.key==="Escape"&&(s(void 0),h(!1),l.current?.focus())},[r,n,s,h,l]);return{tooltipRef:u,onChartFocus:_,onChartBlur:C,onChartKeyDown:a}};try{f.displayName="AccessibleTooltip",f.__docgenInfo={description:"",displayName:"AccessibleTooltip",props:{renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!1,type:{name:"number"}},tooltipRef:{defaultValue:null,description:"",name:"tooltipRef",required:!1,type:{name:"(element: HTMLDivElement) => void"}},keyboardFocusedClassName:{defaultValue:null,description:"",name:"keyboardFocusedClassName",required:!1,type:{name:"string"}},tooltipData:{defaultValue:null,description:`Flattened tooltip data prepared by parent component
Each index corresponds to one tooltip to show`,name:"tooltipData",required:!1,type:{name:"FlattenedTooltipData[]"}},series:{defaultValue:{value:"[]"},description:`For line charts: series data to show all series at selected data point
When provided, shows all series instead of individual tooltips`,name:"series",required:!1,type:{name:"SeriesData[]"}},mode:{defaultValue:{value:"group"},description:`Whether to combine tooltip information from multiple series into a single tooltip. This is useful for line charts.
Or to show individual tooltips for each series. This is useful for bar charts.`,name:"mode",required:!1,type:{name:"enum",value:[{value:'"group"'},{value:'"individual"'}]}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<DataPointDate>) => React.ReactNode"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"]={docgenInfo:f.__docgenInfo,name:"AccessibleTooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"})}catch{}try{c.displayName="useKeyboardNavigation",c.__docgenInfo={description:"",displayName:"useKeyboardNavigation",props:{selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!0,type:{name:"number"}},setSelectedIndex:{defaultValue:null,description:"",name:"setSelectedIndex",required:!0,type:{name:"(index: number) => void"}},isNavigating:{defaultValue:null,description:"",name:"isNavigating",required:!0,type:{name:"boolean"}},setIsNavigating:{defaultValue:null,description:"",name:"setIsNavigating",required:!0,type:{name:"(navigating: boolean) => void"}},chartRef:{defaultValue:null,description:"",name:"chartRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}},totalPoints:{defaultValue:null,description:"Total number of navigation points (length of tooltip data array)",name:"totalPoints",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"]={docgenInfo:c.__docgenInfo,name:"useKeyboardNavigation",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"})}catch{}try{accessibletooltip.displayName="accessibletooltip",accessibletooltip.__docgenInfo={description:`This is a wrapper component which bails early if tooltip is not visible.
If scroll detection is enabled in UseTooltipPortalOptions, this avoids re-rendering
the component on every scroll. If many charts with Tooltips are rendered on a page,
this also avoids creating many resize observers / hitting browser limits.`,displayName:"accessibletooltip",props:{renderTooltip:{defaultValue:null,description:`When TooltipContext.tooltipOpen=true, this function is invoked and if the
return value is non-null, its content is rendered inside the tooltip container.
Content will be rendered in an HTML parent.`,name:"renderTooltip",required:!0,type:{name:"(params: RenderTooltipParams<Datum>) => React.ReactNode"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<Datum>) => React.ReactNode"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"]={docgenInfo:accessibletooltip.__docgenInfo,name:"accessibletooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"})}catch{}},"../charts/src/hooks/use-chart-data-transform.ts":(P,D,t)=>{t.d(D,{E:()=>n});var S=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=t("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js"),m=t("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js"),o=t("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse.js");const f=s=>/T.*[Z]$|T.*[+-]\d{2}:?\d{2}$/.test(s),c=s=>{const y=s.trim();if(f(y)){const l=(0,d.H)(y);return(0,m.f)(l)?l:new Date(NaN)}const h=["yyyy-MM-dd","yyyy-MM-dd HH:mm:ss","yyyy-MM-dd HH:mm","yyyy-MM-dd'T'HH:mm:ss","yyyy-MM-dd'T'HH:mm:ss.SSS","yyyy-MM-dd'T'HH:mm"];for(const l of h){const r=(0,o.qg)(y,l,new Date);if((0,m.f)(r))return r}return new Date(NaN)},n=s=>(0,S.useMemo)(()=>{const y=s?.[0]?.data?.[0];return y&&("date"in y||"dateString"in y)?s.map(l=>({...l,data:l.data.map(r=>{let u;return"date"in r&&r.date?u=r.date:"dateString"in r&&r.dateString&&(u=c(r.dateString)),{...r,date:u}}).sort((r,u)=>!r.date||!u.date?0:r.date.getTime()-u.date.getTime())})):s},[s])},"../charts/src/hooks/use-chart-margin.tsx":(P,D,t)=>{t.d(D,{a:()=>c});var S=t("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),d=t("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),m=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js");const f=(n,s,y)=>{const h=n.map(r=>s(r,0,[])),l=h.reduce((r,u)=>r.length>=u.length?r:u,h[0]);return(0,o.A)(l,y)},c=(n,s,y,h,l=!1)=>{const r=(0,m.useMemo)(()=>{const u=y.flatMap(e=>e.data);if(l)return u.map(e=>e.label||s.axis?.y?.tickFormat(e.date.getTime(),0,[]));const _=Math.min(...u.map(e=>e.value)),C=Math.max(...u.map(e=>e.value)),a=(0,S.A)({...s.yScale,domain:[_,C],range:[n,0]});return(0,d.A)(a,s.axis?.y?.numTicks)},[s,y,n,l]);return(0,m.useMemo)(()=>{const u={top:10,right:20,bottom:20,left:20},_=40,C=s.axis?.y?.orientation,a=C==="right"?h.axisStyles.y.right:h.axisStyles.y.left,i=(f(r,s.axis?.y?.tickFormat,a.axisLabel)??_)+(a?.tickLength??0);return C==="right"?u.right=i:u.left=i,s.axis?.x?.orientation==="top"&&(u.top=20,u.bottom=10),u},[s,h,r])}},"../charts/src/hooks/use-xychart-theme.ts":(P,D,t)=>{t.d(D,{O:()=>o});var S=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),d=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=t("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts");const o=f=>{const c=(0,m.p)();return(0,d.useMemo)(()=>{const n=(f??[]).map(s=>s.options?.stroke).filter(s=>!!s);return(0,S.A)({...c,colors:[...n,...c.colors??[]]})},[c,f])}},"../charts/src/stories/legend-config.tsx":(P,D,t)=>{t.d(D,{r:()=>S});const S={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"}};try{S.displayName="legendArgTypes",S.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:S.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(P,D,t)=>{t.d(D,{A:()=>m});function S(o){var f,c,n="";if(typeof o=="string"||typeof o=="number")n+=o;else if(typeof o=="object")if(Array.isArray(o)){var s=o.length;for(f=0;f<s;f++)o[f]&&(c=S(o[f]))&&(n&&(n+=" "),n+=c)}else for(c in o)o[c]&&(n&&(n+=" "),n+=c);return n}function d(){for(var o,f,c=0,n="",s=arguments.length;c<s;c++)(o=arguments[c])&&(f=S(o))&&(n&&(n+=" "),n+=f);return n}const m=d},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":(P,D,t)=>{t.d(D,{A:()=>c});var S=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=t.n(S),m=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=t.n(m),f=o()(d());f.push([P.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),f.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const c=f},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":P=>{var D=function(e){return t(e)&&!S(e)};function t(a){return!!a&&typeof a=="object"}function S(a){var e=Object.prototype.toString.call(a);return e==="[object RegExp]"||e==="[object Date]"||o(a)}var d=typeof Symbol=="function"&&Symbol.for,m=d?Symbol.for("react.element"):60103;function o(a){return a.$$typeof===m}function f(a){return Array.isArray(a)?[]:{}}function c(a,e){return e.clone!==!1&&e.isMergeableObject(a)?_(f(a),a,e):a}function n(a,e,i){return a.concat(e).map(function(x){return c(x,i)})}function s(a,e){if(!e.customMerge)return _;var i=e.customMerge(a);return typeof i=="function"?i:_}function y(a){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(a).filter(function(e){return Object.propertyIsEnumerable.call(a,e)}):[]}function h(a){return Object.keys(a).concat(y(a))}function l(a,e){try{return e in a}catch{return!1}}function r(a,e){return l(a,e)&&!(Object.hasOwnProperty.call(a,e)&&Object.propertyIsEnumerable.call(a,e))}function u(a,e,i){var x={};return i.isMergeableObject(a)&&h(a).forEach(function(g){x[g]=c(a[g],i)}),h(e).forEach(function(g){r(a,g)||(l(a,g)&&i.isMergeableObject(e[g])?x[g]=s(g,i)(a[g],e[g],i):x[g]=c(e[g],i))}),x}function _(a,e,i){i=i||{},i.arrayMerge=i.arrayMerge||n,i.isMergeableObject=i.isMergeableObject||D,i.cloneUnlessOtherwiseSpecified=c;var x=Array.isArray(e),g=Array.isArray(a),B=x===g;return B?x?i.arrayMerge(a,e,i):u(a,e,i):c(e,i)}_.all=function(e,i){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(x,g){return _(x,g,i)},{})};var C=_;P.exports=C}}]);
