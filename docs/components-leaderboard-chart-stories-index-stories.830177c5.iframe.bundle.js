"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8145],{"../charts/src/components/leaderboard-chart/stories/index.stories.tsx":((E,u,e)=>{e.r(u),e.d(u,{AdvancedFormatting:()=>n,CurrencyFormatting:()=>m,CustomColors:()=>c,CustomLabel:()=>C,Default:()=>v,EmptyData:()=>x,LargeValues:()=>F,Loading:()=>_,NegativeGrowth:()=>j,NumberFormatting:()=>g,OverlayLabelWithImage:()=>y,SmallDataset:()=>s,WithOverlayLabel:()=>h,WithoutComparison:()=>f,__namedExportsOrder:()=>D,default:()=>L});var r=e("../charts/src/providers/chart-context/themes.ts"),l=e("../charts/src/stories/chart-decorator.tsx"),d=e("../charts/src/stories/theme-config.tsx"),t=e("../charts/src/stories/sample-data/index.ts"),o=e("../charts/src/utils/format-metric-value.ts"),b=e("../charts/src/utils/color-utils.ts"),p=e("../charts/src/components/leaderboard-chart/leaderboard-chart.tsx"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const L={title:"JS Packages/Charts/Types/Leaderboard Chart",component:p.A,parameters:{layout:"centered",docs:{description:{component:`
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

The component uses CSS Modules for styling. You can customize the border radius using CSS custom properties:

\`\`\`css
.myCustomChart {
    --a8c--charts--leaderboard--bar--border-radius: 8px;
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
                `}}},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of leaderboard entries to display",table:{type:{summary:"LeaderboardEntry[]"}}},withComparison:{control:"boolean",description:"Whether to show comparison data (previous period bars and delta values)",table:{defaultValue:{summary:"false"}}},primaryColor:{control:"color",description:"Primary color for current period bars",table:{defaultValue:{summary:r.zQ.leaderboardChart.primaryColor}}},secondaryColor:{control:"color",description:"Secondary color for comparison period bars",table:{defaultValue:{summary:r.zQ.leaderboardChart.secondaryColor}}},valueFormatter:{control:!1,description:"Custom formatter function for values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue with compact notation"}}},deltaFormatter:{control:!1,description:"Custom formatter function for delta values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue as percentage"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name for the chart container",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}},...l.xo,...d.jW},args:{primaryColor:void 0,secondaryColor:void 0,themeName:"default"},decorators:[l.OI]},v={args:{data:t.EJ,withComparison:!0,loading:!1}},f={args:{data:t.EJ,withComparison:!1,loading:!1}},h={args:{data:t.EJ,withOverlayLabel:!0}},_={args:{data:t.EJ,withComparison:!0,loading:!0}},c={args:{data:t.EJ,withComparison:!0,loading:!1,primaryColor:"red",secondaryColor:"green"}},s={args:{data:t.mg,withComparison:!0,loading:!1}},x={args:{data:[],withComparison:!0,loading:!1}},F={args:{data:t.wP,withComparison:!0,loading:!1}},j={args:{data:t.Ff,withComparison:!0,loading:!1}},m={args:{data:t.EJ,withComparison:!0,loading:!1,valueFormatter:a=>(0,o.d)(a,"currency",{useMultipliers:!0,decimals:1}),deltaFormatter:a=>(0,o.d)(a/100,"average",{decimals:0})}},g={args:{data:t.EJ,withComparison:!0,loading:!1,valueFormatter:a=>(0,o.d)(a,"number",{useMultipliers:!1,decimals:0}),deltaFormatter:a=>(0,o.d)(a/100,"average",{decimals:1})}},S=({label:a,imageColor:M,style:V={}})=>(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px",...V},children:[(0,i.jsx)("img",{src:`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='${encodeURIComponent(M)}'/></svg>`,alt:"icon",style:{width:"28px",height:"28px",verticalAlign:"middle",borderRadius:"4px"}}),(0,i.jsx)("span",{style:{fontSize:"13px"},children:a})]}),C={args:{data:t.n$.map(a=>({...a,label:(0,i.jsx)(S,{label:a.label,imageColor:a.imageColor})})),withComparison:!1,loading:!1}},n={args:{data:t.wP,withComparison:!0,loading:!1,valueFormatter:a=>a>=1e6?(0,o.d)(a,"currency",{useMultipliers:!0,decimals:1}):(0,o.d)(a,"currency",{useMultipliers:!1,decimals:0}),deltaFormatter:a=>(0,o.d)(a/100,"average",{decimals:1,signDisplay:"always"})}},y={args:{data:t.n$.map(a=>({...a,label:(0,i.jsx)(S,{label:a.label,imageColor:a.imageColor,style:{padding:"6px"}})})),withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--a8c--charts--leaderboard--bar--border-radius":"4px",fontFamily:'"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'}},render:a=>{const M=a.themeName||"default",k=d.yI[M]?.leaderboardChart?.primaryColor||r.zQ.leaderboardChart.primaryColor,O=(0,b.j)(k,.08);return(0,i.jsx)(p.A,{...a,primaryColor:O})}},D=["Default","WithoutComparison","WithOverlayLabel","Loading","CustomColors","SmallDataset","EmptyData","LargeValues","NegativeGrowth","CurrencyFormatting","NumberFormatting","CustomLabel","AdvancedFormatting","OverlayLabelWithImage"];v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false
  }
}`,...v.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: false,
    loading: false
  }
}`,...f.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withOverlayLabel: true
  }
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: true
  }
}`,..._.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    primaryColor: 'red',
    secondaryColor: 'green'
  }
}`,...c.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    data: smallDataset,
    withComparison: true,
    loading: false
  }
}`,...s.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    withComparison: true,
    loading: false
  }
}`,...x.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    data: largeValues,
    withComparison: true,
    loading: false
  }
}`,...F.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    data: negativeGrowth,
    withComparison: true,
    loading: false
  }
}`,...j.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    valueFormatter: (value: number) => formatMetricValue(value, 'currency', {
      useMultipliers: true,
      decimals: 1
    }),
    deltaFormatter: (value: number) => formatMetricValue(value / 100, 'average', {
      decimals: 0
    })
  }
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    valueFormatter: (value: number) => formatMetricValue(value, 'number', {
      useMultipliers: false,
      decimals: 0
    }),
    deltaFormatter: (value: number) => formatMetricValue(value / 100, 'average', {
      decimals: 1
    })
  }
}`,...g.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataWithImageColor.map(entry => ({
      ...entry,
      label: <CustomLabelComponent label={entry.label} imageColor={entry.imageColor} />
    })),
    withComparison: false,
    loading: false
  }
}`,...C.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    data: largeValues,
    withComparison: true,
    loading: false,
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
}`,...n.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataWithImageColor.map(entry => ({
      ...entry,
      label: <CustomLabelComponent label={entry.label} imageColor={entry.imageColor} style={{
        padding: '6px'
      }} />
    })),
    withComparison: true,
    withOverlayLabel: true,
    loading: false,
    style: {
      '--a8c--charts--leaderboard--bar--border-radius': '4px',
      fontFamily: \`"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif\`
    }
  },
  render: args => {
    const themeName = args.themeName || 'default';
    const theme = CHART_THEME_MAP[themeName];
    const primaryColor = theme?.leaderboardChart?.primaryColor || defaultTheme.leaderboardChart.primaryColor;
    const primaryColorWithAlpha = hexToRgba(primaryColor, 0.08);
    return <LeaderboardChart {...args} primaryColor={primaryColorWithAlpha} />;
  }
}`,...y.parameters?.docs?.source}}}}),"../charts/src/components/leaderboard-chart/leaderboard-chart.tsx":((E,u,e)=>{e.d(u,{A:()=>C});var r=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.js"),l=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/grid/component.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),b=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),p=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),i=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),w=e("../charts/src/utils/format-metric-value.ts"),L=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),v=e.n(L),f=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/leaderboard-chart/leaderboard-chart.module.scss"),h={};h.insert="head",h.singleton=!1;var _=v()(f.A,h);const c=f.A.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const x=n=>(0,w.d)(n,"number",{useMultipliers:!0,decimals:1}),F=n=>(0,w.d)(n/100,"average",{decimals:0,signDisplay:"exceptZero"}),j=({label:n})=>(0,s.jsx)(s.Fragment,{children:typeof n=="string"?(0,s.jsx)(r.A,{className:c.label,children:n}):n}),m=({entry:n,withComparison:y,withOverlayLabel:D,primaryColor:a,secondaryColor:M})=>(0,s.jsxs)("div",{className:(0,o.A)(c.barWithLabelContainer,{[c["is-overlay"]]:D}),children:[(0,s.jsx)(j,{label:n.label}),(0,s.jsx)("div",{className:c.bar,style:{width:n.currentShare+"%",backgroundColor:a}}),y&&!D&&(0,s.jsx)("div",{className:c.bar,style:{width:n.previousShare+"%",backgroundColor:M}})]}),g=({data:n,withComparison:y=!1,withOverlayLabel:D=!1,primaryColor:a,secondaryColor:M,valueFormatter:V=x,deltaFormatter:k=F,loading:O=!1,className:P,style:T})=>{const{leaderboardChart:I}=(0,b.p)(),{labelSpacing:N,rowGap:B,columnGap:R,primaryColor:U,secondaryColor:K,deltaColors:G}=I,{resolveGroupColor:W}=(0,p.j)(),J=W({index:0,overrideColor:a||U}),H=W({index:1,overrideColor:M||K});return!n||n.length===0?(0,s.jsx)("div",{className:(0,o.A)(c.leaderboardChart,O&&c.loading,P),style:T,children:(0,s.jsx)("div",{className:c.emptyState,children:O?"Loading...":"No data available"})}):(0,s.jsx)(l.A,{className:(0,o.A)(c.leaderboardChart,O&&c.loading,P),templateColumns:"minmax(0, 1fr) auto",rowGap:B,columnGap:R,style:T,children:n.map(A=>{const Q=Math.sign(A.delta)+1,Y=G[Q];return(0,s.jsxs)(t.Fragment,{children:[(0,s.jsx)(d.A,{spacing:N,children:(0,s.jsx)(m,{entry:A,withComparison:y,withOverlayLabel:D,primaryColor:J,secondaryColor:H})}),(0,s.jsxs)("div",{className:(0,o.A)(c.valueContainer,{[c.overlayLabel]:D}),children:[(0,s.jsx)(r.A,{children:V(A.currentValue)}),y&&(0,s.jsx)(r.A,{style:{color:Y},children:k(A.delta)})]})]},A.id)})})},C=n=>(0,t.useContext)(i.m)?(0,s.jsx)(g,{...n}):(0,s.jsx)(i.S,{children:(0,s.jsx)(g,{...n})});try{leaderboardchart.displayName="leaderboardchart",leaderboardchart.__docgenInfo={description:"",displayName:"leaderboardchart",props:{withComparison:{defaultValue:{value:"false"},description:"Whether to show comparison data",name:"withComparison",required:!1,type:{name:"boolean"}},withOverlayLabel:{defaultValue:{value:"false"},description:"Whether to overlay the label on top of bar",name:"withOverlayLabel",required:!1,type:{name:"boolean"}},primaryColor:{defaultValue:null,description:"Primary color for current period bars",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:null,description:"Secondary color for comparison period bars",name:"secondaryColor",required:!1,type:{name:"string"}},valueFormatter:{defaultValue:{value:`( value: number ): string => {
	return formatMetricValue( value, 'number', {
		useMultipliers: true,
		decimals: 1,
	} );
}`},description:"Formatter for values",name:"valueFormatter",required:!1,type:{name:"(value: number) => string"}},deltaFormatter:{defaultValue:{value:`( value: number ): string => {
	return formatMetricValue( value / 100, 'average', {
		decimals: 0,
		signDisplay: 'exceptZero',
	} );
}`},description:"Formatter for delta values",name:"deltaFormatter",required:!1,type:{name:"(value: number) => string"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"Custom styling for the chart container",name:"style",required:!1,type:{name:"CSSProperties & { '--a8c--charts--leaderboard--bar--border-radius'?: string; }"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"LeaderboardEntry[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#leaderboardchart"]={docgenInfo:leaderboardchart.__docgenInfo,name:"leaderboardchart",path:"../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#leaderboardchart"})}catch{}}),"../charts/src/providers/chart-context/global-charts-provider.tsx":((E,u,e)=>{e.d(u,{m:()=>p,S:()=>i});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),d=e.n(l);function t(w,L){return d()(w,L,{arrayMerge:(v,f)=>f})}var o=e("../charts/src/providers/chart-context/themes.ts"),b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const p=(0,r.createContext)(null),i=({children:w,theme:L={}})=>{const[v,f]=(0,r.useState)(()=>new Map),h=(0,r.useMemo)(()=>t(o.zQ,L),[L]),_=(0,r.useRef)(new Map);(0,r.useEffect)(()=>{_.current=new Map},[h.colors]);const c=(0,r.useCallback)((m,g)=>{f(S=>new Map(S).set(m,g))},[]),s=(0,r.useCallback)(m=>{f(g=>{const S=new Map(g);return S.delete(m),S})},[]),x=(0,r.useCallback)(m=>v.get(m),[v]),F=(0,r.useCallback)(({group:m,index:g,overrideColor:S})=>{if(S)return S;const C=h.colors??[];if(m){const n=_.current.get(m);if(n)return n;const y=_.current.size,D=C.length>0?C[y%C.length]:"#000000";return _.current.set(m,D),D}return C.length>0?C[(g||0)%C.length]:"#000000"},[h.colors]),j=(0,r.useMemo)(()=>({charts:v,registerChart:c,unregisterChart:s,getChartData:x,theme:h,resolveGroupColor:F}),[v,c,s,x,h,F]);return(0,b.jsx)(p.Provider,{value:j,children:w})};try{i.displayName="GlobalChartsProvider",i.__docgenInfo={description:"",displayName:"GlobalChartsProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional theme override. Considered static for provider lifecycle.",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"]={docgenInfo:i.__docgenInfo,name:"GlobalChartsProvider",path:"../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"})}catch{}}),"../charts/src/providers/chart-context/hooks/use-global-charts-context.ts":((E,u,e)=>{e.d(u,{j:()=>d});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=e("../charts/src/providers/chart-context/global-charts-provider.tsx");const d=()=>{const t=(0,r.useContext)(l.m);if(!t)throw new Error("useGlobalChartsContext must be used within a GlobalChartsProvider");return t}}),"../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts":((E,u,e)=>{e.d(u,{p:()=>t});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),d=e("../charts/src/providers/chart-context/themes.ts");const t=()=>(0,r.useContext)(l.m)?.theme??d.zQ}),"../charts/src/providers/chart-context/themes.ts":((E,u,e)=>{e.d(u,{QI:()=>l,pk:()=>d,zQ:()=>r});const r={backgroundColor:"#FFFFFF",labelBackgroundColor:"transparent",labelTextColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},legendContainerStyles:{},seriesLineStyles:[],legendShapeStyles:[],glyphs:[],annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#006DAB",secondaryColor:"#98C8DF",deltaColors:["#FF8C8F","#757575","#1F9828"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},l={backgroundColor:"#FFFFFF",labelBackgroundColor:"transparent",labelTextColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#006DAB",secondaryColor:"#98C8DF",deltaColors:["#FF8C8F","#757575","#1F9828"]},conversionFunnelChart:{primaryColor:"#006DAB",backgroundColor:"#F3F4F6",positiveChangeColor:"#1F9828",negativeChangeColor:"#FF8C8F"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},d={backgroundColor:"#FFFFFF",labelBackgroundColor:"transparent",labelTextColor:"#FFFFFF",colors:["#3858E9","#873EFF","#66BDFF","#7B90FF","#EB6594"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"},annotationStyles:{label:{anchorLineStroke:"black",backgroundFill:"#fff"},connector:{stroke:"black"},circleSubject:{stroke:"transparent",fill:"black",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#66BDFF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeWidth:1.5,strokeLinecap:"square"}}}}}),"../charts/src/utils/color-utils.ts":((E,u,e)=>{e.d(u,{j:()=>r});const r=(l,d)=>{if(typeof l!="string")throw new Error("Hex color must be a string");if(!l.startsWith("#"))throw new Error("Hex color must start with #");if(l.length!==7)throw new Error("Hex color must be 7 characters long (e.g., #ff0000)");const t=l.slice(1);if(!/^[0-9a-fA-F]{6}$/.test(t))throw new Error("Hex color contains invalid characters. Only 0-9, a-f, A-F are allowed");if(typeof d!="number"||isNaN(d))throw new Error("Alpha must be a number");const o=parseInt(l.slice(1,3),16),b=parseInt(l.slice(3,5),16),p=parseInt(l.slice(5,7),16);return`rgba(${o}, ${b}, ${p}, ${d})`}}),"../charts/src/utils/format-metric-value.ts":((E,u,e)=>{e.d(u,{d:()=>l});var r=e("../number-formatters/src/index.ts");const l=(d,t="number",{decimals:o,useMultipliers:b=!1,signDisplay:p}={})=>{if(d==null)return"";const i=Number(d);if(isNaN(i))return"";switch(t){case"currency":return`$${b?(0,r.qe)(i,{decimals:o??2,numberFormatOptions:{maximumFractionDigits:o??2,signDisplay:p}}):(0,r.ZV)(i,{decimals:o??2,numberFormatOptions:{signDisplay:p}})}`;case"average":return Number.isFinite(i)?(0,r.ZV)(i,{decimals:o??0,numberFormatOptions:{style:"percent",signDisplay:p??"exceptZero"}}):"\u2014";case"number":default:return b?(0,r.qe)(i,{decimals:o??0,numberFormatOptions:{maximumFractionDigits:o??0,signDisplay:p}}):(0,r.ZV)(i,{decimals:o??0,numberFormatOptions:{signDisplay:p}})}}}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/leaderboard-chart/leaderboard-chart.module.scss":((E,u,e)=>{e.d(u,{A:()=>b});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(r),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(d),o=t()(l());o.push([E.id,'.scK1ZantNDOdMs0rFKVd{transition:opacity .3s ease-in-out}.scK1ZantNDOdMs0rFKVd.tlwUEjWrwCGx8N4NrQ14{opacity:.5}.j93jSdul6V4LwvSUsI4H{display:grid;align-items:center;grid-template-columns:1fr;row-gap:6px;isolation:isolate}.j93jSdul6V4LwvSUsI4H.OsVSnJJqv9pQqYx2g_vM{grid-template:"overlap" 1fr/1fr}.j93jSdul6V4LwvSUsI4H.OsVSnJJqv9pQqYx2g_vM>*{-ms-grid-row:1;-ms-grid-column:1;grid-area:overlap}.j93jSdul6V4LwvSUsI4H.OsVSnJJqv9pQqYx2g_vM .WUss5w00KNJQvTfdFcpa{padding-left:8px}.j93jSdul6V4LwvSUsI4H .bQoOgYLHk0HXvYAnrhLB{height:100%;min-height:6px;border-radius:var(--a8c--charts--leaderboard--bar--border-radius, 9999px);z-index:-1;transition:width .3s ease-in-out}.ArUixJYV2nlFKkiD6Jjo{display:flex;gap:4px;justify-content:flex-end}.I0tqeGCwbJVNfJ6OjLMw{align-items:center}.oQn1JOj21bg7U0K6tW2z{padding:32px 16px;text-align:center;color:#666;font-size:14px;font-style:italic}',""]),o.locals={leaderboardChart:"scK1ZantNDOdMs0rFKVd",loading:"tlwUEjWrwCGx8N4NrQ14",barWithLabelContainer:"j93jSdul6V4LwvSUsI4H","is-overlay":"OsVSnJJqv9pQqYx2g_vM",label:"WUss5w00KNJQvTfdFcpa",bar:"bQoOgYLHk0HXvYAnrhLB",valueContainer:"ArUixJYV2nlFKkiD6Jjo",overlayLabel:"I0tqeGCwbJVNfJ6OjLMw",emptyState:"oQn1JOj21bg7U0K6tW2z"};const b=o})}]);
