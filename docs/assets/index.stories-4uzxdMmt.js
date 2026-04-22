import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{$m as n,Mr as r,Ph as i,Pm as a,Qm as o,Ym as s,eh as c,fh as l,mi as u,pm as d}from"./iframe-Dw44g2f3.js";import{a as f,t as p}from"./shared-extension-utils-D_Xtj5Iu.js";var m,h=e((()=>{m={"message-box-control":`_message-box-control_pregs_90`}}));function g({label:e=b(),placeholder:t=y(),message:n=``,onChange:r,disabled:i,maxLength:a,analyticsData:o=null}){let{recordEvent:s}=f(),d=(0,_.useRef)(!0),p=a-n.length;return(0,v.jsx)(u,{value:n,label:e,onChange:(0,_.useCallback)(e=>{r(e),d.current&&=(s(`jetpack_social_custom_message_changed`,o),!1)},[o,d,r,s]),disabled:i,maxLength:a,placeholder:t,rows:4,help:l(c(`%d character remaining`,`%d characters remaining`,p,`jetpack-publicize-pkg`),p),__nextHasNoMarginBottom:!0,className:m[`message-box-control`]})}var _,v,y,b,x=e((()=>{p(),r(),o(),_=t(i()),h(),v=s(),y=()=>n(`Write a custom message for your social audience here. This message will override your social post content.`,`jetpack-publicize-pkg`),b=()=>n(`Message`,`jetpack-publicize-pkg`)})),S,C,w,T,E,D,O,k,A;e((()=>{d(),x(),S=s(),C={title:`Packages/Publicize/Message Box Control`,component:g,argTypes:{onChange:{action:`changed`},maxLength:{control:{type:`number`,min:10,max:500}},disabled:{control:`boolean`},analyticsData:{control:`object`},label:{control:`text`},placeholder:{control:`text`}}},w=e=>{let[t,n]=(0,a.useState)(e.message);return(0,S.jsx)(g,{message:t,onChange:(0,a.useCallback)(t=>{n(t),e.onChange(t)},[e]),disabled:e.disabled,maxLength:e.maxLength,analyticsData:e.analyticsData,label:e.label,placeholder:e.placeholder})},T={message:`Check out my latest blog post!`,maxLength:280,disabled:!1,analyticsData:{location:`storybook`}},E=w.bind({}),E.args=T,D=w.bind({}),D.args={...T,message:``},O=w.bind({}),O.args={...T,disabled:!0},k=w.bind({}),k.args={...T,message:``,label:`Custom Social Message`,placeholder:`Type your personalized social media post here...`},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`(args: MessageBoxControlProps) => {
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