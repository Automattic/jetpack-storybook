import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-DQe4AOzJ.js";import{n as r,t as i}from"./clsx-DtTNkXd0.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{pn as o,sn as s,t as c}from"./src-5g9sGwvT.js";import{n as l,t as u}from"./widget-card-DJYbhJj7.js";import{F as d,P as f,m as p,p as m}from"./charts-provider-m9wcfGJI.js";import{a as h,o as g}from"./widget-state-B6SJsJzX.js";import{n as _,r as v}from"./with-story-router-CyVN4A4U.js";import{t as y}from"./internal-link-CevSH5b7.js";import{u as b}from"./build-leaderboard-chart-data-D1kbI_ci.js";import{n as x,t as S}from"./leaderboard-CpBXBeLd.js";var C,w,T,E,D=e((()=>{C=`_reportLink_1p4e8_1`,w=`_hasContent_1p4e8_17`,T=`_label_1p4e8_26`,E={reportLink:C,hasContent:w,label:T}}));function O({report:e,section:n,label:r,ariaLabel:a,className:o,children:s}){let c=p({section:n}),l=r??t(`View all`,`jetpack-premium-analytics-pkg`);return(0,k.jsx)(y,{to:`/reports/$report`,params:{report:e},search:c,variant:`default`,className:i(E.reportLink,s&&E.hasContent,o),ariaLabel:a,children:s?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`span`,{className:E.label,children:l}),` `,s]}):l})}var k,A=e((()=>{n(),r(),m(),b(),D(),k=a()})),j=e((()=>{A()})),M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;e((()=>{c(),_(),h(),l(),j(),f(),x(),M=a(),g(),N=[{id:`1`,label:`Getting Started Walkthrough`,value:3820,previousValue:3e3},{id:`2`,label:`Product Launch Highlights`,value:2640,previousValue:2700},{id:`3`,label:`Customer Story: Acme`,value:1210,previousValue:900},{id:`4`,label:`Behind the Scenes`,value:640},{id:`5`,label:`Q&A Session`,value:310,previousValue:420}],P={isLoading:!1,isError:!1},F=(e,t)=>(0,M.jsx)(d,{attributes:{reportParams:s(t.parameters.reportParams??o())},children:(0,M.jsx)(e,{})}),I=e=>(0,M.jsx)(u,{height:`360px`,children:(0,M.jsx)(e,{})}),L={title:`Packages/Premium Analytics/Widgets Toolkit/Components/Leaderboard`,component:S,tags:[`autodocs`],parameters:{docs:{description:{component:"The ranked-rows widget body: hand it domain rows and the request status, and it renders the leaderboard chart with its loading, error and empty states, the shares against the largest value of either period, the deltas, and the dashboard window on detail links. Renders inside `WidgetRoot`."}}},decorators:[I,F,v],args:{rows:N,status:P,footer:(0,M.jsx)(O,{report:`videos`})}},R={},z={args:{status:{...P,hasComparison:!0}},parameters:{reportParams:o(!0)}},B={args:{variant:`bars`}},V={args:{variant:`bars`,status:{...P,hasComparison:!0}},parameters:{reportParams:o(!0)}},H={args:{rows:[{id:`1`,label:`Getting Started Walkthrough`,value:3820,action:{kind:`videoLink`,id:101,href:`https://example.com/video/101/`}},{id:`2`,label:`example.com`,value:2640,media:{kind:`favicon`,url:`https://example.com/favicon.ico`},action:{kind:`link`,href:`https://example.com`}},{id:`3`,label:`Untitled video`,value:1210}]}},U={args:{rows:[{id:`google`,label:`Google`,value:3820,children:[{id:`search`,label:`Google Search`,value:3e3},{id:`images`,label:`Google Images`,value:820}]},{id:`social`,label:`Social`,value:1210,children:[{id:`x`,label:`X`,value:700},{id:`facebook`,label:`Facebook`,value:510}]},{id:`direct`,label:`Direct`,value:640}],drillDown:{backLabel:`All referrers`,backAriaLabel:`View all referrers`,rowAriaLabel:e=>`View referrers from ${e.label}`}}},W={args:{status:{isLoading:!0}}},G={args:{rows:[],status:{isLoading:!1,isError:!0,refetch:()=>{}},error:{description:`We couldn't load video plays. Please try again in a moment.`}}},K={args:{rows:[]}},q=[`Default`,`WithComparison`,`Bars`,`BarsWithComparison`,`WithMediaAndLinks`,`WithDrillDown`,`Loading`,`Error`,`Empty`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      ...READY,
      hasComparison: true
    }
  },
  parameters: {
    reportParams: getDefaultQueryParams(true)
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'bars'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'bars',
    status: {
      ...READY,
      hasComparison: true
    }
  },
  parameters: {
    reportParams: getDefaultQueryParams(true)
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [{
      id: '1',
      label: 'Getting Started Walkthrough',
      value: 3820,
      action: {
        kind: 'videoLink',
        id: 101,
        href: 'https://example.com/video/101/'
      }
    }, {
      id: '2',
      label: 'example.com',
      value: 2640,
      media: {
        kind: 'favicon',
        url: 'https://example.com/favicon.ico'
      },
      action: {
        kind: 'link',
        href: 'https://example.com'
      }
    }, {
      id: '3',
      label: 'Untitled video',
      value: 1210
    }]
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [{
      id: 'google',
      label: 'Google',
      value: 3820,
      children: [{
        id: 'search',
        label: 'Google Search',
        value: 3000
      }, {
        id: 'images',
        label: 'Google Images',
        value: 820
      }]
    }, {
      id: 'social',
      label: 'Social',
      value: 1210,
      children: [{
        id: 'x',
        label: 'X',
        value: 700
      }, {
        id: 'facebook',
        label: 'Facebook',
        value: 510
      }]
    }, {
      id: 'direct',
      label: 'Direct',
      value: 640
    }],
    drillDown: {
      backLabel: 'All referrers',
      backAriaLabel: 'View all referrers',
      rowAriaLabel: row => \`View referrers from \${row.label}\`
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      isLoading: true
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [],
    status: {
      isLoading: false,
      isError: true,
      refetch: () => {}
    },
    error: {
      description: "We couldn't load video plays. Please try again in a moment."
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    rows: []
  }
}`,...K.parameters?.docs?.source}}}}))();export{B as Bars,V as BarsWithComparison,R as Default,K as Empty,G as Error,W as Loading,z as WithComparison,U as WithDrillDown,H as WithMediaAndLinks,q as __namedExportsOrder,L as default};