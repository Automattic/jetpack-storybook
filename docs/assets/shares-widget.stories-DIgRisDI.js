import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{N as i,t as a}from"./build-module-DMs68Vfd.js";import{n as o,vn as s}from"./build-module-Bt8gOW8e.js";import{K as c,R as l,t as u}from"./build-module-BAze1CUO.js";import{t as d,v as f}from"./src-CT5b53ej.js";import{Kn as p,gn as m,ut as h}from"./chart-tooltip-ClIvRUzH.js";import{t as ee}from"./leaderboard-chart-D4uyqD7q.js";import{S as g}from"./report-metric-C9QRZwAo.js";import{n as _,t as v}from"./register-report-mocks-CEOd2Lr0.js";import{t as y}from"./widget-state-CkRqQWXE.js";import{S as b,b as x,t as S,x as C,y as w}from"./src-DeeVzTNc.js";var T,E,D,O,k,te=e((()=>{T=`_root_19s7c_1`,E=`_content_19s7c_9`,D=`_itemLabel_19s7c_17`,O=`_itemLabelText_19s7c_23`,k={root:T,content:E,itemLabel:D,itemLabelText:O}}));function ne(e){let t=e.replace(/-/g,`_`);return t.startsWith(`custom_`)?`custom`:t.startsWith(`google_plus`)?`google_plus`:t===`jetpack_whatsapp`?`whatsapp`:t}function A(e){return P[e]??e.split(`_`).filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `)}function j(e,t){let n=new Map;return Object.entries(e).forEach(([e,t])=>{if(!e.startsWith(N))return;let r=Number(t)||0;if(r<=0)return;let i=ne(e.slice(7)),a=n.get(i);n.set(i,{service:i,label:A(i),value:(a?.value??0)+r})}),[...n.values()].sort((e,t)=>t.value-e.value).slice(0,t>0?t:void 0)}function M({max:e}){let{data:t,isLoading:n,isFetching:r,isError:i,refetch:a}=m(),o=j(t?.stats??{},e);return{data:o,isLoading:n,isFetching:r,isError:o.length===0&&i,refetch:a}}var N,P,F=e((()=>{n(),h(),N=`shares_`,P={facebook:`Facebook`,twitter:`Twitter`,linkedin:`LinkedIn`,tumblr:`Tumblr`,pinterest:`Pinterest`,reddit:`Reddit`,pocket:`Pocket`,telegram:`Telegram`,whatsapp:`WhatsApp`,skype:`Skype`,google_plus:`Google+`,print:`Print`,email:`Email`,press_this:`Press This`,custom:t(`Custom share buttons`,`jetpack-premium-analytics`)}}));function I({max:e=10}){let{data:n,isLoading:r,isFetching:a,isError:o,refetch:s}=M({max:e}),u=(0,i.useMemo)(()=>{let e=Math.max(...n.map(e=>e.value),0);return n.map((t,n)=>({id:`${n}-${t.service}`,label:(0,R.jsx)(l,{align:`center`,className:k.itemLabel,children:(0,R.jsx)(c,{className:k.itemLabelText,children:t.label})}),currentValue:t.value,currentShare:e>0?t.value/e*100:0}))},[n]);return(0,R.jsx)(l,{className:k.root,children:(0,R.jsx)(`div`,{className:k.content,children:(0,R.jsx)(y,{isLoading:r,isFetching:a,isError:o,isEmpty:n.length===0,error:{description:t(`We couldn't load shares. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:s}]},empty:{icon:f,description:t(`Learn where your content has been shared the most.`,`jetpack-premium-analytics`)},children:(0,R.jsx)(ee,{data:u,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})})})}function L({attributes:e={}}){return(0,R.jsx)(g,{attributes:e,children:(0,R.jsx)(I,{max:e.max})})}var R,z=e((()=>{S(),d(),a(),n(),u(),te(),F(),R=r()})),B,V=e((()=>{n(),o(),B={name:`jpa/shares`,title:t(`Shares`,`jetpack-premium-analytics`),help:{content:t(`Learn where your content has been shared the most.`,`jetpack-premium-analytics`)},icon:s,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}}));function H({withComparison:e}){return(0,G.jsx)(L,{attributes:{max:10,reportParams:p(e)}})}function U(e){return(0,G.jsx)(L,{...e})}function W({withComparison:e,...t}){return(0,G.jsx)(x,{...t,widgetType:q,renderModule:K,renderComponent:U,attributes:{max:10,reportParams:p(e)}})}var G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),C(),v(),z(),V(),G=r(),_(),K=`storybook/shares`,q={name:B.name,title:B.title,icon:B.icon,presentation:`framed`},J=e=>(0,G.jsx)(`div`,{style:{width:`380px`,height:`520px`,margin:`0 auto`,padding:`16px`,boxSizing:`border-box`,background:`#fff`,border:`1px solid #e0e0e0`,borderRadius:`8px`,overflow:`hidden`},children:(0,G.jsx)(e,{})}),Y={title:`Packages/Premium Analytics/Widgets/Shares`,component:L,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Shares" widget. Lists each social network the site's content was shared to, ranked by share count. Ported from the Jetpack Stats Shares module.`}}}},X={render:H,args:{withComparison:!1},decorators:[J]},Z={render:H,args:{withComparison:!0},decorators:[J],parameters:{docs:{description:{story:`The Shares module has no comparison data, so no period-over-period deltas are shown.`}}}},Q={render:e=>(0,G.jsx)(W,{...e}),args:{...w,withComparison:!0},argTypes:{...b,withComparison:{control:`boolean`}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderShares,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source},description:{story:`The widget on its own, populated from the mocked site summary.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderShares,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      description: {
        story: 'The Shares module has no comparison data, so no period-over-period deltas are shown.'
      }
    }
  }
}`,...Z.parameters?.docs?.source},description:{story:`Comparison state — the dashboard's comparison \`reportParams\` are present, but the
site summary has no comparison period, so the widget renders the same current
counts without period-over-period deltas.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <SharesDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    }
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{X as Default,Q as WidgetDashboardWithWidget,Z as WithComparison,$ as __namedExportsOrder,Y as default};