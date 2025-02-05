(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":(g,m,n)=>{"use strict";n.r(m),n.d(m,{Default:()=>c,ErrorStates:()=>r,FixedDimensions:()=>t,ManyDataSeries:()=>e,SingleSeries:()=>h,WithLegend:()=>s,WithVerticalLegend:()=>a,__namedExportsOrder:()=>p,default:()=>l});var u=n("../charts/src/components/bar-chart/bar-chart.tsx"),o=n("../charts/src/components/bar-chart/stories/sample-data.ts"),d=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const l={title:"JS Packages/Charts/Types/Bar Chart",component:u.A,parameters:{layout:"centered"},decorators:[_=>(0,d.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,d.jsx)(_,{})})]},c={args:{withTooltips:!0,data:[o.A[0],o.A[1],o.A[2]],showLegend:!1,legendOrientation:"horizontal",gridVisibility:"x"}},h={args:{...c.args,data:[o.A[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},e={args:{...c.args,data:o.A},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},s={args:{...c.args,data:o.A,showTooltips:!0,showLegend:!0,legendOrientation:"horizontal"}},a={args:{...s.args,data:[o.A[0]],showLegend:!0,legendOrientation:"vertical"}},t={args:{...c.args,width:800,height:400,data:[o.A[0],o.A[1],o.A[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},r={render:()=>(0,d.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Empty Data"}),(0,d.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,d.jsx)(u.A,{data:[]})})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Invalid Data"}),(0,d.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,d.jsx)(u.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};r.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const p=["Default","SingleSeries","ManyDataSeries","WithLegend","WithVerticalLegend","FixedDimensions","ErrorStates"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: [data[0], data[1], data[2]],
    // limit to 3 series for better readability
    showLegend: false,
    legendOrientation: 'horizontal',
    gridVisibility: 'x'
  }
}`,...c.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data,
    showTooltips: true,
    showLegend: true,
    legendOrientation: 'horizontal'
  }
}`,...s.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLegend.args,
    data: [data[0]],
    showLegend: true,
    legendOrientation: 'vertical'
  }
}`,...a.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/toString.js":(g,m,n)=>{"use strict";n.d(m,{A:()=>u});function u(o){return o?.toString()}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Bar.js":(g,m,n)=>{"use strict";n.d(m,{A:()=>h});var u=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=n("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),d=n.n(o),i=["className","innerRef"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},l.apply(this,arguments)}function c(e,s){if(e==null)return{};var a={},t=Object.keys(e),r,p;for(p=0;p<t.length;p++)r=t[p],!(s.indexOf(r)>=0)&&(a[r]=e[r]);return a}function h(e){var s=e.className,a=e.innerRef,t=c(e,i);return u.createElement("rect",l({ref:a,className:d()("visx-bar",s)},t))}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Line.js":(g,m,n)=>{"use strict";n.d(m,{A:()=>h});var u=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=n("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),d=n.n(o),i=["from","to","fill","className","innerRef"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},l.apply(this,arguments)}function c(e,s){if(e==null)return{};var a={},t=Object.keys(e),r,p;for(p=0;p<t.length;p++)r=t[p],!(s.indexOf(r)>=0)&&(a[r]=e[r]);return a}function h(e){var s=e.from,a=s===void 0?{x:0,y:0}:s,t=e.to,r=t===void 0?{x:1,y:1}:t,p=e.fill,_=p===void 0?"transparent":p,v=e.className,y=e.innerRef,f=c(e,i),x=a.x===r.x||a.y===r.y;return u.createElement("line",l({ref:y,className:d()("visx-line",v),x1:a.x,y1:a.y,x2:r.x,y2:r.y,fill:_,shapeRendering:x?"crispEdges":"auto"},f))}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js":(g,m,n)=>{"use strict";var u=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function o(){}function d(){}d.resetWarningCache=o,g.exports=function(){function i(h,e,s,a,t,r){if(r!==u){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}i.isRequired=i;function l(){return i}var c={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:l,element:i,elementType:i,instanceOf:l,node:i,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:d,resetWarningCache:o};return c.PropTypes=c,c}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":(g,m,n)=>{if(!1)var u,o;else g.exports=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":g=>{"use strict";var m="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";g.exports=m}}]);
