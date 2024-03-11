"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8911],{"../../plugins/protect/src/js/components/navigation/stories/index.stories.jsx":(Y,A,e)=>{var je,xe,he;e.r(A),e.d(A,{Default:()=>R,__namedExportsOrder:()=>ye,default:()=>Ee});var j=e("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),L=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),M=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/wordpress.js"),C=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/plugins.js"),w=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/color.js"),a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),D=e("../components/components/text/index.tsx"),H=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js"),z=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),ae=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-up.js"),ie=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js"),$=e("../components/components/button/index.tsx"),U=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),de=e.n(U),E=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),x=e.n(E),re=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),G=e.n(re),ee=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/navigation/styles.module.scss"),B={};B.insert="head",B.singleton=!1;var ge=G()(ee.Z,B);const o=ee.Z.locals||{};var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const I=({icon:n,children:r,className:s})=>(0,t.jsxs)(D.ZP,{className:de()(o["navigation-item-label"],s),children:[n&&(0,t.jsx)(z.Z,{icon:n,className:o["navigation-item-icon"],size:28}),(0,t.jsx)("span",{className:o["navigation-item-label-content"],children:r})]});I.displayName="ItemLabel",I.propTypes={icon:x().node,children:x().node.isRequired};const te=I;I.__docgenInfo={description:"",methods:[],displayName:"ItemLabel",props:{icon:{description:"",type:{name:"node"},required:!1},children:{description:"",type:{name:"node"},required:!0}}};const P=a.createContext(),se=({selected:n,onSelect:r})=>{const[s,v]=(0,a.useState)([]),[g,_]=(0,a.useState)([]),[u,b]=(0,a.useState)(),S=d=>{r(d)},i=d=>{b(d)},N=(d,m)=>{const p=d-1,h=p<0?m:p,l=s[h];return l!=null&&l.disabled?N(h,m):l},k=(d,m)=>{const p=d+1,h=p>m?0:p,l=s[h];return l!=null&&l.disabled?k(h,m):l};return{selectedItem:n,handleClickItem:S,handleKeyDownItem:d=>{const m=d==null?void 0:d.code,p=s.findIndex(c=>(c==null?void 0:c.id)===n),h=s.length-1;let l;if(m==="ArrowUp"){const c=N(p,h);l=c==null?void 0:c.id}else if(m==="ArrowDown"){const c=k(p,h);l=c==null?void 0:c.id}else(m==="Enter"||m==="Space")&&u&&(l=u);if(l){const c=g[l];c==null||c.focus(),r(l)}},handleFocusItem:i,registerRef:(d,m)=>{_(p=>!p[m]&&d?{...p,[m]:d}:p)},registerItem:d=>{v(m=>{const p=[...m],h=d==null?void 0:d.id,l=p.findIndex(c=>(c==null?void 0:c.id)===h);return l>=0?p[l]=d:p.push(d),p})},items:s}},ne=j.__,Z=8,V=({icon:n,label:r,children:s})=>{const[v,g]=(0,a.useState)(!0),{mode:_}=(0,a.useContext)(P),u=Array.isArray(s)&&(s==null?void 0:s.length)>=Z&&_==="list",b=u&&v?s.slice(0,Z):s,S=u?(s==null?void 0:s.length)-Z:0,i=(0,a.useCallback)(()=>{g(N=>!N)},[]);return(0,t.jsxs)("li",{tabIndex:-1,role:"menuitem",className:o["navigation-group"],children:[(0,t.jsx)(te,{icon:n,className:o["navigation-group-label"],children:r}),(0,t.jsxs)("div",{className:o["navigation-group-list"],children:[(0,t.jsx)("ul",{className:o["navigation-group-content"],children:b}),u&&(0,t.jsx)("div",{className:o["navigation-group-truncate"],children:(0,t.jsx)($.Z,{variant:"link",onClick:i,children:v?(0,j.gB)(ne("Show %s more","jetpack-protect"),S):(0,j.gB)(ne("Hide %s items","jetpack-protect"),S)})})]})]})};V.displayName="NavigationGroup";const W=V;V.__docgenInfo={description:"",methods:[],displayName:"NavigationGroup"};var le=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),ce=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js");const Q=j.__,pe=(n,r)=>r?n===0?{popoverText:Q("No known threats found to affect this version","jetpack-protect"),badgeElement:(0,t.jsx)(z.Z,{icon:ce.Z,size:28,className:o["navigation-item-check-badge"]})}:{popoverText:null,badgeElement:(0,t.jsx)(D.ZP,{variant:"body-extra-small",className:o["navigation-item-badge"],component:"div",children:n})}:{popoverText:Q("This item was added to your site after the most recent scan. We will check for threats during the next scheduled one.","jetpack-protect"),badgeElement:(0,t.jsx)(z.Z,{icon:le.Z,size:28,className:o["navigation-item-info-badge"]})},J=({count:n,checked:r})=>{const{popoverText:s,badgeElement:v}=pe(n,r),[g,_]=(0,a.useState)(!1),u=(0,a.useCallback)(()=>{_(!0)},[]),b=(0,a.useCallback)(()=>{_(!1)},[]);return(0,t.jsxs)("div",{onMouseLeave:s?b:null,onMouseEnter:s?u:null,onClick:s?u:null,onFocus:s?u:null,onBlur:s?b:null,role:"presentation",children:[v,g&&(0,t.jsx)(H.ZP,{noArrow:!1,inline:!0,children:(0,t.jsx)(D.ZP,{variant:"body-small",className:o["popover-text"],children:s})})]})};J.displayName="ItemBadge",J.propTypes={count:x().number,checked:x().bool};const ue=J;J.__docgenInfo={description:"",methods:[],displayName:"ItemBadge",props:{count:{description:"",type:{name:"number"},required:!1},checked:{description:"",type:{name:"bool"},required:!1}}};const q=({id:n,label:r,icon:s,badge:v,disabled:g,onClick:_,onKeyDown:u,onFocus:b,checked:S})=>{const i=(0,a.useContext)(P),N=(i==null?void 0:i.selectedItem)===n,k=i==null?void 0:i.registerItem,K=i==null?void 0:i.registerRef,T=i==null?void 0:i.handleClickItem,y=i==null?void 0:i.handleKeyDownItem,d=i==null?void 0:i.handleFocusItem,m=de()(o["navigation-item"],{[o.clickable]:!g,[o.selected]:N}),p=(0,a.useCallback)(X=>{_==null||_(X),T==null||T(n)},[T,n,_]),h=(0,a.useCallback)(X=>{u==null||u(X),y==null||y(X)},[y,u]),l=(0,a.useCallback)(X=>{K(X,n)},[K,n]),c=(0,a.useCallback)(X=>{b==null||b(X),d==null||d(n)},[d,n,b]);return(0,a.useEffect)(()=>{k({id:n,disabled:g,label:r,icon:s})},[]),(0,t.jsxs)("li",{className:m,onClick:g?null:p,onKeyDown:h,onFocus:g?null:c,role:"menuitem",tabIndex:g?-1:0,ref:l,children:[(0,t.jsx)(te,{icon:s,children:r}),(0,t.jsx)(ue,{count:v,checked:S})]})};q.displayName="NavigationItem";const f=q;q.__docgenInfo={description:"",methods:[],displayName:"NavigationItem"};const oe=j.__,F=({children:n})=>(0,t.jsx)("ul",{className:o.navigation,role:"menu",children:n});F.displayName="NavigationList";const ve=({children:n,data:r})=>{var i,N,k,K,T;const s=(0,a.useRef)(),[v,g]=(0,a.useState)(!1),_=(N=(i=r==null?void 0:r.items)==null?void 0:i.find(y=>(y==null?void 0:y.id)===(r==null?void 0:r.selectedItem)))!=null?N:{label:oe("See all results","jetpack-protect")},{label:u,icon:b}=_,S=(0,a.useCallback)(()=>{g(y=>!y)},[]);return(0,t.jsxs)("button",{className:o["navigation-dropdown-button"],onClick:S,ref:s,children:[(0,t.jsxs)("div",{className:o["navigation-dropdown-label"],children:[b&&(0,t.jsx)(z.Z,{icon:b,className:o["navigation-dropdown-icon"]}),(0,t.jsx)(D.ZP,{children:u})]}),(0,t.jsx)(z.Z,{icon:v?ae.Z:ie.Z,size:32}),(0,t.jsx)(H.ZP,{position:"bottom center",anchorRef:s==null?void 0:s.current,inline:!0,children:(0,t.jsx)("div",{style:{display:v?"block":"none",width:(T=(K=(k=s==null?void 0:s.current)==null?void 0:k.getBoundingClientRect)==null?void 0:K.call(k))==null?void 0:T.width},children:n})})]})};ve.displayName="NavigationDropdown";const we=n=>{switch(n){case"list":return F;case"dropdown":return ve;default:return F}},me=({children:n,selected:r,onSelect:s,mode:v="list"})=>{const g=se({selected:r,onSelect:s}),_=we(v);return(0,t.jsx)(P.Provider,{value:{...g,mode:v},children:(0,t.jsx)(_,{data:g,children:n})})};me.displayName="Navigation";const be=me;me.__docgenInfo={description:"",methods:[],displayName:"Navigation",props:{mode:{defaultValue:{value:"'list'",computed:!1},required:!1}}},f.__docgenInfo={description:"",methods:[],displayName:"NavigationItem"},W.__docgenInfo={description:"",methods:[],displayName:"NavigationGroup"};var fe=`import { __ } from '@wordpress/i18n';
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
`,Ne={Default:{startLoc:{col:23,line:21},endLoc:{col:1,line:61},startBody:{col:23,line:21},endBody:{col:1,line:61}}};const O=j.__,Ee={title:"Plugins/Protect/Navigation",component:be,parameters:{storySource:{source:`import { __ } from '@wordpress/i18n';
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
`,locationsMap:{default:{startLoc:{col:23,line:21},endLoc:{col:1,line:61},startBody:{col:23,line:21},endBody:{col:1,line:61}}}},layout:"centered"},decorators:[n=>(0,t.jsx)("div",{style:{width:800},children:(0,t.jsx)(n,{})})]},R=n=>{const[r,s]=(0,a.useState)(n.selected);return(0,t.jsxs)(be,{selected:r,onSelect:s,children:[(0,t.jsx)(f,{id:"all",label:O("All threats","jetpack-protect"),icon:L.Z,badge:10}),(0,t.jsx)(f,{id:"wordpress",label:O("WordPress","jetpack-protect"),icon:M.Z,badge:12}),(0,t.jsxs)(W,{label:O("Plugins","jetpack-protect"),icon:C.Z,children:[(0,t.jsx)(f,{id:"jetpack",label:O("Jetpack","jetpack-protect"),badge:9}),(0,t.jsx)(f,{id:"jetpack-backup",label:O("Jetpack Backup","jetpack-protect"),badge:9})]}),(0,t.jsxs)(W,{label:O("Themes","jetpack-protect"),icon:w.Z,children:[(0,t.jsx)(f,{id:"nichetable",label:O("Nichetable","jetpack-protect"),badge:0,disabled:!0}),(0,t.jsx)(f,{id:"twenty-two",label:O("Twenty Two","jetpack-protect"),badge:2})]})]})};R.displayName="Default",R.args={selected:"all"},R.parameters={...R.parameters,docs:{...(je=R.parameters)==null?void 0:je.docs,source:{originalSource:`args => {
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
}`,...(he=(xe=R.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};const ye=["Default"]},"../components/components/button/index.tsx":(Y,A,e)=>{e.d(A,{Z:()=>ee});var j=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),L=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),M=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),C=e("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),D=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),H=e.n(D),z=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),ae=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ie=e.n(ae),$=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),U={};U.insert="head",U.singleton=!1;var de=ie()($.Z,U);const E=$.Z.locals||{};var x=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const re=C.__,G=(0,z.forwardRef)((B,ge)=>{var oe,F;const{children:o,variant:t="primary",size:I="normal",weight:te="bold",icon:P,iconSize:_e,disabled:se,isDestructive:ne,isLoading:Z,isExternalLink:V,className:W,text:le,fullWidth:ce,...Q}=B,pe=H()(E.button,W,{[E.normal]:I==="normal",[E.small]:I==="small",[E.icon]:!!P,[E.loading]:Z,[E.regular]:te==="regular",[E["full-width"]]:ce,[E["is-icon-button"]]:!!P&&!o});Q.ref=ge;const J=I==="normal"?20:16,ue=V&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(w.Z,{size:J,icon:a.Z,className:E["external-icon"]}),(0,x.jsx)(j.Z,{as:"span",children:re("(opens in a new tab)","jetpack")})]}),q=V?"_blank":void 0,f=(o==null?void 0:o[0])&&o[0]!==null&&((F=(oe=o==null?void 0:o[0])==null?void 0:oe.props)==null?void 0:F.className)!=="components-tooltip";return(0,x.jsxs)(L.ZP,{target:q,variant:t,className:H()(pe,{"has-text":!!P&&f}),icon:V?void 0:P,iconSize:_e,disabled:se,"aria-disabled":se,isDestructive:ne,text:le,...Q,children:[Z&&(0,x.jsx)(M.ZP,{}),(0,x.jsx)("span",{children:o}),ue]})});G.displayName="Button";const ee=G;try{G.displayName="Button",G.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:G.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(B){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(Y,A,e)=>{e.d(A,{Z:()=>a});var j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),L=e.n(j),M=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),C=e.n(M),w=C()(L());w.push([Y.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),w.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const a=w},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/navigation/styles.module.scss":(Y,A,e)=>{e.d(A,{Z:()=>a});var j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),L=e.n(j),M=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),C=e.n(M),w=C()(L());w.push([Y.id,".tgjYgJsTlXF0SpGC1ZKk{background-color:var(--jp-white);padding:var(--spacing-base) 0;box-shadow:0px 0px 40px rgba(0,0,0,.08);border-radius:var(--jp-border-radius);margin:0}.F3lXQYT5PpECXeF4jYFL{display:flex;padding:calc(var(--spacing-base)*2);align-items:center;justify-content:space-between;margin:0;text-align:left}.F3lXQYT5PpECXeF4jYFL.Oqvne2N1WsN3T7d8MxQE{cursor:pointer;outline-color:var(--jp-black)}.F3lXQYT5PpECXeF4jYFL.Oqvne2N1WsN3T7d8MxQE:hover:not(._Mn4JMhsFS8ApslHd1dK),.F3lXQYT5PpECXeF4jYFL.Oqvne2N1WsN3T7d8MxQE:focus:not(._Mn4JMhsFS8ApslHd1dK){background-color:var(--jp-gray-0)}.F3lXQYT5PpECXeF4jYFL._Mn4JMhsFS8ApslHd1dK{background-color:var(--jp-black)}.F3lXQYT5PpECXeF4jYFL._Mn4JMhsFS8ApslHd1dK .SpII3HEt2DjaOb4iKfMM{color:var(--jp-white)}.F3lXQYT5PpECXeF4jYFL._Mn4JMhsFS8ApslHd1dK .VHgYzEQEwFajJUXnXira{fill:var(--jp-white)}.F3lXQYT5PpECXeF4jYFL._Mn4JMhsFS8ApslHd1dK .rBC1VjVFkg_3H4vtnw4Q{border:1px solid var(--jp-red);background-color:var(--jp-red);color:var(--jp-white)}.SpII3HEt2DjaOb4iKfMM{display:flex;align-items:center;padding-right:var(--spacing-base);overflow-x:hidden}.jw2qLAIYLRGnRueLytao{display:block;overflow-x:hidden;text-overflow:ellipsis}.VHgYzEQEwFajJUXnXira{margin-right:calc(var(--spacing-base)*2)}.rBC1VjVFkg_3H4vtnw4Q{border:1px solid var(--jp-red-60);color:var(--jp-red-60);border-radius:50%;padding:calc(var(--spacing-base)/2) var(--spacing-base);min-width:30px;display:flex;align-items:center;justify-content:center;box-sizing:border-box}.GyIVVE1r83CyBYfq9vpl{fill:var(--jp-green-50)}.mK2ItQ4_6fs68O2NRmA9{fill:var(--jp-gray-20)}.HhSZ2lnYgro32zyxJo_X{--icon-size: 28px;--item-spacing: calc( var( --spacing-base ) * 2 );--left-spacing: calc( var( --icon-size ) + var( --item-spacing ) );list-style:none}.rTJnKM9DTnnWekaqgrsy{padding:calc(var(--spacing-base)*2)}.rHLGpMLIgIDwvxdwfs4n{padding:0}.MzJ9bymg8631lV8mDIbA{margin-left:var(--left-spacing)}.u4Ua4lvJ672zilPTXBpS{padding:calc(var(--spacing-base)*2);display:flex;justify-content:flex-start}.iiEyRpGg25LOL1FwcV3P{width:250px;padding:calc(var(--spacing-base)*2)}.gfUfwCMYrspWdhSb0_HQ{display:flex;border:1px solid var(--jp-gray-10);border-radius:var(--jp-border-radius);padding:calc(var(--spacing-base)*2);background-color:var(--jp-white);justify-content:space-between;align-items:center;width:100%}.NPRXezrl2O8nGvsK6ms8{display:flex;justify-content:flex-start}.URd6ISUNE6ijzSvvhgOj{margin-right:var(--spacing-base)}",""]),w.locals={navigation:"tgjYgJsTlXF0SpGC1ZKk","navigation-item":"F3lXQYT5PpECXeF4jYFL",clickable:"Oqvne2N1WsN3T7d8MxQE",selected:"_Mn4JMhsFS8ApslHd1dK","navigation-item-label":"SpII3HEt2DjaOb4iKfMM","navigation-item-icon":"VHgYzEQEwFajJUXnXira","navigation-item-badge":"rBC1VjVFkg_3H4vtnw4Q","navigation-item-label-text":"jw2qLAIYLRGnRueLytao","navigation-item-check-badge":"GyIVVE1r83CyBYfq9vpl","navigation-item-info-badge":"mK2ItQ4_6fs68O2NRmA9","navigation-group":"HhSZ2lnYgro32zyxJo_X","navigation-group-label":"rTJnKM9DTnnWekaqgrsy","navigation-group-content":"rHLGpMLIgIDwvxdwfs4n","navigation-group-list":"MzJ9bymg8631lV8mDIbA","navigation-group-truncate":"u4Ua4lvJ672zilPTXBpS","popover-text":"iiEyRpGg25LOL1FwcV3P","navigation-dropdown-button":"gfUfwCMYrspWdhSb0_HQ","navigation-dropdown-label":"NPRXezrl2O8nGvsK6ms8","navigation-dropdown-icon":"URd6ISUNE6ijzSvvhgOj"};const a=w}}]);})();
