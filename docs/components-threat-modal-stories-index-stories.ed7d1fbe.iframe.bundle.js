"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6511],{"../scan/src/components/threat-modal/stories/index.stories.tsx":(A,h,t)=>{t.r(h),t.d(h,{AdditionalConnectionsNeeded:()=>a,CredentialsNeeded:()=>r,ErrorFixer:()=>o,InProgressFixer:()=>i,StaleFixer:()=>l,ThreatResult:()=>n,UserConnectionNeeded:()=>s,VulnerableExtension:()=>c,__namedExportsOrder:()=>x,default:()=>f});var T=t("../components/components/button/index.tsx"),d=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=t("../scan/src/components/threat-modal/index.tsx"),u=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),R=`import { Button } from '@automattic/jetpack-components';
import { useCallback, useState } from 'react';
import ThreatModal from '../index.js';

export default {
	title: 'JS Packages/Scan/Threat Modal',
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
`,E={ThreatResult:{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},AdditionalConnectionsNeeded:{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},UserConnectionNeeded:{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},CredentialsNeeded:{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},InProgressFixer:{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},ErrorFixer:{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},StaleFixer:{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},VulnerableExtension:{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}}};const f={parameters:{storySource:{source:`import { Button } from '@automattic/jetpack-components';
import { useCallback, useState } from 'react';
import ThreatModal from '../index.js';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Scan/Threat Modal',
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
};`,locationsMap:{"threat-result":{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},"additional-connections-needed":{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},"user-connection-needed":{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},"credentials-needed":{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},"in-progress-fixer":{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},"error-fixer":{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},"stale-fixer":{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}},"vulnerable-extension":{startLoc:{col:13,line:9},endLoc:{col:1,line:22},startBody:{col:13,line:9},endBody:{col:1,line:22}}}}},title:"JS Packages/Scan/Threat Modal",component:p.A},e=I=>{const[m,C]=(0,d.useState)(!1),g=(0,d.useCallback)(()=>C(!0),[]),k=(0,d.useCallback)(()=>C(!1),[]);return(0,u.jsxs)("div",{children:[(0,u.jsx)(T.A,{onClick:g,children:"Open Threat Modal"}),m?(0,u.jsx)(p.A,{...I,onRequestClose:k}):null]})},n=e.bind({});n.args={threat:{id:185869885,signature:"EICAR_AV_Test",title:"Malicious code found in file: index.php",description:"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",firstDetected:"2024-10-07T20:45:06.000Z",fixedIn:null,severity:8,fixable:{fixer:"rollback",target:"January 26, 2024, 6:49 am",extensionStatus:""},fixer:{status:"not_started"},status:"current",filename:"/var/www/html/wp-content/index.php",context:{1:"echo <<<HTML",2:"X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*",3:"HTML;",marks:{}}},isUserConnected:!0,hasConnectedOwner:!0,credentials:[{type:"managed",role:"main",still_valid:!0}],handleFixThreatClick:()=>{},handleIgnoreThreatClick:()=>{},handleUnignoreThreatClick:()=>{}};const a=e.bind({});a.args={threat:{id:185869885,signature:"EICAR_AV_Test",title:"Malicious code found in file: index.php",description:"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",firstDetected:"2024-10-07T20:45:06.000Z",fixedIn:null,severity:8,fixable:{fixer:"rollback",target:"January 26, 2024, 6:49 am",extensionStatus:""},fixer:{status:"not_started"},status:"current",filename:"/var/www/html/wp-content/index.php",context:{1:"echo <<<HTML",2:"X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*",3:"HTML;",marks:{}}},isUserConnected:!1,hasConnectedOwner:!1,credentials:!1,credentialsRedirectUrl:"#",handleConnectUser:()=>{},handleFixThreatClick:()=>{},handleIgnoreThreatClick:()=>{},handleUnignoreThreatClick:()=>{}};const s=e.bind({});s.args={threat:{id:185869885,signature:"EICAR_AV_Test",title:"Malicious code found in file: index.php",description:"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",firstDetected:"2024-10-07T20:45:06.000Z",fixedIn:null,severity:8,fixable:{fixer:"rollback",target:"January 26, 2024, 6:49 am",extensionStatus:""},fixer:{status:"not_started"},status:"current",filename:"/var/www/html/wp-content/index.php",context:{1:"echo <<<HTML",2:"X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*",3:"HTML;",marks:{}}},isUserConnected:!1,hasConnectedOwner:!1,handleConnectUser:()=>{},credentials:[{type:"managed",role:"main",still_valid:!0}],credentialsRedirectUrl:"#",handleFixThreatClick:()=>{},handleIgnoreThreatClick:()=>{},handleUnignoreThreatClick:()=>{}};const r=e.bind({});r.args={threat:{id:185869885,signature:"EICAR_AV_Test",title:"Malicious code found in file: index.php",description:"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",firstDetected:"2024-10-07T20:45:06.000Z",fixedIn:null,severity:8,fixable:{fixer:"rollback",target:"January 26, 2024, 6:49 am",extensionStatus:""},fixer:{status:"not_started"},status:"current",filename:"/var/www/html/wp-content/index.php",context:{1:"echo <<<HTML",2:"X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*",3:"HTML;",marks:{}}},isUserConnected:!0,hasConnectedOwner:!0,credentials:!1,credentialsIsFetching:!1,credentialsRedirectUrl:"#",handleFixThreatClick:()=>{},handleIgnoreThreatClick:()=>{},handleUnignoreThreatClick:()=>{}};const i=e.bind({});i.args={threat:{id:185869885,signature:"EICAR_AV_Test",title:"Malicious code found in file: index.php",description:"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",firstDetected:"2024-10-07T20:45:06.000Z",fixedIn:null,severity:8,fixable:{fixer:"rollback",target:"January 26, 2024, 6:49 am",extensionStatus:""},fixer:{status:"in_progress"},status:"current",filename:"/var/www/html/wp-content/index.php",context:{1:"echo <<<HTML",2:"X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*",3:"HTML;",marks:{}}},isUserConnected:!0,hasConnectedOwner:!0,handleConnectUser:()=>{},credentials:[{type:"managed",role:"main",still_valid:!0}],credentialsRedirectUrl:"#",handleFixThreatClick:()=>{},handleIgnoreThreatClick:()=>{},handleUnignoreThreatClick:()=>{}};const o=e.bind({});o.args={threat:{id:185869885,signature:"EICAR_AV_Test",title:"Malicious code found in file: index.php",description:"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",firstDetected:"2024-10-07T20:45:06.000Z",fixedIn:null,severity:8,fixable:{fixer:"rollback",target:"January 26, 2024, 6:49 am",extensionStatus:""},fixer:{error:"error"},status:"current",filename:"/var/www/html/wp-content/index.php",context:{1:"echo <<<HTML",2:"X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*",3:"HTML;",marks:{}}},isUserConnected:!0,hasConnectedOwner:!0,handleConnectUser:()=>{},credentials:[{type:"managed",role:"main",still_valid:!0}],credentialsRedirectUrl:"#",handleFixThreatClick:()=>{},handleIgnoreThreatClick:()=>{},handleUnignoreThreatClick:()=>{}};const l=e.bind({});l.args={threat:{id:185869885,signature:"EICAR_AV_Test",title:"Malicious code found in file: index.php",description:"This is the standard EICAR antivirus test code, and not a real infection. If your site contains this code when you don't expect it to, contact Jetpack support for some help.",firstDetected:"2024-10-07T20:45:06.000Z",fixedIn:null,severity:8,fixable:{fixer:"rollback",target:"January 26, 2024, 6:49 am",extensionStatus:""},fixer:{status:"in_progress",lastUpdated:new Date("1999-01-01").toISOString()},status:"current",filename:"/var/www/html/wp-content/index.php",context:{1:"echo <<<HTML",2:"X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*",3:"HTML;",marks:{}}},isUserConnected:!0,hasConnectedOwner:!0,handleConnectUser:()=>{},credentials:[{type:"managed",role:"main",still_valid:!0}],credentialsRedirectUrl:"#",handleFixThreatClick:()=>{},handleIgnoreThreatClick:()=>{},handleUnignoreThreatClick:()=>{}};const c=e.bind({});c.args={threat:{id:184847701,signature:"Vulnerable.WP.Extension",title:"Vulnerable Plugin: WP Super Cache (version 1.6.3)",description:"The plugin WP Super Cache (version 1.6.3) has a known vulnerability. The WP Super Cache plugin before version 1.7.2 is vulnerable to an authenticated RCE in the settings page.",fixedIn:"1.12.4",source:"https://wpscan.com/vulnerability/733d8a02-0d44-4b78-bbb2-37e447acd2f3",extension:{name:"WP Super Cache",slug:"wp-super-cache",version:"1.6.3",type:"plugins"}},isUserConnected:!0,hasConnectedOwner:!0,credentials:[{type:"managed",role:"main",still_valid:!0}],handleUpgradeClick:()=>{}};const x=["ThreatResult","AdditionalConnectionsNeeded","UserConnectionNeeded","CredentialsNeeded","InProgressFixer","ErrorFixer","StaleFixer","VulnerableExtension"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = useCallback(() => setIsOpen(true), []);
  const onRequestClose = useCallback(() => setIsOpen(false), []);
  return <div>
            <Button onClick={onClick}>Open Threat Modal</Button>
            {isOpen ? <ThreatModal {...args} onRequestClose={onRequestClose} /> : null}
        </div>;
}`,...n.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = useCallback(() => setIsOpen(true), []);
  const onRequestClose = useCallback(() => setIsOpen(false), []);
  return <div>
            <Button onClick={onClick}>Open Threat Modal</Button>
            {isOpen ? <ThreatModal {...args} onRequestClose={onRequestClose} /> : null}
        </div>;
}`,...a.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = useCallback(() => setIsOpen(true), []);
  const onRequestClose = useCallback(() => setIsOpen(false), []);
  return <div>
            <Button onClick={onClick}>Open Threat Modal</Button>
            {isOpen ? <ThreatModal {...args} onRequestClose={onRequestClose} /> : null}
        </div>;
}`,...s.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = useCallback(() => setIsOpen(true), []);
  const onRequestClose = useCallback(() => setIsOpen(false), []);
  return <div>
            <Button onClick={onClick}>Open Threat Modal</Button>
            {isOpen ? <ThreatModal {...args} onRequestClose={onRequestClose} /> : null}
        </div>;
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = useCallback(() => setIsOpen(true), []);
  const onRequestClose = useCallback(() => setIsOpen(false), []);
  return <div>
            <Button onClick={onClick}>Open Threat Modal</Button>
            {isOpen ? <ThreatModal {...args} onRequestClose={onRequestClose} /> : null}
        </div>;
}`,...i.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = useCallback(() => setIsOpen(true), []);
  const onRequestClose = useCallback(() => setIsOpen(false), []);
  return <div>
            <Button onClick={onClick}>Open Threat Modal</Button>
            {isOpen ? <ThreatModal {...args} onRequestClose={onRequestClose} /> : null}
        </div>;
}`,...o.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = useCallback(() => setIsOpen(true), []);
  const onRequestClose = useCallback(() => setIsOpen(false), []);
  return <div>
            <Button onClick={onClick}>Open Threat Modal</Button>
            {isOpen ? <ThreatModal {...args} onRequestClose={onRequestClose} /> : null}
        </div>;
}`,...l.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = useCallback(() => setIsOpen(true), []);
  const onRequestClose = useCallback(() => setIsOpen(false), []);
  return <div>
            <Button onClick={onClick}>Open Threat Modal</Button>
            {isOpen ? <ThreatModal {...args} onRequestClose={onRequestClose} /> : null}
        </div>;
}`,...c.parameters?.docs?.source}}}}}]);
