"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1830],{"../charts/src/components/pie-chart/stories/donut.stories.tsx":(I,h,r)=>{var p,u,g,x,v,_,A,T,f,S,y,E,D,j,C,O,P,k;r.r(h),r.d(h,{CustomTheme:()=>a,Default:()=>t,ErrorStates:()=>o,Thin:()=>i,WithVerticalLegend:()=>n,WithoutCenter:()=>s,__namedExportsOrder:()=>L,default:()=>U});var m=r("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),c=r("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),z=r("../charts/src/providers/theme/theme-provider.tsx"),d=r("../charts/src/providers/theme/themes.ts"),l=r("../charts/src/components/pie-chart/pie-chart.tsx"),e=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const W=[{label:"Active Users",value:65e3,valueDisplay:"65K",percentage:65},{label:"Inactive Users",value:35e3,valueDisplay:"35K",percentage:35}],U={title:"JS Packages/Charts/Types/Donut Chart",component:l.A,parameters:{layout:"centered"},decorators:[(M,{args:K})=>(0,e.jsx)(z.N,{theme:K.theme,children:(0,e.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",aspectRatio:"1/1",minWidth:"400px",maxWidth:"1200px",height:"800px",border:"1px dashed #ccc"},children:(0,e.jsx)(M,{})})})],argTypes:{size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}},theme:{control:"select",options:{default:void 0,jetpack:d.QI,woo:d.pk},defaultValue:void 0}}},t={args:{thickness:.4,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,data:W,theme:"default",showLegend:!0,legendOrientation:"horizontal",children:(0,e.jsxs)(m.A,{children:[(0,e.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"User Activity"}),(0,e.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Total: 100K Users"})]})}},n={args:{...t.args,legendOrientation:"vertical"}},s={args:{...t.args,children:void 0}},a={args:{...t.args,theme:d.pk}},o={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Empty Data"}),(0,e.jsx)(l.A,{size:300,thickness:.6,data:[]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Single Value"}),(0,e.jsx)(l.A,{size:300,thickness:.6,data:[{label:"Single",value:100,percentage:100}]})]})]})},i={args:{...t.args,thickness:.2,gapScale:.01,children:(0,e.jsxs)(m.A,{children:[(0,e.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"Thin Donut"}),(0,e.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Thickness: 20%"})]})}},L=["Default","WithVerticalLegend","WithoutCenter","CustomTheme","ErrorStates","Thin"];t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    thickness: 0.4,
    gapScale: 0.03,
    padding: 20,
    cornerScale: 0.03,
    withTooltips: true,
    data,
    theme: 'default',
    showLegend: true,
    legendOrientation: 'horizontal',
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={24} y={-16}>
                    User Activity
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={18} y={16}>
                    Total: 100K Users
                </Text>
            </Group>
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}},n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    legendOrientation: 'vertical'
  }
}`,...(_=(v=n.parameters)==null?void 0:v.docs)==null?void 0:_.source}}},s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: undefined
  }
}`,...(f=(T=s.parameters)==null?void 0:T.docs)==null?void 0:f.source}}},a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    theme: wooTheme
  }
}`,...(E=(y=a.parameters)==null?void 0:y.docs)==null?void 0:E.source}}},o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Empty Data</h3>
                <PieChart size={300} thickness={0.6} data={[]} />
            </div>
            <div>
                <h3>Single Value</h3>
                <PieChart size={300} thickness={0.6} data={[{
        label: 'Single',
        value: 100,
        percentage: 100
      }]} />
            </div>
        </div>
}`,...(C=(j=o.parameters)==null?void 0:j.docs)==null?void 0:C.source}}},i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.2,
    gapScale: 0.01,
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={24} y={-16}>
                    Thin Donut
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={18} y={16}>
                    Thickness: 20%
                </Text>
            </Group>
  }
}`,...(k=(P=i.parameters)==null?void 0:P.docs)==null?void 0:k.source}}}}}]);})();
