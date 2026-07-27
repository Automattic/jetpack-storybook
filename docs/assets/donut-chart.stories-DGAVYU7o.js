import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,t as r}from"./with-chart-theme-C370NeDv.js";import{n as i,t as a}from"./donut-chart-wIQQ5zEY.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{r(),i(),o=t(),s={title:`Packages/Premium Analytics/Widgets Toolkit/Components/DonutChart`,component:a,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[n]},c=[{color:`#3858E9`},{color:`#66BDFF`},{color:`#A77EFF`}],l=[{color:`#3858E9`},{color:`#66BDFF`},{color:`#A77EFF`},{color:`#F2D675`},{color:`#7BDCB5`}],u=[{label:`Completed`,value:45},{label:`Pending`,value:25},{label:`Cancelled`,value:10}],d=[{label:`Completed`,value:45,displayValue:`45`},{label:`Pending`,value:25,displayValue:`25`},{label:`Cancelled`,value:10,displayValue:`10`}],f=[{label:`Completed`,value:45,displayValue:`45`,comparison:42},{label:`Pending`,value:25,displayValue:`25`,comparison:30},{label:`Cancelled`,value:10,displayValue:`10`,comparison:8}],p={args:{chartData:u,styles:c,value:80,dataFormat:{type:`number`}}},m={args:{chartData:u,styles:c,value:80,legendData:d,showLegend:!0,dataFormat:{type:`number`}}},h={args:{chartData:u,styles:c,value:80,comparisonValue:72,legendData:f,showLegend:!0,dataFormat:{type:`number`}}},g={args:{chartData:[{label:`Completed`,value:35},{label:`Pending`,value:20},{label:`Cancelled`,value:15}],styles:c,value:70,comparisonValue:80,legendData:[{label:`Completed`,value:35,displayValue:`35`,comparison:45},{label:`Pending`,value:20,displayValue:`20`,comparison:25},{label:`Cancelled`,value:15,displayValue:`15`,comparison:10}],showLegend:!0,dataFormat:{type:`number`}}},_={args:{chartData:[{label:`Online Sales`,value:45e3},{label:`In-store Sales`,value:25e3},{label:`Returns`,value:1e4}],styles:c,value:8e4,comparisonValue:72e3,legendData:[{label:`Online Sales`,value:45e3,displayValue:`$45K`,comparison:42e3},{label:`In-store Sales`,value:25e3,displayValue:`$25K`,comparison:22e3},{label:`Returns`,value:1e4,displayValue:`$10K`,comparison:8e3}],showLegend:!0,dataFormat:{type:`currency`,options:{useMultipliers:!0,decimals:0}}}},v={decorators:[e=>(0,o.jsx)(`div`,{style:{width:300,resize:`both`,overflow:`auto`,border:`1px dashed #ccc`,padding:16,minWidth:200,maxWidth:500},children:(0,o.jsx)(e,{})})],args:{chartData:u,styles:c,value:80,comparisonValue:72,legendData:f,showLegend:!0,dataFormat:{type:`number`}}},y={decorators:[e=>(0,o.jsx)(`div`,{style:{width:200},children:(0,o.jsx)(e,{})})],args:{chartData:u,styles:c,value:80,comparisonValue:72,legendData:f,showLegend:!0,dataFormat:{type:`number`}}},b={decorators:[e=>(0,o.jsx)(`div`,{style:{width:400},children:(0,o.jsx)(e,{})})],args:{chartData:[{label:`Completed`,value:45},{label:`Pending`,value:25},{label:`Cancelled`,value:10},{label:`Refunded`,value:8},{label:`On Hold`,value:2}],styles:l,value:90,comparisonValue:82,legendData:[{label:`Completed`,value:45,displayValue:`45`,comparison:42},{label:`Pending`,value:25,displayValue:`25`,comparison:21},{label:`Cancelled`,value:10,displayValue:`10`,comparison:11},{label:`Refunded`,value:8,displayValue:`8`,comparison:6},{label:`On Hold`,value:2,displayValue:`2`,comparison:2}],showLegend:!0,dataFormat:{type:`number`}}},x={args:{chartData:[{label:`Confirmed`,value:120},{label:`Pending`,value:45},{label:`Cancelled`,value:15}],styles:[{color:`#36B37E`},{color:`#FFAB00`},{color:`#FF5630`}],value:180,comparisonValue:165,legendData:[{label:`Confirmed`,value:120,displayValue:`120`,comparison:110},{label:`Pending`,value:45,displayValue:`45`,comparison:40},{label:`Cancelled`,value:15,displayValue:`15`,comparison:15}],showLegend:!0,dataFormat:{type:`number`}}},S={args:{chartData:[{label:`New customers`,value:340},{label:`Returning`,value:660}],styles:[{color:`#3858E9`},{color:`#A77EFF`}],value:1e3,comparisonValue:920,legendData:[{label:`New customers`,value:340,displayValue:`340`,comparison:300},{label:`Returning`,value:660,displayValue:`660`,comparison:620}],showLegend:!0,dataFormat:{type:`number`}}},C={args:{chartData:[],styles:c,value:0,dataFormat:{type:`number`}}},w={args:{chartData:u,styles:c,value:80,comparisonValue:72,legendData:f,showLegend:!0,dataFormat:{type:`number`},withTooltips:!0}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    chartData,
    styles: SEGMENT_STYLES,
    value: 80,
    dataFormat: {
      type: 'number'
    }
  }
}`,...p.parameters?.docs?.source},description:{story:`Default: Chart only, colors via styles prop.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    chartData,
    styles: SEGMENT_STYLES,
    value: 80,
    legendData,
    showLegend: true,
    dataFormat: {
      type: 'number'
    }
  }
}`,...m.parameters?.docs?.source},description:{story:`WithLegend: Chart with legend below.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    chartData,
    styles: SEGMENT_STYLES,
    value: 80,
    comparisonValue: 72,
    legendData: legendDataWithComparison,
    showLegend: true,
    dataFormat: {
      type: 'number'
    }
  }
}`,...h.parameters?.docs?.source},description:{story:`WithComparison: Chart with comparison value showing positive delta.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    chartData: [{
      label: 'Completed',
      value: 35
    }, {
      label: 'Pending',
      value: 20
    }, {
      label: 'Cancelled',
      value: 15
    }],
    styles: SEGMENT_STYLES,
    value: 70,
    comparisonValue: 80,
    legendData: [{
      label: 'Completed',
      value: 35,
      displayValue: '35',
      comparison: 45
    }, {
      label: 'Pending',
      value: 20,
      displayValue: '20',
      comparison: 25
    }, {
      label: 'Cancelled',
      value: 15,
      displayValue: '15',
      comparison: 10
    }],
    showLegend: true,
    dataFormat: {
      type: 'number'
    }
  }
}`,...g.parameters?.docs?.source},description:{story:`NegativeComparison: Chart with comparison value showing negative delta.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    chartData: [{
      label: 'Online Sales',
      value: 45000
    }, {
      label: 'In-store Sales',
      value: 25000
    }, {
      label: 'Returns',
      value: 10000
    }],
    styles: SEGMENT_STYLES,
    value: 80000,
    comparisonValue: 72000,
    legendData: [{
      label: 'Online Sales',
      value: 45000,
      displayValue: '$45K',
      comparison: 42000
    }, {
      label: 'In-store Sales',
      value: 25000,
      displayValue: '$25K',
      comparison: 22000
    }, {
      label: 'Returns',
      value: 10000,
      displayValue: '$10K',
      comparison: 8000
    }],
    showLegend: true,
    dataFormat: {
      type: 'currency',
      options: {
        useMultipliers: true,
        decimals: 0
      }
    }
  }
}`,..._.parameters?.docs?.source},description:{story:`CurrencyFormat: Donut chart with currency formatted values.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 300,
    resize: 'both',
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
    value: 80,
    comparisonValue: 72,
    legendData: legendDataWithComparison,
    showLegend: true,
    dataFormat: {
      type: 'number'
    }
  }
}`,...v.parameters?.docs?.source},description:{story:`Resizable: Demonstrates auto-resize behavior.
Drag the container edges to see the chart adapt to different widths.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 200
  }}>
                <Story />
            </div>],
  args: {
    chartData,
    styles: SEGMENT_STYLES,
    value: 80,
    comparisonValue: 72,
    legendData: legendDataWithComparison,
    showLegend: true,
    dataFormat: {
      type: 'number'
    }
  }
}`,...y.parameters?.docs?.source},description:{story:`SmallContainer: Chart in a narrow 200px container.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 400
  }}>
                <Story />
            </div>],
  args: {
    chartData: [{
      label: 'Completed',
      value: 45
    }, {
      label: 'Pending',
      value: 25
    }, {
      label: 'Cancelled',
      value: 10
    }, {
      label: 'Refunded',
      value: 8
    }, {
      label: 'On Hold',
      value: 2
    }],
    styles: SEGMENT_STYLES_5,
    value: 90,
    comparisonValue: 82,
    legendData: [{
      label: 'Completed',
      value: 45,
      displayValue: '45',
      comparison: 42
    }, {
      label: 'Pending',
      value: 25,
      displayValue: '25',
      comparison: 21
    }, {
      label: 'Cancelled',
      value: 10,
      displayValue: '10',
      comparison: 11
    }, {
      label: 'Refunded',
      value: 8,
      displayValue: '8',
      comparison: 6
    }, {
      label: 'On Hold',
      value: 2,
      displayValue: '2',
      comparison: 2
    }],
    showLegend: true,
    dataFormat: {
      type: 'number'
    }
  }
}`,...b.parameters?.docs?.source},description:{story:`LargeContainer: Chart stretches to fill a 400px container.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    chartData: [{
      label: 'Confirmed',
      value: 120
    }, {
      label: 'Pending',
      value: 45
    }, {
      label: 'Cancelled',
      value: 15
    }],
    styles: [{
      color: '#36B37E'
    },
    // Green for confirmed
    {
      color: '#FFAB00'
    },
    // Yellow for pending
    {
      color: '#FF5630'
    } // Red for cancelled
    ],
    value: 180,
    comparisonValue: 165,
    legendData: [{
      label: 'Confirmed',
      value: 120,
      displayValue: '120',
      comparison: 110
    }, {
      label: 'Pending',
      value: 45,
      displayValue: '45',
      comparison: 40
    }, {
      label: 'Cancelled',
      value: 15,
      displayValue: '15',
      comparison: 15
    }],
    showLegend: true,
    dataFormat: {
      type: 'number'
    }
  }
}`,...x.parameters?.docs?.source},description:{story:`BookingsByStatus: Real-world example for booking status distribution.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    chartData: [{
      label: 'New customers',
      value: 340
    }, {
      label: 'Returning',
      value: 660
    }],
    styles: [{
      color: '#3858E9'
    },
    // Blue for new
    {
      color: '#A77EFF'
    } // Purple for returning
    ],
    value: 1000,
    comparisonValue: 920,
    legendData: [{
      label: 'New customers',
      value: 340,
      displayValue: '340',
      comparison: 300
    }, {
      label: 'Returning',
      value: 660,
      displayValue: '660',
      comparison: 620
    }],
    showLegend: true,
    dataFormat: {
      type: 'number'
    }
  }
}`,...S.parameters?.docs?.source},description:{story:`NewVsReturning: Real-world example for customer segmentation.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    chartData: [],
    styles: SEGMENT_STYLES,
    value: 0,
    dataFormat: {
      type: 'number'
    }
  }
}`,...C.parameters?.docs?.source},description:{story:`EmptyState: Shows the empty state with default icon when no data is available.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    chartData,
    styles: SEGMENT_STYLES,
    value: 80,
    comparisonValue: 72,
    legendData: legendDataWithComparison,
    showLegend: true,
    dataFormat: {
      type: 'number'
    },
    withTooltips: true
  }
}`,...w.parameters?.docs?.source},description:{story:`WithTooltips: Chart with tooltips enabled on hover.
Hover over segments to see tooltips with label and value.`,...w.parameters?.docs?.description}}},T=[`Default`,`WithLegend`,`WithComparison`,`NegativeComparison`,`CurrencyFormat`,`Resizable`,`SmallContainer`,`LargeContainer`,`BookingsByStatus`,`NewVsReturning`,`EmptyState`,`WithTooltips`]}))();export{x as BookingsByStatus,_ as CurrencyFormat,p as Default,C as EmptyState,b as LargeContainer,g as NegativeComparison,S as NewVsReturning,v as Resizable,y as SmallContainer,h as WithComparison,m as WithLegend,w as WithTooltips,T as __namedExportsOrder,s as default};