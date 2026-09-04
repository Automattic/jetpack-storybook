import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{n,t as r}from"./clsx-SUvPW2lx.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{r as a,t as o}from"./chart-scope-CpwP0zC4.js";var s,c=t((()=>{s={"trend-indicator":`_trend-indicator_8kdk7_1`,"trend-indicator--up":`_trend-indicator--up_8kdk7_9`,"trend-indicator--down":`_trend-indicator--down_8kdk7_12`,"trend-indicator--neutral":`_trend-indicator--neutral_8kdk7_15`,"trend-indicator__icon":`_trend-indicator__icon_8kdk7_18`,"trend-indicator__value":`_trend-indicator__value_8kdk7_23`}}));function l({direction:e,value:t,className:n,style:i,showIcon:o=!0}){let c=`${d[e]}: ${t}`;return(0,u.jsxs)(`span`,{className:r(a(),s[`trend-indicator`],s[`trend-indicator--${e}`],n),style:i,"aria-label":c,children:[o&&(0,u.jsx)(f,{direction:e}),(0,u.jsx)(`span`,{className:s[`trend-indicator__value`],children:t})]})}var u,d,f,p=t((()=>{n(),o(),c(),u=i(),d={up:`Increase`,down:`Decrease`,neutral:`No change`},f=({direction:e})=>{if(e===`neutral`)return null;let t=e===`up`;return(0,u.jsx)(`svg`,{className:s[`trend-indicator__icon`],viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,u.jsx)(`path`,{d:t?`M8 13V3M4 7l4-4 4 4`:`M8 3v10M4 9l4 4 4-4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}})),m=e({Down:()=>_,Neutral:()=>v,Up:()=>g,WithoutIcon:()=>y,__namedExportsOrder:()=>b,default:()=>h}),h,g,_,v,y,b,x=t((()=>{p(),h={title:`JS Packages/Charts Library/Components/Trend Indicator`,component:l,parameters:{layout:`centered`},argTypes:{direction:{control:{type:`radio`},options:[`up`,`down`,`neutral`]},value:{control:`text`},showIcon:{control:`boolean`}}},g={args:{direction:`up`,value:`+14%`}},_={args:{direction:`down`,value:`-5%`}},v={args:{direction:`neutral`,value:`0%`}},y={args:{direction:`up`,value:`+14%`,showIcon:!1}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'up',
    value: '+14%'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'down',
    value: '-5%'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'neutral',
    value: '0%'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'up',
    value: '+14%',
    showIcon: false
  }
}`,...y.parameters?.docs?.source}}},b=[`Up`,`Down`,`Neutral`,`WithoutIcon`]}));x();export{_ as Down,v as Neutral,g as Up,y as WithoutIcon,b as __namedExportsOrder,h as default,x as n,m as t};