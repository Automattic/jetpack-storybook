"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8145],{"../charts/src/components/leaderboard-chart/stories/index.stories.tsx":(I,g,a)=>{a.r(g),a.d(g,{AdvancedFormatting:()=>P,CurrencyFormatting:()=>B,CustomColors:()=>E,CustomLabel:()=>M,Default:()=>D,EmptyData:()=>T,JetpackTheme:()=>W,LargeValues:()=>k,Loading:()=>V,NegativeGrowth:()=>O,NumberFormatting:()=>A,OverlayLabelWithImage:()=>R,SmallDataset:()=>L,WithOverlayLabel:()=>j,WithoutComparison:()=>w,WooCommerceTheme:()=>N,__namedExportsOrder:()=>ne,default:()=>se});var c=a("../charts/src/providers/theme/theme-provider.tsx"),l=a("../charts/src/providers/theme/themes.ts"),s=a("../number-formatters/src/index.ts");const t=(e,C="number",{decimals:n,useMultipliers:G=!1,signDisplay:y}={})=>{if(e==null)return"";const h=Number(e);if(isNaN(h))return"";switch(C){case"currency":return`$${G?(0,s.qe)(h,{decimals:n??2,numberFormatOptions:{maximumFractionDigits:n??2,signDisplay:y}}):(0,s.ZV)(h,{decimals:n??2,numberFormatOptions:{signDisplay:y}})}`;case"average":return Number.isFinite(h)?(0,s.ZV)(h,{decimals:n??0,numberFormatOptions:{style:"percent",signDisplay:y??"exceptZero"}}):"\u2014";case"number":default:return G?(0,s.qe)(h,{decimals:n??0,numberFormatOptions:{maximumFractionDigits:n??0,signDisplay:y}}):(0,s.ZV)(h,{decimals:n??0,numberFormatOptions:{signDisplay:y}})}};var i=a("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.js"),u=a("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/progress-bar/index.js"),v=a("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/grid/component.js"),b=a("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js"),m=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=a("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),F=a("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),x=a.n(F),Y=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/leaderboard-chart/leaderboard-chart.module.scss"),Z={};Z.insert="head",Z.singleton=!1;var Ce=x()(Y.A,Z);const o=Y.A.locals||{};var r=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f={labelSpacing:1.5,rowGap:12,columnGap:4,primaryColor:"#3858E9",secondaryColor:"#66BDFF",deltaColors:["#D63638","#757575","#008A20"]},$=e=>t(e,"number",{useMultipliers:!0,decimals:1}),ee=e=>t(e/100,"average",{decimals:0,signDisplay:"exceptZero"}),re=({entry:e})=>(0,r.jsxs)("div",{className:o.progressContainerWithOverlayLabel,children:[typeof e.label=="string"?(0,r.jsx)(i.A,{className:o.progressBarLabel,children:e.label}):e.label,(0,r.jsx)("div",{className:o.progressBar,style:{width:e.currentShare+"%"}})]}),ae=({entry:e,withComparison:C})=>(0,r.jsxs)(r.Fragment,{children:[typeof e.label=="string"?(0,r.jsx)(i.A,{children:e.label}):e.label,(0,r.jsxs)("div",{className:o.progressContainer,children:[(0,r.jsx)(u.A,{value:e.currentShare,className:(0,d.A)(o.progressBar,o.primaryBar)}),C&&(0,r.jsx)(u.A,{value:e.previousShare,className:(0,d.A)(o.progressBar,o.secondaryBar)})]})]}),K=({data:e,withComparison:C=!1,withOverlayLabel:n=!1,primaryColor:G,secondaryColor:y,valueFormatter:h=$,deltaFormatter:z=ee,loading:U=!1,className:H,style:le})=>{const _=(0,c.RW)().leaderboardChart,ie=_?.labelSpacing??f.labelSpacing,de=_?.rowGap??f.rowGap,ce=_?.columnGap??f.columnGap,ue=G||_?.primaryColor||f.primaryColor,me=y||_?.secondaryColor||f.secondaryColor,pe=_?.deltaColors??f.deltaColors,Q={"--primary-color":ue,"--secondary-color":me,...le};return!e||e.length===0?(0,r.jsx)("div",{className:(0,d.A)(o.leaderboardChart,U&&o.loading,H),style:Q,children:(0,r.jsx)("div",{className:o.emptyState,children:U?"Loading...":"No data available"})}):(0,r.jsx)(v.A,{className:(0,d.A)(o.leaderboardChart,U&&o.loading,H),templateColumns:"minmax(0, 1fr) auto",rowGap:de,columnGap:ce,style:Q,children:e.map(S=>{const he=Math.sign(S.delta)+1,ge=pe[he];return(0,r.jsxs)(m.Fragment,{children:[(0,r.jsx)(b.A,{spacing:ie,children:n?(0,r.jsx)(re,{entry:S}):(0,r.jsx)(ae,{entry:S,withComparison:C})}),(0,r.jsxs)("div",{className:(0,d.A)(o.valueContainer,{[o.overlayLabel]:n}),children:[(0,r.jsx)(i.A,{children:h(S.currentValue)}),C&&(0,r.jsx)(i.A,{style:{color:ge},children:z(S.delta)})]})]},S.id)})})},ye=null;try{K.displayName="LeaderboardChart",K.__docgenInfo={description:`LeaderboardChart component displays a ranked list of data with progress bars
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
}`},description:"Formatter for delta values",name:"deltaFormatter",required:!1,type:{name:"(value: number) => string"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling for the chart container",name:"style",required:!1,type:{name:"CSSProperties & { '--bar-border'?: string; '--primary-color'?: string; '--secondary-color'?: string; }"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#LeaderboardChart"]={docgenInfo:K.__docgenInfo,name:"LeaderboardChart",path:"../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#LeaderboardChart"})}catch{}try{leaderboardchart.displayName="leaderboardchart",leaderboardchart.__docgenInfo={description:`LeaderboardChart component displays a ranked list of data with progress bars
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
}`},description:"Formatter for delta values",name:"deltaFormatter",required:!1,type:{name:"(value: number) => string"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling for the chart container",name:"style",required:!1,type:{name:"CSSProperties & { '--bar-border'?: string; '--primary-color'?: string; '--secondary-color'?: string; }"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#leaderboardchart"]={docgenInfo:leaderboardchart.__docgenInfo,name:"leaderboardchart",path:"../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#leaderboardchart"})}catch{}const p=[{id:"direct",label:"Direct",currentValue:12500,previousValue:1e4,currentShare:100,previousShare:80,delta:25},{id:"social",label:"Social Media",currentValue:8750,previousValue:9500,currentShare:70,previousShare:76,delta:-7.9},{id:"email",label:"Email Marketing",currentValue:6250,previousValue:5800,currentShare:50,previousShare:46,delta:7.8},{id:"search",label:"Search Engine",currentValue:4375,previousValue:4200,currentShare:35,previousShare:33,delta:4.2}],oe=[{id:"direct",label:"Direct",currentValue:12500,previousValue:1e4,currentShare:100,previousShare:80,delta:25},{id:"social",label:"Social Media",currentValue:8750,previousValue:9500,currentShare:70,previousShare:76,delta:-7.9}],q=[{id:"large1",label:"Large Value 1",currentValue:125e4,previousValue:1e6,currentShare:100,previousShare:80,delta:25},{id:"large2",label:"Large Value 2",currentValue:875e3,previousValue:95e4,currentShare:70,previousShare:76,delta:-7.9},{id:"large3",label:"Large Value 3",currentValue:625e3,previousValue:58e4,currentShare:50,previousShare:46,delta:7.8}],te=[{id:"negative1",label:"Declining Channel",currentValue:5e3,previousValue:8e3,currentShare:62.5,previousShare:100,delta:-37.5},{id:"negative2",label:"Another Declining",currentValue:3e3,previousValue:6e3,currentShare:37.5,previousShare:75,delta:-50},{id:"negative3",label:"Slight Decline",currentValue:4500,previousValue:4800,currentShare:56.25,previousShare:60,delta:-6.25}],J=[{id:"direct",label:"Direct",currentValue:12500,previousValue:1e4,currentShare:100,previousShare:80,delta:25,imageColor:"#007aff"},{id:"social",label:"Social Media",currentValue:8750,previousValue:9500,currentShare:30,previousShare:76,delta:-7.9,imageColor:"#ffc0cb"},{id:"referral",label:"Referral",currentValue:8750,previousValue:9500,currentShare:10,previousShare:16,delta:-7.9,imageColor:"#00ff00"}],se={title:"JS Packages/Charts/Types/Leaderboard Chart",component:K,parameters:{layout:"centered",docs:{description:{component:`
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
                `}}},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of leaderboard entries to display",table:{type:{summary:"LeaderboardEntry[]"}}},withComparison:{control:"boolean",description:"Whether to show comparison data (previous period bars and delta values)",table:{defaultValue:{summary:"false"}}},primaryColor:{control:"color",description:"Primary color for current period bars",table:{defaultValue:{summary:"#3858E9"}}},secondaryColor:{control:"color",description:"Secondary color for comparison period bars",table:{defaultValue:{summary:"#66BDFF"}}},valueFormatter:{control:!1,description:"Custom formatter function for values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue with compact notation"}}},deltaFormatter:{control:!1,description:"Custom formatter function for delta values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue as percentage"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name for the chart container",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}}},decorators:[e=>(0,r.jsx)("div",{style:{width:"400px",padding:"20px"},children:(0,r.jsx)(e,{})})]},D={args:{data:p,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},w={args:{data:p,withComparison:!1,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},j={args:{data:p,withOverlayLabel:!0,primaryColor:"#66BDFF"}},V={args:{data:p,withComparison:!0,loading:!0,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},E={args:{data:p,withComparison:!0,loading:!1,primaryColor:"#FF6B6B",secondaryColor:"#4ECDC4"}},L={args:{data:oe,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},T={args:{data:[],withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},k={args:{data:q,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},O={args:{data:te,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},B={args:{data:p,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF",valueFormatter:e=>t(e,"currency",{useMultipliers:!0,decimals:1}),deltaFormatter:e=>t(e/100,"average",{decimals:0})}},A={args:{data:p,withComparison:!0,loading:!1,primaryColor:"#FF6B6B",secondaryColor:"#4ECDC4",valueFormatter:e=>t(e,"number",{useMultipliers:!1,decimals:0}),deltaFormatter:e=>t(e/100,"average",{decimals:1})}},X=({label:e,imageColor:C,style:n={}})=>(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px",...n},children:[(0,r.jsx)("img",{src:`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='${encodeURIComponent(C)}'/></svg>`,alt:"icon",style:{width:"28px",height:"28px",verticalAlign:"middle",borderRadius:"4px"}}),(0,r.jsx)("span",{style:{fontSize:"13px"},children:e})]}),M={args:{data:J.map(e=>({...e,label:(0,r.jsx)(X,{label:e.label,imageColor:e.imageColor})})),withComparison:!1,loading:!1}},P={args:{data:q,withComparison:!0,loading:!1,primaryColor:"#8B5CF6",secondaryColor:"#06B6D4",valueFormatter:e=>e>=1e6?t(e,"currency",{useMultipliers:!0,decimals:1}):t(e,"currency",{useMultipliers:!1,decimals:0}),deltaFormatter:e=>t(e/100,"average",{decimals:1,signDisplay:"always"})}},W={args:{data:p,withComparison:!0,loading:!1},decorators:[e=>(0,r.jsx)(c.NP,{theme:l.QI,children:(0,r.jsx)("div",{style:{width:"400px",padding:"20px"},children:(0,r.jsx)(e,{})})})]},N={args:{data:p,withComparison:!0,loading:!1},decorators:[e=>(0,r.jsx)(c.NP,{theme:l.pk,children:(0,r.jsx)("div",{style:{width:"400px",padding:"20px"},children:(0,r.jsx)(e,{})})})]},R={args:{data:J.map(e=>({...e,label:(0,r.jsx)(X,{label:e.label,imageColor:e.imageColor,style:{padding:"6px"}})})),primaryColor:"#C8CFF6",withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--bar-border":"4px",fontFamily:'"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'}},decorators:[e=>(0,r.jsx)(c.NP,{theme:l.pk,children:(0,r.jsx)(e,{})})]},ne=["Default","WithoutComparison","WithOverlayLabel","Loading","CustomColors","SmallDataset","EmptyData","LargeValues","NegativeGrowth","CurrencyFormatting","NumberFormatting","CustomLabel","AdvancedFormatting","JetpackTheme","WooCommerceTheme","OverlayLabelWithImage"];D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...D.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: false,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...w.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withOverlayLabel: true,
    primaryColor: '#66BDFF'
  }
}`,...j.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: true,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...V.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    primaryColor: '#FF6B6B',
    secondaryColor: '#4ECDC4'
  }
}`,...E.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    data: smallDataset,
    withComparison: true,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...L.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    withComparison: true,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...T.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    data: largeValues,
    withComparison: true,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...k.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    data: negativeGrowth,
    withComparison: true,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...O.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataWithImageColor.map(entry => ({
      ...entry,
      label: <CustomLabelComponent label={entry.label} imageColor={entry.imageColor} />
    })),
    withComparison: false,
    loading: false
  }
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}}},"../charts/src/providers/theme/theme-provider.tsx":(I,g,a)=>{a.d(g,{NP:()=>b,Ox:()=>v,RW:()=>u});var c=a("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),l=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=a("../charts/src/providers/theme/themes.ts"),t=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i=(0,l.createContext)(s.zQ),u=()=>(0,l.useContext)(i),v=m=>{const d=u();return(0,l.useMemo)(()=>{const F=(m??[]).map(x=>x.options?.stroke).filter(x=>!!x);return(0,c.A)({...d,colors:[...F,...d.colors??[]]})},[d,m])},b=({theme:m={},children:d})=>{const F={...s.zQ,...m};return(0,t.jsx)(i.Provider,{value:F,children:d})};try{b.displayName="ThemeProvider",b.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:b.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{u.displayName="useChartTheme",u.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:u.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}try{v.displayName="useXYChartTheme",v.__docgenInfo={description:"",displayName:"useXYChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"]={docgenInfo:v.__docgenInfo,name:"useXYChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(I,g,a)=>{a.d(g,{QI:()=>l,pk:()=>s,zQ:()=>c});const c={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#80C8FF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},l={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#006DAB",secondaryColor:"#98C8DF",deltaColors:["#FF8C8F","#757575","#1F9828"]},conversionFunnelChart:{primaryColor:"#006DAB",backgroundColor:"#F3F4F6",positiveChangeColor:"#1F9828",negativeChangeColor:"#FF8C8F"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},s={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"},annotationStyles:{label:{anchorLineStroke:"black",backgroundFill:"#fff"},connector:{stroke:"black"},circleSubject:{stroke:"transparent",fill:"black",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#80C8FF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeWidth:1.5,strokeLinecap:"square"}}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/leaderboard-chart/leaderboard-chart.module.scss":(I,g,a)=>{a.d(g,{A:()=>u});var c=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=a.n(c),s=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),t=a.n(s),i=t()(l());i.push([I.id,'.scK1ZantNDOdMs0rFKVd{transition:opacity .3s ease-in-out}.scK1ZantNDOdMs0rFKVd.tlwUEjWrwCGx8N4NrQ14{opacity:.5}.zjyNjK5cspHTF3qZvBWO{display:grid;grid-template:"overlap" 1fr/1fr;align-items:center}.zjyNjK5cspHTF3qZvBWO>*{-ms-grid-row:1;-ms-grid-column:1;grid-area:overlap}.zjyNjK5cspHTF3qZvBWO .HR9ZJjbiMylXduhku4mg{height:100%;background-color:var(--primary-color, #3858e9);border-radius:var(--bar-border, 9999px);z-index:-1;transition:width .3s ease-in-out}.zjyNjK5cspHTF3qZvBWO .EeBfGwQ14UPuqduTRTrY{padding-left:8px}.xGdSjD3feaX8qiZnw_me{display:flex;flex-direction:column;gap:6px}.xGdSjD3feaX8qiZnw_me .HR9ZJjbiMylXduhku4mg{width:100%;height:6px;border-radius:2px;background-color:rgba(0,0,0,0);overflow:hidden;transition:width .3s ease-in-out}.xGdSjD3feaX8qiZnw_me .HR9ZJjbiMylXduhku4mg>div{background-color:var(--progress-color, #3858e9);border-radius:var(--bar-border, 9999px)}.xGdSjD3feaX8qiZnw_me .EIjPfycxYmar3fLh1HQi{--progress-color: var(--primary-color, #3858e9)}.xGdSjD3feaX8qiZnw_me .ZJBqXpRuCwaget6iWhxQ{--progress-color: var(--secondary-color, #66bdff)}.ArUixJYV2nlFKkiD6Jjo{display:flex;gap:4px;justify-content:flex-end}.I0tqeGCwbJVNfJ6OjLMw{align-items:center}.oQn1JOj21bg7U0K6tW2z{padding:32px 16px;text-align:center;color:#666;font-size:14px;font-style:italic}',""]),i.locals={leaderboardChart:"scK1ZantNDOdMs0rFKVd",loading:"tlwUEjWrwCGx8N4NrQ14",progressContainerWithOverlayLabel:"zjyNjK5cspHTF3qZvBWO",progressBar:"HR9ZJjbiMylXduhku4mg",progressBarLabel:"EeBfGwQ14UPuqduTRTrY",progressContainer:"xGdSjD3feaX8qiZnw_me",primaryBar:"EIjPfycxYmar3fLh1HQi",secondaryBar:"ZJBqXpRuCwaget6iWhxQ",valueContainer:"ArUixJYV2nlFKkiD6Jjo",overlayLabel:"I0tqeGCwbJVNfJ6OjLMw",emptyState:"oQn1JOj21bg7U0K6tW2z"};const u=i}}]);
