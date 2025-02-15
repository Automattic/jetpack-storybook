"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8625],{"../components/components/number-slider/stories/index.stories.tsx":(g,o,n)=>{n.r(o),n.d(o,{WithDefaultValue:()=>a,__namedExportsOrder:()=>c,_default:()=>t,default:()=>i});var l=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=n("../components/components/number-slider/index.tsx"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),x=`import { useState } from 'react';
import NumberSlider from '../index.js';
import type { StoryFn, Meta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Number Slider',
	component: NumberSlider,
} as Meta< typeof NumberSlider >;

// Export additional stories using pre-defined values
const Template: StoryFn< typeof NumberSlider > = args => <NumberSlider { ...args } />;

// Export Default story
export const _default = Template.bind( {} );

// Export additional stories using chaning values
const TemplateWithChangingValue: StoryFn< typeof NumberSlider > = args => {
	const [ value, setValue ] = useState( 10 );
	const [ endValue, setEndValue ] = useState( 10 );
	const renderThumb = ( props, state ) => {
		return (
			<div { ...props }>
				{ state.valueNow } - { state.valueNow % 2 === 0 ? 'Even' : 'Odd' }
			</div>
		);
	};

	return (
		<div>
			<NumberSlider
				{ ...args }
				value={ value }
				onChange={ setValue }
				onAfterChange={ setEndValue }
				renderThumb={ renderThumb } // eslint-disable-line react/jsx-no-bind
			/>
			<div>{ \`Value on changing: \${ value }\` }</div>
			<div>{ \`Value on change ends: \${ endValue }\` }</div>
		</div>
	);
};

// Export With Default Value story
export const WithDefaultValue = TemplateWithChangingValue.bind( {} );
`,V={_default:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},WithDefaultValue:{startLoc:{col:34,line:18},endLoc:{col:1,line:40},startBody:{col:34,line:18},endBody:{col:1,line:40}}};const i={parameters:{storySource:{source:`import { useState } from 'react';
import NumberSlider from '../index.js';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Components/Number Slider',
  component: NumberSlider
};

// Export additional stories using pre-defined values
const Template = args => /*#__PURE__*/_jsx(NumberSlider, {
  ...args
});

// Export Default story
export const _default = Template.bind({});

// Export additional stories using chaning values
const TemplateWithChangingValue = args => {
  const [value, setValue] = useState(10);
  const [endValue, setEndValue] = useState(10);
  const renderThumb = (props, state) => {
    return /*#__PURE__*/_jsxs("div", {
      ...props,
      children: [state.valueNow, " - ", state.valueNow % 2 === 0 ? 'Even' : 'Odd']
    });
  };
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx(NumberSlider, {
      ...args,
      value: value,
      onChange: setValue,
      onAfterChange: setEndValue,
      renderThumb: renderThumb 
    }), /*#__PURE__*/_jsx("div", {
      children: \`Value on changing: \${value}\`
    }), /*#__PURE__*/_jsx("div", {
      children: \`Value on change ends: \${endValue}\`
    })]
  });
};

// Export With Default Value story
export const WithDefaultValue = TemplateWithChangingValue.bind({});`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},"with-default-value":{startLoc:{col:34,line:18},endLoc:{col:1,line:40},startBody:{col:34,line:18},endBody:{col:1,line:40}}}}},title:"JS Packages/Components/Number Slider",component:r.A},t=(s=>(0,e.jsx)(r.A,{...s})).bind({}),a=(s=>{const[d,m]=(0,l.useState)(10),[p,_]=(0,l.useState)(10),h=(v,u)=>(0,e.jsxs)("div",{...v,children:[u.valueNow," - ",u.valueNow%2===0?"Even":"Odd"]});return(0,e.jsxs)("div",{children:[(0,e.jsx)(r.A,{...s,value:d,onChange:m,onAfterChange:_,renderThumb:h}),(0,e.jsx)("div",{children:`Value on changing: ${d}`}),(0,e.jsx)("div",{children:`Value on change ends: ${p}`})]})}).bind({}),c=["_default","WithDefaultValue"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <NumberSlider {...args} />",...t.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(10);
  const [endValue, setEndValue] = useState(10);
  const renderThumb = (props, state) => {
    return <div {...props}>
                {state.valueNow} - {state.valueNow % 2 === 0 ? 'Even' : 'Odd'}
            </div>;
  };
  return <div>
            <NumberSlider {...args} value={value} onChange={setValue} onAfterChange={setEndValue} renderThumb={renderThumb} // eslint-disable-line react/jsx-no-bind
    />
            <div>{\`Value on changing: \${value}\`}</div>
            <div>{\`Value on change ends: \${endValue}\`}</div>
        </div>;
}`,...a.parameters?.docs?.source}}}}}]);
