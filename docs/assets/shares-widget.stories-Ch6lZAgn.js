import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{N as i,t as a}from"./build-module-DMs68Vfd.js";import{n as o,vn as s}from"./build-module-Bt8gOW8e.js";import{T as c,in as l,kt as u,s as d}from"./hooks-CarZ30eZ.js";import{K as f,R as p,t as m}from"./build-module-BAze1CUO.js";import{t as h,v as ee}from"./src-CaCJrOts.js";import{t as te}from"./leaderboard-chart-C-5XAZ-c.js";import{n as g,t as _}from"./register-report-mocks-Kc4EQ2dV.js";import{t as v}from"./widget-state-BhQmNdN9.js";import{S as y,b,t as x,x as S,y as C}from"./src-B4R7bqCJ.js";var w,T,E,D,O,k=e((()=>{w=`_root_19s7c_1`,T=`_content_19s7c_9`,E=`_itemLabel_19s7c_17`,D=`_itemLabelText_19s7c_23`,O={root:w,content:T,itemLabel:E,itemLabelText:D}}));function ne(e){let t=e.replace(/-/g,`_`);return t.startsWith(`custom_`)?`custom`:t.startsWith(`google_plus`)?`google_plus`:t===`jetpack_whatsapp`?`whatsapp`:t}function A(e){return P[e]??e.split(`_`).filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `)}function j(e,t){let n=new Map;return Object.entries(e).forEach(([e,t])=>{if(!e.startsWith(N))return;let r=Number(t)||0;if(r<=0)return;let i=ne(e.slice(7)),a=n.get(i);n.set(i,{service:i,label:A(i),value:(a?.value??0)+r})}),[...n.values()].sort((e,t)=>t.value-e.value).slice(0,t>0?t:void 0)}function M({max:e}){let{data:t,isLoading:n,isFetching:r,isError:i,refetch:a}=u(),o=j(t?.stats??{},e);return{data:o,isLoading:n,isFetching:r,isError:o.length===0&&i,refetch:a}}var N,P,F=e((()=>{n(),c(),N=`shares_`,P={facebook:`Facebook`,twitter:`Twitter`,linkedin:`LinkedIn`,tumblr:`Tumblr`,pinterest:`Pinterest`,reddit:`Reddit`,pocket:`Pocket`,telegram:`Telegram`,whatsapp:`WhatsApp`,skype:`Skype`,google_plus:`Google+`,print:`Print`,email:`Email`,press_this:`Press This`,custom:t(`Custom share buttons`,`jetpack-premium-analytics`)}}));function I({max:e=10}){let{data:n,isLoading:r,isFetching:a,isError:o,refetch:s}=M({max:e}),c=(0,i.useMemo)(()=>{let e=Math.max(...n.map(e=>e.value),0);return n.map((t,n)=>({id:`${n}-${t.service}`,label:(0,R.jsx)(p,{align:`center`,className:O.itemLabel,children:(0,R.jsx)(f,{className:O.itemLabelText,children:t.label})}),currentValue:t.value,currentShare:e>0?t.value/e*100:0}))},[n]);return(0,R.jsx)(p,{className:O.root,children:(0,R.jsx)(`div`,{className:O.content,children:(0,R.jsx)(v,{isLoading:r,isFetching:a,isError:o,isEmpty:n.length===0,error:{description:t(`We couldn't load shares. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:s}]},empty:{icon:ee,description:t(`Learn where your content has been shared the most.`,`jetpack-premium-analytics`)},children:(0,R.jsx)(te,{data:c,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})})})}function L({attributes:e={}}){return(0,R.jsx)(d,{attributes:e,children:(0,R.jsx)(I,{max:e.max})})}var R,z=e((()=>{x(),h(),a(),n(),m(),k(),F(),R=r()})),B,V=e((()=>{n(),o(),B={name:`jpa/shares`,title:t(`Shares`,`jetpack-premium-analytics`),icon:s,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}}));function H({withComparison:e}){return(0,G.jsx)(L,{attributes:{max:10,reportParams:l(e)}})}function U(e){return(0,G.jsx)(L,{...e})}function W({withComparison:e,...t}){return(0,G.jsx)(b,{...t,widgetType:q,renderModule:K,renderComponent:U,attributes:{max:10,reportParams:l(e)}})}var G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),S(),_(),z(),V(),G=r(),g(),K=`storybook/shares`,q={name:B.name,title:B.title,icon:B.icon,presentation:`framed`},J=e=>(0,G.jsx)(`div`,{style:{width:`380px`,height:`520px`,margin:`0 auto`,padding:`16px`,boxSizing:`border-box`,background:`#fff`,border:`1px solid #e0e0e0`,borderRadius:`8px`,overflow:`hidden`},children:(0,G.jsx)(e,{})}),Y={title:`Packages/Premium Analytics/Widgets/Shares`,component:L,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Shares" widget. Lists each social network the site's content was shared to, ranked by share count. Ported from the Jetpack Stats Shares module.`}}}},X={render:H,args:{withComparison:!1},decorators:[J]},Z={render:H,args:{withComparison:!0},decorators:[J],parameters:{docs:{description:{story:`The Shares module has no comparison data, so no period-over-period deltas are shown.`}}}},Q={render:e=>(0,G.jsx)(W,{...e}),args:{...C,withComparison:!0},argTypes:{...y,withComparison:{control:`boolean`}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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