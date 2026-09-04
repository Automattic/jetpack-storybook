import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./report-metric-De-Z_6bt.js";import{n as r,t as i}from"./with-widget-root-DAZavG7X.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{i(),t(),a=(e,t)=>{let n=new Date(e);return n.setDate(n.getDate()+t),n.toISOString().split(`T`)[0]},o=[.85,1.1,.95,1.2,.9,1.05,.95],s=(e,t,n={start:`2024-01-01`,end:`2024-01-07`})=>{let r=new Date(n.start);return{summary:{date_start:n.start,date_end:n.end,[e]:t},data:o.map((n,i)=>({date_start:a(r,i),[e]:t*n}))}},c={start:`2024-01-08`,end:`2024-01-14`},l={start:`2024-01-01`,end:`2024-01-07`},u=e=>{let{metricKey:t,primaryValue:n,comparisonValue:r,isLoading:i=!1,isFetching:a=!1,hasData:o=!0,includeData:u=!0}=e;return{primary:{data:u?s(t,n,c):void 0},comparison:{data:r===void 0?void 0:s(t,r,l)},isLoading:i,isFetching:a,hasData:o,isError:!1,error:null,refetch:()=>Promise.resolve()}},d={title:`Packages/Premium Analytics/Widgets Toolkit/Components/ReportMetricWidget`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`Internal component that displays a metric with time series chart and optional comparison period.`}}},decorators:[r()]},f={args:{metricKey:`total_sales`,data:u({metricKey:`total_sales`,primaryValue:0,isLoading:!0,hasData:!1,includeData:!1}),dataFormat:{type:`currency`}}},p={args:{metricKey:`total_sales`,data:u({metricKey:`total_sales`,primaryValue:45678.99,isFetching:!0,hasData:!0}),dataFormat:{type:`currency`}}},m={args:{metricKey:`total_sales`,data:u({metricKey:`total_sales`,primaryValue:0,isLoading:!1,hasData:!1,includeData:!1}),dataFormat:{type:`currency`}},parameters:{docs:{description:{story:`When there is no data and loading is complete, the component renders nothing (returns null).`}}}},h={args:{metricKey:`orders_no`,data:u({metricKey:`orders_no`,primaryValue:1234}),dataFormat:{type:`number`}}},g={args:{metricKey:`total_sales`,data:u({metricKey:`total_sales`,primaryValue:1234567.89}),dataFormat:{type:`currency`,options:{useMultipliers:!0,decimals:1}}}},_={args:{metricKey:`conversion_rate`,data:u({metricKey:`conversion_rate`,primaryValue:.342}),dataFormat:{type:`percentage`,options:{decimals:1}}}},v={args:{metricKey:`total_sales`,data:u({metricKey:`total_sales`,primaryValue:45678.99,comparisonValue:38500}),dataFormat:{type:`currency`}}},y={args:{metricKey:`total_sales`,data:u({metricKey:`total_sales`,primaryValue:45678.99}),dataFormat:{type:`currency`}}},b={args:{metricKey:`total_sales`,data:u({metricKey:`total_sales`,primaryValue:35e3,comparisonValue:45678.99}),dataFormat:{type:`currency`}}},x={args:{metricKey:`total_sales`,data:u({metricKey:`total_sales`,primaryValue:45678.99,comparisonValue:38500}),dataFormat:{type:`currency`}}},S={args:{metricKey:`total_sales`,data:u({metricKey:`total_sales`,primaryValue:9876543.21,comparisonValue:7654321}),dataFormat:{type:`currency`,options:{useMultipliers:!0,decimals:1}}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    metricKey: 'total_sales',
    data: createMockData({
      metricKey: 'total_sales',
      primaryValue: 0,
      isLoading: true,
      hasData: false,
      includeData: false
    }),
    dataFormat: {
      type: 'currency'
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    metricKey: 'total_sales',
    data: createMockData({
      metricKey: 'total_sales',
      primaryValue: 45678.99,
      isFetching: true,
      hasData: true
    }),
    dataFormat: {
      type: 'currency'
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    metricKey: 'total_sales',
    data: createMockData({
      metricKey: 'total_sales',
      primaryValue: 0,
      isLoading: false,
      hasData: false,
      includeData: false
    }),
    dataFormat: {
      type: 'currency'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'When there is no data and loading is complete, the component renders nothing (returns null).'
      }
    }
  }
}`,...m.parameters?.docs?.source},description:{story:`Empty state - component returns null when no data and not loading
This story demonstrates the empty state behavior`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    metricKey: 'orders_no',
    data: createMockData({
      metricKey: 'orders_no',
      primaryValue: 1234
    }),
    dataFormat: {
      type: 'number'
    }
  }
}`,...h.parameters?.docs?.source},description:{story:`Number format - displays plain numbers (e.g., order count)`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    metricKey: 'total_sales',
    data: createMockData({
      metricKey: 'total_sales',
      primaryValue: 1234567.89
    }),
    dataFormat: {
      type: 'currency',
      options: {
        useMultipliers: true,
        decimals: 1
      }
    }
  }
}`,...g.parameters?.docs?.source},description:{story:`Currency format with multipliers - uses abbreviations like "45.7K"`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    metricKey: 'conversion_rate',
    data: createMockData({
      metricKey: 'conversion_rate',
      primaryValue: 0.342
    }),
    dataFormat: {
      type: 'percentage',
      options: {
        decimals: 1
      }
    }
  }
}`,..._.parameters?.docs?.source},description:{story:`Percentage format - displays percentage values`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    metricKey: 'total_sales',
    data: createMockData({
      metricKey: 'total_sales',
      primaryValue: 45678.99,
      comparisonValue: 38500.0
    }),
    dataFormat: {
      type: 'currency'
    }
  }
}`,...v.parameters?.docs?.source},description:{story:`With comparison period - shows delta between current and previous period`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    metricKey: 'total_sales',
    data: createMockData({
      metricKey: 'total_sales',
      primaryValue: 45678.99
    }),
    dataFormat: {
      type: 'currency'
    }
  }
}`,...y.parameters?.docs?.source},description:{story:`Without comparison - shows only the current period value`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    metricKey: 'total_sales',
    data: createMockData({
      metricKey: 'total_sales',
      primaryValue: 35000.0,
      comparisonValue: 45678.99
    }),
    dataFormat: {
      type: 'currency'
    }
  }
}`,...b.parameters?.docs?.source},description:{story:`Negative delta - comparison shows decrease from previous period`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    metricKey: 'total_sales',
    data: createMockData({
      metricKey: 'total_sales',
      primaryValue: 45678.99,
      comparisonValue: 38500.0
    }),
    dataFormat: {
      type: 'currency'
    }
  }
}`,...x.parameters?.docs?.source},description:{story:`Positive delta - comparison shows increase from previous period`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    metricKey: 'total_sales',
    data: createMockData({
      metricKey: 'total_sales',
      primaryValue: 9876543.21,
      comparisonValue: 7654321.0
    }),
    dataFormat: {
      type: 'currency',
      options: {
        useMultipliers: true,
        decimals: 1
      }
    }
  }
}`,...S.parameters?.docs?.source},description:{story:`Large values - tests formatting with very large numbers`,...S.parameters?.docs?.description}}},C=[`Loading`,`Refetching`,`Empty`,`NumberFormat`,`CurrencyCompact`,`PercentageFormat`,`WithComparison`,`WithoutComparison`,`NegativeDelta`,`PositiveDelta`,`LargeValues`]}))();export{g as CurrencyCompact,m as Empty,S as LargeValues,f as Loading,b as NegativeDelta,h as NumberFormat,_ as PercentageFormat,x as PositiveDelta,p as Refetching,v as WithComparison,y as WithoutComparison,C as __namedExportsOrder,d as default};