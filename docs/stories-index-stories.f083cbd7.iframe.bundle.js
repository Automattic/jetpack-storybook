(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6581],{"../social-logos/src/react/stories/index.stories.jsx":(d,a,o)=>{"use strict";o.r(a),o.d(a,{_All:()=>A,__namedExportsOrder:()=>R,_default:()=>b,default:()=>O});var r=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=o("../social-logos/src/react/social-logo.tsx"),t=o("../social-logos/src/react/social-logo-data.tsx"),e=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=o.n(e),p=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),u=o.n(p),c=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),m=o.n(c),f=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),l=o.n(f),_=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=o.n(_),x=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),k=o.n(x),T=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../social-logos/src/css/example.css"),g={};g.styleTagTransform=k(),g.setAttributes=l(),g.insert=m().bind(null,"head"),g.domAPI=u(),g.insertStyleElement=y();var D=s()(T.A,g);const W=T.A&&T.A.locals?T.A.locals:void 0;var i=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function w({name:h,iconSize:v,showIconNames:I}){const E=(0,r.useCallback)(()=>{const L=`<SocialLogo icon="${h}" size="${v}" />`;window.prompt("Copy component code:",L)},[v,h]);return(0,i.jsxs)("div",{children:[(0,i.jsx)(n.d,{icon:h,size:v,onClick:E}),I&&(0,i.jsx)("p",{children:h})]},h)}function j(){const[h,v]=(0,r.useState)(!1),[I,E]=(0,r.useState)(!0),L=h?24:48,N=(0,r.useCallback)(S=>{v(S.target.checked)},[v]),M=(0,r.useCallback)(S=>{E(S.target.checked)},[E]),B=t.$.map(S=>(0,i.jsx)(w,{name:S.name,iconSize:L,showIconNames:I},S.name));return(0,i.jsxs)("div",{className:"social-logos-example",children:[(0,i.jsx)("h1",{children:"Social Logos"}),(0,i.jsxs)("div",{className:"display-control-group",children:[(0,i.jsxs)("div",{className:"display-control",children:[(0,i.jsx)("h4",{children:"Small icons"}),(0,i.jsxs)("label",{className:"switch",htmlFor:"useSmallIcons",children:[(0,i.jsx)("input",{id:"useSmallIcons",type:"checkbox",onChange:N,checked:h}),(0,i.jsx)("span",{className:"handle"})]})]}),(0,i.jsxs)("div",{className:"display-control",children:[(0,i.jsx)("h4",{children:"Icon names"}),(0,i.jsxs)("label",{className:"switch",htmlFor:"showIconNames",children:[(0,i.jsx)("input",{id:"showIconNames",type:"checkbox",onChange:M,checked:I}),(0,i.jsx)("span",{className:"handle"}),(0,i.jsx)("span",{className:"switch-label","data-on":"On","data-off":"Off"})]})]})]}),(0,i.jsx)("div",{className:"icons",children:B}),(0,i.jsx)("p",{children:(0,i.jsx)("a",{href:"https://github.com/Automattic/social-logos",children:"GitHub"})})]})}const C=j;try{j.displayName="SocialLogosExample",j.__docgenInfo={description:"An example React component that displays all the social logos.",displayName:"SocialLogosExample",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../social-logos/src/react/example.tsx#SocialLogosExample"]={docgenInfo:j.__docgenInfo,name:"SocialLogosExample",path:"../social-logos/src/react/example.tsx#SocialLogosExample"})}catch{}var P=o("../social-logos/src/react/index.ts"),U=`/**
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
};`,locationsMap:{default:{startLoc:{col:24,line:12},endLoc:{col:1,line:16},startBody:{col:24,line:12},endBody:{col:1,line:16}},all:{startLoc:{col:20,line:17},endLoc:{col:1,line:19},startBody:{col:20,line:17},endBody:{col:1,line:19}}}}},title:"JS Packages/Social Logos/Icons"},b=()=>(0,i.jsx)(P.Ay,{icon:"wordpress"}),A=()=>(0,i.jsx)(C,{}),R=["_default","_All"];b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <SocialLogo icon="wordpress" />;
}`,...b.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <SocialLogoExamples />;
}`,...A.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../social-logos/src/css/example.css":(d,a,o)=>{"use strict";o.d(a,{A:()=>p});var r=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=o.n(r),t=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),e=o.n(t),s=e()(n());s.push([d.id,`.social-logos-example {
	max-width: 900px;
	margin: 100px auto;
	color: #767676;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue", sans-serif;
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

	[type=checkbox] {
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
		border: 2px solid gray;
		border-radius: 10px;
		transition: .4s;
		box-sizing: border-box;
	}

	.handle:before {
		position: absolute;
		content: "";
		height: 12px;
		width: 12px;
		left: 2px;
		bottom: 2px;
		background: gray;
		border-radius: 50%;
		transition: .4s;
	}

	input:checked + .handle {
		border-color: #3AA662;
	}

	input:checked + .handle:before {
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
`,""]);const p=s},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js":d=>{"use strict";d.exports=function(a){var o=[];return o.toString=function(){return this.map(function(n){var t="",e=typeof n[5]<"u";return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),e&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=a(n),e&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t}).join("")},o.i=function(n,t,e,s,p){typeof n=="string"&&(n=[[null,n,void 0]]);var u={};if(e)for(var c=0;c<this.length;c++){var m=this[c][0];m!=null&&(u[m]=!0)}for(var f=0;f<n.length;f++){var l=[].concat(n[f]);e&&u[l[0]]||(typeof p<"u"&&(typeof l[5]>"u"||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=p),t&&(l[2]&&(l[1]="@media ".concat(l[2]," {").concat(l[1],"}")),l[2]=t),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),o.push(l))}},o}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js":d=>{"use strict";d.exports=function(a){return a[1]}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js":(d,a,o)=>{"use strict";var r=o("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function n(){}function t(){}t.resetWarningCache=n,d.exports=function(){function e(u,c,m,f,l,_){if(_!==r){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}e.isRequired=e;function s(){return e}var p={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:s,element:e,elementType:e,instanceOf:s,node:e,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:t,resetWarningCache:n};return p.PropTypes=p,p}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":(d,a,o)=>{if(0)var r,n;else d.exports=o("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":d=>{"use strict";var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";d.exports=a},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":d=>{"use strict";var a=[];function o(t){for(var e=-1,s=0;s<a.length;s++)if(a[s].identifier===t){e=s;break}return e}function r(t,e){for(var s={},p=[],u=0;u<t.length;u++){var c=t[u],m=e.base?c[0]+e.base:c[0],f=s[m]||0,l="".concat(m," ").concat(f);s[m]=f+1;var _=o(l),y={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(_!==-1)a[_].references++,a[_].updater(y);else{var x=n(y,e);e.byIndex=u,a.splice(u,0,{identifier:l,updater:x,references:1})}p.push(l)}return p}function n(t,e){var s=e.domAPI(e);s.update(t);var p=function(c){if(c){if(c.css===t.css&&c.media===t.media&&c.sourceMap===t.sourceMap&&c.supports===t.supports&&c.layer===t.layer)return;s.update(t=c)}else s.remove()};return p}d.exports=function(t,e){e=e||{},t=t||[];var s=r(t,e);return function(u){u=u||[];for(var c=0;c<s.length;c++){var m=s[c],f=o(m);a[f].references--}for(var l=r(u,e),_=0;_<s.length;_++){var y=s[_],x=o(y);a[x].references===0&&(a[x].updater(),a.splice(x,1))}s=l}}},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertBySelector.js":d=>{"use strict";var a={};function o(n){if(typeof a[n]>"u"){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch{t=null}a[n]=t}return a[n]}function r(n,t){var e=o(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}d.exports=r},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertStyleElement.js":d=>{"use strict";function a(o){var r=document.createElement("style");return o.setAttributes(r,o.attributes),o.insert(r,o.options),r}d.exports=a},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(d,a,o)=>{"use strict";function r(n){var t=o.nc;t&&n.setAttribute("nonce",t)}d.exports=r},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleDomAPI.js":d=>{"use strict";function a(n,t,e){var s="";e.supports&&(s+="@supports (".concat(e.supports,") {")),e.media&&(s+="@media ".concat(e.media," {"));var p=typeof e.layer<"u";p&&(s+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),s+=e.css,p&&(s+="}"),e.media&&(s+="}"),e.supports&&(s+="}");var u=e.sourceMap;u&&typeof btoa<"u"&&(s+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(u))))," */")),t.styleTagTransform(s,n,t.options)}function o(n){if(n.parentNode===null)return!1;n.parentNode.removeChild(n)}function r(n){if(typeof document>"u")return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(s){a(t,n,s)},remove:function(){o(t)}}}d.exports=r},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleTagTransform.js":d=>{"use strict";function a(o,r){if(r.styleSheet)r.styleSheet.cssText=o;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(o))}}d.exports=a}}]);
