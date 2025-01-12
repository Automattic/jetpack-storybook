(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":(_,l,r)=>{var o,d,g,f,y,v,O,x,E,P,b,T,j,D,R;"use strict";r.r(l),r.d(l,{Default:()=>p,ManyDataSeries:()=>e,SingleSeries:()=>u,WithLegend:()=>t,WithVerticalLegend:()=>s,__namedExportsOrder:()=>a,default:()=>c});var m=r("../charts/src/components/bar-chart/bar-chart.tsx"),i=r("../charts/src/components/bar-chart/stories/sample-data.ts"),h=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c={title:"JS Packages/Charts/Types/Bar Chart",component:m.A,parameters:{layout:"centered"},decorators:[L=>(0,h.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,h.jsx)(L,{})})]},p={args:{withTooltips:!0,data:[i.A[0],i.A[1],i.A[2]],showLegend:!1,legendOrientation:"horizontal",gridVisibility:"x"}},u={args:{...p.args,data:[i.A[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},e={args:{...p.args,width:1200,height:700,data:i.A},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},t={args:{...p.args,data:i.A,showTooltips:!0,showLegend:!0,legendOrientation:"horizontal"}},s={args:{...t.args,data:[i.A[0]],showLegend:!0,legendOrientation:"vertical"}},a=["Default","SingleSeries","ManyDataSeries","WithLegend","WithVerticalLegend"];p.parameters={...p.parameters,docs:{...(o=p.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: [data[0], data[1], data[2]],
    // limit to 3 series for better readability
    showLegend: false,
    legendOrientation: 'horizontal',
    gridVisibility: 'x'
  }
}`,...(g=(d=p.parameters)==null?void 0:d.docs)==null?void 0:g.source}}},u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(y=u.parameters)==null?void 0:y.docs)==null?void 0:v.source}}},e.parameters={...e.parameters,docs:{...(O=e.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(E=(x=e.parameters)==null?void 0:x.docs)==null?void 0:E.source}}},t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data,
    showTooltips: true,
    showLegend: true,
    legendOrientation: 'horizontal'
  }
}`,...(T=(b=t.parameters)==null?void 0:b.docs)==null?void 0:T.source}}},s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...WithLegend.args,
    data: [data[0]],
    showLegend: true,
    legendOrientation: 'vertical'
  }
}`,...(R=(D=s.parameters)==null?void 0:D.docs)==null?void 0:R.source}}}},"../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/toString.js":(_,l,r)=>{"use strict";r.d(l,{A:()=>m});function m(i){return i==null?void 0:i.toString()}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Bar.js":(_,l,r)=>{"use strict";r.d(l,{A:()=>u});var m=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=r("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=r.n(i),n=["className","innerRef"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},c.apply(this,arguments)}function p(e,t){if(e==null)return{};var s={},a=Object.keys(e),o,d;for(d=0;d<a.length;d++)o=a[d],!(t.indexOf(o)>=0)&&(s[o]=e[o]);return s}function u(e){var t=e.className,s=e.innerRef,a=p(e,n);return m.createElement("rect",c({ref:s,className:h()("visx-bar",t)},a))}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Line.js":(_,l,r)=>{"use strict";r.d(l,{A:()=>u});var m=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=r("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=r.n(i),n=["from","to","fill","className","innerRef"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},c.apply(this,arguments)}function p(e,t){if(e==null)return{};var s={},a=Object.keys(e),o,d;for(d=0;d<a.length;d++)o=a[d],!(t.indexOf(o)>=0)&&(s[o]=e[o]);return s}function u(e){var t=e.from,s=t===void 0?{x:0,y:0}:t,a=e.to,o=a===void 0?{x:1,y:1}:a,d=e.fill,g=d===void 0?"transparent":d,f=e.className,y=e.innerRef,v=p(e,n),O=s.x===o.x||s.y===o.y;return m.createElement("line",c({ref:y,className:h()("visx-line",f),x1:s.x,y1:s.y,x2:o.x,y2:o.y,fill:g,shapeRendering:O?"crispEdges":"auto"},v))}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js":(_,l,r)=>{"use strict";var m=r("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function i(){}function h(){}h.resetWarningCache=i,_.exports=function(){function n(u,e,t,s,a,o){if(o!==m){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}n.isRequired=n;function c(){return n}var p={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:c,element:n,elementType:n,instanceOf:c,node:n,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:h,resetWarningCache:i};return p.PropTypes=p,p}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":(_,l,r)=>{if(!1)var m,i;else _.exports=r("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":_=>{"use strict";var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";_.exports=l}}]);})();
