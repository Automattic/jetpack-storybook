import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Oh as n,dt as r,pg as i,ut as a}from"./iframe-Bjf39v1l.js";var o,s,c,l,u,d,f,p,m;e((()=>{o=t(i(),1),r(),s=n(),c={title:`JS Packages/Components/Toggle Control`,component:a,parameters:{layout:`centered`}},l=e=>{let[t,n]=(0,o.useState)(!1);return(0,s.jsx)(a,{checked:t,onChange:(0,o.useCallback)(()=>{n(!t)},[t]),label:`Code is poetry.`})},u=e=>{let[t,n]=(0,o.useState)(!1),[r,i]=(0,o.useState)(!1);return(0,s.jsx)(a,{checked:r,toggling:t,onChange:(0,o.useCallback)(()=>{n(!0),setTimeout(()=>{n(!1),i(!r)},2e3)},[r]),label:`Code is poetry.`})},d=e=>{let[t,n]=(0,o.useState)(!1),r=(0,o.useCallback)(()=>{n(!t)},[t]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{checked:!0,disabled:!0,label:`Code is poetry.`,onChange:r}),(0,s.jsx)(a,{checked:!1,disabled:!0,label:`Code is poetry.`,onChange:r})]})},f=e=>{let[t,n]=(0,o.useState)(!1);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a,{checked:t,size:`small`,label:`Code is poetry.`,onChange:(0,o.useCallback)(()=>{n(!t)},[t])})})},p=e=>{let[t,n]=(0,o.useState)(!1);return(0,s.jsx)(a,{checked:t,label:`Code is poetry.`,help:`Code is poetry. Code is poetry. Code is poetry.`,onChange:(0,o.useCallback)(()=>{n(!t)},[t])})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} onChange={handleChecked} label="Code is poetry." />;
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setChecked(!checked);
    }, 2000);
  }, [checked]);
  return <ToggleControl checked={checked} toggling={loading} onChange={handleChecked} label="Code is poetry." />;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={true} disabled label="Code is poetry." onChange={handleChecked} />
            <ToggleControl checked={false} disabled label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={checked} size="small" label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} label="Code is poetry." help="Code is poetry. Code is poetry. Code is poetry." onChange={handleChecked} />;
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Slow`,`Disabled`,`Small`,`HelpText`]}))();export{l as Default,d as Disabled,p as HelpText,u as Slow,f as Small,m as __namedExportsOrder,c as default};