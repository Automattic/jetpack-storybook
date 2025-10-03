"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4722],{"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js":((M,S,n)=>{n.d(S,{A:()=>r});var d=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),i=n.n(d),l=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=n("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),w=n.n(t),m=n("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js");function r(u){var x=u.top,D=x===void 0?0:x,v=u.left,b=v===void 0?0:v,p=u.className,h=u.children;return l.createElement(m.A,{className:w()("visx-glyph",p),top:D,left:b},h)}r.propTypes={top:i().number,left:i().number,className:i().string,children:i().node}}),"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js":((M,S,n)=>{n.d(S,{A:()=>b});var d=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),i=n.n(d),l=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=n("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),w=n.n(t),m=n("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),r=n("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/star.js"),u=n("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),x=["children","className","top","left","size"];function D(){return D=Object.assign?Object.assign.bind():function(p){for(var h=1;h<arguments.length;h++){var y=arguments[h];for(var e in y)Object.prototype.hasOwnProperty.call(y,e)&&(p[e]=y[e])}return p},D.apply(this,arguments)}function v(p,h){if(p==null)return{};var y={},e=Object.keys(p),a,s;for(s=0;s<e.length;s++)a=e[s],!(h.indexOf(a)>=0)&&(y[a]=p[a]);return y}function b(p){var h=p.children,y=p.className,e=p.top,a=p.left,s=p.size,f=v(p,x),c=(0,m.A)();return c.type(r.A),(typeof s=="number"||s)&&c.size(s),h?l.createElement(l.Fragment,null,h({path:c})):l.createElement(u.A,{top:e,left:a},l.createElement("path",D({className:w()("visx-glyph-star",y),d:c()||""},f)))}b.propTypes={children:i().func,className:i().string,top:i().number,left:i().number,size:i().oneOfType([i().number,i().func])}}),"../../../node_modules/.pnpm/@wordpress+deprecated@4.31.0/node_modules/@wordpress/deprecated/build-module/index.js":((M,S,n)=>{n.d(S,{A:()=>l});var d=n("../../../node_modules/.pnpm/@wordpress+hooks@4.31.0/node_modules/@wordpress/hooks/build-module/index.js");const i=Object.create(null);function l(t,w={}){const{since:m,version:r,alternative:u,plugin:x,link:D,hint:v}=w,b=x?` from ${x}`:"",p=m?` since version ${m}`:"",h=r?` and will be removed${b} in version ${r}`:"",y=u?` Please use ${u} instead.`:"",e=D?` See: ${D}`:"",a=v?` Note: ${v}`:"",s=`${t} is deprecated${p}${h}.${y}${e}${a}`;s in i||((0,d.Eo)("deprecated",t,w,s),console.warn(s),i[s]=!0)}}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((M,S,n)=>{n.d(S,{A:()=>l});function d(t){var w,m,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var u=t.length;for(w=0;w<u;w++)t[w]&&(m=d(t[w]))&&(r&&(r+=" "),r+=m)}else for(m in t)t[m]&&(r&&(r+=" "),r+=m);return r}function i(){for(var t,w,m=0,r="",u=arguments.length;m<u;m++)(t=arguments[m])&&(w=d(t))&&(r&&(r+=" "),r+=w);return r}const l=i}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(M=>{var S=function(a){return n(a)&&!d(a)};function n(e){return!!e&&typeof e=="object"}function d(e){var a=Object.prototype.toString.call(e);return a==="[object RegExp]"||a==="[object Date]"||t(e)}var i=typeof Symbol=="function"&&Symbol.for,l=i?Symbol.for("react.element"):60103;function t(e){return e.$$typeof===l}function w(e){return Array.isArray(e)?[]:{}}function m(e,a){return a.clone!==!1&&a.isMergeableObject(e)?h(w(e),e,a):e}function r(e,a,s){return e.concat(a).map(function(f){return m(f,s)})}function u(e,a){if(!a.customMerge)return h;var s=a.customMerge(e);return typeof s=="function"?s:h}function x(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(a){return Object.propertyIsEnumerable.call(e,a)}):[]}function D(e){return Object.keys(e).concat(x(e))}function v(e,a){try{return a in e}catch{return!1}}function b(e,a){return v(e,a)&&!(Object.hasOwnProperty.call(e,a)&&Object.propertyIsEnumerable.call(e,a))}function p(e,a,s){var f={};return s.isMergeableObject(e)&&D(e).forEach(function(c){f[c]=m(e[c],s)}),D(a).forEach(function(c){b(e,c)||(v(e,c)&&s.isMergeableObject(a[c])?f[c]=u(c,s)(e[c],a[c],s):f[c]=m(a[c],s))}),f}function h(e,a,s){s=s||{},s.arrayMerge=s.arrayMerge||r,s.isMergeableObject=s.isMergeableObject||S,s.cloneUnlessOtherwiseSpecified=m;var f=Array.isArray(a),c=Array.isArray(e),O=f===c;return O?f?s.arrayMerge(e,a,s):p(e,a,s):m(a,s)}h.all=function(a,s){if(!Array.isArray(a))throw new Error("first argument should be an array");return a.reduce(function(f,c){return h(f,c,s)},{})};var y=h;M.exports=y}),"../charts/src/components/line-chart/stories/config.tsx":((M,S,n)=>{n.d(S,{Em:()=>E,Nc:()=>G,pn:()=>T});var d=n("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"),i=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),l=n.n(i),t=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),w=n("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=n.n(w),r=n("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),u=n("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/diamond.js"),x=n("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),D=["children","className","top","left","size"];function v(){return v=Object.assign?Object.assign.bind():function(o){for(var L=1;L<arguments.length;L++){var C=arguments[L];for(var g in C)Object.prototype.hasOwnProperty.call(C,g)&&(o[g]=C[g])}return o},v.apply(this,arguments)}function b(o,L){if(o==null)return{};var C={},g=Object.keys(o),A,_;for(_=0;_<g.length;_++)A=g[_],!(L.indexOf(A)>=0)&&(C[A]=o[A]);return C}function p(o){var L=o.children,C=o.className,g=o.top,A=o.left,_=o.size,Y=b(o,D),P=(0,r.A)();return P.type(u.A),(typeof _=="number"||_)&&P.size(_),L?t.createElement(t.Fragment,null,L({path:P})):t.createElement(x.A,{top:g,left:A},t.createElement("path",v({className:m()("visx-glyph-diamond",C),d:P()||""},Y)))}p.propTypes={children:l().func,className:l().string,top:l().number,left:l().number,size:l().oneOfType([l().number,l().func])};var h=n("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),y=n.n(h),e=n("../charts/src/providers/chart-context/themes.ts"),a=n("../charts/src/stories/chart-decorator.tsx"),s=n("../charts/src/stories/legend-config.tsx"),f=n("../charts/src/stories/sample-data/index.ts"),c=n("../charts/src/stories/theme-config.tsx"),O=n("../charts/src/components/private/default-glyph/default-glyph.tsx"),j=n("../charts/src/components/line-chart/line-chart.tsx");const E=y()(e.QI,{glyphs:[o=>(0,t.createElement)(O.W,{...o,key:o.key}),o=>(0,t.createElement)(d.A,{key:o.key,top:o.y,left:o.x,size:o.size*o.size,fill:o.color}),o=>(0,t.createElement)(p,{key:o.key,top:o.y,left:o.x,size:o.size*o.size,fill:o.color})],annotationStyles:{label:{maxWidth:250}}}),G={title:"JS Packages/Charts/Types/Line Chart",component:j.A,parameters:{layout:"centered"},decorators:[a.OI],argTypes:{...s.r,...c.jW,...a.xo}},T={data:f.B2.slice(0,4),withGradientFill:!1,withLegendGlyph:!1,smoothing:!0,maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}},withTooltips:!0};try{E.displayName="glyphTheme",E.__docgenInfo={description:"Custom storybook theme with glyphs",displayName:"glyphTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/stories/config.tsx#glyphTheme"]={docgenInfo:E.__docgenInfo,name:"glyphTheme",path:"../charts/src/components/line-chart/stories/config.tsx#glyphTheme"})}catch{}}),"../charts/src/components/line-chart/stories/index.stories.tsx":((M,S,n)=>{n.r(S),n.d(S,{BrokenLine:()=>T,Comparison:()=>L,CurveTypes:()=>j,CustomDimensions:()=>h,CustomLegendPositioning:()=>b,DateStringFormats:()=>o,Default:()=>u,ErrorStates:()=>f,FixedDimensions:()=>y,GradientCustomColors:()=>a,GradientFilled:()=>e,GradientTransparent:()=>s,ManySeries:()=>D,SingleSeries:()=>x,SmartFormatting:()=>E,WithCompositionLegend:()=>p,WithLegend:()=>v,WithPointerEvents:()=>O,WithoutSmoothing:()=>c,__namedExportsOrder:()=>C,default:()=>m});var d=n("../charts/src/stories/sample-data/index.ts"),i=n("../charts/src/components/line-chart/line-chart.tsx"),l=n("../charts/src/components/line-chart/stories/config.tsx"),t=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m={...l.Nc,title:"JS Packages/Charts/Types/Line Chart",argTypes:{...l.Nc.argTypes}},r=g=>(0,t.jsx)(i.A,{...g}),u=r.bind({});u.args={...l.pn};const x=r.bind({});x.args={data:[d.B2[0]]};const D=r.bind({});D.args={...l.pn,data:d.B2,showLegend:!0};const v=r.bind({});v.args={...l.pn,showLegend:!0};const b=r.bind({});b.args={...l.pn,showLegend:!0,height:400,legendAlignment:"start",legendPosition:"top",legendOrientation:"horizontal",withLegendGlyph:!0},b.parameters={docs:{description:{story:"Line chart with top-left positioned horizontal legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with temperature data for London, Canberra, and Mars."}}};const p={render:g=>(0,t.jsx)("div",{style:{width:"600px",height:"400px"},children:(0,t.jsx)(i.A,{data:g.data||d.Sb,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1,children:(0,t.jsx)(i.A.Legend,{orientation:g.legendOrientation||"horizontal",alignment:g.legendAlignment||"center",position:g.legendPosition||"bottom",maxWidth:g.legendMaxWidth,textOverflow:g.legendTextOverflow||"wrap"})})}),parameters:{docs:{description:{story:"Legend used with LineChart using the composition API, positioned below the chart."}}}},h=r.bind({});h.args={...l.pn,width:800,height:400};const y=r.bind({});y.args={...l.pn,width:800,height:400,withTooltips:!0},y.parameters={docs:{description:{story:"Line chart with fixed dimensions that override the responsive behavior."}}};const e=r.bind({});e.args={...l.pn,margin:void 0,data:d.Sb,withGradientFill:!0,options:{axis:{y:{orientation:"right"}}}};const a=r.bind({});a.args={width:600,height:300,data:[{label:"Revenue",data:[{date:new Date("2024-01-01"),value:45e3},{date:new Date("2024-02-01"),value:52e3},{date:new Date("2024-03-01"),value:48e3},{date:new Date("2024-04-01"),value:61e3},{date:new Date("2024-05-01"),value:68e3},{date:new Date("2024-06-01"),value:72e3}],options:{gradient:{fromOpacity:.8,toOpacity:0}}},{label:"Expenses",data:[{date:new Date("2024-01-01"),value:28e3},{date:new Date("2024-02-01"),value:31e3},{date:new Date("2024-03-01"),value:29e3},{date:new Date("2024-04-01"),value:33e3},{date:new Date("2024-05-01"),value:35e3},{date:new Date("2024-06-01"),value:38e3}],options:{gradient:{from:"var(--jp-red)",to:"var(--jp-red)",fromOpacity:.6,toOpacity:0}}}],withGradientFill:!0};const s=r.bind({});s.args={width:600,height:300,data:[{label:"Temperature (\xB0C)",data:[{date:new Date("2024-01-01"),value:15},{date:new Date("2024-02-01"),value:18},{date:new Date("2024-03-01"),value:22},{date:new Date("2024-04-01"),value:26},{date:new Date("2024-05-01"),value:30},{date:new Date("2024-06-01"),value:28}],options:{gradient:{stops:[{offset:"0%",opacity:.7},{offset:"20%",opacity:0},{offset:"100%",opacity:0}]}}}],withGradientFill:!0};const f={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(i.A,{width:300,height:200,data:[],withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Invalid Date Values"}),(0,t.jsx)(i.A,{width:300,height:200,data:[{label:"Invalid Dates",data:[{date:new Date("invalid"),value:10},{date:new Date("2024-01-02"),value:20}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Invalid Values"}),(0,t.jsx)(i.A,{width:300,height:200,data:[{label:"Invalid Values",data:[{date:new Date("2024-01-01"),value:NaN},{date:new Date("2024-01-02"),value:null}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(i.A,{width:300,height:200,data:[{label:"Single Point",data:[{date:new Date("2024-01-01"),value:100}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]})]}),parameters:{docs:{description:{story:"Examples of how the line chart handles various error states and edge cases."}}}},c=r.bind({});c.args={...l.pn,smoothing:!1};const O=r.bind({});O.args={...l.pn,onPointerDown:({datum:g})=>alert("Pointer down:"+JSON.stringify(g))};const j={render:()=>{const g=[{label:"Sample Series",data:[{date:new Date("2024-01-01"),value:10},{date:new Date("2024-01-02"),value:90},{date:new Date("2024-01-03"),value:85},{date:new Date("2024-01-04"),value:82},{date:new Date("2024-01-05"),value:5},{date:new Date("2024-01-06"),value:8},{date:new Date("2024-01-07"),value:10}],options:{}}];return(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Linear Curve"}),(0,t.jsx)(i.A,{width:300,height:200,data:g,curveType:"linear",withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Smooth Curve (Catmull-Rom)"}),(0,t.jsx)(i.A,{width:300,height:200,data:g,curveType:"smooth",withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Monotone X Curve"}),(0,t.jsx)(i.A,{width:300,height:200,data:g,curveType:"monotone",withGradientFill:!1,withLegendGlyph:!1})]})]})},parameters:{docs:{description:{story:"Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points."}}}},E=r.bind({});E.args={data:d.Gv,withGradientFill:!1,smoothing:!0,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}}},E.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const G=100,T=r.bind({});T.args={...l.pn,data:[{...d.Sb[0],label:"Visitors with dashed line",data:d.Sb[0].data.map(g=>({...g,value:g.value+G})),options:{...d.Sb[0].options,seriesLineStyle:{strokeDasharray:"5 5",strokeWidth:3}}},d.Sb[0]],showLegend:!0},T.parameters={docs:{description:{story:"Demonstrates the option of setting a seriesLineStyle to a dash array."}}};const o={render:()=>(0,t.jsx)(i.A,{data:[{label:"String Dates",data:[{dateString:"2024-01-01",value:10},{dateString:"2024-01-02",value:20},{dateString:"2024-01-03 00:00:00",value:15},{dateString:"2024-01-04",value:25},{dateString:"2024-01-05 00:00",value:30}],options:{}}],withGradientFill:!1,withLegendGlyph:!1}),parameters:{docs:{description:{story:`Demonstrates the line chart's ability to handle various date string formats and mixed date types. All dates are converted to local timezone. The chart can process:
- Simple date strings (YYYY-MM-DD)
- Date with time (YYYY-MM-DD 00:00:00)
- Date with time (YYYY-MM-DD 00:00)
- ISO format (YYYY-MM-DDT00:00:00)
- UTC format (YYYY-MM-DDT00:00:00Z)
- Timezone offset (YYYY-MM-DDT00:00:00\xB1HH:mm)
`}}}},L=r.bind({});L.args={showLegend:!0,smoothing:!1,data:[{...d.B2[0],label:"New York"},{...d.B2[1],label:"New York last year",group:"new-york",options:{type:"comparison"}},{...d.B2[2],label:"Tokyo"},{...d.B2[3],label:"Tokyo last year",group:"tokyo",options:{type:"comparison"}}]};const C=["Default","SingleSeries","ManySeries","WithLegend","CustomLegendPositioning","WithCompositionLegend","CustomDimensions","FixedDimensions","GradientFilled","GradientCustomColors","GradientTransparent","ErrorStates","WithoutSmoothing","WithPointerEvents","CurveTypes","SmartFormatting","BrokenLine","DateStringFormats","Comparison"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...u.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...x.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...D.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...b.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...h.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...y.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...e.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...a.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...s.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...c.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...E.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...T.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...L.parameters?.docs?.source}}}}),"../charts/src/stories/legend-config.tsx":((M,S,n)=>{n.d(S,{r:()=>d});const d={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."}};try{d.displayName="legendArgTypes",d.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:d.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}})}]);
