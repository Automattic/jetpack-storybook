import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{Jt as n,Kt as r,Tt as i,Xt as a}from"./locale-CxHKw3qh.js";import{a as o,c as s,i as c,l,n as u,o as d,r as f,s as p,t as m}from"./experience-option-D1mdtJHh.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{i(),s(),d(),u(),h=t(),{action:g}=__STORYBOOK_MODULE_ACTIONS__,_=Object.fromEntries(c.map(e=>[e,o(e)])),v=g(`setPendingExperience`),y={title:`Packages/Search/ExperienceSelector/ExperienceOption`,component:m,parameters:{layout:`centered`},decorators:[e=>(0,h.jsx)(`div`,{style:{width:750},children:(0,h.jsx)(e,{})})],argTypes:{experience:{control:`select`,options:c,labels:_},disabled:{control:`boolean`},pendingExperience:{control:`select`,options:c,labels:_},activeExperience:{control:`select`,options:c,labels:_}}},b=e=>{let t=n(),r=a(p,{...l,actions:{...l.actions,setPendingExperience:e=>(v(e),l.actions.setPendingExperience(e))},initialState:{...l.initialState||{},jetpackSettings:e}});return t.register(r),t},x=e=>e===f.EMBEDDED?f.INLINE:f.EMBEDDED,S=e=>(0,h.jsx)(r,{value:b({module_active:!0,instant_search_enabled:!0,pending_experience:e.pendingExperience??null,experience:e.activeExperience??x(e.experience)}),children:(0,h.jsx)(m,{experience:e.experience,disabled:e.disabled})}),C=S.bind({}),C.args={experience:f.EMBEDDED,disabled:!1,pendingExperience:null,activeExperience:null},w=S.bind({}),w.args={experience:f.EMBEDDED,disabled:!1,pendingExperience:f.EMBEDDED,activeExperience:null},T=S.bind({}),T.args={experience:f.EMBEDDED,disabled:!1,pendingExperience:null,activeExperience:f.EMBEDDED},E=S.bind({}),E.args={experience:f.OVERLAY,disabled:!1,pendingExperience:null,activeExperience:null},D=S.bind({}),D.args={experience:f.OVERLAY,disabled:!1,pendingExperience:f.OVERLAY,activeExperience:null},O=S.bind({}),O.args={experience:f.OVERLAY,disabled:!1,pendingExperience:null,activeExperience:f.OVERLAY},k=S.bind({}),k.args={experience:f.INLINE,disabled:!1,pendingExperience:null,activeExperience:null},A=S.bind({}),A.args={experience:f.INLINE,disabled:!1,pendingExperience:f.INLINE,activeExperience:null},j=S.bind({}),j.args={experience:f.INLINE,disabled:!1,pendingExperience:null,activeExperience:f.INLINE},M=S.bind({}),M.args={experience:f.OFF,disabled:!1,pendingExperience:null,activeExperience:null},N=S.bind({}),N.args={experience:f.OFF,disabled:!1,pendingExperience:f.OFF,activeExperience:null},P=S.bind({}),P.args={experience:f.OFF,disabled:!1,pendingExperience:null,activeExperience:f.OFF},F=S.bind({}),F.args={experience:f.EMBEDDED,disabled:!0,pendingExperience:null,activeExperience:null},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
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