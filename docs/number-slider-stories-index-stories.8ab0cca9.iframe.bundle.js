"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5781],{"../components/components/number-slider/stories/index.stories.tsx":(N,s,n)=>{var i,c,m,p,v,h;n.r(s),n.d(s,{WithDefaultValue:()=>a,__namedExportsOrder:()=>f,_default:()=>t,default:()=>b});var l=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=n("../components/components/number-slider/index.tsx"),e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),y=`import { useState } from 'react';
import NumberSlider from '../index';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Number Slider',
	component: NumberSlider,
} as ComponentMeta< typeof NumberSlider >;

// Export additional stories using pre-defined values
const Template: ComponentStory< typeof NumberSlider > = args => <NumberSlider { ...args } />;

// Export Default story
export const _default = Template.bind( {} );

// Export additional stories using chaning values
const TemplateWithChangingValue: ComponentStory< typeof NumberSlider > = args => {
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
`,T={_default:{startLoc:{col:54,line:10},endLoc:{col:88,line:10},startBody:{col:54,line:10},endBody:{col:88,line:10}},WithDefaultValue:{startLoc:{col:71,line:16},endLoc:{col:1,line:30},startBody:{col:71,line:16},endBody:{col:1,line:30}}};const b={parameters:{storySource:{source:`import { useState } from 'react';
import NumberSlider from '../index';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'JS Packages/Components/Number Slider',
  component: NumberSlider
} as ComponentMeta<typeof NumberSlider>);

// Export additional stories using pre-defined values
const Template: ComponentStory<typeof NumberSlider> = args => <NumberSlider {...args} />;

// Export Default story
export const _default = Template.bind({});

// Export additional stories using chaning values
const TemplateWithChangingValue: ComponentStory<typeof NumberSlider> = args => {
  const [value, setValue] = useState(10);
  const [endValue, setEndValue] = useState(10);
  const renderThumb = (props, state) => {
    return <div {...props}>
                {state.valueNow} - {state.valueNow % 2 === 0 ? 'Even' : 'Odd'}
            </div>;
  };
  return <div>
            <NumberSlider {...args} value={value} onChange={setValue} onAfterChange={setEndValue} renderThumb={renderThumb} 
    />
            <div>{\`Value on changing: \${value}\`}</div>
            <div>{\`Value on change ends: \${endValue}\`}</div>
        </div>;
};

// Export With Default Value story
export const WithDefaultValue = TemplateWithChangingValue.bind({});
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <NumberSlider {...args} />",
      ..._default.parameters?.docs?.source
    }
  }
};
WithDefaultValue.parameters = {
  ...WithDefaultValue.parameters,
  docs: {
    ...WithDefaultValue.parameters?.docs,
    source: {
      originalSource: "args => {\\n  const [value, setValue] = useState(10);\\n  const [endValue, setEndValue] = useState(10);\\n  const renderThumb = (props, state) => {\\n    return <div {...props}>\\n                {state.valueNow} - {state.valueNow % 2 === 0 ? 'Even' : 'Odd'}\\n            </div>;\\n  };\\n  return <div>\\n            <NumberSlider {...args} value={value} onChange={setValue} onAfterChange={setEndValue} renderThumb={renderThumb} // eslint-disable-line react/jsx-no-bind\\n    />\\n            <div>{\`Value on changing: \${value}\`}</div>\\n            <div>{\`Value on change ends: \${endValue}\`}</div>\\n        </div>;\\n}",
      ...WithDefaultValue.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:54,line:10},endLoc:{col:88,line:10},startBody:{col:54,line:10},endBody:{col:88,line:10}},"with-default-value":{startLoc:{col:71,line:16},endLoc:{col:1,line:30},startBody:{col:71,line:16},endBody:{col:1,line:30}}}}},title:"JS Packages/Components/Number Slider",component:r.Z},u=o=>(0,e.jsx)(r.Z,{...o});u.displayName="Template";const t=u.bind({}),d=o=>{const[g,S]=(0,l.useState)(10),[_,C]=(0,l.useState)(10),E=(x,V)=>(0,e.jsxs)("div",{...x,children:[V.valueNow," - ",V.valueNow%2===0?"Even":"Odd"]});return(0,e.jsxs)("div",{children:[(0,e.jsx)(r.Z,{...o,value:g,onChange:S,onAfterChange:C,renderThumb:E}),(0,e.jsx)("div",{children:`Value on changing: ${g}`}),(0,e.jsx)("div",{children:`Value on change ends: ${_}`})]})};d.displayName="TemplateWithChangingValue";const a=d.bind({});t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"args => <NumberSlider {...args} />",...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}},a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const f=["_default","WithDefaultValue"]}}]);})();
