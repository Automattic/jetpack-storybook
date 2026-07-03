import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{t as r}from"./react-DVCOKQW8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{L as a}from"./esm-D1c-lJYS.js";import{n as o,t as s}from"./esm-BtafBA8b.js";import{c,r as l,s as u,t as d}from"./chart-decorator-BH73hWSs.js";import{r as f,t as p}from"./legend-config-DvuGdtSm.js";import{d as m,n as h,r as g}from"./sample-data-BwMYxnT1.js";import{t as _}from"./stories-BNvwI7-G.js";import{i as v,o as y,t as b}from"./build-module-CcTtHBgO.js";import{a as x,n as S,r as C,t as w}from"./pie-chart-BPFzYd8k.js";var T=n((()=>{s()})),E=e({Animation:()=>I,CustomLegend:()=>V,Default:()=>j,ErrorStates:()=>P,Thin:()=>F,WithCompositionLegend:()=>z,WithLegend:()=>R,WithSize:()=>M,WithTooltips:()=>L,WithoutCenter:()=>N,__namedExportsOrder:()=>H,default:()=>A}),D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U=n((()=>{b(),D=t(r(),1),_(),m(),T(),x(),w(),O=i(),k=[{label:`Active Users`,value:65e3,valueDisplay:`65K`},{label:`Inactive Users`,value:35e3,valueDisplay:`35K`}],A={title:`JS Packages/Charts Library/Charts/Donut Chart`,component:C,parameters:{layout:`centered`},decorators:[d],argTypes:{...l,...c,...f,legendValueDisplay:{control:{type:`select`},options:[`percentage`,`value`,`valueDisplay`,`none`],table:{category:`Legend`},description:`What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.`},size:{control:{type:`range`,min:100,max:800,step:10,default:400}},thickness:{control:{type:`range`,min:0,max:1,step:.01}},gapScale:{control:{type:`range`,min:0,max:1,step:.01}},cornerScale:{control:{type:`range`,min:0,max:1,step:.01}}},render:e=>{let t=p(e);return(0,O.jsx)(C,{...e,legend:t})}},j={args:{...u,containerWidth:`432px`,containerHeight:`432px`,thickness:.5,gapScale:.03,cornerScale:.03,withTooltips:!0,data:k,children:(0,O.jsxs)(o,{children:[(0,O.jsx)(a,{textAnchor:`middle`,verticalAnchor:`middle`,fontSize:24,y:-16,children:`User Activity`}),(0,O.jsx)(a,{textAnchor:`middle`,verticalAnchor:`middle`,fontSize:18,y:16,children:`Total: 100K Users`})]})}},M={args:{...j.args,size:200,thickness:.3,showLabels:!1,children:(0,O.jsxs)(o,{children:[(0,O.jsx)(a,{textAnchor:`middle`,verticalAnchor:`middle`,fontSize:18,y:-16,children:`User Activity`}),(0,O.jsx)(a,{textAnchor:`middle`,verticalAnchor:`middle`,fontSize:14,y:16,children:`Total: 100K Users`})]})}},N={args:{...j.args,children:void 0}},P={render:()=>(0,O.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`h3`,{children:`Empty Data`}),(0,O.jsx)(C,{height:300,thickness:.6,data:[]})]}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`h3`,{children:`Single Value`}),(0,O.jsx)(C,{height:300,thickness:.6,data:[{label:`Single`,value:100}]})]})]})},F={args:{...j.args,thickness:.2,gapScale:.01,showLabels:!1,children:(0,O.jsxs)(o,{children:[(0,O.jsx)(a,{textAnchor:`middle`,verticalAnchor:`middle`,fontSize:24,y:-16,children:`Thin Donut`}),(0,O.jsx)(a,{textAnchor:`middle`,verticalAnchor:`middle`,fontSize:18,y:16,children:`Thickness: 20%`})]})}},I={args:{...j.args,animation:!0}},L={args:{...j.args,showLabels:!1,withTooltips:!0,children:(0,O.jsxs)(o,{children:[(0,O.jsx)(a,{textAnchor:`middle`,verticalAnchor:`middle`,fontSize:14,y:-10,children:`Hover over segments`}),(0,O.jsx)(a,{textAnchor:`middle`,verticalAnchor:`middle`,fontSize:14,y:10,children:`to see tooltips`})]})}},R={args:{...j.args,showLegend:!0,containerHeight:`500px`},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},z={render:e=>{let t=p(e);return(0,O.jsxs)(C,{...e,legend:{interactive:t?.interactive},chartId:`composition-donut-chart`,children:[e.children,(0,O.jsx)(C.Legend,{...t})]})},args:{...j.args,containerHeight:`500px`},parameters:{docs:{description:{story:"Composition API using `<PieChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},B=({chartItems:e,items:t,withComparison:n})=>(0,O.jsx)(`div`,{style:{display:`inline-grid`,gridTemplateColumns:`1fr auto auto`,gap:`var(--wpds-dimension-gap-xs, 4px) var(--wpds-dimension-gap-sm, 8px)`},children:t.map((t,r)=>{let{color:i}=e[r];return(0,O.jsxs)(D.Fragment,{children:[(0,O.jsxs)(v,{direction:`row`,justify:`flex-start`,align:`center`,gap:`sm`,children:[(0,O.jsx)(`div`,{style:{width:`8px`,height:`8px`,borderRadius:`50%`,flexShrink:0,backgroundColor:i}}),(0,O.jsx)(y,{variant:`body-sm`,children:t.label})]}),(0,O.jsx)(y,{variant:`body-sm`,style:{fontWeight:600,textAlign:`right`},children:t.formattedValue}),(0,O.jsx)(y,{variant:`body-sm`,style:{textAlign:`right`,color:`#008a20`},children:n&&t.comparison})]},r)})}),V={render:e=>(0,O.jsx)(S,{...e,children:(0,O.jsx)(S.Legend,{render:t=>(0,O.jsx)(B,{chartItems:t,items:g,withComparison:e.withComparison})})}),args:{...j.args,data:h,showLabels:!1,thickness:.3,cornerScale:.03,gapScale:.01,size:164,withComparison:!0,withTooltips:!1,containerHeight:`300px`},parameters:{docs:{description:{story:`Demonstrates how to customize the legend using the render prop.`}}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: undefined
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H=[`Default`,`WithSize`,`WithoutCenter`,`ErrorStates`,`Thin`,`Animation`,`WithTooltips`,`WithLegend`,`WithCompositionLegend`,`CustomLegend`]}));U();export{I as Animation,V as CustomLegend,j as Default,P as ErrorStates,F as Thin,z as WithCompositionLegend,R as WithLegend,M as WithSize,L as WithTooltips,N as WithoutCenter,H as __namedExportsOrder,A as default,U as n,E as t};