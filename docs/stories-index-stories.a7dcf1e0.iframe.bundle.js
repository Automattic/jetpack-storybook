(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6581],{"../../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../social-logos/src/css/example.css":((l,r,e)=>{"use strict";e.d(r,{A:()=>d});var a=e("../../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(a),i=e("../../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),o=e.n(i),t=o()(c());t.push([l.id,`.social-logos-example {
	max-width: 900px;
	margin: 100px auto;
	color: #767676;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	line-height: 1.15;

	a:link,
	a:visited {
		color: #999;
	}

	a:active {
		color: #1fc1ad;
	}

	h1 {
		text-align: center;
		font-size: 24pt;
	}

	[type="checkbox"] {
		margin: 0;
	}

	.icons {
		padding: 0 20px;
		overflow: hidden;
		margin-bottom: 50px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		div {
			width: 64px;
			height: 64px;
			float: left;
			padding: 6px 2px;
			position: relative;
			font-size: 7pt;
			cursor: pointer;
			text-align: center;

			p {
				margin: 0;
				color: #767676;
				text-align: center;
				overflow: hidden;
				max-height: 2.2em;
				word-break: break-word;

				.is-hidden {
					display: none;
				}
			}

			div:hover svg {
				fill: #1fc1ad;
			}
		}
	}

	.display-control-group {
		display: flex;
		justify-content: space-around;
		margin-bottom: 20px;
	}

	.display-control {
		display: flex;

		h4 {
			margin: 0 10px 0 0;
		}
	}

	.switch {
		position: relative;
		display: inline-block;
		width: 40px;
		height: 20px;

		input {
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
		}
	}

	.handle {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border: 2px solid #808080;
		border-radius: 10px;
		transition: 0.4s;
		box-sizing: border-box;
	}

	.handle::before {
		position: absolute;
		content: "";
		height: 12px;
		width: 12px;
		left: 2px;
		bottom: 2px;
		background: #808080;
		border-radius: 50%;
		transition: 0.4s;
	}

	input:checked + .handle {
		border-color: #3aa662;
	}

	input:checked + .handle::before {
		background: #3aa662;
		transform: translateX(20px);
	}

	input:focus + .handle {
		box-shadow: 0 0 3px #2196f3;
	}


	> p {
		text-align: center;
		margin-bottom: 2em;
	}

}
`,""]);const d=t}),"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js":((l,r,e)=>{"use strict";var a=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function c(){}function i(){}i.resetWarningCache=c,l.exports=function(){function o(v,T,E,A,I,j){if(j!==a){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}o.isRequired=o;function t(){return o}var d={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:t,element:o,elementType:o,instanceOf:t,node:o,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:c};return d.PropTypes=d,d}}),"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":((l,r,e)=>{if(0)var a,c;else l.exports=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()}),"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":(l=>{"use strict";var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";l.exports=r}),"../social-logos/src/react/stories/index.stories.jsx":((l,r,e)=>{"use strict";e.r(r),e.d(r,{_All:()=>h,__namedExportsOrder:()=>L,_default:()=>_,default:()=>R});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../social-logos/src/react/social-logo.tsx"),i=e("../social-logos/src/react/social-logo-data.tsx"),o=e("../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(o),d=e("../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js"),v=e.n(d),T=e("../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js"),E=e.n(T),A=e("../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),I=e.n(A),j=e("../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js"),x=e.n(j),O=e("../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js"),k=e.n(O),y=e("../../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../social-logos/src/css/example.css"),p={};p.styleTagTransform=k(),p.setAttributes=I(),p.insert=E().bind(null,"head"),p.domAPI=v(),p.insertStyleElement=x();var B=t()(y.A,p);const M=y.A&&y.A.locals?y.A.locals:void 0;var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function P({name:n,iconSize:m,showIconNames:f}){const S=(0,a.useCallback)(()=>{const b=`<SocialLogo icon="${n}" size="${m}" />`;window.prompt("Copy component code:",b)},[m,n]);return(0,s.jsxs)("div",{children:[(0,s.jsx)(c.d,{icon:n,size:m,onClick:S}),f&&(0,s.jsx)("p",{children:n})]},n)}function g(){const[n,m]=(0,a.useState)(!1),[f,S]=(0,a.useState)(!0),b=n?24:48,N=(0,a.useCallback)(u=>{m(u.target.checked)},[m]),D=(0,a.useCallback)(u=>{S(u.target.checked)},[S]),W=i.$.map(u=>(0,s.jsx)(P,{name:u.name,iconSize:b,showIconNames:f},u.name));return(0,s.jsxs)("div",{className:"social-logos-example",children:[(0,s.jsx)("h1",{children:"Social Logos"}),(0,s.jsxs)("div",{className:"display-control-group",children:[(0,s.jsxs)("div",{className:"display-control",children:[(0,s.jsx)("h4",{children:"Small icons"}),(0,s.jsxs)("label",{className:"switch",htmlFor:"useSmallIcons",children:[(0,s.jsx)("input",{id:"useSmallIcons",type:"checkbox",onChange:N,checked:n}),(0,s.jsx)("span",{className:"handle"})]})]}),(0,s.jsxs)("div",{className:"display-control",children:[(0,s.jsx)("h4",{children:"Icon names"}),(0,s.jsxs)("label",{className:"switch",htmlFor:"showIconNames",children:[(0,s.jsx)("input",{id:"showIconNames",type:"checkbox",onChange:D,checked:f}),(0,s.jsx)("span",{className:"handle"}),(0,s.jsx)("span",{className:"switch-label","data-on":"On","data-off":"Off"})]})]})]}),(0,s.jsx)("div",{className:"icons",children:W}),(0,s.jsx)("p",{children:(0,s.jsx)("a",{href:"https://github.com/Automattic/social-logos",children:"GitHub"})})]})}const w=g;try{g.displayName="SocialLogosExample",g.__docgenInfo={description:"An example React component that displays all the social logos.",displayName:"SocialLogosExample",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../social-logos/src/react/example.tsx#SocialLogosExample"]={docgenInfo:g.__docgenInfo,name:"SocialLogosExample",path:"../social-logos/src/react/example.tsx#SocialLogosExample"})}catch{}var C=e("../social-logos/src/react/index.ts");const R={title:"JS Packages/Social Logos/Icons"},_=()=>(0,s.jsx)(C.Ay,{icon:"wordpress"}),h=()=>(0,s.jsx)(w,{}),L=["_default","_All"];_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <SocialLogo icon="wordpress" />;
}`,..._.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <SocialLogoExamples />;
}`,...h.parameters?.docs?.source}}}})}]);
