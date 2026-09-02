import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{c as r,r as i,s as a,t as o}from"./chart-decorator-XFrbHfyl.js";import{a as s,d as c,m as l}from"./sample-data-Cx3-uFO8.js";import{t as u}from"./stories-BQvXZPpZ.js";import{n as d,t as f}from"./conversion-funnel-chart-CqG2PUtv.js";var p=e({Animation:()=>x,CustomRenderProps:()=>w,Default:()=>g,EmptyData:()=>S,FixedDimensions:()=>C,HighConversion:()=>v,Loading:()=>b,NegativeChange:()=>_,WithoutChangeIndicator:()=>y,WithoutTooltips:()=>T,__namedExportsOrder:()=>E,default:()=>h}),m,h,g,_,v,y,b,x,S,C,w,T,E,D=t((()=>{u(),d(),m=n(),h={title:`JS Packages/Charts Library/Charts/Conversion Funnel Chart`,component:f,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{mainRate:{control:{type:`number`,min:0,max:100,step:.1},description:`Main conversion rate to highlight`,table:{type:{summary:`number`}}},changeIndicator:{control:`text`,description:`Change indicator (e.g., +2%, -1.5%)`,table:{type:{summary:`string`}}},steps:{control:`object`,description:`Array of funnel steps`,table:{type:{summary:`FunnelStep[]`}}},loading:{control:`boolean`,description:`Whether the chart is in loading state`,table:{defaultValue:{summary:`false`}}},className:{control:`text`,description:`Additional CSS class name`,table:{type:{summary:`string`}}},height:{control:`text`,description:`Height of the chart container (e.g., "100%", "400px")`,table:{type:{summary:`string | number`}}},style:{control:`object`,description:`Custom styling for the chart container`,table:{type:{summary:`React.CSSProperties`}}},...i,...r},decorators:[o]},g={args:{...a,mainRate:10.3,changeIndicator:`+2%`,steps:s,loading:!1}},_={args:{mainRate:8.7,changeIndicator:`-1.6%`,steps:l,loading:!1}},v={args:{mainRate:18.7,changeIndicator:`+5.2%`,steps:c,loading:!1}},y={args:{mainRate:10.3,steps:s,loading:!1}},b={args:{mainRate:10.3,changeIndicator:`+2%`,steps:s,loading:!0}},x={args:{...g.args,animation:!0}},S={args:{mainRate:0,steps:[],loading:!1}},C={args:{...a,mainRate:10.3,changeIndicator:`+2%`,steps:s,loading:!1,height:`200px`}},w={args:{mainRate:10.3,changeIndicator:`+2%`,steps:s,renderMainMetric:({mainRate:e,changeIndicator:t,className:n})=>(0,m.jsxs)(`div`,{className:n,style:{background:`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,borderRadius:`12px`,padding:`24px`,marginBottom:`32px`,color:`white`,textAlign:`center`,height:`fit-content`},children:[(0,m.jsx)(`h3`,{style:{margin:`0 0 12px 0`,fontSize:`14px`,fontWeight:`500`,opacity:.9,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`Overall Conversion Rate`}),(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:`16px`},children:[(0,m.jsxs)(`span`,{style:{fontSize:`42px`,fontWeight:`bold`,fontFamily:`Inter, sans-serif`,lineHeight:1},children:[e.toFixed(1),`%`]}),t&&(0,m.jsx)(`span`,{style:{fontSize:`16px`,fontWeight:`600`,fontFamily:`Inter, sans-serif`,backgroundColor:t.startsWith(`+`)?`rgba(16, 185, 129, 0.2)`:`rgba(239, 68, 68, 0.2)`,color:t.startsWith(`+`)?`#10b981`:`#ef4444`,padding:`6px 12px`,borderRadius:`8px`,border:`1px solid ${t.startsWith(`+`)?`#10b981`:`#ef4444`}`},children:t})]}),(0,m.jsx)(`p`,{style:{margin:`12px 0 0 0`,fontSize:`12px`,opacity:.8,fontFamily:`Inter, sans-serif`},children:`Last 30 days vs previous period`})]}),renderTooltip:({step:e})=>(0,m.jsxs)(`div`,{style:{background:`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,borderRadius:`12px`,padding:`16px 20px`,color:`white`,fontFamily:`Inter, sans-serif`,boxShadow:`0 8px 32px rgba(118, 75, 162, 0.3)`,border:`none`,minWidth:`200px`},children:[(0,m.jsx)(`div`,{style:{fontSize:`11px`,fontWeight:`500`,opacity:.8,textTransform:`uppercase`,letterSpacing:`0.5px`,margin:`0 0 8px 0`},children:e.label}),(0,m.jsxs)(`div`,{style:{fontSize:`18px`,fontWeight:`bold`,margin:`0`,display:`flex`,alignItems:`center`,gap:`8px`},children:[e.rate.toFixed(1),`%`,e.count&&(0,m.jsxs)(`span`,{style:{fontSize:`14px`,fontWeight:`400`,opacity:.9},children:[`• `,e.count.toLocaleString(),` items`]})]})]})},decorators:[e=>(0,m.jsx)(e,{})]},T={args:{mainRate:10.3,changeIndicator:`+2%`,steps:s,renderMainMetric:()=>null,renderTooltip:()=>null}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 8.7,
    changeIndicator: '-1.6%',
    steps: lowConversionFunnelData,
    loading: false
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 18.7,
    changeIndicator: '+5.2%',
    steps: highConversionFunnelData,
    loading: false
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 0,
    steps: [],
    loading: false
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false,
    height: '200px'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    renderMainMetric: ({
      mainRate,
      changeIndicator,
      className
    }) => <div className={className} style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '32px',
      color: 'white',
      textAlign: 'center',
      height: 'fit-content'
    }}>
                <h3 style={{
        margin: '0 0 12px 0',
        fontSize: '14px',
        fontWeight: '500',
        opacity: 0.9,
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
                    Overall Conversion Rate
                </h3>
                <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px'
      }}>
                    <span style={{
          fontSize: '42px',
          fontWeight: 'bold',
          fontFamily: 'Inter, sans-serif',
          lineHeight: 1
        }}>
                        {mainRate.toFixed(1)}%
                    </span>
                    {changeIndicator && <span style={{
          fontSize: '16px',
          fontWeight: '600',
          fontFamily: 'Inter, sans-serif',
          backgroundColor: changeIndicator.startsWith('+') ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
          color: changeIndicator.startsWith('+') ? '#10b981' : '#ef4444',
          padding: '6px 12px',
          borderRadius: '8px',
          border: \`1px solid \${changeIndicator.startsWith('+') ? '#10b981' : '#ef4444'}\`
        }}>
                            {changeIndicator}
                        </span>}
                </div>
                <p style={{
        margin: '12px 0 0 0',
        fontSize: '12px',
        opacity: 0.8,
        fontFamily: 'Inter, sans-serif'
      }}>
                    Last 30 days vs previous period
                </p>
            </div>,
    renderTooltip: ({
      step
    }) => <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '12px',
      padding: '16px 20px',
      color: 'white',
      fontFamily: 'Inter, sans-serif',
      boxShadow: '0 8px 32px rgba(118, 75, 162, 0.3)',
      border: 'none',
      minWidth: '200px'
    }}>
                <div style={{
        fontSize: '11px',
        fontWeight: '500',
        opacity: 0.8,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        margin: '0 0 8px 0'
      }}>
                    {step.label}
                </div>
                <div style={{
        fontSize: '18px',
        fontWeight: 'bold',
        margin: '0',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
                    {step.rate.toFixed(1)}%
                    {step.count && <span style={{
          fontSize: '14px',
          fontWeight: '400',
          opacity: 0.9
        }}>
                            • {step.count.toLocaleString()} items
                        </span>}
                </div>
            </div>
  },
  decorators: [Story => <Story />]
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    renderMainMetric: () => null,
    renderTooltip: () => null
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`NegativeChange`,`HighConversion`,`WithoutChangeIndicator`,`Loading`,`Animation`,`EmptyData`,`FixedDimensions`,`CustomRenderProps`,`WithoutTooltips`]}));D();export{x as Animation,w as CustomRenderProps,g as Default,S as EmptyData,C as FixedDimensions,v as HighConversion,b as Loading,_ as NegativeChange,y as WithoutChangeIndicator,T as WithoutTooltips,E as __namedExportsOrder,h as default,D as n,p as t};