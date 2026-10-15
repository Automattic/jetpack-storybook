import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,r,t as i}from"./locked-widget-TmLnI-ps.js";var a,o,s,c,l,u,d,f,p,m,h;e((()=>{r(),a=t(),o=`https://jetpack.com/support/jetpack-stats/traffic-dashboard/`,s=`https://wordpress.com/checkout/example.com/premium`,c={utm:{description:`Generate UTM parameters and track your <link>campaign performance data</link>.`,support_url:`${o}#harnessing-utm-stats-for-precision-tracking`,upgrade_url:s},devices:{description:`See which <link>devices, browsers and OS</link> your visitors are using.`,support_url:`${o}#devices-stats`,upgrade_url:s},"regions-cities":{description:`Access to <link>region and city stats</link> for more accurate analysis.`,support_url:`${o}#countries`,upgrade_url:s},insights:{description:`Upgrade your plan to unlock Jetpack Stats.`,support_url:``,upgrade_url:``}},l={title:`Packages/Premium Analytics/Widgets Toolkit/Components/LockedWidget`,component:n,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`What a widget or report shows for a Stats feature the site's plan lacks: the server's sentence for the feature, with its support link, and an upgrade button when there is somewhere to buy it.`}}},argTypes:{feature:{control:`select`,options:Object.keys(c),description:"The locked feature, a key of `plan_gates.locked_features`."}},beforeEach:()=>{let e=window.JetpackScriptData;return window.JetpackScriptData={...e,premium_analytics:{...e?.premium_analytics,initial_full_sync_finished:1,plan_gates:{tier:`free`,locked_features:c,locked_widget_types:{}}}},()=>{window.JetpackScriptData=e}}},u=({title:e,children:t})=>(0,a.jsxs)(`div`,{style:{width:`760px`,height:`420px`,border:`1px solid var(--wpds-color-stroke-surface-neutral-weak)`,borderRadius:`var(--wpds-border-radius-md)`,background:`var(--wpds-color-background-surface-neutral)`,display:`flex`,flexDirection:`column`,overflow:`hidden`},children:[(0,a.jsx)(`div`,{style:{padding:`var(--wpds-dimension-gap-lg)`,fontWeight:600,color:`var(--wpds-color-foreground-content-neutral)`},children:e}),(0,a.jsx)(`div`,{style:{flex:1,display:`flex`},children:t})]}),d={args:{feature:`utm`},decorators:[e=>(0,a.jsx)(u,{title:`UTM`,children:(0,a.jsx)(e,{})})]},f={args:{feature:`insights`},decorators:d.decorators},p={args:{feature:`devices`},decorators:[e=>(0,a.jsx)(`div`,{style:{width:`360px`,height:`200px`,display:`flex`},children:(0,a.jsx)(e,{})})]},m={render:()=>(0,a.jsx)(i,{feature:`regions-cities`}),parameters:{layout:`padded`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    feature: 'utm'
  },
  decorators: [Story => <WidgetCard title="UTM">
                <Story />
            </WidgetCard>]
}`,...d.parameters?.docs?.source},description:{story:`The UTM widget locked, in a dashboard tile.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    feature: 'insights'
  },
  decorators: Default.decorators
}`,...f.parameters?.docs?.source},description:{story:`A feature with no sentence of its own, such as Insights, gets the generic one; with nowhere to buy it, no button.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`A short tile drops the lock and keeps the sentence and the button.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <LockedPage feature="regions-cities" />,
  parameters: {
    layout: 'padded'
  }
}`,...m.parameters?.docs?.source},description:{story:`A locked report tab, such as Regions on Locations.`,...m.parameters?.docs?.description}}},h=[`Default`,`GenericCopyWithoutUpgrade`,`ShortTile`,`Page`]}))();export{d as Default,f as GenericCopyWithoutUpgrade,m as Page,p as ShortTile,h as __namedExportsOrder,l as default};