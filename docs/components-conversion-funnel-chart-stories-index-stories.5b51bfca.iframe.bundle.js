"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[201],{"../charts/src/components/conversion-funnel-chart/stories/index.stories.tsx":(T,g,e)=>{e.r(g),e.d(g,{CustomRenderProps:()=>K,Default:()=>D,EmptyData:()=>w,HighConversion:()=>j,Loading:()=>P,NegativeChange:()=>B,WithoutChangeIndicator:()=>M,WithoutTooltips:()=>W,__namedExportsOrder:()=>_e,default:()=>fe});var a=e("../charts/src/stories/chart-decorator.tsx"),h=e("../charts/src/stories/theme-config.tsx"),s=e("../charts/src/stories/sample-data/index.ts"),p=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),t=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),f=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),u=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),S=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts");const y=(i,d)=>{if(typeof i!="string")throw new Error("Hex color must be a string");if(!i.startsWith("#"))throw new Error("Hex color must start with #");if(i.length!==7)throw new Error("Hex color must be 7 characters long (e.g., #ff0000)");const _=i.slice(1);if(!/^[0-9a-fA-F]{6}$/.test(_))throw new Error("Hex color contains invalid characters. Only 0-9, a-f, A-F are allowed");if(typeof d!="number"||isNaN(d))throw new Error("Alpha must be a number");const k=parseInt(i.slice(1,3),16),I=parseInt(i.slice(3,5),16),Y=parseInt(i.slice(5,7),16);return`rgba(${k}, ${I}, ${Y}, ${d})`};var x=e("../charts/src/utils/format-percentage.ts"),A=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),V=e.n(A),N=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.module.scss"),L={};L.insert="head",L.singleton=!1;var oe=V()(N.A,L);const n=N.A.locals||{},O=i=>{const[d,_]=(0,c.useState)(null),k=(0,c.useCallback)(b=>{d===b?(_(null),i?.()):_(b)},[d,i]),I=(0,c.useCallback)((b,R)=>{R.key==="Enter"||R.key===" "?(R.preventDefault(),d===b?(_(null),i?.()):_(b)):R.key==="Escape"&&(R.preventDefault(),_(null),i?.())},[d,i]),Y=(0,c.useCallback)(()=>{_(null),i?.()},[i]),G=(0,c.useCallback)(b=>({isClicked:d===b,isBlurred:d!==null&&d!==b}),[d]);return{clickedStep:d,handleBarClick:k,handleBarKeyDown:I,clearSelection:Y,getStepState:G}};var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const v={primaryColor:"#4F46E5",backgroundColor:"#F3F4F6",positiveChangeColor:"#10B981",negativeChangeColor:"#EF4444"},F=({mainRate:i,changeIndicator:d,steps:_,loading:k=!1,className:I,style:Y,renderStepLabel:G,renderStepRate:b,renderMainMetric:R,renderTooltip:ae})=>{const ye=(0,S.p)(),Z=(0,c.useRef)(null),z=(0,c.useRef)(null),{tooltipData:U,tooltipLeft:se,tooltipTop:ie,tooltipOpen:Ce,showTooltip:ce,hideTooltip:$}=(0,t.A)(),{handleBarClick:J,handleBarKeyDown:H,clearSelection:le,getStepState:X}=O($),{containerRef:Se,TooltipInPortal:xe}=(0,f.A)({detectBounds:!0,scroll:!0}),de=(0,c.useCallback)(()=>{le(),z.current=null,$()},[le,$]),q=(0,c.useCallback)((r,l,C)=>{ce({tooltipData:r,tooltipLeft:l,tooltipTop:C-10})},[ce]),pe=(0,c.useCallback)(r=>{const l=Z.current;if(l){const C=(0,p.A)(l,r.nativeEvent);if(C)return{x:C.x,y:C.y}}return null},[]),me=(0,c.useCallback)(r=>{const l=r.currentTarget.getBoundingClientRect(),C=Z.current;if(C){const E=C.getBoundingClientRect(),m=l.left+l.width/2-E.left,Oe=l.top-E.top;return{x:m,y:Oe}}return null},[]),ee=(0,c.useCallback)((r,l,C)=>{z.current=l.currentTarget;const{isClicked:E}=X(r.id);if(E){C==="click"?J(r.id):H(r.id,l);return}if(C==="click"){J(r.id);const m=pe(l);m&&q(r,m.x,m.y)}else{H(r.id,l);const m=me(l);m&&q(r,m.x,m.y)}},[X,J,H,q,pe,me]),he=(0,c.useMemo)(()=>{const r=new Map;return _.forEach(l=>{const C=m=>{m.stopPropagation(),ee(l,m,"click")},E=m=>{m.key==="Enter"||m.key===" "?ee(l,m,"keyboard"):(z.current=m.currentTarget,H(l.id,m))};r.set(l.id,{onClick:C,onKeyDown:E})}),r},[_,ee,H]);(0,c.useEffect)(()=>{const r=l=>{z.current&&!z.current.contains(l.target)&&de()};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[de]);const te=ye.conversionFunnelChart,re=te?.primaryColor||v.primaryColor,be=te?.positiveChangeColor||v.positiveChangeColor,ve=te?.negativeChangeColor||v.negativeChangeColor,ue=d?.startsWith("+")?be:ve,Te=y(re,.08),ge={"--primary-color":re,"--light-background-color":Te,"--change-indicator-color":ue,...Y},Ee=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:n["main-rate"],children:(0,x.E)(i)}),d&&(0,o.jsx)("span",{className:n["change-indicator"],children:d})]}),Re=r=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:n["tooltip-title"],children:r.label}),(0,o.jsxs)("div",{className:n["tooltip-content"],children:[(0,x.E)(r.rate),r.count&&` \u2022 ${r.count.toLocaleString()} items`]})]});if(!_||_.length===0)return(0,o.jsx)("div",{className:(0,u.A)(n.conversionFunnelChart,k&&n.loading,I),style:ge,children:(0,o.jsx)("div",{className:n["empty-state"],children:k?"Loading...":"No data available"})});const Ae=Math.max(..._.map(r=>r.rate));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{ref:r=>{Se(r),Z.current=r},className:(0,u.A)(n.conversionFunnelChart,k&&n.loading,I),style:ge,children:[R?R({mainRate:i,changeIndicator:d,className:n["main-metric"],changeColor:ue}):(0,o.jsx)("div",{className:n["main-metric"],children:Ee()}),(0,o.jsx)("div",{className:n["funnel-container"],children:_.map((r,l)=>{const C=r.rate/Ae*100,{isClicked:E,isBlurred:m}=X(r.id);return(0,o.jsxs)("div",{className:(0,u.A)(n["funnel-step"],m&&n.blurred),children:[(0,o.jsxs)("div",{className:n["step-header"],children:[G?G({step:r,index:l,className:n["step-label"]}):(0,o.jsx)("span",{className:n["step-label"],children:r.label}),b?b({step:r,index:l,className:n["step-rate"]}):(0,o.jsx)("span",{className:n["step-rate"],children:(0,x.E)(r.rate)})]}),(0,o.jsx)("div",{className:(0,u.A)(n["bar-container"],E&&n.selected,m&&n.disabled),onClick:he.get(r.id)?.onClick,onKeyDown:he.get(r.id)?.onKeyDown,role:"button",tabIndex:m?-1:0,"aria-label":r.label,children:(0,o.jsx)("div",{className:(0,u.A)(n["funnel-bar"],E&&n.selected),style:{height:`${C}%`,backgroundColor:re}})})]},r.id)})})]}),Ce&&U&&(()=>{const r=ae?ae({step:U,index:_.findIndex(l=>l.id===U.id),top:ie,left:se,className:n["tooltip-wrapper"]}):Re(U);return r?(0,o.jsx)(xe,{top:ie,left:se,className:n["tooltip-wrapper"],children:r},Math.random()):null})()]})},ne=null;try{F.displayName="ConversionFunnelChart",F.__docgenInfo={description:"ConversionFunnelChart component displays a conversion funnel with main metric and visualization",displayName:"ConversionFunnelChart",props:{mainRate:{defaultValue:null,description:"Main conversion rate to highlight",name:"mainRate",required:!0,type:{name:"number"}},changeIndicator:{defaultValue:null,description:"Change indicator (e.g., +2%, -1.5%)",name:"changeIndicator",required:!1,type:{name:"string"}},steps:{defaultValue:null,description:"Array of funnel steps",name:"steps",required:!0,type:{name:"FunnelStep[]"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling",name:"style",required:!1,type:{name:"CSSProperties"}},renderStepLabel:{defaultValue:null,description:"Custom render function for step labels",name:"renderStepLabel",required:!1,type:{name:"(props: StepLabelRenderProps) => ReactNode"}},renderStepRate:{defaultValue:null,description:"Custom render function for step rates",name:"renderStepRate",required:!1,type:{name:"(props: StepRateRenderProps) => ReactNode"}},renderMainMetric:{defaultValue:null,description:"Custom render function for the entire main metric section",name:"renderMainMetric",required:!1,type:{name:"(props: MainMetricRenderProps) => ReactNode"}},renderTooltip:{defaultValue:null,description:"Custom render function for tooltip content",name:"renderTooltip",required:!1,type:{name:"(props: TooltipRenderProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#ConversionFunnelChart"]={docgenInfo:F.__docgenInfo,name:"ConversionFunnelChart",path:"../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#ConversionFunnelChart"})}catch{}try{conversionfunnelchart.displayName="conversionfunnelchart",conversionfunnelchart.__docgenInfo={description:"ConversionFunnelChart component displays a conversion funnel with main metric and visualization",displayName:"conversionfunnelchart",props:{mainRate:{defaultValue:null,description:"Main conversion rate to highlight",name:"mainRate",required:!0,type:{name:"number"}},changeIndicator:{defaultValue:null,description:"Change indicator (e.g., +2%, -1.5%)",name:"changeIndicator",required:!1,type:{name:"string"}},steps:{defaultValue:null,description:"Array of funnel steps",name:"steps",required:!0,type:{name:"FunnelStep[]"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling",name:"style",required:!1,type:{name:"CSSProperties"}},renderStepLabel:{defaultValue:null,description:"Custom render function for step labels",name:"renderStepLabel",required:!1,type:{name:"(props: StepLabelRenderProps) => ReactNode"}},renderStepRate:{defaultValue:null,description:"Custom render function for step rates",name:"renderStepRate",required:!1,type:{name:"(props: StepRateRenderProps) => ReactNode"}},renderMainMetric:{defaultValue:null,description:"Custom render function for the entire main metric section",name:"renderMainMetric",required:!1,type:{name:"(props: MainMetricRenderProps) => ReactNode"}},renderTooltip:{defaultValue:null,description:"Custom render function for tooltip content",name:"renderTooltip",required:!1,type:{name:"(props: TooltipRenderProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"]={docgenInfo:conversionfunnelchart.__docgenInfo,name:"conversionfunnelchart",path:"../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"})}catch{}const fe={title:"JS Packages/Charts/Types/Conversion Funnel Chart",component:F,parameters:{layout:"centered",docs:{description:{component:`
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
                `}}},tags:["autodocs"],argTypes:{mainRate:{control:{type:"number",min:0,max:100,step:.1},description:"Main conversion rate to highlight",table:{type:{summary:"number"}}},changeIndicator:{control:"text",description:"Change indicator (e.g., +2%, -1.5%)",table:{type:{summary:"string"}}},steps:{control:"object",description:"Array of funnel steps",table:{type:{summary:"FunnelStep[]"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}},...a.xo,...h.jW},decorators:[a.OI]},D={args:{mainRate:10.3,changeIndicator:"+2%",steps:s.$w,loading:!1}},B={args:{mainRate:8.7,changeIndicator:"-1.6%",steps:s.Ro,loading:!1}},j={args:{mainRate:18.7,changeIndicator:"+5.2%",steps:s.hk,loading:!1}},M={args:{mainRate:10.3,steps:s.$w,loading:!1}},P={args:{mainRate:10.3,changeIndicator:"+2%",steps:s.$w,loading:!0}},w={args:{mainRate:0,steps:[],loading:!1}},K={args:{mainRate:10.3,changeIndicator:"+2%",steps:s.$w,style:{"--primary-color":"#4F46E5","--light-background-color":"rgba(79, 70, 229, 0.08)","--step-font-family":"Roboto, sans-serif"},renderMainMetric:({mainRate:i,changeIndicator:d,className:_})=>(0,o.jsxs)("div",{className:_,style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px",padding:"24px",marginBottom:"32px",color:"white",textAlign:"center"},children:[(0,o.jsx)("h3",{style:{margin:"0 0 12px 0",fontSize:"14px",fontWeight:"500",opacity:.9,textTransform:"uppercase",letterSpacing:"0.5px"},children:"Overall Conversion Rate"}),(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"16px"},children:[(0,o.jsxs)("span",{style:{fontSize:"42px",fontWeight:"bold",fontFamily:"Inter, sans-serif",lineHeight:1},children:[i.toFixed(1),"%"]}),d&&(0,o.jsx)("span",{style:{fontSize:"16px",fontWeight:"600",fontFamily:"Inter, sans-serif",backgroundColor:d.startsWith("+")?"rgba(16, 185, 129, 0.2)":"rgba(239, 68, 68, 0.2)",color:d.startsWith("+")?"#10b981":"#ef4444",padding:"6px 12px",borderRadius:"8px",border:`1px solid ${d.startsWith("+")?"#10b981":"#ef4444"}`},children:d})]}),(0,o.jsx)("p",{style:{margin:"12px 0 0 0",fontSize:"12px",opacity:.8,fontFamily:"Inter, sans-serif"},children:"Last 30 days vs previous period"})]}),renderTooltip:({step:i})=>(0,o.jsxs)("div",{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px",padding:"16px 20px",color:"white",fontFamily:"Inter, sans-serif",boxShadow:"0 8px 32px rgba(118, 75, 162, 0.3)",border:"none",minWidth:"200px"},children:[(0,o.jsx)("div",{style:{fontSize:"11px",fontWeight:"500",opacity:.8,textTransform:"uppercase",letterSpacing:"0.5px",margin:"0 0 8px 0"},children:i.label}),(0,o.jsxs)("div",{style:{fontSize:"18px",fontWeight:"bold",margin:"0",display:"flex",alignItems:"center",gap:"8px"},children:[i.rate.toFixed(1),"%",i.count&&(0,o.jsxs)("span",{style:{fontSize:"14px",fontWeight:"400",opacity:.9},children:["\u2022 ",i.count.toLocaleString()," items"]})]})]})},parameters:{docs:{description:{story:"Custom typography with renderMainMetric and renderTooltip showing a dashboard-style header and custom tooltip, both with gradient background, larger fonts, and enhanced styling compared to the default display."}}},decorators:[i=>(0,o.jsx)(i,{})]},W={args:{mainRate:10.3,changeIndicator:"+2%",steps:s.$w,renderMainMetric:()=>null,renderTooltip:()=>null},parameters:{docs:{description:{story:"Demonstrates disabling the main metric display and tooltips by returning null from renderMainMetric and renderTooltip render props."}}}},_e=["Default","NegativeChange","HighConversion","WithoutChangeIndicator","Loading","EmptyData","CustomRenderProps","WithoutTooltips"];D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...D.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 8.7,
    changeIndicator: '-1.6%',
    steps: lowConversionFunnelData,
    loading: false
  }
}`,...B.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 18.7,
    changeIndicator: '+5.2%',
    steps: highConversionFunnelData,
    loading: false
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: true
  }
}`,...P.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}}},"../charts/src/providers/chart-context/global-charts-provider.tsx":(T,g,e)=>{e.d(g,{S:()=>t,m:()=>p});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=e("../charts/src/providers/theme/themes.ts"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const p=(0,a.createContext)(null),t=({children:f,theme:u={}})=>{const[c,S]=(0,a.useState)(()=>new Map),y=(0,a.useMemo)(()=>({...h.zQ,...u}),[u]),x=(0,a.useRef)(new Map);(0,a.useEffect)(()=>{x.current=new Map},[y.colors]);const A=(0,a.useCallback)((n,O)=>{S(o=>new Map(o).set(n,O))},[]),V=(0,a.useCallback)(n=>{S(O=>{const o=new Map(O);return o.delete(n),o})},[]),N=(0,a.useCallback)(n=>c.get(n),[c]),L=(0,a.useCallback)(({group:n,index:O,overrideColor:o})=>{if(o)return o;const v=y.colors??[];if(n){const F=x.current.get(n);if(F)return F;const ne=x.current.size,Q=v.length>0?v[ne%v.length]:"#000000";return x.current.set(n,Q),Q}return v.length>0?v[(O||0)%v.length]:"#000000"},[y.colors]),oe=(0,a.useMemo)(()=>({charts:c,registerChart:A,unregisterChart:V,getChartData:N,theme:y,resolveGroupColor:L}),[c,A,V,N,y,L]);return(0,s.jsx)(p.Provider,{value:oe,children:f})};try{t.displayName="GlobalChartsProvider",t.__docgenInfo={description:"",displayName:"GlobalChartsProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional theme override. Considered static for provider lifecycle.",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"]={docgenInfo:t.__docgenInfo,name:"GlobalChartsProvider",path:"../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"})}catch{}},"../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts":(T,g,e)=>{e.d(g,{p:()=>c});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=e("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),s=e.n(h);function p(S,y){return s()(S,y,{arrayMerge:(x,A)=>A})}var t=e("../charts/src/providers/theme/theme-provider.tsx"),f=e("../charts/src/providers/theme/themes.ts"),u=e("../charts/src/providers/chart-context/global-charts-provider.tsx");const c=()=>{const y=(0,a.useContext)(u.m)?.theme,x=(0,t.R)();return(0,a.useMemo)(()=>p(y??f.zQ,x),[y,x])}},"../charts/src/providers/theme/theme-provider.tsx":(T,g,e)=>{e.d(g,{N:()=>t,R:()=>p});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=(0,a.createContext)({}),p=()=>(0,a.useContext)(s),t=({theme:f={},children:u})=>(0,h.jsx)(s.Provider,{value:f,children:u});try{t.displayName="ThemeProvider",t.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:t.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{p.displayName="useChartTheme",p.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:p.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(T,g,e)=>{e.d(g,{QI:()=>h,pk:()=>s,zQ:()=>a});const a={backgroundColor:"#FFFFFF",labelBackgroundColor:"transparent",labelTextColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#80C8FF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},h={backgroundColor:"#FFFFFF",labelBackgroundColor:"transparent",labelTextColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#006DAB",secondaryColor:"#98C8DF",deltaColors:["#FF8C8F","#757575","#1F9828"]},conversionFunnelChart:{primaryColor:"#006DAB",backgroundColor:"#F3F4F6",positiveChangeColor:"#1F9828",negativeChangeColor:"#FF8C8F"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},s={backgroundColor:"#FFFFFF",labelBackgroundColor:"transparent",labelTextColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"},annotationStyles:{label:{anchorLineStroke:"black",backgroundFill:"#fff"},connector:{stroke:"black"},circleSubject:{stroke:"transparent",fill:"black",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#80C8FF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeWidth:1.5,strokeLinecap:"square"}}}}},"../charts/src/stories/chart-decorator.tsx":(T,g,e)=>{e.d(g,{OI:()=>p,cg:()=>t,xo:()=>f});var a=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),h=e("../charts/src/stories/theme-config.tsx"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const p=(u,c)=>{const S=c.args;return t(()=>(0,s.jsx)("div",{style:{resize:S.resize||"both",overflow:"auto",padding:"1rem",width:S.containerWidth||"800px",height:S.containerHeight,maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,s.jsx)(u,{})}),c)},t=(u,{args:c})=>{const S=c.themeName,y=h.yI[S||"default"];return(0,s.jsx)(a.S,{theme:y,children:(0,s.jsx)(u,{})})},f={maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}},containerWidth:{control:{type:"text"},description:'CSS width value for the chart container (e.g., "400px", "100%")'},containerHeight:{control:{type:"text"},description:'CSS height value for the chart container (e.g., "400px", "100%")'},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"],description:"Resize behavior for the chart container"}};try{p.displayName="chartDecorator",p.__docgenInfo={description:`Shared decorator for chart stories with GlobalChartsProvider and dynamic theme support
Provides a resizable container for testing responsive behavior
Composes with simpleChartDecorator to add container styling
Supports configurable container dimensions via containerWidth/containerHeight args`,displayName:"chartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#chartDecorator"]={docgenInfo:p.__docgenInfo,name:"chartDecorator",path:"../charts/src/stories/chart-decorator.tsx#chartDecorator"})}catch{}try{t.displayName="simpleChartDecorator",t.__docgenInfo={description:`Simple decorator for chart context stories with GlobalChartsProvider but no container styling
Used for stories that display multiple charts in custom layouts`,displayName:"simpleChartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"]={docgenInfo:t.__docgenInfo,name:"simpleChartDecorator",path:"../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"})}catch{}try{f.displayName="sharedChartArgTypes",f.__docgenInfo={description:"Shared argTypes for common chart controls",displayName:"sharedChartArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"]={docgenInfo:f.__docgenInfo,name:"sharedChartArgTypes",path:"../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"})}catch{}},"../charts/src/stories/theme-config.tsx":(T,g,e)=>{e.d(g,{jW:()=>p,yI:()=>s});var a=e("../charts/src/providers/theme/themes.ts");const h={colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],seriesLineStyles:[{strokeWidth:1,strokeDasharray:"8 8",strokeLinecap:"square"},{strokeDasharray:"5 8",strokeWidth:2,strokeLinecap:"square"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},s={default:a.zQ,jetpack:a.QI,woo:a.pk,custom:h},p={themeName:{control:{type:"select"},options:["default","jetpack","woo","custom"],defaultValue:"default",description:"Select a theme to apply to the chart",table:{category:"Theme"}}};try{h.displayName="customTheme",h.__docgenInfo={description:"Custom theme with earth tones and dashed line styles for demonstration",displayName:"customTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#customTheme"]={docgenInfo:h.__docgenInfo,name:"customTheme",path:"../charts/src/stories/theme-config.tsx#customTheme"})}catch{}try{backgroundColor.displayName="backgroundColor",backgroundColor.__docgenInfo={description:"Background color for chart components",displayName:"backgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#backgroundColor"]={docgenInfo:backgroundColor.__docgenInfo,name:"backgroundColor",path:"../charts/src/stories/theme-config.tsx#backgroundColor"})}catch{}try{labelBackgroundColor.displayName="labelBackgroundColor",labelBackgroundColor.__docgenInfo={description:"Background color for labels",displayName:"labelBackgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelBackgroundColor"]={docgenInfo:labelBackgroundColor.__docgenInfo,name:"labelBackgroundColor",path:"../charts/src/stories/theme-config.tsx#labelBackgroundColor"})}catch{}try{labelTextColor.displayName="labelTextColor",labelTextColor.__docgenInfo={description:"Text color for labels",displayName:"labelTextColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelTextColor"]={docgenInfo:labelTextColor.__docgenInfo,name:"labelTextColor",path:"../charts/src/stories/theme-config.tsx#labelTextColor"})}catch{}try{colors.displayName="colors",colors.__docgenInfo={description:"Array of colors used for data visualization",displayName:"colors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#colors"]={docgenInfo:colors.__docgenInfo,name:"colors",path:"../charts/src/stories/theme-config.tsx#colors"})}catch{}try{gridStyles.displayName="gridStyles",gridStyles.__docgenInfo={description:"Optional CSS styles for grid lines",displayName:"gridStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridStyles"]={docgenInfo:gridStyles.__docgenInfo,name:"gridStyles",path:"../charts/src/stories/theme-config.tsx#gridStyles"})}catch{}try{tickLength.displayName="tickLength",tickLength.__docgenInfo={description:"Length of axis ticks in pixels",displayName:"tickLength",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#tickLength"]={docgenInfo:tickLength.__docgenInfo,name:"tickLength",path:"../charts/src/stories/theme-config.tsx#tickLength"})}catch{}try{gridColor.displayName="gridColor",gridColor.__docgenInfo={description:"Color of the grid lines",displayName:"gridColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColor"]={docgenInfo:gridColor.__docgenInfo,name:"gridColor",path:"../charts/src/stories/theme-config.tsx#gridColor"})}catch{}try{gridColorDark.displayName="gridColorDark",gridColorDark.__docgenInfo={description:"Color of the grid lines in dark mode",displayName:"gridColorDark",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColorDark"]={docgenInfo:gridColorDark.__docgenInfo,name:"gridColorDark",path:"../charts/src/stories/theme-config.tsx#gridColorDark"})}catch{}try{xTickLineStyles.displayName="xTickLineStyles",xTickLineStyles.__docgenInfo={description:"Styles for x-axis tick lines",displayName:"xTickLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xTickLineStyles"]={docgenInfo:xTickLineStyles.__docgenInfo,name:"xTickLineStyles",path:"../charts/src/stories/theme-config.tsx#xTickLineStyles"})}catch{}try{xAxisLineStyles.displayName="xAxisLineStyles",xAxisLineStyles.__docgenInfo={description:"Styles for x-axis line",displayName:"xAxisLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xAxisLineStyles"]={docgenInfo:xAxisLineStyles.__docgenInfo,name:"xAxisLineStyles",path:"../charts/src/stories/theme-config.tsx#xAxisLineStyles"})}catch{}try{seriesLineStyles.displayName="seriesLineStyles",seriesLineStyles.__docgenInfo={description:"Styles for series lines",displayName:"seriesLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#seriesLineStyles"]={docgenInfo:seriesLineStyles.__docgenInfo,name:"seriesLineStyles",path:"../charts/src/stories/theme-config.tsx#seriesLineStyles"})}catch{}try{legendShapeStyles.displayName="legendShapeStyles",legendShapeStyles.__docgenInfo={description:"Styles for legend shapes",displayName:"legendShapeStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendShapeStyles"]={docgenInfo:legendShapeStyles.__docgenInfo,name:"legendShapeStyles",path:"../charts/src/stories/theme-config.tsx#legendShapeStyles"})}catch{}try{glyphs.displayName="glyphs",glyphs.__docgenInfo={description:"Array of render functions for glyphs",displayName:"glyphs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#glyphs"]={docgenInfo:glyphs.__docgenInfo,name:"glyphs",path:"../charts/src/stories/theme-config.tsx#glyphs"})}catch{}try{legendLabelStyles.displayName="legendLabelStyles",legendLabelStyles.__docgenInfo={description:"Styles for legend labels",displayName:"legendLabelStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendLabelStyles"]={docgenInfo:legendLabelStyles.__docgenInfo,name:"legendLabelStyles",path:"../charts/src/stories/theme-config.tsx#legendLabelStyles"})}catch{}try{legendContainerStyles.displayName="legendContainerStyles",legendContainerStyles.__docgenInfo={description:"Styles for legend container",displayName:"legendContainerStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendContainerStyles"]={docgenInfo:legendContainerStyles.__docgenInfo,name:"legendContainerStyles",path:"../charts/src/stories/theme-config.tsx#legendContainerStyles"})}catch{}try{leaderboardChart.displayName="leaderboardChart",leaderboardChart.__docgenInfo={description:"LeaderboardChart specific settings",displayName:"leaderboardChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#leaderboardChart"]={docgenInfo:leaderboardChart.__docgenInfo,name:"leaderboardChart",path:"../charts/src/stories/theme-config.tsx#leaderboardChart"})}catch{}try{conversionFunnelChart.displayName="conversionFunnelChart",conversionFunnelChart.__docgenInfo={description:"ConversionFunnelChart specific settings",displayName:"conversionFunnelChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#conversionFunnelChart"]={docgenInfo:conversionFunnelChart.__docgenInfo,name:"conversionFunnelChart",path:"../charts/src/stories/theme-config.tsx#conversionFunnelChart"})}catch{}try{s.displayName="CHART_THEME_MAP",s.__docgenInfo={description:"Centralized theme map for all chart stories",displayName:"CHART_THEME_MAP",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"]={docgenInfo:s.__docgenInfo,name:"CHART_THEME_MAP",path:"../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"})}catch{}try{p.displayName="themeArgTypes",p.__docgenInfo={description:"Shared argTypes for theme control",displayName:"themeArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#themeArgTypes"]={docgenInfo:p.__docgenInfo,name:"themeArgTypes",path:"../charts/src/stories/theme-config.tsx#themeArgTypes"})}catch{}},"../charts/src/utils/format-percentage.ts":(T,g,e)=>{e.d(g,{E:()=>h});var a=e("../number-formatters/src/index.ts");const h=s=>(0,a.ZV)(s/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.module.scss":(T,g,e)=>{e.d(g,{A:()=>f});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),h=e.n(a),s=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),p=e.n(s),t=p()(h());t.push([T.id,'.I8mGoz_EtiIWZaoGS30E{font-family:var(--funnel-font-family, "SF Pro Text")}.I8mGoz_EtiIWZaoGS30E.Ob8tvy5eHghStcrCJWN9{opacity:.6;pointer-events:none}.wKbGFYQfIOfhmmYFLHSK{display:flex;align-items:baseline;gap:8px;margin-bottom:24px}.oY7oSTOv0O1OVE7Nwr7r{overflow:hidden;color:#1e1e1e;text-overflow:ellipsis;font-family:var(--funnel-font-family, "SF Pro Text");font-size:18px;font-style:normal;font-weight:500;line-height:20px;margin:0}.g5eftU7LwDzx_CwgrYz5{overflow:hidden;color:var(--change-indicator-color, #008a20);text-overflow:ellipsis;font-family:var(--funnel-font-family, "SF Pro Text");font-size:13px;font-style:normal;font-weight:500;line-height:20px;margin:0}.IZ7aZvTDxof7mJ6gicwQ{display:flex;gap:16px;align-items:flex-end;height:200px;width:100%}.pR7TosSoLpSVwLTN8nAn{flex:1 1 0;min-width:0;display:flex;flex-direction:column;height:100%;transition:all .3s ease}.pR7TosSoLpSVwLTN8nAn.HY_Ypub6UryoV4Z52Fgg{opacity:.3}.DveAm765BEke10Kf4yvu{margin-bottom:24px}.Yeb2mq3ZeOYLdNHbM8O3{color:#757575;font-family:var(--step-font-family, "SF Pro");font-size:12px;font-style:normal;font-weight:400;line-height:16px;margin:0 0 2px 0;display:block;overflow:hidden;text-overflow:ellipsis}.ZUUjFGTjmZSNG6YFOo5c{color:#1e1e1e;font-family:var(--step-font-family, "SF Pro");font-size:13px;font-style:normal;font-weight:500;line-height:20px;margin:0;display:block}.d4wNKrRPvcARkiBpSPTn{flex:1;display:flex;align-items:flex-end;background-color:var(--light-background-color, rgba(79, 70, 229, 0.08));border-radius:4px;position:relative;cursor:pointer;transition:all .2s ease}.d4wNKrRPvcARkiBpSPTn._AsHQhUE_HUVQsd4tEFP{background-color:var(--light-background-color, rgba(79, 70, 229, 0.15))}.d4wNKrRPvcARkiBpSPTn.jIqdqNePu7F4gG7xFLHI{cursor:pointer}.mzNMNSGEaQ4x8cSdybFr{width:100%;min-height:4px;border-radius:4px 4px 0 0;transition:all .3s ease;background-color:var(--primary-color, #4f46e5)}.mzNMNSGEaQ4x8cSdybFr._AsHQhUE_HUVQsd4tEFP{box-shadow:0 4px 16px rgba(0,0,0,.2);filter:brightness(1.1)}.O5BsuL6i14EMWlko19Y0{display:inline-flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:4px;border-bottom:1px solid var(--Gray-Gray-5, #dcdcde);background:var(--black-white-white, #fff);border-radius:4px !important;padding:12px !important;box-shadow:0 1px 3px 0 rgba(0,0,0,.15),0 3px 9px 0 rgba(0,0,0,.12) !important}.j6cWoywD6KBtUocSpOXB{color:#1e1e1e;font-family:"SF Pro",sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:16px}.V270MDRAbjhmCL4nVFTG{color:#1e1e1e;font-family:"SF Pro",sans-serif;font-size:13px;font-style:normal;font-weight:500;line-height:20px}.IC2AzG5eUxmMyt131MAU{text-align:center;padding:48px 24px;color:#6b7280;font-size:16px}',""]),t.locals={conversionFunnelChart:"I8mGoz_EtiIWZaoGS30E",loading:"Ob8tvy5eHghStcrCJWN9","main-metric":"wKbGFYQfIOfhmmYFLHSK","main-rate":"oY7oSTOv0O1OVE7Nwr7r","change-indicator":"g5eftU7LwDzx_CwgrYz5","funnel-container":"IZ7aZvTDxof7mJ6gicwQ","funnel-step":"pR7TosSoLpSVwLTN8nAn",blurred:"HY_Ypub6UryoV4Z52Fgg","step-header":"DveAm765BEke10Kf4yvu","step-label":"Yeb2mq3ZeOYLdNHbM8O3","step-rate":"ZUUjFGTjmZSNG6YFOo5c","bar-container":"d4wNKrRPvcARkiBpSPTn",selected:"_AsHQhUE_HUVQsd4tEFP",disabled:"jIqdqNePu7F4gG7xFLHI","funnel-bar":"mzNMNSGEaQ4x8cSdybFr","tooltip-wrapper":"O5BsuL6i14EMWlko19Y0","tooltip-title":"j6cWoywD6KBtUocSpOXB","tooltip-content":"V270MDRAbjhmCL4nVFTG","empty-state":"IC2AzG5eUxmMyt131MAU"};const f=t}}]);
