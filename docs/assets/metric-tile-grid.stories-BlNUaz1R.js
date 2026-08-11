import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{Er as n,Ht as r,_c as i,n as a,vi as o}from"./build-module-CDRs4YxF.js";import{n as s,t as c}from"./metric-tile-grid-CVizQuUL.js";var l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{a(),s(),l=t(),u={type:`number`,options:{useMultipliers:!0,decimals:0}},d=[{key:`posts`,icon:n,label:`Posts`,value:12},{key:`words`,icon:o,label:`Words`,value:34567},{key:`likes`,icon:r,label:`Likes`,value:891},{key:`comments`,icon:i,label:`Comments`,value:42}],f=(e,t)=>function(n){return(0,l.jsx)(`div`,{style:{width:e,height:t,display:`flex`,flexDirection:`column`},children:(0,l.jsx)(n,{})})},p={title:`Packages/Premium Analytics/Widgets Toolkit/Components/MetricTileGrid`,component:c,tags:[`autodocs`],parameters:{docs:{description:{component:`Responsive grid of metric tiles that follows the widget cell size and picks its own layout — no column count needed. A narrow cell renders compact rows (icon and label on the left, value on the right); a wide but short cell spreads the tiles across a single row; a wide and tall cell uses a balanced two-column grid of large centered tiles.`}}}},m={args:{tiles:d,dataFormat:u},decorators:[f(`100%`,`480px`)]},h={args:{tiles:d,dataFormat:u},decorators:[f(`360px`,`480px`)]},g={args:{tiles:d,dataFormat:u},decorators:[f(`100%`,`220px`)]},_={args:{tiles:d,dataFormat:u},decorators:[f(`1026px`,`280px`)]},v={args:{tiles:d.slice(0,3),dataFormat:u},decorators:[f(`100%`,`480px`)]},y={args:{dataFormat:u,tiles:[{key:`views`,icon:n,label:`Views`,value:18400,previousValue:16100},{key:`visitors`,icon:r,label:`Visitors`,value:12100,previousValue:10800,note:`Sum of daily visitors — a returning visitor is counted once per day.`},{key:`likes`,icon:r,label:`Likes`,value:842,previousValue:905},{key:`comments`,icon:i,label:`Comments`,value:296,previousValue:null}]},decorators:[f(`100%`,`320px`)]},b={args:{tiles:[{key:`openRate`,icon:n,label:`Open rate`,value:null,dataFormat:{type:`percentage`,options:{decimals:1}}},{key:`clickRate`,icon:r,label:`Click rate`,value:.381,dataFormat:{type:`percentage`,options:{decimals:1}}}]},decorators:[f(`100%`,`320px`)]},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    tiles: TILES,
    dataFormat: COUNT_FORMAT
  },
  decorators: [makeCanvas('100%', '480px')]
}`,...m.parameters?.docs?.source},description:{story:`Wide and tall: a balanced two-column grid of large centered tiles.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    tiles: TILES,
    dataFormat: COUNT_FORMAT
  },
  decorators: [makeCanvas('360px', '480px')]
}`,...h.parameters?.docs?.source},description:{story:`A narrow container renders the compact row layout regardless of the
viewport, because the grid follows its own rendered size.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    tiles: TILES,
    dataFormat: COUNT_FORMAT
  },
  decorators: [makeCanvas('100%', '220px')]
}`,...g.parameters?.docs?.source},description:{story:`A wide but short container spreads the tiles across a single row — the column
count follows the number of tiles, so four tiles render one-by-four.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    tiles: TILES,
    dataFormat: COUNT_FORMAT
  },
  decorators: [makeCanvas('1026px', '280px')]
}`,..._.parameters?.docs?.source},description:{story:`The same tiles in a very wide, short cell — still one row, just more room per
tile. This mirrors the wide dashboard-cell case.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    tiles: TILES.slice(0, 3),
    dataFormat: COUNT_FORMAT
  },
  decorators: [makeCanvas('100%', '480px')]
}`,...v.parameters?.docs?.source},description:{story:`Three tiles: the layout still balances without an awkward orphan row — one row
when short, and a filled two-column grid when tall.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:"Setting a tile's `previousValue` opts it into the comparison layout, where the\nvalue renders with a period-over-period delta. A number shows the delta; an\nexplicit `null` (comparison requested but no comparable data) renders the\nvalue alone, so tiles stay consistently sized whether or not a comparison is\navailable. `note` adds a hover caveat mirrored as visually hidden text.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`A \`null\` value renders the placeholder ("—" by default) instead of a
formatted zero — for metrics a site doesn't have yet, like a rate that
cannot be computed.`,...b.parameters?.docs?.description}}},x=[`Default`,`NarrowContainer`,`WideShort`,`WideShortRoomy`,`ThreeTiles`,`WithComparison`,`WithPlaceholderValue`]}))();export{m as Default,h as NarrowContainer,v as ThreeTiles,g as WideShort,_ as WideShortRoomy,y as WithComparison,b as WithPlaceholderValue,x as __namedExportsOrder,p as default};