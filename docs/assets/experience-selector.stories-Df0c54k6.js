import{n as e}from"./chunk-zsgVPwQN.js";import{Hf as t,Id as n,Qf as r,Wl as i,Xf as a,dx as o,np as s,px as c,rp as l,sx as u,tp as d,ux as f}from"./iframe-BYOXH3Al.js";import{c as p,i as m,l as h,n as g,o as _,r as v,s as y,t as b}from"./experience-option-BgS0FRVn.js";import{c as x,s as S,t as C}from"./build-module-hH7lgecP.js";var w=e((()=>{}));function T(){let{isDirty:e,isUpdating:t,pendingExperience:i,supportsOnlyClassicSearch:s,isWpcom:l}=r(e=>({isDirty:e(y).isDirty(),isUpdating:e(y).isUpdatingJetpackSettings(),pendingExperience:e(y).getPendingExperience(),supportsOnlyClassicSearch:e(y).supportsOnlyClassicSearch(),isWpcom:e(y).isWpcom()}),[]),{saveExperience:u}=a(y),d=l?m.filter(e=>e!==v.OFF):m,f=e=>t||s&&(e===v.EMBEDDED||e===v.OVERLAY),p=!e||t,h=()=>{if(!e)return o(`Save`,`jetpack-search-pkg`);switch(i){case v.EMBEDDED:return c(`Use Embedded search`,`Button label that activates the Embedded search experience`,`jetpack-search-pkg`);case v.OVERLAY:return c(`Use Overlay search`,`Button label that activates the Overlay search experience`,`jetpack-search-pkg`);case v.INLINE:return c(`Use Theme search`,`Button label that activates the theme's built-in search`,`jetpack-search-pkg`);case v.OFF:return c(`Turn off Jetpack Search`,`Button label that disables Jetpack Search entirely`,`jetpack-search-pkg`);default:return o(`Save`,`jetpack-search-pkg`)}},g=()=>{switch(i){case v.EMBEDDED:return c(`Embedded search selected, save to apply`,`Dirty-state notice shown next to the heading`,`jetpack-search-pkg`);case v.OVERLAY:return c(`Overlay search selected, save to apply`,`Dirty-state notice shown next to the heading`,`jetpack-search-pkg`);case v.INLINE:return c(`Theme search selected, save to apply`,`Dirty-state notice shown next to the heading`,`jetpack-search-pkg`);case v.OFF:return c(`Off selected, save to apply`,`Dirty-state notice shown next to the heading`,`jetpack-search-pkg`);default:return``}},_=e=>{e.preventDefault(),!p&&u(i)};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(S,{direction:`row`,align:`center`,justify:`space-between`,gap:`md`,wrap:`wrap`,className:`jp-search-experience-selector__heading-row`,"aria-live":`polite`,children:[(0,E.jsx)(`h2`,{id:`jp-search-experience-selector-heading`,className:`jp-search-experience-selector__heading`,children:o(`Select a search experience for your visitors`,`jetpack-search-pkg`)}),e&&!t&&(0,E.jsx)(`p`,{className:`jp-search-experience-selector__pending-notice`,children:g()})]}),(0,E.jsxs)(`form`,{className:`jp-search-experience-selector`,onSubmit:_,children:[(0,E.jsx)(`fieldset`,{className:`jp-search-experience-selector__fieldset`,"aria-labelledby":`jp-search-experience-selector-heading`,children:(0,E.jsx)(n,{columns:[1,2],gap:6,children:d.map(e=>(0,E.jsx)(b,{experience:e,disabled:f(e)},e))})}),(0,E.jsx)(S,{gap:`md`,align:`center`,justify:`end`,className:`jp-search-experience-selector__footer`,children:(0,E.jsx)(x,{type:`submit`,disabled:p,loading:t,children:h()})})]})]})}var E,D=e((()=>{i(),t(),f(),C(),p(),_(),g(),w(),E=u(),T.__docgenInfo={description:"Top-level dashboard control: a fieldset of four cards plus a Save button.\n\n`@wordpress/ui` Button's `disabled` prop renders `aria-disabled=\"true\"`\nrather than the native `disabled` attribute, so focus order is preserved.\n\n@return {import('react').Element} - The selector.",methods:[],displayName:`ExperienceSelector`}})),O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{t(),p(),_(),D(),O=u(),{action:k}=__STORYBOOK_MODULE_ACTIONS__,A={title:`Packages/Search/ExperienceSelector`,component:T,parameters:{layout:`padded`},argTypes:{isWpcom:{control:`boolean`,description:"Seed `siteData.isWpcom` — hides the Off row."},supportsOnlyClassicSearch:{control:`boolean`,description:"Seed `sitePlan.supports_only_classic_search` — disables Embedded + Overlay."}},args:{isWpcom:!1,supportsOnlyClassicSearch:!1}},j=k(`saveExperience`),M=k(`setPendingExperience`),N=(e,t={},n={})=>{let r=s(),i=l(y,{...h,actions:{...h.actions,saveExperience:e=>(j(e),{type:`STORYBOOK_NOOP`}),setPendingExperience:e=>(M(e),h.actions.setPendingExperience(e))},initialState:{...h.initialState||{},jetpackSettings:e,sitePlan:{supports_instant_search:!0,...t},siteData:n}});return r.register(i),r},P=(e,t)=>(0,O.jsx)(d,{value:N(e,{supports_only_classic_search:t.supportsOnlyClassicSearch},{isWpcom:t.isWpcom}),children:(0,O.jsx)(T,{})}),F=e=>P({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:v.OVERLAY,is_updating:!1},e),I=e=>P({module_active:!0,instant_search_enabled:!0,pending_experience:v.INLINE,experience:v.OVERLAY,is_updating:!1},e),L=e=>P({module_active:!0,instant_search_enabled:!0,pending_experience:v.INLINE,experience:v.OVERLAY,is_updating:!0},e),R=e=>P({module_active:!0,instant_search_enabled:!1,pending_experience:null,experience:v.INLINE,is_updating:!1},e),R.args={supportsOnlyClassicSearch:!0},z=e=>P({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:v.EMBEDDED,is_updating:!1},e),B=e=>P({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:v.OVERLAY,is_updating:!1},e),V=e=>P({module_active:!0,instant_search_enabled:!1,pending_experience:null,experience:v.INLINE,is_updating:!1},e),H=e=>P({module_active:!1,instant_search_enabled:!1,pending_experience:null,experience:v.OFF,is_updating:!1},e),U=e=>P({module_active:!0,instant_search_enabled:!0,pending_experience:null,experience:v.OVERLAY,is_updating:!1},e),U.args={isWpcom:!0},F.__docgenInfo={description:``,methods:[],displayName:`Clean`},I.__docgenInfo={description:``,methods:[],displayName:`Dirty`},L.__docgenInfo={description:``,methods:[],displayName:`Saving`},R.__docgenInfo={description:``,methods:[],displayName:`ClassicOnlyPlan`},z.__docgenInfo={description:``,methods:[],displayName:`EmbeddedActive`},B.__docgenInfo={description:``,methods:[],displayName:`OverlayActive`},V.__docgenInfo={description:``,methods:[],displayName:`InlineActive`},H.__docgenInfo={description:``,methods:[],displayName:`OffActive`},U.__docgenInfo={description:``,methods:[],displayName:`WpcomSite`},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: true,
  pending_experience: null,
  experience: EXPERIENCE.OVERLAY,
  is_updating: false
}, args)`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: true,
  pending_experience: EXPERIENCE.INLINE,
  experience: EXPERIENCE.OVERLAY,
  is_updating: false
}, args)`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: true,
  pending_experience: EXPERIENCE.INLINE,
  experience: EXPERIENCE.OVERLAY,
  is_updating: true
}, args)`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: false,
  pending_experience: null,
  experience: EXPERIENCE.INLINE,
  is_updating: false
}, args)`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: true,
  pending_experience: null,
  experience: EXPERIENCE.EMBEDDED,
  is_updating: false
}, args)`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: true,
  pending_experience: null,
  experience: EXPERIENCE.OVERLAY,
  is_updating: false
}, args)`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: false,
  pending_experience: null,
  experience: EXPERIENCE.INLINE,
  is_updating: false
}, args)`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: false,
  instant_search_enabled: false,
  pending_experience: null,
  experience: EXPERIENCE.OFF,
  is_updating: false
}, args)`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`args => renderWithStoryArgs({
  module_active: true,
  instant_search_enabled: true,
  pending_experience: null,
  experience: EXPERIENCE.OVERLAY,
  is_updating: false
}, args)`,...U.parameters?.docs?.source}}},W=[`Clean`,`Dirty`,`Saving`,`ClassicOnlyPlan`,`EmbeddedActive`,`OverlayActive`,`InlineActive`,`OffActive`,`WpcomSite`]}))();export{R as ClassicOnlyPlan,F as Clean,I as Dirty,z as EmbeddedActive,V as InlineActive,H as OffActive,B as OverlayActive,L as Saving,U as WpcomSite,W as __namedExportsOrder,A as default};