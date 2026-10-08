import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{s as r}from"./chart-scope-C9ZIQobb.js";import{t as i}from"./providers-BVmJPEm5.js";import{r as a}from"./bounded-tooltip-DhO9RUfi.js";import{t as o}from"./tooltip-VcQBElAg.js";var s=e({Default:()=>u,Positioned:()=>d,Unstyled:()=>f,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p,m=t((()=>{i(),o(),c=n(),l={title:`JS Packages/Charts Library/Components/TooltipBox`,component:a,parameters:{layout:`centered`,docs:{description:{component:"The chart tooltip box: the dark surface every chart tooltip draws. It does not position itself, so place it with `style` or a wrapper. Use it to draw a tooltip outside a visx `XYChart`; inside one, use `XYChartTooltip`. Set `unstyled` to drop the surface. Inside a chart's `renderTooltip`, return content only; the chart draws the box."}}},decorators:[e=>(0,c.jsx)(r,{children:(0,c.jsx)(e,{})})],args:{children:`Monthly Sales: 4,200`}},u={},d={render:e=>(0,c.jsx)(`div`,{style:{position:`relative`,width:300,height:200,border:`1px dashed #999`},children:(0,c.jsx)(a,{...e,style:{position:`absolute`,left:100,top:60}})}),parameters:{docs:{description:{story:"The box sets no position, so the caller places it with `style`."}}}},f={args:{unstyled:!0,style:{padding:`12px`,background:`#fff`,color:`#1e1e1e`,border:`1px solid #ddd`,borderRadius:`8px`}},parameters:{docs:{description:{story:"`unstyled` drops the surface, so the caller draws the whole box. Here it draws a light card."}}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    position: 'relative',
    width: 300,
    height: 200,
    border: '1px dashed #999'
  }}>
            <TooltipBox {...args} style={{
      position: 'absolute',
      left: 100,
      top: 60
    }} />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'The box sets no position, so the caller places it with \`style\`.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    unstyled: true,
    style: {
      padding: '12px',
      background: '#fff',
      color: '#1e1e1e',
      border: '1px solid #ddd',
      borderRadius: '8px'
    }
  },
  parameters: {
    docs: {
      description: {
        story: '\`unstyled\` drops the surface, so the caller draws the whole box. Here it draws a light card.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Positioned`,`Unstyled`]}));m();export{u as Default,d as Positioned,f as Unstyled,p as __namedExportsOrder,l as default,s as n,m as t};