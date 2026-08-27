import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./metric-with-comparison-D-GST0_X.js";var r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{t(),r={title:`Packages/Premium Analytics/Widgets Toolkit/Components/MetricWithComparison`,component:n,tags:[`autodocs`],argTypes:{value:{control:`number`,description:`The current value to display`},previousValue:{control:`number`,description:`The previous value for comparison`},direction:{control:`select`,options:[`row`,`column`],description:`Layout direction`},fontSize:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`],description:`Font size token from WPDS`},invertDeltaColors:{control:`boolean`,description:`Invert colors (for metrics like bounce rate)`},hideDeltaOnZero:{control:`boolean`,description:`Hide delta when it is zero`},showAbsoluteDelta:{control:`boolean`,description:`Show absolute change instead of percentage`}}},i={args:{value:12345,dataFormat:{type:`number`}}},a={args:{value:15e3,previousValue:12e3,dataFormat:{type:`number`}}},o={args:{value:45678,previousValue:4e4,dataFormat:{type:`number`},direction:`row`}},s={args:{value:45678,previousValue:4e4,dataFormat:{type:`number`},direction:`column`}},c={args:{value:12345,previousValue:1e4,dataFormat:{type:`number`},fontSize:`xl`}},l={args:{value:12345,previousValue:1e4,dataFormat:{type:`number`},fontSize:`lg`}},u={args:{value:12345,previousValue:1e4,dataFormat:{type:`number`},fontSize:`sm`}},d={args:{value:1234567,previousValue:1e6,dataFormat:{type:`currency`,options:{useMultipliers:!0,decimals:1}}}},f={args:{value:.4523,previousValue:.38,dataFormat:{type:`percentage`,options:{decimals:1}}}},p={args:{value:1234.56,previousValue:1100.25,dataFormat:{type:`number`,options:{decimals:2}}}},m={args:{value:25,previousValue:35,dataFormat:{type:`percentage`,options:{decimals:1}},invertDeltaColors:!0}},h={args:{value:8e3,previousValue:1e4,dataFormat:{type:`number`}}},g={args:{value:1e4,previousValue:1e4,dataFormat:{type:`number`},hideDeltaOnZero:!0}},_={args:{value:15e3,previousValue:12e3,dataFormat:{type:`currency`},showAbsoluteDelta:!0}},v={args:{value:1234567,previousValue:1e6,dataFormat:{type:`currency`,options:{useMultipliers:!0,decimals:1}},direction:`column`,fontSize:`xl`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: 12345,
    dataFormat: {
      type: 'number'
    }
  }
}`,...i.parameters?.docs?.source},description:{story:`Default display with value only (no comparison)`,...i.parameters?.docs?.description}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 15000,
    previousValue: 12000,
    dataFormat: {
      type: 'number'
    }
  }
}`,...a.parameters?.docs?.source},description:{story:`With comparison showing percentage delta`,...a.parameters?.docs?.description}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 45678,
    previousValue: 40000,
    dataFormat: {
      type: 'number'
    },
    direction: 'row'
  }
}`,...o.parameters?.docs?.source},description:{story:`Horizontal layout (default)`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 45678,
    previousValue: 40000,
    dataFormat: {
      type: 'number'
    },
    direction: 'column'
  }
}`,...s.parameters?.docs?.source},description:{story:`Vertical layout, commonly used in chart overlays`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 12345,
    previousValue: 10000,
    dataFormat: {
      type: 'number'
    },
    fontSize: 'xl'
  }
}`,...c.parameters?.docs?.source},description:{story:`Extra large font size (default)`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 12345,
    previousValue: 10000,
    dataFormat: {
      type: 'number'
    },
    fontSize: 'lg'
  }
}`,...l.parameters?.docs?.source},description:{story:`Large font size`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: 12345,
    previousValue: 10000,
    dataFormat: {
      type: 'number'
    },
    fontSize: 'sm'
  }
}`,...u.parameters?.docs?.source},description:{story:`Small font size`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 1234567,
    previousValue: 1000000,
    dataFormat: {
      type: 'currency',
      options: {
        useMultipliers: true,
        decimals: 1
      }
    }
  }
}`,...d.parameters?.docs?.source},description:{story:`Currency format with compact notation`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0.4523,
    previousValue: 0.38,
    dataFormat: {
      type: 'percentage',
      options: {
        decimals: 1
      }
    }
  }
}`,...f.parameters?.docs?.source},description:{story:`Percentage format`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: 1234.56,
    previousValue: 1100.25,
    dataFormat: {
      type: 'number',
      options: {
        decimals: 2
      }
    }
  }
}`,...p.parameters?.docs?.source},description:{story:`Number format with decimals`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: 25,
    previousValue: 35,
    dataFormat: {
      type: 'percentage',
      options: {
        decimals: 1
      }
    },
    invertDeltaColors: true
  }
}`,...m.parameters?.docs?.source},description:{story:`Inverted delta colors for metrics where decrease is good`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    value: 8000,
    previousValue: 10000,
    dataFormat: {
      type: 'number'
    }
  }
}`,...h.parameters?.docs?.source},description:{story:`Negative change (value decreased)`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: 10000,
    previousValue: 10000,
    dataFormat: {
      type: 'number'
    },
    hideDeltaOnZero: true
  }
}`,...g.parameters?.docs?.source},description:{story:`Zero change - delta hidden`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    value: 15000,
    previousValue: 12000,
    dataFormat: {
      type: 'currency'
    },
    showAbsoluteDelta: true
  }
}`,..._.parameters?.docs?.source},description:{story:`Show absolute delta instead of percentage`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: 1234567,
    previousValue: 1000000,
    dataFormat: {
      type: 'currency',
      options: {
        useMultipliers: true,
        decimals: 1
      }
    },
    direction: 'column',
    fontSize: 'xl'
  }
}`,...v.parameters?.docs?.source},description:{story:`Column layout with currency - typical chart overlay`,...v.parameters?.docs?.description}}},y=[`Default`,`WithComparison`,`RowLayout`,`ColumnLayout`,`ExtraLargeSize`,`LargeSize`,`SmallSize`,`CurrencyFormat`,`PercentageFormat`,`NumberFormat`,`InvertedDeltaColors`,`NegativeChange`,`ZeroChangeHidden`,`AbsoluteDelta`,`ChartOverlayStyle`]}))();export{_ as AbsoluteDelta,v as ChartOverlayStyle,s as ColumnLayout,d as CurrencyFormat,i as Default,c as ExtraLargeSize,m as InvertedDeltaColors,l as LargeSize,h as NegativeChange,p as NumberFormat,f as PercentageFormat,o as RowLayout,u as SmallSize,a as WithComparison,g as ZeroChangeHidden,y as __namedExportsOrder,r as default};