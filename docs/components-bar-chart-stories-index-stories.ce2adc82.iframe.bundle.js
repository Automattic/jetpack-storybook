"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":(A,D,e)=>{e.r(D),e.d(D,{CustomLegendPositioning:()=>t,Default:()=>o,ErrorStates:()=>u,FixedDimensions:()=>l,HorizontalBarChart:()=>i,ManyDataSeries:()=>p,SingleSeries:()=>s,SmartFormatting:()=>v,TimeSeries:()=>y,WithCompositionLegend:()=>a,WithLegend:()=>C,WithPatterns:()=>n,ZeroValueComparison:()=>g,__namedExportsOrder:()=>B,default:()=>c});var S=e("../charts/src/stories/legend-config.tsx"),d=e("../charts/src/stories/sample-data/index.ts"),m=e("../charts/src/components/bar-chart/bar-chart.tsx"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c={title:"JS Packages/Charts/Types/Bar Chart",component:m.A,parameters:{layout:"centered"},decorators:[k=>(0,r.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,r.jsx)(k,{})})],argTypes:{maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}},...S.r}},o={args:{withTooltips:!0,data:[d._E[0],d._E[1],d._E[2]],gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300}},s={args:{...o.args,data:[d._E[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},y={args:{...o.args,data:[{...d.Sb[0],label:"Data with dateString and date",data:[...d.Sb[0].data,{dateString:"2024-01-31",value:2230},{dateString:"2024-02-01",value:2580},{date:new Date("2024-02-02 00:00:00"),value:3500},{dateString:"2024-02-03 00:00:00",value:1500},{dateString:"2024-02-04",value:2500},{dateString:"2024-02-05 00:00",value:3e3}]}],options:{axis:{x:{tickFormat:k=>new Date(k).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},p={args:{...o.args,data:d._E},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},l={args:{...o.args,width:800,height:400,data:[d._E[0],d._E[1],d._E[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},n={args:{...o.args,withPatterns:!0,data:o.args.data.map(k=>({...k,data:k.data.filter(X=>parseInt(X.label)>=2016)}))}},u={render:()=>(0,r.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Empty Data"}),(0,r.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,r.jsx)(m.A,{data:[]})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Invalid Data"}),(0,r.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,r.jsx)(m.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};u.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const v={args:{withTooltips:!0,data:d.Gv,gridVisibility:"x"}};v.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const C={args:{...o.args,showLegend:!0}},a={render:()=>(0,r.jsx)("div",{style:{width:"800px"},children:(0,r.jsx)(m.A,{data:[d._E[0],d._E[1],d._E[2]],withTooltips:!0,gridVisibility:"x",maxWidth:1200,aspectRatio:.5,children:(0,r.jsx)(m.A.Legend,{orientation:"horizontal",alignment:"center",position:"bottom"})})}),parameters:{docs:{description:{story:"Demonstrates using the composition API with `<BarChart.Legend />` as a child component. This provides the same functionality as the `showLegend` prop but allows for more flexible composition patterns."}}}},t={args:{withTooltips:!0,data:d._E.slice(0,3),gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top"},parameters:{docs:{description:{story:"Bar chart with top-left positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities."}}}},i={args:{...o.args,data:[d._E[0],d._E[1],d._E[2]],orientation:"horizontal",gridVisibility:"none"}},_=[{group:"United States",label:"United States",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:3}]},{group:"Great Britain",label:"Great Britain",data:[{label:"1896",value:1},{label:"1900",value:0},{label:"1904",value:1},{label:"1908",value:10},{label:"1912",value:9}]},{group:"Japan",label:"Japan",data:[{label:"1896",value:2},{label:"1900",value:1},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:2}]}],g={render:()=>(0,r.jsxs)("div",{style:{display:"grid",gap:"40px"},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Zero Value Display: Disabled (Default)"}),(0,r.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are not visually displayed. Bars with zero values have no height."}),(0,r.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,r.jsx)(m.A,{data:_,showZeroValues:!1,withTooltips:!0,gridVisibility:"x"})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Zero Value Display: Enabled"}),(0,r.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are visually displayed with minimum height bars. The tooltip still shows the actual value of 0, while the bar has a small visual height for better UX."}),(0,r.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,r.jsx)(m.A,{data:_,showZeroValues:!0,withTooltips:!0,gridVisibility:"x"})})]})]}),parameters:{docs:{description:{story:"Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights."}}}},B=["Default","SingleSeries","TimeSeries","ManyDataSeries","FixedDimensions","WithPatterns","ErrorStates","SmartFormatting","WithLegend","WithCompositionLegend","CustomLegendPositioning","HorizontalBarChart","ZeroValueComparison"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    // limit to 3 series for better readability
    gridVisibility: 'x',
    maxWidth: 1200,
    aspectRatio: 0.5,
    resizeDebounceTime: 300
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    gridVisibility: 'x'
  }
}`,...v.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+deprecated@4.28.0/node_modules/@wordpress/deprecated/build-module/index.js":(A,D,e)=>{e.d(D,{A:()=>m});var S=e("../../../node_modules/.pnpm/@wordpress+hooks@4.28.0/node_modules/@wordpress/hooks/build-module/index.js");const d=Object.create(null);function m(r,f={}){const{since:c,version:o,alternative:s,plugin:y,link:p,hint:l}=f,n=y?` from ${y}`:"",u=c?` since version ${c}`:"",v=o?` and will be removed${n} in version ${o}`:"",C=s?` Please use ${s} instead.`:"",a=p?` See: ${p}`:"",t=l?` Note: ${l}`:"",i=`${r} is deprecated${u}${v}.${C}${a}${t}`;i in d||((0,S.Eo)("deprecated",r,f,i),console.warn(i),d[i]=!0)}},"../charts/src/components/bar-chart/bar-chart.tsx":(A,D,e)=>{e.d(D,{A:()=>Oe});var S=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),d=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),m=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),r=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),f=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),c=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),o=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),s=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),y=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),p=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=e("../charts/src/hooks/use-xychart-theme.ts"),v=e("../charts/src/hooks/use-chart-data-transform.ts");const C=(h,V={enabled:!1})=>{const{enabled:w,minValueRatio:j=.6,maxValueRatio:z=.008}=V;return(0,n.useMemo)(()=>{if(!w)return h;const W=[];for(const O of h)for(const E of O.data)E.value!==null&&E.value!==0&&W.push(E.value);if(W.length===0)return h;const L=W.map(Math.abs),M=Math.min(...L),N=Math.max(...L),I=Math.min(M*j,N*z);return h.map(O=>({...O,data:O.data.map(E=>E.value===0?{...E,visualValue:I}:E)}))},[h,w,j,z])};var a=e("../charts/src/hooks/use-chart-margin.tsx"),t=e("../charts/src/hooks/use-element-height.ts"),i=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),_=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),g=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),B=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),k=e("../charts/src/utils/create-composition.ts"),X=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),ee=e("../charts/src/components/legend/legend.tsx"),be=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),ve=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),le=e("../charts/src/components/tooltip/accessible-tooltip.tsx"),xe=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_e=e.n(xe),de=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),te={};te.insert="head",te.singleton=!1;var Ye=_e()(de.A,te);const F=de.A.locals||{};var Se=e("../number-formatters/src/index.ts");const Te=h=>new Date(h).toLocaleDateString(void 0,{month:"short",day:"numeric"}),De=h=>typeof h.paddingInner=="number"?h.paddingInner:0;function Ce(h,V,w={}){const j=(0,n.useMemo)(()=>{const z={type:"band",padding:.2,paddingInner:.1},W={type:"linear",nice:!0,zero:!1},L=h?.[0]?.data?.[0]?.label?O=>O:Te,M=Se.qe,N=O=>O?.label||O?.date,I=O=>{const E=O;return E?.visualValue!==void 0?E.visualValue:O?.value};return{vertical:{xTickFormat:L,yTickFormat:M,tooltipLabelFormatter:L,xAccessor:N,yAccessor:I,gridVisibility:"x",xScale:z,yScale:W},horizontal:{xTickFormat:M,yTickFormat:L,tooltipLabelFormatter:L,xAccessor:I,yAccessor:N,gridVisibility:"y",xScale:W,yScale:z}}},[h]);return(0,n.useMemo)(()=>{const z=V?"horizontal":"vertical",{xTickFormat:W,yTickFormat:L,tooltipLabelFormatter:M,xAccessor:N,yAccessor:I,gridVisibility:O,xScale:E,yScale:re}=j[z],J={...E,...w.xScale||{}},q={...re,...w.yScale||{}},Z=V?w.axis?.y?.tickFormat:w.axis?.x?.tickFormat;return{gridVisibility:O,xScale:J,yScale:q,accessors:{xAccessor:N,yAccessor:I},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:W,...w.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:L,...w.axis?.y||{}}},barGroup:{padding:De(V?q:J)},tooltip:{labelFormatter:Z||M}}},[j,w,V])}var b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const je=p.__,we=h=>h?.length?h.some(w=>w.data.some(j=>isNaN(j.value)||j.value===null||j.value===void 0||!j.label&&(!("date"in j&&j.date)||isNaN(j.date.getTime()))))?"Invalid data":null:"No data available",ae=(h,V)=>`bar-pattern-${h}-${V}`,ce=({data:h,chartId:V,width:w,height:j=400,className:z,margin:W,withTooltips:L=!1,showLegend:M=!1,legendOrientation:N="horizontal",legendPosition:I="bottom",legendAlignment:O="center",legendShape:E="rect",gridVisibility:re,renderTooltip:J,options:q={},orientation:Z="vertical",withPatterns:Y=!1,showZeroValues:Ee=!1,children:Ve})=>{const oe=Z==="horizontal",P=(0,i.R)(V),ue=(0,u.O)(h),K=(0,v.E)(h),pe=C(K,{enabled:Ee}),Ae=(0,X.f)(K),R=Ce(pe,oe,q),me=(0,a.a)(j,R,K,ue,oe),[Me,ne]=(0,t.v)(),he=(0,n.useRef)(null),[U,Pe]=(0,n.useState)(void 0),[Le,Re]=(0,n.useState)(!1),Be=Math.max(0,...h.map(x=>x.data?.length||0))*h.length,{tooltipRef:We,onChartFocus:Ie,onChartBlur:ke,onChartKeyDown:Fe}=(0,le.JZ)({selectedIndex:U,setSelectedIndex:Pe,isNavigating:Le,setIsNavigating:Re,chartRef:he,totalPoints:Be}),{resolveGroupColor:fe}=(0,_.j)(),Q=(0,n.useCallback)((x,T)=>fe({group:x.group,index:T,overrideColor:x.options?.stroke}),[fe]),ze=(0,n.useCallback)(x=>()=>Y?`url(#${ae(P,x)})`:Q(K[x],x),[Y,Q,K,P]),Ne=(0,n.useCallback)(({tooltipData:x})=>{const T=x?.nearestDatum?.datum;return T?(0,b.jsxs)("div",{className:F["bar-chart__tooltip"],children:[(0,b.jsx)("div",{className:F["bar-chart__tooltip-header"],children:x?.nearestDatum?.key}),(0,b.jsxs)("div",{className:F["bar-chart__tooltip-row"],children:[(0,b.jsxs)("span",{className:F["bar-chart__tooltip-label"],children:[R.tooltip.labelFormatter(T.label||(T.date?T.date.getTime():0),0,[]),":"]}),(0,b.jsx)("span",{className:F["bar-chart__tooltip-value"],children:T.value})]})]}):null},[R.tooltip]),Ke=(0,n.useCallback)((x,T)=>{const $=x%4,G=ae(P,x),H={id:G,stroke:"white",strokeWidth:1,background:T};switch($){case 0:default:return(0,b.jsx)(S.A,{...H,width:5,height:5,orientation:["diagonal"]},G);case 1:return(0,b.jsx)(d.A,{...H,width:6,height:6,fill:"white"},G);case 2:return(0,b.jsx)(m.A,{...H,width:4,height:4},G);case 3:return(0,b.jsx)(r.A,{...H,size:8,height:3},G)}},[P]),Ge=(0,n.useCallback)((x,T)=>`
			.visx-bar[fill="url(#${ae(P,x)})"] {
				stroke: ${T};
				stroke-width: 1;
				}
			`,[P]),Ue=(0,n.useCallback)(()=>{if(U===void 0)return"";const x=Math.max(...h.map(Ze=>Ze.data.length)),T=Math.floor(U/h.length),$=U%h.length;if(T>=x||$>=h.length)return"";const G=h[$];if(T>=G.data.length)return"";const H=$*x+T;return`
			.bar-chart[data-chart-id="bar-chart-${P}"] .visx-bar-group .visx-bar:nth-child(${H+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[U,h,P]),ie=we(K),$e=!ie,He=(0,n.useMemo)(()=>({orientation:Z,withPatterns:Y}),[Z,Y]);if((0,g.t)({chartId:P,legendItems:Ae,chartType:"bar",isDataValid:$e,metadata:He}),ie)return(0,b.jsx)("div",{className:(0,l.A)("bar-chart",F["bar-chart"]),children:ie});const ye=re??R.gridVisibility,ge=Ue();return(0,b.jsx)(be.O.Provider,{value:{chartId:P,chartWidth:w,chartHeight:j-(M?ne:0)},children:(0,b.jsxs)("div",{className:(0,l.A)("bar-chart",F["bar-chart"],z),"data-testid":"bar-chart",role:"grid","aria-label":je("Bar chart","jetpack-charts"),style:{width:w,height:j,display:"flex",flexDirection:M&&I==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:Fe,onFocus:Ie,onBlur:ke,ref:he,"data-chart-id":`bar-chart-${P}`,children:[(0,b.jsxs)(f.A,{theme:ue,width:w,height:j-(M?ne:0),margin:{...me,...W,...M&&I==="top"?{top:(me.top||0)+ne}:{}},xScale:R.xScale,yScale:R.yScale,horizontal:oe,pointerEventsDataKey:"nearest",children:[(0,b.jsx)(c.A,{columns:ye.includes("y"),rows:ye.includes("x"),numTicks:4}),Y&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("defs",{"data-testid":"bar-chart-patterns",children:K.map((x,T)=>Ke(T,Q(x,T)))}),(0,b.jsx)("style",{children:K.map((x,T)=>Ge(T,Q(x,T)))})]}),ge&&(0,b.jsx)("style",{children:ge}),(0,b.jsx)(o.A,{padding:R.barGroup.padding,children:pe.map((x,T)=>(0,b.jsx)(s.A,{dataKey:x?.label,data:x.data,yAccessor:R.accessors.yAccessor,xAccessor:R.accessors.xAccessor,colorAccessor:ze(T)},x?.label))}),(0,b.jsx)(y.A,{...R.axis.x}),(0,b.jsx)(y.A,{...R.axis.y}),L&&(0,b.jsx)(le.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:J||Ne,selectedIndex:U,tooltipRef:We,keyboardFocusedClassName:F["bar-chart__tooltip--keyboard-focused"],series:h,mode:"individual"})]}),M&&(0,b.jsx)(ee.s,{orientation:N,position:I,alignment:O,className:F["bar-chart__legend"],shape:E,ref:Me,chartId:P}),Ve]})})},se=h=>(0,n.useContext)(B.m)?(0,b.jsx)(ce,{...h}):(0,b.jsx)(B.S,{children:(0,b.jsx)(ce,{...h})});se.displayName="BarChart";const Xe=(0,k.E)(se,{Legend:ee.s}),Oe=(0,k.E)((0,ve.F)(se),{Legend:ee.s})},"../charts/src/components/tooltip/accessible-tooltip.tsx":(A,D,e)=>{e.d(D,{JZ:()=>c,OZ:()=>f});var S=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/context/TooltipContext.js"),d=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f=({renderTooltip:o,selectedIndex:s,tooltipRef:y,keyboardFocusedClassName:p,series:l=[],mode:n="group",...u})=>{const v=(0,m.useContext)(S.A),C=(0,m.useMemo)(()=>{if(n!=="individual")return[];if(l.length===0)return[];const t=Math.max(...l.map(_=>_.data.length)),i=[];for(let _=0;_<t;_++)for(let g=0;g<l.length;g++){const B=l[g];_<B.data.length&&i.push({datum:B.data[_],seriesLabel:B.label,seriesIndex:g,dataPointIndex:_})}return i},[l,n]);(0,m.useEffect)(()=>{if(s===void 0){v?.hideTooltip();return}if(n==="group")l.forEach((t,i)=>{if(s<t.data.length){const _=t.data[s];v?.showTooltip({datum:_,key:t.label,index:i})}});else if(n==="individual"&&s<C.length){const t=C[s];v?.showTooltip({datum:t.datum,key:t.seriesLabel,index:t.seriesIndex})}},[s,C,l]);const a=(0,m.useMemo)(()=>{if(o)return t=>{const i=o(t);return s!==void 0?(0,r.jsx)("div",{ref:y,tabIndex:-1,role:"tooltip","aria-atomic":"true",className:p,"data-testid":`chart-tooltip-${s}`,children:i},`chart-tooltip-${s}`):(0,r.jsx)("div",{role:"tooltip","aria-live":"polite",children:i})}},[o,s,y,p]);return(0,r.jsx)(d.A,{...u,renderTooltip:a})},c=({selectedIndex:o,setSelectedIndex:s,isNavigating:y,setIsNavigating:p,chartRef:l,totalPoints:n})=>{const u=(0,m.useCallback)(t=>{t&&o!==void 0&&t.focus()},[o]),v=(0,m.useCallback)(()=>{!y&&o!==void 0&&s(0)},[y,o,s]),C=(0,m.useCallback)(()=>{p(!1)},[p]),a=(0,m.useCallback)(t=>{if(n===0)return;if(t.key==="Tab"){l.current?.focus(),s(void 0),p(!1);return}const i=o===void 0?-1:o;if(i+1>=n&&["ArrowRight"].includes(t.key)){l.current?.focus(),s(void 0),p(!1);return}t.preventDefault(),["ArrowRight"].includes(t.key)?(p(!0),s((i+1)%n)):["ArrowLeft"].includes(t.key)?(p(!0),s((i-1+n)%n)):t.key==="Escape"&&(s(void 0),p(!1),l.current?.focus())},[n,o,s,p,l]);return{tooltipRef:u,onChartFocus:v,onChartBlur:C,onChartKeyDown:a}};try{f.displayName="AccessibleTooltip",f.__docgenInfo={description:"",displayName:"AccessibleTooltip",props:{renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!1,type:{name:"number"}},tooltipRef:{defaultValue:null,description:"",name:"tooltipRef",required:!1,type:{name:"(element: HTMLDivElement) => void"}},keyboardFocusedClassName:{defaultValue:null,description:"",name:"keyboardFocusedClassName",required:!1,type:{name:"string"}},tooltipData:{defaultValue:null,description:`Flattened tooltip data prepared by parent component
Each index corresponds to one tooltip to show`,name:"tooltipData",required:!1,type:{name:"FlattenedTooltipData[]"}},series:{defaultValue:{value:"[]"},description:`For line charts: series data to show all series at selected data point
When provided, shows all series instead of individual tooltips`,name:"series",required:!1,type:{name:"SeriesData[]"}},mode:{defaultValue:{value:"group"},description:`Whether to combine tooltip information from multiple series into a single tooltip. This is useful for line charts.
Or to show individual tooltips for each series. This is useful for bar charts.`,name:"mode",required:!1,type:{name:"enum",value:[{value:'"group"'},{value:'"individual"'}]}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<DataPointDate>) => React.ReactNode"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"]={docgenInfo:f.__docgenInfo,name:"AccessibleTooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"})}catch{}try{c.displayName="useKeyboardNavigation",c.__docgenInfo={description:"",displayName:"useKeyboardNavigation",props:{selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!0,type:{name:"number"}},setSelectedIndex:{defaultValue:null,description:"",name:"setSelectedIndex",required:!0,type:{name:"(index: number) => void"}},isNavigating:{defaultValue:null,description:"",name:"isNavigating",required:!0,type:{name:"boolean"}},setIsNavigating:{defaultValue:null,description:"",name:"setIsNavigating",required:!0,type:{name:"(navigating: boolean) => void"}},chartRef:{defaultValue:null,description:"",name:"chartRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}},totalPoints:{defaultValue:null,description:"Total number of navigation points (length of tooltip data array)",name:"totalPoints",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"]={docgenInfo:c.__docgenInfo,name:"useKeyboardNavigation",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"})}catch{}try{accessibletooltip.displayName="accessibletooltip",accessibletooltip.__docgenInfo={description:`This is a wrapper component which bails early if tooltip is not visible.
If scroll detection is enabled in UseTooltipPortalOptions, this avoids re-rendering
the component on every scroll. If many charts with Tooltips are rendered on a page,
this also avoids creating many resize observers / hitting browser limits.`,displayName:"accessibletooltip",props:{renderTooltip:{defaultValue:null,description:`When TooltipContext.tooltipOpen=true, this function is invoked and if the
return value is non-null, its content is rendered inside the tooltip container.
Content will be rendered in an HTML parent.`,name:"renderTooltip",required:!0,type:{name:"(params: RenderTooltipParams<Datum>) => React.ReactNode"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<Datum>) => React.ReactNode"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"]={docgenInfo:accessibletooltip.__docgenInfo,name:"accessibletooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"})}catch{}},"../charts/src/hooks/use-chart-data-transform.ts":(A,D,e)=>{e.d(D,{E:()=>o});var S=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js"),m=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js"),r=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse.js");const f=s=>/T.*[Z]$|T.*[+-]\d{2}:?\d{2}$/.test(s),c=s=>{const y=s.trim();if(f(y)){const l=(0,d.H)(y);return(0,m.f)(l)?l:new Date(NaN)}const p=["yyyy-MM-dd","yyyy-MM-dd HH:mm:ss","yyyy-MM-dd HH:mm","yyyy-MM-dd'T'HH:mm:ss","yyyy-MM-dd'T'HH:mm:ss.SSS","yyyy-MM-dd'T'HH:mm"];for(const l of p){const n=(0,r.qg)(y,l,new Date);if((0,m.f)(n))return n}return new Date(NaN)},o=s=>(0,S.useMemo)(()=>{const y=s?.[0]?.data?.[0];return y&&("date"in y||"dateString"in y)?s.map(l=>({...l,data:l.data.map(n=>{let u;return"date"in n&&n.date?u=n.date:"dateString"in n&&n.dateString&&(u=c(n.dateString)),{...n,date:u}}).sort((n,u)=>!n.date||!u.date?0:n.date.getTime()-u.date.getTime())})):s},[s])},"../charts/src/hooks/use-chart-margin.tsx":(A,D,e)=>{e.d(D,{a:()=>c});var S=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),d=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js");const f=(o,s,y)=>{const p=o.map(n=>s(n,0,[])),l=p.reduce((n,u)=>n.length>=u.length?n:u,p[0]);return(0,r.A)(l,y)},c=(o,s,y,p,l=!1)=>{const n=(0,m.useMemo)(()=>{const u=y.flatMap(t=>t.data);if(l)return u.map(t=>t.label||s.axis?.y?.tickFormat(t.date.getTime(),0,[]));const v=Math.min(...u.map(t=>t.value)),C=Math.max(...u.map(t=>t.value)),a=(0,S.A)({...s.yScale,domain:[v,C],range:[o,0]});return(0,d.A)(a,s.axis?.y?.numTicks)},[s,y,o,l]);return(0,m.useMemo)(()=>{const u={top:10,right:20,bottom:20,left:20},v=40,C=s.axis?.y?.orientation,a=C==="right"?p.axisStyles.y.right:p.axisStyles.y.left,i=(f(n,s.axis?.y?.tickFormat,a.axisLabel)??v)+(a?.tickLength??0);return C==="right"?u.right=i:u.left=i,s.axis?.x?.orientation==="top"&&(u.top=20,u.bottom=10),u},[s,p,n])}},"../charts/src/hooks/use-xychart-theme.ts":(A,D,e)=>{e.d(D,{O:()=>r});var S=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts");const r=f=>{const c=(0,m.p)();return(0,d.useMemo)(()=>{const o=(f??[]).map(s=>s.options?.stroke).filter(s=>!!s);return(0,S.A)({...c,colors:[...o,...c.colors??[]]})},[c,f])}},"../charts/src/stories/legend-config.tsx":(A,D,e)=>{e.d(D,{r:()=>S});const S={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"}};try{S.displayName="legendArgTypes",S.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:S.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(A,D,e)=>{e.d(D,{A:()=>m});function S(r){var f,c,o="";if(typeof r=="string"||typeof r=="number")o+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(f=0;f<s;f++)r[f]&&(c=S(r[f]))&&(o&&(o+=" "),o+=c)}else for(c in r)r[c]&&(o&&(o+=" "),o+=c);return o}function d(){for(var r,f,c=0,o="",s=arguments.length;c<s;c++)(r=arguments[c])&&(f=S(r))&&(o&&(o+=" "),o+=f);return o}const m=d},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":(A,D,e)=>{e.d(D,{A:()=>c});var S=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(S),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(m),f=r()(d());f.push([A.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),f.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const c=f},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":A=>{var D=function(t){return e(t)&&!S(t)};function e(a){return!!a&&typeof a=="object"}function S(a){var t=Object.prototype.toString.call(a);return t==="[object RegExp]"||t==="[object Date]"||r(a)}var d=typeof Symbol=="function"&&Symbol.for,m=d?Symbol.for("react.element"):60103;function r(a){return a.$$typeof===m}function f(a){return Array.isArray(a)?[]:{}}function c(a,t){return t.clone!==!1&&t.isMergeableObject(a)?v(f(a),a,t):a}function o(a,t,i){return a.concat(t).map(function(_){return c(_,i)})}function s(a,t){if(!t.customMerge)return v;var i=t.customMerge(a);return typeof i=="function"?i:v}function y(a){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(a).filter(function(t){return Object.propertyIsEnumerable.call(a,t)}):[]}function p(a){return Object.keys(a).concat(y(a))}function l(a,t){try{return t in a}catch{return!1}}function n(a,t){return l(a,t)&&!(Object.hasOwnProperty.call(a,t)&&Object.propertyIsEnumerable.call(a,t))}function u(a,t,i){var _={};return i.isMergeableObject(a)&&p(a).forEach(function(g){_[g]=c(a[g],i)}),p(t).forEach(function(g){n(a,g)||(l(a,g)&&i.isMergeableObject(t[g])?_[g]=s(g,i)(a[g],t[g],i):_[g]=c(t[g],i))}),_}function v(a,t,i){i=i||{},i.arrayMerge=i.arrayMerge||o,i.isMergeableObject=i.isMergeableObject||D,i.cloneUnlessOtherwiseSpecified=c;var _=Array.isArray(t),g=Array.isArray(a),B=_===g;return B?_?i.arrayMerge(a,t,i):u(a,t,i):c(t,i)}v.all=function(t,i){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(_,g){return v(_,g,i)},{})};var C=v;A.exports=C}}]);
