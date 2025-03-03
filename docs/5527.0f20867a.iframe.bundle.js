"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5527],{"../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/sandbox/index.js":(V,n,e)=>{e.d(n,{A:()=>o});var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/serialize.js"),s=e("../../../node_modules/.pnpm/@wordpress+compose@7.19.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+compose@7.19.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focusable-iframe/index.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const w=function(){const{MutationObserver:_}=window;if(!_||!document.body||!window.parent)return;function u(){const O=document.body.getBoundingClientRect();window.parent.postMessage({action:"resize",width:O.width,height:O.height},"*")}new _(u).observe(document.body,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0}),window.addEventListener("load",u,!0);function r(O){O.style&&["width","height","minHeight","maxHeight"].forEach(function(x){/^\\d+(vw|vh|svw|lvw|dvw|svh|lvh|dvh|vi|svi|lvi|dvi|vb|svb|lvb|dvb|vmin|svmin|lvmin|dvmin|vmax|svmax|lvmax|dvmax)$/.test(O.style[x])&&(O.style[x]="")})}Array.prototype.forEach.call(document.querySelectorAll("[style]"),r),Array.prototype.forEach.call(document.styleSheets,function(O){Array.prototype.forEach.call(O.cssRules||O.rules,r)}),document.body.style.position="absolute",document.body.style.width="100%",document.body.setAttribute("data-resizable-iframe-connected",""),u(),window.addEventListener("resize",u,!0)},a=`
	body {
		margin: 0;
	}
	html,
	body,
	body > div {
		width: 100%;
	}
	html.wp-has-aspect-ratio,
	body.wp-has-aspect-ratio,
	body.wp-has-aspect-ratio > div,
	body.wp-has-aspect-ratio > div iframe {
		width: 100%;
		height: 100%;
		overflow: hidden; /* If it has an aspect ratio, it shouldn't scroll. */
	}
	body > div > * {
		margin-top: 0 !important; /* Has to have !important to override inline styles. */
		margin-bottom: 0 !important;
	}
`;function f({html:_="",title:u="",type:i,styles:r=[],scripts:O=[],onFocus:x,tabIndex:R}){const v=(0,c.useRef)(),[j,g]=(0,c.useState)(0),[m,h]=(0,c.useState)(0);function l(){try{return!!v.current?.contentDocument?.body}catch{return!1}}function p(y=!1){if(!l())return;const{contentDocument:C,ownerDocument:I}=v.current;if(!y&&C?.body.getAttribute("data-resizable-iframe-connected")!==null)return;const T=(0,d.jsxs)("html",{lang:I.documentElement.lang,className:i,children:[(0,d.jsxs)("head",{children:[(0,d.jsx)("title",{children:u}),(0,d.jsx)("style",{dangerouslySetInnerHTML:{__html:a}}),r.map((D,F)=>(0,d.jsx)("style",{dangerouslySetInnerHTML:{__html:D}},F))]}),(0,d.jsxs)("body",{"data-resizable-iframe-connected":"data-resizable-iframe-connected",className:i,children:[(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:_}}),(0,d.jsx)("script",{type:"text/javascript",dangerouslySetInnerHTML:{__html:`(${w.toString()})();`}}),O.map(D=>(0,d.jsx)("script",{src:D},D))]})]});C.open(),C.write("<!DOCTYPE html>"+(0,b.Ay)(T)),C.close()}return(0,c.useEffect)(()=>{p();function y(){p(!1)}function C(D){const F=v.current;if(!F||F.contentWindow!==D.source)return;let E=D.data||{};if(typeof E=="string")try{E=JSON.parse(E)}catch{}E.action==="resize"&&(g(E.width),h(E.height))}const I=v.current,T=I?.ownerDocument?.defaultView;return I?.addEventListener("load",y,!1),T?.addEventListener("message",C),()=>{I?.removeEventListener("load",y,!1),T?.removeEventListener("message",C)}},[]),(0,c.useEffect)(()=>{p()},[u,r,O]),(0,c.useEffect)(()=>{p(!0)},[_,i]),(0,d.jsx)("iframe",{ref:(0,s.A)([v,(0,t.A)()]),title:u,tabIndex:R,className:"components-sandbox",sandbox:"allow-scripts allow-same-origin allow-presentation",onFocus:x,width:Math.ceil(j),height:Math.ceil(m)})}const o=f},"../../../node_modules/.pnpm/@wordpress+compose@7.19.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focusable-iframe/index.js":(V,n,e)=>{e.d(n,{A:()=>b});var c=e("../../../node_modules/.pnpm/@wordpress+compose@7.19.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js");function b(){return(0,c.A)(s=>{const{ownerDocument:t}=s;if(!t)return;const{defaultView:d}=t;if(!d)return;function w(){t&&t.activeElement===s&&s.focus()}return d.addEventListener("blur",w),()=>{d.removeEventListener("blur",w)}},[])}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataform-context/index.js":(V,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.DataFormProvider=t,n.default=void 0;var c=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=(0,c.createContext)({fields:[]});function t({fields:w,children:a}){return(0,b.jsx)(s.Provider,{value:{fields:w},children:a})}var d=n.default=s},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataform/index.js":(V,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=w;var c=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataform-context/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/normalize-fields.js"),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataforms-layouts/data-form-layout.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function w({data:a,form:f,fields:o,onChange:_}){const u=(0,c.useMemo)(()=>(0,s.normalizeFields)(o),[o]);return f.fields?(0,d.jsx)(b.DataFormProvider,{fields:u,children:(0,d.jsx)(t.DataFormLayout,{data:a,form:f,onChange:_})}):null}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-bulk-actions/index.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.BulkActionsFooter=g,n.BulkSelectionCheckbox=r,n.useHasAPossibleBulkAction=u,n.useSomeItemHasAPossibleBulkAction=i;var b=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+data@10.19.0_react@18.3.1/node_modules/@wordpress/data/build-module/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),a=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),f=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-item-actions/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function _({action:m,items:h,ActionTriggerComponent:l}){const[p,y]=(0,t.useState)(!1),C={action:m,onClick:()=>{y(!0)},items:h};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l,{...C}),p&&(0,o.jsx)(f.ActionModal,{action:m,items:h,closeModal:()=>y(!1)})]})}function u(m,h){return(0,t.useMemo)(()=>m.some(l=>l.supportsBulk&&(!l.isEligible||l.isEligible(h))),[m,h])}function i(m,h){return(0,t.useMemo)(()=>h.some(l=>m.some(p=>p.supportsBulk&&(!p.isEligible||p.isEligible(l)))),[m,h])}function r({selection:m,onChangeSelection:h,data:l,actions:p,getItemId:y}){const C=(0,t.useMemo)(()=>l.filter(D=>p.some(F=>F.supportsBulk&&(!F.isEligible||F.isEligible(D)))),[l,p]),I=l.filter(D=>m.includes(y(D))&&C.includes(D)),T=I.length===C.length;return(0,o.jsx)(b.CheckboxControl,{className:"dataviews-view-table-selection-checkbox",__nextHasNoMarginBottom:!0,checked:T,indeterminate:!T&&!!I.length,onChange:()=>{h(T?[]:C.map(D=>y(D)))},"aria-label":T?(0,s.__)("Deselect all"):(0,s.__)("Select all")})}function O({action:m,onClick:h,isBusy:l,items:p}){const y=typeof m.label=="string"?m.label:m.label(p);return(0,o.jsx)(b.Button,{disabled:l,accessibleWhenDisabled:!0,label:y,icon:m.icon,isDestructive:m.isDestructive,size:"compact",onClick:h,isBusy:l,tooltipPosition:"top"})}const x=[];function R({action:m,selectedItems:h,actionInProgress:l,setActionInProgress:p}){const y=(0,d.useRegistry)(),C=(0,t.useMemo)(()=>h.filter(I=>!m.isEligible||m.isEligible(I)),[m,h]);return"RenderModal"in m?(0,o.jsx)(_,{action:m,items:C,ActionTriggerComponent:O},m.id):(0,o.jsx)(O,{action:m,onClick:async()=>{p(m.id),await m.callback(h,{registry:y}),p(null)},items:C,isBusy:l===m.id},m.id)}function v(m,h,l,p,y,C,I,T,D){const F=C.length>0?(0,s.sprintf)((0,s._n)("%d Item selected","%d Items selected",C.length),C.length):(0,s.sprintf)((0,s._n)("%d Item","%d Items",m.length),m.length);return(0,o.jsxs)(b.__experimentalHStack,{expanded:!1,className:"dataviews-bulk-actions-footer__container",spacing:3,children:[(0,o.jsx)(r,{selection:p,onChangeSelection:D,data:m,actions:h,getItemId:l}),(0,o.jsx)("span",{className:"dataviews-bulk-actions-footer__item-count",children:F}),(0,o.jsxs)(b.__experimentalHStack,{className:"dataviews-bulk-actions-footer__action-buttons",expanded:!1,spacing:1,children:[y.map(E=>(0,o.jsx)(R,{action:E,selectedItems:C,actionInProgress:I,setActionInProgress:T},E.id)),C.length>0&&(0,o.jsx)(b.Button,{icon:w.closeSmall,showTooltip:!0,tooltipPosition:"top",size:"compact",label:(0,s.__)("Cancel"),disabled:!!I,accessibleWhenDisabled:!1,onClick:()=>{D(x)}})]})]})}function j({selection:m,actions:h,onChangeSelection:l,data:p,getItemId:y}){const[C,I]=(0,t.useState)(null),T=(0,t.useRef)(null),D=(0,t.useMemo)(()=>h.filter(P=>P.supportsBulk),[h]),F=(0,t.useMemo)(()=>p.filter(P=>D.some(A=>!A.isEligible||A.isEligible(P))),[p,D]),E=(0,t.useMemo)(()=>p.filter(P=>m.includes(y(P))&&F.includes(P)),[m,p,y,F]),S=(0,t.useMemo)(()=>h.filter(P=>P.supportsBulk&&P.icon&&E.some(A=>!P.isEligible||P.isEligible(A))),[h,E]);if(C)T.current||(T.current=v(p,h,y,m,S,E,C,I,l));else return T.current&&(T.current=null),v(p,h,y,m,S,E,C,I,l);return T.current}function g(){const{data:m,selection:h,actions:l=x,onChangeSelection:p,getItemId:y}=(0,t.useContext)(a.default);return(0,o.jsx)(j,{selection:h,onChangeSelection:p,data:m,actions:l,getItemId:y})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js":(V,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/constants.js");const s=(0,c.createContext)({view:{type:b.LAYOUT_TABLE},onChangeView:()=>{},fields:[],data:[],paginationInfo:{totalItems:0,totalPages:0},selection:[],onChangeSelection:()=>{},setOpenedFilter:()=>{},openedFilter:null,getItemId:d=>d.id,isItemClickable:()=>!0,containerWidth:0});var t=n.default=s},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-filters/add-filter.js":(V,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.AddFilterMenu=a,n.default=void 0;var c=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/lock-unlock.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Menu:w}=(0,t.unlock)(c.privateApis);function a({filters:_,view:u,onChangeView:i,setOpenedFilter:r,triggerProps:O}){const x=_.filter(R=>!R.isVisible);return(0,d.jsxs)(w,{children:[(0,d.jsx)(w.TriggerButton,{...O}),(0,d.jsx)(w.Popover,{children:x.map(R=>(0,d.jsx)(w.Item,{onClick:()=>{r(R.field),i({...u,page:1,filters:[...u.filters||[],{field:R.field,value:void 0,operator:R.operators[0]}]})},children:(0,d.jsx)(w.ItemLabel,{children:R.name})},R.field))})]})}function f({filters:_,view:u,onChangeView:i,setOpenedFilter:r},O){if(!_.length||_.every(({isPrimary:R})=>R))return null;const x=_.filter(R=>!R.isVisible);return(0,d.jsx)(a,{triggerProps:{render:(0,d.jsx)(c.Button,{accessibleWhenDisabled:!0,size:"compact",className:"dataviews-filters-button",variant:"tertiary",disabled:!x.length,ref:O}),children:(0,b.__)("Add filter")},filters:_,view:u,onChangeView:i,setOpenedFilter:r})}var o=n.default=(0,s.forwardRef)(f)},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-filters/filter-summary.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=O;var b=c(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),s=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),a=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-filters/search-widget.js")),f=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/constants.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _="Enter",u=" ",i=({activeElements:x,filterInView:R,filter:v})=>{if(x===void 0||x.length===0)return v.name;const j={Name:(0,o.jsx)("span",{className:"dataviews-filters__summary-filter-text-name"}),Value:(0,o.jsx)("span",{className:"dataviews-filters__summary-filter-text-value"})};return R?.operator===f.OPERATOR_IS_ANY?(0,d.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is any: </Name><Value>%2$s</Value>"),v.name,x.map(g=>g.label).join(", ")),j):R?.operator===f.OPERATOR_IS_NONE?(0,d.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is none: </Name><Value>%2$s</Value>"),v.name,x.map(g=>g.label).join(", ")),j):R?.operator===f.OPERATOR_IS_ALL?(0,d.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is all: </Name><Value>%2$s</Value>"),v.name,x.map(g=>g.label).join(", ")),j):R?.operator===f.OPERATOR_IS_NOT_ALL?(0,d.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is not all: </Name><Value>%2$s</Value>"),v.name,x.map(g=>g.label).join(", ")),j):R?.operator===f.OPERATOR_IS?(0,d.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is: </Name><Value>%2$s</Value>"),v.name,x[0].label),j):R?.operator===f.OPERATOR_IS_NOT?(0,d.createInterpolateElement)((0,t.sprintf)((0,t.__)("<Name>%1$s is not: </Name><Value>%2$s</Value>"),v.name,x[0].label),j):(0,t.sprintf)((0,t.__)("Unknown status for %1$s"),v.name)};function r({filter:x,view:R,onChangeView:v}){const j=x.operators?.map(h=>({value:h,label:f.OPERATORS[h]?.label})),g=R.filters?.find(h=>h.field===x.field),m=g?.operator||x.operators[0];return j.length>1&&(0,o.jsxs)(s.__experimentalHStack,{spacing:2,justify:"flex-start",className:"dataviews-filters__summary-operators-container",children:[(0,o.jsx)(s.FlexItem,{className:"dataviews-filters__summary-operators-filter-name",children:x.name}),(0,o.jsx)(s.SelectControl,{label:(0,t.__)("Conditions"),value:m,options:j,onChange:h=>{var l,p;const y=h,C=g?[...((l=R.filters)!==null&&l!==void 0?l:[]).map(I=>I.field===x.field?{...I,operator:y}:I)]:[...(p=R.filters)!==null&&p!==void 0?p:[],{field:x.field,operator:y,value:void 0}];v({...R,page:1,filters:C})},size:"small",__nextHasNoMarginBottom:!0,hideLabelFromVision:!0})]})}function O({addFilterRef:x,openedFilter:R,...v}){const j=(0,d.useRef)(null),{filter:g,view:m,onChangeView:h}=v,l=m.filters?.find(T=>T.field===g.field),p=g.elements.filter(T=>g.singleSelection?T.value===l?.value:l?.value?.includes(T.value)),y=g.isPrimary,C=l?.value!==void 0,I=!y||C;return(0,o.jsx)(s.Dropdown,{defaultOpen:R===g.field,contentClassName:"dataviews-filters__summary-popover",popoverProps:{placement:"bottom-start",role:"dialog"},onClose:()=>{j.current?.focus()},renderToggle:({isOpen:T,onToggle:D})=>(0,o.jsxs)("div",{className:"dataviews-filters__summary-chip-container",children:[(0,o.jsx)(s.Tooltip,{text:(0,t.sprintf)((0,t.__)("Filter by: %1$s"),g.name.toLowerCase()),placement:"top",children:(0,o.jsx)("div",{className:(0,b.default)("dataviews-filters__summary-chip",{"has-reset":I,"has-values":C}),role:"button",tabIndex:0,onClick:D,onKeyDown:F=>{[_,u].includes(F.key)&&(D(),F.preventDefault())},"aria-pressed":T,"aria-expanded":T,ref:j,children:(0,o.jsx)(i,{activeElements:p,filterInView:l,filter:g})})}),I&&(0,o.jsx)(s.Tooltip,{text:y?(0,t.__)("Reset"):(0,t.__)("Remove"),placement:"top",children:(0,o.jsx)("button",{className:(0,b.default)("dataviews-filters__summary-chip-remove",{"has-values":C}),onClick:()=>{h({...m,page:1,filters:m.filters?.filter(F=>F.field!==g.field)}),y?j.current?.focus():x.current?.focus()},children:(0,o.jsx)(s.Icon,{icon:w.closeSmall})})})]}),renderContent:()=>(0,o.jsxs)(s.__experimentalVStack,{spacing:0,justify:"flex-start",children:[(0,o.jsx)(r,{...v}),(0,o.jsx)(a.default,{...v})]})})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-filters/index.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.FiltersToggle=R,n.default=void 0,n.useFilters=x;var b=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),w=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-filters/filter-summary.js")),a=O(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-filters/add-filter.js")),f=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-filters/reset-filters.js")),o=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),_=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/utils.js"),u=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/constants.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function r(m){if(typeof WeakMap!="function")return null;var h=new WeakMap,l=new WeakMap;return(r=function(p){return p?l:h})(m)}function O(m,h){if(!h&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var l=r(h);if(l&&l.has(m))return l.get(m);var p={__proto__:null},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in m)if(C!=="default"&&{}.hasOwnProperty.call(m,C)){var I=y?Object.getOwnPropertyDescriptor(m,C):null;I&&(I.get||I.set)?Object.defineProperty(p,C,I):p[C]=m[C]}return p.default=m,l&&l.set(m,p),p}function x(m,h){return(0,b.useMemo)(()=>{const l=[];return m.forEach(p=>{if(!p.elements?.length)return;const y=(0,_.sanitizeOperators)(p);if(y.length===0)return;const C=!!p.filterBy?.isPrimary;l.push({field:p.id,name:p.label,elements:p.elements,singleSelection:y.some(I=>[u.OPERATOR_IS,u.OPERATOR_IS_NOT].includes(I)),operators:y,isVisible:C||!!h.filters?.some(I=>I.field===p.id&&u.ALL_OPERATORS.includes(I.operator)),isPrimary:C})}),l.sort((p,y)=>p.isPrimary&&!y.isPrimary?-1:!p.isPrimary&&y.isPrimary?1:p.name.localeCompare(y.name)),l},[m,h])}function R({filters:m,view:h,onChangeView:l,setOpenedFilter:p,isShowingFilter:y,setIsShowingFilter:C}){const I=(0,b.useRef)(null),T=(0,b.useCallback)(A=>{l(A),C(!0)},[l,C]),F=!!m.filter(A=>A.isVisible).length;if(m.length===0)return null;const E={label:(0,d.__)("Add filter"),"aria-expanded":!1,isPressed:!1},S={label:(0,d._x)("Filter","verb"),"aria-expanded":y,isPressed:y,onClick:()=>{y||p(null),C(!y)}},P=(0,i.jsx)(s.Button,{ref:I,className:"dataviews-filters__visibility-toggle",size:"compact",icon:t.funnel,...F?S:E});return(0,i.jsx)("div",{className:"dataviews-filters__container-visibility-toggle",children:F?(0,i.jsx)(v,{buttonRef:I,filtersCount:h.filters?.length,children:P}):(0,i.jsx)(a.AddFilterMenu,{filters:m,view:h,onChangeView:T,setOpenedFilter:p,triggerProps:{render:P}})})}function v({buttonRef:m,filtersCount:h,children:l}){return(0,b.useEffect)(()=>()=>{m.current?.focus()},[m]),(0,i.jsxs)(i.Fragment,{children:[l,!!h&&(0,i.jsx)("span",{className:"dataviews-filters-toggle__count",children:h})]})}function j(){const{fields:m,view:h,onChangeView:l,openedFilter:p,setOpenedFilter:y}=(0,b.useContext)(o.default),C=(0,b.useRef)(null),I=x(m,h),T=(0,i.jsx)(a.default,{filters:I,view:h,onChangeView:l,ref:C,setOpenedFilter:y},"add-filter"),D=I.filter(E=>E.isVisible);if(D.length===0)return null;const F=[...D.map(E=>(0,i.jsx)(w.default,{filter:E,view:h,onChangeView:l,addFilterRef:C,openedFilter:p},E.field)),T];return F.push((0,i.jsx)(f.default,{filters:I,view:h,onChangeView:l},"reset-filters")),(0,i.jsx)(s.__experimentalHStack,{justify:"flex-start",style:{width:"fit-content"},className:"dataviews-filters__container",wrap:!0,children:F})}var g=n.default=(0,b.memo)(j)},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-filters/reset-filters.js":(V,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=t;var c=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({filters:d,view:w,onChangeView:a}){const f=_=>d.some(u=>u.field===_&&u.isPrimary),o=!w.search&&!w.filters?.some(_=>_.value!==void 0||!f(_.field));return(0,s.jsx)(c.Button,{disabled:o,accessibleWhenDisabled:!0,size:"compact",variant:"tertiary",className:"dataviews-filters__reset-button",onClick:()=>{a({...w,page:1,search:"",filters:[]})},children:(0,b.__)("Reset")})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-filters/search-widget.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=h;var b=i(e("../../../node_modules/.pnpm/@ariakit+react@0.4.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react/cjs/index.cjs")),s=c(e("../../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js")),t=e("../../../node_modules/.pnpm/@wordpress+compose@7.19.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),f=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/index.js"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function u(l){if(typeof WeakMap!="function")return null;var p=new WeakMap,y=new WeakMap;return(u=function(C){return C?y:p})(l)}function i(l,p){if(!p&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var y=u(p);if(y&&y.has(l))return y.get(l);var C={__proto__:null},I=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var T in l)if(T!=="default"&&{}.hasOwnProperty.call(l,T)){var D=I?Object.getOwnPropertyDescriptor(l,T):null;D&&(D.get||D.set)?Object.defineProperty(C,T,D):C[T]=l[T]}return C.default=l,y&&y.set(l,C),C}const r=(0,_.jsx)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,_.jsx)(o.Circle,{cx:12,cy:12,r:3})});function O(l=""){return(0,s.default)(l.trim().toLowerCase())}const x=[],R=(l,p)=>l.singleSelection?p?.value:Array.isArray(p?.value)?p.value:!Array.isArray(p?.value)&&p?.value?[p.value]:x,v=(l,p,y)=>l.singleSelection?y:Array.isArray(p?.value)?p.value.includes(y)?p.value.filter(C=>C!==y):[...p.value,y]:[y];function j(l,p){return`${l}-${p}`}function g({view:l,filter:p,onChangeView:y}){const C=(0,t.useInstanceId)(g,"dataviews-filter-list-box"),[I,T]=(0,w.useState)(p.operators?.length===1?void 0:null),D=l.filters?.find(E=>E.field===p.field),F=R(p,D);return(0,_.jsx)(a.Composite,{virtualFocus:!0,focusLoop:!0,activeId:I,setActiveId:T,role:"listbox",className:"dataviews-filters__search-widget-listbox","aria-label":(0,d.sprintf)((0,d.__)("List of: %1$s"),p.name),onFocusVisible:()=>{!I&&p.elements.length&&T(j(C,p.elements[0].value))},render:(0,_.jsx)(a.Composite.Typeahead,{}),children:p.elements.map(E=>(0,_.jsxs)(a.Composite.Hover,{render:(0,_.jsx)(a.Composite.Item,{id:j(C,E.value),render:(0,_.jsx)("div",{"aria-label":E.label,role:"option",className:"dataviews-filters__search-widget-listitem"}),onClick:()=>{var S,P;const A=D?[...((S=l.filters)!==null&&S!==void 0?S:[]).map(N=>N.field===p.field?{...N,operator:D.operator||p.operators[0],value:v(p,D,E.value)}:N)]:[...(P=l.filters)!==null&&P!==void 0?P:[],{field:p.field,operator:p.operators[0],value:v(p,D,E.value)}];y({...l,page:1,filters:A})}}),children:[(0,_.jsxs)("span",{className:"dataviews-filters__search-widget-listitem-check",children:[p.singleSelection&&F===E.value&&(0,_.jsx)(a.Icon,{icon:r}),!p.singleSelection&&F.includes(E.value)&&(0,_.jsx)(a.Icon,{icon:f.check})]}),(0,_.jsx)("span",{children:E.label})]},E.value))})}function m({view:l,filter:p,onChangeView:y}){const[C,I]=(0,w.useState)(""),T=(0,w.useDeferredValue)(C),D=l.filters?.find(S=>S.field===p.field),F=R(p,D),E=(0,w.useMemo)(()=>{const S=O(T);return p.elements.filter(P=>O(P.label).includes(S))},[p.elements,T]);return(0,_.jsxs)(b.ComboboxProvider,{selectedValue:F,setSelectedValue:S=>{var P,A;const N=D?[...((P=l.filters)!==null&&P!==void 0?P:[]).map(B=>B.field===p.field?{...B,operator:D.operator||p.operators[0],value:S}:B)]:[...(A=l.filters)!==null&&A!==void 0?A:[],{field:p.field,operator:p.operators[0],value:S}];y({...l,page:1,filters:N})},setValue:I,children:[(0,_.jsxs)("div",{className:"dataviews-filters__search-widget-filter-combobox__wrapper",children:[(0,_.jsx)(b.ComboboxLabel,{render:(0,_.jsx)(a.VisuallyHidden,{children:(0,d.__)("Search items")}),children:(0,d.__)("Search items")}),(0,_.jsx)(b.Combobox,{autoSelect:"always",placeholder:(0,d.__)("Search"),className:"dataviews-filters__search-widget-filter-combobox__input"}),(0,_.jsx)("div",{className:"dataviews-filters__search-widget-filter-combobox__icon",children:(0,_.jsx)(a.Icon,{icon:f.search})})]}),(0,_.jsxs)(b.ComboboxList,{className:"dataviews-filters__search-widget-filter-combobox-list",alwaysVisible:!0,children:[E.map(S=>(0,_.jsxs)(b.ComboboxItem,{resetValueOnSelect:!1,value:S.value,className:"dataviews-filters__search-widget-listitem",hideOnClick:!1,setValueOnClick:!1,focusOnHover:!0,children:[(0,_.jsxs)("span",{className:"dataviews-filters__search-widget-listitem-check",children:[p.singleSelection&&F===S.value&&(0,_.jsx)(a.Icon,{icon:r}),!p.singleSelection&&F.includes(S.value)&&(0,_.jsx)(a.Icon,{icon:f.check})]}),(0,_.jsxs)("span",{children:[(0,_.jsx)(b.ComboboxItemValue,{className:"dataviews-filters__search-widget-filter-combobox-item-value",value:S.label}),!!S.description&&(0,_.jsx)("span",{className:"dataviews-filters__search-widget-listitem-description",children:S.description})]})]},S.value)),!E.length&&(0,_.jsx)("p",{children:(0,d.__)("No results found")})]})]})}function h(l){const p=l.filter.elements.length>10?m:g;return(0,_.jsx)(p,{...l})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-footer/index.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=_;var b=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),t=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),d=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-pagination/index.js")),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-bulk-actions/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/constants.js"),f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=[];function _(){const{view:u,paginationInfo:{totalItems:i=0,totalPages:r},data:O,actions:x=o}=(0,s.useContext)(t.default),R=(0,w.useSomeItemHasAPossibleBulkAction)(x,O)&&[a.LAYOUT_TABLE,a.LAYOUT_GRID].includes(u.type);return!i||!r||r<=1&&!R?null:!!i&&(0,f.jsxs)(b.__experimentalHStack,{expanded:!1,justify:"end",className:"dataviews-footer",children:[R&&(0,f.jsx)(w.BulkActionsFooter,{}),(0,f.jsx)(d.default,{})]})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-item-actions/index.js":(V,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.ActionModal=i,n.ActionsMenuGroup=r,n.default=O;var c=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+data@10.19.0_react@18.3.1/node_modules/@wordpress/data/build-module/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/lock-unlock.js"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Menu:f,kebabCase:o}=(0,w.unlock)(c.privateApis);function _({action:v,onClick:j,items:g}){const m=typeof v.label=="string"?v.label:v.label(g);return(0,a.jsx)(c.Button,{label:m,icon:v.icon,disabled:!!v.disabled,accessibleWhenDisabled:!0,isDestructive:v.isDestructive,size:"compact",onClick:j})}function u({action:v,onClick:j,items:g}){const m=typeof v.label=="string"?v.label:v.label(g);return(0,a.jsx)(f.Item,{disabled:v.disabled,onClick:j,children:(0,a.jsx)(f.ItemLabel,{children:m})})}function i({action:v,items:j,closeModal:g}){const m=typeof v.label=="string"?v.label:v.label(j);return(0,a.jsx)(c.Modal,{title:v.modalHeader||m,__experimentalHideHeader:!!v.hideModalHeader,onRequestClose:g,focusOnMount:"firstContentElement",size:"medium",overlayClassName:`dataviews-action-modal dataviews-action-modal__${o(v.id)}`,children:(0,a.jsx)(v.RenderModal,{items:j,closeModal:g})})}function r({actions:v,item:j,registry:g,setActiveModalAction:m}){return(0,a.jsx)(f.Group,{children:v.map(h=>(0,a.jsx)(u,{action:h,onClick:()=>{if("RenderModal"in h){m(h);return}h.callback([j],{registry:g})},items:[j]},h.id))})}function O({item:v,actions:j,isCompact:g}){const m=(0,d.useRegistry)(),{primaryActions:h,eligibleActions:l}=(0,s.useMemo)(()=>{const p=j.filter(C=>!C.isEligible||C.isEligible(v));return{primaryActions:p.filter(C=>C.isPrimary&&!!C.icon),eligibleActions:p}},[j,v]);return g?(0,a.jsx)(x,{item:v,actions:l,isSmall:!0,registry:m}):h.length===l.length?(0,a.jsx)(R,{item:v,actions:h,registry:m}):(0,a.jsxs)(c.__experimentalHStack,{spacing:1,justify:"flex-end",className:"dataviews-item-actions",style:{flexShrink:"0",width:"auto"},children:[(0,a.jsx)(R,{item:v,actions:h,registry:m}),(0,a.jsx)(x,{item:v,actions:l,registry:m})]})}function x({item:v,actions:j,isSmall:g,registry:m}){const[h,l]=(0,s.useState)(null);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(f,{placement:"bottom-end",children:[(0,a.jsx)(f.TriggerButton,{render:(0,a.jsx)(c.Button,{size:g?"small":"compact",icon:t.moreVertical,label:(0,b.__)("Actions"),accessibleWhenDisabled:!0,disabled:!j.length,className:"dataviews-all-actions-button"})}),(0,a.jsx)(f.Popover,{children:(0,a.jsx)(r,{actions:j,item:v,registry:m,setActiveModalAction:l})})]}),!!h&&(0,a.jsx)(i,{action:h,items:[v],closeModal:()=>l(null)})]})}function R({item:v,actions:j,registry:g}){const[m,h]=(0,s.useState)(null);return!Array.isArray(j)||j.length===0?null:(0,a.jsxs)(a.Fragment,{children:[j.map(l=>(0,a.jsx)(_,{action:l,onClick:()=>{if("RenderModal"in l){h(l);return}l.callback([v],{registry:g})},items:[v]},l.id)),!!m&&(0,a.jsx)(i,{action:m,items:[v],closeModal:()=>h(null)})]})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-layout/index.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=w;var b=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),s=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataviews-layouts/index.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function w(){const{actions:a=[],data:f,fields:o,getItemId:_,getItemLevel:u,isLoading:i,view:r,onChangeView:O,selection:x,onChangeSelection:R,setOpenedFilter:v,onClickItem:j,isItemClickable:g}=(0,b.useContext)(s.default),m=t.VIEW_LAYOUTS.find(h=>h.type===r.type)?.component;return(0,d.jsx)(m,{actions:a,data:f,fields:o,getItemId:_,getItemLevel:u,isLoading:i,onChangeView:O,onChangeSelection:R,selection:x,setOpenedFilter:v,onClickItem:j,isItemClickable:g,view:r})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-pagination/index.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var b=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),w=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function f(){var _;const{view:u,onChangeView:i,paginationInfo:{totalItems:r=0,totalPages:O}}=(0,s.useContext)(w.default);if(!r||!O)return null;const x=(_=u.page)!==null&&_!==void 0?_:1,R=Array.from(Array(O)).map((v,j)=>{const g=j+1;return{value:g.toString(),label:g.toString(),"aria-label":x===g?(0,t.sprintf)((0,t.__)("Page %1$s of %2$s"),x,O):g.toString()}});return!!r&&O!==1&&(0,a.jsxs)(b.__experimentalHStack,{expanded:!1,className:"dataviews-pagination",justify:"end",spacing:6,children:[(0,a.jsx)(b.__experimentalHStack,{justify:"flex-start",expanded:!1,spacing:1,className:"dataviews-pagination__page-select",children:(0,s.createInterpolateElement)((0,t.sprintf)((0,t._x)("<div>Page</div>%1$s<div>of %2$s</div>","paging"),"<CurrentPage />",O),{div:(0,a.jsx)("div",{"aria-hidden":!0}),CurrentPage:(0,a.jsx)(b.SelectControl,{"aria-label":(0,t.__)("Current page"),value:x.toString(),options:R,onChange:v=>{i({...u,page:+v})},size:"small",__nextHasNoMarginBottom:!0,variant:"minimal"})})}),(0,a.jsxs)(b.__experimentalHStack,{expanded:!1,spacing:1,children:[(0,a.jsx)(b.Button,{onClick:()=>i({...u,page:x-1}),disabled:x===1,accessibleWhenDisabled:!0,label:(0,t.__)("Previous page"),icon:(0,t.isRTL)()?d.next:d.previous,showTooltip:!0,size:"compact",tooltipPosition:"top"}),(0,a.jsx)(b.Button,{onClick:()=>i({...u,page:x+1}),disabled:x>=O,accessibleWhenDisabled:!0,label:(0,t.__)("Next page"),icon:(0,t.isRTL)()?d.previous:d.next,showTooltip:!0,size:"compact",tooltipPosition:"top"})]})]})}var o=n.default=(0,s.memo)(f)},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-search/index.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var b=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+compose@7.19.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),w=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f=(0,s.memo)(function({label:u}){const{view:i,onChangeView:r}=(0,s.useContext)(w.default),[O,x,R]=(0,d.useDebouncedInput)(i.search);(0,s.useEffect)(()=>{var m;x((m=i.search)!==null&&m!==void 0?m:"")},[i.search,x]);const v=(0,s.useRef)(r),j=(0,s.useRef)(i);(0,s.useEffect)(()=>{v.current=r,j.current=i},[r,i]),(0,s.useEffect)(()=>{R!==j.current?.search&&v.current({...j.current,page:1,search:R})},[R]);const g=u||(0,b.__)("Search");return(0,a.jsx)(t.SearchControl,{className:"dataviews-search",__nextHasNoMarginBottom:!0,onChange:x,value:O,label:g,placeholder:g,size:"compact"})});var o=n.default=f},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-selection-checkbox/index.js":(V,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=t;var c=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({selection:d,onChangeSelection:w,item:a,getItemId:f,titleField:o,disabled:_}){const u=f(a),i=!_&&d.includes(u),r=o?.getValue?.({item:a})||(0,b.__)("(no title)");return(0,s.jsx)(c.CheckboxControl,{className:"dataviews-selection-checkbox",__nextHasNoMarginBottom:!0,"aria-label":r,"aria-disabled":_,checked:i,onChange:()=>{_||w(d.includes(u)?d.filter(O=>u!==O):[...d,u])}})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-view-config/index.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var b=c(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),s=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),a=c(e("../../../node_modules/.pnpm/@wordpress+warning@3.19.0/node_modules/@wordpress/warning/build-module/index.js")),f=e("../../../node_modules/.pnpm/@wordpress+compose@7.19.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/constants.js"),_=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataviews-layouts/index.js"),u=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),i=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/lock-unlock.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Menu:O}=(0,i.unlock)(s.privateApis),x={className:"dataviews-config__popover",placement:"bottom-end",offset:9};function R({defaultLayouts:S={list:{},grid:{},table:{}}}){const{view:P,onChangeView:A}=(0,d.useContext)(u.default),N=Object.keys(S);if(N.length<=1)return null;const B=_.VIEW_LAYOUTS.find(M=>P.type===M.type);return(0,r.jsxs)(O,{children:[(0,r.jsx)(O.TriggerButton,{render:(0,r.jsx)(s.Button,{size:"compact",icon:B?.icon,label:(0,t.__)("Layout")})}),(0,r.jsx)(O.Popover,{children:N.map(M=>{const z=_.VIEW_LAYOUTS.find(L=>L.type===M);return z?(0,r.jsx)(O.RadioItem,{value:M,name:"view-actions-available-view",checked:M===P.type,hideOnClick:!0,onChange:L=>{switch(L.target.value){case"list":case"grid":case"table":const W={...P};return"layout"in W&&delete W.layout,A({...W,type:L.target.value,...S[L.target.value]})}globalThis.SCRIPT_DEBUG===!0&&(0,a.default)("Invalid dataview")},children:(0,r.jsx)(O.ItemLabel,{children:z.label})},M):null})})]})}function v(){const{view:S,fields:P,onChangeView:A}=(0,d.useContext)(u.default),N=(0,d.useMemo)(()=>P.filter(M=>M.enableSorting!==!1).map(M=>({label:M.label,value:M.id})),[P]);return(0,r.jsx)(s.SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:(0,t.__)("Sort by"),value:S.sort?.field,options:N,onChange:B=>{A({...S,sort:{direction:S?.sort?.direction||"desc",field:B},showLevels:!1})}})}function j(){const{view:S,fields:P,onChangeView:A}=(0,d.useContext)(u.default);if(P.filter(M=>M.enableSorting!==!1).length===0)return null;let B=S.sort?.direction;return!B&&S.sort?.field&&(B="desc"),(0,r.jsx)(s.__experimentalToggleGroupControl,{className:"dataviews-view-config__sort-direction",__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,isBlock:!0,label:(0,t.__)("Order"),value:B,onChange:M=>{if(M==="asc"||M==="desc"){A({...S,sort:{direction:M,field:S.sort?.field||P.find(z=>z.enableSorting!==!1)?.id||""},showLevels:!1});return}globalThis.SCRIPT_DEBUG===!0&&(0,a.default)("Invalid direction")},children:o.SORTING_DIRECTIONS.map(M=>(0,r.jsx)(s.__experimentalToggleGroupControlOptionIcon,{value:M,icon:o.sortIcons[M],label:o.sortLabels[M]},M))})}const g=[10,20,50,100];function m(){const{view:S,onChangeView:P}=(0,d.useContext)(u.default);return(0,r.jsx)(s.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,isBlock:!0,label:(0,t.__)("Items per page"),value:S.perPage||10,disabled:!S?.sort?.field,onChange:A=>{const N=typeof A=="number"||A===void 0?A:parseInt(A,10);P({...S,perPage:N,page:1})},children:g.map(A=>(0,r.jsx)(s.__experimentalToggleGroupControlOption,{value:A,label:A.toString()},A))})}function h({previewOptions:S,onChangePreviewOption:P,onMenuOpenChange:A,activeOption:N}){const B=M=>{setTimeout(()=>{const z=document.querySelector(`.dataviews-field-control__field-${M} .dataviews-field-control__field-preview-options-button`);z instanceof HTMLElement&&z.focus()},50)};return(0,r.jsxs)(O,{onOpenChange:A,children:[(0,r.jsx)(O.TriggerButton,{render:(0,r.jsx)(s.Button,{className:"dataviews-field-control__field-preview-options-button",size:"compact",icon:w.moreVertical,label:(0,t.__)("Preview")})}),(0,r.jsx)(O.Popover,{children:S?.map(({id:M,label:z})=>(0,r.jsx)(O.RadioItem,{value:M,checked:M===N,onChange:()=>{P?.(M),B(M)},children:(0,r.jsx)(O.ItemLabel,{children:z})},M))})]})}function l({field:S,label:P,description:A,isVisible:N,isFirst:B,isLast:M,canMove:z=!0,onToggleVisibility:L,onMoveUp:W,onMoveDown:Y,previewOptions:K,onChangePreviewOption:J}){const[G,X]=(0,d.useState)(!1),Z=()=>{setTimeout(()=>{const Q=document.querySelector(`.dataviews-field-control__field-${S.id} .dataviews-field-control__field-visibility-button`);Q instanceof HTMLElement&&Q.focus()},50)};return(0,r.jsx)(s.__experimentalItem,{children:(0,r.jsxs)(s.__experimentalHStack,{expanded:!0,className:(0,b.default)("dataviews-field-control__field",`dataviews-field-control__field-${S.id}`,{"is-interacting":G}),justify:"flex-start",children:[(0,r.jsx)("span",{className:"dataviews-field-control__icon",children:!z&&!S.enableHiding&&(0,r.jsx)(s.Icon,{icon:w.lock})}),(0,r.jsxs)("span",{className:"dataviews-field-control__label-sub-label-container",children:[(0,r.jsx)("span",{className:"dataviews-field-control__label",children:P||S.label}),A&&(0,r.jsx)("span",{className:"dataviews-field-control__sub-label",children:A})]}),(0,r.jsxs)(s.__experimentalHStack,{justify:"flex-end",expanded:!1,className:"dataviews-field-control__actions",children:[N&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Button,{disabled:B||!z,accessibleWhenDisabled:!0,size:"compact",onClick:W,icon:w.chevronUp,label:B||!z?(0,t.__)("This field can't be moved up"):(0,t.sprintf)((0,t.__)("Move %s up"),S.label)}),(0,r.jsx)(s.Button,{disabled:M||!z,accessibleWhenDisabled:!0,size:"compact",onClick:Y,icon:w.chevronDown,label:M||!z?(0,t.__)("This field can't be moved down"):(0,t.sprintf)((0,t.__)("Move %s down"),S.label)})]}),L&&(0,r.jsx)(s.Button,{className:"dataviews-field-control__field-visibility-button",disabled:!S.enableHiding,accessibleWhenDisabled:!0,size:"compact",onClick:()=>{L(),Z()},icon:N?w.unseen:w.seen,label:N?(0,t.sprintf)((0,t._x)("Hide %s","field"),S.label):(0,t.sprintf)((0,t._x)("Show %s","field"),S.label)}),K&&(0,r.jsx)(h,{previewOptions:K,onChangePreviewOption:J,onMenuOpenChange:X,activeOption:S.id})]})]})})}function p({index:S,field:P,view:A,onChangeView:N}){var B;const M=(B=A.fields)!==null&&B!==void 0?B:[],z=S!==void 0&&M.includes(P.id);return(0,r.jsx)(l,{field:P,isVisible:z,isFirst:S!==void 0&&S<1,isLast:S!==void 0&&S===M.length-1,onToggleVisibility:()=>{N({...A,fields:z?M.filter(L=>L!==P.id):[...M,P.id]})},onMoveUp:S!==void 0?()=>{var L;N({...A,fields:[...(L=M.slice(0,S-1))!==null&&L!==void 0?L:[],P.id,M[S-1],...M.slice(S+1)]})}:void 0,onMoveDown:S!==void 0?()=>{var L;N({...A,fields:[...(L=M.slice(0,S))!==null&&L!==void 0?L:[],M[S+1],P.id,...M.slice(S+2)]})}:void 0})}function y(S){return!!S}function C(){var S;const{view:P,fields:A,onChangeView:N}=(0,d.useContext)(u.default),B=[P?.titleField,P?.mediaField,P?.descriptionField].filter(Boolean),M=(S=P.fields)!==null&&S!==void 0?S:[],z=A.filter(k=>!M.includes(k.id)&&!B.includes(k.id)&&k.type!=="media"),L=M.map(k=>A.find(H=>H.id===k)).filter(y);if(!L?.length&&!z?.length)return null;const W=A.find(k=>k.id===P.titleField),Y=A.find(k=>k.id===P.mediaField),K=A.find(k=>k.id===P.descriptionField),J=A.filter(k=>k.type==="media");let G;if(J.length>1){var X;const k=y(Y)&&((X=P.showMedia)!==null&&X!==void 0?X:!0);G=y(Y)&&(0,r.jsx)(l,{field:Y,label:(0,t.__)("Preview"),description:Y.label,isVisible:k,onToggleVisibility:()=>{N({...P,showMedia:!k})},canMove:!1,previewOptions:J.map(H=>({label:H.label,id:H.id})),onChangePreviewOption:H=>N({...P,mediaField:H})},Y.id)}const Z=[{field:W,isVisibleFlag:"showTitle"},{field:Y,isVisibleFlag:"showMedia",ui:G},{field:K,isVisibleFlag:"showDescription"}].filter(({field:k})=>y(k)),Q=Z.filter(({field:k,isVisibleFlag:H})=>{var U;return y(k)&&((U=P[H])!==null&&U!==void 0?U:!0)}),$=Z.filter(({field:k,isVisibleFlag:H})=>{var U;return y(k)&&!(!((U=P[H])!==null&&U!==void 0)||U)});return(0,r.jsxs)(s.__experimentalVStack,{className:"dataviews-field-control",spacing:6,children:[(0,r.jsx)(s.__experimentalVStack,{className:"dataviews-view-config__properties",spacing:0,children:(Q.length>0||!!L?.length)&&(0,r.jsxs)(s.__experimentalItemGroup,{isBordered:!0,isSeparated:!0,children:[Q.map(({field:k,isVisibleFlag:H,ui:U})=>U??(0,r.jsx)(l,{field:k,isVisible:!0,onToggleVisibility:()=>{N({...P,[H]:!1})},canMove:!1},k.id)),L.map((k,H)=>(0,r.jsx)(p,{field:k,view:P,onChangeView:N,index:H},k.id))]})}),(!!z?.length||!!$.length)&&(0,r.jsxs)(s.__experimentalVStack,{spacing:4,children:[(0,r.jsx)(s.BaseControl.VisualLabel,{style:{margin:0},children:(0,t.__)("Hidden")}),(0,r.jsx)(s.__experimentalVStack,{className:"dataviews-view-config__properties",spacing:0,children:(0,r.jsxs)(s.__experimentalItemGroup,{isBordered:!0,isSeparated:!0,children:[$.length>0&&$.map(({field:k,isVisibleFlag:H,ui:U})=>U??(0,r.jsx)(l,{field:k,isVisible:!1,onToggleVisibility:()=>{N({...P,[H]:!0})},canMove:!1},k.id)),z.map(k=>(0,r.jsx)(p,{field:k,view:P,onChangeView:N},k.id))]})})]})]})}function I({title:S,description:P,children:A}){return(0,r.jsxs)(s.__experimentalGrid,{columns:12,className:"dataviews-settings-section",gap:4,children:[(0,r.jsxs)("div",{className:"dataviews-settings-section__sidebar",children:[(0,r.jsx)(s.__experimentalHeading,{level:2,className:"dataviews-settings-section__title",children:S}),P&&(0,r.jsx)(s.__experimentalText,{variant:"muted",className:"dataviews-settings-section__description",children:P})]}),(0,r.jsx)(s.__experimentalGrid,{columns:8,gap:4,className:"dataviews-settings-section__content",children:A})]})}function T(){const{view:S}=(0,d.useContext)(u.default),P=(0,f.useInstanceId)(D,"dataviews-view-config-dropdown"),A=_.VIEW_LAYOUTS.find(N=>N.type===S.type);return(0,r.jsx)(s.Dropdown,{expandOnMobile:!0,popoverProps:{...x,id:P},renderToggle:({onToggle:N,isOpen:B})=>(0,r.jsx)(s.Button,{size:"compact",icon:w.cog,label:(0,t._x)("View options","View is used as a noun"),onClick:N,"aria-expanded":B?"true":"false","aria-controls":P}),renderContent:()=>(0,r.jsx)(s.__experimentalDropdownContentWrapper,{paddingSize:"medium",className:"dataviews-config__popover-content-wrapper",children:(0,r.jsxs)(s.__experimentalVStack,{className:"dataviews-view-config",spacing:6,children:[(0,r.jsxs)(I,{title:(0,t.__)("Appearance"),children:[(0,r.jsxs)(s.__experimentalHStack,{expanded:!0,className:"is-divided-in-two",children:[(0,r.jsx)(v,{}),(0,r.jsx)(j,{})]}),!!A?.viewConfigOptions&&(0,r.jsx)(A.viewConfigOptions,{}),(0,r.jsx)(m,{})]}),(0,r.jsx)(I,{title:(0,t.__)("Properties"),children:(0,r.jsx)(C,{})})]})})})}function D({defaultLayouts:S={list:{},grid:{},table:{}}}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(R,{defaultLayouts:S}),(0,r.jsx)(T,{})]})}const F=(0,d.memo)(D);var E=n.default=F},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews/index.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=j;var b=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+compose@7.19.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),d=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),w=O(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-filters/index.js")),a=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-layout/index.js")),f=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-footer/index.js")),o=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-search/index.js")),_=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-view-config/index.js")),u=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/normalize-fields.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function r(g){if(typeof WeakMap!="function")return null;var m=new WeakMap,h=new WeakMap;return(r=function(l){return l?h:m})(g)}function O(g,m){if(!m&&g&&g.__esModule)return g;if(g===null||typeof g!="object"&&typeof g!="function")return{default:g};var h=r(m);if(h&&h.has(g))return h.get(g);var l={__proto__:null},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in g)if(y!=="default"&&{}.hasOwnProperty.call(g,y)){var C=p?Object.getOwnPropertyDescriptor(g,y):null;C&&(C.get||C.set)?Object.defineProperty(l,y,C):l[y]=g[y]}return l.default=g,h&&h.set(g,l),l}const x=g=>g.id,R=()=>!0,v=[];function j({view:g,onChangeView:m,fields:h,search:l=!0,searchLabel:p=void 0,actions:y=v,data:C,getItemId:I=x,getItemLevel:T,isLoading:D=!1,paginationInfo:F,defaultLayouts:E,selection:S,onChangeSelection:P,onClickItem:A,isItemClickable:N=R,header:B}){const[M,z]=(0,s.useState)(0),L=(0,t.useResizeObserver)(q=>{z(q[0].borderBoxSize[0].inlineSize)},{box:"border-box"}),[W,Y]=(0,s.useState)([]),K=S===void 0||P===void 0,J=K?W:S,[G,X]=(0,s.useState)(null);function Z(q){const ee=typeof q=="function"?q(J):q;K&&Y(ee),P&&P(ee)}const Q=(0,s.useMemo)(()=>(0,u.normalizeFields)(h),[h]),$=(0,s.useMemo)(()=>J.filter(q=>C.some(ee=>I(ee)===q)),[J,C,I]),k=(0,w.useFilters)(Q,g),[H,U]=(0,s.useState)(()=>(k||[]).some(q=>q.isPrimary));return(0,i.jsx)(d.default.Provider,{value:{view:g,onChangeView:m,fields:Q,actions:y,data:C,isLoading:D,paginationInfo:F,selection:$,onChangeSelection:Z,openedFilter:G,setOpenedFilter:X,getItemId:I,getItemLevel:T,isItemClickable:N,onClickItem:A,containerWidth:M},children:(0,i.jsxs)("div",{className:"dataviews-wrapper",ref:L,children:[(0,i.jsxs)(b.__experimentalHStack,{alignment:"top",justify:"space-between",className:"dataviews__view-actions",spacing:1,children:[(0,i.jsxs)(b.__experimentalHStack,{justify:"start",expanded:!1,className:"dataviews__search",children:[l&&(0,i.jsx)(o.default,{label:p}),(0,i.jsx)(w.FiltersToggle,{filters:k,view:g,onChangeView:m,setOpenedFilter:X,setIsShowingFilter:U,isShowingFilter:H})]}),(0,i.jsxs)(b.__experimentalHStack,{spacing:1,expanded:!1,style:{flexShrink:0},children:[(0,i.jsx)(_.default,{defaultLayouts:E}),B]})]}),H&&(0,i.jsx)(w.default,{}),(0,i.jsx)(a.default,{}),(0,i.jsx)(f.default,{})]})})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/constants.js":(V,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.sortValues=n.sortLabels=n.sortIcons=n.sortArrows=n.SORTING_DIRECTIONS=n.OPERATOR_IS_NOT_ALL=n.OPERATOR_IS_NOT=n.OPERATOR_IS_NONE=n.OPERATOR_IS_ANY=n.OPERATOR_IS_ALL=n.OPERATOR_IS=n.OPERATORS=n.LAYOUT_TABLE=n.LAYOUT_LIST=n.LAYOUT_GRID=n.ALL_OPERATORS=void 0;var c=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js");const s=n.OPERATOR_IS="is",t=n.OPERATOR_IS_NOT="isNot",d=n.OPERATOR_IS_ANY="isAny",w=n.OPERATOR_IS_NONE="isNone",a=n.OPERATOR_IS_ALL="isAll",f=n.OPERATOR_IS_NOT_ALL="isNotAll",o=n.ALL_OPERATORS=[s,t,d,w,a,f],_=n.OPERATORS={[s]:{key:"is-filter",label:(0,c.__)("Is")},[t]:{key:"is-not-filter",label:(0,c.__)("Is not")},[d]:{key:"is-any-filter",label:(0,c.__)("Is any")},[w]:{key:"is-none-filter",label:(0,c.__)("Is none")},[a]:{key:"is-all-filter",label:(0,c.__)("Is all")},[f]:{key:"is-not-all-filter",label:(0,c.__)("Is not all")}},u=n.SORTING_DIRECTIONS=["asc","desc"],i=n.sortArrows={asc:"\u2191",desc:"\u2193"},r=n.sortValues={asc:"ascending",desc:"descending"},O=n.sortLabels={asc:(0,c.__)("Sort ascending"),desc:(0,c.__)("Sort descending")},x=n.sortIcons={asc:b.arrowUp,desc:b.arrowDown},R=n.LAYOUT_TABLE="table",v=n.LAYOUT_GRID="grid",j=n.LAYOUT_LIST="list"},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataform-controls/datetime.js":(V,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=t;var c=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({data:d,field:w,onChange:a,hideLabelFromVision:f}){const{id:o,label:_}=w,u=w.getValue({item:d}),i=(0,b.useCallback)(r=>a({[o]:r}),[o,a]);return(0,s.jsxs)("fieldset",{className:"dataviews-controls__datetime",children:[!f&&(0,s.jsx)(c.BaseControl.VisualLabel,{as:"legend",children:_}),f&&(0,s.jsx)(c.VisuallyHidden,{as:"legend",children:_}),(0,s.jsx)(c.TimePicker,{currentTime:u,onChange:i,hideLabelFromVision:!0})]})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataform-controls/index.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.getControl=f,n.getControlByType=o;var b=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataform-controls/datetime.js")),s=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataform-controls/integer.js")),t=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataform-controls/radio.js")),d=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataform-controls/select.js")),w=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataform-controls/text.js"));const a={datetime:b.default,integer:s.default,radio:t.default,select:d.default,text:w.default};function f(_,u){return typeof _.Edit=="function"?_.Edit:typeof _.Edit=="string"?o(_.Edit):_.elements?o("select"):typeof u.Edit=="string"?o(u.Edit):u.Edit}function o(_){if(Object.keys(a).includes(_))return a[_];throw"Control "+_+" not found"}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataform-controls/integer.js":(V,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=t;var c=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({data:d,field:w,onChange:a,hideLabelFromVision:f}){var o;const{id:_,label:u,description:i}=w,r=(o=w.getValue({item:d}))!==null&&o!==void 0?o:"",O=(0,b.useCallback)(x=>a({[_]:Number(x)}),[_,a]);return(0,s.jsx)(c.__experimentalNumberControl,{label:u,help:i,value:r,onChange:O,__next40pxDefaultSize:!0,hideLabelFromVision:f})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataform-controls/radio.js":(V,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=t;var c=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({data:d,field:w,onChange:a,hideLabelFromVision:f}){const{id:o,label:_}=w,u=w.getValue({item:d}),i=(0,b.useCallback)(r=>a({[o]:r}),[o,a]);return w.elements?(0,s.jsx)(c.RadioControl,{label:_,onChange:i,options:w.elements,selected:u,hideLabelFromVision:f}):null}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataform-controls/select.js":(V,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=d;var c=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function d({data:w,field:a,onChange:f,hideLabelFromVision:o}){var _,u;const{id:i,label:r}=a,O=(_=a.getValue({item:w}))!==null&&_!==void 0?_:"",x=(0,b.useCallback)(v=>f({[i]:v}),[i,f]),R=[{label:(0,s.__)("Select item"),value:""},...(u=a?.elements)!==null&&u!==void 0?u:[]];return(0,t.jsx)(c.SelectControl,{label:r,value:O,options:R,onChange:x,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:o})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataform-controls/text.js":(V,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=t;var c=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({data:d,field:w,onChange:a,hideLabelFromVision:f}){const{id:o,label:_,placeholder:u}=w,i=w.getValue({item:d}),r=(0,b.useCallback)(O=>a({[o]:O}),[o,a]);return(0,s.jsx)(c.TextControl,{label:_,placeholder:u,value:i??"",onChange:r,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:f})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataforms-layouts/data-form-layout.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.DataFormLayout=o;var b=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataforms-layouts/index.js"),d=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataform-context/index.js")),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataforms-layouts/is-combined-field.js"),a=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/normalize-form-fields.js")),f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function o({data:_,form:u,onChange:i,children:r}){const{fields:O}=(0,s.useContext)(d.default);function x(v){const j=typeof v=="string"?v:v.id;return O.find(g=>g.id===j)}const R=(0,s.useMemo)(()=>(0,a.default)(u),[u]);return(0,f.jsx)(b.__experimentalVStack,{spacing:2,children:R.map(v=>{const j=(0,t.getFormFieldLayout)(v.layout)?.component;if(!j)return null;const g=(0,w.isCombinedField)(v)?void 0:x(v);return g&&g.isVisible&&!g.isVisible(_)?null:r?r(j,v):(0,f.jsx)(j,{data:_,field:v,onChange:i},v.id)})})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataforms-layouts/index.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.getFormFieldLayout=d;var b=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataforms-layouts/regular/index.js")),s=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataforms-layouts/panel/index.js"));const t=[{type:"regular",component:b.default},{type:"panel",component:s.default}];function d(w){return t.find(a=>a.type===w)}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataforms-layouts/is-combined-field.js":(V,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.isCombinedField=e;function e(c){return c.children!==void 0}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataforms-layouts/panel/index.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=i;var b=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),w=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataform-context/index.js")),a=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataforms-layouts/data-form-layout.js"),f=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataforms-layouts/is-combined-field.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function _({title:r,onClose:O}){return(0,o.jsx)(b.__experimentalVStack,{className:"dataforms-layouts-panel__dropdown-header",spacing:4,children:(0,o.jsxs)(b.__experimentalHStack,{alignment:"center",children:[r&&(0,o.jsx)(b.__experimentalHeading,{level:2,size:13,children:r}),(0,o.jsx)(b.__experimentalSpacer,{}),O&&(0,o.jsx)(b.Button,{label:(0,s.__)("Close"),icon:d.closeSmall,onClick:O,size:"small"})]})})}function u({fieldDefinition:r,popoverAnchor:O,labelPosition:x="side",data:R,onChange:v,field:j}){const g=(0,f.isCombinedField)(j)?j.label:r?.label,m=(0,t.useMemo)(()=>(0,f.isCombinedField)(j)?{type:"regular",fields:j.children.map(l=>typeof l=="string"?{id:l}:l)}:{type:"regular",fields:[{id:j.id}]},[j]),h=(0,t.useMemo)(()=>({anchor:O,placement:"left-start",offset:36,shift:!0}),[O]);return(0,o.jsx)(b.Dropdown,{contentClassName:"dataforms-layouts-panel__field-dropdown",popoverProps:h,focusOnMount:!0,toggleProps:{size:"compact",variant:"tertiary",tooltipPosition:"middle left"},renderToggle:({isOpen:l,onToggle:p})=>(0,o.jsx)(b.Button,{className:"dataforms-layouts-panel__field-control",size:"compact",variant:["none","top"].includes(x)?"link":"tertiary","aria-expanded":l,"aria-label":(0,s.sprintf)((0,s._x)("Edit %s","field"),g),onClick:p,children:(0,o.jsx)(r.render,{item:R})}),renderContent:({onClose:l})=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(_,{title:g,onClose:l}),(0,o.jsx)(a.DataFormLayout,{data:R,form:m,onChange:v,children:(p,y)=>{var C;return(0,o.jsx)(p,{data:R,field:y,onChange:v,hideLabelFromVision:((C=m?.fields)!==null&&C!==void 0?C:[]).length<2},y.id)}})]})})}function i({data:r,field:O,onChange:x}){var R;const{fields:v}=(0,t.useContext)(w.default),j=v.find(p=>{if((0,f.isCombinedField)(O)){const y=O.children.filter(I=>typeof I=="string"||!(0,f.isCombinedField)(I)),C=typeof y[0]=="string"?y[0]:y[0].id;return p.id===C}return p.id===O.id}),g=(R=O.labelPosition)!==null&&R!==void 0?R:"side",[m,h]=(0,t.useState)(null);if(!j)return null;const l=(0,f.isCombinedField)(O)?O.label:j?.label;return g==="top"?(0,o.jsxs)(b.__experimentalVStack,{className:"dataforms-layouts-panel__field",spacing:0,children:[(0,o.jsx)("div",{className:"dataforms-layouts-panel__field-label",style:{paddingBottom:0},children:l}),(0,o.jsx)("div",{className:"dataforms-layouts-panel__field-control",children:(0,o.jsx)(u,{field:O,popoverAnchor:m,fieldDefinition:j,data:r,onChange:x,labelPosition:g})})]}):g==="none"?(0,o.jsx)("div",{className:"dataforms-layouts-panel__field",children:(0,o.jsx)(u,{field:O,popoverAnchor:m,fieldDefinition:j,data:r,onChange:x,labelPosition:g})}):(0,o.jsxs)(b.__experimentalHStack,{ref:h,className:"dataforms-layouts-panel__field",children:[(0,o.jsx)("div",{className:"dataforms-layouts-panel__field-label",children:l}),(0,o.jsx)("div",{className:"dataforms-layouts-panel__field-control",children:(0,o.jsx)(u,{field:O,popoverAnchor:m,fieldDefinition:j,data:r,onChange:x,labelPosition:g})})]})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataforms-layouts/regular/index.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=o;var b=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataform-context/index.js")),d=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataforms-layouts/data-form-layout.js"),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataforms-layouts/is-combined-field.js"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function f({title:_}){return(0,a.jsx)(s.__experimentalVStack,{className:"dataforms-layouts-regular__header",spacing:4,children:(0,a.jsxs)(s.__experimentalHStack,{alignment:"center",children:[(0,a.jsx)(s.__experimentalHeading,{level:2,size:13,children:_}),(0,a.jsx)(s.__experimentalSpacer,{})]})})}function o({data:_,field:u,onChange:i,hideLabelFromVision:r}){var O;const{fields:x}=(0,b.useContext)(t.default),R=(0,b.useMemo)(()=>(0,w.isCombinedField)(u)?{fields:u.children.map(g=>typeof g=="string"?{id:g}:g),type:"regular"}:{type:"regular",fields:[]},[u]);if((0,w.isCombinedField)(u))return(0,a.jsxs)(a.Fragment,{children:[!r&&u.label&&(0,a.jsx)(f,{title:u.label}),(0,a.jsx)(d.DataFormLayout,{data:_,form:R,onChange:i})]});const v=(O=u.labelPosition)!==null&&O!==void 0?O:"top",j=x.find(g=>g.id===u.id);return j?v==="side"?(0,a.jsxs)(s.__experimentalHStack,{className:"dataforms-layouts-regular__field",children:[(0,a.jsx)("div",{className:"dataforms-layouts-regular__field-label",children:j.label}),(0,a.jsx)("div",{className:"dataforms-layouts-regular__field-control",children:(0,a.jsx)(j.Edit,{data:_,field:j,onChange:i,hideLabelFromVision:!0},j.id)})]}):(0,a.jsx)("div",{className:"dataforms-layouts-regular__field",children:(0,a.jsx)(j.Edit,{data:_,field:j,onChange:i,hideLabelFromVision:v==="none"?!0:r})}):null}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataviews-layouts/grid/index.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=x;var b=c(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),s=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+compose@7.19.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/lock-unlock.js"),a=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-item-actions/index.js")),f=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-selection-checkbox/index.js")),o=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-bulk-actions/index.js"),_=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataviews-layouts/utils/get-clickable-item-props.js")),u=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataviews-layouts/grid/preview-size-picker.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Badge:r}=(0,w.unlock)(s.privateApis);function O({view:R,selection:v,onChangeSelection:j,onClickItem:g,isItemClickable:m,getItemId:h,item:l,actions:p,mediaField:y,titleField:C,descriptionField:I,regularFields:T,badgeFields:D,hasBulkActions:F}){const{showTitle:E=!0,showMedia:S=!0,showDescription:P=!0}=R,A=(0,o.useHasAPossibleBulkAction)(p,l),N=h(l),B=(0,d.useInstanceId)(O),M=v.includes(N),z=y?.render?(0,i.jsx)(y.render,{item:l}):null,L=E&&C?.render?(0,i.jsx)(C.render,{item:l}):null,W=(0,_.default)({item:l,isItemClickable:m,onClickItem:g,className:"dataviews-view-grid__media"}),Y=(0,_.default)({item:l,isItemClickable:m,onClickItem:g,className:"dataviews-view-grid__title-field dataviews-title-field"});let K,J;return m(l)&&g&&(L?(K={"aria-labelledby":`dataviews-view-grid__title-field-${B}`},J={id:`dataviews-view-grid__title-field-${B}`}):K={"aria-label":(0,t.__)("Navigate to item")}),(0,i.jsxs)(s.__experimentalVStack,{spacing:0,className:(0,b.default)("dataviews-view-grid__card",{"is-selected":A&&M}),onClickCapture:G=>{if(G.ctrlKey||G.metaKey){if(G.stopPropagation(),G.preventDefault(),!A)return;j(v.includes(N)?v.filter(X=>N!==X):[...v,N])}},children:[S&&z&&(0,i.jsx)("div",{...W,...K,children:z}),F&&S&&z&&(0,i.jsx)(f.default,{item:l,selection:v,onChangeSelection:j,getItemId:h,titleField:C,disabled:!A}),(0,i.jsxs)(s.__experimentalHStack,{justify:"space-between",className:"dataviews-view-grid__title-actions",children:[(0,i.jsx)("div",{...Y,...J,children:L}),!!p?.length&&(0,i.jsx)(a.default,{item:l,actions:p,isCompact:!0})]}),(0,i.jsxs)(s.__experimentalVStack,{spacing:1,children:[P&&I?.render&&(0,i.jsx)(I.render,{item:l}),!!D?.length&&(0,i.jsx)(s.__experimentalHStack,{className:"dataviews-view-grid__badge-fields",spacing:2,wrap:!0,alignment:"top",justify:"flex-start",children:D.map(G=>(0,i.jsx)(r,{className:"dataviews-view-grid__field-value",children:(0,i.jsx)(G.render,{item:l})},G.id))}),!!T?.length&&(0,i.jsx)(s.__experimentalVStack,{className:"dataviews-view-grid__fields",spacing:1,children:T.map(G=>(0,i.jsx)(s.Flex,{className:"dataviews-view-grid__field",gap:1,justify:"flex-start",expanded:!0,style:{height:"auto"},direction:"row",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.FlexItem,{className:"dataviews-view-grid__field-name",children:G.header}),(0,i.jsx)(s.FlexItem,{className:"dataviews-view-grid__field-value",style:{maxHeight:"none"},children:(0,i.jsx)(G.render,{item:l})})]})},G.id))})]})]},N)}function x({actions:R,data:v,fields:j,getItemId:g,isLoading:m,onChangeSelection:h,onClickItem:l,isItemClickable:p,selection:y,view:C}){var I;const T=j.find(L=>L.id===C?.titleField),D=j.find(L=>L.id===C?.mediaField),F=j.find(L=>L.id===C?.descriptionField),E=(I=C.fields)!==null&&I!==void 0?I:[],{regularFields:S,badgeFields:P}=E.reduce((L,W)=>{const Y=j.find(J=>J.id===W);if(!Y)return L;const K=C.layout?.badgeFields?.includes(W)?"badgeFields":"regularFields";return L[K].push(Y),L},{regularFields:[],badgeFields:[]}),A=!!v?.length,N=(0,u.useUpdatedPreviewSizeOnViewportChange)(),B=(0,o.useSomeItemHasAPossibleBulkAction)(R,v),M=N||C.layout?.previewSize,z=M?{gridTemplateColumns:`repeat(${M}, minmax(0, 1fr))`}:{};return(0,i.jsxs)(i.Fragment,{children:[A&&(0,i.jsx)(s.__experimentalGrid,{gap:8,columns:2,alignment:"top",className:"dataviews-view-grid",style:z,"aria-busy":m,children:v.map(L=>(0,i.jsx)(O,{view:C,selection:y,onChangeSelection:h,onClickItem:l,isItemClickable:p,getItemId:g,item:L,actions:R,mediaField:D,titleField:T,descriptionField:F,regularFields:S,badgeFields:P,hasBulkActions:B},g(L)))}),!A&&(0,i.jsx)("div",{className:(0,b.default)({"dataviews-loading":m,"dataviews-no-results":!m}),children:(0,i.jsx)("p",{children:m?(0,i.jsx)(s.Spinner,{}):(0,t.__)("No results")})})]})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataviews-layouts/grid/preview-size-picker.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=u,n.useUpdatedPreviewSizeOnViewportChange=_;var b=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),d=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),w=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a={xhuge:{min:3,max:6,default:5},huge:{min:2,max:4,default:4},xlarge:{min:2,max:3,default:3},large:{min:1,max:2,default:2},mobile:{min:1,max:2,default:2}},f={xhuge:1520,huge:1140,xlarge:780,large:480,mobile:0};function o(){const i=(0,t.useContext)(d.default).containerWidth;for(const[r,O]of Object.entries(f))if(i>=O)return r;return"mobile"}function _(){const i=(0,t.useContext)(d.default).view,r=o();return(0,t.useMemo)(()=>{const O=i.layout?.previewSize;let x;if(!O)return;const R=a[r];return O<R.min&&(x=R.min),O>R.max&&(x=R.max),x},[r,i])}function u(){const i=o(),r=(0,t.useContext)(d.default),O=r.view,x=a[i],R=O.layout?.previewSize||x.default,v=(0,t.useMemo)(()=>Array.from({length:x.max-x.min+1},(j,g)=>({value:x.min+g})),[x]);return i==="mobile"?null:(0,w.jsx)(b.RangeControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,showTooltip:!1,label:(0,s.__)("Preview size"),value:x.max+x.min-R,marks:v,min:x.min,max:x.max,withInputField:!1,onChange:(j=0)=>{r.onChangeView({...O,layout:{...O.layout,previewSize:x.max+x.min-j}})},step:1})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataviews-layouts/index.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.VIEW_LAYOUTS=void 0;var b=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),t=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/index.js")),d=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataviews-layouts/grid/index.js")),w=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataviews-layouts/list/index.js")),a=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/constants.js"),f=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataviews-layouts/grid/preview-size-picker.js")),o=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/density-picker.js"));const _=n.VIEW_LAYOUTS=[{type:a.LAYOUT_TABLE,label:(0,b.__)("Table"),component:t.default,icon:s.blockTable,viewConfigOptions:o.default},{type:a.LAYOUT_GRID,label:(0,b.__)("Grid"),component:d.default,icon:s.category,viewConfigOptions:f.default},{type:a.LAYOUT_LIST,label:(0,b.__)("List"),component:w.default,icon:(0,b.isRTL)()?s.formatListBulletsRTL:s.formatListBullets}]},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataviews-layouts/list/index.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=g;var b=c(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),s=e("../../../node_modules/.pnpm/@wordpress+compose@7.19.0_react@18.3.1/node_modules/@wordpress/compose/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),f=e("../../../node_modules/.pnpm/@wordpress+data@10.19.0_react@18.3.1/node_modules/@wordpress/data/build-module/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/lock-unlock.js"),_=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-item-actions/index.js"),u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Menu:i}=(0,o.unlock)(t.privateApis);function r(m){return`${m}-item-wrapper`}function O(m,h){return`${m}-primary-action-${h}`}function x(m){return`${m}-dropdown`}function R({idPrefix:m,primaryAction:h,item:l}){const p=(0,f.useRegistry)(),[y,C]=(0,d.useState)(!1),I=O(m,h.id),T=typeof h.label=="string"?h.label:h.label([l]);return"RenderModal"in h?(0,u.jsx)("div",{role:"gridcell",children:(0,u.jsx)(t.Composite.Item,{id:I,render:(0,u.jsx)(t.Button,{label:T,disabled:!!h.disabled,accessibleWhenDisabled:!0,icon:h.icon,isDestructive:h.isDestructive,size:"small",onClick:()=>C(!0)}),children:y&&(0,u.jsx)(_.ActionModal,{action:h,items:[l],closeModal:()=>C(!1)})})},h.id):(0,u.jsx)("div",{role:"gridcell",children:(0,u.jsx)(t.Composite.Item,{id:I,render:(0,u.jsx)(t.Button,{label:T,disabled:!!h.disabled,accessibleWhenDisabled:!0,icon:h.icon,isDestructive:h.isDestructive,size:"small",onClick:()=>{h.callback([l],{registry:p})}})})},h.id)}function v({view:m,actions:h,idPrefix:l,isSelected:p,item:y,titleField:C,mediaField:I,descriptionField:T,onSelect:D,otherFields:F,onDropdownTriggerKeyDown:E}){const{showTitle:S=!0,showMedia:P=!0,showDescription:A=!0}=m,N=(0,d.useRef)(null),B=`${l}-label`,M=`${l}-description`,z=(0,f.useRegistry)(),[L,W]=(0,d.useState)(!1),[Y,K]=(0,d.useState)(null),J=({type:H})=>{W(H==="mouseenter")};(0,d.useEffect)(()=>{p&&N.current?.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})},[p]);const{primaryAction:G,eligibleActions:X}=(0,d.useMemo)(()=>{const H=h.filter(q=>!q.isEligible||q.isEligible(y));return{primaryAction:H.filter(q=>q.isPrimary&&!!q.icon)[0],eligibleActions:H}},[h,y]),Z=G&&h.length===1,Q=P&&I?.render?(0,u.jsx)("div",{className:"dataviews-view-list__media-wrapper",children:(0,u.jsx)(I.render,{item:y})}):null,$=S&&C?.render?(0,u.jsx)(C.render,{item:y}):null,k=X?.length>0&&(0,u.jsxs)(t.__experimentalHStack,{spacing:3,className:"dataviews-view-list__item-actions",children:[G&&(0,u.jsx)(R,{idPrefix:l,primaryAction:G,item:y}),!Z&&(0,u.jsxs)("div",{role:"gridcell",children:[(0,u.jsxs)(i,{placement:"bottom-end",children:[(0,u.jsx)(i.TriggerButton,{render:(0,u.jsx)(t.Composite.Item,{id:x(l),render:(0,u.jsx)(t.Button,{size:"small",icon:a.moreVertical,label:(0,w.__)("Actions"),accessibleWhenDisabled:!0,disabled:!h.length,onKeyDown:E})})}),(0,u.jsx)(i.Popover,{children:(0,u.jsx)(_.ActionsMenuGroup,{actions:X,item:y,registry:z,setActiveModalAction:K})})]}),!!Y&&(0,u.jsx)(_.ActionModal,{action:Y,items:[y],closeModal:()=>K(null)})]})]});return(0,u.jsx)(t.Composite.Row,{ref:N,render:(0,u.jsx)("div",{}),role:"row",className:(0,b.default)({"is-selected":p,"is-hovered":L}),onMouseEnter:J,onMouseLeave:J,children:(0,u.jsxs)(t.__experimentalHStack,{className:"dataviews-view-list__item-wrapper",spacing:0,children:[(0,u.jsx)("div",{role:"gridcell",children:(0,u.jsx)(t.Composite.Item,{id:r(l),"aria-pressed":p,"aria-labelledby":B,"aria-describedby":M,className:"dataviews-view-list__item",onClick:()=>D(y)})}),(0,u.jsxs)(t.__experimentalHStack,{spacing:3,justify:"start",alignment:"flex-start",children:[Q,(0,u.jsxs)(t.__experimentalVStack,{spacing:1,className:"dataviews-view-list__field-wrapper",children:[(0,u.jsxs)(t.__experimentalHStack,{spacing:0,children:[(0,u.jsx)("div",{className:"dataviews-title-field",id:B,children:$}),k]}),A&&T?.render&&(0,u.jsx)("div",{className:"dataviews-view-list__field",children:(0,u.jsx)(T.render,{item:y})}),(0,u.jsx)("div",{className:"dataviews-view-list__fields",id:M,children:F.map(H=>(0,u.jsxs)("div",{className:"dataviews-view-list__field",children:[(0,u.jsx)(t.VisuallyHidden,{as:"span",className:"dataviews-view-list__field-label",children:H.label}),(0,u.jsx)("span",{className:"dataviews-view-list__field-value",children:(0,u.jsx)(H.render,{item:y})})]},H.id))})]})]})]})})}function j(m){return!!m}function g(m){var h;const{actions:l,data:p,fields:y,getItemId:C,isLoading:I,onChangeSelection:T,selection:D,view:F}=m,E=(0,s.useInstanceId)(g,"view-list"),S=p?.findLast($=>D.includes(C($))),P=y.find($=>$.id===F.titleField),A=y.find($=>$.id===F.mediaField),N=y.find($=>$.id===F.descriptionField),B=((h=F?.fields)!==null&&h!==void 0?h:[]).map($=>y.find(k=>$===k.id)).filter(j),M=$=>T([C($)]),z=(0,d.useCallback)($=>`${E}-${C($)}`,[E,C]),L=(0,d.useCallback)(($,k)=>k.startsWith(z($)),[z]),[W,Y]=(0,d.useState)(void 0);(0,d.useEffect)(()=>{S&&Y(r(z(S)))},[S,z]);const K=p.findIndex($=>L($,W??"")),J=(0,s.usePrevious)(K),G=K!==-1,X=(0,d.useCallback)(($,k)=>{const H=Math.min(p.length-1,Math.max(0,$));if(!p[H])return;const U=z(p[H]),q=k(U);Y(q),document.getElementById(q)?.focus()},[p,z]);(0,d.useEffect)(()=>{!G&&(J!==void 0&&J!==-1)&&X(J,r)},[G,X,J]);const Z=(0,d.useCallback)($=>{$.key==="ArrowDown"&&($.preventDefault(),X(K+1,x)),$.key==="ArrowUp"&&($.preventDefault(),X(K-1,x))},[X,K]),Q=p?.length;return Q?(0,u.jsx)(t.Composite,{id:E,render:(0,u.jsx)("div",{}),className:"dataviews-view-list",role:"grid",activeId:W,setActiveId:Y,children:p.map($=>{const k=z($);return(0,u.jsx)(v,{view:F,idPrefix:k,actions:l,item:$,isSelected:$===S,onSelect:M,mediaField:A,titleField:P,descriptionField:N,otherFields:B,onDropdownTriggerKeyDown:Z},k)})}):(0,u.jsx)("div",{className:(0,b.default)({"dataviews-loading":I,"dataviews-no-results":!Q&&!I}),children:!Q&&(0,u.jsx)("p",{children:I?(0,u.jsx)(t.Spinner,{}):(0,w.__)("No results")})})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/column-header-menu.js":(V,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/lock-unlock.js"),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/utils.js"),a=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/constants.js"),f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const{Menu:o}=(0,d.unlock)(s.privateApis);function _({children:O}){return t.Children.toArray(O).filter(Boolean).map((x,R)=>(0,f.jsxs)(t.Fragment,{children:[R>0&&(0,f.jsx)(o.Separator,{}),x]},R))}const i=(0,t.forwardRef)(function({fieldId:x,view:R,fields:v,onChangeView:j,onHide:g,setOpenedFilter:m,canMove:h=!0},l){var p;const y=(p=R.fields)!==null&&p!==void 0?p:[],C=y?.indexOf(x),I=R.sort?.field===x;let T=!1,D=!1,F=!1,E=[];const S=v.find(A=>A.id===x);if(!S)return null;T=S.enableHiding!==!1,D=S.enableSorting!==!1;const P=S.header;return E=(0,w.sanitizeOperators)(S),F=!R.filters?.some(A=>x===A.field)&&!!S.elements?.length&&!!E.length&&!S.filterBy?.isPrimary,(0,f.jsxs)(o,{children:[(0,f.jsxs)(o.TriggerButton,{render:(0,f.jsx)(s.Button,{size:"compact",className:"dataviews-view-table-header-button",ref:l,variant:"tertiary"}),children:[P,R.sort&&I&&(0,f.jsx)("span",{"aria-hidden":"true",children:a.sortArrows[R.sort.direction]})]}),(0,f.jsx)(o.Popover,{style:{minWidth:"240px"},children:(0,f.jsxs)(_,{children:[D&&(0,f.jsx)(o.Group,{children:a.SORTING_DIRECTIONS.map(A=>{const N=R.sort&&I&&R.sort.direction===A,B=`${x}-${A}`;return(0,f.jsx)(o.RadioItem,{name:"view-table-sorting",value:B,checked:N,onChange:()=>{j({...R,sort:{field:x,direction:A},showLevels:!1})},children:(0,f.jsx)(o.ItemLabel,{children:a.sortLabels[A]})},B)})}),F&&(0,f.jsx)(o.Group,{children:(0,f.jsx)(o.Item,{prefix:(0,f.jsx)(s.Icon,{icon:b.funnel}),onClick:()=>{m(x),j({...R,page:1,filters:[...R.filters||[],{field:x,value:void 0,operator:E[0]}]})},children:(0,f.jsx)(o.ItemLabel,{children:(0,c.__)("Add filter")})})}),(h||T)&&S&&(0,f.jsxs)(o.Group,{children:[h&&(0,f.jsx)(o.Item,{prefix:(0,f.jsx)(s.Icon,{icon:b.arrowLeft}),disabled:C<1,onClick:()=>{var A;j({...R,fields:[...(A=y.slice(0,C-1))!==null&&A!==void 0?A:[],x,y[C-1],...y.slice(C+1)]})},children:(0,f.jsx)(o.ItemLabel,{children:(0,c.__)("Move left")})}),h&&(0,f.jsx)(o.Item,{prefix:(0,f.jsx)(s.Icon,{icon:b.arrowRight}),disabled:C>=y.length-1,onClick:()=>{var A;j({...R,fields:[...(A=y.slice(0,C))!==null&&A!==void 0?A:[],y[C+1],x,...y.slice(C+2)]})},children:(0,f.jsx)(o.ItemLabel,{children:(0,c.__)("Move right")})}),T&&S&&(0,f.jsx)(o.Item,{prefix:(0,f.jsx)(s.Icon,{icon:b.unseen}),onClick:()=>{g(S),j({...R,fields:y.filter(A=>A!==x)})},children:(0,f.jsx)(o.ItemLabel,{children:(0,c.__)("Hide column")})})]})]})})]})});var r=n.default=i},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/column-primary.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var b=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataviews-layouts/utils/get-clickable-item-props.js")),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function d({item:a,level:f,titleField:o,mediaField:_,descriptionField:u,onClickItem:i,isItemClickable:r}){const O=(0,s.default)({item:a,isItemClickable:r,onClickItem:i,className:"dataviews-view-table__cell-content-wrapper dataviews-title-field"});return(0,t.jsxs)(b.__experimentalHStack,{spacing:3,justify:"flex-start",children:[_&&(0,t.jsx)("div",{className:"dataviews-view-table__cell-content-wrapper dataviews-column-primary__media",children:(0,t.jsx)(_.render,{item:a})}),(0,t.jsxs)(b.__experimentalVStack,{spacing:0,children:[o&&(0,t.jsxs)("div",{...O,children:[f!==void 0&&(0,t.jsxs)("span",{className:"dataviews-view-table__level",children:["\u2014".repeat(f),"\xA0"]}),(0,t.jsx)(o.render,{item:a})]}),u&&(0,t.jsx)(u.render,{item:a})]})]})}var w=n.default=d},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/density-picker.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=a;var b=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),d=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-context/index.js")),w=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function a(){const f=(0,t.useContext)(d.default),o=f.view;return(0,w.jsxs)(b.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,size:"__unstable-large",label:(0,s.__)("Density"),value:o.layout?.density||"balanced",onChange:_=>{f.onChangeView({...o,layout:{...o.layout,density:_}})},isBlock:!0,children:[(0,w.jsx)(b.__experimentalToggleGroupControlOption,{value:"comfortable",label:(0,s._x)("Comfortable","Density option for DataView layout")},"comfortable"),(0,w.jsx)(b.__experimentalToggleGroupControlOption,{value:"balanced",label:(0,s._x)("Balanced","Density option for DataView layout")},"balanced"),(0,w.jsx)(b.__experimentalToggleGroupControlOption,{value:"compact",label:(0,s._x)("Compact","Density option for DataView layout")},"compact")]})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/index.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var b=c(e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js")),s=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/index.js"),w=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-selection-checkbox/index.js")),a=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-item-actions/index.js")),f=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/constants.js"),o=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews-bulk-actions/index.js"),_=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/column-header-menu.js")),u=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataviews-layouts/table/column-primary.js")),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function r({item:v,fields:j,column:g}){const m=j.find(h=>h.id===g);return m?(0,i.jsx)("div",{className:"dataviews-view-table__cell-content-wrapper",children:(0,i.jsx)(m.render,{item:v})}):null}function O({hasBulkActions:v,item:j,level:g,actions:m,fields:h,id:l,view:p,titleField:y,mediaField:C,descriptionField:I,selection:T,getItemId:D,isItemClickable:F,onClickItem:E,onChangeSelection:S}){var P;const A=(0,o.useHasAPossibleBulkAction)(m,j),N=A&&T.includes(l),[B,M]=(0,d.useState)(!1),{showTitle:z=!0,showMedia:L=!0,showDescription:W=!0}=p,Y=()=>{M(!0)},K=()=>{M(!1)},J=(0,d.useRef)(!1),G=(P=p.fields)!==null&&P!==void 0?P:[],X=y&&z||C&&L||I&&W;return(0,i.jsxs)("tr",{className:(0,b.default)("dataviews-view-table__row",{"is-selected":A&&N,"is-hovered":B,"has-bulk-actions":A}),onMouseEnter:Y,onMouseLeave:K,onTouchStart:()=>{J.current=!0},onClick:()=>{A&&!J.current&&document.getSelection()?.type!=="Range"&&S(T.includes(l)?T.filter(Z=>l!==Z):[l])},children:[v&&(0,i.jsx)("td",{className:"dataviews-view-table__checkbox-column",style:{width:"1%"},children:(0,i.jsx)("div",{className:"dataviews-view-table__cell-content-wrapper",children:(0,i.jsx)(w.default,{item:j,selection:T,onChangeSelection:S,getItemId:D,titleField:y,disabled:!A})})}),X&&(0,i.jsx)("td",{children:(0,i.jsx)(u.default,{item:j,level:g,titleField:z?y:void 0,mediaField:L?C:void 0,descriptionField:W?I:void 0,isItemClickable:F,onClickItem:E})}),G.map(Z=>{var Q;const{width:$,maxWidth:k,minWidth:H}=(Q=p.layout?.styles?.[Z])!==null&&Q!==void 0?Q:{};return(0,i.jsx)("td",{style:{width:$,maxWidth:k,minWidth:H},children:(0,i.jsx)(r,{fields:h,item:j,column:Z})},Z)}),!!m?.length&&(0,i.jsx)("td",{className:"dataviews-view-table__actions-column",onClick:Z=>Z.stopPropagation(),children:(0,i.jsx)(a.default,{item:j,actions:m})})]})}function x({actions:v,data:j,fields:g,getItemId:m,getItemLevel:h,isLoading:l=!1,onChangeView:p,onChangeSelection:y,selection:C,setOpenedFilter:I,onClickItem:T,isItemClickable:D,view:F}){var E;const S=(0,d.useRef)(new Map),P=(0,d.useRef)(),[A,N]=(0,d.useState)(),B=(0,o.useSomeItemHasAPossibleBulkAction)(v,j);(0,d.useEffect)(()=>{P.current&&(P.current.focus(),P.current=void 0)});const M=(0,d.useId)();if(A){P.current=A,N(void 0);return}const z=k=>{const H=S.current.get(k.id),U=H?S.current.get(H.fallback):void 0;N(U?.node)},L=!!j?.length,W=g.find(k=>k.id===F.titleField),Y=g.find(k=>k.id===F.mediaField),K=g.find(k=>k.id===F.descriptionField),{showTitle:J=!0,showMedia:G=!0,showDescription:X=!0}=F,Z=W&&J||Y&&G||K&&X,Q=(E=F.fields)!==null&&E!==void 0?E:[],$=(k,H)=>U=>{U?S.current.set(k,{node:U,fallback:Q[H>0?H-1:1]}):S.current.delete(k)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("table",{className:(0,b.default)("dataviews-view-table",{[`has-${F.layout?.density}-density`]:F.layout?.density&&["compact","comfortable"].includes(F.layout.density)}),"aria-busy":l,"aria-describedby":M,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{className:"dataviews-view-table__row",children:[B&&(0,i.jsx)("th",{className:"dataviews-view-table__checkbox-column",style:{width:"1%"},scope:"col",children:(0,i.jsx)(o.BulkSelectionCheckbox,{selection:C,onChangeSelection:y,data:j,actions:v,getItemId:m})}),Z&&(0,i.jsx)("th",{scope:"col",children:(0,i.jsx)("span",{className:"dataviews-view-table-header",children:W&&(0,i.jsx)(_.default,{ref:$(W.id,0),fieldId:W.id,view:F,fields:g,onChangeView:p,onHide:z,setOpenedFilter:I,canMove:!1})})}),Q.map((k,H)=>{var U;const{width:q,maxWidth:ee,minWidth:se}=(U=F.layout?.styles?.[k])!==null&&U!==void 0?U:{};return(0,i.jsx)("th",{style:{width:q,maxWidth:ee,minWidth:se},"aria-sort":F.sort?.direction&&F.sort?.field===k?f.sortValues[F.sort.direction]:void 0,scope:"col",children:(0,i.jsx)(_.default,{ref:$(k,H),fieldId:k,view:F,fields:g,onChangeView:p,onHide:z,setOpenedFilter:I})},k)}),!!v?.length&&(0,i.jsx)("th",{className:"dataviews-view-table__actions-column",children:(0,i.jsx)("span",{className:"dataviews-view-table-header",children:(0,s.__)("Actions")})})]})}),(0,i.jsx)("tbody",{children:L&&j.map((k,H)=>(0,i.jsx)(O,{item:k,level:F.showLevels&&typeof h=="function"?h(k):void 0,hasBulkActions:B,actions:v,fields:g,id:m(k)||H.toString(),view:F,titleField:W,mediaField:Y,descriptionField:K,selection:C,getItemId:m,onChangeSelection:y,onClickItem:T,isItemClickable:D},m(k)))})]}),(0,i.jsx)("div",{className:(0,b.default)({"dataviews-loading":l,"dataviews-no-results":!L&&!l}),id:M,children:!L&&(0,i.jsx)("p",{children:l?(0,i.jsx)(t.Spinner,{}):(0,s.__)("No results")})})]})}var R=n.default=x},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataviews-layouts/utils/get-clickable-item-props.js":(V,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=e;function e({item:c,isItemClickable:b,onClickItem:s,className:t}){return!b(c)||!s?{className:t}:{className:t?`${t} ${t}--clickable`:void 0,role:"button",tabIndex:0,onClick:d=>{d.stopPropagation(),s(c)},onKeyDown:d=>{(d.key==="Enter"||d.key===""||d.key===" ")&&(d.stopPropagation(),s(c))}}}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/field-types/datetime.js":(V,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;function e(s,t,d){const w=new Date(s).getTime(),a=new Date(t).getTime();return d==="asc"?w-a:a-w}function c(s,t){return!(t?.elements&&!(t?.elements.map(w=>w.value)).includes(s))}var b=n.default={sort:e,isValid:c,Edit:"datetime"}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/field-types/index.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=d;var b=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/field-types/integer.js")),s=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/field-types/text.js")),t=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/field-types/datetime.js"));function d(w){return w==="integer"?b.default:w==="text"?s.default:w==="datetime"?t.default:{sort:(a,f,o)=>typeof a=="number"&&typeof f=="number"?o==="asc"?a-f:f-a:o==="asc"?a.localeCompare(f):f.localeCompare(a),isValid:(a,f)=>!(f?.elements&&!(f?.elements?.map(_=>_.value)).includes(a)),Edit:()=>null}}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/field-types/integer.js":(V,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;function e(s,t,d){return d==="asc"?s-t:t-s}function c(s,t){return!(s===""||!Number.isInteger(Number(s))||t?.elements&&!(t?.elements.map(w=>w.value)).includes(Number(s)))}var b=n.default={sort:e,isValid:c,Edit:"integer"}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/field-types/text.js":(V,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;function e(s,t,d){return d==="asc"?s.localeCompare(t):t.localeCompare(s)}function c(s,t){return!(t?.elements&&!(t?.elements?.map(w=>w.value)).includes(s))}var b=n.default={sort:e,isValid:c,Edit:"text"}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/filter-and-sort-data-view.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.filterSortAndPaginate=a;var b=c(e("../../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js")),s=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/constants.js"),t=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/normalize-fields.js");function d(f=""){return(0,b.default)(f.trim().toLowerCase())}const w=[];function a(f,o,_){if(!f)return{data:w,paginationInfo:{totalItems:0,totalPages:0}};const u=(0,t.normalizeFields)(_);let i=[...f];if(o.search){const x=d(o.search);i=i.filter(R=>u.filter(v=>v.enableGlobalSearch).map(v=>d(v.getValue({item:R}))).some(v=>v.includes(x)))}if(o.filters&&o.filters?.length>0&&o.filters.forEach(x=>{const R=u.find(v=>v.id===x.field);R&&(x.operator===s.OPERATOR_IS_ANY&&x?.value?.length>0?i=i.filter(v=>{const j=R.getValue({item:v});return Array.isArray(j)?x.value.some(g=>j.includes(g)):typeof j=="string"?x.value.includes(j):!1}):x.operator===s.OPERATOR_IS_NONE&&x?.value?.length>0?i=i.filter(v=>{const j=R.getValue({item:v});return Array.isArray(j)?!x.value.some(g=>j.includes(g)):typeof j=="string"?!x.value.includes(j):!1}):x.operator===s.OPERATOR_IS_ALL&&x?.value?.length>0?i=i.filter(v=>x.value.every(j=>R.getValue({item:v})?.includes(j))):x.operator===s.OPERATOR_IS_NOT_ALL&&x?.value?.length>0?i=i.filter(v=>x.value.every(j=>!R.getValue({item:v})?.includes(j))):x.operator===s.OPERATOR_IS?i=i.filter(v=>x.value===R.getValue({item:v})):x.operator===s.OPERATOR_IS_NOT&&(i=i.filter(v=>x.value!==R.getValue({item:v}))))}),o.sort){const x=o.sort.field,R=u.find(v=>v.id===x);R&&i.sort((v,j)=>{var g;return R.sort(v,j,(g=o.sort?.direction)!==null&&g!==void 0?g:"desc")})}let r=i.length,O=1;if(o.page!==void 0&&o.perPage!==void 0){const x=(o.page-1)*o.perPage;r=i?.length||0,O=Math.ceil(r/o.perPage),i=i?.slice(x,x+o.perPage)}return{data:i,paginationInfo:{totalItems:r,totalPages:O}}}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/index.js":(V,n,e)=>{var c,b=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");c={value:!0},c={enumerable:!0,get:function(){return t.default}},Object.defineProperty(n,"Vw",{enumerable:!0,get:function(){return s.default}}),c={enumerable:!0,get:function(){return d.VIEW_LAYOUTS}},Object.defineProperty(n,"Pp",{enumerable:!0,get:function(){return w.filterSortAndPaginate}}),c={enumerable:!0,get:function(){return a.isItemValid}};var s=b(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataviews/index.js")),t=b(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/components/dataform/index.js")),d=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataviews-layouts/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/filter-and-sort-data-view.js"),a=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/validation.js")},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/lock-unlock.js":(V,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.unlock=n.lock=void 0;var c=e("../../../node_modules/.pnpm/@wordpress+private-apis@1.19.0/node_modules/@wordpress/private-apis/build-module/index.js");const{lock:b,unlock:s}=(0,c.__dangerousOptInToUnstableAPIsOnlyForCoreModules)("I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.","@wordpress/dataviews");n.unlock=s,n.lock=b},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/normalize-fields.js":(V,n,e)=>{var c=e("../../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.normalizeFields=d;var b=c(e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/field-types/index.js")),s=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/dataform-controls/index.js");const t=w=>({item:a})=>{const f=w.split(".");let o=a;for(const _ of f)o.hasOwnProperty(_)?o=o[_]:o=void 0;return o};function d(w){return w.map(a=>{var f,o,_,u;const i=(0,b.default)(a.type),r=a.getValue||t(a.id),O=(f=a.sort)!==null&&f!==void 0?f:function(m,h,l){return i.sort(r({item:m}),r({item:h}),l)},x=(o=a.isValid)!==null&&o!==void 0?o:function(m,h){return i.isValid(r({item:m}),h)},R=(0,s.getControl)(a,i),v=({item:g})=>{const m=r({item:g});return a?.elements?.find(h=>h.value===m)?.label||r({item:g})},j=a.render||(a.elements?v:r);return{...a,label:a.label||a.id,header:a.header||a.label||a.id,getValue:r,render:j,sort:O,isValid:x,Edit:R,enableHiding:(_=a.enableHiding)!==null&&_!==void 0?_:!0,enableSorting:(u=a.enableSorting)!==null&&u!==void 0?u:!0}})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/normalize-form-fields.js":(V,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=e;function e(c){var b,s,t;let d="regular";["regular","panel"].includes((b=c.type)!==null&&b!==void 0?b:"")&&(d=c.type);const w=(s=c.labelPosition)!==null&&s!==void 0?s:d==="regular"?"top":"side";return((t=c.fields)!==null&&t!==void 0?t:[]).map(a=>{var f,o;if(typeof a=="string")return{id:a,layout:d,labelPosition:w};const _=(f=a.layout)!==null&&f!==void 0?f:d,u=(o=a.labelPosition)!==null&&o!==void 0?o:_==="regular"?"top":"side";return{...a,layout:_,labelPosition:u}})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/utils.js":(V,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.sanitizeOperators=b;var c=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/constants.js");function b(s){let t=s.filterBy?.operators;return(!t||!Array.isArray(t))&&(t=[c.OPERATOR_IS_ANY,c.OPERATOR_IS_NONE]),t=t.filter(d=>c.ALL_OPERATORS.includes(d)),(t.includes(c.OPERATOR_IS)||t.includes(c.OPERATOR_IS_NOT))&&(t=t.filter(d=>[c.OPERATOR_IS,c.OPERATOR_IS_NOT].includes(d))),t}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/validation.js":(V,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.isItemValid=b;var c=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build/normalize-fields.js");function b(s,t,d){return(0,c.normalizeFields)(t.filter(({id:a})=>!!d.fields?.includes(a))).every(a=>a.isValid(s,{elements:a.elements}))}},"../../../node_modules/.pnpm/@wordpress+undo-manager@1.19.0/node_modules/@wordpress/undo-manager/build-module/index.js":(V,n,e)=>{e.d(n,{u:()=>t});var c=e("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.19.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js");function b(d,w){const a={...d};return Object.entries(w).forEach(([f,o])=>{a[f]?a[f]={...a[f],to:o.to}:a[f]=o}),a}const s=(d,w)=>{const a=d?.findIndex(({id:o})=>typeof o=="string"?o===w.id:(0,c.Ay)(o,w.id)),f=[...d];return a!==-1?f[a]={id:w.id,changes:b(f[a].changes,w.changes)}:f.push(w),f};function t(){let d=[],w=[],a=0;const f=()=>{d=d.slice(0,a||void 0),a=0},o=()=>{var u;const i=d.length===0?0:d.length-1;let r=(u=d[i])!==null&&u!==void 0?u:[];w.forEach(O=>{r=s(r,O)}),w=[],d[i]=r},_=u=>!u.filter(({changes:r})=>Object.values(r).some(({from:O,to:x})=>typeof O!="function"&&typeof x!="function"&&!(0,c.Ay)(O,x))).length;return{addRecord(u,i=!1){const r=!u||_(u);if(i){if(r)return;u.forEach(O=>{w=s(w,O)})}else{if(f(),w.length&&o(),r)return;d.push(u)}},undo(){w.length&&(f(),o());const u=d[d.length-1+a];if(u)return a-=1,u},redo(){const u=d[d.length+a];if(u)return a+=1,u},hasUndo(){return!!d[d.length-1+a]},hasRedo(){return!!d[d.length+a]}}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build-style/style.css":(V,n,e)=>{e.d(n,{A:()=>w});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=e.n(c),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(s),d=t()(b());d.push([V.id,`/**
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
  opacity: 1;
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
.dataviews-view-table tr td:first-child .dataviews-view-table-header,
.dataviews-view-table tr th:first-child .dataviews-view-table-header-button,
.dataviews-view-table tr th:first-child .dataviews-view-table-header {
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
}`,""]);const w=d}}]);
