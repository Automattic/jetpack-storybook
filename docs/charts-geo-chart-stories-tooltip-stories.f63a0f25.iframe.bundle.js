"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3589],{"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/geo-chart/geo-chart.module.scss":((_,i,e)=>{e.d(i,{A:()=>s});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(r),n=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),o=e.n(n),t=o()(d());t.push([_.id,".lAFi7oOf7oa6dhX2GP1E{position:relative;display:flex;justify-content:center;align-items:center}",""]),t.locals={container:"lAFi7oOf7oa6dhX2GP1E"};const s=t}),"../charts/src/charts/geo-chart/geo-chart.tsx":((_,i,e)=>{e.d(i,{A:()=>M});var r=e("../../../node_modules/.pnpm/@wordpress+i18n@6.12.0/node_modules/@wordpress/i18n/build-module/index.mjs"),d=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react-google-charts@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-google-charts/dist/index.js"),t=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),s=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),a=e("../charts/src/utils/color-utils.ts"),u=e("../charts/src/utils/resolve-css-var.ts"),m=e("../charts/src/charts/private/with-responsive/with-responsive.tsx"),l=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(l),f=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/geo-chart/geo-chart.module.scss"),v={};v.insert="head",v.singleton=!1;var W=g()(f.A,v);const R=f.A.locals||{};var h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const K=r.__,I="#ffffff",P="#ffffff",D=({className:p,data:y,width:C,height:S,region:x="world",resolution:O="countries",renderPlaceholder:A})=>{const{getElementStyles:L,theme:{geoChart:{featureFillColor:F},backgroundColor:T}}=(0,t.j)(),V=(0,h.jsx)("div",{className:(0,d.A)("geo-chart",R.container,p),"data-testid":"geo-chart-loading",style:{width:C,height:S},children:A?A():K("Loading map","jetpack-charts")}),b=L({index:0}).color,j=(0,a.iK)(b,.8),w=(0,a.HU)(T,null,u.q)||P,E=(0,a.HU)(F,null,u.q)||I,G=(0,n.useMemo)(()=>y.length>0&&y[0].some(c=>typeof c=="object"&&c!==null&&"role"in c&&c.role==="tooltip"&&"p"in c&&typeof c.p=="object"&&c.p!==null&&"html"in c.p&&c.p.html===!0),[y]),B=(0,n.useMemo)(()=>({...x!=="world"&&{region:x},...O!=="countries"&&{resolution:O},colorAxis:{colors:[j,b]},backgroundColor:w,datalessRegionColor:E,defaultColor:E,tooltip:{trigger:"focus",isHtml:G},legend:"none",keepAspectRatio:!0}),[x,O,j,b,w,E,G]);return(0,h.jsx)("div",{className:(0,d.A)("geo-chart",R.container,p),"data-testid":"geo-chart",style:{width:C,height:S,backgroundColor:T},children:(0,h.jsx)(o.t1,{chartType:"GeoChart",width:C,height:S,data:y,options:B,loader:V})})},U=p=>(0,n.useContext)(s.m)?(0,h.jsx)(D,{...p}):(0,h.jsx)(s.S,{children:(0,h.jsx)(D,{...p})});U.displayName="GeoChart";const M=(0,m.F)(U);try{ResponsiveChart.displayName="ResponsiveChart",ResponsiveChart.__docgenInfo={description:"",displayName:"ResponsiveChart",props:{width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"unknown"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},region:{defaultValue:{value:"'world'"},description:`Region to display. Use 'world' for global view, 'US' for United States,
or any ISO 3166-1 alpha-2 country code.`,name:"region",required:!1,type:{name:"GeoRegion"}},data:{defaultValue:null,description:`Data in Google Charts native format for maximum flexibility.
First row contains column headers, subsequent rows contain data.

Country identifiers can be either full country names or ISO 3166-1 alpha-2 codes
(e.g., 'United States' or 'US').`,name:"data",required:!0,type:{name:"GeoData"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},resolution:{defaultValue:{value:"'countries'"},description:`Resolution level for the map.
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
Called while Google Charts is loading.`,name:"renderPlaceholder",required:!1,type:{name:"() => ReactNode"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/geo-chart/geo-chart.tsx#GeoChart"]={docgenInfo:GeoChart.__docgenInfo,name:"GeoChart",path:"../charts/src/charts/geo-chart/geo-chart.tsx#GeoChart"})}catch{}}),"../charts/src/charts/geo-chart/stories/config.tsx":((_,i,e)=>{e.d(i,{_:()=>s,s:()=>t});var r=e("../charts/src/stories/chart-decorator.tsx"),d=e("../charts/src/stories/theme-config.tsx"),n=e("../charts/src/stories/sample-data/index.ts"),o=e("../charts/src/charts/geo-chart/geo-chart.tsx");const t={title:"JS Packages/Charts Library/Charts/Geo Chart",component:o.A,parameters:{layout:"centered"},decorators:[r.OI],argTypes:{...r.xo,...d.jW}},s={data:n.M8,withPadding:!1,height:500};try{GeoData.displayName="GeoData",GeoData.__docgenInfo={description:`Data format for GeoChart - uses Google Charts native data format for maximum flexibility.
First element is the header row, subsequent elements are data rows.

Country identifiers can be either full country names or ISO 3166-1 alpha-2 codes (e.g., 'United States' or 'US').
Full names are recommended for better readability in tooltips.`,displayName:"GeoData",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/geo-chart/stories/config.tsx#GeoData"]={docgenInfo:GeoData.__docgenInfo,name:"GeoData",path:"../charts/src/charts/geo-chart/stories/config.tsx#GeoData"})}catch{}}),"../charts/src/charts/geo-chart/stories/tooltip.stories.tsx":((_,i,e)=>{e.r(i),e.d(i,{Complex:()=>a,FormattedValues:()=>t,HTML:()=>o,PlainText:()=>s,__namedExportsOrder:()=>u,default:()=>n});var r=e("../charts/src/charts/geo-chart/stories/config.tsx");const n={...r.s,title:"JS Packages/Charts Library/Charts/Geo Chart/Tooltips"},o={args:{...r._,data:[["Country","Orders",{type:"string",role:"tooltip",p:{html:!0}}],["United States",1e3,"<b>United States</b><br/>1,000 orders"],["Canada",500,"<b>Canada</b><br/>500 orders"],["United Kingdom",450,"<b>United Kingdom</b><br/>450 orders"],["Germany",400,"<b>Germany</b><br/>400 orders"]]}},t={args:{...r._,data:[["Country","Revenue"],["United States",{v:1234567,f:"$1.23M"}],["Canada",{v:543210,f:"$543K"}],["United Kingdom",{v:789012,f:"$789K"}],["Germany",{v:456789,f:"$457K"}],["France",{v:321098,f:"$321K"}]]}},s={args:{...r._,data:[["Country","Orders",{type:"string",role:"tooltip"}],["United States",1e3,"United States: 1,000 orders (40% of total)"],["Canada",500,"Canada: 500 orders (20% of total)"],["United Kingdom",450,"United Kingdom: 450 orders (18% of total)"],["Germany",400,"Germany: 400 orders (16% of total)"],["France",150,"France: 150 orders (6% of total)"]]}},a={args:{...r._,data:[["Country","Orders",{type:"string",role:"tooltip",p:{html:!0}}],["United States",1e3,`<div style="padding: 12px; font-family: sans-serif;">
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
                </div>`]]}},u=["HTML","FormattedValues","PlainText","Complex"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    data: [['Country', 'Orders', {
      type: 'string',
      role: 'tooltip'
    }], ['United States', 1000, 'United States: 1,000 orders (40% of total)'], ['Canada', 500, 'Canada: 500 orders (20% of total)'], ['United Kingdom', 450, 'United Kingdom: 450 orders (18% of total)'], ['Germany', 400, 'Germany: 400 orders (16% of total)'], ['France', 150, 'France: 150 orders (6% of total)']]
  }
}`,...s.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}}}),"../charts/src/charts/private/with-responsive/with-responsive.tsx":((_,i,e)=>{e.d(i,{F:()=>o});var r=e("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=({resizeDebounceTime:t=300,maxWidth:s=1200,aspectRatio:a=.5})=>{const{parentRef:u,width:m}=(0,r.A)({debounceTime:t,enableDebounceLeadingCall:!0}),l=m>0?Math.min(m,s):0,g=l*a;return{parentRef:u,width:l,height:g}};function o(t){return function({resizeDebounceTime:a=300,maxWidth:u=1200,aspectRatio:m=.5,...l}){const{parentRef:g,width:f,height:v}=n({resizeDebounceTime:a,maxWidth:u,aspectRatio:m});return(0,d.jsx)("div",{ref:g,style:{width:l.size??l.width??"100%",height:l.size??l.height??"auto"},children:(0,d.jsx)(t,{width:f,height:v,size:f,...l})})}}try{o.displayName="withResponsive",o.__docgenInfo={description:"A higher-order component that provides responsive dimensions\nto the wrapped chart component using useParentSize from `@visx/responsive`.",displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/with-responsive/with-responsive.tsx#withResponsive"]={docgenInfo:o.__docgenInfo,name:"withResponsive",path:"../charts/src/charts/private/with-responsive/with-responsive.tsx#withResponsive"})}catch{}})}]);
