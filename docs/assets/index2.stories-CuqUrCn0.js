import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{j as i,t as a}from"./build-module-DMs68Vfd.js";import{Qn as o,cr as s,gi as c,t as l,yr as u}from"./iframe-CdNWsAej.js";import{n as d,t as f}from"./layout-dOXv3mXr.js";var p=e((()=>{})),m,h,g,_=e((()=>{l(),a(),n(),s(),d(),p(),m=r(),h=(e,n)=>{switch(e){case`fail_domain_forbidden`:case`fail_ip_forbidden`:case`fail_domain_tld`:case`fail_subdomain_wpcom`:case`siteurl_private_ip`:return t(`Your site host is on a private network. Sites can connect to WordPress.com only on public sites.`,`jetpack-connection-js`);case`connection_disabled`:return t(`This site has been suspended.`,`jetpack-connection-js`)}if(n)return i(t(`Unavailable in <a>Offline Mode</a>`,`jetpack-connection-js`),{a:(0,m.jsx)(`a`,{href:c(`jetpack-support-development-mode`),target:`_blank`,rel:`noopener noreferrer`})})},g=({title:e,images:n,children:r,assetBaseUrl:i,isLoading:a,buttonLabel:s,handleButtonClick:c,displayButtonError:l,errorCode:d,buttonIsLoading:p,loadingLabel:g,footer:_,isOfflineMode:v,logo:y})=>(0,m.jsx)(f,{title:e,assetBaseUrl:i,images:n,className:`jp-connection__connect-screen`+(a?` jp-connection__connect-screen__loading`:``),logo:y,children:(0,m.jsxs)(`div`,{className:`jp-connection__connect-screen__content`,children:[r,(0,m.jsx)(`div`,{className:`jp-connection__connect-screen__tos`,children:(0,m.jsx)(o,{agreeButtonLabel:s})}),(0,m.jsx)(u,{className:`jp-connection__connect-screen__action-button`,onClick:c,loading:p,disabled:v,children:s}),(l||v)&&(0,m.jsx)(`p`,{className:`jp-connection__connect-screen__error`,children:h(d,v)||t(`An error occurred. Please try again.`,`jetpack-connection-js`)}),(0,m.jsx)(`span`,{className:`jp-connection__connect-screen__loading-message`,role:`status`,children:p?g||t(`Loading`,`jetpack-connection-js`):``}),_&&(0,m.jsx)(`div`,{className:`jp-connection__connect-screen__footer`,children:_})]})})})),v,y,b,x,S,C,w,T,E,D;e((()=>{_(),v=r(),{action:y}=__STORYBOOK_MODULE_ACTIONS__,b={title:`JS Packages/Connection/Connect Screen`,component:g},x=e=>(0,v.jsxs)(g,{...e,children:[(0,v.jsx)(`p`,{children:`Secure and speed up your site for free with Jetpack's powerful WordPress tools`}),(0,v.jsxs)(`ul`,{children:[(0,v.jsx)(`li`,{children:`Speed up your site with optimized images`}),(0,v.jsx)(`li`,{children:`Protect your site against bot attacks`}),(0,v.jsx)(`li`,{children:`Get notifications if your site goes offline`}),(0,v.jsx)(`li`,{children:`Enhance your site with dozens of other features`})]})]}),S={buttonIsLoading:!1,buttonLabel:`Set up Jetpack`,displayButtonError:!1,handleButtonClick:y(`onButtonClick`),title:`Over 5 million WordPress sites are faster and more secure`,assetBaseUrl:`/`,images:[`connect-right.png`]},C=x.bind({}),C.args=S,w=x.bind({}),w.args={...S,buttonIsLoading:!0},T=x.bind({}),T.args={...S,displayButtonError:!0},E=x.bind({}),E.args={...S,footer:(0,v.jsx)(`div`,{children:`Hi I'm a Footer`})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
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
    </ConnectScreenVisual>`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack&apos;s powerful WordPress tools</p>

        <ul>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...E.parameters?.docs?.source}}},D=[`_default`,`Connecting`,`Errored`,`Footer`]}))();export{w as Connecting,T as Errored,E as Footer,D as __namedExportsOrder,C as _default,b as default};