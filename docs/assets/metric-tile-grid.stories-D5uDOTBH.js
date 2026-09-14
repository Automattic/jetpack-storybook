import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{Tr as n,Vt as r,bc as i,t as a,yi as o}from"./build-module-zwSmKorH.js";import{i as s,n as c,r as l,t as u}from"./metric-tile-grid-skeleton-BjZHrdzq.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{a(),s(),c(),d=t(),f={type:`number`,options:{useMultipliers:!0,decimals:0}},p=[{key:`posts`,icon:n,label:`Posts`,value:12},{key:`words`,icon:o,label:`Words`,value:34567},{key:`likes`,icon:r,label:`Likes`,value:891},{key:`comments`,icon:i,label:`Comments`,value:42}],m=(e,t)=>function(n){return(0,d.jsx)(`div`,{style:{width:e,height:t,border:`1px solid var(--wpds-color-stroke-surface-neutral-weak)`,borderRadius:`var(--wpds-border-radius-md)`,background:`var(--wpds-color-background-surface-neutral)`,padding:`var(--wpds-dimension-padding-lg)`,boxSizing:`border-box`,display:`flex`,flexDirection:`column`,overflow:`hidden`},children:(0,d.jsx)(n,{})})},h={title:`Packages/Premium Analytics/Widgets Toolkit/Components/MetricTileGrid`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:`Metric tiles laid out from the widget size, as in the design prototype. A one-column widget gets a vertical list (icon and label on the left, value on the right): stretched to fill when each row has room, compact and scrolling when it does not. A wider widget gets a single row of centered tiles, or a two-column grid once the body is tall enough for every tile row, the last tile taking the whole row when the count is odd.`}}}},g={args:{tiles:p,dataFormat:f},decorators:[m(`100%`,`380px`)]},_={args:{tiles:p,dataFormat:f},decorators:[m(`360px`,`380px`)]},v={args:{tiles:p,dataFormat:f},decorators:[m(`360px`,`170px`)]},y={args:{tiles:p,dataFormat:f},decorators:[m(`100%`,`170px`)]},b={args:{tiles:p.slice(0,3),dataFormat:f},decorators:[m(`100%`,`380px`)]},x={args:{dataFormat:f,tiles:[{key:`views`,icon:n,label:`Views`,value:18400,previousValue:16100},{key:`visitors`,icon:r,label:`Visitors`,value:12100,previousValue:10800,note:`Sum of daily visitors — a returning visitor is counted once per day.`},{key:`likes`,icon:r,label:`Likes`,value:842,previousValue:905},{key:`comments`,icon:i,label:`Comments`,value:296,previousValue:null}]},decorators:[m(`100%`,`320px`)]},S={args:{tiles:[{key:`openRate`,icon:n,label:`Open rate`,value:null,dataFormat:{type:`percentage`,options:{decimals:1}}},{key:`clickRate`,icon:r,label:`Click rate`,value:.381,dataFormat:{type:`percentage`,options:{decimals:1}}}]},decorators:[m(`100%`,`320px`)]},C={render:e=>(0,d.jsx)(u,{...e}),args:{tiles:4},decorators:[m(`100%`,`380px`)]},w={render:e=>(0,d.jsx)(u,{...e}),args:{tiles:4},decorators:[m(`360px`,`380px`)]},T={render:e=>(0,d.jsx)(u,{...e}),args:{tiles:4},decorators:[m(`360px`,`170px`)]},E={render:e=>(0,d.jsx)(u,{...e}),args:{tiles:4},decorators:[m(`720px`,`170px`)]},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    tiles: TILES,
    dataFormat: COUNT_FORMAT
  },
  decorators: [makeCanvas('100%', '380px')]
}`,...g.parameters?.docs?.source},description:{story:`Wide and tall: a two-column grid of centered tiles.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    tiles: TILES,
    dataFormat: COUNT_FORMAT
  },
  decorators: [makeCanvas('360px', '380px')]
}`,..._.parameters?.docs?.source},description:{story:`A one-column widget at height 2: the rows stretch to share the body.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    tiles: TILES,
    dataFormat: COUNT_FORMAT
  },
  decorators: [makeCanvas('360px', '170px')]
}`,...v.parameters?.docs?.source},description:{story:`A one-column widget at height 1: each row keeps its own height and the list
scrolls.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    tiles: TILES,
    dataFormat: COUNT_FORMAT
  },
  decorators: [makeCanvas('100%', '170px')]
}`,...y.parameters?.docs?.source},description:{story:`A wide widget at height 1: one row of centered tiles.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    tiles: TILES.slice(0, 3),
    dataFormat: COUNT_FORMAT
  },
  decorators: [makeCanvas('100%', '380px')]
}`,...b.parameters?.docs?.source},description:{story:`Three tiles in a tall cell: the trailing tile takes the last row rather than
leaving half of it empty.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    dataFormat: COUNT_FORMAT,
    tiles: [{
      key: 'views',
      icon: postList,
      label: 'Views',
      value: 18400,
      previousValue: 16100
    }, {
      key: 'visitors',
      icon: starEmpty,
      label: 'Visitors',
      value: 12100,
      previousValue: 10800,
      note: 'Sum of daily visitors — a returning visitor is counted once per day.'
    }, {
      key: 'likes',
      icon: starEmpty,
      label: 'Likes',
      value: 842,
      previousValue: 905
    },
    // Comparison requested but no comparable data: the value renders alone.
    {
      key: 'comments',
      icon: comment,
      label: 'Comments',
      value: 296,
      previousValue: null
    }]
  },
  decorators: [makeCanvas('100%', '320px')]
}`,...x.parameters?.docs?.source},description:{story:"Setting a tile's `previousValue` opts it into the comparison layout, where the\nvalue renders with a period-over-period delta. A number shows the delta; an\nexplicit `null` (comparison requested but no comparable data) renders the\nvalue alone, so tiles stay consistently sized whether or not a comparison is\navailable. `note` adds a hover caveat mirrored as visually hidden text.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    tiles: [{
      key: 'openRate',
      icon: postList,
      label: 'Open rate',
      value: null,
      dataFormat: {
        type: 'percentage',
        options: {
          decimals: 1
        }
      }
    }, {
      key: 'clickRate',
      icon: starEmpty,
      label: 'Click rate',
      value: 0.381,
      dataFormat: {
        type: 'percentage',
        options: {
          decimals: 1
        }
      }
    }]
  },
  decorators: [makeCanvas('100%', '320px')]
}`,...S.parameters?.docs?.source},description:{story:`A \`null\` value renders the placeholder ("—" by default) instead of a
formatted zero — for metrics a site doesn't have yet, like a rate that
cannot be computed.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <MetricTileGridSkeleton {...args} />,
  args: {
    tiles: 4
  },
  decorators: [makeCanvas('100%', '380px')]
}`,...C.parameters?.docs?.source},description:{story:"The loading shape widgets pass through `WidgetState`'s `renderLoading`: one\nlabel and value placeholder per metric, in the grid arrangement here.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <MetricTileGridSkeleton {...args} />,
  args: {
    tiles: 4
  },
  decorators: [makeCanvas('360px', '380px')]
}`,...w.parameters?.docs?.source},description:{story:`The stand-ins for a one-column widget at height 2 stretch like the loaded
rows do.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <MetricTileGridSkeleton {...args} />,
  args: {
    tiles: 4
  },
  decorators: [makeCanvas('360px', '170px')]
}`,...T.parameters?.docs?.source},description:{story:`A one-column widget at height 1: the stand-ins keep their own height, as the
compact list does.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <MetricTileGridSkeleton {...args} />,
  args: {
    tiles: 4
  },
  decorators: [makeCanvas('720px', '170px')]
}`,...E.parameters?.docs?.source},description:{story:`A wide, height-1 widget: the stand-ins sit on one row.`,...E.parameters?.docs?.description}}},D=[`Default`,`Stacked`,`Compact`,`Row`,`ThreeTiles`,`WithComparison`,`WithPlaceholderValue`,`Skeleton`,`SkeletonStacked`,`SkeletonCompact`,`SkeletonRow`]}))();export{v as Compact,g as Default,y as Row,C as Skeleton,T as SkeletonCompact,E as SkeletonRow,w as SkeletonStacked,_ as Stacked,b as ThreeTiles,x as WithComparison,S as WithPlaceholderValue,D as __namedExportsOrder,h as default};