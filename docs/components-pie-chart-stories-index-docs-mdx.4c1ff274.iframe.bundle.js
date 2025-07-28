(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9664],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(l,t,s)=>{"use strict";s.d(t,{R:()=>r,x:()=>c});var d=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},h=d.createContext(e);function r(i){const o=d.useContext(h);return d.useMemo(function(){return typeof i=="function"?i(o):{...o,...i}},[o,i])}function c(i){let o;return i.disableParentContext?o=typeof i.components=="function"?i.components(e):i.components||e:o=r(i.components),d.createElement(h.Provider,{value:o},i.children)}},"../charts/src/components/pie-chart/stories/index.docs.mdx":(l,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>j});var d=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),h=s("../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),r=s("../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist/blocks.mjs"),c=s("../charts/src/components/pie-chart/stories/index.stories.tsx"),i=s("../charts/src/components/pie-chart/stories/pie-legend.stories.tsx");function o(a){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,h.R)(),...a.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.W8,{title:"JS Packages/Charts/Types/Pie Chart",of:c}),`
`,(0,e.jsx)(n.h1,{id:"pie-chart",children:"Pie Chart"}),`
`,(0,e.jsx)(n.p,{children:"Pie Charts visualize proportional data as circular segments, making it easy to understand parts of a whole. They excel at showing percentage breakdowns and comparative relationships between categories."}),`
`,(0,e.jsx)(r.Hl,{of:c.Default}),`
`,(0,e.jsx)(n.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsxs)(n.p,{children:["The Pie Chart component provides a flexible, accessible, and highly customizable solution for displaying proportional data. Built on ",(0,e.jsx)(n.code,{children:"@visx/shape"}),", it supports both pie and donut chart variations, interactive tooltips, legends, and customizable styling with gap control, corner rounding, and thickness adjustment:"]}),`
`,(0,e.jsx)(r.kL,{language:"jsx",code:`import { PieChart } from '@automattic/charts';

  <PieChart
  	data={ data }
  	withTooltips={ true }
  	showLegend={ true }
  />`}),`
`,(0,e.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(n.h3,{id:"simple-pie-chart",children:"Simple Pie Chart"}),`
`,(0,e.jsxs)(n.p,{children:["The simplest pie chart requires only a ",(0,e.jsx)(n.code,{children:"data"})," prop with percentage-based data:"]}),`
`,(0,e.jsx)(r.Hl,{of:c.Default}),`
`,(0,e.jsx)(r.kL,{language:"jsx",code:`<PieChart
	size={ 400 }
	data={[
		{ label: 'MacOS', value: 30000, valueDisplay: '30K', percentage: 23 },
		{ label: 'Linux', value: 22000, valueDisplay: '22K', percentage: 17 },
		{ label: 'Windows', value: 80000, valueDisplay: '80K', percentage: 60 },
	]}
/>`}),`
`,(0,e.jsx)(n.h3,{id:"required-props",children:"Required Props"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"data"})}),": Array of ",(0,e.jsx)(n.code,{children:"DataPointPercentage"})," objects containing label, value, and percentage"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"size"})}),": Diameter of the chart in pixels (when not using responsive mode)"]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"optional-props",children:"Optional Props"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"padding"})})," (default: ",(0,e.jsx)(n.code,{children:"20"}),"): Padding around the chart in pixels"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"withTooltips"})})," (default: ",(0,e.jsx)(n.code,{children:"false"}),"): Enables interactive tooltips on hover"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"showLegend"})})," (default: ",(0,e.jsx)(n.code,{children:"false"}),"): Shows a legend for the chart data"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"thickness"})})," (default: ",(0,e.jsx)(n.code,{children:"1"}),"): Thickness of the pie chart segments (0-1). Values less than 1 create donut charts"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"gapScale"})})," (default: ",(0,e.jsx)(n.code,{children:"0"}),"): Scale of gaps between segments (0-1)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"cornerScale"})})," (default: ",(0,e.jsx)(n.code,{children:"0"}),"): Scale of corner rounding for segments (0-1)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"children"})}),": Optional React node to render inside the chart center (useful for donut charts)"]}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"interactive-features",children:"Interactive Features"}),`
`,(0,e.jsx)(n.h3,{id:"tooltips",children:"Tooltips"}),`
`,(0,e.jsx)(n.p,{children:"Enable interactive tooltips that display data information on hover:"}),`
`,(0,e.jsx)(r.Hl,{of:c.WithTooltips}),`
`,(0,e.jsx)(r.kL,{language:"jsx",code:`<PieChart
	size={ 400 }
	data={ data }
	withTooltips={ true }
/>`}),`
`,(0,e.jsx)(n.h3,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,(0,e.jsxs)(n.p,{children:["The Pie Chart component supports responsive sizing by omitting the ",(0,e.jsx)(n.code,{children:"size"})," prop:"]}),`
`,(0,e.jsx)(r.Hl,{of:c.Responsiveness}),`
`,(0,e.jsx)(r.kL,{language:"jsx",code:`// Responsive - fills parent container
<PieChart
	data={ data }
	maxWidth={ 600 }
	aspectRatio={ 1 }
/>

  // Fixed size
  <PieChart
  	size={ 400 }
  	data={ data }
  />`}),`
`,(0,e.jsx)(n.h3,{id:"data-validation-and-error-handling",children:"Data Validation and Error Handling"}),`
`,(0,e.jsx)(n.p,{children:"The component includes built-in data validation with helpful error states:"}),`
`,(0,e.jsx)(r.Hl,{of:c.ErrorStates}),`
`,(0,e.jsx)(n.p,{children:"The chart validates:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Empty data"}),": Shows appropriate message when no data is provided"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Percentage totals"}),": Ensures percentages sum to 100%"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Negative values"}),": Prevents invalid negative values"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Single data points"}),": Handles edge cases gracefully"]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"legend-positioning",children:"Legend Positioning"}),`
`,(0,e.jsx)(n.p,{children:"Control legend alignment and positioning:"}),`
`,(0,e.jsx)(r.Hl,{of:i.AlignmentPositioning}),`
`,(0,e.jsx)(r.kL,{language:"jsx",code:`<PieChart
	size={ 400 }
	data={ data }
	showLegend={ true }
	legendAlignmentHorizontal="right"
	legendAlignmentVertical="top"
/>`}),`
`,(0,e.jsx)(n.h3,{id:"vertical-legend",children:"Vertical Legend"}),`
`,(0,e.jsx)(n.p,{children:"Use vertical orientation for space-efficient legend placement:"}),`
`,(0,e.jsx)(r.Hl,{of:i.VerticalOrientation}),`
`,(0,e.jsx)(r.kL,{language:"jsx",code:`<PieChart
	size={ 400 }
	data={ data }
	showLegend={ true }
	legendOrientation="vertical"
	legendAlignmentHorizontal="right"
	legendAlignmentVertical="top"
/>`}),`
`,(0,e.jsx)(n.h2,{id:"styling-and-customization",children:"Styling and Customization"}),`
`,(0,e.jsx)(n.h3,{id:"visual-styling-options",children:"Visual Styling Options"}),`
`,(0,e.jsx)(n.p,{children:"The Pie Chart supports various visual customizations:"}),`
`,(0,e.jsx)(n.h4,{id:"gaps-between-segments",children:"Gaps Between Segments"}),`
`,(0,e.jsxs)(n.p,{children:["Use ",(0,e.jsx)(n.code,{children:"gapScale"})," to add spacing between chart segments:"]}),`
`,(0,e.jsx)(r.kL,{language:"jsx",code:`<PieChart
	data={ data }
	gapScale={ 0.05 } // 5% gap scale
/>`}),`
`,(0,e.jsx)(n.h3,{id:"custom-colors",children:"Custom Colors"}),`
`,(0,e.jsx)(n.p,{children:"Override theme colors by providing color values in data:"}),`
`,(0,e.jsx)(r.kL,{language:"jsx",code:`const dataWithColors = [
	{
		label: 'MacOS',
		value: 30000,
		valueDisplay: '30K',
		percentage: 23,
		color: '#007cba' // Custom blue
	},
	{
		label: 'Linux',
		value: 22000,
		valueDisplay: '22K',
		percentage: 17,
		color: '#f56565' // Custom red
	},
	{
		label: 'Windows',
		value: 80000,
		valueDisplay: '80K',
		percentage: 60,
		color: '#48bb78' // Custom green
	},
];

  <PieChart data={ dataWithColors } />`}),`
`,(0,e.jsx)(n.h3,{id:"theme-integration",children:"Theme Integration"}),`
`,(0,e.jsxs)(n.p,{children:["Pie Charts automatically integrate with the chart theme system, inheriting colors, typography, and styling from the active theme. Custom themes can be applied using the ",(0,e.jsx)(n.code,{children:"ThemeProvider"}),":"]}),`
`,(0,e.jsx)(r.kL,{language:"jsx",code:`import { ThemeProvider, jetpackTheme } from '@automattic/charts';

  <ThemeProvider theme={ jetpackTheme }>
  	<PieChart data={ data } />
  </ThemeProvider>`}),`
`,(0,e.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsx)(n.h3,{id:"piechart",children:"PieChart"}),`
`,(0,e.jsx)(n.p,{children:"Main component for rendering pie and donut charts."}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Props:"})}),`
`,(0,e.jsxs)(n.table,{children:[(0,e.jsx)(n.thead,{children:(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.th,{children:"Prop"}),(0,e.jsx)(n.th,{children:"Type"}),(0,e.jsx)(n.th,{children:"Default"}),(0,e.jsx)(n.th,{children:"Description"})]})}),(0,e.jsxs)(n.tbody,{children:[(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"data"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"DataPointPercentage[]"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsxs)(n.td,{children:[(0,e.jsx)(n.strong,{children:"Required."})," Array of data objects with label, value, and percentage"]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"size"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Diameter of the chart in pixels (omit for responsive behavior)"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"thickness"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"1"})}),(0,e.jsx)(n.td,{children:"Thickness of the pie chart segments (0-1). Values less than 1 create donut charts"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"padding"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"20"})}),(0,e.jsx)(n.td,{children:"Padding around the chart in pixels"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"gapScale"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"0"})}),(0,e.jsx)(n.td,{children:"Scale of gaps between segments (0-1)"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"cornerScale"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"0"})}),(0,e.jsx)(n.td,{children:"Scale of corner rounding for segments (0-1)"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"withTooltips"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsx)(n.td,{children:"Enable interactive tooltips on hover"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"showLegend"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsx)(n.td,{children:"Display chart legend"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendOrientation"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'horizontal' | 'vertical'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'horizontal'"})}),(0,e.jsx)(n.td,{children:"Legend layout direction"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendAlignmentHorizontal"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'left' | 'center' | 'right'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'center'"})}),(0,e.jsx)(n.td,{children:"Horizontal legend alignment"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendAlignmentVertical"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'top' | 'bottom'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'bottom'"})}),(0,e.jsx)(n.td,{children:"Vertical legend position"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendShape"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"LegendShape"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'circle'"})}),(0,e.jsx)(n.td,{children:"Shape of legend markers"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"children"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"ReactNode"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Optional content to render inside chart center (useful for donut charts)"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"className"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Additional CSS class names"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"chartId"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Custom chart identifier for accessibility"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"maxWidth"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Maximum width for responsive charts"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"aspectRatio"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"1"})}),(0,e.jsx)(n.td,{children:"Aspect ratio for responsive charts"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"resizeDebounceTime"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"100"})}),(0,e.jsx)(n.td,{children:"Debounce time for resize events (ms)"})]})]})]}),`
`,(0,e.jsx)(n.h3,{id:"datapointpercentage-type",children:"DataPointPercentage Type"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`type DataPointPercentage = {
	/** Label for the data point */
	label: string;
	/** Numerical value */
	value: number;
	/** Formatted value for display */
	valueDisplay?: string;
	/** Percentage value (must sum to 100 across all data points) */
	percentage: number;
	/** Optional custom color override */
	color?: string;
};
`})})]})}function j(a={}){const{wrapper:n}={...(0,h.R)(),...a.components};return n?(0,e.jsx)(n,{...a,children:(0,e.jsx)(o,{...a})}):o(a)}},"../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive":l=>{function t(s){var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}t.keys=()=>[],t.resolve=t,t.id="../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive",l.exports=t},"../charts/src/components/pie-chart/stories/pie-legend.stories.tsx":(l,t,s)=>{"use strict";s.r(t),s.d(t,{AlignmentPositioning:()=>x,Default:()=>n,VerticalOrientation:()=>p,__namedExportsOrder:()=>g,default:()=>o});var d=s("../charts/src/stories/decorator-config.tsx"),e=s("../charts/src/stories/legend-config.tsx"),h=s("../charts/src/components/pie-chart/pie-chart.tsx"),r=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c=[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],o={title:"JS Packages/Charts/Types/Pie Chart/Legend",component:h.A,parameters:{layout:"centered"},decorators:d.p,argTypes:e.r},j=m=>(0,r.jsx)(h.A,{...m}),a={data:c,resize:"none",containerWidth:"432px",containerHeight:"480px",thickness:0,innerRadius:0,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,showLegend:!0,legendOrientation:"horizontal"},n=j.bind({});n.args={...a};const x=j.bind({});x.args={...a,legendAlignmentHorizontal:"right",legendAlignmentVertical:"top"};const p=j.bind({});p.args={...a,legendOrientation:"vertical",legendAlignmentHorizontal:"right",legendAlignmentVertical:"top",containerHeight:"524px"};const g=["Default","AlignmentPositioning","VerticalOrientation"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <PieChart {...args} />",...n.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"args => <PieChart {...args} />",...x.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"args => <PieChart {...args} />",...p.parameters?.docs?.source}}}},"../charts/src/stories/legend-config.tsx":(l,t,s)=>{"use strict";s.d(t,{r:()=>e});var d=s("../charts/src/providers/theme/themes.ts");const e={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendAlignmentHorizontal:{control:{type:"select"},options:["left","center","right"],table:{category:"Legend"}},legendAlignmentVertical:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},theme:{control:{type:"select"},options:{default:void 0,jetpack:d.QI,woo:d.pk},defaultValue:void 0,table:{category:"Theme"}}};try{e.displayName="legendArgTypes",e.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:e.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive":l=>{function t(s){var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}t.keys=()=>[],t.resolve=t,t.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive",l.exports=t},"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive":l=>{function t(s){var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}t.keys=()=>[],t.resolve=t,t.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive",l.exports=t}}]);
