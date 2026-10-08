import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{An as n,In as r,t as i}from"./src-ckB9686_.js";import{n as a,t as o}from"./widget-card-CkmlL3P7.js";import{_ as s,g as c}from"./charts-provider-BXXbDOcW.js";import{n as l,r as u}from"./register-report-mocks-DbShhgbf.js";import{n as d,r as f}from"./with-story-router-Beljd9ki.js";import{n as p,t as m,v as h,y as g}from"./leaderboard-C7oYGIac.js";var _,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{i(),d(),l(),a(),h(),c(),p(),_=t(),u(),v=[{id:`1`,label:`Getting Started Walkthrough`,value:3820,previousValue:3e3},{id:`2`,label:`Product Launch Highlights`,value:2640,previousValue:2700},{id:`3`,label:`Customer Story: Acme`,value:1210,previousValue:900},{id:`4`,label:`Behind the Scenes`,value:640},{id:`5`,label:`Q&A Session`,value:310,previousValue:420}],y={isLoading:!1,isError:!1},b=(e,t)=>(0,_.jsx)(s,{attributes:{reportParams:n(t.parameters.reportParams??r())},children:(0,_.jsx)(e,{})}),x=e=>(0,_.jsx)(o,{height:`360px`,children:(0,_.jsx)(e,{})}),S={title:`Packages/Premium Analytics/Widgets Toolkit/Components/Leaderboard`,component:m,tags:[`autodocs`],parameters:{docs:{description:{component:"The ranked-rows widget body: hand it domain rows and the request status, and it renders the leaderboard chart with its loading, error and empty states, the shares against the largest value of either period, the deltas, and the dashboard window on detail links. Renders inside `WidgetRoot`."}}},decorators:[x,b,f],args:{rows:v,status:y,footer:(0,_.jsx)(g,{report:`videos`})}},C={},w={args:{status:{...y,hasComparison:!0}},parameters:{reportParams:r(!0)}},T={args:{rows:[{id:`1`,label:`Getting Started Walkthrough`,value:3820,action:{kind:`videoLink`,id:101,href:`https://example.com/video/101/`}},{id:`2`,label:`example.com`,value:2640,media:{kind:`favicon`,url:`https://example.com/favicon.ico`},action:{kind:`link`,href:`https://example.com`}},{id:`3`,label:`Untitled video`,value:1210}]}},E={args:{rows:[{id:`google`,label:`Google`,value:3820,children:[{id:`search`,label:`Google Search`,value:3e3},{id:`images`,label:`Google Images`,value:820}]},{id:`social`,label:`Social`,value:1210,children:[{id:`x`,label:`X`,value:700},{id:`facebook`,label:`Facebook`,value:510}]},{id:`direct`,label:`Direct`,value:640}],drillDown:{backLabel:`All referrers`,backAriaLabel:`View all referrers`,rowAriaLabel:e=>`View referrers from ${e.label}`}}},D={args:{status:{isLoading:!0}}},O={args:{rows:[],status:{isLoading:!1,isError:!0,refetch:()=>{}},error:{description:`We couldn't load video plays. Please try again in a moment.`}}},k={args:{rows:[]}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      ...READY,
      hasComparison: true
    }
  },
  parameters: {
    reportParams: getDefaultQueryParams(true)
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      isLoading: true
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    rows: []
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`WithComparison`,`WithMediaAndLinks`,`WithDrillDown`,`Loading`,`Error`,`Empty`]}))();export{C as Default,k as Empty,O as Error,D as Loading,w as WithComparison,E as WithDrillDown,T as WithMediaAndLinks,A as __namedExportsOrder,S as default};