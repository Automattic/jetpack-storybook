import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{In as t,Nn as n}from"./date-fns-BUjRnB2M.js";import{n as r,t as i}from"./date-zoom-out-BYzkXL6C.js";var a,o,s,c,l;e((()=>{n(),r(),a={title:`Packages/Premium Analytics/UI/DateZoomOut`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`Zooms back out to the window a widget zoomed in from, by the name it has there. The panel renders it beside the arrows only while the URL carries such a window.`}}},argTypes:{onZoomOut:{control:!1}},args:{onZoomOut:()=>{}}},o={args:{presetId:`last-30-days`,range:{from:new t(`2026-08-01T00:00:00.000+00:00`,`UTC`),to:new t(`2026-08-30T23:59:59.999+00:00`,`UTC`)}}},s={args:{presetId:`custom`,range:{from:new t(`2026-09-01T00:00:00.000+00:00`,`UTC`),to:new t(`2026-09-30T23:59:59.999+00:00`,`UTC`)}}},c={args:{...o.args,disabled:!0}},l=[`Preset`,`Custom`,`Disabled`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    presetId: 'last-30-days',
    range: {
      from: new TZDate('2026-08-01T00:00:00.000+00:00', 'UTC'),
      to: new TZDate('2026-08-30T23:59:59.999+00:00', 'UTC')
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`A preset names the window: the control reads its label.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    presetId: 'custom',
    range: {
      from: new TZDate('2026-09-01T00:00:00.000+00:00', 'UTC'),
      to: new TZDate('2026-09-30T23:59:59.999+00:00', 'UTC')
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`A hand-picked window is named by the period it covers.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Preset.args,
    disabled: true
  }
}`,...c.parameters?.docs?.source}}}}))();export{s as Custom,c as Disabled,o as Preset,l as __namedExportsOrder,a as default};