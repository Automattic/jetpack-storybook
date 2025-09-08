"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4722],{"../charts/src/components/line-chart/stories/index.stories.tsx":(E,v,r)=>{r.r(v),r.d(v,{BrokenLine:()=>x,Comparison:()=>L,CurveTypes:()=>f,CustomDimensions:()=>m,CustomLegendPositioning:()=>S,DateStringFormats:()=>T,Default:()=>p,ErrorStates:()=>t,FixedDimensions:()=>y,GradientFilled:()=>C,SingleSeries:()=>_,SmartFormatting:()=>h,WithCompositionLegend:()=>O,WithLegend:()=>u,WithPointerEvents:()=>n,WithoutSmoothing:()=>s,__namedExportsOrder:()=>M,default:()=>g});var d=r("../charts/src/stories/sample-data/index.ts"),l=r("../charts/src/components/line-chart/line-chart.tsx"),c=r("../charts/src/components/line-chart/stories/config.tsx"),e=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g={...c.Nc,title:"JS Packages/Charts/Types/Line Chart",argTypes:{...c.Nc.argTypes}},o=i=>(0,e.jsx)(l.A,{...i}),p=o.bind({});p.args={...c.pn};const _=o.bind({});_.args={data:[d.B2[0]]};const u=o.bind({});u.args={...c.pn,showLegend:!0};const S=o.bind({});S.args={data:d.B2,showLegend:!0,height:400,legendAlignment:"start",legendPosition:"top",legendOrientation:"horizontal",withLegendGlyph:!0},S.parameters={docs:{description:{story:"Line chart with top-left positioned horizontal legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with temperature data for London, Canberra, and Mars."}}};const O={render:()=>(0,e.jsx)("div",{style:{width:"600px",height:"400px"},children:(0,e.jsx)(l.A,{data:d.Sb,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1,children:(0,e.jsx)(l.A.Legend,{orientation:"horizontal",alignment:"center",position:"bottom"})})}),parameters:{docs:{description:{story:"Legend used with LineChart using the composition API, positioned below the chart."}}}},m=o.bind({});m.args={width:800,height:400,data:d.B2};const y=o.bind({});y.args={width:800,height:400,data:d.B2,withTooltips:!0},y.parameters={docs:{description:{story:"Line chart with fixed dimensions that override the responsive behavior."}}};const C=o.bind({});C.args={...p.args,margin:void 0,data:d.Sb,withGradientFill:!0,options:{axis:{y:{orientation:"right"}}}};const t={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Empty Data"}),(0,e.jsx)(l.A,{width:300,height:200,data:[],withGradientFill:!1,withLegendGlyph:!1})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Invalid Date Values"}),(0,e.jsx)(l.A,{width:300,height:200,data:[{label:"Invalid Dates",data:[{date:new Date("invalid"),value:10},{date:new Date("2024-01-02"),value:20}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Invalid Values"}),(0,e.jsx)(l.A,{width:300,height:200,data:[{label:"Invalid Values",data:[{date:new Date("2024-01-01"),value:NaN},{date:new Date("2024-01-02"),value:null}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Single Data Point"}),(0,e.jsx)(l.A,{width:300,height:200,data:[{label:"Single Point",data:[{date:new Date("2024-01-01"),value:100}],options:{}}],withGradientFill:!1,withLegendGlyph:!1})]})]}),parameters:{docs:{description:{story:"Examples of how the line chart handles various error states and edge cases."}}}},s=o.bind({});s.args={...p.args,smoothing:!1};const n=o.bind({});n.args={...p.args,onPointerDown:({datum:i})=>alert("Pointer down:"+JSON.stringify(i))};const f={render:()=>{const i=[{label:"Sample Series",data:[{date:new Date("2024-01-01"),value:10},{date:new Date("2024-01-02"),value:90},{date:new Date("2024-01-03"),value:85},{date:new Date("2024-01-04"),value:82},{date:new Date("2024-01-05"),value:5},{date:new Date("2024-01-06"),value:8},{date:new Date("2024-01-07"),value:10}],options:{}}];return(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Linear Curve"}),(0,e.jsx)(l.A,{width:300,height:200,data:i,curveType:"linear",withGradientFill:!1,withLegendGlyph:!1})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Smooth Curve (Catmull-Rom)"}),(0,e.jsx)(l.A,{width:300,height:200,data:i,curveType:"smooth",withGradientFill:!1,withLegendGlyph:!1})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Monotone X Curve"}),(0,e.jsx)(l.A,{width:300,height:200,data:i,curveType:"monotone",withGradientFill:!1,withLegendGlyph:!1})]})]})},parameters:{docs:{description:{story:"Examples of the three different curve types available. The data points are designed to highlight how Monotone X prevents overshooting (going above/below data points) compared to Catmull-Rom smoothing, while still maintaining a smooth curve. Linear shows the raw connections between points."}}}},h=o.bind({});h.args={data:d.Gv,withGradientFill:!1,smoothing:!0,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}}},h.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const I=100,x=o.bind({});x.args={...p.args,data:[{...d.Sb[0],label:"Visitors with dashed line",data:d.Sb[0].data.map(i=>({...i,value:i.value+I})),options:{...d.Sb[0].options,seriesLineStyle:{strokeDasharray:"5 5",strokeWidth:3}}},d.Sb[0]],showLegend:!0},x.parameters={docs:{description:{story:"Demonstrates the option of setting a seriesLineStyle to a dash array."}}};const T={render:()=>(0,e.jsx)(l.A,{data:[{label:"String Dates",data:[{dateString:"2024-01-01",value:10},{dateString:"2024-01-02",value:20},{dateString:"2024-01-03 00:00:00",value:15},{dateString:"2024-01-04",value:25},{dateString:"2024-01-05 00:00",value:30}],options:{}}],withGradientFill:!1,withLegendGlyph:!1}),parameters:{docs:{description:{story:`Demonstrates the line chart's ability to handle various date string formats and mixed date types. All dates are converted to local timezone. The chart can process:
- Simple date strings (YYYY-MM-DD)
- Date with time (YYYY-MM-DD 00:00:00)
- Date with time (YYYY-MM-DD 00:00)
- ISO format (YYYY-MM-DDT00:00:00)
- UTC format (YYYY-MM-DDT00:00:00Z)
- Timezone offset (YYYY-MM-DDT00:00:00\xB1HH:mm)
`}}}},L=o.bind({});L.args={showLegend:!0,smoothing:!1,data:[{...d.B2[0],label:"New York"},{...d.B2[1],label:"New York last year",group:"new-york",options:{type:"comparison"}},{...d.B2[2],label:"Tokyo"},{...d.B2[3],label:"Tokyo last year",group:"tokyo",options:{type:"comparison"}}]};const M=["Default","SingleSeries","WithLegend","CustomLegendPositioning","WithCompositionLegend","CustomDimensions","FixedDimensions","GradientFilled","ErrorStates","WithoutSmoothing","WithPointerEvents","CurveTypes","SmartFormatting","BrokenLine","DateStringFormats","Comparison"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...p.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",..._.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...u.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...S.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '600px',
    height: '400px'
  }}>
            <LineChart data={webTrafficData} width={600} height={300} withGradientFill={false} withLegendGlyph={false}>
                <LineChart.Legend orientation="horizontal" alignment="center" position="bottom" />
            </LineChart>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with LineChart using the composition API, positioned below the chart.'
      }
    }
  }
}`,...O.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...m.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...y.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...C.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...s.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...n.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...h.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...x.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...L.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js":(E,v,r)=>{r.d(v,{A:()=>o});var d=r("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),l=r.n(d),c=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=r("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),a=r.n(e),g=r("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js");function o(p){var _=p.top,u=_===void 0?0:_,S=p.left,O=S===void 0?0:S,m=p.className,y=p.children;return c.createElement(g.A,{className:a()("visx-glyph",m),top:u,left:O},y)}o.propTypes={top:l().number,left:l().number,className:l().string,children:l().node}},"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js":(E,v,r)=>{r.d(v,{A:()=>O});var d=r("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),l=r.n(d),c=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=r("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),a=r.n(e),g=r("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),o=r("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/star.js"),p=r("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),_=["children","className","top","left","size"];function u(){return u=Object.assign?Object.assign.bind():function(m){for(var y=1;y<arguments.length;y++){var C=arguments[y];for(var t in C)Object.prototype.hasOwnProperty.call(C,t)&&(m[t]=C[t])}return m},u.apply(this,arguments)}function S(m,y){if(m==null)return{};var C={},t=Object.keys(m),s,n;for(n=0;n<t.length;n++)s=t[n],!(y.indexOf(s)>=0)&&(C[s]=m[s]);return C}function O(m){var y=m.children,C=m.className,t=m.top,s=m.left,n=m.size,f=S(m,_),h=(0,g.A)();return h.type(o.A),(typeof n=="number"||n)&&h.size(n),y?c.createElement(c.Fragment,null,y({path:h})):c.createElement(p.A,{top:t,left:s},c.createElement("path",u({className:a()("visx-glyph-star",C),d:h()||""},f)))}O.propTypes={children:l().func,className:l().string,top:l().number,left:l().number,size:l().oneOfType([l().number,l().func])}},"../charts/src/components/line-chart/stories/config.tsx":(E,v,r)=>{r.d(v,{Em:()=>T,Nc:()=>L,pn:()=>M});var d=r("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"),l=r("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),c=r.n(l),e=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=r("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=r.n(a),o=r("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),p=r("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/diamond.js"),_=r("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),u=["children","className","top","left","size"];function S(){return S=Object.assign?Object.assign.bind():function(i){for(var b=1;b<arguments.length;b++){var D=arguments[b];for(var R in D)Object.prototype.hasOwnProperty.call(D,R)&&(i[R]=D[R])}return i},S.apply(this,arguments)}function O(i,b){if(i==null)return{};var D={},R=Object.keys(i),w,A;for(A=0;A<R.length;A++)w=R[A],!(b.indexOf(w)>=0)&&(D[w]=i[w]);return D}function m(i){var b=i.children,D=i.className,R=i.top,w=i.left,A=i.size,Y=O(i,u),B=(0,o.A)();return B.type(p.A),(typeof A=="number"||A)&&B.size(A),b?e.createElement(e.Fragment,null,b({path:B})):e.createElement(_.A,{top:R,left:w},e.createElement("path",S({className:g()("visx-glyph-diamond",D),d:B()||""},Y)))}m.propTypes={children:c().func,className:c().string,top:c().number,left:c().number,size:c().oneOfType([c().number,c().func])};var y=r("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),C=r.n(y),t=r("../charts/src/providers/theme/themes.ts"),s=r("../charts/src/stories/chart-decorator.tsx"),n=r("../charts/src/stories/legend-config.tsx"),f=r("../charts/src/stories/sample-data/index.ts"),h=r("../charts/src/stories/theme-config.tsx"),I=r("../charts/src/components/private/default-glyph/default-glyph.tsx"),x=r("../charts/src/components/line-chart/line-chart.tsx");const T=C()(t.QI,{glyphs:[i=>(0,e.createElement)(I.W,{...i,key:i.key}),i=>(0,e.createElement)(d.A,{key:i.key,top:i.y,left:i.x,size:i.size*i.size,fill:i.color}),i=>(0,e.createElement)(m,{key:i.key,top:i.y,left:i.x,size:i.size*i.size,fill:i.color})],annotationStyles:{label:{maxWidth:250}}}),L={title:"JS Packages/Charts/Types/Line Chart",component:x.A,parameters:{layout:"centered"},decorators:[s.OI],argTypes:{...n.r,...h.jW,...s.xo}},M={data:f.B2,withGradientFill:!1,withLegendGlyph:!1,smoothing:!0,maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}},withTooltips:!0};try{T.displayName="glyphTheme",T.__docgenInfo={description:"Custom storybook theme with glyphs",displayName:"glyphTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/stories/config.tsx#glyphTheme"]={docgenInfo:T.__docgenInfo,name:"glyphTheme",path:"../charts/src/components/line-chart/stories/config.tsx#glyphTheme"})}catch{}},"../charts/src/stories/chart-decorator.tsx":(E,v,r)=>{r.d(v,{OI:()=>e,cg:()=>a,xo:()=>g});var d=r("../charts/src/providers/chart-context/global-charts-provider.tsx"),l=r("../charts/src/stories/theme-config.tsx"),c=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const e=(o,p)=>{const _=p.args;return a(()=>(0,c.jsx)("div",{style:{resize:_.resize||"both",overflow:"auto",padding:"1rem",width:_.containerWidth||"800px",height:_.containerHeight,maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,c.jsx)(o,{})}),p)},a=(o,{args:p})=>{const _=p.themeName,u=l.yI[_||"default"];return(0,c.jsx)(d.S,{theme:u,children:(0,c.jsx)(o,{})})},g={maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}},containerWidth:{control:{type:"text"},description:'CSS width value for the chart container (e.g., "400px", "100%")'},containerHeight:{control:{type:"text"},description:'CSS height value for the chart container (e.g., "400px", "100%")'},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"],description:"Resize behavior for the chart container"}};try{e.displayName="chartDecorator",e.__docgenInfo={description:`Shared decorator for chart stories with GlobalChartsProvider and dynamic theme support
Provides a resizable container for testing responsive behavior
Composes with simpleChartDecorator to add container styling
Supports configurable container dimensions via containerWidth/containerHeight args`,displayName:"chartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#chartDecorator"]={docgenInfo:e.__docgenInfo,name:"chartDecorator",path:"../charts/src/stories/chart-decorator.tsx#chartDecorator"})}catch{}try{a.displayName="simpleChartDecorator",a.__docgenInfo={description:`Simple decorator for chart context stories with GlobalChartsProvider but no container styling
Used for stories that display multiple charts in custom layouts`,displayName:"simpleChartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"]={docgenInfo:a.__docgenInfo,name:"simpleChartDecorator",path:"../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"})}catch{}try{g.displayName="sharedChartArgTypes",g.__docgenInfo={description:"Shared argTypes for common chart controls",displayName:"sharedChartArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"]={docgenInfo:g.__docgenInfo,name:"sharedChartArgTypes",path:"../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"})}catch{}},"../charts/src/stories/legend-config.tsx":(E,v,r)=>{r.d(v,{r:()=>d});const d={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'}};try{d.displayName="legendArgTypes",d.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:d.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../charts/src/stories/theme-config.tsx":(E,v,r)=>{r.d(v,{jW:()=>e,yI:()=>c});var d=r("../charts/src/providers/theme/themes.ts");const l={colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],seriesLineStyles:[{strokeWidth:1,strokeDasharray:"8 8",strokeLinecap:"square"},{strokeDasharray:"5 8",strokeWidth:2,strokeLinecap:"square"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2},leaderboardChart:{primaryColor:"#073B3A",secondaryColor:"#0B6E4F"}},c={default:d.zQ,jetpack:d.QI,woo:d.pk,custom:l},e={themeName:{control:{type:"select"},options:["default","jetpack","woo","custom"],defaultValue:"default",description:"Select a theme to apply to the chart",table:{category:"Theme"}}};try{l.displayName="customTheme",l.__docgenInfo={description:"Custom theme with earth tones and dashed line styles for demonstration",displayName:"customTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#customTheme"]={docgenInfo:l.__docgenInfo,name:"customTheme",path:"../charts/src/stories/theme-config.tsx#customTheme"})}catch{}try{backgroundColor.displayName="backgroundColor",backgroundColor.__docgenInfo={description:"Background color for chart components",displayName:"backgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#backgroundColor"]={docgenInfo:backgroundColor.__docgenInfo,name:"backgroundColor",path:"../charts/src/stories/theme-config.tsx#backgroundColor"})}catch{}try{labelBackgroundColor.displayName="labelBackgroundColor",labelBackgroundColor.__docgenInfo={description:"Background color for labels",displayName:"labelBackgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelBackgroundColor"]={docgenInfo:labelBackgroundColor.__docgenInfo,name:"labelBackgroundColor",path:"../charts/src/stories/theme-config.tsx#labelBackgroundColor"})}catch{}try{labelTextColor.displayName="labelTextColor",labelTextColor.__docgenInfo={description:"Text color for labels",displayName:"labelTextColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelTextColor"]={docgenInfo:labelTextColor.__docgenInfo,name:"labelTextColor",path:"../charts/src/stories/theme-config.tsx#labelTextColor"})}catch{}try{colors.displayName="colors",colors.__docgenInfo={description:"Array of colors used for data visualization",displayName:"colors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#colors"]={docgenInfo:colors.__docgenInfo,name:"colors",path:"../charts/src/stories/theme-config.tsx#colors"})}catch{}try{gridStyles.displayName="gridStyles",gridStyles.__docgenInfo={description:"Optional CSS styles for grid lines",displayName:"gridStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridStyles"]={docgenInfo:gridStyles.__docgenInfo,name:"gridStyles",path:"../charts/src/stories/theme-config.tsx#gridStyles"})}catch{}try{tickLength.displayName="tickLength",tickLength.__docgenInfo={description:"Length of axis ticks in pixels",displayName:"tickLength",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#tickLength"]={docgenInfo:tickLength.__docgenInfo,name:"tickLength",path:"../charts/src/stories/theme-config.tsx#tickLength"})}catch{}try{gridColor.displayName="gridColor",gridColor.__docgenInfo={description:"Color of the grid lines",displayName:"gridColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColor"]={docgenInfo:gridColor.__docgenInfo,name:"gridColor",path:"../charts/src/stories/theme-config.tsx#gridColor"})}catch{}try{gridColorDark.displayName="gridColorDark",gridColorDark.__docgenInfo={description:"Color of the grid lines in dark mode",displayName:"gridColorDark",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColorDark"]={docgenInfo:gridColorDark.__docgenInfo,name:"gridColorDark",path:"../charts/src/stories/theme-config.tsx#gridColorDark"})}catch{}try{xTickLineStyles.displayName="xTickLineStyles",xTickLineStyles.__docgenInfo={description:"Styles for x-axis tick lines",displayName:"xTickLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xTickLineStyles"]={docgenInfo:xTickLineStyles.__docgenInfo,name:"xTickLineStyles",path:"../charts/src/stories/theme-config.tsx#xTickLineStyles"})}catch{}try{xAxisLineStyles.displayName="xAxisLineStyles",xAxisLineStyles.__docgenInfo={description:"Styles for x-axis line",displayName:"xAxisLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xAxisLineStyles"]={docgenInfo:xAxisLineStyles.__docgenInfo,name:"xAxisLineStyles",path:"../charts/src/stories/theme-config.tsx#xAxisLineStyles"})}catch{}try{seriesLineStyles.displayName="seriesLineStyles",seriesLineStyles.__docgenInfo={description:"Styles for series lines",displayName:"seriesLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#seriesLineStyles"]={docgenInfo:seriesLineStyles.__docgenInfo,name:"seriesLineStyles",path:"../charts/src/stories/theme-config.tsx#seriesLineStyles"})}catch{}try{legendShapeStyles.displayName="legendShapeStyles",legendShapeStyles.__docgenInfo={description:"Styles for legend shapes",displayName:"legendShapeStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendShapeStyles"]={docgenInfo:legendShapeStyles.__docgenInfo,name:"legendShapeStyles",path:"../charts/src/stories/theme-config.tsx#legendShapeStyles"})}catch{}try{glyphs.displayName="glyphs",glyphs.__docgenInfo={description:"Array of render functions for glyphs",displayName:"glyphs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#glyphs"]={docgenInfo:glyphs.__docgenInfo,name:"glyphs",path:"../charts/src/stories/theme-config.tsx#glyphs"})}catch{}try{legendLabelStyles.displayName="legendLabelStyles",legendLabelStyles.__docgenInfo={description:"Styles for legend labels",displayName:"legendLabelStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendLabelStyles"]={docgenInfo:legendLabelStyles.__docgenInfo,name:"legendLabelStyles",path:"../charts/src/stories/theme-config.tsx#legendLabelStyles"})}catch{}try{legendContainerStyles.displayName="legendContainerStyles",legendContainerStyles.__docgenInfo={description:"Styles for legend container",displayName:"legendContainerStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendContainerStyles"]={docgenInfo:legendContainerStyles.__docgenInfo,name:"legendContainerStyles",path:"../charts/src/stories/theme-config.tsx#legendContainerStyles"})}catch{}try{leaderboardChart.displayName="leaderboardChart",leaderboardChart.__docgenInfo={description:"LeaderboardChart specific settings",displayName:"leaderboardChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#leaderboardChart"]={docgenInfo:leaderboardChart.__docgenInfo,name:"leaderboardChart",path:"../charts/src/stories/theme-config.tsx#leaderboardChart"})}catch{}try{conversionFunnelChart.displayName="conversionFunnelChart",conversionFunnelChart.__docgenInfo={description:"ConversionFunnelChart specific settings",displayName:"conversionFunnelChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#conversionFunnelChart"]={docgenInfo:conversionFunnelChart.__docgenInfo,name:"conversionFunnelChart",path:"../charts/src/stories/theme-config.tsx#conversionFunnelChart"})}catch{}try{c.displayName="CHART_THEME_MAP",c.__docgenInfo={description:"Centralized theme map for all chart stories",displayName:"CHART_THEME_MAP",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"]={docgenInfo:c.__docgenInfo,name:"CHART_THEME_MAP",path:"../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"})}catch{}try{e.displayName="themeArgTypes",e.__docgenInfo={description:"Shared argTypes for theme control",displayName:"themeArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#themeArgTypes"]={docgenInfo:e.__docgenInfo,name:"themeArgTypes",path:"../charts/src/stories/theme-config.tsx#themeArgTypes"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(E,v,r)=>{r.d(v,{A:()=>c});function d(e){var a,g,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var p=e.length;for(a=0;a<p;a++)e[a]&&(g=d(e[a]))&&(o&&(o+=" "),o+=g)}else for(g in e)e[g]&&(o&&(o+=" "),o+=g);return o}function l(){for(var e,a,g=0,o="",p=arguments.length;g<p;g++)(e=arguments[g])&&(a=d(e))&&(o&&(o+=" "),o+=a);return o}const c=l},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":E=>{var v=function(s){return r(s)&&!d(s)};function r(t){return!!t&&typeof t=="object"}function d(t){var s=Object.prototype.toString.call(t);return s==="[object RegExp]"||s==="[object Date]"||e(t)}var l=typeof Symbol=="function"&&Symbol.for,c=l?Symbol.for("react.element"):60103;function e(t){return t.$$typeof===c}function a(t){return Array.isArray(t)?[]:{}}function g(t,s){return s.clone!==!1&&s.isMergeableObject(t)?y(a(t),t,s):t}function o(t,s,n){return t.concat(s).map(function(f){return g(f,n)})}function p(t,s){if(!s.customMerge)return y;var n=s.customMerge(t);return typeof n=="function"?n:y}function _(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(s){return Object.propertyIsEnumerable.call(t,s)}):[]}function u(t){return Object.keys(t).concat(_(t))}function S(t,s){try{return s in t}catch{return!1}}function O(t,s){return S(t,s)&&!(Object.hasOwnProperty.call(t,s)&&Object.propertyIsEnumerable.call(t,s))}function m(t,s,n){var f={};return n.isMergeableObject(t)&&u(t).forEach(function(h){f[h]=g(t[h],n)}),u(s).forEach(function(h){O(t,h)||(S(t,h)&&n.isMergeableObject(s[h])?f[h]=p(h,n)(t[h],s[h],n):f[h]=g(s[h],n))}),f}function y(t,s,n){n=n||{},n.arrayMerge=n.arrayMerge||o,n.isMergeableObject=n.isMergeableObject||v,n.cloneUnlessOtherwiseSpecified=g;var f=Array.isArray(s),h=Array.isArray(t),I=f===h;return I?f?n.arrayMerge(t,s,n):m(t,s,n):g(s,n)}y.all=function(s,n){if(!Array.isArray(s))throw new Error("first argument should be an array");return s.reduce(function(f,h){return y(f,h,n)},{})};var C=y;E.exports=C}}]);
