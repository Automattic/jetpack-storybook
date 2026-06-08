import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{fv as n,mv as r,pv as i}from"./iframe-33AOSa0J.js";var a,o=e((()=>{a={"trend-indicator":`_trend-indicator_8s1lv_1`,"trend-indicator--up":`_trend-indicator--up_8s1lv_9`,"trend-indicator--down":`_trend-indicator--down_8s1lv_12`,"trend-indicator--neutral":`_trend-indicator--neutral_8s1lv_15`,"trend-indicator__icon":`_trend-indicator__icon_8s1lv_18`,"trend-indicator__value":`_trend-indicator__value_8s1lv_23`}}));function s({direction:e,value:t,className:n,style:r,showIcon:o=!0}){let s=`${l[e]}: ${t}`;return(0,c.jsxs)(`span`,{className:i(a[`trend-indicator`],a[`trend-indicator--${e}`],n),style:r,"aria-label":s,children:[o&&(0,c.jsx)(u,{direction:e}),(0,c.jsx)(`span`,{className:a[`trend-indicator__value`],children:t})]})}var c,l,u,d=e((()=>{r(),o(),c=n(),l={up:`Increase`,down:`Decrease`,neutral:`No change`},u=({direction:e})=>{if(e===`neutral`)return null;let t=e===`up`;return(0,c.jsx)(`svg`,{className:a[`trend-indicator__icon`],viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,c.jsx)(`path`,{d:t?`M8 13V3M4 7l4-4 4 4`:`M8 3v10M4 9l4 4 4-4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}})),f=t({Down:()=>h,Neutral:()=>g,Up:()=>m,WithoutIcon:()=>_,__namedExportsOrder:()=>v,default:()=>p}),p,m,h,g,_,v,y=e((()=>{d(),p={title:`JS Packages/Charts Library/Components/Trend Indicator`,component:s,parameters:{layout:`centered`},argTypes:{direction:{control:{type:`radio`},options:[`up`,`down`,`neutral`]},value:{control:`text`},showIcon:{control:`boolean`}}},m={args:{direction:`up`,value:`+14%`}},h={args:{direction:`down`,value:`-5%`}},g={args:{direction:`neutral`,value:`0%`}},_={args:{direction:`up`,value:`+14%`,showIcon:!1}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'up',
    value: '+14%'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'down',
    value: '-5%'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'neutral',
    value: '0%'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'up',
    value: '+14%',
    showIcon: false
  }
}`,..._.parameters?.docs?.source}}},v=[`Up`,`Down`,`Neutral`,`WithoutIcon`]}));y();export{h as Down,g as Neutral,m as Up,_ as WithoutIcon,v as __namedExportsOrder,p as default,y as n,f as t};