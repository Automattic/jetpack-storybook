import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,t as r}from"./with-chart-theme-BLIEb422.js";import{n as i,t as a}from"./widget-card-CkmlL3P7.js";import{i as o,n as s,r as c,t as l}from"./donut-chart-skeleton-BLy8xsUc.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{i(),r(),o(),s(),u=t(),d={title:`Packages/Premium Analytics/Widgets Toolkit/Components/DonutChart`,component:c,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[n]},f=[{color:`#3858E9`},{color:`#66BDFF`},{color:`#A77EFF`}],p=[{color:`#3858E9`},{color:`#66BDFF`},{color:`#A77EFF`},{color:`#F2D675`},{color:`#7BDCB5`}],m=[{label:`Completed`,value:45},{label:`Pending`,value:25},{label:`Cancelled`,value:10}],h=[{label:`Completed`,value:45,displayValue:`45`},{label:`Pending`,value:25,displayValue:`25`},{label:`Cancelled`,value:10,displayValue:`10`}],g=[{label:`Completed`,value:45,displayValue:`45`,comparison:42},{label:`Pending`,value:25,displayValue:`25`,comparison:30},{label:`Cancelled`,value:10,displayValue:`10`,comparison:8}],_={args:{chartData:m,styles:f,value:80,dataFormat:{type:`number`}}},v={args:{chartData:m,styles:f,value:80,legendData:h,showLegend:!0,dataFormat:{type:`number`}}},y={args:{chartData:m,styles:f,value:80,comparisonValue:72,legendData:g,showLegend:!0,dataFormat:{type:`number`}}},b={args:{chartData:[{label:`Completed`,value:35},{label:`Pending`,value:20},{label:`Cancelled`,value:15}],styles:f,value:70,comparisonValue:80,legendData:[{label:`Completed`,value:35,displayValue:`35`,comparison:45},{label:`Pending`,value:20,displayValue:`20`,comparison:25},{label:`Cancelled`,value:15,displayValue:`15`,comparison:10}],showLegend:!0,dataFormat:{type:`number`}}},x={args:{chartData:[{label:`Online Sales`,value:45e3},{label:`In-store Sales`,value:25e3},{label:`Returns`,value:1e4}],styles:f,value:8e4,comparisonValue:72e3,legendData:[{label:`Online Sales`,value:45e3,displayValue:`$45K`,comparison:42e3},{label:`In-store Sales`,value:25e3,displayValue:`$25K`,comparison:22e3},{label:`Returns`,value:1e4,displayValue:`$10K`,comparison:8e3}],showLegend:!0,dataFormat:{type:`currency`,options:{useMultipliers:!0,decimals:0}}}},S={decorators:[e=>(0,u.jsx)(`div`,{style:{width:300,resize:`both`,overflow:`auto`,border:`1px dashed #ccc`,padding:16,minWidth:200,maxWidth:500},children:(0,u.jsx)(e,{})})],args:{chartData:m,styles:f,value:80,comparisonValue:72,legendData:g,showLegend:!0,dataFormat:{type:`number`}}},C={decorators:[e=>(0,u.jsx)(`div`,{style:{width:200},children:(0,u.jsx)(e,{})})],args:{chartData:m,styles:f,value:80,comparisonValue:72,legendData:g,showLegend:!0,dataFormat:{type:`number`}}},w={decorators:[e=>(0,u.jsx)(`div`,{style:{width:400},children:(0,u.jsx)(e,{})})],args:{chartData:[{label:`Completed`,value:45},{label:`Pending`,value:25},{label:`Cancelled`,value:10},{label:`Refunded`,value:8},{label:`On Hold`,value:2}],styles:p,value:90,comparisonValue:82,legendData:[{label:`Completed`,value:45,displayValue:`45`,comparison:42},{label:`Pending`,value:25,displayValue:`25`,comparison:21},{label:`Cancelled`,value:10,displayValue:`10`,comparison:11},{label:`Refunded`,value:8,displayValue:`8`,comparison:6},{label:`On Hold`,value:2,displayValue:`2`,comparison:2}],showLegend:!0,dataFormat:{type:`number`}}},T={args:{chartData:[{label:`Confirmed`,value:120},{label:`Pending`,value:45},{label:`Cancelled`,value:15}],styles:[{color:`#36B37E`},{color:`#FFAB00`},{color:`#FF5630`}],value:180,comparisonValue:165,legendData:[{label:`Confirmed`,value:120,displayValue:`120`,comparison:110},{label:`Pending`,value:45,displayValue:`45`,comparison:40},{label:`Cancelled`,value:15,displayValue:`15`,comparison:15}],showLegend:!0,dataFormat:{type:`number`}}},E={args:{chartData:[{label:`New customers`,value:340},{label:`Returning`,value:660}],styles:[{color:`#3858E9`},{color:`#A77EFF`}],value:1e3,comparisonValue:920,legendData:[{label:`New customers`,value:340,displayValue:`340`,comparison:300},{label:`Returning`,value:660,displayValue:`660`,comparison:620}],showLegend:!0,dataFormat:{type:`number`}}},D={args:{chartData:[],styles:f,value:0,dataFormat:{type:`number`}}},O={args:{chartData:m,styles:f,value:80,comparisonValue:72,legendData:g,showLegend:!0,dataFormat:{type:`number`},withTooltips:!0}},k={render:()=>(0,u.jsx)(a,{width:`360px`,height:`320px`,children:(0,u.jsx)(l,{})})},A={render:()=>(0,u.jsx)(a,{width:`360px`,height:`140px`,children:(0,u.jsx)(l,{})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    chartData,
    styles: SEGMENT_STYLES,
    value: 80,
    dataFormat: {
      type: 'number'
    }
  }
}`,..._.parameters?.docs?.source},description:{story:`Default: Chart only, colors via styles prop.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`WithLegend: Chart with legend below.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`WithComparison: Chart with comparison value showing positive delta.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`NegativeComparison: Chart with comparison value showing negative delta.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`CurrencyFormat: Donut chart with currency formatted values.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`Resizable: Demonstrates auto-resize behavior.
Drag the container edges to see the chart adapt to different widths.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`SmallContainer: Chart in a narrow 200px container.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`LargeContainer: Chart stretches to fill a 400px container.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:`BookingsByStatus: Real-world example for booking status distribution.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`NewVsReturning: Real-world example for customer segmentation.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    chartData: [],
    styles: SEGMENT_STYLES,
    value: 0,
    dataFormat: {
      type: 'number'
    }
  }
}`,...D.parameters?.docs?.source},description:{story:`EmptyState: Shows the empty state with default icon when no data is available.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`WithTooltips: Chart with tooltips enabled on hover.
Hover over segments to see tooltips with label and value.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard width="360px" height="320px">
            <DonutChartSkeleton />
        </WidgetCard>
}`,...k.parameters?.docs?.source},description:{story:"The loading shape widgets pass through `WidgetState`'s `renderLoading`: the\nring beside four legend rows, centred in the body. The legend row count is\nfixed, since the donut's segments only arrive with the data.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard width="360px" height="140px">
            <DonutChartSkeleton />
        </WidgetCard>
}`,...A.parameters?.docs?.source},description:{story:`A height-1 dashboard tile. The ring keeps its 96px, so the body clips it
evenly top and bottom rather than letting it push past into the widget
footer.`,...A.parameters?.docs?.description}}},j=[`Default`,`WithLegend`,`WithComparison`,`NegativeComparison`,`CurrencyFormat`,`Resizable`,`SmallContainer`,`LargeContainer`,`BookingsByStatus`,`NewVsReturning`,`EmptyState`,`WithTooltips`,`Skeleton`,`SkeletonShortTile`]}))();export{T as BookingsByStatus,x as CurrencyFormat,_ as Default,D as EmptyState,w as LargeContainer,b as NegativeComparison,E as NewVsReturning,S as Resizable,k as Skeleton,A as SkeletonShortTile,C as SmallContainer,y as WithComparison,v as WithLegend,O as WithTooltips,j as __namedExportsOrder,d as default};