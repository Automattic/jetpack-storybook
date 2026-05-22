import{n as e}from"./chunk-zsgVPwQN.js";import{Ec as t,Tc as n,av as r,dc as i,ia as a,nv as o,ov as s,ts as c,wc as l,xc as u}from"./iframe-C879mviG.js";import{c as d,i as f,l as p,n as m,o as h,r as g,s as _,t as v}from"./experience-option-s-jmrezI.js";var y=e((()=>{}));function b(){let{isUpdating:e,supportsOnlyClassicSearch:t,isWpcom:n,blockOverlayEnabled:r}=u(e=>({isUpdating:e(_).isUpdatingJetpackSettings(),supportsOnlyClassicSearch:e(_).supportsOnlyClassicSearch(),isWpcom:e(_).isWpcom(),blockOverlayEnabled:e(_).isBlockOverlayEnabled()}),[]),i=f.filter(e=>!(e===g.OFF&&n||e===g.OVERLAY_BLOCKS&&!r)),a=n=>e||t&&(n===g.EMBEDDED||n===g.OVERLAY||n===g.OVERLAY_BLOCKS);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`h2`,{id:`jp-search-experience-selector-heading`,className:`jp-search-experience-selector__heading`,children:s(`Select a search experience for your visitors`,`jetpack-search-pkg`)}),(0,x.jsx)(`div`,{className:`jp-search-experience-selector`,children:(0,x.jsx)(`fieldset`,{className:`jp-search-experience-selector__fieldset`,"aria-labelledby":`jp-search-experience-selector-heading`,children:(0,x.jsx)(c,{columns:[1,2],gap:6,children:i.map(e=>(0,x.jsx)(v,{experience:e,disabled:a(e)},e))})})})]})}var x,S=e((()=>{a(),i(),r(),d(),h(),m(),y(),x=o(),b.__docgenInfo={description:`Top-level dashboard control: a fieldset of cards. Inactive cards behave
as a single button — clicking anywhere on the card opens a confirm
dialog and saves the chosen experience directly. No separate Save step.

@return {import('react').Element} - The selector.`,methods:[],displayName:`ExperienceSelector`}})),C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;e((()=>{i(),d(),h(),S(),C=o(),{action:w}=__STORYBOOK_MODULE_ACTIONS__,T={title:`Packages/Search/ExperienceSelector`,component:b,parameters:{layout:`padded`},argTypes:{isWpcom:{control:`boolean`,description:"Seed `siteData.isWpcom` — hides the Off row."},supportsOnlyClassicSearch:{control:`boolean`,description:"Seed `sitePlan.supports_only_classic_search` — disables Embedded + Overlay."},blockOverlayEnabled:{control:`boolean`,description:'Seed `siteData.blockOverlayEnabled` — mirrors the `jetpack_search_overlay_block_template_enabled` server filter; reveals the new blocks-powered Overlay card and tags the legacy one "(legacy)".'}},args:{isWpcom:!1,supportsOnlyClassicSearch:!1,blockOverlayEnabled:!1}},E=w(`saveExperience`),D=w(`setPendingExperience`),O=(e,r={},i={})=>{let a=n(),o=t(_,{...p,actions:{...p.actions,saveExperience:e=>(E(e),{type:`STORYBOOK_NOOP`}),setPendingExperience:e=>(D(e),p.actions.setPendingExperience(e))},initialState:{...p.initialState||{},jetpackSettings:e,sitePlan:{supports_instant_search:!0,...r},siteData:i}});return a.register(o),a},k=(e,t)=>(0,C.jsx)(l,{value:O(e,{supports_only_classic_search:t.supportsOnlyClassicSearch},{isWpcom:t.isWpcom,blockOverlayEnabled:t.blockOverlayEnabled}),children:(0,C.jsx)(b,{})}),A=e=>k({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:g.OVERLAY,is_updating:!1},e),j=e=>k({module_active:!0,instant_search_enabled:!0,pending_experience:g.INLINE,experience:g.OVERLAY,is_updating:!1},e),M=e=>k({module_active:!0,instant_search_enabled:!0,pending_experience:g.INLINE,experience:g.OVERLAY,is_updating:!0},e),N=e=>k({module_active:!0,instant_search_enabled:!1,pending_experience:null,experience:g.INLINE,is_updating:!1},e),N.args={supportsOnlyClassicSearch:!0},P=e=>k({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:g.EMBEDDED,is_updating:!1},e),F=e=>k({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:g.OVERLAY,is_updating:!1},e),I=e=>k({module_active:!0,instant_search_enabled:!1,pending_experience:null,experience:g.INLINE,is_updating:!1},e),L=e=>k({module_active:!1,instant_search_enabled:!1,pending_experience:null,experience:g.OFF,is_updating:!1},e),R=e=>k({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:g.OVERLAY,is_updating:!1},e),R.args={isWpcom:!0},z=e=>k({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:g.OVERLAY,is_updating:!1},e),z.args={blockOverlayEnabled:!0},B=e=>k({module_active:!0,instant_search_enabled:!1,pending_experience:null,experience:g.OVERLAY_BLOCKS,is_updating:!1},e),B.args={blockOverlayEnabled:!0},A.__docgenInfo={description:``,methods:[],displayName:`Clean`},j.__docgenInfo={description:``,methods:[],displayName:`Dirty`},M.__docgenInfo={description:``,methods:[],displayName:`Saving`},N.__docgenInfo={description:``,methods:[],displayName:`ClassicOnlyPlan`},P.__docgenInfo={description:``,methods:[],displayName:`EmbeddedActive`},F.__docgenInfo={description:``,methods:[],displayName:`OverlayActive`},I.__docgenInfo={description:``,methods:[],displayName:`InlineActive`},L.__docgenInfo={description:``,methods:[],displayName:`OffActive`},R.__docgenInfo={description:``,methods:[],displayName:`WpcomSite`},z.__docgenInfo={description:``,methods:[],displayName:`OverlayBlocksAvailable`},B.__docgenInfo={description:``,methods:[],displayName:`OverlayBlocksActive`},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
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
}, args)`,...B.parameters?.docs?.source}}},V=[`Clean`,`Dirty`,`Saving`,`ClassicOnlyPlan`,`EmbeddedActive`,`OverlayActive`,`InlineActive`,`OffActive`,`WpcomSite`,`OverlayBlocksAvailable`,`OverlayBlocksActive`]}))();export{N as ClassicOnlyPlan,A as Clean,j as Dirty,P as EmbeddedActive,I as InlineActive,L as OffActive,F as OverlayActive,B as OverlayBlocksActive,z as OverlayBlocksAvailable,M as Saving,R as WpcomSite,V as __namedExportsOrder,T as default};