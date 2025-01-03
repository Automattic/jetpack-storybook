(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":(_,l,n)=>{var a,i,c,g,f,y,O,v,x,E,P,T,j,D,b;"use strict";n.r(l),n.d(l,{Default:()=>s,ManyDataSeries:()=>u,SingleSeries:()=>p,WithLegend:()=>e,WithVerticalLegend:()=>t,__namedExportsOrder:()=>r,default:()=>o});var m=n("../charts/src/components/bar-chart/bar-chart.tsx"),d=n("../charts/src/components/bar-chart/stories/sample-data.ts"),h=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o={title:"JS Packages/Charts/Types/Bar Chart",component:m.A,parameters:{layout:"centered"},decorators:[R=>(0,h.jsx)("div",{style:{padding:"2rem"},children:(0,h.jsx)(R,{})})]},s={args:{width:800,height:500,withTooltips:!0,data:[d.A[0],d.A[1],d.A[2]],showLegend:!1,legendOrientation:"horizontal",gridVisibility:"x"}},p={args:{...s.args,data:[d.A[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},u={args:{...s.args,width:1200,height:700,data:d.A},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},e={args:{...s.args,data:d.A,showTooltips:!0,showLegend:!0,legendOrientation:"horizontal"}},t={args:{...e.args,data:[d.A[0]],showLegend:!0,legendOrientation:"vertical"}},r=["Default","SingleSeries","ManyDataSeries","WithLegend","WithVerticalLegend"];s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}},p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(f=p.parameters)==null?void 0:f.docs)==null?void 0:y.source}}},u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(x=(v=u.parameters)==null?void 0:v.docs)==null?void 0:x.source}}},e.parameters={...e.parameters,docs:{...(E=e.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data,
    showTooltips: true,
    showLegend: true,
    legendOrientation: 'horizontal'
  }
}`,...(T=(P=e.parameters)==null?void 0:P.docs)==null?void 0:T.source}}},t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...WithLegend.args,
    data: [data[0]],
    showLegend: true,
    legendOrientation: 'vertical'
  }
}`,...(b=(D=t.parameters)==null?void 0:D.docs)==null?void 0:b.source}}}},"../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/toString.js":(_,l,n)=>{"use strict";n.d(l,{A:()=>m});function m(d){return d==null?void 0:d.toString()}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Bar.js":(_,l,n)=>{"use strict";n.d(l,{A:()=>u});var m=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=n("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=n.n(d),o=["className","innerRef"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}function p(e,t){if(e==null)return{};var r={},a=Object.keys(e),i,c;for(c=0;c<a.length;c++)i=a[c],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function u(e){var t=e.className,r=e.innerRef,a=p(e,o);return m.createElement("rect",s({ref:r,className:h()("visx-bar",t)},a))}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Line.js":(_,l,n)=>{"use strict";n.d(l,{A:()=>u});var m=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=n("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=n.n(d),o=["from","to","fill","className","innerRef"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}function p(e,t){if(e==null)return{};var r={},a=Object.keys(e),i,c;for(c=0;c<a.length;c++)i=a[c],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function u(e){var t=e.from,r=t===void 0?{x:0,y:0}:t,a=e.to,i=a===void 0?{x:1,y:1}:a,c=e.fill,g=c===void 0?"transparent":c,f=e.className,y=e.innerRef,O=p(e,o),v=r.x===i.x||r.y===i.y;return m.createElement("line",s({ref:y,className:h()("visx-line",f),x1:r.x,y1:r.y,x2:i.x,y2:i.y,fill:g,shapeRendering:v?"crispEdges":"auto"},O))}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js":(_,l,n)=>{"use strict";var m=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function d(){}function h(){}h.resetWarningCache=d,_.exports=function(){function o(u,e,t,r,a,i){if(i!==m){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}o.isRequired=o;function s(){return o}var p={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:s,element:o,elementType:o,instanceOf:s,node:o,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:h,resetWarningCache:d};return p.PropTypes=p,p}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":(_,l,n)=>{if(!1)var m,d;else _.exports=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":_=>{"use strict";var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";_.exports=l}}]);})();
