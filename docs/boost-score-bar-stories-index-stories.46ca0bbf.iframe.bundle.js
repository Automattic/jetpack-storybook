(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9845],{"../components/components/boost-score-bar/stories/index.stories.tsx":(p,d,e)=>{var u,f,_;"use strict";e.r(d),e.d(d,{__namedExportsOrder:()=>i,_default:()=>t,default:()=>o});var r=e("../components/components/boost-score-bar/index.tsx"),c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),S=`import BoostScoreBar from '../index';
import type { Meta } from '@storybook/react';

const meta: Meta< typeof BoostScoreBar > = {
	title: 'JS Packages/Components/Boost Score Bar',
	component: BoostScoreBar,
	argTypes: {
		score: { control: 'range', min: 0, max: 100, defaultValue: 80 },
		prevScore: { control: 'range', min: 0, max: 100 },
		isLoading: { control: 'boolean' },
		showPrevScores: { control: 'boolean' },
		active: { control: 'boolean' },
		scoreBarType: { control: 'radio', options: [ 'desktop', 'mobile' ] },
		noBoostScoreTooltip: { control: 'text' },
	},
	decorators: [
		Story => (
			<div style={ { width: '80%', maxWidth: '1320px', margin: '200px auto', fontSize: '16px' } }>
				<Story />
			</div>
		),
	],
};

const defaultValues = {
	score: 80,
	prevScore: 70,
	isLoading: false,
	showPrevScores: true,
	active: true,
	scoreBarType: 'desktop',
	noBoostScoreTooltip: 'No boost score',
};

export default meta;

const Template = args => <BoostScoreBar { ...args } />;
export const _default = Template.bind( {} );
_default.args = defaultValues;
`,s={_default:{startLoc:{col:17,line:37},endLoc:{col:54,line:37},startBody:{col:17,line:37},endBody:{col:54,line:37}}};const n={parameters:{storySource:{source:`import BoostScoreBar from '../index';
import type { Meta } from '@storybook/react';

const meta: Meta< typeof BoostScoreBar > = {
	title: 'JS Packages/Components/Boost Score Bar',
	component: BoostScoreBar,
	argTypes: {
		score: { control: 'range', min: 0, max: 100, defaultValue: 80 },
		prevScore: { control: 'range', min: 0, max: 100 },
		isLoading: { control: 'boolean' },
		showPrevScores: { control: 'boolean' },
		active: { control: 'boolean' },
		scoreBarType: { control: 'radio', options: [ 'desktop', 'mobile' ] },
		noBoostScoreTooltip: { control: 'text' },
	},
	decorators: [
		Story => (
			<div style={ { width: '80%', maxWidth: '1320px', margin: '200px auto', fontSize: '16px' } }>
				<Story />
			</div>
		),
	],
};

const defaultValues = {
	score: 80,
	prevScore: 70,
	isLoading: false,
	showPrevScores: true,
	active: true,
	scoreBarType: 'desktop',
	noBoostScoreTooltip: 'No boost score',
};

export default meta;

const Template = args => <BoostScoreBar { ...args } />;
export const _default = Template.bind( {} );
_default.args = defaultValues;
`,locationsMap:{default:{startLoc:{col:17,line:37},endLoc:{col:54,line:37},startBody:{col:17,line:37},endBody:{col:54,line:37}}}}},title:"JS Packages/Components/Boost Score Bar",component:r.Z,argTypes:{score:{control:"range",min:0,max:100,defaultValue:80},prevScore:{control:"range",min:0,max:100},isLoading:{control:"boolean"},showPrevScores:{control:"boolean"},active:{control:"boolean"},scoreBarType:{control:"radio",options:["desktop","mobile"]},noBoostScoreTooltip:{control:"text"}},decorators:[m=>(0,c.jsx)("div",{style:{width:"80%",maxWidth:"1320px",margin:"200px auto",fontSize:"16px"},children:(0,c.jsx)(m,{})})]},l={score:80,prevScore:70,isLoading:!1,showPrevScores:!0,active:!0,scoreBarType:"desktop",noBoostScoreTooltip:"No boost score"},o=n,a=m=>(0,c.jsx)(r.Z,{...m});a.displayName="Template";const t=a.bind({});t.args=l,t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"args => <BoostScoreBar {...args} />",...(_=(f=t.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};const i=["_default"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(p,d)=>{var e,r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var c={}.hasOwnProperty,S="[native code]";function s(){for(var n=[],l=0;l<arguments.length;l++){var o=arguments[l];if(o){var a=typeof o;if(a==="string"||a==="number")n.push(o);else if(Array.isArray(o)){if(o.length){var t=s.apply(null,o);t&&n.push(t)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var i in o)c.call(o,i)&&o[i]&&n.push(i)}}}return n.join(" ")}p.exports?(s.default=s,p.exports=s):(e=[],r=function(){return s}.apply(d,e),r!==void 0&&(p.exports=r))})()}}]);})();
