import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,t as r}from"./with-chart-theme-Lg_T-F6M.js";import{n as i,t as a}from"./widget-card-CkmlL3P7.js";import{i as o,n as s,r as c,t as l}from"./bar-chart-skeleton-CPySR2a2.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{i(),r(),o(),s(),u=t(),d={title:`Packages/Premium Analytics/Widgets Toolkit/Components/BarChart`,component:c,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[n,e=>(0,u.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,u.jsx)(e,{})})]},f=[{stroke:`#3858E9`},{stroke:`#3858E9`},{stroke:`#3858E9`}],p=[{label:`Dec 16, 2025-Jan 14, 2026`,data:[{label:`summer`,value:4500},{label:`welcome`,value:3200},{label:`flash`,value:2800}]}],m=[{label:`Dec 16, 2025-Jan 14, 2026`,data:[{label:`Product Sales`,value:15e3},{label:`Shipping`,value:2500},{label:`Refunds`,value:-3200},{label:`Discounts`,value:-1500}]}],h=[{label:`Dec 16, 2025-Jan 14, 2026`,data:[{label:`Very long data label that might need to be truncated`,value:15e3},{label:`Another long data label that might need to be truncated`,value:2500}]}],g={args:{chartData:p,dataFormat:{type:`number`},styles:f}},_={args:{chartData:m,dataFormat:{type:`currency`},styles:f}},v={args:{chartData:[{label:`Dec 16, 2025-Jan 14, 2026`,data:[{label:`Defective`,value:-5400},{label:`Wrong Item`,value:-3200},{label:`Changed Mind`,value:-2100}]}],dataFormat:{type:`currency`},styles:f}},y={decorators:[e=>(0,u.jsx)(`div`,{style:{width:350},children:(0,u.jsx)(e,{})})],args:{chartData:h,dataFormat:{type:`number`},styles:f}},b={args:{chartData:p,dataFormat:{type:`currency`},styles:f}},x={args:{chartData:[{label:`Dec 16, 2025-Jan 14, 2026`,data:[{label:`Desktop`,value:.045},{label:`Mobile`,value:.032},{label:`Tablet`,value:.028}]}],dataFormat:{type:`percentage`},styles:f}},S={args:{chartData:[{label:`Dec 16, 2025-Jan 14, 2026`,data:[{label:`summer`,value:4500},{label:`welcome`,value:3200},{label:`flash`,value:2800}]},{label:`Dec 16, 2024-Jan 14, 2025`,data:[{label:`summer`,value:3800},{label:`welcome`,value:2900},{label:`flash`,value:3100}]}],dataFormat:{type:`currency`},styles:[{stroke:`#3858E9`},{stroke:`#66BDFF`}]},parameters:{docs:{description:{story:`Bar chart with two series comparing current and previous periods. Uses different blue shades to distinguish between periods.`}}}},C={decorators:[e=>(0,u.jsx)(`div`,{style:{width:350,resize:`both`,overflow:`auto`,border:`1px dashed #ccc`,padding:16,minWidth:250,maxWidth:600,height:350},children:(0,u.jsx)(e,{})})],args:{...S.args}},w={args:{chartData:p,dataFormat:{type:`currency`},styles:[{stroke:`#10B981`}]},parameters:{docs:{description:{story:"Bar chart with custom green color applied via the `styles` prop."}}}},T={args:{chartData:[{label:`Dec 16, 2025-Jan 14, 2026`,data:[{label:`summer`,value:0},{label:`welcome`,value:0},{label:`flash`,value:0}]}],dataFormat:{type:`currency`},styles:f},parameters:{docs:{description:{story:`When all data values are 0, tooltips are automatically disabled to avoid showing meaningless "0" tooltips on hover.`}}}},E={args:{chartData:[{label:`Dec 16, 2025-Jan 14, 2026`,data:[{label:`New customers`,value:4500},{label:`Returning`,value:3200}]},{label:`Dec 16, 2024-Jan 14, 2025`,data:[{label:`New customers`,value:0},{label:`Returning`,value:0}]}],dataFormat:{type:`currency`},styles:[{stroke:`#3858E9`},{stroke:`#66BDFF`}],showZeroValues:!0},parameters:{docs:{description:{story:`When comparison period has zero values (e.g., new store with no prior data), zero-value bars render with a small visible height. This provides a visual cue and allows users to hover for tooltip confirmation.`}}}},D={args:{chartData:[],dataFormat:{type:`currency`},styles:f},parameters:{docs:{description:{story:`When no data is available, an empty state message is displayed instead of the chart.`}}}},O={render:()=>(0,u.jsx)(a,{width:`360px`,height:`260px`,children:(0,u.jsx)(l,{})})},k={render:()=>(0,u.jsx)(a,{width:`360px`,height:`140px`,children:(0,u.jsx)(l,{})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    chartData,
    dataFormat: {
      type: 'number'
    },
    styles: STYLES
  }
}`,...g.parameters?.docs?.source},description:{story:`Default: Vertical bar chart with categorical data`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    chartData: withNegativeValues,
    dataFormat: {
      type: 'currency'
    },
    styles: STYLES
  }
}`,..._.parameters?.docs?.source},description:{story:`WithNegativeValues: Bar chart showing negative amounts (refunds)
This demonstrates the key feature of using bar charts for monetary widgets`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    chartData: [{
      label: 'Dec 16, 2025-Jan 14, 2026',
      data: [{
        label: 'Defective',
        value: -5400
      }, {
        label: 'Wrong Item',
        value: -3200
      }, {
        label: 'Changed Mind',
        value: -2100
      }]
    }],
    dataFormat: {
      type: 'currency'
    },
    styles: STYLES
  }
}`,...v.parameters?.docs?.source},description:{story:`AllNegativeValues: Example showing all negative values`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 350
  }}>
                <Story />
            </div>],
  args: {
    chartData: longDataLabel,
    dataFormat: {
      type: 'number'
    },
    styles: STYLES
  }
}`,...y.parameters?.docs?.source},description:{story:`LongDataLabel: Bar chart with long data labels`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    chartData,
    dataFormat: {
      type: 'currency'
    },
    styles: STYLES
  }
}`,...b.parameters?.docs?.source},description:{story:`CurrencyFormat: Bar chart with currency formatted tooltip`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    chartData: [{
      label: 'Dec 16, 2025-Jan 14, 2026',
      data: [{
        label: 'Desktop',
        value: 0.045
      }, {
        label: 'Mobile',
        value: 0.032
      }, {
        label: 'Tablet',
        value: 0.028
      }]
    }],
    dataFormat: {
      type: 'percentage'
    },
    styles: STYLES
  }
}`,...x.parameters?.docs?.source},description:{story:`PercentageFormat: Bar chart with percentage formatted tooltip`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    chartData: [{
      label: 'Dec 16, 2025-Jan 14, 2026',
      data: [{
        label: 'summer',
        value: 4500
      }, {
        label: 'welcome',
        value: 3200
      }, {
        label: 'flash',
        value: 2800
      }]
    }, {
      label: 'Dec 16, 2024-Jan 14, 2025',
      data: [{
        label: 'summer',
        value: 3800
      }, {
        label: 'welcome',
        value: 2900
      }, {
        label: 'flash',
        value: 3100
      }]
    }],
    dataFormat: {
      type: 'currency'
    },
    styles: [{
      stroke: '#3858E9'
    },
    // Primary - Blueberry
    {
      stroke: '#66BDFF'
    } // Comparison - Blue 30
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with two series comparing current and previous periods. Uses different blue shades to distinguish between periods.'
      }
    }
  }
}`,...S.parameters?.docs?.source},description:{story:`WithComparison: Bar chart with primary and comparison periods
Demonstrates multiple series with different colors`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 350,
    resize: 'both',
    overflow: 'auto',
    border: '1px dashed #ccc',
    padding: 16,
    minWidth: 250,
    maxWidth: 600,
    height: 350
  }}>
                <Story />
            </div>],
  args: {
    ...WithComparison.args
  }
}`,...C.parameters?.docs?.source},description:{story:`Resizable: Demonstrates auto-resize behavior`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    chartData,
    dataFormat: {
      type: 'currency'
    },
    styles: [{
      stroke: '#10B981'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with custom green color applied via the \`styles\` prop.'
      }
    }
  }
}`,...w.parameters?.docs?.source},description:{story:"CustomStyles: Bar chart with custom green color applied via the `styles` prop",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    chartData: [{
      label: 'Dec 16, 2025-Jan 14, 2026',
      data: [{
        label: 'summer',
        value: 0
      }, {
        label: 'welcome',
        value: 0
      }, {
        label: 'flash',
        value: 0
      }]
    }],
    dataFormat: {
      type: 'currency'
    },
    styles: STYLES
  },
  parameters: {
    docs: {
      description: {
        story: 'When all data values are 0, tooltips are automatically disabled to avoid showing meaningless "0" tooltips on hover.'
      }
    }
  }
}`,...T.parameters?.docs?.source},description:{story:`ZeroValues: Bar chart with all zero values (tooltips disabled)
Demonstrates how the chart handles zero values gracefully by disabling tooltips`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    chartData: [{
      label: 'Dec 16, 2025-Jan 14, 2026',
      data: [{
        label: 'New customers',
        value: 4500
      }, {
        label: 'Returning',
        value: 3200
      }]
    }, {
      label: 'Dec 16, 2024-Jan 14, 2025',
      data: [{
        label: 'New customers',
        value: 0
      }, {
        label: 'Returning',
        value: 0
      }]
    }],
    dataFormat: {
      type: 'currency'
    },
    styles: [{
      stroke: '#3858E9'
    },
    // Primary - Blueberry
    {
      stroke: '#66BDFF'
    } // Comparison - Blue 30
    ],
    showZeroValues: true
  },
  parameters: {
    docs: {
      description: {
        story: 'When comparison period has zero values (e.g., new store with no prior data), zero-value bars render with a small visible height. This provides a visual cue and allows users to hover for tooltip confirmation.'
      }
    }
  }
}`,...E.parameters?.docs?.source},description:{story:`ComparisonWithZeroValues: Bar chart comparing current period with zero historical data
Demonstrates how charts handle new stores with no prior data to compare against.
Zero-value bars render with a small visible height for better UX.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    chartData: [],
    dataFormat: {
      type: 'currency'
    },
    styles: STYLES
  },
  parameters: {
    docs: {
      description: {
        story: 'When no data is available, an empty state message is displayed instead of the chart.'
      }
    }
  }
}`,...D.parameters?.docs?.source},description:{story:`EmptyState: Bar chart with no data available
Demonstrates the empty state message when there's no data to display`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard width="360px" height="260px">
            <BarChartSkeleton />
        </WidgetCard>
}`,...O.parameters?.docs?.source},description:{story:"The loading shape widgets pass through `WidgetState`'s `renderLoading`: a\nbottom-aligned row of columns, here at the default four. Widgets that know\ntheir bar count up front pass it through `columns`; the rest keep the default\nrather than deriving one from a response that has not arrived, which would\nland as the jump the placeholder is there to prevent.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard width="360px" height="140px">
            <BarChartSkeleton />
        </WidgetCard>
}`,...k.parameters?.docs?.source},description:{story:`A height-1 dashboard tile. The columns are sized as a share of the body, so
they shrink with it instead of pushing past the widget.`,...k.parameters?.docs?.description}}},A=[`Default`,`WithNegativeValues`,`AllNegativeValues`,`LongDataLabel`,`CurrencyFormat`,`PercentageFormat`,`WithComparison`,`Resizable`,`CustomStyles`,`ZeroValues`,`ComparisonWithZeroValues`,`EmptyState`,`Skeleton`,`SkeletonShortTile`]}))();export{v as AllNegativeValues,E as ComparisonWithZeroValues,b as CurrencyFormat,w as CustomStyles,g as Default,D as EmptyState,y as LongDataLabel,x as PercentageFormat,C as Resizable,O as Skeleton,k as SkeletonShortTile,S as WithComparison,_ as WithNegativeValues,T as ZeroValues,A as __namedExportsOrder,d as default};