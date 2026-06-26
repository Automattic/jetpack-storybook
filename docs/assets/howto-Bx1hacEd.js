import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{gt as n,n as r,t as i}from"./esm-BAI-y-N2.js";import{a,o,s}from"./blocks-2AkdpxoJ.js";import{t as c}from"./mdx-react-shim-D_vhTd_g.js";function l(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Docs/HowTo`}),`
`,(0,d.jsx)(t.h1,{id:`how-to-use-this-tool`,children:`How to use this tool`}),`
`,(0,d.jsx)(t.p,{children:`The Jetpack Components Library allows you to discover, test, and live-edit Jetpack UI components.`}),`
`,(0,d.jsx)(t.h2,{id:`publish-component-stories`,children:`Publish component stories`}),`
`,(0,d.jsxs)(t.p,{children:[`Anywhere in a supported package, create one or more directories called `,(0,d.jsx)(t.code,{children:`stories`}),` (e.g. `,(0,d.jsx)(t.code,{children:`src/components/my-component/stories`}),`).`]}),`
`,(0,d.jsxs)(t.p,{children:[`In that directory, create an `,(0,d.jsx)(t.code,{children:`index.stories.jsx`}),` or `,(0,d.jsx)(t.code,{children:`index.stories.tsx`}),` file, like this:`]}),`
`,(0,d.jsx)(o,{language:`jsx`,code:i`
	/**
	 * Internal dependencies
	 */
	import MyComponent from '../index.jsx';
	// the default export is metadata about the component
	export default {
		title: 'Components/My Component',
		component: MyComponent,
	};
	// the export called __default is the default state of the component
	export const _default = {};
`}),`
`,(0,d.jsxs)(t.p,{children:[`You can read more about writing stories in the `,(0,d.jsx)(t.a,{href:`https://storybook.js.org/docs/react/writing-stories/introduction`,rel:`nofollow`,children:`Storybook JS docs`}),`.`]}),`
`,(0,d.jsx)(t.h2,{id:`edit-components-live`,children:`Edit components live`}),`
`,(0,d.jsx)(t.p,{children:`To run this locally, just run:`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-bash`,children:`# From projects/js-packages/storybook/
pnpm run storybook:dev

# Or from Jetpack repo root
pnpm -F @automattic/jetpack-storybook storybook:dev
`})}),`
`,(0,d.jsx)(t.p,{children:`Any edits to SCSS, HTML, JSX or other files should be hot-loaded so you can see changes to styles or components.`}),`
`,(0,d.jsx)(t.h2,{id:`contributing`,children:`Contributing`}),`
`,(0,d.jsxs)(t.p,{children:[`Ready to contribute? Check out the Jetpack `,(0,d.jsx)(t.a,{href:`https://github.com/Automattic/jetpack/blob/trunk/docs/CONTRIBUTING.md`,rel:`nofollow`,children:`contributing guide`}),`.`]})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),c(),s(),r()}))();export{u as default};