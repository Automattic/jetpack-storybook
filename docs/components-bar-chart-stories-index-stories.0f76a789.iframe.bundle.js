"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":(x,m,n)=>{var t,r,i,h,_,f,v,O,E,y,D,L,P,j,A;n.r(m),n.d(m,{Default:()=>o,ManyDataSeries:()=>l,SingleSeries:()=>c,WithLegend:()=>e,WithVerticalLegend:()=>a,__namedExportsOrder:()=>s,default:()=>g});var u=n("../charts/src/components/bar-chart/index.tsx"),d=n("../charts/src/components/bar-chart/stories/sample-data.ts"),p=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g={title:"JS Packages/Charts/Types/Bar Chart",component:u.E,parameters:{layout:"centered"},decorators:[M=>(0,p.jsx)("div",{style:{padding:"2rem"},children:(0,p.jsx)(M,{})})]},o={args:{width:800,height:500,withTooltips:!0,data:[d.A[0],d.A[1],d.A[2]],showLegend:!1,legendOrientation:"horizontal",gridVisibility:"x"}},c={args:{...o.args,data:[d.A[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},l={args:{...o.args,width:1200,height:700,data:d.A},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},e={args:{...o.args,data:d.A,showTooltips:!0,showLegend:!0,legendOrientation:"horizontal"}},a={args:{...e.args,data:[d.A[0]],showLegend:!0,legendOrientation:"vertical"}},s=["Default","SingleSeries","ManyDataSeries","WithLegend","WithVerticalLegend"];o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    width: 800,
    height: 500,
    withTooltips: true,
    data: [data[0], data[1], data[2]],
    // limit to 3 series for better readability
    showLegend: false,
    legendOrientation: 'horizontal',
    gridVisibility: 'x'
  }
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}},c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(_=c.parameters)==null?void 0:_.docs)==null?void 0:f.source}}},l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 1200,
    height: 700,
    data
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with many data series.'
      }
    }
  }
}`,...(E=(O=l.parameters)==null?void 0:O.docs)==null?void 0:E.source}}},e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data,
    showTooltips: true,
    showLegend: true,
    legendOrientation: 'horizontal'
  }
}`,...(L=(D=e.parameters)==null?void 0:D.docs)==null?void 0:L.source}}},a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...WithLegend.args,
    data: [data[0]],
    showLegend: true,
    legendOrientation: 'vertical'
  }
}`,...(A=(j=a.parameters)==null?void 0:j.docs)==null?void 0:A.source}}}},"../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/toString.js":(x,m,n)=>{n.d(m,{A:()=>u});function u(d){return d==null?void 0:d.toString()}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Bar.js":(x,m,n)=>{n.d(m,{A:()=>l});var u=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=n("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=n.n(d),g=["className","innerRef"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e},o.apply(this,arguments)}function c(e,a){if(e==null)return{};var s={},t=Object.keys(e),r,i;for(i=0;i<t.length;i++)r=t[i],!(a.indexOf(r)>=0)&&(s[r]=e[r]);return s}function l(e){var a=e.className,s=e.innerRef,t=c(e,g);return u.createElement("rect",o({ref:s,className:p()("visx-bar",a)},t))}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Line.js":(x,m,n)=>{n.d(m,{A:()=>l});var u=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=n("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=n.n(d),g=["from","to","fill","className","innerRef"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e},o.apply(this,arguments)}function c(e,a){if(e==null)return{};var s={},t=Object.keys(e),r,i;for(i=0;i<t.length;i++)r=t[i],!(a.indexOf(r)>=0)&&(s[r]=e[r]);return s}function l(e){var a=e.from,s=a===void 0?{x:0,y:0}:a,t=e.to,r=t===void 0?{x:1,y:1}:t,i=e.fill,h=i===void 0?"transparent":i,_=e.className,f=e.innerRef,v=c(e,g),O=s.x===r.x||s.y===r.y;return u.createElement("line",o({ref:f,className:p()("visx-line",_),x1:s.x,y1:s.y,x2:r.x,y2:r.y,fill:h,shapeRendering:O?"crispEdges":"auto"},v))}}}]);})();
