(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[201],{"../charts/src/components/conversion-funnel-chart/stories/index.stories.tsx":(x,g,n)=>{"use strict";n.r(g),n.d(g,{CustomRenderProps:()=>Y,Default:()=>P,EmptyData:()=>W,HighConversion:()=>B,Loading:()=>K,NegativeChange:()=>M,WithoutChangeIndicator:()=>w,WithoutTooltips:()=>V,__namedExportsOrder:()=>_e,default:()=>ge});var d=n("../charts/src/stories/chart-decorator.tsx"),m=n("../charts/src/stories/theme-config.tsx"),p=n("../charts/src/stories/sample-data/index.ts"),o=n("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),r=n("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),t=n("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),i=n("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=n("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts");const _=(S,T)=>{if(typeof S!="string")throw new Error("Hex color must be a string");if(!S.startsWith("#"))throw new Error("Hex color must start with #");if(S.length!==7)throw new Error("Hex color must be 7 characters long (e.g., #ff0000)");const A=S.slice(1);if(!/^[0-9a-fA-F]{6}$/.test(A))throw new Error("Hex color contains invalid characters. Only 0-9, a-f, A-F are allowed");if(typeof T!="number"||isNaN(T))throw new Error("Alpha must be a number");const D=parseInt(S.slice(1,3),16),N=parseInt(S.slice(3,5),16),z=parseInt(S.slice(5,7),16);return`rgba(${D}, ${N}, ${z}, ${T})`};var b=n("../charts/src/utils/format-percentage.ts"),E=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),F=n.n(E),a=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.module.scss"),v={};v.insert="head",v.singleton=!1;var s=F()(a.A,v);const e=a.A.locals||{},h=S=>{const[T,A]=(0,l.useState)(null),D=(0,l.useCallback)(k=>{T===k?(A(null),S?.()):A(k)},[T,S]),N=(0,l.useCallback)((k,j)=>{j.key==="Enter"||j.key===" "?(j.preventDefault(),T===k?(A(null),S?.()):A(k)):j.key==="Escape"&&(j.preventDefault(),A(null),S?.())},[T,S]),z=(0,l.useCallback)(()=>{A(null),S?.()},[S]),H=(0,l.useCallback)(k=>({isClicked:T===k,isBlurred:T!==null&&T!==k}),[T]);return{clickedStep:T,handleBarClick:D,handleBarKeyDown:N,clearSelection:z,getStepState:H}};var c=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y={primaryColor:"#4F46E5",backgroundColor:"#F3F4F6",positiveChangeColor:"#10B981",negativeChangeColor:"#EF4444"},L=({mainRate:S,changeIndicator:T,steps:A,loading:D=!1,className:N,style:z,renderStepLabel:H,renderStepRate:k,renderMainMetric:j,renderTooltip:ae})=>{const ye=(0,f.p)(),Z=(0,l.useRef)(null),G=(0,l.useRef)(null),{tooltipData:Q,tooltipLeft:se,tooltipTop:ie,tooltipOpen:Se,showTooltip:ce,hideTooltip:X}=(0,r.A)(),{handleBarClick:J,handleBarKeyDown:U,clearSelection:le,getStepState:q}=h(X),{containerRef:Ce,TooltipInPortal:xe}=(0,t.A)({detectBounds:!0,scroll:!0}),de=(0,l.useCallback)(()=>{le(),G.current=null,X()},[le,X]),ee=(0,l.useCallback)((u,C,R)=>{ce({tooltipData:u,tooltipLeft:C,tooltipTop:R-10})},[ce]),pe=(0,l.useCallback)(u=>{const C=Z.current;if(C){const R=(0,o.A)(C,u.nativeEvent);if(R)return{x:R.x,y:R.y}}return null},[]),ue=(0,l.useCallback)(u=>{const C=u.currentTarget.getBoundingClientRect(),R=Z.current;if(R){const I=R.getBoundingClientRect(),O=C.left+C.width/2-I.left,Re=C.top-I.top;return{x:O,y:Re}}return null},[]),te=(0,l.useCallback)((u,C,R)=>{G.current=C.currentTarget;const{isClicked:I}=q(u.id);if(I){R==="click"?J(u.id):U(u.id,C);return}if(R==="click"){J(u.id);const O=pe(C);O&&ee(u,O.x,O.y)}else{U(u.id,C);const O=ue(C);O&&ee(u,O.x,O.y)}},[q,J,U,ee,pe,ue]),me=(0,l.useMemo)(()=>{const u=new Map;return A.forEach(C=>{const R=O=>{O.stopPropagation(),te(C,O,"click")},I=O=>{O.key==="Enter"||O.key===" "?te(C,O,"keyboard"):(G.current=O.currentTarget,U(C.id,O))};u.set(C.id,{onClick:R,onKeyDown:I})}),u},[A,te,U]);(0,l.useEffect)(()=>{const u=C=>{G.current&&!G.current.contains(C.target)&&de()};return document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[de]);const re=ye.conversionFunnelChart,ne=re?.primaryColor||y.primaryColor,be=re?.positiveChangeColor||y.positiveChangeColor,ve=re?.negativeChangeColor||y.negativeChangeColor,he=T?.startsWith("+")?be:ve,Te=_(ne,.08),fe={"--primary-color":ne,"--light-background-color":Te,"--change-indicator-color":he,...z},Oe=()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{className:e["main-rate"],children:(0,b.E)(S)}),T&&(0,c.jsx)("span",{className:e["change-indicator"],children:T})]}),Ee=u=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:e["tooltip-title"],children:u.label}),(0,c.jsxs)("div",{className:e["tooltip-content"],children:[(0,b.E)(u.rate),u.count&&` \u2022 ${u.count.toLocaleString()} items`]})]});if(!A||A.length===0)return(0,c.jsx)("div",{className:(0,i.A)(e.conversionFunnelChart,D&&e.loading,N),style:fe,children:(0,c.jsx)("div",{className:e["empty-state"],children:D?"Loading...":"No data available"})});const Ae=Math.max(...A.map(u=>u.rate));return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{ref:u=>{Ce(u),Z.current=u},className:(0,i.A)(e.conversionFunnelChart,D&&e.loading,N),style:fe,children:[j?j({mainRate:S,changeIndicator:T,className:e["main-metric"],changeColor:he}):(0,c.jsx)("div",{className:e["main-metric"],children:Oe()}),(0,c.jsx)("div",{className:e["funnel-container"],children:A.map((u,C)=>{const R=u.rate/Ae*100,{isClicked:I,isBlurred:O}=q(u.id);return(0,c.jsxs)("div",{className:(0,i.A)(e["funnel-step"],O&&e.blurred),children:[(0,c.jsxs)("div",{className:e["step-header"],children:[H?H({step:u,index:C,className:e["step-label"]}):(0,c.jsx)("span",{className:e["step-label"],children:u.label}),k?k({step:u,index:C,className:e["step-rate"]}):(0,c.jsx)("span",{className:e["step-rate"],children:(0,b.E)(u.rate)})]}),(0,c.jsx)("div",{className:(0,i.A)(e["bar-container"],I&&e.selected,O&&e.disabled),onClick:me.get(u.id)?.onClick,onKeyDown:me.get(u.id)?.onKeyDown,role:"button",tabIndex:O?-1:0,"aria-label":u.label,children:(0,c.jsx)("div",{className:(0,i.A)(e["funnel-bar"],I&&e.selected),style:{height:`${R}%`,backgroundColor:ne}})})]},u.id)})})]}),Se&&Q&&(()=>{const u=ae?ae({step:Q,index:A.findIndex(C=>C.id===Q.id),top:ie,left:se,className:e["tooltip-wrapper"]}):Ee(Q);return u?(0,c.jsx)(xe,{top:ie,left:se,className:e["tooltip-wrapper"],children:u},Math.random()):null})()]})},oe=null;try{L.displayName="ConversionFunnelChart",L.__docgenInfo={description:"ConversionFunnelChart component displays a conversion funnel with main metric and visualization",displayName:"ConversionFunnelChart",props:{mainRate:{defaultValue:null,description:"Main conversion rate to highlight",name:"mainRate",required:!0,type:{name:"number"}},changeIndicator:{defaultValue:null,description:"Change indicator (e.g., +2%, -1.5%)",name:"changeIndicator",required:!1,type:{name:"string"}},steps:{defaultValue:null,description:"Array of funnel steps",name:"steps",required:!0,type:{name:"FunnelStep[]"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling",name:"style",required:!1,type:{name:"CSSProperties"}},renderStepLabel:{defaultValue:null,description:"Custom render function for step labels",name:"renderStepLabel",required:!1,type:{name:"(props: StepLabelRenderProps) => ReactNode"}},renderStepRate:{defaultValue:null,description:"Custom render function for step rates",name:"renderStepRate",required:!1,type:{name:"(props: StepRateRenderProps) => ReactNode"}},renderMainMetric:{defaultValue:null,description:"Custom render function for the entire main metric section",name:"renderMainMetric",required:!1,type:{name:"(props: MainMetricRenderProps) => ReactNode"}},renderTooltip:{defaultValue:null,description:"Custom render function for tooltip content",name:"renderTooltip",required:!1,type:{name:"(props: TooltipRenderProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#ConversionFunnelChart"]={docgenInfo:L.__docgenInfo,name:"ConversionFunnelChart",path:"../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#ConversionFunnelChart"})}catch{}try{conversionfunnelchart.displayName="conversionfunnelchart",conversionfunnelchart.__docgenInfo={description:"ConversionFunnelChart component displays a conversion funnel with main metric and visualization",displayName:"conversionfunnelchart",props:{mainRate:{defaultValue:null,description:"Main conversion rate to highlight",name:"mainRate",required:!0,type:{name:"number"}},changeIndicator:{defaultValue:null,description:"Change indicator (e.g., +2%, -1.5%)",name:"changeIndicator",required:!1,type:{name:"string"}},steps:{defaultValue:null,description:"Array of funnel steps",name:"steps",required:!0,type:{name:"FunnelStep[]"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling",name:"style",required:!1,type:{name:"CSSProperties"}},renderStepLabel:{defaultValue:null,description:"Custom render function for step labels",name:"renderStepLabel",required:!1,type:{name:"(props: StepLabelRenderProps) => ReactNode"}},renderStepRate:{defaultValue:null,description:"Custom render function for step rates",name:"renderStepRate",required:!1,type:{name:"(props: StepRateRenderProps) => ReactNode"}},renderMainMetric:{defaultValue:null,description:"Custom render function for the entire main metric section",name:"renderMainMetric",required:!1,type:{name:"(props: MainMetricRenderProps) => ReactNode"}},renderTooltip:{defaultValue:null,description:"Custom render function for tooltip content",name:"renderTooltip",required:!1,type:{name:"(props: TooltipRenderProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"]={docgenInfo:conversionfunnelchart.__docgenInfo,name:"conversionfunnelchart",path:"../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"})}catch{}const ge={title:"JS Packages/Charts/Types/Conversion Funnel Chart",component:L,parameters:{layout:"centered",docs:{description:{component:`
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
                `}}},tags:["autodocs"],argTypes:{mainRate:{control:{type:"number",min:0,max:100,step:.1},description:"Main conversion rate to highlight",table:{type:{summary:"number"}}},changeIndicator:{control:"text",description:"Change indicator (e.g., +2%, -1.5%)",table:{type:{summary:"string"}}},steps:{control:"object",description:"Array of funnel steps",table:{type:{summary:"FunnelStep[]"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}},...d.xo,...m.jW},decorators:[d.OI]},P={args:{mainRate:10.3,changeIndicator:"+2%",steps:p.$w,loading:!1}},M={args:{mainRate:8.7,changeIndicator:"-1.6%",steps:p.Ro,loading:!1}},B={args:{mainRate:18.7,changeIndicator:"+5.2%",steps:p.hk,loading:!1}},w={args:{mainRate:10.3,steps:p.$w,loading:!1}},K={args:{mainRate:10.3,changeIndicator:"+2%",steps:p.$w,loading:!0}},W={args:{mainRate:0,steps:[],loading:!1}},Y={args:{mainRate:10.3,changeIndicator:"+2%",steps:p.$w,style:{"--primary-color":"#4F46E5","--light-background-color":"rgba(79, 70, 229, 0.08)","--step-font-family":"Roboto, sans-serif"},renderMainMetric:({mainRate:S,changeIndicator:T,className:A})=>(0,c.jsxs)("div",{className:A,style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px",padding:"24px",marginBottom:"32px",color:"white",textAlign:"center"},children:[(0,c.jsx)("h3",{style:{margin:"0 0 12px 0",fontSize:"14px",fontWeight:"500",opacity:.9,textTransform:"uppercase",letterSpacing:"0.5px"},children:"Overall Conversion Rate"}),(0,c.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"16px"},children:[(0,c.jsxs)("span",{style:{fontSize:"42px",fontWeight:"bold",fontFamily:"Inter, sans-serif",lineHeight:1},children:[S.toFixed(1),"%"]}),T&&(0,c.jsx)("span",{style:{fontSize:"16px",fontWeight:"600",fontFamily:"Inter, sans-serif",backgroundColor:T.startsWith("+")?"rgba(16, 185, 129, 0.2)":"rgba(239, 68, 68, 0.2)",color:T.startsWith("+")?"#10b981":"#ef4444",padding:"6px 12px",borderRadius:"8px",border:`1px solid ${T.startsWith("+")?"#10b981":"#ef4444"}`},children:T})]}),(0,c.jsx)("p",{style:{margin:"12px 0 0 0",fontSize:"12px",opacity:.8,fontFamily:"Inter, sans-serif"},children:"Last 30 days vs previous period"})]}),renderTooltip:({step:S})=>(0,c.jsxs)("div",{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px",padding:"16px 20px",color:"white",fontFamily:"Inter, sans-serif",boxShadow:"0 8px 32px rgba(118, 75, 162, 0.3)",border:"none",minWidth:"200px"},children:[(0,c.jsx)("div",{style:{fontSize:"11px",fontWeight:"500",opacity:.8,textTransform:"uppercase",letterSpacing:"0.5px",margin:"0 0 8px 0"},children:S.label}),(0,c.jsxs)("div",{style:{fontSize:"18px",fontWeight:"bold",margin:"0",display:"flex",alignItems:"center",gap:"8px"},children:[S.rate.toFixed(1),"%",S.count&&(0,c.jsxs)("span",{style:{fontSize:"14px",fontWeight:"400",opacity:.9},children:["\u2022 ",S.count.toLocaleString()," items"]})]})]})},parameters:{docs:{description:{story:"Custom typography with renderMainMetric and renderTooltip showing a dashboard-style header and custom tooltip, both with gradient background, larger fonts, and enhanced styling compared to the default display."}}},decorators:[S=>(0,c.jsx)(S,{})]},V={args:{mainRate:10.3,changeIndicator:"+2%",steps:p.$w,renderMainMetric:()=>null,renderTooltip:()=>null},parameters:{docs:{description:{story:"Demonstrates disabling the main metric display and tooltips by returning null from renderMainMetric and renderTooltip render props."}}}},_e=["Default","NegativeChange","HighConversion","WithoutChangeIndicator","Loading","EmptyData","CustomRenderProps","WithoutTooltips"];P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...P.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 8.7,
    changeIndicator: '-1.6%',
    steps: lowConversionFunnelData,
    loading: false
  }
}`,...M.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 18.7,
    changeIndicator: '+5.2%',
    steps: highConversionFunnelData,
    loading: false
  }
}`,...B.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...w.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: true
  }
}`,...K.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 0,
    steps: [],
    loading: false
  }
}`,...W.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js":(x,g,n)=>{"use strict";n.d(g,{A:()=>F});var d=n("../../../node_modules/.pnpm/@visx+point@3.12.0/node_modules/@visx/point/esm/Point.js");function m(a){return!!a&&a instanceof Element}function p(a){return!!a&&(a instanceof SVGElement||"ownerSVGElement"in a)}function o(a){return!!a&&"createSVGPoint"in a}function r(a){return!!a&&"getScreenCTM"in a}function t(a){return!!a&&"changedTouches"in a}function i(a){return!!a&&"clientX"in a}function l(a){return!!a&&(a instanceof Event||"nativeEvent"in a&&a.nativeEvent instanceof Event)}function f(){return f=Object.assign?Object.assign.bind():function(a){for(var v=1;v<arguments.length;v++){var s=arguments[v];for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&(a[e]=s[e])}return a},f.apply(this,arguments)}var _={x:0,y:0};function b(a){if(!a)return f({},_);if(t(a))return a.changedTouches.length>0?{x:a.changedTouches[0].clientX,y:a.changedTouches[0].clientY}:f({},_);if(i(a))return{x:a.clientX,y:a.clientY};var v=a?.target,s=v&&"getBoundingClientRect"in v?v.getBoundingClientRect():null;return s?{x:s.x+s.width/2,y:s.y+s.height/2}:f({},_)}function E(a,v){if(!a||!v)return null;var s=b(v),e=p(a)?a.ownerSVGElement:a,h=r(e)?e.getScreenCTM():null;if(o(e)&&h){var c=e.createSVGPoint();return c.x=s.x,c.y=s.y,c=c.matrixTransform(h.inverse()),new d.A({x:c.x,y:c.y})}var y=a.getBoundingClientRect();return new d.A({x:s.x-y.left-a.clientLeft,y:s.y-y.top-a.clientTop})}function F(a,v){if(m(a)&&v)return E(a,v);if(l(a)){var s=a,e=s.target;if(e)return E(e,s)}return null}},"../../../node_modules/.pnpm/@visx+point@3.12.0/node_modules/@visx/point/esm/Point.js":(x,g,n)=>{"use strict";n.d(g,{A:()=>d});var d=function(){function m(o){var r=o.x,t=r===void 0?0:r,i=o.y,l=i===void 0?0:i;this.x=0,this.y=0,this.x=t,this.y=l}var p=m.prototype;return p.value=function(){return{x:this.x,y:this.y}},p.toArray=function(){return[this.x,this.y]},m}()},"../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js":(x,g,n)=>{"use strict";n.d(g,{A:()=>r});var d=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=["tooltipOpen"];function p(t,i){if(t==null)return{};var l={},f=Object.keys(t),_,b;for(b=0;b<f.length;b++)_=f[b],!(i.indexOf(_)>=0)&&(l[_]=t[_]);return l}function o(){return o=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var l=arguments[i];for(var f in l)Object.prototype.hasOwnProperty.call(l,f)&&(t[f]=l[f])}return t},o.apply(this,arguments)}function r(t){var i=(0,d.useState)(o({tooltipOpen:!1},t)),l=i[0],f=i[1],_=(0,d.useCallback)(function(E){return f(typeof E=="function"?function(F){var a=F.tooltipOpen,v=p(F,m);return o({},E(v),{tooltipOpen:!0})}:{tooltipOpen:!0,tooltipLeft:E.tooltipLeft,tooltipTop:E.tooltipTop,tooltipData:E.tooltipData})},[f]),b=(0,d.useCallback)(function(){return f({tooltipOpen:!1,tooltipLeft:void 0,tooltipTop:void 0,tooltipData:void 0})},[f]);return{tooltipOpen:l.tooltipOpen,tooltipLeft:l.tooltipLeft,tooltipTop:l.tooltipTop,tooltipData:l.tooltipData,updateTooltip:f,showTooltip:_,hideTooltip:b}}},"../charts/src/providers/chart-context/global-charts-provider.tsx":(x,g,n)=>{"use strict";n.d(g,{S:()=>r,m:()=>o});var d=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=n("../charts/src/providers/theme/themes.ts"),p=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,d.createContext)(null),r=({children:t,theme:i={}})=>{const[l,f]=(0,d.useState)(()=>new Map),_=(0,d.useMemo)(()=>({...m.zQ,...i}),[i]),b=(0,d.useRef)(new Map);(0,d.useEffect)(()=>{b.current=new Map},[_.colors]);const E=(0,d.useCallback)((e,h)=>{f(c=>new Map(c).set(e,h))},[]),F=(0,d.useCallback)(e=>{f(h=>{const c=new Map(h);return c.delete(e),c})},[]),a=(0,d.useCallback)(e=>l.get(e),[l]),v=(0,d.useCallback)(({group:e,index:h,overrideColor:c})=>{if(c)return c;const y=_.colors??[];if(e){const L=b.current.get(e);if(L)return L;const oe=b.current.size,$=y.length>0?y[oe%y.length]:"#000000";return b.current.set(e,$),$}return y.length>0?y[(h||0)%y.length]:"#000000"},[_.colors]),s=(0,d.useMemo)(()=>({charts:l,registerChart:E,unregisterChart:F,getChartData:a,theme:_,resolveGroupColor:v}),[l,E,F,a,_,v]);return(0,p.jsx)(o.Provider,{value:s,children:t})};try{r.displayName="GlobalChartsProvider",r.__docgenInfo={description:"",displayName:"GlobalChartsProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional theme override. Considered static for provider lifecycle.",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"]={docgenInfo:r.__docgenInfo,name:"GlobalChartsProvider",path:"../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"})}catch{}},"../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts":(x,g,n)=>{"use strict";n.d(g,{p:()=>l});var d=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=n("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),p=n.n(m);function o(f,_){return p()(f,_,{arrayMerge:(b,E)=>E})}var r=n("../charts/src/providers/theme/theme-provider.tsx"),t=n("../charts/src/providers/theme/themes.ts"),i=n("../charts/src/providers/chart-context/global-charts-provider.tsx");const l=()=>{const _=(0,d.useContext)(i.m)?.theme,b=(0,r.R)();return(0,d.useMemo)(()=>o(_??t.zQ,b),[_,b])}},"../charts/src/providers/theme/theme-provider.tsx":(x,g,n)=>{"use strict";n.d(g,{N:()=>r,R:()=>o});var d=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const p=(0,d.createContext)({}),o=()=>(0,d.useContext)(p),r=({theme:t={},children:i})=>(0,m.jsx)(p.Provider,{value:t,children:i});try{r.displayName="ThemeProvider",r.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:r.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{o.displayName="useChartTheme",o.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:o.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(x,g,n)=>{"use strict";n.d(g,{QI:()=>m,pk:()=>p,zQ:()=>d});const d={backgroundColor:"#FFFFFF",labelBackgroundColor:"transparent",labelTextColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#80C8FF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},m={backgroundColor:"#FFFFFF",labelBackgroundColor:"transparent",labelTextColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#006DAB",secondaryColor:"#98C8DF",deltaColors:["#FF8C8F","#757575","#1F9828"]},conversionFunnelChart:{primaryColor:"#006DAB",backgroundColor:"#F3F4F6",positiveChangeColor:"#1F9828",negativeChangeColor:"#FF8C8F"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},p={backgroundColor:"#FFFFFF",labelBackgroundColor:"transparent",labelTextColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"},annotationStyles:{label:{anchorLineStroke:"black",backgroundFill:"#fff"},connector:{stroke:"black"},circleSubject:{stroke:"transparent",fill:"black",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#80C8FF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeWidth:1.5,strokeLinecap:"square"}}}}},"../charts/src/stories/chart-decorator.tsx":(x,g,n)=>{"use strict";n.d(g,{OI:()=>o,cg:()=>r,xo:()=>t});var d=n("../charts/src/providers/chart-context/global-charts-provider.tsx"),m=n("../charts/src/stories/theme-config.tsx"),p=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(i,l)=>{const f=l.args;return r(()=>(0,p.jsx)("div",{style:{resize:f.resize||"both",overflow:"auto",padding:"1rem",width:f.containerWidth||"800px",height:f.containerHeight,maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,p.jsx)(i,{})}),l)},r=(i,{args:l})=>{const f=l.themeName,_=m.yI[f||"default"];return(0,p.jsx)(d.S,{theme:_,children:(0,p.jsx)(i,{})})},t={maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}},containerWidth:{control:{type:"text"},description:'CSS width value for the chart container (e.g., "400px", "100%")'},containerHeight:{control:{type:"text"},description:'CSS height value for the chart container (e.g., "400px", "100%")'},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"],description:"Resize behavior for the chart container"}};try{o.displayName="chartDecorator",o.__docgenInfo={description:`Shared decorator for chart stories with GlobalChartsProvider and dynamic theme support
Provides a resizable container for testing responsive behavior
Composes with simpleChartDecorator to add container styling
Supports configurable container dimensions via containerWidth/containerHeight args`,displayName:"chartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#chartDecorator"]={docgenInfo:o.__docgenInfo,name:"chartDecorator",path:"../charts/src/stories/chart-decorator.tsx#chartDecorator"})}catch{}try{r.displayName="simpleChartDecorator",r.__docgenInfo={description:`Simple decorator for chart context stories with GlobalChartsProvider but no container styling
Used for stories that display multiple charts in custom layouts`,displayName:"simpleChartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"]={docgenInfo:r.__docgenInfo,name:"simpleChartDecorator",path:"../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"})}catch{}try{t.displayName="sharedChartArgTypes",t.__docgenInfo={description:"Shared argTypes for common chart controls",displayName:"sharedChartArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"]={docgenInfo:t.__docgenInfo,name:"sharedChartArgTypes",path:"../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"})}catch{}},"../charts/src/stories/theme-config.tsx":(x,g,n)=>{"use strict";n.d(g,{jW:()=>o,yI:()=>p});var d=n("../charts/src/providers/theme/themes.ts");const m={colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],seriesLineStyles:[{strokeWidth:1,strokeDasharray:"8 8",strokeLinecap:"square"},{strokeDasharray:"5 8",strokeWidth:2,strokeLinecap:"square"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},p={default:d.zQ,jetpack:d.QI,woo:d.pk,custom:m},o={themeName:{control:{type:"select"},options:["default","jetpack","woo","custom"],defaultValue:"default",description:"Select a theme to apply to the chart",table:{category:"Theme"}}};try{m.displayName="customTheme",m.__docgenInfo={description:"Custom theme with earth tones and dashed line styles for demonstration",displayName:"customTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#customTheme"]={docgenInfo:m.__docgenInfo,name:"customTheme",path:"../charts/src/stories/theme-config.tsx#customTheme"})}catch{}try{backgroundColor.displayName="backgroundColor",backgroundColor.__docgenInfo={description:"Background color for chart components",displayName:"backgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#backgroundColor"]={docgenInfo:backgroundColor.__docgenInfo,name:"backgroundColor",path:"../charts/src/stories/theme-config.tsx#backgroundColor"})}catch{}try{labelBackgroundColor.displayName="labelBackgroundColor",labelBackgroundColor.__docgenInfo={description:"Background color for labels",displayName:"labelBackgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelBackgroundColor"]={docgenInfo:labelBackgroundColor.__docgenInfo,name:"labelBackgroundColor",path:"../charts/src/stories/theme-config.tsx#labelBackgroundColor"})}catch{}try{labelTextColor.displayName="labelTextColor",labelTextColor.__docgenInfo={description:"Text color for labels",displayName:"labelTextColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelTextColor"]={docgenInfo:labelTextColor.__docgenInfo,name:"labelTextColor",path:"../charts/src/stories/theme-config.tsx#labelTextColor"})}catch{}try{colors.displayName="colors",colors.__docgenInfo={description:"Array of colors used for data visualization",displayName:"colors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#colors"]={docgenInfo:colors.__docgenInfo,name:"colors",path:"../charts/src/stories/theme-config.tsx#colors"})}catch{}try{gridStyles.displayName="gridStyles",gridStyles.__docgenInfo={description:"Optional CSS styles for grid lines",displayName:"gridStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridStyles"]={docgenInfo:gridStyles.__docgenInfo,name:"gridStyles",path:"../charts/src/stories/theme-config.tsx#gridStyles"})}catch{}try{tickLength.displayName="tickLength",tickLength.__docgenInfo={description:"Length of axis ticks in pixels",displayName:"tickLength",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#tickLength"]={docgenInfo:tickLength.__docgenInfo,name:"tickLength",path:"../charts/src/stories/theme-config.tsx#tickLength"})}catch{}try{gridColor.displayName="gridColor",gridColor.__docgenInfo={description:"Color of the grid lines",displayName:"gridColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColor"]={docgenInfo:gridColor.__docgenInfo,name:"gridColor",path:"../charts/src/stories/theme-config.tsx#gridColor"})}catch{}try{gridColorDark.displayName="gridColorDark",gridColorDark.__docgenInfo={description:"Color of the grid lines in dark mode",displayName:"gridColorDark",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColorDark"]={docgenInfo:gridColorDark.__docgenInfo,name:"gridColorDark",path:"../charts/src/stories/theme-config.tsx#gridColorDark"})}catch{}try{xTickLineStyles.displayName="xTickLineStyles",xTickLineStyles.__docgenInfo={description:"Styles for x-axis tick lines",displayName:"xTickLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xTickLineStyles"]={docgenInfo:xTickLineStyles.__docgenInfo,name:"xTickLineStyles",path:"../charts/src/stories/theme-config.tsx#xTickLineStyles"})}catch{}try{xAxisLineStyles.displayName="xAxisLineStyles",xAxisLineStyles.__docgenInfo={description:"Styles for x-axis line",displayName:"xAxisLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xAxisLineStyles"]={docgenInfo:xAxisLineStyles.__docgenInfo,name:"xAxisLineStyles",path:"../charts/src/stories/theme-config.tsx#xAxisLineStyles"})}catch{}try{seriesLineStyles.displayName="seriesLineStyles",seriesLineStyles.__docgenInfo={description:"Styles for series lines",displayName:"seriesLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#seriesLineStyles"]={docgenInfo:seriesLineStyles.__docgenInfo,name:"seriesLineStyles",path:"../charts/src/stories/theme-config.tsx#seriesLineStyles"})}catch{}try{legendShapeStyles.displayName="legendShapeStyles",legendShapeStyles.__docgenInfo={description:"Styles for legend shapes",displayName:"legendShapeStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendShapeStyles"]={docgenInfo:legendShapeStyles.__docgenInfo,name:"legendShapeStyles",path:"../charts/src/stories/theme-config.tsx#legendShapeStyles"})}catch{}try{glyphs.displayName="glyphs",glyphs.__docgenInfo={description:"Array of render functions for glyphs",displayName:"glyphs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#glyphs"]={docgenInfo:glyphs.__docgenInfo,name:"glyphs",path:"../charts/src/stories/theme-config.tsx#glyphs"})}catch{}try{legendLabelStyles.displayName="legendLabelStyles",legendLabelStyles.__docgenInfo={description:"Styles for legend labels",displayName:"legendLabelStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendLabelStyles"]={docgenInfo:legendLabelStyles.__docgenInfo,name:"legendLabelStyles",path:"../charts/src/stories/theme-config.tsx#legendLabelStyles"})}catch{}try{legendContainerStyles.displayName="legendContainerStyles",legendContainerStyles.__docgenInfo={description:"Styles for legend container",displayName:"legendContainerStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendContainerStyles"]={docgenInfo:legendContainerStyles.__docgenInfo,name:"legendContainerStyles",path:"../charts/src/stories/theme-config.tsx#legendContainerStyles"})}catch{}try{leaderboardChart.displayName="leaderboardChart",leaderboardChart.__docgenInfo={description:"LeaderboardChart specific settings",displayName:"leaderboardChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#leaderboardChart"]={docgenInfo:leaderboardChart.__docgenInfo,name:"leaderboardChart",path:"../charts/src/stories/theme-config.tsx#leaderboardChart"})}catch{}try{conversionFunnelChart.displayName="conversionFunnelChart",conversionFunnelChart.__docgenInfo={description:"ConversionFunnelChart specific settings",displayName:"conversionFunnelChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#conversionFunnelChart"]={docgenInfo:conversionFunnelChart.__docgenInfo,name:"conversionFunnelChart",path:"../charts/src/stories/theme-config.tsx#conversionFunnelChart"})}catch{}try{p.displayName="CHART_THEME_MAP",p.__docgenInfo={description:"Centralized theme map for all chart stories",displayName:"CHART_THEME_MAP",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"]={docgenInfo:p.__docgenInfo,name:"CHART_THEME_MAP",path:"../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"})}catch{}try{o.displayName="themeArgTypes",o.__docgenInfo={description:"Shared argTypes for theme control",displayName:"themeArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#themeArgTypes"]={docgenInfo:o.__docgenInfo,name:"themeArgTypes",path:"../charts/src/stories/theme-config.tsx#themeArgTypes"})}catch{}},"../charts/src/utils/format-percentage.ts":(x,g,n)=>{"use strict";n.d(g,{E:()=>m});var d=n("../number-formatters/src/index.ts");const m=p=>(0,d.ZV)(p/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})},"../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js":(x,g)=>{var n,d;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var m={}.hasOwnProperty;function p(){for(var t="",i=0;i<arguments.length;i++){var l=arguments[i];l&&(t=r(t,o(l)))}return t}function o(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return p.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var i="";for(var l in t)m.call(t,l)&&t[l]&&(i=r(i,l));return i}function r(t,i){return i?t?t+" "+i:t+i:t}x.exports?(p.default=p,x.exports=p):(n=[],d=function(){return p}.apply(g,n),d!==void 0&&(x.exports=d))})()},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(x,g,n)=>{"use strict";n.d(g,{A:()=>p});function d(o){var r,t,i="";if(typeof o=="string"||typeof o=="number")i+=o;else if(typeof o=="object")if(Array.isArray(o)){var l=o.length;for(r=0;r<l;r++)o[r]&&(t=d(o[r]))&&(i&&(i+=" "),i+=t)}else for(t in o)o[t]&&(i&&(i+=" "),i+=t);return i}function m(){for(var o,r,t=0,i="",l=arguments.length;t<l;t++)(o=arguments[t])&&(r=d(o))&&(i&&(i+=" "),i+=r);return i}const p=m},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.module.scss":(x,g,n)=>{"use strict";n.d(g,{A:()=>t});var d=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=n.n(d),p=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=n.n(p),r=o()(m());r.push([x.id,'.I8mGoz_EtiIWZaoGS30E{font-family:var(--funnel-font-family, "SF Pro Text")}.I8mGoz_EtiIWZaoGS30E.Ob8tvy5eHghStcrCJWN9{opacity:.6;pointer-events:none}.wKbGFYQfIOfhmmYFLHSK{display:flex;align-items:baseline;gap:8px;margin-bottom:24px}.oY7oSTOv0O1OVE7Nwr7r{overflow:hidden;color:#1e1e1e;text-overflow:ellipsis;font-family:var(--funnel-font-family, "SF Pro Text");font-size:18px;font-style:normal;font-weight:500;line-height:20px;margin:0}.g5eftU7LwDzx_CwgrYz5{overflow:hidden;color:var(--change-indicator-color, #008a20);text-overflow:ellipsis;font-family:var(--funnel-font-family, "SF Pro Text");font-size:13px;font-style:normal;font-weight:500;line-height:20px;margin:0}.IZ7aZvTDxof7mJ6gicwQ{display:flex;gap:16px;align-items:flex-end;height:200px;width:100%}.pR7TosSoLpSVwLTN8nAn{flex:1 1 0;min-width:0;display:flex;flex-direction:column;height:100%;transition:all .3s ease}.pR7TosSoLpSVwLTN8nAn.HY_Ypub6UryoV4Z52Fgg{opacity:.3}.DveAm765BEke10Kf4yvu{margin-bottom:24px}.Yeb2mq3ZeOYLdNHbM8O3{color:#757575;font-family:var(--step-font-family, "SF Pro");font-size:12px;font-style:normal;font-weight:400;line-height:16px;margin:0 0 2px 0;display:block;overflow:hidden;text-overflow:ellipsis}.ZUUjFGTjmZSNG6YFOo5c{color:#1e1e1e;font-family:var(--step-font-family, "SF Pro");font-size:13px;font-style:normal;font-weight:500;line-height:20px;margin:0;display:block}.d4wNKrRPvcARkiBpSPTn{flex:1;display:flex;align-items:flex-end;background-color:var(--light-background-color, rgba(79, 70, 229, 0.08));border-radius:4px;position:relative;cursor:pointer;transition:all .2s ease}.d4wNKrRPvcARkiBpSPTn._AsHQhUE_HUVQsd4tEFP{background-color:var(--light-background-color, rgba(79, 70, 229, 0.15))}.d4wNKrRPvcARkiBpSPTn.jIqdqNePu7F4gG7xFLHI{cursor:pointer}.mzNMNSGEaQ4x8cSdybFr{width:100%;min-height:4px;border-radius:4px 4px 0 0;transition:all .3s ease;background-color:var(--primary-color, #4f46e5)}.mzNMNSGEaQ4x8cSdybFr._AsHQhUE_HUVQsd4tEFP{box-shadow:0 4px 16px rgba(0,0,0,.2);filter:brightness(1.1)}.O5BsuL6i14EMWlko19Y0{display:inline-flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:4px;border-bottom:1px solid var(--Gray-Gray-5, #dcdcde);background:var(--black-white-white, #fff);border-radius:4px !important;padding:12px !important;box-shadow:0 1px 3px 0 rgba(0,0,0,.15),0 3px 9px 0 rgba(0,0,0,.12) !important}.j6cWoywD6KBtUocSpOXB{color:#1e1e1e;font-family:"SF Pro",sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:16px}.V270MDRAbjhmCL4nVFTG{color:#1e1e1e;font-family:"SF Pro",sans-serif;font-size:13px;font-style:normal;font-weight:500;line-height:20px}.IC2AzG5eUxmMyt131MAU{text-align:center;padding:48px 24px;color:#6b7280;font-size:16px}',""]),r.locals={conversionFunnelChart:"I8mGoz_EtiIWZaoGS30E",loading:"Ob8tvy5eHghStcrCJWN9","main-metric":"wKbGFYQfIOfhmmYFLHSK","main-rate":"oY7oSTOv0O1OVE7Nwr7r","change-indicator":"g5eftU7LwDzx_CwgrYz5","funnel-container":"IZ7aZvTDxof7mJ6gicwQ","funnel-step":"pR7TosSoLpSVwLTN8nAn",blurred:"HY_Ypub6UryoV4Z52Fgg","step-header":"DveAm765BEke10Kf4yvu","step-label":"Yeb2mq3ZeOYLdNHbM8O3","step-rate":"ZUUjFGTjmZSNG6YFOo5c","bar-container":"d4wNKrRPvcARkiBpSPTn",selected:"_AsHQhUE_HUVQsd4tEFP",disabled:"jIqdqNePu7F4gG7xFLHI","funnel-bar":"mzNMNSGEaQ4x8cSdybFr","tooltip-wrapper":"O5BsuL6i14EMWlko19Y0","tooltip-title":"j6cWoywD6KBtUocSpOXB","tooltip-content":"V270MDRAbjhmCL4nVFTG","empty-state":"IC2AzG5eUxmMyt131MAU"};const t=r},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":x=>{"use strict";var g=function(e){return n(e)&&!d(e)};function n(s){return!!s&&typeof s=="object"}function d(s){var e=Object.prototype.toString.call(s);return e==="[object RegExp]"||e==="[object Date]"||o(s)}var m=typeof Symbol=="function"&&Symbol.for,p=m?Symbol.for("react.element"):60103;function o(s){return s.$$typeof===p}function r(s){return Array.isArray(s)?[]:{}}function t(s,e){return e.clone!==!1&&e.isMergeableObject(s)?a(r(s),s,e):s}function i(s,e,h){return s.concat(e).map(function(c){return t(c,h)})}function l(s,e){if(!e.customMerge)return a;var h=e.customMerge(s);return typeof h=="function"?h:a}function f(s){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(s).filter(function(e){return Object.propertyIsEnumerable.call(s,e)}):[]}function _(s){return Object.keys(s).concat(f(s))}function b(s,e){try{return e in s}catch{return!1}}function E(s,e){return b(s,e)&&!(Object.hasOwnProperty.call(s,e)&&Object.propertyIsEnumerable.call(s,e))}function F(s,e,h){var c={};return h.isMergeableObject(s)&&_(s).forEach(function(y){c[y]=t(s[y],h)}),_(e).forEach(function(y){E(s,y)||(b(s,y)&&h.isMergeableObject(e[y])?c[y]=l(y,h)(s[y],e[y],h):c[y]=t(e[y],h))}),c}function a(s,e,h){h=h||{},h.arrayMerge=h.arrayMerge||i,h.isMergeableObject=h.isMergeableObject||g,h.cloneUnlessOtherwiseSpecified=t;var c=Array.isArray(e),y=Array.isArray(s),L=c===y;return L?c?h.arrayMerge(s,e,h):F(s,e,h):t(e,h)}a.all=function(e,h){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(c,y){return a(c,y,h)},{})};var v=a;x.exports=v},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js":(x,g,n)=>{"use strict";var d=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function m(){}function p(){}p.resetWarningCache=m,x.exports=function(){function o(i,l,f,_,b,E){if(E!==d){var F=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw F.name="Invariant Violation",F}}o.isRequired=o;function r(){return o}var t={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:r,element:o,elementType:o,instanceOf:r,node:o,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:p,resetWarningCache:m};return t.PropTypes=t,t}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":(x,g,n)=>{if(0)var d,m;else x.exports=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":x=>{"use strict";var g="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";x.exports=g}}]);
