(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2860,7354],{"../../../node_modules/.pnpm/@storybook+addon-docs@10.1.10_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@te_0dab3ad5060a2aa8d937367f454f05ee/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive":(m=>{function a(t){var l=new Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}a.keys=()=>[],a.resolve=a,a.id="../../../node_modules/.pnpm/@storybook+addon-docs@10.1.10_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@te_0dab3ad5060a2aa8d937367f454f05ee/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive",m.exports=a}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/geo-chart/geo-chart.module.scss":((m,a,t)=>{"use strict";t.d(a,{A:()=>i});var l=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=t.n(l),h=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),o=t.n(h),r=o()(e());r.push([m.id,".lAFi7oOf7oa6dhX2GP1E{position:relative;display:flex;justify-content:center;align-items:center}",""]),r.locals={container:"lAFi7oOf7oa6dhX2GP1E"};const i=r}),"../charts/src/charts/geo-chart/stories/config.tsx":((m,a,t)=>{"use strict";t.d(a,{s:()=>K,_:()=>N});var l=t("../charts/src/stories/chart-decorator.tsx"),e=t("../charts/src/stories/theme-config.tsx"),h=t("../charts/src/stories/sample-data/index.ts"),o=t("../../../node_modules/.pnpm/@wordpress+i18n@6.11.0/node_modules/@wordpress/i18n/build-module/index.mjs"),r=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),i=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=t("../../../node_modules/.pnpm/react-google-charts@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-google-charts/dist/index.js"),n=t("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),s=t("../charts/src/providers/chart-context/global-charts-provider.tsx"),d=t("../charts/src/utils/color-utils.ts"),g=t("../charts/src/utils/resolve-css-var.ts"),_=t("../charts/src/charts/private/with-responsive/with-responsive.tsx"),j=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),L=t.n(j),O=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/geo-chart/geo-chart.module.scss"),y={};y.insert="head",y.singleton=!1;var Y=L()(O.A,y);const G=O.A.locals||{};var x=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const k=o.__,M="#ffffff",B="#ffffff",E=({className:p,data:f,width:C,height:v,region:S="world",resolution:b="countries",renderPlaceholder:A})=>{const{getElementStyles:V,theme:{geoChart:{featureFillColor:W},backgroundColor:D}}=(0,n.j)(),H=(0,x.jsx)("div",{className:(0,r.A)("geo-chart",G.container,p),"data-testid":"geo-chart-loading",style:{width:C,height:v},children:A?A():k("Loading map","jetpack-charts")}),w=V({index:0}).color,U=(0,d.iK)(w,.8),P=(0,d.HU)(D,null,g.q)||B,T=(0,d.HU)(W,null,g.q)||M,I=(0,i.useMemo)(()=>f.length>0&&f[0].some(u=>typeof u=="object"&&u!==null&&"role"in u&&u.role==="tooltip"&&"p"in u&&typeof u.p=="object"&&u.p!==null&&"html"in u.p&&u.p.html===!0),[f]),z=(0,i.useMemo)(()=>({...S!=="world"&&{region:S},...b!=="countries"&&{resolution:b},colorAxis:{colors:[U,w]},backgroundColor:P,datalessRegionColor:T,defaultColor:T,tooltip:{trigger:"focus",isHtml:I},legend:"none",keepAspectRatio:!0}),[S,b,U,w,P,T,I]);return(0,x.jsx)("div",{className:(0,r.A)("geo-chart",G.container,p),"data-testid":"geo-chart",style:{width:C,height:v,backgroundColor:D},children:(0,x.jsx)(c.t1,{chartType:"GeoChart",width:C,height:v,data:f,options:z,loader:H})})},R=p=>(0,i.useContext)(s.m)?(0,x.jsx)(E,{...p}):(0,x.jsx)(s.S,{children:(0,x.jsx)(E,{...p})});R.displayName="GeoChart";const F=(0,_.F)(R);try{ResponsiveChart.displayName="ResponsiveChart",ResponsiveChart.__docgenInfo={description:"",displayName:"ResponsiveChart",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"unknown"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:`Data in Google Charts native format for maximum flexibility.
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
Called while Google Charts is loading.`,name:"renderPlaceholder",required:!1,type:{name:"() => ReactNode"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/geo-chart/geo-chart.tsx#GeoChart"]={docgenInfo:GeoChart.__docgenInfo,name:"GeoChart",path:"../charts/src/charts/geo-chart/geo-chart.tsx#GeoChart"})}catch{}const K={title:"JS Packages/Charts Library/Charts/Geo Chart",component:F,parameters:{layout:"centered"},decorators:[l.OI],argTypes:{...l.xo,...e.jW}},N={data:h.M8,withPadding:!1,height:500};try{GeoData.displayName="GeoData",GeoData.__docgenInfo={description:`Data format for GeoChart - uses Google Charts native data format for maximum flexibility.
First element is the header row, subsequent elements are data rows.

Country identifiers can be either full country names or ISO 3166-1 alpha-2 codes (e.g., 'United States' or 'US').
Full names are recommended for better readability in tooltips.`,displayName:"GeoData",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/geo-chart/stories/config.tsx#GeoData"]={docgenInfo:GeoData.__docgenInfo,name:"GeoData",path:"../charts/src/charts/geo-chart/stories/config.tsx#GeoData"})}catch{}}),"../charts/src/charts/geo-chart/stories/index.docs.mdx":((m,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>c});var l=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),h=t("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),o=t("../../../node_modules/.pnpm/@storybook+addon-docs@10.1.10_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@te_0dab3ad5060a2aa8d937367f454f05ee/node_modules/@storybook/addon-docs/dist/blocks.js"),r=t("../charts/src/charts/geo-chart/stories/index.stories.tsx");function i(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,h.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.W8,{title:"JS Packages/Charts/Types/Geo Chart",of:r}),`
`,(0,e.jsx)(s.h1,{id:"geo-chart",children:"Geo Chart"}),`
`,(0,e.jsx)(s.p,{children:"Geo Charts visualize geographical data on an interactive world map, making it easy to understand the distribution of values across countries."}),`
`,(0,e.jsx)(o.Hl,{of:r.Default}),`
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
`,(0,e.jsxs)(s.p,{children:["The simplest geo chart requires data, width, and height. The ",(0,e.jsx)(s.code,{children:"data"})," prop uses Google Charts format - an array where the first row contains column headers and subsequent rows contain data. Countries can be identified by full name or ISO 3166-1 alpha-2 codes (full names are recommended):"]}),`
`,(0,e.jsx)(o.Hl,{of:r.Default}),`
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
`,(0,e.jsx)(s.h3,{id:"required-props",children:"Required Props"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"data"})}),": Array in Google Charts format - first row is headers, subsequent rows are data. Countries can be identified by full name (e.g., 'United States', 'Canada') or ISO 3166-1 alpha-2 codes (e.g., 'US', 'CA')"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"width"})}),": Width of the chart in pixels"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"height"})}),": Height of the chart in pixels"]}),`
`]}),`
`,(0,e.jsx)(s.h3,{id:"optional-props",children:"Optional Props"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"className"})}),": Additional CSS class name for custom styling"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"renderPlaceholder"})}),": Custom render function for the loading placeholder"]}),`
`]}),`
`,(0,e.jsxs)(s.p,{children:["For detailed prop information and type definitions, see the ",(0,e.jsx)(s.a,{href:"./?path=/docs/js-packages-charts-library-charts-geo-chart-api-reference--docs",children:"Geo Chart API Reference"}),"."]}),`
`,(0,e.jsx)(s.h2,{id:"advanced-features",children:"Advanced Features"}),`
`,(0,e.jsx)(s.p,{children:"The Geo Chart supports the full Google Charts data format, enabling powerful customization options:"}),`
`,(0,e.jsx)(s.h3,{id:"custom-tooltips",children:"Custom Tooltips"}),`
`,(0,e.jsxs)(s.p,{children:["You can customize tooltip content using column roles. Add a tooltip column to your data with ",(0,e.jsx)(s.code,{children:"{ type: 'string', role: 'tooltip' }"}),":"]}),`
`,(0,e.jsx)(o.Hl,{of:r.WithTextTooltips}),`
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
`,(0,e.jsx)(s.h3,{id:"html-tooltips",children:"HTML Tooltips"}),`
`,(0,e.jsxs)(s.p,{children:["For rich tooltip content with HTML formatting, add ",(0,e.jsx)(s.code,{children:"p: { html: true }"})," to the tooltip column:"]}),`
`,(0,e.jsx)(o.Hl,{of:r.WithCustomTooltip}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`<GeoChart
	data={ [
		['Country', 'Value', { type: 'string', role: 'tooltip', p: { html: true } }],
		['United States', 1000, '<b>United States</b><br/>1,000 orders'],
		['Canada', 500, '<b>Canada</b><br/>500 orders'],
	] }
	width={ 800 }
	height={ 500 }
/>`}),`
`,(0,e.jsx)(s.h4,{id:"security-considerations",children:"Security Considerations"}),`
`,(0,e.jsxs)(s.p,{children:["When using HTML tooltips via ",(0,e.jsx)(s.code,{children:"p: { html: true }"}),", any HTML in the tooltip content will be rendered by the browser. If tooltip strings come from user-generated input or external data sources, you ",(0,e.jsx)(s.strong,{children:"must"})," sanitize them first to prevent cross-site scripting (XSS) attacks."]}),`
`,(0,e.jsx)(s.h3,{id:"formatted-values",children:"Formatted Values"}),`
`,(0,e.jsxs)(s.p,{children:["Separate the display format from the actual value using cell objects with ",(0,e.jsx)(s.code,{children:"v"})," (value) and ",(0,e.jsx)(s.code,{children:"f"})," (formatted) properties:"]}),`
`,(0,e.jsx)(o.Hl,{of:r.WithFormattedValues}),`
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
`,(0,e.jsx)(s.p,{children:"This ensures proper data scaling while displaying user-friendly labels."}),`
`,(0,e.jsx)(s.h3,{id:"complex-html-tooltips",children:"Complex HTML Tooltips"}),`
`,(0,e.jsx)(s.p,{children:"Combine HTML tooltips with custom styling for rich, interactive experiences:"}),`
`,(0,e.jsx)(o.Hl,{of:r.WithComplexTooltips}),`
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
`,(0,e.jsx)(s.h2,{id:"interactive-features",children:"Interactive Features"}),`
`,(0,e.jsx)(s.h3,{id:"hover-tooltips",children:"Hover Tooltips"}),`
`,(0,e.jsx)(s.p,{children:"The Geo Chart includes built-in interactive tooltips powered by Google Charts that display on hover. By default, tooltips show:"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsx)(s.li,{children:"Country name"}),`
`,(0,e.jsx)(s.li,{children:"Value for that country"}),`
`]}),`
`,(0,e.jsx)(s.p,{children:"You can customize tooltips using the tooltip column role (see Advanced Features above)."}),`
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
`,(0,e.jsx)(s.h2,{id:"country-identification",children:"Country Identification"}),`
`,(0,e.jsx)(s.p,{children:"The Geo Chart accepts countries in two formats:"}),`
`,(0,e.jsx)(s.h3,{id:"full-country-names-recommended",children:"Full Country Names (Recommended)"}),`
`,(0,e.jsx)(s.p,{children:"Use full country names for better readability:"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"United States"}),", ",(0,e.jsx)(s.strong,{children:"Canada"}),", ",(0,e.jsx)(s.strong,{children:"United Kingdom"})]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Germany"}),", ",(0,e.jsx)(s.strong,{children:"France"}),", ",(0,e.jsx)(s.strong,{children:"Japan"})]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Australia"}),", ",(0,e.jsx)(s.strong,{children:"Brazil"}),", ",(0,e.jsx)(s.strong,{children:"India"})]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"China"}),", ",(0,e.jsx)(s.strong,{children:"Mexico"}),", ",(0,e.jsx)(s.strong,{children:"Spain"})]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Italy"}),", ",(0,e.jsx)(s.strong,{children:"Netherlands"}),", ",(0,e.jsx)(s.strong,{children:"Sweden"})]}),`
`]}),`
`,(0,e.jsx)(s.h3,{id:"iso-3166-1-alpha-2-codes",children:"ISO 3166-1 Alpha-2 Codes"}),`
`,(0,e.jsx)(s.p,{children:"Alternatively, you can use two-letter ISO country codes:"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"US"}),", ",(0,e.jsx)(s.strong,{children:"CA"}),", ",(0,e.jsx)(s.strong,{children:"GB"}),", ",(0,e.jsx)(s.strong,{children:"DE"}),", ",(0,e.jsx)(s.strong,{children:"FR"})]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"JP"}),", ",(0,e.jsx)(s.strong,{children:"AU"}),", ",(0,e.jsx)(s.strong,{children:"BR"}),", ",(0,e.jsx)(s.strong,{children:"IN"}),", ",(0,e.jsx)(s.strong,{children:"CN"})]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"MX"}),", ",(0,e.jsx)(s.strong,{children:"ES"}),", ",(0,e.jsx)(s.strong,{children:"IT"}),", ",(0,e.jsx)(s.strong,{children:"NL"}),", ",(0,e.jsx)(s.strong,{children:"SE"})]}),`
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
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Use full country names"}),": Recommended for better readability (e.g., 'United States' instead of 'US')"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"ISO codes supported"}),": Two-letter ISO 3166-1 alpha-2 codes also work if needed"]}),`
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
`]})]})}function c(n={}){const{wrapper:s}={...(0,h.R)(),...n.components};return s?(0,e.jsx)(s,{...n,children:(0,e.jsx)(i,{...n})}):i(n)}}),"../charts/src/charts/geo-chart/stories/index.stories.tsx":((m,a,t)=>{"use strict";t.r(a),t.d(a,{Default:()=>r,EmptyData:()=>c,EuropeanCountries:()=>s,SingleCountry:()=>i,USStates:()=>n,__namedExportsOrder:()=>d,default:()=>o});var l=t("../charts/src/stories/sample-data/index.ts"),e=t("../charts/src/charts/geo-chart/stories/config.tsx");const o={...e.s,title:"JS Packages/Charts Library/Charts/Geo Chart"},r={args:{...e._}},i={args:{...e._,data:[["Country","Views"],["United States",1500]]}},c={args:{...e._,data:[["Country","Views"]]}},n={args:{...e._,region:"US",resolution:"provinces",data:l.fP}},s={args:{...e._,region:"150",resolution:"countries",data:l.F_}},d=["Default","SingleCountry","EmptyData","USStates","EuropeanCountries"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs
  }
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    data: [['Country', 'Views'], ['United States', 1500]]
  }
}`,...i.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    data: [['Country', 'Views']]
  }
}`,...c.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    region: 'US',
    resolution: 'provinces',
    data: viewsByUSState
  }
}`,...n.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    region: '150',
    resolution: 'countries',
    data: viewsByEuropeanCountry
  }
}`,...s.parameters?.docs?.source}}}}),"../charts/src/charts/private/with-responsive/with-responsive.tsx":((m,a,t)=>{"use strict";t.d(a,{F:()=>o});var l=t("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=({resizeDebounceTime:r=300,maxWidth:i=1200,aspectRatio:c=.5})=>{const{parentRef:n,width:s}=(0,l.A)({debounceTime:r,enableDebounceLeadingCall:!0}),d=s>0?Math.min(s,i):0,g=d*c;return{parentRef:n,width:d,height:g}};function o(r){return function({resizeDebounceTime:c=300,maxWidth:n=1200,aspectRatio:s=.5,...d}){const{parentRef:g,width:_,height:j}=h({resizeDebounceTime:c,maxWidth:n,aspectRatio:s});return(0,e.jsx)("div",{ref:g,style:{width:d.size??d.width??"100%",height:d.size??d.height??"auto"},children:(0,e.jsx)(r,{width:_,height:j,size:_,...d})})}}try{o.displayName="withResponsive",o.__docgenInfo={description:"A higher-order component that provides responsive dimensions\nto the wrapped chart component using useParentSize from `@visx/responsive`.",displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/with-responsive/with-responsive.tsx#withResponsive"]={docgenInfo:o.__docgenInfo,name:"withResponsive",path:"../charts/src/charts/private/with-responsive/with-responsive.tsx#withResponsive"})}catch{}})}]);
