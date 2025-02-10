"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9114],{"../charts/src/components/tooltip/stories/index.stories.tsx":(_,l,t)=>{t.r(l),t.d(l,{CustomComponent:()=>o,Default:()=>e,__namedExportsOrder:()=>s,default:()=>m});var d=t("../charts/src/components/tooltip/base-tooltip.tsx"),n=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),c=`import { BaseTooltip } from '../index';
import type { Meta } from '@storybook/react';

const CustomTooltipContent = ( { data } ) => (
	<div style={ { padding: '8px' } }>
		<strong style={ { display: 'block', marginBottom: '4px' } }>{ data.label }</strong>
		<div style={ { color: '#888' } }>Value: { data.value }</div>
	</div>
);

export default {
	title: 'JS Packages/Charts/Composites/Tooltip',
	component: BaseTooltip,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A flexible tooltip component that can display data with custom styling and layout.',
			},
		},
	},
	argTypes: {
		data: {
			description: 'The data object containing label and value',
			control: 'object',
		},
		top: {
			description: 'Distance from top of container',
			control: { type: 'range', min: 0, max: 200 },
		},
		left: {
			description: 'Distance from left of container',
			control: { type: 'range', min: 0, max: 200 },
		},
		style: {
			description: 'Additional CSS styles to apply',
			control: 'object',
		},
	},
} satisfies Meta< typeof BaseTooltip >;

const Template = args => (
	<div
		style={ {
			position: 'relative',
			padding: '2rem',
			border: '1px dashed #ccc',
			width: '300px',
			height: '200px',
			background: '#f5f5f5',
		} }
	>
		<BaseTooltip { ...args } />
	</div>
);

export const Default = Template.bind( {} );
Default.args = {
	top: 100,
	left: 100,
	data: {
		label: 'Monthly Sales',
		value: 4200,
	},
};

export const CustomComponent = Template.bind( {} );
CustomComponent.args = {
	...Default.args,
	component: CustomTooltipContent,
	data: {
		label: 'Q4 Performance',
		value: 27,
	},
	style: {
		backgroundColor: '#fff',
		color: '#333',
		boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
	},
};
`,r={Default:{startLoc:{col:17,line:60},endLoc:{col:2,line:72},startBody:{col:17,line:60},endBody:{col:2,line:72}},CustomComponent:{startLoc:{col:17,line:60},endLoc:{col:2,line:72},startBody:{col:17,line:60},endBody:{col:2,line:72}}};const i=({data:p})=>(0,n.jsxs)("div",{style:{padding:"8px"},children:[(0,n.jsx)("strong",{style:{display:"block",marginBottom:"4px"},children:p.label}),(0,n.jsxs)("div",{style:{color:"#888"},children:["Value: ",p.value]})]}),m={title:"JS Packages/Charts/Composites/Tooltip",component:d.R,parameters:{storySource:{source:`import { BaseTooltip } from '../index';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const CustomTooltipContent = ({
  data
}) => /*#__PURE__*/_jsxs("div", {
  style: {
    padding: '8px'
  },
  children: [/*#__PURE__*/_jsx("strong", {
    style: {
      display: 'block',
      marginBottom: '4px'
    },
    children: data.label
  }), /*#__PURE__*/_jsxs("div", {
    style: {
      color: '#888'
    },
    children: ["Value: ", data.value]
  })]
});
export default {
  title: 'JS Packages/Charts/Composites/Tooltip',
  component: BaseTooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible tooltip component that can display data with custom styling and layout.'
      }
    }
  },
  argTypes: {
    data: {
      description: 'The data object containing label and value',
      control: 'object'
    },
    top: {
      description: 'Distance from top of container',
      control: {
        type: 'range',
        min: 0,
        max: 200
      }
    },
    left: {
      description: 'Distance from left of container',
      control: {
        type: 'range',
        min: 0,
        max: 200
      }
    },
    style: {
      description: 'Additional CSS styles to apply',
      control: 'object'
    }
  }
};
const Template = args => /*#__PURE__*/_jsx("div", {
  style: {
    position: 'relative',
    padding: '2rem',
    border: '1px dashed #ccc',
    width: '300px',
    height: '200px',
    background: '#f5f5f5'
  },
  children: /*#__PURE__*/_jsx(BaseTooltip, {
    ...args
  })
});
export const Default = Template.bind({});
Default.args = {
  top: 100,
  left: 100,
  data: {
    label: 'Monthly Sales',
    value: 4200
  }
};
export const CustomComponent = Template.bind({});
CustomComponent.args = {
  ...Default.args,
  component: CustomTooltipContent,
  data: {
    label: 'Q4 Performance',
    value: 27
  },
  style: {
    backgroundColor: '#fff',
    color: '#333',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
  }
};`,locationsMap:{default:{startLoc:{col:17,line:60},endLoc:{col:2,line:72},startBody:{col:17,line:60},endBody:{col:2,line:72}},"custom-component":{startLoc:{col:17,line:60},endLoc:{col:2,line:72},startBody:{col:17,line:60},endBody:{col:2,line:72}}}},layout:"centered",docs:{description:{component:"A flexible tooltip component that can display data with custom styling and layout."}}},argTypes:{data:{description:"The data object containing label and value",control:"object"},top:{description:"Distance from top of container",control:{type:"range",min:0,max:200}},left:{description:"Distance from left of container",control:{type:"range",min:0,max:200}},style:{description:"Additional CSS styles to apply",control:"object"}}},a=p=>(0,n.jsx)("div",{style:{position:"relative",padding:"2rem",border:"1px dashed #ccc",width:"300px",height:"200px",background:"#f5f5f5"},children:(0,n.jsx)(d.R,{...p})}),e=a.bind({});e.args={top:100,left:100,data:{label:"Monthly Sales",value:4200}};const o=a.bind({});o.args={...e.args,component:i,data:{label:"Q4 Performance",value:27},style:{backgroundColor:"#fff",color:"#333",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"}};const s=["Default","CustomComponent"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => <div style={{
  position: 'relative',
  padding: '2rem',
  border: '1px dashed #ccc',
  width: '300px',
  height: '200px',
  background: '#f5f5f5'
}}>
        <BaseTooltip {...args} />
    </div>`,...e.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div style={{
  position: 'relative',
  padding: '2rem',
  border: '1px dashed #ccc',
  width: '300px',
  height: '200px',
  background: '#f5f5f5'
}}>
        <BaseTooltip {...args} />
    </div>`,...o.parameters?.docs?.source}}}},"../charts/src/components/tooltip/base-tooltip.tsx":(_,l,t)=>{t.d(l,{R:()=>o});var d=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=t.n(d),c=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/tooltip/base-tooltip.module.scss"),r={};r.insert="head",r.singleton=!1;var i=n()(c.A,r);const m=c.A.locals||{};var a=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const e=({data:s})=>(0,a.jsxs)(a.Fragment,{children:[s?.label,": ",s?.valueDisplay||s?.value]}),o=({data:s,top:p,left:u,component:f=e,children:y,className:g})=>(0,a.jsx)("div",{className:m.tooltip,style:{top:p,left:u},role:"tooltip",children:y||s&&(0,a.jsx)(f,{data:s,className:g})});try{o.displayName="BaseTooltip",o.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:o.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/tooltip/base-tooltip.module.scss":(_,l,t)=>{t.d(l,{A:()=>m});var d=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=t.n(d),c=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=t.n(c),i=r()(n());i.push([_.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),i.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const m=i}}]);
