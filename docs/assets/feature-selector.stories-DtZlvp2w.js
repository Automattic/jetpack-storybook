import{n as e}from"./chunk-zsgVPwQN.js";import{Bo as t,Go as n,Ho as r,Ko as i,Mo as a,Zm as o,eh as s,qo as c,th as l}from"./iframe-4q5MnQDq.js";import{a as u,c as d,d as f,f as p,i as m,n as h,o as g,p as _,r as v,s as y,t as b,u as x}from"./experience-option-BM5-7q3U.js";function S(){let{isDirty:e,isUpdating:n,pendingExperience:i,supportsOnlyClassicSearch:a,isWpcom:o}=r(e=>({isDirty:e(f).isDirty(),isUpdating:e(f).isUpdatingJetpackSettings(),pendingExperience:e(f).getPendingExperience(),supportsOnlyClassicSearch:e(f).supportsOnlyClassicSearch(),isWpcom:e(f).isWpcom()}),[]),{saveExperience:s}=t(f),c=o?d.filter(e=>e!==y.OFF):d,p=e=>a&&(e===`embedded`||e===`overlay`),m=!e||n;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`h2`,{id:`jp-search-feature-selector-heading`,className:`jp-search-feature-selector__heading`,children:l(`Select a search experience for your visitors`,`jetpack-search-pkg`)}),(0,C.jsxs)(`form`,{className:`jp-search-feature-selector`,onSubmit:e=>{e.preventDefault(),!m&&s(i)},children:[(0,C.jsx)(`fieldset`,{className:`jp-search-feature-selector__fieldset`,"aria-labelledby":`jp-search-feature-selector-heading`,children:(0,C.jsx)(u,{direction:`column`,gap:`sm`,children:c.map(e=>(0,C.jsx)(b,{experience:e,disabled:p(e)},e))})}),(0,C.jsxs)(u,{gap:`md`,align:`center`,justify:`space-between`,className:`jp-search-feature-selector__footer`,"aria-live":`polite`,children:[(0,C.jsx)(`p`,{className:`jp-search-feature-selector__status`,children:n&&l(`Saving…`,`jetpack-search-pkg`)}),(0,C.jsx)(g,{type:`submit`,disabled:m,loading:n,children:l(`Save`,`jetpack-search-pkg`)})]})]})]})}var C,w=e((()=>{a(),s(),m(),p(),x(),h(),v(),C=o(),S.__docgenInfo={description:"Top-level dashboard control: a fieldset of four radio rows plus a Save\nbutton. Subscribes to the store for `isDirty` and `is_updating`; dispatches\n`saveExperience` with the user's selection on submit.\n\nThe Save button uses `@wordpress/ui` Button's `disabled` prop, which (with\n`focusableWhenDisabled` true by default) renders `aria-disabled=\"true\"`\nrather than the native `disabled` attribute, so focus order is preserved.\n\n@return {import('react').Element} - The selector.",methods:[],displayName:`FeatureSelector`}})),T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;e((()=>{a(),p(),x(),w(),T=o(),{action:E}=__STORYBOOK_MODULE_ACTIONS__,D={title:`Packages/Search/FeatureSelector`,component:S,parameters:{layout:`centered`},decorators:[e=>(0,T.jsx)(`div`,{style:{width:900},children:(0,T.jsx)(e,{})})],argTypes:{isWpcom:{control:`boolean`,description:"Seed `siteData.isWpcom` — hides the Off row."},supportsOnlyClassicSearch:{control:`boolean`,description:"Seed `sitePlan.supports_only_classic_search` — disables Embedded + Overlay."}},args:{isWpcom:!1,supportsOnlyClassicSearch:!1}},O=E(`saveExperience`),k=E(`setPendingExperience`),A=(e,t={},n={})=>{let r=i(),a=c(f,{..._,actions:{..._.actions,saveExperience:e=>(O(e),{type:`STORYBOOK_NOOP`}),setPendingExperience:e=>(k(e),_.actions.setPendingExperience(e))},initialState:{..._.initialState||{},jetpackSettings:e,sitePlan:t,siteData:n}});return r.register(a),r},j=(e,t)=>(0,T.jsx)(n,{value:A(e,{supports_only_classic_search:t.supportsOnlyClassicSearch},{isWpcom:t.isWpcom}),children:(0,T.jsx)(S,{})}),M=e=>j({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:y.OVERLAY,is_updating:!1},e),N=e=>j({module_active:!0,instant_search_enabled:!0,pending_experience:y.INLINE,experience:y.OVERLAY,is_updating:!1},e),P=e=>j({module_active:!0,instant_search_enabled:!0,pending_experience:y.INLINE,experience:y.OVERLAY,is_updating:!0},e),F=e=>j({module_active:!0,instant_search_enabled:!1,pending_experience:null,experience:y.INLINE,is_updating:!1},e),F.args={supportsOnlyClassicSearch:!0},I=e=>j({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:y.EMBEDDED,is_updating:!1},e),L=e=>j({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:y.OVERLAY,is_updating:!1},e),R=e=>j({module_active:!0,instant_search_enabled:!1,pending_experience:null,experience:y.INLINE,is_updating:!1},e),z=e=>j({module_active:!1,instant_search_enabled:!1,pending_experience:null,experience:y.OFF,is_updating:!1},e),B=e=>j({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:y.OVERLAY,is_updating:!1},e),B.args={isWpcom:!0},M.__docgenInfo={description:``,methods:[],displayName:`Clean`},N.__docgenInfo={description:``,methods:[],displayName:`Dirty`},P.__docgenInfo={description:``,methods:[],displayName:`Saving`},F.__docgenInfo={description:``,methods:[],displayName:`ClassicOnlyPlan`},I.__docgenInfo={description:``,methods:[],displayName:`EmbeddedActive`},L.__docgenInfo={description:``,methods:[],displayName:`OverlayActive`},R.__docgenInfo={description:``,methods:[],displayName:`InlineActive`},z.__docgenInfo={description:``,methods:[],displayName:`OffActive`},B.__docgenInfo={description:``,methods:[],displayName:`WpcomSite`},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
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