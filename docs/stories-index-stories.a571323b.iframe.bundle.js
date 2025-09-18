(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6581],{"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../social-logos/src/css/example.css":((c,n,s)=>{"use strict";s.d(n,{A:()=>i});var a=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=s.n(a),t=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),e=s.n(t),o=e()(r());o.push([c.id,`.social-logos-example {
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
`,""]);const i=o}),"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js":((c,n,s)=>{"use strict";var a=s("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function r(){}function t(){}t.resetWarningCache=r,c.exports=function(){function e(p,d,y,h,_,u){if(u!==a){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}e.isRequired=e;function o(){return e}var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:r};return i.PropTypes=i,i}}),"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":((c,n,s)=>{if(0)var a,r;else c.exports=s("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()}),"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":(c=>{"use strict";var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";c.exports=n}),"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":(c=>{"use strict";var n=[];function s(t){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===t){e=o;break}return e}function a(t,e){for(var o={},i=[],p=0;p<t.length;p++){var d=t[p],y=e.base?d[0]+e.base:d[0],h=o[y]||0,_="".concat(y," ").concat(h);o[y]=h+1;var u=s(_),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(u!==-1)n[u].references++,n[u].updater(m);else{var x=r(m,e);e.byIndex=p,n.splice(p,0,{identifier:_,updater:x,references:1})}i.push(_)}return i}function r(t,e){var o=e.domAPI(e);o.update(t);var i=function(d){if(d){if(d.css===t.css&&d.media===t.media&&d.sourceMap===t.sourceMap&&d.supports===t.supports&&d.layer===t.layer)return;o.update(t=d)}else o.remove()};return i}c.exports=function(t,e){e=e||{},t=t||[];var o=a(t,e);return function(p){p=p||[];for(var d=0;d<o.length;d++){var y=o[d],h=s(y);n[h].references--}for(var _=a(p,e),u=0;u<o.length;u++){var m=o[u],x=s(m);n[x].references===0&&(n[x].updater(),n.splice(x,1))}o=_}}}),"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js":(c=>{"use strict";var n={};function s(r){if(typeof n[r]>"u"){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch{t=null}n[r]=t}return n[r]}function a(r,t){var e=s(r);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}c.exports=a}),"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js":(c=>{"use strict";function n(s){var a=document.createElement("style");return s.setAttributes(a,s.attributes),s.insert(a,s.options),a}c.exports=n}),"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":((c,n,s)=>{"use strict";function a(r){var t=s.nc;t&&r.setAttribute("nonce",t)}c.exports=a}),"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js":(c=>{"use strict";function n(r,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var i=typeof e.layer<"u";i&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,i&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var p=e.sourceMap;p&&typeof btoa<"u"&&(o+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(p))))," */")),t.styleTagTransform(o,r,t.options)}function s(r){if(r.parentNode===null)return!1;r.parentNode.removeChild(r)}function a(r){if(typeof document>"u")return{update:function(){},remove:function(){}};var t=r.insertStyleElement(r);return{update:function(o){n(t,r,o)},remove:function(){s(t)}}}c.exports=a}),"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js":(c=>{"use strict";function n(s,a){if(a.styleSheet)a.styleSheet.cssText=s;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(s))}}c.exports=n}),"../social-logos/src/react/stories/index.stories.jsx":((c,n,s)=>{"use strict";s.r(n),s.d(n,{_All:()=>T,__namedExportsOrder:()=>R,_default:()=>b,default:()=>N});var a=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=s("../social-logos/src/react/social-logo.tsx"),t=s("../social-logos/src/react/social-logo-data.tsx"),e=s("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=s.n(e),i=s("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js"),p=s.n(i),d=s("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js"),y=s.n(d),h=s("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_=s.n(h),u=s("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=s.n(u),x=s("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js"),C=s.n(x),I=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../social-logos/src/css/example.css"),g={};g.styleTagTransform=C(),g.setAttributes=_(),g.insert=y().bind(null,"head"),g.domAPI=p(),g.insertStyleElement=m();var W=o()(I.A,g);const B=I.A&&I.A.locals?I.A.locals:void 0;var l=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function w({name:f,iconSize:v,showIconNames:j}){const E=(0,a.useCallback)(()=>{const k=`<SocialLogo icon="${f}" size="${v}" />`;window.prompt("Copy component code:",k)},[v,f]);return(0,l.jsxs)("div",{children:[(0,l.jsx)(r.d,{icon:f,size:v,onClick:E}),j&&(0,l.jsx)("p",{children:f})]},f)}function A(){const[f,v]=(0,a.useState)(!1),[j,E]=(0,a.useState)(!0),k=f?24:48,L=(0,a.useCallback)(S=>{v(S.target.checked)},[v]),M=(0,a.useCallback)(S=>{E(S.target.checked)},[E]),D=t.$.map(S=>(0,l.jsx)(w,{name:S.name,iconSize:k,showIconNames:j},S.name));return(0,l.jsxs)("div",{className:"social-logos-example",children:[(0,l.jsx)("h1",{children:"Social Logos"}),(0,l.jsxs)("div",{className:"display-control-group",children:[(0,l.jsxs)("div",{className:"display-control",children:[(0,l.jsx)("h4",{children:"Small icons"}),(0,l.jsxs)("label",{className:"switch",htmlFor:"useSmallIcons",children:[(0,l.jsx)("input",{id:"useSmallIcons",type:"checkbox",onChange:L,checked:f}),(0,l.jsx)("span",{className:"handle"})]})]}),(0,l.jsxs)("div",{className:"display-control",children:[(0,l.jsx)("h4",{children:"Icon names"}),(0,l.jsxs)("label",{className:"switch",htmlFor:"showIconNames",children:[(0,l.jsx)("input",{id:"showIconNames",type:"checkbox",onChange:M,checked:j}),(0,l.jsx)("span",{className:"handle"}),(0,l.jsx)("span",{className:"switch-label","data-on":"On","data-off":"Off"})]})]})]}),(0,l.jsx)("div",{className:"icons",children:D}),(0,l.jsx)("p",{children:(0,l.jsx)("a",{href:"https://github.com/Automattic/social-logos",children:"GitHub"})})]})}const P=A;try{A.displayName="SocialLogosExample",A.__docgenInfo={description:"An example React component that displays all the social logos.",displayName:"SocialLogosExample",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../social-logos/src/react/example.tsx#SocialLogosExample"]={docgenInfo:A.__docgenInfo,name:"SocialLogosExample",path:"../social-logos/src/react/example.tsx#SocialLogosExample"})}catch{}var O=s("../social-logos/src/react/index.ts");const N={title:"JS Packages/Social Logos/Icons"},b=()=>(0,l.jsx)(O.Ay,{icon:"wordpress"}),T=()=>(0,l.jsx)(P,{}),R=["_default","_All"];b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <SocialLogo icon="wordpress" />;
}`,...b.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <SocialLogoExamples />;
}`,...T.parameters?.docs?.source}}}})}]);
