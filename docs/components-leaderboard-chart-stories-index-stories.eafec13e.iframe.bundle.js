"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8145],{"../charts/src/components/leaderboard-chart/stories/index.stories.tsx":(_,u,r)=>{r.r(u),r.d(u,{AdvancedFormatting:()=>I,CurrencyFormatting:()=>N,CustomColors:()=>k,CustomLabel:()=>R,Default:()=>E,EmptyData:()=>A,JetpackTheme:()=>G,LargeValues:()=>M,Loading:()=>O,NegativeGrowth:()=>P,NumberFormatting:()=>W,OverlayLabelWithImage:()=>U,SmallDataset:()=>B,WithOverlayLabel:()=>T,WithoutComparison:()=>L,WooCommerceTheme:()=>K,__namedExportsOrder:()=>ie,default:()=>le});var o=r("../charts/src/providers/theme/theme-provider.tsx"),i=r("../charts/src/providers/theme/themes.ts"),l=r("../number-formatters/src/index.ts");const t=(e,v="number",{decimals:m,useMultipliers:Y=!1,signDisplay:f}={})=>{if(e==null)return"";const C=Number(e);if(isNaN(C))return"";switch(v){case"currency":return`$${Y?(0,l.qe)(C,{decimals:m??2,numberFormatOptions:{maximumFractionDigits:m??2,signDisplay:f}}):(0,l.ZV)(C,{decimals:m??2,numberFormatOptions:{signDisplay:f}})}`;case"average":return Number.isFinite(C)?(0,l.ZV)(C,{decimals:m??0,numberFormatOptions:{style:"percent",signDisplay:f??"exceptZero"}}):"\u2014";case"number":default:return Y?(0,l.qe)(C,{decimals:m??0,numberFormatOptions:{maximumFractionDigits:m??0,signDisplay:f}}):(0,l.ZV)(C,{decimals:m??0,numberFormatOptions:{signDisplay:f}})}};var s=r("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.js"),d=r("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/progress-bar/index.js"),p=r("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/grid/component.js"),S=r("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js"),h=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=r("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),y=r("../charts/src/hooks/use-global-chart-theme.ts"),b=r("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Z=r.n(b),w=r("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/leaderboard-chart/leaderboard-chart.module.scss"),V={};V.insert="head",V.singleton=!1;var F=Z()(w.A,V);const n=w.A.locals||{};var a=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const x={labelSpacing:1.5,rowGap:12,columnGap:4,primaryColor:"#3858E9",secondaryColor:"#66BDFF",deltaColors:["#D63638","#757575","#008A20"]},re=e=>t(e,"number",{useMultipliers:!0,decimals:1}),ae=e=>t(e/100,"average",{decimals:0,signDisplay:"exceptZero"}),oe=({entry:e})=>(0,a.jsxs)("div",{className:n.progressContainerWithOverlayLabel,children:[typeof e.label=="string"?(0,a.jsx)(s.A,{className:n.progressBarLabel,children:e.label}):e.label,(0,a.jsx)("div",{className:n.progressBar,style:{width:e.currentShare+"%"}})]}),te=({entry:e,withComparison:v})=>(0,a.jsxs)(a.Fragment,{children:[typeof e.label=="string"?(0,a.jsx)(s.A,{children:e.label}):e.label,(0,a.jsxs)("div",{className:n.progressContainer,children:[(0,a.jsx)(d.A,{value:e.currentShare,className:(0,c.A)(n.progressBar,n.primaryBar)}),v&&(0,a.jsx)(d.A,{value:e.previousShare,className:(0,c.A)(n.progressBar,n.secondaryBar)})]})]}),J=({data:e,withComparison:v=!1,withOverlayLabel:m=!1,primaryColor:Y,secondaryColor:f,valueFormatter:C=re,deltaFormatter:X=ae,loading:q=!1,className:$,style:de})=>{const D=(0,y.u)().leaderboardChart,ce=D?.labelSpacing??x.labelSpacing,ue=D?.rowGap??x.rowGap,me=D?.columnGap??x.columnGap,pe=Y||D?.primaryColor||x.primaryColor,he=f||D?.secondaryColor||x.secondaryColor,ge=D?.deltaColors??x.deltaColors,ee={"--primary-color":pe,"--secondary-color":he,...de};return!e||e.length===0?(0,a.jsx)("div",{className:(0,c.A)(n.leaderboardChart,q&&n.loading,$),style:ee,children:(0,a.jsx)("div",{className:n.emptyState,children:q?"Loading...":"No data available"})}):(0,a.jsx)(p.A,{className:(0,c.A)(n.leaderboardChart,q&&n.loading,$),templateColumns:"minmax(0, 1fr) auto",rowGap:ue,columnGap:me,style:ee,children:e.map(j=>{const Ce=Math.sign(j.delta)+1,ye=ge[Ce];return(0,a.jsxs)(h.Fragment,{children:[(0,a.jsx)(S.A,{spacing:ce,children:m?(0,a.jsx)(oe,{entry:j}):(0,a.jsx)(te,{entry:j,withComparison:v})}),(0,a.jsxs)("div",{className:(0,c.A)(n.valueContainer,{[n.overlayLabel]:m}),children:[(0,a.jsx)(s.A,{children:C(j.currentValue)}),v&&(0,a.jsx)(s.A,{style:{color:ye},children:X(j.delta)})]})]},j.id)})})},ve=null;try{J.displayName="LeaderboardChart",J.__docgenInfo={description:`LeaderboardChart component displays a ranked list of data with progress bars
and optional comparison values.`,displayName:"LeaderboardChart",props:{data:{defaultValue:null,description:"Array of leaderboard entries to display",name:"data",required:!0,type:{name:"LeaderboardEntry[]"}},withComparison:{defaultValue:{value:"false"},description:"Whether to show comparison data",name:"withComparison",required:!1,type:{name:"boolean"}},withOverlayLabel:{defaultValue:{value:"false"},description:"Whether to overlay the label on top of bar",name:"withOverlayLabel",required:!1,type:{name:"boolean"}},primaryColor:{defaultValue:null,description:"Primary color for current period bars",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:null,description:"Secondary color for comparison period bars",name:"secondaryColor",required:!1,type:{name:"string"}},valueFormatter:{defaultValue:{value:`( value: number ): string => {
	return formatMetricValue( value, 'number', {
		useMultipliers: true,
		decimals: 1,
	} );
}`},description:"Formatter for values",name:"valueFormatter",required:!1,type:{name:"(value: number) => string"}},deltaFormatter:{defaultValue:{value:`( value: number ): string => {
	return formatMetricValue( value / 100, 'average', {
		decimals: 0,
		signDisplay: 'exceptZero',
	} );
}`},description:"Formatter for delta values",name:"deltaFormatter",required:!1,type:{name:"(value: number) => string"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling for the chart container",name:"style",required:!1,type:{name:"CSSProperties & { '--bar-border'?: string; '--primary-color'?: string; '--secondary-color'?: string; }"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#LeaderboardChart"]={docgenInfo:J.__docgenInfo,name:"LeaderboardChart",path:"../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#LeaderboardChart"})}catch{}try{leaderboardchart.displayName="leaderboardchart",leaderboardchart.__docgenInfo={description:`LeaderboardChart component displays a ranked list of data with progress bars
and optional comparison values.`,displayName:"leaderboardchart",props:{data:{defaultValue:null,description:"Array of leaderboard entries to display",name:"data",required:!0,type:{name:"LeaderboardEntry[]"}},withComparison:{defaultValue:{value:"false"},description:"Whether to show comparison data",name:"withComparison",required:!1,type:{name:"boolean"}},withOverlayLabel:{defaultValue:{value:"false"},description:"Whether to overlay the label on top of bar",name:"withOverlayLabel",required:!1,type:{name:"boolean"}},primaryColor:{defaultValue:null,description:"Primary color for current period bars",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:null,description:"Secondary color for comparison period bars",name:"secondaryColor",required:!1,type:{name:"string"}},valueFormatter:{defaultValue:{value:`( value: number ): string => {
	return formatMetricValue( value, 'number', {
		useMultipliers: true,
		decimals: 1,
	} );
}`},description:"Formatter for values",name:"valueFormatter",required:!1,type:{name:"(value: number) => string"}},deltaFormatter:{defaultValue:{value:`( value: number ): string => {
	return formatMetricValue( value / 100, 'average', {
		decimals: 0,
		signDisplay: 'exceptZero',
	} );
}`},description:"Formatter for delta values",name:"deltaFormatter",required:!1,type:{name:"(value: number) => string"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling for the chart container",name:"style",required:!1,type:{name:"CSSProperties & { '--bar-border'?: string; '--primary-color'?: string; '--secondary-color'?: string; }"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#leaderboardchart"]={docgenInfo:leaderboardchart.__docgenInfo,name:"leaderboardchart",path:"../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#leaderboardchart"})}catch{}const g=[{id:"direct",label:"Direct",currentValue:12500,previousValue:1e4,currentShare:100,previousShare:80,delta:25},{id:"social",label:"Social Media",currentValue:8750,previousValue:9500,currentShare:70,previousShare:76,delta:-7.9},{id:"email",label:"Email Marketing",currentValue:6250,previousValue:5800,currentShare:50,previousShare:46,delta:7.8},{id:"search",label:"Search Engine",currentValue:4375,previousValue:4200,currentShare:35,previousShare:33,delta:4.2}],se=[{id:"direct",label:"Direct",currentValue:12500,previousValue:1e4,currentShare:100,previousShare:80,delta:25},{id:"social",label:"Social Media",currentValue:8750,previousValue:9500,currentShare:70,previousShare:76,delta:-7.9}],z=[{id:"large1",label:"Large Value 1",currentValue:125e4,previousValue:1e6,currentShare:100,previousShare:80,delta:25},{id:"large2",label:"Large Value 2",currentValue:875e3,previousValue:95e4,currentShare:70,previousShare:76,delta:-7.9},{id:"large3",label:"Large Value 3",currentValue:625e3,previousValue:58e4,currentShare:50,previousShare:46,delta:7.8}],ne=[{id:"negative1",label:"Declining Channel",currentValue:5e3,previousValue:8e3,currentShare:62.5,previousShare:100,delta:-37.5},{id:"negative2",label:"Another Declining",currentValue:3e3,previousValue:6e3,currentShare:37.5,previousShare:75,delta:-50},{id:"negative3",label:"Slight Decline",currentValue:4500,previousValue:4800,currentShare:56.25,previousShare:60,delta:-6.25}],H=[{id:"direct",label:"Direct",currentValue:12500,previousValue:1e4,currentShare:100,previousShare:80,delta:25,imageColor:"#007aff"},{id:"social",label:"Social Media",currentValue:8750,previousValue:9500,currentShare:30,previousShare:76,delta:-7.9,imageColor:"#ffc0cb"},{id:"referral",label:"Referral",currentValue:8750,previousValue:9500,currentShare:10,previousShare:16,delta:-7.9,imageColor:"#00ff00"}],le={title:"JS Packages/Charts/Types/Leaderboard Chart",component:J,parameters:{layout:"centered",docs:{description:{component:`
A flexible and accessible leaderboard chart component for displaying ranked data with WordPress ProgressBar components and optional comparison values.

## Features

- \u{1F4CA} Clean, responsive leaderboard visualization
- \u{1F3A8} Customizable colors and styling  
- \u{1F504} Optional comparison data support
- \u{1F4F1} Mobile-friendly design
- \u{1F3AF} TypeScript support with full type definitions
- \u267F Accessible design
- \u{1F9EA} Comprehensive test coverage

## Usage

### Basic Usage

\`\`\`typescript
import { LeaderboardChart } from '@automattic/charts';

const data = [
  {
    id: 'direct',
    label: 'Direct',
    currentValue: 12500,
    previousValue: 10000,
    currentShare: 100,
    previousShare: 80,
    delta: 25,
  },
  // ... more entries
];

function MyComponent() {
  return (
    <LeaderboardChart
      data={data}
      withComparison={true}
      primaryColor="#3858E9"
      secondaryColor="#66BDFF"
    />
  );
}
\`\`\`

### With Custom Formatters

\`\`\`typescript
import { LeaderboardChart } from '@automattic/charts';

function CustomFormattedChart() {
  return (
    <LeaderboardChart
      data={data}
      withComparison={true}
      valueFormatter={(value) => \`$\${(value / 1000).toFixed(1)}k\`}
      deltaFormatter={(value) => \`\${value > 0 ? '+' : ''}\${value}%\`}
    />
  );
}
\`\`\`

### Preparing Your Data

The LeaderboardChart expects pre-processed data. You'll need to transform your raw data into the required format:

\`\`\`typescript
import { LeaderboardChart } from '@automattic/charts';

// Transform your raw data into LeaderboardEntry format
function transformRawData(rawData) {
  const maxValue = Math.max(...rawData.map(item => item.current_period.value));
  
  return rawData.map(item => ({
    id: item.id,
    label: item.name,
    currentValue: item.current_period.value,
    previousValue: item.previous_period.value,
    currentShare: (item.current_period.value / maxValue) * 100,
    previousShare: (item.previous_period.value / maxValue) * 100,
    delta: ((item.current_period.value - item.previous_period.value) / item.previous_period.value) * 100,
  }));
}

function ProcessedDataChart() {
  const processedData = transformRawData(rawData);
  
  return (
    <LeaderboardChart
      data={processedData}
      withComparison={true}
    />
  );
}
\`\`\`

## LeaderboardEntry Interface

\`\`\`typescript
interface LeaderboardEntry {
  id: string;              // Unique identifier
  label: string;           // Display name
  currentValue: number;    // Current period value
  previousValue: number;   // Previous period value
  currentShare: number;    // Current bar width (0-100)
  previousShare: number;   // Previous bar width (0-100)
  delta: number;           // Percentage change
}
\`\`\`

## Data Transformation

Since the LeaderboardChart expects pre-processed data, you'll need to handle data transformation in your application. This gives you full control over how your specific data structures are converted and allows for custom business logic.

## Styling

The component uses CSS Modules for styling. You can customize colors using CSS custom properties:

\`\`\`css
.myCustomChart {
  --primary-color: #ff6b6b;
  --secondary-color: #4ecdc4;
    --bar-border: 1px solid 8px;
}
\`\`\`

## Accessibility

The component includes:
- Semantic HTML structure
- Proper color contrast ratios
- Keyboard navigation support
- Screen reader compatible markup

## Examples

### E-commerce Sales Channels

\`\`\`typescript
const salesData = [
  { id: 'organic', label: 'Organic Search', currentValue: 45000, previousValue: 38000, currentShare: 100, previousShare: 84, delta: 18 },
  { id: 'paid', label: 'Paid Advertising', currentValue: 32000, previousValue: 35000, currentShare: 71, previousShare: 78, delta: -9 },
  { id: 'social', label: 'Social Media', currentValue: 18000, previousValue: 15000, currentShare: 40, previousShare: 33, delta: 20 },
  { id: 'email', label: 'Email Marketing', currentValue: 12000, previousValue: 11000, currentShare: 27, previousShare: 24, delta: 9 },
];

<LeaderboardChart data={salesData} withComparison={true} />
\`\`\`

### Traffic Sources

\`\`\`typescript
const trafficData = [
  { id: 'direct', label: 'Direct', currentValue: 15420, previousValue: 13200, currentShare: 100, previousShare: 86, delta: 17 },
  { id: 'search', label: 'Search Engines', currentValue: 12350, previousValue: 11800, currentShare: 80, previousShare: 77, delta: 5 },
  { id: 'social', label: 'Social Networks', currentValue: 8760, previousValue: 9200, currentShare: 57, previousShare: 60, delta: -5 },
];

<LeaderboardChart data={trafficData} withComparison={true} />
\`\`\`
                `}}},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of leaderboard entries to display",table:{type:{summary:"LeaderboardEntry[]"}}},withComparison:{control:"boolean",description:"Whether to show comparison data (previous period bars and delta values)",table:{defaultValue:{summary:"false"}}},primaryColor:{control:"color",description:"Primary color for current period bars",table:{defaultValue:{summary:"#3858E9"}}},secondaryColor:{control:"color",description:"Secondary color for comparison period bars",table:{defaultValue:{summary:"#66BDFF"}}},valueFormatter:{control:!1,description:"Custom formatter function for values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue with compact notation"}}},deltaFormatter:{control:!1,description:"Custom formatter function for delta values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue as percentage"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name for the chart container",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}}},decorators:[e=>(0,a.jsx)("div",{style:{width:"400px",padding:"20px"},children:(0,a.jsx)(e,{})})]},E={args:{data:g,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},L={args:{data:g,withComparison:!1,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},T={args:{data:g,withOverlayLabel:!0,primaryColor:"#66BDFF"}},O={args:{data:g,withComparison:!0,loading:!0,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},k={args:{data:g,withComparison:!0,loading:!1,primaryColor:"#FF6B6B",secondaryColor:"#4ECDC4"}},B={args:{data:se,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},A={args:{data:[],withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},M={args:{data:z,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},P={args:{data:ne,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},N={args:{data:g,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF",valueFormatter:e=>t(e,"currency",{useMultipliers:!0,decimals:1}),deltaFormatter:e=>t(e/100,"average",{decimals:0})}},W={args:{data:g,withComparison:!0,loading:!1,primaryColor:"#FF6B6B",secondaryColor:"#4ECDC4",valueFormatter:e=>t(e,"number",{useMultipliers:!1,decimals:0}),deltaFormatter:e=>t(e/100,"average",{decimals:1})}},Q=({label:e,imageColor:v,style:m={}})=>(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px",...m},children:[(0,a.jsx)("img",{src:`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='${encodeURIComponent(v)}'/></svg>`,alt:"icon",style:{width:"28px",height:"28px",verticalAlign:"middle",borderRadius:"4px"}}),(0,a.jsx)("span",{style:{fontSize:"13px"},children:e})]}),R={args:{data:H.map(e=>({...e,label:(0,a.jsx)(Q,{label:e.label,imageColor:e.imageColor})})),withComparison:!1,loading:!1}},I={args:{data:z,withComparison:!0,loading:!1,primaryColor:"#8B5CF6",secondaryColor:"#06B6D4",valueFormatter:e=>e>=1e6?t(e,"currency",{useMultipliers:!0,decimals:1}):t(e,"currency",{useMultipliers:!1,decimals:0}),deltaFormatter:e=>t(e/100,"average",{decimals:1,signDisplay:"always"})}},G={args:{data:g,withComparison:!0,loading:!1},decorators:[e=>(0,a.jsx)(o.N,{theme:i.QI,children:(0,a.jsx)("div",{style:{width:"400px",padding:"20px"},children:(0,a.jsx)(e,{})})})]},K={args:{data:g,withComparison:!0,loading:!1},decorators:[e=>(0,a.jsx)(o.N,{theme:i.pk,children:(0,a.jsx)("div",{style:{width:"400px",padding:"20px"},children:(0,a.jsx)(e,{})})})]},U={args:{data:H.map(e=>({...e,label:(0,a.jsx)(Q,{label:e.label,imageColor:e.imageColor,style:{padding:"6px"}})})),primaryColor:"#C8CFF6",withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--bar-border":"4px",fontFamily:'"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'}},decorators:[e=>(0,a.jsx)(o.N,{theme:i.pk,children:(0,a.jsx)(e,{})})]},ie=["Default","WithoutComparison","WithOverlayLabel","Loading","CustomColors","SmallDataset","EmptyData","LargeValues","NegativeGrowth","CurrencyFormatting","NumberFormatting","CustomLabel","AdvancedFormatting","JetpackTheme","WooCommerceTheme","OverlayLabelWithImage"];E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...E.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: false,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...L.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withOverlayLabel: true,
    primaryColor: '#66BDFF'
  }
}`,...T.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: true,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    primaryColor: '#FF6B6B',
    secondaryColor: '#4ECDC4'
  }
}`,...k.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    data: smallDataset,
    withComparison: true,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...B.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    withComparison: true,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    data: largeValues,
    withComparison: true,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    data: negativeGrowth,
    withComparison: true,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...P.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF',
    valueFormatter: (value: number) => formatMetricValue(value, 'currency', {
      useMultipliers: true,
      decimals: 1
    }),
    deltaFormatter: (value: number) => formatMetricValue(value / 100, 'average', {
      decimals: 0
    })
  }
}`,...N.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    primaryColor: '#FF6B6B',
    secondaryColor: '#4ECDC4',
    valueFormatter: (value: number) => formatMetricValue(value, 'number', {
      useMultipliers: false,
      decimals: 0
    }),
    deltaFormatter: (value: number) => formatMetricValue(value / 100, 'average', {
      decimals: 1
    })
  }
}`,...W.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataWithImageColor.map(entry => ({
      ...entry,
      label: <CustomLabelComponent label={entry.label} imageColor={entry.imageColor} />
    })),
    withComparison: false,
    loading: false
  }
}`,...R.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    data: largeValues,
    withComparison: true,
    loading: false,
    primaryColor: '#8B5CF6',
    secondaryColor: '#06B6D4',
    valueFormatter: (value: number) => {
      if (value >= 1000000) {
        return formatMetricValue(value, 'currency', {
          useMultipliers: true,
          decimals: 1
        });
      }
      return formatMetricValue(value, 'currency', {
        useMultipliers: false,
        decimals: 0
      });
    },
    deltaFormatter: (value: number) => formatMetricValue(value / 100, 'average', {
      decimals: 1,
      signDisplay: 'always'
    })
  }
}`,...I.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false
  },
  decorators: [Story => <ThemeProvider theme={jetpackTheme}>
                <div style={{
      width: '400px',
      padding: '20px'
    }}>
                    <Story />
                </div>
            </ThemeProvider>]
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false
  },
  decorators: [Story => <ThemeProvider theme={wooTheme}>
                <div style={{
      width: '400px',
      padding: '20px'
    }}>
                    <Story />
                </div>
            </ThemeProvider>]
}`,...K.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataWithImageColor.map(entry => ({
      ...entry,
      label: <CustomLabelComponent label={entry.label} imageColor={entry.imageColor} style={{
        padding: '6px'
      }} />
    })),
    primaryColor: '#C8CFF6',
    withComparison: true,
    withOverlayLabel: true,
    loading: false,
    style: {
      '--bar-border': '4px',
      fontFamily: \`"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif\`
    }
  },
  decorators: [Story => <ThemeProvider theme={wooTheme}>
                <Story />
            </ThemeProvider>]
}`,...U.parameters?.docs?.source}}}},"../charts/src/hooks/use-global-chart-theme.ts":(_,u,r)=>{r.d(u,{u:()=>S});var o=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=r("../charts/src/providers/chart-context/global-charts-provider.tsx"),l=r("../charts/src/providers/theme/theme-provider.tsx"),t=r("../charts/src/providers/theme/themes.ts"),s=r("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),d=r.n(s);function p(h,c){return d()(h,c,{arrayMerge:(y,b)=>b})}const S=()=>{const c=(0,o.useContext)(i.mJ)?.theme,y=(0,l.R)();return(0,o.useMemo)(()=>p(c??t.zQ,y),[c,y])}},"../charts/src/providers/chart-context/global-charts-provider.tsx":(_,u,r)=>{r.d(u,{Sx:()=>s,jT:()=>d,mJ:()=>t});var o=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=r("../charts/src/providers/theme/themes.ts"),l=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,o.createContext)(null),s=({children:p,theme:S={}})=>{const[h,c]=(0,o.useState)(()=>new Map),y=(0,o.useMemo)(()=>({...i.zQ,...S}),[S]),b=(0,o.useCallback)((F,n)=>{c(a=>new Map(a).set(F,n))},[]),Z=(0,o.useCallback)(F=>{c(n=>{const a=new Map(n);return a.delete(F),a})},[]),w=(0,o.useCallback)(F=>h.get(F),[h]),V=(0,o.useMemo)(()=>({charts:h,registerChart:b,unregisterChart:Z,getChartData:w,theme:y}),[h,b,Z,w,y]);return(0,l.jsx)(t.Provider,{value:V,children:p})},d=()=>{const p=(0,o.useContext)(t);if(!p)throw new Error("useGlobalChartsContext must be used within a GlobalChartsProvider");return p};try{s.displayName="GlobalChartsProvider",s.__docgenInfo={description:"",displayName:"GlobalChartsProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional theme override. Considered static for provider lifecycle.",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"]={docgenInfo:s.__docgenInfo,name:"GlobalChartsProvider",path:"../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(_,u,r)=>{r.d(u,{N:()=>s,R:()=>t});var o=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const l=(0,o.createContext)({}),t=()=>(0,o.useContext)(l),s=({theme:d={},children:p})=>(0,i.jsx)(l.Provider,{value:d,children:p});try{s.displayName="ThemeProvider",s.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:s.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{t.displayName="useChartTheme",t.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:t.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(_,u,r)=>{r.d(u,{QI:()=>i,pk:()=>l,zQ:()=>o});const o={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#80C8FF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},i={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#006DAB",secondaryColor:"#98C8DF",deltaColors:["#FF8C8F","#757575","#1F9828"]},conversionFunnelChart:{primaryColor:"#006DAB",backgroundColor:"#F3F4F6",positiveChangeColor:"#1F9828",negativeChangeColor:"#FF8C8F"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},l={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"},annotationStyles:{label:{anchorLineStroke:"black",backgroundFill:"#fff"},connector:{stroke:"black"},circleSubject:{stroke:"transparent",fill:"black",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#80C8FF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeWidth:1.5,strokeLinecap:"square"}}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/leaderboard-chart/leaderboard-chart.module.scss":(_,u,r)=>{r.d(u,{A:()=>d});var o=r("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=r.n(o),l=r("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),t=r.n(l),s=t()(i());s.push([_.id,'.scK1ZantNDOdMs0rFKVd{transition:opacity .3s ease-in-out}.scK1ZantNDOdMs0rFKVd.tlwUEjWrwCGx8N4NrQ14{opacity:.5}.zjyNjK5cspHTF3qZvBWO{display:grid;grid-template:"overlap" 1fr/1fr;align-items:center}.zjyNjK5cspHTF3qZvBWO>*{-ms-grid-row:1;-ms-grid-column:1;grid-area:overlap}.zjyNjK5cspHTF3qZvBWO .HR9ZJjbiMylXduhku4mg{height:100%;background-color:var(--primary-color, #3858e9);border-radius:var(--bar-border, 9999px);z-index:-1;transition:width .3s ease-in-out}.zjyNjK5cspHTF3qZvBWO .EeBfGwQ14UPuqduTRTrY{padding-left:8px}.xGdSjD3feaX8qiZnw_me{display:flex;flex-direction:column;gap:6px}.xGdSjD3feaX8qiZnw_me .HR9ZJjbiMylXduhku4mg{width:100%;height:6px;border-radius:2px;background-color:rgba(0,0,0,0);overflow:hidden;transition:width .3s ease-in-out}.xGdSjD3feaX8qiZnw_me .HR9ZJjbiMylXduhku4mg>div{background-color:var(--progress-color, #3858e9);border-radius:var(--bar-border, 9999px)}.xGdSjD3feaX8qiZnw_me .EIjPfycxYmar3fLh1HQi{--progress-color: var(--primary-color, #3858e9)}.xGdSjD3feaX8qiZnw_me .ZJBqXpRuCwaget6iWhxQ{--progress-color: var(--secondary-color, #66bdff)}.ArUixJYV2nlFKkiD6Jjo{display:flex;gap:4px;justify-content:flex-end}.I0tqeGCwbJVNfJ6OjLMw{align-items:center}.oQn1JOj21bg7U0K6tW2z{padding:32px 16px;text-align:center;color:#666;font-size:14px;font-style:italic}',""]),s.locals={leaderboardChart:"scK1ZantNDOdMs0rFKVd",loading:"tlwUEjWrwCGx8N4NrQ14",progressContainerWithOverlayLabel:"zjyNjK5cspHTF3qZvBWO",progressBar:"HR9ZJjbiMylXduhku4mg",progressBarLabel:"EeBfGwQ14UPuqduTRTrY",progressContainer:"xGdSjD3feaX8qiZnw_me",primaryBar:"EIjPfycxYmar3fLh1HQi",secondaryBar:"ZJBqXpRuCwaget6iWhxQ",valueContainer:"ArUixJYV2nlFKkiD6Jjo",overlayLabel:"I0tqeGCwbJVNfJ6OjLMw",emptyState:"oQn1JOj21bg7U0K6tW2z"};const d=s}}]);
