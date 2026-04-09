import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{c as r,r as i,s as a,t as o}from"./chart-decorator-hbh9fWeF.js";import{ki as s,lr as c,nc as l,ur as u,wg as d,zh as f}from"./iframe-CMYV9EhU.js";import{b as p,y as m}from"./Line-BL10wT-R.js";import{A as h}from"./esm-C_v_o7BT.js";import{r as g,t as _}from"./legend-config--CzlDlxb.js";import{c as v,n as y,r as b}from"./sample-data-CBS5eoCH.js";import{t as x}from"./stories-B1ANXj9q.js";import{a as S,n as C,r as w,t as T}from"./pie-chart-CLHeeEB1.js";var E=e((()=>{m()})),D=n({Animation:()=>L,CustomLegend:()=>H,Default:()=>M,ErrorStates:()=>F,Thin:()=>I,WithCompositionLegend:()=>B,WithLegend:()=>z,WithSize:()=>N,WithTooltips:()=>R,WithoutCenter:()=>P,__namedExportsOrder:()=>U,default:()=>j}),O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W=e((()=>{s(),c(),O=t(d(),1),x(),v(),E(),S(),T(),k=f(),A=[{label:`Active Users`,value:65e3,valueDisplay:`65K`},{label:`Inactive Users`,value:35e3,valueDisplay:`35K`}],j={title:`JS Packages/Charts Library/Charts/Donut Chart`,component:w,parameters:{layout:`centered`},decorators:[o],argTypes:{...i,...r,...g,legendValueDisplay:{control:{type:`select`},options:[`percentage`,`value`,`valueDisplay`,`none`],table:{category:`Legend`},description:`What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.`},size:{control:{type:`range`,min:100,max:800,step:10,default:400}},thickness:{control:{type:`range`,min:0,max:1,step:.01}},gapScale:{control:{type:`range`,min:0,max:1,step:.01}},cornerScale:{control:{type:`range`,min:0,max:1,step:.01}}},render:e=>{let t=_(e);return(0,k.jsx)(w,{...e,legend:t})}},M={args:{...a,containerWidth:`432px`,containerHeight:`432px`,thickness:.5,gapScale:.03,cornerScale:.03,withTooltips:!0,data:A,children:(0,k.jsxs)(p,{children:[(0,k.jsx)(h,{textAnchor:`middle`,verticalAnchor:`middle`,fontSize:24,y:-16,children:`User Activity`}),(0,k.jsx)(h,{textAnchor:`middle`,verticalAnchor:`middle`,fontSize:18,y:16,children:`Total: 100K Users`})]})}},N={args:{...M.args,size:200,thickness:.3,showLabels:!1,children:(0,k.jsxs)(p,{children:[(0,k.jsx)(h,{textAnchor:`middle`,verticalAnchor:`middle`,fontSize:18,y:-16,children:`User Activity`}),(0,k.jsx)(h,{textAnchor:`middle`,verticalAnchor:`middle`,fontSize:14,y:16,children:`Total: 100K Users`})]})}},P={args:{...M.args,children:void 0}},F={render:()=>(0,k.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h3`,{children:`Empty Data`}),(0,k.jsx)(w,{height:300,thickness:.6,data:[]})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h3`,{children:`Single Value`}),(0,k.jsx)(w,{height:300,thickness:.6,data:[{label:`Single`,value:100}]})]})]})},I={args:{...M.args,thickness:.2,gapScale:.01,showLabels:!1,children:(0,k.jsxs)(p,{children:[(0,k.jsx)(h,{textAnchor:`middle`,verticalAnchor:`middle`,fontSize:24,y:-16,children:`Thin Donut`}),(0,k.jsx)(h,{textAnchor:`middle`,verticalAnchor:`middle`,fontSize:18,y:16,children:`Thickness: 20%`})]})}},L={args:{...M.args,animation:!0}},R={args:{...M.args,showLabels:!1,withTooltips:!0,children:(0,k.jsxs)(p,{children:[(0,k.jsx)(h,{textAnchor:`middle`,verticalAnchor:`middle`,fontSize:14,y:-10,children:`Hover over segments`}),(0,k.jsx)(h,{textAnchor:`middle`,verticalAnchor:`middle`,fontSize:14,y:10,children:`to see tooltips`})]})}},z={args:{...M.args,showLegend:!0,containerHeight:`500px`},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},B={render:e=>{let t=_(e);return(0,k.jsxs)(w,{...e,legend:{interactive:t?.interactive},chartId:`composition-donut-chart`,children:[e.children,(0,k.jsx)(w.Legend,{...t})]})},args:{...M.args,containerHeight:`500px`},parameters:{docs:{description:{story:"Composition API using `<PieChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},V=({chartItems:e,items:t,withComparison:n})=>(0,k.jsx)(`div`,{style:{display:`inline-grid`,gridTemplateColumns:`1fr auto auto`,gap:`var(--wpds-dimension-gap-xs, 4px) var(--wpds-dimension-gap-sm, 8px)`},children:t.map((t,r)=>{let{color:i}=e[r];return(0,k.jsxs)(O.Fragment,{children:[(0,k.jsxs)(l,{direction:`row`,justify:`flex-start`,spacing:2,children:[(0,k.jsx)(`div`,{style:{width:`8px`,height:`8px`,borderRadius:`50%`,flexShrink:0,backgroundColor:i}}),(0,k.jsx)(u,{variant:`body-sm`,children:t.label})]}),(0,k.jsx)(u,{variant:`body-sm`,style:{fontWeight:600,textAlign:`right`},children:t.formattedValue}),(0,k.jsx)(u,{variant:`body-sm`,style:{textAlign:`right`,color:`#008a20`},children:n&&t.comparison})]},r)})}),H={render:e=>(0,k.jsx)(C,{...e,children:(0,k.jsx)(C.Legend,{render:t=>(0,k.jsx)(V,{chartItems:t,items:b,withComparison:e.withComparison})})}),args:{...M.args,data:y,showLabels:!1,thickness:.3,cornerScale:.03,gapScale:.01,size:164,withComparison:!0,withTooltips:!1,containerHeight:`300px`},parameters:{docs:{description:{story:`Demonstrates how to customize the legend using the render prop.`}}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    containerWidth: '432px',
    containerHeight: '432px',
    thickness: 0.5,
    gapScale: 0.03,
    cornerScale: 0.03,
    withTooltips: true,
    data,
    children: <Group>
                <SvgText textAnchor="middle" verticalAnchor="middle" fontSize={24} y={-16}>
                    User Activity
                </SvgText>
                <SvgText textAnchor="middle" verticalAnchor="middle" fontSize={18} y={16}>
                    Total: 100K Users
                </SvgText>
            </Group>
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 200,
    thickness: 0.3,
    showLabels: false,
    children: <Group>
                <SvgText textAnchor="middle" verticalAnchor="middle" fontSize={18} y={-16}>
                    User Activity
                </SvgText>
                <SvgText textAnchor="middle" verticalAnchor="middle" fontSize={14} y={16}>
                    Total: 100K Users
                </SvgText>
            </Group>
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: undefined
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Empty Data</h3>
                <PieChart height={300} thickness={0.6} data={[]} />
            </div>
            <div>
                <h3>Single Value</h3>
                <PieChart height={300} thickness={0.6} data={[{
        label: 'Single',
        value: 100
      }]} />
            </div>
        </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.2,
    gapScale: 0.01,
    showLabels: false,
    children: <Group>
                <SvgText textAnchor="middle" verticalAnchor="middle" fontSize={24} y={-16}>
                    Thin Donut
                </SvgText>
                <SvgText textAnchor="middle" verticalAnchor="middle" fontSize={18} y={16}>
                    Thickness: 20%
                </SvgText>
            </Group>
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLabels: false,
    withTooltips: true,
    children: <Group>
                <SvgText textAnchor="middle" verticalAnchor="middle" fontSize={14} y={-10}>
                    Hover over segments
                </SvgText>
                <SvgText textAnchor="middle" verticalAnchor="middle" fontSize={14} y={10}>
                    to see tooltips
                </SvgText>
            </Group>
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    containerHeight: '500px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Props-based legend using \`showLegend\` and the \`legend\` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig(args);
    return <PieChart {...args} legend={{
      interactive: legend?.interactive
    }} chartId="composition-donut-chart">
                {args.children}
                <PieChart.Legend {...legend} />
            </PieChart>;
  },
  args: {
    ...Default.args,
    containerHeight: '500px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Composition API using \`<PieChart.Legend />\` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning.'
      }
    }
  }
}`,...B.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <PieChartUnresponsive {...args}>
            <PieChartUnresponsive.Legend
    // eslint-disable-next-line react/jsx-no-bind
    render={items => <CustomPieLegend chartItems={items} items={customerRevenueLegendData} withComparison={args.withComparison} />} />
        </PieChartUnresponsive>,
  args: {
    ...Default.args,
    data: customerRevenueData,
    showLabels: false,
    thickness: 0.3,
    cornerScale: 0.03,
    gapScale: 0.01,
    size: 164,
    withComparison: true,
    withTooltips: false,
    containerHeight: '300px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how to customize the legend using the render prop.'
      }
    }
  }
}`,...H.parameters?.docs?.source}}},U=[`Default`,`WithSize`,`WithoutCenter`,`ErrorStates`,`Thin`,`Animation`,`WithTooltips`,`WithLegend`,`WithCompositionLegend`,`CustomLegend`]}));W();export{L as Animation,H as CustomLegend,M as Default,F as ErrorStates,I as Thin,B as WithCompositionLegend,z as WithLegend,N as WithSize,R as WithTooltips,P as WithoutCenter,U as __namedExportsOrder,j as default,W as n,D as t};