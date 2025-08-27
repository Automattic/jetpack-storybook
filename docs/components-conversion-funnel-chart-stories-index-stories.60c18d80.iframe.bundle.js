"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[201],{"../charts/src/components/conversion-funnel-chart/stories/index.stories.tsx":(y,u,e)=>{e.r(u),e.d(u,{Default:()=>T,EmptyData:()=>I,HighConversion:()=>L,JetpackTheme:()=>P,Loading:()=>O,NegativeChange:()=>j,WithoutChangeIndicator:()=>R,WooCommerceTheme:()=>V,__namedExportsOrder:()=>q,default:()=>$});var n=e("../charts/src/providers/theme/theme-provider.tsx"),p=e("../charts/src/providers/theme/themes.ts"),i=e("../charts/src/stories/sample-data/index.ts"),s=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.js"),l=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=e("../charts/src/hooks/use-global-chart-theme.ts"),h=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(h),v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.module.scss"),g={};g.insert="head",g.singleton=!1;var S=b()(v.A,g);const r=v.A.locals||{},w=()=>{const[o,m]=(0,a.useState)(null),C=(0,a.useCallback)(f=>{m(o===f?null:f)},[o]),D=(0,a.useCallback)((f,F)=>{F.key==="Enter"||F.key===" "?(F.preventDefault(),m(o===f?null:f)):F.key==="Escape"&&(F.preventDefault(),m(null))},[o]),E=(0,a.useCallback)(()=>{m(null)},[]),M=(0,a.useCallback)(f=>({isClicked:o===f,isBlurred:o!==null&&o!==f}),[o]);return{clickedStep:o,handleBarClick:C,handleBarKeyDown:D,clearSelection:E,getStepState:M}},A=(o,m)=>{if(typeof o!="string")throw new Error("Hex color must be a string");if(!o.startsWith("#"))throw new Error("Hex color must start with #");if(o.length!==7)throw new Error("Hex color must be 7 characters long (e.g., #ff0000)");const C=o.slice(1);if(!/^[0-9a-fA-F]{6}$/.test(C))throw new Error("Hex color contains invalid characters. Only 0-9, a-f, A-F are allowed");if(typeof m!="number"||isNaN(m))throw new Error("Alpha must be a number");const D=parseInt(o.slice(1,3),16),E=parseInt(o.slice(3,5),16),M=parseInt(o.slice(5,7),16);return`rgba(${D}, ${E}, ${M}, ${m})`};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const x={primaryColor:"#4F46E5",backgroundColor:"#F3F4F6",positiveChangeColor:"#10B981",negativeChangeColor:"#EF4444"},_=({mainRate:o,changeIndicator:m,steps:C,loading:D=!1,className:E,style:M})=>{const f=(0,d.u)(),F=(0,a.useRef)(null),N=(0,a.useRef)(null),{handleBarClick:H,handleBarKeyDown:z,clearSelection:Y,getStepState:ee}=w(),Q=(0,a.useCallback)(()=>{Y(),N.current=null},[Y]),X=(0,a.useMemo)(()=>{const c=new Map;return C.forEach(k=>{const B=W=>{W.stopPropagation(),N.current=W.currentTarget,H(k.id)},G=W=>{N.current=W.currentTarget,z(k.id,W)};c.set(k.id,{onClick:B,onKeyDown:G})}),c},[C,H,z]);(0,a.useEffect)(()=>{const c=k=>{N.current&&!N.current.contains(k.target)&&Q()};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[Q]);const U=f.conversionFunnelChart,K=U?.primaryColor||x.primaryColor,ae=U?.positiveChangeColor||x.positiveChangeColor,te=U?.negativeChangeColor||x.negativeChangeColor,J=m?.startsWith("+")?ae:te,re=A(K,.08),Z={"--primary-color":K,"--light-background-color":re,"--change-color":J,...M};if(!C||C.length===0)return(0,t.jsx)("div",{className:(0,l.A)(r.conversionFunnelChart,D&&r.loading,E),style:Z,children:(0,t.jsx)("div",{className:r.emptyState,children:D?"Loading...":"No data available"})});const ne=Math.max(...C.map(c=>c.rate));return(0,t.jsxs)("div",{ref:F,className:(0,l.A)(r.conversionFunnelChart,D&&r.loading,E),style:Z,children:[(0,t.jsxs)("div",{className:r.mainMetric,children:[(0,t.jsxs)(s.A,{className:r.mainRate,children:[o.toFixed(1),"%"]}),m&&(0,t.jsx)(s.A,{className:r.changeIndicator,style:{color:J},children:m})]}),(0,t.jsx)("div",{className:r.funnelContainer,children:C.map(c=>{const k=c.rate/ne*100,{isClicked:B,isBlurred:G}=ee(c.id);return(0,t.jsxs)("div",{className:(0,l.A)(r.funnelStep,G&&r.blurred),children:[(0,t.jsxs)("div",{className:r.stepHeader,children:[(0,t.jsx)(s.A,{className:r.stepLabel,children:c.label}),(0,t.jsxs)(s.A,{className:r.stepRate,children:[c.rate.toFixed(1),"%"]})]}),(0,t.jsxs)("div",{className:(0,l.A)(r.barContainer,B&&r.selected,G&&r.disabled),onClick:X.get(c.id)?.onClick,onKeyDown:X.get(c.id)?.onKeyDown,role:"button",tabIndex:G?-1:0,"aria-label":c.label,children:[(0,t.jsx)("div",{className:(0,l.A)(r.funnelBar,B&&r.selected),style:{height:`${k}%`,backgroundColor:K}}),B&&(0,t.jsx)("div",{className:r.tooltip,children:(0,t.jsxs)("div",{className:r.tooltipContent,children:[(0,t.jsx)(s.A,{className:r.tooltipTitle,children:c.label}),(0,t.jsxs)(s.A,{className:r.tooltipRate,children:[c.rate.toFixed(1),"%",c.count&&` \u2022 ${c.count.toLocaleString()} items`]})]})})]})]},c.id)})})]})},oe=null;try{_.displayName="ConversionFunnelChart",_.__docgenInfo={description:"ConversionFunnelChart component displays a conversion funnel with main metric and visualization",displayName:"ConversionFunnelChart",props:{mainRate:{defaultValue:null,description:"Main conversion rate to highlight",name:"mainRate",required:!0,type:{name:"number"}},changeIndicator:{defaultValue:null,description:"Change indicator (e.g., +2%, -1.5%)",name:"changeIndicator",required:!1,type:{name:"string"}},steps:{defaultValue:null,description:"Array of funnel steps",name:"steps",required:!0,type:{name:"FunnelStep[]"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#ConversionFunnelChart"]={docgenInfo:_.__docgenInfo,name:"ConversionFunnelChart",path:"../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#ConversionFunnelChart"})}catch{}try{conversionfunnelchart.displayName="conversionfunnelchart",conversionfunnelchart.__docgenInfo={description:"ConversionFunnelChart component displays a conversion funnel with main metric and visualization",displayName:"conversionfunnelchart",props:{mainRate:{defaultValue:null,description:"Main conversion rate to highlight",name:"mainRate",required:!0,type:{name:"number"}},changeIndicator:{defaultValue:null,description:"Change indicator (e.g., +2%, -1.5%)",name:"changeIndicator",required:!1,type:{name:"string"}},steps:{defaultValue:null,description:"Array of funnel steps",name:"steps",required:!0,type:{name:"FunnelStep[]"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"]={docgenInfo:conversionfunnelchart.__docgenInfo,name:"conversionfunnelchart",path:"../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"})}catch{}const $={title:"JS Packages/Charts/Types/Conversion Funnel Chart",component:_,parameters:{layout:"centered",docs:{description:{component:`
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
                `}}},tags:["autodocs"],argTypes:{mainRate:{control:{type:"number",min:0,max:100,step:.1},description:"Main conversion rate to highlight",table:{type:{summary:"number"}}},changeIndicator:{control:"text",description:"Change indicator (e.g., +2%, -1.5%)",table:{type:{summary:"string"}}},steps:{control:"object",description:"Array of funnel steps",table:{type:{summary:"FunnelStep[]"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}}},decorators:[o=>(0,t.jsx)("div",{style:{width:"600px",padding:"20px"},children:(0,t.jsx)(o,{})})]},T={args:{mainRate:10.3,changeIndicator:"+2%",steps:i.$w,loading:!1}},j={args:{mainRate:8.7,changeIndicator:"-1.6%",steps:i.Ro,loading:!1}},L={args:{mainRate:18.7,changeIndicator:"+5.2%",steps:i.hk,loading:!1}},R={args:{mainRate:10.3,steps:i.$w,loading:!1}},O={args:{mainRate:10.3,changeIndicator:"+2%",steps:i.$w,loading:!0}},I={args:{mainRate:0,steps:[],loading:!1}},P={args:{mainRate:10.3,changeIndicator:"+2%",steps:i.$w,loading:!1},decorators:[o=>(0,t.jsx)(n.N,{theme:p.QI,children:(0,t.jsx)("div",{style:{width:"600px",padding:"20px"},children:(0,t.jsx)(o,{})})})]},V={args:{mainRate:10.3,changeIndicator:"+2%",steps:i.$w,loading:!1},decorators:[o=>(0,t.jsx)(n.N,{theme:p.pk,children:(0,t.jsx)("div",{style:{width:"600px",padding:"20px"},children:(0,t.jsx)(o,{})})})]},q=["Default","NegativeChange","HighConversion","WithoutChangeIndicator","Loading","EmptyData","JetpackTheme","WooCommerceTheme"];T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...T.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 8.7,
    changeIndicator: '-1.6%',
    steps: lowConversionFunnelData,
    loading: false
  }
}`,...j.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 18.7,
    changeIndicator: '+5.2%',
    steps: highConversionFunnelData,
    loading: false
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...R.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: true
  }
}`,...O.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 0,
    steps: [],
    loading: false
  }
}`,...I.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
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
}`,...P.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
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
}`,...V.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/values.js":(y,u,e)=>{e.d(u,{GB:()=>l,J5:()=>n,r6:()=>p,vD:()=>i});function n(a){return a!=null}function p(a){const d=a==="";return!n(a)||d}function i(a=[],d){var h;return(h=a.find(n))!==null&&h!==void 0?h:d}const s=a=>parseFloat(a),l=a=>typeof a=="string"?s(a):a},"../charts/src/hooks/use-global-chart-theme.ts":(y,u,e)=>{e.d(u,{u:()=>h});var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),i=e("../charts/src/providers/theme/theme-provider.tsx"),s=e("../charts/src/providers/theme/themes.ts"),l=e("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),a=e.n(l);function d(b,v){return a()(b,v,{arrayMerge:(g,S)=>S})}const h=()=>{const v=(0,n.useContext)(p.mJ)?.theme,g=(0,i.R)();return(0,n.useMemo)(()=>d(v??s.zQ,g),[v,g])}},"../charts/src/providers/chart-context/global-charts-provider.tsx":(y,u,e)=>{e.d(u,{Sx:()=>l,jT:()=>a,mJ:()=>s});var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../charts/src/providers/theme/themes.ts"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=(0,n.createContext)(null),l=({children:d,theme:h={}})=>{const[b,v]=(0,n.useState)(()=>new Map),g=(0,n.useMemo)(()=>({...p.zQ,...h}),[h]),S=(0,n.useCallback)((t,x)=>{v(_=>new Map(_).set(t,x))},[]),r=(0,n.useCallback)(t=>{v(x=>{const _=new Map(x);return _.delete(t),_})},[]),w=(0,n.useCallback)(t=>b.get(t),[b]),A=(0,n.useMemo)(()=>({charts:b,registerChart:S,unregisterChart:r,getChartData:w,theme:g}),[b,S,r,w,g]);return(0,i.jsx)(s.Provider,{value:A,children:d})},a=()=>{const d=(0,n.useContext)(s);if(!d)throw new Error("useGlobalChartsContext must be used within a GlobalChartsProvider");return d};try{l.displayName="GlobalChartsProvider",l.__docgenInfo={description:"",displayName:"GlobalChartsProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional theme override. Considered static for provider lifecycle.",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"]={docgenInfo:l.__docgenInfo,name:"GlobalChartsProvider",path:"../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(y,u,e)=>{e.d(u,{N:()=>l,R:()=>s});var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i=(0,n.createContext)({}),s=()=>(0,n.useContext)(i),l=({theme:a={},children:d})=>(0,p.jsx)(i.Provider,{value:a,children:d});try{l.displayName="ThemeProvider",l.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:l.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{s.displayName="useChartTheme",s.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:s.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(y,u,e)=>{e.d(u,{QI:()=>p,pk:()=>i,zQ:()=>n});const n={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#80C8FF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},p={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#006DAB",secondaryColor:"#98C8DF",deltaColors:["#FF8C8F","#757575","#1F9828"]},conversionFunnelChart:{primaryColor:"#006DAB",backgroundColor:"#F3F4F6",positiveChangeColor:"#1F9828",negativeChangeColor:"#FF8C8F"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},i={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"},annotationStyles:{label:{anchorLineStroke:"black",backgroundFill:"#fff"},connector:{stroke:"black"},circleSubject:{stroke:"transparent",fill:"black",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#80C8FF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeWidth:1.5,strokeLinecap:"square"}}}}},"../charts/src/stories/sample-data/index.ts":(y,u,e)=>{e.d(u,{$w:()=>v,B2:()=>p,EJ:()=>l,Ff:()=>h,Gv:()=>i,Hc:()=>r,Mc:()=>A,Ro:()=>g,Sb:()=>s,V_:()=>w,_E:()=>n,f2:()=>t,hk:()=>S,mg:()=>a,n$:()=>b,wP:()=>d});const n=[{group:"United States",label:"United States",data:[{label:"1896",value:20},{label:"1900",value:47},{label:"1904",value:239},{label:"1908",value:47},{label:"1912",value:63},{label:"1920",value:95},{label:"1924",value:99},{label:"1928",value:56},{label:"1932",value:103},{label:"1936",value:56},{label:"1948",value:84},{label:"1952",value:76},{label:"1956",value:74},{label:"1960",value:71},{label:"1964",value:90},{label:"1968",value:107},{label:"1972",value:94},{label:"1976",value:94},{label:"1980",value:0},{label:"1984",value:174},{label:"1988",value:94},{label:"1992",value:108},{label:"1996",value:101},{label:"2000",value:93},{label:"2004",value:101},{label:"2008",value:112},{label:"2012",value:104},{label:"2016",value:121},{label:"2020",value:113},{label:"2024",value:126}]},{group:"Great Britain",label:"Great Britain",data:[{label:"1896",value:7},{label:"1900",value:30},{label:"1904",value:1},{label:"1908",value:146},{label:"1912",value:41},{label:"1920",value:43},{label:"1924",value:34},{label:"1928",value:25},{label:"1932",value:20},{label:"1936",value:33},{label:"1948",value:23},{label:"1952",value:22},{label:"1956",value:24},{label:"1960",value:20},{label:"1964",value:20},{label:"1968",value:13},{label:"1972",value:21},{label:"1976",value:13},{label:"1980",value:21},{label:"1984",value:37},{label:"1988",value:24},{label:"1992",value:20},{label:"1996",value:15},{label:"2000",value:28},{label:"2004",value:30},{label:"2008",value:47},{label:"2012",value:65},{label:"2016",value:67},{label:"2020",value:65},{label:"2024",value:65}]},{group:"Germany",label:"Germany",data:[{label:"1896",value:13},{label:"1900",value:17},{label:"1904",value:18},{label:"1908",value:16},{label:"1912",value:37},{label:"1920",value:0},{label:"1924",value:30},{label:"1928",value:31},{label:"1932",value:20},{label:"1936",value:101},{label:"1948",value:0},{label:"1952",value:24},{label:"1956",value:26},{label:"1960",value:43},{label:"1964",value:36},{label:"1968",value:39},{label:"1972",value:66},{label:"1976",value:90},{label:"1980",value:126},{label:"1984",value:59},{label:"1988",value:142},{label:"1992",value:82},{label:"1996",value:65},{label:"2000",value:57},{label:"2004",value:49},{label:"2008",value:41},{label:"2012",value:44},{label:"2016",value:42},{label:"2020",value:37},{label:"2024",value:33}]}],p=[{group:"New York",label:"New York",data:[{date:new Date("2024-01-01"),value:2},{date:new Date("2024-02-01"),value:3},{date:new Date("2024-03-01"),value:8},{date:new Date("2024-04-01"),value:14},{date:new Date("2024-05-01"),value:20},{date:new Date("2024-06-01"),value:24},{date:new Date("2024-07-01"),value:27},{date:new Date("2024-08-01"),value:26},{date:new Date("2024-09-01"),value:22},{date:new Date("2024-10-01"),value:16},{date:new Date("2024-11-01"),value:10},{date:new Date("2024-12-01"),value:4}],options:{}},{group:"London",label:"London",data:[{date:new Date("2024-01-01"),value:5},{date:new Date("2024-02-01"),value:5},{date:new Date("2024-03-01"),value:7},{date:new Date("2024-04-01"),value:9},{date:new Date("2024-05-01"),value:13},{date:new Date("2024-06-01"),value:16},{date:new Date("2024-07-01"),value:18},{date:new Date("2024-08-01"),value:18},{date:new Date("2024-09-01"),value:15},{date:new Date("2024-10-01"),value:12},{date:new Date("2024-11-01"),value:8},{date:new Date("2024-12-01"),value:6}],options:{}},{group:"Tokyo",label:"Tokyo",data:[{date:new Date("2024-01-01"),value:6},{date:new Date("2024-02-01"),value:7},{date:new Date("2024-03-01"),value:10},{date:new Date("2024-04-01"),value:15},{date:new Date("2024-05-01"),value:20},{date:new Date("2024-06-01"),value:23},{date:new Date("2024-07-01"),value:27},{date:new Date("2024-08-01"),value:28},{date:new Date("2024-09-01"),value:25},{date:new Date("2024-10-01"),value:19},{date:new Date("2024-11-01"),value:14},{date:new Date("2024-12-01"),value:9}],options:{}}],i=[{group:"Revenue",label:"Revenue",data:[{date:new Date("2024-01-01"),value:125e4},{date:new Date("2024-04-01"),value:134e4},{date:new Date("2024-07-01"),value:118e4},{date:new Date("2024-10-01"),value:152e4}],options:{}},{group:"Costs",label:"Costs",data:[{date:new Date("2024-01-01"),value:85e4},{date:new Date("2024-04-01"),value:92e4},{date:new Date("2024-07-01"),value:78e4},{date:new Date("2024-10-01"),value:11e5}],options:{}}],s=[{group:"Visitors",label:"Visitors",data:[{dateString:"2023-01-01",value:1e3},{dateString:"2023-01-02",value:1200},{dateString:"2023-01-03",value:950},{dateString:"2023-01-04",value:1100},{dateString:"2023-01-05",value:1300},{dateString:"2023-01-06",value:1150},{dateString:"2023-01-07",value:980}],options:{}}],l=[{id:"direct",label:"Direct",currentValue:12500,previousValue:1e4,currentShare:100,previousShare:80,delta:25},{id:"social",label:"Social Media",currentValue:8750,previousValue:9500,currentShare:70,previousShare:76,delta:-7.9},{id:"email",label:"Email Marketing",currentValue:6250,previousValue:5800,currentShare:50,previousShare:46,delta:7.8},{id:"search",label:"Search Engine",currentValue:4375,previousValue:4200,currentShare:35,previousShare:33,delta:4.2}],a=[{id:"direct",label:"Direct",currentValue:12500,previousValue:1e4,currentShare:100,previousShare:80,delta:25},{id:"social",label:"Social Media",currentValue:8750,previousValue:9500,currentShare:70,previousShare:76,delta:-7.9}],d=[{id:"large1",label:"Large Value 1",currentValue:125e4,previousValue:1e6,currentShare:100,previousShare:80,delta:25},{id:"large2",label:"Large Value 2",currentValue:875e3,previousValue:95e4,currentShare:70,previousShare:76,delta:-7.9},{id:"large3",label:"Large Value 3",currentValue:625e3,previousValue:58e4,currentShare:50,previousShare:46,delta:7.8}],h=[{id:"negative1",label:"Declining Channel",currentValue:5e3,previousValue:8e3,currentShare:62.5,previousShare:100,delta:-37.5},{id:"negative2",label:"Another Declining",currentValue:3e3,previousValue:6e3,currentShare:37.5,previousShare:75,delta:-50},{id:"negative3",label:"Slight Decline",currentValue:4500,previousValue:4800,currentShare:56.25,previousShare:60,delta:-6.25}],b=[{id:"direct",label:"Direct",currentValue:12500,previousValue:1e4,currentShare:100,previousShare:80,delta:25,imageColor:"#3858E9"},{id:"social",label:"Social Media",currentValue:8750,previousValue:9500,currentShare:30,previousShare:76,delta:-7.9,imageColor:"#66BDFF"},{id:"referral",label:"Referral",currentValue:8750,previousValue:9500,currentShare:10,previousShare:16,delta:-7.9,imageColor:"#8B5CF6"}],v=[{id:"sessions",label:"Sessions",rate:100,count:1e4},{id:"cart",label:"Cart",rate:71.1,count:7110},{id:"checkout",label:"Checkout",rate:52.5,count:5250},{id:"purchase",label:"Purchase",rate:10.3,count:1030}],g=[{id:"sessions",label:"Sessions",rate:100,count:5e3},{id:"cart",label:"Cart",rate:45.2,count:2260},{id:"checkout",label:"Checkout",rate:28.8,count:1440},{id:"purchase",label:"Purchase",rate:6.4,count:320}],S=[{id:"sessions",label:"Sessions",rate:100,count:8e3},{id:"cart",label:"Cart",rate:85.3,count:6824},{id:"checkout",label:"Checkout",rate:72.1,count:5768},{id:"purchase",label:"Purchase",rate:18.7,count:1496}],r=[{group:"primary",label:"Jan 21-Aug 8, 2024",data:[{label:"Organic search",value:3e4},{label:"Affiliates",value:19e3},{label:"Display",value:18e3},{label:"Organic shopping",value:16e3}]},{group:"comparison",label:"Jan 21-Aug 8, 2023",data:[{label:"Organic search",value:2e4},{label:"Affiliates",value:15e3},{label:"Display",value:19900},{label:"Organic shopping",value:20500}]}],w=[{group:"primary",label:"Sales By Product",data:[{label:"Behemoth hat ",value:32400},{label:"Margarita top",value:2e4},{label:"Berlioz dress",value:15e3},{label:"Woland shirt",value:16e3},{label:"Azazello top",value:2e4}]}],A=[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:23},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:17},{label:"Windows",value:8e4,valueDisplay:"80K",percentage:60}],t=[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:5},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:1},{label:"Windows",value:8e4,valueDisplay:"80K",percentage:2}]},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.module.scss":(y,u,e)=>{e.d(u,{A:()=>a});var n=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(n),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(i),l=s()(p());l.push([y.id,'.I8mGoz_EtiIWZaoGS30E{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}.I8mGoz_EtiIWZaoGS30E.Ob8tvy5eHghStcrCJWN9{opacity:.6;pointer-events:none}.t1P88mWi34mnnAna8jci{display:flex;align-items:baseline;gap:12px;margin-bottom:24px}.Lri6uaBBla9NlUAHQsVQ{font-size:48px;font-weight:400;color:#111827;line-height:1;margin:0}.bviZD4_vlvefD9cBSYrH{font-size:20px;font-weight:600;margin:0}.ALF8tLESjw4_7HSKgK2F{display:flex;gap:16px;align-items:flex-end;height:200px}.FgGgwh0mFqmw7XWZf3Tm{flex:1;display:flex;flex-direction:column;height:100%;transition:all .3s ease}.FgGgwh0mFqmw7XWZf3Tm.HY_Ypub6UryoV4Z52Fgg{opacity:.3}.FDuo7403SUmmvh4tlqG1{margin-bottom:16px}.vY3hANMLpc4mdkW5wVHk{font-size:14px;font-weight:500;color:#6b7280;margin:0 0 4px 0;display:block}.W8dqyT3lmrRyUAXi8uuT{font-size:18px;font-weight:600;color:#111827;margin:0;display:block}.eQ8GMEvXgiOGbLDLGVEm{flex:1;display:flex;align-items:flex-end;background-color:var(--light-background-color, rgba(79, 70, 229, 0.08));border-radius:4px;position:relative;cursor:pointer;transition:all .2s ease}.eQ8GMEvXgiOGbLDLGVEm._AsHQhUE_HUVQsd4tEFP{background-color:var(--light-background-color, rgba(79, 70, 229, 0.15))}.eQ8GMEvXgiOGbLDLGVEm.jIqdqNePu7F4gG7xFLHI{cursor:pointer}.YuNWEXC589PIAwh6YjCZ{width:100%;min-height:4px;border-radius:4px 4px 0 0;transition:all .3s ease;background-color:var(--primary-color, #4f46e5)}.YuNWEXC589PIAwh6YjCZ._AsHQhUE_HUVQsd4tEFP{box-shadow:0 4px 16px rgba(0,0,0,.2);filter:brightness(1.1)}.O3KtMfuar967b3Aec47o{position:absolute;bottom:100%;left:50%;transform:translateX(-50%);margin-bottom:8px;z-index:10;pointer-events:none}.L6GOTvidD5hUlxo_KaxA{background:#fff;color:#374151;padding:12px 16px;border-radius:8px;font-size:14px;white-space:nowrap;box-shadow:0 8px 24px rgba(0,0,0,.12);border:1px solid #e5e7eb;position:relative;min-width:180px}.L6GOTvidD5hUlxo_KaxA::after{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:6px solid rgba(0,0,0,0);border-top-color:#fff}.L6GOTvidD5hUlxo_KaxA::before{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:7px solid rgba(0,0,0,0);border-top-color:#e5e7eb;z-index:-1}.G5OgIauip2Y1nwlG0JXG{font-weight:500;margin:0 0 4px 0;color:#374151;display:block;font-size:14px}.IcHjmFPjr7t2ndlpUlTR{font-weight:400;margin:0;color:#6b7280;display:block;font-size:14px}._hpEBjdJQ9LD2XAQduUa{text-align:center;padding:48px 24px;color:#6b7280;font-size:16px}@media(max-width: 640px){.I8mGoz_EtiIWZaoGS30E{padding:16px}.Lri6uaBBla9NlUAHQsVQ{font-size:36px}.bviZD4_vlvefD9cBSYrH{font-size:16px}.ALF8tLESjw4_7HSKgK2F{height:180px;gap:12px}.W8dqyT3lmrRyUAXi8uuT{font-size:16px}.vY3hANMLpc4mdkW5wVHk{font-size:12px}}',""]),l.locals={conversionFunnelChart:"I8mGoz_EtiIWZaoGS30E",loading:"Ob8tvy5eHghStcrCJWN9",mainMetric:"t1P88mWi34mnnAna8jci",mainRate:"Lri6uaBBla9NlUAHQsVQ",changeIndicator:"bviZD4_vlvefD9cBSYrH",funnelContainer:"ALF8tLESjw4_7HSKgK2F",funnelStep:"FgGgwh0mFqmw7XWZf3Tm",blurred:"HY_Ypub6UryoV4Z52Fgg",stepHeader:"FDuo7403SUmmvh4tlqG1",stepLabel:"vY3hANMLpc4mdkW5wVHk",stepRate:"W8dqyT3lmrRyUAXi8uuT",barContainer:"eQ8GMEvXgiOGbLDLGVEm",selected:"_AsHQhUE_HUVQsd4tEFP",disabled:"jIqdqNePu7F4gG7xFLHI",funnelBar:"YuNWEXC589PIAwh6YjCZ",tooltip:"O3KtMfuar967b3Aec47o",tooltipContent:"L6GOTvidD5hUlxo_KaxA",tooltipTitle:"G5OgIauip2Y1nwlG0JXG",tooltipRate:"IcHjmFPjr7t2ndlpUlTR",emptyState:"_hpEBjdJQ9LD2XAQduUa"};const a=l}}]);
