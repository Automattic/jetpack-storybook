import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{Po as r,ki as i,wg as a,zh as o}from"./iframe-Jo1QbMg9.js";import{n as s,t as c}from"./timestamp-control-CR3Fk-v_.js";var l=n({__namedExportsOrder:()=>S,_default:()=>m,changingValueExternally:()=>x,customTooltip:()=>y,decimalPlaces:()=>h,default:()=>f,disabled:()=>g,showTooltip:()=>v,withMarks:()=>_}),u,d,f,p,m,h,g,_,v,y,b,x,S,C=e((()=>{i(),u=t(a()),s(),d=o(),f={title:`Packages/VideoPress/Timestamp Control`,component:c},p=e=>(0,d.jsx)(c,{...e}),m=p.bind({}),m.args={label:`Video frame`,help:`Use the control to set timestamp of the video frame.`,max:3600*1e3*2,value:236125,wait:100,decimalPlaces:void 0,fineAdjustment:50,disabled:!1,autoHideTimeInput:!0,onChange:e=>{console.log({newTime:e})},onDebounceChange:e=>{console.log({newDebouncedTime:e})}},m.storyName=`Timestamp Control`,h=p.bind({}),h.args={value:3500,max:1e3*5,decimalPlaces:2},g=p.bind({}),g.args={max:3600*1e3*2,value:4543e3,disabled:!0},_=p.bind({}),_.args={value:3500,max:1e3*10,marksEvery:1e3,fineAdjustment:200},v=p.bind({}),v.args={value:8e4,max:1e3*100,renderTooltip:!0},y=p.bind({}),y.args={value:1e3*50,max:1e3*80,fineAdjustment:200,renderTooltip:e=>(0,d.jsxs)(`span`,{children:[e/1e3,` seconds`]})},b=e=>{let[t,n]=(0,u.useState)(e.value);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c,{...e,label:`TimestampControl component`,help:`The value is handled internally by the component.`,value:t,onDebounceChange:n}),(0,d.jsx)(`br`,{}),(0,d.jsx)(r,{label:`RangeControl component`,help:`The value is handled externally, and passed to the <TimestampControl /> above component.`,value:t,onChange:n,max:e.max,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})]})},x=b.bind({}),x.args={value:3500,max:1e3*5,decimalPlaces:2,wait:100},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <>
            <TimestampControl {...args} label="TimestampControl component" help="The value is handled internally by the component." value={value} onDebounceChange={setValue} />
            <br />
            <RangeControl label="RangeControl component" help="The value is handled externally, and passed to the <TimestampControl /> above component." value={value} onChange={setValue} max={args.max} __nextHasNoMarginBottom={true} __next40pxDefaultSize={true} />
        </>;
}`,...x.parameters?.docs?.source}}},S=[`_default`,`decimalPlaces`,`disabled`,`withMarks`,`showTooltip`,`customTooltip`,`changingValueExternally`]}));C();export{S as __namedExportsOrder,m as _default,x as changingValueExternally,y as customTooltip,h as decimalPlaces,f as default,g as disabled,C as n,v as showTooltip,l as t,_ as withMarks};