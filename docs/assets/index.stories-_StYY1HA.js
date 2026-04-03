import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{t as r}from"./react-Wx6hiPly.js";import{n as i,t as a}from"./clsx-DsbNpQ49.js";import{t as o}from"./jsx-runtime-GmyBfqKJ.js";import{_n as s,vn as c}from"./iframe-C0E50GI8.js";import{D as l,S as ee,_ as u,a as te,g as d,h as ne,i as f,m as p,n as re,r as ie,t as m,y as h}from"./providers-DQSZTg2Z.js";import{O as ae,T as oe,w as g}from"./esm-D90GDOn1.js";import{c as _,r as v,s as y,t as b}from"./chart-decorator-BL_BYgtF.js";import{a as x,s as S,u as C}from"./sample-data-eEzeY8Vk.js";import{t as w}from"./stories-BTED2yNS.js";var T,E,D=e((()=>{T=`_stretch_iz0nk_1`,E={"conversion-funnel-chart":`_conversion-funnel-chart_iz0nk_1`,"conversion-funnel-chart--loading":`_conversion-funnel-chart--loading_iz0nk_4`,"main-metric":`_main-metric_iz0nk_9`,"main-rate":`_main-rate_iz0nk_17`,"change-indicator":`_change-indicator_iz0nk_29`,"funnel-container":`_funnel-container_iz0nk_40`,"funnel-step":`_funnel-step_iz0nk_49`,"funnel-step--animated":`_funnel-step--animated_iz0nk_56`,"funnel-step--blurred":`_funnel-step--blurred_iz0nk_59`,"step-header":`_step-header_iz0nk_63`,"step-label":`_step-label_iz0nk_67`,"step-rate":`_step-rate_iz0nk_80`,"bar-container":`_bar-container_iz0nk_91`,"funnel-bar":`_funnel-bar_iz0nk_100`,"funnel-bar--animated":`_funnel-bar--animated_iz0nk_105`,stretch:T,"tooltip-wrapper":`_tooltip-wrapper_iz0nk_117`,"tooltip-title":`_tooltip-title_iz0nk_130`,"tooltip-content":`_tooltip-content_iz0nk_139`,"empty-state":`_empty-state_iz0nk_148`}})),O,k,A=e((()=>{O=t(r(),1),k=e=>{let[t,n]=(0,O.useState)(null);return{clickedStep:t,handleBarClick:(0,O.useCallback)(r=>{t===r?(n(null),e?.()):n(r)},[t,e]),handleBarKeyDown:(0,O.useCallback)((r,i)=>{i.key===`Enter`||i.key===` `?(i.preventDefault(),t===r?(n(null),e?.()):n(r)):i.key===`Escape`&&(i.preventDefault(),n(null),e?.())},[t,e]),clearSelection:(0,O.useCallback)(()=>{n(null),e?.()},[e]),getStepState:(0,O.useCallback)(e=>({isClicked:t===e,isBlurred:t!==null&&t!==e}),[t])}}})),j=e((()=>{A()})),M,N,P,F,I=e((()=>{g(),s(),i(),M=t(r(),1),f(),m(),h(),D(),j(),N=o(),P=({mainRate:e,changeIndicator:t,steps:n,loading:r=!1,animation:i,className:o,chartId:s,height:u,style:d,renderStepLabel:f,renderStepRate:m,renderMainMetric:h,renderTooltip:g})=>{let _=p(s),{conversionFunnelChart:v}=re(),{getElementStyles:y,isColorPaletteResolved:b}=ne(),x=(0,M.useRef)(null),S=(0,M.useRef)(null),{tooltipData:C,tooltipLeft:w,tooltipTop:T,tooltipOpen:D,showTooltip:O,hideTooltip:A}=ae(),{handleBarClick:j,handleBarKeyDown:P,clearSelection:F,getStepState:I}=k(A),{containerRef:L,TooltipInPortal:R,containerBounds:z}=oe({detectBounds:!0,scroll:!0}),B=(0,M.useCallback)(()=>{F(),S.current=null,A()},[F,A]),V=(0,M.useCallback)((e,t,n)=>{O({tooltipData:e,tooltipLeft:t,tooltipTop:n-10})},[O]),H=(0,M.useCallback)(e=>z.width===0||z.height===0?null:{x:e.clientX-z.left,y:e.clientY-z.top},[z.width,z.height,z.left,z.top]),U=(0,M.useCallback)(e=>{if(z.width===0||z.height===0)return null;let t=e.currentTarget.getBoundingClientRect();return{x:t.left+t.width/2-z.left,y:t.top-z.top}},[z.width,z.height,z.left,z.top]),W=(0,M.useCallback)((e,t,n)=>{S.current=t.currentTarget;let{isClicked:r}=I(e.id);if(r){n===`click`?j(e.id):P(e.id,t);return}if(n===`click`){j(e.id);let n=H(t);n&&V(e,n.x,n.y)}else{P(e.id,t);let n=U(t);n&&V(e,n.x,n.y)}},[I,j,P,V,H,U]),G=(0,M.useMemo)(()=>{let e=new Map;return n.forEach(t=>{e.set(t.id,{onClick:e=>{e.stopPropagation(),W(t,e,`click`)},onKeyDown:e=>{e.key===`Enter`||e.key===` `?W(t,e,`keyboard`):(S.current=e.currentTarget,P(t.id,e))}})}),e},[n,W,P]);(0,M.useEffect)(()=>{let e=e=>{S.current&&!S.current.contains(e.target)&&B()};return document.addEventListener(`mousedown`,e),()=>{document.removeEventListener(`mousedown`,e)}},[B]);let K=u??d?.height??`100%`,{primaryColor:q,backgroundColor:J,positiveChangeColor:Y,negativeChangeColor:X}=v,{color:Z}=y?y({index:0,overrideColor:q}):{color:q||`#000000`},Q=t?.startsWith(`+`)?Y:X,se=J||ee(Z,.08)||`rgba(0, 0, 0, 0.08)`,ce=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`span`,{className:E[`main-rate`],children:l(e)}),t&&(0,N.jsx)(`span`,{className:E[`change-indicator`],style:{color:Q},children:t})]}),le=e=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`div`,{className:E[`tooltip-title`],children:e.label}),(0,N.jsxs)(`div`,{className:E[`tooltip-content`],children:[l(e.rate),` • ${e.count??`no`} items`]})]}),$=!!(n&&n.length>0);ie({chartId:_,legendItems:[],chartType:`conversion-funnel`,isDataValid:$,metadata:(0,M.useMemo)(()=>({mainRate:e,changeIndicator:t,stepsCount:n?.length||0}),[e,t,n?.length])});let ue=te();if(!$)return(0,N.jsx)(c,{direction:`column`,"data-testid":`conversion-funnel-chart`,className:a(E[`conversion-funnel-chart`],r&&E[`conversion-funnel-chart--loading`],o),style:{...d,height:K},children:(0,N.jsx)(`div`,{className:E[`empty-state`],children:r?`Loading...`:`No data available`})});let de=Math.max(...n.map(e=>e.rate));return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(c,{direction:`column`,"data-testid":`conversion-funnel-chart`,ref:e=>{L(e),x.current=e},className:a(E[`conversion-funnel-chart`],r&&E[`conversion-funnel-chart--loading`],o),style:{...d,height:K},children:[h?h({mainRate:e,changeIndicator:t,className:E[`main-metric`],changeColor:Q}):(0,N.jsx)(`div`,{className:E[`main-metric`],children:ce()}),(0,N.jsx)(`div`,{className:E[`funnel-container`],children:n.map((e,t)=>{let n=e.rate/de*100,{isBlurred:o}=I(e.id);return(0,N.jsxs)(`div`,{"data-testid":`funnel-step`,className:a(E[`funnel-step`],b&&E[`funnel-step--animated`],o&&E[`funnel-step--blurred`]),children:[(0,N.jsxs)(`div`,{className:E[`step-header`],children:[f?f({step:e,index:t,className:E[`step-label`]}):(0,N.jsx)(`span`,{className:E[`step-label`],children:e.label}),m?m({step:e,index:t,className:E[`step-rate`]}):(0,N.jsx)(`span`,{className:E[`step-rate`],children:l(e.rate)})]}),(0,N.jsx)(`div`,{className:E[`bar-container`],onClick:G.get(e.id)?.onClick,onKeyDown:G.get(e.id)?.onKeyDown,role:`button`,tabIndex:o?-1:0,"aria-label":e.label,style:{backgroundColor:se},children:(0,N.jsx)(`div`,{className:a(E[`funnel-bar`],{[E[`funnel-bar--animated`]]:i&&!r&&!ue}),style:{height:`${n}%`,backgroundColor:Z}})})]},e.id)})})]}),D&&C&&(()=>{let e=g?g({step:C,index:n.findIndex(e=>e.id===C.id),top:T,left:w,className:E[`tooltip-wrapper`]}):le(C);return e?(0,N.jsx)(R,{top:T,left:w,className:E[`tooltip-wrapper`],children:e},Math.random()):null})()]})},F=e=>(0,M.useContext)(d)?(0,N.jsx)(P,{...e}):(0,N.jsx)(u,{children:(0,N.jsx)(P,{...e})}),F.displayName=`ConversionFunnelChart`})),L=n({Animation:()=>G,CustomRenderProps:()=>J,Default:()=>B,EmptyData:()=>K,FixedDimensions:()=>q,HighConversion:()=>H,Loading:()=>W,NegativeChange:()=>V,WithoutChangeIndicator:()=>U,WithoutTooltips:()=>Y,__namedExportsOrder:()=>X,default:()=>z}),R,z,B,V,H,U,W,G,K,q,J,Y,X,Z=e((()=>{w(),I(),R=o(),z={title:`JS Packages/Charts Library/Charts/Conversion Funnel Chart`,component:F,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{mainRate:{control:{type:`number`,min:0,max:100,step:.1},description:`Main conversion rate to highlight`,table:{type:{summary:`number`}}},changeIndicator:{control:`text`,description:`Change indicator (e.g., +2%, -1.5%)`,table:{type:{summary:`string`}}},steps:{control:`object`,description:`Array of funnel steps`,table:{type:{summary:`FunnelStep[]`}}},loading:{control:`boolean`,description:`Whether the chart is in loading state`,table:{defaultValue:{summary:`false`}}},className:{control:`text`,description:`Additional CSS class name`,table:{type:{summary:`string`}}},height:{control:`text`,description:`Height of the chart container (e.g., "100%", "400px")`,table:{type:{summary:`string | number`}}},style:{control:`object`,description:`Custom styling for the chart container`,table:{type:{summary:`React.CSSProperties`}}},...v,..._},decorators:[b]},B={args:{...y,mainRate:10.3,changeIndicator:`+2%`,steps:x,loading:!1}},V={args:{mainRate:8.7,changeIndicator:`-1.6%`,steps:C,loading:!1}},H={args:{mainRate:18.7,changeIndicator:`+5.2%`,steps:S,loading:!1}},U={args:{mainRate:10.3,steps:x,loading:!1}},W={args:{mainRate:10.3,changeIndicator:`+2%`,steps:x,loading:!0}},G={args:{...B.args,animation:!0}},K={args:{mainRate:0,steps:[],loading:!1}},q={args:{...y,mainRate:10.3,changeIndicator:`+2%`,steps:x,loading:!1,height:`200px`}},J={args:{mainRate:10.3,changeIndicator:`+2%`,steps:x,renderMainMetric:({mainRate:e,changeIndicator:t,className:n})=>(0,R.jsxs)(`div`,{className:n,style:{background:`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,borderRadius:`12px`,padding:`24px`,marginBottom:`32px`,color:`white`,textAlign:`center`,height:`fit-content`},children:[(0,R.jsx)(`h3`,{style:{margin:`0 0 12px 0`,fontSize:`14px`,fontWeight:`500`,opacity:.9,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`Overall Conversion Rate`}),(0,R.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:`16px`},children:[(0,R.jsxs)(`span`,{style:{fontSize:`42px`,fontWeight:`bold`,fontFamily:`Inter, sans-serif`,lineHeight:1},children:[e.toFixed(1),`%`]}),t&&(0,R.jsx)(`span`,{style:{fontSize:`16px`,fontWeight:`600`,fontFamily:`Inter, sans-serif`,backgroundColor:t.startsWith(`+`)?`rgba(16, 185, 129, 0.2)`:`rgba(239, 68, 68, 0.2)`,color:t.startsWith(`+`)?`#10b981`:`#ef4444`,padding:`6px 12px`,borderRadius:`8px`,border:`1px solid ${t.startsWith(`+`)?`#10b981`:`#ef4444`}`},children:t})]}),(0,R.jsx)(`p`,{style:{margin:`12px 0 0 0`,fontSize:`12px`,opacity:.8,fontFamily:`Inter, sans-serif`},children:`Last 30 days vs previous period`})]}),renderTooltip:({step:e})=>(0,R.jsxs)(`div`,{style:{background:`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,borderRadius:`12px`,padding:`16px 20px`,color:`white`,fontFamily:`Inter, sans-serif`,boxShadow:`0 8px 32px rgba(118, 75, 162, 0.3)`,border:`none`,minWidth:`200px`},children:[(0,R.jsx)(`div`,{style:{fontSize:`11px`,fontWeight:`500`,opacity:.8,textTransform:`uppercase`,letterSpacing:`0.5px`,margin:`0 0 8px 0`},children:e.label}),(0,R.jsxs)(`div`,{style:{fontSize:`18px`,fontWeight:`bold`,margin:`0`,display:`flex`,alignItems:`center`,gap:`8px`},children:[e.rate.toFixed(1),`%`,e.count&&(0,R.jsxs)(`span`,{style:{fontSize:`14px`,fontWeight:`400`,opacity:.9},children:[`• `,e.count.toLocaleString(),` items`]})]})]})},decorators:[e=>(0,R.jsx)(e,{})]},Y={args:{mainRate:10.3,changeIndicator:`+2%`,steps:x,renderMainMetric:()=>null,renderTooltip:()=>null}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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