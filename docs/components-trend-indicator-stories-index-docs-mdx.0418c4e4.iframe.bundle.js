"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4992,7210],{"../charts/src/components/trend-indicator/stories/index.docs.mdx"(x,i,r){r.r(i),r.d(i,{default:()=>d});var l=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),c=r("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.28_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),s=r("../../../node_modules/.pnpm/@storybook+addon-docs@10.2.3_@types+react@18.3.28_esbuild@0.25.9_storybook@10.2.3_@test_88e84a67bc471b38bfff5a29ef060cf6/node_modules/@storybook/addon-docs/dist/blocks.js"),o=r("../charts/src/components/trend-indicator/stories/index.stories.tsx");function a(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.W8,{title:"JS Packages/Charts Library/Components/Trend Indicator",of:o}),`
`,(0,e.jsx)(n.h1,{id:"trend-indicator",children:"Trend Indicator"}),`
`,(0,e.jsx)(n.p,{children:"A compact component for displaying directional trends with values, perfect for showing percentage changes, growth metrics, or status indicators."}),`
`,(0,e.jsx)(s.Hl,{of:o.Up}),`
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
`,(0,e.jsx)(s.Hl,{of:o.Up}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:'<TrendIndicator direction="up" value="+14%" />'}),`
`,(0,e.jsx)(n.h3,{id:"downward-trend",children:"Downward Trend"}),`
`,(0,e.jsxs)(n.p,{children:["Use ",(0,e.jsx)(n.code,{children:'direction="down"'})," for negative changes. The indicator displays in red with a downward arrow:"]}),`
`,(0,e.jsx)(s.Hl,{of:o.Down}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:'<TrendIndicator direction="down" value="-5%" />'}),`
`,(0,e.jsx)(n.h3,{id:"neutral-trend",children:"Neutral Trend"}),`
`,(0,e.jsxs)(n.p,{children:["Use ",(0,e.jsx)(n.code,{children:'direction="neutral"'})," for unchanged values. The indicator displays in gray without an arrow:"]}),`
`,(0,e.jsx)(s.Hl,{of:o.Neutral}),`
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
`,(0,e.jsx)(s.Hl,{of:o.WithoutIcon}),`
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
`]})]})}function d(t={}){const{wrapper:n}={...(0,c.R)(),...t.components};return n?(0,e.jsx)(n,{...t,children:(0,e.jsx)(a,{...t})}):a(t)}},"../charts/src/components/trend-indicator/stories/index.stories.tsx"(x,i,r){r.r(i),r.d(i,{Down:()=>_,Neutral:()=>h,Up:()=>p,WithoutIcon:()=>m,__namedExportsOrder:()=>v,default:()=>f});var l=r("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),e=r("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=r.n(e),s=r("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/trend-indicator/trend-indicator.module.scss"),o={};o.insert="head",o.singleton=!1;var a=c()(s.A,o);const d=s.A.locals||{};var t=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n={up:"Increase",down:"Decrease",neutral:"No change"},y=({direction:u})=>{if(u==="neutral")return null;const g=u==="up";return(0,t.jsx)("svg",{className:d["trend-indicator__icon"],viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:(0,t.jsx)("path",{d:g?"M8 13V3M4 7l4-4 4 4":"M8 3v10M4 9l4 4 4-4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})};function j({direction:u,value:g,className:T,style:w,showIcon:I=!0}){const b=`${n[u]}: ${g}`;return(0,t.jsxs)("span",{className:(0,l.A)(d["trend-indicator"],d[`trend-indicator--${u}`],T),style:w,"aria-label":b,children:[I&&(0,t.jsx)(y,{direction:u}),(0,t.jsx)("span",{className:d["trend-indicator__value"],children:g})]})}try{j.displayName="TrendIndicator",j.__docgenInfo={description:`TrendIndicator displays a directional trend with a value.
Used to show percentage changes or growth metrics.`,displayName:"TrendIndicator",props:{direction:{defaultValue:null,description:"The direction of the trend (up, down, or neutral)",name:"direction",required:!0,type:{name:"enum",value:[{value:'"up"'},{value:'"down"'},{value:'"neutral"'}]}},value:{defaultValue:null,description:'The value to display (e.g., "14%", "+$500", "2.5k")',name:"value",required:!0,type:{name:"string | number"}},className:{defaultValue:null,description:"Additional CSS class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Inline styles",name:"style",required:!1,type:{name:"CSSProperties"}},showIcon:{defaultValue:{value:"true"},description:"Whether to show the directional icon",name:"showIcon",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/trend-indicator/trend-indicator.tsx#TrendIndicator"]={docgenInfo:j.__docgenInfo,name:"TrendIndicator",path:"../charts/src/components/trend-indicator/trend-indicator.tsx#TrendIndicator"})}catch{}const f={title:"JS Packages/Charts Library/Components/Trend Indicator",component:j,parameters:{layout:"centered"},argTypes:{direction:{control:{type:"radio"},options:["up","down","neutral"]},value:{control:"text"},showIcon:{control:"boolean"}}},p={args:{direction:"up",value:"+14%"}},_={args:{direction:"down",value:"-5%"}},h={args:{direction:"neutral",value:"0%"}},m={args:{direction:"up",value:"+14%",showIcon:!1}},v=["Up","Down","Neutral","WithoutIcon"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'up',
    value: '+14%'
  }
}`,...p.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'down',
    value: '-5%'
  }
}`,..._.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'neutral',
    value: '0%'
  }
}`,...h.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'up',
    value: '+14%',
    showIcon: false
  }
}`,...m.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"(x,i,r){r.d(i,{A:()=>c});function l(s){var o,a,d="";if(typeof s=="string"||typeof s=="number")d+=s;else if(typeof s=="object")if(Array.isArray(s)){var t=s.length;for(o=0;o<t;o++)s[o]&&(a=l(s[o]))&&(d&&(d+=" "),d+=a)}else for(a in s)s[a]&&(d&&(d+=" "),d+=a);return d}function e(){for(var s,o,a=0,d="",t=arguments.length;a<t;a++)(s=arguments[a])&&(o=l(s))&&(d&&(d+=" "),d+=o);return d}const c=e},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/trend-indicator/trend-indicator.module.scss"(x,i,r){r.d(i,{A:()=>a});var l=r("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=r.n(l),c=r("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),s=r.n(c),o=s()(e());o.push([x.id,".amldow1fTTrpzxSPVEqJ{display:inline-flex;align-items:center;gap:.125em;font-size:.875rem;font-weight:500;line-height:1}.CS73q1y2fH5yPyjlUXSU{color:var(--charts-trend-up-color, #1a8917)}.ddoRjJ9ySl8rgfrgwSy2{color:var(--charts-trend-down-color, #d63638)}.p_HA9qiDPb3U5bVyCJd3{color:var(--charts-trend-neutral-color, #646970)}.k2qf6fHSfoVdNmMi3Kuu{width:1em;height:1em;flex-shrink:0}.qFdWBlvjeR0x9nD0EoFB{white-space:nowrap}",""]),o.locals={"trend-indicator":"amldow1fTTrpzxSPVEqJ","trend-indicator--up":"CS73q1y2fH5yPyjlUXSU","trend-indicator--down":"ddoRjJ9ySl8rgfrgwSy2","trend-indicator--neutral":"p_HA9qiDPb3U5bVyCJd3","trend-indicator__icon":"k2qf6fHSfoVdNmMi3Kuu","trend-indicator__value":"qFdWBlvjeR0x9nD0EoFB"};const a=o}}]);
