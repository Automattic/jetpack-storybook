"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1986],{"../components/components/donut-meter/stories/index.stories.tsx":(y,i,n)=>{n.r(i),n.d(i,{AdaptiveColors:()=>s,Danger:()=>d,Warning:()=>a,_Default:()=>r,__namedExportsOrder:()=>T,default:()=>S});var p=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=n.n(p),u=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/donut-meter/style.scss"),l={};l.insert="head",l.singleton=!1;var _=m()(u.A,l);const A=u.A.locals||{};var e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const M=t=>t<70?"success":t<100?"warning":"danger",o=({className:t="",description:f="",donutWidth:x="64px",segmentCount:P,thickness:h="3.5",title:C="",totalCount:j,type:v,useAdaptiveColors:L})=>{const D=P/(j===0?1:j)*100,k=typeof C=="string"&&C.length===0&&typeof f=="string"&&f.length===0?"true":"false",O=`donut-meter ${t?t+" ":""}${v?"is-"+v+" ":""} ${!v&&L?"is-"+M(D)+" ":""}`.trim();return(0,e.jsx)("div",{className:O,"aria-hidden":k,"data-testid":"donut-meter",children:(0,e.jsxs)("svg",{width:x,height:x,viewBox:"0 0 40 40",className:"donut-meter_svg",role:"img",children:[(0,e.jsx)("title",{id:"donut-meter-title",children:C}),(0,e.jsx)("desc",{id:"donut-meter-description",children:f}),(0,e.jsx)("circle",{className:"donut-meter-hole",cx:"20",cy:"20",r:"15.91549430918954",fill:"transparent"}),(0,e.jsx)("circle",{className:"donut-meter-ring",cx:"20",cy:"20",r:"15.91549430918954",fill:"transparent",strokeWidth:h,stroke:"#ebebeb"}),(0,e.jsx)("circle",{className:"donut-meter-segment",cx:"20",cy:"20",r:"15.91549430918954",fill:"transparent","transform-origin":"center",strokeWidth:h,strokeDasharray:`${D} ${100-D}`,strokeDashoffset:"-25"})]})})};try{donutmeter.displayName="donutmeter",donutmeter.__docgenInfo={description:"Generate record meter donut bar",displayName:"donutmeter",props:{totalCount:{defaultValue:null,description:"Total number of items for the donut meter.",name:"totalCount",required:!0,type:{name:"number"}},segmentCount:{defaultValue:null,description:"Count for the given item",name:"segmentCount",required:!0,type:{name:"number"}},type:{defaultValue:null,description:`Dictates the segment color of the donut meter. Defaults to 'success' and overrides useAdaptiveColors.
Possible values:
- 'warning': yellow donut
- 'error': red donut
- 'success': green donut`,name:"type",required:!1,type:{name:"string"}},thickness:{defaultValue:{value:"3.5"},description:`thickness for the chart border
If not provided, defaults to 3.5`,name:"thickness",required:!1,type:{name:"string"}},donutWidth:{defaultValue:{value:"64px"},description:`width for the full chart size
If not provided, defaults to 64px`,name:"donutWidth",required:!1,type:{name:"string"}},title:{defaultValue:{value:""},description:`Localized title for meter.
Not visible. Used for a11y support.
If not provided, defaults to an empty string.`,name:"title",required:!1,type:{name:"string"}},description:{defaultValue:{value:""},description:`Localized description for meter.
Not visible. Used for a11y support.
If not provided, defaults to an empty string.`,name:"description",required:!1,type:{name:"string"}},useAdaptiveColors:{defaultValue:null,description:"Changes colors according to the fullness of the meter.",name:"useAdaptiveColors",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Class name to append to the topmost container.",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/donut-meter/index.tsx#donutmeter"]={docgenInfo:donutmeter.__docgenInfo,name:"donutmeter",path:"../components/components/donut-meter/index.tsx#donutmeter"})}catch{}var B=`import DonutMeter, { DonutMeterProps } from '../index.tsx';

export default {
	title: 'JS Packages/Components/DonutMeter',
	component: DonutMeter,
	parameters: {
		layout: 'centered',
	},
};

const Template = args => <DonutMeter { ...args } />;

const DefaultArgs: DonutMeterProps = {
	segmentCount: 16,
	totalCount: 100,
	thickness: '3.5',
	donutWidth: '64px',
	title: 'Meter title goes here',
	description: 'Meter description goes here',
};
export const _Default = Template.bind( {} );
_Default.args = DefaultArgs;

const WarningArgs: DonutMeterProps = {
	...DefaultArgs,
	type: 'warning',
};
export const Warning = Template.bind( {} );
Warning.args = WarningArgs;

const DangerArgs: DonutMeterProps = {
	...DefaultArgs,
	type: 'danger',
};
export const Danger = Template.bind( {} );
Danger.args = DangerArgs;

export const AdaptiveColors = args => (
	<div>
		<div style={ { display: 'flex', flexFlow: 'row' } }>
			<DonutMeter { ...args } segmentCount={ 0 } useAdaptiveColors />
			<DonutMeter { ...args } segmentCount={ 20 } useAdaptiveColors />
			<DonutMeter { ...args } segmentCount={ 40 } useAdaptiveColors />
			<DonutMeter { ...args } segmentCount={ 60 } useAdaptiveColors />
			<DonutMeter { ...args } segmentCount={ 80 } useAdaptiveColors />
			<DonutMeter { ...args } segmentCount={ 100 } useAdaptiveColors />
		</div>
		<p>Color changing according to the fullness of the meter.</p>
	</div>
);
AdaptiveColors.args = { ...DefaultArgs };
`,R={_Default:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},Warning:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},Danger:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},AdaptiveColors:{startLoc:{col:30,line:35},endLoc:{col:2,line:69},startBody:{col:30,line:35},endBody:{col:2,line:69}}};const S={title:"JS Packages/Components/DonutMeter",component:o,parameters:{storySource:{source:`import DonutMeter from '../index.tsx';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Components/DonutMeter',
  component: DonutMeter,
  parameters: {
    layout: 'centered'
  }
};
const Template = args => /*#__PURE__*/_jsx(DonutMeter, {
  ...args
});
const DefaultArgs = {
  segmentCount: 16,
  totalCount: 100,
  thickness: '3.5',
  donutWidth: '64px',
  title: 'Meter title goes here',
  description: 'Meter description goes here'
};
export const _Default = Template.bind({});
_Default.args = DefaultArgs;
const WarningArgs = {
  ...DefaultArgs,
  type: 'warning'
};
export const Warning = Template.bind({});
Warning.args = WarningArgs;
const DangerArgs = {
  ...DefaultArgs,
  type: 'danger'
};
export const Danger = Template.bind({});
Danger.args = DangerArgs;
export const AdaptiveColors = args => /*#__PURE__*/_jsxs("div", {
  children: [/*#__PURE__*/_jsxs("div", {
    style: {
      display: 'flex',
      flexFlow: 'row'
    },
    children: [/*#__PURE__*/_jsx(DonutMeter, {
      ...args,
      segmentCount: 0,
      useAdaptiveColors: true
    }), /*#__PURE__*/_jsx(DonutMeter, {
      ...args,
      segmentCount: 20,
      useAdaptiveColors: true
    }), /*#__PURE__*/_jsx(DonutMeter, {
      ...args,
      segmentCount: 40,
      useAdaptiveColors: true
    }), /*#__PURE__*/_jsx(DonutMeter, {
      ...args,
      segmentCount: 60,
      useAdaptiveColors: true
    }), /*#__PURE__*/_jsx(DonutMeter, {
      ...args,
      segmentCount: 80,
      useAdaptiveColors: true
    }), /*#__PURE__*/_jsx(DonutMeter, {
      ...args,
      segmentCount: 100,
      useAdaptiveColors: true
    })]
  }), /*#__PURE__*/_jsx("p", {
    children: "Color changing according to the fullness of the meter."
  })]
});
AdaptiveColors.args = {
  ...DefaultArgs
};`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},warning:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},danger:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},"adaptive-colors":{startLoc:{col:30,line:35},endLoc:{col:2,line:69},startBody:{col:30,line:35},endBody:{col:2,line:69}}}},layout:"centered"}},g=t=>(0,e.jsx)(o,{...t}),c={segmentCount:16,totalCount:100,thickness:"3.5",donutWidth:"64px",title:"Meter title goes here",description:"Meter description goes here"},r=g.bind({});r.args=c;const E={...c,type:"warning"},a=g.bind({});a.args=E;const b={...c,type:"danger"},d=g.bind({});d.args=b;const s=t=>(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{display:"flex",flexFlow:"row"},children:[(0,e.jsx)(o,{...t,segmentCount:0,useAdaptiveColors:!0}),(0,e.jsx)(o,{...t,segmentCount:20,useAdaptiveColors:!0}),(0,e.jsx)(o,{...t,segmentCount:40,useAdaptiveColors:!0}),(0,e.jsx)(o,{...t,segmentCount:60,useAdaptiveColors:!0}),(0,e.jsx)(o,{...t,segmentCount:80,useAdaptiveColors:!0}),(0,e.jsx)(o,{...t,segmentCount:100,useAdaptiveColors:!0})]}),(0,e.jsx)("p",{children:"Color changing according to the fullness of the meter."})]});s.args={...c};const T=["_Default","Warning","Danger","AdaptiveColors"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <DonutMeter {...args} />",...r.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <DonutMeter {...args} />",...a.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"args => <DonutMeter {...args} />",...d.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <div>
        <div style={{
    display: 'flex',
    flexFlow: 'row'
  }}>
            <DonutMeter {...args} segmentCount={0} useAdaptiveColors />
            <DonutMeter {...args} segmentCount={20} useAdaptiveColors />
            <DonutMeter {...args} segmentCount={40} useAdaptiveColors />
            <DonutMeter {...args} segmentCount={60} useAdaptiveColors />
            <DonutMeter {...args} segmentCount={80} useAdaptiveColors />
            <DonutMeter {...args} segmentCount={100} useAdaptiveColors />
        </div>
        <p>Color changing according to the fullness of the meter.</p>
    </div>`,...s.parameters?.docs?.source}}};try{s.displayName="AdaptiveColors",s.__docgenInfo={description:"",displayName:"AdaptiveColors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/donut-meter/stories/index.stories.tsx#AdaptiveColors"]={docgenInfo:s.__docgenInfo,name:"AdaptiveColors",path:"../components/components/donut-meter/stories/index.stories.tsx#AdaptiveColors"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/donut-meter/style.scss":(y,i,n)=>{n.d(i,{A:()=>A});var p=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=n.n(p),u=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),l=n.n(u),_=l()(m());_.push([y.id,".donut-meter .donut-meter-segment{stroke:var(--jp-green)}.donut-meter.is-warning .donut-meter-segment{stroke:var(--jp-yellow-10)}.donut-meter.is-danger .donut-meter-segment{stroke:var(--jp-red)}",""]);const A=_}}]);
