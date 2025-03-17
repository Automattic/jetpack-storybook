(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2597],{"../components/components/threats-data-views/stories/index.stories.tsx":(f,c,e)=>{"use strict";e.r(c),e.d(c,{Default:()=>k,FixerStatuses:()=>C,FreeResults:()=>O,__namedExportsOrder:()=>ye,default:()=>ve});var a=e("../scan/src/index.ts"),i=e("../../../node_modules/.pnpm/@wordpress+dataviews@4.15.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_b9a36bf3010841a36adc99ad3275ff5d/node_modules/@wordpress/dataviews/build/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+date@5.19.0/node_modules/@wordpress/date/build-module/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=e("../components/components/badge/index.tsx"),g=e("../components/components/threat-fixer-button/index.tsx"),T=e("../components/components/threat-severity-badge/index.tsx"),R=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/plugins.js"),S=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/color.js"),b=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/wordpress.js"),w=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/code.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/shield.js");const d=o.__,E=[{value:"current",label:d("Active","jetpack-components"),variant:"warning"},{value:"fixed",label:d("Fixed","jetpack-components"),variant:"success"},{value:"ignored",label:d("Ignored","jetpack-components")}],A=[{value:"plugins",label:d("Plugin","jetpack-components")},{value:"themes",label:d("Theme","jetpack-components")},{value:"core",label:d("WordPress","jetpack-components")},{value:"file",label:d("File","jetpack-components")}],x={plugins:R.A,themes:S.A,core:b.A,file:w.A,default:t.A},N="threat",V="title",I="description",M="icon",B="status",Z="type",L="extension",le="plugin",q="theme",K="severity",G="signature",Y="first-detected",ae="fixed-on",ee="auto-fix",me="fix",ne="ignore",ie="unignore";var re=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ue=e.n(re),te=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/threats-data-views/styles.module.scss"),J={};J.insert="head",J.singleton=!1;var Ie=ue()(te.A,J);const U=te.A.locals||{};var be=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control/component.js"),pe=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option/component.js"),u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _e=o.__;function xe({data:p,view:W,onChangeView:se}){const{activeThreatsCount:z,historicThreatsCount:F}=(0,s.useMemo)(()=>p.reduce((v,j)=>(j.status&&(j.status==="current"?v.activeThreatsCount++:v.historicThreatsCount++),v),{activeThreatsCount:0,historicThreatsCount:0}),[p]),$=(0,s.useCallback)(v=>{const j=W.filters.filter(H=>H.field!=="status");v==="active"?j.push({field:"status",operator:"isAny",value:["current"]}):v==="historic"&&j.push({field:"status",operator:"isAny",value:["fixed","ignored"]}),se({...W,filters:j})},[W,se]),D=(0,s.useMemo)(()=>v=>W.filters.some(j=>j.field==="status"&&Array.isArray(j.value)&&j.value.length===v.length&&v.every(H=>j.value.includes(H))),[W.filters]),Q=(0,s.useMemo)(()=>D(["current"])?"active":D(["fixed","ignored"])?"historic":"",[D]);if(!(z+F))return null;try{return(0,u.jsx)("div",{children:(0,u.jsx)("div",{className:U["toggle-group-control"],children:(0,u.jsxs)(be.A,{value:Q,onChange:$,isBlock:!0,hideLabelFromVision:!0,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,children:[(0,u.jsx)(pe.A,{value:"active",label:(0,o.sprintf)(_e("Active threats (%d)","jetpack-components"),z)}),(0,u.jsx)(pe.A,{value:"historic",label:(0,o.sprintf)(_e("History (%d)","jetpack-components"),F)})]})})})}catch{return null}}try{threatsstatustogglegroupcontrol.displayName="threatsstatustogglegroupcontrol",threatsstatustogglegroupcontrol.__docgenInfo={description:"ToggleGroupControl component for filtering threats by status.",displayName:"threatsstatustogglegroupcontrol",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Threat[]"}},view:{defaultValue:null,description:"",name:"view",required:!0,type:{name:"View"}},onChangeView:{defaultValue:null,description:"",name:"onChangeView",required:!0,type:{name:"(newView: View) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threats-data-views/threats-status-toggle-group-control.tsx#threatsstatustogglegroupcontrol"]={docgenInfo:threatsstatustogglegroupcontrol.__docgenInfo,name:"threatsstatustogglegroupcontrol",path:"../components/components/threats-data-views/threats-status-toggle-group-control.tsx#threatsstatustogglegroupcontrol"})}catch{}const r=o.__;function oe({data:p,filters:W,onChangeSelection:se,isThreatEligibleForFix:z,isThreatEligibleForIgnore:F,isThreatEligibleForUnignore:$,onFixThreats:D,onIgnoreThreats:Q,onUnignoreThreats:v}){const j={sort:{field:"severity",direction:"desc"},search:"",filters:W||[],page:1,perPage:20},H={table:{...j,fields:[K,Z,ee],titleField:V,descriptionField:I,showMedia:!1},list:{...j,fields:[K,Z,L,G],titleField:V,mediaField:M,showMedia:!0}},[de,Te]=(0,s.useState)({type:"table",...H.table}),{themes:he,plugins:fe,signatures:ge,dataFields:P}=(0,s.useMemo)(()=>p.reduce((_,n)=>{if(n.extension)switch(n.extension.type){case"themes":_.themes.find(({value:y})=>y===n.extension.slug)||_.themes.push({value:n.extension.slug,label:n.extension.name});break;case"plugins":_.plugins.find(({value:y})=>y===n.extension.slug)||_.plugins.push({value:n.extension.slug,label:n.extension.name});break;default:break}return n.signature&&(_.signatures.find(({value:y})=>y===n.signature)||_.signatures.push({value:n.signature,label:n.signature})),Object.keys(n).forEach(y=>{!_.dataFields.includes(y)&&n[y]!==null&&n[y]!==void 0&&_.dataFields.push(y)}),_},{themes:[],plugins:[],signatures:[],dataFields:[]}),[p]),ce=(0,s.useMemo)(()=>[{id:V,label:r("Threat","jetpack-components"),enableGlobalSearch:!0,enableHiding:!1,render:({item:n})=>(0,u.jsx)("div",{className:U.threat__title,children:n.title})},{id:I,label:r("Description","jetpack-components"),enableGlobalSearch:!0,enableHiding:!1,render:({item:n})=>(0,u.jsx)("div",{className:U.threat__description,children:n.description})},{id:M,label:r("Icon","jetpack-components"),enableHiding:!1,getValue({item:n}){return(0,a.ni)(n)},render({item:n}){return(0,u.jsx)("div",{className:U.threat__media,children:(0,u.jsx)(l.A,{icon:x[(0,a.ni)(n)],size:20})})}},{id:B,label:r("Status","jetpack-components"),elements:E,getValue({item:n}){return n.status?E.find(({value:X})=>X===n.status)?.value??n.status:"current"},render({item:n}){if(n.status){const X=E.find(({value:y})=>y===n.status);if(X)return(0,u.jsx)(h.A,{variant:X?.variant,children:X.label})}return(0,u.jsx)(h.A,{variant:"warning",children:r("Active","jetpack-components")})}},{id:Z,label:r("Type","jetpack-components"),elements:A,getValue({item:n}){switch((0,a.ni)(n)){case"core":return r("WordPress","jetpack-components");case"plugins":return r("Plugin","jetpack-components");case"themes":return r("Theme","jetpack-components");case"file":return r("File","jetpack-components");default:return r("Unknown","jetpack-components")}}},{id:L,label:r("Extension","jetpack-components"),enableGlobalSearch:!0,enableHiding:!0,getValue({item:n}){return n.extension?n.extension.slug:""},render({item:n}){return n.extension?n.extension.name:""}},{id:le,label:r("Plugin","jetpack-components"),enableGlobalSearch:!0,enableHiding:!1,elements:fe,getValue({item:n}){return n.extension?n.extension.slug:""}},{id:q,label:r("Theme","jetpack-components"),enableGlobalSearch:!0,enableHiding:!1,elements:he,getValue({item:n}){return n.extension?n.extension.slug:""}},...P.includes("severity")?[{id:K,label:r("Severity","jetpack-components"),type:"integer",getValue({item:n}){return n.severity??0},render({item:n}){return(0,u.jsx)(T.A,{severity:n.severity})}}]:[],...P.includes("signature")?[{id:G,label:r("Signature","jetpack-components"),elements:ge,enableGlobalSearch:!0,getValue({item:n}){return n.signature||""}}]:[],...P.includes("firstDetected")?[{id:Y,label:r("First Detected","jetpack-components"),type:"datetime",getValue({item:n}){return n.firstDetected?new Date(n.firstDetected):null},render({item:n}){return n.firstDetected?(0,u.jsx)("span",{className:U.threat__firstDetected,children:(0,m.b5)("F j Y",n.firstDetected,!1)}):null}}]:[],...P.includes("fixedOn")?[{id:ae,label:r("Fixed On","jetpack-components"),type:"datetime",getValue({item:n}){return n.fixedOn?new Date(n.fixedOn):null},render({item:n}){return n.fixedOn?(0,u.jsx)("span",{className:U.threat__fixedOn,children:(0,m.b5)("F j Y",n.fixedOn,!1)}):null}}]:[],...P.includes("fixable")?[{id:ee,label:r("Auto-fix","jetpack-components"),enableHiding:!1,elements:[{value:"yes",label:r("Yes","jetpack-components")},{value:"no",label:r("No","jetpack-components")}],getValue({item:n}){return n.fixable?"yes":"no"},render({item:n}){return n.fixable?(0,u.jsx)(g.A,{threat:n,onClick:D}):null}}]:[]],[P,fe,he,ge,D]),we=(0,s.useMemo)(()=>{const _=[];return P.includes("fixable")&&_.push({id:me,label:r("Auto-fix","jetpack-components"),isPrimary:!0,callback:D,isEligible(n){return D?z?z(n):!!n.fixable:!1}}),P.includes("status")&&_.push({id:ne,label:r("Ignore","jetpack-components"),isPrimary:!0,isDestructive:!0,callback:Q,isEligible(n){return Q?F?F(n):n.status==="current":!1}}),P.includes("status")&&_.push({id:ie,label:r("Unignore","jetpack-components"),isPrimary:!0,isDestructive:!0,callback:v,isEligible(n){return v?$?$(n):n.status==="ignored":!1}}),_},[P,D,Q,v,z,F,$]),{data:Ee,paginationInfo:Se}=(0,s.useMemo)(()=>(0,i.Pp)(p,de,ce),[p,de,ce]),je=(0,s.useCallback)(_=>{Te(_)},[]),Ae=(0,s.useCallback)(_=>_.id.toString(),[]);return(0,u.jsx)(i.Vw,{actions:we,data:Ee,defaultLayouts:H,fields:ce,getItemId:Ae,onChangeSelection:se,onChangeView:je,paginationInfo:Se,view:de,header:(0,u.jsx)(xe,{data:p,view:de,onChangeView:je})})}try{threatsdataviews.displayName="threatsdataviews",threatsdataviews.__docgenInfo={description:"DataViews component for displaying security threats.",displayName:"threatsdataviews",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Threat[]"}},filters:{defaultValue:null,description:"",name:"filters",required:!1,type:{name:"Filter[]"}},onChangeSelection:{defaultValue:null,description:"",name:"onChangeSelection",required:!1,type:{name:"(selectedItemIds: string[]) => void"}},isThreatEligibleForFix:{defaultValue:null,description:"",name:"isThreatEligibleForFix",required:!1,type:{name:"(threat: Threat) => boolean"}},isThreatEligibleForIgnore:{defaultValue:null,description:"",name:"isThreatEligibleForIgnore",required:!1,type:{name:"(threat: Threat) => boolean"}},isThreatEligibleForUnignore:{defaultValue:null,description:"",name:"isThreatEligibleForUnignore",required:!1,type:{name:"(threat: Threat) => boolean"}},onFixThreats:{defaultValue:null,description:"",name:"onFixThreats",required:!1,type:{name:"(threats: Threat[]) => void"}},onIgnoreThreats:{defaultValue:null,description:"",name:"onIgnoreThreats",required:!1,type:{name:"(items: Threat[], context: { registry: any; onActionPerformed?: (items: Threat[]) => void; }) => void"}},onUnignoreThreats:{defaultValue:null,description:"",name:"onUnignoreThreats",required:!1,type:{name:"(items: Threat[], context: { registry: any; onActionPerformed?: (items: Threat[]) => void; }) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threats-data-views/index.tsx#threatsdataviews"]={docgenInfo:threatsdataviews.__docgenInfo,name:"threatsdataviews",path:"../components/components/threats-data-views/index.tsx#threatsdataviews"})}catch{}var Pe=`import ThreatsDataViews from '../index.js';

export default {
	title: 'JS Packages/Components/Threats Data Views',
	component: ThreatsDataViews,
	parameters: {
		backgrounds: {
			default: 'light',
			values: [ { name: 'light', value: 'white' } ],
		},
	},
	decorators: [
		Story => (
			<div style={ { maxWidth: '100%', backgroundColor: 'white' } }>
				<Story />
			</div>
		),
	],
};

export const Default = args => <ThreatsDataViews { ...args } />;
Default.args = {
	data: [
		{
			id: 185869885,
			signature: 'EICAR_AV_Test',
			title: 'Malicious code found in file: index.php',
			description:
				"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",
			firstDetected: '2024-10-07T20:45:06.000Z',
			fixedIn: null,
			severity: 8,
			fixable: { fixer: 'delete' },
			fixer: { status: 'not_started' },
			status: 'current',
			filename: '/var/www/html/wp-content/index.php',
			context: {
				'1': 'echo <<<HTML',
				'2': 'X5O!P%@AP[4\\\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*',
				'3': 'HTML;',
				marks: {},
			},
		},
		{
			id: 185869883,
			signature: 'Suspicious.Files',
			title: 'Malicious code found in file: fuzzy.php',
			description:
				'Our security scanners detected that this file is identical to a previously identified malicious file',
			firstDetected: '2024-10-07T20:45:06.000Z',
			fixedIn: null,
			severity: 4,
			fixable: false,
			status: 'ignored',
			filename: '/var/www/html/wp-content/fuzzy.php',
			context: '',
		},
		{
			id: 185868972,
			signature: 'EICAR_AV_Test_Suspicious',
			title: 'Malicious code found in file: jptt_eicar.php',
			description:
				"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",
			firstDetected: '2024-10-07T20:40:15.000Z',
			fixedIn: null,
			severity: 1,
			fixable: false,
			status: 'current',
			filename: '/var/www/html/wp-content/uploads/jptt_eicar.php',
			context: {
				'6': 'echo <<<HTML',
				'7': 'X5O!P%@AP[4\\\\PZX54(P^)7CC)7}$EICAR-SUSPICIOUS-ANTIVIRUS-TEST-FILE!$H+H*',
				'8': 'HTML;',
				'9': 'echo <<<HTML',
				'10': 'X5O!P%@AP[4\\\\PZX54(P^)7CC)7}$EICAR-SUSPICIOUS-ANTIVIRUS-TEST-FILE!$H+H*',
				'11': 'HTML;',
				marks: {},
			},
		},
		{
			id: 184847701,
			signature: 'Vulnerable.WP.Extension',
			title: 'Vulnerable Plugin: WP Super Cache (version 1.6.3)',
			description:
				'The plugin WP Super Cache (version 1.6.3) has a known vulnerability. The WP Super Cache plugin before version 1.7.2 is vulnerable to an authenticated RCE in the settings page.',
			firstDetected: '2024-10-02T17:34:59.000Z',
			fixedIn: '1.12.4',
			severity: 3,
			fixable: { fixer: 'update', target: '1.12.4', extensionStatus: 'inactive' },
			fixer: { status: 'in_progress', lastUpdated: new Date().toISOString() },
			status: 'current',
			filename: null,
			context: null,
			source: 'https://wpscan.com/vulnerability/733d8a02-0d44-4b78-bbb2-37e447acd2f3',
			extension: {
				name: 'WP Super Cache',
				slug: 'wp-super-cache',
				version: '1.6.3',
				type: 'plugins',
			},
		},
		{
			id: 185868945,
			signature: 'Core.File.Modification',
			title: 'Compromised WordPress core file: index.php',
			description:
				'Core WordPress files are not normally changed. If you did not make these changes you should review the code.',
			firstDetected: '2024-10-07T20:40:05.000Z',
			severity: 4,
			status: 'current',
			fixable: {
				fixer: 'replace',
				file: '/var/www/html/wp-admin/index.php',
				extensionStatus: '',
			},
			filename: '/var/www/html/wp-admin/index.php',
			diff: "--- /tmp/wordpress/6.6.2/wordpress/wp-admin/index.php\\t2024-10-07 20:40:04.887546480 +0000\\n+++ /var/www/html/wp-admin/index.php\\t2024-10-07 20:39:58.775512965 +0000\\n@@ -210,3 +210,4 @@\\n wp_print_community_events_templates();\\n \\n require_once ABSPATH . 'wp-admin/admin-footer.php';\\n+if ( true === false ) exit();\\n\\\\ No newline at end of file\\n",
		},
		{
			id: 13216959,
			signature: 'Vulnerable.WP.Core',
			title: 'Vulnerable WordPress Version (6.4.3)',
			description: 'The installed version of WordPress (6.4.3) has a known vulnerability. ',
			firstDetected: '2024-07-15T21:56:50.000Z',
			severity: 4,
			fixedOn: '2024-07-15T22:01:42.000Z',
			status: 'fixed',
			fixable: false,
			version: '6.4.3',
			source: '',
		},
		{
			id: '7275a176-d579-471a-8492-df8edbdf27de',
			title: 'WooCommerce <= 3.4.5 - Authenticated Stored XSS',
			description:
				'The WooCommerce WordPress plugin was affected by an Authenticated Stored XSS security vulnerability.',
			firstDetected: '2024-07-15T21:56:50.000Z',
			fixedIn: '3.4.6',
			status: 'current',
			source: 'https://wpscan.com/vulnerability/7275a176-d579-471a-8492-df8edbdf27de',
			extension: {
				name: 'WooCommerce',
				slug: 'woocommerce',
				version: '3.4.5',
				type: 'plugins',
			},
		},
	],
	filters: [
		{
			field: 'status',
			operator: 'isAny',
			value: [ 'current' ],
		},
	],
	onFixThreats: () =>
		alert( 'Threat fix action callback triggered! This is handled by the component consumer.' ), // eslint-disable-line no-alert
	onIgnoreThreats: () =>
		alert( 'Ignore threat action callback triggered! This is handled by the component consumer.' ), // eslint-disable-line no-alert
	onUnignoreThreats: () =>
		// eslint-disable-next-line no-alert
		alert(
			'Unignore threat action callback triggered! This is handled by the component consumer.'
		),
};

export const FixerStatuses = args => <ThreatsDataViews { ...args } />;
FixerStatuses.args = {
	data: [
		{
			id: 13216959,
			signature: 'Vulnerable.WP.Core',
			title: 'Vulnerable WordPress Version (6.4.3)',
			description: 'This threat has an auto-fixer available. ',
			firstDetected: '2024-07-15T21:56:50.000Z',
			severity: 4,
			fixer: null,
			fixedOn: '2024-07-15T22:01:42.000Z',
			status: 'current',
			fixable: { fixer: 'update', target: '6.4.4', extensionStatus: 'inactive' },
			version: '6.4.3',
			source: '',
		},
		{
			id: 12345678910,
			signature: 'Vulnerable.WP.Extension',
			title: 'Vulnerable Plugin: Example Plugin (version 1.2.3)',
			description: 'This threat has an in-progress auto-fixer.',
			firstDetected: '2024-10-02T17:34:59.000Z',
			fixedIn: '1.2.4',
			severity: 3,
			fixable: { fixer: 'update', target: '1.12.4', extensionStatus: 'inactive' },
			fixer: { status: 'in_progress', lastUpdated: new Date().toISOString() },
			status: 'current',
			source: 'https://wpscan.com/vulnerability/733d8a02-0d44-4b78-bbb2-37e447acd2f3',
			extension: {
				name: 'Example Plugin',
				slug: 'example-plugin',
				version: '1.2.3',
				type: 'plugins',
			},
		},
		{
			id: 12345678911,
			signature: 'Vulnerable.WP.Extension',
			title: 'Vulnerable Theme: Example Theme (version 2.2.2)',
			description: 'This threat has an in-progress auto-fixer that is taking too long.',
			firstDetected: '2024-10-02T17:34:59.000Z',
			fixedIn: '2.22.22',
			severity: 3,
			fixable: { fixer: 'update', target: '1.12.4', extensionStatus: 'inactive' },
			fixer: { status: 'in_progress', lastUpdated: new Date( '1999-01-01' ).toISOString() },
			status: 'current',
			source: 'https://wpscan.com/vulnerability/733d8a02-0d44-4b78-bbb2-37e447acd2f3',
			extension: {
				name: 'Example Theme',
				slug: 'example-theme',
				version: '2.2.2',
				type: 'themes',
			},
		},
		{
			id: 12345678912,
			signature: 'Vulnerable.WP.Extension',
			title: 'Vulnerable Theme: Example Theme II (version 3.3.3)',
			description: 'This threat has a fixer with an error status.',
			firstDetected: '2024-10-02T17:34:59.000Z',
			fixedIn: '3.4.5',
			severity: 3,
			fixable: { fixer: 'update', target: '1.12.4', extensionStatus: 'inactive' },
			fixer: { status: 'error', error: 'error' },
			status: 'current',
			source: 'https://wpscan.com/vulnerability/733d8a02-0d44-4b78-bbb2-37e447acd2f3',
			extension: {
				name: 'Example Theme II',
				slug: 'example-theme-2',
				version: '3.3.3',
				type: 'themes',
			},
		},
		{
			id: 185868972,
			signature: 'EICAR_AV_Test_Suspicious',
			title: 'Malicious code found in file: jptt_eicar.php',
			description: 'This threat has no auto-fixer available.',
			firstDetected: '2024-10-07T20:40:15.000Z',
			fixedIn: null,
			severity: 1,
			fixable: false,
			status: 'current',
			filename: '/var/www/html/wp-content/uploads/jptt_eicar.php',
			context: {
				'6': 'echo <<<HTML',
				'7': 'X5O!P%@AP[4\\\\PZX54(P^)7CC)7}$EICAR-SUSPICIOUS-ANTIVIRUS-TEST-FILE!$H+H*',
				'8': 'HTML;',
				'9': 'echo <<<HTML',
				'10': 'X5O!P%@AP[4\\\\PZX54(P^)7CC)7}$EICAR-SUSPICIOUS-ANTIVIRUS-TEST-FILE!$H+H*',
				'11': 'HTML;',
				marks: {},
			},
		},
	],
	filters: [
		{
			field: 'status',
			operator: 'isAny',
			value: [ 'current' ],
		},
	],
	onFixThreats: () =>
		alert( 'Fix threat action callback triggered! This is handled by the component consumer.' ), // eslint-disable-line no-alert
	onIgnoreThreats: () =>
		alert( 'Ignore threat action callback triggered! This is handled by the component consumer.' ), // eslint-disable-line no-alert
	onUnignoreThreats: () =>
		// eslint-disable-next-line no-alert
		alert(
			'Unignore threat action callback triggered! This is handled by the component consumer.'
		),
};

export const FreeResults = args => <ThreatsDataViews { ...args } />;
FreeResults.args = {
	data: [
		{
			id: '1d0470df-4671-47ac-8d87-a165e8f7d502',
			title: 'WooCommerce <= 3.2.3 - Authenticated PHP Object Injection',
			description:
				'Versions 3.2.3 and earlier are affected by an issue where cached queries within shortcodes could lead to object injection. This is related to the recent WordPress 4.8.3 security release.This issue can only be exploited by users who can edit content and add shortcodes, but we still recommend all users running WooCommerce 3.x upgrade to 3.2 to mitigate this issue.',
			fixedIn: '3.2.4',
			source: 'https://wpscan.com/vulnerability/1d0470df-4671-47ac-8d87-a165e8f7d502',
			extension: {
				name: 'WooCommerce',
				slug: 'woocommerce',
				version: '3.2.3',
				type: 'plugins',
			},
		},
		{
			id: '7275a176-d579-471a-8492-df8edbdf27de',
			subtitle: 'WooCommerce 3.4.5',
			title: 'WooCommerce <= 3.4.5 - Authenticated Stored XSS',
			description:
				'The WooCommerce WordPress plugin was affected by an Authenticated Stored XSS security vulnerability.',
			fixedIn: '3.4.6',
			source: 'https://wpscan.com/vulnerability/7275a176-d579-471a-8492-df8edbdf27de',
			extension: {
				name: 'WooCommerce',
				slug: 'woocommerce',
				version: '3.4.5',
				type: 'plugins',
			},
		},
		{
			id: '733d8a02-0d44-4b78-bbb2-37e447acd2f3',
			title: 'WP Super Cache < 1.7.2 - Authenticated Remote Code Execution (RCE)',
			description:
				'The plugin was affected by an authenticated (admin+) RCE in the settings page due to input validation failure and weak $cache_path check in the WP Super Cache Settings -> Cache Location option. Direct access to the wp-cache-config.php file is not prohibited, so this vulnerability can be exploited for a web shell injection.\\r\\n\\r\\nAnother possible attack vector: from XSS (via another plugin affected by XSS) to RCE.',
			fixedIn: '1.7.2',
			source: 'https://wpscan.com/vulnerability/733d8a02-0d44-4b78-bbb2-37e447acd2f3',
			extension: {
				name: 'WP Super Cache',
				slug: 'wp-super-cache',
				version: '1.6.3',
				type: 'plugins',
			},
		},
	],
};
`,ke={Default:{startLoc:{col:23,line:23},endLoc:{col:2,line:25},startBody:{col:23,line:23},endBody:{col:2,line:25}},FixerStatuses:{startLoc:{col:29,line:163},endLoc:{col:2,line:165},startBody:{col:29,line:163},endBody:{col:2,line:165}},FreeResults:{startLoc:{col:27,line:293},endLoc:{col:2,line:295},startBody:{col:27,line:293},endBody:{col:2,line:295}}};const ve={title:"JS Packages/Components/Threats Data Views",component:oe,parameters:{storySource:{source:`import ThreatsDataViews from '../index.js';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Components/Threats Data Views',
  component: ThreatsDataViews,
  parameters: {
    backgrounds: {
      default: 'light',
      values: [{
        name: 'light',
        value: 'white'
      }]
    }
  },
  decorators: [Story => /*#__PURE__*/_jsx("div", {
    style: {
      maxWidth: '100%',
      backgroundColor: 'white'
    },
    children: /*#__PURE__*/_jsx(Story, {})
  })]
};
export const Default = args => /*#__PURE__*/_jsx(ThreatsDataViews, {
  ...args
});
Default.args = {
  data: [{
    id: 185869885,
    signature: 'EICAR_AV_Test',
    title: 'Malicious code found in file: index.php',
    description: "This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",
    firstDetected: '2024-10-07T20:45:06.000Z',
    fixedIn: null,
    severity: 8,
    fixable: {
      fixer: 'delete'
    },
    fixer: {
      status: 'not_started'
    },
    status: 'current',
    filename: '/var/www/html/wp-content/index.php',
    context: {
      '1': 'echo <<<HTML',
      '2': 'X5O!P%@AP[4\\\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*',
      '3': 'HTML;',
      marks: {}
    }
  }, {
    id: 185869883,
    signature: 'Suspicious.Files',
    title: 'Malicious code found in file: fuzzy.php',
    description: 'Our security scanners detected that this file is identical to a previously identified malicious file',
    firstDetected: '2024-10-07T20:45:06.000Z',
    fixedIn: null,
    severity: 4,
    fixable: false,
    status: 'ignored',
    filename: '/var/www/html/wp-content/fuzzy.php',
    context: ''
  }, {
    id: 185868972,
    signature: 'EICAR_AV_Test_Suspicious',
    title: 'Malicious code found in file: jptt_eicar.php',
    description: "This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",
    firstDetected: '2024-10-07T20:40:15.000Z',
    fixedIn: null,
    severity: 1,
    fixable: false,
    status: 'current',
    filename: '/var/www/html/wp-content/uploads/jptt_eicar.php',
    context: {
      '6': 'echo <<<HTML',
      '7': 'X5O!P%@AP[4\\\\PZX54(P^)7CC)7}$EICAR-SUSPICIOUS-ANTIVIRUS-TEST-FILE!$H+H*',
      '8': 'HTML;',
      '9': 'echo <<<HTML',
      '10': 'X5O!P%@AP[4\\\\PZX54(P^)7CC)7}$EICAR-SUSPICIOUS-ANTIVIRUS-TEST-FILE!$H+H*',
      '11': 'HTML;',
      marks: {}
    }
  }, {
    id: 184847701,
    signature: 'Vulnerable.WP.Extension',
    title: 'Vulnerable Plugin: WP Super Cache (version 1.6.3)',
    description: 'The plugin WP Super Cache (version 1.6.3) has a known vulnerability. The WP Super Cache plugin before version 1.7.2 is vulnerable to an authenticated RCE in the settings page.',
    firstDetected: '2024-10-02T17:34:59.000Z',
    fixedIn: '1.12.4',
    severity: 3,
    fixable: {
      fixer: 'update',
      target: '1.12.4',
      extensionStatus: 'inactive'
    },
    fixer: {
      status: 'in_progress',
      lastUpdated: new Date().toISOString()
    },
    status: 'current',
    filename: null,
    context: null,
    source: 'https://wpscan.com/vulnerability/733d8a02-0d44-4b78-bbb2-37e447acd2f3',
    extension: {
      name: 'WP Super Cache',
      slug: 'wp-super-cache',
      version: '1.6.3',
      type: 'plugins'
    }
  }, {
    id: 185868945,
    signature: 'Core.File.Modification',
    title: 'Compromised WordPress core file: index.php',
    description: 'Core WordPress files are not normally changed. If you did not make these changes you should review the code.',
    firstDetected: '2024-10-07T20:40:05.000Z',
    severity: 4,
    status: 'current',
    fixable: {
      fixer: 'replace',
      file: '/var/www/html/wp-admin/index.php',
      extensionStatus: ''
    },
    filename: '/var/www/html/wp-admin/index.php',
    diff: "--- /tmp/wordpress/6.6.2/wordpress/wp-admin/index.php\\t2024-10-07 20:40:04.887546480 +0000\\n+++ /var/www/html/wp-admin/index.php\\t2024-10-07 20:39:58.775512965 +0000\\n@@ -210,3 +210,4 @@\\n wp_print_community_events_templates();\\n \\n require_once ABSPATH . 'wp-admin/admin-footer.php';\\n+if ( true === false ) exit();\\n\\\\ No newline at end of file\\n"
  }, {
    id: 13216959,
    signature: 'Vulnerable.WP.Core',
    title: 'Vulnerable WordPress Version (6.4.3)',
    description: 'The installed version of WordPress (6.4.3) has a known vulnerability. ',
    firstDetected: '2024-07-15T21:56:50.000Z',
    severity: 4,
    fixedOn: '2024-07-15T22:01:42.000Z',
    status: 'fixed',
    fixable: false,
    version: '6.4.3',
    source: ''
  }, {
    id: '7275a176-d579-471a-8492-df8edbdf27de',
    title: 'WooCommerce <= 3.4.5 - Authenticated Stored XSS',
    description: 'The WooCommerce WordPress plugin was affected by an Authenticated Stored XSS security vulnerability.',
    firstDetected: '2024-07-15T21:56:50.000Z',
    fixedIn: '3.4.6',
    status: 'current',
    source: 'https://wpscan.com/vulnerability/7275a176-d579-471a-8492-df8edbdf27de',
    extension: {
      name: 'WooCommerce',
      slug: 'woocommerce',
      version: '3.4.5',
      type: 'plugins'
    }
  }],
  filters: [{
    field: 'status',
    operator: 'isAny',
    value: ['current']
  }],
  onFixThreats: () => alert('Threat fix action callback triggered! This is handled by the component consumer.'),
  
  onIgnoreThreats: () => alert('Ignore threat action callback triggered! This is handled by the component consumer.'),
  
  onUnignoreThreats: () =>
  
  alert('Unignore threat action callback triggered! This is handled by the component consumer.')
};
export const FixerStatuses = args => /*#__PURE__*/_jsx(ThreatsDataViews, {
  ...args
});
FixerStatuses.args = {
  data: [{
    id: 13216959,
    signature: 'Vulnerable.WP.Core',
    title: 'Vulnerable WordPress Version (6.4.3)',
    description: 'This threat has an auto-fixer available. ',
    firstDetected: '2024-07-15T21:56:50.000Z',
    severity: 4,
    fixer: null,
    fixedOn: '2024-07-15T22:01:42.000Z',
    status: 'current',
    fixable: {
      fixer: 'update',
      target: '6.4.4',
      extensionStatus: 'inactive'
    },
    version: '6.4.3',
    source: ''
  }, {
    id: 12345678910,
    signature: 'Vulnerable.WP.Extension',
    title: 'Vulnerable Plugin: Example Plugin (version 1.2.3)',
    description: 'This threat has an in-progress auto-fixer.',
    firstDetected: '2024-10-02T17:34:59.000Z',
    fixedIn: '1.2.4',
    severity: 3,
    fixable: {
      fixer: 'update',
      target: '1.12.4',
      extensionStatus: 'inactive'
    },
    fixer: {
      status: 'in_progress',
      lastUpdated: new Date().toISOString()
    },
    status: 'current',
    source: 'https://wpscan.com/vulnerability/733d8a02-0d44-4b78-bbb2-37e447acd2f3',
    extension: {
      name: 'Example Plugin',
      slug: 'example-plugin',
      version: '1.2.3',
      type: 'plugins'
    }
  }, {
    id: 12345678911,
    signature: 'Vulnerable.WP.Extension',
    title: 'Vulnerable Theme: Example Theme (version 2.2.2)',
    description: 'This threat has an in-progress auto-fixer that is taking too long.',
    firstDetected: '2024-10-02T17:34:59.000Z',
    fixedIn: '2.22.22',
    severity: 3,
    fixable: {
      fixer: 'update',
      target: '1.12.4',
      extensionStatus: 'inactive'
    },
    fixer: {
      status: 'in_progress',
      lastUpdated: new Date('1999-01-01').toISOString()
    },
    status: 'current',
    source: 'https://wpscan.com/vulnerability/733d8a02-0d44-4b78-bbb2-37e447acd2f3',
    extension: {
      name: 'Example Theme',
      slug: 'example-theme',
      version: '2.2.2',
      type: 'themes'
    }
  }, {
    id: 12345678912,
    signature: 'Vulnerable.WP.Extension',
    title: 'Vulnerable Theme: Example Theme II (version 3.3.3)',
    description: 'This threat has a fixer with an error status.',
    firstDetected: '2024-10-02T17:34:59.000Z',
    fixedIn: '3.4.5',
    severity: 3,
    fixable: {
      fixer: 'update',
      target: '1.12.4',
      extensionStatus: 'inactive'
    },
    fixer: {
      status: 'error',
      error: 'error'
    },
    status: 'current',
    source: 'https://wpscan.com/vulnerability/733d8a02-0d44-4b78-bbb2-37e447acd2f3',
    extension: {
      name: 'Example Theme II',
      slug: 'example-theme-2',
      version: '3.3.3',
      type: 'themes'
    }
  }, {
    id: 185868972,
    signature: 'EICAR_AV_Test_Suspicious',
    title: 'Malicious code found in file: jptt_eicar.php',
    description: 'This threat has no auto-fixer available.',
    firstDetected: '2024-10-07T20:40:15.000Z',
    fixedIn: null,
    severity: 1,
    fixable: false,
    status: 'current',
    filename: '/var/www/html/wp-content/uploads/jptt_eicar.php',
    context: {
      '6': 'echo <<<HTML',
      '7': 'X5O!P%@AP[4\\\\PZX54(P^)7CC)7}$EICAR-SUSPICIOUS-ANTIVIRUS-TEST-FILE!$H+H*',
      '8': 'HTML;',
      '9': 'echo <<<HTML',
      '10': 'X5O!P%@AP[4\\\\PZX54(P^)7CC)7}$EICAR-SUSPICIOUS-ANTIVIRUS-TEST-FILE!$H+H*',
      '11': 'HTML;',
      marks: {}
    }
  }],
  filters: [{
    field: 'status',
    operator: 'isAny',
    value: ['current']
  }],
  onFixThreats: () => alert('Fix threat action callback triggered! This is handled by the component consumer.'),
  
  onIgnoreThreats: () => alert('Ignore threat action callback triggered! This is handled by the component consumer.'),
  
  onUnignoreThreats: () =>
  
  alert('Unignore threat action callback triggered! This is handled by the component consumer.')
};
export const FreeResults = args => /*#__PURE__*/_jsx(ThreatsDataViews, {
  ...args
});
FreeResults.args = {
  data: [{
    id: '1d0470df-4671-47ac-8d87-a165e8f7d502',
    title: 'WooCommerce <= 3.2.3 - Authenticated PHP Object Injection',
    description: 'Versions 3.2.3 and earlier are affected by an issue where cached queries within shortcodes could lead to object injection. This is related to the recent WordPress 4.8.3 security release.This issue can only be exploited by users who can edit content and add shortcodes, but we still recommend all users running WooCommerce 3.x upgrade to 3.2 to mitigate this issue.',
    fixedIn: '3.2.4',
    source: 'https://wpscan.com/vulnerability/1d0470df-4671-47ac-8d87-a165e8f7d502',
    extension: {
      name: 'WooCommerce',
      slug: 'woocommerce',
      version: '3.2.3',
      type: 'plugins'
    }
  }, {
    id: '7275a176-d579-471a-8492-df8edbdf27de',
    subtitle: 'WooCommerce 3.4.5',
    title: 'WooCommerce <= 3.4.5 - Authenticated Stored XSS',
    description: 'The WooCommerce WordPress plugin was affected by an Authenticated Stored XSS security vulnerability.',
    fixedIn: '3.4.6',
    source: 'https://wpscan.com/vulnerability/7275a176-d579-471a-8492-df8edbdf27de',
    extension: {
      name: 'WooCommerce',
      slug: 'woocommerce',
      version: '3.4.5',
      type: 'plugins'
    }
  }, {
    id: '733d8a02-0d44-4b78-bbb2-37e447acd2f3',
    title: 'WP Super Cache < 1.7.2 - Authenticated Remote Code Execution (RCE)',
    description: 'The plugin was affected by an authenticated (admin+) RCE in the settings page due to input validation failure and weak $cache_path check in the WP Super Cache Settings -> Cache Location option. Direct access to the wp-cache-config.php file is not prohibited, so this vulnerability can be exploited for a web shell injection.\\r\\n\\r\\nAnother possible attack vector: from XSS (via another plugin affected by XSS) to RCE.',
    fixedIn: '1.7.2',
    source: 'https://wpscan.com/vulnerability/733d8a02-0d44-4b78-bbb2-37e447acd2f3',
    extension: {
      name: 'WP Super Cache',
      slug: 'wp-super-cache',
      version: '1.6.3',
      type: 'plugins'
    }
  }]
};`,locationsMap:{default:{startLoc:{col:23,line:23},endLoc:{col:2,line:25},startBody:{col:23,line:23},endBody:{col:2,line:25}},"fixer-statuses":{startLoc:{col:29,line:163},endLoc:{col:2,line:165},startBody:{col:29,line:163},endBody:{col:2,line:165}},"free-results":{startLoc:{col:27,line:293},endLoc:{col:2,line:295},startBody:{col:27,line:293},endBody:{col:2,line:295}}}},backgrounds:{default:"light",values:[{name:"light",value:"white"}]}},decorators:[p=>(0,u.jsx)("div",{style:{maxWidth:"100%",backgroundColor:"white"},children:(0,u.jsx)(p,{})})]},k=p=>(0,u.jsx)(oe,{...p});k.args={data:[{id:185869885,signature:"EICAR_AV_Test",title:"Malicious code found in file: index.php",description:"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",firstDetected:"2024-10-07T20:45:06.000Z",fixedIn:null,severity:8,fixable:{fixer:"delete"},fixer:{status:"not_started"},status:"current",filename:"/var/www/html/wp-content/index.php",context:{1:"echo <<<HTML",2:"X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*",3:"HTML;",marks:{}}},{id:185869883,signature:"Suspicious.Files",title:"Malicious code found in file: fuzzy.php",description:"Our security scanners detected that this file is identical to a previously identified malicious file",firstDetected:"2024-10-07T20:45:06.000Z",fixedIn:null,severity:4,fixable:!1,status:"ignored",filename:"/var/www/html/wp-content/fuzzy.php",context:""},{id:185868972,signature:"EICAR_AV_Test_Suspicious",title:"Malicious code found in file: jptt_eicar.php",description:"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",firstDetected:"2024-10-07T20:40:15.000Z",fixedIn:null,severity:1,fixable:!1,status:"current",filename:"/var/www/html/wp-content/uploads/jptt_eicar.php",context:{6:"echo <<<HTML",7:"X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-SUSPICIOUS-ANTIVIRUS-TEST-FILE!$H+H*",8:"HTML;",9:"echo <<<HTML",10:"X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-SUSPICIOUS-ANTIVIRUS-TEST-FILE!$H+H*",11:"HTML;",marks:{}}},{id:184847701,signature:"Vulnerable.WP.Extension",title:"Vulnerable Plugin: WP Super Cache (version 1.6.3)",description:"The plugin WP Super Cache (version 1.6.3) has a known vulnerability. The WP Super Cache plugin before version 1.7.2 is vulnerable to an authenticated RCE in the settings page.",firstDetected:"2024-10-02T17:34:59.000Z",fixedIn:"1.12.4",severity:3,fixable:{fixer:"update",target:"1.12.4",extensionStatus:"inactive"},fixer:{status:"in_progress",lastUpdated:new Date().toISOString()},status:"current",filename:null,context:null,source:"https://wpscan.com/vulnerability/733d8a02-0d44-4b78-bbb2-37e447acd2f3",extension:{name:"WP Super Cache",slug:"wp-super-cache",version:"1.6.3",type:"plugins"}},{id:185868945,signature:"Core.File.Modification",title:"Compromised WordPress core file: index.php",description:"Core WordPress files are not normally changed. If you did not make these changes you should review the code.",firstDetected:"2024-10-07T20:40:05.000Z",severity:4,status:"current",fixable:{fixer:"replace",file:"/var/www/html/wp-admin/index.php",extensionStatus:""},filename:"/var/www/html/wp-admin/index.php",diff:`--- /tmp/wordpress/6.6.2/wordpress/wp-admin/index.php	2024-10-07 20:40:04.887546480 +0000
+++ /var/www/html/wp-admin/index.php	2024-10-07 20:39:58.775512965 +0000
@@ -210,3 +210,4 @@
 wp_print_community_events_templates();
 
 require_once ABSPATH . 'wp-admin/admin-footer.php';
+if ( true === false ) exit();
\\ No newline at end of file
`},{id:13216959,signature:"Vulnerable.WP.Core",title:"Vulnerable WordPress Version (6.4.3)",description:"The installed version of WordPress (6.4.3) has a known vulnerability. ",firstDetected:"2024-07-15T21:56:50.000Z",severity:4,fixedOn:"2024-07-15T22:01:42.000Z",status:"fixed",fixable:!1,version:"6.4.3",source:""},{id:"7275a176-d579-471a-8492-df8edbdf27de",title:"WooCommerce <= 3.4.5 - Authenticated Stored XSS",description:"The WooCommerce WordPress plugin was affected by an Authenticated Stored XSS security vulnerability.",firstDetected:"2024-07-15T21:56:50.000Z",fixedIn:"3.4.6",status:"current",source:"https://wpscan.com/vulnerability/7275a176-d579-471a-8492-df8edbdf27de",extension:{name:"WooCommerce",slug:"woocommerce",version:"3.4.5",type:"plugins"}}],filters:[{field:"status",operator:"isAny",value:["current"]}],onFixThreats:()=>alert("Threat fix action callback triggered! This is handled by the component consumer."),onIgnoreThreats:()=>alert("Ignore threat action callback triggered! This is handled by the component consumer."),onUnignoreThreats:()=>alert("Unignore threat action callback triggered! This is handled by the component consumer.")};const C=p=>(0,u.jsx)(oe,{...p});C.args={data:[{id:13216959,signature:"Vulnerable.WP.Core",title:"Vulnerable WordPress Version (6.4.3)",description:"This threat has an auto-fixer available. ",firstDetected:"2024-07-15T21:56:50.000Z",severity:4,fixer:null,fixedOn:"2024-07-15T22:01:42.000Z",status:"current",fixable:{fixer:"update",target:"6.4.4",extensionStatus:"inactive"},version:"6.4.3",source:""},{id:12345678910,signature:"Vulnerable.WP.Extension",title:"Vulnerable Plugin: Example Plugin (version 1.2.3)",description:"This threat has an in-progress auto-fixer.",firstDetected:"2024-10-02T17:34:59.000Z",fixedIn:"1.2.4",severity:3,fixable:{fixer:"update",target:"1.12.4",extensionStatus:"inactive"},fixer:{status:"in_progress",lastUpdated:new Date().toISOString()},status:"current",source:"https://wpscan.com/vulnerability/733d8a02-0d44-4b78-bbb2-37e447acd2f3",extension:{name:"Example Plugin",slug:"example-plugin",version:"1.2.3",type:"plugins"}},{id:12345678911,signature:"Vulnerable.WP.Extension",title:"Vulnerable Theme: Example Theme (version 2.2.2)",description:"This threat has an in-progress auto-fixer that is taking too long.",firstDetected:"2024-10-02T17:34:59.000Z",fixedIn:"2.22.22",severity:3,fixable:{fixer:"update",target:"1.12.4",extensionStatus:"inactive"},fixer:{status:"in_progress",lastUpdated:new Date("1999-01-01").toISOString()},status:"current",source:"https://wpscan.com/vulnerability/733d8a02-0d44-4b78-bbb2-37e447acd2f3",extension:{name:"Example Theme",slug:"example-theme",version:"2.2.2",type:"themes"}},{id:12345678912,signature:"Vulnerable.WP.Extension",title:"Vulnerable Theme: Example Theme II (version 3.3.3)",description:"This threat has a fixer with an error status.",firstDetected:"2024-10-02T17:34:59.000Z",fixedIn:"3.4.5",severity:3,fixable:{fixer:"update",target:"1.12.4",extensionStatus:"inactive"},fixer:{status:"error",error:"error"},status:"current",source:"https://wpscan.com/vulnerability/733d8a02-0d44-4b78-bbb2-37e447acd2f3",extension:{name:"Example Theme II",slug:"example-theme-2",version:"3.3.3",type:"themes"}},{id:185868972,signature:"EICAR_AV_Test_Suspicious",title:"Malicious code found in file: jptt_eicar.php",description:"This threat has no auto-fixer available.",firstDetected:"2024-10-07T20:40:15.000Z",fixedIn:null,severity:1,fixable:!1,status:"current",filename:"/var/www/html/wp-content/uploads/jptt_eicar.php",context:{6:"echo <<<HTML",7:"X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-SUSPICIOUS-ANTIVIRUS-TEST-FILE!$H+H*",8:"HTML;",9:"echo <<<HTML",10:"X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-SUSPICIOUS-ANTIVIRUS-TEST-FILE!$H+H*",11:"HTML;",marks:{}}}],filters:[{field:"status",operator:"isAny",value:["current"]}],onFixThreats:()=>alert("Fix threat action callback triggered! This is handled by the component consumer."),onIgnoreThreats:()=>alert("Ignore threat action callback triggered! This is handled by the component consumer."),onUnignoreThreats:()=>alert("Unignore threat action callback triggered! This is handled by the component consumer.")};const O=p=>(0,u.jsx)(oe,{...p});O.args={data:[{id:"1d0470df-4671-47ac-8d87-a165e8f7d502",title:"WooCommerce <= 3.2.3 - Authenticated PHP Object Injection",description:"Versions 3.2.3 and earlier are affected by an issue where cached queries within shortcodes could lead to object injection. This is related to the recent WordPress 4.8.3 security release.This issue can only be exploited by users who can edit content and add shortcodes, but we still recommend all users running WooCommerce 3.x upgrade to 3.2 to mitigate this issue.",fixedIn:"3.2.4",source:"https://wpscan.com/vulnerability/1d0470df-4671-47ac-8d87-a165e8f7d502",extension:{name:"WooCommerce",slug:"woocommerce",version:"3.2.3",type:"plugins"}},{id:"7275a176-d579-471a-8492-df8edbdf27de",subtitle:"WooCommerce 3.4.5",title:"WooCommerce <= 3.4.5 - Authenticated Stored XSS",description:"The WooCommerce WordPress plugin was affected by an Authenticated Stored XSS security vulnerability.",fixedIn:"3.4.6",source:"https://wpscan.com/vulnerability/7275a176-d579-471a-8492-df8edbdf27de",extension:{name:"WooCommerce",slug:"woocommerce",version:"3.4.5",type:"plugins"}},{id:"733d8a02-0d44-4b78-bbb2-37e447acd2f3",title:"WP Super Cache < 1.7.2 - Authenticated Remote Code Execution (RCE)",description:`The plugin was affected by an authenticated (admin+) RCE in the settings page due to input validation failure and weak $cache_path check in the WP Super Cache Settings -> Cache Location option. Direct access to the wp-cache-config.php file is not prohibited, so this vulnerability can be exploited for a web shell injection.\r
\r
Another possible attack vector: from XSS (via another plugin affected by XSS) to RCE.`,fixedIn:"1.7.2",source:"https://wpscan.com/vulnerability/733d8a02-0d44-4b78-bbb2-37e447acd2f3",extension:{name:"WP Super Cache",slug:"wp-super-cache",version:"1.6.3",type:"plugins"}}]};const ye=["Default","FixerStatuses","FreeResults"];k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"args => <ThreatsDataViews {...args} />",...k.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"args => <ThreatsDataViews {...args} />",...C.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:"args => <ThreatsDataViews {...args} />",...O.parameters?.docs?.source}}};try{k.displayName="Default",k.__docgenInfo={description:"",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threats-data-views/stories/index.stories.tsx#Default"]={docgenInfo:k.__docgenInfo,name:"Default",path:"../components/components/threats-data-views/stories/index.stories.tsx#Default"})}catch{}try{C.displayName="FixerStatuses",C.__docgenInfo={description:"",displayName:"FixerStatuses",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threats-data-views/stories/index.stories.tsx#FixerStatuses"]={docgenInfo:C.__docgenInfo,name:"FixerStatuses",path:"../components/components/threats-data-views/stories/index.stories.tsx#FixerStatuses"})}catch{}try{O.displayName="FreeResults",O.__docgenInfo={description:"",displayName:"FreeResults",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threats-data-views/stories/index.stories.tsx#FreeResults"]={docgenInfo:O.__docgenInfo,name:"FreeResults",path:"../components/components/threats-data-views/stories/index.stories.tsx#FreeResults"})}catch{}},"../components/components/badge/index.tsx":(f,c,e)=>{"use strict";e.d(c,{A:()=>S});var a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(m),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/badge/style.module.scss"),s={};s.insert="head",s.singleton=!1;var h=o()(l.A,s);const g=l.A.locals||{};var T=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const S=({children:b,className:w,variant:t,...d})=>{const E=(0,a.A)(g.badge,{[g["is-success"]]:t==="success",[g["is-warning"]]:t==="warning",[g["is-danger"]]:t==="danger"},w);return(0,T.jsx)("span",{className:E,...d,children:b})}},"../components/components/button/index.tsx":(f,c,e)=>{"use strict";e.d(c,{A:()=>x});var a=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),i=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js"),h=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),g=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),T=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),R=e.n(T),S=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),b={};b.insert="head",b.singleton=!1;var w=R()(S.A,b);const t=S.A.locals||{};var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const E=o.__,A=(0,g.forwardRef)((N,V)=>{const{children:I,variant:M="primary",size:B="normal",weight:Z="bold",icon:L,iconSize:le,disabled:q,isDestructive:K,isLoading:G,isExternalLink:Y,className:ae,text:ee,fullWidth:me,...ne}=N,ie=(0,h.A)(t.button,ae,{[t.normal]:B==="normal",[t.small]:B==="small",[t.icon]:!!L,[t.loading]:G,[t.regular]:Z==="regular",[t["full-width"]]:me,[t["is-icon-button"]]:!!L&&!I});ne.ref=V;const re=B==="normal"?20:16,ue=Y&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.A,{size:re,icon:s.A,className:t["external-icon"]}),(0,d.jsx)(a.A,{as:"span",children:E("(opens in a new tab)","jetpack-components")})]}),te=Y?"_blank":void 0,J=I?.[0]&&I[0]!==null&&I?.[0]?.props?.className!=="components-tooltip";return(0,d.jsxs)(i.Ay,{target:te,variant:M,className:(0,h.A)(ie,{"has-text":!!L&&J}),icon:Y?void 0:L,iconSize:le,disabled:q,"aria-disabled":q,isDestructive:K,text:ee,...ne,children:[G&&(0,d.jsx)(m.Ay,{}),(0,d.jsx)("span",{children:I}),ue]})});A.displayName="Button";const x=A;try{A.displayName="Button",A.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:A.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch{}},"../components/components/threat-fixer-button/index.tsx":(f,c,e)=>{"use strict";e.d(c,{A:()=>t});var a=e("../scan/src/index.ts"),i=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../components/components/button/index.tsx"),s=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=e.n(s),g=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/threat-fixer-button/styles.module.scss"),T={};T.insert="head",T.singleton=!1;var R=h()(g.A,T);const S=g.A.locals||{};var b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const w=o.__;function t({threat:d,className:E,onClick:A}){const x=(0,m.useMemo)(()=>(0,a.wk)(d.fixer),[d.fixer]),N=(0,m.useMemo)(()=>d.fixable?x.error?w("An error occurred auto-fixing this threat.","jetpack-components"):x.stale?w("The auto-fixer is taking longer than expected.","jetpack-components"):x.inProgress?w("An auto-fixer is in progress.","jetpack-components"):(0,a.dK)(d):null,[d,x]),V=(0,m.useMemo)(()=>d.fixable?x.error?w("Error","jetpack-components"):(0,a.XI)(d):null,[d,x.error]),I=(0,m.useCallback)(M=>{M.stopPropagation(),A([d])},[A,d]);return d.fixable?(0,b.jsx)("div",{children:(0,b.jsx)(i.Ay,{className:S.tooltip,text:N,children:(0,b.jsx)(l.A,{size:"small",weight:"regular",variant:"secondary",onClick:I,children:V,className:E,isLoading:x.inProgress,isDestructive:d.fixable&&d.fixable.fixer==="delete"||x.error||x.stale,style:{minWidth:"72px"}})})}):null}try{threatfixerbutton.displayName="threatfixerbutton",threatfixerbutton.__docgenInfo={description:"Threat Fixer Button component.",displayName:"threatfixerbutton",props:{threat:{defaultValue:null,description:"",name:"threat",required:!0,type:{name:"Threat"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(items: Threat[]) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/index.tsx#threatfixerbutton"]={docgenInfo:threatfixerbutton.__docgenInfo,name:"threatfixerbutton",path:"../components/components/threat-fixer-button/index.tsx#threatfixerbutton"})}catch{}},"../components/components/threat-severity-badge/index.tsx":(f,c,e)=>{"use strict";e.d(c,{A:()=>s});var a=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),i=e("../components/components/badge/index.tsx"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=a._x,s=({severity:h})=>h>=5?(0,m.jsx)(i.A,{variant:"danger",children:o("Critical","Severity label for issues rated 5 or higher.","jetpack-components")}):h>=3&&h<5?(0,m.jsx)(i.A,{variant:"warning",children:o("High","Severity label for issues rated between 3 and 5.","jetpack-components")}):(0,m.jsx)(i.A,{children:o("Low","Severity label for issues rated below 3.","jetpack-components")});try{threatseveritybadge.displayName="threatseveritybadge",threatseveritybadge.__docgenInfo={description:"",displayName:"threatseveritybadge",props:{severity:{defaultValue:null,description:"",name:"severity",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-severity-badge/index.tsx#threatseveritybadge"]={docgenInfo:threatseveritybadge.__docgenInfo,name:"threatseveritybadge",path:"../components/components/threat-severity-badge/index.tsx#threatseveritybadge"})}catch{}},"../scan/src/index.ts":(f,c,e)=>{"use strict";e.d(c,{$m:()=>b,XI:()=>S,dK:()=>w,wk:()=>R,ni:()=>l});var a=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js");const i="https://jetpack.com/contact-support/?rel=support",m=1e3*60*60*24,o=a.__,l=t=>t.signature==="Vulnerable.WP.Core"?"core":t.extension?t.extension.type:t.filename?"file":null,s=t=>{const d=new Date,E=new Date(t);return d.getTime()-E.getTime()>=m},h=t=>!!("error"in t&&t.error),g=t=>"status"in t&&t.status==="in_progress",T=t=>g(t)&&"lastUpdated"in t&&!!s(t.lastUpdated),R=t=>({inProgress:t&&g(t),error:t&&h(t),stale:t&&T(t)}),S=t=>{switch(t.fixable&&t.fixable.fixer){case"delete":return o("Delete","jetpack-scan");case"update":return o("Update","jetpack-scan");case"replace":case"rollback":return o("Replace","jetpack-scan");default:return o("Auto-fix","jetpack-scan")}},b=t=>{switch(t.fixable&&t.fixable.fixer){case"delete":if(t.filename)return o("Delete file","jetpack-scan");if(t.extension?.type==="plugins")return o("Delete plugin from site","jetpack-scan");if(t.extension?.type==="themes")return o("Delete theme from site","jetpack-scan");break;case"update":return t.extension?.type==="plugins"?o("Update plugin to newer version","jetpack-scan"):t.extension?.type==="themes"?o("Update theme to newer version","jetpack-scan"):o("Update","jetpack-scan");case"replace":case"rollback":if(t.filename)return o("Replace from backup","jetpack-scan");if(t.signature==="php_hardening_WP_Config_NoSalts_001")return o("Replace default salts","jetpack-scan");break;default:return o("Auto-fix","jetpack-scan")}},w=t=>{switch(t.fixable&&t.fixable.fixer){case"delete":if(t.filename)return t.filename.endsWith("/")?o("Delete the directory that the infected file is in.","jetpack-scan"):t.signature==="Core.File.Modification"?o("Delete the unexpected file in a core WordPress directory.","jetpack-scan"):o("Delete the infected file.","jetpack-scan");if(t.extension?.type==="plugins")return o("Delete the plugin directory to fix the threat.","jetpack-scan");if(t.extension?.type==="themes")return o("Delete the theme directory to fix the threat.","jetpack-scan");break;case"update":return t.fixedIn&&t.extension.name?(0,a.sprintf)(o("Update %1$s to version %2$s","jetpack-scan"),t.extension.name,t.fixedIn):o("Upgrade the plugin or theme to a newer version.","jetpack-scan");case"replace":case"rollback":if(t.filename)return t.signature==="Core.File.Modification"?o("Replace the modified core WordPress file with the original clean version from the WordPress source code.","jetpack-scan"):o("Replace the infected file with a previously backed up version that is clean.","jetpack-scan");if(t.signature==="php_hardening_WP_Config_NoSalts_001")return o("Replace the default salt keys in wp-config.php with unique ones.","jetpack-scan");break;default:return o("Jetpack will auto-fix the threat.","jetpack-scan")}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/badge/style.module.scss":(f,c,e)=>{"use strict";e.d(c,{A:()=>s});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(a),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(m),l=o()(i());l.push([f.id,".nk_fFsPvSONWKk4uLG7d{display:inline-block;border-radius:4px;background-color:var(--jp-gray-0);color:var(--jp-gray-80);padding:4px 8px;font-size:13px;font-weight:400;line-height:16px}.nk_fFsPvSONWKk4uLG7d.PVcxhYDdo6s9a5JG4Bdc{background-color:var(--jp-green-5);color:var(--jp-green-50)}.nk_fFsPvSONWKk4uLG7d.auS4nez9_tykrLDLgVE1{background-color:var(--jp-yellow-5);color:var(--jp-yellow-60)}.nk_fFsPvSONWKk4uLG7d.Dw4SD5lZ_vHbdMWWrhuY{background-color:var(--jp-red-5);color:var(--jp-red-70)}",""]),l.locals={badge:"nk_fFsPvSONWKk4uLG7d","is-success":"PVcxhYDdo6s9a5JG4Bdc","is-warning":"auS4nez9_tykrLDLgVE1","is-danger":"Dw4SD5lZ_vHbdMWWrhuY"};const s=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(f,c,e)=>{"use strict";e.d(c,{A:()=>s});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(a),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(m),l=o()(i());l.push([f.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),l.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const s=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/threat-fixer-button/styles.module.scss":(f,c,e)=>{"use strict";e.d(c,{A:()=>s});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(a),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(m),l=o()(i());l.push([f.id,".xi9Uqfg8ad8MwgacY7SU{color:inherit}.xi9Uqfg8ad8MwgacY7SU:focus,.xi9Uqfg8ad8MwgacY7SU:hover{color:inherit;box-shadow:none}.VUZaWLbipnhHzAnagcxN{margin-top:var(--spacing-base);max-width:240px;border-radius:4px;text-align:left}",""]),l.locals={"support-link":"xi9Uqfg8ad8MwgacY7SU",tooltip:"VUZaWLbipnhHzAnagcxN"};const s=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/threats-data-views/styles.module.scss":(f,c,e)=>{"use strict";e.d(c,{A:()=>h});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(a),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(m),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/@wordpress+dataviews@4.15.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_b9a36bf3010841a36adc99ad3275ff5d/node_modules/@wordpress/dataviews/build-style/style.css"),s=o()(i());s.i(l.A),s.push([f.id,".owIEdyan_oVyLN2de3vg{color:var(--jp-gray-80);font-weight:510;white-space:initial}.LwjQLoLY8izfFuAjQ7JY{color:var(--jp-gray-80);font-size:12px;white-space:initial}.A6N2Bk0Xpt10MmMXv72x,.m_RoObjOqGbRKPs2MIBL{white-space:nowrap}.A6N2Bk0Xpt10MmMXv72x{color:var(--jp-green-70)}.UI0c7ddEsUR3uJ4jVWcq{width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:#edffee;border-color:#edffee}.UI0c7ddEsUR3uJ4jVWcq svg{fill:var(--jp-black)}.ElVSUVejMrusrMS9mY4P{min-width:300px}",""]),s.locals={threat__title:"owIEdyan_oVyLN2de3vg",threat__description:"LwjQLoLY8izfFuAjQ7JY",threat__fixedOn:"A6N2Bk0Xpt10MmMXv72x",threat__firstDetected:"m_RoObjOqGbRKPs2MIBL",threat__media:"UI0c7ddEsUR3uJ4jVWcq","toggle-group-control":"ElVSUVejMrusrMS9mY4P"};const h=s},"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale sync recursive ^\\.\\/.*$":(f,c,e)=>{var a={"./af":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/af.js","./af.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/af.js","./ar":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ar.js","./ar-dz":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ar-dz.js","./ar-dz.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ar-dz.js","./ar-kw":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ar-kw.js","./ar-kw.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ar-kw.js","./ar-ly":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ar-ly.js","./ar-ly.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ar-ly.js","./ar-ma":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ar-ma.js","./ar-ma.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ar-ma.js","./ar-ps":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ar-ps.js","./ar-ps.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ar-ps.js","./ar-sa":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ar-sa.js","./ar-sa.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ar-sa.js","./ar-tn":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ar-tn.js","./ar-tn.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ar-tn.js","./ar.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ar.js","./az":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/az.js","./az.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/az.js","./be":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/be.js","./be.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/be.js","./bg":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/bg.js","./bg.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/bg.js","./bm":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/bm.js","./bm.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/bm.js","./bn":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/bn.js","./bn-bd":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/bn-bd.js","./bn-bd.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/bn-bd.js","./bn.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/bn.js","./bo":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/bo.js","./bo.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/bo.js","./br":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/br.js","./br.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/br.js","./bs":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/bs.js","./bs.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/bs.js","./ca":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ca.js","./ca.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ca.js","./cs":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/cs.js","./cs.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/cs.js","./cv":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/cv.js","./cv.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/cv.js","./cy":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/cy.js","./cy.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/cy.js","./da":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/da.js","./da.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/da.js","./de":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/de.js","./de-at":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/de-at.js","./de-at.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/de-at.js","./de-ch":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/de-ch.js","./de-ch.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/de-ch.js","./de.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/de.js","./dv":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/dv.js","./dv.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/dv.js","./el":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/el.js","./el.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/el.js","./en-au":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/en-au.js","./en-au.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/en-au.js","./en-ca":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/en-ca.js","./en-ca.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/en-ca.js","./en-gb":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/en-gb.js","./en-gb.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/en-gb.js","./en-ie":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/en-ie.js","./en-ie.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/en-ie.js","./en-il":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/en-il.js","./en-il.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/en-il.js","./en-in":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/en-in.js","./en-in.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/en-in.js","./en-nz":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/en-nz.js","./en-nz.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/en-nz.js","./en-sg":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/en-sg.js","./en-sg.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/en-sg.js","./eo":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/eo.js","./eo.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/eo.js","./es":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/es.js","./es-do":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/es-do.js","./es-do.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/es-do.js","./es-mx":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/es-mx.js","./es-mx.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/es-mx.js","./es-us":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/es-us.js","./es-us.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/es-us.js","./es.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/es.js","./et":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/et.js","./et.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/et.js","./eu":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/eu.js","./eu.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/eu.js","./fa":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/fa.js","./fa.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/fa.js","./fi":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/fi.js","./fi.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/fi.js","./fil":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/fil.js","./fil.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/fil.js","./fo":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/fo.js","./fo.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/fo.js","./fr":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/fr.js","./fr-ca":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/fr-ca.js","./fr-ca.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/fr-ca.js","./fr-ch":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/fr-ch.js","./fr-ch.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/fr-ch.js","./fr.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/fr.js","./fy":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/fy.js","./fy.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/fy.js","./ga":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ga.js","./ga.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ga.js","./gd":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/gd.js","./gd.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/gd.js","./gl":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/gl.js","./gl.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/gl.js","./gom-deva":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/gom-deva.js","./gom-deva.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/gom-deva.js","./gom-latn":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/gom-latn.js","./gom-latn.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/gom-latn.js","./gu":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/gu.js","./gu.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/gu.js","./he":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/he.js","./he.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/he.js","./hi":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/hi.js","./hi.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/hi.js","./hr":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/hr.js","./hr.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/hr.js","./hu":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/hu.js","./hu.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/hu.js","./hy-am":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/hy-am.js","./hy-am.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/hy-am.js","./id":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/id.js","./id.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/id.js","./is":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/is.js","./is.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/is.js","./it":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/it.js","./it-ch":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/it-ch.js","./it-ch.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/it-ch.js","./it.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/it.js","./ja":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ja.js","./ja.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ja.js","./jv":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/jv.js","./jv.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/jv.js","./ka":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ka.js","./ka.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ka.js","./kk":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/kk.js","./kk.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/kk.js","./km":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/km.js","./km.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/km.js","./kn":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/kn.js","./kn.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/kn.js","./ko":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ko.js","./ko.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ko.js","./ku":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ku.js","./ku-kmr":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ku-kmr.js","./ku-kmr.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ku-kmr.js","./ku.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ku.js","./ky":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ky.js","./ky.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ky.js","./lb":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/lb.js","./lb.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/lb.js","./lo":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/lo.js","./lo.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/lo.js","./lt":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/lt.js","./lt.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/lt.js","./lv":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/lv.js","./lv.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/lv.js","./me":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/me.js","./me.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/me.js","./mi":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/mi.js","./mi.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/mi.js","./mk":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/mk.js","./mk.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/mk.js","./ml":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ml.js","./ml.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ml.js","./mn":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/mn.js","./mn.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/mn.js","./mr":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/mr.js","./mr.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/mr.js","./ms":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ms.js","./ms-my":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ms-my.js","./ms-my.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ms-my.js","./ms.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ms.js","./mt":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/mt.js","./mt.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/mt.js","./my":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/my.js","./my.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/my.js","./nb":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/nb.js","./nb.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/nb.js","./ne":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ne.js","./ne.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ne.js","./nl":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/nl.js","./nl-be":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/nl-be.js","./nl-be.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/nl-be.js","./nl.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/nl.js","./nn":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/nn.js","./nn.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/nn.js","./oc-lnc":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/oc-lnc.js","./oc-lnc.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/oc-lnc.js","./pa-in":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/pa-in.js","./pa-in.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/pa-in.js","./pl":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/pl.js","./pl.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/pl.js","./pt":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/pt.js","./pt-br":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/pt-br.js","./pt-br.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/pt-br.js","./pt.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/pt.js","./ro":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ro.js","./ro.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ro.js","./ru":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ru.js","./ru.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ru.js","./sd":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/sd.js","./sd.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/sd.js","./se":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/se.js","./se.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/se.js","./si":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/si.js","./si.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/si.js","./sk":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/sk.js","./sk.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/sk.js","./sl":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/sl.js","./sl.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/sl.js","./sq":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/sq.js","./sq.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/sq.js","./sr":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/sr.js","./sr-cyrl":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/sr-cyrl.js","./sr-cyrl.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/sr-cyrl.js","./sr.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/sr.js","./ss":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ss.js","./ss.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ss.js","./sv":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/sv.js","./sv.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/sv.js","./sw":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/sw.js","./sw.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/sw.js","./ta":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ta.js","./ta.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ta.js","./te":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/te.js","./te.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/te.js","./tet":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/tet.js","./tet.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/tet.js","./tg":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/tg.js","./tg.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/tg.js","./th":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/th.js","./th.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/th.js","./tk":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/tk.js","./tk.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/tk.js","./tl-ph":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/tl-ph.js","./tl-ph.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/tl-ph.js","./tlh":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/tlh.js","./tlh.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/tlh.js","./tr":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/tr.js","./tr.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/tr.js","./tzl":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/tzl.js","./tzl.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/tzl.js","./tzm":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/tzm.js","./tzm-latn":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/tzm-latn.js","./tzm-latn.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/tzm-latn.js","./tzm.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/tzm.js","./ug-cn":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ug-cn.js","./ug-cn.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ug-cn.js","./uk":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/uk.js","./uk.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/uk.js","./ur":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ur.js","./ur.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/ur.js","./uz":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/uz.js","./uz-latn":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/uz-latn.js","./uz-latn.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/uz-latn.js","./uz.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/uz.js","./vi":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/vi.js","./vi.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/vi.js","./x-pseudo":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/x-pseudo.js","./x-pseudo.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/x-pseudo.js","./yo":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/yo.js","./yo.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/yo.js","./zh-cn":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/zh-cn.js","./zh-cn.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/zh-cn.js","./zh-hk":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/zh-hk.js","./zh-hk.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/zh-hk.js","./zh-mo":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/zh-mo.js","./zh-mo.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/zh-mo.js","./zh-tw":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/zh-tw.js","./zh-tw.js":"../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale/zh-tw.js"};function i(o){var l=m(o);return e(l)}function m(o){if(!e.o(a,o)){var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}return a[o]}i.keys=function(){return Object.keys(a)},i.resolve=m,f.exports=i,i.id="../../../node_modules/.pnpm/moment@2.30.1/node_modules/moment/locale sync recursive ^\\.\\/.*$"}}]);
