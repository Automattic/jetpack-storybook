"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7474],{"../charts/src/charts/conversion-funnel-chart/stories/index.stories.tsx"(S,f,e){e.r(f),e.d(f,{Animation:()=>w,CustomRenderProps:()=>k,Default:()=>R,EmptyData:()=>F,FixedDimensions:()=>W,HighConversion:()=>I,Loading:()=>E,NegativeChange:()=>M,WithoutChangeIndicator:()=>D,WithoutTooltips:()=>A,__namedExportsOrder:()=>Pe,default:()=>Re});var d=e("../charts/src/stories/chart-decorator.tsx"),p=e("../charts/src/stories/theme-config.tsx"),l=e("../charts/src/stories/sample-data/index.ts"),g=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),x=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),_=e("../../../node_modules/.pnpm/@wordpress+ui@0.6.0_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1_stylelint@16.26.1/node_modules/@wordpress/ui/build-module/stack/stack.mjs"),u=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),j=e("../charts/src/hooks/use-prefers-reduced-motion.ts"),N=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),z=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),Q=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),J=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),T=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),B=e("../charts/src/utils/color-utils.ts"),X=e("../charts/src/utils/format-percentage.ts"),Ce=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Se=e.n(Ce),te=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/conversion-funnel-chart/conversion-funnel-chart.module.scss"),V={};V.insert="head",V.singleton=!1;var Ke=Se()(te.A,V);const o=te.A.locals||{},je=a=>{const[r,c]=(0,s.useState)(null),P=(0,s.useCallback)(y=>{r===y?(c(null),a?.()):c(y)},[r,a]),U=(0,s.useCallback)((y,b)=>{b.key==="Enter"||b.key===" "?(b.preventDefault(),r===y?(c(null),a?.()):c(y)):b.key==="Escape"&&(b.preventDefault(),c(null),a?.())},[r,a]),K=(0,s.useCallback)(()=>{c(null),a?.()},[a]),Y=(0,s.useCallback)(y=>({isClicked:r===y,isBlurred:r!==null&&r!==y}),[r]);return{clickedStep:r,handleBarClick:P,handleBarKeyDown:U,clearSelection:K,getStepState:Y}};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ne=({mainRate:a,changeIndicator:r,steps:c,loading:P=!1,animation:U,className:K,chartId:Y,height:y,style:b,renderStepLabel:oe,renderStepRate:ae,renderMainMetric:re,renderTooltip:ie})=>{const Te=(0,N.R)(Y),{conversionFunnelChart:Me}=(0,z.p)(),{getElementStyles:le}=(0,Q.j)(),Ie=(0,s.useRef)(null),L=(0,s.useRef)(null),{tooltipData:H,tooltipLeft:ce,tooltipTop:de,tooltipOpen:De,showTooltip:pe,hideTooltip:G}=(0,g.A)(),{handleBarClick:Z,handleBarKeyDown:O,clearSelection:ue,getStepState:$}=je(G),{containerRef:Ee,TooltipInPortal:we,containerBounds:m}=(0,x.A)({detectBounds:!0,scroll:!0}),me=(0,s.useCallback)(()=>{ue(),L.current=null,G()},[ue,G]),q=(0,s.useCallback)((t,i,v)=>{pe({tooltipData:t,tooltipLeft:i,tooltipTop:v-10})},[pe]),he=(0,s.useCallback)(t=>m.width===0||m.height===0?null:{x:t.clientX-m.left,y:t.clientY-m.top},[m.width,m.height,m.left,m.top]),fe=(0,s.useCallback)(t=>{if(m.width===0||m.height===0)return null;const i=t.currentTarget.getBoundingClientRect(),v=i.left+i.width/2-m.left,C=i.top-m.top;return{x:v,y:C}},[m.width,m.height,m.left,m.top]),ee=(0,s.useCallback)((t,i,v)=>{L.current=i.currentTarget;const{isClicked:C}=$(t.id);if(C){v==="click"?Z(t.id):O(t.id,i);return}if(v==="click"){Z(t.id);const h=he(i);h&&q(t,h.x,h.y)}else{O(t.id,i);const h=fe(i);h&&q(t,h.x,h.y)}},[$,Z,O,q,he,fe]),ge=(0,s.useMemo)(()=>{const t=new Map;return c.forEach(i=>{const v=h=>{h.stopPropagation(),ee(i,h,"click")},C=h=>{h.key==="Enter"||h.key===" "?ee(i,h,"keyboard"):(L.current=h.currentTarget,O(i.id,h))};t.set(i.id,{onClick:v,onKeyDown:C})}),t},[c,ee,O]);(0,s.useEffect)(()=>{const t=i=>{L.current&&!L.current.contains(i.target)&&me()};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[me]);const xe=y??b?.height??"100%",{primaryColor:ye,backgroundColor:Fe,positiveChangeColor:We,negativeChangeColor:ke}=Me,{color:ve}=le?le({index:0,overrideColor:ye}):{color:ye||"#000000"},_e=r?.startsWith("+")?We:ke,Ae=Fe||(0,B.j5)(ve,.08)||"rgba(0, 0, 0, 0.08)",Le=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:o["main-rate"],children:(0,X.E)(a)}),r&&(0,n.jsx)("span",{className:o["change-indicator"],style:{color:_e},children:r})]}),Oe=t=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:o["tooltip-title"],children:t.label}),(0,n.jsxs)("div",{className:o["tooltip-content"],children:[(0,X.E)(t.rate),` \u2022 ${t.count??"no"} items`]})]}),be=!!(c&&c.length>0),Ne=(0,s.useMemo)(()=>({mainRate:a,changeIndicator:r,stepsCount:c?.length||0}),[a,r,c?.length]);(0,J.t)({chartId:Te,legendItems:[],chartType:"conversion-funnel",isDataValid:be,metadata:Ne});const ze=(0,j.j)();if(!be)return(0,n.jsx)(_.B,{direction:"column","data-testid":"conversion-funnel-chart",className:(0,u.A)(o.conversionFunnelChart,P&&o.loading,K),style:{...b,height:xe},children:(0,n.jsx)("div",{className:o["empty-state"],children:P?"Loading...":"No data available"})});const Be=Math.max(...c.map(t=>t.rate));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(_.B,{direction:"column","data-testid":"conversion-funnel-chart",ref:t=>{Ee(t),Ie.current=t},className:(0,u.A)(o.conversionFunnelChart,P&&o.loading,K),style:{...b,height:xe},children:[re?re({mainRate:a,changeIndicator:r,className:o["main-metric"],changeColor:_e}):(0,n.jsx)("div",{className:o["main-metric"],children:Le()}),(0,n.jsx)("div",{className:o["funnel-container"],children:c.map((t,i)=>{const v=t.rate/Be*100,{isBlurred:C}=$(t.id);return(0,n.jsxs)("div",{className:(0,u.A)(o["funnel-step"],C&&o.blurred),children:[(0,n.jsxs)("div",{className:o["step-header"],children:[oe?oe({step:t,index:i,className:o["step-label"]}):(0,n.jsx)("span",{className:o["step-label"],children:t.label}),ae?ae({step:t,index:i,className:o["step-rate"]}):(0,n.jsx)("span",{className:o["step-rate"],children:(0,X.E)(t.rate)})]}),(0,n.jsx)("div",{className:(0,u.A)(o["bar-container"],C&&o.disabled),onClick:ge.get(t.id)?.onClick,onKeyDown:ge.get(t.id)?.onKeyDown,role:"button",tabIndex:C?-1:0,"aria-label":t.label,style:{backgroundColor:Ae},children:(0,n.jsx)("div",{className:(0,u.A)(o["funnel-bar"],{[o["funnel-bar--animated"]]:U&&!P&&!ze}),style:{height:`${v}%`,backgroundColor:ve}})})]},t.id)})})]}),De&&H&&(()=>{const t=ie?ie({step:H,index:c.findIndex(i=>i.id===H.id),top:de,left:ce,className:o["tooltip-wrapper"]}):Oe(H);return t?(0,n.jsx)(we,{top:de,left:ce,className:o["tooltip-wrapper"],children:t},Math.random()):null})()]})},se=a=>(0,s.useContext)(T.m)?(0,n.jsx)(ne,{...a}):(0,n.jsx)(T.S,{children:(0,n.jsx)(ne,{...a})});se.displayName="ConversionFunnelChart";try{conversionfunnelchart.displayName="conversionfunnelchart",conversionfunnelchart.__docgenInfo={description:"ConversionFunnelChart component with provider wrapper",displayName:"conversionfunnelchart",props:{mainRate:{defaultValue:null,description:"Main conversion rate to highlight",name:"mainRate",required:!0,type:{name:"number"}},changeIndicator:{defaultValue:null,description:"Change indicator (e.g., +2%, -1.5%)",name:"changeIndicator",required:!1,type:{name:"string"}},steps:{defaultValue:null,description:"Array of funnel steps",name:"steps",required:!0,type:{name:"FunnelStep[]"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:'Height of the chart container. Accepts a number (pixels) or CSS string (e.g., "400px", "100%"). Falls back to style.height if set, otherwise defaults to "100%".',name:"height",required:!1,type:{name:"string | number"}},style:{defaultValue:null,description:"Custom styling",name:"style",required:!1,type:{name:"CSSProperties"}},renderStepLabel:{defaultValue:null,description:"Custom render function for step labels",name:"renderStepLabel",required:!1,type:{name:"(props: StepLabelRenderProps) => ReactNode"}},renderStepRate:{defaultValue:null,description:"Custom render function for step rates",name:"renderStepRate",required:!1,type:{name:"(props: StepRateRenderProps) => ReactNode"}},renderMainMetric:{defaultValue:null,description:"Custom render function for the entire main metric section",name:"renderMainMetric",required:!1,type:{name:"(props: MainMetricRenderProps) => ReactNode"}},renderTooltip:{defaultValue:null,description:"Custom render function for tooltip content",name:"renderTooltip",required:!1,type:{name:"(props: TooltipRenderProps) => ReactNode"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},animation:{defaultValue:null,description:"Whether to show chart animation on initial render or not",name:"animation",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"]={docgenInfo:conversionfunnelchart.__docgenInfo,name:"conversionfunnelchart",path:"../charts/src/charts/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"})}catch{}const Re={title:"JS Packages/Charts Library/Charts/Conversion Funnel Chart",component:se,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{mainRate:{control:{type:"number",min:0,max:100,step:.1},description:"Main conversion rate to highlight",table:{type:{summary:"number"}}},changeIndicator:{control:"text",description:"Change indicator (e.g., +2%, -1.5%)",table:{type:{summary:"string"}}},steps:{control:"object",description:"Array of funnel steps",table:{type:{summary:"FunnelStep[]"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name",table:{type:{summary:"string"}}},height:{control:"text",description:'Height of the chart container (e.g., "100%", "400px")',table:{type:{summary:"string | number"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}},...d.xo,...p.jW},decorators:[d.OI]},R={args:{...p.In,mainRate:10.3,changeIndicator:"+2%",steps:l.$w,loading:!1}},M={args:{mainRate:8.7,changeIndicator:"-1.6%",steps:l.Ro,loading:!1}},I={args:{mainRate:18.7,changeIndicator:"+5.2%",steps:l.hk,loading:!1}},D={args:{mainRate:10.3,steps:l.$w,loading:!1}},E={args:{mainRate:10.3,changeIndicator:"+2%",steps:l.$w,loading:!0}},w={args:{...R.args,animation:!0}},F={args:{mainRate:0,steps:[],loading:!1}},W={args:{...p.In,mainRate:10.3,changeIndicator:"+2%",steps:l.$w,loading:!1,height:"200px"}},k={args:{mainRate:10.3,changeIndicator:"+2%",steps:l.$w,renderMainMetric:({mainRate:a,changeIndicator:r,className:c})=>(0,n.jsxs)("div",{className:c,style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px",padding:"24px",marginBottom:"32px",color:"white",textAlign:"center",height:"fit-content"},children:[(0,n.jsx)("h3",{style:{margin:"0 0 12px 0",fontSize:"14px",fontWeight:"500",opacity:.9,textTransform:"uppercase",letterSpacing:"0.5px"},children:"Overall Conversion Rate"}),(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"16px"},children:[(0,n.jsxs)("span",{style:{fontSize:"42px",fontWeight:"bold",fontFamily:"Inter, sans-serif",lineHeight:1},children:[a.toFixed(1),"%"]}),r&&(0,n.jsx)("span",{style:{fontSize:"16px",fontWeight:"600",fontFamily:"Inter, sans-serif",backgroundColor:r.startsWith("+")?"rgba(16, 185, 129, 0.2)":"rgba(239, 68, 68, 0.2)",color:r.startsWith("+")?"#10b981":"#ef4444",padding:"6px 12px",borderRadius:"8px",border:`1px solid ${r.startsWith("+")?"#10b981":"#ef4444"}`},children:r})]}),(0,n.jsx)("p",{style:{margin:"12px 0 0 0",fontSize:"12px",opacity:.8,fontFamily:"Inter, sans-serif"},children:"Last 30 days vs previous period"})]}),renderTooltip:({step:a})=>(0,n.jsxs)("div",{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px",padding:"16px 20px",color:"white",fontFamily:"Inter, sans-serif",boxShadow:"0 8px 32px rgba(118, 75, 162, 0.3)",border:"none",minWidth:"200px"},children:[(0,n.jsx)("div",{style:{fontSize:"11px",fontWeight:"500",opacity:.8,textTransform:"uppercase",letterSpacing:"0.5px",margin:"0 0 8px 0"},children:a.label}),(0,n.jsxs)("div",{style:{fontSize:"18px",fontWeight:"bold",margin:"0",display:"flex",alignItems:"center",gap:"8px"},children:[a.rate.toFixed(1),"%",a.count&&(0,n.jsxs)("span",{style:{fontSize:"14px",fontWeight:"400",opacity:.9},children:["\u2022 ",a.count.toLocaleString()," items"]})]})]})},decorators:[a=>(0,n.jsx)(a,{})]},A={args:{mainRate:10.3,changeIndicator:"+2%",steps:l.$w,renderMainMetric:()=>null,renderTooltip:()=>null}},Pe=["Default","NegativeChange","HighConversion","WithoutChangeIndicator","Loading","Animation","EmptyData","FixedDimensions","CustomRenderProps","WithoutTooltips"];R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...R.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 8.7,
    changeIndicator: '-1.6%',
    steps: lowConversionFunnelData,
    loading: false
  }
}`,...M.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 18.7,
    changeIndicator: '+5.2%',
    steps: highConversionFunnelData,
    loading: false
  }
}`,...I.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...D.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: true
  }
}`,...E.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...w.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 0,
    steps: [],
    loading: false
  }
}`,...F.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false,
    height: '200px'
  }
}`,...W.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    renderMainMetric: () => null,
    renderTooltip: () => null
  }
}`,...A.parameters?.docs?.source}}}},"../charts/src/hooks/use-prefers-reduced-motion.ts"(S,f,e){e.d(f,{j:()=>g});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const p="(prefers-reduced-motion: no-preference)",l=()=>!window.matchMedia(p).matches;function g(){const[x,_]=(0,d.useState)(l);return(0,d.useEffect)(()=>{const u=window.matchMedia(p),s=j=>{_(!j.matches)};return u.addEventListener("change",s),()=>{u.removeEventListener("change",s)}},[]),x}},"../charts/src/providers/chart-context/hooks/use-chart-id.ts"(S,f,e){e.d(f,{R:()=>p});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const p=l=>{const g=(0,d.useId)();return l||g}},"../charts/src/providers/chart-context/hooks/use-chart-registration.ts"(S,f,e){e.d(f,{t:()=>_});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js"),l=e.n(p);const g=u=>{const s=(0,d.useRef)(u);return l()(s.current,u)||(s.current=u),s.current};var x=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts");const _=({chartId:u,legendItems:s,chartType:j,isDataValid:N,metadata:z})=>{const{registerChart:Q,unregisterChart:J}=(0,x.j)(),T=g(s),B=(0,d.useMemo)(()=>z,[z]);(0,d.useEffect)(()=>(N&&Q(u,{legendItems:T,chartType:j,metadata:B}),()=>{J(u)}),[u,T,j,B,N])}},"../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"(S,f,e){e.d(f,{p:()=>g});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),l=e("../charts/src/providers/chart-context/themes.ts");const g=()=>(0,d.useContext)(p.m)?.theme??l.z},"../charts/src/utils/format-percentage.ts"(S,f,e){e.d(f,{E:()=>p});var d=e("../number-formatters/src/index.ts");const p=l=>(0,d.ZV)(l/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/conversion-funnel-chart/conversion-funnel-chart.module.scss"(S,f,e){e.d(f,{A:()=>_});var d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(d),l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),g=e.n(l),x=g()(p());x.push([S.id,'.DHel8EQzSdtJJyK9dkBd{font-family:var(--funnel-font-family, "SF Pro Text")}.DHel8EQzSdtJJyK9dkBd.EipzMPI0uuJrrUuSnzow{opacity:.6;pointer-events:none}.LR6zx5NLungP01PEyXT7{display:flex;align-items:baseline;gap:8px;margin-bottom:24px;height:20px}.G5ecZvHjWDm43YjYmdwW{overflow:hidden;color:#1e1e1e;text-overflow:ellipsis;font-family:var(--funnel-font-family, "SF Pro Text");font-size:18px;font-style:normal;font-weight:500;line-height:20px;margin:0}.WQ7_PJVUtPMzD14vKyWQ{overflow:hidden;text-overflow:ellipsis;font-family:var(--funnel-font-family, "SF Pro Text");font-size:13px;font-style:normal;font-weight:500;line-height:20px;margin:0}.pjKie7XwVwrwcjbMOxlo{display:flex;gap:16px;align-items:flex-end;flex:1;min-height:200px;width:100%}.Bh1bvH6Mp5quts4hYtCK{flex:1 1 0;min-width:0;display:flex;flex-direction:column;height:100%;transition:all .3s ease}.Bh1bvH6Mp5quts4hYtCK.h3LFoTuMC8KnwXPRgquL{opacity:.3}.nxPLFSO7Av5LTJprXg6s{margin-bottom:24px}.ZyhW3eti5iesu55yQoN0{color:#757575;font-family:var(--step-font-family, "SF Pro");font-size:12px;font-style:normal;font-weight:400;line-height:16px;margin:0 0 2px 0;display:block;overflow:hidden;text-overflow:ellipsis}.AHuxyx4T3oR7B2dxsSbQ{color:#1e1e1e;font-family:var(--step-font-family, "SF Pro");font-size:13px;font-style:normal;font-weight:500;line-height:20px;margin:0;display:block}.SezxNWxdJQDJFnp7xPFT{flex:1;display:flex;align-items:flex-end;border-radius:4px;position:relative;cursor:pointer;transition:all .2s ease}.SezxNWxdJQDJFnp7xPFT.o9lqgi2v2zKGO9flGGHR{cursor:pointer}.vcIZlWxXQ9HPlPTpqUdK{width:100%;min-height:4px;border-radius:4px 4px 0 0;transition:all .3s ease}.vcIZlWxXQ9HPlPTpqUdK.JD9utXnUBSYG6i0Q11Bv{box-shadow:0 4px 16px rgba(0,0,0,.2);filter:brightness(1.1)}.rPadlc9zWlfRSHp4SokQ{transform-origin:bottom;transform-box:fill-box;transform:scaleY(0);animation:kyP1wTXCfPGQJ74qT3oX 1s ease-out forwards}@keyframes kyP1wTXCfPGQJ74qT3oX{to{transform:scaleY(1)}}.b57I_FjQLOfJRxsyI2Ae{display:inline-flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:4px;border-bottom:1px solid var(--Gray-Gray-5, #dcdcde);background:var(--black-white-white, #fff);border-radius:4px !important;padding:12px !important;box-shadow:0 1px 3px 0 rgba(0,0,0,.15),0 3px 9px 0 rgba(0,0,0,.12) !important}.FMl6Qqk6oR3XrDTMlbHd{color:#1e1e1e;font-family:"SF Pro",sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:16px}.TjAc7xHwVVj7WXZ2qmqJ{color:#1e1e1e;font-family:"SF Pro",sans-serif;font-size:13px;font-style:normal;font-weight:500;line-height:20px}.tqM773g8gftoYTHKShwg{text-align:center;padding:48px 24px;color:#6b7280;font-size:16px}',""]),x.locals={conversionFunnelChart:"DHel8EQzSdtJJyK9dkBd",loading:"EipzMPI0uuJrrUuSnzow","main-metric":"LR6zx5NLungP01PEyXT7","main-rate":"G5ecZvHjWDm43YjYmdwW","change-indicator":"WQ7_PJVUtPMzD14vKyWQ","funnel-container":"pjKie7XwVwrwcjbMOxlo","funnel-step":"Bh1bvH6Mp5quts4hYtCK",blurred:"h3LFoTuMC8KnwXPRgquL","step-header":"nxPLFSO7Av5LTJprXg6s","step-label":"ZyhW3eti5iesu55yQoN0","step-rate":"AHuxyx4T3oR7B2dxsSbQ","bar-container":"SezxNWxdJQDJFnp7xPFT",disabled:"o9lqgi2v2zKGO9flGGHR","funnel-bar":"vcIZlWxXQ9HPlPTpqUdK",selected:"JD9utXnUBSYG6i0Q11Bv","funnel-bar--animated":"rPadlc9zWlfRSHp4SokQ",stretch:"kyP1wTXCfPGQJ74qT3oX","tooltip-wrapper":"b57I_FjQLOfJRxsyI2Ae","tooltip-title":"FMl6Qqk6oR3XrDTMlbHd","tooltip-content":"TjAc7xHwVVj7WXZ2qmqJ","empty-state":"tqM773g8gftoYTHKShwg"};const _=x}}]);
