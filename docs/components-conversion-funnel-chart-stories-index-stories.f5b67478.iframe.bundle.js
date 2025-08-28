"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[201],{"../charts/src/components/conversion-funnel-chart/stories/index.stories.tsx":(E,u,e)=>{e.r(u),e.d(u,{Default:()=>F,EmptyData:()=>P,HighConversion:()=>k,JetpackTheme:()=>N,Loading:()=>O,NegativeChange:()=>T,WithoutChangeIndicator:()=>I,WooCommerceTheme:()=>M,__namedExportsOrder:()=>ne,default:()=>S});var t=e("../charts/src/providers/theme/theme-provider.tsx"),m=e("../charts/src/providers/theme/themes.ts"),l=e("../charts/src/stories/sample-data/index.ts"),i=e("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.js"),s=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=e("../charts/src/hooks/use-global-chart-theme.ts"),C=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=e.n(C),f=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.module.scss"),g={};g.insert="head",g.singleton=!1;var b=y()(f.A,g);const a=f.A.locals||{},K=()=>{const[r,h]=(0,n.useState)(null),v=(0,n.useCallback)(_=>{h(r===_?null:_)},[r]),A=(0,n.useCallback)((_,D)=>{D.key==="Enter"||D.key===" "?(D.preventDefault(),h(r===_?null:_)):D.key==="Escape"&&(D.preventDefault(),h(null))},[r]),R=(0,n.useCallback)(()=>{h(null)},[]),G=(0,n.useCallback)(_=>({isClicked:r===_,isBlurred:r!==null&&r!==_}),[r]);return{clickedStep:r,handleBarClick:v,handleBarKeyDown:A,clearSelection:R,getStepState:G}},V=(r,h)=>{if(typeof r!="string")throw new Error("Hex color must be a string");if(!r.startsWith("#"))throw new Error("Hex color must start with #");if(r.length!==7)throw new Error("Hex color must be 7 characters long (e.g., #ff0000)");const v=r.slice(1);if(!/^[0-9a-fA-F]{6}$/.test(v))throw new Error("Hex color contains invalid characters. Only 0-9, a-f, A-F are allowed");if(typeof h!="number"||isNaN(h))throw new Error("Alpha must be a number");const A=parseInt(r.slice(1,3),16),R=parseInt(r.slice(3,5),16),G=parseInt(r.slice(5,7),16);return`rgba(${A}, ${R}, ${G}, ${h})`};var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const L={primaryColor:"#4F46E5",backgroundColor:"#F3F4F6",positiveChangeColor:"#10B981",negativeChangeColor:"#EF4444"},p=({mainRate:r,changeIndicator:h,steps:v,loading:A=!1,className:R,style:G})=>{const _=(0,d.u)(),D=(0,n.useRef)(null),B=(0,n.useRef)(null),{handleBarClick:Q,handleBarKeyDown:X,clearSelection:Z,getStepState:te}=K(),J=(0,n.useCallback)(()=>{Z(),B.current=null},[Z]),$=(0,n.useMemo)(()=>{const c=new Map;return v.forEach(j=>{const W=H=>{H.stopPropagation(),B.current=H.currentTarget,Q(j.id)},U=H=>{B.current=H.currentTarget,X(j.id,H)};c.set(j.id,{onClick:W,onKeyDown:U})}),c},[v,Q,X]);(0,n.useEffect)(()=>{const c=j=>{B.current&&!B.current.contains(j.target)&&J()};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[J]);const Y=_.conversionFunnelChart,z=Y?.primaryColor||L.primaryColor,oe=Y?.positiveChangeColor||L.positiveChangeColor,re=Y?.negativeChangeColor||L.negativeChangeColor,q=h?.startsWith("+")?oe:re,ae=V(z,.08),ee={"--primary-color":z,"--light-background-color":ae,"--change-color":q,...G};if(!v||v.length===0)return(0,o.jsx)("div",{className:(0,s.A)(a.conversionFunnelChart,A&&a.loading,R),style:ee,children:(0,o.jsx)("div",{className:a.emptyState,children:A?"Loading...":"No data available"})});const se=Math.max(...v.map(c=>c.rate));return(0,o.jsxs)("div",{ref:D,className:(0,s.A)(a.conversionFunnelChart,A&&a.loading,R),style:ee,children:[(0,o.jsxs)("div",{className:a.mainMetric,children:[(0,o.jsxs)(i.A,{className:a.mainRate,children:[r.toFixed(1),"%"]}),h&&(0,o.jsx)(i.A,{className:a.changeIndicator,style:{color:q},children:h})]}),(0,o.jsx)("div",{className:a.funnelContainer,children:v.map(c=>{const j=c.rate/se*100,{isClicked:W,isBlurred:U}=te(c.id);return(0,o.jsxs)("div",{className:(0,s.A)(a.funnelStep,U&&a.blurred),children:[(0,o.jsxs)("div",{className:a.stepHeader,children:[(0,o.jsx)(i.A,{className:a.stepLabel,children:c.label}),(0,o.jsxs)(i.A,{className:a.stepRate,children:[c.rate.toFixed(1),"%"]})]}),(0,o.jsxs)("div",{className:(0,s.A)(a.barContainer,W&&a.selected,U&&a.disabled),onClick:$.get(c.id)?.onClick,onKeyDown:$.get(c.id)?.onKeyDown,role:"button",tabIndex:U?-1:0,"aria-label":c.label,children:[(0,o.jsx)("div",{className:(0,s.A)(a.funnelBar,W&&a.selected),style:{height:`${j}%`,backgroundColor:z}}),W&&(0,o.jsx)("div",{className:a.tooltip,children:(0,o.jsxs)("div",{className:a.tooltipContent,children:[(0,o.jsx)(i.A,{className:a.tooltipTitle,children:c.label}),(0,o.jsxs)(i.A,{className:a.tooltipRate,children:[c.rate.toFixed(1),"%",c.count&&` \u2022 ${c.count.toLocaleString()} items`]})]})})]})]},c.id)})})]})},w=null;try{p.displayName="ConversionFunnelChart",p.__docgenInfo={description:"ConversionFunnelChart component displays a conversion funnel with main metric and visualization",displayName:"ConversionFunnelChart",props:{mainRate:{defaultValue:null,description:"Main conversion rate to highlight",name:"mainRate",required:!0,type:{name:"number"}},changeIndicator:{defaultValue:null,description:"Change indicator (e.g., +2%, -1.5%)",name:"changeIndicator",required:!1,type:{name:"string"}},steps:{defaultValue:null,description:"Array of funnel steps",name:"steps",required:!0,type:{name:"FunnelStep[]"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#ConversionFunnelChart"]={docgenInfo:p.__docgenInfo,name:"ConversionFunnelChart",path:"../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#ConversionFunnelChart"})}catch{}try{conversionfunnelchart.displayName="conversionfunnelchart",conversionfunnelchart.__docgenInfo={description:"ConversionFunnelChart component displays a conversion funnel with main metric and visualization",displayName:"conversionfunnelchart",props:{mainRate:{defaultValue:null,description:"Main conversion rate to highlight",name:"mainRate",required:!0,type:{name:"number"}},changeIndicator:{defaultValue:null,description:"Change indicator (e.g., +2%, -1.5%)",name:"changeIndicator",required:!1,type:{name:"string"}},steps:{defaultValue:null,description:"Array of funnel steps",name:"steps",required:!0,type:{name:"FunnelStep[]"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"]={docgenInfo:conversionfunnelchart.__docgenInfo,name:"conversionfunnelchart",path:"../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"})}catch{}const S={title:"JS Packages/Charts/Types/Conversion Funnel Chart",component:p,parameters:{layout:"centered",docs:{description:{component:`
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
                `}}},tags:["autodocs"],argTypes:{mainRate:{control:{type:"number",min:0,max:100,step:.1},description:"Main conversion rate to highlight",table:{type:{summary:"number"}}},changeIndicator:{control:"text",description:"Change indicator (e.g., +2%, -1.5%)",table:{type:{summary:"string"}}},steps:{control:"object",description:"Array of funnel steps",table:{type:{summary:"FunnelStep[]"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}}},decorators:[r=>(0,o.jsx)("div",{style:{width:"600px",padding:"20px"},children:(0,o.jsx)(r,{})})]},F={args:{mainRate:10.3,changeIndicator:"+2%",steps:l.$w,loading:!1}},T={args:{mainRate:8.7,changeIndicator:"-1.6%",steps:l.Ro,loading:!1}},k={args:{mainRate:18.7,changeIndicator:"+5.2%",steps:l.hk,loading:!1}},I={args:{mainRate:10.3,steps:l.$w,loading:!1}},O={args:{mainRate:10.3,changeIndicator:"+2%",steps:l.$w,loading:!0}},P={args:{mainRate:0,steps:[],loading:!1}},N={args:{mainRate:10.3,changeIndicator:"+2%",steps:l.$w,loading:!1},decorators:[r=>(0,o.jsx)(t.N,{theme:m.QI,children:(0,o.jsx)("div",{style:{width:"600px",padding:"20px"},children:(0,o.jsx)(r,{})})})]},M={args:{mainRate:10.3,changeIndicator:"+2%",steps:l.$w,loading:!1},decorators:[r=>(0,o.jsx)(t.N,{theme:m.pk,children:(0,o.jsx)("div",{style:{width:"600px",padding:"20px"},children:(0,o.jsx)(r,{})})})]},ne=["Default","NegativeChange","HighConversion","WithoutChangeIndicator","Loading","EmptyData","JetpackTheme","WooCommerceTheme"];F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...F.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 8.7,
    changeIndicator: '-1.6%',
    steps: lowConversionFunnelData,
    loading: false
  }
}`,...T.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 18.7,
    changeIndicator: '+5.2%',
    steps: highConversionFunnelData,
    loading: false
  }
}`,...k.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    steps: ecommerceFunnelData,
    loading: false
  }
}`,...I.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: ecommerceFunnelData,
    loading: true
  }
}`,...O.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 0,
    steps: [],
    loading: false
  }
}`,...P.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/values.js":(E,u,e)=>{e.d(u,{GB:()=>s,J5:()=>t,r6:()=>m,vD:()=>l});function t(n){return n!=null}function m(n){const d=n==="";return!t(n)||d}function l(n=[],d){var C;return(C=n.find(t))!==null&&C!==void 0?C:d}const i=n=>parseFloat(n),s=n=>typeof n=="string"?i(n):n},"../charts/src/hooks/use-global-chart-theme.ts":(E,u,e)=>{e.d(u,{u:()=>C});var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),l=e("../charts/src/providers/theme/theme-provider.tsx"),i=e("../charts/src/providers/theme/themes.ts"),s=e("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),n=e.n(s);function d(y,f){return n()(y,f,{arrayMerge:(g,b)=>b})}const C=()=>{const f=(0,t.useContext)(m.mJ)?.theme,g=(0,l.R)();return(0,t.useMemo)(()=>d(f??i.zQ,g),[f,g])}},"../charts/src/providers/chart-context/global-charts-provider.tsx":(E,u,e)=>{e.d(u,{Sx:()=>s,jT:()=>n,mJ:()=>i});var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=e("../charts/src/providers/theme/themes.ts"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i=(0,t.createContext)(null),s=({children:d,theme:C={}})=>{const[y,f]=(0,t.useState)(()=>new Map),g=(0,t.useMemo)(()=>({...m.zQ,...C}),[C]),b=(0,t.useRef)(new Map);(0,t.useEffect)(()=>{b.current=new Map},[g.colors]);const a=(0,t.useCallback)((p,w)=>{f(x=>new Map(x).set(p,w))},[]),K=(0,t.useCallback)(p=>{f(w=>{const x=new Map(w);return x.delete(p),x})},[]),V=(0,t.useCallback)(p=>y.get(p),[y]),o=(0,t.useCallback)(({group:p,index:w,overrideColor:x})=>{if(x)return x;const S=g.colors??[];if(p){const F=b.current.get(p);if(F)return F;const T=b.current.size,k=S.length>0?S[T%S.length]:"#000000";return b.current.set(p,k),k}return S.length>0?S[(w||0)%S.length]:"#000000"},[g.colors]),L=(0,t.useMemo)(()=>({charts:y,registerChart:a,unregisterChart:K,getChartData:V,theme:g,resolveGroupColor:o}),[y,a,K,V,g,o]);return(0,l.jsx)(i.Provider,{value:L,children:d})},n=()=>{const d=(0,t.useContext)(i);if(!d)throw new Error("useGlobalChartsContext must be used within a GlobalChartsProvider");return d};try{s.displayName="GlobalChartsProvider",s.__docgenInfo={description:"",displayName:"GlobalChartsProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional theme override. Considered static for provider lifecycle.",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"]={docgenInfo:s.__docgenInfo,name:"GlobalChartsProvider",path:"../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(E,u,e)=>{e.d(u,{N:()=>s,R:()=>i});var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const l=(0,t.createContext)({}),i=()=>(0,t.useContext)(l),s=({theme:n={},children:d})=>(0,m.jsx)(l.Provider,{value:n,children:d});try{s.displayName="ThemeProvider",s.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:s.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{i.displayName="useChartTheme",i.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:i.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(E,u,e)=>{e.d(u,{QI:()=>m,pk:()=>l,zQ:()=>t});const t={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#80C8FF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},m={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#006DAB",secondaryColor:"#98C8DF",deltaColors:["#FF8C8F","#757575","#1F9828"]},conversionFunnelChart:{primaryColor:"#006DAB",backgroundColor:"#F3F4F6",positiveChangeColor:"#1F9828",negativeChangeColor:"#FF8C8F"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},l={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"},annotationStyles:{label:{anchorLineStroke:"black",backgroundFill:"#fff"},connector:{stroke:"black"},circleSubject:{stroke:"transparent",fill:"black",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#80C8FF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeWidth:1.5,strokeLinecap:"square"}}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.module.scss":(E,u,e)=>{e.d(u,{A:()=>n});var t=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(l),s=i()(m());s.push([E.id,'.I8mGoz_EtiIWZaoGS30E{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}.I8mGoz_EtiIWZaoGS30E.Ob8tvy5eHghStcrCJWN9{opacity:.6;pointer-events:none}.t1P88mWi34mnnAna8jci{display:flex;align-items:baseline;gap:12px;margin-bottom:24px}.Lri6uaBBla9NlUAHQsVQ{font-size:48px;font-weight:400;color:#111827;line-height:1;margin:0}.bviZD4_vlvefD9cBSYrH{font-size:20px;font-weight:600;margin:0}.ALF8tLESjw4_7HSKgK2F{display:flex;gap:16px;align-items:flex-end;height:200px}.FgGgwh0mFqmw7XWZf3Tm{flex:1;display:flex;flex-direction:column;height:100%;transition:all .3s ease}.FgGgwh0mFqmw7XWZf3Tm.HY_Ypub6UryoV4Z52Fgg{opacity:.3}.FDuo7403SUmmvh4tlqG1{margin-bottom:16px}.vY3hANMLpc4mdkW5wVHk{font-size:14px;font-weight:500;color:#6b7280;margin:0 0 4px 0;display:block}.W8dqyT3lmrRyUAXi8uuT{font-size:18px;font-weight:600;color:#111827;margin:0;display:block}.eQ8GMEvXgiOGbLDLGVEm{flex:1;display:flex;align-items:flex-end;background-color:var(--light-background-color, rgba(79, 70, 229, 0.08));border-radius:4px;position:relative;cursor:pointer;transition:all .2s ease}.eQ8GMEvXgiOGbLDLGVEm._AsHQhUE_HUVQsd4tEFP{background-color:var(--light-background-color, rgba(79, 70, 229, 0.15))}.eQ8GMEvXgiOGbLDLGVEm.jIqdqNePu7F4gG7xFLHI{cursor:pointer}.YuNWEXC589PIAwh6YjCZ{width:100%;min-height:4px;border-radius:4px 4px 0 0;transition:all .3s ease;background-color:var(--primary-color, #4f46e5)}.YuNWEXC589PIAwh6YjCZ._AsHQhUE_HUVQsd4tEFP{box-shadow:0 4px 16px rgba(0,0,0,.2);filter:brightness(1.1)}.O3KtMfuar967b3Aec47o{position:absolute;bottom:100%;left:50%;transform:translateX(-50%);margin-bottom:8px;z-index:10;pointer-events:none}.L6GOTvidD5hUlxo_KaxA{background:#fff;color:#374151;padding:12px 16px;border-radius:8px;font-size:14px;white-space:nowrap;box-shadow:0 8px 24px rgba(0,0,0,.12);border:1px solid #e5e7eb;position:relative;min-width:180px}.L6GOTvidD5hUlxo_KaxA::after{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:6px solid rgba(0,0,0,0);border-top-color:#fff}.L6GOTvidD5hUlxo_KaxA::before{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:7px solid rgba(0,0,0,0);border-top-color:#e5e7eb;z-index:-1}.G5OgIauip2Y1nwlG0JXG{font-weight:500;margin:0 0 4px 0;color:#374151;display:block;font-size:14px}.IcHjmFPjr7t2ndlpUlTR{font-weight:400;margin:0;color:#6b7280;display:block;font-size:14px}._hpEBjdJQ9LD2XAQduUa{text-align:center;padding:48px 24px;color:#6b7280;font-size:16px}@media(max-width: 640px){.I8mGoz_EtiIWZaoGS30E{padding:16px}.Lri6uaBBla9NlUAHQsVQ{font-size:36px}.bviZD4_vlvefD9cBSYrH{font-size:16px}.ALF8tLESjw4_7HSKgK2F{height:180px;gap:12px}.W8dqyT3lmrRyUAXi8uuT{font-size:16px}.vY3hANMLpc4mdkW5wVHk{font-size:12px}}',""]),s.locals={conversionFunnelChart:"I8mGoz_EtiIWZaoGS30E",loading:"Ob8tvy5eHghStcrCJWN9",mainMetric:"t1P88mWi34mnnAna8jci",mainRate:"Lri6uaBBla9NlUAHQsVQ",changeIndicator:"bviZD4_vlvefD9cBSYrH",funnelContainer:"ALF8tLESjw4_7HSKgK2F",funnelStep:"FgGgwh0mFqmw7XWZf3Tm",blurred:"HY_Ypub6UryoV4Z52Fgg",stepHeader:"FDuo7403SUmmvh4tlqG1",stepLabel:"vY3hANMLpc4mdkW5wVHk",stepRate:"W8dqyT3lmrRyUAXi8uuT",barContainer:"eQ8GMEvXgiOGbLDLGVEm",selected:"_AsHQhUE_HUVQsd4tEFP",disabled:"jIqdqNePu7F4gG7xFLHI",funnelBar:"YuNWEXC589PIAwh6YjCZ",tooltip:"O3KtMfuar967b3Aec47o",tooltipContent:"L6GOTvidD5hUlxo_KaxA",tooltipTitle:"G5OgIauip2Y1nwlG0JXG",tooltipRate:"IcHjmFPjr7t2ndlpUlTR",emptyState:"_hpEBjdJQ9LD2XAQduUa"};const n=s}}]);
