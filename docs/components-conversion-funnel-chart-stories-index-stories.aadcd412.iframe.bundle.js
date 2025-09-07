(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[201],{"../charts/src/components/conversion-funnel-chart/stories/index.stories.tsx":(y,f,e)=>{"use strict";e.r(f),e.d(f,{CustomRenderProps:()=>K,Default:()=>P,EmptyData:()=>w,HighConversion:()=>M,Loading:()=>B,NegativeChange:()=>j,WithoutChangeIndicator:()=>N,WithoutTooltips:()=>W,__namedExportsOrder:()=>_e,default:()=>V});var l=e("../charts/src/stories/chart-decorator.tsx"),u=e("../charts/src/stories/theme-config.tsx"),d=e("../charts/src/stories/sample-data/index.ts"),o=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),n=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),t=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),s=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),x=e("../charts/src/utils/color-utils.ts"),b=e("../charts/src/utils/format-percentage.ts"),O=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),F=e.n(O),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.module.scss"),C={};C.insert="head",C.singleton=!1;var a=F()(i.A,C);const r=i.A.locals||{},h=T=>{const[E,A]=(0,p.useState)(null),Y=(0,p.useCallback)(k=>{E===k?(A(null),T?.()):A(k)},[E,T]),G=(0,p.useCallback)((k,D)=>{D.key==="Enter"||D.key===" "?(D.preventDefault(),E===k?(A(null),T?.()):A(k)):D.key==="Escape"&&(D.preventDefault(),A(null),T?.())},[E,T]),Z=(0,p.useCallback)(()=>{A(null),T?.()},[T]),H=(0,p.useCallback)(k=>({isClicked:E===k,isBlurred:E!==null&&E!==k}),[E]);return{clickedStep:E,handleBarClick:Y,handleBarKeyDown:G,clearSelection:Z,getStepState:H}};var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _={primaryColor:"#4F46E5",backgroundColor:"#F3F4F6",positiveChangeColor:"#10B981",negativeChangeColor:"#EF4444"},L=({mainRate:T,changeIndicator:E,steps:A,loading:Y=!1,className:G,style:Z,renderStepLabel:H,renderStepRate:k,renderMainMetric:D,renderTooltip:ae})=>{const ye=(0,g.p)(),X=(0,p.useRef)(null),U=(0,p.useRef)(null),{tooltipData:Q,tooltipLeft:ie,tooltipTop:ce,tooltipOpen:Se,showTooltip:le,hideTooltip:J}=(0,n.A)(),{handleBarClick:q,handleBarKeyDown:z,clearSelection:de,getStepState:ee}=h(J),{containerRef:Ce,TooltipInPortal:xe}=(0,t.A)({detectBounds:!0,scroll:!0}),pe=(0,p.useCallback)(()=>{de(),U.current=null,J()},[de,J]),te=(0,p.useCallback)((m,S,R)=>{le({tooltipData:m,tooltipLeft:S,tooltipTop:R-10})},[le]),ue=(0,p.useCallback)(m=>{const S=X.current;if(S){const R=(0,o.A)(S,m.nativeEvent);if(R)return{x:R.x,y:R.y}}return null},[]),me=(0,p.useCallback)(m=>{const S=m.currentTarget.getBoundingClientRect(),R=X.current;if(R){const I=R.getBoundingClientRect(),v=S.left+S.width/2-I.left,Re=S.top-I.top;return{x:v,y:Re}}return null},[]),re=(0,p.useCallback)((m,S,R)=>{U.current=S.currentTarget;const{isClicked:I}=ee(m.id);if(I){R==="click"?q(m.id):z(m.id,S);return}if(R==="click"){q(m.id);const v=ue(S);v&&te(m,v.x,v.y)}else{z(m.id,S);const v=me(S);v&&te(m,v.x,v.y)}},[ee,q,z,te,ue,me]),he=(0,p.useMemo)(()=>{const m=new Map;return A.forEach(S=>{const R=v=>{v.stopPropagation(),re(S,v,"click")},I=v=>{v.key==="Enter"||v.key===" "?re(S,v,"keyboard"):(U.current=v.currentTarget,z(S.id,v))};m.set(S.id,{onClick:R,onKeyDown:I})}),m},[A,re,z]);(0,p.useEffect)(()=>{const m=S=>{U.current&&!U.current.contains(S.target)&&pe()};return document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}},[pe]);const ne=ye.conversionFunnelChart,oe=ne?.primaryColor||_.primaryColor,be=ne?.positiveChangeColor||_.positiveChangeColor,ve=ne?.negativeChangeColor||_.negativeChangeColor,fe=E?.startsWith("+")?be:ve,Te=(0,x.j)(oe,.08),ge={"--primary-color":oe,"--light-background-color":Te,"--change-indicator-color":fe,...Z},Ee=()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{className:r["main-rate"],children:(0,b.E)(T)}),E&&(0,c.jsx)("span",{className:r["change-indicator"],children:E})]}),Oe=m=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:r["tooltip-title"],children:m.label}),(0,c.jsxs)("div",{className:r["tooltip-content"],children:[(0,b.E)(m.rate),m.count&&` \u2022 ${m.count.toLocaleString()} items`]})]});if(!A||A.length===0)return(0,c.jsx)("div",{className:(0,s.A)(r.conversionFunnelChart,Y&&r.loading,G),style:ge,children:(0,c.jsx)("div",{className:r["empty-state"],children:Y?"Loading...":"No data available"})});const Ae=Math.max(...A.map(m=>m.rate));return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{ref:m=>{Ce(m),X.current=m},className:(0,s.A)(r.conversionFunnelChart,Y&&r.loading,G),style:ge,children:[D?D({mainRate:T,changeIndicator:E,className:r["main-metric"],changeColor:fe}):(0,c.jsx)("div",{className:r["main-metric"],children:Ee()}),(0,c.jsx)("div",{className:r["funnel-container"],children:A.map((m,S)=>{const R=m.rate/Ae*100,{isClicked:I,isBlurred:v}=ee(m.id);return(0,c.jsxs)("div",{className:(0,s.A)(r["funnel-step"],v&&r.blurred),children:[(0,c.jsxs)("div",{className:r["step-header"],children:[H?H({step:m,index:S,className:r["step-label"]}):(0,c.jsx)("span",{className:r["step-label"],children:m.label}),k?k({step:m,index:S,className:r["step-rate"]}):(0,c.jsx)("span",{className:r["step-rate"],children:(0,b.E)(m.rate)})]}),(0,c.jsx)("div",{className:(0,s.A)(r["bar-container"],I&&r.selected,v&&r.disabled),onClick:he.get(m.id)?.onClick,onKeyDown:he.get(m.id)?.onKeyDown,role:"button",tabIndex:v?-1:0,"aria-label":m.label,children:(0,c.jsx)("div",{className:(0,s.A)(r["funnel-bar"],I&&r.selected),style:{height:`${R}%`,backgroundColor:oe}})})]},m.id)})})]}),Se&&Q&&(()=>{const m=ae?ae({step:Q,index:A.findIndex(S=>S.id===Q.id),top:ce,left:ie,className:r["tooltip-wrapper"]}):Oe(Q);return m?(0,c.jsx)(xe,{top:ce,left:ie,className:r["tooltip-wrapper"],children:m},Math.random()):null})()]})},$=null;try{L.displayName="ConversionFunnelChart",L.__docgenInfo={description:"ConversionFunnelChart component displays a conversion funnel with main metric and visualization",displayName:"ConversionFunnelChart",props:{mainRate:{defaultValue:null,description:"Main conversion rate to highlight",name:"mainRate",required:!0,type:{name:"number"}},changeIndicator:{defaultValue:null,description:"Change indicator (e.g., +2%, -1.5%)",name:"changeIndicator",required:!1,type:{name:"string"}},steps:{defaultValue:null,description:"Array of funnel steps",name:"steps",required:!0,type:{name:"FunnelStep[]"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling",name:"style",required:!1,type:{name:"CSSProperties"}},renderStepLabel:{defaultValue:null,description:"Custom render function for step labels",name:"renderStepLabel",required:!1,type:{name:"(props: StepLabelRenderProps) => ReactNode"}},renderStepRate:{defaultValue:null,description:"Custom render function for step rates",name:"renderStepRate",required:!1,type:{name:"(props: StepRateRenderProps) => ReactNode"}},renderMainMetric:{defaultValue:null,description:"Custom render function for the entire main metric section",name:"renderMainMetric",required:!1,type:{name:"(props: MainMetricRenderProps) => ReactNode"}},renderTooltip:{defaultValue:null,description:"Custom render function for tooltip content",name:"renderTooltip",required:!1,type:{name:"(props: TooltipRenderProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#ConversionFunnelChart"]={docgenInfo:L.__docgenInfo,name:"ConversionFunnelChart",path:"../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#ConversionFunnelChart"})}catch{}try{conversionfunnelchart.displayName="conversionfunnelchart",conversionfunnelchart.__docgenInfo={description:"ConversionFunnelChart component displays a conversion funnel with main metric and visualization",displayName:"conversionfunnelchart",props:{mainRate:{defaultValue:null,description:"Main conversion rate to highlight",name:"mainRate",required:!0,type:{name:"number"}},changeIndicator:{defaultValue:null,description:"Change indicator (e.g., +2%, -1.5%)",name:"changeIndicator",required:!1,type:{name:"string"}},steps:{defaultValue:null,description:"Array of funnel steps",name:"steps",required:!0,type:{name:"FunnelStep[]"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling",name:"style",required:!1,type:{name:"CSSProperties"}},renderStepLabel:{defaultValue:null,description:"Custom render function for step labels",name:"renderStepLabel",required:!1,type:{name:"(props: StepLabelRenderProps) => ReactNode"}},renderStepRate:{defaultValue:null,description:"Custom render function for step rates",name:"renderStepRate",required:!1,type:{name:"(props: StepRateRenderProps) => ReactNode"}},renderMainMetric:{defaultValue:null,description:"Custom render function for the entire main metric section",name:"renderMainMetric",required:!1,type:{name:"(props: MainMetricRenderProps) => ReactNode"}},renderTooltip:{defaultValue:null,description:"Custom render function for tooltip content",name:"renderTooltip",required:!1,type:{name:"(props: TooltipRenderProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"]={docgenInfo:conversionfunnelchart.__docgenInfo,name:"conversionfunnelchart",path:"../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"})}catch{}const V={title:"JS Packages/Charts/Types/Conversion Funnel Chart",component:L,parameters:{layout:"centered",docs:{description:{component:`
A focused conversion funnel chart component for visualizing step-by-step conversion rates with a prominent main metric display and change indicators.

## Features

- \u{1F4CA} Clear funnel visualization with proportional bar heights and light backgrounds
- \u{1F4C8} Main conversion rate highlighting with positive/negative change indicators
- \u{1F3A8} Dynamic color theming - bar backgrounds automatically adapt to primary color
- \u{1F527} **Render Props** - Complete customization control with \`renderMainMetric\`, \`renderStepLabel\`, \`renderStepRate\`, and \`renderTooltip\`
- \u{1F3AD} **CSS Variables** - Easy theming with \`--funnel-font-family\` and \`--step-font-family\`
- \u{1F4F1} Flexible layouts that adapt to container size
- \u{1F3AF} TypeScript support with full type definitions
- \u267F Accessible design with semantic markup
- \u{1F9EA} Comprehensive test coverage

## Usage

### Basic Usage

\`\`\`typescript
import { ConversionFunnelChart } from '@automattic/charts';

const funnelData = [
  { id: 'sessions', label: 'Sessions', rate: 100, count: 10000 },
  { id: 'cart', label: 'Cart', rate: 71.1, count: 7110 },
  { id: 'checkout', label: 'Checkout', rate: 52.5, count: 5250 },
  { id: 'purchase', label: 'Purchase', rate: 10.3, count: 1030 },
];

function MyComponent() {
  return (
    <ConversionFunnelChart
      mainRate={10.3}
      changeIndicator="+2%"
      steps={funnelData}
    />
  );
}
\`\`\`

### With Header and Metrics

\`\`\`typescript
import { ConversionFunnelChart } from '@automattic/charts';

function FullDashboard() {
  return (
    <div>
      <header>
        <h2>Store conversion rate</h2>
        <div className="metrics">
          <span className="main-rate">10.3%</span>
          <span className="change positive">+2%</span>
        </div>
      </header>
      <ConversionFunnelChart
        mainRate={10.3}
        changeIndicator="+2%"
        steps={funnelData}
      />
    </div>
  );
}
\`\`\`

### E-commerce Conversion Funnel

\`\`\`typescript
const ecommerceFunnel = [
  { id: 'sessions', label: 'Sessions', rate: 100 },
  { id: 'product_views', label: 'Product Views', rate: 45.2 },
  { id: 'cart', label: 'Add to Cart', rate: 28.8 },
  { id: 'checkout', label: 'Checkout', rate: 18.1 },
  { id: 'purchase', label: 'Purchase', rate: 12.3 },
];

<ConversionFunnelChart
  mainRate={12.3}
  changeIndicator="+3.2%"
  steps={ecommerceFunnel}
/>
\`\`\`

### SaaS Signup Funnel

\`\`\`typescript
const saasFunnel = [
  { id: 'visitors', label: 'Visitors', rate: 100 },
  { id: 'trial', label: 'Trial Signup', rate: 12.5 },
  { id: 'activation', label: 'Activated', rate: 8.2 },
  { id: 'subscription', label: 'Paid Plan', rate: 3.1 },
];

<ConversionFunnelChart
  mainRate={3.1}
  changeIndicator="-0.4%"
  steps={saasFunnel}
/>
\`\`\`

## FunnelStep Interface

\`\`\`typescript
interface FunnelStep {
  id: string;           // Unique identifier
  label: string;        // Display name for the step
  rate: number;         // Conversion rate as percentage (0-100)
  count?: number;       // Optional absolute count
}
\`\`\`

## Customization

### Render Props

Complete control over component rendering with optional render functions:

\`\`\`typescript
<ConversionFunnelChart
  renderMainMetric={({ mainRate, changeIndicator, className, changeColor }) => (
    <div className={className}>
      <h2>Custom Header</h2>
      <span>{mainRate}%</span> <span style={{color: changeColor}}>{changeIndicator}</span>
    </div>
  )}
  renderStepLabel={({ step, index, className }) => (
    <span className={className}>#{index + 1} {step.label}</span>
  )}
  renderStepRate={({ step, className }) => (
    <strong className={className}>{step.rate}%</strong>
  )}
  renderTooltip={({ step }) => (
    <div>Custom tooltip for {step.label}: {step.rate}%</div>
  )}
/>
\`\`\`

### CSS Variables

Easy theming with CSS custom properties:

\`\`\`css
.myCustomChart {
  --primary-color: #3858e9;
  --light-background-color: rgba(56, 88, 233, 0.08);
  --funnel-font-family: "SF Pro Text", sans-serif;
  --step-font-family: "SF Pro", sans-serif;
}
\`\`\`

**Available CSS Variables:**
- \`--primary-color\` - Chart bar colors
- \`--light-background-color\` - Bar container backgrounds
- \`--funnel-font-family\` - Font for main rate and change indicator
- \`--step-font-family\` - Font for step labels and rates

## Accessibility

The component includes:
- Semantic HTML structure with proper headings
- Color contrast ratios meeting WCAG guidelines
- Screen reader compatible text and labels
- Keyboard navigation support

## Examples

### Marketing Funnel Analysis

Track user journey from awareness to conversion:
- Sessions \u2192 Lead Capture \u2192 Qualification \u2192 Sales

### Product Onboarding

Monitor user activation through key steps:
- Signup \u2192 Profile Setup \u2192 First Action \u2192 Active User

### Content Engagement

Measure content consumption funnel:
- Page Views \u2192 Scroll Depth \u2192 CTA Clicks \u2192 Conversions
                `}}},tags:["autodocs"],argTypes:{mainRate:{control:{type:"number",min:0,max:100,step:.1},description:"Main conversion rate to highlight",table:{type:{summary:"number"}}},changeIndicator:{control:"text",description:"Change indicator (e.g., +2%, -1.5%)",table:{type:{summary:"string"}}},steps:{control:"object",description:"Array of funnel steps",table:{type:{summary:"FunnelStep[]"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}},...l.xo,...u.jW},decorators:[l.OI]},P={args:{mainRate:10.3,changeIndicator:"+2%",steps:d.$w,loading:!1}},j={args:{mainRate:8.7,changeIndicator:"-1.6%",steps:d.Ro,loading:!1}},M={args:{mainRate:18.7,changeIndicator:"+5.2%",steps:d.hk,loading:!1}},N={args:{mainRate:10.3,steps:d.$w,loading:!1}},B={args:{mainRate:10.3,changeIndicator:"+2%",steps:d.$w,loading:!0}},w={args:{mainRate:0,steps:[],loading:!1}},K={args:{mainRate:10.3,changeIndicator:"+2%",steps:d.$w,style:{"--primary-color":"#4F46E5","--light-background-color":"rgba(79, 70, 229, 0.08)","--step-font-family":"Roboto, sans-serif"},renderMainMetric:({mainRate:T,changeIndicator:E,className:A})=>(0,c.jsxs)("div",{className:A,style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px",padding:"24px",marginBottom:"32px",color:"white",textAlign:"center"},children:[(0,c.jsx)("h3",{style:{margin:"0 0 12px 0",fontSize:"14px",fontWeight:"500",opacity:.9,textTransform:"uppercase",letterSpacing:"0.5px"},children:"Overall Conversion Rate"}),(0,c.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"16px"},children:[(0,c.jsxs)("span",{style:{fontSize:"42px",fontWeight:"bold",fontFamily:"Inter, sans-serif",lineHeight:1},children:[T.toFixed(1),"%"]}),E&&(0,c.jsx)("span",{style:{fontSize:"16px",fontWeight:"600",fontFamily:"Inter, sans-serif",backgroundColor:E.startsWith("+")?"rgba(16, 185, 129, 0.2)":"rgba(239, 68, 68, 0.2)",color:E.startsWith("+")?"#10b981":"#ef4444",padding:"6px 12px",borderRadius:"8px",border:`1px solid ${E.startsWith("+")?"#10b981":"#ef4444"}`},children:E})]}),(0,c.jsx)("p",{style:{margin:"12px 0 0 0",fontSize:"12px",opacity:.8,fontFamily:"Inter, sans-serif"},children:"Last 30 days vs previous period"})]}),renderTooltip:({step:T})=>(0,c.jsxs)("div",{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px",padding:"16px 20px",color:"white",fontFamily:"Inter, sans-serif",boxShadow:"0 8px 32px rgba(118, 75, 162, 0.3)",border:"none",minWidth:"200px"},children:[(0,c.jsx)("div",{style:{fontSize:"11px",fontWeight:"500",opacity:.8,textTransform:"uppercase",letterSpacing:"0.5px",margin:"0 0 8px 0"},children:T.label}),(0,c.jsxs)("div",{style:{fontSize:"18px",fontWeight:"bold",margin:"0",display:"flex",alignItems:"center",gap:"8px"},children:[T.rate.toFixed(1),"%",T.count&&(0,c.jsxs)("span",{style:{fontSize:"14px",fontWeight:"400",opacity:.9},children:["\u2022 ",T.count.toLocaleString()," items"]})]})]})},parameters:{docs:{description:{story:"Custom typography with renderMainMetric and renderTooltip showing a dashboard-style header and custom tooltip, both with gradient background, larger fonts, and enhanced styling compared to the default display."}}},decorators:[T=>(0,c.jsx)(T,{})]},W={args:{mainRate:10.3,changeIndicator:"+2%",steps:d.$w,renderMainMetric:()=>null,renderTooltip:()=>null},parameters:{docs:{description:{story:"Demonstrates disabling the main metric display and tooltips by returning null from renderMainMetric and renderTooltip render props."}}}},_e=["Default","NegativeChange","HighConversion","WithoutChangeIndicator","Loading","EmptyData","CustomRenderProps","WithoutTooltips"];P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...P.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 8.7,
    changeIndicator: '-1.6%',
    steps: lowConversionFunnelData,
    loading: false
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 18.7,
    changeIndicator: '+5.2%',
    steps: highConversionFunnelData,
    loading: false
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...N.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: true
  }
}`,...B.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 0,
    steps: [],
    loading: false
  }
}`,...w.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    style: {
      '--primary-color': '#4F46E5',
      '--light-background-color': 'rgba(79, 70, 229, 0.08)',
      '--step-font-family': 'Roboto, sans-serif'
    } as React.CSSProperties,
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
      textAlign: 'center'
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
  parameters: {
    docs: {
      description: {
        story: 'Custom typography with renderMainMetric and renderTooltip showing a dashboard-style header and custom tooltip, both with gradient background, larger fonts, and enhanced styling compared to the default display.'
      }
    }
  },
  decorators: [Story => <Story />]
}`,...K.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    renderMainMetric: () => null,
    renderTooltip: () => null
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates disabling the main metric display and tooltips by returning null from renderMainMetric and renderTooltip render props.'
      }
    }
  }
}`,...W.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js":(y,f,e)=>{"use strict";e.d(f,{A:()=>F});var l=e("../../../node_modules/.pnpm/@visx+point@3.12.0/node_modules/@visx/point/esm/Point.js");function u(i){return!!i&&i instanceof Element}function d(i){return!!i&&(i instanceof SVGElement||"ownerSVGElement"in i)}function o(i){return!!i&&"createSVGPoint"in i}function n(i){return!!i&&"getScreenCTM"in i}function t(i){return!!i&&"changedTouches"in i}function s(i){return!!i&&"clientX"in i}function p(i){return!!i&&(i instanceof Event||"nativeEvent"in i&&i.nativeEvent instanceof Event)}function g(){return g=Object.assign?Object.assign.bind():function(i){for(var C=1;C<arguments.length;C++){var a=arguments[C];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i[r]=a[r])}return i},g.apply(this,arguments)}var x={x:0,y:0};function b(i){if(!i)return g({},x);if(t(i))return i.changedTouches.length>0?{x:i.changedTouches[0].clientX,y:i.changedTouches[0].clientY}:g({},x);if(s(i))return{x:i.clientX,y:i.clientY};var C=i?.target,a=C&&"getBoundingClientRect"in C?C.getBoundingClientRect():null;return a?{x:a.x+a.width/2,y:a.y+a.height/2}:g({},x)}function O(i,C){if(!i||!C)return null;var a=b(C),r=d(i)?i.ownerSVGElement:i,h=n(r)?r.getScreenCTM():null;if(o(r)&&h){var c=r.createSVGPoint();return c.x=a.x,c.y=a.y,c=c.matrixTransform(h.inverse()),new l.A({x:c.x,y:c.y})}var _=i.getBoundingClientRect();return new l.A({x:a.x-_.left-i.clientLeft,y:a.y-_.top-i.clientTop})}function F(i,C){if(u(i)&&C)return O(i,C);if(p(i)){var a=i,r=a.target;if(r)return O(r,a)}return null}},"../../../node_modules/.pnpm/@visx+point@3.12.0/node_modules/@visx/point/esm/Point.js":(y,f,e)=>{"use strict";e.d(f,{A:()=>l});var l=function(){function u(o){var n=o.x,t=n===void 0?0:n,s=o.y,p=s===void 0?0:s;this.x=0,this.y=0,this.x=t,this.y=p}var d=u.prototype;return d.value=function(){return{x:this.x,y:this.y}},d.toArray=function(){return[this.x,this.y]},u}()},"../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js":(y,f,e)=>{"use strict";e.d(f,{A:()=>n});var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=["tooltipOpen"];function d(t,s){if(t==null)return{};var p={},g=Object.keys(t),x,b;for(b=0;b<g.length;b++)x=g[b],!(s.indexOf(x)>=0)&&(p[x]=t[x]);return p}function o(){return o=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var p=arguments[s];for(var g in p)Object.prototype.hasOwnProperty.call(p,g)&&(t[g]=p[g])}return t},o.apply(this,arguments)}function n(t){var s=(0,l.useState)(o({tooltipOpen:!1},t)),p=s[0],g=s[1],x=(0,l.useCallback)(function(O){return g(typeof O=="function"?function(F){var i=F.tooltipOpen,C=d(F,u);return o({},O(C),{tooltipOpen:!0})}:{tooltipOpen:!0,tooltipLeft:O.tooltipLeft,tooltipTop:O.tooltipTop,tooltipData:O.tooltipData})},[g]),b=(0,l.useCallback)(function(){return g({tooltipOpen:!1,tooltipLeft:void 0,tooltipTop:void 0,tooltipData:void 0})},[g]);return{tooltipOpen:p.tooltipOpen,tooltipLeft:p.tooltipLeft,tooltipTop:p.tooltipTop,tooltipData:p.tooltipData,updateTooltip:g,showTooltip:x,hideTooltip:b}}},"../charts/src/providers/chart-context/global-charts-provider.tsx":(y,f,e)=>{"use strict";e.d(f,{S:()=>t,m:()=>n});var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=e("../charts/src/utils/merge-themes.ts"),d=e("../charts/src/providers/theme/themes.ts"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=(0,l.createContext)(null),t=({children:s,theme:p={}})=>{const[g,x]=(0,l.useState)(()=>new Map),b=(0,l.useMemo)(()=>(0,u.z)(d.zQ,p),[p]),O=(0,l.useRef)(new Map);(0,l.useEffect)(()=>{O.current=new Map},[b.colors]);const F=(0,l.useCallback)((h,c)=>{x(_=>new Map(_).set(h,c))},[]),i=(0,l.useCallback)(h=>{x(c=>{const _=new Map(c);return _.delete(h),_})},[]),C=(0,l.useCallback)(h=>g.get(h),[g]),a=(0,l.useCallback)(({group:h,index:c,overrideColor:_})=>{if(_)return _;const L=b.colors??[];if(h){const $=O.current.get(h);if($)return $;const se=O.current.size,V=L.length>0?L[se%L.length]:"#000000";return O.current.set(h,V),V}return L.length>0?L[(c||0)%L.length]:"#000000"},[b.colors]),r=(0,l.useMemo)(()=>({charts:g,registerChart:F,unregisterChart:i,getChartData:C,theme:b,resolveGroupColor:a}),[g,F,i,C,b,a]);return(0,o.jsx)(n.Provider,{value:r,children:s})};try{t.displayName="GlobalChartsProvider",t.__docgenInfo={description:"",displayName:"GlobalChartsProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional theme override. Considered static for provider lifecycle.",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"]={docgenInfo:t.__docgenInfo,name:"GlobalChartsProvider",path:"../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"})}catch{}},"../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts":(y,f,e)=>{"use strict";e.d(f,{p:()=>t});var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=e("../charts/src/utils/merge-themes.ts"),d=e("../charts/src/providers/theme/theme-provider.tsx"),o=e("../charts/src/providers/theme/themes.ts"),n=e("../charts/src/providers/chart-context/global-charts-provider.tsx");const t=()=>{const p=(0,l.useContext)(n.m)?.theme,g=(0,d.R)();return(0,l.useMemo)(()=>(0,u.z)(p??o.zQ,g),[p,g])}},"../charts/src/providers/theme/theme-provider.tsx":(y,f,e)=>{"use strict";e.d(f,{N:()=>n,R:()=>o});var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d=(0,l.createContext)({}),o=()=>(0,l.useContext)(d),n=({theme:t={},children:s})=>(0,u.jsx)(d.Provider,{value:t,children:s});try{n.displayName="ThemeProvider",n.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:n.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{o.displayName="useChartTheme",o.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:o.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(y,f,e)=>{"use strict";e.d(f,{QI:()=>u,pk:()=>d,zQ:()=>l});const l={backgroundColor:"#FFFFFF",labelBackgroundColor:"transparent",labelTextColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},legendContainerStyles:{},seriesLineStyles:[],legendShapeStyles:[],glyphs:[],annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#006DAB",secondaryColor:"#98C8DF",deltaColors:["#FF8C8F","#757575","#1F9828"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},u={backgroundColor:"#FFFFFF",labelBackgroundColor:"transparent",labelTextColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#006DAB",secondaryColor:"#98C8DF",deltaColors:["#FF8C8F","#757575","#1F9828"]},conversionFunnelChart:{primaryColor:"#006DAB",backgroundColor:"#F3F4F6",positiveChangeColor:"#1F9828",negativeChangeColor:"#FF8C8F"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},d={backgroundColor:"#FFFFFF",labelBackgroundColor:"transparent",labelTextColor:"#FFFFFF",colors:["#3858E9","#873EFF","#66BDFF","#7B90FF","#EB6594"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"},annotationStyles:{label:{anchorLineStroke:"black",backgroundFill:"#fff"},connector:{stroke:"black"},circleSubject:{stroke:"transparent",fill:"black",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#66BDFF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeWidth:1.5,strokeLinecap:"square"}}}}},"../charts/src/stories/chart-decorator.tsx":(y,f,e)=>{"use strict";e.d(f,{OI:()=>o,cg:()=>n,xo:()=>t});var l=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),u=e("../charts/src/stories/theme-config.tsx"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(s,p)=>{const g=p.args;return n(()=>(0,d.jsx)("div",{style:{resize:g.resize||"both",overflow:"auto",padding:"1rem",width:g.containerWidth||"800px",height:g.containerHeight,maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,d.jsx)(s,{})}),p)},n=(s,{args:p})=>{const g=p.themeName,x=u.yI[g||"default"];return(0,d.jsx)(l.S,{theme:x,children:(0,d.jsx)(s,{})})},t={maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}},containerWidth:{control:{type:"text"},description:'CSS width value for the chart container (e.g., "400px", "100%")'},containerHeight:{control:{type:"text"},description:'CSS height value for the chart container (e.g., "400px", "100%")'},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"],description:"Resize behavior for the chart container"}};try{o.displayName="chartDecorator",o.__docgenInfo={description:`Shared decorator for chart stories with GlobalChartsProvider and dynamic theme support
Provides a resizable container for testing responsive behavior
Composes with simpleChartDecorator to add container styling
Supports configurable container dimensions via containerWidth/containerHeight args`,displayName:"chartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#chartDecorator"]={docgenInfo:o.__docgenInfo,name:"chartDecorator",path:"../charts/src/stories/chart-decorator.tsx#chartDecorator"})}catch{}try{n.displayName="simpleChartDecorator",n.__docgenInfo={description:`Simple decorator for chart context stories with GlobalChartsProvider but no container styling
Used for stories that display multiple charts in custom layouts`,displayName:"simpleChartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"]={docgenInfo:n.__docgenInfo,name:"simpleChartDecorator",path:"../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"})}catch{}try{t.displayName="sharedChartArgTypes",t.__docgenInfo={description:"Shared argTypes for common chart controls",displayName:"sharedChartArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"]={docgenInfo:t.__docgenInfo,name:"sharedChartArgTypes",path:"../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"})}catch{}},"../charts/src/stories/theme-config.tsx":(y,f,e)=>{"use strict";e.d(f,{jW:()=>o,yI:()=>d});var l=e("../charts/src/providers/theme/themes.ts");const u={colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],seriesLineStyles:[{strokeWidth:1,strokeDasharray:"8 8",strokeLinecap:"square"},{strokeDasharray:"5 8",strokeWidth:2,strokeLinecap:"square"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2},leaderboardChart:{primaryColor:"#073B3A",secondaryColor:"#0B6E4F"}},d={default:l.zQ,jetpack:l.QI,woo:l.pk,custom:u},o={themeName:{control:{type:"select"},options:["default","jetpack","woo","custom"],defaultValue:"default",description:"Select a theme to apply to the chart",table:{category:"Theme"}}};try{u.displayName="customTheme",u.__docgenInfo={description:"Custom theme with earth tones and dashed line styles for demonstration",displayName:"customTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#customTheme"]={docgenInfo:u.__docgenInfo,name:"customTheme",path:"../charts/src/stories/theme-config.tsx#customTheme"})}catch{}try{backgroundColor.displayName="backgroundColor",backgroundColor.__docgenInfo={description:"Background color for chart components",displayName:"backgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#backgroundColor"]={docgenInfo:backgroundColor.__docgenInfo,name:"backgroundColor",path:"../charts/src/stories/theme-config.tsx#backgroundColor"})}catch{}try{labelBackgroundColor.displayName="labelBackgroundColor",labelBackgroundColor.__docgenInfo={description:"Background color for labels",displayName:"labelBackgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelBackgroundColor"]={docgenInfo:labelBackgroundColor.__docgenInfo,name:"labelBackgroundColor",path:"../charts/src/stories/theme-config.tsx#labelBackgroundColor"})}catch{}try{labelTextColor.displayName="labelTextColor",labelTextColor.__docgenInfo={description:"Text color for labels",displayName:"labelTextColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelTextColor"]={docgenInfo:labelTextColor.__docgenInfo,name:"labelTextColor",path:"../charts/src/stories/theme-config.tsx#labelTextColor"})}catch{}try{colors.displayName="colors",colors.__docgenInfo={description:"Array of colors used for data visualization",displayName:"colors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#colors"]={docgenInfo:colors.__docgenInfo,name:"colors",path:"../charts/src/stories/theme-config.tsx#colors"})}catch{}try{gridStyles.displayName="gridStyles",gridStyles.__docgenInfo={description:"Optional CSS styles for grid lines",displayName:"gridStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridStyles"]={docgenInfo:gridStyles.__docgenInfo,name:"gridStyles",path:"../charts/src/stories/theme-config.tsx#gridStyles"})}catch{}try{tickLength.displayName="tickLength",tickLength.__docgenInfo={description:"Length of axis ticks in pixels",displayName:"tickLength",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#tickLength"]={docgenInfo:tickLength.__docgenInfo,name:"tickLength",path:"../charts/src/stories/theme-config.tsx#tickLength"})}catch{}try{gridColor.displayName="gridColor",gridColor.__docgenInfo={description:"Color of the grid lines",displayName:"gridColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColor"]={docgenInfo:gridColor.__docgenInfo,name:"gridColor",path:"../charts/src/stories/theme-config.tsx#gridColor"})}catch{}try{gridColorDark.displayName="gridColorDark",gridColorDark.__docgenInfo={description:"Color of the grid lines in dark mode",displayName:"gridColorDark",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColorDark"]={docgenInfo:gridColorDark.__docgenInfo,name:"gridColorDark",path:"../charts/src/stories/theme-config.tsx#gridColorDark"})}catch{}try{xTickLineStyles.displayName="xTickLineStyles",xTickLineStyles.__docgenInfo={description:"Styles for x-axis tick lines",displayName:"xTickLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xTickLineStyles"]={docgenInfo:xTickLineStyles.__docgenInfo,name:"xTickLineStyles",path:"../charts/src/stories/theme-config.tsx#xTickLineStyles"})}catch{}try{xAxisLineStyles.displayName="xAxisLineStyles",xAxisLineStyles.__docgenInfo={description:"Styles for x-axis line",displayName:"xAxisLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xAxisLineStyles"]={docgenInfo:xAxisLineStyles.__docgenInfo,name:"xAxisLineStyles",path:"../charts/src/stories/theme-config.tsx#xAxisLineStyles"})}catch{}try{seriesLineStyles.displayName="seriesLineStyles",seriesLineStyles.__docgenInfo={description:"Styles for series lines",displayName:"seriesLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#seriesLineStyles"]={docgenInfo:seriesLineStyles.__docgenInfo,name:"seriesLineStyles",path:"../charts/src/stories/theme-config.tsx#seriesLineStyles"})}catch{}try{legendShapeStyles.displayName="legendShapeStyles",legendShapeStyles.__docgenInfo={description:"Styles for legend shapes",displayName:"legendShapeStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendShapeStyles"]={docgenInfo:legendShapeStyles.__docgenInfo,name:"legendShapeStyles",path:"../charts/src/stories/theme-config.tsx#legendShapeStyles"})}catch{}try{glyphs.displayName="glyphs",glyphs.__docgenInfo={description:"Array of render functions for glyphs",displayName:"glyphs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#glyphs"]={docgenInfo:glyphs.__docgenInfo,name:"glyphs",path:"../charts/src/stories/theme-config.tsx#glyphs"})}catch{}try{legendLabelStyles.displayName="legendLabelStyles",legendLabelStyles.__docgenInfo={description:"Styles for legend labels",displayName:"legendLabelStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendLabelStyles"]={docgenInfo:legendLabelStyles.__docgenInfo,name:"legendLabelStyles",path:"../charts/src/stories/theme-config.tsx#legendLabelStyles"})}catch{}try{legendContainerStyles.displayName="legendContainerStyles",legendContainerStyles.__docgenInfo={description:"Styles for legend container",displayName:"legendContainerStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendContainerStyles"]={docgenInfo:legendContainerStyles.__docgenInfo,name:"legendContainerStyles",path:"../charts/src/stories/theme-config.tsx#legendContainerStyles"})}catch{}try{leaderboardChart.displayName="leaderboardChart",leaderboardChart.__docgenInfo={description:"LeaderboardChart specific settings",displayName:"leaderboardChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#leaderboardChart"]={docgenInfo:leaderboardChart.__docgenInfo,name:"leaderboardChart",path:"../charts/src/stories/theme-config.tsx#leaderboardChart"})}catch{}try{conversionFunnelChart.displayName="conversionFunnelChart",conversionFunnelChart.__docgenInfo={description:"ConversionFunnelChart specific settings",displayName:"conversionFunnelChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#conversionFunnelChart"]={docgenInfo:conversionFunnelChart.__docgenInfo,name:"conversionFunnelChart",path:"../charts/src/stories/theme-config.tsx#conversionFunnelChart"})}catch{}try{d.displayName="CHART_THEME_MAP",d.__docgenInfo={description:"Centralized theme map for all chart stories",displayName:"CHART_THEME_MAP",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"]={docgenInfo:d.__docgenInfo,name:"CHART_THEME_MAP",path:"../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"})}catch{}try{o.displayName="themeArgTypes",o.__docgenInfo={description:"Shared argTypes for theme control",displayName:"themeArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#themeArgTypes"]={docgenInfo:o.__docgenInfo,name:"themeArgTypes",path:"../charts/src/stories/theme-config.tsx#themeArgTypes"})}catch{}},"../charts/src/utils/color-utils.ts":(y,f,e)=>{"use strict";e.d(f,{j:()=>l});const l=(u,d)=>{if(typeof u!="string")throw new Error("Hex color must be a string");if(!u.startsWith("#"))throw new Error("Hex color must start with #");if(u.length!==7)throw new Error("Hex color must be 7 characters long (e.g., #ff0000)");const o=u.slice(1);if(!/^[0-9a-fA-F]{6}$/.test(o))throw new Error("Hex color contains invalid characters. Only 0-9, a-f, A-F are allowed");if(typeof d!="number"||isNaN(d))throw new Error("Alpha must be a number");const n=parseInt(u.slice(1,3),16),t=parseInt(u.slice(3,5),16),s=parseInt(u.slice(5,7),16);return`rgba(${n}, ${t}, ${s}, ${d})`}},"../charts/src/utils/format-percentage.ts":(y,f,e)=>{"use strict";e.d(f,{E:()=>u});var l=e("../number-formatters/src/index.ts");const u=d=>(0,l.ZV)(d/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})},"../charts/src/utils/merge-themes.ts":(y,f,e)=>{"use strict";e.d(f,{z:()=>d});var l=e("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),u=e.n(l);function d(o,n){return u()(o,n,{arrayMerge:(t,s)=>s})}},"../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js":(y,f)=>{var e,l;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var u={}.hasOwnProperty;function d(){for(var t="",s=0;s<arguments.length;s++){var p=arguments[s];p&&(t=n(t,o(p)))}return t}function o(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return d.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var s="";for(var p in t)u.call(t,p)&&t[p]&&(s=n(s,p));return s}function n(t,s){return s?t?t+" "+s:t+s:t}y.exports?(d.default=d,y.exports=d):(e=[],l=function(){return d}.apply(f,e),l!==void 0&&(y.exports=l))})()},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(y,f,e)=>{"use strict";e.d(f,{A:()=>d});function l(o){var n,t,s="";if(typeof o=="string"||typeof o=="number")s+=o;else if(typeof o=="object")if(Array.isArray(o)){var p=o.length;for(n=0;n<p;n++)o[n]&&(t=l(o[n]))&&(s&&(s+=" "),s+=t)}else for(t in o)o[t]&&(s&&(s+=" "),s+=t);return s}function u(){for(var o,n,t=0,s="",p=arguments.length;t<p;t++)(o=arguments[t])&&(n=l(o))&&(s&&(s+=" "),s+=n);return s}const d=u},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.module.scss":(y,f,e)=>{"use strict";e.d(f,{A:()=>t});var l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(l),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(d),n=o()(u());n.push([y.id,'.I8mGoz_EtiIWZaoGS30E{font-family:var(--funnel-font-family, "SF Pro Text")}.I8mGoz_EtiIWZaoGS30E.Ob8tvy5eHghStcrCJWN9{opacity:.6;pointer-events:none}.wKbGFYQfIOfhmmYFLHSK{display:flex;align-items:baseline;gap:8px;margin-bottom:24px}.oY7oSTOv0O1OVE7Nwr7r{overflow:hidden;color:#1e1e1e;text-overflow:ellipsis;font-family:var(--funnel-font-family, "SF Pro Text");font-size:18px;font-style:normal;font-weight:500;line-height:20px;margin:0}.g5eftU7LwDzx_CwgrYz5{overflow:hidden;color:var(--change-indicator-color, #008a20);text-overflow:ellipsis;font-family:var(--funnel-font-family, "SF Pro Text");font-size:13px;font-style:normal;font-weight:500;line-height:20px;margin:0}.IZ7aZvTDxof7mJ6gicwQ{display:flex;gap:16px;align-items:flex-end;height:200px;width:100%}.pR7TosSoLpSVwLTN8nAn{flex:1 1 0;min-width:0;display:flex;flex-direction:column;height:100%;transition:all .3s ease}.pR7TosSoLpSVwLTN8nAn.HY_Ypub6UryoV4Z52Fgg{opacity:.3}.DveAm765BEke10Kf4yvu{margin-bottom:24px}.Yeb2mq3ZeOYLdNHbM8O3{color:#757575;font-family:var(--step-font-family, "SF Pro");font-size:12px;font-style:normal;font-weight:400;line-height:16px;margin:0 0 2px 0;display:block;overflow:hidden;text-overflow:ellipsis}.ZUUjFGTjmZSNG6YFOo5c{color:#1e1e1e;font-family:var(--step-font-family, "SF Pro");font-size:13px;font-style:normal;font-weight:500;line-height:20px;margin:0;display:block}.d4wNKrRPvcARkiBpSPTn{flex:1;display:flex;align-items:flex-end;background-color:var(--light-background-color, rgba(79, 70, 229, 0.08));border-radius:4px;position:relative;cursor:pointer;transition:all .2s ease}.d4wNKrRPvcARkiBpSPTn._AsHQhUE_HUVQsd4tEFP{background-color:var(--light-background-color, rgba(79, 70, 229, 0.15))}.d4wNKrRPvcARkiBpSPTn.jIqdqNePu7F4gG7xFLHI{cursor:pointer}.mzNMNSGEaQ4x8cSdybFr{width:100%;min-height:4px;border-radius:4px 4px 0 0;transition:all .3s ease;background-color:var(--primary-color, #4f46e5)}.mzNMNSGEaQ4x8cSdybFr._AsHQhUE_HUVQsd4tEFP{box-shadow:0 4px 16px rgba(0,0,0,.2);filter:brightness(1.1)}.O5BsuL6i14EMWlko19Y0{display:inline-flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:4px;border-bottom:1px solid var(--Gray-Gray-5, #dcdcde);background:var(--black-white-white, #fff);border-radius:4px !important;padding:12px !important;box-shadow:0 1px 3px 0 rgba(0,0,0,.15),0 3px 9px 0 rgba(0,0,0,.12) !important}.j6cWoywD6KBtUocSpOXB{color:#1e1e1e;font-family:"SF Pro",sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:16px}.V270MDRAbjhmCL4nVFTG{color:#1e1e1e;font-family:"SF Pro",sans-serif;font-size:13px;font-style:normal;font-weight:500;line-height:20px}.IC2AzG5eUxmMyt131MAU{text-align:center;padding:48px 24px;color:#6b7280;font-size:16px}',""]),n.locals={conversionFunnelChart:"I8mGoz_EtiIWZaoGS30E",loading:"Ob8tvy5eHghStcrCJWN9","main-metric":"wKbGFYQfIOfhmmYFLHSK","main-rate":"oY7oSTOv0O1OVE7Nwr7r","change-indicator":"g5eftU7LwDzx_CwgrYz5","funnel-container":"IZ7aZvTDxof7mJ6gicwQ","funnel-step":"pR7TosSoLpSVwLTN8nAn",blurred:"HY_Ypub6UryoV4Z52Fgg","step-header":"DveAm765BEke10Kf4yvu","step-label":"Yeb2mq3ZeOYLdNHbM8O3","step-rate":"ZUUjFGTjmZSNG6YFOo5c","bar-container":"d4wNKrRPvcARkiBpSPTn",selected:"_AsHQhUE_HUVQsd4tEFP",disabled:"jIqdqNePu7F4gG7xFLHI","funnel-bar":"mzNMNSGEaQ4x8cSdybFr","tooltip-wrapper":"O5BsuL6i14EMWlko19Y0","tooltip-title":"j6cWoywD6KBtUocSpOXB","tooltip-content":"V270MDRAbjhmCL4nVFTG","empty-state":"IC2AzG5eUxmMyt131MAU"};const t=n},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":y=>{"use strict";var f=function(r){return e(r)&&!l(r)};function e(a){return!!a&&typeof a=="object"}function l(a){var r=Object.prototype.toString.call(a);return r==="[object RegExp]"||r==="[object Date]"||o(a)}var u=typeof Symbol=="function"&&Symbol.for,d=u?Symbol.for("react.element"):60103;function o(a){return a.$$typeof===d}function n(a){return Array.isArray(a)?[]:{}}function t(a,r){return r.clone!==!1&&r.isMergeableObject(a)?i(n(a),a,r):a}function s(a,r,h){return a.concat(r).map(function(c){return t(c,h)})}function p(a,r){if(!r.customMerge)return i;var h=r.customMerge(a);return typeof h=="function"?h:i}function g(a){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(a).filter(function(r){return Object.propertyIsEnumerable.call(a,r)}):[]}function x(a){return Object.keys(a).concat(g(a))}function b(a,r){try{return r in a}catch{return!1}}function O(a,r){return b(a,r)&&!(Object.hasOwnProperty.call(a,r)&&Object.propertyIsEnumerable.call(a,r))}function F(a,r,h){var c={};return h.isMergeableObject(a)&&x(a).forEach(function(_){c[_]=t(a[_],h)}),x(r).forEach(function(_){O(a,_)||(b(a,_)&&h.isMergeableObject(r[_])?c[_]=p(_,h)(a[_],r[_],h):c[_]=t(r[_],h))}),c}function i(a,r,h){h=h||{},h.arrayMerge=h.arrayMerge||s,h.isMergeableObject=h.isMergeableObject||f,h.cloneUnlessOtherwiseSpecified=t;var c=Array.isArray(r),_=Array.isArray(a),L=c===_;return L?c?h.arrayMerge(a,r,h):F(a,r,h):t(r,h)}i.all=function(r,h){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(c,_){return i(c,_,h)},{})};var C=i;y.exports=C},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js":(y,f,e)=>{"use strict";var l=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function u(){}function d(){}d.resetWarningCache=u,y.exports=function(){function o(s,p,g,x,b,O){if(O!==l){var F=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw F.name="Invariant Violation",F}}o.isRequired=o;function n(){return o}var t={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:n,element:o,elementType:o,instanceOf:n,node:o,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:d,resetWarningCache:u};return t.PropTypes=t,t}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":(y,f,e)=>{if(0)var l,u;else y.exports=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":y=>{"use strict";var f="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";y.exports=f}}]);
