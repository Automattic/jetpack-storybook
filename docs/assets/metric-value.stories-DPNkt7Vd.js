import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,t as r}from"./metric-value-DApYDYrZ.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{n(),i=t(),a=[`USD`,`EUR`,`GBP`,`JPY`,`INR`,`BRL`],o={title:`Packages/Premium Analytics/Widgets Toolkit/Components/MetricValue`,component:r,tags:[`autodocs`],argTypes:{fontSize:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`]},color:{control:`select`,options:[`neutral`,`positive`,`negative`]}}},s={args:{value:1234567,dataFormat:{type:`number`}}},c={args:{value:1234.56,dataFormat:{type:`number`,options:{decimals:2}}}},l={render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:a.map(e=>(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`16px`},children:[(0,i.jsxs)(`span`,{style:{width:`80px`,fontWeight:`bold`},children:[e,`:`]}),(0,i.jsx)(r,{value:4567899.99,dataFormat:{type:`currency`,options:{useMultipliers:!0,decimals:1}},currencyCode:e})]},e))})},u={render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:a.map(e=>(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`16px`},children:[(0,i.jsxs)(`span`,{style:{width:`80px`,fontWeight:`bold`},children:[e,`:`]}),(0,i.jsx)(r,{value:45678.99,dataFormat:{type:`currency`},currencyCode:e})]},e))})},d={args:{value:87.45,dataFormat:{type:`average`,options:{decimals:2}}}},f={args:{value:.2345,dataFormat:{type:`percentage`,options:{decimals:2}}}},p={args:{value:-.15,dataFormat:{type:`percentage`,options:{decimals:1}}}},m={args:{value:12345,dataFormat:{type:`number`},fontSize:`sm`}},h={args:{value:12345,dataFormat:{type:`number`},fontSize:`lg`}},g={args:{value:12345,dataFormat:{type:`number`},fontSize:`xl`}},_={args:{value:12345,dataFormat:{type:`number`},color:`positive`}},v={args:{value:12345,dataFormat:{type:`number`},color:`negative`}},y={args:{value:12345,dataFormat:{type:`number`},color:`neutral`}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 1234567,
    dataFormat: {
      type: 'number'
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`Format value as a number`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 1234.56,
    dataFormat: {
      type: 'number',
      options: {
        decimals: 2
      }
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`Format value with decimal precision`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
            {currencyCodes.map(code => <div key={code} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
                    <span style={{
        width: '80px',
        fontWeight: 'bold'
      }}>{code}:</span>
                    <MetricValue value={4567899.99} dataFormat={{
        type: 'currency',
        options: {
          useMultipliers: true,
          decimals: 1
        }
      }} currencyCode={code} />
                </div>)}
        </div>
}`,...l.parameters?.docs?.source},description:{story:`Format currency with compact notation (K, M, B) across different locales`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
            {currencyCodes.map(code => <div key={code} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
                    <span style={{
        width: '80px',
        fontWeight: 'bold'
      }}>{code}:</span>
                    <MetricValue value={45678.99} dataFormat={{
        type: 'currency'
      }} currencyCode={code} />
                </div>)}
        </div>
}`,...u.parameters?.docs?.source},description:{story:`Multiple currency formats showing different locales and symbol positions`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 87.45,
    dataFormat: {
      type: 'average',
      options: {
        decimals: 2
      }
    }
  }
}`,...d.parameters?.docs?.source},description:{story:`Format value as an average`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0.2345,
    dataFormat: {
      type: 'percentage',
      options: {
        decimals: 2
      }
    }
  }
}`,...f.parameters?.docs?.source},description:{story:`Format value as a percentage`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: -0.15,
    dataFormat: {
      type: 'percentage',
      options: {
        decimals: 1
      }
    }
  }
}`,...p.parameters?.docs?.source},description:{story:`Format negative percentage value`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: 12345,
    dataFormat: {
      type: 'number'
    },
    fontSize: 'sm'
  }
}`,...m.parameters?.docs?.source},description:{story:`Small font size`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    value: 12345,
    dataFormat: {
      type: 'number'
    },
    fontSize: 'lg'
  }
}`,...h.parameters?.docs?.source},description:{story:`Large font size (default)`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: 12345,
    dataFormat: {
      type: 'number'
    },
    fontSize: 'xl'
  }
}`,...g.parameters?.docs?.source},description:{story:`Extra large font size`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    value: 12345,
    dataFormat: {
      type: 'number'
    },
    color: 'positive'
  }
}`,..._.parameters?.docs?.source},description:{story:`Green color for positive values`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: 12345,
    dataFormat: {
      type: 'number'
    },
    color: 'negative'
  }
}`,...v.parameters?.docs?.source},description:{story:`Red color for negative values`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 12345,
    dataFormat: {
      type: 'number'
    },
    color: 'neutral'
  }
}`,...y.parameters?.docs?.source},description:{story:`Neutral color (default)`,...y.parameters?.docs?.description}}},b=[`Number`,`NumberWithDecimals`,`CurrencyCompact`,`Currencies`,`Average`,`Percentage`,`PercentageNegative`,`SmallSize`,`LargeSize`,`ExtraLargeSize`,`PositiveColor`,`NegativeColor`,`NeutralColor`]}))();export{d as Average,u as Currencies,l as CurrencyCompact,g as ExtraLargeSize,h as LargeSize,v as NegativeColor,y as NeutralColor,s as Number,c as NumberWithDecimals,f as Percentage,p as PercentageNegative,_ as PositiveColor,m as SmallSize,b as __namedExportsOrder,o as default};