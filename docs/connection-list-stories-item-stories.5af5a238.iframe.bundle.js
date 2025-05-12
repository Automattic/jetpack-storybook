"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1236],{"../publicize-components/src/components/connection-list/stories/item.stories.tsx":(p,a,e)=>{e.r(a),e.d(a,{__namedExportsOrder:()=>d,_default:()=>n,default:()=>s});var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=e("../publicize-components/src/components/connection-list/item.tsx"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=`/* istanbul ignore file -- Ignore code coverage */
import { useCallback, useState } from '@wordpress/element';
import { Connection } from '../../../social-store/types';
import { ConnectionListItem, ConnectionListItemProps } from '../item';
import type { StoryFn, Meta } from '@storybook/react';

export default {
	title: 'JS Packages/Publicize Components/Connection List/Item',
	component: ConnectionListItem,
} satisfies Meta< typeof ConnectionListItem >;

const Template: StoryFn< typeof ConnectionListItem > = args => {
	const [ isEnabled, setIsEnabled ] = useState( args.connection.enabled );

	const handleToggle = useCallback( () => {
		setIsEnabled( ! isEnabled );
	}, [ isEnabled ] );

	const connection = {
		...args.connection,
		enabled: isEnabled,
	};

	return <ConnectionListItem connection={ connection } onToggle={ handleToggle } />;
};

const DefaultArgs: ConnectionListItemProps = {
	connection: {
		display_name: 'Matt Mullenweg',
		profile_picture:
			'https://gravatar.com/avatar/5a5f21e099ba62ae525e62cd1ad859985c8170b8811431e7fa6ccbc9da22405b',
		connection_id: '1234',
		service_name: 'tumblr',
		enabled: true,
	} as Connection,
	onToggle: () => {},
};

// Export Default story
export const _default = Template.bind( {} );

_default.args = DefaultArgs;
`,t={_default:{startLoc:{col:17,line:9},endLoc:{col:1,line:22},startBody:{col:17,line:9},endBody:{col:1,line:22}}};const s={parameters:{storySource:{source:`/* istanbul ignore file -- Ignore code coverage */
import { useCallback, useState } from '@wordpress/element';
import { ConnectionListItem } from '../item';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Publicize Components/Connection List/Item',
  component: ConnectionListItem
};
const Template = args => {
  const [isEnabled, setIsEnabled] = useState(args.connection.enabled);
  const handleToggle = useCallback(() => {
    setIsEnabled(!isEnabled);
  }, [isEnabled]);
  const connection = {
    ...args.connection,
    enabled: isEnabled
  };
  return /*#__PURE__*/_jsx(ConnectionListItem, {
    connection: connection,
    onToggle: handleToggle
  });
};
const DefaultArgs = {
  connection: {
    display_name: 'Matt Mullenweg',
    profile_picture: 'https://gravatar.com/avatar/5a5f21e099ba62ae525e62cd1ad859985c8170b8811431e7fa6ccbc9da22405b',
    connection_id: '1234',
    service_name: 'tumblr',
    enabled: true
  },
  onToggle: () => {}
};

// Export Default story
export const _default = Template.bind({});
_default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:17,line:9},endLoc:{col:1,line:22},startBody:{col:17,line:9},endBody:{col:1,line:22}}}}},title:"JS Packages/Publicize Components/Connection List/Item",component:l.W},u=o=>{const[_,g]=(0,c.useState)(o.connection.enabled),b=(0,c.useCallback)(()=>{g(!_)},[_]),E={...o.connection,enabled:_};return(0,r.jsx)(l.W,{connection:E,onToggle:b})},i={connection:{display_name:"Matt Mullenweg",profile_picture:"https://gravatar.com/avatar/5a5f21e099ba62ae525e62cd1ad859985c8170b8811431e7fa6ccbc9da22405b",connection_id:"1234",service_name:"tumblr",enabled:!0},onToggle:()=>{}},n=u.bind({});n.args=i;const d=["_default"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const [isEnabled, setIsEnabled] = useState(args.connection.enabled);
  const handleToggle = useCallback(() => {
    setIsEnabled(!isEnabled);
  }, [isEnabled]);
  const connection = {
    ...args.connection,
    enabled: isEnabled
  };
  return <ConnectionListItem connection={connection} onToggle={handleToggle} />;
}`,...n.parameters?.docs?.source}}}},"../publicize-components/src/components/connection-list/item.tsx":(p,a,e)=>{e.d(a,{W:()=>d});var c=e("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-control/index.js"),l=e("../publicize-components/src/components/connection-icon/index.jsx"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(r),t=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.68.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../publicize-components/src/components/connection-list/item-style.module.scss"),s={};s.insert="head",s.singleton=!1;var u=m()(t.A,s);const i=t.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function d({connection:o,onToggle:_}){return(0,n.jsxs)("div",{className:i.wrapper,children:[(0,n.jsxs)("div",{className:i.content,children:[(0,n.jsx)(l.A,{serviceName:o.service_name,label:o.display_name,profilePicture:o.profile_picture}),(0,n.jsx)("div",{className:i["display-name"],children:o.display_name})]}),(0,n.jsx)(c.A,{className:i.toggle,checked:o.enabled,onChange:_,__nextHasNoMarginBottom:!0})]})}try{d.displayName="ConnectionListItem",d.__docgenInfo={description:"The connection list item component.",displayName:"ConnectionListItem",props:{connection:{defaultValue:null,description:"",name:"connection",required:!0,type:{name:"Connection"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!0,type:{name:"VoidFunction"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../publicize-components/src/components/connection-list/item.tsx#ConnectionListItem"]={docgenInfo:d.__docgenInfo,name:"ConnectionListItem",path:"../publicize-components/src/components/connection-list/item.tsx#ConnectionListItem"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.68.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../publicize-components/src/components/connection-list/item-style.module.scss":(p,a,e)=>{e.d(a,{A:()=>s});var c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(c),r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),m=e.n(r),t=m()(l());t.push([p.id,".VvplN99texaaGQEF3mWr{display:flex;justify-content:space-between;padding:.5rem}.VvplN99texaaGQEF3mWr .XwOVXDdoQWBQ3WaUVcy4{display:flex;flex-wrap:wrap;min-height:1.5rem;padding:.25rem;align-items:center;gap:.875rem}.VvplN99texaaGQEF3mWr .BOv7NlCUkPvTzmnZJHBP{text-overflow:ellipsis}.VvplN99texaaGQEF3mWr .oE_FrwhOy_2c9WT_OEAn{margin-top:auto;margin-bottom:auto}",""]),t.locals={wrapper:"VvplN99texaaGQEF3mWr",content:"XwOVXDdoQWBQ3WaUVcy4","display-name":"BOv7NlCUkPvTzmnZJHBP",toggle:"oE_FrwhOy_2c9WT_OEAn"};const s=t}}]);
