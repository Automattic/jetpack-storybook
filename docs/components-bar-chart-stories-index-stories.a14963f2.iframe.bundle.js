"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":(V,D,e)=>{e.r(D),e.d(D,{CustomLegendPositioning:()=>t,Default:()=>s,ErrorStates:()=>S,FixedDimensions:()=>c,HorizontalBarChart:()=>i,ManyDataSeries:()=>f,SingleSeries:()=>n,SmartFormatting:()=>b,TimeSeries:()=>p,WithCompositionLegend:()=>a,WithLegend:()=>C,WithPatterns:()=>r,ZeroValueComparison:()=>y,__namedExportsOrder:()=>I,default:()=>d});var _=e("../charts/src/stories/legend-config.tsx"),l=e("../charts/src/stories/sample-data/index.ts"),u=e("../charts/src/components/bar-chart/bar-chart.tsx"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d={title:"JS Packages/Charts/Types/Bar Chart",component:u.A,parameters:{layout:"centered"},decorators:[N=>(0,o.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,o.jsx)(N,{})})],argTypes:{maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}},..._.r}},s={args:{withTooltips:!0,data:[l._E[0],l._E[1],l._E[2]],gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300}},n={args:{...s.args,data:[l._E[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},p={args:{...s.args,data:[{...l.Sb[0],label:"Data with dateString and date",data:[...l.Sb[0].data,{dateString:"2024-01-31",value:2230},{dateString:"2024-02-01",value:2580},{date:new Date("2024-02-02 00:00:00"),value:3500},{dateString:"2024-02-03 00:00:00",value:1500},{dateString:"2024-02-04",value:2500},{dateString:"2024-02-05 00:00",value:3e3}]}],options:{axis:{x:{tickFormat:N=>new Date(N).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},f={args:{...s.args,data:l._E},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},c={args:{...s.args,width:800,height:400,data:[l._E[0],l._E[1],l._E[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},r={args:{...s.args,withPatterns:!0,data:s.args.data.map(N=>({...N,data:N.data.filter($=>parseInt($.label)>=2016)}))}},S={render:()=>(0,o.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Empty Data"}),(0,o.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,o.jsx)(u.A,{data:[]})})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Invalid Data"}),(0,o.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,o.jsx)(u.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};S.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const b={args:{withTooltips:!0,data:l.Gv,gridVisibility:"x"}};b.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const C={args:{...s.args,showLegend:!0}},a={render:()=>(0,o.jsx)("div",{style:{width:"800px"},children:(0,o.jsx)(u.A,{data:[l._E[0],l._E[1],l._E[2]],withTooltips:!0,gridVisibility:"x",maxWidth:1200,aspectRatio:.5,children:(0,o.jsx)(u.A.Legend,{orientation:"horizontal",alignment:"center",position:"bottom"})})}),parameters:{docs:{description:{story:"Demonstrates using the composition API with `<BarChart.Legend />` as a child component. This provides the same functionality as the `showLegend` prop but allows for more flexible composition patterns."}}}},t={args:{withTooltips:!0,data:l._E.slice(0,3),gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top"},parameters:{docs:{description:{story:"Bar chart with top-left positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities."}}}},i={args:{...s.args,data:[l._E[0],l._E[1],l._E[2]],orientation:"horizontal",gridVisibility:"none"}},x=[{group:"United States",label:"United States",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:3}]},{group:"Great Britain",label:"Great Britain",data:[{label:"1896",value:1},{label:"1900",value:0},{label:"1904",value:1},{label:"1908",value:10},{label:"1912",value:9}]},{group:"Japan",label:"Japan",data:[{label:"1896",value:2},{label:"1900",value:1},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:2}]}],y={render:()=>(0,o.jsxs)("div",{style:{display:"grid",gap:"40px"},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Zero Value Display: Disabled (Default)"}),(0,o.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are not visually displayed. Bars with zero values have no height."}),(0,o.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,o.jsx)(u.A,{data:x,showZeroValues:!1,withTooltips:!0,gridVisibility:"x"})})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Zero Value Display: Enabled"}),(0,o.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are visually displayed with minimum height bars. The tooltip still shows the actual value of 0, while the bar has a small visual height for better UX."}),(0,o.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,o.jsx)(u.A,{data:x,showZeroValues:!0,withTooltips:!0,gridVisibility:"x"})})]})]}),parameters:{docs:{description:{story:"Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights."}}}},I=["Default","SingleSeries","TimeSeries","ManyDataSeries","FixedDimensions","WithPatterns","ErrorStates","SmartFormatting","WithLegend","WithCompositionLegend","CustomLegendPositioning","HorizontalBarChart","ZeroValueComparison"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    // limit to 3 series for better readability
    gridVisibility: 'x',
    maxWidth: 1200,
    aspectRatio: 0.5,
    resizeDebounceTime: 300
  }
}`,...s.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    gridVisibility: 'x'
  }
}`,...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,...i.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}}},"../charts/src/components/bar-chart/bar-chart.tsx":(V,D,e)=>{e.d(D,{A:()=>je});var _=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),l=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),u=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),o=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),h=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),d=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),s=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),n=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),p=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),f=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),c=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),S=e("../charts/src/hooks/use-xychart-theme.ts"),b=e("../charts/src/providers/chart-context/utils.ts"),C=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),a=e("../charts/src/utils/create-composition.ts"),t=e("../charts/src/components/legend/legend.tsx"),i=e("../charts/src/components/legend/use-chart-legend-data.ts"),x=e("../charts/src/components/shared/single-chart-context.tsx"),y=e("../charts/src/components/shared/use-chart-data-transform.ts"),I=e("../charts/src/components/shared/use-chart-margin.tsx"),N=e("../charts/src/components/shared/use-element-height.ts");const $=(m,A={enabled:!1})=>{const{enabled:E,minValueRatio:j=.6,maxValueRatio:z=.008}=A;return(0,r.useMemo)(()=>{if(!E)return m;const R=[];for(const w of m)for(const O of w.data)O.value!==null&&O.value!==0&&R.push(O.value);if(R.length===0)return m;const L=R.map(Math.abs),M=Math.min(...L),K=Math.max(...L),W=Math.min(M*j,K*z);return m.map(w=>({...w,data:w.data.map(O=>O.value===0?{...O,visualValue:W}:O)}))},[m,E,j,z])};var ge=e("../charts/src/components/shared/with-responsive.tsx"),ie=e("../charts/src/components/tooltip/accessible-tooltip.tsx"),be=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ve=e.n(be),le=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),ee={};ee.insert="head",ee.singleton=!1;var Ze=ve()(le.A,ee);const F=le.A.locals||{};var xe=e("../number-formatters/src/index.ts");const _e=m=>new Date(m).toLocaleDateString(void 0,{month:"short",day:"numeric"}),Se=m=>typeof m.paddingInner=="number"?m.paddingInner:0;function Te(m,A,E={}){const j=(0,r.useMemo)(()=>{const z={type:"band",padding:.2,paddingInner:.1},R={type:"linear",nice:!0,zero:!1},L=m?.[0]?.data?.[0]?.label?w=>w:_e,M=xe.qe,K=w=>w?.label||w?.date,W=w=>{const O=w;return O?.visualValue!==void 0?O.visualValue:w?.value};return{vertical:{xTickFormat:L,yTickFormat:M,tooltipLabelFormatter:L,xAccessor:K,yAccessor:W,gridVisibility:"x",xScale:z,yScale:R},horizontal:{xTickFormat:M,yTickFormat:L,tooltipLabelFormatter:L,xAccessor:W,yAccessor:K,gridVisibility:"y",xScale:R,yScale:z}}},[m]);return(0,r.useMemo)(()=>{const z=A?"horizontal":"vertical",{xTickFormat:R,yTickFormat:L,tooltipLabelFormatter:M,xAccessor:K,yAccessor:W,gridVisibility:w,xScale:O,yScale:se}=j[z],J={...O,...E.xScale||{}},q={...se,...E.yScale||{}},Y=A?E.axis?.y?.tickFormat:E.axis?.x?.tickFormat;return{gridVisibility:w,xScale:J,yScale:q,accessors:{xAccessor:K,yAccessor:W},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:R,...E.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:L,...E.axis?.y||{}}},barGroup:{padding:Se(A?q:J)},tooltip:{labelFormatter:Y||M}}},[j,E,A])}var g=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const De=f.__,Ce=m=>m?.length?m.some(E=>E.data.some(j=>isNaN(j.value)||j.value===null||j.value===void 0||!j.label&&(!("date"in j&&j.date)||isNaN(j.date.getTime()))))?"Invalid data":null:"No data available",te=(m,A)=>`bar-pattern-${m}-${A}`,de=({data:m,chartId:A,width:E,height:j=400,className:z,margin:R,withTooltips:L=!1,showLegend:M=!1,legendOrientation:K="horizontal",legendPosition:W="bottom",legendAlignment:w="center",legendShape:O="rect",gridVisibility:se,renderTooltip:J,options:q={},orientation:Y="vertical",withPatterns:X=!1,showZeroValues:Ee=!1,children:we})=>{const re=Y==="horizontal",P=(0,b.R)(A),ce=(0,S.O)(m),k=(0,y.E)(m),ue=$(k,{enabled:Ee}),Oe=(0,i.B)(k),B=Te(ue,re,q),pe=(0,I.a)(j,B,k,ce,re),[Ae,oe]=(0,N.v)(),me=(0,r.useRef)(null),[U,Ve]=(0,r.useState)(void 0),[Me,Pe]=(0,r.useState)(!1),Le=Math.max(0,...m.map(v=>v.data?.length||0))*m.length,{tooltipRef:Be,onChartFocus:Re,onChartBlur:We,onChartKeyDown:Ie}=(0,ie.JZ)({selectedIndex:U,setSelectedIndex:Ve,isNavigating:Me,setIsNavigating:Pe,chartRef:me,totalPoints:Le}),{resolveGroupColor:he}=(0,C.jT)(),Q=(0,r.useCallback)((v,T)=>he({group:v.group,index:T,overrideColor:v.options?.stroke}),[he]),Fe=(0,r.useCallback)(v=>()=>X?`url(#${te(P,v)})`:Q(k[v],v),[X,Q,k,P]),ze=(0,r.useCallback)(({tooltipData:v})=>{const T=v?.nearestDatum?.datum;return T?(0,g.jsxs)("div",{className:F["bar-chart__tooltip"],children:[(0,g.jsx)("div",{className:F["bar-chart__tooltip-header"],children:v?.nearestDatum?.key}),(0,g.jsxs)("div",{className:F["bar-chart__tooltip-row"],children:[(0,g.jsxs)("span",{className:F["bar-chart__tooltip-label"],children:[B.tooltip.labelFormatter(T.label||(T.date?T.date.getTime():0),0,[]),":"]}),(0,g.jsx)("span",{className:F["bar-chart__tooltip-value"],children:T.value})]})]}):null},[B.tooltip]),Ne=(0,r.useCallback)((v,T)=>{const H=v%4,G=te(P,v),Z={id:G,stroke:"white",strokeWidth:1,background:T};switch(H){case 0:default:return(0,g.jsx)(_.A,{...Z,width:5,height:5,orientation:["diagonal"]},G);case 1:return(0,g.jsx)(l.A,{...Z,width:6,height:6,fill:"white"},G);case 2:return(0,g.jsx)(u.A,{...Z,width:4,height:4},G);case 3:return(0,g.jsx)(o.A,{...Z,size:8,height:3},G)}},[P]),Ke=(0,r.useCallback)((v,T)=>`
			.visx-bar[fill="url(#${te(P,v)})"] {
				stroke: ${T};
				stroke-width: 1;
				}
			`,[P]),ke=(0,r.useCallback)(()=>{if(U===void 0)return"";const v=Math.max(...m.map(He=>He.data.length)),T=Math.floor(U/m.length),H=U%m.length;if(T>=v||H>=m.length)return"";const G=m[H];if(T>=G.data.length)return"";const Z=H*v+T;return`
			.bar-chart[data-chart-id="bar-chart-${P}"] .visx-bar-group .visx-bar:nth-child(${Z+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[U,m,P]),ne=Ce(k),Ge=!ne,Ue=(0,r.useMemo)(()=>({orientation:Y,withPatterns:X}),[Y,X]);if((0,b.t)({chartId:P,legendItems:Oe,chartType:"bar",isDataValid:Ge,metadata:Ue}),ne)return(0,g.jsx)("div",{className:(0,c.A)("bar-chart",F["bar-chart"]),children:ne});const fe=se??B.gridVisibility,ye=ke();return(0,g.jsx)(x.ON.Provider,{value:{chartId:P,chartWidth:E,chartHeight:j-(M?oe:0)},children:(0,g.jsxs)("div",{className:(0,c.A)("bar-chart",F["bar-chart"],z),"data-testid":"bar-chart",role:"grid","aria-label":De("Bar chart","jetpack-charts"),style:{width:E,height:j,display:"flex",flexDirection:M&&W==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:Ie,onFocus:Re,onBlur:We,ref:me,"data-chart-id":`bar-chart-${P}`,children:[(0,g.jsxs)(h.A,{theme:ce,width:E,height:j-(M?oe:0),margin:{...pe,...R,...M&&W==="top"?{top:(pe.top||0)+oe}:{}},xScale:B.xScale,yScale:B.yScale,horizontal:re,pointerEventsDataKey:"nearest",children:[(0,g.jsx)(d.A,{columns:fe.includes("y"),rows:fe.includes("x"),numTicks:4}),X&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("defs",{"data-testid":"bar-chart-patterns",children:k.map((v,T)=>Ne(T,Q(v,T)))}),(0,g.jsx)("style",{children:k.map((v,T)=>Ke(T,Q(v,T)))})]}),ye&&(0,g.jsx)("style",{children:ye}),(0,g.jsx)(s.A,{padding:B.barGroup.padding,children:ue.map((v,T)=>(0,g.jsx)(n.A,{dataKey:v?.label,data:v.data,yAccessor:B.accessors.yAccessor,xAccessor:B.accessors.xAccessor,colorAccessor:Fe(T)},v?.label))}),(0,g.jsx)(p.A,{...B.axis.x}),(0,g.jsx)(p.A,{...B.axis.y}),L&&(0,g.jsx)(ie.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:J||ze,selectedIndex:U,tooltipRef:Be,keyboardFocusedClassName:F["bar-chart__tooltip--keyboard-focused"],series:m,mode:"individual"})]}),M&&(0,g.jsx)(t.s,{orientation:K,position:W,alignment:w,className:F["bar-chart__legend"],shape:O,ref:Ae,chartId:P}),we]})})},ae=m=>(0,r.useContext)(C.mJ)?(0,g.jsx)(de,{...m}):(0,g.jsx)(C.Sx,{children:(0,g.jsx)(de,{...m})});ae.displayName="BarChart";const Ye=(0,a.E)(ae,{Legend:t.s}),je=(0,a.E)((0,ge.F)(ae),{Legend:t.s})},"../charts/src/components/shared/use-chart-data-transform.ts":(V,D,e)=>{e.d(D,{E:()=>s});var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js"),u=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js"),o=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse.js");const h=n=>/T.*[Z]$|T.*[+-]\d{2}:?\d{2}$/.test(n),d=n=>{const p=n.trim();if(h(p)){const c=(0,l.H)(p);return(0,u.f)(c)?c:new Date(NaN)}const f=["yyyy-MM-dd","yyyy-MM-dd HH:mm:ss","yyyy-MM-dd HH:mm","yyyy-MM-dd'T'HH:mm:ss","yyyy-MM-dd'T'HH:mm:ss.SSS","yyyy-MM-dd'T'HH:mm"];for(const c of f){const r=(0,o.qg)(p,c,new Date);if((0,u.f)(r))return r}return new Date(NaN)},s=n=>(0,_.useMemo)(()=>{const p=n?.[0]?.data?.[0];return p&&("date"in p||"dateString"in p)?n.map(c=>({...c,data:c.data.map(r=>{let S;return"date"in r&&r.date?S=r.date:"dateString"in r&&r.dateString&&(S=d(r.dateString)),{...r,date:S}}).sort((r,S)=>!r.date||!S.date?0:r.date.getTime()-S.date.getTime())})):n},[n])},"../charts/src/components/shared/use-chart-margin.tsx":(V,D,e)=>{e.d(D,{a:()=>h});var _=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),l=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../charts/src/components/shared/utils.ts");const h=(d,s,n,p,f=!1)=>{const c=(0,u.useMemo)(()=>{const r=n.flatMap(a=>a.data);if(f)return r.map(a=>a.label||s.axis?.y?.tickFormat(a.date.getTime(),0,[]));const S=Math.min(...r.map(a=>a.value)),b=Math.max(...r.map(a=>a.value)),C=(0,_.A)({...s.yScale,domain:[S,b],range:[d,0]});return(0,l.A)(C,s.axis?.y?.numTicks)},[s,n,d,f]);return(0,u.useMemo)(()=>{const r={top:10,right:20,bottom:20,left:20},S=40,b=s.axis?.y?.orientation,C=b==="right"?p.axisStyles.y.right:p.axisStyles.y.left,t=((0,o.S)(c,s.axis?.y?.tickFormat,C.axisLabel)??S)+(C?.tickLength??0);return b==="right"?r.right=t:r.left=t,s.axis?.x?.orientation==="top"&&(r.top=20,r.bottom=10),r},[s,p,c])}},"../charts/src/components/shared/utils.ts":(V,D,e)=>{e.d(D,{S:()=>l,n:()=>u});var _=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js");const l=(o,h,d)=>{const s=o.map(p=>h(p,0,[])),n=s.reduce((p,f)=>p.length>=f.length?p:f,s[0]);return(0,_.A)(n,d)},u=()=>typeof navigator<"u"&&navigator.userAgent?/^((?!chrome|android).)*safari/i.test(navigator.userAgent):!1},"../charts/src/components/tooltip/accessible-tooltip.tsx":(V,D,e)=>{e.d(D,{JZ:()=>d,OZ:()=>h});var _=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/context/TooltipContext.js"),l=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=({renderTooltip:s,selectedIndex:n,tooltipRef:p,keyboardFocusedClassName:f,series:c=[],mode:r="group",...S})=>{const b=(0,u.useContext)(_.A),C=(0,u.useMemo)(()=>{if(r!=="individual")return[];if(c.length===0)return[];const t=Math.max(...c.map(x=>x.data.length)),i=[];for(let x=0;x<t;x++)for(let y=0;y<c.length;y++){const I=c[y];x<I.data.length&&i.push({datum:I.data[x],seriesLabel:I.label,seriesIndex:y,dataPointIndex:x})}return i},[c,r]);(0,u.useEffect)(()=>{if(n===void 0){b?.hideTooltip();return}if(r==="group")c.forEach((t,i)=>{if(n<t.data.length){const x=t.data[n];b?.showTooltip({datum:x,key:t.label,index:i})}});else if(r==="individual"&&n<C.length){const t=C[n];b?.showTooltip({datum:t.datum,key:t.seriesLabel,index:t.seriesIndex})}},[n,C,c]);const a=(0,u.useMemo)(()=>{if(s)return t=>{const i=s(t);return n!==void 0?(0,o.jsx)("div",{ref:p,tabIndex:-1,role:"tooltip","aria-atomic":"true",className:f,"data-testid":`chart-tooltip-${n}`,children:i},`chart-tooltip-${n}`):(0,o.jsx)("div",{role:"tooltip","aria-live":"polite",children:i})}},[s,n,p,f]);return(0,o.jsx)(l.A,{...S,renderTooltip:a})},d=({selectedIndex:s,setSelectedIndex:n,isNavigating:p,setIsNavigating:f,chartRef:c,totalPoints:r})=>{const S=(0,u.useCallback)(t=>{t&&s!==void 0&&t.focus()},[s]),b=(0,u.useCallback)(()=>{!p&&s!==void 0&&n(0)},[p,s,n]),C=(0,u.useCallback)(()=>{f(!1)},[f]),a=(0,u.useCallback)(t=>{if(r===0)return;if(t.key==="Tab"){c.current?.focus(),n(void 0),f(!1);return}const i=s===void 0?-1:s;if(i+1>=r&&["ArrowRight"].includes(t.key)){c.current?.focus(),n(void 0),f(!1);return}t.preventDefault(),["ArrowRight"].includes(t.key)?(f(!0),n((i+1)%r)):["ArrowLeft"].includes(t.key)?(f(!0),n((i-1+r)%r)):t.key==="Escape"&&(n(void 0),f(!1),c.current?.focus())},[r,s,n,f,c]);return{tooltipRef:S,onChartFocus:b,onChartBlur:C,onChartKeyDown:a}};try{h.displayName="AccessibleTooltip",h.__docgenInfo={description:"",displayName:"AccessibleTooltip",props:{renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!1,type:{name:"number"}},tooltipRef:{defaultValue:null,description:"",name:"tooltipRef",required:!1,type:{name:"(element: HTMLDivElement) => void"}},keyboardFocusedClassName:{defaultValue:null,description:"",name:"keyboardFocusedClassName",required:!1,type:{name:"string"}},tooltipData:{defaultValue:null,description:`Flattened tooltip data prepared by parent component
Each index corresponds to one tooltip to show`,name:"tooltipData",required:!1,type:{name:"FlattenedTooltipData[]"}},series:{defaultValue:{value:"[]"},description:`For line charts: series data to show all series at selected data point
When provided, shows all series instead of individual tooltips`,name:"series",required:!1,type:{name:"SeriesData[]"}},mode:{defaultValue:{value:"group"},description:`Whether to combine tooltip information from multiple series into a single tooltip. This is useful for line charts.
Or to show individual tooltips for each series. This is useful for bar charts.`,name:"mode",required:!1,type:{name:"enum",value:[{value:'"group"'},{value:'"individual"'}]}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<DataPointDate>) => React.ReactNode"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"]={docgenInfo:h.__docgenInfo,name:"AccessibleTooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"})}catch{}try{d.displayName="useKeyboardNavigation",d.__docgenInfo={description:"",displayName:"useKeyboardNavigation",props:{selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!0,type:{name:"number"}},setSelectedIndex:{defaultValue:null,description:"",name:"setSelectedIndex",required:!0,type:{name:"(index: number) => void"}},isNavigating:{defaultValue:null,description:"",name:"isNavigating",required:!0,type:{name:"boolean"}},setIsNavigating:{defaultValue:null,description:"",name:"setIsNavigating",required:!0,type:{name:"(navigating: boolean) => void"}},chartRef:{defaultValue:null,description:"",name:"chartRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}},totalPoints:{defaultValue:null,description:"Total number of navigation points (length of tooltip data array)",name:"totalPoints",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"]={docgenInfo:d.__docgenInfo,name:"useKeyboardNavigation",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"})}catch{}try{accessibletooltip.displayName="accessibletooltip",accessibletooltip.__docgenInfo={description:`This is a wrapper component which bails early if tooltip is not visible.
If scroll detection is enabled in UseTooltipPortalOptions, this avoids re-rendering
the component on every scroll. If many charts with Tooltips are rendered on a page,
this also avoids creating many resize observers / hitting browser limits.`,displayName:"accessibletooltip",props:{renderTooltip:{defaultValue:null,description:`When TooltipContext.tooltipOpen=true, this function is invoked and if the
return value is non-null, its content is rendered inside the tooltip container.
Content will be rendered in an HTML parent.`,name:"renderTooltip",required:!0,type:{name:"(params: RenderTooltipParams<Datum>) => React.ReactNode"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<Datum>) => React.ReactNode"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"]={docgenInfo:accessibletooltip.__docgenInfo,name:"accessibletooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"})}catch{}},"../charts/src/hooks/use-xychart-theme.ts":(V,D,e)=>{e.d(D,{O:()=>o});var _=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=e("../charts/src/hooks/use-global-chart-theme.ts");const o=h=>{const d=(0,u.u)();return(0,l.useMemo)(()=>{const s=(h??[]).map(n=>n.options?.stroke).filter(n=>!!n);return(0,_.A)({...d,colors:[...s,...d.colors??[]]})},[d,h])}},"../charts/src/stories/legend-config.tsx":(V,D,e)=>{e.d(D,{r:()=>_});const _={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"}};try{_.displayName="legendArgTypes",_.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:_.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(V,D,e)=>{e.d(D,{A:()=>u});function _(o){var h,d,s="";if(typeof o=="string"||typeof o=="number")s+=o;else if(typeof o=="object")if(Array.isArray(o)){var n=o.length;for(h=0;h<n;h++)o[h]&&(d=_(o[h]))&&(s&&(s+=" "),s+=d)}else for(d in o)o[d]&&(s&&(s+=" "),s+=d);return s}function l(){for(var o,h,d=0,s="",n=arguments.length;d<n;d++)(o=arguments[d])&&(h=_(o))&&(s&&(s+=" "),s+=h);return s}const u=l},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":(V,D,e)=>{e.d(D,{A:()=>d});var _=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(_),u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(u),h=o()(l());h.push([V.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),h.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const d=h},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":V=>{var D=function(t){return e(t)&&!_(t)};function e(a){return!!a&&typeof a=="object"}function _(a){var t=Object.prototype.toString.call(a);return t==="[object RegExp]"||t==="[object Date]"||o(a)}var l=typeof Symbol=="function"&&Symbol.for,u=l?Symbol.for("react.element"):60103;function o(a){return a.$$typeof===u}function h(a){return Array.isArray(a)?[]:{}}function d(a,t){return t.clone!==!1&&t.isMergeableObject(a)?b(h(a),a,t):a}function s(a,t,i){return a.concat(t).map(function(x){return d(x,i)})}function n(a,t){if(!t.customMerge)return b;var i=t.customMerge(a);return typeof i=="function"?i:b}function p(a){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(a).filter(function(t){return Object.propertyIsEnumerable.call(a,t)}):[]}function f(a){return Object.keys(a).concat(p(a))}function c(a,t){try{return t in a}catch{return!1}}function r(a,t){return c(a,t)&&!(Object.hasOwnProperty.call(a,t)&&Object.propertyIsEnumerable.call(a,t))}function S(a,t,i){var x={};return i.isMergeableObject(a)&&f(a).forEach(function(y){x[y]=d(a[y],i)}),f(t).forEach(function(y){r(a,y)||(c(a,y)&&i.isMergeableObject(t[y])?x[y]=n(y,i)(a[y],t[y],i):x[y]=d(t[y],i))}),x}function b(a,t,i){i=i||{},i.arrayMerge=i.arrayMerge||s,i.isMergeableObject=i.isMergeableObject||D,i.cloneUnlessOtherwiseSpecified=d;var x=Array.isArray(t),y=Array.isArray(a),I=x===y;return I?x?i.arrayMerge(a,t,i):S(a,t,i):d(t,i)}b.all=function(t,i){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(x,y){return b(x,y,i)},{})};var C=b;V.exports=C}}]);
