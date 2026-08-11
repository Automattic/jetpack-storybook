import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{n as i,t as a}from"./date-year-filter-CeTUJLGq.js";function o({initialPreset:e=`all-time`,startYear:t,isCompact:n,containerElement:r}){let[i,o]=(0,c.useState)(e);return(0,l.jsx)(a,{value:i,onSelect:(e,t)=>o(t),timeZone:d,startYear:t,isCompact:n,containerElement:r})}function s(){let[e,t]=(0,c.useState)(null);return(0,l.jsx)(`div`,{ref:t,style:{width:`100%`,resize:`horizontal`,overflow:`auto`,border:`1px dotted violet`,padding:`10px`},children:(0,l.jsx)(o,{containerElement:e})})}var c,l,u,d,f,p,m,h,g,_;t((()=>{c=e(n(),1),i(),l=r(),u={title:`Packages/Premium Analytics/UI/DateYearFilter`,component:a,tags:[`autodocs`],parameters:{docs:{description:{component:"Whole-history date filter: all time, then one pill per calendar year. Selecting a year emits its full range; the current year and all time both end today. `startYear` sets the oldest year listed and where all time starts. The pills collapse to a select on their own once the measured container stops fitting them, unless a host sets `isCompact` itself."}}}},d=`America/New_York`,f={render:()=>(0,l.jsx)(o,{})},p={render:()=>(0,l.jsx)(o,{startYear:new Date().getFullYear()-9})},m={render:()=>(0,l.jsx)(o,{initialPreset:`last-30-days`})},h={render:()=>(0,l.jsx)(s,{}),decorators:[e=>(0,l.jsx)(`div`,{style:{width:`640px`},children:(0,l.jsx)(e,{})})]},g={render:()=>(0,l.jsx)(`div`,{style:{width:`360px`},children:(0,l.jsx)(o,{isCompact:!0})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <DateYearFilterWithState />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <DateYearFilterWithState startYear={new Date().getFullYear() - 9} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <DateYearFilterWithState initialPreset="last-30-days" />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <MeasuredInContainer />,
  decorators: [Story => <div style={{
    width: '640px'
  }}>
                <Story />
            </div>]
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '360px'
  }}>
            <DateYearFilterWithState isCompact />
        </div>
}`,...g.parameters?.docs?.source}}},_=[`Default`,`LongHistory`,`NoYearSelected`,`MeasuredContainer`,`ForcedCompact`]}))();export{f as Default,g as ForcedCompact,p as LongHistory,h as MeasuredContainer,m as NoYearSelected,_ as __namedExportsOrder,u as default};