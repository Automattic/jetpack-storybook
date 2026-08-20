import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{Er as n,Ht as r,_c as i,n as a,vi as o}from"./build-module-CDRs4YxF.js";import{i as s,n as c,r as l,t as u}from"./metric-tile-grid-skeleton-7D8gKbdh.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{a(),s(),c(),d=t(),f={type:`number`,options:{useMultipliers:!0,decimals:0}},p=[{key:`posts`,icon:n,label:`Posts`,value:12},{key:`words`,icon:o,label:`Words`,value:34567},{key:`likes`,icon:r,label:`Likes`,value:891},{key:`comments`,icon:i,label:`Comments`,value:42}],m=(e,t)=>function(n){return(0,d.jsx)(`div`,{style:{width:e,height:t,border:`1px solid var(--wpds-color-stroke-surface-neutral-weak)`,borderRadius:`var(--wpds-border-radius-md)`,background:`var(--wpds-color-background-surface-neutral)`,padding:`var(--wpds-dimension-padding-lg)`,boxSizing:`border-box`,display:`flex`,flexDirection:`column`,overflow:`hidden`},children:(0,d.jsx)(n,{})})},h={title:`Packages/Premium Analytics/Widgets Toolkit/Components/MetricTileGrid`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:`Responsive grid of metric tiles that follows the widget cell size and picks its own layout — no column count needed. A narrow cell renders compact rows (icon and label on the left, value on the right); a wide but short cell spreads the tiles across a single row; a wide and tall cell uses a balanced two-column grid of large centered tiles.`}}}},g={args:{tiles:p,dataFormat:f},decorators:[m(`100%`,`480px`)]},_={args:{tiles:p,dataFormat:f},decorators:[m(`360px`,`480px`)]},v={args:{tiles:p,dataFormat:f},decorators:[m(`100%`,`220px`)]},y={args:{tiles:p,dataFormat:f},decorators:[m(`1026px`,`280px`)]},b={args:{tiles:p.slice(0,3),dataFormat:f},decorators:[m(`100%`,`480px`)]},x={args:{dataFormat:f,tiles:[{key:`views`,icon:n,label:`Views`,value:18400,previousValue:16100},{key:`visitors`,icon:r,label:`Visitors`,value:12100,previousValue:10800,note:`Sum of daily visitors — a returning visitor is counted once per day.`},{key:`likes`,icon:r,label:`Likes`,value:842,previousValue:905},{key:`comments`,icon:i,label:`Comments`,value:296,previousValue:null}]},decorators:[m(`100%`,`320px`)]},S={args:{tiles:[{key:`openRate`,icon:n,label:`Open rate`,value:null,dataFormat:{type:`percentage`,options:{decimals:1}}},{key:`clickRate`,icon:r,label:`Click rate`,value:.381,dataFormat:{type:`percentage`,options:{decimals:1}}}]},decorators:[m(`100%`,`320px`)]},C={render:e=>(0,d.jsx)(u,{...e}),args:{tiles:4},decorators:[m(`100%`,`480px`)]},w={render:e=>(0,d.jsx)(u,{...e}),args:{tiles:4},decorators:[m(`360px`,`320px`)]},T={render:e=>(0,d.jsx)(u,{...e}),args:{tiles:4},decorators:[m(`720px`,`140px`)]},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    tiles: TILES,
    dataFormat: COUNT_FORMAT
  },
  decorators: [makeCanvas('100%', '480px')]
}`,...g.parameters?.docs?.source},description:{story:`Wide and tall: a balanced two-column grid of large centered tiles.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    tiles: TILES,
    dataFormat: COUNT_FORMAT
  },
  decorators: [makeCanvas('360px', '480px')]
}`,..._.parameters?.docs?.source},description:{story:`A narrow container renders the compact row layout regardless of the
viewport, because the grid follows its own rendered size.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    tiles: TILES,
    dataFormat: COUNT_FORMAT
  },
  decorators: [makeCanvas('100%', '220px')]
}`,...v.parameters?.docs?.source},description:{story:`A wide but short container spreads the tiles across a single row — the column
count follows the number of tiles, so four tiles render one-by-four.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    tiles: TILES,
    dataFormat: COUNT_FORMAT
  },
  decorators: [makeCanvas('1026px', '280px')]
}`,...y.parameters?.docs?.source},description:{story:`The same tiles in a very wide, short cell — still one row, just more room per
tile. This mirrors the wide dashboard-cell case.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    tiles: TILES.slice(0, 3),
    dataFormat: COUNT_FORMAT
  },
  decorators: [makeCanvas('100%', '480px')]
}`,...b.parameters?.docs?.source},description:{story:`Three tiles: the layout still balances without an awkward orphan row — one row
when short, and a filled two-column grid when tall.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
  decorators: [makeCanvas('100%', '480px')]
}`,...C.parameters?.docs?.source},description:{story:"The loading shape widgets pass through `WidgetState`'s `renderLoading`, wide\nenough for the side-by-side arrangement: one label and value placeholder per\nmetric, centred in the widget body.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <MetricTileGridSkeleton {...args} />,
  args: {
    tiles: 4
  },
  decorators: [makeCanvas('360px', '320px')]
}`,...w.parameters?.docs?.source},description:{story:`A 360px dashboard tile — the common width, and below the threshold where the
loaded grid lays its tiles out in a row. The shape stacks full-width rows to
match, rather than wrapping into a block of cards.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <MetricTileGridSkeleton {...args} />,
  args: {
    tiles: 4
  },
  decorators: [makeCanvas('720px', '140px')]
}`,...T.parameters?.docs?.source},description:{story:`A wide, height-1 dashboard tile: the tiles stay on one row and the shape
centres in what little height the cell has.`,...T.parameters?.docs?.description}}},E=[`Default`,`NarrowContainer`,`WideShort`,`WideShortRoomy`,`ThreeTiles`,`WithComparison`,`WithPlaceholderValue`,`Skeleton`,`SkeletonNarrowTile`,`SkeletonShortTile`]}))();export{g as Default,_ as NarrowContainer,C as Skeleton,w as SkeletonNarrowTile,T as SkeletonShortTile,b as ThreeTiles,v as WideShort,y as WideShortRoomy,x as WithComparison,S as WithPlaceholderValue,E as __namedExportsOrder,h as default};