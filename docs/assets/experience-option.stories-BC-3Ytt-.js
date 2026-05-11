import{n as e}from"./chunk-zsgVPwQN.js";import{Jo as t,Po as n,Qm as r,Yo as i,qo as a}from"./iframe-Doh4odxI.js";import{a as o,c as s,i as c,l,n as u,o as d,s as f,t as p,u as m}from"./experience-option-CrjfuHW5.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{n(),l(),f(),u(),h=r(),{action:g}=__STORYBOOK_MODULE_ACTIONS__,_=Object.fromEntries(o.map(e=>[e,d(e)])),v=g(`setPendingExperience`),y={title:`Packages/Search/FeatureSelector/ExperienceOption`,component:p,parameters:{layout:`centered`},decorators:[e=>(0,h.jsx)(`div`,{style:{width:750},children:(0,h.jsx)(e,{})})],argTypes:{experience:{control:`select`,options:o,labels:_},disabled:{control:`boolean`},pendingExperience:{control:`select`,options:o,labels:_},activeExperience:{control:`select`,options:o,labels:_}}},b=e=>{let n=t(),r=i(s,{...m,actions:{...m.actions,setPendingExperience:e=>(v(e),m.actions.setPendingExperience(e))},initialState:{...m.initialState||{},jetpackSettings:e}});return n.register(r),n},x=e=>e===c.EMBEDDED?c.INLINE:c.EMBEDDED,S=e=>(0,h.jsx)(a,{value:b({module_active:!0,instant_search_enabled:!0,pending_experience:e.pendingExperience??null,experience:e.activeExperience??x(e.experience)}),children:(0,h.jsx)(p,{experience:e.experience,disabled:e.disabled})}),C=S.bind({}),C.args={experience:c.EMBEDDED,disabled:!1,pendingExperience:null,activeExperience:null},w=S.bind({}),w.args={experience:c.EMBEDDED,disabled:!1,pendingExperience:c.EMBEDDED,activeExperience:null},T=S.bind({}),T.args={experience:c.EMBEDDED,disabled:!1,pendingExperience:null,activeExperience:c.EMBEDDED},E=S.bind({}),E.args={experience:c.OVERLAY,disabled:!1,pendingExperience:null,activeExperience:null},D=S.bind({}),D.args={experience:c.OVERLAY,disabled:!1,pendingExperience:c.OVERLAY,activeExperience:null},O=S.bind({}),O.args={experience:c.OVERLAY,disabled:!1,pendingExperience:null,activeExperience:c.OVERLAY},k=S.bind({}),k.args={experience:c.INLINE,disabled:!1,pendingExperience:null,activeExperience:null},A=S.bind({}),A.args={experience:c.INLINE,disabled:!1,pendingExperience:c.INLINE,activeExperience:null},j=S.bind({}),j.args={experience:c.INLINE,disabled:!1,pendingExperience:null,activeExperience:c.INLINE},M=S.bind({}),M.args={experience:c.OFF,disabled:!1,pendingExperience:null,activeExperience:null},N=S.bind({}),N.args={experience:c.OFF,disabled:!1,pendingExperience:c.OFF,activeExperience:null},P=S.bind({}),P.args={experience:c.OFF,disabled:!1,pendingExperience:null,activeExperience:c.OFF},F=S.bind({}),F.args={experience:c.EMBEDDED,disabled:!0,pendingExperience:null,activeExperience:null},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  const baseSettings = {
    module_active: true,
    instant_search_enabled: true,
    pending_experience: args.pendingExperience ?? null,
    experience: args.activeExperience ?? defaultActiveFor(args.experience)
  };
  const registry = createStoreWithSettings(baseSettings);
  return <RegistryProvider value={registry}>
            <ExperienceOption experience={args.experience} disabled={args.disabled} />
        </RegistryProvider>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
  const baseSettings = {
    module_active: true,
    instant_search_enabled: true,
    pending_experience: args.pendingExperience ?? null,
    experience: args.activeExperience ?? defaultActiveFor(args.experience)
  };
  const registry = createStoreWithSettings(baseSettings);
  return <RegistryProvider value={registry}>
            <ExperienceOption experience={args.experience} disabled={args.disabled} />
        </RegistryProvider>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
  const baseSettings = {
    module_active: true,
    instant_search_enabled: true,
    pending_experience: args.pendingExperience ?? null,
    experience: args.activeExperience ?? defaultActiveFor(args.experience)
  };
  const registry = createStoreWithSettings(baseSettings);
  return <RegistryProvider value={registry}>
            <ExperienceOption experience={args.experience} disabled={args.disabled} />
        </RegistryProvider>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => {
  const baseSettings = {
    module_active: true,
    instant_search_enabled: true,
    pending_experience: args.pendingExperience ?? null,
    experience: args.activeExperience ?? defaultActiveFor(args.experience)
  };
  const registry = createStoreWithSettings(baseSettings);
  return <RegistryProvider value={registry}>
            <ExperienceOption experience={args.experience} disabled={args.disabled} />
        </RegistryProvider>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
  const baseSettings = {
    module_active: true,
    instant_search_enabled: true,
    pending_experience: args.pendingExperience ?? null,
    experience: args.activeExperience ?? defaultActiveFor(args.experience)
  };
  const registry = createStoreWithSettings(baseSettings);
  return <RegistryProvider value={registry}>
            <ExperienceOption experience={args.experience} disabled={args.disabled} />
        </RegistryProvider>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
  const baseSettings = {
    module_active: true,
    instant_search_enabled: true,
    pending_experience: args.pendingExperience ?? null,
    experience: args.activeExperience ?? defaultActiveFor(args.experience)
  };
  const registry = createStoreWithSettings(baseSettings);
  return <RegistryProvider value={registry}>
            <ExperienceOption experience={args.experience} disabled={args.disabled} />
        </RegistryProvider>;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => {
  const baseSettings = {
    module_active: true,
    instant_search_enabled: true,
    pending_experience: args.pendingExperience ?? null,
    experience: args.activeExperience ?? defaultActiveFor(args.experience)
  };
  const registry = createStoreWithSettings(baseSettings);
  return <RegistryProvider value={registry}>
            <ExperienceOption experience={args.experience} disabled={args.disabled} />
        </RegistryProvider>;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => {
  const baseSettings = {
    module_active: true,
    instant_search_enabled: true,
    pending_experience: args.pendingExperience ?? null,
    experience: args.activeExperience ?? defaultActiveFor(args.experience)
  };
  const registry = createStoreWithSettings(baseSettings);
  return <RegistryProvider value={registry}>
            <ExperienceOption experience={args.experience} disabled={args.disabled} />
        </RegistryProvider>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
  const baseSettings = {
    module_active: true,
    instant_search_enabled: true,
    pending_experience: args.pendingExperience ?? null,
    experience: args.activeExperience ?? defaultActiveFor(args.experience)
  };
  const registry = createStoreWithSettings(baseSettings);
  return <RegistryProvider value={registry}>
            <ExperienceOption experience={args.experience} disabled={args.disabled} />
        </RegistryProvider>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
  const baseSettings = {
    module_active: true,
    instant_search_enabled: true,
    pending_experience: args.pendingExperience ?? null,
    experience: args.activeExperience ?? defaultActiveFor(args.experience)
  };
  const registry = createStoreWithSettings(baseSettings);
  return <RegistryProvider value={registry}>
            <ExperienceOption experience={args.experience} disabled={args.disabled} />
        </RegistryProvider>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => {
  const baseSettings = {
    module_active: true,
    instant_search_enabled: true,
    pending_experience: args.pendingExperience ?? null,
    experience: args.activeExperience ?? defaultActiveFor(args.experience)
  };
  const registry = createStoreWithSettings(baseSettings);
  return <RegistryProvider value={registry}>
            <ExperienceOption experience={args.experience} disabled={args.disabled} />
        </RegistryProvider>;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => {
  const baseSettings = {
    module_active: true,
    instant_search_enabled: true,
    pending_experience: args.pendingExperience ?? null,
    experience: args.activeExperience ?? defaultActiveFor(args.experience)
  };
  const registry = createStoreWithSettings(baseSettings);
  return <RegistryProvider value={registry}>
            <ExperienceOption experience={args.experience} disabled={args.disabled} />
        </RegistryProvider>;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => {
  const baseSettings = {
    module_active: true,
    instant_search_enabled: true,
    pending_experience: args.pendingExperience ?? null,
    experience: args.activeExperience ?? defaultActiveFor(args.experience)
  };
  const registry = createStoreWithSettings(baseSettings);
  return <RegistryProvider value={registry}>
            <ExperienceOption experience={args.experience} disabled={args.disabled} />
        </RegistryProvider>;
}`,...F.parameters?.docs?.source}}},I=[`Embedded`,`EmbeddedSelected`,`EmbeddedActive`,`Overlay`,`OverlaySelected`,`OverlayActive`,`Inline`,`InlineSelected`,`InlineActive`,`Off`,`OffSelected`,`OffActive`,`Disabled`]}))();export{F as Disabled,C as Embedded,T as EmbeddedActive,w as EmbeddedSelected,k as Inline,j as InlineActive,A as InlineSelected,M as Off,P as OffActive,N as OffSelected,E as Overlay,O as OverlayActive,D as OverlaySelected,I as __namedExportsOrder,y as default};