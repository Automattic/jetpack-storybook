"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7460],{"../charts/src/charts/bar-chart/stories/index.stories.tsx"(O,u,c){c.r(u),c.d(u,{Animation:()=>w,AspectRatio:()=>b,CustomLegendPositioning:()=>s,Default:()=>d,ErrorStates:()=>t,FixedDimensions:()=>m,HorizontalBarChart:()=>S,LabelOverflowEllipsis:()=>E,SingleSeries:()=>f,SmartFormatting:()=>a,TimeSeries:()=>x,WithCompositionLegend:()=>o,WithInteractiveLegend:()=>n,WithPatterns:()=>g,ZeroValueComparison:()=>T,__namedExportsOrder:()=>B,default:()=>y});var p=c("../charts/src/stories/chart-decorator.tsx"),v=c("../charts/src/stories/theme-config.tsx"),_=c("../charts/src/stories/legend-config.tsx"),r=c("../charts/src/stories/sample-data/index.ts"),i=c("../charts/src/charts/bar-chart/bar-chart.tsx"),e=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y={title:"JS Packages/Charts Library/Charts/Bar Chart",component:i.A,parameters:{layout:"centered"},decorators:[p.OI],argTypes:{...p.xo,...v.jW,..._.r,orientation:{control:{type:"radio"},options:["vertical","horizontal"],description:"Bar orientation",table:{category:"Visual Style"}},gridVisibility:{control:{type:"radio"},options:["none","x","y","both"],description:"Grid line visibility",table:{category:"Visual Style"}},seriesCount:{control:{type:"radio"},options:["single","multiple","many"],description:"Number of data series",table:{category:"Data"}},withPatterns:{control:"boolean",description:"Use patterns for bars",table:{category:"Visual Style"}}},render:h=>{const{seriesCount:D,...L}=h;let j=L.data;return D==="single"?j=[r._E[0]]:D==="multiple"?j=[r._E[0],r._E[1],r._E[2]]:D==="many"&&(j=r._E),(0,e.jsx)(i.A,{...L,data:j})}},d={args:{...v.In,withTooltips:!0,data:[r._E[0],r._E[1],r._E[2]],gridVisibility:"x",maxWidth:1200,resizeDebounceTime:300}},m={args:{...d.args,width:600,height:300}},b={args:{...d.args,aspectRatio:.3}},f={args:{...d.args,data:[r._E[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},x={args:{...d.args,data:[{...r.Sb[0],label:"Data with dateString and date",data:[...r.Sb[0].data,{dateString:"2024-01-31",value:2230},{dateString:"2024-02-01",value:2580},{date:new Date("2024-02-02 00:00:00"),value:3500},{dateString:"2024-02-03 00:00:00",value:1500},{dateString:"2024-02-04",value:2500},{dateString:"2024-02-05 00:00",value:3e3}]}],options:{axis:{x:{tickFormat:h=>new Date(h).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},g={args:{...d.args,withPatterns:!0,data:d.args.data.map(h=>({...h,data:h.data.filter(D=>parseInt(D.label)>=2016)}))}},w={args:{...d.args,animation:!0}},t={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Empty Data"}),(0,e.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,e.jsx)(i.A,{data:[]})})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Invalid Data"}),(0,e.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,e.jsx)(i.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};t.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const a={args:{withTooltips:!0,data:r.Gv,gridVisibility:"x"}};a.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const n={args:{...d.args,showLegend:!0,legendInteractive:!0,chartId:"bar-chart-with-interactive-legend"},parameters:{docs:{description:{story:"Bar chart with interactive legend. Click on legend items to toggle series visibility. When all series are hidden, a message will be displayed prompting you to click legend items to show data again."}}}},o={render:h=>(0,e.jsx)(i.A,{data:h.data||[r._E[0],r._E[1],r._E[2]],withTooltips:!0,gridVisibility:"x",children:(0,e.jsx)(i.A.Legend,{orientation:h.legendOrientation||"horizontal",alignment:h.legendAlignment||"center",position:h.legendPosition||"bottom",labelStyles:{maxWidth:h.legendMaxWidth,textOverflow:h.legendTextOverflow||"wrap"}})}),argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{docs:{description:{story:"Demonstrates using the composition API with `<BarChart.Legend />` as a child component. This provides the same functionality as the `showLegend` prop but allows for more flexible composition patterns."}}}},s={args:{withTooltips:!0,data:r._E.slice(0,3),gridVisibility:"x",maxWidth:1200,resizeDebounceTime:300,containerHeight:"400px",showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top"},parameters:{docs:{description:{story:"Bar chart with top-left positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities."}}}},S={args:{...d.args,data:[r._E[0],r._E[1],r._E[2]],orientation:"horizontal",gridVisibility:"none"}},C=[{group:"United States",label:"United States",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:3}]},{group:"Great Britain",label:"Great Britain",data:[{label:"1896",value:1},{label:"1900",value:0},{label:"1904",value:1},{label:"1908",value:10},{label:"1912",value:9}]},{group:"Japan",label:"Japan",data:[{label:"1896",value:2},{label:"1900",value:1},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:2}]}],T={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"40px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Zero Value Display: Disabled (Default)"}),(0,e.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are not visually displayed. Bars with zero values have no height."}),(0,e.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,e.jsx)(i.A,{data:C,showZeroValues:!1,withTooltips:!0,gridVisibility:"x"})})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Zero Value Display: Enabled"}),(0,e.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are visually displayed with minimum height bars. The tooltip still shows the actual value of 0, while the bar has a small visual height for better UX."}),(0,e.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,e.jsx)(i.A,{data:C,showZeroValues:!0,withTooltips:!0,gridVisibility:"x"})})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Small Chart Height (100px)"}),(0,e.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero-value bars remain visible even in small charts. The minimum pixel height ensures bars are at least 2 pixels tall regardless of chart dimensions."}),(0,e.jsx)("div",{style:{width:"600px",height:"100px",border:"1px solid #e0e0e0"},children:(0,e.jsx)(i.A,{data:C,showZeroValues:!0,withTooltips:!0,gridVisibility:"x"})})]})]}),args:{containerHeight:"1600px"},parameters:{docs:{description:{story:"Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights. Zero-value bars remain visible even in small chart heights."}}}},A=[{group:"sales",label:"Sales by Channel",data:[{label:"Organic Search Traffic",value:12500},{label:"Paid Advertising Campaign",value:8750},{label:"Social Media Marketing",value:6250},{label:"Email Newsletter Subscribers",value:4375},{label:"Direct Website Visitors",value:3125},{label:"Affiliate Partner Referrals",value:2500}]}],E={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"40px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Without labelOverflow (Default - Labels Overlap)"}),(0,e.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Default behavior: long labels overlap and become unreadable at narrow widths."}),(0,e.jsx)("div",{style:{width:"350px",height:"250px",border:"1px solid #e0e0e0"},children:(0,e.jsx)(i.A,{data:A,withTooltips:!0,gridVisibility:"x"})})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"With labelOverflow: 'ellipsis' (Labels Truncated)"}),(0,e.jsxs)("p",{style:{marginBottom:"20px",color:"#666"},children:["With ",(0,e.jsx)("code",{children:"labelOverflow: 'ellipsis'"}),", labels are truncated to fit the available bandwidth. ",(0,e.jsx)("strong",{children:"Hover over a label to see the full text."})]}),(0,e.jsx)("div",{style:{width:"350px",height:"250px",border:"1px solid #e0e0e0"},children:(0,e.jsx)(i.A,{data:A,withTooltips:!0,gridVisibility:"x",options:{axis:{x:{labelOverflow:"ellipsis"}}}})})]})]}),parameters:{docs:{description:{story:"Demonstrates the `labelOverflow: 'ellipsis'` option that truncates long axis labels to fit the available bandwidth. The full label text is shown on hover via a native tooltip. This is useful for narrow widget contexts where space is limited."}}}},B=["Default","FixedDimensions","AspectRatio","SingleSeries","TimeSeries","WithPatterns","Animation","ErrorStates","SmartFormatting","WithInteractiveLegend","WithCompositionLegend","CustomLegendPositioning","HorizontalBarChart","ZeroValueComparison","LabelOverflowEllipsis"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    withTooltips: true,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    // limit to 3 series for better readability
    gridVisibility: 'x',
    maxWidth: 1200,
    resizeDebounceTime: 300
  }
}`,...d.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 600,
    height: 300
  }
}`,...m.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.3
  }
}`,...b.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...w.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    showLegend: true,
    legendInteractive: true,
    chartId: 'bar-chart-with-interactive-legend'
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with interactive legend. Click on legend items to toggle series visibility. When all series are hidden, a message will be displayed prompting you to click legend items to show data again.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <BarChart data={args.data || [medalCountsData[0], medalCountsData[1], medalCountsData[2]]} withTooltips={true} gridVisibility="x">
            <BarChart.Legend orientation={args.legendOrientation || 'horizontal'} alignment={args.legendAlignment || 'center'} position={args.legendPosition || 'bottom'} labelStyles={{
      maxWidth: args.legendMaxWidth,
      textOverflow: args.legendTextOverflow || 'wrap'
    }} />
        </BarChart>,
  argTypes: {
    legendInteractive: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates using the composition API with \`<BarChart.Legend />\` as a child component. This provides the same functionality as the \`showLegend\` prop but allows for more flexible composition patterns.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: medalCountsData.slice(0, 3),
    // Use first 3 series for cleaner legend
    gridVisibility: 'x',
    maxWidth: 1200,
    resizeDebounceTime: 300,
    containerHeight: '400px',
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
}`,...s.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,...S.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}}},"../charts/src/stories/legend-config.tsx"(O,u,c){c.d(u,{r:()=>p});const p={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."}};try{p.displayName="legendArgTypes",p.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:p.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"(O,u,c){c.d(u,{A:()=>_});function p(r){var i,e,l="";if(typeof r=="string"||typeof r=="number")l+=r;else if(typeof r=="object")if(Array.isArray(r)){var y=r.length;for(i=0;i<y;i++)r[i]&&(e=p(r[i]))&&(l&&(l+=" "),l+=e)}else for(e in r)r[e]&&(l&&(l+=" "),l+=e);return l}function v(){for(var r,i,e=0,l="",y=arguments.length;e<y;e++)(r=arguments[e])&&(i=p(r))&&(l&&(l+=" "),l+=i);return l}const _=v},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"(O){var u=function(a){return c(a)&&!p(a)};function c(t){return!!t&&typeof t=="object"}function p(t){var a=Object.prototype.toString.call(t);return a==="[object RegExp]"||a==="[object Date]"||r(t)}var v=typeof Symbol=="function"&&Symbol.for,_=v?Symbol.for("react.element"):60103;function r(t){return t.$$typeof===_}function i(t){return Array.isArray(t)?[]:{}}function e(t,a){return a.clone!==!1&&a.isMergeableObject(t)?g(i(t),t,a):t}function l(t,a,n){return t.concat(a).map(function(o){return e(o,n)})}function y(t,a){if(!a.customMerge)return g;var n=a.customMerge(t);return typeof n=="function"?n:g}function d(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(a){return Object.propertyIsEnumerable.call(t,a)}):[]}function m(t){return Object.keys(t).concat(d(t))}function b(t,a){try{return a in t}catch{return!1}}function f(t,a){return b(t,a)&&!(Object.hasOwnProperty.call(t,a)&&Object.propertyIsEnumerable.call(t,a))}function x(t,a,n){var o={};return n.isMergeableObject(t)&&m(t).forEach(function(s){o[s]=e(t[s],n)}),m(a).forEach(function(s){f(t,s)||(b(t,s)&&n.isMergeableObject(a[s])?o[s]=y(s,n)(t[s],a[s],n):o[s]=e(a[s],n))}),o}function g(t,a,n){n=n||{},n.arrayMerge=n.arrayMerge||l,n.isMergeableObject=n.isMergeableObject||u,n.cloneUnlessOtherwiseSpecified=e;var o=Array.isArray(a),s=Array.isArray(t),S=o===s;return S?o?n.arrayMerge(t,a,n):x(t,a,n):e(a,n)}g.all=function(a,n){if(!Array.isArray(a))throw new Error("first argument should be an array");return a.reduce(function(o,s){return g(o,s,n)},{})};var w=g;O.exports=w}}]);
