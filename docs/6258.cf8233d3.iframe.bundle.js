"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6258],{"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataform-context/index.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.DataFormProvider=t,s.default=void 0;var n=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a=(0,n.createContext)({fields:[]});function t({fields:b,children:d}){return(0,r.jsx)(a.Provider,{value:{fields:b},children:d})}var l=s.default=a},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataform/index.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=b;var n=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataform-context/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/normalize-fields.js"),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataforms-layouts/data-form-layout.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function b({data:d,form:m,fields:c,onChange:p}){const i=(0,n.useMemo)(()=>(0,a.normalizeFields)(c),[c]);return m.fields?(0,l.jsx)(r.DataFormProvider,{fields:i,children:(0,l.jsx)(t.DataFormLayout,{data:d,form:m,onChange:p})}):null}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-bulk-actions/index.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.BulkActionsFooter=h,s.BulkSelectionCheckbox=w,s.useHasAPossibleBulkAction=i,s.useSomeItemHasAPossibleBulkAction=x;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+data@10.28.0_react@18.3.1/node_modules/@wordpress/data/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+icons@10.28.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),d=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),m=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-item-actions/index.js"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function p({action:o,items:g,ActionTriggerComponent:u}){const[f,j]=(0,t.useState)(!1),E={action:o,onClick:()=>{j(!0)},items:g};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u,{...E}),f&&(0,c.jsx)(m.ActionModal,{action:o,items:g,closeModal:()=>j(!1)})]})}function i(o,g){return(0,t.useMemo)(()=>o.some(u=>u.supportsBulk&&(!u.isEligible||u.isEligible(g))),[o,g])}function x(o,g){return(0,t.useMemo)(()=>g.some(u=>o.some(f=>f.supportsBulk&&(!f.isEligible||f.isEligible(u)))),[o,g])}function w({selection:o,onChangeSelection:g,data:u,actions:f,getItemId:j}){const E=(0,t.useMemo)(()=>u.filter(I=>f.some(C=>C.supportsBulk&&(!C.isEligible||C.isEligible(I)))),[u,f]),P=u.filter(I=>o.includes(j(I))&&E.includes(I)),S=P.length===E.length;return(0,c.jsx)(r.CheckboxControl,{className:"dataviews-view-table-selection-checkbox",__nextHasNoMarginBottom:!0,checked:S,indeterminate:!S&&!!P.length,onChange:()=>{g(S?[]:E.map(I=>j(I)))},"aria-label":S?(0,a.__)("Deselect all"):(0,a.__)("Select all")})}function _({action:o,onClick:g,isBusy:u,items:f}){const j=typeof o.label=="string"?o.label:o.label(f);return(0,c.jsx)(r.Button,{disabled:u,accessibleWhenDisabled:!0,label:j,icon:o.icon,isDestructive:o.isDestructive,size:"compact",onClick:g,isBusy:u,tooltipPosition:"top"})}const v=[];function O({action:o,selectedItems:g,actionInProgress:u,setActionInProgress:f}){const j=(0,l.useRegistry)(),E=(0,t.useMemo)(()=>g.filter(P=>!o.isEligible||o.isEligible(P)),[o,g]);return"RenderModal"in o?(0,c.jsx)(p,{action:o,items:E,ActionTriggerComponent:_},o.id):(0,c.jsx)(_,{action:o,onClick:async()=>{f(o.id),await o.callback(g,{registry:j}),f(null)},items:E,isBusy:u===o.id},o.id)}function y(o,g,u,f,j,E,P,S,I){const C=E.length>0?(0,a.sprintf)((0,a._n)("%d Item selected","%d Items selected",E.length),E.length):(0,a.sprintf)((0,a._n)("%d Item","%d Items",o.length),o.length);return(0,c.jsxs)(r.__experimentalHStack,{expanded:!1,className:"dataviews-bulk-actions-footer__container",spacing:3,children:[(0,c.jsx)(w,{selection:f,onChangeSelection:I,data:o,actions:g,getItemId:u}),(0,c.jsx)("span",{className:"dataviews-bulk-actions-footer__item-count",children:C}),(0,c.jsxs)(r.__experimentalHStack,{className:"dataviews-bulk-actions-footer__action-buttons",expanded:!1,spacing:1,children:[j.map(V=>(0,c.jsx)(O,{action:V,selectedItems:E,actionInProgress:P,setActionInProgress:S},V.id)),E.length>0&&(0,c.jsx)(r.Button,{icon:b.closeSmall,showTooltip:!0,tooltipPosition:"top",size:"compact",label:(0,a.__)("Cancel"),disabled:!!P,accessibleWhenDisabled:!1,onClick:()=>{I(v)}})]})]})}function R({selection:o,actions:g,onChangeSelection:u,data:f,getItemId:j}){const[E,P]=(0,t.useState)(null),S=(0,t.useRef)(null),I=(0,t.useMemo)(()=>g.filter(A=>A.supportsBulk),[g]),C=(0,t.useMemo)(()=>f.filter(A=>I.some(D=>!D.isEligible||D.isEligible(A))),[f,I]),V=(0,t.useMemo)(()=>f.filter(A=>o.includes(j(A))&&C.includes(A)),[o,f,j,C]),T=(0,t.useMemo)(()=>g.filter(A=>A.supportsBulk&&A.icon&&V.some(D=>!A.isEligible||A.isEligible(D))),[g,V]);if(E)S.current||(S.current=y(f,g,j,o,T,V,E,P,u));else return S.current&&(S.current=null),y(f,g,j,o,T,V,E,P,u);return S.current}function h(){const{data:o,selection:g,actions:u=v,onChangeSelection:f,getItemId:j}=(0,t.useContext)(d.default);return(0,c.jsx)(R,{selection:g,onChangeSelection:f,data:o,actions:u,getItemId:j})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/constants.js");const a=(0,n.createContext)({view:{type:r.LAYOUT_TABLE},onChangeView:()=>{},fields:[],data:[],paginationInfo:{totalItems:0,totalPages:0},selection:[],onChangeSelection:()=>{},setOpenedFilter:()=>{},openedFilter:null,getItemId:l=>l.id,isItemClickable:()=>!0,renderItemLink:void 0,containerWidth:0,containerRef:(0,n.createRef)(),defaultLayouts:{list:{},grid:{},table:{}},filters:[],isShowingFilter:!1,setIsShowingFilter:()=>{}});var t=s.default=a},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-filters/add-filter.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.AddFilterMenu=d,s.default=void 0;var n=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/lock-unlock.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Menu:b}=(0,t.unlock)(n.privateApis);function d({filters:p,view:i,onChangeView:x,setOpenedFilter:w,triggerProps:_}){const v=p.filter(O=>!O.isVisible);return(0,l.jsxs)(b,{children:[(0,l.jsx)(b.TriggerButton,{..._}),(0,l.jsx)(b.Popover,{children:v.map(O=>(0,l.jsx)(b.Item,{onClick:()=>{w(O.field),x({...i,page:1,filters:[...i.filters||[],{field:O.field,value:void 0,operator:O.operators[0]}]})},children:(0,l.jsx)(b.ItemLabel,{children:O.name})},O.field))})]})}function m({filters:p,view:i,onChangeView:x,setOpenedFilter:w},_){if(!p.length||p.every(({isPrimary:O})=>O))return null;const v=p.filter(O=>!O.isVisible);return(0,l.jsx)(d,{triggerProps:{render:(0,l.jsx)(n.Button,{accessibleWhenDisabled:!0,size:"compact",className:"dataviews-filters-button",variant:"tertiary",disabled:!v.length,ref:_}),children:(0,r.__)("Add filter")},filters:p,view:i,onChangeView:x,setOpenedFilter:w})}var c=s.default=(0,a.forwardRef)(m)},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-filters/filter.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=v;var r=n(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),a=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+icons@10.28.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),d=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-filters/search-widget.js")),m=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-filters/input-widget.js")),c=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/constants.js"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i="Enter",x=" ",w=({activeElements:O,filterInView:y,filter:R})=>{if(O===void 0||O.length===0)return R.name;const h={Name:(0,p.jsx)("span",{className:"dataviews-filters__summary-filter-text-name"}),Value:(0,p.jsx)("span",{className:"dataviews-filters__summary-filter-text-value"})};if(y?.operator===c.OPERATOR_IS_ANY)return(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is any: </Name><Value>%2$s</Value>"),R.name,O.map(o=>o.label).join(", ")),h);if(y?.operator===c.OPERATOR_IS_NONE)return(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is none: </Name><Value>%2$s</Value>"),R.name,O.map(o=>o.label).join(", ")),h);if(y?.operator===c.OPERATOR_IS_ALL)return(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is all: </Name><Value>%2$s</Value>"),R.name,O.map(o=>o.label).join(", ")),h);if(y?.operator===c.OPERATOR_IS_NOT_ALL)return(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is not all: </Name><Value>%2$s</Value>"),R.name,O.map(o=>o.label).join(", ")),h);if(y?.operator===c.OPERATOR_IS)return(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is: </Name><Value>%2$s</Value>"),R.name,O[0].label),h);if(y?.operator===c.OPERATOR_IS_NOT)return(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is not: </Name><Value>%2$s</Value>"),R.name,O[0].label),h);if(y?.operator===c.OPERATOR_LESS_THAN)return(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is less than: </Name><Value>%2$s</Value>"),R.name,O[0].label),h);if(y?.operator===c.OPERATOR_GREATER_THAN)return(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is greater than: </Name><Value>%2$s</Value>"),R.name,O[0].label),h);if(y?.operator===c.OPERATOR_LESS_THAN_OR_EQUAL)return(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is less than or equal to: </Name><Value>%2$s</Value>"),R.name,O[0].label),h);if(y?.operator===c.OPERATOR_GREATER_THAN_OR_EQUAL)return(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is greater than or equal to: </Name><Value>%2$s</Value>"),R.name,O[0].label),h);if(y?.operator===c.OPERATOR_CONTAINS)return(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s contains: </Name><Value>%2$s</Value>"),R.name,O[0].label),h);if(y?.operator===c.OPERATOR_NOT_CONTAINS)return(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s doesn't contain: </Name><Value>%2$s</Value>"),R.name,O[0].label),h);if(y?.operator===c.OPERATOR_STARTS_WITH)return(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s starts with: </Name><Value>%2$s</Value>"),R.name,O[0].label),h);if(y?.operator===c.OPERATOR_BEFORE)return(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is before: </Name><Value>%2$s</Value>"),R.name,O[0].label),h);if(y?.operator===c.OPERATOR_AFTER)return(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is after: </Name><Value>%2$s</Value>"),R.name,O[0].label),h);if(y?.operator===c.OPERATOR_BEFORE_INC)return(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is on or before: </Name><Value>%2$s</Value>"),R.name,O[0].label),h);if(y?.operator===c.OPERATOR_AFTER_INC)return(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is on or after: </Name><Value>%2$s</Value>"),R.name,O[0].label),h);if(y?.operator===c.OPERATOR_BETWEEN){const{label:o}=O[0];return(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s between (inc): </Name><Value>%2$s-%3$s</Value>"),R.name,o[0],o[1]),h)}return y?.operator===c.OPERATOR_ON?(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is: </Name><Value>%2$s</Value>"),R.name,O[0].label),h):y?.operator===c.OPERATOR_NOT_ON?(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is not: </Name><Value>%2$s</Value>"),R.name,O[0].label),h):y?.operator===c.OPERATOR_IN_THE_PAST?(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is in the past: </Name><Value>%2$s</Value>"),R.name,`${O[0].value.value} ${O[0].value.unit}`),h):y?.operator===c.OPERATOR_OVER?(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is over: </Name><Value>%2$s</Value> ago"),R.name,`${O[0].value.value} ${O[0].value.unit}`),h):(0,t.sprintf)((0,t.__)("Unknown status for %1$s"),R.name)};function _({filter:O,view:y,onChangeView:R}){const h=O.operators?.map(u=>({value:u,label:c.OPERATORS[u]?.label})),o=y.filters?.find(u=>u.field===O.field),g=o?.operator||O.operators[0];return h.length>1&&(0,p.jsxs)(a.__experimentalHStack,{spacing:2,justify:"flex-start",className:"dataviews-filters__summary-operators-container",children:[(0,p.jsx)(a.FlexItem,{className:"dataviews-filters__summary-operators-filter-name",children:O.name}),(0,p.jsx)(a.SelectControl,{className:"dataviews-filters__summary-operators-filter-select",label:(0,t.__)("Conditions"),value:g,options:h,onChange:u=>{var f,j;const E=u,P=o?.operator,S=o?[...((f=y.filters)!==null&&f!==void 0?f:[]).map(I=>{if(I.field===O.field){const C=[c.OPERATOR_BETWEEN,c.OPERATOR_IN_THE_PAST,c.OPERATOR_OVER],V=P&&(C.includes(P)||C.includes(E));return{...I,value:V?void 0:I.value,operator:E}}return I})]:[...(j=y.filters)!==null&&j!==void 0?j:[],{field:O.field,operator:E,value:void 0}];R({...y,page:1,filters:S})},size:"small",variant:"minimal",__nextHasNoMarginBottom:!0,hideLabelFromVision:!0})]})}function v({addFilterRef:O,openedFilter:y,fields:R,...h}){const o=(0,l.useRef)(null),{filter:g,view:u,onChangeView:f}=h,j=u.filters?.find(C=>C.field===g.field);let E=[];g.elements.length>0?E=g.elements.filter(C=>g.singleSelection?C.value===j?.value:j?.value?.includes(C.value)):j?.value!==void 0&&(E=[{value:j.value,label:j.value}]);const P=g.isPrimary,S=j?.value!==void 0,I=!P||S;return(0,p.jsx)(a.Dropdown,{defaultOpen:y===g.field,contentClassName:"dataviews-filters__summary-popover",popoverProps:{placement:"bottom-start",role:"dialog"},onClose:()=>{o.current?.focus()},renderToggle:({isOpen:C,onToggle:V})=>(0,p.jsxs)("div",{className:"dataviews-filters__summary-chip-container",children:[(0,p.jsx)(a.Tooltip,{text:(0,t.sprintf)((0,t.__)("Filter by: %1$s"),g.name.toLowerCase()),placement:"top",children:(0,p.jsx)("div",{className:(0,r.default)("dataviews-filters__summary-chip",{"has-reset":I,"has-values":S}),role:"button",tabIndex:0,onClick:V,onKeyDown:T=>{[i,x].includes(T.key)&&(V(),T.preventDefault())},"aria-pressed":C,"aria-expanded":C,ref:o,children:(0,p.jsx)(w,{activeElements:E,filterInView:j,filter:g})})}),I&&(0,p.jsx)(a.Tooltip,{text:P?(0,t.__)("Reset"):(0,t.__)("Remove"),placement:"top",children:(0,p.jsx)("button",{className:(0,r.default)("dataviews-filters__summary-chip-remove",{"has-values":S}),onClick:()=>{f({...u,page:1,filters:u.filters?.filter(T=>T.field!==g.field)}),P?o.current?.focus():O.current?.focus()},children:(0,p.jsx)(a.Icon,{icon:b.closeSmall})})})]}),renderContent:()=>(0,p.jsxs)(a.__experimentalVStack,{spacing:0,justify:"flex-start",children:[(0,p.jsx)(_,{...h}),h.filter.elements.length>0?(0,p.jsx)(d.default,{...h,filter:{...h.filter,elements:h.filter.elements}}):(0,p.jsx)(m.default,{...h,fields:R})]})})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-filters/index.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.FiltersToggle=v,s.default=void 0,s.useFilters=_;var r=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@10.28.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),b=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-filters/filter.js")),d=w(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-filters/add-filter.js")),m=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-filters/reset-filters.js")),c=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),p=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/constants.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function x(h){if(typeof WeakMap!="function")return null;var o=new WeakMap,g=new WeakMap;return(x=function(u){return u?g:o})(h)}function w(h,o){if(!o&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var g=x(o);if(g&&g.has(h))return g.get(h);var u={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var j in h)if(j!=="default"&&{}.hasOwnProperty.call(h,j)){var E=f?Object.getOwnPropertyDescriptor(h,j):null;E&&(E.get||E.set)?Object.defineProperty(u,j,E):u[j]=h[j]}return u.default=h,g&&g.set(h,u),u}function _(h,o){return(0,r.useMemo)(()=>{const g=[];return h.forEach(u=>{var f;if(u.filterBy===!1||!u.elements?.length&&!u.Edit)return;const j=u.filterBy.operators,E=!!u.filterBy?.isPrimary;g.push({field:u.id,name:u.label,elements:(f=u.elements)!==null&&f!==void 0?f:[],singleSelection:j.some(P=>p.SINGLE_SELECTION_OPERATORS.includes(P)),operators:j,isVisible:E||!!o.filters?.some(P=>P.field===u.id&&p.ALL_OPERATORS.includes(P.operator)),isPrimary:E})}),g.sort((u,f)=>u.isPrimary&&!f.isPrimary?-1:!u.isPrimary&&f.isPrimary?1:u.name.localeCompare(f.name)),g},[h,o])}function v(){const{filters:h,view:o,onChangeView:g,setOpenedFilter:u,isShowingFilter:f,setIsShowingFilter:j}=(0,r.useContext)(c.default),E=(0,r.useRef)(null),P=(0,r.useCallback)(A=>{g(A),j(!0)},[g,j]),I=!!h.filter(A=>A.isVisible).length;if(h.length===0)return null;const C={label:(0,l.__)("Add filter"),"aria-expanded":!1,isPressed:!1},V={label:(0,l._x)("Filter","verb"),"aria-expanded":f,isPressed:f,onClick:()=>{f||u(null),j(!f)}},T=(0,i.jsx)(a.Button,{ref:E,className:"dataviews-filters__visibility-toggle",size:"compact",icon:t.funnel,...I?V:C});return(0,i.jsx)("div",{className:"dataviews-filters__container-visibility-toggle",children:I?(0,i.jsx)(O,{buttonRef:E,filtersCount:o.filters?.length,children:T}):(0,i.jsx)(d.AddFilterMenu,{filters:h,view:o,onChangeView:P,setOpenedFilter:u,triggerProps:{render:T}})})}function O({buttonRef:h,filtersCount:o,children:g}){return(0,r.useEffect)(()=>()=>{h.current?.focus()},[h]),(0,i.jsxs)(i.Fragment,{children:[g,!!o&&(0,i.jsx)("span",{className:"dataviews-filters-toggle__count",children:o})]})}function y({className:h}){const{fields:o,view:g,onChangeView:u,openedFilter:f,setOpenedFilter:j}=(0,r.useContext)(c.default),E=(0,r.useRef)(null),P=_(o,g),S=(0,i.jsx)(d.default,{filters:P,view:g,onChangeView:u,ref:E,setOpenedFilter:j},"add-filter"),I=P.filter(V=>V.isVisible);if(I.length===0)return null;const C=[...I.map(V=>(0,i.jsx)(b.default,{filter:V,view:g,fields:o,onChangeView:u,addFilterRef:E,openedFilter:f},V.field)),S];return C.push((0,i.jsx)(m.default,{filters:P,view:g,onChangeView:u},"reset-filters")),(0,i.jsx)(a.__experimentalHStack,{justify:"flex-start",style:{width:"fit-content"},wrap:!0,className:h,children:C})}var R=s.default=(0,r.memo)(y)},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-filters/input-widget.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=m;var r=n(e("../../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/es6/index.js")),a=e("../../../node_modules/.pnpm/@wordpress+compose@7.28.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-filters/utils.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function m({filter:c,view:p,onChangeView:i,fields:x}){const w=p.filters?.find(R=>R.field===c.field),_=x.find(R=>R.id===c.field),v=(0,b.getCurrentValue)(c,w),O=(0,t.useMemo)(()=>{var R;return((R=p.filters)!==null&&R!==void 0?R:[]).reduce((h,o)=>(h[o.field]=o.value,h),{})},[p.filters]),y=(0,a.useEvent)(R=>{var h;if(!_||!w)return;const o=R[_.id];(0,r.default)(o,v)||i({...p,filters:((h=p.filters)!==null&&h!==void 0?h:[]).map(g=>g.field===c.field?{...g,operator:w.operator||c.operators[0],value:o}:g)})});return!_||!_.Edit||!w?null:(0,d.jsx)(l.Flex,{className:"dataviews-filters__user-input-widget",gap:2.5,direction:"column",children:(0,d.jsx)(_.Edit,{hideLabelFromVision:!0,data:O,field:_,operator:w.operator,onChange:y})})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-filters/reset-filters.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=t;var n=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({filters:l,view:b,onChangeView:d}){const m=p=>l.some(i=>i.field===p&&i.isPrimary),c=!b.search&&!b.filters?.some(p=>p.value!==void 0||!m(p.field));return(0,a.jsx)(n.Button,{disabled:c,accessibleWhenDisabled:!0,size:"compact",variant:"tertiary",className:"dataviews-filters__reset-button",onClick:()=>{d({...b,page:1,search:"",filters:[]})},children:(0,r.__)("Reset")})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-filters/search-widget.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=g;var r=w(e("../../../node_modules/.pnpm/@ariakit+react@0.4.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react/cjs/index.cjs")),a=n(e("../../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js")),t=n(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),l=e("../../../node_modules/.pnpm/@wordpress+compose@7.28.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+icons@10.28.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-filters/utils.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function x(u){if(typeof WeakMap!="function")return null;var f=new WeakMap,j=new WeakMap;return(x=function(E){return E?j:f})(u)}function w(u,f){if(!f&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var j=x(f);if(j&&j.has(u))return j.get(u);var E={__proto__:null},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var S in u)if(S!=="default"&&{}.hasOwnProperty.call(u,S)){var I=P?Object.getOwnPropertyDescriptor(u,S):null;I&&(I.get||I.set)?Object.defineProperty(E,S,I):E[S]=u[S]}return E.default=u,j&&j.set(u,E),E}function _(u=""){return(0,a.default)(u.trim().toLowerCase())}const v=(u,f,j)=>u.singleSelection?j:Array.isArray(f?.value)?f.value.includes(j)?f.value.filter(E=>E!==j):[...f.value,j]:[j];function O(u,f){return`${u}-${f}`}const y=({selected:u})=>(0,i.jsx)("span",{className:(0,t.default)("dataviews-filters__search-widget-listitem-multi-selection",{"is-selected":u}),children:u&&(0,i.jsx)(m.Icon,{icon:c.check})}),R=({selected:u})=>(0,i.jsx)("span",{className:(0,t.default)("dataviews-filters__search-widget-listitem-single-selection",{"is-selected":u})});function h({view:u,filter:f,onChangeView:j}){const E=(0,l.useInstanceId)(h,"dataviews-filter-list-box"),[P,S]=(0,d.useState)(f.operators?.length===1?void 0:null),I=u.filters?.find(V=>V.field===f.field),C=(0,p.getCurrentValue)(f,I);return(0,i.jsx)(m.Composite,{virtualFocus:!0,focusLoop:!0,activeId:P,setActiveId:S,role:"listbox",className:"dataviews-filters__search-widget-listbox","aria-label":(0,b.sprintf)((0,b.__)("List of: %1$s"),f.name),onFocusVisible:()=>{!P&&f.elements.length&&S(O(E,f.elements[0].value))},render:(0,i.jsx)(m.Composite.Typeahead,{}),children:f.elements.map(V=>(0,i.jsxs)(m.Composite.Hover,{render:(0,i.jsx)(m.Composite.Item,{id:O(E,V.value),render:(0,i.jsx)("div",{"aria-label":V.label,role:"option",className:"dataviews-filters__search-widget-listitem"}),onClick:()=>{var T,A;const D=I?[...((T=u.filters)!==null&&T!==void 0?T:[]).map(M=>M.field===f.field?{...M,operator:I.operator||f.operators[0],value:v(f,I,V.value)}:M)]:[...(A=u.filters)!==null&&A!==void 0?A:[],{field:f.field,operator:f.operators[0],value:v(f,I,V.value)}];j({...u,page:1,filters:D})}}),children:[f.singleSelection&&(0,i.jsx)(R,{selected:C===V.value}),!f.singleSelection&&(0,i.jsx)(y,{selected:C.includes(V.value)}),(0,i.jsx)("span",{children:V.label})]},V.value))})}function o({view:u,filter:f,onChangeView:j}){const[E,P]=(0,d.useState)(""),S=(0,d.useDeferredValue)(E),I=u.filters?.find(T=>T.field===f.field),C=(0,p.getCurrentValue)(f,I),V=(0,d.useMemo)(()=>{const T=_(S);return f.elements.filter(A=>_(A.label).includes(T))},[f.elements,S]);return(0,i.jsxs)(r.ComboboxProvider,{selectedValue:C,setSelectedValue:T=>{var A,D;const M=I?[...((A=u.filters)!==null&&A!==void 0?A:[]).map(B=>B.field===f.field?{...B,operator:I.operator||f.operators[0],value:T}:B)]:[...(D=u.filters)!==null&&D!==void 0?D:[],{field:f.field,operator:f.operators[0],value:T}];j({...u,page:1,filters:M})},setValue:P,children:[(0,i.jsxs)("div",{className:"dataviews-filters__search-widget-filter-combobox__wrapper",children:[(0,i.jsx)(r.ComboboxLabel,{render:(0,i.jsx)(m.VisuallyHidden,{children:(0,b.__)("Search items")}),children:(0,b.__)("Search items")}),(0,i.jsx)(r.Combobox,{autoSelect:"always",placeholder:(0,b.__)("Search"),className:"dataviews-filters__search-widget-filter-combobox__input"}),(0,i.jsx)("div",{className:"dataviews-filters__search-widget-filter-combobox__icon",children:(0,i.jsx)(m.Icon,{icon:c.search})})]}),(0,i.jsxs)(r.ComboboxList,{className:"dataviews-filters__search-widget-filter-combobox-list",alwaysVisible:!0,children:[V.map(T=>(0,i.jsxs)(r.ComboboxItem,{resetValueOnSelect:!1,value:T.value,className:"dataviews-filters__search-widget-listitem",hideOnClick:!1,setValueOnClick:!1,focusOnHover:!0,children:[f.singleSelection&&(0,i.jsx)(R,{selected:C===T.value}),!f.singleSelection&&(0,i.jsx)(y,{selected:C.includes(T.value)}),(0,i.jsxs)("span",{children:[(0,i.jsx)(r.ComboboxItemValue,{className:"dataviews-filters__search-widget-filter-combobox-item-value",value:T.label}),!!T.description&&(0,i.jsx)("span",{className:"dataviews-filters__search-widget-listitem-description",children:T.description})]})]},T.value)),!V.length&&(0,i.jsx)("p",{children:(0,b.__)("No results found")})]})]})}function g(u){const f=u.filter.elements.length>10?o:h;return(0,i.jsx)(f,{...u})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-filters/utils.js":(N,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.getCurrentValue=void 0;const e=[],n=(r,a)=>r.singleSelection?a?.value:Array.isArray(a?.value)?a.value:!Array.isArray(a?.value)&&a?.value?[a.value]:e;s.getCurrentValue=n},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-footer/index.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=p;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),t=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),l=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-pagination/index.js")),b=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-bulk-actions/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/constants.js"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c=[];function p(){const{view:i,paginationInfo:{totalItems:x=0,totalPages:w},data:_,actions:v=c}=(0,a.useContext)(t.default),O=(0,b.useSomeItemHasAPossibleBulkAction)(v,_)&&[d.LAYOUT_TABLE,d.LAYOUT_GRID].includes(i.type);return!x||!w||w<=1&&!O?null:!!x&&(0,m.jsxs)(r.__experimentalHStack,{expanded:!1,justify:"end",className:"dataviews-footer",children:[O&&(0,m.jsx)(b.BulkActionsFooter,{}),(0,m.jsx)(l.default,{})]})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-item-actions/index.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.ActionModal=x,s.ActionsMenuGroup=w,s.default=_;var n=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@10.28.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+data@10.28.0_react@18.3.1/node_modules/@wordpress/data/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/lock-unlock.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Menu:m,kebabCase:c}=(0,b.unlock)(n.privateApis);function p({action:y,onClick:R,items:h}){const o=typeof y.label=="string"?y.label:y.label(h);return(0,d.jsx)(n.Button,{label:o,icon:y.icon,disabled:!!y.disabled,accessibleWhenDisabled:!0,isDestructive:y.isDestructive,size:"compact",onClick:R})}function i({action:y,onClick:R,items:h}){const o=typeof y.label=="string"?y.label:y.label(h);return(0,d.jsx)(m.Item,{disabled:y.disabled,onClick:R,children:(0,d.jsx)(m.ItemLabel,{children:o})})}function x({action:y,items:R,closeModal:h}){var o;const g=typeof y.label=="string"?y.label:y.label(R);return(0,d.jsx)(n.Modal,{title:y.modalHeader||g,__experimentalHideHeader:!!y.hideModalHeader,onRequestClose:h,focusOnMount:(o=y.modalFocusOnMount)!==null&&o!==void 0?o:!0,size:y.modalSize||"medium",overlayClassName:`dataviews-action-modal dataviews-action-modal__${c(y.id)}`,children:(0,d.jsx)(y.RenderModal,{items:R,closeModal:h})})}function w({actions:y,item:R,registry:h,setActiveModalAction:o}){return(0,d.jsx)(m.Group,{children:y.map(g=>(0,d.jsx)(i,{action:g,onClick:()=>{if("RenderModal"in g){o(g);return}g.callback([R],{registry:h})},items:[R]},g.id))})}function _({item:y,actions:R,isCompact:h}){const o=(0,l.useRegistry)(),{primaryActions:g,eligibleActions:u}=(0,a.useMemo)(()=>{const f=R.filter(E=>!E.isEligible||E.isEligible(y));return{primaryActions:f.filter(E=>E.isPrimary&&!!E.icon),eligibleActions:f}},[R,y]);return h?(0,d.jsx)(v,{item:y,actions:u,isSmall:!0,registry:o}):g.length===u.length?(0,d.jsx)(O,{item:y,actions:g,registry:o}):(0,d.jsxs)(n.__experimentalHStack,{spacing:1,justify:"flex-end",className:"dataviews-item-actions",style:{flexShrink:0,width:"auto"},children:[(0,d.jsx)(O,{item:y,actions:g,registry:o}),(0,d.jsx)(v,{item:y,actions:u,registry:o})]})}function v({item:y,actions:R,isSmall:h,registry:o}){const[g,u]=(0,a.useState)(null);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(m,{placement:"bottom-end",children:[(0,d.jsx)(m.TriggerButton,{render:(0,d.jsx)(n.Button,{size:h?"small":"compact",icon:t.moreVertical,label:(0,r.__)("Actions"),accessibleWhenDisabled:!0,disabled:!R.length,className:"dataviews-all-actions-button"})}),(0,d.jsx)(m.Popover,{children:(0,d.jsx)(w,{actions:R,item:y,registry:o,setActiveModalAction:u})})]}),!!g&&(0,d.jsx)(x,{action:g,items:[y],closeModal:()=>u(null)})]})}function O({item:y,actions:R,registry:h}){const[o,g]=(0,a.useState)(null);return!Array.isArray(R)||R.length===0?null:(0,d.jsxs)(d.Fragment,{children:[R.map(u=>(0,d.jsx)(p,{action:u,onClick:()=>{if("RenderModal"in u){g(u);return}u.callback([y],{registry:h})},items:[y]},u.id)),!!o&&(0,d.jsx)(x,{action:o,items:[y],closeModal:()=>g(null)})]})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-layout/index.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=b;var r=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),a=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/index.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function b({className:d}){const{actions:m=[],data:c,fields:p,getItemId:i,getItemLevel:x,isLoading:w,view:_,onChangeView:v,selection:O,onChangeSelection:y,setOpenedFilter:R,onClickItem:h,isItemClickable:o,renderItemLink:g}=(0,r.useContext)(a.default),u=t.VIEW_LAYOUTS.find(f=>f.type===_.type)?.component;return(0,l.jsx)(u,{className:d,actions:m,data:c,fields:p,getItemId:i,getItemLevel:x,isLoading:w,onChangeView:v,onChangeSelection:y,selection:O,setOpenedFilter:R,onClickItem:h,renderItemLink:g,isItemClickable:o,view:_})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-pagination/index.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.DataViewsPagination=m,s.default=void 0;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@10.28.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),b=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function m(){var p;const{view:i,onChangeView:x,paginationInfo:{totalItems:w=0,totalPages:_}}=(0,a.useContext)(b.default);if(!w||!_)return null;const v=(p=i.page)!==null&&p!==void 0?p:1,O=Array.from(Array(_)).map((y,R)=>{const h=R+1;return{value:h.toString(),label:h.toString(),"aria-label":v===h?(0,t.sprintf)((0,t.__)("Page %1$d of %2$d"),v,_):h.toString()}});return!!w&&_!==1&&(0,d.jsxs)(r.__experimentalHStack,{expanded:!1,className:"dataviews-pagination",justify:"end",spacing:6,children:[(0,d.jsx)(r.__experimentalHStack,{justify:"flex-start",expanded:!1,spacing:1,className:"dataviews-pagination__page-select",children:(0,a.createInterpolateElement)((0,t.sprintf)((0,t._x)("<div>Page</div>%1$s<div>of %2$d</div>","paging"),"<CurrentPage />",_),{div:(0,d.jsx)("div",{"aria-hidden":!0}),CurrentPage:(0,d.jsx)(r.SelectControl,{"aria-label":(0,t.__)("Current page"),value:v.toString(),options:O,onChange:y=>{x({...i,page:+y})},size:"small",__nextHasNoMarginBottom:!0,variant:"minimal"})})}),(0,d.jsxs)(r.__experimentalHStack,{expanded:!1,spacing:1,children:[(0,d.jsx)(r.Button,{onClick:()=>x({...i,page:v-1}),disabled:v===1,accessibleWhenDisabled:!0,label:(0,t.__)("Previous page"),icon:(0,t.isRTL)()?l.next:l.previous,showTooltip:!0,size:"compact",tooltipPosition:"top"}),(0,d.jsx)(r.Button,{onClick:()=>x({...i,page:v+1}),disabled:v>=_,accessibleWhenDisabled:!0,label:(0,t.__)("Next page"),icon:(0,t.isRTL)()?l.previous:l.next,showTooltip:!0,size:"compact",tooltipPosition:"top"})]})]})}var c=s.default=(0,a.memo)(m)},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-search/index.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var r=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+compose@7.28.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),b=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=(0,a.memo)(function({label:i}){const{view:x,onChangeView:w}=(0,a.useContext)(b.default),[_,v,O]=(0,l.useDebouncedInput)(x.search);(0,a.useEffect)(()=>{var o;v((o=x.search)!==null&&o!==void 0?o:"")},[x.search,v]);const y=(0,a.useRef)(w),R=(0,a.useRef)(x);(0,a.useEffect)(()=>{y.current=w,R.current=x},[w,x]),(0,a.useEffect)(()=>{O!==R.current?.search&&y.current({...R.current,page:1,search:O})},[O]);const h=i||(0,r.__)("Search");return(0,d.jsx)(t.SearchControl,{className:"dataviews-search",__nextHasNoMarginBottom:!0,onChange:v,value:_,label:h,placeholder:h,size:"compact"})});var c=s.default=m},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-selection-checkbox/index.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=t;var n=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({selection:l,onChangeSelection:b,item:d,getItemId:m,titleField:c,disabled:p}){const i=m(d),x=!p&&l.includes(i),w=c?.getValue?.({item:d})||(0,r.__)("(no title)");return(0,a.jsx)(n.CheckboxControl,{className:"dataviews-selection-checkbox",__nextHasNoMarginBottom:!0,"aria-label":w,"aria-disabled":p,checked:x,onChange:()=>{p||b(l.includes(i)?l.filter(_=>i!==_):[...l,i])}})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-view-config/index.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.DataviewsViewConfigDropdown=S,s.ViewTypeMenu=O,s.default=void 0;var r=n(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),a=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+icons@10.28.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),d=n(e("../../../node_modules/.pnpm/@wordpress+warning@3.28.0/node_modules/@wordpress/warning/build-module/index.js")),m=e("../../../node_modules/.pnpm/@wordpress+compose@7.28.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/constants.js"),p=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/index.js"),i=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),x=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/lock-unlock.js"),w=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Menu:_}=(0,x.unlock)(a.privateApis),v={className:"dataviews-config__popover",placement:"bottom-end",offset:9};function O(){const{view:T,onChangeView:A,defaultLayouts:D}=(0,l.useContext)(i.default),M=Object.keys(D);if(M.length<=1)return null;const B=p.VIEW_LAYOUTS.find(k=>T.type===k.type);return(0,w.jsxs)(_,{children:[(0,w.jsx)(_.TriggerButton,{render:(0,w.jsx)(a.Button,{size:"compact",icon:B?.icon,label:(0,t.__)("Layout")})}),(0,w.jsx)(_.Popover,{children:M.map(k=>{const H=p.VIEW_LAYOUTS.find($=>$.type===k);return H?(0,w.jsx)(_.RadioItem,{value:k,name:"view-actions-available-view",checked:k===T.type,hideOnClick:!0,onChange:$=>{switch($.target.value){case"list":case"grid":case"table":const J={...T};return"layout"in J&&delete J.layout,A({...J,type:$.target.value,...D[$.target.value]})}globalThis.SCRIPT_DEBUG===!0&&(0,d.default)("Invalid dataview")},children:(0,w.jsx)(_.ItemLabel,{children:H.label})},k):null})})]})}function y(){const{view:T,fields:A,onChangeView:D}=(0,l.useContext)(i.default),M=(0,l.useMemo)(()=>A.filter(k=>k.enableSorting!==!1).map(k=>({label:k.label,value:k.id})),[A]);return(0,w.jsx)(a.SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:(0,t.__)("Sort by"),value:T.sort?.field,options:M,onChange:B=>{D({...T,sort:{direction:T?.sort?.direction||"desc",field:B},showLevels:!1})}})}function R(){const{view:T,fields:A,onChangeView:D}=(0,l.useContext)(i.default);if(A.filter(k=>k.enableSorting!==!1).length===0)return null;let B=T.sort?.direction;return!B&&T.sort?.field&&(B="desc"),(0,w.jsx)(a.__experimentalToggleGroupControl,{className:"dataviews-view-config__sort-direction",__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,isBlock:!0,label:(0,t.__)("Order"),value:B,onChange:k=>{if(k==="asc"||k==="desc"){D({...T,sort:{direction:k,field:T.sort?.field||A.find(H=>H.enableSorting!==!1)?.id||""},showLevels:!1});return}globalThis.SCRIPT_DEBUG===!0&&(0,d.default)("Invalid direction")},children:c.SORTING_DIRECTIONS.map(k=>(0,w.jsx)(a.__experimentalToggleGroupControlOptionIcon,{value:k,icon:c.sortIcons[k],label:c.sortLabels[k]},k))})}const h=[10,20,50,100];function o(){const{view:T,perPageSizes:A,onChangeView:D}=(0,l.useContext)(i.default),M=A??h;return(0,w.jsx)(a.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,isBlock:!0,label:(0,t.__)("Items per page"),value:T.perPage||10,disabled:!T?.sort?.field,onChange:B=>{const k=typeof B=="number"||B===void 0?B:parseInt(B,10);D({...T,perPage:k,page:1})},children:M.map(B=>(0,w.jsx)(a.__experimentalToggleGroupControlOption,{value:B,label:B.toString()},B))})}function g({previewOptions:T,onChangePreviewOption:A,onMenuOpenChange:D,activeOption:M}){const B=k=>{setTimeout(()=>{const H=document.querySelector(`.dataviews-field-control__field-${k} .dataviews-field-control__field-preview-options-button`);H instanceof HTMLElement&&H.focus()},50)};return(0,w.jsxs)(_,{onOpenChange:D,children:[(0,w.jsx)(_.TriggerButton,{render:(0,w.jsx)(a.Button,{className:"dataviews-field-control__field-preview-options-button",size:"compact",icon:b.moreVertical,label:(0,t.__)("Preview")})}),(0,w.jsx)(_.Popover,{children:T?.map(({id:k,label:H})=>(0,w.jsx)(_.RadioItem,{value:k,checked:k===M,onChange:()=>{A?.(k),B(k)},children:(0,w.jsx)(_.ItemLabel,{children:H})},k))})]})}function u({field:T,label:A,description:D,isVisible:M,isFirst:B,isLast:k,canMove:H=!0,onToggleVisibility:$,onMoveUp:J,onMoveDown:U,previewOptions:K,onChangePreviewOption:G}){const[L,Y]=(0,l.useState)(!1),W=()=>{setTimeout(()=>{const Z=document.querySelector(`.dataviews-field-control__field-${T.id} .dataviews-field-control__field-visibility-button`);Z instanceof HTMLElement&&Z.focus()},50)};return(0,w.jsx)(a.__experimentalItem,{children:(0,w.jsxs)(a.__experimentalHStack,{expanded:!0,className:(0,r.default)("dataviews-field-control__field",`dataviews-field-control__field-${T.id}`,{"is-interacting":L}),justify:"flex-start",children:[(0,w.jsx)("span",{className:"dataviews-field-control__icon",children:!H&&!T.enableHiding&&(0,w.jsx)(a.Icon,{icon:b.lock})}),(0,w.jsxs)("span",{className:"dataviews-field-control__label-sub-label-container",children:[(0,w.jsx)("span",{className:"dataviews-field-control__label",children:A||T.label}),D&&(0,w.jsx)("span",{className:"dataviews-field-control__sub-label",children:D})]}),(0,w.jsxs)(a.__experimentalHStack,{justify:"flex-end",expanded:!1,className:"dataviews-field-control__actions",children:[M&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(a.Button,{disabled:B||!H,accessibleWhenDisabled:!0,size:"compact",onClick:J,icon:b.chevronUp,label:B||!H?(0,t.__)("This field can't be moved up"):(0,t.sprintf)((0,t.__)("Move %s up"),T.label)}),(0,w.jsx)(a.Button,{disabled:k||!H,accessibleWhenDisabled:!0,size:"compact",onClick:U,icon:b.chevronDown,label:k||!H?(0,t.__)("This field can't be moved down"):(0,t.sprintf)((0,t.__)("Move %s down"),T.label)})]}),$&&(0,w.jsx)(a.Button,{className:"dataviews-field-control__field-visibility-button",disabled:!T.enableHiding,accessibleWhenDisabled:!0,size:"compact",onClick:()=>{$(),W()},icon:M?b.unseen:b.seen,label:M?(0,t.sprintf)((0,t._x)("Hide %s","field"),T.label):(0,t.sprintf)((0,t._x)("Show %s","field"),T.label)}),K&&(0,w.jsx)(g,{previewOptions:K,onChangePreviewOption:G,onMenuOpenChange:Y,activeOption:T.id})]})]})})}function f({index:T,field:A,view:D,onChangeView:M}){var B;const k=(B=D.fields)!==null&&B!==void 0?B:[],H=T!==void 0&&k.includes(A.id);return(0,w.jsx)(u,{field:A,isVisible:H,isFirst:T!==void 0&&T<1,isLast:T!==void 0&&T===k.length-1,onToggleVisibility:()=>{M({...D,fields:H?k.filter($=>$!==A.id):[...k,A.id]})},onMoveUp:T!==void 0?()=>{var $;M({...D,fields:[...($=k.slice(0,T-1))!==null&&$!==void 0?$:[],A.id,k[T-1],...k.slice(T+1)]})}:void 0,onMoveDown:T!==void 0?()=>{var $;M({...D,fields:[...($=k.slice(0,T))!==null&&$!==void 0?$:[],k[T+1],A.id,...k.slice(T+2)]})}:void 0})}function j(T){return!!T}function E(){var T;const{view:A,fields:D,onChangeView:M}=(0,l.useContext)(i.default),B=[A?.titleField,A?.mediaField,A?.descriptionField].filter(Boolean),k=(T=A.fields)!==null&&T!==void 0?T:[],H=D.filter(F=>!k.includes(F.id)&&!B.includes(F.id)&&F.type!=="media"),$=k.map(F=>D.find(z=>z.id===F)).filter(j);if(!$?.length&&!H?.length)return null;const J=D.find(F=>F.id===A.titleField),U=D.find(F=>F.id===A.mediaField),K=D.find(F=>F.id===A.descriptionField),G=D.filter(F=>F.type==="media");let L;if(G.length>1){var Y;const F=j(U)&&((Y=A.showMedia)!==null&&Y!==void 0?Y:!0);L=j(U)&&(0,w.jsx)(u,{field:U,label:(0,t.__)("Preview"),description:U.label,isVisible:F,onToggleVisibility:()=>{M({...A,showMedia:!F})},canMove:!1,previewOptions:G.map(z=>({label:z.label,id:z.id})),onChangePreviewOption:z=>M({...A,mediaField:z})},U.id)}const W=[{field:J,isVisibleFlag:"showTitle"},{field:U,isVisibleFlag:"showMedia",ui:L},{field:K,isVisibleFlag:"showDescription"}].filter(({field:F})=>j(F)),Z=W.filter(({field:F,isVisibleFlag:z})=>{var Q;return j(F)&&((Q=A[z])!==null&&Q!==void 0?Q:!0)}),q=W.filter(({field:F,isVisibleFlag:z})=>{var Q;return j(F)&&!(!((Q=A[z])!==null&&Q!==void 0)||Q)});return(0,w.jsxs)(a.__experimentalVStack,{className:"dataviews-field-control",spacing:6,children:[(0,w.jsx)(a.__experimentalVStack,{className:"dataviews-view-config__properties",spacing:0,children:(Z.length>0||!!$?.length)&&(0,w.jsxs)(a.__experimentalItemGroup,{isBordered:!0,isSeparated:!0,children:[Z.map(({field:F,isVisibleFlag:z,ui:Q})=>Q??(0,w.jsx)(u,{field:F,isVisible:!0,onToggleVisibility:()=>{M({...A,[z]:!1})},canMove:!1},F.id)),$.map((F,z)=>(0,w.jsx)(f,{field:F,view:A,onChangeView:M,index:z},F.id))]})}),(!!H?.length||!!q.length)&&(0,w.jsxs)(a.__experimentalVStack,{spacing:4,children:[(0,w.jsx)(a.BaseControl.VisualLabel,{style:{margin:0},children:(0,t.__)("Hidden")}),(0,w.jsx)(a.__experimentalVStack,{className:"dataviews-view-config__properties",spacing:0,children:(0,w.jsxs)(a.__experimentalItemGroup,{isBordered:!0,isSeparated:!0,children:[q.length>0&&q.map(({field:F,isVisibleFlag:z,ui:Q})=>Q??(0,w.jsx)(u,{field:F,isVisible:!1,onToggleVisibility:()=>{M({...A,[z]:!0})},canMove:!1},F.id)),H.map(F=>(0,w.jsx)(f,{field:F,view:A,onChangeView:M},F.id))]})})]})]})}function P({title:T,description:A,children:D}){return(0,w.jsxs)(a.__experimentalGrid,{columns:12,className:"dataviews-settings-section",gap:4,children:[(0,w.jsxs)("div",{className:"dataviews-settings-section__sidebar",children:[(0,w.jsx)(a.__experimentalHeading,{level:2,className:"dataviews-settings-section__title",children:T}),A&&(0,w.jsx)(a.__experimentalText,{variant:"muted",className:"dataviews-settings-section__description",children:A})]}),(0,w.jsx)(a.__experimentalGrid,{columns:8,gap:4,className:"dataviews-settings-section__content",children:D})]})}function S(){const{view:T}=(0,l.useContext)(i.default),A=(0,m.useInstanceId)(I,"dataviews-view-config-dropdown"),D=p.VIEW_LAYOUTS.find(M=>M.type===T.type);return(0,w.jsx)(a.Dropdown,{expandOnMobile:!0,popoverProps:{...v,id:A},renderToggle:({onToggle:M,isOpen:B})=>(0,w.jsx)(a.Button,{size:"compact",icon:b.cog,label:(0,t._x)("View options","View is used as a noun"),onClick:M,"aria-expanded":B?"true":"false","aria-controls":A}),renderContent:()=>(0,w.jsx)(a.__experimentalDropdownContentWrapper,{paddingSize:"medium",className:"dataviews-config__popover-content-wrapper",children:(0,w.jsxs)(a.__experimentalVStack,{className:"dataviews-view-config",spacing:6,children:[(0,w.jsxs)(P,{title:(0,t.__)("Appearance"),children:[(0,w.jsxs)(a.__experimentalHStack,{expanded:!0,className:"is-divided-in-two",children:[(0,w.jsx)(y,{}),(0,w.jsx)(R,{})]}),!!D?.viewConfigOptions&&(0,w.jsx)(D.viewConfigOptions,{}),(0,w.jsx)(o,{})]}),(0,w.jsx)(P,{title:(0,t.__)("Properties"),children:(0,w.jsx)(E,{})})]})})})}function I(){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(O,{}),(0,w.jsx)(S,{})]})}const C=(0,l.memo)(I);var V=s.default=C},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews/index.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+compose@7.28.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),l=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),b=O(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-filters/index.js")),d=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-layout/index.js")),m=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-footer/index.js")),c=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-search/index.js")),p=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-bulk-actions/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-pagination/index.js"),x=O(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-view-config/index.js")),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/normalize-fields.js"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function v(j){if(typeof WeakMap!="function")return null;var E=new WeakMap,P=new WeakMap;return(v=function(S){return S?P:E})(j)}function O(j,E){if(!E&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var P=v(E);if(P&&P.has(j))return P.get(j);var S={__proto__:null},I=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in j)if(C!=="default"&&{}.hasOwnProperty.call(j,C)){var V=I?Object.getOwnPropertyDescriptor(j,C):null;V&&(V.get||V.set)?Object.defineProperty(S,C,V):S[C]=j[C]}return S.default=j,P&&P.set(j,S),S}const y=j=>j.id,R=()=>!0,h=[];function o({header:j,search:E=!0,searchLabel:P=void 0}){const{isShowingFilter:S}=(0,a.useContext)(l.default);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(r.__experimentalHStack,{alignment:"top",justify:"space-between",className:"dataviews__view-actions",spacing:1,children:[(0,_.jsxs)(r.__experimentalHStack,{justify:"start",expanded:!1,className:"dataviews__search",children:[E&&(0,_.jsx)(c.default,{label:P}),(0,_.jsx)(b.FiltersToggle,{})]}),(0,_.jsxs)(r.__experimentalHStack,{spacing:1,expanded:!1,style:{flexShrink:0},children:[(0,_.jsx)(x.default,{}),j]})]}),S&&(0,_.jsx)(b.default,{className:"dataviews-filters__container"}),(0,_.jsx)(d.default,{}),(0,_.jsx)(m.default,{})]})}function g({view:j,onChangeView:E,fields:P,search:S=!0,searchLabel:I=void 0,actions:C=h,data:V,getItemId:T=y,getItemLevel:A,isLoading:D=!1,paginationInfo:M,defaultLayouts:B,selection:k,onChangeSelection:H,onClickItem:$,renderItemLink:J,isItemClickable:U=R,header:K,children:G,perPageSizes:L}){const Y=(0,a.useRef)(null),[W,Z]=(0,a.useState)(0),q=(0,t.useResizeObserver)(te=>{Z(te[0].borderBoxSize[0].inlineSize)},{box:"border-box"}),[F,z]=(0,a.useState)([]),Q=k===void 0||H===void 0,ee=Q?F:k,[de,oe]=(0,a.useState)(null);function X(te){const ne=typeof te=="function"?te(ee):te;Q&&z(ne),H&&H(ne)}const se=(0,a.useMemo)(()=>(0,w.normalizeFields)(P),[P]),ae=(0,a.useMemo)(()=>ee.filter(te=>V.some(ne=>T(ne)===te)),[ee,V,T]),ie=(0,b.useFilters)(se,j),[re,le]=(0,a.useState)(()=>(ie||[]).some(te=>te.isPrimary));return(0,_.jsx)(l.default.Provider,{value:{view:j,onChangeView:E,fields:se,actions:C,data:V,isLoading:D,paginationInfo:M,selection:ae,onChangeSelection:X,openedFilter:de,setOpenedFilter:oe,getItemId:T,getItemLevel:A,isItemClickable:U,onClickItem:$,renderItemLink:J,containerWidth:W,containerRef:Y,defaultLayouts:B,filters:ie,isShowingFilter:re,setIsShowingFilter:le,perPageSizes:L},children:(0,_.jsx)("div",{className:"dataviews-wrapper",ref:(0,t.useMergeRefs)([Y,q]),children:G??(0,_.jsx)(o,{header:K,search:S,searchLabel:I})})})}const u=g;u.BulkActionToolbar=p.BulkActionsFooter,u.Filters=b.default,u.FiltersToggle=b.FiltersToggle,u.Layout=d.default,u.LayoutSwitcher=x.ViewTypeMenu,u.Pagination=i.DataViewsPagination,u.Search=c.default,u.ViewConfig=x.DataviewsViewConfigDropdown;var f=s.default=u},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/constants.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.sortValues=s.sortLabels=s.sortIcons=s.sortArrows=s.SORTING_DIRECTIONS=s.SINGLE_SELECTION_OPERATORS=s.OPERATOR_STARTS_WITH=s.OPERATOR_OVER=s.OPERATOR_ON=s.OPERATOR_NOT_ON=s.OPERATOR_NOT_CONTAINS=s.OPERATOR_LESS_THAN_OR_EQUAL=s.OPERATOR_LESS_THAN=s.OPERATOR_IS_NOT_ALL=s.OPERATOR_IS_NOT=s.OPERATOR_IS_NONE=s.OPERATOR_IS_ANY=s.OPERATOR_IS_ALL=s.OPERATOR_IS=s.OPERATOR_IN_THE_PAST=s.OPERATOR_GREATER_THAN_OR_EQUAL=s.OPERATOR_GREATER_THAN=s.OPERATOR_CONTAINS=s.OPERATOR_BETWEEN=s.OPERATOR_BEFORE_INC=s.OPERATOR_BEFORE=s.OPERATOR_AFTER_INC=s.OPERATOR_AFTER=s.OPERATORS=s.LAYOUT_TABLE=s.LAYOUT_LIST=s.LAYOUT_GRID=s.ALL_OPERATORS=void 0;var n=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+icons@10.28.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js");const a=s.OPERATOR_IS="is",t=s.OPERATOR_IS_NOT="isNot",l=s.OPERATOR_IS_ANY="isAny",b=s.OPERATOR_IS_NONE="isNone",d=s.OPERATOR_IS_ALL="isAll",m=s.OPERATOR_IS_NOT_ALL="isNotAll",c=s.OPERATOR_LESS_THAN="lessThan",p=s.OPERATOR_GREATER_THAN="greaterThan",i=s.OPERATOR_LESS_THAN_OR_EQUAL="lessThanOrEqual",x=s.OPERATOR_GREATER_THAN_OR_EQUAL="greaterThanOrEqual",w=s.OPERATOR_BEFORE="before",_=s.OPERATOR_AFTER="after",v=s.OPERATOR_BEFORE_INC="beforeInc",O=s.OPERATOR_AFTER_INC="afterInc",y=s.OPERATOR_CONTAINS="contains",R=s.OPERATOR_NOT_CONTAINS="notContains",h=s.OPERATOR_STARTS_WITH="startsWith",o=s.OPERATOR_BETWEEN="between",g=s.OPERATOR_ON="on",u=s.OPERATOR_NOT_ON="notOn",f=s.OPERATOR_IN_THE_PAST="inThePast",j=s.OPERATOR_OVER="over",E=s.ALL_OPERATORS=[a,t,l,b,d,m,c,p,i,x,w,_,v,O,y,R,h,o,g,u,f,j],P=s.SINGLE_SELECTION_OPERATORS=[a,t,c,p,i,x,w,_,v,O,y,R,h,g,u],S=s.OPERATORS={[a]:{key:"is-filter",label:(0,n.__)("Is")},[t]:{key:"is-not-filter",label:(0,n.__)("Is not")},[l]:{key:"is-any-filter",label:(0,n.__)("Is any")},[b]:{key:"is-none-filter",label:(0,n.__)("Is none")},[d]:{key:"is-all-filter",label:(0,n.__)("Is all")},[m]:{key:"is-not-all-filter",label:(0,n.__)("Is not all")},[c]:{key:"less-than-filter",label:(0,n.__)("Less than")},[p]:{key:"greater-than-filter",label:(0,n.__)("Greater than")},[i]:{key:"less-than-or-equal-filter",label:(0,n.__)("Less than or equal")},[x]:{key:"greater-than-or-equal-filter",label:(0,n.__)("Greater than or equal")},[w]:{key:"before-filter",label:(0,n.__)("Before")},[_]:{key:"after-filter",label:(0,n.__)("After")},[v]:{key:"before-inc-filter",label:(0,n.__)("Before (inc)")},[O]:{key:"after-inc-filter",label:(0,n.__)("After (inc)")},[y]:{key:"contains-filter",label:(0,n.__)("Contains")},[R]:{key:"not-contains-filter",label:(0,n.__)("Doesn't contain")},[h]:{key:"starts-with-filter",label:(0,n.__)("Starts with")},[o]:{key:"between-filter",label:(0,n.__)("Between (inc)")},[g]:{key:"on-filter",label:(0,n.__)("On")},[u]:{key:"not-on-filter",label:(0,n.__)("Not on")},[f]:{key:"in-the-past-filter",label:(0,n.__)("In the past")},[j]:{key:"over-filter",label:(0,n.__)("Over")}},I=s.SORTING_DIRECTIONS=["asc","desc"],C=s.sortArrows={asc:"\u2191",desc:"\u2193"},V=s.sortValues={asc:"ascending",desc:"descending"},T=s.sortLabels={asc:(0,n.__)("Sort ascending"),desc:(0,n.__)("Sort descending")},A=s.sortIcons={asc:r.arrowUp,desc:r.arrowDown},D=s.LAYOUT_TABLE="table",M=s.LAYOUT_GRID="grid",B=s.LAYOUT_LIST="list"},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataform-controls/boolean.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=a;var n=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function a({field:t,onChange:l,data:b,hideLabelFromVision:d}){const{id:m,getValue:c,label:p}=t;return(0,r.jsx)(n.ToggleControl,{hidden:d,__nextHasNoMarginBottom:!0,label:p,checked:c({item:b}),onChange:()=>l({[m]:!c({item:b})})})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataform-controls/checkbox.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=a;var n=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function a({field:t,onChange:l,data:b,hideLabelFromVision:d}){const{id:m,getValue:c,label:p,description:i}=t;return(0,r.jsx)(n.CheckboxControl,{__nextHasNoMarginBottom:!0,hidden:d,label:p,help:i,checked:c({item:b}),onChange:()=>l({[m]:!c({item:b})})})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataform-controls/datetime.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=m;var n=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/constants.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const b={[t.OPERATOR_IN_THE_PAST]:[{value:"days",label:(0,a.__)("Days")},{value:"weeks",label:(0,a.__)("Weeks")},{value:"months",label:(0,a.__)("Months")},{value:"years",label:(0,a.__)("Years")}],[t.OPERATOR_OVER]:[{value:"days",label:(0,a.__)("Days ago")},{value:"weeks",label:(0,a.__)("Weeks ago")},{value:"months",label:(0,a.__)("Months ago")},{value:"years",label:(0,a.__)("Years ago")}]};function d({id:c,value:p,onChange:i,label:x,hideLabelFromVision:w,options:_}){const{value:v="",unit:O=_[0].value}=p,y=(0,r.useCallback)(h=>i({[c]:{value:Number(h),unit:O}}),[c,i,O]),R=(0,r.useCallback)(h=>i({[c]:{value:v,unit:h}}),[c,i,v]);return(0,l.jsx)(n.BaseControl,{id:c,__nextHasNoMarginBottom:!0,className:"dataviews-controls__datetime",label:x,hideLabelFromVision:w,children:(0,l.jsxs)(n.__experimentalHStack,{spacing:2.5,children:[(0,l.jsx)(n.__experimentalNumberControl,{__next40pxDefaultSize:!0,className:"dataviews-controls__datetime-number",spinControls:"none",min:1,step:1,value:v,onChange:y}),(0,l.jsx)(n.SelectControl,{className:"dataviews-controls__datetime-unit",__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:(0,a.__)("Unit"),value:O,options:_,onChange:R,hideLabelFromVision:!0})]})})}function m({data:c,field:p,onChange:i,hideLabelFromVision:x,operator:w}){const{id:_,label:v}=p,O=p.getValue({item:c}),y=(0,r.useCallback)(R=>i({[_]:R}),[_,i]);return w===t.OPERATOR_IN_THE_PAST||w===t.OPERATOR_OVER?(0,l.jsx)(d,{id:_,value:O&&typeof O=="object"?O:{},onChange:i,label:v,hideLabelFromVision:x,options:b[w]}):(0,l.jsxs)("fieldset",{className:"dataviews-controls__datetime",children:[!x&&(0,l.jsx)(n.BaseControl.VisualLabel,{as:"legend",children:v}),x&&(0,l.jsx)(n.VisuallyHidden,{as:"legend",children:v}),(0,l.jsx)(n.TimePicker,{currentTime:typeof O=="string"?O:void 0,onChange:y,hideLabelFromVision:!0})]})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataform-controls/email.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=t;var n=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({data:l,field:b,onChange:d,hideLabelFromVision:m}){const{id:c,label:p,placeholder:i,description:x}=b,w=b.getValue({item:l}),_=(0,r.useCallback)(v=>d({[c]:v}),[c,d]);return(0,a.jsx)(n.TextControl,{type:"email",label:p,placeholder:i,value:w??"",help:x,onChange:_,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:m})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataform-controls/index.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.getControl=x,s.getControlByType=w;var r=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataform-controls/checkbox.js")),a=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataform-controls/datetime.js")),t=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataform-controls/email.js")),l=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataform-controls/integer.js")),b=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataform-controls/radio.js")),d=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataform-controls/select.js")),m=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataform-controls/text.js")),c=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataform-controls/toggle-group.js")),p=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataform-controls/boolean.js"));const i={boolean:p.default,checkbox:r.default,datetime:a.default,email:t.default,integer:l.default,radio:b.default,select:d.default,text:m.default,toggleGroup:c.default};function x(_,v){return typeof _.Edit=="function"?_.Edit:typeof _.Edit=="string"?w(_.Edit):_.elements?w("select"):typeof v.Edit=="string"?w(v.Edit):v.Edit}function w(_){if(Object.keys(i).includes(_))return i[_];throw"Control "+_+" not found"}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataform-controls/integer.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=d;var n=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/constants.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function b({id:m,value:c,onChange:p,hideLabelFromVision:i}){const[x="",w=""]=Array.isArray(c)?c:[],_=(0,r.useCallback)(O=>p({[m]:[Number(O),w]}),[m,p,w]),v=(0,r.useCallback)(O=>p({[m]:[x,Number(O)]}),[m,p,x]);return(0,l.jsx)(n.BaseControl,{__nextHasNoMarginBottom:!0,help:(0,a.__)("The max. value must be greater than the min. value."),children:(0,l.jsxs)(n.Flex,{direction:"row",gap:4,children:[(0,l.jsx)(n.__experimentalNumberControl,{label:(0,a.__)("Min."),value:x,max:w?Number(w)-1:void 0,onChange:_,__next40pxDefaultSize:!0,hideLabelFromVision:i}),(0,l.jsx)(n.__experimentalNumberControl,{label:(0,a.__)("Max."),value:w,min:x?Number(x)+1:void 0,onChange:v,__next40pxDefaultSize:!0,hideLabelFromVision:i})]})})}function d({data:m,field:c,onChange:p,hideLabelFromVision:i,operator:x}){var w;const{id:_,label:v,description:O}=c,y=(w=c.getValue({item:m}))!==null&&w!==void 0?w:"",R=(0,r.useCallback)(h=>p({[_]:Number(h)}),[_,p]);return x===t.OPERATOR_BETWEEN?(0,l.jsx)(b,{id:_,value:y,onChange:p,hideLabelFromVision:i}):(0,l.jsx)(n.__experimentalNumberControl,{label:v,help:O,value:y,onChange:R,__next40pxDefaultSize:!0,hideLabelFromVision:i})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataform-controls/radio.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=t;var n=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({data:l,field:b,onChange:d,hideLabelFromVision:m}){const{id:c,label:p}=b,i=b.getValue({item:l}),x=(0,r.useCallback)(w=>d({[c]:w}),[c,d]);return b.elements?(0,a.jsx)(n.RadioControl,{label:p,onChange:x,options:b.elements,selected:i,hideLabelFromVision:m}):null}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataform-controls/select.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=l;var n=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function l({data:b,field:d,onChange:m,hideLabelFromVision:c}){var p,i;const{id:x,label:w}=d,_=(p=d.getValue({item:b}))!==null&&p!==void 0?p:"",v=(0,r.useCallback)(y=>m({[x]:y}),[x,m]),O=[{label:(0,a.__)("Select item"),value:""},...(i=d?.elements)!==null&&i!==void 0?i:[]];return(0,t.jsx)(n.SelectControl,{label:w,value:_,help:d.description,options:O,onChange:v,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:c})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataform-controls/text.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=t;var n=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({data:l,field:b,onChange:d,hideLabelFromVision:m}){const{id:c,label:p,placeholder:i,description:x}=b,w=b.getValue({item:l}),_=(0,r.useCallback)(v=>d({[c]:v}),[c,d]);return(0,a.jsx)(n.TextControl,{label:p,placeholder:i,value:w??"",help:x,onChange:_,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:m})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataform-controls/toggle-group.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=t;var n=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({data:l,field:b,onChange:d,hideLabelFromVision:m}){const{id:c}=b,p=b.getValue({item:l}),i=(0,r.useCallback)(x=>d({[c]:x}),[c,d]);if(b.elements){const x=b.elements.find(w=>w.value===p);return(0,a.jsx)(n.__experimentalToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:b.label,help:x?.description||b.description,onChange:i,value:p,hideLabelFromVision:m,children:b.elements.map(w=>(0,a.jsx)(n.__experimentalToggleGroupControlOption,{label:w.label,value:w.value},w.value))})}return null}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataforms-layouts/data-form-layout.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.DataFormLayout=c;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataforms-layouts/index.js"),l=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataform-context/index.js")),b=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataforms-layouts/is-combined-field.js"),d=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/normalize-form-fields.js")),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function c({data:p,form:i,onChange:x,children:w}){const{fields:_}=(0,a.useContext)(l.default);function v(y){const R=typeof y=="string"?y:y.id;return _.find(h=>h.id===R)}const O=(0,a.useMemo)(()=>(0,d.default)(i),[i]);return(0,m.jsx)(r.__experimentalVStack,{spacing:i?.type==="panel"?2:4,children:O.map(y=>{const R=(0,t.getFormFieldLayout)(y.layout)?.component;if(!R)return null;const h=(0,b.isCombinedField)(y)?void 0:v(y);return h&&h.isVisible&&!h.isVisible(p)?null:w?w(R,y):(0,m.jsx)(R,{data:p,field:y,onChange:x},y.id)})})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataforms-layouts/index.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.getFormFieldLayout=l;var r=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataforms-layouts/regular/index.js")),a=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataforms-layouts/panel/index.js"));const t=[{type:"regular",component:r.default},{type:"panel",component:a.default}];function l(b){return t.find(d=>d.type===b)}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataforms-layouts/is-combined-field.js":(N,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.isCombinedField=e;function e(n){return n.children!==void 0}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataforms-layouts/panel/index.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=w;var r=n(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),a=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+icons@10.28.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),d=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataform-context/index.js")),m=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataforms-layouts/data-form-layout.js"),c=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataforms-layouts/is-combined-field.js"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function i({title:_,onClose:v}){return(0,p.jsx)(a.__experimentalVStack,{className:"dataforms-layouts-panel__dropdown-header",spacing:4,children:(0,p.jsxs)(a.__experimentalHStack,{alignment:"center",children:[_&&(0,p.jsx)(a.__experimentalHeading,{level:2,size:13,children:_}),(0,p.jsx)(a.__experimentalSpacer,{}),v&&(0,p.jsx)(a.Button,{label:(0,t.__)("Close"),icon:b.closeSmall,onClick:v,size:"small"})]})})}function x({fieldDefinition:_,popoverAnchor:v,labelPosition:O="side",data:y,onChange:R,field:h}){const o=(0,c.isCombinedField)(h)?h.label:_?.label,g=(0,l.useMemo)(()=>(0,c.isCombinedField)(h)?{type:"regular",fields:h.children.map(f=>typeof f=="string"?{id:f}:f)}:{type:"regular",fields:[{id:h.id}]},[h]),u=(0,l.useMemo)(()=>({anchor:v,placement:"left-start",offset:36,shift:!0}),[v]);return(0,p.jsx)(a.Dropdown,{contentClassName:"dataforms-layouts-panel__field-dropdown",popoverProps:u,focusOnMount:!0,toggleProps:{size:"compact",variant:"tertiary",tooltipPosition:"middle left"},renderToggle:({isOpen:f,onToggle:j})=>(0,p.jsx)(a.Button,{className:"dataforms-layouts-panel__field-control",size:"compact",variant:["none","top"].includes(O)?"link":"tertiary","aria-expanded":f,"aria-label":(0,t.sprintf)((0,t._x)("Edit %s","field"),o||""),onClick:j,disabled:_.readOnly===!0,accessibleWhenDisabled:!0,children:(0,p.jsx)(_.render,{item:y,field:_})}),renderContent:({onClose:f})=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{title:o,onClose:f}),(0,p.jsx)(m.DataFormLayout,{data:y,form:g,onChange:R,children:(j,E)=>{var P;return(0,p.jsx)(j,{data:y,field:E,onChange:R,hideLabelFromVision:((P=g?.fields)!==null&&P!==void 0?P:[]).length<2},E.id)}})]})})}function w({data:_,field:v,onChange:O}){var y;const{fields:R}=(0,l.useContext)(d.default),h=R.find(E=>{if((0,c.isCombinedField)(v)){const P=v.children.filter(I=>typeof I=="string"||!(0,c.isCombinedField)(I)),S=typeof P[0]=="string"?P[0]:P[0].id;return E.id===S}return E.id===v.id}),[o,g]=(0,l.useState)(null);if(!h)return null;const u=(y=v.labelPosition)!==null&&y!==void 0?y:"side",f=(0,r.default)("dataforms-layouts-panel__field-label",`dataforms-layouts-panel__field-label--label-position-${u}`),j=(0,c.isCombinedField)(v)?v.label:h?.label;return u==="top"?(0,p.jsxs)(a.__experimentalVStack,{className:"dataforms-layouts-panel__field",spacing:0,children:[(0,p.jsx)("div",{className:f,style:{paddingBottom:0},children:j}),(0,p.jsx)("div",{className:"dataforms-layouts-panel__field-control",children:(0,p.jsx)(x,{field:v,popoverAnchor:o,fieldDefinition:h,data:_,onChange:O,labelPosition:u})})]}):u==="none"?(0,p.jsx)("div",{className:"dataforms-layouts-panel__field",children:(0,p.jsx)(x,{field:v,popoverAnchor:o,fieldDefinition:h,data:_,onChange:O,labelPosition:u})}):(0,p.jsxs)(a.__experimentalHStack,{ref:g,className:"dataforms-layouts-panel__field",children:[(0,p.jsx)("div",{className:f,children:j}),(0,p.jsx)("div",{className:"dataforms-layouts-panel__field-control",children:(0,p.jsx)(x,{field:v,popoverAnchor:o,fieldDefinition:h,data:_,onChange:O,labelPosition:u})})]})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataforms-layouts/regular/index.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=p;var r=n(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),a=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),l=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataform-context/index.js")),b=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataforms-layouts/data-form-layout.js"),d=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataforms-layouts/is-combined-field.js"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function c({title:i}){return(0,m.jsx)(t.__experimentalVStack,{className:"dataforms-layouts-regular__header",spacing:4,children:(0,m.jsxs)(t.__experimentalHStack,{alignment:"center",children:[(0,m.jsx)(t.__experimentalHeading,{level:2,size:13,children:i}),(0,m.jsx)(t.__experimentalSpacer,{})]})})}function p({data:i,field:x,onChange:w,hideLabelFromVision:_}){var v;const{fields:O}=(0,a.useContext)(l.default),y=(0,a.useMemo)(()=>(0,d.isCombinedField)(x)?{fields:x.children.map(o=>typeof o=="string"?{id:o}:o),type:"regular"}:{type:"regular",fields:[]},[x]);if((0,d.isCombinedField)(x))return(0,m.jsxs)(m.Fragment,{children:[!_&&x.label&&(0,m.jsx)(c,{title:x.label}),(0,m.jsx)(b.DataFormLayout,{data:i,form:y,onChange:w})]});const R=(v=x.labelPosition)!==null&&v!==void 0?v:"top",h=O.find(o=>o.id===x.id);return!h||!h.Edit?null:R==="side"?(0,m.jsxs)(t.__experimentalHStack,{className:"dataforms-layouts-regular__field",children:[(0,m.jsx)("div",{className:(0,r.default)("dataforms-layouts-regular__field-label",`dataforms-layouts-regular__field-label--label-position-${R}`),children:h.label}),(0,m.jsx)("div",{className:"dataforms-layouts-regular__field-control",children:h.readOnly===!0?(0,m.jsx)(h.render,{item:i,field:h}):(0,m.jsx)(h.Edit,{data:i,field:h,onChange:w,hideLabelFromVision:!0},h.id)})]}):(0,m.jsx)("div",{className:"dataforms-layouts-regular__field",children:h.readOnly===!0?(0,m.jsxs)(m.Fragment,{children:[!_&&R!=="none"&&(0,m.jsx)("div",{className:"dataforms-layouts-regular__field-label",children:h.label}),(0,m.jsx)("div",{className:"dataforms-layouts-regular__field-control",children:(0,m.jsx)(h.render,{item:i,field:h})})]}):(0,m.jsx)(h.Edit,{data:i,field:h,onChange:w,hideLabelFromVision:R==="none"?!0:_})})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/grid/index.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var r=n(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),a=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+compose@7.28.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/lock-unlock.js"),d=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-item-actions/index.js")),m=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-selection-checkbox/index.js")),c=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-bulk-actions/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/utils/item-click-wrapper.js"),i=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/grid/preview-size-picker.js"),x=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Badge:w}=(0,b.unlock)(a.privateApis);function _({view:y,selection:R,onChangeSelection:h,onClickItem:o,isItemClickable:g,renderItemLink:u,getItemId:f,item:j,actions:E,mediaField:P,titleField:S,descriptionField:I,regularFields:C,badgeFields:V,hasBulkActions:T}){const{showTitle:A=!0,showMedia:D=!0,showDescription:M=!0}=y,B=(0,c.useHasAPossibleBulkAction)(E,j),k=f(j),H=(0,l.useInstanceId)(_),$=R.includes(k),J=P?.render?(0,x.jsx)(P.render,{item:j,field:P}):null,U=A&&S?.render?(0,x.jsx)(S.render,{item:j,field:S}):null;let K,G;return g(j)&&o&&(U?(K={"aria-labelledby":`dataviews-view-grid__title-field-${H}`},G={id:`dataviews-view-grid__title-field-${H}`}):K={"aria-label":(0,t.__)("Navigate to item")}),(0,x.jsxs)(a.__experimentalVStack,{spacing:0,className:(0,r.default)("dataviews-view-grid__card",{"is-selected":B&&$}),onClickCapture:L=>{if(L.ctrlKey||L.metaKey){if(L.stopPropagation(),L.preventDefault(),!B)return;h(R.includes(k)?R.filter(Y=>k!==Y):[...R,k])}},children:[D&&J&&(0,x.jsx)(p.ItemClickWrapper,{item:j,isItemClickable:g,onClickItem:o,renderItemLink:u,className:"dataviews-view-grid__media",...K,children:J}),T&&D&&J&&(0,x.jsx)(m.default,{item:j,selection:R,onChangeSelection:h,getItemId:f,titleField:S,disabled:!B}),(0,x.jsxs)(a.__experimentalHStack,{justify:"space-between",className:"dataviews-view-grid__title-actions",children:[(0,x.jsx)(p.ItemClickWrapper,{item:j,isItemClickable:g,onClickItem:o,renderItemLink:u,className:"dataviews-view-grid__title-field dataviews-title-field",...G,children:U}),!!E?.length&&(0,x.jsx)(d.default,{item:j,actions:E,isCompact:!0})]}),(0,x.jsxs)(a.__experimentalVStack,{spacing:1,children:[M&&I?.render&&(0,x.jsx)(I.render,{item:j,field:I}),!!V?.length&&(0,x.jsx)(a.__experimentalHStack,{className:"dataviews-view-grid__badge-fields",spacing:2,wrap:!0,alignment:"top",justify:"flex-start",children:V.map(L=>(0,x.jsx)(w,{className:"dataviews-view-grid__field-value",children:(0,x.jsx)(L.render,{item:j,field:L})},L.id))}),!!C?.length&&(0,x.jsx)(a.__experimentalVStack,{className:"dataviews-view-grid__fields",spacing:1,children:C.map(L=>(0,x.jsx)(a.Flex,{className:"dataviews-view-grid__field",gap:1,justify:"flex-start",expanded:!0,style:{height:"auto"},direction:"row",children:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a.FlexItem,{className:"dataviews-view-grid__field-name",children:L.header}),(0,x.jsx)(a.FlexItem,{className:"dataviews-view-grid__field-value",style:{maxHeight:"none"},children:(0,x.jsx)(L.render,{item:j,field:L})})]})},L.id))})]})]},k)}function v({actions:y,data:R,fields:h,getItemId:o,isLoading:g,onChangeSelection:u,onClickItem:f,isItemClickable:j,renderItemLink:E,selection:P,view:S,className:I}){var C;const V=h.find(L=>L.id===S?.titleField),T=h.find(L=>L.id===S?.mediaField),A=h.find(L=>L.id===S?.descriptionField),D=(C=S.fields)!==null&&C!==void 0?C:[],{regularFields:M,badgeFields:B}=D.reduce((L,Y)=>{const W=h.find(q=>q.id===Y);if(!W)return L;const Z=S.layout?.badgeFields?.includes(Y)?"badgeFields":"regularFields";return L[Z].push(W),L},{regularFields:[],badgeFields:[]}),k=!!R?.length,H=(0,i.useUpdatedPreviewSizeOnViewportChange)(),$=(0,c.useSomeItemHasAPossibleBulkAction)(y,R),J=H||S.layout?.previewSize,U=J?{gridTemplateColumns:`repeat(${J}, minmax(0, 1fr))`}:{},K=S.groupByField?h.find(L=>L.id===S.groupByField):null,G=K?R.reduce((L,Y)=>{const W=K.getValue({item:Y});return L.has(W)||L.set(W,[]),L.get(W)?.push(Y),L},new Map):null;return(0,x.jsxs)(x.Fragment,{children:[k&&K&&G&&(0,x.jsx)(a.__experimentalVStack,{spacing:4,children:Array.from(G.entries()).map(([L,Y])=>(0,x.jsxs)(a.__experimentalVStack,{spacing:2,children:[(0,x.jsx)("h3",{className:"dataviews-view-grid__group-header",children:(0,t.sprintf)((0,t.__)("%1$s: %2$s"),K.label,L)}),(0,x.jsx)(a.__experimentalGrid,{gap:8,columns:2,alignment:"top",className:(0,r.default)("dataviews-view-grid",I),style:U,"aria-busy":g,children:Y.map(W=>(0,x.jsx)(_,{view:S,selection:P,onChangeSelection:u,onClickItem:f,isItemClickable:j,renderItemLink:E,getItemId:o,item:W,actions:y,mediaField:T,titleField:V,descriptionField:A,regularFields:M,badgeFields:B,hasBulkActions:$},o(W)))})]},L))}),k&&!G&&(0,x.jsx)(a.__experimentalGrid,{gap:8,columns:2,alignment:"top",className:(0,r.default)("dataviews-view-grid",I),style:U,"aria-busy":g,children:R.map(L=>(0,x.jsx)(_,{view:S,selection:P,onChangeSelection:u,onClickItem:f,isItemClickable:j,renderItemLink:E,getItemId:o,item:L,actions:y,mediaField:T,titleField:V,descriptionField:A,regularFields:M,badgeFields:B,hasBulkActions:$},o(L)))}),!k&&(0,x.jsx)("div",{className:(0,r.default)({"dataviews-loading":g,"dataviews-no-results":!g}),children:(0,x.jsx)("p",{children:g?(0,x.jsx)(a.Spinner,{}):(0,t.__)("No results")})})]})}var O=s.default=v},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/grid/preview-size-picker.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=i,s.useUpdatedPreviewSizeOnViewportChange=p;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),l=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d={xhuge:{min:3,max:6,default:5},huge:{min:2,max:4,default:4},xlarge:{min:2,max:3,default:3},large:{min:1,max:2,default:2},mobile:{min:1,max:2,default:2}},m={xhuge:1520,huge:1140,xlarge:780,large:480,mobile:0};function c(){const x=(0,t.useContext)(l.default).containerWidth;for(const[w,_]of Object.entries(m))if(x>=_)return w;return"mobile"}function p(){const x=(0,t.useContext)(l.default).view,w=c();return(0,t.useMemo)(()=>{const _=x.layout?.previewSize;let v;if(!_)return;const O=d[w];return _<O.min&&(v=O.min),_>O.max&&(v=O.max),v},[w,x])}function i(){const x=c(),w=(0,t.useContext)(l.default),_=w.view,v=d[x],O=_.layout?.previewSize||v.default,y=(0,t.useMemo)(()=>Array.from({length:v.max-v.min+1},(R,h)=>({value:v.min+h})),[v]);return x==="mobile"?null:(0,b.jsx)(r.RangeControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,showTooltip:!1,label:(0,a.__)("Preview size"),value:v.max+v.min-O,marks:y,min:v.min,max:v.max,withInputField:!1,onChange:(R=0)=>{w.onChangeView({..._,layout:{..._.layout,previewSize:v.max+v.min-R}})},step:1})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/index.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.VIEW_LAYOUTS=void 0;var r=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+icons@10.28.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),t=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/index.js")),l=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/grid/index.js")),b=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/list/index.js")),d=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/constants.js"),m=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/grid/preview-size-picker.js")),c=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/density-picker.js"));const p=s.VIEW_LAYOUTS=[{type:d.LAYOUT_TABLE,label:(0,r.__)("Table"),component:t.default,icon:a.blockTable,viewConfigOptions:c.default},{type:d.LAYOUT_GRID,label:(0,r.__)("Grid"),component:l.default,icon:a.category,viewConfigOptions:m.default},{type:d.LAYOUT_LIST,label:(0,r.__)("List"),component:b.default,icon:(0,r.isRTL)()?a.formatListBulletsRTL:a.formatListBullets}]},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/list/index.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=h;var r=n(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),a=e("../../../node_modules/.pnpm/@wordpress+compose@7.28.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+icons@10.28.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+data@10.28.0_react@18.3.1/node_modules/@wordpress/data/build-module/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/lock-unlock.js"),p=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-item-actions/index.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Menu:x}=(0,c.unlock)(t.privateApis);function w(o){return`${o}-item-wrapper`}function _(o,g){return`${o}-primary-action-${g}`}function v(o){return`${o}-dropdown`}function O({idPrefix:o,primaryAction:g,item:u}){const f=(0,m.useRegistry)(),[j,E]=(0,l.useState)(!1),P=_(o,g.id),S=typeof g.label=="string"?g.label:g.label([u]);return"RenderModal"in g?(0,i.jsx)("div",{role:"gridcell",children:(0,i.jsx)(t.Composite.Item,{id:P,render:(0,i.jsx)(t.Button,{label:S,disabled:!!g.disabled,accessibleWhenDisabled:!0,icon:g.icon,isDestructive:g.isDestructive,size:"small",onClick:()=>E(!0)}),children:j&&(0,i.jsx)(p.ActionModal,{action:g,items:[u],closeModal:()=>E(!1)})})},g.id):(0,i.jsx)("div",{role:"gridcell",children:(0,i.jsx)(t.Composite.Item,{id:P,render:(0,i.jsx)(t.Button,{label:S,disabled:!!g.disabled,accessibleWhenDisabled:!0,icon:g.icon,isDestructive:g.isDestructive,size:"small",onClick:()=>{g.callback([u],{registry:f})}})})},g.id)}function y({view:o,actions:g,idPrefix:u,isSelected:f,item:j,titleField:E,mediaField:P,descriptionField:S,onSelect:I,otherFields:C,onDropdownTriggerKeyDown:V}){const{showTitle:T=!0,showMedia:A=!0,showDescription:D=!0}=o,M=(0,l.useRef)(null),B=`${u}-label`,k=`${u}-description`,H=(0,m.useRegistry)(),[$,J]=(0,l.useState)(!1),[U,K]=(0,l.useState)(null),G=({type:z})=>{J(z==="mouseenter")};(0,l.useEffect)(()=>{f&&M.current?.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})},[f]);const{primaryAction:L,eligibleActions:Y}=(0,l.useMemo)(()=>{const z=g.filter(ee=>!ee.isEligible||ee.isEligible(j));return{primaryAction:z.filter(ee=>ee.isPrimary&&!!ee.icon)[0],eligibleActions:z}},[g,j]),W=L&&g.length===1,Z=A&&P?.render?(0,i.jsx)("div",{className:"dataviews-view-list__media-wrapper",children:(0,i.jsx)(P.render,{item:j,field:P})}):null,q=T&&E?.render?(0,i.jsx)(E.render,{item:j,field:E}):null,F=Y?.length>0&&(0,i.jsxs)(t.__experimentalHStack,{spacing:3,className:"dataviews-view-list__item-actions",children:[L&&(0,i.jsx)(O,{idPrefix:u,primaryAction:L,item:j}),!W&&(0,i.jsxs)("div",{role:"gridcell",children:[(0,i.jsxs)(x,{placement:"bottom-end",children:[(0,i.jsx)(x.TriggerButton,{render:(0,i.jsx)(t.Composite.Item,{id:v(u),render:(0,i.jsx)(t.Button,{size:"small",icon:d.moreVertical,label:(0,b.__)("Actions"),accessibleWhenDisabled:!0,disabled:!g.length,onKeyDown:V})})}),(0,i.jsx)(x.Popover,{children:(0,i.jsx)(p.ActionsMenuGroup,{actions:Y,item:j,registry:H,setActiveModalAction:K})})]}),!!U&&(0,i.jsx)(p.ActionModal,{action:U,items:[j],closeModal:()=>K(null)})]})]});return(0,i.jsx)(t.Composite.Row,{ref:M,render:(0,i.jsx)("div",{}),role:"row",className:(0,r.default)({"is-selected":f,"is-hovered":$}),onMouseEnter:G,onMouseLeave:G,children:(0,i.jsxs)(t.__experimentalHStack,{className:"dataviews-view-list__item-wrapper",spacing:0,children:[(0,i.jsx)("div",{role:"gridcell",children:(0,i.jsx)(t.Composite.Item,{id:w(u),"aria-pressed":f,"aria-labelledby":B,"aria-describedby":k,className:"dataviews-view-list__item",onClick:()=>I(j)})}),(0,i.jsxs)(t.__experimentalHStack,{spacing:3,justify:"start",alignment:"flex-start",children:[Z,(0,i.jsxs)(t.__experimentalVStack,{spacing:1,className:"dataviews-view-list__field-wrapper",children:[(0,i.jsxs)(t.__experimentalHStack,{spacing:0,children:[(0,i.jsx)("div",{className:"dataviews-title-field",id:B,children:q}),F]}),D&&S?.render&&(0,i.jsx)("div",{className:"dataviews-view-list__field",children:(0,i.jsx)(S.render,{item:j,field:S})}),(0,i.jsx)("div",{className:"dataviews-view-list__fields",id:k,children:C.map(z=>(0,i.jsxs)("div",{className:"dataviews-view-list__field",children:[(0,i.jsx)(t.VisuallyHidden,{as:"span",className:"dataviews-view-list__field-label",children:z.label}),(0,i.jsx)("span",{className:"dataviews-view-list__field-value",children:(0,i.jsx)(z.render,{item:j,field:z})})]},z.id))})]})]})]})})}function R(o){return!!o}function h(o){var g;const{actions:u,data:f,fields:j,getItemId:E,isLoading:P,onChangeSelection:S,selection:I,view:C,className:V}=o,T=(0,a.useInstanceId)(h,"view-list"),A=f?.findLast(F=>I.includes(E(F))),D=j.find(F=>F.id===C.titleField),M=j.find(F=>F.id===C.mediaField),B=j.find(F=>F.id===C.descriptionField),k=((g=C?.fields)!==null&&g!==void 0?g:[]).map(F=>j.find(z=>F===z.id)).filter(R),H=F=>S([E(F)]),$=(0,l.useCallback)(F=>`${T}-${E(F)}`,[T,E]),J=(0,l.useCallback)((F,z)=>z.startsWith($(F)),[$]),[U,K]=(0,l.useState)(void 0);(0,l.useEffect)(()=>{A&&K(w($(A)))},[A,$]);const G=f.findIndex(F=>J(F,U??"")),L=(0,a.usePrevious)(G),Y=G!==-1,W=(0,l.useCallback)((F,z)=>{const Q=Math.min(f.length-1,Math.max(0,F));if(!f[Q])return;const ee=$(f[Q]),de=z(ee);K(de),document.getElementById(de)?.focus()},[f,$]);(0,l.useEffect)(()=>{!Y&&(L!==void 0&&L!==-1)&&W(L,w)},[Y,W,L]);const Z=(0,l.useCallback)(F=>{F.key==="ArrowDown"&&(F.preventDefault(),W(G+1,v)),F.key==="ArrowUp"&&(F.preventDefault(),W(G-1,v))},[W,G]),q=f?.length;return q?(0,i.jsx)(t.Composite,{id:T,render:(0,i.jsx)("div",{}),className:(0,r.default)("dataviews-view-list",V),role:"grid",activeId:U,setActiveId:K,children:f.map(F=>{const z=$(F);return(0,i.jsx)(y,{view:C,idPrefix:z,actions:u,item:F,isSelected:F===A,onSelect:H,mediaField:M,titleField:D,descriptionField:B,otherFields:k,onDropdownTriggerKeyDown:Z},z)})}):(0,i.jsx)("div",{className:(0,r.default)({"dataviews-loading":P,"dataviews-no-results":!q&&!P}),children:!q&&(0,i.jsx)("p",{children:P?(0,i.jsx)(t.Spinner,{}):(0,b.__)("No results")})})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/column-header-menu.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+icons@10.28.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/lock-unlock.js"),b=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/constants.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Menu:m}=(0,l.unlock)(a.privateApis);function c({children:w}){return t.Children.toArray(w).filter(Boolean).map((_,v)=>(0,d.jsxs)(t.Fragment,{children:[v>0&&(0,d.jsx)(m.Separator,{}),_]},v))}const i=(0,t.forwardRef)(function({fieldId:_,view:v,fields:O,onChangeView:y,onHide:R,setOpenedFilter:h,canMove:o=!0},g){var u;const f=(u=v.fields)!==null&&u!==void 0?u:[],j=f?.indexOf(_),E=v.sort?.field===_;let P=!1,S=!1,I=!1,C=[];const V=O.find(A=>A.id===_);if(!V)return null;P=V.enableHiding!==!1,S=V.enableSorting!==!1;const T=V.header;return C=!!V.filterBy&&V.filterBy?.operators||[],I=!v.filters?.some(A=>_===A.field)&&!!(V.elements?.length||V.Edit)&&V.filterBy!==!1&&!V.filterBy?.isPrimary,(0,d.jsxs)(m,{children:[(0,d.jsxs)(m.TriggerButton,{render:(0,d.jsx)(a.Button,{size:"compact",className:"dataviews-view-table-header-button",ref:g,variant:"tertiary"}),children:[T,v.sort&&E&&(0,d.jsx)("span",{"aria-hidden":"true",children:b.sortArrows[v.sort.direction]})]}),(0,d.jsx)(m.Popover,{style:{minWidth:"240px"},children:(0,d.jsxs)(c,{children:[S&&(0,d.jsx)(m.Group,{children:b.SORTING_DIRECTIONS.map(A=>{const D=v.sort&&E&&v.sort.direction===A,M=`${_}-${A}`;return(0,d.jsx)(m.RadioItem,{name:"view-table-sorting",value:M,checked:D,onChange:()=>{y({...v,sort:{field:_,direction:A},showLevels:!1})},children:(0,d.jsx)(m.ItemLabel,{children:b.sortLabels[A]})},M)})}),I&&(0,d.jsx)(m.Group,{children:(0,d.jsx)(m.Item,{prefix:(0,d.jsx)(a.Icon,{icon:r.funnel}),onClick:()=>{h(_),y({...v,page:1,filters:[...v.filters||[],{field:_,value:void 0,operator:C[0]}]})},children:(0,d.jsx)(m.ItemLabel,{children:(0,n.__)("Add filter")})})}),(o||P)&&V&&(0,d.jsxs)(m.Group,{children:[o&&(0,d.jsx)(m.Item,{prefix:(0,d.jsx)(a.Icon,{icon:r.arrowLeft}),disabled:j<1,onClick:()=>{var A;y({...v,fields:[...(A=f.slice(0,j-1))!==null&&A!==void 0?A:[],_,f[j-1],...f.slice(j+1)]})},children:(0,d.jsx)(m.ItemLabel,{children:(0,n.__)("Move left")})}),o&&(0,d.jsx)(m.Item,{prefix:(0,d.jsx)(a.Icon,{icon:r.arrowRight}),disabled:j>=f.length-1,onClick:()=>{var A;y({...v,fields:[...(A=f.slice(0,j))!==null&&A!==void 0?A:[],f[j+1],_,...f.slice(j+2)]})},children:(0,d.jsx)(m.ItemLabel,{children:(0,n.__)("Move right")})}),P&&V&&(0,d.jsx)(m.Item,{prefix:(0,d.jsx)(a.Icon,{icon:r.unseen}),onClick:()=>{R(V),y({...v,fields:f.filter(A=>A!==_)})},children:(0,d.jsx)(m.ItemLabel,{children:(0,n.__)("Hide column")})})]})]})})]})});var x=s.default=i},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/column-primary.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/utils/item-click-wrapper.js"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({item:b,level:d,titleField:m,mediaField:c,descriptionField:p,onClickItem:i,renderItemLink:x,isItemClickable:w}){return(0,a.jsxs)(n.__experimentalHStack,{spacing:3,justify:"flex-start",children:[c&&(0,a.jsx)("div",{className:"dataviews-view-table__cell-content-wrapper dataviews-column-primary__media",children:(0,a.jsx)(c.render,{item:b,field:c})}),(0,a.jsxs)(n.__experimentalVStack,{spacing:0,children:[m&&(0,a.jsxs)(r.ItemClickWrapper,{item:b,isItemClickable:w,onClickItem:i,renderItemLink:x,className:"dataviews-view-table__cell-content-wrapper dataviews-title-field",children:[d!==void 0&&(0,a.jsxs)("span",{className:"dataviews-view-table__level",children:["\u2014".repeat(d),"\xA0"]}),(0,a.jsx)(m.render,{item:b,field:m})]}),p&&(0,a.jsx)(p.render,{item:b,field:p})]})]})}var l=s.default=t},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/density-picker.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=d;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),l=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function d(){const m=(0,t.useContext)(l.default),c=m.view;return(0,b.jsxs)(r.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,size:"__unstable-large",label:(0,a.__)("Density"),value:c.layout?.density||"balanced",onChange:p=>{m.onChangeView({...c,layout:{...c.layout,density:p}})},isBlock:!0,children:[(0,b.jsx)(r.__experimentalToggleGroupControlOption,{value:"comfortable",label:(0,a._x)("Comfortable","Density option for DataView layout")},"comfortable"),(0,b.jsx)(r.__experimentalToggleGroupControlOption,{value:"balanced",label:(0,a._x)("Balanced","Density option for DataView layout")},"balanced"),(0,b.jsx)(r.__experimentalToggleGroupControlOption,{value:"compact",label:(0,a._x)("Compact","Density option for DataView layout")},"compact")]})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/index.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var r=n(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),a=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),b=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),d=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-selection-checkbox/index.js")),m=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-item-actions/index.js")),c=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/constants.js"),p=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews-bulk-actions/index.js"),i=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/column-header-menu.js")),x=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/column-primary.js")),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/use-is-horizontal-scroll-end.js"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function v({item:h,fields:o,column:g,align:u}){const f=o.find(E=>E.id===g);if(!f)return null;const j=(0,r.default)("dataviews-view-table__cell-content-wrapper",{"dataviews-view-table__cell-align-end":u==="end","dataviews-view-table__cell-align-center":u==="center"});return(0,_.jsx)("div",{className:j,children:(0,_.jsx)(f.render,{item:h,field:f})})}function O({hasBulkActions:h,item:o,level:g,actions:u,fields:f,id:j,view:E,titleField:P,mediaField:S,descriptionField:I,selection:C,getItemId:V,isItemClickable:T,onClickItem:A,renderItemLink:D,onChangeSelection:M,isActionsColumnSticky:B}){var k;const H=(0,p.useHasAPossibleBulkAction)(u,o),$=H&&C.includes(j),[J,U]=(0,l.useState)(!1),{showTitle:K=!0,showMedia:G=!0,showDescription:L=!0}=E,Y=()=>{U(!0)},W=()=>{U(!1)},Z=(0,l.useRef)(!1),q=(k=E.fields)!==null&&k!==void 0?k:[],F=P&&K||S&&G||I&&L;return(0,_.jsxs)("tr",{className:(0,r.default)("dataviews-view-table__row",{"is-selected":H&&$,"is-hovered":J,"has-bulk-actions":H}),onMouseEnter:Y,onMouseLeave:W,onTouchStart:()=>{Z.current=!0},onClick:()=>{H&&!Z.current&&document.getSelection()?.type!=="Range"&&M(C.includes(j)?C.filter(z=>j!==z):[j])},children:[h&&(0,_.jsx)("td",{className:"dataviews-view-table__checkbox-column",children:(0,_.jsx)("div",{className:"dataviews-view-table__cell-content-wrapper",children:(0,_.jsx)(d.default,{item:o,selection:C,onChangeSelection:M,getItemId:V,titleField:P,disabled:!H})})}),F&&(0,_.jsx)("td",{children:(0,_.jsx)(x.default,{item:o,level:g,titleField:K?P:void 0,mediaField:G?S:void 0,descriptionField:L?I:void 0,isItemClickable:T,onClickItem:A,renderItemLink:D})}),q.map(z=>{var Q;const{width:ee,maxWidth:de,minWidth:oe,align:X}=(Q=E.layout?.styles?.[z])!==null&&Q!==void 0?Q:{};return(0,_.jsx)("td",{style:{width:ee,maxWidth:de,minWidth:oe},children:(0,_.jsx)(v,{fields:f,item:o,column:z,align:X})},z)}),!!u?.length&&(0,_.jsx)("td",{className:(0,r.default)("dataviews-view-table__actions-column",{"dataviews-view-table__actions-column--sticky":!0,"dataviews-view-table__actions-column--stuck":B}),onClick:z=>z.stopPropagation(),children:(0,_.jsx)(m.default,{item:o,actions:u})})]})}function y({actions:h,data:o,fields:g,getItemId:u,getItemLevel:f,isLoading:j=!1,onChangeView:E,onChangeSelection:P,selection:S,setOpenedFilter:I,onClickItem:C,isItemClickable:V,renderItemLink:T,view:A,className:D}){var M;const{containerRef:B}=(0,l.useContext)(b.default),k=(0,l.useRef)(new Map),H=(0,l.useRef)(),[$,J]=(0,l.useState)(),U=(0,p.useSomeItemHasAPossibleBulkAction)(h,o);(0,l.useEffect)(()=>{H.current&&(H.current.focus(),H.current=void 0)});const K=(0,l.useId)(),G=(0,w.useIsHorizontalScrollEnd)({scrollContainerRef:B,enabled:!!h?.length});if($){H.current=$,J(void 0);return}const L=X=>{const se=k.current.get(X.id),ae=se?k.current.get(se.fallback):void 0;J(ae?.node)},Y=!!o?.length,W=g.find(X=>X.id===A.titleField),Z=g.find(X=>X.id===A.mediaField),q=g.find(X=>X.id===A.descriptionField),{showTitle:F=!0,showMedia:z=!0,showDescription:Q=!0}=A,ee=W&&F||Z&&z||q&&Q,de=(M=A.fields)!==null&&M!==void 0?M:[],oe=(X,se)=>ae=>{ae?k.current.set(X,{node:ae,fallback:de[se>0?se-1:1]}):k.current.delete(X)};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("table",{className:(0,r.default)("dataviews-view-table",D,{[`has-${A.layout?.density}-density`]:A.layout?.density&&["compact","comfortable"].includes(A.layout.density)}),"aria-busy":j,"aria-describedby":K,children:[(0,_.jsx)("thead",{children:(0,_.jsxs)("tr",{className:"dataviews-view-table__row",children:[U&&(0,_.jsx)("th",{className:"dataviews-view-table__checkbox-column",scope:"col",children:(0,_.jsx)(p.BulkSelectionCheckbox,{selection:S,onChangeSelection:P,data:o,actions:h,getItemId:u})}),ee&&(0,_.jsx)("th",{scope:"col",children:W&&(0,_.jsx)(i.default,{ref:oe(W.id,0),fieldId:W.id,view:A,fields:g,onChangeView:E,onHide:L,setOpenedFilter:I,canMove:!1})}),de.map((X,se)=>{var ae;const{width:ie,maxWidth:re,minWidth:le,align:te}=(ae=A.layout?.styles?.[X])!==null&&ae!==void 0?ae:{};return(0,_.jsx)("th",{style:{width:ie,maxWidth:re,minWidth:le,textAlign:te},"aria-sort":A.sort?.direction&&A.sort?.field===X?c.sortValues[A.sort.direction]:void 0,scope:"col",children:(0,_.jsx)(i.default,{ref:oe(X,se),fieldId:X,view:A,fields:g,onChangeView:E,onHide:L,setOpenedFilter:I})},X)}),!!h?.length&&(0,_.jsx)("th",{className:(0,r.default)("dataviews-view-table__actions-column",{"dataviews-view-table__actions-column--sticky":!0,"dataviews-view-table__actions-column--stuck":!G}),children:(0,_.jsx)("span",{className:"dataviews-view-table-header",children:(0,a.__)("Actions")})})]})}),(0,_.jsx)("tbody",{children:Y&&o.map((X,se)=>(0,_.jsx)(O,{item:X,level:A.showLevels&&typeof f=="function"?f(X):void 0,hasBulkActions:U,actions:h,fields:g,id:u(X)||se.toString(),view:A,titleField:W,mediaField:Z,descriptionField:q,selection:S,getItemId:u,onChangeSelection:P,onClickItem:C,renderItemLink:T,isItemClickable:V,isActionsColumnSticky:!G},u(X)))})]}),(0,_.jsx)("div",{className:(0,r.default)({"dataviews-loading":j,"dataviews-no-results":!Y&&!j}),id:K,children:!Y&&(0,_.jsx)("p",{children:j?(0,_.jsx)(t.Spinner,{}):(0,a.__)("No results")})})]})}var R=s.default=y},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/use-is-horizontal-scroll-end.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.useIsHorizontalScrollEnd=l;var n=e("../../../node_modules/.pnpm/@wordpress+compose@7.28.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+element@6.28.0/node_modules/@wordpress/element/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js");const t=b=>(0,a.isRTL)()?Math.abs(b.scrollLeft)<=1:b.scrollLeft+b.clientWidth>=b.scrollWidth-1;function l({scrollContainerRef:b,enabled:d=!1}){const[m,c]=(0,r.useState)(!1),p=(0,n.useDebounce)((0,r.useCallback)(()=>{const i=b.current;i&&c(t(i))},[b,c]),200);return(0,r.useEffect)(()=>typeof window>"u"||!d||!b.current?()=>{}:(p(),b.current.addEventListener("scroll",p),window.addEventListener("resize",p),()=>{b.current?.removeEventListener("scroll",p),window.removeEventListener("resize",p)}),[b,d]),m}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/utils/item-click-wrapper.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.ItemClickWrapper=a;var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function r({item:t,isItemClickable:l,onClickItem:b,className:d}){return!l(t)||!b?{className:d}:{className:d?`${d} ${d}--clickable`:void 0,role:"button",tabIndex:0,onClick:m=>{m.stopPropagation(),b(t)},onKeyDown:m=>{(m.key==="Enter"||m.key===""||m.key===" ")&&(m.stopPropagation(),b(t))}}}function a({item:t,isItemClickable:l,onClickItem:b,renderItemLink:d,className:m,children:c,...p}){if(!l(t))return c;if(d)return d({item:t,className:`${m} ${m}--clickable`,...p,children:c});const i=r({item:t,isItemClickable:l,onClickItem:b,className:m});return(0,n.jsx)("div",{...i,...p,children:c})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/field-types/array.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/constants.js");function r(d,m,c){const p=Array.isArray(d)?d:[],i=Array.isArray(m)?m:[];if(p.length!==i.length)return c==="asc"?p.length-i.length:i.length-p.length;const x=p.join(","),w=i.join(",");return c==="asc"?x.localeCompare(w):w.localeCompare(x)}function a(d,m){if(!Array.isArray(d)||!d.every(c=>typeof c=="string"))return!1;if(m?.elements){const c=m.elements.map(p=>p.value);if(!d.every(p=>c.includes(p)))return!1}return!0}function t({item:d,field:m}){return(m.getValue({item:d})||[]).join(", ")}const l={sort:r,isValid:a,Edit:null,render:t,enableSorting:!0,filterBy:{defaultOperators:[n.OPERATOR_IS_ANY,n.OPERATOR_IS_NONE],validOperators:[n.OPERATOR_IS_ANY,n.OPERATOR_IS_NONE,n.OPERATOR_IS_ALL,n.OPERATOR_IS_NOT_ALL]}};var b=s.default=l},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/field-types/boolean.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n=e("../../../node_modules/.pnpm/@wordpress+i18n@6.1.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/utils.js"),a=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/constants.js");function t(d,m,c){const p=!!d;return p===!!m?0:c==="asc"?p?1:-1:p?-1:1}function l(d){return!![!0,!1,void 0].includes(d)}var b=s.default={sort:t,isValid:l,Edit:"boolean",render:({item:d,field:m})=>m.elements?(0,r.renderFromElements)({item:d,field:m}):m.getValue({item:d})===!0?(0,n.__)("True"):m.getValue({item:d})===!1?(0,n.__)("False"):null,enableSorting:!0,filterBy:{defaultOperators:[a.OPERATOR_IS,a.OPERATOR_IS_NOT],validOperators:[a.OPERATOR_IS,a.OPERATOR_IS_NOT]}}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/field-types/date.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n=e("../../../node_modules/.pnpm/@wordpress+date@5.28.0/node_modules/@wordpress/date/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/utils.js");const a=d=>(0,n.dateI18n)((0,n.getSettings)().formats.date,(0,n.getDate)(d));function t(d,m,c){const p=new Date(d).getTime(),i=new Date(m).getTime();return c==="asc"?p-i:i-p}function l(d,m){return!(m?.elements&&!(m?.elements.map(p=>p.value)).includes(d))}var b=s.default={sort:t,isValid:l,Edit:null,render:({item:d,field:m})=>{if(m.elements)return(0,r.renderFromElements)({item:d,field:m});const c=m.getValue({item:d});return c?a(c):""},enableSorting:!0,filterBy:!1}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/field-types/datetime.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/utils.js"),r=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/constants.js");function a(b,d,m){const c=new Date(b).getTime(),p=new Date(d).getTime();return m==="asc"?c-p:p-c}function t(b,d){return!(d?.elements&&!(d?.elements.map(c=>c.value)).includes(b))}var l=s.default={sort:a,isValid:t,Edit:"datetime",render:({item:b,field:d})=>d.elements?(0,n.renderFromElements)({item:b,field:d}):d.getValue({item:b}),enableSorting:!0,filterBy:{defaultOperators:[r.OPERATOR_ON,r.OPERATOR_NOT_ON,r.OPERATOR_BEFORE,r.OPERATOR_AFTER,r.OPERATOR_BEFORE_INC,r.OPERATOR_AFTER_INC,r.OPERATOR_IN_THE_PAST,r.OPERATOR_OVER],validOperators:[r.OPERATOR_ON,r.OPERATOR_NOT_ON,r.OPERATOR_BEFORE,r.OPERATOR_AFTER,r.OPERATOR_BEFORE_INC,r.OPERATOR_AFTER_INC,r.OPERATOR_IN_THE_PAST,r.OPERATOR_OVER]}}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/field-types/email.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/utils.js"),a=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/constants.js");function t(d,m,c){return c==="asc"?d.localeCompare(m):m.localeCompare(d)}function l(d,m){return!(d===""||!(0,n.isEmail)(d)||m?.elements&&!(m?.elements?.map(p=>p.value)).includes(d))}var b=s.default={sort:t,isValid:l,Edit:"email",render:({item:d,field:m})=>m.elements?(0,r.renderFromElements)({item:d,field:m}):m.getValue({item:d}),enableSorting:!0,filterBy:{defaultOperators:[a.OPERATOR_IS_ANY,a.OPERATOR_IS_NONE],validOperators:[a.OPERATOR_IS,a.OPERATOR_IS_NOT,a.OPERATOR_CONTAINS,a.OPERATOR_NOT_CONTAINS,a.OPERATOR_STARTS_WITH,a.OPERATOR_IS_ANY,a.OPERATOR_IS_NONE,a.OPERATOR_IS_ALL,a.OPERATOR_IS_NOT_ALL]}}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/field-types/index.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=x;var r=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/field-types/email.js")),a=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/field-types/integer.js")),t=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/field-types/text.js")),l=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/field-types/datetime.js")),b=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/field-types/date.js")),d=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/field-types/boolean.js")),m=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/field-types/media.js")),c=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/field-types/array.js")),p=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/utils.js"),i=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/constants.js");function x(w){return w==="email"?r.default:w==="integer"?a.default:w==="text"?t.default:w==="datetime"?l.default:w==="date"?b.default:w==="boolean"?d.default:w==="media"?m.default:w==="array"?c.default:{sort:(_,v,O)=>typeof _=="number"&&typeof v=="number"?O==="asc"?_-v:v-_:O==="asc"?_.localeCompare(v):v.localeCompare(_),isValid:(_,v)=>!(v?.elements&&!(v?.elements?.map(y=>y.value)).includes(_)),Edit:null,render:({item:_,field:v})=>v.elements?(0,p.renderFromElements)({item:_,field:v}):v.getValue({item:_}),enableSorting:!0,filterBy:{defaultOperators:[i.OPERATOR_IS,i.OPERATOR_IS_NOT],validOperators:i.ALL_OPERATORS}}}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/field-types/integer.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/utils.js"),r=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/constants.js");function a(b,d,m){return m==="asc"?b-d:d-b}function t(b,d){return!(b===""||!Number.isInteger(Number(b))||d?.elements&&!(d?.elements.map(c=>c.value)).includes(Number(b)))}var l=s.default={sort:a,isValid:t,Edit:"integer",render:({item:b,field:d})=>d.elements?(0,n.renderFromElements)({item:b,field:d}):d.getValue({item:b}),enableSorting:!0,filterBy:{defaultOperators:[r.OPERATOR_IS,r.OPERATOR_IS_NOT,r.OPERATOR_LESS_THAN,r.OPERATOR_GREATER_THAN,r.OPERATOR_LESS_THAN_OR_EQUAL,r.OPERATOR_GREATER_THAN_OR_EQUAL,r.OPERATOR_BETWEEN],validOperators:[r.OPERATOR_IS,r.OPERATOR_IS_NOT,r.OPERATOR_LESS_THAN,r.OPERATOR_GREATER_THAN,r.OPERATOR_LESS_THAN_OR_EQUAL,r.OPERATOR_GREATER_THAN_OR_EQUAL,r.OPERATOR_BETWEEN,r.OPERATOR_IS_ANY,r.OPERATOR_IS_NONE,r.OPERATOR_IS_ALL,r.OPERATOR_IS_NOT_ALL]}}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/field-types/media.js":(N,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;function e(){return 0}function n(a,t){return!(t?.elements&&!(t?.elements.map(b=>b.value)).includes(a))}var r=s.default={sort:e,isValid:n,Edit:null,render:()=>null,enableSorting:!1,filterBy:!1}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/field-types/text.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/utils.js"),r=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/constants.js");function a(b,d,m){return m==="asc"?b.localeCompare(d):d.localeCompare(b)}function t(b,d){return!(d?.elements&&!(d?.elements?.map(c=>c.value)).includes(b))}var l=s.default={sort:a,isValid:t,Edit:"text",render:({item:b,field:d})=>d.elements?(0,n.renderFromElements)({item:b,field:d}):d.getValue({item:b}),enableSorting:!0,filterBy:{defaultOperators:[r.OPERATOR_IS_ANY,r.OPERATOR_IS_NONE],validOperators:[r.OPERATOR_IS,r.OPERATOR_IS_NOT,r.OPERATOR_CONTAINS,r.OPERATOR_NOT_CONTAINS,r.OPERATOR_STARTS_WITH,r.OPERATOR_IS_ANY,r.OPERATOR_IS_NONE,r.OPERATOR_IS_ALL,r.OPERATOR_IS_NOT_ALL]}}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/filter-and-sort-data-view.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.filterSortAndPaginate=p;var r=n(e("../../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js")),a=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/index.cjs"),t=e("../../../node_modules/.pnpm/@wordpress+date@5.28.0/node_modules/@wordpress/date/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/constants.js"),b=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/normalize-fields.js");function d(i=""){return(0,r.default)(i.trim().toLowerCase())}const m=[];function c(i,x){switch(x){case"days":return(0,a.subDays)(new Date,i);case"weeks":return(0,a.subWeeks)(new Date,i);case"months":return(0,a.subMonths)(new Date,i);case"years":return(0,a.subYears)(new Date,i);default:return new Date}}function p(i,x,w){if(!i)return{data:m,paginationInfo:{totalItems:0,totalPages:0}};const _=(0,b.normalizeFields)(w);let v=[...i];if(x.search){const o=d(x.search);v=v.filter(g=>_.filter(u=>u.enableGlobalSearch).map(u=>d(u.getValue({item:g}))).some(u=>u.includes(o)))}x.filters&&x.filters?.length>0&&x.filters.forEach(o=>{const g=_.find(u=>u.id===o.field);if(g){if(o.operator===l.OPERATOR_IS_ANY&&o?.value?.length>0)v=v.filter(u=>{const f=g.getValue({item:u});return Array.isArray(f)?o.value.some(j=>f.includes(j)):typeof f=="string"?o.value.includes(f):!1});else if(o.operator===l.OPERATOR_IS_NONE&&o?.value?.length>0)v=v.filter(u=>{const f=g.getValue({item:u});return Array.isArray(f)?!o.value.some(j=>f.includes(j)):typeof f=="string"?!o.value.includes(f):!1});else if(o.operator===l.OPERATOR_IS_ALL&&o?.value?.length>0)v=v.filter(u=>o.value.every(f=>g.getValue({item:u})?.includes(f)));else if(o.operator===l.OPERATOR_IS_NOT_ALL&&o?.value?.length>0)v=v.filter(u=>o.value.every(f=>!g.getValue({item:u})?.includes(f)));else if(o.operator===l.OPERATOR_IS)v=v.filter(u=>o.value===g.getValue({item:u})||o.value===void 0);else if(o.operator===l.OPERATOR_IS_NOT)v=v.filter(u=>o.value!==g.getValue({item:u}));else if(o.operator===l.OPERATOR_ON&&o.value!==void 0){const u=(0,t.getDate)(o.value);v=v.filter(f=>{const j=(0,t.getDate)(g.getValue({item:f}));return u.getTime()===j.getTime()})}else if(o.operator===l.OPERATOR_NOT_ON&&o.value!==void 0){const u=(0,t.getDate)(o.value);v=v.filter(f=>{const j=(0,t.getDate)(g.getValue({item:f}));return u.getTime()!==j.getTime()})}else if(o.operator===l.OPERATOR_LESS_THAN&&o.value!==void 0)v=v.filter(u=>g.getValue({item:u})<o.value);else if(o.operator===l.OPERATOR_GREATER_THAN&&o.value!==void 0)v=v.filter(u=>g.getValue({item:u})>o.value);else if(o.operator===l.OPERATOR_LESS_THAN_OR_EQUAL&&o.value!==void 0)v=v.filter(u=>g.getValue({item:u})<=o.value);else if(o.operator===l.OPERATOR_GREATER_THAN_OR_EQUAL&&o.value!==void 0)v=v.filter(u=>g.getValue({item:u})>=o.value);else if(o.operator===l.OPERATOR_CONTAINS&&o?.value!==void 0)v=v.filter(u=>{const f=g.getValue({item:u});return typeof f=="string"&&o.value&&f.toLowerCase().includes(String(o.value).toLowerCase())});else if(o.operator===l.OPERATOR_NOT_CONTAINS&&o?.value!==void 0)v=v.filter(u=>{const f=g.getValue({item:u});return typeof f=="string"&&o.value&&!f.toLowerCase().includes(String(o.value).toLowerCase())});else if(o.operator===l.OPERATOR_STARTS_WITH&&o?.value!==void 0)v=v.filter(u=>{const f=g.getValue({item:u});return typeof f=="string"&&o.value&&f.toLowerCase().startsWith(String(o.value).toLowerCase())});else if(o.operator===l.OPERATOR_BEFORE&&o.value!==void 0){const u=(0,t.getDate)(o.value);v=v.filter(f=>(0,t.getDate)(g.getValue({item:f}))<u)}else if(o.operator===l.OPERATOR_AFTER&&o.value!==void 0){const u=(0,t.getDate)(o.value);v=v.filter(f=>(0,t.getDate)(g.getValue({item:f}))>u)}else if(o.operator===l.OPERATOR_BEFORE_INC&&o.value!==void 0){const u=(0,t.getDate)(o.value);v=v.filter(f=>(0,t.getDate)(g.getValue({item:f}))<=u)}else if(o.operator===l.OPERATOR_AFTER_INC&&o.value!==void 0){const u=(0,t.getDate)(o.value);v=v.filter(f=>(0,t.getDate)(g.getValue({item:f}))>=u)}else if(o.operator===l.OPERATOR_BETWEEN&&Array.isArray(o.value)&&o.value.length===2&&o.value[0]!==void 0&&o.value[1]!==void 0)v=v.filter(u=>{const f=g.getValue({item:u});return typeof f=="number"||f instanceof Date||typeof f=="string"?f>=o.value[0]&&f<=o.value[1]:!1});else if(o.operator===l.OPERATOR_IN_THE_PAST&&o.value?.value!==void 0&&o.value?.unit!==void 0){const u=c(o.value.value,o.value.unit);v=v.filter(f=>{const j=(0,t.getDate)(g.getValue({item:f}));return j>=u&&j<=new Date})}else if(o.operator===l.OPERATOR_OVER&&o.value?.value!==void 0&&o.value?.unit!==void 0){const u=c(o.value.value,o.value.unit);v=v.filter(f=>(0,t.getDate)(g.getValue({item:f}))<u)}}});const O=x.sort?.field?_.find(o=>o.id===x.sort?.field):null,y=x.groupByField?_.find(o=>o.id===x.groupByField):null;(O||y)&&v.sort((o,g)=>{if(y){const f=y.sort(o,g,"asc");if(f!==0)return f}if(O){var u;return O.sort(o,g,(u=x.sort?.direction)!==null&&u!==void 0?u:"desc")}return 0});let R=v.length,h=1;if(x.page!==void 0&&x.perPage!==void 0){const o=(x.page-1)*x.perPage;R=v?.length||0,h=Math.ceil(R/x.perPage),v=v?.slice(o,o+x.perPage)}return{data:v,paginationInfo:{totalItems:R,totalPages:h}}}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/index.js":(N,s,e)=>{var n,r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");n={value:!0},n={enumerable:!0,get:function(){return t.default}},Object.defineProperty(s,"Vw",{enumerable:!0,get:function(){return a.default}}),n={enumerable:!0,get:function(){return l.VIEW_LAYOUTS}},Object.defineProperty(s,"Pp",{enumerable:!0,get:function(){return b.filterSortAndPaginate}}),n={enumerable:!0,get:function(){return d.isItemValid}};var a=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataviews/index.js")),t=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/components/dataform/index.js")),l=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataviews-layouts/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/filter-and-sort-data-view.js"),d=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/validation.js")},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/lock-unlock.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.unlock=s.lock=void 0;var n=e("../../../node_modules/.pnpm/@wordpress+private-apis@1.28.0/node_modules/@wordpress/private-apis/build-module/index.js");const{lock:r,unlock:a}=(0,n.__dangerousOptInToUnstableAPIsOnlyForCoreModules)("I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.","@wordpress/dataviews");s.unlock=a,s.lock=r},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/normalize-fields.js":(N,s,e)=>{var n=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.normalizeFields=d;var r=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/field-types/index.js")),a=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/dataform-controls/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/constants.js");const l=m=>({item:c})=>{const p=m.split(".");let i=c;for(const x of p)i.hasOwnProperty(x)?i=i[x]:i=void 0;return i};function b(m,c){if(m.filterBy===!1)return!1;if(typeof m.filterBy=="object"){let i=m.filterBy.operators;(!i||!Array.isArray(i))&&(i=c.filterBy?c.filterBy.defaultOperators:[]);let x=t.ALL_OPERATORS;return typeof c.filterBy=="object"&&(x=c.filterBy.validOperators),i=i.filter(_=>x.includes(_)),m.elements&&i.includes(t.OPERATOR_BETWEEN)&&(i=i.filter(_=>_!==t.OPERATOR_BETWEEN)),i.some(_=>t.SINGLE_SELECTION_OPERATORS.includes(_))&&(i=i.filter(_=>[...t.SINGLE_SELECTION_OPERATORS,t.OPERATOR_BETWEEN].includes(_))),i.length===0?!1:{isPrimary:!!m.filterBy.isPrimary,operators:i}}if(c.filterBy===!1)return!1;let p=c.filterBy.defaultOperators;return m.elements&&p.includes(t.OPERATOR_BETWEEN)&&(p=p.filter(i=>i!==t.OPERATOR_BETWEEN)),{operators:p}}function d(m){return m.map(c=>{var p,i,x,w,_,v,O,y;const R=(0,r.default)(c.type),h=c.getValue||l(c.id),o=(p=c.sort)!==null&&p!==void 0?p:function(P,S,I){return R.sort(h({item:P}),h({item:S}),I)},g=(i=c.isValid)!==null&&i!==void 0?i:function(P,S){return R.isValid(h({item:P}),S)},u=(0,a.getControl)(c,R),f=(x=c.render)!==null&&x!==void 0?x:function({item:P,field:S}){return R.render({item:P,field:S})},j=b(c,R);return{...c,label:c.label||c.id,header:c.header||c.label||c.id,getValue:h,render:f,sort:o,isValid:g,Edit:u,enableHiding:(w=c.enableHiding)!==null&&w!==void 0?w:!0,enableSorting:(_=(v=c.enableSorting)!==null&&v!==void 0?v:R.enableSorting)!==null&&_!==void 0?_:!0,filterBy:j,readOnly:(O=(y=c.readOnly)!==null&&y!==void 0?y:R.readOnly)!==null&&O!==void 0?O:!1}})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/normalize-form-fields.js":(N,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=e;function e(n){var r,a,t;let l="regular";["regular","panel"].includes((r=n.type)!==null&&r!==void 0?r:"")&&(l=n.type);const b=(a=n.labelPosition)!==null&&a!==void 0?a:l==="regular"?"top":"side";return((t=n.fields)!==null&&t!==void 0?t:[]).map(d=>{var m,c;if(typeof d=="string")return{id:d,layout:l,labelPosition:b};const p=(m=d.layout)!==null&&m!==void 0?m:l,i=(c=d.labelPosition)!==null&&c!==void 0?c:p==="regular"?"top":"side";return{...d,layout:p,labelPosition:i}})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/utils.js":(N,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.renderFromElements=e;function e({item:n,field:r}){const a=r.getValue({item:n});return r?.elements?.find(t=>t.value===a)?.label||r.getValue({item:n})}},"../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/validation.js":(N,s,e)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.isItemValid=r;var n=e("../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build/normalize-fields.js");function r(a,t,l){return(0,n.normalizeFields)(t.filter(({id:d})=>!!l.fields?.includes(d))).every(d=>d.isValid(a,{elements:d.elements}))}},"../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/add-query-args.js":(N,s,e)=>{e.d(s,{F:()=>t});var n=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/get-query-args.js"),r=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/build-query-string.js"),a=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/get-fragment.js");function t(l="",b){if(!b||!Object.keys(b).length)return l;const d=(0,a.h)(l)||"";let m=l.replace(d,"");const c=l.indexOf("?");return c!==-1&&(b=Object.assign((0,n.u)(l),b),m=m.substr(0,c)),m+"?"+(0,r.G)(b)+d}},"../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/build-query-string.js":(N,s,e)=>{e.d(s,{G:()=>n});function n(r){let a="";const t=Object.entries(r);let l;for(;l=t.shift();){let[b,d]=l;if(Array.isArray(d)||d&&d.constructor===Object){const c=Object.entries(d).reverse();for(const[p,i]of c)t.unshift([`${b}[${p}]`,i])}else d!==void 0&&(d===null&&(d=""),a+="&"+[b,String(d)].map(encodeURIComponent).join("="))}return a.substr(1)}},"../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/get-authority.js":(N,s,e)=>{e.d(s,{M:()=>n});function n(r){const a=/^[^\/\s:]+:(?:\/\/)?\/?([^\/\s#?]+)[\/#?]{0,1}\S*$/.exec(r);if(a)return a[1]}},"../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/get-fragment.js":(N,s,e)=>{e.d(s,{h:()=>n});function n(r){const a=/^\S+?(#[^\s\?]*)/.exec(r);if(a)return a[1]}},"../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/get-query-arg.js":(N,s,e)=>{e.d(s,{d:()=>r});var n=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/get-query-args.js");function r(a,t){return(0,n.u)(a)[t]}},"../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/get-query-args.js":(N,s,e)=>{e.d(s,{u:()=>t});var n=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/safe-decode-uri-component.js"),r=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/get-query-string.js");function a(l,b,d){const m=b.length,c=m-1;for(let p=0;p<m;p++){let i=b[p];!i&&Array.isArray(l)&&(i=l.length.toString()),i=["__proto__","constructor","prototype"].includes(i)?i.toUpperCase():i;const x=!isNaN(Number(b[p+1]));l[i]=p===c?d:l[i]||(x?[]:{}),Array.isArray(l[i])&&!x&&(l[i]={...l[i]}),l=l[i]}}function t(l){return((0,r.e)(l)||"").replace(/\+/g,"%20").split("&").reduce((b,d)=>{const[m,c=""]=d.split("=").filter(Boolean).map(n.T);if(m){const p=m.replace(/\]/g,"").split("[");a(b,p,c)}return b},Object.create(null))}},"../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/get-query-string.js":(N,s,e)=>{e.d(s,{e:()=>n});function n(r){let a;try{a=new URL(r,"http://example.com").search.substring(1)}catch{}if(a)return a}},"../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/has-query-arg.js":(N,s,e)=>{e.d(s,{d:()=>r});var n=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/get-query-arg.js");function r(a,t){return(0,n.d)(a,t)!==void 0}},"../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/index.js":(N,s,e)=>{e.r(s),e.d(s,{addQueryArgs:()=>O.F,buildQueryString:()=>i.G,cleanForSlug:()=>E.O,filterURLForDisplay:()=>j.r,getAuthority:()=>b.M,getFilename:()=>P.e,getFragment:()=>_.h,getPath:()=>m.Y,getPathAndQueryString:()=>w,getProtocol:()=>t.J,getQueryArg:()=>y.d,getQueryArgs:()=>R.u,getQueryString:()=>p.e,hasQueryArg:()=>h.d,isEmail:()=>r.x,isPhoneNumber:()=>a.I,isURL:()=>n.m,isValidAuthority:()=>d.W,isValidFragment:()=>v.R,isValidPath:()=>c.o,isValidProtocol:()=>l.v,isValidQueryString:()=>x._,normalizePath:()=>S.F,prependHTTP:()=>g.N,prependHTTPS:()=>I,removeQueryArgs:()=>o.m,safeDecodeURI:()=>u.S,safeDecodeURIComponent:()=>f.T});var n=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/is-url.js"),r=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/is-email.js"),a=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/is-phone-number.js"),t=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/get-protocol.js"),l=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/is-valid-protocol.js"),b=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/get-authority.js"),d=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/is-valid-authority.js"),m=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/get-path.js"),c=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/is-valid-path.js"),p=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/get-query-string.js"),i=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/build-query-string.js"),x=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/is-valid-query-string.js");function w(C){const V=(0,m.Y)(C),T=(0,p.e)(C);let A="/";return V&&(A+=V),T&&(A+=`?${T}`),A}var _=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/get-fragment.js"),v=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/is-valid-fragment.js"),O=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/add-query-args.js"),y=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/get-query-arg.js"),R=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/get-query-args.js"),h=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/has-query-arg.js"),o=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/remove-query-args.js"),g=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/prepend-http.js"),u=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/safe-decode-uri.js"),f=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/safe-decode-uri-component.js"),j=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/filter-url-for-display.js"),E=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/clean-for-slug.js"),P=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/get-filename.js"),S=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/normalize-path.js");function I(C){return!C||C.startsWith("http://")?C:(C=(0,g.N)(C),C.replace(/^http:/,"https:"))}},"../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/is-phone-number.js":(N,s,e)=>{e.d(s,{I:()=>r});const n=/^(tel:)?(\+)?\d{6,15}$/;function r(a){return a=a.replace(/[-.() ]/g,""),n.test(a)}},"../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/is-valid-authority.js":(N,s,e)=>{e.d(s,{W:()=>n});function n(r){return r?/^[^\s#?]+$/.test(r):!1}},"../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/is-valid-path.js":(N,s,e)=>{e.d(s,{o:()=>n});function n(r){return r?/^[^\s#?]+$/.test(r):!1}},"../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/is-valid-query-string.js":(N,s,e)=>{e.d(s,{_:()=>n});function n(r){return r?/^[^\s#?\/]+$/.test(r):!1}},"../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/normalize-path.js":(N,s,e)=>{e.d(s,{F:()=>n});function n(r){const a=r.split("?"),t=a[1],l=a[0];return t?l+"?"+t.split("&").map(b=>b.split("=")).map(b=>b.map(decodeURIComponent)).sort((b,d)=>b[0].localeCompare(d[0])).map(b=>b.map(encodeURIComponent)).map(b=>b.join("=")).join("&"):l}},"../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/remove-query-args.js":(N,s,e)=>{e.d(s,{m:()=>a});var n=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/get-query-args.js"),r=e("../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/build-query-string.js");function a(t,...l){const b=t.replace(/^[^#]*/,"");t=t.replace(/#.*/,"");const d=t.indexOf("?");if(d===-1)return t+b;const m=(0,n.u)(t),c=t.substr(0,d);l.forEach(x=>delete m[x]);const p=(0,r.G)(m);return(p?c+"?"+p:c)+b}},"../../../node_modules/.pnpm/@wordpress+url@4.28.0/node_modules/@wordpress/url/build-module/safe-decode-uri-component.js":(N,s,e)=>{e.d(s,{T:()=>n});function n(r){try{return decodeURIComponent(r)}catch{return r}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/@wordpress+dataviews@5.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_9fc53526c13a1cf06416ba73306db4b9/node_modules/@wordpress/dataviews/build-style/style.css":(N,s,e)=>{e.d(s,{A:()=>b});var n=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(n),a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(a),l=t()(r());l.push([N.id,`/**
 * Colors
 */
/**
 * Breakpoints & Media Queries
 */
/**
 * Colors
 */
/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
/**
 * Colors
 */
/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
/**
 * Breakpoints & Media Queries
 */
/**
*  Converts a hex value into the rgb equivalent.
*
* @param {string} hex - the hexadecimal value to convert
* @return {string} comma separated rgb values
*/
/**
 * Long content fade mixin
 *
 * Creates a fading overlay to signify that the content is longer
 * than the space allows.
 */
/**
 * Typography
 */
/**
 * Breakpoint mixins
 */
/**
 * Focus styles.
 */
/**
 * Applies editor left position to the selector passed as argument
 */
/**
 * Styles that are reused verbatim in a few places
 */
/**
 * Allows users to opt-out of animations via OS-level preferences.
 */
/**
 * Reset default styles for JavaScript UI based pages.
 * This is a WP-admin agnostic reset
 */
/**
 * Reset the WP Admin page styles for Gutenberg-like pages.
 */
/**
 * Colors
 */
/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
/**
 * Breakpoints & Media Queries
 */
/**
*  Converts a hex value into the rgb equivalent.
*
* @param {string} hex - the hexadecimal value to convert
* @return {string} comma separated rgb values
*/
/**
 * Long content fade mixin
 *
 * Creates a fading overlay to signify that the content is longer
 * than the space allows.
 */
/**
 * Typography
 */
/**
 * Breakpoint mixins
 */
/**
 * Focus styles.
 */
/**
 * Applies editor left position to the selector passed as argument
 */
/**
 * Styles that are reused verbatim in a few places
 */
/**
 * Allows users to opt-out of animations via OS-level preferences.
 */
/**
 * Reset default styles for JavaScript UI based pages.
 * This is a WP-admin agnostic reset
 */
/**
 * Reset the WP Admin page styles for Gutenberg-like pages.
 */
:root {
  --wp-block-synced-color: #7a00df;
  --wp-block-synced-color--rgb: 122, 0, 223;
  --wp-bound-block-color: var(--wp-block-synced-color);
  --wp-admin-theme-color: #007cba;
  --wp-admin-theme-color--rgb: 0, 124, 186;
  --wp-admin-theme-color-darker-10: #006ba1;
  --wp-admin-theme-color-darker-10--rgb: 0, 107, 161;
  --wp-admin-theme-color-darker-20: #005a87;
  --wp-admin-theme-color-darker-20--rgb: 0, 90, 135;
  --wp-admin-border-width-focus: 2px;
}
@media (min-resolution: 192dpi) {
  :root {
    --wp-admin-border-width-focus: 1.5px;
  }
}

.dataviews-wrapper {
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  scroll-padding-bottom: 64px;
  /* stylelint-disable-next-line property-no-unknown -- '@container' not globally permitted */
  container: dataviews-wrapper/inline-size;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  line-height: 1.4;
}

.dataviews__view-actions,
.dataviews-filters__container {
  box-sizing: border-box;
  padding: 16px 48px;
  flex-shrink: 0;
  position: sticky;
  left: 0;
}
@media not (prefers-reduced-motion) {
  .dataviews__view-actions,
.dataviews-filters__container {
    transition: padding ease-out 0.1s;
  }
}

.dataviews-no-results,
.dataviews-loading {
  padding: 0 48px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media not (prefers-reduced-motion) {
  .dataviews-no-results,
.dataviews-loading {
    transition: padding ease-out 0.1s;
  }
}

@container (max-width: 430px) {
  .dataviews__view-actions,
.dataviews-filters__container {
    padding: 12px 24px;
  }
  .dataviews-no-results,
.dataviews-loading {
    padding-left: 24px;
    padding-right: 24px;
  }
}
.dataviews-title-field {
  font-size: 13px;
  font-weight: 500;
  color: #2f2f2f;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
.dataviews-title-field a {
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  flex-grow: 0;
  color: #2f2f2f;
}
.dataviews-title-field a:hover {
  color: var(--wp-admin-theme-color);
}
.dataviews-title-field a:focus {
  color: var(--wp-admin-theme-color--rgb);
  box-shadow: 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color, #007cba);
  border-radius: 2px;
}
.dataviews-title-field button.components-button.is-link {
  text-decoration: none;
  font-weight: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  width: 100%;
  color: #1e1e1e;
}
.dataviews-title-field button.components-button.is-link:hover {
  color: var(--wp-admin-theme-color);
}

.dataviews-title-field--clickable {
  cursor: pointer;
  color: #2f2f2f;
}
.dataviews-title-field--clickable:hover {
  color: var(--wp-admin-theme-color);
}
.dataviews-title-field--clickable:focus {
  color: var(--wp-admin-theme-color--rgb);
  box-shadow: 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color, #007cba);
  border-radius: 2px;
}

/**
 * Applying a consistent 24px padding when DataViews are placed within cards.
 */
.components-card__body:has(> .dataviews-wrapper) {
  padding: 8px 0 0;
  overflow: hidden;
}
.components-card__body:has(> .dataviews-wrapper) .dataviews__view-actions,
.components-card__body:has(> .dataviews-wrapper) .dataviews-filters__container,
.components-card__body:has(> .dataviews-wrapper) .dataviews-footer,
.components-card__body:has(> .dataviews-wrapper) .dataviews-view-grid,
.components-card__body:has(> .dataviews-wrapper) .dataviews-loading,
.components-card__body:has(> .dataviews-wrapper) .dataviews-no-results {
  padding-inline: 24px;
}
.components-card__body:has(> .dataviews-wrapper) .dataviews-view-table tr td:first-child,
.components-card__body:has(> .dataviews-wrapper) .dataviews-view-table tr th:first-child {
  padding-inline-start: 24px;
}
.components-card__body:has(> .dataviews-wrapper) .dataviews-view-table tr td:last-child,
.components-card__body:has(> .dataviews-wrapper) .dataviews-view-table tr th:last-child {
  padding-inline-end: 24px;
}

.dataviews-bulk-actions-footer__item-count {
  color: #1e1e1e;
  font-weight: 500;
  font-size: 11px;
  text-transform: uppercase;
}

.dataviews-bulk-actions-footer__container {
  margin-right: auto;
  min-height: 32px;
}

.dataviews-filters__button {
  position: relative;
}

.dataviews-filters__container {
  padding-top: 0;
}

.dataviews-filters__reset-button.dataviews-filters__reset-button[aria-disabled=true], .dataviews-filters__reset-button.dataviews-filters__reset-button[aria-disabled=true]:hover {
  opacity: 0;
}
.dataviews-filters__reset-button.dataviews-filters__reset-button[aria-disabled=true]:focus {
  opacity: 1;
}

.dataviews-filters__summary-popover {
  font-size: 13px;
  line-height: 1.4;
}
.dataviews-filters__summary-popover .components-popover__content {
  width: 230px;
  border-radius: 4px;
}
.dataviews-filters__summary-popover.components-dropdown__content .components-popover__content {
  padding: 0;
}

.dataviews-filters__summary-operators-container {
  padding: 8px 16px;
}
.dataviews-filters__summary-operators-container:has(+ .dataviews-filters__search-widget-listbox), .dataviews-filters__summary-operators-container:has(+ .dataviews-filters__user-input-widget) {
  border-bottom: 1px solid #e0e0e0;
}
.dataviews-filters__summary-operators-container:empty {
  display: none;
}
.dataviews-filters__summary-operators-container .dataviews-filters__summary-operators-filter-name {
  color: #757575;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0; /* Prevents this element from shrinking */
  max-width: calc(100% - 55px);
}
.dataviews-filters__summary-operators-container .dataviews-filters__summary-operators-filter-select {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
}

.dataviews-filters__summary-chip-container {
  position: relative;
  white-space: pre-wrap;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip {
  border-radius: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  padding: 4px 12px;
  min-height: 32px;
  background: #f0f0f0;
  color: #2f2f2f;
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip.has-reset {
  padding-inline-end: 28px;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip:hover, .dataviews-filters__summary-chip-container .dataviews-filters__summary-chip:focus-visible, .dataviews-filters__summary-chip-container .dataviews-filters__summary-chip[aria-expanded=true] {
  background: #e0e0e0;
  color: #1e1e1e;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip.has-values {
  color: var(--wp-admin-theme-color);
  background: rgba(var(--wp-admin-theme-color--rgb), 0.04);
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip.has-values:hover, .dataviews-filters__summary-chip-container .dataviews-filters__summary-chip.has-values[aria-expanded=true] {
  background: rgba(var(--wp-admin-theme-color--rgb), 0.12);
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip:focus-visible {
  outline: none;
  box-shadow: 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip .dataviews-filters-__summary-filter-text-name {
  font-weight: 500;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 0;
  padding: 0;
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove svg {
  fill: #757575;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove:hover, .dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove:focus {
  background: #e0e0e0;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove:hover svg, .dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove:focus svg {
  fill: #1e1e1e;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove.has-values svg {
  fill: var(--wp-admin-theme-color);
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove.has-values:hover {
  background: rgba(var(--wp-admin-theme-color--rgb), 0.08);
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove:focus-visible {
  outline: none;
  box-shadow: 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
}

.dataviews-filters__search-widget-filter-combobox-list {
  max-height: 184px;
  padding: 4px;
  overflow: auto;
  border-top: 1px solid #e0e0e0;
}
.dataviews-filters__search-widget-filter-combobox-list .dataviews-filters__search-widget-filter-combobox-item-value [data-user-value] {
  font-weight: 600;
}

.dataviews-filters__search-widget-listbox {
  padding: 4px;
  overflow: auto;
}

.dataviews-filters__search-widget-listitem {
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 2px;
  box-sizing: border-box;
  padding: 4px 12px;
  cursor: default;
  min-height: 32px;
  font-family: -apple-system, "system-ui", "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
}
.dataviews-filters__search-widget-listitem:last-child {
  margin-block-end: 0;
}
.dataviews-filters__search-widget-listitem:hover, .dataviews-filters__search-widget-listitem[data-active-item], .dataviews-filters__search-widget-listitem:focus {
  background-color: var(--wp-admin-theme-color);
  color: #fff;
}
.dataviews-filters__search-widget-listitem:hover .dataviews-filters__search-widget-listitem-description, .dataviews-filters__search-widget-listitem[data-active-item] .dataviews-filters__search-widget-listitem-description, .dataviews-filters__search-widget-listitem:focus .dataviews-filters__search-widget-listitem-description {
  color: #fff;
}
.dataviews-filters__search-widget-listitem:hover .dataviews-filters__search-widget-listitem-single-selection, .dataviews-filters__search-widget-listitem[data-active-item] .dataviews-filters__search-widget-listitem-single-selection, .dataviews-filters__search-widget-listitem:focus .dataviews-filters__search-widget-listitem-single-selection {
  border-color: var(--wp-admin-theme-color-darker-20, #183ad6);
  background: #fff;
}
.dataviews-filters__search-widget-listitem:hover .dataviews-filters__search-widget-listitem-single-selection.is-selected, .dataviews-filters__search-widget-listitem[data-active-item] .dataviews-filters__search-widget-listitem-single-selection.is-selected, .dataviews-filters__search-widget-listitem:focus .dataviews-filters__search-widget-listitem-single-selection.is-selected {
  border-color: var(--wp-admin-theme-color-darker-20, #183ad6);
  background: var(--wp-admin-theme-color-darker-20, #183ad6);
}
.dataviews-filters__search-widget-listitem:hover .dataviews-filters__search-widget-listitem-multi-selection, .dataviews-filters__search-widget-listitem[data-active-item] .dataviews-filters__search-widget-listitem-multi-selection, .dataviews-filters__search-widget-listitem:focus .dataviews-filters__search-widget-listitem-multi-selection {
  border-color: var(--wp-admin-theme-color-darker-20, #183ad6);
}
.dataviews-filters__search-widget-listitem:hover .dataviews-filters__search-widget-listitem-multi-selection.is-selected, .dataviews-filters__search-widget-listitem[data-active-item] .dataviews-filters__search-widget-listitem-multi-selection.is-selected, .dataviews-filters__search-widget-listitem:focus .dataviews-filters__search-widget-listitem-multi-selection.is-selected {
  border-color: var(--wp-admin-theme-color-darker-20, #183ad6);
  background: var(--wp-admin-theme-color-darker-20, #183ad6);
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-description {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  line-height: 16px;
  color: #757575;
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-single-selection {
  border: 1px solid #1e1e1e;
  margin-right: 12px;
  transition: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  min-width: 24px;
  max-width: 24px;
  position: relative;
  margin: 0;
  padding: 0;
}
@media not (prefers-reduced-motion) {
  .dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-single-selection {
    transition: box-shadow 0.1s linear;
  }
}
@media (min-width: 600px) {
  .dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-single-selection {
    height: 16px;
    width: 16px;
    min-width: 16px;
    max-width: 16px;
  }
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-single-selection:checked::before {
  box-sizing: inherit;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  background-color: #fff;
  border: 4px solid #fff;
}
@media (min-width: 600px) {
  .dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-single-selection:checked::before {
    width: 8px;
    height: 8px;
  }
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-single-selection:focus {
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--wp-admin-theme-color);
  outline: 2px solid transparent;
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-single-selection:checked {
  background: var(--wp-admin-theme-color);
  border: none;
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-single-selection.is-selected {
  background: var(--wp-admin-theme-color, #3858e9);
  border-color: var(--wp-admin-theme-color, #3858e9);
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-single-selection.is-selected::before {
  content: "";
  border-radius: 50%;
  box-sizing: inherit;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  background-color: #fff;
  border: 4px solid #fff;
}
@media (min-width: 600px) {
  .dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-single-selection.is-selected::before {
    width: 8px;
    height: 8px;
  }
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection {
  --checkbox-size: 24px;
  border: 1px solid #1e1e1e;
  margin-right: 12px;
  transition: none;
  border-radius: 2px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  padding: 6px 8px;
  /* Fonts smaller than 16px causes mobile safari to zoom. */
  font-size: 16px;
  /* Override core line-height. To be reviewed. */
  line-height: normal;
  box-shadow: 0 0 0 transparent;
  border-radius: 2px;
  border: 1px solid #949494;
  position: relative;
  background: #fff;
  color: #1e1e1e;
  margin: 0;
  padding: 0;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
}
@media not (prefers-reduced-motion) {
  .dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection {
    transition: box-shadow 0.1s linear;
  }
}
@media (min-width: 600px) {
  .dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection {
    font-size: 13px;
    /* Override core line-height. To be reviewed. */
    line-height: normal;
  }
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection:focus {
  border-color: var(--wp-admin-theme-color);
  box-shadow: 0 0 0 0.5px var(--wp-admin-theme-color);
  outline: 2px solid transparent;
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection::-webkit-input-placeholder {
  color: rgba(30, 30, 30, 0.62);
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection::-moz-placeholder {
  color: rgba(30, 30, 30, 0.62);
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection:-ms-input-placeholder {
  color: rgba(30, 30, 30, 0.62);
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection:focus {
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--wp-admin-theme-color);
  outline: 2px solid transparent;
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection:checked {
  background: var(--wp-admin-theme-color);
  border-color: var(--wp-admin-theme-color);
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection:checked::-ms-check {
  opacity: 0;
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection:checked::before, .dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection[aria-checked=mixed]::before {
  margin: -3px -5px;
  color: #fff;
}
@media (min-width: 782px) {
  .dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection:checked::before, .dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection[aria-checked=mixed]::before {
    margin: -4px 0 0 -5px;
  }
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection[aria-checked=mixed] {
  background: var(--wp-admin-theme-color);
  border-color: var(--wp-admin-theme-color);
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection[aria-checked=mixed]::before {
  content: "\\f460";
  float: left;
  display: inline-block;
  vertical-align: middle;
  width: 16px;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword -- dashicons don't need a generic family keyword. */
  font: normal 30px/1 dashicons;
  speak: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media (min-width: 782px) {
  .dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection[aria-checked=mixed]::before {
    float: none;
    font-size: 21px;
  }
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection[aria-disabled=true], .dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection:disabled {
  background: #f0f0f0;
  border-color: #ddd;
  cursor: default;
  opacity: 1;
}
@media (min-width: 600px) {
  .dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection {
    --checkbox-size: 16px;
  }
}
@media not (prefers-reduced-motion) {
  .dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection {
    transition: 0.1s border-color ease-in-out;
  }
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection.is-selected {
  background: var(--wp-admin-theme-color, #3858e9);
  border-color: var(--wp-admin-theme-color, #3858e9);
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection.is-selected svg {
  --checkmark-size: var(--checkbox-size);
  fill: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: var(--checkmark-size);
  height: var(--checkmark-size);
}
@media (min-width: 600px) {
  .dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection.is-selected svg {
    --checkmark-size: calc(var(--checkbox-size) + 4px);
  }
}

.dataviews-filters__search-widget-filter-combobox__wrapper {
  position: relative;
  padding: 8px;
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  padding: 6px 8px;
  /* Fonts smaller than 16px causes mobile safari to zoom. */
  font-size: 16px;
  /* Override core line-height. To be reviewed. */
  line-height: normal;
  box-shadow: 0 0 0 transparent;
  border-radius: 2px;
  border: 1px solid #949494;
  display: block;
  padding: 0 32px 0 8px;
  background: #f0f0f0;
  border: none;
  width: 100%;
  height: 32px;
  margin-left: 0;
  margin-right: 0;
  /* Fonts smaller than 16px causes mobile safari to zoom. */
  font-size: 16px;
}
@media not (prefers-reduced-motion) {
  .dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input {
    transition: box-shadow 0.1s linear;
  }
}
@media (min-width: 600px) {
  .dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input {
    font-size: 13px;
    /* Override core line-height. To be reviewed. */
    line-height: normal;
  }
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input:focus {
  border-color: var(--wp-admin-theme-color);
  box-shadow: 0 0 0 0.5px var(--wp-admin-theme-color);
  outline: 2px solid transparent;
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input::-webkit-input-placeholder {
  color: rgba(30, 30, 30, 0.62);
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input::-moz-placeholder {
  color: rgba(30, 30, 30, 0.62);
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input:-ms-input-placeholder {
  color: rgba(30, 30, 30, 0.62);
}
@media (min-width: 600px) {
  .dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input {
    font-size: 13px;
  }
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input:focus {
  background: #fff;
  box-shadow: inset 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input::placeholder {
  color: #757575;
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input::-webkit-search-decoration, .dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input::-webkit-search-cancel-button, .dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input::-webkit-search-results-button, .dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input::-webkit-search-results-decoration {
  -webkit-appearance: none;
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
}

.dataviews-filters__container-visibility-toggle {
  position: relative;
  flex-shrink: 0;
}

.dataviews-filters-toggle__count {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  background: var(--wp-admin-theme-color, #3858e9);
  height: 16px;
  min-width: 16px;
  line-height: 16px;
  padding: 0 4px;
  text-align: center;
  border-radius: 8px;
  font-size: 11px;
  outline: var(--wp-admin-border-width-focus) solid #fff;
  color: #fff;
  box-sizing: border-box;
}

.dataviews-search {
  width: fit-content;
}

.dataviews-filters__user-input-widget {
  padding: 16px;
}
.dataviews-filters__user-input-widget .components-input-control__prefix {
  padding-left: 8px;
}

.dataviews-footer {
  position: sticky;
  bottom: 0;
  left: 0;
  background-color: #fff;
  padding: 12px 48px;
  border-top: 1px solid #f0f0f0;
  flex-shrink: 0;
  z-index: 2;
}
@media not (prefers-reduced-motion) {
  .dataviews-footer {
    transition: padding ease-out 0.1s;
  }
}

@container (max-width: 430px) {
  .dataviews-footer {
    padding: 12px 24px;
  }
}
@container (max-width: 560px) {
  .dataviews-footer {
    flex-direction: column !important;
  }
  .dataviews-footer .dataviews-bulk-actions-footer__container {
    width: 100%;
  }
  .dataviews-footer .dataviews-bulk-actions-footer__item-count {
    flex-grow: 1;
  }
  .dataviews-footer .dataviews-pagination {
    width: 100%;
    justify-content: space-between;
  }
}
.dataviews-pagination__page-select {
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
}
@media (min-width: 600px) {
  .dataviews-pagination__page-select .components-select-control__input {
    font-size: 11px !important;
    font-weight: 500;
  }
}

.dataviews-action-modal {
  z-index: 1000001;
}

.dataviews-selection-checkbox {
  --checkbox-input-size: 24px;
  line-height: 0;
  flex-shrink: 0;
}
@media (min-width: 600px) {
  .dataviews-selection-checkbox {
    --checkbox-input-size: 16px;
  }
}
.dataviews-selection-checkbox .components-checkbox-control__input-container {
  margin: 0;
}

.dataviews-view-config {
  width: 320px;
  /* stylelint-disable-next-line property-no-unknown -- the linter needs to be updated to accepted the container-type property */
  container-type: inline-size;
  font-size: 13px;
  line-height: 1.4;
}

.dataviews-config__popover.is-expanded .dataviews-config__popover-content-wrapper {
  overflow-y: scroll;
  height: 100%;
}
.dataviews-config__popover.is-expanded .dataviews-config__popover-content-wrapper .dataviews-view-config {
  width: auto;
}

.dataviews-view-config__sort-direction .components-toggle-group-control-option-base {
  text-transform: uppercase;
}

.dataviews-settings-section__title.dataviews-settings-section__title {
  line-height: 24px;
  font-size: 15px;
}

.dataviews-settings-section__sidebar {
  grid-column: span 4;
}

.dataviews-settings-section__content,
.dataviews-settings-section__content > * {
  grid-column: span 8;
}

.dataviews-settings-section__content .is-divided-in-two {
  display: contents;
}
.dataviews-settings-section__content .is-divided-in-two > * {
  grid-column: span 4;
}

.dataviews-settings-section:has(.dataviews-settings-section__content:empty) {
  display: none;
}

@container (max-width: 500px) {
  .dataviews-settings-section.dataviews-settings-section {
    grid-template-columns: repeat(2, 1fr);
  }
  .dataviews-settings-section.dataviews-settings-section .dataviews-settings-section__sidebar {
    grid-column: span 2;
  }
  .dataviews-settings-section.dataviews-settings-section .dataviews-settings-section__content {
    grid-column: span 2;
  }
}
.dataviews-field-control__field {
  height: 32px;
}

.dataviews-field-control__actions {
  position: absolute;
  top: -9999em;
}

.dataviews-field-control__actions.dataviews-field-control__actions {
  gap: 4px;
}

.dataviews-field-control__field:hover .dataviews-field-control__actions,
.dataviews-field-control__field:focus-within .dataviews-field-control__actions,
.dataviews-field-control__field.is-interacting .dataviews-field-control__actions {
  position: unset;
  top: unset;
}

.dataviews-field-control__icon {
  display: flex;
  width: 24px;
}

.dataviews-field-control__label-sub-label-container {
  flex-grow: 1;
}

.dataviews-field-control__label {
  display: block;
}

.dataviews-field-control__sub-label {
  margin-top: 8px;
  margin-bottom: 0;
  font-size: 11px;
  font-style: normal;
  color: #757575;
}

.dataviews-view-grid {
  margin-bottom: auto;
  grid-template-rows: max-content;
  padding: 0 48px 24px;
  container-type: inline-size;
}
@media not (prefers-reduced-motion) {
  .dataviews-view-grid {
    transition: padding ease-out 0.1s;
  }
}
.dataviews-view-grid .dataviews-view-grid__card {
  height: 100%;
  justify-content: flex-start;
  position: relative;
}
.dataviews-view-grid .dataviews-view-grid__card .dataviews-view-grid__title-actions {
  padding: 8px 0 4px;
}
.dataviews-view-grid .dataviews-view-grid__card .dataviews-view-grid__title-field {
  min-height: 24px;
  display: flex;
  align-items: center;
}
.dataviews-view-grid .dataviews-view-grid__card .dataviews-view-grid__title-field--clickable {
  width: fit-content;
}
.dataviews-view-grid .dataviews-view-grid__card.is-selected .dataviews-view-grid__fields .dataviews-view-grid__field .dataviews-view-grid__field-value {
  color: #1e1e1e;
}
.dataviews-view-grid .dataviews-view-grid__card.is-selected .dataviews-view-grid__media::after,
.dataviews-view-grid .dataviews-view-grid__card .dataviews-view-grid__media:focus::after {
  background-color: rgba(var(--wp-admin-theme-color--rgb), 0.08);
}
.dataviews-view-grid .dataviews-view-grid__card.is-selected .dataviews-view-grid__media::after {
  box-shadow: inset 0 0 0 1px var(--wp-admin-theme-color);
}
.dataviews-view-grid .dataviews-view-grid__card .dataviews-view-grid__media:focus::after {
  box-shadow: inset 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
}
.dataviews-view-grid .dataviews-view-grid__media {
  width: 100%;
  min-height: 200px;
  aspect-ratio: 1/1;
  background-color: #f0f0f0;
  border-radius: 4px;
  position: relative;
}
.dataviews-view-grid .dataviews-view-grid__media img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.dataviews-view-grid .dataviews-view-grid__media::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  pointer-events: none;
}
.dataviews-view-grid .dataviews-view-grid__fields {
  position: relative;
  font-size: 12px;
  line-height: 16px;
}
.dataviews-view-grid .dataviews-view-grid__fields:not(:empty) {
  padding: 0 0 12px;
}
.dataviews-view-grid .dataviews-view-grid__fields .dataviews-view-grid__field-value:not(:empty) {
  min-height: 24px;
  line-height: 20px;
  padding-top: 2px;
}
.dataviews-view-grid .dataviews-view-grid__fields .dataviews-view-grid__field {
  min-height: 24px;
  align-items: center;
}
.dataviews-view-grid .dataviews-view-grid__fields .dataviews-view-grid__field .dataviews-view-grid__field-name {
  width: 35%;
  color: #757575;
}
.dataviews-view-grid .dataviews-view-grid__fields .dataviews-view-grid__field .dataviews-view-grid__field-value {
  width: 65%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dataviews-view-grid .dataviews-view-grid__fields .dataviews-view-grid__field:not(:has(.dataviews-view-grid__field-value:not(:empty))) {
  display: none;
}
.dataviews-view-grid .dataviews-view-grid__badge-fields:not(:empty) {
  padding-bottom: 12px;
}

.dataviews-view-grid.dataviews-view-grid {
  /**
   * Breakpoints were adjusted from media queries breakpoints to account for
   * the sidebar width. This was done to match the existing styles we had.
   */
}
@container (max-width: 480px) {
  .dataviews-view-grid.dataviews-view-grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding-left: 24px;
    padding-right: 24px;
  }
}
@container (min-width: 480px) {
  .dataviews-view-grid.dataviews-view-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@container (min-width: 780px) {
  .dataviews-view-grid.dataviews-view-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@container (min-width: 1140px) {
  .dataviews-view-grid.dataviews-view-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
@container (min-width: 1520px) {
  .dataviews-view-grid.dataviews-view-grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}

.dataviews-view-grid__field-value:empty,
.dataviews-view-grid__field:empty {
  display: none;
}

.dataviews-view-grid__card .dataviews-selection-checkbox {
  position: absolute;
  top: -9999em;
  left: 8px;
  z-index: 1;
}
@media (hover: none) {
  .dataviews-view-grid__card .dataviews-selection-checkbox {
    top: 8px;
  }
}

.dataviews-view-grid__card:hover .dataviews-selection-checkbox,
.dataviews-view-grid__card:focus-within .dataviews-selection-checkbox,
.dataviews-view-grid__card.is-selected .dataviews-selection-checkbox {
  top: 8px;
}

.dataviews-view-grid__media--clickable {
  cursor: pointer;
}

.dataviews-view-grid__group-header {
  font-size: 16px;
  font-weight: 600;
  color: #1e1e1e;
  margin: 0 0 8px 0;
  padding: 0 48px;
}

div.dataviews-view-list {
  list-style-type: none;
}

.dataviews-view-list {
  margin: 0 0 auto;
}
.dataviews-view-list div[role=row] {
  margin: 0;
  border-top: 1px solid #f0f0f0;
}
.dataviews-view-list div[role=row] .dataviews-view-list__item-wrapper {
  position: relative;
  padding: 16px 24px;
  box-sizing: border-box;
}
.dataviews-view-list div[role=row] .dataviews-view-list__item-actions {
  display: flex;
  width: max-content;
  flex: 0 0 auto;
  gap: 4px;
}
.dataviews-view-list div[role=row] .dataviews-view-list__item-actions .components-button {
  position: relative;
  z-index: 1;
}
.dataviews-view-list div[role=row] .dataviews-view-list__item-actions > div {
  height: 24px;
}
.dataviews-view-list div[role=row] .dataviews-view-list__item-actions > :not(:last-child) {
  flex: 0;
  overflow: hidden;
  width: 0;
}
.dataviews-view-list div[role=row]:where(.is-selected, .is-hovered, :focus-within) .dataviews-view-list__item-actions > :not(:last-child) {
  flex-basis: min-content;
  width: auto;
  overflow: unset;
}
@media (hover: none) {
  .dataviews-view-list div[role=row] .dataviews-view-list__item-actions > :not(:last-child) {
    flex-basis: min-content;
    width: auto;
    overflow: unset;
  }
}
.dataviews-view-list div[role=row].is-selected.is-selected {
  border-top: 1px solid rgba(var(--wp-admin-theme-color--rgb), 0.12);
}
.dataviews-view-list div[role=row].is-selected.is-selected + div[role=row] {
  border-top: 1px solid rgba(var(--wp-admin-theme-color--rgb), 0.12);
}
.dataviews-view-list div[role=row]:not(.is-selected) .dataviews-view-list__title-field {
  color: #1e1e1e;
}
.dataviews-view-list div[role=row]:not(.is-selected):hover, .dataviews-view-list div[role=row]:not(.is-selected).is-hovered, .dataviews-view-list div[role=row]:not(.is-selected):focus-within {
  color: var(--wp-admin-theme-color);
  background-color: #f8f8f8;
}
.dataviews-view-list div[role=row]:not(.is-selected):hover .dataviews-view-list__title-field,
.dataviews-view-list div[role=row]:not(.is-selected):hover .dataviews-view-list__fields, .dataviews-view-list div[role=row]:not(.is-selected).is-hovered .dataviews-view-list__title-field,
.dataviews-view-list div[role=row]:not(.is-selected).is-hovered .dataviews-view-list__fields, .dataviews-view-list div[role=row]:not(.is-selected):focus-within .dataviews-view-list__title-field,
.dataviews-view-list div[role=row]:not(.is-selected):focus-within .dataviews-view-list__fields {
  color: var(--wp-admin-theme-color);
}
.dataviews-view-list div[role=row].is-selected .dataviews-view-list__item-wrapper,
.dataviews-view-list div[role=row].is-selected:focus-within .dataviews-view-list__item-wrapper {
  background-color: rgba(var(--wp-admin-theme-color--rgb), 0.04);
  color: #1e1e1e;
}
.dataviews-view-list div[role=row].is-selected .dataviews-view-list__item-wrapper .dataviews-view-list__title-field,
.dataviews-view-list div[role=row].is-selected .dataviews-view-list__item-wrapper .dataviews-view-list__fields,
.dataviews-view-list div[role=row].is-selected:focus-within .dataviews-view-list__item-wrapper .dataviews-view-list__title-field,
.dataviews-view-list div[role=row].is-selected:focus-within .dataviews-view-list__item-wrapper .dataviews-view-list__fields {
  color: var(--wp-admin-theme-color);
}
.dataviews-view-list .dataviews-view-list__item {
  position: absolute;
  z-index: 1;
  inset: 0;
  scroll-margin: 8px 0;
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}
.dataviews-view-list .dataviews-view-list__item:focus-visible {
  outline: none;
}
.dataviews-view-list .dataviews-view-list__item:focus-visible::before {
  position: absolute;
  content: "";
  inset: var(--wp-admin-border-width-focus);
  box-shadow: inset 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
  border-radius: 2px;
  outline: 2px solid transparent;
}
.dataviews-view-list .dataviews-view-list__title-field {
  flex: 1;
  min-height: 24px;
  line-height: 24px;
  overflow: hidden;
}
.dataviews-view-list .dataviews-view-list__title-field:has(a, button) {
  z-index: 1;
}
.dataviews-view-list .dataviews-view-list__media-wrapper {
  width: 52px;
  height: 52px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  background-color: #f0f0f0;
  border-radius: 4px;
}
.dataviews-view-list .dataviews-view-list__media-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.dataviews-view-list .dataviews-view-list__media-wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.dataviews-view-list .dataviews-view-list__field-wrapper {
  min-height: 52px;
  flex-grow: 1;
}
.dataviews-view-list .dataviews-view-list__fields {
  color: #757575;
  display: flex;
  gap: 12px;
  row-gap: 4px;
  flex-wrap: wrap;
  font-size: 12px;
}
.dataviews-view-list .dataviews-view-list__fields:empty {
  display: none;
}
.dataviews-view-list .dataviews-view-list__fields .dataviews-view-list__field:has(.dataviews-view-list__field-value:empty) {
  display: none;
}
.dataviews-view-list .dataviews-view-list__fields .dataviews-view-list__field-value {
  min-height: 24px;
  line-height: 20px;
  display: flex;
  align-items: center;
}
.dataviews-view-list + .dataviews-pagination {
  justify-content: space-between;
}

.dataviews-view-table {
  width: 100%;
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
  position: relative;
  color: #757575;
  margin-bottom: auto;
}
.dataviews-view-table th {
  text-align: left;
  color: #1e1e1e;
  font-weight: normal;
  font-size: 13px;
}
.dataviews-view-table td,
.dataviews-view-table th {
  padding: 12px;
  white-space: nowrap;
}
.dataviews-view-table td.dataviews-view-table__actions-column,
.dataviews-view-table th.dataviews-view-table__actions-column {
  text-align: right;
}
.dataviews-view-table td.dataviews-view-table__actions-column--sticky,
.dataviews-view-table th.dataviews-view-table__actions-column--sticky {
  position: sticky;
  right: 0;
  background-color: #fff;
}
.dataviews-view-table td.dataviews-view-table__actions-column--stuck::after,
.dataviews-view-table th.dataviews-view-table__actions-column--stuck::after {
  display: block;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 1px;
  background-color: #f0f0f0;
}
.dataviews-view-table td.dataviews-view-table__checkbox-column,
.dataviews-view-table th.dataviews-view-table__checkbox-column {
  padding-right: 0;
  width: 1%;
}
.dataviews-view-table tr {
  border-top: 1px solid #f0f0f0;
}
.dataviews-view-table tr .dataviews-view-table-header-button {
  gap: 4px;
}
.dataviews-view-table tr td:first-child,
.dataviews-view-table tr th:first-child {
  padding-left: 48px;
}
.dataviews-view-table tr td:first-child .dataviews-view-table-header-button,
.dataviews-view-table tr th:first-child .dataviews-view-table-header-button {
  margin-left: -8px;
}
.dataviews-view-table tr td:last-child,
.dataviews-view-table tr th:last-child {
  padding-right: 48px;
}
.dataviews-view-table tr:last-child {
  border-bottom: 0;
}
.dataviews-view-table tr.is-hovered, .dataviews-view-table tr.is-hovered .dataviews-view-table__actions-column--sticky {
  background-color: #f8f8f8;
}
.dataviews-view-table tr .components-checkbox-control__input.components-checkbox-control__input {
  opacity: 0;
}
.dataviews-view-table tr .components-checkbox-control__input.components-checkbox-control__input:checked, .dataviews-view-table tr .components-checkbox-control__input.components-checkbox-control__input:indeterminate, .dataviews-view-table tr .components-checkbox-control__input.components-checkbox-control__input:focus {
  opacity: 1;
}
.dataviews-view-table tr .dataviews-item-actions .components-button:not(.dataviews-all-actions-button) {
  opacity: 0;
}
.dataviews-view-table tr:focus-within .components-checkbox-control__input,
.dataviews-view-table tr:focus-within .dataviews-item-actions .components-button:not(.dataviews-all-actions-button), .dataviews-view-table tr.is-hovered .components-checkbox-control__input,
.dataviews-view-table tr.is-hovered .dataviews-item-actions .components-button:not(.dataviews-all-actions-button), .dataviews-view-table tr:hover .components-checkbox-control__input,
.dataviews-view-table tr:hover .dataviews-item-actions .components-button:not(.dataviews-all-actions-button) {
  opacity: 1;
}
@media (hover: none) {
  .dataviews-view-table tr .components-checkbox-control__input.components-checkbox-control__input,
.dataviews-view-table tr .dataviews-item-actions .components-button:not(.dataviews-all-actions-button) {
    opacity: 1;
  }
}
.dataviews-view-table tr.is-selected {
  background-color: rgba(var(--wp-admin-theme-color--rgb), 0.04);
  color: #757575;
}
.dataviews-view-table tr.is-selected, .dataviews-view-table tr.is-selected + tr {
  border-top: 1px solid rgba(var(--wp-admin-theme-color--rgb), 0.12);
}
.dataviews-view-table tr.is-selected:hover {
  background-color: rgba(var(--wp-admin-theme-color--rgb), 0.08);
}
.dataviews-view-table tr.is-selected .dataviews-view-table__actions-column--sticky {
  background-color: color-mix(in srgb, rgb(var(--wp-admin-theme-color--rgb)) 4%, #fff);
}
.dataviews-view-table tr.is-selected:hover .dataviews-view-table__actions-column--sticky {
  background-color: color-mix(in srgb, rgb(var(--wp-admin-theme-color--rgb)) 8%, #fff);
}
.dataviews-view-table thead {
  position: sticky;
  inset-block-start: 0;
  z-index: 1;
}
.dataviews-view-table thead tr {
  border: 0;
}
.dataviews-view-table thead th {
  background-color: #fff;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 500;
}
.dataviews-view-table thead th:has(.dataviews-view-table-header-button):not(:first-child) {
  padding-left: 4px;
}
.dataviews-view-table tbody td {
  vertical-align: top;
}
.dataviews-view-table tbody .dataviews-view-table__cell-content-wrapper {
  min-height: 32px;
  display: flex;
  align-items: center;
}
.dataviews-view-table tbody .dataviews-view-table__cell-content-wrapper.dataviews-view-table__cell-align-end {
  justify-content: flex-end;
}
.dataviews-view-table tbody .dataviews-view-table__cell-content-wrapper.dataviews-view-table__cell-align-center {
  justify-content: center;
}
.dataviews-view-table tbody .components-v-stack > .dataviews-view-table__cell-content-wrapper:not(:first-child) {
  min-height: 0;
}
.dataviews-view-table .dataviews-view-table-header-button {
  padding: 4px 8px;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 500;
}
.dataviews-view-table .dataviews-view-table-header-button:not(:hover) {
  color: #1e1e1e;
}
.dataviews-view-table .dataviews-view-table-header-button span {
  speak: none;
}
.dataviews-view-table .dataviews-view-table-header-button span:empty {
  display: none;
}
.dataviews-view-table .dataviews-view-table-header {
  padding-left: 4px;
}
.dataviews-view-table .dataviews-view-table__actions-column {
  width: 1%;
}
.dataviews-view-table:has(tr.is-selected) .components-checkbox-control__input {
  opacity: 1;
}
.dataviews-view-table.has-compact-density thead th:has(.dataviews-view-table-header-button):not(:first-child) {
  padding-left: 0;
}
.dataviews-view-table.has-compact-density td,
.dataviews-view-table.has-compact-density th {
  padding: 4px 8px;
}
.dataviews-view-table.has-comfortable-density td,
.dataviews-view-table.has-comfortable-density th {
  padding: 16px 12px;
}
.dataviews-view-table.has-compact-density td.dataviews-view-table__checkbox-column,
.dataviews-view-table.has-compact-density th.dataviews-view-table__checkbox-column, .dataviews-view-table.has-comfortable-density td.dataviews-view-table__checkbox-column,
.dataviews-view-table.has-comfortable-density th.dataviews-view-table__checkbox-column {
  padding-right: 0;
}

@container (max-width: 430px) {
  .dataviews-view-table tr td:first-child,
.dataviews-view-table tr th:first-child {
    padding-left: 24px;
  }
  .dataviews-view-table tr td:last-child,
.dataviews-view-table tr th:last-child {
    padding-right: 24px;
  }
}
.dataviews-view-table-selection-checkbox {
  --checkbox-input-size: 24px;
}
@media (min-width: 600px) {
  .dataviews-view-table-selection-checkbox {
    --checkbox-input-size: 16px;
  }
}

.dataviews-column-primary__media {
  max-width: 60px;
}

.dataviews-controls__datetime {
  border: none;
  padding: 0;
}

.dataviews-controls__datetime-number,
.dataviews-controls__datetime-unit {
  flex: 1 1 50%;
}

.dataforms-layouts-panel__field {
  width: 100%;
  min-height: 32px;
  justify-content: flex-start !important;
  align-items: flex-start !important;
}

.dataforms-layouts-panel__field-label {
  width: 38%;
  flex-shrink: 0;
  min-height: 32px;
  display: flex;
  align-items: center;
  line-height: 20px;
  hyphens: auto;
}
.dataforms-layouts-panel__field-label--label-position-side {
  align-self: center;
}

.dataforms-layouts-panel__field-control {
  flex-grow: 1;
  min-height: 32px;
  display: flex;
  align-items: center;
}
.dataforms-layouts-panel__field-control .components-button {
  max-width: 100%;
  text-align: left;
  white-space: normal;
  text-wrap: balance;
  text-wrap: pretty;
  min-height: 32px;
}
.dataforms-layouts-panel__field-control.components-button.is-link[aria-disabled=true] {
  text-decoration: none;
}
.dataforms-layouts-panel__field-control .components-dropdown {
  max-width: 100%;
}

.dataforms-layouts-panel__field-dropdown .components-popover__content {
  min-width: 320px;
  padding: 16px;
}

.dataforms-layouts-panel__dropdown-header {
  margin-bottom: 16px;
}

.components-popover.components-dropdown__content.dataforms-layouts-panel__field-dropdown {
  z-index: 159990;
}

.dataforms-layouts-regular__field {
  width: 100%;
  min-height: 32px;
  justify-content: flex-start !important;
  align-items: flex-start !important;
}

.dataforms-layouts-regular__field .components-base-control__label {
  font-size: inherit;
  font-weight: normal;
  text-transform: none;
}

.dataforms-layouts-regular__field-label {
  width: 38%;
  flex-shrink: 0;
  min-height: 32px;
  display: flex;
  align-items: center;
  line-height: 20px;
  hyphens: auto;
}
.dataforms-layouts-regular__field-label--label-position-side {
  align-self: center;
}

.dataforms-layouts-regular__field-control {
  flex-grow: 1;
  min-height: 32px;
  display: flex;
  align-items: center;
}`,""]);const b=l}}]);
