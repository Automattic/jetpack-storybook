import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{t as r}from"./react-Wx6hiPly.js";import{n as i,t as a}from"./clsx-DsbNpQ49.js";import{t as o}from"./jsx-runtime-GmyBfqKJ.js";import{_n as s,vn as c}from"./iframe-DzqWTYbF.js";import{D as l,S as ee,_ as u,a as te,g as d,h as ne,i as f,m as re,n as ie,r as ae,t as p,y as m}from"./providers-C-344o42.js";import{O as oe,T as se,w as h}from"./esm-D90GDOn1.js";import{c as g,r as ce,s as _,t as v}from"./chart-decorator-DxHu2QG2.js";import{a as y,s as b,u as x}from"./sample-data-eEzeY8Vk.js";import{t as S}from"./stories-Bj6Rj93r.js";var C,w,T,E,D,O,k,A=e((()=>{C=`_conversionFunnelChart_c19hy_1`,w=`_loading_c19hy_4`,T=`_blurred_c19hy_57`,E=`_disabled_c19hy_98`,D=`_selected_c19hy_108`,O=`_stretch_c19hy_1`,k={conversionFunnelChart:C,loading:w,"main-metric":`_main-metric_c19hy_9`,"main-rate":`_main-rate_c19hy_17`,"change-indicator":`_change-indicator_c19hy_29`,"funnel-container":`_funnel-container_c19hy_40`,"funnel-step":`_funnel-step_c19hy_49`,blurred:T,"step-header":`_step-header_c19hy_61`,"step-label":`_step-label_c19hy_65`,"step-rate":`_step-rate_c19hy_78`,"bar-container":`_bar-container_c19hy_89`,disabled:E,"funnel-bar":`_funnel-bar_c19hy_102`,selected:D,"funnel-bar--animated":`_funnel-bar--animated_c19hy_112`,stretch:O,"tooltip-wrapper":`_tooltip-wrapper_c19hy_124`,"tooltip-title":`_tooltip-title_c19hy_137`,"tooltip-content":`_tooltip-content_c19hy_146`,"empty-state":`_empty-state_c19hy_155`}})),j,M,le=e((()=>{j=t(r(),1),M=e=>{let[t,n]=(0,j.useState)(null);return{clickedStep:t,handleBarClick:(0,j.useCallback)(r=>{t===r?(n(null),e?.()):n(r)},[t,e]),handleBarKeyDown:(0,j.useCallback)((r,i)=>{i.key===`Enter`||i.key===` `?(i.preventDefault(),t===r?(n(null),e?.()):n(r)):i.key===`Escape`&&(i.preventDefault(),n(null),e?.())},[t,e]),clearSelection:(0,j.useCallback)(()=>{n(null),e?.()},[e]),getStepState:(0,j.useCallback)(e=>({isClicked:t===e,isBlurred:t!==null&&t!==e}),[t])}}})),N=e((()=>{le()})),P,F,I,L,R=e((()=>{h(),s(),i(),P=t(r(),1),f(),p(),m(),A(),N(),F=o(),I=({mainRate:e,changeIndicator:t,steps:n,loading:r=!1,animation:i,className:o,chartId:s,height:u,style:d,renderStepLabel:f,renderStepRate:p,renderMainMetric:m,renderTooltip:h})=>{let g=re(s),{conversionFunnelChart:ce}=ie(),{getElementStyles:_}=ne(),v=(0,P.useRef)(null),y=(0,P.useRef)(null),{tooltipData:b,tooltipLeft:x,tooltipTop:S,tooltipOpen:C,showTooltip:w,hideTooltip:T}=oe(),{handleBarClick:E,handleBarKeyDown:D,clearSelection:O,getStepState:A}=M(T),{containerRef:j,TooltipInPortal:le,containerBounds:N}=se({detectBounds:!0,scroll:!0}),I=(0,P.useCallback)(()=>{O(),y.current=null,T()},[O,T]),L=(0,P.useCallback)((e,t,n)=>{w({tooltipData:e,tooltipLeft:t,tooltipTop:n-10})},[w]),R=(0,P.useCallback)(e=>N.width===0||N.height===0?null:{x:e.clientX-N.left,y:e.clientY-N.top},[N.width,N.height,N.left,N.top]),z=(0,P.useCallback)(e=>{if(N.width===0||N.height===0)return null;let t=e.currentTarget.getBoundingClientRect();return{x:t.left+t.width/2-N.left,y:t.top-N.top}},[N.width,N.height,N.left,N.top]),B=(0,P.useCallback)((e,t,n)=>{y.current=t.currentTarget;let{isClicked:r}=A(e.id);if(r){n===`click`?E(e.id):D(e.id,t);return}if(n===`click`){E(e.id);let n=R(t);n&&L(e,n.x,n.y)}else{D(e.id,t);let n=z(t);n&&L(e,n.x,n.y)}},[A,E,D,L,R,z]),V=(0,P.useMemo)(()=>{let e=new Map;return n.forEach(t=>{e.set(t.id,{onClick:e=>{e.stopPropagation(),B(t,e,`click`)},onKeyDown:e=>{e.key===`Enter`||e.key===` `?B(t,e,`keyboard`):(y.current=e.currentTarget,D(t.id,e))}})}),e},[n,B,D]);(0,P.useEffect)(()=>{let e=e=>{y.current&&!y.current.contains(e.target)&&I()};return document.addEventListener(`mousedown`,e),()=>{document.removeEventListener(`mousedown`,e)}},[I]);let H=u??d?.height??`100%`,{primaryColor:U,backgroundColor:W,positiveChangeColor:G,negativeChangeColor:K}=ce,{color:q}=_?_({index:0,overrideColor:U}):{color:U||`#000000`},J=t?.startsWith(`+`)?G:K,Y=W||ee(q,.08)||`rgba(0, 0, 0, 0.08)`,X=()=>(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`span`,{className:k[`main-rate`],children:l(e)}),t&&(0,F.jsx)(`span`,{className:k[`change-indicator`],style:{color:J},children:t})]}),Z=e=>(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`div`,{className:k[`tooltip-title`],children:e.label}),(0,F.jsxs)(`div`,{className:k[`tooltip-content`],children:[l(e.rate),` • ${e.count??`no`} items`]})]}),Q=!!(n&&n.length>0);ae({chartId:g,legendItems:[],chartType:`conversion-funnel`,isDataValid:Q,metadata:(0,P.useMemo)(()=>({mainRate:e,changeIndicator:t,stepsCount:n?.length||0}),[e,t,n?.length])});let $=te();if(!Q)return(0,F.jsx)(c,{direction:`column`,"data-testid":`conversion-funnel-chart`,className:a(k.conversionFunnelChart,r&&k.loading,o),style:{...d,height:H},children:(0,F.jsx)(`div`,{className:k[`empty-state`],children:r?`Loading...`:`No data available`})});let ue=Math.max(...n.map(e=>e.rate));return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(c,{direction:`column`,"data-testid":`conversion-funnel-chart`,ref:e=>{j(e),v.current=e},className:a(k.conversionFunnelChart,r&&k.loading,o),style:{...d,height:H},children:[m?m({mainRate:e,changeIndicator:t,className:k[`main-metric`],changeColor:J}):(0,F.jsx)(`div`,{className:k[`main-metric`],children:X()}),(0,F.jsx)(`div`,{className:k[`funnel-container`],children:n.map((e,t)=>{let n=e.rate/ue*100,{isBlurred:o}=A(e.id);return(0,F.jsxs)(`div`,{className:a(k[`funnel-step`],o&&k.blurred),children:[(0,F.jsxs)(`div`,{className:k[`step-header`],children:[f?f({step:e,index:t,className:k[`step-label`]}):(0,F.jsx)(`span`,{className:k[`step-label`],children:e.label}),p?p({step:e,index:t,className:k[`step-rate`]}):(0,F.jsx)(`span`,{className:k[`step-rate`],children:l(e.rate)})]}),(0,F.jsx)(`div`,{className:a(k[`bar-container`],o&&k.disabled),onClick:V.get(e.id)?.onClick,onKeyDown:V.get(e.id)?.onKeyDown,role:`button`,tabIndex:o?-1:0,"aria-label":e.label,style:{backgroundColor:Y},children:(0,F.jsx)(`div`,{className:a(k[`funnel-bar`],{[k[`funnel-bar--animated`]]:i&&!r&&!$}),style:{height:`${n}%`,backgroundColor:q}})})]},e.id)})})]}),C&&b&&(()=>{let e=h?h({step:b,index:n.findIndex(e=>e.id===b.id),top:S,left:x,className:k[`tooltip-wrapper`]}):Z(b);return e?(0,F.jsx)(le,{top:S,left:x,className:k[`tooltip-wrapper`],children:e},Math.random()):null})()]})},L=e=>(0,P.useContext)(d)?(0,F.jsx)(I,{...e}):(0,F.jsx)(u,{children:(0,F.jsx)(I,{...e})}),L.displayName=`ConversionFunnelChart`})),z=n({Animation:()=>q,CustomRenderProps:()=>X,Default:()=>H,EmptyData:()=>J,FixedDimensions:()=>Y,HighConversion:()=>W,Loading:()=>K,NegativeChange:()=>U,WithoutChangeIndicator:()=>G,WithoutTooltips:()=>Z,__namedExportsOrder:()=>Q,default:()=>V}),B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{S(),R(),B=o(),V={title:`JS Packages/Charts Library/Charts/Conversion Funnel Chart`,component:L,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{mainRate:{control:{type:`number`,min:0,max:100,step:.1},description:`Main conversion rate to highlight`,table:{type:{summary:`number`}}},changeIndicator:{control:`text`,description:`Change indicator (e.g., +2%, -1.5%)`,table:{type:{summary:`string`}}},steps:{control:`object`,description:`Array of funnel steps`,table:{type:{summary:`FunnelStep[]`}}},loading:{control:`boolean`,description:`Whether the chart is in loading state`,table:{defaultValue:{summary:`false`}}},className:{control:`text`,description:`Additional CSS class name`,table:{type:{summary:`string`}}},height:{control:`text`,description:`Height of the chart container (e.g., "100%", "400px")`,table:{type:{summary:`string | number`}}},style:{control:`object`,description:`Custom styling for the chart container`,table:{type:{summary:`React.CSSProperties`}}},...ce,...g},decorators:[v]},H={args:{..._,mainRate:10.3,changeIndicator:`+2%`,steps:y,loading:!1}},U={args:{mainRate:8.7,changeIndicator:`-1.6%`,steps:x,loading:!1}},W={args:{mainRate:18.7,changeIndicator:`+5.2%`,steps:b,loading:!1}},G={args:{mainRate:10.3,steps:y,loading:!1}},K={args:{mainRate:10.3,changeIndicator:`+2%`,steps:y,loading:!0}},q={args:{...H.args,animation:!0}},J={args:{mainRate:0,steps:[],loading:!1}},Y={args:{..._,mainRate:10.3,changeIndicator:`+2%`,steps:y,loading:!1,height:`200px`}},X={args:{mainRate:10.3,changeIndicator:`+2%`,steps:y,renderMainMetric:({mainRate:e,changeIndicator:t,className:n})=>(0,B.jsxs)(`div`,{className:n,style:{background:`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,borderRadius:`12px`,padding:`24px`,marginBottom:`32px`,color:`white`,textAlign:`center`,height:`fit-content`},children:[(0,B.jsx)(`h3`,{style:{margin:`0 0 12px 0`,fontSize:`14px`,fontWeight:`500`,opacity:.9,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`Overall Conversion Rate`}),(0,B.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:`16px`},children:[(0,B.jsxs)(`span`,{style:{fontSize:`42px`,fontWeight:`bold`,fontFamily:`Inter, sans-serif`,lineHeight:1},children:[e.toFixed(1),`%`]}),t&&(0,B.jsx)(`span`,{style:{fontSize:`16px`,fontWeight:`600`,fontFamily:`Inter, sans-serif`,backgroundColor:t.startsWith(`+`)?`rgba(16, 185, 129, 0.2)`:`rgba(239, 68, 68, 0.2)`,color:t.startsWith(`+`)?`#10b981`:`#ef4444`,padding:`6px 12px`,borderRadius:`8px`,border:`1px solid ${t.startsWith(`+`)?`#10b981`:`#ef4444`}`},children:t})]}),(0,B.jsx)(`p`,{style:{margin:`12px 0 0 0`,fontSize:`12px`,opacity:.8,fontFamily:`Inter, sans-serif`},children:`Last 30 days vs previous period`})]}),renderTooltip:({step:e})=>(0,B.jsxs)(`div`,{style:{background:`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,borderRadius:`12px`,padding:`16px 20px`,color:`white`,fontFamily:`Inter, sans-serif`,boxShadow:`0 8px 32px rgba(118, 75, 162, 0.3)`,border:`none`,minWidth:`200px`},children:[(0,B.jsx)(`div`,{style:{fontSize:`11px`,fontWeight:`500`,opacity:.8,textTransform:`uppercase`,letterSpacing:`0.5px`,margin:`0 0 8px 0`},children:e.label}),(0,B.jsxs)(`div`,{style:{fontSize:`18px`,fontWeight:`bold`,margin:`0`,display:`flex`,alignItems:`center`,gap:`8px`},children:[e.rate.toFixed(1),`%`,e.count&&(0,B.jsxs)(`span`,{style:{fontSize:`14px`,fontWeight:`400`,opacity:.9},children:[`• `,e.count.toLocaleString(),` items`]})]})]})},decorators:[e=>(0,B.jsx)(e,{})]},Z={args:{mainRate:10.3,changeIndicator:`+2%`,steps:y,renderMainMetric:()=>null,renderTooltip:()=>null}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 8.7,
    changeIndicator: '-1.6%',
    steps: lowConversionFunnelData,
    loading: false
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 18.7,
    changeIndicator: '+5.2%',
    steps: highConversionFunnelData,
    loading: false
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: true
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 0,
    steps: [],
    loading: false
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false,
    height: '200px'
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    renderMainMetric: () => null,
    renderTooltip: () => null
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`NegativeChange`,`HighConversion`,`WithoutChangeIndicator`,`Loading`,`Animation`,`EmptyData`,`FixedDimensions`,`CustomRenderProps`,`WithoutTooltips`]}));$();export{q as Animation,X as CustomRenderProps,H as Default,J as EmptyData,Y as FixedDimensions,W as HighConversion,K as Loading,U as NegativeChange,G as WithoutChangeIndicator,Z as WithoutTooltips,Q as __namedExportsOrder,V as default,$ as n,z as t};