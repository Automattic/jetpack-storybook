"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7018],{"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataform-context/index.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.DataFormProvider=t,a.default=void 0;var r=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=(0,r.createContext)({fields:[]});function t({fields:w,children:n}){return(0,h.jsx)(s.Provider,{value:{fields:w},children:n})}var m=a.default=s}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataform/index.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=w;var r=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataform-context/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/normalize-fields.js"),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/data-form-layout.js"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function w({data:n,form:p,fields:i,onChange:v}){const b=(0,r.useMemo)(()=>(0,s.normalizeFields)(i),[i]);return p.fields?(0,m.jsx)(h.DataFormProvider,{fields:b,children:(0,m.jsx)(t.DataFormLayout,{data:n,form:p,onChange:v})}):null}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-bulk-actions/index.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.BulkActionsFooter=y,a.BulkSelectionCheckbox=O,a.useHasAPossibleBulkAction=b,a.useSomeItemHasAPossibleBulkAction=_;var h=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+data@10.30.0_react@18.3.1/node_modules/@wordpress/data/build-module/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+icons@10.30.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),n=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),p=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-item-actions/index.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function v({action:o,items:f,ActionTriggerComponent:d}){const[c,g]=(0,t.useState)(!1),E={action:o,onClick:()=>{g(!0)},items:f};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d,{...E}),c&&(0,i.jsx)(p.ActionModal,{action:o,items:f,closeModal:()=>g(!1)})]})}function b(o,f){return(0,t.useMemo)(()=>o.some(d=>d.supportsBulk&&(!d.isEligible||d.isEligible(f))),[o,f])}function _(o,f){return(0,t.useMemo)(()=>f.some(d=>o.some(c=>c.supportsBulk&&(!c.isEligible||c.isEligible(d)))),[o,f])}function O({selection:o,onChangeSelection:f,data:d,actions:c,getItemId:g}){const E=(0,t.useMemo)(()=>d.filter(P=>c.some(k=>k.supportsBulk&&(!k.isEligible||k.isEligible(P)))),[d,c]),A=d.filter(P=>o.includes(g(P))&&E.includes(P)),S=A.length===E.length;return(0,i.jsx)(h.CheckboxControl,{className:"dataviews-view-table-selection-checkbox",__nextHasNoMarginBottom:!0,checked:S,indeterminate:!S&&!!A.length,onChange:()=>{f(S?[]:E.map(P=>g(P)))},"aria-label":S?(0,s.__)("Deselect all"):(0,s.__)("Select all")})}function l({action:o,onClick:f,isBusy:d,items:c}){const g=typeof o.label=="string"?o.label:o.label(c);return(0,i.jsx)(h.Button,{disabled:d,accessibleWhenDisabled:!0,label:g,icon:o.icon,isDestructive:o.isDestructive,size:"compact",onClick:f,isBusy:d,tooltipPosition:"top"})}const u=[];function j({action:o,selectedItems:f,actionInProgress:d,setActionInProgress:c}){const g=(0,m.useRegistry)(),E=(0,t.useMemo)(()=>f.filter(A=>!o.isEligible||o.isEligible(A)),[o,f]);return"RenderModal"in o?(0,i.jsx)(v,{action:o,items:E,ActionTriggerComponent:l},o.id):(0,i.jsx)(l,{action:o,onClick:async()=>{c(o.id),await o.callback(f,{registry:g}),c(null)},items:E,isBusy:d===o.id},o.id)}function x(o,f,d,c,g,E,A,S,P){const k=E.length>0?(0,s.sprintf)((0,s._n)("%d Item selected","%d Items selected",E.length),E.length):(0,s.sprintf)((0,s._n)("%d Item","%d Items",o.length),o.length);return(0,i.jsxs)(h.__experimentalHStack,{expanded:!1,className:"dataviews-bulk-actions-footer__container",spacing:3,children:[(0,i.jsx)(O,{selection:c,onChangeSelection:P,data:o,actions:f,getItemId:d}),(0,i.jsx)("span",{className:"dataviews-bulk-actions-footer__item-count",children:k}),(0,i.jsxs)(h.__experimentalHStack,{className:"dataviews-bulk-actions-footer__action-buttons",expanded:!1,spacing:1,children:[g.map(N=>(0,i.jsx)(j,{action:N,selectedItems:E,actionInProgress:A,setActionInProgress:S},N.id)),E.length>0&&(0,i.jsx)(h.Button,{icon:w.closeSmall,showTooltip:!0,tooltipPosition:"top",size:"compact",label:(0,s.__)("Cancel"),disabled:!!A,accessibleWhenDisabled:!1,onClick:()=>{P(u)}})]})]})}function R({selection:o,actions:f,onChangeSelection:d,data:c,getItemId:g}){const[E,A]=(0,t.useState)(null),S=(0,t.useRef)(null),P=(0,t.useMemo)(()=>f.filter(T=>T.supportsBulk),[f]),k=(0,t.useMemo)(()=>c.filter(T=>P.some(I=>!I.isEligible||I.isEligible(T))),[c,P]),N=(0,t.useMemo)(()=>c.filter(T=>o.includes(g(T))&&k.includes(T)),[o,c,g,k]),C=(0,t.useMemo)(()=>f.filter(T=>T.supportsBulk&&T.icon&&N.some(I=>!T.isEligible||T.isEligible(I))),[f,N]);if(E)S.current||(S.current=x(c,f,g,o,C,N,E,A,d));else return S.current&&(S.current=null),x(c,f,g,o,C,N,E,A,d);return S.current}function y(){const{data:o,selection:f,actions:d=u,onChangeSelection:c,getItemId:g}=(0,t.useContext)(n.default);return(0,i.jsx)(R,{selection:f,onChangeSelection:c,data:o,actions:d,getItemId:g})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/constants.js");const s=(0,r.createContext)({view:{type:h.LAYOUT_TABLE},onChangeView:()=>{},fields:[],data:[],paginationInfo:{totalItems:0,totalPages:0},selection:[],onChangeSelection:()=>{},setOpenedFilter:()=>{},openedFilter:null,getItemId:m=>m.id,isItemClickable:()=>!0,renderItemLink:void 0,containerWidth:0,containerRef:(0,r.createRef)(),resizeObserverRef:()=>{},defaultLayouts:{list:{},grid:{},table:{}},filters:[],isShowingFilter:!1,setIsShowingFilter:()=>{},hasInfiniteScrollHandler:!1,config:{perPageSizes:[]}});var t=a.default=s}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-filters/add-filter.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.AddFilterMenu=n,a.default=void 0;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/lock-unlock.js"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Menu:w}=(0,t.unlock)(r.privateApis);function n({filters:v,view:b,onChangeView:_,setOpenedFilter:O,triggerProps:l}){const u=v.filter(j=>!j.isVisible);return(0,m.jsxs)(w,{children:[(0,m.jsx)(w.TriggerButton,{...l}),(0,m.jsx)(w.Popover,{children:u.map(j=>(0,m.jsx)(w.Item,{onClick:()=>{O(j.field),_({...b,page:1,filters:[...b.filters||[],{field:j.field,value:void 0,operator:j.operators[0]}]})},children:(0,m.jsx)(w.ItemLabel,{children:j.name})},j.field))})]})}function p({filters:v,view:b,onChangeView:_,setOpenedFilter:O},l){if(!v.length||v.every(({isPrimary:j})=>j))return null;const u=v.filter(j=>!j.isVisible);return(0,m.jsx)(n,{triggerProps:{render:(0,m.jsx)(r.Button,{accessibleWhenDisabled:!0,size:"compact",className:"dataviews-filters-button",variant:"tertiary",disabled:!u.length,ref:l}),children:(0,h.__)("Add filter")},filters:v,view:b,onChangeView:_,setOpenedFilter:O})}var i=a.default=(0,s.forwardRef)(p)}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-filters/filter.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=u;var h=r(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),s=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+icons@10.30.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),n=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-filters/search-widget.js")),p=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-filters/input-widget.js")),i=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/constants.js"),v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const b="Enter",_=" ",O=({activeElements:j,filterInView:x,filter:R})=>{if(j===void 0||j.length===0)return R.name;const y={Name:(0,v.jsx)("span",{className:"dataviews-filters__summary-filter-text-name"}),Value:(0,v.jsx)("span",{className:"dataviews-filters__summary-filter-text-value"})};if(x?.operator===i.OPERATOR_IS_ANY)return(0,m.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is any: </Name><Value>%2$s</Value>"),R.name,j.map(o=>o.label).join(", ")),y);if(x?.operator===i.OPERATOR_IS_NONE)return(0,m.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is none: </Name><Value>%2$s</Value>"),R.name,j.map(o=>o.label).join(", ")),y);if(x?.operator===i.OPERATOR_IS_ALL)return(0,m.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is all: </Name><Value>%2$s</Value>"),R.name,j.map(o=>o.label).join(", ")),y);if(x?.operator===i.OPERATOR_IS_NOT_ALL)return(0,m.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is not all: </Name><Value>%2$s</Value>"),R.name,j.map(o=>o.label).join(", ")),y);if(x?.operator===i.OPERATOR_IS)return(0,m.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is: </Name><Value>%2$s</Value>"),R.name,j[0].label),y);if(x?.operator===i.OPERATOR_IS_NOT)return(0,m.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is not: </Name><Value>%2$s</Value>"),R.name,j[0].label),y);if(x?.operator===i.OPERATOR_LESS_THAN)return(0,m.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is less than: </Name><Value>%2$s</Value>"),R.name,j[0].label),y);if(x?.operator===i.OPERATOR_GREATER_THAN)return(0,m.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is greater than: </Name><Value>%2$s</Value>"),R.name,j[0].label),y);if(x?.operator===i.OPERATOR_LESS_THAN_OR_EQUAL)return(0,m.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is less than or equal to: </Name><Value>%2$s</Value>"),R.name,j[0].label),y);if(x?.operator===i.OPERATOR_GREATER_THAN_OR_EQUAL)return(0,m.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is greater than or equal to: </Name><Value>%2$s</Value>"),R.name,j[0].label),y);if(x?.operator===i.OPERATOR_CONTAINS)return(0,m.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s contains: </Name><Value>%2$s</Value>"),R.name,j[0].label),y);if(x?.operator===i.OPERATOR_NOT_CONTAINS)return(0,m.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s doesn't contain: </Name><Value>%2$s</Value>"),R.name,j[0].label),y);if(x?.operator===i.OPERATOR_STARTS_WITH)return(0,m.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s starts with: </Name><Value>%2$s</Value>"),R.name,j[0].label),y);if(x?.operator===i.OPERATOR_BEFORE)return(0,m.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is before: </Name><Value>%2$s</Value>"),R.name,j[0].label),y);if(x?.operator===i.OPERATOR_AFTER)return(0,m.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is after: </Name><Value>%2$s</Value>"),R.name,j[0].label),y);if(x?.operator===i.OPERATOR_BEFORE_INC)return(0,m.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is on or before: </Name><Value>%2$s</Value>"),R.name,j[0].label),y);if(x?.operator===i.OPERATOR_AFTER_INC)return(0,m.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is on or after: </Name><Value>%2$s</Value>"),R.name,j[0].label),y);if(x?.operator===i.OPERATOR_BETWEEN){const{label:o}=j[0];return(0,m.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s between (inc): </Name><Value>%2$s and %3$s</Value>"),R.name,o[0],o[1]),y)}return x?.operator===i.OPERATOR_ON?(0,m.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is: </Name><Value>%2$s</Value>"),R.name,j[0].label),y):x?.operator===i.OPERATOR_NOT_ON?(0,m.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is not: </Name><Value>%2$s</Value>"),R.name,j[0].label),y):x?.operator===i.OPERATOR_IN_THE_PAST?(0,m.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is in the past: </Name><Value>%2$s</Value>"),R.name,`${j[0].value.value} ${j[0].value.unit}`),y):x?.operator===i.OPERATOR_OVER?(0,m.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is over: </Name><Value>%2$s</Value> ago"),R.name,`${j[0].value.value} ${j[0].value.unit}`),y):(0,t.sprintf)((0,t.__)("Unknown status for %1$s"),R.name)};function l({filter:j,view:x,onChangeView:R}){const y=j.operators?.map(d=>({value:d,label:i.OPERATORS[d]?.label})),o=x.filters?.find(d=>d.field===j.field),f=o?.operator||j.operators[0];return y.length>1&&(0,v.jsxs)(s.__experimentalHStack,{spacing:2,justify:"flex-start",className:"dataviews-filters__summary-operators-container",children:[(0,v.jsx)(s.FlexItem,{className:"dataviews-filters__summary-operators-filter-name",children:j.name}),(0,v.jsx)(s.SelectControl,{className:"dataviews-filters__summary-operators-filter-select",label:(0,t.__)("Conditions"),value:f,options:y,onChange:d=>{var c,g;const E=d,A=o?.operator,S=o?[...((c=x.filters)!==null&&c!==void 0?c:[]).map(P=>{if(P.field===j.field){const k=[i.OPERATOR_BETWEEN,i.OPERATOR_IN_THE_PAST,i.OPERATOR_OVER],N=A&&(k.includes(A)||k.includes(E));return{...P,value:N?void 0:P.value,operator:E}}return P})]:[...(g=x.filters)!==null&&g!==void 0?g:[],{field:j.field,operator:E,value:void 0}];R({...x,page:1,filters:S})},size:"small",variant:"minimal",__nextHasNoMarginBottom:!0,hideLabelFromVision:!0})]})}function u({addFilterRef:j,openedFilter:x,fields:R,...y}){const o=(0,m.useRef)(null),{filter:f,view:d,onChangeView:c}=y,g=d.filters?.find(N=>N.field===f.field);let E=[];f.elements.length>0?E=f.elements.filter(N=>f.singleSelection?N.value===g?.value:g?.value?.includes(N.value)):g?.value!==void 0&&(E=[{value:g.value,label:g.value}]);const A=f.isPrimary,S=g?.isLocked,P=!S&&g?.value!==void 0,k=!S&&(!A||P);return(0,v.jsx)(s.Dropdown,{defaultOpen:x===f.field,contentClassName:"dataviews-filters__summary-popover",popoverProps:{placement:"bottom-start",role:"dialog"},onClose:()=>{o.current?.focus()},renderToggle:({isOpen:N,onToggle:C})=>(0,v.jsxs)("div",{className:"dataviews-filters__summary-chip-container",children:[(0,v.jsx)(s.Tooltip,{text:(0,t.sprintf)((0,t.__)("Filter by: %1$s"),f.name.toLowerCase()),placement:"top",children:(0,v.jsx)("div",{className:(0,h.default)("dataviews-filters__summary-chip",{"has-reset":k,"has-values":P,"is-not-clickable":S}),role:"button",tabIndex:S?-1:0,onClick:()=>{S||C()},onKeyDown:T=>{!S&&[b,_].includes(T.key)&&(C(),T.preventDefault())},"aria-disabled":S,"aria-pressed":N,"aria-expanded":N,ref:o,children:(0,v.jsx)(O,{activeElements:E,filterInView:g,filter:f})})}),k&&(0,v.jsx)(s.Tooltip,{text:A?(0,t.__)("Reset"):(0,t.__)("Remove"),placement:"top",children:(0,v.jsx)("button",{className:(0,h.default)("dataviews-filters__summary-chip-remove",{"has-values":P}),onClick:()=>{c({...d,page:1,filters:d.filters?.filter(T=>T.field!==f.field)}),A?o.current?.focus():j.current?.focus()},children:(0,v.jsx)(s.Icon,{icon:w.closeSmall})})})]}),renderContent:()=>(0,v.jsxs)(s.__experimentalVStack,{spacing:0,justify:"flex-start",children:[(0,v.jsx)(l,{...y}),y.filter.elements.length>0?(0,v.jsx)(n.default,{...y,filter:{...y.filter,elements:y.filter.elements}}):(0,v.jsx)(p.default,{...y,fields:R})]})})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-filters/index.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.FiltersToggle=u,a.default=void 0,a.useFilters=l;var h=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@10.30.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),w=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-filters/filter.js")),n=O(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-filters/add-filter.js")),p=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-filters/reset-filters.js")),i=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),v=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/constants.js"),b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function _(y){if(typeof WeakMap!="function")return null;var o=new WeakMap,f=new WeakMap;return(_=function(d){return d?f:o})(y)}function O(y,o){if(!o&&y&&y.__esModule)return y;if(y===null||typeof y!="object"&&typeof y!="function")return{default:y};var f=_(o);if(f&&f.has(y))return f.get(y);var d={__proto__:null},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in y)if(g!=="default"&&{}.hasOwnProperty.call(y,g)){var E=c?Object.getOwnPropertyDescriptor(y,g):null;E&&(E.get||E.set)?Object.defineProperty(d,g,E):d[g]=y[g]}return d.default=y,f&&f.set(y,d),d}function l(y,o){return(0,h.useMemo)(()=>{const f=[];return y.forEach(d=>{var c,g;if(d.filterBy===!1||!d.elements?.length&&!d.Edit)return;const E=d.filterBy.operators,A=!!d.filterBy?.isPrimary,S=(c=o.filters?.some(P=>P.field===d.id&&!!P.isLocked))!==null&&c!==void 0?c:!1;f.push({field:d.id,name:d.label,elements:(g=d.elements)!==null&&g!==void 0?g:[],singleSelection:E.some(P=>v.SINGLE_SELECTION_OPERATORS.includes(P)),operators:E,isVisible:S||A||!!o.filters?.some(P=>P.field===d.id&&v.ALL_OPERATORS.includes(P.operator)),isPrimary:A,isLocked:S})}),f.sort((d,c)=>d.isLocked&&!c.isLocked?-1:!d.isLocked&&c.isLocked?1:d.isPrimary&&!c.isPrimary?-1:!d.isPrimary&&c.isPrimary?1:d.name.localeCompare(c.name)),f},[y,o])}function u(){const{filters:y,view:o,onChangeView:f,setOpenedFilter:d,isShowingFilter:c,setIsShowingFilter:g}=(0,h.useContext)(i.default),E=(0,h.useRef)(null),A=(0,h.useCallback)(T=>{f(T),g(!0)},[f,g]),P=!!y.filter(T=>T.isVisible).length;if(y.length===0)return null;const k={label:(0,m.__)("Add filter"),"aria-expanded":!1,isPressed:!1},N={label:(0,m._x)("Filter","verb"),"aria-expanded":c,isPressed:c,onClick:()=>{c||d(null),g(!c)}},C=(0,b.jsx)(s.Button,{ref:E,className:"dataviews-filters__visibility-toggle",size:"compact",icon:t.funnel,...P?N:k});return(0,b.jsx)("div",{className:"dataviews-filters__container-visibility-toggle",children:P?(0,b.jsx)(j,{buttonRef:E,filtersCount:o.filters?.length,children:C}):(0,b.jsx)(n.AddFilterMenu,{filters:y,view:o,onChangeView:A,setOpenedFilter:d,triggerProps:{render:C}})})}function j({buttonRef:y,filtersCount:o,children:f}){return(0,h.useEffect)(()=>()=>{y.current?.focus()},[y]),(0,b.jsxs)(b.Fragment,{children:[f,!!o&&(0,b.jsx)("span",{className:"dataviews-filters-toggle__count",children:o})]})}function x({className:y}){const{fields:o,view:f,onChangeView:d,openedFilter:c,setOpenedFilter:g}=(0,h.useContext)(i.default),E=(0,h.useRef)(null),A=l(o,f),S=(0,b.jsx)(n.default,{filters:A,view:f,onChangeView:d,ref:E,setOpenedFilter:g},"add-filter"),P=A.filter(N=>N.isVisible);if(P.length===0)return null;const k=[...P.map(N=>(0,b.jsx)(w.default,{filter:N,view:f,fields:o,onChangeView:d,addFilterRef:E,openedFilter:c},N.field)),S];return k.push((0,b.jsx)(p.default,{filters:A,view:f,onChangeView:d},"reset-filters")),(0,b.jsx)(s.__experimentalHStack,{justify:"flex-start",style:{width:"fit-content"},wrap:!0,className:y,children:k})}var R=a.default=(0,h.memo)(x)}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-filters/input-widget.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=p;var h=r(e("../../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/es6/index.js")),s=e("../../../node_modules/.pnpm/@wordpress+compose@7.30.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-filters/utils.js"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function p({filter:i,view:v,onChangeView:b,fields:_}){const O=v.filters?.find(R=>R.field===i.field),l=_.find(R=>R.id===i.field),u=(0,w.getCurrentValue)(i,O),j=(0,t.useMemo)(()=>{var R;return((R=v.filters)!==null&&R!==void 0?R:[]).reduce((y,o)=>(y[o.field]=o.value,y),{})},[v.filters]),x=(0,s.useEvent)(R=>{var y;if(!l||!O)return;const o=R[l.id];(0,h.default)(o,u)||b({...v,filters:((y=v.filters)!==null&&y!==void 0?y:[]).map(f=>f.field===i.field?{...f,operator:O.operator||i.operators[0],value:o===""?void 0:o}:f)})});return!l||!l.Edit||!O?null:(0,n.jsx)(m.Flex,{className:"dataviews-filters__user-input-widget",gap:2.5,direction:"column",children:(0,n.jsx)(l.Edit,{hideLabelFromVision:!0,data:j,field:l,operator:O.operator,onChange:x})})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-filters/reset-filters.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=t;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({filters:m,view:w,onChangeView:n}){const p=v=>m.some(b=>b.field===v&&b.isPrimary),i=!w.search&&!w.filters?.some(v=>!v.isLocked&&(v.value!==void 0||!p(v.field)));return(0,s.jsx)(r.Button,{disabled:i,accessibleWhenDisabled:!0,size:"compact",variant:"tertiary",className:"dataviews-filters__reset-button",onClick:()=>{n({...w,page:1,search:"",filters:w.filters?.filter(v=>!!v.isLocked)||[]})},children:(0,h.__)("Reset")})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-filters/search-widget.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=f;var h=O(e("../../../node_modules/.pnpm/@ariakit+react@0.4.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react/cjs/index.cjs")),s=r(e("../../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js")),t=r(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),m=e("../../../node_modules/.pnpm/@wordpress+compose@7.30.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@10.30.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),v=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-filters/utils.js"),b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function _(d){if(typeof WeakMap!="function")return null;var c=new WeakMap,g=new WeakMap;return(_=function(E){return E?g:c})(d)}function O(d,c){if(!c&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var g=_(c);if(g&&g.has(d))return g.get(d);var E={__proto__:null},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var S in d)if(S!=="default"&&{}.hasOwnProperty.call(d,S)){var P=A?Object.getOwnPropertyDescriptor(d,S):null;P&&(P.get||P.set)?Object.defineProperty(E,S,P):E[S]=d[S]}return E.default=d,g&&g.set(d,E),E}function l(d=""){return(0,s.default)(d.trim().toLowerCase())}const u=(d,c,g)=>d.singleSelection?g:Array.isArray(c?.value)?c.value.includes(g)?c.value.filter(E=>E!==g):[...c.value,g]:[g];function j(d,c){return`${d}-${c}`}const x=({selected:d})=>(0,b.jsx)("span",{className:(0,t.default)("dataviews-filters__search-widget-listitem-multi-selection",{"is-selected":d}),children:d&&(0,b.jsx)(p.Icon,{icon:i.check})}),R=({selected:d})=>(0,b.jsx)("span",{className:(0,t.default)("dataviews-filters__search-widget-listitem-single-selection",{"is-selected":d})});function y({view:d,filter:c,onChangeView:g}){const E=(0,m.useInstanceId)(y,"dataviews-filter-list-box"),[A,S]=(0,n.useState)(c.operators?.length===1?void 0:null),P=d.filters?.find(N=>N.field===c.field),k=(0,v.getCurrentValue)(c,P);return(0,b.jsx)(p.Composite,{virtualFocus:!0,focusLoop:!0,activeId:A,setActiveId:S,role:"listbox",className:"dataviews-filters__search-widget-listbox","aria-label":(0,w.sprintf)((0,w.__)("List of: %1$s"),c.name),onFocusVisible:()=>{!A&&c.elements.length&&S(j(E,c.elements[0].value))},render:(0,b.jsx)(p.Composite.Typeahead,{}),children:c.elements.map(N=>(0,b.jsxs)(p.Composite.Hover,{render:(0,b.jsx)(p.Composite.Item,{id:j(E,N.value),render:(0,b.jsx)("div",{"aria-label":N.label,role:"option",className:"dataviews-filters__search-widget-listitem"}),onClick:()=>{var C,T;const I=P?[...((C=d.filters)!==null&&C!==void 0?C:[]).map(L=>L.field===c.field?{...L,operator:P.operator||c.operators[0],value:u(c,P,N.value)}:L)]:[...(T=d.filters)!==null&&T!==void 0?T:[],{field:c.field,operator:c.operators[0],value:u(c,P,N.value)}];g({...d,page:1,filters:I})}}),children:[c.singleSelection&&(0,b.jsx)(R,{selected:k===N.value}),!c.singleSelection&&(0,b.jsx)(x,{selected:k.includes(N.value)}),(0,b.jsx)("span",{children:N.label})]},N.value))})}function o({view:d,filter:c,onChangeView:g}){const[E,A]=(0,n.useState)(""),S=(0,n.useDeferredValue)(E),P=d.filters?.find(C=>C.field===c.field),k=(0,v.getCurrentValue)(c,P),N=(0,n.useMemo)(()=>{const C=l(S);return c.elements.filter(T=>l(T.label).includes(C))},[c.elements,S]);return(0,b.jsxs)(h.ComboboxProvider,{selectedValue:k,setSelectedValue:C=>{var T,I;const L=P?[...((T=d.filters)!==null&&T!==void 0?T:[]).map(z=>z.field===c.field?{...z,operator:P.operator||c.operators[0],value:C}:z)]:[...(I=d.filters)!==null&&I!==void 0?I:[],{field:c.field,operator:c.operators[0],value:C}];g({...d,page:1,filters:L})},setValue:A,children:[(0,b.jsxs)("div",{className:"dataviews-filters__search-widget-filter-combobox__wrapper",children:[(0,b.jsx)(h.ComboboxLabel,{render:(0,b.jsx)(p.VisuallyHidden,{children:(0,w.__)("Search items")}),children:(0,w.__)("Search items")}),(0,b.jsx)(h.Combobox,{autoSelect:"always",placeholder:(0,w.__)("Search"),className:"dataviews-filters__search-widget-filter-combobox__input"}),(0,b.jsx)("div",{className:"dataviews-filters__search-widget-filter-combobox__icon",children:(0,b.jsx)(p.Icon,{icon:i.search})})]}),(0,b.jsxs)(h.ComboboxList,{className:"dataviews-filters__search-widget-filter-combobox-list",alwaysVisible:!0,children:[N.map(C=>(0,b.jsxs)(h.ComboboxItem,{resetValueOnSelect:!1,value:C.value,className:"dataviews-filters__search-widget-listitem",hideOnClick:!1,setValueOnClick:!1,focusOnHover:!0,children:[c.singleSelection&&(0,b.jsx)(R,{selected:k===C.value}),!c.singleSelection&&(0,b.jsx)(x,{selected:k.includes(C.value)}),(0,b.jsxs)("span",{children:[(0,b.jsx)(h.ComboboxItemValue,{className:"dataviews-filters__search-widget-filter-combobox-item-value",value:C.label}),!!C.description&&(0,b.jsx)("span",{className:"dataviews-filters__search-widget-listitem-description",children:C.description})]})]},C.value)),!N.length&&(0,b.jsx)("p",{children:(0,w.__)("No results found")})]})]})}function f(d){const c=d.filter.elements.length>10?o:y;return(0,b.jsx)(c,{...d})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-filters/utils.js":((F,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.getCurrentValue=void 0;const e=[],r=(h,s)=>h.singleSelection?s?.value:Array.isArray(s?.value)?s.value:!Array.isArray(s?.value)&&s?.value?[s.value]:e;a.getCurrentValue=r}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-footer/index.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=v;var h=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),t=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),m=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-pagination/index.js")),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-bulk-actions/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/constants.js"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i=[];function v(){const{view:b,paginationInfo:{totalItems:_=0,totalPages:O},data:l,actions:u=i}=(0,s.useContext)(t.default),j=(0,w.useSomeItemHasAPossibleBulkAction)(u,l)&&[n.LAYOUT_TABLE,n.LAYOUT_GRID].includes(b.type);return!_||!O||O<=1&&!j?null:!!_&&(0,p.jsxs)(h.__experimentalHStack,{expanded:!1,justify:"end",className:"dataviews-footer",children:[j&&(0,p.jsx)(w.BulkActionsFooter,{}),(0,p.jsx)(m.default,{})]})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-item-actions/index.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ActionModal=_,a.ActionsMenuGroup=O,a.default=l;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@10.30.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+data@10.30.0_react@18.3.1/node_modules/@wordpress/data/build-module/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/lock-unlock.js"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Menu:p,kebabCase:i}=(0,w.unlock)(r.privateApis);function v({action:x,onClick:R,items:y}){const o=typeof x.label=="string"?x.label:x.label(y);return(0,n.jsx)(r.Button,{label:o,icon:x.icon,disabled:!!x.disabled,accessibleWhenDisabled:!0,isDestructive:x.isDestructive,size:"compact",onClick:R})}function b({action:x,onClick:R,items:y}){const o=typeof x.label=="string"?x.label:x.label(y);return(0,n.jsx)(p.Item,{disabled:x.disabled,onClick:R,children:(0,n.jsx)(p.ItemLabel,{children:o})})}function _({action:x,items:R,closeModal:y}){var o;const f=typeof x.label=="string"?x.label:x.label(R);return(0,n.jsx)(r.Modal,{title:x.modalHeader||f,__experimentalHideHeader:!!x.hideModalHeader,onRequestClose:y,focusOnMount:(o=x.modalFocusOnMount)!==null&&o!==void 0?o:!0,size:x.modalSize||"medium",overlayClassName:`dataviews-action-modal dataviews-action-modal__${i(x.id)}`,children:(0,n.jsx)(x.RenderModal,{items:R,closeModal:y})})}function O({actions:x,item:R,registry:y,setActiveModalAction:o}){return(0,n.jsx)(p.Group,{children:x.map(f=>(0,n.jsx)(b,{action:f,onClick:()=>{if("RenderModal"in f){o(f);return}f.callback([R],{registry:y})},items:[R]},f.id))})}function l({item:x,actions:R,isCompact:y}){const o=(0,m.useRegistry)(),{primaryActions:f,eligibleActions:d}=(0,s.useMemo)(()=>{const c=R.filter(E=>!E.isEligible||E.isEligible(x));return{primaryActions:c.filter(E=>E.isPrimary&&!!E.icon),eligibleActions:c}},[R,x]);return y?(0,n.jsx)(u,{item:x,actions:d,isSmall:!0,registry:o}):(0,n.jsxs)(r.__experimentalHStack,{spacing:1,justify:"flex-end",className:"dataviews-item-actions",style:{flexShrink:0,width:"auto"},children:[(0,n.jsx)(j,{item:x,actions:f,registry:o}),f.length<d.length&&(0,n.jsx)(u,{item:x,actions:d,registry:o})]})}function u({item:x,actions:R,isSmall:y,registry:o}){const[f,d]=(0,s.useState)(null);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(p,{placement:"bottom-end",children:[(0,n.jsx)(p.TriggerButton,{render:(0,n.jsx)(r.Button,{size:y?"small":"compact",icon:t.moreVertical,label:(0,h.__)("Actions"),accessibleWhenDisabled:!0,disabled:!R.length,className:"dataviews-all-actions-button"})}),(0,n.jsx)(p.Popover,{children:(0,n.jsx)(O,{actions:R,item:x,registry:o,setActiveModalAction:d})})]}),!!f&&(0,n.jsx)(_,{action:f,items:[x],closeModal:()=>d(null)})]})}function j({item:x,actions:R,registry:y}){const[o,f]=(0,s.useState)(null);return!Array.isArray(R)||R.length===0?null:(0,n.jsxs)(n.Fragment,{children:[R.map(d=>(0,n.jsx)(v,{action:d,onClick:()=>{if("RenderModal"in d){f(d);return}d.callback([x],{registry:y})},items:[x]},d.id)),!!o&&(0,n.jsx)(_,{action:o,items:[x],closeModal:()=>f(null)})]})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-layout/index.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=n;var h=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),t=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),m=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataviews-layouts/index.js"),w=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function n({className:p}){const{actions:i=[],data:v,fields:b,getItemId:_,getItemLevel:O,isLoading:l,view:u,onChangeView:j,selection:x,onChangeSelection:R,setOpenedFilter:y,onClickItem:o,isItemClickable:f,renderItemLink:d,empty:c=(0,s.__)("No results")}=(0,h.useContext)(t.default),g=m.VIEW_LAYOUTS.find(E=>E.type===u.type)?.component;return(0,w.jsx)(g,{className:p,actions:i,data:v,fields:b,getItemId:_,getItemLevel:O,isLoading:l,onChangeView:j,onChangeSelection:R,selection:x,setOpenedFilter:y,onClickItem:o,renderItemLink:d,isItemClickable:f,view:u,empty:c})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-pagination/index.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.DataViewsPagination=p,a.default=void 0;var h=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+icons@10.30.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),w=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function p(){var v;const{view:b,onChangeView:_,paginationInfo:{totalItems:O=0,totalPages:l}}=(0,s.useContext)(w.default);if(!O||!l||b.infiniteScrollEnabled)return null;const u=(v=b.page)!==null&&v!==void 0?v:1,j=Array.from(Array(l)).map((x,R)=>{const y=R+1;return{value:y.toString(),label:y.toString(),"aria-label":u===y?(0,t.sprintf)((0,t.__)("Page %1$d of %2$d"),u,l):y.toString()}});return!!O&&l!==1&&(0,n.jsxs)(h.__experimentalHStack,{expanded:!1,className:"dataviews-pagination",justify:"end",spacing:6,children:[(0,n.jsx)(h.__experimentalHStack,{justify:"flex-start",expanded:!1,spacing:1,className:"dataviews-pagination__page-select",children:(0,s.createInterpolateElement)((0,t.sprintf)((0,t._x)("<div>Page</div>%1$s<div>of %2$d</div>","paging"),"<CurrentPage />",l),{div:(0,n.jsx)("div",{"aria-hidden":!0}),CurrentPage:(0,n.jsx)(h.SelectControl,{"aria-label":(0,t.__)("Current page"),value:u.toString(),options:j,onChange:x=>{_({...b,page:+x})},size:"small",__nextHasNoMarginBottom:!0,variant:"minimal"})})}),(0,n.jsxs)(h.__experimentalHStack,{expanded:!1,spacing:1,children:[(0,n.jsx)(h.Button,{onClick:()=>_({...b,page:u-1}),disabled:u===1,accessibleWhenDisabled:!0,label:(0,t.__)("Previous page"),icon:(0,t.isRTL)()?m.next:m.previous,showTooltip:!0,size:"compact",tooltipPosition:"top"}),(0,n.jsx)(h.Button,{onClick:()=>_({...b,page:u+1}),disabled:u>=l,accessibleWhenDisabled:!0,label:(0,t.__)("Next page"),icon:(0,t.isRTL)()?m.previous:m.next,showTooltip:!0,size:"compact",tooltipPosition:"top"})]})]})}var i=a.default=(0,s.memo)(p)}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-search/index.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var h=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+compose@7.30.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),w=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const p=(0,s.memo)(function({label:b}){const{view:_,onChangeView:O}=(0,s.useContext)(w.default),[l,u,j]=(0,m.useDebouncedInput)(_.search);(0,s.useEffect)(()=>{var o;u((o=_.search)!==null&&o!==void 0?o:"")},[_.search,u]);const x=(0,s.useRef)(O),R=(0,s.useRef)(_);(0,s.useEffect)(()=>{x.current=O,R.current=_},[O,_]),(0,s.useEffect)(()=>{j!==R.current?.search&&x.current({...R.current,page:1,search:j})},[j]);const y=b||(0,h.__)("Search");return(0,n.jsx)(t.SearchControl,{className:"dataviews-search",__nextHasNoMarginBottom:!0,onChange:u,value:l,label:y,placeholder:y,size:"compact"})});var i=a.default=p}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-selection-checkbox/index.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=t;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({selection:m,onChangeSelection:w,item:n,getItemId:p,titleField:i,disabled:v}){const b=p(n),_=!v&&m.includes(b),O=i?.getValue?.({item:n})||(0,h.__)("(no title)");return(0,s.jsx)(r.CheckboxControl,{className:"dataviews-selection-checkbox",__nextHasNoMarginBottom:!0,"aria-label":O,"aria-disabled":v,checked:_,onChange:()=>{v||w(m.includes(b)?m.filter(l=>b!==l):[...m,b])}})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-view-config/index.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.DataviewsViewConfigDropdown=S,a.ViewTypeMenu=x,a.default=void 0;var h=r(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),s=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+icons@10.30.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),n=r(e("../../../node_modules/.pnpm/@wordpress+warning@3.30.0/node_modules/@wordpress/warning/build-module/index.js")),p=e("../../../node_modules/.pnpm/@wordpress+compose@7.30.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/constants.js"),v=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataviews-layouts/index.js"),b=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),_=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-view-config/infinite-scroll-toggle.js")),O=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/lock-unlock.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Menu:u}=(0,O.unlock)(s.privateApis),j={className:"dataviews-config__popover",placement:"bottom-end",offset:9};function x(){const{view:C,onChangeView:T,defaultLayouts:I}=(0,m.useContext)(b.default),L=Object.keys(I);if(L.length<=1)return null;const z=v.VIEW_LAYOUTS.find(V=>C.type===V.type);return(0,l.jsxs)(u,{children:[(0,l.jsx)(u.TriggerButton,{render:(0,l.jsx)(s.Button,{size:"compact",icon:z?.icon,label:(0,t.__)("Layout")})}),(0,l.jsx)(u.Popover,{children:L.map(V=>{const $=v.VIEW_LAYOUTS.find(D=>D.type===V);return $?(0,l.jsx)(u.RadioItem,{value:V,name:"view-actions-available-view",checked:V===C.type,hideOnClick:!0,onChange:D=>{switch(D.target.value){case"list":case"grid":case"table":const U={...C};return"layout"in U&&delete U.layout,T({...U,type:D.target.value,...I[D.target.value]})}globalThis.SCRIPT_DEBUG===!0&&(0,n.default)("Invalid dataview")},children:(0,l.jsx)(u.ItemLabel,{children:$.label})},V):null})})]})}function R(){const{view:C,fields:T,onChangeView:I}=(0,m.useContext)(b.default),L=(0,m.useMemo)(()=>T.filter(V=>V.enableSorting!==!1).map(V=>({label:V.label,value:V.id})),[T]);return(0,l.jsx)(s.SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:(0,t.__)("Sort by"),value:C.sort?.field,options:L,onChange:z=>{I({...C,sort:{direction:C?.sort?.direction||"desc",field:z},showLevels:!1})}})}function y(){const{view:C,fields:T,onChangeView:I}=(0,m.useContext)(b.default);if(T.filter(V=>V.enableSorting!==!1).length===0)return null;let z=C.sort?.direction;return!z&&C.sort?.field&&(z="desc"),(0,l.jsx)(s.__experimentalToggleGroupControl,{className:"dataviews-view-config__sort-direction",__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,isBlock:!0,label:(0,t.__)("Order"),value:z,onChange:V=>{if(V==="asc"||V==="desc"){I({...C,sort:{direction:V,field:C.sort?.field||T.find($=>$.enableSorting!==!1)?.id||""},showLevels:!1});return}globalThis.SCRIPT_DEBUG===!0&&(0,n.default)("Invalid direction")},children:i.SORTING_DIRECTIONS.map(V=>(0,l.jsx)(s.__experimentalToggleGroupControlOptionIcon,{value:V,icon:i.sortIcons[V],label:i.sortLabels[V]},V))})}function o(){const{view:C,config:T,onChangeView:I}=(0,m.useContext)(b.default),{infiniteScrollEnabled:L}=C;return!T||!T.perPageSizes||T.perPageSizes.length<2||T.perPageSizes.length>6||L?null:(0,l.jsx)(s.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,isBlock:!0,label:(0,t.__)("Items per page"),value:C.perPage||10,disabled:!C?.sort?.field,onChange:z=>{const V=typeof z=="number"||z===void 0?z:parseInt(z,10);I({...C,perPage:V,page:1})},children:T.perPageSizes.map(z=>(0,l.jsx)(s.__experimentalToggleGroupControlOption,{value:z,label:z.toString()},z))})}function f({previewOptions:C,onChangePreviewOption:T,onMenuOpenChange:I,activeOption:L}){const z=V=>{setTimeout(()=>{const $=document.querySelector(`.dataviews-field-control__field-${V} .dataviews-field-control__field-preview-options-button`);$ instanceof HTMLElement&&$.focus()},50)};return(0,l.jsxs)(u,{onOpenChange:I,children:[(0,l.jsx)(u.TriggerButton,{render:(0,l.jsx)(s.Button,{className:"dataviews-field-control__field-preview-options-button",size:"compact",icon:w.moreVertical,label:(0,t.__)("Preview")})}),(0,l.jsx)(u.Popover,{children:C?.map(({id:V,label:$})=>(0,l.jsx)(u.RadioItem,{value:V,checked:V===L,onChange:()=>{T?.(V),z(V)},children:(0,l.jsx)(u.ItemLabel,{children:$})},V))})]})}function d({field:C,label:T,description:I,isVisible:L,isFirst:z,isLast:V,canMove:$=!0,onToggleVisibility:D,onMoveUp:U,onMoveDown:G,previewOptions:X,onChangePreviewOption:K}){const[ee,Y]=(0,m.useState)(!1),J=()=>{setTimeout(()=>{const Z=document.querySelector(`.dataviews-field-control__field-${C.id} .dataviews-field-control__field-visibility-button`);Z instanceof HTMLElement&&Z.focus()},50)};return(0,l.jsx)(s.__experimentalItem,{children:(0,l.jsxs)(s.__experimentalHStack,{expanded:!0,className:(0,h.default)("dataviews-field-control__field",`dataviews-field-control__field-${C.id}`,{"is-interacting":ee}),justify:"flex-start",children:[(0,l.jsx)("span",{className:"dataviews-field-control__icon",children:!$&&!C.enableHiding&&(0,l.jsx)(s.Icon,{icon:w.lock})}),(0,l.jsxs)("span",{className:"dataviews-field-control__label-sub-label-container",children:[(0,l.jsx)("span",{className:"dataviews-field-control__label",children:T||C.label}),I&&(0,l.jsx)("span",{className:"dataviews-field-control__sub-label",children:I})]}),(0,l.jsxs)(s.__experimentalHStack,{justify:"flex-end",expanded:!1,className:"dataviews-field-control__actions",children:[L&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Button,{disabled:z||!$,accessibleWhenDisabled:!0,size:"compact",onClick:U,icon:w.chevronUp,label:z||!$?(0,t.__)("This field can't be moved up"):(0,t.sprintf)((0,t.__)("Move %s up"),C.label)}),(0,l.jsx)(s.Button,{disabled:V||!$,accessibleWhenDisabled:!0,size:"compact",onClick:G,icon:w.chevronDown,label:V||!$?(0,t.__)("This field can't be moved down"):(0,t.sprintf)((0,t.__)("Move %s down"),C.label)})]}),D&&(0,l.jsx)(s.Button,{className:"dataviews-field-control__field-visibility-button",disabled:!C.enableHiding,accessibleWhenDisabled:!0,size:"compact",onClick:()=>{D(),J()},icon:L?w.unseen:w.seen,label:L?(0,t.sprintf)((0,t._x)("Hide %s","field"),C.label):(0,t.sprintf)((0,t._x)("Show %s","field"),C.label)}),X&&(0,l.jsx)(f,{previewOptions:X,onChangePreviewOption:K,onMenuOpenChange:Y,activeOption:C.id})]})]})})}function c({index:C,field:T,view:I,onChangeView:L}){var z;const V=(z=I.fields)!==null&&z!==void 0?z:[],$=C!==void 0&&V.includes(T.id);return(0,l.jsx)(d,{field:T,isVisible:$,isFirst:C!==void 0&&C<1,isLast:C!==void 0&&C===V.length-1,onToggleVisibility:()=>{L({...I,fields:$?V.filter(D=>D!==T.id):[...V,T.id]})},onMoveUp:C!==void 0?()=>{var D;L({...I,fields:[...(D=V.slice(0,C-1))!==null&&D!==void 0?D:[],T.id,V[C-1],...V.slice(C+1)]})}:void 0,onMoveDown:C!==void 0?()=>{var D;L({...I,fields:[...(D=V.slice(0,C))!==null&&D!==void 0?D:[],V[C+1],T.id,...V.slice(C+2)]})}:void 0})}function g(C){return!!C}function E(){var C;const{view:T,fields:I,onChangeView:L}=(0,m.useContext)(b.default),z=[T?.titleField,T?.mediaField,T?.descriptionField].filter(Boolean),V=(C=T.fields)!==null&&C!==void 0?C:[],$=I.filter(B=>!V.includes(B.id)&&!z.includes(B.id)&&B.type!=="media"),D=V.map(B=>I.find(H=>H.id===B)).filter(g);if(!D?.length&&!$?.length)return null;const U=I.find(B=>B.id===T.titleField),G=I.find(B=>B.id===T.mediaField),X=I.find(B=>B.id===T.descriptionField),K=I.filter(B=>B.type==="media");let ee;if(K.length>1){var Y;const B=g(G)&&((Y=T.showMedia)!==null&&Y!==void 0?Y:!0);ee=g(G)&&(0,l.jsx)(d,{field:G,label:(0,t.__)("Preview"),description:G.label,isVisible:B,onToggleVisibility:()=>{L({...T,showMedia:!B})},canMove:!1,previewOptions:K.map(H=>({label:H.label,id:H.id})),onChangePreviewOption:H=>L({...T,mediaField:H})},G.id)}const J=[{field:U,isVisibleFlag:"showTitle"},{field:G,isVisibleFlag:"showMedia",ui:ee},{field:X,isVisibleFlag:"showDescription"}].filter(({field:B})=>g(B)),Z=J.filter(({field:B,isVisibleFlag:H})=>{var M;return g(B)&&((M=T[H])!==null&&M!==void 0?M:!0)}),W=J.filter(({field:B,isVisibleFlag:H})=>{var M;return g(B)&&!(!((M=T[H])!==null&&M!==void 0)||M)});return(0,l.jsxs)(s.__experimentalVStack,{className:"dataviews-field-control",spacing:6,children:[(0,l.jsx)(s.__experimentalVStack,{className:"dataviews-view-config__properties",spacing:0,children:(Z.length>0||!!D?.length)&&(0,l.jsxs)(s.__experimentalItemGroup,{isBordered:!0,isSeparated:!0,children:[Z.map(({field:B,isVisibleFlag:H,ui:M})=>M??(0,l.jsx)(d,{field:B,isVisible:!0,onToggleVisibility:()=>{L({...T,[H]:!1})},canMove:!1},B.id)),D.map((B,H)=>(0,l.jsx)(c,{field:B,view:T,onChangeView:L,index:H},B.id))]})}),(!!$?.length||!!W.length)&&(0,l.jsxs)(s.__experimentalVStack,{spacing:4,children:[(0,l.jsx)(s.BaseControl.VisualLabel,{style:{margin:0},children:(0,t.__)("Hidden")}),(0,l.jsx)(s.__experimentalVStack,{className:"dataviews-view-config__properties",spacing:0,children:(0,l.jsxs)(s.__experimentalItemGroup,{isBordered:!0,isSeparated:!0,children:[W.length>0&&W.map(({field:B,isVisibleFlag:H,ui:M})=>M??(0,l.jsx)(d,{field:B,isVisible:!1,onToggleVisibility:()=>{L({...T,[H]:!0})},canMove:!1},B.id)),$.map(B=>(0,l.jsx)(c,{field:B,view:T,onChangeView:L},B.id))]})})]})]})}function A({title:C,description:T,children:I}){return(0,l.jsxs)(s.__experimentalGrid,{columns:12,className:"dataviews-settings-section",gap:4,children:[(0,l.jsxs)("div",{className:"dataviews-settings-section__sidebar",children:[(0,l.jsx)(s.__experimentalHeading,{level:2,className:"dataviews-settings-section__title",children:C}),T&&(0,l.jsx)(s.__experimentalText,{variant:"muted",className:"dataviews-settings-section__description",children:T})]}),(0,l.jsx)(s.__experimentalGrid,{columns:8,gap:4,className:"dataviews-settings-section__content",children:I})]})}function S(){const{view:C}=(0,m.useContext)(b.default),T=(0,p.useInstanceId)(P,"dataviews-view-config-dropdown"),I=v.VIEW_LAYOUTS.find(L=>L.type===C.type);return(0,l.jsx)(s.Dropdown,{expandOnMobile:!0,popoverProps:{...j,id:T},renderToggle:({onToggle:L,isOpen:z})=>(0,l.jsx)(s.Button,{size:"compact",icon:w.cog,label:(0,t._x)("View options","View is used as a noun"),onClick:L,"aria-expanded":z?"true":"false","aria-controls":T}),renderContent:()=>(0,l.jsx)(s.__experimentalDropdownContentWrapper,{paddingSize:"medium",className:"dataviews-config__popover-content-wrapper",children:(0,l.jsxs)(s.__experimentalVStack,{className:"dataviews-view-config",spacing:6,children:[(0,l.jsxs)(A,{title:(0,t.__)("Appearance"),children:[(0,l.jsxs)(s.__experimentalHStack,{expanded:!0,className:"is-divided-in-two",children:[(0,l.jsx)(R,{}),(0,l.jsx)(y,{})]}),!!I?.viewConfigOptions&&(0,l.jsx)(I.viewConfigOptions,{}),(0,l.jsx)(_.default,{}),(0,l.jsx)(o,{})]}),(0,l.jsx)(A,{title:(0,t.__)("Properties"),children:(0,l.jsx)(E,{})})]})})})}function P(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x,{}),(0,l.jsx)(S,{})]})}const k=(0,m.memo)(P);var N=a.default=k}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-view-config/infinite-scroll-toggle.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=n;var h=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),m=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),w=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function n(){var p;const i=(0,t.useContext)(m.default),{view:v,onChangeView:b}=i,_=(p=v.infiniteScrollEnabled)!==null&&p!==void 0?p:!1;return i.hasInfiniteScrollHandler?(0,w.jsx)(h.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,s.__)("Enable infinite scroll"),help:(0,s.__)("Automatically load more content as you scroll, instead of showing pagination links."),checked:_,onChange:O=>{b({...v,infiniteScrollEnabled:O})}}):null}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews/index.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var h=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+compose@7.30.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),m=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),w=j(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-filters/index.js")),n=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-layout/index.js")),p=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-footer/index.js")),i=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-search/index.js")),v=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-bulk-actions/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-pagination/index.js"),_=j(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-view-config/index.js")),O=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/normalize-fields.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function u(g){if(typeof WeakMap!="function")return null;var E=new WeakMap,A=new WeakMap;return(u=function(S){return S?A:E})(g)}function j(g,E){if(!E&&g&&g.__esModule)return g;if(g===null||typeof g!="object"&&typeof g!="function")return{default:g};var A=u(E);if(A&&A.has(g))return A.get(g);var S={__proto__:null},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var k in g)if(k!=="default"&&{}.hasOwnProperty.call(g,k)){var N=P?Object.getOwnPropertyDescriptor(g,k):null;N&&(N.get||N.set)?Object.defineProperty(S,k,N):S[k]=g[k]}return S.default=g,A&&A.set(g,S),S}const x=g=>g.id,R=()=>!0,y=[];function o({header:g,search:E=!0,searchLabel:A=void 0}){const{isShowingFilter:S,config:P}=(0,s.useContext)(m.default);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(h.__experimentalHStack,{alignment:"top",justify:"space-between",className:"dataviews__view-actions",spacing:1,children:[(0,l.jsxs)(h.__experimentalHStack,{justify:"start",expanded:!1,className:"dataviews__search",children:[E&&(0,l.jsx)(i.default,{label:A}),(0,l.jsx)(w.FiltersToggle,{})]}),(P||g)&&(0,l.jsxs)(h.__experimentalHStack,{spacing:1,expanded:!1,style:{flexShrink:0},children:["config && ",(0,l.jsx)(_.default,{}),g]})]}),S&&(0,l.jsx)(w.default,{className:"dataviews-filters__container"}),(0,l.jsx)(n.default,{}),(0,l.jsx)(p.default,{})]})}function f({view:g,onChangeView:E,fields:A,search:S=!0,searchLabel:P=void 0,actions:k=y,data:N,getItemId:C=x,getItemLevel:T,isLoading:I=!1,paginationInfo:L,defaultLayouts:z,selection:V,onChangeSelection:$,onClickItem:D,renderItemLink:U,isItemClickable:G=R,header:X,children:K,config:ee={perPageSizes:[10,20,50,100]},empty:Y}){const{infiniteScrollHandler:J}=L,Z=(0,s.useRef)(null),[W,B]=(0,s.useState)(0),H=(0,t.useResizeObserver)(oe=>{B(oe[0].borderBoxSize[0].inlineSize)},{box:"border-box"}),[M,te]=(0,s.useState)([]),ie=V===void 0||$===void 0,q=ie?M:V,[de,ne]=(0,s.useState)(null);function fe(oe){const le=typeof oe=="function"?oe(q):oe;ie&&te(le),$&&$(le)}const ue=(0,s.useMemo)(()=>(0,O.normalizeFields)(A),[A]),ce=(0,s.useMemo)(()=>q.filter(oe=>N.some(le=>C(le)===oe)),[q,N,C]),Q=(0,w.useFilters)(ue,g),ae=(0,s.useMemo)(()=>(Q||[]).some(oe=>oe.isPrimary||oe.isLocked),[Q]),[se,re]=(0,s.useState)(ae);return(0,s.useEffect)(()=>{ae&&!se&&re(!0)},[ae,se]),(0,s.useEffect)(()=>{if(!g.infiniteScrollEnabled||!Z.current)return;const oe=(0,t.throttle)(pe=>{const me=pe.target,be=me.scrollTop,_e=me.scrollHeight,ve=me.clientHeight;be+ve>=_e-100&&J?.()},100),le=Z.current;return le.addEventListener("scroll",oe),()=>{le.removeEventListener("scroll",oe),oe.cancel()}},[J,g.infiniteScrollEnabled]),(0,l.jsx)(m.default.Provider,{value:{view:g,onChangeView:E,fields:ue,actions:k,data:N,isLoading:I,paginationInfo:L,selection:ce,onChangeSelection:fe,openedFilter:de,setOpenedFilter:ne,getItemId:C,getItemLevel:T,isItemClickable:G,onClickItem:D,renderItemLink:U,containerWidth:W,containerRef:Z,resizeObserverRef:H,defaultLayouts:z,filters:Q,isShowingFilter:se,setIsShowingFilter:re,config:ee,empty:Y,hasInfiniteScrollHandler:!!J},children:(0,l.jsx)("div",{className:"dataviews-wrapper",ref:Z,children:K??(0,l.jsx)(o,{header:X,search:S,searchLabel:P})})})}const d=f;d.BulkActionToolbar=v.BulkActionsFooter,d.Filters=w.default,d.FiltersToggle=w.FiltersToggle,d.Layout=n.default,d.LayoutSwitcher=_.ViewTypeMenu,d.Pagination=b.DataViewsPagination,d.Search=i.default,d.ViewConfig=_.DataviewsViewConfigDropdown;var c=a.default=d}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/constants.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.sortValues=a.sortLabels=a.sortIcons=a.sortArrows=a.SORTING_DIRECTIONS=a.SINGLE_SELECTION_OPERATORS=a.OPERATOR_STARTS_WITH=a.OPERATOR_OVER=a.OPERATOR_ON=a.OPERATOR_NOT_ON=a.OPERATOR_NOT_CONTAINS=a.OPERATOR_LESS_THAN_OR_EQUAL=a.OPERATOR_LESS_THAN=a.OPERATOR_IS_NOT_ALL=a.OPERATOR_IS_NOT=a.OPERATOR_IS_NONE=a.OPERATOR_IS_ANY=a.OPERATOR_IS_ALL=a.OPERATOR_IS=a.OPERATOR_IN_THE_PAST=a.OPERATOR_GREATER_THAN_OR_EQUAL=a.OPERATOR_GREATER_THAN=a.OPERATOR_CONTAINS=a.OPERATOR_BETWEEN=a.OPERATOR_BEFORE_INC=a.OPERATOR_BEFORE=a.OPERATOR_AFTER_INC=a.OPERATOR_AFTER=a.OPERATORS=a.LAYOUT_TABLE=a.LAYOUT_LIST=a.LAYOUT_GRID=a.ALL_OPERATORS=void 0;var r=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+icons@10.30.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js");const s=a.OPERATOR_IS="is",t=a.OPERATOR_IS_NOT="isNot",m=a.OPERATOR_IS_ANY="isAny",w=a.OPERATOR_IS_NONE="isNone",n=a.OPERATOR_IS_ALL="isAll",p=a.OPERATOR_IS_NOT_ALL="isNotAll",i=a.OPERATOR_LESS_THAN="lessThan",v=a.OPERATOR_GREATER_THAN="greaterThan",b=a.OPERATOR_LESS_THAN_OR_EQUAL="lessThanOrEqual",_=a.OPERATOR_GREATER_THAN_OR_EQUAL="greaterThanOrEqual",O=a.OPERATOR_BEFORE="before",l=a.OPERATOR_AFTER="after",u=a.OPERATOR_BEFORE_INC="beforeInc",j=a.OPERATOR_AFTER_INC="afterInc",x=a.OPERATOR_CONTAINS="contains",R=a.OPERATOR_NOT_CONTAINS="notContains",y=a.OPERATOR_STARTS_WITH="startsWith",o=a.OPERATOR_BETWEEN="between",f=a.OPERATOR_ON="on",d=a.OPERATOR_NOT_ON="notOn",c=a.OPERATOR_IN_THE_PAST="inThePast",g=a.OPERATOR_OVER="over",E=a.ALL_OPERATORS=[s,t,m,w,n,p,i,v,b,_,O,l,u,j,x,R,y,o,f,d,c,g],A=a.SINGLE_SELECTION_OPERATORS=[s,t,i,v,b,_,O,l,u,j,x,R,y,f,d],S=a.OPERATORS={[s]:{key:"is-filter",label:(0,r.__)("Is")},[t]:{key:"is-not-filter",label:(0,r.__)("Is not")},[m]:{key:"is-any-filter",label:(0,r.__)("Is any")},[w]:{key:"is-none-filter",label:(0,r.__)("Is none")},[n]:{key:"is-all-filter",label:(0,r.__)("Is all")},[p]:{key:"is-not-all-filter",label:(0,r.__)("Is not all")},[i]:{key:"less-than-filter",label:(0,r.__)("Less than")},[v]:{key:"greater-than-filter",label:(0,r.__)("Greater than")},[b]:{key:"less-than-or-equal-filter",label:(0,r.__)("Less than or equal")},[_]:{key:"greater-than-or-equal-filter",label:(0,r.__)("Greater than or equal")},[O]:{key:"before-filter",label:(0,r.__)("Before")},[l]:{key:"after-filter",label:(0,r.__)("After")},[u]:{key:"before-inc-filter",label:(0,r.__)("Before (inc)")},[j]:{key:"after-inc-filter",label:(0,r.__)("After (inc)")},[x]:{key:"contains-filter",label:(0,r.__)("Contains")},[R]:{key:"not-contains-filter",label:(0,r.__)("Doesn't contain")},[y]:{key:"starts-with-filter",label:(0,r.__)("Starts with")},[o]:{key:"between-filter",label:(0,r.__)("Between (inc)")},[f]:{key:"on-filter",label:(0,r.__)("On")},[d]:{key:"not-on-filter",label:(0,r.__)("Not on")},[c]:{key:"in-the-past-filter",label:(0,r.__)("In the past")},[g]:{key:"over-filter",label:(0,r.__)("Over")}},P=a.SORTING_DIRECTIONS=["asc","desc"],k=a.sortArrows={asc:"\u2191",desc:"\u2193"},N=a.sortValues={asc:"ascending",desc:"descending"},C=a.sortLabels={asc:(0,r.__)("Sort ascending"),desc:(0,r.__)("Sort descending")},T=a.sortIcons={asc:h.arrowUp,desc:h.arrowDown},I=a.LAYOUT_TABLE="table",L=a.LAYOUT_GRID="grid",z=a.LAYOUT_LIST="list"}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/array.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=t;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({data:m,field:w,onChange:n,hideLabelFromVision:p}){var i;const{id:v,label:b,placeholder:_,elements:O}=w,l=w.getValue({item:m}),u=(0,h.useCallback)(y=>O?.find(o=>o.value===y),[O]),j=(0,h.useCallback)(y=>O?.find(o=>o.label===y),[O]),x=(0,h.useMemo)(()=>Array.isArray(l)?l.map(y=>u(y)?.label||y):[],[l,u]),R=(0,h.useCallback)(y=>{const o=y.map(f=>typeof f!="string"?f.value:j(f)?.value||f);n({[v]:o})},[v,n,j]);return(0,s.jsx)(r.FormTokenField,{label:p?void 0:b,value:x,onChange:R,placeholder:_,suggestions:(i=O?.map(y=>y.label))!==null&&i!==void 0?i:[],__experimentalExpandOnFocus:O&&O.length>0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/boolean.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=w;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/lock-unlock.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{ValidatedToggleControl:m}=(0,s.unlock)(r.privateApis);function w({field:n,onChange:p,data:i,hideLabelFromVision:v}){const{id:b,getValue:_,label:O}=n,[l,u]=(0,h.useState)(void 0);return(0,t.jsx)(m,{required:!!n.isValid.required,onValidate:j=>{const x=n.isValid?.custom?.({...i,[b]:j},n);if(x){u({type:"invalid",message:x});return}u(void 0)},customValidity:l,hidden:v,__nextHasNoMarginBottom:!0,label:O,checked:_({item:i}),onChange:()=>p({[b]:!_({item:i})})})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/checkbox.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=s;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function s({field:t,onChange:m,data:w,hideLabelFromVision:n}){const{id:p,getValue:i,label:v,description:b}=t;return(0,h.jsx)(r.CheckboxControl,{__nextHasNoMarginBottom:!0,hidden:n,label:v,help:b,checked:i({item:w}),onChange:()=>m({[p]:!i({item:w})})})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/date.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=o;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+date@5.30.0/node_modules/@wordpress/date/build-module/index.js"),m=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/index.cjs"),w=b(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/relative-date-control.js")),n=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/constants.js"),p=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/lock-unlock.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function v(f){if(typeof WeakMap!="function")return null;var d=new WeakMap,c=new WeakMap;return(v=function(g){return g?c:d})(f)}function b(f,d){if(!d&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var c=v(d);if(c&&c.has(f))return c.get(f);var g={__proto__:null},E=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in f)if(A!=="default"&&{}.hasOwnProperty.call(f,A)){var S=E?Object.getOwnPropertyDescriptor(f,A):null;S&&(S.get||S.set)?Object.defineProperty(g,A,S):g[A]=f[A]}return g.default=f,c&&c.set(f,g),g}const{DateCalendar:_,DateRangeCalendar:O}=(0,p.unlock)(r.privateApis),l=[{id:"today",label:(0,s.__)("Today"),getValue:()=>(0,t.getDate)(null)},{id:"yesterday",label:(0,s.__)("Yesterday"),getValue:()=>{const f=(0,t.getDate)(null);return(0,m.subDays)(f,1)}},{id:"past-week",label:(0,s.__)("Past week"),getValue:()=>{const f=(0,t.getDate)(null);return(0,m.subDays)(f,7)}},{id:"past-month",label:(0,s.__)("Past month"),getValue:()=>{const f=(0,t.getDate)(null);return(0,m.subMonths)(f,1)}}],u=[{id:"last-7-days",label:(0,s.__)("Last 7 days"),getValue:()=>{const f=(0,t.getDate)(null);return[(0,m.subDays)(f,7),f]}},{id:"last-30-days",label:(0,s.__)("Last 30 days"),getValue:()=>{const f=(0,t.getDate)(null);return[(0,m.subDays)(f,30),f]}},{id:"month-to-date",label:(0,s.__)("Month to date"),getValue:()=>{const f=(0,t.getDate)(null);return[(0,m.startOfMonth)(f),f]}},{id:"last-year",label:(0,s.__)("Last year"),getValue:()=>{const f=(0,t.getDate)(null);return[(0,m.subYears)(f,1),f]}},{id:"year-to-date",label:(0,s.__)("Year to date"),getValue:()=>{const f=(0,t.getDate)(null);return[(0,m.startOfYear)(f),f]}}],j=f=>{if(!f)return null;const d=(0,t.getDate)(f);return d&&(0,m.isValid)(d)?d:null},x=f=>f?typeof f=="string"?f:(0,m.format)(f,"yyyy-MM-dd"):"";function R({id:f,value:d,onChange:c,label:g,hideLabelFromVision:E,className:A}){const[S,P]=(0,h.useState)(null),[k,N]=(0,h.useState)(()=>j(d)||new Date),C=(0,h.useCallback)(V=>{const $=V?(0,m.format)(V,"yyyy-MM-dd"):void 0;c({[f]:$}),P(null)},[f,c]),T=(0,h.useCallback)(V=>{const $=V.getValue(),D=x($);N($),c({[f]:D}),P(V.id)},[f,c]),I=(0,h.useCallback)(V=>{if(c({[f]:V}),V){const $=j(V);$&&N($)}P(null)},[f,c]),{timezone:{string:L},l10n:{startOfWeek:z}}=(0,t.getSettings)();return(0,i.jsx)(r.BaseControl,{__nextHasNoMarginBottom:!0,id:f,className:A,label:g,hideLabelFromVision:E,children:(0,i.jsxs)(r.__experimentalVStack,{spacing:4,children:[(0,i.jsxs)(r.__experimentalHStack,{spacing:2,wrap:!0,justify:"flex-start",children:[l.map(V=>{const $=S===V.id;return(0,i.jsx)(r.Button,{className:"dataviews-controls__date-preset",variant:"tertiary",isPressed:$,size:"small",onClick:()=>T(V),children:V.label},V.id)}),(0,i.jsx)(r.Button,{className:"dataviews-controls__date-preset",variant:"tertiary",isPressed:!S,size:"small",disabled:!!S,accessibleWhenDisabled:!1,children:(0,s.__)("Custom")})]}),(0,i.jsx)(r.__experimentalInputControl,{__next40pxDefaultSize:!0,type:"date",label:(0,s.__)("Date"),hideLabelFromVision:!0,value:d,onChange:I}),(0,i.jsx)(_,{style:{width:"100%"},selected:d&&j(d)||void 0,onSelect:C,month:k,onMonthChange:N,timeZone:L||void 0,weekStartsOn:z})]})})}function y({id:f,value:d,onChange:c,label:g,hideLabelFromVision:E,className:A}){const[S,P]=(0,h.useState)(null),k=(0,h.useMemo)(()=>{if(!d)return{from:void 0,to:void 0};const[D,U]=d;return{from:j(D)||void 0,to:j(U)||void 0}},[d]),[N,C]=(0,h.useState)(()=>k.from||new Date),T=(0,h.useCallback)((D,U)=>{D&&U?c({[f]:[x(D),x(U)]}):!D&&!U&&c({[f]:void 0})},[f,c]),I=(0,h.useCallback)(D=>{T(D?.from,D?.to),P(null)},[T]),L=(0,h.useCallback)(D=>{const[U,G]=D.getValue();C(U),T(U,G),P(D.id)},[T]),z=(0,h.useCallback)((D,U)=>{const[G,X]=d||[void 0,void 0];if(T(D==="from"?U:G,D==="to"?U:X),U){const Y=j(U);Y&&C(Y)}P(null)},[d,T]),{timezone:V,l10n:$}=(0,t.getSettings)();return(0,i.jsx)(r.BaseControl,{__nextHasNoMarginBottom:!0,id:f,className:A,label:g,hideLabelFromVision:E,children:(0,i.jsxs)(r.__experimentalVStack,{spacing:4,children:[(0,i.jsxs)(r.__experimentalHStack,{spacing:2,wrap:!0,justify:"flex-start",children:[u.map(D=>{const U=S===D.id;return(0,i.jsx)(r.Button,{className:"dataviews-controls__date-preset",variant:"tertiary",isPressed:U,size:"small",onClick:()=>L(D),children:D.label},D.id)}),(0,i.jsx)(r.Button,{className:"dataviews-controls__date-preset",variant:"tertiary",isPressed:!S,size:"small",accessibleWhenDisabled:!1,disabled:!!S,children:(0,s.__)("Custom")})]}),(0,i.jsxs)(r.__experimentalHStack,{spacing:2,children:[(0,i.jsx)(r.__experimentalInputControl,{__next40pxDefaultSize:!0,type:"date",label:(0,s.__)("From"),hideLabelFromVision:!0,value:d?.[0],onChange:D=>z("from",D)}),(0,i.jsx)(r.__experimentalInputControl,{__next40pxDefaultSize:!0,type:"date",label:(0,s.__)("To"),hideLabelFromVision:!0,value:d?.[1],onChange:D=>z("to",D)})]}),(0,i.jsx)(O,{style:{width:"100%"},selected:k,onSelect:I,month:N,onMonthChange:C,timeZone:V.string||void 0,weekStartsOn:$.startOfWeek})]})})}function o({data:f,field:d,onChange:c,hideLabelFromVision:g,operator:E}){const{id:A,label:S}=d,P=d.getValue({item:f});if(E===n.OPERATOR_IN_THE_PAST||E===n.OPERATOR_OVER)return(0,i.jsx)(w.default,{className:"dataviews-controls__date",id:A,value:P&&typeof P=="object"?P:{},onChange:c,label:S,hideLabelFromVision:g,options:w.TIME_UNITS_OPTIONS[E]});if(E===n.OPERATOR_BETWEEN){let k;return Array.isArray(P)&&P.length===2&&P.every(N=>typeof N=="string")&&(k=P),(0,i.jsx)(y,{className:"dataviews-controls__date",id:A,value:k,onChange:c,label:S,hideLabelFromVision:g})}return(0,i.jsx)(R,{className:"dataviews-controls__date",id:A,value:typeof P=="string"?P:void 0,onChange:c,label:S,hideLabelFromVision:g})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/datetime.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=p;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/constants.js"),t=n(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/relative-date-control.js")),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function w(i){if(typeof WeakMap!="function")return null;var v=new WeakMap,b=new WeakMap;return(w=function(_){return _?b:v})(i)}function n(i,v){if(!v&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var b=w(v);if(b&&b.has(i))return b.get(i);var _={__proto__:null},O=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in i)if(l!=="default"&&{}.hasOwnProperty.call(i,l)){var u=O?Object.getOwnPropertyDescriptor(i,l):null;u&&(u.get||u.set)?Object.defineProperty(_,l,u):_[l]=i[l]}return _.default=i,b&&b.set(i,_),_}function p({data:i,field:v,onChange:b,hideLabelFromVision:_,operator:O}){const{id:l,label:u}=v,j=v.getValue({item:i}),x=(0,h.useCallback)(R=>b({[l]:R}),[l,b]);return O===s.OPERATOR_IN_THE_PAST||O===s.OPERATOR_OVER?(0,m.jsx)(t.default,{id:l,value:j&&typeof j=="object"?j:{},onChange:b,label:u,hideLabelFromVision:_,options:t.TIME_UNITS_OPTIONS[O]}):(0,m.jsxs)("fieldset",{className:"dataviews-controls__datetime",children:[!_&&(0,m.jsx)(r.BaseControl.VisualLabel,{as:"legend",children:u}),_&&(0,m.jsx)(r.VisuallyHidden,{as:"legend",children:u}),(0,m.jsx)(r.TimePicker,{currentTime:typeof j=="string"?j:void 0,onChange:x,hideLabelFromVision:!0})]})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/email.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=w;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/lock-unlock.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{ValidatedTextControl:m}=(0,s.unlock)(r.privateApis);function w({data:n,field:p,onChange:i,hideLabelFromVision:v}){const{id:b,label:_,placeholder:O,description:l}=p,u=p.getValue({item:n}),[j,x]=(0,h.useState)(void 0),R=(0,h.useCallback)(y=>i({[b]:y}),[b,i]);return(0,t.jsx)(m,{required:!!p.isValid?.required,onValidate:y=>{const o=p.isValid?.custom?.({...n,[b]:y},p);if(o){x({type:"invalid",message:o});return}x(void 0)},customValidity:j,type:"email",label:_,placeholder:O,value:u??"",help:l,onChange:R,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:v})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/index.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.getControl=l,a.getControlByType=u;var h=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/checkbox.js")),s=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/datetime.js")),t=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/date.js")),m=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/email.js")),w=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/integer.js")),n=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/radio.js")),p=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/select.js")),i=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/text.js")),v=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/toggle-group.js")),b=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/boolean.js")),_=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/array.js"));const O={array:_.default,boolean:b.default,checkbox:h.default,datetime:s.default,date:t.default,email:m.default,integer:w.default,radio:n.default,select:p.default,text:i.default,toggleGroup:v.default};function l(j,x){return typeof j.Edit=="function"?j.Edit:typeof j.Edit=="string"?u(j.Edit):j.elements&&j.type!=="array"?u("select"):typeof x.Edit=="string"?u(x.Edit):x.Edit}function u(j){if(Object.keys(O).includes(j))return O[j];throw"Control "+j+" not found"}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/integer.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=i;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/constants.js"),m=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/lock-unlock.js"),w=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{ValidatedNumberControl:n}=(0,m.unlock)(r.privateApis);function p({id:v,value:b,onChange:_,hideLabelFromVision:O}){const[l="",u=""]=Array.isArray(b)?b:[],j=(0,h.useCallback)(R=>_({[v]:[Number(R),u]}),[v,_,u]),x=(0,h.useCallback)(R=>_({[v]:[l,Number(R)]}),[v,_,l]);return(0,w.jsx)(r.BaseControl,{__nextHasNoMarginBottom:!0,help:(0,s.__)("The max. value must be greater than the min. value."),children:(0,w.jsxs)(r.Flex,{direction:"row",gap:4,children:[(0,w.jsx)(r.__experimentalNumberControl,{label:(0,s.__)("Min."),value:l,max:u?Number(u)-1:void 0,onChange:j,__next40pxDefaultSize:!0,hideLabelFromVision:O}),(0,w.jsx)(r.__experimentalNumberControl,{label:(0,s.__)("Max."),value:u,min:l?Number(l)+1:void 0,onChange:x,__next40pxDefaultSize:!0,hideLabelFromVision:O})]})})}function i({data:v,field:b,onChange:_,hideLabelFromVision:O,operator:l}){var u;const{id:j,label:x,description:R}=b,y=(u=b.getValue({item:v}))!==null&&u!==void 0?u:"",[o,f]=(0,h.useState)(void 0),d=(0,h.useCallback)(c=>{_({[j]:["",void 0].includes(c)?void 0:Number(c)})},[j,_]);return l===t.OPERATOR_BETWEEN?(0,w.jsx)(p,{id:j,value:y,onChange:_,hideLabelFromVision:O}):(0,w.jsx)(n,{required:!!b.isValid?.required,onValidate:c=>{const g=b.isValid?.custom?.({...v,[j]:[void 0,"",null].includes(c)?void 0:Number(c)},b);if(g){f({type:"invalid",message:g});return}f(void 0)},customValidity:o,label:x,help:R,value:y,onChange:d,__next40pxDefaultSize:!0,hideLabelFromVision:O})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/radio.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=t;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({data:m,field:w,onChange:n,hideLabelFromVision:p}){const{id:i,label:v}=w,b=w.getValue({item:m}),_=(0,h.useCallback)(O=>n({[i]:O}),[i,n]);return w.elements?(0,s.jsx)(r.RadioControl,{label:v,onChange:_,options:w.elements,selected:b,hideLabelFromVision:p}):null}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/relative-date-control.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.TIME_UNITS_OPTIONS=void 0,a.default=i;var h=r(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),s=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/constants.js"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const p=a.TIME_UNITS_OPTIONS={[w.OPERATOR_IN_THE_PAST]:[{value:"days",label:(0,m.__)("Days")},{value:"weeks",label:(0,m.__)("Weeks")},{value:"months",label:(0,m.__)("Months")},{value:"years",label:(0,m.__)("Years")}],[w.OPERATOR_OVER]:[{value:"days",label:(0,m.__)("Days ago")},{value:"weeks",label:(0,m.__)("Weeks ago")},{value:"months",label:(0,m.__)("Months ago")},{value:"years",label:(0,m.__)("Years ago")}]};function i({id:v,value:b,onChange:_,label:O,hideLabelFromVision:l,options:u,className:j}){const{value:x="",unit:R=u[0].value}=b,y=(0,t.useCallback)(f=>_({[v]:{value:Number(f),unit:R}}),[v,_,R]),o=(0,t.useCallback)(f=>_({[v]:{value:x,unit:f}}),[v,_,x]);return(0,n.jsx)(s.BaseControl,{id:v,__nextHasNoMarginBottom:!0,className:(0,h.default)(j,"dataviews-controls__relative-date"),label:O,hideLabelFromVision:l,children:(0,n.jsxs)(s.__experimentalHStack,{spacing:2.5,children:[(0,n.jsx)(s.__experimentalNumberControl,{__next40pxDefaultSize:!0,className:"dataviews-controls__relative-date-number",spinControls:"none",min:1,step:1,value:x,onChange:y}),(0,n.jsx)(s.SelectControl,{className:"dataviews-controls__relative-date-unit",__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:(0,m.__)("Unit"),value:R,options:u,onChange:o,hideLabelFromVision:!0})]})})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/select.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=m;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function m({data:w,field:n,onChange:p,hideLabelFromVision:i}){var v,b;const{id:_,label:O,type:l}=n,u=l==="array",j=(v=n.getValue({item:w}))!==null&&v!==void 0?v:u?[]:"",x=(0,h.useCallback)(f=>p({[_]:f}),[_,p]),R=(b=n?.elements)!==null&&b!==void 0?b:[],o=R.some(({value:f})=>f==="")||u?R:[{label:(0,s.__)("Select item"),value:""},...R];return(0,t.jsx)(r.SelectControl,{label:O,value:j,help:n.description,options:o,onChange:x,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:i,multiple:u})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/text.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=w;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/lock-unlock.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{ValidatedTextControl:m}=(0,s.unlock)(r.privateApis);function w({data:n,field:p,onChange:i,hideLabelFromVision:v}){const{id:b,label:_,placeholder:O,description:l}=p,u=p.getValue({item:n}),[j,x]=(0,h.useState)(void 0),R=(0,h.useCallback)(y=>i({[b]:y}),[b,i]);return(0,t.jsx)(m,{required:!!p.isValid?.required,onValidate:y=>{const o=p.isValid?.custom?.({...n,[b]:y},p);if(o){x({type:"invalid",message:o});return}x(void 0)},customValidity:j,label:_,placeholder:O,value:u??"",help:l,onChange:R,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:v})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/toggle-group.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=t;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({data:m,field:w,onChange:n,hideLabelFromVision:p}){const{id:i}=w,v=w.getValue({item:m}),b=(0,h.useCallback)(_=>n({[i]:_}),[i,n]);if(w.elements){const _=w.elements.find(O=>O.value===v);return(0,s.jsx)(r.__experimentalToggleGroupControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:w.label,help:_?.description||w.description,onChange:b,value:v,hideLabelFromVision:p,children:w.elements.map(O=>(0,s.jsx)(r.__experimentalToggleGroupControlOption,{label:O.label,value:O.value},O.value))})}return null}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/card/index.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=_,a.useCollapsibleCard=b;var h=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@10.30.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/index.js"),w=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataform-context/index.js")),n=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/data-form-layout.js"),p=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/is-combined-field.js"),i=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/normalize-form-fields.js"),v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function b(O=!0){const[l,u]=(0,s.useState)(O),j=(0,s.useCallback)(()=>{u(R=>!R)},[]),x=(0,s.useCallback)(({children:R,...y})=>(0,v.jsxs)(h.CardHeader,{...y,onClick:j,style:{cursor:"pointer",...y.style},children:[(0,v.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},children:R}),(0,v.jsx)(h.Button,{__next40pxDefaultSize:!0,variant:"tertiary",icon:l?t.chevronUp:t.chevronDown,"aria-expanded":l,"aria-label":l?"Collapse":"Expand"})]}),[j,l]);return{isOpen:l,CollapsibleCardHeader:x}}function _({data:O,field:l,onChange:u,hideLabelFromVision:j}){const{fields:x}=(0,s.useContext)(w.default),R=(0,i.normalizeLayout)({...l.layout,type:"card"}),y=(0,s.useMemo)(()=>({layout:i.DEFAULT_LAYOUT,fields:(0,p.isCombinedField)(l)?l.children:[]}),[l]),{isOpen:o,CollapsibleCardHeader:f}=b(R.isOpened);if((0,p.isCombinedField)(l)){const E=!!l.label&&R.withHeader;return(0,v.jsxs)(h.Card,{className:"dataforms-layouts-card__field",children:[E&&(0,v.jsx)(f,{className:"dataforms-layouts-card__field-label",children:l.label}),(o||!E)&&(0,v.jsx)(h.CardBody,{className:"dataforms-layouts-card__field-control",children:(0,v.jsx)(n.DataFormLayout,{data:O,form:y,onChange:u})})]})}const d=x.find(E=>E.id===l.id);if(!d||!d.Edit)return null;const c=(0,m.getFormFieldLayout)("regular")?.component;if(!c)return null;const g=!!d.label&&R.withHeader;return(0,v.jsxs)(h.Card,{className:"dataforms-layouts-card__field",children:[g&&(0,v.jsx)(f,{className:"dataforms-layouts-card__field-label",children:d.label}),(o||!g)&&(0,v.jsx)(h.CardBody,{className:"dataforms-layouts-card__field-control",children:(0,v.jsx)(c,{data:O,field:l,onChange:u,hideLabelFromVision:j||g})})]})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/data-form-layout.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.DataFormLayout=i;var h=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/index.js"),m=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataform-context/index.js")),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/is-combined-field.js"),n=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/normalize-form-fields.js")),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function i({data:v,form:b,onChange:_,children:O}){const{fields:l}=(0,s.useContext)(m.default);function u(x){const R=typeof x=="string"?x:x.id;return l.find(y=>y.id===R)}const j=(0,s.useMemo)(()=>(0,n.default)(b),[b]);return(0,p.jsx)(h.__experimentalVStack,{spacing:b.layout?.type==="panel"?2:4,children:j.map(x=>{const R=(0,t.getFormFieldLayout)(x.layout.type)?.component;if(!R)return null;const y=(0,w.isCombinedField)(x)?void 0:u(x);return y&&y.isVisible&&!y.isVisible(v)?null:O?O(R,x):(0,p.jsx)(R,{data:v,field:x,onChange:_},x.id)})})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/index.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.getFormFieldLayout=w;var h=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/regular/index.js")),s=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/panel/index.js")),t=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/card/index.js"));const m=[{type:"regular",component:h.default},{type:"panel",component:s.default},{type:"card",component:t.default}];function w(n){return m.find(p=>p.type===n)}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/is-combined-field.js":((F,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.isCombinedField=e;function e(r){return r.children!==void 0}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/panel/dropdown.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@10.30.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/data-form-layout.js"),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/is-combined-field.js"),n=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/normalize-form-fields.js"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function i({title:_,onClose:O}){return(0,p.jsx)(r.__experimentalVStack,{className:"dataforms-layouts-panel__dropdown-header",spacing:4,children:(0,p.jsxs)(r.__experimentalHStack,{alignment:"center",children:[_&&(0,p.jsx)(r.__experimentalHeading,{level:2,size:13,children:_}),(0,p.jsx)(r.__experimentalSpacer,{}),O&&(0,p.jsx)(r.Button,{label:(0,h.__)("Close"),icon:t.closeSmall,onClick:O,size:"small"})]})})}function v({fieldDefinition:_,popoverAnchor:O,labelPosition:l="side",data:u,onChange:j,field:x}){const R=(0,w.isCombinedField)(x)?x.label:_?.label,y=(0,s.useMemo)(()=>({layout:n.DEFAULT_LAYOUT,fields:(0,w.isCombinedField)(x)?x.children:[{id:x.id}]}),[x]),o=(0,s.useMemo)(()=>({anchor:O,placement:"left-start",offset:36,shift:!0}),[O]);return(0,p.jsx)(r.Dropdown,{contentClassName:"dataforms-layouts-panel__field-dropdown",popoverProps:o,focusOnMount:!0,toggleProps:{size:"compact",variant:"tertiary",tooltipPosition:"middle left"},renderToggle:({isOpen:f,onToggle:d})=>(0,p.jsx)(r.Button,{className:"dataforms-layouts-panel__field-control",size:"compact",variant:["none","top"].includes(l)?"link":"tertiary","aria-expanded":f,"aria-label":(0,h.sprintf)((0,h._x)("Edit %s","field"),R||""),onClick:d,disabled:_.readOnly===!0,accessibleWhenDisabled:!0,children:(0,p.jsx)(_.render,{item:u,field:_})}),renderContent:({onClose:f})=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{title:R,onClose:f}),(0,p.jsx)(m.DataFormLayout,{data:u,form:y,onChange:j,children:(d,c)=>{var g;return(0,p.jsx)(d,{data:u,field:c,onChange:j,hideLabelFromVision:((g=y?.fields)!==null&&g!==void 0?g:[]).length<2},c.id)}})]})})}var b=a.default=v}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/panel/index.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=b;var h=r(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),s=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),m=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataform-context/index.js")),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/is-combined-field.js"),n=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/normalize-form-fields.js"),p=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/panel/dropdown.js")),i=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/panel/modal.js")),v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function b({data:_,field:O,onChange:l}){const{fields:u}=(0,t.useContext)(m.default),j=u.find(g=>{if((0,w.isCombinedField)(O)){const E=O.children.filter(S=>typeof S=="string"||!(0,w.isCombinedField)(S));if(E.length===0)return!1;const A=typeof E[0]=="string"?E[0]:E[0].id;return g.id===A}return g.id===O.id}),[x,R]=(0,t.useState)(null);if(!j)return null;const y=(0,n.normalizeLayout)({...O.layout,type:"panel"}),o=y.labelPosition,f=(0,h.default)("dataforms-layouts-panel__field-label",`dataforms-layouts-panel__field-label--label-position-${o}`),d=(0,w.isCombinedField)(O)?O.label:j?.label,c=y.openAs==="modal"?(0,v.jsx)(i.default,{field:O,fieldDefinition:j,data:_,onChange:l,labelPosition:o}):(0,v.jsx)(p.default,{field:O,popoverAnchor:x,fieldDefinition:j,data:_,onChange:l,labelPosition:o});return o==="top"?(0,v.jsxs)(s.__experimentalVStack,{className:"dataforms-layouts-panel__field",spacing:0,children:[(0,v.jsx)("div",{className:f,style:{paddingBottom:0},children:d}),(0,v.jsx)("div",{className:"dataforms-layouts-panel__field-control",children:c})]}):o==="none"?(0,v.jsx)("div",{className:"dataforms-layouts-panel__field",children:c}):(0,v.jsxs)(s.__experimentalHStack,{ref:R,className:"dataforms-layouts-panel__field",children:[(0,v.jsx)("div",{className:f,children:d}),(0,v.jsx)("div",{className:"dataforms-layouts-panel__field-control",children:c})]})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/panel/modal.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/data-form-layout.js"),m=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/is-combined-field.js"),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/normalize-form-fields.js"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function p({data:b,form:_,fieldLabel:O,onChange:l,onClose:u}){const[j,x]=(0,s.useState)({}),R=()=>{l(j),u()},y=f=>{x(d=>({...d,...f}))},o={...b,...j};return(0,n.jsxs)(r.Modal,{className:"dataforms-layouts-panel__modal",onRequestClose:u,isFullScreen:!1,title:O,size:"medium",children:[(0,n.jsx)(t.DataFormLayout,{data:o,form:_,onChange:y,children:(f,d)=>{var c;return(0,n.jsx)(f,{data:o,field:d,onChange:y,hideLabelFromVision:((c=_?.fields)!==null&&c!==void 0?c:[]).length<2},d.id)}}),(0,n.jsxs)(r.__experimentalHStack,{className:"dataforms-layouts-panel__modal-footer",spacing:3,children:[(0,n.jsx)(r.__experimentalSpacer,{}),(0,n.jsx)(r.Button,{variant:"tertiary",onClick:u,__next40pxDefaultSize:!0,children:(0,h.__)("Cancel")}),(0,n.jsx)(r.Button,{variant:"primary",onClick:R,__next40pxDefaultSize:!0,children:(0,h.__)("Apply")})]})]})}function i({fieldDefinition:b,labelPosition:_,data:O,onChange:l,field:u}){const[j,x]=(0,s.useState)(!1),R=(0,m.isCombinedField)(u)?u.label:b?.label,y=(0,s.useMemo)(()=>({layout:w.DEFAULT_LAYOUT,fields:(0,m.isCombinedField)(u)?u.children:[{id:u.id}]}),[u]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Button,{className:"dataforms-layouts-modal__field-control",size:"compact",variant:["none","top"].includes(_)?"link":"tertiary","aria-expanded":j,"aria-label":(0,h.sprintf)((0,h._x)("Edit %s","field"),R||""),onClick:()=>x(!0),disabled:b.readOnly===!0,accessibleWhenDisabled:!0,children:(0,n.jsx)(b.render,{item:O,field:b})}),j&&(0,n.jsx)(p,{data:O,form:y,fieldLabel:R??"",onChange:l,onClose:()=>x(!1)})]})}var v=a.default=i}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/regular/index.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=b;var h=r(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),s=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),m=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataform-context/index.js")),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/data-form-layout.js"),n=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataforms-layouts/is-combined-field.js"),p=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/normalize-form-fields.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function v({title:_}){return(0,i.jsx)(t.__experimentalVStack,{className:"dataforms-layouts-regular__header",spacing:4,children:(0,i.jsxs)(t.__experimentalHStack,{alignment:"center",children:[(0,i.jsx)(t.__experimentalHeading,{level:2,size:13,children:_}),(0,i.jsx)(t.__experimentalSpacer,{})]})})}function b({data:_,field:O,onChange:l,hideLabelFromVision:u}){const{fields:j}=(0,s.useContext)(m.default),x=(0,s.useMemo)(()=>({layout:p.DEFAULT_LAYOUT,fields:(0,n.isCombinedField)(O)?O.children:[]}),[O]);if((0,n.isCombinedField)(O))return(0,i.jsxs)(i.Fragment,{children:[!u&&O.label&&(0,i.jsx)(v,{title:O.label}),(0,i.jsx)(w.DataFormLayout,{data:_,form:x,onChange:l})]});const y=(0,p.normalizeLayout)({...O.layout,type:"regular"}).labelPosition,o=j.find(f=>f.id===O.id);return!o||!o.Edit?null:y==="side"?(0,i.jsxs)(t.__experimentalHStack,{className:"dataforms-layouts-regular__field",children:[(0,i.jsx)("div",{className:(0,h.default)("dataforms-layouts-regular__field-label",`dataforms-layouts-regular__field-label--label-position-${y}`),children:o.label}),(0,i.jsx)("div",{className:"dataforms-layouts-regular__field-control",children:o.readOnly===!0?(0,i.jsx)(o.render,{item:_,field:o}):(0,i.jsx)(o.Edit,{data:_,field:o,onChange:l,hideLabelFromVision:!0},o.id)})]}):(0,i.jsx)("div",{className:"dataforms-layouts-regular__field",children:o.readOnly===!0?(0,i.jsxs)(i.Fragment,{children:[!u&&y!=="none"&&(0,i.jsx)("div",{className:"dataforms-layouts-regular__field-label",children:o.label}),(0,i.jsx)("div",{className:"dataforms-layouts-regular__field-control",children:(0,i.jsx)(o.render,{item:_,field:o})})]}):(0,i.jsx)(o.Edit,{data:_,field:o,onChange:l,hideLabelFromVision:y==="none"?!0:u})})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataviews-layouts/grid/index.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var h=r(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),s=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+compose@7.30.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+keycodes@4.30.0/node_modules/@wordpress/keycodes/build-module/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/lock-unlock.js"),i=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-item-actions/index.js")),v=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-selection-checkbox/index.js")),b=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),_=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-bulk-actions/index.js"),O=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataviews-layouts/utils/item-click-wrapper.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Badge:u}=(0,p.unlock)(s.privateApis);function j({view:y,selection:o,onChangeSelection:f,onClickItem:d,isItemClickable:c,renderItemLink:g,getItemId:E,item:A,actions:S,mediaField:P,titleField:k,descriptionField:N,regularFields:C,badgeFields:T,hasBulkActions:I,config:L,posinset:z}){const{showTitle:V=!0,showMedia:$=!0,showDescription:D=!0,infiniteScrollEnabled:U}=y,G=(0,_.useHasAPossibleBulkAction)(S,A),X=E(A),K=(0,m.useInstanceId)(j),ee=o.includes(X),Y=P?.render?(0,l.jsx)(P.render,{item:A,field:P,config:L}):null,J=V&&k?.render?(0,l.jsx)(k.render,{item:A,field:k}):null;let Z,W;c(A)&&d&&(J?(Z={"aria-labelledby":`dataviews-view-grid__title-field-${K}`},W={id:`dataviews-view-grid__title-field-${K}`}):Z={"aria-label":(0,t.__)("Navigate to item")});const{paginationInfo:B}=(0,n.useContext)(b.default);return(0,l.jsxs)(s.__experimentalVStack,{spacing:0,className:(0,h.default)("dataviews-view-grid__card",{"is-selected":G&&ee}),onClickCapture:H=>{if((0,w.isAppleOS)()?H.metaKey:H.ctrlKey){if(H.stopPropagation(),H.preventDefault(),!G)return;f(o.includes(X)?o.filter(M=>X!==M):[...o,X])}},role:U?"article":void 0,"aria-setsize":U?B.totalItems:void 0,"aria-posinset":z,children:[$&&Y&&(0,l.jsx)(O.ItemClickWrapper,{item:A,isItemClickable:c,onClickItem:d,renderItemLink:g,className:"dataviews-view-grid__media",...Z,children:Y}),I&&$&&Y&&(0,l.jsx)(v.default,{item:A,selection:o,onChangeSelection:f,getItemId:E,titleField:k,disabled:!G}),(0,l.jsxs)(s.__experimentalHStack,{justify:"space-between",className:"dataviews-view-grid__title-actions",children:[(0,l.jsx)(O.ItemClickWrapper,{item:A,isItemClickable:c,onClickItem:d,renderItemLink:g,className:"dataviews-view-grid__title-field dataviews-title-field",...W,children:J}),!!S?.length&&(0,l.jsx)(i.default,{item:A,actions:S,isCompact:!0})]}),(0,l.jsxs)(s.__experimentalVStack,{spacing:1,children:[D&&N?.render&&(0,l.jsx)(N.render,{item:A,field:N}),!!T?.length&&(0,l.jsx)(s.__experimentalHStack,{className:"dataviews-view-grid__badge-fields",spacing:2,wrap:!0,alignment:"top",justify:"flex-start",children:T.map(H=>(0,l.jsx)(u,{className:"dataviews-view-grid__field-value",children:(0,l.jsx)(H.render,{item:A,field:H})},H.id))}),!!C?.length&&(0,l.jsx)(s.__experimentalVStack,{className:"dataviews-view-grid__fields",spacing:1,children:C.map(H=>(0,l.jsx)(s.Flex,{className:"dataviews-view-grid__field",gap:1,justify:"flex-start",expanded:!0,style:{height:"auto"},direction:"row",children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Tooltip,{text:H.label,children:(0,l.jsx)(s.FlexItem,{className:"dataviews-view-grid__field-name",children:H.header})}),(0,l.jsx)(s.FlexItem,{className:"dataviews-view-grid__field-value",style:{maxHeight:"none"},children:(0,l.jsx)(H.render,{item:A,field:H})})]})},H.id))})]})]},X)}function x({actions:y,data:o,fields:f,getItemId:d,isLoading:c,onChangeSelection:g,onClickItem:E,isItemClickable:A,renderItemLink:S,selection:P,view:k,className:N,empty:C}){var T;const{resizeObserverRef:I}=(0,n.useContext)(b.default),L=f.find(W=>W.id===k?.titleField),z=f.find(W=>W.id===k?.mediaField),V=f.find(W=>W.id===k?.descriptionField),$=(T=k.fields)!==null&&T!==void 0?T:[],{regularFields:D,badgeFields:U}=$.reduce((W,B)=>{const H=f.find(te=>te.id===B);if(!H)return W;const M=k.layout?.badgeFields?.includes(B)?"badgeFields":"regularFields";return W[M].push(H),W},{regularFields:[],badgeFields:[]}),G=!!o?.length,X=(0,_.useSomeItemHasAPossibleBulkAction)(y,o),K=k.layout?.previewSize,ee="900px",Y=k.groupByField?f.find(W=>W.id===k.groupByField):null,J=Y?o.reduce((W,B)=>{const H=Y.getValue({item:B});return W.has(H)||W.set(H,[]),W.get(H)?.push(B),W},new Map):null,Z=k.infiniteScrollEnabled&&!J;return(0,l.jsxs)(l.Fragment,{children:[G&&Y&&J&&(0,l.jsx)(s.__experimentalVStack,{spacing:4,children:Array.from(J.entries()).map(([W,B])=>(0,l.jsxs)(s.__experimentalVStack,{spacing:2,children:[(0,l.jsx)("h3",{className:"dataviews-view-grid__group-header",children:(0,t.sprintf)((0,t.__)("%1$s: %2$s"),Y.label,W)}),(0,l.jsx)("div",{className:(0,h.default)("dataviews-view-grid",N),style:{gridTemplateColumns:K&&`repeat(auto-fill, minmax(${K}px, 1fr))`},"aria-busy":c,ref:I,children:B.map(H=>(0,l.jsx)(j,{view:k,selection:P,onChangeSelection:g,onClickItem:E,isItemClickable:A,renderItemLink:S,getItemId:d,item:H,actions:y,mediaField:z,titleField:L,descriptionField:V,regularFields:D,badgeFields:U,hasBulkActions:X,config:{sizes:ee}},d(H)))})]},W))}),G&&!J&&(0,l.jsx)("div",{className:(0,h.default)("dataviews-view-grid",N),style:{gridTemplateColumns:K&&`repeat(auto-fill, minmax(${K}px, 1fr))`},"aria-busy":c,ref:I,role:Z?"feed":void 0,children:o.map((W,B)=>(0,l.jsx)(j,{view:k,selection:P,onChangeSelection:g,onClickItem:E,isItemClickable:A,renderItemLink:S,getItemId:d,item:W,actions:y,mediaField:z,titleField:L,descriptionField:V,regularFields:D,badgeFields:U,hasBulkActions:X,config:{sizes:ee},posinset:Z?B+1:void 0},d(W)))}),!G&&(0,l.jsx)("div",{className:(0,h.default)({"dataviews-loading":c,"dataviews-no-results":!c}),children:(0,l.jsx)("p",{children:c?(0,l.jsx)(s.Spinner,{}):C})}),G&&c&&(0,l.jsx)("p",{className:"dataviews-loading-more",children:(0,l.jsx)(s.Spinner,{})})]})}var R=a.default=x}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataviews-layouts/grid/preview-size-picker.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=p;var h=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),m=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),w=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=[{value:120,breakpoint:1},{value:170,breakpoint:1},{value:230,breakpoint:1},{value:290,breakpoint:1112},{value:350,breakpoint:1636},{value:430,breakpoint:588}];function p(){var i,v;const b=(0,t.useContext)(m.default),_=b.view,O=n.filter(x=>b.containerWidth>=x.breakpoint),l=(i=_.layout?.previewSize)!==null&&i!==void 0?i:230,u=(v=O.map((x,R)=>({...x,index:R})).filter(x=>x.value<=l).sort((x,R)=>R.value-x.value)[0]?.index)!==null&&v!==void 0?v:0,j=O.map((x,R)=>({value:R}));return(0,w.jsx)(h.RangeControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,showTooltip:!1,label:(0,s.__)("Preview size"),value:u,min:0,max:O.length-1,withInputField:!1,onChange:(x=0)=>{b.onChangeView({..._,layout:{..._.layout,previewSize:O[x].value}})},step:1,marks:j})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataviews-layouts/index.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.VIEW_LAYOUTS=void 0;var h=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@10.30.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),t=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/index.js")),m=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataviews-layouts/grid/index.js")),w=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataviews-layouts/list/index.js")),n=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/constants.js"),p=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataviews-layouts/grid/preview-size-picker.js")),i=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/density-picker.js"));const v=a.VIEW_LAYOUTS=[{type:n.LAYOUT_TABLE,label:(0,h.__)("Table"),component:t.default,icon:s.blockTable,viewConfigOptions:i.default},{type:n.LAYOUT_GRID,label:(0,h.__)("Grid"),component:m.default,icon:s.category,viewConfigOptions:p.default},{type:n.LAYOUT_LIST,label:(0,h.__)("List"),component:w.default,icon:(0,h.isRTL)()?s.formatListBulletsRTL:s.formatListBullets}]}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataviews-layouts/list/index.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=o;var h=r(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),s=e("../../../node_modules/.pnpm/@wordpress+compose@7.30.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@10.30.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+data@10.30.0_react@18.3.1/node_modules/@wordpress/data/build-module/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/lock-unlock.js"),v=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-item-actions/index.js"),b=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Menu:O}=(0,i.unlock)(t.privateApis);function l(f){return`${f}-item-wrapper`}function u(f,d){return`${f}-primary-action-${d}`}function j(f){return`${f}-dropdown`}function x({idPrefix:f,primaryAction:d,item:c}){const g=(0,p.useRegistry)(),[E,A]=(0,m.useState)(!1),S=u(f,d.id),P=typeof d.label=="string"?d.label:d.label([c]);return"RenderModal"in d?(0,_.jsx)("div",{role:"gridcell",children:(0,_.jsx)(t.Composite.Item,{id:S,render:(0,_.jsx)(t.Button,{label:P,disabled:!!d.disabled,accessibleWhenDisabled:!0,icon:d.icon,isDestructive:d.isDestructive,size:"small",onClick:()=>A(!0)}),children:E&&(0,_.jsx)(v.ActionModal,{action:d,items:[c],closeModal:()=>A(!1)})})},d.id):(0,_.jsx)("div",{role:"gridcell",children:(0,_.jsx)(t.Composite.Item,{id:S,render:(0,_.jsx)(t.Button,{label:P,disabled:!!d.disabled,accessibleWhenDisabled:!0,icon:d.icon,isDestructive:d.isDestructive,size:"small",onClick:()=>{d.callback([c],{registry:g})}})})},d.id)}function R({view:f,actions:d,idPrefix:c,isSelected:g,item:E,titleField:A,mediaField:S,descriptionField:P,onSelect:k,otherFields:N,onDropdownTriggerKeyDown:C,posinset:T}){const{showTitle:I=!0,showMedia:L=!0,showDescription:z=!0,infiniteScrollEnabled:V}=f,$=(0,m.useRef)(null),D=`${c}-label`,U=`${c}-description`,G=(0,p.useRegistry)(),[X,K]=(0,m.useState)(!1),[ee,Y]=(0,m.useState)(null),J=({type:q})=>{K(q==="mouseenter")},{paginationInfo:Z}=(0,m.useContext)(b.default);(0,m.useEffect)(()=>{g&&$.current?.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})},[g]);const{primaryAction:W,eligibleActions:B}=(0,m.useMemo)(()=>{const q=d.filter(ne=>!ne.isEligible||ne.isEligible(E));return{primaryAction:q.filter(ne=>ne.isPrimary&&!!ne.icon)[0],eligibleActions:q}},[d,E]),H=W&&d.length===1,M=L&&S?.render?(0,_.jsx)("div",{className:"dataviews-view-list__media-wrapper",children:(0,_.jsx)(S.render,{item:E,field:S,config:{sizes:"52px"}})}):null,te=I&&A?.render?(0,_.jsx)(A.render,{item:E,field:A}):null,ie=B?.length>0&&(0,_.jsxs)(t.__experimentalHStack,{spacing:3,className:"dataviews-view-list__item-actions",children:[W&&(0,_.jsx)(x,{idPrefix:c,primaryAction:W,item:E}),!H&&(0,_.jsxs)("div",{role:"gridcell",children:[(0,_.jsxs)(O,{placement:"bottom-end",children:[(0,_.jsx)(O.TriggerButton,{render:(0,_.jsx)(t.Composite.Item,{id:j(c),render:(0,_.jsx)(t.Button,{size:"small",icon:n.moreVertical,label:(0,w.__)("Actions"),accessibleWhenDisabled:!0,disabled:!d.length,onKeyDown:C})})}),(0,_.jsx)(O.Popover,{children:(0,_.jsx)(v.ActionsMenuGroup,{actions:B,item:E,registry:G,setActiveModalAction:Y})})]}),!!ee&&(0,_.jsx)(v.ActionModal,{action:ee,items:[E],closeModal:()=>Y(null)})]})]});return(0,_.jsx)(t.Composite.Row,{ref:$,render:(0,_.jsx)("div",{"aria-posinset":T,"aria-setsize":V?Z.totalItems:void 0}),role:V?"article":"row",className:(0,h.default)({"is-selected":g,"is-hovered":X}),onMouseEnter:J,onMouseLeave:J,children:(0,_.jsxs)(t.__experimentalHStack,{className:"dataviews-view-list__item-wrapper",spacing:0,children:[(0,_.jsx)("div",{role:"gridcell",children:(0,_.jsx)(t.Composite.Item,{id:l(c),"aria-pressed":g,"aria-labelledby":D,"aria-describedby":U,className:"dataviews-view-list__item",onClick:()=>k(E)})}),(0,_.jsxs)(t.__experimentalHStack,{spacing:3,justify:"start",alignment:"flex-start",children:[M,(0,_.jsxs)(t.__experimentalVStack,{spacing:1,className:"dataviews-view-list__field-wrapper",children:[(0,_.jsxs)(t.__experimentalHStack,{spacing:0,children:[(0,_.jsx)("div",{className:"dataviews-title-field",id:D,children:te}),ie]}),z&&P?.render&&(0,_.jsx)("div",{className:"dataviews-view-list__field",children:(0,_.jsx)(P.render,{item:E,field:P})}),(0,_.jsx)("div",{className:"dataviews-view-list__fields",id:U,children:N.map(q=>(0,_.jsxs)("div",{className:"dataviews-view-list__field",children:[(0,_.jsx)(t.VisuallyHidden,{as:"span",className:"dataviews-view-list__field-label",children:q.label}),(0,_.jsx)("span",{className:"dataviews-view-list__field-value",children:(0,_.jsx)(q.render,{item:E,field:q})})]},q.id))})]})]})]})})}function y(f){return!!f}function o(f){var d;const{actions:c,data:g,fields:E,getItemId:A,isLoading:S,onChangeSelection:P,selection:k,view:N,className:C,empty:T}=f,I=(0,s.useInstanceId)(o,"view-list"),L=g?.findLast(M=>k.includes(A(M))),z=E.find(M=>M.id===N.titleField),V=E.find(M=>M.id===N.mediaField),$=E.find(M=>M.id===N.descriptionField),D=((d=N?.fields)!==null&&d!==void 0?d:[]).map(M=>E.find(te=>M===te.id)).filter(y),U=M=>P([A(M)]),G=(0,m.useCallback)(M=>`${I}-${A(M)}`,[I,A]),X=(0,m.useCallback)((M,te)=>te.startsWith(G(M)),[G]),[K,ee]=(0,m.useState)(void 0);(0,m.useEffect)(()=>{L&&ee(l(G(L)))},[L,G]);const Y=g.findIndex(M=>X(M,K??"")),J=(0,s.usePrevious)(Y),Z=Y!==-1,W=(0,m.useCallback)((M,te)=>{const ie=Math.min(g.length-1,Math.max(0,M));if(!g[ie])return;const q=G(g[ie]),de=te(q);ee(de),document.getElementById(de)?.focus()},[g,G]);(0,m.useEffect)(()=>{!Z&&(J!==void 0&&J!==-1)&&W(J,l)},[Z,W,J]);const B=(0,m.useCallback)(M=>{M.key==="ArrowDown"&&(M.preventDefault(),W(Y+1,j)),M.key==="ArrowUp"&&(M.preventDefault(),W(Y-1,j))},[W,Y]),H=g?.length;return H?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(t.Composite,{id:I,render:(0,_.jsx)("div",{}),className:(0,h.default)("dataviews-view-list",C),role:N.infiniteScrollEnabled?"feed":"grid",activeId:K,setActiveId:ee,children:g.map((M,te)=>{const ie=G(M);return(0,_.jsx)(R,{view:N,idPrefix:ie,actions:c,item:M,isSelected:M===L,onSelect:U,mediaField:V,titleField:z,descriptionField:$,otherFields:D,onDropdownTriggerKeyDown:B,posinset:N.infiniteScrollEnabled?te+1:void 0},ie)})}),H&&S&&(0,_.jsx)("p",{className:"dataviews-loading-more",children:(0,_.jsx)(t.Spinner,{})})]}):(0,_.jsx)("div",{className:(0,h.default)({"dataviews-loading":S,"dataviews-no-results":!H&&!S}),children:!H&&(0,_.jsx)("p",{children:S?(0,_.jsx)(t.Spinner,{}):T})})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/column-header-menu.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+icons@10.30.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/lock-unlock.js"),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/constants.js"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Menu:p}=(0,m.unlock)(s.privateApis);function i({children:O}){return t.Children.toArray(O).filter(Boolean).map((l,u)=>(0,n.jsxs)(t.Fragment,{children:[u>0&&(0,n.jsx)(p.Separator,{}),l]},u))}const b=(0,t.forwardRef)(function({fieldId:l,view:u,fields:j,onChangeView:x,onHide:R,setOpenedFilter:y,canMove:o=!0},f){var d;const c=(d=u.fields)!==null&&d!==void 0?d:[],g=c?.indexOf(l),E=u.sort?.field===l;let A=!1,S=!1,P=!1,k=[];const N=j.find(T=>T.id===l);if(!N)return null;A=N.enableHiding!==!1,S=N.enableSorting!==!1;const C=N.header;return k=!!N.filterBy&&N.filterBy?.operators||[],P=!u.filters?.some(T=>l===T.field)&&!!(N.elements?.length||N.Edit)&&N.filterBy!==!1&&!N.filterBy?.isPrimary,!S&&!o&&!A&&!P?C:(0,n.jsxs)(p,{children:[(0,n.jsxs)(p.TriggerButton,{render:(0,n.jsx)(s.Button,{size:"compact",className:"dataviews-view-table-header-button",ref:f,variant:"tertiary"}),children:[C,u.sort&&E&&(0,n.jsx)("span",{"aria-hidden":"true",children:w.sortArrows[u.sort.direction]})]}),(0,n.jsx)(p.Popover,{style:{minWidth:"240px"},children:(0,n.jsxs)(i,{children:[S&&(0,n.jsx)(p.Group,{children:w.SORTING_DIRECTIONS.map(T=>{const I=u.sort&&E&&u.sort.direction===T,L=`${l}-${T}`;return(0,n.jsx)(p.RadioItem,{name:"view-table-sorting",value:L,checked:I,onChange:()=>{x({...u,sort:{field:l,direction:T},showLevels:!1})},children:(0,n.jsx)(p.ItemLabel,{children:w.sortLabels[T]})},L)})}),P&&(0,n.jsx)(p.Group,{children:(0,n.jsx)(p.Item,{prefix:(0,n.jsx)(s.Icon,{icon:h.funnel}),onClick:()=>{y(l),x({...u,page:1,filters:[...u.filters||[],{field:l,value:void 0,operator:k[0]}]})},children:(0,n.jsx)(p.ItemLabel,{children:(0,r.__)("Add filter")})})}),(o||A)&&N&&(0,n.jsxs)(p.Group,{children:[o&&(0,n.jsx)(p.Item,{prefix:(0,n.jsx)(s.Icon,{icon:h.arrowLeft}),disabled:g<1,onClick:()=>{var T;x({...u,fields:[...(T=c.slice(0,g-1))!==null&&T!==void 0?T:[],l,c[g-1],...c.slice(g+1)]})},children:(0,n.jsx)(p.ItemLabel,{children:(0,r.__)("Move left")})}),o&&(0,n.jsx)(p.Item,{prefix:(0,n.jsx)(s.Icon,{icon:h.arrowRight}),disabled:g>=c.length-1,onClick:()=>{var T;x({...u,fields:[...(T=c.slice(0,g))!==null&&T!==void 0?T:[],c[g+1],l,...c.slice(g+2)]})},children:(0,n.jsx)(p.ItemLabel,{children:(0,r.__)("Move right")})}),A&&N&&(0,n.jsx)(p.Item,{prefix:(0,n.jsx)(s.Icon,{icon:h.unseen}),onClick:()=>{R(N),x({...u,fields:c.filter(T=>T!==l)})},children:(0,n.jsx)(p.ItemLabel,{children:(0,r.__)("Hide column")})})]})]})})]})});var _=a.default=b}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/column-primary.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataviews-layouts/utils/item-click-wrapper.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function m({item:n,level:p,titleField:i,mediaField:v,descriptionField:b,onClickItem:_,renderItemLink:O,isItemClickable:l}){return(0,t.jsxs)(r.__experimentalHStack,{spacing:3,justify:"flex-start",children:[v&&(0,t.jsx)(h.ItemClickWrapper,{item:n,isItemClickable:l,onClickItem:_,renderItemLink:O,className:"dataviews-view-table__cell-content-wrapper dataviews-column-primary__media","aria-label":i?(0,s.sprintf)((0,s.__)("Click item: %s"),i.getValue?.({item:n})):void 0,children:(0,t.jsx)(v.render,{item:n,field:v,config:{sizes:"32px"}})}),(0,t.jsxs)(r.__experimentalVStack,{spacing:0,alignment:"flex-start",className:"dataviews-view-table__primary-column-content",children:[i&&(0,t.jsxs)(h.ItemClickWrapper,{item:n,isItemClickable:l,onClickItem:_,renderItemLink:O,className:"dataviews-view-table__cell-content-wrapper dataviews-title-field",children:[p!==void 0&&p>0&&(0,t.jsxs)("span",{className:"dataviews-view-table__level",children:["\u2014".repeat(p),"\xA0"]}),(0,t.jsx)(i.render,{item:n,field:i})]}),b&&(0,t.jsx)(b.render,{item:n,field:b})]})]})}var w=a.default=m}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/density-picker.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=n;var h=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),m=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),w=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function n(){const p=(0,t.useContext)(m.default),i=p.view;return(0,w.jsxs)(h.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,size:"__unstable-large",label:(0,s.__)("Density"),value:i.layout?.density||"balanced",onChange:v=>{p.onChangeView({...i,layout:{...i.layout,density:v}})},isBlock:!0,children:[(0,w.jsx)(h.__experimentalToggleGroupControlOption,{value:"comfortable",label:(0,s._x)("Comfortable","Density option for DataView layout")},"comfortable"),(0,w.jsx)(h.__experimentalToggleGroupControlOption,{value:"balanced",label:(0,s._x)("Balanced","Density option for DataView layout")},"balanced"),(0,w.jsx)(h.__experimentalToggleGroupControlOption,{value:"compact",label:(0,s._x)("Compact","Density option for DataView layout")},"compact")]})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/index.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var h=r(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),s=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+keycodes@4.30.0/node_modules/@wordpress/keycodes/build-module/index.js"),n=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),p=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-selection-checkbox/index.js")),i=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-item-actions/index.js")),v=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/constants.js"),b=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews-bulk-actions/index.js"),_=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/column-header-menu.js")),O=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/column-primary.js")),l=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/use-is-horizontal-scroll-end.js"),u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function j({item:o,fields:f,column:d,align:c}){const g=f.find(A=>A.id===d);if(!g)return null;const E=(0,h.default)("dataviews-view-table__cell-content-wrapper",{"dataviews-view-table__cell-align-end":c==="end","dataviews-view-table__cell-align-center":c==="center"});return(0,u.jsx)("div",{className:E,children:(0,u.jsx)(g.render,{item:o,field:g})})}function x({hasBulkActions:o,item:f,level:d,actions:c,fields:g,id:E,view:A,titleField:S,mediaField:P,descriptionField:k,selection:N,getItemId:C,isItemClickable:T,onClickItem:I,renderItemLink:L,onChangeSelection:z,isActionsColumnSticky:V,posinset:$}){var D;const{paginationInfo:U}=(0,m.useContext)(n.default),G=(0,b.useHasAPossibleBulkAction)(c,f),X=G&&N.includes(E),[K,ee]=(0,m.useState)(!1),{showTitle:Y=!0,showMedia:J=!0,showDescription:Z=!0,infiniteScrollEnabled:W}=A,B=()=>{ee(!0)},H=()=>{ee(!1)},M=(0,m.useRef)(!1),te=(D=A.fields)!==null&&D!==void 0?D:[],ie=S&&Y||P&&J||k&&Z;return(0,u.jsxs)("tr",{className:(0,h.default)("dataviews-view-table__row",{"is-selected":G&&X,"is-hovered":K,"has-bulk-actions":G}),onMouseEnter:B,onMouseLeave:H,onTouchStart:()=>{M.current=!0},"aria-setsize":W?U.totalItems:void 0,"aria-posinset":$,role:W?"article":void 0,onClick:q=>{G&&!M.current&&document.getSelection()?.type!=="Range"&&(((0,w.isAppleOS)()?q.metaKey:q.ctrlKey)?z(N.includes(E)?N.filter(de=>E!==de):[...N,E]):z(N.includes(E)?N.filter(de=>E!==de):[E]))},children:[o&&(0,u.jsx)("td",{className:"dataviews-view-table__checkbox-column",children:(0,u.jsx)("div",{className:"dataviews-view-table__cell-content-wrapper",children:(0,u.jsx)(p.default,{item:f,selection:N,onChangeSelection:z,getItemId:C,titleField:S,disabled:!G})})}),ie&&(0,u.jsx)("td",{children:(0,u.jsx)(O.default,{item:f,level:d,titleField:Y?S:void 0,mediaField:J?P:void 0,descriptionField:Z?k:void 0,isItemClickable:T,onClickItem:I,renderItemLink:L})}),te.map(q=>{var de;const{width:ne,maxWidth:fe,minWidth:ue,align:ce}=(de=A.layout?.styles?.[q])!==null&&de!==void 0?de:{};return(0,u.jsx)("td",{style:{width:ne,maxWidth:fe,minWidth:ue},children:(0,u.jsx)(j,{fields:g,item:f,column:q,align:ce})},q)}),!!c?.length&&(0,u.jsx)("td",{className:(0,h.default)("dataviews-view-table__actions-column",{"dataviews-view-table__actions-column--sticky":!0,"dataviews-view-table__actions-column--stuck":V}),onClick:q=>q.stopPropagation(),children:(0,u.jsx)(i.default,{item:f,actions:c})})]})}function R({actions:o,data:f,fields:d,getItemId:c,getItemLevel:g,isLoading:E=!1,onChangeView:A,onChangeSelection:S,selection:P,setOpenedFilter:k,onClickItem:N,isItemClickable:C,renderItemLink:T,view:I,className:L,empty:z}){var V;const{containerRef:$}=(0,m.useContext)(n.default),D=(0,m.useRef)(new Map),U=(0,m.useRef)(),[G,X]=(0,m.useState)(),K=(0,b.useSomeItemHasAPossibleBulkAction)(o,f);(0,m.useEffect)(()=>{U.current&&(U.current.focus(),U.current=void 0)});const ee=(0,m.useId)(),Y=(0,l.useIsHorizontalScrollEnd)({scrollContainerRef:$,enabled:!!o?.length});if(G){U.current=G,X(void 0);return}const J=Q=>{const ae=D.current.get(Q.id),se=ae?D.current.get(ae.fallback):void 0;X(se?.node)},Z=!!f?.length,W=d.find(Q=>Q.id===I.titleField),B=d.find(Q=>Q.id===I.mediaField),H=d.find(Q=>Q.id===I.descriptionField),M=I.groupByField?d.find(Q=>Q.id===I.groupByField):null,te=M?f.reduce((Q,ae)=>{const se=M.getValue({item:ae});return Q.has(se)||Q.set(se,[]),Q.get(se)?.push(ae),Q},new Map):null,{showTitle:ie=!0,showMedia:q=!0,showDescription:de=!0}=I,ne=W&&ie||B&&q||H&&de,fe=(V=I.fields)!==null&&V!==void 0?V:[],ue=(Q,ae)=>se=>{se?D.current.set(Q,{node:se,fallback:fe[ae>0?ae-1:1]}):D.current.delete(Q)},ce=I.infiniteScrollEnabled&&!te;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("table",{className:(0,h.default)("dataviews-view-table",L,{[`has-${I.layout?.density}-density`]:I.layout?.density&&["compact","comfortable"].includes(I.layout.density)}),"aria-busy":E,"aria-describedby":ee,role:ce?"feed":void 0,children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{className:"dataviews-view-table__row",children:[K&&(0,u.jsx)("th",{className:"dataviews-view-table__checkbox-column",scope:"col",children:(0,u.jsx)(b.BulkSelectionCheckbox,{selection:P,onChangeSelection:S,data:f,actions:o,getItemId:c})}),ne&&(0,u.jsx)("th",{scope:"col",children:W&&(0,u.jsx)(_.default,{ref:ue(W.id,0),fieldId:W.id,view:I,fields:d,onChangeView:A,onHide:J,setOpenedFilter:k,canMove:!1})}),fe.map((Q,ae)=>{var se,re;const{width:oe,maxWidth:le,minWidth:pe,align:me}=(se=I.layout?.styles?.[Q])!==null&&se!==void 0?se:{};return(0,u.jsx)("th",{style:{width:oe,maxWidth:le,minWidth:pe,textAlign:me},"aria-sort":I.sort?.direction&&I.sort?.field===Q?v.sortValues[I.sort.direction]:void 0,scope:"col",children:(0,u.jsx)(_.default,{ref:ue(Q,ae),fieldId:Q,view:I,fields:d,onChangeView:A,onHide:J,setOpenedFilter:k,canMove:(re=I.layout?.enableMoving)!==null&&re!==void 0?re:!0})},Q)}),!!o?.length&&(0,u.jsx)("th",{className:(0,h.default)("dataviews-view-table__actions-column",{"dataviews-view-table__actions-column--sticky":!0,"dataviews-view-table__actions-column--stuck":!Y}),children:(0,u.jsx)("span",{className:"dataviews-view-table-header",children:(0,s.__)("Actions")})})]})}),Z&&M&&te?Array.from(te.entries()).map(([Q,ae])=>(0,u.jsxs)("tbody",{children:[(0,u.jsx)("tr",{className:"dataviews-view-table__group-header-row",children:(0,u.jsx)("td",{colSpan:fe.length+(ne?1:0)+(K?1:0)+(o?.length?1:0),className:"dataviews-view-table__group-header-cell",children:(0,s.sprintf)((0,s.__)("%1$s: %2$s"),M.label,Q)})}),ae.map((se,re)=>(0,u.jsx)(x,{item:se,level:I.showLevels&&typeof g=="function"?g(se):void 0,hasBulkActions:K,actions:o,fields:d,id:c(se)||re.toString(),view:I,titleField:W,mediaField:B,descriptionField:H,selection:P,getItemId:c,onChangeSelection:S,onClickItem:N,renderItemLink:T,isItemClickable:C,isActionsColumnSticky:!Y},c(se)))]},`group-${Q}`)):(0,u.jsx)("tbody",{children:Z&&f.map((Q,ae)=>(0,u.jsx)(x,{item:Q,level:I.showLevels&&typeof g=="function"?g(Q):void 0,hasBulkActions:K,actions:o,fields:d,id:c(Q)||ae.toString(),view:I,titleField:W,mediaField:B,descriptionField:H,selection:P,getItemId:c,onChangeSelection:S,onClickItem:N,renderItemLink:T,isItemClickable:C,isActionsColumnSticky:!Y,posinset:ce?ae+1:void 0},c(Q)))})]}),(0,u.jsxs)("div",{className:(0,h.default)({"dataviews-loading":E,"dataviews-no-results":!Z&&!E}),id:ee,children:[!Z&&(0,u.jsx)("p",{children:E?(0,u.jsx)(t.Spinner,{}):z}),Z&&E&&(0,u.jsx)("p",{className:"dataviews-loading-more",children:(0,u.jsx)(t.Spinner,{})})]})]})}var y=a.default=R}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/use-is-horizontal-scroll-end.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.useIsHorizontalScrollEnd=m;var r=e("../../../node_modules/.pnpm/@wordpress+compose@7.30.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+element@6.30.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js");const t=w=>(0,s.isRTL)()?Math.abs(w.scrollLeft)<=1:w.scrollLeft+w.clientWidth>=w.scrollWidth-1;function m({scrollContainerRef:w,enabled:n=!1}){const[p,i]=(0,h.useState)(!1),v=(0,r.useDebounce)((0,h.useCallback)(()=>{const b=w.current;b&&i(t(b))},[w,i]),200);return(0,h.useEffect)(()=>typeof window>"u"||!n||!w.current?()=>{}:(v(),w.current.addEventListener("scroll",v),window.addEventListener("resize",v),()=>{w.current?.removeEventListener("scroll",v),window.removeEventListener("resize",v)}),[w,n]),p}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataviews-layouts/utils/item-click-wrapper.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ItemClickWrapper=s;var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function h({item:t,isItemClickable:m,onClickItem:w,className:n}){return!m(t)||!w?{className:n}:{className:n?`${n} ${n}--clickable`:void 0,role:"button",tabIndex:0,onClick:p=>{p.stopPropagation(),w(t)},onKeyDown:p=>{(p.key==="Enter"||p.key===""||p.key===" ")&&(p.stopPropagation(),w(t))}}}function s({item:t,isItemClickable:m,onClickItem:w,renderItemLink:n,className:p,children:i,...v}){if(!m(t))return i;if(n)return n({item:t,className:`${p} ${p}--clickable`,...v,children:i});const b=h({item:t,isItemClickable:m,onClickItem:w,className:p});return(0,r.jsx)("div",{...b,...v,children:i})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/field-types/array.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/constants.js");function s(n,p,i){const v=Array.isArray(n)?n:[],b=Array.isArray(p)?p:[];if(v.length!==b.length)return i==="asc"?v.length-b.length:b.length-v.length;const _=v.join(","),O=b.join(",");return i==="asc"?_.localeCompare(O):O.localeCompare(_)}function t({item:n,field:p}){return(p.getValue({item:n})||[]).join(", ")}const m={sort:s,isValid:{custom:(n,p)=>{const i=p.getValue({item:n});if(![void 0,"",null].includes(i)&&!Array.isArray(i))return(0,r.__)("Value must be an array.");if(!i.every(v=>typeof v=="string"))return(0,r.__)("Every value must be a string.");if(p?.elements){const v=p.elements.map(b=>b.value);if(!i.every(b=>v.includes(b)))return(0,r.__)("Value must be one of the elements.")}return null}},Edit:"array",render:t,enableSorting:!0,filterBy:{defaultOperators:[h.OPERATOR_IS_ANY,h.OPERATOR_IS_NONE],validOperators:[h.OPERATOR_IS_ANY,h.OPERATOR_IS_NONE,h.OPERATOR_IS_ALL,h.OPERATOR_IS_NOT_ALL]}};var w=a.default=m}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/field-types/boolean.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/utils.js"),s=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/constants.js");function t(w,n,p){const i=!!w;return i===!!n?0:p==="asc"?i?1:-1:i?-1:1}var m=a.default={sort:t,isValid:{custom:(w,n)=>{const p=n.getValue({item:w});return![void 0,"",null].includes(p)&&![!0,!1].includes(p)?(0,r.__)("Value must be true, false, or undefined"):null}},Edit:"boolean",render:({item:w,field:n})=>n.elements?(0,h.renderFromElements)({item:w,field:n}):n.getValue({item:w})===!0?(0,r.__)("True"):n.getValue({item:w})===!1?(0,r.__)("False"):null,enableSorting:!0,filterBy:{defaultOperators:[s.OPERATOR_IS,s.OPERATOR_IS_NOT],validOperators:[s.OPERATOR_IS,s.OPERATOR_IS_NOT]}}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/field-types/date.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=e("../../../node_modules/.pnpm/@wordpress+date@5.30.0/node_modules/@wordpress/date/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/utils.js"),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/constants.js");const m=p=>(0,r.dateI18n)((0,r.getSettings)().formats.date,(0,r.getDate)(p));function w(p,i,v){const b=new Date(p).getTime(),_=new Date(i).getTime();return v==="asc"?b-_:_-b}var n=a.default={sort:w,Edit:"date",isValid:{custom:(p,i)=>{const v=i.getValue({item:p});return i?.elements&&!i.elements.map(_=>_.value).includes(v)?(0,h.__)("Value must be one of the elements."):null}},render:({item:p,field:i})=>{if(i.elements)return(0,s.renderFromElements)({item:p,field:i});const v=i.getValue({item:p});return v?m(v):""},enableSorting:!0,filterBy:{defaultOperators:[t.OPERATOR_ON,t.OPERATOR_NOT_ON,t.OPERATOR_BEFORE,t.OPERATOR_AFTER,t.OPERATOR_BEFORE_INC,t.OPERATOR_AFTER_INC,t.OPERATOR_IN_THE_PAST,t.OPERATOR_OVER,t.OPERATOR_BETWEEN],validOperators:[t.OPERATOR_ON,t.OPERATOR_NOT_ON,t.OPERATOR_BEFORE,t.OPERATOR_AFTER,t.OPERATOR_BEFORE_INC,t.OPERATOR_AFTER_INC,t.OPERATOR_IN_THE_PAST,t.OPERATOR_OVER,t.OPERATOR_BETWEEN]}}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/field-types/datetime.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/utils.js"),s=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/constants.js");function t(w,n,p){const i=new Date(w).getTime(),v=new Date(n).getTime();return p==="asc"?i-v:v-i}var m=a.default={sort:t,isValid:{custom:(w,n)=>{const p=n.getValue({item:w});return n?.elements&&!n.elements.map(v=>v.value).includes(p)?(0,r.__)("Value must be one of the elements."):null}},Edit:"datetime",render:({item:w,field:n})=>n.elements?(0,h.renderFromElements)({item:w,field:n}):n.getValue({item:w}),enableSorting:!0,filterBy:{defaultOperators:[s.OPERATOR_ON,s.OPERATOR_NOT_ON,s.OPERATOR_BEFORE,s.OPERATOR_AFTER,s.OPERATOR_BEFORE_INC,s.OPERATOR_AFTER_INC,s.OPERATOR_IN_THE_PAST,s.OPERATOR_OVER],validOperators:[s.OPERATOR_ON,s.OPERATOR_NOT_ON,s.OPERATOR_BEFORE,s.OPERATOR_AFTER,s.OPERATOR_BEFORE_INC,s.OPERATOR_AFTER_INC,s.OPERATOR_IN_THE_PAST,s.OPERATOR_OVER]}}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/field-types/email.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/utils.js"),s=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/constants.js");function t(n,p,i){return i==="asc"?n.localeCompare(p):p.localeCompare(n)}const m=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var w=a.default={sort:t,isValid:{custom:(n,p)=>{const i=p.getValue({item:n});return![void 0,"",null].includes(i)&&!m.test(i)?(0,r.__)("Value must be a valid email address."):p.elements&&!p.elements.map(b=>b.value).includes(i)?(0,r.__)("Value must be one of the elements."):null}},Edit:"email",render:({item:n,field:p})=>p.elements?(0,h.renderFromElements)({item:n,field:p}):p.getValue({item:n}),enableSorting:!0,filterBy:{defaultOperators:[s.OPERATOR_IS_ANY,s.OPERATOR_IS_NONE],validOperators:[s.OPERATOR_IS,s.OPERATOR_IS_NOT,s.OPERATOR_CONTAINS,s.OPERATOR_NOT_CONTAINS,s.OPERATOR_STARTS_WITH,s.OPERATOR_IS_ANY,s.OPERATOR_IS_NONE,s.OPERATOR_IS_ALL,s.OPERATOR_IS_NOT_ALL]}}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/field-types/index.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=O;var h=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),s=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/field-types/email.js")),t=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/field-types/integer.js")),m=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/field-types/text.js")),w=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/field-types/datetime.js")),n=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/field-types/date.js")),p=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/field-types/boolean.js")),i=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/field-types/media.js")),v=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/field-types/array.js")),b=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/utils.js"),_=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/constants.js");function O(l){return l==="email"?s.default:l==="integer"?t.default:l==="text"?m.default:l==="datetime"?w.default:l==="date"?n.default:l==="boolean"?p.default:l==="media"?i.default:l==="array"?v.default:{sort:(u,j,x)=>typeof u=="number"&&typeof j=="number"?x==="asc"?u-j:j-u:x==="asc"?u.localeCompare(j):j.localeCompare(u),isValid:{custom:(u,j)=>{if(j?.elements){const x=j.getValue({item:u});if(!(j?.elements?.map(y=>y.value)).includes(x))return(0,h.__)("Value must be one of the elements.")}return null}},Edit:null,render:({item:u,field:j})=>j.elements?(0,b.renderFromElements)({item:u,field:j}):j.getValue({item:u}),enableSorting:!0,filterBy:{defaultOperators:[_.OPERATOR_IS,_.OPERATOR_IS_NOT],validOperators:_.ALL_OPERATORS}}}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/field-types/integer.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/utils.js"),s=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/constants.js");function t(w,n,p){return p==="asc"?w-n:n-w}var m=a.default={sort:t,isValid:{custom:(w,n)=>{const p=n.getValue({item:w});return![void 0,"",null].includes(p)&&!Number.isInteger(p)?(0,r.__)("Value must be an integer."):n?.elements&&!n.elements.map(v=>v.value).includes(Number(p))?(0,r.__)("Value must be one of the elements."):null}},Edit:"integer",render:({item:w,field:n})=>n.elements?(0,h.renderFromElements)({item:w,field:n}):n.getValue({item:w}),enableSorting:!0,filterBy:{defaultOperators:[s.OPERATOR_IS,s.OPERATOR_IS_NOT,s.OPERATOR_LESS_THAN,s.OPERATOR_GREATER_THAN,s.OPERATOR_LESS_THAN_OR_EQUAL,s.OPERATOR_GREATER_THAN_OR_EQUAL,s.OPERATOR_BETWEEN],validOperators:[s.OPERATOR_IS,s.OPERATOR_IS_NOT,s.OPERATOR_LESS_THAN,s.OPERATOR_GREATER_THAN,s.OPERATOR_LESS_THAN_OR_EQUAL,s.OPERATOR_GREATER_THAN_OR_EQUAL,s.OPERATOR_BETWEEN,s.OPERATOR_IS_ANY,s.OPERATOR_IS_NONE,s.OPERATOR_IS_ALL,s.OPERATOR_IS_NOT_ALL]}}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/field-types/media.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js");function h(){return 0}var s=a.default={sort:h,isValid:{custom:(t,m)=>{const w=m.getValue({item:t});return m?.elements&&!m.elements.map(p=>p.value).includes(w)?(0,r.__)("Value must be one of the elements."):null}},Edit:null,render:()=>null,enableSorting:!1,filterBy:!1}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/field-types/text.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=e("../../../node_modules/.pnpm/@wordpress+i18n@6.3.0/node_modules/@wordpress/i18n/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/utils.js"),s=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/constants.js");function t(w,n,p){return p==="asc"?w.localeCompare(n):n.localeCompare(w)}var m=a.default={sort:t,isValid:{custom:(w,n)=>{const p=n.getValue({item:w});return n?.elements&&!n.elements.map(v=>v.value).includes(p)?(0,r.__)("Value must be one of the elements."):null}},Edit:"text",render:({item:w,field:n})=>n.elements?(0,h.renderFromElements)({item:w,field:n}):n.getValue({item:w}),enableSorting:!0,filterBy:{defaultOperators:[s.OPERATOR_IS_ANY,s.OPERATOR_IS_NONE],validOperators:[s.OPERATOR_IS,s.OPERATOR_IS_NOT,s.OPERATOR_CONTAINS,s.OPERATOR_NOT_CONTAINS,s.OPERATOR_STARTS_WITH,s.OPERATOR_IS_ANY,s.OPERATOR_IS_NONE,s.OPERATOR_IS_ALL,s.OPERATOR_IS_NOT_ALL]}}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/filter-and-sort-data-view.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.filterSortAndPaginate=v;var h=r(e("../../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js")),s=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/index.cjs"),t=e("../../../node_modules/.pnpm/@wordpress+date@5.30.0/node_modules/@wordpress/date/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/constants.js"),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/normalize-fields.js");function n(b=""){return(0,h.default)(b.trim().toLowerCase())}const p=[];function i(b,_){switch(_){case"days":return(0,s.subDays)(new Date,b);case"weeks":return(0,s.subWeeks)(new Date,b);case"months":return(0,s.subMonths)(new Date,b);case"years":return(0,s.subYears)(new Date,b);default:return new Date}}function v(b,_,O){if(!b)return{data:p,paginationInfo:{totalItems:0,totalPages:0}};const l=(0,w.normalizeFields)(O);let u=[...b];if(_.search){const o=n(_.search);u=u.filter(f=>l.filter(d=>d.enableGlobalSearch).some(d=>{const c=d.getValue({item:f});return(Array.isArray(c)?c:[c]).some(E=>n(String(E)).includes(o))}))}_.filters&&_.filters?.length>0&&_.filters.forEach(o=>{const f=l.find(d=>d.id===o.field);if(f){if(o.operator===m.OPERATOR_IS_ANY&&o?.value?.length>0)u=u.filter(d=>{const c=f.getValue({item:d});return Array.isArray(c)?o.value.some(g=>c.includes(g)):typeof c=="string"?o.value.includes(c):!1});else if(o.operator===m.OPERATOR_IS_NONE&&o?.value?.length>0)u=u.filter(d=>{const c=f.getValue({item:d});return Array.isArray(c)?!o.value.some(g=>c.includes(g)):typeof c=="string"?!o.value.includes(c):!1});else if(o.operator===m.OPERATOR_IS_ALL&&o?.value?.length>0)u=u.filter(d=>o.value.every(c=>f.getValue({item:d})?.includes(c)));else if(o.operator===m.OPERATOR_IS_NOT_ALL&&o?.value?.length>0)u=u.filter(d=>o.value.every(c=>!f.getValue({item:d})?.includes(c)));else if(o.operator===m.OPERATOR_IS)u=u.filter(d=>o.value===f.getValue({item:d})||o.value===void 0);else if(o.operator===m.OPERATOR_IS_NOT)u=u.filter(d=>o.value!==f.getValue({item:d}));else if(o.operator===m.OPERATOR_ON&&o.value!==void 0){const d=(0,t.getDate)(o.value);u=u.filter(c=>{const g=(0,t.getDate)(f.getValue({item:c}));return d.getTime()===g.getTime()})}else if(o.operator===m.OPERATOR_NOT_ON&&o.value!==void 0){const d=(0,t.getDate)(o.value);u=u.filter(c=>{const g=(0,t.getDate)(f.getValue({item:c}));return d.getTime()!==g.getTime()})}else if(o.operator===m.OPERATOR_LESS_THAN&&o.value!==void 0)u=u.filter(d=>f.getValue({item:d})<o.value);else if(o.operator===m.OPERATOR_GREATER_THAN&&o.value!==void 0)u=u.filter(d=>f.getValue({item:d})>o.value);else if(o.operator===m.OPERATOR_LESS_THAN_OR_EQUAL&&o.value!==void 0)u=u.filter(d=>f.getValue({item:d})<=o.value);else if(o.operator===m.OPERATOR_GREATER_THAN_OR_EQUAL&&o.value!==void 0)u=u.filter(d=>f.getValue({item:d})>=o.value);else if(o.operator===m.OPERATOR_CONTAINS&&o?.value!==void 0)u=u.filter(d=>{const c=f.getValue({item:d});return typeof c=="string"&&o.value&&c.toLowerCase().includes(String(o.value).toLowerCase())});else if(o.operator===m.OPERATOR_NOT_CONTAINS&&o?.value!==void 0)u=u.filter(d=>{const c=f.getValue({item:d});return typeof c=="string"&&o.value&&!c.toLowerCase().includes(String(o.value).toLowerCase())});else if(o.operator===m.OPERATOR_STARTS_WITH&&o?.value!==void 0)u=u.filter(d=>{const c=f.getValue({item:d});return typeof c=="string"&&o.value&&c.toLowerCase().startsWith(String(o.value).toLowerCase())});else if(o.operator===m.OPERATOR_BEFORE&&o.value!==void 0){const d=(0,t.getDate)(o.value);u=u.filter(c=>(0,t.getDate)(f.getValue({item:c}))<d)}else if(o.operator===m.OPERATOR_AFTER&&o.value!==void 0){const d=(0,t.getDate)(o.value);u=u.filter(c=>(0,t.getDate)(f.getValue({item:c}))>d)}else if(o.operator===m.OPERATOR_BEFORE_INC&&o.value!==void 0){const d=(0,t.getDate)(o.value);u=u.filter(c=>(0,t.getDate)(f.getValue({item:c}))<=d)}else if(o.operator===m.OPERATOR_AFTER_INC&&o.value!==void 0){const d=(0,t.getDate)(o.value);u=u.filter(c=>(0,t.getDate)(f.getValue({item:c}))>=d)}else if(o.operator===m.OPERATOR_BETWEEN&&Array.isArray(o.value)&&o.value.length===2&&o.value[0]!==void 0&&o.value[1]!==void 0)u=u.filter(d=>{const c=f.getValue({item:d});return typeof c=="number"||c instanceof Date||typeof c=="string"?c>=o.value[0]&&c<=o.value[1]:!1});else if(o.operator===m.OPERATOR_IN_THE_PAST&&o.value?.value!==void 0&&o.value?.unit!==void 0){const d=i(o.value.value,o.value.unit);u=u.filter(c=>{const g=(0,t.getDate)(f.getValue({item:c}));return g>=d&&g<=new Date})}else if(o.operator===m.OPERATOR_OVER&&o.value?.value!==void 0&&o.value?.unit!==void 0){const d=i(o.value.value,o.value.unit);u=u.filter(c=>(0,t.getDate)(f.getValue({item:c}))<d)}}});const j=_.sort?.field?l.find(o=>o.id===_.sort?.field):null,x=_.groupByField?l.find(o=>o.id===_.groupByField):null;(j||x)&&u.sort((o,f)=>{if(x){const c=x.sort(o,f,"asc");if(c!==0)return c}if(j){var d;return j.sort(o,f,(d=_.sort?.direction)!==null&&d!==void 0?d:"desc")}return 0});let R=u.length,y=1;if(_.page!==void 0&&_.perPage!==void 0){const o=(_.page-1)*_.perPage;R=u?.length||0,y=Math.ceil(R/_.perPage),u=u?.slice(o,o+_.perPage)}return{data:u,paginationInfo:{totalItems:R,totalPages:y}}}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/index.js":((F,a,e)=>{var r,h=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");r={value:!0},r={enumerable:!0,get:function(){return t.default}},Object.defineProperty(a,"Vw",{enumerable:!0,get:function(){return s.default}}),r={enumerable:!0,get:function(){return m.VIEW_LAYOUTS}},Object.defineProperty(a,"Pp",{enumerable:!0,get:function(){return w.filterSortAndPaginate}}),r={enumerable:!0,get:function(){return n.isItemValid}};var s=h(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataviews/index.js")),t=h(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/components/dataform/index.js")),m=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataviews-layouts/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/filter-and-sort-data-view.js"),n=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/validation.js")}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/lock-unlock.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.unlock=a.lock=void 0;var r=e("../../../node_modules/.pnpm/@wordpress+private-apis@1.30.0/node_modules/@wordpress/private-apis/build-module/index.js");const{lock:h,unlock:s}=(0,r.__dangerousOptInToUnstableAPIsOnlyForCoreModules)("I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.","@wordpress/dataviews");a.unlock=s,a.lock=h}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/normalize-fields.js":((F,a,e)=>{var r=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.normalizeFields=n;var h=r(e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/field-types/index.js")),s=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/dataform-controls/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/constants.js");const m=p=>({item:i})=>{const v=p.split(".");let b=i;for(const _ of v)b.hasOwnProperty(_)?b=b[_]:b=void 0;return b};function w(p,i){if(p.filterBy===!1)return!1;if(typeof p.filterBy=="object"){let b=p.filterBy.operators;(!b||!Array.isArray(b))&&(b=i.filterBy?i.filterBy.defaultOperators:[]);let _=t.ALL_OPERATORS;return typeof i.filterBy=="object"&&(_=i.filterBy.validOperators),b=b.filter(l=>_.includes(l)),p.elements&&b.includes(t.OPERATOR_BETWEEN)&&(b=b.filter(l=>l!==t.OPERATOR_BETWEEN)),b.some(l=>t.SINGLE_SELECTION_OPERATORS.includes(l))&&(b=b.filter(l=>[...t.SINGLE_SELECTION_OPERATORS,t.OPERATOR_BETWEEN].includes(l))),b.length===0?!1:{isPrimary:!!p.filterBy.isPrimary,operators:b}}if(i.filterBy===!1)return!1;let v=i.filterBy.defaultOperators;return p.elements&&v.includes(t.OPERATOR_BETWEEN)&&(v=v.filter(b=>b!==t.OPERATOR_BETWEEN)),{operators:v}}function n(p){return p.map(i=>{var v,b,_,O,l,u,j;const x=(0,h.default)(i.type),R=i.getValue||m(i.id),y=(v=i.sort)!==null&&v!==void 0?v:function(E,A,S){return x.sort(R({item:E}),R({item:A}),S)},o={...x.isValid,...i.isValid},f=(0,s.getControl)(i,x),d=(b=i.render)!==null&&b!==void 0?b:function({item:E,field:A}){return x.render({item:E,field:A})},c=w(i,x);return{...i,label:i.label||i.id,header:i.header||i.label||i.id,getValue:R,render:d,sort:y,isValid:o,Edit:f,enableHiding:(_=i.enableHiding)!==null&&_!==void 0?_:!0,enableSorting:(O=(l=i.enableSorting)!==null&&l!==void 0?l:x.enableSorting)!==null&&O!==void 0?O:!0,filterBy:c,readOnly:(u=(j=i.readOnly)!==null&&j!==void 0?j:x.readOnly)!==null&&u!==void 0?u:!1}})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/normalize-form-fields.js":((F,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.DEFAULT_LAYOUT=void 0,a.default=h,a.normalizeLayout=r;const e=a.DEFAULT_LAYOUT={type:"regular",labelPosition:"top"};function r(s){let t=e;if(s?.type==="regular"){var m;t={type:"regular",labelPosition:(m=s?.labelPosition)!==null&&m!==void 0?m:"top"}}else if(s?.type==="panel"){var w,n;t={type:"panel",labelPosition:(w=s?.labelPosition)!==null&&w!==void 0?w:"side",openAs:(n=s?.openAs)!==null&&n!==void 0?n:"dropdown"}}else s?.type==="card"&&(s.withHeader===!1?t={type:"card",withHeader:!1,isOpened:!0}:t={type:"card",withHeader:!0,isOpened:typeof s.isOpened=="boolean"?s.isOpened:!0});return t}function h(s){var t;const m=r(s?.layout);return((t=s.fields)!==null&&t!==void 0?t:[]).map(w=>{if(typeof w=="string")return{id:w,layout:m};const n=w.layout?r(w.layout):m;return{...w,layout:n}})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/utils.js":((F,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.renderFromElements=e;function e({item:r,field:h}){const s=h.getValue({item:r});return h?.elements?.find(t=>t.value===s)?.label||h.getValue({item:r})}}),"../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/validation.js":((F,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.isItemValid=h;var r=e("../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build/normalize-fields.js");function h(s,t,m){const w=(0,r.normalizeFields)(t.filter(({id:p})=>!!m.fields?.includes(p))),n=p=>[void 0,"",null].includes(p);return w.every(p=>{const i=p.getValue({item:s});return!(p.isValid.required&&(p.type==="text"&&n(i)||p.type==="email"&&n(i)||p.type==="integer"&&n(i)||p.type===void 0&&n(i)||p.type==="boolean"&&i!==!0)||typeof p.isValid.custom=="function"&&p.isValid.custom(s,p)!==null)})}}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/@wordpress+dataviews@7.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d729_2f1e2f5ffbdff86ff5f6e58818360432/node_modules/@wordpress/dataviews/build-style/style.css":((F,a,e)=>{e.d(a,{A:()=>w});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),h=e.n(r),s=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(s),m=t()(h());m.push([F.id,`/**
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

.dataviews-loading-more {
  text-align: center;
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
  width: 100%;
  min-width: 230px;
  max-width: 250px;
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
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip.is-not-clickable {
  cursor: default;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip.has-reset {
  padding-inline-end: 28px;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip:hover:not(.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip.is-not-clickable), .dataviews-filters__summary-chip-container .dataviews-filters__summary-chip:focus-visible, .dataviews-filters__summary-chip-container .dataviews-filters__summary-chip[aria-expanded=true] {
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
  display: grid;
  gap: 32px;
  grid-template-rows: max-content;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  padding: 0 48px 24px;
  container-type: inline-size;
  /**
   * Breakpoints were adjusted from media queries breakpoints to account for
   * the sidebar width. This was done to match the existing styles we had.
   */
}
@container (max-width: 480px) {
  .dataviews-view-grid {
    padding-left: 24px;
    padding-right: 24px;
  }
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
  aspect-ratio: 1/1;
  background-color: #fff;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  font-size: 15px;
  font-weight: 500;
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
.dataviews-view-list div[role=row],
.dataviews-view-list div[role=article] {
  margin: 0;
  border-top: 1px solid #f0f0f0;
}
.dataviews-view-list div[role=row] .dataviews-view-list__item-wrapper,
.dataviews-view-list div[role=article] .dataviews-view-list__item-wrapper {
  position: relative;
  padding: 16px 24px;
  box-sizing: border-box;
}
.dataviews-view-list div[role=row] .dataviews-view-list__item-actions,
.dataviews-view-list div[role=article] .dataviews-view-list__item-actions {
  display: flex;
  width: max-content;
  flex: 0 0 auto;
  gap: 4px;
}
.dataviews-view-list div[role=row] .dataviews-view-list__item-actions .components-button,
.dataviews-view-list div[role=article] .dataviews-view-list__item-actions .components-button {
  position: relative;
  z-index: 1;
}
.dataviews-view-list div[role=row] .dataviews-view-list__item-actions > div,
.dataviews-view-list div[role=article] .dataviews-view-list__item-actions > div {
  height: 24px;
}
.dataviews-view-list div[role=row] .dataviews-view-list__item-actions > :not(:last-child),
.dataviews-view-list div[role=article] .dataviews-view-list__item-actions > :not(:last-child) {
  flex: 0;
  overflow: hidden;
  width: 0;
}
.dataviews-view-list div[role=row]:where(.is-selected, .is-hovered, :focus-within) .dataviews-view-list__item-actions > :not(:last-child),
.dataviews-view-list div[role=article]:where(.is-selected, .is-hovered, :focus-within) .dataviews-view-list__item-actions > :not(:last-child) {
  flex-basis: min-content;
  width: auto;
  overflow: unset;
}
@media (hover: none) {
  .dataviews-view-list div[role=row] .dataviews-view-list__item-actions > :not(:last-child),
.dataviews-view-list div[role=article] .dataviews-view-list__item-actions > :not(:last-child) {
    flex-basis: min-content;
    width: auto;
    overflow: unset;
  }
}
.dataviews-view-list div[role=row].is-selected.is-selected,
.dataviews-view-list div[role=article].is-selected.is-selected {
  border-top: 1px solid rgba(var(--wp-admin-theme-color--rgb), 0.12);
}
.dataviews-view-list div[role=row].is-selected.is-selected + div[role=row], .dataviews-view-list div[role=row].is-selected.is-selected + div[role=article],
.dataviews-view-list div[role=article].is-selected.is-selected + div[role=row],
.dataviews-view-list div[role=article].is-selected.is-selected + div[role=article] {
  border-top: 1px solid rgba(var(--wp-admin-theme-color--rgb), 0.12);
}
.dataviews-view-list div[role=row]:not(.is-selected) .dataviews-view-list__title-field,
.dataviews-view-list div[role=article]:not(.is-selected) .dataviews-view-list__title-field {
  color: #1e1e1e;
}
.dataviews-view-list div[role=row]:not(.is-selected):hover, .dataviews-view-list div[role=row]:not(.is-selected).is-hovered, .dataviews-view-list div[role=row]:not(.is-selected):focus-within,
.dataviews-view-list div[role=article]:not(.is-selected):hover,
.dataviews-view-list div[role=article]:not(.is-selected).is-hovered,
.dataviews-view-list div[role=article]:not(.is-selected):focus-within {
  color: var(--wp-admin-theme-color);
  background-color: #f8f8f8;
}
.dataviews-view-list div[role=row]:not(.is-selected):hover .dataviews-view-list__title-field,
.dataviews-view-list div[role=row]:not(.is-selected):hover .dataviews-view-list__fields, .dataviews-view-list div[role=row]:not(.is-selected).is-hovered .dataviews-view-list__title-field,
.dataviews-view-list div[role=row]:not(.is-selected).is-hovered .dataviews-view-list__fields, .dataviews-view-list div[role=row]:not(.is-selected):focus-within .dataviews-view-list__title-field,
.dataviews-view-list div[role=row]:not(.is-selected):focus-within .dataviews-view-list__fields,
.dataviews-view-list div[role=article]:not(.is-selected):hover .dataviews-view-list__title-field,
.dataviews-view-list div[role=article]:not(.is-selected):hover .dataviews-view-list__fields,
.dataviews-view-list div[role=article]:not(.is-selected).is-hovered .dataviews-view-list__title-field,
.dataviews-view-list div[role=article]:not(.is-selected).is-hovered .dataviews-view-list__fields,
.dataviews-view-list div[role=article]:not(.is-selected):focus-within .dataviews-view-list__title-field,
.dataviews-view-list div[role=article]:not(.is-selected):focus-within .dataviews-view-list__fields {
  color: var(--wp-admin-theme-color);
}
.dataviews-view-list div[role=row].is-selected .dataviews-view-list__item-wrapper,
.dataviews-view-list div[role=row].is-selected:focus-within .dataviews-view-list__item-wrapper,
.dataviews-view-list div[role=article].is-selected .dataviews-view-list__item-wrapper,
.dataviews-view-list div[role=article].is-selected:focus-within .dataviews-view-list__item-wrapper {
  background-color: rgba(var(--wp-admin-theme-color--rgb), 0.04);
  color: #1e1e1e;
}
.dataviews-view-list div[role=row].is-selected .dataviews-view-list__item-wrapper .dataviews-view-list__title-field,
.dataviews-view-list div[role=row].is-selected .dataviews-view-list__item-wrapper .dataviews-view-list__fields,
.dataviews-view-list div[role=row].is-selected:focus-within .dataviews-view-list__item-wrapper .dataviews-view-list__title-field,
.dataviews-view-list div[role=row].is-selected:focus-within .dataviews-view-list__item-wrapper .dataviews-view-list__fields,
.dataviews-view-list div[role=article].is-selected .dataviews-view-list__item-wrapper .dataviews-view-list__title-field,
.dataviews-view-list div[role=article].is-selected .dataviews-view-list__item-wrapper .dataviews-view-list__fields,
.dataviews-view-list div[role=article].is-selected:focus-within .dataviews-view-list__item-wrapper .dataviews-view-list__title-field,
.dataviews-view-list div[role=article].is-selected:focus-within .dataviews-view-list__item-wrapper .dataviews-view-list__fields {
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
  background-color: #fff;
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
.dataviews-view-table td.dataviews-view-table__checkbox-column .dataviews-view-table__cell-content-wrapper,
.dataviews-view-table th.dataviews-view-table__checkbox-column .dataviews-view-table__cell-content-wrapper {
  max-width: auto;
  min-width: auto;
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
  max-width: inherit;
  min-width: inherit;
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
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  background-color: #fff;
  border-radius: 4px;
}
.dataviews-column-primary__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.dataviews-column-primary__media::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.dataviews-view-table__cell-content-wrapper:not(.dataviews-column-primary__media),
.dataviews-view-table__primary-column-content:not(.dataviews-column-primary__media) {
  min-width: 15ch;
  max-width: 80ch;
}

.dataviews-view-table__group-header-row .dataviews-view-table__group-header-cell {
  font-weight: 500;
  padding: 12px 48px;
  color: #1e1e1e;
}

.dataviews-controls__datetime {
  border: none;
  padding: 0;
}

.dataviews-controls__relative-date-number,
.dataviews-controls__relative-date-unit {
  flex: 1 1 50%;
}

.dataviews-controls__date input[type=date]::-webkit-inner-spin-button,
.dataviews-controls__date input[type=date]::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}

.dataviews-controls__date-preset {
  border: 1px solid #ddd;
}
.dataviews-controls__date-preset:active {
  background-color: #000;
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

.dataforms-layouts-panel__modal-footer {
  margin-top: 16px;
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
}`,""]);const w=m})}]);
