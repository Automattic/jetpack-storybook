import{n as e}from"./chunk-zsgVPwQN.js";import{B_ as t,Kn as n,W_ as r,av as i,cr as a,nv as o,ov as s,t as c,y_ as l}from"./iframe-C_yFw6Tm.js";import{n as u,t as d}from"./layout-G4wMt2Jh.js";var f=e((()=>{})),p,m,h,g=e((()=>{c(),l(),i(),u(),f(),p=o(),m=(e,n)=>{switch(e){case`fail_domain_forbidden`:case`fail_ip_forbidden`:case`fail_domain_tld`:case`fail_subdomain_wpcom`:case`siteurl_private_ip`:return s(`Your site host is on a private network. Sites can connect to WordPress.com only on public sites.`,`jetpack-connection-js`);case`connection_disabled`:return s(`This site has been suspended.`,`jetpack-connection-js`)}if(n)return t(s(`Unavailable in <a>Offline Mode</a>`,`jetpack-connection-js`),{a:(0,p.jsx)(`a`,{href:r(`jetpack-support-development-mode`),target:`_blank`,rel:`noopener noreferrer`})})},h=({title:e,images:t,children:r,assetBaseUrl:i,isLoading:o,buttonLabel:c,handleButtonClick:l,displayButtonError:u,errorCode:f,buttonIsLoading:h,loadingLabel:g,footer:_,isOfflineMode:v,logo:y})=>(0,p.jsx)(d,{title:e,assetBaseUrl:i,images:t,className:`jp-connection__connect-screen`+(o?` jp-connection__connect-screen__loading`:``),logo:y,children:(0,p.jsxs)(`div`,{className:`jp-connection__connect-screen__content`,children:[r,(0,p.jsx)(`div`,{className:`jp-connection__connect-screen__tos`,children:(0,p.jsx)(n,{agreeButtonLabel:c})}),(0,p.jsx)(a,{label:c,onClick:l,displayError:u||v,errorMessage:m(f,v),isLoading:h,isDisabled:v}),(0,p.jsx)(`span`,{className:`jp-connection__connect-screen__loading-message`,role:`status`,children:h?g||s(`Loading`,`jetpack-connection-js`):``}),_&&(0,p.jsx)(`div`,{className:`jp-connection__connect-screen__footer`,children:_})]})})})),_,v,y,b,x,S,C,w,T,E;e((()=>{g(),_=o(),{action:v}=__STORYBOOK_MODULE_ACTIONS__,y={title:`JS Packages/Connection/Connect Screen`,component:h},b=e=>(0,_.jsxs)(h,{...e,children:[(0,_.jsx)(`p`,{children:`Secure and speed up your site for free with Jetpack's powerful WordPress tools`}),(0,_.jsxs)(`ul`,{children:[(0,_.jsx)(`li`,{children:`Speed up your site with optimized images`}),(0,_.jsx)(`li`,{children:`Protect your site against bot attacks`}),(0,_.jsx)(`li`,{children:`Get notifications if your site goes offline`}),(0,_.jsx)(`li`,{children:`Enhance your site with dozens of other features`})]})]}),x={buttonIsLoading:!1,buttonLabel:`Set up Jetpack`,displayButtonError:!1,handleButtonClick:v(`onButtonClick`),title:`Over 5 million WordPress sites are faster and more secure`,assetBaseUrl:`/`,images:[`connect-right.png`]},S=b.bind({}),S.args=x,C=b.bind({}),C.args={...x,buttonIsLoading:!0},w=b.bind({}),w.args={...x,displayButtonError:!0},T=b.bind({}),T.args={...x,footer:(0,_.jsx)(`div`,{children:`Hi I'm a Footer`})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack&apos;s powerful WordPress tools</p>

        <ul>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack&apos;s powerful WordPress tools</p>

        <ul>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack&apos;s powerful WordPress tools</p>

        <ul>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack&apos;s powerful WordPress tools</p>

        <ul>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...T.parameters?.docs?.source}}},E=[`_default`,`Connecting`,`Errored`,`Footer`]}))();export{C as Connecting,w as Errored,T as Footer,E as __namedExportsOrder,S as _default,y as default};