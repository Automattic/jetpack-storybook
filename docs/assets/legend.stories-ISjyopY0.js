import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{t as n}from"./metric-delta-B2fYxnK1.js";import{t as r}from"./metric-delta-B8MhRR-T.js";import{i,n as a,r as o,t as s}from"./legend-pRl3xFOB.js";function c({children:e}){return(0,u.jsx)(`div`,{style:{display:`inline-grid`,gridTemplateColumns:`1fr auto auto`,gap:`4px 16px`,alignItems:`center`},children:e})}function l({children:e}){return(0,u.jsx)(`div`,{style:{width:164,resize:`horizontal`,overflow:`auto`,border:`1px dashed #ccc`,padding:8,minWidth:120,maxWidth:400},children:e})}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{r(),a(),o(),u=t(),d=[`#3858E9`,`#66BDFF`,`#A77EFF`,`#7B90FF`,`#EB6594`],f=[{label:`Mobile`,value:241950,displayValue:`R$ 241.95K`,color:d[0]},{label:`Desktop`,value:148130,displayValue:`R$ 148.13K`,color:d[1]},{label:`Tablet`,value:44740,displayValue:`R$ 44.74K`,color:d[2]}],p=[{label:`Mobile`,value:241950,displayValue:`R$ 241.95K`,color:d[0],comparison:2e5},{label:`Desktop`,value:148130,displayValue:`R$ 148.13K`,color:d[1],comparison:16e4},{label:`Tablet`,value:44740,displayValue:`R$ 44.74K`,color:d[2],comparison:44740}],m={title:`Packages/Premium Analytics/Widgets Toolkit/Components/Legend`,component:s,tags:[`autodocs`]},h={args:{items:f}},g={args:{items:p,withComparison:!0}},_={args:{items:p,withComparison:!0,hideValue:!0}},v={render:()=>(0,u.jsx)(c,{children:(0,u.jsx)(i,{value:`$1,234.56`,color:`#3858E9`,children:`Item Label`})})},y={render:()=>(0,u.jsx)(c,{children:(0,u.jsx)(i,{value:`$45,678`,color:`#3858E9`,comparison:(0,u.jsx)(n,{current:45678,previous:4e4}),children:`Revenue`})})},b={render:()=>(0,u.jsx)(c,{children:(0,u.jsx)(i,{value:`$2,345`,color:`#EB6594`,comparison:(0,u.jsx)(n,{current:2345,previous:3e3}),children:`Returns`})})},x=[{label:`Desktop Computer`,value:85e3,displayValue:`$85.142,00`,color:d[0],comparison:8e4},{label:`Mobile Phone`,value:45e3,displayValue:`$ 45.086,60`,color:d[1],comparison:4e4},{label:`Tablet Device`,value:15e3,displayValue:`$ 15.023,10`,color:d[2],comparison:18e3}],S={render:()=>(0,u.jsx)(l,{children:(0,u.jsx)(s,{items:x,withComparison:!0})})},C=[{label:`Mobile`,value:104e3,displayValue:`$104K`,color:d[0],comparison:5e3},{label:`Unassigned`,value:69e3,displayValue:`$69K`,color:d[1],comparison:12e3},{label:`Desktop`,value:28e3,displayValue:`$28K`,color:d[2],comparison:0},{label:`Tablet`,value:15e3,displayValue:`$15K`,color:d[3],comparison:0}],w={args:{items:C,withComparison:!0}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems
  }
}`,...h.parameters?.docs?.source},description:{story:`Default legend with items`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItemsWithComparison,
    withComparison: true
  }
}`,...g.parameters?.docs?.source},description:{story:`Legend with comparison deltas`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItemsWithComparison,
    withComparison: true,
    hideValue: true
  }
}`,..._.parameters?.docs?.source},description:{story:`Legend with hidden values - shows only labels and comparison deltas.
Useful for widgets like Sales by Coupon where absolute values
are already shown in the chart.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <GridWrapper>
            <LegendRow value="$1,234.56" color="#3858E9">
                Item Label
            </LegendRow>
        </GridWrapper>
}`,...v.parameters?.docs?.source},description:{story:`LegendRow: Basic row with label and value`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <GridWrapper>
            <LegendRow value="$45,678" color="#3858E9" comparison={<MetricDelta current={45678} previous={40000} />}>
                Revenue
            </LegendRow>
        </GridWrapper>
}`,...y.parameters?.docs?.source},description:{story:`LegendRow: With positive comparison delta`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <GridWrapper>
            <LegendRow value="$2,345" color="#EB6594" comparison={<MetricDelta current={2345} previous={3000} />}>
                Returns
            </LegendRow>
        </GridWrapper>
}`,...b.parameters?.docs?.source},description:{story:`LegendRow: With negative comparison delta`,...b.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <ResizableWrapper>
            <Legend items={longLabelItems} withComparison={true} />
        </ResizableWrapper>
}`,...S.parameters?.docs?.source},description:{story:`Resizable: Legend with comparison in narrow container.
Tests how delta indicators behave when space is limited.`,...S.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: itemsWithDashFallback,
    withComparison: true
  }
}`,...w.parameters?.docs?.source},description:{story:`WithComparisonDashFallback: Tests dash alignment with percentage values.
When previous period value is 0, a dash "—" is shown instead of percentage.
The dash should be right-aligned with the other delta percentages.`,...w.parameters?.docs?.description}}},T=[`Default`,`WithComparison`,`HiddenValues`,`Row`,`RowWithPositiveComparison`,`RowWithNegativeComparison`,`Resizable`,`WithComparisonDashFallback`]}))();export{h as Default,_ as HiddenValues,S as Resizable,v as Row,b as RowWithNegativeComparison,y as RowWithPositiveComparison,g as WithComparison,w as WithComparisonDashFallback,T as __namedExportsOrder,m as default};