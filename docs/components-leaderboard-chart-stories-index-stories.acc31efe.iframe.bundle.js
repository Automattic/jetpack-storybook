"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8145],{"../charts/src/components/leaderboard-chart/stories/index.stories.tsx":((E,m,e)=>{e.r(m),e.d(m,{AdvancedFormatting:()=>n,CurrencyFormatting:()=>u,CustomColors:()=>i,CustomLabel:()=>C,Default:()=>_,EmptyData:()=>F,LargeValues:()=>S,Loading:()=>f,NegativeGrowth:()=>L,NumberFormatting:()=>g,OverlayLabelWithImage:()=>y,SmallDataset:()=>s,WithOverlayLabel:()=>h,WithoutComparison:()=>v,__namedExportsOrder:()=>j,default:()=>w});var r=e("../charts/src/providers/chart-context/themes.ts"),l=e("../charts/src/stories/chart-decorator.tsx"),d=e("../charts/src/stories/theme-config.tsx"),t=e("../charts/src/stories/sample-data/index.ts"),o=e("../charts/src/utils/format-metric-value.ts"),b=e("../charts/src/utils/color-utils.ts"),p=e("../charts/src/components/leaderboard-chart/leaderboard-chart.tsx"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const w={title:"JS Packages/Charts/Types/Leaderboard Chart",component:p.A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of leaderboard entries to display",table:{type:{summary:"LeaderboardEntry[]"}}},withComparison:{control:"boolean",description:"Whether to show comparison data (previous period bars and delta values)",table:{defaultValue:{summary:"false"}}},primaryColor:{control:"color",description:"Primary color for current period bars",table:{defaultValue:{summary:r.zQ.leaderboardChart.primaryColor}}},secondaryColor:{control:"color",description:"Secondary color for comparison period bars",table:{defaultValue:{summary:r.zQ.leaderboardChart.secondaryColor}}},valueFormatter:{control:!1,description:"Custom formatter function for values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue with compact notation"}}},deltaFormatter:{control:!1,description:"Custom formatter function for delta values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue as percentage"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name for the chart container",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}},...l.xo,...d.jW},args:{primaryColor:void 0,secondaryColor:void 0,themeName:"default"},decorators:[l.OI]},_={args:{data:t.EJ,withComparison:!0,loading:!1}},v={args:{data:t.EJ,withComparison:!1,loading:!1}},h={args:{data:t.EJ,withOverlayLabel:!0}},f={args:{data:t.EJ,withComparison:!0,loading:!0}},i={args:{data:t.EJ,withComparison:!0,loading:!1,primaryColor:"red",secondaryColor:"green"}},s={args:{data:t.mg,withComparison:!0,loading:!1}},F={args:{data:[],withComparison:!0,loading:!1}},S={args:{data:t.wP,withComparison:!0,loading:!1}},L={args:{data:t.Ff,withComparison:!0,loading:!1}},u={args:{data:t.EJ,withComparison:!0,loading:!1,valueFormatter:a=>(0,o.d)(a,"currency",{useMultipliers:!0,decimals:1}),deltaFormatter:a=>(0,o.d)(a/100,"average",{decimals:0})}},g={args:{data:t.EJ,withComparison:!0,loading:!1,valueFormatter:a=>(0,o.d)(a,"number",{useMultipliers:!1,decimals:0}),deltaFormatter:a=>(0,o.d)(a/100,"average",{decimals:1})}},x=({label:a,imageColor:O,style:k={}})=>(0,c.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px",...k},children:[(0,c.jsx)("img",{src:`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='${encodeURIComponent(O)}'/></svg>`,alt:"icon",style:{width:"28px",height:"28px",verticalAlign:"middle",borderRadius:"4px"}}),(0,c.jsx)("span",{style:{fontSize:"13px"},children:a})]}),C={args:{data:t.n$.map(a=>({...a,label:(0,c.jsx)(x,{label:a.label,imageColor:a.imageColor})})),withComparison:!1,loading:!1}},n={args:{data:t.wP,withComparison:!0,loading:!1,valueFormatter:a=>a>=1e6?(0,o.d)(a,"currency",{useMultipliers:!0,decimals:1}):(0,o.d)(a,"currency",{useMultipliers:!1,decimals:0}),deltaFormatter:a=>(0,o.d)(a/100,"average",{decimals:1,signDisplay:"always"})}},y={args:{data:t.n$.map(a=>({...a,label:(0,c.jsx)(x,{label:a.label,imageColor:a.imageColor,style:{padding:"6px"}})})),withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--a8c--charts--leaderboard--bar--border-radius":"4px",fontFamily:'"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'}},render:a=>{const O=a.themeName||"default",P=d.yI[O]?.leaderboardChart?.primaryColor||r.zQ.leaderboardChart.primaryColor,M=(0,b.j)(P,.08);return(0,c.jsx)(p.A,{...a,primaryColor:M})}},j=["Default","WithoutComparison","WithOverlayLabel","Loading","CustomColors","SmallDataset","EmptyData","LargeValues","NegativeGrowth","CurrencyFormatting","NumberFormatting","CustomLabel","AdvancedFormatting","OverlayLabelWithImage"];_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: false,
    loading: false
  }
}`,...v.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withOverlayLabel: true
  }
}`,...h.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: true
  }
}`,...f.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    primaryColor: 'red',
    secondaryColor: 'green'
  }
}`,...i.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    data: smallDataset,
    withComparison: true,
    loading: false
  }
}`,...s.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    withComparison: true,
    loading: false
  }
}`,...F.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    data: largeValues,
    withComparison: true,
    loading: false
  }
}`,...S.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    data: negativeGrowth,
    withComparison: true,
    loading: false
  }
}`,...L.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}}}),"../charts/src/components/leaderboard-chart/leaderboard-chart.tsx":((E,m,e)=>{e.d(m,{A:()=>C});var r=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.js"),l=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/grid/component.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),b=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),p=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),c=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),D=e("../charts/src/utils/format-metric-value.ts"),w=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(w),v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/leaderboard-chart/leaderboard-chart.module.scss"),h={};h.insert="head",h.singleton=!1;var f=_()(v.A,h);const i=v.A.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const F=n=>(0,D.d)(n,"number",{useMultipliers:!0,decimals:1}),S=n=>(0,D.d)(n/100,"average",{decimals:0,signDisplay:"exceptZero"}),L=({label:n})=>(0,s.jsx)(s.Fragment,{children:typeof n=="string"?(0,s.jsx)(r.A,{className:i.label,children:n}):n}),u=({entry:n,withComparison:y,withOverlayLabel:j,primaryColor:a,secondaryColor:O})=>(0,s.jsxs)("div",{className:(0,o.A)(i.barWithLabelContainer,{[i["is-overlay"]]:j}),children:[(0,s.jsx)(L,{label:n.label}),(0,s.jsx)("div",{className:i.bar,style:{width:n.currentShare+"%",backgroundColor:a}}),y&&!j&&(0,s.jsx)("div",{className:i.bar,style:{width:n.previousShare+"%",backgroundColor:O}})]}),g=({data:n,withComparison:y=!1,withOverlayLabel:j=!1,primaryColor:a,secondaryColor:O,valueFormatter:k=F,deltaFormatter:P=S,loading:M=!1,className:T,style:W})=>{const{leaderboardChart:I}=(0,b.p)(),{labelSpacing:N,rowGap:B,columnGap:R,primaryColor:U,secondaryColor:K,deltaColors:G}=I,{resolveGroupColor:V}=(0,p.j)(),J=V({index:0,overrideColor:a||U}),Q=V({index:1,overrideColor:O||K});return!n||n.length===0?(0,s.jsx)("div",{className:(0,o.A)(i.leaderboardChart,M&&i.loading,T),style:W,children:(0,s.jsx)("div",{className:i.emptyState,children:M?"Loading...":"No data available"})}):(0,s.jsx)(l.A,{className:(0,o.A)(i.leaderboardChart,M&&i.loading,T),templateColumns:"minmax(0, 1fr) auto",rowGap:B,columnGap:R,style:W,children:n.map(A=>{const H=Math.sign(A.delta)+1,Y=G[H];return(0,s.jsxs)(t.Fragment,{children:[(0,s.jsx)(d.A,{spacing:N,children:(0,s.jsx)(u,{entry:A,withComparison:y,withOverlayLabel:j,primaryColor:J,secondaryColor:Q})}),(0,s.jsxs)("div",{className:(0,o.A)(i.valueContainer,{[i.overlayLabel]:j}),children:[(0,s.jsx)(r.A,{children:k(A.currentValue)}),y&&(0,s.jsx)(r.A,{style:{color:Y},children:P(A.delta)})]})]},A.id)})})},C=n=>(0,t.useContext)(c.m)?(0,s.jsx)(g,{...n}):(0,s.jsx)(c.S,{children:(0,s.jsx)(g,{...n})});try{leaderboardchart.displayName="leaderboardchart",leaderboardchart.__docgenInfo={description:"",displayName:"leaderboardchart",props:{withComparison:{defaultValue:{value:"false"},description:"Whether to show comparison data",name:"withComparison",required:!1,type:{name:"boolean"}},withOverlayLabel:{defaultValue:{value:"false"},description:"Whether to overlay the label on top of bar",name:"withOverlayLabel",required:!1,type:{name:"boolean"}},primaryColor:{defaultValue:null,description:"Primary color for current period bars",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:null,description:"Secondary color for comparison period bars",name:"secondaryColor",required:!1,type:{name:"string"}},valueFormatter:{defaultValue:{value:`( value: number ): string => {
	return formatMetricValue( value, 'number', {
		useMultipliers: true,
		decimals: 1,
	} );
}`},description:"Formatter for values",name:"valueFormatter",required:!1,type:{name:"(value: number) => string"}},deltaFormatter:{defaultValue:{value:`( value: number ): string => {
	return formatMetricValue( value / 100, 'average', {
		decimals: 0,
		signDisplay: 'exceptZero',
	} );
}`},description:"Formatter for delta values",name:"deltaFormatter",required:!1,type:{name:"(value: number) => string"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"Custom styling for the chart container",name:"style",required:!1,type:{name:"CSSProperties & { '--a8c--charts--leaderboard--bar--border-radius'?: string; }"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"LeaderboardEntry[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#leaderboardchart"]={docgenInfo:leaderboardchart.__docgenInfo,name:"leaderboardchart",path:"../charts/src/components/leaderboard-chart/leaderboard-chart.tsx#leaderboardchart"})}catch{}}),"../charts/src/providers/chart-context/global-charts-provider.tsx":((E,m,e)=>{e.d(m,{m:()=>p,S:()=>c});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),d=e.n(l);function t(D,w){return d()(D,w,{arrayMerge:(_,v)=>v})}var o=e("../charts/src/providers/chart-context/themes.ts"),b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const p=(0,r.createContext)(null),c=({children:D,theme:w={}})=>{const[_,v]=(0,r.useState)(()=>new Map),h=(0,r.useMemo)(()=>t(o.zQ,w),[w]),f=(0,r.useRef)(new Map);(0,r.useEffect)(()=>{f.current=new Map},[h.colors]);const i=(0,r.useCallback)((u,g)=>{v(x=>new Map(x).set(u,g))},[]),s=(0,r.useCallback)(u=>{v(g=>{const x=new Map(g);return x.delete(u),x})},[]),F=(0,r.useCallback)(u=>_.get(u),[_]),S=(0,r.useCallback)(({group:u,index:g,overrideColor:x})=>{if(x)return x;const C=h.colors??[];if(u){const n=f.current.get(u);if(n)return n;const y=f.current.size,j=C.length>0?C[y%C.length]:"#000000";return f.current.set(u,j),j}return C.length>0?C[(g||0)%C.length]:"#000000"},[h.colors]),L=(0,r.useMemo)(()=>({charts:_,registerChart:i,unregisterChart:s,getChartData:F,theme:h,resolveGroupColor:S}),[_,i,s,F,h,S]);return(0,b.jsx)(p.Provider,{value:L,children:D})};try{c.displayName="GlobalChartsProvider",c.__docgenInfo={description:"",displayName:"GlobalChartsProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional theme override. Considered static for provider lifecycle.",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"]={docgenInfo:c.__docgenInfo,name:"GlobalChartsProvider",path:"../charts/src/providers/chart-context/global-charts-provider.tsx#GlobalChartsProvider"})}catch{}}),"../charts/src/providers/chart-context/hooks/use-global-charts-context.ts":((E,m,e)=>{e.d(m,{j:()=>d});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=e("../charts/src/providers/chart-context/global-charts-provider.tsx");const d=()=>{const t=(0,r.useContext)(l.m);if(!t)throw new Error("useGlobalChartsContext must be used within a GlobalChartsProvider");return t}}),"../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts":((E,m,e)=>{e.d(m,{p:()=>t});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),d=e("../charts/src/providers/chart-context/themes.ts");const t=()=>(0,r.useContext)(l.m)?.theme??d.zQ}),"../charts/src/providers/chart-context/themes.ts":((E,m,e)=>{e.d(m,{QI:()=>l,pk:()=>d,zQ:()=>r});const r={backgroundColor:"#FFFFFF",labelBackgroundColor:"transparent",labelTextColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},legendContainerStyles:{},seriesLineStyles:[],legendShapeStyles:[],glyphs:[],annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#006DAB",secondaryColor:"#98C8DF",deltaColors:["#FF8C8F","#757575","#1F9828"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},l={backgroundColor:"#FFFFFF",labelBackgroundColor:"transparent",labelTextColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#006DAB",secondaryColor:"#98C8DF",deltaColors:["#FF8C8F","#757575","#1F9828"]},conversionFunnelChart:{primaryColor:"#006DAB",backgroundColor:"#F3F4F6",positiveChangeColor:"#1F9828",negativeChangeColor:"#FF8C8F"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeLinecap:"square"}}}},d={backgroundColor:"#FFFFFF",labelBackgroundColor:"transparent",labelTextColor:"#FFFFFF",colors:["#3858E9","#873EFF","#66BDFF","#7B90FF","#EB6594"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"},annotationStyles:{label:{anchorLineStroke:"black",backgroundFill:"#fff"},connector:{stroke:"black"},circleSubject:{stroke:"transparent",fill:"black",radius:5}},leaderboardChart:{rowGap:12,columnGap:4,labelSpacing:1.5,primaryColor:"#3858E9",secondaryColor:"#66BDFF",deltaColors:["#D63638","#757575","#008A20"]},conversionFunnelChart:{primaryColor:"#3858E9",backgroundColor:"#F3F4F6",positiveChangeColor:"#008A20",negativeChangeColor:"#D63638"},lineChart:{lineStyles:{comparison:{strokeDasharray:"4 4",strokeWidth:1.5,strokeLinecap:"square"}}}}}),"../charts/src/utils/color-utils.ts":((E,m,e)=>{e.d(m,{j:()=>r});const r=(l,d)=>{if(typeof l!="string")throw new Error("Hex color must be a string");if(!l.startsWith("#"))throw new Error("Hex color must start with #");if(l.length!==7)throw new Error("Hex color must be 7 characters long (e.g., #ff0000)");const t=l.slice(1);if(!/^[0-9a-fA-F]{6}$/.test(t))throw new Error("Hex color contains invalid characters. Only 0-9, a-f, A-F are allowed");if(typeof d!="number"||isNaN(d))throw new Error("Alpha must be a number");const o=parseInt(l.slice(1,3),16),b=parseInt(l.slice(3,5),16),p=parseInt(l.slice(5,7),16);return`rgba(${o}, ${b}, ${p}, ${d})`}}),"../charts/src/utils/format-metric-value.ts":((E,m,e)=>{e.d(m,{d:()=>l});var r=e("../number-formatters/src/index.ts");const l=(d,t="number",{decimals:o,useMultipliers:b=!1,signDisplay:p}={})=>{if(d==null)return"";const c=Number(d);if(isNaN(c))return"";switch(t){case"currency":return`$${b?(0,r.qe)(c,{decimals:o??2,numberFormatOptions:{maximumFractionDigits:o??2,signDisplay:p}}):(0,r.ZV)(c,{decimals:o??2,numberFormatOptions:{signDisplay:p}})}`;case"average":return Number.isFinite(c)?(0,r.ZV)(c,{decimals:o??0,numberFormatOptions:{style:"percent",signDisplay:p??"exceptZero"}}):"\u2014";case"number":default:return b?(0,r.qe)(c,{decimals:o??0,numberFormatOptions:{maximumFractionDigits:o??0,signDisplay:p}}):(0,r.ZV)(c,{decimals:o??0,numberFormatOptions:{signDisplay:p}})}}}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/leaderboard-chart/leaderboard-chart.module.scss":((E,m,e)=>{e.d(m,{A:()=>b});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(r),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(d),o=t()(l());o.push([E.id,'.scK1ZantNDOdMs0rFKVd{transition:opacity .3s ease-in-out}.scK1ZantNDOdMs0rFKVd.tlwUEjWrwCGx8N4NrQ14{opacity:.5}.j93jSdul6V4LwvSUsI4H{display:grid;align-items:center;grid-template-columns:1fr;row-gap:6px;isolation:isolate}.j93jSdul6V4LwvSUsI4H.OsVSnJJqv9pQqYx2g_vM{grid-template:"overlap" 1fr/1fr}.j93jSdul6V4LwvSUsI4H.OsVSnJJqv9pQqYx2g_vM>*{-ms-grid-row:1;-ms-grid-column:1;grid-area:overlap}.j93jSdul6V4LwvSUsI4H.OsVSnJJqv9pQqYx2g_vM .WUss5w00KNJQvTfdFcpa{padding-left:8px}.j93jSdul6V4LwvSUsI4H .bQoOgYLHk0HXvYAnrhLB{height:100%;min-height:6px;border-radius:var(--a8c--charts--leaderboard--bar--border-radius, 9999px);z-index:-1;transition:width .3s ease-in-out}.ArUixJYV2nlFKkiD6Jjo{display:flex;gap:4px;justify-content:flex-end}.I0tqeGCwbJVNfJ6OjLMw{align-items:center}.oQn1JOj21bg7U0K6tW2z{padding:32px 16px;text-align:center;color:#666;font-size:14px;font-style:italic}',""]),o.locals={leaderboardChart:"scK1ZantNDOdMs0rFKVd",loading:"tlwUEjWrwCGx8N4NrQ14",barWithLabelContainer:"j93jSdul6V4LwvSUsI4H","is-overlay":"OsVSnJJqv9pQqYx2g_vM",label:"WUss5w00KNJQvTfdFcpa",bar:"bQoOgYLHk0HXvYAnrhLB",valueContainer:"ArUixJYV2nlFKkiD6Jjo",overlayLabel:"I0tqeGCwbJVNfJ6OjLMw",emptyState:"oQn1JOj21bg7U0K6tW2z"};const b=o})}]);
