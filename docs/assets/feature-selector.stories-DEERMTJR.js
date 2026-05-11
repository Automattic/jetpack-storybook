import{n as e}from"./chunk-zsgVPwQN.js";import{c as t,s as n,t as r}from"./build-module-CGu9F0Uz.js";import{Ho as i,Jo as a,Po as o,Qm as s,Wo as c,Yo as l,nh as u,qo as d,th as f}from"./iframe-B_Iv5-bB.js";import{a as p,c as m,i as h,l as g,n as _,r as v,s as y,t as b,u as x}from"./experience-option-DKmY2lsD.js";function S(){let{isDirty:e,isUpdating:r,pendingExperience:a,supportsOnlyClassicSearch:o,isWpcom:s}=c(e=>({isDirty:e(m).isDirty(),isUpdating:e(m).isUpdatingJetpackSettings(),pendingExperience:e(m).getPendingExperience(),supportsOnlyClassicSearch:e(m).supportsOnlyClassicSearch(),isWpcom:e(m).isWpcom()}),[]),{saveExperience:l}=i(m),d=s?p.filter(e=>e!==h.OFF):p,f=e=>o&&(e===`embedded`||e===`overlay`),g=!e||r;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`h2`,{id:`jp-search-feature-selector-heading`,className:`jp-search-feature-selector__heading`,children:u(`Select a search experience for your visitors`,`jetpack-search-pkg`)}),(0,C.jsxs)(`form`,{className:`jp-search-feature-selector`,onSubmit:e=>{e.preventDefault(),!g&&l(a)},children:[(0,C.jsx)(`fieldset`,{className:`jp-search-feature-selector__fieldset`,"aria-labelledby":`jp-search-feature-selector-heading`,children:(0,C.jsx)(n,{direction:`column`,gap:`sm`,children:d.map(e=>(0,C.jsx)(b,{experience:e,disabled:f(e)},e))})}),(0,C.jsxs)(n,{gap:`md`,align:`center`,justify:`space-between`,className:`jp-search-feature-selector__footer`,"aria-live":`polite`,children:[(0,C.jsx)(`p`,{className:`jp-search-feature-selector__status`,children:r&&u(`Saving…`,`jetpack-search-pkg`)}),(0,C.jsx)(t,{type:`submit`,disabled:g,loading:r,children:u(`Save`,`jetpack-search-pkg`)})]})]})]})}var C,w=e((()=>{o(),f(),r(),g(),y(),_(),v(),C=s(),S.__docgenInfo={description:"Top-level dashboard control: a fieldset of four radio rows plus a Save\nbutton. Subscribes to the store for `isDirty` and `is_updating`; dispatches\n`saveExperience` with the user's selection on submit.\n\nThe Save button uses `@wordpress/ui` Button's `disabled` prop, which (with\n`focusableWhenDisabled` true by default) renders `aria-disabled=\"true\"`\nrather than the native `disabled` attribute, so focus order is preserved.\n\n@return {import('react').Element} - The selector.",methods:[],displayName:`FeatureSelector`}})),T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;e((()=>{o(),g(),y(),w(),T=s(),{action:E}=__STORYBOOK_MODULE_ACTIONS__,D={title:`Packages/Search/FeatureSelector`,component:S,parameters:{layout:`centered`},decorators:[e=>(0,T.jsx)(`div`,{style:{width:900},children:(0,T.jsx)(e,{})})],argTypes:{isWpcom:{control:`boolean`,description:"Seed `siteData.isWpcom` — hides the Off row."},supportsOnlyClassicSearch:{control:`boolean`,description:"Seed `sitePlan.supports_only_classic_search` — disables Embedded + Overlay."}},args:{isWpcom:!1,supportsOnlyClassicSearch:!1}},O=E(`saveExperience`),k=E(`setPendingExperience`),A=(e,t={},n={})=>{let r=a(),i=l(m,{...x,actions:{...x.actions,saveExperience:e=>(O(e),{type:`STORYBOOK_NOOP`}),setPendingExperience:e=>(k(e),x.actions.setPendingExperience(e))},initialState:{...x.initialState||{},jetpackSettings:e,sitePlan:t,siteData:n}});return r.register(i),r},j=(e,t)=>(0,T.jsx)(d,{value:A(e,{supports_only_classic_search:t.supportsOnlyClassicSearch},{isWpcom:t.isWpcom}),children:(0,T.jsx)(S,{})}),M=e=>j({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:h.OVERLAY,is_updating:!1},e),N=e=>j({module_active:!0,instant_search_enabled:!0,pending_experience:h.INLINE,experience:h.OVERLAY,is_updating:!1},e),P=e=>j({module_active:!0,instant_search_enabled:!0,pending_experience:h.INLINE,experience:h.OVERLAY,is_updating:!0},e),F=e=>j({module_active:!0,instant_search_enabled:!1,pending_experience:null,experience:h.INLINE,is_updating:!1},e),F.args={supportsOnlyClassicSearch:!0},I=e=>j({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:h.EMBEDDED,is_updating:!1},e),L=e=>j({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:h.OVERLAY,is_updating:!1},e),R=e=>j({module_active:!0,instant_search_enabled:!1,pending_experience:null,experience:h.INLINE,is_updating:!1},e),z=e=>j({module_active:!1,instant_search_enabled:!1,pending_experience:null,experience:h.OFF,is_updating:!1},e),B=e=>j({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:h.OVERLAY,is_updating:!1},e),B.args={isWpcom:!0},M.__docgenInfo={description:``,methods:[],displayName:`Clean`},N.__docgenInfo={description:``,methods:[],displayName:`Dirty`},P.__docgenInfo={description:``,methods:[],displayName:`Saving`},F.__docgenInfo={description:``,methods:[],displayName:`ClassicOnlyPlan`},I.__docgenInfo={description:``,methods:[],displayName:`EmbeddedActive`},L.__docgenInfo={description:``,methods:[],displayName:`OverlayActive`},R.__docgenInfo={description:``,methods:[],displayName:`InlineActive`},z.__docgenInfo={description:``,methods:[],displayName:`OffActive`},B.__docgenInfo={description:``,methods:[],displayName:`WpcomSite`},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: true,
  pending_experience: null,
  experience: EXPERIENCE.OVERLAY,
  is_updating: false
}, args)`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: true,
  pending_experience: EXPERIENCE.INLINE,
  experience: EXPERIENCE.OVERLAY,
  is_updating: false
}, args)`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: true,
  pending_experience: EXPERIENCE.INLINE,
  experience: EXPERIENCE.OVERLAY,
  is_updating: true
}, args)`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: false,
  pending_experience: null,
  experience: EXPERIENCE.INLINE,
  is_updating: false
}, args)`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: true,
  pending_experience: null,
  experience: EXPERIENCE.EMBEDDED,
  is_updating: false
}, args)`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: true,
  pending_experience: null,
  experience: EXPERIENCE.OVERLAY,
  is_updating: false
}, args)`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: false,
  pending_experience: null,
  experience: EXPERIENCE.INLINE,
  is_updating: false
}, args)`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: false,
  instant_search_enabled: false,
  pending_experience: null,
  experience: EXPERIENCE.OFF,
  is_updating: false
}, args)`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: true,
  pending_experience: null,
  experience: EXPERIENCE.OVERLAY,
  is_updating: false
}, args)`,...B.parameters?.docs?.source}}},V=[`Clean`,`Dirty`,`Saving`,`ClassicOnlyPlan`,`EmbeddedActive`,`OverlayActive`,`InlineActive`,`OffActive`,`WpcomSite`]}))();export{F as ClassicOnlyPlan,M as Clean,N as Dirty,I as EmbeddedActive,R as InlineActive,z as OffActive,L as OverlayActive,P as Saving,B as WpcomSite,V as __namedExportsOrder,D as default};