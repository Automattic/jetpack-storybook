"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":(g,h,r)=>{r.r(h),r.d(h,{Default:()=>l,ErrorStates:()=>n,FixedDimensions:()=>s,ManyDataSeries:()=>e,SingleSeries:()=>p,WithLegend:()=>t,WithVerticalLegend:()=>a,__namedExportsOrder:()=>d,default:()=>m});var c=r("../charts/src/components/bar-chart/bar-chart.tsx"),i=r("../charts/src/components/bar-chart/stories/sample-data.ts"),o=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m={title:"JS Packages/Charts/Types/Bar Chart",component:c.A,parameters:{layout:"centered"},decorators:[v=>(0,o.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,o.jsx)(v,{})})]},l={args:{withTooltips:!0,data:[i.A[0],i.A[1],i.A[2]],showLegend:!1,legendOrientation:"horizontal",gridVisibility:"x"}},p={args:{...l.args,data:[i.A[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},e={args:{...l.args,data:i.A},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},t={args:{...l.args,data:i.A,showTooltips:!0,showLegend:!0,legendOrientation:"horizontal"}},a={args:{...t.args,data:[i.A[0]],showLegend:!0,legendOrientation:"vertical"}},s={args:{...l.args,width:800,height:400,data:[i.A[0],i.A[1],i.A[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},n={render:()=>(0,o.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Empty Data"}),(0,o.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,o.jsx)(c.A,{data:[]})})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Invalid Data"}),(0,o.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,o.jsx)(c.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};n.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const d=["Default","SingleSeries","ManyDataSeries","WithLegend","WithVerticalLegend","FixedDimensions","ErrorStates"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: [data[0], data[1], data[2]],
    // limit to 3 series for better readability
    showLegend: false,
    legendOrientation: 'horizontal',
    gridVisibility: 'x'
  }
}`,...l.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [data[0]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with a single data series.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with many data series.'
      }
    }
  }
}`,...e.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data,
    showTooltips: true,
    showLegend: true,
    legendOrientation: 'horizontal'
  }
}`,...t.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLegend.args,
    data: [data[0]],
    showLegend: true,
    legendOrientation: 'vertical'
  }
}`,...a.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 800,
    height: 400,
    data: [data[0], data[1], data[2]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with fixed dimensions that override the responsive behavior.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '20px'
  }}>
            <div>
                <h3>Empty Data</h3>
                <div style={{
        width: '400px',
        height: '300px'
      }}>
                    <BarChart data={[]} />
                </div>
            </div>

            <div>
                <h3>Invalid Data</h3>
                <div style={{
        width: '400px',
        height: '300px'
      }}>
                    <BarChart data={[{
          label: 'Invalid Series',
          data: [{
            date: new Date('invalid'),
            value: 10,
            label: 'Invalid Date'
          }, {
            date: new Date('2024-01-02'),
            value: null,
            label: 'Null Value'
          }],
          options: {}
        }]} />
                </div>
            </div>
        </div>
}`,...n.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/toString.js":(g,h,r)=>{r.d(h,{A:()=>c});function c(i){return i?.toString()}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Bar.js":(g,h,r)=>{r.d(h,{A:()=>p});var c=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=r("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),o=r.n(i),u=["className","innerRef"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},m.apply(this,arguments)}function l(e,t){if(e==null)return{};var a={},s=Object.keys(e),n,d;for(d=0;d<s.length;d++)n=s[d],!(t.indexOf(n)>=0)&&(a[n]=e[n]);return a}function p(e){var t=e.className,a=e.innerRef,s=l(e,u);return c.createElement("rect",m({ref:a,className:o()("visx-bar",t)},s))}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Line.js":(g,h,r)=>{r.d(h,{A:()=>p});var c=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=r("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),o=r.n(i),u=["from","to","fill","className","innerRef"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},m.apply(this,arguments)}function l(e,t){if(e==null)return{};var a={},s=Object.keys(e),n,d;for(d=0;d<s.length;d++)n=s[d],!(t.indexOf(n)>=0)&&(a[n]=e[n]);return a}function p(e){var t=e.from,a=t===void 0?{x:0,y:0}:t,s=e.to,n=s===void 0?{x:1,y:1}:s,d=e.fill,v=d===void 0?"transparent":d,_=e.className,x=e.innerRef,f=l(e,u),y=a.x===n.x||a.y===n.y;return c.createElement("line",m({ref:x,className:o()("visx-line",_),x1:a.x,y1:a.y,x2:n.x,y2:n.y,fill:v,shapeRendering:y?"crispEdges":"auto"},f))}}}]);
