"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4722],{"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js":((j,L,n)=>{n.d(L,{A:()=>r});var c=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),i=n.n(c),l=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=n("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),w=n.n(t),g=n("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js");function r(u){var b=u.top,D=b===void 0?0:b,v=u.left,x=v===void 0?0:v,p=u.className,h=u.children;return l.createElement(g.A,{className:w()("visx-glyph",p),top:D,left:x},h)}r.propTypes={top:i().number,left:i().number,className:i().string,children:i().node}}),"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js":((j,L,n)=>{n.d(L,{A:()=>x});var c=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),i=n.n(c),l=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=n("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),w=n.n(t),g=n("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),r=n("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/star.js"),u=n("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),b=["children","className","top","left","size"];function D(){return D=Object.assign?Object.assign.bind():function(p){for(var h=1;h<arguments.length;h++){var f=arguments[h];for(var e in f)Object.prototype.hasOwnProperty.call(f,e)&&(p[e]=f[e])}return p},D.apply(this,arguments)}function v(p,h){if(p==null)return{};var f={},e=Object.keys(p),a,s;for(s=0;s<e.length;s++)a=e[s],!(h.indexOf(a)>=0)&&(f[a]=p[a]);return f}function x(p){var h=p.children,f=p.className,e=p.top,a=p.left,s=p.size,y=v(p,b),d=(0,g.A)();return d.type(r.A),(typeof s=="number"||s)&&d.size(s),h?l.createElement(l.Fragment,null,h({path:d})):l.createElement(u.A,{top:e,left:a},l.createElement("path",D({className:w()("visx-glyph-star",f),d:d()||""},y)))}x.propTypes={children:i().func,className:i().string,top:i().number,left:i().number,size:i().oneOfType([i().number,i().func])}}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((j,L,n)=>{n.d(L,{A:()=>l});function c(t){var w,g,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var u=t.length;for(w=0;w<u;w++)t[w]&&(g=c(t[w]))&&(r&&(r+=" "),r+=g)}else for(g in t)t[g]&&(r&&(r+=" "),r+=g);return r}function i(){for(var t,w,g=0,r="",u=arguments.length;g<u;g++)(t=arguments[g])&&(w=c(t))&&(r&&(r+=" "),r+=w);return r}const l=i}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(j=>{var L=function(a){return n(a)&&!c(a)};function n(e){return!!e&&typeof e=="object"}function c(e){var a=Object.prototype.toString.call(e);return a==="[object RegExp]"||a==="[object Date]"||t(e)}var i=typeof Symbol=="function"&&Symbol.for,l=i?Symbol.for("react.element"):60103;function t(e){return e.$$typeof===l}function w(e){return Array.isArray(e)?[]:{}}function g(e,a){return a.clone!==!1&&a.isMergeableObject(e)?h(w(e),e,a):e}function r(e,a,s){return e.concat(a).map(function(y){return g(y,s)})}function u(e,a){if(!a.customMerge)return h;var s=a.customMerge(e);return typeof s=="function"?s:h}function b(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(a){return Object.propertyIsEnumerable.call(e,a)}):[]}function D(e){return Object.keys(e).concat(b(e))}function v(e,a){try{return a in e}catch{return!1}}function x(e,a){return v(e,a)&&!(Object.hasOwnProperty.call(e,a)&&Object.propertyIsEnumerable.call(e,a))}function p(e,a,s){var y={};return s.isMergeableObject(e)&&D(e).forEach(function(d){y[d]=g(e[d],s)}),D(a).forEach(function(d){x(e,d)||(v(e,d)&&s.isMergeableObject(a[d])?y[d]=u(d,s)(e[d],a[d],s):y[d]=g(a[d],s))}),y}function h(e,a,s){s=s||{},s.arrayMerge=s.arrayMerge||r,s.isMergeableObject=s.isMergeableObject||L,s.cloneUnlessOtherwiseSpecified=g;var y=Array.isArray(a),d=Array.isArray(e),C=y===d;return C?y?s.arrayMerge(e,a,s):p(e,a,s):g(a,s)}h.all=function(a,s){if(!Array.isArray(a))throw new Error("first argument should be an array");return a.reduce(function(y,d){return h(y,d,s)},{})};var f=h;j.exports=f}),"../charts/src/components/line-chart/stories/config.tsx":((j,L,n)=>{n.d(L,{Em:()=>E,Nc:()=>G,pn:()=>T});var c=n("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"),i=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),l=n.n(i),t=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),w=n("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=n.n(w),r=n("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),u=n("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/diamond.js"),b=n("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),D=["children","className","top","left","size"];function v(){return v=Object.assign?Object.assign.bind():function(o){for(var S=1;S<arguments.length;S++){var O=arguments[S];for(var m in O)Object.prototype.hasOwnProperty.call(O,m)&&(o[m]=O[m])}return o},v.apply(this,arguments)}function x(o,S){if(o==null)return{};var O={},m=Object.keys(o),A,M;for(M=0;M<m.length;M++)A=m[M],!(S.indexOf(A)>=0)&&(O[A]=o[A]);return O}function p(o){var S=o.children,O=o.className,m=o.top,A=o.left,M=o.size,Y=x(o,D),P=(0,r.A)();return P.type(u.A),(typeof M=="number"||M)&&P.size(M),S?t.createElement(t.Fragment,null,S({path:P})):t.createElement(b.A,{top:m,left:A},t.createElement("path",v({className:g()("visx-glyph-diamond",O),d:P()||""},Y)))}p.propTypes={children:l().func,className:l().string,top:l().number,left:l().number,size:l().oneOfType([l().number,l().func])};var h=n("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),f=n.n(h),e=n("../charts/src/providers/chart-context/themes.ts"),a=n("../charts/src/stories/chart-decorator.tsx"),s=n("../charts/src/stories/legend-config.tsx"),y=n("../charts/src/stories/sample-data/index.ts"),d=n("../charts/src/stories/theme-config.tsx"),C=n("../charts/src/components/private/default-glyph/default-glyph.tsx"),_=n("../charts/src/components/line-chart/line-chart.tsx");const E=f()(e.QI,{glyphs:[o=>(0,t.createElement)(C.W,{...o,key:o.key}),o=>(0,t.createElement)(c.A,{key:o.key,top:o.y,left:o.x,size:o.size*o.size,fill:o.color}),o=>(0,t.createElement)(p,{key:o.key,top:o.y,left:o.x,size:o.size*o.size,fill:o.color})],annotationStyles:{label:{maxWidth:250}}}),G={title:"JS Packages/Charts/Types/Line Chart",component:_.A,parameters:{layout:"centered"},decorators:[a.OI],argTypes:{...s.r,...d.jW,...a.xo}},T={data:y.B2.slice(0,4),withGradientFill:!1,withLegendGlyph:!1,smoothing:!0,maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}},withTooltips:!0};try{E.displayName="glyphTheme",E.__docgenInfo={description:"Custom storybook theme with glyphs",displayName:"glyphTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/stories/config.tsx#glyphTheme"]={docgenInfo:E.__docgenInfo,name:"glyphTheme",path:"../charts/src/components/line-chart/stories/config.tsx#glyphTheme"})}catch{}}),"../charts/src/components/line-chart/stories/index.stories.tsx":((j,L,n)=>{n.r(L),n.d(L,{BrokenLine:()=>T,Comparison:()=>S,CurveTypes:()=>_,CustomDimensions:()=>h,CustomLegendPositioning:()=>x,DateStringFormats:()=>o,Default:()=>u,ErrorStates:()=>y,FixedDimensions:()=>f,GradientCustomColors:()=>a,GradientFilled:()=>e,GradientTransparent:()=>s,ManySeries:()=>D,SingleSeries:()=>b,SmartFormatting:()=>E,WithCompositionLegend:()=>p,WithLegend:()=>v,WithPointerEvents:()=>C,WithoutSmoothing:()=>d,__namedExportsOrder:()=>O,default:()=>g});var c=n("../charts/src/stories/sample-data/index.ts"),i=n("../charts/src/components/line-chart/line-chart.tsx"),l=n("../charts/src/components/line-chart/stories/config.tsx"),t=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g={...l.Nc,title:"JS Packages/Charts/Types/Line Chart",argTypes:{...l.Nc.argTypes}},r=m=>(0,t.jsx)(i.A,{...m}),u=r.bind({});u.args={...l.pn};const b=r.bind({});b.args={data:[c.B2[0]]};const D=r.bind({});D.args={...l.pn,data:c.B2,showLegend:!0};const v=r.bind({});v.args={...l.pn,showLegend:!0};const x=r.bind({});x.args={...l.pn,showLegend:!0,height:400,legendAlignment:"start",legendPosition:"top",legendOrientation:"horizontal",withLegendGlyph:!0},x.parameters={docs:{description:{story:"Line chart with top-left positioned horizontal legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with temperature data for London, Canberra, and Mars."}}};const p={render:m=>(0,t.jsx)("div",{style:{width:"600px",height:"400px"},children:(0,t.jsx)(i.A,{data:m.data||c.Sb,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1,children:(0,t.jsx)(i.A.Legend,{orientation:m.legendOrientation||"horizontal",alignment:m.legendAlignment||"center",position:m.legendPosition||"bottom",maxWidth:m.legendMaxWidth,textOverflow:m.legendTextOverflow||"wrap"})})}),parameters:{docs:{description:{story:"Legend used with LineChart using the composition API, positioned below the chart."}}}},h=r.bind({});h.args={...l.pn,width:800,height:400};const f=r.bind({});f.args={...l.pn,width:800,height:400,withTooltips:!0},f.parameters={docs:{description:{story:"Line chart with fixed dimensions that override the responsive behavior."}}};const e=r.bind({});e.args={...l.pn,margin:void 0,data:c.Sb,withGradientFill:!0,options:{axis:{y:{orientation:"right"}}}};const a=r.bind({});a.args={width:600,height:300,data:[{label:"Revenue",data:[{date:new Date("2024-01-01"),value:45e3},{date:new Date("2024-02-01"),value:52e3},{date:new Date("2024-03-01"),value:48e3},{date:new Date("2024-04-01"),value:61e3},{date:new Date("2024-05-01"),value:68e3},{date:new Date("2024-06-01"),value:72e3}],options:{gradient:{fromOpacity:.8,toOpacity:0}}},{label:"Expenses",data:[{date:new Date("2024-01-01"),value:28e3},{date:new Date("2024-02-01"),value:31e3},{date:new Date("2024-03-01"),value:29e3},{date:new Date("2024-04-01"),value:33e3},{date:new Date("2024-05-01"),value:35e3},{date:new Date("2024-06-01"),value:38e3}],options:{gradient:{from:"var(--jp-red)",to:"var(--jp-red)",fromOpacity:.6,toOpacity:0}}}],withGradientFill:!0};const s=r.bind({});s.args={width:600,height:300,data:[{label:"Temperature (\xB0C)",data:[{date:new Date("2024-01-01"),value:15},{date:new Date("2024-02-01"),value:18},{date:new Date("2024-03-01"),value:22},{date:new Date("2024-04-01"),value:26},{date:new Date("2024-05-01"),value:30},{date:new Date("2024-06-01"),value:28}],options:{gradient:{stops:[{offset:"0%",opacity:.7},{offset:"20%",opacity:0},{offset:"100%",opacity:0}]}}}],withGradientFill:!0};const y={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(i.A,{width:300,height:200,data:[],withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Invalid Date Values"}),(0,t.jsx)(i.A,{width:300,height:200,data:[{label:"Invalid Dates",data:[{date:new Date("invalid"),value:10},{date:new Date("2024-01-02"),value:20}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Invalid Values"}),(0,t.jsx)(i.A,{width:300,height:200,data:[{label:"Invalid Values",data:[{date:new Date("2024-01-01"),value:NaN},{date:new Date("2024-01-02"),value:null}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(i.A,{width:300,height:200,data:[{label:"Single Point",data:[{date:new Date("2024-01-01"),value:100}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]})]}),parameters:{docs:{description:{story:"Examples of how the line chart handles various error states and edge cases."}}}},d=r.bind({});d.args={...l.pn,smoothing:!1};const C=r.bind({});C.args={...l.pn,onPointerDown:({datum:m})=>alert("Pointer down:"+JSON.stringify(m))};const _={render:()=>{const m=[{label:"Sample Series",data:[{date:new Date("2024-01-01"),value:10},{date:new Date("2024-01-02"),value:90},{date:new Date("2024-01-03"),value:85},{date:new Date("2024-01-04"),value:82},{date:new Date("2024-01-05"),value:5},{date:new Date("2024-01-06"),value:8},{date:new Date("2024-01-07"),value:10}],options:{}}];return(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Linear Curve"}),(0,t.jsx)(i.A,{width:300,height:200,data:m,curveType:"linear",withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Smooth Curve (Catmull-Rom)"}),(0,t.jsx)(i.A,{width:300,height:200,data:m,curveType:"smooth",withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Monotone X Curve"}),(0,t.jsx)(i.A,{width:300,height:200,data:m,curveType:"monotone",withGradientFill:!1,withLegendGlyph:!1})]})]})},parameters:{docs:{description:{story:"Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points."}}}},E=r.bind({});E.args={data:c.Gv,withGradientFill:!1,smoothing:!0,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}}},E.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const G=100,T=r.bind({});T.args={...l.pn,data:[{...c.Sb[0],label:"Visitors with dashed line",data:c.Sb[0].data.map(m=>({...m,value:m.value+G})),options:{...c.Sb[0].options,seriesLineStyle:{strokeDasharray:"5 5",strokeWidth:3}}},c.Sb[0]],showLegend:!0},T.parameters={docs:{description:{story:"Demonstrates the option of setting a seriesLineStyle to a dash array."}}};const o={render:()=>(0,t.jsx)(i.A,{data:[{label:"String Dates",data:[{dateString:"2024-01-01",value:10},{dateString:"2024-01-02",value:20},{dateString:"2024-01-03 00:00:00",value:15},{dateString:"2024-01-04",value:25},{dateString:"2024-01-05 00:00",value:30}],options:{}}],withGradientFill:!1,withLegendGlyph:!1}),parameters:{docs:{description:{story:`Demonstrates the line chart's ability to handle various date string formats and mixed date types. All dates are converted to local timezone. The chart can process:
- Simple date strings (YYYY-MM-DD)
- Date with time (YYYY-MM-DD 00:00:00)
- Date with time (YYYY-MM-DD 00:00)
- ISO format (YYYY-MM-DDT00:00:00)
- UTC format (YYYY-MM-DDT00:00:00Z)
- Timezone offset (YYYY-MM-DDT00:00:00\xB1HH:mm)
`}}}},S=r.bind({});S.args={showLegend:!0,smoothing:!1,data:[{...c.B2[0],label:"New York"},{...c.B2[1],label:"New York last year",group:"new-york",options:{type:"comparison"}},{...c.B2[2],label:"Tokyo"},{...c.B2[3],label:"Tokyo last year",group:"tokyo",options:{type:"comparison"}}]};const O=["Default","SingleSeries","ManySeries","WithLegend","CustomLegendPositioning","WithCompositionLegend","CustomDimensions","FixedDimensions","GradientFilled","GradientCustomColors","GradientTransparent","ErrorStates","WithoutSmoothing","WithPointerEvents","CurveTypes","SmartFormatting","BrokenLine","DateStringFormats","Comparison"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...u.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...b.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...D.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...x.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '600px',
    height: '400px'
  }}>
            <LineChart data={args.data || webTrafficData} width={600} height={300} withGradientFill={false} withLegendGlyph={false}>
                <LineChart.Legend orientation={args.legendOrientation || 'horizontal'} alignment={args.legendAlignment || 'center'} position={args.legendPosition || 'bottom'} maxWidth={args.legendMaxWidth} textOverflow={args.legendTextOverflow || 'wrap'} />
            </LineChart>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with LineChart using the composition API, positioned below the chart.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...h.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...f.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...e.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...a.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...s.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Empty Data</h3>
                <LineChart width={300} height={200} data={[]} withGradientFill={false} withLegendGlyph={false} />
            </div>
            <div>
                <h3>Invalid Date Values</h3>
                <LineChart width={300} height={200} data={[{
        label: 'Invalid Dates',
        data: [{
          date: new Date('invalid'),
          value: 10
        }, {
          date: new Date('2024-01-02'),
          value: 20
        }],
        options: {}
      }]} withGradientFill={false} withLegendGlyph={false} />
            </div>
            <div>
                <h3>Invalid Values</h3>
                <LineChart width={300} height={200} data={[{
        label: 'Invalid Values',
        data: [{
          date: new Date('2024-01-01'),
          value: NaN
        }, {
          date: new Date('2024-01-02'),
          value: null as number | null
        }],
        options: {}
      }]} withGradientFill={false} withLegendGlyph={false} />
            </div>
            <div>
                <h3>Single Data Point</h3>
                <LineChart width={300} height={200} data={[{
        label: 'Single Point',
        data: [{
          date: new Date('2024-01-01'),
          value: 100
        }],
        options: {}
      }]} withGradientFill={false} withLegendGlyph={false} />
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of how the line chart handles various error states and edge cases.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...d.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...C.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    // Create sample data that highlights the difference between curve types
    // Monotone X will prevent overshooting on steep changes followed by gradual changes
    const curveData = [{
      label: 'Sample Series',
      data: [{
        date: new Date('2024-01-01'),
        value: 10
      }, {
        date: new Date('2024-01-02'),
        value: 90
      },
      // Sharp rise
      {
        date: new Date('2024-01-03'),
        value: 85
      },
      // Slight decline
      {
        date: new Date('2024-01-04'),
        value: 82
      },
      // Gradual decline
      {
        date: new Date('2024-01-05'),
        value: 5
      },
      // Sharp drop
      {
        date: new Date('2024-01-06'),
        value: 8
      },
      // Slight rise
      {
        date: new Date('2024-01-07'),
        value: 10
      } // Gradual rise
      ],
      options: {}
    }];
    return <div style={{
      display: 'grid',
      gap: '2rem',
      gridTemplateColumns: 'repeat(3, 1fr)'
    }}>
                <div>
                    <h3>Linear Curve</h3>
                    <LineChart width={300} height={200} data={curveData} curveType="linear" withGradientFill={false} withLegendGlyph={false} />
                </div>
                <div>
                    <h3>Smooth Curve (Catmull-Rom)</h3>
                    <LineChart width={300} height={200} data={curveData} curveType="smooth" withGradientFill={false} withLegendGlyph={false} />
                </div>
                <div>
                    <h3>Monotone X Curve</h3>
                    <LineChart width={300} height={200} data={curveData} curveType="monotone" withGradientFill={false} withLegendGlyph={false} />
                </div>
            </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...E.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...T.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <LineChart data={[{
      label: 'String Dates',
      data: [{
        dateString: '2024-01-01',
        value: 10
      }, {
        dateString: '2024-01-02',
        value: 20
      }, {
        dateString: '2024-01-03 00:00:00',
        value: 15
      }, {
        dateString: '2024-01-04',
        value: 25
      }, {
        dateString: '2024-01-05 00:00',
        value: 30
      }],
      options: {}
    }]} withGradientFill={false} withLegendGlyph={false} />;
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates the line chart's ability to handle various date string formats and mixed date types. All dates are converted to local timezone. The chart can process:\\n" + '- Simple date strings (YYYY-MM-DD)\\n' + '- Date with time (YYYY-MM-DD 00:00:00)\\n' + '- Date with time (YYYY-MM-DD 00:00)\\n' + '- ISO format (YYYY-MM-DDT00:00:00)\\n' + '- UTC format (YYYY-MM-DDT00:00:00Z)\\n' + '- Timezone offset (YYYY-MM-DDT00:00:00\xB1HH:mm)\\n'
      }
    }
  }
}`,...o.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...S.parameters?.docs?.source}}}}),"../charts/src/stories/legend-config.tsx":((j,L,n)=>{n.d(L,{r:()=>c});const c={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."}};try{c.displayName="legendArgTypes",c.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:c.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}})}]);
