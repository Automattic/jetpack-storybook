"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3589],{"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.104.1/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.104.1/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.104.1/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/geo-chart/geo-chart.module.scss"(_,d,e){e.d(d,{A:()=>r});var s=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.104.1/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(s),a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.104.1/node_modules/css-loader/dist/runtime/api.js"),o=e.n(a),t=o()(l());t.push([_.id,".lAFi7oOf7oa6dhX2GP1E{position:relative;display:flex;justify-content:center;align-items:center}",""]),t.locals={container:"lAFi7oOf7oa6dhX2GP1E"};const r=t},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.104.1/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.104.1/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.104.1/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/private/with-responsive/with-responsive.module.scss"(_,d,e){e.d(d,{A:()=>r});var s=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.104.1/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(s),a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.104.1/node_modules/css-loader/dist/runtime/api.js"),o=e.n(a),t=o()(l());t.push([_.id,".dAliwoUz2qgTlolGLhfq{min-width:0;min-height:0}",""]),t.locals={container:"dAliwoUz2qgTlolGLhfq"};const r=t},"../charts/src/charts/geo-chart/geo-chart.tsx"(_,d,e){e.d(d,{A:()=>D});var s=e("../../../node_modules/.pnpm/@wordpress+i18n@6.12.0/node_modules/@wordpress/i18n/build-module/index.mjs"),l=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react-google-charts@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-google-charts/dist/index.js"),t=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),r=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),i=e("../charts/src/utils/color-utils.ts"),h=e("../charts/src/utils/resolve-css-var.ts"),j=e("../charts/src/charts/private/with-responsive/with-responsive.tsx"),v=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.104.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=e.n(v),S=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.104.1/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.104.1/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.104.1/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/geo-chart/geo-chart.module.scss"),c={};c.insert="head",c.singleton=!1;var b=y()(S.A,c);const g=S.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f=s.__,C="#ffffff",A="#ffffff",E=({className:u,data:m,width:x,height:O,region:U="world",resolution:w="countries",renderPlaceholder:G})=>{const{getElementStyles:F,theme:{geoChart:{featureFillColor:W},backgroundColor:K}}=(0,t.j)(),B=(0,n.jsx)("div",{className:(0,l.A)("geo-chart",g.container,u),"data-testid":"geo-chart-loading",style:{width:x,height:O},children:G?G():f("Loading map","jetpack-charts")}),T=F({index:0}).color,M=(0,i.iK)(T,.8),I=(0,i.HU)(K,null,h.q)||A,P=(0,i.HU)(W,null,h.q)||C,L=(0,a.useMemo)(()=>m.length>0&&m[0].some(p=>typeof p=="object"&&p!==null&&"role"in p&&p.role==="tooltip"&&"p"in p&&typeof p.p=="object"&&p.p!==null&&"html"in p.p&&p.p.html===!0),[m]),V=(0,a.useMemo)(()=>({...U!=="world"&&{region:U},...w!=="countries"&&{resolution:w},colorAxis:{colors:[M,T]},backgroundColor:I,datalessRegionColor:P,defaultColor:P,tooltip:{trigger:"focus",isHtml:L},legend:"none",keepAspectRatio:!0}),[U,w,M,T,I,P,L]);return(0,n.jsx)("div",{className:(0,l.A)("geo-chart",g.container,u),"data-testid":"geo-chart",style:{width:x,height:O,backgroundColor:K},children:(0,n.jsx)(o.t1,{chartType:"GeoChart",width:x,height:O,data:m,options:V,loader:B})})},R=u=>(0,a.useContext)(r.m)?(0,n.jsx)(E,{...u}):(0,n.jsx)(r.S,{children:(0,n.jsx)(E,{...u})});R.displayName="GeoChart";const D=(0,j.F)(R);try{ResponsiveChart.displayName="ResponsiveChart",ResponsiveChart.__docgenInfo={description:"",displayName:"ResponsiveChart",props:{className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:`Data in Google Charts native format for maximum flexibility.
First row contains column headers, subsequent rows contain data.

Country identifiers can be either full country names or ISO 3166-1 alpha-2 codes
(e.g., 'United States' or 'US').`,name:"data",required:!0,type:{name:"GeoData"}},region:{defaultValue:{value:"'world'"},description:`Region to display. Use 'world' for global view, 'US' for United States,
or any ISO 3166-1 alpha-2 country code.`,name:"region",required:!1,type:{name:"GeoRegion"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},resolution:{defaultValue:{value:"'countries'"},description:`Resolution level for the map.
- 'countries': Country-level (default for 'world')
- 'provinces': State/province level (use with specific region like 'US')
- 'metros': Metropolitan areas (US only)`,name:"resolution",required:!1,type:{name:"enum",value:[{value:'"countries"'},{value:'"provinces"'},{value:'"metros"'}]}},renderPlaceholder:{defaultValue:null,description:`Optional render function for the loading placeholder.
Called while Google Charts is loading.`,name:"renderPlaceholder",required:!1,type:{name:"() => ReactNode"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},maxWidth:{defaultValue:{value:"1200"},description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:`The aspect ratio of the chart (height = width * aspectRatio).
When provided, height is calculated from width.
When omitted, the chart fills the parent container's height.`,name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:{value:"300"},description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/geo-chart/geo-chart.tsx#ResponsiveChart"]={docgenInfo:ResponsiveChart.__docgenInfo,name:"ResponsiveChart",path:"../charts/src/charts/geo-chart/geo-chart.tsx#ResponsiveChart"})}catch{}try{GeoChart.displayName="GeoChart",GeoChart.__docgenInfo={description:"",displayName:"GeoChart",props:{data:{defaultValue:null,description:`Data in Google Charts native format for maximum flexibility.
First row contains column headers, subsequent rows contain data.

Country identifiers can be either full country names or ISO 3166-1 alpha-2 codes
(e.g., 'United States' or 'US').`,name:"data",required:!0,type:{name:"GeoData"}},region:{defaultValue:{value:"world"},description:`Region to display. Use 'world' for global view, 'US' for United States,
or any ISO 3166-1 alpha-2 country code.`,name:"region",required:!1,type:{name:"GeoRegion"}},resolution:{defaultValue:{value:"countries"},description:`Resolution level for the map.
- 'countries': Country-level (default for 'world')
- 'provinces': State/province level (use with specific region like 'US')
- 'metros': Metropolitan areas (US only)`,name:"resolution",required:!1,type:{name:"enum",value:[{value:'"countries"'},{value:'"provinces"'},{value:'"metros"'}]}},renderPlaceholder:{defaultValue:null,description:`Optional render function for the loading placeholder.
Called while Google Charts is loading.`,name:"renderPlaceholder",required:!1,type:{name:"() => ReactNode"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/geo-chart/geo-chart.tsx#GeoChart"]={docgenInfo:GeoChart.__docgenInfo,name:"GeoChart",path:"../charts/src/charts/geo-chart/geo-chart.tsx#GeoChart"})}catch{}},"../charts/src/charts/geo-chart/stories/config.tsx"(_,d,e){e.d(d,{_:()=>r,s:()=>t});var s=e("../charts/src/stories/chart-decorator.tsx"),l=e("../charts/src/stories/theme-config.tsx"),a=e("../charts/src/stories/sample-data/index.ts"),o=e("../charts/src/charts/geo-chart/geo-chart.tsx");const t={title:"JS Packages/Charts Library/Charts/Geo Chart",component:o.A,parameters:{layout:"centered"},decorators:[s.OI],argTypes:{...s.xo,...l.jW}},r={data:a.M8,withPadding:!1};try{GeoData.displayName="GeoData",GeoData.__docgenInfo={description:`Data format for GeoChart - uses Google Charts native data format for maximum flexibility.
First element is the header row, subsequent elements are data rows.

Country identifiers can be either full country names or ISO 3166-1 alpha-2 codes (e.g., 'United States' or 'US').
Full names are recommended for better readability in tooltips.`,displayName:"GeoData",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/geo-chart/stories/config.tsx#GeoData"]={docgenInfo:GeoData.__docgenInfo,name:"GeoData",path:"../charts/src/charts/geo-chart/stories/config.tsx#GeoData"})}catch{}},"../charts/src/charts/geo-chart/stories/tooltip.stories.tsx"(_,d,e){e.r(d),e.d(d,{Complex:()=>i,FormattedValues:()=>t,HTML:()=>o,PlainText:()=>r,__namedExportsOrder:()=>h,default:()=>a});var s=e("../charts/src/charts/geo-chart/stories/config.tsx");const a={...s.s,title:"JS Packages/Charts Library/Charts/Geo Chart/Tooltips"},o={args:{...s._,data:[["Country","Orders",{type:"string",role:"tooltip",p:{html:!0}}],["United States",1e3,"<b>United States</b><br/>1,000 orders"],["Canada",500,"<b>Canada</b><br/>500 orders"],["United Kingdom",450,"<b>United Kingdom</b><br/>450 orders"],["Germany",400,"<b>Germany</b><br/>400 orders"]]}},t={args:{...s._,data:[["Country","Revenue"],["United States",{v:1234567,f:"$1.23M"}],["Canada",{v:543210,f:"$543K"}],["United Kingdom",{v:789012,f:"$789K"}],["Germany",{v:456789,f:"$457K"}],["France",{v:321098,f:"$321K"}]]}},r={args:{...s._,data:[["Country","Orders",{type:"string",role:"tooltip"}],["United States",1e3,"United States: 1,000 orders (40% of total)"],["Canada",500,"Canada: 500 orders (20% of total)"],["United Kingdom",450,"United Kingdom: 450 orders (18% of total)"],["Germany",400,"Germany: 400 orders (16% of total)"],["France",150,"France: 150 orders (6% of total)"]]}},i={args:{...s._,data:[["Country","Orders",{type:"string",role:"tooltip",p:{html:!0}}],["United States",1e3,`<div style="padding: 12px; font-family: sans-serif;">
                    <div style="font-weight: bold; font-size: 14px; margin-bottom: 8px;">\u{1F1FA}\u{1F1F8} United States</div>
                    <div style="color: #666;">Orders: <strong>1,000</strong></div>
                    <div style="color: #666;">Share: <strong>40%</strong></div>
                </div>`],["Canada",500,`<div style="padding: 12px; font-family: sans-serif;">
                    <div style="font-weight: bold; font-size: 14px; margin-bottom: 8px;">\u{1F1E8}\u{1F1E6} Canada</div>
                    <div style="color: #666;">Orders: <strong>500</strong></div>
                    <div style="color: #666;">Share: <strong>20%</strong></div>
                </div>`],["United Kingdom",450,`<div style="padding: 12px; font-family: sans-serif;">
                    <div style="font-weight: bold; font-size: 14px; margin-bottom: 8px;">\u{1F1EC}\u{1F1E7} United Kingdom</div>
                    <div style="color: #666;">Orders: <strong>450</strong></div>
                    <div style="color: #666;">Share: <strong>18%</strong></div>
                </div>`]]}},h=["HTML","FormattedValues","PlainText","Complex"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    data: [['Country', 'Orders', {
      type: 'string',
      role: 'tooltip',
      p: {
        html: true
      }
    }], ['United States', 1000, '<b>United States</b><br/>1,000 orders'], ['Canada', 500, '<b>Canada</b><br/>500 orders'], ['United Kingdom', 450, '<b>United Kingdom</b><br/>450 orders'], ['Germany', 400, '<b>Germany</b><br/>400 orders']]
  }
}`,...o.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    }], ['Germany', {
      v: 456789,
      f: '$457K'
    }], ['France', {
      v: 321098,
      f: '$321K'
    }]]
  }
}`,...t.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    data: [['Country', 'Orders', {
      type: 'string',
      role: 'tooltip'
    }], ['United States', 1000, 'United States: 1,000 orders (40% of total)'], ['Canada', 500, 'Canada: 500 orders (20% of total)'], ['United Kingdom', 450, 'United Kingdom: 450 orders (18% of total)'], ['Germany', 400, 'Germany: 400 orders (16% of total)'], ['France', 150, 'France: 150 orders (6% of total)']]
  }
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
                </div>\`], ['Canada', 500, \`<div style="padding: 12px; font-family: sans-serif;">
                    <div style="font-weight: bold; font-size: 14px; margin-bottom: 8px;">\u{1F1E8}\u{1F1E6} Canada</div>
                    <div style="color: #666;">Orders: <strong>500</strong></div>
                    <div style="color: #666;">Share: <strong>20%</strong></div>
                </div>\`], ['United Kingdom', 450, \`<div style="padding: 12px; font-family: sans-serif;">
                    <div style="font-weight: bold; font-size: 14px; margin-bottom: 8px;">\u{1F1EC}\u{1F1E7} United Kingdom</div>
                    <div style="color: #666;">Orders: <strong>450</strong></div>
                    <div style="color: #666;">Share: <strong>18%</strong></div>
                </div>\`]]
  }
}`,...i.parameters?.docs?.source}}}},"../charts/src/charts/private/with-responsive/with-responsive.tsx"(_,d,e){e.d(d,{F:()=>v});var s=e("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),l=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.104.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(l),o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.104.1/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.104.1/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.104.1/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/private/with-responsive/with-responsive.module.scss"),t={};t.insert="head",t.singleton=!1;var r=a()(o.A,t);const i=o.A.locals||{};var h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=({resizeDebounceTime:y=300,maxWidth:S=1200,aspectRatio:c})=>{const{parentRef:b,width:g,height:n}=(0,s.A)({debounceTime:y,enableDebounceLeadingCall:!0}),f=g>0?Math.min(g,S):0,C=c!==void 0?f*c:n;return{parentRef:b,width:f,height:C,hasAspectRatio:c!==void 0}};function v(y){return function({resizeDebounceTime:c=300,maxWidth:b=1200,aspectRatio:g,size:n,width:f,height:C,...A}){const{parentRef:E,width:R,height:D,hasAspectRatio:u}=j({resizeDebounceTime:c,maxWidth:b,aspectRatio:g}),m=R||n||f||0,x=D||n||C||0,O=u?"auto":"100%";return(0,h.jsx)("div",{ref:E,"data-testid":"responsive-wrapper",className:i.container,style:{width:n??f??"100%",height:n??C??O},children:(0,h.jsx)(y,{width:m,height:x,size:m,...A})})}}try{v.displayName="withResponsive",v.__docgenInfo={description:"A higher-order component that provides responsive dimensions\nto the wrapped chart component using useParentSize from `@visx/responsive`.",displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/with-responsive/with-responsive.tsx#withResponsive"]={docgenInfo:v.__docgenInfo,name:"withResponsive",path:"../charts/src/charts/private/with-responsive/with-responsive.tsx#withResponsive"})}catch{}}}]);
