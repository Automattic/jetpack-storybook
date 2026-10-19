import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./types-BRp4aAtL.js";import{n as r,r as i,t as a}from"./config--RZDb6Ik.js";var o,s,c,l,u,d,f,p,m,h,g;e((()=>{t(),i(),{expect:o,waitFor:s}=__STORYBOOK_MODULE_TEST__,c={...a,title:`JS Packages/Charts Library/Charts/Geo Chart/Tooltip Escaping`,component:a.component,tags:[`!dev`,`!autodocs`]},l=`<img src="x">`,u=1e4,d=e=>{let t=[...e.querySelectorAll(`.geo-chart svg path[fill^="#"]`)],n=new Map;for(let e of t){let t=e.getAttribute(`fill`);n.set(t,(n.get(t)??0)+1)}let[r]=[...n].sort((e,t)=>t[1]-e[1])[0]??[];return t.find(e=>e.getAttribute(`fill`)!==r)},f=e=>{let{left:t,top:n,width:r,height:i}=e.getBoundingClientRect(),a={bubbles:!0,clientX:t+r/2,clientY:n+i/2};e.dispatchEvent(new MouseEvent(`mouseover`,a)),e.dispatchEvent(new MouseEvent(`mousemove`,a))},p=async({canvasElement:e,payloadCount:t})=>{await s(()=>{let n=e.querySelector(`.google-visualization-tooltip`);if(!n){let t=d(e);o(t,`Google Charts did not draw the map`).toBeDefined(),f(t)}o(n).not.toBeNull(),o(n.querySelector(`img`),`The tooltip rendered the payload as markup`).toBeNull(),o(n.textContent.split(l)).toHaveLength(t+1)},{timeout:u})},m={args:{...r,data:[[`Country`,`Orders`,{type:`string`,role:n.tooltip}],[{v:`US`,f:l},1e3,l]]},play:({canvasElement:e})=>p({canvasElement:e,payloadCount:2})},h={args:{...r,data:[[`Country`,`Orders`],[`US`,{v:1e3,f:l}]]},play:({canvasElement:e})=>p({canvasElement:e,payloadCount:1})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    data: [['Country', 'Orders', {
      type: 'string',
      role: GoogleDataTableColumnRoleType.tooltip
    }], [{
      v: 'US',
      f: PAYLOAD
    }, 1000, PAYLOAD]]
  },
  play: ({
    canvasElement
  }) => expectTooltipEscapes({
    canvasElement,
    payloadCount: 2
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    data: [['Country', 'Orders'], ['US', {
      v: 1000,
      f: PAYLOAD
    }]]
  },
  play: ({
    canvasElement
  }) => expectTooltipEscapes({
    canvasElement,
    payloadCount: 1
  })
}`,...h.parameters?.docs?.source}}},g=[`TooltipColumnAndRegionName`,`FormattedValue`]}))();export{h as FormattedValue,m as TooltipColumnAndRegionName,g as __namedExportsOrder,c as default};