(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1889],{"../components/components/boost-score-graph/stories/index.stories.tsx":(h,c,l)=>{"use strict";l.r(c),l.d(c,{__namedExportsOrder:()=>r,_default:()=>n,default:()=>s});var d=l("../components/components/boost-score-graph/index.tsx"),p=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),C=`import { BoostScoreGraph } from '../index.tsx';
import type { Meta } from '@storybook/react';

const exampleRawResponse = {
	data: {
		_meta: {
			start: 1689772803000,
			end: 1690647000000,
		},
		periods: [
			{
				timestamp: 1690636803000,
				dimensions: {
					desktop_overall_score: 86,
					mobile_overall_score: 52,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1689772803000,
				dimensions: {
					desktop_overall_score: 75,
					mobile_overall_score: 52,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1689859203000,
				dimensions: {
					desktop_overall_score: 72,
					mobile_overall_score: 49,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1689945603000,
				dimensions: {
					desktop_overall_score: 20,
					mobile_overall_score: 30,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690032003000,
				dimensions: {
					desktop_overall_score: 72,
					mobile_overall_score: 40,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690118403000,
				dimensions: {
					desktop_overall_score: 55,
					mobile_overall_score: 45,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690204803000,
				dimensions: {
					desktop_overall_score: 75,
					mobile_overall_score: 52,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690291203000,
				dimensions: {
					desktop_overall_score: 70,
					mobile_overall_score: 50,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690377603000,
				dimensions: {
					desktop_overall_score: 75,
					mobile_overall_score: 90,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690464003000,
				dimensions: {
					desktop_overall_score: 80,
					mobile_overall_score: 60,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690550403000,
				dimensions: {
					desktop_overall_score: 85,
					mobile_overall_score: 60,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
		],
	},
};

const meta: Meta< typeof BoostScoreGraph > = {
	title: 'JS Packages/Components/Boost Score Graph',
	component: BoostScoreGraph,
	argTypes: {
		startDate: { control: 'date' },
		endDate: { control: 'date' },
		title: { control: 'string', defaultValue: 'Title' },
		isPlaceholder: { control: 'boolean', defaultValue: false },
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
	startDate: exampleRawResponse.data._meta.start,
	endDate: exampleRawResponse.data._meta.end,
	periods: exampleRawResponse.data.periods,
	isPlaceholder: false,
};

export default meta;

const Template = args => <BoostScoreGraph { ...args } />;
export const _default = Template.bind( {} );
_default.args = defaultValues;
`,t={_default:{startLoc:{col:17,line:180},endLoc:{col:2,line:182},startBody:{col:17,line:180},endBody:{col:2,line:182}}};const m={data:{_meta:{start:1689772803e3,end:1690647e6},periods:[{timestamp:1690636803e3,dimensions:{desktop_overall_score:86,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689772803e3,dimensions:{desktop_overall_score:75,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689859203e3,dimensions:{desktop_overall_score:72,mobile_overall_score:49,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689945603e3,dimensions:{desktop_overall_score:20,mobile_overall_score:30,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690032003e3,dimensions:{desktop_overall_score:72,mobile_overall_score:40,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690118403e3,dimensions:{desktop_overall_score:55,mobile_overall_score:45,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690204803e3,dimensions:{desktop_overall_score:75,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690291203e3,dimensions:{desktop_overall_score:70,mobile_overall_score:50,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690377603e3,dimensions:{desktop_overall_score:75,mobile_overall_score:90,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690464003e3,dimensions:{desktop_overall_score:80,mobile_overall_score:60,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690550403e3,dimensions:{desktop_overall_score:85,mobile_overall_score:60,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}}]}},_={parameters:{storySource:{source:`import { BoostScoreGraph } from '../index.tsx';
import { jsx as _jsx } from "react/jsx-runtime";
const exampleRawResponse = {
  data: {
    _meta: {
      start: 1689772803000,
      end: 1690647000000
    },
    periods: [{
      timestamp: 1690636803000,
      dimensions: {
        desktop_overall_score: 86,
        mobile_overall_score: 52,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1689772803000,
      dimensions: {
        desktop_overall_score: 75,
        mobile_overall_score: 52,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1689859203000,
      dimensions: {
        desktop_overall_score: 72,
        mobile_overall_score: 49,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1689945603000,
      dimensions: {
        desktop_overall_score: 20,
        mobile_overall_score: 30,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690032003000,
      dimensions: {
        desktop_overall_score: 72,
        mobile_overall_score: 40,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690118403000,
      dimensions: {
        desktop_overall_score: 55,
        mobile_overall_score: 45,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690204803000,
      dimensions: {
        desktop_overall_score: 75,
        mobile_overall_score: 52,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690291203000,
      dimensions: {
        desktop_overall_score: 70,
        mobile_overall_score: 50,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690377603000,
      dimensions: {
        desktop_overall_score: 75,
        mobile_overall_score: 90,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690464003000,
      dimensions: {
        desktop_overall_score: 80,
        mobile_overall_score: 60,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690550403000,
      dimensions: {
        desktop_overall_score: 85,
        mobile_overall_score: 60,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }]
  }
};
const meta = {
  title: 'JS Packages/Components/Boost Score Graph',
  component: BoostScoreGraph,
  argTypes: {
    startDate: {
      control: 'date'
    },
    endDate: {
      control: 'date'
    },
    title: {
      control: 'string',
      defaultValue: 'Title'
    },
    isPlaceholder: {
      control: 'boolean',
      defaultValue: false
    }
  },
  decorators: [Story => /*#__PURE__*/_jsx("div", {
    style: {
      width: '80%',
      maxWidth: '1320px',
      margin: '200px auto',
      fontSize: '16px'
    },
    children: /*#__PURE__*/_jsx(Story, {})
  })]
};
const defaultValues = {
  startDate: exampleRawResponse.data._meta.start,
  endDate: exampleRawResponse.data._meta.end,
  periods: exampleRawResponse.data.periods,
  isPlaceholder: false
};
export default meta;
const Template = args => /*#__PURE__*/_jsx(BoostScoreGraph, {
  ...args
});
export const _default = Template.bind({});
_default.args = defaultValues;`,locationsMap:{default:{startLoc:{col:17,line:180},endLoc:{col:2,line:182},startBody:{col:17,line:180},endBody:{col:2,line:182}}}}},title:"JS Packages/Components/Boost Score Graph",component:d.W,argTypes:{startDate:{control:"date"},endDate:{control:"date"},title:{control:"string",defaultValue:"Title"},isPlaceholder:{control:"boolean",defaultValue:!1}},decorators:[a=>(0,p.jsx)("div",{style:{width:"80%",maxWidth:"1320px",margin:"200px auto",fontSize:"16px"},children:(0,p.jsx)(a,{})})]},i={startDate:m.data._meta.start,endDate:m.data._meta.end,periods:m.data.periods,isPlaceholder:!1},s=_,n=(a=>(0,p.jsx)(d.W,{...a})).bind({});n.args=i;const r=["_default"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <BoostScoreGraph {...args} />",...n.parameters?.docs?.source}}}},"../components/components/text/constants.ts":(h,c,l)=>{"use strict";l.d(c,{Q:()=>d,Z:()=>p});const d={"headline-medium":"h1","headline-small":"h2","headline-small-regular":"h2","title-medium":"h3","title-medium-semi-bold":"h3","title-small":"h4",body:"p","body-small":"p","body-extra-small":"p","body-extra-small-bold":"p",label:"p"},p=["mt","mr","mb","ml","mx","my","m","pt","pr","pb","pl","px","py","p"]},"../components/components/text/index.tsx":(h,c,l)=>{"use strict";l.d(c,{H2:()=>o,H3:()=>g,hE:()=>v,Ay:()=>a});var d=l("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),p=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),C=l("../components/components/text/constants.ts"),t=l("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=l.n(t),_=l("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/style.module.scss"),i={};i.insert="head",i.singleton=!1;var s=m()(_.A,i);const e=_.A.locals||{};var n=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,p.forwardRef)(({variant:f="body",children:u,component:b,className:x,...k},F)=>{const y=b||C.Q[f]||"span",j=(0,p.useMemo)(()=>C.Z.reduce((w,S)=>(typeof k[S]<"u"&&(w+=e[`${S}-${k[S]}`]+" ",delete k[S]),w),""),[k]);return(0,n.jsx)(y,{className:(0,d.A)(e.reset,e[f],x,j),...k,ref:F,children:u})});r.displayName="Text";const a=r,o=({children:f,...u})=>(0,n.jsx)(r,{variant:"headline-medium",mb:3,...u,children:f}),g=({children:f,weight:u="bold",...b})=>{const x=`headline-small${u==="bold"?"":`-${u}`}`;return(0,n.jsx)(r,{variant:x,mb:3,...b,children:f})},v=({children:f,size:u="medium",...b})=>(0,n.jsx)(r,{variant:`title-${u}`,mb:1,...b,children:f});try{r.displayName="Text",r.__docgenInfo={description:"Text component.",displayName:"Text",props:{variant:{defaultValue:{value:"body"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"headline-medium"'},{value:'"headline-small"'},{value:'"headline-small-regular"'},{value:'"title-medium"'},{value:'"title-medium-semi-bold"'},{value:'"title-small"'},{value:'"body"'},{value:'"body-small"'},{value:'"body-extra-small"'},{value:'"body-extra-small-bold"'}]}},m:{defaultValue:null,description:"margin",name:"m",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mx:{defaultValue:null,description:"margin left and right",name:"mx",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},my:{defaultValue:null,description:"margin top and bottom",name:"my",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},p:{defaultValue:null,description:"padding",name:"p",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},px:{defaultValue:null,description:"padding left and right",name:"px",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},py:{defaultValue:null,description:"padding top and bottom",name:"py",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},className:{defaultValue:null,description:"HTML Class",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The text itself that will be rendered.",name:"children",required:!0,type:{name:"React.ReactNode"}},component:{defaultValue:null,description:"Force an specific tag (span, div) or use a custom component that will receive className and children",name:"component",required:!1,type:{name:"any"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"React.CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/text/index.tsx#Text"]={docgenInfo:r.__docgenInfo,name:"Text",path:"../components/components/text/index.tsx#Text"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(h,c,l)=>{"use strict";l.d(c,{A:()=>C});function d(t){var m,_,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(m=0;m<s;m++)t[m]&&(_=d(t[m]))&&(i&&(i+=" "),i+=_)}else for(_ in t)t[_]&&(i&&(i+=" "),i+=_);return i}function p(){for(var t,m,_=0,i="",s=arguments.length;_<s;_++)(t=arguments[_])&&(m=d(t))&&(i&&(i+=" "),i+=m);return i}const C=p},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/style.module.scss":(h,c,l)=>{"use strict";l.d(c,{A:()=>_});var d=l("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=l.n(d),C=l("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),t=l.n(C),m=t()(p());m.push([h.id,".RrzweonX2G7Xgr67dB2H{margin:0;padding:0}.av7S3fABXl9CoVWrHPjL{font-size:var(--font-headline-medium);font-weight:700;line-height:52px}.t3rLny7uLhJOSMunxpri{font-size:var(--font-headline-small);font-weight:700;line-height:40px}.r6XNQ24b67NmqoEJa0lQ{font-size:var(--font-headline-small);font-weight:400;line-height:40px}._z5QeCm2YqrB6LQuKGzB{font-size:var(--font-title-medium);font-weight:500;line-height:32px}.ONKKcjx9_v0Hit4VYhAX{font-size:var(--font-title-medium);font-weight:600;line-height:32px}.rSf1cEKjnUk9fZzArg9M{font-size:var(--font-title-small);font-weight:500;line-height:30px}.PrqOcNprgQSxXct7z27X{font-size:var(--font-body);font-weight:400;line-height:24px}.reEdfI392I8pwrbqXv82{font-size:var(--font-body-small);font-weight:400;line-height:24px}.txcHzaPOi_L3vUIa69H3{font-size:var(--font-body-extra-small);font-weight:400;line-height:20px}.cg3VIT3kJEpd9U45dKm5{font-size:var(--font-body-extra-small);font-weight:700;line-height:20px}.Bw8becNhHzVhe3yqezjL{font-size:var(--font-body-extra-small);font-weight:600;line-height:16px}.KtSlVYit4NJIwd565Qzg{margin:calc(var(--spacing-base)*0)}.aUs7ArcBzNiB4euVIPTK{margin-left:calc(var(--spacing-base)*0);margin-right:calc(var(--spacing-base)*0)}.EOfR5OK0_KUMT0pd6aDN{margin-top:calc(var(--spacing-base)*0);margin-bottom:calc(var(--spacing-base)*0)}.JeSGTmPMnRpmohOX9Npf{margin-top:calc(var(--spacing-base)*0)}.S1HHjkvB0iy8qv4OGPEW{margin-right:calc(var(--spacing-base)*0)}.fXqoWImN0WREEK6YKuGZ{margin-bottom:calc(var(--spacing-base)*0)}.ieYWuvAUQ_4pV7KvhzSN{margin-left:calc(var(--spacing-base)*0)}.sqQsDZYMWHIwDKpD8LFC{margin:calc(var(--spacing-base)*1)}.Yvy9o3eLo3GxvhsHfq8C{margin-left:calc(var(--spacing-base)*1);margin-right:calc(var(--spacing-base)*1)}.oJKoXlegFbtsZINB91MQ{margin-top:calc(var(--spacing-base)*1);margin-bottom:calc(var(--spacing-base)*1)}.rXIpDpEaaVdHeBz_mkbe{margin-top:calc(var(--spacing-base)*1)}.lPN_TVpVEICijBDrSmwI{margin-right:calc(var(--spacing-base)*1)}.XSkf4XziN27wLUFD_JK6{margin-bottom:calc(var(--spacing-base)*1)}.g02KQ8mVXHihkGrBHwdK{margin-left:calc(var(--spacing-base)*1)}.vNHGjQ81_FQwODlxcam_{margin:calc(var(--spacing-base)*2)}.eCbYNPqDgnjzDDx_u0tV{margin-left:calc(var(--spacing-base)*2);margin-right:calc(var(--spacing-base)*2)}.AGOCRIlKxTyIhfwntq25{margin-top:calc(var(--spacing-base)*2);margin-bottom:calc(var(--spacing-base)*2)}.UP2CFZlJ3uXPgHNT0ttT{margin-top:calc(var(--spacing-base)*2)}._sI07ga4QjbLdnDuTiqn{margin-right:calc(var(--spacing-base)*2)}.zsNeo9TBTmbLmxU_UmFt{margin-bottom:calc(var(--spacing-base)*2)}.qz6atbgCBwbKrnzp87cD{margin-left:calc(var(--spacing-base)*2)}.QeqcrOkvlqdZ7qvasKy9{margin:calc(var(--spacing-base)*3)}.UFjKZbayXJCB31O3zEDh{margin-left:calc(var(--spacing-base)*3);margin-right:calc(var(--spacing-base)*3)}.VWRO00hQe9DW7_iiVaBX{margin-top:calc(var(--spacing-base)*3);margin-bottom:calc(var(--spacing-base)*3)}.B11Ckb7tgobGC99dejdM{margin-top:calc(var(--spacing-base)*3)}.xxsR1rRr0z78d7I5lMVU{margin-right:calc(var(--spacing-base)*3)}.Jrt_3UgTJD8t3rWpQS3f{margin-bottom:calc(var(--spacing-base)*3)}.owqamFzTmmRS1Q0KfD9W{margin-left:calc(var(--spacing-base)*3)}.IyGCprtNvuxObBSI5oT5{margin:calc(var(--spacing-base)*4)}.elxhFCA2BZljv4Hokiz_{margin-left:calc(var(--spacing-base)*4);margin-right:calc(var(--spacing-base)*4)}.P1uJlf6jKIsPjzjRIjAA{margin-top:calc(var(--spacing-base)*4);margin-bottom:calc(var(--spacing-base)*4)}.Cwh3dErySZNkeTWFcxQR{margin-top:calc(var(--spacing-base)*4)}.K4TPpwlDR4XN6jGGu3tX{margin-right:calc(var(--spacing-base)*4)}.WyDfNrZEf3qW5J8oJQwW{margin-bottom:calc(var(--spacing-base)*4)}.cY28cCO9jFYi8AI7R8Iw{margin-left:calc(var(--spacing-base)*4)}.axKn0VTG612HDdTHI801{margin:calc(var(--spacing-base)*5)}.e4iwkmdIy8kSCYhbHMWQ{margin-left:calc(var(--spacing-base)*5);margin-right:calc(var(--spacing-base)*5)}.wNJaWMyj_SAMP21dF8Vy{margin-top:calc(var(--spacing-base)*5);margin-bottom:calc(var(--spacing-base)*5)}.b8L4nRx32z0rRNq5jxgP{margin-top:calc(var(--spacing-base)*5)}.AG11aODBbNpOGgevPI0d{margin-right:calc(var(--spacing-base)*5)}.iLxrEvLX4W4hUzFMjjIJ{margin-bottom:calc(var(--spacing-base)*5)}.rE2_cT9JHqwPBCPHPThF{margin-left:calc(var(--spacing-base)*5)}.Lm7DSlf5up6ITW6oe8yP{margin:calc(var(--spacing-base)*6)}.MZjZnL5dptXcLbx6irfw{margin-left:calc(var(--spacing-base)*6);margin-right:calc(var(--spacing-base)*6)}.o0oNshF__Yhyg8nSbtnQ{margin-top:calc(var(--spacing-base)*6);margin-bottom:calc(var(--spacing-base)*6)}.pfhkL_xzHiIULKu0eat7{margin-top:calc(var(--spacing-base)*6)}.SFxSvCIATFKc4V6ZXmcw{margin-right:calc(var(--spacing-base)*6)}.xNoZqjzsdSHX9wYUijC1{margin-bottom:calc(var(--spacing-base)*6)}.omqHIrUIi6WW5esUkSDu{margin-left:calc(var(--spacing-base)*6)}.EZxV3cAsqMP8a_mK6knS{margin:calc(var(--spacing-base)*7)}.maXQFvYunKxF_3_1Yzsh{margin-left:calc(var(--spacing-base)*7);margin-right:calc(var(--spacing-base)*7)}.Jm_nqQd5GtB2gRAzUkWn{margin-top:calc(var(--spacing-base)*7);margin-bottom:calc(var(--spacing-base)*7)}.gjkoRO29zlJJIYIeDfCm{margin-top:calc(var(--spacing-base)*7)}.pyVbQKU0x4VqSMSztx6q{margin-right:calc(var(--spacing-base)*7)}.otQxYwZnNwK3TuWHJJtZ{margin-bottom:calc(var(--spacing-base)*7)}.fCM1YnJkLSgaqcuKUFdp{margin-left:calc(var(--spacing-base)*7)}.yhF3QcdZzazqyWj9eCPg{margin:calc(var(--spacing-base)*8)}.W2JaDt6uLbI1Ut58MQ7m{margin-left:calc(var(--spacing-base)*8);margin-right:calc(var(--spacing-base)*8)}.baNwfUF5zVGKIckyZndZ{margin-top:calc(var(--spacing-base)*8);margin-bottom:calc(var(--spacing-base)*8)}.WQpKe8tM5OGVEivODxQ1{margin-top:calc(var(--spacing-base)*8)}.EljH3FntmSMQ7T0FzSnd{margin-right:calc(var(--spacing-base)*8)}.vaAHzi3Pt_NaTrRShQNy{margin-bottom:calc(var(--spacing-base)*8)}.ONNuwgfEFq6AaLlnb3Bk{margin-left:calc(var(--spacing-base)*8)}.I3WPh9a0bFA3PCza0C1F{padding:calc(var(--spacing-base)*0)}.Bo9Th3HSzIz9MLvIKDV7{padding-left:calc(var(--spacing-base)*0);padding-right:calc(var(--spacing-base)*0)}.xD4akgkVexKQIu7xTYC7{padding-top:calc(var(--spacing-base)*0);padding-bottom:calc(var(--spacing-base)*0)}.Tw6X2IsjKjG3T5S4xBsa{padding-top:calc(var(--spacing-base)*0)}.usxfjK4i6t5EPUUNbV3q{padding-right:calc(var(--spacing-base)*0)}.ap02YMlFojEdEv9R57_E{padding-bottom:calc(var(--spacing-base)*0)}.SUXaq43ZvVBO_WKzRNnC{padding-left:calc(var(--spacing-base)*0)}.y0X9Cpzkl1tsVC44OgVy{padding:calc(var(--spacing-base)*1)}.xEKaQY2mcBMbLAt90iRS{padding-left:calc(var(--spacing-base)*1);padding-right:calc(var(--spacing-base)*1)}.D5pYSMCA0UQInMwqOLOF{padding-top:calc(var(--spacing-base)*1);padding-bottom:calc(var(--spacing-base)*1)}.gfLuMcAWQ8ulRu7bvGq3{padding-top:calc(var(--spacing-base)*1)}.TWeDgz3pbqiqcnSzBnX1{padding-right:calc(var(--spacing-base)*1)}.shE8AEYtQUB8dRgalaVl{padding-bottom:calc(var(--spacing-base)*1)}.bUffO4T34apuVB_CQWy9{padding-left:calc(var(--spacing-base)*1)}.Cup6JdrTVTKRjNQ3YQy4{padding:calc(var(--spacing-base)*2)}.CZtcrsJRw1zM5QJNqVJS{padding-left:calc(var(--spacing-base)*2);padding-right:calc(var(--spacing-base)*2)}.PwifseBVfKsExlizrKDX{padding-top:calc(var(--spacing-base)*2);padding-bottom:calc(var(--spacing-base)*2)}.ooLjq9obWd_LjRGbSVGz{padding-top:calc(var(--spacing-base)*2)}.wSqNFThiG5mtyulgUvZ6{padding-right:calc(var(--spacing-base)*2)}.AOhaHk0PiH5umTWyv36v{padding-bottom:calc(var(--spacing-base)*2)}.MeStfh47gVnPo_pqSAYV{padding-left:calc(var(--spacing-base)*2)}.J79brrXnEwGxt6X_Rk0Z{padding:calc(var(--spacing-base)*3)}.mROh4kIYt9Gvhm4T7PKg{padding-left:calc(var(--spacing-base)*3);padding-right:calc(var(--spacing-base)*3)}.t2wrXZ0zLXAn9EgCYACM{padding-top:calc(var(--spacing-base)*3);padding-bottom:calc(var(--spacing-base)*3)}.e7RiWMsE_HhIlFw4Yv2Y{padding-top:calc(var(--spacing-base)*3)}.NYxlgrdKW7sY7B3SuLwa{padding-right:calc(var(--spacing-base)*3)}.BE62UwefMAFTIBFc1JN8{padding-bottom:calc(var(--spacing-base)*3)}.VFVSDdrTf9CGiUy9ta9y{padding-left:calc(var(--spacing-base)*3)}.ghar1wB2KsSxjDoUiOgG{padding:calc(var(--spacing-base)*4)}.CSi0SCb6JLLqwTBL5Ylu{padding-left:calc(var(--spacing-base)*4);padding-right:calc(var(--spacing-base)*4)}.DfA_LcGEJeKpZi9kManY{padding-top:calc(var(--spacing-base)*4);padding-bottom:calc(var(--spacing-base)*4)}.eqW8DcYjteitYdAgSGkK{padding-top:calc(var(--spacing-base)*4)}.BGwGSL2mmcz8bT8fZItP{padding-right:calc(var(--spacing-base)*4)}.cmgQUmff6dIDwSw_a_Es{padding-bottom:calc(var(--spacing-base)*4)}.K8xtpoyEIcE8Q8YCIGMS{padding-left:calc(var(--spacing-base)*4)}.qtkC6gWHpKnGY5sBEi9E{padding:calc(var(--spacing-base)*5)}.JTMzBZpZgam2U62HNS8s{padding-left:calc(var(--spacing-base)*5);padding-right:calc(var(--spacing-base)*5)}.Cp_Fd0Z5TtjMec59KWwu{padding-top:calc(var(--spacing-base)*5);padding-bottom:calc(var(--spacing-base)*5)}.ymcu2EIOq8UyFZELyRUb{padding-top:calc(var(--spacing-base)*5)}.A1Bq8uVtJzPMKKlsUgDm{padding-right:calc(var(--spacing-base)*5)}.XtPNiAInSOXJOWVh1Neg{padding-bottom:calc(var(--spacing-base)*5)}.ROmQmrnKBqi1ZNLNpqu1{padding-left:calc(var(--spacing-base)*5)}.Bs5EOenRfSq6Zfq0225P{padding:calc(var(--spacing-base)*6)}.MYMFPJRAGT6AKVlqqFh4{padding-left:calc(var(--spacing-base)*6);padding-right:calc(var(--spacing-base)*6)}.OZSrMLOxtms9uR40hqhx{padding-top:calc(var(--spacing-base)*6);padding-bottom:calc(var(--spacing-base)*6)}.njSj0AdfU0M_G18uE0ta{padding-top:calc(var(--spacing-base)*6)}.rYh75XoApE5pxN5IfghY{padding-right:calc(var(--spacing-base)*6)}.xXiRrDOVsZcgIZeHmGvn{padding-bottom:calc(var(--spacing-base)*6)}.lBgCzyZ05muXTdr_kEHL{padding-left:calc(var(--spacing-base)*6)}.Ut8YyAx2wBXXaek0xDWC{padding:calc(var(--spacing-base)*7)}.g94Hel7jdvdHJs0OmwWE{padding-left:calc(var(--spacing-base)*7);padding-right:calc(var(--spacing-base)*7)}.NR6BVawqapDUHtIP_BRR{padding-top:calc(var(--spacing-base)*7);padding-bottom:calc(var(--spacing-base)*7)}.flkSMPhHGhhYbjdG9kL6{padding-top:calc(var(--spacing-base)*7)}.Zkj3ld5CHgvwyi1TX_Kx{padding-right:calc(var(--spacing-base)*7)}.mG1OofDziqxkGWs4Dwfj{padding-bottom:calc(var(--spacing-base)*7)}.RnHH4tdWZks0U09QOvVw{padding-left:calc(var(--spacing-base)*7)}.J9k6rYXEzr2GcjLCSS13{padding:calc(var(--spacing-base)*8)}.N6xgcFlDJONPVWi4kO8P{padding-left:calc(var(--spacing-base)*8);padding-right:calc(var(--spacing-base)*8)}.LgvunnunY9N2x3GxYqgV{padding-top:calc(var(--spacing-base)*8);padding-bottom:calc(var(--spacing-base)*8)}.IsAIVnNwJ5YpVNcWLRKP{padding-top:calc(var(--spacing-base)*8)}.wtmkrcvFCBUp_RrzLyQN{padding-right:calc(var(--spacing-base)*8)}.NqV_vnVYi8xr7f89jXRP{padding-bottom:calc(var(--spacing-base)*8)}.RL2ZRBRjgmkR1DtAVGJp{padding-left:calc(var(--spacing-base)*8)}",""]),m.locals={reset:"RrzweonX2G7Xgr67dB2H","headline-medium":"av7S3fABXl9CoVWrHPjL","headline-small":"t3rLny7uLhJOSMunxpri","headline-small-regular":"r6XNQ24b67NmqoEJa0lQ","title-medium":"_z5QeCm2YqrB6LQuKGzB","title-medium-semi-bold":"ONKKcjx9_v0Hit4VYhAX","title-small":"rSf1cEKjnUk9fZzArg9M",body:"PrqOcNprgQSxXct7z27X","body-small":"reEdfI392I8pwrbqXv82","body-extra-small":"txcHzaPOi_L3vUIa69H3","body-extra-small-bold":"cg3VIT3kJEpd9U45dKm5",label:"Bw8becNhHzVhe3yqezjL","m-0":"KtSlVYit4NJIwd565Qzg","mx-0":"aUs7ArcBzNiB4euVIPTK","my-0":"EOfR5OK0_KUMT0pd6aDN","mt-0":"JeSGTmPMnRpmohOX9Npf","mr-0":"S1HHjkvB0iy8qv4OGPEW","mb-0":"fXqoWImN0WREEK6YKuGZ","ml-0":"ieYWuvAUQ_4pV7KvhzSN","m-1":"sqQsDZYMWHIwDKpD8LFC","mx-1":"Yvy9o3eLo3GxvhsHfq8C","my-1":"oJKoXlegFbtsZINB91MQ","mt-1":"rXIpDpEaaVdHeBz_mkbe","mr-1":"lPN_TVpVEICijBDrSmwI","mb-1":"XSkf4XziN27wLUFD_JK6","ml-1":"g02KQ8mVXHihkGrBHwdK","m-2":"vNHGjQ81_FQwODlxcam_","mx-2":"eCbYNPqDgnjzDDx_u0tV","my-2":"AGOCRIlKxTyIhfwntq25","mt-2":"UP2CFZlJ3uXPgHNT0ttT","mr-2":"_sI07ga4QjbLdnDuTiqn","mb-2":"zsNeo9TBTmbLmxU_UmFt","ml-2":"qz6atbgCBwbKrnzp87cD","m-3":"QeqcrOkvlqdZ7qvasKy9","mx-3":"UFjKZbayXJCB31O3zEDh","my-3":"VWRO00hQe9DW7_iiVaBX","mt-3":"B11Ckb7tgobGC99dejdM","mr-3":"xxsR1rRr0z78d7I5lMVU","mb-3":"Jrt_3UgTJD8t3rWpQS3f","ml-3":"owqamFzTmmRS1Q0KfD9W","m-4":"IyGCprtNvuxObBSI5oT5","mx-4":"elxhFCA2BZljv4Hokiz_","my-4":"P1uJlf6jKIsPjzjRIjAA","mt-4":"Cwh3dErySZNkeTWFcxQR","mr-4":"K4TPpwlDR4XN6jGGu3tX","mb-4":"WyDfNrZEf3qW5J8oJQwW","ml-4":"cY28cCO9jFYi8AI7R8Iw","m-5":"axKn0VTG612HDdTHI801","mx-5":"e4iwkmdIy8kSCYhbHMWQ","my-5":"wNJaWMyj_SAMP21dF8Vy","mt-5":"b8L4nRx32z0rRNq5jxgP","mr-5":"AG11aODBbNpOGgevPI0d","mb-5":"iLxrEvLX4W4hUzFMjjIJ","ml-5":"rE2_cT9JHqwPBCPHPThF","m-6":"Lm7DSlf5up6ITW6oe8yP","mx-6":"MZjZnL5dptXcLbx6irfw","my-6":"o0oNshF__Yhyg8nSbtnQ","mt-6":"pfhkL_xzHiIULKu0eat7","mr-6":"SFxSvCIATFKc4V6ZXmcw","mb-6":"xNoZqjzsdSHX9wYUijC1","ml-6":"omqHIrUIi6WW5esUkSDu","m-7":"EZxV3cAsqMP8a_mK6knS","mx-7":"maXQFvYunKxF_3_1Yzsh","my-7":"Jm_nqQd5GtB2gRAzUkWn","mt-7":"gjkoRO29zlJJIYIeDfCm","mr-7":"pyVbQKU0x4VqSMSztx6q","mb-7":"otQxYwZnNwK3TuWHJJtZ","ml-7":"fCM1YnJkLSgaqcuKUFdp","m-8":"yhF3QcdZzazqyWj9eCPg","mx-8":"W2JaDt6uLbI1Ut58MQ7m","my-8":"baNwfUF5zVGKIckyZndZ","mt-8":"WQpKe8tM5OGVEivODxQ1","mr-8":"EljH3FntmSMQ7T0FzSnd","mb-8":"vaAHzi3Pt_NaTrRShQNy","ml-8":"ONNuwgfEFq6AaLlnb3Bk","p-0":"I3WPh9a0bFA3PCza0C1F","px-0":"Bo9Th3HSzIz9MLvIKDV7","py-0":"xD4akgkVexKQIu7xTYC7","pt-0":"Tw6X2IsjKjG3T5S4xBsa","pr-0":"usxfjK4i6t5EPUUNbV3q","pb-0":"ap02YMlFojEdEv9R57_E","pl-0":"SUXaq43ZvVBO_WKzRNnC","p-1":"y0X9Cpzkl1tsVC44OgVy","px-1":"xEKaQY2mcBMbLAt90iRS","py-1":"D5pYSMCA0UQInMwqOLOF","pt-1":"gfLuMcAWQ8ulRu7bvGq3","pr-1":"TWeDgz3pbqiqcnSzBnX1","pb-1":"shE8AEYtQUB8dRgalaVl","pl-1":"bUffO4T34apuVB_CQWy9","p-2":"Cup6JdrTVTKRjNQ3YQy4","px-2":"CZtcrsJRw1zM5QJNqVJS","py-2":"PwifseBVfKsExlizrKDX","pt-2":"ooLjq9obWd_LjRGbSVGz","pr-2":"wSqNFThiG5mtyulgUvZ6","pb-2":"AOhaHk0PiH5umTWyv36v","pl-2":"MeStfh47gVnPo_pqSAYV","p-3":"J79brrXnEwGxt6X_Rk0Z","px-3":"mROh4kIYt9Gvhm4T7PKg","py-3":"t2wrXZ0zLXAn9EgCYACM","pt-3":"e7RiWMsE_HhIlFw4Yv2Y","pr-3":"NYxlgrdKW7sY7B3SuLwa","pb-3":"BE62UwefMAFTIBFc1JN8","pl-3":"VFVSDdrTf9CGiUy9ta9y","p-4":"ghar1wB2KsSxjDoUiOgG","px-4":"CSi0SCb6JLLqwTBL5Ylu","py-4":"DfA_LcGEJeKpZi9kManY","pt-4":"eqW8DcYjteitYdAgSGkK","pr-4":"BGwGSL2mmcz8bT8fZItP","pb-4":"cmgQUmff6dIDwSw_a_Es","pl-4":"K8xtpoyEIcE8Q8YCIGMS","p-5":"qtkC6gWHpKnGY5sBEi9E","px-5":"JTMzBZpZgam2U62HNS8s","py-5":"Cp_Fd0Z5TtjMec59KWwu","pt-5":"ymcu2EIOq8UyFZELyRUb","pr-5":"A1Bq8uVtJzPMKKlsUgDm","pb-5":"XtPNiAInSOXJOWVh1Neg","pl-5":"ROmQmrnKBqi1ZNLNpqu1","p-6":"Bs5EOenRfSq6Zfq0225P","px-6":"MYMFPJRAGT6AKVlqqFh4","py-6":"OZSrMLOxtms9uR40hqhx","pt-6":"njSj0AdfU0M_G18uE0ta","pr-6":"rYh75XoApE5pxN5IfghY","pb-6":"xXiRrDOVsZcgIZeHmGvn","pl-6":"lBgCzyZ05muXTdr_kEHL","p-7":"Ut8YyAx2wBXXaek0xDWC","px-7":"g94Hel7jdvdHJs0OmwWE","py-7":"NR6BVawqapDUHtIP_BRR","pt-7":"flkSMPhHGhhYbjdG9kL6","pr-7":"Zkj3ld5CHgvwyi1TX_Kx","pb-7":"mG1OofDziqxkGWs4Dwfj","pl-7":"RnHH4tdWZks0U09QOvVw","p-8":"J9k6rYXEzr2GcjLCSS13","px-8":"N6xgcFlDJONPVWi4kO8P","py-8":"LgvunnunY9N2x3GxYqgV","pt-8":"IsAIVnNwJ5YpVNcWLRKP","pr-8":"wtmkrcvFCBUp_RrzLyQN","pb-8":"NqV_vnVYi8xr7f89jXRP","pl-8":"RL2ZRBRjgmkR1DtAVGJp"};const _=m},"../../../node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/browser.js":(h,c,l)=>{var d=l("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");c.formatArgs=C,c.save=t,c.load=m,c.useColors=p,c.storage=_(),c.destroy=(()=>{let s=!1;return()=>{s||(s=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),c.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function p(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let s;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(s=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(s[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function C(s){if(s[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+s[0]+(this.useColors?"%c ":" ")+"+"+h.exports.humanize(this.diff),!this.useColors)return;const e="color: "+this.color;s.splice(1,0,e,"color: inherit");let n=0,r=0;s[0].replace(/%[a-zA-Z%]/g,a=>{a!=="%%"&&(n++,a==="%c"&&(r=n))}),s.splice(r,0,e)}c.log=console.debug||console.log||(()=>{});function t(s){try{s?c.storage.setItem("debug",s):c.storage.removeItem("debug")}catch{}}function m(){let s;try{s=c.storage.getItem("debug")}catch{}return!s&&typeof d<"u"&&"env"in d&&(s=d.env.DEBUG),s}function _(){try{return localStorage}catch{}}h.exports=l("../../../node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/common.js")(c);const{formatters:i}=h.exports;i.j=function(s){try{return JSON.stringify(s)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},"../../../node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/common.js":(h,c,l)=>{function d(p){t.debug=t,t.default=t,t.coerce=n,t.disable=s,t.enable=_,t.enabled=e,t.humanize=l("../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js"),t.destroy=r,Object.keys(p).forEach(a=>{t[a]=p[a]}),t.names=[],t.skips=[],t.formatters={};function C(a){let o=0;for(let g=0;g<a.length;g++)o=(o<<5)-o+a.charCodeAt(g),o|=0;return t.colors[Math.abs(o)%t.colors.length]}t.selectColor=C;function t(a){let o,g=null,v,f;function u(...b){if(!u.enabled)return;const x=u,k=Number(new Date),F=k-(o||k);x.diff=F,x.prev=o,x.curr=k,o=k,b[0]=t.coerce(b[0]),typeof b[0]!="string"&&b.unshift("%O");let y=0;b[0]=b[0].replace(/%([a-zA-Z%])/g,(w,S)=>{if(w==="%%")return"%";y++;const E=t.formatters[S];if(typeof E=="function"){const T=b[y];w=E.call(x,T),b.splice(y,1),y--}return w}),t.formatArgs.call(x,b),(x.log||t.log).apply(x,b)}return u.namespace=a,u.useColors=t.useColors(),u.color=t.selectColor(a),u.extend=m,u.destroy=t.destroy,Object.defineProperty(u,"enabled",{enumerable:!0,configurable:!1,get:()=>g!==null?g:(v!==t.namespaces&&(v=t.namespaces,f=t.enabled(a)),f),set:b=>{g=b}}),typeof t.init=="function"&&t.init(u),u}function m(a,o){const g=t(this.namespace+(typeof o>"u"?":":o)+a);return g.log=this.log,g}function _(a){t.save(a),t.namespaces=a,t.names=[],t.skips=[];const o=(typeof a=="string"?a:"").trim().replace(" ",",").split(",").filter(Boolean);for(const g of o)g[0]==="-"?t.skips.push(g.slice(1)):t.names.push(g)}function i(a,o){let g=0,v=0,f=-1,u=0;for(;g<a.length;)if(v<o.length&&(o[v]===a[g]||o[v]==="*"))o[v]==="*"?(f=v,u=g,v++):(g++,v++);else if(f!==-1)v=f+1,u++,g=u;else return!1;for(;v<o.length&&o[v]==="*";)v++;return v===o.length}function s(){const a=[...t.names,...t.skips.map(o=>"-"+o)].join(",");return t.enable(""),a}function e(a){for(const o of t.skips)if(i(a,o))return!1;for(const o of t.names)if(i(a,o))return!0;return!1}function n(a){return a instanceof Error?a.stack||a.message:a}function r(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return t.enable(t.load()),t}h.exports=d},"../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js":h=>{var c=1e3,l=c*60,d=l*60,p=d*24,C=p*7,t=p*365.25;h.exports=function(e,n){n=n||{};var r=typeof e;if(r==="string"&&e.length>0)return m(e);if(r==="number"&&isFinite(e))return n.long?i(e):_(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};function m(e){if(e=String(e),!(e.length>100)){var n=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(n){var r=parseFloat(n[1]),a=(n[2]||"ms").toLowerCase();switch(a){case"years":case"year":case"yrs":case"yr":case"y":return r*t;case"weeks":case"week":case"w":return r*C;case"days":case"day":case"d":return r*p;case"hours":case"hour":case"hrs":case"hr":case"h":return r*d;case"minutes":case"minute":case"mins":case"min":case"m":return r*l;case"seconds":case"second":case"secs":case"sec":case"s":return r*c;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}function _(e){var n=Math.abs(e);return n>=p?Math.round(e/p)+"d":n>=d?Math.round(e/d)+"h":n>=l?Math.round(e/l)+"m":n>=c?Math.round(e/c)+"s":e+"ms"}function i(e){var n=Math.abs(e);return n>=p?s(e,n,p,"day"):n>=d?s(e,n,d,"hour"):n>=l?s(e,n,l,"minute"):n>=c?s(e,n,c,"second"):e+" ms"}function s(e,n,r,a){var o=n>=r*1.5;return Math.round(e/r)+" "+a+(o?"s":"")}}}]);
