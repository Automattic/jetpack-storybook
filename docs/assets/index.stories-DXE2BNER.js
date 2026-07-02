import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{t as r}from"./react-DVCOKQW8.js";import{n as i,t as a}from"./clsx-SUvPW2lx.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{A as s,E as ee,O as c,P as l,a as te,c as ne,k as u,o as d,q as f,r as re,t as p,z as ie}from"./providers-BQ8Ha7b7.js";import{F as ae,j as oe,k as m}from"./esm-D1c-lJYS.js";import{c as h,r as g,s as _,t as v}from"./chart-decorator-B4pv9Ypw.js";import{a as y,p as b,u as x}from"./sample-data-BwMYxnT1.js";import{t as S}from"./stories-CY2ySLWB.js";import{i as C,t as w}from"./build-module-o8SdkXwg.js";var T,E,D=n((()=>{T=`_stretch_fucar_1`,E={"conversion-funnel-chart--loading":`_conversion-funnel-chart--loading_fucar_1`,"main-metric":`_main-metric_fucar_6`,"main-rate":`_main-rate_fucar_10`,"change-indicator":`_change-indicator_fucar_21`,"funnel-container":`_funnel-container_fucar_31`,"funnel-step":`_funnel-step_fucar_37`,"funnel-step--animated":`_funnel-step--animated_fucar_42`,"funnel-step--blurred":`_funnel-step--blurred_fucar_45`,"step-label":`_step-label_fucar_49`,"step-rate":`_step-rate_fucar_59`,"bar-container":`_bar-container_fucar_66`,"funnel-bar":`_funnel-bar_fucar_73`,"funnel-bar--animated":`_funnel-bar--animated_fucar_78`,stretch:T,"tooltip-wrapper":`_tooltip-wrapper_fucar_90`,"tooltip-title":`_tooltip-title_fucar_98`,"tooltip-content":`_tooltip-content_fucar_106`,"empty-state":`_empty-state_fucar_114`}})),O,k,A=n((()=>{O=t(r(),1),k=e=>{let[t,n]=(0,O.useState)(null);return{clickedStep:t,handleBarClick:(0,O.useCallback)(r=>{t===r?(n(null),e?.()):n(r)},[t,e]),handleBarKeyDown:(0,O.useCallback)((r,i)=>{i.key===`Enter`||i.key===` `?(i.preventDefault(),t===r?(n(null),e?.()):n(r)):i.key===`Escape`&&(i.preventDefault(),n(null),e?.())},[t,e]),clearSelection:(0,O.useCallback)(()=>{n(null),e?.()},[e]),getStepState:(0,O.useCallback)(e=>({isClicked:t===e,isBlurred:t!==null&&t!==e}),[t])}}})),j=n((()=>{A()})),M,N,P,F,I=n((()=>{m(),w(),i(),M=t(r(),1),d(),p(),l(),D(),j(),N=o(),P=({mainRate:e,changeIndicator:t,steps:n,loading:r=!1,animation:i,className:o,chartId:s,height:l,style:u,renderStepLabel:d,renderStepRate:p,renderMainMetric:m,renderTooltip:h})=>{let g=ee(s),{conversionFunnelChart:_}=re(),{getElementStyles:v,isColorPaletteResolved:y}=c(),b=(0,M.useRef)(null),x=(0,M.useRef)(null),{tooltipData:S,tooltipLeft:w,tooltipTop:T,tooltipOpen:D,showTooltip:O,hideTooltip:A}=ae(),{handleBarClick:j,handleBarKeyDown:P,clearSelection:F,getStepState:I}=k(A),{containerRef:L,TooltipInPortal:R,containerBounds:z}=oe({detectBounds:!0,scroll:!0}),B=(0,M.useCallback)(()=>{F(),x.current=null,A()},[F,A]),V=(0,M.useCallback)((e,t,n)=>{O({tooltipData:e,tooltipLeft:t,tooltipTop:n-10})},[O]),H=(0,M.useCallback)(e=>z.width===0||z.height===0?null:{x:e.clientX-z.left,y:e.clientY-z.top},[z.width,z.height,z.left,z.top]),U=(0,M.useCallback)(e=>{if(z.width===0||z.height===0)return null;let t=e.currentTarget.getBoundingClientRect();return{x:t.left+t.width/2-z.left,y:t.top-z.top}},[z.width,z.height,z.left,z.top]),W=(0,M.useCallback)((e,t,n)=>{x.current=t.currentTarget;let{isClicked:r}=I(e.id);if(r){n===`click`?j(e.id):P(e.id,t);return}if(n===`click`){j(e.id);let n=H(t);n&&V(e,n.x,n.y)}else{P(e.id,t);let n=U(t);n&&V(e,n.x,n.y)}},[I,j,P,V,H,U]),G=(0,M.useMemo)(()=>{let e=new Map;return n.forEach(t=>{e.set(t.id,{onClick:e=>{e.stopPropagation(),W(t,e,`click`)},onKeyDown:e=>{e.key===`Enter`||e.key===` `?W(t,e,`keyboard`):(x.current=e.currentTarget,P(t.id,e))}})}),e},[n,W,P]);(0,M.useEffect)(()=>{let e=e=>{x.current&&!x.current.contains(e.target)&&B()};return document.addEventListener(`mousedown`,e),()=>{document.removeEventListener(`mousedown`,e)}},[B]);let K=l??u?.height??`100%`,{primaryColor:q,backgroundColor:J,positiveChangeColor:Y,negativeChangeColor:X}=_,{color:Z}=v?v({index:0,overrideColor:q}):{color:q||`#000000`},Q=t?.startsWith(`+`)?Y:X,se=J||ie(Z,.08)||`rgba(0, 0, 0, 0.08)`,ce=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`span`,{className:E[`main-rate`],children:f(e)}),t&&(0,N.jsx)(`span`,{className:E[`change-indicator`],style:{color:Q},children:t})]}),le=e=>(0,N.jsxs)(C,{direction:`column`,align:`flex-start`,gap:`xs`,children:[(0,N.jsx)(`div`,{className:E[`tooltip-title`],children:e.label}),(0,N.jsxs)(`div`,{className:E[`tooltip-content`],children:[f(e.rate),` • ${e.count??`no`} items`]})]}),$=!!(n&&n.length>0);te({chartId:g,legendItems:[],chartType:`conversion-funnel`,isDataValid:$,metadata:(0,M.useMemo)(()=>({mainRate:e,changeIndicator:t,stepsCount:n?.length||0}),[e,t,n?.length])});let ue=ne();if(!$)return(0,N.jsx)(C,{direction:`column`,align:`center`,justify:`center`,"data-testid":`conversion-funnel-chart`,className:a(E[`conversion-funnel-chart`],r&&E[`conversion-funnel-chart--loading`],o),style:{...u,height:K},children:(0,N.jsx)(`div`,{className:E[`empty-state`],children:r?`Loading...`:`No data available`})});let de=Math.max(...n.map(e=>e.rate));return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(C,{direction:`column`,gap:`xl`,"data-testid":`conversion-funnel-chart`,ref:e=>{L(e),b.current=e},className:a(E[`conversion-funnel-chart`],r&&E[`conversion-funnel-chart--loading`],o),style:{...u,height:K},children:[m?m({mainRate:e,changeIndicator:t,className:E[`main-metric`],changeColor:Q}):(0,N.jsx)(C,{direction:`row`,align:`baseline`,gap:`sm`,className:E[`main-metric`],children:ce()}),(0,N.jsx)(C,{direction:`row`,align:`flex-end`,gap:`lg`,className:E[`funnel-container`],children:n.map((e,t)=>{let n=e.rate/de*100,{isBlurred:o}=I(e.id);return(0,N.jsxs)(C,{direction:`column`,"data-testid":`funnel-step`,className:a(E[`funnel-step`],y&&E[`funnel-step--animated`],o&&E[`funnel-step--blurred`]),gap:`xl`,children:[(0,N.jsxs)(C,{direction:`column`,gap:`xs`,children:[d?d({step:e,index:t,className:E[`step-label`]}):(0,N.jsx)(`span`,{className:E[`step-label`],children:e.label}),p?p({step:e,index:t,className:E[`step-rate`]}):(0,N.jsx)(`span`,{className:E[`step-rate`],children:f(e.rate)})]}),(0,N.jsx)(C,{direction:`column`,justify:`flex-end`,className:E[`bar-container`],onClick:G.get(e.id)?.onClick,onKeyDown:G.get(e.id)?.onKeyDown,role:`button`,tabIndex:o?-1:0,"aria-label":e.label,style:{backgroundColor:se},children:(0,N.jsx)(`div`,{className:a(E[`funnel-bar`],{[E[`funnel-bar--animated`]]:i&&!r&&!ue}),style:{height:`${n}%`,backgroundColor:Z}})})]},e.id)})})]}),D&&S&&(()=>{let e=h?h({step:S,index:n.findIndex(e=>e.id===S.id),top:T,left:w,className:E[`tooltip-wrapper`]}):le(S);return e?(0,N.jsx)(R,{top:T,left:w,className:E[`tooltip-wrapper`],children:e},Math.random()):null})()]})},F=e=>(0,M.useContext)(u)?(0,N.jsx)(P,{...e}):(0,N.jsx)(s,{children:(0,N.jsx)(P,{...e})}),F.displayName=`ConversionFunnelChart`})),L=e({Animation:()=>G,CustomRenderProps:()=>J,Default:()=>B,EmptyData:()=>K,FixedDimensions:()=>q,HighConversion:()=>H,Loading:()=>W,NegativeChange:()=>V,WithoutChangeIndicator:()=>U,WithoutTooltips:()=>Y,__namedExportsOrder:()=>X,default:()=>z}),R,z,B,V,H,U,W,G,K,q,J,Y,X,Z=n((()=>{S(),I(),R=o(),z={title:`JS Packages/Charts Library/Charts/Conversion Funnel Chart`,component:F,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{mainRate:{control:{type:`number`,min:0,max:100,step:.1},description:`Main conversion rate to highlight`,table:{type:{summary:`number`}}},changeIndicator:{control:`text`,description:`Change indicator (e.g., +2%, -1.5%)`,table:{type:{summary:`string`}}},steps:{control:`object`,description:`Array of funnel steps`,table:{type:{summary:`FunnelStep[]`}}},loading:{control:`boolean`,description:`Whether the chart is in loading state`,table:{defaultValue:{summary:`false`}}},className:{control:`text`,description:`Additional CSS class name`,table:{type:{summary:`string`}}},height:{control:`text`,description:`Height of the chart container (e.g., "100%", "400px")`,table:{type:{summary:`string | number`}}},style:{control:`object`,description:`Custom styling for the chart container`,table:{type:{summary:`React.CSSProperties`}}},...g,...h},decorators:[v]},B={args:{..._,mainRate:10.3,changeIndicator:`+2%`,steps:y,loading:!1}},V={args:{mainRate:8.7,changeIndicator:`-1.6%`,steps:b,loading:!1}},H={args:{mainRate:18.7,changeIndicator:`+5.2%`,steps:x,loading:!1}},U={args:{mainRate:10.3,steps:y,loading:!1}},W={args:{mainRate:10.3,changeIndicator:`+2%`,steps:y,loading:!0}},G={args:{...B.args,animation:!0}},K={args:{mainRate:0,steps:[],loading:!1}},q={args:{..._,mainRate:10.3,changeIndicator:`+2%`,steps:y,loading:!1,height:`200px`}},J={args:{mainRate:10.3,changeIndicator:`+2%`,steps:y,renderMainMetric:({mainRate:e,changeIndicator:t,className:n})=>(0,R.jsxs)(`div`,{className:n,style:{background:`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,borderRadius:`12px`,padding:`24px`,marginBottom:`32px`,color:`white`,textAlign:`center`,height:`fit-content`},children:[(0,R.jsx)(`h3`,{style:{margin:`0 0 12px 0`,fontSize:`14px`,fontWeight:`500`,opacity:.9,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`Overall Conversion Rate`}),(0,R.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:`16px`},children:[(0,R.jsxs)(`span`,{style:{fontSize:`42px`,fontWeight:`bold`,fontFamily:`Inter, sans-serif`,lineHeight:1},children:[e.toFixed(1),`%`]}),t&&(0,R.jsx)(`span`,{style:{fontSize:`16px`,fontWeight:`600`,fontFamily:`Inter, sans-serif`,backgroundColor:t.startsWith(`+`)?`rgba(16, 185, 129, 0.2)`:`rgba(239, 68, 68, 0.2)`,color:t.startsWith(`+`)?`#10b981`:`#ef4444`,padding:`6px 12px`,borderRadius:`8px`,border:`1px solid ${t.startsWith(`+`)?`#10b981`:`#ef4444`}`},children:t})]}),(0,R.jsx)(`p`,{style:{margin:`12px 0 0 0`,fontSize:`12px`,opacity:.8,fontFamily:`Inter, sans-serif`},children:`Last 30 days vs previous period`})]}),renderTooltip:({step:e})=>(0,R.jsxs)(`div`,{style:{background:`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,borderRadius:`12px`,padding:`16px 20px`,color:`white`,fontFamily:`Inter, sans-serif`,boxShadow:`0 8px 32px rgba(118, 75, 162, 0.3)`,border:`none`,minWidth:`200px`},children:[(0,R.jsx)(`div`,{style:{fontSize:`11px`,fontWeight:`500`,opacity:.8,textTransform:`uppercase`,letterSpacing:`0.5px`,margin:`0 0 8px 0`},children:e.label}),(0,R.jsxs)(`div`,{style:{fontSize:`18px`,fontWeight:`bold`,margin:`0`,display:`flex`,alignItems:`center`,gap:`8px`},children:[e.rate.toFixed(1),`%`,e.count&&(0,R.jsxs)(`span`,{style:{fontSize:`14px`,fontWeight:`400`,opacity:.9},children:[`• `,e.count.toLocaleString(),` items`]})]})]})},decorators:[e=>(0,R.jsx)(e,{})]},Y={args:{mainRate:10.3,changeIndicator:`+2%`,steps:y,renderMainMetric:()=>null,renderTooltip:()=>null}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 8.7,
    changeIndicator: '-1.6%',
    steps: lowConversionFunnelData,
    loading: false
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 18.7,
    changeIndicator: '+5.2%',
    steps: highConversionFunnelData,
    loading: false
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: true
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 0,
    steps: [],
    loading: false
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false,
    height: '200px'
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    renderMainMetric: () => null,
    renderTooltip: () => null
  }
}`,...Y.parameters?.docs?.source}}},X=[`Default`,`NegativeChange`,`HighConversion`,`WithoutChangeIndicator`,`Loading`,`Animation`,`EmptyData`,`FixedDimensions`,`CustomRenderProps`,`WithoutTooltips`]}));Z();export{G as Animation,J as CustomRenderProps,B as Default,K as EmptyData,q as FixedDimensions,H as HighConversion,W as Loading,V as NegativeChange,U as WithoutChangeIndicator,Y as WithoutTooltips,X as __namedExportsOrder,z as default,Z as n,L as t};