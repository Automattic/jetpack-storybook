(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[201],{"../charts/src/components/conversion-funnel-chart/stories/index.stories.tsx":(S,v,o)=>{"use strict";o.r(v),o.d(v,{CustomRenderProps:()=>z,Default:()=>I,EmptyData:()=>V,HighConversion:()=>L,JetpackTheme:()=>G,Loading:()=>B,NegativeChange:()=>N,WithoutChangeIndicator:()=>W,WithoutTooltips:()=>K,WooCommerceTheme:()=>U,__namedExportsOrder:()=>ve,default:()=>Q});var d=o("../charts/src/providers/theme/theme-provider.tsx"),g=o("../charts/src/providers/theme/themes.ts"),u=o("../charts/src/stories/sample-data/index.ts"),a=o("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),c=o("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),n=o("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),i=o("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),y=o("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts");const C=(m,x)=>{if(typeof m!="string")throw new Error("Hex color must be a string");if(!m.startsWith("#"))throw new Error("Hex color must start with #");if(m.length!==7)throw new Error("Hex color must be 7 characters long (e.g., #ff0000)");const j=m.slice(1);if(!/^[0-9a-fA-F]{6}$/.test(j))throw new Error("Hex color contains invalid characters. Only 0-9, a-f, A-F are allowed");if(typeof x!="number"||isNaN(x))throw new Error("Alpha must be a number");const w=parseInt(m.slice(1,3),16),D=parseInt(m.slice(3,5),16),Y=parseInt(m.slice(5,7),16);return`rgba(${w}, ${D}, ${Y}, ${x})`};var _=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=o.n(_),R=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.module.scss"),r={};r.insert="head",r.singleton=!1;var T=E()(R.A,r);const e=R.A.locals||{},s=m=>{const[x,j]=(0,l.useState)(null),w=(0,l.useCallback)(O=>{x===O?(j(null),m?.()):j(O)},[x,m]),D=(0,l.useCallback)((O,P)=>{P.key==="Enter"||P.key===" "?(P.preventDefault(),x===O?(j(null),m?.()):j(O)):P.key==="Escape"&&(P.preventDefault(),j(null),m?.())},[x,m]),Y=(0,l.useCallback)(()=>{j(null),m?.()},[m]),Z=(0,l.useCallback)(O=>({isClicked:x===O,isBlurred:x!==null&&x!==O}),[x]);return{clickedStep:x,handleBarClick:w,handleBarKeyDown:D,clearSelection:Y,getStepState:Z}};var t=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f={primaryColor:"#4F46E5",backgroundColor:"#F3F4F6",positiveChangeColor:"#10B981",negativeChangeColor:"#EF4444"},h=({mainRate:m,changeIndicator:x,steps:j,loading:w=!1,className:D,style:Y,renderStepLabel:Z,renderStepRate:O,renderMainMetric:P,renderTooltip:ie})=>{const Ce=(0,y.p)(),J=(0,l.useRef)(null),H=(0,l.useRef)(null),{tooltipData:X,tooltipLeft:le,tooltipTop:ce,tooltipOpen:be,showTooltip:de,hideTooltip:q}=(0,c.A)(),{handleBarClick:ee,handleBarKeyDown:$,clearSelection:pe,getStepState:te}=s(q),{containerRef:xe,TooltipInPortal:_e}=(0,n.A)({detectBounds:!0,scroll:!0}),ue=(0,l.useCallback)(()=>{pe(),H.current=null,q()},[pe,q]),ne=(0,l.useCallback)((p,b,k)=>{de({tooltipData:p,tooltipLeft:b,tooltipTop:k-10})},[de]),me=(0,l.useCallback)(p=>{const b=J.current;if(b){const k=(0,a.A)(b,p.nativeEvent);if(k)return{x:k.x,y:k.y}}return null},[]),he=(0,l.useCallback)(p=>{const b=p.currentTarget.getBoundingClientRect(),k=J.current;if(k){const A=k.getBoundingClientRect(),F=b.left+b.width/2-A.left,ke=b.top-A.top;return{x:F,y:ke}}return null},[]),re=(0,l.useCallback)((p,b,k)=>{H.current=b.currentTarget;const{isClicked:A}=te(p.id);if(A){k==="click"?ee(p.id):$(p.id,b);return}if(k==="click"){ee(p.id);const F=me(b);F&&ne(p,F.x,F.y)}else{$(p.id,b);const F=he(b);F&&ne(p,F.x,F.y)}},[te,ee,$,ne,me,he]),fe=(0,l.useMemo)(()=>{const p=new Map;return j.forEach(b=>{const k=F=>{F.stopPropagation(),re(b,F,"click")},A=F=>{F.key==="Enter"||F.key===" "?re(b,F,"keyboard"):(H.current=F.currentTarget,$(b.id,F))};p.set(b.id,{onClick:k,onKeyDown:A})}),p},[j,re,$]);(0,l.useEffect)(()=>{const p=b=>{H.current&&!H.current.contains(b.target)&&ue()};return document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}},[ue]);const oe=Ce.conversionFunnelChart,ae=oe?.primaryColor||f.primaryColor,Se=oe?.positiveChangeColor||f.positiveChangeColor,Fe=oe?.negativeChangeColor||f.negativeChangeColor,ge=x?.startsWith("+")?Se:Fe,Te=C(ae,.08),ye={"--primary-color":ae,"--light-background-color":Te,"--change-indicator-color":ge,...Y},Ee=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("span",{className:e["main-rate"],children:[m.toFixed(1),"%"]}),x&&(0,t.jsx)("span",{className:e["change-indicator"],children:x})]}),je=p=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:e["tooltip-title"],children:p.label}),(0,t.jsxs)("div",{className:e["tooltip-content"],children:[p.rate.toFixed(1),"%",p.count&&` \u2022 ${p.count.toLocaleString()} items`]})]});if(!j||j.length===0)return(0,t.jsx)("div",{className:(0,i.A)(e.conversionFunnelChart,w&&e.loading,D),style:ye,children:(0,t.jsx)("div",{className:e["empty-state"],children:w?"Loading...":"No data available"})});const Re=Math.max(...j.map(p=>p.rate));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{ref:p=>{xe(p),J.current=p},className:(0,i.A)(e.conversionFunnelChart,w&&e.loading,D),style:ye,children:[P?P({mainRate:m,changeIndicator:x,className:e["main-metric"],changeColor:ge}):(0,t.jsx)("div",{className:e["main-metric"],children:Ee()}),(0,t.jsx)("div",{className:e["funnel-container"],children:j.map((p,b)=>{const k=p.rate/Re*100,{isClicked:A,isBlurred:F}=te(p.id);return(0,t.jsxs)("div",{className:(0,i.A)(e["funnel-step"],F&&e.blurred),children:[(0,t.jsxs)("div",{className:e["step-header"],children:[Z?Z({step:p,index:b,className:e["step-label"]}):(0,t.jsx)("span",{className:e["step-label"],children:p.label}),O?O({step:p,index:b,className:e["step-rate"]}):(0,t.jsxs)("span",{className:e["step-rate"],children:[p.rate.toFixed(1),"%"]})]}),(0,t.jsx)("div",{className:(0,i.A)(e["bar-container"],A&&e.selected,F&&e.disabled),onClick:fe.get(p.id)?.onClick,onKeyDown:fe.get(p.id)?.onKeyDown,role:"button",tabIndex:F?-1:0,"aria-label":p.label,children:(0,t.jsx)("div",{className:(0,i.A)(e["funnel-bar"],A&&e.selected),style:{height:`${k}%`,backgroundColor:ae}})})]},p.id)})})]}),be&&X&&(()=>{const p=ie?ie({step:X,index:j.findIndex(b=>b.id===X.id),top:ce,left:le,className:e["tooltip-wrapper"]}):je(X);return p?(0,t.jsx)(_e,{top:ce,left:le,className:e["tooltip-wrapper"],children:p},Math.random()):null})()]})},M=null;try{h.displayName="ConversionFunnelChart",h.__docgenInfo={description:"ConversionFunnelChart component displays a conversion funnel with main metric and visualization",displayName:"ConversionFunnelChart",props:{mainRate:{defaultValue:null,description:"Main conversion rate to highlight",name:"mainRate",required:!0,type:{name:"number"}},changeIndicator:{defaultValue:null,description:"Change indicator (e.g., +2%, -1.5%)",name:"changeIndicator",required:!1,type:{name:"string"}},steps:{defaultValue:null,description:"Array of funnel steps",name:"steps",required:!0,type:{name:"FunnelStep[]"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling",name:"style",required:!1,type:{name:"CSSProperties"}},renderStepLabel:{defaultValue:null,description:"Custom render function for step labels",name:"renderStepLabel",required:!1,type:{name:"(props: StepLabelRenderProps) => ReactNode"}},renderStepRate:{defaultValue:null,description:"Custom render function for step rates",name:"renderStepRate",required:!1,type:{name:"(props: StepRateRenderProps) => ReactNode"}},renderMainMetric:{defaultValue:null,description:"Custom render function for the entire main metric section",name:"renderMainMetric",required:!1,type:{name:"(props: MainMetricRenderProps) => ReactNode"}},renderTooltip:{defaultValue:null,description:"Custom render function for tooltip content",name:"renderTooltip",required:!1,type:{name:"(props: TooltipRenderProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#ConversionFunnelChart"]={docgenInfo:h.__docgenInfo,name:"ConversionFunnelChart",path:"../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#ConversionFunnelChart"})}catch{}try{conversionfunnelchart.displayName="conversionfunnelchart",conversionfunnelchart.__docgenInfo={description:"ConversionFunnelChart component displays a conversion funnel with main metric and visualization",displayName:"conversionfunnelchart",props:{mainRate:{defaultValue:null,description:"Main conversion rate to highlight",name:"mainRate",required:!0,type:{name:"number"}},changeIndicator:{defaultValue:null,description:"Change indicator (e.g., +2%, -1.5%)",name:"changeIndicator",required:!1,type:{name:"string"}},steps:{defaultValue:null,description:"Array of funnel steps",name:"steps",required:!0,type:{name:"FunnelStep[]"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling",name:"style",required:!1,type:{name:"CSSProperties"}},renderStepLabel:{defaultValue:null,description:"Custom render function for step labels",name:"renderStepLabel",required:!1,type:{name:"(props: StepLabelRenderProps) => ReactNode"}},renderStepRate:{defaultValue:null,description:"Custom render function for step rates",name:"renderStepRate",required:!1,type:{name:"(props: StepRateRenderProps) => ReactNode"}},renderMainMetric:{defaultValue:null,description:"Custom render function for the entire main metric section",name:"renderMainMetric",required:!1,type:{name:"(props: MainMetricRenderProps) => ReactNode"}},renderTooltip:{defaultValue:null,description:"Custom render function for tooltip content",name:"renderTooltip",required:!1,type:{name:"(props: TooltipRenderProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"]={docgenInfo:conversionfunnelchart.__docgenInfo,name:"conversionfunnelchart",path:"../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"})}catch{}const Q={title:"JS Packages/Charts/Types/Conversion Funnel Chart",component:h,parameters:{layout:"centered",docs:{description:{component:`
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
                `}}},tags:["autodocs"],argTypes:{mainRate:{control:{type:"number",min:0,max:100,step:.1},description:"Main conversion rate to highlight",table:{type:{summary:"number"}}},changeIndicator:{control:"text",description:"Change indicator (e.g., +2%, -1.5%)",table:{type:{summary:"string"}}},steps:{control:"object",description:"Array of funnel steps",table:{type:{summary:"FunnelStep[]"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}}},decorators:[m=>(0,t.jsx)("div",{style:{width:"600px",padding:"20px"},children:(0,t.jsx)(m,{})})]},I={args:{mainRate:10.3,changeIndicator:"+2%",steps:u.$w,loading:!1}},N={args:{mainRate:8.7,changeIndicator:"-1.6%",steps:u.Ro,loading:!1}},L={args:{mainRate:18.7,changeIndicator:"+5.2%",steps:u.hk,loading:!1}},W={args:{mainRate:10.3,steps:u.$w,loading:!1}},B={args:{mainRate:10.3,changeIndicator:"+2%",steps:u.$w,loading:!0}},V={args:{mainRate:0,steps:[],loading:!1}},G={args:{mainRate:10.3,changeIndicator:"+2%",steps:u.$w,loading:!1},decorators:[m=>(0,t.jsx)(d.N,{theme:g.QI,children:(0,t.jsx)(m,{})})]},U={args:{mainRate:10.3,changeIndicator:"+2%",steps:u.$w,loading:!1},decorators:[m=>(0,t.jsx)(d.N,{theme:g.pk,children:(0,t.jsx)(m,{})})]},z={args:{mainRate:10.3,changeIndicator:"+2%",steps:u.$w,style:{"--primary-color":"#4F46E5","--light-background-color":"rgba(79, 70, 229, 0.08)","--step-font-family":"Roboto, sans-serif"},renderMainMetric:({mainRate:m,changeIndicator:x,className:j})=>(0,t.jsxs)("div",{className:j,style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px",padding:"24px",marginBottom:"32px",color:"white",textAlign:"center"},children:[(0,t.jsx)("h3",{style:{margin:"0 0 12px 0",fontSize:"14px",fontWeight:"500",opacity:.9,textTransform:"uppercase",letterSpacing:"0.5px"},children:"Overall Conversion Rate"}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"16px"},children:[(0,t.jsxs)("span",{style:{fontSize:"42px",fontWeight:"bold",fontFamily:"Inter, sans-serif",lineHeight:1},children:[m.toFixed(1),"%"]}),x&&(0,t.jsx)("span",{style:{fontSize:"16px",fontWeight:"600",fontFamily:"Inter, sans-serif",backgroundColor:x.startsWith("+")?"rgba(16, 185, 129, 0.2)":"rgba(239, 68, 68, 0.2)",color:x.startsWith("+")?"#10b981":"#ef4444",padding:"6px 12px",borderRadius:"8px",border:`1px solid ${x.startsWith("+")?"#10b981":"#ef4444"}`},children:x})]}),(0,t.jsx)("p",{style:{margin:"12px 0 0 0",fontSize:"12px",opacity:.8,fontFamily:"Inter, sans-serif"},children:"Last 30 days vs previous period"})]}),renderTooltip:({step:m})=>(0,t.jsxs)("div",{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px",padding:"16px 20px",color:"white",fontFamily:"Inter, sans-serif",boxShadow:"0 8px 32px rgba(118, 75, 162, 0.3)",border:"none",minWidth:"200px"},children:[(0,t.jsx)("div",{style:{fontSize:"11px",fontWeight:"500",opacity:.8,textTransform:"uppercase",letterSpacing:"0.5px",margin:"0 0 8px 0"},children:m.label}),(0,t.jsxs)("div",{style:{fontSize:"18px",fontWeight:"bold",margin:"0",display:"flex",alignItems:"center",gap:"8px"},children:[m.rate.toFixed(1),"%",m.count&&(0,t.jsxs)("span",{style:{fontSize:"14px",fontWeight:"400",opacity:.9},children:["\u2022 ",m.count.toLocaleString()," items"]})]})]})},parameters:{docs:{description:{story:"Custom typography with renderMainMetric and renderTooltip showing a dashboard-style header and custom tooltip, both with gradient background, larger fonts, and enhanced styling compared to the default display."}}},decorators:[m=>(0,t.jsx)(m,{})]},K={args:{mainRate:10.3,changeIndicator:"+2%",steps:u.$w,renderMainMetric:()=>null,renderTooltip:()=>null},parameters:{docs:{description:{story:"Demonstrates disabling the main metric display and tooltips by returning null from renderMainMetric and renderTooltip render props."}}}},ve=["Default","NegativeChange","HighConversion","WithoutChangeIndicator","Loading","EmptyData","JetpackTheme","WooCommerceTheme","CustomRenderProps","WithoutTooltips"];I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...I.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...W.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: true
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 0,
    steps: [],
    loading: false
  }
}`,...V.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false
  },
  decorators: [Story => <ThemeProvider theme={jetpackTheme}>
                <Story />
            </ThemeProvider>]
}`,...G.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false
  },
  decorators: [Story => <ThemeProvider theme={wooTheme}>
                <Story />
            </ThemeProvider>]
}`,...U.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js":(S,v,o)=>{"use strict";o.d(v,{A:()=>R});var d=o("../../../node_modules/.pnpm/@visx+point@3.12.0/node_modules/@visx/point/esm/Point.js");function g(r){return!!r&&r instanceof Element}function u(r){return!!r&&(r instanceof SVGElement||"ownerSVGElement"in r)}function a(r){return!!r&&"createSVGPoint"in r}function c(r){return!!r&&"getScreenCTM"in r}function n(r){return!!r&&"changedTouches"in r}function i(r){return!!r&&"clientX"in r}function l(r){return!!r&&(r instanceof Event||"nativeEvent"in r&&r.nativeEvent instanceof Event)}function y(){return y=Object.assign?Object.assign.bind():function(r){for(var T=1;T<arguments.length;T++){var e=arguments[T];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(r[s]=e[s])}return r},y.apply(this,arguments)}var C={x:0,y:0};function _(r){if(!r)return y({},C);if(n(r))return r.changedTouches.length>0?{x:r.changedTouches[0].clientX,y:r.changedTouches[0].clientY}:y({},C);if(i(r))return{x:r.clientX,y:r.clientY};var T=r?.target,e=T&&"getBoundingClientRect"in T?T.getBoundingClientRect():null;return e?{x:e.x+e.width/2,y:e.y+e.height/2}:y({},C)}function E(r,T){if(!r||!T)return null;var e=_(T),s=u(r)?r.ownerSVGElement:r,t=c(s)?s.getScreenCTM():null;if(a(s)&&t){var f=s.createSVGPoint();return f.x=e.x,f.y=e.y,f=f.matrixTransform(t.inverse()),new d.A({x:f.x,y:f.y})}var h=r.getBoundingClientRect();return new d.A({x:e.x-h.left-r.clientLeft,y:e.y-h.top-r.clientTop})}function R(r,T){if(g(r)&&T)return E(r,T);if(l(r)){var e=r,s=e.target;if(s)return E(s,e)}return null}},"../../../node_modules/.pnpm/@visx+point@3.12.0/node_modules/@visx/point/esm/Point.js":(S,v,o)=>{"use strict";o.d(v,{A:()=>d});var d=function(){function g(a){var c=a.x,n=c===void 0?0:c,i=a.y,l=i===void 0?0:i;this.x=0,this.y=0,this.x=n,this.y=l}var u=g.prototype;return u.value=function(){return{x:this.x,y:this.y}},u.toArray=function(){return[this.x,this.y]},g}()},"../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js":(S,v,o)=>{"use strict";o.d(v,{A:()=>c});var d=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=["tooltipOpen"];function u(n,i){if(n==null)return{};var l={},y=Object.keys(n),C,_;for(_=0;_<y.length;_++)C=y[_],!(i.indexOf(C)>=0)&&(l[C]=n[C]);return l}function a(){return a=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var l=arguments[i];for(var y in l)Object.prototype.hasOwnProperty.call(l,y)&&(n[y]=l[y])}return n},a.apply(this,arguments)}function c(n){var i=(0,d.useState)(a({tooltipOpen:!1},n)),l=i[0],y=i[1],C=(0,d.useCallback)(function(E){return y(typeof E=="function"?function(R){var r=R.tooltipOpen,T=u(R,g);return a({},E(T),{tooltipOpen:!0})}:{tooltipOpen:!0,tooltipLeft:E.tooltipLeft,tooltipTop:E.tooltipTop,tooltipData:E.tooltipData})},[y]),_=(0,d.useCallback)(function(){return y({tooltipOpen:!1,tooltipLeft:void 0,tooltipTop:void 0,tooltipData:void 0})},[y]);return{tooltipOpen:l.tooltipOpen,tooltipLeft:l.tooltipLeft,tooltipTop:l.tooltipTop,tooltipData:l.tooltipData,updateTooltip:y,showTooltip:C,hideTooltip:_}}},"../charts/src/providers/chart-context/global-charts-provider.tsx":(S,v,o)=>{"use strict";o.d(v,{S:()=>c,m:()=>a});var d=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=o("../charts/src/providers/theme/themes.ts"),u=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a=(0,d.createContext)(null),c=({children:n,theme:i={}})=>{const[l,y]=(0,d.useState)(()=>new Map),C=(0,d.useMemo)(()=>({...g.zQ,...i}),[i]),_=(0,d.useRef)(new Map);(0,d.useEffect)(()=>{_.current=new Map},[C.colors]);const E=(0,d.useCallback)((s,t)=>{y(f=>new Map(f).set(s,t))},[]),R=(0,d.useCallback)(s=>{y(t=>{const f=new Map(t);return f.delete(s),f})},[]),r=(0,d.useCallback)(s=>l.get(s),[l]),T=(0,d.useCallback)(({group:s,index:t,overrideColor:f})=>{if(f)return f;const h=C.colors??[];if(s){const M=_.current.get(s);if(M)return M;const se=_.current.size,Q=h.length>0?h[se%h.length]:"#000000";return _.current.set(s,Q),Q}return h.length>0?h[(t||0)%h.length]:"#000000"},[C.colors]),e=(0,d.useMemo)(()=>({charts:l,registerChart:E,unregisterChart:R,getChartData:r,theme:C,resolveGroupColor:T}),[l,E,R,r,C,T]);return(0,u.jsx)(a.Provider,{value:e,children:n})};try{c.displayName="GlobalChartsProvider",c.__docgenInfo={description:"",displayName:"GlobalChartsProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional theme override. Considered static for provider lifecycle.",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"]={docgenInfo:c.__docgenInfo,name:"GlobalChartsProvider",path:"../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"})}catch{}},"../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts":(S,v,o)=>{"use strict";o.d(v,{p:()=>l});var d=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=o("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),u=o.n(g);function a(y,C){return u()(y,C,{arrayMerge:(_,E)=>E})}var c=o("../charts/src/providers/theme/theme-provider.tsx"),n=o("../charts/src/providers/theme/themes.ts"),i=o("../charts/src/providers/chart-context/global-charts-provider.tsx");const l=()=>{const C=(0,d.useContext)(i.m)?.theme,_=(0,c.R)();return(0,d.useMemo)(()=>a(C??n.zQ,_),[C,_])}},"../charts/src/providers/theme/theme-provider.tsx":(S,v,o)=>{"use strict";o.d(v,{N:()=>c,R:()=>a});var d=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u=(0,d.createContext)({}),a=()=>(0,d.useContext)(u),c=({theme:n={},children:i})=>(0,g.jsx)(u.Provider,{value:n,children:i});try{c.displayName="ThemeProvider",c.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:c.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{a.displayName="useChartTheme",a.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:a.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(S,v,o)=>{"use strict";o.d(v,{QI:()=>g,pk:()=>u,zQ:()=>d});const d={backgroundColor:"#FFFFFF",labelBackgroundColor:"transparent",labelTextColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#80C8FF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},g={backgroundColor:"#FFFFFF",labelBackgroundColor:"transparent",labelTextColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#006DAB",secondaryColor:"#98C8DF",deltaColors:["#FF8C8F","#757575","#1F9828"]},conversionFunnelChart:{primaryColor:"#006DAB",backgroundColor:"#F3F4F6",positiveChangeColor:"#1F9828",negativeChangeColor:"#FF8C8F"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},u={backgroundColor:"#FFFFFF",labelBackgroundColor:"transparent",labelTextColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"},annotationStyles:{label:{anchorLineStroke:"black",backgroundFill:"#fff"},connector:{stroke:"black"},circleSubject:{stroke:"transparent",fill:"black",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#80C8FF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeWidth:1.5,strokeLinecap:"square"}}}}},"../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js":(S,v)=>{var o,d;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var g={}.hasOwnProperty;function u(){for(var n="",i=0;i<arguments.length;i++){var l=arguments[i];l&&(n=c(n,a(l)))}return n}function a(n){if(typeof n=="string"||typeof n=="number")return n;if(typeof n!="object")return"";if(Array.isArray(n))return u.apply(null,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var i="";for(var l in n)g.call(n,l)&&n[l]&&(i=c(i,l));return i}function c(n,i){return i?n?n+" "+i:n+i:n}S.exports?(u.default=u,S.exports=u):(o=[],d=function(){return u}.apply(v,o),d!==void 0&&(S.exports=d))})()},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(S,v,o)=>{"use strict";o.d(v,{A:()=>u});function d(a){var c,n,i="";if(typeof a=="string"||typeof a=="number")i+=a;else if(typeof a=="object")if(Array.isArray(a)){var l=a.length;for(c=0;c<l;c++)a[c]&&(n=d(a[c]))&&(i&&(i+=" "),i+=n)}else for(n in a)a[n]&&(i&&(i+=" "),i+=n);return i}function g(){for(var a,c,n=0,i="",l=arguments.length;n<l;n++)(a=arguments[n])&&(c=d(a))&&(i&&(i+=" "),i+=c);return i}const u=g},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.module.scss":(S,v,o)=>{"use strict";o.d(v,{A:()=>n});var d=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=o.n(d),u=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=o.n(u),c=a()(g());c.push([S.id,'.I8mGoz_EtiIWZaoGS30E{font-family:var(--funnel-font-family, "SF Pro Text")}.I8mGoz_EtiIWZaoGS30E.Ob8tvy5eHghStcrCJWN9{opacity:.6;pointer-events:none}.wKbGFYQfIOfhmmYFLHSK{display:flex;align-items:baseline;gap:8px;margin-bottom:24px}.oY7oSTOv0O1OVE7Nwr7r{overflow:hidden;color:#1e1e1e;text-overflow:ellipsis;font-family:var(--funnel-font-family, "SF Pro Text");font-size:18px;font-style:normal;font-weight:500;line-height:20px;margin:0}.g5eftU7LwDzx_CwgrYz5{overflow:hidden;color:var(--change-indicator-color, #008a20);text-overflow:ellipsis;font-family:var(--funnel-font-family, "SF Pro Text");font-size:13px;font-style:normal;font-weight:500;line-height:20px;margin:0}.IZ7aZvTDxof7mJ6gicwQ{display:flex;gap:16px;align-items:flex-end;height:200px;width:100%}.pR7TosSoLpSVwLTN8nAn{flex:1 1 0;min-width:0;display:flex;flex-direction:column;height:100%;transition:all .3s ease}.pR7TosSoLpSVwLTN8nAn.HY_Ypub6UryoV4Z52Fgg{opacity:.3}.DveAm765BEke10Kf4yvu{margin-bottom:24px}.Yeb2mq3ZeOYLdNHbM8O3{color:#757575;font-family:var(--step-font-family, "SF Pro");font-size:12px;font-style:normal;font-weight:400;line-height:16px;margin:0 0 2px 0;display:block;overflow:hidden;text-overflow:ellipsis}.ZUUjFGTjmZSNG6YFOo5c{color:#1e1e1e;font-family:var(--step-font-family, "SF Pro");font-size:13px;font-style:normal;font-weight:500;line-height:20px;margin:0;display:block}.d4wNKrRPvcARkiBpSPTn{flex:1;display:flex;align-items:flex-end;background-color:var(--light-background-color, rgba(79, 70, 229, 0.08));border-radius:4px;position:relative;cursor:pointer;transition:all .2s ease}.d4wNKrRPvcARkiBpSPTn._AsHQhUE_HUVQsd4tEFP{background-color:var(--light-background-color, rgba(79, 70, 229, 0.15))}.d4wNKrRPvcARkiBpSPTn.jIqdqNePu7F4gG7xFLHI{cursor:pointer}.mzNMNSGEaQ4x8cSdybFr{width:100%;min-height:4px;border-radius:4px 4px 0 0;transition:all .3s ease;background-color:var(--primary-color, #4f46e5)}.mzNMNSGEaQ4x8cSdybFr._AsHQhUE_HUVQsd4tEFP{box-shadow:0 4px 16px rgba(0,0,0,.2);filter:brightness(1.1)}.O5BsuL6i14EMWlko19Y0{display:inline-flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:4px;border-bottom:1px solid var(--Gray-Gray-5, #dcdcde);background:var(--black-white-white, #fff);border-radius:4px !important;padding:12px !important;box-shadow:0 1px 3px 0 rgba(0,0,0,.15),0 3px 9px 0 rgba(0,0,0,.12) !important}.j6cWoywD6KBtUocSpOXB{color:#1e1e1e;font-family:"SF Pro",sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:16px}.V270MDRAbjhmCL4nVFTG{color:#1e1e1e;font-family:"SF Pro",sans-serif;font-size:13px;font-style:normal;font-weight:500;line-height:20px}.IC2AzG5eUxmMyt131MAU{text-align:center;padding:48px 24px;color:#6b7280;font-size:16px}',""]),c.locals={conversionFunnelChart:"I8mGoz_EtiIWZaoGS30E",loading:"Ob8tvy5eHghStcrCJWN9","main-metric":"wKbGFYQfIOfhmmYFLHSK","main-rate":"oY7oSTOv0O1OVE7Nwr7r","change-indicator":"g5eftU7LwDzx_CwgrYz5","funnel-container":"IZ7aZvTDxof7mJ6gicwQ","funnel-step":"pR7TosSoLpSVwLTN8nAn",blurred:"HY_Ypub6UryoV4Z52Fgg","step-header":"DveAm765BEke10Kf4yvu","step-label":"Yeb2mq3ZeOYLdNHbM8O3","step-rate":"ZUUjFGTjmZSNG6YFOo5c","bar-container":"d4wNKrRPvcARkiBpSPTn",selected:"_AsHQhUE_HUVQsd4tEFP",disabled:"jIqdqNePu7F4gG7xFLHI","funnel-bar":"mzNMNSGEaQ4x8cSdybFr","tooltip-wrapper":"O5BsuL6i14EMWlko19Y0","tooltip-title":"j6cWoywD6KBtUocSpOXB","tooltip-content":"V270MDRAbjhmCL4nVFTG","empty-state":"IC2AzG5eUxmMyt131MAU"};const n=c},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":S=>{"use strict";var v=function(s){return o(s)&&!d(s)};function o(e){return!!e&&typeof e=="object"}function d(e){var s=Object.prototype.toString.call(e);return s==="[object RegExp]"||s==="[object Date]"||a(e)}var g=typeof Symbol=="function"&&Symbol.for,u=g?Symbol.for("react.element"):60103;function a(e){return e.$$typeof===u}function c(e){return Array.isArray(e)?[]:{}}function n(e,s){return s.clone!==!1&&s.isMergeableObject(e)?r(c(e),e,s):e}function i(e,s,t){return e.concat(s).map(function(f){return n(f,t)})}function l(e,s){if(!s.customMerge)return r;var t=s.customMerge(e);return typeof t=="function"?t:r}function y(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(s){return Object.propertyIsEnumerable.call(e,s)}):[]}function C(e){return Object.keys(e).concat(y(e))}function _(e,s){try{return s in e}catch{return!1}}function E(e,s){return _(e,s)&&!(Object.hasOwnProperty.call(e,s)&&Object.propertyIsEnumerable.call(e,s))}function R(e,s,t){var f={};return t.isMergeableObject(e)&&C(e).forEach(function(h){f[h]=n(e[h],t)}),C(s).forEach(function(h){E(e,h)||(_(e,h)&&t.isMergeableObject(s[h])?f[h]=l(h,t)(e[h],s[h],t):f[h]=n(s[h],t))}),f}function r(e,s,t){t=t||{},t.arrayMerge=t.arrayMerge||i,t.isMergeableObject=t.isMergeableObject||v,t.cloneUnlessOtherwiseSpecified=n;var f=Array.isArray(s),h=Array.isArray(e),M=f===h;return M?f?t.arrayMerge(e,s,t):R(e,s,t):n(s,t)}r.all=function(s,t){if(!Array.isArray(s))throw new Error("first argument should be an array");return s.reduce(function(f,h){return r(f,h,t)},{})};var T=r;S.exports=T},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js":(S,v,o)=>{"use strict";var d=o("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function g(){}function u(){}u.resetWarningCache=g,S.exports=function(){function a(i,l,y,C,_,E){if(E!==d){var R=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw R.name="Invariant Violation",R}}a.isRequired=a;function c(){return a}var n={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:c,element:a,elementType:a,instanceOf:c,node:a,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:u,resetWarningCache:g};return n.PropTypes=n,n}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":(S,v,o)=>{if(0)var d,g;else S.exports=o("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":S=>{"use strict";var v="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";S.exports=v}}]);
