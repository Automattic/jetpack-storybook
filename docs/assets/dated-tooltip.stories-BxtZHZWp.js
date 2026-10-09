import{i as e}from"./preload-helper-usAeo7Bx.js";import{r as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Tn as i,jr as a,t as o}from"./build-module-Cm3Kd3py.js";import{r as s}from"./bounded-tooltip-A71robWl.js";import{t as c}from"./src-CZBHQCU6.js";import{n as l,t as u}from"./with-chart-theme-CKtyHit5.js";import{n as d,t as f}from"./dated-tooltip-CS49zoO-.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{c(),n(),o(),u(),d(),p=r(),m={title:`Packages/Premium Analytics/Widgets Toolkit/Components/DatedTooltip`,component:f,tags:[`autodocs`],decorators:[l],parameters:{layout:`centered`},render:e=>(0,p.jsx)(s,{children:(0,p.jsx)(f,{...e})})},h=e=>t(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),g=e=>t(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),_=e=>t(`%s Post published`,`%s Posts published`,e,`jetpack-premium-analytics-pkg`),v={stroke:`#3858E9`,strokeWidth:2},y={stroke:`#3858E9`,strokeDasharray:`4 4`,strokeWidth:1.5},b=[{key:`Views`,name:`Views`,countLabel:h,dataFormat:{type:`number`},indicator:{kind:`series`,style:v},value:130859,previous:{value:98765,indicator:{kind:`series`,style:y}}},{key:`Visitors`,name:`Visitors`,countLabel:g,dataFormat:{type:`number`},indicator:{kind:`series`,style:{stroke:`#008A20`,strokeWidth:2}},value:67365,previous:{value:51200,indicator:{kind:`series`,style:{stroke:`#008A20`,strokeDasharray:`4 4`,strokeWidth:1.5}}}},{key:`Views per visitor`,name:`Views per visitor`,dataFormat:{type:`average`},indicator:{kind:`icon`,icon:i},value:1.94,previous:{value:1.93,indicator:{kind:`icon`,icon:i}}},{key:`Posts published`,name:`Posts published`,countLabel:_,dataFormat:{type:`number`},indicator:{kind:`icon`,icon:a},value:16,previous:{value:12,indicator:{kind:`icon`,icon:a}}}],x=e=>e.map(e=>({...e,previous:void 0})),S={args:{indicatorType:`line`,model:{date:`September 18, 2026`,rows:x(b)}}},C={args:{indicatorType:`line`,model:{date:`September 18, 2026`,previousDate:`September 18, 2025`,rows:b}}},w={args:{indicatorType:`rect`,model:{date:`September 18, 2026`,previousDate:`September 18, 2025`,rows:b.map(e=>e.indicator.kind===`series`?{...e,indicator:{kind:`series`,style:{stroke:e.indicator.style.stroke}},previous:e.previous&&{...e.previous,indicator:{kind:`series`,style:{stroke:e.indicator.style.stroke,opacity:.5}}}}:e)}}},T={args:{indicatorType:`line`,model:{date:`March 1, 2026`,previousDate:`March 1, 2025`,rows:[{...b[0],value:null,previous:{value:0,indicator:{kind:`series`,style:y}}},{...b[1],previous:void 0},{...b[3],previous:{value:null,indicator:b[3].indicator}}]}}},E={args:{indicatorType:`line`,model:{date:`September 18, 2026`,rows:[{...b[0],previous:void 0},{key:`Orders`,name:`Orders`,dataFormat:{type:`number`},indicator:{kind:`blank`},value:42}]}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    indicatorType: 'line',
    model: {
      date: 'September 18, 2026',
      rows: withoutPrevious(ROWS)
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    indicatorType: 'line',
    model: {
      date: 'September 18, 2026',
      previousDate: 'September 18, 2025',
      rows: ROWS
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    indicatorType: 'rect',
    model: {
      date: 'September 18, 2026',
      previousDate: 'September 18, 2025',
      rows: ROWS.map(row => row.indicator.kind === 'series' ? {
        ...row,
        indicator: {
          kind: 'series',
          style: {
            stroke: row.indicator.style.stroke
          }
        },
        previous: row.previous && {
          ...row.previous,
          indicator: {
            kind: 'series',
            style: {
              stroke: row.indicator.style.stroke,
              opacity: 0.5
            }
          }
        }
      } : row)
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    indicatorType: 'line',
    model: {
      date: 'March 1, 2026',
      previousDate: 'March 1, 2025',
      rows: [{
        ...ROWS[0],
        value: null,
        previous: {
          value: 0,
          indicator: {
            kind: 'series',
            style: LINE_PREVIOUS
          }
        }
      }, {
        ...ROWS[1],
        previous: undefined
      }, {
        ...ROWS[3],
        previous: {
          value: null,
          indicator: ROWS[3].indicator
        }
      }]
    }
  }
}`,...T.parameters?.docs?.source},description:{story:`A bucket with no reading shows a dash in place of the value, in either column.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    indicatorType: 'line',
    model: {
      date: 'September 18, 2026',
      rows: [{
        ...ROWS[0],
        previous: undefined
      }, {
        key: 'Orders',
        name: 'Orders',
        dataFormat: {
          type: 'number'
        },
        indicator: {
          kind: 'blank'
        },
        value: 42
      }]
    }
  }
}`,...E.parameters?.docs?.source},description:{story:`A row the chart does not draw and that names no icon keeps the swatch's width blank.`,...E.parameters?.docs?.description}}},D=[`LineChart`,`LineChartWithComparison`,`BarChartWithComparison`,`MissingReadings`,`ExtraRowWithoutIcon`]}))();export{w as BarChartWithComparison,E as ExtraRowWithoutIcon,S as LineChart,C as LineChartWithComparison,T as MissingReadings,D as __namedExportsOrder,m as default};