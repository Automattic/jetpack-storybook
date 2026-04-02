import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{t as r}from"./react-Wx6hiPly.js";import{n as i,t as a}from"./clsx-DsbNpQ49.js";import{t as o}from"./jsx-runtime-GmyBfqKJ.js";import{_n as s,vn as c}from"./iframe-5TxqNXsq.js";import{D as l,S as ee,_ as u,a as te,g as d,h as ne,i as f,m as re,n as ie,r as ae,t as p,y as m}from"./providers-DQSZTg2Z.js";import{O as oe,T as se,w as h}from"./esm-D90GDOn1.js";import{c as g,r as ce,s as _,t as v}from"./chart-decorator-BL_BYgtF.js";import{a as y,s as b,u as x}from"./sample-data-eEzeY8Vk.js";import{t as S}from"./stories-BTED2yNS.js";var C,w,T,E,D,O,k=e((()=>{C=`_loading_yix7d_4`,w=`_blurred_yix7d_59`,T=`_disabled_yix7d_99`,E=`_selected_yix7d_108`,D=`_stretch_yix7d_1`,O={"conversion-funnel-chart":`_conversion-funnel-chart_yix7d_1`,loading:C,"main-metric":`_main-metric_yix7d_9`,"main-rate":`_main-rate_yix7d_17`,"change-indicator":`_change-indicator_yix7d_29`,"funnel-container":`_funnel-container_yix7d_40`,"funnel-step":`_funnel-step_yix7d_49`,"funnel-step--animated":`_funnel-step--animated_yix7d_56`,blurred:w,"step-header":`_step-header_yix7d_63`,"step-label":`_step-label_yix7d_67`,"step-rate":`_step-rate_yix7d_80`,"bar-container":`_bar-container_yix7d_91`,disabled:T,"funnel-bar":`_funnel-bar_yix7d_103`,selected:E,"funnel-bar--animated":`_funnel-bar--animated_yix7d_112`,stretch:D,"tooltip-wrapper":`_tooltip-wrapper_yix7d_124`,"tooltip-title":`_tooltip-title_yix7d_137`,"tooltip-content":`_tooltip-content_yix7d_146`,"empty-state":`_empty-state_yix7d_155`}})),A,le,j=e((()=>{A=t(r(),1),le=e=>{let[t,n]=(0,A.useState)(null);return{clickedStep:t,handleBarClick:(0,A.useCallback)(r=>{t===r?(n(null),e?.()):n(r)},[t,e]),handleBarKeyDown:(0,A.useCallback)((r,i)=>{i.key===`Enter`||i.key===` `?(i.preventDefault(),t===r?(n(null),e?.()):n(r)):i.key===`Escape`&&(i.preventDefault(),n(null),e?.())},[t,e]),clearSelection:(0,A.useCallback)(()=>{n(null),e?.()},[e]),getStepState:(0,A.useCallback)(e=>({isClicked:t===e,isBlurred:t!==null&&t!==e}),[t])}}})),M=e((()=>{j()})),N,P,F,I,L=e((()=>{h(),s(),i(),N=t(r(),1),f(),p(),m(),k(),M(),P=o(),F=({mainRate:e,changeIndicator:t,steps:n,loading:r=!1,animation:i,className:o,chartId:s,height:u,style:d,renderStepLabel:f,renderStepRate:p,renderMainMetric:m,renderTooltip:h})=>{let g=re(s),{conversionFunnelChart:ce}=ie(),{getElementStyles:_,isColorPaletteResolved:v}=ne(),y=(0,N.useRef)(null),b=(0,N.useRef)(null),{tooltipData:x,tooltipLeft:S,tooltipTop:C,tooltipOpen:w,showTooltip:T,hideTooltip:E}=oe(),{handleBarClick:D,handleBarKeyDown:k,clearSelection:A,getStepState:j}=le(E),{containerRef:M,TooltipInPortal:F,containerBounds:I}=se({detectBounds:!0,scroll:!0}),L=(0,N.useCallback)(()=>{A(),b.current=null,E()},[A,E]),R=(0,N.useCallback)((e,t,n)=>{T({tooltipData:e,tooltipLeft:t,tooltipTop:n-10})},[T]),z=(0,N.useCallback)(e=>I.width===0||I.height===0?null:{x:e.clientX-I.left,y:e.clientY-I.top},[I.width,I.height,I.left,I.top]),B=(0,N.useCallback)(e=>{if(I.width===0||I.height===0)return null;let t=e.currentTarget.getBoundingClientRect();return{x:t.left+t.width/2-I.left,y:t.top-I.top}},[I.width,I.height,I.left,I.top]),V=(0,N.useCallback)((e,t,n)=>{b.current=t.currentTarget;let{isClicked:r}=j(e.id);if(r){n===`click`?D(e.id):k(e.id,t);return}if(n===`click`){D(e.id);let n=z(t);n&&R(e,n.x,n.y)}else{k(e.id,t);let n=B(t);n&&R(e,n.x,n.y)}},[j,D,k,R,z,B]),H=(0,N.useMemo)(()=>{let e=new Map;return n.forEach(t=>{e.set(t.id,{onClick:e=>{e.stopPropagation(),V(t,e,`click`)},onKeyDown:e=>{e.key===`Enter`||e.key===` `?V(t,e,`keyboard`):(b.current=e.currentTarget,k(t.id,e))}})}),e},[n,V,k]);(0,N.useEffect)(()=>{let e=e=>{b.current&&!b.current.contains(e.target)&&L()};return document.addEventListener(`mousedown`,e),()=>{document.removeEventListener(`mousedown`,e)}},[L]);let U=u??d?.height??`100%`,{primaryColor:W,backgroundColor:G,positiveChangeColor:K,negativeChangeColor:q}=ce,{color:J}=_?_({index:0,overrideColor:W}):{color:W||`#000000`},Y=t?.startsWith(`+`)?K:q,X=G||ee(J,.08)||`rgba(0, 0, 0, 0.08)`,Z=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`span`,{className:O[`main-rate`],children:l(e)}),t&&(0,P.jsx)(`span`,{className:O[`change-indicator`],style:{color:Y},children:t})]}),Q=e=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`div`,{className:O[`tooltip-title`],children:e.label}),(0,P.jsxs)(`div`,{className:O[`tooltip-content`],children:[l(e.rate),` • ${e.count??`no`} items`]})]}),$=!!(n&&n.length>0);ae({chartId:g,legendItems:[],chartType:`conversion-funnel`,isDataValid:$,metadata:(0,N.useMemo)(()=>({mainRate:e,changeIndicator:t,stepsCount:n?.length||0}),[e,t,n?.length])});let ue=te();if(!$)return(0,P.jsx)(c,{direction:`column`,"data-testid":`conversion-funnel-chart`,className:a(O[`conversion-funnel-chart`],r&&O.loading,o),style:{...d,height:U},children:(0,P.jsx)(`div`,{className:O[`empty-state`],children:r?`Loading...`:`No data available`})});let de=Math.max(...n.map(e=>e.rate));return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(c,{direction:`column`,"data-testid":`conversion-funnel-chart`,ref:e=>{M(e),y.current=e},className:a(O[`conversion-funnel-chart`],r&&O.loading,o),style:{...d,height:U},children:[m?m({mainRate:e,changeIndicator:t,className:O[`main-metric`],changeColor:Y}):(0,P.jsx)(`div`,{className:O[`main-metric`],children:Z()}),(0,P.jsx)(`div`,{className:O[`funnel-container`],children:n.map((e,t)=>{let n=e.rate/de*100,{isBlurred:o}=j(e.id);return(0,P.jsxs)(`div`,{"data-testid":`funnel-step`,className:a(O[`funnel-step`],v&&O[`funnel-step--animated`],o&&O.blurred),children:[(0,P.jsxs)(`div`,{className:O[`step-header`],children:[f?f({step:e,index:t,className:O[`step-label`]}):(0,P.jsx)(`span`,{className:O[`step-label`],children:e.label}),p?p({step:e,index:t,className:O[`step-rate`]}):(0,P.jsx)(`span`,{className:O[`step-rate`],children:l(e.rate)})]}),(0,P.jsx)(`div`,{className:a(O[`bar-container`],o&&O.disabled),onClick:H.get(e.id)?.onClick,onKeyDown:H.get(e.id)?.onKeyDown,role:`button`,tabIndex:o?-1:0,"aria-label":e.label,style:{backgroundColor:X},children:(0,P.jsx)(`div`,{className:a(O[`funnel-bar`],{[O[`funnel-bar--animated`]]:i&&!r&&!ue}),style:{height:`${n}%`,backgroundColor:J}})})]},e.id)})})]}),w&&x&&(()=>{let e=h?h({step:x,index:n.findIndex(e=>e.id===x.id),top:C,left:S,className:O[`tooltip-wrapper`]}):Q(x);return e?(0,P.jsx)(F,{top:C,left:S,className:O[`tooltip-wrapper`],children:e},Math.random()):null})()]})},I=e=>(0,N.useContext)(d)?(0,P.jsx)(F,{...e}):(0,P.jsx)(u,{children:(0,P.jsx)(F,{...e})}),I.displayName=`ConversionFunnelChart`})),R=n({Animation:()=>K,CustomRenderProps:()=>Y,Default:()=>V,EmptyData:()=>q,FixedDimensions:()=>J,HighConversion:()=>U,Loading:()=>G,NegativeChange:()=>H,WithoutChangeIndicator:()=>W,WithoutTooltips:()=>X,__namedExportsOrder:()=>Z,default:()=>B}),z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q=e((()=>{S(),L(),z=o(),B={title:`JS Packages/Charts Library/Charts/Conversion Funnel Chart`,component:I,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{mainRate:{control:{type:`number`,min:0,max:100,step:.1},description:`Main conversion rate to highlight`,table:{type:{summary:`number`}}},changeIndicator:{control:`text`,description:`Change indicator (e.g., +2%, -1.5%)`,table:{type:{summary:`string`}}},steps:{control:`object`,description:`Array of funnel steps`,table:{type:{summary:`FunnelStep[]`}}},loading:{control:`boolean`,description:`Whether the chart is in loading state`,table:{defaultValue:{summary:`false`}}},className:{control:`text`,description:`Additional CSS class name`,table:{type:{summary:`string`}}},height:{control:`text`,description:`Height of the chart container (e.g., "100%", "400px")`,table:{type:{summary:`string | number`}}},style:{control:`object`,description:`Custom styling for the chart container`,table:{type:{summary:`React.CSSProperties`}}},...ce,...g},decorators:[v]},V={args:{..._,mainRate:10.3,changeIndicator:`+2%`,steps:y,loading:!1}},H={args:{mainRate:8.7,changeIndicator:`-1.6%`,steps:x,loading:!1}},U={args:{mainRate:18.7,changeIndicator:`+5.2%`,steps:b,loading:!1}},W={args:{mainRate:10.3,steps:y,loading:!1}},G={args:{mainRate:10.3,changeIndicator:`+2%`,steps:y,loading:!0}},K={args:{...V.args,animation:!0}},q={args:{mainRate:0,steps:[],loading:!1}},J={args:{..._,mainRate:10.3,changeIndicator:`+2%`,steps:y,loading:!1,height:`200px`}},Y={args:{mainRate:10.3,changeIndicator:`+2%`,steps:y,renderMainMetric:({mainRate:e,changeIndicator:t,className:n})=>(0,z.jsxs)(`div`,{className:n,style:{background:`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,borderRadius:`12px`,padding:`24px`,marginBottom:`32px`,color:`white`,textAlign:`center`,height:`fit-content`},children:[(0,z.jsx)(`h3`,{style:{margin:`0 0 12px 0`,fontSize:`14px`,fontWeight:`500`,opacity:.9,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`Overall Conversion Rate`}),(0,z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:`16px`},children:[(0,z.jsxs)(`span`,{style:{fontSize:`42px`,fontWeight:`bold`,fontFamily:`Inter, sans-serif`,lineHeight:1},children:[e.toFixed(1),`%`]}),t&&(0,z.jsx)(`span`,{style:{fontSize:`16px`,fontWeight:`600`,fontFamily:`Inter, sans-serif`,backgroundColor:t.startsWith(`+`)?`rgba(16, 185, 129, 0.2)`:`rgba(239, 68, 68, 0.2)`,color:t.startsWith(`+`)?`#10b981`:`#ef4444`,padding:`6px 12px`,borderRadius:`8px`,border:`1px solid ${t.startsWith(`+`)?`#10b981`:`#ef4444`}`},children:t})]}),(0,z.jsx)(`p`,{style:{margin:`12px 0 0 0`,fontSize:`12px`,opacity:.8,fontFamily:`Inter, sans-serif`},children:`Last 30 days vs previous period`})]}),renderTooltip:({step:e})=>(0,z.jsxs)(`div`,{style:{background:`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,borderRadius:`12px`,padding:`16px 20px`,color:`white`,fontFamily:`Inter, sans-serif`,boxShadow:`0 8px 32px rgba(118, 75, 162, 0.3)`,border:`none`,minWidth:`200px`},children:[(0,z.jsx)(`div`,{style:{fontSize:`11px`,fontWeight:`500`,opacity:.8,textTransform:`uppercase`,letterSpacing:`0.5px`,margin:`0 0 8px 0`},children:e.label}),(0,z.jsxs)(`div`,{style:{fontSize:`18px`,fontWeight:`bold`,margin:`0`,display:`flex`,alignItems:`center`,gap:`8px`},children:[e.rate.toFixed(1),`%`,e.count&&(0,z.jsxs)(`span`,{style:{fontSize:`14px`,fontWeight:`400`,opacity:.9},children:[`• `,e.count.toLocaleString(),` items`]})]})]})},decorators:[e=>(0,z.jsx)(e,{})]},X={args:{mainRate:10.3,changeIndicator:`+2%`,steps:y,renderMainMetric:()=>null,renderTooltip:()=>null}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 8.7,
    changeIndicator: '-1.6%',
    steps: lowConversionFunnelData,
    loading: false
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 18.7,
    changeIndicator: '+5.2%',
    steps: highConversionFunnelData,
    loading: false
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: true
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 0,
    steps: [],
    loading: false
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false,
    height: '200px'
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    renderMainMetric: () => null,
    renderTooltip: () => null
  }
}`,...X.parameters?.docs?.source}}},Z=[`Default`,`NegativeChange`,`HighConversion`,`WithoutChangeIndicator`,`Loading`,`Animation`,`EmptyData`,`FixedDimensions`,`CustomRenderProps`,`WithoutTooltips`]}));Q();export{K as Animation,Y as CustomRenderProps,V as Default,q as EmptyData,J as FixedDimensions,U as HighConversion,G as Loading,H as NegativeChange,W as WithoutChangeIndicator,X as WithoutTooltips,Z as __namedExportsOrder,B as default,Q as n,R as t};