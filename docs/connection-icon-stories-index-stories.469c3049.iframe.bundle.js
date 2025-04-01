(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6776],{"../publicize-components/src/components/connection-icon/stories/index.stories.jsx":(p,r,o)=>{"use strict";o.r(r),o.d(r,{__namedExportsOrder:()=>E,_default:()=>g,default:()=>x});var c=o("../publicize-components/src/components/connection-icon/index.jsx"),t=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=o.n(t),e=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),s=o.n(e),l=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),a=o.n(l),d=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),m=o.n(d),f=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),i=o.n(f),_=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),v=o.n(_),y=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../social-logos/src/social-logo-colors.css"),u={};u.styleTagTransform=v(),u.setAttributes=m(),u.insert=a().bind(null,"head"),u.domAPI=s(),u.insertStyleElement=i();var b=n()(y.A,u);const S=y.A&&y.A.locals?y.A.locals:void 0;var h=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),T=`import ConnectionIcon from '../index.jsx';
import '../../../../../social-logos/src/social-logo-colors.css';

export default {
	title: 'JS Packages/Publicize Components/ConnectionIcon',
	component: ConnectionIcon,
	argTypes: {
		serviceName: {
			control: {
				type: 'select',
			},
			options: [
				'facebook',
				'x',
				'instagram',
				'linkedin',
				'nextdoor',
				'tumblr',
				'bluesky',
				'mastodon',
			],
		},
	},
};

const Template = args => <ConnectionIcon { ...args } />;

export const _default = Template.bind( {} );
_default.args = {
	serviceName: 'tumblr',
	label: 'Jetpack Social',
	checked: true,
	profilePicture:
		'https://gravatar.com/avatar/5a5f21e099ba62ae525e62cd1ad859985c8170b8811431e7fa6ccbc9da22405b',
};
`,A={_default:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}}};const x={parameters:{storySource:{source:`import ConnectionIcon from '../index.jsx';
import '../../../../../social-logos/src/social-logo-colors.css';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Publicize Components/ConnectionIcon',
  component: ConnectionIcon,
  argTypes: {
    serviceName: {
      control: {
        type: 'select'
      },
      options: ['facebook', 'x', 'instagram', 'linkedin', 'nextdoor', 'tumblr', 'bluesky', 'mastodon']
    }
  }
};
const Template = args => /*#__PURE__*/_jsx(ConnectionIcon, {
  ...args
});
export const _default = Template.bind({});
_default.args = {
  serviceName: 'tumblr',
  label: 'Jetpack Social',
  checked: true,
  profilePicture: 'https://gravatar.com/avatar/5a5f21e099ba62ae525e62cd1ad859985c8170b8811431e7fa6ccbc9da22405b'
};`,locationsMap:{default:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}}}}},title:"JS Packages/Publicize Components/ConnectionIcon",component:c.A,argTypes:{serviceName:{control:{type:"select"},options:["facebook","x","instagram","linkedin","nextdoor","tumblr","bluesky","mastodon"]}}},g=(P=>(0,h.jsx)(c.A,{...P})).bind({});g.args={serviceName:"tumblr",label:"Jetpack Social",checked:!0,profilePicture:"https://gravatar.com/avatar/5a5f21e099ba62ae525e62cd1ad859985c8170b8811431e7fa6ccbc9da22405b"};const E=["_default"];g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"args => <ConnectionIcon {...args} />",...g.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+primitives@4.21.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js":(p,r,o)=>{"use strict";o.d(r,{Ey:()=>i,G:()=>s,N1:()=>l,VG:()=>v,W4:()=>_,jl:()=>e,lA:()=>f,rw:()=>m,t4:()=>y,tS:()=>d,wA:()=>a});var c=o("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const e=u=>(0,t.createElement)("circle",u),s=u=>(0,t.createElement)("g",u),l=u=>(0,t.createElement)("line",u),a=u=>(0,t.createElement)("path",u),d=u=>(0,t.createElement)("polygon",u),m=u=>(0,t.createElement)("rect",u),f=u=>(0,t.createElement)("defs",u),i=u=>(0,t.createElement)("radialGradient",u),_=u=>(0,t.createElement)("linearGradient",u),v=u=>(0,t.createElement)("stop",u),y=(0,t.forwardRef)(({className:u,isPressed:b,...S},h)=>{const T={...S,className:(0,c.A)(u,{"is-pressed":b})||void 0,"aria-hidden":!0,focusable:!1};return(0,n.jsx)("svg",{...T,ref:h})});y.displayName="SVG"},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(p,r,o)=>{"use strict";o.d(r,{A:()=>n});function c(e){var s,l,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var d=e.length;for(s=0;s<d;s++)e[s]&&(l=c(e[s]))&&(a&&(a+=" "),a+=l)}else for(l in e)e[l]&&(a&&(a+=" "),a+=l);return a}function t(){for(var e,s,l=0,a="",d=arguments.length;l<d;l++)(e=arguments[l])&&(s=c(e))&&(a&&(a+=" "),a+=s);return a}const n=t},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../social-logos/src/social-logo-colors.css":(p,r,o)=>{"use strict";o.d(r,{A:()=>l});var c=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=o.n(c),n=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),e=o.n(n),s=e()(t());s.push([p.id,`:root {
	--color-blogger: #ff5722;
	--color-eventbrite: #ff8000;
	--color-facebook: #0866ff;
	--color-godaddy: #5ea95a;
	--color-google-plus: #df4a32;
	--color-instagram: #d93174;
	--color-linkedin: #0976b4;
	--color-mastodon: #6364ff;
	--color-medium: #12100e;
	--color-nextdoor: #8ed500;
	--color-pinterest: #cc2127;
	--color-pocket: #ee4256;
	--color-print: #f8f8f8;
	--color-reddit: #5f99cf;
	--color-skype: #00aff0;
	--color-squarespace: #222;
	--color-stumbleupon: #eb4924;
	--color-substack: #ff6719;
	--color-telegram: #08c;
	--color-tumblr: #35465c;
	--color-twitter: #55acee;
	--color-threads: #000;
	--color-whatsapp: #43d854;
	--color-wix: #faad4d;
	--color-x: #000;
}
`,""]);const l=s},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js":p=>{"use strict";p.exports=function(r){var o=[];return o.toString=function(){return this.map(function(t){var n="",e=typeof t[5]<"u";return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),e&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=r(t),e&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n}).join("")},o.i=function(t,n,e,s,l){typeof t=="string"&&(t=[[null,t,void 0]]);var a={};if(e)for(var d=0;d<this.length;d++){var m=this[d][0];m!=null&&(a[m]=!0)}for(var f=0;f<t.length;f++){var i=[].concat(t[f]);e&&a[i[0]]||(typeof l<"u"&&(typeof i[5]>"u"||(i[1]="@layer".concat(i[5].length>0?" ".concat(i[5]):""," {").concat(i[1],"}")),i[5]=l),n&&(i[2]&&(i[1]="@media ".concat(i[2]," {").concat(i[1],"}")),i[2]=n),s&&(i[4]?(i[1]="@supports (".concat(i[4],") {").concat(i[1],"}"),i[4]=s):i[4]="".concat(s)),o.push(i))}},o}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js":p=>{"use strict";p.exports=function(r){return r[1]}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js":(p,r,o)=>{"use strict";var c=o("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function t(){}function n(){}n.resetWarningCache=t,p.exports=function(){function e(a,d,m,f,i,_){if(_!==c){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}e.isRequired=e;function s(){return e}var l={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:s,element:e,elementType:e,instanceOf:s,node:e,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:n,resetWarningCache:t};return l.PropTypes=l,l}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":(p,r,o)=>{if(0)var c,t;else p.exports=o("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":p=>{"use strict";var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";p.exports=r},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":p=>{"use strict";var r=[];function o(n){for(var e=-1,s=0;s<r.length;s++)if(r[s].identifier===n){e=s;break}return e}function c(n,e){for(var s={},l=[],a=0;a<n.length;a++){var d=n[a],m=e.base?d[0]+e.base:d[0],f=s[m]||0,i="".concat(m," ").concat(f);s[m]=f+1;var _=o(i),v={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(_!==-1)r[_].references++,r[_].updater(v);else{var y=t(v,e);e.byIndex=a,r.splice(a,0,{identifier:i,updater:y,references:1})}l.push(i)}return l}function t(n,e){var s=e.domAPI(e);s.update(n);var l=function(d){if(d){if(d.css===n.css&&d.media===n.media&&d.sourceMap===n.sourceMap&&d.supports===n.supports&&d.layer===n.layer)return;s.update(n=d)}else s.remove()};return l}p.exports=function(n,e){e=e||{},n=n||[];var s=c(n,e);return function(a){a=a||[];for(var d=0;d<s.length;d++){var m=s[d],f=o(m);r[f].references--}for(var i=c(a,e),_=0;_<s.length;_++){var v=s[_],y=o(v);r[y].references===0&&(r[y].updater(),r.splice(y,1))}s=i}}},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertBySelector.js":p=>{"use strict";var r={};function o(t){if(typeof r[t]>"u"){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch{n=null}r[t]=n}return r[t]}function c(t,n){var e=o(t);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}p.exports=c},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertStyleElement.js":p=>{"use strict";function r(o){var c=document.createElement("style");return o.setAttributes(c,o.attributes),o.insert(c,o.options),c}p.exports=r},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(p,r,o)=>{"use strict";function c(t){var n=o.nc;n&&t.setAttribute("nonce",n)}p.exports=c},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleDomAPI.js":p=>{"use strict";function r(t,n,e){var s="";e.supports&&(s+="@supports (".concat(e.supports,") {")),e.media&&(s+="@media ".concat(e.media," {"));var l=typeof e.layer<"u";l&&(s+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),s+=e.css,l&&(s+="}"),e.media&&(s+="}"),e.supports&&(s+="}");var a=e.sourceMap;a&&typeof btoa<"u"&&(s+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(s,t,n.options)}function o(t){if(t.parentNode===null)return!1;t.parentNode.removeChild(t)}function c(t){if(typeof document>"u")return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(s){r(n,t,s)},remove:function(){o(n)}}}p.exports=c},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleTagTransform.js":p=>{"use strict";function r(o,c){if(c.styleSheet)c.styleSheet.cssText=o;else{for(;c.firstChild;)c.removeChild(c.firstChild);c.appendChild(document.createTextNode(o))}}p.exports=r}}]);
