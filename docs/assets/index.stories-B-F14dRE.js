import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{a as r,r as i}from"./src-CF-XETB-.js";import{A as a,j as o}from"./chart-scope-BkPnRtVC.js";import{A as s,t as c}from"./providers-BZgWIKD3.js";import{D as l,O as u}from"./esm-BiA-B_9l.js";import{c as d,r as f,s as p,t as m}from"./chart-decorator-C6kySI8o.js";import{g as h,x as g}from"./sample-data-Cx3-uFO8.js";import{t as _}from"./stories-BA2T-O8o.js";import{n as v,t as y}from"./bar-list-chart-gaKXsn0F.js";var b=e({Animation:()=>D,AspectRatio:()=>T,CustomLabelComponent:()=>k,CustomValueComponent:()=>A,Default:()=>C,FixedDimensions:()=>w,MultiSeries:()=>E,__namedExportsOrder:()=>j,default:()=>S}),x,S,C,w,T,E,D,O,k,A,j,M=t((()=>{r(),l(),a(),c(),_(),v(),x=n(),S={title:`JS Packages/Charts Library/Charts/Bar List Chart`,component:y,parameters:{layout:`centered`},decorators:[m],argTypes:{...f,...d}},C={args:{...p,withTooltips:!0,data:g}},w={args:{...C.args,width:600,height:300}},T={args:{...C.args,aspectRatio:.3}},E={args:{...C.args,data:h}},D={args:{...C.args,animation:!0}},O=e=>{let{getElementStyles:t}=s(),n=t({index:1}).color;return(0,x.jsx)(y,{...e,options:{...e.options,labelComponent:({textProps:e,x:t,y:r,label:i,formatter:a})=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(u,{cx:t+6,cy:r,r:8,fill:n}),(0,x.jsx)(o,{...e,textAnchor:`start`,x:t+24,y:r,fontWeight:500,children:a(i)})]})}})},k={args:{...C.args,data:g,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{xScale:{},yScale:{}}},render:e=>(0,x.jsx)(O,{...e})},A={args:{...C.args,data:h,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{xScale:{},yScale:{},valueComponent:({textProps:e,x:t,y:n,value:r,formatter:i,data:a,index:s})=>{let c=a[0].data[s].value,l=a[1].data[s].value,u=l===0?0:((c-l)/l*100).toFixed(0);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o,{...e,textAnchor:`end`,x:t,y:n,dx:-50,fontWeight:500,children:i(r)}),(0,x.jsx)(o,{...e,textAnchor:`end`,x:t,y:n,dx:-10,fill:`#008A20`,fontWeight:500,children:`${Number(u)>0?`+`:``}${u}%`})]})},valueFormatter:e=>`$${i(e)}`}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    withTooltips: true,
    data: salesByProduct
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 600,
    height: 300
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.3
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByChannel
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByProduct,
    width: 450,
    margin: {
      top: 0,
      right: 100,
      bottom: 0,
      left: 0
    },
    options: {
      xScale: {},
      yScale: {}
    }
  },
  render: args => <BarListChartWithCircleLabels {...args} />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByChannel,
    width: 450,
    margin: {
      top: 0,
      right: 100,
      bottom: 0,
      left: 0
    },
    options: {
      xScale: {},
      yScale: {},
      valueComponent: ({
        textProps,
        x,
        y,
        value,
        formatter,
        data,
        index
      }) => {
        const currentValue = data[0].data[index].value;
        const previousValue = data[1].data[index].value;
        const percentage = previousValue === 0 ? 0 : ((currentValue - previousValue) / previousValue * 100).toFixed(0);
        return <>
                        <Text {...textProps} textAnchor="end" x={x} y={y} dx={-50} fontWeight={500}>
                            {formatter(value)}
                        </Text>
                        <Text {...textProps} textAnchor="end" x={x} y={y} dx={-10} fill="#008A20" fontWeight={500}>
                            {\`\${Number(percentage) > 0 ? '+' : ''}\${percentage}%\`}
                        </Text>
                    </>;
      },
      valueFormatter: (value: number) => \`$\${formatNumberCompact(value)}\`
    }
  }
}`,...A.parameters?.docs?.source}}},j=[`Default`,`FixedDimensions`,`AspectRatio`,`MultiSeries`,`Animation`,`CustomLabelComponent`,`CustomValueComponent`]}));M();export{D as Animation,T as AspectRatio,k as CustomLabelComponent,A as CustomValueComponent,C as Default,w as FixedDimensions,E as MultiSeries,j as __namedExportsOrder,S as default,M as n,b as t};