"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8145],{"../charts/src/components/leaderboard-chart/stories/index.stories.tsx":(x,u,r)=>{r.r(u),r.d(u,{AdvancedFormatting:()=>R,CurrencyFormatting:()=>I,CustomColors:()=>k,CustomLabel:()=>W,Default:()=>L,EmptyData:()=>B,JetpackTheme:()=>G,LargeValues:()=>M,Loading:()=>O,NegativeGrowth:()=>P,NumberFormatting:()=>N,OverlayLabelWithImage:()=>U,SmallDataset:()=>A,WithOverlayLabel:()=>V,WithoutComparison:()=>T,WooCommerceTheme:()=>J,__namedExportsOrder:()=>oe,default:()=>ae});var t=r("../charts/src/providers/theme/theme-provider.tsx"),m=r("../charts/src/providers/theme/themes.ts"),o=r("../charts/src/stories/sample-data/index.ts"),n=r("../number-formatters/src/index.ts");const s=(e,_="number",{decimals:i,useMultipliers:H=!1,signDisplay:F}={})=>{if(e==null)return"";const f=Number(e);if(isNaN(f))return"";switch(_){case"currency":return`$${H?(0,n.qe)(f,{decimals:i??2,numberFormatOptions:{maximumFractionDigits:i??2,signDisplay:F}}):(0,n.ZV)(f,{decimals:i??2,numberFormatOptions:{signDisplay:F}})}`;case"average":return Number.isFinite(f)?(0,n.ZV)(f,{decimals:i??0,numberFormatOptions:{style:"percent",signDisplay:F??"exceptZero"}}):"\u2014";case"number":default:return H?(0,n.qe)(f,{decimals:i??0,numberFormatOptions:{maximumFractionDigits:i??0,signDisplay:F}}):(0,n.ZV)(f,{decimals:i??0,numberFormatOptions:{signDisplay:F}})}};var d=r("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.js"),h=r("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/grid/component.js"),D=r("../../../node_modules/.pnpm/@wordpress+components@30.1.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js"),g=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=r("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),C=r("../charts/src/hooks/use-global-chart-theme.ts"),y=r("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Y=r.n(y),E=r("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/leaderboard-chart/leaderboard-chart.module.scss"),w={};w.insert="head",w.singleton=!1;var z=Y()(E.A,w);const l=E.A.locals||{};var a=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const p={labelSpacing:1.5,rowGap:12,columnGap:4,primaryColor:"#3858E9",secondaryColor:"#66BDFF",deltaColors:["#D63638","#757575","#008A20"]},v=e=>s(e,"number",{useMultipliers:!0,decimals:1}),b=e=>s(e/100,"average",{decimals:0,signDisplay:"exceptZero"}),Q=({label:e})=>(0,a.jsx)(a.Fragment,{children:typeof e=="string"?(0,a.jsx)(d.A,{className:l.label,children:e}):e}),q=({entry:e,withComparison:_,withOverlayLabel:i})=>(0,a.jsxs)("div",{className:(0,c.A)(l.barWithLabelContainer,{[l["is-overlay"]]:i}),children:[(0,a.jsx)(Q,{label:e.label}),(0,a.jsx)("div",{className:(0,c.A)(l.bar,l.primaryBar),style:{width:e.currentShare+"%"}}),_&&!i&&(0,a.jsx)("div",{className:(0,c.A)(l.bar,l.secondaryBar),style:{width:e.previousShare+"%"}})]}),S=({data:e,withComparison:_=!1,withOverlayLabel:i=!1,primaryColor:H,secondaryColor:F,valueFormatter:f=v,deltaFormatter:X=b,loading:Z=!1,className:ee,style:te})=>{const j=(0,C.u)().leaderboardChart,se=j?.labelSpacing??p.labelSpacing,ne=j?.rowGap??p.rowGap,le=j?.columnGap??p.columnGap,ie=H||j?.primaryColor||p.primaryColor,de=F||j?.secondaryColor||p.secondaryColor,ce=j?.deltaColors??p.deltaColors,re={"--primary-color":ie,"--secondary-color":de,...te};return!e||e.length===0?(0,a.jsx)("div",{className:(0,c.A)(l.leaderboardChart,Z&&l.loading,ee),style:re,children:(0,a.jsx)("div",{className:l.emptyState,children:Z?"Loading...":"No data available"})}):(0,a.jsx)(h.A,{className:(0,c.A)(l.leaderboardChart,Z&&l.loading,ee),templateColumns:"minmax(0, 1fr) auto",rowGap:ne,columnGap:le,style:re,children:e.map(K=>{const me=Math.sign(K.delta)+1,ue=ce[me];return(0,a.jsxs)(g.Fragment,{children:[(0,a.jsx)(D.A,{spacing:se,children:(0,a.jsx)(q,{entry:K,withComparison:_,withOverlayLabel:i})}),(0,a.jsxs)("div",{className:(0,c.A)(l.valueContainer,{[l.overlayLabel]:i}),children:[(0,a.jsx)(d.A,{children:f(K.currentValue)}),_&&(0,a.jsx)(d.A,{style:{color:ue},children:X(K.delta)})]})]},K.id)})})},pe=null;try{S.displayName="LeaderboardChart",S.__docgenInfo={description:`LeaderboardChart component displays a ranked list of data with progress bars
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
}`},description:"Formatter for delta values",name:"deltaFormatter",required:!1,type:{name:"(value: number) => string"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling for the chart container",name:"style",required:!1,type:{name:"CSSProperties & { '--bar-border'?: string; '--primary-color'?: string; '--secondary-color'?: string; }"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#LeaderboardChart"]={docgenInfo:S.__docgenInfo,name:"LeaderboardChart",path:"../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#LeaderboardChart"})}catch{}try{leaderboardchart.displayName="leaderboardchart",leaderboardchart.__docgenInfo={description:`LeaderboardChart component displays a ranked list of data with progress bars
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
}`},description:"Formatter for delta values",name:"deltaFormatter",required:!1,type:{name:"(value: number) => string"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styling for the chart container",name:"style",required:!1,type:{name:"CSSProperties & { '--bar-border'?: string; '--primary-color'?: string; '--secondary-color'?: string; }"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#leaderboardchart"]={docgenInfo:leaderboardchart.__docgenInfo,name:"leaderboardchart",path:"../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#leaderboardchart"})}catch{}const ae={title:"JS Packages/Charts/Types/Leaderboard Chart",component:S,parameters:{layout:"centered",docs:{description:{component:`
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
                `}}},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of leaderboard entries to display",table:{type:{summary:"LeaderboardEntry[]"}}},withComparison:{control:"boolean",description:"Whether to show comparison data (previous period bars and delta values)",table:{defaultValue:{summary:"false"}}},primaryColor:{control:"color",description:"Primary color for current period bars",table:{defaultValue:{summary:"#3858E9"}}},secondaryColor:{control:"color",description:"Secondary color for comparison period bars",table:{defaultValue:{summary:"#66BDFF"}}},valueFormatter:{control:!1,description:"Custom formatter function for values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue with compact notation"}}},deltaFormatter:{control:!1,description:"Custom formatter function for delta values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue as percentage"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name for the chart container",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}}},decorators:[e=>(0,a.jsx)("div",{style:{width:"400px",padding:"20px"},children:(0,a.jsx)(e,{})})]},L={args:{data:o.EJ,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},T={args:{data:o.EJ,withComparison:!1,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},V={args:{data:o.EJ,withOverlayLabel:!0,primaryColor:"#66BDFF"}},O={args:{data:o.EJ,withComparison:!0,loading:!0,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},k={args:{data:o.EJ,withComparison:!0,loading:!1,primaryColor:"#FF6B6B",secondaryColor:"#4ECDC4"}},A={args:{data:o.mg,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},B={args:{data:[],withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},M={args:{data:o.wP,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},P={args:{data:o.Ff,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF"}},I={args:{data:o.EJ,withComparison:!0,loading:!1,primaryColor:"#3858E9",secondaryColor:"#66BDFF",valueFormatter:e=>s(e,"currency",{useMultipliers:!0,decimals:1}),deltaFormatter:e=>s(e/100,"average",{decimals:0})}},N={args:{data:o.EJ,withComparison:!0,loading:!1,primaryColor:"#FF6B6B",secondaryColor:"#4ECDC4",valueFormatter:e=>s(e,"number",{useMultipliers:!1,decimals:0}),deltaFormatter:e=>s(e/100,"average",{decimals:1})}},$=({label:e,imageColor:_,style:i={}})=>(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px",...i},children:[(0,a.jsx)("img",{src:`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='${encodeURIComponent(_)}'/></svg>`,alt:"icon",style:{width:"28px",height:"28px",verticalAlign:"middle",borderRadius:"4px"}}),(0,a.jsx)("span",{style:{fontSize:"13px"},children:e})]}),W={args:{data:o.n$.map(e=>({...e,label:(0,a.jsx)($,{label:e.label,imageColor:e.imageColor})})),withComparison:!1,loading:!1}},R={args:{data:o.wP,withComparison:!0,loading:!1,primaryColor:"#8B5CF6",secondaryColor:"#06B6D4",valueFormatter:e=>e>=1e6?s(e,"currency",{useMultipliers:!0,decimals:1}):s(e,"currency",{useMultipliers:!1,decimals:0}),deltaFormatter:e=>s(e/100,"average",{decimals:1,signDisplay:"always"})}},G={args:{data:o.EJ,withComparison:!0,loading:!1},decorators:[e=>(0,a.jsx)(t.N,{theme:m.QI,children:(0,a.jsx)("div",{style:{width:"400px",padding:"20px"},children:(0,a.jsx)(e,{})})})]},J={args:{data:o.EJ,withComparison:!0,loading:!1},decorators:[e=>(0,a.jsx)(t.N,{theme:m.pk,children:(0,a.jsx)("div",{style:{width:"400px",padding:"20px"},children:(0,a.jsx)(e,{})})})]},U={args:{data:o.n$.map(e=>({...e,label:(0,a.jsx)($,{label:e.label,imageColor:e.imageColor,style:{padding:"6px"}})})),primaryColor:"#C8CFF6",withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--bar-border":"4px",fontFamily:'"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'}},decorators:[e=>(0,a.jsx)(t.N,{theme:m.pk,children:(0,a.jsx)(e,{})})]},oe=["Default","WithoutComparison","WithOverlayLabel","Loading","CustomColors","SmallDataset","EmptyData","LargeValues","NegativeGrowth","CurrencyFormatting","NumberFormatting","CustomLabel","AdvancedFormatting","JetpackTheme","WooCommerceTheme","OverlayLabelWithImage"];L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...L.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: false,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...T.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withOverlayLabel: true,
    primaryColor: '#66BDFF'
  }
}`,...V.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    data: smallDataset,
    withComparison: true,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...A.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    withComparison: true,
    loading: false,
    primaryColor: '#3858E9',
    secondaryColor: '#66BDFF'
  }
}`,...B.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataWithImageColor.map(entry => ({
      ...entry,
      label: <CustomLabelComponent label={entry.label} imageColor={entry.imageColor} />
    })),
    withComparison: false,
    loading: false
  }
}`,...W.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}}},"../charts/src/hooks/use-global-chart-theme.ts":(x,u,r)=>{r.d(u,{u:()=>D});var t=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=r("../charts/src/providers/chart-context/global-charts-provider.tsx"),o=r("../charts/src/providers/theme/theme-provider.tsx"),n=r("../charts/src/providers/theme/themes.ts"),s=r("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),d=r.n(s);function h(g,c){return d()(g,c,{arrayMerge:(C,y)=>y})}const D=()=>{const c=(0,t.useContext)(m.mJ)?.theme,C=(0,o.R)();return(0,t.useMemo)(()=>h(c??n.zQ,C),[c,C])}},"../charts/src/providers/chart-context/global-charts-provider.tsx":(x,u,r)=>{r.d(u,{Sx:()=>s,jT:()=>d,mJ:()=>n});var t=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=r("../charts/src/providers/theme/themes.ts"),o=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=(0,t.createContext)(null),s=({children:h,theme:D={}})=>{const[g,c]=(0,t.useState)(()=>new Map),C=(0,t.useMemo)(()=>({...m.zQ,...D}),[D]),y=(0,t.useRef)(new Map);(0,t.useEffect)(()=>{y.current=new Map},[C.colors]);const Y=(0,t.useCallback)((a,p)=>{c(v=>new Map(v).set(a,p))},[]),E=(0,t.useCallback)(a=>{c(p=>{const v=new Map(p);return v.delete(a),v})},[]),w=(0,t.useCallback)(a=>g.get(a),[g]),z=(0,t.useCallback)(({group:a,index:p,overrideColor:v})=>{if(v)return v;const b=C.colors??[];if(a){const Q=y.current.get(a);if(Q)return Q;const q=y.current.size,S=b.length>0?b[q%b.length]:"#000000";return y.current.set(a,S),S}return b.length>0?b[(p||0)%b.length]:"#000000"},[C.colors]),l=(0,t.useMemo)(()=>({charts:g,registerChart:Y,unregisterChart:E,getChartData:w,theme:C,resolveGroupColor:z}),[g,Y,E,w,C,z]);return(0,o.jsx)(n.Provider,{value:l,children:h})},d=()=>{const h=(0,t.useContext)(n);if(!h)throw new Error("useGlobalChartsContext must be used within a GlobalChartsProvider");return h};try{s.displayName="GlobalChartsProvider",s.__docgenInfo={description:"",displayName:"GlobalChartsProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional theme override. Considered static for provider lifecycle.",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"]={docgenInfo:s.__docgenInfo,name:"GlobalChartsProvider",path:"../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(x,u,r)=>{r.d(u,{N:()=>s,R:()=>n});var t=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,t.createContext)({}),n=()=>(0,t.useContext)(o),s=({theme:d={},children:h})=>(0,m.jsx)(o.Provider,{value:d,children:h});try{s.displayName="ThemeProvider",s.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:s.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{n.displayName="useChartTheme",n.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:n.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(x,u,r)=>{r.d(u,{QI:()=>m,pk:()=>o,zQ:()=>t});const t={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#80C8FF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},m={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#006DAB",secondaryColor:"#98C8DF",deltaColors:["#FF8C8F","#757575","#1F9828"]},conversionFunnelChart:{primaryColor:"#006DAB",backgroundColor:"#F3F4F6",positiveChangeColor:"#1F9828",negativeChangeColor:"#FF8C8F"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},o={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"},annotationStyles:{label:{anchorLineStroke:"black",backgroundFill:"#fff"},connector:{stroke:"black"},circleSubject:{stroke:"transparent",fill:"black",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#80C8FF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeWidth:1.5,strokeLinecap:"square"}}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/leaderboard-chart/leaderboard-chart.module.scss":(x,u,r)=>{r.d(u,{A:()=>d});var t=r("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=r.n(t),o=r("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),n=r.n(o),s=n()(m());s.push([x.id,'.scK1ZantNDOdMs0rFKVd{transition:opacity .3s ease-in-out}.scK1ZantNDOdMs0rFKVd.tlwUEjWrwCGx8N4NrQ14{opacity:.5}.j93jSdul6V4LwvSUsI4H{display:grid;align-items:center;grid-template-columns:1fr;row-gap:6px}.j93jSdul6V4LwvSUsI4H.OsVSnJJqv9pQqYx2g_vM{grid-template:"overlap" 1fr/1fr}.j93jSdul6V4LwvSUsI4H.OsVSnJJqv9pQqYx2g_vM>*{-ms-grid-row:1;-ms-grid-column:1;grid-area:overlap}.j93jSdul6V4LwvSUsI4H.OsVSnJJqv9pQqYx2g_vM .WUss5w00KNJQvTfdFcpa{padding-left:8px}.j93jSdul6V4LwvSUsI4H .bQoOgYLHk0HXvYAnrhLB{height:100%;min-height:6px;background-color:var(--bar-color, #3858e9);border-radius:var(--bar-border, 9999px);z-index:-1;transition:width .3s ease-in-out}.j93jSdul6V4LwvSUsI4H .EIjPfycxYmar3fLh1HQi{--bar-color: var(--primary-color, #3858e9)}.j93jSdul6V4LwvSUsI4H .ZJBqXpRuCwaget6iWhxQ{--bar-color: var(--secondary-color, #66bdff)}.ArUixJYV2nlFKkiD6Jjo{display:flex;gap:4px;justify-content:flex-end}.I0tqeGCwbJVNfJ6OjLMw{align-items:center}.oQn1JOj21bg7U0K6tW2z{padding:32px 16px;text-align:center;color:#666;font-size:14px;font-style:italic}',""]),s.locals={leaderboardChart:"scK1ZantNDOdMs0rFKVd",loading:"tlwUEjWrwCGx8N4NrQ14",barWithLabelContainer:"j93jSdul6V4LwvSUsI4H","is-overlay":"OsVSnJJqv9pQqYx2g_vM",label:"WUss5w00KNJQvTfdFcpa",bar:"bQoOgYLHk0HXvYAnrhLB",primaryBar:"EIjPfycxYmar3fLh1HQi",secondaryBar:"ZJBqXpRuCwaget6iWhxQ",valueContainer:"ArUixJYV2nlFKkiD6Jjo",overlayLabel:"I0tqeGCwbJVNfJ6OjLMw",emptyState:"oQn1JOj21bg7U0K6tW2z"};const d=s}}]);
