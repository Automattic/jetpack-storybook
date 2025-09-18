"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4722],{"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js":((O,D,a)=>{a.d(D,{A:()=>o});var l=a("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),i=a.n(l),g=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=a("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=a.n(t),m=a("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js");function o(p){var x=p.top,w=x===void 0?0:x,u=p.left,b=u===void 0?0:u,c=p.className,h=p.children;return g.createElement(m.A,{className:v()("visx-glyph",c),top:w,left:b},h)}o.propTypes={top:i().number,left:i().number,className:i().string,children:i().node}}),"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js":((O,D,a)=>{a.d(D,{A:()=>b});var l=a("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),i=a.n(l),g=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=a("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=a.n(t),m=a("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),o=a("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/star.js"),p=a("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),x=["children","className","top","left","size"];function w(){return w=Object.assign?Object.assign.bind():function(c){for(var h=1;h<arguments.length;h++){var y=arguments[h];for(var e in y)Object.prototype.hasOwnProperty.call(y,e)&&(c[e]=y[e])}return c},w.apply(this,arguments)}function u(c,h){if(c==null)return{};var y={},e=Object.keys(c),n,s;for(s=0;s<e.length;s++)n=e[s],!(h.indexOf(n)>=0)&&(y[n]=c[n]);return y}function b(c){var h=c.children,y=c.className,e=c.top,n=c.left,s=c.size,f=u(c,x),d=(0,m.A)();return d.type(o.A),(typeof s=="number"||s)&&d.size(s),h?g.createElement(g.Fragment,null,h({path:d})):g.createElement(p.A,{top:e,left:n},g.createElement("path",w({className:v()("visx-glyph-star",y),d:d()||""},f)))}b.propTypes={children:i().func,className:i().string,top:i().number,left:i().number,size:i().oneOfType([i().number,i().func])}}),"../../../node_modules/.pnpm/@wordpress+deprecated@4.31.0/node_modules/@wordpress/deprecated/build-module/index.js":((O,D,a)=>{a.d(D,{A:()=>g});var l=a("../../../node_modules/.pnpm/@wordpress+hooks@4.31.0/node_modules/@wordpress/hooks/build-module/index.js");const i=Object.create(null);function g(t,v={}){const{since:m,version:o,alternative:p,plugin:x,link:w,hint:u}=v,b=x?` from ${x}`:"",c=m?` since version ${m}`:"",h=o?` and will be removed${b} in version ${o}`:"",y=p?` Please use ${p} instead.`:"",e=w?` See: ${w}`:"",n=u?` Note: ${u}`:"",s=`${t} is deprecated${c}${h}.${y}${e}${n}`;s in i||((0,l.Eo)("deprecated",t,v,s),console.warn(s),i[s]=!0)}}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((O,D,a)=>{a.d(D,{A:()=>g});function l(t){var v,m,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t)){var p=t.length;for(v=0;v<p;v++)t[v]&&(m=l(t[v]))&&(o&&(o+=" "),o+=m)}else for(m in t)t[m]&&(o&&(o+=" "),o+=m);return o}function i(){for(var t,v,m=0,o="",p=arguments.length;m<p;m++)(t=arguments[m])&&(v=l(t))&&(o&&(o+=" "),o+=v);return o}const g=i}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(O=>{var D=function(n){return a(n)&&!l(n)};function a(e){return!!e&&typeof e=="object"}function l(e){var n=Object.prototype.toString.call(e);return n==="[object RegExp]"||n==="[object Date]"||t(e)}var i=typeof Symbol=="function"&&Symbol.for,g=i?Symbol.for("react.element"):60103;function t(e){return e.$$typeof===g}function v(e){return Array.isArray(e)?[]:{}}function m(e,n){return n.clone!==!1&&n.isMergeableObject(e)?h(v(e),e,n):e}function o(e,n,s){return e.concat(n).map(function(f){return m(f,s)})}function p(e,n){if(!n.customMerge)return h;var s=n.customMerge(e);return typeof s=="function"?s:h}function x(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(n){return Object.propertyIsEnumerable.call(e,n)}):[]}function w(e){return Object.keys(e).concat(x(e))}function u(e,n){try{return n in e}catch{return!1}}function b(e,n){return u(e,n)&&!(Object.hasOwnProperty.call(e,n)&&Object.propertyIsEnumerable.call(e,n))}function c(e,n,s){var f={};return s.isMergeableObject(e)&&w(e).forEach(function(d){f[d]=m(e[d],s)}),w(n).forEach(function(d){b(e,d)||(u(e,d)&&s.isMergeableObject(n[d])?f[d]=p(d,s)(e[d],n[d],s):f[d]=m(n[d],s))}),f}function h(e,n,s){s=s||{},s.arrayMerge=s.arrayMerge||o,s.isMergeableObject=s.isMergeableObject||D,s.cloneUnlessOtherwiseSpecified=m;var f=Array.isArray(n),d=Array.isArray(e),A=f===d;return A?f?s.arrayMerge(e,n,s):c(e,n,s):m(n,s)}h.all=function(n,s){if(!Array.isArray(n))throw new Error("first argument should be an array");return n.reduce(function(f,d){return h(f,d,s)},{})};var y=h;O.exports=y}),"../charts/src/components/line-chart/stories/config.tsx":((O,D,a)=>{a.d(D,{Em:()=>L,Nc:()=>_,pn:()=>G});var l=a("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"),i=a("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),g=a.n(i),t=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),v=a("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=a.n(v),o=a("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),p=a("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/diamond.js"),x=a("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),w=["children","className","top","left","size"];function u(){return u=Object.assign?Object.assign.bind():function(r){for(var T=1;T<arguments.length;T++){var C=arguments[T];for(var M in C)Object.prototype.hasOwnProperty.call(C,M)&&(r[M]=C[M])}return r},u.apply(this,arguments)}function b(r,T){if(r==null)return{};var C={},M=Object.keys(r),j,E;for(E=0;E<M.length;E++)j=M[E],!(T.indexOf(j)>=0)&&(C[j]=r[j]);return C}function c(r){var T=r.children,C=r.className,M=r.top,j=r.left,E=r.size,Y=b(r,w),P=(0,o.A)();return P.type(p.A),(typeof E=="number"||E)&&P.size(E),T?t.createElement(t.Fragment,null,T({path:P})):t.createElement(x.A,{top:M,left:j},t.createElement("path",u({className:m()("visx-glyph-diamond",C),d:P()||""},Y)))}c.propTypes={children:g().func,className:g().string,top:g().number,left:g().number,size:g().oneOfType([g().number,g().func])};var h=a("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),y=a.n(h),e=a("../charts/src/providers/chart-context/themes.ts"),n=a("../charts/src/stories/chart-decorator.tsx"),s=a("../charts/src/stories/legend-config.tsx"),f=a("../charts/src/stories/sample-data/index.ts"),d=a("../charts/src/stories/theme-config.tsx"),A=a("../charts/src/components/private/default-glyph/default-glyph.tsx"),S=a("../charts/src/components/line-chart/line-chart.tsx");const L=y()(e.QI,{glyphs:[r=>(0,t.createElement)(A.W,{...r,key:r.key}),r=>(0,t.createElement)(l.A,{key:r.key,top:r.y,left:r.x,size:r.size*r.size,fill:r.color}),r=>(0,t.createElement)(c,{key:r.key,top:r.y,left:r.x,size:r.size*r.size,fill:r.color})],annotationStyles:{label:{maxWidth:250}}}),_={title:"JS Packages/Charts/Types/Line Chart",component:S.A,parameters:{layout:"centered"},decorators:[n.OI],argTypes:{...s.r,...d.jW,...n.xo}},G={data:f.B2,withGradientFill:!1,withLegendGlyph:!1,smoothing:!0,maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}},withTooltips:!0};try{L.displayName="glyphTheme",L.__docgenInfo={description:"Custom storybook theme with glyphs",displayName:"glyphTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/stories/config.tsx#glyphTheme"]={docgenInfo:L.__docgenInfo,name:"glyphTheme",path:"../charts/src/components/line-chart/stories/config.tsx#glyphTheme"})}catch{}}),"../charts/src/components/line-chart/stories/index.stories.tsx":((O,D,a)=>{a.r(D),a.d(D,{BrokenLine:()=>S,Comparison:()=>_,CurveTypes:()=>f,CustomDimensions:()=>c,CustomLegendPositioning:()=>u,DateStringFormats:()=>L,Default:()=>p,ErrorStates:()=>e,FixedDimensions:()=>h,GradientFilled:()=>y,SingleSeries:()=>x,SmartFormatting:()=>d,WithCompositionLegend:()=>b,WithLegend:()=>w,WithPointerEvents:()=>s,WithoutSmoothing:()=>n,__namedExportsOrder:()=>G,default:()=>m});var l=a("../charts/src/stories/sample-data/index.ts"),i=a("../charts/src/components/line-chart/line-chart.tsx"),g=a("../charts/src/components/line-chart/stories/config.tsx"),t=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m={...g.Nc,title:"JS Packages/Charts/Types/Line Chart",argTypes:{...g.Nc.argTypes}},o=r=>(0,t.jsx)(i.A,{...r}),p=o.bind({});p.args={...g.pn};const x=o.bind({});x.args={data:[l.B2[0]]};const w=o.bind({});w.args={...g.pn,showLegend:!0};const u=o.bind({});u.args={data:l.B2,showLegend:!0,height:400,legendAlignment:"start",legendPosition:"top",legendOrientation:"horizontal",withLegendGlyph:!0},u.parameters={docs:{description:{story:"Line chart with top-left positioned horizontal legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with temperature data for London, Canberra, and Mars."}}};const b={render:r=>(0,t.jsx)("div",{style:{width:"600px",height:"400px"},children:(0,t.jsx)(i.A,{data:r.data||l.Sb,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1,children:(0,t.jsx)(i.A.Legend,{orientation:r.legendOrientation||"horizontal",alignment:r.legendAlignment||"center",position:r.legendPosition||"bottom",maxWidth:r.legendMaxWidth,textOverflow:r.legendTextOverflow||"wrap"})})}),parameters:{docs:{description:{story:"Legend used with LineChart using the composition API, positioned below the chart."}}}},c=o.bind({});c.args={width:800,height:400,data:l.B2};const h=o.bind({});h.args={width:800,height:400,data:l.B2,withTooltips:!0},h.parameters={docs:{description:{story:"Line chart with fixed dimensions that override the responsive behavior."}}};const y=o.bind({});y.args={...p.args,margin:void 0,data:l.Sb,withGradientFill:!0,options:{axis:{y:{orientation:"right"}}}};const e={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(i.A,{width:300,height:200,data:[],withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Invalid Date Values"}),(0,t.jsx)(i.A,{width:300,height:200,data:[{label:"Invalid Dates",data:[{date:new Date("invalid"),value:10},{date:new Date("2024-01-02"),value:20}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Invalid Values"}),(0,t.jsx)(i.A,{width:300,height:200,data:[{label:"Invalid Values",data:[{date:new Date("2024-01-01"),value:NaN},{date:new Date("2024-01-02"),value:null}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(i.A,{width:300,height:200,data:[{label:"Single Point",data:[{date:new Date("2024-01-01"),value:100}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]})]}),parameters:{docs:{description:{story:"Examples of how the line chart handles various error states and edge cases."}}}},n=o.bind({});n.args={...p.args,smoothing:!1};const s=o.bind({});s.args={...p.args,onPointerDown:({datum:r})=>alert("Pointer down:"+JSON.stringify(r))};const f={render:()=>{const r=[{label:"Sample Series",data:[{date:new Date("2024-01-01"),value:10},{date:new Date("2024-01-02"),value:90},{date:new Date("2024-01-03"),value:85},{date:new Date("2024-01-04"),value:82},{date:new Date("2024-01-05"),value:5},{date:new Date("2024-01-06"),value:8},{date:new Date("2024-01-07"),value:10}],options:{}}];return(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Linear Curve"}),(0,t.jsx)(i.A,{width:300,height:200,data:r,curveType:"linear",withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Smooth Curve (Catmull-Rom)"}),(0,t.jsx)(i.A,{width:300,height:200,data:r,curveType:"smooth",withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Monotone X Curve"}),(0,t.jsx)(i.A,{width:300,height:200,data:r,curveType:"monotone",withGradientFill:!1,withLegendGlyph:!1})]})]})},parameters:{docs:{description:{story:"Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points."}}}},d=o.bind({});d.args={data:l.Gv,withGradientFill:!1,smoothing:!0,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}}},d.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const A=100,S=o.bind({});S.args={...p.args,data:[{...l.Sb[0],label:"Visitors with dashed line",data:l.Sb[0].data.map(r=>({...r,value:r.value+A})),options:{...l.Sb[0].options,seriesLineStyle:{strokeDasharray:"5 5",strokeWidth:3}}},l.Sb[0]],showLegend:!0},S.parameters={docs:{description:{story:"Demonstrates the option of setting a seriesLineStyle to a dash array."}}};const L={render:()=>(0,t.jsx)(i.A,{data:[{label:"String Dates",data:[{dateString:"2024-01-01",value:10},{dateString:"2024-01-02",value:20},{dateString:"2024-01-03 00:00:00",value:15},{dateString:"2024-01-04",value:25},{dateString:"2024-01-05 00:00",value:30}],options:{}}],withGradientFill:!1,withLegendGlyph:!1}),parameters:{docs:{description:{story:`Demonstrates the line chart's ability to handle various date string formats and mixed date types. All dates are converted to local timezone. The chart can process:
- Simple date strings (YYYY-MM-DD)
- Date with time (YYYY-MM-DD 00:00:00)
- Date with time (YYYY-MM-DD 00:00)
- ISO format (YYYY-MM-DDT00:00:00)
- UTC format (YYYY-MM-DDT00:00:00Z)
- Timezone offset (YYYY-MM-DDT00:00:00\xB1HH:mm)
`}}}},_=o.bind({});_.args={showLegend:!0,smoothing:!1,data:[{...l.B2[0],label:"New York"},{...l.B2[1],label:"New York last year",group:"new-york",options:{type:"comparison"}},{...l.B2[2],label:"Tokyo"},{...l.B2[3],label:"Tokyo last year",group:"tokyo",options:{type:"comparison"}}]};const G=["Default","SingleSeries","WithLegend","CustomLegendPositioning","WithCompositionLegend","CustomDimensions","FixedDimensions","GradientFilled","ErrorStates","WithoutSmoothing","WithPointerEvents","CurveTypes","SmartFormatting","BrokenLine","DateStringFormats","Comparison"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...p.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...x.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...w.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...u.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...c.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...h.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...y.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...n.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...s.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...d.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...S.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",..._.parameters?.docs?.source}}}}),"../charts/src/stories/legend-config.tsx":((O,D,a)=>{a.d(D,{r:()=>l});const l={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'}};try{l.displayName="legendArgTypes",l.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:l.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}})}]);
