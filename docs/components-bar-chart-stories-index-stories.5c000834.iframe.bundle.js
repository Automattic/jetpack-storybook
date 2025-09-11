"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":((R,_,e)=>{e.r(_),e.d(_,{CustomLegendPositioning:()=>g,Default:()=>h,ErrorStates:()=>w,FixedDimensions:()=>M,HorizontalBarChart:()=>u,ManyDataSeries:()=>c,SingleSeries:()=>C,SmartFormatting:()=>t,TimeSeries:()=>S,WithCompositionLegend:()=>n,WithLegend:()=>s,WithPatterns:()=>b,ZeroValueComparison:()=>k,__namedExportsOrder:()=>te,default:()=>T});var v=e("../charts/src/stories/chart-decorator.tsx"),D=e("../charts/src/stories/theme-config.tsx"),B=e("../charts/src/stories/legend-config.tsx"),r=e("../charts/src/stories/sample-data/index.ts"),l=e("../charts/src/components/bar-chart/bar-chart.tsx"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const T={title:"JS Packages/Charts/Types/Bar Chart",component:l.A,parameters:{layout:"centered"},decorators:[v.OI],argTypes:{...v.xo,...D.jW,...B.r}},h={args:{withTooltips:!0,data:[r._E[0],r._E[1],r._E[2]],gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300}},C={args:{...h.args,data:[r._E[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},S={args:{...h.args,data:[{...r.Sb[0],label:"Data with dateString and date",data:[...r.Sb[0].data,{dateString:"2024-01-31",value:2230},{dateString:"2024-02-01",value:2580},{date:new Date("2024-02-02 00:00:00"),value:3500},{dateString:"2024-02-03 00:00:00",value:1500},{dateString:"2024-02-04",value:2500},{dateString:"2024-02-05 00:00",value:3e3}]}],options:{axis:{x:{tickFormat:K=>new Date(K).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},c={args:{...h.args,data:r._E},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},M={args:{...h.args,width:800,height:400,data:[r._E[0],r._E[1],r._E[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},b={args:{...h.args,withPatterns:!0,data:h.args.data.map(K=>({...K,data:K.data.filter(J=>parseInt(J.label)>=2016)}))}},w={render:()=>(0,a.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Empty Data"}),(0,a.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,a.jsx)(l.A,{data:[]})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Invalid Data"}),(0,a.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,a.jsx)(l.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};w.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const t={args:{withTooltips:!0,data:r.Gv,gridVisibility:"x"}};t.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const s={args:{...h.args,showLegend:!0}},n={render:()=>(0,a.jsx)("div",{style:{width:"800px"},children:(0,a.jsx)(l.A,{data:[r._E[0],r._E[1],r._E[2]],withTooltips:!0,gridVisibility:"x",maxWidth:1200,aspectRatio:.5,children:(0,a.jsx)(l.A.Legend,{orientation:"horizontal",alignment:"center",position:"bottom"})})}),parameters:{docs:{description:{story:"Demonstrates using the composition API with `<BarChart.Legend />` as a child component. This provides the same functionality as the `showLegend` prop but allows for more flexible composition patterns."}}}},g={args:{withTooltips:!0,data:r._E.slice(0,3),gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top"},parameters:{docs:{description:{story:"Bar chart with top-left positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities."}}}},u={args:{...h.args,data:[r._E[0],r._E[1],r._E[2]],orientation:"horizontal",gridVisibility:"none"}},z=[{group:"United States",label:"United States",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:3}]},{group:"Great Britain",label:"Great Britain",data:[{label:"1896",value:1},{label:"1900",value:0},{label:"1904",value:1},{label:"1908",value:10},{label:"1912",value:9}]},{group:"Japan",label:"Japan",data:[{label:"1896",value:2},{label:"1900",value:1},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:2}]}],k={render:()=>(0,a.jsxs)("div",{style:{display:"grid",gap:"40px"},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Zero Value Display: Disabled (Default)"}),(0,a.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are not visually displayed. Bars with zero values have no height."}),(0,a.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,a.jsx)(l.A,{data:z,showZeroValues:!1,withTooltips:!0,gridVisibility:"x"})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Zero Value Display: Enabled"}),(0,a.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are visually displayed with minimum height bars. The tooltip still shows the actual value of 0, while the bar has a small visual height for better UX."}),(0,a.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,a.jsx)(l.A,{data:z,showZeroValues:!0,withTooltips:!0,gridVisibility:"x"})})]})]}),parameters:{docs:{description:{story:"Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights."}}}},te=["Default","SingleSeries","TimeSeries","ManyDataSeries","FixedDimensions","WithPatterns","ErrorStates","SmartFormatting","WithLegend","WithCompositionLegend","CustomLegendPositioning","HorizontalBarChart","ZeroValueComparison"];h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}}}),"../../../node_modules/.pnpm/@wordpress+deprecated@4.30.0/node_modules/@wordpress/deprecated/build-module/index.js":((R,_,e)=>{e.d(_,{A:()=>B});var v=e("../../../node_modules/.pnpm/@wordpress+hooks@4.30.0/node_modules/@wordpress/hooks/build-module/index.js");const D=Object.create(null);function B(r,l={}){const{since:a,version:p,alternative:T,plugin:h,link:C,hint:S}=l,c=h?` from ${h}`:"",M=a?` since version ${a}`:"",b=p?` and will be removed${c} in version ${p}`:"",w=T?` Please use ${T} instead.`:"",t=C?` See: ${C}`:"",s=S?` Note: ${S}`:"",n=`${r} is deprecated${M}${b}.${w}${t}${s}`;n in D||((0,v.Eo)("deprecated",r,l,n),console.warn(n),D[n]=!0)}}),"../charts/src/components/bar-chart/bar-chart.tsx":((R,_,e)=>{e.d(_,{A:()=>we});var v=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),D=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),B=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),r=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),l=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),a=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),p=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),T=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),h=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),C=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),S=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),M=e("../charts/src/hooks/use-xychart-theme.ts"),b=e("../charts/src/hooks/use-chart-data-transform.ts");const w=(o,E={enabled:!1})=>{const{enabled:y,minValueRatio:x=.6,maxValueRatio:W=.008}=E;return(0,c.useMemo)(()=>{if(!y)return o;const V=[];for(const f of o)for(const j of f.data)j.value!==null&&j.value!==0&&V.push(j.value);if(V.length===0)return o;const L=V.map(Math.abs),A=Math.min(...L),N=Math.max(...L),P=Math.min(A*x,N*W);return o.map(f=>({...f,data:f.data.map(j=>j.value===0?{...j,visualValue:P}:j)}))},[o,y,x,W])};var t=e("../charts/src/hooks/use-chart-margin.tsx"),s=e("../charts/src/hooks/use-element-height.ts"),n=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),g=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),u=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),z=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),k=e("../charts/src/utils/create-composition.ts"),te=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),K=e("../charts/src/components/legend/legend.tsx"),J=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),ye=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),de=e("../charts/src/components/tooltip/accessible-tooltip.tsx"),fe=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_e=e.n(fe),ce=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),ae={};ae.insert="head",ae.singleton=!1;var Ye=_e()(ce.A,ae);const F=ce.A.locals||{};var Se=e("../number-formatters/src/index.ts");const je=o=>new Date(o).toLocaleDateString(void 0,{month:"short",day:"numeric"}),De=o=>typeof o.paddingInner=="number"?o.paddingInner:0;function Ce(o,E,y={}){const x=(0,c.useMemo)(()=>{const W={type:"band",padding:.2,paddingInner:.1},V={type:"linear",nice:!0,zero:!1},L=o?.[0]?.data?.[0]?.label?f=>f:je,A=Se.qe,N=f=>f?.label||f?.date,P=f=>{const j=f;return j?.visualValue!==void 0?j.visualValue:f?.value};return{vertical:{xTickFormat:L,yTickFormat:A,tooltipLabelFormatter:L,xAccessor:N,yAccessor:P,gridVisibility:"x",xScale:W,yScale:V},horizontal:{xTickFormat:A,yTickFormat:L,tooltipLabelFormatter:L,xAccessor:P,yAccessor:N,gridVisibility:"y",xScale:V,yScale:W}}},[o]);return(0,c.useMemo)(()=>{const W=E?"horizontal":"vertical",{xTickFormat:V,yTickFormat:L,tooltipLabelFormatter:A,xAccessor:N,yAccessor:P,gridVisibility:f,xScale:j,yScale:ne}=x[W],Q={...j,...y.xScale||{}},q={...ne,...y.yScale||{}},Y=E?y.axis?.y?.tickFormat:y.axis?.x?.tickFormat;return{gridVisibility:f,xScale:Q,yScale:q,accessors:{xAccessor:N,yAccessor:P},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:V,...y.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:L,...y.axis?.y||{}}},barGroup:{padding:De(E?q:Q)},tooltip:{labelFormatter:Y||A}}},[x,y,E])}var i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const Ee=C.__,Te=o=>o?.length?o.some(y=>y.data.some(x=>isNaN(x.value)||x.value===null||x.value===void 0||!x.label&&(!("date"in x&&x.date)||isNaN(x.date.getTime()))))?"Invalid data":null:"No data available",se=(o,E)=>`bar-pattern-${o}-${E}`,ue=({data:o,chartId:E,width:y,height:x=400,className:W,margin:V,withTooltips:L=!1,showLegend:A=!1,legendOrientation:N="horizontal",legendPosition:P="bottom",legendAlignment:f="center",legendShape:j="rect",gridVisibility:ne,renderTooltip:Q,options:q={},orientation:Y="vertical",withPatterns:H=!1,showZeroValues:Ae=!1,children:Oe})=>{const oe=Y==="horizontal",O=(0,n.R)(E),me=(0,M.O)(o),U=(0,b.E)(o),pe=w(U,{enabled:Ae}),Be=(0,te.f)(U),I=Ce(pe,oe,q),he=(0,t.a)(x,I,U,me,oe),[Me,ie]=(0,s.v)(),ge=(0,c.useRef)(null),[$,Le]=(0,c.useState)(void 0),[Ie,Ve]=(0,c.useState)(!1),Pe=Math.max(0,...o.map(d=>d.data?.length||0))*o.length,{tooltipRef:Fe,onChartFocus:We,onChartBlur:Re,onChartKeyDown:ke}=(0,de.JZ)({selectedIndex:$,setSelectedIndex:Le,isNavigating:Ie,setIsNavigating:Ve,chartRef:ge,totalPoints:Pe}),{resolveGroupColor:ve}=(0,g.j)(),ee=(0,c.useCallback)((d,m)=>ve({group:d.group,index:m,overrideColor:d.options?.stroke}),[ve]),Ke=(0,c.useCallback)(d=>()=>H?`url(#${se(O,d)})`:ee(U[d],d),[H,ee,U,O]),Ne=(0,c.useCallback)(({tooltipData:d})=>{const m=d?.nearestDatum?.datum;return m?(0,i.jsxs)("div",{className:F["bar-chart__tooltip"],children:[(0,i.jsx)("div",{className:F["bar-chart__tooltip-header"],children:d?.nearestDatum?.key}),(0,i.jsxs)("div",{className:F["bar-chart__tooltip-row"],children:[(0,i.jsxs)("span",{className:F["bar-chart__tooltip-label"],children:[I.tooltip.labelFormatter(m.label||(m.date?m.date.getTime():0),0,[]),":"]}),(0,i.jsx)("span",{className:F["bar-chart__tooltip-value"],children:m.value})]})]}):null},[I.tooltip]),Ue=(0,c.useCallback)((d,m)=>{const G=d%4,Z=se(O,d),X={id:Z,stroke:"white",strokeWidth:1,background:m};switch(G){case 0:default:return(0,i.jsx)(v.A,{...X,width:5,height:5,orientation:["diagonal"]},Z);case 1:return(0,i.jsx)(D.A,{...X,width:6,height:6,fill:"white"},Z);case 2:return(0,i.jsx)(B.A,{...X,width:4,height:4},Z);case 3:return(0,i.jsx)(r.A,{...X,size:8,height:3},Z)}},[O]),ze=(0,c.useCallback)((d,m)=>`
			.visx-bar[fill="url(#${se(O,d)})"] {
				stroke: ${m};
				stroke-width: 1;
				}
			`,[O]),Ze=(0,c.useCallback)(()=>{if($===void 0)return"";const d=Math.max(...o.map(Xe=>Xe.data.length)),m=Math.floor($/o.length),G=$%o.length;if(m>=d||G>=o.length)return"";const Z=o[G];if(m>=Z.data.length)return"";const X=G*d+m;return`
			.bar-chart[data-chart-id="bar-chart-${O}"] .visx-bar-group .visx-bar:nth-child(${X+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[$,o,O]),le=Te(U),$e=!le,Ge=(0,c.useMemo)(()=>({orientation:Y,withPatterns:H}),[Y,H]);if((0,u.t)({chartId:O,legendItems:Be,chartType:"bar",isDataValid:$e,metadata:Ge}),le)return(0,i.jsx)("div",{className:(0,S.A)("bar-chart",F["bar-chart"]),children:le});const xe=ne??I.gridVisibility,be=Ze();return(0,i.jsx)(J.O.Provider,{value:{chartId:O,chartWidth:y,chartHeight:x-(A?ie:0)},children:(0,i.jsxs)("div",{className:(0,S.A)("bar-chart",F["bar-chart"],W),"data-testid":"bar-chart",role:"grid","aria-label":Ee("Bar chart","jetpack-charts"),style:{width:y,height:x,display:"flex",flexDirection:A&&P==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:ke,onFocus:We,onBlur:Re,ref:ge,"data-chart-id":`bar-chart-${O}`,children:[(0,i.jsxs)(l.A,{theme:me,width:y,height:x-(A?ie:0),margin:{...he,...V,...A&&P==="top"?{top:(he.top||0)+ie}:{}},xScale:I.xScale,yScale:I.yScale,horizontal:oe,pointerEventsDataKey:"nearest",children:[(0,i.jsx)(a.A,{columns:xe.includes("y"),rows:xe.includes("x"),numTicks:4}),H&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("defs",{"data-testid":"bar-chart-patterns",children:U.map((d,m)=>Ue(m,ee(d,m)))}),(0,i.jsx)("style",{children:U.map((d,m)=>ze(m,ee(d,m)))})]}),be&&(0,i.jsx)("style",{children:be}),(0,i.jsx)(p.A,{padding:I.barGroup.padding,children:pe.map((d,m)=>(0,i.jsx)(T.A,{dataKey:d?.label,data:d.data,yAccessor:I.accessors.yAccessor,xAccessor:I.accessors.xAccessor,colorAccessor:Ke(m)},d?.label))}),(0,i.jsx)(h.A,{...I.axis.x}),(0,i.jsx)(h.A,{...I.axis.y}),L&&(0,i.jsx)(de.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:Q||Ne,selectedIndex:$,tooltipRef:Fe,keyboardFocusedClassName:F["bar-chart__tooltip--keyboard-focused"],series:o,mode:"individual"})]}),A&&(0,i.jsx)(K.s,{orientation:N,position:P,alignment:f,className:F["bar-chart__legend"],shape:j,ref:Me,chartId:O}),Oe]})})},re=o=>(0,c.useContext)(z.m)?(0,i.jsx)(ue,{...o}):(0,i.jsx)(z.S,{children:(0,i.jsx)(ue,{...o})});re.displayName="BarChart";const He=(0,k.E)(re,{Legend:K.s}),we=(0,k.E)((0,ye.F)(re),{Legend:K.s})}),"../charts/src/stories/legend-config.tsx":((R,_,e)=>{e.d(_,{r:()=>v});const v={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'}};try{v.displayName="legendArgTypes",v.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:v.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((R,_,e)=>{e.d(_,{A:()=>B});function v(r){var l,a,p="";if(typeof r=="string"||typeof r=="number")p+=r;else if(typeof r=="object")if(Array.isArray(r)){var T=r.length;for(l=0;l<T;l++)r[l]&&(a=v(r[l]))&&(p&&(p+=" "),p+=a)}else for(a in r)r[a]&&(p&&(p+=" "),p+=a);return p}function D(){for(var r,l,a=0,p="",T=arguments.length;a<T;a++)(r=arguments[a])&&(l=v(r))&&(p&&(p+=" "),p+=l);return p}const B=D}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":((R,_,e)=>{e.d(_,{A:()=>a});var v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),D=e.n(v),B=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(B),l=r()(D());l.push([R.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),l.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const a=l}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(R=>{var _=function(s){return e(s)&&!v(s)};function e(t){return!!t&&typeof t=="object"}function v(t){var s=Object.prototype.toString.call(t);return s==="[object RegExp]"||s==="[object Date]"||r(t)}var D=typeof Symbol=="function"&&Symbol.for,B=D?Symbol.for("react.element"):60103;function r(t){return t.$$typeof===B}function l(t){return Array.isArray(t)?[]:{}}function a(t,s){return s.clone!==!1&&s.isMergeableObject(t)?b(l(t),t,s):t}function p(t,s,n){return t.concat(s).map(function(g){return a(g,n)})}function T(t,s){if(!s.customMerge)return b;var n=s.customMerge(t);return typeof n=="function"?n:b}function h(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(s){return Object.propertyIsEnumerable.call(t,s)}):[]}function C(t){return Object.keys(t).concat(h(t))}function S(t,s){try{return s in t}catch{return!1}}function c(t,s){return S(t,s)&&!(Object.hasOwnProperty.call(t,s)&&Object.propertyIsEnumerable.call(t,s))}function M(t,s,n){var g={};return n.isMergeableObject(t)&&C(t).forEach(function(u){g[u]=a(t[u],n)}),C(s).forEach(function(u){c(t,u)||(S(t,u)&&n.isMergeableObject(s[u])?g[u]=T(u,n)(t[u],s[u],n):g[u]=a(s[u],n))}),g}function b(t,s,n){n=n||{},n.arrayMerge=n.arrayMerge||p,n.isMergeableObject=n.isMergeableObject||_,n.cloneUnlessOtherwiseSpecified=a;var g=Array.isArray(s),u=Array.isArray(t),z=g===u;return z?g?n.arrayMerge(t,s,n):M(t,s,n):a(s,n)}b.all=function(s,n){if(!Array.isArray(s))throw new Error("first argument should be an array");return s.reduce(function(g,u){return b(g,u,n)},{})};var w=b;R.exports=w})}]);
