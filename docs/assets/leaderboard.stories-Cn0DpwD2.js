import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{F as n,I as r}from"./charts-provider-CJceu84j.js";import{fn as i,t as a,vn as o}from"./src-DvzWgCqE.js";import{n as s,t as c}from"./widget-card-DJYbhJj7.js";import{B as l,n as u,r as d,z as f}from"./with-story-router-Bl7d_9HM.js";import{n as p,r as m}from"./register-report-mocks-CI2bPEM7.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{a(),u(),p(),s(),n(),l(),h=t(),m(),g=[{id:`1`,label:`Getting Started Walkthrough`,value:3820,previousValue:3e3},{id:`2`,label:`Product Launch Highlights`,value:2640,previousValue:2700},{id:`3`,label:`Customer Story: Acme`,value:1210,previousValue:900},{id:`4`,label:`Behind the Scenes`,value:640},{id:`6`,label:`Relaunch Teaser`,value:280,previousValue:-150},{id:`7`,label:`Refunded Workshop`,value:-450,previousValue:200}],_={isLoading:!1,isError:!1},v=(e,t)=>(0,h.jsx)(r,{attributes:{reportParams:i(t.parameters.reportParams??o())},children:(0,h.jsx)(e,{})}),y=e=>(0,h.jsx)(c,{height:`360px`,children:(0,h.jsx)(e,{})}),b={title:`Packages/Premium Analytics/Widgets Toolkit/Components/Leaderboard`,component:f,tags:[`autodocs`],parameters:{docs:{description:{component:"The ranked-rows widget body: hand it domain rows and the request status, and it renders the leaderboard chart with its loading, error and empty states and the dashboard window on detail links; the chart derives the bar shares and deltas from the values. Renders inside `WidgetRoot`."}}},decorators:[y,v,d],args:{rows:g,status:_}},x={},S={args:{status:{..._,hasComparison:!0}},parameters:{reportParams:o(!0)}},C={args:{variant:`bars`}},w={args:{variant:`bars`,status:{..._,hasComparison:!0}},parameters:{reportParams:o(!0),docs:{description:{story:`Net revenue after refunds can fall below zero. Negative values draw below a shared zero point, and a negative previous value still reads as a rise when the current value is higher.`}}}},T={args:{rows:[{id:`1`,label:`Getting Started Walkthrough`,value:3820,action:{kind:`videoLink`,id:101,href:`https://example.com/video/101/`}},{id:`2`,label:`example.com`,value:2640,media:{kind:`favicon`,url:`https://example.com/favicon.ico`},action:{kind:`link`,href:`https://example.com`}},{id:`3`,label:`Untitled video`,value:1210}]}},E={args:{rows:[{id:`google`,label:`Google`,value:3820,children:[{id:`search`,label:`Google Search`,value:3e3},{id:`images`,label:`Google Images`,value:820}]},{id:`social`,label:`Social`,value:1210,children:[{id:`x`,label:`X`,value:700},{id:`facebook`,label:`Facebook`,value:510}]},{id:`direct`,label:`Direct`,value:640}],drillDown:{backLabel:`All referrers`,backAriaLabel:`View all referrers`,rowAriaLabel:e=>`View referrers from ${e.label}`}}},D={args:{status:{isLoading:!0}}},O={args:{rows:[],status:{isLoading:!1,isError:!0,refetch:()=>{}},error:{description:`We couldn't load video plays. Please try again in a moment.`}}},k={args:{rows:[]}},A=[`Default`,`WithComparison`,`Bars`,`BarsWithComparison`,`WithMediaAndLinks`,`WithDrillDown`,`Loading`,`Error`,`Empty`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      ...READY,
      hasComparison: true
    }
  },
  parameters: {
    reportParams: getDefaultQueryParams(true)
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'bars'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'bars',
    status: {
      ...READY,
      hasComparison: true
    }
  },
  parameters: {
    reportParams: getDefaultQueryParams(true),
    docs: {
      description: {
        story: 'Net revenue after refunds can fall below zero. Negative values draw below a shared zero point, and a negative previous value still reads as a rise when the current value is higher.'
      }
    }
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
}`,...k.parameters?.docs?.source}}}}))();export{C as Bars,w as BarsWithComparison,x as Default,k as Empty,O as Error,D as Loading,S as WithComparison,E as WithDrillDown,T as WithMediaAndLinks,A as __namedExportsOrder,b as default};