import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,t as r}from"./with-chart-theme-D6OMviAJ.js";import{n as i,t as a}from"./bar-chart-Dp0YjDP1.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{r(),i(),o=t(),s={title:`Packages/Premium Analytics/Widgets Toolkit/Components/BarChart`,component:a,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[n,e=>(0,o.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,o.jsx)(e,{})})]},c=[{stroke:`#3858E9`},{stroke:`#3858E9`},{stroke:`#3858E9`}],l=[{label:`Dec 16, 2025-Jan 14, 2026`,data:[{label:`summer`,value:4500},{label:`welcome`,value:3200},{label:`flash`,value:2800}]}],u=[{label:`Dec 16, 2025-Jan 14, 2026`,data:[{label:`Product Sales`,value:15e3},{label:`Shipping`,value:2500},{label:`Refunds`,value:-3200},{label:`Discounts`,value:-1500}]}],d=[{label:`Dec 16, 2025-Jan 14, 2026`,data:[{label:`Very long data label that might need to be truncated`,value:15e3},{label:`Another long data label that might need to be truncated`,value:2500}]}],f={args:{chartData:l,dataFormat:{type:`number`},styles:c}},p={args:{chartData:u,dataFormat:{type:`currency`},styles:c}},m={args:{chartData:[{label:`Dec 16, 2025-Jan 14, 2026`,data:[{label:`Defective`,value:-5400},{label:`Wrong Item`,value:-3200},{label:`Changed Mind`,value:-2100}]}],dataFormat:{type:`currency`},styles:c}},h={decorators:[e=>(0,o.jsx)(`div`,{style:{width:350},children:(0,o.jsx)(e,{})})],args:{chartData:d,dataFormat:{type:`number`},styles:c}},g={args:{chartData:l,dataFormat:{type:`currency`},styles:c}},_={args:{chartData:[{label:`Dec 16, 2025-Jan 14, 2026`,data:[{label:`Desktop`,value:.045},{label:`Mobile`,value:.032},{label:`Tablet`,value:.028}]}],dataFormat:{type:`percentage`},styles:c}},v={args:{chartData:[{label:`Dec 16, 2025-Jan 14, 2026`,data:[{label:`summer`,value:4500},{label:`welcome`,value:3200},{label:`flash`,value:2800}]},{label:`Dec 16, 2024-Jan 14, 2025`,data:[{label:`summer`,value:3800},{label:`welcome`,value:2900},{label:`flash`,value:3100}]}],dataFormat:{type:`currency`},styles:[{stroke:`#3858E9`},{stroke:`#66BDFF`}]},parameters:{docs:{description:{story:`Bar chart with two series comparing current and previous periods. Uses different blue shades to distinguish between periods.`}}}},y={decorators:[e=>(0,o.jsx)(`div`,{style:{width:350,resize:`both`,overflow:`auto`,border:`1px dashed #ccc`,padding:16,minWidth:250,maxWidth:600,height:350},children:(0,o.jsx)(e,{})})],args:{...v.args}},b={args:{chartData:l,dataFormat:{type:`currency`},styles:[{stroke:`#10B981`}]},parameters:{docs:{description:{story:"Bar chart with custom green color applied via the `styles` prop."}}}},x={args:{chartData:[{label:`Dec 16, 2025-Jan 14, 2026`,data:[{label:`summer`,value:0},{label:`welcome`,value:0},{label:`flash`,value:0}]}],dataFormat:{type:`currency`},styles:c},parameters:{docs:{description:{story:`When all data values are 0, tooltips are automatically disabled to avoid showing meaningless "0" tooltips on hover.`}}}},S={args:{chartData:[{label:`Dec 16, 2025-Jan 14, 2026`,data:[{label:`New customers`,value:4500},{label:`Returning`,value:3200}]},{label:`Dec 16, 2024-Jan 14, 2025`,data:[{label:`New customers`,value:0},{label:`Returning`,value:0}]}],dataFormat:{type:`currency`},styles:[{stroke:`#3858E9`},{stroke:`#66BDFF`}],showZeroValues:!0},parameters:{docs:{description:{story:`When comparison period has zero values (e.g., new store with no prior data), zero-value bars render with a small visible height. This provides a visual cue and allows users to hover for tooltip confirmation.`}}}},C={args:{chartData:[],dataFormat:{type:`currency`},styles:c},parameters:{docs:{description:{story:`When no data is available, an empty state message is displayed instead of the chart.`}}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    chartData,
    dataFormat: {
      type: 'number'
    },
    styles: STYLES
  }
}`,...f.parameters?.docs?.source},description:{story:`Default: Vertical bar chart with categorical data`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    chartData: withNegativeValues,
    dataFormat: {
      type: 'currency'
    },
    styles: STYLES
  }
}`,...p.parameters?.docs?.source},description:{story:`WithNegativeValues: Bar chart showing negative amounts (refunds)
This demonstrates the key feature of using bar charts for monetary widgets`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`AllNegativeValues: Example showing all negative values`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`LongDataLabel: Bar chart with long data labels`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    chartData,
    dataFormat: {
      type: 'currency'
    },
    styles: STYLES
  }
}`,...g.parameters?.docs?.source},description:{story:`CurrencyFormat: Bar chart with currency formatted tooltip`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`PercentageFormat: Bar chart with percentage formatted tooltip`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`WithComparison: Bar chart with primary and comparison periods
Demonstrates multiple series with different colors`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`Resizable: Demonstrates auto-resize behavior`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"CustomStyles: Bar chart with custom green color applied via the `styles` prop",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`ZeroValues: Bar chart with all zero values (tooltips disabled)
Demonstrates how the chart handles zero values gracefully by disabling tooltips`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`ComparisonWithZeroValues: Bar chart comparing current period with zero historical data
Demonstrates how charts handle new stores with no prior data to compare against.
Zero-value bars render with a small visible height for better UX.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`EmptyState: Bar chart with no data available
Demonstrates the empty state message when there's no data to display`,...C.parameters?.docs?.description}}},w=[`Default`,`WithNegativeValues`,`AllNegativeValues`,`LongDataLabel`,`CurrencyFormat`,`PercentageFormat`,`WithComparison`,`Resizable`,`CustomStyles`,`ZeroValues`,`ComparisonWithZeroValues`,`EmptyState`]}))();export{m as AllNegativeValues,S as ComparisonWithZeroValues,g as CurrencyFormat,b as CustomStyles,f as Default,C as EmptyState,h as LongDataLabel,_ as PercentageFormat,y as Resizable,v as WithComparison,p as WithNegativeValues,x as ZeroValues,w as __namedExportsOrder,s as default};