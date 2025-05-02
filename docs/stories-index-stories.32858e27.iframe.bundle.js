(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6581],{"../social-logos/src/react/stories/index.stories.jsx":(d,a,o)=>{"use strict";o.r(a),o.d(a,{_All:()=>A,__namedExportsOrder:()=>R,_default:()=>b,default:()=>O});var n=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=o("../social-logos/src/react/social-logo.tsx"),s=o("../social-logos/src/react/social-logo-data.tsx"),e=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=o.n(e),i=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),p=o.n(i),c=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),f=o.n(c),h=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),y=o.n(h),u=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=o.n(u),x=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),k=o.n(x),T=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../social-logos/src/css/example.css"),g={};g.styleTagTransform=k(),g.setAttributes=y(),g.insert=f().bind(null,"head"),g.domAPI=p(),g.insertStyleElement=m();var D=t()(T.A,g);const W=T.A&&T.A.locals?T.A.locals:void 0;var l=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function C({name:_,iconSize:S,showIconNames:E}){const j=(0,n.useCallback)(()=>{const L=`<SocialLogo icon="${_}" size="${S}" />`;window.prompt("Copy component code:",L)},[S,_]);return(0,l.jsxs)("div",{children:[(0,l.jsx)(r.d,{icon:_,size:S,onClick:j}),E&&(0,l.jsx)("p",{children:_})]},_)}function I(){const[_,S]=(0,n.useState)(!1),[E,j]=(0,n.useState)(!0),L=_?24:48,N=(0,n.useCallback)(v=>{S(v.target.checked)},[S]),M=(0,n.useCallback)(v=>{j(v.target.checked)},[j]),B=s.$.map(v=>(0,l.jsx)(C,{name:v.name,iconSize:L,showIconNames:E},v.name));return(0,l.jsxs)("div",{className:"social-logos-example",children:[(0,l.jsx)("h1",{children:"Social Logos"}),(0,l.jsxs)("div",{className:"display-control-group",children:[(0,l.jsxs)("div",{className:"display-control",children:[(0,l.jsx)("h4",{children:"Small icons"}),(0,l.jsxs)("label",{className:"switch",htmlFor:"useSmallIcons",children:[(0,l.jsx)("input",{id:"useSmallIcons",type:"checkbox",onChange:N,checked:_}),(0,l.jsx)("span",{className:"handle"})]})]}),(0,l.jsxs)("div",{className:"display-control",children:[(0,l.jsx)("h4",{children:"Icon names"}),(0,l.jsxs)("label",{className:"switch",htmlFor:"showIconNames",children:[(0,l.jsx)("input",{id:"showIconNames",type:"checkbox",onChange:M,checked:E}),(0,l.jsx)("span",{className:"handle"}),(0,l.jsx)("span",{className:"switch-label","data-on":"On","data-off":"Off"})]})]})]}),(0,l.jsx)("div",{className:"icons",children:B}),(0,l.jsx)("p",{children:(0,l.jsx)("a",{href:"https://github.com/Automattic/social-logos",children:"GitHub"})})]})}const P=I;try{I.displayName="SocialLogosExample",I.__docgenInfo={description:"An example React component that displays all the social logos.",displayName:"SocialLogosExample",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../social-logos/src/react/example.tsx#SocialLogosExample"]={docgenInfo:I.__docgenInfo,name:"SocialLogosExample",path:"../social-logos/src/react/example.tsx#SocialLogosExample"})}catch{}var w=o("../social-logos/src/react/index.ts"),U=`/**
 * Internal dependencies
 */
import SocialLogoExamples from '../example';
import SocialLogo from '../index';
// the default export is metadata about the component
export default {
	title: 'JS Packages/Social Logos/Icons',
};
// the export called __default is the default state of the component
export const _default = () => {
	return <SocialLogo icon="wordpress" />;
};

export const _All = () => {
	return <SocialLogoExamples />;
};
`,F={_default:{startLoc:{col:24,line:12},endLoc:{col:1,line:16},startBody:{col:24,line:12},endBody:{col:1,line:16}},_All:{startLoc:{col:20,line:17},endLoc:{col:1,line:19},startBody:{col:20,line:17},endBody:{col:1,line:19}}};const O={parameters:{storySource:{source:`/**
 * Internal dependencies
 */
import SocialLogoExamples from '../example';
import SocialLogo from '../index';
// the default export is metadata about the component
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Social Logos/Icons'
};
// the export called __default is the default state of the component
export const _default = () => {
  return /*#__PURE__*/_jsx(SocialLogo, {
    icon: "wordpress"
  });
};
export const _All = () => {
  return /*#__PURE__*/_jsx(SocialLogoExamples, {});
};`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:1,line:16},startBody:{col:24,line:12},endBody:{col:1,line:16}},all:{startLoc:{col:20,line:17},endLoc:{col:1,line:19},startBody:{col:20,line:17},endBody:{col:1,line:19}}}}},title:"JS Packages/Social Logos/Icons"},b=()=>(0,l.jsx)(w.Ay,{icon:"wordpress"}),A=()=>(0,l.jsx)(P,{}),R=["_default","_All"];b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <SocialLogo icon="wordpress" />;
}`,...b.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <SocialLogoExamples />;
}`,...A.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../social-logos/src/css/example.css":(d,a,o)=>{"use strict";o.d(a,{A:()=>i});var n=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=o.n(n),s=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),e=o.n(s),t=e()(r());t.push([d.id,`.social-logos-example {
	max-width: 900px;
	margin: 100px auto;
	color: #767676;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	line-height: 1.15;

	a:link, a:visited {
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
		transition: .4s;
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
		transition: .4s;
	}

	input:checked + .handle {
		border-color: #3AA662;
	}

	input:checked + .handle::before {
		background: #3AA662;
		transform: translateX(20px);
	}

	input:focus + .handle {
		box-shadow: 0 0 3px #2196F3;
	}


	> p {
		text-align: center;
		margin-bottom: 2em;
	}
	
}
`,""]);const i=t},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js":(d,a,o)=>{"use strict";var n=o("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function r(){}function s(){}s.resetWarningCache=r,d.exports=function(){function e(p,c,f,h,y,u){if(u!==n){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}e.isRequired=e;function t(){return e}var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:r};return i.PropTypes=i,i}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":(d,a,o)=>{if(0)var n,r;else d.exports=o("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":d=>{"use strict";var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";d.exports=a},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":d=>{"use strict";var a=[];function o(s){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===s){e=t;break}return e}function n(s,e){for(var t={},i=[],p=0;p<s.length;p++){var c=s[p],f=e.base?c[0]+e.base:c[0],h=t[f]||0,y="".concat(f," ").concat(h);t[f]=h+1;var u=o(y),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(u!==-1)a[u].references++,a[u].updater(m);else{var x=r(m,e);e.byIndex=p,a.splice(p,0,{identifier:y,updater:x,references:1})}i.push(y)}return i}function r(s,e){var t=e.domAPI(e);t.update(s);var i=function(c){if(c){if(c.css===s.css&&c.media===s.media&&c.sourceMap===s.sourceMap&&c.supports===s.supports&&c.layer===s.layer)return;t.update(s=c)}else t.remove()};return i}d.exports=function(s,e){e=e||{},s=s||[];var t=n(s,e);return function(p){p=p||[];for(var c=0;c<t.length;c++){var f=t[c],h=o(f);a[h].references--}for(var y=n(p,e),u=0;u<t.length;u++){var m=t[u],x=o(m);a[x].references===0&&(a[x].updater(),a.splice(x,1))}t=y}}},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertBySelector.js":d=>{"use strict";var a={};function o(r){if(typeof a[r]>"u"){var s=document.querySelector(r);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch{s=null}a[r]=s}return a[r]}function n(r,s){var e=o(r);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(s)}d.exports=n},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertStyleElement.js":d=>{"use strict";function a(o){var n=document.createElement("style");return o.setAttributes(n,o.attributes),o.insert(n,o.options),n}d.exports=a},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(d,a,o)=>{"use strict";function n(r){var s=o.nc;s&&r.setAttribute("nonce",s)}d.exports=n},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleDomAPI.js":d=>{"use strict";function a(r,s,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var i=typeof e.layer<"u";i&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,i&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var p=e.sourceMap;p&&typeof btoa<"u"&&(t+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(p))))," */")),s.styleTagTransform(t,r,s.options)}function o(r){if(r.parentNode===null)return!1;r.parentNode.removeChild(r)}function n(r){if(typeof document>"u")return{update:function(){},remove:function(){}};var s=r.insertStyleElement(r);return{update:function(t){a(s,r,t)},remove:function(){o(s)}}}d.exports=n},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleTagTransform.js":d=>{"use strict";function a(o,n){if(n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}d.exports=a}}]);
