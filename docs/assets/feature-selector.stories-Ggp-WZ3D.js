import{n as e}from"./chunk-zsgVPwQN.js";import{Hf as t,Qf as n,Xf as r,dx as i,np as a,rp as o,sx as s,tp as c,ux as l}from"./iframe-CP2fGDcB.js";import{a as u,c as d,i as f,l as p,n as m,r as h,s as g,t as _,u as v}from"./experience-option-Du8LFQ91.js";import{c as y,s as b,t as x}from"./build-module-SRNrNzdV.js";function S(){let{isDirty:e,isUpdating:t,pendingExperience:a,supportsOnlyClassicSearch:o,isWpcom:s}=n(e=>({isDirty:e(d).isDirty(),isUpdating:e(d).isUpdatingJetpackSettings(),pendingExperience:e(d).getPendingExperience(),supportsOnlyClassicSearch:e(d).supportsOnlyClassicSearch(),isWpcom:e(d).isWpcom()}),[]),{saveExperience:c}=r(d),l=s?u.filter(e=>e!==f.OFF):u,p=e=>o&&(e===`embedded`||e===`overlay`),m=!e||t;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`h2`,{id:`jp-search-feature-selector-heading`,className:`jp-search-feature-selector__heading`,children:i(`Select a search experience for your visitors`,`jetpack-search-pkg`)}),(0,C.jsxs)(`form`,{className:`jp-search-feature-selector`,onSubmit:e=>{e.preventDefault(),!m&&c(a)},children:[(0,C.jsx)(`fieldset`,{className:`jp-search-feature-selector__fieldset`,"aria-labelledby":`jp-search-feature-selector-heading`,children:(0,C.jsx)(b,{direction:`column`,gap:`sm`,children:l.map(e=>(0,C.jsx)(_,{experience:e,disabled:p(e)},e))})}),(0,C.jsxs)(b,{gap:`md`,align:`center`,justify:`space-between`,className:`jp-search-feature-selector__footer`,"aria-live":`polite`,children:[(0,C.jsx)(`p`,{className:`jp-search-feature-selector__status`,children:t&&i(`Saving…`,`jetpack-search-pkg`)}),(0,C.jsx)(y,{type:`submit`,disabled:m,loading:t,children:i(`Save`,`jetpack-search-pkg`)})]})]})]})}var C,w=e((()=>{t(),l(),x(),p(),g(),m(),h(),C=s(),S.__docgenInfo={description:"Top-level dashboard control: a fieldset of four radio rows plus a Save\nbutton. Subscribes to the store for `isDirty` and `is_updating`; dispatches\n`saveExperience` with the user's selection on submit.\n\nThe Save button uses `@wordpress/ui` Button's `disabled` prop, which (with\n`focusableWhenDisabled` true by default) renders `aria-disabled=\"true\"`\nrather than the native `disabled` attribute, so focus order is preserved.\n\n@return {import('react').Element} - The selector.",methods:[],displayName:`FeatureSelector`}})),T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;e((()=>{t(),p(),g(),w(),T=s(),{action:E}=__STORYBOOK_MODULE_ACTIONS__,D={title:`Packages/Search/FeatureSelector`,component:S,parameters:{layout:`centered`},decorators:[e=>(0,T.jsx)(`div`,{style:{width:900},children:(0,T.jsx)(e,{})})],argTypes:{isWpcom:{control:`boolean`,description:"Seed `siteData.isWpcom` — hides the Off row."},supportsOnlyClassicSearch:{control:`boolean`,description:"Seed `sitePlan.supports_only_classic_search` — disables Embedded + Overlay."}},args:{isWpcom:!1,supportsOnlyClassicSearch:!1}},O=E(`saveExperience`),k=E(`setPendingExperience`),A=(e,t={},n={})=>{let r=a(),i=o(d,{...v,actions:{...v.actions,saveExperience:e=>(O(e),{type:`STORYBOOK_NOOP`}),setPendingExperience:e=>(k(e),v.actions.setPendingExperience(e))},initialState:{...v.initialState||{},jetpackSettings:e,sitePlan:t,siteData:n}});return r.register(i),r},j=(e,t)=>(0,T.jsx)(c,{value:A(e,{supports_only_classic_search:t.supportsOnlyClassicSearch},{isWpcom:t.isWpcom}),children:(0,T.jsx)(S,{})}),M=e=>j({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:f.OVERLAY,is_updating:!1},e),N=e=>j({module_active:!0,instant_search_enabled:!0,pending_experience:f.INLINE,experience:f.OVERLAY,is_updating:!1},e),P=e=>j({module_active:!0,instant_search_enabled:!0,pending_experience:f.INLINE,experience:f.OVERLAY,is_updating:!0},e),F=e=>j({module_active:!0,instant_search_enabled:!1,pending_experience:null,experience:f.INLINE,is_updating:!1},e),F.args={supportsOnlyClassicSearch:!0},I=e=>j({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:f.EMBEDDED,is_updating:!1},e),L=e=>j({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:f.OVERLAY,is_updating:!1},e),R=e=>j({module_active:!0,instant_search_enabled:!1,pending_experience:null,experience:f.INLINE,is_updating:!1},e),z=e=>j({module_active:!1,instant_search_enabled:!1,pending_experience:null,experience:f.OFF,is_updating:!1},e),B=e=>j({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:f.OVERLAY,is_updating:!1},e),B.args={isWpcom:!0},M.__docgenInfo={description:``,methods:[],displayName:`Clean`},N.__docgenInfo={description:``,methods:[],displayName:`Dirty`},P.__docgenInfo={description:``,methods:[],displayName:`Saving`},F.__docgenInfo={description:``,methods:[],displayName:`ClassicOnlyPlan`},I.__docgenInfo={description:``,methods:[],displayName:`EmbeddedActive`},L.__docgenInfo={description:``,methods:[],displayName:`OverlayActive`},R.__docgenInfo={description:``,methods:[],displayName:`InlineActive`},z.__docgenInfo={description:``,methods:[],displayName:`OffActive`},B.__docgenInfo={description:``,methods:[],displayName:`WpcomSite`},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
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