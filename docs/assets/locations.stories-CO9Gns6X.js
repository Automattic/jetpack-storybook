import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{an as i}from"./build-module-B89fHTx2.js";import{S as a}from"./library-BaZ90bK7.js";import{t as o}from"./src-DZQPY6UA.js";import{t as s}from"./src-DcalQrRW.js";import{n as c,t as l}from"./widget-card-CkmlL3P7.js";import{Mt as u,jt as d}from"./charts-provider-DX4QMqjC.js";import{t as f}from"./constants-BXoslQmm.js";import{t as p}from"./rows-DAmD2BmE.js";import{i as m,n as h,r as g,t as _}from"./leaderboard-skeleton-CVcKaGvF.js";import{n as v,t as y}from"./with-widget-root-2akAHnRm.js";import{t as b}from"./widget-state-CJFNX5Bb.js";import{r as x,t as S}from"./widget-state-BqsJzEkp.js";import{n as C,t as w}from"./build-leaderboard-chart-data-BrMigub_.js";import{n as T,t as E}from"./locations-geo-chart-DLDSU78a.js";function D(e,t){let{country:n,hasComparison:r,maxRows:i}=t;return{geoRows:e.map(e=>({label:e.label,value:e.value,countryCode:n?n.code:e.id.toUpperCase(),countryFull:n?n.name:e.label})),geoMode:n?`region`:`country`,focusCountry:n,rows:e.map(e=>({id:e.id,label:e.label,value:e.value,previousValue:e.previousValue,media:{kind:`flag`,url:d((n?n.code:e.id).toLowerCase())??void 0,country:n?n.name:e.label}})),comparing:r&&e.slice(0,i).some(e=>e.previousValue!==void 0)}}var O=t((()=>{u()})),k,A,j,M,N,P=t((()=>{k=`_root_h0fji_1`,A=`_container_h0fji_7`,j=`_list_h0fji_16`,M=`_map_h0fji_23`,N={root:k,container:A,list:j,map:M}}));function F({rows:e,status:t,error:n,empty:r,format:a=R,valueLabel:o,country:s,maxRows:c=10}){let{isLoading:l,isFetching:u,isError:d,refetch:f}=t,p=!!t.hasComparison,m=(0,I.useMemo)(()=>D(e,{country:s,hasComparison:p,maxRows:c}),[e,s,p,c]),h=(0,I.useMemo)(()=>w(m.rows,{hasComparison:m.comparing,maxRows:c}),[m,c]),v=(0,I.useMemo)(()=>x(n,f),[n,f]);return(0,L.jsx)(`div`,{className:N.root,children:(0,L.jsx)(b,{isLoading:l,isFetching:u,isError:!!d,isEmpty:e.length===0,error:v,empty:r,renderLoading:(0,L.jsx)(_,{rows:c}),children:(0,L.jsxs)(`div`,{className:N.container,children:[(0,L.jsx)(g,{data:h,withOverlayLabel:!0,withComparison:m.comparing,showLegend:!1,dataFormat:a,className:N.list}),(0,L.jsx)(i,{justify:`center`,align:`center`,className:N.map,children:(0,L.jsx)(T,{rows:m.geoRows,mode:m.geoMode,focusCountry:m.focusCountry,valueLabel:o,resizeDebounceTime:50})})]})})})}var I,L,R,z=t((()=>{s(),I=e(n(),1),f(),p(),m(),h(),C(),E(),S(),O(),P(),L=r(),R={type:`number`,options:{useMultipliers:!0,decimals:0}}})),B,V,H,U,W,G,K,q,J,Y,X,Z,Q;t((()=>{o(),c(),y(),z(),B=r(),V=[{id:`us`,label:`United States`,value:12400,previousValue:11e3},{id:`gb`,label:`United Kingdom`,value:3100,previousValue:3600},{id:`ca`,label:`Canada`,value:2050,previousValue:1900},{id:`de`,label:`Germany`,value:980,previousValue:1200},{id:`au`,label:`Australia`,value:640,previousValue:500}],H=[{id:`California`,label:`California`,value:4200,previousValue:3900},{id:`Texas`,label:`Texas`,value:2650,previousValue:2800},{id:`New York`,label:`New York`,value:2100,previousValue:1700},{id:`Florida`,label:`Florida`,value:1300,previousValue:1250}],U={isLoading:!1,isError:!1},W=e=>(0,B.jsx)(l,{height:`360px`,width:`800px`,children:(0,B.jsx)(e,{})}),G={title:`Packages/Premium Analytics/Widgets Toolkit/Components/Locations`,component:F,tags:[`autodocs`],parameters:{docs:{description:{component:"The locations widget body: hand it the ranking, as countries or as the regions of one country, and the request status, and it renders the list with a flag, share and delta per location beside the map that places them, and the loading, error and empty states. Renders inside `WidgetRoot`."}}},decorators:[W,v()],args:{rows:V,status:U,valueLabel:`Views`}},K={},q={args:{status:{...U,hasComparison:!0}}},J={args:{rows:H,status:{...U,hasComparison:!0},country:{code:`US`,name:`United States`}}},Y={args:{status:{isLoading:!0}}},X={args:{status:{isLoading:!1,isError:!0,refetch:()=>void 0}}},Z={args:{rows:[],empty:{icon:a,description:`No location data in this period.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`WithComparison`,`UnitedStates`,`Loading`,`Failed`,`Empty`]}))();export{K as Default,Z as Empty,X as Failed,Y as Loading,J as UnitedStates,q as WithComparison,Q as __namedExportsOrder,G as default};