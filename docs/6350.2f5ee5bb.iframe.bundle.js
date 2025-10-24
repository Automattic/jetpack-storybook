(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6350],{"../../../node_modules/.pnpm/@wordpress+dataviews@10.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e024960755d6217a2bba17183c44eb48/node_modules/@wordpress/dataviews/build-module/components/dataviews/index.js":((We,se,d)=>{"use strict";d.d(se,{A:()=>Za});var e=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),g=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js"),u=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),W=d("../../../node_modules/.pnpm/@wordpress+compose@7.33.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-resize-observer/index.js"),v=d("../../../node_modules/.pnpm/@wordpress+compose@7.33.0_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/throttle/index.js"),I=d("../../../node_modules/.pnpm/@wordpress+dataviews@10.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e024960755d6217a2bba17183c44eb48/node_modules/@wordpress/dataviews/build-module/constants.js");const Me=(0,u.createContext)({view:{type:I.Ad},onChangeView:()=>{},fields:[],data:[],paginationInfo:{totalItems:0,totalPages:0},selection:[],onChangeSelection:()=>{},setOpenedFilter:()=>{},openedFilter:null,getItemId:t=>t.id,isItemClickable:()=>!0,renderItemLink:void 0,containerWidth:0,containerRef:(0,u.createRef)(),resizeObserverRef:()=>{},defaultLayouts:{list:{},grid:{},table:{}},filters:[],isShowingFilter:!1,setIsShowingFilter:()=>{},hasInfiniteScrollHandler:!1,config:{perPageSizes:[]}});Me.displayName="DataViewsContext";var K=Me,p=d("../../../node_modules/.pnpm/@wordpress+i18n@6.6.0/node_modules/@wordpress/i18n/build-module/index.js"),M=d("../../../node_modules/.pnpm/@wordpress+primitives@4.33.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),xe=(0,e.jsx)(M.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)(M.wA,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v3.5h-15V5c0-.3.2-.5.5-.5zm8 5.5h6.5v3.5H13V10zm-1.5 3.5h-7V10h7v3.5zm-7 5.5v-4h7v4.5H5c-.3 0-.5-.2-.5-.5zm14.5.5h-6V15h6.5v4c0 .3-.2.5-.5.5z"})}),he=(0,e.jsx)(M.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)(M.wA,{d:"M6 5.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm11-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM13 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6zm5 8.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM15 13a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3zm-9 1.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM4 15a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z",fillRule:"evenodd",clipRule:"evenodd"})}),De=(0,e.jsx)(M.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,e.jsx)(M.wA,{d:"M4 8.8h8.9V7.2H4v1.6zm0 7h8.9v-1.5H4v1.5zM18 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"})}),Ne=(0,e.jsx)(M.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,e.jsx)(M.wA,{d:"M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})}),Z=d("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),re=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),ve=d("../../../node_modules/.pnpm/@wordpress+keycodes@4.33.0/node_modules/@wordpress/keycodes/build-module/platform.js"),ye=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/checkbox-control/index.js");function Ge({selection:t,onChangeSelection:s,item:a,getItemId:i,titleField:r,disabled:l,...c}){const f=i(a),w=!l&&t.includes(f),x=r?.getValue?.({item:a})||(0,p.__)("(no title)");return(0,e.jsx)(ye.A,{className:"dataviews-selection-checkbox",__nextHasNoMarginBottom:!0,"aria-label":x,"aria-disabled":l,checked:w,onChange:()=>{l||s(t.includes(f)?t.filter(y=>f!==y):[...t,f])},...c})}var T=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/private-apis.js"),ke=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),lt=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/modal/index.js"),ct=d("../../../node_modules/.pnpm/@wordpress+icons@11.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/more-vertical.js"),qe=d("../../../node_modules/.pnpm/@wordpress+data@10.33.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js"),A=d("../../../node_modules/.pnpm/@wordpress+dataviews@10.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e024960755d6217a2bba17183c44eb48/node_modules/@wordpress/dataviews/build-module/lock-unlock.js");const{Menu:ue,kebabCase:$}=(0,A.T)(T.j);function B({action:t,onClick:s,items:a}){const i=typeof t.label=="string"?t.label:t.label(a);return(0,e.jsx)(ke.Ay,{label:i,icon:t.icon,disabled:!!t.disabled,accessibleWhenDisabled:!0,size:"compact",onClick:s})}function Be({action:t,onClick:s,items:a}){const i=typeof t.label=="string"?t.label:t.label(a);return(0,e.jsx)(ue.Item,{disabled:t.disabled,onClick:s,children:(0,e.jsx)(ue.ItemLabel,{children:i})})}function mt({action:t,items:s,closeModal:a}){const i=typeof t.label=="string"?t.label:t.label(s),r=typeof t.modalHeader=="function"?t.modalHeader(s):t.modalHeader;return(0,e.jsx)(lt.A,{title:r||i,__experimentalHideHeader:!!t.hideModalHeader,onRequestClose:a,focusOnMount:t.modalFocusOnMount??!0,size:t.modalSize||"medium",overlayClassName:`dataviews-action-modal dataviews-action-modal__${$(t.id)}`,children:(0,e.jsx)(t.RenderModal,{items:s,closeModal:a})})}function Pt({actions:t,item:s,registry:a,setActiveModalAction:i}){return(0,e.jsx)(ue.Group,{children:t.map(r=>(0,e.jsx)(Be,{action:r,onClick:()=>{if("RenderModal"in r){i(r);return}r.callback([s],{registry:a})},items:[s]},r.id))})}function h({item:t,actions:s,isCompact:a}){const i=(0,qe.A)(),{primaryActions:r,eligibleActions:l}=(0,u.useMemo)(()=>{const c=s.filter(w=>!w.isEligible||w.isEligible(t));return{primaryActions:c.filter(w=>w.isPrimary&&!!w.icon),eligibleActions:c}},[s,t]);return a?(0,e.jsx)(_,{item:t,actions:l,isSmall:!0,registry:i}):(0,e.jsxs)(g.A,{spacing:1,justify:"flex-end",className:"dataviews-item-actions",style:{flexShrink:0,width:"auto"},children:[(0,e.jsx)(V,{item:t,actions:r,registry:i}),r.length<l.length&&(0,e.jsx)(_,{item:t,actions:l,registry:i})]})}function _({item:t,actions:s,isSmall:a,registry:i}){const[r,l]=(0,u.useState)(null);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(ue,{placement:"bottom-end",children:[(0,e.jsx)(ue.TriggerButton,{render:(0,e.jsx)(ke.Ay,{size:a?"small":"compact",icon:ct.A,label:(0,p.__)("Actions"),accessibleWhenDisabled:!0,disabled:!s.length,className:"dataviews-all-actions-button"})}),(0,e.jsx)(ue.Popover,{children:(0,e.jsx)(Pt,{actions:s,item:t,registry:i,setActiveModalAction:l})})]}),!!r&&(0,e.jsx)(mt,{action:r,items:[t],closeModal:()=>l(null)})]})}function V({item:t,actions:s,registry:a}){const[i,r]=(0,u.useState)(null);return!Array.isArray(s)||s.length===0?null:(0,e.jsxs)(e.Fragment,{children:[s.map(l=>(0,e.jsx)(B,{action:l,onClick:()=>{if("RenderModal"in l){r(l);return}l.callback([t],{registry:a})},items:[t]},l.id)),!!i&&(0,e.jsx)(mt,{action:i,items:[t],closeModal:()=>r(null)})]})}var G=d("../../../node_modules/.pnpm/@wordpress+icons@11.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close-small.js");function we({action:t,items:s,ActionTriggerComponent:a}){const[i,r]=(0,u.useState)(!1),l={action:t,onClick:()=>{r(!0)},items:s};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a,{...l}),i&&(0,e.jsx)(mt,{action:t,items:s,closeModal:()=>r(!1)})]})}function Ce(t,s){return(0,u.useMemo)(()=>t.some(a=>a.supportsBulk&&(!a.isEligible||a.isEligible(s))),[t,s])}function Re(t,s){return(0,u.useMemo)(()=>s.some(a=>t.some(i=>i.supportsBulk&&(!i.isEligible||i.isEligible(a)))),[t,s])}function Xe({selection:t,onChangeSelection:s,data:a,actions:i,getItemId:r}){const l=(0,u.useMemo)(()=>a.filter(w=>i.some(x=>x.supportsBulk&&(!x.isEligible||x.isEligible(w)))),[a,i]),c=a.filter(w=>t.includes(r(w))&&l.includes(w)),f=c.length===l.length;return(0,e.jsx)(ye.A,{className:"dataviews-view-table-selection-checkbox",__nextHasNoMarginBottom:!0,checked:f,indeterminate:!f&&!!c.length,onChange:()=>{s(f?[]:l.map(w=>r(w)))},"aria-label":f?(0,p.__)("Deselect all"):(0,p.__)("Select all")})}function Ze({action:t,onClick:s,isBusy:a,items:i}){const r=typeof t.label=="string"?t.label:t.label(i);return(0,e.jsx)(ke.Ay,{disabled:a,accessibleWhenDisabled:!0,label:r,icon:t.icon,size:"compact",onClick:s,isBusy:a,tooltipPosition:"top"})}const Y=[];function ut({action:t,selectedItems:s,actionInProgress:a,setActionInProgress:i}){const r=(0,qe.A)(),l=(0,u.useMemo)(()=>s.filter(c=>!t.isEligible||t.isEligible(c)),[t,s]);return"RenderModal"in t?(0,e.jsx)(we,{action:t,items:l,ActionTriggerComponent:Ze},t.id):(0,e.jsx)(Ze,{action:t,onClick:async()=>{i(t.id),await t.callback(s,{registry:r}),i(null)},items:l,isBusy:a===t.id},t.id)}function dt(t,s,a,i,r,l,c,f,w){const x=l.length>0?(0,p.nv)((0,p._n)("%d Item selected","%d Items selected",l.length),l.length):(0,p.nv)((0,p._n)("%d Item","%d Items",t.length),t.length);return(0,e.jsxs)(g.A,{expanded:!1,className:"dataviews-bulk-actions-footer__container",spacing:3,children:[(0,e.jsx)(Xe,{selection:i,onChangeSelection:w,data:t,actions:s,getItemId:a}),(0,e.jsx)("span",{className:"dataviews-bulk-actions-footer__item-count",children:x}),(0,e.jsxs)(g.A,{className:"dataviews-bulk-actions-footer__action-buttons",expanded:!1,spacing:1,children:[r.map(y=>(0,e.jsx)(ut,{action:y,selectedItems:l,actionInProgress:c,setActionInProgress:f},y.id)),l.length>0&&(0,e.jsx)(ke.Ay,{icon:G.A,showTooltip:!0,tooltipPosition:"top",size:"compact",label:(0,p.__)("Cancel"),disabled:!!c,accessibleWhenDisabled:!1,onClick:()=>{w(Y)}})]})]})}function Ss({selection:t,actions:s,onChangeSelection:a,data:i,getItemId:r}){const[l,c]=(0,u.useState)(null),f=(0,u.useRef)(null),w=(0,u.useMemo)(()=>s.filter(C=>C.supportsBulk),[s]),x=(0,u.useMemo)(()=>i.filter(C=>w.some(S=>!S.isEligible||S.isEligible(C))),[i,w]),y=(0,u.useMemo)(()=>i.filter(C=>t.includes(r(C))&&x.includes(C)),[t,i,r,x]),P=(0,u.useMemo)(()=>s.filter(C=>C.supportsBulk&&C.icon&&y.some(S=>!C.isEligible||C.isEligible(S))),[s,y]);if(l)f.current||(f.current=dt(i,s,r,t,P,y,l,c,a));else return f.current&&(f.current=null),dt(i,s,r,t,P,y,l,c,a);return f.current}function us(){const{data:t,selection:s,actions:a=Y,onChangeSelection:i,getItemId:r}=(0,u.useContext)(K);return(0,e.jsx)(Ss,{selection:s,onChangeSelection:i,data:t,actions:a,getItemId:r})}var qt=(0,e.jsx)(M.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)(M.wA,{d:"M10 17.5H14V16H10V17.5ZM6 6V7.5H18V6H6ZM8 12.5H16V11H8V12.5Z"})}),es=d("../../../node_modules/.pnpm/@wordpress+icons@11.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),Mt=d("../../../node_modules/.pnpm/@wordpress+icons@11.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-right.js"),Wt=d("../../../node_modules/.pnpm/@wordpress+icons@11.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/unseen.js"),_t=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/icon/index.js");const{Menu:Ue}=(0,A.T)(T.j);function ts({children:t}){return u.Children.toArray(t).filter(Boolean).map((s,a)=>(0,e.jsxs)(u.Fragment,{children:[a>0&&(0,e.jsx)(Ue.Separator,{}),s]},a))}var ss=(0,u.forwardRef)(function({fieldId:s,view:a,fields:i,onChangeView:r,onHide:l,setOpenedFilter:c,canMove:f=!0},w){const x=a.fields??[],y=x?.indexOf(s),P=a.sort?.field===s;let C=!1,S=!1,D=!1,k=[];const L=i.find(F=>F.id===s);if(!L)return null;C=L.enableHiding!==!1,S=L.enableSorting!==!1;const X=L.header;return k=!!L.filterBy&&L.filterBy?.operators||[],D=!a.filters?.some(F=>s===F.field)&&!!(L.hasElements||L.Edit)&&L.filterBy!==!1&&!L.filterBy?.isPrimary,!S&&!f&&!C&&!D?X:(0,e.jsxs)(Ue,{children:[(0,e.jsxs)(Ue.TriggerButton,{render:(0,e.jsx)(ke.Ay,{size:"compact",className:"dataviews-view-table-header-button",ref:w,variant:"tertiary"}),children:[X,a.sort&&P&&(0,e.jsx)("span",{"aria-hidden":"true",children:I.vI[a.sort.direction]})]}),(0,e.jsx)(Ue.Popover,{style:{minWidth:"240px"},children:(0,e.jsxs)(ts,{children:[S&&(0,e.jsx)(Ue.Group,{children:I.GJ.map(F=>{const ge=a.sort&&P&&a.sort.direction===F,fe=`${s}-${F}`;return(0,e.jsx)(Ue.RadioItem,{name:"view-table-sorting",value:fe,checked:ge,onChange:()=>{r({...a,sort:{field:s,direction:F},showLevels:!1})},children:(0,e.jsx)(Ue.ItemLabel,{children:I.CL[F]})},fe)})}),D&&(0,e.jsx)(Ue.Group,{children:(0,e.jsx)(Ue.Item,{prefix:(0,e.jsx)(_t.A,{icon:qt}),onClick:()=>{c(s),r({...a,page:1,filters:[...a.filters||[],{field:s,value:void 0,operator:k[0]}]})},children:(0,e.jsx)(Ue.ItemLabel,{children:(0,p.__)("Add filter")})})}),(f||C)&&L&&(0,e.jsxs)(Ue.Group,{children:[f&&(0,e.jsx)(Ue.Item,{prefix:(0,e.jsx)(_t.A,{icon:es.A}),disabled:y<1,onClick:()=>{r({...a,fields:[...x.slice(0,y-1)??[],s,x[y-1],...x.slice(y+1)]})},children:(0,e.jsx)(Ue.ItemLabel,{children:(0,p.__)("Move left")})}),f&&(0,e.jsx)(Ue.Item,{prefix:(0,e.jsx)(_t.A,{icon:Mt.A}),disabled:y>=x.length-1,onClick:()=>{r({...a,fields:[...x.slice(0,y)??[],x[y+1],s,...x.slice(y+2)]})},children:(0,e.jsx)(Ue.ItemLabel,{children:(0,p.__)("Move right")})}),C&&L&&(0,e.jsx)(Ue.Item,{prefix:(0,e.jsx)(_t.A,{icon:Wt.A}),onClick:()=>{l(L),r({...a,fields:x.filter(F=>F!==s)})},children:(0,e.jsx)(Ue.ItemLabel,{children:(0,p.__)("Hide column")})})]})]})})]})}),Ke=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js");function Es({item:t,isItemClickable:s,onClickItem:a,className:i}){return!s(t)||!a?{className:i}:{className:i?`${i} ${i}--clickable`:void 0,role:"button",tabIndex:0,onClick:r=>{r.stopPropagation(),a(t)},onKeyDown:r=>{(r.key==="Enter"||r.key===""||r.key===" ")&&(r.stopPropagation(),a(t))}}}function gt({item:t,isItemClickable:s,onClickItem:a,renderItemLink:i,className:r,children:l,...c}){if(!s(t))return(0,e.jsx)("div",{className:r,...c,children:l});if(i){const w=i({item:t,className:`${r} ${r}--clickable`,...c,children:l});return(0,u.cloneElement)(w,{onClick:x=>{x.stopPropagation(),w.props.onClick&&w.props.onClick(x)},onKeyDown:x=>{(x.key==="Enter"||x.key===""||x.key===" ")&&(x.stopPropagation(),w.props.onKeyDown&&w.props.onKeyDown(x))}})}const f=Es({item:t,isItemClickable:s,onClickItem:a,className:r});return(0,e.jsx)("div",{...f,...c,children:l})}function Os({item:t,level:s,titleField:a,mediaField:i,descriptionField:r,onClickItem:l,renderItemLink:c,isItemClickable:f}){return(0,e.jsxs)(g.A,{spacing:3,justify:"flex-start",children:[i&&(0,e.jsx)(gt,{item:t,isItemClickable:f,onClickItem:l,renderItemLink:c,className:"dataviews-view-table__cell-content-wrapper dataviews-column-primary__media","aria-label":a?(0,p.nv)((0,p.__)("Click item: %s"),a.getValue?.({item:t})):void 0,children:(0,e.jsx)(i.render,{item:t,field:i,config:{sizes:"32px"}})}),(0,e.jsxs)(Ke.A,{spacing:0,alignment:"flex-start",className:"dataviews-view-table__primary-column-content",children:[a&&(0,e.jsxs)(gt,{item:t,isItemClickable:f,onClickItem:l,renderItemLink:c,className:"dataviews-view-table__cell-content-wrapper dataviews-title-field",children:[s!==void 0&&s>0&&(0,e.jsxs)("span",{className:"dataviews-view-table__level",children:["\u2014".repeat(s),"\xA0"]}),(0,e.jsx)(a.render,{item:t,field:a})]}),r&&(0,e.jsx)(r.render,{item:t,field:r})]})]})}var Ps=Os,Ms=d("../../../node_modules/.pnpm/@wordpress+compose@7.33.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-debounce/index.js");const $t=t=>(0,p.V8)()?Math.abs(t.scrollLeft)<=1:t.scrollLeft+t.clientWidth>=t.scrollWidth-1;function Ns({scrollContainerRef:t,enabled:s=!1}){const[a,i]=(0,u.useState)(!1),r=(0,Ms.A)((0,u.useCallback)(()=>{const l=t.current;l&&i($t(l))},[t,i]),200);return(0,u.useEffect)(()=>typeof window>"u"||!s||!t.current?()=>{}:(r(),t.current.addEventListener("scroll",r),window.addEventListener("resize",r),()=>{t.current?.removeEventListener("scroll",r),window.removeEventListener("resize",r)}),[t,s]),a}function Ut(t,s){return t.reduce((a,i)=>{const r=s.getValue({item:i});return a.has(r)||a.set(r,[]),a.get(r)?.push(i),a},new Map)}function Ts({item:t,fields:s,column:a,align:i}){const r=s.find(c=>c.id===a);if(!r)return null;const l=(0,Z.A)("dataviews-view-table__cell-content-wrapper",{"dataviews-view-table__cell-align-end":i==="end","dataviews-view-table__cell-align-center":i==="center"});return(0,e.jsx)("div",{className:l,children:(0,e.jsx)(r.render,{item:t,field:r})})}function ps({hasBulkActions:t,item:s,level:a,actions:i,fields:r,id:l,view:c,titleField:f,mediaField:w,descriptionField:x,selection:y,getItemId:P,isItemClickable:C,onClickItem:S,renderItemLink:D,onChangeSelection:k,isActionsColumnSticky:L,posinset:X}){const{paginationInfo:F}=(0,u.useContext)(K),ge=Ce(i,s),fe=ge&&y.includes(l),[Q,ie]=(0,u.useState)(!1),{showTitle:de=!0,showMedia:Ae=!0,showDescription:ce=!0,infiniteScrollEnabled:me}=c,te=()=>{ie(!0)},be=()=>{ie(!1)},E=(0,u.useRef)(!1),N=c.fields??[],U=f&&de||w&&Ae||x&&ce;return(0,e.jsxs)("tr",{className:(0,Z.A)("dataviews-view-table__row",{"is-selected":ge&&fe,"is-hovered":Q,"has-bulk-actions":ge}),onMouseEnter:te,onMouseLeave:be,onTouchStart:()=>{E.current=!0},"aria-setsize":me?F.totalItems:void 0,"aria-posinset":X,role:me?"article":void 0,onClick:ne=>{ge&&!E.current&&document.getSelection()?.type!=="Range"&&(((0,ve.H)()?ne.metaKey:ne.ctrlKey)?k(y.includes(l)?y.filter(Ie=>l!==Ie):[...y,l]):k(y.includes(l)?y.filter(Ie=>l!==Ie):[l]))},children:[t&&(0,e.jsx)("td",{className:"dataviews-view-table__checkbox-column",children:(0,e.jsx)("div",{className:"dataviews-view-table__cell-content-wrapper",children:(0,e.jsx)(Ge,{item:s,selection:y,onChangeSelection:k,getItemId:P,titleField:f,disabled:!ge})})}),U&&(0,e.jsx)("td",{children:(0,e.jsx)(Ps,{item:s,level:a,titleField:de?f:void 0,mediaField:Ae?w:void 0,descriptionField:ce?x:void 0,isItemClickable:C,onClickItem:S,renderItemLink:D})}),N.map(ne=>{const{width:Ie,maxWidth:He,minWidth:pt,align:jt}=c.layout?.styles?.[ne]??{};return(0,e.jsx)("td",{style:{width:Ie,maxWidth:He,minWidth:pt},children:(0,e.jsx)(Ts,{fields:r,item:s,column:ne,align:jt})},ne)}),!!i?.length&&(0,e.jsx)("td",{className:(0,Z.A)("dataviews-view-table__actions-column",{"dataviews-view-table__actions-column--sticky":!0,"dataviews-view-table__actions-column--stuck":L}),onClick:ne=>ne.stopPropagation(),children:(0,e.jsx)(h,{item:s,actions:i})})]})}function Kt({actions:t,data:s,fields:a,getItemId:i,getItemLevel:r,isLoading:l=!1,onChangeView:c,onChangeSelection:f,selection:w,setOpenedFilter:x,onClickItem:y,isItemClickable:P,renderItemLink:C,view:S,className:D,empty:k}){const{containerRef:L}=(0,u.useContext)(K),X=(0,u.useRef)(new Map),F=(0,u.useRef)(),[ge,fe]=(0,u.useState)(),Q=Re(t,s);(0,u.useEffect)(()=>{F.current&&(F.current.focus(),F.current=void 0)});const ie=(0,u.useId)(),de=Ns({scrollContainerRef:L,enabled:!!t?.length});if(ge){F.current=ge,fe(void 0);return}const Ae=Ve=>{const et=X.current.get(Ve.id),Se=et?X.current.get(et.fallback):void 0;fe(Se?.node)},ce=!!s?.length,me=a.find(Ve=>Ve.id===S.titleField),te=a.find(Ve=>Ve.id===S.mediaField),be=a.find(Ve=>Ve.id===S.descriptionField),E=S.groupByField?a.find(Ve=>Ve.id===S.groupByField):null,N=E?Ut(s,E):null,{showTitle:U=!0,showMedia:ne=!0,showDescription:Ie=!0}=S,He=me&&U||te&&ne||be&&Ie,pt=S.fields??[],jt=(Ve,et)=>Se=>{Se?X.current.set(Ve,{node:Se,fallback:pt[et>0?et-1:1]}):X.current.delete(Ve)},kt=S.infiniteScrollEnabled&&!N;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("table",{className:(0,Z.A)("dataviews-view-table",D,{[`has-${S.layout?.density}-density`]:S.layout?.density&&["compact","comfortable"].includes(S.layout.density)}),"aria-busy":l,"aria-describedby":ie,role:kt?"feed":void 0,children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{className:"dataviews-view-table__row",children:[Q&&(0,e.jsx)("th",{className:"dataviews-view-table__checkbox-column",scope:"col",children:(0,e.jsx)(Xe,{selection:w,onChangeSelection:f,data:s,actions:t,getItemId:i})}),He&&(0,e.jsx)("th",{scope:"col",children:me&&(0,e.jsx)(ss,{ref:jt(me.id,0),fieldId:me.id,view:S,fields:a,onChangeView:c,onHide:Ae,setOpenedFilter:x,canMove:!1})}),pt.map((Ve,et)=>{const{width:Se,maxWidth:ot,minWidth:cs,align:Ft}=S.layout?.styles?.[Ve]??{};return(0,e.jsx)("th",{style:{width:Se,maxWidth:ot,minWidth:cs,textAlign:Ft},"aria-sort":S.sort?.direction&&S.sort?.field===Ve?I.LW[S.sort.direction]:void 0,scope:"col",children:(0,e.jsx)(ss,{ref:jt(Ve,et),fieldId:Ve,view:S,fields:a,onChangeView:c,onHide:Ae,setOpenedFilter:x,canMove:S.layout?.enableMoving??!0})},Ve)}),!!t?.length&&(0,e.jsx)("th",{className:(0,Z.A)("dataviews-view-table__actions-column",{"dataviews-view-table__actions-column--sticky":!0,"dataviews-view-table__actions-column--stuck":!de}),children:(0,e.jsx)("span",{className:"dataviews-view-table-header",children:(0,p.__)("Actions")})})]})}),ce&&E&&N?Array.from(N.entries()).map(([Ve,et])=>(0,e.jsxs)("tbody",{children:[(0,e.jsx)("tr",{className:"dataviews-view-table__group-header-row",children:(0,e.jsx)("td",{colSpan:pt.length+(He?1:0)+(Q?1:0)+(t?.length?1:0),className:"dataviews-view-table__group-header-cell",children:(0,p.nv)((0,p.__)("%1$s: %2$s"),E.label,Ve)})}),et.map((Se,ot)=>(0,e.jsx)(ps,{item:Se,level:S.showLevels&&typeof r=="function"?r(Se):void 0,hasBulkActions:Q,actions:t,fields:a,id:i(Se)||ot.toString(),view:S,titleField:me,mediaField:te,descriptionField:be,selection:w,getItemId:i,onChangeSelection:f,onClickItem:y,renderItemLink:C,isItemClickable:P,isActionsColumnSticky:!de},i(Se)))]},`group-${Ve}`)):(0,e.jsx)("tbody",{children:ce&&s.map((Ve,et)=>(0,e.jsx)(ps,{item:Ve,level:S.showLevels&&typeof r=="function"?r(Ve):void 0,hasBulkActions:Q,actions:t,fields:a,id:i(Ve)||et.toString(),view:S,titleField:me,mediaField:te,descriptionField:be,selection:w,getItemId:i,onChangeSelection:f,onClickItem:y,renderItemLink:C,isItemClickable:P,isActionsColumnSticky:!de,posinset:kt?et+1:void 0},i(Ve)))})]}),(0,e.jsxs)("div",{className:(0,Z.A)({"dataviews-loading":l,"dataviews-no-results":!ce&&!l}),id:ie,children:[!ce&&(l?(0,e.jsx)("p",{children:(0,e.jsx)(re.Ay,{})}):k),ce&&l&&(0,e.jsx)("p",{className:"dataviews-loading-more",children:(0,e.jsx)(re.Ay,{})})]})]})}var Nt=Kt,Tt=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex/component.js"),is=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js"),Dt=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-item/component.js"),It=d("../../../node_modules/.pnpm/@wordpress+compose@7.33.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");const Gt=(0,u.forwardRef)(({className:t,previewSize:s,...a},i)=>(0,e.jsx)("div",{ref:i,className:(0,Z.A)("dataviews-view-grid-items",t),style:{gridTemplateColumns:s&&`repeat(auto-fill, minmax(${s}px, 1fr))`},...a})),{Badge:Ds}=(0,A.T)(T.j);function bt({view:t,selection:s,onChangeSelection:a,onClickItem:i,isItemClickable:r,renderItemLink:l,getItemId:c,item:f,actions:w,mediaField:x,titleField:y,descriptionField:P,regularFields:C,badgeFields:S,hasBulkActions:D,config:k,posinset:L}){const{showTitle:X=!0,showMedia:F=!0,showDescription:ge=!0,infiniteScrollEnabled:fe}=t,Q=Ce(w,f),ie=c(f),de=(0,It.A)(bt),Ae=s.includes(ie),ce=x?.render?(0,e.jsx)(x.render,{item:f,field:x,config:k}):null,me=X&&y?.render?(0,e.jsx)(y.render,{item:f,field:y}):null,te=F&&ce;let be,E;r(f)&&i&&(me?(be={"aria-labelledby":`dataviews-view-grid__title-field-${de}`},E={id:`dataviews-view-grid__title-field-${de}`}):be={"aria-label":(0,p.__)("Navigate to item")});const{paginationInfo:N}=(0,u.useContext)(K);return(0,e.jsxs)(Ke.A,{spacing:0,className:(0,Z.A)("dataviews-view-grid__card",{"is-selected":Q&&Ae}),onClickCapture:U=>{if((0,ve.H)()?U.metaKey:U.ctrlKey){if(U.stopPropagation(),U.preventDefault(),!Q)return;a(s.includes(ie)?s.filter(ne=>ie!==ne):[...s,ie])}},role:fe?"article":void 0,"aria-setsize":fe?N.totalItems:void 0,"aria-posinset":L,children:[te&&(0,e.jsx)(gt,{item:f,isItemClickable:r,onClickItem:i,renderItemLink:l,className:"dataviews-view-grid__media",...be,children:ce}),D&&te&&(0,e.jsx)(Ge,{item:f,selection:s,onChangeSelection:a,getItemId:c,titleField:y,disabled:!Q}),!X&&te&&!!w?.length&&(0,e.jsx)("div",{className:"dataviews-view-grid__media-actions",children:(0,e.jsx)(h,{item:f,actions:w,isCompact:!0})}),X&&(0,e.jsxs)(g.A,{justify:"space-between",className:"dataviews-view-grid__title-actions",children:[(0,e.jsx)(gt,{item:f,isItemClickable:r,onClickItem:i,renderItemLink:l,className:"dataviews-view-grid__title-field dataviews-title-field",...E,children:me}),!!w?.length&&(0,e.jsx)(h,{item:f,actions:w,isCompact:!0})]}),(0,e.jsxs)(Ke.A,{spacing:1,children:[ge&&P?.render&&(0,e.jsx)(P.render,{item:f,field:P}),!!S?.length&&(0,e.jsx)(g.A,{className:"dataviews-view-grid__badge-fields",spacing:2,wrap:!0,alignment:"top",justify:"flex-start",children:S.map(U=>(0,e.jsx)(Ds,{className:"dataviews-view-grid__field-value",children:(0,e.jsx)(U.render,{item:f,field:U})},U.id))}),!!C?.length&&(0,e.jsx)(Ke.A,{className:"dataviews-view-grid__fields",spacing:1,children:C.map(U=>(0,e.jsx)(Tt.A,{className:"dataviews-view-grid__field",gap:1,justify:"flex-start",expanded:!0,style:{height:"auto"},direction:"row",children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(is.Ay,{text:U.label,children:(0,e.jsx)(Dt.A,{className:"dataviews-view-grid__field-name",children:U.header})}),(0,e.jsx)(Dt.A,{className:"dataviews-view-grid__field-value",style:{maxHeight:"none"},children:(0,e.jsx)(U.render,{item:f,field:U})})]})},U.id))})]})]},ie)}function as({actions:t,data:s,fields:a,getItemId:i,isLoading:r,onChangeSelection:l,onClickItem:c,isItemClickable:f,renderItemLink:w,selection:x,view:y,className:P,empty:C}){const{resizeObserverRef:S}=(0,u.useContext)(K),D=a.find(te=>te.id===y?.titleField),k=a.find(te=>te.id===y?.mediaField),L=a.find(te=>te.id===y?.descriptionField),X=y.fields??[],{regularFields:F,badgeFields:ge}=X.reduce((te,be)=>{const E=a.find(U=>U.id===be);if(!E)return te;const N=y.layout?.badgeFields?.includes(be)?"badgeFields":"regularFields";return te[N].push(E),te},{regularFields:[],badgeFields:[]}),fe=!!s?.length,Q=Re(t,s),ie=y.layout?.previewSize,de="900px",Ae=y.groupByField?a.find(te=>te.id===y.groupByField):null,ce=Ae?Ut(s,Ae):null,me=y.infiniteScrollEnabled&&!ce;return(0,e.jsxs)(e.Fragment,{children:[fe&&Ae&&ce&&(0,e.jsx)(Ke.A,{spacing:4,children:Array.from(ce.entries()).map(([te,be])=>(0,e.jsxs)(Ke.A,{spacing:2,children:[(0,e.jsx)("h3",{className:"dataviews-view-grid__group-header",children:(0,p.nv)((0,p.__)("%1$s: %2$s"),Ae.label,te)}),(0,e.jsx)(Gt,{className:(0,Z.A)("dataviews-view-grid",P),previewSize:ie,"aria-busy":r,ref:S,children:be.map(E=>(0,e.jsx)(bt,{view:y,selection:x,onChangeSelection:l,onClickItem:c,isItemClickable:f,renderItemLink:w,getItemId:i,item:E,actions:t,mediaField:k,titleField:D,descriptionField:L,regularFields:F,badgeFields:ge,hasBulkActions:Q,config:{sizes:de}},i(E)))})]},te))}),fe&&!ce&&(0,e.jsx)(Gt,{className:(0,Z.A)("dataviews-view-grid",P),previewSize:ie,"aria-busy":r,ref:S,role:me?"feed":void 0,children:s.map((te,be)=>(0,e.jsx)(bt,{view:y,selection:x,onChangeSelection:l,onClickItem:c,isItemClickable:f,renderItemLink:w,getItemId:i,item:te,actions:t,mediaField:k,titleField:D,descriptionField:L,regularFields:F,badgeFields:ge,hasBulkActions:Q,config:{sizes:de},posinset:me?be+1:void 0},i(te)))}),!fe&&(0,e.jsx)("div",{className:(0,Z.A)({"dataviews-loading":r,"dataviews-no-results":!r}),children:r?(0,e.jsx)("p",{children:(0,e.jsx)(re.Ay,{})}):C}),fe&&r&&(0,e.jsx)("p",{className:"dataviews-loading-more",children:(0,e.jsx)(re.Ay,{})})]})}var ms=as,Is=d("../../../node_modules/.pnpm/@wordpress+compose@7.33.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-previous/index.js"),it=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/composite/index.js"),vs=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js");const{Menu:Vt}=(0,A.T)(T.j);function St(t){return`${t}-item-wrapper`}function Rs(t,s){return`${t}-primary-action-${s}`}function rs(t){return`${t}-dropdown`}function Rt({idPrefix:t,primaryAction:s,item:a}){const i=(0,qe.A)(),[r,l]=(0,u.useState)(!1),c=Rs(t,s.id),f=typeof s.label=="string"?s.label:s.label([a]);return"RenderModal"in s?(0,e.jsx)("div",{role:"gridcell",children:(0,e.jsx)(it.e.Item,{id:c,render:(0,e.jsx)(ke.Ay,{label:f,disabled:!!s.disabled,accessibleWhenDisabled:!0,icon:s.icon,size:"small",onClick:()=>l(!0)}),children:r&&(0,e.jsx)(mt,{action:s,items:[a],closeModal:()=>l(!1)})})},s.id):(0,e.jsx)("div",{role:"gridcell",children:(0,e.jsx)(it.e.Item,{id:c,render:(0,e.jsx)(ke.Ay,{label:f,disabled:!!s.disabled,accessibleWhenDisabled:!0,icon:s.icon,size:"small",onClick:()=>{s.callback([a],{registry:i})}})})},s.id)}function fs({view:t,actions:s,idPrefix:a,isSelected:i,item:r,titleField:l,mediaField:c,descriptionField:f,onSelect:w,otherFields:x,onDropdownTriggerKeyDown:y,posinset:P}){const{showTitle:C=!0,showMedia:S=!0,showDescription:D=!0,infiniteScrollEnabled:k}=t,L=(0,u.useRef)(null),X=`${a}-label`,F=`${a}-description`,ge=(0,qe.A)(),[fe,Q]=(0,u.useState)(!1),[ie,de]=(0,u.useState)(null),Ae=({type:ne})=>{Q(ne==="mouseenter")},{paginationInfo:ce}=(0,u.useContext)(K);(0,u.useEffect)(()=>{i&&L.current?.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})},[i]);const{primaryAction:me,eligibleActions:te}=(0,u.useMemo)(()=>{const ne=s.filter(He=>!He.isEligible||He.isEligible(r));return{primaryAction:ne.filter(He=>He.isPrimary&&!!He.icon)[0],eligibleActions:ne}},[s,r]),be=me&&s.length===1,E=S&&c?.render?(0,e.jsx)("div",{className:"dataviews-view-list__media-wrapper",children:(0,e.jsx)(c.render,{item:r,field:c,config:{sizes:"52px"}})}):null,N=C&&l?.render?(0,e.jsx)(l.render,{item:r,field:l}):null,U=te?.length>0&&(0,e.jsxs)(g.A,{spacing:3,className:"dataviews-view-list__item-actions",children:[me&&(0,e.jsx)(Rt,{idPrefix:a,primaryAction:me,item:r}),!be&&(0,e.jsxs)("div",{role:"gridcell",children:[(0,e.jsxs)(Vt,{placement:"bottom-end",children:[(0,e.jsx)(Vt.TriggerButton,{render:(0,e.jsx)(it.e.Item,{id:rs(a),render:(0,e.jsx)(ke.Ay,{size:"small",icon:ct.A,label:(0,p.__)("Actions"),accessibleWhenDisabled:!0,disabled:!s.length,onKeyDown:y})})}),(0,e.jsx)(Vt.Popover,{children:(0,e.jsx)(Pt,{actions:te,item:r,registry:ge,setActiveModalAction:de})})]}),!!ie&&(0,e.jsx)(mt,{action:ie,items:[r],closeModal:()=>de(null)})]})]});return(0,e.jsx)(it.e.Row,{ref:L,render:(0,e.jsx)("div",{"aria-posinset":P,"aria-setsize":k?ce.totalItems:void 0}),role:k?"article":"row",className:(0,Z.A)({"is-selected":i,"is-hovered":fe}),onMouseEnter:Ae,onMouseLeave:Ae,children:(0,e.jsxs)(g.A,{className:"dataviews-view-list__item-wrapper",spacing:0,children:[(0,e.jsx)("div",{role:"gridcell",children:(0,e.jsx)(it.e.Item,{id:St(a),"aria-pressed":i,"aria-labelledby":X,"aria-describedby":F,className:"dataviews-view-list__item",onClick:()=>w(r)})}),(0,e.jsxs)(g.A,{spacing:3,justify:"start",alignment:"flex-start",children:[E,(0,e.jsxs)(Ke.A,{spacing:1,className:"dataviews-view-list__field-wrapper",children:[(0,e.jsxs)(g.A,{spacing:0,children:[(0,e.jsx)("div",{className:"dataviews-title-field",id:X,children:N}),U]}),D&&f?.render&&(0,e.jsx)("div",{className:"dataviews-view-list__field",children:(0,e.jsx)(f.render,{item:r,field:f})}),(0,e.jsx)("div",{className:"dataviews-view-list__fields",id:F,children:x.map(ne=>(0,e.jsxs)("div",{className:"dataviews-view-list__field",children:[(0,e.jsx)(vs.A,{as:"span",className:"dataviews-view-list__field-label",children:ne.label}),(0,e.jsx)("span",{className:"dataviews-view-list__field-value",children:(0,e.jsx)(ne.render,{item:r,field:ne})})]},ne.id))})]})]})]})})}function zs(t){return!!t}function ws(t){const{actions:s,data:a,fields:i,getItemId:r,isLoading:l,onChangeSelection:c,selection:f,view:w,className:x,empty:y}=t,P=(0,It.A)(ws,"view-list"),C=a?.findLast(N=>f.includes(r(N))),S=i.find(N=>N.id===w.titleField),D=i.find(N=>N.id===w.mediaField),k=i.find(N=>N.id===w.descriptionField),L=(w?.fields??[]).map(N=>i.find(U=>N===U.id)).filter(zs),X=N=>c([r(N)]),F=(0,u.useCallback)(N=>`${P}-${r(N)}`,[P,r]),ge=(0,u.useCallback)((N,U)=>U.startsWith(F(N)),[F]),[fe,Q]=(0,u.useState)(void 0);(0,u.useEffect)(()=>{C&&Q(St(F(C)))},[C,F]);const ie=a.findIndex(N=>ge(N,fe??"")),de=(0,Is.A)(ie),Ae=ie!==-1,ce=(0,u.useCallback)((N,U)=>{const ne=Math.min(a.length-1,Math.max(0,N));if(!a[ne])return;const Ie=F(a[ne]),He=U(Ie);Q(He),document.getElementById(He)?.focus()},[a,F]);(0,u.useEffect)(()=>{!Ae&&(de!==void 0&&de!==-1)&&ce(de,St)},[Ae,ce,de]);const me=(0,u.useCallback)(N=>{N.key==="ArrowDown"&&(N.preventDefault(),ce(ie+1,rs)),N.key==="ArrowUp"&&(N.preventDefault(),ce(ie-1,rs))},[ce,ie]),te=a?.length;if(!te)return(0,e.jsx)("div",{className:(0,Z.A)({"dataviews-loading":l,"dataviews-no-results":!te&&!l}),children:!te&&(l?(0,e.jsx)("p",{children:(0,e.jsx)(re.Ay,{})}):y)});const be=w.groupByField?i.find(N=>N.id===w.groupByField):null,E=be?Ut(a,be):null;return te&&be&&E?(0,e.jsx)(it.e,{id:`${P}`,render:(0,e.jsx)("div",{}),className:"dataviews-view-list__group",role:"grid",activeId:fe,setActiveId:Q,children:(0,e.jsx)(Ke.A,{spacing:4,className:(0,Z.A)("dataviews-view-list",x),children:Array.from(E.entries()).map(([N,U])=>(0,e.jsxs)(Ke.A,{spacing:2,children:[(0,e.jsx)("h3",{className:"dataviews-view-list__group-header",children:(0,p.nv)((0,p.__)("%1$s: %2$s"),be.label,N)}),U.map(ne=>{const Ie=F(ne);return(0,e.jsx)(fs,{view:w,idPrefix:Ie,actions:s,item:ne,isSelected:ne===C,onSelect:X,mediaField:D,titleField:S,descriptionField:k,otherFields:L,onDropdownTriggerKeyDown:me},Ie)})]},N))})}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(it.e,{id:P,render:(0,e.jsx)("div",{}),className:(0,Z.A)("dataviews-view-list",x),role:w.infiniteScrollEnabled?"feed":"grid",activeId:fe,setActiveId:Q,children:a.map((N,U)=>{const ne=F(N);return(0,e.jsx)(fs,{view:w,idPrefix:ne,actions:s,item:N,isSelected:N===C,onSelect:X,mediaField:D,titleField:S,descriptionField:k,otherFields:L,onDropdownTriggerKeyDown:me,posinset:w.infiniteScrollEnabled?U+1:void 0},ne)})}),te&&l&&(0,e.jsx)("p",{className:"dataviews-loading-more",children:(0,e.jsx)(re.Ay,{})})]})}const Bs=null;function _s(t){return(0,u.useMemo)(()=>t?.every(s=>s.supportsBulk),[t])}function Ls({selection:t,selectedItems:s,onChangeSelection:a,data:i,getItemId:r}){const l=s.length===i.length;return jsx(CheckboxControl,{className:"dataviews-view-table-selection-checkbox",__nextHasNoMarginBottom:!0,checked:l,indeterminate:!l&&!!s.length,onChange:()=>{if(l)a(t.filter(c=>!i.some(f=>c===r(f))));else{const c=new Set([...t,...i.map(f=>r(f))]);a(Array.from(c))}},"aria-label":l?__("Deselect all"):__("Select all")})}function Fs({actions:t,items:s,selection:a}){const i=useRegistry(),[r,l]=useState(null);return jsx(HStack,{expanded:!1,spacing:1,children:t.map(c=>{if(!("callback"in c))return null;const{id:f,label:w,icon:x,isPrimary:y,callback:P}=c,C=typeof w=="string"?w:w(s),S=y?"primary":"tertiary",D=f===r;return jsx(Button,{accessibleWhenDisabled:!0,icon:x,disabled:D||!a?.length,isBusy:D,onClick:async()=>{l(f),await P(s,{registry:i}),l(null)},size:"compact",variant:S,children:C},f)})})}function Hs(){const{data:t,selection:s,onChangeSelection:a,getItemId:i,actions:r=Bs}=useContext(DataViewsContext),l=s.length,c=_s(r),f=l>0?sprintf(_n("%d Item selected","%d Items selected",l),l):sprintf(_n("%d Item","%d Items",t.length),t.length),w=useMemo(()=>t.filter(x=>s.includes(i(x))),[s,i,t]);return jsxs(HStack,{expanded:!1,justify:"space-between",className:"dataviews-footer",children:[jsxs(HStack,{className:"dataviews-picker-footer__bulk-selection",expanded:!1,spacing:3,children:[c&&jsx(Ls,{selection:s,selectedItems:w,onChangeSelection:a,data:t,getItemId:i}),jsx("span",{className:"dataviews-bulk-actions-footer__item-count",children:f})]}),jsx(DataViewsPagination,{}),!!r?.length&&jsx("div",{className:"dataviews-picker-footer__actions",children:jsx(Fs,{actions:r,items:w,selection:s})})]})}const{Badge:Ws}=(0,A.T)(T.j);function os({view:t,multiselect:s,selection:a,onChangeSelection:i,getItemId:r,item:l,mediaField:c,titleField:f,descriptionField:w,regularFields:x,badgeFields:y,config:P,posinset:C,setsize:S}){const{showTitle:D=!0,showMedia:k=!0,showDescription:L=!0}=t,X=r(l),F=a.includes(X),ge=c?.render?(0,e.jsx)(c.render,{item:l,field:c,config:P}):null,fe=D&&f?.render?(0,e.jsx)(f.render,{item:l,field:f}):null;return(0,e.jsxs)(it.e.Item,{"aria-label":f?f.getValue({item:l})||(0,p.__)("(no title)"):void 0,render:({children:Q,...ie})=>(0,e.jsx)(Ke.A,{spacing:0,children:Q,...ie}),role:"option","aria-posinset":C,"aria-setsize":S,className:(0,Z.A)("dataviews-view-picker-grid__card",{"is-selected":F}),"aria-selected":F,onClick:()=>{if(F)i(a.filter(Q=>X!==Q));else{const Q=s?[...a,X]:[X];i(Q)}},children:[k&&ge&&(0,e.jsx)("div",{className:"dataviews-view-picker-grid__media",children:ge}),k&&ge&&(0,e.jsx)(Ge,{item:l,selection:a,onChangeSelection:i,getItemId:r,titleField:f,disabled:!1,"aria-hidden":!0,tabIndex:-1}),D&&(0,e.jsx)(g.A,{justify:"space-between",className:"dataviews-view-picker-grid__title-actions",children:(0,e.jsx)("div",{className:"dataviews-view-picker-grid__title-field dataviews-title-field",children:fe})}),(0,e.jsxs)(Ke.A,{spacing:1,children:[L&&w?.render&&(0,e.jsx)(w.render,{item:l,field:w}),!!y?.length&&(0,e.jsx)(g.A,{className:"dataviews-view-picker-grid__badge-fields",spacing:2,wrap:!0,alignment:"top",justify:"flex-start",children:y.map(Q=>(0,e.jsx)(Ws,{className:"dataviews-view-picker-grid__field-value",children:(0,e.jsx)(Q.render,{item:l,field:Q})},Q.id))}),!!x?.length&&(0,e.jsx)(Ke.A,{className:"dataviews-view-picker-grid__fields",spacing:1,children:x.map(Q=>(0,e.jsx)(Tt.A,{className:"dataviews-view-picker-grid__field",gap:1,justify:"flex-start",expanded:!0,style:{height:"auto"},direction:"row",children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Dt.A,{className:"dataviews-view-picker-grid__field-name",children:Q.header}),(0,e.jsx)(Dt.A,{className:"dataviews-view-picker-grid__field-value",style:{maxHeight:"none"},children:(0,e.jsx)(Q.render,{item:l,field:Q})})]})},Q.id))})]})]},X)}function hs({groupName:t,groupField:s,children:a}){const i=(0,It.A)(hs,"dataviews-view-picker-grid-group__header");return(0,e.jsxs)(Ke.A,{spacing:2,role:"group","aria-labelledby":i,children:[(0,e.jsx)("h3",{className:"dataviews-view-picker-grid-group__header",id:i,children:(0,p.nv)((0,p.__)("%1$s: %2$s"),s.label,t)}),a]},t)}function $s({actions:t,data:s,fields:a,getItemId:i,isLoading:r,onChangeSelection:l,selection:c,view:f,className:w,empty:x}){const{resizeObserverRef:y,paginationInfo:P,itemListLabel:C}=(0,u.useContext)(K),S=a.find(E=>E.id===f?.titleField),D=a.find(E=>E.id===f?.mediaField),k=a.find(E=>E.id===f?.descriptionField),L=f.fields??[],{regularFields:X,badgeFields:F}=L.reduce((E,N)=>{const U=a.find(Ie=>Ie.id===N);if(!U)return E;const ne=f.layout?.badgeFields?.includes(N)?"badgeFields":"regularFields";return E[ne].push(U),E},{regularFields:[],badgeFields:[]}),ge=!!s?.length,fe=f.layout?.previewSize,Q=_s(t),ie="900px",de=f.groupByField?a.find(E=>E.id===f.groupByField):null,Ae=de?Ut(s,de):null,ce=f.infiniteScrollEnabled&&!Ae,me=f?.page??1,te=f?.perPage??0,be=ce?P?.totalItems:void 0;return(0,e.jsxs)(e.Fragment,{children:[ge&&de&&Ae&&(0,e.jsx)(it.e,{virtualFocus:!0,orientation:"horizontal",role:"listbox","aria-multiselectable":Q,className:(0,Z.A)("dataviews-view-picker-grid",w),"aria-label":C,render:({children:E,...N})=>(0,e.jsx)(Ke.A,{spacing:4,children:E,...N}),children:Array.from(Ae.entries()).map(([E,N])=>(0,e.jsx)(hs,{groupName:E,groupField:de,children:(0,e.jsx)(Gt,{previewSize:fe,style:{gridTemplateColumns:fe&&`repeat(auto-fill, minmax(${fe}px, 1fr))`},"aria-busy":r,ref:y,children:N.map(U=>{const ne=(me-1)*te+s.indexOf(U)+1;return(0,e.jsx)(os,{view:f,multiselect:Q,selection:c,onChangeSelection:l,getItemId:i,item:U,mediaField:D,titleField:S,descriptionField:k,regularFields:X,badgeFields:F,config:{sizes:ie},posinset:ne,setsize:be},i(U))})})},E))}),ge&&!Ae&&(0,e.jsx)(it.e,{render:(0,e.jsx)(Gt,{className:(0,Z.A)("dataviews-view-picker-grid",w),previewSize:fe,"aria-busy":r,ref:y}),virtualFocus:!0,orientation:"horizontal",role:"listbox","aria-multiselectable":Q,"aria-label":C,children:s.map((E,N)=>{let U=ce?N+1:void 0;return ce||(U=(me-1)*te+N+1),(0,e.jsx)(os,{view:f,multiselect:Q,selection:c,onChangeSelection:l,getItemId:i,item:E,mediaField:D,titleField:S,descriptionField:k,regularFields:X,badgeFields:F,config:{sizes:ie},posinset:U,setsize:be},i(E))})}),!ge&&(0,e.jsx)("div",{className:(0,Z.A)({"dataviews-loading":r,"dataviews-no-results":!r}),children:r?(0,e.jsx)("p",{children:(0,e.jsx)(re.Ay,{})}):x}),ge&&r&&(0,e.jsx)("p",{className:"dataviews-loading-more",children:(0,e.jsx)(re.Ay,{})})]})}var Yt=$s,Us=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/range-control/index.js");const Ks=[{value:120,breakpoint:1},{value:170,breakpoint:1},{value:230,breakpoint:1},{value:290,breakpoint:1112},{value:350,breakpoint:1636},{value:430,breakpoint:588}];function gs(){const t=(0,u.useContext)(K),s=t.view,a=Ks.filter(c=>t.containerWidth>=c.breakpoint),i=s.layout?.previewSize??230,r=a.map((c,f)=>({...c,index:f})).filter(c=>c.value<=i).sort((c,f)=>f.value-c.value)[0]?.index??0,l=a.map((c,f)=>({value:f}));return(0,e.jsx)(Us.A,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,showTooltip:!1,label:(0,p.__)("Preview size"),value:r,min:0,max:a.length-1,withInputField:!1,onChange:(c=0)=>{t.onChangeView({...s,layout:{...s.layout,previewSize:a[c].value}})},step:1,marks:l})}var ns=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control/component.js"),Xt=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option/component.js");function Gs(){const t=(0,u.useContext)(K),s=t.view;return(0,e.jsxs)(ns.A,{__nextHasNoMarginBottom:!0,size:"__unstable-large",label:(0,p.__)("Density"),value:s.layout?.density||"balanced",onChange:a=>{t.onChangeView({...s,layout:{...s.layout,density:a}})},isBlock:!0,children:[(0,e.jsx)(Xt.A,{value:"comfortable",label:(0,p._x)("Comfortable","Density option for DataView layout")},"comfortable"),(0,e.jsx)(Xt.A,{value:"balanced",label:(0,p._x)("Balanced","Density option for DataView layout")},"balanced"),(0,e.jsx)(Xt.A,{value:"compact",label:(0,p._x)("Compact","Density option for DataView layout")},"compact")]})}const zt=[{type:I.Ad,label:(0,p.__)("Table"),component:Nt,icon:xe,viewConfigOptions:Gs},{type:I.Ul,label:(0,p.__)("Grid"),component:ms,icon:he,viewConfigOptions:gs},{type:I.mA,label:(0,p.__)("List"),component:ws,icon:(0,p.V8)()?De:Ne},{type:I.dL,label:(0,p.__)("Grid"),component:Yt,icon:he,viewConfigOptions:gs,isPicker:!0}],{Menu:Bt}=(0,A.T)(T.j);function bs({filters:t,view:s,onChangeView:a,setOpenedFilter:i,triggerProps:r}){const l=t.filter(c=>!c.isVisible);return(0,e.jsxs)(Bt,{children:[(0,e.jsx)(Bt.TriggerButton,{...r}),(0,e.jsx)(Bt.Popover,{children:l.map(c=>(0,e.jsx)(Bt.Item,{onClick:()=>{i(c.field),a({...s,page:1,filters:[...s.filters||[],{field:c.field,value:void 0,operator:c.operators[0]}]})},children:(0,e.jsx)(Bt.ItemLabel,{children:c.name})},c.field))})]})}function Ys({filters:t,view:s,onChangeView:a,setOpenedFilter:i},r){if(!t.length||t.every(({isPrimary:c})=>c))return null;const l=t.filter(c=>!c.isVisible);return(0,e.jsx)(bs,{triggerProps:{render:(0,e.jsx)(ke.Ay,{accessibleWhenDisabled:!0,size:"compact",className:"dataviews-filters-button",variant:"tertiary",disabled:!l.length,ref:r}),children:(0,p.__)("Add filter")},filters:t,view:s,onChangeView:a,setOpenedFilter:i})}var Xs=(0,u.forwardRef)(Ys);function Zs(){const{filters:t,view:s,onChangeView:a,setOpenedFilter:i,isShowingFilter:r,setIsShowingFilter:l}=(0,u.useContext)(K),c=(0,u.useRef)(null),f=(0,u.useCallback)(S=>{a(S),l(!0)},[a,l]),x=!!t.filter(S=>S.isVisible).length;if(t.length===0)return null;const y={label:(0,p.__)("Add filter"),"aria-expanded":!1,isPressed:!1},P={label:(0,p._x)("Filter","verb"),"aria-expanded":r,isPressed:r,onClick:()=>{r||i(null),l(!r)}},C=(0,e.jsx)(ke.Ay,{ref:c,className:"dataviews-filters__visibility-toggle",size:"compact",icon:qt,...x?P:y});return(0,e.jsx)("div",{className:"dataviews-filters__container-visibility-toggle",children:x?(0,e.jsx)(Js,{buttonRef:c,filtersCount:s.filters?.length,children:C}):(0,e.jsx)(bs,{filters:t,view:s,onChangeView:f,setOpenedFilter:i,triggerProps:{render:C}})})}function Js({buttonRef:t,filtersCount:s,children:a}){return(0,u.useEffect)(()=>()=>{t.current?.focus()},[t]),(0,e.jsxs)(e.Fragment,{children:[a,!!s&&(0,e.jsx)("span",{className:"dataviews-filters-toggle__count",children:s})]})}var xs=Zs,ls=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/select-control/index.js"),ys=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/dropdown/index.js"),Le=d("../../../node_modules/.pnpm/@wordpress+element@6.33.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),js=d("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/APTFW6PT.js"),Ye=d("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/VOQWLFSQ.js"),ni=(0,u.createContext)(null),li=(0,u.createContext)(null),Lt=(0,Ye.B0)([js.ws],[js.aN]),Zt=Lt.useContext,Qs=Lt.useScopedContext,qs=Lt.useProviderContext,ei=Lt.ContextProvider,di=Lt.ScopedContextProvider,Jt=d("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/RUY5BUJG.js"),As=d("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/B7UTNDHN.js"),At=d("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/RTNCFSKZ.js"),je=d("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/5GGHRIN3.js"),Oe=d("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js"),o=d("../../../node_modules/.pnpm/@ariakit+core@0.4.16/node_modules/@ariakit/core/esm/__chunks/O6E4ZWCP.js"),n=d("../../../node_modules/.pnpm/@ariakit+core@0.4.16/node_modules/@ariakit/core/esm/__chunks/MD3RIO2T.js"),m=d("../../../node_modules/.pnpm/@ariakit+core@0.4.16/node_modules/@ariakit/core/esm/__chunks/C34RJTDU.js"),b=d("../../../node_modules/.pnpm/@ariakit+core@0.4.16/node_modules/@ariakit/core/esm/__chunks/EWA2WL6G.js"),j=d("../../../node_modules/.pnpm/@ariakit+core@0.4.16/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js"),O=d("../../../node_modules/.pnpm/@ariakit+core@0.4.16/node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js"),H=(0,o.nr)()&&(0,o.CN)();function ae(t={}){var s=t,{tag:a}=s,i=(0,O.YG)(s,["tag"]);const r=(0,b.od)(i.store,(0,b.Up)(a,["value","rtl"]));(0,b.UE)(i,r);const l=a?.getState(),c=r?.getState(),f=(0,j.Jh)(i.activeId,c?.activeId,i.defaultActiveId,null),w=(0,m.z)((0,O.ko)((0,O.IA)({},i),{activeId:f,includesBaseElement:(0,j.Jh)(i.includesBaseElement,c?.includesBaseElement,!0),orientation:(0,j.Jh)(i.orientation,c?.orientation,"vertical"),focusLoop:(0,j.Jh)(i.focusLoop,c?.focusLoop,!0),focusWrap:(0,j.Jh)(i.focusWrap,c?.focusWrap,!0),virtualFocus:(0,j.Jh)(i.virtualFocus,c?.virtualFocus,!0)})),x=(0,n.N)((0,O.ko)((0,O.IA)({},i),{placement:(0,j.Jh)(i.placement,c?.placement,"bottom-start")})),y=(0,j.Jh)(i.value,c?.value,i.defaultValue,""),P=(0,j.Jh)(i.selectedValue,c?.selectedValue,l?.values,i.defaultSelectedValue,""),C=Array.isArray(P),S=(0,O.ko)((0,O.IA)((0,O.IA)({},w.getState()),x.getState()),{value:y,selectedValue:P,resetValueOnSelect:(0,j.Jh)(i.resetValueOnSelect,c?.resetValueOnSelect,C),resetValueOnHide:(0,j.Jh)(i.resetValueOnHide,c?.resetValueOnHide,C&&!a),activeValue:c?.activeValue}),D=(0,b.y$)(S,w,x,r);return H&&(0,b.mj)(D,()=>(0,b.OH)(D,["virtualFocus"],()=>{D.setState("virtualFocus",!1)})),(0,b.mj)(D,()=>{if(a)return(0,j.cy)((0,b.OH)(D,["selectedValue"],k=>{Array.isArray(k.selectedValue)&&a.setValues(k.selectedValue)}),(0,b.OH)(a,["values"],k=>{D.setState("selectedValue",k.values)}))}),(0,b.mj)(D,()=>(0,b.OH)(D,["resetValueOnHide","mounted"],k=>{k.resetValueOnHide&&(k.mounted||D.setState("value",y))})),(0,b.mj)(D,()=>(0,b.OH)(D,["open"],k=>{k.open||(D.setState("activeId",f),D.setState("moves",0))})),(0,b.mj)(D,()=>(0,b.OH)(D,["moves","activeId"],(k,L)=>{k.moves===L.moves&&D.setState("activeValue",void 0)})),(0,b.mj)(D,()=>(0,b.vA)(D,["moves","renderedItems"],(k,L)=>{if(k.moves===L.moves)return;const{activeId:X}=D.getState(),F=w.item(X);D.setState("activeValue",F?.value)})),(0,O.ko)((0,O.IA)((0,O.IA)((0,O.IA)({},x),w),D),{tag:a,setValue:k=>D.setState("value",k),resetValue:()=>D.setState("value",S.value),setSelectedValue:k=>D.setState("selectedValue",k)})}function q(t){const s=Zt();return t=(0,Oe.ko)((0,Oe.IA)({},t),{tag:t.tag!==void 0?t.tag:s}),(0,As.YC)(t)}function pe(t,s,a){return(0,je.w5)(s,[a.tag]),(0,At.Tz)(t,a,"value","setValue"),(0,At.Tz)(t,a,"selectedValue","setSelectedValue"),(0,At.Tz)(t,a,"resetValueOnHide"),(0,At.Tz)(t,a,"resetValueOnSelect"),Object.assign((0,As.YO)((0,Jt.o)(t,s,a),s,a),{tag:a.tag})}function ee(t={}){t=q(t);const[s,a]=(0,At.Pj)(ae,t);return pe(s,a,t)}var R=d("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/OLVWQA7U.js");function le(t={}){const s=ee(t);return(0,e.jsx)(R.CE,{value:s,children:t.children})}var J="label",$e=(0,Ye.ab)(function(s){var a=s,{store:i}=a,r=(0,Oe.YG)(a,["store"]);const l=(0,R.PV)();i=i||l,(0,j.V1)(i,!1);const c=i.useState(f=>{var w;return(w=f.baseElement)==null?void 0:w.id});return r=(0,Oe.IA)({htmlFor:c},r),(0,j.HR)(r)}),oe=(0,Ye.ph)((0,Ye.Rf)(function(s){const a=$e(s);return(0,Ye.n)(J,a)})),_e=d("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/NSTBQJLB.js"),ze=d("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HMCFFQCB.js"),Fe=d("../../../node_modules/.pnpm/@ariakit+core@0.4.16/node_modules/@ariakit/core/esm/__chunks/37JWRFYW.js"),at=d("../../../node_modules/.pnpm/@ariakit+core@0.4.16/node_modules/@ariakit/core/esm/utils/events.js"),xt=d("../../../node_modules/.pnpm/@ariakit+core@0.4.16/node_modules/@ariakit/core/esm/utils/focus.js"),vt="input";function Et(t,s,a){if(!a)return!1;const i=t.find(r=>!r.disabled&&r.value);return i?.value===s}function Ot(t,s){return!s||t==null?!1:(t=(0,j.J2)(t),s.length>t.length&&s.toLowerCase().indexOf(t.toLowerCase())===0)}function rt(t){return t.type==="input"}function ft(t){return t==="inline"||t==="list"||t==="both"||t==="none"}function Te(t){const s=t.find(a=>{var i;return a.disabled?!1:((i=a.element)==null?void 0:i.getAttribute("role"))!=="tab"});return s?.id}var tt=(0,Ye.ab)(function(s){var a=s,{store:i,focusable:r=!0,autoSelect:l=!1,getAutoSelectId:c,setValueOnChange:f,showMinLength:w=0,showOnChange:x,showOnMouseDown:y,showOnClick:P=y,showOnKeyDown:C,showOnKeyPress:S=C,blurActiveItemOnClick:D,setValueOnClick:k=!0,moveOnKeyPress:L=!0,autoComplete:X="list"}=a,F=(0,Oe.YG)(a,["store","focusable","autoSelect","getAutoSelectId","setValueOnChange","showMinLength","showOnChange","showOnMouseDown","showOnClick","showOnKeyDown","showOnKeyPress","blurActiveItemOnClick","setValueOnClick","moveOnKeyPress","autoComplete"]);const ge=(0,R.PV)();i=i||ge,(0,j.V1)(i,!1);const fe=(0,u.useRef)(null),[Q,ie]=(0,je.CH)(),de=(0,u.useRef)(!1),Ae=(0,u.useRef)(!1),ce=i.useState(z=>z.virtualFocus&&l),me=X==="inline"||X==="both",[te,be]=(0,u.useState)(me);(0,je.Kp)(()=>{me&&be(!0)},[me]);const E=i.useState("value"),N=(0,u.useRef)();(0,u.useEffect)(()=>(0,b.OH)(i,["selectedValue","activeId"],(z,Pe)=>{N.current=Pe.selectedValue}),[]);const U=i.useState(z=>{var Pe;if(me&&te&&!(z.activeValue&&Array.isArray(z.selectedValue)&&(z.selectedValue.includes(z.activeValue)||(Pe=N.current)!=null&&Pe.includes(z.activeValue))))return z.activeValue}),ne=i.useState("renderedItems"),Ie=i.useState("open"),He=i.useState("contentElement"),pt=(0,u.useMemo)(()=>{if(!me||!te)return E;if(Et(ne,U,ce)){if(Ot(E,U)){const Pe=U?.slice(E.length)||"";return E+Pe}return E}return U||E},[me,te,ne,U,ce,E]);(0,u.useEffect)(()=>{const z=fe.current;if(!z)return;const Pe=()=>be(!0);return z.addEventListener("combobox-item-move",Pe),()=>{z.removeEventListener("combobox-item-move",Pe)}},[]),(0,u.useEffect)(()=>{if(!me||!te||!U||!Et(ne,U,ce)||!Ot(E,U))return;let Pe=j.lQ;return queueMicrotask(()=>{const Je=fe.current;if(!Je)return;const{start:Qe,end:wt}=(0,Fe.Zy)(Je),Ct=E.length,nt=U.length;(0,Fe.eG)(Je,Ct,nt),Pe=()=>{if(!(0,xt.AJ)(Je))return;const{start:Ht,end:nr}=(0,Fe.Zy)(Je);Ht===Ct&&nr===nt&&(0,Fe.eG)(Je,Qe,wt)}}),()=>Pe()},[Q,me,te,U,ne,ce,E]);const jt=(0,u.useRef)(null),kt=(0,je._q)(c),Ve=(0,u.useRef)(null);(0,u.useEffect)(()=>{if(!Ie||!He)return;const z=(0,Fe.qj)(He);if(!z)return;jt.current=z;const Pe=()=>{de.current=!1},Je=()=>{if(!i||!de.current)return;const{activeId:wt}=i.getState();wt!==null&&wt!==Ve.current&&(de.current=!1)},Qe={passive:!0,capture:!0};return z.addEventListener("wheel",Pe,Qe),z.addEventListener("touchmove",Pe,Qe),z.addEventListener("scroll",Je,Qe),()=>{z.removeEventListener("wheel",Pe,!0),z.removeEventListener("touchmove",Pe,!0),z.removeEventListener("scroll",Je,!0)}},[Ie,He,i]),(0,je.UQ)(()=>{E&&(Ae.current||(de.current=!0))},[E]),(0,je.UQ)(()=>{ce!=="always"&&Ie||(de.current=Ie)},[ce,Ie]);const et=i.useState("resetValueOnSelect");(0,je.w5)(()=>{var z,Pe;const Je=de.current;if(!i||!Ie||!Je&&!et)return;const{baseElement:Qe,contentElement:wt,activeId:Ct}=i.getState();if(!(Qe&&!(0,xt.AJ)(Qe))){if(wt?.hasAttribute("data-placing")){const nt=new MutationObserver(ie);return nt.observe(wt,{attributeFilter:["data-placing"]}),()=>nt.disconnect()}if(ce&&Je){const nt=kt(ne),Ht=nt!==void 0?nt:(z=Te(ne))!=null?z:i.first();Ve.current=Ht,i.move(Ht??null)}else{const nt=(Pe=i.item(Ct||i.first()))==null?void 0:Pe.element;nt&&"scrollIntoView"in nt&&nt.scrollIntoView({block:"nearest",inline:"nearest"})}}},[i,Ie,Q,E,ce,et,kt,ne]),(0,u.useEffect)(()=>{if(!me)return;const z=fe.current;if(!z)return;const Pe=[z,He].filter(Qe=>!!Qe),Je=Qe=>{Pe.every(wt=>(0,at.aG)(Qe,wt))&&i?.setValue(pt)};for(const Qe of Pe)Qe.addEventListener("focusout",Je);return()=>{for(const Qe of Pe)Qe.removeEventListener("focusout",Je)}},[me,He,i,pt]);const Se=z=>z.currentTarget.value.length>=w,ot=F.onChange,cs=(0,je.O4)(x??Se),Ft=(0,je.O4)(f??!i.tag),ii=(0,je._q)(z=>{if(ot?.(z),z.defaultPrevented||!i)return;const Pe=z.currentTarget,{value:Je,selectionStart:Qe,selectionEnd:wt}=Pe,Ct=z.nativeEvent;if(de.current=!0,rt(Ct)&&(Ct.isComposing&&(de.current=!1,Ae.current=!0),me)){const nt=Ct.inputType==="insertText"||Ct.inputType==="insertCompositionText",Ht=Qe===Je.length;be(nt&&Ht)}if(Ft(z)){const nt=Je===i.getState().value;i.setValue(Je),queueMicrotask(()=>{(0,Fe.eG)(Pe,Qe,wt)}),me&&ce&&nt&&ie()}cs(z)&&i.show(),(!ce||!de.current)&&i.setActiveId(null)}),Vs=F.onCompositionEnd,ai=(0,je._q)(z=>{de.current=!0,Ae.current=!1,Vs?.(z),!z.defaultPrevented&&ce&&ie()}),Ri=F.onMouseDown,Ja=(0,je.O4)(D??(()=>!!i?.getState().includesBaseElement)),Qa=(0,je.O4)(k),qa=(0,je.O4)(P??Se),er=(0,je._q)(z=>{Ri?.(z),!z.defaultPrevented&&(z.button||z.ctrlKey||i&&(Ja(z)&&i.setActiveId(null),Qa(z)&&i.setValue(pt),qa(z)&&(0,at.nz)(z.currentTarget,"mouseup",i.show)))}),zi=F.onKeyDown,tr=(0,je.O4)(S??Se),sr=(0,je._q)(z=>{if(zi?.(z),z.repeat||(de.current=!1),z.defaultPrevented||z.ctrlKey||z.altKey||z.shiftKey||z.metaKey||!i)return;const{open:Pe}=i.getState();Pe||(z.key==="ArrowUp"||z.key==="ArrowDown")&&tr(z)&&(z.preventDefault(),i.show())}),Bi=F.onBlur,ir=(0,je._q)(z=>{de.current=!1,Bi?.(z),z.defaultPrevented}),ar=(0,je.Bi)(F.id),rr=ft(X)?X:void 0,or=i.useState(z=>z.activeId===null);return F=(0,Oe.ko)((0,Oe.IA)({id:ar,role:"combobox","aria-autocomplete":rr,"aria-haspopup":(0,Fe.Tc)(He,"listbox"),"aria-expanded":Ie,"aria-controls":He?.id,"data-active-item":or||void 0,value:pt},F),{ref:(0,je.SV)(fe,F.ref),onChange:ii,onCompositionEnd:ai,onMouseDown:er,onKeyDown:sr,onBlur:ir}),F=(0,_e.T)((0,Oe.ko)((0,Oe.IA)({store:i,focusable:r},F),{moveOnKeyPress:z=>(0,j.zO)(L,z)?!1:(me&&be(!0),!0)})),F=(0,ze.E)((0,Oe.IA)({store:i},F)),(0,Oe.IA)({autoComplete:"off"},F)}),Ee=(0,Ye.Rf)(function(s){const a=tt(s);return(0,Ye.n)(vt,a)}),st=d("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/K4R5DNTX.js"),ds="div",ti=(0,Ye.ab)(function(s){var a=s,{store:i,alwaysVisible:r}=a,l=(0,Oe.YG)(a,["store","alwaysVisible"]);const c=(0,R.UW)(!0),f=(0,R.Ay)();i=i||f;const w=!!i&&i===c;(0,j.V1)(i,!1);const x=(0,u.useRef)(null),y=(0,je.Bi)(l.id),P=i.useState("mounted"),C=(0,st.dK)(P,l.hidden,r),S=C?(0,Oe.ko)((0,Oe.IA)({},l.style),{display:"none"}):l.style,D=i.useState(ie=>Array.isArray(ie.selectedValue)),k=(0,je.Cy)(x,"role",l.role),X=(k==="listbox"||k==="tree"||k==="grid")&&D||void 0,[F,ge]=(0,u.useState)(!1),fe=i.useState("contentElement");(0,je.UQ)(()=>{if(!P)return;const ie=x.current;if(!ie||fe!==ie)return;const de=()=>{ge(!!ie.querySelector("[role='listbox']"))},Ae=new MutationObserver(de);return Ae.observe(ie,{subtree:!0,childList:!0,attributeFilter:["role"]}),de(),()=>Ae.disconnect()},[P,fe]),F||(l=(0,Oe.IA)({role:"listbox","aria-multiselectable":X},l)),l=(0,je.w7)(l,ie=>(0,e.jsx)(R.Ky,{value:i,children:(0,e.jsx)(R.Hf.Provider,{value:k,children:ie})}),[i,k]);const Q=y&&(!c||!w)?i.setContentElement:null;return l=(0,Oe.ko)((0,Oe.IA)({id:y,hidden:C},l),{ref:(0,je.SV)(Q,x,l.ref),style:S}),(0,j.HR)(l)}),ci=(0,Ye.Rf)(function(s){const a=ti(s);return(0,Ye.n)(ds,a)}),ui=d("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/IABE5EV2.js"),ks=d("../../../node_modules/.pnpm/@ariakit+react-core@0.4.19_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SBSPVDDI.js"),Li="div";function Fi(t,s){if(s!=null)return t==null?!1:Array.isArray(t)?t.includes(s):t===s}function Hi(t){var s;return(s={menu:"menuitem",listbox:"option",tree:"treeitem"}[t])!=null?s:"option"}var Wi=(0,Ye.ab)(function(s){var a=s,{store:i,value:r,hideOnClick:l,setValueOnClick:c,selectValueOnClick:f=!0,resetValueOnSelect:w,focusOnHover:x=!1,moveOnKeyPress:y=!0,getItem:P}=a,C=(0,Oe.YG)(a,["store","value","hideOnClick","setValueOnClick","selectValueOnClick","resetValueOnSelect","focusOnHover","moveOnKeyPress","getItem"]),S;const D=(0,R.UW)();i=i||D,(0,j.V1)(i,!1);const{resetValueOnSelectState:k,multiSelectable:L,selected:X}=(0,At.PX)(i,{resetValueOnSelectState:"resetValueOnSelect",multiSelectable(E){return Array.isArray(E.selectedValue)},selected(E){return Fi(E.selectedValue,r)}}),F=(0,u.useCallback)(E=>{const N=(0,Oe.ko)((0,Oe.IA)({},E),{value:r});return P?P(N):N},[r,P]);c=c??!L,l=l??(r!=null&&!L);const ge=C.onClick,fe=(0,je.O4)(c),Q=(0,je.O4)(f),ie=(0,je.O4)((S=w??k)!=null?S:L),de=(0,je.O4)(l),Ae=(0,je._q)(E=>{ge?.(E),!E.defaultPrevented&&((0,at.RN)(E)||(0,at.$b)(E)||(r!=null&&(Q(E)&&(ie(E)&&i?.resetValue(),i?.setSelectedValue(N=>Array.isArray(N)?N.includes(r)?N.filter(U=>U!==r):[...N,r]:r)),fe(E)&&i?.setValue(r)),de(E)&&i?.hide()))}),ce=C.onKeyDown,me=(0,je._q)(E=>{if(ce?.(E),E.defaultPrevented)return;const N=i?.getState().baseElement;if(!N||(0,xt.AJ)(N))return;(E.key.length===1||E.key==="Backspace"||E.key==="Delete")&&(queueMicrotask(()=>N.focus()),(0,Fe.mB)(N)&&i?.setValue(N.value))});L&&X!=null&&(C=(0,Oe.IA)({"aria-selected":X},C)),C=(0,je.w7)(C,E=>(0,e.jsx)(R.L7.Provider,{value:r,children:(0,e.jsx)(R.Hh.Provider,{value:X??!1,children:E})}),[r,X]);const te=(0,u.useContext)(R.Hf);C=(0,Oe.ko)((0,Oe.IA)({role:Hi(te),children:r},C),{onClick:Ae,onKeyDown:me});const be=(0,je.O4)(y);return C=(0,ks.k)((0,Oe.ko)((0,Oe.IA)({store:i},C),{getItem:F,moveOnKeyPress:E=>{if(!be(E))return!1;const N=new Event("combobox-item-move"),U=i?.getState().baseElement;return U?.dispatchEvent(N),!0}})),C=(0,ui.T)((0,Oe.IA)({store:i,focusOnHover:x},C)),C}),$i=(0,Ye.ph)((0,Ye.Rf)(function(s){const a=Wi(s);return(0,Ye.n)(Li,a)})),Ui=d("../../../node_modules/.pnpm/@ariakit+core@0.4.16/node_modules/@ariakit/core/esm/__chunks/7PRQYBBV.js"),Ki="span";function pi(t){return(0,j.J2)(t).toLowerCase()}function Gi(t,s){const a=[];for(const i of s){let r=0;const l=i.length;for(;t.indexOf(i,r)!==-1;){const c=t.indexOf(i,r);c!==-1&&a.push([c,l]),r=c+1}}return a}function Yi(t){return t.filter(([s,a],i,r)=>!r.some(([l,c],f)=>f!==i&&l<=s&&l+c>=s+a))}function Xi(t){return t.sort(([s],[a])=>s-a)}function Zi(t,s){if(!t||!s)return t;const a=(0,Ui.$r)(s).filter(Boolean).map(pi),i=[],r=(w,x=!1)=>(0,e.jsx)("span",{"data-autocomplete-value":x?"":void 0,"data-user-value":x?void 0:"",children:w},i.length),l=Xi(Yi(Gi(pi(t),new Set(a))));if(!l.length)return i.push(r(t,!0)),i;const[c]=l[0];return[t.slice(0,c),...l.flatMap(([w,x],y)=>{var P;const C=t.slice(w,w+x),S=(P=l[y+1])==null?void 0:P[0],D=t.slice(w+x,S);return[C,D]})].forEach((w,x)=>{w&&i.push(r(w,x%2===0))}),i}var Ji=(0,Ye.ab)(function(s){var a=s,{store:i,value:r,userValue:l}=a,c=(0,Oe.YG)(a,["store","value","userValue"]);const f=(0,R.UW)();i=i||f;const w=(0,u.useContext)(R.L7),x=r??w,y=(0,At.O$)(i,C=>l??C?.value),P=(0,u.useMemo)(()=>{if(x)return y?Zi(x,y):x},[x,y]);return c=(0,Oe.IA)({children:P},c),(0,j.HR)(c)}),Qi=(0,Ye.Rf)(function(s){const a=Ji(s);return(0,Ye.n)(Ki,a)}),qi=d("../../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js"),ea=d.n(qi),ta=d("../../../node_modules/.pnpm/@wordpress+icons@11.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js"),sa=d("../../../node_modules/.pnpm/@wordpress+icons@11.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/search.js");const ia=[],si=(t,s)=>t.singleSelection?s?.value:Array.isArray(s?.value)?s.value:!Array.isArray(s?.value)&&s?.value?[s.value]:ia;var mi=d("../../../node_modules/.pnpm/@wordpress+dataviews@10.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e024960755d6217a2bba17183c44eb48/node_modules/@wordpress/dataviews/build-module/hooks/use-elements.js");function vi(t=""){return ea()(t.trim().toLowerCase())}const fi=(t,s,a)=>t.singleSelection?a:Array.isArray(s?.value)?s.value.includes(a)?s.value.filter(i=>i!==a):[...s.value,a]:[a];function wi(t,s){return`${t}-${s}`}const _i=({selected:t})=>(0,e.jsx)("span",{className:(0,Z.A)("dataviews-filters__search-widget-listitem-multi-selection",{"is-selected":t}),children:t&&(0,e.jsx)(_t.A,{icon:ta.A})}),hi=({selected:t})=>(0,e.jsx)("span",{className:(0,Z.A)("dataviews-filters__search-widget-listitem-single-selection",{"is-selected":t})});function gi({view:t,filter:s,onChangeView:a}){const i=(0,It.A)(gi,"dataviews-filter-list-box"),[r,l]=(0,u.useState)(s.operators?.length===1?void 0:null),c=t.filters?.find(w=>w.field===s.field),f=si(s,c);return(0,e.jsx)(it.e,{virtualFocus:!0,focusLoop:!0,activeId:r,setActiveId:l,role:"listbox",className:"dataviews-filters__search-widget-listbox","aria-label":(0,p.nv)((0,p.__)("List of: %1$s"),s.name),onFocusVisible:()=>{!r&&s.elements.length&&l(wi(i,s.elements[0].value))},render:(0,e.jsx)(it.e.Typeahead,{}),children:s.elements.map(w=>(0,e.jsxs)(it.e.Hover,{render:(0,e.jsx)(it.e.Item,{id:wi(i,w.value),render:(0,e.jsx)("div",{"aria-label":w.label,role:"option",className:"dataviews-filters__search-widget-listitem"}),onClick:()=>{const x=c?[...(t.filters??[]).map(y=>y.field===s.field?{...y,operator:c.operator||s.operators[0],value:fi(s,c,w.value)}:y)]:[...t.filters??[],{field:s.field,operator:s.operators[0],value:fi(s,c,w.value)}];a({...t,page:1,filters:x})}}),children:[s.singleSelection&&(0,e.jsx)(hi,{selected:f===w.value}),!s.singleSelection&&(0,e.jsx)(_i,{selected:f.includes(w.value)}),(0,e.jsx)("span",{children:w.label})]},w.value))})}function aa({view:t,filter:s,onChangeView:a}){const[i,r]=(0,u.useState)(""),l=(0,u.useDeferredValue)(i),c=t.filters?.find(x=>x.field===s.field),f=si(s,c),w=(0,u.useMemo)(()=>{const x=vi(l);return s.elements.filter(y=>vi(y.label).includes(x))},[s.elements,l]);return(0,e.jsxs)(le,{selectedValue:f,setSelectedValue:x=>{const y=c?[...(t.filters??[]).map(P=>P.field===s.field?{...P,operator:c.operator||s.operators[0],value:x}:P)]:[...t.filters??[],{field:s.field,operator:s.operators[0],value:x}];a({...t,page:1,filters:y})},setValue:r,children:[(0,e.jsxs)("div",{className:"dataviews-filters__search-widget-filter-combobox__wrapper",children:[(0,e.jsx)(oe,{render:(0,e.jsx)(vs.A,{children:(0,p.__)("Search items")}),children:(0,p.__)("Search items")}),(0,e.jsx)(Ee,{autoSelect:"always",placeholder:(0,p.__)("Search"),className:"dataviews-filters__search-widget-filter-combobox__input"}),(0,e.jsx)("div",{className:"dataviews-filters__search-widget-filter-combobox__icon",children:(0,e.jsx)(_t.A,{icon:sa.A})})]}),(0,e.jsxs)(ci,{className:"dataviews-filters__search-widget-filter-combobox-list",alwaysVisible:!0,children:[w.map(x=>(0,e.jsxs)($i,{resetValueOnSelect:!1,value:x.value,className:"dataviews-filters__search-widget-listitem",hideOnClick:!1,setValueOnClick:!1,focusOnHover:!0,children:[s.singleSelection&&(0,e.jsx)(hi,{selected:f===x.value}),!s.singleSelection&&(0,e.jsx)(_i,{selected:f.includes(x.value)}),(0,e.jsxs)("span",{children:[(0,e.jsx)(Qi,{className:"dataviews-filters__search-widget-filter-combobox-item-value",value:x.label}),!!x.description&&(0,e.jsx)("span",{className:"dataviews-filters__search-widget-listitem-description",children:x.description})]})]},x.value)),!w.length&&(0,e.jsx)("p",{children:(0,p.__)("No results found")})]})]})}function ra(t){const{elements:s,isLoading:a}=(0,mi.A)({elements:t.filter.elements,getElements:t.filter.getElements});if(a)return(0,e.jsx)("div",{className:"dataviews-filters__search-widget-no-elements",children:(0,e.jsx)(re.Ay,{})});if(s.length===0)return(0,e.jsx)("div",{className:"dataviews-filters__search-widget-no-elements",children:(0,p.__)("No elements found")});const i=s.length>10?aa:gi;return(0,e.jsx)(i,{...t,filter:{...t.filter,elements:s}})}var oa=d("../../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/es6/index.js"),na=d.n(oa),la=d("../../../node_modules/.pnpm/@wordpress+compose@7.33.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-event/index.js");function da({filter:t,view:s,onChangeView:a,fields:i}){const r=s.filters?.find(x=>x.field===t.field),l=si(t,r),c=(0,u.useMemo)(()=>{const x=i.find(y=>y.id===t.field);return x&&{...x,isValid:{required:!1,custom:()=>null},getValue:({item:y})=>y[x.id],setValue:({value:y})=>({[x.id]:y})}},[i,t.field]),f=(0,u.useMemo)(()=>(s.filters??[]).reduce((x,y)=>(x[y.field]=y.value,x),{}),[s.filters]),w=(0,la.A)(x=>{if(!c||!r)return;const y=c.getValue({item:x});na()(y,l)||a({...s,filters:(s.filters??[]).map(P=>P.field===t.field?{...P,operator:r.operator||t.operators[0],value:y===""?void 0:y}:P)})});return!c||!c.Edit||!r?null:(0,e.jsx)(Tt.A,{className:"dataviews-filters__user-input-widget",gap:2.5,direction:"column",children:(0,e.jsx)(c.Edit,{hideLabelFromVision:!0,data:f,field:c,operator:r.operator,onChange:w})})}const ca="Enter",ua=" ",pa=({activeElements:t,filterInView:s,filter:a})=>{if(t===void 0||t.length===0)return a.name;const i={Name:(0,e.jsx)("span",{className:"dataviews-filters__summary-filter-text-name"}),Value:(0,e.jsx)("span",{className:"dataviews-filters__summary-filter-text-value"})};if(s?.operator===I.ld)return(0,Le.A)((0,p.nv)((0,p.__)("<Name>%1$s is any: </Name><Value>%2$s</Value>"),a.name,t.map(r=>r.label).join(", ")),i);if(s?.operator===I.Vw)return(0,Le.A)((0,p.nv)((0,p.__)("<Name>%1$s is none: </Name><Value>%2$s</Value>"),a.name,t.map(r=>r.label).join(", ")),i);if(s?.operator===I.y5)return(0,Le.A)((0,p.nv)((0,p.__)("<Name>%1$s is all: </Name><Value>%2$s</Value>"),a.name,t.map(r=>r.label).join(", ")),i);if(s?.operator===I.UX)return(0,Le.A)((0,p.nv)((0,p.__)("<Name>%1$s is not all: </Name><Value>%2$s</Value>"),a.name,t.map(r=>r.label).join(", ")),i);if(s?.operator===I.gm)return(0,Le.A)((0,p.nv)((0,p.__)("<Name>%1$s is: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I._k)return(0,Le.A)((0,p.nv)((0,p.__)("<Name>%1$s is not: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.X4)return(0,Le.A)((0,p.nv)((0,p.__)("<Name>%1$s is less than: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.u5)return(0,Le.A)((0,p.nv)((0,p.__)("<Name>%1$s is greater than: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.Ie)return(0,Le.A)((0,p.nv)((0,p.__)("<Name>%1$s is less than or equal to: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.x4)return(0,Le.A)((0,p.nv)((0,p.__)("<Name>%1$s is greater than or equal to: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.Py)return(0,Le.A)((0,p.nv)((0,p.__)("<Name>%1$s contains: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.Vm)return(0,Le.A)((0,p.nv)((0,p.__)("<Name>%1$s doesn't contain: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.YH)return(0,Le.A)((0,p.nv)((0,p.__)("<Name>%1$s starts with: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.Xd)return(0,Le.A)((0,p.nv)((0,p.__)("<Name>%1$s is before: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.QF)return(0,Le.A)((0,p.nv)((0,p.__)("<Name>%1$s is after: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.o8)return(0,Le.A)((0,p.nv)((0,p.__)("<Name>%1$s is on or before: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.NN)return(0,Le.A)((0,p.nv)((0,p.__)("<Name>%1$s is on or after: </Name><Value>%2$s</Value>"),a.name,t[0].label),i);if(s?.operator===I.CX){const{label:r}=t[0];return(0,Le.A)((0,p.nv)((0,p.__)("<Name>%1$s between (inc): </Name><Value>%2$s and %3$s</Value>"),a.name,r[0],r[1]),i)}return s?.operator===I.xz?(0,Le.A)((0,p.nv)((0,p.__)("<Name>%1$s is: </Name><Value>%2$s</Value>"),a.name,t[0].label),i):s?.operator===I.Ld?(0,Le.A)((0,p.nv)((0,p.__)("<Name>%1$s is not: </Name><Value>%2$s</Value>"),a.name,t[0].label),i):s?.operator===I._h?(0,Le.A)((0,p.nv)((0,p.__)("<Name>%1$s is in the past: </Name><Value>%2$s</Value>"),a.name,`${t[0].value.value} ${t[0].value.unit}`),i):s?.operator===I.MD?(0,Le.A)((0,p.nv)((0,p.__)("<Name>%1$s is over: </Name><Value>%2$s</Value> ago"),a.name,`${t[0].value.value} ${t[0].value.unit}`),i):(0,p.nv)((0,p.__)("Unknown status for %1$s"),a.name)};function ma({filter:t,view:s,onChangeView:a}){const i=t.operators?.map(c=>({value:c,label:I.we[c]?.label})),r=s.filters?.find(c=>c.field===t.field),l=r?.operator||t.operators[0];return i.length>1&&(0,e.jsxs)(g.A,{spacing:2,justify:"flex-start",className:"dataviews-filters__summary-operators-container",children:[(0,e.jsx)(Dt.A,{className:"dataviews-filters__summary-operators-filter-name",children:t.name}),(0,e.jsx)(ls.A,{className:"dataviews-filters__summary-operators-filter-select",label:(0,p.__)("Conditions"),value:l,options:i,onChange:c=>{const f=c,w=r?.operator,x=r?[...(s.filters??[]).map(y=>{if(y.field===t.field){const P=[I.CX,I._h,I.MD],C=w&&(P.includes(w)||P.includes(f));return{...y,value:C?void 0:y.value,operator:f}}return y})]:[...s.filters??[],{field:t.field,operator:f,value:void 0}];a({...s,page:1,filters:x})},size:"small",variant:"minimal",__nextHasNoMarginBottom:!0,hideLabelFromVision:!0})]})}function va({addFilterRef:t,openedFilter:s,fields:a,...i}){const r=(0,u.useRef)(null),{filter:l,view:c,onChangeView:f}=i,w=c.filters?.find(k=>k.field===l.field);let x=[];const{elements:y}=(0,mi.A)({elements:l.elements,getElements:l.getElements});y.length>0?x=y.filter(k=>l.singleSelection?k.value===w?.value:w?.value?.includes(k.value)):w?.value!==void 0&&(x=[{value:w.value,label:w.value}]);const P=l.isPrimary,C=w?.isLocked,S=!C&&w?.value!==void 0,D=!C&&(!P||S);return(0,e.jsx)(ys.A,{defaultOpen:s===l.field,contentClassName:"dataviews-filters__summary-popover",popoverProps:{placement:"bottom-start",role:"dialog"},onClose:()=>{r.current?.focus()},renderToggle:({isOpen:k,onToggle:L})=>(0,e.jsxs)("div",{className:"dataviews-filters__summary-chip-container",children:[(0,e.jsx)(is.Ay,{text:(0,p.nv)((0,p.__)("Filter by: %1$s"),l.name.toLowerCase()),placement:"top",children:(0,e.jsx)("div",{className:(0,Z.A)("dataviews-filters__summary-chip",{"has-reset":D,"has-values":S,"is-not-clickable":C}),role:"button",tabIndex:C?-1:0,onClick:()=>{C||L()},onKeyDown:X=>{!C&&[ca,ua].includes(X.key)&&(L(),X.preventDefault())},"aria-disabled":C,"aria-pressed":k,"aria-expanded":k,ref:r,children:(0,e.jsx)(pa,{activeElements:x,filterInView:w,filter:l})})}),D&&(0,e.jsx)(is.Ay,{text:P?(0,p.__)("Reset"):(0,p.__)("Remove"),placement:"top",children:(0,e.jsx)("button",{className:(0,Z.A)("dataviews-filters__summary-chip-remove",{"has-values":S}),onClick:()=>{f({...c,page:1,filters:c.filters?.filter(X=>X.field!==l.field)}),P?r.current?.focus():t.current?.focus()},children:(0,e.jsx)(_t.A,{icon:G.A})})})]}),renderContent:()=>(0,e.jsxs)(Ke.A,{spacing:0,justify:"flex-start",children:[(0,e.jsx)(ma,{...i}),i.filter.hasElements?(0,e.jsx)(ra,{...i,filter:{...i.filter,elements:y}}):(0,e.jsx)(da,{...i,fields:a})]})})}function fa({filters:t,view:s,onChangeView:a}){const i=l=>t.some(c=>c.field===l&&c.isPrimary),r=!s.search&&!s.filters?.some(l=>!l.isLocked&&(l.value!==void 0||!i(l.field)));return(0,e.jsx)(ke.Ay,{disabled:r,accessibleWhenDisabled:!0,size:"compact",variant:"tertiary",className:"dataviews-filters__reset-button",onClick:()=>{a({...s,page:1,search:"",filters:s.filters?.filter(l=>!!l.isLocked)||[]})},children:(0,p.__)("Reset")})}function wa(t,s){return(0,u.useMemo)(()=>{const a=[];return t.forEach(i=>{if(i.filterBy===!1||!i.hasElements&&!i.Edit)return;const r=i.filterBy.operators,l=!!i.filterBy?.isPrimary,c=s.filters?.some(f=>f.field===i.id&&!!f.isLocked)??!1;a.push({field:i.id,name:i.label,elements:i.elements,getElements:i.getElements,hasElements:i.hasElements,singleSelection:r.some(f=>I.e5.includes(f)),operators:r,isVisible:c||l||!!s.filters?.some(f=>f.field===i.id&&I.CD.includes(f.operator)),isPrimary:l,isLocked:c})}),a.sort((i,r)=>i.isLocked&&!r.isLocked?-1:!i.isLocked&&r.isLocked?1:i.isPrimary&&!r.isPrimary?-1:!i.isPrimary&&r.isPrimary?1:i.name.localeCompare(r.name)),a},[t,s])}var bi=wa;function _a({className:t}){const{fields:s,view:a,onChangeView:i,openedFilter:r,setOpenedFilter:l}=(0,u.useContext)(K),c=(0,u.useRef)(null),f=bi(s,a),w=(0,e.jsx)(Xs,{filters:f,view:a,onChangeView:i,ref:c,setOpenedFilter:l},"add-filter"),x=f.filter(P=>P.isVisible);if(x.length===0)return null;const y=[...x.map(P=>(0,e.jsx)(va,{filter:P,view:a,fields:s,onChangeView:i,addFilterRef:c,openedFilter:r},P.field)),w];return y.push((0,e.jsx)(fa,{filters:f,view:a,onChangeView:i},"reset-filters")),(0,e.jsx)(g.A,{justify:"flex-start",style:{width:"fit-content"},wrap:!0,className:t,children:y})}var xi=(0,u.memo)(_a);function ha(t){const{isShowingFilter:s}=(0,u.useContext)(K);return s?(0,e.jsx)(xi,{...t}):null}var yi=ha;function ji({className:t}){const{actions:s=[],data:a,fields:i,getItemId:r,getItemLevel:l,isLoading:c,view:f,onChangeView:w,selection:x,onChangeSelection:y,setOpenedFilter:P,onClickItem:C,isItemClickable:S,renderItemLink:D,defaultLayouts:k,empty:L=(0,e.jsx)("p",{children:(0,p.__)("No results")})}=(0,u.useContext)(K),X=zt.find(F=>F.type===f.type&&k[F.type])?.component;return(0,e.jsx)(X,{className:t,actions:s,data:a,fields:i,getItemId:r,getItemLevel:l,isLoading:c,onChangeView:w,onChangeSelection:y,selection:x,setOpenedFilter:P,onClickItem:C,renderItemLink:D,isItemClickable:S,view:f,empty:L})}var Ai=(0,e.jsx)(M.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,e.jsx)(M.wA,{d:"M6.6 6L5.4 7l4.5 5-4.5 5 1.1 1 5.5-6-5.4-6zm6 0l-1.1 1 4.5 5-4.5 5 1.1 1 5.5-6-5.5-6z"})}),ki=(0,e.jsx)(M.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,e.jsx)(M.wA,{d:"M11.6 7l-1.1-1L5 12l5.5 6 1.1-1L7 12l4.6-5zm6 0l-1.1-1-5.5 6 5.5 6 1.1-1-4.6-5 4.6-5z"})});function Ci(){const{view:t,onChangeView:s,paginationInfo:{totalItems:a=0,totalPages:i}}=(0,u.useContext)(K);if(!a||!i||t.infiniteScrollEnabled)return null;const r=t.page??1,l=Array.from(Array(i)).map((c,f)=>{const w=f+1;return{value:w.toString(),label:w.toString(),"aria-label":r===w?(0,p.nv)((0,p.__)("Page %1$d of %2$d"),r,i):w.toString()}});return!!a&&i!==1&&(0,e.jsxs)(g.A,{expanded:!1,className:"dataviews-pagination",justify:"end",spacing:6,children:[(0,e.jsx)(g.A,{justify:"flex-start",expanded:!1,spacing:1,className:"dataviews-pagination__page-select",children:(0,Le.A)((0,p.nv)((0,p._x)("<div>Page</div>%1$s<div>of %2$d</div>","paging"),"<CurrentPage />",i),{div:(0,e.jsx)("div",{"aria-hidden":!0}),CurrentPage:(0,e.jsx)(ls.A,{"aria-label":(0,p.__)("Current page"),value:r.toString(),options:l,onChange:c=>{s({...t,page:+c})},size:"small",__nextHasNoMarginBottom:!0,variant:"minimal"})})}),(0,e.jsxs)(g.A,{expanded:!1,spacing:1,children:[(0,e.jsx)(ke.Ay,{onClick:()=>s({...t,page:r-1}),disabled:r===1,accessibleWhenDisabled:!0,label:(0,p.__)("Previous page"),icon:(0,p.V8)()?Ai:ki,showTooltip:!0,size:"compact",tooltipPosition:"top"}),(0,e.jsx)(ke.Ay,{onClick:()=>s({...t,page:r+1}),disabled:r>=i,accessibleWhenDisabled:!0,label:(0,p.__)("Next page"),icon:(0,p.V8)()?ki:Ai,showTooltip:!0,size:"compact",tooltipPosition:"top"})]})]})}var ga=(0,u.memo)(Ci);const ba=[];function Vi(){const{view:t,paginationInfo:{totalItems:s=0,totalPages:a},data:i,actions:r=ba}=(0,u.useContext)(K),l=Re(r,i)&&[I.Ad,I.Ul].includes(t.type);return!s||!a||a<=1&&!l?null:!!s&&(0,e.jsxs)(g.A,{expanded:!1,justify:"end",className:"dataviews-footer",children:[l&&(0,e.jsx)(us,{}),(0,e.jsx)(ga,{})]})}var xa=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/search-control/index.js"),ya=d("../../../node_modules/.pnpm/@wordpress+compose@7.33.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-debounced-input/index.js"),Si=(0,u.memo)(function({label:s}){const{view:a,onChangeView:i}=(0,u.useContext)(K),[r,l,c]=(0,ya.A)(a.search);(0,u.useEffect)(()=>{l(a.search??"")},[a.search,l]);const f=(0,u.useRef)(i),w=(0,u.useRef)(a);(0,u.useEffect)(()=>{f.current=i,w.current=a},[i,a]),(0,u.useEffect)(()=>{c!==w.current?.search&&f.current({...w.current,page:1,search:c})},[c]);const x=s||(0,p.__)("Search");return(0,e.jsx)(xa.A,{className:"dataviews-search",__nextHasNoMarginBottom:!0,onChange:l,value:r,label:x,placeholder:x,size:"compact"})}),ja=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option-icon/component.js"),Aa=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/item-group/item/component.js"),Ei=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/item-group/item-group/component.js"),ka=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),Oi=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/grid/component.js"),Ca=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/heading/component.js"),Va=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.js"),Sa=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/dropdown/dropdown-content-wrapper.js"),Ea=(0,e.jsx)(M.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)(M.wA,{d:"M17 10h-1.2V7c0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8v3H7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zm-2.8 0H9.8V7c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v3z"})}),Oa=d("../../../node_modules/.pnpm/@wordpress+icons@11.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js"),Pa=d("../../../node_modules/.pnpm/@wordpress+icons@11.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js"),Ma=d("../../../node_modules/.pnpm/@wordpress+icons@11.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/seen.js"),Na=(0,e.jsx)(M.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,e.jsx)(M.wA,{fillRule:"evenodd",d:"M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",clipRule:"evenodd"})}),Pi=d("../../../node_modules/.pnpm/@wordpress+warning@3.33.0/node_modules/@wordpress/warning/build-module/index.js"),Ta=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-control/index.js");function Da(){const t=(0,u.useContext)(K),{view:s,onChangeView:a}=t,i=s.infiniteScrollEnabled??!1;return t.hasInfiniteScrollHandler?(0,e.jsx)(Ta.A,{__nextHasNoMarginBottom:!0,label:(0,p.__)("Enable infinite scroll"),help:(0,p.__)("Automatically load more content as you scroll, instead of showing pagination links."),checked:i,onChange:r=>{a({...s,infiniteScrollEnabled:r})}}):null}const{Menu:yt}=(0,A.T)(T.j),Ia={className:"dataviews-config__popover",placement:"bottom-end",offset:9};function Mi(){const{view:t,onChangeView:s,defaultLayouts:a}=(0,u.useContext)(K),i=Object.keys(a);if(i.length<=1)return null;const r=zt.find(l=>t.type===l.type);return(0,e.jsxs)(yt,{children:[(0,e.jsx)(yt.TriggerButton,{render:(0,e.jsx)(ke.Ay,{size:"compact",icon:r?.icon,label:(0,p.__)("Layout")})}),(0,e.jsx)(yt.Popover,{children:i.map(l=>{const c=zt.find(f=>f.type===l);return c?(0,e.jsx)(yt.RadioItem,{value:l,name:"view-actions-available-view",checked:l===t.type,hideOnClick:!0,onChange:f=>{switch(f.target.value){case"list":case"grid":case"table":case"pickerGrid":const w={...t};return"layout"in w&&delete w.layout,s({...w,type:f.target.value,...a[f.target.value]})}(0,Pi.A)("Invalid dataview")},children:(0,e.jsx)(yt.ItemLabel,{children:c.label})},l):null})})]})}function Ra(){const{view:t,fields:s,onChangeView:a}=(0,u.useContext)(K),i=(0,u.useMemo)(()=>s.filter(l=>l.enableSorting!==!1).map(l=>({label:l.label,value:l.id})),[s]);return(0,e.jsx)(ls.A,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:(0,p.__)("Sort by"),value:t.sort?.field,options:i,onChange:r=>{a({...t,sort:{direction:t?.sort?.direction||"desc",field:r},showLevels:!1})}})}function za(){const{view:t,fields:s,onChangeView:a}=(0,u.useContext)(K);if(s.filter(l=>l.enableSorting!==!1).length===0)return null;let r=t.sort?.direction;return!r&&t.sort?.field&&(r="desc"),(0,e.jsx)(ns.A,{className:"dataviews-view-config__sort-direction",__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,isBlock:!0,label:(0,p.__)("Order"),value:r,onChange:l=>{if(l==="asc"||l==="desc"){a({...t,sort:{direction:l,field:t.sort?.field||s.find(c=>c.enableSorting!==!1)?.id||""},showLevels:!1});return}(0,Pi.A)("Invalid direction")},children:I.GJ.map(l=>(0,e.jsx)(ja.A,{value:l,icon:I.ls[l],label:I.CL[l]},l))})}function Ba(){const{view:t,config:s,onChangeView:a}=(0,u.useContext)(K),{infiniteScrollEnabled:i}=t;return!s||!s.perPageSizes||s.perPageSizes.length<2||s.perPageSizes.length>6||i?null:(0,e.jsx)(ns.A,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,isBlock:!0,label:(0,p.__)("Items per page"),value:t.perPage||10,disabled:!t?.sort?.field,onChange:r=>{const l=typeof r=="number"||r===void 0?r:parseInt(r,10);a({...t,perPage:l,page:1})},children:s.perPageSizes.map(r=>(0,e.jsx)(Xt.A,{value:r,label:r.toString()},r))})}function La({previewOptions:t,onChangePreviewOption:s,onMenuOpenChange:a,activeOption:i}){const r=l=>{setTimeout(()=>{const c=document.querySelector(`.dataviews-field-control__field-${l} .dataviews-field-control__field-preview-options-button`);c instanceof HTMLElement&&c.focus()},50)};return(0,e.jsxs)(yt,{onOpenChange:a,children:[(0,e.jsx)(yt.TriggerButton,{render:(0,e.jsx)(ke.Ay,{className:"dataviews-field-control__field-preview-options-button",size:"compact",icon:ct.A,label:(0,p.__)("Preview")})}),(0,e.jsx)(yt.Popover,{children:t?.map(({id:l,label:c})=>(0,e.jsx)(yt.RadioItem,{value:l,checked:l===i,onChange:()=>{s?.(l),r(l)},children:(0,e.jsx)(yt.ItemLabel,{children:c})},l))})]})}function Cs({field:t,label:s,description:a,isVisible:i,isFirst:r,isLast:l,canMove:c=!0,onToggleVisibility:f,onMoveUp:w,onMoveDown:x,previewOptions:y,onChangePreviewOption:P}){const[C,S]=(0,u.useState)(!1),D=()=>{setTimeout(()=>{const k=document.querySelector(`.dataviews-field-control__field-${t.id} .dataviews-field-control__field-visibility-button`);k instanceof HTMLElement&&k.focus()},50)};return(0,e.jsx)(Aa.A,{children:(0,e.jsxs)(g.A,{expanded:!0,className:(0,Z.A)("dataviews-field-control__field",`dataviews-field-control__field-${t.id}`,{"is-interacting":C}),justify:"flex-start",children:[(0,e.jsx)("span",{className:"dataviews-field-control__icon",children:!c&&!t.enableHiding&&(0,e.jsx)(_t.A,{icon:Ea})}),(0,e.jsxs)("span",{className:"dataviews-field-control__label-sub-label-container",children:[(0,e.jsx)("span",{className:"dataviews-field-control__label",children:s||t.label}),a&&(0,e.jsx)("span",{className:"dataviews-field-control__sub-label",children:a})]}),(0,e.jsxs)(g.A,{justify:"flex-end",expanded:!1,className:"dataviews-field-control__actions",children:[i&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ke.Ay,{disabled:r||!c,accessibleWhenDisabled:!0,size:"compact",onClick:w,icon:Oa.A,label:r||!c?(0,p.__)("This field can't be moved up"):(0,p.nv)((0,p.__)("Move %s up"),t.label)}),(0,e.jsx)(ke.Ay,{disabled:l||!c,accessibleWhenDisabled:!0,size:"compact",onClick:x,icon:Pa.A,label:l||!c?(0,p.__)("This field can't be moved down"):(0,p.nv)((0,p.__)("Move %s down"),t.label)})]}),f&&(0,e.jsx)(ke.Ay,{className:"dataviews-field-control__field-visibility-button",disabled:!t.enableHiding,accessibleWhenDisabled:!0,size:"compact",onClick:()=>{f(),D()},icon:i?Wt.A:Ma.A,label:i?(0,p.nv)((0,p._x)("Hide %s","field"),t.label):(0,p.nv)((0,p._x)("Show %s","field"),t.label)}),y&&(0,e.jsx)(La,{previewOptions:y,onChangePreviewOption:P,onMenuOpenChange:S,activeOption:t.id})]})]})})}function Ni({index:t,field:s,view:a,onChangeView:i}){const r=a.fields??[],l=t!==void 0&&r.includes(s.id);return(0,e.jsx)(Cs,{field:s,isVisible:l,isFirst:t!==void 0&&t<1,isLast:t!==void 0&&t===r.length-1,onToggleVisibility:()=>{i({...a,fields:l?r.filter(c=>c!==s.id):[...r,s.id]})},onMoveUp:t!==void 0?()=>{i({...a,fields:[...r.slice(0,t-1)??[],s.id,r[t-1],...r.slice(t+1)]})}:void 0,onMoveDown:t!==void 0?()=>{i({...a,fields:[...r.slice(0,t)??[],r[t+1],s.id,...r.slice(t+2)]})}:void 0})}function Qt(t){return!!t}function Fa(){const{view:t,fields:s,onChangeView:a}=(0,u.useContext)(K),i=[t?.titleField,t?.mediaField,t?.descriptionField].filter(Boolean),r=t.fields??[],l=s.filter(k=>!r.includes(k.id)&&!i.includes(k.id)&&k.type!=="media"&&k.enableHiding!==!1);let c=r.map(k=>s.find(L=>L.id===k)).filter(Qt);if(!c?.length&&!l?.length)return null;const f=s.find(k=>k.id===t.titleField),w=s.find(k=>k.id===t.mediaField),x=s.find(k=>k.id===t.descriptionField),y=s.filter(k=>k.type==="media");let P;if(y.length>1){const k=Qt(w)&&(t.showMedia??!0);P=Qt(w)&&(0,e.jsx)(Cs,{field:w,label:(0,p.__)("Preview"),description:w.label,isVisible:k,onToggleVisibility:()=>{a({...t,showMedia:!k})},canMove:!1,previewOptions:y.map(L=>({label:L.label,id:L.id})),onChangePreviewOption:L=>a({...t,mediaField:L})},w.id)}const C=[{field:f,isVisibleFlag:"showTitle"},{field:w,isVisibleFlag:"showMedia",ui:P},{field:x,isVisibleFlag:"showDescription"}].filter(({field:k})=>Qt(k));let S=C.filter(({field:k,isVisibleFlag:L})=>Qt(k)&&(t[L]??!0));S.length===1&&(S=S.map(k=>({...k,field:{...k.field,enableHiding:!1}}))),S.length===0&&c.length===1&&(c=[{...c[0],enableHiding:!1}]);const D=C.filter(({field:k,isVisibleFlag:L})=>Qt(k)&&!(t[L]??!0));return(0,e.jsxs)(Ke.A,{className:"dataviews-field-control",spacing:6,children:[(0,e.jsx)(Ke.A,{className:"dataviews-view-config__properties",spacing:0,children:(S.length>0||!!c?.length)&&(0,e.jsxs)(Ei.A,{isBordered:!0,isSeparated:!0,children:[S.map(({field:k,isVisibleFlag:L,ui:X})=>X??(0,e.jsx)(Cs,{field:k,isVisible:!0,onToggleVisibility:()=>{a({...t,[L]:!1})},canMove:!1},k.id)),c.map((k,L)=>(0,e.jsx)(Ni,{field:k,view:t,onChangeView:a,index:L},k.id))]})}),(!!l?.length||!!D.length)&&(0,e.jsxs)(Ke.A,{spacing:4,children:[(0,e.jsx)(ka.Ay.VisualLabel,{style:{margin:0},children:(0,p.__)("Hidden")}),(0,e.jsx)(Ke.A,{className:"dataviews-view-config__properties",spacing:0,children:(0,e.jsxs)(Ei.A,{isBordered:!0,isSeparated:!0,children:[D.length>0&&D.map(({field:k,isVisibleFlag:L,ui:X})=>X??(0,e.jsx)(Cs,{field:k,isVisible:!1,onToggleVisibility:()=>{a({...t,[L]:!0})},canMove:!1},k.id)),l.map(k=>(0,e.jsx)(Ni,{field:k,view:t,onChangeView:a},k.id))]})})]})]})}function Ti({title:t,description:s,children:a}){return(0,e.jsxs)(Oi.A,{columns:12,className:"dataviews-settings-section",gap:4,children:[(0,e.jsxs)("div",{className:"dataviews-settings-section__sidebar",children:[(0,e.jsx)(Ca.A,{level:2,className:"dataviews-settings-section__title",children:t}),s&&(0,e.jsx)(Va.A,{variant:"muted",className:"dataviews-settings-section__description",children:s})]}),(0,e.jsx)(Oi.A,{columns:8,gap:4,className:"dataviews-settings-section__content",children:a})]})}function Di(){const{view:t}=(0,u.useContext)(K),s=(0,It.A)(Ii,"dataviews-view-config-dropdown"),a=zt.find(i=>i.type===t.type);return(0,e.jsx)(ys.A,{expandOnMobile:!0,popoverProps:{...Ia,id:s},renderToggle:({onToggle:i,isOpen:r})=>(0,e.jsx)(ke.Ay,{size:"compact",icon:Na,label:(0,p._x)("View options","View is used as a noun"),onClick:i,"aria-expanded":r?"true":"false","aria-controls":s}),renderContent:()=>(0,e.jsx)(Sa.A,{paddingSize:"medium",className:"dataviews-config__popover-content-wrapper",children:(0,e.jsxs)(Ke.A,{className:"dataviews-view-config",spacing:6,children:[(0,e.jsxs)(Ti,{title:(0,p.__)("Appearance"),children:[(0,e.jsxs)(g.A,{expanded:!0,className:"is-divided-in-two",children:[(0,e.jsx)(Ra,{}),(0,e.jsx)(za,{})]}),!!a?.viewConfigOptions&&(0,e.jsx)(a.viewConfigOptions,{}),(0,e.jsx)(Da,{}),(0,e.jsx)(Ba,{})]}),(0,e.jsx)(Ti,{title:(0,p.__)("Properties"),children:(0,e.jsx)(Fa,{})})]})})})}function Ii(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Mi,{}),(0,e.jsx)(Di,{})]})}var Ha=(0,u.memo)(Ii),Wa=d("../../../node_modules/.pnpm/@wordpress+dataviews@10.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e024960755d6217a2bba17183c44eb48/node_modules/@wordpress/dataviews/build-module/utils/normalize-fields.js");const $a=t=>t.id,Ua=()=>!0,Ka=[],Ga=zt.filter(t=>!t.isPicker);function Ya({header:t,search:s=!0,searchLabel:a=void 0}){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(g.A,{alignment:"top",justify:"space-between",className:"dataviews__view-actions",spacing:1,children:[(0,e.jsxs)(g.A,{justify:"start",expanded:!1,className:"dataviews__search",children:[s&&(0,e.jsx)(Si,{label:a}),(0,e.jsx)(xs,{})]}),(0,e.jsxs)(g.A,{spacing:1,expanded:!1,style:{flexShrink:0},children:[(0,e.jsx)(Ha,{}),t]})]}),(0,e.jsx)(yi,{className:"dataviews-filters__container"}),(0,e.jsx)(ji,{}),(0,e.jsx)(Vi,{})]})}function Xa({view:t,onChangeView:s,fields:a,search:i=!0,searchLabel:r=void 0,actions:l=Ka,data:c,getItemId:f=$a,getItemLevel:w,isLoading:x=!1,paginationInfo:y,defaultLayouts:P,selection:C,onChangeSelection:S,onClickItem:D,renderItemLink:k,isItemClickable:L=Ua,header:X,children:F,config:ge={perPageSizes:[10,20,50,100]},empty:fe}){const{infiniteScrollHandler:Q}=y,ie=(0,u.useRef)(null),[de,Ae]=(0,u.useState)(0),ce=(0,W.A)(Se=>{Ae(Se[0].borderBoxSize[0].inlineSize)},{box:"border-box"}),[me,te]=(0,u.useState)([]),be=C===void 0||S===void 0,E=be?me:C,[N,U]=(0,u.useState)(null);function ne(Se){const ot=typeof Se=="function"?Se(E):Se;be&&te(ot),S&&S(ot)}const Ie=(0,u.useMemo)(()=>(0,Wa.A)(a),[a]),He=(0,u.useMemo)(()=>E.filter(Se=>c.some(ot=>f(ot)===Se)),[E,c,f]),pt=bi(Ie,t),jt=(0,u.useMemo)(()=>(pt||[]).some(Se=>Se.isPrimary||Se.isLocked),[pt]),[kt,Ve]=(0,u.useState)(jt);(0,u.useEffect)(()=>{jt&&!kt&&Ve(!0)},[jt,kt]),(0,u.useEffect)(()=>{if(!t.infiniteScrollEnabled||!ie.current)return;const Se=(0,v.n)(cs=>{const Ft=cs.target,ii=Ft.scrollTop,Vs=Ft.scrollHeight,ai=Ft.clientHeight;ii+ai>=Vs-100&&Q?.()},100),ot=ie.current;return ot.addEventListener("scroll",Se),()=>{ot.removeEventListener("scroll",Se),Se.cancel()}},[Q,t.infiniteScrollEnabled]);const et=(0,u.useMemo)(()=>Object.fromEntries(Object.entries(P).filter(([Se])=>Ga.some(ot=>ot.type===Se))),[P]);return et[t.type]?(0,e.jsx)(K.Provider,{value:{view:t,onChangeView:s,fields:Ie,actions:l,data:c,isLoading:x,paginationInfo:y,selection:He,onChangeSelection:ne,openedFilter:N,setOpenedFilter:U,getItemId:f,getItemLevel:w,isItemClickable:L,onClickItem:D,renderItemLink:k,containerWidth:de,containerRef:ie,resizeObserverRef:ce,defaultLayouts:et,filters:pt,isShowingFilter:kt,setIsShowingFilter:Ve,config:ge,empty:fe,hasInfiniteScrollHandler:!!Q},children:(0,e.jsx)("div",{className:"dataviews-wrapper",ref:ie,children:F??(0,e.jsx)(Ya,{header:X,search:i,searchLabel:r})})}):null}const ht=Xa;ht.BulkActionToolbar=us,ht.Filters=xi,ht.FiltersToggled=yi,ht.FiltersToggle=xs,ht.Layout=ji,ht.LayoutSwitcher=Mi,ht.Pagination=Ci,ht.Search=Si,ht.ViewConfig=Di,ht.Footer=Vi;var Za=ht}),"../../../node_modules/.pnpm/@wordpress+dataviews@10.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e024960755d6217a2bba17183c44eb48/node_modules/@wordpress/dataviews/build-module/constants.js":((We,se,d)=>{"use strict";d.d(se,{CD:()=>B,Ul:()=>Ce,mA:()=>Re,dL:()=>Xe,Ad:()=>we,we:()=>mt,QF:()=>ve,NN:()=>Ge,Xd:()=>re,o8:()=>ye,CX:()=>ct,Py:()=>T,u5:()=>De,x4:()=>Z,_h:()=>ue,gm:()=>I,y5:()=>M,ld:()=>K,Vw:()=>p,_k:()=>Me,UX:()=>xe,X4:()=>he,Ie:()=>Ne,Vm:()=>ke,Ld:()=>A,xz:()=>qe,MD:()=>$,YH:()=>lt,e5:()=>Be,GJ:()=>Pt,vI:()=>h,ls:()=>G,CL:()=>V,LW:()=>_});var e=d("../../../node_modules/.pnpm/@wordpress+i18n@6.6.0/node_modules/@wordpress/i18n/build-module/index.js"),g=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),u=d("../../../node_modules/.pnpm/@wordpress+primitives@4.33.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),W=(0,g.jsx)(u.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,g.jsx)(u.wA,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"})}),v=(0,g.jsx)(u.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,g.jsx)(u.wA,{d:"m16.5 13.5-3.7 3.7V4h-1.5v13.2l-3.8-3.7-1 1 5.5 5.6 5.5-5.6z"})});const I="is",Me="isNot",K="isAny",p="isNone",M="isAll",xe="isNotAll",he="lessThan",De="greaterThan",Ne="lessThanOrEqual",Z="greaterThanOrEqual",re="before",ve="after",ye="beforeInc",Ge="afterInc",T="contains",ke="notContains",lt="startsWith",ct="between",qe="on",A="notOn",ue="inThePast",$="over",B=[I,Me,K,p,M,xe,he,De,Ne,Z,re,ve,ye,Ge,T,ke,lt,ct,qe,A,ue,$],Be=[I,Me,he,De,Ne,Z,re,ve,ye,Ge,T,ke,lt,qe,A],mt={[I]:{key:"is-filter",label:(0,e.__)("Is")},[Me]:{key:"is-not-filter",label:(0,e.__)("Is not")},[K]:{key:"is-any-filter",label:(0,e.__)("Is any")},[p]:{key:"is-none-filter",label:(0,e.__)("Is none")},[M]:{key:"is-all-filter",label:(0,e.__)("Is all")},[xe]:{key:"is-not-all-filter",label:(0,e.__)("Is not all")},[he]:{key:"less-than-filter",label:(0,e.__)("Less than")},[De]:{key:"greater-than-filter",label:(0,e.__)("Greater than")},[Ne]:{key:"less-than-or-equal-filter",label:(0,e.__)("Less than or equal")},[Z]:{key:"greater-than-or-equal-filter",label:(0,e.__)("Greater than or equal")},[re]:{key:"before-filter",label:(0,e.__)("Before")},[ve]:{key:"after-filter",label:(0,e.__)("After")},[ye]:{key:"before-inc-filter",label:(0,e.__)("Before (inc)")},[Ge]:{key:"after-inc-filter",label:(0,e.__)("After (inc)")},[T]:{key:"contains-filter",label:(0,e.__)("Contains")},[ke]:{key:"not-contains-filter",label:(0,e.__)("Doesn't contain")},[lt]:{key:"starts-with-filter",label:(0,e.__)("Starts with")},[ct]:{key:"between-filter",label:(0,e.__)("Between (inc)")},[qe]:{key:"on-filter",label:(0,e.__)("On")},[A]:{key:"not-on-filter",label:(0,e.__)("Not on")},[ue]:{key:"in-the-past-filter",label:(0,e.__)("In the past")},[$]:{key:"over-filter",label:(0,e.__)("Over")}},Pt=["asc","desc"],h={asc:"\u2191",desc:"\u2193"},_={asc:"ascending",desc:"descending"},V={asc:(0,e.__)("Sort ascending"),desc:(0,e.__)("Sort descending")},G={asc:W,desc:v},we="table",Ce="grid",Re="list",Xe="pickerGrid"}),"../../../node_modules/.pnpm/@wordpress+dataviews@10.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e024960755d6217a2bba17183c44eb48/node_modules/@wordpress/dataviews/build-module/hooks/use-elements.js":((We,se,d)=>{"use strict";d.d(se,{A:()=>u});var e=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const g=[];function u({elements:W,getElements:v}){const I=Array.isArray(W)&&W.length>0?W:g,[Me,K]=(0,e.useState)(I),[p,M]=(0,e.useState)(!1);return(0,e.useEffect)(()=>{if(!v){K(I);return}let xe=!1;return M(!0),v().then(he=>{if(!xe){const De=Array.isArray(he)&&he.length>0?he:I;K(De)}}).catch(()=>{xe||K(I)}).finally(()=>{xe||M(!1)}),()=>{xe=!0}},[v,I]),{elements:Me,isLoading:p}}}),"../../../node_modules/.pnpm/@wordpress+dataviews@10.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e024960755d6217a2bba17183c44eb48/node_modules/@wordpress/dataviews/build-module/lock-unlock.js":((We,se,d)=>{"use strict";d.d(se,{T:()=>u});var e=d("../../../node_modules/.pnpm/@wordpress+private-apis@1.33.0/node_modules/@wordpress/private-apis/build-module/implementation.js");const{lock:g,unlock:u}=(0,e.yf)("I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.","@wordpress/dataviews")}),"../../../node_modules/.pnpm/@wordpress+dataviews@10.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e024960755d6217a2bba17183c44eb48/node_modules/@wordpress/dataviews/build-module/utils/filter-sort-and-paginate.js":((We,se,d)=>{"use strict";d.d(se,{A:()=>Z});var e=d("../../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js"),g=d.n(e),u=d("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/subDays.js"),W=d("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addWeeks.js");function v(re,ve,ye){return(0,W.J)(re,-ve,ye)}const I=null;var Me=d("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/subMonths.js"),K=d("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/subYears.js"),p=d("../../../node_modules/.pnpm/@wordpress+date@5.33.0/node_modules/@wordpress/date/build-module/index.js"),M=d("../../../node_modules/.pnpm/@wordpress+dataviews@10.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e024960755d6217a2bba17183c44eb48/node_modules/@wordpress/dataviews/build-module/constants.js"),xe=d("../../../node_modules/.pnpm/@wordpress+dataviews@10.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e024960755d6217a2bba17183c44eb48/node_modules/@wordpress/dataviews/build-module/utils/normalize-fields.js");function he(re=""){return g()(re.trim().toLowerCase())}const De=[];function Ne(re,ve){switch(ve){case"days":return(0,u.e)(new Date,re);case"weeks":return v(new Date,re);case"months":return(0,Me.a)(new Date,re);case"years":return(0,K.d)(new Date,re);default:return new Date}}function Z(re,ve,ye){if(!re)return{data:De,paginationInfo:{totalItems:0,totalPages:0}};const Ge=(0,xe.A)(ye);let T=[...re];if(ve.search){const A=he(ve.search);T=T.filter(ue=>Ge.filter($=>$.enableGlobalSearch).some($=>{const B=$.getValue({item:ue});return(Array.isArray(B)?B:[B]).some(mt=>he(String(mt)).includes(A))}))}ve.filters&&ve.filters?.length>0&&ve.filters.forEach(A=>{const ue=Ge.find($=>$.id===A.field);if(ue){if(A.operator===M.ld&&A?.value?.length>0)T=T.filter($=>{const B=ue.getValue({item:$});return Array.isArray(B)?A.value.some(Be=>B.includes(Be)):typeof B=="string"?A.value.includes(B):!1});else if(A.operator===M.Vw&&A?.value?.length>0)T=T.filter($=>{const B=ue.getValue({item:$});return Array.isArray(B)?!A.value.some(Be=>B.includes(Be)):typeof B=="string"?!A.value.includes(B):!1});else if(A.operator===M.y5&&A?.value?.length>0)T=T.filter($=>A.value.every(B=>ue.getValue({item:$})?.includes(B)));else if(A.operator===M.UX&&A?.value?.length>0)T=T.filter($=>A.value.every(B=>!ue.getValue({item:$})?.includes(B)));else if(A.operator===M.gm)T=T.filter($=>A.value===ue.getValue({item:$})||A.value===void 0);else if(A.operator===M._k)T=T.filter($=>A.value!==ue.getValue({item:$}));else if(A.operator===M.xz&&A.value!==void 0){const $=(0,p.getDate)(A.value);T=T.filter(B=>{const Be=(0,p.getDate)(ue.getValue({item:B}));return $.getTime()===Be.getTime()})}else if(A.operator===M.Ld&&A.value!==void 0){const $=(0,p.getDate)(A.value);T=T.filter(B=>{const Be=(0,p.getDate)(ue.getValue({item:B}));return $.getTime()!==Be.getTime()})}else if(A.operator===M.X4&&A.value!==void 0)T=T.filter($=>ue.getValue({item:$})<A.value);else if(A.operator===M.u5&&A.value!==void 0)T=T.filter($=>ue.getValue({item:$})>A.value);else if(A.operator===M.Ie&&A.value!==void 0)T=T.filter($=>ue.getValue({item:$})<=A.value);else if(A.operator===M.x4&&A.value!==void 0)T=T.filter($=>ue.getValue({item:$})>=A.value);else if(A.operator===M.Py&&A?.value!==void 0)T=T.filter($=>{const B=ue.getValue({item:$});return typeof B=="string"&&A.value&&B.toLowerCase().includes(String(A.value).toLowerCase())});else if(A.operator===M.Vm&&A?.value!==void 0)T=T.filter($=>{const B=ue.getValue({item:$});return typeof B=="string"&&A.value&&!B.toLowerCase().includes(String(A.value).toLowerCase())});else if(A.operator===M.YH&&A?.value!==void 0)T=T.filter($=>{const B=ue.getValue({item:$});return typeof B=="string"&&A.value&&B.toLowerCase().startsWith(String(A.value).toLowerCase())});else if(A.operator===M.Xd&&A.value!==void 0){const $=(0,p.getDate)(A.value);T=T.filter(B=>(0,p.getDate)(ue.getValue({item:B}))<$)}else if(A.operator===M.QF&&A.value!==void 0){const $=(0,p.getDate)(A.value);T=T.filter(B=>(0,p.getDate)(ue.getValue({item:B}))>$)}else if(A.operator===M.o8&&A.value!==void 0){const $=(0,p.getDate)(A.value);T=T.filter(B=>(0,p.getDate)(ue.getValue({item:B}))<=$)}else if(A.operator===M.NN&&A.value!==void 0){const $=(0,p.getDate)(A.value);T=T.filter(B=>(0,p.getDate)(ue.getValue({item:B}))>=$)}else if(A.operator===M.CX&&Array.isArray(A.value)&&A.value.length===2&&A.value[0]!==void 0&&A.value[1]!==void 0)T=T.filter($=>{const B=ue.getValue({item:$});return typeof B=="number"||B instanceof Date||typeof B=="string"?B>=A.value[0]&&B<=A.value[1]:!1});else if(A.operator===M._h&&A.value?.value!==void 0&&A.value?.unit!==void 0){const $=Ne(A.value.value,A.value.unit);T=T.filter(B=>{const Be=(0,p.getDate)(ue.getValue({item:B}));return Be>=$&&Be<=new Date})}else if(A.operator===M.MD&&A.value?.value!==void 0&&A.value?.unit!==void 0){const $=Ne(A.value.value,A.value.unit);T=T.filter(B=>(0,p.getDate)(ue.getValue({item:B}))<$)}}});const ke=ve.sort?.field?Ge.find(A=>A.id===ve.sort?.field):null,lt=ve.groupByField?Ge.find(A=>A.id===ve.groupByField):null;(ke||lt)&&T.sort((A,ue)=>{if(lt){const $=lt.sort(A,ue,"asc");if($!==0)return $}return ke?ke.sort(A,ue,ve.sort?.direction??"desc"):0});let ct=T.length,qe=1;if(ve.page!==void 0&&ve.perPage!==void 0){const A=(ve.page-1)*ve.perPage;ct=T?.length||0,qe=Math.ceil(ct/ve.perPage),T=T?.slice(A,A+ve.perPage)}return{data:T,paginationInfo:{totalItems:ct,totalPages:qe}}}}),"../../../node_modules/.pnpm/@wordpress+dataviews@10.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e024960755d6217a2bba17183c44eb48/node_modules/@wordpress/dataviews/build-module/utils/normalize-fields.js":((We,se,d)=>{"use strict";d.d(se,{A:()=>Oe});var e=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),g=d("../../../node_modules/.pnpm/@wordpress+i18n@6.6.0/node_modules/@wordpress/i18n/build-module/index.js"),u=d("../../../node_modules/.pnpm/@wordpress+dataviews@10.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e024960755d6217a2bba17183c44eb48/node_modules/@wordpress/dataviews/build-module/hooks/use-elements.js");function W({item:o,field:n}){const{elements:m,isLoading:b}=(0,u.A)({elements:n.elements,getElements:n.getElements}),j=n.getValue({item:o});return b||m.length===0?j:m?.find(O=>O.value===j)?.label||n.getValue({item:o})}var v=d("../../../node_modules/.pnpm/@wordpress+dataviews@10.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e024960755d6217a2bba17183c44eb48/node_modules/@wordpress/dataviews/build-module/constants.js");function I(o,n,m){return m==="asc"?o.localeCompare(n):n.localeCompare(o)}const Me=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var K={sort:I,isValid:{elements:!0,custom:(o,n)=>{const m=n.getValue({item:o});return![void 0,"",null].includes(m)&&!Me.test(m)?(0,g.__)("Value must be a valid email address."):null}},Edit:"email",render:({item:o,field:n})=>n.hasElements?(0,e.jsx)(W,{item:o,field:n}):n.getValue({item:o}),enableSorting:!0,filterBy:{defaultOperators:[v.ld,v.Vw],validOperators:[v.gm,v._k,v.Py,v.Vm,v.YH,v.ld,v.Vw,v.y5,v.UX]}};function p(o,n,m){return m==="asc"?o-n:n-o}var M={sort:p,isValid:{elements:!0,custom:(o,n)=>{const m=n.getValue({item:o});return![void 0,"",null].includes(m)&&!Number.isInteger(m)?(0,g.__)("Value must be an integer."):null}},Edit:"integer",render:({item:o,field:n})=>n.hasElements?(0,e.jsx)(W,{item:o,field:n}):n.getValue({item:o}),enableSorting:!0,filterBy:{defaultOperators:[v.gm,v._k,v.X4,v.u5,v.Ie,v.x4,v.CX],validOperators:[v.gm,v._k,v.X4,v.u5,v.Ie,v.x4,v.CX,v.ld,v.Vw,v.y5,v.UX]}};function xe(o,n,m){return m==="asc"?o-n:n-o}function he(o){return o===""||o===void 0||o===null}var De={sort:xe,isValid:{elements:!0,custom:(o,n)=>{const m=n.getValue({item:o});return!he(m)&&!Number.isFinite(m)?(0,g.__)("Value must be a number."):null}},Edit:"number",render:({item:o,field:n})=>{n.hasElements;const m=n.getValue({item:o});return[null,void 0].includes(m)?null:Number(m).toFixed(2)},enableSorting:!0,filterBy:{defaultOperators:[v.gm,v._k,v.X4,v.u5,v.Ie,v.x4,v.CX],validOperators:[v.gm,v._k,v.X4,v.u5,v.Ie,v.x4,v.CX,v.ld,v.Vw,v.y5,v.UX]}};function Ne(o,n,m){return m==="asc"?o.localeCompare(n):n.localeCompare(o)}var Z={sort:Ne,isValid:{elements:!0,custom:()=>null},Edit:"text",render:({item:o,field:n})=>n.hasElements?(0,e.jsx)(W,{item:o,field:n}):n.getValue({item:o}),enableSorting:!0,filterBy:{defaultOperators:[v.ld,v.Vw],validOperators:[v.gm,v._k,v.Py,v.Vm,v.YH,v.ld,v.Vw,v.y5,v.UX]}};function re(o,n,m){const b=new Date(o).getTime(),j=new Date(n).getTime();return m==="asc"?b-j:j-b}var ve={sort:re,isValid:{elements:!0,custom:()=>null},Edit:"datetime",render:({item:o,field:n})=>n.hasElements?(0,e.jsx)(W,{item:o,field:n}):n.getValue({item:o}),enableSorting:!0,filterBy:{defaultOperators:[v.xz,v.Ld,v.Xd,v.QF,v.o8,v.NN,v._h,v.MD],validOperators:[v.xz,v.Ld,v.Xd,v.QF,v.o8,v.NN,v._h,v.MD]}},ye=d("../../../node_modules/.pnpm/@wordpress+date@5.33.0/node_modules/@wordpress/date/build-module/index.js");const Ge=o=>(0,ye.dateI18n)((0,ye.getSettings)().formats.date,(0,ye.getDate)(o));function T(o,n,m){const b=new Date(o).getTime(),j=new Date(n).getTime();return m==="asc"?b-j:j-b}var ke={sort:T,Edit:"date",isValid:{elements:!0,custom:()=>null},render:({item:o,field:n})=>{if(n.hasElements)return(0,e.jsx)(W,{item:o,field:n});const m=n.getValue({item:o});return m?Ge(m):""},enableSorting:!0,filterBy:{defaultOperators:[v.xz,v.Ld,v.Xd,v.QF,v.o8,v.NN,v._h,v.MD,v.CX],validOperators:[v.xz,v.Ld,v.Xd,v.QF,v.o8,v.NN,v._h,v.MD,v.CX]}};function lt(o,n,m){const b=!!o;return b===!!n?0:m==="asc"?b?1:-1:b?-1:1}var ct={sort:lt,isValid:{elements:!0,custom:(o,n)=>{const m=n.getValue({item:o});return![void 0,"",null].includes(m)&&![!0,!1].includes(m)?(0,g.__)("Value must be true, false, or undefined"):null}},Edit:"checkbox",render:({item:o,field:n})=>n.hasElements?(0,e.jsx)(W,{item:o,field:n}):n.getValue({item:o})===!0?(0,g.__)("True"):n.getValue({item:o})===!1?(0,g.__)("False"):null,enableSorting:!0,filterBy:{defaultOperators:[v.gm,v._k],validOperators:[v.gm,v._k]}};function qe(){return 0}var A={sort:qe,isValid:{elements:!0,custom:()=>null},Edit:null,render:()=>null,enableSorting:!1,filterBy:!1};function ue(o,n,m){const b=Array.isArray(o)?o:[],j=Array.isArray(n)?n:[];if(b.length!==j.length)return m==="asc"?b.length-j.length:j.length-b.length;const O=b.join(","),H=j.join(",");return m==="asc"?O.localeCompare(H):H.localeCompare(O)}function $({item:o,field:n}){return(n.getValue({item:o})||[]).join(", ")}var Be={sort:ue,isValid:{elements:!0,custom:(o,n)=>{const m=n.getValue({item:o});return![void 0,"",null].includes(m)&&!Array.isArray(m)?(0,g.__)("Value must be an array."):m.every(b=>typeof b=="string")?null:(0,g.__)("Every value must be a string.")}},Edit:"array",render:$,enableSorting:!0,filterBy:{defaultOperators:[v.ld,v.Vw],validOperators:[v.ld,v.Vw,v.y5,v.UX]}};function mt(o,n,m){return 0}var Pt={sort:mt,isValid:{elements:!0,custom:()=>null},Edit:"password",render:({item:o,field:n})=>n.hasElements?(0,e.jsx)(W,{item:o,field:n}):"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",enableSorting:!1,filterBy:!1};function h(o,n,m){return m==="asc"?o.localeCompare(n):n.localeCompare(o)}var _={sort:h,isValid:{elements:!0,custom:()=>null},Edit:"telephone",render:({item:o,field:n})=>n.hasElements?(0,e.jsx)(W,{item:o,field:n}):n.getValue({item:o}),enableSorting:!0,filterBy:{defaultOperators:[v.ld,v.Vw],validOperators:[v.gm,v._k,v.Py,v.Vm,v.YH,v.ld,v.Vw,v.y5,v.UX]}},V=d("../../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/index.mjs");function G(o,n,m){const b=(0,V.Mj)(o),j=(0,V.Mj)(n);if(!b.isValid()&&!j.isValid())return 0;if(!b.isValid())return m==="asc"?1:-1;if(!j.isValid())return m==="asc"?-1:1;const O=b.toHsl(),H=j.toHsl();return O.h!==H.h?m==="asc"?O.h-H.h:H.h-O.h:O.s!==H.s?m==="asc"?O.s-H.s:H.s-O.s:m==="asc"?O.l-H.l:H.l-O.l}var we={sort:G,isValid:{elements:!0,custom:(o,n)=>{const m=n.getValue({item:o});return![void 0,"",null].includes(m)&&!(0,V.Mj)(m).isValid()?(0,g.__)("Value must be a valid color."):null}},Edit:"color",render:({item:o,field:n})=>{if(n.hasElements)return(0,e.jsx)(W,{item:o,field:n});const m=n.getValue({item:o});return!m||!(0,V.Mj)(m).isValid()?m:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,e.jsx)("div",{style:{width:"16px",height:"16px",borderRadius:"50%",backgroundColor:m,border:"1px solid #ddd",flexShrink:0}}),(0,e.jsx)("span",{children:m})]})},enableSorting:!0,filterBy:{defaultOperators:[v.ld,v.Vw],validOperators:[v.gm,v._k]}};function Ce(o,n,m){return m==="asc"?o.localeCompare(n):n.localeCompare(o)}var Re={sort:Ce,isValid:{elements:!0,custom:()=>null},Edit:"url",render:({item:o,field:n})=>n.hasElements?(0,e.jsx)(W,{item:o,field:n}):n.getValue({item:o}),enableSorting:!0,filterBy:{defaultOperators:[v.ld,v.Vw],validOperators:[v.gm,v._k,v.Py,v.Vm,v.YH,v.ld,v.Vw,v.y5,v.UX]}};function Xe(o){return o==="email"?K:o==="integer"?M:o==="number"?De:o==="text"?Z:o==="datetime"?ve:o==="date"?ke:o==="boolean"?ct:o==="media"?A:o==="array"?Be:o==="password"?Pt:o==="telephone"?_:o==="color"?we:o==="url"?Re:{sort:(n,m,b)=>typeof n=="number"&&typeof m=="number"?b==="asc"?n-m:m-n:b==="asc"?n.localeCompare(m):m.localeCompare(n),isValid:{elements:!0,custom:()=>null},Edit:null,render:({item:n,field:m})=>m.hasElements?(0,e.jsx)(W,{item:n,field:m}):m.getValue({item:n}),enableSorting:!0,filterBy:{defaultOperators:[v.gm,v._k],validOperators:v.CD}}}var Ze=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/private-apis.js"),Y=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),ut=d("../../../node_modules/.pnpm/@wordpress+dataviews@10.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e024960755d6217a2bba17183c44eb48/node_modules/@wordpress/dataviews/build-module/lock-unlock.js");function dt(o,n){let m;return o?.required&&n?.required?m=n?.required?.message?n.required:void 0:o?.elements&&n?.elements?m=n.elements:n?.custom&&(m=n.custom),m}const{ValidatedCheckboxControl:Ss}=(0,ut.T)(Ze.j);function us({field:o,onChange:n,data:m,hideLabelFromVision:b,validity:j}){const{getValue:O,setValue:H,label:ae,description:q,isValid:pe}=o,ee=(0,Y.useCallback)(()=>{n(H({item:m,value:!O({item:m})}))},[m,O,n,H]);return(0,e.jsx)(Ss,{required:!!o.isValid?.required,customValidity:dt(pe,j),hidden:b,label:ae,help:q,checked:O({item:m}),onChange:ee})}var qt=d("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js"),es=d("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/format.js"),Mt=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),Wt=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js"),_t=d("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),Ue=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js"),ts=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/number-control/index.js"),ri=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/select-control/index.js");const oi={[v._h]:[{value:"days",label:(0,g.__)("Days")},{value:"weeks",label:(0,g.__)("Weeks")},{value:"months",label:(0,g.__)("Months")},{value:"years",label:(0,g.__)("Years")}],[v.MD]:[{value:"days",label:(0,g.__)("Days ago")},{value:"weeks",label:(0,g.__)("Weeks ago")},{value:"months",label:(0,g.__)("Months ago")},{value:"years",label:(0,g.__)("Years ago")}]};function ss({className:o,data:n,field:m,onChange:b,hideLabelFromVision:j,operator:O}){const H=oi[O===v._h?"inThePast":"over"],{id:ae,label:q,getValue:pe,setValue:ee}=m,R=pe({item:n}),{value:le="",unit:J=H[0].value}=R&&typeof R=="object"?R:{},$e=(0,Y.useCallback)(_e=>b(ee({item:n,value:{value:Number(_e),unit:J}})),[b,ee,n,J]),oe=(0,Y.useCallback)(_e=>b(ee({item:n,value:{value:le,unit:_e}})),[b,ee,n,le]);return(0,e.jsx)(Mt.Ay,{id:ae,__nextHasNoMarginBottom:!0,className:(0,_t.A)(o,"dataviews-controls__relative-date"),label:q,hideLabelFromVision:j,children:(0,e.jsxs)(Ue.A,{spacing:2.5,children:[(0,e.jsx)(ts.A,{__next40pxDefaultSize:!0,className:"dataviews-controls__relative-date-number",spinControls:"none",min:1,step:1,value:le,onChange:$e}),(0,e.jsx)(ri.A,{className:"dataviews-controls__relative-date-unit",__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:(0,g.__)("Unit"),value:J,options:H,onChange:oe,hideLabelFromVision:!0})]})})}const{DateCalendar:Ke,ValidatedInputControl:Es}=(0,ut.T)(Ze.j),gt=o=>{if(!o)return null;const n=(0,ye.getDate)(o);return n&&(0,qt.f)(n)?n:null},Os=o=>o?typeof o=="string"?o:(0,es.GP)(o,"yyyy-MM-dd'T'HH:mm"):"";function Ps({data:o,field:n,onChange:m,hideLabelFromVision:b,validity:j}){const{id:O,label:H,description:ae,setValue:q,getValue:pe,isValid:ee}=n,R=pe({item:o}),le=typeof R=="string"?R:void 0,[J,$e]=(0,Y.useState)(()=>gt(le)||new Date),oe=(0,Y.useRef)(null),_e=(0,Y.useRef)(),ze=(0,Y.useRef)(null),Fe=(0,Y.useCallback)(rt=>m(q({item:o,value:rt})),[o,m,q]);(0,Y.useEffect)(()=>()=>{_e.current&&clearTimeout(_e.current)},[]);const at=(0,Y.useCallback)(rt=>{let ft;if(rt){let Te=rt;if(le){const tt=gt(le);tt&&(Te=new Date(rt),Te.setHours(tt.getHours()),Te.setMinutes(tt.getMinutes()))}ft=Te.toISOString(),Fe(ft),_e.current&&clearTimeout(_e.current)}else Fe(void 0);ze.current=oe.current&&oe.current.ownerDocument.activeElement,_e.current=setTimeout(()=>{oe.current&&(oe.current.focus(),oe.current.blur(),Fe(ft),ze.current&&ze.current instanceof HTMLElement&&ze.current.focus())},0)},[Fe,le]),xt=(0,Y.useCallback)(rt=>{if(rt){const ft=new Date(rt);Fe(ft.toISOString());const Te=gt(ft.toISOString());Te&&$e(Te)}else Fe(void 0)},[Fe]),{timezone:{string:vt},l10n:{startOfWeek:Et}}=(0,ye.getSettings)(),Ot=ee?.required&&!b?`${H} (${(0,g.__)("Required")})`:H;return(0,e.jsx)(Mt.Ay,{__nextHasNoMarginBottom:!0,id:O,label:Ot,help:ae,hideLabelFromVision:b,children:(0,e.jsxs)(Wt.A,{spacing:4,children:[(0,e.jsx)(Ke,{style:{width:"100%"},selected:le&&gt(le)||void 0,onSelect:at,month:J,onMonthChange:$e,timeZone:vt||void 0,weekStartsOn:Et}),(0,e.jsx)(Es,{ref:oe,__next40pxDefaultSize:!0,required:!!ee?.required,customValidity:dt(ee,j),type:"datetime-local",label:(0,g.__)("Date time"),hideLabelFromVision:!0,value:le?Os(gt(le)||void 0):"",onChange:xt})]})})}function Ms({data:o,field:n,onChange:m,hideLabelFromVision:b,operator:j,validity:O}){return j===v._h||j===v.MD?(0,e.jsx)(ss,{className:"dataviews-controls__datetime",data:o,field:n,onChange:m,hideLabelFromVision:b,operator:j}):(0,e.jsx)(Ps,{data:o,field:n,onChange:m,hideLabelFromVision:b,validity:O})}var $t=d("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/subDays.js"),Ns=d("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/subMonths.js"),Ut=d("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfMonth.js"),Ts=d("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/subYears.js"),ps=d("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfYear.js"),Kt=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/icon/index.js"),Nt=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),Tt=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/input-control/index.js"),is=d("../../../node_modules/.pnpm/@wordpress+icons@11.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/error.js");const{DateCalendar:Dt,DateRangeCalendar:It}=(0,ut.T)(Ze.j),Gt=[{id:"today",label:(0,g.__)("Today"),getValue:()=>(0,ye.getDate)(null)},{id:"yesterday",label:(0,g.__)("Yesterday"),getValue:()=>{const o=(0,ye.getDate)(null);return(0,$t.e)(o,1)}},{id:"past-week",label:(0,g.__)("Past week"),getValue:()=>{const o=(0,ye.getDate)(null);return(0,$t.e)(o,7)}},{id:"past-month",label:(0,g.__)("Past month"),getValue:()=>{const o=(0,ye.getDate)(null);return(0,Ns.a)(o,1)}}],Ds=[{id:"last-7-days",label:(0,g.__)("Last 7 days"),getValue:()=>{const o=(0,ye.getDate)(null);return[(0,$t.e)(o,7),o]}},{id:"last-30-days",label:(0,g.__)("Last 30 days"),getValue:()=>{const o=(0,ye.getDate)(null);return[(0,$t.e)(o,30),o]}},{id:"month-to-date",label:(0,g.__)("Month to date"),getValue:()=>{const o=(0,ye.getDate)(null);return[(0,Ut.w)(o),o]}},{id:"last-year",label:(0,g.__)("Last year"),getValue:()=>{const o=(0,ye.getDate)(null);return[(0,Ts.d)(o,1),o]}},{id:"year-to-date",label:(0,g.__)("Year to date"),getValue:()=>{const o=(0,ye.getDate)(null);return[(0,ps.D)(o),o]}}],bt=o=>{if(!o)return null;const n=(0,ye.getDate)(o);return n&&(0,qt.f)(n)?n:null},as=o=>o?typeof o=="string"?o:(0,es.GP)(o,"yyyy-MM-dd"):"";function ms({field:o,validity:n,inputRefs:m,isTouched:b,setIsTouched:j,children:O}){const{isValid:H}=o,[ae,q]=(0,Y.useState)(void 0),pe=(0,Y.useCallback)(()=>{const R=Array.isArray(m)?m:[m];for(const le of R){const J=le.current;if(J&&!J.validity.valid){q({type:"invalid",message:J.validationMessage});return}}q(void 0)},[m]);(0,Y.useEffect)(()=>{if(b){const R=setTimeout(()=>{n?q(dt(H,n)):pe()},0);return()=>clearTimeout(R)}},[b,H,n,pe]);const ee=R=>{b||(!R.relatedTarget||!R.currentTarget.contains(R.relatedTarget))&&j(!0)};return(0,e.jsxs)("div",{onBlur:ee,children:[O,(0,e.jsx)("div",{"aria-live":"polite",children:ae&&(0,e.jsxs)("p",{className:(0,_t.A)("components-validated-control__indicator",ae.type==="invalid"?"is-invalid":void 0,ae.type==="valid"?"is-valid":void 0),children:[(0,e.jsx)(Kt.A,{className:"components-validated-control__indicator-icon",icon:is.A,size:16,fill:"currentColor"}),ae.message]})})]})}function Is({data:o,field:n,onChange:m,hideLabelFromVision:b,validity:j}){const{id:O,label:H,setValue:ae,getValue:q,isValid:pe}=n,[ee,R]=(0,Y.useState)(null),le=q({item:o}),J=typeof le=="string"?le:void 0,[$e,oe]=(0,Y.useState)(()=>bt(J)||new Date),[_e,ze]=(0,Y.useState)(!1),Fe=(0,Y.useRef)(null),at=(0,Y.useCallback)(Te=>m(ae({item:o,value:Te})),[o,m,ae]),xt=(0,Y.useCallback)(Te=>{const tt=Te?(0,es.GP)(Te,"yyyy-MM-dd"):void 0;at(tt),R(null),ze(!0)},[at]),vt=(0,Y.useCallback)(Te=>{const tt=Te.getValue(),Ee=as(tt);oe(tt),at(Ee),R(Te.id),ze(!0)},[at]),Et=(0,Y.useCallback)(Te=>{if(at(Te),Te){const tt=bt(Te);tt&&oe(tt)}R(null),ze(!0)},[at]),{timezone:{string:Ot},l10n:{startOfWeek:rt}}=(0,ye.getSettings)(),ft=pe?.required?`${H} (${(0,g.__)("Required")})`:H;return(0,e.jsx)(ms,{field:n,validity:j,inputRefs:Fe,isTouched:_e,setIsTouched:ze,children:(0,e.jsx)(Mt.Ay,{__nextHasNoMarginBottom:!0,id:O,className:"dataviews-controls__date",label:ft,hideLabelFromVision:b,children:(0,e.jsxs)(Wt.A,{spacing:4,children:[(0,e.jsxs)(Ue.A,{spacing:2,wrap:!0,justify:"flex-start",children:[Gt.map(Te=>{const tt=ee===Te.id;return(0,e.jsx)(Nt.Ay,{className:"dataviews-controls__date-preset",variant:"tertiary",isPressed:tt,size:"small",onClick:()=>vt(Te),children:Te.label},Te.id)}),(0,e.jsx)(Nt.Ay,{className:"dataviews-controls__date-preset",variant:"tertiary",isPressed:!ee,size:"small",disabled:!!ee,accessibleWhenDisabled:!1,children:(0,g.__)("Custom")})]}),(0,e.jsx)(Tt.Ay,{__next40pxDefaultSize:!0,ref:Fe,type:"date",label:(0,g.__)("Date"),hideLabelFromVision:!0,value:J,onChange:Et,required:!!n.isValid?.required}),(0,e.jsx)(Dt,{style:{width:"100%"},selected:J&&bt(J)||void 0,onSelect:xt,month:$e,onMonthChange:oe,timeZone:Ot||void 0,weekStartsOn:rt})]})})})}function it({data:o,field:n,onChange:m,hideLabelFromVision:b,validity:j}){const{id:O,label:H,getValue:ae,setValue:q}=n;let pe;const ee=ae({item:o});Array.isArray(ee)&&ee.length===2&&ee.every(Ee=>typeof Ee=="string")&&(pe=ee);const R=(0,Y.useCallback)(Ee=>{m(q({item:o,value:Ee}))},[o,m,q]),[le,J]=(0,Y.useState)(null),$e=(0,Y.useMemo)(()=>{if(!pe)return{from:void 0,to:void 0};const[Ee,st]=pe;return{from:bt(Ee)||void 0,to:bt(st)||void 0}},[pe]),[oe,_e]=(0,Y.useState)(()=>$e.from||new Date),[ze,Fe]=(0,Y.useState)(!1),at=(0,Y.useRef)(null),xt=(0,Y.useRef)(null),vt=(0,Y.useCallback)((Ee,st)=>{Ee&&st?R([as(Ee),as(st)]):!Ee&&!st&&R(void 0)},[R]),Et=(0,Y.useCallback)(Ee=>{vt(Ee?.from,Ee?.to),J(null),Fe(!0)},[vt]),Ot=(0,Y.useCallback)(Ee=>{const[st,ds]=Ee.getValue();_e(st),vt(st,ds),J(Ee.id),Fe(!0)},[vt]),rt=(0,Y.useCallback)((Ee,st)=>{const[ds,ti]=pe||[void 0,void 0];if(vt(Ee==="from"?st:ds,Ee==="to"?st:ti),st){const ks=bt(st);ks&&_e(ks)}J(null),Fe(!0)},[pe,vt]),{timezone:ft,l10n:Te}=(0,ye.getSettings)(),tt=n.isValid?.required?`${H} (${(0,g.__)("Required")})`:H;return(0,e.jsx)(ms,{field:n,validity:j,inputRefs:[at,xt],isTouched:ze,setIsTouched:Fe,children:(0,e.jsx)(Mt.Ay,{__nextHasNoMarginBottom:!0,id:O,className:"dataviews-controls__date",label:tt,hideLabelFromVision:b,children:(0,e.jsxs)(Wt.A,{spacing:4,children:[(0,e.jsxs)(Ue.A,{spacing:2,wrap:!0,justify:"flex-start",children:[Ds.map(Ee=>{const st=le===Ee.id;return(0,e.jsx)(Nt.Ay,{className:"dataviews-controls__date-preset",variant:"tertiary",isPressed:st,size:"small",onClick:()=>Ot(Ee),children:Ee.label},Ee.id)}),(0,e.jsx)(Nt.Ay,{className:"dataviews-controls__date-preset",variant:"tertiary",isPressed:!le,size:"small",accessibleWhenDisabled:!1,disabled:!!le,children:(0,g.__)("Custom")})]}),(0,e.jsxs)(Ue.A,{spacing:2,children:[(0,e.jsx)(Tt.Ay,{__next40pxDefaultSize:!0,ref:at,type:"date",label:(0,g.__)("From"),hideLabelFromVision:!0,value:pe?.[0],onChange:Ee=>rt("from",Ee),required:!!n.isValid?.required}),(0,e.jsx)(Tt.Ay,{__next40pxDefaultSize:!0,ref:xt,type:"date",label:(0,g.__)("To"),hideLabelFromVision:!0,value:pe?.[1],onChange:Ee=>rt("to",Ee),required:!!n.isValid?.required})]}),(0,e.jsx)(It,{style:{width:"100%"},selected:$e,onSelect:Et,month:oe,onMonthChange:_e,timeZone:ft.string||void 0,weekStartsOn:Te.startOfWeek})]})})})}function vs({data:o,field:n,onChange:m,hideLabelFromVision:b,operator:j,validity:O}){return j===v._h||j===v.MD?(0,e.jsx)(ss,{className:"dataviews-controls__date",data:o,field:n,onChange:m,hideLabelFromVision:b,operator:j}):j===v.CX?(0,e.jsx)(it,{data:o,field:n,onChange:m,hideLabelFromVision:b,validity:O}):(0,e.jsx)(Is,{data:o,field:n,onChange:m,hideLabelFromVision:b,validity:O})}var Vt=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/input-control/input-prefix-wrapper.js"),St=d("../../../node_modules/.pnpm/@wordpress+primitives@4.33.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),Rs=(0,e.jsx)(St.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)(St.wA,{d:"M12.5939 21C14.1472 21 16.1269 20.5701 17.0711 20.1975L16.6447 18.879C16.0964 19.051 14.3299 19.6242 12.6548 19.6242C7.4467 19.6242 4.67513 16.8726 4.67513 12C4.67513 7.21338 7.50762 4.34713 12.2893 4.34713C17.132 4.34713 19.4162 7.55732 19.4162 10.7675C19.4162 14.035 19.0508 15.4968 17.4975 15.4968C16.5838 15.4968 16.0964 14.7803 16.0964 13.9777V7.5H14.4822V8.30255H14.3909C14.1777 7.67198 12.9898 7.12739 11.467 7.2707C9.18274 7.5 7.4467 9.27707 7.4467 11.8567C7.4467 14.5796 8.81726 16.672 11.467 16.758C13.203 16.8153 14.1168 16.0127 14.4822 15.1815H14.5736C14.7563 16.414 16.401 16.8439 17.467 16.8439C20.6954 16.8439 21 13.5764 21 10.7962C21 6.86943 18.0761 3 12.3807 3C6.50254 3 3 6.3535 3 11.9427C3 17.7325 6.38071 21 12.5939 21ZM11.7107 15.2962C9.73096 15.2962 9.03046 13.6051 9.03046 11.7707C9.03046 10.1083 10.0355 8.67516 11.7716 8.67516C13.599 8.67516 14.5736 9.36306 14.5736 11.7707C14.5736 14.1497 13.7513 15.2962 11.7107 15.2962Z"})});const{ValidatedInputControl:rs}=(0,ut.T)(Ze.j);function Rt({data:o,field:n,onChange:m,hideLabelFromVision:b,type:j,prefix:O,suffix:H,validity:ae}){const{label:q,placeholder:pe,description:ee,getValue:R,setValue:le,isValid:J}=n,$e=R({item:o}),oe=(0,Y.useCallback)(_e=>m(le({item:o,value:_e})),[o,le,m]);return(0,e.jsx)(rs,{required:!!J?.required,customValidity:dt(J,ae),label:q,placeholder:pe,value:$e??"",help:ee,onChange:oe,hideLabelFromVision:b,type:j,prefix:O,suffix:H,__next40pxDefaultSize:!0})}function fs({data:o,field:n,onChange:m,hideLabelFromVision:b,validity:j}){return(0,e.jsx)(Rt,{data:o,field:n,onChange:m,hideLabelFromVision:b,validity:j,type:"email",prefix:(0,e.jsx)(Vt.A,{variant:"icon",children:(0,e.jsx)(Kt.A,{icon:Rs})})})}var zs=(0,e.jsx)(St.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,e.jsx)(St.wA,{d:"M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"})});function ws({data:o,field:n,onChange:m,hideLabelFromVision:b,validity:j}){return(0,e.jsx)(Rt,{data:o,field:n,onChange:m,hideLabelFromVision:b,validity:j,type:"tel",prefix:(0,e.jsx)(Vt.A,{variant:"icon",children:(0,e.jsx)(Kt.A,{icon:zs})})})}var Bs=d("../../../node_modules/.pnpm/@wordpress+icons@11.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/link.js");function _s({data:o,field:n,onChange:m,hideLabelFromVision:b,validity:j}){return(0,e.jsx)(Rt,{data:o,field:n,onChange:m,hideLabelFromVision:b,validity:j,type:"url",prefix:(0,e.jsx)(Vt.A,{variant:"icon",children:(0,e.jsx)(Kt.A,{icon:Bs.A})})})}var Ls=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex/component.js");const{ValidatedNumberControl:Fs}=(0,ut.T)(Ze.j);function Hs(o){if(o===""||o===void 0)return"";const n=Number(o);return Number.isFinite(n)?n:""}function Ws({value:o,onChange:n,hideLabelFromVision:m,step:b}){const[j="",O=""]=o,H=(0,Y.useCallback)(q=>n([Hs(q),O]),[n,O]),ae=(0,Y.useCallback)(q=>n([j,Hs(q)]),[n,j]);return(0,e.jsx)(Mt.Ay,{__nextHasNoMarginBottom:!0,help:(0,g.__)("The max. value must be greater than the min. value."),children:(0,e.jsxs)(Ls.A,{direction:"row",gap:4,children:[(0,e.jsx)(ts.A,{label:(0,g.__)("Min."),value:j,max:O?Number(O)-b:void 0,onChange:H,__next40pxDefaultSize:!0,hideLabelFromVision:m,step:b}),(0,e.jsx)(ts.A,{label:(0,g.__)("Max."),value:O,min:j?Number(j)+b:void 0,onChange:ae,__next40pxDefaultSize:!0,hideLabelFromVision:m,step:b})]})})}function os({data:o,field:n,onChange:m,hideLabelFromVision:b,operator:j,decimals:O,validity:H}){const ae=Math.pow(10,Math.abs(O)*-1),{label:q,description:pe,getValue:ee,setValue:R,isValid:le}=n,J=ee({item:o})??"",$e=(0,Y.useCallback)(_e=>{m(R({item:o,value:["",void 0].includes(_e)?void 0:Number(_e)}))},[o,m,R]),oe=(0,Y.useCallback)(_e=>{m(R({item:o,value:_e}))},[o,m,R]);if(j===v.CX){let _e=["",""];return Array.isArray(J)&&J.length===2&&J.every(ze=>typeof ze=="number"||ze==="")&&(_e=J),(0,e.jsx)(Ws,{value:_e,onChange:oe,hideLabelFromVision:b,step:ae})}return(0,e.jsx)(Fs,{required:!!le?.required,customValidity:dt(le,H),label:q,help:pe,value:J,onChange:$e,__next40pxDefaultSize:!0,hideLabelFromVision:b,step:ae})}function hs(o){return(0,e.jsx)(os,{...o,decimals:0})}function $s(o){return(0,e.jsx)(os,{...o,decimals:2})}var Yt=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js");const{ValidatedRadioControl:Us}=(0,ut.T)(Ze.j);function Ks({data:o,field:n,onChange:m,hideLabelFromVision:b,validity:j}){const{label:O,description:H,getValue:ae,setValue:q,isValid:pe}=n,{elements:ee,isLoading:R}=(0,u.A)({elements:n.elements,getElements:n.getElements}),le=ae({item:o}),J=(0,Y.useCallback)($e=>m(q({item:o,value:$e})),[o,m,q]);return R?(0,e.jsx)(Yt.Ay,{}):(0,e.jsx)(Us,{required:!!n.isValid?.required,customValidity:dt(pe,j),label:O,help:H,onChange:J,options:ee,selected:le,hideLabelFromVision:b})}const{ValidatedSelectControl:gs}=(0,ut.T)(Ze.j);function ns({data:o,field:n,onChange:m,hideLabelFromVision:b,validity:j}){const{type:O,label:H,description:ae,getValue:q,setValue:pe,isValid:ee}=n,R=O==="array",le=q({item:o})??(R?[]:""),J=(0,Y.useCallback)(_e=>m(pe({item:o,value:_e})),[o,m,pe]),{elements:$e,isLoading:oe}=(0,u.A)({elements:n.elements,getElements:n.getElements});return oe?(0,e.jsx)(Yt.Ay,{}):(0,e.jsx)(gs,{required:!!n.isValid?.required,customValidity:dt(ee,j),label:H,value:le,help:ae,options:$e,onChange:J,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:b,multiple:R})}function Xt({data:o,field:n,onChange:m,hideLabelFromVision:b,config:j,validity:O}){const{prefix:H,suffix:ae}=j||{};return(0,e.jsx)(Rt,{data:o,field:n,onChange:m,hideLabelFromVision:b,validity:O,prefix:H?(0,Y.createElement)(H):void 0,suffix:ae?(0,Y.createElement)(ae):void 0})}const{ValidatedToggleControl:Gs}=(0,ut.T)(Ze.j);function zt({field:o,onChange:n,data:m,hideLabelFromVision:b,validity:j}){const{label:O,description:H,getValue:ae,setValue:q,isValid:pe}=o,ee=(0,Y.useCallback)(()=>{n(q({item:m,value:!ae({item:m})}))},[n,q,m,ae]);return(0,e.jsx)(Gs,{required:!!pe.required,customValidity:dt(pe,j),hidden:b,__nextHasNoMarginBottom:!0,label:O,help:H,checked:ae({item:m}),onChange:ee})}const{ValidatedTextareaControl:Bt}=(0,ut.T)(Ze.j);function bs({data:o,field:n,onChange:m,hideLabelFromVision:b,config:j,validity:O}){const{rows:H=4}=j||{},{label:ae,placeholder:q,description:pe,setValue:ee,isValid:R}=n,le=n.getValue({item:o}),J=(0,Y.useCallback)($e=>m(ee({item:o,value:$e})),[o,m,ee]);return(0,e.jsx)(Bt,{required:!!R?.required,customValidity:dt(R,O),label:ae,placeholder:q,value:le??"",help:pe,onChange:J,rows:H,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:b})}var Ys=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option/component.js");const{ValidatedToggleGroupControl:Xs}=(0,ut.T)(Ze.j);function Zs({data:o,field:n,onChange:m,hideLabelFromVision:b,validity:j}){const{getValue:O,setValue:H,isValid:ae}=n,q=O({item:o}),pe=(0,Y.useCallback)(J=>m(H({item:o,value:J})),[o,m,H]),{elements:ee,isLoading:R}=(0,u.A)({elements:n.elements,getElements:n.getElements});if(R)return(0,e.jsx)(Yt.Ay,{});if(ee.length===0)return null;const le=ee.find(J=>J.value===q);return(0,e.jsx)(Xs,{required:!!n.isValid?.required,customValidity:dt(ae,j),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:n.label,help:le?.description||n.description,onChange:pe,value:q,hideLabelFromVision:b,children:ee.map(J=>(0,e.jsx)(Ys.A,{label:J.label,value:J.value},J.value))})}const{ValidatedFormTokenField:Js}=(0,ut.T)(Ze.j);function xs({data:o,field:n,onChange:m,hideLabelFromVision:b,validity:j}){const{label:O,placeholder:H,getValue:ae,setValue:q,isValid:pe}=n,ee=ae({item:o}),{elements:R,isLoading:le}=(0,u.A)({elements:n.elements,getElements:n.getElements}),J=(0,Y.useMemo)(()=>Array.isArray(ee)?ee.map(oe=>R?.find(ze=>ze.value===oe)||{value:oe,label:oe}):[],[ee,R]),$e=(0,Y.useCallback)(oe=>{const _e=oe.map(ze=>typeof ze=="object"&&"value"in ze?ze.value:ze);m(q({item:o,value:_e}))},[m,q,o]);return le?(0,e.jsx)(Yt.Ay,{}):(0,e.jsx)(Js,{required:!!pe?.required,customValidity:dt(pe,j),label:b?void 0:O,value:J,onChange:$e,placeholder:H,suggestions:R?.map(oe=>oe.value),__experimentalValidateInput:oe=>n.isValid?.elements&&R?R.some(_e=>_e.value===oe||_e.label===oe):!0,__experimentalExpandOnFocus:R&&R.length>0,__experimentalShowHowTo:!n.isValid?.elements,displayTransform:oe=>typeof oe=="object"&&"label"in oe?oe.label:typeof oe=="string"&&R&&R.find(ze=>ze.value===oe)?.label||oe,__experimentalRenderItem:({item:oe})=>{if(typeof oe=="string"&&R){const _e=R.find(ze=>ze.value===oe);return(0,e.jsx)("span",{children:_e?.label||oe})}return(0,e.jsx)("span",{children:oe})}})}var ls=d("../../../node_modules/.pnpm/@wordpress+components@30.6.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/dropdown/index.js");const{ValidatedInputControl:ys,Picker:Le}=(0,ut.T)(Ze.j),js=({color:o,onColorChange:n})=>{const m=o&&(0,V.Mj)(o).isValid()?o:"#ffffff";return(0,e.jsx)(ls.A,{renderToggle:({onToggle:b,isOpen:j})=>(0,e.jsx)(Vt.A,{variant:"icon",children:(0,e.jsx)("button",{type:"button",onClick:b,style:{width:"24px",height:"24px",borderRadius:"50%",backgroundColor:m,border:"1px solid #ddd",cursor:"pointer",outline:j?"2px solid #007cba":"none",outlineOffset:"2px",display:"flex",alignItems:"center",justifyContent:"center",padding:0,margin:0},"aria-label":"Open color picker"})}),renderContent:()=>(0,e.jsx)("div",{style:{padding:"16px"},children:(0,e.jsx)(Le,{color:(0,V.Mj)(m),onChange:n,enableAlpha:!0})})})};function Ye({data:o,field:n,onChange:m,hideLabelFromVision:b,validity:j}){const{label:O,placeholder:H,description:ae,setValue:q,isValid:pe}=n,ee=n.getValue({item:o})||"",R=(0,Y.useCallback)(J=>{m(q({item:o,value:J.toHex()}))},[o,m,q]),le=(0,Y.useCallback)(J=>{m(q({item:o,value:J||""}))},[o,m,q]);return(0,e.jsx)(ys,{required:!!n.isValid?.required,customValidity:dt(pe,j),label:O,placeholder:H,value:ee,help:ae,onChange:le,hideLabelFromVision:b,type:"text",prefix:(0,e.jsx)(js,{color:ee,onColorChange:R})})}var ni=d("../../../node_modules/.pnpm/@wordpress+icons@11.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/unseen.js"),li=d("../../../node_modules/.pnpm/@wordpress+icons@11.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/seen.js");function Lt({data:o,field:n,onChange:m,hideLabelFromVision:b,validity:j}){const[O,H]=(0,Y.useState)(!1),ae=(0,Y.useCallback)(()=>{H(q=>!q)},[]);return(0,e.jsx)(Rt,{data:o,field:n,onChange:m,hideLabelFromVision:b,validity:j,type:O?"text":"password",suffix:(0,e.jsx)(Nt.Ay,{icon:O?ni.A:li.A,onClick:ae,size:"small",variant:"tertiary","aria-label":O?(0,g.__)("Hide password"):(0,g.__)("Show password")})})}function Zt(o){return Array.isArray(o.elements)&&o.elements.length>0||typeof o.getElements=="function"}const Qs={array:xs,checkbox:us,color:Ye,datetime:Ms,date:vs,email:fs,telephone:ws,url:_s,integer:hs,number:$s,password:Lt,radio:Ks,select:ns,text:Xt,toggle:zt,textarea:bs,toggleGroup:Zs};function qs(o){return o&&typeof o=="object"&&typeof o.control=="string"}function ei(o){const{control:n,...m}=o,b=Jt(n);return function(O){return(0,e.jsx)(b,{...O,config:m})}}function di(o,n){return typeof o.Edit=="function"?o.Edit:typeof o.Edit=="string"?Jt(o.Edit):qs(o.Edit)?ei(o.Edit):Zt(o)&&o.type!=="array"?Jt("select"):typeof n.Edit=="string"?Jt(n.Edit):qs(n.Edit)?ei(n.Edit):n.Edit}function Jt(o){if(Object.keys(Qs).includes(o))return Qs[o];throw"Control "+o+" not found"}const As=o=>({item:n})=>{const m=o.split(".");let b=n;for(const j of m)b.hasOwnProperty(j)?b=b[j]:b=void 0;return b},At=o=>({value:n})=>{const m=o.split("."),b={};let j=b;for(const O of m.slice(0,-1))j[O]={},j=j[O];return j[m.at(-1)]=n,b};function je(o,n){if(o.filterBy===!1)return!1;if(typeof o.filterBy=="object"){let b=o.filterBy.operators;(!b||!Array.isArray(b))&&(b=n.filterBy?n.filterBy.defaultOperators:[]);let j=v.CD;return typeof n.filterBy=="object"&&(j=n.filterBy.validOperators),b=b.filter(H=>j.includes(H)),Zt(o)&&b.includes(v.CX)&&(b=b.filter(H=>H!==v.CX)),b.some(H=>v.e5.includes(H))&&(b=b.filter(H=>[...v.e5,v.CX].includes(H))),b.length===0?!1:{isPrimary:!!o.filterBy.isPrimary,operators:b}}if(n.filterBy===!1)return!1;let m=n.filterBy.defaultOperators;return Zt(o)&&m.includes(v.CX)&&(m=m.filter(b=>b!==v.CX)),{operators:m}}function Oe(o){return o.map(n=>{const m=Xe(n.type),b=n.getValue||As(n.id),j=n.setValue||At(n.id),O=n.sort??function(R,le,J){return m.sort(b({item:R}),b({item:le}),J)},H={...m.isValid,...n.isValid},ae=di(n,m),q=n.render??function({item:R,field:le}){return m.render({item:R,field:le})},pe=je(n,m);return{...n,label:n.label||n.id,header:n.header||n.label||n.id,getValue:b,setValue:j,render:q,sort:O,isValid:H,Edit:ae,hasElements:Zt(n),enableHiding:n.enableHiding??!0,enableSorting:n.enableSorting??m.enableSorting??!0,filterBy:pe,readOnly:n.readOnly??m.readOnly??!1}})}}),"../../../node_modules/.pnpm/@wordpress+icons@10.31.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/caution-filled.js":((We,se,d)=>{"use strict";d.d(se,{A:()=>W});var e=d("../../../node_modules/.pnpm/@wordpress+primitives@4.31.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),g=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const W=(0,g.jsx)(e.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,g.jsx)(e.wA,{d:"M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12.75 8V13H11.25V8H12.75ZM12.75 14.5V16H11.25V14.5H12.75Z"})})}),"../../../node_modules/.pnpm/@wordpress+icons@10.31.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js":((We,se,d)=>{"use strict";d.d(se,{A:()=>W});var e=d("../../../node_modules/.pnpm/@wordpress+primitives@4.31.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),g=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const W=(0,g.jsx)(e.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,g.jsx)(e.wA,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})})}),"../../../node_modules/.pnpm/@wordpress+icons@10.31.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/color.js":((We,se,d)=>{"use strict";d.d(se,{A:()=>W});var e=d("../../../node_modules/.pnpm/@wordpress+primitives@4.31.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),g=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const W=(0,g.jsx)(e.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,g.jsx)(e.wA,{d:"M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z"})})}),"../../../node_modules/.pnpm/@wordpress+icons@10.31.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":((We,se,d)=>{"use strict";d.d(se,{A:()=>W});var e=d("../../../node_modules/.pnpm/@wordpress+primitives@4.31.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),g=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const W=(0,g.jsx)(e.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,g.jsx)(e.wA,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})}),"../../../node_modules/.pnpm/@wordpress+icons@10.31.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/plugins.js":((We,se,d)=>{"use strict";d.d(se,{A:()=>W});var e=d("../../../node_modules/.pnpm/@wordpress+primitives@4.31.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),g=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const W=(0,g.jsx)(e.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,g.jsx)(e.wA,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"})})}),"../../../node_modules/.pnpm/@wordpress+icons@10.31.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/shield.js":((We,se,d)=>{"use strict";d.d(se,{A:()=>W});var e=d("../../../node_modules/.pnpm/@wordpress+primitives@4.31.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),g=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const W=(0,g.jsx)(e.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,g.jsx)(e.wA,{d:"M12 3.176l6.75 3.068v4.574c0 3.9-2.504 7.59-6.035 8.755a2.283 2.283 0 01-1.43 0c-3.53-1.164-6.035-4.856-6.035-8.755V6.244L12 3.176zM6.75 7.21v3.608c0 3.313 2.145 6.388 5.005 7.33.159.053.331.053.49 0 2.86-.942 5.005-4.017 5.005-7.33V7.21L12 4.824 6.75 7.21z",fillRule:"evenodd",clipRule:"evenodd"})})}),"../../../node_modules/.pnpm/@wordpress+icons@10.31.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/wordpress.js":((We,se,d)=>{"use strict";d.d(se,{A:()=>W});var e=d("../../../node_modules/.pnpm/@wordpress+primitives@4.31.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),g=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const W=(0,g.jsx)(e.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",children:(0,g.jsx)(e.wA,{d:"M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"})})}),"../../../node_modules/.pnpm/@wordpress+icons@11.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/seen.js":((We,se,d)=>{"use strict";d.d(se,{A:()=>u});var e=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),g=d("../../../node_modules/.pnpm/@wordpress+primitives@4.33.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),u=(0,e.jsx)(g.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)(g.wA,{d:"M3.99961 13C4.67043 13.3354 4.6703 13.3357 4.67017 13.3359L4.67298 13.3305C4.67621 13.3242 4.68184 13.3135 4.68988 13.2985C4.70595 13.2686 4.7316 13.2218 4.76695 13.1608C4.8377 13.0385 4.94692 12.8592 5.09541 12.6419C5.39312 12.2062 5.84436 11.624 6.45435 11.0431C7.67308 9.88241 9.49719 8.75 11.9996 8.75C14.502 8.75 16.3261 9.88241 17.5449 11.0431C18.1549 11.624 18.6061 12.2062 18.9038 12.6419C19.0523 12.8592 19.1615 13.0385 19.2323 13.1608C19.2676 13.2218 19.2933 13.2686 19.3093 13.2985C19.3174 13.3135 19.323 13.3242 19.3262 13.3305L19.3291 13.3359C19.3289 13.3357 19.3288 13.3354 19.9996 13C20.6704 12.6646 20.6703 12.6643 20.6701 12.664L20.6697 12.6632L20.6688 12.6614L20.6662 12.6563L20.6583 12.6408C20.6517 12.6282 20.6427 12.6108 20.631 12.5892C20.6078 12.5459 20.5744 12.4852 20.5306 12.4096C20.4432 12.2584 20.3141 12.0471 20.1423 11.7956C19.7994 11.2938 19.2819 10.626 18.5794 9.9569C17.1731 8.61759 14.9972 7.25 11.9996 7.25C9.00203 7.25 6.82614 8.61759 5.41987 9.9569C4.71736 10.626 4.19984 11.2938 3.85694 11.7956C3.68511 12.0471 3.55605 12.2584 3.4686 12.4096C3.42484 12.4852 3.39142 12.5459 3.36818 12.5892C3.35656 12.6108 3.34748 12.6282 3.34092 12.6408L3.33297 12.6563L3.33041 12.6614L3.32948 12.6632L3.32911 12.664C3.32894 12.6643 3.32879 12.6646 3.99961 13ZM11.9996 16C13.9326 16 15.4996 14.433 15.4996 12.5C15.4996 10.567 13.9326 9 11.9996 9C10.0666 9 8.49961 10.567 8.49961 12.5C8.49961 14.433 10.0666 16 11.9996 16Z"})})}),"../../../node_modules/.pnpm/@wordpress+icons@11.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/unseen.js":((We,se,d)=>{"use strict";d.d(se,{A:()=>u});var e=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),g=d("../../../node_modules/.pnpm/@wordpress+primitives@4.33.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),u=(0,e.jsx)(g.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)(g.wA,{d:"M20.7 12.7s0-.1-.1-.2c0-.2-.2-.4-.4-.6-.3-.5-.9-1.2-1.6-1.8-.7-.6-1.5-1.3-2.6-1.8l-.6 1.4c.9.4 1.6 1 2.1 1.5.6.6 1.1 1.2 1.4 1.6.1.2.3.4.3.5v.1l.7-.3.7-.3Zm-5.2-9.3-1.8 4c-.5-.1-1.1-.2-1.7-.2-3 0-5.2 1.4-6.6 2.7-.7.7-1.2 1.3-1.6 1.8-.2.3-.3.5-.4.6 0 0 0 .1-.1.2s0 0 .7.3l.7.3V13c0-.1.2-.3.3-.5.3-.4.7-1 1.4-1.6 1.2-1.2 3-2.3 5.5-2.3H13v.3c-.4 0-.8-.1-1.1-.1-1.9 0-3.5 1.6-3.5 3.5s.6 2.3 1.6 2.9l-2 4.4.9.4 7.6-16.2-.9-.4Zm-3 12.6c1.7-.2 3-1.7 3-3.5s-.2-1.4-.6-1.9L12.4 16Z"})})}),"../../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/index.mjs":((We,se,d)=>{"use strict";d.d(se,{Mj:()=>B,X$:()=>mt});var e={grad:.9,turn:360,rad:360/(2*Math.PI)},g=function(h){return typeof h=="string"?h.length>0:typeof h=="number"},u=function(h,_,V){return _===void 0&&(_=0),V===void 0&&(V=Math.pow(10,_)),Math.round(V*h)/V+0},W=function(h,_,V){return _===void 0&&(_=0),V===void 0&&(V=1),h>V?V:h>_?h:_},v=function(h){return(h=isFinite(h)?h%360:0)>0?h:h+360},I=function(h){return{r:W(h.r,0,255),g:W(h.g,0,255),b:W(h.b,0,255),a:W(h.a)}},Me=function(h){return{r:u(h.r),g:u(h.g),b:u(h.b),a:u(h.a,3)}},K=/^#([0-9a-f]{3,8})$/i,p=function(h){var _=h.toString(16);return _.length<2?"0"+_:_},M=function(h){var _=h.r,V=h.g,G=h.b,we=h.a,Ce=Math.max(_,V,G),Re=Ce-Math.min(_,V,G),Xe=Re?Ce===_?(V-G)/Re:Ce===V?2+(G-_)/Re:4+(_-V)/Re:0;return{h:60*(Xe<0?Xe+6:Xe),s:Ce?Re/Ce*100:0,v:Ce/255*100,a:we}},xe=function(h){var _=h.h,V=h.s,G=h.v,we=h.a;_=_/360*6,V/=100,G/=100;var Ce=Math.floor(_),Re=G*(1-V),Xe=G*(1-(_-Ce)*V),Ze=G*(1-(1-_+Ce)*V),Y=Ce%6;return{r:255*[G,Xe,Re,Re,Ze,G][Y],g:255*[Ze,G,G,Xe,Re,Re][Y],b:255*[Re,Re,Ze,G,G,Xe][Y],a:we}},he=function(h){return{h:v(h.h),s:W(h.s,0,100),l:W(h.l,0,100),a:W(h.a)}},De=function(h){return{h:u(h.h),s:u(h.s),l:u(h.l),a:u(h.a,3)}},Ne=function(h){return xe((V=(_=h).s,{h:_.h,s:(V*=((G=_.l)<50?G:100-G)/100)>0?2*V/(G+V)*100:0,v:G+V,a:_.a}));var _,V,G},Z=function(h){return{h:(_=M(h)).h,s:(we=(200-(V=_.s))*(G=_.v)/100)>0&&we<200?V*G/100/(we<=100?we:200-we)*100:0,l:we/2,a:_.a};var _,V,G,we},re=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ve=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ye=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ge=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,T={string:[[function(h){var _=K.exec(h);return _?(h=_[1]).length<=4?{r:parseInt(h[0]+h[0],16),g:parseInt(h[1]+h[1],16),b:parseInt(h[2]+h[2],16),a:h.length===4?u(parseInt(h[3]+h[3],16)/255,2):1}:h.length===6||h.length===8?{r:parseInt(h.substr(0,2),16),g:parseInt(h.substr(2,2),16),b:parseInt(h.substr(4,2),16),a:h.length===8?u(parseInt(h.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(h){var _=ye.exec(h)||Ge.exec(h);return _?_[2]!==_[4]||_[4]!==_[6]?null:I({r:Number(_[1])/(_[2]?100/255:1),g:Number(_[3])/(_[4]?100/255:1),b:Number(_[5])/(_[6]?100/255:1),a:_[7]===void 0?1:Number(_[7])/(_[8]?100:1)}):null},"rgb"],[function(h){var _=re.exec(h)||ve.exec(h);if(!_)return null;var V,G,we=he({h:(V=_[1],G=_[2],G===void 0&&(G="deg"),Number(V)*(e[G]||1)),s:Number(_[3]),l:Number(_[4]),a:_[5]===void 0?1:Number(_[5])/(_[6]?100:1)});return Ne(we)},"hsl"]],object:[[function(h){var _=h.r,V=h.g,G=h.b,we=h.a,Ce=we===void 0?1:we;return g(_)&&g(V)&&g(G)?I({r:Number(_),g:Number(V),b:Number(G),a:Number(Ce)}):null},"rgb"],[function(h){var _=h.h,V=h.s,G=h.l,we=h.a,Ce=we===void 0?1:we;if(!g(_)||!g(V)||!g(G))return null;var Re=he({h:Number(_),s:Number(V),l:Number(G),a:Number(Ce)});return Ne(Re)},"hsl"],[function(h){var _=h.h,V=h.s,G=h.v,we=h.a,Ce=we===void 0?1:we;if(!g(_)||!g(V)||!g(G))return null;var Re=(function(Xe){return{h:v(Xe.h),s:W(Xe.s,0,100),v:W(Xe.v,0,100),a:W(Xe.a)}})({h:Number(_),s:Number(V),v:Number(G),a:Number(Ce)});return xe(Re)},"hsv"]]},ke=function(h,_){for(var V=0;V<_.length;V++){var G=_[V][0](h);if(G)return[G,_[V][1]]}return[null,void 0]},lt=function(h){return typeof h=="string"?ke(h.trim(),T.string):typeof h=="object"&&h!==null?ke(h,T.object):[null,void 0]},ct=function(h){return lt(h)[1]},qe=function(h,_){var V=Z(h);return{h:V.h,s:W(V.s+100*_,0,100),l:V.l,a:V.a}},A=function(h){return(299*h.r+587*h.g+114*h.b)/1e3/255},ue=function(h,_){var V=Z(h);return{h:V.h,s:V.s,l:W(V.l+100*_,0,100),a:V.a}},$=(function(){function h(_){this.parsed=lt(_)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return h.prototype.isValid=function(){return this.parsed!==null},h.prototype.brightness=function(){return u(A(this.rgba),2)},h.prototype.isDark=function(){return A(this.rgba)<.5},h.prototype.isLight=function(){return A(this.rgba)>=.5},h.prototype.toHex=function(){return _=Me(this.rgba),V=_.r,G=_.g,we=_.b,Re=(Ce=_.a)<1?p(u(255*Ce)):"","#"+p(V)+p(G)+p(we)+Re;var _,V,G,we,Ce,Re},h.prototype.toRgb=function(){return Me(this.rgba)},h.prototype.toRgbString=function(){return _=Me(this.rgba),V=_.r,G=_.g,we=_.b,(Ce=_.a)<1?"rgba("+V+", "+G+", "+we+", "+Ce+")":"rgb("+V+", "+G+", "+we+")";var _,V,G,we,Ce},h.prototype.toHsl=function(){return De(Z(this.rgba))},h.prototype.toHslString=function(){return _=De(Z(this.rgba)),V=_.h,G=_.s,we=_.l,(Ce=_.a)<1?"hsla("+V+", "+G+"%, "+we+"%, "+Ce+")":"hsl("+V+", "+G+"%, "+we+"%)";var _,V,G,we,Ce},h.prototype.toHsv=function(){return _=M(this.rgba),{h:u(_.h),s:u(_.s),v:u(_.v),a:u(_.a,3)};var _},h.prototype.invert=function(){return B({r:255-(_=this.rgba).r,g:255-_.g,b:255-_.b,a:_.a});var _},h.prototype.saturate=function(_){return _===void 0&&(_=.1),B(qe(this.rgba,_))},h.prototype.desaturate=function(_){return _===void 0&&(_=.1),B(qe(this.rgba,-_))},h.prototype.grayscale=function(){return B(qe(this.rgba,-1))},h.prototype.lighten=function(_){return _===void 0&&(_=.1),B(ue(this.rgba,_))},h.prototype.darken=function(_){return _===void 0&&(_=.1),B(ue(this.rgba,-_))},h.prototype.rotate=function(_){return _===void 0&&(_=15),this.hue(this.hue()+_)},h.prototype.alpha=function(_){return typeof _=="number"?B({r:(V=this.rgba).r,g:V.g,b:V.b,a:_}):u(this.rgba.a,3);var V},h.prototype.hue=function(_){var V=Z(this.rgba);return typeof _=="number"?B({h:_,s:V.s,l:V.l,a:V.a}):u(V.h)},h.prototype.isEqual=function(_){return this.toHex()===B(_).toHex()},h})(),B=function(h){return h instanceof $?h:new $(h)},Be=[],mt=function(h){h.forEach(function(_){Be.indexOf(_)<0&&(_($,T),Be.push(_))})},Pt=function(){return new $({r:255*Math.random(),g:255*Math.random(),b:255*Math.random()})}}),"../../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/plugins/names.mjs":((We,se,d)=>{"use strict";d.d(se,{A:()=>e});function e(g,u){var W={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},v={};for(var I in W)v[W[I]]=I;var Me={};g.prototype.toName=function(K){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var p,M,xe=v[this.toHex()];if(xe)return xe;if(K?.closest){var he=this.toRgb(),De=1/0,Ne="black";if(!Me.length)for(var Z in W)Me[Z]=new g(W[Z]).toRgb();for(var re in W){var ve=(p=he,M=Me[re],Math.pow(p.r-M.r,2)+Math.pow(p.g-M.g,2)+Math.pow(p.b-M.b,2));ve<De&&(De=ve,Ne=re)}return Ne}},u.string.push([function(K){var p=K.toLowerCase(),M=p==="transparent"?"#0000":W[p];return M?new g(M).toRgb():null},"name"])}}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/@wordpress+dataviews@10.0.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_e024960755d6217a2bba17183c44eb48/node_modules/@wordpress/dataviews/build-style/style.css":((We,se,d)=>{"use strict";d.d(se,{A:()=>I});var e=d("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=d.n(e),u=d("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),W=d.n(u),v=W()(g());v.push([We.id,`/**
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
  font-weight: 500;
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
  font-weight: 500;
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
  font-weight: 500;
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
  font-weight: 500;
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
}`,""]);const I=v}),"../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/subDays.js":((We,se,d)=>{"use strict";d.d(se,{e:()=>g});var e=d("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addDays.js");function g(W,v,I){return(0,e.f)(W,-v,I)}var u=null}),"../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/subMonths.js":((We,se,d)=>{"use strict";d.d(se,{a:()=>g});var e=d("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addMonths.js");function g(W,v,I){return(0,e.P)(W,-v,I)}var u=null}),"../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/subYears.js":((We,se,d)=>{"use strict";d.d(se,{d:()=>g});var e=d("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addYears.js");function g(W,v,I){return(0,e.e)(W,-v,I)}var u=null}),"../../../node_modules/.pnpm/highlight-words-core@1.2.3/node_modules/highlight-words-core/dist/index.js":(We=>{We.exports=(function(se){var d={};function e(g){if(d[g])return d[g].exports;var u=d[g]={exports:{},id:g,loaded:!1};return se[g].call(u.exports,u,u.exports,e),u.loaded=!0,u.exports}return e.m=se,e.c=d,e.p="",e(0)})([(function(se,d,e){se.exports=e(1)}),(function(se,d,e){"use strict";Object.defineProperty(d,"__esModule",{value:!0});var g=e(2);Object.defineProperty(d,"combineChunks",{enumerable:!0,get:function(){return g.combineChunks}}),Object.defineProperty(d,"fillInChunks",{enumerable:!0,get:function(){return g.fillInChunks}}),Object.defineProperty(d,"findAll",{enumerable:!0,get:function(){return g.findAll}}),Object.defineProperty(d,"findChunks",{enumerable:!0,get:function(){return g.findChunks}})}),(function(se,d){"use strict";Object.defineProperty(d,"__esModule",{value:!0});var e=d.findAll=function(K){var p=K.autoEscape,M=K.caseSensitive,xe=M===void 0?!1:M,he=K.findChunks,De=he===void 0?u:he,Ne=K.sanitize,Z=K.searchWords,re=K.textToHighlight;return W({chunksToHighlight:g({chunks:De({autoEscape:p,caseSensitive:xe,sanitize:Ne,searchWords:Z,textToHighlight:re})}),totalLength:re?re.length:0})},g=d.combineChunks=function(K){var p=K.chunks;return p=p.sort(function(M,xe){return M.start-xe.start}).reduce(function(M,xe){if(M.length===0)return[xe];var he=M.pop();if(xe.start<he.end){var De=Math.max(he.end,xe.end);M.push({highlight:!1,start:he.start,end:De})}else M.push(he,xe);return M},[]),p},u=function(K){var p=K.autoEscape,M=K.caseSensitive,xe=K.sanitize,he=xe===void 0?v:xe,De=K.searchWords,Ne=K.textToHighlight;return Ne=he(Ne),De.filter(function(Z){return Z}).reduce(function(Z,re){re=he(re),p&&(re=I(re));for(var ve=new RegExp(re,M?"g":"gi"),ye=void 0;ye=ve.exec(Ne);){var Ge=ye.index,T=ve.lastIndex;T>Ge&&Z.push({highlight:!1,start:Ge,end:T}),ye.index===ve.lastIndex&&ve.lastIndex++}return Z},[])};d.findChunks=u;var W=d.fillInChunks=function(K){var p=K.chunksToHighlight,M=K.totalLength,xe=[],he=function(Z,re,ve){re-Z>0&&xe.push({start:Z,end:re,highlight:ve})};if(p.length===0)he(0,M,!1);else{var De=0;p.forEach(function(Ne){he(De,Ne.start,!1),he(Ne.start,Ne.end,!0),De=Ne.end}),he(De,M,!1)}return xe};function v(Me){return Me}function I(Me){return Me.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}})])})}]);
