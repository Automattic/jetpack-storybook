"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[201],{"../charts/src/components/conversion-funnel-chart/stories/index.stories.tsx":(v,h,a)=>{a.r(h),a.d(h,{Default:()=>A,EmptyData:()=>w,HighConversion:()=>T,JetpackTheme:()=>R,Loading:()=>j,NegativeChange:()=>E,WithoutChangeIndicator:()=>D,WooCommerceTheme:()=>I,__namedExportsOrder:()=>ee,default:()=>J});var i=a("../charts/src/providers/theme/theme-provider.tsx"),t=a("../charts/src/providers/theme/themes.ts"),l=a("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.js"),m=a("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),e=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=a("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=a.n(n),d=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.module.scss"),p={};p.insert="head",p.singleton=!1;var C=u()(d.A,p);const r=d.A.locals||{},g=()=>{const[s,f]=(0,e.useState)(null),_=(0,e.useCallback)(b=>{f(s===b?null:b)},[s]),x=(0,e.useCallback)((b,S)=>{S.key==="Enter"||S.key===" "?(S.preventDefault(),f(s===b?null:b)):S.key==="Escape"&&(S.preventDefault(),f(null))},[s]),F=(0,e.useCallback)(()=>{f(null)},[]),O=(0,e.useCallback)(b=>({isClicked:s===b,isBlurred:s!==null&&s!==b}),[s]);return{clickedStep:s,handleBarClick:_,handleBarKeyDown:x,clearSelection:F,getStepState:O}},y=(s,f)=>{if(typeof s!="string")throw new Error("Hex color must be a string");if(!s.startsWith("#"))throw new Error("Hex color must start with #");if(s.length!==7)throw new Error("Hex color must be 7 characters long (e.g., #ff0000)");const _=s.slice(1);if(!/^[0-9a-fA-F]{6}$/.test(_))throw new Error("Hex color contains invalid characters. Only 0-9, a-f, A-F are allowed");if(typeof f!="number"||isNaN(f))throw new Error("Alpha must be a number");const x=parseInt(s.slice(1,3),16),F=parseInt(s.slice(3,5),16),O=parseInt(s.slice(5,7),16);return`rgba(${x}, ${F}, ${O}, ${f})`};var o=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const G={primaryColor:"#4F46E5",backgroundColor:"#F3F4F6",positiveChangeColor:"#10B981",negativeChangeColor:"#EF4444"},M=({mainRate:s,changeIndicator:f,steps:_,loading:x=!1,className:F,style:O})=>{const b=(0,i.RW)(),S=(0,e.useRef)(null),P=(0,e.useRef)(null),{handleBarClick:K,handleBarKeyDown:V,clearSelection:Y,getStepState:te}=g(),z=(0,e.useCallback)(()=>{Y(),P.current=null},[Y]),X=(0,e.useMemo)(()=>{const c=new Map;return _.forEach(k=>{const W=B=>{B.stopPropagation(),P.current=B.currentTarget,K(k.id)},N=B=>{P.current=B.currentTarget,V(k.id,B)};c.set(k.id,{onClick:W,onKeyDown:N})}),c},[_,K,V]);(0,e.useEffect)(()=>{const c=k=>{P.current&&!P.current.contains(k.target)&&z()};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[z]);const H=b.conversionFunnelChart,U=H?.primaryColor||G.primaryColor,ae=H?.positiveChangeColor||G.positiveChangeColor,ne=H?.negativeChangeColor||G.negativeChangeColor,Q=f?.startsWith("+")?ae:ne,re=y(U,.08),Z={"--primary-color":U,"--light-background-color":re,"--change-color":Q,...O};if(!_||_.length===0)return(0,o.jsx)("div",{className:(0,m.A)(r.conversionFunnelChart,x&&r.loading,F),style:Z,children:(0,o.jsx)("div",{className:r.emptyState,children:x?"Loading...":"No data available"})});const oe=Math.max(..._.map(c=>c.rate));return(0,o.jsxs)("div",{ref:S,className:(0,m.A)(r.conversionFunnelChart,x&&r.loading,F),style:Z,children:[(0,o.jsxs)("div",{className:r.mainMetric,children:[(0,o.jsxs)(l.A,{className:r.mainRate,children:[s.toFixed(1),"%"]}),f&&(0,o.jsx)(l.A,{className:r.changeIndicator,style:{color:Q},children:f})]}),(0,o.jsx)("div",{className:r.funnelContainer,children:_.map(c=>{const k=c.rate/oe*100,{isClicked:W,isBlurred:N}=te(c.id);return(0,o.jsxs)("div",{className:(0,m.A)(r.funnelStep,N&&r.blurred),children:[(0,o.jsxs)("div",{className:r.stepHeader,children:[(0,o.jsx)(l.A,{className:r.stepLabel,children:c.label}),(0,o.jsxs)(l.A,{className:r.stepRate,children:[c.rate.toFixed(1),"%"]})]}),(0,o.jsxs)("div",{className:(0,m.A)(r.barContainer,W&&r.selected,N&&r.disabled),onClick:X.get(c.id)?.onClick,onKeyDown:X.get(c.id)?.onKeyDown,role:"button",tabIndex:N?-1:0,"aria-label":c.label,children:[(0,o.jsx)("div",{className:(0,m.A)(r.funnelBar,W&&r.selected),style:{height:`${k}%`,backgroundColor:U}}),W&&(0,o.jsx)("div",{className:r.tooltip,children:(0,o.jsxs)("div",{className:r.tooltipContent,children:[(0,o.jsx)(l.A,{className:r.tooltipTitle,children:c.label}),(0,o.jsxs)(l.A,{className:r.tooltipRate,children:[c.rate.toFixed(1),"%",c.count&&` \u2022 ${c.count.toLocaleString()} items`]})]})})]})]},c.id)})})]})},se=null;try{M.displayName="ConversionFunnelChart",M.__docgenInfo={description:"ConversionFunnelChart component displays a conversion funnel with main metric and visualization",displayName:"ConversionFunnelChart",props:{mainRate:{defaultValue:null,description:"Main conversion rate to highlight",name:"mainRate",required:!0,type:{name:"number"}},changeIndicator:{defaultValue:null,description:"Change indicator (e.g., +2%, -1.5%)",name:"changeIndicator",required:!1,type:{name:"string"}},steps:{defaultValue:null,description:"Array of funnel steps",name:"steps",required:!0,type:{name:"FunnelStep[]"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#ConversionFunnelChart"]={docgenInfo:M.__docgenInfo,name:"ConversionFunnelChart",path:"../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#ConversionFunnelChart"})}catch{}try{conversionfunnelchart.displayName="conversionfunnelchart",conversionfunnelchart.__docgenInfo={description:"ConversionFunnelChart component displays a conversion funnel with main metric and visualization",displayName:"conversionfunnelchart",props:{mainRate:{defaultValue:null,description:"Main conversion rate to highlight",name:"mainRate",required:!0,type:{name:"number"}},changeIndicator:{defaultValue:null,description:"Change indicator (e.g., +2%, -1.5%)",name:"changeIndicator",required:!1,type:{name:"string"}},steps:{defaultValue:null,description:"Array of funnel steps",name:"steps",required:!0,type:{name:"FunnelStep[]"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"]={docgenInfo:conversionfunnelchart.__docgenInfo,name:"conversionfunnelchart",path:"../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.tsx#conversionfunnelchart"})}catch{}const L=[{id:"sessions",label:"Sessions",rate:100,count:1e4},{id:"cart",label:"Cart",rate:71.1,count:7110},{id:"checkout",label:"Checkout",rate:52.5,count:5250},{id:"purchase",label:"Purchase",rate:10.3,count:1030}],$=[{id:"sessions",label:"Sessions",rate:100,count:5e3},{id:"cart",label:"Cart",rate:45.2,count:2260},{id:"checkout",label:"Checkout",rate:28.8,count:1440},{id:"purchase",label:"Purchase",rate:6.4,count:320}],q=[{id:"sessions",label:"Sessions",rate:100,count:8e3},{id:"cart",label:"Cart",rate:85.3,count:6824},{id:"checkout",label:"Checkout",rate:72.1,count:5768},{id:"purchase",label:"Purchase",rate:18.7,count:1496}],ie=[{id:"visitors",label:"Visitors",rate:100,count:15e3},{id:"trial",label:"Trial Signup",rate:12.5,count:1875},{id:"activation",label:"Activated",rate:8.2,count:1230},{id:"subscription",label:"Paid Plan",rate:3.1,count:465}],J={title:"JS Packages/Charts/Types/Conversion Funnel Chart",component:M,parameters:{layout:"centered",docs:{description:{component:`
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
                `}}},tags:["autodocs"],argTypes:{mainRate:{control:{type:"number",min:0,max:100,step:.1},description:"Main conversion rate to highlight",table:{type:{summary:"number"}}},changeIndicator:{control:"text",description:"Change indicator (e.g., +2%, -1.5%)",table:{type:{summary:"string"}}},steps:{control:"object",description:"Array of funnel steps",table:{type:{summary:"FunnelStep[]"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}}},decorators:[s=>(0,o.jsx)("div",{style:{width:"600px",padding:"20px"},children:(0,o.jsx)(s,{})})]},A={args:{mainRate:10.3,changeIndicator:"+2%",steps:L,loading:!1}},E={args:{mainRate:8.7,changeIndicator:"-1.6%",steps:$,loading:!1}},T={args:{mainRate:18.7,changeIndicator:"+5.2%",steps:q,loading:!1}},D={args:{mainRate:10.3,steps:L,loading:!1}},j={args:{mainRate:10.3,changeIndicator:"+2%",steps:L,loading:!0}},w={args:{mainRate:0,steps:[],loading:!1}},R={args:{mainRate:10.3,changeIndicator:"+2%",steps:L,loading:!1},decorators:[s=>(0,o.jsx)(i.NP,{theme:t.QI,children:(0,o.jsx)("div",{style:{width:"600px",padding:"20px"},children:(0,o.jsx)(s,{})})})]},I={args:{mainRate:10.3,changeIndicator:"+2%",steps:L,loading:!1},decorators:[s=>(0,o.jsx)(i.NP,{theme:t.pk,children:(0,o.jsx)("div",{style:{width:"600px",padding:"20px"},children:(0,o.jsx)(s,{})})})]},ee=["Default","NegativeChange","HighConversion","WithoutChangeIndicator","Loading","EmptyData","JetpackTheme","WooCommerceTheme"];A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: sampleFunnelData,
    loading: false
  }
}`,...A.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 8.7,
    changeIndicator: '-1.6%',
    steps: lowConversionData,
    loading: false
  }
}`,...E.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 18.7,
    changeIndicator: '+5.2%',
    steps: highConversionData,
    loading: false
  }
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    steps: sampleFunnelData,
    loading: false
  }
}`,...D.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 10.3,
    changeIndicator: '+2%',
    steps: sampleFunnelData,
    loading: true
  }
}`,...j.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    mainRate: 0,
    steps: [],
    loading: false
  }
}`,...w.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js":(v,h,a)=>{a.d(h,{A:()=>m});var i=a("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/colors.js");function t(){return t=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var u=arguments[n];for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(e[d]=u[d])}return e},t.apply(this,arguments)}var l={fontFamily:"-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",fontWeight:700,fontSize:12,textAnchor:"middle",pointerEvents:"none",letterSpacing:.4};function m(e){var n,u,d,p,C,r,g=t({},l,{fill:i.hk,stroke:"none"},e.svgLabelBig),y=t({},l,{fontWeight:200,fontSize:11,fill:i.hk,stroke:"none"},e.svgLabelSmall),o=t({color:(n=(u=(d=(p=e.htmlLabel)==null?void 0:p.color)!=null?d:(C=e.svgLabelBig)==null?void 0:C.fill)!=null?u:(r=e.svgLabelSmall)==null?void 0:r.fill)!=null?n:i.hk},l,e.htmlLabel);return{backgroundColor:e.backgroundColor,colors:[].concat(e.colors),htmlLabel:t({},o),svgLabelSmall:t({},y),svgLabelBig:t({},g),gridStyles:t({stroke:e.gridColor,strokeWidth:1},e.gridStyles),axisStyles:{x:{top:{axisLabel:t({},g,{dy:"-0.25em"}),axisLine:t({stroke:e.gridColorDark,strokeWidth:2},e.xAxisLineStyles),tickLabel:t({},y,{dy:"-0.25em"}),tickLength:e.tickLength,tickLine:t({strokeWidth:1,stroke:e.gridColor},e.xTickLineStyles)},bottom:{axisLabel:t({},g,{dy:"-0.25em"}),axisLine:t({stroke:e.gridColorDark,strokeWidth:2},e.xAxisLineStyles),tickLabel:t({},y,{dy:"0.125em"}),tickLength:e.tickLength,tickLine:t({strokeWidth:1,stroke:e.gridColor},e.xTickLineStyles)}},y:{left:{axisLabel:t({},g,{dx:"-1.25em"}),axisLine:t({stroke:e.gridColor,strokeWidth:1},e.yAxisLineStyles),tickLabel:t({},y,{textAnchor:"end",dx:"-0.25em",dy:"0.25em"}),tickLength:e.tickLength,tickLine:t({strokeWidth:1,stroke:e.gridColor},e.yTickLineStyles)},right:{axisLabel:t({},g,{dx:"1.25em"}),axisLine:t({stroke:e.gridColor,strokeWidth:1},e.yAxisLineStyles),tickLabel:t({},y,{textAnchor:"start",dx:"0.25em",dy:"0.25em"}),tickLength:e.tickLength,tickLine:t({strokeWidth:1,stroke:e.gridColor},e.yTickLineStyles)}}}}}},"../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/colors.js":(v,h,a)=>{a.d(h,{Ag:()=>t,IO:()=>m,hk:()=>l});var i={red:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],pink:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],grape:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],violet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],indigo:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],blue:["#e8f7ff","#ccedff","#a3daff","#72c3fc","#4dadf7","#329af0","#228ae6","#1c7cd6","#1b6ec2","#1862ab"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],teal:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],green:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],lime:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],yellow:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],orange:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"],gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"]},t=i.gray,l=t[7],m=[i.cyan[9],i.cyan[3],i.yellow[5],i.red[4],i.grape[8],i.grape[5],i.pink[9]]},"../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/values.js":(v,h,a)=>{a.d(h,{GB:()=>e,J5:()=>i,r6:()=>t,vD:()=>l});function i(n){return n!=null}function t(n){const u=n==="";return!i(n)||u}function l(n=[],u){var d;return(d=n.find(i))!==null&&d!==void 0?d:u}const m=n=>parseFloat(n),e=n=>typeof n=="string"?m(n):n},"../charts/src/providers/theme/theme-provider.tsx":(v,h,a)=>{a.d(h,{NP:()=>d,Ox:()=>u,RW:()=>n});var i=a("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),t=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=a("../charts/src/providers/theme/themes.ts"),m=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const e=(0,t.createContext)(l.zQ),n=()=>(0,t.useContext)(e),u=p=>{const C=n();return(0,t.useMemo)(()=>{const r=(p??[]).map(g=>g.options?.stroke).filter(g=>!!g);return(0,i.A)({...C,colors:[...r,...C.colors??[]]})},[C,p])},d=({theme:p={},children:C})=>{const r={...l.zQ,...p};return(0,m.jsx)(e.Provider,{value:r,children:C})};try{d.displayName="ThemeProvider",d.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:d.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{n.displayName="useChartTheme",n.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:n.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}try{u.displayName="useXYChartTheme",u.__docgenInfo={description:"",displayName:"useXYChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"]={docgenInfo:u.__docgenInfo,name:"useXYChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(v,h,a)=>{a.d(h,{QI:()=>t,pk:()=>l,zQ:()=>i});const i={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#80C8FF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},t={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#006DAB",secondaryColor:"#98C8DF",deltaColors:["#FF8C8F","#757575","#1F9828"]},conversionFunnelChart:{primaryColor:"#006DAB",backgroundColor:"#F3F4F6",positiveChangeColor:"#1F9828",negativeChangeColor:"#FF8C8F"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},l={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"},annotationStyles:{label:{anchorLineStroke:"black",backgroundFill:"#fff"},connector:{stroke:"black"},circleSubject:{stroke:"transparent",fill:"black",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#80C8FF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeWidth:1.5,strokeLinecap:"square"}}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/conversion-funnel-chart/conversion-funnel-chart.module.scss":(v,h,a)=>{a.d(h,{A:()=>n});var i=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=a.n(i),l=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),m=a.n(l),e=m()(t());e.push([v.id,'.I8mGoz_EtiIWZaoGS30E{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}.I8mGoz_EtiIWZaoGS30E.Ob8tvy5eHghStcrCJWN9{opacity:.6;pointer-events:none}.t1P88mWi34mnnAna8jci{display:flex;align-items:baseline;gap:12px;margin-bottom:24px}.Lri6uaBBla9NlUAHQsVQ{font-size:48px;font-weight:400;color:#111827;line-height:1;margin:0}.bviZD4_vlvefD9cBSYrH{font-size:20px;font-weight:600;margin:0}.ALF8tLESjw4_7HSKgK2F{display:flex;gap:16px;align-items:flex-end;height:200px}.FgGgwh0mFqmw7XWZf3Tm{flex:1;display:flex;flex-direction:column;height:100%;transition:all .3s ease}.FgGgwh0mFqmw7XWZf3Tm.HY_Ypub6UryoV4Z52Fgg{opacity:.3}.FDuo7403SUmmvh4tlqG1{margin-bottom:16px}.vY3hANMLpc4mdkW5wVHk{font-size:14px;font-weight:500;color:#6b7280;margin:0 0 4px 0;display:block}.W8dqyT3lmrRyUAXi8uuT{font-size:18px;font-weight:600;color:#111827;margin:0;display:block}.eQ8GMEvXgiOGbLDLGVEm{flex:1;display:flex;align-items:flex-end;background-color:var(--light-background-color, rgba(79, 70, 229, 0.08));border-radius:4px;position:relative;cursor:pointer;transition:all .2s ease}.eQ8GMEvXgiOGbLDLGVEm._AsHQhUE_HUVQsd4tEFP{background-color:var(--light-background-color, rgba(79, 70, 229, 0.15))}.eQ8GMEvXgiOGbLDLGVEm.jIqdqNePu7F4gG7xFLHI{cursor:pointer}.YuNWEXC589PIAwh6YjCZ{width:100%;min-height:4px;border-radius:4px 4px 0 0;transition:all .3s ease;background-color:var(--primary-color, #4f46e5)}.YuNWEXC589PIAwh6YjCZ._AsHQhUE_HUVQsd4tEFP{box-shadow:0 4px 16px rgba(0,0,0,.2);filter:brightness(1.1)}.O3KtMfuar967b3Aec47o{position:absolute;bottom:100%;left:50%;transform:translateX(-50%);margin-bottom:8px;z-index:10;pointer-events:none}.L6GOTvidD5hUlxo_KaxA{background:#fff;color:#374151;padding:12px 16px;border-radius:8px;font-size:14px;white-space:nowrap;box-shadow:0 8px 24px rgba(0,0,0,.12);border:1px solid #e5e7eb;position:relative;min-width:180px}.L6GOTvidD5hUlxo_KaxA::after{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:6px solid rgba(0,0,0,0);border-top-color:#fff}.L6GOTvidD5hUlxo_KaxA::before{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:7px solid rgba(0,0,0,0);border-top-color:#e5e7eb;z-index:-1}.G5OgIauip2Y1nwlG0JXG{font-weight:500;margin:0 0 4px 0;color:#374151;display:block;font-size:14px}.IcHjmFPjr7t2ndlpUlTR{font-weight:400;margin:0;color:#6b7280;display:block;font-size:14px}._hpEBjdJQ9LD2XAQduUa{text-align:center;padding:48px 24px;color:#6b7280;font-size:16px}@media(max-width: 640px){.I8mGoz_EtiIWZaoGS30E{padding:16px}.Lri6uaBBla9NlUAHQsVQ{font-size:36px}.bviZD4_vlvefD9cBSYrH{font-size:16px}.ALF8tLESjw4_7HSKgK2F{height:180px;gap:12px}.W8dqyT3lmrRyUAXi8uuT{font-size:16px}.vY3hANMLpc4mdkW5wVHk{font-size:12px}}',""]),e.locals={conversionFunnelChart:"I8mGoz_EtiIWZaoGS30E",loading:"Ob8tvy5eHghStcrCJWN9",mainMetric:"t1P88mWi34mnnAna8jci",mainRate:"Lri6uaBBla9NlUAHQsVQ",changeIndicator:"bviZD4_vlvefD9cBSYrH",funnelContainer:"ALF8tLESjw4_7HSKgK2F",funnelStep:"FgGgwh0mFqmw7XWZf3Tm",blurred:"HY_Ypub6UryoV4Z52Fgg",stepHeader:"FDuo7403SUmmvh4tlqG1",stepLabel:"vY3hANMLpc4mdkW5wVHk",stepRate:"W8dqyT3lmrRyUAXi8uuT",barContainer:"eQ8GMEvXgiOGbLDLGVEm",selected:"_AsHQhUE_HUVQsd4tEFP",disabled:"jIqdqNePu7F4gG7xFLHI",funnelBar:"YuNWEXC589PIAwh6YjCZ",tooltip:"O3KtMfuar967b3Aec47o",tooltipContent:"L6GOTvidD5hUlxo_KaxA",tooltipTitle:"G5OgIauip2Y1nwlG0JXG",tooltipRate:"IcHjmFPjr7t2ndlpUlTR",emptyState:"_hpEBjdJQ9LD2XAQduUa"};const n=e}}]);
