import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,t as r}from"./with-chart-theme-BqpFpS3I.js";import{n as i,t as a}from"./semi-circle-chart-BwrnTbc7.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{r(),i(),o=t(),s={title:`Packages/Premium Analytics/Widgets Toolkit/Components/SemiCircleChart`,component:a,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[n]},c=[{color:`#3858E9`},{color:`#66BDFF`},{color:`#A77EFF`}],l=[{color:`#3858E9`},{color:`#66BDFF`},{color:`#A77EFF`},{color:`#F2D675`},{color:`#7BDCB5`}],u=[{label:`Mobile`,value:4500},{label:`Desktop`,value:2500},{label:`Tablet`,value:1e3}],d=[{label:`Mobile`,value:4500,displayValue:`4.5K`},{label:`Desktop`,value:2500,displayValue:`2.5K`},{label:`Tablet`,value:1e3,displayValue:`1K`}],f=[{label:`Mobile`,value:4500,displayValue:`4.5K`,comparison:4200},{label:`Desktop`,value:2500,displayValue:`2.5K`,comparison:2100},{label:`Tablet`,value:1e3,displayValue:`1K`,comparison:1150}],p={args:{chartData:u,styles:c,value:8e3,dataFormat:{type:`number`,options:{useMultipliers:!0}}}},m={args:{chartData:u,styles:c,value:8e3,legendData:d,showLegend:!0,dataFormat:{type:`number`,options:{useMultipliers:!0}}}},h={args:{chartData:u,styles:c,value:8e3,comparisonValue:7450,legendData:f,showLegend:!0,dataFormat:{type:`number`,options:{useMultipliers:!0}}}},g={args:{chartData:[{label:`Mobile`,value:3500},{label:`Desktop`,value:2e3},{label:`Tablet`,value:1e3}],styles:c,value:6500,comparisonValue:8e3,legendData:[{label:`Mobile`,value:3500,displayValue:`3.5K`,comparison:4500},{label:`Desktop`,value:2e3,displayValue:`2K`,comparison:2500},{label:`Tablet`,value:1e3,displayValue:`1K`,comparison:1e3}],showLegend:!0,dataFormat:{type:`number`,options:{useMultipliers:!0}}}},_={decorators:[e=>(0,o.jsx)(`div`,{style:{width:300,resize:`horizontal`,overflow:`auto`,border:`1px dashed #ccc`,padding:16,minWidth:200,maxWidth:500},children:(0,o.jsx)(e,{})})],args:{chartData:u,styles:c,value:8e3,comparisonValue:7450,legendData:f,showLegend:!0,dataFormat:{type:`number`,options:{useMultipliers:!0}}}},v={decorators:[e=>(0,o.jsx)(`div`,{style:{width:200},children:(0,o.jsx)(e,{})})],args:{chartData:u,styles:c,value:8e3,comparisonValue:7450,legendData:f,showLegend:!0,dataFormat:{type:`number`,options:{useMultipliers:!0}}}},y={decorators:[e=>(0,o.jsx)(`div`,{style:{width:400},children:(0,o.jsx)(e,{})})],args:{chartData:[{label:`Mobile`,value:4500},{label:`Desktop`,value:2500},{label:`Tablet`,value:1e3},{label:`Smart TV`,value:800},{label:`Other`,value:200}],styles:l,value:9e3,comparisonValue:8200,legendData:[{label:`Mobile`,value:4500,displayValue:`4.5K`,comparison:4200},{label:`Desktop`,value:2500,displayValue:`2.5K`,comparison:2100},{label:`Tablet`,value:1e3,displayValue:`1K`,comparison:1150},{label:`Smart TV`,value:800,displayValue:`800`,comparison:600},{label:`Other`,value:200,displayValue:`200`,comparison:150}],showLegend:!0,dataFormat:{type:`number`,options:{useMultipliers:!0}}}},b={args:{chartData:[],styles:c,value:0,dataFormat:{type:`number`,options:{useMultipliers:!0}}}},x={args:{chartData:u,styles:c,value:8e3,comparisonValue:7450,legendData:f,showLegend:!0,dataFormat:{type:`number`,options:{useMultipliers:!0}},withTooltips:!0}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    chartData,
    styles: SEGMENT_STYLES,
    value: 8000,
    dataFormat: {
      type: 'number',
      options: {
        useMultipliers: true
      }
    }
  }
}`,...p.parameters?.docs?.source},description:{story:`Default: Chart only, colors via styles prop.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    chartData,
    styles: SEGMENT_STYLES,
    value: 8000,
    legendData,
    showLegend: true,
    dataFormat: {
      type: 'number',
      options: {
        useMultipliers: true
      }
    }
  }
}`,...m.parameters?.docs?.source},description:{story:`WithLegend: Chart with legend below.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    chartData,
    styles: SEGMENT_STYLES,
    value: 8000,
    comparisonValue: 7450,
    legendData: legendDataWithComparison,
    showLegend: true,
    dataFormat: {
      type: 'number',
      options: {
        useMultipliers: true
      }
    }
  }
}`,...h.parameters?.docs?.source},description:{story:`WithComparison: Chart with comparison value showing positive delta.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    chartData: [{
      label: 'Mobile',
      value: 3500
    }, {
      label: 'Desktop',
      value: 2000
    }, {
      label: 'Tablet',
      value: 1000
    }],
    styles: SEGMENT_STYLES,
    value: 6500,
    comparisonValue: 8000,
    legendData: [{
      label: 'Mobile',
      value: 3500,
      displayValue: '3.5K',
      comparison: 4500
    }, {
      label: 'Desktop',
      value: 2000,
      displayValue: '2K',
      comparison: 2500
    }, {
      label: 'Tablet',
      value: 1000,
      displayValue: '1K',
      comparison: 1000
    }],
    showLegend: true,
    dataFormat: {
      type: 'number',
      options: {
        useMultipliers: true
      }
    }
  }
}`,...g.parameters?.docs?.source},description:{story:`NegativeComparison: Chart with comparison value showing negative delta.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 300,
    resize: 'horizontal',
    overflow: 'auto',
    border: '1px dashed #ccc',
    padding: 16,
    minWidth: 200,
    maxWidth: 500
  }}>
                <Story />
            </div>],
  args: {
    chartData,
    styles: SEGMENT_STYLES,
    value: 8000,
    comparisonValue: 7450,
    legendData: legendDataWithComparison,
    showLegend: true,
    dataFormat: {
      type: 'number',
      options: {
        useMultipliers: true
      }
    }
  }
}`,..._.parameters?.docs?.source},description:{story:`Resizable: Demonstrates auto-resize behavior.
Drag the container edges to see the chart adapt to different widths.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 200
  }}>
                <Story />
            </div>],
  args: {
    chartData,
    styles: SEGMENT_STYLES,
    value: 8000,
    comparisonValue: 7450,
    legendData: legendDataWithComparison,
    showLegend: true,
    dataFormat: {
      type: 'number',
      options: {
        useMultipliers: true
      }
    }
  }
}`,...v.parameters?.docs?.source},description:{story:`SmallContainer: Chart in a narrow 200px container.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 400
  }}>
                <Story />
            </div>],
  args: {
    chartData: [{
      label: 'Mobile',
      value: 4500
    }, {
      label: 'Desktop',
      value: 2500
    }, {
      label: 'Tablet',
      value: 1000
    }, {
      label: 'Smart TV',
      value: 800
    }, {
      label: 'Other',
      value: 200
    }],
    styles: SEGMENT_STYLES_5,
    value: 9000,
    comparisonValue: 8200,
    legendData: [{
      label: 'Mobile',
      value: 4500,
      displayValue: '4.5K',
      comparison: 4200
    }, {
      label: 'Desktop',
      value: 2500,
      displayValue: '2.5K',
      comparison: 2100
    }, {
      label: 'Tablet',
      value: 1000,
      displayValue: '1K',
      comparison: 1150
    }, {
      label: 'Smart TV',
      value: 800,
      displayValue: '800',
      comparison: 600
    }, {
      label: 'Other',
      value: 200,
      displayValue: '200',
      comparison: 150
    }],
    showLegend: true,
    dataFormat: {
      type: 'number',
      options: {
        useMultipliers: true
      }
    }
  }
}`,...y.parameters?.docs?.source},description:{story:`LargeContainer: Chart stretches to fill a 400px container.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    chartData: [],
    styles: SEGMENT_STYLES,
    value: 0,
    dataFormat: {
      type: 'number',
      options: {
        useMultipliers: true
      }
    }
  }
}`,...b.parameters?.docs?.source},description:{story:`EmptyState: Shows the empty state with default icon when no data is available.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    chartData,
    styles: SEGMENT_STYLES,
    value: 8000,
    comparisonValue: 7450,
    legendData: legendDataWithComparison,
    showLegend: true,
    dataFormat: {
      type: 'number',
      options: {
        useMultipliers: true
      }
    },
    withTooltips: true
  }
}`,...x.parameters?.docs?.source},description:{story:`WithTooltips: Chart with tooltips enabled on hover.
Hover over segments to see tooltips with label and value.`,...x.parameters?.docs?.description}}},S=[`Default`,`WithLegend`,`WithComparison`,`NegativeComparison`,`Resizable`,`SmallContainer`,`LargeContainer`,`EmptyState`,`WithTooltips`]}))();export{p as Default,b as EmptyState,y as LargeContainer,g as NegativeComparison,_ as Resizable,v as SmallContainer,h as WithComparison,m as WithLegend,x as WithTooltips,S as __namedExportsOrder,s as default};