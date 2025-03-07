"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3445],{"../publicize-components/src/components/connection-list/stories/list.stories.tsx":(g,l,e)=>{e.r(l),e.d(l,{NoTitle:()=>u,__namedExportsOrder:()=>S,_default:()=>m,default:()=>E});var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=e("../publicize-components/src/components/connection-list/item.tsx"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(d),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../publicize-components/src/components/connection-list/list-style.module.scss"),o={};o.insert="head",o.singleton=!1;var L=r()(n.A,o);const a=n.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function s({connections:b,onToggle:f,title:C=null}){const v=(0,c.useCallback)(p=>()=>{f(p)},[f]);return(0,t.jsxs)("section",{className:a.wrapper,children:[C&&(0,t.jsx)("h4",{className:a.title,children:C}),(0,t.jsx)("ul",{className:a.list,children:b.map(p=>(0,t.jsx)("li",{className:a.item,children:(0,t.jsx)(i.W,{connection:p,onToggle:v(p.connection_id)})},p.connection_id))})]})}try{s.displayName="ConnectionList",s.__docgenInfo={description:"The component to render a list of social media connections.",displayName:"ConnectionList",props:{connections:{defaultValue:null,description:"",name:"connections",required:!0,type:{name:"Connection[]"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!0,type:{name:"(connectionId: string) => void"}},title:{defaultValue:{value:"null"},description:"",name:"title",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../publicize-components/src/components/connection-list/list.tsx#ConnectionList"]={docgenInfo:s.__docgenInfo,name:"ConnectionList",path:"../publicize-components/src/components/connection-list/list.tsx#ConnectionList"})}catch{}var _=`/* istanbul ignore file -- Ignore code coverage */
import { useCallback, useState } from '@wordpress/element';
import { Connection } from '../../../social-store/types';
import { ConnectionList, ConnectionListProps } from '../list';
import type { StoryFn, Meta } from '@storybook/react';

export default {
	title: 'JS Packages/Publicize Components/Connection List/List',
	component: ConnectionList,
} satisfies Meta< typeof ConnectionList >;

// Create an interactive template with toggling functionality
const Template: StoryFn< typeof ConnectionList > = args => {
	const [ connections, setConnections ] = useState( args.connections );

	const handleToggle = useCallback( ( connectionId: string ) => {
		setConnections( prevConnections =>
			prevConnections.map( connection =>
				connection.connection_id === connectionId
					? { ...connection, enabled: ! connection.enabled }
					: connection
			)
		);
	}, [] );

	return (
		<ConnectionList connections={ connections } onToggle={ handleToggle } title={ args.title } />
	);
};

const DefaultArgs: ConnectionListProps = {
	connections: [
		{
			display_name: 'Matt Mullenweg',
			profile_picture:
				'https://gravatar.com/avatar/5a5f21e099ba62ae525e62cd1ad859985c8170b8811431e7fa6ccbc9da22405b',
			connection_id: '1234',
			service_name: 'tumblr',
			enabled: true,
		} as Connection,
		{
			display_name: 'Matt Mullenweg',
			profile_picture:
				'https://gravatar.com/avatar/5a5f21e099ba62ae525e62cd1ad859985c8170b8811431e7fa6ccbc9da22405b',
			connection_id: '4567',
			service_name: 'bluesky',
			enabled: false,
		} as Connection,
		{
			display_name: 'Matt Mullenweg',
			profile_picture:
				'https://gravatar.com/avatar/5a5f21e099ba62ae525e62cd1ad859985c8170b8811431e7fa6ccbc9da22405b',
			connection_id: '6789',
			service_name: 'mastodon',
			enabled: true,
		} as Connection,
	],
	onToggle: () => {},
	title: 'Select where to share',
};

// Export Default story
export const _default = Template.bind( {} );
_default.args = DefaultArgs;

export const NoTitle = Template.bind( {} );
NoTitle.args = {
	...DefaultArgs,
	title: undefined,
};
`,T={_default:{startLoc:{col:17,line:13},endLoc:{col:1,line:26},startBody:{col:17,line:13},endBody:{col:1,line:26}},NoTitle:{startLoc:{col:17,line:13},endLoc:{col:1,line:26},startBody:{col:17,line:13},endBody:{col:1,line:26}}};const E={parameters:{storySource:{source:`/* wp:polyfill */
/* wp:polyfill esnext.iterator.map */
/* istanbul ignore file -- Ignore code coverage */
import { useCallback, useState } from '@wordpress/element';
import { ConnectionList } from '../list';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Publicize Components/Connection List/List',
  component: ConnectionList
};

// Create an interactive template with toggling functionality
const Template = args => {
  const [connections, setConnections] = useState(args.connections);
  const handleToggle = useCallback(connectionId => {
    setConnections(prevConnections => prevConnections.map(connection => connection.connection_id === connectionId ? {
      ...connection,
      enabled: !connection.enabled
    } : connection));
  }, []);
  return /*#__PURE__*/_jsx(ConnectionList, {
    connections: connections,
    onToggle: handleToggle,
    title: args.title
  });
};
const DefaultArgs = {
  connections: [{
    display_name: 'Matt Mullenweg',
    profile_picture: 'https://gravatar.com/avatar/5a5f21e099ba62ae525e62cd1ad859985c8170b8811431e7fa6ccbc9da22405b',
    connection_id: '1234',
    service_name: 'tumblr',
    enabled: true
  }, {
    display_name: 'Matt Mullenweg',
    profile_picture: 'https://gravatar.com/avatar/5a5f21e099ba62ae525e62cd1ad859985c8170b8811431e7fa6ccbc9da22405b',
    connection_id: '4567',
    service_name: 'bluesky',
    enabled: false
  }, {
    display_name: 'Matt Mullenweg',
    profile_picture: 'https://gravatar.com/avatar/5a5f21e099ba62ae525e62cd1ad859985c8170b8811431e7fa6ccbc9da22405b',
    connection_id: '6789',
    service_name: 'mastodon',
    enabled: true
  }],
  onToggle: () => {},
  title: 'Select where to share'
};

// Export Default story
export const _default = Template.bind({});
_default.args = DefaultArgs;
export const NoTitle = Template.bind({});
NoTitle.args = {
  ...DefaultArgs,
  title: undefined
};`,locationsMap:{default:{startLoc:{col:17,line:13},endLoc:{col:1,line:26},startBody:{col:17,line:13},endBody:{col:1,line:26}},"no-title":{startLoc:{col:17,line:13},endLoc:{col:1,line:26},startBody:{col:17,line:13},endBody:{col:1,line:26}}}}},title:"JS Packages/Publicize Components/Connection List/List",component:s},j=b=>{const[f,C]=(0,c.useState)(b.connections),v=(0,c.useCallback)(p=>{C(h=>h.map(y=>y.connection_id===p?{...y,enabled:!y.enabled}:y))},[]);return(0,t.jsx)(s,{connections:f,onToggle:v,title:b.title})},x={connections:[{display_name:"Matt Mullenweg",profile_picture:"https://gravatar.com/avatar/5a5f21e099ba62ae525e62cd1ad859985c8170b8811431e7fa6ccbc9da22405b",connection_id:"1234",service_name:"tumblr",enabled:!0},{display_name:"Matt Mullenweg",profile_picture:"https://gravatar.com/avatar/5a5f21e099ba62ae525e62cd1ad859985c8170b8811431e7fa6ccbc9da22405b",connection_id:"4567",service_name:"bluesky",enabled:!1},{display_name:"Matt Mullenweg",profile_picture:"https://gravatar.com/avatar/5a5f21e099ba62ae525e62cd1ad859985c8170b8811431e7fa6ccbc9da22405b",connection_id:"6789",service_name:"mastodon",enabled:!0}],onToggle:()=>{},title:"Select where to share"},m=j.bind({});m.args=x;const u=j.bind({});u.args={...x,title:void 0};const S=["_default","NoTitle"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
  const [connections, setConnections] = useState(args.connections);
  const handleToggle = useCallback((connectionId: string) => {
    setConnections(prevConnections => prevConnections.map(connection => connection.connection_id === connectionId ? {
      ...connection,
      enabled: !connection.enabled
    } : connection));
  }, []);
  return <ConnectionList connections={connections} onToggle={handleToggle} title={args.title} />;
}`,...m.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  const [connections, setConnections] = useState(args.connections);
  const handleToggle = useCallback((connectionId: string) => {
    setConnections(prevConnections => prevConnections.map(connection => connection.connection_id === connectionId ? {
      ...connection,
      enabled: !connection.enabled
    } : connection));
  }, []);
  return <ConnectionList connections={connections} onToggle={handleToggle} title={args.title} />;
}`,...u.parameters?.docs?.source}}}},"../publicize-components/src/components/connection-list/item.tsx":(g,l,e)=>{e.d(l,{W:()=>s});var c=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-control/index.js"),i=e("../publicize-components/src/components/connection-icon/index.jsx"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(d),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../publicize-components/src/components/connection-list/item-style.module.scss"),o={};o.insert="head",o.singleton=!1;var L=r()(n.A,o);const a=n.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function s({connection:_,onToggle:T}){return(0,t.jsxs)("div",{className:a.wrapper,children:[(0,t.jsxs)("div",{className:a.content,children:[(0,t.jsx)(i.A,{serviceName:_.service_name,label:_.display_name,profilePicture:_.profile_picture}),(0,t.jsx)("div",{className:a["display-name"],children:_.display_name})]}),(0,t.jsx)(c.A,{className:a.toggle,checked:_.enabled,onChange:T,__nextHasNoMarginBottom:!0})]})}try{s.displayName="ConnectionListItem",s.__docgenInfo={description:"The connection list item component.",displayName:"ConnectionListItem",props:{connection:{defaultValue:null,description:"",name:"connection",required:!0,type:{name:"Connection"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!0,type:{name:"VoidFunction"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../publicize-components/src/components/connection-list/item.tsx#ConnectionListItem"]={docgenInfo:s.__docgenInfo,name:"ConnectionListItem",path:"../publicize-components/src/components/connection-list/item.tsx#ConnectionListItem"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../publicize-components/src/components/connection-list/item-style.module.scss":(g,l,e)=>{e.d(l,{A:()=>o});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(c),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(d),n=r()(i());n.push([g.id,".VvplN99texaaGQEF3mWr{display:flex;justify-content:space-between;padding:.5rem}.VvplN99texaaGQEF3mWr .XwOVXDdoQWBQ3WaUVcy4{display:flex;flex-wrap:wrap;min-height:1.5rem;padding:.25rem;align-items:center;gap:.875rem}.VvplN99texaaGQEF3mWr .BOv7NlCUkPvTzmnZJHBP{text-overflow:ellipsis}.VvplN99texaaGQEF3mWr .oE_FrwhOy_2c9WT_OEAn{margin-top:auto;margin-bottom:auto}",""]),n.locals={wrapper:"VvplN99texaaGQEF3mWr",content:"XwOVXDdoQWBQ3WaUVcy4","display-name":"BOv7NlCUkPvTzmnZJHBP",toggle:"oE_FrwhOy_2c9WT_OEAn"};const o=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../publicize-components/src/components/connection-list/list-style.module.scss":(g,l,e)=>{e.d(l,{A:()=>o});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(c),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(d),n=r()(i());n.push([g.id,".L40ZesIRbzaisEiKN0uT{display:flex;flex-direction:column;gap:.875rem}.L40ZesIRbzaisEiKN0uT .OVtqkFmChK2_NPYr5x5f{text-transform:uppercase;margin-block:0px}.L40ZesIRbzaisEiKN0uT .K5P97T29nP8p2LZtF0Gx{list-style-type:none;margin-inline:0;margin-block:0;padding-inline:0;padding-block:0;border:1px solid #ddd;border-radius:2px}.L40ZesIRbzaisEiKN0uT .rz1kRDbxHzFnO77quMW6{width:100%}.L40ZesIRbzaisEiKN0uT .rz1kRDbxHzFnO77quMW6:not(:last-child){border-bottom:1px solid #ddd}",""]),n.locals={wrapper:"L40ZesIRbzaisEiKN0uT",title:"OVtqkFmChK2_NPYr5x5f",list:"K5P97T29nP8p2LZtF0Gx",item:"rz1kRDbxHzFnO77quMW6"};const o=n}}]);
