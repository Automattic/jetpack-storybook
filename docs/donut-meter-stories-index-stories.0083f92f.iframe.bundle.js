"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2406],{"../components/components/donut-meter/stories/index.stories.tsx":(A,i,n)=>{var x,j,h,S,T,L,k,B,E,P,w,O;n.r(i),n.d(i,{AdaptiveColors:()=>s,Danger:()=>l,Warning:()=>d,_Default:()=>a,__namedExportsOrder:()=>U,default:()=>N});var f=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=n.n(m),c=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/donut-meter/style.scss"),r={};r.insert="head",r.singleton=!1;var y=g()(c.Z,r);const X=c.Z.locals||{};var e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const I=t=>t<70?"success":t<100?"warning":"danger",M=({className:t="",description:_="",donutWidth:W="64px",segmentCount:$,thickness:b="3.5",title:C="",totalCount:R,type:D,useAdaptiveColors:J})=>{const v=$/(R===0?1:R)*100,Y=typeof C=="string"&&C.length===0&&typeof _=="string"&&_.length===0?"true":"false",Z=`donut-meter ${t?t+" ":""}${D?"is-"+D+" ":""} ${!D&&J?"is-"+I(v)+" ":""}`.trim();return(0,e.jsx)("div",{className:Z,"aria-hidden":Y,"data-testid":"donut-meter",children:(0,e.jsxs)("svg",{width:W,height:W,viewBox:"0 0 40 40",className:"donut-meter_svg",role:"img",children:[(0,e.jsx)("title",{id:"donut-meter-title",children:C}),(0,e.jsx)("desc",{id:"donut-meter-description",children:_}),(0,e.jsx)("circle",{className:"donut-meter-hole",cx:"20",cy:"20",r:"15.91549430918954",fill:"transparent"}),(0,e.jsx)("circle",{className:"donut-meter-ring",cx:"20",cy:"20",r:"15.91549430918954",fill:"transparent",strokeWidth:b,stroke:"#ebebeb"}),(0,e.jsx)("circle",{className:"donut-meter-segment",cx:"20",cy:"20",r:"15.91549430918954",fill:"transparent","transform-origin":"center",strokeWidth:b,strokeDasharray:`${v} ${100-v}`,strokeDashoffset:"-25"})]})})};M.displayName="DonutMeter";const o=M;var H=`import DonutMeter, { DonutMeterProps } from '../index';

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
`,z={_Default:{startLoc:{col:17,line:11},endLoc:{col:51,line:11},startBody:{col:17,line:11},endBody:{col:51,line:11}},Warning:{startLoc:{col:17,line:11},endLoc:{col:51,line:11},startBody:{col:17,line:11},endBody:{col:51,line:11}},Danger:{startLoc:{col:17,line:11},endLoc:{col:51,line:11},startBody:{col:17,line:11},endBody:{col:51,line:11}},AdaptiveColors:{startLoc:{col:30,line:38},endLoc:{col:1,line:50},startBody:{col:30,line:38},endBody:{col:1,line:50}}};const N={title:"JS Packages/Components/DonutMeter",component:o,parameters:{storySource:{source:`import DonutMeter, { DonutMeterProps } from '../index';

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
`,locationsMap:{default:{startLoc:{col:17,line:11},endLoc:{col:51,line:11},startBody:{col:17,line:11},endBody:{col:51,line:11}},warning:{startLoc:{col:17,line:11},endLoc:{col:51,line:11},startBody:{col:17,line:11},endBody:{col:51,line:11}},danger:{startLoc:{col:17,line:11},endLoc:{col:51,line:11},startBody:{col:17,line:11},endBody:{col:51,line:11}},"adaptive-colors":{startLoc:{col:30,line:38},endLoc:{col:1,line:50},startBody:{col:30,line:38},endBody:{col:1,line:50}}}},layout:"centered"}},u=t=>(0,e.jsx)(o,{...t});u.displayName="Template";const p={segmentCount:16,totalCount:100,thickness:"3.5",donutWidth:"64px",title:"Meter title goes here",description:"Meter description goes here"},a=u.bind({});a.args=p;const K={...p,type:"warning"},d=u.bind({});d.args=K;const F={...p,type:"danger"},l=u.bind({});l.args=F;const s=t=>(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{display:"flex",flexFlow:"row"},children:[(0,e.jsx)(o,{...t,segmentCount:0,useAdaptiveColors:!0}),(0,e.jsx)(o,{...t,segmentCount:20,useAdaptiveColors:!0}),(0,e.jsx)(o,{...t,segmentCount:40,useAdaptiveColors:!0}),(0,e.jsx)(o,{...t,segmentCount:60,useAdaptiveColors:!0}),(0,e.jsx)(o,{...t,segmentCount:80,useAdaptiveColors:!0}),(0,e.jsx)(o,{...t,segmentCount:100,useAdaptiveColors:!0})]}),(0,e.jsx)("p",{children:"Color changing according to the fullness of the meter."})]});s.displayName="AdaptiveColors",s.args={...p},a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:"args => <DonutMeter {...args} />",...(h=(j=a.parameters)==null?void 0:j.docs)==null?void 0:h.source}}},d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:"args => <DonutMeter {...args} />",...(L=(T=d.parameters)==null?void 0:T.docs)==null?void 0:L.source}}},l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:"args => <DonutMeter {...args} />",...(E=(B=l.parameters)==null?void 0:B.docs)==null?void 0:E.source}}},s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`args => <div>
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
    </div>`,...(O=(w=s.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};const U=["_Default","Warning","Danger","AdaptiveColors"];try{s.displayName="AdaptiveColors",s.__docgenInfo={description:"",displayName:"AdaptiveColors",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/donut-meter/stories/index.stories.tsx#AdaptiveColors"]={docgenInfo:s.__docgenInfo,name:"AdaptiveColors",path:"../components/components/donut-meter/stories/index.stories.tsx#AdaptiveColors"})}catch(t){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/donut-meter/style.scss":(A,i,n)=>{n.d(i,{Z:()=>y});var f=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=n.n(f),g=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=n.n(g),r=c()(m());r.push([A.id,".donut-meter .donut-meter-segment{stroke:var(--jp-green)}.donut-meter.is-warning .donut-meter-segment{stroke:var(--jp-yellow-10)}.donut-meter.is-danger .donut-meter-segment{stroke:var(--jp-red)}",""]);const y=r}}]);})();
