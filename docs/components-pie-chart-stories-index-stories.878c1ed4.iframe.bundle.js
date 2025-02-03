"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2586],{"../charts/src/components/pie-chart/stories/index.stories.tsx":(N,p,r)=>{var m,v,x,D,_,f,y,A,T,E,z,S,P,j,O,w,W,L,C,b,k,M,B,R;r.r(p),r.d(p,{Default:()=>t,Doughnut:()=>o,ErrorStates:()=>l,Responsiveness:()=>d,WithHorizontalLegend:()=>n,WithTooltips:()=>i,WithTooltipsDoughnut:()=>c,WithVerticalLegend:()=>s,__namedExportsOrder:()=>F,default:()=>V});var K=r("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),h=r("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),I=r("../charts/src/providers/theme/theme-provider.tsx"),u=r("../charts/src/providers/theme/themes.ts"),a=r("../charts/src/components/pie-chart/pie-chart.tsx"),e=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const U=[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:23},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:17},{label:"Windows",value:8e4,valueDisplay:"80K",percentage:60}],V={title:"JS Packages/Charts/Types/Pie Chart",component:a.A,parameters:{layout:"centered"},decorators:[(G,{args:H})=>(0,e.jsx)(I.N,{theme:H.theme,children:(0,e.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",aspectRatio:"1/1",minWidth:"400px",maxWidth:"1200px",height:"800px",border:"1px dashed #ccc"},children:(0,e.jsx)(G,{})})})],argTypes:{size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},padding:{control:{type:"range",min:0,max:100,step:1}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}},legendOrientation:{control:"radio",options:["horizontal","vertical"]},theme:{control:"select",options:{default:void 0,jetpack:u.QI,woo:u.pk},defaultValue:void 0}}},t={args:{thickness:1,gapScale:0,padding:20,cornerScale:0,withTooltips:!1,data:U,theme:"default",showLegend:!1,legendOrientation:"horizontal"}},n={args:{...t.args,showLegend:!0,size:600,legendOrientation:"horizontal"}},s={args:{...t.args,showLegend:!0,size:600,legendOrientation:"vertical"}},o={args:{...t.args,thickness:.5,padding:0,gapScale:.03,cornerScale:.03,children:(0,e.jsxs)(K.A,{children:[(0,e.jsx)(h.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"\u{1F369} Doughnut"}),(0,e.jsx)(h.A,{textAnchor:"middle",verticalAnchor:"middle",fill:"#008A20",fontSize:18,y:16,children:"Three donuts for the price of one!"})]})},parameters:{docs:{description:{story:"Doughnut chart variant with the thickness set to 0.5 (50%)."}}}},i={args:{...t.args,withTooltips:!0},parameters:{docs:{description:{story:"Pie chart with interactive tooltips that appear on hover."}}}},c={args:{...t.args,thickness:.5,withTooltips:!0},parameters:{docs:{description:{story:"Doughnut chart with interactive tooltips that appear on hover."}}}},g={...t.args};delete g.size;const d={args:g,parameters:{docs:{description:{story:"Pie chart with responsive behavior. Uses size prop instead of width/height."}}}},l={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Empty Data"}),(0,e.jsx)(a.A,{size:300,data:[]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Invalid Percentage Total"}),(0,e.jsx)(a.A,{size:300,data:[{label:"A",value:30,percentage:30},{label:"B",value:40,percentage:40}]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Negative Values"}),(0,e.jsx)(a.A,{size:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Single Data Point"}),(0,e.jsx)(a.A,{size:300,data:[{label:"A",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the pie chart handles various error states and edge cases."}}}},F=["Default","WithHorizontalLegend","WithVerticalLegend","Doughnut","WithTooltips","WithTooltipsDoughnut","Responsiveness","ErrorStates"];t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    thickness: 1,
    gapScale: 0,
    padding: 20,
    cornerScale: 0,
    withTooltips: false,
    data,
    theme: 'default',
    showLegend: false,
    legendOrientation: 'horizontal'
  }
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}},n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    size: 600,
    legendOrientation: 'horizontal'
  }
}`,...(f=(_=n.parameters)==null?void 0:_.docs)==null?void 0:f.source}}},s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    size: 600,
    legendOrientation: 'vertical'
  }
}`,...(T=(A=s.parameters)==null?void 0:A.docs)==null?void 0:T.source}}},o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.5,
    padding: 0,
    gapScale: 0.03,
    cornerScale: 0.03,
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={24} y={-16}>
                    \u{1F369} Doughnut
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fill="#008A20" fontSize={18} y={16}>
                    Three donuts for the price of one!
                </Text>
            </Group>
  },
  parameters: {
    docs: {
      description: {
        story: 'Doughnut chart variant with the thickness set to 0.5 (50%).'
      }
    }
  }
}`,...(S=(z=o.parameters)==null?void 0:z.docs)==null?void 0:S.source}}},i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    withTooltips: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with interactive tooltips that appear on hover.'
      }
    }
  }
}`,...(O=(j=i.parameters)==null?void 0:j.docs)==null?void 0:O.source}}},c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.5,
    withTooltips: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Doughnut chart with interactive tooltips that appear on hover.'
      }
    }
  }
}`,...(L=(W=c.parameters)==null?void 0:W.docs)==null?void 0:L.source}}},d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with responsive behavior. Uses size prop instead of width/height.'
      }
    }
  }
}`,...(k=(b=d.parameters)==null?void 0:b.docs)==null?void 0:k.source}}},l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Empty Data</h3>
                <PieChart size={300} data={[]} />
            </div>
            <div>
                <h3>Invalid Percentage Total</h3>
                <PieChart size={300} data={[{
        label: 'A',
        value: 30,
        percentage: 30
      }, {
        label: 'B',
        value: 40,
        percentage: 40
      }]} // Only adds up to 70%
      />
            </div>
            <div>
                <h3>Negative Values</h3>
                <PieChart size={300} data={[{
        label: 'A',
        value: -30,
        percentage: -30
      }, {
        label: 'B',
        value: 130,
        percentage: 130
      }]} />
            </div>
            <div>
                <h3>Single Data Point</h3>
                <PieChart size={300} data={[{
        label: 'A',
        value: 100,
        percentage: 100
      }]} />
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of how the pie chart handles various error states and edge cases.'
      }
    }
  }
}`,...(R=(B=l.parameters)==null?void 0:B.docs)==null?void 0:R.source}}}}}]);})();
