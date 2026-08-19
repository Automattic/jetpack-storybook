import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,t as r}from"./with-chart-theme-CJw3SHSL.js";import{i,n as a,r as o,t as s}from"./leaderboard-skeleton-C6zwVn4I.js";function c({height:e,width:t=`360px`,children:n}){return(0,l.jsx)(`div`,{style:{width:t,height:e,border:`1px solid var(--wpds-color-stroke-surface-neutral-weak)`,borderRadius:`var(--wpds-border-radius-md)`,background:`var(--wpds-color-background-surface-neutral)`,padding:`var(--wpds-dimension-padding-lg)`,boxSizing:`border-box`,display:`flex`,flexDirection:`column`,overflow:`hidden`},children:(0,l.jsx)(`div`,{style:{position:`relative`,flex:1,minHeight:0},children:n})})}var l,u=e((()=>{l=t()})),d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{u(),r(),i(),a(),d=t(),f={title:`Packages/Premium Analytics/Widgets Toolkit/Components/LeaderboardChart`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`Generic LeaderboardChart component for displaying ranking/leaderboard data. Used for "top X by Y" type visualizations (e.g., sales by source, by channel, by campaign).`}}},decorators:[n]},p=[{id:`1`,label:`Direct traffic`,currentValue:125e3,previousValue:98e3,currentShare:42,previousShare:35,delta:27.55},{id:`2`,label:`Google Ads`,currentValue:87500,previousValue:92e3,currentShare:29,previousShare:33,delta:-4.89},{id:`3`,label:`Email campaign`,currentValue:53e3,previousValue:61e3,currentShare:18,previousShare:22,delta:-13.11},{id:`4`,label:`Social media`,currentValue:31500,previousValue:28e3,currentShare:11,previousShare:10,delta:12.5}],m=[{id:`1`,label:`Very Long Campaign Name That Might Need To Be Truncated`,currentValue:125e3,previousValue:98e3,currentShare:45,previousShare:38,delta:27.55},{id:`2`,label:`Another Extremely Long Label For Testing`,currentValue:87500,previousValue:92e3,currentShare:32,previousShare:36,delta:-4.89},{id:`3`,label:`Medium length label`,currentValue:63e3,previousValue:67e3,currentShare:23,previousShare:26,delta:-5.97}],h={args:{data:p,withComparison:!1}},g={args:{data:p,withComparison:!0,legendLabels:{primary:`Jan 1 – 31, 2025`,comparison:`Dec 1 – 31, 2024`}}},_={args:{data:p,loading:!0,withComparison:!0}},v={args:{data:[],emptyStateText:`No data available for this period`}},y={args:{data:p,withOverlayLabel:!0,withComparison:!0}},b={args:{data:p,withComparison:!0,showLegend:!1}},x={args:{data:m,withComparison:!0}},S={args:{data:p,withComparison:!0,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}}},C={args:{data:[{id:`1`,label:`Conversion rate A`,currentValue:.0435,previousValue:.038,currentShare:48,previousShare:42,delta:14.47},{id:`2`,label:`Conversion rate B`,currentValue:.0312,previousValue:.035,currentShare:34,previousShare:38,delta:-10.86},{id:`3`,label:`Conversion rate C`,currentValue:.0163,previousValue:.018,currentShare:18,previousShare:20,delta:-9.44}],withComparison:!0,dataFormat:{type:`percentage`,options:{decimals:2}}}},w=(e,t=`auto`)=>n=>(0,d.jsx)(`div`,{style:{width:e,height:t,border:`1px dashed #ccc`,borderRadius:`8px`,padding:`16px`,background:`#fafafa`,containerType:`inline-size`,containerName:`widget`},children:(0,d.jsx)(n,{})}),T={args:{data:p,withComparison:!0},decorators:[w(`256px`)]},E={args:{data:p,withComparison:!0},decorators:[w(`448px`)]},D={args:{data:p,withComparison:!0},decorators:[w(`576px`)]},O={decorators:[e=>(0,d.jsx)(`div`,{style:{width:400,height:350,resize:`both`,overflow:`auto`,border:`1px dashed #ccc`,padding:16,minWidth:200,maxWidth:800},children:(0,d.jsx)(e,{})})],args:{data:p,withComparison:!0},parameters:{layout:`padded`}},k={render:e=>(0,d.jsx)(c,{width:`360px`,height:`320px`,children:(0,d.jsx)(s,{...e})}),args:{rows:5}},A={render:e=>(0,d.jsx)(c,{width:`360px`,height:`320px`,children:(0,d.jsx)(s,{...e})}),args:{rows:5,variant:`bars`}},j={render:e=>(0,d.jsx)(c,{width:`360px`,height:`140px`,children:(0,d.jsx)(s,{...e})}),args:{rows:8}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockLeaderboardData,
    withComparison: false
  }
}`,...h.parameters?.docs?.source},description:{story:`Default state showing leaderboard without comparison`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockLeaderboardData,
    withComparison: true,
    legendLabels: {
      primary: 'Jan 1 – 31, 2025',
      comparison: 'Dec 1 – 31, 2024'
    }
  }
}`,...g.parameters?.docs?.source},description:{story:`With comparison period enabled - shows delta and previous period data`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockLeaderboardData,
    loading: true,
    withComparison: true
  }
}`,..._.parameters?.docs?.source},description:{story:`Loading state`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    emptyStateText: 'No data available for this period'
  }
}`,...v.parameters?.docs?.source},description:{story:`Empty state - no data available`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockLeaderboardData,
    withOverlayLabel: true,
    withComparison: true
  }
}`,...y.parameters?.docs?.source},description:{story:`With overlay label - label displayed on top of bar`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockLeaderboardData,
    withComparison: true,
    showLegend: false
  }
}`,...b.parameters?.docs?.source},description:{story:`Without legend`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockLongLabelData,
    withComparison: true
  }
}`,...x.parameters?.docs?.source},description:{story:`With long labels to test truncation`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`Number format (no currency)`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`Percentage format - displays conversion rates as percentages`,...C.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockLeaderboardData,
    withComparison: true
  },
  decorators: [createSizeDecorator('256px')]
}`,...T.parameters?.docs?.source},description:{story:`Extra extra small container (256px / xxs breakpoint)`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockLeaderboardData,
    withComparison: true
  },
  decorators: [createSizeDecorator('448px')]
}`,...E.parameters?.docs?.source},description:{story:`Medium container (448px / md breakpoint)`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockLeaderboardData,
    withComparison: true
  },
  decorators: [createSizeDecorator('576px')]
}`,...D.parameters?.docs?.source},description:{story:`Large container (576px / xl breakpoint)`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`Resizable: Demonstrates auto-resize behavior.
Drag the container edges to see the chart adapt to different widths.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <WidgetCard width="360px" height="320px">
            <LeaderboardSkeleton {...args} />
        </WidgetCard>,
  args: {
    rows: 5
  }
}`,...k.parameters?.docs?.source},description:{story:"The loading shape widgets pass through `WidgetState`'s `renderLoading`, in the\ndefault `list` variant: the label and its value on one line, centred in the\nbody. A full-height tile fits every row the widget asked for.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <WidgetCard width="360px" height="320px">
            <LeaderboardSkeleton {...args} />
        </WidgetCard>,
  args: {
    rows: 5,
    variant: 'bars'
  }
}`,...A.parameters?.docs?.source},description:{story:"The `bars` variant, for a chart drawn without `withOverlayLabel`: the label\nsits above its bar, so the row loads as two lines rather than one.",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <WidgetCard width="360px" height="140px">
            <LeaderboardSkeleton {...args} />
        </WidgetCard>,
  args: {
    rows: 8
  }
}`,...j.parameters?.docs?.source},description:{story:`A height-1 dashboard tile. Too short to centre eight rows, so they pack from
the top and the tail is clipped rather than pushed past the widget body —
the rows the loaded chart's \`fitRows\` drops.`,...j.parameters?.docs?.description}}},M=[`Default`,`WithComparison`,`Loading`,`EmptyState`,`WithOverlayLabel`,`WithoutLegend`,`LongLabels`,`NumberFormat`,`PercentageFormat`,`SizeXXSmall`,`SizeMedium`,`SizeLarge`,`Resizable`,`Skeleton`,`SkeletonBars`,`SkeletonShortTile`]}))();export{h as Default,v as EmptyState,_ as Loading,x as LongLabels,S as NumberFormat,C as PercentageFormat,O as Resizable,D as SizeLarge,E as SizeMedium,T as SizeXXSmall,k as Skeleton,A as SkeletonBars,j as SkeletonShortTile,g as WithComparison,y as WithOverlayLabel,b as WithoutLegend,M as __namedExportsOrder,f as default};