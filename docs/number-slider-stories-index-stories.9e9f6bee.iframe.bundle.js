"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5781],{"../components/components/number-slider/stories/index.stories.tsx":(E,l,t)=>{var i,c,m,p,v,h;t.r(l),t.d(l,{WithDefaultValue:()=>a,__namedExportsOrder:()=>V,_default:()=>n,default:()=>S});var s=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=t("../components/components/number-slider/index.tsx"),e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),N=`import { useState } from 'react';
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
`,T={_default:{startLoc:{col:56,line:11},endLoc:{col:92,line:11},startBody:{col:56,line:11},endBody:{col:92,line:11}},WithDefaultValue:{startLoc:{col:73,line:17},endLoc:{col:1,line:41},startBody:{col:73,line:17},endBody:{col:1,line:41}}};const S={parameters:{storySource:{source:`import { useState } from 'react';
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
				renderThumb={ renderThumb } 
			/>
			<div>{ \`Value on changing: \${ value }\` }</div>
			<div>{ \`Value on change ends: \${ endValue }\` }</div>
		</div>
	);
};

// Export With Default Value story
export const WithDefaultValue = TemplateWithChangingValue.bind( {} );
`,locationsMap:{default:{startLoc:{col:56,line:11},endLoc:{col:92,line:11},startBody:{col:56,line:11},endBody:{col:92,line:11}},"with-default-value":{startLoc:{col:73,line:17},endLoc:{col:1,line:41},startBody:{col:73,line:17},endBody:{col:1,line:41}}}}},title:"JS Packages/Components/Number Slider",component:o.Z},d=r=>(0,e.jsx)(o.Z,{...r});d.displayName="Template";const n=d.bind({}),u=r=>{const[g,f]=(0,s.useState)(10),[_,C]=(0,s.useState)(10),x=(y,b)=>(0,e.jsxs)("div",{...y,children:[b.valueNow," - ",b.valueNow%2===0?"Even":"Odd"]});return(0,e.jsxs)("div",{children:[(0,e.jsx)(o.Z,{...r,value:g,onChange:f,onAfterChange:C,renderThumb:x}),(0,e.jsx)("div",{children:`Value on changing: ${g}`}),(0,e.jsx)("div",{children:`Value on change ends: ${_}`})]})};u.displayName="TemplateWithChangingValue";const a=u.bind({});n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:"args => <NumberSlider {...args} />",...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}},a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const V=["_default","WithDefaultValue"]}}]);})();
