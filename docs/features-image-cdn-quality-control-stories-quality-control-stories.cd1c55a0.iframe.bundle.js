"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3137],{"../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/stories/quality-control.stories.tsx":(x,r,t)=>{var h,S,E;t.r(r),t.d(r,{__namedExportsOrder:()=>N,_default:()=>o,default:()=>I});var c=t("../components/components/number-slider/index.tsx"),d=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),m=t.n(d),p=t("../../../node_modules/.pnpm/@wordpress+i18n@4.47.0/node_modules/@wordpress/i18n/build-module/index.js"),l=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=t.n(l),V=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.module.scss"),g={};g.insert="head",g.singleton=!1;var O=_()(V.Z,g);const a=V.Z.locals||{};var f=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const R=p.__,q=({label:s,config:n,maxValue:i,minValue:y=20,onChange:u})=>{const v=(0,f.useId)();return(0,e.jsxs)("div",{className:a["quality-control"],children:[(0,e.jsx)("div",{className:a.label,children:s}),(0,e.jsx)("div",{className:m()(a.slider,{[a.disabled]:n.lossless}),children:(0,e.jsx)(c.Z,{value:n.quality,minValue:y,maxValue:i,onChange:b=>u({...n,quality:b})})}),(0,e.jsxs)("label",{className:a.lossless,htmlFor:v,children:[(0,e.jsx)("input",{type:"checkbox",checked:n.lossless,id:v,onChange:b=>u({...n,lossless:b.target.checked})}),R("Lossless","jetpack-boost")]})]})};q.displayName="QualityControl";const C=q;try{qualitycontrol.displayName="qualitycontrol",qualitycontrol.__docgenInfo={description:"",displayName:"qualitycontrol",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"{ lossless?: boolean; quality?: number; }"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!0,type:{name:"number"}},minValue:{defaultValue:{value:"20"},description:"",name:"minValue",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newValue: { lossless?: boolean; quality?: number; }) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.tsx#qualitycontrol"]={docgenInfo:qualitycontrol.__docgenInfo,name:"qualitycontrol",path:"../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.tsx#qualitycontrol"})}catch(s){}var w=`import type { Meta } from '@storybook/react';
import QualityControl from '../quality-control';
import React from 'react';

const meta: Meta< typeof QualityControl > = {
	title: 'Plugins/Boost/Image CDN/QualityControl',
	component: QualityControl,
	argTypes: {
		label: {control: 'text'},
		"config.lossless": {control: 'boolean'},
		"config.quality": {control: 'number'},
		maxValue: {control: 'number'},
		minValue: {number: 'number'},
	},
	decorators: [
		Story => (
			<div style={ { maxWidth: '600px', margin: '200px auto', fontSize: '16px' } }>
				<Story />
			</div>
		),
	],
};

const defaultValues = {
	label: 'JPEG',
	"config.lossless": false,
	"config.quality": 75,
	maxValue: 80,
	minValue: 20,
};

export default meta;

const Template = args => {
	const [config, setConfig] = React.useState( {
		lossless: args["config.lossless"],
		quality: args["config.quality"],
	} );

	React.useEffect( () => {
		setConfig( {
			lossless: args["config.lossless"],
			quality: args["config.quality"],
		} );
	}, [args["config.lossless"], args["config.quality"]] );

	const props = {
		label: args.label,
		config,
		maxValue: args.maxValue,
		minValue: args.minValue,
	}
	return <QualityControl { ...props } onChange={(newVal) => setConfig(newVal)} />
};
export const _default = Template.bind( {} );
_default.args = defaultValues;
`,M={_default:{startLoc:{col:17,line:34},endLoc:{col:1,line:54},startBody:{col:17,line:34},endBody:{col:1,line:54}}};const T={parameters:{storySource:{source:`import type { Meta } from '@storybook/react';
import QualityControl from '../quality-control';
import React from 'react';

const meta: Meta< typeof QualityControl > = {
	title: 'Plugins/Boost/Image CDN/QualityControl',
	component: QualityControl,
	argTypes: {
		label: {control: 'text'},
		"config.lossless": {control: 'boolean'},
		"config.quality": {control: 'number'},
		maxValue: {control: 'number'},
		minValue: {number: 'number'},
	},
	decorators: [
		Story => (
			<div style={ { maxWidth: '600px', margin: '200px auto', fontSize: '16px' } }>
				<Story />
			</div>
		),
	],
};

const defaultValues = {
	label: 'JPEG',
	"config.lossless": false,
	"config.quality": 75,
	maxValue: 80,
	minValue: 20,
};

export default meta;

const Template = args => {
	const [config, setConfig] = React.useState( {
		lossless: args["config.lossless"],
		quality: args["config.quality"],
	} );

	React.useEffect( () => {
		setConfig( {
			lossless: args["config.lossless"],
			quality: args["config.quality"],
		} );
	}, [args["config.lossless"], args["config.quality"]] );

	const props = {
		label: args.label,
		config,
		maxValue: args.maxValue,
		minValue: args.minValue,
	}
	return <QualityControl { ...props } onChange={(newVal) => setConfig(newVal)} />
};
export const _default = Template.bind( {} );
_default.args = defaultValues;
`,locationsMap:{default:{startLoc:{col:17,line:34},endLoc:{col:1,line:54},startBody:{col:17,line:34},endBody:{col:1,line:54}}}}},title:"Plugins/Boost/Image CDN/QualityControl",component:C,argTypes:{label:{control:"text"},"config.lossless":{control:"boolean"},"config.quality":{control:"number"},maxValue:{control:"number"},minValue:{number:"number"}},decorators:[s=>(0,e.jsx)("div",{style:{maxWidth:"600px",margin:"200px auto",fontSize:"16px"},children:(0,e.jsx)(s,{})})]},P={label:"JPEG","config.lossless":!1,"config.quality":75,maxValue:80,minValue:20},I=T,j=s=>{const[n,i]=f.useState({lossless:s["config.lossless"],quality:s["config.quality"]});f.useEffect(()=>{i({lossless:s["config.lossless"],quality:s["config.quality"]})},[s["config.lossless"],s["config.quality"]]);const y={label:s.label,config:n,maxValue:s.maxValue,minValue:s.minValue};return(0,e.jsx)(C,{...y,onChange:u=>i(u)})};j.displayName="Template";const o=j.bind({});o.args=P,o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [config, setConfig] = React.useState({
    lossless: args["config.lossless"],
    quality: args["config.quality"]
  });
  React.useEffect(() => {
    setConfig({
      lossless: args["config.lossless"],
      quality: args["config.quality"]
    });
  }, [args["config.lossless"], args["config.quality"]]);
  const props = {
    label: args.label,
    config,
    maxValue: args.maxValue,
    minValue: args.minValue
  };
  return <QualityControl {...props} onChange={newVal => setConfig(newVal)} />;
}`,...(E=(S=o.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const N=["_default"]},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.module.scss":(x,r,t)=>{t.d(r,{Z:()=>_});var c=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=t.n(c),m=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),p=t.n(m),l=p()(d());l.push([x.id,".skHPs2a8rLEzu399XlQb{display:flex;align-items:center;min-height:40px;margin-top:8px;gap:20px}.GuDwwHXl8ABNieRWxNRt{min-width:4rem}.abIPyZfa8Y3a0jR9mM9x{flex-shrink:0}.u5o8ZbblI7r7dNh8bgNi{width:100%}.z33KJTmJ5fZIHUrGeCqt{opacity:.3;filter:grayscale(1);pointer-events:none}@media screen and (max-width: 782px){.skHPs2a8rLEzu399XlQb{flex-direction:column;align-items:flex-start;gap:0;margin-bottom:30px}.GuDwwHXl8ABNieRWxNRt{margin:0;font-weight:500}}",""]),l.locals={"quality-control":"skHPs2a8rLEzu399XlQb",label:"GuDwwHXl8ABNieRWxNRt",lossless:"abIPyZfa8Y3a0jR9mM9x",slider:"u5o8ZbblI7r7dNh8bgNi",disabled:"z33KJTmJ5fZIHUrGeCqt"};const _=l}}]);})();
