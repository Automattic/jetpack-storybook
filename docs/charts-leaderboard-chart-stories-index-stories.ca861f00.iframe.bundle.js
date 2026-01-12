"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[582],{"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/leaderboard-chart/leaderboard-chart.module.scss":((G,g,e)=>{e.d(g,{A:()=>u});var s=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(s),f=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),c=e.n(f),a=c()(m());a.push([G.id,'.OZg4Iat6TJ5_sYJ8HmC8{display:flex;flex-direction:column;transition:opacity .3s ease-in-out}.gvHWLKGPXONtU0P7w6hj{flex-direction:column-reverse}.RSQBuK1dHDFQPMRpNTh3{gap:16px}.dWpqHb19KqudQcMabW57{opacity:.5}.AGL8PEHy1iHZJElau1SR{display:grid;align-items:center;grid-template-columns:1fr;row-gap:6px;isolation:isolate}.AGL8PEHy1iHZJElau1SR.uyZCnpA8suJqCVMwFjqm{grid-template:"overlap" 1fr/1fr}.AGL8PEHy1iHZJElau1SR.uyZCnpA8suJqCVMwFjqm>*{-ms-grid-row:1;-ms-grid-column:1;grid-area:overlap}.AGL8PEHy1iHZJElau1SR.uyZCnpA8suJqCVMwFjqm .r5K0kOu5NBKSKkBXSQAk{padding-left:8px}.AGL8PEHy1iHZJElau1SR .oPFERjtZlvJISgblxziz{height:100%;min-height:6px;border-radius:var(--a8c--charts--leaderboard--bar--border-radius, 9999px);z-index:-1}.AGL8PEHy1iHZJElau1SR .XNg2erI4auuYF1gzh1rE{transform-origin:left;transform-box:fill-box;transform:scaleX(0);animation:eno0h_NakvyzDVBiGVa2 1s ease-out forwards}@keyframes eno0h_NakvyzDVBiGVa2{to{transform:scaleX(1)}}.iVw4P3GHdE0LKEGM0Vkd{display:flex;gap:4px;justify-content:flex-end}.llFMxB71uebrXgPdTLGz{align-items:center}.wt_qXsP0KBtoScEkbqOr{padding:32px 16px;text-align:center;color:#666;font-size:14px;font-style:italic}',""]),a.locals={leaderboardChart:"OZg4Iat6TJ5_sYJ8HmC8","leaderboardChart--legend-top":"gvHWLKGPXONtU0P7w6hj","leaderboardChart--with-legend":"RSQBuK1dHDFQPMRpNTh3","leaderboardChart--loading":"dWpqHb19KqudQcMabW57",barWithLabelContainer:"AGL8PEHy1iHZJElau1SR","is-overlay":"uyZCnpA8suJqCVMwFjqm",label:"r5K0kOu5NBKSKkBXSQAk",bar:"oPFERjtZlvJISgblxziz","bar--animated":"XNg2erI4auuYF1gzh1rE",stretch:"eno0h_NakvyzDVBiGVa2",valueContainer:"iVw4P3GHdE0LKEGM0Vkd",overlayLabel:"llFMxB71uebrXgPdTLGz",emptyState:"wt_qXsP0KBtoScEkbqOr"};const u=a}),"../charts/src/charts/leaderboard-chart/leaderboard-chart.tsx":((G,g,e)=>{e.d(g,{A:()=>Z});var s=e("../../../node_modules/.pnpm/@wordpress+components@31.0.0_patch_hash=2659f08edd4c0250f15fb428f013852a17e84da9c745e6d_93d8ce197f0e1a8b571f9071ef7ebfef/node_modules/@wordpress/components/build-module/text/component.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@31.0.0_patch_hash=2659f08edd4c0250f15fb428f013852a17e84da9c745e6d_93d8ce197f0e1a8b571f9071ef7ebfef/node_modules/@wordpress/components/build-module/grid/component.js"),f=e("../../../node_modules/.pnpm/@wordpress+components@31.0.0_patch_hash=2659f08edd4c0250f15fb428f013852a17e84da9c745e6d_93d8ce197f0e1a8b571f9071ef7ebfef/node_modules/@wordpress/components/build-module/v-stack/component.js"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+i18n@6.10.0_patch_hash=0c63a888feb97f2f1d416ca013ad85c31b6360b41cc0b6e2b0ae28f778fbdc5b/node_modules/@wordpress/i18n/build-module/index.js"),u=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=e("../charts/src/components/legend/legend.tsx"),p=e("../charts/src/hooks/use-prefers-reduced-motion.ts"),d=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),i=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),L=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),O=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),v=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),S=e("../charts/src/utils/format-metric-value.ts"),E=e("../charts/src/utils/create-composition.ts"),j=e("../charts/src/charts/private/chart-composition/use-chart-children.ts"),w=e("../charts/src/charts/private/single-chart-context/single-chart-context.tsx"),M=e("../charts/src/charts/private/with-responsive/with-responsive.tsx");const A=a.__;function W({data:t,primaryColor:_,secondaryColor:h,withComparison:b=!1,withOverlayLabel:B=!1,legendLabels:x}){const{leaderboardChart:H}=(0,i.p)(),{getElementStyles:K}=(0,L.j)();return(0,c.useMemo)(()=>{if(!t||t.length===0)return[];const X=[],{color:J}=K({index:0,overrideColor:_||H.primaryColor});if(X.push({label:x?.primary||A("Current period","jetpack-charts"),value:"",color:J}),b&&!B){const{color:Y}=K({index:1,overrideColor:h||H.secondaryColor});X.push({label:x?.comparison||A("Previous period","jetpack-charts"),value:"",color:Y})}return X},[t,_,h,b,x,H,K,B])}var T=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=e.n(T),V=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/leaderboard-chart/leaderboard-chart.module.scss"),C={};C.insert="head",C.singleton=!1;var re=D()(V.A,C);const n=V.A.locals||{};var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const U=a.__,I=t=>(0,S.d)(t,"number",{useMultipliers:!0,decimals:1}),F=t=>(0,S.d)(t/100,"average",{decimals:0,signDisplay:"exceptZero"}),R=({label:t})=>(0,o.jsx)(o.Fragment,{children:typeof t=="string"?(0,o.jsx)(s.A,{className:n.label,children:t}):t}),N=({entry:t,withComparison:_,withOverlayLabel:h,primaryColor:b,secondaryColor:B,animation:x,isPrimaryVisible:H=!0,isComparisonVisible:K=!0})=>(0,o.jsxs)("div",{className:(0,u.A)(n.barWithLabelContainer,{[n["is-overlay"]]:h}),children:[(0,o.jsx)(R,{label:t.label}),H&&(0,o.jsx)("div",{className:(0,u.A)(n.bar,{[n["bar--animated"]]:x}),style:{width:t.currentShare+"%",backgroundColor:b}}),_&&!h&&K&&(0,o.jsx)("div",{className:(0,u.A)(n.bar,{[n["bar--animated"]]:x}),style:{width:t.previousShare+"%",backgroundColor:B}})]}),P=({data:t,chartId:_,withComparison:h=!1,withOverlayLabel:b=!1,primaryColor:B,secondaryColor:x,valueFormatter:H=I,deltaFormatter:K=F,animation:X,loading:J=!1,showLegend:Y=!1,legendOrientation:ie="horizontal",legendPosition:te="bottom",legendAlignment:de="center",legendShape:ce="circle",legendShapeWidth:ue=8,legendShapeHeight:me=8,legendLabels:pe,legendInteractive:q=!1,className:oe,style:ne,children:he})=>{const y=(0,d.R)(_),{leaderboardChart:ge}=(0,i.p)(),{otherChildren:se}=(0,j.n)(he,"LeaderboardChart"),{labelSpacing:fe,rowGap:be,columnGap:ye,primaryColor:ve,secondaryColor:Ce,deltaColors:_e}=ge,{getElementStyles:le,isSeriesVisible:ee}=(0,L.j)(),{color:xe}=le({index:0,overrideColor:B||ve}),{color:Le}=le({index:1,overrideColor:x||Ce}),z=W({data:t||[],primaryColor:B,secondaryColor:x,withComparison:h,withOverlayLabel:b,legendLabels:pe}),Q=(0,c.useMemo)(()=>!y||!q||z.length===0?!0:ee(y,z[0].label),[y,q,z,ee]),ae=(0,c.useMemo)(()=>!y||!q||z.length<2?!0:ee(y,z[1].label),[y,q,z,ee]),Se=(0,c.useMemo)(()=>q?h&&!b?!Q&&!ae:!Q:!1,[q,Q,ae,h,b]),Ee=!!(t&&t.length>0),we=(0,c.useMemo)(()=>({withComparison:h,withOverlayLabel:b}),[h,b]);(0,O.t)({chartId:y,legendItems:z,chartType:"leaderboard",isDataValid:Ee,metadata:we});const Ae=(0,p.j)();return!t||t.length===0?(0,o.jsx)(w.O.Provider,{value:{chartId:y,chartWidth:0,chartHeight:0},children:(0,o.jsxs)("div",{className:(0,u.A)(n.leaderboardChart,{[n["leaderboardChart--loading"]]:J},oe),style:ne,children:[(0,o.jsx)("div",{className:n.emptyState,children:U(J?"Loading\u2026":"No data available","jetpack-charts")}),se]})}):(0,o.jsx)(w.O.Provider,{value:{chartId:y,chartWidth:0,chartHeight:0},children:(0,o.jsxs)("div",{className:(0,u.A)(n.leaderboardChart,{[n["leaderboardChart--loading"]]:J,[n["leaderboardChart--with-legend"]]:Y,[n["leaderboardChart--legend-top"]]:Y&&te==="top"},oe),style:ne,children:[Se?(0,o.jsx)("div",{className:n.emptyState,children:U("All series are hidden. Click legend items to show data.","jetpack-charts")}):(0,o.jsx)(m.A,{templateColumns:"minmax(0, 1fr) auto",rowGap:be,columnGap:ye,children:t.map($=>{const Ve=Math.sign($.delta)+1,Pe=_e[Ve];return(0,o.jsxs)(c.Fragment,{children:[(0,o.jsx)(f.A,{spacing:fe,children:(0,o.jsx)(N,{entry:$,withComparison:h,withOverlayLabel:b,primaryColor:xe,secondaryColor:Le,isPrimaryVisible:Q,isComparisonVisible:ae,animation:X&&!J&&!Ae})}),(0,o.jsxs)("div",{className:(0,u.A)(n.valueContainer,{[n.overlayLabel]:b}),children:[Q&&(0,o.jsx)(s.A,{children:H($.currentValue)}),h&&ae&&(0,o.jsx)(s.A,{style:{color:Pe},children:K($.delta)})]})]},$.id)})}),Y&&(0,o.jsx)(l.s,{orientation:ie,position:te,alignment:de,shape:ce,shapeWidth:ue,shapeHeight:me,chartId:y,interactive:q}),se]})})},k=t=>(0,c.useContext)(v.m)?(0,o.jsx)(P,{...t}):(0,o.jsx)(v.S,{children:(0,o.jsx)(P,{...t})});k.displayName="LeaderboardChart";const r=(0,E.E)(k,{Legend:l.s}),Z=(0,E.E)((0,M.F)(k),{Legend:l.s});try{leaderboardchart.displayName="leaderboardchart",leaderboardchart.__docgenInfo={description:"",displayName:"leaderboardchart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"LeaderboardEntry[]"}},style:{defaultValue:null,description:"Custom styling for the chart container",name:"style",required:!1,type:{name:"CSSProperties & { '--a8c--charts--leaderboard--bar--border-radius'?: string; }"}},children:{defaultValue:null,description:"Child components for composition API",name:"children",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},legendInteractive:{defaultValue:{value:"false"},description:`Enable interactive legend items that can toggle series visibility.
Supported for LineChart, PieChart, and PieSemiCircleChart.
Requires chartId and GlobalChartsProvider.
For pie charts, percentages are recalculated so visible segments total 100%.`,name:"legendInteractive",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<LeaderboardEntry, number>"}},legendPosition:{defaultValue:{value:"bottom"},description:`Legend position (where the legend appears)
TODO: Add 'left' | 'right' positioning support in future implementation`,name:"legendPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},legendAlignment:{defaultValue:{value:"center"},description:"Legend alignment within its position",name:"legendAlignment",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'}]}},animation:{defaultValue:null,description:"Whether to show chart animation on initial render or not",name:"animation",required:!1,type:{name:"boolean"}},withComparison:{defaultValue:{value:"false"},description:"Whether to show comparison data",name:"withComparison",required:!1,type:{name:"boolean"}},withOverlayLabel:{defaultValue:{value:"false"},description:"Whether to overlay the label on top of bar",name:"withOverlayLabel",required:!1,type:{name:"boolean"}},primaryColor:{defaultValue:null,description:"Primary color for current period bars",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:null,description:"Secondary color for comparison period bars",name:"secondaryColor",required:!1,type:{name:"string"}},valueFormatter:{defaultValue:{value:`( value: number ): string => {
	return formatMetricValue( value, 'number', {
		useMultipliers: true,
		decimals: 1,
	} );
}`},description:"Formatter for values",name:"valueFormatter",required:!1,type:{name:"(value: number) => string"}},deltaFormatter:{defaultValue:{value:`( value: number ): string => {
	return formatMetricValue( value / 100, 'average', {
		decimals: 0,
		signDisplay: 'exceptZero',
	} );
}`},description:"Formatter for delta values",name:"deltaFormatter",required:!1,type:{name:"(value: number) => string"}},legendShapeWidth:{defaultValue:{value:"8"},description:"Width of legend shapes in pixels",name:"legendShapeWidth",required:!1,type:{name:"number"}},legendShapeHeight:{defaultValue:{value:"8"},description:"Height of legend shapes in pixels",name:"legendShapeHeight",required:!1,type:{name:"number"}},legendLabels:{defaultValue:null,description:"Custom labels for legend items",name:"legendLabels",required:!1,type:{name:"{ primary?: string; comparison?: string; }"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/leaderboard-chart/leaderboard-chart.tsx#leaderboardchart"]={docgenInfo:leaderboardchart.__docgenInfo,name:"leaderboardchart",path:"../charts/src/charts/leaderboard-chart/leaderboard-chart.tsx#leaderboardchart"})}catch{}try{LeaderboardChartUnresponsive.displayName="LeaderboardChart",LeaderboardChartUnresponsive.__docgenInfo={description:"",displayName:"LeaderboardChart",props:{withComparison:{defaultValue:{value:"false"},description:"Whether to show comparison data",name:"withComparison",required:!1,type:{name:"boolean"}},withOverlayLabel:{defaultValue:{value:"false"},description:"Whether to overlay the label on top of bar",name:"withOverlayLabel",required:!1,type:{name:"boolean"}},primaryColor:{defaultValue:null,description:"Primary color for current period bars",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:null,description:"Secondary color for comparison period bars",name:"secondaryColor",required:!1,type:{name:"string"}},valueFormatter:{defaultValue:{value:`( value: number ): string => {
	return formatMetricValue( value, 'number', {
		useMultipliers: true,
		decimals: 1,
	} );
}`},description:"Formatter for values",name:"valueFormatter",required:!1,type:{name:"(value: number) => string"}},deltaFormatter:{defaultValue:{value:`( value: number ): string => {
	return formatMetricValue( value / 100, 'average', {
		decimals: 0,
		signDisplay: 'exceptZero',
	} );
}`},description:"Formatter for delta values",name:"deltaFormatter",required:!1,type:{name:"(value: number) => string"}},loading:{defaultValue:{value:"false"},description:"Whether the chart is in loading state",name:"loading",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"Custom styling for the chart container",name:"style",required:!1,type:{name:"CSSProperties & { '--a8c--charts--leaderboard--bar--border-radius'?: string; }"}},legendShapeWidth:{defaultValue:{value:"8"},description:"Width of legend shapes in pixels",name:"legendShapeWidth",required:!1,type:{name:"number"}},legendShapeHeight:{defaultValue:{value:"8"},description:"Height of legend shapes in pixels",name:"legendShapeHeight",required:!1,type:{name:"number"}},legendLabels:{defaultValue:null,description:"Custom labels for legend items",name:"legendLabels",required:!1,type:{name:"{ primary?: string; comparison?: string; }"}},children:{defaultValue:null,description:"Child components for composition API",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"LeaderboardEntry[]"}},size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},legendInteractive:{defaultValue:{value:"false"},description:`Enable interactive legend items that can toggle series visibility.
Supported for LineChart, PieChart, and PieSemiCircleChart.
Requires chartId and GlobalChartsProvider.
For pie charts, percentages are recalculated so visible segments total 100%.`,name:"legendInteractive",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<LeaderboardEntry, number>"}},legendPosition:{defaultValue:{value:"bottom"},description:`Legend position (where the legend appears)
TODO: Add 'left' | 'right' positioning support in future implementation`,name:"legendPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},legendAlignment:{defaultValue:{value:"center"},description:"Legend alignment within its position",name:"legendAlignment",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'}]}},animation:{defaultValue:null,description:"Whether to show chart animation on initial render or not",name:"animation",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/leaderboard-chart/leaderboard-chart.tsx#LeaderboardChart"]={docgenInfo:r.__docgenInfo,name:"LeaderboardChart",path:"../charts/src/charts/leaderboard-chart/leaderboard-chart.tsx#LeaderboardChart"})}catch{}}),"../charts/src/charts/leaderboard-chart/stories/index.stories.tsx":((G,g,e)=>{e.r(g),e.d(g,{AdvancedFormatting:()=>o,Animation:()=>w,CurrencyFormatting:()=>V,CustomColors:()=>M,CustomLabel:()=>n,CustomLegendLabels:()=>R,Default:()=>v,EmptyData:()=>W,InteractiveLegend:()=>P,LargeValues:()=>T,Loading:()=>j,NegativeGrowth:()=>D,NumberFormatting:()=>C,OverlayLabelWithImage:()=>I,SmallDataset:()=>A,WithCompositionLegend:()=>N,WithLegend:()=>F,WithOverlayLabel:()=>E,WithoutComparison:()=>S,__namedExportsOrder:()=>k,default:()=>O});var s=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),m=e("../charts/src/providers/chart-context/themes.ts"),f=e("../charts/src/stories/chart-decorator.tsx"),c=e("../charts/src/stories/theme-config.tsx"),a=e("../charts/src/stories/sample-data/index.ts"),u=e("../charts/src/stories/legend-config.tsx"),l=e("../charts/src/utils/format-metric-value.ts"),p=e("../charts/src/utils/color-utils.ts"),d=e("../charts/src/charts/leaderboard-chart/leaderboard-chart.tsx"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const O={title:"JS Packages/Charts Library/Charts/Leaderboard Chart",component:d.A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of leaderboard entries to display",table:{type:{summary:"LeaderboardEntry[]"}}},withComparison:{control:"boolean",description:"Whether to show comparison data (previous period bars and delta values)",table:{defaultValue:{summary:"false"}}},primaryColor:{control:"color",description:"Primary color for current period bars",table:{defaultValue:{summary:m.z.leaderboardChart.primaryColor}}},secondaryColor:{control:"color",description:"Secondary color for comparison period bars",table:{defaultValue:{summary:m.z.leaderboardChart.secondaryColor}}},valueFormatter:{control:!1,description:"Custom formatter function for values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue with compact notation"}}},deltaFormatter:{control:!1,description:"Custom formatter function for delta values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue as percentage"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name for the chart container",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}},withOverlayLabel:{control:"boolean",description:"Whether to overlay the label on top of the bar",table:{defaultValue:{summary:"false"}}},legendShapeWidth:{control:"number",description:"Width of legend shapes in pixels",table:{category:"Legend",type:{summary:"number"},defaultValue:{summary:"8"}}},legendShapeHeight:{control:"number",description:"Height of legend shapes in pixels",table:{category:"Legend",type:{summary:"number"},defaultValue:{summary:"8"}}},legendLabels:{control:"object",description:"Custom labels for legend items",table:{category:"Legend",type:{summary:"{ primary?: string; comparison?: string }"},defaultValue:{summary:"undefined"}}},...f.xo,...u.r,...c.jW},args:{primaryColor:void 0,secondaryColor:void 0,themeName:"default",showLegend:!1,legendPosition:"bottom",legendAlignment:"center",legendOrientation:"horizontal",legendShape:"circle",legendShapeWidth:8,legendShapeHeight:8,withOverlayLabel:!1},decorators:[f.OI]},v={args:{...c.In,data:a.EJ,withComparison:!0,loading:!1}},S={args:{data:a.EJ,withComparison:!1,loading:!1}},E={args:{data:a.EJ,withOverlayLabel:!0}},j={args:{data:a.EJ,withComparison:!0,loading:!0}},w={args:{...v.args,animation:!0}},M={args:{data:a.EJ,withComparison:!0,loading:!1,primaryColor:"red",secondaryColor:"green"}},A={args:{data:a.mg,withComparison:!0,loading:!1}},W={args:{data:[],withComparison:!0,loading:!1}},T={args:{data:a.wP,withComparison:!0,loading:!1}},D={args:{data:a.Ff,withComparison:!0,loading:!1}},V={args:{data:a.EJ,withComparison:!0,loading:!1,valueFormatter:r=>(0,l.d)(r,"currency",{useMultipliers:!0,decimals:1}),deltaFormatter:r=>(0,l.d)(r/100,"average",{decimals:0})}},C={args:{data:a.EJ,withComparison:!0,loading:!1,valueFormatter:r=>(0,l.d)(r,"number",{useMultipliers:!1,decimals:0}),deltaFormatter:r=>(0,l.d)(r/100,"average",{decimals:1})}},re=({label:r,imageColor:Z,style:t={}})=>(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px",...t},children:[(0,i.jsx)("img",{src:`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='${encodeURIComponent(Z)}'/></svg>`,alt:"icon",style:{width:"28px",height:"28px",verticalAlign:"middle",borderRadius:"4px"}}),(0,i.jsx)("span",{style:{fontSize:"13px"},children:r})]}),n={args:{data:a.n$.map(r=>({...r,label:(0,i.jsx)(re,{label:r.label,imageColor:r.imageColor})})),withComparison:!1,loading:!1}},o={args:{data:a.wP,withComparison:!0,loading:!1,valueFormatter:r=>r>=1e6?(0,l.d)(r,"currency",{useMultipliers:!0,decimals:1}):(0,l.d)(r,"currency",{useMultipliers:!1,decimals:0}),deltaFormatter:r=>(0,l.d)(r/100,"average",{decimals:1,signDisplay:"always"})}},U=r=>{const{getElementStyles:Z}=(0,s.j)(),{color:t}=Z({index:0,overrideColor:r.primaryColor}),_=(0,p.j5)(t,.08);return(0,i.jsx)(d.A,{...r,primaryColor:_})},I={args:{data:a.n$.map(r=>({...r,label:(0,i.jsx)(re,{label:r.label,imageColor:r.imageColor,style:{padding:"6px"}})})),withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--a8c--charts--leaderboard--bar--border-radius":"4px",fontFamily:'"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'}},render:r=>(0,i.jsx)(U,{...r})},F={args:{data:a.EJ,withComparison:!0,loading:!1,showLegend:!0}},R={args:{data:a.EJ,withComparison:!0,loading:!1,showLegend:!0,legendLabels:{primary:"Aug 11-Sep 9, 2025",comparison:"Jul 11-Aug 11, 2025"}}},N={render:r=>(0,i.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"start"},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{style:{marginTop:0,marginBottom:"1rem"},children:"Traditional Props-based Legend"}),(0,i.jsx)(d.A,{...r,showLegend:!0})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{style:{marginTop:0,marginBottom:"1rem"},children:"Composition API with Legend Component"}),(0,i.jsx)(d.A,{...r,children:(0,i.jsx)(d.A.Legend,{shape:"circle",shapeWidth:8,shapeHeight:8,style:{marginTop:"16px"}})})]})]}),args:{data:a.EJ,withComparison:!0,loading:!1,legendLabels:{primary:"Aug 11-Sep 9, 2025",comparison:"Jul 11-Aug 11, 2025"}},argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{docs:{description:{story:"Demonstrates the composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control over legend positioning and styling."}}}},P={args:{data:a.EJ,withComparison:!0,loading:!1,showLegend:!0,legendInteractive:!0,legendLabels:{primary:"Current period",comparison:"Previous period"}},parameters:{docs:{description:{story:"Interactive legend allows users to click legend items to toggle the visibility of current and previous period data. Click on the legend items to show/hide the corresponding bars and values. When all series are hidden, a message is displayed."}}}},k=["Default","WithoutComparison","WithOverlayLabel","Loading","Animation","CustomColors","SmallDataset","EmptyData","LargeValues","NegativeGrowth","CurrencyFormatting","NumberFormatting","CustomLabel","AdvancedFormatting","OverlayLabelWithImage","WithLegend","CustomLegendLabels","WithCompositionLegend","InteractiveLegend"];v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    data: sampleData,
    withComparison: true,
    loading: false
  }
}`,...v.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: false,
    loading: false
  }
}`,...S.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withOverlayLabel: true
  }
}`,...E.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: true
  }
}`,...j.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...w.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    primaryColor: 'red',
    secondaryColor: 'green'
  }
}`,...M.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    data: smallDataset,
    withComparison: true,
    loading: false
  }
}`,...A.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    withComparison: true,
    loading: false
  }
}`,...W.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    data: largeValues,
    withComparison: true,
    loading: false
  }
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    data: negativeGrowth,
    withComparison: true,
    loading: false
  }
}`,...D.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataWithImageColor.map(entry => ({
      ...entry,
      label: <CustomLabelComponent label={entry.label} imageColor={entry.imageColor} />
    })),
    withComparison: false,
    loading: false
  }
}`,...n.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
  render: args => <LeaderboardChartWithOverlayLabelImage {...args} />
}`,...I.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    showLegend: true
  }
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    showLegend: true,
    legendLabels: {
      primary: 'Aug 11-Sep 9, 2025',
      comparison: 'Jul 11-Aug 11, 2025'
    }
  }
}`,...R.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'start'
  }}>
            <div>
                <h3 style={{
        marginTop: 0,
        marginBottom: '1rem'
      }}>Traditional Props-based Legend</h3>
                <LeaderboardChart {...args} showLegend={true} />
            </div>
            <div>
                <h3 style={{
        marginTop: 0,
        marginBottom: '1rem'
      }}>
                    Composition API with Legend Component
                </h3>
                <LeaderboardChart {...args}>
                    <LeaderboardChart.Legend shape="circle" shapeWidth={8} shapeHeight={8} style={{
          marginTop: '16px'
        }} />
                </LeaderboardChart>
            </div>
        </div>,
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    legendLabels: {
      primary: 'Aug 11-Sep 9, 2025',
      comparison: 'Jul 11-Aug 11, 2025'
    }
  },
  argTypes: {
    legendInteractive: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control over legend positioning and styling.'
      }
    }
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    showLegend: true,
    legendInteractive: true,
    legendLabels: {
      primary: 'Current period',
      comparison: 'Previous period'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive legend allows users to click legend items to toggle the visibility of current and previous period data. Click on the legend items to show/hide the corresponding bars and values. When all series are hidden, a message is displayed.'
      }
    }
  }
}`,...P.parameters?.docs?.source}}}}),"../charts/src/charts/private/chart-composition/use-chart-children.ts":((G,g,e)=>{e.d(g,{n:()=>f});var s=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function f(c,a){return(0,m.useMemo)(()=>{const u=[],l=[],p=[];return m.Children.forEach(c,d=>{if((0,m.isValidElement)(d)){const L=d.type?.displayName;L===`${a}.SVG`||L==="Chart.SVG"?d.props?.children&&m.Children.forEach(d.props.children,O=>{u.push(O)}):L===`${a}.HTML`||L==="Chart.HTML"?d.props?.children&&m.Children.forEach(d.props.children,O=>{l.push(O)}):d.type===s.A?u.push(d):p.push(d)}}),{svgChildren:u,htmlChildren:l,otherChildren:p}},[c,a])}}),"../charts/src/stories/legend-config.tsx":((G,g,e)=>{e.d(g,{r:()=>s});const s={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."}};try{s.displayName="legendArgTypes",s.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:s.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}),"../charts/src/utils/format-metric-value.ts":((G,g,e)=>{e.d(g,{d:()=>m});var s=e("../number-formatters/src/index.ts");const m=(f,c="number",{decimals:a,useMultipliers:u=!1,signDisplay:l}={})=>{if(f==null)return"";const p=Number(f);if(isNaN(p))return"";switch(c){case"currency":return`$${u?(0,s.qe)(p,{decimals:a??2,numberFormatOptions:{maximumFractionDigits:a??2,signDisplay:l}}):(0,s.ZV)(p,{decimals:a??2,numberFormatOptions:{signDisplay:l}})}`;case"average":return Number.isFinite(p)?(0,s.ZV)(p,{decimals:a??0,numberFormatOptions:{style:"percent",signDisplay:l??"exceptZero"}}):"\u2014";case"number":default:return u?(0,s.qe)(p,{decimals:a??0,numberFormatOptions:{maximumFractionDigits:a??0,signDisplay:l}}):(0,s.ZV)(p,{decimals:a??0,numberFormatOptions:{signDisplay:l}})}}})}]);
