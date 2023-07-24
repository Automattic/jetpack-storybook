"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2406],{"../components/components/donut-meter/stories/index.stories.tsx":(A,i,n)=>{var x,h,j,S,W,T,k,L,w,B,E,P;n.r(i),n.d(i,{AdaptiveColors:()=>s,Danger:()=>l,Warning:()=>d,_Default:()=>a,__namedExportsOrder:()=>$,default:()=>K});var f=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=n.n(g),c=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/donut-meter/style.scss"),r={};r.insert="head",r.singleton=!1;var M=m()(c.Z,r);const H=c.Z.locals||{};var e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const I=t=>t<70?"success":t<100?"warning":"danger",y=t=>{let{className:O="",description:_="",donutWidth:b="64px",segmentCount:J,thickness:N="3.5",title:C="",totalCount:R,type:D,useAdaptiveColors:Y}=t;const v=J/(R===0?1:R)*100,Z=typeof C=="string"&&C.length===0&&typeof _=="string"&&_.length===0?"true":"false",X=`donut-meter ${O?O+" ":""}${D?"is-"+D+" ":""} ${!D&&Y?"is-"+I(v)+" ":""}`.trim();return(0,e.jsx)("div",{className:X,"aria-hidden":Z,"data-testid":"donut-meter",children:(0,e.jsxs)("svg",{width:b,height:b,viewBox:"0 0 40 40",className:"donut-meter_svg",role:"img",children:[(0,e.jsx)("title",{id:"donut-meter-title",children:C}),(0,e.jsx)("desc",{id:"donut-meter-description",children:_}),(0,e.jsx)("circle",{className:"donut-meter-hole",cx:"20",cy:"20",r:"15.91549430918954",fill:"transparent"}),(0,e.jsx)("circle",{className:"donut-meter-ring",cx:"20",cy:"20",r:"15.91549430918954",fill:"transparent",strokeWidth:N,stroke:"#ebebeb"}),(0,e.jsx)("circle",{className:"donut-meter-segment",cx:"20",cy:"20",r:"15.91549430918954",fill:"transparent","transform-origin":"center",strokeWidth:N,strokeDasharray:`${v} ${100-v}`,strokeDashoffset:"-25"})]})})};y.displayName="DonutMeter";const o=y;var z=`import DonutMeter, { DonutMeterProps } from '../index';

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
`,G={_Default:{startLoc:{col:17,line:9},endLoc:{col:49,line:9},startBody:{col:17,line:9},endBody:{col:49,line:9}},Warning:{startLoc:{col:17,line:9},endLoc:{col:49,line:9},startBody:{col:17,line:9},endBody:{col:49,line:9}},Danger:{startLoc:{col:17,line:9},endLoc:{col:49,line:9},startBody:{col:17,line:9},endBody:{col:49,line:9}},AdaptiveColors:{startLoc:{col:30,line:32},endLoc:{col:10,line:45},startBody:{col:30,line:32},endBody:{col:10,line:45}}};const K={title:"JS Packages/Components/DonutMeter",component:o,parameters:{storySource:{source:`import DonutMeter, { DonutMeterProps } from '../index';
export default {
  title: 'JS Packages/Components/DonutMeter',
  component: DonutMeter,
  parameters: {
    layout: 'centered'
  }
};
const Template = args => <DonutMeter {...args} />;
const DefaultArgs: DonutMeterProps = {
  segmentCount: 16,
  totalCount: 100,
  thickness: '3.5',
  donutWidth: '64px',
  title: 'Meter title goes here',
  description: 'Meter description goes here'
};
export const _Default = Template.bind({});
_Default.args = DefaultArgs;
const WarningArgs: DonutMeterProps = {
  ...DefaultArgs,
  type: 'warning'
};
export const Warning = Template.bind({});
Warning.args = WarningArgs;
const DangerArgs: DonutMeterProps = {
  ...DefaultArgs,
  type: 'danger'
};
export const Danger = Template.bind({});
Danger.args = DangerArgs;
export const AdaptiveColors = args => <div>
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
    </div>;
AdaptiveColors.args = {
  ...DefaultArgs
};
_Default.parameters = {
  ..._Default.parameters,
  docs: {
    ..._Default.parameters?.docs,
    source: {
      originalSource: "args => <DonutMeter {...args} />",
      ..._Default.parameters?.docs?.source
    }
  }
};
Warning.parameters = {
  ...Warning.parameters,
  docs: {
    ...Warning.parameters?.docs,
    source: {
      originalSource: "args => <DonutMeter {...args} />",
      ...Warning.parameters?.docs?.source
    }
  }
};
Danger.parameters = {
  ...Danger.parameters,
  docs: {
    ...Danger.parameters?.docs,
    source: {
      originalSource: "args => <DonutMeter {...args} />",
      ...Danger.parameters?.docs?.source
    }
  }
};
AdaptiveColors.parameters = {
  ...AdaptiveColors.parameters,
  docs: {
    ...AdaptiveColors.parameters?.docs,
    source: {
      originalSource: "args => <div>\\n        <div style={{\\n    display: 'flex',\\n    flexFlow: 'row'\\n  }}>\\n            <DonutMeter {...args} segmentCount={0} useAdaptiveColors />\\n            <DonutMeter {...args} segmentCount={20} useAdaptiveColors />\\n            <DonutMeter {...args} segmentCount={40} useAdaptiveColors />\\n            <DonutMeter {...args} segmentCount={60} useAdaptiveColors />\\n            <DonutMeter {...args} segmentCount={80} useAdaptiveColors />\\n            <DonutMeter {...args} segmentCount={100} useAdaptiveColors />\\n        </div>\\n        <p>Color changing according to the fullness of the meter.</p>\\n    </div>",
      ...AdaptiveColors.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:9},endLoc:{col:49,line:9},startBody:{col:17,line:9},endBody:{col:49,line:9}},warning:{startLoc:{col:17,line:9},endLoc:{col:49,line:9},startBody:{col:17,line:9},endBody:{col:49,line:9}},danger:{startLoc:{col:17,line:9},endLoc:{col:49,line:9},startBody:{col:17,line:9},endBody:{col:49,line:9}},"adaptive-colors":{startLoc:{col:30,line:32},endLoc:{col:10,line:45},startBody:{col:30,line:32},endBody:{col:10,line:45}}}},layout:"centered"}},u=t=>(0,e.jsx)(o,{...t});u.displayName="Template";const p={segmentCount:16,totalCount:100,thickness:"3.5",donutWidth:"64px",title:"Meter title goes here",description:"Meter description goes here"},a=u.bind({});a.args=p;const F={...p,type:"warning"},d=u.bind({});d.args=F;const U={...p,type:"danger"},l=u.bind({});l.args=U;const s=t=>(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{display:"flex",flexFlow:"row"},children:[(0,e.jsx)(o,{...t,segmentCount:0,useAdaptiveColors:!0}),(0,e.jsx)(o,{...t,segmentCount:20,useAdaptiveColors:!0}),(0,e.jsx)(o,{...t,segmentCount:40,useAdaptiveColors:!0}),(0,e.jsx)(o,{...t,segmentCount:60,useAdaptiveColors:!0}),(0,e.jsx)(o,{...t,segmentCount:80,useAdaptiveColors:!0}),(0,e.jsx)(o,{...t,segmentCount:100,useAdaptiveColors:!0})]}),(0,e.jsx)("p",{children:"Color changing according to the fullness of the meter."})]});s.displayName="AdaptiveColors",s.args={...p},a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:"args => <DonutMeter {...args} />",...(j=(h=a.parameters)==null?void 0:h.docs)==null?void 0:j.source}}},d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:"args => <DonutMeter {...args} />",...(T=(W=d.parameters)==null?void 0:W.docs)==null?void 0:T.source}}},l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:"args => <DonutMeter {...args} />",...(w=(L=l.parameters)==null?void 0:L.docs)==null?void 0:w.source}}},s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`args => <div>
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
    </div>`,...(P=(E=s.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};const $=["_Default","Warning","Danger","AdaptiveColors"];try{s.displayName="AdaptiveColors",s.__docgenInfo={description:"",displayName:"AdaptiveColors",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/donut-meter/stories/index.stories.tsx#AdaptiveColors"]={docgenInfo:s.__docgenInfo,name:"AdaptiveColors",path:"../components/components/donut-meter/stories/index.stories.tsx#AdaptiveColors"})}catch(t){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/donut-meter/style.scss":(A,i,n)=>{n.d(i,{Z:()=>M});var f=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=n.n(f),m=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=n.n(m),r=c()(g());r.push([A.id,".donut-meter .donut-meter-segment{stroke:var(--jp-green)}.donut-meter.is-warning .donut-meter-segment{stroke:var(--jp-yellow-10)}.donut-meter.is-danger .donut-meter-segment{stroke:var(--jp-red)}",""]);const M=r}}]);})();
