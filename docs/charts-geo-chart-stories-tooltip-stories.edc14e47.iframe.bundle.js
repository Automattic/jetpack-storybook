"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3589],{"../charts/src/charts/geo-chart/stories/tooltip.stories.tsx"(h,i,e){e.r(i),e.d(i,{Complex:()=>l,FormattedValues:()=>t,HTML:()=>o,PlainText:()=>r,__namedExportsOrder:()=>f,default:()=>d});var s=e("../charts/src/charts/geo-chart/stories/config.tsx");const d={...s.s,title:"JS Packages/Charts Library/Charts/Geo Chart/Tooltips"},o={args:{...s._,data:[["Country","Orders",{type:"string",role:"tooltip",p:{html:!0}}],["United States",1e3,"<b>United States</b><br/>1,000 orders"],["Canada",500,"<b>Canada</b><br/>500 orders"],["United Kingdom",450,"<b>United Kingdom</b><br/>450 orders"],["Germany",400,"<b>Germany</b><br/>400 orders"]]}},t={args:{...s._,data:[["Country","Revenue"],["United States",{v:1234567,f:"$1.23M"}],["Canada",{v:543210,f:"$543K"}],["United Kingdom",{v:789012,f:"$789K"}],["Germany",{v:456789,f:"$457K"}],["France",{v:321098,f:"$321K"}]]}},r={args:{...s._,data:[["Country","Orders",{type:"string",role:"tooltip"}],["United States",1e3,"United States: 1,000 orders (40% of total)"],["Canada",500,"Canada: 500 orders (20% of total)"],["United Kingdom",450,"United Kingdom: 450 orders (18% of total)"],["Germany",400,"Germany: 400 orders (16% of total)"],["France",150,"France: 150 orders (6% of total)"]]}},l={args:{...s._,data:[["Country","Orders",{type:"string",role:"tooltip",p:{html:!0}}],["United States",1e3,`<div style="padding: 12px; font-family: sans-serif;">
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
                </div>`]]}},f=["HTML","FormattedValues","PlainText","Complex"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}}},"../charts/src/charts/geo-chart/geo-chart.tsx"(h,i,e){e.d(i,{A:()=>T});var s=e("../../../node_modules/.pnpm/@wordpress+i18n@6.15.0/node_modules/@wordpress/i18n/build-module/index.mjs"),c=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react-google-charts@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-google-charts/dist/index.js"),t=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),r=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),l=e("../charts/src/utils/color-utils.ts"),f=e("../charts/src/utils/resolve-css-var.ts"),x=e("../../../node_modules/.pnpm/dompurify@3.3.3/node_modules/dompurify/dist/purify.es.mjs");x.A.addHook("afterSanitizeAttributes",a=>{a.tagName==="A"&&a.getAttribute("target")==="_blank"&&a.setAttribute("rel","noopener noreferrer")});function v(a){return x.A.sanitize(a,{ALLOWED_TAGS:["a","b","br","div","em","i","li","ol","p","small","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul"],ALLOWED_ATTR:["class","href","target","rel"]})}var y=e("../charts/src/charts/private/with-responsive/with-responsive.tsx"),b=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(b),C=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/geo-chart/geo-chart.module.scss"),m={};m.insert="head",m.singleton=!1;var O=g()(C.A,m);const _=C.A.locals||{};var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const R=s.__,D="#ffffff",j="#ffffff",E=({className:a,data:p,width:w,height:U,region:P="world",resolution:G="countries",renderPlaceholder:F})=>{const{getElementStyles:V,theme:{geoChart:{featureFillColor:N},backgroundColor:B}}=(0,t.j)(),k=(0,u.jsx)("div",{className:(0,c.A)("geo-chart",_.container,a),"data-testid":"geo-chart-loading",style:{width:w,height:U},children:F?F():R("Loading map","jetpack-charts")}),K=V({index:0}).color,z=(0,l.iK)(K,.8),H=(0,l.HU)(B,null,f.q)||j,I=(0,l.HU)(N,null,f.q)||D,L=(0,d.useMemo)(()=>{if(p.length===0)return{data:p,hasHtmlTooltips:!1};const M=[];for(let S=0;S<p[0].length;S++){const n=p[0][S];typeof n=="object"&&n!==null&&"role"in n&&n.role==="tooltip"&&"p"in n&&typeof n.p=="object"&&n.p!==null&&"html"in n.p&&n.p.html===!0&&M.push(S)}if(M.length===0)return{data:p,hasHtmlTooltips:!1};const Y=p.slice(1).map(S=>{const n=[...S];for(const W of M)typeof n[W]=="string"&&(n[W]=v(n[W]));return n});return{data:[p[0],...Y],hasHtmlTooltips:!0}},[p]),$=(0,d.useMemo)(()=>({...P!=="world"&&{region:P},...G!=="countries"&&{resolution:G},colorAxis:{colors:[z,K]},backgroundColor:H,datalessRegionColor:I,defaultColor:I,tooltip:{trigger:"focus",isHtml:L.hasHtmlTooltips},legend:"none",keepAspectRatio:!0}),[P,G,z,K,H,I,L.hasHtmlTooltips]);return(0,u.jsx)("div",{className:(0,c.A)("geo-chart",_.container,a),"data-testid":"geo-chart",style:{width:w,height:U,backgroundColor:B},children:(0,u.jsx)(o.t1,{chartType:"GeoChart",width:w,height:U,data:L.data,options:$,loader:k})})},A=a=>(0,d.useContext)(r.m)?(0,u.jsx)(E,{...a}):(0,u.jsx)(r.S,{children:(0,u.jsx)(E,{...a})});A.displayName="GeoChart";const T=(0,y.F)(A);try{ResponsiveChart.displayName="ResponsiveChart",ResponsiveChart.__docgenInfo={description:"",displayName:"ResponsiveChart",props:{className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:`Data in Google Charts native format for maximum flexibility.
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
Called while Google Charts is loading.`,name:"renderPlaceholder",required:!1,type:{name:"() => ReactNode"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"Height of the chart container in pixels. When omitted, the chart fills its parent's height.",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart container in pixels. When omitted, the chart fills its parent's width.",name:"width",required:!1,type:{name:"number"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/geo-chart/geo-chart.tsx#GeoChart"]={docgenInfo:GeoChart.__docgenInfo,name:"GeoChart",path:"../charts/src/charts/geo-chart/geo-chart.tsx#GeoChart"})}catch{}},"../charts/src/charts/geo-chart/stories/config.tsx"(h,i,e){e.d(i,{_:()=>r,s:()=>t});var s=e("../charts/src/stories/chart-decorator.tsx"),c=e("../charts/src/stories/theme-config.tsx"),d=e("../charts/src/stories/sample-data/index.ts"),o=e("../charts/src/charts/geo-chart/geo-chart.tsx");const t={title:"JS Packages/Charts Library/Charts/Geo Chart",component:o.A,parameters:{layout:"centered"},decorators:[s.OI],argTypes:{...s.xo,...c.jW}},r={data:d.M8,withPadding:!1};try{GeoData.displayName="GeoData",GeoData.__docgenInfo={description:`Data format for GeoChart - uses Google Charts native data format for maximum flexibility.
First element is the header row, subsequent elements are data rows.

Country identifiers can be either full country names or ISO 3166-1 alpha-2 codes (e.g., 'United States' or 'US').
Full names are recommended for better readability in tooltips.`,displayName:"GeoData",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/geo-chart/stories/config.tsx#GeoData"]={docgenInfo:GeoData.__docgenInfo,name:"GeoData",path:"../charts/src/charts/geo-chart/stories/config.tsx#GeoData"})}catch{}},"../charts/src/charts/private/with-responsive/with-responsive.tsx"(h,i,e){e.d(i,{F:()=>v});var s=e("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),c=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(c),o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/private/with-responsive/with-responsive.module.scss"),t={};t.insert="head",t.singleton=!1;var r=d()(o.A,t);const l=o.A.locals||{};var f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const x=({resizeDebounceTime:y=300,maxWidth:b=1200,aspectRatio:g})=>{const{parentRef:C,width:m,height:O}=(0,s.A)({debounceTime:y,enableDebounceLeadingCall:!0}),_=m>0?Math.min(m,b):0,u=g!==void 0?_*g:O;return{parentRef:C,width:_,height:u,hasAspectRatio:g!==void 0}};function v(y){return function({resizeDebounceTime:g=300,maxWidth:C=1200,aspectRatio:m,size:O,width:_,height:u,...R}){const{parentRef:D,width:j,height:E,hasAspectRatio:A}=x({resizeDebounceTime:g,maxWidth:C,aspectRatio:m}),T=j||_||0,a=E||u||0,p=A?"auto":"100%";return(0,f.jsx)("div",{ref:D,"data-testid":"responsive-wrapper",className:l.container,style:{width:_??"100%",height:u??p},children:(0,f.jsx)(y,{width:T,height:a,size:O,...R})})}}try{v.displayName="withResponsive",v.__docgenInfo={description:"A higher-order component that provides responsive dimensions\nto the wrapped chart component using useParentSize from `@visx/responsive`.",displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/with-responsive/with-responsive.tsx#withResponsive"]={docgenInfo:v.__docgenInfo,name:"withResponsive",path:"../charts/src/charts/private/with-responsive/with-responsive.tsx#withResponsive"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/geo-chart/geo-chart.module.scss"(h,i,e){e.d(i,{A:()=>r});var s=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(s),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),o=e.n(d),t=o()(c());t.push([h.id,".lAFi7oOf7oa6dhX2GP1E{position:relative;display:flex;justify-content:center;align-items:center}",""]),t.locals={container:"lAFi7oOf7oa6dhX2GP1E"};const r=t},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/private/with-responsive/with-responsive.module.scss"(h,i,e){e.d(i,{A:()=>r});var s=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(s),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),o=e.n(d),t=o()(c());t.push([h.id,".dAliwoUz2qgTlolGLhfq{min-width:0;min-height:0}",""]),t.locals={container:"dAliwoUz2qgTlolGLhfq"};const r=t}}]);
