"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1237],{"../components/components/navigator-modal/stories/index.stories.tsx"(L,b,o){o.r(b),o.d(b,{ComplexNavigation:()=>g,CustomInitialPath:()=>h,Default:()=>p,MultipleScreens:()=>u,SingleScreen:()=>m,WithFooterActions:()=>v,WithSidebar:()=>f,__namedExportsOrder:()=>X,default:()=>z});var s=o("../../../node_modules/.pnpm/@wordpress+components@32.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/navigator/index.mjs"),c=o("../../../node_modules/.pnpm/@wordpress+components@32.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.mjs"),_=o("../../../node_modules/.pnpm/@wordpress+components@32.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex/component.mjs"),l=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),O=o("../../../node_modules/.pnpm/@wordpress+components@32.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/modal/index.mjs"),j=o("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");const V={onClose:()=>{}},C=(0,l.createContext)(V);C.displayName="NavigatorModalContext";var T=o("../../../node_modules/.pnpm/@wordpress+components@32.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/navigator/use-navigator.mjs"),D=o("../../../node_modules/.pnpm/@wordpress+components@32.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-block/component.mjs"),F=o("../../../node_modules/.pnpm/@wordpress+components@32.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-item/component.mjs"),e=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function M({children:n,actions:r,isScreenLocked:a,className:i,...d}){const S=(0,T.b)(),N=(0,l.useContext)(C),y=(0,l.useCallback)(()=>{a?N.onClose?.():S.goBack()},[a,S,N]);return(0,e.jsxs)(_.A,{className:(0,j.A)("jp-navigator-modal__footer",i),...d,children:[(0,e.jsx)(D.A,{children:n}),r?(0,e.jsx)(F.A,{children:(0,e.jsx)(_.A,{children:r.map((x,B)=>typeof x=="function"?x({navigate:y}):(0,e.jsx)(c.Ay,{...x,onClick:R=>{x.onClick?.(R),y()}},B))})}):null]})}try{M.displayName="Footer",M.__docgenInfo={description:"Renders a footer.",displayName:"Footer",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"(((ButtonProps & DeprecatedButtonProps) & RefAttributes<any>) | ((props: { navigate: VoidFunction; }) => ReactElement<...>))[]"}},isScreenLocked:{defaultValue:null,description:"",name:"isScreenLocked",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/navigator-modal/footer.tsx#Footer"]={docgenInfo:M.__docgenInfo,name:"Footer",path:"../components/components/navigator-modal/footer.tsx#Footer"})}catch{}var E=o("../../../node_modules/.pnpm/@wordpress+i18n@6.12.0/node_modules/@wordpress/i18n/build-module/index.mjs"),H=o("../../../node_modules/.pnpm/@wordpress+icons@11.6.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-right.mjs"),W=o("../../../node_modules/.pnpm/@wordpress+icons@11.6.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-left.mjs"),K=o("../../../node_modules/.pnpm/@wordpress+icons@11.6.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close.mjs");const I=E.__;function A({icon:n,title:r,isScreenLocked:a}){const i=(0,l.useContext)(C),d=(0,T.b)(),S=(0,l.useCallback)(()=>{d.goBack()},[d]);return(0,e.jsxs)("div",{className:"jp-navigator-modal__header",children:[(0,e.jsxs)("div",{className:"jp-navigator-modal__title-wrap",children:[a?null:(0,e.jsx)(c.Ay,{label:I("Go back","jetpack-components"),icon:(0,E.V8)()?H.A:W.A,onClick:S,variant:"tertiary",size:"compact"}),n,(0,e.jsx)("h1",{children:r})]}),i.isDismissible?(0,e.jsx)(c.Ay,{size:"compact",onClick:i.onClose,icon:K.A,label:I("Close","jetpack-components"),variant:"tertiary"}):null]})}try{A.displayName="Header",A.__docgenInfo={description:"Renders a header for the NavigatorModal.",displayName:"Header",props:{title:{defaultValue:null,description:"The title of the header.",name:"title",required:!0,type:{name:"string"}},isScreenLocked:{defaultValue:null,description:"Whether the screen is locked, in which case to hide the back button.",name:"isScreenLocked",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Optional icon to display in the header.",name:"icon",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/navigator-modal/header.tsx#Header"]={docgenInfo:A.__docgenInfo,name:"Header",path:"../components/components/navigator-modal/header.tsx#Header"})}catch{}function w({path:n,className:r,title:a,sidebar:i,headerIcon:d,isScreenLocked:S,footerContent:N,footerActions:y,children:x,content:B,...R}){const J=!!(N||y&&y.length);return(0,e.jsx)(s.m.Screen,{path:n,className:(0,j.A)("jp-navigator-modal__screen",r),...R,children:(0,e.jsxs)(_.A,{direction:"column",gap:0,children:[(0,e.jsx)(A,{title:a,isScreenLocked:S,icon:d}),(0,e.jsxs)(_.A,{gap:0,align:"start",className:"jp-navigator-modal__body",children:[i?(0,e.jsx)("div",{className:"jp-navigator-modal__sidebar",children:i}):null,(0,e.jsx)("div",{className:"jp-navigator-modal__content",children:B??x})]}),J?(0,e.jsx)(M,{actions:y,isScreenLocked:S,children:N}):null]})})}try{w.displayName="Screen",w.__docgenInfo={description:"Renders a screen.",displayName:"Screen",props:{path:{defaultValue:null,description:'The screen\'s path, matched against the current path stored in the navigator.\n\n`Navigator` assumes that screens are organized hierarchically according\nto their `path`, which should follow a URL-like scheme where each path\nsegment starts with and is separated by the `/` character.\n\n`Navigator` will treat "back" navigations as going to the parent screen \u2014\nit is, therefore, the responsibility of the consumer of the component to\ncreate the correct screen hierarchy.\n\nFor example:\n - `/` is the root of all paths. There should always be a screen with\n   `path="/"`;\n - `/parent/child` is a child of `/parent`;\n - `/parent/child/grand-child` is a child of `/parent/child`;\n - `/parent/:param` is a child of `/parent` as well;\n - if the current screen has a `path="/parent/child/grand-child"`, when\n   going "back" `Navigator` will try to recursively navigate the path\n   hierarchy until a matching screen (or the root `/`) is found.\nThe path of the screen.',name:"path",required:!0,type:{name:"string"}},headerIcon:{defaultValue:null,description:"Optional icon to display in the header.",name:"headerIcon",required:!1,type:{name:"ReactNode"}},sidebar:{defaultValue:null,description:"The sidebar content",name:"sidebar",required:!1,type:{name:"ReactNode"}},isScreenLocked:{defaultValue:null,description:`Whether the screen is locked or has a parent screen.

When it's locked, it means there will be no navigation back to a previous screen.`,name:"isScreenLocked",required:!1,type:{name:"boolean"}},footerContent:{defaultValue:null,description:"The footer content",name:"footerContent",required:!1,type:{name:"ReactNode"}},footerActions:{defaultValue:null,description:"The footer actions",name:"footerActions",required:!1,type:{name:"(((ButtonProps & DeprecatedButtonProps) & RefAttributes<any>) | ((props: { navigate: VoidFunction; }) => ReactElement<...>))[]"}},content:{defaultValue:null,description:"The content of the screen.",name:"content",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"The children of the screen. Alternative to `content`.",name:"children",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/navigator-modal/screen.tsx#Screen"]={docgenInfo:w.__docgenInfo,name:"Screen",path:"../components/components/navigator-modal/screen.tsx#Screen"})}catch{}var Y=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),q=o.n(Y),P=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../components/components/navigator-modal/styles.scss"),k={};k.insert="head",k.singleton=!1;var Q=q()(P.A,k);const Z=P.A.locals||{};function G({children:n,className:r,...a}){const i=(0,l.useContext)(C);return(0,e.jsx)(O.A,{__experimentalHideHeader:!0,onRequestClose:i.onClose,className:(0,j.A)("jp-navigator-modal",r),...a,children:(0,e.jsx)(s.m,{initialPath:i.initialPath,className:"jp-navigator-modal__navigator",children:n})})}function U({children:n,className:r,initialPath:a="/",onClose:i,isDismissible:d=!0,...S}){return(0,e.jsx)(C.Provider,{value:{onClose:i,initialPath:a,isDismissible:d},children:(0,e.jsx)(G,{className:r,...S,children:n})})}const t=Object.assign(U,{Screen:Object.assign(w,{displayName:"NavigatorModal.Screen"})});try{t.displayName="NavigatorModal",t.__docgenInfo={description:"",displayName:"NavigatorModal",props:{className:{defaultValue:null,description:"If this property is added, it will an additional class name to the modal\ncontent `div`.",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"This property is used as the modal header's title.\n\nTitles are required for accessibility reasons, see `aria.labelledby` and\n`contentLabel` for other ways to provide a title.",name:"title",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"If this property is added, it will be added to the modal frame `div`.",name:"style",required:!1,type:{name:"CSSProperties"}},role:{defaultValue:{value:"'dialog'"},description:`If this property is added, it will override the default role of the
modal.`,name:"role",required:!1,type:{name:"AriaRole"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},onKeyDown:{defaultValue:null,description:"Handle the key down on the modal frame `div`.",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}},size:{defaultValue:null,description:"If this property is added it will cause the modal to render at a preset\nwidth, or expand to fill the screen. This prop will be ignored if\n`isFullScreen` is set to `true`.\n\nNote: `Modal`'s width can also be controlled by adjusting the width of the\nmodal's contents, or via CSS using the `style` prop.",name:"size",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},icon:{defaultValue:null,description:"If this property is added, an icon will be added before the title.",name:"icon",required:!1,type:{name:"Element"}},focusOnMount:{defaultValue:{value:"true"},description:`If this property is true, it will focus the first tabbable element
rendered in the modal.`,name:"focusOnMount",required:!1,type:{name:'boolean | "firstElement" | "firstInputElement" | "firstContentElement"'}},aria:{defaultValue:null,description:"",name:"aria",required:!1,type:{name:"{ describedby?: string; labelledby?: string; }"}},bodyOpenClassName:{defaultValue:{value:"'modal-open'"},description:"Class name added to the body element when the modal is open.",name:"bodyOpenClassName",required:!1,type:{name:"string"}},closeButtonLabel:{defaultValue:{value:"`__( 'Close' )`"},description:"Label on the close button.",name:"closeButtonLabel",required:!1,type:{name:"string"}},contentLabel:{defaultValue:null,description:"If this property is added, it will be added to the modal content `div` as\n`aria-label`.\n\nTitles are required for accessibility reasons, see `aria.labelledby` and\n`title` for other ways to provide a title.",name:"contentLabel",required:!1,type:{name:"string"}},headerActions:{defaultValue:{value:"null"},description:"Elements that are injected into the modal header to the left of the close button (if rendered).\nHidden if `__experimentalHideHeader` is `true`.",name:"headerActions",required:!1,type:{name:"ReactNode"}},isDismissible:{defaultValue:{value:"true"},description:`If this property is set to false, the modal will not display a close icon
and cannot be dismissed.
Whether the modal is dismissible.`,name:"isDismissible",required:!1,type:{name:"boolean"}},isFullScreen:{defaultValue:{value:"false"},description:"This property when set to `true` will render a full screen modal.",name:"isFullScreen",required:!1,type:{name:"boolean"}},overlayClassName:{defaultValue:null,description:"If this property is added, it will an additional class name to the modal\noverlay `div`.",name:"overlayClassName",required:!1,type:{name:"string"}},shouldCloseOnClickOutside:{defaultValue:{value:"true"},description:`If this property is added, it will determine whether the modal requests
to close when a mouse click occurs outside of the modal content.`,name:"shouldCloseOnClickOutside",required:!1,type:{name:"boolean"}},shouldCloseOnEsc:{defaultValue:{value:"true"},description:`If this property is added, it will determine whether the modal requests
to close when the escape key is pressed.`,name:"shouldCloseOnEsc",required:!1,type:{name:"boolean"}},__experimentalHideHeader:{defaultValue:{value:"false"},description:`When set to \`true\`, the Modal's header (including the icon, title and
close button) will not be rendered.

_Warning_: This property is still experimental. \u201CExperimental\u201D means this
is an early implementation subject to drastic and breaking changes.`,name:"__experimentalHideHeader",required:!1,type:{name:"boolean"}},initialPath:{defaultValue:null,description:"The initial active path.",name:"initialPath",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"Callback fired when the close button is clicked.",name:"onClose",required:!1,type:{name:"VoidFunction"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/navigator-modal/index.tsx#NavigatorModal"]={docgenInfo:t.__docgenInfo,name:"NavigatorModal",path:"../components/components/navigator-modal/index.tsx#NavigatorModal"})}catch{}const z={title:"JS Packages/Components/NavigatorModal",component:t},p=()=>{const[n,r]=(0,l.useReducer)(a=>!a,!0);return n&&(0,e.jsxs)(t,{initialPath:"/",onClose:r,children:[(0,e.jsx)(t.Screen,{path:"/",title:"Screen 1",isScreenLocked:!0,children:(0,e.jsxs)("div",{style:{padding:"1.5rem"},children:[(0,e.jsx)("p",{children:"Welcome to the first screen!"}),(0,e.jsx)(s.m.Button,{path:"/screen-2",variant:"primary",children:"Go to Screen 2"})]})}),(0,e.jsx)(t.Screen,{path:"/screen-2",title:"Screen 2",isScreenLocked:!1,children:(0,e.jsxs)("div",{style:{padding:"1.5rem"},children:[(0,e.jsx)("p",{children:"You're on the second screen."}),(0,e.jsx)(s.m.Button,{path:"/screen-3",variant:"primary",children:"Go to Screen 3"})]})}),(0,e.jsx)(t.Screen,{path:"/screen-3",title:"Screen 3",isScreenLocked:!1,children:(0,e.jsxs)("div",{style:{padding:"1.5rem"},children:[(0,e.jsx)("p",{children:"This is the final screen."}),(0,e.jsx)("p",{children:"Use the back button or close button to navigate."})]})})]})},m=()=>{const[n,r]=(0,l.useReducer)(a=>!a,!0);return n&&(0,e.jsx)(t,{initialPath:"/",onClose:r,children:(0,e.jsx)(t.Screen,{path:"/",title:"Single Screen",isScreenLocked:!0,children:(0,e.jsx)("div",{style:{padding:"1.5rem"},children:(0,e.jsx)("p",{children:"This is a simple single screen modal."})})})})},u=()=>{const[n,r]=(0,l.useReducer)(a=>!a,!0);return n&&(0,e.jsxs)(t,{initialPath:"/",onClose:r,children:[(0,e.jsx)(t.Screen,{path:"/",title:"Home",isScreenLocked:!0,children:(0,e.jsxs)("div",{style:{padding:"1.5rem"},children:[(0,e.jsx)("h2",{children:"Home Screen"}),(0,e.jsx)(s.m.Button,{path:"/settings",variant:"primary",children:"Navigate to Settings"})]})}),(0,e.jsx)(t.Screen,{path:"/settings",title:"Settings",isScreenLocked:!1,children:(0,e.jsxs)("div",{style:{padding:"1.5rem"},children:[(0,e.jsx)("h2",{children:"Settings Screen"}),(0,e.jsx)("p",{children:"Configure your preferences here."})]})})]})},h=()=>{const[n,r]=(0,l.useReducer)(a=>!a,!0);return n&&(0,e.jsxs)(t,{initialPath:"/settings",onClose:r,children:[(0,e.jsx)(t.Screen,{path:"/",title:"Home",isScreenLocked:!0,children:(0,e.jsx)("div",{style:{padding:"1.5rem"},children:(0,e.jsx)("p",{children:"Home screen content"})})}),(0,e.jsx)(t.Screen,{path:"/settings",title:"Settings",isScreenLocked:!1,children:(0,e.jsx)("div",{style:{padding:"1.5rem"},children:(0,e.jsx)("p",{children:"Settings is the initial screen displayed."})})})]})},g=()=>{const[n,r]=(0,l.useReducer)(d=>!d,!0),a=()=>console.log("Account changes saved"),i=()=>console.log("Changes cancelled");return n&&(0,e.jsxs)(t,{initialPath:"/",onClose:r,children:[(0,e.jsx)(t.Screen,{path:"/",title:"Dashboard",isScreenLocked:!0,children:(0,e.jsxs)("div",{style:{padding:"1.5rem"},children:[(0,e.jsx)("h2",{children:"Welcome to Dashboard"}),(0,e.jsx)("p",{children:"Choose an option below:"}),(0,e.jsxs)("div",{style:{marginTop:"20px",display:"flex",gap:"10px"},children:[(0,e.jsx)(s.m.Button,{path:"/profile",variant:"primary",children:"Profile Settings"}),(0,e.jsx)(s.m.Button,{path:"/account",variant:"secondary",children:"Account Options"}),(0,e.jsx)(s.m.Button,{path:"/help",variant:"tertiary",children:"Help & Support"})]})]})}),(0,e.jsx)(t.Screen,{path:"/profile",title:"Profile Settings",isScreenLocked:!1,children:(0,e.jsxs)("div",{style:{padding:"1.5rem"},children:[(0,e.jsx)("h2",{children:"Edit Your Profile"}),(0,e.jsx)("p",{children:"Update your profile information here."}),(0,e.jsx)(c.Ay,{variant:"primary",children:"Save Changes"})]})}),(0,e.jsx)(t.Screen,{path:"/account",title:"Account Options",isScreenLocked:!1,footerActions:[{children:"Cancel",variant:"secondary",onClick:i},{children:"Save Changes",variant:"primary",onClick:a}],sidebar:(0,e.jsxs)(_.A,{direction:"column",gap:2,style:{padding:"1.5rem"},justify:"start",children:[(0,e.jsx)(s.m.Button,{path:"/account/privacy",variant:"tertiary",children:"Privacy Settings"}),(0,e.jsx)(s.m.Button,{path:"/account/security",variant:"tertiary",children:"Security Settings"})]}),children:(0,e.jsxs)("div",{style:{padding:"1.5rem"},children:[(0,e.jsx)("h2",{children:"Account Management"}),(0,e.jsx)("p",{children:"Manage your account settings."}),(0,e.jsx)(c.Ay,{variant:"secondary",children:"Change Password"})]})}),(0,e.jsx)(t.Screen,{path:"/account/privacy",title:"Privacy Settings",isScreenLocked:!1,children:(0,e.jsxs)("div",{style:{padding:"1.5rem"},children:[(0,e.jsx)("h2",{children:"Privacy Settings"}),(0,e.jsx)("p",{children:"Control your privacy preferences."})]})}),(0,e.jsx)(t.Screen,{path:"/account/security",title:"Security Settings",isScreenLocked:!1,children:(0,e.jsxs)("div",{style:{padding:"1.5rem"},children:[(0,e.jsx)("h2",{children:"Security Settings"}),(0,e.jsx)("p",{children:"Manage your security options."})]})}),(0,e.jsx)(t.Screen,{path:"/help",title:"Help & Support",isScreenLocked:!1,children:(0,e.jsxs)("div",{style:{padding:"1.5rem"},children:[(0,e.jsx)("h2",{children:"Help & Support"}),(0,e.jsx)("p",{children:"Get help with common questions."}),(0,e.jsx)("p",{children:"Contact our support team for assistance."})]})})]})},v=()=>{const[n,r]=(0,l.useReducer)(d=>!d,!0),a=()=>console.log("Changes confirmed"),i=()=>console.log("Changes cancelled");return n&&(0,e.jsxs)(t,{initialPath:"/",onClose:r,children:[(0,e.jsx)(t.Screen,{path:"/",title:"Form Screen",isScreenLocked:!0,children:(0,e.jsxs)("div",{style:{padding:"1.5rem"},children:[(0,e.jsx)("h2",{children:"Fill Out This Form"}),(0,e.jsx)("p",{children:"The next screen has footer actions at the bottom."}),(0,e.jsx)(s.m.Button,{path:"/confirmation",variant:"primary",children:"Next"})]})}),(0,e.jsx)(t.Screen,{path:"/confirmation",title:"Confirm Changes",isScreenLocked:!1,footerActions:[({navigate:d})=>(0,e.jsx)(c.Ay,{variant:"secondary",onClick:()=>{i(),d()},children:"Cancel"},"cancel"),({navigate:d})=>(0,e.jsx)(c.Ay,{variant:"primary",onClick:()=>{a(),d()},children:"Confirm"},"confirm")],children:(0,e.jsxs)("div",{style:{padding:"1.5rem"},children:[(0,e.jsx)("h2",{children:"Are you sure?"}),(0,e.jsx)("p",{children:"Please confirm your changes before proceeding."})]})})]})},f=()=>{const[n,r]=(0,l.useReducer)(i=>!i,!0),a=(0,e.jsxs)(_.A,{direction:"column",gap:2,style:{padding:"1.5rem"},justify:"start",children:[(0,e.jsx)(s.m.Button,{path:"/general",variant:"tertiary",children:"General"}),(0,e.jsx)(s.m.Button,{path:"/advanced",variant:"tertiary",children:"Advanced"}),(0,e.jsx)(s.m.Button,{path:"/notifications",variant:"tertiary",children:"Notifications"})]});return n&&(0,e.jsxs)(t,{initialPath:"/",onClose:r,children:[(0,e.jsx)(t.Screen,{path:"/",title:"Settings",isScreenLocked:!0,sidebar:a,children:(0,e.jsxs)("div",{style:{padding:"1.5rem"},children:[(0,e.jsx)("h2",{children:"Choose a Setting Category"}),(0,e.jsx)("p",{children:"Select from the sidebar to navigate to different settings."})]})}),(0,e.jsx)(t.Screen,{path:"/general",title:"General Settings",isScreenLocked:!1,sidebar:a,children:(0,e.jsxs)("div",{style:{padding:"1.5rem"},children:[(0,e.jsx)("h2",{children:"General Settings"}),(0,e.jsx)("p",{children:"Configure general preferences for your account."})]})}),(0,e.jsx)(t.Screen,{path:"/advanced",title:"Advanced Settings",isScreenLocked:!1,sidebar:a,children:(0,e.jsxs)("div",{style:{padding:"1.5rem"},children:[(0,e.jsx)("h2",{children:"Advanced Settings"}),(0,e.jsx)("p",{children:"Configure advanced options for power users."})]})}),(0,e.jsx)(t.Screen,{path:"/notifications",title:"Notification Settings",isScreenLocked:!1,sidebar:a,children:(0,e.jsxs)("div",{style:{padding:"1.5rem"},children:[(0,e.jsx)("h2",{children:"Notification Settings"}),(0,e.jsx)("p",{children:"Control how and when you receive notifications."})]})})]})},X=["Default","SingleScreen","MultipleScreens","CustomInitialPath","ComplexNavigation","WithFooterActions","WithSidebar"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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

@return Single screen navigator modal story`,...m.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source},description:{story:`NavigatorModal with multiple screens demonstrating navigation between them.

@return Multi-screen navigator modal story`,...u.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source},description:{story:`NavigatorModal starting at a non-default initial path.

@return Navigator modal with custom initial path story`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source},description:{story:`NavigatorModal with rich content and multiple navigation levels.

@return Complex multi-screen navigator modal story`,...g.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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

@return Navigator modal with footer actions story`,...v.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source},description:{story:`NavigatorModal with sidebar navigation.

@return Navigator modal with sidebar story`,...f.parameters?.docs?.description}}};try{p.displayName="Default",p.__docgenInfo={description:"Default NavigatorModal story with multiple screens.",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/navigator-modal/stories/index.stories.tsx#Default"]={docgenInfo:p.__docgenInfo,name:"Default",path:"../components/components/navigator-modal/stories/index.stories.tsx#Default"})}catch{}try{m.displayName="SingleScreen",m.__docgenInfo={description:"Basic NavigatorModal with a single screen.",displayName:"SingleScreen",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/navigator-modal/stories/index.stories.tsx#SingleScreen"]={docgenInfo:m.__docgenInfo,name:"SingleScreen",path:"../components/components/navigator-modal/stories/index.stories.tsx#SingleScreen"})}catch{}try{u.displayName="MultipleScreens",u.__docgenInfo={description:"NavigatorModal with multiple screens demonstrating navigation between them.",displayName:"MultipleScreens",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/navigator-modal/stories/index.stories.tsx#MultipleScreens"]={docgenInfo:u.__docgenInfo,name:"MultipleScreens",path:"../components/components/navigator-modal/stories/index.stories.tsx#MultipleScreens"})}catch{}try{h.displayName="CustomInitialPath",h.__docgenInfo={description:"NavigatorModal starting at a non-default initial path.",displayName:"CustomInitialPath",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/navigator-modal/stories/index.stories.tsx#CustomInitialPath"]={docgenInfo:h.__docgenInfo,name:"CustomInitialPath",path:"../components/components/navigator-modal/stories/index.stories.tsx#CustomInitialPath"})}catch{}try{g.displayName="ComplexNavigation",g.__docgenInfo={description:"NavigatorModal with rich content and multiple navigation levels.",displayName:"ComplexNavigation",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/navigator-modal/stories/index.stories.tsx#ComplexNavigation"]={docgenInfo:g.__docgenInfo,name:"ComplexNavigation",path:"../components/components/navigator-modal/stories/index.stories.tsx#ComplexNavigation"})}catch{}try{v.displayName="WithFooterActions",v.__docgenInfo={description:"NavigatorModal with footer actions.",displayName:"WithFooterActions",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/navigator-modal/stories/index.stories.tsx#WithFooterActions"]={docgenInfo:v.__docgenInfo,name:"WithFooterActions",path:"../components/components/navigator-modal/stories/index.stories.tsx#WithFooterActions"})}catch{}try{f.displayName="WithSidebar",f.__docgenInfo={description:"NavigatorModal with sidebar navigation.",displayName:"WithSidebar",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/navigator-modal/stories/index.stories.tsx#WithSidebar"]={docgenInfo:f.__docgenInfo,name:"WithSidebar",path:"../components/components/navigator-modal/stories/index.stories.tsx#WithSidebar"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../components/components/navigator-modal/styles.scss"(L,b,o){o.d(b,{A:()=>j});var s=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=o.n(s),_=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),l=o.n(_),O=l()(c());O.push([L.id,".components-modal__screen-overlay:has(.jp-navigator-modal){z-index:99999}.jp-navigator-modal{container-type:inline-size;container-name:navigator-modal;width:100%}@media(min-width: 782px){.jp-navigator-modal{max-height:90%}}.jp-navigator-modal .components-modal__content{padding:0}.jp-navigator-modal .components-modal__content>div{height:100%}.jp-navigator-modal__navigator{height:100%}.jp-navigator-modal__screen{height:100%;padding:0;overflow:hidden}.jp-navigator-modal__header{display:flex;align-items:center;justify-content:space-between;padding:1.5rem;height:4.5rem;border-bottom:1px solid #e0e0e0;flex-shrink:0}.jp-navigator-modal__header h1{margin:0;font-size:15px;font-weight:500;line-height:24px;color:#1e1e1e}.jp-navigator-modal__title-wrap{display:flex;align-items:center;gap:1rem}.jp-navigator-modal__body{height:100%;overflow:auto;flex-direction:column}@container navigator-modal (width >= 600px){.jp-navigator-modal__body{flex-direction:row}}.jp-navigator-modal__sidebar{width:100%;display:flex;flex-direction:column;gap:1.5rem}@container navigator-modal (width >= 600px){.jp-navigator-modal__sidebar{flex-basis:30%;height:100%;flex-shrink:0;border-inline-end:1px solid #ddd;overflow:auto}}.jp-navigator-modal__content{width:100%;height:100%;flex:1}@container navigator-modal (width >= 600px){.jp-navigator-modal__content{overflow:auto}}.jp-navigator-modal__footer{padding:1rem 1.5rem;border-top:1px solid #ddd;height:4.5rem;flex-shrink:0}",""]);const j=O}}]);
