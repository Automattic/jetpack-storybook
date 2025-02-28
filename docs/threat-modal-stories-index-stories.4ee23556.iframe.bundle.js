(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[16],{"../components/components/threat-modal/stories/index.stories.tsx":(I,x,n)=>{"use strict";n.r(x),n.d(x,{AdditionalConnectionsNeeded:()=>H,CredentialsNeeded:()=>J,ErrorFixer:()=>Z,InProgressFixer:()=>K,StaleFixer:()=>X,ThreatResult:()=>F,UserConnectionNeeded:()=>V,VulnerableExtension:()=>W,__namedExportsOrder:()=>me,default:()=>_e});var i=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=n("../components/components/button/index.tsx"),f=n("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/modal/index.js"),c=n("../components/components/text/index.tsx"),o=n("../components/components/threat-severity-badge/index.tsx"),u=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),C=n.n(u),k=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/threat-modal/styles.module.scss"),b={};b.insert="head",b.singleton=!1;var A=C()(k.A,b);const a=k.A.locals||{};var p=n("../../../node_modules/.pnpm/@wordpress+i18n@5.17.0/node_modules/@wordpress/i18n/build-module/index.js"),T=n("../scan/src/index.ts"),j=n("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/notice/index.js"),t=n("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),r=n("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),m=n("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/caution-filled.js"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=p.__,S=({status:s="warning",title:d,content:w})=>{const{userConnectionNeeded:E,userIsConnecting:M,handleConnectUser:$,siteCredentialsNeeded:Q,credentialsRedirectUrl:B,credentialsIsFetching:L}=(0,i.useContext)(N);return(0,e.jsx)(j.A,{status:s,isDismissible:!1,children:(0,e.jsxs)("div",{className:a.notice,children:[(0,e.jsxs)("div",{className:a.notice__title,children:[s==="success"?(0,e.jsx)(t.Ay,{className:a.spinner}):(0,e.jsx)(r.A,{icon:m.A,size:30}),(0,e.jsx)(c.Ay,{variant:"title-small",mb:2,children:d})]}),(0,e.jsx)(c.Ay,{children:w}),(0,e.jsxs)("div",{className:a.notice__actions,children:[E&&(0,e.jsx)(l.A,{className:a.notice__action,isExternalLink:!0,weight:"regular",isLoading:M,onClick:$,children:h("Connect your user account","jetpack-components")}),Q&&(0,e.jsx)(l.A,{className:a.notice__action,isExternalLink:!0,weight:"regular",href:B,isLoading:L,children:h("Enter server credentials","jetpack-components")})]})]})})};try{threatnotice.displayName="threatnotice",threatnotice.__docgenInfo={description:"ThreatNotice component",displayName:"threatnotice",props:{status:{defaultValue:{value:"warning"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"warning"'},{value:'"success"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-modal/threat-notice.tsx#threatnotice"]={docgenInfo:threatnotice.__docgenInfo,name:"threatnotice",path:"../components/components/threat-modal/threat-notice.tsx#threatnotice"})}catch{}const _=p.__,R=({fixerState:s})=>{const{status:d,title:w,content:E}=(0,i.useMemo)(()=>s.error?{status:"error",title:_("An error occurred auto-fixing this threat","jetpack-components"),content:_("Jetpack encountered a filesystem error while attempting to auto-fix this threat. Please try again later or contact support.","jetpack-components")}:s.stale?{status:"error",title:_("The auto-fixer is taking longer than expected","jetpack-components"),content:_("Jetpack has been attempting to auto-fix this threat for too long, and something may have gone wrong. Please try again later or contact support.","jetpack-components")}:s.inProgress?{status:"success",title:_("An auto-fixer is in progress","jetpack-components"),content:_("Please wait while Jetpack auto-fixes the threat.","jetpack-components")}:{},[s]);return w?(0,e.jsx)("div",{className:a["fixer-notice"],children:(0,e.jsx)(S,{status:d,title:w,content:E})}):null};try{fixerstatenotice.displayName="fixerstatenotice",fixerstatenotice.__docgenInfo={description:"FixerStateNotice component",displayName:"fixerstatenotice",props:{fixerState:{defaultValue:null,description:"",name:"fixerState",required:!0,type:{name:"{ inProgress: boolean; error: boolean; stale: boolean; }"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-modal/fixer-state-notice.tsx#fixerstatenotice"]={docgenInfo:fixerstatenotice.__docgenInfo,name:"fixerstatenotice",path:"../components/components/threat-modal/fixer-state-notice.tsx#fixerstatenotice"})}catch{}const y=p.__,U=()=>{const{closeModal:s,threat:d,handleFixThreatClick:w,handleIgnoreThreatClick:E,handleUnignoreThreatClick:M,userConnectionNeeded:$,siteCredentialsNeeded:Q}=(0,i.useContext)(N),B=$||Q,L=(0,i.useMemo)(()=>(0,T.getFixerState)(d.fixer),[d.fixer]),ee=(0,i.useMemo)(()=>(0,T.getDetailedFixerAction)(d),[d]),te=(0,i.useCallback)(()=>{w?.([d]),s()},[d,w,s]),ne=(0,i.useCallback)(()=>{E?.([d]),s()},[d,E,s]),q=(0,i.useCallback)(()=>{M?.([d]),s()},[d,M,s]);return!d?.status||d.status==="fixed"?null:(0,e.jsxs)("div",{className:a["modal-footer"],children:[(0,e.jsx)(R,{fixerState:L}),(0,e.jsxs)("div",{className:a["threat-actions"],children:[d.status==="ignored"&&(0,e.jsx)(l.A,{disabled:B,isDestructive:!0,variant:"secondary",onClick:q,children:y("Un-ignore threat","jetpack-components")}),d.status==="current"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.A,{isDestructive:!0,variant:"secondary",onClick:ne,disabled:B||L.inProgress&&!L.stale,children:y("Ignore threat","jetpack-components")}),d.fixable&&(0,e.jsx)(l.A,{isPrimary:!0,disabled:B||L.inProgress&&!L.stale,onClick:te,children:L.error||L.stale?y("Retry fixer","jetpack-components"):ee})]})]})]})};try{threatactions.displayName="threatactions",threatactions.__docgenInfo={description:"ThreatActions component",displayName:"threatactions",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-modal/threat-actions.tsx#threatactions"]={docgenInfo:threatactions.__docgenInfo,name:"threatactions",path:"../components/components/threat-modal/threat-actions.tsx#threatactions"})}catch{}var z=n("../components/components/contextual-upgrade-trigger/index.tsx");const O=p.__,oe=()=>{const{threat:s,handleUpgradeClick:d}=(0,i.useContext)(N),w=(0,i.useMemo)(()=>s.status==="fixed"?O("How did Jetpack fix it?","jetpack-components"):s.status==="current"&&s.fixable?O("How can Jetpack auto-fix this threat?","jetpack-components"):O("How to fix it?","jetpack-components"),[s]),E=(0,i.useMemo)(()=>!s.fixable&&s.fixedIn?(0,p.nv)(O("Update %1$s to version %2$s.","jetpack-components"),s.extension.name,s.fixedIn):(0,T.getFixerDescription)(s),[s]);return!s.fixable&&!s.fixedIn?null:(0,e.jsxs)("div",{className:a.section,children:[(0,e.jsx)(c.Ay,{variant:"title-small",children:w}),(0,e.jsx)(c.Ay,{children:E}),d&&(0,e.jsx)(z.A,{description:O("Looking for advanced scan results and one-click fixes?","jetpack-components"),cta:O("Upgrade Jetpack now","jetpack-components"),onClick:d})]})};try{threatfixdetails.displayName="threatfixdetails",threatfixdetails.__docgenInfo={description:"ThreatFixDetails component",displayName:"threatfixdetails",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-modal/threat-fix-details.tsx#threatfixdetails"]={docgenInfo:threatfixdetails.__docgenInfo,name:"threatfixdetails",path:"../components/components/threat-modal/threat-fix-details.tsx#threatfixdetails"})}catch{}const ae=p.__,re=()=>{const{threat:s}=(0,i.useContext)(N);return(0,e.jsxs)("div",{className:a.section,children:[!!s.description&&(0,e.jsx)(c.Ay,{children:s.description}),!!s.source&&(0,e.jsx)("div",{children:(0,e.jsx)(l.A,{variant:"link",isExternalLink:!0,weight:"regular",href:s.source,children:ae("See more technical details of this threat","jetpack-components")})})]})};try{threatsummary.displayName="threatsummary",threatsummary.__docgenInfo={description:"ThreatSummary component",displayName:"threatsummary",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-modal/threat-summary.tsx#threatsummary"]={docgenInfo:threatsummary.__docgenInfo,name:"threatsummary",path:"../components/components/threat-modal/threat-summary.tsx#threatsummary"})}catch{}var ie=n("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js"),de=n("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js"),le=n("../components/components/diff-viewer/index.tsx"),ce=n("../components/components/marked-lines/index.tsx");const G=p.__,pe=()=>{const{threat:s}=(0,i.useContext)(N),[d,w]=(0,i.useState)(!1),E=(0,i.useCallback)(()=>{w(!d)},[d]);return!s.filename&&!s.context&&!s.diff?null:(0,e.jsxs)("div",{className:a.section,children:[(0,e.jsx)("div",{className:a.section__title,children:(0,e.jsx)(l.A,{variant:"link",className:a.section__toggle,"aria-expanded":d,"aria-controls":`threat-details-${s.id}`,onClick:E,children:(0,e.jsxs)("div",{className:a.section__toggle__content,children:[(0,e.jsx)(c.Ay,{variant:"title-small",mb:0,children:G(d?"Hide the technical details":"Show the technical details","jetpack-components")}),(0,e.jsx)(r.A,{icon:d?ie.A:de.A,size:24})]})})}),d&&(0,e.jsxs)("div",{className:d?a.section__open:a.section__closed,id:`threat-details-${s.id}`,children:[s.filename&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(c.Ay,{children:G("Threat found in file:","jetpack-components")}),(0,e.jsx)("pre",{className:a.filename,children:s.filename})]}),s.context&&(0,e.jsx)(ce.A,{context:s.context}),s.diff&&(0,e.jsx)(le.A,{diff:s.diff})]})]})};try{threattechnicaldetails.displayName="threattechnicaldetails",threattechnicaldetails.__docgenInfo={description:"ThreatTechnicalDetails component",displayName:"threattechnicaldetails",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-modal/threat-technical-details.tsx#threattechnicaldetails"]={docgenInfo:threattechnicaldetails.__docgenInfo,name:"threattechnicaldetails",path:"../components/components/threat-modal/threat-technical-details.tsx#threattechnicaldetails"})}catch{}const Y=p.__,ue=()=>{const{userConnectionNeeded:s,siteCredentialsNeeded:d}=(0,i.useContext)(N);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(re,{}),(0,e.jsx)(pe,{}),(0,e.jsx)(oe,{}),d&&s&&(0,e.jsx)(S,{title:"Additional connections needed",content:Y("A user connection and server credentials provide Jetpack the access necessary to ignore and auto-fix threats on your site.","jetpack-components")}),!d&&s&&(0,e.jsx)(S,{title:Y("User connection needed","jetpack-components"),content:Y("A user connection provides Jetpack the access necessary to ignore and auto-fix threats on your site.","jetpack-components")}),d&&!s&&(0,e.jsx)(S,{title:Y("Site credentials needed","jetpack-components"),content:Y("Your server credentials allow Jetpack to access the server that\u2019s powering your website. This information is securely saved and only used to ignore and auto-fix threats detected on your site.","jetpack-components")}),(0,e.jsx)(U,{})]})};try{threatfixconfirmation.displayName="threatfixconfirmation",threatfixconfirmation.__docgenInfo={description:"ThreatFixConfirmation component",displayName:"threatfixconfirmation",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-modal/threat-fix-confirmation.tsx#threatfixconfirmation"]={docgenInfo:threatfixconfirmation.__docgenInfo,name:"threatfixconfirmation",path:"../components/components/threat-modal/threat-fix-confirmation.tsx#threatfixconfirmation"})}catch{}const N=(0,i.createContext)(null);function se({threat:s,isUserConnected:d,hasConnectedOwner:w,userIsConnecting:E,handleConnectUser:M,credentials:$,credentialsIsFetching:Q,credentialsRedirectUrl:B,handleUpgradeClick:L,handleFixThreatClick:ee,handleIgnoreThreatClick:te,handleUnignoreThreatClick:ne,...q}){const he=!d||!w,fe=!$||$.length===0;return(0,e.jsx)(f.A,{title:(0,e.jsxs)("div",{className:a.title,children:[(0,e.jsx)(c.Ay,{variant:"title-small",children:s.title}),!!s.severity&&(0,e.jsx)(o.A,{severity:s.severity})]}),size:"large",...q,children:(0,e.jsx)("div",{className:a["threat-details"],children:(0,e.jsx)(N.Provider,{value:{closeModal:q.onRequestClose,threat:s,handleUpgradeClick:L,userConnectionNeeded:he,handleConnectUser:M,userIsConnecting:E,siteCredentialsNeeded:fe,credentialsIsFetching:Q,credentialsRedirectUrl:B,handleFixThreatClick:ee,handleIgnoreThreatClick:te,handleUnignoreThreatClick:ne},children:(0,e.jsx)(ue,{})})})})}try{threatmodal.displayName="threatmodal",threatmodal.__docgenInfo={description:"ThreatModal component",displayName:"threatmodal",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-modal/index.tsx#threatmodal"]={docgenInfo:threatmodal.__docgenInfo,name:"threatmodal",path:"../components/components/threat-modal/index.tsx#threatmodal"})}catch{}var ye=`import { useCallback, useState } from 'react';
import Button from '../../button/index.js';
import ThreatModal from '../index.js';

export default {
	title: 'JS Packages/Components/Threat Modal',
	component: ThreatModal,
};

const Base = args => {
	const [ isOpen, setIsOpen ] = useState( false );
	const onClick = useCallback( () => setIsOpen( true ), [] );
	const onRequestClose = useCallback( () => setIsOpen( false ), [] );
	return (
		<div>
			<Button onClick={ onClick }>Open Threat Modal</Button>
			{ isOpen ? <ThreatModal { ...args } onRequestClose={ onRequestClose } /> : null }
		</div>
	);
};

export const ThreatResult = Base.bind( {} );
ThreatResult.args = {
	threat: {
		id: 185869885,
		signature: 'EICAR_AV_Test',
		title: 'Malicious code found in file: index.php',
		description:
			"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",
		firstDetected: '2024-10-07T20:45:06.000Z',
		fixedIn: null,
		severity: 8,
		fixable: { fixer: 'rollback', target: 'January 26, 2024, 6:49 am', extensionStatus: '' },
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
	isUserConnected: true,
	hasConnectedOwner: true,
	credentials: [ { type: 'managed', role: 'main', still_valid: true } ],
	handleFixThreatClick: () => {},
	handleIgnoreThreatClick: () => {},
	handleUnignoreThreatClick: () => {},
};

export const AdditionalConnectionsNeeded = Base.bind( {} );
AdditionalConnectionsNeeded.args = {
	threat: {
		id: 185869885,
		signature: 'EICAR_AV_Test',
		title: 'Malicious code found in file: index.php',
		description:
			"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",
		firstDetected: '2024-10-07T20:45:06.000Z',
		fixedIn: null,
		severity: 8,
		fixable: { fixer: 'rollback', target: 'January 26, 2024, 6:49 am', extensionStatus: '' },
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
	isUserConnected: false,
	hasConnectedOwner: false,
	credentials: false,
	credentialsRedirectUrl: '#',
	handleConnectUser: () => {},
	handleFixThreatClick: () => {},
	handleIgnoreThreatClick: () => {},
	handleUnignoreThreatClick: () => {},
};

export const UserConnectionNeeded = Base.bind( {} );
UserConnectionNeeded.args = {
	threat: {
		id: 185869885,
		signature: 'EICAR_AV_Test',
		title: 'Malicious code found in file: index.php',
		description:
			"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",
		firstDetected: '2024-10-07T20:45:06.000Z',
		fixedIn: null,
		severity: 8,
		fixable: { fixer: 'rollback', target: 'January 26, 2024, 6:49 am', extensionStatus: '' },
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
	isUserConnected: false,
	hasConnectedOwner: false,
	handleConnectUser: () => {},
	credentials: [ { type: 'managed', role: 'main', still_valid: true } ],
	credentialsRedirectUrl: '#',
	handleFixThreatClick: () => {},
	handleIgnoreThreatClick: () => {},
	handleUnignoreThreatClick: () => {},
};

export const CredentialsNeeded = Base.bind( {} );
CredentialsNeeded.args = {
	threat: {
		id: 185869885,
		signature: 'EICAR_AV_Test',
		title: 'Malicious code found in file: index.php',
		description:
			"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",
		firstDetected: '2024-10-07T20:45:06.000Z',
		fixedIn: null,
		severity: 8,
		fixable: { fixer: 'rollback', target: 'January 26, 2024, 6:49 am', extensionStatus: '' },
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
	isUserConnected: true,
	hasConnectedOwner: true,
	credentials: false,
	credentialsIsFetching: false,
	credentialsRedirectUrl: '#',
	handleFixThreatClick: () => {},
	handleIgnoreThreatClick: () => {},
	handleUnignoreThreatClick: () => {},
};

export const InProgressFixer = Base.bind( {} );
InProgressFixer.args = {
	threat: {
		id: 185869885,
		signature: 'EICAR_AV_Test',
		title: 'Malicious code found in file: index.php',
		description:
			"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",
		firstDetected: '2024-10-07T20:45:06.000Z',
		fixedIn: null,
		severity: 8,
		fixable: { fixer: 'rollback', target: 'January 26, 2024, 6:49 am', extensionStatus: '' },
		fixer: { status: 'in_progress' },
		status: 'current',
		filename: '/var/www/html/wp-content/index.php',
		context: {
			'1': 'echo <<<HTML',
			'2': 'X5O!P%@AP[4\\\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*',
			'3': 'HTML;',
			marks: {},
		},
	},
	isUserConnected: true,
	hasConnectedOwner: true,
	handleConnectUser: () => {},
	credentials: [ { type: 'managed', role: 'main', still_valid: true } ],
	credentialsRedirectUrl: '#',
	handleFixThreatClick: () => {},
	handleIgnoreThreatClick: () => {},
	handleUnignoreThreatClick: () => {},
};

export const ErrorFixer = Base.bind( {} );
ErrorFixer.args = {
	threat: {
		id: 185869885,
		signature: 'EICAR_AV_Test',
		title: 'Malicious code found in file: index.php',
		description:
			"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",
		firstDetected: '2024-10-07T20:45:06.000Z',
		fixedIn: null,
		severity: 8,
		fixable: { fixer: 'rollback', target: 'January 26, 2024, 6:49 am', extensionStatus: '' },
		fixer: { error: 'error' },
		status: 'current',
		filename: '/var/www/html/wp-content/index.php',
		context: {
			'1': 'echo <<<HTML',
			'2': 'X5O!P%@AP[4\\\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*',
			'3': 'HTML;',
			marks: {},
		},
	},
	isUserConnected: true,
	hasConnectedOwner: true,
	handleConnectUser: () => {},
	credentials: [ { type: 'managed', role: 'main', still_valid: true } ],
	credentialsRedirectUrl: '#',
	handleFixThreatClick: () => {},
	handleIgnoreThreatClick: () => {},
	handleUnignoreThreatClick: () => {},
};

export const StaleFixer = Base.bind( {} );
StaleFixer.args = {
	threat: {
		id: 185869885,
		signature: 'EICAR_AV_Test',
		title: 'Malicious code found in file: index.php',
		description:
			"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",
		firstDetected: '2024-10-07T20:45:06.000Z',
		fixedIn: null,
		severity: 8,
		fixable: { fixer: 'rollback', target: 'January 26, 2024, 6:49 am', extensionStatus: '' },
		fixer: { status: 'in_progress', lastUpdated: new Date( '1999-01-01' ).toISOString() },
		status: 'current',
		filename: '/var/www/html/wp-content/index.php',
		context: {
			'1': 'echo <<<HTML',
			'2': 'X5O!P%@AP[4\\\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*',
			'3': 'HTML;',
			marks: {},
		},
	},
	isUserConnected: true,
	hasConnectedOwner: true,
	handleConnectUser: () => {},
	credentials: [ { type: 'managed', role: 'main', still_valid: true } ],
	credentialsRedirectUrl: '#',
	handleFixThreatClick: () => {},
	handleIgnoreThreatClick: () => {},
	handleUnignoreThreatClick: () => {},
};

export const VulnerableExtension = Base.bind( {} );
VulnerableExtension.args = {
	threat: {
		id: 184847701,
		signature: 'Vulnerable.WP.Extension',
		title: 'Vulnerable Plugin: WP Super Cache (version 1.6.3)',
		description:
			'The plugin WP Super Cache (version 1.6.3) has a known vulnerability. The WP Super Cache plugin before version 1.7.2 is vulnerable to an authenticated RCE in the settings page.',
		fixedIn: '1.12.4',
		source: 'https://wpscan.com/vulnerability/733d8a02-0d44-4b78-bbb2-37e447acd2f3',
		extension: {
			name: 'WP Super Cache',
			slug: 'wp-super-cache',
			version: '1.6.3',
			type: 'plugins',
		},
	},
	isUserConnected: true,
	hasConnectedOwner: true,
	credentials: [ { type: 'managed', role: 'main', still_valid: true } ],
	handleUpgradeClick: () => {},
};
`,ve={ThreatResult:{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},AdditionalConnectionsNeeded:{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},UserConnectionNeeded:{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},CredentialsNeeded:{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},InProgressFixer:{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},ErrorFixer:{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},StaleFixer:{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},VulnerableExtension:{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}}};const _e={parameters:{storySource:{source:`import { useCallback, useState } from 'react';
import Button from '../../button/index.js';
import ThreatModal from '../index.js';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Components/Threat Modal',
  component: ThreatModal
};
const Base = args => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = useCallback(() => setIsOpen(true), []);
  const onRequestClose = useCallback(() => setIsOpen(false), []);
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx(Button, {
      onClick: onClick,
      children: "Open Threat Modal"
    }), isOpen ? /*#__PURE__*/_jsx(ThreatModal, {
      ...args,
      onRequestClose: onRequestClose
    }) : null]
  });
};
export const ThreatResult = Base.bind({});
ThreatResult.args = {
  threat: {
    id: 185869885,
    signature: 'EICAR_AV_Test',
    title: 'Malicious code found in file: index.php',
    description: "This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",
    firstDetected: '2024-10-07T20:45:06.000Z',
    fixedIn: null,
    severity: 8,
    fixable: {
      fixer: 'rollback',
      target: 'January 26, 2024, 6:49 am',
      extensionStatus: ''
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
  },
  isUserConnected: true,
  hasConnectedOwner: true,
  credentials: [{
    type: 'managed',
    role: 'main',
    still_valid: true
  }],
  handleFixThreatClick: () => {},
  handleIgnoreThreatClick: () => {},
  handleUnignoreThreatClick: () => {}
};
export const AdditionalConnectionsNeeded = Base.bind({});
AdditionalConnectionsNeeded.args = {
  threat: {
    id: 185869885,
    signature: 'EICAR_AV_Test',
    title: 'Malicious code found in file: index.php',
    description: "This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",
    firstDetected: '2024-10-07T20:45:06.000Z',
    fixedIn: null,
    severity: 8,
    fixable: {
      fixer: 'rollback',
      target: 'January 26, 2024, 6:49 am',
      extensionStatus: ''
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
  },
  isUserConnected: false,
  hasConnectedOwner: false,
  credentials: false,
  credentialsRedirectUrl: '#',
  handleConnectUser: () => {},
  handleFixThreatClick: () => {},
  handleIgnoreThreatClick: () => {},
  handleUnignoreThreatClick: () => {}
};
export const UserConnectionNeeded = Base.bind({});
UserConnectionNeeded.args = {
  threat: {
    id: 185869885,
    signature: 'EICAR_AV_Test',
    title: 'Malicious code found in file: index.php',
    description: "This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",
    firstDetected: '2024-10-07T20:45:06.000Z',
    fixedIn: null,
    severity: 8,
    fixable: {
      fixer: 'rollback',
      target: 'January 26, 2024, 6:49 am',
      extensionStatus: ''
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
  },
  isUserConnected: false,
  hasConnectedOwner: false,
  handleConnectUser: () => {},
  credentials: [{
    type: 'managed',
    role: 'main',
    still_valid: true
  }],
  credentialsRedirectUrl: '#',
  handleFixThreatClick: () => {},
  handleIgnoreThreatClick: () => {},
  handleUnignoreThreatClick: () => {}
};
export const CredentialsNeeded = Base.bind({});
CredentialsNeeded.args = {
  threat: {
    id: 185869885,
    signature: 'EICAR_AV_Test',
    title: 'Malicious code found in file: index.php',
    description: "This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",
    firstDetected: '2024-10-07T20:45:06.000Z',
    fixedIn: null,
    severity: 8,
    fixable: {
      fixer: 'rollback',
      target: 'January 26, 2024, 6:49 am',
      extensionStatus: ''
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
  },
  isUserConnected: true,
  hasConnectedOwner: true,
  credentials: false,
  credentialsIsFetching: false,
  credentialsRedirectUrl: '#',
  handleFixThreatClick: () => {},
  handleIgnoreThreatClick: () => {},
  handleUnignoreThreatClick: () => {}
};
export const InProgressFixer = Base.bind({});
InProgressFixer.args = {
  threat: {
    id: 185869885,
    signature: 'EICAR_AV_Test',
    title: 'Malicious code found in file: index.php',
    description: "This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",
    firstDetected: '2024-10-07T20:45:06.000Z',
    fixedIn: null,
    severity: 8,
    fixable: {
      fixer: 'rollback',
      target: 'January 26, 2024, 6:49 am',
      extensionStatus: ''
    },
    fixer: {
      status: 'in_progress'
    },
    status: 'current',
    filename: '/var/www/html/wp-content/index.php',
    context: {
      '1': 'echo <<<HTML',
      '2': 'X5O!P%@AP[4\\\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*',
      '3': 'HTML;',
      marks: {}
    }
  },
  isUserConnected: true,
  hasConnectedOwner: true,
  handleConnectUser: () => {},
  credentials: [{
    type: 'managed',
    role: 'main',
    still_valid: true
  }],
  credentialsRedirectUrl: '#',
  handleFixThreatClick: () => {},
  handleIgnoreThreatClick: () => {},
  handleUnignoreThreatClick: () => {}
};
export const ErrorFixer = Base.bind({});
ErrorFixer.args = {
  threat: {
    id: 185869885,
    signature: 'EICAR_AV_Test',
    title: 'Malicious code found in file: index.php',
    description: "This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",
    firstDetected: '2024-10-07T20:45:06.000Z',
    fixedIn: null,
    severity: 8,
    fixable: {
      fixer: 'rollback',
      target: 'January 26, 2024, 6:49 am',
      extensionStatus: ''
    },
    fixer: {
      error: 'error'
    },
    status: 'current',
    filename: '/var/www/html/wp-content/index.php',
    context: {
      '1': 'echo <<<HTML',
      '2': 'X5O!P%@AP[4\\\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*',
      '3': 'HTML;',
      marks: {}
    }
  },
  isUserConnected: true,
  hasConnectedOwner: true,
  handleConnectUser: () => {},
  credentials: [{
    type: 'managed',
    role: 'main',
    still_valid: true
  }],
  credentialsRedirectUrl: '#',
  handleFixThreatClick: () => {},
  handleIgnoreThreatClick: () => {},
  handleUnignoreThreatClick: () => {}
};
export const StaleFixer = Base.bind({});
StaleFixer.args = {
  threat: {
    id: 185869885,
    signature: 'EICAR_AV_Test',
    title: 'Malicious code found in file: index.php',
    description: "This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",
    firstDetected: '2024-10-07T20:45:06.000Z',
    fixedIn: null,
    severity: 8,
    fixable: {
      fixer: 'rollback',
      target: 'January 26, 2024, 6:49 am',
      extensionStatus: ''
    },
    fixer: {
      status: 'in_progress',
      lastUpdated: new Date('1999-01-01').toISOString()
    },
    status: 'current',
    filename: '/var/www/html/wp-content/index.php',
    context: {
      '1': 'echo <<<HTML',
      '2': 'X5O!P%@AP[4\\\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*',
      '3': 'HTML;',
      marks: {}
    }
  },
  isUserConnected: true,
  hasConnectedOwner: true,
  handleConnectUser: () => {},
  credentials: [{
    type: 'managed',
    role: 'main',
    still_valid: true
  }],
  credentialsRedirectUrl: '#',
  handleFixThreatClick: () => {},
  handleIgnoreThreatClick: () => {},
  handleUnignoreThreatClick: () => {}
};
export const VulnerableExtension = Base.bind({});
VulnerableExtension.args = {
  threat: {
    id: 184847701,
    signature: 'Vulnerable.WP.Extension',
    title: 'Vulnerable Plugin: WP Super Cache (version 1.6.3)',
    description: 'The plugin WP Super Cache (version 1.6.3) has a known vulnerability. The WP Super Cache plugin before version 1.7.2 is vulnerable to an authenticated RCE in the settings page.',
    fixedIn: '1.12.4',
    source: 'https://wpscan.com/vulnerability/733d8a02-0d44-4b78-bbb2-37e447acd2f3',
    extension: {
      name: 'WP Super Cache',
      slug: 'wp-super-cache',
      version: '1.6.3',
      type: 'plugins'
    }
  },
  isUserConnected: true,
  hasConnectedOwner: true,
  credentials: [{
    type: 'managed',
    role: 'main',
    still_valid: true
  }],
  handleUpgradeClick: () => {}
};`,locationsMap:{"threat-result":{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},"additional-connections-needed":{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},"user-connection-needed":{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},"credentials-needed":{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},"in-progress-fixer":{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},"error-fixer":{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},"stale-fixer":{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},"vulnerable-extension":{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}}}}},title:"JS Packages/Components/Threat Modal",component:se},D=s=>{const[d,w]=(0,i.useState)(!1),E=(0,i.useCallback)(()=>w(!0),[]),M=(0,i.useCallback)(()=>w(!1),[]);return(0,e.jsxs)("div",{children:[(0,e.jsx)(l.A,{onClick:E,children:"Open Threat Modal"}),d?(0,e.jsx)(se,{...s,onRequestClose:M}):null]})},F=D.bind({});F.args={threat:{id:185869885,signature:"EICAR_AV_Test",title:"Malicious code found in file: index.php",description:"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",firstDetected:"2024-10-07T20:45:06.000Z",fixedIn:null,severity:8,fixable:{fixer:"rollback",target:"January 26, 2024, 6:49 am",extensionStatus:""},fixer:{status:"not_started"},status:"current",filename:"/var/www/html/wp-content/index.php",context:{1:"echo <<<HTML",2:"X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*",3:"HTML;",marks:{}}},isUserConnected:!0,hasConnectedOwner:!0,credentials:[{type:"managed",role:"main",still_valid:!0}],handleFixThreatClick:()=>{},handleIgnoreThreatClick:()=>{},handleUnignoreThreatClick:()=>{}};const H=D.bind({});H.args={threat:{id:185869885,signature:"EICAR_AV_Test",title:"Malicious code found in file: index.php",description:"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",firstDetected:"2024-10-07T20:45:06.000Z",fixedIn:null,severity:8,fixable:{fixer:"rollback",target:"January 26, 2024, 6:49 am",extensionStatus:""},fixer:{status:"not_started"},status:"current",filename:"/var/www/html/wp-content/index.php",context:{1:"echo <<<HTML",2:"X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*",3:"HTML;",marks:{}}},isUserConnected:!1,hasConnectedOwner:!1,credentials:!1,credentialsRedirectUrl:"#",handleConnectUser:()=>{},handleFixThreatClick:()=>{},handleIgnoreThreatClick:()=>{},handleUnignoreThreatClick:()=>{}};const V=D.bind({});V.args={threat:{id:185869885,signature:"EICAR_AV_Test",title:"Malicious code found in file: index.php",description:"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",firstDetected:"2024-10-07T20:45:06.000Z",fixedIn:null,severity:8,fixable:{fixer:"rollback",target:"January 26, 2024, 6:49 am",extensionStatus:""},fixer:{status:"not_started"},status:"current",filename:"/var/www/html/wp-content/index.php",context:{1:"echo <<<HTML",2:"X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*",3:"HTML;",marks:{}}},isUserConnected:!1,hasConnectedOwner:!1,handleConnectUser:()=>{},credentials:[{type:"managed",role:"main",still_valid:!0}],credentialsRedirectUrl:"#",handleFixThreatClick:()=>{},handleIgnoreThreatClick:()=>{},handleUnignoreThreatClick:()=>{}};const J=D.bind({});J.args={threat:{id:185869885,signature:"EICAR_AV_Test",title:"Malicious code found in file: index.php",description:"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",firstDetected:"2024-10-07T20:45:06.000Z",fixedIn:null,severity:8,fixable:{fixer:"rollback",target:"January 26, 2024, 6:49 am",extensionStatus:""},fixer:{status:"not_started"},status:"current",filename:"/var/www/html/wp-content/index.php",context:{1:"echo <<<HTML",2:"X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*",3:"HTML;",marks:{}}},isUserConnected:!0,hasConnectedOwner:!0,credentials:!1,credentialsIsFetching:!1,credentialsRedirectUrl:"#",handleFixThreatClick:()=>{},handleIgnoreThreatClick:()=>{},handleUnignoreThreatClick:()=>{}};const K=D.bind({});K.args={threat:{id:185869885,signature:"EICAR_AV_Test",title:"Malicious code found in file: index.php",description:"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",firstDetected:"2024-10-07T20:45:06.000Z",fixedIn:null,severity:8,fixable:{fixer:"rollback",target:"January 26, 2024, 6:49 am",extensionStatus:""},fixer:{status:"in_progress"},status:"current",filename:"/var/www/html/wp-content/index.php",context:{1:"echo <<<HTML",2:"X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*",3:"HTML;",marks:{}}},isUserConnected:!0,hasConnectedOwner:!0,handleConnectUser:()=>{},credentials:[{type:"managed",role:"main",still_valid:!0}],credentialsRedirectUrl:"#",handleFixThreatClick:()=>{},handleIgnoreThreatClick:()=>{},handleUnignoreThreatClick:()=>{}};const Z=D.bind({});Z.args={threat:{id:185869885,signature:"EICAR_AV_Test",title:"Malicious code found in file: index.php",description:"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",firstDetected:"2024-10-07T20:45:06.000Z",fixedIn:null,severity:8,fixable:{fixer:"rollback",target:"January 26, 2024, 6:49 am",extensionStatus:""},fixer:{error:"error"},status:"current",filename:"/var/www/html/wp-content/index.php",context:{1:"echo <<<HTML",2:"X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*",3:"HTML;",marks:{}}},isUserConnected:!0,hasConnectedOwner:!0,handleConnectUser:()=>{},credentials:[{type:"managed",role:"main",still_valid:!0}],credentialsRedirectUrl:"#",handleFixThreatClick:()=>{},handleIgnoreThreatClick:()=>{},handleUnignoreThreatClick:()=>{}};const X=D.bind({});X.args={threat:{id:185869885,signature:"EICAR_AV_Test",title:"Malicious code found in file: index.php",description:"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",firstDetected:"2024-10-07T20:45:06.000Z",fixedIn:null,severity:8,fixable:{fixer:"rollback",target:"January 26, 2024, 6:49 am",extensionStatus:""},fixer:{status:"in_progress",lastUpdated:new Date("1999-01-01").toISOString()},status:"current",filename:"/var/www/html/wp-content/index.php",context:{1:"echo <<<HTML",2:"X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*",3:"HTML;",marks:{}}},isUserConnected:!0,hasConnectedOwner:!0,handleConnectUser:()=>{},credentials:[{type:"managed",role:"main",still_valid:!0}],credentialsRedirectUrl:"#",handleFixThreatClick:()=>{},handleIgnoreThreatClick:()=>{},handleUnignoreThreatClick:()=>{}};const W=D.bind({});W.args={threat:{id:184847701,signature:"Vulnerable.WP.Extension",title:"Vulnerable Plugin: WP Super Cache (version 1.6.3)",description:"The plugin WP Super Cache (version 1.6.3) has a known vulnerability. The WP Super Cache plugin before version 1.7.2 is vulnerable to an authenticated RCE in the settings page.",fixedIn:"1.12.4",source:"https://wpscan.com/vulnerability/733d8a02-0d44-4b78-bbb2-37e447acd2f3",extension:{name:"WP Super Cache",slug:"wp-super-cache",version:"1.6.3",type:"plugins"}},isUserConnected:!0,hasConnectedOwner:!0,credentials:[{type:"managed",role:"main",still_valid:!0}],handleUpgradeClick:()=>{}};const me=["ThreatResult","AdditionalConnectionsNeeded","UserConnectionNeeded","CredentialsNeeded","InProgressFixer","ErrorFixer","StaleFixer","VulnerableExtension"];F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = useCallback(() => setIsOpen(true), []);
  const onRequestClose = useCallback(() => setIsOpen(false), []);
  return <div>
            <Button onClick={onClick}>Open Threat Modal</Button>
            {isOpen ? <ThreatModal {...args} onRequestClose={onRequestClose} /> : null}
        </div>;
}`,...F.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = useCallback(() => setIsOpen(true), []);
  const onRequestClose = useCallback(() => setIsOpen(false), []);
  return <div>
            <Button onClick={onClick}>Open Threat Modal</Button>
            {isOpen ? <ThreatModal {...args} onRequestClose={onRequestClose} /> : null}
        </div>;
}`,...H.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = useCallback(() => setIsOpen(true), []);
  const onRequestClose = useCallback(() => setIsOpen(false), []);
  return <div>
            <Button onClick={onClick}>Open Threat Modal</Button>
            {isOpen ? <ThreatModal {...args} onRequestClose={onRequestClose} /> : null}
        </div>;
}`,...V.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = useCallback(() => setIsOpen(true), []);
  const onRequestClose = useCallback(() => setIsOpen(false), []);
  return <div>
            <Button onClick={onClick}>Open Threat Modal</Button>
            {isOpen ? <ThreatModal {...args} onRequestClose={onRequestClose} /> : null}
        </div>;
}`,...J.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = useCallback(() => setIsOpen(true), []);
  const onRequestClose = useCallback(() => setIsOpen(false), []);
  return <div>
            <Button onClick={onClick}>Open Threat Modal</Button>
            {isOpen ? <ThreatModal {...args} onRequestClose={onRequestClose} /> : null}
        </div>;
}`,...K.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = useCallback(() => setIsOpen(true), []);
  const onRequestClose = useCallback(() => setIsOpen(false), []);
  return <div>
            <Button onClick={onClick}>Open Threat Modal</Button>
            {isOpen ? <ThreatModal {...args} onRequestClose={onRequestClose} /> : null}
        </div>;
}`,...Z.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = useCallback(() => setIsOpen(true), []);
  const onRequestClose = useCallback(() => setIsOpen(false), []);
  return <div>
            <Button onClick={onClick}>Open Threat Modal</Button>
            {isOpen ? <ThreatModal {...args} onRequestClose={onRequestClose} /> : null}
        </div>;
}`,...X.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = useCallback(() => setIsOpen(true), []);
  const onRequestClose = useCallback(() => setIsOpen(false), []);
  return <div>
            <Button onClick={onClick}>Open Threat Modal</Button>
            {isOpen ? <ThreatModal {...args} onRequestClose={onRequestClose} /> : null}
        </div>;
}`,...W.parameters?.docs?.source}}}},"../components/components/badge/index.tsx":(I,x,n)=>{"use strict";n.d(x,{A:()=>a});var i=n("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=n.n(f),o=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/badge/style.module.scss"),u={};u.insert="head",u.singleton=!1;var C=c()(o.A,u);const k=o.A.locals||{};var b=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a=({children:p,className:T,variant:j,...t})=>{const r=(0,i.A)(k.badge,{[k["is-success"]]:j==="success",[k["is-warning"]]:j==="warning",[k["is-danger"]]:j==="danger"},T);return(0,b.jsx)("span",{className:r,...t,children:p})}},"../components/components/contextual-upgrade-trigger/index.tsx":(I,x,n)=>{"use strict";n.d(x,{A:()=>j});var i=n("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),l=n("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-right.js"),f=n("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),c=n("../components/components/icon-tooltip/index.tsx"),o=n("../components/components/text/index.tsx"),u=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),C=n.n(u),k=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/contextual-upgrade-trigger/style.module.scss"),b={};b.insert="head",b.singleton=!1;var A=C()(k.A,b);const a=k.A.locals||{};var p=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=({description:t,cta:r,onClick:m,href:e,openInNewTab:h=!1,className:g,tooltipText:S=""})=>{const _=e!==void 0?"a":"button",v=_==="a"?{href:e,...h&&{target:"_blank"}}:{onClick:m};return(0,p.jsxs)("div",{className:(0,f.A)(a.cut,g),children:[(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{children:[(0,p.jsx)(o.Ay,{className:a.description,children:t}),S&&(0,p.jsx)(c.A,{className:a.iconContainer,iconSize:16,offset:4,children:(0,p.jsx)(o.Ay,{variant:"body-small",children:S})})]}),(0,p.jsx)("div",{children:(0,p.jsx)(_,{...v,children:(0,p.jsx)(o.Ay,{className:a.cta,children:r})})})]}),(0,p.jsx)(i.A,{icon:l.A,className:a.icon,size:30})]})}},"../components/components/diff-viewer/index.tsx":(I,x,n)=>{"use strict";n.d(x,{A:()=>j});var i=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const l=t=>{const r=t.lastIndexOf("/");return r>-1?{prefix:t.slice(0,r),path:t.slice(r)}:{prefix:"",path:t}};function f(t,r){const m=t.startsWith("a/")&&r.startsWith("b/");if(t=m?t.slice(2):t,r=m?r.slice(2):r,t===r){const{prefix:h,path:g}=l(t);return{prev:{prefix:h,path:g},next:{prefix:h,path:g}}}const e=Math.max(t.length,r.length);for(let h=0,g=0;h<e;h++)if(t[h]==="/"&&r[h]==="/"&&(g=h),t[h]!==r[h])return{prev:{prefix:t.slice(0,g),path:t.slice(g)},next:{prefix:r.slice(0,g),path:r.slice(g)}};return{prev:l(t),next:l(r)}}function c(t){const r=t.split(/\n/),m=[];let e=0;function h(){const _={};for(m.push(_);e<r.length;){const v=r[e];if(/^(---|\+\+\+|@@)\s/.test(v))break;const R=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(v);R&&(_.index=R[1]),e++}for(g(_),g(_),_.hunks=[];e<r.length;){const v=r[e];if(/^(Index:\s|diff\s|---\s|\+\+\+\s|===================================================================)/.test(v))break;if(/^@@/.test(v))_.hunks.push(S());else{if(v)throw new Error("Unknown line "+(e+1)+" "+JSON.stringify(v));e++}}}function g(_){const v=/^(---|\+\+\+)\s+(.*)\r?$/.exec(r[e]);if(v){const R=v[1]==="---"?"old":"new",y=v[2].split("	",2);let P=y[0].replace(/\\\\/g,"\\");/^".*"$/.test(P)&&(P=P.substr(1,P.length-2)),_[R+"FileName"]=P,_[R+"Header"]=(y[1]||"").trim(),e++}}function S(){const _=e,v=r[e++],R=v.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),y={oldStart:+R[1],oldLines:typeof R[2]>"u"?1:+R[2],newStart:+R[3],newLines:typeof R[4]>"u"?1:+R[4],lines:[]};y.oldLines===0&&(y.oldStart+=1),y.newLines===0&&(y.newStart+=1);let P=0,U=0,z;for(;e<r.length&&(U<y.oldLines||P<y.newLines||(z=r[e])!==null&&z!==void 0&&z.startsWith("\\"));e++){const O=r[e].length===0&&e!==r.length-1?" ":r[e][0];if(O==="+"||O==="-"||O===" "||O==="\\")y.lines.push(r[e]),O==="+"?P++:O==="-"?U++:O===" "&&(P++,U++);else throw new Error(`Hunk at line ${_+1} contained invalid line ${r[e]}`)}if(!P&&y.newLines===1&&(y.newLines=0),!U&&y.oldLines===1&&(y.oldLines=0),P!==y.newLines)throw new Error("Added line count did not match for hunk at line "+(_+1));if(U!==y.oldLines)throw new Error("Removed line count did not match for hunk at line "+(_+1));return y}for(;e<r.length;)h();return m}var o=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=n.n(o),C=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/diff-viewer/styles.module.scss"),k={};k.insert="head",k.singleton=!1;var b=u()(C.A,k);const A=C.A.locals||{};var a=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const p=({oldFileName:t,newFileName:r})=>{const{prev:m,next:e}=f(t,r);return m.prefix+m.path===e.prefix+e.path?(0,a.jsxs)(i.Fragment,{children:[m.prefix&&(0,a.jsx)("span",{className:A["diff-viewer__path-prefix"],children:m.prefix}),(0,a.jsx)("span",{className:A["diff-viewer__path"],children:m.path})]}):(0,a.jsxs)(i.Fragment,{children:[!!m.prefix&&(0,a.jsx)("span",{className:A["diff-viewer__path-prefix"],children:m.prefix}),(0,a.jsx)("span",{className:A["diff-viewer__path"],children:m.path})," \u2192 ",!!e.prefix&&(0,a.jsx)("span",{className:A["diff-viewer__path-prefix"],children:e.prefix}),(0,a.jsx)("span",{className:A["diff-viewer__path"],children:e.path})]})},T=({diff:t})=>(0,a.jsx)("div",{className:A["diff-viewer"],children:c(t).map((r,m)=>(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)("div",{className:A["diff-viewer__filename"],children:p(r)},`file-${m}`),(0,a.jsxs)("div",{className:A["diff-viewer__file"],children:[(0,a.jsx)("div",{className:A["diff-viewer__line-numbers"],children:r.hunks.map((e,h)=>{let g=0;return e.lines.map((S,_)=>(0,a.jsx)("div",{children:S[0]==="+"?"\xA0":e.oldStart+g++},`${h}-${_}`))})},"left-numbers"),(0,a.jsx)("div",{className:A["diff-viewer__line-numbers"],children:r.hunks.map((e,h)=>{let g=0;return e.lines.map((S,_)=>(0,a.jsx)("div",{children:S[0]==="-"?"\xA0":e.newStart+g++},`${h}-${_}`))})},"right-numbers"),(0,a.jsx)("div",{className:A["diff-viewer__lines"],children:r.hunks.map((e,h)=>e.lines.map((g,S)=>{const _=g.slice(1).replace(/^\s*$/,"\xA0"),v=`${h}-${S}`;switch(g[0]){case" ":return(0,a.jsx)("div",{children:_},v);case"-":return(0,a.jsx)("del",{children:_},v);case"+":return(0,a.jsx)("ins",{children:_},v);default:return}}))})]},`diff-${m}`)]},m))}),j=T;try{T.displayName="DiffViewer",T.__docgenInfo={description:"",displayName:"DiffViewer",props:{diff:{defaultValue:null,description:"",name:"diff",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/diff-viewer/index.tsx#DiffViewer"]={docgenInfo:T.__docgenInfo,name:"DiffViewer",path:"../components/components/diff-viewer/index.tsx#DiffViewer"})}catch{}try{diffviewer.displayName="diffviewer",diffviewer.__docgenInfo={description:"",displayName:"diffviewer",props:{diff:{defaultValue:null,description:"",name:"diff",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/diff-viewer/index.tsx#diffviewer"]={docgenInfo:diffviewer.__docgenInfo,name:"diffviewer",path:"../components/components/diff-viewer/index.tsx#diffviewer"})}catch{}},"../components/components/marked-lines/index.tsx":(I,x,n)=>{"use strict";n.d(x,{A:()=>a});var i=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=n.n(i),f=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/marked-lines/styles.module.scss"),c={};c.insert="head",c.singleton=!1;var o=l()(f.A,c);const u=f.A.locals||{};var C=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const k=p=>(0,C.jsx)("mark",{className:u["marked-lines__mark"],children:p},p),b=(p,T)=>{const[j,t]=p.reduce(([r,m],[e,h])=>{const g=T.slice(e,h),S=e>m?[T.slice(m,e),k(g)]:[k(g)];return[[...r,...S],h]},[[],0]);return t<T.length?[...j,T.slice(t)]:j},a=({context:p})=>{const{marks:T,...j}=p;return(0,C.jsxs)("div",{className:u["marked-lines"],children:[(0,C.jsx)("div",{className:u["marked-lines__line-numbers"],children:Object.keys(j).map(t=>{const r=Object.hasOwn(T,t);return(0,C.jsx)("div",{className:`${u["marked-lines__line-number"]} ${r?u["marked-lines__marked-line"]:""}`,children:t},t)})}),(0,C.jsx)("div",{className:u["marked-lines__lines"],children:Object.keys(j).map(t=>{const r=j[t]||" ",m=Object.hasOwn(T,t);return(0,C.jsx)("div",{className:`${u["marked-lines__line"]} ${m?u["marked-lines__marked-line"]:""} `,children:(0,C.jsx)(C.Fragment,{children:m?b(T[t],r):r})},t)})})]})};try{markedlines.displayName="markedlines",markedlines.__docgenInfo={description:"",displayName:"markedlines",props:{context:{defaultValue:null,description:"",name:"context",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/marked-lines/index.tsx#markedlines"]={docgenInfo:markedlines.__docgenInfo,name:"markedlines",path:"../components/components/marked-lines/index.tsx#markedlines"})}catch{}},"../components/components/threat-severity-badge/index.tsx":(I,x,n)=>{"use strict";n.d(x,{A:()=>u});var i=n("../../../node_modules/.pnpm/@wordpress+i18n@5.17.0/node_modules/@wordpress/i18n/build-module/index.js"),l=n("../components/components/badge/index.tsx"),f=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c=i._x,u=({severity:C})=>C>=5?(0,f.jsx)(l.A,{variant:"danger",children:c("Critical","Severity label for issues rated 5 or higher.","jetpack-components")}):C>=3&&C<5?(0,f.jsx)(l.A,{variant:"warning",children:c("High","Severity label for issues rated between 3 and 5.","jetpack-components")}):(0,f.jsx)(l.A,{children:c("Low","Severity label for issues rated below 3.","jetpack-components")});try{threatseveritybadge.displayName="threatseveritybadge",threatseveritybadge.__docgenInfo={description:"",displayName:"threatseveritybadge",props:{severity:{defaultValue:null,description:"",name:"severity",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-severity-badge/index.tsx#threatseveritybadge"]={docgenInfo:threatseveritybadge.__docgenInfo,name:"threatseveritybadge",path:"../components/components/threat-severity-badge/index.tsx#threatseveritybadge"})}catch{}},"../scan/src/index.ts":(I,x,n)=>{"use strict";n.d(x,{getDetailedFixerAction:()=>T,getFixerAction:()=>p,getFixerDescription:()=>j,getFixerState:()=>a,getThreatType:()=>u});var i=n("../scan/src/types/fixers.ts"),l=n("../../../node_modules/.pnpm/@wordpress+i18n@5.17.0/node_modules/@wordpress/i18n/build-module/index.js");const f="https://jetpack.com/contact-support/?rel=support",c=1e3*60*60*24,o=l.__,u=t=>t.signature==="Vulnerable.WP.Core"?"core":t.extension?t.extension.type:t.filename?"file":null,C=t=>{const r=new Date,m=new Date(t);return r.getTime()-m.getTime()>=c},k=t=>!!("error"in t&&t.error),b=t=>"status"in t&&t.status==="in_progress",A=t=>b(t)&&"lastUpdated"in t&&!!C(t.lastUpdated),a=t=>({inProgress:t&&b(t),error:t&&k(t),stale:t&&A(t)}),p=t=>{switch(t.fixable&&t.fixable.fixer){case"delete":return o("Delete","jetpack-scan");case"update":return o("Update","jetpack-scan");case"replace":case"rollback":return o("Replace","jetpack-scan");default:return o("Auto-fix","jetpack-scan")}},T=t=>{switch(t.fixable&&t.fixable.fixer){case"delete":if(t.filename)return o("Delete file","jetpack-scan");if(t.extension?.type==="plugins")return o("Delete plugin from site","jetpack-scan");if(t.extension?.type==="themes")return o("Delete theme from site","jetpack-scan");break;case"update":return t.extension?.type==="plugins"?o("Update plugin to newer version","jetpack-scan"):t.extension?.type==="themes"?o("Update theme to newer version","jetpack-scan"):o("Update","jetpack-scan");case"replace":case"rollback":if(t.filename)return o("Replace from backup","jetpack-scan");if(t.signature==="php_hardening_WP_Config_NoSalts_001")return o("Replace default salts","jetpack-scan");break;default:return o("Auto-fix","jetpack-scan")}},j=t=>{switch(t.fixable&&t.fixable.fixer){case"delete":if(t.filename)return t.filename.endsWith("/")?o("Delete the directory that the infected file is in.","jetpack-scan"):t.signature==="Core.File.Modification"?o("Delete the unexpected file in a core WordPress directory.","jetpack-scan"):o("Delete the infected file.","jetpack-scan");if(t.extension?.type==="plugins")return o("Delete the plugin directory to fix the threat.","jetpack-scan");if(t.extension?.type==="themes")return o("Delete the theme directory to fix the threat.","jetpack-scan");break;case"update":return t.fixedIn&&t.extension.name?(0,l.nv)(o("Update %1$s to version %2$s","jetpack-scan"),t.extension.name,t.fixedIn):o("Upgrade the plugin or theme to a newer version.","jetpack-scan");case"replace":case"rollback":if(t.filename)return t.signature==="Core.File.Modification"?o("Replace the modified core WordPress file with the original clean version from the WordPress source code.","jetpack-scan"):o("Replace the infected file with a previously backed up version that is clean.","jetpack-scan");if(t.signature==="php_hardening_WP_Config_NoSalts_001")return o("Replace the default salt keys in wp-config.php with unique ones.","jetpack-scan");break;default:return o("Jetpack will auto-fix the threat.","jetpack-scan")}}},"../scan/src/types/fixers.ts":()=>{},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/badge/style.module.scss":(I,x,n)=>{"use strict";n.d(x,{A:()=>u});var i=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=n.n(i),f=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=n.n(f),o=c()(l());o.push([I.id,".nk_fFsPvSONWKk4uLG7d{display:inline-block;border-radius:4px;background-color:var(--jp-gray-0);color:var(--jp-gray-80);padding:4px 8px;font-size:13px;font-weight:400;line-height:16px}.nk_fFsPvSONWKk4uLG7d.PVcxhYDdo6s9a5JG4Bdc{background-color:var(--jp-green-5);color:var(--jp-green-50)}.nk_fFsPvSONWKk4uLG7d.auS4nez9_tykrLDLgVE1{background-color:var(--jp-yellow-5);color:var(--jp-yellow-60)}.nk_fFsPvSONWKk4uLG7d.Dw4SD5lZ_vHbdMWWrhuY{background-color:var(--jp-red-5);color:var(--jp-red-70)}",""]),o.locals={badge:"nk_fFsPvSONWKk4uLG7d","is-success":"PVcxhYDdo6s9a5JG4Bdc","is-warning":"auS4nez9_tykrLDLgVE1","is-danger":"Dw4SD5lZ_vHbdMWWrhuY"};const u=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/contextual-upgrade-trigger/style.module.scss":(I,x,n)=>{"use strict";n.d(x,{A:()=>u});var i=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=n.n(i),f=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=n.n(f),o=c()(l());o.push([I.id,'.Oq5VJazodqT8DRArRoxp{border:2px solid var(--jp-green-40);border-radius:var(--jp-border-radius);padding:calc(var(--spacing-base)*2) calc(var(--spacing-base)*3);display:flex;justify-content:space-between;align-items:center;gap:calc(var(--spacing-base)*3);text-align:left;background:none;width:100%;position:relative;color:var(--jp-gray-80)}.Oq5VJazodqT8DRArRoxp button,.Oq5VJazodqT8DRArRoxp a{all:unset;color:var(--jp-gray-80);cursor:pointer}.Oq5VJazodqT8DRArRoxp button::after,.Oq5VJazodqT8DRArRoxp a::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%}.Oq5VJazodqT8DRArRoxp:focus-within{border-color:var(--jp-black)}.Oq5VJazodqT8DRArRoxp:focus-within .Bywo2wyizrCdXXNpwdXg,.Oq5VJazodqT8DRArRoxp:hover .Bywo2wyizrCdXXNpwdXg{transform:translateX(calc(var(--spacing-base) * 2))}.Oq5VJazodqT8DRArRoxp:focus-within .zuIQ07dt5U76xbhLQiTo,.Oq5VJazodqT8DRArRoxp:hover .zuIQ07dt5U76xbhLQiTo{text-decoration:underline;text-decoration-thickness:2px}.Oq5VJazodqT8DRArRoxp .zuIQ07dt5U76xbhLQiTo{font-weight:bold}.zuIQ07dt5U76xbhLQiTo{font-weight:bold}.Bywo2wyizrCdXXNpwdXg{fill:var(--jp-green-40);transition:transform .1s ease-out;pointer-events:none}.y5NDwkTOd8txiISmZyVA{margin:0 0 0 calc(var(--spacing-base)/3);display:inline;vertical-align:middle}.y5NDwkTOd8txiISmZyVA svg{z-index:10;position:relative}.p0S9wGbKtLdTVFUqPNKY{display:inline}',""]),o.locals={cut:"Oq5VJazodqT8DRArRoxp",icon:"Bywo2wyizrCdXXNpwdXg",cta:"zuIQ07dt5U76xbhLQiTo",iconContainer:"y5NDwkTOd8txiISmZyVA",description:"p0S9wGbKtLdTVFUqPNKY"};const u=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/diff-viewer/styles.module.scss":(I,x,n)=>{"use strict";n.d(x,{A:()=>u});var i=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=n.n(i),f=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=n.n(f),o=c()(l());o.push([I.id,'.ADZzRzNl1m8jLfaEfvnx{font-size:var(--font-body);line-height:1.5}.hz4SyV6HHNtWhCxMPw4U{padding:calc(var(--spacing-base)/2) var(--spacing-base);background-color:var(--jp-gray-10);font-weight:600}.Je9oyKNAyzcTtDYCV5S9{background-color:var(--jp-gray-0);display:flex;font-family:"Courier 10 Pitch",Courier,monospace;flex-direction:row;overflow-x:auto;white-space:pre}.YLKPR7kAMhZebpLgNhGp{padding:0 var(--spacing-base);display:flex;flex-direction:column;text-align:right;background-color:var(--jp-gray-10);color:var(--jp-gray-50)}.DqmSK9iMOEQ1k_ZjmOru{display:flex;flex-direction:column;flex-grow:1;overflow-x:visible}.DqmSK9iMOEQ1k_ZjmOru div,.DqmSK9iMOEQ1k_ZjmOru del,.DqmSK9iMOEQ1k_ZjmOru ins{padding:0 var(--spacing-base);text-decoration:none}.DqmSK9iMOEQ1k_ZjmOru del{background-color:var(--jp-red-0);color:var(--jp-red-60)}.DqmSK9iMOEQ1k_ZjmOru ins{background-color:var(--jp-green-5);color:var(--jp-green-60)}',""]),o.locals={"diff-viewer":"ADZzRzNl1m8jLfaEfvnx","diff-viewer__filename":"hz4SyV6HHNtWhCxMPw4U","diff-viewer__file":"Je9oyKNAyzcTtDYCV5S9","diff-viewer__line-numbers":"YLKPR7kAMhZebpLgNhGp","diff-viewer__lines":"DqmSK9iMOEQ1k_ZjmOru"};const u=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/marked-lines/styles.module.scss":(I,x,n)=>{"use strict";n.d(x,{A:()=>u});var i=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=n.n(i),f=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=n.n(f),o=c()(l());o.push([I.id,".vnAKgosr6jMUmVlm3ZvU{padding:0;background-color:var(--jp-gray-0);font-family:monospace;display:flex;flex-direction:row;overflow-x:auto}.SHdmOE1Aw5BHDru2py6B{background-color:var(--jp-red-0)}.aPEFslCHyTgF_qW3GVaE{display:flex;flex-direction:column;text-align:right}.w53X5RnDMolZ6mJ2gx7Z{padding:0 calc(var(--spacing-base)/2);background-color:var(--jp-gray-10);color:var(--font-body)}.w53X5RnDMolZ6mJ2gx7Z.SHdmOE1Aw5BHDru2py6B{background-color:var(--jp-red-50);color:var(--jp-white)}.h3N4p86b6QmL5zLerrtD{display:flex;flex:1;flex-direction:column;white-space:pre;overflow-x:visible}.FRq9QxRq9LOTqIze8Lci{padding-left:var(--spacing-base)}.LYClj0zJOQ_wA9Ffqxug{background-color:var(--jp-red);color:var(--jp-white);border-radius:calc(var(--jp-border-radius)/2);padding:calc(var(--spacing-base)/4) calc(var(--spacing-base)/2)}",""]),o.locals={"marked-lines":"vnAKgosr6jMUmVlm3ZvU","marked-lines__marked-line":"SHdmOE1Aw5BHDru2py6B","marked-lines__line-numbers":"aPEFslCHyTgF_qW3GVaE","marked-lines__line-number":"w53X5RnDMolZ6mJ2gx7Z","marked-lines__lines":"h3N4p86b6QmL5zLerrtD","marked-lines__line":"FRq9QxRq9LOTqIze8Lci","marked-lines__mark":"LYClj0zJOQ_wA9Ffqxug"};const u=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/threat-modal/styles.module.scss":(I,x,n)=>{"use strict";n.d(x,{A:()=>u});var i=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=n.n(i),f=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=n.n(f),o=c()(l());o.push([I.id,".Ec50pSMYk5fhpKHOOsF_{display:flex;flex-direction:column;gap:calc(var(--spacing-base)*3)}.m5D9qZXweIW3Z4gxPfaN{display:flex;flex-direction:column;gap:calc(var(--spacing-base)*2)}.m5D9qZXweIW3Z4gxPfaN .yFQh6pGa7FxKD7Ra25s2{text-decoration:none}.m5D9qZXweIW3Z4gxPfaN .yFQh6pGa7FxKD7Ra25s2:hover{text-decoration:underline}.m5D9qZXweIW3Z4gxPfaN .W1iOMsL4WsvJN58MLVxg{display:flex;gap:calc(var(--spacing-base)/2);align-items:center}.U_b94ewunzdbjTjXvLQ0{display:flex;align-items:center;gap:calc(var(--spacing-base)*1.5)}.ZMLbp6MigJM2ofsVpogI{background-color:var(--jp-gray-0);padding:calc(var(--spacing-base)*3);overflow-x:auto}.R8c2kk3ScjdfCUoKmHrv{padding-top:calc(var(--spacing-base)*3);border-top:1px solid var(--jp-gray-5)}.R8c2kk3ScjdfCUoKmHrv .BQi45bf1tmuiqTzMXtbP{display:flex;justify-content:flex-end;gap:calc(var(--spacing-base)*2)}.Qqp4wTT6YG9JirXZu0Kf{padding-bottom:calc(var(--spacing-base)*3)}.g9JGIbll0NiAeeTs7x9e{display:flex;gap:calc(var(--spacing-base)/2)}.g9JGIbll0NiAeeTs7x9e p{font-weight:bold}.cq7Dd2a4ZcSu6q7gZgnV{display:flex;gap:calc(var(--spacing-base)*2)}.fPGlzt3UAlQI73cRTpRW{margin-top:calc(var(--spacing-base)*2)}svg._OAj1yHi1M_tCVkJ2otC{color:var(--jp-black);height:20px;width:20px;margin-left:calc(var(--spacing-base)/2);margin-right:6px}",""]),o.locals={"threat-details":"Ec50pSMYk5fhpKHOOsF_",section:"m5D9qZXweIW3Z4gxPfaN",section__toggle:"yFQh6pGa7FxKD7Ra25s2",section__toggle__content:"W1iOMsL4WsvJN58MLVxg",title:"U_b94ewunzdbjTjXvLQ0",filename:"ZMLbp6MigJM2ofsVpogI","modal-footer":"R8c2kk3ScjdfCUoKmHrv","threat-actions":"BQi45bf1tmuiqTzMXtbP","fixer-notice":"Qqp4wTT6YG9JirXZu0Kf",notice__title:"g9JGIbll0NiAeeTs7x9e",notice__actions:"cq7Dd2a4ZcSu6q7gZgnV",notice__action:"fPGlzt3UAlQI73cRTpRW",spinner:"_OAj1yHi1M_tCVkJ2otC"};const u=o}}]);
