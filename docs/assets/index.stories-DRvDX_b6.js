import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{U as n,i as r,it as i,n as a,ot as o,t as s}from"./esm-D0l9BCmF.js";var c,l=e((()=>{c={"grid-control":`_grid-control_10m7d_1`}})),u,d,f=e((()=>{s(),l(),u=t(),d=({width:e,height:t,xScale:n,yScale:i,gridVisibility:o=`x`,top:s=0})=>(0,u.jsxs)(`g`,{transform:`translate(0, ${s})`,className:c[`grid-control`],children:[o.includes(`x`)&&(0,u.jsx)(r,{scale:n,width:e,"data-testid":`x-grid`}),o.includes(`y`)&&(0,u.jsx)(a,{scale:i,height:t,"data-testid":`y-grid`})]})})),p,m,h,g,_,v;e((()=>{n(),f(),p=t(),m={title:`JS Packages/Charts Library/Components/GridControl`,component:d,argTypes:{gridVisibility:{control:{type:`select`},options:[`x`,`y`,`xy`,`none`]}}},h=e=>{let t=o({domain:[`A`,`B`,`C`],range:[0,100]}),n=i({domain:[0,100],range:[100,0]});return(0,p.jsx)(`svg`,{width:200,height:200,children:(0,p.jsx)(d,{...e,width:200,height:200,xScale:t,yScale:n,gridVisibility:e.gridVisibility})})},g=h.bind({}),g.args={gridVisibility:`x`},_=h.bind({}),_.args={gridVisibility:`xy`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  const xScale = scaleBand({
    domain: ['A', 'B', 'C'],
    range: [0, 100]
  });
  const yScale = scaleLinear({
    domain: [0, 100],
    range: [100, 0]
  });
  return <svg width={200} height={200}>
            <GridControl {...args} width={200} height={200} xScale={xScale} yScale={yScale} gridVisibility={args.gridVisibility} />
        </svg>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => {
  const xScale = scaleBand({
    domain: ['A', 'B', 'C'],
    range: [0, 100]
  });
  const yScale = scaleLinear({
    domain: [0, 100],
    range: [100, 0]
  });
  return <svg width={200} height={200}>
            <GridControl {...args} width={200} height={200} xScale={xScale} yScale={yScale} gridVisibility={args.gridVisibility} />
        </svg>;
}`,..._.parameters?.docs?.source}}},v=[`Default`,`BothAxes`]}))();export{_ as BothAxes,g as Default,v as __namedExportsOrder,m as default};