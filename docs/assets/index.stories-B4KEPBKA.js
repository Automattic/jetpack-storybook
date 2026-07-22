import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{a as r,r as i}from"./src-B1Hf-orG.js";import{o as a,s as o}from"./esm-CHWNafaw.js";import{r as s,t as c}from"./providers-D8kYWlIB.js";import{I as l,L as u}from"./esm-D4bKXU70.js";import{c as d,r as f,s as p,t as m}from"./chart-decorator-CJF4qQns.js";import{g as h,x as g}from"./sample-data-Cx3-uFO8.js";import{t as _}from"./stories-DtEB96NP.js";import{n as v,t as y}from"./bar-list-chart-C1KajL-Z.js";var b=e({Animation:()=>D,AspectRatio:()=>T,CustomLabelComponent:()=>O,CustomValueComponent:()=>k,Default:()=>C,FixedDimensions:()=>w,MultiSeries:()=>E,__namedExportsOrder:()=>A,default:()=>S}),x,S,C,w,T,E,D,O,k,A,j=t((()=>{r(),a(),l(),c(),_(),v(),x=n(),S={title:`JS Packages/Charts Library/Charts/Bar List Chart`,component:y,parameters:{layout:`centered`},decorators:[m],argTypes:{...f,...d}},C={args:{...p,withTooltips:!0,data:g}},w={args:{...C.args,width:600,height:300}},T={args:{...C.args,aspectRatio:.3}},E={args:{...C.args,data:h}},D={args:{...C.args,animation:!0}},O={args:{...C.args,data:g,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{xScale:{},yScale:{},labelComponent:({textProps:e,x:t,y:n,label:r,formatter:i})=>{let a=s().colors[1];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o,{cx:t+6,cy:n,r:8,fill:a}),(0,x.jsx)(u,{...e,textAnchor:`start`,x:t+24,y:n,fontWeight:500,children:i(r)})]})}}}},k={args:{...C.args,data:h,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{xScale:{},yScale:{},valueComponent:({textProps:e,x:t,y:n,value:r,formatter:i,data:a,index:o})=>{let s=a[0].data[o].value,c=a[1].data[o].value,l=c===0?0:((s-c)/c*100).toFixed(0);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(u,{...e,textAnchor:`end`,x:t,y:n,dx:-50,fontWeight:500,children:i(r)}),(0,x.jsx)(u,{...e,textAnchor:`end`,x:t,y:n,dx:-10,fill:`#008A20`,fontWeight:500,children:`${Number(l)>0?`+`:``}${l}%`})]})},valueFormatter:e=>`$${i(e)}`}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
      yScale: {},
      labelComponent: ({
        textProps,
        x,
        y,
        label,
        formatter
      }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const theme = useGlobalChartsTheme();
        const circleColor = theme.colors[1]; // Use second theme color for contrast

        return <>
                        <Circle cx={x + 6} cy={y} r={8} fill={circleColor} />
                        <Text {...textProps} textAnchor="start" x={x + 24} y={y} fontWeight={500}>
                            {formatter(label)}
                        </Text>
                    </>;
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A=[`Default`,`FixedDimensions`,`AspectRatio`,`MultiSeries`,`Animation`,`CustomLabelComponent`,`CustomValueComponent`]}));j();export{D as Animation,T as AspectRatio,O as CustomLabelComponent,k as CustomValueComponent,C as Default,w as FixedDimensions,E as MultiSeries,A as __namedExportsOrder,S as default,j as n,b as t};