"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2860,7354],{"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/geo-chart/geo-chart.module.scss":((f,c,s)=>{s.d(c,{A:()=>i});var h=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=s.n(h),r=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),o=s.n(r),n=o()(e());n.push([f.id,".lAFi7oOf7oa6dhX2GP1E{position:relative;display:flex;justify-content:center;align-items:center}",""]),n.locals={container:"lAFi7oOf7oa6dhX2GP1E"};const i=n}),"../charts/src/charts/geo-chart/geo-chart.tsx":((f,c,s)=>{s.d(c,{A:()=>B});var h=s("../../../node_modules/.pnpm/@wordpress+i18n@6.12.0/node_modules/@wordpress/i18n/build-module/index.mjs"),e=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=s("../../../node_modules/.pnpm/react-google-charts@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-google-charts/dist/index.js"),n=s("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),i=s("../charts/src/providers/chart-context/global-charts-provider.tsx"),d=s("../charts/src/utils/color-utils.ts"),a=s("../charts/src/utils/resolve-css-var.ts"),t=s("../charts/src/charts/private/with-responsive/with-responsive.tsx"),l=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=s.n(l),p=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/geo-chart/geo-chart.module.scss"),m={};m.insert="head",m.singleton=!1;var _=u()(p.A,m);const C=p.A.locals||{};var j=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const I=h.__,M="#ffffff",L="#ffffff",E=({className:x,data:y,width:v,height:S,region:b="world",resolution:w="countries",renderPlaceholder:A})=>{const{getElementStyles:K,theme:{geoChart:{featureFillColor:W},backgroundColor:R}}=(0,n.j)(),k=(0,j.jsx)("div",{className:(0,e.A)("geo-chart",C.container,x),"data-testid":"geo-chart-loading",style:{width:v,height:S},children:A?A():I("Loading map","jetpack-charts")}),T=K({index:0}).color,G=(0,d.iK)(T,.8),D=(0,d.HU)(R,null,a.q)||L,O=(0,d.HU)(W,null,a.q)||M,P=(0,r.useMemo)(()=>y.length>0&&y[0].some(g=>typeof g=="object"&&g!==null&&"role"in g&&g.role==="tooltip"&&"p"in g&&typeof g.p=="object"&&g.p!==null&&"html"in g.p&&g.p.html===!0),[y]),F=(0,r.useMemo)(()=>({...b!=="world"&&{region:b},...w!=="countries"&&{resolution:w},colorAxis:{colors:[G,T]},backgroundColor:D,datalessRegionColor:O,defaultColor:O,tooltip:{trigger:"focus",isHtml:P},legend:"none",keepAspectRatio:!0}),[b,w,G,T,D,O,P]);return(0,j.jsx)("div",{className:(0,e.A)("geo-chart",C.container,x),"data-testid":"geo-chart",style:{width:v,height:S,backgroundColor:R},children:(0,j.jsx)(o.t1,{chartType:"GeoChart",width:v,height:S,data:y,options:F,loader:k})})},U=x=>(0,r.useContext)(i.m)?(0,j.jsx)(E,{...x}):(0,j.jsx)(i.S,{children:(0,j.jsx)(E,{...x})});U.displayName="GeoChart";const B=(0,t.F)(U);try{ResponsiveChart.displayName="ResponsiveChart",ResponsiveChart.__docgenInfo={description:"",displayName:"ResponsiveChart",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"unknown"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:`Data in Google Charts native format for maximum flexibility.
First row contains column headers, subsequent rows contain data.

Country identifiers can be either full country names or ISO 3166-1 alpha-2 codes
(e.g., 'United States' or 'US').`,name:"data",required:!0,type:{name:"GeoData"}},region:{defaultValue:{value:"'world'"},description:`Region to display. Use 'world' for global view, 'US' for United States,
or any ISO 3166-1 alpha-2 country code.`,name:"region",required:!1,type:{name:"GeoRegion"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},resolution:{defaultValue:{value:"'countries'"},description:`Resolution level for the map.
- 'countries': Country-level (default for 'world')
- 'provinces': State/province level (use with specific region like 'US')
- 'metros': Metropolitan areas (US only)`,name:"resolution",required:!1,type:{name:"enum",value:[{value:'"countries"'},{value:'"provinces"'},{value:'"metros"'}]}},renderPlaceholder:{defaultValue:null,description:`Optional render function for the loading placeholder.
Called while Google Charts is loading.`,name:"renderPlaceholder",required:!1,type:{name:"() => ReactNode"}},maxWidth:{defaultValue:{value:"1200"},description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:{value:"0.5"},description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:{value:"300"},description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/geo-chart/geo-chart.tsx#ResponsiveChart"]={docgenInfo:ResponsiveChart.__docgenInfo,name:"ResponsiveChart",path:"../charts/src/charts/geo-chart/geo-chart.tsx#ResponsiveChart"})}catch{}try{GeoChart.displayName="GeoChart",GeoChart.__docgenInfo={description:"",displayName:"GeoChart",props:{data:{defaultValue:null,description:`Data in Google Charts native format for maximum flexibility.
First row contains column headers, subsequent rows contain data.

Country identifiers can be either full country names or ISO 3166-1 alpha-2 codes
(e.g., 'United States' or 'US').`,name:"data",required:!0,type:{name:"GeoData"}},region:{defaultValue:{value:"world"},description:`Region to display. Use 'world' for global view, 'US' for United States,
or any ISO 3166-1 alpha-2 country code.`,name:"region",required:!1,type:{name:"GeoRegion"}},resolution:{defaultValue:{value:"countries"},description:`Resolution level for the map.
- 'countries': Country-level (default for 'world')
- 'provinces': State/province level (use with specific region like 'US')
- 'metros': Metropolitan areas (US only)`,name:"resolution",required:!1,type:{name:"enum",value:[{value:'"countries"'},{value:'"provinces"'},{value:'"metros"'}]}},renderPlaceholder:{defaultValue:null,description:`Optional render function for the loading placeholder.
Called while Google Charts is loading.`,name:"renderPlaceholder",required:!1,type:{name:"() => ReactNode"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/geo-chart/geo-chart.tsx#GeoChart"]={docgenInfo:GeoChart.__docgenInfo,name:"GeoChart",path:"../charts/src/charts/geo-chart/geo-chart.tsx#GeoChart"})}catch{}}),"../charts/src/charts/geo-chart/stories/config.tsx":((f,c,s)=>{s.d(c,{_:()=>i,s:()=>n});var h=s("../charts/src/stories/chart-decorator.tsx"),e=s("../charts/src/stories/theme-config.tsx"),r=s("../charts/src/stories/sample-data/index.ts"),o=s("../charts/src/charts/geo-chart/geo-chart.tsx");const n={title:"JS Packages/Charts Library/Charts/Geo Chart",component:o.A,parameters:{layout:"centered"},decorators:[h.OI],argTypes:{...h.xo,...e.jW}},i={data:r.M8,withPadding:!1,height:500};try{GeoData.displayName="GeoData",GeoData.__docgenInfo={description:`Data format for GeoChart - uses Google Charts native data format for maximum flexibility.
First element is the header row, subsequent elements are data rows.

Country identifiers can be either full country names or ISO 3166-1 alpha-2 codes (e.g., 'United States' or 'US').
Full names are recommended for better readability in tooltips.`,displayName:"GeoData",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/geo-chart/stories/config.tsx#GeoData"]={docgenInfo:GeoData.__docgenInfo,name:"GeoData",path:"../charts/src/charts/geo-chart/stories/config.tsx#GeoData"})}catch{}}),"../charts/src/charts/geo-chart/stories/index.docs.mdx":((f,c,s)=>{s.r(c),s.d(c,{default:()=>d});var h=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),r=s("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),o=s("../../../node_modules/.pnpm/@storybook+addon-docs@10.2.3_@types+react@18.3.26_esbuild@0.25.9_storybook@10.2.3_@test_1e909a19285aafcb7051ac1c3970312d/node_modules/@storybook/addon-docs/dist/blocks.js"),n=s("../charts/src/charts/geo-chart/stories/index.stories.tsx");function i(a){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...a.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.W8,{title:"JS Packages/Charts/Types/Geo Chart",of:n}),`
`,(0,e.jsx)(t.h1,{id:"geo-chart",children:"Geo Chart"}),`
`,(0,e.jsx)(t.p,{children:"Geo Charts visualize geographical data on an interactive world map, making it easy to understand the distribution of values across countries."}),`
`,(0,e.jsx)(o.Hl,{of:n.Default}),`
`,(0,e.jsx)(t.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsx)(t.p,{children:"The Geo Chart component provides a clean, accessible solution for displaying country-level data on a world map. Built on Google Charts GeoChart, it supports interactive tooltips, automatic color scaling, and integration with the chart theme system:"}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`import { GeoChart } from '@automattic/charts';

<GeoChart
	data={ ordersByCountry }
	width={ 800 }
	height={ 500 }
/>`}),`
`,(0,e.jsx)(t.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsxs)(t.p,{children:["For detailed information about component props and types, see the ",(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-library-charts-geo-chart-api-reference--docs",children:"Geo Chart API Reference"}),"."]}),`
`,(0,e.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(t.h3,{id:"simple-geo-chart",children:"Simple Geo Chart"}),`
`,(0,e.jsxs)(t.p,{children:["The simplest geo chart requires data, width, and height. The ",(0,e.jsx)(t.code,{children:"data"})," prop uses Google Charts format - an array where the first row contains column headers and subsequent rows contain data. Countries can be identified by full name or ISO 3166-1 alpha-2 codes (full names are recommended):"]}),`
`,(0,e.jsx)(o.Hl,{of:n.Default}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`<GeoChart
	data={ [
		['Country', 'Orders'],
		['United States', 1000],
		['Canada', 500],
		['United Kingdom', 450],
		['Germany', 400],
		['Australia', 350],
		['France', 300],
		['Mexico', 250],
		['Japan', 200],
		['Brazil', 150],
		['India', 120],
	] }
	width={ 800 }
	height={ 500 }
/>`}),`
`,(0,e.jsx)(t.h3,{id:"required-props",children:"Required Props"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"data"})}),": Array in Google Charts format - first row is headers, subsequent rows are data. Countries can be identified by full name (e.g., 'United States', 'Canada') or ISO 3166-1 alpha-2 codes (e.g., 'US', 'CA')"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"width"})}),": Width of the chart in pixels"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"height"})}),": Height of the chart in pixels"]}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"optional-props",children:"Optional Props"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"className"})}),": Additional CSS class name for custom styling"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"renderPlaceholder"})}),": Custom render function for the loading placeholder"]}),`
`]}),`
`,(0,e.jsxs)(t.p,{children:["For detailed prop information and type definitions, see the ",(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-library-charts-geo-chart-api-reference--docs",children:"Geo Chart API Reference"}),"."]}),`
`,(0,e.jsx)(t.h2,{id:"advanced-features",children:"Advanced Features"}),`
`,(0,e.jsx)(t.p,{children:"The Geo Chart supports the full Google Charts data format, enabling powerful customization options:"}),`
`,(0,e.jsx)(t.h3,{id:"custom-tooltips",children:"Custom Tooltips"}),`
`,(0,e.jsxs)(t.p,{children:["You can customize tooltip content using column roles. Add a tooltip column to your data with ",(0,e.jsx)(t.code,{children:"{ type: 'string', role: 'tooltip' }"}),":"]}),`
`,(0,e.jsx)(o.Hl,{of:n.WithTextTooltips}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`<GeoChart
	data={ [
		['Country', 'Value', { type: 'string', role: 'tooltip' }],
		['United States', 1000, 'United States: 1,000 orders (40% of total)'],
		['Canada', 500, 'Canada: 500 orders (20% of total)'],
		['United Kingdom', 450, 'United Kingdom: 450 orders (18% of total)'],
	] }
	width={ 800 }
	height={ 500 }
/>`}),`
`,(0,e.jsx)(t.h3,{id:"html-tooltips",children:"HTML Tooltips"}),`
`,(0,e.jsxs)(t.p,{children:["For rich tooltip content with HTML formatting, add ",(0,e.jsx)(t.code,{children:"p: { html: true }"})," to the tooltip column:"]}),`
`,(0,e.jsx)(o.Hl,{of:n.WithCustomTooltip}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`<GeoChart
	data={ [
		['Country', 'Value', { type: 'string', role: 'tooltip', p: { html: true } }],
		['United States', 1000, '<b>United States</b><br/>1,000 orders'],
		['Canada', 500, '<b>Canada</b><br/>500 orders'],
	] }
	width={ 800 }
	height={ 500 }
/>`}),`
`,(0,e.jsx)(t.h4,{id:"security-considerations",children:"Security Considerations"}),`
`,(0,e.jsxs)(t.p,{children:["When using HTML tooltips via ",(0,e.jsx)(t.code,{children:"p: { html: true }"}),", any HTML in the tooltip content will be rendered by the browser. If tooltip strings come from user-generated input or external data sources, you ",(0,e.jsx)(t.strong,{children:"must"})," sanitize them first to prevent cross-site scripting (XSS) attacks."]}),`
`,(0,e.jsx)(t.h3,{id:"formatted-values",children:"Formatted Values"}),`
`,(0,e.jsxs)(t.p,{children:["Separate the display format from the actual value using cell objects with ",(0,e.jsx)(t.code,{children:"v"})," (value) and ",(0,e.jsx)(t.code,{children:"f"})," (formatted) properties:"]}),`
`,(0,e.jsx)(o.Hl,{of:n.WithFormattedValues}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`<GeoChart
	data={ [
		['Country', 'Revenue'],
		['United States', { v: 1234567, f: '$1.23M' }],
		['Canada', { v: 543210, f: '$543K' }],
		['United Kingdom', { v: 789012, f: '$789K' }],
	] }
	width={ 800 }
	height={ 500 }
/>`}),`
`,(0,e.jsx)(t.p,{children:"This ensures proper data scaling while displaying user-friendly labels."}),`
`,(0,e.jsx)(t.h3,{id:"complex-html-tooltips",children:"Complex HTML Tooltips"}),`
`,(0,e.jsx)(t.p,{children:"Combine HTML tooltips with custom styling for rich, interactive experiences:"}),`
`,(0,e.jsx)(o.Hl,{of:n.WithComplexTooltips}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`<GeoChart
	data={ [
		['Country', 'Orders', { type: 'string', role: 'tooltip', p: { html: true } }],
		[
			'United States',
			1000,
			\`<div style="padding: 12px; font-family: sans-serif;">
				<div style="font-weight: bold; font-size: 14px; margin-bottom: 8px;">\u{1F1FA}\u{1F1F8} United States</div>
				<div style="color: #666;">Orders: <strong>1,000</strong></div>
				<div style="color: #666;">Share: <strong>40%</strong></div>
			</div>\`,
		],
	] }
	width={ 800 }
	height={ 500 }
/>`}),`
`,(0,e.jsx)(t.h2,{id:"interactive-features",children:"Interactive Features"}),`
`,(0,e.jsx)(t.h3,{id:"hover-tooltips",children:"Hover Tooltips"}),`
`,(0,e.jsx)(t.p,{children:"The Geo Chart includes built-in interactive tooltips powered by Google Charts that display on hover. By default, tooltips show:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Country name"}),`
`,(0,e.jsx)(t.li,{children:"Value for that country"}),`
`]}),`
`,(0,e.jsx)(t.p,{children:"You can customize tooltips using the tooltip column role (see Advanced Features above)."}),`
`,(0,e.jsx)(t.p,{children:"Tooltips are automatically enabled and positioned for optimal readability."}),`
`,(0,e.jsx)(t.h3,{id:"color-scaling",children:"Color Scaling"}),`
`,(0,e.jsx)(t.p,{children:"The chart automatically scales colors based on data values:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"No data"}),": Countries without values use the default theme color (",(0,e.jsx)(t.code,{children:"datalessRegionColor"}),")"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Low values"}),": Displayed with lighter colors"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"High values"}),": Displayed with the full primary theme color"]}),`
`]}),`
`,(0,e.jsxs)(t.p,{children:["The color scale is configured via Google Charts' ",(0,e.jsx)(t.code,{children:"colorAxis"})," option, using the theme's primary color range."]}),`
`,(0,e.jsx)(t.h2,{id:"loading-state",children:"Loading State"}),`
`,(0,e.jsx)(t.p,{children:"The Geo Chart displays a loading placeholder while Google Charts loads its resources from the CDN."}),`
`,(0,e.jsx)(t.h3,{id:"default-loading-placeholder",children:"Default Loading Placeholder"}),`
`,(0,e.jsx)(t.p,{children:'By default, a simple "Loading map" text is shown while Google Charts loads:'}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`<GeoChart
	data={ ordersByCountry }
	width={ 800 }
	height={ 500 }
/>
// Shows "Loading map" until Google Charts is ready`}),`
`,(0,e.jsx)(t.h3,{id:"custom-loading-placeholder",children:"Custom Loading Placeholder"}),`
`,(0,e.jsxs)(t.p,{children:["You can provide a custom loading placeholder using the ",(0,e.jsx)(t.code,{children:"renderPlaceholder"})," prop:"]}),`
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
`,(0,e.jsx)(t.p,{children:"This is useful when you want to show a skeleton loader, spinner, or branded loading state that matches your application's design."}),`
`,(0,e.jsx)(t.h2,{id:"country-identification",children:"Country Identification"}),`
`,(0,e.jsx)(t.p,{children:"The Geo Chart accepts countries in two formats:"}),`
`,(0,e.jsx)(t.h3,{id:"full-country-names-recommended",children:"Full Country Names (Recommended)"}),`
`,(0,e.jsx)(t.p,{children:"Use full country names for better readability:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"United States"}),", ",(0,e.jsx)(t.strong,{children:"Canada"}),", ",(0,e.jsx)(t.strong,{children:"United Kingdom"})]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Germany"}),", ",(0,e.jsx)(t.strong,{children:"France"}),", ",(0,e.jsx)(t.strong,{children:"Japan"})]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Australia"}),", ",(0,e.jsx)(t.strong,{children:"Brazil"}),", ",(0,e.jsx)(t.strong,{children:"India"})]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"China"}),", ",(0,e.jsx)(t.strong,{children:"Mexico"}),", ",(0,e.jsx)(t.strong,{children:"Spain"})]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Italy"}),", ",(0,e.jsx)(t.strong,{children:"Netherlands"}),", ",(0,e.jsx)(t.strong,{children:"Sweden"})]}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"iso-3166-1-alpha-2-codes",children:"ISO 3166-1 Alpha-2 Codes"}),`
`,(0,e.jsx)(t.p,{children:"Alternatively, you can use two-letter ISO country codes:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"US"}),", ",(0,e.jsx)(t.strong,{children:"CA"}),", ",(0,e.jsx)(t.strong,{children:"GB"}),", ",(0,e.jsx)(t.strong,{children:"DE"}),", ",(0,e.jsx)(t.strong,{children:"FR"})]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"JP"}),", ",(0,e.jsx)(t.strong,{children:"AU"}),", ",(0,e.jsx)(t.strong,{children:"BR"}),", ",(0,e.jsx)(t.strong,{children:"IN"}),", ",(0,e.jsx)(t.strong,{children:"CN"})]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"MX"}),", ",(0,e.jsx)(t.strong,{children:"ES"}),", ",(0,e.jsx)(t.strong,{children:"IT"}),", ",(0,e.jsx)(t.strong,{children:"NL"}),", ",(0,e.jsx)(t.strong,{children:"SE"})]}),`
`]}),`
`,(0,e.jsxs)(t.p,{children:["For a complete list of country codes, refer to the ",(0,e.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2",rel:"nofollow",children:"ISO 3166-1 alpha-2 codes"}),"."]}),`
`,(0,e.jsx)(t.h2,{id:"theming-integration",children:"Theming Integration"}),`
`,(0,e.jsxs)(t.p,{children:["Geo Charts integrate seamlessly with the chart theming system. The default theme has neutral colors and styling, and is automatically applied to all charts unless a custom theme is provided. A custom theme can be provided by wrapping your chart in ",(0,e.jsx)(t.code,{children:"GlobalChartsProvider"})," and passing a custom theme object with the properties you want to override to the ",(0,e.jsx)(t.code,{children:"theme"})," prop:"]}),`
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
`,(0,e.jsx)(t.p,{children:"The chart uses the following theme properties:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"colors[0]"})}),": Primary color for data visualization (used for color axis range)"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"backgroundColor"})}),": Background color for the map"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"geoChart.featureFillColor"})}),": Fill color for countries without data"]}),`
`]}),`
`,(0,e.jsx)(t.h2,{id:"custom-styling",children:"Custom Styling"}),`
`,(0,e.jsxs)(t.p,{children:["Add custom styles using the ",(0,e.jsx)(t.code,{children:"className"})," prop:"]}),`
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
`,(0,e.jsx)(t.h2,{id:"map-projection",children:"Map Projection"}),`
`,(0,e.jsx)(t.p,{children:"The Geo Chart uses Google Charts' default Mercator projection for world map visualization. The map automatically scales to fit within the specified dimensions."}),`
`,(0,e.jsx)(t.h2,{id:"best-practices",children:"Best Practices"}),`
`,(0,e.jsx)(t.h3,{id:"data-preparation",children:"Data Preparation"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Use full country names"}),": Recommended for better readability (e.g., 'United States' instead of 'US')"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"ISO codes supported"}),": Two-letter ISO 3166-1 alpha-2 codes also work if needed"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Validate data"}),": Check that values are positive numbers"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Consider scale"}),": Large value ranges will show more dramatic color differences"]}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"performance-considerations",children:"Performance Considerations"}),`
`,(0,e.jsx)(t.p,{children:"The Geo Chart renders efficiently for typical use cases, but consider these factors:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Network dependency"}),": Google Charts loads resources from Google's CDN, requiring network access"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Initial load"}),": The first render requires loading Google Charts library (~100KB)"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Caching"}),": Subsequent renders benefit from browser caching of Google Charts resources"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Fixed dimensions"}),": The chart uses fixed width and height, not responsive sizing"]}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"accessibility",children:"Accessibility"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Alternative views"}),": Consider providing a data table or list view for users who prefer non-visual data"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Color contrast"}),": The automatic color scaling maintains theme consistency, but test with your specific color choices"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Keyboard navigation"}),": Currently, the chart is primarily mouse-driven; consider complementing with keyboard-accessible data views"]}),`
`]}),`
`,(0,e.jsx)(t.h2,{id:"accessibility-1",children:"Accessibility"}),`
`,(0,e.jsx)(t.h3,{id:"mouse-interaction",children:"Mouse Interaction"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Hover"}),": Move the mouse over any country to see its data in a tooltip"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Visual feedback"}),": Countries with data show graduated colors based on value magnitude"]}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"screen-reader-support",children:"Screen Reader Support"}),`
`,(0,e.jsx)(t.p,{children:"Google Charts provides some built-in accessibility features. For better accessibility:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Provide a data table or list alongside the chart"}),`
`,(0,e.jsx)(t.li,{children:"Use descriptive headings to introduce the geographical data"}),`
`,(0,e.jsxs)(t.li,{children:["Consider adding ",(0,e.jsx)(t.code,{children:"aria-label"})," or ",(0,e.jsx)(t.code,{children:"aria-describedby"})," to the container element"]}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"focus-management",children:"Focus Management"}),`
`,(0,e.jsx)(t.p,{children:"Google Charts GeoChart does not support keyboard navigation, so this limitation is inherited by this component. For full accessibility:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Complement the chart with a keyboard-accessible data table"}),`
`,(0,e.jsx)(t.li,{children:"Provide text summaries of key insights"}),`
`,(0,e.jsx)(t.li,{children:"Consider using the chart as a visual supplement to accessible data presentations"}),`
`]})]})}function d(a={}){const{wrapper:t}={...(0,r.R)(),...a.components};return t?(0,e.jsx)(t,{...a,children:(0,e.jsx)(i,{...a})}):i(a)}}),"../charts/src/charts/geo-chart/stories/index.stories.tsx":((f,c,s)=>{s.r(c),s.d(c,{Default:()=>i,EmptyData:()=>a,EuropeanCountries:()=>l,SingleCountry:()=>d,USStates:()=>t,WithComplexTooltips:()=>_,WithCustomTooltip:()=>p,WithFormattedValues:()=>m,WithTextTooltips:()=>u,__namedExportsOrder:()=>C,default:()=>n});var h=s("../charts/src/stories/sample-data/index.ts"),e=s("../charts/src/charts/geo-chart/geo-chart.tsx"),r=s("../charts/src/charts/geo-chart/stories/config.tsx");const n={...r.s,title:"JS Packages/Charts Library/Charts/Geo Chart",component:e.A},i={args:{...r._}},d={args:{...r._,data:[["Country","Views"],["United States",1500]]}},a={args:{...r._,data:[["Country","Views"]]}},t={args:{...r._,region:"US",resolution:"provinces",data:h.fP}},l={args:{...r._,region:"150",resolution:"countries",data:h.F_}},u={args:{...r._,data:[["Country","Orders",{type:"string",role:"tooltip"}],["United States",1e3,"United States: 1,000 orders (40% of total)"],["Canada",500,"Canada: 500 orders (20% of total)"],["United Kingdom",450,"United Kingdom: 450 orders (18% of total)"]]}},p={args:{...r._,data:[["Country","Orders",{type:"string",role:"tooltip",p:{html:!0}}],["United States",1e3,"<b>United States</b><br/>1,000 orders"],["Canada",500,"<b>Canada</b><br/>500 orders"]]}},m={args:{...r._,data:[["Country","Revenue"],["United States",{v:1234567,f:"$1.23M"}],["Canada",{v:543210,f:"$543K"}],["United Kingdom",{v:789012,f:"$789K"}]]}},_={args:{...r._,data:[["Country","Orders",{type:"string",role:"tooltip",p:{html:!0}}],["United States",1e3,`<div style="padding: 12px; font-family: sans-serif;">
                    <div style="font-weight: bold; font-size: 14px; margin-bottom: 8px;">\u{1F1FA}\u{1F1F8} United States</div>
                    <div style="color: #666;">Orders: <strong>1,000</strong></div>
                    <div style="color: #666;">Share: <strong>40%</strong></div>
                </div>`]]}},C=["Default","SingleCountry","EmptyData","USStates","EuropeanCountries","WithTextTooltips","WithCustomTooltip","WithFormattedValues","WithComplexTooltips"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs
  }
}`,...i.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    data: [['Country', 'Views'], ['United States', 1500]]
  }
}`,...d.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    data: [['Country', 'Views']]
  }
}`,...a.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    region: 'US',
    resolution: 'provinces',
    data: viewsByUSState
  }
}`,...t.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    region: '150',
    resolution: 'countries',
    data: viewsByEuropeanCountry
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    data: [['Country', 'Orders', {
      type: 'string',
      role: 'tooltip'
    }], ['United States', 1000, 'United States: 1,000 orders (40% of total)'], ['Canada', 500, 'Canada: 500 orders (20% of total)'], ['United Kingdom', 450, 'United Kingdom: 450 orders (18% of total)']]
  }
}`,...u.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    data: [['Country', 'Orders', {
      type: 'string',
      role: 'tooltip',
      p: {
        html: true
      }
    }], ['United States', 1000, '<b>United States</b><br/>1,000 orders'], ['Canada', 500, '<b>Canada</b><br/>500 orders']]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    data: [['Country', 'Revenue'], ['United States', {
      v: 1234567,
      f: '$1.23M'
    }], ['Canada', {
      v: 543210,
      f: '$543K'
    }], ['United Kingdom', {
      v: 789012,
      f: '$789K'
    }]]
  }
}`,...m.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    data: [['Country', 'Orders', {
      type: 'string',
      role: 'tooltip',
      p: {
        html: true
      }
    }], ['United States', 1000, \`<div style="padding: 12px; font-family: sans-serif;">
                    <div style="font-weight: bold; font-size: 14px; margin-bottom: 8px;">\u{1F1FA}\u{1F1F8} United States</div>
                    <div style="color: #666;">Orders: <strong>1,000</strong></div>
                    <div style="color: #666;">Share: <strong>40%</strong></div>
                </div>\`]]
  }
}`,..._.parameters?.docs?.source}}}}),"../charts/src/charts/private/with-responsive/with-responsive.tsx":((f,c,s)=>{s.d(c,{F:()=>o});var h=s("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),e=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=({resizeDebounceTime:n=300,maxWidth:i=1200,aspectRatio:d=.5})=>{const{parentRef:a,width:t}=(0,h.A)({debounceTime:n,enableDebounceLeadingCall:!0}),l=t>0?Math.min(t,i):0,u=l*d;return{parentRef:a,width:l,height:u}};function o(n){return function({resizeDebounceTime:d=300,maxWidth:a=1200,aspectRatio:t=.5,...l}){const{parentRef:u,width:p,height:m}=r({resizeDebounceTime:d,maxWidth:a,aspectRatio:t});return(0,e.jsx)("div",{ref:u,style:{width:l.size??l.width??"100%",height:l.size??l.height??"auto"},children:(0,e.jsx)(n,{width:p,height:m,size:p,...l})})}}try{o.displayName="withResponsive",o.__docgenInfo={description:"A higher-order component that provides responsive dimensions\nto the wrapped chart component using useParentSize from `@visx/responsive`.",displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/with-responsive/with-responsive.tsx#withResponsive"]={docgenInfo:o.__docgenInfo,name:"withResponsive",path:"../charts/src/charts/private/with-responsive/with-responsive.tsx#withResponsive"})}catch{}})}]);
