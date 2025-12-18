(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7617],{"../../../node_modules/.pnpm/@storybook+addon-docs@10.1.10_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@te_0dab3ad5060a2aa8d937367f454f05ee/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive":(o=>{function s(n){var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/@storybook+addon-docs@10.1.10_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@te_0dab3ad5060a2aa8d937367f454f05ee/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive",o.exports=s}),"../charts/src/stories/index.docs.mdx":((o,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>l});var r=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),i=n("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),c=n("../../../node_modules/.pnpm/@storybook+addon-docs@10.1.10_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@te_0dab3ad5060a2aa8d937367f454f05ee/node_modules/@storybook/addon-docs/dist/blocks.js");function d(a){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...a.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(c.W8,{title:"JS Packages/Charts Library/Introduction"}),`
`,(0,e.jsx)(t.h1,{id:"automattic-charts",children:"Automattic Charts"}),`
`,(0,e.jsxs)(t.p,{children:["A comprehensive charting library for displaying interactive data visualizations within Automattic products. Built on top of modern libraries like ",(0,e.jsx)(t.code,{children:"@visx/xychart"})," and designed for accessibility, responsiveness, and ease of use."]}),`
`,(0,e.jsx)(t.h2,{id:"features",children:"Features"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:["\u2728 ",(0,e.jsx)(t.strong,{children:"Rich Chart Types"})," - Bar charts, bar list charts, conversion funnel charts, donut charts, leaderboard visualizations, line charts, and pie charts"]}),`
`,(0,e.jsxs)(t.li,{children:["\u{1F3A8} ",(0,e.jsx)(t.strong,{children:"Themeable"})," - Built-in default theme with custom theme support"]}),`
`,(0,e.jsxs)(t.li,{children:["\u{1F4F1} ",(0,e.jsx)(t.strong,{children:"Responsive"})," - Automatically adapts to container size and viewport changes"]}),`
`,(0,e.jsxs)(t.li,{children:["\u267F ",(0,e.jsx)(t.strong,{children:"Accessible"})," - Full keyboard navigation, screen reader support, and ARIA compliance"]}),`
`,(0,e.jsxs)(t.li,{children:["\u{1F527} ",(0,e.jsx)(t.strong,{children:"Compound Components"})," - Flexible API using compound component patterns for advanced features"]}),`
`,(0,e.jsxs)(t.li,{children:["\u{1F5B1}\uFE0F ",(0,e.jsx)(t.strong,{children:"Interactive"})," - Tooltips, legends, annotations, and hover effects"]}),`
`,(0,e.jsxs)(t.li,{children:["\u{1F3AF} ",(0,e.jsx)(t.strong,{children:"TypeScript"})," - Full TypeScript support with comprehensive type definitions"]}),`
`]}),`
`,(0,e.jsx)(t.h2,{id:"quick-start",children:"Quick Start"}),`
`,(0,e.jsx)(t.h3,{id:"installation",children:"Installation"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-bash",children:`npm install @automattic/charts
# or
pnpm add @automattic/charts
# or
yarn add @automattic/charts
`})}),`
`,(0,e.jsx)(t.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(c.kL,{language:"jsx",code:`import { LineChart, GlobalChartsProvider } from '@automattic/charts';

const data = [
	{
		label: 'Views',
		data: [
			{ date: new Date('2024-01-01'), value: 1200 },
			{ date: new Date('2024-01-02'), value: 1400 },
			{ date: new Date('2024-01-03'), value: 1100 },
		],
		options: {}
	}
];

function MyChart() {
	return (
		<GlobalChartsProvider>
			<LineChart data={data} />
		</GlobalChartsProvider>
	);
}`}),`
`,(0,e.jsx)(t.h2,{id:"available-chart-types",children:"Available Chart Types"}),`
`,(0,e.jsx)(t.h3,{id:"bar-chart",children:(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-library-charts-bar-chart--docs",children:"Bar Chart"})}),`
`,(0,e.jsx)(t.p,{children:"Ideal for comparing values across categories, with vertical and horizontal orientations."}),`
`,(0,e.jsx)(t.h3,{id:"bar-list-chart",children:(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-library-charts-bar-list-chart--docs",children:"Bar List Chart"})}),`
`,(0,e.jsx)(t.p,{children:"A horizontal bar chart with customizable labels and value positioning, perfect for displaying categorized data with text annotations."}),`
`,(0,e.jsx)(t.h3,{id:"conversion-funnel-chart",children:(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-library-charts-conversion-funnel-chart--docs",children:"Conversion Funnel Chart"})}),`
`,(0,e.jsx)(t.p,{children:"A specialized chart for visualizing conversion funnels with interactive bar selection, hover effects, and step-by-step progression tracking."}),`
`,(0,e.jsx)(t.h3,{id:"donut-chart",children:(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-library-charts-donut-chart--docs",children:"Donut Chart"})}),`
`,(0,e.jsx)(t.p,{children:"A variation of pie charts with a hollow center for additional content display."}),`
`,(0,e.jsx)(t.h3,{id:"leaderboard-chart",children:(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-library-charts-leaderboard-chart--docs",children:"Leaderboard Chart"})}),`
`,(0,e.jsx)(t.p,{children:"Specialized for ranking data with progress bars and comparison values."}),`
`,(0,e.jsx)(t.h3,{id:"line-chart",children:(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-library-charts-line-chart--docs",children:"Line Chart"})}),`
`,(0,e.jsx)(t.p,{children:"Perfect for displaying trends over time, with support for multiple data series, annotations, and various curve types."}),`
`,(0,e.jsx)(t.h3,{id:"pie-chart",children:(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-library-charts-pie-chart--docs",children:"Pie Chart"})}),`
`,(0,e.jsx)(t.p,{children:"Great for showing parts of a whole, with customizable thickness and gap spacing."}),`
`,(0,e.jsx)(t.h2,{id:"core-concepts",children:"Core Concepts"}),`
`,(0,e.jsx)(t.h3,{id:"data-format",children:"Data Format"}),`
`,(0,e.jsxs)(t.p,{children:["Charts expect data in a standardized format with ",(0,e.jsx)(t.code,{children:"date"})," (for time-series) or category values and numeric ",(0,e.jsx)(t.code,{children:"value"})," properties."]}),`
`,(0,e.jsx)(t.h3,{id:"theme-system",children:"Theme System"}),`
`,(0,e.jsxs)(t.p,{children:["Use the ",(0,e.jsx)(t.code,{children:"GlobalChartsProvider"})," component to apply consistent styling across all charts. Create custom themes by defining the properties you want to override, such as colors, grid styling, and typography."]}),`
`,(0,e.jsx)(t.h3,{id:"responsive-design",children:"Responsive Design"}),`
`,(0,e.jsxs)(t.p,{children:["All charts automatically adapt to their container size using the ",(0,e.jsx)(t.code,{children:"withResponsive"})," higher-order component."]}),`
`,(0,e.jsx)(t.h3,{id:"compound-components",children:"Compound Components"}),`
`,(0,e.jsx)(t.p,{children:"Advanced features like annotations, legends, and tooltips are implemented as compound components for maximum flexibility."}),`
`,(0,e.jsx)(t.h2,{id:"development",children:"Development"}),`
`,(0,e.jsx)(t.h3,{id:"running-storybook-locally",children:"Running Storybook Locally"}),`
`,(0,e.jsx)(t.p,{children:"To explore all available charts and their variations:"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-bash",children:`# From the charts package directory
pnpm run storybook

# Or from the Jetpack monorepo root
pnpm -F @automattic/charts storybook
`})}),`
`,(0,e.jsx)(t.h3,{id:"contributing",children:"Contributing"}),`
`,(0,e.jsxs)(t.p,{children:["Ready to contribute? Check out the ",(0,e.jsx)(t.a,{href:"https://github.com/Automattic/jetpack/blob/trunk/docs/CONTRIBUTING.md",rel:"nofollow",children:"Jetpack contributing guide"})," and the ",(0,e.jsx)(t.a,{href:"https://github.com/Automattic/jetpack/blob/trunk/projects/js-packages/charts/docs/ai-documentation-guide.md",rel:"nofollow",children:"Charts AI documentation guide"})," for detailed information on adding new features and documentation."]}),`
`,(0,e.jsx)(t.h2,{id:"resources",children:"Resources"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:(0,e.jsx)(t.a,{href:"https://github.com/Automattic/jetpack/tree/trunk/projects/js-packages/charts",rel:"nofollow",children:"GitHub Repository"})}),`
`,(0,e.jsx)(t.li,{children:(0,e.jsx)(t.a,{href:"https://github.com/Automattic/jetpack/tree/trunk/projects/js-packages/charts/README.md",rel:"nofollow",children:"Package Documentation"})}),`
`,(0,e.jsx)(t.li,{children:(0,e.jsx)(t.a,{href:"https://github.com/Automattic/jetpack/tree/trunk/projects/js-packages/charts/src/types.ts",rel:"nofollow",children:"TypeScript Definitions"})}),`
`,(0,e.jsx)(t.li,{children:(0,e.jsx)(t.a,{href:"https://github.com/Automattic/jetpack/blob/trunk/docs/CONTRIBUTING.md",rel:"nofollow",children:"Contributing Guidelines"})}),`
`]}),`
`,(0,e.jsx)(t.p,{children:"Start exploring the components and examples in the sidebar to see the full capabilities of the Automattic Charts library!"})]})}function l(a={}){const{wrapper:t}={...(0,i.R)(),...a.components};return t?(0,e.jsx)(t,{...a,children:(0,e.jsx)(d,{...a})}):d(a)}})}]);
