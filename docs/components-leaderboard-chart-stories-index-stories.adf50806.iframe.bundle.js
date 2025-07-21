"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8145],{"../charts/src/components/leaderboard-chart/stories/index.stories.tsx":(L,F,r)=>{r.r(F),r.d(F,{AdvancedFormatting:()=>V,CurrencyFormatting:()=>_,CustomColors:()=>f,Default:()=>p,EmptyData:()=>C,LargeValues:()=>v,Loading:()=>g,NegativeGrowth:()=>b,NumberFormatting:()=>S,SmallDataset:()=>y,WithoutComparison:()=>h,__namedExportsOrder:()=>Z,default:()=>K});var l=r("../number-formatters/src/index.ts");const o=(e,x="number",{decimals:s,useMultipliers:E=!1,signDisplay:i}={})=>{if(e==null)return"";const n=Number(e);if(isNaN(n))return"";switch(x){case"currency":return`$${E?(0,l.qe)(n,{decimals:s??2,numberFormatOptions:{maximumFractionDigits:s??2,signDisplay:i}}):(0,l.ZV)(n,{decimals:s??2,numberFormatOptions:{signDisplay:i}})}`;case"average":return Number.isFinite(n)?(0,l.ZV)(n,{decimals:s??0,numberFormatOptions:{style:"percent",signDisplay:i??"exceptZero"}}):"\u2014";case"number":default:return E?(0,l.qe)(n,{decimals:s??0,numberFormatOptions:{maximumFractionDigits:s??0,signDisplay:i}}):(0,l.ZV)(n,{decimals:s??0,numberFormatOptions:{signDisplay:i}})}};var D=r("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/progress-bar/index.js"),u=r("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),m=r("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),B=r.n(m),A=r("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/leaderboard-chart/leaderboard-chart.module.scss"),M={};M.insert="head",M.singleton=!1;var H=B()(A.A,M);const a=A.A.locals||{};var t=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const T=e=>o(e,"number",{useMultipliers:!0,decimals:1}),W=e=>o(e/100,"average",{decimals:0,signDisplay:"exceptZero"}),w=({data:e,withComparison:x=!1,primaryColor:s="#3858E9",secondaryColor:E="#66BDFF",valueFormatter:i=T,deltaFormatter:n=W,loading:j=!1,className:O,style:q})=>{const I=["#D63638","#757575","#008A20"],P={"--primary-color":s,"--secondary-color":E,...q};return!e||e.length===0?(0,t.jsx)("div",{className:(0,u.A)(a.leaderboardChart,j&&a.loading,O),style:P,children:(0,t.jsx)("div",{className:a.emptyState,children:j?"Loading...":"No data available"})}):(0,t.jsx)("div",{className:(0,u.A)(a.leaderboardChart,j&&a.loading,O),style:P,children:e.map(d=>{const Y=Math.sign(d.delta)+1,G=I[Y];return(0,t.jsxs)("div",{className:a.entryContainer,children:[(0,t.jsxs)("div",{className:a.labelContainer,children:[(0,t.jsx)("span",{className:a.entryLabel,children:d.label}),(0,t.jsxs)("div",{className:a.progressContainer,children:[(0,t.jsx)(D.A,{value:d.currentShare,className:(0,u.A)(a.progressBar,a.primaryBar)}),x&&(0,t.jsx)(D.A,{value:d.previousShare,className:(0,u.A)(a.progressBar,a.secondaryBar)})]})]}),(0,t.jsxs)("div",{className:a.valueContainer,children:[(0,t.jsx)("span",{className:a.currentValue,children:i(d.currentValue)}),x&&(0,t.jsx)("span",{className:a.deltaValue,style:{color:G},children:n(d.delta)})]})]},d.id)})})},U=null;try{w.displayName="LeaderboardChart",w.__docgenInfo={description:`LeaderboardChart component displays a ranked list of data with progress bars
and optional comparison values.`,displayName:"LeaderboardChart",props:{data:{defaultValue:null,description:"Array of leaderboard entries to display",name:"data",required:!0,type:{name:"LeaderboardEntry[]"}},withComparison:{defaultValue:{value:"false"},description:"Whether to show comparison data",name:"withComparison",required:!1,type:{name:"boolean"}},primaryColor:{defaultValue:{value:"#3858E9"},description:"Primary color for current period bars",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:{value:"#66BDFF"},description:"Secondary color for comparison period bars",name:"secondaryColor",required:!1,type:{name:"string"}},valueFormatter:{defaultValue:{value:`( value: number ): string => {
	return formatMetricValue( value, 'number', {
		useMultipliers: true,
		decimals: 1,
	} );
}`},description:"Formatter for values",name:"valueFormatter",required:!1,type:{name:"(value: number) => string"}},deltaFormatter:{defaultValue:{value:`( value: number ): string => {
	return formatMetricValue( value / 100, 'average', {
		decimals: 0,
		signDisplay: 'exceptZero',
	} );
}`},description:"Formatter for delta values",name:"deltaFormatter",required:!1,type:{name:"(value: number) => string"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling for the chart container",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#LeaderboardChart"]={docgenInfo:w.__docgenInfo,name:"LeaderboardChart",path:"../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#LeaderboardChart"})}catch{}try{leaderboardchart.displayName="leaderboardchart",leaderboardchart.__docgenInfo={description:`LeaderboardChart component displays a ranked list of data with progress bars
and optional comparison values.`,displayName:"leaderboardchart",props:{data:{defaultValue:null,description:"Array of leaderboard entries to display",name:"data",required:!0,type:{name:"LeaderboardEntry[]"}},withComparison:{defaultValue:{value:"false"},description:"Whether to show comparison data",name:"withComparison",required:!1,type:{name:"boolean"}},primaryColor:{defaultValue:{value:"#3858E9"},description:"Primary color for current period bars",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:{value:"#66BDFF"},description:"Secondary color for comparison period bars",name:"secondaryColor",required:!1,type:{name:"string"}},valueFormatter:{defaultValue:{value:`( value: number ): string => {
	return formatMetricValue( value, 'number', {
		useMultipliers: true,
		decimals: 1,
	} );
}`},description:"Formatter for values",name:"valueFormatter",required:!1,type:{name:"(value: number) => string"}},deltaFormatter:{defaultValue:{value:`( value: number ): string => {
	return formatMetricValue( value / 100, 'average', {
		decimals: 0,
		signDisplay: 'exceptZero',
	} );
}`},description:"Formatter for delta values",name:"deltaFormatter",required:!1,type:{name:"(value: number) => string"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling for the chart container",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#leaderboardchart"]={docgenInfo:leaderboardchart.__docgenInfo,name:"leaderboardchart",path:"../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#leaderboardchart"})}catch{}const c=[{id:"direct",label:"Direct",currentValue:12500,previousValue:1e4,currentShare:100,previousShare:80,delta:25},{id:"social",label:"Social Media",currentValue:8750,previousValue:9500,currentShare:70,previousShare:76,delta:-7.9},{id:"email",label:"Email Marketing",currentValue:6250,previousValue:5800,currentShare:50,previousShare:46,delta:7.8},{id:"search",label:"Search Engine",currentValue:4375,previousValue:4200,currentShare:35,previousShare:33,delta:4.2}],k=[{id:"direct",label:"Direct",currentValue:12500,previousValue:1e4,currentShare:100,previousShare:80,delta:25},{id:"social",label:"Social Media",currentValue:8750,previousValue:9500,currentShare:70,previousShare:76,delta:-7.9}],N=[{id:"large1",label:"Large Value 1",currentValue:125e4,previousValue:1e6,currentShare:100,previousShare:80,delta:25},{id:"large2",label:"Large Value 2",currentValue:875e3,previousValue:95e4,currentShare:70,previousShare:76,delta:-7.9},{id:"large3",label:"Large Value 3",currentValue:625e3,previousValue:58e4,currentShare:50,previousShare:46,delta:7.8}],R=[{id:"negative1",label:"Declining Channel",currentValue:5e3,previousValue:8e3,currentShare:62.5,previousShare:100,delta:-37.5},{id:"negative2",label:"Another Declining",currentValue:3e3,previousValue:6e3,currentShare:37.5,previousShare:75,delta:-50},{id:"negative3",label:"Slight Decline",currentValue:4500,previousValue:4800,currentShare:56.25,previousShare:60,delta:-6.25}],K={title:"JS Packages/Charts/Types/Leaderboard Chart",component:w,parameters:{layout:"centered",docs:{description:{component:`
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
                `}}},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of leaderboard entries to display",table:{type:{summary:"LeaderboardEntry[]"}}},withComparison:{control:"boolean",description:"Whether to show comparison data (previous period bars and delta values)",table:{defaultValue:{summary:"false"}}},primaryColor:{control:"color",description:"Primary color for current period bars",table:{defaultValue:{summary:"#3858E9"}}},secondaryColor:{control:"color",description:"Secondary color for comparison period bars",table:{defaultValue:{summary:"#66BDFF"}}},valueFormatter:{control:!1,description:"Custom formatter function for values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue with compact notation"}}},deltaFormatter:{control:!1,description:"Custom formatter function for delta values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue as percentage"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name for the chart container",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}}},decorators:[e=>(0,t.jsx)("div",{style:{width:"400px",padding:"20px"},children:(0,t.jsx)(e,{})})]},p={args:{data:c,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},h={args:{data:c,withComparison:!1,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},g={args:{data:c,withComparison:!0,loading:!0,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},f={args:{data:c,withComparison:!0,loading:!1,primaryColor:"#FF6B6B",secondaryColor:"#4ECDC4"}},y={args:{data:k,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},C={args:{data:[],withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},v={args:{data:N,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},b={args:{data:R,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},_={args:{data:c,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF",valueFormatter:e=>o(e,"currency",{useMultipliers:!0,decimals:1}),deltaFormatter:e=>o(e/100,"average",{decimals:0})}},S={args:{data:c,withComparison:!0,loading:!1,primaryColor:"#FF6B6B",secondaryColor:"#4ECDC4",valueFormatter:e=>o(e,"number",{useMultipliers:!1,decimals:0}),deltaFormatter:e=>o(e/100,"average",{decimals:1})}},V={args:{data:N,withComparison:!0,loading:!1,primaryColor:"#8B5CF6",secondaryColor:"#06B6D4",valueFormatter:e=>e>=1e6?o(e,"currency",{useMultipliers:!0,decimals:1}):o(e,"currency",{useMultipliers:!1,decimals:0}),deltaFormatter:e=>o(e/100,"average",{decimals:1,signDisplay:"always"})}},Z=["Default","WithoutComparison","Loading","CustomColors","SmallDataset","EmptyData","LargeValues","NegativeGrowth","CurrencyFormatting","NumberFormatting","AdvancedFormatting"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: false,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: true,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...g.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    primaryColor: '#FF6B6B',
    secondaryColor: '#4ECDC4'
  }
}`,...f.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    data: smallDataset,
    withComparison: true,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...y.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    withComparison: true,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...C.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    data: largeValues,
    withComparison: true,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    data: negativeGrowth,
    withComparison: true,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...b.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/leaderboard-chart/leaderboard-chart.module.scss":(L,F,r)=>{r.d(F,{A:()=>B});var l=r("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=r.n(l),D=r("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),u=r.n(D),m=u()(o());m.push([L.id,".scK1ZantNDOdMs0rFKVd{width:100%;max-width:400px;display:flex;flex-direction:column;gap:12px;transition:opacity .3s ease-in-out}.scK1ZantNDOdMs0rFKVd.tlwUEjWrwCGx8N4NrQ14{opacity:.5}.IARsmscwYPHq4OG3gi1S{display:grid;grid-template-columns:minmax(0, 1fr) auto;-moz-column-gap:4px;column-gap:4px;align-items:start}.Y8W16tQljjNTgHRDCAjV{display:flex;flex-direction:column;gap:6px;min-width:0}.VcU97GSHnKvPpg_jby48{font-size:14px;line-height:1.4;color:#1e1e1e;font-weight:400;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.xGdSjD3feaX8qiZnw_me{display:flex;flex-direction:column;gap:6px}.xGdSjD3feaX8qiZnw_me .HR9ZJjbiMylXduhku4mg{width:100%;height:6px;border-radius:2px;background-color:rgba(0,0,0,0);overflow:hidden;transition:width .3s ease-in-out}.xGdSjD3feaX8qiZnw_me .HR9ZJjbiMylXduhku4mg>div{background-color:var(--progress-color, #3858e9)}.xGdSjD3feaX8qiZnw_me .EIjPfycxYmar3fLh1HQi{--progress-color: var(--primary-color, #3858e9)}.xGdSjD3feaX8qiZnw_me .ZJBqXpRuCwaget6iWhxQ{--progress-color: var(--secondary-color, #66bdff)}.ArUixJYV2nlFKkiD6Jjo{display:flex;flex-direction:row;gap:4px;align-items:flex-start;text-align:right}.S9MTHWgA9m_KkwdQJH0A{font-size:14px;line-height:1.4;font-weight:500;color:#1e1e1e}.KBz8rd5DSwE1YZamrhYW{font-size:13px;line-height:1.4;font-weight:400}.oQn1JOj21bg7U0K6tW2z{padding:32px 16px;text-align:center;color:#666;font-size:14px;font-style:italic}",""]),m.locals={leaderboardChart:"scK1ZantNDOdMs0rFKVd",loading:"tlwUEjWrwCGx8N4NrQ14",entryContainer:"IARsmscwYPHq4OG3gi1S",labelContainer:"Y8W16tQljjNTgHRDCAjV",entryLabel:"VcU97GSHnKvPpg_jby48",progressContainer:"xGdSjD3feaX8qiZnw_me",progressBar:"HR9ZJjbiMylXduhku4mg",primaryBar:"EIjPfycxYmar3fLh1HQi",secondaryBar:"ZJBqXpRuCwaget6iWhxQ",valueContainer:"ArUixJYV2nlFKkiD6Jjo",currentValue:"S9MTHWgA9m_KkwdQJH0A",deltaValue:"KBz8rd5DSwE1YZamrhYW",emptyState:"oQn1JOj21bg7U0K6tW2z"};const B=m}}]);
