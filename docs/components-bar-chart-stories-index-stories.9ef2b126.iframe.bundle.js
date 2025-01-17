(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":(h,l,a)=>{var d,g,f,y,v,x,O,E,P,b,D,T,j,R,S,L,A,W;"use strict";a.r(l),a.d(l,{Default:()=>p,FixedDimensions:()=>t,ManyDataSeries:()=>e,SingleSeries:()=>u,WithLegend:()=>r,WithVerticalLegend:()=>s,__namedExportsOrder:()=>i,default:()=>c});var m=a("../charts/src/components/bar-chart/bar-chart.tsx"),n=a("../charts/src/components/bar-chart/stories/sample-data.ts"),_=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c={title:"JS Packages/Charts/Types/Bar Chart",component:m.A,parameters:{layout:"centered"},decorators:[w=>(0,_.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,_.jsx)(w,{})})]},p={args:{withTooltips:!0,data:[n.A[0],n.A[1],n.A[2]],showLegend:!1,legendOrientation:"horizontal",gridVisibility:"x"}},u={args:{...p.args,data:[n.A[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},e={args:{...p.args,data:n.A},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},r={args:{...p.args,data:n.A,showTooltips:!0,showLegend:!0,legendOrientation:"horizontal"}},s={args:{...r.args,data:[n.A[0]],showLegend:!0,legendOrientation:"vertical"}},t={args:{...p.args,width:800,height:400,data:[n.A[0],n.A[1],n.A[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},i=["Default","SingleSeries","ManyDataSeries","WithLegend","WithVerticalLegend","FixedDimensions"];p.parameters={...p.parameters,docs:{...(d=p.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: [data[0], data[1], data[2]],
    // limit to 3 series for better readability
    showLegend: false,
    legendOrientation: 'horizontal',
    gridVisibility: 'x'
  }
}`,...(f=(g=p.parameters)==null?void 0:g.docs)==null?void 0:f.source}}},u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(v=u.parameters)==null?void 0:v.docs)==null?void 0:x.source}}},e.parameters={...e.parameters,docs:{...(O=e.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(P=(E=e.parameters)==null?void 0:E.docs)==null?void 0:P.source}}},r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data,
    showTooltips: true,
    showLegend: true,
    legendOrientation: 'horizontal'
  }
}`,...(T=(D=r.parameters)==null?void 0:D.docs)==null?void 0:T.source}}},s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...WithLegend.args,
    data: [data[0]],
    showLegend: true,
    legendOrientation: 'vertical'
  }
}`,...(S=(R=s.parameters)==null?void 0:R.docs)==null?void 0:S.source}}},t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(W=(A=t.parameters)==null?void 0:A.docs)==null?void 0:W.source}}}},"../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/toString.js":(h,l,a)=>{"use strict";a.d(l,{A:()=>m});function m(n){return n==null?void 0:n.toString()}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Bar.js":(h,l,a)=>{"use strict";a.d(l,{A:()=>u});var m=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=a("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=a.n(n),o=["className","innerRef"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e},c.apply(this,arguments)}function p(e,r){if(e==null)return{};var s={},t=Object.keys(e),i,d;for(d=0;d<t.length;d++)i=t[d],!(r.indexOf(i)>=0)&&(s[i]=e[i]);return s}function u(e){var r=e.className,s=e.innerRef,t=p(e,o);return m.createElement("rect",c({ref:s,className:_()("visx-bar",r)},t))}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Line.js":(h,l,a)=>{"use strict";a.d(l,{A:()=>u});var m=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=a("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=a.n(n),o=["from","to","fill","className","innerRef"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e},c.apply(this,arguments)}function p(e,r){if(e==null)return{};var s={},t=Object.keys(e),i,d;for(d=0;d<t.length;d++)i=t[d],!(r.indexOf(i)>=0)&&(s[i]=e[i]);return s}function u(e){var r=e.from,s=r===void 0?{x:0,y:0}:r,t=e.to,i=t===void 0?{x:1,y:1}:t,d=e.fill,g=d===void 0?"transparent":d,f=e.className,y=e.innerRef,v=p(e,o),x=s.x===i.x||s.y===i.y;return m.createElement("line",c({ref:y,className:_()("visx-line",f),x1:s.x,y1:s.y,x2:i.x,y2:i.y,fill:g,shapeRendering:x?"crispEdges":"auto"},v))}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js":(h,l,a)=>{"use strict";var m=a("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function n(){}function _(){}_.resetWarningCache=n,h.exports=function(){function o(u,e,r,s,t,i){if(i!==m){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}o.isRequired=o;function c(){return o}var p={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:c,element:o,elementType:o,instanceOf:c,node:o,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:_,resetWarningCache:n};return p.PropTypes=p,p}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":(h,l,a)=>{if(!1)var m,n;else h.exports=a("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":h=>{"use strict";var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";h.exports=l}}]);})();
