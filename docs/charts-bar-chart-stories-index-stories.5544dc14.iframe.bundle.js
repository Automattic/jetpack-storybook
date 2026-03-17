"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7460],{"../charts/src/charts/bar-chart/stories/index.stories.tsx"(O,_,g){g.r(_),g.d(_,{Animation:()=>d,AspectRatio:()=>p,Default:()=>s,ErrorStates:()=>t,FixedDimensions:()=>h,HorizontalBarChart:()=>o,LabelOverflowEllipsis:()=>C,SingleSeries:()=>v,SmartFormatting:()=>a,TimeSeries:()=>x,WithCompositionLegend:()=>c,WithLegend:()=>n,WithPatterns:()=>u,ZeroValueComparison:()=>j,__namedExportsOrder:()=>L,default:()=>y});var m=g("../charts/src/stories/chart-decorator.tsx"),b=g("../charts/src/stories/theme-config.tsx"),f=g("../charts/src/stories/legend-config.tsx"),r=g("../charts/src/stories/sample-data/index.ts"),i=g("../charts/src/charts/bar-chart/bar-chart.tsx"),e=g("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y={title:"JS Packages/Charts Library/Charts/Bar Chart",component:i.A,parameters:{layout:"centered"},decorators:[m.OI],argTypes:{...m.xo,...b.jW,...f.r,orientation:{control:{type:"radio"},options:["vertical","horizontal"],description:"Bar orientation",table:{category:"Visual Style"}},gridVisibility:{control:{type:"radio"},options:["none","x","y","both"],description:"Grid line visibility",table:{category:"Visual Style"}},seriesCount:{control:{type:"radio"},options:["single","multiple","many"],description:"Number of data series",table:{category:"Data"}},withPatterns:{control:"boolean",description:"Use patterns for bars",table:{category:"Visual Style"}}},render:w=>{const{seriesCount:S,...A}=w,B=(0,f.D)(w);let E=A.data;return S==="single"?E=[r._E[0]]:S==="multiple"?E=[r._E[0],r._E[1],r._E[2]]:S==="many"&&(E=r._E),(0,e.jsx)(i.A,{...A,legend:B,data:E})}},s={args:{...b.In,withTooltips:!0,data:[r._E[0],r._E[1],r._E[2]],gridVisibility:"x",maxWidth:1200,resizeDebounceTime:300}},h={args:{...s.args,width:600,height:300}},p={args:{...s.args,aspectRatio:.3}},v={args:{...s.args,data:[r._E[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},x={args:{...s.args,data:[{...r.Sb[0],label:"Data with dateString and date",data:[...r.Sb[0].data,{dateString:"2024-01-31",value:2230},{dateString:"2024-02-01",value:2580},{date:new Date("2024-02-02 00:00:00"),value:3500},{dateString:"2024-02-03 00:00:00",value:1500},{dateString:"2024-02-04",value:2500},{dateString:"2024-02-05 00:00",value:3e3}]}],options:{axis:{x:{tickFormat:w=>new Date(w).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},u={args:{...s.args,withPatterns:!0,data:s.args.data.map(w=>({...w,data:w.data.filter(S=>parseInt(S.label)>=2016)}))}},d={args:{...s.args,animation:!0}},t={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Empty Data"}),(0,e.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,e.jsx)(i.A,{data:[]})})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Invalid Data"}),(0,e.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,e.jsx)(i.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};t.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const a={args:{withTooltips:!0,data:r.Gv,gridVisibility:"x"}};a.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const n={args:{...s.args,showLegend:!0},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},c={render:w=>{const S=(0,f.D)(w);return(0,e.jsx)(i.A,{...s.args,...w,legend:{interactive:S?.interactive},chartId:"composition-bar-chart",children:(0,e.jsx)(i.A.Legend,{...S})})},args:{...s.args},parameters:{docs:{description:{story:"Composition API using `<BarChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},o={args:{...s.args,data:[r._E[0],r._E[1],r._E[2]],orientation:"horizontal",gridVisibility:"none"}},D=[{group:"United States",label:"United States",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:3}]},{group:"Great Britain",label:"Great Britain",data:[{label:"1896",value:1},{label:"1900",value:0},{label:"1904",value:1},{label:"1908",value:10},{label:"1912",value:9}]},{group:"Japan",label:"Japan",data:[{label:"1896",value:2},{label:"1900",value:1},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:2}]}],j={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"40px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Zero Value Display: Disabled (Default)"}),(0,e.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are not visually displayed. Bars with zero values have no height."}),(0,e.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,e.jsx)(i.A,{data:D,showZeroValues:!1,withTooltips:!0,gridVisibility:"x"})})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Zero Value Display: Enabled"}),(0,e.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are visually displayed with minimum height bars. The tooltip still shows the actual value of 0, while the bar has a small visual height for better UX."}),(0,e.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,e.jsx)(i.A,{data:D,showZeroValues:!0,withTooltips:!0,gridVisibility:"x"})})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Small Chart Height (100px)"}),(0,e.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero-value bars remain visible even in small charts. The minimum pixel height ensures bars are at least 2 pixels tall regardless of chart dimensions."}),(0,e.jsx)("div",{style:{width:"600px",height:"100px",border:"1px solid #e0e0e0"},children:(0,e.jsx)(i.A,{data:D,showZeroValues:!0,withTooltips:!0,gridVisibility:"x"})})]})]}),args:{containerHeight:"1600px"},parameters:{docs:{description:{story:"Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights. Zero-value bars remain visible even in small chart heights."}}}},T=[{group:"sales",label:"Sales by Channel",data:[{label:"Organic Search Traffic",value:12500},{label:"Paid Advertising Campaign",value:8750},{label:"Social Media Marketing",value:6250},{label:"Email Newsletter Subscribers",value:4375},{label:"Direct Website Visitors",value:3125},{label:"Affiliate Partner Referrals",value:2500}]}],C={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"40px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Without labelOverflow (Default - Labels Overlap)"}),(0,e.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Default behavior: long labels overlap and become unreadable at narrow widths."}),(0,e.jsx)("div",{style:{width:"350px",height:"250px",border:"1px solid #e0e0e0"},children:(0,e.jsx)(i.A,{data:T,withTooltips:!0,gridVisibility:"x"})})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"With labelOverflow: 'ellipsis' (Labels Truncated)"}),(0,e.jsxs)("p",{style:{marginBottom:"20px",color:"#666"},children:["With ",(0,e.jsx)("code",{children:"labelOverflow: 'ellipsis'"}),", labels are truncated to fit the available bandwidth. ",(0,e.jsx)("strong",{children:"Hover over a label to see the full text."})]}),(0,e.jsx)("div",{style:{width:"350px",height:"250px",border:"1px solid #e0e0e0"},children:(0,e.jsx)(i.A,{data:T,withTooltips:!0,gridVisibility:"x",options:{axis:{x:{labelOverflow:"ellipsis"}}}})})]})]}),parameters:{docs:{description:{story:"Demonstrates the `labelOverflow: 'ellipsis'` option that truncates long axis labels to fit the available bandwidth. The full label text is shown on hover via a native tooltip. This is useful for narrow widget contexts where space is limited."}}}},L=["Default","FixedDimensions","AspectRatio","SingleSeries","TimeSeries","WithPatterns","Animation","ErrorStates","SmartFormatting","WithLegend","WithCompositionLegend","HorizontalBarChart","ZeroValueComparison","LabelOverflowEllipsis"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    withTooltips: true,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    // limit to 3 series for better readability
    gridVisibility: 'x',
    maxWidth: 1200,
    resizeDebounceTime: 300
  }
}`,...s.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 600,
    height: 300
  }
}`,...h.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.3
  }
}`,...p.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...d.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    gridVisibility: 'x'
  }
}`,...a.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Props-based legend using \`showLegend\` and the \`legend\` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig(args);
    return <BarChart {...Default.args} {...args} legend={{
      interactive: legend?.interactive
    }} chartId="composition-bar-chart">
                <BarChart.Legend {...legend} />
            </BarChart>;
  },
  args: {
    ...Default.args
  },
  parameters: {
    docs: {
      description: {
        story: 'Composition API using \`<BarChart.Legend />\` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,...o.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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

            <div>
                <h3>Small Chart Height (100px)</h3>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    Zero-value bars remain visible even in small charts. The minimum pixel height ensures bars
                    are at least 2 pixels tall regardless of chart dimensions.
                </p>
                <div style={{
        width: '600px',
        height: '100px',
        border: '1px solid #e0e0e0'
      }}>
                    <BarChart data={dataWithZeroValues} showZeroValues={true} withTooltips={true} gridVisibility="x" />
                </div>
            </div>
        </div>,
  args: {
    containerHeight: '1600px' // Extra height to demonstrate zero-value bars in small chart height scenario
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights. Zero-value bars remain visible even in small chart heights.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '40px'
  }}>
            <div>
                <h3>Without labelOverflow (Default - Labels Overlap)</h3>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    Default behavior: long labels overlap and become unreadable at narrow widths.
                </p>
                <div style={{
        width: '350px',
        height: '250px',
        border: '1px solid #e0e0e0'
      }}>
                    <BarChart data={longLabelData} withTooltips={true} gridVisibility="x" />
                </div>
            </div>
            <div>
                <h3>With labelOverflow: &apos;ellipsis&apos; (Labels Truncated)</h3>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    With <code>labelOverflow: &apos;ellipsis&apos;</code>, labels are truncated to fit the
                    available bandwidth. <strong>Hover over a label to see the full text.</strong>
                </p>
                <div style={{
        width: '350px',
        height: '250px',
        border: '1px solid #e0e0e0'
      }}>
                    <BarChart data={longLabelData} withTooltips={true} gridVisibility="x" options={{
          axis: {
            x: {
              labelOverflow: 'ellipsis'
            }
          }
        }} />
                </div>
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: "Demonstrates the \`labelOverflow: 'ellipsis'\` option that truncates long axis labels to fit the available bandwidth. The full label text is shown on hover via a native tooltip. This is useful for narrow widget contexts where space is limited."
      }
    }
  }
}`,...C.parameters?.docs?.source}}}},"../charts/src/stories/legend-config.tsx"(O,_,g){g.d(_,{D:()=>b,r:()=>m});const m={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for individual legend items. This allows consumers to customize legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."},legendShapeStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:"{ width?: number; height?: number; margin?: string | number }"}},description:"Styles for legend shapes (width, height, margin)."},legendItemStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:'{ margin?: string | number; flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" }'}},description:"Styles for each legend item (margin, flexDirection)."}};function b(f){const{legendPosition:r,legendAlignment:i,legendOrientation:e,legendShape:l,legendInteractive:y,legendItemClassName:s,legendMaxWidth:h,legendTextOverflow:p,legendShapeStyles:v,legendItemStyles:x}=f;if(!(r!==void 0||i!==void 0||e!==void 0||l!==void 0||y!==void 0||s!==void 0||h!==void 0||p!==void 0||v!==void 0||x!==void 0))return;const d={};return e!==void 0&&(d.orientation=e),r!==void 0&&(d.position=r),i!==void 0&&(d.alignment=i),l!==void 0&&(d.shape=l),y!==void 0&&(d.interactive=y),s!==void 0&&(d.itemClassName=s),(h!==void 0||p!==void 0)&&(d.labelStyles={},h!==void 0&&(d.labelStyles.maxWidth=h),p!==void 0&&(d.labelStyles.textOverflow=p)),v!==void 0&&(d.shapeStyles=v),x!==void 0&&(d.itemStyles=x),d}try{b.displayName="extractLegendConfig",b.__docgenInfo={description:"Extracts flat legend story args into a `ChartLegendConfig` object.\nUse in story render functions to bridge flat Storybook controls to the nested `legend` prop.",displayName:"extractLegendConfig",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#extractLegendConfig"]={docgenInfo:b.__docgenInfo,name:"extractLegendConfig",path:"../charts/src/stories/legend-config.tsx#extractLegendConfig"})}catch{}try{m.displayName="legendArgTypes",m.__docgenInfo={description:"Shared legend configuration for chart stories.\nProvides consistent argTypes and decorators across all chart legend stories.\n\nThese use flat keys for reliable Storybook controls. Use `extractLegendConfig`\nin render functions to map them to the nested `legend` prop.",displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:m.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"(O,_,g){g.d(_,{A:()=>f});function m(r){var i,e,l="";if(typeof r=="string"||typeof r=="number")l+=r;else if(typeof r=="object")if(Array.isArray(r)){var y=r.length;for(i=0;i<y;i++)r[i]&&(e=m(r[i]))&&(l&&(l+=" "),l+=e)}else for(e in r)r[e]&&(l&&(l+=" "),l+=e);return l}function b(){for(var r,i,e=0,l="",y=arguments.length;e<y;e++)(r=arguments[e])&&(i=m(r))&&(l&&(l+=" "),l+=i);return l}const f=b},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"(O){var _=function(a){return g(a)&&!m(a)};function g(t){return!!t&&typeof t=="object"}function m(t){var a=Object.prototype.toString.call(t);return a==="[object RegExp]"||a==="[object Date]"||r(t)}var b=typeof Symbol=="function"&&Symbol.for,f=b?Symbol.for("react.element"):60103;function r(t){return t.$$typeof===f}function i(t){return Array.isArray(t)?[]:{}}function e(t,a){return a.clone!==!1&&a.isMergeableObject(t)?u(i(t),t,a):t}function l(t,a,n){return t.concat(a).map(function(c){return e(c,n)})}function y(t,a){if(!a.customMerge)return u;var n=a.customMerge(t);return typeof n=="function"?n:u}function s(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(a){return Object.propertyIsEnumerable.call(t,a)}):[]}function h(t){return Object.keys(t).concat(s(t))}function p(t,a){try{return a in t}catch{return!1}}function v(t,a){return p(t,a)&&!(Object.hasOwnProperty.call(t,a)&&Object.propertyIsEnumerable.call(t,a))}function x(t,a,n){var c={};return n.isMergeableObject(t)&&h(t).forEach(function(o){c[o]=e(t[o],n)}),h(a).forEach(function(o){v(t,o)||(p(t,o)&&n.isMergeableObject(a[o])?c[o]=y(o,n)(t[o],a[o],n):c[o]=e(a[o],n))}),c}function u(t,a,n){n=n||{},n.arrayMerge=n.arrayMerge||l,n.isMergeableObject=n.isMergeableObject||_,n.cloneUnlessOtherwiseSpecified=e;var c=Array.isArray(a),o=Array.isArray(t),D=c===o;return D?c?n.arrayMerge(t,a,n):x(t,a,n):e(a,n)}u.all=function(a,n){if(!Array.isArray(a))throw new Error("first argument should be an array");return a.reduce(function(c,o){return u(c,o,n)},{})};var d=u;O.exports=d}}]);
