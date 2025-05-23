"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7801],{"../../packages/my-jetpack/_inc/components/stats-section/stories/index.stories.js":(A,g,n)=>{n.r(g),n.d(g,{Default:()=>p,__namedExportsOrder:()=>q,default:()=>J});var S=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),b=n("../../../node_modules/.pnpm/react-router-dom@6.30.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-router-dom/dist/index.js"),y=n("../../../node_modules/.pnpm/react-router@6.30.0_react@18.3.1/node_modules/react-router/dist/index.js"),c=n("../../../node_modules/.pnpm/@wordpress+i18n@5.24.0/node_modules/@wordpress/i18n/build-module/index.js"),l=n("../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),w=n("../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/people.js"),L=n("../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/star-empty.js"),H=n("../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/comment-content.js"),T=n("../number-formatters/src/index.ts");const V={maximumFractionDigits:1,notation:"compact"},_=(e,t=V)=>e===null||!Number.isFinite(e)?"-":(0,T.ZV)(e,{numberFormatOptions:t});var B=n("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/card/card/component.js"),F=n("../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-down.js"),I=n("../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-up.js"),U=n("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),z=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),f=n.n(z),W=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Y=n.n(W),P=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../packages/my-jetpack/_inc/components/stats-section/style.module.scss"),R={};R.insert="head",R.singleton=!1;var se=Y()(P.A,R);const r=P.A.locals||{};var s=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const Q=(e,t)=>typeof e!="number"||typeof t!="number"?null:e-t,K=(e,t)=>{if(typeof e!="number"||typeof t!="number")return null;if(e===0&&t===0)return 0;const a=e/t*100;return Math.abs(a)===1/0?100:Math.round(a)},k=({count:e=0,previousCount:t=0,as:a="div",icon:i,heading:o,srText:u})=>{const d=Q(e,t),C=Math.abs(d),D=Number.isFinite(d)?K(C,t):null;return(0,s.jsxs)(B.A,{className:r["stats-card"],as:a,children:[(0,s.jsx)("span",{className:"screen-reader-text",children:u}),(0,s.jsxs)("div",{"aria-hidden":"true",children:[i&&(0,s.jsx)("div",{className:r["stats-card-icon"],children:i}),o&&(0,s.jsx)("div",{className:r["stats-card-heading"],children:o}),(0,s.jsxs)("div",{className:r["stats-card-count"],children:[(0,s.jsx)("span",{className:r["stats-card-count-value"],title:Number.isFinite(e)?String(e):void 0,children:_(e)}),d!==null?(0,s.jsxs)("span",{className:(0,U.A)(r["stats-card-difference"],{[r["stats-card-difference--positive"]]:d<0,[r["stats-card-difference--negative"]]:d>0}),children:[(0,s.jsxs)("span",{className:r["stats-card-difference-icon"],title:String(d),children:[d<0&&(0,s.jsx)(l.A,{size:18,icon:F.A}),d>0&&(0,s.jsx)(l.A,{size:18,icon:I.A})]}),(0,s.jsx)("span",{className:r["stats-card-difference-absolute-value"],children:C>9999?_(C):_(C,{})}),D!==null&&(0,s.jsxs)("span",{className:r["stats-card-difference-absolute-percentage"],children:["(",D,"%)"]})]}):null]})]})]})};k.propTypes={count:f().number,heading:f().node,icon:f().node,previousCount:f().number,srText:f().string};const h=k;k.__docgenInfo={description:`CountComparisonCard component.

@param {object}          props               - Component props.
@param {number}          props.count         - Current count.
@param {number}          props.previousCount - Previous count.
@param {React.ReactNode} props.icon          - Icon to display.
@param {React.ReactNode} props.heading       - Card heading.
@param {string}          props.as            - Card root element type.
@param {string}          props.srText        - Text for screen readers.
@return {object} CountComparisonCard React component.`,methods:[],displayName:"CountComparisonCard",props:{count:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},previousCount:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},as:{defaultValue:{value:"'div'",computed:!1},required:!1},heading:{description:"",type:{name:"node"},required:!1},icon:{description:"",type:{name:"node"},required:!1},srText:{description:"",type:{name:"string"},required:!1}}};const X={style:"percent"},N=(e,t=X)=>e===null||!Number.isFinite(e)?"-":(t.style="percent",(0,T.ZV)(e,{numberFormatOptions:t})),j=c.__,Z=(e,t,a)=>{if(typeof t!="number"||typeof a!="number")return"";const i=t-a;if(i===0)return j("No change since the previous period.","jetpack-my-jetpack");const o=e(Math.abs(i)),u=(0,c.sprintf)(o,_(Math.abs(i))),d=a!==0?Math.abs(i/a):null;return d?i>0?(0,c.sprintf)(j("An increase of %1$s or %2$s since the previous period.","jetpack-my-jetpack"),u,N(d)):(0,c.sprintf)(j("A decrease of %1$s or %2$s since the previous period.","jetpack-my-jetpack"),u,N(d)):i>0?(0,c.sprintf)(j("An increase of %s since the previous period.","jetpack-my-jetpack"),u):(0,c.sprintf)(j("A decrease of %s since the previous period.","jetpack-my-jetpack"),u)};var E=n("../../../node_modules/.pnpm/@wordpress+primitives@4.24.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");const $=(0,s.jsx)(E.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(E.wA,{d:"m4 13 .67.336.003-.005a2.42 2.42 0 0 1 .094-.17c.071-.122.18-.302.329-.52.298-.435.749-1.017 1.359-1.598C7.673 9.883 9.498 8.75 12 8.75s4.326 1.132 5.545 2.293c.61.581 1.061 1.163 1.36 1.599a8.29 8.29 0 0 1 .422.689l.002.005L20 13l.67-.336v-.003l-.003-.005-.008-.015-.028-.052a9.752 9.752 0 0 0-.489-.794 11.6 11.6 0 0 0-1.562-1.838C17.174 8.617 14.998 7.25 12 7.25S6.827 8.618 5.42 9.957c-.702.669-1.22 1.337-1.563 1.839a9.77 9.77 0 0 0-.516.845l-.008.015-.002.005-.001.002v.001L4 13Zm8 3a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"})}),m=c.__,x=c._n,v=(e,t,a)=>{if(typeof t!="number")return"";const i=[],o=(0,c.sprintf)(e(t),_(t));return i.push(o.endsWith(".")?o:`${o}.`),i.push(Z(e,t,a)),i.filter(Boolean).join(" ")},M=({counts:e,previousCounts:t,headingLevel:a})=>{const i=`h${a>=1&&a<=6?a:3}`;return(0,s.jsxs)("div",{className:r["section-stats-highlights"],children:[(0,s.jsxs)(i,{className:r["section-title"],children:[(0,s.jsx)("span",{children:m("7-day highlights","jetpack-my-jetpack")}),(0,s.jsx)("small",{className:r["section-description"],children:m("Compared to previous period","jetpack-my-jetpack")})]}),(0,s.jsxs)("ul",{className:r["cards-list"],children:[(0,s.jsx)(h,{heading:m("Views","jetpack-my-jetpack"),srText:v(o=>x("%s view","%s views",o,"jetpack-my-jetpack"),e?.views,t?.views),icon:(0,s.jsx)(l.A,{icon:$}),count:e?.views,previousCount:t?.views,as:"li"}),(0,s.jsx)(h,{heading:m("Visitors","jetpack-my-jetpack"),srText:v(o=>x("%s visitor","%s visitors",o,"jetpack-my-jetpack"),e?.visitors,t?.visitors),icon:(0,s.jsx)(l.A,{icon:w.A}),count:e?.visitors,previousCount:t?.visitors,as:"li"}),(0,s.jsx)(h,{heading:m("Likes","jetpack-my-jetpack"),srText:v(o=>x("%s like","%s likes",o,"jetpack-my-jetpack"),e?.likes,t?.likes),icon:(0,s.jsx)(l.A,{icon:L.A}),count:e?.likes,previousCount:t?.likes,as:"li"}),(0,s.jsx)(h,{heading:m("Comments","jetpack-my-jetpack"),srText:v(o=>x("%s comment","%s comments",o,"jetpack-my-jetpack"),e?.comments,t?.comments),icon:(0,s.jsx)(l.A,{icon:H.A}),count:e?.comments,previousCount:t?.comments,as:"li"})]})]})},O=M;M.__docgenInfo={description:`Stats cards component.

@param {object} props                - Component props.
@param {object} props.counts         - Counts object for the current period.
@param {object} props.previousCounts - Counts object for the previous period.
@param {number} props.headingLevel   - Heading level between 1 and 6.

@return {object} StatsCards React component.`,methods:[],displayName:"StatsCards"};var re=`import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import StatsCards from '../cards.jsx';

export default {
	title: 'Packages/My Jetpack/Stats Cards',
	component: StatsCards,
};

const DefaultArgs = {
	counts: {
		views: 4652,
		visitors: 1500,
		likes: 107,
		comments: 32,
	},
	previousCounts: {
		views: 3749,
		visitors: 1200,
		likes: 111,
		comments: 34,
	},
};

const Template = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <StatsCards { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const Default = Template.bind( {} );
Default.parameters = {};
Default.args = DefaultArgs;
`,ae={Default:{startLoc:{col:17,line:23},endLoc:{col:2,line:32},startBody:{col:17,line:23},endBody:{col:2,line:32}}};const J={parameters:{storySource:{source:`import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import StatsCards from '../cards.jsx';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'Packages/My Jetpack/Stats Cards',
  component: StatsCards
};
const DefaultArgs = {
  counts: {
    views: 4652,
    visitors: 1500,
    likes: 107,
    comments: 32
  },
  previousCounts: {
    views: 3749,
    visitors: 1200,
    likes: 111,
    comments: 34
  }
};
const Template = args => /*#__PURE__*/_jsx(HashRouter, {
  children: /*#__PURE__*/_jsx(Routes, {
    children: /*#__PURE__*/_jsx(Route, {
      path: "/",
      element: /*#__PURE__*/_jsx(StatsCards, {
        ...args
      })
    })
  })
});
export const Default = Template.bind({});
Default.parameters = {};
Default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:17,line:23},endLoc:{col:2,line:32},startBody:{col:17,line:23},endBody:{col:2,line:32}}}}},title:"Packages/My Jetpack/Stats Cards",component:O},G={counts:{views:4652,visitors:1500,likes:107,comments:32},previousCounts:{views:3749,visitors:1200,likes:111,comments:34}},p=(e=>(0,s.jsx)(b.I9,{children:(0,s.jsx)(y.BV,{children:(0,s.jsx)(y.qh,{path:"/",element:(0,s.jsx)(O,{...e})})})})).bind({});p.parameters={},p.args=G;const q=["Default"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<StatsCards {...args} />} />
        </Routes>
    </HashRouter>`,...p.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../packages/my-jetpack/_inc/components/stats-section/style.module.scss":(A,g,n)=>{n.d(g,{A:()=>w});var S=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=n.n(S),y=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=n.n(y),l=c()(b());l.push([A.id,'.rM3I6fVt7jHFUF8W0ksT{margin-top:1rem}.gDHmrGgA67PjRjXbMQMC{display:flex;align-items:center;font-weight:500;margin-bottom:.5rem;margin-top:0;font-size:var(--font-title-small);line-height:1.5}.l3iCryyPuzb38BiCeEeA{margin-left:.75rem;font-family:"SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-weight:400;font-size:var(--font-body-small);color:var(--jp-gray-60);line-height:20px;letter-spacing:-0.15px}.hCLpVul0H7zR0oA9C2Lc{display:flex;flex-flow:row nowrap;max-width:100%;overflow-x:scroll;scrollbar-width:none;padding:1px}.hCLpVul0H7zR0oA9C2Lc::-webkit-scrollbar{display:none}.hCLpVul0H7zR0oA9C2Lc .TcbgjMmANYV3g9TPyySw{border-color:var(--jp-gray-5);border-radius:5px;width:100%;min-width:180px;padding:1rem 1.5rem;margin-bottom:0;margin-right:1.5rem}@media only screen and (min-width: 960px){.hCLpVul0H7zR0oA9C2Lc .TcbgjMmANYV3g9TPyySw{min-width:220px}}.hCLpVul0H7zR0oA9C2Lc .TcbgjMmANYV3g9TPyySw:last-child{margin-right:0}.VF7c9WgP7E4uyVr8QT6v{margin-bottom:1.5rem}.wffu3sEHUsUC9lOPoa6a{font-weight:500;line-height:20px;margin-bottom:.25rem}.RYYxeCdq6RpPgIOSQYBl{align-items:flex-end;display:flex;flex-wrap:wrap;font-size:36px;font-weight:400;line-height:40px}.RYYxeCdq6RpPgIOSQYBl.O9NDioEL2XFa8CUD1URj{cursor:pointer}.cLl9B0PpT77RBApLZuwU{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif;line-height:1;margin-right:.5rem}.EFR_COe1i9N4rQHw7EKv{display:none;font-size:var(--font-body-small);font-weight:600;line-height:24px;color:var(--jp-gray-20);fill:var(--jp-gray-20)}@media screen and (min-width: 960px){.EFR_COe1i9N4rQHw7EKv{display:flex;align-items:center}}.EFR_COe1i9N4rQHw7EKv.h6zNOW5QNSWOFOCZo3Vo{color:var(--jp-red-50);fill:var(--jp-red-50)}.EFR_COe1i9N4rQHw7EKv.xtYrr7f4lTW9LygsAcHs{color:var(--jp-green-50);fill:var(--jp-green-50)}.mC7IaXYMWjzeoHJhrIA1{display:flex;align-content:flex-end}.nMtCI81_vPBKnBrBMXvV{margin-right:2px}._PuCPppwFtLlH9V3_cld{display:flex;align-items:center;justify-content:space-between;width:100%;margin-top:calc(var(--spacing-base)*2.5);min-height:28px;flex-wrap:wrap}',""]),l.locals={"section-stats-highlights":"rM3I6fVt7jHFUF8W0ksT","section-title":"gDHmrGgA67PjRjXbMQMC","section-description":"l3iCryyPuzb38BiCeEeA","cards-list":"hCLpVul0H7zR0oA9C2Lc","stats-card":"TcbgjMmANYV3g9TPyySw","stats-card-icon":"VF7c9WgP7E4uyVr8QT6v","stats-card-heading":"wffu3sEHUsUC9lOPoa6a","stats-card-count":"RYYxeCdq6RpPgIOSQYBl","is-pointer":"O9NDioEL2XFa8CUD1URj","stats-card-count-value":"cLl9B0PpT77RBApLZuwU","stats-card-difference":"EFR_COe1i9N4rQHw7EKv","stats-card-difference--positive":"h6zNOW5QNSWOFOCZo3Vo","stats-card-difference--negative":"xtYrr7f4lTW9LygsAcHs","stats-card-difference-icon":"mC7IaXYMWjzeoHJhrIA1","stats-card-difference-absolute-value":"nMtCI81_vPBKnBrBMXvV",actions:"_PuCPppwFtLlH9V3_cld"};const w=l}}]);
