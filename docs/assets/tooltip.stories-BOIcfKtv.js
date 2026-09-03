import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,r}from"./line-chart-9zsVBZLN.js";import{i,n as a,r as o}from"./config-BInC0pLQ.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{r(),a(),s=t(),c={...o,title:`JS Packages/Charts Library/Charts/Line Chart/Tooltips`,component:o.component},l=e=>(0,s.jsx)(n,{...e}),u={...i},d=l.bind({}),d.args={...u},f=l.bind({}),f.args={...u,withTooltips:!1},p=l.bind({}),p.args={...u,withTooltipCrosshairs:{showVertical:!0,showHorizontal:!0}},m=l.bind({}),m.args={...u,withTooltipCrosshairs:{showVertical:!0}},h=l.bind({}),h.args={...u,withTooltipCrosshairs:{showHorizontal:!0}},g=l.bind({}),g.args={...u,renderTooltip:({tooltipData:e})=>{let t=e?.nearestDatum?.datum;if(!t)return null;let n=Object.entries(e?.datumByKey||{}).map(([e,{datum:t}])=>({key:e,value:t.value})).sort((e,t)=>t.value-e.value);return(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`h3`,{children:[t?.date?.toLocaleDateString(),` 💯 `]}),(0,s.jsx)(`table`,{style:{border:`1px solid black`,borderCollapse:`collapse`},children:(0,s.jsx)(`tbody`,{children:n.map(e=>(0,s.jsxs)(`tr`,{style:{border:`1px solid black`},children:[(0,s.jsx)(`td`,{style:{border:`1px solid black`},children:e.key}),(0,s.jsx)(`td`,{children:e.value})]},e.key))})})]})}},_=e=>({tooltipData:t})=>{let n=t?.nearestDatum?.datum;return n?(0,s.jsxs)(`div`,{style:{minWidth:e},children:[(0,s.jsx)(`strong`,{children:n.date?.toLocaleDateString()}),(0,s.jsx)(`div`,{children:Object.entries(t?.datumByKey||{}).map(([e,{datum:t}])=>`${e}: ${t.value}`).join(` · `)})]}):null},v=({cardWidth:e,tooltipMinWidth:t})=>(0,s.jsxs)(`div`,{style:{width:e,padding:24,boxSizing:`border-box`,overflow:`hidden`,border:`1px solid #ccc`,borderRadius:8},children:[(0,s.jsx)(`h4`,{style:{margin:`0 0 12px`},children:`Card with overflow: hidden`}),(0,s.jsx)(n,{...u,width:e-48,height:220,renderTooltip:_(t)})]}),y=v.bind({}),y.args={cardWidth:400,tooltipMinWidth:260},y.parameters={docs:{description:{story:`The box is wider than half the chart, so near the middle it fits on neither side. It leaves the chart and stops at the edge of the card instead of being cut off.`}}},b=v.bind({}),b.args={cardWidth:240,tooltipMinWidth:320},b.parameters={docs:{description:{story:`The box is wider than the whole card. It is pinned to the left edge of the card, so its start is always visible, and the card cuts the rest off. Nothing inside the chart can render outside an ancestor that hides its overflow.`}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <LineChart {...args} />`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <LineChart {...args} />`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <LineChart {...args} />`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <LineChart {...args} />`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <LineChart {...args} />`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <LineChart {...args} />`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`({
  cardWidth,
  tooltipMinWidth
}) => <div style={{
  width: cardWidth,
  padding: 24,
  boxSizing: 'border-box',
  overflow: 'hidden',
  border: '1px solid #ccc',
  borderRadius: 8
}}>
        <h4 style={{
    margin: '0 0 12px'
  }}>Card with overflow: hidden</h4>
        <LineChart {...tooltipStoryArgs} width={cardWidth - 48} height={220} renderTooltip={renderWideTooltip(tooltipMinWidth)} />
    </div>`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`({
  cardWidth,
  tooltipMinWidth
}) => <div style={{
  width: cardWidth,
  padding: 24,
  boxSizing: 'border-box',
  overflow: 'hidden',
  border: '1px solid #ccc',
  borderRadius: 8
}}>
        <h4 style={{
    margin: '0 0 12px'
  }}>Card with overflow: hidden</h4>
        <LineChart {...tooltipStoryArgs} width={cardWidth - 48} height={220} renderTooltip={renderWideTooltip(tooltipMinWidth)} />
    </div>`,...b.parameters?.docs?.source}}},x=[`Default`,`NoTooltips`,`Crosshairs`,`CrosshairVertical`,`CrosshairHorizontal`,`Custom`,`InsideClippingCard`,`WiderThanClippingCard`]}))();export{h as CrosshairHorizontal,m as CrosshairVertical,p as Crosshairs,g as Custom,d as Default,y as InsideClippingCard,f as NoTooltips,b as WiderThanClippingCard,x as __namedExportsOrder,c as default};