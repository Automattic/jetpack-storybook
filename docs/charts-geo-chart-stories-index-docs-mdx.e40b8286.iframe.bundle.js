(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2860,7354],{"../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@tes_8b6d8444bcdd16ef895876f31adb8bdf/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive":(p=>{function r(t){var d=new Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}r.keys=()=>[],r.resolve=r,r.id="../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@tes_8b6d8444bcdd16ef895876f31adb8bdf/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive",p.exports=r}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/geo-chart/geo-chart.module.scss":((p,r,t)=>{"use strict";t.d(r,{A:()=>l});var d=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=t.n(d),c=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),o=t.n(c),n=o()(e());n.push([p.id,".lAFi7oOf7oa6dhX2GP1E{position:relative;display:flex;justify-content:center;align-items:center}",""]),n.locals={container:"lAFi7oOf7oa6dhX2GP1E"};const l=n}),"../charts/src/charts/geo-chart/stories/index.docs.mdx":((p,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>h});var d=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),c=t("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),o=t("../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@tes_8b6d8444bcdd16ef895876f31adb8bdf/node_modules/@storybook/addon-docs/dist/blocks.js"),n=t("../charts/src/charts/geo-chart/stories/index.stories.tsx");function l(a){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...a.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.W8,{title:"JS Packages/Charts/Types/Geo Chart",of:n}),`
`,(0,e.jsx)(s.h1,{id:"geo-chart",children:"Geo Chart"}),`
`,(0,e.jsx)(s.p,{children:"Geo Charts visualize geographical data on an interactive world map, making it easy to understand the distribution of values across countries."}),`
`,(0,e.jsx)(o.Hl,{of:n.Default}),`
`,(0,e.jsx)(s.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsx)(s.p,{children:"The Geo Chart component provides a clean, accessible solution for displaying country-level data on a world map. Built on Google Charts GeoChart, it supports interactive tooltips, automatic color scaling, and integration with the chart theme system:"}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`import { GeoChart } from '@automattic/charts';

<GeoChart
	data={ ordersByCountry }
	width={ 800 }
	height={ 500 }
/>`}),`
`,(0,e.jsx)(s.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsxs)(s.p,{children:["For detailed information about component props and types, see the ",(0,e.jsx)(s.a,{href:"./?path=/docs/js-packages-charts-library-charts-geo-chart-api-reference--docs",children:"Geo Chart API Reference"}),"."]}),`
`,(0,e.jsx)(s.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(s.h3,{id:"simple-geo-chart",children:"Simple Geo Chart"}),`
`,(0,e.jsxs)(s.p,{children:["The simplest geo chart requires data, width, and height. The ",(0,e.jsx)(s.code,{children:"data"})," prop accepts a record mapping country ISO 3166-1 alpha-2 codes to numeric values:"]}),`
`,(0,e.jsx)(o.Hl,{of:n.Default}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`<GeoChart
	data={ {
		US: 1000,
		CA: 500,
		GB: 450,
		DE: 400,
		AU: 350,
		FR: 300,
		MX: 250,
		JP: 200,
		BR: 150,
		IN: 120,
	} }
	width={ 800 }
	height={ 500 }
/>`}),`
`,(0,e.jsx)(s.h3,{id:"required-props",children:"Required Props"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"data"})}),": Record mapping country ISO 3166-1 alpha-2 codes (e.g., 'US', 'CA', 'GB') to numeric values"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"width"})}),": Width of the chart in pixels"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"height"})}),": Height of the chart in pixels"]}),`
`]}),`
`,(0,e.jsx)(s.h3,{id:"optional-props",children:"Optional Props"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"className"})}),": Additional CSS class name for custom styling"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"renderPlaceholder"})}),": Custom render function for the loading placeholder"]}),`
`]}),`
`,(0,e.jsxs)(s.p,{children:["For detailed prop information and type definitions, see the ",(0,e.jsx)(s.a,{href:"./?path=/docs/js-packages-charts-library-charts-geo-chart-api-reference--docs",children:"Geo Chart API Reference"}),"."]}),`
`,(0,e.jsx)(s.h2,{id:"interactive-features",children:"Interactive Features"}),`
`,(0,e.jsx)(s.h3,{id:"hover-tooltips",children:"Hover Tooltips"}),`
`,(0,e.jsx)(s.p,{children:"The Geo Chart includes built-in interactive tooltips powered by Google Charts that display on hover, showing:"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsx)(s.li,{children:"Country name"}),`
`,(0,e.jsx)(s.li,{children:"Value for that country"}),`
`]}),`
`,(0,e.jsx)(s.p,{children:"Tooltips are automatically enabled and positioned for optimal readability."}),`
`,(0,e.jsx)(s.h3,{id:"color-scaling",children:"Color Scaling"}),`
`,(0,e.jsx)(s.p,{children:"The chart automatically scales colors based on data values:"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"No data"}),": Countries without values use the default theme color (",(0,e.jsx)(s.code,{children:"datalessRegionColor"}),")"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Low values"}),": Displayed with lighter colors"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"High values"}),": Displayed with the full primary theme color"]}),`
`]}),`
`,(0,e.jsxs)(s.p,{children:["The color scale is configured via Google Charts' ",(0,e.jsx)(s.code,{children:"colorAxis"})," option, using the theme's primary color range."]}),`
`,(0,e.jsx)(s.h2,{id:"loading-state",children:"Loading State"}),`
`,(0,e.jsx)(s.p,{children:"The Geo Chart displays a loading placeholder while Google Charts loads its resources from the CDN."}),`
`,(0,e.jsx)(s.h3,{id:"default-loading-placeholder",children:"Default Loading Placeholder"}),`
`,(0,e.jsx)(s.p,{children:'By default, a simple "Loading map" text is shown while Google Charts loads:'}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`<GeoChart
	data={ ordersByCountry }
	width={ 800 }
	height={ 500 }
/>
// Shows "Loading map" until Google Charts is ready`}),`
`,(0,e.jsx)(s.h3,{id:"custom-loading-placeholder",children:"Custom Loading Placeholder"}),`
`,(0,e.jsxs)(s.p,{children:["You can provide a custom loading placeholder using the ",(0,e.jsx)(s.code,{children:"renderPlaceholder"})," prop:"]}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`<GeoChart
	data={ ordersByCountry }
	width={ 800 }
	height={ 500 }
	renderPlaceholder={ () => (
		<div className="custom-loading">
			<Spinner />
			<span>Loading world map...</span>
		</div>
	) }
/>`}),`
`,(0,e.jsx)(s.p,{children:"This is useful when you want to show a skeleton loader, spinner, or branded loading state that matches your application's design."}),`
`,(0,e.jsx)(s.h2,{id:"country-code-format",children:"Country Code Format"}),`
`,(0,e.jsx)(s.p,{children:"The Geo Chart requires two-letter ISO 3166-1 alpha-2 country codes. Common examples:"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"US"}),": United States"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"CA"}),": Canada"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"GB"}),": United Kingdom"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"DE"}),": Germany"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"FR"}),": France"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"JP"}),": Japan"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"AU"}),": Australia"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"BR"}),": Brazil"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"IN"}),": India"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"CN"}),": China"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"MX"}),": Mexico"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"ES"}),": Spain"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"IT"}),": Italy"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"NL"}),": Netherlands"]}),`
`]}),`
`,(0,e.jsxs)(s.p,{children:["For a complete list of country codes, refer to the ",(0,e.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2",rel:"nofollow",children:"ISO 3166-1 alpha-2 codes"}),"."]}),`
`,(0,e.jsx)(s.h2,{id:"theming-integration",children:"Theming Integration"}),`
`,(0,e.jsxs)(s.p,{children:["Geo Charts integrate seamlessly with the chart theming system. The default theme has neutral colors and styling, and is automatically applied to all charts unless a custom theme is provided. A custom theme can be provided by wrapping your chart in ",(0,e.jsx)(s.code,{children:"GlobalChartsProvider"})," and passing a custom theme object with the properties you want to override to the ",(0,e.jsx)(s.code,{children:"theme"})," prop:"]}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`import { GlobalChartsProvider, GeoChart, type ChartTheme } from '@automattic/charts';

const customTheme: ChartTheme = {
	colors: ['#FF6B6B', '#4ECDC4', '#45B7D1'],
	backgroundColor: '#f5f5f5',
	geoChart: {
		featureFillColor: '#e0e0e0',
	},
};

<GlobalChartsProvider theme={customTheme}>
	<GeoChart
		data={ordersByCountry}
		width={800}
		height={500}
	/>
</GlobalChartsProvider>`}),`
`,(0,e.jsx)(s.p,{children:"The chart uses the following theme properties:"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"colors[0]"})}),": Primary color for data visualization (used for color axis range)"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"backgroundColor"})}),": Background color for the map"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"geoChart.featureFillColor"})}),": Fill color for countries without data"]}),`
`]}),`
`,(0,e.jsx)(s.h2,{id:"custom-styling",children:"Custom Styling"}),`
`,(0,e.jsxs)(s.p,{children:["Add custom styles using the ",(0,e.jsx)(s.code,{children:"className"})," prop:"]}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`.custom-geo-chart {
	border-radius: 8px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

<GeoChart
	data={ ordersByCountry }
	width={ 800 }
	height={ 500 }
	className="custom-geo-chart"
/>`}),`
`,(0,e.jsx)(s.h2,{id:"map-projection",children:"Map Projection"}),`
`,(0,e.jsx)(s.p,{children:"The Geo Chart uses Google Charts' default Mercator projection for world map visualization. The map automatically scales to fit within the specified dimensions."}),`
`,(0,e.jsx)(s.h2,{id:"best-practices",children:"Best Practices"}),`
`,(0,e.jsx)(s.h3,{id:"data-preparation",children:"Data Preparation"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Use correct ISO codes"}),": Ensure country codes follow ISO 3166-1 alpha-2 format (two-letter codes)"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Validate data"}),": Check that values are positive numbers"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Consider scale"}),": Large value ranges will show more dramatic color differences"]}),`
`]}),`
`,(0,e.jsx)(s.h3,{id:"performance-considerations",children:"Performance Considerations"}),`
`,(0,e.jsx)(s.p,{children:"The Geo Chart renders efficiently for typical use cases, but consider these factors:"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Network dependency"}),": Google Charts loads resources from Google's CDN, requiring network access"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Initial load"}),": The first render requires loading Google Charts library (~100KB)"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Caching"}),": Subsequent renders benefit from browser caching of Google Charts resources"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Fixed dimensions"}),": The chart uses fixed width and height, not responsive sizing"]}),`
`]}),`
`,(0,e.jsx)(s.h3,{id:"accessibility",children:"Accessibility"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Alternative views"}),": Consider providing a data table or list view for users who prefer non-visual data"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Color contrast"}),": The automatic color scaling maintains theme consistency, but test with your specific color choices"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Keyboard navigation"}),": Currently, the chart is primarily mouse-driven; consider complementing with keyboard-accessible data views"]}),`
`]}),`
`,(0,e.jsx)(s.h2,{id:"accessibility-1",children:"Accessibility"}),`
`,(0,e.jsx)(s.h3,{id:"mouse-interaction",children:"Mouse Interaction"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Hover"}),": Move the mouse over any country to see its data in a tooltip"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Visual feedback"}),": Countries with data show graduated colors based on value magnitude"]}),`
`]}),`
`,(0,e.jsx)(s.h3,{id:"screen-reader-support",children:"Screen Reader Support"}),`
`,(0,e.jsx)(s.p,{children:"Google Charts provides some built-in accessibility features. For better accessibility:"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsx)(s.li,{children:"Provide a data table or list alongside the chart"}),`
`,(0,e.jsx)(s.li,{children:"Use descriptive headings to introduce the geographical data"}),`
`,(0,e.jsxs)(s.li,{children:["Consider adding ",(0,e.jsx)(s.code,{children:"aria-label"})," or ",(0,e.jsx)(s.code,{children:"aria-describedby"})," to the container element"]}),`
`]}),`
`,(0,e.jsx)(s.h3,{id:"focus-management",children:"Focus Management"}),`
`,(0,e.jsx)(s.p,{children:"Google Charts GeoChart does not support keyboard navigation, so this limitation is inherited by this component. For full accessibility:"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsx)(s.li,{children:"Complement the chart with a keyboard-accessible data table"}),`
`,(0,e.jsx)(s.li,{children:"Provide text summaries of key insights"}),`
`,(0,e.jsx)(s.li,{children:"Consider using the chart as a visual supplement to accessible data presentations"}),`
`]})]})}function h(a={}){const{wrapper:s}={...(0,c.R)(),...a.components};return s?(0,e.jsx)(s,{...a,children:(0,e.jsx)(l,{...a})}):l(a)}}),"../charts/src/charts/geo-chart/stories/index.stories.tsx":((p,r,t)=>{"use strict";t.r(r),t.d(r,{Default:()=>f,EmptyData:()=>M,SingleCountry:()=>B,__namedExportsOrder:()=>U,default:()=>L});var d=t("../charts/src/stories/chart-decorator.tsx"),e=t("../charts/src/stories/theme-config.tsx"),c=t("../charts/src/stories/sample-data/index.ts"),o=t("../../../node_modules/.pnpm/@wordpress+i18n@6.9.0_patch_hash=0c63a888feb97f2f1d416ca013ad85c31b6360b41cc0b6e2b0ae28f778fbdc5b/node_modules/@wordpress/i18n/build-module/index.js"),n=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=t("../../../node_modules/.pnpm/react-google-charts@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-google-charts/dist/index.js"),a=t("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),s=t("../charts/src/providers/chart-context/global-charts-provider.tsx"),i=t("../charts/src/utils/color-utils.ts"),m=t("../charts/src/utils/resolve-css-var.ts"),x=t("../charts/src/charts/private/with-responsive/with-responsive.tsx"),_=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=t.n(_),v=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/geo-chart/geo-chart.module.scss"),j={};j.insert="head",j.singleton=!1;var X=A()(v.A,j);const b=v.A.locals||{};var g=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const D=o.__,P="#ffffff",I="#ffffff",w=({className:u,data:O,width:y,height:C,renderPlaceholder:E})=>{const{getElementStyles:F,theme:{geoChart:{featureFillColor:N},backgroundColor:R}}=(0,a.j)(),K=(0,g.jsx)("div",{className:(0,n.A)("geo-chart",b.container,u),"data-testid":"geo-chart-loading",style:{width:y,height:C},children:E?E():D("Loading map","jetpack-charts")}),G=F({index:0}).color,W=(0,i.iK)(G,.8),V=(0,i.HU)(R,null,m.q)||I,T=(0,i.HU)(N,null,m.q)||P,z=[["Country","Value"],...Object.entries(O)],H={colorAxis:{colors:[W,G]},backgroundColor:V,datalessRegionColor:T,defaultColor:T,tooltip:{trigger:"focus"},legend:"none",keepAspectRatio:!0};return(0,g.jsx)("div",{className:(0,n.A)("geo-chart",b.container,u),"data-testid":"geo-chart",style:{width:y,height:C,backgroundColor:R},children:(0,g.jsx)(h.t1,{chartType:"GeoChart",width:y,height:C,data:z,options:H,loader:K})})},S=u=>(0,l.useContext)(s.m)?(0,g.jsx)(w,{...u}):(0,g.jsx)(s.S,{children:(0,g.jsx)(w,{...u})});S.displayName="GeoChart";const k=(0,x.F)(S);try{ResponsiveChart.displayName="ResponsiveChart",ResponsiveChart.__docgenInfo={description:"",displayName:"ResponsiveChart",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"unknown"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Record mapping country codes (ISO 3166-1 alpha-2, e.g., 'US', 'GB') to numeric values",name:"data",required:!0,type:{name:"GeoData"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},renderPlaceholder:{defaultValue:null,description:`Optional render function for the loading placeholder.
Called while Google Charts is loading.`,name:"renderPlaceholder",required:!1,type:{name:"() => ReactNode"}},maxWidth:{defaultValue:{value:"1200"},description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:{value:"0.5"},description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:{value:"300"},description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/geo-chart/geo-chart.tsx#ResponsiveChart"]={docgenInfo:ResponsiveChart.__docgenInfo,name:"ResponsiveChart",path:"../charts/src/charts/geo-chart/geo-chart.tsx#ResponsiveChart"})}catch{}try{GeoChart.displayName="GeoChart",GeoChart.__docgenInfo={description:"",displayName:"GeoChart",props:{data:{defaultValue:null,description:"Record mapping country codes (ISO 3166-1 alpha-2, e.g., 'US', 'GB') to numeric values",name:"data",required:!0,type:{name:"GeoData"}},renderPlaceholder:{defaultValue:null,description:`Optional render function for the loading placeholder.
Called while Google Charts is loading.`,name:"renderPlaceholder",required:!1,type:{name:"() => ReactNode"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/geo-chart/geo-chart.tsx#GeoChart"]={docgenInfo:GeoChart.__docgenInfo,name:"GeoChart",path:"../charts/src/charts/geo-chart/geo-chart.tsx#GeoChart"})}catch{}const L={title:"JS Packages/Charts Library/Charts/Geo Chart",component:k,parameters:{layout:"centered"},decorators:[d.OI],argTypes:{...d.xo,...e.jW}},f={args:{data:c.p0,withPadding:!1}},B={args:{...f.args,data:{US:1500}}},M={args:{...f.args,data:{}}},U=["Default","SingleCountry","EmptyData"]}),"../charts/src/charts/private/with-responsive/with-responsive.tsx":((p,r,t)=>{"use strict";t.d(r,{F:()=>o});var d=t("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c=({resizeDebounceTime:n=300,maxWidth:l=1200,aspectRatio:h=.5})=>{const{parentRef:a,width:s}=(0,d.A)({debounceTime:n,enableDebounceLeadingCall:!0}),i=s>0?Math.min(s,l):0,m=i*h;return{parentRef:a,width:i,height:m}};function o(n){return function({resizeDebounceTime:h=300,maxWidth:a=1200,aspectRatio:s=.5,...i}){const{parentRef:m,width:x,height:_}=c({resizeDebounceTime:h,maxWidth:a,aspectRatio:s});return(0,e.jsx)("div",{ref:m,style:{width:i.size??i.width??"100%",height:i.size??i.height??"auto"},children:(0,e.jsx)(n,{width:x,height:_,size:x,...i})})}}try{o.displayName="withResponsive",o.__docgenInfo={description:"A higher-order component that provides responsive dimensions\nto the wrapped chart component using useParentSize from `@visx/responsive`.",displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/with-responsive/with-responsive.tsx#withResponsive"]={docgenInfo:o.__docgenInfo,name:"withResponsive",path:"../charts/src/charts/private/with-responsive/with-responsive.tsx#withResponsive"})}catch{}})}]);
