"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9584],{"../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/flex/flex-block/component.js":(w,u,e)=>{e.d(u,{Z:()=>k});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/view/component.js"),g=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/flex/flex-item/hook.js");function s(C){const t=(0,g.y)(C,"FlexBlock");return(0,r.i)({isBlock:!0,...t})}function l(C,t){const S=s(C);return(0,o.createElement)(_.Z,{...S,ref:t})}const k=(0,i.Iq)(l,"FlexBlock")},"../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/toggle-control/index.js":(w,u,e)=>{e.d(u,{Z:()=>A});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_=e("../../../node_modules/.pnpm/@wordpress+compose@6.22.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),g=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/flex/flex-block/component.js"),r=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),s=e.n(r);const l=()=>{};function m(T){const{className:d,checked:n,id:a,disabled:p,onChange:L=l,...O}=T,v=s()("components-form-toggle",d,{"is-checked":n,"is-disabled":p});return(0,o.createElement)("span",{className:v},(0,o.createElement)("input",{className:"components-form-toggle__input",id:a,type:"checkbox",checked:n,onChange:L,disabled:p,...O}),(0,o.createElement)("span",{className:"components-form-toggle__track"}),(0,o.createElement)("span",{className:"components-form-toggle__thumb"}))}const k=m;var C=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/h-stack/component.js"),S=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js"),f=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js");function B({__nextHasNoMarginBottom:T,label:d,checked:n,help:a,className:p,onChange:L,disabled:O}){function v(I){L(I.target.checked)}const j=`inspector-toggle-control-${(0,_.Z)(B)}`,R=(0,S.I)()("components-toggle-control",p,!T&&(0,i.iv)({marginBottom:(0,f.D)(3)},"",""));let D,E;return a&&(typeof a=="function"?n!==void 0&&(E=a(n)):E=a,E&&(D=j+"__help")),(0,o.createElement)(C.ZP,{id:j,help:E,className:R,__nextHasNoMarginBottom:!0},(0,o.createElement)(t.Z,{justify:"flex-start",spacing:3},(0,o.createElement)(k,{id:j,checked:n,onChange:v,"aria-describedby":D,disabled:O}),(0,o.createElement)(g.Z,{as:"label",htmlFor:j,className:"components-toggle-control__label"},d)))}const A=B},"../../../node_modules/.pnpm/@wordpress+compose@6.22.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js":(w,u,e)=>{e.d(u,{Z:()=>r});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const i=new WeakMap;function _(s){const l=i.get(s)||0;return i.set(s,l+1),l}function g(s,l,m){return(0,o.useMemo)(()=>{if(m)return m;const k=_(s);return l?`${l}-${k}`:k},[s,m,l])}const r=g},"../../../node_modules/.pnpm/@wordpress+deprecated@3.45.0/node_modules/@wordpress/deprecated/build-module/index.js":(w,u,e)=>{e.d(u,{Z:()=>_});var o=e("../../../node_modules/.pnpm/@wordpress+hooks@3.45.0/node_modules/@wordpress/hooks/build-module/index.js");const i=Object.create(null);function _(g,r={}){const{since:s,version:l,alternative:m,plugin:k,link:C,hint:t}=r,S=k?` from ${k}`:"",f=s?` since version ${s}`:"",B=l?` and will be removed${S} in version ${l}`:"",A=m?` Please use ${m} instead.`:"",T=C?` See: ${C}`:"",d=t?` Note: ${t}`:"",n=`${g} is deprecated${f}${B}.${A}${T}${d}`;n in i||((0,o.Kw)("deprecated",g,r,n),console.warn(n),i[n]=!0)}},"../components/components/toggle-control/stories/index.stories.tsx":(w,u,e)=>{var O,v,N,j,P,R,D,E,I,K,H,W;e.r(u),e.d(u,{Default:()=>d,Disabled:()=>a,HelpText:()=>p,Slow:()=>n,__namedExportsOrder:()=>L,default:()=>T});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/toggle-control/index.js"),_=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),g=e.n(_),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(r),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss"),m={};m.insert="head",m.singleton=!1;var k=s()(l.Z,m);const C=l.Z.locals||{};var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const S=y=>{let{checked:c,className:b,disabled:h,help:M,toggling:x,label:Z,onChange:$}=y;const F=x!==void 0?c&&!x||!c&&x:c,Y=(0,o.useCallback)(J=>{x||$(J)},[x,$]);return(0,t.jsx)(i.Z,{checked:F,className:g()(C.toggle,b,{[C["is-toggling"]]:x}),disabled:h,help:M,label:Z,onChange:Y})};S.displayName="ToggleControl";const f=S;try{togglecontrol.displayName="togglecontrol",togglecontrol.__docgenInfo={description:"",displayName:"togglecontrol",props:{checked:{defaultValue:null,description:"Whether or not the toggle is currently enabled.",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom class name to append to the component.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether or not the toggle is currently disabled.",name:"disabled",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional information to display below the toggle.",name:"help",required:!1,type:{name:"ReactNode"}},toggling:{defaultValue:null,description:"Whether or not the toggling is currently toggling.",name:"toggling",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The label for the toggle.",name:"label",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"A callback function invoked when the toggle is clicked.",name:"onChange",required:!0,type:{name:"(value: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/index.tsx#togglecontrol"]={docgenInfo:togglecontrol.__docgenInfo,name:"togglecontrol",path:"../components/components/toggle-control/index.tsx#togglecontrol"})}catch(y){}var B=`import React, { useCallback, useState } from 'react';
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
`,A={Default:{startLoc:{col:23,line:12},endLoc:{col:1,line:18},startBody:{col:23,line:12},endBody:{col:1,line:18}},Slow:{startLoc:{col:20,line:21},endLoc:{col:1,line:32},startBody:{col:20,line:21},endBody:{col:1,line:32}},Disabled:{startLoc:{col:24,line:35},endLoc:{col:1,line:44},startBody:{col:24,line:35},endBody:{col:1,line:44}},HelpText:{startLoc:{col:24,line:47},endLoc:{col:1,line:53},startBody:{col:24,line:47},endBody:{col:1,line:53}}};const T={title:"JS Packages/Components/Toggle Control",component:f,parameters:{storySource:{source:`import React, { useCallback, useState } from 'react';
import ToggleControl from '..';
export default {
  title: 'JS Packages/Components/Toggle Control',
  component: ToggleControl,
  parameters: {
    layout: 'centered'
  }
};


export const Default = args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} onChange={handleChecked} label="Code is poetry." />;
};


export const Slow = args => {
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
};


export const Disabled = args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={true} disabled label="Code is poetry." onChange={handleChecked} />
            <ToggleControl checked={false} disabled label="Code is poetry." onChange={handleChecked} />
        </>;
};


export const HelpText = args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} label="Code is poetry." help="Code is poetry. Code is poetry. Code is poetry." onChange={handleChecked} />;
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => {\\n  const [checked, setChecked] = useState(false);\\n  const handleChecked = useCallback(() => {\\n    setChecked(!checked);\\n  }, [checked]);\\n  return <ToggleControl checked={checked} onChange={handleChecked} label=\\"Code is poetry.\\" />;\\n}",
      ...Default.parameters?.docs?.source
    }
  }
};
Slow.parameters = {
  ...Slow.parameters,
  docs: {
    ...Slow.parameters?.docs,
    source: {
      originalSource: "args => {\\n  const [loading, setLoading] = useState(false);\\n  const [checked, setChecked] = useState(false);\\n  const handleChecked = useCallback(() => {\\n    setLoading(true);\\n    setTimeout(() => {\\n      setLoading(false);\\n      setChecked(!checked);\\n    }, 2000);\\n  }, [checked]);\\n  return <ToggleControl checked={checked} toggling={loading} onChange={handleChecked} label=\\"Code is poetry.\\" />;\\n}",
      ...Slow.parameters?.docs?.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...Disabled.parameters?.docs,
    source: {
      originalSource: "args => {\\n  const [checked, setChecked] = useState(false);\\n  const handleChecked = useCallback(() => {\\n    setChecked(!checked);\\n  }, [checked]);\\n  return <>\\n            <ToggleControl checked={true} disabled label=\\"Code is poetry.\\" onChange={handleChecked} />\\n            <ToggleControl checked={false} disabled label=\\"Code is poetry.\\" onChange={handleChecked} />\\n        </>;\\n}",
      ...Disabled.parameters?.docs?.source
    }
  }
};
HelpText.parameters = {
  ...HelpText.parameters,
  docs: {
    ...HelpText.parameters?.docs,
    source: {
      originalSource: "args => {\\n  const [checked, setChecked] = useState(false);\\n  const handleChecked = useCallback(() => {\\n    setChecked(!checked);\\n  }, [checked]);\\n  return <ToggleControl checked={checked} label=\\"Code is poetry.\\" help=\\"Code is poetry. Code is poetry. Code is poetry.\\" onChange={handleChecked} />;\\n}",
      ...HelpText.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:23,line:12},endLoc:{col:1,line:18},startBody:{col:23,line:12},endBody:{col:1,line:18}},slow:{startLoc:{col:20,line:21},endLoc:{col:1,line:32},startBody:{col:20,line:21},endBody:{col:1,line:32}},disabled:{startLoc:{col:24,line:35},endLoc:{col:1,line:44},startBody:{col:24,line:35},endBody:{col:1,line:44}},"help-text":{startLoc:{col:24,line:47},endLoc:{col:1,line:53},startBody:{col:24,line:47},endBody:{col:1,line:53}}}},layout:"centered"}},d=y=>{const[c,b]=(0,o.useState)(!1),h=(0,o.useCallback)(()=>{b(!c)},[c]);return(0,t.jsx)(f,{checked:c,onChange:h,label:"Code is poetry."})};d.displayName="Default";const n=y=>{const[c,b]=(0,o.useState)(!1),[h,M]=(0,o.useState)(!1),x=(0,o.useCallback)(()=>{b(!0),setTimeout(()=>{b(!1),M(!h)},2e3)},[h]);return(0,t.jsx)(f,{checked:h,toggling:c,onChange:x,label:"Code is poetry."})};n.displayName="Slow";const a=y=>{const[c,b]=(0,o.useState)(!1),h=(0,o.useCallback)(()=>{b(!c)},[c]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f,{checked:!0,disabled:!0,label:"Code is poetry.",onChange:h}),(0,t.jsx)(f,{checked:!1,disabled:!0,label:"Code is poetry.",onChange:h})]})},p=y=>{const[c,b]=(0,o.useState)(!1),h=(0,o.useCallback)(()=>{b(!c)},[c]);return(0,t.jsx)(f,{checked:c,label:"Code is poetry.",help:"Code is poetry. Code is poetry. Code is poetry.",onChange:h})};p.displayName="HelpText",d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} onChange={handleChecked} label="Code is poetry." />;
}`,...(N=(v=d.parameters)==null?void 0:v.docs)==null?void 0:N.source}}},n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
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
}`,...(R=(P=n.parameters)==null?void 0:P.docs)==null?void 0:R.source}}},a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={true} disabled label="Code is poetry." onChange={handleChecked} />
            <ToggleControl checked={false} disabled label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...(I=(E=a.parameters)==null?void 0:E.docs)==null?void 0:I.source}}},p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} label="Code is poetry." help="Code is poetry. Code is poetry. Code is poetry." onChange={handleChecked} />;
}`,...(W=(H=p.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};const L=["Default","Slow","Disabled","HelpText"];try{d.displayName="Default",d.__docgenInfo={description:"",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Default"]={docgenInfo:d.__docgenInfo,name:"Default",path:"../components/components/toggle-control/stories/index.stories.tsx#Default"})}catch(y){}try{n.displayName="Slow",n.__docgenInfo={description:"",displayName:"Slow",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Slow"]={docgenInfo:n.__docgenInfo,name:"Slow",path:"../components/components/toggle-control/stories/index.stories.tsx#Slow"})}catch(y){}try{a.displayName="Disabled",a.__docgenInfo={description:"",displayName:"Disabled",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Disabled"]={docgenInfo:a.__docgenInfo,name:"Disabled",path:"../components/components/toggle-control/stories/index.stories.tsx#Disabled"})}catch(y){}try{p.displayName="HelpText",p.__docgenInfo={description:"",displayName:"HelpText",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#HelpText"]={docgenInfo:p.__docgenInfo,name:"HelpText",path:"../components/components/toggle-control/stories/index.stories.tsx#HelpText"})}catch(y){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss":(w,u,e)=>{e.d(u,{Z:()=>s});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(o),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),g=e.n(_),r=g()(i());r.push([w.id,".oH070sCBKmmSCsJW4qCg .components-form-toggle{--wp-admin-theme-color: var( --jp-green-40 )}.oH070sCBKmmSCsJW4qCg .components-form-toggle__input:focus+.components-form-toggle__track{box-shadow:0 0 0 2px var(--jp-white),0 0 0 4px var(--jp-green-50)}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__track{width:48px;height:24px;border-radius:12px;border-width:2px}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__thumb{width:16px;height:16px;top:4px;left:4px}.oH070sCBKmmSCsJW4qCg .components-form-toggle.is-checked .components-form-toggle__thumb{transform:translateX(24px)}.oH070sCBKmmSCsJW4qCg.EX6n744Crf5bz8oOe02m .components-form-toggle{opacity:.6}",""]),r.locals={toggle:"oH070sCBKmmSCsJW4qCg","is-toggling":"EX6n744Crf5bz8oOe02m"};const s=r}}]);})();
