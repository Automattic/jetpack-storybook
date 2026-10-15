import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./types-BRp4aAtL.js";import{n as r,r as i,t as a}from"./config-DtoUVCG7.js";var o,s,c,l,u,d=e((()=>{t(),i(),o={...a,title:`JS Packages/Charts Library/Charts/Geo Chart/Tooltips`,component:a.component},s={args:{...r,data:[[`Country`,`Revenue`],[`United States`,{v:1234567,f:`$1.23M`}],[`Canada`,{v:543210,f:`$543K`}],[`United Kingdom`,{v:789012,f:`$789K`}],[`Germany`,{v:456789,f:`$457K`}],[`France`,{v:321098,f:`$321K`}]]}},c={args:{...r,data:[[`Country`,`Orders`,{type:`string`,role:n.tooltip}],[`United States`,1e3,`1,000 orders (40% of total)`],[`Canada`,500,`500 orders (20% of total)`],[`United Kingdom`,450,`450 orders (18% of total)`],[`Germany`,400,`400 orders (16% of total)`],[`France`,150,`150 orders (6% of total)`]]}},l={args:{...r,data:[[`Country`,`Orders`,{type:`string`,role:n.tooltip,p:{html:!0}}],[`United States`,1e3,`Orders: <strong>1,000</strong><br/>Share: <strong>40%</strong>`],[`Canada`,500,`Orders: <strong>500</strong><br/>Share: <strong>20%</strong>`],[`United Kingdom`,450,`Orders: <strong>450</strong><br/>Share: <strong>18%</strong>`]]}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    data: [['Country', 'Revenue'], ['United States', {
      v: 1234567,
      f: '$1.23M'
    }], ['Canada', {
      v: 543210,
      f: '$543K'
    }], ['United Kingdom', {
      v: 789012,
      f: '$789K'
    }], ['Germany', {
      v: 456789,
      f: '$457K'
    }], ['France', {
      v: 321098,
      f: '$321K'
    }]]
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    data: [['Country', 'Orders', {
      type: 'string',
      role: GoogleDataTableColumnRoleType.tooltip
    }], ['United States', 1000, '1,000 orders (40% of total)'], ['Canada', 500, '500 orders (20% of total)'], ['United Kingdom', 450, '450 orders (18% of total)'], ['Germany', 400, '400 orders (16% of total)'], ['France', 150, '150 orders (6% of total)']]
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    data: [['Country', 'Orders', {
      type: 'string',
      role: GoogleDataTableColumnRoleType.tooltip,
      p: {
        html: true
      }
    }], ['United States', 1000, 'Orders: <strong>1,000</strong><br/>Share: <strong>40%</strong>'], ['Canada', 500, 'Orders: <strong>500</strong><br/>Share: <strong>20%</strong>'], ['United Kingdom', 450, 'Orders: <strong>450</strong><br/>Share: <strong>18%</strong>']]
  }
}`,...l.parameters?.docs?.source}}},u=[`FormattedValues`,`PlainText`,`HTML`]}));d();export{s as FormattedValues,l as HTML,c as PlainText,u as __namedExportsOrder,o as default,d as t};