import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,t as r}from"./with-chart-theme-Dzq-u7P_.js";import{n as i,t as a}from"./leaderboard-chart-CjkzsgMY.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{r(),i(),o=t(),s={title:`Packages/Premium Analytics/Widgets Toolkit/Components/LeaderboardChart`,component:a,tags:[`autodocs`],parameters:{docs:{description:{component:`Generic LeaderboardChart component for displaying ranking/leaderboard data. Used for "top X by Y" type visualizations (e.g., sales by source, by channel, by campaign).`}}},decorators:[n]},c=[{id:`1`,label:`Direct traffic`,currentValue:125e3,previousValue:98e3,currentShare:42,previousShare:35,delta:27.55},{id:`2`,label:`Google Ads`,currentValue:87500,previousValue:92e3,currentShare:29,previousShare:33,delta:-4.89},{id:`3`,label:`Email campaign`,currentValue:53e3,previousValue:61e3,currentShare:18,previousShare:22,delta:-13.11},{id:`4`,label:`Social media`,currentValue:31500,previousValue:28e3,currentShare:11,previousShare:10,delta:12.5}],l=[{id:`1`,label:`Very Long Campaign Name That Might Need To Be Truncated`,currentValue:125e3,previousValue:98e3,currentShare:45,previousShare:38,delta:27.55},{id:`2`,label:`Another Extremely Long Label For Testing`,currentValue:87500,previousValue:92e3,currentShare:32,previousShare:36,delta:-4.89},{id:`3`,label:`Medium length label`,currentValue:63e3,previousValue:67e3,currentShare:23,previousShare:26,delta:-5.97}],u={args:{data:c,withComparison:!1}},d={args:{data:c,withComparison:!0,legendLabels:{primary:`Jan 1 – 31, 2025`,comparison:`Dec 1 – 31, 2024`}}},f={args:{data:c,loading:!0,withComparison:!0}},p={args:{data:[],emptyStateText:`No data available for this period`}},m={args:{data:c,withOverlayLabel:!0,withComparison:!0}},h={args:{data:c,withComparison:!0,showLegend:!1}},g={args:{data:l,withComparison:!0}},_={args:{data:c,withComparison:!0,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}}},v={args:{data:[{id:`1`,label:`Conversion rate A`,currentValue:.0435,previousValue:.038,currentShare:48,previousShare:42,delta:14.47},{id:`2`,label:`Conversion rate B`,currentValue:.0312,previousValue:.035,currentShare:34,previousShare:38,delta:-10.86},{id:`3`,label:`Conversion rate C`,currentValue:.0163,previousValue:.018,currentShare:18,previousShare:20,delta:-9.44}],withComparison:!0,dataFormat:{type:`percentage`,options:{decimals:2}}}},y=(e,t=`auto`)=>n=>(0,o.jsx)(`div`,{style:{width:e,height:t,border:`1px dashed #ccc`,borderRadius:`8px`,padding:`16px`,background:`#fafafa`,containerType:`inline-size`,containerName:`widget`},children:(0,o.jsx)(n,{})}),b={args:{data:c,withComparison:!0},decorators:[y(`256px`)]},x={args:{data:c,withComparison:!0},decorators:[y(`448px`)]},S={args:{data:c,withComparison:!0},decorators:[y(`576px`)]},C={decorators:[e=>(0,o.jsx)(`div`,{style:{width:400,height:350,resize:`both`,overflow:`auto`,border:`1px dashed #ccc`,padding:16,minWidth:200,maxWidth:800},children:(0,o.jsx)(e,{})})],args:{data:c,withComparison:!0},parameters:{layout:`padded`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockLeaderboardData,
    withComparison: false
  }
}`,...u.parameters?.docs?.source},description:{story:`Default state showing leaderboard without comparison`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockLeaderboardData,
    withComparison: true,
    legendLabels: {
      primary: 'Jan 1 – 31, 2025',
      comparison: 'Dec 1 – 31, 2024'
    }
  }
}`,...d.parameters?.docs?.source},description:{story:`With comparison period enabled - shows delta and previous period data`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockLeaderboardData,
    loading: true,
    withComparison: true
  }
}`,...f.parameters?.docs?.source},description:{story:`Loading state`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    emptyStateText: 'No data available for this period'
  }
}`,...p.parameters?.docs?.source},description:{story:`Empty state - no data available`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockLeaderboardData,
    withOverlayLabel: true,
    withComparison: true
  }
}`,...m.parameters?.docs?.source},description:{story:`With overlay label - label displayed on top of bar`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockLeaderboardData,
    withComparison: true,
    showLegend: false
  }
}`,...h.parameters?.docs?.source},description:{story:`Without legend`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockLongLabelData,
    withComparison: true
  }
}`,...g.parameters?.docs?.source},description:{story:`With long labels to test truncation`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockLeaderboardData,
    withComparison: true,
    dataFormat: {
      type: 'number',
      options: {
        useMultipliers: true,
        decimals: 0
      }
    }
  }
}`,..._.parameters?.docs?.source},description:{story:`Number format (no currency)`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      id: '1',
      label: 'Conversion rate A',
      currentValue: 0.0435,
      previousValue: 0.038,
      currentShare: 48,
      previousShare: 42,
      delta: 14.47
    }, {
      id: '2',
      label: 'Conversion rate B',
      currentValue: 0.0312,
      previousValue: 0.035,
      currentShare: 34,
      previousShare: 38,
      delta: -10.86
    }, {
      id: '3',
      label: 'Conversion rate C',
      currentValue: 0.0163,
      previousValue: 0.018,
      currentShare: 18,
      previousShare: 20,
      delta: -9.44
    }],
    withComparison: true,
    dataFormat: {
      type: 'percentage',
      options: {
        decimals: 2
      }
    }
  }
}`,...v.parameters?.docs?.source},description:{story:`Percentage format - displays conversion rates as percentages`,...v.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockLeaderboardData,
    withComparison: true
  },
  decorators: [createSizeDecorator('256px')]
}`,...b.parameters?.docs?.source},description:{story:`Extra extra small container (256px / xxs breakpoint)`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockLeaderboardData,
    withComparison: true
  },
  decorators: [createSizeDecorator('448px')]
}`,...x.parameters?.docs?.source},description:{story:`Medium container (448px / md breakpoint)`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockLeaderboardData,
    withComparison: true
  },
  decorators: [createSizeDecorator('576px')]
}`,...S.parameters?.docs?.source},description:{story:`Large container (576px / xl breakpoint)`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 400,
    height: 350,
    resize: 'both',
    overflow: 'auto',
    border: '1px dashed #ccc',
    padding: 16,
    minWidth: 200,
    maxWidth: 800
  }}>
                <Story />
            </div>],
  args: {
    data: mockLeaderboardData,
    withComparison: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...C.parameters?.docs?.source},description:{story:`Resizable: Demonstrates auto-resize behavior.
Drag the container edges to see the chart adapt to different widths.`,...C.parameters?.docs?.description}}},w=[`Default`,`WithComparison`,`Loading`,`EmptyState`,`WithOverlayLabel`,`WithoutLegend`,`LongLabels`,`NumberFormat`,`PercentageFormat`,`SizeXXSmall`,`SizeMedium`,`SizeLarge`,`Resizable`]}))();export{u as Default,p as EmptyState,f as Loading,g as LongLabels,_ as NumberFormat,v as PercentageFormat,C as Resizable,S as SizeLarge,x as SizeMedium,b as SizeXXSmall,d as WithComparison,m as WithOverlayLabel,h as WithoutLegend,w as __namedExportsOrder,s as default};