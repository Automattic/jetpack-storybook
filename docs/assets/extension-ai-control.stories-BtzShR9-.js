import{n as e}from"./chunk-zsgVPwQN.js";import{px as t}from"./iframe-DtJFNbbb.js";import{n,t as r}from"./ai-control-DVb6I8uj.js";var i,a,o,s,c,l,u,d;e((()=>{r(),i=t(),{action:a}=__STORYBOOK_MODULE_ACTIONS__,{useArgs:o}=__STORYBOOK_MODULE_PREVIEW_API__,s={title:`JS Packages/AI Client/AI Control/Extension AI Control`,component:n,decorators:[e=>(0,i.jsx)(`div`,{style:{backgroundColor:`white`},children:(0,i.jsx)(e,{})})],argTypes:{state:{control:{type:`select`},options:[`init`,`requesting`,`suggesting`,`done`,`error`]},error:{control:{type:`text`}},requestsRemaining:{control:{type:`number`}}},parameters:{controls:{exclude:/on[A-Z].*/}}},c=e=>{let[{value:t},r,a]=o(),s=t=>{r({value:t}),e?.onChange?.(t)},c=()=>{r({state:`requesting`,error:null,value:``,placeholder:t}),setTimeout(()=>{r({state:`suggesting`}),setTimeout(()=>{r({state:`done`})},3e3)},1e3),e?.onSend?.(t)},l=()=>{r({state:`done`,error:null}),e?.onStop?.()},u=()=>{a(),e?.onClose?.(),a()},d=()=>{a(),e?.onUndo?.(),a()},f=()=>{e?.onUpgrade?.()};return(0,i.jsx)(n,{...e,onChange:s,onSend:c,onStop:l,onClose:u,onUndo:d,onUpgrade:f,value:e?.value??t})},l={value:``,placeholder:`Placeholder`,showButtonLabels:!0,disabled:!1,isTransparent:!1,state:`init`,showGuideLine:!1,error:null,requestsRemaining:null,showUpgradeMessage:!1,showFairUsageMessage:!1,onChange:a(`onChange`),onSend:a(`onSend`),onStop:a(`onStop`),onClose:a(`onClose`),onUndo:a(`onUndo`),onUpgrade:a(`onUpgrade`)},u=c.bind({}),u.args=l,u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs, resetArgs] = useArgs();
  const handleChange = (newValue: string) => {
    updateArgs({
      value: newValue
    });
    args?.onChange?.(newValue);
  };
  const handleSend = () => {
    updateArgs({
      state: 'requesting',
      error: null,
      value: '',
      placeholder: value
    });
    setTimeout(() => {
      updateArgs({
        state: 'suggesting'
      });
      setTimeout(() => {
        updateArgs({
          state: 'done'
        });
      }, 3000);
    }, 1000);
    args?.onSend?.(value);
  };
  const handleStop = () => {
    updateArgs({
      state: 'done',
      error: null
    });
    args?.onStop?.();
  };
  const handleClose = () => {
    resetArgs();
    args?.onClose?.();
    resetArgs();
  };
  const handleUndo = () => {
    resetArgs();
    args?.onUndo?.();
    resetArgs();
  };
  const handleUpgrade = () => {
    args?.onUpgrade?.();
  };
  return <ExtensionAIControl {...args} onChange={handleChange} onSend={handleSend} onStop={handleStop} onClose={handleClose} onUndo={handleUndo} onUpgrade={handleUpgrade} value={args?.value ?? value} />;
}`,...u.parameters?.docs?.source}}},d=[`Default`]}))();export{u as Default,d as __namedExportsOrder,s as default};