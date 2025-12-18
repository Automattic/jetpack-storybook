"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7460],{"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((C,u,c)=>{c.d(u,{A:()=>D});function p(r){var s,a,l="";if(typeof r=="string"||typeof r=="number")l+=r;else if(typeof r=="object")if(Array.isArray(r)){var v=r.length;for(s=0;s<v;s++)r[s]&&(a=p(r[s]))&&(l&&(l+=" "),l+=a)}else for(a in r)r[a]&&(l&&(l+=" "),l+=a);return l}function b(){for(var r,s,a=0,l="",v=arguments.length;a<v;a++)(r=arguments[a])&&(s=p(r))&&(l&&(l+=" "),l+=s);return l}const D=b}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(C=>{var u=function(t){return c(t)&&!p(t)};function c(e){return!!e&&typeof e=="object"}function p(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||r(e)}var b=typeof Symbol=="function"&&Symbol.for,D=b?Symbol.for("react.element"):60103;function r(e){return e.$$typeof===D}function s(e){return Array.isArray(e)?[]:{}}function a(e,t){return t.clone!==!1&&t.isMergeableObject(e)?h(s(e),e,t):e}function l(e,t,n){return e.concat(t).map(function(o){return a(o,n)})}function v(e,t){if(!t.customMerge)return h;var n=t.customMerge(e);return typeof n=="function"?n:h}function d(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function m(e){return Object.keys(e).concat(d(e))}function y(e,t){try{return t in e}catch{return!1}}function f(e,t){return y(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function x(e,t,n){var o={};return n.isMergeableObject(e)&&m(e).forEach(function(i){o[i]=a(e[i],n)}),m(t).forEach(function(i){f(e,i)||(y(e,i)&&n.isMergeableObject(t[i])?o[i]=v(i,n)(e[i],t[i],n):o[i]=a(t[i],n))}),o}function h(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||l,n.isMergeableObject=n.isMergeableObject||u,n.cloneUnlessOtherwiseSpecified=a;var o=Array.isArray(t),i=Array.isArray(e),S=o===i;return S?o?n.arrayMerge(e,t,n):x(e,t,n):a(t,n)}h.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(o,i){return h(o,i,n)},{})};var w=h;C.exports=w}),"../charts/src/charts/bar-chart/stories/index.stories.tsx":((C,u,c)=>{c.r(u),c.d(u,{Animation:()=>w,CustomLegendPositioning:()=>i,Default:()=>d,ErrorStates:()=>e,FixedDimensions:()=>x,HorizontalBarChart:()=>S,ManyDataSeries:()=>f,SingleSeries:()=>m,SmartFormatting:()=>t,TimeSeries:()=>y,WithCompositionLegend:()=>o,WithInteractiveLegend:()=>n,WithPatterns:()=>h,ZeroValueComparison:()=>E,__namedExportsOrder:()=>j,default:()=>v});var p=c("../charts/src/stories/chart-decorator.tsx"),b=c("../charts/src/stories/theme-config.tsx"),D=c("../charts/src/stories/legend-config.tsx"),r=c("../charts/src/stories/sample-data/index.ts"),s=c("../charts/src/charts/bar-chart/bar-chart.tsx"),a=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const v={title:"JS Packages/Charts Library/Charts/Bar Chart",component:s.A,parameters:{layout:"centered"},decorators:[p.OI],argTypes:{...p.xo,...b.jW,...D.r,orientation:{control:{type:"radio"},options:["vertical","horizontal"],description:"Bar orientation",table:{category:"Visual Style"}},gridVisibility:{control:{type:"radio"},options:["none","x","y","both"],description:"Grid line visibility",table:{category:"Visual Style"}},seriesCount:{control:{type:"radio"},options:["single","multiple","many"],description:"Number of data series",table:{category:"Data"}},withPatterns:{control:"boolean",description:"Use patterns for bars",table:{category:"Visual Style"}}},render:g=>{const{seriesCount:_,...A}=g;let T=A.data;return _==="single"?T=[r._E[0]]:_==="multiple"?T=[r._E[0],r._E[1],r._E[2]]:_==="many"&&(T=r._E),(0,a.jsx)(s.A,{...A,data:T})}},d={args:{...b.In,withTooltips:!0,data:[r._E[0],r._E[1],r._E[2]],gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300}},m={args:{...d.args,data:[r._E[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},y={args:{...d.args,data:[{...r.Sb[0],label:"Data with dateString and date",data:[...r.Sb[0].data,{dateString:"2024-01-31",value:2230},{dateString:"2024-02-01",value:2580},{date:new Date("2024-02-02 00:00:00"),value:3500},{dateString:"2024-02-03 00:00:00",value:1500},{dateString:"2024-02-04",value:2500},{dateString:"2024-02-05 00:00",value:3e3}]}],options:{axis:{x:{tickFormat:g=>new Date(g).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},f={args:{...d.args,data:r._E},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},x={args:{...d.args,width:800,height:400,data:[r._E[0],r._E[1],r._E[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},h={args:{...d.args,withPatterns:!0,data:d.args.data.map(g=>({...g,data:g.data.filter(_=>parseInt(_.label)>=2016)}))}},w={args:{...d.args,animation:!0}},e={render:()=>(0,a.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Empty Data"}),(0,a.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,a.jsx)(s.A,{data:[]})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Invalid Data"}),(0,a.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,a.jsx)(s.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};e.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const t={args:{withTooltips:!0,data:r.Gv,gridVisibility:"x"}};t.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const n={args:{...d.args,showLegend:!0,legendInteractive:!0,chartId:"bar-chart-with-interactive-legend"},parameters:{docs:{description:{story:"Bar chart with interactive legend. Click on legend items to toggle series visibility. When all series are hidden, a message will be displayed prompting you to click legend items to show data again."}}}},o={render:g=>(0,a.jsx)("div",{style:{width:"800px"},children:(0,a.jsx)(s.A,{data:g.data||[r._E[0],r._E[1],r._E[2]],withTooltips:!0,gridVisibility:"x",maxWidth:1200,aspectRatio:.5,children:(0,a.jsx)(s.A.Legend,{orientation:g.legendOrientation||"horizontal",alignment:g.legendAlignment||"center",position:g.legendPosition||"bottom",maxWidth:g.legendMaxWidth,textOverflow:g.legendTextOverflow||"wrap"})})}),argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{docs:{description:{story:"Demonstrates using the composition API with `<BarChart.Legend />` as a child component. This provides the same functionality as the `showLegend` prop but allows for more flexible composition patterns."}}}},i={args:{withTooltips:!0,data:r._E.slice(0,3),gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top"},parameters:{docs:{description:{story:"Bar chart with top-left positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities."}}}},S={args:{...d.args,data:[r._E[0],r._E[1],r._E[2]],orientation:"horizontal",gridVisibility:"none"}},O=[{group:"United States",label:"United States",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:3}]},{group:"Great Britain",label:"Great Britain",data:[{label:"1896",value:1},{label:"1900",value:0},{label:"1904",value:1},{label:"1908",value:10},{label:"1912",value:9}]},{group:"Japan",label:"Japan",data:[{label:"1896",value:2},{label:"1900",value:1},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:2}]}],E={render:()=>(0,a.jsxs)("div",{style:{display:"grid",gap:"40px"},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Zero Value Display: Disabled (Default)"}),(0,a.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are not visually displayed. Bars with zero values have no height."}),(0,a.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,a.jsx)(s.A,{data:O,showZeroValues:!1,withTooltips:!0,gridVisibility:"x"})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Zero Value Display: Enabled"}),(0,a.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are visually displayed with minimum height bars. The tooltip still shows the actual value of 0, while the bar has a small visual height for better UX."}),(0,a.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,a.jsx)(s.A,{data:O,showZeroValues:!0,withTooltips:!0,gridVisibility:"x"})})]})]}),parameters:{docs:{description:{story:"Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights."}}}},j=["Default","SingleSeries","TimeSeries","ManyDataSeries","FixedDimensions","WithPatterns","Animation","ErrorStates","SmartFormatting","WithInteractiveLegend","WithCompositionLegend","CustomLegendPositioning","HorizontalBarChart","ZeroValueComparison"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    withTooltips: true,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    // limit to 3 series for better readability
    gridVisibility: 'x',
    maxWidth: 1200,
    aspectRatio: 0.5,
    resizeDebounceTime: 300
  }
}`,...d.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...w.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    gridVisibility: 'x'
  }
}`,...t.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
  render: args => <div style={{
    width: '800px'
  }}>
            <BarChart data={args.data || [medalCountsData[0], medalCountsData[1], medalCountsData[2]]} withTooltips={true} gridVisibility="x" maxWidth={1200} aspectRatio={0.5}>
                <BarChart.Legend orientation={args.legendOrientation || 'horizontal'} alignment={args.legendAlignment || 'center'} position={args.legendPosition || 'bottom'} maxWidth={args.legendMaxWidth} textOverflow={args.legendTextOverflow || 'wrap'} />
            </BarChart>
        </div>,
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
}`,...o.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,...S.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}}}),"../charts/src/stories/legend-config.tsx":((C,u,c)=>{c.d(u,{r:()=>p});const p={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."}};try{p.displayName="legendArgTypes",p.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:p.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}})}]);
