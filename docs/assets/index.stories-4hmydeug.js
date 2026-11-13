import{n as e,o as t,r as n}from"./rolldown-runtime-DAXXjFlN.js";import{t as r}from"./react-_iuu1rfF.js";import{n as i,t as a}from"./clsx-DtTNkXd0.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{o as s}from"./chart-scope-C11oWBRj.js";import{r as c,t as l}from"./providers-BmYhqcjs.js";import{t as u}from"./line-chart-CT_2SXRD.js";import{l as d,n as f,s as p,t as m}from"./chart-decorator-CKEhQmA5.js";import{r as h,t as g}from"./with-responsive-D1ysz-Py.js";import{t as _}from"./line-chart-B9QVARHg.js";var v,y,b=e((()=>{v=`_sparkline_1wmvj_1`,y={sparkline:v,"sparkline--empty":`_sparkline--empty_1wmvj_13`}})),x,S,C,w,T,E,D,O,k=e((()=>{i(),x=t(r(),1),l(),_(),g(),b(),S=o(),C=100,w=40,T=(e,t,n)=>{let r=new Date(2e3,0,1);return[{label:`sparkline`,data:e.map((e,t)=>({date:new Date(r.getTime()+t*864e5),value:e})),options:{stroke:t,seriesLineStyle:n?{strokeWidth:n}:void 0}}]},E=(0,x.forwardRef)(({data:e,width:t=C,height:n=w,color:r,strokeWidth:i,withGradientFill:o=!0,gradient:l,className:d,chartId:f,margin:p,animation:m},h)=>{let g=c(),_=(0,x.useContext)(s),v=g.sparkline?.strokeWidth??1.5,b=i??v,E=(0,x.useMemo)(()=>!e||e.length===0?[]:T(e,r,b),[e,r,b]),D=(0,x.useMemo)(()=>{let e=g.sparkline?.margin??{top:2,right:2,bottom:2,left:2},t=p??e;return{...e,...t}},[p,g.sparkline?.margin]),O=(0,x.useMemo)(()=>!l||E.length===0?E:E.map(e=>({...e,options:{...e.options,gradient:{from:l.from||r||`#000000`,to:l.to||`#ffffff`,fromOpacity:l.fromOpacity??.5,toOpacity:l.toOpacity??0}}})),[E,l,r]);if(!e||e.length===0)return(0,S.jsx)(`div`,{ref:h,className:a(`sparkline`,y.sparkline,y[`sparkline--empty`],d),style:{width:t,height:n},"data-testid":`sparkline-empty`});if(e.length===1){let e=t/2,i=n/2,o=r||_?.getElementStyles({index:0}).color||`#000000`;return(0,S.jsx)(`div`,{ref:h,className:a(`sparkline`,y.sparkline,y[`sparkline--single-point`],d),style:{width:t,height:n},"data-testid":`sparkline-single-point`,children:(0,S.jsx)(`svg`,{width:t,height:n,"aria-hidden":`true`,children:(0,S.jsx)(`circle`,{cx:e,cy:i,r:b*1.5,fill:o})})})}return(0,S.jsx)(`div`,{ref:h,className:a(`sparkline`,y.sparkline,d),"data-testid":`sparkline`,children:(0,S.jsx)(u,{data:O,width:t,height:n,margin:D,chartId:f,withGradientFill:o,withTooltips:!1,showLegend:!1,gridVisibility:`none`,options:{axis:{x:{display:!1},y:{display:!1}}},curveType:`monotone`,animation:m})})}),E.displayName=`SparklineComponent`,D=E,D.displayName=`SparklineUnresponsive`,O=h(D)})),A=e((()=>{k()})),j=n({Animation:()=>H,AspectRatio:()=>L,Dashboard:()=>V,Default:()=>F,EmptyData:()=>R,Responsive:()=>I,SinglePoint:()=>z,TwoPoints:()=>B,__namedExportsOrder:()=>U,default:()=>N}),M,N,P,F,I,L,R,z,B,V,H,U,W=e((()=>{A(),f(),p(),M=o(),N={title:`JS Packages/Charts Library/Charts/Sparkline`,component:O,parameters:{layout:`centered`},decorators:[m],argTypes:{data:{control:`object`,description:`Array of numeric values to plot`,table:{category:`Data`}},width:{control:{type:`number`,min:50,max:400},description:`Width of the sparkline in pixels`,table:{category:`Dimensions`}},height:{control:{type:`number`,min:20,max:200},description:`Height of the sparkline in pixels`,table:{category:`Dimensions`}},color:{control:`color`,description:`Color for the line stroke`,table:{category:`Visual Style`}},strokeWidth:{control:{type:`number`,min:1,max:5},description:`Line stroke width in pixels`,table:{category:`Visual Style`}},withGradientFill:{control:`boolean`,description:`Whether to render gradient fill beneath the line`,table:{category:`Visual Style`}},gradient:{control:`object`,description:`Gradient configuration`,table:{category:`Visual Style`}},className:{control:`text`,description:`Additional CSS class name`,table:{category:`Styling`}},margin:{control:`object`,description:`Margin around the chart`,table:{category:`Dimensions`}},animation:{control:`boolean`,description:`Enable entry animation on initial render`,table:{category:`Visual Style`}},...d}},P=[10,15,12,18,22,25,23,28],F={args:{data:P,width:120,height:48,containerHeight:`100px`}},I={args:{data:F.args?.data,color:`#9C27B0`}},L={args:{data:F.args?.data,color:`#9C27B0`,aspectRatio:.3}},R={args:{...F.args,data:[]}},z={args:{...F.args,data:[42],color:`#9C27B0`}},B={args:{...F.args,data:[10,20],color:`#3F51B5`}},V={render:()=>(0,M.jsx)(`div`,{style:{display:`flex`,gap:`24px`,flexWrap:`wrap`},children:[{label:`Speeding up`,value:28,data:[10,15,12,18,22,25,23,28],color:`#4CAF50`},{label:`Efficient`,value:90,data:[80,82,85,83,87,90,88,92],color:`#2196F3`},{label:`Unstable`,value:65,data:[50,75,45,80,40,85,55,65],color:`#FF9800`}].map(e=>(0,M.jsxs)(`div`,{style:{padding:`16px`,border:`1px solid #e0e0e0`,borderRadius:`8px`,minWidth:`200px`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:`8px`},children:[(0,M.jsx)(`span`,{style:{fontSize:`14px`,color:`#666`},children:e.label}),(0,M.jsx)(`span`,{style:{fontSize:`18px`,fontWeight:`bold`},children:e.value})]}),(0,M.jsx)(O,{data:e.data,width:180,height:48,color:e.color})]},e.label))}),args:{containerHeight:`150px`}},H={args:{...F.args,animation:!0}},U=[`Default`,`Responsive`,`AspectRatio`,`EmptyData`,`SinglePoint`,`TwoPoints`,`Dashboard`,`Animation`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    width: 120,
    height: 48,
    containerHeight: '100px'
  }
}`,...F.parameters?.docs?.source},description:{story:`Basic sparkline with all controls available for customization.
Use the controls panel to experiment with colors, gradients, dimensions, and data.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    data: Default.args?.data,
    color: '#9C27B0'
  }
}`,...I.parameters?.docs?.source},description:{story:`Responsive sparkline that fills the container.
Drag the corner of the container to resize and see the sparkline adapt.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    data: Default.args?.data,
    color: '#9C27B0',
    aspectRatio: 0.3
  }
}`,...L.parameters?.docs?.source},description:{story:`Sparkline with an aspect ratio.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: []
  }
}`,...R.parameters?.docs?.source},description:{story:`Empty data renders an empty container gracefully.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [42],
    color: '#9C27B0'
  }
}`,...z.parameters?.docs?.source},description:{story:`Single data point renders as a circle instead of a line.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [10, 20],
    color: '#3F51B5'
  }
}`,...B.parameters?.docs?.source},description:{story:`Two data points render as a minimal line segment.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:`Dashboard example showing sparklines in metric cards - a common real-world use case.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...H.parameters?.docs?.source},description:{story:`Sparkline with entry animation that creates a smooth rising effect.
The animation respects the user's prefers-reduced-motion setting for accessibility.`,...H.parameters?.docs?.description}}}}));W();export{H as Animation,L as AspectRatio,V as Dashboard,F as Default,R as EmptyData,I as Responsive,z as SinglePoint,B as TwoPoints,U as __namedExportsOrder,N as default,W as n,j as t};