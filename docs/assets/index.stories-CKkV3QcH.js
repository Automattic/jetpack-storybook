import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./react-Wx6hiPly.js";import{n as r,o as i,r as a,t as o}from"./build-module-NIOqsuq1.js";import{t as s}from"./jsx-runtime-GmyBfqKJ.js";import{t as c,w as l}from"./build-module-BQs0g2sp.js";import{t as u,w as d}from"./build-module-BwcCzQhQ.js";import{a as f,t as p}from"./shared-extension-utils-Ci8krKdr.js";var m,h=e((()=>{m={"message-box-control":`_message-box-control_pregs_90`}}));function g({label:e=b(),placeholder:t=y(),message:n=``,onChange:r,disabled:o,maxLength:s,analyticsData:c=null}){let{recordEvent:l}=f(),u=(0,_.useRef)(!0),p=s-n.length;return(0,v.jsx)(d,{value:n,label:e,onChange:(0,_.useCallback)(e=>{r(e),u.current&&=(l(`jetpack_social_custom_message_changed`,c),!1)},[c,u,r,l]),disabled:o,maxLength:s,placeholder:t,rows:4,help:i(a(`%d character remaining`,`%d characters remaining`,p,`jetpack-publicize-pkg`),p),__nextHasNoMarginBottom:!0,className:m[`message-box-control`]})}var _,v,y,b,x=e((()=>{p(),u(),o(),_=t(n()),h(),v=s(),y=()=>r(`Write a custom message for your social audience here. This message will override your social post content.`,`jetpack-publicize-pkg`),b=()=>r(`Message`,`jetpack-publicize-pkg`)})),S,C,w,T,E,D,O,k,A;e((()=>{c(),x(),S=s(),C={title:`Packages/Publicize/Message Box Control`,component:g,argTypes:{onChange:{action:`changed`},maxLength:{control:{type:`number`,min:10,max:500}},disabled:{control:`boolean`},analyticsData:{control:`object`},label:{control:`text`},placeholder:{control:`text`}}},w=e=>{let[t,n]=(0,l.useState)(e.message);return(0,S.jsx)(g,{message:t,onChange:(0,l.useCallback)(t=>{n(t),e.onChange(t)},[e]),disabled:e.disabled,maxLength:e.maxLength,analyticsData:e.analyticsData,label:e.label,placeholder:e.placeholder})},T={message:`Check out my latest blog post!`,maxLength:280,disabled:!1,analyticsData:{location:`storybook`}},E=w.bind({}),E.args=T,D=w.bind({}),D.args={...T,message:``},O=w.bind({}),O.args={...T,disabled:!0},k=w.bind({}),k.args={...T,message:``,label:`Custom Social Message`,placeholder:`Type your personalized social media post here...`},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`(args: MessageBoxControlProps) => {
  const [message, setMessage] = useState(args.message);
  const handleChange = useCallback((newMessage: string) => {
    setMessage(newMessage);
    args.onChange(newMessage);
  }, [args]);
  return <MessageBoxControl message={message} onChange={handleChange} disabled={args.disabled} maxLength={args.maxLength} analyticsData={args.analyticsData} label={args.label} placeholder={args.placeholder} />;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`(args: MessageBoxControlProps) => {
  const [message, setMessage] = useState(args.message);
  const handleChange = useCallback((newMessage: string) => {
    setMessage(newMessage);
    args.onChange(newMessage);
  }, [args]);
  return <MessageBoxControl message={message} onChange={handleChange} disabled={args.disabled} maxLength={args.maxLength} analyticsData={args.analyticsData} label={args.label} placeholder={args.placeholder} />;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`(args: MessageBoxControlProps) => {
  const [message, setMessage] = useState(args.message);
  const handleChange = useCallback((newMessage: string) => {
    setMessage(newMessage);
    args.onChange(newMessage);
  }, [args]);
  return <MessageBoxControl message={message} onChange={handleChange} disabled={args.disabled} maxLength={args.maxLength} analyticsData={args.analyticsData} label={args.label} placeholder={args.placeholder} />;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`(args: MessageBoxControlProps) => {
  const [message, setMessage] = useState(args.message);
  const handleChange = useCallback((newMessage: string) => {
    setMessage(newMessage);
    args.onChange(newMessage);
  }, [args]);
  return <MessageBoxControl message={message} onChange={handleChange} disabled={args.disabled} maxLength={args.maxLength} analyticsData={args.analyticsData} label={args.label} placeholder={args.placeholder} />;
}`,...k.parameters?.docs?.source}}},A=[`Default`,`Empty`,`Disabled`,`CustomLabels`]}))();export{k as CustomLabels,E as Default,O as Disabled,D as Empty,A as __namedExportsOrder,C as default};