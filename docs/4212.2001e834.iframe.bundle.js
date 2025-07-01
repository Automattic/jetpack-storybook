"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4212],{"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataform-context/index.js":(L,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.DataFormProvider=t,a.default=void 0;var c=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=(0,c.createContext)({fields:[]});function t({fields:j,children:d}){return(0,p.jsx)(s.Provider,{value:{fields:j},children:d})}var l=a.default=s},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataform/index.js":(L,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=j;var c=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataform-context/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/normalize-fields.js"),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataforms-layouts/data-form-layout.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function j({data:d,form:_,fields:i,onChange:w}){const f=(0,c.useMemo)(()=>(0,s.normalizeFields)(i),[i]);return _.fields?(0,l.jsx)(p.DataFormProvider,{fields:f,children:(0,l.jsx)(t.DataFormLayout,{data:d,form:_,onChange:w})}):null}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-bulk-actions/index.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.BulkActionsFooter=h,a.BulkSelectionCheckbox=u,a.useHasAPossibleBulkAction=f,a.useSomeItemHasAPossibleBulkAction=o;var p=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+data@10.25.0_react@18.3.1/node_modules/@wordpress/data/build-module/index.js"),j=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),d=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),_=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-item-actions/index.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function w({action:r,items:v,ActionTriggerComponent:n}){const[m,y]=(0,t.useState)(!1),C={action:r,onClick:()=>{y(!0)},items:v};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{...C}),m&&(0,i.jsx)(_.ActionModal,{action:r,items:v,closeModal:()=>y(!1)})]})}function f(r,v){return(0,t.useMemo)(()=>r.some(n=>n.supportsBulk&&(!n.isEligible||n.isEligible(v))),[r,v])}function o(r,v){return(0,t.useMemo)(()=>v.some(n=>r.some(m=>m.supportsBulk&&(!m.isEligible||m.isEligible(n)))),[r,v])}function u({selection:r,onChangeSelection:v,data:n,actions:m,getItemId:y}){const C=(0,t.useMemo)(()=>n.filter(D=>m.some(N=>N.supportsBulk&&(!N.isEligible||N.isEligible(D)))),[n,m]),A=n.filter(D=>r.includes(y(D))&&C.includes(D)),F=A.length===C.length;return(0,i.jsx)(p.CheckboxControl,{className:"dataviews-view-table-selection-checkbox",__nextHasNoMarginBottom:!0,checked:F,indeterminate:!F&&!!A.length,onChange:()=>{v(F?[]:C.map(D=>y(D)))},"aria-label":F?(0,s.__)("Deselect all"):(0,s.__)("Select all")})}function R({action:r,onClick:v,isBusy:n,items:m}){const y=typeof r.label=="string"?r.label:r.label(m);return(0,i.jsx)(p.Button,{disabled:n,accessibleWhenDisabled:!0,label:y,icon:r.icon,isDestructive:r.isDestructive,size:"compact",onClick:v,isBusy:n,tooltipPosition:"top"})}const x=[];function O({action:r,selectedItems:v,actionInProgress:n,setActionInProgress:m}){const y=(0,l.useRegistry)(),C=(0,t.useMemo)(()=>v.filter(A=>!r.isEligible||r.isEligible(A)),[r,v]);return"RenderModal"in r?(0,i.jsx)(w,{action:r,items:C,ActionTriggerComponent:R},r.id):(0,i.jsx)(R,{action:r,onClick:async()=>{m(r.id),await r.callback(v,{registry:y}),m(null)},items:C,isBusy:n===r.id},r.id)}function b(r,v,n,m,y,C,A,F,D){const N=C.length>0?(0,s.sprintf)((0,s._n)("%d Item selected","%d Items selected",C.length),C.length):(0,s.sprintf)((0,s._n)("%d Item","%d Items",r.length),r.length);return(0,i.jsxs)(p.__experimentalHStack,{expanded:!1,className:"dataviews-bulk-actions-footer__container",spacing:3,children:[(0,i.jsx)(u,{selection:m,onChangeSelection:D,data:r,actions:v,getItemId:n}),(0,i.jsx)("span",{className:"dataviews-bulk-actions-footer__item-count",children:N}),(0,i.jsxs)(p.__experimentalHStack,{className:"dataviews-bulk-actions-footer__action-buttons",expanded:!1,spacing:1,children:[y.map(V=>(0,i.jsx)(O,{action:V,selectedItems:C,actionInProgress:A,setActionInProgress:F},V.id)),C.length>0&&(0,i.jsx)(p.Button,{icon:j.closeSmall,showTooltip:!0,tooltipPosition:"top",size:"compact",label:(0,s.__)("Cancel"),disabled:!!A,accessibleWhenDisabled:!1,onClick:()=>{D(x)}})]})]})}function g({selection:r,actions:v,onChangeSelection:n,data:m,getItemId:y}){const[C,A]=(0,t.useState)(null),F=(0,t.useRef)(null),D=(0,t.useMemo)(()=>v.filter(P=>P.supportsBulk),[v]),N=(0,t.useMemo)(()=>m.filter(P=>D.some(I=>!I.isEligible||I.isEligible(P))),[m,D]),V=(0,t.useMemo)(()=>m.filter(P=>r.includes(y(P))&&N.includes(P)),[r,m,y,N]),S=(0,t.useMemo)(()=>v.filter(P=>P.supportsBulk&&P.icon&&V.some(I=>!P.isEligible||P.isEligible(I))),[v,V]);if(C)F.current||(F.current=b(m,v,y,r,S,V,C,A,n));else return F.current&&(F.current=null),b(m,v,y,r,S,V,C,A,n);return F.current}function h(){const{data:r,selection:v,actions:n=x,onChangeSelection:m,getItemId:y}=(0,t.useContext)(d.default);return(0,i.jsx)(g,{selection:v,onChangeSelection:m,data:r,actions:n,getItemId:y})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js":(L,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/constants.js");const s=(0,c.createContext)({view:{type:p.LAYOUT_TABLE},onChangeView:()=>{},fields:[],data:[],paginationInfo:{totalItems:0,totalPages:0},selection:[],onChangeSelection:()=>{},setOpenedFilter:()=>{},openedFilter:null,getItemId:l=>l.id,isItemClickable:()=>!0,containerWidth:0});var t=a.default=s},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-filters/add-filter.js":(L,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.AddFilterMenu=d,a.default=void 0;var c=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/lock-unlock.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Menu:j}=(0,t.unlock)(c.privateApis);function d({filters:w,view:f,onChangeView:o,setOpenedFilter:u,triggerProps:R}){const x=w.filter(O=>!O.isVisible);return(0,l.jsxs)(j,{children:[(0,l.jsx)(j.TriggerButton,{...R}),(0,l.jsx)(j.Popover,{children:x.map(O=>(0,l.jsx)(j.Item,{onClick:()=>{u(O.field),o({...f,page:1,filters:[...f.filters||[],{field:O.field,value:void 0,operator:O.operators[0]}]})},children:(0,l.jsx)(j.ItemLabel,{children:O.name})},O.field))})]})}function _({filters:w,view:f,onChangeView:o,setOpenedFilter:u},R){if(!w.length||w.every(({isPrimary:O})=>O))return null;const x=w.filter(O=>!O.isVisible);return(0,l.jsx)(d,{triggerProps:{render:(0,l.jsx)(c.Button,{accessibleWhenDisabled:!0,size:"compact",className:"dataviews-filters-button",variant:"tertiary",disabled:!x.length,ref:R}),children:(0,p.__)("Add filter")},filters:w,view:f,onChangeView:o,setOpenedFilter:u})}var i=a.default=(0,s.forwardRef)(_)},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-filters/filter-summary.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=R;var p=c(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),s=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),j=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),d=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-filters/search-widget.js")),_=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/constants.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const w="Enter",f=" ",o=({activeElements:x,filterInView:O,filter:b})=>{if(x===void 0||x.length===0)return b.name;const g={Name:(0,i.jsx)("span",{className:"dataviews-filters__summary-filter-text-name"}),Value:(0,i.jsx)("span",{className:"dataviews-filters__summary-filter-text-value"})};return O?.operator===_.OPERATOR_IS_ANY?(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is any: </Name><Value>%2$s</Value>"),b.name,x.map(h=>h.label).join(", ")),g):O?.operator===_.OPERATOR_IS_NONE?(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is none: </Name><Value>%2$s</Value>"),b.name,x.map(h=>h.label).join(", ")),g):O?.operator===_.OPERATOR_IS_ALL?(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is all: </Name><Value>%2$s</Value>"),b.name,x.map(h=>h.label).join(", ")),g):O?.operator===_.OPERATOR_IS_NOT_ALL?(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is not all: </Name><Value>%2$s</Value>"),b.name,x.map(h=>h.label).join(", ")),g):O?.operator===_.OPERATOR_IS?(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is: </Name><Value>%2$s</Value>"),b.name,x[0].label),g):O?.operator===_.OPERATOR_IS_NOT?(0,l.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is not: </Name><Value>%2$s</Value>"),b.name,x[0].label),g):(0,t.sprintf)((0,t.__)("Unknown status for %1$s"),b.name)};function u({filter:x,view:O,onChangeView:b}){const g=x.operators?.map(v=>({value:v,label:_.OPERATORS[v]?.label})),h=O.filters?.find(v=>v.field===x.field),r=h?.operator||x.operators[0];return g.length>1&&(0,i.jsxs)(s.__experimentalHStack,{spacing:2,justify:"flex-start",className:"dataviews-filters__summary-operators-container",children:[(0,i.jsx)(s.FlexItem,{className:"dataviews-filters__summary-operators-filter-name",children:x.name}),(0,i.jsx)(s.SelectControl,{label:(0,t.__)("Conditions"),value:r,options:g,onChange:v=>{var n,m;const y=v,C=h?[...((n=O.filters)!==null&&n!==void 0?n:[]).map(A=>A.field===x.field?{...A,operator:y}:A)]:[...(m=O.filters)!==null&&m!==void 0?m:[],{field:x.field,operator:y,value:void 0}];b({...O,page:1,filters:C})},size:"small",__nextHasNoMarginBottom:!0,hideLabelFromVision:!0})]})}function R({addFilterRef:x,openedFilter:O,...b}){const g=(0,l.useRef)(null),{filter:h,view:r,onChangeView:v}=b,n=r.filters?.find(F=>F.field===h.field),m=h.elements.filter(F=>h.singleSelection?F.value===n?.value:n?.value?.includes(F.value)),y=h.isPrimary,C=n?.value!==void 0,A=!y||C;return(0,i.jsx)(s.Dropdown,{defaultOpen:O===h.field,contentClassName:"dataviews-filters__summary-popover",popoverProps:{placement:"bottom-start",role:"dialog"},onClose:()=>{g.current?.focus()},renderToggle:({isOpen:F,onToggle:D})=>(0,i.jsxs)("div",{className:"dataviews-filters__summary-chip-container",children:[(0,i.jsx)(s.Tooltip,{text:(0,t.sprintf)((0,t.__)("Filter by: %1$s"),h.name.toLowerCase()),placement:"top",children:(0,i.jsx)("div",{className:(0,p.default)("dataviews-filters__summary-chip",{"has-reset":A,"has-values":C}),role:"button",tabIndex:0,onClick:D,onKeyDown:N=>{[w,f].includes(N.key)&&(D(),N.preventDefault())},"aria-pressed":F,"aria-expanded":F,ref:g,children:(0,i.jsx)(o,{activeElements:m,filterInView:n,filter:h})})}),A&&(0,i.jsx)(s.Tooltip,{text:y?(0,t.__)("Reset"):(0,t.__)("Remove"),placement:"top",children:(0,i.jsx)("button",{className:(0,p.default)("dataviews-filters__summary-chip-remove",{"has-values":C}),onClick:()=>{v({...r,page:1,filters:r.filters?.filter(N=>N.field!==h.field)}),y?g.current?.focus():x.current?.focus()},children:(0,i.jsx)(s.Icon,{icon:j.closeSmall})})})]}),renderContent:()=>(0,i.jsxs)(s.__experimentalVStack,{spacing:0,justify:"flex-start",children:[(0,i.jsx)(u,{...b}),(0,i.jsx)(d.default,{...b})]})})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-filters/index.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.FiltersToggle=O,a.default=void 0,a.useFilters=x;var p=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),j=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-filters/filter-summary.js")),d=R(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-filters/add-filter.js")),_=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-filters/reset-filters.js")),i=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/utils.js"),f=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/constants.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function u(r){if(typeof WeakMap!="function")return null;var v=new WeakMap,n=new WeakMap;return(u=function(m){return m?n:v})(r)}function R(r,v){if(!v&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var n=u(v);if(n&&n.has(r))return n.get(r);var m={__proto__:null},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in r)if(C!=="default"&&{}.hasOwnProperty.call(r,C)){var A=y?Object.getOwnPropertyDescriptor(r,C):null;A&&(A.get||A.set)?Object.defineProperty(m,C,A):m[C]=r[C]}return m.default=r,n&&n.set(r,m),m}function x(r,v){return(0,p.useMemo)(()=>{const n=[];return r.forEach(m=>{if(!m.elements?.length)return;const y=(0,w.sanitizeOperators)(m);if(y.length===0)return;const C=!!m.filterBy?.isPrimary;n.push({field:m.id,name:m.label,elements:m.elements,singleSelection:y.some(A=>[f.OPERATOR_IS,f.OPERATOR_IS_NOT].includes(A)),operators:y,isVisible:C||!!v.filters?.some(A=>A.field===m.id&&f.ALL_OPERATORS.includes(A.operator)),isPrimary:C})}),n.sort((m,y)=>m.isPrimary&&!y.isPrimary?-1:!m.isPrimary&&y.isPrimary?1:m.name.localeCompare(y.name)),n},[r,v])}function O({filters:r,view:v,onChangeView:n,setOpenedFilter:m,isShowingFilter:y,setIsShowingFilter:C}){const A=(0,p.useRef)(null),F=(0,p.useCallback)(I=>{n(I),C(!0)},[n,C]),N=!!r.filter(I=>I.isVisible).length;if(r.length===0)return null;const V={label:(0,l.__)("Add filter"),"aria-expanded":!1,isPressed:!1},S={label:(0,l._x)("Filter","verb"),"aria-expanded":y,isPressed:y,onClick:()=>{y||m(null),C(!y)}},P=(0,o.jsx)(s.Button,{ref:A,className:"dataviews-filters__visibility-toggle",size:"compact",icon:t.funnel,...N?S:V});return(0,o.jsx)("div",{className:"dataviews-filters__container-visibility-toggle",children:N?(0,o.jsx)(b,{buttonRef:A,filtersCount:v.filters?.length,children:P}):(0,o.jsx)(d.AddFilterMenu,{filters:r,view:v,onChangeView:F,setOpenedFilter:m,triggerProps:{render:P}})})}function b({buttonRef:r,filtersCount:v,children:n}){return(0,p.useEffect)(()=>()=>{r.current?.focus()},[r]),(0,o.jsxs)(o.Fragment,{children:[n,!!v&&(0,o.jsx)("span",{className:"dataviews-filters-toggle__count",children:v})]})}function g(){const{fields:r,view:v,onChangeView:n,openedFilter:m,setOpenedFilter:y}=(0,p.useContext)(i.default),C=(0,p.useRef)(null),A=x(r,v),F=(0,o.jsx)(d.default,{filters:A,view:v,onChangeView:n,ref:C,setOpenedFilter:y},"add-filter"),D=A.filter(V=>V.isVisible);if(D.length===0)return null;const N=[...D.map(V=>(0,o.jsx)(j.default,{filter:V,view:v,onChangeView:n,addFilterRef:C,openedFilter:m},V.field)),F];return N.push((0,o.jsx)(_.default,{filters:A,view:v,onChangeView:n},"reset-filters")),(0,o.jsx)(s.__experimentalHStack,{justify:"flex-start",style:{width:"fit-content"},className:"dataviews-filters__container",wrap:!0,children:N})}var h=a.default=(0,p.memo)(g)},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-filters/reset-filters.js":(L,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=t;var c=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({filters:l,view:j,onChangeView:d}){const _=w=>l.some(f=>f.field===w&&f.isPrimary),i=!j.search&&!j.filters?.some(w=>w.value!==void 0||!_(w.field));return(0,s.jsx)(c.Button,{disabled:i,accessibleWhenDisabled:!0,size:"compact",variant:"tertiary",className:"dataviews-filters__reset-button",onClick:()=>{d({...j,page:1,search:"",filters:[]})},children:(0,p.__)("Reset")})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-filters/search-widget.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=v;var p=o(e("../../../node_modules/.pnpm/@ariakit+react@0.4.17_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react/cjs/index.cjs")),s=c(e("../../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js")),t=e("../../../node_modules/.pnpm/@wordpress+compose@7.25.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),j=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+primitives@4.25.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/index.js"),w=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function f(n){if(typeof WeakMap!="function")return null;var m=new WeakMap,y=new WeakMap;return(f=function(C){return C?y:m})(n)}function o(n,m){if(!m&&n&&n.__esModule)return n;if(n===null||typeof n!="object"&&typeof n!="function")return{default:n};var y=f(m);if(y&&y.has(n))return y.get(n);var C={__proto__:null},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var F in n)if(F!=="default"&&{}.hasOwnProperty.call(n,F)){var D=A?Object.getOwnPropertyDescriptor(n,F):null;D&&(D.get||D.set)?Object.defineProperty(C,F,D):C[F]=n[F]}return C.default=n,y&&y.set(n,C),C}const u=(0,w.jsx)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,w.jsx)(i.Circle,{cx:12,cy:12,r:3})});function R(n=""){return(0,s.default)(n.trim().toLowerCase())}const x=[],O=(n,m)=>n.singleSelection?m?.value:Array.isArray(m?.value)?m.value:!Array.isArray(m?.value)&&m?.value?[m.value]:x,b=(n,m,y)=>n.singleSelection?y:Array.isArray(m?.value)?m.value.includes(y)?m.value.filter(C=>C!==y):[...m.value,y]:[y];function g(n,m){return`${n}-${m}`}function h({view:n,filter:m,onChangeView:y}){const C=(0,t.useInstanceId)(h,"dataviews-filter-list-box"),[A,F]=(0,j.useState)(m.operators?.length===1?void 0:null),D=n.filters?.find(V=>V.field===m.field),N=O(m,D);return(0,w.jsx)(d.Composite,{virtualFocus:!0,focusLoop:!0,activeId:A,setActiveId:F,role:"listbox",className:"dataviews-filters__search-widget-listbox","aria-label":(0,l.sprintf)((0,l.__)("List of: %1$s"),m.name),onFocusVisible:()=>{!A&&m.elements.length&&F(g(C,m.elements[0].value))},render:(0,w.jsx)(d.Composite.Typeahead,{}),children:m.elements.map(V=>(0,w.jsxs)(d.Composite.Hover,{render:(0,w.jsx)(d.Composite.Item,{id:g(C,V.value),render:(0,w.jsx)("div",{"aria-label":V.label,role:"option",className:"dataviews-filters__search-widget-listitem"}),onClick:()=>{var S,P;const I=D?[...((S=n.filters)!==null&&S!==void 0?S:[]).map(M=>M.field===m.field?{...M,operator:D.operator||m.operators[0],value:b(m,D,V.value)}:M)]:[...(P=n.filters)!==null&&P!==void 0?P:[],{field:m.field,operator:m.operators[0],value:b(m,D,V.value)}];y({...n,page:1,filters:I})}}),children:[(0,w.jsxs)("span",{className:"dataviews-filters__search-widget-listitem-check",children:[m.singleSelection&&N===V.value&&(0,w.jsx)(d.Icon,{icon:u}),!m.singleSelection&&N.includes(V.value)&&(0,w.jsx)(d.Icon,{icon:_.check})]}),(0,w.jsx)("span",{children:V.label})]},V.value))})}function r({view:n,filter:m,onChangeView:y}){const[C,A]=(0,j.useState)(""),F=(0,j.useDeferredValue)(C),D=n.filters?.find(S=>S.field===m.field),N=O(m,D),V=(0,j.useMemo)(()=>{const S=R(F);return m.elements.filter(P=>R(P.label).includes(S))},[m.elements,F]);return(0,w.jsxs)(p.ComboboxProvider,{selectedValue:N,setSelectedValue:S=>{var P,I;const M=D?[...((P=n.filters)!==null&&P!==void 0?P:[]).map(B=>B.field===m.field?{...B,operator:D.operator||m.operators[0],value:S}:B)]:[...(I=n.filters)!==null&&I!==void 0?I:[],{field:m.field,operator:m.operators[0],value:S}];y({...n,page:1,filters:M})},setValue:A,children:[(0,w.jsxs)("div",{className:"dataviews-filters__search-widget-filter-combobox__wrapper",children:[(0,w.jsx)(p.ComboboxLabel,{render:(0,w.jsx)(d.VisuallyHidden,{children:(0,l.__)("Search items")}),children:(0,l.__)("Search items")}),(0,w.jsx)(p.Combobox,{autoSelect:"always",placeholder:(0,l.__)("Search"),className:"dataviews-filters__search-widget-filter-combobox__input"}),(0,w.jsx)("div",{className:"dataviews-filters__search-widget-filter-combobox__icon",children:(0,w.jsx)(d.Icon,{icon:_.search})})]}),(0,w.jsxs)(p.ComboboxList,{className:"dataviews-filters__search-widget-filter-combobox-list",alwaysVisible:!0,children:[V.map(S=>(0,w.jsxs)(p.ComboboxItem,{resetValueOnSelect:!1,value:S.value,className:"dataviews-filters__search-widget-listitem",hideOnClick:!1,setValueOnClick:!1,focusOnHover:!0,children:[(0,w.jsxs)("span",{className:"dataviews-filters__search-widget-listitem-check",children:[m.singleSelection&&N===S.value&&(0,w.jsx)(d.Icon,{icon:u}),!m.singleSelection&&N.includes(S.value)&&(0,w.jsx)(d.Icon,{icon:_.check})]}),(0,w.jsxs)("span",{children:[(0,w.jsx)(p.ComboboxItemValue,{className:"dataviews-filters__search-widget-filter-combobox-item-value",value:S.label}),!!S.description&&(0,w.jsx)("span",{className:"dataviews-filters__search-widget-listitem-description",children:S.description})]})]},S.value)),!V.length&&(0,w.jsx)("p",{children:(0,l.__)("No results found")})]})]})}function v(n){const m=n.filter.elements.length>10?r:h;return(0,w.jsx)(m,{...n})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-footer/index.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=w;var p=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),t=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),l=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-pagination/index.js")),j=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-bulk-actions/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/constants.js"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i=[];function w(){const{view:f,paginationInfo:{totalItems:o=0,totalPages:u},data:R,actions:x=i}=(0,s.useContext)(t.default),O=(0,j.useSomeItemHasAPossibleBulkAction)(x,R)&&[d.LAYOUT_TABLE,d.LAYOUT_GRID].includes(f.type);return!o||!u||u<=1&&!O?null:!!o&&(0,_.jsxs)(p.__experimentalHStack,{expanded:!1,justify:"end",className:"dataviews-footer",children:[O&&(0,_.jsx)(j.BulkActionsFooter,{}),(0,_.jsx)(l.default,{})]})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-item-actions/index.js":(L,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ActionModal=o,a.ActionsMenuGroup=u,a.default=R;var c=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+data@10.25.0_react@18.3.1/node_modules/@wordpress/data/build-module/index.js"),j=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/lock-unlock.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Menu:_,kebabCase:i}=(0,j.unlock)(c.privateApis);function w({action:b,onClick:g,items:h}){const r=typeof b.label=="string"?b.label:b.label(h);return(0,d.jsx)(c.Button,{label:r,icon:b.icon,disabled:!!b.disabled,accessibleWhenDisabled:!0,isDestructive:b.isDestructive,size:"compact",onClick:g})}function f({action:b,onClick:g,items:h}){const r=typeof b.label=="string"?b.label:b.label(h);return(0,d.jsx)(_.Item,{disabled:b.disabled,onClick:g,children:(0,d.jsx)(_.ItemLabel,{children:r})})}function o({action:b,items:g,closeModal:h}){const r=typeof b.label=="string"?b.label:b.label(g);return(0,d.jsx)(c.Modal,{title:b.modalHeader||r,__experimentalHideHeader:!!b.hideModalHeader,onRequestClose:h,focusOnMount:"firstContentElement",size:b.modalSize||"medium",overlayClassName:`dataviews-action-modal dataviews-action-modal__${i(b.id)}`,children:(0,d.jsx)(b.RenderModal,{items:g,closeModal:h})})}function u({actions:b,item:g,registry:h,setActiveModalAction:r}){return(0,d.jsx)(_.Group,{children:b.map(v=>(0,d.jsx)(f,{action:v,onClick:()=>{if("RenderModal"in v){r(v);return}v.callback([g],{registry:h})},items:[g]},v.id))})}function R({item:b,actions:g,isCompact:h}){const r=(0,l.useRegistry)(),{primaryActions:v,eligibleActions:n}=(0,s.useMemo)(()=>{const m=g.filter(C=>!C.isEligible||C.isEligible(b));return{primaryActions:m.filter(C=>C.isPrimary&&!!C.icon),eligibleActions:m}},[g,b]);return h?(0,d.jsx)(x,{item:b,actions:n,isSmall:!0,registry:r}):v.length===n.length?(0,d.jsx)(O,{item:b,actions:v,registry:r}):(0,d.jsxs)(c.__experimentalHStack,{spacing:1,justify:"flex-end",className:"dataviews-item-actions",style:{flexShrink:"0",width:"auto"},children:[(0,d.jsx)(O,{item:b,actions:v,registry:r}),(0,d.jsx)(x,{item:b,actions:n,registry:r})]})}function x({item:b,actions:g,isSmall:h,registry:r}){const[v,n]=(0,s.useState)(null);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(_,{placement:"bottom-end",children:[(0,d.jsx)(_.TriggerButton,{render:(0,d.jsx)(c.Button,{size:h?"small":"compact",icon:t.moreVertical,label:(0,p.__)("Actions"),accessibleWhenDisabled:!0,disabled:!g.length,className:"dataviews-all-actions-button"})}),(0,d.jsx)(_.Popover,{children:(0,d.jsx)(u,{actions:g,item:b,registry:r,setActiveModalAction:n})})]}),!!v&&(0,d.jsx)(o,{action:v,items:[b],closeModal:()=>n(null)})]})}function O({item:b,actions:g,registry:h}){const[r,v]=(0,s.useState)(null);return!Array.isArray(g)||g.length===0?null:(0,d.jsxs)(d.Fragment,{children:[g.map(n=>(0,d.jsx)(w,{action:n,onClick:()=>{if("RenderModal"in n){v(n);return}n.callback([b],{registry:h})},items:[b]},n.id)),!!r&&(0,d.jsx)(o,{action:r,items:[b],closeModal:()=>v(null)})]})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-layout/index.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=j;var p=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),s=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataviews-layouts/index.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function j(){const{actions:d=[],data:_,fields:i,getItemId:w,getItemLevel:f,isLoading:o,view:u,onChangeView:R,selection:x,onChangeSelection:O,setOpenedFilter:b,onClickItem:g,isItemClickable:h}=(0,p.useContext)(s.default),r=t.VIEW_LAYOUTS.find(v=>v.type===u.type)?.component;return(0,l.jsx)(r,{actions:d,data:_,fields:i,getItemId:w,getItemLevel:f,isLoading:o,onChangeView:R,onChangeSelection:O,selection:x,setOpenedFilter:b,onClickItem:g,isItemClickable:h,view:u})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-pagination/index.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var p=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),j=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function _(){var w;const{view:f,onChangeView:o,paginationInfo:{totalItems:u=0,totalPages:R}}=(0,s.useContext)(j.default);if(!u||!R)return null;const x=(w=f.page)!==null&&w!==void 0?w:1,O=Array.from(Array(R)).map((b,g)=>{const h=g+1;return{value:h.toString(),label:h.toString(),"aria-label":x===h?(0,t.sprintf)((0,t.__)("Page %1$s of %2$s"),x,R):h.toString()}});return!!u&&R!==1&&(0,d.jsxs)(p.__experimentalHStack,{expanded:!1,className:"dataviews-pagination",justify:"end",spacing:6,children:[(0,d.jsx)(p.__experimentalHStack,{justify:"flex-start",expanded:!1,spacing:1,className:"dataviews-pagination__page-select",children:(0,s.createInterpolateElement)((0,t.sprintf)((0,t._x)("<div>Page</div>%1$s<div>of %2$s</div>","paging"),"<CurrentPage />",R),{div:(0,d.jsx)("div",{"aria-hidden":!0}),CurrentPage:(0,d.jsx)(p.SelectControl,{"aria-label":(0,t.__)("Current page"),value:x.toString(),options:O,onChange:b=>{o({...f,page:+b})},size:"small",__nextHasNoMarginBottom:!0,variant:"minimal"})})}),(0,d.jsxs)(p.__experimentalHStack,{expanded:!1,spacing:1,children:[(0,d.jsx)(p.Button,{onClick:()=>o({...f,page:x-1}),disabled:x===1,accessibleWhenDisabled:!0,label:(0,t.__)("Previous page"),icon:(0,t.isRTL)()?l.next:l.previous,showTooltip:!0,size:"compact",tooltipPosition:"top"}),(0,d.jsx)(p.Button,{onClick:()=>o({...f,page:x+1}),disabled:x>=R,accessibleWhenDisabled:!0,label:(0,t.__)("Next page"),icon:(0,t.isRTL)()?l.previous:l.next,showTooltip:!0,size:"compact",tooltipPosition:"top"})]})]})}var i=a.default=(0,s.memo)(_)},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-search/index.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var p=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+compose@7.25.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),j=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _=(0,s.memo)(function({label:f}){const{view:o,onChangeView:u}=(0,s.useContext)(j.default),[R,x,O]=(0,l.useDebouncedInput)(o.search);(0,s.useEffect)(()=>{var r;x((r=o.search)!==null&&r!==void 0?r:"")},[o.search,x]);const b=(0,s.useRef)(u),g=(0,s.useRef)(o);(0,s.useEffect)(()=>{b.current=u,g.current=o},[u,o]),(0,s.useEffect)(()=>{O!==g.current?.search&&b.current({...g.current,page:1,search:O})},[O]);const h=f||(0,p.__)("Search");return(0,d.jsx)(t.SearchControl,{className:"dataviews-search",__nextHasNoMarginBottom:!0,onChange:x,value:R,label:h,placeholder:h,size:"compact"})});var i=a.default=_},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-selection-checkbox/index.js":(L,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=t;var c=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({selection:l,onChangeSelection:j,item:d,getItemId:_,titleField:i,disabled:w}){const f=_(d),o=!w&&l.includes(f),u=i?.getValue?.({item:d})||(0,p.__)("(no title)");return(0,s.jsx)(c.CheckboxControl,{className:"dataviews-selection-checkbox",__nextHasNoMarginBottom:!0,"aria-label":u,"aria-disabled":w,checked:o,onChange:()=>{w||j(l.includes(f)?l.filter(R=>f!==R):[...l,f])}})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-view-config/index.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var p=c(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),s=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),j=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),d=c(e("../../../node_modules/.pnpm/@wordpress+warning@3.25.0/node_modules/@wordpress/warning/build-module/index.js")),_=e("../../../node_modules/.pnpm/@wordpress+compose@7.25.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/constants.js"),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataviews-layouts/index.js"),f=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),o=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/lock-unlock.js"),u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Menu:R}=(0,o.unlock)(s.privateApis),x={className:"dataviews-config__popover",placement:"bottom-end",offset:9};function O({defaultLayouts:S={list:{},grid:{},table:{}}}){const{view:P,onChangeView:I}=(0,l.useContext)(f.default),M=Object.keys(S);if(M.length<=1)return null;const B=w.VIEW_LAYOUTS.find(T=>P.type===T.type);return(0,u.jsxs)(R,{children:[(0,u.jsx)(R.TriggerButton,{render:(0,u.jsx)(s.Button,{size:"compact",icon:B?.icon,label:(0,t.__)("Layout")})}),(0,u.jsx)(R.Popover,{children:M.map(T=>{const z=w.VIEW_LAYOUTS.find(E=>E.type===T);return z?(0,u.jsx)(R.RadioItem,{value:T,name:"view-actions-available-view",checked:T===P.type,hideOnClick:!0,onChange:E=>{switch(E.target.value){case"list":case"grid":case"table":const W={...P};return"layout"in W&&delete W.layout,I({...W,type:E.target.value,...S[E.target.value]})}globalThis.SCRIPT_DEBUG===!0&&(0,d.default)("Invalid dataview")},children:(0,u.jsx)(R.ItemLabel,{children:z.label})},T):null})})]})}function b(){const{view:S,fields:P,onChangeView:I}=(0,l.useContext)(f.default),M=(0,l.useMemo)(()=>P.filter(T=>T.enableSorting!==!1).map(T=>({label:T.label,value:T.id})),[P]);return(0,u.jsx)(s.SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:(0,t.__)("Sort by"),value:S.sort?.field,options:M,onChange:B=>{I({...S,sort:{direction:S?.sort?.direction||"desc",field:B},showLevels:!1})}})}function g(){const{view:S,fields:P,onChangeView:I}=(0,l.useContext)(f.default);if(P.filter(T=>T.enableSorting!==!1).length===0)return null;let B=S.sort?.direction;return!B&&S.sort?.field&&(B="desc"),(0,u.jsx)(s.__experimentalToggleGroupControl,{className:"dataviews-view-config__sort-direction",__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,isBlock:!0,label:(0,t.__)("Order"),value:B,onChange:T=>{if(T==="asc"||T==="desc"){I({...S,sort:{direction:T,field:S.sort?.field||P.find(z=>z.enableSorting!==!1)?.id||""},showLevels:!1});return}globalThis.SCRIPT_DEBUG===!0&&(0,d.default)("Invalid direction")},children:i.SORTING_DIRECTIONS.map(T=>(0,u.jsx)(s.__experimentalToggleGroupControlOptionIcon,{value:T,icon:i.sortIcons[T],label:i.sortLabels[T]},T))})}const h=[10,20,50,100];function r(){const{view:S,onChangeView:P}=(0,l.useContext)(f.default);return(0,u.jsx)(s.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,isBlock:!0,label:(0,t.__)("Items per page"),value:S.perPage||10,disabled:!S?.sort?.field,onChange:I=>{const M=typeof I=="number"||I===void 0?I:parseInt(I,10);P({...S,perPage:M,page:1})},children:h.map(I=>(0,u.jsx)(s.__experimentalToggleGroupControlOption,{value:I,label:I.toString()},I))})}function v({previewOptions:S,onChangePreviewOption:P,onMenuOpenChange:I,activeOption:M}){const B=T=>{setTimeout(()=>{const z=document.querySelector(`.dataviews-field-control__field-${T} .dataviews-field-control__field-preview-options-button`);z instanceof HTMLElement&&z.focus()},50)};return(0,u.jsxs)(R,{onOpenChange:I,children:[(0,u.jsx)(R.TriggerButton,{render:(0,u.jsx)(s.Button,{className:"dataviews-field-control__field-preview-options-button",size:"compact",icon:j.moreVertical,label:(0,t.__)("Preview")})}),(0,u.jsx)(R.Popover,{children:S?.map(({id:T,label:z})=>(0,u.jsx)(R.RadioItem,{value:T,checked:T===M,onChange:()=>{P?.(T),B(T)},children:(0,u.jsx)(R.ItemLabel,{children:z})},T))})]})}function n({field:S,label:P,description:I,isVisible:M,isFirst:B,isLast:T,canMove:z=!0,onToggleVisibility:E,onMoveUp:W,onMoveDown:Y,previewOptions:K,onChangePreviewOption:X}){const[G,J]=(0,l.useState)(!1),Z=()=>{setTimeout(()=>{const Q=document.querySelector(`.dataviews-field-control__field-${S.id} .dataviews-field-control__field-visibility-button`);Q instanceof HTMLElement&&Q.focus()},50)};return(0,u.jsx)(s.__experimentalItem,{children:(0,u.jsxs)(s.__experimentalHStack,{expanded:!0,className:(0,p.default)("dataviews-field-control__field",`dataviews-field-control__field-${S.id}`,{"is-interacting":G}),justify:"flex-start",children:[(0,u.jsx)("span",{className:"dataviews-field-control__icon",children:!z&&!S.enableHiding&&(0,u.jsx)(s.Icon,{icon:j.lock})}),(0,u.jsxs)("span",{className:"dataviews-field-control__label-sub-label-container",children:[(0,u.jsx)("span",{className:"dataviews-field-control__label",children:P||S.label}),I&&(0,u.jsx)("span",{className:"dataviews-field-control__sub-label",children:I})]}),(0,u.jsxs)(s.__experimentalHStack,{justify:"flex-end",expanded:!1,className:"dataviews-field-control__actions",children:[M&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.Button,{disabled:B||!z,accessibleWhenDisabled:!0,size:"compact",onClick:W,icon:j.chevronUp,label:B||!z?(0,t.__)("This field can't be moved up"):(0,t.sprintf)((0,t.__)("Move %s up"),S.label)}),(0,u.jsx)(s.Button,{disabled:T||!z,accessibleWhenDisabled:!0,size:"compact",onClick:Y,icon:j.chevronDown,label:T||!z?(0,t.__)("This field can't be moved down"):(0,t.sprintf)((0,t.__)("Move %s down"),S.label)})]}),E&&(0,u.jsx)(s.Button,{className:"dataviews-field-control__field-visibility-button",disabled:!S.enableHiding,accessibleWhenDisabled:!0,size:"compact",onClick:()=>{E(),Z()},icon:M?j.unseen:j.seen,label:M?(0,t.sprintf)((0,t._x)("Hide %s","field"),S.label):(0,t.sprintf)((0,t._x)("Show %s","field"),S.label)}),K&&(0,u.jsx)(v,{previewOptions:K,onChangePreviewOption:X,onMenuOpenChange:J,activeOption:S.id})]})]})})}function m({index:S,field:P,view:I,onChangeView:M}){var B;const T=(B=I.fields)!==null&&B!==void 0?B:[],z=S!==void 0&&T.includes(P.id);return(0,u.jsx)(n,{field:P,isVisible:z,isFirst:S!==void 0&&S<1,isLast:S!==void 0&&S===T.length-1,onToggleVisibility:()=>{M({...I,fields:z?T.filter(E=>E!==P.id):[...T,P.id]})},onMoveUp:S!==void 0?()=>{var E;M({...I,fields:[...(E=T.slice(0,S-1))!==null&&E!==void 0?E:[],P.id,T[S-1],...T.slice(S+1)]})}:void 0,onMoveDown:S!==void 0?()=>{var E;M({...I,fields:[...(E=T.slice(0,S))!==null&&E!==void 0?E:[],T[S+1],P.id,...T.slice(S+2)]})}:void 0})}function y(S){return!!S}function C(){var S;const{view:P,fields:I,onChangeView:M}=(0,l.useContext)(f.default),B=[P?.titleField,P?.mediaField,P?.descriptionField].filter(Boolean),T=(S=P.fields)!==null&&S!==void 0?S:[],z=I.filter(k=>!T.includes(k.id)&&!B.includes(k.id)&&k.type!=="media"),E=T.map(k=>I.find(H=>H.id===k)).filter(y);if(!E?.length&&!z?.length)return null;const W=I.find(k=>k.id===P.titleField),Y=I.find(k=>k.id===P.mediaField),K=I.find(k=>k.id===P.descriptionField),X=I.filter(k=>k.type==="media");let G;if(X.length>1){var J;const k=y(Y)&&((J=P.showMedia)!==null&&J!==void 0?J:!0);G=y(Y)&&(0,u.jsx)(n,{field:Y,label:(0,t.__)("Preview"),description:Y.label,isVisible:k,onToggleVisibility:()=>{M({...P,showMedia:!k})},canMove:!1,previewOptions:X.map(H=>({label:H.label,id:H.id})),onChangePreviewOption:H=>M({...P,mediaField:H})},Y.id)}const Z=[{field:W,isVisibleFlag:"showTitle"},{field:Y,isVisibleFlag:"showMedia",ui:G},{field:K,isVisibleFlag:"showDescription"}].filter(({field:k})=>y(k)),Q=Z.filter(({field:k,isVisibleFlag:H})=>{var U;return y(k)&&((U=P[H])!==null&&U!==void 0?U:!0)}),$=Z.filter(({field:k,isVisibleFlag:H})=>{var U;return y(k)&&!(!((U=P[H])!==null&&U!==void 0)||U)});return(0,u.jsxs)(s.__experimentalVStack,{className:"dataviews-field-control",spacing:6,children:[(0,u.jsx)(s.__experimentalVStack,{className:"dataviews-view-config__properties",spacing:0,children:(Q.length>0||!!E?.length)&&(0,u.jsxs)(s.__experimentalItemGroup,{isBordered:!0,isSeparated:!0,children:[Q.map(({field:k,isVisibleFlag:H,ui:U})=>U??(0,u.jsx)(n,{field:k,isVisible:!0,onToggleVisibility:()=>{M({...P,[H]:!1})},canMove:!1},k.id)),E.map((k,H)=>(0,u.jsx)(m,{field:k,view:P,onChangeView:M,index:H},k.id))]})}),(!!z?.length||!!$.length)&&(0,u.jsxs)(s.__experimentalVStack,{spacing:4,children:[(0,u.jsx)(s.BaseControl.VisualLabel,{style:{margin:0},children:(0,t.__)("Hidden")}),(0,u.jsx)(s.__experimentalVStack,{className:"dataviews-view-config__properties",spacing:0,children:(0,u.jsxs)(s.__experimentalItemGroup,{isBordered:!0,isSeparated:!0,children:[$.length>0&&$.map(({field:k,isVisibleFlag:H,ui:U})=>U??(0,u.jsx)(n,{field:k,isVisible:!1,onToggleVisibility:()=>{M({...P,[H]:!0})},canMove:!1},k.id)),z.map(k=>(0,u.jsx)(m,{field:k,view:P,onChangeView:M},k.id))]})})]})]})}function A({title:S,description:P,children:I}){return(0,u.jsxs)(s.__experimentalGrid,{columns:12,className:"dataviews-settings-section",gap:4,children:[(0,u.jsxs)("div",{className:"dataviews-settings-section__sidebar",children:[(0,u.jsx)(s.__experimentalHeading,{level:2,className:"dataviews-settings-section__title",children:S}),P&&(0,u.jsx)(s.__experimentalText,{variant:"muted",className:"dataviews-settings-section__description",children:P})]}),(0,u.jsx)(s.__experimentalGrid,{columns:8,gap:4,className:"dataviews-settings-section__content",children:I})]})}function F(){const{view:S}=(0,l.useContext)(f.default),P=(0,_.useInstanceId)(D,"dataviews-view-config-dropdown"),I=w.VIEW_LAYOUTS.find(M=>M.type===S.type);return(0,u.jsx)(s.Dropdown,{expandOnMobile:!0,popoverProps:{...x,id:P},renderToggle:({onToggle:M,isOpen:B})=>(0,u.jsx)(s.Button,{size:"compact",icon:j.cog,label:(0,t._x)("View options","View is used as a noun"),onClick:M,"aria-expanded":B?"true":"false","aria-controls":P}),renderContent:()=>(0,u.jsx)(s.__experimentalDropdownContentWrapper,{paddingSize:"medium",className:"dataviews-config__popover-content-wrapper",children:(0,u.jsxs)(s.__experimentalVStack,{className:"dataviews-view-config",spacing:6,children:[(0,u.jsxs)(A,{title:(0,t.__)("Appearance"),children:[(0,u.jsxs)(s.__experimentalHStack,{expanded:!0,className:"is-divided-in-two",children:[(0,u.jsx)(b,{}),(0,u.jsx)(g,{})]}),!!I?.viewConfigOptions&&(0,u.jsx)(I.viewConfigOptions,{}),(0,u.jsx)(r,{})]}),(0,u.jsx)(A,{title:(0,t.__)("Properties"),children:(0,u.jsx)(C,{})})]})})})}function D({defaultLayouts:S={list:{},grid:{},table:{}}}){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(O,{defaultLayouts:S}),(0,u.jsx)(F,{})]})}const N=(0,l.memo)(D);var V=a.default=N},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews/index.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=g;var p=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+compose@7.25.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),l=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),j=R(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-filters/index.js")),d=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-layout/index.js")),_=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-footer/index.js")),i=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-search/index.js")),w=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-view-config/index.js")),f=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/normalize-fields.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function u(h){if(typeof WeakMap!="function")return null;var r=new WeakMap,v=new WeakMap;return(u=function(n){return n?v:r})(h)}function R(h,r){if(!r&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var v=u(r);if(v&&v.has(h))return v.get(h);var n={__proto__:null},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in h)if(y!=="default"&&{}.hasOwnProperty.call(h,y)){var C=m?Object.getOwnPropertyDescriptor(h,y):null;C&&(C.get||C.set)?Object.defineProperty(n,y,C):n[y]=h[y]}return n.default=h,v&&v.set(h,n),n}const x=h=>h.id,O=()=>!0,b=[];function g({view:h,onChangeView:r,fields:v,search:n=!0,searchLabel:m=void 0,actions:y=b,data:C,getItemId:A=x,getItemLevel:F,isLoading:D=!1,paginationInfo:N,defaultLayouts:V,selection:S,onChangeSelection:P,onClickItem:I,isItemClickable:M=O,header:B}){const[T,z]=(0,s.useState)(0),E=(0,t.useResizeObserver)(q=>{z(q[0].borderBoxSize[0].inlineSize)},{box:"border-box"}),[W,Y]=(0,s.useState)([]),K=S===void 0||P===void 0,X=K?W:S,[G,J]=(0,s.useState)(null);function Z(q){const ee=typeof q=="function"?q(X):q;K&&Y(ee),P&&P(ee)}const Q=(0,s.useMemo)(()=>(0,f.normalizeFields)(v),[v]),$=(0,s.useMemo)(()=>X.filter(q=>C.some(ee=>A(ee)===q)),[X,C,A]),k=(0,j.useFilters)(Q,h),[H,U]=(0,s.useState)(()=>(k||[]).some(q=>q.isPrimary));return(0,o.jsx)(l.default.Provider,{value:{view:h,onChangeView:r,fields:Q,actions:y,data:C,isLoading:D,paginationInfo:N,selection:$,onChangeSelection:Z,openedFilter:G,setOpenedFilter:J,getItemId:A,getItemLevel:F,isItemClickable:M,onClickItem:I,containerWidth:T},children:(0,o.jsxs)("div",{className:"dataviews-wrapper",ref:E,children:[(0,o.jsxs)(p.__experimentalHStack,{alignment:"top",justify:"space-between",className:"dataviews__view-actions",spacing:1,children:[(0,o.jsxs)(p.__experimentalHStack,{justify:"start",expanded:!1,className:"dataviews__search",children:[n&&(0,o.jsx)(i.default,{label:m}),(0,o.jsx)(j.FiltersToggle,{filters:k,view:h,onChangeView:r,setOpenedFilter:J,setIsShowingFilter:U,isShowingFilter:H})]}),(0,o.jsxs)(p.__experimentalHStack,{spacing:1,expanded:!1,style:{flexShrink:0},children:[(0,o.jsx)(w.default,{defaultLayouts:V}),B]})]}),H&&(0,o.jsx)(j.default,{}),(0,o.jsx)(d.default,{}),(0,o.jsx)(_.default,{})]})})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/constants.js":(L,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.sortValues=a.sortLabels=a.sortIcons=a.sortArrows=a.SORTING_DIRECTIONS=a.OPERATOR_IS_NOT_ALL=a.OPERATOR_IS_NOT=a.OPERATOR_IS_NONE=a.OPERATOR_IS_ANY=a.OPERATOR_IS_ALL=a.OPERATOR_IS=a.OPERATORS=a.LAYOUT_TABLE=a.LAYOUT_LIST=a.LAYOUT_GRID=a.ALL_OPERATORS=void 0;var c=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js");const s=a.OPERATOR_IS="is",t=a.OPERATOR_IS_NOT="isNot",l=a.OPERATOR_IS_ANY="isAny",j=a.OPERATOR_IS_NONE="isNone",d=a.OPERATOR_IS_ALL="isAll",_=a.OPERATOR_IS_NOT_ALL="isNotAll",i=a.ALL_OPERATORS=[s,t,l,j,d,_],w=a.OPERATORS={[s]:{key:"is-filter",label:(0,c.__)("Is")},[t]:{key:"is-not-filter",label:(0,c.__)("Is not")},[l]:{key:"is-any-filter",label:(0,c.__)("Is any")},[j]:{key:"is-none-filter",label:(0,c.__)("Is none")},[d]:{key:"is-all-filter",label:(0,c.__)("Is all")},[_]:{key:"is-not-all-filter",label:(0,c.__)("Is not all")}},f=a.SORTING_DIRECTIONS=["asc","desc"],o=a.sortArrows={asc:"\u2191",desc:"\u2193"},u=a.sortValues={asc:"ascending",desc:"descending"},R=a.sortLabels={asc:(0,c.__)("Sort ascending"),desc:(0,c.__)("Sort descending")},x=a.sortIcons={asc:p.arrowUp,desc:p.arrowDown},O=a.LAYOUT_TABLE="table",b=a.LAYOUT_GRID="grid",g=a.LAYOUT_LIST="list"},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataform-controls/datetime.js":(L,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=t;var c=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({data:l,field:j,onChange:d,hideLabelFromVision:_}){const{id:i,label:w}=j,f=j.getValue({item:l}),o=(0,p.useCallback)(u=>d({[i]:u}),[i,d]);return(0,s.jsxs)("fieldset",{className:"dataviews-controls__datetime",children:[!_&&(0,s.jsx)(c.BaseControl.VisualLabel,{as:"legend",children:w}),_&&(0,s.jsx)(c.VisuallyHidden,{as:"legend",children:w}),(0,s.jsx)(c.TimePicker,{currentTime:f,onChange:o,hideLabelFromVision:!0})]})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataform-controls/index.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.getControl=_,a.getControlByType=i;var p=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataform-controls/datetime.js")),s=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataform-controls/integer.js")),t=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataform-controls/radio.js")),l=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataform-controls/select.js")),j=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataform-controls/text.js"));const d={datetime:p.default,integer:s.default,radio:t.default,select:l.default,text:j.default};function _(w,f){return typeof w.Edit=="function"?w.Edit:typeof w.Edit=="string"?i(w.Edit):w.elements?i("select"):typeof f.Edit=="string"?i(f.Edit):f.Edit}function i(w){if(Object.keys(d).includes(w))return d[w];throw"Control "+w+" not found"}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataform-controls/integer.js":(L,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=t;var c=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({data:l,field:j,onChange:d,hideLabelFromVision:_}){var i;const{id:w,label:f,description:o}=j,u=(i=j.getValue({item:l}))!==null&&i!==void 0?i:"",R=(0,p.useCallback)(x=>d({[w]:Number(x)}),[w,d]);return(0,s.jsx)(c.__experimentalNumberControl,{label:f,help:o,value:u,onChange:R,__next40pxDefaultSize:!0,hideLabelFromVision:_})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataform-controls/radio.js":(L,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=t;var c=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({data:l,field:j,onChange:d,hideLabelFromVision:_}){const{id:i,label:w}=j,f=j.getValue({item:l}),o=(0,p.useCallback)(u=>d({[i]:u}),[i,d]);return j.elements?(0,s.jsx)(c.RadioControl,{label:w,onChange:o,options:j.elements,selected:f,hideLabelFromVision:_}):null}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataform-controls/select.js":(L,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=l;var c=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function l({data:j,field:d,onChange:_,hideLabelFromVision:i}){var w,f;const{id:o,label:u}=d,R=(w=d.getValue({item:j}))!==null&&w!==void 0?w:"",x=(0,p.useCallback)(b=>_({[o]:b}),[o,_]),O=[{label:(0,s.__)("Select item"),value:""},...(f=d?.elements)!==null&&f!==void 0?f:[]];return(0,t.jsx)(c.SelectControl,{label:u,value:R,options:O,onChange:x,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:i})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataform-controls/text.js":(L,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=t;var c=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({data:l,field:j,onChange:d,hideLabelFromVision:_}){const{id:i,label:w,placeholder:f}=j,o=j.getValue({item:l}),u=(0,p.useCallback)(R=>d({[i]:R}),[i,d]);return(0,s.jsx)(c.TextControl,{label:w,placeholder:f,value:o??"",onChange:u,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:_})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataforms-layouts/data-form-layout.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.DataFormLayout=i;var p=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataforms-layouts/index.js"),l=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataform-context/index.js")),j=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataforms-layouts/is-combined-field.js"),d=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/normalize-form-fields.js")),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function i({data:w,form:f,onChange:o,children:u}){const{fields:R}=(0,s.useContext)(l.default);function x(b){const g=typeof b=="string"?b:b.id;return R.find(h=>h.id===g)}const O=(0,s.useMemo)(()=>(0,d.default)(f),[f]);return(0,_.jsx)(p.__experimentalVStack,{spacing:2,children:O.map(b=>{const g=(0,t.getFormFieldLayout)(b.layout)?.component;if(!g)return null;const h=(0,j.isCombinedField)(b)?void 0:x(b);return h&&h.isVisible&&!h.isVisible(w)?null:u?u(g,b):(0,_.jsx)(g,{data:w,field:b,onChange:o},b.id)})})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataforms-layouts/index.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.getFormFieldLayout=l;var p=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataforms-layouts/regular/index.js")),s=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataforms-layouts/panel/index.js"));const t=[{type:"regular",component:p.default},{type:"panel",component:s.default}];function l(j){return t.find(d=>d.type===j)}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataforms-layouts/is-combined-field.js":(L,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.isCombinedField=e;function e(c){return c.children!==void 0}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataforms-layouts/panel/index.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=o;var p=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),j=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataform-context/index.js")),d=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataforms-layouts/data-form-layout.js"),_=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataforms-layouts/is-combined-field.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function w({title:u,onClose:R}){return(0,i.jsx)(p.__experimentalVStack,{className:"dataforms-layouts-panel__dropdown-header",spacing:4,children:(0,i.jsxs)(p.__experimentalHStack,{alignment:"center",children:[u&&(0,i.jsx)(p.__experimentalHeading,{level:2,size:13,children:u}),(0,i.jsx)(p.__experimentalSpacer,{}),R&&(0,i.jsx)(p.Button,{label:(0,s.__)("Close"),icon:l.closeSmall,onClick:R,size:"small"})]})})}function f({fieldDefinition:u,popoverAnchor:R,labelPosition:x="side",data:O,onChange:b,field:g}){const h=(0,_.isCombinedField)(g)?g.label:u?.label,r=(0,t.useMemo)(()=>(0,_.isCombinedField)(g)?{type:"regular",fields:g.children.map(n=>typeof n=="string"?{id:n}:n)}:{type:"regular",fields:[{id:g.id}]},[g]),v=(0,t.useMemo)(()=>({anchor:R,placement:"left-start",offset:36,shift:!0}),[R]);return(0,i.jsx)(p.Dropdown,{contentClassName:"dataforms-layouts-panel__field-dropdown",popoverProps:v,focusOnMount:!0,toggleProps:{size:"compact",variant:"tertiary",tooltipPosition:"middle left"},renderToggle:({isOpen:n,onToggle:m})=>(0,i.jsx)(p.Button,{className:"dataforms-layouts-panel__field-control",size:"compact",variant:["none","top"].includes(x)?"link":"tertiary","aria-expanded":n,"aria-label":(0,s.sprintf)((0,s._x)("Edit %s","field"),h),onClick:m,children:(0,i.jsx)(u.render,{item:O})}),renderContent:({onClose:n})=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(w,{title:h,onClose:n}),(0,i.jsx)(d.DataFormLayout,{data:O,form:r,onChange:b,children:(m,y)=>{var C;return(0,i.jsx)(m,{data:O,field:y,onChange:b,hideLabelFromVision:((C=r?.fields)!==null&&C!==void 0?C:[]).length<2},y.id)}})]})})}function o({data:u,field:R,onChange:x}){var O;const{fields:b}=(0,t.useContext)(j.default),g=b.find(m=>{if((0,_.isCombinedField)(R)){const y=R.children.filter(A=>typeof A=="string"||!(0,_.isCombinedField)(A)),C=typeof y[0]=="string"?y[0]:y[0].id;return m.id===C}return m.id===R.id}),h=(O=R.labelPosition)!==null&&O!==void 0?O:"side",[r,v]=(0,t.useState)(null);if(!g)return null;const n=(0,_.isCombinedField)(R)?R.label:g?.label;return h==="top"?(0,i.jsxs)(p.__experimentalVStack,{className:"dataforms-layouts-panel__field",spacing:0,children:[(0,i.jsx)("div",{className:"dataforms-layouts-panel__field-label",style:{paddingBottom:0},children:n}),(0,i.jsx)("div",{className:"dataforms-layouts-panel__field-control",children:(0,i.jsx)(f,{field:R,popoverAnchor:r,fieldDefinition:g,data:u,onChange:x,labelPosition:h})})]}):h==="none"?(0,i.jsx)("div",{className:"dataforms-layouts-panel__field",children:(0,i.jsx)(f,{field:R,popoverAnchor:r,fieldDefinition:g,data:u,onChange:x,labelPosition:h})}):(0,i.jsxs)(p.__experimentalHStack,{ref:v,className:"dataforms-layouts-panel__field",children:[(0,i.jsx)("div",{className:"dataforms-layouts-panel__field-label",children:n}),(0,i.jsx)("div",{className:"dataforms-layouts-panel__field-control",children:(0,i.jsx)(f,{field:R,popoverAnchor:r,fieldDefinition:g,data:u,onChange:x,labelPosition:h})})]})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataforms-layouts/regular/index.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=i;var p=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataform-context/index.js")),l=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataforms-layouts/data-form-layout.js"),j=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataforms-layouts/is-combined-field.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function _({title:w}){return(0,d.jsx)(s.__experimentalVStack,{className:"dataforms-layouts-regular__header",spacing:4,children:(0,d.jsxs)(s.__experimentalHStack,{alignment:"center",children:[(0,d.jsx)(s.__experimentalHeading,{level:2,size:13,children:w}),(0,d.jsx)(s.__experimentalSpacer,{})]})})}function i({data:w,field:f,onChange:o,hideLabelFromVision:u}){var R;const{fields:x}=(0,p.useContext)(t.default),O=(0,p.useMemo)(()=>(0,j.isCombinedField)(f)?{fields:f.children.map(h=>typeof h=="string"?{id:h}:h),type:"regular"}:{type:"regular",fields:[]},[f]);if((0,j.isCombinedField)(f))return(0,d.jsxs)(d.Fragment,{children:[!u&&f.label&&(0,d.jsx)(_,{title:f.label}),(0,d.jsx)(l.DataFormLayout,{data:w,form:O,onChange:o})]});const b=(R=f.labelPosition)!==null&&R!==void 0?R:"top",g=x.find(h=>h.id===f.id);return g?b==="side"?(0,d.jsxs)(s.__experimentalHStack,{className:"dataforms-layouts-regular__field",children:[(0,d.jsx)("div",{className:"dataforms-layouts-regular__field-label",children:g.label}),(0,d.jsx)("div",{className:"dataforms-layouts-regular__field-control",children:(0,d.jsx)(g.Edit,{data:w,field:g,onChange:o,hideLabelFromVision:!0},g.id)})]}):(0,d.jsx)("div",{className:"dataforms-layouts-regular__field",children:(0,d.jsx)(g.Edit,{data:w,field:g,onChange:o,hideLabelFromVision:b==="none"?!0:u})}):null}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataviews-layouts/grid/index.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=x;var p=c(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),s=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+compose@7.25.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),j=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/lock-unlock.js"),d=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-item-actions/index.js")),_=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-selection-checkbox/index.js")),i=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-bulk-actions/index.js"),w=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataviews-layouts/utils/get-clickable-item-props.js")),f=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataviews-layouts/grid/preview-size-picker.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Badge:u}=(0,j.unlock)(s.privateApis);function R({view:O,selection:b,onChangeSelection:g,onClickItem:h,isItemClickable:r,getItemId:v,item:n,actions:m,mediaField:y,titleField:C,descriptionField:A,regularFields:F,badgeFields:D,hasBulkActions:N}){const{showTitle:V=!0,showMedia:S=!0,showDescription:P=!0}=O,I=(0,i.useHasAPossibleBulkAction)(m,n),M=v(n),B=(0,l.useInstanceId)(R),T=b.includes(M),z=y?.render?(0,o.jsx)(y.render,{item:n}):null,E=V&&C?.render?(0,o.jsx)(C.render,{item:n}):null,W=(0,w.default)({item:n,isItemClickable:r,onClickItem:h,className:"dataviews-view-grid__media"}),Y=(0,w.default)({item:n,isItemClickable:r,onClickItem:h,className:"dataviews-view-grid__title-field dataviews-title-field"});let K,X;return r(n)&&h&&(E?(K={"aria-labelledby":`dataviews-view-grid__title-field-${B}`},X={id:`dataviews-view-grid__title-field-${B}`}):K={"aria-label":(0,t.__)("Navigate to item")}),(0,o.jsxs)(s.__experimentalVStack,{spacing:0,className:(0,p.default)("dataviews-view-grid__card",{"is-selected":I&&T}),onClickCapture:G=>{if(G.ctrlKey||G.metaKey){if(G.stopPropagation(),G.preventDefault(),!I)return;g(b.includes(M)?b.filter(J=>M!==J):[...b,M])}},children:[S&&z&&(0,o.jsx)("div",{...W,...K,children:z}),N&&S&&z&&(0,o.jsx)(_.default,{item:n,selection:b,onChangeSelection:g,getItemId:v,titleField:C,disabled:!I}),(0,o.jsxs)(s.__experimentalHStack,{justify:"space-between",className:"dataviews-view-grid__title-actions",children:[(0,o.jsx)("div",{...Y,...X,children:E}),!!m?.length&&(0,o.jsx)(d.default,{item:n,actions:m,isCompact:!0})]}),(0,o.jsxs)(s.__experimentalVStack,{spacing:1,children:[P&&A?.render&&(0,o.jsx)(A.render,{item:n}),!!D?.length&&(0,o.jsx)(s.__experimentalHStack,{className:"dataviews-view-grid__badge-fields",spacing:2,wrap:!0,alignment:"top",justify:"flex-start",children:D.map(G=>(0,o.jsx)(u,{className:"dataviews-view-grid__field-value",children:(0,o.jsx)(G.render,{item:n})},G.id))}),!!F?.length&&(0,o.jsx)(s.__experimentalVStack,{className:"dataviews-view-grid__fields",spacing:1,children:F.map(G=>(0,o.jsx)(s.Flex,{className:"dataviews-view-grid__field",gap:1,justify:"flex-start",expanded:!0,style:{height:"auto"},direction:"row",children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.FlexItem,{className:"dataviews-view-grid__field-name",children:G.header}),(0,o.jsx)(s.FlexItem,{className:"dataviews-view-grid__field-value",style:{maxHeight:"none"},children:(0,o.jsx)(G.render,{item:n})})]})},G.id))})]})]},M)}function x({actions:O,data:b,fields:g,getItemId:h,isLoading:r,onChangeSelection:v,onClickItem:n,isItemClickable:m,selection:y,view:C}){var A;const F=g.find(E=>E.id===C?.titleField),D=g.find(E=>E.id===C?.mediaField),N=g.find(E=>E.id===C?.descriptionField),V=(A=C.fields)!==null&&A!==void 0?A:[],{regularFields:S,badgeFields:P}=V.reduce((E,W)=>{const Y=g.find(X=>X.id===W);if(!Y)return E;const K=C.layout?.badgeFields?.includes(W)?"badgeFields":"regularFields";return E[K].push(Y),E},{regularFields:[],badgeFields:[]}),I=!!b?.length,M=(0,f.useUpdatedPreviewSizeOnViewportChange)(),B=(0,i.useSomeItemHasAPossibleBulkAction)(O,b),T=M||C.layout?.previewSize,z=T?{gridTemplateColumns:`repeat(${T}, minmax(0, 1fr))`}:{};return(0,o.jsxs)(o.Fragment,{children:[I&&(0,o.jsx)(s.__experimentalGrid,{gap:8,columns:2,alignment:"top",className:"dataviews-view-grid",style:z,"aria-busy":r,children:b.map(E=>(0,o.jsx)(R,{view:C,selection:y,onChangeSelection:v,onClickItem:n,isItemClickable:m,getItemId:h,item:E,actions:O,mediaField:D,titleField:F,descriptionField:N,regularFields:S,badgeFields:P,hasBulkActions:B},h(E)))}),!I&&(0,o.jsx)("div",{className:(0,p.default)({"dataviews-loading":r,"dataviews-no-results":!r}),children:(0,o.jsx)("p",{children:r?(0,o.jsx)(s.Spinner,{}):(0,t.__)("No results")})})]})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataviews-layouts/grid/preview-size-picker.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=f,a.useUpdatedPreviewSizeOnViewportChange=w;var p=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),l=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),j=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d={xhuge:{min:3,max:6,default:5},huge:{min:2,max:4,default:4},xlarge:{min:2,max:3,default:3},large:{min:1,max:2,default:2},mobile:{min:1,max:2,default:2}},_={xhuge:1520,huge:1140,xlarge:780,large:480,mobile:0};function i(){const o=(0,t.useContext)(l.default).containerWidth;for(const[u,R]of Object.entries(_))if(o>=R)return u;return"mobile"}function w(){const o=(0,t.useContext)(l.default).view,u=i();return(0,t.useMemo)(()=>{const R=o.layout?.previewSize;let x;if(!R)return;const O=d[u];return R<O.min&&(x=O.min),R>O.max&&(x=O.max),x},[u,o])}function f(){const o=i(),u=(0,t.useContext)(l.default),R=u.view,x=d[o],O=R.layout?.previewSize||x.default,b=(0,t.useMemo)(()=>Array.from({length:x.max-x.min+1},(g,h)=>({value:x.min+h})),[x]);return o==="mobile"?null:(0,j.jsx)(p.RangeControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,showTooltip:!1,label:(0,s.__)("Preview size"),value:x.max+x.min-O,marks:b,min:x.min,max:x.max,withInputField:!1,onChange:(g=0)=>{u.onChangeView({...R,layout:{...R.layout,previewSize:x.max+x.min-g}})},step:1})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataviews-layouts/index.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.VIEW_LAYOUTS=void 0;var p=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),t=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/index.js")),l=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataviews-layouts/grid/index.js")),j=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataviews-layouts/list/index.js")),d=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/constants.js"),_=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataviews-layouts/grid/preview-size-picker.js")),i=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/density-picker.js"));const w=a.VIEW_LAYOUTS=[{type:d.LAYOUT_TABLE,label:(0,p.__)("Table"),component:t.default,icon:s.blockTable,viewConfigOptions:i.default},{type:d.LAYOUT_GRID,label:(0,p.__)("Grid"),component:l.default,icon:s.category,viewConfigOptions:_.default},{type:d.LAYOUT_LIST,label:(0,p.__)("List"),component:j.default,icon:(0,p.isRTL)()?s.formatListBulletsRTL:s.formatListBullets}]},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataviews-layouts/list/index.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=h;var p=c(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),s=e("../../../node_modules/.pnpm/@wordpress+compose@7.25.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),j=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+data@10.25.0_react@18.3.1/node_modules/@wordpress/data/build-module/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/lock-unlock.js"),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-item-actions/index.js"),f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Menu:o}=(0,i.unlock)(t.privateApis);function u(r){return`${r}-item-wrapper`}function R(r,v){return`${r}-primary-action-${v}`}function x(r){return`${r}-dropdown`}function O({idPrefix:r,primaryAction:v,item:n}){const m=(0,_.useRegistry)(),[y,C]=(0,l.useState)(!1),A=R(r,v.id),F=typeof v.label=="string"?v.label:v.label([n]);return"RenderModal"in v?(0,f.jsx)("div",{role:"gridcell",children:(0,f.jsx)(t.Composite.Item,{id:A,render:(0,f.jsx)(t.Button,{label:F,disabled:!!v.disabled,accessibleWhenDisabled:!0,icon:v.icon,isDestructive:v.isDestructive,size:"small",onClick:()=>C(!0)}),children:y&&(0,f.jsx)(w.ActionModal,{action:v,items:[n],closeModal:()=>C(!1)})})},v.id):(0,f.jsx)("div",{role:"gridcell",children:(0,f.jsx)(t.Composite.Item,{id:A,render:(0,f.jsx)(t.Button,{label:F,disabled:!!v.disabled,accessibleWhenDisabled:!0,icon:v.icon,isDestructive:v.isDestructive,size:"small",onClick:()=>{v.callback([n],{registry:m})}})})},v.id)}function b({view:r,actions:v,idPrefix:n,isSelected:m,item:y,titleField:C,mediaField:A,descriptionField:F,onSelect:D,otherFields:N,onDropdownTriggerKeyDown:V}){const{showTitle:S=!0,showMedia:P=!0,showDescription:I=!0}=r,M=(0,l.useRef)(null),B=`${n}-label`,T=`${n}-description`,z=(0,_.useRegistry)(),[E,W]=(0,l.useState)(!1),[Y,K]=(0,l.useState)(null),X=({type:H})=>{W(H==="mouseenter")};(0,l.useEffect)(()=>{m&&M.current?.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})},[m]);const{primaryAction:G,eligibleActions:J}=(0,l.useMemo)(()=>{const H=v.filter(q=>!q.isEligible||q.isEligible(y));return{primaryAction:H.filter(q=>q.isPrimary&&!!q.icon)[0],eligibleActions:H}},[v,y]),Z=G&&v.length===1,Q=P&&A?.render?(0,f.jsx)("div",{className:"dataviews-view-list__media-wrapper",children:(0,f.jsx)(A.render,{item:y})}):null,$=S&&C?.render?(0,f.jsx)(C.render,{item:y}):null,k=J?.length>0&&(0,f.jsxs)(t.__experimentalHStack,{spacing:3,className:"dataviews-view-list__item-actions",children:[G&&(0,f.jsx)(O,{idPrefix:n,primaryAction:G,item:y}),!Z&&(0,f.jsxs)("div",{role:"gridcell",children:[(0,f.jsxs)(o,{placement:"bottom-end",children:[(0,f.jsx)(o.TriggerButton,{render:(0,f.jsx)(t.Composite.Item,{id:x(n),render:(0,f.jsx)(t.Button,{size:"small",icon:d.moreVertical,label:(0,j.__)("Actions"),accessibleWhenDisabled:!0,disabled:!v.length,onKeyDown:V})})}),(0,f.jsx)(o.Popover,{children:(0,f.jsx)(w.ActionsMenuGroup,{actions:J,item:y,registry:z,setActiveModalAction:K})})]}),!!Y&&(0,f.jsx)(w.ActionModal,{action:Y,items:[y],closeModal:()=>K(null)})]})]});return(0,f.jsx)(t.Composite.Row,{ref:M,render:(0,f.jsx)("div",{}),role:"row",className:(0,p.default)({"is-selected":m,"is-hovered":E}),onMouseEnter:X,onMouseLeave:X,children:(0,f.jsxs)(t.__experimentalHStack,{className:"dataviews-view-list__item-wrapper",spacing:0,children:[(0,f.jsx)("div",{role:"gridcell",children:(0,f.jsx)(t.Composite.Item,{id:u(n),"aria-pressed":m,"aria-labelledby":B,"aria-describedby":T,className:"dataviews-view-list__item",onClick:()=>D(y)})}),(0,f.jsxs)(t.__experimentalHStack,{spacing:3,justify:"start",alignment:"flex-start",children:[Q,(0,f.jsxs)(t.__experimentalVStack,{spacing:1,className:"dataviews-view-list__field-wrapper",children:[(0,f.jsxs)(t.__experimentalHStack,{spacing:0,children:[(0,f.jsx)("div",{className:"dataviews-title-field",id:B,children:$}),k]}),I&&F?.render&&(0,f.jsx)("div",{className:"dataviews-view-list__field",children:(0,f.jsx)(F.render,{item:y})}),(0,f.jsx)("div",{className:"dataviews-view-list__fields",id:T,children:N.map(H=>(0,f.jsxs)("div",{className:"dataviews-view-list__field",children:[(0,f.jsx)(t.VisuallyHidden,{as:"span",className:"dataviews-view-list__field-label",children:H.label}),(0,f.jsx)("span",{className:"dataviews-view-list__field-value",children:(0,f.jsx)(H.render,{item:y})})]},H.id))})]})]})]})})}function g(r){return!!r}function h(r){var v;const{actions:n,data:m,fields:y,getItemId:C,isLoading:A,onChangeSelection:F,selection:D,view:N}=r,V=(0,s.useInstanceId)(h,"view-list"),S=m?.findLast($=>D.includes(C($))),P=y.find($=>$.id===N.titleField),I=y.find($=>$.id===N.mediaField),M=y.find($=>$.id===N.descriptionField),B=((v=N?.fields)!==null&&v!==void 0?v:[]).map($=>y.find(k=>$===k.id)).filter(g),T=$=>F([C($)]),z=(0,l.useCallback)($=>`${V}-${C($)}`,[V,C]),E=(0,l.useCallback)(($,k)=>k.startsWith(z($)),[z]),[W,Y]=(0,l.useState)(void 0);(0,l.useEffect)(()=>{S&&Y(u(z(S)))},[S,z]);const K=m.findIndex($=>E($,W??"")),X=(0,s.usePrevious)(K),G=K!==-1,J=(0,l.useCallback)(($,k)=>{const H=Math.min(m.length-1,Math.max(0,$));if(!m[H])return;const U=z(m[H]),q=k(U);Y(q),document.getElementById(q)?.focus()},[m,z]);(0,l.useEffect)(()=>{!G&&(X!==void 0&&X!==-1)&&J(X,u)},[G,J,X]);const Z=(0,l.useCallback)($=>{$.key==="ArrowDown"&&($.preventDefault(),J(K+1,x)),$.key==="ArrowUp"&&($.preventDefault(),J(K-1,x))},[J,K]),Q=m?.length;return Q?(0,f.jsx)(t.Composite,{id:V,render:(0,f.jsx)("div",{}),className:"dataviews-view-list",role:"grid",activeId:W,setActiveId:Y,children:m.map($=>{const k=z($);return(0,f.jsx)(b,{view:N,idPrefix:k,actions:n,item:$,isSelected:$===S,onSelect:T,mediaField:I,titleField:P,descriptionField:M,otherFields:B,onDropdownTriggerKeyDown:Z},k)})}):(0,f.jsx)("div",{className:(0,p.default)({"dataviews-loading":A,"dataviews-no-results":!Q&&!A}),children:!Q&&(0,f.jsx)("p",{children:A?(0,f.jsx)(t.Spinner,{}):(0,j.__)("No results")})})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/column-header-menu.js":(L,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/lock-unlock.js"),j=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/utils.js"),d=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/constants.js"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Menu:i}=(0,l.unlock)(s.privateApis);function w({children:R}){return t.Children.toArray(R).filter(Boolean).map((x,O)=>(0,_.jsxs)(t.Fragment,{children:[O>0&&(0,_.jsx)(i.Separator,{}),x]},O))}const o=(0,t.forwardRef)(function({fieldId:x,view:O,fields:b,onChangeView:g,onHide:h,setOpenedFilter:r,canMove:v=!0},n){var m;const y=(m=O.fields)!==null&&m!==void 0?m:[],C=y?.indexOf(x),A=O.sort?.field===x;let F=!1,D=!1,N=!1,V=[];const S=b.find(I=>I.id===x);if(!S)return null;F=S.enableHiding!==!1,D=S.enableSorting!==!1;const P=S.header;return V=(0,j.sanitizeOperators)(S),N=!O.filters?.some(I=>x===I.field)&&!!S.elements?.length&&!!V.length&&!S.filterBy?.isPrimary,(0,_.jsxs)(i,{children:[(0,_.jsxs)(i.TriggerButton,{render:(0,_.jsx)(s.Button,{size:"compact",className:"dataviews-view-table-header-button",ref:n,variant:"tertiary"}),children:[P,O.sort&&A&&(0,_.jsx)("span",{"aria-hidden":"true",children:d.sortArrows[O.sort.direction]})]}),(0,_.jsx)(i.Popover,{style:{minWidth:"240px"},children:(0,_.jsxs)(w,{children:[D&&(0,_.jsx)(i.Group,{children:d.SORTING_DIRECTIONS.map(I=>{const M=O.sort&&A&&O.sort.direction===I,B=`${x}-${I}`;return(0,_.jsx)(i.RadioItem,{name:"view-table-sorting",value:B,checked:M,onChange:()=>{g({...O,sort:{field:x,direction:I},showLevels:!1})},children:(0,_.jsx)(i.ItemLabel,{children:d.sortLabels[I]})},B)})}),N&&(0,_.jsx)(i.Group,{children:(0,_.jsx)(i.Item,{prefix:(0,_.jsx)(s.Icon,{icon:p.funnel}),onClick:()=>{r(x),g({...O,page:1,filters:[...O.filters||[],{field:x,value:void 0,operator:V[0]}]})},children:(0,_.jsx)(i.ItemLabel,{children:(0,c.__)("Add filter")})})}),(v||F)&&S&&(0,_.jsxs)(i.Group,{children:[v&&(0,_.jsx)(i.Item,{prefix:(0,_.jsx)(s.Icon,{icon:p.arrowLeft}),disabled:C<1,onClick:()=>{var I;g({...O,fields:[...(I=y.slice(0,C-1))!==null&&I!==void 0?I:[],x,y[C-1],...y.slice(C+1)]})},children:(0,_.jsx)(i.ItemLabel,{children:(0,c.__)("Move left")})}),v&&(0,_.jsx)(i.Item,{prefix:(0,_.jsx)(s.Icon,{icon:p.arrowRight}),disabled:C>=y.length-1,onClick:()=>{var I;g({...O,fields:[...(I=y.slice(0,C))!==null&&I!==void 0?I:[],y[C+1],x,...y.slice(C+2)]})},children:(0,_.jsx)(i.ItemLabel,{children:(0,c.__)("Move right")})}),F&&S&&(0,_.jsx)(i.Item,{prefix:(0,_.jsx)(s.Icon,{icon:p.unseen}),onClick:()=>{h(S),g({...O,fields:y.filter(I=>I!==x)})},children:(0,_.jsx)(i.ItemLabel,{children:(0,c.__)("Hide column")})})]})]})})]})});var u=a.default=o},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/column-primary.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var p=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataviews-layouts/utils/get-clickable-item-props.js")),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function l({item:d,level:_,titleField:i,mediaField:w,descriptionField:f,onClickItem:o,isItemClickable:u}){const R=(0,s.default)({item:d,isItemClickable:u,onClickItem:o,className:"dataviews-view-table__cell-content-wrapper dataviews-title-field"});return(0,t.jsxs)(p.__experimentalHStack,{spacing:3,justify:"flex-start",children:[w&&(0,t.jsx)("div",{className:"dataviews-view-table__cell-content-wrapper dataviews-column-primary__media",children:(0,t.jsx)(w.render,{item:d})}),(0,t.jsxs)(p.__experimentalVStack,{spacing:0,children:[i&&(0,t.jsxs)("div",{...R,children:[_!==void 0&&(0,t.jsxs)("span",{className:"dataviews-view-table__level",children:["\u2014".repeat(_),"\xA0"]}),(0,t.jsx)(i.render,{item:d})]}),f&&(0,t.jsx)(f.render,{item:d})]})]})}var j=a.default=l},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/density-picker.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=d;var p=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),l=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),j=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function d(){const _=(0,t.useContext)(l.default),i=_.view;return(0,j.jsxs)(p.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,size:"__unstable-large",label:(0,s.__)("Density"),value:i.layout?.density||"balanced",onChange:w=>{_.onChangeView({...i,layout:{...i.layout,density:w}})},isBlock:!0,children:[(0,j.jsx)(p.__experimentalToggleGroupControlOption,{value:"comfortable",label:(0,s._x)("Comfortable","Density option for DataView layout")},"comfortable"),(0,j.jsx)(p.__experimentalToggleGroupControlOption,{value:"balanced",label:(0,s._x)("Balanced","Density option for DataView layout")},"balanced"),(0,j.jsx)(p.__experimentalToggleGroupControlOption,{value:"compact",label:(0,s._x)("Compact","Density option for DataView layout")},"compact")]})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/index.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var p=c(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),s=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/index.js"),j=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-selection-checkbox/index.js")),d=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-item-actions/index.js")),_=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/constants.js"),i=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews-bulk-actions/index.js"),w=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/column-header-menu.js")),f=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/column-primary.js")),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function u({item:b,fields:g,column:h}){const r=g.find(v=>v.id===h);return r?(0,o.jsx)("div",{className:"dataviews-view-table__cell-content-wrapper",children:(0,o.jsx)(r.render,{item:b})}):null}function R({hasBulkActions:b,item:g,level:h,actions:r,fields:v,id:n,view:m,titleField:y,mediaField:C,descriptionField:A,selection:F,getItemId:D,isItemClickable:N,onClickItem:V,onChangeSelection:S}){var P;const I=(0,i.useHasAPossibleBulkAction)(r,g),M=I&&F.includes(n),[B,T]=(0,l.useState)(!1),{showTitle:z=!0,showMedia:E=!0,showDescription:W=!0}=m,Y=()=>{T(!0)},K=()=>{T(!1)},X=(0,l.useRef)(!1),G=(P=m.fields)!==null&&P!==void 0?P:[],J=y&&z||C&&E||A&&W;return(0,o.jsxs)("tr",{className:(0,p.default)("dataviews-view-table__row",{"is-selected":I&&M,"is-hovered":B,"has-bulk-actions":I}),onMouseEnter:Y,onMouseLeave:K,onTouchStart:()=>{X.current=!0},onClick:()=>{I&&!X.current&&document.getSelection()?.type!=="Range"&&S(F.includes(n)?F.filter(Z=>n!==Z):[n])},children:[b&&(0,o.jsx)("td",{className:"dataviews-view-table__checkbox-column",children:(0,o.jsx)("div",{className:"dataviews-view-table__cell-content-wrapper",children:(0,o.jsx)(j.default,{item:g,selection:F,onChangeSelection:S,getItemId:D,titleField:y,disabled:!I})})}),J&&(0,o.jsx)("td",{children:(0,o.jsx)(f.default,{item:g,level:h,titleField:z?y:void 0,mediaField:E?C:void 0,descriptionField:W?A:void 0,isItemClickable:N,onClickItem:V})}),G.map(Z=>{var Q;const{width:$,maxWidth:k,minWidth:H}=(Q=m.layout?.styles?.[Z])!==null&&Q!==void 0?Q:{};return(0,o.jsx)("td",{style:{width:$,maxWidth:k,minWidth:H},children:(0,o.jsx)(u,{fields:v,item:g,column:Z})},Z)}),!!r?.length&&(0,o.jsx)("td",{className:"dataviews-view-table__actions-column",onClick:Z=>Z.stopPropagation(),children:(0,o.jsx)(d.default,{item:g,actions:r})})]})}function x({actions:b,data:g,fields:h,getItemId:r,getItemLevel:v,isLoading:n=!1,onChangeView:m,onChangeSelection:y,selection:C,setOpenedFilter:A,onClickItem:F,isItemClickable:D,view:N}){var V;const S=(0,l.useRef)(new Map),P=(0,l.useRef)(),[I,M]=(0,l.useState)(),B=(0,i.useSomeItemHasAPossibleBulkAction)(b,g);(0,l.useEffect)(()=>{P.current&&(P.current.focus(),P.current=void 0)});const T=(0,l.useId)();if(I){P.current=I,M(void 0);return}const z=k=>{const H=S.current.get(k.id),U=H?S.current.get(H.fallback):void 0;M(U?.node)},E=!!g?.length,W=h.find(k=>k.id===N.titleField),Y=h.find(k=>k.id===N.mediaField),K=h.find(k=>k.id===N.descriptionField),{showTitle:X=!0,showMedia:G=!0,showDescription:J=!0}=N,Z=W&&X||Y&&G||K&&J,Q=(V=N.fields)!==null&&V!==void 0?V:[],$=(k,H)=>U=>{U?S.current.set(k,{node:U,fallback:Q[H>0?H-1:1]}):S.current.delete(k)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("table",{className:(0,p.default)("dataviews-view-table",{[`has-${N.layout?.density}-density`]:N.layout?.density&&["compact","comfortable"].includes(N.layout.density)}),"aria-busy":n,"aria-describedby":T,children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{className:"dataviews-view-table__row",children:[B&&(0,o.jsx)("th",{className:"dataviews-view-table__checkbox-column",scope:"col",children:(0,o.jsx)(i.BulkSelectionCheckbox,{selection:C,onChangeSelection:y,data:g,actions:b,getItemId:r})}),Z&&(0,o.jsx)("th",{scope:"col",children:W&&(0,o.jsx)(w.default,{ref:$(W.id,0),fieldId:W.id,view:N,fields:h,onChangeView:m,onHide:z,setOpenedFilter:A,canMove:!1})}),Q.map((k,H)=>{var U;const{width:q,maxWidth:ee,minWidth:se}=(U=N.layout?.styles?.[k])!==null&&U!==void 0?U:{};return(0,o.jsx)("th",{style:{width:q,maxWidth:ee,minWidth:se},"aria-sort":N.sort?.direction&&N.sort?.field===k?_.sortValues[N.sort.direction]:void 0,scope:"col",children:(0,o.jsx)(w.default,{ref:$(k,H),fieldId:k,view:N,fields:h,onChangeView:m,onHide:z,setOpenedFilter:A})},k)}),!!b?.length&&(0,o.jsx)("th",{className:"dataviews-view-table__actions-column",children:(0,o.jsx)("span",{className:"dataviews-view-table-header",children:(0,s.__)("Actions")})})]})}),(0,o.jsx)("tbody",{children:E&&g.map((k,H)=>(0,o.jsx)(R,{item:k,level:N.showLevels&&typeof v=="function"?v(k):void 0,hasBulkActions:B,actions:b,fields:h,id:r(k)||H.toString(),view:N,titleField:W,mediaField:Y,descriptionField:K,selection:C,getItemId:r,onChangeSelection:y,onClickItem:F,isItemClickable:D},r(k)))})]}),(0,o.jsx)("div",{className:(0,p.default)({"dataviews-loading":n,"dataviews-no-results":!E&&!n}),id:T,children:!E&&(0,o.jsx)("p",{children:n?(0,o.jsx)(t.Spinner,{}):(0,s.__)("No results")})})]})}var O=a.default=x},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataviews-layouts/utils/get-clickable-item-props.js":(L,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=e;function e({item:c,isItemClickable:p,onClickItem:s,className:t}){return!p(c)||!s?{className:t}:{className:t?`${t} ${t}--clickable`:void 0,role:"button",tabIndex:0,onClick:l=>{l.stopPropagation(),s(c)},onKeyDown:l=>{(l.key==="Enter"||l.key===""||l.key===" ")&&(l.stopPropagation(),s(c))}}}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/field-types/datetime.js":(L,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;function e(s,t,l){const j=new Date(s).getTime(),d=new Date(t).getTime();return l==="asc"?j-d:d-j}function c(s,t){return!(t?.elements&&!(t?.elements.map(j=>j.value)).includes(s))}var p=a.default={sort:e,isValid:c,Edit:"datetime"}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/field-types/index.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=l;var p=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/field-types/integer.js")),s=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/field-types/text.js")),t=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/field-types/datetime.js"));function l(j){return j==="integer"?p.default:j==="text"?s.default:j==="datetime"?t.default:{sort:(d,_,i)=>typeof d=="number"&&typeof _=="number"?i==="asc"?d-_:_-d:i==="asc"?d.localeCompare(_):_.localeCompare(d),isValid:(d,_)=>!(_?.elements&&!(_?.elements?.map(w=>w.value)).includes(d)),Edit:()=>null}}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/field-types/integer.js":(L,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;function e(s,t,l){return l==="asc"?s-t:t-s}function c(s,t){return!(s===""||!Number.isInteger(Number(s))||t?.elements&&!(t?.elements.map(j=>j.value)).includes(Number(s)))}var p=a.default={sort:e,isValid:c,Edit:"integer"}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/field-types/text.js":(L,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;function e(s,t,l){return l==="asc"?s.localeCompare(t):t.localeCompare(s)}function c(s,t){return!(t?.elements&&!(t?.elements?.map(j=>j.value)).includes(s))}var p=a.default={sort:e,isValid:c,Edit:"text"}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/filter-and-sort-data-view.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.filterSortAndPaginate=d;var p=c(e("../../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js")),s=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/constants.js"),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/normalize-fields.js");function l(_=""){return(0,p.default)(_.trim().toLowerCase())}const j=[];function d(_,i,w){if(!_)return{data:j,paginationInfo:{totalItems:0,totalPages:0}};const f=(0,t.normalizeFields)(w);let o=[..._];if(i.search){const x=l(i.search);o=o.filter(O=>f.filter(b=>b.enableGlobalSearch).map(b=>l(b.getValue({item:O}))).some(b=>b.includes(x)))}if(i.filters&&i.filters?.length>0&&i.filters.forEach(x=>{const O=f.find(b=>b.id===x.field);O&&(x.operator===s.OPERATOR_IS_ANY&&x?.value?.length>0?o=o.filter(b=>{const g=O.getValue({item:b});return Array.isArray(g)?x.value.some(h=>g.includes(h)):typeof g=="string"?x.value.includes(g):!1}):x.operator===s.OPERATOR_IS_NONE&&x?.value?.length>0?o=o.filter(b=>{const g=O.getValue({item:b});return Array.isArray(g)?!x.value.some(h=>g.includes(h)):typeof g=="string"?!x.value.includes(g):!1}):x.operator===s.OPERATOR_IS_ALL&&x?.value?.length>0?o=o.filter(b=>x.value.every(g=>O.getValue({item:b})?.includes(g))):x.operator===s.OPERATOR_IS_NOT_ALL&&x?.value?.length>0?o=o.filter(b=>x.value.every(g=>!O.getValue({item:b})?.includes(g))):x.operator===s.OPERATOR_IS?o=o.filter(b=>x.value===O.getValue({item:b})):x.operator===s.OPERATOR_IS_NOT&&(o=o.filter(b=>x.value!==O.getValue({item:b}))))}),i.sort){const x=i.sort.field,O=f.find(b=>b.id===x);O&&o.sort((b,g)=>{var h;return O.sort(b,g,(h=i.sort?.direction)!==null&&h!==void 0?h:"desc")})}let u=o.length,R=1;if(i.page!==void 0&&i.perPage!==void 0){const x=(i.page-1)*i.perPage;u=o?.length||0,R=Math.ceil(u/i.perPage),o=o?.slice(x,x+i.perPage)}return{data:o,paginationInfo:{totalItems:u,totalPages:R}}}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/index.js":(L,a,e)=>{var c,p=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");c={value:!0},c={enumerable:!0,get:function(){return t.default}},Object.defineProperty(a,"Vw",{enumerable:!0,get:function(){return s.default}}),c={enumerable:!0,get:function(){return l.VIEW_LAYOUTS}},Object.defineProperty(a,"Pp",{enumerable:!0,get:function(){return j.filterSortAndPaginate}}),c={enumerable:!0,get:function(){return d.isItemValid}};var s=p(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataviews/index.js")),t=p(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/components/dataform/index.js")),l=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataviews-layouts/index.js"),j=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/filter-and-sort-data-view.js"),d=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/validation.js")},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/lock-unlock.js":(L,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.unlock=a.lock=void 0;var c=e("../../../node_modules/.pnpm/@wordpress+private-apis@1.25.0/node_modules/@wordpress/private-apis/build-module/index.js");const{lock:p,unlock:s}=(0,c.__dangerousOptInToUnstableAPIsOnlyForCoreModules)("I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.","@wordpress/dataviews");a.unlock=s,a.lock=p},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/normalize-fields.js":(L,a,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.normalizeFields=l;var p=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/field-types/index.js")),s=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/dataform-controls/index.js");const t=j=>({item:d})=>{const _=j.split(".");let i=d;for(const w of _)i.hasOwnProperty(w)?i=i[w]:i=void 0;return i};function l(j){return j.map(d=>{var _,i,w,f;const o=(0,p.default)(d.type),u=d.getValue||t(d.id),R=(_=d.sort)!==null&&_!==void 0?_:function(r,v,n){return o.sort(u({item:r}),u({item:v}),n)},x=(i=d.isValid)!==null&&i!==void 0?i:function(r,v){return o.isValid(u({item:r}),v)},O=(0,s.getControl)(d,o),b=({item:h})=>{const r=u({item:h});return d?.elements?.find(v=>v.value===r)?.label||u({item:h})},g=d.render||(d.elements?b:u);return{...d,label:d.label||d.id,header:d.header||d.label||d.id,getValue:u,render:g,sort:R,isValid:x,Edit:O,enableHiding:(w=d.enableHiding)!==null&&w!==void 0?w:!0,enableSorting:(f=d.enableSorting)!==null&&f!==void 0?f:!0}})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/normalize-form-fields.js":(L,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=e;function e(c){var p,s,t;let l="regular";["regular","panel"].includes((p=c.type)!==null&&p!==void 0?p:"")&&(l=c.type);const j=(s=c.labelPosition)!==null&&s!==void 0?s:l==="regular"?"top":"side";return((t=c.fields)!==null&&t!==void 0?t:[]).map(d=>{var _,i;if(typeof d=="string")return{id:d,layout:l,labelPosition:j};const w=(_=d.layout)!==null&&_!==void 0?_:l,f=(i=d.labelPosition)!==null&&i!==void 0?i:w==="regular"?"top":"side";return{...d,layout:w,labelPosition:f}})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/utils.js":(L,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.sanitizeOperators=p;var c=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/constants.js");function p(s){let t=s.filterBy?.operators;return(!t||!Array.isArray(t))&&(t=[c.OPERATOR_IS_ANY,c.OPERATOR_IS_NONE]),t=t.filter(l=>c.ALL_OPERATORS.includes(l)),(t.includes(c.OPERATOR_IS)||t.includes(c.OPERATOR_IS_NOT))&&(t=t.filter(l=>[c.OPERATOR_IS,c.OPERATOR_IS_NOT].includes(l))),t}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/validation.js":(L,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.isItemValid=p;var c=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build/normalize-fields.js");function p(s,t,l){return(0,c.normalizeFields)(t.filter(({id:d})=>!!l.fields?.includes(d))).every(d=>d.isValid(s,{elements:d.elements}))}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/@wordpress+dataviews@4.17.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e733310216c29dd9d19bca6374ebdeb0/node_modules/@wordpress/dataviews/build-style/style.css":(L,a,e)=>{e.d(a,{A:()=>j});var c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(c),s=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(s),l=t()(p());l.push([L.id,`/**
*  Converts a hex value into the rgb equivalent.
*
* @param {string} hex - the hexadecimal value to convert
* @return {string} comma separated rgb values
*/
/**
 * Colors
 */
/**
 * Breakpoints & Media Queries
 */
/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
*  Converts a hex value into the rgb equivalent.
*
* @param {string} hex - the hexadecimal value to convert
* @return {string} comma separated rgb values
*/
/**
 * Colors
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
  --wp-admin-theme-color: #007cba;
  --wp-admin-theme-color--rgb: 0, 124, 186;
  --wp-admin-theme-color-darker-10: #006ba1;
  --wp-admin-theme-color-darker-10--rgb: 0, 107, 161;
  --wp-admin-theme-color-darker-20: #005a87;
  --wp-admin-theme-color-darker-20--rgb: 0, 90, 135;
  --wp-admin-border-width-focus: 2px;
  --wp-block-synced-color: #7a00df;
  --wp-block-synced-color--rgb: 122, 0, 223;
  --wp-bound-block-color: var(--wp-block-synced-color);
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
  padding: 8px 8px 0;
}
.dataviews-filters__summary-operators-container:has(+ .dataviews-filters__search-widget-listbox) {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
}
.dataviews-filters__summary-operators-container:empty {
  display: none;
}
.dataviews-filters__summary-operators-container .dataviews-filters__summary-operators-filter-name {
  color: #757575;
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
  padding: 8px 12px;
  cursor: default;
  margin-block-end: 2px;
}
.dataviews-filters__search-widget-listitem:last-child {
  margin-block-end: 0;
}
.dataviews-filters__search-widget-listitem:hover, .dataviews-filters__search-widget-listitem[data-active-item], .dataviews-filters__search-widget-listitem:focus {
  background-color: var(--wp-admin-theme-color);
  color: #fff;
}
.dataviews-filters__search-widget-listitem:hover .dataviews-filters__search-widget-listitem-check, .dataviews-filters__search-widget-listitem[data-active-item] .dataviews-filters__search-widget-listitem-check, .dataviews-filters__search-widget-listitem:focus .dataviews-filters__search-widget-listitem-check {
  fill: #fff;
}
.dataviews-filters__search-widget-listitem:hover .dataviews-filters__search-widget-listitem-description, .dataviews-filters__search-widget-listitem[data-active-item] .dataviews-filters__search-widget-listitem-description, .dataviews-filters__search-widget-listitem:focus .dataviews-filters__search-widget-listitem-description {
  color: #fff;
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-check {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-description {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  line-height: 16px;
  color: #757575;
}

.dataviews-filters__search-widget-filter-combobox__wrapper {
  position: relative;
  padding: 8px;
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  padding: 6px 8px;
  box-shadow: 0 0 0 transparent;
  border-radius: 2px;
  border: 1px solid #949494;
  /* Fonts smaller than 16px causes mobile safari to zoom. */
  font-size: 16px;
  /* Override core line-height. To be reviewed. */
  line-height: normal;
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
  flex: 0;
  overflow: hidden;
}
.dataviews-view-list div[role=row] .dataviews-view-list__item-actions > div {
  height: 24px;
}
.dataviews-view-list div[role=row] .dataviews-view-list__item-actions .components-button {
  position: relative;
  z-index: 1;
  opacity: 0;
}
.dataviews-view-list div[role=row]:where(.is-selected, .is-hovered, :focus-within) .dataviews-view-list__item-actions {
  flex-basis: min-content;
  overflow: unset;
  padding-inline-end: 4px;
}
.dataviews-view-list div[role=row]:where(.is-selected, .is-hovered, :focus-within) .dataviews-view-list__item-actions .components-button {
  opacity: 1;
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
.dataviews-view-table tr.is-hovered {
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
  padding: 6px 0;
  line-height: 20px;
  hyphens: auto;
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
  padding: 6px 0;
  line-height: 20px;
  hyphens: auto;
}

.dataforms-layouts-regular__field-control {
  flex-grow: 1;
  min-height: 32px;
  display: flex;
  align-items: center;
}`,""]);const j=l}}]);
