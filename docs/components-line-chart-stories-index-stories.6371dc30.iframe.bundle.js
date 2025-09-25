"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4722],{"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js":((_,S,n)=>{n.d(S,{A:()=>r});var d=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),o=n.n(d),i=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=n("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),w=n.n(t),m=n("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js");function r(u){var D=u.top,x=D===void 0?0:D,v=u.left,b=v===void 0?0:v,h=u.className,p=u.children;return i.createElement(m.A,{className:w()("visx-glyph",h),top:x,left:b},p)}r.propTypes={top:o().number,left:o().number,className:o().string,children:o().node}}),"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js":((_,S,n)=>{n.d(S,{A:()=>b});var d=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),o=n.n(d),i=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=n("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),w=n.n(t),m=n("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),r=n("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/star.js"),u=n("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),D=["children","className","top","left","size"];function x(){return x=Object.assign?Object.assign.bind():function(h){for(var p=1;p<arguments.length;p++){var y=arguments[p];for(var e in y)Object.prototype.hasOwnProperty.call(y,e)&&(h[e]=y[e])}return h},x.apply(this,arguments)}function v(h,p){if(h==null)return{};var y={},e=Object.keys(h),a,s;for(s=0;s<e.length;s++)a=e[s],!(p.indexOf(a)>=0)&&(y[a]=h[a]);return y}function b(h){var p=h.children,y=h.className,e=h.top,a=h.left,s=h.size,f=v(h,D),c=(0,m.A)();return c.type(r.A),(typeof s=="number"||s)&&c.size(s),p?i.createElement(i.Fragment,null,p({path:c})):i.createElement(u.A,{top:e,left:a},i.createElement("path",x({className:w()("visx-glyph-star",y),d:c()||""},f)))}b.propTypes={children:o().func,className:o().string,top:o().number,left:o().number,size:o().oneOfType([o().number,o().func])}}),"../../../node_modules/.pnpm/@wordpress+deprecated@4.31.0/node_modules/@wordpress/deprecated/build-module/index.js":((_,S,n)=>{n.d(S,{A:()=>i});var d=n("../../../node_modules/.pnpm/@wordpress+hooks@4.31.0/node_modules/@wordpress/hooks/build-module/index.js");const o=Object.create(null);function i(t,w={}){const{since:m,version:r,alternative:u,plugin:D,link:x,hint:v}=w,b=D?` from ${D}`:"",h=m?` since version ${m}`:"",p=r?` and will be removed${b} in version ${r}`:"",y=u?` Please use ${u} instead.`:"",e=x?` See: ${x}`:"",a=v?` Note: ${v}`:"",s=`${t} is deprecated${h}${p}.${y}${e}${a}`;s in o||((0,d.Eo)("deprecated",t,w,s),console.warn(s),o[s]=!0)}}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((_,S,n)=>{n.d(S,{A:()=>i});function d(t){var w,m,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var u=t.length;for(w=0;w<u;w++)t[w]&&(m=d(t[w]))&&(r&&(r+=" "),r+=m)}else for(m in t)t[m]&&(r&&(r+=" "),r+=m);return r}function o(){for(var t,w,m=0,r="",u=arguments.length;m<u;m++)(t=arguments[m])&&(w=d(t))&&(r&&(r+=" "),r+=w);return r}const i=o}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(_=>{var S=function(a){return n(a)&&!d(a)};function n(e){return!!e&&typeof e=="object"}function d(e){var a=Object.prototype.toString.call(e);return a==="[object RegExp]"||a==="[object Date]"||t(e)}var o=typeof Symbol=="function"&&Symbol.for,i=o?Symbol.for("react.element"):60103;function t(e){return e.$$typeof===i}function w(e){return Array.isArray(e)?[]:{}}function m(e,a){return a.clone!==!1&&a.isMergeableObject(e)?p(w(e),e,a):e}function r(e,a,s){return e.concat(a).map(function(f){return m(f,s)})}function u(e,a){if(!a.customMerge)return p;var s=a.customMerge(e);return typeof s=="function"?s:p}function D(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(a){return Object.propertyIsEnumerable.call(e,a)}):[]}function x(e){return Object.keys(e).concat(D(e))}function v(e,a){try{return a in e}catch{return!1}}function b(e,a){return v(e,a)&&!(Object.hasOwnProperty.call(e,a)&&Object.propertyIsEnumerable.call(e,a))}function h(e,a,s){var f={};return s.isMergeableObject(e)&&x(e).forEach(function(c){f[c]=m(e[c],s)}),x(a).forEach(function(c){b(e,c)||(v(e,c)&&s.isMergeableObject(a[c])?f[c]=u(c,s)(e[c],a[c],s):f[c]=m(a[c],s))}),f}function p(e,a,s){s=s||{},s.arrayMerge=s.arrayMerge||r,s.isMergeableObject=s.isMergeableObject||S,s.cloneUnlessOtherwiseSpecified=m;var f=Array.isArray(a),c=Array.isArray(e),E=f===c;return E?f?s.arrayMerge(e,a,s):h(e,a,s):m(a,s)}p.all=function(a,s){if(!Array.isArray(a))throw new Error("first argument should be an array");return a.reduce(function(f,c){return p(f,c,s)},{})};var y=p;_.exports=y}),"../charts/src/components/line-chart/stories/config.tsx":((_,S,n)=>{n.d(S,{Em:()=>L,Nc:()=>j,pn:()=>M});var d=n("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"),o=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),i=n.n(o),t=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),w=n("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=n.n(w),r=n("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),u=n("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/diamond.js"),D=n("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),x=["children","className","top","left","size"];function v(){return v=Object.assign?Object.assign.bind():function(l){for(var g=1;g<arguments.length;g++){var T=arguments[g];for(var C in T)Object.prototype.hasOwnProperty.call(T,C)&&(l[C]=T[C])}return l},v.apply(this,arguments)}function b(l,g){if(l==null)return{};var T={},C=Object.keys(l),A,O;for(O=0;O<C.length;O++)A=C[O],!(g.indexOf(A)>=0)&&(T[A]=l[A]);return T}function h(l){var g=l.children,T=l.className,C=l.top,A=l.left,O=l.size,Y=b(l,x),P=(0,r.A)();return P.type(u.A),(typeof O=="number"||O)&&P.size(O),g?t.createElement(t.Fragment,null,g({path:P})):t.createElement(D.A,{top:C,left:A},t.createElement("path",v({className:m()("visx-glyph-diamond",T),d:P()||""},Y)))}h.propTypes={children:i().func,className:i().string,top:i().number,left:i().number,size:i().oneOfType([i().number,i().func])};var p=n("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),y=n.n(p),e=n("../charts/src/providers/chart-context/themes.ts"),a=n("../charts/src/stories/chart-decorator.tsx"),s=n("../charts/src/stories/legend-config.tsx"),f=n("../charts/src/stories/sample-data/index.ts"),c=n("../charts/src/stories/theme-config.tsx"),E=n("../charts/src/components/private/default-glyph/default-glyph.tsx"),G=n("../charts/src/components/line-chart/line-chart.tsx");const L=y()(e.QI,{glyphs:[l=>(0,t.createElement)(E.W,{...l,key:l.key}),l=>(0,t.createElement)(d.A,{key:l.key,top:l.y,left:l.x,size:l.size*l.size,fill:l.color}),l=>(0,t.createElement)(h,{key:l.key,top:l.y,left:l.x,size:l.size*l.size,fill:l.color})],annotationStyles:{label:{maxWidth:250}}}),j={title:"JS Packages/Charts/Types/Line Chart",component:G.A,parameters:{layout:"centered"},decorators:[a.OI],argTypes:{...s.r,...c.jW,...a.xo}},M={data:f.B2.slice(0,4),withGradientFill:!1,withLegendGlyph:!1,smoothing:!0,maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}},withTooltips:!0};try{L.displayName="glyphTheme",L.__docgenInfo={description:"Custom storybook theme with glyphs",displayName:"glyphTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/stories/config.tsx#glyphTheme"]={docgenInfo:L.__docgenInfo,name:"glyphTheme",path:"../charts/src/components/line-chart/stories/config.tsx#glyphTheme"})}catch{}}),"../charts/src/components/line-chart/stories/index.stories.tsx":((_,S,n)=>{n.r(S),n.d(S,{BrokenLine:()=>L,Comparison:()=>M,CurveTypes:()=>c,CustomDimensions:()=>p,CustomLegendPositioning:()=>b,DateStringFormats:()=>j,Default:()=>u,ErrorStates:()=>a,FixedDimensions:()=>y,GradientFilled:()=>e,ManySeries:()=>x,SingleSeries:()=>D,SmartFormatting:()=>E,WithCompositionLegend:()=>h,WithLegend:()=>v,WithPointerEvents:()=>f,WithoutSmoothing:()=>s,__namedExportsOrder:()=>l,default:()=>m});var d=n("../charts/src/stories/sample-data/index.ts"),o=n("../charts/src/components/line-chart/line-chart.tsx"),i=n("../charts/src/components/line-chart/stories/config.tsx"),t=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m={...i.Nc,title:"JS Packages/Charts/Types/Line Chart",argTypes:{...i.Nc.argTypes}},r=g=>(0,t.jsx)(o.A,{...g}),u=r.bind({});u.args={...i.pn};const D=r.bind({});D.args={data:[d.B2[0]]};const x=r.bind({});x.args={...i.pn,data:d.B2,showLegend:!0};const v=r.bind({});v.args={...i.pn,showLegend:!0};const b=r.bind({});b.args={...i.pn,showLegend:!0,height:400,legendAlignment:"start",legendPosition:"top",legendOrientation:"horizontal",withLegendGlyph:!0},b.parameters={docs:{description:{story:"Line chart with top-left positioned horizontal legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with temperature data for London, Canberra, and Mars."}}};const h={render:g=>(0,t.jsx)("div",{style:{width:"600px",height:"400px"},children:(0,t.jsx)(o.A,{data:g.data||d.Sb,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1,children:(0,t.jsx)(o.A.Legend,{orientation:g.legendOrientation||"horizontal",alignment:g.legendAlignment||"center",position:g.legendPosition||"bottom",maxWidth:g.legendMaxWidth,textOverflow:g.legendTextOverflow||"wrap"})})}),parameters:{docs:{description:{story:"Legend used with LineChart using the composition API, positioned below the chart."}}}},p=r.bind({});p.args={...i.pn,width:800,height:400};const y=r.bind({});y.args={...i.pn,width:800,height:400,withTooltips:!0},y.parameters={docs:{description:{story:"Line chart with fixed dimensions that override the responsive behavior."}}};const e=r.bind({});e.args={...i.pn,margin:void 0,data:d.Sb,withGradientFill:!0,options:{axis:{y:{orientation:"right"}}}};const a={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(o.A,{width:300,height:200,data:[],withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Invalid Date Values"}),(0,t.jsx)(o.A,{width:300,height:200,data:[{label:"Invalid Dates",data:[{date:new Date("invalid"),value:10},{date:new Date("2024-01-02"),value:20}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Invalid Values"}),(0,t.jsx)(o.A,{width:300,height:200,data:[{label:"Invalid Values",data:[{date:new Date("2024-01-01"),value:NaN},{date:new Date("2024-01-02"),value:null}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(o.A,{width:300,height:200,data:[{label:"Single Point",data:[{date:new Date("2024-01-01"),value:100}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]})]}),parameters:{docs:{description:{story:"Examples of how the line chart handles various error states and edge cases."}}}},s=r.bind({});s.args={...i.pn,smoothing:!1};const f=r.bind({});f.args={...i.pn,onPointerDown:({datum:g})=>alert("Pointer down:"+JSON.stringify(g))};const c={render:()=>{const g=[{label:"Sample Series",data:[{date:new Date("2024-01-01"),value:10},{date:new Date("2024-01-02"),value:90},{date:new Date("2024-01-03"),value:85},{date:new Date("2024-01-04"),value:82},{date:new Date("2024-01-05"),value:5},{date:new Date("2024-01-06"),value:8},{date:new Date("2024-01-07"),value:10}],options:{}}];return(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Linear Curve"}),(0,t.jsx)(o.A,{width:300,height:200,data:g,curveType:"linear",withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Smooth Curve (Catmull-Rom)"}),(0,t.jsx)(o.A,{width:300,height:200,data:g,curveType:"smooth",withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Monotone X Curve"}),(0,t.jsx)(o.A,{width:300,height:200,data:g,curveType:"monotone",withGradientFill:!1,withLegendGlyph:!1})]})]})},parameters:{docs:{description:{story:"Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points."}}}},E=r.bind({});E.args={data:d.Gv,withGradientFill:!1,smoothing:!0,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}}},E.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const G=100,L=r.bind({});L.args={...i.pn,data:[{...d.Sb[0],label:"Visitors with dashed line",data:d.Sb[0].data.map(g=>({...g,value:g.value+G})),options:{...d.Sb[0].options,seriesLineStyle:{strokeDasharray:"5 5",strokeWidth:3}}},d.Sb[0]],showLegend:!0},L.parameters={docs:{description:{story:"Demonstrates the option of setting a seriesLineStyle to a dash array."}}};const j={render:()=>(0,t.jsx)(o.A,{data:[{label:"String Dates",data:[{dateString:"2024-01-01",value:10},{dateString:"2024-01-02",value:20},{dateString:"2024-01-03 00:00:00",value:15},{dateString:"2024-01-04",value:25},{dateString:"2024-01-05 00:00",value:30}],options:{}}],withGradientFill:!1,withLegendGlyph:!1}),parameters:{docs:{description:{story:`Demonstrates the line chart's ability to handle various date string formats and mixed date types. All dates are converted to local timezone. The chart can process:
- Simple date strings (YYYY-MM-DD)
- Date with time (YYYY-MM-DD 00:00:00)
- Date with time (YYYY-MM-DD 00:00)
- ISO format (YYYY-MM-DDT00:00:00)
- UTC format (YYYY-MM-DDT00:00:00Z)
- Timezone offset (YYYY-MM-DDT00:00:00\xB1HH:mm)
`}}}},M=r.bind({});M.args={showLegend:!0,smoothing:!1,data:[{...d.B2[0],label:"New York"},{...d.B2[1],label:"New York last year",group:"new-york",options:{type:"comparison"}},{...d.B2[2],label:"Tokyo"},{...d.B2[3],label:"Tokyo last year",group:"tokyo",options:{type:"comparison"}}]};const l=["Default","SingleSeries","ManySeries","WithLegend","CustomLegendPositioning","WithCompositionLegend","CustomDimensions","FixedDimensions","GradientFilled","ErrorStates","WithoutSmoothing","WithPointerEvents","CurveTypes","SmartFormatting","BrokenLine","DateStringFormats","Comparison"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...u.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...D.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...x.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...b.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...p.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...y.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...e.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...s.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...f.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...E.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...L.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...M.parameters?.docs?.source}}}}),"../charts/src/stories/legend-config.tsx":((_,S,n)=>{n.d(S,{r:()=>d});const d={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'}};try{d.displayName="legendArgTypes",d.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:d.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}})}]);
