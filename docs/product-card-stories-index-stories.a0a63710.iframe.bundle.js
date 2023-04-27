"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2110],{"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js":(v,m,n)=>{n.d(m,{Z:()=>a});var u=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function d(r){let{icon:c,size:i=24,...g}=r;return(0,u.cloneElement)(c,{width:i,height:i,...g})}const a=d},"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js":(v,m,n)=>{n.d(m,{Z:()=>r});var u=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=n("../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,u.createElement)(d.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,u.createElement)(d.y$,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/check.js":(v,m,n)=>{n.d(m,{Z:()=>r});var u=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=n("../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,u.createElement)(d.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,u.createElement)(d.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../packages/my-jetpack/_inc/components/product-card/stories/index.stories.jsx":(v,m,n)=>{var S,h,y,b,x,A,O,w,k,j,T,D;n.r(m),n.d(m,{Default:()=>s,WithChildren:()=>l,WithMenu:()=>_,WithMenuForStandalone:()=>E,__namedExportsOrder:()=>P,default:()=>e});var u=n("../components/components/icons/index.tsx"),d=n("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js"),a=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=n("../../packages/my-jetpack/_inc/state/store.js"),c=n("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),i=n("../../packages/my-jetpack/_inc/components/product-card/action-buton.jsx"),g=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=`/* eslint-disable react/react-in-jsx-scope */

import { BackupIcon } from '@automattic/jetpack-components';
import { arrowUp } from '@wordpress/icons';
import React from 'react';
import { initStore } from '../../../state/store';
import ProductCard, { PRODUCT_STATUSES } from '../index.jsx';

// Set myJetpackRest global var.
window.myJetpackRest = {};

initStore();

export default {
	title: 'Packages/My Jetpack/Product Card',
	component: ProductCard,
	parameters: {
		layout: 'centered',
		actions: {
			argTypesRegex: '^on.*',
		},
		controls: {
			exclude: '^on.*',
		},
		backgrounds: {
			default: 'light',
			values: [ { name: 'light', value: 'var(--jp-white-off)' } ],
		},
	},
	decorators: [
		Story => (
			<div style={ { width: '100vw', maxWidth: 400 } }>
				<Story />
			</div>
		),
	],
	argTypes: {
		icon: {
			table: {
				disable: true,
			},
		},
		menuItems: {
			table: {
				disable: true,
			},
		},
		children: {
			table: {
				disable: true,
			},
		},
		slug: {
			control: 'select',
			options: [
				'anti-spam',
				'backup',
				'boost',
				'crm',
				'extras',
				'protect',
				'scan',
				'social',
				'search',
				'videopress',
			],
		},
		status: {
			control: 'select',
			options: [
				PRODUCT_STATUSES.ACTIVE,
				PRODUCT_STATUSES.INACTIVE,
				PRODUCT_STATUSES.ERROR,
				PRODUCT_STATUSES.ABSENT,
				PRODUCT_STATUSES.ABSENT_WITH_PLAN,
				PRODUCT_STATUSES.NEEDS_PURCHASE,
				PRODUCT_STATUSES.NEEDS_PURCHASE_OR_FREE,
			],
		},
	},
};

const Template = args => <ProductCard { ...args } />;

const DefaultArgs = {
	name: 'Backup',
	description: 'Save every change',
	icon: <BackupIcon />,
	status: PRODUCT_STATUSES.ACTIVE,
	admin: true,
	slug: 'backup',
	isFetching: false,
	showMenu: false,
};

export const Default = Template.bind( {} );
Default.args = DefaultArgs;

export const WithChildren = Template.bind( {} );
WithChildren.args = {
	...DefaultArgs,
	children: <div>Card Children</div>,
};

export const WithMenu = Template.bind( {} );
WithMenu.args = {
	...DefaultArgs,
	showMenu: true,
	menuItems: [
		{
			label: 'Upload',
			icon: arrowUp,
		},
	],
};

export const WithMenuForStandalone = Template.bind( {} );
WithMenuForStandalone.args = {
	...DefaultArgs,
	showMenu: true,
	menuItems: [
		{
			label: 'Upload',
			icon: arrowUp,
		},
	],
	onInstallStandalone: () => alert( 'Installing standalone plugin' ),
	onActivateStandalone: () => alert( 'Activating standalone plugin' ),
	hasStandalonePlugin: true,
	isStandaloneInstalled: false,
	isStandaloneActive: false,
};
`,f={Default:{startLoc:{col:17,line:63},endLoc:{col:50,line:63},startBody:{col:17,line:63},endBody:{col:50,line:63}},WithChildren:{startLoc:{col:17,line:63},endLoc:{col:50,line:63},startBody:{col:17,line:63},endBody:{col:50,line:63}},WithMenu:{startLoc:{col:17,line:63},endLoc:{col:50,line:63},startBody:{col:17,line:63},endBody:{col:50,line:63}},WithMenuForStandalone:{startLoc:{col:17,line:63},endLoc:{col:50,line:63},startBody:{col:17,line:63},endBody:{col:50,line:63}}};window.myJetpackRest={},(0,r.N)();const e={title:"Packages/My Jetpack/Product Card",component:c.Z,parameters:{storySource:{source:`

import { BackupIcon } from '@automattic/jetpack-components';
import { arrowUp } from '@wordpress/icons';
import React from 'react';
import { initStore } from '../../../state/store';
import ProductCard, { PRODUCT_STATUSES } from '../index.jsx';

// Set myJetpackRest global var.
window.myJetpackRest = {};
initStore();
export default {
  title: 'Packages/My Jetpack/Product Card',
  component: ProductCard,
  parameters: {
    layout: 'centered',
    actions: {
      argTypesRegex: '^on.*'
    },
    controls: {
      exclude: '^on.*'
    },
    backgrounds: {
      default: 'light',
      values: [{
        name: 'light',
        value: 'var(--jp-white-off)'
      }]
    }
  },
  decorators: [Story => <div style={{
    width: '100vw',
    maxWidth: 400
  }}>
                <Story />
            </div>],
  argTypes: {
    icon: {
      table: {
        disable: true
      }
    },
    menuItems: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    },
    slug: {
      control: 'select',
      options: ['anti-spam', 'backup', 'boost', 'crm', 'extras', 'protect', 'scan', 'social', 'search', 'videopress']
    },
    status: {
      control: 'select',
      options: [PRODUCT_STATUSES.ACTIVE, PRODUCT_STATUSES.INACTIVE, PRODUCT_STATUSES.ERROR, PRODUCT_STATUSES.ABSENT, PRODUCT_STATUSES.ABSENT_WITH_PLAN, PRODUCT_STATUSES.NEEDS_PURCHASE, PRODUCT_STATUSES.NEEDS_PURCHASE_OR_FREE]
    }
  }
};
const Template = args => <ProductCard {...args} />;
const DefaultArgs = {
  name: 'Backup',
  description: 'Save every change',
  icon: <BackupIcon />,
  status: PRODUCT_STATUSES.ACTIVE,
  admin: true,
  slug: 'backup',
  isFetching: false,
  showMenu: false
};
export const Default = Template.bind({});
Default.args = DefaultArgs;
export const WithChildren = Template.bind({});
WithChildren.args = {
  ...DefaultArgs,
  children: <div>Card Children</div>
};
export const WithMenu = Template.bind({});
WithMenu.args = {
  ...DefaultArgs,
  showMenu: true,
  menuItems: [{
    label: 'Upload',
    icon: arrowUp
  }]
};
export const WithMenuForStandalone = Template.bind({});
WithMenuForStandalone.args = {
  ...DefaultArgs,
  showMenu: true,
  menuItems: [{
    label: 'Upload',
    icon: arrowUp
  }],
  onInstallStandalone: () => alert('Installing standalone plugin'),
  onActivateStandalone: () => alert('Activating standalone plugin'),
  hasStandalonePlugin: true,
  isStandaloneInstalled: false,
  isStandaloneActive: false
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <ProductCard {...args} />",
      ...Default.parameters?.docs?.source
    }
  }
};
WithChildren.parameters = {
  ...WithChildren.parameters,
  docs: {
    ...WithChildren.parameters?.docs,
    source: {
      originalSource: "args => <ProductCard {...args} />",
      ...WithChildren.parameters?.docs?.source
    }
  }
};
WithMenu.parameters = {
  ...WithMenu.parameters,
  docs: {
    ...WithMenu.parameters?.docs,
    source: {
      originalSource: "args => <ProductCard {...args} />",
      ...WithMenu.parameters?.docs?.source
    }
  }
};
WithMenuForStandalone.parameters = {
  ...WithMenuForStandalone.parameters,
  docs: {
    ...WithMenuForStandalone.parameters?.docs,
    source: {
      originalSource: "args => <ProductCard {...args} />",
      ...WithMenuForStandalone.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:63},endLoc:{col:50,line:63},startBody:{col:17,line:63},endBody:{col:50,line:63}},"with-children":{startLoc:{col:17,line:63},endLoc:{col:50,line:63},startBody:{col:17,line:63},endBody:{col:50,line:63}},"with-menu":{startLoc:{col:17,line:63},endLoc:{col:50,line:63},startBody:{col:17,line:63},endBody:{col:50,line:63}},"with-menu-for-standalone":{startLoc:{col:17,line:63},endLoc:{col:50,line:63},startBody:{col:17,line:63},endBody:{col:50,line:63}}}},layout:"centered",actions:{argTypesRegex:"^on.*"},controls:{exclude:"^on.*"},backgrounds:{default:"light",values:[{name:"light",value:"var(--jp-white-off)"}]}},decorators:[C=>(0,g.jsx)("div",{style:{width:"100vw",maxWidth:400},children:(0,g.jsx)(C,{})})],argTypes:{icon:{table:{disable:!0}},menuItems:{table:{disable:!0}},children:{table:{disable:!0}},slug:{control:"select",options:["anti-spam","backup","boost","crm","extras","protect","scan","social","search","videopress"]},status:{control:"select",options:[i.N.ACTIVE,i.N.INACTIVE,i.N.ERROR,i.N.ABSENT,i.N.ABSENT_WITH_PLAN,i.N.NEEDS_PURCHASE,i.N.NEEDS_PURCHASE_OR_FREE]}}},t=C=>(0,g.jsx)(c.Z,{...C});t.displayName="Template";const o={name:"Backup",description:"Save every change",icon:(0,g.jsx)(u.BackupIcon,{}),status:i.N.ACTIVE,admin:!0,slug:"backup",isFetching:!1,showMenu:!1},s=t.bind({});s.args=o;const l=t.bind({});l.args={...o,children:(0,g.jsx)("div",{children:"Card Children"})};const _=t.bind({});_.args={...o,showMenu:!0,menuItems:[{label:"Upload",icon:d.Z}]};const E=t.bind({});E.args={...o,showMenu:!0,menuItems:[{label:"Upload",icon:d.Z}],onInstallStandalone:()=>alert("Installing standalone plugin"),onActivateStandalone:()=>alert("Activating standalone plugin"),hasStandalonePlugin:!0,isStandaloneInstalled:!1,isStandaloneActive:!1},s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:"args => <ProductCard {...args} />",...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}},l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:"args => <ProductCard {...args} />",...(A=(x=l.parameters)==null?void 0:x.docs)==null?void 0:A.source}}},_.parameters={..._.parameters,docs:{...(O=_.parameters)==null?void 0:O.docs,source:{originalSource:"args => <ProductCard {...args} />",...(k=(w=_.parameters)==null?void 0:w.docs)==null?void 0:k.source}}},E.parameters={...E.parameters,docs:{...(j=E.parameters)==null?void 0:j.docs,source:{originalSource:"args => <ProductCard {...args} />",...(D=(T=E.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const P=["Default","WithChildren","WithMenu","WithMenuForStandalone"]},"../analytics/index.jsx":(v,m,n)=>{n.d(m,{Z:()=>f});var u=n("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),d=n.n(u);const a=d()("dops:analytics");let r,c;window._tkq=window._tkq||[],window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date;function i(e,t){let o="";if(typeof e=="object"){for(const s in e)o+="&x_"+encodeURIComponent(s)+"="+encodeURIComponent(e[s]);a("Bumping stats %o",e)}else o="&x_"+encodeURIComponent(e)+"="+encodeURIComponent(t),a('Bumping stat "%s" in group "%s"',t,e);return o}function g(e,t){let o="";if(typeof e=="object"){for(const s in e)o+="&"+encodeURIComponent(s)+"="+encodeURIComponent(e[s]);a("Built stats %o",e)}else o="&"+encodeURIComponent(e)+"="+encodeURIComponent(t),a('Built stat "%s" in group "%s"',t,e);return o}const p={initialize:function(e,t,o){p.setUser(e,t),p.setSuperProps(o),p.identifyUser()},setGoogleAnalyticsEnabled:function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;this.googleAnalyticsEnabled=e,this.googleAnalyticsKey=t},setMcAnalyticsEnabled:function(e){this.mcAnalyticsEnabled=e},setUser:function(e,t){c={ID:e,username:t}},setSuperProps:function(e){r=e},assignSuperProps:function(e){r=Object.assign(r||{},e)},mc:{bumpStat:function(e,t){const o=i(e,t);p.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv"+o+"&t="+Math.random())},bumpStatWithPageView:function(e,t){const o=g(e,t);p.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom"+o+"&t="+Math.random())}},pageView:{record:function(e,t){p.tracks.recordPageView(e),p.ga.recordPageView(e,t)}},purchase:{record:function(e,t,o,s,l,_,E){p.ga.recordPurchase(e,t,o,s,l,_,E)}},tracks:{recordEvent:function(e,t){if(t=t||{},e.indexOf("akismet_")!==0&&e.indexOf("jetpack_")!==0){a('- Event name must be prefixed by "akismet_" or "jetpack_"');return}r&&(a("- Super Props: %o",r),t=Object.assign(t,r)),a('Record event "%s" called with props %s',e,JSON.stringify(t)),window._tkq.push(["recordEvent",e,t])},recordJetpackClick:function(e){const t=typeof e=="object"?e:{target:e};p.tracks.recordEvent("jetpack_wpa_click",t)},recordPageView:function(e){p.tracks.recordEvent("akismet_page_view",{path:e})},setOptOut:function(e){a("Pushing setOptOut: %o",e),window._tkq.push(["setOptOut",e])}},ga:{initialized:!1,initialize:function(){let e={};p.ga.initialized||(c&&(e={userId:"u-"+c.ID}),window.ga("create",this.googleAnalyticsKey,"auto",e),p.ga.initialized=!0)},recordPageView:function(e,t){p.ga.initialize(),a("Recording Page View ~ [URL: "+e+"] [Title: "+t+"]"),this.googleAnalyticsEnabled&&(window.ga("set","page",e),window.ga("send",{hitType:"pageview",page:e,title:t}))},recordEvent:function(e,t,o,s){p.ga.initialize();let l="Recording Event ~ [Category: "+e+"] [Action: "+t+"]";typeof o!="undefined"&&(l+=" [Option Label: "+o+"]"),typeof s!="undefined"&&(l+=" [Option Value: "+s+"]"),a(l),this.googleAnalyticsEnabled&&window.ga("send","event",e,t,o,s)},recordPurchase:function(e,t,o,s,l,_,E){window.ga("require","ecommerce"),window.ga("ecommerce:addTransaction",{id:e,revenue:s,currency:E}),window.ga("ecommerce:addItem",{id:e,name:t,sku:o,price:l,quantity:_}),window.ga("ecommerce:send")}},identifyUser:function(){c&&window._tkq.push(["identifyUser",c.ID,c.username])},setProperties:function(e){window._tkq.push(["setProperties",e])},clearedIdentity:function(){window._tkq.push(["clearIdentity"])}},f=p},"../components/components/button/index.tsx":(v,m,n)=>{n.d(m,{Z:()=>E});var u=n("../../../node_modules/.pnpm/@wordpress+components@23.7.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),d=n("../../../node_modules/.pnpm/@wordpress+components@23.7.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),a=n("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js"),r=n("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/external.js"),c=n("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),i=n.n(c),g=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=n.n(p),e=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),t={};t.insert="head",t.singleton=!1;var o=f()(e.Z,t);const s=e.Z.locals||{};var l=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const _=(0,g.forwardRef)((P,S)=>{var U,I;const{children:h,variant:y="primary",size:b="normal",weight:x="bold",icon:A,iconSize:O,disabled:w,isDestructive:k,isLoading:j,isExternalLink:T,className:D,text:C,fullWidth:M,...R}=P,B=i()(s.button,D,{[s.normal]:b==="normal",[s.small]:b==="small",[s.icon]:!!A,[s.loading]:j,[s.regular]:x==="regular",[s["full-width"]]:M,[s["is-icon-button"]]:!!A&&!h});R.ref=S;const L=b==="normal"?20:16,V=T&&(0,l.jsx)(a.Z,{size:L,icon:r.Z,className:s["external-icon"]}),W=T?"_blank":void 0,z=(h==null?void 0:h[0])&&h[0]!==null&&((I=(U=h==null?void 0:h[0])==null?void 0:U.props)==null?void 0:I.className)!=="components-tooltip";return(0,l.jsxs)(u.ZP,{target:W,variant:y,className:i()(B,{"has-text":!!A&&z}),icon:T?void 0:A,iconSize:O,disabled:w,"aria-disabled":w,isDestructive:k,text:C,...R,children:[j&&(0,l.jsx)(d.ZP,{}),(0,l.jsx)("span",{children:h}),V]})});_.displayName="Button";const E=_;try{_.displayName="Button",_.__docgenInfo={description:"Button component",displayName:"Button",props:{text:{defaultValue:null,description:`If provided, displays the given text inside the button. If the button
contains children elements, the text is displayed before them.`,name:"text",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"link"'},{value:'"tertiary"'}]}},className:{defaultValue:null,description:"An optional additional class name to apply to the rendered button.",name:"className",required:!1,type:{name:"string"}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"regular"'}]}},isDestructive:{defaultValue:null,description:`Renders a red text-based button style to indicate destructive
behavior.`,name:"isDestructive",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Renders a disabled button.",name:"disabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isExternalLink:{defaultValue:null,description:"",name:"isExternalLink",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:_.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(P){}},"../../packages/my-jetpack/_inc/hooks/use-analytics/index.js":(v,m,n)=>{n.d(m,{Z:()=>c});var u=n("../analytics/index.jsx"),d=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=n("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js");const c=()=>{var x;const{isUserConnected:i,connectedPlugins:g,userConnectionData:p={}}=(0,a.Z)(),{login:f,ID:e}=((x=p.currentUser)==null?void 0:x.wpcomUser)||{};(0,d.useEffect)(()=>{i&&e&&f&&u.Z.initialize(e,f)},[e,i,f]);const t=Object.keys(g||{}).sort().join(",").replaceAll("jetpack-",""),{clearedIdentity:o,ga:s,mc:l,pageView:_,purchase:E,setGoogleAnalyticsEnabled:P,setMcAnalyticsEnabled:S,setProperties:h,tracks:y}=u.Z,b=(0,d.useCallback)((A,O)=>{var w;y.recordEvent(A,{...O,version:(w=window==null?void 0:window.myJetpackInitialState)==null?void 0:w.myJetpackVersion,referring_plugins:t})},[]);return{clearedIdentity:o,ga:s,mc:l,pageView:_,purchase:E,recordEvent:b,setGoogleAnalyticsEnabled:P,setMcAnalyticsEnabled:S,setProperties:h,tracks:y}}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js":(v,m,n)=>{n.d(m,{Z:()=>d});var u=n("../connection/components/use-connection/index.jsx");function d(){const{apiRoot:a,apiNonce:r}=myJetpackRest,{topJetpackMenuItemUrl:c}=myJetpackInitialState,i=(0,u.Z)({apiRoot:a,apiNonce:r}),g=i.isRegistered;return{apiNonce:r,apiRoot:a,...i,isSiteConnected:g,topJetpackMenuItemUrl:c}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(v,m,n)=>{n.d(m,{Z:()=>i});var u=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=n.n(u),a=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=n.n(a),c=r()(d());c.push([v.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),c.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const i=c}}]);})();
