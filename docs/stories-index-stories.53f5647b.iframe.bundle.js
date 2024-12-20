"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6581],{"../social-logos/src/react/stories/index.stories.jsx":(i,n,s)=>{var k,w,L,M,N,P;s.r(n),s.d(n,{_All:()=>b,__namedExportsOrder:()=>W,_default:()=>A,default:()=>U});var r=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=s("../social-logos/src/react/social-logo.tsx"),e=s("../social-logos/src/react/social-logo-data.tsx"),o=s("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=s.n(o),u=s("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),p=s.n(u),d=s("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),m=s.n(d),f=s("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),l=s.n(f),h=s("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),x=s.n(h),y=s("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),O=s.n(y),I=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../social-logos/src/css/example.css"),g={};g.styleTagTransform=O(),g.setAttributes=l(),g.insert=m().bind(null,"head"),g.domAPI=p(),g.insertStyleElement=x();var H=a()(I.A,g);const X=I.A&&I.A.locals?I.A.locals:void 0;var c=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function D({name:_,iconSize:v,showIconNames:E}){const T=(0,r.useCallback)(()=>{const C=`<SocialLogo icon="${_}" size="${v}" />`;window.prompt("Copy component code:",C)},[v,_]);return(0,c.jsxs)("div",{children:[(0,c.jsx)(t.d,{icon:_,size:v,onClick:T}),E&&(0,c.jsx)("p",{children:_})]},_)}function j(){const[_,v]=(0,r.useState)(!1),[E,T]=(0,r.useState)(!0),C=_?24:48,F=(0,r.useCallback)(S=>{v(S.target.checked)},[v]),K=(0,r.useCallback)(S=>{T(S.target.checked)},[T]),z=e.$.map(S=>(0,c.jsx)(D,{name:S.name,iconSize:C,showIconNames:E},S.name));return(0,c.jsxs)("div",{className:"social-logos-example",children:[(0,c.jsx)("h1",{children:"Social Logos"}),(0,c.jsxs)("div",{className:"display-control-group",children:[(0,c.jsxs)("div",{className:"display-control",children:[(0,c.jsx)("h4",{children:"Small icons"}),(0,c.jsxs)("label",{className:"switch",htmlFor:"useSmallIcons",children:[(0,c.jsx)("input",{id:"useSmallIcons",type:"checkbox",onChange:F,checked:_}),(0,c.jsx)("span",{className:"handle"})]})]}),(0,c.jsxs)("div",{className:"display-control",children:[(0,c.jsx)("h4",{children:"Icon names"}),(0,c.jsxs)("label",{className:"switch",htmlFor:"showIconNames",children:[(0,c.jsx)("input",{id:"showIconNames",type:"checkbox",onChange:K,checked:E}),(0,c.jsx)("span",{className:"handle"}),(0,c.jsx)("span",{className:"switch-label","data-on":"On","data-off":"Off"})]})]})]}),(0,c.jsx)("div",{className:"icons",children:z}),(0,c.jsx)("p",{children:(0,c.jsx)("a",{href:"https://github.com/Automattic/social-logos",children:"GitHub"})})]})}const R=j;try{j.displayName="SocialLogosExample",j.__docgenInfo={description:"An example React component that displays all the social logos.",displayName:"SocialLogosExample",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../social-logos/src/react/example.tsx#SocialLogosExample"]={docgenInfo:j.__docgenInfo,name:"SocialLogosExample",path:"../social-logos/src/react/example.tsx#SocialLogosExample"})}catch(_){}var B=s("../social-logos/src/react/index.ts");const U={title:"JS Packages/Social Logos/Icons"},A=()=>(0,c.jsx)(B.Ay,{icon:"wordpress"}),b=()=>(0,c.jsx)(R,{}),W=["_default","_All"];A.parameters={...A.parameters,docs:{...(k=A.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <SocialLogo icon="wordpress" />;
}`,...(L=(w=A.parameters)==null?void 0:w.docs)==null?void 0:L.source}}},b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <SocialLogoExamples />;
}`,...(P=(N=b.parameters)==null?void 0:N.docs)==null?void 0:P.source}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../social-logos/src/css/example.css":(i,n,s)=>{s.d(n,{A:()=>u});var r=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=s.n(r),e=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=s.n(e),a=o()(t());a.push([i.id,`.social-logos-example {
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
`,""]);const u=a},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js":i=>{i.exports=function(n){var s=[];return s.toString=function(){return this.map(function(t){var e="",o=typeof t[5]!="undefined";return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e}).join("")},s.i=function(t,e,o,a,u){typeof t=="string"&&(t=[[null,t,void 0]]);var p={};if(o)for(var d=0;d<this.length;d++){var m=this[d][0];m!=null&&(p[m]=!0)}for(var f=0;f<t.length;f++){var l=[].concat(t[f]);o&&p[l[0]]||(typeof u!="undefined"&&(typeof l[5]=="undefined"||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=u),e&&(l[2]&&(l[1]="@media ".concat(l[2]," {").concat(l[1],"}")),l[2]=e),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),s.push(l))}},s}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js":i=>{i.exports=function(n){return n[1]}},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":i=>{var n=[];function s(e){for(var o=-1,a=0;a<n.length;a++)if(n[a].identifier===e){o=a;break}return o}function r(e,o){for(var a={},u=[],p=0;p<e.length;p++){var d=e[p],m=o.base?d[0]+o.base:d[0],f=a[m]||0,l="".concat(m," ").concat(f);a[m]=f+1;var h=s(l),x={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(h!==-1)n[h].references++,n[h].updater(x);else{var y=t(x,o);o.byIndex=p,n.splice(p,0,{identifier:l,updater:y,references:1})}u.push(l)}return u}function t(e,o){var a=o.domAPI(o);a.update(e);var u=function(d){if(d){if(d.css===e.css&&d.media===e.media&&d.sourceMap===e.sourceMap&&d.supports===e.supports&&d.layer===e.layer)return;a.update(e=d)}else a.remove()};return u}i.exports=function(e,o){o=o||{},e=e||[];var a=r(e,o);return function(p){p=p||[];for(var d=0;d<a.length;d++){var m=a[d],f=s(m);n[f].references--}for(var l=r(p,o),h=0;h<a.length;h++){var x=a[h],y=s(x);n[y].references===0&&(n[y].updater(),n.splice(y,1))}a=l}}},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertBySelector.js":i=>{var n={};function s(t){if(typeof n[t]=="undefined"){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(o){e=null}n[t]=e}return n[t]}function r(t,e){var o=s(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}i.exports=r},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertStyleElement.js":i=>{function n(s){var r=document.createElement("style");return s.setAttributes(r,s.attributes),s.insert(r,s.options),r}i.exports=n},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(i,n,s)=>{function r(t){var e=s.nc;e&&t.setAttribute("nonce",e)}i.exports=r},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleDomAPI.js":i=>{function n(t,e,o){var a="";o.supports&&(a+="@supports (".concat(o.supports,") {")),o.media&&(a+="@media ".concat(o.media," {"));var u=typeof o.layer!="undefined";u&&(a+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),a+=o.css,u&&(a+="}"),o.media&&(a+="}"),o.supports&&(a+="}");var p=o.sourceMap;p&&typeof btoa!="undefined"&&(a+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(p))))," */")),e.styleTagTransform(a,t,e.options)}function s(t){if(t.parentNode===null)return!1;t.parentNode.removeChild(t)}function r(t){if(typeof document=="undefined")return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(a){n(e,t,a)},remove:function(){s(e)}}}i.exports=r},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleTagTransform.js":i=>{function n(s,r){if(r.styleSheet)r.styleSheet.cssText=s;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(s))}}i.exports=n}}]);})();
