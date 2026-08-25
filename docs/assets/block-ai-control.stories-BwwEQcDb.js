import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{t as n,z as r}from"./build-module-uT9hyUeO.js";import{l as i,r as a,t as o,u as s}from"./message-CH_WVlaE.js";import{i as c,t as l}from"./ai-control-CCUIvi_C.js";var u,d,f,p,m,h,g,_;e((()=>{n(),s(),l(),u=t(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,{useArgs:f}=__STORYBOOK_MODULE_PREVIEW_API__,p={title:`JS Packages/AI Client/AI Control/Block AI Control`,component:c,decorators:[e=>(0,u.jsx)(`div`,{style:{backgroundColor:`white`},children:(0,u.jsx)(e,{})})],argTypes:{state:{control:{type:`select`},options:[`init`,`requesting`,`suggesting`,`done`,`error`]},error:{control:{type:`select`},options:[`None`,`Error notice`],mapping:{None:null,"Error notice":(0,u.jsx)(r,{status:`error`,isDismissible:!0,children:`Error message`})}},customFooter:{control:{type:`select`},options:[`None`,`Guideline message`,`Error message`,`Upgrade message`],mapping:{None:null,"Guideline message":(0,u.jsx)(a,{}),"Error message":(0,u.jsx)(o,{onTryAgainClick:d(`onTryAgainClick`),onUpgradeClick:d(`onUpgradeClick`)}),"Upgrade message":(0,u.jsx)(i,{requestsRemaining:10,onUpgradeClick:d(`onUpgradeClick`)})}}},parameters:{controls:{exclude:/on[A-Z].*/}}},m=e=>{let[{value:t},n,r]=f(),i=t=>{n({value:t,showAccept:!1}),e?.onChange?.(t)},a=()=>{n({state:`requesting`,error:null,showAccept:!1}),setTimeout(()=>{n({state:`suggesting`}),setTimeout(()=>{n({state:`done`,showAccept:!0})},3e3)},1e3),e?.onSend?.(t)},o=()=>{n({state:`done`,error:null,showAccept:!0}),e?.onStop?.()},s=()=>{r(),e?.onAccept?.()},l=()=>{r(),e?.onDiscard?.()};return(0,u.jsx)(c,{...e,onChange:i,onSend:a,onStop:o,onAccept:s,onDiscard:l,value:e?.value??t})},h={value:``,placeholder:`Placeholder`,acceptLabel:`Accept`,showButtonLabels:!0,disabled:!1,isTransparent:!1,state:`init`,showAccept:!1,showGuideLine:!0,customFooter:null,onChange:d(`onChange`),onSend:d(`onSend`),onStop:d(`onStop`),onAccept:d(`onAccept`),onDiscard:d(`onDiscard`),showRemove:!1,banner:null,error:null},g=m.bind({}),g.args=h,g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs, resetArgs] = useArgs();
  const handleChange = (newValue: string) => {
    updateArgs({
      value: newValue,
      showAccept: false
    });
    args?.onChange?.(newValue);
  };
  const handleSend = () => {
    updateArgs({
      state: 'requesting',
      error: null,
      showAccept: false
    });
    setTimeout(() => {
      updateArgs({
        state: 'suggesting'
      });
      setTimeout(() => {
        updateArgs({
          state: 'done',
          showAccept: true
        });
      }, 3000);
    }, 1000);
    args?.onSend?.(value);
  };
  const handleStop = () => {
    updateArgs({
      state: 'done',
      error: null,
      showAccept: true
    });
    args?.onStop?.();
  };
  const handleAccept = () => {
    resetArgs();
    args?.onAccept?.();
  };
  const handleDiscard = () => {
    resetArgs();
    args?.onDiscard?.();
  };
  return <BlockAIControl {...args} onChange={handleChange} onSend={handleSend} onStop={handleStop} onAccept={handleAccept} onDiscard={handleDiscard} value={args?.value ?? value} />;
}`,...g.parameters?.docs?.source}}},_=[`Default`]}))();export{g as Default,_ as __namedExportsOrder,p as default};