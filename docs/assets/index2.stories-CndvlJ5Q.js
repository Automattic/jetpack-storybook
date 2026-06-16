import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Ki as i,t as a,wi as o,wt as s}from"./build-module-GSN4UfzT.js";import{n as c,r as l}from"./iframe-rxDnG4AU.js";var u,d,f,p,m,h,g,_,v,y,b;t((()=>{a(),u=e(n(),1),l(),d=r(),f={title:`JS Packages/Components/NavigatorModal`,component:c},p=()=>{let[e,t]=(0,u.useReducer)(e=>!e,!0);return e&&(0,d.jsxs)(c,{initialPath:`/`,onClose:t,children:[(0,d.jsx)(c.Screen,{path:`/`,title:`Screen 1`,isScreenLocked:!0,children:(0,d.jsxs)(`div`,{style:{padding:`1.5rem`},children:[(0,d.jsx)(`p`,{children:`Welcome to the first screen!`}),(0,d.jsx)(s.Button,{path:`/screen-2`,variant:`primary`,children:`Go to Screen 2`})]})}),(0,d.jsx)(c.Screen,{path:`/screen-2`,title:`Screen 2`,isScreenLocked:!1,children:(0,d.jsxs)(`div`,{style:{padding:`1.5rem`},children:[(0,d.jsx)(`p`,{children:`You're on the second screen.`}),(0,d.jsx)(s.Button,{path:`/screen-3`,variant:`primary`,children:`Go to Screen 3`})]})}),(0,d.jsx)(c.Screen,{path:`/screen-3`,title:`Screen 3`,isScreenLocked:!1,children:(0,d.jsxs)(`div`,{style:{padding:`1.5rem`},children:[(0,d.jsx)(`p`,{children:`This is the final screen.`}),(0,d.jsx)(`p`,{children:`Use the back button or close button to navigate.`})]})})]})},m=()=>{let[e,t]=(0,u.useReducer)(e=>!e,!0);return e&&(0,d.jsx)(c,{initialPath:`/`,onClose:t,children:(0,d.jsx)(c.Screen,{path:`/`,title:`Single Screen`,isScreenLocked:!0,children:(0,d.jsx)(`div`,{style:{padding:`1.5rem`},children:(0,d.jsx)(`p`,{children:`This is a simple single screen modal.`})})})})},h=()=>{let[e,t]=(0,u.useReducer)(e=>!e,!0);return e&&(0,d.jsxs)(c,{initialPath:`/`,onClose:t,children:[(0,d.jsx)(c.Screen,{path:`/`,title:`Home`,isScreenLocked:!0,children:(0,d.jsxs)(`div`,{style:{padding:`1.5rem`},children:[(0,d.jsx)(`h2`,{children:`Home Screen`}),(0,d.jsx)(s.Button,{path:`/settings`,variant:`primary`,children:`Navigate to Settings`})]})}),(0,d.jsx)(c.Screen,{path:`/settings`,title:`Settings`,isScreenLocked:!1,children:(0,d.jsxs)(`div`,{style:{padding:`1.5rem`},children:[(0,d.jsx)(`h2`,{children:`Settings Screen`}),(0,d.jsx)(`p`,{children:`Configure your preferences here.`})]})})]})},g=()=>{let[e,t]=(0,u.useReducer)(e=>!e,!0);return e&&(0,d.jsxs)(c,{initialPath:`/settings`,onClose:t,children:[(0,d.jsx)(c.Screen,{path:`/`,title:`Home`,isScreenLocked:!0,children:(0,d.jsx)(`div`,{style:{padding:`1.5rem`},children:(0,d.jsx)(`p`,{children:`Home screen content`})})}),(0,d.jsx)(c.Screen,{path:`/settings`,title:`Settings`,isScreenLocked:!1,children:(0,d.jsx)(`div`,{style:{padding:`1.5rem`},children:(0,d.jsx)(`p`,{children:`Settings is the initial screen displayed.`})})})]})},_=()=>{let[e,t]=(0,u.useReducer)(e=>!e,!0);return e&&(0,d.jsxs)(c,{initialPath:`/`,onClose:t,children:[(0,d.jsx)(c.Screen,{path:`/`,title:`Dashboard`,isScreenLocked:!0,children:(0,d.jsxs)(`div`,{style:{padding:`1.5rem`},children:[(0,d.jsx)(`h2`,{children:`Welcome to Dashboard`}),(0,d.jsx)(`p`,{children:`Choose an option below:`}),(0,d.jsxs)(`div`,{style:{marginTop:`20px`,display:`flex`,gap:`10px`},children:[(0,d.jsx)(s.Button,{path:`/profile`,variant:`primary`,children:`Profile Settings`}),(0,d.jsx)(s.Button,{path:`/account`,variant:`secondary`,children:`Account Options`}),(0,d.jsx)(s.Button,{path:`/help`,variant:`tertiary`,children:`Help & Support`})]})]})}),(0,d.jsx)(c.Screen,{path:`/profile`,title:`Profile Settings`,isScreenLocked:!1,children:(0,d.jsxs)(`div`,{style:{padding:`1.5rem`},children:[(0,d.jsx)(`h2`,{children:`Edit Your Profile`}),(0,d.jsx)(`p`,{children:`Update your profile information here.`}),(0,d.jsx)(o,{variant:`primary`,children:`Save Changes`})]})}),(0,d.jsx)(c.Screen,{path:`/account`,title:`Account Options`,isScreenLocked:!1,footerActions:[{children:`Cancel`,variant:`secondary`,onClick:()=>console.log(`Changes cancelled`)},{children:`Save Changes`,variant:`primary`,onClick:()=>console.log(`Account changes saved`)}],sidebar:(0,d.jsxs)(i,{direction:`column`,gap:2,style:{padding:`1.5rem`},justify:`start`,children:[(0,d.jsx)(s.Button,{path:`/account/privacy`,variant:`tertiary`,children:`Privacy Settings`}),(0,d.jsx)(s.Button,{path:`/account/security`,variant:`tertiary`,children:`Security Settings`})]}),children:(0,d.jsxs)(`div`,{style:{padding:`1.5rem`},children:[(0,d.jsx)(`h2`,{children:`Account Management`}),(0,d.jsx)(`p`,{children:`Manage your account settings.`}),(0,d.jsx)(o,{variant:`secondary`,children:`Change Password`})]})}),(0,d.jsx)(c.Screen,{path:`/account/privacy`,title:`Privacy Settings`,isScreenLocked:!1,children:(0,d.jsxs)(`div`,{style:{padding:`1.5rem`},children:[(0,d.jsx)(`h2`,{children:`Privacy Settings`}),(0,d.jsx)(`p`,{children:`Control your privacy preferences.`})]})}),(0,d.jsx)(c.Screen,{path:`/account/security`,title:`Security Settings`,isScreenLocked:!1,children:(0,d.jsxs)(`div`,{style:{padding:`1.5rem`},children:[(0,d.jsx)(`h2`,{children:`Security Settings`}),(0,d.jsx)(`p`,{children:`Manage your security options.`})]})}),(0,d.jsx)(c.Screen,{path:`/help`,title:`Help & Support`,isScreenLocked:!1,children:(0,d.jsxs)(`div`,{style:{padding:`1.5rem`},children:[(0,d.jsx)(`h2`,{children:`Help & Support`}),(0,d.jsx)(`p`,{children:`Get help with common questions.`}),(0,d.jsx)(`p`,{children:`Contact our support team for assistance.`})]})})]})},v=()=>{let[e,t]=(0,u.useReducer)(e=>!e,!0),n=()=>console.log(`Changes confirmed`),r=()=>console.log(`Changes cancelled`);return e&&(0,d.jsxs)(c,{initialPath:`/`,onClose:t,children:[(0,d.jsx)(c.Screen,{path:`/`,title:`Form Screen`,isScreenLocked:!0,children:(0,d.jsxs)(`div`,{style:{padding:`1.5rem`},children:[(0,d.jsx)(`h2`,{children:`Fill Out This Form`}),(0,d.jsx)(`p`,{children:`The next screen has footer actions at the bottom.`}),(0,d.jsx)(s.Button,{path:`/confirmation`,variant:`primary`,children:`Next`})]})}),(0,d.jsx)(c.Screen,{path:`/confirmation`,title:`Confirm Changes`,isScreenLocked:!1,footerActions:[({navigate:e})=>(0,d.jsx)(o,{variant:`secondary`,onClick:()=>{r(),e()},children:`Cancel`},`cancel`),({navigate:e})=>(0,d.jsx)(o,{variant:`primary`,onClick:()=>{n(),e()},children:`Confirm`},`confirm`)],children:(0,d.jsxs)(`div`,{style:{padding:`1.5rem`},children:[(0,d.jsx)(`h2`,{children:`Are you sure?`}),(0,d.jsx)(`p`,{children:`Please confirm your changes before proceeding.`})]})})]})},y=()=>{let[e,t]=(0,u.useReducer)(e=>!e,!0),n=(0,d.jsxs)(i,{direction:`column`,gap:2,style:{padding:`1.5rem`},justify:`start`,children:[(0,d.jsx)(s.Button,{path:`/general`,variant:`tertiary`,children:`General`}),(0,d.jsx)(s.Button,{path:`/advanced`,variant:`tertiary`,children:`Advanced`}),(0,d.jsx)(s.Button,{path:`/notifications`,variant:`tertiary`,children:`Notifications`})]});return e&&(0,d.jsxs)(c,{initialPath:`/`,onClose:t,children:[(0,d.jsx)(c.Screen,{path:`/`,title:`Settings`,isScreenLocked:!0,sidebar:n,children:(0,d.jsxs)(`div`,{style:{padding:`1.5rem`},children:[(0,d.jsx)(`h2`,{children:`Choose a Setting Category`}),(0,d.jsx)(`p`,{children:`Select from the sidebar to navigate to different settings.`})]})}),(0,d.jsx)(c.Screen,{path:`/general`,title:`General Settings`,isScreenLocked:!1,sidebar:n,children:(0,d.jsxs)(`div`,{style:{padding:`1.5rem`},children:[(0,d.jsx)(`h2`,{children:`General Settings`}),(0,d.jsx)(`p`,{children:`Configure general preferences for your account.`})]})}),(0,d.jsx)(c.Screen,{path:`/advanced`,title:`Advanced Settings`,isScreenLocked:!1,sidebar:n,children:(0,d.jsxs)(`div`,{style:{padding:`1.5rem`},children:[(0,d.jsx)(`h2`,{children:`Advanced Settings`}),(0,d.jsx)(`p`,{children:`Configure advanced options for power users.`})]})}),(0,d.jsx)(c.Screen,{path:`/notifications`,title:`Notification Settings`,isScreenLocked:!1,sidebar:n,children:(0,d.jsxs)(`div`,{style:{padding:`1.5rem`},children:[(0,d.jsx)(`h2`,{children:`Notification Settings`}),(0,d.jsx)(`p`,{children:`Control how and when you receive notifications.`})]})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, toggleOpen] = useReducer(open => !open, true);
  return isOpen && <NavigatorModal initialPath="/" onClose={toggleOpen}>
                <NavigatorModal.Screen path="/" title="Screen 1" isScreenLocked={true}>
                    <div style={{
        padding: '1.5rem'
      }}>
                        <p>Welcome to the first screen!</p>
                        <Navigator.Button path="/screen-2" variant="primary">
                            Go to Screen 2
                        </Navigator.Button>
                    </div>
                </NavigatorModal.Screen>

                <NavigatorModal.Screen path="/screen-2" title="Screen 2" isScreenLocked={false}>
                    <div style={{
        padding: '1.5rem'
      }}>
                        <p>You&apos;re on the second screen.</p>
                        <Navigator.Button path="/screen-3" variant="primary">
                            Go to Screen 3
                        </Navigator.Button>
                    </div>
                </NavigatorModal.Screen>

                <NavigatorModal.Screen path="/screen-3" title="Screen 3" isScreenLocked={false}>
                    <div style={{
        padding: '1.5rem'
      }}>
                        <p>This is the final screen.</p>
                        <p>Use the back button or close button to navigate.</p>
                    </div>
                </NavigatorModal.Screen>
            </NavigatorModal>;
}`,...p.parameters?.docs?.source},description:{story:`Default NavigatorModal story with multiple screens.

@return Default navigator modal story`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, toggleOpen] = useReducer(open => !open, true);
  return isOpen && <NavigatorModal initialPath="/" onClose={toggleOpen}>
                <NavigatorModal.Screen path="/" title="Single Screen" isScreenLocked={true}>
                    <div style={{
        padding: '1.5rem'
      }}>
                        <p>This is a simple single screen modal.</p>
                    </div>
                </NavigatorModal.Screen>
            </NavigatorModal>;
}`,...m.parameters?.docs?.source},description:{story:`Basic NavigatorModal with a single screen.

@return Single screen navigator modal story`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, toggleOpen] = useReducer(open => !open, true);
  return isOpen && <NavigatorModal initialPath="/" onClose={toggleOpen}>
                <NavigatorModal.Screen path="/" title="Home" isScreenLocked={true}>
                    <div style={{
        padding: '1.5rem'
      }}>
                        <h2>Home Screen</h2>
                        <Navigator.Button path="/settings" variant="primary">
                            Navigate to Settings
                        </Navigator.Button>
                    </div>
                </NavigatorModal.Screen>

                <NavigatorModal.Screen path="/settings" title="Settings" isScreenLocked={false}>
                    <div style={{
        padding: '1.5rem'
      }}>
                        <h2>Settings Screen</h2>
                        <p>Configure your preferences here.</p>
                    </div>
                </NavigatorModal.Screen>
            </NavigatorModal>;
}`,...h.parameters?.docs?.source},description:{story:`NavigatorModal with multiple screens demonstrating navigation between them.

@return Multi-screen navigator modal story`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, toggleOpen] = useReducer(open => !open, true);
  return isOpen && <NavigatorModal initialPath="/settings" onClose={toggleOpen}>
                <NavigatorModal.Screen path="/" title="Home" isScreenLocked={true}>
                    <div style={{
        padding: '1.5rem'
      }}>
                        <p>Home screen content</p>
                    </div>
                </NavigatorModal.Screen>

                <NavigatorModal.Screen path="/settings" title="Settings" isScreenLocked={false}>
                    <div style={{
        padding: '1.5rem'
      }}>
                        <p>Settings is the initial screen displayed.</p>
                    </div>
                </NavigatorModal.Screen>
            </NavigatorModal>;
}`,...g.parameters?.docs?.source},description:{story:`NavigatorModal starting at a non-default initial path.

@return Navigator modal with custom initial path story`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, toggleOpen] = useReducer(open => !open, true);
  const handleSaveChanges = () => console.log('Account changes saved');
  const handleCancelChanges = () => console.log('Changes cancelled');
  return isOpen && <NavigatorModal initialPath="/" onClose={toggleOpen}>
                <NavigatorModal.Screen path="/" title="Dashboard" isScreenLocked={true}>
                    <div style={{
        padding: '1.5rem'
      }}>
                        <h2>Welcome to Dashboard</h2>
                        <p>Choose an option below:</p>
                        <div style={{
          marginTop: '20px',
          display: 'flex',
          gap: '10px'
        }}>
                            <Navigator.Button path="/profile" variant="primary">
                                Profile Settings
                            </Navigator.Button>
                            <Navigator.Button path="/account" variant="secondary">
                                Account Options
                            </Navigator.Button>
                            <Navigator.Button path="/help" variant="tertiary">
                                Help &amp; Support
                            </Navigator.Button>
                        </div>
                    </div>
                </NavigatorModal.Screen>

                <NavigatorModal.Screen path="/profile" title="Profile Settings" isScreenLocked={false}>
                    <div style={{
        padding: '1.5rem'
      }}>
                        <h2>Edit Your Profile</h2>
                        <p>Update your profile information here.</p>
                        <Button variant="primary">Save Changes</Button>
                    </div>
                </NavigatorModal.Screen>

                <NavigatorModal.Screen path="/account" title="Account Options" isScreenLocked={false} footerActions={[{
      children: 'Cancel',
      variant: 'secondary',
      onClick: handleCancelChanges
    }, {
      children: 'Save Changes',
      variant: 'primary',
      onClick: handleSaveChanges
    }]} sidebar={<Flex direction="column" gap={2} style={{
      padding: '1.5rem'
    }} justify="start">
                            <Navigator.Button path="/account/privacy" variant="tertiary">
                                Privacy Settings
                            </Navigator.Button>
                            <Navigator.Button path="/account/security" variant="tertiary">
                                Security Settings
                            </Navigator.Button>
                        </Flex>}>
                    <div style={{
        padding: '1.5rem'
      }}>
                        <h2>Account Management</h2>
                        <p>Manage your account settings.</p>
                        <Button variant="secondary">Change Password</Button>
                    </div>
                </NavigatorModal.Screen>

                <NavigatorModal.Screen path="/account/privacy" title="Privacy Settings" isScreenLocked={false}>
                    <div style={{
        padding: '1.5rem'
      }}>
                        <h2>Privacy Settings</h2>
                        <p>Control your privacy preferences.</p>
                    </div>
                </NavigatorModal.Screen>

                <NavigatorModal.Screen path="/account/security" title="Security Settings" isScreenLocked={false}>
                    <div style={{
        padding: '1.5rem'
      }}>
                        <h2>Security Settings</h2>
                        <p>Manage your security options.</p>
                    </div>
                </NavigatorModal.Screen>

                <NavigatorModal.Screen path="/help" title="Help &amp; Support" isScreenLocked={false}>
                    <div style={{
        padding: '1.5rem'
      }}>
                        <h2>Help &amp; Support</h2>
                        <p>Get help with common questions.</p>
                        <p>Contact our support team for assistance.</p>
                    </div>
                </NavigatorModal.Screen>
            </NavigatorModal>;
}`,..._.parameters?.docs?.source},description:{story:`NavigatorModal with rich content and multiple navigation levels.

@return Complex multi-screen navigator modal story`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, toggleOpen] = useReducer(open => !open, true);
  const handleConfirm = () => console.log('Changes confirmed');
  const handleCancel = () => console.log('Changes cancelled');
  return isOpen && <NavigatorModal initialPath="/" onClose={toggleOpen}>
                <NavigatorModal.Screen path="/" title="Form Screen" isScreenLocked={true}>
                    <div style={{
        padding: '1.5rem'
      }}>
                        <h2>Fill Out This Form</h2>
                        <p>The next screen has footer actions at the bottom.</p>
                        <Navigator.Button path="/confirmation" variant="primary">
                            Next
                        </Navigator.Button>
                    </div>
                </NavigatorModal.Screen>

                <NavigatorModal.Screen path="/confirmation" title="Confirm Changes" isScreenLocked={false} footerActions={[({
      navigate
    }) => <Button key="cancel" variant="secondary" onClick={() => {
      handleCancel();
      navigate();
    }}>
                                Cancel
                            </Button>, ({
      navigate
    }) => <Button key="confirm" variant="primary" onClick={() => {
      handleConfirm();
      navigate();
    }}>
                                Confirm
                            </Button>]}>
                    <div style={{
        padding: '1.5rem'
      }}>
                        <h2>Are you sure?</h2>
                        <p>Please confirm your changes before proceeding.</p>
                    </div>
                </NavigatorModal.Screen>
            </NavigatorModal>;
}`,...v.parameters?.docs?.source},description:{story:`NavigatorModal with footer actions.

@return Navigator modal with footer actions story`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, toggleOpen] = useReducer(open => !open, true);
  const sidebar = <Flex direction="column" gap={2} style={{
    padding: '1.5rem'
  }} justify="start">
            <Navigator.Button path="/general" variant="tertiary">
                General
            </Navigator.Button>
            <Navigator.Button path="/advanced" variant="tertiary">
                Advanced
            </Navigator.Button>
            <Navigator.Button path="/notifications" variant="tertiary">
                Notifications
            </Navigator.Button>
        </Flex>;
  return isOpen && <NavigatorModal initialPath="/" onClose={toggleOpen}>
                <NavigatorModal.Screen path="/" title="Settings" isScreenLocked={true} sidebar={sidebar}>
                    <div style={{
        padding: '1.5rem'
      }}>
                        <h2>Choose a Setting Category</h2>
                        <p>Select from the sidebar to navigate to different settings.</p>
                    </div>
                </NavigatorModal.Screen>

                <NavigatorModal.Screen path="/general" title="General Settings" isScreenLocked={false} sidebar={sidebar}>
                    <div style={{
        padding: '1.5rem'
      }}>
                        <h2>General Settings</h2>
                        <p>Configure general preferences for your account.</p>
                    </div>
                </NavigatorModal.Screen>

                <NavigatorModal.Screen path="/advanced" title="Advanced Settings" isScreenLocked={false} sidebar={sidebar}>
                    <div style={{
        padding: '1.5rem'
      }}>
                        <h2>Advanced Settings</h2>
                        <p>Configure advanced options for power users.</p>
                    </div>
                </NavigatorModal.Screen>

                <NavigatorModal.Screen path="/notifications" title="Notification Settings" isScreenLocked={false} sidebar={sidebar}>
                    <div style={{
        padding: '1.5rem'
      }}>
                        <h2>Notification Settings</h2>
                        <p>Control how and when you receive notifications.</p>
                    </div>
                </NavigatorModal.Screen>
            </NavigatorModal>;
}`,...y.parameters?.docs?.source},description:{story:`NavigatorModal with sidebar navigation.

@return Navigator modal with sidebar story`,...y.parameters?.docs?.description}}},b=[`Default`,`SingleScreen`,`MultipleScreens`,`CustomInitialPath`,`ComplexNavigation`,`WithFooterActions`,`WithSidebar`]}))();export{_ as ComplexNavigation,g as CustomInitialPath,p as Default,h as MultipleScreens,m as SingleScreen,v as WithFooterActions,y as WithSidebar,b as __namedExportsOrder,f as default};