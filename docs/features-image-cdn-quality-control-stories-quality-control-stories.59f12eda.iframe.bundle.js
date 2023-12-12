"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3137],{"../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/stories/quality-control.stories.tsx":(x,r,s)=>{var S,h,E;s.r(r),s.d(r,{__namedExportsOrder:()=>I,_default:()=>t,default:()=>w});var c=s("../components/components/number-slider/index.tsx"),d=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),m=s.n(d),p=s("../../../node_modules/.pnpm/@wordpress+i18n@4.47.0/node_modules/@wordpress/i18n/build-module/index.js"),l=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=s.n(l),V=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.module.scss"),g={};g.insert="head",g.singleton=!1;var N=_()(V.Z,g);const a=V.Z.locals||{};var f=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const R=p.__,q=({label:e,config:o,maxValue:i,minValue:y=20,onChange:u})=>{const v=(0,f.useId)();return(0,n.jsxs)("div",{className:a["quality-control"],children:[(0,n.jsx)("div",{className:a.label,children:e}),(0,n.jsx)("div",{className:m()(a.slider,{[a.disabled]:o.lossless}),children:(0,n.jsx)(c.Z,{value:o.quality,minValue:y,maxValue:i,onChange:b=>u({...o,quality:b})})}),(0,n.jsxs)("label",{className:a.lossless,htmlFor:v,children:[(0,n.jsx)("input",{type:"checkbox",checked:o.lossless,id:v,onChange:b=>u({...o,lossless:b.target.checked})}),R("Lossless","jetpack-boost")]})]})};q.displayName="QualityControl";const C=q;try{qualitycontrol.displayName="qualitycontrol",qualitycontrol.__docgenInfo={description:"",displayName:"qualitycontrol",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"{ lossless?: boolean; quality?: number; }"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!0,type:{name:"number"}},minValue:{defaultValue:{value:"20"},description:"",name:"minValue",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newValue: { lossless?: boolean; quality?: number; }) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.tsx#qualitycontrol"]={docgenInfo:qualitycontrol.__docgenInfo,name:"qualitycontrol",path:"../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.tsx#qualitycontrol"})}catch(e){}var O=`import type { Meta } from '@storybook/react';
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
`,M={_default:{startLoc:{col:17,line:40},endLoc:{col:1,line:58},startBody:{col:17,line:40},endBody:{col:1,line:58}}};const T={parameters:{storySource:{source:`import type { Meta } from '@storybook/react';
import QualityControl from '../quality-control';
import React from 'react';
const meta: Meta<typeof QualityControl> = {
  title: 'Plugins/Boost/Image CDN/QualityControl',
  component: QualityControl,
  argTypes: {
    label: {
      control: 'text'
    },
    "config.lossless": {
      control: 'boolean'
    },
    "config.quality": {
      control: 'number'
    },
    maxValue: {
      control: 'number'
    },
    minValue: {
      number: 'number'
    }
  },
  decorators: [Story => <div style={{
    maxWidth: '600px',
    margin: '200px auto',
    fontSize: '16px'
  }}>
                <Story />
            </div>]
};
const defaultValues = {
  label: 'JPEG',
  "config.lossless": false,
  "config.quality": 75,
  maxValue: 80,
  minValue: 20
};
export default meta;
const Template = args => {
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
};
export const _default = Template.bind({});
_default.args = defaultValues;
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => {\\n  const [config, setConfig] = React.useState({\\n    lossless: args[\\"config.lossless\\"],\\n    quality: args[\\"config.quality\\"]\\n  });\\n  React.useEffect(() => {\\n    setConfig({\\n      lossless: args[\\"config.lossless\\"],\\n      quality: args[\\"config.quality\\"]\\n    });\\n  }, [args[\\"config.lossless\\"], args[\\"config.quality\\"]]);\\n  const props = {\\n    label: args.label,\\n    config,\\n    maxValue: args.maxValue,\\n    minValue: args.minValue\\n  };\\n  return <QualityControl {...props} onChange={newVal => setConfig(newVal)} />;\\n}",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:40},endLoc:{col:1,line:58},startBody:{col:17,line:40},endBody:{col:1,line:58}}}}},title:"Plugins/Boost/Image CDN/QualityControl",component:C,argTypes:{label:{control:"text"},"config.lossless":{control:"boolean"},"config.quality":{control:"number"},maxValue:{control:"number"},minValue:{number:"number"}},decorators:[e=>(0,n.jsx)("div",{style:{maxWidth:"600px",margin:"200px auto",fontSize:"16px"},children:(0,n.jsx)(e,{})})]},P={label:"JPEG","config.lossless":!1,"config.quality":75,maxValue:80,minValue:20},w=T,j=e=>{const[o,i]=f.useState({lossless:e["config.lossless"],quality:e["config.quality"]});f.useEffect(()=>{i({lossless:e["config.lossless"],quality:e["config.quality"]})},[e["config.lossless"],e["config.quality"]]);const y={label:e.label,config:o,maxValue:e.maxValue,minValue:e.minValue};return(0,n.jsx)(C,{...y,onChange:u=>i(u)})};j.displayName="Template";const t=j.bind({});t.args=P,t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
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
}`,...(E=(h=t.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const I=["_default"]},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.module.scss":(x,r,s)=>{s.d(r,{Z:()=>_});var c=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=s.n(c),m=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),p=s.n(m),l=p()(d());l.push([x.id,".skHPs2a8rLEzu399XlQb{display:flex;align-items:center;min-height:40px;margin-top:8px;gap:20px}.GuDwwHXl8ABNieRWxNRt{min-width:4rem}.abIPyZfa8Y3a0jR9mM9x{flex-shrink:0}.u5o8ZbblI7r7dNh8bgNi{width:100%}.z33KJTmJ5fZIHUrGeCqt{opacity:.3;filter:grayscale(1);pointer-events:none}@media screen and (max-width: 782px){.skHPs2a8rLEzu399XlQb{flex-direction:column;align-items:flex-start;gap:0;margin-bottom:30px}.GuDwwHXl8ABNieRWxNRt{margin:0;font-weight:500}}",""]),l.locals={"quality-control":"skHPs2a8rLEzu399XlQb",label:"GuDwwHXl8ABNieRWxNRt",lossless:"abIPyZfa8Y3a0jR9mM9x",slider:"u5o8ZbblI7r7dNh8bgNi",disabled:"z33KJTmJ5fZIHUrGeCqt"};const _=l}}]);})();
