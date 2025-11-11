(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9051],{"../../../node_modules/.pnpm/@wordpress+dataviews@10.2.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_a91a9955fb93daf0aecd43f380e81fdc/node_modules/@wordpress/dataviews/build-module/components/dataviews/index.js":((Ue,ue,c)=>{"use strict";c.d(ue,{A:()=>Qa});var e=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),x=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js"),u=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),$=c("../../../node_modules/.pnpm/@wordpress+compose@7.34.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-resize-observer/index.js"),v=c("../../../node_modules/.pnpm/@wordpress+compose@7.34.0_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/throttle/index.js"),I=c("../../../node_modules/.pnpm/@wordpress+dataviews@10.2.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_a91a9955fb93daf0aecd43f380e81fdc/node_modules/@wordpress/dataviews/build-module/constants.js");const Ne=(0,u.createContext)({view:{type:I.Ad},onChangeView:()=>{},fields:[],data:[],paginationInfo:{totalItems:0,totalPages:0},selection:[],onChangeSelection:()=>{},setOpenedFilter:()=>{},openedFilter:null,getItemId:t=>t.id,isItemClickable:()=>!0,renderItemLink:void 0,containerWidth:0,containerRef:(0,u.createRef)(),resizeObserverRef:()=>{},defaultLayouts:{list:{},grid:{},table:{}},filters:[],isShowingFilter:!1,setIsShowingFilter:()=>{},hasInfiniteScrollHandler:!1,config:{perPageSizes:[]}});Ne.displayName="DataViewsContext";var K=Ne,p=c("../../../node_modules/.pnpm/@wordpress+i18n@6.7.0/node_modules/@wordpress/i18n/build-module/index.js"),D=c("../../../node_modules/.pnpm/@wordpress+primitives@4.34.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),xe=(0,e.jsx)(D.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)(D.wA,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v3.5h-15V5c0-.3.2-.5.5-.5zm8 5.5h6.5v3.5H13V10zm-1.5 3.5h-7V10h7v3.5zm-7 5.5v-4h7v4.5H5c-.3 0-.5-.2-.5-.5zm14.5.5h-6V15h6.5v4c0 .3-.2.5-.5.5z"})}),he=c("../../../node_modules/.pnpm/@wordpress+icons@11.1.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/category.js"),De=(0,e.jsx)(D.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,e.jsx)(D.wA,{d:"M4 8.8h8.9V7.2H4v1.6zm0 7h8.9v-1.5H4v1.5zM18 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"})}),Me=(0,e.jsx)(D.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,e.jsx)(D.wA,{d:"M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})}),J=c("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),ae=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),ve=c("../../../node_modules/.pnpm/@wordpress+keycodes@4.34.0/node_modules/@wordpress/keycodes/build-module/platform.js"),ye=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/checkbox-control/index.js");function Ge({selection:t,onChangeSelection:s,item:a,getItemId:i,titleField:r,disabled:l,...d}){const f=i(a),w=!l&&t.includes(f),b=r?.getValue?.({item:a})||(0,p.__)("(no title)");return(0,e.jsx)(ye.A,{className:"dataviews-selection-checkbox",__nextHasNoMarginBottom:!0,"aria-label":b,"aria-disabled":l,checked:w,onChange:()=>{l||s(t.includes(f)?t.filter(y=>f!==y):[...t,f])},...d})}var T=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/private-apis.js"),Ae=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),lt=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/modal/index.js"),ct=c("../../../node_modules/.pnpm/@wordpress+icons@11.1.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/more-vertical.js"),qe=c("../../../node_modules/.pnpm/@wordpress+data@10.34.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js"),k=c("../../../node_modules/.pnpm/@wordpress+compose@7.34.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js"),ne=c("../../../node_modules/.pnpm/@wordpress+dataviews@10.2.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_a91a9955fb93daf0aecd43f380e81fdc/node_modules/@wordpress/dataviews/build-module/lock-unlock.js");const{Menu:z,kebabCase:F}=(0,ne.T)(T.j);function Be({action:t,onClick:s,items:a}){const i=typeof t.label=="string"?t.label:t.label(a);return(0,e.jsx)(Ae.Ay,{disabled:!!t.disabled,accessibleWhenDisabled:!0,size:"compact",onClick:s,children:i})}function yt({action:t,onClick:s,items:a}){const i=typeof t.label=="string"?t.label:t.label(a);return(0,e.jsx)(z.Item,{disabled:t.disabled,onClick:s,children:(0,e.jsx)(z.ItemLabel,{children:i})})}function ht({action:t,items:s,closeModal:a}){const i=typeof t.label=="string"?t.label:t.label(s),r=typeof t.modalHeader=="function"?t.modalHeader(s):t.modalHeader;return(0,e.jsx)(lt.A,{title:r||i,__experimentalHideHeader:!!t.hideModalHeader,onRequestClose:a,focusOnMount:t.modalFocusOnMount??!0,size:t.modalSize||"medium",overlayClassName:`dataviews-action-modal dataviews-action-modal__${F(t.id)}`,children:(0,e.jsx)(t.RenderModal,{items:s,closeModal:a})})}function h({actions:t,item:s,registry:a,setActiveModalAction:i}){return(0,e.jsx)(z.Group,{children:t.map(r=>(0,e.jsx)(yt,{action:r,onClick:()=>{if("RenderModal"in r){i(r);return}r.callback([s],{registry:a})},items:[s]},r.id))})}function _({item:t,actions:s,isCompact:a}){const i=(0,qe.A)(),{primaryActions:r,eligibleActions:l}=(0,u.useMemo)(()=>{const d=s.filter(w=>!w.isEligible||w.isEligible(t));return{primaryActions:d.filter(w=>w.isPrimary),eligibleActions:d}},[s,t]);return a?(0,e.jsx)(V,{item:t,actions:l,isSmall:!0,registry:i}):(0,e.jsxs)(x.A,{spacing:0,justify:"flex-end",className:"dataviews-item-actions",style:{flexShrink:0,width:"auto"},children:[(0,e.jsx)(G,{item:t,actions:r,registry:i}),r.length<l.length&&(0,e.jsx)(V,{item:t,actions:l,registry:i})]})}function V({item:t,actions:s,isSmall:a,registry:i}){const[r,l]=(0,u.useState)(null);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(z,{placement:"bottom-end",children:[(0,e.jsx)(z.TriggerButton,{render:(0,e.jsx)(Ae.Ay,{size:a?"small":"compact",icon:ct.A,label:(0,p.__)("Actions"),accessibleWhenDisabled:!0,disabled:!s.length,className:"dataviews-all-actions-button"})}),(0,e.jsx)(z.Popover,{children:(0,e.jsx)(h,{actions:s,item:t,registry:i,setActiveModalAction:l})})]}),!!r&&(0,e.jsx)(ht,{action:r,items:[t],closeModal:()=>l(null)})]})}function G({item:t,actions:s,registry:a}){const[i,r]=(0,u.useState)(null);return(0,k.A)("medium","<")||!Array.isArray(s)||s.length===0?null:(0,e.jsxs)(e.Fragment,{children:[s.map(d=>(0,e.jsx)(Be,{action:d,onClick:()=>{if("RenderModal"in d){r(d);return}d.callback([t],{registry:a})},items:[t]},d.id)),!!i&&(0,e.jsx)(ht,{action:i,items:[t],closeModal:()=>r(null)})]})}var we=c("../../../node_modules/.pnpm/@wordpress+icons@11.1.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close-small.js");function Se({action:t,items:s,ActionTriggerComponent:a}){const[i,r]=(0,u.useState)(!1),l={action:t,onClick:()=>{r(!0)},items:s};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a,{...l}),i&&(0,e.jsx)(ht,{action:t,items:s,closeModal:()=>r(!1)})]})}function ze(t,s){return(0,u.useMemo)(()=>t.some(a=>a.supportsBulk&&(!a.isEligible||a.isEligible(s))),[t,s])}function Ye(t,s){return(0,u.useMemo)(()=>s.some(a=>t.some(i=>i.supportsBulk&&(!i.isEligible||i.isEligible(a)))),[t,s])}function Je({selection:t,onChangeSelection:s,data:a,actions:i,getItemId:r}){const l=(0,u.useMemo)(()=>a.filter(w=>i.some(b=>b.supportsBulk&&(!b.isEligible||b.isEligible(w)))),[a,i]),d=a.filter(w=>t.includes(r(w))&&l.includes(w)),f=d.length===l.length;return(0,e.jsx)(ye.A,{className:"dataviews-view-table-selection-checkbox",__nextHasNoMarginBottom:!0,checked:f,indeterminate:!f&&!!d.length,onChange:()=>{s(f?[]:l.map(w=>r(w)))},"aria-label":f?(0,p.__)("Deselect all"):(0,p.__)("Select all")})}function Y({action:t,onClick:s,isBusy:a,items:i}){const r=typeof t.label=="string"?t.label:t.label(i);return(0,k.A)("medium","<")?(0,e.jsx)(Ae.Ay,{disabled:a,accessibleWhenDisabled:!0,label:r,icon:t.icon,size:"compact",onClick:s,isBusy:a}):(0,e.jsx)(Ae.Ay,{disabled:a,accessibleWhenDisabled:!0,size:"compact",onClick:s,isBusy:a,children:r})}const dt=[];function ut({action:t,selectedItems:s,actionInProgress:a,setActionInProgress:i}){const r=(0,qe.A)(),l=(0,u.useMemo)(()=>s.filter(d=>!t.isEligible||t.isEligible(d)),[t,s]);return"RenderModal"in t?(0,e.jsx)(Se,{action:t,items:l,ActionTriggerComponent:Y},t.id):(0,e.jsx)(Y,{action:t,onClick:async()=>{i(t.id),await t.callback(s,{registry:r}),i(null)},items:l,isBusy:a===t.id},t.id)}function us(t,s,a,i,r,l,d,f,w){const b=l.length>0?(0,p.nv)((0,p._n)("%d Item selected","%d Items selected",l.length),l.length):(0,p.nv)((0,p._n)("%d Item","%d Items",t.length),t.length);return(0,e.jsxs)(x.A,{expanded:!1,className:"dataviews-bulk-actions-footer__container",spacing:3,children:[(0,e.jsx)(Je,{selection:i,onChangeSelection:w,data:t,actions:s,getItemId:a}),(0,e.jsx)("span",{className:"dataviews-bulk-actions-footer__item-count",children:b}),(0,e.jsxs)(x.A,{className:"dataviews-bulk-actions-footer__action-buttons",expanded:!1,spacing:1,children:[r.map(y=>(0,e.jsx)(ut,{action:y,selectedItems:l,actionInProgress:d,setActionInProgress:f},y.id)),l.length>0&&(0,e.jsx)(Ae.Ay,{icon:we.A,showTooltip:!0,tooltipPosition:"top",size:"compact",label:(0,p.__)("Cancel"),disabled:!!d,accessibleWhenDisabled:!1,onClick:()=>{w(dt)}})]})]})}function Os({selection:t,actions:s,onChangeSelection:a,data:i,getItemId:r}){const[l,d]=(0,u.useState)(null),f=(0,u.useRef)(null),w=(0,k.A)("medium","<"),b=(0,u.useMemo)(()=>s.filter(C=>C.supportsBulk),[s]),y=(0,u.useMemo)(()=>i.filter(C=>b.some(N=>!N.isEligible||N.isEligible(C))),[i,b]),O=(0,u.useMemo)(()=>i.filter(C=>t.includes(r(C))&&y.includes(C)),[t,i,r,y]),P=(0,u.useMemo)(()=>s.filter(C=>C.supportsBulk&&(!w||C.icon)&&O.some(N=>!C.isEligible||C.isEligible(N))),[s,O,w]);if(l)f.current||(f.current=us(i,s,r,t,P,O,l,d,a));else return f.current&&(f.current=null),us(i,s,r,t,P,O,l,d,a);return f.current}function es(){const{data:t,selection:s,actions:a=dt,onChangeSelection:i,getItemId:r}=(0,u.useContext)(K);return(0,e.jsx)(Os,{selection:s,onChangeSelection:i,data:t,actions:a,getItemId:r})}var $t=(0,e.jsx)(D.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)(D.wA,{d:"M10 17.5H14V16H10V17.5ZM6 6V7.5H18V6H6ZM8 12.5H16V11H8V12.5Z"})}),Pt=c("../../../node_modules/.pnpm/@wordpress+icons@11.1.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),ts=c("../../../node_modules/.pnpm/@wordpress+icons@11.1.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-right.js"),ss=c("../../../node_modules/.pnpm/@wordpress+icons@11.1.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/unseen.js"),mt=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/icon/index.js");const{Menu:Ke}=(0,ne.T)(T.j);function Ps({children:t}){return u.Children.toArray(t).filter(Boolean).map((s,a)=>(0,e.jsxs)(u.Fragment,{children:[a>0&&(0,e.jsx)(Ke.Separator,{}),s]},a))}var ps=(0,u.forwardRef)(function({fieldId:s,view:a,fields:i,onChangeView:r,onHide:l,setOpenedFilter:d,canMove:f=!0},w){const b=a.fields??[],y=b?.indexOf(s),O=a.sort?.field===s;let P=!1,C=!1,N=!1,A=[];const L=i.find(H=>H.id===s);if(!L)return null;P=L.enableHiding!==!1,C=L.enableSorting!==!1;const X=L.header;return A=!!L.filterBy&&L.filterBy?.operators||[],N=!a.filters?.some(H=>s===H.field)&&!!(L.hasElements||L.Edit)&&L.filterBy!==!1&&!L.filterBy?.isPrimary,!C&&!f&&!P&&!N?X:(0,e.jsxs)(Ke,{children:[(0,e.jsxs)(Ke.TriggerButton,{render:(0,e.jsx)(Ae.Ay,{size:"compact",className:"dataviews-view-table-header-button",ref:w,variant:"tertiary"}),children:[X,a.sort&&O&&(0,e.jsx)("span",{"aria-hidden":"true",children:I.vI[a.sort.direction]})]}),(0,e.jsx)(Ke.Popover,{style:{minWidth:"240px"},children:(0,e.jsxs)(Ps,{children:[C&&(0,e.jsx)(Ke.Group,{children:I.GJ.map(H=>{const ge=a.sort&&O&&a.sort.direction===H,fe=`${s}-${H}`;return(0,e.jsx)(Ke.RadioItem,{name:"view-table-sorting",value:fe,checked:ge,onChange:()=>{r({...a,sort:{field:s,direction:H},showLevels:!1})},children:(0,e.jsx)(Ke.ItemLabel,{children:I.CL[H]})},fe)})}),N&&(0,e.jsx)(Ke.Group,{children:(0,e.jsx)(Ke.Item,{prefix:(0,e.jsx)(mt.A,{icon:$t}),onClick:()=>{d(s),r({...a,page:1,filters:[...a.filters||[],{field:s,value:void 0,operator:A[0]}]})},children:(0,e.jsx)(Ke.ItemLabel,{children:(0,p.__)("Add filter")})})}),(f||P)&&L&&(0,e.jsxs)(Ke.Group,{children:[f&&(0,e.jsx)(Ke.Item,{prefix:(0,e.jsx)(mt.A,{icon:Pt.A}),disabled:y<1,onClick:()=>{r({...a,fields:[...b.slice(0,y-1)??[],s,b[y-1],...b.slice(y+1)]})},children:(0,e.jsx)(Ke.ItemLabel,{children:(0,p.__)("Move left")})}),f&&(0,e.jsx)(Ke.Item,{prefix:(0,e.jsx)(mt.A,{icon:ts.A}),disabled:y>=b.length-1,onClick:()=>{r({...a,fields:[...b.slice(0,y)??[],b[y+1],s,...b.slice(y+2)]})},children:(0,e.jsx)(Ke.ItemLabel,{children:(0,p.__)("Move right")})}),P&&L&&(0,e.jsx)(Ke.Item,{prefix:(0,e.jsx)(mt.A,{icon:ss.A}),onClick:()=>{l(L),r({...a,fields:b.filter(H=>H!==s)})},children:(0,e.jsx)(Ke.ItemLabel,{children:(0,p.__)("Hide column")})})]})]})})]})}),$e=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js");function Nt({item:t,isItemClickable:s,onClickItem:a,className:i}){return!s(t)||!a?{className:i}:{className:i?`${i} ${i}--clickable`:void 0,role:"button",tabIndex:0,onClick:r=>{r.stopPropagation(),a(t)},onKeyDown:r=>{(r.key==="Enter"||r.key===""||r.key===" ")&&(r.stopPropagation(),a(t))}}}function Ut({item:t,isItemClickable:s,onClickItem:a,renderItemLink:i,className:r,children:l,...d}){if(!s(t))return(0,e.jsx)("div",{className:r,...d,children:l});if(i){const w=i({item:t,className:`${r} ${r}--clickable`,...d,children:l});return(0,u.cloneElement)(w,{onClick:b=>{b.stopPropagation(),w.props.onClick&&w.props.onClick(b)},onKeyDown:b=>{(b.key==="Enter"||b.key===""||b.key===" ")&&(b.stopPropagation(),w.props.onKeyDown&&w.props.onKeyDown(b))}})}const f=Nt({item:t,isItemClickable:s,onClickItem:a,className:r});return(0,e.jsx)("div",{...f,...d,children:l})}function Ms({item:t,level:s,titleField:a,mediaField:i,descriptionField:r,onClickItem:l,renderItemLink:d,isItemClickable:f}){return(0,e.jsxs)(x.A,{spacing:3,justify:"flex-start",children:[i&&(0,e.jsx)(Ut,{item:t,isItemClickable:f,onClickItem:l,renderItemLink:d,className:"dataviews-view-table__cell-content-wrapper dataviews-column-primary__media","aria-label":a?(0,p.nv)((0,p.__)("Click item: %s"),a.getValue?.({item:t})):void 0,children:(0,e.jsx)(i.render,{item:t,field:i,config:{sizes:"32px"}})}),(0,e.jsxs)($e.A,{spacing:0,alignment:"flex-start",className:"dataviews-view-table__primary-column-content",children:[a&&(0,e.jsxs)(Ut,{item:t,isItemClickable:f,onClickItem:l,renderItemLink:d,className:"dataviews-view-table__cell-content-wrapper dataviews-title-field",children:[s!==void 0&&s>0&&(0,e.jsxs)("span",{className:"dataviews-view-table__level",children:["\u2014".repeat(s),"\xA0"]}),(0,e.jsx)(a.render,{item:t,field:a})]}),r&&(0,e.jsx)(r.render,{item:t,field:r})]})]})}var Ts=Ms,Kt=c("../../../node_modules/.pnpm/@wordpress+compose@7.34.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-debounce/index.js");const Ds=t=>(0,p.V8)()?Math.abs(t.scrollLeft)<=1:t.scrollLeft+t.clientWidth>=t.scrollWidth-1;function Is({scrollContainerRef:t,enabled:s=!1}){const[a,i]=(0,u.useState)(!1),r=(0,Kt.A)((0,u.useCallback)(()=>{const l=t.current;l&&i(Ds(l))},[t,i]),200);return(0,u.useEffect)(()=>typeof window>"u"||!s||!t.current?()=>{}:(r(),t.current.addEventListener("scroll",r),window.addEventListener("resize",r),()=>{t.current?.removeEventListener("scroll",r),window.removeEventListener("resize",r)}),[t,s]),a}function Gt(t,s){return t.reduce((a,i)=>{const r=s.getValue({item:i});return a.has(r)||a.set(r,[]),a.get(r)?.push(i),a},new Map)}function Rs({item:t,fields:s,column:a,align:i}){const r=s.find(d=>d.id===a);if(!r)return null;const l=(0,J.A)("dataviews-view-table__cell-content-wrapper",{"dataviews-view-table__cell-align-end":i==="end","dataviews-view-table__cell-align-center":i==="center"});return(0,e.jsx)("div",{className:l,children:(0,e.jsx)(r.render,{item:t,field:r})})}function Mt({hasBulkActions:t,item:s,level:a,actions:i,fields:r,id:l,view:d,titleField:f,mediaField:w,descriptionField:b,selection:y,getItemId:O,isItemClickable:P,onClickItem:C,renderItemLink:N,onChangeSelection:A,isActionsColumnSticky:L,posinset:X}){const{paginationInfo:H}=(0,u.useContext)(K),ge=ze(i,s),fe=ge&&y.includes(l),[Z,se]=(0,u.useState)(!1),{showTitle:de=!0,showMedia:ke=!0,showDescription:ce=!0,infiniteScrollEnabled:me}=d,te=()=>{se(!0)},be=()=>{se(!1)},S=(0,u.useRef)(!1),M=d.fields??[],U=f&&de||w&&ke||b&&ce;return(0,e.jsxs)("tr",{className:(0,J.A)("dataviews-view-table__row",{"is-selected":ge&&fe,"is-hovered":Z,"has-bulk-actions":ge}),onMouseEnter:te,onMouseLeave:be,onTouchStart:()=>{S.current=!0},"aria-setsize":me?H.totalItems:void 0,"aria-posinset":X,role:me?"article":void 0,onClick:oe=>{ge&&!S.current&&document.getSelection()?.type!=="Range"&&(((0,ve.H)()?oe.metaKey:oe.ctrlKey)?A(y.includes(l)?y.filter(Ie=>l!==Ie):[...y,l]):A(y.includes(l)?y.filter(Ie=>l!==Ie):[l]))},children:[t&&(0,e.jsx)("td",{className:"dataviews-view-table__checkbox-column",children:(0,e.jsx)("div",{className:"dataviews-view-table__cell-content-wrapper",children:(0,e.jsx)(Ge,{item:s,selection:y,onChangeSelection:A,getItemId:O,titleField:f,disabled:!ge})})}),U&&(0,e.jsx)("td",{children:(0,e.jsx)(Ts,{item:s,level:a,titleField:de?f:void 0,mediaField:ke?w:void 0,descriptionField:ce?b:void 0,isItemClickable:P,onClickItem:C,renderItemLink:N})}),M.map(oe=>{const{width:Ie,maxWidth:We,minWidth:pt,align:xt}=d.layout?.styles?.[oe]??{};return(0,e.jsx)("td",{style:{width:Ie,maxWidth:We,minWidth:pt},children:(0,e.jsx)(Rs,{fields:r,item:s,column:oe,align:xt})},oe)}),!!i?.length&&(0,e.jsx)("td",{className:(0,J.A)("dataviews-view-table__actions-column",{"dataviews-view-table__actions-column--sticky":!0,"dataviews-view-table__actions-column--stuck":L}),onClick:oe=>oe.stopPropagation(),children:(0,e.jsx)(_,{item:s,actions:i})})]})}function Tt({actions:t,data:s,fields:a,getItemId:i,getItemLevel:r,isLoading:l=!1,onChangeView:d,onChangeSelection:f,selection:w,setOpenedFilter:b,onClickItem:y,isItemClickable:O,renderItemLink:P,view:C,className:N,empty:A}){const{containerRef:L}=(0,u.useContext)(K),X=(0,u.useRef)(new Map),H=(0,u.useRef)(),[ge,fe]=(0,u.useState)(),Z=Ye(t,s);(0,u.useEffect)(()=>{H.current&&(H.current.focus(),H.current=void 0)});const se=(0,u.useId)(),de=Is({scrollContainerRef:L,enabled:!!t?.length});if(ge){H.current=ge,fe(void 0);return}const ke=Ce=>{const et=X.current.get(Ce.id),Ve=et?X.current.get(et.fallback):void 0;fe(Ve?.node)},ce=!!s?.length,me=a.find(Ce=>Ce.id===C.titleField),te=a.find(Ce=>Ce.id===C.mediaField),be=a.find(Ce=>Ce.id===C.descriptionField),S=C.groupByField?a.find(Ce=>Ce.id===C.groupByField):null,M=S?Gt(s,S):null,{showTitle:U=!0,showMedia:oe=!0,showDescription:Ie=!0}=C,We=me&&U||te&&oe||be&&Ie,pt=C.fields??[],xt=(Ce,et)=>Ve=>{Ve?X.current.set(Ce,{node:Ve,fallback:pt[et>0?et-1:1]}):X.current.delete(Ce)},kt=C.infiniteScrollEnabled&&!M;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("table",{className:(0,J.A)("dataviews-view-table",N,{[`has-${C.layout?.density}-density`]:C.layout?.density&&["compact","comfortable"].includes(C.layout.density)}),"aria-busy":l,"aria-describedby":se,role:kt?"feed":void 0,children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{className:"dataviews-view-table__row",children:[Z&&(0,e.jsx)("th",{className:"dataviews-view-table__checkbox-column",scope:"col",children:(0,e.jsx)(Je,{selection:w,onChangeSelection:f,data:s,actions:t,getItemId:i})}),We&&(0,e.jsx)("th",{scope:"col",children:me&&(0,e.jsx)(ps,{ref:xt(me.id,0),fieldId:me.id,view:C,fields:a,onChangeView:d,onHide:ke,setOpenedFilter:b,canMove:!1})}),pt.map((Ce,et)=>{const{width:Ve,maxWidth:ot,minWidth:cs,align:Ht}=C.layout?.styles?.[Ce]??{};return(0,e.jsx)("th",{style:{width:Ve,maxWidth:ot,minWidth:cs,textAlign:Ht},"aria-sort":C.sort?.direction&&C.sort?.field===Ce?I.LW[C.sort.direction]:void 0,scope:"col",children:(0,e.jsx)(ps,{ref:xt(Ce,et),fieldId:Ce,view:C,fields:a,onChangeView:d,onHide:ke,setOpenedFilter:b,canMove:C.layout?.enableMoving??!0})},Ce)}),!!t?.length&&(0,e.jsx)("th",{className:(0,J.A)("dataviews-view-table__actions-column",{"dataviews-view-table__actions-column--sticky":!0,"dataviews-view-table__actions-column--stuck":!de}),children:(0,e.jsx)("span",{className:"dataviews-view-table-header",children:(0,p.__)("Actions")})})]})}),ce&&S&&M?Array.from(M.entries()).map(([Ce,et])=>(0,e.jsxs)("tbody",{children:[(0,e.jsx)("tr",{className:"dataviews-view-table__group-header-row",children:(0,e.jsx)("td",{colSpan:pt.length+(We?1:0)+(Z?1:0)+(t?.length?1:0),className:"dataviews-view-table__group-header-cell",children:(0,p.nv)((0,p.__)("%1$s: %2$s"),S.label,Ce)})}),et.map((Ve,ot)=>(0,e.jsx)(Mt,{item:Ve,level:C.showLevels&&typeof r=="function"?r(Ve):void 0,hasBulkActions:Z,actions:t,fields:a,id:i(Ve)||ot.toString(),view:C,titleField:me,mediaField:te,descriptionField:be,selection:w,getItemId:i,onChangeSelection:f,onClickItem:y,renderItemLink:P,isItemClickable:O,isActionsColumnSticky:!de},i(Ve)))]},`group-${Ce}`)):(0,e.jsx)("tbody",{children:ce&&s.map((Ce,et)=>(0,e.jsx)(Mt,{item:Ce,level:C.showLevels&&typeof r=="function"?r(Ce):void 0,hasBulkActions:Z,actions:t,fields:a,id:i(Ce)||et.toString(),view:C,titleField:me,mediaField:te,descriptionField:be,selection:w,getItemId:i,onChangeSelection:f,onClickItem:y,renderItemLink:P,isItemClickable:O,isActionsColumnSticky:!de,posinset:kt?et+1:void 0},i(Ce)))})]}),(0,e.jsxs)("div",{className:(0,J.A)({"dataviews-loading":l,"dataviews-no-results":!ce&&!l}),id:se,children:[!ce&&(l?(0,e.jsx)("p",{children:(0,e.jsx)(ae.Ay,{})}):A),ce&&l&&(0,e.jsx)("p",{className:"dataviews-loading-more",children:(0,e.jsx)(ae.Ay,{})})]})]})}var is=Tt,as=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex/component.js"),rs=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js"),Dt=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-item/component.js"),It=c("../../../node_modules/.pnpm/@wordpress+compose@7.34.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");const Yt=(0,u.forwardRef)(({className:t,previewSize:s,...a},i)=>(0,e.jsx)("div",{ref:i,className:(0,J.A)("dataviews-view-grid-items",t),style:{gridTemplateColumns:s&&`repeat(auto-fill, minmax(${s}px, 1fr))`},...a})),{Badge:Vt}=(0,ne.T)(T.j);function Rt({view:t,selection:s,onChangeSelection:a,onClickItem:i,isItemClickable:r,renderItemLink:l,getItemId:d,item:f,actions:w,mediaField:b,titleField:y,descriptionField:O,regularFields:P,badgeFields:C,hasBulkActions:N,config:A,posinset:L}){const{showTitle:X=!0,showMedia:H=!0,showDescription:ge=!0,infiniteScrollEnabled:fe}=t,Z=ze(w,f),se=d(f),de=(0,It.A)(Rt),ke=s.includes(se),ce=b?.render?(0,e.jsx)(b.render,{item:f,field:b,config:A}):null,me=X&&y?.render?(0,e.jsx)(y.render,{item:f,field:y}):null,te=H&&ce;let be,S;r(f)&&i&&(me?(be={"aria-labelledby":`dataviews-view-grid__title-field-${de}`},S={id:`dataviews-view-grid__title-field-${de}`}):be={"aria-label":(0,p.__)("Navigate to item")});const{paginationInfo:M}=(0,u.useContext)(K);return(0,e.jsxs)($e.A,{spacing:0,className:(0,J.A)("dataviews-view-grid__card",{"is-selected":Z&&ke}),onClickCapture:U=>{if((0,ve.H)()?U.metaKey:U.ctrlKey){if(U.stopPropagation(),U.preventDefault(),!Z)return;a(s.includes(se)?s.filter(oe=>se!==oe):[...s,se])}},role:fe?"article":void 0,"aria-setsize":fe?M.totalItems:void 0,"aria-posinset":L,children:[te&&(0,e.jsx)(Ut,{item:f,isItemClickable:r,onClickItem:i,renderItemLink:l,className:"dataviews-view-grid__media",...be,children:ce}),N&&te&&(0,e.jsx)(Ge,{item:f,selection:s,onChangeSelection:a,getItemId:d,titleField:y,disabled:!Z}),!X&&te&&!!w?.length&&(0,e.jsx)("div",{className:"dataviews-view-grid__media-actions",children:(0,e.jsx)(_,{item:f,actions:w,isCompact:!0})}),X&&(0,e.jsxs)(x.A,{justify:"space-between",className:"dataviews-view-grid__title-actions",children:[(0,e.jsx)(Ut,{item:f,isItemClickable:r,onClickItem:i,renderItemLink:l,className:"dataviews-view-grid__title-field dataviews-title-field",...S,children:me}),!!w?.length&&(0,e.jsx)(_,{item:f,actions:w,isCompact:!0})]}),(0,e.jsxs)($e.A,{spacing:1,children:[ge&&O?.render&&(0,e.jsx)(O.render,{item:f,field:O}),!!C?.length&&(0,e.jsx)(x.A,{className:"dataviews-view-grid__badge-fields",spacing:2,wrap:!0,alignment:"top",justify:"flex-start",children:C.map(U=>(0,e.jsx)(Vt,{className:"dataviews-view-grid__field-value",children:(0,e.jsx)(U.render,{item:f,field:U})},U.id))}),!!P?.length&&(0,e.jsx)($e.A,{className:"dataviews-view-grid__fields",spacing:1,children:P.map(U=>(0,e.jsx)(as.A,{className:"dataviews-view-grid__field",gap:1,justify:"flex-start",expanded:!0,style:{height:"auto"},direction:"row",children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(rs.Ay,{text:U.label,children:(0,e.jsx)(Dt.A,{className:"dataviews-view-grid__field-name",children:U.header})}),(0,e.jsx)(Dt.A,{className:"dataviews-view-grid__field-value",style:{maxHeight:"none"},children:(0,e.jsx)(U.render,{item:f,field:U})})]})},U.id))})]})]},se)}function ms({actions:t,data:s,fields:a,getItemId:i,isLoading:r,onChangeSelection:l,onClickItem:d,isItemClickable:f,renderItemLink:w,selection:b,view:y,className:O,empty:P}){const{resizeObserverRef:C}=(0,u.useContext)(K),N=a.find(te=>te.id===y?.titleField),A=a.find(te=>te.id===y?.mediaField),L=a.find(te=>te.id===y?.descriptionField),X=y.fields??[],{regularFields:H,badgeFields:ge}=X.reduce((te,be)=>{const S=a.find(U=>U.id===be);if(!S)return te;const M=y.layout?.badgeFields?.includes(be)?"badgeFields":"regularFields";return te[M].push(S),te},{regularFields:[],badgeFields:[]}),fe=!!s?.length,Z=Ye(t,s),se=y.layout?.previewSize,de="900px",ke=y.groupByField?a.find(te=>te.id===y.groupByField):null,ce=ke?Gt(s,ke):null,me=y.infiniteScrollEnabled&&!ce;return(0,e.jsxs)(e.Fragment,{children:[fe&&ke&&ce&&(0,e.jsx)($e.A,{spacing:4,children:Array.from(ce.entries()).map(([te,be])=>(0,e.jsxs)($e.A,{spacing:2,children:[(0,e.jsx)("h3",{className:"dataviews-view-grid__group-header",children:(0,p.nv)((0,p.__)("%1$s: %2$s"),ke.label,te)}),(0,e.jsx)(Yt,{className:(0,J.A)("dataviews-view-grid",O),previewSize:se,"aria-busy":r,ref:C,children:be.map(S=>(0,e.jsx)(Rt,{view:y,selection:b,onChangeSelection:l,onClickItem:d,isItemClickable:f,renderItemLink:w,getItemId:i,item:S,actions:t,mediaField:A,titleField:N,descriptionField:L,regularFields:H,badgeFields:ge,hasBulkActions:Z,config:{sizes:de}},i(S)))})]},te))}),fe&&!ce&&(0,e.jsx)(Yt,{className:(0,J.A)("dataviews-view-grid",O),previewSize:se,"aria-busy":r,ref:C,role:me?"feed":void 0,children:s.map((te,be)=>(0,e.jsx)(Rt,{view:y,selection:b,onChangeSelection:l,onClickItem:d,isItemClickable:f,renderItemLink:w,getItemId:i,item:te,actions:t,mediaField:A,titleField:N,descriptionField:L,regularFields:H,badgeFields:ge,hasBulkActions:Z,config:{sizes:de},posinset:me?be+1:void 0},i(te)))}),!fe&&(0,e.jsx)("div",{className:(0,J.A)({"dataviews-loading":r,"dataviews-no-results":!r}),children:r?(0,e.jsx)("p",{children:(0,e.jsx)(ae.Ay,{})}):P}),fe&&r&&(0,e.jsx)("p",{className:"dataviews-loading-more",children:(0,e.jsx)(ae.Ay,{})})]})}var zs=ms,Bs=c("../../../node_modules/.pnpm/@wordpress+compose@7.34.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-previous/index.js"),it=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/composite/index.js"),zt=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js");const{Menu:St}=(0,ne.T)(T.j);function os(t){return`${t}-item-wrapper`}function Fs(t,s){return`${t}-primary-action-${s}`}function jt(t){return`${t}-dropdown`}function Ls({idPrefix:t,primaryAction:s,item:a}){const i=(0,qe.A)(),[r,l]=(0,u.useState)(!1),d=Fs(t,s.id),f=typeof s.label=="string"?s.label:s.label([a]);return"RenderModal"in s?(0,e.jsx)("div",{role:"gridcell",children:(0,e.jsx)(it.e.Item,{id:d,render:(0,e.jsx)(Ae.Ay,{disabled:!!s.disabled,accessibleWhenDisabled:!0,size:"small",onClick:()=>l(!0),variant:"link",children:f}),children:r&&(0,e.jsx)(ht,{action:s,items:[a],closeModal:()=>l(!1)})})},s.id):(0,e.jsx)("div",{role:"gridcell",children:(0,e.jsx)(it.e.Item,{id:d,render:(0,e.jsx)(Ae.Ay,{disabled:!!s.disabled,accessibleWhenDisabled:!0,size:"small",onClick:()=>{s.callback([a],{registry:i})},variant:"link",children:f})})},s.id)}function vs({view:t,actions:s,idPrefix:a,isSelected:i,item:r,titleField:l,mediaField:d,descriptionField:f,onSelect:w,otherFields:b,onDropdownTriggerKeyDown:y,posinset:O}){const{showTitle:P=!0,showMedia:C=!0,showDescription:N=!0,infiniteScrollEnabled:A}=t,L=(0,u.useRef)(null),X=`${a}-label`,H=`${a}-description`,ge=(0,qe.A)(),[fe,Z]=(0,u.useState)(!1),[se,de]=(0,u.useState)(null),ke=({type:oe})=>{Z(oe==="mouseenter")},{paginationInfo:ce}=(0,u.useContext)(K);(0,u.useEffect)(()=>{i&&L.current?.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})},[i]);const{primaryAction:me,eligibleActions:te}=(0,u.useMemo)(()=>{const oe=s.filter(We=>!We.isEligible||We.isEligible(r));return{primaryAction:oe.filter(We=>We.isPrimary)[0],eligibleActions:oe}},[s,r]),be=me&&s.length===1,S=C&&d?.render?(0,e.jsx)("div",{className:"dataviews-view-list__media-wrapper",children:(0,e.jsx)(d.render,{item:r,field:d,config:{sizes:"52px"}})}):null,M=P&&l?.render?(0,e.jsx)(l.render,{item:r,field:l}):null,U=te?.length>0&&(0,e.jsxs)(x.A,{spacing:3,className:"dataviews-view-list__item-actions",children:[me&&(0,e.jsx)(Ls,{idPrefix:a,primaryAction:me,item:r}),!be&&(0,e.jsxs)("div",{role:"gridcell",children:[(0,e.jsxs)(St,{placement:"bottom-end",children:[(0,e.jsx)(St.TriggerButton,{render:(0,e.jsx)(it.e.Item,{id:jt(a),render:(0,e.jsx)(Ae.Ay,{size:"small",icon:ct.A,label:(0,p.__)("Actions"),accessibleWhenDisabled:!0,disabled:!s.length,onKeyDown:y})})}),(0,e.jsx)(St.Popover,{children:(0,e.jsx)(h,{actions:te,item:r,registry:ge,setActiveModalAction:de})})]}),!!se&&(0,e.jsx)(ht,{action:se,items:[r],closeModal:()=>de(null)})]})]});return(0,e.jsx)(it.e.Row,{ref:L,render:(0,e.jsx)("div",{"aria-posinset":O,"aria-setsize":A?ce.totalItems:void 0}),role:A?"article":"row",className:(0,J.A)({"is-selected":i,"is-hovered":fe}),onMouseEnter:ke,onMouseLeave:ke,children:(0,e.jsxs)(x.A,{className:"dataviews-view-list__item-wrapper",spacing:0,children:[(0,e.jsx)("div",{role:"gridcell",children:(0,e.jsx)(it.e.Item,{id:os(a),"aria-pressed":i,"aria-labelledby":X,"aria-describedby":H,className:"dataviews-view-list__item",onClick:()=>w(r)})}),(0,e.jsxs)(x.A,{spacing:3,justify:"start",alignment:"flex-start",children:[S,(0,e.jsxs)($e.A,{spacing:1,className:"dataviews-view-list__field-wrapper",children:[(0,e.jsxs)(x.A,{spacing:0,children:[(0,e.jsx)("div",{className:"dataviews-title-field",id:X,children:M}),U]}),N&&f?.render&&(0,e.jsx)("div",{className:"dataviews-view-list__field",children:(0,e.jsx)(f.render,{item:r,field:f})}),(0,e.jsx)("div",{className:"dataviews-view-list__fields",id:H,children:b.map(oe=>(0,e.jsxs)("div",{className:"dataviews-view-list__field",children:[(0,e.jsx)(zt.A,{as:"span",className:"dataviews-view-list__field-label",children:oe.label}),(0,e.jsx)("span",{className:"dataviews-view-list__field-value",children:(0,e.jsx)(oe.render,{item:r,field:oe})})]},oe.id))})]})]})]})})}function Hs(t){return!!t}function fs(t){const{actions:s,data:a,fields:i,getItemId:r,isLoading:l,onChangeSelection:d,selection:f,view:w,className:b,empty:y}=t,O=(0,It.A)(fs,"view-list"),P=a?.findLast(M=>f.includes(r(M))),C=i.find(M=>M.id===w.titleField),N=i.find(M=>M.id===w.mediaField),A=i.find(M=>M.id===w.descriptionField),L=(w?.fields??[]).map(M=>i.find(U=>M===U.id)).filter(Hs),X=M=>d([r(M)]),H=(0,u.useCallback)(M=>`${O}-${r(M)}`,[O,r]),ge=(0,u.useCallback)((M,U)=>U.startsWith(H(M)),[H]),[fe,Z]=(0,u.useState)(void 0);(0,u.useEffect)(()=>{P&&Z(os(H(P)))},[P,H]);const se=a.findIndex(M=>ge(M,fe??"")),de=(0,Bs.A)(se),ke=se!==-1,ce=(0,u.useCallback)((M,U)=>{const oe=Math.min(a.length-1,Math.max(0,M));if(!a[oe])return;const Ie=H(a[oe]),We=U(Ie);Z(We),document.getElementById(We)?.focus()},[a,H]);(0,u.useEffect)(()=>{!ke&&(de!==void 0&&de!==-1)&&ce(de,os)},[ke,ce,de]);const me=(0,u.useCallback)(M=>{M.key==="ArrowDown"&&(M.preventDefault(),ce(se+1,jt)),M.key==="ArrowUp"&&(M.preventDefault(),ce(se-1,jt))},[ce,se]),te=a?.length;if(!te)return(0,e.jsx)("div",{className:(0,J.A)({"dataviews-loading":l,"dataviews-no-results":!te&&!l}),children:!te&&(l?(0,e.jsx)("p",{children:(0,e.jsx)(ae.Ay,{})}):y)});const be=w.groupByField?i.find(M=>M.id===w.groupByField):null,S=be?Gt(a,be):null;return te&&be&&S?(0,e.jsx)(it.e,{id:`${O}`,render:(0,e.jsx)("div",{}),className:"dataviews-view-list__group",role:"grid",activeId:fe,setActiveId:Z,children:(0,e.jsx)($e.A,{spacing:4,className:(0,J.A)("dataviews-view-list",b),children:Array.from(S.entries()).map(([M,U])=>(0,e.jsxs)($e.A,{spacing:2,children:[(0,e.jsx)("h3",{className:"dataviews-view-list__group-header",children:(0,p.nv)((0,p.__)("%1$s: %2$s"),be.label,M)}),U.map(oe=>{const Ie=H(oe);return(0,e.jsx)(vs,{view:w,idPrefix:Ie,actions:s,item:oe,isSelected:oe===P,onSelect:X,mediaField:N,titleField:C,descriptionField:A,otherFields:L,onDropdownTriggerKeyDown:me},Ie)})]},M))})}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(it.e,{id:O,render:(0,e.jsx)("div",{}),className:(0,J.A)("dataviews-view-list",b),role:w.infiniteScrollEnabled?"feed":"grid",activeId:fe,setActiveId:Z,children:a.map((M,U)=>{const oe=H(M);return(0,e.jsx)(vs,{view:w,idPrefix:oe,actions:s,item:M,isSelected:M===P,onSelect:X,mediaField:N,titleField:C,descriptionField:A,otherFields:L,onDropdownTriggerKeyDown:me,posinset:w.infiniteScrollEnabled?U+1:void 0},oe)})}),te&&l&&(0,e.jsx)("p",{className:"dataviews-loading-more",children:(0,e.jsx)(ae.Ay,{})})]})}const Ws=null;function ws(t){return(0,u.useMemo)(()=>t?.every(s=>s.supportsBulk),[t])}function $s({selection:t,selectedItems:s,onChangeSelection:a,data:i,getItemId:r}){const l=s.length===i.length;return jsx(CheckboxControl,{className:"dataviews-view-table-selection-checkbox",__nextHasNoMarginBottom:!0,checked:l,indeterminate:!l&&!!s.length,onChange:()=>{if(l)a(t.filter(d=>!i.some(f=>d===r(f))));else{const d=new Set([...t,...i.map(f=>r(f))]);a(Array.from(d))}},"aria-label":l?__("Deselect all"):__("Select all")})}function _s({actions:t,items:s,selection:a}){const i=useRegistry(),[r,l]=useState(null);return jsx(HStack,{expanded:!1,spacing:1,children:t.map(d=>{if(!("callback"in d))return null;const{id:f,label:w,icon:b,isPrimary:y,callback:O}=d,P=typeof w=="string"?w:w(s),C=y?"primary":"tertiary",N=f===r;return jsx(Button,{accessibleWhenDisabled:!0,icon:b,disabled:N||!a?.length,isBusy:N,onClick:async()=>{l(f),await O(s,{registry:i}),l(null)},size:"compact",variant:C,children:P},f)})})}function ni(){const{data:t,selection:s,onChangeSelection:a,getItemId:i,actions:r=Ws}=useContext(DataViewsContext),l=s.length,d=ws(r),f=l>0?sprintf(_n("%d Item selected","%d Items selected",l),l):sprintf(_n("%d Item","%d Items",t.length),t.length),w=useMemo(()=>t.filter(b=>s.includes(i(b))),[s,i,t]);return jsxs(HStack,{expanded:!1,justify:"space-between",className:"dataviews-footer",children:[jsxs(HStack,{className:"dataviews-picker-footer__bulk-selection",expanded:!1,spacing:3,children:[d&&jsx($s,{selection:s,selectedItems:w,onChangeSelection:a,data:t,getItemId:i}),jsx("span",{className:"dataviews-bulk-actions-footer__item-count",children:f})]}),jsx(DataViewsPagination,{}),!!r?.length&&jsx("div",{className:"dataviews-picker-footer__actions",children:jsx(_s,{actions:r,items:w,selection:s})})]})}const{Badge:hs}=(0,ne.T)(T.j);function gs({view:t,multiselect:s,selection:a,onChangeSelection:i,getItemId:r,item:l,mediaField:d,titleField:f,descriptionField:w,regularFields:b,badgeFields:y,config:O,posinset:P,setsize:C}){const{showTitle:N=!0,showMedia:A=!0,showDescription:L=!0}=t,X=r(l),H=a.includes(X),ge=d?.render?(0,e.jsx)(d.render,{item:l,field:d,config:O}):null,fe=N&&f?.render?(0,e.jsx)(f.render,{item:l,field:f}):null;return(0,e.jsxs)(it.e.Item,{"aria-label":f?f.getValue({item:l})||(0,p.__)("(no title)"):void 0,render:({children:Z,...se})=>(0,e.jsx)($e.A,{spacing:0,children:Z,...se}),role:"option","aria-posinset":P,"aria-setsize":C,className:(0,J.A)("dataviews-view-picker-grid__card",{"is-selected":H}),"aria-selected":H,onClick:()=>{if(H)i(a.filter(Z=>X!==Z));else{const Z=s?[...a,X]:[X];i(Z)}},children:[A&&ge&&(0,e.jsx)("div",{className:"dataviews-view-picker-grid__media",children:ge}),A&&ge&&(0,e.jsx)(Ge,{item:l,selection:a,onChangeSelection:i,getItemId:r,titleField:f,disabled:!1,"aria-hidden":!0,tabIndex:-1}),N&&(0,e.jsx)(x.A,{justify:"space-between",className:"dataviews-view-picker-grid__title-actions",children:(0,e.jsx)("div",{className:"dataviews-view-picker-grid__title-field dataviews-title-field",children:fe})}),(0,e.jsxs)($e.A,{spacing:1,children:[L&&w?.render&&(0,e.jsx)(w.render,{item:l,field:w}),!!y?.length&&(0,e.jsx)(x.A,{className:"dataviews-view-picker-grid__badge-fields",spacing:2,wrap:!0,alignment:"top",justify:"flex-start",children:y.map(Z=>(0,e.jsx)(hs,{className:"dataviews-view-picker-grid__field-value",children:(0,e.jsx)(Z.render,{item:l,field:Z})},Z.id))}),!!b?.length&&(0,e.jsx)($e.A,{className:"dataviews-view-picker-grid__fields",spacing:1,children:b.map(Z=>(0,e.jsx)(as.A,{className:"dataviews-view-picker-grid__field",gap:1,justify:"flex-start",expanded:!0,style:{height:"auto"},direction:"row",children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Dt.A,{className:"dataviews-view-picker-grid__field-name",children:Z.header}),(0,e.jsx)(Dt.A,{className:"dataviews-view-picker-grid__field-value",style:{maxHeight:"none"},children:(0,e.jsx)(Z.render,{item:l,field:Z})})]})},Z.id))})]})]},X)}function bs({groupName:t,groupField:s,children:a}){const i=(0,It.A)(bs,"dataviews-view-picker-grid-group__header");return(0,e.jsxs)($e.A,{spacing:2,role:"group","aria-labelledby":i,children:[(0,e.jsx)("h3",{className:"dataviews-view-picker-grid-group__header",id:i,children:(0,p.nv)((0,p.__)("%1$s: %2$s"),s.label,t)}),a]},t)}function Xt({actions:t,data:s,fields:a,getItemId:i,isLoading:r,onChangeSelection:l,selection:d,view:f,className:w,empty:b}){const{resizeObserverRef:y,paginationInfo:O,itemListLabel:P}=(0,u.useContext)(K),C=a.find(S=>S.id===f?.titleField),N=a.find(S=>S.id===f?.mediaField),A=a.find(S=>S.id===f?.descriptionField),L=f.fields??[],{regularFields:X,badgeFields:H}=L.reduce((S,M)=>{const U=a.find(Ie=>Ie.id===M);if(!U)return S;const oe=f.layout?.badgeFields?.includes(M)?"badgeFields":"regularFields";return S[oe].push(U),S},{regularFields:[],badgeFields:[]}),ge=!!s?.length,fe=f.layout?.previewSize,Z=ws(t),se="900px",de=f.groupByField?a.find(S=>S.id===f.groupByField):null,ke=de?Gt(s,de):null,ce=f.infiniteScrollEnabled&&!ke,me=f?.page??1,te=f?.perPage??0,be=ce?O?.totalItems:void 0;return(0,e.jsxs)(e.Fragment,{children:[ge&&de&&ke&&(0,e.jsx)(it.e,{virtualFocus:!0,orientation:"horizontal",role:"listbox","aria-multiselectable":Z,className:(0,J.A)("dataviews-view-picker-grid",w),"aria-label":P,render:({children:S,...M})=>(0,e.jsx)($e.A,{spacing:4,children:S,...M}),children:Array.from(ke.entries()).map(([S,M])=>(0,e.jsx)(bs,{groupName:S,groupField:de,children:(0,e.jsx)(Yt,{previewSize:fe,style:{gridTemplateColumns:fe&&`repeat(auto-fill, minmax(${fe}px, 1fr))`},"aria-busy":r,ref:y,children:M.map(U=>{const oe=(me-1)*te+s.indexOf(U)+1;return(0,e.jsx)(gs,{view:f,multiselect:Z,selection:d,onChangeSelection:l,getItemId:i,item:U,mediaField:N,titleField:C,descriptionField:A,regularFields:X,badgeFields:H,config:{sizes:se},posinset:oe,setsize:be},i(U))})})},S))}),ge&&!ke&&(0,e.jsx)(it.e,{render:(0,e.jsx)(Yt,{className:(0,J.A)("dataviews-view-picker-grid",w),previewSize:fe,"aria-busy":r,ref:y}),virtualFocus:!0,orientation:"horizontal",role:"listbox","aria-multiselectable":Z,"aria-label":P,children:s.map((S,M)=>{let U=ce?M+1:void 0;return ce||(U=(me-1)*te+M+1),(0,e.jsx)(gs,{view:f,multiselect:Z,selection:d,onChangeSelection:l,getItemId:i,item:S,mediaField:N,titleField:C,descriptionField:A,regularFields:X,badgeFields:H,config:{sizes:se},posinset:U,setsize:be},i(S))})}),!ge&&(0,e.jsx)("div",{className:(0,J.A)({"dataviews-loading":r,"dataviews-no-results":!r}),children:r?(0,e.jsx)("p",{children:(0,e.jsx)(ae.Ay,{})}):b}),ge&&r&&(0,e.jsx)("p",{className:"dataviews-loading-more",children:(0,e.jsx)(ae.Ay,{})})]})}var Us=Xt,Ks=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/range-control/index.js");const Gs=[{value:120,breakpoint:1},{value:170,breakpoint:1},{value:230,breakpoint:1},{value:290,breakpoint:1112},{value:350,breakpoint:1636},{value:430,breakpoint:588}];function xs(){const t=(0,u.useContext)(K),s=t.view,a=Gs.filter(d=>t.containerWidth>=d.breakpoint),i=s.layout?.previewSize??230,r=a.map((d,f)=>({...d,index:f})).filter(d=>d.value<=i).sort((d,f)=>f.value-d.value)[0]?.index??0,l=a.map((d,f)=>({value:f}));return(0,e.jsx)(Ks.A,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,showTooltip:!1,label:(0,p.__)("Preview size"),value:r,min:0,max:a.length-1,withInputField:!1,onChange:(d=0)=>{t.onChangeView({...s,layout:{...s.layout,previewSize:a[d].value}})},step:1,marks:l})}var ns=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control/component.js"),Jt=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option/component.js");function Ys(){const t=(0,u.useContext)(K),s=t.view;return(0,e.jsxs)(ns.A,{__nextHasNoMarginBottom:!0,size:"__unstable-large",label:(0,p.__)("Density"),value:s.layout?.density||"balanced",onChange:a=>{t.onChangeView({...s,layout:{...s.layout,density:a}})},isBlock:!0,children:[(0,e.jsx)(Jt.A,{value:"comfortable",label:(0,p._x)("Comfortable","Density option for DataView layout")},"comfortable"),(0,e.jsx)(Jt.A,{value:"balanced",label:(0,p._x)("Balanced","Density option for DataView layout")},"balanced"),(0,e.jsx)(Jt.A,{value:"compact",label:(0,p._x)("Compact","Density option for DataView layout")},"compact")]})}const Bt=[{type:I.Ad,label:(0,p.__)("Table"),component:is,icon:xe,viewConfigOptions:Ys},{type:I.Ul,label:(0,p.__)("Grid"),component:zs,icon:he.A,viewConfigOptions:xs},{type:I.mA,label:(0,p.__)("List"),component:fs,icon:(0,p.V8)()?De:Me},{type:I.dL,label:(0,p.__)("Grid"),component:Us,icon:he.A,viewConfigOptions:xs,isPicker:!0}],{Menu:Ft}=(0,ne.T)(T.j);function ys({filters:t,view:s,onChangeView:a,setOpenedFilter:i,triggerProps:r}){const l=t.filter(d=>!d.isVisible);return(0,e.jsxs)(Ft,{children:[(0,e.jsx)(Ft.TriggerButton,{...r}),(0,e.jsx)(Ft.Popover,{children:l.map(d=>(0,e.jsx)(Ft.Item,{onClick:()=>{i(d.field),a({...s,page:1,filters:[...s.filters||[],{field:d.field,value:void 0,operator:d.operators[0]}]})},children:(0,e.jsx)(Ft.ItemLabel,{children:d.name})},d.field))})]})}function Xs({filters:t,view:s,onChangeView:a,setOpenedFilter:i},r){if(!t.length||t.every(({isPrimary:d})=>d))return null;const l=t.filter(d=>!d.isVisible);return(0,e.jsx)(ys,{triggerProps:{render:(0,e.jsx)(Ae.Ay,{accessibleWhenDisabled:!0,size:"compact",className:"dataviews-filters-button",variant:"tertiary",disabled:!l.length,ref:r}),children:(0,p.__)("Add filter")},filters:t,view:s,onChangeView:a,setOpenedFilter:i})}var Js=(0,u.forwardRef)(Xs);function Qs(){const{filters:t,view:s,onChangeView:a,setOpenedFilter:i,isShowingFilter:r,setIsShowingFilter:l}=(0,u.useContext)(K),d=(0,u.useRef)(null),f=(0,u.useCallback)(C=>{a(C),l(!0)},[a,l]),b=!!t.filter(C=>C.isVisible).length;if(t.length===0)return null;const y={label:(0,p.__)("Add filter"),"aria-expanded":!1,isPressed:!1},O={label:(0,p._x)("Filter","verb"),"aria-expanded":r,isPressed:r,onClick:()=>{r||i(null),l(!r)}},P=(0,e.jsx)(Ae.Ay,{ref:d,className:"dataviews-filters__visibility-toggle",size:"compact",icon:$t,...b?O:y});return(0,e.jsx)("div",{className:"dataviews-filters__container-visibility-toggle",children:b?(0,e.jsx)(Zs,{buttonRef:d,filtersCount:s.filters?.length,children:P}):(0,e.jsx)(ys,{filters:t,view:s,onChangeView:f,setOpenedFilter:i,triggerProps:{render:P}})})}function Zs({buttonRef:t,filtersCount:s,children:a}){return(0,u.useEffect)(()=>()=>{t.current?.focus()},[t]),(0,e.jsxs)(e.Fragment,{children:[a,!!s&&(0,e.jsx)("span",{className:"dataviews-filters-toggle__count",children:s})]})}var js=Qs,ls=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/select-control/index.js"),As=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/dropdown/index.js"),Fe=c("../../../node_modules/.pnpm/@wordpress+element@6.34.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),ks=c("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/APTFW6PT.js"),Xe=c("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/VOQWLFSQ.js"),li=(0,u.createContext)(null),di=(0,u.createContext)(null),Lt=(0,Xe.B0)([ks.ws],[ks.aN]),Qt=Lt.useContext,qs=Lt.useScopedContext,ei=Lt.useProviderContext,ti=Lt.ContextProvider,ci=Lt.ScopedContextProvider,Zt=c("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/RUY5BUJG.js"),Cs=c("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/B7UTNDHN.js"),At=c("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/RTNCFSKZ.js"),je=c("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/5GGHRIN3.js"),Oe=c("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js"),o=c("../../../node_modules/.pnpm/@ariakit+core@0.4.16/node_modules/@ariakit/core/esm/__chunks/O6E4ZWCP.js"),n=c("../../../node_modules/.pnpm/@ariakit+core@0.4.16/node_modules/@ariakit/core/esm/__chunks/MD3RIO2T.js"),m=c("../../../node_modules/.pnpm/@ariakit+core@0.4.16/node_modules/@ariakit/core/esm/__chunks/C34RJTDU.js"),g=c("../../../node_modules/.pnpm/@ariakit+core@0.4.16/node_modules/@ariakit/core/esm/__chunks/EWA2WL6G.js"),j=c("../../../node_modules/.pnpm/@ariakit+core@0.4.16/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js"),E=c("../../../node_modules/.pnpm/@ariakit+core@0.4.16/node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js"),W=(0,o.nr)()&&(0,o.CN)();function ie(t={}){var s=t,{tag:a}=s,i=(0,E.YG)(s,["tag"]);const r=(0,g.od)(i.store,(0,g.Up)(a,["value","rtl"]));(0,g.UE)(i,r);const l=a?.getState(),d=r?.getState(),f=(0,j.Jh)(i.activeId,d?.activeId,i.defaultActiveId,null),w=(0,m.z)((0,E.ko)((0,E.IA)({},i),{activeId:f,includesBaseElement:(0,j.Jh)(i.includesBaseElement,d?.includesBaseElement,!0),orientation:(0,j.Jh)(i.orientation,d?.orientation,"vertical"),focusLoop:(0,j.Jh)(i.focusLoop,d?.focusLoop,!0),focusWrap:(0,j.Jh)(i.focusWrap,d?.focusWrap,!0),virtualFocus:(0,j.Jh)(i.virtualFocus,d?.virtualFocus,!0)})),b=(0,n.N)((0,E.ko)((0,E.IA)({},i),{placement:(0,j.Jh)(i.placement,d?.placement,"bottom-start")})),y=(0,j.Jh)(i.value,d?.value,i.defaultValue,""),O=(0,j.Jh)(i.selectedValue,d?.selectedValue,l?.values,i.defaultSelectedValue,""),P=Array.isArray(O),C=(0,E.ko)((0,E.IA)((0,E.IA)({},w.getState()),b.getState()),{value:y,selectedValue:O,resetValueOnSelect:(0,j.Jh)(i.resetValueOnSelect,d?.resetValueOnSelect,P),resetValueOnHide:(0,j.Jh)(i.resetValueOnHide,d?.resetValueOnHide,P&&!a),activeValue:d?.activeValue}),N=(0,g.y$)(C,w,b,r);return W&&(0,g.mj)(N,()=>(0,g.OH)(N,["virtualFocus"],()=>{N.setState("virtualFocus",!1)})),(0,g.mj)(N,()=>{if(a)return(0,j.cy)((0,g.OH)(N,["selectedValue"],A=>{Array.isArray(A.selectedValue)&&a.setValues(A.selectedValue)}),(0,g.OH)(a,["values"],A=>{N.setState("selectedValue",A.values)}))}),(0,g.mj)(N,()=>(0,g.OH)(N,["resetValueOnHide","mounted"],A=>{A.resetValueOnHide&&(A.mounted||N.setState("value",y))})),(0,g.mj)(N,()=>(0,g.OH)(N,["open"],A=>{A.open||(N.setState("activeId",f),N.setState("moves",0))})),(0,g.mj)(N,()=>(0,g.OH)(N,["moves","activeId"],(A,L)=>{A.moves===L.moves&&N.setState("activeValue",void 0)})),(0,g.mj)(N,()=>(0,g.vA)(N,["moves","renderedItems"],(A,L)=>{if(A.moves===L.moves)return;const{activeId:X}=N.getState(),H=w.item(X);N.setState("activeValue",H?.value)})),(0,E.ko)((0,E.IA)((0,E.IA)((0,E.IA)({},b),w),N),{tag:a,setValue:A=>N.setState("value",A),resetValue:()=>N.setState("value",C.value),setSelectedValue:A=>N.setState("selectedValue",A)})}function q(t){const s=Qt();return t=(0,Oe.ko)((0,Oe.IA)({},t),{tag:t.tag!==void 0?t.tag:s}),(0,Cs.YC)(t)}function pe(t,s,a){return(0,je.w5)(s,[a.tag]),(0,At.Tz)(t,a,"value","setValue"),(0,At.Tz)(t,a,"selectedValue","setSelectedValue"),(0,At.Tz)(t,a,"resetValueOnHide"),(0,At.Tz)(t,a,"resetValueOnSelect"),Object.assign((0,Cs.YO)((0,Zt.o)(t,s,a),s,a),{tag:a.tag})}function ee(t={}){t=q(t);const[s,a]=(0,At.Pj)(ie,t);return pe(s,a,t)}var R=c("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/OLVWQA7U.js");function le(t={}){const s=ee(t);return(0,e.jsx)(R.CE,{value:s,children:t.children})}var Q="label",He=(0,Xe.ab)(function(s){var a=s,{store:i}=a,r=(0,Oe.YG)(a,["store"]);const l=(0,R.PV)();i=i||l,(0,j.V1)(i,!1);const d=i.useState(f=>{var w;return(w=f.baseElement)==null?void 0:w.id});return r=(0,Oe.IA)({htmlFor:d},r),(0,j.HR)(r)}),re=(0,Xe.ph)((0,Xe.Rf)(function(s){const a=He(s);return(0,Xe.n)(Q,a)})),_e=c("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/NSTBQJLB.js"),Re=c("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HMCFFQCB.js"),Le=c("../../../node_modules/.pnpm/@ariakit+core@0.4.16/node_modules/@ariakit/core/esm/__chunks/37JWRFYW.js"),at=c("../../../node_modules/.pnpm/@ariakit+core@0.4.16/node_modules/@ariakit/core/esm/utils/events.js"),gt=c("../../../node_modules/.pnpm/@ariakit+core@0.4.16/node_modules/@ariakit/core/esm/utils/focus.js"),vt="input";function Et(t,s,a){if(!a)return!1;const i=t.find(r=>!r.disabled&&r.value);return i?.value===s}function Ot(t,s){return!s||t==null?!1:(t=(0,j.J2)(t),s.length>t.length&&s.toLowerCase().indexOf(t.toLowerCase())===0)}function rt(t){return t.type==="input"}function ft(t){return t==="inline"||t==="list"||t==="both"||t==="none"}function Te(t){const s=t.find(a=>{var i;return a.disabled?!1:((i=a.element)==null?void 0:i.getAttribute("role"))!=="tab"});return s?.id}var tt=(0,Xe.ab)(function(s){var a=s,{store:i,focusable:r=!0,autoSelect:l=!1,getAutoSelectId:d,setValueOnChange:f,showMinLength:w=0,showOnChange:b,showOnMouseDown:y,showOnClick:O=y,showOnKeyDown:P,showOnKeyPress:C=P,blurActiveItemOnClick:N,setValueOnClick:A=!0,moveOnKeyPress:L=!0,autoComplete:X="list"}=a,H=(0,Oe.YG)(a,["store","focusable","autoSelect","getAutoSelectId","setValueOnChange","showMinLength","showOnChange","showOnMouseDown","showOnClick","showOnKeyDown","showOnKeyPress","blurActiveItemOnClick","setValueOnClick","moveOnKeyPress","autoComplete"]);const ge=(0,R.PV)();i=i||ge,(0,j.V1)(i,!1);const fe=(0,u.useRef)(null),[Z,se]=(0,je.CH)(),de=(0,u.useRef)(!1),ke=(0,u.useRef)(!1),ce=i.useState(B=>B.virtualFocus&&l),me=X==="inline"||X==="both",[te,be]=(0,u.useState)(me);(0,je.Kp)(()=>{me&&be(!0)},[me]);const S=i.useState("value"),M=(0,u.useRef)();(0,u.useEffect)(()=>(0,g.OH)(i,["selectedValue","activeId"],(B,Pe)=>{M.current=Pe.selectedValue}),[]);const U=i.useState(B=>{var Pe;if(me&&te&&!(B.activeValue&&Array.isArray(B.selectedValue)&&(B.selectedValue.includes(B.activeValue)||(Pe=M.current)!=null&&Pe.includes(B.activeValue))))return B.activeValue}),oe=i.useState("renderedItems"),Ie=i.useState("open"),We=i.useState("contentElement"),pt=(0,u.useMemo)(()=>{if(!me||!te)return S;if(Et(oe,U,ce)){if(Ot(S,U)){const Pe=U?.slice(S.length)||"";return S+Pe}return S}return U||S},[me,te,oe,U,ce,S]);(0,u.useEffect)(()=>{const B=fe.current;if(!B)return;const Pe=()=>be(!0);return B.addEventListener("combobox-item-move",Pe),()=>{B.removeEventListener("combobox-item-move",Pe)}},[]),(0,u.useEffect)(()=>{if(!me||!te||!U||!Et(oe,U,ce)||!Ot(S,U))return;let Pe=j.lQ;return queueMicrotask(()=>{const Qe=fe.current;if(!Qe)return;const{start:Ze,end:wt}=(0,Le.Zy)(Qe),Ct=S.length,nt=U.length;(0,Le.eG)(Qe,Ct,nt),Pe=()=>{if(!(0,gt.AJ)(Qe))return;const{start:Wt,end:lr}=(0,Le.Zy)(Qe);Wt===Ct&&lr===nt&&(0,Le.eG)(Qe,Ze,wt)}}),()=>Pe()},[Z,me,te,U,oe,ce,S]);const xt=(0,u.useRef)(null),kt=(0,je._q)(d),Ce=(0,u.useRef)(null);(0,u.useEffect)(()=>{if(!Ie||!We)return;const B=(0,Le.qj)(We);if(!B)return;xt.current=B;const Pe=()=>{de.current=!1},Qe=()=>{if(!i||!de.current)return;const{activeId:wt}=i.getState();wt!==null&&wt!==Ce.current&&(de.current=!1)},Ze={passive:!0,capture:!0};return B.addEventListener("wheel",Pe,Ze),B.addEventListener("touchmove",Pe,Ze),B.addEventListener("scroll",Qe,Ze),()=>{B.removeEventListener("wheel",Pe,!0),B.removeEventListener("touchmove",Pe,!0),B.removeEventListener("scroll",Qe,!0)}},[Ie,We,i]),(0,je.UQ)(()=>{S&&(ke.current||(de.current=!0))},[S]),(0,je.UQ)(()=>{ce!=="always"&&Ie||(de.current=Ie)},[ce,Ie]);const et=i.useState("resetValueOnSelect");(0,je.w5)(()=>{var B,Pe;const Qe=de.current;if(!i||!Ie||!Qe&&!et)return;const{baseElement:Ze,contentElement:wt,activeId:Ct}=i.getState();if(!(Ze&&!(0,gt.AJ)(Ze))){if(wt?.hasAttribute("data-placing")){const nt=new MutationObserver(se);return nt.observe(wt,{attributeFilter:["data-placing"]}),()=>nt.disconnect()}if(ce&&Qe){const nt=kt(oe),Wt=nt!==void 0?nt:(B=Te(oe))!=null?B:i.first();Ce.current=Wt,i.move(Wt??null)}else{const nt=(Pe=i.item(Ct||i.first()))==null?void 0:Pe.element;nt&&"scrollIntoView"in nt&&nt.scrollIntoView({block:"nearest",inline:"nearest"})}}},[i,Ie,Z,S,ce,et,kt,oe]),(0,u.useEffect)(()=>{if(!me)return;const B=fe.current;if(!B)return;const Pe=[B,We].filter(Ze=>!!Ze),Qe=Ze=>{Pe.every(wt=>(0,at.aG)(Ze,wt))&&i?.setValue(pt)};for(const Ze of Pe)Ze.addEventListener("focusout",Qe);return()=>{for(const Ze of Pe)Ze.removeEventListener("focusout",Qe)}},[me,We,i,pt]);const Ve=B=>B.currentTarget.value.length>=w,ot=H.onChange,cs=(0,je.O4)(b??Ve),Ht=(0,je.O4)(f??!i.tag),ai=(0,je._q)(B=>{if(ot?.(B),B.defaultPrevented||!i)return;const Pe=B.currentTarget,{value:Qe,selectionStart:Ze,selectionEnd:wt}=Pe,Ct=B.nativeEvent;if(de.current=!0,rt(Ct)&&(Ct.isComposing&&(de.current=!1,ke.current=!0),me)){const nt=Ct.inputType==="insertText"||Ct.inputType==="insertCompositionText",Wt=Ze===Qe.length;be(nt&&Wt)}if(Ht(B)){const nt=Qe===i.getState().value;i.setValue(Qe),queueMicrotask(()=>{(0,Le.eG)(Pe,Ze,wt)}),me&&ce&&nt&&se()}cs(B)&&i.show(),(!ce||!de.current)&&i.setActiveId(null)}),Es=H.onCompositionEnd,ri=(0,je._q)(B=>{de.current=!0,ke.current=!1,Es?.(B),!B.defaultPrevented&&ce&&se()}),zi=H.onMouseDown,Za=(0,je.O4)(N??(()=>!!i?.getState().includesBaseElement)),qa=(0,je.O4)(A),er=(0,je.O4)(O??Ve),tr=(0,je._q)(B=>{zi?.(B),!B.defaultPrevented&&(B.button||B.ctrlKey||i&&(Za(B)&&i.setActiveId(null),qa(B)&&i.setValue(pt),er(B)&&(0,at.nz)(B.currentTarget,"mouseup",i.show)))}),Bi=H.onKeyDown,sr=(0,je.O4)(C??Ve),ir=(0,je._q)(B=>{if(Bi?.(B),B.repeat||(de.current=!1),B.defaultPrevented||B.ctrlKey||B.altKey||B.shiftKey||B.metaKey||!i)return;const{open:Pe}=i.getState();Pe||(B.key==="ArrowUp"||B.key==="ArrowDown")&&sr(B)&&(B.preventDefault(),i.show())}),Fi=H.onBlur,ar=(0,je._q)(B=>{de.current=!1,Fi?.(B),B.defaultPrevented}),rr=(0,je.Bi)(H.id),or=ft(X)?X:void 0,nr=i.useState(B=>B.activeId===null);return H=(0,Oe.ko)((0,Oe.IA)({id:rr,role:"combobox","aria-autocomplete":or,"aria-haspopup":(0,Le.Tc)(We,"listbox"),"aria-expanded":Ie,"aria-controls":We?.id,"data-active-item":nr||void 0,value:pt},H),{ref:(0,je.SV)(fe,H.ref),onChange:ai,onCompositionEnd:ri,onMouseDown:tr,onKeyDown:ir,onBlur:ar}),H=(0,_e.T)((0,Oe.ko)((0,Oe.IA)({store:i,focusable:r},H),{moveOnKeyPress:B=>(0,j.zO)(L,B)?!1:(me&&be(!0),!0)})),H=(0,Re.E)((0,Oe.IA)({store:i},H)),(0,Oe.IA)({autoComplete:"off"},H)}),Ee=(0,Xe.Rf)(function(s){const a=tt(s);return(0,Xe.n)(vt,a)}),st=c("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/K4R5DNTX.js"),ds="div",si=(0,Xe.ab)(function(s){var a=s,{store:i,alwaysVisible:r}=a,l=(0,Oe.YG)(a,["store","alwaysVisible"]);const d=(0,R.UW)(!0),f=(0,R.Ay)();i=i||f;const w=!!i&&i===d;(0,j.V1)(i,!1);const b=(0,u.useRef)(null),y=(0,je.Bi)(l.id),O=i.useState("mounted"),P=(0,st.dK)(O,l.hidden,r),C=P?(0,Oe.ko)((0,Oe.IA)({},l.style),{display:"none"}):l.style,N=i.useState(se=>Array.isArray(se.selectedValue)),A=(0,je.Cy)(b,"role",l.role),X=(A==="listbox"||A==="tree"||A==="grid")&&N||void 0,[H,ge]=(0,u.useState)(!1),fe=i.useState("contentElement");(0,je.UQ)(()=>{if(!O)return;const se=b.current;if(!se||fe!==se)return;const de=()=>{ge(!!se.querySelector("[role='listbox']"))},ke=new MutationObserver(de);return ke.observe(se,{subtree:!0,childList:!0,attributeFilter:["role"]}),de(),()=>ke.disconnect()},[O,fe]),H||(l=(0,Oe.IA)({role:"listbox","aria-multiselectable":X},l)),l=(0,je.w7)(l,se=>(0,e.jsx)(R.Ky,{value:i,children:(0,e.jsx)(R.Hf.Provider,{value:A,children:se})}),[i,A]);const Z=y&&(!d||!w)?i.setContentElement:null;return l=(0,Oe.ko)((0,Oe.IA)({id:y,hidden:P},l),{ref:(0,je.SV)(Z,b,l.ref),style:C}),(0,j.HR)(l)}),ui=(0,Xe.Rf)(function(s){const a=si(s);return(0,Xe.n)(ds,a)}),pi=c("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/IABE5EV2.js"),Vs=c("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SBSPVDDI.js"),Li="div";function Hi(t,s){if(s!=null)return t==null?!1:Array.isArray(t)?t.includes(s):t===s}function Wi(t){var s;return(s={menu:"menuitem",listbox:"option",tree:"treeitem"}[t])!=null?s:"option"}var $i=(0,Xe.ab)(function(s){var a=s,{store:i,value:r,hideOnClick:l,setValueOnClick:d,selectValueOnClick:f=!0,resetValueOnSelect:w,focusOnHover:b=!1,moveOnKeyPress:y=!0,getItem:O}=a,P=(0,Oe.YG)(a,["store","value","hideOnClick","setValueOnClick","selectValueOnClick","resetValueOnSelect","focusOnHover","moveOnKeyPress","getItem"]),C;const N=(0,R.UW)();i=i||N,(0,j.V1)(i,!1);const{resetValueOnSelectState:A,multiSelectable:L,selected:X}=(0,At.PX)(i,{resetValueOnSelectState:"resetValueOnSelect",multiSelectable(S){return Array.isArray(S.selectedValue)},selected(S){return Hi(S.selectedValue,r)}}),H=(0,u.useCallback)(S=>{const M=(0,Oe.ko)((0,Oe.IA)({},S),{value:r});return O?O(M):M},[r,O]);d=d??!L,l=l??(r!=null&&!L);const ge=P.onClick,fe=(0,je.O4)(d),Z=(0,je.O4)(f),se=(0,je.O4)((C=w??A)!=null?C:L),de=(0,je.O4)(l),ke=(0,je._q)(S=>{ge?.(S),!S.defaultPrevented&&((0,at.RN)(S)||(0,at.$b)(S)||(r!=null&&(Z(S)&&(se(S)&&i?.resetValue(),i?.setSelectedValue(M=>Array.isArray(M)?M.includes(r)?M.filter(U=>U!==r):[...M,r]:r)),fe(S)&&i?.setValue(r)),de(S)&&i?.hide()))}),ce=P.onKeyDown,me=(0,je._q)(S=>{if(ce?.(S),S.defaultPrevented)return;const M=i?.getState().baseElement;if(!M||(0,gt.AJ)(M))return;(S.key.length===1||S.key==="Backspace"||S.key==="Delete")&&(queueMicrotask(()=>M.focus()),(0,Le.mB)(M)&&i?.setValue(M.value))});L&&X!=null&&(P=(0,Oe.IA)({"aria-selected":X},P)),P=(0,je.w7)(P,S=>(0,e.jsx)(R.L7.Provider,{value:r,children:(0,e.jsx)(R.Hh.Provider,{value:X??!1,children:S})}),[r,X]);const te=(0,u.useContext)(R.Hf);P=(0,Oe.ko)((0,Oe.IA)({role:Wi(te),children:r},P),{onClick:ke,onKeyDown:me});const be=(0,je.O4)(y);return P=(0,Vs.k)((0,Oe.ko)((0,Oe.IA)({store:i},P),{getItem:H,moveOnKeyPress:S=>{if(!be(S))return!1;const M=new Event("combobox-item-move"),U=i?.getState().baseElement;return U?.dispatchEvent(M),!0}})),P=(0,pi.T)((0,Oe.IA)({store:i,focusOnHover:b},P)),P}),Ui=(0,Xe.ph)((0,Xe.Rf)(function(s){const a=$i(s);return(0,Xe.n)(Li,a)})),Ki=c("../../../node_modules/.pnpm/@ariakit+core@0.4.16/node_modules/@ariakit/core/esm/__chunks/7PRQYBBV.js"),Gi="span";function mi(t){return(0,j.J2)(t).toLowerCase()}function Yi(t,s){const a=[];for(const i of s){let r=0;const l=i.length;for(;t.indexOf(i,r)!==-1;){const d=t.indexOf(i,r);d!==-1&&a.push([d,l]),r=d+1}}return a}function Xi(t){return t.filter(([s,a],i,r)=>!r.some(([l,d],f)=>f!==i&&l<=s&&l+d>=s+a))}function Ji(t){return t.sort(([s],[a])=>s-a)}function Qi(t,s){if(!t||!s)return t;const a=(0,Ki.$r)(s).filter(Boolean).map(mi),i=[],r=(w,b=!1)=>(0,e.jsx)("span",{"data-autocomplete-value":b?"":void 0,"data-user-value":b?void 0:"",children:w},i.length),l=Ji(Xi(Yi(mi(t),new Set(a))));if(!l.length)return i.push(r(t,!0)),i;const[d]=l[0];return[t.slice(0,d),...l.flatMap(([w,b],y)=>{var O;const P=t.slice(w,w+b),C=(O=l[y+1])==null?void 0:O[0],N=t.slice(w+b,C);return[P,N]})].forEach((w,b)=>{w&&i.push(r(w,b%2===0))}),i}var Zi=(0,Xe.ab)(function(s){var a=s,{store:i,value:r,userValue:l}=a,d=(0,Oe.YG)(a,["store","value","userValue"]);const f=(0,R.UW)();i=i||f;const w=(0,u.useContext)(R.L7),b=r??w,y=(0,At.O$)(i,P=>l??P?.value),O=(0,u.useMemo)(()=>{if(b)return y?Qi(b,y):b},[b,y]);return d=(0,Oe.IA)({children:O},d),(0,j.HR)(d)}),qi=(0,Xe.Rf)(function(s){const a=Zi(s);return(0,Xe.n)(Gi,a)}),ea=c("../../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js"),ta=c.n(ea),sa=c("../../../node_modules/.pnpm/@wordpress+icons@11.1.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js"),ia=c("../../../node_modules/.pnpm/@wordpress+icons@11.1.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/search.js");const aa=[],ii=(t,s)=>t.singleSelection?s?.value:Array.isArray(s?.value)?s.value:!Array.isArray(s?.value)&&s?.value?[s.value]:aa;var vi=c("../../../node_modules/.pnpm/@wordpress+dataviews@10.2.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_a91a9955fb93daf0aecd43f380e81fdc/node_modules/@wordpress/dataviews/build-module/hooks/use-elements.js");function fi(t=""){return ta()(t.trim().toLowerCase())}const wi=(t,s,a)=>t.singleSelection?a:Array.isArray(s?.value)?s.value.includes(a)?s.value.filter(i=>i!==a):[...s.value,a]:[a];function _i(t,s){return`${t}-${s}`}const hi=({selected:t})=>(0,e.jsx)("span",{className:(0,J.A)("dataviews-filters__search-widget-listitem-multi-selection",{"is-selected":t}),children:t&&(0,e.jsx)(mt.A,{icon:sa.A})}),gi=({selected:t})=>(0,e.jsx)("span",{className:(0,J.A)("dataviews-filters__search-widget-listitem-single-selection",{"is-selected":t})});function bi({view:t,filter:s,onChangeView:a}){const i=(0,It.A)(bi,"dataviews-filter-list-box"),[r,l]=(0,u.useState)(s.operators?.length===1?void 0:null),d=t.filters?.find(w=>w.field===s.field),f=ii(s,d);return(0,e.jsx)(it.e,{virtualFocus:!0,focusLoop:!0,activeId:r,setActiveId:l,role:"listbox",className:"dataviews-filters__search-widget-listbox","aria-label":(0,p.nv)((0,p.__)("List of: %1$s"),s.name),onFocusVisible:()=>{!r&&s.elements.length&&l(_i(i,s.elements[0].value))},render:(0,e.jsx)(it.e.Typeahead,{}),children:s.elements.map(w=>(0,e.jsxs)(it.e.Hover,{render:(0,e.jsx)(it.e.Item,{id:_i(i,w.value),render:(0,e.jsx)("div",{"aria-label":w.label,role:"option",className:"dataviews-filters__search-widget-listitem"}),onClick:()=>{const b=d?[...(t.filters??[]).map(y=>y.field===s.field?{...y,operator:d.operator||s.operators[0],value:wi(s,d,w.value)}:y)]:[...t.filters??[],{field:s.field,operator:s.operators[0],value:wi(s,d,w.value)}];a({...t,page:1,filters:b})}}),children:[s.singleSelection&&(0,e.jsx)(gi,{selected:f===w.value}),!s.singleSelection&&(0,e.jsx)(hi,{selected:f.includes(w.value)}),(0,e.jsx)("span",{children:w.label})]},w.value))})}function ra({view:t,filter:s,onChangeView:a}){const[i,r]=(0,u.useState)(""),l=(0,u.useDeferredValue)(i),d=t.filters?.find(b=>b.field===s.field),f=ii(s,d),w=(0,u.useMemo)(()=>{const b=fi(l);return s.elements.filter(y=>fi(y.label).includes(b))},[s.elements,l]);return(0,e.jsxs)(le,{selectedValue:f,setSelectedValue:b=>{const y=d?[...(t.filters??[]).map(O=>O.field===s.field?{...O,operator:d.operator||s.operators[0],value:b}:O)]:[...t.filters??[],{field:s.field,operator:s.operators[0],value:b}];a({...t,page:1,filters:y})},setValue:r,children:[(0,e.jsxs)("div",{className:"dataviews-filters__search-widget-filter-combobox__wrapper",children:[(0,e.jsx)(re,{render:(0,e.jsx)(zt.A,{children:(0,p.__)("Search items")}),children:(0,p.__)("Search items")}),(0,e.jsx)(Ee,{autoSelect:"always",placeholder:(0,p.__)("Search"),className:"dataviews-filters__search-widget-filter-combobox__input"}),(0,e.jsx)("div",{className:"dataviews-filters__search-widget-filter-combobox__icon",children:(0,e.jsx)(mt.A,{icon:ia.A})})]}),(0,e.jsxs)(ui,{className:"dataviews-filters__search-widget-filter-combobox-list",alwaysVisible:!0,children:[w.map(b=>(0,e.jsxs)(Ui,{resetValueOnSelect:!1,value:b.value,className:"dataviews-filters__search-widget-listitem",hideOnClick:!1,setValueOnClick:!1,focusOnHover:!0,children:[s.singleSelection&&(0,e.jsx)(gi,{selected:f===b.value}),!s.singleSelection&&(0,e.jsx)(hi,{selected:f.includes(b.value)}),(0,e.jsxs)("span",{children:[(0,e.jsx)(qi,{className:"dataviews-filters__search-widget-filter-combobox-item-value",value:b.label}),!!b.description&&(0,e.jsx)("span",{className:"dataviews-filters__search-widget-listitem-description",children:b.description})]})]},b.value)),!w.length&&(0,e.jsx)("p",{children:(0,p.__)("No results found")})]})]})}function oa(t){const{elements:s,isLoading:a}=(0,vi.A)({elements:t.filter.elements,getElements:t.filter.getElements});if(a)return(0,e.jsx)("div",{className:"dataviews-filters__search-widget-no-elements",children:(0,e.jsx)(ae.Ay,{})});if(s.length===0)return(0,e.jsx)("div",{className:"dataviews-filters__search-widget-no-elements",children:(0,p.__)("No elements found")});const i=s.length>10?ra:bi;return(0,e.jsx)(i,{...t,filter:{...t.filter,elements:s}})}var na=c("../../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/es6/index.js"),la=c.n(na),da=c("../../../node_modules/.pnpm/@wordpress+compose@7.34.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-event/index.js");function ca({filter:t,view:s,onChangeView:a,fields:i}){const r=s.filters?.find(b=>b.field===t.field),l=ii(t,r),d=(0,u.useMemo)(()=>{const b=i.find(y=>y.id===t.field);return b&&{...b,isValid:{required:!1,custom:()=>null},getValue:({item:y})=>y[b.id],setValue:({value:y})=>({[b.id]:y})}},[i,t.field]),f=(0,u.useMemo)(()=>(s.filters??[]).reduce((b,y)=>(b[y.field]=y.value,b),{}),[s.filters]),w=(0,da.A)(b=>{if(!d||!r)return;const y=d.getValue({item:b});la()(y,l)||a({...s,filters:(s.filters??[]).map(O=>O.field===t.field?{...O,operator:r.operator||t.operators[0],value:y===""?void 0:y}:O)})});return!d||!d.Edit||!r?null:(0,e.jsx)(as.A,{className:"dataviews-filters__user-input-widget",gap:2.5,direction:"column",children:(0,e.jsx)(d.Edit,{hideLabelFromVision:!0,data:f,field:d,operator:r.operator,onChange:w})})}const ua="Enter",pa=" ",ma=({activeElements:t,filterInView:s,filter:a})=>{if(t===void 0||t.length===0)return a.name;const i={Name:(0,e.jsx)("span",{className:"dataviews-filters__summary-filter-text-name"}),Value:(0,e.jsx)("span",{className:"dataviews-filters__summary-filter-text-value"})};if(s?.operator===I.ld)return(0,Fe.A)((0,p.nv)((0,p.__)("<Name>%1$s is any: </Name><Value>%2$s</Value>"),a.name,t.map(r=>r.label).join(", ")),i);if(s?.operator===I.Vw)return(0,Fe.A)((0,p.nv)((0,p.__)("<Name>%1$s is none: </Name><Value>%2$s</Value>"),a.name,t.map(r=>r.label).join(", ")),i);if(s?.operator===I.y5)return(0,Fe.A)((0,p.nv)((0,p.__)("<Name>%1$s is all: </Name><Value>%2$s</Value>"),a.name,t.map(r=>r.label).join(", ")),i);if(s?.operator===I.UX)return(0,Fe.A)((0,p.nv)((0,p.__)("<Name>%1$s is not all: </Name><Value>%2$s</Value>"),a.name,t.map(r=>r.label).join(", ")),i);if(s?.operator===I.gm)return(0,Fe.A)((0,p.nv)((0,p.__)("<Name>%1$s is: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I._k)return(0,Fe.A)((0,p.nv)((0,p.__)("<Name>%1$s is not: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.X4)return(0,Fe.A)((0,p.nv)((0,p.__)("<Name>%1$s is less than: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.u5)return(0,Fe.A)((0,p.nv)((0,p.__)("<Name>%1$s is greater than: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.Ie)return(0,Fe.A)((0,p.nv)((0,p.__)("<Name>%1$s is less than or equal to: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.x4)return(0,Fe.A)((0,p.nv)((0,p.__)("<Name>%1$s is greater than or equal to: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.Py)return(0,Fe.A)((0,p.nv)((0,p.__)("<Name>%1$s contains: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.Vm)return(0,Fe.A)((0,p.nv)((0,p.__)("<Name>%1$s doesn't contain: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.YH)return(0,Fe.A)((0,p.nv)((0,p.__)("<Name>%1$s starts with: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.Xd)return(0,Fe.A)((0,p.nv)((0,p.__)("<Name>%1$s is before: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.QF)return(0,Fe.A)((0,p.nv)((0,p.__)("<Name>%1$s is after: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.o8)return(0,Fe.A)((0,p.nv)((0,p.__)("<Name>%1$s is on or before: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.NN)return(0,Fe.A)((0,p.nv)((0,p.__)("<Name>%1$s is on or after: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.CX){const{label:r}=t[0];return(0,Fe.A)((0,p.nv)((0,p.__)("<Name>%1$s between (inc): </Name><Value>%2$s and %3$s</Value>"),a.name,r[0],r[1]),i)}return s?.operator===I.xz?(0,Fe.A)((0,p.nv)((0,p.__)("<Name>%1$s is: </Name><Value>%2$s</Value>"),a.name,t[0].label),i):s?.operator===I.Ld?(0,Fe.A)((0,p.nv)((0,p.__)("<Name>%1$s is not: </Name><Value>%2$s</Value>"),a.name,t[0].label),i):s?.operator===I._h?(0,Fe.A)((0,p.nv)((0,p.__)("<Name>%1$s is in the past: </Name><Value>%2$s</Value>"),a.name,`${t[0].value.value} ${t[0].value.unit}`),i):s?.operator===I.MD?(0,Fe.A)((0,p.nv)((0,p.__)("<Name>%1$s is over: </Name><Value>%2$s</Value> ago"),a.name,`${t[0].value.value} ${t[0].value.unit}`),i):(0,p.nv)((0,p.__)("Unknown status for %1$s"),a.name)};function va({filter:t,view:s,onChangeView:a}){const i=t.operators?.map(d=>({value:d,label:I.we[d]?.label})),r=s.filters?.find(d=>d.field===t.field),l=r?.operator||t.operators[0];return i.length>1&&(0,e.jsxs)(x.A,{spacing:2,justify:"flex-start",className:"dataviews-filters__summary-operators-container",children:[(0,e.jsx)(Dt.A,{className:"dataviews-filters__summary-operators-filter-name",children:t.name}),(0,e.jsx)(ls.A,{className:"dataviews-filters__summary-operators-filter-select",label:(0,p.__)("Conditions"),value:l,options:i,onChange:d=>{const f=d,w=r?.operator,b=r?[...(s.filters??[]).map(y=>{if(y.field===t.field){const O=[I.CX,I._h,I.MD],P=w&&(O.includes(w)||O.includes(f));return{...y,value:P?void 0:y.value,operator:f}}return y})]:[...s.filters??[],{field:t.field,operator:f,value:void 0}];a({...s,page:1,filters:b})},size:"small",variant:"minimal",__nextHasNoMarginBottom:!0,hideLabelFromVision:!0})]})}function fa({addFilterRef:t,openedFilter:s,fields:a,...i}){const r=(0,u.useRef)(null),{filter:l,view:d,onChangeView:f}=i,w=d.filters?.find(A=>A.field===l.field);let b=[];const{elements:y}=(0,vi.A)({elements:l.elements,getElements:l.getElements});y.length>0?b=y.filter(A=>l.singleSelection?A.value===w?.value:w?.value?.includes(A.value)):w?.value!==void 0&&(b=[{value:w.value,label:w.value}]);const O=l.isPrimary,P=w?.isLocked,C=!P&&w?.value!==void 0,N=!P&&(!O||C);return(0,e.jsx)(As.A,{defaultOpen:s===l.field,contentClassName:"dataviews-filters__summary-popover",popoverProps:{placement:"bottom-start",role:"dialog"},onClose:()=>{r.current?.focus()},renderToggle:({isOpen:A,onToggle:L})=>(0,e.jsxs)("div",{className:"dataviews-filters__summary-chip-container",children:[(0,e.jsx)(rs.Ay,{text:(0,p.nv)((0,p.__)("Filter by: %1$s"),l.name.toLowerCase()),placement:"top",children:(0,e.jsx)("div",{className:(0,J.A)("dataviews-filters__summary-chip",{"has-reset":N,"has-values":C,"is-not-clickable":P}),role:"button",tabIndex:P?-1:0,onClick:()=>{P||L()},onKeyDown:X=>{!P&&[ua,pa].includes(X.key)&&(L(),X.preventDefault())},"aria-disabled":P,"aria-pressed":A,"aria-expanded":A,ref:r,children:(0,e.jsx)(ma,{activeElements:b,filterInView:w,filter:l})})}),N&&(0,e.jsx)(rs.Ay,{text:O?(0,p.__)("Reset"):(0,p.__)("Remove"),placement:"top",children:(0,e.jsx)("button",{className:(0,J.A)("dataviews-filters__summary-chip-remove",{"has-values":C}),onClick:()=>{f({...d,page:1,filters:d.filters?.filter(X=>X.field!==l.field)}),O?r.current?.focus():t.current?.focus()},children:(0,e.jsx)(mt.A,{icon:we.A})})})]}),renderContent:()=>(0,e.jsxs)($e.A,{spacing:0,justify:"flex-start",children:[(0,e.jsx)(va,{...i}),i.filter.hasElements?(0,e.jsx)(oa,{...i,filter:{...i.filter,elements:y}}):(0,e.jsx)(ca,{...i,fields:a})]})})}function wa({filters:t,view:s,onChangeView:a}){const i=l=>t.some(d=>d.field===l&&d.isPrimary),r=!s.search&&!s.filters?.some(l=>!l.isLocked&&(l.value!==void 0||!i(l.field)));return(0,e.jsx)(Ae.Ay,{disabled:r,accessibleWhenDisabled:!0,size:"compact",variant:"tertiary",className:"dataviews-filters__reset-button",onClick:()=>{a({...s,page:1,search:"",filters:s.filters?.filter(l=>!!l.isLocked)||[]})},children:(0,p.__)("Reset")})}function _a(t,s){return(0,u.useMemo)(()=>{const a=[];return t.forEach(i=>{if(i.filterBy===!1||!i.hasElements&&!i.Edit)return;const r=i.filterBy.operators,l=!!i.filterBy?.isPrimary,d=s.filters?.some(f=>f.field===i.id&&!!f.isLocked)??!1;a.push({field:i.id,name:i.label,elements:i.elements,getElements:i.getElements,hasElements:i.hasElements,singleSelection:r.some(f=>I.e5.includes(f)),operators:r,isVisible:d||l||!!s.filters?.some(f=>f.field===i.id&&I.CD.includes(f.operator)),isPrimary:l,isLocked:d})}),a.sort((i,r)=>i.isLocked&&!r.isLocked?-1:!i.isLocked&&r.isLocked?1:i.isPrimary&&!r.isPrimary?-1:!i.isPrimary&&r.isPrimary?1:i.name.localeCompare(r.name)),a},[t,s])}var xi=_a;function ha({className:t}){const{fields:s,view:a,onChangeView:i,openedFilter:r,setOpenedFilter:l}=(0,u.useContext)(K),d=(0,u.useRef)(null),f=xi(s,a),w=(0,e.jsx)(Js,{filters:f,view:a,onChangeView:i,ref:d,setOpenedFilter:l},"add-filter"),b=f.filter(O=>O.isVisible);if(b.length===0)return null;const y=[...b.map(O=>(0,e.jsx)(fa,{filter:O,view:a,fields:s,onChangeView:i,addFilterRef:d,openedFilter:r},O.field)),w];return y.push((0,e.jsx)(wa,{filters:f,view:a,onChangeView:i},"reset-filters")),(0,e.jsx)(x.A,{justify:"flex-start",style:{width:"fit-content"},wrap:!0,className:t,children:y})}var yi=(0,u.memo)(ha);function ga(t){const{isShowingFilter:s}=(0,u.useContext)(K);return s?(0,e.jsx)(yi,{...t}):null}var ji=ga;function Ai({className:t}){const{actions:s=[],data:a,fields:i,getItemId:r,getItemLevel:l,isLoading:d,view:f,onChangeView:w,selection:b,onChangeSelection:y,setOpenedFilter:O,onClickItem:P,isItemClickable:C,renderItemLink:N,defaultLayouts:A,empty:L=(0,e.jsx)("p",{children:(0,p.__)("No results")})}=(0,u.useContext)(K),X=Bt.find(H=>H.type===f.type&&A[H.type])?.component;return(0,e.jsx)(X,{className:t,actions:s,data:a,fields:i,getItemId:r,getItemLevel:l,isLoading:d,onChangeView:w,onChangeSelection:y,selection:b,setOpenedFilter:O,onClickItem:P,renderItemLink:N,isItemClickable:C,view:f,empty:L})}var ki=(0,e.jsx)(D.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,e.jsx)(D.wA,{d:"M6.6 6L5.4 7l4.5 5-4.5 5 1.1 1 5.5-6-5.4-6zm6 0l-1.1 1 4.5 5-4.5 5 1.1 1 5.5-6-5.5-6z"})}),Ci=(0,e.jsx)(D.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,e.jsx)(D.wA,{d:"M11.6 7l-1.1-1L5 12l5.5 6 1.1-1L7 12l4.6-5zm6 0l-1.1-1-5.5 6 5.5 6 1.1-1-4.6-5 4.6-5z"})});function Vi(){const{view:t,onChangeView:s,paginationInfo:{totalItems:a=0,totalPages:i}}=(0,u.useContext)(K);if(!a||!i||t.infiniteScrollEnabled)return null;const r=t.page??1,l=Array.from(Array(i)).map((d,f)=>{const w=f+1;return{value:w.toString(),label:w.toString(),"aria-label":r===w?(0,p.nv)((0,p.__)("Page %1$d of %2$d"),r,i):w.toString()}});return!!a&&i!==1&&(0,e.jsxs)(x.A,{expanded:!1,className:"dataviews-pagination",justify:"end",spacing:6,children:[(0,e.jsx)(x.A,{justify:"flex-start",expanded:!1,spacing:1,className:"dataviews-pagination__page-select",children:(0,Fe.A)((0,p.nv)((0,p._x)("<div>Page</div>%1$s<div>of %2$d</div>","paging"),"<CurrentPage />",i),{div:(0,e.jsx)("div",{"aria-hidden":!0}),CurrentPage:(0,e.jsx)(ls.A,{"aria-label":(0,p.__)("Current page"),value:r.toString(),options:l,onChange:d=>{s({...t,page:+d})},size:"small",__nextHasNoMarginBottom:!0,variant:"minimal"})})}),(0,e.jsxs)(x.A,{expanded:!1,spacing:1,children:[(0,e.jsx)(Ae.Ay,{onClick:()=>s({...t,page:r-1}),disabled:r===1,accessibleWhenDisabled:!0,label:(0,p.__)("Previous page"),icon:(0,p.V8)()?ki:Ci,showTooltip:!0,size:"compact",tooltipPosition:"top"}),(0,e.jsx)(Ae.Ay,{onClick:()=>s({...t,page:r+1}),disabled:r>=i,accessibleWhenDisabled:!0,label:(0,p.__)("Next page"),icon:(0,p.V8)()?Ci:ki,showTooltip:!0,size:"compact",tooltipPosition:"top"})]})]})}var ba=(0,u.memo)(Vi);const xa=[];function Si(){const{view:t,paginationInfo:{totalItems:s=0,totalPages:a},data:i,actions:r=xa}=(0,u.useContext)(K),l=Ye(r,i)&&[I.Ad,I.Ul].includes(t.type);return!s||!a||a<=1&&!l?null:!!s&&(0,e.jsxs)(x.A,{expanded:!1,justify:"end",className:"dataviews-footer",children:[l&&(0,e.jsx)(es,{}),(0,e.jsx)(ba,{})]})}var ya=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/search-control/index.js"),ja=c("../../../node_modules/.pnpm/@wordpress+compose@7.34.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-debounced-input/index.js"),Ei=(0,u.memo)(function({label:s}){const{view:a,onChangeView:i}=(0,u.useContext)(K),[r,l,d]=(0,ja.A)(a.search);(0,u.useEffect)(()=>{l(a.search??"")},[a.search,l]);const f=(0,u.useRef)(i),w=(0,u.useRef)(a);(0,u.useEffect)(()=>{f.current=i,w.current=a},[i,a]),(0,u.useEffect)(()=>{d!==w.current?.search&&f.current({...w.current,page:1,search:d})},[d]);const b=s||(0,p.__)("Search");return(0,e.jsx)(ya.A,{className:"dataviews-search",__nextHasNoMarginBottom:!0,onChange:l,value:r,label:b,placeholder:b,size:"compact"})}),Aa=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option-icon/component.js"),ka=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/item-group/item/component.js"),Oi=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/item-group/item-group/component.js"),Ca=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),Pi=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/grid/component.js"),Va=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/heading/component.js"),Sa=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.js"),Ea=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/dropdown/dropdown-content-wrapper.js"),Oa=c("../../../node_modules/.pnpm/@wordpress+icons@11.1.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/lock.js"),Pa=c("../../../node_modules/.pnpm/@wordpress+icons@11.1.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js"),Na=c("../../../node_modules/.pnpm/@wordpress+icons@11.1.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js"),Ma=c("../../../node_modules/.pnpm/@wordpress+icons@11.1.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/seen.js"),Ta=(0,e.jsx)(D.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,e.jsx)(D.wA,{fillRule:"evenodd",d:"M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",clipRule:"evenodd"})}),Ni=c("../../../node_modules/.pnpm/@wordpress+warning@3.34.0/node_modules/@wordpress/warning/build-module/index.js"),Da=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-control/index.js");function Ia(){const t=(0,u.useContext)(K),{view:s,onChangeView:a}=t,i=s.infiniteScrollEnabled??!1;return t.hasInfiniteScrollHandler?(0,e.jsx)(Da.A,{__nextHasNoMarginBottom:!0,label:(0,p.__)("Enable infinite scroll"),help:(0,p.__)("Automatically load more content as you scroll, instead of showing pagination links."),checked:i,onChange:r=>{a({...s,infiniteScrollEnabled:r})}}):null}const{Menu:bt}=(0,ne.T)(T.j),Ra={className:"dataviews-config__popover",placement:"bottom-end",offset:9};function Mi(){const{view:t,onChangeView:s,defaultLayouts:a}=(0,u.useContext)(K),i=Object.keys(a);if(i.length<=1)return null;const r=Bt.find(l=>t.type===l.type);return(0,e.jsxs)(bt,{children:[(0,e.jsx)(bt.TriggerButton,{render:(0,e.jsx)(Ae.Ay,{size:"compact",icon:r?.icon,label:(0,p.__)("Layout")})}),(0,e.jsx)(bt.Popover,{children:i.map(l=>{const d=Bt.find(f=>f.type===l);return d?(0,e.jsx)(bt.RadioItem,{value:l,name:"view-actions-available-view",checked:l===t.type,hideOnClick:!0,onChange:f=>{switch(f.target.value){case"list":case"grid":case"table":case"pickerGrid":const w={...t};return"layout"in w&&delete w.layout,s({...w,type:f.target.value,...a[f.target.value]})}(0,Ni.A)("Invalid dataview")},children:(0,e.jsx)(bt.ItemLabel,{children:d.label})},l):null})})]})}function za(){const{view:t,fields:s,onChangeView:a}=(0,u.useContext)(K),i=(0,u.useMemo)(()=>s.filter(l=>l.enableSorting!==!1).map(l=>({label:l.label,value:l.id})),[s]);return(0,e.jsx)(ls.A,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:(0,p.__)("Sort by"),value:t.sort?.field,options:i,onChange:r=>{a({...t,sort:{direction:t?.sort?.direction||"desc",field:r},showLevels:!1})}})}function Ba(){const{view:t,fields:s,onChangeView:a}=(0,u.useContext)(K);if(s.filter(l=>l.enableSorting!==!1).length===0)return null;let r=t.sort?.direction;return!r&&t.sort?.field&&(r="desc"),(0,e.jsx)(ns.A,{className:"dataviews-view-config__sort-direction",__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,isBlock:!0,label:(0,p.__)("Order"),value:r,onChange:l=>{if(l==="asc"||l==="desc"){a({...t,sort:{direction:l,field:t.sort?.field||s.find(d=>d.enableSorting!==!1)?.id||""},showLevels:!1});return}(0,Ni.A)("Invalid direction")},children:I.GJ.map(l=>(0,e.jsx)(Aa.A,{value:l,icon:I.ls[l],label:I.CL[l]},l))})}function Fa(){const{view:t,config:s,onChangeView:a}=(0,u.useContext)(K),{infiniteScrollEnabled:i}=t;return!s||!s.perPageSizes||s.perPageSizes.length<2||s.perPageSizes.length>6||i?null:(0,e.jsx)(ns.A,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,isBlock:!0,label:(0,p.__)("Items per page"),value:t.perPage||10,disabled:!t?.sort?.field,onChange:r=>{const l=typeof r=="number"||r===void 0?r:parseInt(r,10);a({...t,perPage:l,page:1})},children:s.perPageSizes.map(r=>(0,e.jsx)(Jt.A,{value:r,label:r.toString()},r))})}function La({previewOptions:t,onChangePreviewOption:s,onMenuOpenChange:a,activeOption:i}){const r=l=>{setTimeout(()=>{const d=document.querySelector(`.dataviews-field-control__field-${l} .dataviews-field-control__field-preview-options-button`);d instanceof HTMLElement&&d.focus()},50)};return(0,e.jsxs)(bt,{onOpenChange:a,children:[(0,e.jsx)(bt.TriggerButton,{render:(0,e.jsx)(Ae.Ay,{className:"dataviews-field-control__field-preview-options-button",size:"compact",icon:ct.A,label:(0,p.__)("Preview")})}),(0,e.jsx)(bt.Popover,{children:t?.map(({id:l,label:d})=>(0,e.jsx)(bt.RadioItem,{value:l,checked:l===i,onChange:()=>{s?.(l),r(l)},children:(0,e.jsx)(bt.ItemLabel,{children:d})},l))})]})}function Ss({field:t,label:s,description:a,isVisible:i,isFirst:r,isLast:l,canMove:d=!0,onToggleVisibility:f,onMoveUp:w,onMoveDown:b,previewOptions:y,onChangePreviewOption:O}){const[P,C]=(0,u.useState)(!1),N=()=>{setTimeout(()=>{const A=document.querySelector(`.dataviews-field-control__field-${t.id} .dataviews-field-control__field-visibility-button`);A instanceof HTMLElement&&A.focus()},50)};return(0,e.jsx)(ka.A,{children:(0,e.jsxs)(x.A,{expanded:!0,className:(0,J.A)("dataviews-field-control__field",`dataviews-field-control__field-${t.id}`,{"is-interacting":P}),justify:"flex-start",children:[(0,e.jsx)("span",{className:"dataviews-field-control__icon",children:!d&&!t.enableHiding&&(0,e.jsx)(mt.A,{icon:Oa.A})}),(0,e.jsxs)("span",{className:"dataviews-field-control__label-sub-label-container",children:[(0,e.jsx)("span",{className:"dataviews-field-control__label",children:s||t.label}),a&&(0,e.jsx)("span",{className:"dataviews-field-control__sub-label",children:a})]}),(0,e.jsxs)(x.A,{justify:"flex-end",expanded:!1,className:"dataviews-field-control__actions",children:[i&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ae.Ay,{disabled:r||!d,accessibleWhenDisabled:!0,size:"compact",onClick:w,icon:Pa.A,label:r||!d?(0,p.__)("This field can't be moved up"):(0,p.nv)((0,p.__)("Move %s up"),t.label)}),(0,e.jsx)(Ae.Ay,{disabled:l||!d,accessibleWhenDisabled:!0,size:"compact",onClick:b,icon:Na.A,label:l||!d?(0,p.__)("This field can't be moved down"):(0,p.nv)((0,p.__)("Move %s down"),t.label)})]}),f&&(0,e.jsx)(Ae.Ay,{className:"dataviews-field-control__field-visibility-button",disabled:!t.enableHiding,accessibleWhenDisabled:!0,size:"compact",onClick:()=>{f(),N()},icon:i?ss.A:Ma.A,label:i?(0,p.nv)((0,p._x)("Hide %s","field"),t.label):(0,p.nv)((0,p._x)("Show %s","field"),t.label)}),y&&(0,e.jsx)(La,{previewOptions:y,onChangePreviewOption:O,onMenuOpenChange:C,activeOption:t.id})]})]})})}function Ti({index:t,field:s,view:a,onChangeView:i}){const r=a.fields??[],l=t!==void 0&&r.includes(s.id);return(0,e.jsx)(Ss,{field:s,isVisible:l,isFirst:t!==void 0&&t<1,isLast:t!==void 0&&t===r.length-1,onToggleVisibility:()=>{i({...a,fields:l?r.filter(d=>d!==s.id):[...r,s.id]})},onMoveUp:t!==void 0?()=>{i({...a,fields:[...r.slice(0,t-1)??[],s.id,r[t-1],...r.slice(t+1)]})}:void 0,onMoveDown:t!==void 0?()=>{i({...a,fields:[...r.slice(0,t)??[],r[t+1],s.id,...r.slice(t+2)]})}:void 0})}function qt(t){return!!t}function Ha(){const{view:t,fields:s,onChangeView:a}=(0,u.useContext)(K),i=[t?.titleField,t?.mediaField,t?.descriptionField].filter(Boolean),r=t.fields??[],l=s.filter(A=>!r.includes(A.id)&&!i.includes(A.id)&&A.type!=="media"&&A.enableHiding!==!1);let d=r.map(A=>s.find(L=>L.id===A)).filter(qt);if(!d?.length&&!l?.length)return null;const f=s.find(A=>A.id===t.titleField),w=s.find(A=>A.id===t.mediaField),b=s.find(A=>A.id===t.descriptionField),y=s.filter(A=>A.type==="media");let O;if(y.length>1){const A=qt(w)&&(t.showMedia??!0);O=qt(w)&&(0,e.jsx)(Ss,{field:w,label:(0,p.__)("Preview"),description:w.label,isVisible:A,onToggleVisibility:()=>{a({...t,showMedia:!A})},canMove:!1,previewOptions:y.map(L=>({label:L.label,id:L.id})),onChangePreviewOption:L=>a({...t,mediaField:L})},w.id)}const P=[{field:f,isVisibleFlag:"showTitle"},{field:w,isVisibleFlag:"showMedia",ui:O},{field:b,isVisibleFlag:"showDescription"}].filter(({field:A})=>qt(A));let C=P.filter(({field:A,isVisibleFlag:L})=>qt(A)&&(t[L]??!0));C.length===1&&(C=C.map(A=>({...A,field:{...A.field,enableHiding:!1}}))),C.length===0&&d.length===1&&(d=[{...d[0],enableHiding:!1}]);const N=P.filter(({field:A,isVisibleFlag:L})=>qt(A)&&!(t[L]??!0));return(0,e.jsxs)($e.A,{className:"dataviews-field-control",spacing:6,children:[(0,e.jsx)($e.A,{className:"dataviews-view-config__properties",spacing:0,children:(C.length>0||!!d?.length)&&(0,e.jsxs)(Oi.A,{isBordered:!0,isSeparated:!0,children:[C.map(({field:A,isVisibleFlag:L,ui:X})=>X??(0,e.jsx)(Ss,{field:A,isVisible:!0,onToggleVisibility:()=>{a({...t,[L]:!1})},canMove:!1},A.id)),d.map((A,L)=>(0,e.jsx)(Ti,{field:A,view:t,onChangeView:a,index:L},A.id))]})}),(!!l?.length||!!N.length)&&(0,e.jsxs)($e.A,{spacing:4,children:[(0,e.jsx)(Ca.Ay.VisualLabel,{style:{margin:0},children:(0,p.__)("Hidden")}),(0,e.jsx)($e.A,{className:"dataviews-view-config__properties",spacing:0,children:(0,e.jsxs)(Oi.A,{isBordered:!0,isSeparated:!0,children:[N.length>0&&N.map(({field:A,isVisibleFlag:L,ui:X})=>X??(0,e.jsx)(Ss,{field:A,isVisible:!1,onToggleVisibility:()=>{a({...t,[L]:!0})},canMove:!1},A.id)),l.map(A=>(0,e.jsx)(Ti,{field:A,view:t,onChangeView:a},A.id))]})})]})]})}function Di({title:t,description:s,children:a}){return(0,e.jsxs)(Pi.A,{columns:12,className:"dataviews-settings-section",gap:4,children:[(0,e.jsxs)("div",{className:"dataviews-settings-section__sidebar",children:[(0,e.jsx)(Va.A,{level:2,className:"dataviews-settings-section__title",children:t}),s&&(0,e.jsx)(Sa.A,{variant:"muted",className:"dataviews-settings-section__description",children:s})]}),(0,e.jsx)(Pi.A,{columns:8,gap:4,className:"dataviews-settings-section__content",children:a})]})}function Ii(){const{view:t}=(0,u.useContext)(K),s=(0,It.A)(Ri,"dataviews-view-config-dropdown"),a=Bt.find(i=>i.type===t.type);return(0,e.jsx)(As.A,{expandOnMobile:!0,popoverProps:{...Ra,id:s},renderToggle:({onToggle:i,isOpen:r})=>(0,e.jsx)(Ae.Ay,{size:"compact",icon:Ta,label:(0,p._x)("View options","View is used as a noun"),onClick:i,"aria-expanded":r?"true":"false","aria-controls":s}),renderContent:()=>(0,e.jsx)(Ea.A,{paddingSize:"medium",className:"dataviews-config__popover-content-wrapper",children:(0,e.jsxs)($e.A,{className:"dataviews-view-config",spacing:6,children:[(0,e.jsxs)(Di,{title:(0,p.__)("Appearance"),children:[(0,e.jsxs)(x.A,{expanded:!0,className:"is-divided-in-two",children:[(0,e.jsx)(za,{}),(0,e.jsx)(Ba,{})]}),!!a?.viewConfigOptions&&(0,e.jsx)(a.viewConfigOptions,{}),(0,e.jsx)(Ia,{}),(0,e.jsx)(Fa,{})]}),(0,e.jsx)(Di,{title:(0,p.__)("Properties"),children:(0,e.jsx)(Ha,{})})]})})})}function Ri(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Mi,{}),(0,e.jsx)(Ii,{})]})}var Wa=(0,u.memo)(Ri),$a=c("../../../node_modules/.pnpm/@wordpress+dataviews@10.2.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_a91a9955fb93daf0aecd43f380e81fdc/node_modules/@wordpress/dataviews/build-module/utils/normalize-fields.js");const Ua=t=>t.id,Ka=()=>!0,Ga=[],Ya=Bt.filter(t=>!t.isPicker);function Xa({header:t,search:s=!0,searchLabel:a=void 0}){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(x.A,{alignment:"top",justify:"space-between",className:"dataviews__view-actions",spacing:1,children:[(0,e.jsxs)(x.A,{justify:"start",expanded:!1,className:"dataviews__search",children:[s&&(0,e.jsx)(Ei,{label:a}),(0,e.jsx)(js,{})]}),(0,e.jsxs)(x.A,{spacing:1,expanded:!1,style:{flexShrink:0},children:[(0,e.jsx)(Wa,{}),t]})]}),(0,e.jsx)(ji,{className:"dataviews-filters__container"}),(0,e.jsx)(Ai,{}),(0,e.jsx)(Si,{})]})}function Ja({view:t,onChangeView:s,fields:a,search:i=!0,searchLabel:r=void 0,actions:l=Ga,data:d,getItemId:f=Ua,getItemLevel:w,isLoading:b=!1,paginationInfo:y,defaultLayouts:O,selection:P,onChangeSelection:C,onClickItem:N,renderItemLink:A,isItemClickable:L=Ka,header:X,children:H,config:ge={perPageSizes:[10,20,50,100]},empty:fe}){const{infiniteScrollHandler:Z}=y,se=(0,u.useRef)(null),[de,ke]=(0,u.useState)(0),ce=(0,$.A)(Ve=>{ke(Ve[0].borderBoxSize[0].inlineSize)},{box:"border-box"}),[me,te]=(0,u.useState)([]),be=P===void 0||C===void 0,S=be?me:P,[M,U]=(0,u.useState)(null);function oe(Ve){const ot=typeof Ve=="function"?Ve(S):Ve;be&&te(ot),C&&C(ot)}const Ie=(0,u.useMemo)(()=>(0,$a.A)(a),[a]),We=(0,u.useMemo)(()=>S.filter(Ve=>d.some(ot=>f(ot)===Ve)),[S,d,f]),pt=xi(Ie,t),xt=(0,u.useMemo)(()=>(pt||[]).some(Ve=>Ve.isPrimary||Ve.isLocked),[pt]),[kt,Ce]=(0,u.useState)(xt);(0,u.useEffect)(()=>{xt&&!kt&&Ce(!0)},[xt,kt]),(0,u.useEffect)(()=>{if(!t.infiniteScrollEnabled||!se.current)return;const Ve=(0,v.n)(cs=>{const Ht=cs.target,ai=Ht.scrollTop,Es=Ht.scrollHeight,ri=Ht.clientHeight;ai+ri>=Es-100&&Z?.()},100),ot=se.current;return ot.addEventListener("scroll",Ve),()=>{ot.removeEventListener("scroll",Ve),Ve.cancel()}},[Z,t.infiniteScrollEnabled]);const et=(0,u.useMemo)(()=>Object.fromEntries(Object.entries(O).filter(([Ve])=>Ya.some(ot=>ot.type===Ve))),[O]);return et[t.type]?(0,e.jsx)(K.Provider,{value:{view:t,onChangeView:s,fields:Ie,actions:l,data:d,isLoading:b,paginationInfo:y,selection:We,onChangeSelection:oe,openedFilter:M,setOpenedFilter:U,getItemId:f,getItemLevel:w,isItemClickable:L,onClickItem:N,renderItemLink:A,containerWidth:de,containerRef:se,resizeObserverRef:ce,defaultLayouts:et,filters:pt,isShowingFilter:kt,setIsShowingFilter:Ce,config:ge,empty:fe,hasInfiniteScrollHandler:!!Z},children:(0,e.jsx)("div",{className:"dataviews-wrapper",ref:se,children:H??(0,e.jsx)(Xa,{header:X,search:i,searchLabel:r})})}):null}const _t=Ja;_t.BulkActionToolbar=es,_t.Filters=yi,_t.FiltersToggled=ji,_t.FiltersToggle=js,_t.Layout=Ai,_t.LayoutSwitcher=Mi,_t.Pagination=Vi,_t.Search=Ei,_t.ViewConfig=Ii,_t.Footer=Si;var Qa=_t}),"../../../node_modules/.pnpm/@wordpress+dataviews@10.2.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_a91a9955fb93daf0aecd43f380e81fdc/node_modules/@wordpress/dataviews/build-module/constants.js":((Ue,ue,c)=>{"use strict";c.d(ue,{CD:()=>F,Ul:()=>Se,mA:()=>ze,dL:()=>Ye,Ad:()=>we,we:()=>yt,QF:()=>ve,NN:()=>Ge,Xd:()=>ae,o8:()=>ye,CX:()=>ct,Py:()=>T,u5:()=>De,x4:()=>J,_h:()=>ne,gm:()=>I,y5:()=>D,ld:()=>K,Vw:()=>p,_k:()=>Ne,UX:()=>xe,X4:()=>he,Ie:()=>Me,Vm:()=>Ae,Ld:()=>k,xz:()=>qe,MD:()=>z,YH:()=>lt,e5:()=>Be,GJ:()=>ht,vI:()=>h,ls:()=>G,CL:()=>V,LW:()=>_});var e=c("../../../node_modules/.pnpm/@wordpress+i18n@6.7.0/node_modules/@wordpress/i18n/build-module/index.js"),x=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),u=c("../../../node_modules/.pnpm/@wordpress+primitives@4.34.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),$=(0,x.jsx)(u.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,x.jsx)(u.wA,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"})}),v=c("../../../node_modules/.pnpm/@wordpress+icons@11.1.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-down.js");const I="is",Ne="isNot",K="isAny",p="isNone",D="isAll",xe="isNotAll",he="lessThan",De="greaterThan",Me="lessThanOrEqual",J="greaterThanOrEqual",ae="before",ve="after",ye="beforeInc",Ge="afterInc",T="contains",Ae="notContains",lt="startsWith",ct="between",qe="on",k="notOn",ne="inThePast",z="over",F=[I,Ne,K,p,D,xe,he,De,Me,J,ae,ve,ye,Ge,T,Ae,lt,ct,qe,k,ne,z],Be=[I,Ne,he,De,Me,J,ae,ve,ye,Ge,T,Ae,lt,qe,k],yt={[I]:{key:"is-filter",label:(0,e.__)("Is")},[Ne]:{key:"is-not-filter",label:(0,e.__)("Is not")},[K]:{key:"is-any-filter",label:(0,e.__)("Is any")},[p]:{key:"is-none-filter",label:(0,e.__)("Is none")},[D]:{key:"is-all-filter",label:(0,e.__)("Is all")},[xe]:{key:"is-not-all-filter",label:(0,e.__)("Is not all")},[he]:{key:"less-than-filter",label:(0,e.__)("Less than")},[De]:{key:"greater-than-filter",label:(0,e.__)("Greater than")},[Me]:{key:"less-than-or-equal-filter",label:(0,e.__)("Less than or equal")},[J]:{key:"greater-than-or-equal-filter",label:(0,e.__)("Greater than or equal")},[ae]:{key:"before-filter",label:(0,e.__)("Before")},[ve]:{key:"after-filter",label:(0,e.__)("After")},[ye]:{key:"before-inc-filter",label:(0,e.__)("Before (inc)")},[Ge]:{key:"after-inc-filter",label:(0,e.__)("After (inc)")},[T]:{key:"contains-filter",label:(0,e.__)("Contains")},[Ae]:{key:"not-contains-filter",label:(0,e.__)("Doesn't contain")},[lt]:{key:"starts-with-filter",label:(0,e.__)("Starts with")},[ct]:{key:"between-filter",label:(0,e.__)("Between (inc)")},[qe]:{key:"on-filter",label:(0,e.__)("On")},[k]:{key:"not-on-filter",label:(0,e.__)("Not on")},[ne]:{key:"in-the-past-filter",label:(0,e.__)("In the past")},[z]:{key:"over-filter",label:(0,e.__)("Over")}},ht=["asc","desc"],h={asc:"\u2191",desc:"\u2193"},_={asc:"ascending",desc:"descending"},V={asc:(0,e.__)("Sort ascending"),desc:(0,e.__)("Sort descending")},G={asc:$,desc:v.A},we="table",Se="grid",ze="list",Ye="pickerGrid"}),"../../../node_modules/.pnpm/@wordpress+dataviews@10.2.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_a91a9955fb93daf0aecd43f380e81fdc/node_modules/@wordpress/dataviews/build-module/hooks/use-elements.js":((Ue,ue,c)=>{"use strict";c.d(ue,{A:()=>u});var e=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const x=[];function u({elements:$,getElements:v}){const I=Array.isArray($)&&$.length>0?$:x,[Ne,K]=(0,e.useState)(I),[p,D]=(0,e.useState)(!1);return(0,e.useEffect)(()=>{if(!v){K(I);return}let xe=!1;return D(!0),v().then(he=>{if(!xe){const De=Array.isArray(he)&&he.length>0?he:I;K(De)}}).catch(()=>{xe||K(I)}).finally(()=>{xe||D(!1)}),()=>{xe=!0}},[v,I]),{elements:Ne,isLoading:p}}}),"../../../node_modules/.pnpm/@wordpress+dataviews@10.2.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_a91a9955fb93daf0aecd43f380e81fdc/node_modules/@wordpress/dataviews/build-module/lock-unlock.js":((Ue,ue,c)=>{"use strict";c.d(ue,{T:()=>u});var e=c("../../../node_modules/.pnpm/@wordpress+private-apis@1.34.0/node_modules/@wordpress/private-apis/build-module/implementation.js");const{lock:x,unlock:u}=(0,e.yf)("I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.","@wordpress/dataviews")}),"../../../node_modules/.pnpm/@wordpress+dataviews@10.2.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_a91a9955fb93daf0aecd43f380e81fdc/node_modules/@wordpress/dataviews/build-module/utils/filter-sort-and-paginate.js":((Ue,ue,c)=>{"use strict";c.d(ue,{A:()=>J});var e=c("../../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js"),x=c.n(e),u=c("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/subDays.js"),$=c("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addWeeks.js");function v(ae,ve,ye){return(0,$.J)(ae,-ve,ye)}const I=null;var Ne=c("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/subMonths.js"),K=c("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/subYears.js"),p=c("../../../node_modules/.pnpm/@wordpress+date@5.34.0/node_modules/@wordpress/date/build-module/index.js"),D=c("../../../node_modules/.pnpm/@wordpress+dataviews@10.2.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_a91a9955fb93daf0aecd43f380e81fdc/node_modules/@wordpress/dataviews/build-module/constants.js"),xe=c("../../../node_modules/.pnpm/@wordpress+dataviews@10.2.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_a91a9955fb93daf0aecd43f380e81fdc/node_modules/@wordpress/dataviews/build-module/utils/normalize-fields.js");function he(ae=""){return x()(ae.trim().toLowerCase())}const De=[];function Me(ae,ve){switch(ve){case"days":return(0,u.e)(new Date,ae);case"weeks":return v(new Date,ae);case"months":return(0,Ne.a)(new Date,ae);case"years":return(0,K.d)(new Date,ae);default:return new Date}}function J(ae,ve,ye){if(!ae)return{data:De,paginationInfo:{totalItems:0,totalPages:0}};const Ge=(0,xe.A)(ye);let T=[...ae];if(ve.search){const k=he(ve.search);T=T.filter(ne=>Ge.filter(z=>z.enableGlobalSearch).some(z=>{const F=z.getValue({item:ne});return(Array.isArray(F)?F:[F]).some(yt=>he(String(yt)).includes(k))}))}ve.filters&&ve.filters?.length>0&&ve.filters.forEach(k=>{const ne=Ge.find(z=>z.id===k.field);if(ne){if(k.operator===D.ld&&k?.value?.length>0)T=T.filter(z=>{const F=ne.getValue({item:z});return Array.isArray(F)?k.value.some(Be=>F.includes(Be)):typeof F=="string"?k.value.includes(F):!1});else if(k.operator===D.Vw&&k?.value?.length>0)T=T.filter(z=>{const F=ne.getValue({item:z});return Array.isArray(F)?!k.value.some(Be=>F.includes(Be)):typeof F=="string"?!k.value.includes(F):!1});else if(k.operator===D.y5&&k?.value?.length>0)T=T.filter(z=>k.value.every(F=>ne.getValue({item:z})?.includes(F)));else if(k.operator===D.UX&&k?.value?.length>0)T=T.filter(z=>k.value.every(F=>!ne.getValue({item:z})?.includes(F)));else if(k.operator===D.gm)T=T.filter(z=>k.value===ne.getValue({item:z})||k.value===void 0);else if(k.operator===D._k)T=T.filter(z=>k.value!==ne.getValue({item:z}));else if(k.operator===D.xz&&k.value!==void 0){const z=(0,p.getDate)(k.value);T=T.filter(F=>{const Be=(0,p.getDate)(ne.getValue({item:F}));return z.getTime()===Be.getTime()})}else if(k.operator===D.Ld&&k.value!==void 0){const z=(0,p.getDate)(k.value);T=T.filter(F=>{const Be=(0,p.getDate)(ne.getValue({item:F}));return z.getTime()!==Be.getTime()})}else if(k.operator===D.X4&&k.value!==void 0)T=T.filter(z=>ne.getValue({item:z})<k.value);else if(k.operator===D.u5&&k.value!==void 0)T=T.filter(z=>ne.getValue({item:z})>k.value);else if(k.operator===D.Ie&&k.value!==void 0)T=T.filter(z=>ne.getValue({item:z})<=k.value);else if(k.operator===D.x4&&k.value!==void 0)T=T.filter(z=>ne.getValue({item:z})>=k.value);else if(k.operator===D.Py&&k?.value!==void 0)T=T.filter(z=>{const F=ne.getValue({item:z});return typeof F=="string"&&k.value&&F.toLowerCase().includes(String(k.value).toLowerCase())});else if(k.operator===D.Vm&&k?.value!==void 0)T=T.filter(z=>{const F=ne.getValue({item:z});return typeof F=="string"&&k.value&&!F.toLowerCase().includes(String(k.value).toLowerCase())});else if(k.operator===D.YH&&k?.value!==void 0)T=T.filter(z=>{const F=ne.getValue({item:z});return typeof F=="string"&&k.value&&F.toLowerCase().startsWith(String(k.value).toLowerCase())});else if(k.operator===D.Xd&&k.value!==void 0){const z=(0,p.getDate)(k.value);T=T.filter(F=>(0,p.getDate)(ne.getValue({item:F}))<z)}else if(k.operator===D.QF&&k.value!==void 0){const z=(0,p.getDate)(k.value);T=T.filter(F=>(0,p.getDate)(ne.getValue({item:F}))>z)}else if(k.operator===D.o8&&k.value!==void 0){const z=(0,p.getDate)(k.value);T=T.filter(F=>(0,p.getDate)(ne.getValue({item:F}))<=z)}else if(k.operator===D.NN&&k.value!==void 0){const z=(0,p.getDate)(k.value);T=T.filter(F=>(0,p.getDate)(ne.getValue({item:F}))>=z)}else if(k.operator===D.CX&&Array.isArray(k.value)&&k.value.length===2&&k.value[0]!==void 0&&k.value[1]!==void 0)T=T.filter(z=>{const F=ne.getValue({item:z});return typeof F=="number"||F instanceof Date||typeof F=="string"?F>=k.value[0]&&F<=k.value[1]:!1});else if(k.operator===D._h&&k.value?.value!==void 0&&k.value?.unit!==void 0){const z=Me(k.value.value,k.value.unit);T=T.filter(F=>{const Be=(0,p.getDate)(ne.getValue({item:F}));return Be>=z&&Be<=new Date})}else if(k.operator===D.MD&&k.value?.value!==void 0&&k.value?.unit!==void 0){const z=Me(k.value.value,k.value.unit);T=T.filter(F=>(0,p.getDate)(ne.getValue({item:F}))<z)}}});const Ae=ve.sort?.field?Ge.find(k=>k.id===ve.sort?.field):null,lt=ve.groupByField?Ge.find(k=>k.id===ve.groupByField):null;(Ae||lt)&&T.sort((k,ne)=>{if(lt){const z=lt.sort(k,ne,"asc");if(z!==0)return z}return Ae?Ae.sort(k,ne,ve.sort?.direction??"desc"):0});let ct=T.length,qe=1;if(ve.page!==void 0&&ve.perPage!==void 0){const k=(ve.page-1)*ve.perPage;ct=T?.length||0,qe=Math.ceil(ct/ve.perPage),T=T?.slice(k,k+ve.perPage)}return{data:T,paginationInfo:{totalItems:ct,totalPages:qe}}}}),"../../../node_modules/.pnpm/@wordpress+dataviews@10.2.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_a91a9955fb93daf0aecd43f380e81fdc/node_modules/@wordpress/dataviews/build-module/utils/normalize-fields.js":((Ue,ue,c)=>{"use strict";c.d(ue,{A:()=>Oe});var e=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),x=c("../../../node_modules/.pnpm/@wordpress+i18n@6.7.0/node_modules/@wordpress/i18n/build-module/index.js"),u=c("../../../node_modules/.pnpm/@wordpress+dataviews@10.2.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_a91a9955fb93daf0aecd43f380e81fdc/node_modules/@wordpress/dataviews/build-module/hooks/use-elements.js");function $({item:o,field:n}){const{elements:m,isLoading:g}=(0,u.A)({elements:n.elements,getElements:n.getElements}),j=n.getValue({item:o});return g||m.length===0?j:m?.find(E=>E.value===j)?.label||n.getValue({item:o})}var v=c("../../../node_modules/.pnpm/@wordpress+dataviews@10.2.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_a91a9955fb93daf0aecd43f380e81fdc/node_modules/@wordpress/dataviews/build-module/constants.js");function I(o,n,m){return m==="asc"?o.localeCompare(n):n.localeCompare(o)}const Ne=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var K={sort:I,isValid:{elements:!0,custom:(o,n)=>{const m=n.getValue({item:o});return![void 0,"",null].includes(m)&&!Ne.test(m)?(0,x.__)("Value must be a valid email address."):null}},Edit:"email",render:({item:o,field:n})=>n.hasElements?(0,e.jsx)($,{item:o,field:n}):n.getValue({item:o}),enableSorting:!0,filterBy:{defaultOperators:[v.ld,v.Vw],validOperators:[v.gm,v._k,v.Py,v.Vm,v.YH,v.ld,v.Vw,v.y5,v.UX]}};function p(o,n,m){return m==="asc"?o-n:n-o}var D={sort:p,isValid:{elements:!0,custom:(o,n)=>{const m=n.getValue({item:o});return![void 0,"",null].includes(m)&&!Number.isInteger(m)?(0,x.__)("Value must be an integer."):null}},Edit:"integer",render:({item:o,field:n})=>n.hasElements?(0,e.jsx)($,{item:o,field:n}):n.getValue({item:o}),enableSorting:!0,filterBy:{defaultOperators:[v.gm,v._k,v.X4,v.u5,v.Ie,v.x4,v.CX],validOperators:[v.gm,v._k,v.X4,v.u5,v.Ie,v.x4,v.CX,v.ld,v.Vw,v.y5,v.UX]}};function xe(o,n,m){return m==="asc"?o-n:n-o}function he(o){return o===""||o===void 0||o===null}var De={sort:xe,isValid:{elements:!0,custom:(o,n)=>{const m=n.getValue({item:o});return!he(m)&&!Number.isFinite(m)?(0,x.__)("Value must be a number."):null}},Edit:"number",render:({item:o,field:n})=>{n.hasElements;const m=n.getValue({item:o});return[null,void 0].includes(m)?null:Number(m).toFixed(2)},enableSorting:!0,filterBy:{defaultOperators:[v.gm,v._k,v.X4,v.u5,v.Ie,v.x4,v.CX],validOperators:[v.gm,v._k,v.X4,v.u5,v.Ie,v.x4,v.CX,v.ld,v.Vw,v.y5,v.UX]}};function Me(o,n,m){return m==="asc"?o.localeCompare(n):n.localeCompare(o)}var J={sort:Me,isValid:{elements:!0,custom:()=>null},Edit:"text",render:({item:o,field:n})=>n.hasElements?(0,e.jsx)($,{item:o,field:n}):n.getValue({item:o}),enableSorting:!0,filterBy:{defaultOperators:[v.ld,v.Vw],validOperators:[v.gm,v._k,v.Py,v.Vm,v.YH,v.ld,v.Vw,v.y5,v.UX]}};function ae(o,n,m){const g=new Date(o).getTime(),j=new Date(n).getTime();return m==="asc"?g-j:j-g}var ve={sort:ae,isValid:{elements:!0,custom:()=>null},Edit:"datetime",render:({item:o,field:n})=>n.hasElements?(0,e.jsx)($,{item:o,field:n}):n.getValue({item:o}),enableSorting:!0,filterBy:{defaultOperators:[v.xz,v.Ld,v.Xd,v.QF,v.o8,v.NN,v._h,v.MD],validOperators:[v.xz,v.Ld,v.Xd,v.QF,v.o8,v.NN,v._h,v.MD]}},ye=c("../../../node_modules/.pnpm/@wordpress+date@5.34.0/node_modules/@wordpress/date/build-module/index.js");const Ge=o=>(0,ye.dateI18n)((0,ye.getSettings)().formats.date,(0,ye.getDate)(o));function T(o,n,m){const g=new Date(o).getTime(),j=new Date(n).getTime();return m==="asc"?g-j:j-g}var Ae={sort:T,Edit:"date",isValid:{elements:!0,custom:()=>null},render:({item:o,field:n})=>{if(n.hasElements)return(0,e.jsx)($,{item:o,field:n});const m=n.getValue({item:o});return m?Ge(m):""},enableSorting:!0,filterBy:{defaultOperators:[v.xz,v.Ld,v.Xd,v.QF,v.o8,v.NN,v._h,v.MD,v.CX],validOperators:[v.xz,v.Ld,v.Xd,v.QF,v.o8,v.NN,v._h,v.MD,v.CX]}};function lt(o,n,m){const g=!!o;return g===!!n?0:m==="asc"?g?1:-1:g?-1:1}var ct={sort:lt,isValid:{elements:!0,custom:(o,n)=>{const m=n.getValue({item:o});return![void 0,"",null].includes(m)&&![!0,!1].includes(m)?(0,x.__)("Value must be true, false, or undefined"):null}},Edit:"checkbox",render:({item:o,field:n})=>n.hasElements?(0,e.jsx)($,{item:o,field:n}):n.getValue({item:o})===!0?(0,x.__)("True"):n.getValue({item:o})===!1?(0,x.__)("False"):null,enableSorting:!0,filterBy:{defaultOperators:[v.gm,v._k],validOperators:[v.gm,v._k]}};function qe(){return 0}var k={sort:qe,isValid:{elements:!0,custom:()=>null},Edit:null,render:()=>null,enableSorting:!1,filterBy:!1};function ne(o,n,m){const g=Array.isArray(o)?o:[],j=Array.isArray(n)?n:[];if(g.length!==j.length)return m==="asc"?g.length-j.length:j.length-g.length;const E=g.join(","),W=j.join(",");return m==="asc"?E.localeCompare(W):W.localeCompare(E)}function z({item:o,field:n}){return(n.getValue({item:o})||[]).join(", ")}var Be={sort:ne,isValid:{elements:!0,custom:(o,n)=>{const m=n.getValue({item:o});return![void 0,"",null].includes(m)&&!Array.isArray(m)?(0,x.__)("Value must be an array."):m.every(g=>typeof g=="string")?null:(0,x.__)("Every value must be a string.")}},Edit:"array",render:z,enableSorting:!0,filterBy:{defaultOperators:[v.ld,v.Vw],validOperators:[v.ld,v.Vw,v.y5,v.UX]}};function yt(o,n,m){return 0}var ht={sort:yt,isValid:{elements:!0,custom:()=>null},Edit:"password",render:({item:o,field:n})=>n.hasElements?(0,e.jsx)($,{item:o,field:n}):"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",enableSorting:!1,filterBy:!1};function h(o,n,m){return m==="asc"?o.localeCompare(n):n.localeCompare(o)}var _={sort:h,isValid:{elements:!0,custom:()=>null},Edit:"telephone",render:({item:o,field:n})=>n.hasElements?(0,e.jsx)($,{item:o,field:n}):n.getValue({item:o}),enableSorting:!0,filterBy:{defaultOperators:[v.ld,v.Vw],validOperators:[v.gm,v._k,v.Py,v.Vm,v.YH,v.ld,v.Vw,v.y5,v.UX]}},V=c("../../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/index.mjs");function G(o,n,m){const g=(0,V.Mj)(o),j=(0,V.Mj)(n);if(!g.isValid()&&!j.isValid())return 0;if(!g.isValid())return m==="asc"?1:-1;if(!j.isValid())return m==="asc"?-1:1;const E=g.toHsl(),W=j.toHsl();return E.h!==W.h?m==="asc"?E.h-W.h:W.h-E.h:E.s!==W.s?m==="asc"?E.s-W.s:W.s-E.s:m==="asc"?E.l-W.l:W.l-E.l}var we={sort:G,isValid:{elements:!0,custom:(o,n)=>{const m=n.getValue({item:o});return![void 0,"",null].includes(m)&&!(0,V.Mj)(m).isValid()?(0,x.__)("Value must be a valid color."):null}},Edit:"color",render:({item:o,field:n})=>{if(n.hasElements)return(0,e.jsx)($,{item:o,field:n});const m=n.getValue({item:o});return!m||!(0,V.Mj)(m).isValid()?m:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,e.jsx)("div",{style:{width:"16px",height:"16px",borderRadius:"50%",backgroundColor:m,border:"1px solid #ddd",flexShrink:0}}),(0,e.jsx)("span",{children:m})]})},enableSorting:!0,filterBy:{defaultOperators:[v.ld,v.Vw],validOperators:[v.gm,v._k]}};function Se(o,n,m){return m==="asc"?o.localeCompare(n):n.localeCompare(o)}var ze={sort:Se,isValid:{elements:!0,custom:()=>null},Edit:"url",render:({item:o,field:n})=>n.hasElements?(0,e.jsx)($,{item:o,field:n}):n.getValue({item:o}),enableSorting:!0,filterBy:{defaultOperators:[v.ld,v.Vw],validOperators:[v.gm,v._k,v.Py,v.Vm,v.YH,v.ld,v.Vw,v.y5,v.UX]}};function Ye(o){return o==="email"?K:o==="integer"?D:o==="number"?De:o==="text"?J:o==="datetime"?ve:o==="date"?Ae:o==="boolean"?ct:o==="media"?k:o==="array"?Be:o==="password"?ht:o==="telephone"?_:o==="color"?we:o==="url"?ze:{sort:(n,m,g)=>typeof n=="number"&&typeof m=="number"?g==="asc"?n-m:m-n:g==="asc"?n.localeCompare(m):m.localeCompare(n),isValid:{elements:!0,custom:()=>null},Edit:null,render:({item:n,field:m})=>m.hasElements?(0,e.jsx)($,{item:n,field:m}):m.getValue({item:n}),enableSorting:!0,filterBy:{defaultOperators:[v.gm,v._k],validOperators:v.CD}}}var Je=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/private-apis.js"),Y=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),dt=c("../../../node_modules/.pnpm/@wordpress+dataviews@10.2.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_a91a9955fb93daf0aecd43f380e81fdc/node_modules/@wordpress/dataviews/build-module/lock-unlock.js");function ut(o,n){let m;return o?.required&&n?.required?m=n?.required?.message?n.required:void 0:o?.elements&&n?.elements?m=n.elements:n?.custom&&(m=n.custom),m}const{ValidatedCheckboxControl:us}=(0,dt.T)(Je.j);function Os({field:o,onChange:n,data:m,hideLabelFromVision:g,validity:j}){const{getValue:E,setValue:W,label:ie,description:q,isValid:pe}=o,ee=(0,Y.useCallback)(()=>{n(W({item:m,value:!E({item:m})}))},[m,E,n,W]);return(0,e.jsx)(us,{required:!!o.isValid?.required,customValidity:ut(pe,j),hidden:g,label:ie,help:q,checked:E({item:m}),onChange:ee})}var es=c("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js"),$t=c("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/format.js"),Pt=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),ts=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js"),ss=c("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),mt=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js"),Ke=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/number-control/index.js"),Ps=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/select-control/index.js");const oi={[v._h]:[{value:"days",label:(0,x.__)("Days")},{value:"weeks",label:(0,x.__)("Weeks")},{value:"months",label:(0,x.__)("Months")},{value:"years",label:(0,x.__)("Years")}],[v.MD]:[{value:"days",label:(0,x.__)("Days ago")},{value:"weeks",label:(0,x.__)("Weeks ago")},{value:"months",label:(0,x.__)("Months ago")},{value:"years",label:(0,x.__)("Years ago")}]};function Ns({className:o,data:n,field:m,onChange:g,hideLabelFromVision:j,operator:E}){const W=oi[E===v._h?"inThePast":"over"],{id:ie,label:q,getValue:pe,setValue:ee}=m,R=pe({item:n}),{value:le="",unit:Q=W[0].value}=R&&typeof R=="object"?R:{},He=(0,Y.useCallback)(_e=>g(ee({item:n,value:{value:Number(_e),unit:Q}})),[g,ee,n,Q]),re=(0,Y.useCallback)(_e=>g(ee({item:n,value:{value:le,unit:_e}})),[g,ee,n,le]);return(0,e.jsx)(Pt.Ay,{id:ie,__nextHasNoMarginBottom:!0,className:(0,ss.A)(o,"dataviews-controls__relative-date"),label:q,hideLabelFromVision:j,children:(0,e.jsxs)(mt.A,{spacing:2.5,children:[(0,e.jsx)(Ke.A,{__next40pxDefaultSize:!0,className:"dataviews-controls__relative-date-number",spinControls:"none",min:1,step:1,value:le,onChange:He}),(0,e.jsx)(Ps.A,{className:"dataviews-controls__relative-date-unit",__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:(0,x.__)("Unit"),value:Q,options:W,onChange:re,hideLabelFromVision:!0})]})})}const{DateCalendar:ps,ValidatedInputControl:$e}=(0,dt.T)(Je.j),Nt=o=>{if(!o)return null;const n=(0,ye.getDate)(o);return n&&(0,es.f)(n)?n:null},Ut=o=>o?typeof o=="string"?o:(0,$t.GP)(o,"yyyy-MM-dd'T'HH:mm"):"";function Ms({data:o,field:n,onChange:m,hideLabelFromVision:g,validity:j}){const{id:E,label:W,description:ie,setValue:q,getValue:pe,isValid:ee}=n,R=pe({item:o}),le=typeof R=="string"?R:void 0,[Q,He]=(0,Y.useState)(()=>Nt(le)||new Date),re=(0,Y.useRef)(null),_e=(0,Y.useRef)(),Re=(0,Y.useRef)(null),Le=(0,Y.useCallback)(rt=>m(q({item:o,value:rt})),[o,m,q]);(0,Y.useEffect)(()=>()=>{_e.current&&clearTimeout(_e.current)},[]);const at=(0,Y.useCallback)(rt=>{let ft;if(rt){let Te=rt;if(le){const tt=Nt(le);tt&&(Te=new Date(rt),Te.setHours(tt.getHours()),Te.setMinutes(tt.getMinutes()))}ft=Te.toISOString(),Le(ft),_e.current&&clearTimeout(_e.current)}else Le(void 0);Re.current=re.current&&re.current.ownerDocument.activeElement,_e.current=setTimeout(()=>{re.current&&(re.current.focus(),re.current.blur(),Le(ft),Re.current&&Re.current instanceof HTMLElement&&Re.current.focus())},0)},[Le,le]),gt=(0,Y.useCallback)(rt=>{if(rt){const ft=new Date(rt);Le(ft.toISOString());const Te=Nt(ft.toISOString());Te&&He(Te)}else Le(void 0)},[Le]),{timezone:{string:vt},l10n:{startOfWeek:Et}}=(0,ye.getSettings)(),Ot=ee?.required&&!g?`${W} (${(0,x.__)("Required")})`:W;return(0,e.jsx)(Pt.Ay,{__nextHasNoMarginBottom:!0,id:E,label:Ot,help:ie,hideLabelFromVision:g,children:(0,e.jsxs)(ts.A,{spacing:4,children:[(0,e.jsx)(ps,{style:{width:"100%"},selected:le&&Nt(le)||void 0,onSelect:at,month:Q,onMonthChange:He,timeZone:vt||void 0,weekStartsOn:Et}),(0,e.jsx)($e,{ref:re,__next40pxDefaultSize:!0,required:!!ee?.required,customValidity:ut(ee,j),type:"datetime-local",label:(0,x.__)("Date time"),hideLabelFromVision:!0,value:le?Ut(Nt(le)||void 0):"",onChange:gt})]})})}function Ts({data:o,field:n,onChange:m,hideLabelFromVision:g,operator:j,validity:E}){return j===v._h||j===v.MD?(0,e.jsx)(Ns,{className:"dataviews-controls__datetime",data:o,field:n,onChange:m,hideLabelFromVision:g,operator:j}):(0,e.jsx)(Ms,{data:o,field:n,onChange:m,hideLabelFromVision:g,validity:E})}var Kt=c("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/subDays.js"),Ds=c("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/subMonths.js"),Is=c("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfMonth.js"),Gt=c("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/subYears.js"),Rs=c("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfYear.js"),Mt=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/icon/index.js"),Tt=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),is=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/input-control/index.js"),as=c("../../../node_modules/.pnpm/@wordpress+icons@11.1.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/error.js");const{DateCalendar:rs,DateRangeCalendar:Dt}=(0,dt.T)(Je.j),It=[{id:"today",label:(0,x.__)("Today"),getValue:()=>(0,ye.getDate)(null)},{id:"yesterday",label:(0,x.__)("Yesterday"),getValue:()=>{const o=(0,ye.getDate)(null);return(0,Kt.e)(o,1)}},{id:"past-week",label:(0,x.__)("Past week"),getValue:()=>{const o=(0,ye.getDate)(null);return(0,Kt.e)(o,7)}},{id:"past-month",label:(0,x.__)("Past month"),getValue:()=>{const o=(0,ye.getDate)(null);return(0,Ds.a)(o,1)}}],Yt=[{id:"last-7-days",label:(0,x.__)("Last 7 days"),getValue:()=>{const o=(0,ye.getDate)(null);return[(0,Kt.e)(o,7),o]}},{id:"last-30-days",label:(0,x.__)("Last 30 days"),getValue:()=>{const o=(0,ye.getDate)(null);return[(0,Kt.e)(o,30),o]}},{id:"month-to-date",label:(0,x.__)("Month to date"),getValue:()=>{const o=(0,ye.getDate)(null);return[(0,Is.w)(o),o]}},{id:"last-year",label:(0,x.__)("Last year"),getValue:()=>{const o=(0,ye.getDate)(null);return[(0,Gt.d)(o,1),o]}},{id:"year-to-date",label:(0,x.__)("Year to date"),getValue:()=>{const o=(0,ye.getDate)(null);return[(0,Rs.D)(o),o]}}],Vt=o=>{if(!o)return null;const n=(0,ye.getDate)(o);return n&&(0,es.f)(n)?n:null},Rt=o=>o?typeof o=="string"?o:(0,$t.GP)(o,"yyyy-MM-dd"):"";function ms({field:o,validity:n,inputRefs:m,isTouched:g,setIsTouched:j,children:E}){const{isValid:W}=o,[ie,q]=(0,Y.useState)(void 0),pe=(0,Y.useCallback)(()=>{const R=Array.isArray(m)?m:[m];for(const le of R){const Q=le.current;if(Q&&!Q.validity.valid){q({type:"invalid",message:Q.validationMessage});return}}q(void 0)},[m]);(0,Y.useEffect)(()=>{if(g){const R=setTimeout(()=>{n?q(ut(W,n)):pe()},0);return()=>clearTimeout(R)}},[g,W,n,pe]);const ee=R=>{g||(!R.relatedTarget||!R.currentTarget.contains(R.relatedTarget))&&j(!0)};return(0,e.jsxs)("div",{onBlur:ee,children:[E,(0,e.jsx)("div",{"aria-live":"polite",children:ie&&(0,e.jsxs)("p",{className:(0,ss.A)("components-validated-control__indicator",ie.type==="invalid"?"is-invalid":void 0,ie.type==="valid"?"is-valid":void 0),children:[(0,e.jsx)(Mt.A,{className:"components-validated-control__indicator-icon",icon:as.A,size:16,fill:"currentColor"}),ie.message]})})]})}function zs({data:o,field:n,onChange:m,hideLabelFromVision:g,validity:j}){const{id:E,label:W,setValue:ie,getValue:q,isValid:pe}=n,[ee,R]=(0,Y.useState)(null),le=q({item:o}),Q=typeof le=="string"?le:void 0,[He,re]=(0,Y.useState)(()=>Vt(Q)||new Date),[_e,Re]=(0,Y.useState)(!1),Le=(0,Y.useRef)(null),at=(0,Y.useCallback)(Te=>m(ie({item:o,value:Te})),[o,m,ie]),gt=(0,Y.useCallback)(Te=>{const tt=Te?(0,$t.GP)(Te,"yyyy-MM-dd"):void 0;at(tt),R(null),Re(!0)},[at]),vt=(0,Y.useCallback)(Te=>{const tt=Te.getValue(),Ee=Rt(tt);re(tt),at(Ee),R(Te.id),Re(!0)},[at]),Et=(0,Y.useCallback)(Te=>{if(at(Te),Te){const tt=Vt(Te);tt&&re(tt)}R(null),Re(!0)},[at]),{timezone:{string:Ot},l10n:{startOfWeek:rt}}=(0,ye.getSettings)(),ft=pe?.required?`${W} (${(0,x.__)("Required")})`:W;return(0,e.jsx)(ms,{field:n,validity:j,inputRefs:Le,isTouched:_e,setIsTouched:Re,children:(0,e.jsx)(Pt.Ay,{__nextHasNoMarginBottom:!0,id:E,className:"dataviews-controls__date",label:ft,hideLabelFromVision:g,children:(0,e.jsxs)(ts.A,{spacing:4,children:[(0,e.jsxs)(mt.A,{spacing:2,wrap:!0,justify:"flex-start",children:[It.map(Te=>{const tt=ee===Te.id;return(0,e.jsx)(Tt.Ay,{className:"dataviews-controls__date-preset",variant:"tertiary",isPressed:tt,size:"small",onClick:()=>vt(Te),children:Te.label},Te.id)}),(0,e.jsx)(Tt.Ay,{className:"dataviews-controls__date-preset",variant:"tertiary",isPressed:!ee,size:"small",disabled:!!ee,accessibleWhenDisabled:!1,children:(0,x.__)("Custom")})]}),(0,e.jsx)(is.Ay,{__next40pxDefaultSize:!0,ref:Le,type:"date",label:(0,x.__)("Date"),hideLabelFromVision:!0,value:Q,onChange:Et,required:!!n.isValid?.required}),(0,e.jsx)(rs,{style:{width:"100%"},selected:Q&&Vt(Q)||void 0,onSelect:gt,month:He,onMonthChange:re,timeZone:Ot||void 0,weekStartsOn:rt})]})})})}function Bs({data:o,field:n,onChange:m,hideLabelFromVision:g,validity:j}){const{id:E,label:W,getValue:ie,setValue:q}=n;let pe;const ee=ie({item:o});Array.isArray(ee)&&ee.length===2&&ee.every(Ee=>typeof Ee=="string")&&(pe=ee);const R=(0,Y.useCallback)(Ee=>{m(q({item:o,value:Ee}))},[o,m,q]),[le,Q]=(0,Y.useState)(null),He=(0,Y.useMemo)(()=>{if(!pe)return{from:void 0,to:void 0};const[Ee,st]=pe;return{from:Vt(Ee)||void 0,to:Vt(st)||void 0}},[pe]),[re,_e]=(0,Y.useState)(()=>He.from||new Date),[Re,Le]=(0,Y.useState)(!1),at=(0,Y.useRef)(null),gt=(0,Y.useRef)(null),vt=(0,Y.useCallback)((Ee,st)=>{Ee&&st?R([Rt(Ee),Rt(st)]):!Ee&&!st&&R(void 0)},[R]),Et=(0,Y.useCallback)(Ee=>{vt(Ee?.from,Ee?.to),Q(null),Le(!0)},[vt]),Ot=(0,Y.useCallback)(Ee=>{const[st,ds]=Ee.getValue();_e(st),vt(st,ds),Q(Ee.id),Le(!0)},[vt]),rt=(0,Y.useCallback)((Ee,st)=>{const[ds,si]=pe||[void 0,void 0];if(vt(Ee==="from"?st:ds,Ee==="to"?st:si),st){const Vs=Vt(st);Vs&&_e(Vs)}Q(null),Le(!0)},[pe,vt]),{timezone:ft,l10n:Te}=(0,ye.getSettings)(),tt=n.isValid?.required?`${W} (${(0,x.__)("Required")})`:W;return(0,e.jsx)(ms,{field:n,validity:j,inputRefs:[at,gt],isTouched:Re,setIsTouched:Le,children:(0,e.jsx)(Pt.Ay,{__nextHasNoMarginBottom:!0,id:E,className:"dataviews-controls__date",label:tt,hideLabelFromVision:g,children:(0,e.jsxs)(ts.A,{spacing:4,children:[(0,e.jsxs)(mt.A,{spacing:2,wrap:!0,justify:"flex-start",children:[Yt.map(Ee=>{const st=le===Ee.id;return(0,e.jsx)(Tt.Ay,{className:"dataviews-controls__date-preset",variant:"tertiary",isPressed:st,size:"small",onClick:()=>Ot(Ee),children:Ee.label},Ee.id)}),(0,e.jsx)(Tt.Ay,{className:"dataviews-controls__date-preset",variant:"tertiary",isPressed:!le,size:"small",accessibleWhenDisabled:!1,disabled:!!le,children:(0,x.__)("Custom")})]}),(0,e.jsxs)(mt.A,{spacing:2,children:[(0,e.jsx)(is.Ay,{__next40pxDefaultSize:!0,ref:at,type:"date",label:(0,x.__)("From"),hideLabelFromVision:!0,value:pe?.[0],onChange:Ee=>rt("from",Ee),required:!!n.isValid?.required}),(0,e.jsx)(is.Ay,{__next40pxDefaultSize:!0,ref:gt,type:"date",label:(0,x.__)("To"),hideLabelFromVision:!0,value:pe?.[1],onChange:Ee=>rt("to",Ee),required:!!n.isValid?.required})]}),(0,e.jsx)(Dt,{style:{width:"100%"},selected:He,onSelect:Et,month:re,onMonthChange:_e,timeZone:ft.string||void 0,weekStartsOn:Te.startOfWeek})]})})})}function it({data:o,field:n,onChange:m,hideLabelFromVision:g,operator:j,validity:E}){return j===v._h||j===v.MD?(0,e.jsx)(Ns,{className:"dataviews-controls__date",data:o,field:n,onChange:m,hideLabelFromVision:g,operator:j}):j===v.CX?(0,e.jsx)(Bs,{data:o,field:n,onChange:m,hideLabelFromVision:g,validity:E}):(0,e.jsx)(zs,{data:o,field:n,onChange:m,hideLabelFromVision:g,validity:E})}var zt=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/input-control/input-prefix-wrapper.js"),St=c("../../../node_modules/.pnpm/@wordpress+primitives@4.34.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),os=(0,e.jsx)(St.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)(St.wA,{d:"M12.5939 21C14.1472 21 16.1269 20.5701 17.0711 20.1975L16.6447 18.879C16.0964 19.051 14.3299 19.6242 12.6548 19.6242C7.4467 19.6242 4.67513 16.8726 4.67513 12C4.67513 7.21338 7.50762 4.34713 12.2893 4.34713C17.132 4.34713 19.4162 7.55732 19.4162 10.7675C19.4162 14.035 19.0508 15.4968 17.4975 15.4968C16.5838 15.4968 16.0964 14.7803 16.0964 13.9777V7.5H14.4822V8.30255H14.3909C14.1777 7.67198 12.9898 7.12739 11.467 7.2707C9.18274 7.5 7.4467 9.27707 7.4467 11.8567C7.4467 14.5796 8.81726 16.672 11.467 16.758C13.203 16.8153 14.1168 16.0127 14.4822 15.1815H14.5736C14.7563 16.414 16.401 16.8439 17.467 16.8439C20.6954 16.8439 21 13.5764 21 10.7962C21 6.86943 18.0761 3 12.3807 3C6.50254 3 3 6.3535 3 11.9427C3 17.7325 6.38071 21 12.5939 21ZM11.7107 15.2962C9.73096 15.2962 9.03046 13.6051 9.03046 11.7707C9.03046 10.1083 10.0355 8.67516 11.7716 8.67516C13.599 8.67516 14.5736 9.36306 14.5736 11.7707C14.5736 14.1497 13.7513 15.2962 11.7107 15.2962Z"})});const{ValidatedInputControl:Fs}=(0,dt.T)(Je.j);function jt({data:o,field:n,onChange:m,hideLabelFromVision:g,type:j,prefix:E,suffix:W,validity:ie}){const{label:q,placeholder:pe,description:ee,getValue:R,setValue:le,isValid:Q}=n,He=R({item:o}),re=(0,Y.useCallback)(_e=>m(le({item:o,value:_e})),[o,le,m]);return(0,e.jsx)(Fs,{required:!!Q?.required,customValidity:ut(Q,ie),label:q,placeholder:pe,value:He??"",help:ee,onChange:re,hideLabelFromVision:g,type:j,prefix:E,suffix:W,__next40pxDefaultSize:!0})}function Ls({data:o,field:n,onChange:m,hideLabelFromVision:g,validity:j}){return(0,e.jsx)(jt,{data:o,field:n,onChange:m,hideLabelFromVision:g,validity:j,type:"email",prefix:(0,e.jsx)(zt.A,{variant:"icon",children:(0,e.jsx)(Mt.A,{icon:os})})})}var vs=(0,e.jsx)(St.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,e.jsx)(St.wA,{d:"M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"})});function Hs({data:o,field:n,onChange:m,hideLabelFromVision:g,validity:j}){return(0,e.jsx)(jt,{data:o,field:n,onChange:m,hideLabelFromVision:g,validity:j,type:"tel",prefix:(0,e.jsx)(zt.A,{variant:"icon",children:(0,e.jsx)(Mt.A,{icon:vs})})})}var fs=c("../../../node_modules/.pnpm/@wordpress+icons@11.1.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/link.js");function Ws({data:o,field:n,onChange:m,hideLabelFromVision:g,validity:j}){return(0,e.jsx)(jt,{data:o,field:n,onChange:m,hideLabelFromVision:g,validity:j,type:"url",prefix:(0,e.jsx)(zt.A,{variant:"icon",children:(0,e.jsx)(Mt.A,{icon:fs.A})})})}var ws=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex/component.js");const{ValidatedNumberControl:$s}=(0,dt.T)(Je.j);function _s(o){if(o===""||o===void 0)return"";const n=Number(o);return Number.isFinite(n)?n:""}function ni({value:o,onChange:n,hideLabelFromVision:m,step:g}){const[j="",E=""]=o,W=(0,Y.useCallback)(q=>n([_s(q),E]),[n,E]),ie=(0,Y.useCallback)(q=>n([j,_s(q)]),[n,j]);return(0,e.jsx)(Pt.Ay,{__nextHasNoMarginBottom:!0,help:(0,x.__)("The max. value must be greater than the min. value."),children:(0,e.jsxs)(ws.A,{direction:"row",gap:4,children:[(0,e.jsx)(Ke.A,{label:(0,x.__)("Min."),value:j,max:E?Number(E)-g:void 0,onChange:W,__next40pxDefaultSize:!0,hideLabelFromVision:m,step:g}),(0,e.jsx)(Ke.A,{label:(0,x.__)("Max."),value:E,min:j?Number(j)+g:void 0,onChange:ie,__next40pxDefaultSize:!0,hideLabelFromVision:m,step:g})]})})}function hs({data:o,field:n,onChange:m,hideLabelFromVision:g,operator:j,decimals:E,validity:W}){const ie=Math.pow(10,Math.abs(E)*-1),{label:q,description:pe,getValue:ee,setValue:R,isValid:le}=n,Q=ee({item:o})??"",He=(0,Y.useCallback)(_e=>{m(R({item:o,value:["",void 0].includes(_e)?void 0:Number(_e)}))},[o,m,R]),re=(0,Y.useCallback)(_e=>{m(R({item:o,value:_e}))},[o,m,R]);if(j===v.CX){let _e=["",""];return Array.isArray(Q)&&Q.length===2&&Q.every(Re=>typeof Re=="number"||Re==="")&&(_e=Q),(0,e.jsx)(ni,{value:_e,onChange:re,hideLabelFromVision:g,step:ie})}return(0,e.jsx)($s,{required:!!le?.required,customValidity:ut(le,W),label:q,help:pe,value:Q,onChange:He,__next40pxDefaultSize:!0,hideLabelFromVision:g,step:ie})}function gs(o){return(0,e.jsx)(hs,{...o,decimals:0})}function bs(o){return(0,e.jsx)(hs,{...o,decimals:2})}var Xt=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js");const{ValidatedRadioControl:Us}=(0,dt.T)(Je.j);function Ks({data:o,field:n,onChange:m,hideLabelFromVision:g,validity:j}){const{label:E,description:W,getValue:ie,setValue:q,isValid:pe}=n,{elements:ee,isLoading:R}=(0,u.A)({elements:n.elements,getElements:n.getElements}),le=ie({item:o}),Q=(0,Y.useCallback)(He=>m(q({item:o,value:He})),[o,m,q]);return R?(0,e.jsx)(Xt.Ay,{}):(0,e.jsx)(Us,{required:!!n.isValid?.required,customValidity:ut(pe,j),label:E,help:W,onChange:Q,options:ee,selected:le,hideLabelFromVision:g})}const{ValidatedSelectControl:Gs}=(0,dt.T)(Je.j);function xs({data:o,field:n,onChange:m,hideLabelFromVision:g,validity:j}){const{type:E,label:W,description:ie,getValue:q,setValue:pe,isValid:ee}=n,R=E==="array",le=q({item:o})??(R?[]:""),Q=(0,Y.useCallback)(_e=>m(pe({item:o,value:_e})),[o,m,pe]),{elements:He,isLoading:re}=(0,u.A)({elements:n.elements,getElements:n.getElements});return re?(0,e.jsx)(Xt.Ay,{}):(0,e.jsx)(Gs,{required:!!n.isValid?.required,customValidity:ut(ee,j),label:W,value:le,help:ie,options:He,onChange:Q,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:g,multiple:R})}function ns({data:o,field:n,onChange:m,hideLabelFromVision:g,config:j,validity:E}){const{prefix:W,suffix:ie}=j||{};return(0,e.jsx)(jt,{data:o,field:n,onChange:m,hideLabelFromVision:g,validity:E,prefix:W?(0,Y.createElement)(W):void 0,suffix:ie?(0,Y.createElement)(ie):void 0})}const{ValidatedToggleControl:Jt}=(0,dt.T)(Je.j);function Ys({field:o,onChange:n,data:m,hideLabelFromVision:g,validity:j}){const{label:E,description:W,getValue:ie,setValue:q,isValid:pe}=o,ee=(0,Y.useCallback)(()=>{n(q({item:m,value:!ie({item:m})}))},[n,q,m,ie]);return(0,e.jsx)(Jt,{required:!!pe.required,customValidity:ut(pe,j),hidden:g,__nextHasNoMarginBottom:!0,label:E,help:W,checked:ie({item:m}),onChange:ee})}const{ValidatedTextareaControl:Bt}=(0,dt.T)(Je.j);function Ft({data:o,field:n,onChange:m,hideLabelFromVision:g,config:j,validity:E}){const{rows:W=4}=j||{},{label:ie,placeholder:q,description:pe,setValue:ee,isValid:R}=n,le=n.getValue({item:o}),Q=(0,Y.useCallback)(He=>m(ee({item:o,value:He})),[o,m,ee]);return(0,e.jsx)(Bt,{required:!!R?.required,customValidity:ut(R,E),label:ie,placeholder:q,value:le??"",help:pe,onChange:Q,rows:W,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:g})}var ys=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option/component.js");const{ValidatedToggleGroupControl:Xs}=(0,dt.T)(Je.j);function Js({data:o,field:n,onChange:m,hideLabelFromVision:g,validity:j}){const{getValue:E,setValue:W,isValid:ie}=n,q=E({item:o}),pe=(0,Y.useCallback)(Q=>m(W({item:o,value:Q})),[o,m,W]),{elements:ee,isLoading:R}=(0,u.A)({elements:n.elements,getElements:n.getElements});if(R)return(0,e.jsx)(Xt.Ay,{});if(ee.length===0)return null;const le=ee.find(Q=>Q.value===q);return(0,e.jsx)(Xs,{required:!!n.isValid?.required,customValidity:ut(ie,j),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:n.label,help:le?.description||n.description,onChange:pe,value:q,hideLabelFromVision:g,children:ee.map(Q=>(0,e.jsx)(ys.A,{label:Q.label,value:Q.value},Q.value))})}const{ValidatedFormTokenField:Qs}=(0,dt.T)(Je.j);function Zs({data:o,field:n,onChange:m,hideLabelFromVision:g,validity:j}){const{label:E,placeholder:W,getValue:ie,setValue:q,isValid:pe}=n,ee=ie({item:o}),{elements:R,isLoading:le}=(0,u.A)({elements:n.elements,getElements:n.getElements}),Q=(0,Y.useMemo)(()=>Array.isArray(ee)?ee.map(re=>R?.find(Re=>Re.value===re)||{value:re,label:re}):[],[ee,R]),He=(0,Y.useCallback)(re=>{const _e=re.map(Re=>typeof Re=="object"&&"value"in Re?Re.value:Re);m(q({item:o,value:_e}))},[m,q,o]);return le?(0,e.jsx)(Xt.Ay,{}):(0,e.jsx)(Qs,{required:!!pe?.required,customValidity:ut(pe,j),label:g?void 0:E,value:Q,onChange:He,placeholder:W,suggestions:R?.map(re=>re.value),__experimentalValidateInput:re=>n.isValid?.elements&&R?R.some(_e=>_e.value===re||_e.label===re):!0,__experimentalExpandOnFocus:R&&R.length>0,__experimentalShowHowTo:!n.isValid?.elements,displayTransform:re=>typeof re=="object"&&"label"in re?re.label:typeof re=="string"&&R&&R.find(Re=>Re.value===re)?.label||re,__experimentalRenderItem:({item:re})=>{if(typeof re=="string"&&R){const _e=R.find(Re=>Re.value===re);return(0,e.jsx)("span",{children:_e?.label||re})}return(0,e.jsx)("span",{children:re})}})}var js=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/dropdown/index.js");const{ValidatedInputControl:ls,Picker:As}=(0,dt.T)(Je.j),Fe=({color:o,onColorChange:n})=>{const m=o&&(0,V.Mj)(o).isValid()?o:"#ffffff";return(0,e.jsx)(js.A,{renderToggle:({onToggle:g,isOpen:j})=>(0,e.jsx)(zt.A,{variant:"icon",children:(0,e.jsx)("button",{type:"button",onClick:g,style:{width:"24px",height:"24px",borderRadius:"50%",backgroundColor:m,border:"1px solid #ddd",cursor:"pointer",outline:j?"2px solid #007cba":"none",outlineOffset:"2px",display:"flex",alignItems:"center",justifyContent:"center",padding:0,margin:0},"aria-label":"Open color picker"})}),renderContent:()=>(0,e.jsx)("div",{style:{padding:"16px"},children:(0,e.jsx)(As,{color:(0,V.Mj)(m),onChange:n,enableAlpha:!0})})})};function ks({data:o,field:n,onChange:m,hideLabelFromVision:g,validity:j}){const{label:E,placeholder:W,description:ie,setValue:q,isValid:pe}=n,ee=n.getValue({item:o})||"",R=(0,Y.useCallback)(Q=>{m(q({item:o,value:Q.toHex()}))},[o,m,q]),le=(0,Y.useCallback)(Q=>{m(q({item:o,value:Q||""}))},[o,m,q]);return(0,e.jsx)(ls,{required:!!n.isValid?.required,customValidity:ut(pe,j),label:E,placeholder:W,value:ee,help:ie,onChange:le,hideLabelFromVision:g,type:"text",prefix:(0,e.jsx)(Fe,{color:ee,onColorChange:R})})}var Xe=c("../../../node_modules/.pnpm/@wordpress+components@30.7.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/input-control/input-suffix-wrapper.js"),li=c("../../../node_modules/.pnpm/@wordpress+icons@11.1.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/unseen.js"),di=c("../../../node_modules/.pnpm/@wordpress+icons@11.1.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/seen.js");function Lt({data:o,field:n,onChange:m,hideLabelFromVision:g,validity:j}){const[E,W]=(0,Y.useState)(!1),ie=(0,Y.useCallback)(()=>{W(q=>!q)},[]);return(0,e.jsx)(jt,{data:o,field:n,onChange:m,hideLabelFromVision:g,validity:j,type:E?"text":"password",suffix:(0,e.jsx)(Xe.A,{variant:"control",children:(0,e.jsx)(Tt.Ay,{icon:E?li.A:di.A,onClick:ie,size:"small",label:E?(0,x.__)("Hide password"):(0,x.__)("Show password")})})})}function Qt(o){return Array.isArray(o.elements)&&o.elements.length>0||typeof o.getElements=="function"}const qs={array:Zs,checkbox:Os,color:ks,datetime:Ts,date:it,email:Ls,telephone:Hs,url:Ws,integer:gs,number:bs,password:Lt,radio:Ks,select:xs,text:ns,toggle:Ys,textarea:Ft,toggleGroup:Js};function ei(o){return o&&typeof o=="object"&&typeof o.control=="string"}function ti(o){const{control:n,...m}=o,g=Zt(n);return function(E){return(0,e.jsx)(g,{...E,config:m})}}function ci(o,n){return typeof o.Edit=="function"?o.Edit:typeof o.Edit=="string"?Zt(o.Edit):ei(o.Edit)?ti(o.Edit):Qt(o)&&o.type!=="array"?Zt("select"):typeof n.Edit=="string"?Zt(n.Edit):ei(n.Edit)?ti(n.Edit):n.Edit}function Zt(o){if(Object.keys(qs).includes(o))return qs[o];throw"Control "+o+" not found"}const Cs=o=>({item:n})=>{const m=o.split(".");let g=n;for(const j of m)g.hasOwnProperty(j)?g=g[j]:g=void 0;return g},At=o=>({value:n})=>{const m=o.split("."),g={};let j=g;for(const E of m.slice(0,-1))j[E]={},j=j[E];return j[m.at(-1)]=n,g};function je(o,n){if(o.filterBy===!1)return!1;if(typeof o.filterBy=="object"){let g=o.filterBy.operators;(!g||!Array.isArray(g))&&(g=n.filterBy?n.filterBy.defaultOperators:[]);let j=v.CD;return typeof n.filterBy=="object"&&(j=n.filterBy.validOperators),g=g.filter(W=>j.includes(W)),Qt(o)&&g.includes(v.CX)&&(g=g.filter(W=>W!==v.CX)),g.some(W=>v.e5.includes(W))&&(g=g.filter(W=>[...v.e5,v.CX].includes(W))),g.length===0?!1:{isPrimary:!!o.filterBy.isPrimary,operators:g}}if(n.filterBy===!1)return!1;let m=n.filterBy.defaultOperators;return Qt(o)&&m.includes(v.CX)&&(m=m.filter(g=>g!==v.CX)),{operators:m}}function Oe(o){return o.map(n=>{const m=Ye(n.type),g=n.getValue||Cs(n.id),j=n.setValue||At(n.id),E=n.sort??function(R,le,Q){return m.sort(g({item:R}),g({item:le}),Q)},W={...m.isValid,...n.isValid},ie=ci(n,m),q=n.render??function({item:R,field:le}){return m.render({item:R,field:le})},pe=je(n,m);return{...n,label:n.label||n.id,header:n.header||n.label||n.id,getValue:g,setValue:j,render:q,sort:E,isValid:W,Edit:ie,hasElements:Qt(n),enableHiding:n.enableHiding??!0,enableSorting:n.enableSorting??m.enableSorting??!0,filterBy:pe,readOnly:n.readOnly??m.readOnly??!1}})}}),"../../../node_modules/.pnpm/@wordpress+icons@10.31.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/caution-filled.js":((Ue,ue,c)=>{"use strict";c.d(ue,{A:()=>$});var e=c("../../../node_modules/.pnpm/@wordpress+primitives@4.31.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),x=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const $=(0,x.jsx)(e.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,x.jsx)(e.wA,{d:"M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12.75 8V13H11.25V8H12.75ZM12.75 14.5V16H11.25V14.5H12.75Z"})})}),"../../../node_modules/.pnpm/@wordpress+icons@10.31.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js":((Ue,ue,c)=>{"use strict";c.d(ue,{A:()=>$});var e=c("../../../node_modules/.pnpm/@wordpress+primitives@4.31.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),x=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const $=(0,x.jsx)(e.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,x.jsx)(e.wA,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})})}),"../../../node_modules/.pnpm/@wordpress+icons@10.31.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/color.js":((Ue,ue,c)=>{"use strict";c.d(ue,{A:()=>$});var e=c("../../../node_modules/.pnpm/@wordpress+primitives@4.31.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),x=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const $=(0,x.jsx)(e.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,x.jsx)(e.wA,{d:"M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z"})})}),"../../../node_modules/.pnpm/@wordpress+icons@10.31.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":((Ue,ue,c)=>{"use strict";c.d(ue,{A:()=>$});var e=c("../../../node_modules/.pnpm/@wordpress+primitives@4.31.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),x=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const $=(0,x.jsx)(e.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,x.jsx)(e.wA,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})}),"../../../node_modules/.pnpm/@wordpress+icons@10.31.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/plugins.js":((Ue,ue,c)=>{"use strict";c.d(ue,{A:()=>$});var e=c("../../../node_modules/.pnpm/@wordpress+primitives@4.31.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),x=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const $=(0,x.jsx)(e.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,x.jsx)(e.wA,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"})})}),"../../../node_modules/.pnpm/@wordpress+icons@10.31.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/shield.js":((Ue,ue,c)=>{"use strict";c.d(ue,{A:()=>$});var e=c("../../../node_modules/.pnpm/@wordpress+primitives@4.31.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),x=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const $=(0,x.jsx)(e.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,x.jsx)(e.wA,{d:"M12 3.176l6.75 3.068v4.574c0 3.9-2.504 7.59-6.035 8.755a2.283 2.283 0 01-1.43 0c-3.53-1.164-6.035-4.856-6.035-8.755V6.244L12 3.176zM6.75 7.21v3.608c0 3.313 2.145 6.388 5.005 7.33.159.053.331.053.49 0 2.86-.942 5.005-4.017 5.005-7.33V7.21L12 4.824 6.75 7.21z",fillRule:"evenodd",clipRule:"evenodd"})})}),"../../../node_modules/.pnpm/@wordpress+icons@10.31.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/wordpress.js":((Ue,ue,c)=>{"use strict";c.d(ue,{A:()=>$});var e=c("../../../node_modules/.pnpm/@wordpress+primitives@4.31.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),x=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const $=(0,x.jsx)(e.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",children:(0,x.jsx)(e.wA,{d:"M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"})})}),"../../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/index.mjs":((Ue,ue,c)=>{"use strict";c.d(ue,{Mj:()=>F,X$:()=>yt});var e={grad:.9,turn:360,rad:360/(2*Math.PI)},x=function(h){return typeof h=="string"?h.length>0:typeof h=="number"},u=function(h,_,V){return _===void 0&&(_=0),V===void 0&&(V=Math.pow(10,_)),Math.round(V*h)/V+0},$=function(h,_,V){return _===void 0&&(_=0),V===void 0&&(V=1),h>V?V:h>_?h:_},v=function(h){return(h=isFinite(h)?h%360:0)>0?h:h+360},I=function(h){return{r:$(h.r,0,255),g:$(h.g,0,255),b:$(h.b,0,255),a:$(h.a)}},Ne=function(h){return{r:u(h.r),g:u(h.g),b:u(h.b),a:u(h.a,3)}},K=/^#([0-9a-f]{3,8})$/i,p=function(h){var _=h.toString(16);return _.length<2?"0"+_:_},D=function(h){var _=h.r,V=h.g,G=h.b,we=h.a,Se=Math.max(_,V,G),ze=Se-Math.min(_,V,G),Ye=ze?Se===_?(V-G)/ze:Se===V?2+(G-_)/ze:4+(_-V)/ze:0;return{h:60*(Ye<0?Ye+6:Ye),s:Se?ze/Se*100:0,v:Se/255*100,a:we}},xe=function(h){var _=h.h,V=h.s,G=h.v,we=h.a;_=_/360*6,V/=100,G/=100;var Se=Math.floor(_),ze=G*(1-V),Ye=G*(1-(_-Se)*V),Je=G*(1-(1-_+Se)*V),Y=Se%6;return{r:255*[G,Ye,ze,ze,Je,G][Y],g:255*[Je,G,G,Ye,ze,ze][Y],b:255*[ze,ze,Je,G,G,Ye][Y],a:we}},he=function(h){return{h:v(h.h),s:$(h.s,0,100),l:$(h.l,0,100),a:$(h.a)}},De=function(h){return{h:u(h.h),s:u(h.s),l:u(h.l),a:u(h.a,3)}},Me=function(h){return xe((V=(_=h).s,{h:_.h,s:(V*=((G=_.l)<50?G:100-G)/100)>0?2*V/(G+V)*100:0,v:G+V,a:_.a}));var _,V,G},J=function(h){return{h:(_=D(h)).h,s:(we=(200-(V=_.s))*(G=_.v)/100)>0&&we<200?V*G/100/(we<=100?we:200-we)*100:0,l:we/2,a:_.a};var _,V,G,we},ae=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ve=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ye=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ge=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,T={string:[[function(h){var _=K.exec(h);return _?(h=_[1]).length<=4?{r:parseInt(h[0]+h[0],16),g:parseInt(h[1]+h[1],16),b:parseInt(h[2]+h[2],16),a:h.length===4?u(parseInt(h[3]+h[3],16)/255,2):1}:h.length===6||h.length===8?{r:parseInt(h.substr(0,2),16),g:parseInt(h.substr(2,2),16),b:parseInt(h.substr(4,2),16),a:h.length===8?u(parseInt(h.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(h){var _=ye.exec(h)||Ge.exec(h);return _?_[2]!==_[4]||_[4]!==_[6]?null:I({r:Number(_[1])/(_[2]?100/255:1),g:Number(_[3])/(_[4]?100/255:1),b:Number(_[5])/(_[6]?100/255:1),a:_[7]===void 0?1:Number(_[7])/(_[8]?100:1)}):null},"rgb"],[function(h){var _=ae.exec(h)||ve.exec(h);if(!_)return null;var V,G,we=he({h:(V=_[1],G=_[2],G===void 0&&(G="deg"),Number(V)*(e[G]||1)),s:Number(_[3]),l:Number(_[4]),a:_[5]===void 0?1:Number(_[5])/(_[6]?100:1)});return Me(we)},"hsl"]],object:[[function(h){var _=h.r,V=h.g,G=h.b,we=h.a,Se=we===void 0?1:we;return x(_)&&x(V)&&x(G)?I({r:Number(_),g:Number(V),b:Number(G),a:Number(Se)}):null},"rgb"],[function(h){var _=h.h,V=h.s,G=h.l,we=h.a,Se=we===void 0?1:we;if(!x(_)||!x(V)||!x(G))return null;var ze=he({h:Number(_),s:Number(V),l:Number(G),a:Number(Se)});return Me(ze)},"hsl"],[function(h){var _=h.h,V=h.s,G=h.v,we=h.a,Se=we===void 0?1:we;if(!x(_)||!x(V)||!x(G))return null;var ze=(function(Ye){return{h:v(Ye.h),s:$(Ye.s,0,100),v:$(Ye.v,0,100),a:$(Ye.a)}})({h:Number(_),s:Number(V),v:Number(G),a:Number(Se)});return xe(ze)},"hsv"]]},Ae=function(h,_){for(var V=0;V<_.length;V++){var G=_[V][0](h);if(G)return[G,_[V][1]]}return[null,void 0]},lt=function(h){return typeof h=="string"?Ae(h.trim(),T.string):typeof h=="object"&&h!==null?Ae(h,T.object):[null,void 0]},ct=function(h){return lt(h)[1]},qe=function(h,_){var V=J(h);return{h:V.h,s:$(V.s+100*_,0,100),l:V.l,a:V.a}},k=function(h){return(299*h.r+587*h.g+114*h.b)/1e3/255},ne=function(h,_){var V=J(h);return{h:V.h,s:V.s,l:$(V.l+100*_,0,100),a:V.a}},z=(function(){function h(_){this.parsed=lt(_)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return h.prototype.isValid=function(){return this.parsed!==null},h.prototype.brightness=function(){return u(k(this.rgba),2)},h.prototype.isDark=function(){return k(this.rgba)<.5},h.prototype.isLight=function(){return k(this.rgba)>=.5},h.prototype.toHex=function(){return _=Ne(this.rgba),V=_.r,G=_.g,we=_.b,ze=(Se=_.a)<1?p(u(255*Se)):"","#"+p(V)+p(G)+p(we)+ze;var _,V,G,we,Se,ze},h.prototype.toRgb=function(){return Ne(this.rgba)},h.prototype.toRgbString=function(){return _=Ne(this.rgba),V=_.r,G=_.g,we=_.b,(Se=_.a)<1?"rgba("+V+", "+G+", "+we+", "+Se+")":"rgb("+V+", "+G+", "+we+")";var _,V,G,we,Se},h.prototype.toHsl=function(){return De(J(this.rgba))},h.prototype.toHslString=function(){return _=De(J(this.rgba)),V=_.h,G=_.s,we=_.l,(Se=_.a)<1?"hsla("+V+", "+G+"%, "+we+"%, "+Se+")":"hsl("+V+", "+G+"%, "+we+"%)";var _,V,G,we,Se},h.prototype.toHsv=function(){return _=D(this.rgba),{h:u(_.h),s:u(_.s),v:u(_.v),a:u(_.a,3)};var _},h.prototype.invert=function(){return F({r:255-(_=this.rgba).r,g:255-_.g,b:255-_.b,a:_.a});var _},h.prototype.saturate=function(_){return _===void 0&&(_=.1),F(qe(this.rgba,_))},h.prototype.desaturate=function(_){return _===void 0&&(_=.1),F(qe(this.rgba,-_))},h.prototype.grayscale=function(){return F(qe(this.rgba,-1))},h.prototype.lighten=function(_){return _===void 0&&(_=.1),F(ne(this.rgba,_))},h.prototype.darken=function(_){return _===void 0&&(_=.1),F(ne(this.rgba,-_))},h.prototype.rotate=function(_){return _===void 0&&(_=15),this.hue(this.hue()+_)},h.prototype.alpha=function(_){return typeof _=="number"?F({r:(V=this.rgba).r,g:V.g,b:V.b,a:_}):u(this.rgba.a,3);var V},h.prototype.hue=function(_){var V=J(this.rgba);return typeof _=="number"?F({h:_,s:V.s,l:V.l,a:V.a}):u(V.h)},h.prototype.isEqual=function(_){return this.toHex()===F(_).toHex()},h})(),F=function(h){return h instanceof z?h:new z(h)},Be=[],yt=function(h){h.forEach(function(_){Be.indexOf(_)<0&&(_(z,T),Be.push(_))})},ht=function(){return new z({r:255*Math.random(),g:255*Math.random(),b:255*Math.random()})}}),"../../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/plugins/names.mjs":((Ue,ue,c)=>{"use strict";c.d(ue,{A:()=>e});function e(x,u){var $={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},v={};for(var I in $)v[$[I]]=I;var Ne={};x.prototype.toName=function(K){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var p,D,xe=v[this.toHex()];if(xe)return xe;if(K?.closest){var he=this.toRgb(),De=1/0,Me="black";if(!Ne.length)for(var J in $)Ne[J]=new x($[J]).toRgb();for(var ae in $){var ve=(p=he,D=Ne[ae],Math.pow(p.r-D.r,2)+Math.pow(p.g-D.g,2)+Math.pow(p.b-D.b,2));ve<De&&(De=ve,Me=ae)}return Me}},u.string.push([function(K){var p=K.toLowerCase(),D=p==="transparent"?"#0000":$[p];return D?new x(D).toRgb():null},"name"])}}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/@wordpress+dataviews@10.2.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_a91a9955fb93daf0aecd43f380e81fdc/node_modules/@wordpress/dataviews/build-style/style.css":((Ue,ue,c)=>{"use strict";c.d(ue,{A:()=>I});var e=c("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=c.n(e),u=c("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),$=c.n(u),v=$()(x());v.push([Ue.id,`/**
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
 * Typography
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
.dataviews-wrapper,
.dataviews-picker-wrapper {
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
  font-weight: 499;
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
.components-card__body:has(> .dataviews-wrapper),
.components-card__body:has(> .dataviews-picker-wrapper) {
  padding: 8px 0 0;
  overflow: hidden;
}
.components-card__body:has(> .dataviews-wrapper) .dataviews__view-actions,
.components-card__body:has(> .dataviews-wrapper) .dataviews-filters__container,
.components-card__body:has(> .dataviews-wrapper) .dataviews-footer,
.components-card__body:has(> .dataviews-wrapper) .dataviews-view-grid,
.components-card__body:has(> .dataviews-wrapper) .dataviews-loading,
.components-card__body:has(> .dataviews-wrapper) .dataviews-no-results,
.components-card__body:has(> .dataviews-picker-wrapper) .dataviews__view-actions,
.components-card__body:has(> .dataviews-picker-wrapper) .dataviews-filters__container,
.components-card__body:has(> .dataviews-picker-wrapper) .dataviews-footer,
.components-card__body:has(> .dataviews-picker-wrapper) .dataviews-view-grid,
.components-card__body:has(> .dataviews-picker-wrapper) .dataviews-loading,
.components-card__body:has(> .dataviews-picker-wrapper) .dataviews-no-results {
  padding-inline: 24px;
}
.components-card__body:has(> .dataviews-wrapper) .dataviews-view-table tr td:first-child,
.components-card__body:has(> .dataviews-wrapper) .dataviews-view-table tr th:first-child,
.components-card__body:has(> .dataviews-picker-wrapper) .dataviews-view-table tr td:first-child,
.components-card__body:has(> .dataviews-picker-wrapper) .dataviews-view-table tr th:first-child {
  padding-inline-start: 24px;
}
.components-card__body:has(> .dataviews-wrapper) .dataviews-view-table tr td:last-child,
.components-card__body:has(> .dataviews-wrapper) .dataviews-view-table tr th:last-child,
.components-card__body:has(> .dataviews-picker-wrapper) .dataviews-view-table tr td:last-child,
.components-card__body:has(> .dataviews-picker-wrapper) .dataviews-view-table tr th:last-child {
  padding-inline-end: 24px;
}

.dataviews-bulk-actions-footer__item-count {
  color: #1e1e1e;
  font-weight: 499;
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
.dataviews-filters__summary-operators-container:has(+ .dataviews-filters__search-widget-listbox), .dataviews-filters__summary-operators-container:has(+ .dataviews-filters__search-widget-no-elements), .dataviews-filters__summary-operators-container:has(+ .dataviews-filters__user-input-widget) {
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
  font-weight: 499;
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
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-single-selection {
  margin: 0;
  padding: 0;
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
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-multi-selection {
  position: relative;
  background: #fff;
  color: #1e1e1e;
  margin: 0;
  padding: 0;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
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
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input {
  display: block;
  padding: 0 8px 0 32px;
  width: 100%;
  height: 32px;
  margin-left: 0;
  margin-right: 0;
  /* Fonts smaller than 16px causes mobile safari to zoom. */
  font-size: 16px;
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
  inset-inline-start: 12px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__icon:dir(ltr) {
  transform: scaleX(-1);
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

.dataviews-filters__search-widget-no-elements {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.dataviews-footer {
  position: sticky;
  bottom: 0;
  left: 0;
  background-color: #fff;
  padding: 12px 48px;
  border-top: 1px solid #f0f0f0;
  flex-shrink: 0;
}
@media not (prefers-reduced-motion) {
  .dataviews-footer {
    transition: padding ease-out 0.1s;
  }
}
.dataviews-footer {
  z-index: 2;
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
  font-weight: 499;
  text-transform: uppercase;
}
@media (min-width: 600px) {
  .dataviews-pagination__page-select .components-select-control__input {
    font-size: 11px !important;
    font-weight: 499;
  }
}

.dataviews-action-modal {
  z-index: 1000001;
}

.dataviews-picker-footer__bulk-selection {
  align-self: flex-start;
  height: 32px;
}

.dataviews-picker-footer__actions {
  align-self: flex-end;
}

.dataviews-selection-checkbox {
  --checkbox-input-size: 24px;
}
@media (min-width: 600px) {
  .dataviews-selection-checkbox {
    --checkbox-input-size: 16px;
  }
}
.dataviews-selection-checkbox {
  line-height: 0;
  flex-shrink: 0;
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

.dataviews-view-grid-items {
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
@container (max-width: 430px) {
  .dataviews-view-grid-items {
    padding-left: 24px;
    padding-right: 24px;
  }
}
@media not (prefers-reduced-motion) {
  .dataviews-view-grid-items {
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
  overflow: hidden;
  align-content: center;
  text-align: start;
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
  overflow: hidden;
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
  opacity: 0;
}
@media not (prefers-reduced-motion) {
  .dataviews-view-grid__card .dataviews-selection-checkbox {
    transition: opacity 0.1s linear;
  }
}
@media (hover: none) {
  .dataviews-view-grid__card .dataviews-selection-checkbox {
    opacity: 1;
    top: 8px;
  }
}

.dataviews-view-grid__card:hover .dataviews-selection-checkbox,
.dataviews-view-grid__card:focus-within .dataviews-selection-checkbox,
.dataviews-view-grid__card.is-selected .dataviews-selection-checkbox {
  opacity: 1;
  top: 8px;
}

.dataviews-view-grid__card .dataviews-view-grid__media-actions {
  position: absolute;
  top: 4px;
  opacity: 0;
  right: 4px;
}
.dataviews-view-grid__card .dataviews-view-grid__media-actions .dataviews-all-actions-button {
  background-color: #fff;
}
@media not (prefers-reduced-motion) {
  .dataviews-view-grid__card .dataviews-view-grid__media-actions {
    transition: opacity 0.1s linear;
  }
}
@media (hover: none) {
  .dataviews-view-grid__card .dataviews-view-grid__media-actions {
    opacity: 1;
    top: 4px;
  }
}

.dataviews-view-grid__card:hover .dataviews-view-grid__media-actions,
.dataviews-view-grid__card:focus-within .dataviews-view-grid__media-actions,
.dataviews-view-grid__card .dataviews-view-grid__media-actions:has(.dataviews-all-actions-button[aria-expanded=true]) {
  opacity: 1;
}

.dataviews-view-grid__media--clickable {
  cursor: pointer;
}

.dataviews-view-grid__group-header {
  font-size: 15px;
  font-weight: 499;
  color: #1e1e1e;
  margin: 0 0 8px 0;
  padding: 0 48px;
  container-type: inline-size;
}
@container (max-width: 430px) {
  .dataviews-view-grid__group-header {
    padding-left: 24px;
    padding-right: 24px;
  }
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

.dataviews-view-list__group-header {
  font-size: 15px;
  font-weight: 499;
  color: #1e1e1e;
  margin: 0 0 8px 0;
  padding: 0 24px;
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
.dataviews-view-table thead tr .components-checkbox-control__input.components-checkbox-control__input {
  opacity: 1;
}
.dataviews-view-table thead th {
  background-color: #fff;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 499;
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
  font-weight: 499;
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
  width: auto;
  white-space: nowrap;
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
  font-weight: 499;
  padding: 12px 48px;
  color: #1e1e1e;
}

.dataviews-view-picker-grid .dataviews-view-picker-grid__card {
  height: 100%;
  justify-content: flex-start;
  position: relative;
}
.dataviews-view-picker-grid .dataviews-view-picker-grid__card .dataviews-view-picker-grid__title-actions {
  padding: 8px 0 4px;
}
.dataviews-view-picker-grid .dataviews-view-picker-grid__card .dataviews-view-picker-grid__title-field {
  min-height: 24px;
  overflow: hidden;
  align-content: center;
  text-align: start;
}
.dataviews-view-picker-grid .dataviews-view-picker-grid__card .dataviews-view-picker-grid__title-field--clickable {
  width: fit-content;
}
.dataviews-view-picker-grid .dataviews-view-picker-grid__card.is-selected .dataviews-view-picker-grid__fields .dataviews-view-picker-grid__field .dataviews-view-picker-grid__field-value {
  color: #1e1e1e;
}
.dataviews-view-picker-grid .dataviews-view-picker-grid__card.is-selected .dataviews-view-picker-grid__media::after,
.dataviews-view-picker-grid .dataviews-view-picker-grid__card .dataviews-view-picker-grid__media:focus::after {
  background-color: rgba(var(--wp-admin-theme-color--rgb), 0.08);
}
.dataviews-view-picker-grid .dataviews-view-picker-grid__card.is-selected .dataviews-view-picker-grid__media::after {
  box-shadow: inset 0 0 0 1px var(--wp-admin-theme-color);
}
.dataviews-view-picker-grid .dataviews-view-picker-grid__card .dataviews-view-picker-grid__media:focus::after {
  box-shadow: inset 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
}
.dataviews-view-picker-grid:focus-visible[aria-activedescendant] {
  outline: none;
}
.dataviews-view-picker-grid:focus-visible [data-active-item=true] {
  outline: 2px solid var(--wp-admin-theme-color);
}
.dataviews-view-picker-grid .dataviews-selection-checkbox {
  top: 8px !important;
}
.dataviews-view-picker-grid .dataviews-selection-checkbox input {
  pointer-events: none;
}
.dataviews-view-picker-grid .dataviews-view-picker-grid__media {
  width: 100%;
  aspect-ratio: 1/1;
  background-color: #fff;
  border-radius: 4px;
  position: relative;
}
.dataviews-view-picker-grid .dataviews-view-picker-grid__media img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.dataviews-view-picker-grid .dataviews-view-picker-grid__media::after {
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
.dataviews-view-picker-grid .dataviews-view-picker-grid__fields {
  position: relative;
  font-size: 12px;
  line-height: 16px;
}
.dataviews-view-picker-grid .dataviews-view-picker-grid__fields:not(:empty) {
  padding: 0 0 12px;
}
.dataviews-view-picker-grid .dataviews-view-picker-grid__fields .dataviews-view-picker-grid__field-value:not(:empty) {
  min-height: 24px;
  line-height: 20px;
  padding-top: 2px;
}
.dataviews-view-picker-grid .dataviews-view-picker-grid__fields .dataviews-view-picker-grid__field {
  min-height: 24px;
  align-items: center;
}
.dataviews-view-picker-grid .dataviews-view-picker-grid__fields .dataviews-view-picker-grid__field .dataviews-view-picker-grid__field-name {
  width: 35%;
  color: #757575;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dataviews-view-picker-grid .dataviews-view-picker-grid__fields .dataviews-view-picker-grid__field .dataviews-view-picker-grid__field-value {
  width: 65%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dataviews-view-picker-grid .dataviews-view-picker-grid__fields .dataviews-view-picker-grid__field:not(:has(.dataviews-view-picker-grid__field-value:not(:empty))) {
  display: none;
}
.dataviews-view-picker-grid .dataviews-view-picker-grid__badge-fields:not(:empty) {
  padding-bottom: 12px;
}

.dataviews-view-picker-grid__field-value:empty,
.dataviews-view-picker-grid__field:empty {
  display: none;
}

.dataviews-view-picker-grid__card .dataviews-selection-checkbox {
  position: absolute;
  top: -9999em;
  left: 8px;
  z-index: 1;
}
@media (hover: none) {
  .dataviews-view-picker-grid__card .dataviews-selection-checkbox {
    top: 8px;
  }
}

.dataviews-view-picker-grid__card:hover .dataviews-selection-checkbox,
.dataviews-view-picker-grid__card:focus-within .dataviews-selection-checkbox,
.dataviews-view-picker-grid__card.is-selected .dataviews-selection-checkbox {
  top: 8px;
}

.dataviews-view-picker-grid__media--clickable {
  cursor: pointer;
}

.dataviews-view-picker-grid-group__header {
  font-size: 15px;
  font-weight: 499;
  color: #1e1e1e;
  margin: 0 0 8px 0;
  padding: 0 48px;
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
}

.dataforms-layouts-card__field-header-label {
  font-family: -apple-system, "system-ui", "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-weight: 499;
  font-size: 15px;
  line-height: 20px;
}

.dataforms-layouts-card__field {
  width: 100%;
}

.dataforms-layouts-card__field-description {
  color: #757575;
  display: block;
  font-size: 13px;
  margin-bottom: 16px;
}

.dataforms-layouts-card__field-summary {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.dataforms-layouts-row__field-control {
  width: 100%;
}

.dataforms-layouts__wrapper {
  font-family: -apple-system, "system-ui", "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
}`,""]);const I=v}),"../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/subDays.js":((Ue,ue,c)=>{"use strict";c.d(ue,{e:()=>x});var e=c("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addDays.js");function x($,v,I){return(0,e.f)($,-v,I)}var u=null}),"../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/subMonths.js":((Ue,ue,c)=>{"use strict";c.d(ue,{a:()=>x});var e=c("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addMonths.js");function x($,v,I){return(0,e.P)($,-v,I)}var u=null}),"../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/subYears.js":((Ue,ue,c)=>{"use strict";c.d(ue,{d:()=>x});var e=c("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addYears.js");function x($,v,I){return(0,e.e)($,-v,I)}var u=null}),"../../../node_modules/.pnpm/highlight-words-core@1.2.3/node_modules/highlight-words-core/dist/index.js":(Ue=>{Ue.exports=(function(ue){var c={};function e(x){if(c[x])return c[x].exports;var u=c[x]={exports:{},id:x,loaded:!1};return ue[x].call(u.exports,u,u.exports,e),u.loaded=!0,u.exports}return e.m=ue,e.c=c,e.p="",e(0)})([(function(ue,c,e){ue.exports=e(1)}),(function(ue,c,e){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var x=e(2);Object.defineProperty(c,"combineChunks",{enumerable:!0,get:function(){return x.combineChunks}}),Object.defineProperty(c,"fillInChunks",{enumerable:!0,get:function(){return x.fillInChunks}}),Object.defineProperty(c,"findAll",{enumerable:!0,get:function(){return x.findAll}}),Object.defineProperty(c,"findChunks",{enumerable:!0,get:function(){return x.findChunks}})}),(function(ue,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var e=c.findAll=function(K){var p=K.autoEscape,D=K.caseSensitive,xe=D===void 0?!1:D,he=K.findChunks,De=he===void 0?u:he,Me=K.sanitize,J=K.searchWords,ae=K.textToHighlight;return $({chunksToHighlight:x({chunks:De({autoEscape:p,caseSensitive:xe,sanitize:Me,searchWords:J,textToHighlight:ae})}),totalLength:ae?ae.length:0})},x=c.combineChunks=function(K){var p=K.chunks;return p=p.sort(function(D,xe){return D.start-xe.start}).reduce(function(D,xe){if(D.length===0)return[xe];var he=D.pop();if(xe.start<he.end){var De=Math.max(he.end,xe.end);D.push({highlight:!1,start:he.start,end:De})}else D.push(he,xe);return D},[]),p},u=function(K){var p=K.autoEscape,D=K.caseSensitive,xe=K.sanitize,he=xe===void 0?v:xe,De=K.searchWords,Me=K.textToHighlight;return Me=he(Me),De.filter(function(J){return J}).reduce(function(J,ae){ae=he(ae),p&&(ae=I(ae));for(var ve=new RegExp(ae,D?"g":"gi"),ye=void 0;ye=ve.exec(Me);){var Ge=ye.index,T=ve.lastIndex;T>Ge&&J.push({highlight:!1,start:Ge,end:T}),ye.index===ve.lastIndex&&ve.lastIndex++}return J},[])};c.findChunks=u;var $=c.fillInChunks=function(K){var p=K.chunksToHighlight,D=K.totalLength,xe=[],he=function(J,ae,ve){ae-J>0&&xe.push({start:J,end:ae,highlight:ve})};if(p.length===0)he(0,D,!1);else{var De=0;p.forEach(function(Me){he(De,Me.start,!1),he(Me.start,Me.end,!0),De=Me.end}),he(De,D,!1)}return xe};function v(Ne){return Ne}function I(Ne){return Ne.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}})])})}]);
