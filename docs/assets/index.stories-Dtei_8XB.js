import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{a as r,r as i}from"./src-CjuVbbrA.js";import{c as a,r as o,s,t as c}from"./chart-decorator-B1QyFBzV.js";import{F as l,P as u}from"./chart-scope-Dtq8zZHj.js";import{M as d,t as f}from"./providers-qgrr4eyK.js";import{O as p,k as m}from"./catalog-pointers-DxADWIHN.js";import{g as h,x as g}from"./sample-data-Cx3-uFO8.js";import{t as _}from"./stories-DaMFnKt7.js";import{n as v,t as y}from"./bar-list-chart-BmNDKYa7.js";var b=e({Animation:()=>D,AspectRatio:()=>T,CustomLabelComponent:()=>k,CustomValueComponent:()=>A,Default:()=>C,FixedDimensions:()=>w,MultiSeries:()=>E,__namedExportsOrder:()=>j,default:()=>S}),x,S,C,w,T,E,D,O,k,A,j,M=t((()=>{r(),p(),u(),f(),_(),v(),x=n(),S={title:`JS Packages/Charts Library/Charts/Bar List Chart`,component:y,parameters:{layout:`centered`},decorators:[c],argTypes:{...o,...a}},C={args:{...s,withTooltips:!0,data:g}},w={args:{...C.args,width:600,height:300}},T={args:{...C.args,aspectRatio:.3}},E={args:{...C.args,data:h}},D={args:{...C.args,animation:!0}},O=e=>{let{getElementStyles:t}=d(),n=t({index:1}).color;return(0,x.jsx)(y,{...e,options:{...e.options,labelComponent:({textProps:e,x:t,y:r,label:i,formatter:a})=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m,{cx:t+6,cy:r,r:8,fill:n}),(0,x.jsx)(l,{...e,textAnchor:`start`,x:t+24,y:r,fontWeight:500,children:a(i)})]})}})},k={args:{...C.args,data:g,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{xScale:{},yScale:{}}},render:e=>(0,x.jsx)(O,{...e})},A={args:{...C.args,data:h,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{xScale:{},yScale:{},valueComponent:({textProps:e,x:t,y:n,value:r,formatter:i,data:a,index:o})=>{let s=a[0].data[o].value,c=a[1].data[o].value,u=c===0?0:((s-c)/c*100).toFixed(0);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(l,{...e,textAnchor:`end`,x:t,y:n,dx:-50,fontWeight:500,children:i(r)}),(0,x.jsx)(l,{...e,textAnchor:`end`,x:t,y:n,dx:-10,fill:`#008A20`,fontWeight:500,children:`${Number(u)>0?`+`:``}${u}%`})]})},valueFormatter:e=>`$${i(e)}`}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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