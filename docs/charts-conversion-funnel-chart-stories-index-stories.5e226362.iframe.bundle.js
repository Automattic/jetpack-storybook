(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7474],{"../charts/src/charts/conversion-funnel-chart/stories/index.stories.tsx"(C,y,e){"use strict";e.r(y),e.d(y,{Animation:()=>z,CustomRenderProps:()=>J,Default:()=>O,EmptyData:()=>H,FixedDimensions:()=>Q,HighConversion:()=>N,Loading:()=>K,NegativeChange:()=>L,WithoutChangeIndicator:()=>B,WithoutTooltips:()=>U,__namedExportsOrder:()=>Me,default:()=>Ee});var u=e("../charts/src/stories/chart-decorator.tsx"),x=e("../charts/src/stories/theme-config.tsx"),l=e("../charts/src/stories/sample-data/index.ts"),c=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),f=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),t=e("../../../node_modules/.pnpm/@wordpress+ui@0.7.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1_stylelint@16.26.1/node_modules/@wordpress/ui/build-module/stack/stack.mjs"),r=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),I=e("../charts/src/hooks/use-prefers-reduced-motion.ts"),A=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),D=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),W=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),k=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),R=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),w=e("../charts/src/utils/color-utils.ts"),n=e("../charts/src/utils/format-percentage.ts"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(a),j=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/conversion-funnel-chart/conversion-funnel-chart.module.scss"),_={};_.insert="head",_.singleton=!1;var se=d()(j.A,_);const p=j.A.locals||{},Re=m=>{const[h,b]=(0,o.useState)(null),F=(0,o.useCallback)(E=>{h===E?(b(null),m?.()):b(E)},[h,m]),$=(0,o.useCallback)((E,P)=>{P.key==="Enter"||P.key===" "?(P.preventDefault(),h===E?(b(null),m?.()):b(E)):P.key==="Escape"&&(P.preventDefault(),b(null),m?.())},[h,m]),Y=(0,o.useCallback)(()=>{b(null),m?.()},[m]),Z=(0,o.useCallback)(E=>({isClicked:h===E,isBlurred:h!==null&&h!==E}),[h]);return{clickedStep:h,handleBarClick:F,handleBarKeyDown:$,clearSelection:Y,getStepState:Z}};var i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const oe=({mainRate:m,changeIndicator:h,steps:b,loading:F=!1,animation:$,className:Y,chartId:Z,height:E,style:P,renderStepLabel:ie,renderStepRate:le,renderMainMetric:ce,renderTooltip:de})=>{const Pe=(0,A.R)(Z),{conversionFunnelChart:Te}=(0,D.p)(),{getElementStyles:ue}=(0,W.j)(),Ie=(0,o.useRef)(null),X=(0,o.useRef)(null),{tooltipData:G,tooltipLeft:pe,tooltipTop:me,tooltipOpen:Ae,showTooltip:fe,hideTooltip:q}=(0,c.A)(),{handleBarClick:ee,handleBarKeyDown:V,clearSelection:he,getStepState:te}=Re(q),{containerRef:De,TooltipInPortal:we,containerBounds:v}=(0,f.A)({detectBounds:!0,scroll:!0}),ge=(0,o.useCallback)(()=>{he(),X.current=null,q()},[he,q]),ne=(0,o.useCallback)((s,g,M)=>{fe({tooltipData:s,tooltipLeft:g,tooltipTop:M-10})},[fe]),xe=(0,o.useCallback)(s=>v.width===0||v.height===0?null:{x:s.clientX-v.left,y:s.clientY-v.top},[v.width,v.height,v.left,v.top]),ye=(0,o.useCallback)(s=>{if(v.width===0||v.height===0)return null;const g=s.currentTarget.getBoundingClientRect(),M=g.left+g.width/2-v.left,T=g.top-v.top;return{x:M,y:T}},[v.width,v.height,v.left,v.top]),re=(0,o.useCallback)((s,g,M)=>{X.current=g.currentTarget;const{isClicked:T}=te(s.id);if(T){M==="click"?ee(s.id):V(s.id,g);return}if(M==="click"){ee(s.id);const S=xe(g);S&&ne(s,S.x,S.y)}else{V(s.id,g);const S=ye(g);S&&ne(s,S.x,S.y)}},[te,ee,V,ne,xe,ye]),_e=(0,o.useMemo)(()=>{const s=new Map;return b.forEach(g=>{const M=S=>{S.stopPropagation(),re(g,S,"click")},T=S=>{S.key==="Enter"||S.key===" "?re(g,S,"keyboard"):(X.current=S.currentTarget,V(g.id,S))};s.set(g.id,{onClick:M,onKeyDown:T})}),s},[b,re,V]);(0,o.useEffect)(()=>{const s=g=>{X.current&&!X.current.contains(g.target)&&ge()};return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[ge]);const be=E??P?.height??"100%",{primaryColor:ve,backgroundColor:Oe,positiveChangeColor:Fe,negativeChangeColor:We}=Te,{color:Se}=ue?ue({index:0,overrideColor:ve}):{color:ve||"#000000"},Ce=h?.startsWith("+")?Fe:We,ke=Oe||(0,w.j5)(Se,.08)||"rgba(0, 0, 0, 0.08)",Le=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:p["main-rate"],children:(0,n.E)(m)}),h&&(0,i.jsx)("span",{className:p["change-indicator"],style:{color:Ce},children:h})]}),Ne=s=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:p["tooltip-title"],children:s.label}),(0,i.jsxs)("div",{className:p["tooltip-content"],children:[(0,n.E)(s.rate),` \u2022 ${s.count??"no"} items`]})]}),je=!!(b&&b.length>0),Be=(0,o.useMemo)(()=>({mainRate:m,changeIndicator:h,stepsCount:b?.length||0}),[m,h,b?.length]);(0,k.t)({chartId:Pe,legendItems:[],chartType:"conversion-funnel",isDataValid:je,metadata:Be});const Ke=(0,I.j)();if(!je)return(0,i.jsx)(t.B,{direction:"column","data-testid":"conversion-funnel-chart",className:(0,r.A)(p.conversionFunnelChart,F&&p.loading,Y),style:{...P,height:be},children:(0,i.jsx)("div",{className:p["empty-state"],children:F?"Loading...":"No data available"})});const ze=Math.max(...b.map(s=>s.rate));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.B,{direction:"column","data-testid":"conversion-funnel-chart",ref:s=>{De(s),Ie.current=s},className:(0,r.A)(p.conversionFunnelChart,F&&p.loading,Y),style:{...P,height:be},children:[ce?ce({mainRate:m,changeIndicator:h,className:p["main-metric"],changeColor:Ce}):(0,i.jsx)("div",{className:p["main-metric"],children:Le()}),(0,i.jsx)("div",{className:p["funnel-container"],children:b.map((s,g)=>{const M=s.rate/ze*100,{isBlurred:T}=te(s.id);return(0,i.jsxs)("div",{className:(0,r.A)(p["funnel-step"],T&&p.blurred),children:[(0,i.jsxs)("div",{className:p["step-header"],children:[ie?ie({step:s,index:g,className:p["step-label"]}):(0,i.jsx)("span",{className:p["step-label"],children:s.label}),le?le({step:s,index:g,className:p["step-rate"]}):(0,i.jsx)("span",{className:p["step-rate"],children:(0,n.E)(s.rate)})]}),(0,i.jsx)("div",{className:(0,r.A)(p["bar-container"],T&&p.disabled),onClick:_e.get(s.id)?.onClick,onKeyDown:_e.get(s.id)?.onKeyDown,role:"button",tabIndex:T?-1:0,"aria-label":s.label,style:{backgroundColor:ke},children:(0,i.jsx)("div",{className:(0,r.A)(p["funnel-bar"],{[p["funnel-bar--animated"]]:$&&!F&&!Ke}),style:{height:`${M}%`,backgroundColor:Se}})})]},s.id)})})]}),Ae&&G&&(()=>{const s=de?de({step:G,index:b.findIndex(g=>g.id===G.id),top:me,left:pe,className:p["tooltip-wrapper"]}):Ne(G);return s?(0,i.jsx)(we,{top:me,left:pe,className:p["tooltip-wrapper"],children:s},Math.random()):null})()]})},ae=m=>(0,o.useContext)(R.m)?(0,i.jsx)(oe,{...m}):(0,i.jsx)(R.S,{children:(0,i.jsx)(oe,{...m})});ae.displayName="ConversionFunnelChart";try{conversionfunnelchart.displayName="conversionfunnelchart",conversionfunnelchart.__docgenInfo={description:"ConversionFunnelChart component with provider wrapper",displayName:"conversionfunnelchart",props:{mainRate:{defaultValue:null,description:"Main conversion rate to highlight",name:"mainRate",required:!0,type:{name:"number"}},changeIndicator:{defaultValue:null,description:"Change indicator (e.g., +2%, -1.5%)",name:"changeIndicator",required:!1,type:{name:"string"}},steps:{defaultValue:null,description:"Array of funnel steps",name:"steps",required:!0,type:{name:"FunnelStep[]"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:'Height of the chart container. Accepts a number (pixels) or CSS string (e.g., "400px", "100%"). Falls back to style.height if set, otherwise defaults to "100%".',name:"height",required:!1,type:{name:"string | number"}},style:{defaultValue:null,description:"Custom styling",name:"style",required:!1,type:{name:"CSSProperties"}},renderStepLabel:{defaultValue:null,description:"Custom render function for step labels",name:"renderStepLabel",required:!1,type:{name:"(props: StepLabelRenderProps) => ReactNode"}},renderStepRate:{defaultValue:null,description:"Custom render function for step rates",name:"renderStepRate",required:!1,type:{name:"(props: StepRateRenderProps) => ReactNode"}},renderMainMetric:{defaultValue:null,description:"Custom render function for the entire main metric section",name:"renderMainMetric",required:!1,type:{name:"(props: MainMetricRenderProps) => ReactNode"}},renderTooltip:{defaultValue:null,description:"Custom render function for tooltip content",name:"renderTooltip",required:!1,type:{name:"(props: TooltipRenderProps) => ReactNode"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},animation:{defaultValue:null,description:"Whether to show chart animation on initial render or not",name:"animation",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"]={docgenInfo:conversionfunnelchart.__docgenInfo,name:"conversionfunnelchart",path:"../charts/src/charts/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"})}catch{}const Ee={title:"JS Packages/Charts Library/Charts/Conversion Funnel Chart",component:ae,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{mainRate:{control:{type:"number",min:0,max:100,step:.1},description:"Main conversion rate to highlight",table:{type:{summary:"number"}}},changeIndicator:{control:"text",description:"Change indicator (e.g., +2%, -1.5%)",table:{type:{summary:"string"}}},steps:{control:"object",description:"Array of funnel steps",table:{type:{summary:"FunnelStep[]"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name",table:{type:{summary:"string"}}},height:{control:"text",description:'Height of the chart container (e.g., "100%", "400px")',table:{type:{summary:"string | number"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}},...u.xo,...x.jW},decorators:[u.OI]},O={args:{...x.In,mainRate:10.3,changeIndicator:"+2%",steps:l.$w,loading:!1}},L={args:{mainRate:8.7,changeIndicator:"-1.6%",steps:l.Ro,loading:!1}},N={args:{mainRate:18.7,changeIndicator:"+5.2%",steps:l.hk,loading:!1}},B={args:{mainRate:10.3,steps:l.$w,loading:!1}},K={args:{mainRate:10.3,changeIndicator:"+2%",steps:l.$w,loading:!0}},z={args:{...O.args,animation:!0}},H={args:{mainRate:0,steps:[],loading:!1}},Q={args:{...x.In,mainRate:10.3,changeIndicator:"+2%",steps:l.$w,loading:!1,height:"200px"}},J={args:{mainRate:10.3,changeIndicator:"+2%",steps:l.$w,renderMainMetric:({mainRate:m,changeIndicator:h,className:b})=>(0,i.jsxs)("div",{className:b,style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px",padding:"24px",marginBottom:"32px",color:"white",textAlign:"center",height:"fit-content"},children:[(0,i.jsx)("h3",{style:{margin:"0 0 12px 0",fontSize:"14px",fontWeight:"500",opacity:.9,textTransform:"uppercase",letterSpacing:"0.5px"},children:"Overall Conversion Rate"}),(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"16px"},children:[(0,i.jsxs)("span",{style:{fontSize:"42px",fontWeight:"bold",fontFamily:"Inter, sans-serif",lineHeight:1},children:[m.toFixed(1),"%"]}),h&&(0,i.jsx)("span",{style:{fontSize:"16px",fontWeight:"600",fontFamily:"Inter, sans-serif",backgroundColor:h.startsWith("+")?"rgba(16, 185, 129, 0.2)":"rgba(239, 68, 68, 0.2)",color:h.startsWith("+")?"#10b981":"#ef4444",padding:"6px 12px",borderRadius:"8px",border:`1px solid ${h.startsWith("+")?"#10b981":"#ef4444"}`},children:h})]}),(0,i.jsx)("p",{style:{margin:"12px 0 0 0",fontSize:"12px",opacity:.8,fontFamily:"Inter, sans-serif"},children:"Last 30 days vs previous period"})]}),renderTooltip:({step:m})=>(0,i.jsxs)("div",{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px",padding:"16px 20px",color:"white",fontFamily:"Inter, sans-serif",boxShadow:"0 8px 32px rgba(118, 75, 162, 0.3)",border:"none",minWidth:"200px"},children:[(0,i.jsx)("div",{style:{fontSize:"11px",fontWeight:"500",opacity:.8,textTransform:"uppercase",letterSpacing:"0.5px",margin:"0 0 8px 0"},children:m.label}),(0,i.jsxs)("div",{style:{fontSize:"18px",fontWeight:"bold",margin:"0",display:"flex",alignItems:"center",gap:"8px"},children:[m.rate.toFixed(1),"%",m.count&&(0,i.jsxs)("span",{style:{fontSize:"14px",fontWeight:"400",opacity:.9},children:["\u2022 ",m.count.toLocaleString()," items"]})]})]})},decorators:[m=>(0,i.jsx)(m,{})]},U={args:{mainRate:10.3,changeIndicator:"+2%",steps:l.$w,renderMainMetric:()=>null,renderTooltip:()=>null}},Me=["Default","NegativeChange","HighConversion","WithoutChangeIndicator","Loading","Animation","EmptyData","FixedDimensions","CustomRenderProps","WithoutTooltips"];O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...O.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 8.7,
    changeIndicator: '-1.6%',
    steps: lowConversionFunnelData,
    loading: false
  }
}`,...L.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 18.7,
    changeIndicator: '+5.2%',
    steps: highConversionFunnelData,
    loading: false
  }
}`,...N.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
    ...sharedThemeArgs,
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false,
    height: '200px'
  }
}`,...Q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    renderMainMetric: () => null,
    renderTooltip: () => null
  }
}`,...U.parameters?.docs?.source}}}},"../charts/src/hooks/use-prefers-reduced-motion.ts"(C,y,e){"use strict";e.d(y,{j:()=>c});var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const x="(prefers-reduced-motion: no-preference)",l=()=>!window.matchMedia(x).matches;function c(){const[f,t]=(0,u.useState)(l);return(0,u.useEffect)(()=>{const r=window.matchMedia(x),o=I=>{t(!I.matches)};return r.addEventListener("change",o),()=>{r.removeEventListener("change",o)}},[]),f}},"../charts/src/providers/chart-context/hooks/use-chart-id.ts"(C,y,e){"use strict";e.d(y,{R:()=>x});var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const x=l=>{const c=(0,u.useId)();return l||c}},"../charts/src/providers/chart-context/hooks/use-chart-registration.ts"(C,y,e){"use strict";e.d(y,{t:()=>t});var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),x=e("../../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js"),l=e.n(x);const c=r=>{const o=(0,u.useRef)(r);return l()(o.current,r)||(o.current=r),o.current};var f=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts");const t=({chartId:r,legendItems:o,chartType:I,isDataValid:A,metadata:D})=>{const{registerChart:W,unregisterChart:k}=(0,f.j)(),R=c(o),w=(0,u.useMemo)(()=>D,[D]);(0,u.useEffect)(()=>(A&&W(r,{legendItems:R,chartType:I,metadata:w}),()=>{k(r)}),[r,R,I,w,A])}},"../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"(C,y,e){"use strict";e.d(y,{p:()=>c});var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),x=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),l=e("../charts/src/providers/chart-context/themes.ts");const c=()=>(0,u.useContext)(x.m)?.theme??l.z},"../charts/src/utils/format-percentage.ts"(C,y,e){"use strict";e.d(y,{E:()=>x});var u=e("../number-formatters/src/index.ts");const x=l=>(0,u.ZV)(l/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})},"../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"(C,y){var e,u;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var x={}.hasOwnProperty;function l(){for(var t="",r=0;r<arguments.length;r++){var o=arguments[r];o&&(t=f(t,c(o)))}return t}function c(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return l.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var r="";for(var o in t)x.call(t,o)&&t[o]&&(r=f(r,o));return r}function f(t,r){return r?t?t+" "+r:t+r:t}C.exports?(l.default=l,C.exports=l):(e=[],u=(function(){return l}).apply(y,e),u!==void 0&&(C.exports=u))})()},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"(C,y,e){"use strict";e.d(y,{A:()=>l});function u(c){var f,t,r="";if(typeof c=="string"||typeof c=="number")r+=c;else if(typeof c=="object")if(Array.isArray(c)){var o=c.length;for(f=0;f<o;f++)c[f]&&(t=u(c[f]))&&(r&&(r+=" "),r+=t)}else for(t in c)c[t]&&(r&&(r+=" "),r+=t);return r}function x(){for(var c,f,t=0,r="",o=arguments.length;t<o;t++)(c=arguments[t])&&(f=u(c))&&(r&&(r+=" "),r+=f);return r}const l=x},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/conversion-funnel-chart/conversion-funnel-chart.module.scss"(C,y,e){"use strict";e.d(y,{A:()=>t});var u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(u),l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),c=e.n(l),f=c()(x());f.push([C.id,'.DHel8EQzSdtJJyK9dkBd{font-family:var(--funnel-font-family, "SF Pro Text")}.DHel8EQzSdtJJyK9dkBd.EipzMPI0uuJrrUuSnzow{opacity:.6;pointer-events:none}.LR6zx5NLungP01PEyXT7{display:flex;align-items:baseline;gap:8px;margin-bottom:24px;height:20px}.G5ecZvHjWDm43YjYmdwW{overflow:hidden;color:#1e1e1e;text-overflow:ellipsis;font-family:var(--funnel-font-family, "SF Pro Text");font-size:18px;font-style:normal;font-weight:500;line-height:20px;margin:0}.WQ7_PJVUtPMzD14vKyWQ{overflow:hidden;text-overflow:ellipsis;font-family:var(--funnel-font-family, "SF Pro Text");font-size:13px;font-style:normal;font-weight:500;line-height:20px;margin:0}.pjKie7XwVwrwcjbMOxlo{display:flex;gap:16px;align-items:flex-end;flex:1;min-height:200px;width:100%}.Bh1bvH6Mp5quts4hYtCK{flex:1 1 0;min-width:0;display:flex;flex-direction:column;height:100%;transition:all .3s ease}.Bh1bvH6Mp5quts4hYtCK.h3LFoTuMC8KnwXPRgquL{opacity:.3}.nxPLFSO7Av5LTJprXg6s{margin-bottom:24px}.ZyhW3eti5iesu55yQoN0{color:#757575;font-family:var(--step-font-family, "SF Pro");font-size:12px;font-style:normal;font-weight:400;line-height:16px;margin:0 0 2px 0;display:block;overflow:hidden;text-overflow:ellipsis}.AHuxyx4T3oR7B2dxsSbQ{color:#1e1e1e;font-family:var(--step-font-family, "SF Pro");font-size:13px;font-style:normal;font-weight:500;line-height:20px;margin:0;display:block}.SezxNWxdJQDJFnp7xPFT{flex:1;display:flex;align-items:flex-end;border-radius:4px;position:relative;cursor:pointer;transition:all .2s ease}.SezxNWxdJQDJFnp7xPFT.o9lqgi2v2zKGO9flGGHR{cursor:pointer}.vcIZlWxXQ9HPlPTpqUdK{width:100%;min-height:4px;border-radius:4px 4px 0 0;transition:all .3s ease}.vcIZlWxXQ9HPlPTpqUdK.JD9utXnUBSYG6i0Q11Bv{box-shadow:0 4px 16px rgba(0,0,0,.2);filter:brightness(1.1)}.rPadlc9zWlfRSHp4SokQ{transform-origin:bottom;transform-box:fill-box;transform:scaleY(0);animation:kyP1wTXCfPGQJ74qT3oX 1s ease-out forwards}@keyframes kyP1wTXCfPGQJ74qT3oX{to{transform:scaleY(1)}}.b57I_FjQLOfJRxsyI2Ae{display:inline-flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:4px;border-bottom:1px solid var(--Gray-Gray-5, #dcdcde);background:var(--black-white-white, #fff);border-radius:4px !important;padding:12px !important;box-shadow:0 1px 3px 0 rgba(0,0,0,.15),0 3px 9px 0 rgba(0,0,0,.12) !important}.FMl6Qqk6oR3XrDTMlbHd{color:#1e1e1e;font-family:"SF Pro",sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:16px}.TjAc7xHwVVj7WXZ2qmqJ{color:#1e1e1e;font-family:"SF Pro",sans-serif;font-size:13px;font-style:normal;font-weight:500;line-height:20px}.tqM773g8gftoYTHKShwg{text-align:center;padding:48px 24px;color:#6b7280;font-size:16px}',""]),f.locals={conversionFunnelChart:"DHel8EQzSdtJJyK9dkBd",loading:"EipzMPI0uuJrrUuSnzow","main-metric":"LR6zx5NLungP01PEyXT7","main-rate":"G5ecZvHjWDm43YjYmdwW","change-indicator":"WQ7_PJVUtPMzD14vKyWQ","funnel-container":"pjKie7XwVwrwcjbMOxlo","funnel-step":"Bh1bvH6Mp5quts4hYtCK",blurred:"h3LFoTuMC8KnwXPRgquL","step-header":"nxPLFSO7Av5LTJprXg6s","step-label":"ZyhW3eti5iesu55yQoN0","step-rate":"AHuxyx4T3oR7B2dxsSbQ","bar-container":"SezxNWxdJQDJFnp7xPFT",disabled:"o9lqgi2v2zKGO9flGGHR","funnel-bar":"vcIZlWxXQ9HPlPTpqUdK",selected:"JD9utXnUBSYG6i0Q11Bv","funnel-bar--animated":"rPadlc9zWlfRSHp4SokQ",stretch:"kyP1wTXCfPGQJ74qT3oX","tooltip-wrapper":"b57I_FjQLOfJRxsyI2Ae","tooltip-title":"FMl6Qqk6oR3XrDTMlbHd","tooltip-content":"TjAc7xHwVVj7WXZ2qmqJ","empty-state":"tqM773g8gftoYTHKShwg"};const t=f},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"(C){"use strict";var y=function(a){return e(a)&&!u(a)};function e(n){return!!n&&typeof n=="object"}function u(n){var a=Object.prototype.toString.call(n);return a==="[object RegExp]"||a==="[object Date]"||c(n)}var x=typeof Symbol=="function"&&Symbol.for,l=x?Symbol.for("react.element"):60103;function c(n){return n.$$typeof===l}function f(n){return Array.isArray(n)?[]:{}}function t(n,a){return a.clone!==!1&&a.isMergeableObject(n)?R(f(n),n,a):n}function r(n,a,d){return n.concat(a).map(function(j){return t(j,d)})}function o(n,a){if(!a.customMerge)return R;var d=a.customMerge(n);return typeof d=="function"?d:R}function I(n){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(n).filter(function(a){return Object.propertyIsEnumerable.call(n,a)}):[]}function A(n){return Object.keys(n).concat(I(n))}function D(n,a){try{return a in n}catch{return!1}}function W(n,a){return D(n,a)&&!(Object.hasOwnProperty.call(n,a)&&Object.propertyIsEnumerable.call(n,a))}function k(n,a,d){var j={};return d.isMergeableObject(n)&&A(n).forEach(function(_){j[_]=t(n[_],d)}),A(a).forEach(function(_){W(n,_)||(D(n,_)&&d.isMergeableObject(a[_])?j[_]=o(_,d)(n[_],a[_],d):j[_]=t(a[_],d))}),j}function R(n,a,d){d=d||{},d.arrayMerge=d.arrayMerge||r,d.isMergeableObject=d.isMergeableObject||y,d.cloneUnlessOtherwiseSpecified=t;var j=Array.isArray(a),_=Array.isArray(n),se=j===_;return se?j?d.arrayMerge(n,a,d):k(n,a,d):t(a,d)}R.all=function(a,d){if(!Array.isArray(a))throw new Error("first argument should be an array");return a.reduce(function(j,_){return R(j,_,d)},{})};var w=R;C.exports=w}}]);
