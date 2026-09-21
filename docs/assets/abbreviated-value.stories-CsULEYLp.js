import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,r}from"./abbreviated-value-Cb8r2CAN.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),a={title:`Packages/Premium Analytics/Widgets Toolkit/Components/AbbreviatedValue`,component:n,tags:[`autodocs`]},o={args:{value:18432,dataFormat:{type:`number`,options:{useMultipliers:!0}}}},s={args:{value:432,dataFormat:{type:`number`,options:{useMultipliers:!0}}}},c={args:{value:432,dataFormat:{type:`number`,options:{useMultipliers:!0}},restored:`432 opens`}},l={render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[999,1234,54321,99950,234567,1234567,123456789].map(e=>(0,i.jsx)(n,{value:e,dataFormat:{type:`number`,options:{useMultipliers:!0}}},e))})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 18432,
    dataFormat: {
      type: 'number',
      options: {
        useMultipliers: true
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`Hover the compact figure to see the exact one.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 432,
    dataFormat: {
      type: 'number',
      options: {
        useMultipliers: true
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`Nothing was shortened, so there is no tooltip.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 432,
    dataFormat: {
      type: 'number',
      options: {
        useMultipliers: true
      }
    },
    restored: '432 opens'
  }
}`,...c.parameters?.docs?.source},description:{story:"`restored` names the unit the figure leaves out, and keeps the tooltip on a\nfigure that was never shortened.",...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
            {[999, 1234, 54321, 99950, 234567, 1234567, 123456789].map(value => <AbbreviatedValue key={value} value={value} dataFormat={{
      type: 'number',
      options: {
        useMultipliers: true
      }
    }} />)}
        </div>
}`,...l.parameters?.docs?.source},description:{story:`The compact rule across magnitudes: full below 1,000, one decimal while the
mantissa has two digits, none from three.`,...l.parameters?.docs?.description}}},u=[`Compact`,`Plain`,`Labelled`,`Scale`]}))();export{o as Compact,c as Labelled,s as Plain,l as Scale,u as __namedExportsOrder,a as default};