"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3589],{"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/geo-chart/geo-chart.module.scss":((_,d,e)=>{e.d(d,{A:()=>s});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(r),u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),o=e.n(u),t=o()(c());t.push([_.id,".lAFi7oOf7oa6dhX2GP1E{position:relative;display:flex;justify-content:center;align-items:center}",""]),t.locals={container:"lAFi7oOf7oa6dhX2GP1E"};const s=t}),"../charts/src/charts/geo-chart/stories/config.tsx":((_,d,e)=>{e.d(d,{s:()=>B,_:()=>W});var r=e("../charts/src/stories/chart-decorator.tsx"),c=e("../charts/src/stories/theme-config.tsx"),u=e("../charts/src/stories/sample-data/index.ts"),o=e("../../../node_modules/.pnpm/@wordpress+i18n@6.10.0_patch_hash=0c63a888feb97f2f1d416ca013ad85c31b6360b41cc0b6e2b0ae28f778fbdc5b/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/react-google-charts@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-google-charts/dist/index.js"),p=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),m=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),a=e("../charts/src/utils/color-utils.ts"),h=e("../charts/src/utils/resolve-css-var.ts"),v=e("../charts/src/charts/private/with-responsive/with-responsive.tsx"),y=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),L=e.n(y),E=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/geo-chart/geo-chart.module.scss"),C={};C.insert="head",C.singleton=!1;var $=L()(E.A,C);const D=E.A.locals||{};var f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const P=o.__,M="#ffffff",F="#ffffff",A=({className:l,data:g,width:S,height:x,region:b="world",resolution:O="countries",renderPlaceholder:j})=>{const{getElementStyles:z,theme:{geoChart:{featureFillColor:N},backgroundColor:w}}=(0,p.j)(),H=(0,f.jsx)("div",{className:(0,t.A)("geo-chart",D.container,l),"data-testid":"geo-chart-loading",style:{width:S,height:x},children:j?j():P("Loading map","jetpack-charts")}),R=z({index:0}).color,G=(0,a.iK)(R,.8),K=(0,a.HU)(w,null,h.q)||F,U=(0,a.HU)(N,null,h.q)||M,I=(0,s.useMemo)(()=>g.length>0&&g[0].some(i=>typeof i=="object"&&i!==null&&"role"in i&&i.role==="tooltip"&&"p"in i&&typeof i.p=="object"&&i.p!==null&&"html"in i.p&&i.p.html===!0),[g]),k=(0,s.useMemo)(()=>({...b!=="world"&&{region:b},...O!=="countries"&&{resolution:O},colorAxis:{colors:[G,R]},backgroundColor:K,datalessRegionColor:U,defaultColor:U,tooltip:{trigger:"focus",isHtml:I},legend:"none",keepAspectRatio:!0}),[b,O,G,R,K,U,I]);return(0,f.jsx)("div",{className:(0,t.A)("geo-chart",D.container,l),"data-testid":"geo-chart",style:{width:S,height:x,backgroundColor:w},children:(0,f.jsx)(n.t1,{chartType:"GeoChart",width:S,height:x,data:g,options:k,loader:H})})},T=l=>(0,s.useContext)(m.m)?(0,f.jsx)(A,{...l}):(0,f.jsx)(m.S,{children:(0,f.jsx)(A,{...l})});T.displayName="GeoChart";const V=(0,v.F)(T);try{ResponsiveChart.displayName="ResponsiveChart",ResponsiveChart.__docgenInfo={description:"",displayName:"ResponsiveChart",props:{width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"unknown"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},region:{defaultValue:{value:"'world'"},description:`Region to display. Use 'world' for global view, 'US' for United States,
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
Called while Google Charts is loading.`,name:"renderPlaceholder",required:!1,type:{name:"() => ReactNode"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/geo-chart/geo-chart.tsx#GeoChart"]={docgenInfo:GeoChart.__docgenInfo,name:"GeoChart",path:"../charts/src/charts/geo-chart/geo-chart.tsx#GeoChart"})}catch{}const B={title:"JS Packages/Charts Library/Charts/Geo Chart",component:V,parameters:{layout:"centered"},decorators:[r.OI],argTypes:{...r.xo,...c.jW}},W={data:u.M8,withPadding:!1,height:500};try{GeoData.displayName="GeoData",GeoData.__docgenInfo={description:`Data format for GeoChart - uses Google Charts native data format for maximum flexibility.
First element is the header row, subsequent elements are data rows.

Country identifiers can be either full country names or ISO 3166-1 alpha-2 codes (e.g., 'United States' or 'US').
Full names are recommended for better readability in tooltips.`,displayName:"GeoData",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/geo-chart/stories/config.tsx#GeoData"]={docgenInfo:GeoData.__docgenInfo,name:"GeoData",path:"../charts/src/charts/geo-chart/stories/config.tsx#GeoData"})}catch{}}),"../charts/src/charts/geo-chart/stories/tooltip.stories.tsx":((_,d,e)=>{e.r(d),e.d(d,{Complex:()=>n,FormattedValues:()=>t,HTML:()=>o,PlainText:()=>s,__namedExportsOrder:()=>p,default:()=>u});var r=e("../charts/src/charts/geo-chart/stories/config.tsx");const u={...r.s,title:"JS Packages/Charts Library/Charts/Geo Chart/Tooltips"},o={args:{...r._,data:[["Country","Orders",{type:"string",role:"tooltip",p:{html:!0}}],["United States",1e3,"<b>United States</b><br/>1,000 orders"],["Canada",500,"<b>Canada</b><br/>500 orders"],["United Kingdom",450,"<b>United Kingdom</b><br/>450 orders"],["Germany",400,"<b>Germany</b><br/>400 orders"]]}},t={args:{...r._,data:[["Country","Revenue"],["United States",{v:1234567,f:"$1.23M"}],["Canada",{v:543210,f:"$543K"}],["United Kingdom",{v:789012,f:"$789K"}],["Germany",{v:456789,f:"$457K"}],["France",{v:321098,f:"$321K"}]]}},s={args:{...r._,data:[["Country","Orders",{type:"string",role:"tooltip"}],["United States",1e3,"United States: 1,000 orders (40% of total)"],["Canada",500,"Canada: 500 orders (20% of total)"],["United Kingdom",450,"United Kingdom: 450 orders (18% of total)"],["Germany",400,"Germany: 400 orders (16% of total)"],["France",150,"France: 150 orders (6% of total)"]]}},n={args:{...r._,data:[["Country","Orders",{type:"string",role:"tooltip",p:{html:!0}}],["United States",1e3,`<div style="padding: 12px; font-family: sans-serif;">
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
                </div>`]]}},p=["HTML","FormattedValues","PlainText","Complex"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}}}),"../charts/src/charts/private/with-responsive/with-responsive.tsx":((_,d,e)=>{e.d(d,{F:()=>o});var r=e("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u=({resizeDebounceTime:t=300,maxWidth:s=1200,aspectRatio:n=.5})=>{const{parentRef:p,width:m}=(0,r.A)({debounceTime:t,enableDebounceLeadingCall:!0}),a=m>0?Math.min(m,s):0,h=a*n;return{parentRef:p,width:a,height:h}};function o(t){return function({resizeDebounceTime:n=300,maxWidth:p=1200,aspectRatio:m=.5,...a}){const{parentRef:h,width:v,height:y}=u({resizeDebounceTime:n,maxWidth:p,aspectRatio:m});return(0,c.jsx)("div",{ref:h,style:{width:a.size??a.width??"100%",height:a.size??a.height??"auto"},children:(0,c.jsx)(t,{width:v,height:y,size:v,...a})})}}try{o.displayName="withResponsive",o.__docgenInfo={description:"A higher-order component that provides responsive dimensions\nto the wrapped chart component using useParentSize from `@visx/responsive`.",displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/with-responsive/with-responsive.tsx#withResponsive"]={docgenInfo:o.__docgenInfo,name:"withResponsive",path:"../charts/src/charts/private/with-responsive/with-responsive.tsx#withResponsive"})}catch{}})}]);
