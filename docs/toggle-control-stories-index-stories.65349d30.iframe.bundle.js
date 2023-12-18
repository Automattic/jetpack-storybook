"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9584],{"../components/components/toggle-control/stories/index.stories.tsx":(P,k,e)=>{var R,W,J,I,V,Y,Z,$,U,N,X,Q;e.r(k),e.d(k,{Default:()=>f,Disabled:()=>C,HelpText:()=>b,Slow:()=>a,__namedExportsOrder:()=>F,default:()=>D});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/toggle-control/index.js"),g=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),u=e.n(g),l=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(l),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss"),t={};t.insert="head",t.singleton=!1;var y=c()(i.Z,t);const m=i.Z.locals||{};var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const E=({checked:T,className:x,disabled:L,help:j,toggling:K,label:G,onChange:q})=>{const d=K!==void 0?T&&!K||!T&&K:T,S=(0,n.useCallback)(w=>{K||q(w)},[K,q]);return(0,s.jsx)(h.Z,{checked:d,className:u()(m.toggle,x,{[m["is-toggling"]]:K}),disabled:L,help:j,label:G,onChange:S})};E.displayName="ToggleControl";const O=E;try{togglecontrol.displayName="togglecontrol",togglecontrol.__docgenInfo={description:"",displayName:"togglecontrol",props:{checked:{defaultValue:null,description:"Whether or not the toggle is currently enabled.",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom class name to append to the component.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether or not the toggle is currently disabled.",name:"disabled",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional information to display below the toggle.",name:"help",required:!1,type:{name:"ReactNode"}},toggling:{defaultValue:null,description:"Whether or not the toggling is currently toggling.",name:"toggling",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The label for the toggle.",name:"label",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"A callback function invoked when the toggle is clicked.",name:"onChange",required:!0,type:{name:"(value: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/index.tsx#togglecontrol"]={docgenInfo:togglecontrol.__docgenInfo,name:"togglecontrol",path:"../components/components/toggle-control/index.tsx#togglecontrol"})}catch(T){}var M=`import React, { useCallback, useState } from 'react';
import ToggleControl from '..';

export default {
	title: 'JS Packages/Components/Toggle Control',
	component: ToggleControl,
	parameters: {
		layout: 'centered',
	},
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Default = args => {
	const [ checked, setChecked ] = useState( false );

	const handleChecked = useCallback( () => {
		setChecked( ! checked );
	}, [ checked ] );

	return <ToggleControl checked={ checked } onChange={ handleChecked } label="Code is poetry." />;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Slow = args => {
	const [ loading, setLoading ] = useState( false );
	const [ checked, setChecked ] = useState( false );

	const handleChecked = useCallback( () => {
		setLoading( true );
		setTimeout( () => {
			setLoading( false );
			setChecked( ! checked );
		}, 2000 );
	}, [ checked ] );

	return (
		<ToggleControl
			checked={ checked }
			toggling={ loading }
			onChange={ handleChecked }
			label="Code is poetry."
		/>
	);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Disabled = args => {
	const [ checked, setChecked ] = useState( false );

	const handleChecked = useCallback( () => {
		setChecked( ! checked );
	}, [ checked ] );

	return (
		<>
			<ToggleControl checked={ true } disabled label="Code is poetry." onChange={ handleChecked } />
			<ToggleControl
				checked={ false }
				disabled
				label="Code is poetry."
				onChange={ handleChecked }
			/>
		</>
	);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const HelpText = args => {
	const [ checked, setChecked ] = useState( false );

	const handleChecked = useCallback( () => {
		setChecked( ! checked );
	}, [ checked ] );

	return (
		<ToggleControl
			checked={ checked }
			label="Code is poetry."
			help="Code is poetry. Code is poetry. Code is poetry."
			onChange={ handleChecked }
		/>
	);
};
`,z={Default:{startLoc:{col:23,line:13},endLoc:{col:1,line:21},startBody:{col:23,line:13},endBody:{col:1,line:21}},Slow:{startLoc:{col:20,line:24},endLoc:{col:1,line:44},startBody:{col:20,line:24},endBody:{col:1,line:44}},Disabled:{startLoc:{col:24,line:47},endLoc:{col:1,line:65},startBody:{col:24,line:47},endBody:{col:1,line:65}},HelpText:{startLoc:{col:24,line:68},endLoc:{col:1,line:83},startBody:{col:24,line:68},endBody:{col:1,line:83}}};const D={title:"JS Packages/Components/Toggle Control",component:O,parameters:{storySource:{source:`import React, { useCallback, useState } from 'react';
import ToggleControl from '..';

export default {
	title: 'JS Packages/Components/Toggle Control',
	component: ToggleControl,
	parameters: {
		layout: 'centered',
	},
};


export const Default = args => {
	const [ checked, setChecked ] = useState( false );

	const handleChecked = useCallback( () => {
		setChecked( ! checked );
	}, [ checked ] );

	return <ToggleControl checked={ checked } onChange={ handleChecked } label="Code is poetry." />;
};


export const Slow = args => {
	const [ loading, setLoading ] = useState( false );
	const [ checked, setChecked ] = useState( false );

	const handleChecked = useCallback( () => {
		setLoading( true );
		setTimeout( () => {
			setLoading( false );
			setChecked( ! checked );
		}, 2000 );
	}, [ checked ] );

	return (
		<ToggleControl
			checked={ checked }
			toggling={ loading }
			onChange={ handleChecked }
			label="Code is poetry."
		/>
	);
};


export const Disabled = args => {
	const [ checked, setChecked ] = useState( false );

	const handleChecked = useCallback( () => {
		setChecked( ! checked );
	}, [ checked ] );

	return (
		<>
			<ToggleControl checked={ true } disabled label="Code is poetry." onChange={ handleChecked } />
			<ToggleControl
				checked={ false }
				disabled
				label="Code is poetry."
				onChange={ handleChecked }
			/>
		</>
	);
};


export const HelpText = args => {
	const [ checked, setChecked ] = useState( false );

	const handleChecked = useCallback( () => {
		setChecked( ! checked );
	}, [ checked ] );

	return (
		<ToggleControl
			checked={ checked }
			label="Code is poetry."
			help="Code is poetry. Code is poetry. Code is poetry."
			onChange={ handleChecked }
		/>
	);
};
`,locationsMap:{default:{startLoc:{col:23,line:13},endLoc:{col:1,line:21},startBody:{col:23,line:13},endBody:{col:1,line:21}},slow:{startLoc:{col:20,line:24},endLoc:{col:1,line:44},startBody:{col:20,line:24},endBody:{col:1,line:44}},disabled:{startLoc:{col:24,line:47},endLoc:{col:1,line:65},startBody:{col:24,line:47},endBody:{col:1,line:65}},"help-text":{startLoc:{col:24,line:68},endLoc:{col:1,line:83},startBody:{col:24,line:68},endBody:{col:1,line:83}}}},layout:"centered"}},f=T=>{const[x,L]=(0,n.useState)(!1),j=(0,n.useCallback)(()=>{L(!x)},[x]);return(0,s.jsx)(O,{checked:x,onChange:j,label:"Code is poetry."})};f.displayName="Default";const a=T=>{const[x,L]=(0,n.useState)(!1),[j,K]=(0,n.useState)(!1),G=(0,n.useCallback)(()=>{L(!0),setTimeout(()=>{L(!1),K(!j)},2e3)},[j]);return(0,s.jsx)(O,{checked:j,toggling:x,onChange:G,label:"Code is poetry."})};a.displayName="Slow";const C=T=>{const[x,L]=(0,n.useState)(!1),j=(0,n.useCallback)(()=>{L(!x)},[x]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(O,{checked:!0,disabled:!0,label:"Code is poetry.",onChange:j}),(0,s.jsx)(O,{checked:!1,disabled:!0,label:"Code is poetry.",onChange:j})]})},b=T=>{const[x,L]=(0,n.useState)(!1),j=(0,n.useCallback)(()=>{L(!x)},[x]);return(0,s.jsx)(O,{checked:x,label:"Code is poetry.",help:"Code is poetry. Code is poetry. Code is poetry.",onChange:j})};b.displayName="HelpText",f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} onChange={handleChecked} label="Code is poetry." />;
}`,...(J=(W=f.parameters)==null?void 0:W.docs)==null?void 0:J.source}}},a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setChecked(!checked);
    }, 2000);
  }, [checked]);
  return <ToggleControl checked={checked} toggling={loading} onChange={handleChecked} label="Code is poetry." />;
}`,...(Y=(V=a.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}},C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={true} disabled label="Code is poetry." onChange={handleChecked} />
            <ToggleControl checked={false} disabled label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...(U=($=C.parameters)==null?void 0:$.docs)==null?void 0:U.source}}},b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} label="Code is poetry." help="Code is poetry. Code is poetry. Code is poetry." onChange={handleChecked} />;
}`,...(Q=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};const F=["Default","Slow","Disabled","HelpText"];try{f.displayName="Default",f.__docgenInfo={description:"",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Default"]={docgenInfo:f.__docgenInfo,name:"Default",path:"../components/components/toggle-control/stories/index.stories.tsx#Default"})}catch(T){}try{a.displayName="Slow",a.__docgenInfo={description:"",displayName:"Slow",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Slow"]={docgenInfo:a.__docgenInfo,name:"Slow",path:"../components/components/toggle-control/stories/index.stories.tsx#Slow"})}catch(T){}try{C.displayName="Disabled",C.__docgenInfo={description:"",displayName:"Disabled",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Disabled"]={docgenInfo:C.__docgenInfo,name:"Disabled",path:"../components/components/toggle-control/stories/index.stories.tsx#Disabled"})}catch(T){}try{b.displayName="HelpText",b.__docgenInfo={description:"",displayName:"HelpText",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#HelpText"]={docgenInfo:b.__docgenInfo,name:"HelpText",path:"../components/components/toggle-control/stories/index.stories.tsx#HelpText"})}catch(T){}},"../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/flex/flex-block/component.js":(P,k,e)=>{e.d(k,{Z:()=>y});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js"),g=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/view/component.js"),u=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),l=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/flex/flex-item/hook.js");function c(m){const s=(0,u.y)(m,"FlexBlock");return(0,l.i)({isBlock:!0,...s})}function i(m,s){const E=c(m);return(0,n.createElement)(g.Z,{...E,ref:s})}const y=(0,h.Iq)(i,"FlexBlock")},"../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/toggle-control/index.js":(P,k,e)=>{e.d(k,{Z:()=>z});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=e("../../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),g=e("../../../node_modules/.pnpm/@wordpress+compose@6.24.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/flex/flex-block/component.js"),l=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),c=e.n(l);const i=()=>{};function t(D){const{className:f,checked:a,id:C,disabled:b,onChange:F=i,...R}=D,W=c()("components-form-toggle",f,{"is-checked":a,"is-disabled":b});return(0,n.createElement)("span",{className:W},(0,n.createElement)("input",{className:"components-form-toggle__input",id:C,type:"checkbox",checked:a,onChange:F,disabled:b,...R}),(0,n.createElement)("span",{className:"components-form-toggle__track"}),(0,n.createElement)("span",{className:"components-form-toggle__thumb"}))}const y=t;var m=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/h-stack/component.js"),E=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js"),O=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js");function M({__nextHasNoMarginBottom:D,label:f,checked:a,help:C,className:b,onChange:F,disabled:R}){function W(U){F(U.target.checked)}const I=`inspector-toggle-control-${(0,g.Z)(M)}`,Y=(0,E.I)()("components-toggle-control",b,!D&&(0,h.iv)({marginBottom:(0,O.D)(3)},"",""));let Z,$;return C&&(typeof C=="function"?a!==void 0&&($=C(a)):$=C,$&&(Z=I+"__help")),(0,n.createElement)(m.ZP,{id:I,help:$,className:Y,__nextHasNoMarginBottom:!0},(0,n.createElement)(s.Z,{justify:"flex-start",spacing:3},(0,n.createElement)(y,{id:I,checked:a,onChange:W,"aria-describedby":Z,disabled:R}),(0,n.createElement)(u.Z,{as:"label",htmlFor:I,className:"components-toggle-control__label"},f)))}const z=M},"../../../node_modules/.pnpm/@wordpress+compose@6.24.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js":(P,k,e)=>{e.d(k,{Z:()=>l});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const h=new WeakMap;function g(c){const i=h.get(c)||0;return h.set(c,i+1),i}function u(c,i,t){return(0,n.useMemo)(()=>{if(t)return t;const y=g(c);return i?`${i}-${y}`:y},[c,t,i])}const l=u},"../../../node_modules/.pnpm/@wordpress+deprecated@3.47.0/node_modules/@wordpress/deprecated/build-module/index.js":(P,k,e)=>{e.d(k,{Z:()=>g});var n=e("../../../node_modules/.pnpm/@wordpress+hooks@3.47.0/node_modules/@wordpress/hooks/build-module/index.js");const h=Object.create(null);function g(u,l={}){const{since:c,version:i,alternative:t,plugin:y,link:m,hint:s}=l,E=y?` from ${y}`:"",O=c?` since version ${c}`:"",M=i?` and will be removed${E} in version ${i}`:"",z=t?` Please use ${t} instead.`:"",D=m?` See: ${m}`:"",f=s?` Note: ${s}`:"",a=`${u} is deprecated${O}${M}.${z}${D}${f}`;a in h||((0,n.Kw)("deprecated",u,l,a),console.warn(a),h[a]=!0)}},"../../../node_modules/.pnpm/@wordpress+hooks@3.47.0/node_modules/@wordpress/hooks/build-module/index.js":(P,k,e)=>{e.d(k,{KG:()=>W,KJ:()=>J,O:()=>X,Hu:()=>F,JQ:()=>R,Kw:()=>N,H7:()=>Z,iR:()=>I});function n(d){return typeof d!="string"||d===""?(console.error("The namespace must be a non-empty string."),!1):/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(d)?!0:(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)}const h=n;function g(d){return typeof d!="string"||d===""?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(d)?(console.error("The hook name cannot begin with `__`."),!1):/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(d)?!0:(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)}const u=g;function l(d,S){return function(r,o,_,p=10){const A=d[S];if(!u(r)||!h(o))return;if(typeof _!="function"){console.error("The hook callback must be a function.");return}if(typeof p!="number"){console.error("If specified, the hook priority must be a number.");return}const B={callback:_,priority:p,namespace:o};if(A[r]){const H=A[r].handlers;let v;for(v=H.length;v>0&&!(p>=H[v-1].priority);v--);v===H.length?H[v]=B:H.splice(v,0,B),A.__current.forEach(ee=>{ee.name===r&&ee.currentIndex>=v&&ee.currentIndex++})}else A[r]={handlers:[B],runs:0};r!=="hookAdded"&&d.doAction("hookAdded",r,o,_,p)}}const c=l;function i(d,S,w=!1){return function(o,_){const p=d[S];if(!u(o)||!w&&!h(_))return;if(!p[o])return 0;let A=0;if(w)A=p[o].handlers.length,p[o]={runs:p[o].runs,handlers:[]};else{const B=p[o].handlers;for(let H=B.length-1;H>=0;H--)B[H].namespace===_&&(B.splice(H,1),A++,p.__current.forEach(v=>{v.name===o&&v.currentIndex>=H&&v.currentIndex--}))}return o!=="hookRemoved"&&d.doAction("hookRemoved",o,_),A}}const t=i;function y(d,S){return function(r,o){const _=d[S];return typeof o!="undefined"?r in _&&_[r].handlers.some(p=>p.namespace===o):r in _}}const m=y;function s(d,S,w=!1){return function(o,..._){const p=d[S];p[o]||(p[o]={handlers:[],runs:0}),p[o].runs++;const A=p[o].handlers;if(!A||!A.length)return w?_[0]:void 0;const B={name:o,currentIndex:0};for(p.__current.push(B);B.currentIndex<A.length;){const v=A[B.currentIndex].callback.apply(null,_);w&&(_[0]=v),B.currentIndex++}if(p.__current.pop(),w)return _[0]}}const E=s;function O(d,S){return function(){var _;var r;const o=d[S];return(r=(_=o.__current[o.__current.length-1])==null?void 0:_.name)!==null&&r!==void 0?r:null}}const M=O;function z(d,S){return function(r){const o=d[S];return typeof r=="undefined"?typeof o.__current[0]!="undefined":o.__current[0]?r===o.__current[0].name:!1}}const D=z;function f(d,S){return function(r){const o=d[S];if(u(r))return o[r]&&o[r].runs?o[r].runs:0}}const a=f;class C{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=c(this,"actions"),this.addFilter=c(this,"filters"),this.removeAction=t(this,"actions"),this.removeFilter=t(this,"filters"),this.hasAction=m(this,"actions"),this.hasFilter=m(this,"filters"),this.removeAllActions=t(this,"actions",!0),this.removeAllFilters=t(this,"filters",!0),this.doAction=E(this,"actions"),this.applyFilters=E(this,"filters",!0),this.currentAction=M(this,"actions"),this.currentFilter=M(this,"filters"),this.doingAction=D(this,"actions"),this.doingFilter=D(this,"filters"),this.didAction=a(this,"actions"),this.didFilter=a(this,"filters")}}function b(){return new C}const F=b,R=F(),{addAction:W,addFilter:J,removeAction:I,removeFilter:V,hasAction:Y,hasFilter:Z,removeAllActions:$,removeAllFilters:U,doAction:N,applyFilters:X,currentAction:Q,currentFilter:T,doingAction:x,doingFilter:L,didAction:j,didFilter:K,actions:G,filters:q}=R},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss":(P,k,e)=>{e.d(k,{Z:()=>c});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),h=e.n(n),g=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),u=e.n(g),l=u()(h());l.push([P.id,".oH070sCBKmmSCsJW4qCg .components-form-toggle{--wp-admin-theme-color: var( --jp-green-40 )}.oH070sCBKmmSCsJW4qCg .components-form-toggle__input:focus+.components-form-toggle__track{box-shadow:0 0 0 2px var(--jp-white),0 0 0 4px var(--jp-green-50)}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__track{width:48px;height:24px;border-radius:12px;border-width:2px}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__thumb{width:16px;height:16px;top:4px;left:4px}.oH070sCBKmmSCsJW4qCg .components-form-toggle.is-checked .components-form-toggle__thumb{transform:translateX(24px)}.oH070sCBKmmSCsJW4qCg.EX6n744Crf5bz8oOe02m .components-form-toggle{opacity:.6}",""]),l.locals={toggle:"oH070sCBKmmSCsJW4qCg","is-toggling":"EX6n744Crf5bz8oOe02m"};const c=l},"../../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js":(P,k,e)=>{e.d(k,{Z:()=>n});function n(h,g){var u=0,l,c;g=g||{};function i(){var t=l,y=arguments.length,m,s;e:for(;t;){if(t.args.length!==arguments.length){t=t.next;continue}for(s=0;s<y;s++)if(t.args[s]!==arguments[s]){t=t.next;continue e}return t!==l&&(t===c&&(c=t.prev),t.prev.next=t.next,t.next&&(t.next.prev=t.prev),t.next=l,t.prev=null,l.prev=t,l=t),t.val}for(m=new Array(y),s=0;s<y;s++)m[s]=arguments[s];return t={args:m,val:h.apply(null,m)},l?(l.prev=t,t.next=l):c=t,u===g.maxSize?(c=c.prev,c.next=null):u++,l=t,t.val}return i.clear=function(){l=null,c=null,u=0},i}}}]);})();
