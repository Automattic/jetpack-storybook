(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7474],{"../charts/src/charts/conversion-funnel-chart/stories/index.stories.tsx"(_,m,e){"use strict";e.r(m),e.d(m,{Animation:()=>z,CustomRenderProps:()=>Q,Default:()=>F,EmptyData:()=>H,HighConversion:()=>L,Loading:()=>K,NegativeChange:()=>k,WithoutChangeIndicator:()=>B,WithoutTooltips:()=>U,__namedExportsOrder:()=>je,default:()=>Se});var o=e("../charts/src/stories/chart-decorator.tsx"),p=e("../charts/src/stories/theme-config.tsx"),a=e("../charts/src/stories/sample-data/index.ts"),r=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),d=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),n=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=e("../charts/src/hooks/use-prefers-reduced-motion.ts"),E=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),I=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),w=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),W=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),O=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),R=e("../charts/src/utils/color-utils.ts"),A=e("../charts/src/utils/format-percentage.ts"),s=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(s),u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/conversion-funnel-chart/conversion-funnel-chart.module.scss"),C={};C.insert="head",C.singleton=!1;var b=l()(u.A,C);const f=u.A.locals||{},be=h=>{const[x,v]=(0,t.useState)(null),N=(0,t.useCallback)(P=>{x===P?(v(null),h?.()):v(P)},[x,h]),G=(0,t.useCallback)((P,D)=>{D.key==="Enter"||D.key===" "?(D.preventDefault(),x===P?(v(null),h?.()):v(P)):D.key==="Escape"&&(D.preventDefault(),v(null),h?.())},[x,h]),V=(0,t.useCallback)(()=>{v(null),h?.()},[h]),$=(0,t.useCallback)(P=>({isClicked:x===P,isBlurred:x!==null&&x!==P}),[x]);return{clickedStep:x,handleBarClick:N,handleBarKeyDown:G,clearSelection:V,getStepState:$}};var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const re=({mainRate:h,changeIndicator:x,steps:v,loading:N=!1,animation:G,className:V,chartId:$,style:P,renderStepLabel:D,renderStepRate:se,renderMainMetric:ae,renderTooltip:ie})=>{const Ce=(0,E.R)($),{conversionFunnelChart:Re}=(0,I.p)(),{getElementStyles:le}=(0,w.j)(),Pe=(0,t.useRef)(null),J=(0,t.useRef)(null),{tooltipData:Y,tooltipLeft:ce,tooltipTop:de,tooltipOpen:Te,showTooltip:pe,hideTooltip:Z}=(0,r.A)(),{handleBarClick:q,handleBarKeyDown:X,clearSelection:ue,getStepState:ee}=be(Z),{containerRef:Ee,TooltipInPortal:Oe,containerBounds:S}=(0,d.A)({detectBounds:!0,scroll:!0}),me=(0,t.useCallback)(()=>{ue(),J.current=null,Z()},[ue,Z]),te=(0,t.useCallback)((i,y,T)=>{pe({tooltipData:i,tooltipLeft:y,tooltipTop:T-10})},[pe]),fe=(0,t.useCallback)(i=>S.width===0||S.height===0?null:{x:i.clientX-S.left,y:i.clientY-S.top},[S.width,S.height,S.left,S.top]),he=(0,t.useCallback)(i=>{if(S.width===0||S.height===0)return null;const y=i.currentTarget.getBoundingClientRect(),T=y.left+y.width/2-S.left,M=y.top-S.top;return{x:T,y:M}},[S.width,S.height,S.left,S.top]),ne=(0,t.useCallback)((i,y,T)=>{J.current=y.currentTarget;const{isClicked:M}=ee(i.id);if(M){T==="click"?q(i.id):X(i.id,y);return}if(T==="click"){q(i.id);const j=fe(y);j&&te(i,j.x,j.y)}else{X(i.id,y);const j=he(y);j&&te(i,j.x,j.y)}},[ee,q,X,te,fe,he]),ge=(0,t.useMemo)(()=>{const i=new Map;return v.forEach(y=>{const T=j=>{j.stopPropagation(),ne(y,j,"click")},M=j=>{j.key==="Enter"||j.key===" "?ne(y,j,"keyboard"):(J.current=j.currentTarget,X(y.id,j))};i.set(y.id,{onClick:T,onKeyDown:M})}),i},[v,ne,X]);(0,t.useEffect)(()=>{const i=y=>{J.current&&!J.current.contains(y.target)&&me()};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[me]);const{primaryColor:xe,backgroundColor:Me,positiveChangeColor:Ie,negativeChangeColor:we}=Re,{color:ye}=le?le({index:0,overrideColor:xe}):{color:xe||"#000000"},_e=x?.startsWith("+")?Ie:we,Ae=Me||(0,R.j5)(ye,.08)||"rgba(0, 0, 0, 0.08)",De=()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{className:f["main-rate"],children:(0,A.E)(h)}),x&&(0,c.jsx)("span",{className:f["change-indicator"],style:{color:_e},children:x})]}),We=i=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:f["tooltip-title"],children:i.label}),(0,c.jsxs)("div",{className:f["tooltip-content"],children:[(0,A.E)(i.rate),` \u2022 ${i.count??"no"} items`]})]}),ve=!!(v&&v.length>0),Fe=(0,t.useMemo)(()=>({mainRate:h,changeIndicator:x,stepsCount:v?.length||0}),[h,x,v?.length]);(0,W.t)({chartId:Ce,legendItems:[],chartType:"conversion-funnel",isDataValid:ve,metadata:Fe});const Ne=(0,g.j)();if(!ve)return(0,c.jsx)("div",{className:(0,n.A)(f.conversionFunnelChart,N&&f.loading,V),style:P,children:(0,c.jsx)("div",{className:f["empty-state"],children:N?"Loading...":"No data available"})});const ke=Math.max(...v.map(i=>i.rate));return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{ref:i=>{Ee(i),Pe.current=i},className:(0,n.A)(f.conversionFunnelChart,N&&f.loading,V),style:P,children:[ae?ae({mainRate:h,changeIndicator:x,className:f["main-metric"],changeColor:_e}):(0,c.jsx)("div",{className:f["main-metric"],children:De()}),(0,c.jsx)("div",{className:f["funnel-container"],children:v.map((i,y)=>{const T=i.rate/ke*100,{isBlurred:M}=ee(i.id);return(0,c.jsxs)("div",{className:(0,n.A)(f["funnel-step"],M&&f.blurred),children:[(0,c.jsxs)("div",{className:f["step-header"],children:[D?D({step:i,index:y,className:f["step-label"]}):(0,c.jsx)("span",{className:f["step-label"],children:i.label}),se?se({step:i,index:y,className:f["step-rate"]}):(0,c.jsx)("span",{className:f["step-rate"],children:(0,A.E)(i.rate)})]}),(0,c.jsx)("div",{className:(0,n.A)(f["bar-container"],M&&f.disabled),onClick:ge.get(i.id)?.onClick,onKeyDown:ge.get(i.id)?.onKeyDown,role:"button",tabIndex:M?-1:0,"aria-label":i.label,style:{backgroundColor:Ae},children:(0,c.jsx)("div",{className:(0,n.A)(f["funnel-bar"],{[f["funnel-bar--animated"]]:G&&!N&&!Ne}),style:{height:`${T}%`,backgroundColor:ye}})})]},i.id)})})]}),Te&&Y&&(()=>{const i=ie?ie({step:Y,index:v.findIndex(y=>y.id===Y.id),top:de,left:ce,className:f["tooltip-wrapper"]}):We(Y);return i?(0,c.jsx)(Oe,{top:de,left:ce,className:f["tooltip-wrapper"],children:i},Math.random()):null})()]})},oe=h=>(0,t.useContext)(O.m)?(0,c.jsx)(re,{...h}):(0,c.jsx)(O.S,{children:(0,c.jsx)(re,{...h})});oe.displayName="ConversionFunnelChart";try{conversionfunnelchart.displayName="conversionfunnelchart",conversionfunnelchart.__docgenInfo={description:"ConversionFunnelChart component with provider wrapper",displayName:"conversionfunnelchart",props:{mainRate:{defaultValue:null,description:"Main conversion rate to highlight",name:"mainRate",required:!0,type:{name:"number"}},changeIndicator:{defaultValue:null,description:"Change indicator (e.g., +2%, -1.5%)",name:"changeIndicator",required:!1,type:{name:"string"}},steps:{defaultValue:null,description:"Array of funnel steps",name:"steps",required:!0,type:{name:"FunnelStep[]"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"Custom styling",name:"style",required:!1,type:{name:"CSSProperties"}},renderStepLabel:{defaultValue:null,description:"Custom render function for step labels",name:"renderStepLabel",required:!1,type:{name:"(props: StepLabelRenderProps) => ReactNode"}},renderStepRate:{defaultValue:null,description:"Custom render function for step rates",name:"renderStepRate",required:!1,type:{name:"(props: StepRateRenderProps) => ReactNode"}},renderMainMetric:{defaultValue:null,description:"Custom render function for the entire main metric section",name:"renderMainMetric",required:!1,type:{name:"(props: MainMetricRenderProps) => ReactNode"}},renderTooltip:{defaultValue:null,description:"Custom render function for tooltip content",name:"renderTooltip",required:!1,type:{name:"(props: TooltipRenderProps) => ReactNode"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},animation:{defaultValue:null,description:"Whether to show chart animation on initial render or not",name:"animation",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"]={docgenInfo:conversionfunnelchart.__docgenInfo,name:"conversionfunnelchart",path:"../charts/src/charts/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"})}catch{}const Se={title:"JS Packages/Charts Library/Charts/Conversion Funnel Chart",component:oe,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{mainRate:{control:{type:"number",min:0,max:100,step:.1},description:"Main conversion rate to highlight",table:{type:{summary:"number"}}},changeIndicator:{control:"text",description:"Change indicator (e.g., +2%, -1.5%)",table:{type:{summary:"string"}}},steps:{control:"object",description:"Array of funnel steps",table:{type:{summary:"FunnelStep[]"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}},...o.xo,...p.jW},decorators:[o.OI]},F={args:{...p.In,mainRate:10.3,changeIndicator:"+2%",steps:a.$w,loading:!1}},k={args:{mainRate:8.7,changeIndicator:"-1.6%",steps:a.Ro,loading:!1}},L={args:{mainRate:18.7,changeIndicator:"+5.2%",steps:a.hk,loading:!1}},B={args:{mainRate:10.3,steps:a.$w,loading:!1}},K={args:{mainRate:10.3,changeIndicator:"+2%",steps:a.$w,loading:!0}},z={args:{...F.args,animation:!0}},H={args:{mainRate:0,steps:[],loading:!1}},Q={args:{mainRate:10.3,changeIndicator:"+2%",steps:a.$w,renderMainMetric:({mainRate:h,changeIndicator:x,className:v})=>(0,c.jsxs)("div",{className:v,style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px",padding:"24px",marginBottom:"32px",color:"white",textAlign:"center",height:"fit-content"},children:[(0,c.jsx)("h3",{style:{margin:"0 0 12px 0",fontSize:"14px",fontWeight:"500",opacity:.9,textTransform:"uppercase",letterSpacing:"0.5px"},children:"Overall Conversion Rate"}),(0,c.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"16px"},children:[(0,c.jsxs)("span",{style:{fontSize:"42px",fontWeight:"bold",fontFamily:"Inter, sans-serif",lineHeight:1},children:[h.toFixed(1),"%"]}),x&&(0,c.jsx)("span",{style:{fontSize:"16px",fontWeight:"600",fontFamily:"Inter, sans-serif",backgroundColor:x.startsWith("+")?"rgba(16, 185, 129, 0.2)":"rgba(239, 68, 68, 0.2)",color:x.startsWith("+")?"#10b981":"#ef4444",padding:"6px 12px",borderRadius:"8px",border:`1px solid ${x.startsWith("+")?"#10b981":"#ef4444"}`},children:x})]}),(0,c.jsx)("p",{style:{margin:"12px 0 0 0",fontSize:"12px",opacity:.8,fontFamily:"Inter, sans-serif"},children:"Last 30 days vs previous period"})]}),renderTooltip:({step:h})=>(0,c.jsxs)("div",{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px",padding:"16px 20px",color:"white",fontFamily:"Inter, sans-serif",boxShadow:"0 8px 32px rgba(118, 75, 162, 0.3)",border:"none",minWidth:"200px"},children:[(0,c.jsx)("div",{style:{fontSize:"11px",fontWeight:"500",opacity:.8,textTransform:"uppercase",letterSpacing:"0.5px",margin:"0 0 8px 0"},children:h.label}),(0,c.jsxs)("div",{style:{fontSize:"18px",fontWeight:"bold",margin:"0",display:"flex",alignItems:"center",gap:"8px"},children:[h.rate.toFixed(1),"%",h.count&&(0,c.jsxs)("span",{style:{fontSize:"14px",fontWeight:"400",opacity:.9},children:["\u2022 ",h.count.toLocaleString()," items"]})]})]})},decorators:[h=>(0,c.jsx)(h,{})]},U={args:{mainRate:10.3,changeIndicator:"+2%",steps:a.$w,renderMainMetric:()=>null,renderTooltip:()=>null}},je=["Default","NegativeChange","HighConversion","WithoutChangeIndicator","Loading","Animation","EmptyData","CustomRenderProps","WithoutTooltips"];F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...F.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 8.7,
    changeIndicator: '-1.6%',
    steps: lowConversionFunnelData,
    loading: false
  }
}`,...k.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 18.7,
    changeIndicator: '+5.2%',
    steps: highConversionFunnelData,
    loading: false
  }
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...B.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: true
  }
}`,...K.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...z.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 0,
    steps: [],
    loading: false
  }
}`,...H.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
                            \u2022 {step.count.toLocaleString()} items
                        </span>}
                </div>
            </div>
  },
  decorators: [Story => <Story />]
}`,...Q.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    renderMainMetric: () => null,
    renderTooltip: () => null
  }
}`,...U.parameters?.docs?.source}}}},"../charts/src/hooks/use-prefers-reduced-motion.ts"(_,m,e){"use strict";e.d(m,{j:()=>r});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const p="(prefers-reduced-motion: no-preference)",a=()=>!window.matchMedia(p).matches;function r(){const[d,n]=(0,o.useState)(a);return(0,o.useEffect)(()=>{const t=window.matchMedia(p),g=E=>{n(!E.matches)};return t.addEventListener("change",g),()=>{t.removeEventListener("change",g)}},[]),d}},"../charts/src/providers/chart-context/hooks/use-chart-id.ts"(_,m,e){"use strict";e.d(m,{R:()=>p});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const p=a=>{const r=(0,o.useId)();return a||r}},"../charts/src/providers/chart-context/hooks/use-chart-registration.ts"(_,m,e){"use strict";e.d(m,{t:()=>n});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js"),a=e.n(p);const r=t=>{const g=(0,o.useRef)(t);return a()(g.current,t)||(g.current=t),g.current};var d=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts");const n=({chartId:t,legendItems:g,chartType:E,isDataValid:I,metadata:w})=>{const{registerChart:W,unregisterChart:O}=(0,d.j)(),R=r(g),A=(0,o.useMemo)(()=>w,[w]);(0,o.useEffect)(()=>(I&&W(t,{legendItems:R,chartType:E,metadata:A}),()=>{O(t)}),[t,R,E,A,I])}},"../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"(_,m,e){"use strict";e.d(m,{p:()=>r});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),a=e("../charts/src/providers/chart-context/themes.ts");const r=()=>(0,o.useContext)(p.m)?.theme??a.z},"../charts/src/utils/format-percentage.ts"(_,m,e){"use strict";e.d(m,{E:()=>p});var o=e("../number-formatters/src/index.ts");const p=a=>(0,o.ZV)(a/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})},"../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"(_,m){var e,o;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var p={}.hasOwnProperty;function a(){for(var n="",t=0;t<arguments.length;t++){var g=arguments[t];g&&(n=d(n,r(g)))}return n}function r(n){if(typeof n=="string"||typeof n=="number")return n;if(typeof n!="object")return"";if(Array.isArray(n))return a.apply(null,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var t="";for(var g in n)p.call(n,g)&&n[g]&&(t=d(t,g));return t}function d(n,t){return t?n?n+" "+t:n+t:n}_.exports?(a.default=a,_.exports=a):(e=[],o=(function(){return a}).apply(m,e),o!==void 0&&(_.exports=o))})()},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"(_,m,e){"use strict";e.d(m,{A:()=>a});function o(r){var d,n,t="";if(typeof r=="string"||typeof r=="number")t+=r;else if(typeof r=="object")if(Array.isArray(r)){var g=r.length;for(d=0;d<g;d++)r[d]&&(n=o(r[d]))&&(t&&(t+=" "),t+=n)}else for(n in r)r[n]&&(t&&(t+=" "),t+=n);return t}function p(){for(var r,d,n=0,t="",g=arguments.length;n<g;n++)(r=arguments[n])&&(d=o(r))&&(t&&(t+=" "),t+=d);return t}const a=p},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/conversion-funnel-chart/conversion-funnel-chart.module.scss"(_,m,e){"use strict";e.d(m,{A:()=>n});var o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(o),a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),r=e.n(a),d=r()(p());d.push([_.id,'.DHel8EQzSdtJJyK9dkBd{font-family:var(--funnel-font-family, "SF Pro Text")}.DHel8EQzSdtJJyK9dkBd.EipzMPI0uuJrrUuSnzow{opacity:.6;pointer-events:none}.LR6zx5NLungP01PEyXT7{display:flex;align-items:baseline;gap:8px;margin-bottom:24px;height:20px}.G5ecZvHjWDm43YjYmdwW{overflow:hidden;color:#1e1e1e;text-overflow:ellipsis;font-family:var(--funnel-font-family, "SF Pro Text");font-size:18px;font-style:normal;font-weight:500;line-height:20px;margin:0}.WQ7_PJVUtPMzD14vKyWQ{overflow:hidden;text-overflow:ellipsis;font-family:var(--funnel-font-family, "SF Pro Text");font-size:13px;font-style:normal;font-weight:500;line-height:20px;margin:0}.pjKie7XwVwrwcjbMOxlo{display:flex;gap:16px;align-items:flex-end;height:200px;width:100%}.Bh1bvH6Mp5quts4hYtCK{flex:1 1 0;min-width:0;display:flex;flex-direction:column;height:100%;transition:all .3s ease}.Bh1bvH6Mp5quts4hYtCK.h3LFoTuMC8KnwXPRgquL{opacity:.3}.nxPLFSO7Av5LTJprXg6s{margin-bottom:24px}.ZyhW3eti5iesu55yQoN0{color:#757575;font-family:var(--step-font-family, "SF Pro");font-size:12px;font-style:normal;font-weight:400;line-height:16px;margin:0 0 2px 0;display:block;overflow:hidden;text-overflow:ellipsis}.AHuxyx4T3oR7B2dxsSbQ{color:#1e1e1e;font-family:var(--step-font-family, "SF Pro");font-size:13px;font-style:normal;font-weight:500;line-height:20px;margin:0;display:block}.SezxNWxdJQDJFnp7xPFT{flex:1;display:flex;align-items:flex-end;border-radius:4px;position:relative;cursor:pointer;transition:all .2s ease}.SezxNWxdJQDJFnp7xPFT.o9lqgi2v2zKGO9flGGHR{cursor:pointer}.vcIZlWxXQ9HPlPTpqUdK{width:100%;min-height:4px;border-radius:4px 4px 0 0;transition:all .3s ease}.vcIZlWxXQ9HPlPTpqUdK.JD9utXnUBSYG6i0Q11Bv{box-shadow:0 4px 16px rgba(0,0,0,.2);filter:brightness(1.1)}.rPadlc9zWlfRSHp4SokQ{transform-origin:bottom;transform-box:fill-box;transform:scaleY(0);animation:kyP1wTXCfPGQJ74qT3oX 1s ease-out forwards}@keyframes kyP1wTXCfPGQJ74qT3oX{to{transform:scaleY(1)}}.b57I_FjQLOfJRxsyI2Ae{display:inline-flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:4px;border-bottom:1px solid var(--Gray-Gray-5, #dcdcde);background:var(--black-white-white, #fff);border-radius:4px !important;padding:12px !important;box-shadow:0 1px 3px 0 rgba(0,0,0,.15),0 3px 9px 0 rgba(0,0,0,.12) !important}.FMl6Qqk6oR3XrDTMlbHd{color:#1e1e1e;font-family:"SF Pro",sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:16px}.TjAc7xHwVVj7WXZ2qmqJ{color:#1e1e1e;font-family:"SF Pro",sans-serif;font-size:13px;font-style:normal;font-weight:500;line-height:20px}.tqM773g8gftoYTHKShwg{text-align:center;padding:48px 24px;color:#6b7280;font-size:16px}',""]),d.locals={conversionFunnelChart:"DHel8EQzSdtJJyK9dkBd",loading:"EipzMPI0uuJrrUuSnzow","main-metric":"LR6zx5NLungP01PEyXT7","main-rate":"G5ecZvHjWDm43YjYmdwW","change-indicator":"WQ7_PJVUtPMzD14vKyWQ","funnel-container":"pjKie7XwVwrwcjbMOxlo","funnel-step":"Bh1bvH6Mp5quts4hYtCK",blurred:"h3LFoTuMC8KnwXPRgquL","step-header":"nxPLFSO7Av5LTJprXg6s","step-label":"ZyhW3eti5iesu55yQoN0","step-rate":"AHuxyx4T3oR7B2dxsSbQ","bar-container":"SezxNWxdJQDJFnp7xPFT",disabled:"o9lqgi2v2zKGO9flGGHR","funnel-bar":"vcIZlWxXQ9HPlPTpqUdK",selected:"JD9utXnUBSYG6i0Q11Bv","funnel-bar--animated":"rPadlc9zWlfRSHp4SokQ",stretch:"kyP1wTXCfPGQJ74qT3oX","tooltip-wrapper":"b57I_FjQLOfJRxsyI2Ae","tooltip-title":"FMl6Qqk6oR3XrDTMlbHd","tooltip-content":"TjAc7xHwVVj7WXZ2qmqJ","empty-state":"tqM773g8gftoYTHKShwg"};const n=d},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"(_){"use strict";var m=function(l){return e(l)&&!o(l)};function e(s){return!!s&&typeof s=="object"}function o(s){var l=Object.prototype.toString.call(s);return l==="[object RegExp]"||l==="[object Date]"||r(s)}var p=typeof Symbol=="function"&&Symbol.for,a=p?Symbol.for("react.element"):60103;function r(s){return s.$$typeof===a}function d(s){return Array.isArray(s)?[]:{}}function n(s,l){return l.clone!==!1&&l.isMergeableObject(s)?R(d(s),s,l):s}function t(s,l,u){return s.concat(l).map(function(C){return n(C,u)})}function g(s,l){if(!l.customMerge)return R;var u=l.customMerge(s);return typeof u=="function"?u:R}function E(s){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(s).filter(function(l){return Object.propertyIsEnumerable.call(s,l)}):[]}function I(s){return Object.keys(s).concat(E(s))}function w(s,l){try{return l in s}catch{return!1}}function W(s,l){return w(s,l)&&!(Object.hasOwnProperty.call(s,l)&&Object.propertyIsEnumerable.call(s,l))}function O(s,l,u){var C={};return u.isMergeableObject(s)&&I(s).forEach(function(b){C[b]=n(s[b],u)}),I(l).forEach(function(b){W(s,b)||(w(s,b)&&u.isMergeableObject(l[b])?C[b]=g(b,u)(s[b],l[b],u):C[b]=n(l[b],u))}),C}function R(s,l,u){u=u||{},u.arrayMerge=u.arrayMerge||t,u.isMergeableObject=u.isMergeableObject||m,u.cloneUnlessOtherwiseSpecified=n;var C=Array.isArray(l),b=Array.isArray(s),f=C===b;return f?C?u.arrayMerge(s,l,u):O(s,l,u):n(l,u)}R.all=function(l,u){if(!Array.isArray(l))throw new Error("first argument should be an array");return l.reduce(function(C,b){return R(C,b,u)},{})};var A=R;_.exports=A},"../../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js"(_){"use strict";_.exports=function m(e,o){if(e===o)return!0;if(e&&o&&typeof e=="object"&&typeof o=="object"){if(e.constructor!==o.constructor)return!1;var p,a,r;if(Array.isArray(e)){if(p=e.length,p!=o.length)return!1;for(a=p;a--!==0;)if(!m(e[a],o[a]))return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if(r=Object.keys(e),p=r.length,p!==Object.keys(o).length)return!1;for(a=p;a--!==0;)if(!Object.prototype.hasOwnProperty.call(o,r[a]))return!1;for(a=p;a--!==0;){var d=r[a];if(!m(e[d],o[d]))return!1}return!0}return e!==e&&o!==o}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js"(_,m,e){"use strict";var o=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function p(){}function a(){}a.resetWarningCache=p,_.exports=function(){function r(t,g,E,I,w,W){if(W!==o){var O=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw O.name="Invariant Violation",O}}r.isRequired=r;function d(){return r}var n={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:d,element:r,elementType:r,instanceOf:d,node:r,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:a,resetWarningCache:p};return n.PropTypes=n,n}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"(_,m,e){if(0)var o,p;else _.exports=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js"(_){"use strict";var m="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";_.exports=m}}]);
