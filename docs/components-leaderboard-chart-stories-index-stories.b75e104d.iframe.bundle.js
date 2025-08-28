"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8145],{"../charts/src/components/leaderboard-chart/stories/index.stories.tsx":(S,m,a)=>{a.r(m),a.d(m,{AdvancedFormatting:()=>I,CurrencyFormatting:()=>P,CustomColors:()=>k,CustomLabel:()=>N,Default:()=>E,EmptyData:()=>A,JetpackTheme:()=>R,LargeValues:()=>B,Loading:()=>T,NegativeGrowth:()=>M,NumberFormatting:()=>W,OverlayLabelWithImage:()=>J,SmallDataset:()=>O,WithOverlayLabel:()=>j,WithoutComparison:()=>L,WooCommerceTheme:()=>G,__namedExportsOrder:()=>te,default:()=>re});var l=a("../charts/src/providers/theme/theme-provider.tsx"),u=a("../charts/src/providers/theme/themes.ts"),t=a("../charts/src/stories/sample-data/index.ts"),s=a("../number-formatters/src/index.ts");const o=(e,f="number",{decimals:c,useMultipliers:Y=!1,signDisplay:D}={})=>{if(e==null)return"";const g=Number(e);if(isNaN(g))return"";switch(f){case"currency":return`$${Y?(0,s.qe)(g,{decimals:c??2,numberFormatOptions:{maximumFractionDigits:c??2,signDisplay:D}}):(0,s.ZV)(g,{decimals:c??2,numberFormatOptions:{signDisplay:D}})}`;case"average":return Number.isFinite(g)?(0,s.ZV)(g,{decimals:c??0,numberFormatOptions:{style:"percent",signDisplay:D??"exceptZero"}}):"\u2014";case"number":default:return Y?(0,s.qe)(g,{decimals:c??0,numberFormatOptions:{maximumFractionDigits:c??0,signDisplay:D}}):(0,s.ZV)(g,{decimals:c??0,numberFormatOptions:{signDisplay:D}})}};var i=a("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.js"),p=a("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/grid/component.js"),C=a("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js"),h=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=a("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),v=a("../charts/src/hooks/use-global-chart-theme.ts"),b=a("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),w=a.n(b),_=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/leaderboard-chart/leaderboard-chart.module.scss"),F={};F.insert="head",F.singleton=!1;var y=w()(_.A,F);const n=_.A.locals||{};var r=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const x={labelSpacing:1.5,rowGap:12,columnGap:4,primaryColor:"#3858E9",secondaryColor:"#66BDFF",deltaColors:["#D63638","#757575","#008A20"]},$=e=>o(e,"number",{useMultipliers:!0,decimals:1}),X=e=>o(e/100,"average",{decimals:0,signDisplay:"exceptZero"}),ee=({label:e})=>(0,r.jsx)(r.Fragment,{children:typeof e=="string"?(0,r.jsx)(i.A,{className:n.label,children:e}):e}),ae=({entry:e,withComparison:f,withOverlayLabel:c})=>(0,r.jsxs)("div",{className:(0,d.A)(n.barWithLabelContainer,{[n["is-overlay"]]:c}),children:[(0,r.jsx)(ee,{label:e.label}),(0,r.jsx)("div",{className:(0,d.A)(n.bar,n.primaryBar),style:{width:e.currentShare+"%"}}),f&&!c&&(0,r.jsx)("div",{className:(0,d.A)(n.bar,n.secondaryBar),style:{width:e.previousShare+"%"}})]}),U=({data:e,withComparison:f=!1,withOverlayLabel:c=!1,primaryColor:Y,secondaryColor:D,valueFormatter:g=$,deltaFormatter:z=X,loading:Q=!1,className:q,style:oe})=>{const V=(0,v.u)().leaderboardChart,le=V?.labelSpacing??x.labelSpacing,se=V?.rowGap??x.rowGap,ne=V?.columnGap??x.columnGap,ie=Y||V?.primaryColor||x.primaryColor,de=D||V?.secondaryColor||x.secondaryColor,ue=V?.deltaColors??x.deltaColors,Z={"--primary-color":ie,"--secondary-color":de,...oe};return!e||e.length===0?(0,r.jsx)("div",{className:(0,d.A)(n.leaderboardChart,Q&&n.loading,q),style:Z,children:(0,r.jsx)("div",{className:n.emptyState,children:Q?"Loading...":"No data available"})}):(0,r.jsx)(p.A,{className:(0,d.A)(n.leaderboardChart,Q&&n.loading,q),templateColumns:"minmax(0, 1fr) auto",rowGap:se,columnGap:ne,style:Z,children:e.map(K=>{const ce=Math.sign(K.delta)+1,me=ue[ce];return(0,r.jsxs)(h.Fragment,{children:[(0,r.jsx)(C.A,{spacing:le,children:(0,r.jsx)(ae,{entry:K,withComparison:f,withOverlayLabel:c})}),(0,r.jsxs)("div",{className:(0,d.A)(n.valueContainer,{[n.overlayLabel]:c}),children:[(0,r.jsx)(i.A,{children:g(K.currentValue)}),f&&(0,r.jsx)(i.A,{style:{color:me},children:z(K.delta)})]})]},K.id)})})},pe=null;try{U.displayName="LeaderboardChart",U.__docgenInfo={description:`LeaderboardChart component displays a ranked list of data with progress bars
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
}`},description:"Formatter for delta values",name:"deltaFormatter",required:!1,type:{name:"(value: number) => string"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling for the chart container",name:"style",required:!1,type:{name:"CSSProperties & { '--bar-border'?: string; '--primary-color'?: string; '--secondary-color'?: string; }"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#LeaderboardChart"]={docgenInfo:U.__docgenInfo,name:"LeaderboardChart",path:"../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#LeaderboardChart"})}catch{}try{leaderboardchart.displayName="leaderboardchart",leaderboardchart.__docgenInfo={description:`LeaderboardChart component displays a ranked list of data with progress bars
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
}`},description:"Formatter for delta values",name:"deltaFormatter",required:!1,type:{name:"(value: number) => string"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling for the chart container",name:"style",required:!1,type:{name:"CSSProperties & { '--bar-border'?: string; '--primary-color'?: string; '--secondary-color'?: string; }"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#leaderboardchart"]={docgenInfo:leaderboardchart.__docgenInfo,name:"leaderboardchart",path:"../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#leaderboardchart"})}catch{}const re={title:"JS Packages/Charts/Types/Leaderboard Chart",component:U,parameters:{layout:"centered",docs:{description:{component:`
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
                `}}},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of leaderboard entries to display",table:{type:{summary:"LeaderboardEntry[]"}}},withComparison:{control:"boolean",description:"Whether to show comparison data (previous period bars and delta values)",table:{defaultValue:{summary:"false"}}},primaryColor:{control:"color",description:"Primary color for current period bars",table:{defaultValue:{summary:"#3858E9"}}},secondaryColor:{control:"color",description:"Secondary color for comparison period bars",table:{defaultValue:{summary:"#66BDFF"}}},valueFormatter:{control:!1,description:"Custom formatter function for values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue with compact notation"}}},deltaFormatter:{control:!1,description:"Custom formatter function for delta values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue as percentage"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name for the chart container",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}}},decorators:[e=>(0,r.jsx)("div",{style:{width:"400px",padding:"20px"},children:(0,r.jsx)(e,{})})]},E={args:{data:t.EJ,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},L={args:{data:t.EJ,withComparison:!1,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},j={args:{data:t.EJ,withOverlayLabel:!0,primaryColor:"#66BDFF"}},T={args:{data:t.EJ,withComparison:!0,loading:!0,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},k={args:{data:t.EJ,withComparison:!0,loading:!1,primaryColor:"#FF6B6B",secondaryColor:"#4ECDC4"}},O={args:{data:t.mg,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},A={args:{data:[],withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},B={args:{data:t.wP,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},M={args:{data:t.Ff,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},P={args:{data:t.EJ,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF",valueFormatter:e=>o(e,"currency",{useMultipliers:!0,decimals:1}),deltaFormatter:e=>o(e/100,"average",{decimals:0})}},W={args:{data:t.EJ,withComparison:!0,loading:!1,primaryColor:"#FF6B6B",secondaryColor:"#4ECDC4",valueFormatter:e=>o(e,"number",{useMultipliers:!1,decimals:0}),deltaFormatter:e=>o(e/100,"average",{decimals:1})}},H=({label:e,imageColor:f,style:c={}})=>(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px",...c},children:[(0,r.jsx)("img",{src:`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='${encodeURIComponent(f)}'/></svg>`,alt:"icon",style:{width:"28px",height:"28px",verticalAlign:"middle",borderRadius:"4px"}}),(0,r.jsx)("span",{style:{fontSize:"13px"},children:e})]}),N={args:{data:t.n$.map(e=>({...e,label:(0,r.jsx)(H,{label:e.label,imageColor:e.imageColor})})),withComparison:!1,loading:!1}},I={args:{data:t.wP,withComparison:!0,loading:!1,primaryColor:"#8B5CF6",secondaryColor:"#06B6D4",valueFormatter:e=>e>=1e6?o(e,"currency",{useMultipliers:!0,decimals:1}):o(e,"currency",{useMultipliers:!1,decimals:0}),deltaFormatter:e=>o(e/100,"average",{decimals:1,signDisplay:"always"})}},R={args:{data:t.EJ,withComparison:!0,loading:!1},decorators:[e=>(0,r.jsx)(l.N,{theme:u.QI,children:(0,r.jsx)("div",{style:{width:"400px",padding:"20px"},children:(0,r.jsx)(e,{})})})]},G={args:{data:t.EJ,withComparison:!0,loading:!1},decorators:[e=>(0,r.jsx)(l.N,{theme:u.pk,children:(0,r.jsx)("div",{style:{width:"400px",padding:"20px"},children:(0,r.jsx)(e,{})})})]},J={args:{data:t.n$.map(e=>({...e,label:(0,r.jsx)(H,{label:e.label,imageColor:e.imageColor,style:{padding:"6px"}})})),primaryColor:"#C8CFF6",withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--bar-border":"4px",fontFamily:'"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'}},decorators:[e=>(0,r.jsx)(l.N,{theme:u.pk,children:(0,r.jsx)(e,{})})]},te=["Default","WithoutComparison","WithOverlayLabel","Loading","CustomColors","SmallDataset","EmptyData","LargeValues","NegativeGrowth","CurrencyFormatting","NumberFormatting","CustomLabel","AdvancedFormatting","JetpackTheme","WooCommerceTheme","OverlayLabelWithImage"];E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withOverlayLabel: true,
    primaryColor: '#66BDFF'
  }
}`,...j.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: true,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...T.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    primaryColor: '#FF6B6B',
    secondaryColor: '#4ECDC4'
  }
}`,...k.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    data: smallDataset,
    withComparison: true,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...O.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    withComparison: true,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...A.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    data: largeValues,
    withComparison: true,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...B.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    data: negativeGrowth,
    withComparison: true,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataWithImageColor.map(entry => ({
      ...entry,
      label: <CustomLabelComponent label={entry.label} imageColor={entry.imageColor} />
    })),
    withComparison: false,
    loading: false
  }
}`,...N.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}}},"../charts/src/hooks/use-global-chart-theme.ts":(S,m,a)=>{a.d(m,{u:()=>C});var l=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=a("../charts/src/providers/chart-context/global-charts-provider.tsx"),t=a("../charts/src/providers/theme/theme-provider.tsx"),s=a("../charts/src/providers/theme/themes.ts"),o=a("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),i=a.n(o);function p(h,d){return i()(h,d,{arrayMerge:(v,b)=>b})}const C=()=>{const d=(0,l.useContext)(u.mJ)?.theme,v=(0,t.R)();return(0,l.useMemo)(()=>p(d??s.zQ,v),[d,v])}},"../charts/src/providers/chart-context/global-charts-provider.tsx":(S,m,a)=>{a.d(m,{Sx:()=>o,jT:()=>i,mJ:()=>s});var l=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=a("../charts/src/providers/theme/themes.ts"),t=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=(0,l.createContext)(null),o=({children:p,theme:C={}})=>{const[h,d]=(0,l.useState)(()=>new Map),v=(0,l.useMemo)(()=>({...u.zQ,...C}),[C]),b=(0,l.useCallback)((y,n)=>{d(r=>new Map(r).set(y,n))},[]),w=(0,l.useCallback)(y=>{d(n=>{const r=new Map(n);return r.delete(y),r})},[]),_=(0,l.useCallback)(y=>h.get(y),[h]),F=(0,l.useMemo)(()=>({charts:h,registerChart:b,unregisterChart:w,getChartData:_,theme:v}),[h,b,w,_,v]);return(0,t.jsx)(s.Provider,{value:F,children:p})},i=()=>{const p=(0,l.useContext)(s);if(!p)throw new Error("useGlobalChartsContext must be used within a GlobalChartsProvider");return p};try{o.displayName="GlobalChartsProvider",o.__docgenInfo={description:"",displayName:"GlobalChartsProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional theme override. Considered static for provider lifecycle.",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"]={docgenInfo:o.__docgenInfo,name:"GlobalChartsProvider",path:"../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(S,m,a)=>{a.d(m,{N:()=>o,R:()=>s});var l=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,l.createContext)({}),s=()=>(0,l.useContext)(t),o=({theme:i={},children:p})=>(0,u.jsx)(t.Provider,{value:i,children:p});try{o.displayName="ThemeProvider",o.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:o.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{s.displayName="useChartTheme",s.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:s.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(S,m,a)=>{a.d(m,{QI:()=>u,pk:()=>t,zQ:()=>l});const l={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#80C8FF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},u={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#006DAB",secondaryColor:"#98C8DF",deltaColors:["#FF8C8F","#757575","#1F9828"]},conversionFunnelChart:{primaryColor:"#006DAB",backgroundColor:"#F3F4F6",positiveChangeColor:"#1F9828",negativeChangeColor:"#FF8C8F"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},t={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"},annotationStyles:{label:{anchorLineStroke:"black",backgroundFill:"#fff"},connector:{stroke:"black"},circleSubject:{stroke:"transparent",fill:"black",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#80C8FF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeWidth:1.5,strokeLinecap:"square"}}}}},"../charts/src/stories/sample-data/index.ts":(S,m,a)=>{a.d(m,{$w:()=>d,B2:()=>u,EJ:()=>o,Ff:()=>C,Gv:()=>t,Hc:()=>w,Mc:()=>F,Ro:()=>v,Sb:()=>s,V_:()=>_,_E:()=>l,f2:()=>y,hk:()=>b,mg:()=>i,n$:()=>h,wP:()=>p});const l=[{group:"United States",label:"United States",data:[{label:"1896",value:20},{label:"1900",value:47},{label:"1904",value:239},{label:"1908",value:47},{label:"1912",value:63},{label:"1920",value:95},{label:"1924",value:99},{label:"1928",value:56},{label:"1932",value:103},{label:"1936",value:56},{label:"1948",value:84},{label:"1952",value:76},{label:"1956",value:74},{label:"1960",value:71},{label:"1964",value:90},{label:"1968",value:107},{label:"1972",value:94},{label:"1976",value:94},{label:"1980",value:0},{label:"1984",value:174},{label:"1988",value:94},{label:"1992",value:108},{label:"1996",value:101},{label:"2000",value:93},{label:"2004",value:101},{label:"2008",value:112},{label:"2012",value:104},{label:"2016",value:121},{label:"2020",value:113},{label:"2024",value:126}]},{group:"Great Britain",label:"Great Britain",data:[{label:"1896",value:7},{label:"1900",value:30},{label:"1904",value:1},{label:"1908",value:146},{label:"1912",value:41},{label:"1920",value:43},{label:"1924",value:34},{label:"1928",value:25},{label:"1932",value:20},{label:"1936",value:33},{label:"1948",value:23},{label:"1952",value:22},{label:"1956",value:24},{label:"1960",value:20},{label:"1964",value:20},{label:"1968",value:13},{label:"1972",value:21},{label:"1976",value:13},{label:"1980",value:21},{label:"1984",value:37},{label:"1988",value:24},{label:"1992",value:20},{label:"1996",value:15},{label:"2000",value:28},{label:"2004",value:30},{label:"2008",value:47},{label:"2012",value:65},{label:"2016",value:67},{label:"2020",value:65},{label:"2024",value:65}]},{group:"Germany",label:"Germany",data:[{label:"1896",value:13},{label:"1900",value:17},{label:"1904",value:18},{label:"1908",value:16},{label:"1912",value:37},{label:"1920",value:0},{label:"1924",value:30},{label:"1928",value:31},{label:"1932",value:20},{label:"1936",value:101},{label:"1948",value:0},{label:"1952",value:24},{label:"1956",value:26},{label:"1960",value:43},{label:"1964",value:36},{label:"1968",value:39},{label:"1972",value:66},{label:"1976",value:90},{label:"1980",value:126},{label:"1984",value:59},{label:"1988",value:142},{label:"1992",value:82},{label:"1996",value:65},{label:"2000",value:57},{label:"2004",value:49},{label:"2008",value:41},{label:"2012",value:44},{label:"2016",value:42},{label:"2020",value:37},{label:"2024",value:33}]}],u=[{group:"New York",label:"New York",data:[{date:new Date("2024-01-01"),value:2},{date:new Date("2024-02-01"),value:3},{date:new Date("2024-03-01"),value:8},{date:new Date("2024-04-01"),value:14},{date:new Date("2024-05-01"),value:20},{date:new Date("2024-06-01"),value:24},{date:new Date("2024-07-01"),value:27},{date:new Date("2024-08-01"),value:26},{date:new Date("2024-09-01"),value:22},{date:new Date("2024-10-01"),value:16},{date:new Date("2024-11-01"),value:10},{date:new Date("2024-12-01"),value:4}],options:{}},{group:"London",label:"London",data:[{date:new Date("2024-01-01"),value:5},{date:new Date("2024-02-01"),value:5},{date:new Date("2024-03-01"),value:7},{date:new Date("2024-04-01"),value:9},{date:new Date("2024-05-01"),value:13},{date:new Date("2024-06-01"),value:16},{date:new Date("2024-07-01"),value:18},{date:new Date("2024-08-01"),value:18},{date:new Date("2024-09-01"),value:15},{date:new Date("2024-10-01"),value:12},{date:new Date("2024-11-01"),value:8},{date:new Date("2024-12-01"),value:6}],options:{}},{group:"Tokyo",label:"Tokyo",data:[{date:new Date("2024-01-01"),value:6},{date:new Date("2024-02-01"),value:7},{date:new Date("2024-03-01"),value:10},{date:new Date("2024-04-01"),value:15},{date:new Date("2024-05-01"),value:20},{date:new Date("2024-06-01"),value:23},{date:new Date("2024-07-01"),value:27},{date:new Date("2024-08-01"),value:28},{date:new Date("2024-09-01"),value:25},{date:new Date("2024-10-01"),value:19},{date:new Date("2024-11-01"),value:14},{date:new Date("2024-12-01"),value:9}],options:{}}],t=[{group:"Revenue",label:"Revenue",data:[{date:new Date("2024-01-01"),value:125e4},{date:new Date("2024-04-01"),value:134e4},{date:new Date("2024-07-01"),value:118e4},{date:new Date("2024-10-01"),value:152e4}],options:{}},{group:"Costs",label:"Costs",data:[{date:new Date("2024-01-01"),value:85e4},{date:new Date("2024-04-01"),value:92e4},{date:new Date("2024-07-01"),value:78e4},{date:new Date("2024-10-01"),value:11e5}],options:{}}],s=[{group:"Visitors",label:"Visitors",data:[{dateString:"2023-01-01",value:1e3},{dateString:"2023-01-02",value:1200},{dateString:"2023-01-03",value:950},{dateString:"2023-01-04",value:1100},{dateString:"2023-01-05",value:1300},{dateString:"2023-01-06",value:1150},{dateString:"2023-01-07",value:980}],options:{}}],o=[{id:"direct",label:"Direct",currentValue:12500,previousValue:1e4,currentShare:100,previousShare:80,delta:25},{id:"social",label:"Social Media",currentValue:8750,previousValue:9500,currentShare:70,previousShare:76,delta:-7.9},{id:"email",label:"Email Marketing",currentValue:6250,previousValue:5800,currentShare:50,previousShare:46,delta:7.8},{id:"search",label:"Search Engine",currentValue:4375,previousValue:4200,currentShare:35,previousShare:33,delta:4.2}],i=[{id:"direct",label:"Direct",currentValue:12500,previousValue:1e4,currentShare:100,previousShare:80,delta:25},{id:"social",label:"Social Media",currentValue:8750,previousValue:9500,currentShare:70,previousShare:76,delta:-7.9}],p=[{id:"large1",label:"Large Value 1",currentValue:125e4,previousValue:1e6,currentShare:100,previousShare:80,delta:25},{id:"large2",label:"Large Value 2",currentValue:875e3,previousValue:95e4,currentShare:70,previousShare:76,delta:-7.9},{id:"large3",label:"Large Value 3",currentValue:625e3,previousValue:58e4,currentShare:50,previousShare:46,delta:7.8}],C=[{id:"negative1",label:"Declining Channel",currentValue:5e3,previousValue:8e3,currentShare:62.5,previousShare:100,delta:-37.5},{id:"negative2",label:"Another Declining",currentValue:3e3,previousValue:6e3,currentShare:37.5,previousShare:75,delta:-50},{id:"negative3",label:"Slight Decline",currentValue:4500,previousValue:4800,currentShare:56.25,previousShare:60,delta:-6.25}],h=[{id:"direct",label:"Direct",currentValue:12500,previousValue:1e4,currentShare:100,previousShare:80,delta:25,imageColor:"#3858E9"},{id:"social",label:"Social Media",currentValue:8750,previousValue:9500,currentShare:30,previousShare:76,delta:-7.9,imageColor:"#66BDFF"},{id:"referral",label:"Referral",currentValue:8750,previousValue:9500,currentShare:10,previousShare:16,delta:-7.9,imageColor:"#8B5CF6"}],d=[{id:"sessions",label:"Sessions",rate:100,count:1e4},{id:"cart",label:"Cart",rate:71.1,count:7110},{id:"checkout",label:"Checkout",rate:52.5,count:5250},{id:"purchase",label:"Purchase",rate:10.3,count:1030}],v=[{id:"sessions",label:"Sessions",rate:100,count:5e3},{id:"cart",label:"Cart",rate:45.2,count:2260},{id:"checkout",label:"Checkout",rate:28.8,count:1440},{id:"purchase",label:"Purchase",rate:6.4,count:320}],b=[{id:"sessions",label:"Sessions",rate:100,count:8e3},{id:"cart",label:"Cart",rate:85.3,count:6824},{id:"checkout",label:"Checkout",rate:72.1,count:5768},{id:"purchase",label:"Purchase",rate:18.7,count:1496}],w=[{group:"primary",label:"Jan 21-Aug 8, 2024",data:[{label:"Organic search",value:3e4},{label:"Affiliates",value:19e3},{label:"Display",value:18e3},{label:"Organic shopping",value:16e3}]},{group:"comparison",label:"Jan 21-Aug 8, 2023",data:[{label:"Organic search",value:2e4},{label:"Affiliates",value:15e3},{label:"Display",value:19900},{label:"Organic shopping",value:20500}]}],_=[{group:"primary",label:"Sales By Product",data:[{label:"Behemoth hat ",value:32400},{label:"Margarita top",value:2e4},{label:"Berlioz dress",value:15e3},{label:"Woland shirt",value:16e3},{label:"Azazello top",value:2e4}]}],F=[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:23},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:17},{label:"Windows",value:8e4,valueDisplay:"80K",percentage:60}],y=[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:5},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:1},{label:"Windows",value:8e4,valueDisplay:"80K",percentage:2}]},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/leaderboard-chart/leaderboard-chart.module.scss":(S,m,a)=>{a.d(m,{A:()=>i});var l=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=a.n(l),t=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=a.n(t),o=s()(u());o.push([S.id,'.scK1ZantNDOdMs0rFKVd{transition:opacity .3s ease-in-out}.scK1ZantNDOdMs0rFKVd.tlwUEjWrwCGx8N4NrQ14{opacity:.5}.j93jSdul6V4LwvSUsI4H{display:grid;align-items:center;grid-template-columns:1fr;row-gap:6px}.j93jSdul6V4LwvSUsI4H.OsVSnJJqv9pQqYx2g_vM{grid-template:"overlap" 1fr/1fr}.j93jSdul6V4LwvSUsI4H.OsVSnJJqv9pQqYx2g_vM>*{-ms-grid-row:1;-ms-grid-column:1;grid-area:overlap}.j93jSdul6V4LwvSUsI4H.OsVSnJJqv9pQqYx2g_vM .WUss5w00KNJQvTfdFcpa{padding-left:8px}.j93jSdul6V4LwvSUsI4H .bQoOgYLHk0HXvYAnrhLB{height:100%;min-height:6px;background-color:var(--bar-color, #3858e9);border-radius:var(--bar-border, 9999px);z-index:-1;transition:width .3s ease-in-out}.j93jSdul6V4LwvSUsI4H .EIjPfycxYmar3fLh1HQi{--bar-color: var(--primary-color, #3858e9)}.j93jSdul6V4LwvSUsI4H .ZJBqXpRuCwaget6iWhxQ{--bar-color: var(--secondary-color, #66bdff)}.ArUixJYV2nlFKkiD6Jjo{display:flex;gap:4px;justify-content:flex-end}.I0tqeGCwbJVNfJ6OjLMw{align-items:center}.oQn1JOj21bg7U0K6tW2z{padding:32px 16px;text-align:center;color:#666;font-size:14px;font-style:italic}',""]),o.locals={leaderboardChart:"scK1ZantNDOdMs0rFKVd",loading:"tlwUEjWrwCGx8N4NrQ14",barWithLabelContainer:"j93jSdul6V4LwvSUsI4H","is-overlay":"OsVSnJJqv9pQqYx2g_vM",label:"WUss5w00KNJQvTfdFcpa",bar:"bQoOgYLHk0HXvYAnrhLB",primaryBar:"EIjPfycxYmar3fLh1HQi",secondaryBar:"ZJBqXpRuCwaget6iWhxQ",valueContainer:"ArUixJYV2nlFKkiD6Jjo",overlayLabel:"I0tqeGCwbJVNfJ6OjLMw",emptyState:"oQn1JOj21bg7U0K6tW2z"};const i=o}}]);
