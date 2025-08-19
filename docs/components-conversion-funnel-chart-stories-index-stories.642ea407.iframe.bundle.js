"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[201],{"../charts/src/components/conversion-funnel-chart/stories/index.stories.tsx":(y,u,e)=>{e.r(u),e.d(u,{Default:()=>D,EmptyData:()=>I,HighConversion:()=>w,JetpackTheme:()=>P,Loading:()=>R,NegativeChange:()=>j,WithoutChangeIndicator:()=>L,WooCommerceTheme:()=>O,__namedExportsOrder:()=>ne,default:()=>te});var s=e("../charts/src/providers/theme/theme-provider.tsx"),p=e("../charts/src/providers/theme/themes.ts"),c=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.js"),i=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../charts/src/hooks/use-global-chart-theme.ts"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(d),C=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.module.scss"),h={};h.insert="head",h.singleton=!1;var S=g()(C.A,h);const t=C.A.locals||{},U=()=>{const[a,m]=(0,n.useState)(null),f=(0,n.useCallback)(v=>{m(a===v?null:v)},[a]),x=(0,n.useCallback)((v,F)=>{F.key==="Enter"||F.key===" "?(F.preventDefault(),m(a===v?null:v)):F.key==="Escape"&&(F.preventDefault(),m(null))},[a]),E=(0,n.useCallback)(()=>{m(null)},[]),N=(0,n.useCallback)(v=>({isClicked:a===v,isBlurred:a!==null&&a!==v}),[a]);return{clickedStep:a,handleBarClick:f,handleBarKeyDown:x,clearSelection:E,getStepState:N}},H=(a,m)=>{if(typeof a!="string")throw new Error("Hex color must be a string");if(!a.startsWith("#"))throw new Error("Hex color must start with #");if(a.length!==7)throw new Error("Hex color must be 7 characters long (e.g., #ff0000)");const f=a.slice(1);if(!/^[0-9a-fA-F]{6}$/.test(f))throw new Error("Hex color contains invalid characters. Only 0-9, a-f, A-F are allowed");if(typeof m!="number"||isNaN(m))throw new Error("Alpha must be a number");const x=parseInt(a.slice(1,3),16),E=parseInt(a.slice(3,5),16),N=parseInt(a.slice(5,7),16);return`rgba(${x}, ${E}, ${N}, ${m})`};var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _={primaryColor:"#4F46E5",backgroundColor:"#F3F4F6",positiveChangeColor:"#10B981",negativeChangeColor:"#EF4444"},b=({mainRate:a,changeIndicator:m,steps:f,loading:x=!1,className:E,style:N})=>{const v=(0,r.u)(),F=(0,n.useRef)(null),G=(0,n.useRef)(null),{handleBarClick:Y,handleBarKeyDown:z,clearSelection:Q,getStepState:oe}=U(),X=(0,n.useCallback)(()=>{Q(),G.current=null},[Q]),Z=(0,n.useMemo)(()=>{const l=new Map;return f.forEach(k=>{const M=W=>{W.stopPropagation(),G.current=W.currentTarget,Y(k.id)},B=W=>{G.current=W.currentTarget,z(k.id,W)};l.set(k.id,{onClick:M,onKeyDown:B})}),l},[f,Y,z]);(0,n.useEffect)(()=>{const l=k=>{G.current&&!G.current.contains(k.target)&&X()};return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[X]);const K=v.conversionFunnelChart,V=K?.primaryColor||_.primaryColor,ae=K?.positiveChangeColor||_.positiveChangeColor,re=K?.negativeChangeColor||_.negativeChangeColor,J=m?.startsWith("+")?ae:re,se=H(V,.08),$={"--primary-color":V,"--light-background-color":se,"--change-color":J,...N};if(!f||f.length===0)return(0,o.jsx)("div",{className:(0,i.A)(t.conversionFunnelChart,x&&t.loading,E),style:$,children:(0,o.jsx)("div",{className:t.emptyState,children:x?"Loading...":"No data available"})});const ie=Math.max(...f.map(l=>l.rate));return(0,o.jsxs)("div",{ref:F,className:(0,i.A)(t.conversionFunnelChart,x&&t.loading,E),style:$,children:[(0,o.jsxs)("div",{className:t.mainMetric,children:[(0,o.jsxs)(c.A,{className:t.mainRate,children:[a.toFixed(1),"%"]}),m&&(0,o.jsx)(c.A,{className:t.changeIndicator,style:{color:J},children:m})]}),(0,o.jsx)("div",{className:t.funnelContainer,children:f.map(l=>{const k=l.rate/ie*100,{isClicked:M,isBlurred:B}=oe(l.id);return(0,o.jsxs)("div",{className:(0,i.A)(t.funnelStep,B&&t.blurred),children:[(0,o.jsxs)("div",{className:t.stepHeader,children:[(0,o.jsx)(c.A,{className:t.stepLabel,children:l.label}),(0,o.jsxs)(c.A,{className:t.stepRate,children:[l.rate.toFixed(1),"%"]})]}),(0,o.jsxs)("div",{className:(0,i.A)(t.barContainer,M&&t.selected,B&&t.disabled),onClick:Z.get(l.id)?.onClick,onKeyDown:Z.get(l.id)?.onKeyDown,role:"button",tabIndex:B?-1:0,"aria-label":l.label,children:[(0,o.jsx)("div",{className:(0,i.A)(t.funnelBar,M&&t.selected),style:{height:`${k}%`,backgroundColor:V}}),M&&(0,o.jsx)("div",{className:t.tooltip,children:(0,o.jsxs)("div",{className:t.tooltipContent,children:[(0,o.jsx)(c.A,{className:t.tooltipTitle,children:l.label}),(0,o.jsxs)(c.A,{className:t.tooltipRate,children:[l.rate.toFixed(1),"%",l.count&&` \u2022 ${l.count.toLocaleString()} items`]})]})})]})]},l.id)})})]})},T=null;try{b.displayName="ConversionFunnelChart",b.__docgenInfo={description:"ConversionFunnelChart component displays a conversion funnel with main metric and visualization",displayName:"ConversionFunnelChart",props:{mainRate:{defaultValue:null,description:"Main conversion rate to highlight",name:"mainRate",required:!0,type:{name:"number"}},changeIndicator:{defaultValue:null,description:"Change indicator (e.g., +2%, -1.5%)",name:"changeIndicator",required:!1,type:{name:"string"}},steps:{defaultValue:null,description:"Array of funnel steps",name:"steps",required:!0,type:{name:"FunnelStep[]"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#ConversionFunnelChart"]={docgenInfo:b.__docgenInfo,name:"ConversionFunnelChart",path:"../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#ConversionFunnelChart"})}catch{}try{conversionfunnelchart.displayName="conversionfunnelchart",conversionfunnelchart.__docgenInfo={description:"ConversionFunnelChart component displays a conversion funnel with main metric and visualization",displayName:"conversionfunnelchart",props:{mainRate:{defaultValue:null,description:"Main conversion rate to highlight",name:"mainRate",required:!0,type:{name:"number"}},changeIndicator:{defaultValue:null,description:"Change indicator (e.g., +2%, -1.5%)",name:"changeIndicator",required:!1,type:{name:"string"}},steps:{defaultValue:null,description:"Array of funnel steps",name:"steps",required:!0,type:{name:"FunnelStep[]"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"]={docgenInfo:conversionfunnelchart.__docgenInfo,name:"conversionfunnelchart",path:"../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"})}catch{}const A=[{id:"sessions",label:"Sessions",rate:100,count:1e4},{id:"cart",label:"Cart",rate:71.1,count:7110},{id:"checkout",label:"Checkout",rate:52.5,count:5250},{id:"purchase",label:"Purchase",rate:10.3,count:1030}],q=[{id:"sessions",label:"Sessions",rate:100,count:5e3},{id:"cart",label:"Cart",rate:45.2,count:2260},{id:"checkout",label:"Checkout",rate:28.8,count:1440},{id:"purchase",label:"Purchase",rate:6.4,count:320}],ee=[{id:"sessions",label:"Sessions",rate:100,count:8e3},{id:"cart",label:"Cart",rate:85.3,count:6824},{id:"checkout",label:"Checkout",rate:72.1,count:5768},{id:"purchase",label:"Purchase",rate:18.7,count:1496}],le=[{id:"visitors",label:"Visitors",rate:100,count:15e3},{id:"trial",label:"Trial Signup",rate:12.5,count:1875},{id:"activation",label:"Activated",rate:8.2,count:1230},{id:"subscription",label:"Paid Plan",rate:3.1,count:465}],te={title:"JS Packages/Charts/Types/Conversion Funnel Chart",component:b,parameters:{layout:"centered",docs:{description:{component:`
A focused conversion funnel chart component for visualizing step-by-step conversion rates with a prominent main metric display and change indicators.

## Features

- \u{1F4CA} Clear funnel visualization with proportional bar heights and light backgrounds
- \u{1F4C8} Main conversion rate highlighting with positive/negative change indicators
- \u{1F3A8} Dynamic color theming - bar backgrounds automatically adapt to primary color
- \u{1F4F1} Mobile-friendly responsive design with flexible layouts
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

## Styling

The component uses CSS Modules and CSS custom properties for theming:

\`\`\`css
.myCustomChart {
  --primary-color: #3858e9;
  --background-color: #f3f4f6;
  --light-background-color: rgba(56, 88, 233, 0.08);
  --change-color: #008a20;
}
\`\`\`

The component automatically creates a light background version of the primary color for the bar containers using 8% opacity.

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
                `}}},tags:["autodocs"],argTypes:{mainRate:{control:{type:"number",min:0,max:100,step:.1},description:"Main conversion rate to highlight",table:{type:{summary:"number"}}},changeIndicator:{control:"text",description:"Change indicator (e.g., +2%, -1.5%)",table:{type:{summary:"string"}}},steps:{control:"object",description:"Array of funnel steps",table:{type:{summary:"FunnelStep[]"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}}},decorators:[a=>(0,o.jsx)("div",{style:{width:"600px",padding:"20px"},children:(0,o.jsx)(a,{})})]},D={args:{mainRate:10.3,changeIndicator:"+2%",steps:A,loading:!1}},j={args:{mainRate:8.7,changeIndicator:"-1.6%",steps:q,loading:!1}},w={args:{mainRate:18.7,changeIndicator:"+5.2%",steps:ee,loading:!1}},L={args:{mainRate:10.3,steps:A,loading:!1}},R={args:{mainRate:10.3,changeIndicator:"+2%",steps:A,loading:!0}},I={args:{mainRate:0,steps:[],loading:!1}},P={args:{mainRate:10.3,changeIndicator:"+2%",steps:A,loading:!1},decorators:[a=>(0,o.jsx)(s.N,{theme:p.QI,children:(0,o.jsx)("div",{style:{width:"600px",padding:"20px"},children:(0,o.jsx)(a,{})})})]},O={args:{mainRate:10.3,changeIndicator:"+2%",steps:A,loading:!1},decorators:[a=>(0,o.jsx)(s.N,{theme:p.pk,children:(0,o.jsx)("div",{style:{width:"600px",padding:"20px"},children:(0,o.jsx)(a,{})})})]},ne=["Default","NegativeChange","HighConversion","WithoutChangeIndicator","Loading","EmptyData","JetpackTheme","WooCommerceTheme"];D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: sampleFunnelData,
    loading: false
  }
}`,...D.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 8.7,
    changeIndicator: '-1.6%',
    steps: lowConversionData,
    loading: false
  }
}`,...j.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 18.7,
    changeIndicator: '+5.2%',
    steps: highConversionData,
    loading: false
  }
}`,...w.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    steps: sampleFunnelData,
    loading: false
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: sampleFunnelData,
    loading: true
  }
}`,...R.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 0,
    steps: [],
    loading: false
  }
}`,...I.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: sampleFunnelData,
    loading: false
  },
  decorators: [Story => <ThemeProvider theme={jetpackTheme}>
                <div style={{
      width: '600px',
      padding: '20px'
    }}>
                    <Story />
                </div>
            </ThemeProvider>]
}`,...P.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: sampleFunnelData,
    loading: false
  },
  decorators: [Story => <ThemeProvider theme={wooTheme}>
                <div style={{
      width: '600px',
      padding: '20px'
    }}>
                    <Story />
                </div>
            </ThemeProvider>]
}`,...O.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/values.js":(y,u,e)=>{e.d(u,{GB:()=>n,J5:()=>s,r6:()=>p,vD:()=>c});function s(r){return r!=null}function p(r){const d=r==="";return!s(r)||d}function c(r=[],d){var g;return(g=r.find(s))!==null&&g!==void 0?g:d}const i=r=>parseFloat(r),n=r=>typeof r=="string"?i(r):r},"../charts/src/hooks/use-global-chart-theme.ts":(y,u,e)=>{e.d(u,{u:()=>g});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),c=e("../charts/src/providers/theme/theme-provider.tsx"),i=e("../charts/src/providers/theme/themes.ts"),n=e("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),r=e.n(n);function d(C,h){return r()(C,h,{arrayMerge:(S,t)=>t})}const g=()=>{const h=(0,s.useContext)(p.mJ)?.theme,S=(0,c.R)();return(0,s.useMemo)(()=>d(h??i.zQ,S),[h,S])}},"../charts/src/providers/chart-context/global-charts-provider.tsx":(y,u,e)=>{e.d(u,{Sx:()=>n,jT:()=>r,mJ:()=>i});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../charts/src/providers/theme/themes.ts"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i=(0,s.createContext)(null),n=({children:d,theme:g={}})=>{const[C,h]=(0,s.useState)(()=>new Map),S=(0,s.useMemo)(()=>({...p.zQ,...g}),[g]),t=(0,s.useCallback)((_,b)=>{h(T=>new Map(T).set(_,b))},[]),U=(0,s.useCallback)(_=>{h(b=>{const T=new Map(b);return T.delete(_),T})},[]),H=(0,s.useCallback)(_=>C.get(_),[C]),o=(0,s.useMemo)(()=>({charts:C,registerChart:t,unregisterChart:U,getChartData:H,theme:S}),[C,t,U,H,S]);return(0,c.jsx)(i.Provider,{value:o,children:d})},r=()=>{const d=(0,s.useContext)(i);if(!d)throw new Error("useGlobalChartsContext must be used within a GlobalChartsProvider");return d};try{n.displayName="GlobalChartsProvider",n.__docgenInfo={description:"",displayName:"GlobalChartsProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional theme override. Considered static for provider lifecycle.",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"]={docgenInfo:n.__docgenInfo,name:"GlobalChartsProvider",path:"../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(y,u,e)=>{e.d(u,{N:()=>n,R:()=>i});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c=(0,s.createContext)({}),i=()=>(0,s.useContext)(c),n=({theme:r={},children:d})=>(0,p.jsx)(c.Provider,{value:r,children:d});try{n.displayName="ThemeProvider",n.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:n.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{i.displayName="useChartTheme",i.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:i.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(y,u,e)=>{e.d(u,{QI:()=>p,pk:()=>c,zQ:()=>s});const s={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#80C8FF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},p={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#006DAB",secondaryColor:"#98C8DF",deltaColors:["#FF8C8F","#757575","#1F9828"]},conversionFunnelChart:{primaryColor:"#006DAB",backgroundColor:"#F3F4F6",positiveChangeColor:"#1F9828",negativeChangeColor:"#FF8C8F"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},c={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"},annotationStyles:{label:{anchorLineStroke:"black",backgroundFill:"#fff"},connector:{stroke:"black"},circleSubject:{stroke:"transparent",fill:"black",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#80C8FF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeWidth:1.5,strokeLinecap:"square"}}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.module.scss":(y,u,e)=>{e.d(u,{A:()=>r});var s=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(s),c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(c),n=i()(p());n.push([y.id,'.I8mGoz_EtiIWZaoGS30E{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}.I8mGoz_EtiIWZaoGS30E.Ob8tvy5eHghStcrCJWN9{opacity:.6;pointer-events:none}.t1P88mWi34mnnAna8jci{display:flex;align-items:baseline;gap:12px;margin-bottom:24px}.Lri6uaBBla9NlUAHQsVQ{font-size:48px;font-weight:400;color:#111827;line-height:1;margin:0}.bviZD4_vlvefD9cBSYrH{font-size:20px;font-weight:600;margin:0}.ALF8tLESjw4_7HSKgK2F{display:flex;gap:16px;align-items:flex-end;height:200px}.FgGgwh0mFqmw7XWZf3Tm{flex:1;display:flex;flex-direction:column;height:100%;transition:all .3s ease}.FgGgwh0mFqmw7XWZf3Tm.HY_Ypub6UryoV4Z52Fgg{opacity:.3}.FDuo7403SUmmvh4tlqG1{margin-bottom:16px}.vY3hANMLpc4mdkW5wVHk{font-size:14px;font-weight:500;color:#6b7280;margin:0 0 4px 0;display:block}.W8dqyT3lmrRyUAXi8uuT{font-size:18px;font-weight:600;color:#111827;margin:0;display:block}.eQ8GMEvXgiOGbLDLGVEm{flex:1;display:flex;align-items:flex-end;background-color:var(--light-background-color, rgba(79, 70, 229, 0.08));border-radius:4px;position:relative;cursor:pointer;transition:all .2s ease}.eQ8GMEvXgiOGbLDLGVEm._AsHQhUE_HUVQsd4tEFP{background-color:var(--light-background-color, rgba(79, 70, 229, 0.15))}.eQ8GMEvXgiOGbLDLGVEm.jIqdqNePu7F4gG7xFLHI{cursor:pointer}.YuNWEXC589PIAwh6YjCZ{width:100%;min-height:4px;border-radius:4px 4px 0 0;transition:all .3s ease;background-color:var(--primary-color, #4f46e5)}.YuNWEXC589PIAwh6YjCZ._AsHQhUE_HUVQsd4tEFP{box-shadow:0 4px 16px rgba(0,0,0,.2);filter:brightness(1.1)}.O3KtMfuar967b3Aec47o{position:absolute;bottom:100%;left:50%;transform:translateX(-50%);margin-bottom:8px;z-index:10;pointer-events:none}.L6GOTvidD5hUlxo_KaxA{background:#fff;color:#374151;padding:12px 16px;border-radius:8px;font-size:14px;white-space:nowrap;box-shadow:0 8px 24px rgba(0,0,0,.12);border:1px solid #e5e7eb;position:relative;min-width:180px}.L6GOTvidD5hUlxo_KaxA::after{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:6px solid rgba(0,0,0,0);border-top-color:#fff}.L6GOTvidD5hUlxo_KaxA::before{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:7px solid rgba(0,0,0,0);border-top-color:#e5e7eb;z-index:-1}.G5OgIauip2Y1nwlG0JXG{font-weight:500;margin:0 0 4px 0;color:#374151;display:block;font-size:14px}.IcHjmFPjr7t2ndlpUlTR{font-weight:400;margin:0;color:#6b7280;display:block;font-size:14px}._hpEBjdJQ9LD2XAQduUa{text-align:center;padding:48px 24px;color:#6b7280;font-size:16px}@media(max-width: 640px){.I8mGoz_EtiIWZaoGS30E{padding:16px}.Lri6uaBBla9NlUAHQsVQ{font-size:36px}.bviZD4_vlvefD9cBSYrH{font-size:16px}.ALF8tLESjw4_7HSKgK2F{height:180px;gap:12px}.W8dqyT3lmrRyUAXi8uuT{font-size:16px}.vY3hANMLpc4mdkW5wVHk{font-size:12px}}',""]),n.locals={conversionFunnelChart:"I8mGoz_EtiIWZaoGS30E",loading:"Ob8tvy5eHghStcrCJWN9",mainMetric:"t1P88mWi34mnnAna8jci",mainRate:"Lri6uaBBla9NlUAHQsVQ",changeIndicator:"bviZD4_vlvefD9cBSYrH",funnelContainer:"ALF8tLESjw4_7HSKgK2F",funnelStep:"FgGgwh0mFqmw7XWZf3Tm",blurred:"HY_Ypub6UryoV4Z52Fgg",stepHeader:"FDuo7403SUmmvh4tlqG1",stepLabel:"vY3hANMLpc4mdkW5wVHk",stepRate:"W8dqyT3lmrRyUAXi8uuT",barContainer:"eQ8GMEvXgiOGbLDLGVEm",selected:"_AsHQhUE_HUVQsd4tEFP",disabled:"jIqdqNePu7F4gG7xFLHI",funnelBar:"YuNWEXC589PIAwh6YjCZ",tooltip:"O3KtMfuar967b3Aec47o",tooltipContent:"L6GOTvidD5hUlxo_KaxA",tooltipTitle:"G5OgIauip2Y1nwlG0JXG",tooltipRate:"IcHjmFPjr7t2ndlpUlTR",emptyState:"_hpEBjdJQ9LD2XAQduUa"};const r=n}}]);
