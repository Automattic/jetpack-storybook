"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8145],{"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/legend/private/base-legend.module.scss":((A,c,e)=>{e.d(c,{A:()=>p});var n=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(n),f=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),r=e.n(f),y=r()(m());y.push([A.id,".NgiU8W_lQUoSKqXIqxXC{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.DwQ9JcgurjowRjLLzv_c{display:flex;flex-direction:column;gap:8px}.DwQ9JcgurjowRjLLzv_c.MT9mcYz8Ek_vT26jYopC{align-items:flex-start}.DwQ9JcgurjowRjLLzv_c.gpVkNZghqmee4u2LvNvh{align-items:center}.DwQ9JcgurjowRjLLzv_c.CDmnCovZhPjn73xia4fI{align-items:flex-end}.PvCFnH0zW2eGLQbdCc2Q{position:relative}.PvCFnH0zW2eGLQbdCc2Q.MT9mcYz8Ek_vT26jYopC{justify-content:flex-start}.PvCFnH0zW2eGLQbdCc2Q.gpVkNZghqmee4u2LvNvh{justify-content:center}.PvCFnH0zW2eGLQbdCc2Q.CDmnCovZhPjn73xia4fI{justify-content:flex-end}.Jqq6GCeOVCkUMqy08gcZ{position:relative}.Jqq6GCeOVCkUMqy08gcZ.MT9mcYz8Ek_vT26jYopC{justify-content:flex-start}.Jqq6GCeOVCkUMqy08gcZ.gpVkNZghqmee4u2LvNvh{justify-content:center}.Jqq6GCeOVCkUMqy08gcZ.CDmnCovZhPjn73xia4fI{justify-content:flex-end}.UfYhUkU9ZPz6DcLY7wl0{display:flex;align-items:center;font-size:.875rem}.lLYJR0fUtKH1gMi6exNQ{display:flex;align-items:center;gap:.5rem}.ATxvwQa2Eda1xQJn8ObK{word-wrap:break-word;overflow-wrap:break-word;white-space:normal;hyphens:auto}.LW9BTyyxYl8IPGrHXEBQ{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-shrink:1;min-width:0}.GXr45VutRwb0_K8o1P6z{font-weight:500;flex-shrink:0}",""]),y.locals={"legend--horizontal":"NgiU8W_lQUoSKqXIqxXC","legend--vertical":"DwQ9JcgurjowRjLLzv_c","legend--alignment-start":"MT9mcYz8Ek_vT26jYopC","legend--alignment-center":"gpVkNZghqmee4u2LvNvh","legend--alignment-end":"CDmnCovZhPjn73xia4fI","legend--position-top":"PvCFnH0zW2eGLQbdCc2Q","legend--position-bottom":"Jqq6GCeOVCkUMqy08gcZ","legend-item":"UfYhUkU9ZPz6DcLY7wl0","legend-item-label":"lLYJR0fUtKH1gMi6exNQ","legend-item-text--wrap":"ATxvwQa2Eda1xQJn8ObK","legend-item-text--ellipsis":"LW9BTyyxYl8IPGrHXEBQ","legend-item-value":"GXr45VutRwb0_K8o1P6z"};const p=y}),"../charts/src/components/leaderboard-chart/stories/index.stories.tsx":((A,c,e)=>{e.r(c),e.d(c,{AdvancedFormatting:()=>L,CurrencyFormatting:()=>u,CustomColors:()=>W,CustomLabel:()=>R,CustomLegendLabels:()=>i,Default:()=>_,EmptyData:()=>j,LargeValues:()=>S,Loading:()=>D,NegativeGrowth:()=>z,NumberFormatting:()=>o,OverlayLabelWithImage:()=>w,SmallDataset:()=>P,WithCompositionLegend:()=>s,WithLegend:()=>a,WithOverlayLabel:()=>E,WithoutComparison:()=>C,__namedExportsOrder:()=>d,default:()=>V});var n=e("../charts/src/providers/chart-context/themes.ts"),m=e("../charts/src/stories/chart-decorator.tsx"),f=e("../charts/src/stories/theme-config.tsx"),r=e("../charts/src/stories/sample-data/index.ts"),y=e("../charts/src/stories/legend-config.tsx"),p=e("../charts/src/utils/format-metric-value.ts"),M=e("../charts/src/utils/color-utils.ts"),v=e("../charts/src/components/leaderboard-chart/leaderboard-chart.tsx"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const V={title:"JS Packages/Charts/Types/Leaderboard Chart",component:v.A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of leaderboard entries to display",table:{type:{summary:"LeaderboardEntry[]"}}},withComparison:{control:"boolean",description:"Whether to show comparison data (previous period bars and delta values)",table:{defaultValue:{summary:"false"}}},primaryColor:{control:"color",description:"Primary color for current period bars",table:{defaultValue:{summary:n.zQ.leaderboardChart.primaryColor}}},secondaryColor:{control:"color",description:"Secondary color for comparison period bars",table:{defaultValue:{summary:n.zQ.leaderboardChart.secondaryColor}}},valueFormatter:{control:!1,description:"Custom formatter function for values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue with compact notation"}}},deltaFormatter:{control:!1,description:"Custom formatter function for delta values",table:{type:{summary:"(value: number) => string"},defaultValue:{summary:"formatMetricValue as percentage"}}},loading:{control:"boolean",description:"Whether the chart is in loading state",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class name for the chart container",table:{type:{summary:"string"}}},style:{control:"object",description:"Custom styling for the chart container",table:{type:{summary:"React.CSSProperties"}}},withOverlayLabel:{control:"boolean",description:"Whether to overlay the label on top of the bar",table:{defaultValue:{summary:"false"}}},legendShapeWidth:{control:"number",description:"Width of legend shapes in pixels",table:{category:"Legend",type:{summary:"number"},defaultValue:{summary:"8"}}},legendShapeHeight:{control:"number",description:"Height of legend shapes in pixels",table:{category:"Legend",type:{summary:"number"},defaultValue:{summary:"8"}}},legendLabels:{control:"object",description:"Custom labels for legend items",table:{category:"Legend",type:{summary:"{ primary?: string; comparison?: string }"},defaultValue:{summary:"undefined"}}},...m.xo,...y.r,...f.jW},args:{primaryColor:void 0,secondaryColor:void 0,themeName:"default",showLegend:!1,legendPosition:"bottom",legendAlignment:"center",legendOrientation:"horizontal",legendShape:"circle",legendShapeWidth:8,legendShapeHeight:8,withOverlayLabel:!1},decorators:[m.OI]},_={args:{data:r.EJ,withComparison:!0,loading:!1}},C={args:{data:r.EJ,withComparison:!1,loading:!1}},E={args:{data:r.EJ,withOverlayLabel:!0}},D={args:{data:r.EJ,withComparison:!0,loading:!0}},W={args:{data:r.EJ,withComparison:!0,loading:!1,primaryColor:"red",secondaryColor:"green"}},P={args:{data:r.mg,withComparison:!0,loading:!1}},j={args:{data:[],withComparison:!0,loading:!1}},S={args:{data:r.wP,withComparison:!0,loading:!1}},z={args:{data:r.Ff,withComparison:!0,loading:!1}},u={args:{data:r.EJ,withComparison:!0,loading:!1,valueFormatter:t=>(0,p.d)(t,"currency",{useMultipliers:!0,decimals:1}),deltaFormatter:t=>(0,p.d)(t/100,"average",{decimals:0})}},o={args:{data:r.EJ,withComparison:!0,loading:!1,valueFormatter:t=>(0,p.d)(t,"number",{useMultipliers:!1,decimals:0}),deltaFormatter:t=>(0,p.d)(t/100,"average",{decimals:1})}},N=({label:t,imageColor:h,style:b={}})=>(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px",...b},children:[(0,l.jsx)("img",{src:`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='${encodeURIComponent(h)}'/></svg>`,alt:"icon",style:{width:"28px",height:"28px",verticalAlign:"middle",borderRadius:"4px"}}),(0,l.jsx)("span",{style:{fontSize:"13px"},children:t})]}),R={args:{data:r.n$.map(t=>({...t,label:(0,l.jsx)(N,{label:t.label,imageColor:t.imageColor})})),withComparison:!1,loading:!1}},L={args:{data:r.wP,withComparison:!0,loading:!1,valueFormatter:t=>t>=1e6?(0,p.d)(t,"currency",{useMultipliers:!0,decimals:1}):(0,p.d)(t,"currency",{useMultipliers:!1,decimals:0}),deltaFormatter:t=>(0,p.d)(t/100,"average",{decimals:1,signDisplay:"always"})}},w={args:{data:r.n$.map(t=>({...t,label:(0,l.jsx)(N,{label:t.label,imageColor:t.imageColor,style:{padding:"6px"}})})),withComparison:!0,withOverlayLabel:!0,loading:!1,style:{"--a8c--charts--leaderboard--bar--border-radius":"4px",fontFamily:'"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'}},render:t=>{const h=t.themeName||"default",T=f.yI[h]?.leaderboardChart?.primaryColor||n.zQ.leaderboardChart.primaryColor,O=(0,M.j5)(T,.08);return(0,l.jsx)(v.A,{...t,primaryColor:O})}},a={args:{data:r.EJ,withComparison:!0,loading:!1,showLegend:!0}},i={args:{data:r.EJ,withComparison:!0,loading:!1,showLegend:!0,legendLabels:{primary:"Aug 11-Sep 9, 2025",comparison:"Jul 11-Aug 11, 2025"}}},s={render:t=>(0,l.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"start"},children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{style:{marginTop:0,marginBottom:"1rem"},children:"Traditional Props-based Legend"}),(0,l.jsx)(v.A,{...t,showLegend:!0})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{style:{marginTop:0,marginBottom:"1rem"},children:"Composition API with Legend Component"}),(0,l.jsx)(v.A,{...t,children:(0,l.jsx)(v.A.Legend,{shape:"circle",shapeWidth:8,shapeHeight:8,style:{marginTop:"16px"}})})]})]}),args:{data:r.EJ,withComparison:!0,loading:!1,legendLabels:{primary:"Aug 11-Sep 9, 2025",comparison:"Jul 11-Aug 11, 2025"}},parameters:{docs:{description:{story:"Demonstrates the composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control over legend positioning and styling."}}}},d=["Default","WithoutComparison","WithOverlayLabel","Loading","CustomColors","SmallDataset","EmptyData","LargeValues","NegativeGrowth","CurrencyFormatting","NumberFormatting","CustomLabel","AdvancedFormatting","OverlayLabelWithImage","WithLegend","CustomLegendLabels","WithCompositionLegend"];_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false
  }
}`,..._.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: false,
    loading: false
  }
}`,...C.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withOverlayLabel: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: true
  }
}`,...D.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    primaryColor: 'red',
    secondaryColor: 'green'
  }
}`,...W.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    data: smallDataset,
    withComparison: true,
    loading: false
  }
}`,...P.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    withComparison: true,
    loading: false
  }
}`,...j.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    data: largeValues,
    withComparison: true,
    loading: false
  }
}`,...S.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    data: negativeGrowth,
    withComparison: true,
    loading: false
  }
}`,...z.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    valueFormatter: (value: number) => formatMetricValue(value, 'currency', {
      useMultipliers: true,
      decimals: 1
    }),
    deltaFormatter: (value: number) => formatMetricValue(value / 100, 'average', {
      decimals: 0
    })
  }
}`,...u.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    valueFormatter: (value: number) => formatMetricValue(value, 'number', {
      useMultipliers: false,
      decimals: 0
    }),
    deltaFormatter: (value: number) => formatMetricValue(value / 100, 'average', {
      decimals: 1
    })
  }
}`,...o.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataWithImageColor.map(entry => ({
      ...entry,
      label: <CustomLabelComponent label={entry.label} imageColor={entry.imageColor} />
    })),
    withComparison: false,
    loading: false
  }
}`,...R.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    data: largeValues,
    withComparison: true,
    loading: false,
    valueFormatter: (value: number) => {
      if (value >= 1000000) {
        return formatMetricValue(value, 'currency', {
          useMultipliers: true,
          decimals: 1
        });
      }
      return formatMetricValue(value, 'currency', {
        useMultipliers: false,
        decimals: 0
      });
    },
    deltaFormatter: (value: number) => formatMetricValue(value / 100, 'average', {
      decimals: 1,
      signDisplay: 'always'
    })
  }
}`,...L.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataWithImageColor.map(entry => ({
      ...entry,
      label: <CustomLabelComponent label={entry.label} imageColor={entry.imageColor} style={{
        padding: '6px'
      }} />
    })),
    withComparison: true,
    withOverlayLabel: true,
    loading: false,
    style: {
      '--a8c--charts--leaderboard--bar--border-radius': '4px',
      fontFamily: \`"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif\`
    }
  },
  render: args => {
    const themeName = args.themeName || 'default';
    const theme = CHART_THEME_MAP[themeName];
    const primaryColor = theme?.leaderboardChart?.primaryColor || defaultTheme.leaderboardChart.primaryColor;
    const primaryColorWithAlpha = hexToRgba(primaryColor, 0.08);
    return <LeaderboardChart {...args} primaryColor={primaryColorWithAlpha} />;
  }
}`,...w.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    showLegend: true
  }
}`,...a.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    showLegend: true,
    legendLabels: {
      primary: 'Aug 11-Sep 9, 2025',
      comparison: 'Jul 11-Aug 11, 2025'
    }
  }
}`,...i.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'start'
  }}>
            <div>
                <h3 style={{
        marginTop: 0,
        marginBottom: '1rem'
      }}>Traditional Props-based Legend</h3>
                <LeaderboardChart {...args} showLegend={true} />
            </div>
            <div>
                <h3 style={{
        marginTop: 0,
        marginBottom: '1rem'
      }}>
                    Composition API with Legend Component
                </h3>
                <LeaderboardChart {...args}>
                    <LeaderboardChart.Legend shape="circle" shapeWidth={8} shapeHeight={8} style={{
          marginTop: '16px'
        }} />
                </LeaderboardChart>
            </div>
        </div>,
  args: {
    data: sampleData,
    withComparison: true,
    loading: false,
    legendLabels: {
      primary: 'Aug 11-Sep 9, 2025',
      comparison: 'Jul 11-Aug 11, 2025'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control over legend positioning and styling.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}}}),"../charts/src/components/legend/legend.tsx":((A,c,e)=>{e.d(c,{s:()=>w});var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),f=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),r=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),y=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),p=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendItem.js"),M=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendShape.js"),v=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendLabel.js"),l=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),g=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");function V(a=!0){const[i,s]=(0,n.useState)(!1),d=(0,n.useRef)(null);return[(0,n.useCallback)(h=>{if(d.current&&(d.current.disconnect(),d.current=null),h&&a){const b=()=>{const O=h.scrollWidth>h.clientWidth;s(O)};b();const T=new ResizeObserver(b);T.observe(h),d.current=T}else s(!1)},[a]),i]}var _=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts");function C(a){return a&&typeof a=="object"&&"value"in a&&typeof a.value<"u"?a.value:a}function E(a){return String(C(a))}function D({scale:a,labelFormat:i}){return(s,d)=>({datum:s,index:d,text:`${i(s,d)}`,value:a(s)})}var W=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),P=e.n(W),j=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/legend/private/base-legend.module.scss"),S={};S.insert="head",S.singleton=!1;var z=P()(j.A,S);const u=j.A.locals||{};var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const N={horizontal:"row",vertical:"column"},R=({text:a,textOverflow:i,maxWidth:s})=>{const d=s!=null&&i==="ellipsis",[t,h]=V(!!d);return(0,o.jsx)("span",{ref:t,className:(0,g.A)(u["legend-item-text"],s!=null&&u[`legend-item-text--${i}`]),style:{...s!=null&&{maxWidth:s,minWidth:0}},title:d&&h?a:void 0,children:a})},L=(0,n.forwardRef)(({items:a,className:i,orientation:s="horizontal",position:d="bottom",alignment:t="center",maxWidth:h,textOverflow:b="wrap",shape:T="rect",fill:O=E,size:K=E,labelFormat:J=C,labelTransform:Q=D,shapeWidth:G=16,shapeHeight:H=16,shapeMargin:k="2px 4px 2px 0",labelAlign:Y="left",labelFlex:Z="0 0 auto",labelMargin:$="0 4px",itemMargin:X="0",itemDirection:ee="row",legendLabelProps:ae,...te},ne)=>{const q=(0,_.p)(),U=(0,l.A)({domain:a.map(I=>I.label),range:a.map(I=>I.color)}),re=U.domain(),se=(0,n.useCallback)(({index:I})=>a[I]?.shapeStyle,[a]);return(0,o.jsx)(y.A,{scale:U,labelFormat:J,labelTransform:Q,children:I=>(0,o.jsx)("div",{ref:ne,role:"list","data-testid":`legend-${s}`,className:(0,g.A)(u.legend,u[`legend--${s}`],u[`legend--alignment-${t}`],u[`legend--position-${d}`],i),style:{flexDirection:N[s],...q.legendContainerStyles},children:I.map((F,x)=>(0,o.jsxs)(p.A,{className:(0,g.A)("visx-legend-item",u["legend-item"]),"data-testid":"legend-item",margin:X,flexDirection:s==="vertical"&&t==="end"?"row-reverse":ee,...te,children:[a[x]?.renderGlyph?(0,o.jsx)("svg",{width:a[x]?.glyphSize*2,height:a[x]?.glyphSize*2,"data-testid":"legend-glyph",children:(0,o.jsx)(r.A,{children:a[x]?.renderGlyph({key:`legend-glyph-${F.text}`,datum:{},index:x,color:O(F),size:a[x]?.glyphSize,x:a[x]?.glyphSize,y:a[x]?.glyphSize})})}):(0,o.jsx)(M.A,{shape:T,height:H,width:G,margin:k,item:re[x],itemIndex:x,label:F,fill:O,size:K,shapeStyle:se}),(0,o.jsxs)(v.A,{className:(0,g.A)("visx-legend-label",u["legend-item-label"]),style:{justifyContent:Y,flex:Z,margin:$,...q.legendLabelStyles},...ae,children:[(0,o.jsx)(R,{text:F.text,textOverflow:b,maxWidth:h}),a.find(B=>B.label===F.text)?.value&&(0,o.jsxs)("span",{className:u["legend-item-value"],children:["\xA0",a.find(B=>B.label===F.text)?.value]})]})]},`legend-${F.text}-${x}`))})})});try{L.displayName="BaseLegend",L.__docgenInfo={description:"",displayName:"BaseLegend",props:{className:{defaultValue:null,description:"Classname to be applied to legend container.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Optional render function override.",name:"children",required:!1,type:{name:"(labels: { datum: any; index: number; text: string; value?: any; }[]) => React.ReactNode"}},style:{defaultValue:null,description:"Styles to be applied to the legend container.",name:"style",required:!1,type:{name:"React.CSSProperties"}},size:{defaultValue:null,description:"Legend item size accessor function.",name:"size",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string | number"}},fill:{defaultValue:null,description:"Legend item fill accessor function.",name:"fill",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string"}},shape:{defaultValue:{value:"rect"},description:"Legend shape string preset or Element or Component.",name:"shape",required:!1,type:{name:"LegendShape<any, any>"}},domain:{defaultValue:null,description:"Legend domain.",name:"domain",required:!1,type:{name:"any[]"}},shapeWidth:{defaultValue:{value:"16"},description:"Width of the legend shape.",name:"shapeWidth",required:!1,type:{name:"string | number"}},shapeHeight:{defaultValue:{value:"16"},description:"Height of the legend shape.",name:"shapeHeight",required:!1,type:{name:"string | number"}},shapeMargin:{defaultValue:{value:"2px 4px 2px 0"},description:"Margin of the legend shape.",name:"shapeMargin",required:!1,type:{name:"string | number"}},labelAlign:{defaultValue:{value:"left"},description:"Flex-box alignment of legend item labels.",name:"labelAlign",required:!1,type:{name:"string"}},labelFlex:{defaultValue:{value:"0 0 auto"},description:"Flex-box flex of legend item labels.",name:"labelFlex",required:!1,type:{name:"string | number"}},labelMargin:{defaultValue:{value:"0 4px"},description:"Margin of legend item labels.",name:"labelMargin",required:!1,type:{name:"string | number"}},itemMargin:{defaultValue:{value:"0"},description:"Margin of legend items.",name:"itemMargin",required:!1,type:{name:"string | number"}},itemDirection:{defaultValue:{value:"row"},description:"Flex direction of legend items.",name:"itemDirection",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"unset"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},labelFormat:{defaultValue:null,description:"Given a legend item and its index, returns an item label.",name:"labelFormat",required:!1,type:{name:"LabelFormatter<any>"}},labelTransform:{defaultValue:null,description:"Given the legend scale and labelFormatter, returns a label with datum, index, value, and label.",name:"labelTransform",required:!1,type:{name:"LabelFormatterFactory<ScaleOrdinal<any, any, never>>"}},legendLabelProps:{defaultValue:null,description:"Additional props to be set on LegendLabel.",name:"legendLabelProps",required:!1,type:{name:"Partial<LegendLabelProps>"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BaseLegendItem[]"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},position:{defaultValue:{value:"bottom"},description:"TODO: Add 'left' | 'right' positioning support in future implementation",name:"position",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},alignment:{defaultValue:{value:"center"},description:"",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},maxWidth:{defaultValue:null,description:`Maximum width for legend items. When set, text overflow behavior is controlled by textOverflow prop.
Should be a CSS value string (e.g. '200px', '50%', '10rem')`,name:"maxWidth",required:!1,type:{name:"string"}},textOverflow:{defaultValue:{value:"wrap"},description:`Controls how text behaves when it exceeds maxWidth.
- 'ellipsis': Truncate with ellipsis (ideal for widgets/small devices)
- 'wrap': Wrap text to multiple lines (default, ideal for larger displays)`,name:"textOverflow",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"ellipsis"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/private/base-legend.tsx#BaseLegend"]={docgenInfo:L.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/private/base-legend.tsx#BaseLegend"})}catch{}const w=(0,n.forwardRef)(({chartId:a,items:i,...s},d)=>{const t=(0,n.useContext)(m.m),h=(0,n.useContext)(f.O),b=a??h?.chartId,T=(0,n.useMemo)(()=>b&&t?t.getChartData(b)?.legendItems:void 0,[b,t]),O=i||T;return O?(0,o.jsx)(L,{ref:d,items:O,...s}):null});try{w.displayName="Legend",w.__docgenInfo={description:"",displayName:"Legend",props:{className:{defaultValue:null,description:"Classname to be applied to legend container.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Optional render function override.",name:"children",required:!1,type:{name:"(labels: { datum: any; index: number; text: string; value?: any; }[]) => React.ReactNode"}},style:{defaultValue:null,description:"Styles to be applied to the legend container.",name:"style",required:!1,type:{name:"React.CSSProperties"}},size:{defaultValue:null,description:"Legend item size accessor function.",name:"size",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string | number"}},position:{defaultValue:null,description:"TODO: Add 'left' | 'right' positioning support in future implementation",name:"position",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},fill:{defaultValue:null,description:"Legend item fill accessor function.",name:"fill",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},shape:{defaultValue:null,description:"Legend shape string preset or Element or Component.",name:"shape",required:!1,type:{name:"LegendShape<any, any>"}},maxWidth:{defaultValue:null,description:`Maximum width for legend items. When set, text overflow behavior is controlled by textOverflow prop.
Should be a CSS value string (e.g. '200px', '50%', '10rem')`,name:"maxWidth",required:!1,type:{name:"string"}},domain:{defaultValue:null,description:"Legend domain.",name:"domain",required:!1,type:{name:"any[]"}},shapeWidth:{defaultValue:null,description:"Width of the legend shape.",name:"shapeWidth",required:!1,type:{name:"string | number"}},shapeHeight:{defaultValue:null,description:"Height of the legend shape.",name:"shapeHeight",required:!1,type:{name:"string | number"}},shapeMargin:{defaultValue:null,description:"Margin of the legend shape.",name:"shapeMargin",required:!1,type:{name:"string | number"}},labelAlign:{defaultValue:null,description:"Flex-box alignment of legend item labels.",name:"labelAlign",required:!1,type:{name:"string"}},labelFlex:{defaultValue:null,description:"Flex-box flex of legend item labels.",name:"labelFlex",required:!1,type:{name:"string | number"}},labelMargin:{defaultValue:null,description:"Margin of legend item labels.",name:"labelMargin",required:!1,type:{name:"string | number"}},itemMargin:{defaultValue:null,description:"Margin of legend items.",name:"itemMargin",required:!1,type:{name:"string | number"}},itemDirection:{defaultValue:null,description:"Flex direction of legend items.",name:"itemDirection",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"unset"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},labelFormat:{defaultValue:null,description:"Given a legend item and its index, returns an item label.",name:"labelFormat",required:!1,type:{name:"LabelFormatter<any>"}},labelTransform:{defaultValue:null,description:"Given the legend scale and labelFormatter, returns a label with datum, index, value, and label.",name:"labelTransform",required:!1,type:{name:"LabelFormatterFactory<ScaleOrdinal<any, any, never>>"}},legendLabelProps:{defaultValue:null,description:"Additional props to be set on LegendLabel.",name:"legendLabelProps",required:!1,type:{name:"Partial<LegendLabelProps>"}},alignment:{defaultValue:null,description:"",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},textOverflow:{defaultValue:null,description:`Controls how text behaves when it exceeds maxWidth.
- 'ellipsis': Truncate with ellipsis (ideal for widgets/small devices)
- 'wrap': Wrap text to multiple lines (default, ideal for larger displays)`,name:"textOverflow",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"ellipsis"'}]}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"BaseLegendItem[]"}},chartId:{defaultValue:null,description:"",name:"chartId",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/legend.tsx#Legend"]={docgenInfo:w.__docgenInfo,name:"Legend",path:"../charts/src/components/legend/legend.tsx#Legend"})}catch{}}),"../charts/src/components/private/single-chart-context/single-chart-context.tsx":((A,c,e)=>{e.d(c,{O:()=>f,Z:()=>m});var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const m=(0,n.createContext)(null),f=m}),"../charts/src/components/private/with-responsive/with-responsive.tsx":((A,c,e)=>{e.d(c,{F:()=>r});var n=e("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f=({resizeDebounceTime:y=300,maxWidth:p=1200,aspectRatio:M=.5})=>{const{parentRef:v,width:l}=(0,n.A)({debounceTime:y,enableDebounceLeadingCall:!0}),g=l>0?Math.min(l,p):0,V=g*M;return{parentRef:v,width:g,height:V}};function r(y){return function({resizeDebounceTime:M=300,maxWidth:v=1200,aspectRatio:l=.5,...g}){const{parentRef:V,width:_,height:C}=f({resizeDebounceTime:M,maxWidth:v,aspectRatio:l});return(0,m.jsx)("div",{ref:V,style:{width:g.size??g.width??"100%",height:g.size??g.height??"auto"},children:(0,m.jsx)(y,{width:_,height:C,size:_,...g})})}}try{r.displayName="withResponsive",r.__docgenInfo={description:`A higher-order component that provides responsive dimensions
to the wrapped chart component using useParentSize from`,displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/with-responsive/with-responsive.tsx#withResponsive"]={docgenInfo:r.__docgenInfo,name:"withResponsive",path:"../charts/src/components/private/with-responsive/with-responsive.tsx#withResponsive"})}catch{}}),"../charts/src/stories/legend-config.tsx":((A,c,e)=>{e.d(c,{r:()=>n});const n={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'}};try{n.displayName="legendArgTypes",n.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:n.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}),"../charts/src/utils/create-composition.ts":((A,c,e)=>{e.d(c,{E:()=>n});function n(m,f){return Object.assign(m,f)}})}]);
