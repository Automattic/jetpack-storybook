"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8911],{"../../plugins/protect/src/js/components/navigation/stories/index.stories.jsx":(K,k,e)=>{var be,je,xe;e.r(k),e.d(k,{Default:()=>G,__namedExportsOrder:()=>ye,default:()=>Ee});var j=e("../../../node_modules/.pnpm/@wordpress+i18n@4.47.0/node_modules/@wordpress/i18n/build-module/index.js"),S=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),T=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/wordpress.js"),X=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/plugins.js"),w=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/color.js"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),V=e("../components/components/text/index.tsx"),ee=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js"),L=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),te=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-up.js"),Y=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js"),ge=e("../components/components/button/index.tsx"),E=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),M=e.n(E),C=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),R=e.n(C),se=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),de=e.n(se),x=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/navigation/styles.module.scss"),H={};H.insert="head",H.singleton=!1;var ne=de()(x.Z,H);const r=x.Z.locals||{};var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const D=({icon:n,children:d,className:s})=>(0,t.jsxs)(V.ZP,{className:M()(r["navigation-item-label"],s),children:[n&&(0,t.jsx)(L.Z,{icon:n,className:r["navigation-item-icon"],size:28}),(0,t.jsx)("span",{className:r["navigation-item-label-content"],children:d})]});D.displayName="ItemLabel",D.propTypes={icon:R().node,children:R().node.isRequired};const U=D;D.__docgenInfo={description:"",methods:[],displayName:"ItemLabel",props:{icon:{description:"",type:{name:"node"},required:!1},children:{description:"",type:{name:"node"},required:!0}}};const W=o.createContext(),Q=({selected:n,onSelect:d})=>{const[s,v]=(0,o.useState)([]),[g,_]=(0,o.useState)([]),[u,b]=(0,o.useState)(),I=i=>{d(i)},a=i=>{b(i)},f=(i,m)=>{const p=i-1,h=p<0?m:p,l=s[h];return l!=null&&l.disabled?f(h,m):l},N=(i,m)=>{const p=i+1,h=p>m?0:p,l=s[h];return l!=null&&l.disabled?N(h,m):l};return{selectedItem:n,handleClickItem:I,handleKeyDownItem:i=>{const m=i==null?void 0:i.code,p=s.findIndex(c=>(c==null?void 0:c.id)===n),h=s.length-1;let l;if(m==="ArrowUp"){const c=f(p,h);l=c==null?void 0:c.id}else if(m==="ArrowDown"){const c=N(p,h);l=c==null?void 0:c.id}else(m==="Enter"||m==="Space")&&u&&(l=u);if(l){const c=g[l];c==null||c.focus(),d(l)}},handleFocusItem:a,registerRef:(i,m)=>{_(p=>!p[m]&&i?{...p,[m]:i}:p)},registerItem:i=>{v(m=>{const p=[...m],h=i==null?void 0:i.id,l=p.findIndex(c=>(c==null?void 0:c.id)===h);return l>=0?p[l]=i:p.push(i),p})},items:s}},oe=j.__,q=8,$=({icon:n,label:d,children:s})=>{const[v,g]=(0,o.useState)(!0),{mode:_}=(0,o.useContext)(W),u=Array.isArray(s)&&(s==null?void 0:s.length)>=q&&_==="list",b=u&&v?s.slice(0,q):s,I=u?(s==null?void 0:s.length)-q:0,a=(0,o.useCallback)(()=>{g(f=>!f)},[]);return(0,t.jsxs)("li",{tabIndex:-1,role:"menuitem",className:r["navigation-group"],children:[(0,t.jsx)(U,{icon:n,className:r["navigation-group-label"],children:d}),(0,t.jsxs)("div",{className:r["navigation-group-list"],children:[(0,t.jsx)("ul",{className:r["navigation-group-content"],children:b}),u&&(0,t.jsx)("div",{className:r["navigation-group-truncate"],children:(0,t.jsx)(ge.Z,{variant:"link",onClick:a,children:v?(0,j.gB)(oe("Show %s more","jetpack-protect"),I):(0,j.gB)(oe("Hide %s items","jetpack-protect"),I)})})]})]})};$.displayName="NavigationGroup";const B=$;$.__docgenInfo={description:"",methods:[],displayName:"NavigationGroup"};var le=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),ce=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js");const ae=j.__,pe=(n,d)=>d?n===0?{popoverText:ae("No known threats found to affect this version","jetpack-protect"),badgeElement:(0,t.jsx)(L.Z,{icon:ce.Z,size:28,className:r["navigation-item-check-badge"]})}:{popoverText:null,badgeElement:(0,t.jsx)(V.ZP,{variant:"body-extra-small",className:r["navigation-item-badge"],component:"div",children:n})}:{popoverText:ae("This item was added to your site after the most recent scan. We will check for threats during the next scheduled one.","jetpack-protect"),badgeElement:(0,t.jsx)(L.Z,{icon:le.Z,size:28,className:r["navigation-item-info-badge"]})},Z=({count:n,checked:d})=>{const{popoverText:s,badgeElement:v}=pe(n,d),[g,_]=(0,o.useState)(!1),u=(0,o.useCallback)(()=>{_(!0)},[]),b=(0,o.useCallback)(()=>{_(!1)},[]);return(0,t.jsxs)("div",{onMouseLeave:s?b:null,onMouseEnter:s?u:null,onClick:s?u:null,onFocus:s?u:null,onBlur:s?b:null,role:"presentation",children:[v,g&&(0,t.jsx)(ee.ZP,{noArrow:!1,inline:!0,children:(0,t.jsx)(V.ZP,{variant:"body-small",className:r["popover-text"],children:s})})]})};Z.displayName="ItemBadge",Z.propTypes={count:R().number,checked:R().bool};const ie=Z;Z.__docgenInfo={description:"",methods:[],displayName:"ItemBadge",props:{count:{description:"",type:{name:"number"},required:!1},checked:{description:"",type:{name:"bool"},required:!1}}};const J=({id:n,label:d,icon:s,badge:v,disabled:g,onClick:_,onKeyDown:u,onFocus:b,checked:I})=>{const a=(0,o.useContext)(W),f=(a==null?void 0:a.selectedItem)===n,N=a==null?void 0:a.registerItem,F=a==null?void 0:a.registerRef,P=a==null?void 0:a.handleClickItem,y=a==null?void 0:a.handleKeyDownItem,i=a==null?void 0:a.handleFocusItem,m=M()(r["navigation-item"],{[r.clickable]:!g,[r.selected]:f}),p=(0,o.useCallback)(O=>{_==null||_(O),P==null||P(n)},[P,n,_]),h=(0,o.useCallback)(O=>{u==null||u(O),y==null||y(O)},[y,u]),l=(0,o.useCallback)(O=>{F(O,n)},[F,n]),c=(0,o.useCallback)(O=>{b==null||b(O),i==null||i(n)},[i,n,b]);return(0,o.useEffect)(()=>{N({id:n,disabled:g,label:d,icon:s})},[]),(0,t.jsxs)("li",{className:m,onClick:g?null:p,onKeyDown:h,onFocus:g?null:c,role:"menuitem",tabIndex:g?-1:0,ref:l,children:[(0,t.jsx)(U,{icon:s,children:d}),(0,t.jsx)(ie,{count:v,checked:I})]})};J.displayName="NavigationItem";const z=J;J.__docgenInfo={description:"",methods:[],displayName:"NavigationItem"};const he=j.__,ue=({children:n})=>(0,t.jsx)("ul",{className:r.navigation,role:"menu",children:n});ue.displayName="NavigationList";const _e=({children:n,data:d})=>{var a,f,N,F,P;const s=(0,o.useRef)(),[v,g]=(0,o.useState)(!1),_=(f=(a=d==null?void 0:d.items)==null?void 0:a.find(y=>(y==null?void 0:y.id)===(d==null?void 0:d.selectedItem)))!=null?f:{label:he("See all results","jetpack-protect")},{label:u,icon:b}=_,I=(0,o.useCallback)(()=>{g(y=>!y)},[]);return(0,t.jsxs)("button",{className:r["navigation-dropdown-button"],onClick:I,ref:s,children:[(0,t.jsxs)("div",{className:r["navigation-dropdown-label"],children:[b&&(0,t.jsx)(L.Z,{icon:b,className:r["navigation-dropdown-icon"]}),(0,t.jsx)(V.ZP,{children:u})]}),(0,t.jsx)(L.Z,{icon:v?te.Z:Y.Z,size:32}),(0,t.jsx)(ee.ZP,{position:"bottom center",anchorRef:s==null?void 0:s.current,inline:!0,children:(0,t.jsx)("div",{style:{display:v?"block":"none",width:(P=(F=(N=s==null?void 0:s.current)==null?void 0:N.getBoundingClientRect)==null?void 0:F.call(N))==null?void 0:P.width},children:n})})]})};_e.displayName="NavigationDropdown";const we=n=>{switch(n){case"list":return ue;case"dropdown":return _e;default:return ue}},me=({children:n,selected:d,onSelect:s,mode:v="list"})=>{const g=Q({selected:d,onSelect:s}),_=we(v);return(0,t.jsx)(W.Provider,{value:{...g,mode:v},children:(0,t.jsx)(_,{data:g,children:n})})};me.displayName="Navigation";const ve=me;me.__docgenInfo={description:"",methods:[],displayName:"Navigation",props:{mode:{defaultValue:{value:"'list'",computed:!1},required:!1}}},z.__docgenInfo={description:"",methods:[],displayName:"NavigationItem"},B.__docgenInfo={description:"",methods:[],displayName:"NavigationGroup"};var fe=`import { __ } from '@wordpress/i18n';
import { wordpress, plugins, warning, color } from '@wordpress/icons';
import React, { useState } from 'react';
import Navigation, { NavigationItem, NavigationGroup } from '..';

export default {
	title: 'Plugins/Protect/Navigation',
	component: Navigation,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		Story => (
			<div style={ { width: 800 } }>
				<Story />
			</div>
		),
	],
};

export const Default = args => {
	const [ selected, setSelectedItem ] = useState( args.selected );

	return (
		<Navigation selected={ selected } onSelect={ setSelectedItem }>
			<NavigationItem
				id="all"
				label={ __( 'All threats', 'jetpack-protect' ) }
				icon={ warning }
				badge={ 10 }
			/>
			<NavigationItem
				id="wordpress"
				label={ __( 'WordPress', 'jetpack-protect' ) }
				icon={ wordpress }
				badge={ 12 }
			/>
			<NavigationGroup label={ __( 'Plugins', 'jetpack-protect' ) } icon={ plugins }>
				<NavigationItem id="jetpack" label={ __( 'Jetpack', 'jetpack-protect' ) } badge={ 9 } />
				<NavigationItem
					id="jetpack-backup"
					label={ __( 'Jetpack Backup', 'jetpack-protect' ) }
					badge={ 9 }
				/>
			</NavigationGroup>
			<NavigationGroup label={ __( 'Themes', 'jetpack-protect' ) } icon={ color }>
				<NavigationItem
					id="nichetable"
					label={ __( 'Nichetable', 'jetpack-protect' ) }
					badge={ 0 }
					disabled
				/>
				<NavigationItem
					id="twenty-two"
					label={ __( 'Twenty Two', 'jetpack-protect' ) }
					badge={ 2 }
				/>
			</NavigationGroup>
		</Navigation>
	);
};
Default.args = {
	selected: 'all',
};
`,Ne={Default:{startLoc:{col:23,line:21},endLoc:{col:1,line:61},startBody:{col:23,line:21},endBody:{col:1,line:61}}};const A=j.__,Ee={title:"Plugins/Protect/Navigation",component:ve,parameters:{storySource:{source:`import { __ } from '@wordpress/i18n';
import { wordpress, plugins, warning, color } from '@wordpress/icons';
import React, { useState } from 'react';
import Navigation, { NavigationItem, NavigationGroup } from '..';

export default {
	title: 'Plugins/Protect/Navigation',
	component: Navigation,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		Story => (
			<div style={ { width: 800 } }>
				<Story />
			</div>
		),
	],
};

export const Default = args => {
	const [ selected, setSelectedItem ] = useState( args.selected );

	return (
		<Navigation selected={ selected } onSelect={ setSelectedItem }>
			<NavigationItem
				id="all"
				label={ __( 'All threats', 'jetpack-protect' ) }
				icon={ warning }
				badge={ 10 }
			/>
			<NavigationItem
				id="wordpress"
				label={ __( 'WordPress', 'jetpack-protect' ) }
				icon={ wordpress }
				badge={ 12 }
			/>
			<NavigationGroup label={ __( 'Plugins', 'jetpack-protect' ) } icon={ plugins }>
				<NavigationItem id="jetpack" label={ __( 'Jetpack', 'jetpack-protect' ) } badge={ 9 } />
				<NavigationItem
					id="jetpack-backup"
					label={ __( 'Jetpack Backup', 'jetpack-protect' ) }
					badge={ 9 }
				/>
			</NavigationGroup>
			<NavigationGroup label={ __( 'Themes', 'jetpack-protect' ) } icon={ color }>
				<NavigationItem
					id="nichetable"
					label={ __( 'Nichetable', 'jetpack-protect' ) }
					badge={ 0 }
					disabled
				/>
				<NavigationItem
					id="twenty-two"
					label={ __( 'Twenty Two', 'jetpack-protect' ) }
					badge={ 2 }
				/>
			</NavigationGroup>
		</Navigation>
	);
};
Default.args = {
	selected: 'all',
};
`,locationsMap:{default:{startLoc:{col:23,line:21},endLoc:{col:1,line:61},startBody:{col:23,line:21},endBody:{col:1,line:61}}}},layout:"centered"},decorators:[n=>(0,t.jsx)("div",{style:{width:800},children:(0,t.jsx)(n,{})})]},G=n=>{const[d,s]=(0,o.useState)(n.selected);return(0,t.jsxs)(ve,{selected:d,onSelect:s,children:[(0,t.jsx)(z,{id:"all",label:A("All threats","jetpack-protect"),icon:S.Z,badge:10}),(0,t.jsx)(z,{id:"wordpress",label:A("WordPress","jetpack-protect"),icon:T.Z,badge:12}),(0,t.jsxs)(B,{label:A("Plugins","jetpack-protect"),icon:X.Z,children:[(0,t.jsx)(z,{id:"jetpack",label:A("Jetpack","jetpack-protect"),badge:9}),(0,t.jsx)(z,{id:"jetpack-backup",label:A("Jetpack Backup","jetpack-protect"),badge:9})]}),(0,t.jsxs)(B,{label:A("Themes","jetpack-protect"),icon:w.Z,children:[(0,t.jsx)(z,{id:"nichetable",label:A("Nichetable","jetpack-protect"),badge:0,disabled:!0}),(0,t.jsx)(z,{id:"twenty-two",label:A("Twenty Two","jetpack-protect"),badge:2})]})]})};G.displayName="Default",G.args={selected:"all"},G.parameters={...G.parameters,docs:{...(be=G.parameters)==null?void 0:be.docs,source:{originalSource:`args => {
  const [selected, setSelectedItem] = useState(args.selected);
  return <Navigation selected={selected} onSelect={setSelectedItem}>
            <NavigationItem id="all" label={__('All threats', 'jetpack-protect')} icon={warning} badge={10} />
            <NavigationItem id="wordpress" label={__('WordPress', 'jetpack-protect')} icon={wordpress} badge={12} />
            <NavigationGroup label={__('Plugins', 'jetpack-protect')} icon={plugins}>
                <NavigationItem id="jetpack" label={__('Jetpack', 'jetpack-protect')} badge={9} />
                <NavigationItem id="jetpack-backup" label={__('Jetpack Backup', 'jetpack-protect')} badge={9} />
            </NavigationGroup>
            <NavigationGroup label={__('Themes', 'jetpack-protect')} icon={color}>
                <NavigationItem id="nichetable" label={__('Nichetable', 'jetpack-protect')} badge={0} disabled />
                <NavigationItem id="twenty-two" label={__('Twenty Two', 'jetpack-protect')} badge={2} />
            </NavigationGroup>
        </Navigation>;
}`,...(xe=(je=G.parameters)==null?void 0:je.docs)==null?void 0:xe.source}}};const ye=["Default"]},"../components/components/button/index.tsx":(K,k,e)=>{e.d(k,{Z:()=>R});var j=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),S=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),T=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),X=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),w=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),o=e.n(w),V=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),ee=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),L=e.n(ee),te=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),Y={};Y.insert="head",Y.singleton=!1;var ge=L()(te.Z,Y);const E=te.Z.locals||{};var M=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const C=(0,V.forwardRef)((se,de)=>{var ie,J;const{children:x,variant:H="primary",size:ne="normal",weight:r="bold",icon:t,iconSize:D,disabled:U,isDestructive:W,isLoading:re,isExternalLink:Q,className:oe,text:q,fullWidth:$,...B}=se,le=o()(E.button,oe,{[E.normal]:ne==="normal",[E.small]:ne==="small",[E.icon]:!!t,[E.loading]:re,[E.regular]:r==="regular",[E["full-width"]]:$,[E["is-icon-button"]]:!!t&&!x});B.ref=de;const ce=ne==="normal"?20:16,ae=Q&&(0,M.jsx)(T.Z,{size:ce,icon:X.Z,className:E["external-icon"]}),pe=Q?"_blank":void 0,Z=(x==null?void 0:x[0])&&x[0]!==null&&((J=(ie=x==null?void 0:x[0])==null?void 0:ie.props)==null?void 0:J.className)!=="components-tooltip";return(0,M.jsxs)(j.ZP,{target:pe,variant:H,className:o()(le,{"has-text":!!t&&Z}),icon:Q?void 0:t,iconSize:D,disabled:U,"aria-disabled":U,isDestructive:W,text:q,...B,children:[re&&(0,M.jsx)(S.ZP,{}),(0,M.jsx)("span",{children:x}),ae]})});C.displayName="Button";const R=C;try{C.displayName="Button",C.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:C.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(se){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(K,k,e)=>{e.d(k,{Z:()=>o});var j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),S=e.n(j),T=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),X=e.n(T),w=X()(S());w.push([K.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),w.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const o=w},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/navigation/styles.module.scss":(K,k,e)=>{e.d(k,{Z:()=>o});var j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),S=e.n(j),T=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),X=e.n(T),w=X()(S());w.push([K.id,".tgjYgJsTlXF0SpGC1ZKk{background-color:var(--jp-white);padding:var(--spacing-base) 0;box-shadow:0px 0px 40px rgba(0,0,0,.08);border-radius:var(--jp-border-radius);margin:0}.F3lXQYT5PpECXeF4jYFL{display:flex;padding:calc(var(--spacing-base)*2);align-items:center;justify-content:space-between;margin:0;text-align:left}.F3lXQYT5PpECXeF4jYFL.Oqvne2N1WsN3T7d8MxQE{cursor:pointer;outline-color:var(--jp-black)}.F3lXQYT5PpECXeF4jYFL.Oqvne2N1WsN3T7d8MxQE:hover:not(._Mn4JMhsFS8ApslHd1dK),.F3lXQYT5PpECXeF4jYFL.Oqvne2N1WsN3T7d8MxQE:focus:not(._Mn4JMhsFS8ApslHd1dK){background-color:var(--jp-gray-0)}.F3lXQYT5PpECXeF4jYFL._Mn4JMhsFS8ApslHd1dK{background-color:var(--jp-black)}.F3lXQYT5PpECXeF4jYFL._Mn4JMhsFS8ApslHd1dK .SpII3HEt2DjaOb4iKfMM{color:var(--jp-white)}.F3lXQYT5PpECXeF4jYFL._Mn4JMhsFS8ApslHd1dK .VHgYzEQEwFajJUXnXira{fill:var(--jp-white)}.F3lXQYT5PpECXeF4jYFL._Mn4JMhsFS8ApslHd1dK .rBC1VjVFkg_3H4vtnw4Q{border:1px solid var(--jp-red);background-color:var(--jp-red);color:var(--jp-white)}.SpII3HEt2DjaOb4iKfMM{display:flex;align-items:center;padding-right:var(--spacing-base);overflow-x:hidden}.jw2qLAIYLRGnRueLytao{display:block;overflow-x:hidden;text-overflow:ellipsis}.VHgYzEQEwFajJUXnXira{margin-right:calc(var(--spacing-base)*2)}.rBC1VjVFkg_3H4vtnw4Q{border:1px solid var(--jp-red-60);color:var(--jp-red-60);border-radius:50%;padding:calc(var(--spacing-base)/2) var(--spacing-base);min-width:30px;display:flex;align-items:center;justify-content:center;box-sizing:border-box}.GyIVVE1r83CyBYfq9vpl{fill:var(--jp-green-50)}.mK2ItQ4_6fs68O2NRmA9{fill:var(--jp-gray-20)}.HhSZ2lnYgro32zyxJo_X{--icon-size: 28px;--item-spacing: calc( var( --spacing-base ) * 2 );--left-spacing: calc( var( --icon-size ) + var( --item-spacing ) );list-style:none}.rTJnKM9DTnnWekaqgrsy{padding:calc(var(--spacing-base)*2)}.rHLGpMLIgIDwvxdwfs4n{padding:0}.MzJ9bymg8631lV8mDIbA{margin-left:var(--left-spacing)}.u4Ua4lvJ672zilPTXBpS{padding:calc(var(--spacing-base)*2);display:flex;justify-content:flex-start}.iiEyRpGg25LOL1FwcV3P{width:250px;padding:calc(var(--spacing-base)*2)}.gfUfwCMYrspWdhSb0_HQ{display:flex;border:1px solid var(--jp-gray-10);border-radius:var(--jp-border-radius);padding:calc(var(--spacing-base)*2);background-color:var(--jp-white);justify-content:space-between;align-items:center;width:100%}.NPRXezrl2O8nGvsK6ms8{display:flex;justify-content:flex-start}.URd6ISUNE6ijzSvvhgOj{margin-right:var(--spacing-base)}",""]),w.locals={navigation:"tgjYgJsTlXF0SpGC1ZKk","navigation-item":"F3lXQYT5PpECXeF4jYFL",clickable:"Oqvne2N1WsN3T7d8MxQE",selected:"_Mn4JMhsFS8ApslHd1dK","navigation-item-label":"SpII3HEt2DjaOb4iKfMM","navigation-item-icon":"VHgYzEQEwFajJUXnXira","navigation-item-badge":"rBC1VjVFkg_3H4vtnw4Q","navigation-item-label-text":"jw2qLAIYLRGnRueLytao","navigation-item-check-badge":"GyIVVE1r83CyBYfq9vpl","navigation-item-info-badge":"mK2ItQ4_6fs68O2NRmA9","navigation-group":"HhSZ2lnYgro32zyxJo_X","navigation-group-label":"rTJnKM9DTnnWekaqgrsy","navigation-group-content":"rHLGpMLIgIDwvxdwfs4n","navigation-group-list":"MzJ9bymg8631lV8mDIbA","navigation-group-truncate":"u4Ua4lvJ672zilPTXBpS","popover-text":"iiEyRpGg25LOL1FwcV3P","navigation-dropdown-button":"gfUfwCMYrspWdhSb0_HQ","navigation-dropdown-label":"NPRXezrl2O8nGvsK6ms8","navigation-dropdown-icon":"URd6ISUNE6ijzSvvhgOj"};const o=w}}]);})();
