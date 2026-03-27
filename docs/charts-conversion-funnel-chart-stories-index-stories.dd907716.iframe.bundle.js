(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7474],{"../charts/src/charts/conversion-funnel-chart/stories/index.stories.tsx"(_,f,e){"use strict";e.r(f),e.d(f,{Animation:()=>z,CustomRenderProps:()=>U,Default:()=>W,EmptyData:()=>H,FixedDimensions:()=>Q,HighConversion:()=>L,Loading:()=>K,NegativeChange:()=>N,WithoutChangeIndicator:()=>B,WithoutTooltips:()=>J,__namedExportsOrder:()=>Te,default:()=>Pe});var s=e("../charts/src/stories/chart-decorator.tsx"),u=e("../charts/src/stories/theme-config.tsx"),a=e("../charts/src/stories/sample-data/index.ts"),n=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),p=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),t=e("../../../node_modules/.pnpm/@wordpress+ui@0.9.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1_stylelint@17.5.0/node_modules/@wordpress/ui/build-module/stack/stack.mjs"),o=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),E=e("../charts/src/hooks/use-prefers-reduced-motion.ts"),I=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),w=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),D=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),A=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),R=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),F=e("../charts/src/utils/color-utils.ts"),r=e("../charts/src/utils/format-percentage.ts"),c=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(c),C=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/conversion-funnel-chart/conversion-funnel-chart.module.scss"),v={};v.insert="head",v.singleton=!1;var se=m()(C.A,v);const h=C.A.locals||{},Re=g=>{const[x,b]=(0,l.useState)(null),k=(0,l.useCallback)(P=>{x===P?(b(null),g?.()):b(P)},[x,g]),$=(0,l.useCallback)((P,O)=>{O.key==="Enter"||O.key===" "?(O.preventDefault(),x===P?(b(null),g?.()):b(P)):O.key==="Escape"&&(O.preventDefault(),b(null),g?.())},[x,g]),Y=(0,l.useCallback)(()=>{b(null),g?.()},[g]),Z=(0,l.useCallback)(P=>({isClicked:x===P,isBlurred:x!==null&&x!==P}),[x]);return{clickedStep:x,handleBarClick:k,handleBarKeyDown:$,clearSelection:Y,getStepState:Z}};var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const oe=({mainRate:g,changeIndicator:x,steps:b,loading:k=!1,animation:$,className:Y,chartId:Z,height:P,style:O,renderStepLabel:ie,renderStepRate:le,renderMainMetric:ce,renderTooltip:de})=>{const Ee=(0,I.R)(Z),{conversionFunnelChart:Oe}=(0,w.p)(),{getElementStyles:pe}=(0,D.j)(),Me=(0,l.useRef)(null),X=(0,l.useRef)(null),{tooltipData:G,tooltipLeft:ue,tooltipTop:me,tooltipOpen:Ie,showTooltip:fe,hideTooltip:q}=(0,n.A)(),{handleBarClick:ee,handleBarKeyDown:V,clearSelection:he,getStepState:te}=Re(q),{containerRef:we,TooltipInPortal:Ae,containerBounds:S}=(0,p.A)({detectBounds:!0,scroll:!0}),ge=(0,l.useCallback)(()=>{he(),X.current=null,q()},[he,q]),ne=(0,l.useCallback)((i,y,T)=>{fe({tooltipData:i,tooltipLeft:y,tooltipTop:T-10})},[fe]),xe=(0,l.useCallback)(i=>S.width===0||S.height===0?null:{x:i.clientX-S.left,y:i.clientY-S.top},[S.width,S.height,S.left,S.top]),ye=(0,l.useCallback)(i=>{if(S.width===0||S.height===0)return null;const y=i.currentTarget.getBoundingClientRect(),T=y.left+y.width/2-S.left,M=y.top-S.top;return{x:T,y:M}},[S.width,S.height,S.left,S.top]),re=(0,l.useCallback)((i,y,T)=>{X.current=y.currentTarget;const{isClicked:M}=te(i.id);if(M){T==="click"?ee(i.id):V(i.id,y);return}if(T==="click"){ee(i.id);const j=xe(y);j&&ne(i,j.x,j.y)}else{V(i.id,y);const j=ye(y);j&&ne(i,j.x,j.y)}},[te,ee,V,ne,xe,ye]),_e=(0,l.useMemo)(()=>{const i=new Map;return b.forEach(y=>{const T=j=>{j.stopPropagation(),re(y,j,"click")},M=j=>{j.key==="Enter"||j.key===" "?re(y,j,"keyboard"):(X.current=j.currentTarget,V(y.id,j))};i.set(y.id,{onClick:T,onKeyDown:M})}),i},[b,re,V]);(0,l.useEffect)(()=>{const i=y=>{X.current&&!X.current.contains(y.target)&&ge()};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[ge]);const ve=P??O?.height??"100%",{primaryColor:be,backgroundColor:De,positiveChangeColor:Fe,negativeChangeColor:We}=Oe,{color:Se}=pe?pe({index:0,overrideColor:be}):{color:be||"#000000"},je=x?.startsWith("+")?Fe:We,ke=De||(0,F.j5)(Se,.08)||"rgba(0, 0, 0, 0.08)",Ne=()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:h["main-rate"],children:(0,r.E)(g)}),x&&(0,d.jsx)("span",{className:h["change-indicator"],style:{color:je},children:x})]}),Le=i=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:h["tooltip-title"],children:i.label}),(0,d.jsxs)("div",{className:h["tooltip-content"],children:[(0,r.E)(i.rate),` \u2022 ${i.count??"no"} items`]})]}),Ce=!!(b&&b.length>0),Be=(0,l.useMemo)(()=>({mainRate:g,changeIndicator:x,stepsCount:b?.length||0}),[g,x,b?.length]);(0,A.t)({chartId:Ee,legendItems:[],chartType:"conversion-funnel",isDataValid:Ce,metadata:Be});const Ke=(0,E.j)();if(!Ce)return(0,d.jsx)(t.B,{direction:"column","data-testid":"conversion-funnel-chart",className:(0,o.A)(h.conversionFunnelChart,k&&h.loading,Y),style:{...O,height:ve},children:(0,d.jsx)("div",{className:h["empty-state"],children:k?"Loading...":"No data available"})});const ze=Math.max(...b.map(i=>i.rate));return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.B,{direction:"column","data-testid":"conversion-funnel-chart",ref:i=>{we(i),Me.current=i},className:(0,o.A)(h.conversionFunnelChart,k&&h.loading,Y),style:{...O,height:ve},children:[ce?ce({mainRate:g,changeIndicator:x,className:h["main-metric"],changeColor:je}):(0,d.jsx)("div",{className:h["main-metric"],children:Ne()}),(0,d.jsx)("div",{className:h["funnel-container"],children:b.map((i,y)=>{const T=i.rate/ze*100,{isBlurred:M}=te(i.id);return(0,d.jsxs)("div",{className:(0,o.A)(h["funnel-step"],M&&h.blurred),children:[(0,d.jsxs)("div",{className:h["step-header"],children:[ie?ie({step:i,index:y,className:h["step-label"]}):(0,d.jsx)("span",{className:h["step-label"],children:i.label}),le?le({step:i,index:y,className:h["step-rate"]}):(0,d.jsx)("span",{className:h["step-rate"],children:(0,r.E)(i.rate)})]}),(0,d.jsx)("div",{className:(0,o.A)(h["bar-container"],M&&h.disabled),onClick:_e.get(i.id)?.onClick,onKeyDown:_e.get(i.id)?.onKeyDown,role:"button",tabIndex:M?-1:0,"aria-label":i.label,style:{backgroundColor:ke},children:(0,d.jsx)("div",{className:(0,o.A)(h["funnel-bar"],{[h["funnel-bar--animated"]]:$&&!k&&!Ke}),style:{height:`${T}%`,backgroundColor:Se}})})]},i.id)})})]}),Ie&&G&&(()=>{const i=de?de({step:G,index:b.findIndex(y=>y.id===G.id),top:me,left:ue,className:h["tooltip-wrapper"]}):Le(G);return i?(0,d.jsx)(Ae,{top:me,left:ue,className:h["tooltip-wrapper"],children:i},Math.random()):null})()]})},ae=g=>(0,l.useContext)(R.m)?(0,d.jsx)(oe,{...g}):(0,d.jsx)(R.S,{children:(0,d.jsx)(oe,{...g})});ae.displayName="ConversionFunnelChart";try{conversionfunnelchart.displayName="conversionfunnelchart",conversionfunnelchart.__docgenInfo={description:"ConversionFunnelChart component with provider wrapper",displayName:"conversionfunnelchart",props:{mainRate:{defaultValue:null,description:"Main conversion rate to highlight",name:"mainRate",required:!0,type:{name:"number"}},changeIndicator:{defaultValue:null,description:"Change indicator (e.g., +2%, -1.5%)",name:"changeIndicator",required:!1,type:{name:"string"}},steps:{defaultValue:null,description:"Array of funnel steps",name:"steps",required:!0,type:{name:"FunnelStep[]"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:'Height of the chart container. Accepts a number (pixels) or CSS string (e.g., "400px", "100%"). Falls back to style.height if set, otherwise defaults to "100%".',name:"height",required:!1,type:{name:"string | number"}},style:{defaultValue:null,description:"Custom styling",name:"style",required:!1,type:{name:"CSSProperties"}},renderStepLabel:{defaultValue:null,description:"Custom render function for step labels",name:"renderStepLabel",required:!1,type:{name:"(props: StepLabelRenderProps) => ReactNode"}},renderStepRate:{defaultValue:null,description:"Custom render function for step rates",name:"renderStepRate",required:!1,type:{name:"(props: StepRateRenderProps) => ReactNode"}},renderMainMetric:{defaultValue:null,description:"Custom render function for the entire main metric section",name:"renderMainMetric",required:!1,type:{name:"(props: MainMetricRenderProps) => ReactNode"}},renderTooltip:{defaultValue:null,description:"Custom render function for tooltip content",name:"renderTooltip",required:!1,type:{name:"(props: TooltipRenderProps) => ReactNode"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},animation:{defaultValue:null,description:"Whether to show chart animation on initial render or not",name:"animation",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"]={docgenInfo:conversionfunnelchart.__docgenInfo,name:"conversionfunnelchart",path:"../charts/src/charts/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"})}catch{}const Pe={title:"JS Packages/Charts Library/Charts/Conversion Funnel Chart",component:ae,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{mainRate:{control:{type:"number",min:0,max:100,step:.1},description:"Main conversion rate to highlight",table:{type:{summary:"number"}}},changeIndicator:{control:"text",description:"Change indicator (e.g., +2%, -1.5%)",table:{type:{summary:"string"}}},steps:{control:"object",description:"Array of funnel steps",table:{type:{summary:"FunnelStep[]"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name",table:{type:{summary:"string"}}},height:{control:"text",description:'Height of the chart container (e.g., "100%", "400px")',table:{type:{summary:"string | number"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}},...s.xo,...u.jW},decorators:[s.OI]},W={args:{...u.In,mainRate:10.3,changeIndicator:"+2%",steps:a.$w,loading:!1}},N={args:{mainRate:8.7,changeIndicator:"-1.6%",steps:a.Ro,loading:!1}},L={args:{mainRate:18.7,changeIndicator:"+5.2%",steps:a.hk,loading:!1}},B={args:{mainRate:10.3,steps:a.$w,loading:!1}},K={args:{mainRate:10.3,changeIndicator:"+2%",steps:a.$w,loading:!0}},z={args:{...W.args,animation:!0}},H={args:{mainRate:0,steps:[],loading:!1}},Q={args:{...u.In,mainRate:10.3,changeIndicator:"+2%",steps:a.$w,loading:!1,height:"200px"}},U={args:{mainRate:10.3,changeIndicator:"+2%",steps:a.$w,renderMainMetric:({mainRate:g,changeIndicator:x,className:b})=>(0,d.jsxs)("div",{className:b,style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px",padding:"24px",marginBottom:"32px",color:"white",textAlign:"center",height:"fit-content"},children:[(0,d.jsx)("h3",{style:{margin:"0 0 12px 0",fontSize:"14px",fontWeight:"500",opacity:.9,textTransform:"uppercase",letterSpacing:"0.5px"},children:"Overall Conversion Rate"}),(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"16px"},children:[(0,d.jsxs)("span",{style:{fontSize:"42px",fontWeight:"bold",fontFamily:"Inter, sans-serif",lineHeight:1},children:[g.toFixed(1),"%"]}),x&&(0,d.jsx)("span",{style:{fontSize:"16px",fontWeight:"600",fontFamily:"Inter, sans-serif",backgroundColor:x.startsWith("+")?"rgba(16, 185, 129, 0.2)":"rgba(239, 68, 68, 0.2)",color:x.startsWith("+")?"#10b981":"#ef4444",padding:"6px 12px",borderRadius:"8px",border:`1px solid ${x.startsWith("+")?"#10b981":"#ef4444"}`},children:x})]}),(0,d.jsx)("p",{style:{margin:"12px 0 0 0",fontSize:"12px",opacity:.8,fontFamily:"Inter, sans-serif"},children:"Last 30 days vs previous period"})]}),renderTooltip:({step:g})=>(0,d.jsxs)("div",{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px",padding:"16px 20px",color:"white",fontFamily:"Inter, sans-serif",boxShadow:"0 8px 32px rgba(118, 75, 162, 0.3)",border:"none",minWidth:"200px"},children:[(0,d.jsx)("div",{style:{fontSize:"11px",fontWeight:"500",opacity:.8,textTransform:"uppercase",letterSpacing:"0.5px",margin:"0 0 8px 0"},children:g.label}),(0,d.jsxs)("div",{style:{fontSize:"18px",fontWeight:"bold",margin:"0",display:"flex",alignItems:"center",gap:"8px"},children:[g.rate.toFixed(1),"%",g.count&&(0,d.jsxs)("span",{style:{fontSize:"14px",fontWeight:"400",opacity:.9},children:["\u2022 ",g.count.toLocaleString()," items"]})]})]})},decorators:[g=>(0,d.jsx)(g,{})]},J={args:{mainRate:10.3,changeIndicator:"+2%",steps:a.$w,renderMainMetric:()=>null,renderTooltip:()=>null}},Te=["Default","NegativeChange","HighConversion","WithoutChangeIndicator","Loading","Animation","EmptyData","FixedDimensions","CustomRenderProps","WithoutTooltips"];W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...W.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 8.7,
    changeIndicator: '-1.6%',
    steps: lowConversionFunnelData,
    loading: false
  }
}`,...N.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
    ...sharedThemeArgs,
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false,
    height: '200px'
  }
}`,...Q.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    renderMainMetric: () => null,
    renderTooltip: () => null
  }
}`,...J.parameters?.docs?.source}}}},"../charts/src/hooks/use-prefers-reduced-motion.ts"(_,f,e){"use strict";e.d(f,{j:()=>n});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const u="(prefers-reduced-motion: no-preference)",a=()=>!window.matchMedia(u).matches;function n(){const[p,t]=(0,s.useState)(a);return(0,s.useEffect)(()=>{const o=window.matchMedia(u),l=E=>{t(!E.matches)};return o.addEventListener("change",l),()=>{o.removeEventListener("change",l)}},[]),p}},"../charts/src/providers/chart-context/hooks/use-chart-id.ts"(_,f,e){"use strict";e.d(f,{R:()=>u});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const u=a=>{const n=(0,s.useId)();return a||n}},"../charts/src/providers/chart-context/hooks/use-chart-registration.ts"(_,f,e){"use strict";e.d(f,{t:()=>t});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js"),a=e.n(u);const n=o=>{const l=(0,s.useRef)(o);return a()(l.current,o)||(l.current=o),l.current};var p=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts");const t=({chartId:o,legendItems:l,chartType:E,isDataValid:I,metadata:w})=>{const{registerChart:D,unregisterChart:A}=(0,p.j)(),R=n(l),F=(0,s.useMemo)(()=>w,[w]);(0,s.useEffect)(()=>(I&&D(o,{legendItems:R,chartType:E,metadata:F}),()=>{A(o)}),[o,R,E,F,I])}},"../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"(_,f,e){"use strict";e.d(f,{p:()=>n});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),a=e("../charts/src/providers/chart-context/themes.ts");const n=()=>(0,s.useContext)(u.m)?.theme??a.z},"../charts/src/utils/format-percentage.ts"(_,f,e){"use strict";e.d(f,{E:()=>u});var s=e("../number-formatters/src/index.ts");const u=a=>(0,s.ZV)(a/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})},"../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"(_,f){var e,s;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var u={}.hasOwnProperty;function a(){for(var t="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(t=p(t,n(l)))}return t}function n(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return a.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var o="";for(var l in t)u.call(t,l)&&t[l]&&(o=p(o,l));return o}function p(t,o){return o?t?t+" "+o:t+o:t}_.exports?(a.default=a,_.exports=a):(e=[],s=(function(){return a}).apply(f,e),s!==void 0&&(_.exports=s))})()},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"(_,f,e){"use strict";e.d(f,{A:()=>a});function s(n){var p,t,o="";if(typeof n=="string"||typeof n=="number")o+=n;else if(typeof n=="object")if(Array.isArray(n)){var l=n.length;for(p=0;p<l;p++)n[p]&&(t=s(n[p]))&&(o&&(o+=" "),o+=t)}else for(t in n)n[t]&&(o&&(o+=" "),o+=t);return o}function u(){for(var n,p,t=0,o="",l=arguments.length;t<l;t++)(n=arguments[t])&&(p=s(n))&&(o&&(o+=" "),o+=p);return o}const a=u},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/conversion-funnel-chart/conversion-funnel-chart.module.scss"(_,f,e){"use strict";e.d(f,{A:()=>t});var s=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(s),a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),n=e.n(a),p=n()(u());p.push([_.id,'.DHel8EQzSdtJJyK9dkBd{font-family:var(--funnel-font-family, "SF Pro Text")}.DHel8EQzSdtJJyK9dkBd.EipzMPI0uuJrrUuSnzow{opacity:.6;pointer-events:none}.LR6zx5NLungP01PEyXT7{display:flex;align-items:baseline;gap:8px;margin-bottom:24px;height:20px}.G5ecZvHjWDm43YjYmdwW{overflow:hidden;color:#1e1e1e;text-overflow:ellipsis;font-family:var(--funnel-font-family, "SF Pro Text");font-size:18px;font-style:normal;font-weight:500;line-height:20px;margin:0}.WQ7_PJVUtPMzD14vKyWQ{overflow:hidden;text-overflow:ellipsis;font-family:var(--funnel-font-family, "SF Pro Text");font-size:13px;font-style:normal;font-weight:500;line-height:20px;margin:0}.pjKie7XwVwrwcjbMOxlo{display:flex;gap:16px;align-items:flex-end;flex:1;min-height:200px;width:100%}.Bh1bvH6Mp5quts4hYtCK{flex:1 1 0;min-width:0;display:flex;flex-direction:column;height:100%;transition:all .3s ease}.Bh1bvH6Mp5quts4hYtCK.h3LFoTuMC8KnwXPRgquL{opacity:.3}.nxPLFSO7Av5LTJprXg6s{margin-bottom:24px}.ZyhW3eti5iesu55yQoN0{color:#757575;font-family:var(--step-font-family, "SF Pro");font-size:12px;font-style:normal;font-weight:400;line-height:16px;margin:0 0 2px 0;display:block;overflow:hidden;text-overflow:ellipsis}.AHuxyx4T3oR7B2dxsSbQ{color:#1e1e1e;font-family:var(--step-font-family, "SF Pro");font-size:13px;font-style:normal;font-weight:500;line-height:20px;margin:0;display:block}.SezxNWxdJQDJFnp7xPFT{flex:1;display:flex;align-items:flex-end;border-radius:4px;position:relative;cursor:pointer;transition:all .2s ease}.SezxNWxdJQDJFnp7xPFT.o9lqgi2v2zKGO9flGGHR{cursor:pointer}.vcIZlWxXQ9HPlPTpqUdK{width:100%;min-height:4px;border-radius:4px 4px 0 0;transition:all .3s ease}.vcIZlWxXQ9HPlPTpqUdK.JD9utXnUBSYG6i0Q11Bv{box-shadow:0 4px 16px rgba(0,0,0,.2);filter:brightness(1.1)}.rPadlc9zWlfRSHp4SokQ{transform-origin:bottom;transform-box:fill-box;transform:scaleY(0);animation:kyP1wTXCfPGQJ74qT3oX 1s ease-out forwards}@keyframes kyP1wTXCfPGQJ74qT3oX{to{transform:scaleY(1)}}.b57I_FjQLOfJRxsyI2Ae{display:inline-flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:4px;border-bottom:1px solid var(--Gray-Gray-5, #dcdcde);background:var(--black-white-white, #fff);border-radius:4px !important;padding:12px !important;box-shadow:0 1px 3px 0 rgba(0,0,0,.15),0 3px 9px 0 rgba(0,0,0,.12) !important}.FMl6Qqk6oR3XrDTMlbHd{color:#1e1e1e;font-family:"SF Pro",sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:16px}.TjAc7xHwVVj7WXZ2qmqJ{color:#1e1e1e;font-family:"SF Pro",sans-serif;font-size:13px;font-style:normal;font-weight:500;line-height:20px}.tqM773g8gftoYTHKShwg{text-align:center;padding:48px 24px;color:#6b7280;font-size:16px}',""]),p.locals={conversionFunnelChart:"DHel8EQzSdtJJyK9dkBd",loading:"EipzMPI0uuJrrUuSnzow","main-metric":"LR6zx5NLungP01PEyXT7","main-rate":"G5ecZvHjWDm43YjYmdwW","change-indicator":"WQ7_PJVUtPMzD14vKyWQ","funnel-container":"pjKie7XwVwrwcjbMOxlo","funnel-step":"Bh1bvH6Mp5quts4hYtCK",blurred:"h3LFoTuMC8KnwXPRgquL","step-header":"nxPLFSO7Av5LTJprXg6s","step-label":"ZyhW3eti5iesu55yQoN0","step-rate":"AHuxyx4T3oR7B2dxsSbQ","bar-container":"SezxNWxdJQDJFnp7xPFT",disabled:"o9lqgi2v2zKGO9flGGHR","funnel-bar":"vcIZlWxXQ9HPlPTpqUdK",selected:"JD9utXnUBSYG6i0Q11Bv","funnel-bar--animated":"rPadlc9zWlfRSHp4SokQ",stretch:"kyP1wTXCfPGQJ74qT3oX","tooltip-wrapper":"b57I_FjQLOfJRxsyI2Ae","tooltip-title":"FMl6Qqk6oR3XrDTMlbHd","tooltip-content":"TjAc7xHwVVj7WXZ2qmqJ","empty-state":"tqM773g8gftoYTHKShwg"};const t=p},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"(_){"use strict";var f=function(c){return e(c)&&!s(c)};function e(r){return!!r&&typeof r=="object"}function s(r){var c=Object.prototype.toString.call(r);return c==="[object RegExp]"||c==="[object Date]"||n(r)}var u=typeof Symbol=="function"&&Symbol.for,a=u?Symbol.for("react.element"):60103;function n(r){return r.$$typeof===a}function p(r){return Array.isArray(r)?[]:{}}function t(r,c){return c.clone!==!1&&c.isMergeableObject(r)?R(p(r),r,c):r}function o(r,c,m){return r.concat(c).map(function(C){return t(C,m)})}function l(r,c){if(!c.customMerge)return R;var m=c.customMerge(r);return typeof m=="function"?m:R}function E(r){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(r).filter(function(c){return Object.propertyIsEnumerable.call(r,c)}):[]}function I(r){return Object.keys(r).concat(E(r))}function w(r,c){try{return c in r}catch{return!1}}function D(r,c){return w(r,c)&&!(Object.hasOwnProperty.call(r,c)&&Object.propertyIsEnumerable.call(r,c))}function A(r,c,m){var C={};return m.isMergeableObject(r)&&I(r).forEach(function(v){C[v]=t(r[v],m)}),I(c).forEach(function(v){D(r,v)||(w(r,v)&&m.isMergeableObject(c[v])?C[v]=l(v,m)(r[v],c[v],m):C[v]=t(c[v],m))}),C}function R(r,c,m){m=m||{},m.arrayMerge=m.arrayMerge||o,m.isMergeableObject=m.isMergeableObject||f,m.cloneUnlessOtherwiseSpecified=t;var C=Array.isArray(c),v=Array.isArray(r),se=C===v;return se?C?m.arrayMerge(r,c,m):A(r,c,m):t(c,m)}R.all=function(c,m){if(!Array.isArray(c))throw new Error("first argument should be an array");return c.reduce(function(C,v){return R(C,v,m)},{})};var F=R;_.exports=F},"../../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js"(_){"use strict";_.exports=function f(e,s){if(e===s)return!0;if(e&&s&&typeof e=="object"&&typeof s=="object"){if(e.constructor!==s.constructor)return!1;var u,a,n;if(Array.isArray(e)){if(u=e.length,u!=s.length)return!1;for(a=u;a--!==0;)if(!f(e[a],s[a]))return!1;return!0}if(e.constructor===RegExp)return e.source===s.source&&e.flags===s.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===s.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===s.toString();if(n=Object.keys(e),u=n.length,u!==Object.keys(s).length)return!1;for(a=u;a--!==0;)if(!Object.prototype.hasOwnProperty.call(s,n[a]))return!1;for(a=u;a--!==0;){var p=n[a];if(!f(e[p],s[p]))return!1}return!0}return e!==e&&s!==s}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js"(_,f,e){"use strict";var s=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function u(){}function a(){}a.resetWarningCache=u,_.exports=function(){function n(o,l,E,I,w,D){if(D!==s){var A=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw A.name="Invariant Violation",A}}n.isRequired=n;function p(){return n}var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:p,element:n,elementType:n,instanceOf:p,node:n,objectOf:p,oneOf:p,oneOfType:p,shape:p,exact:p,checkPropTypes:a,resetWarningCache:u};return t.PropTypes=t,t}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"(_,f,e){if(0)var s,u;else _.exports=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js"(_){"use strict";var f="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";_.exports=f}}]);
