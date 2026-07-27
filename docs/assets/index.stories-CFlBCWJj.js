import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{n as r,t as i}from"./chart-decorator-C2-7hNPo.js";import{n as a,t as o}from"./sparkline-CFz_r90q.js";var s=e({Animation:()=>v,AspectRatio:()=>p,Dashboard:()=>_,Default:()=>d,EmptyData:()=>m,Responsive:()=>f,SinglePoint:()=>h,TwoPoints:()=>g,__namedExportsOrder:()=>y,default:()=>l}),c,l,u,d,f,p,m,h,g,_,v,y,b=t((()=>{o(),r(),c=n(),l={title:`JS Packages/Charts Library/Charts/Sparkline`,component:a,parameters:{layout:`centered`},decorators:[i],argTypes:{data:{control:`object`,description:`Array of numeric values to plot`,table:{category:`Data`}},width:{control:{type:`number`,min:50,max:400},description:`Width of the sparkline in pixels`,table:{category:`Dimensions`}},height:{control:{type:`number`,min:20,max:200},description:`Height of the sparkline in pixels`,table:{category:`Dimensions`}},color:{control:`color`,description:`Color for the line stroke`,table:{category:`Visual Style`}},strokeWidth:{control:{type:`number`,min:1,max:5},description:`Line stroke width in pixels`,table:{category:`Visual Style`}},withGradientFill:{control:`boolean`,description:`Whether to render gradient fill beneath the line`,table:{category:`Visual Style`}},gradient:{control:`object`,description:`Gradient configuration`,table:{category:`Visual Style`}},className:{control:`text`,description:`Additional CSS class name`,table:{category:`Styling`}},margin:{control:`object`,description:`Margin around the chart`,table:{category:`Dimensions`}},animation:{control:`boolean`,description:`Enable entry animation on initial render`,table:{category:`Visual Style`}}}},u=[10,15,12,18,22,25,23,28],d={args:{data:u,width:120,height:48,color:`#4CAF50`,containerHeight:`100px`}},f={args:{data:d.args?.data,color:`#9C27B0`}},p={args:{data:d.args?.data,color:`#9C27B0`,aspectRatio:.3}},m={args:{...d.args,data:[]}},h={args:{...d.args,data:[42],color:`#9C27B0`}},g={args:{...d.args,data:[10,20],color:`#3F51B5`}},_={render:()=>(0,c.jsx)(`div`,{style:{display:`flex`,gap:`24px`,flexWrap:`wrap`},children:[{label:`Speeding up`,value:28,data:[10,15,12,18,22,25,23,28],color:`#4CAF50`},{label:`Efficient`,value:90,data:[80,82,85,83,87,90,88,92],color:`#2196F3`},{label:`Unstable`,value:65,data:[50,75,45,80,40,85,55,65],color:`#FF9800`}].map(e=>(0,c.jsxs)(`div`,{style:{padding:`16px`,border:`1px solid #e0e0e0`,borderRadius:`8px`,minWidth:`200px`},children:[(0,c.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:`8px`},children:[(0,c.jsx)(`span`,{style:{fontSize:`14px`,color:`#666`},children:e.label}),(0,c.jsx)(`span`,{style:{fontSize:`18px`,fontWeight:`bold`},children:e.value})]}),(0,c.jsx)(a,{data:e.data,width:180,height:48,color:e.color})]},e.label))}),args:{containerHeight:`150px`}},v={args:{...d.args,animation:!0}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    width: 120,
    height: 48,
    color: '#4CAF50',
    containerHeight: '100px'
  }
}`,...d.parameters?.docs?.source},description:{story:`Basic sparkline with all controls available for customization.
Use the controls panel to experiment with colors, gradients, dimensions, and data.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    data: Default.args?.data,
    color: '#9C27B0'
  }
}`,...f.parameters?.docs?.source},description:{story:`Responsive sparkline that fills the container.
Drag the corner of the container to resize and see the sparkline adapt.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data: Default.args?.data,
    color: '#9C27B0',
    aspectRatio: 0.3
  }
}`,...p.parameters?.docs?.source},description:{story:`Sparkline with an aspect ratio.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: []
  }
}`,...m.parameters?.docs?.source},description:{story:`Empty data renders an empty container gracefully.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [42],
    color: '#9C27B0'
  }
}`,...h.parameters?.docs?.source},description:{story:`Single data point renders as a circle instead of a line.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [10, 20],
    color: '#3F51B5'
  }
}`,...g.parameters?.docs?.source},description:{story:`Two data points render as a minimal line segment.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const metrics = [{
      label: 'Speeding up',
      value: 28,
      data: [10, 15, 12, 18, 22, 25, 23, 28],
      color: '#4CAF50'
    }, {
      label: 'Efficient',
      value: 90,
      data: [80, 82, 85, 83, 87, 90, 88, 92],
      color: '#2196F3'
    }, {
      label: 'Unstable',
      value: 65,
      data: [50, 75, 45, 80, 40, 85, 55, 65],
      color: '#FF9800'
    }];
    return <div style={{
      display: 'flex',
      gap: '24px',
      flexWrap: 'wrap'
    }}>
                {metrics.map(metric => <div key={metric.label} style={{
        padding: '16px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        minWidth: '200px'
      }}>
                        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px'
        }}>
                            <span style={{
            fontSize: '14px',
            color: '#666'
          }}>{metric.label}</span>
                            <span style={{
            fontSize: '18px',
            fontWeight: 'bold'
          }}>{metric.value}</span>
                        </div>
                        <Sparkline data={metric.data} width={180} height={48} color={metric.color} />
                    </div>)}
            </div>;
  },
  args: {
    containerHeight: '150px'
  }
}`,..._.parameters?.docs?.source},description:{story:`Dashboard example showing sparklines in metric cards - a common real-world use case.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...v.parameters?.docs?.source},description:{story:`Sparkline with entry animation that creates a smooth rising effect.
The animation respects the user's prefers-reduced-motion setting for accessibility.`,...v.parameters?.docs?.description}}},y=[`Default`,`Responsive`,`AspectRatio`,`EmptyData`,`SinglePoint`,`TwoPoints`,`Dashboard`,`Animation`]}));b();export{v as Animation,p as AspectRatio,_ as Dashboard,d as Default,m as EmptyData,f as Responsive,h as SinglePoint,g as TwoPoints,y as __namedExportsOrder,l as default,b as n,s as t};