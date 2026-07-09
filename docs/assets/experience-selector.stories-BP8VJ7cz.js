import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Pr as i,Xr as a,ai as o,ri as s,ti as c}from"./iframe-DKT0-wQ_.js";import{Kn as l,t as u}from"./build-module-D8lnD-jk.js";import{c as d,i as f,l as p,n as m,o as h,r as g,s as _,t as v}from"./experience-option-IvfaBUiN.js";var y=e((()=>{}));function b(){let{isUpdating:e,supportsOnlyClassicSearch:n,isWpcom:r,blockOverlayEnabled:i}=a(e=>({isUpdating:e(_).isUpdatingJetpackSettings(),supportsOnlyClassicSearch:e(_).supportsOnlyClassicSearch(),isWpcom:e(_).isWpcom(),blockOverlayEnabled:e(_).isBlockOverlayEnabled()}),[]),o=f.filter(e=>!(e===g.OFF&&r||e===g.OVERLAY_BLOCKS&&!i)),s=t=>e||n&&(t===g.EMBEDDED||t===g.OVERLAY||t===g.OVERLAY_BLOCKS);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`h2`,{id:`jp-search-experience-selector-heading`,className:`jp-search-experience-selector__heading`,children:t(`Select a search experience for your visitors`,`jetpack-search-pkg`)}),(0,x.jsx)(`div`,{className:`jp-search-experience-selector`,children:(0,x.jsx)(`fieldset`,{className:`jp-search-experience-selector__fieldset`,"aria-labelledby":`jp-search-experience-selector-heading`,children:(0,x.jsx)(l,{columns:[1,2],gap:6,children:o.map(e=>(0,x.jsx)(v,{experience:e,disabled:s(e)},e))})})})]})}var x,S=e((()=>{u(),i(),n(),d(),h(),m(),y(),x=r(),b.__docgenInfo={description:`Top-level dashboard control: a fieldset of cards. Inactive cards behave
as a single button — clicking anywhere on the card opens a confirm
dialog and saves the chosen experience directly. No separate Save step.

@return {import('react').Element} - The selector.`,methods:[],displayName:`ExperienceSelector`}})),C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;e((()=>{i(),d(),h(),S(),C=r(),{action:w}=__STORYBOOK_MODULE_ACTIONS__,T={title:`Packages/Search/ExperienceSelector`,component:b,parameters:{layout:`padded`},argTypes:{isWpcom:{control:`boolean`,description:"Seed `siteData.isWpcom` — hides the Off row."},supportsOnlyClassicSearch:{control:`boolean`,description:"Seed `sitePlan.supports_only_classic_search` — disables Embedded + Overlay."},blockOverlayEnabled:{control:`boolean`,description:'Seed `siteData.blockOverlayEnabled` — mirrors the `jetpack_search_overlay_block_template_enabled` server filter (defaults true). Reveals the BETA "Overlay search (blocks)" card alongside the preact Overlay; both stay first-class peers. Pin to false to preview the four-card layout.'}},args:{isWpcom:!1,supportsOnlyClassicSearch:!1,blockOverlayEnabled:!0}},E=w(`saveExperience`),D=w(`setPendingExperience`),O=(e,t={},n={})=>{let r=s(),i=o(_,{...p,actions:{...p.actions,saveExperience:e=>(E(e),{type:`STORYBOOK_NOOP`}),setPendingExperience:e=>(D(e),p.actions.setPendingExperience(e))},initialState:{...p.initialState||{},jetpackSettings:e,sitePlan:{supports_instant_search:!0,...t},siteData:n}});return r.register(i),r},k=(e,t)=>(0,C.jsx)(c,{value:O(e,{supports_only_classic_search:t.supportsOnlyClassicSearch},{isWpcom:t.isWpcom,blockOverlayEnabled:t.blockOverlayEnabled}),children:(0,C.jsx)(b,{})}),A=e=>k({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:g.OVERLAY,is_updating:!1},e),j=e=>k({module_active:!0,instant_search_enabled:!0,pending_experience:g.INLINE,experience:g.OVERLAY,is_updating:!1},e),M=e=>k({module_active:!0,instant_search_enabled:!0,pending_experience:g.INLINE,experience:g.OVERLAY,is_updating:!0},e),N=e=>k({module_active:!0,instant_search_enabled:!1,pending_experience:null,experience:g.INLINE,is_updating:!1},e),N.args={supportsOnlyClassicSearch:!0},P=e=>k({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:g.EMBEDDED,is_updating:!1},e),F=e=>k({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:g.OVERLAY,is_updating:!1},e),I=e=>k({module_active:!0,instant_search_enabled:!1,pending_experience:null,experience:g.INLINE,is_updating:!1},e),L=e=>k({module_active:!1,instant_search_enabled:!1,pending_experience:null,experience:g.OFF,is_updating:!1},e),R=e=>k({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:g.OVERLAY,is_updating:!1},e),R.args={isWpcom:!0},z=e=>k({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:g.OVERLAY,is_updating:!1},e),z.args={blockOverlayEnabled:!0},B=e=>k({module_active:!0,instant_search_enabled:!1,pending_experience:null,experience:g.OVERLAY_BLOCKS,is_updating:!1},e),B.args={blockOverlayEnabled:!0},V=e=>k({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:g.OVERLAY,is_updating:!1},e),V.args={blockOverlayEnabled:!1},A.__docgenInfo={description:``,methods:[],displayName:`Clean`},j.__docgenInfo={description:``,methods:[],displayName:`Dirty`},M.__docgenInfo={description:``,methods:[],displayName:`Saving`},N.__docgenInfo={description:``,methods:[],displayName:`ClassicOnlyPlan`},P.__docgenInfo={description:``,methods:[],displayName:`EmbeddedActive`},F.__docgenInfo={description:``,methods:[],displayName:`OverlayActive`},I.__docgenInfo={description:``,methods:[],displayName:`InlineActive`},L.__docgenInfo={description:``,methods:[],displayName:`OffActive`},R.__docgenInfo={description:``,methods:[],displayName:`WpcomSite`},z.__docgenInfo={description:``,methods:[],displayName:`OverlayBlocksAvailable`},B.__docgenInfo={description:``,methods:[],displayName:`OverlayBlocksActive`},V.__docgenInfo={description:``,methods:[],displayName:`PreactOnlyFourCardLayout`},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: true,
  pending_experience: null,
  experience: EXPERIENCE.OVERLAY,
  is_updating: false
}, args)`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: true,
  pending_experience: EXPERIENCE.INLINE,
  experience: EXPERIENCE.OVERLAY,
  is_updating: false
}, args)`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: true,
  pending_experience: EXPERIENCE.INLINE,
  experience: EXPERIENCE.OVERLAY,
  is_updating: true
}, args)`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: false,
  pending_experience: null,
  experience: EXPERIENCE.INLINE,
  is_updating: false
}, args)`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: true,
  pending_experience: null,
  experience: EXPERIENCE.EMBEDDED,
  is_updating: false
}, args)`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: true,
  pending_experience: null,
  experience: EXPERIENCE.OVERLAY,
  is_updating: false
}, args)`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: false,
  pending_experience: null,
  experience: EXPERIENCE.INLINE,
  is_updating: false
}, args)`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: false,
  instant_search_enabled: false,
  pending_experience: null,
  experience: EXPERIENCE.OFF,
  is_updating: false
}, args)`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: true,
  pending_experience: null,
  experience: EXPERIENCE.OVERLAY,
  is_updating: false
}, args)`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: true,
  pending_experience: null,
  experience: EXPERIENCE.OVERLAY,
  is_updating: false
}, args)`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: false,
  pending_experience: null,
  experience: EXPERIENCE.OVERLAY_BLOCKS,
  is_updating: false
}, args)`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: true,
  pending_experience: null,
  experience: EXPERIENCE.OVERLAY,
  is_updating: false
}, args)`,...V.parameters?.docs?.source}}},H=[`Clean`,`Dirty`,`Saving`,`ClassicOnlyPlan`,`EmbeddedActive`,`OverlayActive`,`InlineActive`,`OffActive`,`WpcomSite`,`OverlayBlocksAvailable`,`OverlayBlocksActive`,`PreactOnlyFourCardLayout`]}))();export{N as ClassicOnlyPlan,A as Clean,j as Dirty,P as EmbeddedActive,I as InlineActive,L as OffActive,F as OverlayActive,B as OverlayBlocksActive,z as OverlayBlocksAvailable,V as PreactOnlyFourCardLayout,M as Saving,R as WpcomSite,H as __namedExportsOrder,T as default};