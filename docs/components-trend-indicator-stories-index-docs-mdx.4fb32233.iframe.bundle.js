(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4992,7210],{"../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@tes_8b6d8444bcdd16ef895876f31adb8bdf/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive":(_=>{function i(o){var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}i.keys=()=>[],i.resolve=i,i.id="../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@tes_8b6d8444bcdd16ef895876f31adb8bdf/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive",_.exports=i}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((_,i,o)=>{"use strict";o.d(i,{A:()=>l});function c(s){var d,a,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var t=s.length;for(d=0;d<t;d++)s[d]&&(a=c(s[d]))&&(r&&(r+=" "),r+=a)}else for(a in s)s[a]&&(r&&(r+=" "),r+=a);return r}function e(){for(var s,d,a=0,r="",t=arguments.length;a<t;a++)(s=arguments[a])&&(d=c(s))&&(r&&(r+=" "),r+=d);return r}const l=e}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/trend-indicator/trend-indicator.module.scss":((_,i,o)=>{"use strict";o.d(i,{A:()=>a});var c=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=o.n(c),l=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),s=o.n(l),d=s()(e());d.push([_.id,".amldow1fTTrpzxSPVEqJ{display:inline-flex;align-items:center;gap:.125em;font-size:.875rem;font-weight:500;line-height:1}.CS73q1y2fH5yPyjlUXSU{color:var(--charts-trend-up-color, #1a8917)}.ddoRjJ9ySl8rgfrgwSy2{color:var(--charts-trend-down-color, #d63638)}.p_HA9qiDPb3U5bVyCJd3{color:var(--charts-trend-neutral-color, #646970)}.k2qf6fHSfoVdNmMi3Kuu{width:1em;height:1em;flex-shrink:0}.qFdWBlvjeR0x9nD0EoFB{white-space:nowrap}",""]),d.locals={"trend-indicator":"amldow1fTTrpzxSPVEqJ","trend-indicator--up":"CS73q1y2fH5yPyjlUXSU","trend-indicator--down":"ddoRjJ9ySl8rgfrgwSy2","trend-indicator--neutral":"p_HA9qiDPb3U5bVyCJd3","trend-indicator__icon":"k2qf6fHSfoVdNmMi3Kuu","trend-indicator__value":"qFdWBlvjeR0x9nD0EoFB"};const a=d}),"../charts/src/components/trend-indicator/stories/index.docs.mdx":((_,i,o)=>{"use strict";o.r(i),o.d(i,{default:()=>r});var c=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),l=o("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),s=o("../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@tes_8b6d8444bcdd16ef895876f31adb8bdf/node_modules/@storybook/addon-docs/dist/blocks.js"),d=o("../charts/src/components/trend-indicator/stories/index.stories.tsx");function a(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.W8,{title:"JS Packages/Charts Library/Components/Trend Indicator",of:d}),`
`,(0,e.jsx)(n.h1,{id:"trend-indicator",children:"Trend Indicator"}),`
`,(0,e.jsx)(n.p,{children:"A compact component for displaying directional trends with values, perfect for showing percentage changes, growth metrics, or status indicators."}),`
`,(0,e.jsx)(s.Hl,{of:d.Up}),`
`,(0,e.jsx)(n.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsx)(n.p,{children:"The TrendIndicator component displays a value with an optional directional icon and color-coded styling to indicate positive, negative, or neutral trends. It's designed to be used inline with text or alongside metrics in dashboards."}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:`import { TrendIndicator } from '@automattic/charts';

<TrendIndicator direction="up" value="+14%" />
<TrendIndicator direction="down" value="-5%" />
<TrendIndicator direction="neutral" value="0%" />`}),`
`,(0,e.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsxs)(n.p,{children:["For detailed information about component props and types, see the ",(0,e.jsx)(n.a,{href:"./?path=/docs/js-packages-charts-library-components-trend-indicator-api-reference--docs",children:"Trend Indicator API Reference"}),"."]}),`
`,(0,e.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(n.h3,{id:"upward-trend",children:"Upward Trend"}),`
`,(0,e.jsxs)(n.p,{children:["Use ",(0,e.jsx)(n.code,{children:'direction="up"'})," for positive changes. The indicator displays in green with an upward arrow:"]}),`
`,(0,e.jsx)(s.Hl,{of:d.Up}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:'<TrendIndicator direction="up" value="+14%" />'}),`
`,(0,e.jsx)(n.h3,{id:"downward-trend",children:"Downward Trend"}),`
`,(0,e.jsxs)(n.p,{children:["Use ",(0,e.jsx)(n.code,{children:'direction="down"'})," for negative changes. The indicator displays in red with a downward arrow:"]}),`
`,(0,e.jsx)(s.Hl,{of:d.Down}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:'<TrendIndicator direction="down" value="-5%" />'}),`
`,(0,e.jsx)(n.h3,{id:"neutral-trend",children:"Neutral Trend"}),`
`,(0,e.jsxs)(n.p,{children:["Use ",(0,e.jsx)(n.code,{children:'direction="neutral"'})," for unchanged values. The indicator displays in gray without an arrow:"]}),`
`,(0,e.jsx)(s.Hl,{of:d.Neutral}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:'<TrendIndicator direction="neutral" value="0%" />'}),`
`,(0,e.jsx)(n.h3,{id:"required-props",children:"Required Props"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"direction"})}),": The trend direction (",(0,e.jsx)(n.code,{children:"'up'"}),", ",(0,e.jsx)(n.code,{children:"'down'"}),", or ",(0,e.jsx)(n.code,{children:"'neutral'"}),")"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"value"})}),": The value to display (string or number)"]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"optional-props",children:"Optional Props"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"showIcon"})})," (default: ",(0,e.jsx)(n.code,{children:"true"}),"): Whether to show the directional arrow icon"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"className"})}),": Additional CSS class name"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"style"})}),": Inline CSS styles"]}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"visual-customization",children:"Visual Customization"}),`
`,(0,e.jsx)(n.h3,{id:"without-icon",children:"Without Icon"}),`
`,(0,e.jsx)(n.p,{children:"Hide the directional icon when you only need color-coded text:"}),`
`,(0,e.jsx)(s.Hl,{of:d.WithoutIcon}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:'<TrendIndicator direction="up" value="+14%" showIcon={false} />'}),`
`,(0,e.jsx)(n.h3,{id:"custom-styling",children:"Custom Styling"}),`
`,(0,e.jsxs)(n.p,{children:["Apply custom styles using the ",(0,e.jsx)(n.code,{children:"className"})," or ",(0,e.jsx)(n.code,{children:"style"})," props:"]}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:`<TrendIndicator
direction="up"
value="+25%"
style={{ fontSize: '1.5rem', fontWeight: 700 }}
/>

<TrendIndicator
direction="down"
value="-10%"
className="my-custom-trend"
/>`}),`
`,(0,e.jsx)(n.h3,{id:"value-formats",children:"Value Formats"}),`
`,(0,e.jsxs)(n.p,{children:["The ",(0,e.jsx)(n.code,{children:"value"})," prop accepts any string or number format:"]}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:`// Percentages
<TrendIndicator direction="up" value="+14%" />
<TrendIndicator direction="down" value="-5.2%" />

// Currency
<TrendIndicator direction="up" value="+$500" />
<TrendIndicator direction="down" value="-$1,234" />

// Numbers
<TrendIndicator direction="up" value={42} />
<TrendIndicator direction="up" value="2.5k" />`}),`
`,(0,e.jsx)(n.h2,{id:"theming",children:"Theming"}),`
`,(0,e.jsx)(n.p,{children:"The component uses CSS custom properties for colors, making it easy to customize:"}),`
`,(0,e.jsx)(s.kL,{language:"css",code:`:root {
--charts-trend-up-color: #1a8917;    /* Green for positive */
--charts-trend-down-color: #d63638;  /* Red for negative */
--charts-trend-neutral-color: #646970; /* Gray for neutral */
}`}),`
`,(0,e.jsx)(n.p,{children:"Override these variables in your stylesheet to match your design system."}),`
`,(0,e.jsx)(n.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,(0,e.jsx)(n.h3,{id:"dashboard-metrics",children:"Dashboard Metrics"}),`
`,(0,e.jsx)(n.p,{children:"Display trend indicators alongside key metrics:"}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:`<div className="metric-card">
<span className="metric-label">Monthly Revenue</span>
<div className="metric-value">
	<span>$45,231</span>
	<TrendIndicator direction="up" value="+12%" />
</div>
</div>`}),`
`,(0,e.jsx)(n.h3,{id:"data-tables",children:"Data Tables"}),`
`,(0,e.jsx)(n.p,{children:"Show trends in table cells:"}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:`<table>
<tbody>
	<tr>
		<td>Product A</td>
		<td>1,234 sales</td>
		<td><TrendIndicator direction="up" value="+8%" /></td>
	</tr>
	<tr>
		<td>Product B</td>
		<td>567 sales</td>
		<td><TrendIndicator direction="down" value="-3%" /></td>
	</tr>
</tbody>
</table>`}),`
`,(0,e.jsx)(n.h3,{id:"inline-with-text",children:"Inline with Text"}),`
`,(0,e.jsx)(n.p,{children:"Use inline with descriptive text:"}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:`<p>
Sales increased this quarter <TrendIndicator direction="up" value="+14%" />
</p>`}),`
`,(0,e.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,(0,e.jsx)(n.p,{children:"The TrendIndicator component includes built-in accessibility features:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"aria-label"}),': Automatically generated label describing the trend (e.g., "Increase: +14%")']}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"aria-hidden"}),": The decorative icon is hidden from screen readers"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Color independence"}),": Trends are distinguishable by icon direction, not just color"]}),`
`]}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:`// Rendered output includes:
<span aria-label="Increase: +14%">
<svg aria-hidden="true">...</svg>
<span>+14%</span>
</span>`}),`
`,(0,e.jsx)(n.h2,{id:"browser-compatibility",children:"Browser Compatibility"}),`
`,(0,e.jsx)(n.p,{children:"TrendIndicator is compatible with all modern browsers:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Chrome/Edge (latest)"}),`
`,(0,e.jsx)(n.li,{children:"Firefox (latest)"}),`
`,(0,e.jsx)(n.li,{children:"Safari (latest)"}),`
`,(0,e.jsx)(n.li,{children:"Mobile browsers (iOS Safari, Chrome Mobile)"}),`
`]})]})}function r(t={}){const{wrapper:n}={...(0,l.R)(),...t.components};return n?(0,e.jsx)(n,{...t,children:(0,e.jsx)(a,{...t})}):a(t)}}),"../charts/src/components/trend-indicator/stories/index.stories.tsx":((_,i,o)=>{"use strict";o.r(i),o.d(i,{Down:()=>y,Neutral:()=>g,Up:()=>j,WithoutIcon:()=>f,__namedExportsOrder:()=>v,default:()=>x});var c=o("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),e=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=o.n(e),s=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/trend-indicator/trend-indicator.module.scss"),d={};d.insert="head",d.singleton=!1;var a=l()(s.A,d);const r=s.A.locals||{};var t=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n={up:"Increase",down:"Decrease",neutral:"No change"},m=({direction:u})=>{if(u==="neutral")return null;const h=u==="up";return(0,t.jsx)("svg",{className:r["trend-indicator__icon"],viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:(0,t.jsx)("path",{d:h?"M8 13V3M4 7l4-4 4 4":"M8 3v10M4 9l4 4 4-4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})};function p({direction:u,value:h,className:b,style:w,showIcon:T=!0}){const I=`${n[u]}: ${h}`;return(0,t.jsxs)("span",{className:(0,c.A)(r["trend-indicator"],r[`trend-indicator--${u}`],b),style:w,"aria-label":I,children:[T&&(0,t.jsx)(m,{direction:u}),(0,t.jsx)("span",{className:r["trend-indicator__value"],children:h})]})}try{p.displayName="TrendIndicator",p.__docgenInfo={description:`TrendIndicator displays a directional trend with a value.
Used to show percentage changes or growth metrics.`,displayName:"TrendIndicator",props:{direction:{defaultValue:null,description:"The direction of the trend (up, down, or neutral)",name:"direction",required:!0,type:{name:"enum",value:[{value:'"up"'},{value:'"down"'},{value:'"neutral"'}]}},value:{defaultValue:null,description:'The value to display (e.g., "14%", "+$500", "2.5k")',name:"value",required:!0,type:{name:"string | number"}},className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Inline styles",name:"style",required:!1,type:{name:"CSSProperties"}},showIcon:{defaultValue:{value:"true"},description:"Whether to show the directional icon",name:"showIcon",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/trend-indicator/trend-indicator.tsx#TrendIndicator"]={docgenInfo:p.__docgenInfo,name:"TrendIndicator",path:"../charts/src/components/trend-indicator/trend-indicator.tsx#TrendIndicator"})}catch{}const x={title:"JS Packages/Charts Library/Components/Trend Indicator",component:p,parameters:{layout:"centered"},argTypes:{direction:{control:{type:"radio"},options:["up","down","neutral"]},value:{control:"text"},showIcon:{control:"boolean"}}},j={args:{direction:"up",value:"+14%"}},y={args:{direction:"down",value:"-5%"}},g={args:{direction:"neutral",value:"0%"}},f={args:{direction:"up",value:"+14%",showIcon:!1}},v=["Up","Down","Neutral","WithoutIcon"]})}]);
