import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{Ht as n,Sr as r,n as i,sc as a,ui as o}from"./build-module-_6UNQmiR.js";import{n as s,t as c}from"./metric-tile-grid-Btmw-XVO.js";var l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{i(),s(),l=t(),u={type:`number`,options:{useMultipliers:!0,decimals:0}},d=[{key:`posts`,icon:r,label:`Posts`,value:12},{key:`words`,icon:o,label:`Words`,value:34567},{key:`likes`,icon:n,label:`Likes`,value:891},{key:`comments`,icon:a,label:`Comments`,value:42}],f=(e,t)=>function(n){return(0,l.jsx)(`div`,{style:{width:e,height:t,display:`flex`,flexDirection:`column`},children:(0,l.jsx)(n,{})})},p={title:`Packages/Premium Analytics/Widgets Toolkit/Components/MetricTileGrid`,component:c,tags:[`autodocs`],parameters:{docs:{description:{component:`Responsive grid of metric tiles that follows the widget cell size and picks its own layout — no column count needed. A narrow cell renders compact rows (icon and label on the left, value on the right); a wide but short cell spreads the tiles across a single row; a wide and tall cell uses a balanced two-column grid of large centered tiles.`}}}},m={args:{tiles:d,dataFormat:u},decorators:[f(`100%`,`480px`)]},h={args:{tiles:d,dataFormat:u},decorators:[f(`360px`,`480px`)]},g={args:{tiles:d,dataFormat:u},decorators:[f(`100%`,`220px`)]},_={args:{tiles:d,dataFormat:u},decorators:[f(`1026px`,`280px`)]},v={args:{tiles:d.slice(0,3),dataFormat:u},decorators:[f(`100%`,`480px`)]},y={args:{tiles:[{key:`openRate`,icon:r,label:`Open rate`,value:null,dataFormat:{type:`percentage`,options:{decimals:1}}},{key:`clickRate`,icon:n,label:`Click rate`,value:.381,dataFormat:{type:`percentage`,options:{decimals:1}}}]},decorators:[f(`100%`,`320px`)]},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`A \`null\` value renders the placeholder ("—" by default) instead of a
formatted zero — for metrics a site doesn't have yet, like a rate that
cannot be computed.`,...y.parameters?.docs?.description}}},b=[`Default`,`NarrowContainer`,`WideShort`,`WideShortRoomy`,`ThreeTiles`,`WithPlaceholderValue`]}))();export{m as Default,h as NarrowContainer,v as ThreeTiles,g as WideShort,_ as WideShortRoomy,y as WithPlaceholderValue,b as __namedExportsOrder,p as default};