"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[201],{"../charts/src/components/conversion-funnel-chart/stories/index.stories.tsx":((E,h,n)=>{n.r(h),n.d(h,{CustomRenderProps:()=>B,Default:()=>w,EmptyData:()=>W,HighConversion:()=>I,Loading:()=>O,NegativeChange:()=>k,WithoutChangeIndicator:()=>L,WithoutTooltips:()=>z,__namedExportsOrder:()=>ye,default:()=>H});var a=n("../charts/src/stories/chart-decorator.tsx"),d=n("../charts/src/stories/theme-config.tsx"),i=n("../charts/src/stories/sample-data/index.ts"),v=n("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),y=n("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),F=n("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),C=n("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),p=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),A=n("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),M=n("../charts/src/utils/color-utils.ts"),x=n("../charts/src/utils/format-percentage.ts"),N=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=n.n(N),D=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.module.scss"),P={};P.insert="head",P.singleton=!1;var $=T()(D.A,P);const r=D.A.locals||{},K=l=>{const[c,u]=(0,p.useState)(null),V=(0,p.useCallback)(f=>{c===f?(u(null),l?.()):u(f)},[c,l]),Y=(0,p.useCallback)((f,R)=>{R.key==="Enter"||R.key===" "?(R.preventDefault(),c===f?(u(null),l?.()):u(f)):R.key==="Escape"&&(R.preventDefault(),u(null),l?.())},[c,l]),J=(0,p.useCallback)(()=>{u(null),l?.()},[l]),Q=(0,p.useCallback)(f=>({isClicked:c===f,isBlurred:c!==null&&c!==f}),[c]);return{clickedStep:c,handleBarClick:V,handleBarKeyDown:Y,clearSelection:J,getStepState:Q}};var t=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g={primaryColor:"#4F46E5",backgroundColor:"#F3F4F6",positiveChangeColor:"#10B981",negativeChangeColor:"#EF4444"},b=({mainRate:l,changeIndicator:c,steps:u,loading:V=!1,className:Y,style:J,renderStepLabel:Q,renderStepRate:f,renderMainMetric:R,renderTooltip:se})=>{const Ce=(0,A.p)(),X=(0,p.useRef)(null),G=(0,p.useRef)(null),{tooltipData:Z,tooltipLeft:ie,tooltipTop:le,tooltipOpen:be,showTooltip:ce,hideTooltip:q}=(0,y.A)(),{handleBarClick:ee,handleBarKeyDown:U,clearSelection:de,getStepState:ne}=K(q),{containerRef:ve,TooltipInPortal:xe}=(0,F.A)({detectBounds:!0,scroll:!0}),pe=(0,p.useCallback)(()=>{de(),G.current=null,q()},[de,q]),te=(0,p.useCallback)((e,o,m)=>{ce({tooltipData:e,tooltipLeft:o,tooltipTop:m-10})},[ce]),ue=(0,p.useCallback)(e=>{const o=X.current;if(o){const m=(0,v.A)(o,e.nativeEvent);if(m)return{x:m.x,y:m.y}}return null},[]),me=(0,p.useCallback)(e=>{const o=e.currentTarget.getBoundingClientRect(),m=X.current;if(m){const S=m.getBoundingClientRect(),s=o.left+o.width/2-S.left,Te=o.top-S.top;return{x:s,y:Te}}return null},[]),re=(0,p.useCallback)((e,o,m)=>{G.current=o.currentTarget;const{isClicked:S}=ne(e.id);if(S){m==="click"?ee(e.id):U(e.id,o);return}if(m==="click"){ee(e.id);const s=ue(o);s&&te(e,s.x,s.y)}else{U(e.id,o);const s=me(o);s&&te(e,s.x,s.y)}},[ne,ee,U,te,ue,me]),he=(0,p.useMemo)(()=>{const e=new Map;return u.forEach(o=>{const m=s=>{s.stopPropagation(),re(o,s,"click")},S=s=>{s.key==="Enter"||s.key===" "?re(o,s,"keyboard"):(G.current=s.currentTarget,U(o.id,s))};e.set(o.id,{onClick:m,onKeyDown:S})}),e},[u,re,U]);(0,p.useEffect)(()=>{const e=o=>{G.current&&!G.current.contains(o.target)&&pe()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[pe]);const oe=Ce.conversionFunnelChart,ae=oe?.primaryColor||g.primaryColor,Se=oe?.positiveChangeColor||g.positiveChangeColor,Fe=oe?.negativeChangeColor||g.negativeChangeColor,ge=c?.startsWith("+")?Se:Fe,_e=(0,M.j)(ae,.08),fe={"--primary-color":ae,"--light-background-color":_e,"--change-indicator-color":ge,...J},ke=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:r["main-rate"],children:(0,x.E)(l)}),c&&(0,t.jsx)("span",{className:r["change-indicator"],children:c})]}),Re=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:r["tooltip-title"],children:e.label}),(0,t.jsxs)("div",{className:r["tooltip-content"],children:[(0,x.E)(e.rate),e.count&&` \u2022 ${e.count.toLocaleString()} items`]})]});if(!u||u.length===0)return(0,t.jsx)("div",{className:(0,C.A)(r.conversionFunnelChart,V&&r.loading,Y),style:fe,children:(0,t.jsx)("div",{className:r["empty-state"],children:V?"Loading...":"No data available"})});const Ee=Math.max(...u.map(e=>e.rate));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{ref:e=>{ve(e),X.current=e},className:(0,C.A)(r.conversionFunnelChart,V&&r.loading,Y),style:fe,children:[R?R({mainRate:l,changeIndicator:c,className:r["main-metric"],changeColor:ge}):(0,t.jsx)("div",{className:r["main-metric"],children:ke()}),(0,t.jsx)("div",{className:r["funnel-container"],children:u.map((e,o)=>{const m=e.rate/Ee*100,{isClicked:S,isBlurred:s}=ne(e.id);return(0,t.jsxs)("div",{className:(0,C.A)(r["funnel-step"],s&&r.blurred),children:[(0,t.jsxs)("div",{className:r["step-header"],children:[Q?Q({step:e,index:o,className:r["step-label"]}):(0,t.jsx)("span",{className:r["step-label"],children:e.label}),f?f({step:e,index:o,className:r["step-rate"]}):(0,t.jsx)("span",{className:r["step-rate"],children:(0,x.E)(e.rate)})]}),(0,t.jsx)("div",{className:(0,C.A)(r["bar-container"],S&&r.selected,s&&r.disabled),onClick:he.get(e.id)?.onClick,onKeyDown:he.get(e.id)?.onKeyDown,role:"button",tabIndex:s?-1:0,"aria-label":e.label,children:(0,t.jsx)("div",{className:(0,C.A)(r["funnel-bar"],S&&r.selected),style:{height:`${m}%`,backgroundColor:ae}})})]},e.id)})})]}),be&&Z&&(()=>{const e=se?se({step:Z,index:u.findIndex(o=>o.id===Z.id),top:le,left:ie,className:r["tooltip-wrapper"]}):Re(Z);return e?(0,t.jsx)(xe,{top:le,left:ie,className:r["tooltip-wrapper"],children:e},Math.random()):null})()]})},_=null;try{b.displayName="ConversionFunnelChart",b.__docgenInfo={description:"ConversionFunnelChart component displays a conversion funnel with main metric and visualization",displayName:"ConversionFunnelChart",props:{mainRate:{defaultValue:null,description:"Main conversion rate to highlight",name:"mainRate",required:!0,type:{name:"number"}},changeIndicator:{defaultValue:null,description:"Change indicator (e.g., +2%, -1.5%)",name:"changeIndicator",required:!1,type:{name:"string"}},steps:{defaultValue:null,description:"Array of funnel steps",name:"steps",required:!0,type:{name:"FunnelStep[]"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling",name:"style",required:!1,type:{name:"CSSProperties"}},renderStepLabel:{defaultValue:null,description:"Custom render function for step labels",name:"renderStepLabel",required:!1,type:{name:"(props: StepLabelRenderProps) => ReactNode"}},renderStepRate:{defaultValue:null,description:"Custom render function for step rates",name:"renderStepRate",required:!1,type:{name:"(props: StepRateRenderProps) => ReactNode"}},renderMainMetric:{defaultValue:null,description:"Custom render function for the entire main metric section",name:"renderMainMetric",required:!1,type:{name:"(props: MainMetricRenderProps) => ReactNode"}},renderTooltip:{defaultValue:null,description:"Custom render function for tooltip content",name:"renderTooltip",required:!1,type:{name:"(props: TooltipRenderProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#ConversionFunnelChart"]={docgenInfo:b.__docgenInfo,name:"ConversionFunnelChart",path:"../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#ConversionFunnelChart"})}catch{}try{conversionfunnelchart.displayName="conversionfunnelchart",conversionfunnelchart.__docgenInfo={description:"ConversionFunnelChart component displays a conversion funnel with main metric and visualization",displayName:"conversionfunnelchart",props:{mainRate:{defaultValue:null,description:"Main conversion rate to highlight",name:"mainRate",required:!0,type:{name:"number"}},changeIndicator:{defaultValue:null,description:"Change indicator (e.g., +2%, -1.5%)",name:"changeIndicator",required:!1,type:{name:"string"}},steps:{defaultValue:null,description:"Array of funnel steps",name:"steps",required:!0,type:{name:"FunnelStep[]"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling",name:"style",required:!1,type:{name:"CSSProperties"}},renderStepLabel:{defaultValue:null,description:"Custom render function for step labels",name:"renderStepLabel",required:!1,type:{name:"(props: StepLabelRenderProps) => ReactNode"}},renderStepRate:{defaultValue:null,description:"Custom render function for step rates",name:"renderStepRate",required:!1,type:{name:"(props: StepRateRenderProps) => ReactNode"}},renderMainMetric:{defaultValue:null,description:"Custom render function for the entire main metric section",name:"renderMainMetric",required:!1,type:{name:"(props: MainMetricRenderProps) => ReactNode"}},renderTooltip:{defaultValue:null,description:"Custom render function for tooltip content",name:"renderTooltip",required:!1,type:{name:"(props: TooltipRenderProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"]={docgenInfo:conversionfunnelchart.__docgenInfo,name:"conversionfunnelchart",path:"../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"})}catch{}const H={title:"JS Packages/Charts/Types/Conversion Funnel Chart",component:b,parameters:{layout:"centered",docs:{description:{component:`
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
                `}}},tags:["autodocs"],argTypes:{mainRate:{control:{type:"number",min:0,max:100,step:.1},description:"Main conversion rate to highlight",table:{type:{summary:"number"}}},changeIndicator:{control:"text",description:"Change indicator (e.g., +2%, -1.5%)",table:{type:{summary:"string"}}},steps:{control:"object",description:"Array of funnel steps",table:{type:{summary:"FunnelStep[]"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}},...a.xo,...d.jW},decorators:[a.OI]},w={args:{mainRate:10.3,changeIndicator:"+2%",steps:i.$w,loading:!1}},k={args:{mainRate:8.7,changeIndicator:"-1.6%",steps:i.Ro,loading:!1}},I={args:{mainRate:18.7,changeIndicator:"+5.2%",steps:i.hk,loading:!1}},L={args:{mainRate:10.3,steps:i.$w,loading:!1}},O={args:{mainRate:10.3,changeIndicator:"+2%",steps:i.$w,loading:!0}},W={args:{mainRate:0,steps:[],loading:!1}},B={args:{mainRate:10.3,changeIndicator:"+2%",steps:i.$w,style:{"--primary-color":"#4F46E5","--light-background-color":"rgba(79, 70, 229, 0.08)","--step-font-family":"Roboto, sans-serif"},renderMainMetric:({mainRate:l,changeIndicator:c,className:u})=>(0,t.jsxs)("div",{className:u,style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px",padding:"24px",marginBottom:"32px",color:"white",textAlign:"center"},children:[(0,t.jsx)("h3",{style:{margin:"0 0 12px 0",fontSize:"14px",fontWeight:"500",opacity:.9,textTransform:"uppercase",letterSpacing:"0.5px"},children:"Overall Conversion Rate"}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"16px"},children:[(0,t.jsxs)("span",{style:{fontSize:"42px",fontWeight:"bold",fontFamily:"Inter, sans-serif",lineHeight:1},children:[l.toFixed(1),"%"]}),c&&(0,t.jsx)("span",{style:{fontSize:"16px",fontWeight:"600",fontFamily:"Inter, sans-serif",backgroundColor:c.startsWith("+")?"rgba(16, 185, 129, 0.2)":"rgba(239, 68, 68, 0.2)",color:c.startsWith("+")?"#10b981":"#ef4444",padding:"6px 12px",borderRadius:"8px",border:`1px solid ${c.startsWith("+")?"#10b981":"#ef4444"}`},children:c})]}),(0,t.jsx)("p",{style:{margin:"12px 0 0 0",fontSize:"12px",opacity:.8,fontFamily:"Inter, sans-serif"},children:"Last 30 days vs previous period"})]}),renderTooltip:({step:l})=>(0,t.jsxs)("div",{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px",padding:"16px 20px",color:"white",fontFamily:"Inter, sans-serif",boxShadow:"0 8px 32px rgba(118, 75, 162, 0.3)",border:"none",minWidth:"200px"},children:[(0,t.jsx)("div",{style:{fontSize:"11px",fontWeight:"500",opacity:.8,textTransform:"uppercase",letterSpacing:"0.5px",margin:"0 0 8px 0"},children:l.label}),(0,t.jsxs)("div",{style:{fontSize:"18px",fontWeight:"bold",margin:"0",display:"flex",alignItems:"center",gap:"8px"},children:[l.rate.toFixed(1),"%",l.count&&(0,t.jsxs)("span",{style:{fontSize:"14px",fontWeight:"400",opacity:.9},children:["\u2022 ",l.count.toLocaleString()," items"]})]})]})},parameters:{docs:{description:{story:"Custom typography with renderMainMetric and renderTooltip showing a dashboard-style header and custom tooltip, both with gradient background, larger fonts, and enhanced styling compared to the default display."}}},decorators:[l=>(0,t.jsx)(l,{})]},z={args:{mainRate:10.3,changeIndicator:"+2%",steps:i.$w,renderMainMetric:()=>null,renderTooltip:()=>null},parameters:{docs:{description:{story:"Demonstrates disabling the main metric display and tooltips by returning null from renderMainMetric and renderTooltip render props."}}}},ye=["Default","NegativeChange","HighConversion","WithoutChangeIndicator","Loading","EmptyData","CustomRenderProps","WithoutTooltips"];w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...w.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 8.7,
    changeIndicator: '-1.6%',
    steps: lowConversionFunnelData,
    loading: false
  }
}`,...k.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 18.7,
    changeIndicator: '+5.2%',
    steps: highConversionFunnelData,
    loading: false
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...L.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: true
  }
}`,...O.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 0,
    steps: [],
    loading: false
  }
}`,...W.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}}}),"../charts/src/providers/chart-context/global-charts-provider.tsx":((E,h,n)=>{n.d(h,{m:()=>C,S:()=>p});var a=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=n("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),i=n.n(d);function v(A,M){return i()(A,M,{arrayMerge:(x,N)=>N})}var y=n("../charts/src/providers/chart-context/themes.ts"),F=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const C=(0,a.createContext)(null),p=({children:A,theme:M={}})=>{const[x,N]=(0,a.useState)(()=>new Map),T=(0,a.useMemo)(()=>v(y.zQ,M),[M]),D=(0,a.useRef)(new Map);(0,a.useEffect)(()=>{D.current=new Map},[T.colors]);const P=(0,a.useCallback)((g,b)=>{N(_=>new Map(_).set(g,b))},[]),$=(0,a.useCallback)(g=>{N(b=>{const _=new Map(b);return _.delete(g),_})},[]),r=(0,a.useCallback)(g=>x.get(g),[x]),K=(0,a.useCallback)(({group:g,index:b,overrideColor:_})=>{if(_)return _;const j=T.colors??[];if(g){const H=D.current.get(g);if(H)return H;const w=D.current.size,k=j.length>0?j[w%j.length]:"#000000";return D.current.set(g,k),k}return j.length>0?j[(b||0)%j.length]:"#000000"},[T.colors]),t=(0,a.useMemo)(()=>({charts:x,registerChart:P,unregisterChart:$,getChartData:r,theme:T,resolveGroupColor:K}),[x,P,$,r,T,K]);return(0,F.jsx)(C.Provider,{value:t,children:A})};try{p.displayName="GlobalChartsProvider",p.__docgenInfo={description:"",displayName:"GlobalChartsProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional theme override. Considered static for provider lifecycle.",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"]={docgenInfo:p.__docgenInfo,name:"GlobalChartsProvider",path:"../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"})}catch{}}),"../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts":((E,h,n)=>{n.d(h,{p:()=>v});var a=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=n("../charts/src/providers/chart-context/global-charts-provider.tsx"),i=n("../charts/src/providers/chart-context/themes.ts");const v=()=>(0,a.useContext)(d.m)?.theme??i.zQ}),"../charts/src/providers/chart-context/themes.ts":((E,h,n)=>{n.d(h,{QI:()=>d,pk:()=>i,zQ:()=>a});const a={backgroundColor:"#FFFFFF",labelBackgroundColor:"transparent",labelTextColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},legendContainerStyles:{},seriesLineStyles:[],legendShapeStyles:[],glyphs:[],annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#006DAB",secondaryColor:"#98C8DF",deltaColors:["#FF8C8F","#757575","#1F9828"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},d={backgroundColor:"#FFFFFF",labelBackgroundColor:"transparent",labelTextColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#006DAB",secondaryColor:"#98C8DF",deltaColors:["#FF8C8F","#757575","#1F9828"]},conversionFunnelChart:{primaryColor:"#006DAB",backgroundColor:"#F3F4F6",positiveChangeColor:"#1F9828",negativeChangeColor:"#FF8C8F"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},i={backgroundColor:"#FFFFFF",labelBackgroundColor:"transparent",labelTextColor:"#FFFFFF",colors:["#3858E9","#873EFF","#66BDFF","#7B90FF","#EB6594"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"},annotationStyles:{label:{anchorLineStroke:"black",backgroundFill:"#fff"},connector:{stroke:"black"},circleSubject:{stroke:"transparent",fill:"black",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#66BDFF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeWidth:1.5,strokeLinecap:"square"}}}}}),"../charts/src/utils/color-utils.ts":((E,h,n)=>{n.d(h,{j:()=>a});const a=(d,i)=>{if(typeof d!="string")throw new Error("Hex color must be a string");if(!d.startsWith("#"))throw new Error("Hex color must start with #");if(d.length!==7)throw new Error("Hex color must be 7 characters long (e.g., #ff0000)");const v=d.slice(1);if(!/^[0-9a-fA-F]{6}$/.test(v))throw new Error("Hex color contains invalid characters. Only 0-9, a-f, A-F are allowed");if(typeof i!="number"||isNaN(i))throw new Error("Alpha must be a number");const y=parseInt(d.slice(1,3),16),F=parseInt(d.slice(3,5),16),C=parseInt(d.slice(5,7),16);return`rgba(${y}, ${F}, ${C}, ${i})`}}),"../charts/src/utils/format-percentage.ts":((E,h,n)=>{n.d(h,{E:()=>d});var a=n("../number-formatters/src/index.ts");const d=i=>(0,a.ZV)(i/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.module.scss":((E,h,n)=>{n.d(h,{A:()=>F});var a=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=n.n(a),i=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),v=n.n(i),y=v()(d());y.push([E.id,'.I8mGoz_EtiIWZaoGS30E{font-family:var(--funnel-font-family, "SF Pro Text")}.I8mGoz_EtiIWZaoGS30E.Ob8tvy5eHghStcrCJWN9{opacity:.6;pointer-events:none}.wKbGFYQfIOfhmmYFLHSK{display:flex;align-items:baseline;gap:8px;margin-bottom:24px}.oY7oSTOv0O1OVE7Nwr7r{overflow:hidden;color:#1e1e1e;text-overflow:ellipsis;font-family:var(--funnel-font-family, "SF Pro Text");font-size:18px;font-style:normal;font-weight:500;line-height:20px;margin:0}.g5eftU7LwDzx_CwgrYz5{overflow:hidden;color:var(--change-indicator-color, #008a20);text-overflow:ellipsis;font-family:var(--funnel-font-family, "SF Pro Text");font-size:13px;font-style:normal;font-weight:500;line-height:20px;margin:0}.IZ7aZvTDxof7mJ6gicwQ{display:flex;gap:16px;align-items:flex-end;height:200px;width:100%}.pR7TosSoLpSVwLTN8nAn{flex:1 1 0;min-width:0;display:flex;flex-direction:column;height:100%;transition:all .3s ease}.pR7TosSoLpSVwLTN8nAn.HY_Ypub6UryoV4Z52Fgg{opacity:.3}.DveAm765BEke10Kf4yvu{margin-bottom:24px}.Yeb2mq3ZeOYLdNHbM8O3{color:#757575;font-family:var(--step-font-family, "SF Pro");font-size:12px;font-style:normal;font-weight:400;line-height:16px;margin:0 0 2px 0;display:block;overflow:hidden;text-overflow:ellipsis}.ZUUjFGTjmZSNG6YFOo5c{color:#1e1e1e;font-family:var(--step-font-family, "SF Pro");font-size:13px;font-style:normal;font-weight:500;line-height:20px;margin:0;display:block}.d4wNKrRPvcARkiBpSPTn{flex:1;display:flex;align-items:flex-end;background-color:var(--light-background-color, rgba(79, 70, 229, 0.08));border-radius:4px;position:relative;cursor:pointer;transition:all .2s ease}.d4wNKrRPvcARkiBpSPTn._AsHQhUE_HUVQsd4tEFP{background-color:var(--light-background-color, rgba(79, 70, 229, 0.15))}.d4wNKrRPvcARkiBpSPTn.jIqdqNePu7F4gG7xFLHI{cursor:pointer}.mzNMNSGEaQ4x8cSdybFr{width:100%;min-height:4px;border-radius:4px 4px 0 0;transition:all .3s ease;background-color:var(--primary-color, #4f46e5)}.mzNMNSGEaQ4x8cSdybFr._AsHQhUE_HUVQsd4tEFP{box-shadow:0 4px 16px rgba(0,0,0,.2);filter:brightness(1.1)}.O5BsuL6i14EMWlko19Y0{display:inline-flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:4px;border-bottom:1px solid var(--Gray-Gray-5, #dcdcde);background:var(--black-white-white, #fff);border-radius:4px !important;padding:12px !important;box-shadow:0 1px 3px 0 rgba(0,0,0,.15),0 3px 9px 0 rgba(0,0,0,.12) !important}.j6cWoywD6KBtUocSpOXB{color:#1e1e1e;font-family:"SF Pro",sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:16px}.V270MDRAbjhmCL4nVFTG{color:#1e1e1e;font-family:"SF Pro",sans-serif;font-size:13px;font-style:normal;font-weight:500;line-height:20px}.IC2AzG5eUxmMyt131MAU{text-align:center;padding:48px 24px;color:#6b7280;font-size:16px}',""]),y.locals={conversionFunnelChart:"I8mGoz_EtiIWZaoGS30E",loading:"Ob8tvy5eHghStcrCJWN9","main-metric":"wKbGFYQfIOfhmmYFLHSK","main-rate":"oY7oSTOv0O1OVE7Nwr7r","change-indicator":"g5eftU7LwDzx_CwgrYz5","funnel-container":"IZ7aZvTDxof7mJ6gicwQ","funnel-step":"pR7TosSoLpSVwLTN8nAn",blurred:"HY_Ypub6UryoV4Z52Fgg","step-header":"DveAm765BEke10Kf4yvu","step-label":"Yeb2mq3ZeOYLdNHbM8O3","step-rate":"ZUUjFGTjmZSNG6YFOo5c","bar-container":"d4wNKrRPvcARkiBpSPTn",selected:"_AsHQhUE_HUVQsd4tEFP",disabled:"jIqdqNePu7F4gG7xFLHI","funnel-bar":"mzNMNSGEaQ4x8cSdybFr","tooltip-wrapper":"O5BsuL6i14EMWlko19Y0","tooltip-title":"j6cWoywD6KBtUocSpOXB","tooltip-content":"V270MDRAbjhmCL4nVFTG","empty-state":"IC2AzG5eUxmMyt131MAU"};const F=y})}]);
