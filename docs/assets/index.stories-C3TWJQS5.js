import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,j as a}from"./iframe-Dv9BbzDn.js";var o,s,c=t((()=>{o=`_wrapper_1pf8o_1`,s={wrapper:o}})),l,u,d,f,p,m,h,g,_;t((()=>{l=e(n(),1),a(),c(),u=r(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`JS Packages/Components/Action Popover`,component:i,argTypes:{hideCloseButton:{control:{type:`boolean`}},title:{control:{type:`text`}},children:{control:{type:`text`}},step:{control:{type:`number`}},totalSteps:{control:{type:`number`}},buttonContent:{control:{type:`text`}},buttonDisabled:{control:{type:`boolean`}},buttonHref:{control:{type:`text`}},buttonExternalLink:{control:{type:`boolean`}},offset:{control:{type:`number`}},position:{control:{type:`select`},options:[`top left`,`top right`,`top center`,`middle left`,`middle right`,`middle center`,`bottom left`,`bottom right`,`bottom center`]},noArrow:{control:{type:`boolean`}},onClose:{table:{disable:!0}},onClick:{table:{disable:!0}}}},p=e=>{let[t,n]=(0,l.useState)(null);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`div`,{className:s.wrapper,children:(0,u.jsx)(`div`,{ref:n,children:`⚓`})}),(0,u.jsx)(i,{...e,anchor:t})]})},m={hideCloseButton:!1,title:`Check this out`,children:`Absque sudore et labore nullum opus perfectum est.`,step:null,totalSteps:null,buttonContent:`Next`,buttonDisabled:!1,offset:32,position:`top center`,noArrow:!0,onClose:()=>d(`close`)(),onClick:()=>d(`click`)()},h=p.bind({}),h.args=m,g=p.bind({}),g.args={...m,step:1,totalSteps:3},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  const [anchor, setAnchor] = useState(null);
  return <>
            <div className={styles.wrapper}>
                <div ref={setAnchor}>⚓</div>
            </div>

            <ActionPopover {...args} anchor={anchor} />
        </>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  const [anchor, setAnchor] = useState(null);
  return <>
            <div className={styles.wrapper}>
                <div ref={setAnchor}>⚓</div>
            </div>

            <ActionPopover {...args} anchor={anchor} />
        </>;
}`,...g.parameters?.docs?.source}}},_=[`_default`,`WithSteps`]}))();export{g as WithSteps,_ as __namedExportsOrder,h as _default,f as default};