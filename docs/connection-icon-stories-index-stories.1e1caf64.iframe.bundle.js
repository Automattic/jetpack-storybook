(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6776],{"../publicize-components/src/components/connection-icon/stories/index.stories.jsx":(p,r,o)=>{"use strict";o.r(r),o.d(r,{__namedExportsOrder:()=>E,_default:()=>g,default:()=>x});var a=o("../publicize-components/src/components/connection-icon/index.jsx"),n=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=o.n(n),e=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),t=o.n(e),c=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),l=o.n(c),d=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),f=o.n(d),v=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=o.n(v),u=o("../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_=o.n(u),m=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../social-logos/src/social-logo-colors.css"),i={};i.styleTagTransform=_(),i.setAttributes=f(),i.insert=l().bind(null,"head"),i.domAPI=t(),i.insertStyleElement=y();var b=s()(m.A,i);const T=m.A&&m.A.locals?m.A.locals:void 0;var h=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),S=`import ConnectionIcon from '../index.jsx';
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
};`,locationsMap:{default:{startLoc:{col:17,line:16},endLoc:{col:2,line:18},startBody:{col:17,line:16},endBody:{col:2,line:18}}}}},title:"JS Packages/Publicize Components/ConnectionIcon",component:a.A,argTypes:{serviceName:{control:{type:"select"},options:["facebook","x","instagram","linkedin","nextdoor","tumblr","bluesky","mastodon"]}}},g=(P=>(0,h.jsx)(a.A,{...P})).bind({});g.args={serviceName:"tumblr",label:"Jetpack Social",checked:!0,profilePicture:"https://gravatar.com/avatar/5a5f21e099ba62ae525e62cd1ad859985c8170b8811431e7fa6ccbc9da22405b"};const E=["_default"];g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"args => <ConnectionIcon {...args} />",...g.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+primitives@4.25.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js":(p,r,o)=>{"use strict";o.d(r,{Ey:()=>y,G:()=>t,N1:()=>c,VG:()=>_,W4:()=>u,jl:()=>e,lA:()=>v,rw:()=>f,t4:()=>m,tS:()=>d,wA:()=>l});var a=o("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),n=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const e=i=>(0,n.createElement)("circle",i),t=i=>(0,n.createElement)("g",i),c=i=>(0,n.createElement)("line",i),l=i=>(0,n.createElement)("path",i),d=i=>(0,n.createElement)("polygon",i),f=i=>(0,n.createElement)("rect",i),v=i=>(0,n.createElement)("defs",i),y=i=>(0,n.createElement)("radialGradient",i),u=i=>(0,n.createElement)("linearGradient",i),_=i=>(0,n.createElement)("stop",i),m=(0,n.forwardRef)(({className:i,isPressed:b,...T},h)=>{const S={...T,className:(0,a.A)(i,{"is-pressed":b})||void 0,"aria-hidden":!0,focusable:!1};return(0,s.jsx)("svg",{...S,ref:h})});m.displayName="SVG"},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(p,r,o)=>{"use strict";o.d(r,{A:()=>s});function a(e){var t,c,l="";if(typeof e=="string"||typeof e=="number")l+=e;else if(typeof e=="object")if(Array.isArray(e)){var d=e.length;for(t=0;t<d;t++)e[t]&&(c=a(e[t]))&&(l&&(l+=" "),l+=c)}else for(c in e)e[c]&&(l&&(l+=" "),l+=c);return l}function n(){for(var e,t,c=0,l="",d=arguments.length;c<d;c++)(e=arguments[c])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}const s=n},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../social-logos/src/social-logo-colors.css":(p,r,o)=>{"use strict";o.d(r,{A:()=>c});var a=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=o.n(a),s=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),e=o.n(s),t=e()(n());t.push([p.id,`:root {
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
`,""]);const c=t},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js":(p,r,o)=>{"use strict";var a=o("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function n(){}function s(){}s.resetWarningCache=n,p.exports=function(){function e(l,d,f,v,y,u){if(u!==a){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}e.isRequired=e;function t(){return e}var c={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:n};return c.PropTypes=c,c}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":(p,r,o)=>{if(0)var a,n;else p.exports=o("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":p=>{"use strict";var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";p.exports=r},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":p=>{"use strict";var r=[];function o(s){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===s){e=t;break}return e}function a(s,e){for(var t={},c=[],l=0;l<s.length;l++){var d=s[l],f=e.base?d[0]+e.base:d[0],v=t[f]||0,y="".concat(f," ").concat(v);t[f]=v+1;var u=o(y),_={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(u!==-1)r[u].references++,r[u].updater(_);else{var m=n(_,e);e.byIndex=l,r.splice(l,0,{identifier:y,updater:m,references:1})}c.push(y)}return c}function n(s,e){var t=e.domAPI(e);t.update(s);var c=function(d){if(d){if(d.css===s.css&&d.media===s.media&&d.sourceMap===s.sourceMap&&d.supports===s.supports&&d.layer===s.layer)return;t.update(s=d)}else t.remove()};return c}p.exports=function(s,e){e=e||{},s=s||[];var t=a(s,e);return function(l){l=l||[];for(var d=0;d<t.length;d++){var f=t[d],v=o(f);r[v].references--}for(var y=a(l,e),u=0;u<t.length;u++){var _=t[u],m=o(_);r[m].references===0&&(r[m].updater(),r.splice(m,1))}t=y}}},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertBySelector.js":p=>{"use strict";var r={};function o(n){if(typeof r[n]>"u"){var s=document.querySelector(n);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch{s=null}r[n]=s}return r[n]}function a(n,s){var e=o(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(s)}p.exports=a},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertStyleElement.js":p=>{"use strict";function r(o){var a=document.createElement("style");return o.setAttributes(a,o.attributes),o.insert(a,o.options),a}p.exports=r},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(p,r,o)=>{"use strict";function a(n){var s=o.nc;s&&n.setAttribute("nonce",s)}p.exports=a},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleDomAPI.js":p=>{"use strict";function r(n,s,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var c=typeof e.layer<"u";c&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,c&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var l=e.sourceMap;l&&typeof btoa<"u"&&(t+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),s.styleTagTransform(t,n,s.options)}function o(n){if(n.parentNode===null)return!1;n.parentNode.removeChild(n)}function a(n){if(typeof document>"u")return{update:function(){},remove:function(){}};var s=n.insertStyleElement(n);return{update:function(t){r(s,n,t)},remove:function(){o(s)}}}p.exports=a},"../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleTagTransform.js":p=>{"use strict";function r(o,a){if(a.styleSheet)a.styleSheet.cssText=o;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(o))}}p.exports=r}}]);
