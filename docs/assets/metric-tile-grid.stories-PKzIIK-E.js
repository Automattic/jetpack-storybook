import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{Lt as n,Qs as r,hr as i,si as a,t as o}from"./build-module-D8x1-0PG.js";import{i as s}from"./charts-provider-BoFsWvxX.js";import{n as c}from"./use-element-size-Dwg7_1on.js";import{i as l,n as u,r as d,t as f}from"./metric-tile-grid-skeleton-DhOGMiMc.js";function p({children:e}){let[t,n]=c();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`p`,{style:{margin:`0 0 8px`,font:`12px/1.5 monospace`},children:`${n.width} × ${n.height} px`}),(0,m.jsx)(`div`,{style:{...v,width:720,height:380,minWidth:200,minHeight:100,maxWidth:`100%`,resize:`both`},children:(0,m.jsx)(`div`,{ref:t,style:{display:`flex`,flex:`1 1 0`,flexDirection:`column`,minHeight:0},children:e})})]})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{o(),s(),l(),u(),m=t(),h={type:`number`,options:{useMultipliers:!0,decimals:0}},g=[{key:`posts`,icon:i,label:`Posts`,value:12},{key:`words`,icon:a,label:`Words`,value:34567},{key:`likes`,icon:n,label:`Likes`,value:891},{key:`comments`,icon:r,label:`Comments`,value:42}],_=[...g,{key:`views`,icon:i,label:`Views`,value:18400},{key:`visitors`,icon:n,label:`Visitors`,value:12100},{key:`subscribers`,icon:r,label:`Subscribers`,value:1024},{key:`shares`,icon:a,label:`Shares`,value:77}],v={border:`1px solid var(--wpds-color-stroke-surface-neutral-weak)`,borderRadius:`var(--wpds-border-radius-md)`,background:`var(--wpds-color-background-surface-neutral)`,padding:`var(--wpds-dimension-padding-lg)`,boxSizing:`border-box`,display:`flex`,flexDirection:`column`,overflow:`hidden`},y=(e,t)=>function(n){return(0,m.jsx)(`div`,{style:{...v,width:e,height:t},children:(0,m.jsx)(n,{})})},b={title:`Packages/Premium Analytics/Widgets Toolkit/Components/MetricTileGrid`,component:d,tags:[`autodocs`],parameters:{docs:{description:{component:`Metric tiles laid out from the size of their own box, wherever the widget is placed. A narrow box gets a vertical list (icon and label on the left, value on the right): stretched to fill when each row has room, compact and scrolling when it does not. A wider box gets a single row of centered tiles, or a two-column grid once it is tall enough for every tile row, the last tile taking the whole row when the count is odd.`}}}},x={args:{tiles:g,dataFormat:h},decorators:[y(`720px`,`380px`)]},S={args:{tiles:g,dataFormat:h},decorators:[y(`360px`,`380px`)]},C={args:{tiles:g,dataFormat:h},decorators:[y(`360px`,`170px`)]},w={args:{tiles:g,dataFormat:h},decorators:[y(`720px`,`170px`)]},T={args:{tiles:g.slice(0,3),dataFormat:h},decorators:[y(`720px`,`380px`)]},E={render:({tileCount:e})=>(0,m.jsx)(p,{children:(0,m.jsx)(d,{tiles:_.slice(0,e),dataFormat:h})}),args:{tileCount:4},argTypes:{tileCount:{control:{type:`range`,min:1,max:_.length,step:1}}}},D={args:{dataFormat:h,tiles:[{key:`views`,icon:i,label:`Views`,value:18400,previousValue:16100},{key:`visitors`,icon:n,label:`Visitors`,value:12100,previousValue:10800,note:`Sum of daily visitors — a returning visitor is counted once per day.`},{key:`likes`,icon:n,label:`Likes`,value:842,previousValue:905},{key:`comments`,icon:r,label:`Comments`,value:296,previousValue:null}]},decorators:[y(`720px`,`320px`)]},O={args:{tiles:[{key:`openRate`,icon:i,label:`Open rate`,value:null,dataFormat:{type:`percentage`,options:{decimals:1}}},{key:`clickRate`,icon:n,label:`Click rate`,value:.381,dataFormat:{type:`percentage`,options:{decimals:1}}}]},decorators:[y(`720px`,`320px`)]},k={render:e=>(0,m.jsx)(f,{...e}),args:{tiles:4},decorators:[y(`720px`,`380px`)]},A={render:e=>(0,m.jsx)(f,{...e}),args:{tiles:4},decorators:[y(`360px`,`380px`)]},j={render:e=>(0,m.jsx)(f,{...e}),args:{tiles:4},decorators:[y(`360px`,`170px`)]},M={render:e=>(0,m.jsx)(f,{...e}),args:{tiles:4},decorators:[y(`720px`,`170px`)]},N=[`Default`,`Stacked`,`Compact`,`Row`,`ThreeTiles`,`Resizable`,`WithComparison`,`WithPlaceholderValue`,`Skeleton`,`SkeletonStacked`,`SkeletonCompact`,`SkeletonRow`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    tiles: TILES,
    dataFormat: COUNT_FORMAT
  },
  decorators: [makeCanvas('720px', '380px')]
}`,...x.parameters?.docs?.source},description:{story:`Wide and tall: a two-column grid of centered tiles.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    tiles: TILES,
    dataFormat: COUNT_FORMAT
  },
  decorators: [makeCanvas('360px', '380px')]
}`,...S.parameters?.docs?.source},description:{story:`Narrow and tall: the rows stretch to share the body.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    tiles: TILES,
    dataFormat: COUNT_FORMAT
  },
  decorators: [makeCanvas('360px', '170px')]
}`,...C.parameters?.docs?.source},description:{story:`Narrow and short: each row keeps its own height and the list scrolls.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    tiles: TILES,
    dataFormat: COUNT_FORMAT
  },
  decorators: [makeCanvas('720px', '170px')]
}`,...w.parameters?.docs?.source},description:{story:`Wide and short: one row of centered tiles.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    tiles: TILES.slice(0, 3),
    dataFormat: COUNT_FORMAT
  },
  decorators: [makeCanvas('720px', '380px')]
}`,...T.parameters?.docs?.source},description:{story:`Three tiles in a tall cell: the trailing tile takes the last row rather than
leaving half of it empty.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: ({
    tileCount
  }) => <ResizableCanvas>
            <MetricTileGrid tiles={MORE_TILES.slice(0, tileCount)} dataFormat={COUNT_FORMAT} />
        </ResizableCanvas>,
  args: {
    tileCount: 4
  },
  argTypes: {
    tileCount: {
      control: {
        type: 'range',
        min: 1,
        max: MORE_TILES.length,
        step: 1
      }
    }
  }
}`,...E.parameters?.docs?.source},description:{story:`Drag the corner of the box to resize it. The tiles are a list while the box
is narrow and sit side by side once it is wide enough, and each of the two
splits again by height: compact or stacked, row or grid. The height it takes
depends on how many tiles there are.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
  decorators: [makeCanvas('720px', '320px')]
}`,...D.parameters?.docs?.source},description:{story:"Setting a tile's `previousValue` opts it into the comparison layout, where the\nvalue renders with a period-over-period delta. A number shows the delta; an\nexplicit `null` (comparison requested but no comparable data) renders the\nvalue alone, so tiles stay consistently sized whether or not a comparison is\navailable. `note` adds a hover caveat mirrored as visually hidden text.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
  decorators: [makeCanvas('720px', '320px')]
}`,...O.parameters?.docs?.source},description:{story:`A \`null\` value renders the placeholder ("—" by default) instead of a
formatted zero — for metrics a site doesn't have yet, like a rate that
cannot be computed.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <MetricTileGridSkeleton {...args} />,
  args: {
    tiles: 4
  },
  decorators: [makeCanvas('720px', '380px')]
}`,...k.parameters?.docs?.source},description:{story:"The loading shape widgets pass through `WidgetState`'s `renderLoading`: one\nlabel and value placeholder per metric, in the grid arrangement here.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <MetricTileGridSkeleton {...args} />,
  args: {
    tiles: 4
  },
  decorators: [makeCanvas('360px', '380px')]
}`,...A.parameters?.docs?.source},description:{story:`Narrow and tall: the stand-ins stretch like the loaded rows do.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <MetricTileGridSkeleton {...args} />,
  args: {
    tiles: 4
  },
  decorators: [makeCanvas('360px', '170px')]
}`,...j.parameters?.docs?.source},description:{story:`Narrow and short: the stand-ins keep their own height, as the compact list
does.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <MetricTileGridSkeleton {...args} />,
  args: {
    tiles: 4
  },
  decorators: [makeCanvas('720px', '170px')]
}`,...M.parameters?.docs?.source},description:{story:`Wide and short: the stand-ins sit on one row.`,...M.parameters?.docs?.description}}}}))();export{C as Compact,x as Default,E as Resizable,w as Row,k as Skeleton,j as SkeletonCompact,M as SkeletonRow,A as SkeletonStacked,S as Stacked,T as ThreeTiles,D as WithComparison,O as WithPlaceholderValue,N as __namedExportsOrder,b as default};