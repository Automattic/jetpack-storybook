import{n as e}from"./chunk-zsgVPwQN.js";import{Vm as t}from"./iframe-DqlnrQ0g.js";import{r as n}from"./react-CIpNTb6e.js";import{t as r}from"./mdx-react-shim-BKFUG1xR.js";import{a as i,i as a,n as o,t as s}from"./blocks-B0ChWWXs.js";import{n as c}from"./timestamp-control-BYk5Vdl7.js";import{n as l,t as u}from"./index2.stories-DNj4J5Ex.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`timestamp-control`,children:`Timestamp Control`}),`
`,(0,p.jsx)(t.p,{children:`React component to set a timestamp value.`}),`
`,(0,p.jsx)(s,{withSource:`open`,children:(0,p.jsx)(a,{id:`packages-videopress-timestamp-control--default`})}),`
`,(0,p.jsx)(t.h2,{id:`timestampcontrol-api`,children:`TimestampControl API`}),`
`,(0,p.jsx)(t.h3,{id:`value`,children:`value`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`type `,(0,p.jsx)(t.code,{children:`number`})]}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`The timestamp value in milliseconds`}),`
`,(0,p.jsx)(t.h3,{id:`disabled`,children:`disabled`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`type `,(0,p.jsx)(t.code,{children:`boolean`})]}),`
`]}),`
`,(0,p.jsx)(s,{withSource:`false`,children:(0,p.jsx)(a,{id:`packages-videopress-timestamp-control--disabled`})}),`
`,(0,p.jsx)(t.h3,{id:`label`,children:`label`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`type `,(0,p.jsx)(t.code,{children:`ReactNode`})]}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`If this property is added, a label will be generated using label property as the content.
ReactNode`}),`
`,(0,p.jsx)(t.h3,{id:`help`,children:`help`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`type `,(0,p.jsx)(t.code,{children:`ReactNode`})]}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`If this property is added, a help text will be added after the component using the help property as the content.`}),`
`,(0,p.jsx)(t.h3,{id:`onchange`,children:`onChange`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`type: `,(0,p.jsx)(t.code,{children:`Function`})]}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`Use this property to pass a callback function, where the API provides the selected time in milliseconds.`}),`
`,(0,p.jsx)(t.h3,{id:`ondebouncechange`,children:`onDebounceChange`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`type: `,(0,p.jsx)(t.code,{children:`Function`})]}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[`Similar to `,(0,p.jsx)(t.code,{children:`onChange`}),` property, but the call is debouncing in time according to the `,(0,p.jsx)(t.code,{children:`wait`}),` property value.`]}),`
`,(0,p.jsx)(t.h3,{id:`wait`,children:`wait`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`type: `,(0,p.jsx)(t.code,{children:`Number`})]}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[`Time, in milliseconds, that the `,(0,p.jsx)(t.code,{children:`onDebounceChange`}),` function will be debounced.`]}),`
`,(0,p.jsx)(t.h3,{id:``}),`
`,(0,p.jsx)(t.h3,{id:`max`,children:`max`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`type: `,(0,p.jsx)(t.code,{children:`number`})]}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`Maximum time value, in milliseconds, expected by the component.
Also, if it's bigger than one hour, the hour input will be rendered into the Timestamp Input component.`}),`
`,(0,p.jsx)(t.h3,{id:`decimalplaces`,children:`decimalPlaces`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`type: 1 | 2 | 3`}),`
`,(0,p.jsx)(t.li,{children:`optional`}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`The decimalPlaces property is used to add fractions of a second.
This property allows the user to specify the number of digits to be displayed after the seconds separator,
thus allowpackages-videopress-timestamp-control--with-marksing for a customizable level of precision.`}),`
`,(0,p.jsx)(s,{withSource:`open`,children:(0,p.jsx)(a,{id:`packages-videopress-timestamp-control--decimal-places`})}),`
`,(0,p.jsx)(t.p,{children:`The example above shows how to configure two decimal places for the control. The max value is five seconds (5000).`}),`
`,(0,p.jsx)(t.h3,{id:`fineadjustment`,children:`fineAdjustment`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`type: `,(0,p.jsx)(t.code,{children:`number`})]}),`
`,(0,p.jsxs)(t.li,{children:[`default: `,(0,p.jsx)(t.code,{children:`50`})]}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`Time, in milliseconds, for every step of the Range control.`}),`
`,(0,p.jsx)(t.h3,{id:`autohidetimeinput`,children:`autoHideTimeInput`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`type: `,(0,p.jsx)(t.code,{children:`boolean`})]}),`
`,(0,p.jsxs)(t.li,{children:[`default: `,(0,p.jsx)(t.code,{children:`True`})]}),`
`]}),`
`,(0,p.jsx)(t.h3,{id:`rendertooltip`,children:`renderTooltip`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`type: `,(0,p.jsx)(t.code,{children:`function`})]}),`
`,(0,p.jsx)(t.li,{children:`optional`}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`Optional option that when True renders a tooltip in the Range control, with a default time format.`}),`
`,(0,p.jsx)(s,{children:(0,p.jsx)(a,{id:`packages-videopress-timestamp-control--show-tooltip`})}),`
`,(0,p.jsx)(t.p,{children:`It also accepts a function. The example below shows how to customize what the tooltip shows.`}),`
`,(0,p.jsx)(s,{children:(0,p.jsx)(a,{id:`packages-videopress-timestamp-control--custom-tooltip`})}),`
`,(0,p.jsx)(t.h3,{id:`marksevery`,children:`marksEvery`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`type: `,(0,p.jsx)(t.code,{children:`number`})]}),`
`,(0,p.jsx)(t.li,{children:`optional`}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`Pass a time value, in milliseconds, to generate a mark set to add to the Range control.`}),`
`,(0,p.jsx)(s,{children:(0,p.jsx)(a,{id:`packages-videopress-timestamp-control--with-marks`})}),`
`,(0,p.jsx)(t.h2,{id:`handling-the-value-property`,children:`Handling the value property`}),`
`,(0,p.jsxs)(t.p,{children:[`By default, the component will handle its value internally through a local state.
The `,(0,p.jsx)(t.code,{children:`value`}),` property will define its initial value.
It simplifies its usage since consumers
won't be concerned about storing and propagating the updated value.`]}),`
`,(0,p.jsxs)(t.p,{children:[`However, updating the `,(0,p.jsx)(t.code,{children:`value`}),` property externally is possible if you need it.
The TimestampControl component will follow the new value provided.`]}),`
`,(0,p.jsx)(t.p,{children:`In the example below, it's possible to update the Timestamp value internally,
but also it's doable by using the additional range control.`}),`
`,(0,p.jsx)(s,{children:(0,p.jsx)(a,{id:`packages-videopress-timestamp-control--changing-value-externally`})})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),r(),i(),c(),l()}))();export{f as default};