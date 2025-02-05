(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6581],{"../social-logos/src/react/stories/index.stories.jsx":(d,a,s)=>{"use strict";s.r(a),s.d(a,{_All:()=>T,__namedExportsOrder:()=>N,_default:()=>b,default:()=>L});var r=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=s("../social-logos/src/react/social-logo.tsx"),o=s("../social-logos/src/react/social-logo-data.tsx"),e=s("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=s.n(e),p=s("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),u=s.n(p),c=s("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),m=s.n(c),f=s("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),l=s.n(f),y=s("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),h=s.n(y),x=s("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),w=s.n(x),A=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../social-logos/src/css/example.css"),g={};g.styleTagTransform=w(),g.setAttributes=l(),g.insert=m().bind(null,"head"),g.domAPI=u(),g.insertStyleElement=h();var W=t()(A.A,g);const B=A.A&&A.A.locals?A.A.locals:void 0;var i=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function C({name:_,iconSize:v,showIconNames:I}){const E=(0,r.useCallback)(()=>{const k=`<SocialLogo icon="${_}" size="${v}" />`;window.prompt("Copy component code:",k)},[v,_]);return(0,i.jsxs)("div",{children:[(0,i.jsx)(n.d,{icon:_,size:v,onClick:E}),I&&(0,i.jsx)("p",{children:_})]},_)}function j(){const[_,v]=(0,r.useState)(!1),[I,E]=(0,r.useState)(!0),k=_?24:48,R=(0,r.useCallback)(S=>{v(S.target.checked)},[v]),M=(0,r.useCallback)(S=>{E(S.target.checked)},[E]),D=o.$.map(S=>(0,i.jsx)(C,{name:S.name,iconSize:k,showIconNames:I},S.name));return(0,i.jsxs)("div",{className:"social-logos-example",children:[(0,i.jsx)("h1",{children:"Social Logos"}),(0,i.jsxs)("div",{className:"display-control-group",children:[(0,i.jsxs)("div",{className:"display-control",children:[(0,i.jsx)("h4",{children:"Small icons"}),(0,i.jsxs)("label",{className:"switch",htmlFor:"useSmallIcons",children:[(0,i.jsx)("input",{id:"useSmallIcons",type:"checkbox",onChange:R,checked:_}),(0,i.jsx)("span",{className:"handle"})]})]}),(0,i.jsxs)("div",{className:"display-control",children:[(0,i.jsx)("h4",{children:"Icon names"}),(0,i.jsxs)("label",{className:"switch",htmlFor:"showIconNames",children:[(0,i.jsx)("input",{id:"showIconNames",type:"checkbox",onChange:M,checked:I}),(0,i.jsx)("span",{className:"handle"}),(0,i.jsx)("span",{className:"switch-label","data-on":"On","data-off":"Off"})]})]})]}),(0,i.jsx)("div",{className:"icons",children:D}),(0,i.jsx)("p",{children:(0,i.jsx)("a",{href:"https://github.com/Automattic/social-logos",children:"GitHub"})})]})}const P=j;try{j.displayName="SocialLogosExample",j.__docgenInfo={description:"An example React component that displays all the social logos.",displayName:"SocialLogosExample",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../social-logos/src/react/example.tsx#SocialLogosExample"]={docgenInfo:j.__docgenInfo,name:"SocialLogosExample",path:"../social-logos/src/react/example.tsx#SocialLogosExample"})}catch{}var O=s("../social-logos/src/react/index.ts");const L={title:"JS Packages/Social Logos/Icons"},b=()=>(0,i.jsx)(O.Ay,{icon:"wordpress"}),T=()=>(0,i.jsx)(P,{}),N=["_default","_All"];b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <SocialLogo icon="wordpress" />;
}`,...b.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <SocialLogoExamples />;
}`,...T.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../social-logos/src/css/example.css":(d,a,s)=>{"use strict";s.d(a,{A:()=>p});var r=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=s.n(r),o=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),e=s.n(o),t=e()(n());t.push([d.id,`.social-logos-example {
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
`,""]);const p=t},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js":d=>{"use strict";d.exports=function(a){var s=[];return s.toString=function(){return this.map(function(n){var o="",e=typeof n[5]<"u";return n[4]&&(o+="@supports (".concat(n[4],") {")),n[2]&&(o+="@media ".concat(n[2]," {")),e&&(o+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),o+=a(n),e&&(o+="}"),n[2]&&(o+="}"),n[4]&&(o+="}"),o}).join("")},s.i=function(n,o,e,t,p){typeof n=="string"&&(n=[[null,n,void 0]]);var u={};if(e)for(var c=0;c<this.length;c++){var m=this[c][0];m!=null&&(u[m]=!0)}for(var f=0;f<n.length;f++){var l=[].concat(n[f]);e&&u[l[0]]||(typeof p<"u"&&(typeof l[5]>"u"||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=p),o&&(l[2]&&(l[1]="@media ".concat(l[2]," {").concat(l[1],"}")),l[2]=o),t&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=t):l[4]="".concat(t)),s.push(l))}},s}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js":d=>{"use strict";d.exports=function(a){return a[1]}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js":(d,a,s)=>{"use strict";var r=s("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function n(){}function o(){}o.resetWarningCache=n,d.exports=function(){function e(u,c,m,f,l,y){if(y!==r){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function t(){return e}var p={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:n};return p.PropTypes=p,p}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":(d,a,s)=>{if(!1)var r,n;else d.exports=s("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":d=>{"use strict";var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";d.exports=a},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":d=>{"use strict";var a=[];function s(o){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===o){e=t;break}return e}function r(o,e){for(var t={},p=[],u=0;u<o.length;u++){var c=o[u],m=e.base?c[0]+e.base:c[0],f=t[m]||0,l="".concat(m," ").concat(f);t[m]=f+1;var y=s(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(y!==-1)a[y].references++,a[y].updater(h);else{var x=n(h,e);e.byIndex=u,a.splice(u,0,{identifier:l,updater:x,references:1})}p.push(l)}return p}function n(o,e){var t=e.domAPI(e);t.update(o);var p=function(c){if(c){if(c.css===o.css&&c.media===o.media&&c.sourceMap===o.sourceMap&&c.supports===o.supports&&c.layer===o.layer)return;t.update(o=c)}else t.remove()};return p}d.exports=function(o,e){e=e||{},o=o||[];var t=r(o,e);return function(u){u=u||[];for(var c=0;c<t.length;c++){var m=t[c],f=s(m);a[f].references--}for(var l=r(u,e),y=0;y<t.length;y++){var h=t[y],x=s(h);a[x].references===0&&(a[x].updater(),a.splice(x,1))}t=l}}},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertBySelector.js":d=>{"use strict";var a={};function s(n){if(typeof a[n]>"u"){var o=document.querySelector(n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch{o=null}a[n]=o}return a[n]}function r(n,o){var e=s(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(o)}d.exports=r},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertStyleElement.js":d=>{"use strict";function a(s){var r=document.createElement("style");return s.setAttributes(r,s.attributes),s.insert(r,s.options),r}d.exports=a},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(d,a,s)=>{"use strict";function r(n){var o=s.nc;o&&n.setAttribute("nonce",o)}d.exports=r},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleDomAPI.js":d=>{"use strict";function a(n,o,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var p=typeof e.layer<"u";p&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,p&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var u=e.sourceMap;u&&typeof btoa<"u"&&(t+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(u))))," */")),o.styleTagTransform(t,n,o.options)}function s(n){if(n.parentNode===null)return!1;n.parentNode.removeChild(n)}function r(n){if(typeof document>"u")return{update:function(){},remove:function(){}};var o=n.insertStyleElement(n);return{update:function(t){a(o,n,t)},remove:function(){s(o)}}}d.exports=r},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleTagTransform.js":d=>{"use strict";function a(s,r){if(r.styleSheet)r.styleSheet.cssText=s;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(s))}}d.exports=a}}]);
