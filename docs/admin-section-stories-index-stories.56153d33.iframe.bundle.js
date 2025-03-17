"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2945],{"../components/components/admin-section/stories/index.stories.tsx":(m,d,n)=>{n.r(d),n.d(d,{__namedExportsOrder:()=>C,_default:()=>u,default:()=>A,onlyBasic:()=>i,onlyHero:()=>l});var c=n("../components/components/admin-page/index.tsx"),o=n("../components/components/layout/col/index.tsx"),t=n("../components/components/layout/container/index.tsx"),a=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=n.n(s),j=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-section/basic/style.module.scss"),p={};p.insert="head",p.singleton=!1;var y=_()(j.A,p);const S=j.A.locals||{};var e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=({children:r})=>(0,e.jsx)("div",{className:S.section,children:r});var x=n("../components/components/admin-section/hero/index.tsx"),g=`import AdminPage from '../../admin-page/index.js';
import Col from '../../layout/col/index.js';
import Container from '../../layout/container/index.js';
import AdminSection from '../basic/index.js';
import AdminSectionHero from '../hero/index.js';
import type { StoryFn, Meta } from '@storybook/react';

const meta: Meta< typeof AdminSection > = {
	title: 'JS Packages/Components/Admin Sections',
};

export default meta;

// Export additional stories using pre-defined values
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template: StoryFn< typeof AdminSection > = args => (
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
`,P={_default:{startLoc:{col:17,line:14},endLoc:{col:2,line:42},startBody:{col:17,line:14},endBody:{col:2,line:42}},onlyBasic:{startLoc:{col:25,line:48},endLoc:{col:2,line:61},startBody:{col:25,line:48},endBody:{col:2,line:61}},onlyHero:{startLoc:{col:24,line:64},endLoc:{col:2,line:77},startBody:{col:24,line:64},endBody:{col:2,line:77}}};const A={parameters:{storySource:{source:`import AdminPage from '../../admin-page/index.js';
import Col from '../../layout/col/index.js';
import Container from '../../layout/container/index.js';
import AdminSection from '../basic/index.js';
import AdminSectionHero from '../hero/index.js';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const meta = {
  title: 'JS Packages/Components/Admin Sections'
};
export default meta;

// Export additional stories using pre-defined values

const Template = args => /*#__PURE__*/_jsxs(AdminPage, {
  children: [/*#__PURE__*/_jsx(AdminSectionHero, {
    children: /*#__PURE__*/_jsx(Container, {
      children: /*#__PURE__*/_jsxs(Col, {
        lg: 12,
        md: 8,
        sm: 4,
        children: [/*#__PURE__*/_jsx("h1", {
          children: "Sample Hero section"
        }), /*#__PURE__*/_jsx("p", {
          children: "This is a sample Hero section"
        })]
      })
    })
  }), /*#__PURE__*/_jsx(AdminSection, {
    children: /*#__PURE__*/_jsx(Container, {
      children: /*#__PURE__*/_jsxs(Col, {
        lg: 12,
        md: 8,
        sm: 4,
        children: [/*#__PURE__*/_jsx("h2", {
          children: "Sample Section"
        }), /*#__PURE__*/_jsx("p", {
          children: "This is a sample section"
        })]
      })
    })
  })]
});

// Export Default story
export const _default = Template.bind({});


export const onlyBasic = args => /*#__PURE__*/_jsx(AdminSection, {
  children: /*#__PURE__*/_jsx(Container, {
    children: /*#__PURE__*/_jsxs(Col, {
      lg: 12,
      md: 8,
      sm: 4,
      children: [/*#__PURE__*/_jsx("h2", {
        children: "Sample Section"
      }), /*#__PURE__*/_jsx("p", {
        children: "This is a sample section"
      })]
    })
  })
});


export const onlyHero = args => /*#__PURE__*/_jsx(AdminSectionHero, {
  children: /*#__PURE__*/_jsx(Container, {
    children: /*#__PURE__*/_jsxs(Col, {
      lg: 12,
      md: 8,
      sm: 4,
      children: [/*#__PURE__*/_jsx("h2", {
        children: "Sample Hero Section"
      }), /*#__PURE__*/_jsx("p", {
        children: "This is a sample Hero section"
      })]
    })
  })
});`,locationsMap:{default:{startLoc:{col:17,line:14},endLoc:{col:2,line:42},startBody:{col:17,line:14},endBody:{col:2,line:42}},"only-basic":{startLoc:{col:25,line:48},endLoc:{col:2,line:61},startBody:{col:25,line:48},endBody:{col:2,line:61}},"only-hero":{startLoc:{col:24,line:64},endLoc:{col:2,line:77},startBody:{col:24,line:64},endBody:{col:2,line:77}}}}},title:"JS Packages/Components/Admin Sections"},u=(r=>(0,e.jsxs)(c.A,{children:[(0,e.jsx)(x.A,{children:(0,e.jsx)(t.A,{children:(0,e.jsxs)(o.A,{lg:12,md:8,sm:4,children:[(0,e.jsx)("h1",{children:"Sample Hero section"}),(0,e.jsx)("p",{children:"This is a sample Hero section"})]})})}),(0,e.jsx)(h,{children:(0,e.jsx)(t.A,{children:(0,e.jsxs)(o.A,{lg:12,md:8,sm:4,children:[(0,e.jsx)("h2",{children:"Sample Section"}),(0,e.jsx)("p",{children:"This is a sample section"})]})})})]})).bind({}),i=r=>(0,e.jsx)(h,{children:(0,e.jsx)(t.A,{children:(0,e.jsxs)(o.A,{lg:12,md:8,sm:4,children:[(0,e.jsx)("h2",{children:"Sample Section"}),(0,e.jsx)("p",{children:"This is a sample section"})]})})}),l=r=>(0,e.jsx)(x.A,{children:(0,e.jsx)(t.A,{children:(0,e.jsxs)(o.A,{lg:12,md:8,sm:4,children:[(0,e.jsx)("h2",{children:"Sample Hero Section"}),(0,e.jsx)("p",{children:"This is a sample Hero section"})]})})}),C=["_default","onlyBasic","onlyHero"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <AdminPage>
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
    </AdminPage>`,...u.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <AdminSection>
        <Container>
            <Col lg={12} md={8} sm={4}>
                <h2>Sample Section</h2>
                <p>This is a sample section</p>
            </Col>
        </Container>
    </AdminSection>`,...i.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <AdminSectionHero>
        <Container>
            <Col lg={12} md={8} sm={4}>
                <h2>Sample Hero Section</h2>
                <p>This is a sample Hero section</p>
            </Col>
        </Container>
    </AdminSectionHero>`,...l.parameters?.docs?.source}}};try{i.displayName="onlyBasic",i.__docgenInfo={description:"",displayName:"onlyBasic",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/admin-section/stories/index.stories.tsx#onlyBasic"]={docgenInfo:i.__docgenInfo,name:"onlyBasic",path:"../components/components/admin-section/stories/index.stories.tsx#onlyBasic"})}catch{}try{l.displayName="onlyHero",l.__docgenInfo={description:"",displayName:"onlyHero",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/admin-section/stories/index.stories.tsx#onlyHero"]={docgenInfo:l.__docgenInfo,name:"onlyHero",path:"../components/components/admin-section/stories/index.stories.tsx#onlyHero"})}catch{}},"../components/components/admin-section/hero/index.tsx":(m,d,n)=>{n.d(d,{A:()=>S});var c=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=n.n(o),a=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-section/hero/style.module.scss"),s={};s.insert="head",s.singleton=!1;var _=t()(a.A,s);const j=a.A.locals||{};var p=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const S=({children:e})=>(0,p.jsx)("div",{className:j["section-hero"],children:e})},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-section/basic/style.module.scss":(m,d,n)=>{n.d(d,{A:()=>_});var c=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=n.n(c),t=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=n.n(t),s=a()(o());s.push([m.id,".Okcw76oAYzvzDKkq0Cg9{background-color:var(--jp-white)}",""]),s.locals={section:"Okcw76oAYzvzDKkq0Cg9"};const _=s},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-section/hero/style.module.scss":(m,d,n)=>{n.d(d,{A:()=>_});var c=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=n.n(c),t=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=n.n(t),s=a()(o());s.push([m.id,".s92r0DN4OmNZtdFlz9yh{padding-top:1px;background:var(--jp-white-off)}",""]),s.locals={"section-hero":"s92r0DN4OmNZtdFlz9yh"};const _=s}}]);
