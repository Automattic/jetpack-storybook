(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6191],{"../components/components/admin-section/stories/index.stories.tsx":(r,d,n)=>{var g,x,H,E,T,v,O,B,P;"use strict";n.r(d),n.d(d,{__namedExportsOrder:()=>L,_default:()=>h,default:()=>D,onlyBasic:()=>c,onlyHero:()=>m});var l=n("../components/components/admin-page/index.tsx"),a=n("../components/components/layout/col/index.tsx"),t=n("../components/components/layout/container/index.tsx"),i=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=n.n(s),p=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-section/basic/style.module.scss"),_={};_.insert="head",_.singleton=!1;var u=o()(p.Z,_);const C=p.Z.locals||{};var e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const y=S=>{let{children:M}=S;return(0,e.jsx)("div",{className:C.section,children:M})};y.displayName="AdminSection";const A=y;var j=n("../components/components/admin-section/hero/index.tsx"),b=`import AdminPage from '../../admin-page';
import Col from '../../layout/col';
import Container from '../../layout/container';
import AdminSection from '../basic';
import AdminSectionHero from '../hero';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Admin Sections',
} as ComponentMeta< typeof AdminSection >;

// Export additional stories using pre-defined values
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template: ComponentStory< typeof AdminSection > = args => (
	<AdminPage>
		<AdminSectionHero>
			<Container>
				<Col lg={ 12 } md={ 8 } sm={ 4 }>
					<h1>Sample Hero section</h1>
					<p>This is a sample Hero section</p>
				</Col>
			</Container>
		</AdminSectionHero>
		<AdminSection>
			<Container>
				<Col lg={ 12 } md={ 8 } sm={ 4 }>
					<h2>Sample Section</h2>
					<p>This is a sample section</p>
				</Col>
			</Container>
		</AdminSection>
	</AdminPage>
);

// Export Default story
export const _default = Template.bind( {} );

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const onlyBasic = args => (
	<AdminSection>
		<Container>
			<Col lg={ 12 } md={ 8 } sm={ 4 }>
				<h2>Sample Section</h2>
				<p>This is a sample section</p>
			</Col>
		</Container>
	</AdminSection>
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const onlyHero = args => (
	<AdminSectionHero>
		<Container>
			<Col lg={ 12 } md={ 8 } sm={ 4 }>
				<h2>Sample Hero Section</h2>
				<p>This is a sample Hero section</p>
			</Col>
		</Container>
	</AdminSectionHero>
);
`,R={_default:{startLoc:{col:54,line:13},endLoc:{col:16,line:30},startBody:{col:54,line:13},endBody:{col:16,line:30}},onlyBasic:{startLoc:{col:25,line:36},endLoc:{col:19,line:43},startBody:{col:25,line:36},endBody:{col:19,line:43}},onlyHero:{startLoc:{col:24,line:46},endLoc:{col:23,line:53},startBody:{col:24,line:46},endBody:{col:23,line:53}}};const D={parameters:{storySource:{source:`import AdminPage from '../../admin-page';
import Col from '../../layout/col';
import Container from '../../layout/container';
import AdminSection from '../basic';
import AdminSectionHero from '../hero';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'JS Packages/Components/Admin Sections'
} as ComponentMeta<typeof AdminSection>);

// Export additional stories using pre-defined values

const Template: ComponentStory<typeof AdminSection> = args => <AdminPage>
        <AdminSectionHero>
            <Container>
                <Col lg={12} md={8} sm={4}>
                    <h1>Sample Hero section</h1>
                    <p>This is a sample Hero section</p>
                </Col>
            </Container>
        </AdminSectionHero>
        <AdminSection>
            <Container>
                <Col lg={12} md={8} sm={4}>
                    <h2>Sample Section</h2>
                    <p>This is a sample section</p>
                </Col>
            </Container>
        </AdminSection>
    </AdminPage>;

// Export Default story
export const _default = Template.bind({});


export const onlyBasic = args => <AdminSection>
        <Container>
            <Col lg={12} md={8} sm={4}>
                <h2>Sample Section</h2>
                <p>This is a sample section</p>
            </Col>
        </Container>
    </AdminSection>;


export const onlyHero = args => <AdminSectionHero>
        <Container>
            <Col lg={12} md={8} sm={4}>
                <h2>Sample Hero Section</h2>
                <p>This is a sample Hero section</p>
            </Col>
        </Container>
    </AdminSectionHero>;
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <AdminPage>\\n        <AdminSectionHero>\\n            <Container>\\n                <Col lg={12} md={8} sm={4}>\\n                    <h1>Sample Hero section</h1>\\n                    <p>This is a sample Hero section</p>\\n                </Col>\\n            </Container>\\n        </AdminSectionHero>\\n        <AdminSection>\\n            <Container>\\n                <Col lg={12} md={8} sm={4}>\\n                    <h2>Sample Section</h2>\\n                    <p>This is a sample section</p>\\n                </Col>\\n            </Container>\\n        </AdminSection>\\n    </AdminPage>",
      ..._default.parameters?.docs?.source
    }
  }
};
onlyBasic.parameters = {
  ...onlyBasic.parameters,
  docs: {
    ...onlyBasic.parameters?.docs,
    source: {
      originalSource: "args => <AdminSection>\\n        <Container>\\n            <Col lg={12} md={8} sm={4}>\\n                <h2>Sample Section</h2>\\n                <p>This is a sample section</p>\\n            </Col>\\n        </Container>\\n    </AdminSection>",
      ...onlyBasic.parameters?.docs?.source
    }
  }
};
onlyHero.parameters = {
  ...onlyHero.parameters,
  docs: {
    ...onlyHero.parameters?.docs,
    source: {
      originalSource: "args => <AdminSectionHero>\\n        <Container>\\n            <Col lg={12} md={8} sm={4}>\\n                <h2>Sample Hero Section</h2>\\n                <p>This is a sample Hero section</p>\\n            </Col>\\n        </Container>\\n    </AdminSectionHero>",
      ...onlyHero.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:54,line:13},endLoc:{col:16,line:30},startBody:{col:54,line:13},endBody:{col:16,line:30}},"only-basic":{startLoc:{col:25,line:36},endLoc:{col:19,line:43},startBody:{col:25,line:36},endBody:{col:19,line:43}},"only-hero":{startLoc:{col:24,line:46},endLoc:{col:23,line:53},startBody:{col:24,line:46},endBody:{col:23,line:53}}}}},title:"JS Packages/Components/Admin Sections"},f=S=>(0,e.jsxs)(l.Z,{children:[(0,e.jsx)(j.Z,{children:(0,e.jsx)(t.Z,{children:(0,e.jsxs)(a.Z,{lg:12,md:8,sm:4,children:[(0,e.jsx)("h1",{children:"Sample Hero section"}),(0,e.jsx)("p",{children:"This is a sample Hero section"})]})})}),(0,e.jsx)(A,{children:(0,e.jsx)(t.Z,{children:(0,e.jsxs)(a.Z,{lg:12,md:8,sm:4,children:[(0,e.jsx)("h2",{children:"Sample Section"}),(0,e.jsx)("p",{children:"This is a sample section"})]})})})]});f.displayName="Template";const h=f.bind({}),c=S=>(0,e.jsx)(A,{children:(0,e.jsx)(t.Z,{children:(0,e.jsxs)(a.Z,{lg:12,md:8,sm:4,children:[(0,e.jsx)("h2",{children:"Sample Section"}),(0,e.jsx)("p",{children:"This is a sample section"})]})})});c.displayName="onlyBasic";const m=S=>(0,e.jsx)(j.Z,{children:(0,e.jsx)(t.Z,{children:(0,e.jsxs)(a.Z,{lg:12,md:8,sm:4,children:[(0,e.jsx)("h2",{children:"Sample Hero Section"}),(0,e.jsx)("p",{children:"This is a sample Hero section"})]})})});m.displayName="onlyHero",h.parameters={...h.parameters,docs:{...(g=h.parameters)==null?void 0:g.docs,source:{originalSource:`args => <AdminPage>
        <AdminSectionHero>
            <Container>
                <Col lg={12} md={8} sm={4}>
                    <h1>Sample Hero section</h1>
                    <p>This is a sample Hero section</p>
                </Col>
            </Container>
        </AdminSectionHero>
        <AdminSection>
            <Container>
                <Col lg={12} md={8} sm={4}>
                    <h2>Sample Section</h2>
                    <p>This is a sample section</p>
                </Col>
            </Container>
        </AdminSection>
    </AdminPage>`,...(H=(x=h.parameters)==null?void 0:x.docs)==null?void 0:H.source}}},c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`args => <AdminSection>
        <Container>
            <Col lg={12} md={8} sm={4}>
                <h2>Sample Section</h2>
                <p>This is a sample section</p>
            </Col>
        </Container>
    </AdminSection>`,...(v=(T=c.parameters)==null?void 0:T.docs)==null?void 0:v.source}}},m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`args => <AdminSectionHero>
        <Container>
            <Col lg={12} md={8} sm={4}>
                <h2>Sample Hero Section</h2>
                <p>This is a sample Hero section</p>
            </Col>
        </Container>
    </AdminSectionHero>`,...(P=(B=m.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const L=["_default","onlyBasic","onlyHero"];try{c.displayName="onlyBasic",c.__docgenInfo={description:"",displayName:"onlyBasic",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/admin-section/stories/index.stories.tsx#onlyBasic"]={docgenInfo:c.__docgenInfo,name:"onlyBasic",path:"../components/components/admin-section/stories/index.stories.tsx#onlyBasic"})}catch(S){}try{m.displayName="onlyHero",m.__docgenInfo={description:"",displayName:"onlyHero",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/admin-section/stories/index.stories.tsx#onlyHero"]={docgenInfo:m.__docgenInfo,name:"onlyHero",path:"../components/components/admin-section/stories/index.stories.tsx#onlyHero"})}catch(S){}},"../components/components/admin-section/hero/index.tsx":(r,d,n)=>{"use strict";n.d(d,{Z:()=>C});var l=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=n.n(a),i=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-section/hero/style.module.scss"),s={};s.insert="head",s.singleton=!1;var o=t()(i.Z,s);const p=i.Z.locals||{};var _=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const u=e=>{let{children:y}=e;return(0,_.jsx)("div",{className:p["section-hero"],children:y})};u.displayName="AdminSectionHero";const C=u},"../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js":(r,d)=>{var n,l;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var a={}.hasOwnProperty;function t(){for(var i=[],s=0;s<arguments.length;s++){var o=arguments[s];if(o){var p=typeof o;if(p==="string"||p==="number")i.push(o);else if(Array.isArray(o)){if(o.length){var _=t.apply(null,o);_&&i.push(_)}}else if(p==="object")if(o.toString===Object.prototype.toString)for(var u in o)a.call(o,u)&&o[u]&&i.push(u);else i.push(o.toString())}}return i.join(" ")}r.exports?(t.default=t,r.exports=t):(n=[],l=function(){return t}.apply(d,n),l!==void 0&&(r.exports=l))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-section/basic/style.module.scss":(r,d,n)=>{"use strict";n.d(d,{Z:()=>o});var l=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=n.n(l),t=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),i=n.n(t),s=i()(a());s.push([r.id,".Okcw76oAYzvzDKkq0Cg9{background-color:var(--jp-white)}",""]),s.locals={section:"Okcw76oAYzvzDKkq0Cg9"};const o=s},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-section/hero/style.module.scss":(r,d,n)=>{"use strict";n.d(d,{Z:()=>o});var l=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=n.n(l),t=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),i=n.n(t),s=i()(a());s.push([r.id,".s92r0DN4OmNZtdFlz9yh{background:var(--jp-white-off)}",""]),s.locals={"section-hero":"s92r0DN4OmNZtdFlz9yh"};const o=s}}]);})();
