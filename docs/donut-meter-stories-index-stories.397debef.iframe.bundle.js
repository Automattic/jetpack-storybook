"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1986],{"../components/components/donut-meter/stories/index.stories.tsx":(A,i,n)=>{n.r(i),n.d(i,{AdaptiveColors:()=>s,Danger:()=>l,Warning:()=>d,_Default:()=>a,__namedExportsOrder:()=>T,default:()=>E});var x=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=n.n(_),c=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/donut-meter/style.scss"),r={};r.insert="head",r.singleton=!1;var f=p()(c.A,r);const O=c.A.locals||{};var e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=t=>t<70?"success":t<100?"warning":"danger",o=({className:t="",description:g="",donutWidth:j="64px",segmentCount:L,thickness:y="3.5",title:C="",totalCount:M,type:D,useAdaptiveColors:k})=>{const v=L/(M===0?1:M)*100,B=typeof C=="string"&&C.length===0&&typeof g=="string"&&g.length===0?"true":"false",w=`donut-meter ${t?t+" ":""}${D?"is-"+D+" ":""} ${!D&&k?"is-"+h(v)+" ":""}`.trim();return(0,e.jsx)("div",{className:w,"aria-hidden":B,"data-testid":"donut-meter",children:(0,e.jsxs)("svg",{width:j,height:j,viewBox:"0 0 40 40",className:"donut-meter_svg",role:"img",children:[(0,e.jsx)("title",{id:"donut-meter-title",children:C}),(0,e.jsx)("desc",{id:"donut-meter-description",children:g}),(0,e.jsx)("circle",{className:"donut-meter-hole",cx:"20",cy:"20",r:"15.91549430918954",fill:"transparent"}),(0,e.jsx)("circle",{className:"donut-meter-ring",cx:"20",cy:"20",r:"15.91549430918954",fill:"transparent",strokeWidth:y,stroke:"#ebebeb"}),(0,e.jsx)("circle",{className:"donut-meter-segment",cx:"20",cy:"20",r:"15.91549430918954",fill:"transparent","transform-origin":"center",strokeWidth:y,strokeDasharray:`${v} ${100-v}`,strokeDashoffset:"-25"})]})})};var W=`import DonutMeter, { DonutMeterProps } from '../index.tsx';

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
`,b={_Default:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},Warning:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},Danger:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},AdaptiveColors:{startLoc:{col:30,line:35},endLoc:{col:2,line:69},startBody:{col:30,line:35},endBody:{col:2,line:69}}};const E={title:"JS Packages/Components/DonutMeter",component:o,parameters:{storySource:{source:`import DonutMeter from '../index.tsx';
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
};`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},warning:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},danger:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},"adaptive-colors":{startLoc:{col:30,line:35},endLoc:{col:2,line:69},startBody:{col:30,line:35},endBody:{col:2,line:69}}}},layout:"centered"}},m=t=>(0,e.jsx)(o,{...t}),u={segmentCount:16,totalCount:100,thickness:"3.5",donutWidth:"64px",title:"Meter title goes here",description:"Meter description goes here"},a=m.bind({});a.args=u;const S={...u,type:"warning"},d=m.bind({});d.args=S;const P={...u,type:"danger"},l=m.bind({});l.args=P;const s=t=>(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{display:"flex",flexFlow:"row"},children:[(0,e.jsx)(o,{...t,segmentCount:0,useAdaptiveColors:!0}),(0,e.jsx)(o,{...t,segmentCount:20,useAdaptiveColors:!0}),(0,e.jsx)(o,{...t,segmentCount:40,useAdaptiveColors:!0}),(0,e.jsx)(o,{...t,segmentCount:60,useAdaptiveColors:!0}),(0,e.jsx)(o,{...t,segmentCount:80,useAdaptiveColors:!0}),(0,e.jsx)(o,{...t,segmentCount:100,useAdaptiveColors:!0})]}),(0,e.jsx)("p",{children:"Color changing according to the fullness of the meter."})]});s.args={...u};const T=["_Default","Warning","Danger","AdaptiveColors"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <DonutMeter {...args} />",...a.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"args => <DonutMeter {...args} />",...d.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"args => <DonutMeter {...args} />",...l.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <div>
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
    </div>`,...s.parameters?.docs?.source}}};try{s.displayName="AdaptiveColors",s.__docgenInfo={description:"",displayName:"AdaptiveColors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/donut-meter/stories/index.stories.tsx#AdaptiveColors"]={docgenInfo:s.__docgenInfo,name:"AdaptiveColors",path:"../components/components/donut-meter/stories/index.stories.tsx#AdaptiveColors"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/donut-meter/style.scss":(A,i,n)=>{n.d(i,{A:()=>f});var x=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=n.n(x),p=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=n.n(p),r=c()(_());r.push([A.id,".donut-meter .donut-meter-segment{stroke:var(--jp-green)}.donut-meter.is-warning .donut-meter-segment{stroke:var(--jp-yellow-10)}.donut-meter.is-danger .donut-meter-segment{stroke:var(--jp-red)}",""]);const f=r}}]);
