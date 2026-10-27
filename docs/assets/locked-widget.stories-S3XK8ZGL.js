import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{E as n,T as r,n as i,r as a,w as o}from"./with-story-router-DWKuzvXm.js";var s,c,l,u,d,f,p,m,h,g,_;e((()=>{i(),n(),s=t(),c=`https://jetpack.com/support/jetpack-stats/traffic-dashboard/`,l=`https://wordpress.com/checkout/example.com/premium`,u={utm:{description:`Generate UTM parameters and track your <link>campaign performance data</link>.`,support_url:`${c}#harnessing-utm-stats-for-precision-tracking`,upgrade_url:l},devices:{description:`See which <link>devices, browsers and OS</link> your visitors are using.`,support_url:`${c}#devices-stats`,upgrade_url:l},"regions-cities":{description:`Access to <link>region and city stats</link> for more accurate analysis.`,support_url:`${c}#countries`,upgrade_url:l},insights:{description:`Upgrade your plan to unlock Jetpack Stats.`,support_url:``,upgrade_url:``}},d={title:`Packages/Premium Analytics/Widgets Toolkit/Components/LockedWidget`,component:r,tags:[`autodocs`],decorators:[a],parameters:{layout:`centered`,docs:{description:{component:`What a widget or report shows for a Stats feature the site's plan lacks: the server's sentence for the feature, with its support link, and an upgrade button when there is somewhere to buy it.`}}},argTypes:{feature:{control:`select`,options:Object.keys(u),description:"The locked feature, a key of `plan_gates.locked_features`."}},beforeEach:()=>{let e=window.JetpackScriptData;return window.JetpackScriptData={...e,premium_analytics:{...e?.premium_analytics,initial_full_sync_finished:1,plan_gates:{tier:`free`,locked_features:u,locked_widget_types:{}}}},()=>{window.JetpackScriptData=e}}},f=({title:e,children:t})=>(0,s.jsxs)(`div`,{style:{width:`760px`,height:`420px`,border:`1px solid var(--wpds-color-stroke-surface-neutral-weak)`,borderRadius:`var(--wpds-border-radius-md)`,background:`var(--wpds-color-background-surface-neutral)`,display:`flex`,flexDirection:`column`,overflow:`hidden`},children:[(0,s.jsx)(`div`,{style:{padding:`var(--wpds-dimension-gap-lg)`,fontWeight:600,color:`var(--wpds-color-foreground-content-neutral)`},children:e}),(0,s.jsx)(`div`,{style:{flex:1,display:`flex`},children:t})]}),p={args:{feature:`utm`},decorators:[e=>(0,s.jsx)(f,{title:`UTM`,children:(0,s.jsx)(e,{})})]},m={args:{feature:`insights`},decorators:p.decorators},h={args:{feature:`devices`},decorators:[e=>(0,s.jsx)(`div`,{style:{width:`360px`,height:`200px`,display:`flex`},children:(0,s.jsx)(e,{})})]},g={render:()=>(0,s.jsx)(o,{feature:`regions-cities`}),parameters:{layout:`padded`}},_=[`Default`,`GenericCopyWithoutUpgrade`,`ShortTile`,`Page`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    feature: 'utm'
  },
  decorators: [Story => <WidgetCard title="UTM">
                <Story />
            </WidgetCard>]
}`,...p.parameters?.docs?.source},description:{story:`The UTM widget locked, in a dashboard tile.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    feature: 'insights'
  },
  decorators: Default.decorators
}`,...m.parameters?.docs?.source},description:{story:`A feature with no sentence of its own, such as Insights, gets the generic one; with nowhere to buy it, no button.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    feature: 'devices'
  },
  decorators: [Story => <div style={{
    width: '360px',
    height: '200px',
    display: 'flex'
  }}>
                <Story />
            </div>]
}`,...h.parameters?.docs?.source},description:{story:`A short tile drops the lock and keeps the sentence and the button.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <LockedPage feature="regions-cities" />,
  parameters: {
    layout: 'padded'
  }
}`,...g.parameters?.docs?.source},description:{story:`A locked report tab, such as Regions on Locations.`,...g.parameters?.docs?.description}}}}))();export{p as Default,m as GenericCopyWithoutUpgrade,g as Page,h as ShortTile,_ as __namedExportsOrder,d as default};