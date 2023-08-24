(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6430],{"../../../node_modules/.pnpm/@wordpress+compose@6.15.0_react@18.2.0/node_modules/@wordpress/compose/build-module/utils/debounce/index.js":(g,f,r)=>{"use strict";r.d(f,{D:()=>c});const c=(m,p,s)=>{let n,i,e=0,l,_,o,d=0,x=!1,b=!1,v=!0;s&&(x=!!s.leading,b="maxWait"in s,s.maxWait!==void 0&&(e=Math.max(s.maxWait,p)),v="trailing"in s?!!s.trailing:v);function k(t){const a=n,u=i;return n=void 0,i=void 0,d=t,l=m.apply(u,a),l}function h(t,a){_=setTimeout(t,a)}function A(){_!==void 0&&clearTimeout(_)}function C(t){return d=t,h(S,p),x?k(t):l}function D(t){return t-(o||0)}function w(t){const a=D(t),u=t-d,L=p-a;return b?Math.min(L,e-u):L}function R(t){const a=D(t),u=t-d;return o===void 0||a>=p||a<0||b&&u>=e}function S(){const t=Date.now();if(R(t))return E(t);h(S,w(t))}function B(){_=void 0}function E(t){return B(),v&&n?k(t):(n=i=void 0,l)}function M(){A(),d=0,B(),n=o=i=void 0}function W(){return y()?E(Date.now()):l}function y(){return _!==void 0}function T(...t){const a=Date.now(),u=R(a);if(n=t,i=this,o=a,u){if(!y())return C(o);if(b)return h(S,p),k(o)}return y()||h(S,p),l}return T.cancel=M,T.flush=W,T.pending=y,T}},"../components/components/boost-score-graph/stories/index.stories.tsx":(g,f,r)=>{var x,b,v;"use strict";r.r(f),r.d(f,{__namedExportsOrder:()=>d,_default:()=>o,default:()=>l});var c=r("../components/components/boost-score-graph/index.tsx"),m=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=`import { BoostScoreGraph } from '..';
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
		isLoading: { control: 'boolean', defaultValue: false },
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
	isLoading: false,
};

export default meta;

const Template = args => <BoostScoreGraph { ...args } />;
export const _default = Template.bind( {} );
_default.args = defaultValues;
`,s={_default:{startLoc:{col:17,line:179},endLoc:{col:54,line:179},startBody:{col:17,line:179},endBody:{col:54,line:179}}};const n={data:{_meta:{start:1689772803e3,end:1690647e6},periods:[{timestamp:1690636803e3,dimensions:{desktop_overall_score:86,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689772803e3,dimensions:{desktop_overall_score:75,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689859203e3,dimensions:{desktop_overall_score:72,mobile_overall_score:49,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689945603e3,dimensions:{desktop_overall_score:20,mobile_overall_score:30,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690032003e3,dimensions:{desktop_overall_score:72,mobile_overall_score:40,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690118403e3,dimensions:{desktop_overall_score:55,mobile_overall_score:45,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690204803e3,dimensions:{desktop_overall_score:75,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690291203e3,dimensions:{desktop_overall_score:70,mobile_overall_score:50,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690377603e3,dimensions:{desktop_overall_score:75,mobile_overall_score:90,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690464003e3,dimensions:{desktop_overall_score:80,mobile_overall_score:60,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690550403e3,dimensions:{desktop_overall_score:85,mobile_overall_score:60,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}}]}},i={parameters:{storySource:{source:`import { BoostScoreGraph } from '..';
import type { Meta } from '@storybook/react';
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
const meta: Meta<typeof BoostScoreGraph> = {
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
    isLoading: {
      control: 'boolean',
      defaultValue: false
    }
  },
  decorators: [Story => <div style={{
    width: '80%',
    maxWidth: '1320px',
    margin: '200px auto',
    fontSize: '16px'
  }}>
                <Story />
            </div>]
};
const defaultValues = {
  startDate: exampleRawResponse.data._meta.start,
  endDate: exampleRawResponse.data._meta.end,
  periods: exampleRawResponse.data.periods,
  isLoading: false
};
export default meta;
const Template = args => <BoostScoreGraph {...args} />;
export const _default = Template.bind({});
_default.args = defaultValues;
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <BoostScoreGraph {...args} />",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:179},endLoc:{col:54,line:179},startBody:{col:17,line:179},endBody:{col:54,line:179}}}}},title:"JS Packages/Components/Boost Score Graph",component:c.i,argTypes:{startDate:{control:"date"},endDate:{control:"date"},title:{control:"string",defaultValue:"Title"},isLoading:{control:"boolean",defaultValue:!1}},decorators:[k=>(0,m.jsx)("div",{style:{width:"80%",maxWidth:"1320px",margin:"200px auto",fontSize:"16px"},children:(0,m.jsx)(k,{})})]},e={startDate:n.data._meta.start,endDate:n.data._meta.end,periods:n.data.periods,isLoading:!1},l=i,_=k=>(0,m.jsx)(c.i,{...k});_.displayName="Template";const o=_.bind({});o.args=e,o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:"args => <BoostScoreGraph {...args} />",...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const d=["_default"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(g,f)=>{var r,c;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var m={}.hasOwnProperty,p="[native code]";function s(){for(var n=[],i=0;i<arguments.length;i++){var e=arguments[i];if(e){var l=typeof e;if(l==="string"||l==="number")n.push(e);else if(Array.isArray(e)){if(e.length){var _=s.apply(null,e);_&&n.push(_)}}else if(l==="object"){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){n.push(e.toString());continue}for(var o in e)m.call(e,o)&&e[o]&&n.push(o)}}}return n.join(" ")}g.exports?(s.default=s,g.exports=s):(r=[],c=function(){return s}.apply(f,r),c!==void 0&&(g.exports=c))})()}}]);})();
