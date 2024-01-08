"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9584],{"../components/components/toggle-control/stories/index.stories.tsx":(I,b,e)=>{var P,$,D,Y,Z,W,F,J,N,U,V,X,G,Q,q;e.r(b),e.d(b,{Default:()=>k,Disabled:()=>y,HelpText:()=>x,Slow:()=>a,Small:()=>T,__namedExportsOrder:()=>M,default:()=>R});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),C=e("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/toggle-control/index.js"),f=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),_=e.n(f),c=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(c),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss"),t={};t.insert="head",t.singleton=!1;var S=d()(m.Z,t);const p=m.Z.locals||{};var l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const B=({checked:w,className:g,disabled:E,help:n,toggling:i,label:v,size:r="normal",onChange:o})=>{const h=i!==void 0?w&&!i||!w&&i:w,u=(0,s.useCallback)(j=>{i||o(j)},[i,o]);return(0,l.jsx)(C.Z,{checked:h,className:_()(p.toggle,g,{[p["is-toggling"]]:i,[p["is-small"]]:r==="small",[p["no-label"]]:!v}),disabled:E,help:n,label:v,onChange:u})};B.displayName="ToggleControl";const O=B;try{togglecontrol.displayName="togglecontrol",togglecontrol.__docgenInfo={description:"",displayName:"togglecontrol",props:{checked:{defaultValue:null,description:"Whether or not the toggle is currently enabled.",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom class name to append to the component.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether or not the toggle is currently disabled.",name:"disabled",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional information to display below the toggle.",name:"help",required:!1,type:{name:"ReactNode"}},toggling:{defaultValue:null,description:"Whether or not the toggling is currently toggling.",name:"toggling",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The label for the toggle.",name:"label",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"normal"},description:"The size of the toggle.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onChange:{defaultValue:null,description:"A callback function invoked when the toggle is clicked.",name:"onChange",required:!0,type:{name:"(value: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/index.tsx#togglecontrol"]={docgenInfo:togglecontrol.__docgenInfo,name:"togglecontrol",path:"../components/components/toggle-control/index.tsx#togglecontrol"})}catch(w){}var K=`import React, { useCallback, useState } from 'react';
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
export const Small = args => {
	const [ checked, setChecked ] = useState( false );

	const handleChecked = useCallback( () => {
		setChecked( ! checked );
	}, [ checked ] );

	return (
		<>
			<ToggleControl
				checked={ checked }
				size="small"
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
`,z={Default:{startLoc:{col:23,line:13},endLoc:{col:1,line:21},startBody:{col:23,line:13},endBody:{col:1,line:21}},Slow:{startLoc:{col:20,line:24},endLoc:{col:1,line:44},startBody:{col:20,line:24},endBody:{col:1,line:44}},Disabled:{startLoc:{col:24,line:47},endLoc:{col:1,line:65},startBody:{col:24,line:47},endBody:{col:1,line:65}},Small:{startLoc:{col:21,line:68},endLoc:{col:1,line:85},startBody:{col:21,line:68},endBody:{col:1,line:85}},HelpText:{startLoc:{col:24,line:88},endLoc:{col:1,line:103},startBody:{col:24,line:88},endBody:{col:1,line:103}}};const R={title:"JS Packages/Components/Toggle Control",component:O,parameters:{storySource:{source:`import React, { useCallback, useState } from 'react';
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


export const Small = args => {
	const [ checked, setChecked ] = useState( false );

	const handleChecked = useCallback( () => {
		setChecked( ! checked );
	}, [ checked ] );

	return (
		<>
			<ToggleControl
				checked={ checked }
				size="small"
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
`,locationsMap:{default:{startLoc:{col:23,line:13},endLoc:{col:1,line:21},startBody:{col:23,line:13},endBody:{col:1,line:21}},slow:{startLoc:{col:20,line:24},endLoc:{col:1,line:44},startBody:{col:20,line:24},endBody:{col:1,line:44}},disabled:{startLoc:{col:24,line:47},endLoc:{col:1,line:65},startBody:{col:24,line:47},endBody:{col:1,line:65}},small:{startLoc:{col:21,line:68},endLoc:{col:1,line:85},startBody:{col:21,line:68},endBody:{col:1,line:85}},"help-text":{startLoc:{col:24,line:88},endLoc:{col:1,line:103},startBody:{col:24,line:88},endBody:{col:1,line:103}}}},layout:"centered"}},k=w=>{const[g,E]=(0,s.useState)(!1),n=(0,s.useCallback)(()=>{E(!g)},[g]);return(0,l.jsx)(O,{checked:g,onChange:n,label:"Code is poetry."})};k.displayName="Default";const a=w=>{const[g,E]=(0,s.useState)(!1),[n,i]=(0,s.useState)(!1),v=(0,s.useCallback)(()=>{E(!0),setTimeout(()=>{E(!1),i(!n)},2e3)},[n]);return(0,l.jsx)(O,{checked:n,toggling:g,onChange:v,label:"Code is poetry."})};a.displayName="Slow";const y=w=>{const[g,E]=(0,s.useState)(!1),n=(0,s.useCallback)(()=>{E(!g)},[g]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(O,{checked:!0,disabled:!0,label:"Code is poetry.",onChange:n}),(0,l.jsx)(O,{checked:!1,disabled:!0,label:"Code is poetry.",onChange:n})]})},T=w=>{const[g,E]=(0,s.useState)(!1),n=(0,s.useCallback)(()=>{E(!g)},[g]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(O,{checked:g,size:"small",label:"Code is poetry.",onChange:n})})},x=w=>{const[g,E]=(0,s.useState)(!1),n=(0,s.useCallback)(()=>{E(!g)},[g]);return(0,l.jsx)(O,{checked:g,label:"Code is poetry.",help:"Code is poetry. Code is poetry. Code is poetry.",onChange:n})};x.displayName="HelpText",k.parameters={...k.parameters,docs:{...(P=k.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} onChange={handleChecked} label="Code is poetry." />;
}`,...(D=($=k.parameters)==null?void 0:$.docs)==null?void 0:D.source}}},a.parameters={...a.parameters,docs:{...(Y=a.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
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
}`,...(W=(Z=a.parameters)==null?void 0:Z.docs)==null?void 0:W.source}}},y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={true} disabled label="Code is poetry." onChange={handleChecked} />
            <ToggleControl checked={false} disabled label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...(N=(J=y.parameters)==null?void 0:J.docs)==null?void 0:N.source}}},T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={checked} size="small" label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...(X=(V=T.parameters)==null?void 0:V.docs)==null?void 0:X.source}}},x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} label="Code is poetry." help="Code is poetry. Code is poetry. Code is poetry." onChange={handleChecked} />;
}`,...(q=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:q.source}}};const M=["Default","Slow","Disabled","Small","HelpText"];try{k.displayName="Default",k.__docgenInfo={description:"",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Default"]={docgenInfo:k.__docgenInfo,name:"Default",path:"../components/components/toggle-control/stories/index.stories.tsx#Default"})}catch(w){}try{a.displayName="Slow",a.__docgenInfo={description:"",displayName:"Slow",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Slow"]={docgenInfo:a.__docgenInfo,name:"Slow",path:"../components/components/toggle-control/stories/index.stories.tsx#Slow"})}catch(w){}try{y.displayName="Disabled",y.__docgenInfo={description:"",displayName:"Disabled",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Disabled"]={docgenInfo:y.__docgenInfo,name:"Disabled",path:"../components/components/toggle-control/stories/index.stories.tsx#Disabled"})}catch(w){}try{T.displayName="Small",T.__docgenInfo={description:"",displayName:"Small",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Small"]={docgenInfo:T.__docgenInfo,name:"Small",path:"../components/components/toggle-control/stories/index.stories.tsx#Small"})}catch(w){}try{x.displayName="HelpText",x.__docgenInfo={description:"",displayName:"HelpText",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#HelpText"]={docgenInfo:x.__docgenInfo,name:"HelpText",path:"../components/components/toggle-control/stories/index.stories.tsx#HelpText"})}catch(w){}},"../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/flex/flex-block/component.js":(I,b,e)=>{e.d(b,{Z:()=>S});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),C=e("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js"),f=e("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/view/component.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/flex/flex-item/hook.js");function d(p){const l=(0,_.y)(p,"FlexBlock");return(0,c.i)({isBlock:!0,...l})}function m(p,l){const B=d(p);return(0,s.createElement)(f.Z,{...B,ref:l})}const S=(0,C.Iq)(m,"FlexBlock")},"../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/toggle-control/index.js":(I,b,e)=>{e.d(b,{Z:()=>z});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),C=e("../../../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),f=e("../../../node_modules/.pnpm/@wordpress+compose@6.25.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/flex/flex-block/component.js"),c=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),d=e.n(c);const m=()=>{};function t(R){const{className:k,checked:a,id:y,disabled:T,onChange:x=m,...M}=R,P=d()("components-form-toggle",k,{"is-checked":a,"is-disabled":T});return(0,s.createElement)("span",{className:P},(0,s.createElement)("input",{className:"components-form-toggle__input",id:y,type:"checkbox",checked:a,onChange:x,disabled:T,...M}),(0,s.createElement)("span",{className:"components-form-toggle__track"}),(0,s.createElement)("span",{className:"components-form-toggle__thumb"}))}const S=t;var p=e("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/h-stack/component.js"),B=e("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js"),O=e("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js");function K({__nextHasNoMarginBottom:R,label:k,checked:a,help:y,className:T,onChange:x,disabled:M}){function P(J){x(J.target.checked)}const D=`inspector-toggle-control-${(0,f.Z)(K)}`,Z=(0,B.I)()("components-toggle-control",T,!R&&(0,C.iv)({marginBottom:(0,O.D)(3)},"",""));let W,F;return y&&(typeof y=="function"?a!==void 0&&(F=y(a)):F=y,F&&(W=D+"__help")),(0,s.createElement)(p.ZP,{id:D,help:F,className:Z,__nextHasNoMarginBottom:!0},(0,s.createElement)(l.Z,{justify:"flex-start",spacing:3},(0,s.createElement)(S,{id:D,checked:a,onChange:P,"aria-describedby":W,disabled:M}),(0,s.createElement)(_.Z,{as:"label",htmlFor:D,className:"components-toggle-control__label"},k)))}const z=K},"../../../node_modules/.pnpm/@wordpress+compose@6.25.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js":(I,b,e)=>{e.d(b,{Z:()=>c});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const C=new WeakMap;function f(d){const m=C.get(d)||0;return C.set(d,m+1),m}function _(d,m,t){return(0,s.useMemo)(()=>{if(t)return t;const S=f(d);return m?`${m}-${S}`:S},[d,t,m])}const c=_},"../../../node_modules/.pnpm/@wordpress+deprecated@3.48.0/node_modules/@wordpress/deprecated/build-module/index.js":(I,b,e)=>{e.d(b,{Z:()=>f});var s=e("../../../node_modules/.pnpm/@wordpress+hooks@3.48.0/node_modules/@wordpress/hooks/build-module/index.js");const C=Object.create(null);function f(_,c={}){const{since:d,version:m,alternative:t,plugin:S,link:p,hint:l}=c,B=S?` from ${S}`:"",O=d?` since version ${d}`:"",K=m?` and will be removed${B} in version ${m}`:"",z=t?` Please use ${t} instead.`:"",R=p?` See: ${p}`:"",k=l?` Note: ${l}`:"",a=`${_} is deprecated${O}${K}.${z}${R}${k}`;a in C||((0,s.Kw)("deprecated",_,c,a),console.warn(a),C[a]=!0)}},"../../../node_modules/.pnpm/@wordpress+hooks@3.48.0/node_modules/@wordpress/hooks/build-module/index.js":(I,b,e)=>{e.d(b,{KG:()=>P,KJ:()=>$,O:()=>U,Hu:()=>x,JQ:()=>M,Kw:()=>N,H7:()=>W,iR:()=>D});function s(n){return typeof n!="string"||n===""?(console.error("The namespace must be a non-empty string."),!1):/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(n)?!0:(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)}const C=s;function f(n){return typeof n!="string"||n===""?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(n)?(console.error("The hook name cannot begin with `__`."),!1):/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(n)?!0:(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)}const _=f;function c(n,i){return function(r,o,h,u=10){const j=n[i];if(!_(r)||!C(o))return;if(typeof h!="function"){console.error("The hook callback must be a function.");return}if(typeof u!="number"){console.error("If specified, the hook priority must be a number.");return}const H={callback:h,priority:u,namespace:o};if(j[r]){const L=j[r].handlers;let A;for(A=L.length;A>0&&!(u>=L[A-1].priority);A--);A===L.length?L[A]=H:L.splice(A,0,H),j.__current.forEach(ee=>{ee.name===r&&ee.currentIndex>=A&&ee.currentIndex++})}else j[r]={handlers:[H],runs:0};r!=="hookAdded"&&n.doAction("hookAdded",r,o,h,u)}}const d=c;function m(n,i,v=!1){return function(o,h){const u=n[i];if(!_(o)||!v&&!C(h))return;if(!u[o])return 0;let j=0;if(v)j=u[o].handlers.length,u[o]={runs:u[o].runs,handlers:[]};else{const H=u[o].handlers;for(let L=H.length-1;L>=0;L--)H[L].namespace===h&&(H.splice(L,1),j++,u.__current.forEach(A=>{A.name===o&&A.currentIndex>=L&&A.currentIndex--}))}return o!=="hookRemoved"&&n.doAction("hookRemoved",o,h),j}}const t=m;function S(n,i){return function(r,o){const h=n[i];return typeof o!="undefined"?r in h&&h[r].handlers.some(u=>u.namespace===o):r in h}}const p=S;function l(n,i,v=!1){return function(o,...h){const u=n[i];u[o]||(u[o]={handlers:[],runs:0}),u[o].runs++;const j=u[o].handlers;if(!j||!j.length)return v?h[0]:void 0;const H={name:o,currentIndex:0};for(u.__current.push(H);H.currentIndex<j.length;){const A=j[H.currentIndex].callback.apply(null,h);v&&(h[0]=A),H.currentIndex++}if(u.__current.pop(),v)return h[0]}}const B=l;function O(n,i){return function(){var h;var r;const o=n[i];return(r=(h=o.__current[o.__current.length-1])==null?void 0:h.name)!==null&&r!==void 0?r:null}}const K=O;function z(n,i){return function(r){const o=n[i];return typeof r=="undefined"?typeof o.__current[0]!="undefined":o.__current[0]?r===o.__current[0].name:!1}}const R=z;function k(n,i){return function(r){const o=n[i];if(_(r))return o[r]&&o[r].runs?o[r].runs:0}}const a=k;class y{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=d(this,"actions"),this.addFilter=d(this,"filters"),this.removeAction=t(this,"actions"),this.removeFilter=t(this,"filters"),this.hasAction=p(this,"actions"),this.hasFilter=p(this,"filters"),this.removeAllActions=t(this,"actions",!0),this.removeAllFilters=t(this,"filters",!0),this.doAction=B(this,"actions"),this.applyFilters=B(this,"filters",!0),this.currentAction=K(this,"actions"),this.currentFilter=K(this,"filters"),this.doingAction=R(this,"actions"),this.doingFilter=R(this,"filters"),this.didAction=a(this,"actions"),this.didFilter=a(this,"filters")}}function T(){return new y}const x=T,M=x(),{addAction:P,addFilter:$,removeAction:D,removeFilter:Y,hasAction:Z,hasFilter:W,removeAllActions:F,removeAllFilters:J,doAction:N,applyFilters:U,currentAction:V,currentFilter:X,doingAction:G,doingFilter:Q,didAction:q,didFilter:w,actions:g,filters:E}=M},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss":(I,b,e)=>{e.d(b,{Z:()=>d});var s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),C=e.n(s),f=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),_=e.n(f),c=_()(C());c.push([I.id,".oH070sCBKmmSCsJW4qCg{--base-width: 8px}.oH070sCBKmmSCsJW4qCg.Y3PMNlFXh5x11Sj52c_o{--base-width: 6px}.oH070sCBKmmSCsJW4qCg.apmOjtu5hzpJmHPMMKCb .components-toggle-control__label{display:none}.oH070sCBKmmSCsJW4qCg .components-form-toggle{--wp-admin-theme-color: var( --jp-green-40 )}.oH070sCBKmmSCsJW4qCg .components-form-toggle__input:focus+.components-form-toggle__track{box-shadow:0 0 0 2px var(--jp-white),0 0 0 4px var(--jp-green-50)}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__track{width:calc(var(--base-width)*6);height:calc(var(--base-width)*3);border-radius:12px;border-width:2px}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__thumb{width:calc(var(--base-width)*2);height:calc(var(--base-width)*2);top:calc(var(--base-width)/2);left:calc(var(--base-width)/2)}.oH070sCBKmmSCsJW4qCg .components-form-toggle.is-checked .components-form-toggle__thumb{transform:translateX(calc(var(--base-width) * 3))}.oH070sCBKmmSCsJW4qCg.EX6n744Crf5bz8oOe02m .components-form-toggle{opacity:.6}",""]),c.locals={toggle:"oH070sCBKmmSCsJW4qCg","is-small":"Y3PMNlFXh5x11Sj52c_o","no-label":"apmOjtu5hzpJmHPMMKCb","is-toggling":"EX6n744Crf5bz8oOe02m"};const d=c},"../../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js":(I,b,e)=>{e.d(b,{Z:()=>s});function s(C,f){var _=0,c,d;f=f||{};function m(){var t=c,S=arguments.length,p,l;e:for(;t;){if(t.args.length!==arguments.length){t=t.next;continue}for(l=0;l<S;l++)if(t.args[l]!==arguments[l]){t=t.next;continue e}return t!==c&&(t===d&&(d=t.prev),t.prev.next=t.next,t.next&&(t.next.prev=t.prev),t.next=c,t.prev=null,c.prev=t,c=t),t.val}for(p=new Array(S),l=0;l<S;l++)p[l]=arguments[l];return t={args:p,val:C.apply(null,p)},c?(c.prev=t,t.next=c):d=t,_===f.maxSize?(d=d.prev,d.next=null):_++,c=t,t.val}return m.clear=function(){c=null,d=null,_=0},m}}}]);})();
