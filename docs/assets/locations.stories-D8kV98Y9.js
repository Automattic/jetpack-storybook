import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{an as i}from"./build-module-DhwsekaI.js";import{S as a}from"./library-Djn3c8VE.js";import{t as o}from"./src-Dklj63E7.js";import{t as s}from"./src-CFH_6nYc.js";import{n as c,t as l}from"./widget-card-DJYbhJj7.js";import{Jt as u,qt as d}from"./charts-provider-BlGL0rmX.js";import{t as f}from"./widget-state-5rQ0iNUT.js";import{t as p}from"./constants-8lfZ9704.js";import{t as m}from"./rows-DoJXoHhN.js";import{i as h,n as g,r as _,t as v}from"./leaderboard-skeleton-Bi_XOG36.js";import{r as y,t as b}from"./widget-state-Cn9p7qe9.js";import{n as x,t as S}from"./with-widget-root-Cv26bb_b.js";import{n as C,t as w}from"./build-leaderboard-chart-data-CQBNgFeC.js";import{n as T,t as E}from"./locations-geo-chart-tAizQzqr.js";function D(e,t){let{country:n,hasComparison:r,maxRows:i}=t;return{geoRows:e.map(e=>({label:e.label,value:e.value,countryCode:n?n.code:e.id.toUpperCase(),countryFull:n?n.name:e.label})),geoMode:n?`region`:`country`,focusCountry:n,rows:e.map(e=>({id:e.id,label:e.label,value:e.value,previousValue:e.previousValue,media:{kind:`flag`,url:d((n?n.code:e.id).toLowerCase())??void 0,country:n?n.name:e.label}})),comparing:r&&e.slice(0,i).some(e=>e.previousValue!==void 0)}}var O=e((()=>{u()})),k,A,j,M,N,P=e((()=>{k=`_root_h0fji_1`,A=`_container_h0fji_7`,j=`_list_h0fji_16`,M=`_map_h0fji_23`,N={root:k,container:A,list:j,map:M}}));function F({rows:e,status:t,error:n,empty:r,format:a=R,valueLabel:o,country:s,maxRows:c=10,chartTitle:l}){let{isLoading:u,isFetching:d,isError:p,refetch:m}=t,h=!!t.hasComparison,g=(0,I.useMemo)(()=>D(e,{country:s,hasComparison:h,maxRows:c}),[e,s,h,c]),b=(0,I.useMemo)(()=>w(g.rows,{hasComparison:g.comparing,maxRows:c}),[g,c]),x=(0,I.useMemo)(()=>y(n,m),[n,m]);return(0,L.jsx)(`div`,{className:N.root,children:(0,L.jsx)(f,{isLoading:u,isFetching:d,isError:!!p,isEmpty:e.length===0,error:x,empty:r,renderLoading:(0,L.jsx)(v,{rows:c}),children:(0,L.jsxs)(`div`,{className:N.container,children:[(0,L.jsx)(_,{data:b,withOverlayLabel:!0,withComparison:g.comparing,showLegend:!1,dataFormat:a,className:N.list,chartTitle:l}),(0,L.jsx)(i,{justify:`center`,align:`center`,className:N.map,children:(0,L.jsx)(T,{rows:g.geoRows,mode:g.geoMode,focusCountry:g.focusCountry,valueLabel:o,resizeDebounceTime:50,chartTitle:l})})]})})})}var I,L,R,z=e((()=>{s(),I=t(n(),1),p(),m(),h(),g(),C(),E(),b(),O(),P(),L=r(),R={type:`number`,options:{useMultipliers:!0,decimals:0}}})),B,V,H,U,W,G,K,q,J,Y,X,Z,Q;e((()=>{o(),c(),S(),z(),B=r(),V=[{id:`us`,label:`United States`,value:12400,previousValue:11e3},{id:`gb`,label:`United Kingdom`,value:3100,previousValue:3600},{id:`ca`,label:`Canada`,value:2050,previousValue:1900},{id:`de`,label:`Germany`,value:980,previousValue:1200},{id:`au`,label:`Australia`,value:640,previousValue:500}],H=[{id:`California`,label:`California`,value:4200,previousValue:3900},{id:`Texas`,label:`Texas`,value:2650,previousValue:2800},{id:`New York`,label:`New York`,value:2100,previousValue:1700},{id:`Florida`,label:`Florida`,value:1300,previousValue:1250}],U={isLoading:!1,isError:!1},W=e=>(0,B.jsx)(l,{height:`360px`,width:`800px`,children:(0,B.jsx)(e,{})}),G={title:`Packages/Premium Analytics/Widgets Toolkit/Components/Locations`,component:F,tags:[`autodocs`],parameters:{docs:{description:{component:"The locations widget body: hand it the ranking, as countries or as the regions of one country, and the request status, and it renders the list with a flag, share and delta per location beside the map that places them, and the loading, error and empty states. Renders inside `WidgetRoot`."}}},decorators:[W,x()],args:{rows:V,status:U,valueLabel:`Views`}},K={},q={args:{status:{...U,hasComparison:!0}}},J={args:{rows:H,status:{...U,hasComparison:!0},country:{code:`US`,name:`United States`}}},Y={args:{status:{isLoading:!0}}},X={args:{status:{isLoading:!1,isError:!0,refetch:()=>void 0}}},Z={args:{rows:[],empty:{icon:a,description:`No location data in this period.`}}},Q=[`Default`,`WithComparison`,`UnitedStates`,`Loading`,`Failed`,`Empty`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      ...READY,
      hasComparison: true
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    rows: STATES,
    status: {
      ...READY,
      hasComparison: true
    },
    country: {
      code: 'US',
      name: 'United States'
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      isLoading: true
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      isLoading: false,
      isError: true,
      refetch: () => undefined
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [],
    empty: {
      icon: location,
      description: 'No location data in this period.'
    }
  }
}`,...Z.parameters?.docs?.source}}}}))();export{K as Default,Z as Empty,X as Failed,Y as Loading,J as UnitedStates,q as WithComparison,Q as __namedExportsOrder,G as default};