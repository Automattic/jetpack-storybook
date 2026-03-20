"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8746],{"../charts/src/charts/line-chart/stories/annotation.stories.tsx"(N,T,t){t.r(T),t.d(T,{Alert:()=>U,Colored:()=>O,Custom:()=>R,Default:()=>L,Horizontal:()=>z,Mixed:()=>G,Vertical:()=>w,__namedExportsOrder:()=>X,default:()=>r});var j=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),a=t.n(j),p=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=t.n(o),h=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),c=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/triangle.js"),f=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),S=["children","className","top","left","size"];function v(){return v=Object.assign?Object.assign.bind():function(y){for(var b=1;b<arguments.length;b++){var E=arguments[b];for(var C in E)Object.prototype.hasOwnProperty.call(E,C)&&(y[C]=E[C])}return y},v.apply(this,arguments)}function x(y,b){if(y==null)return{};var E={},C=Object.keys(y),B,M;for(M=0;M<C.length;M++)B=C[M],!(b.indexOf(B)>=0)&&(E[B]=y[B]);return E}function A(y){var b=y.children,E=y.className,C=y.top,B=y.left,M=y.size,H=x(y,S),W=(0,h.A)();return W.type(c.A),(typeof M=="number"||M)&&W.size(M),b?p.createElement(p.Fragment,null,b({path:W})):p.createElement(f.A,{top:C,left:B},p.createElement("path",v({className:g()("visx-glyph-triangle",E),d:W()||""},H)))}A.propTypes={children:a().func,className:a().string,top:a().number,left:a().number,size:a().oneOfType([a().number,a().func])};var l=t("../charts/src/stories/sample-data/index.ts"),i=t("../charts/src/charts/line-chart/line-chart.tsx"),d=t("../charts/src/charts/line-chart/stories/config.tsx"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r={...d.Nc,title:"JS Packages/Charts Library/Charts/Line Chart/Annotations",args:{...d.pn}},u=y=>b=>(0,e.jsx)(i.A,{...b,children:(0,e.jsxs)(i.A.AnnotationsOverlay,{children:[(0,e.jsx)(i.A.Annotation,{datum:l.B2[0].data[10],title:"Notable event",subtitle:"This is a notable event",...y?.[0]||{}}),(0,e.jsx)(i.A.Annotation,{datum:l.B2[1].data[1],title:"Another notable event",subtitle:"This is another notable event",...y?.[1]||{}}),(0,e.jsx)(i.A.Annotation,{datum:l.B2[2].data[7],title:"Concerning event",subtitle:"This is a concerning event",...y?.[2]||{}})]})}),L=u([{},{},{styles:{circleSubject:{fill:"var(--jp-red)"},connector:{stroke:"var(--jp-red)"},label:{anchorLineStroke:"var(--jp-red)"}}}]).bind({}),w=u([{subjectType:"line-vertical"},{subjectType:"line-vertical"},{subjectType:"line-vertical",styles:{connector:{stroke:"var(--jp-red)"},label:{anchorLineStroke:"var(--jp-red)"}}}]).bind({}),z=u([{subjectType:"line-horizontal"},{subjectType:"line-horizontal"},{subjectType:"line-horizontal",styles:{connector:{stroke:"var(--jp-red)"},label:{anchorLineStroke:"var(--jp-red)"}}}]).bind({}),G=u([{subjectType:"circle"},{subjectType:"line-vertical"},{subjectType:"line-horizontal",styles:{connector:{stroke:"var(--jp-red)"},label:{anchorLineStroke:"var(--jp-red)"}}}]).bind({}),O=u([{styles:{label:{backgroundFill:"#98C8DF",showAnchorLine:!1},circleSubject:{fill:"#98C8DF"},connector:{stroke:"#98C8DF"}}},{styles:{label:{backgroundFill:"#006DAB",fontColor:"#fff",showAnchorLine:!1},circleSubject:{fill:"#006DAB"},connector:{stroke:"#006DAB"}}},{styles:{label:{backgroundFill:"var(--jp-red)",showAnchorLine:!1,fontColor:"#fff"},circleSubject:{fill:"var(--jp-red)"},connector:{stroke:"var(--jp-red)"}}}]).bind({}),_=()=>(0,e.jsx)("span",{style:{background:"black",color:"white",width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"},children:"D"}),D={subjectType:"line-vertical",styles:{label:{showAnchorLine:!1,y:"start"}},title:"Deployed",renderLabel:()=>(0,e.jsx)("span",{style:{transform:"translate(0, 6px)"},children:(0,e.jsx)(_,{})}),renderLabelPopover:()=>(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[(0,e.jsxs)("div",{style:{margin:0,display:"flex",alignItems:"center",gap:"6px",paddingBlock:"0.25rem "},children:[(0,e.jsx)(_,{}),(0,e.jsx)("strong",{children:"Deploy finished"})]}),(0,e.jsx)("p",{style:{margin:0},children:"Thu. Apr 24, 2025. 09:57:23 UTC"})]})},P=()=>(0,e.jsx)("span",{style:{background:"var(--jp-red)",color:"white",width:"20px",height:"20px",display:"inline-flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"},children:"!"}),I={subjectType:"circle",styles:{circleSubject:{radius:0},label:{showAnchorLine:!1},connector:{stroke:"transparent"}},title:"Alert",renderLabel:()=>(0,e.jsx)(P,{}),renderLabelPopover:()=>(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[(0,e.jsxs)("div",{style:{margin:0,display:"flex",alignItems:"center",gap:"6px",paddingBlock:"0.25rem "},children:[(0,e.jsx)(P,{}),(0,e.jsx)("strong",{children:"Origin HTTP 5xx Response Codes Rate Anomaly [Beta]"})]}),(0,e.jsx)("p",{style:{margin:0},children:"Unusually high number of HTTP 5xx response codes detected on Origin"})]})},R=u([{...D},{...D},{...I}]).bind({}),$=({x:y,y:b,color:E,size:C,key:B})=>B&&B.includes("Alert")?(0,e.jsx)(A,{top:b,left:y,size:C*C,fill:"white",stroke:E,strokeWidth:2,transform:"rotate(90)"},`triangle-${y}-${b}`):null,J=()=>(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[(0,e.jsxs)("div",{style:{margin:0,display:"flex",alignItems:"center",gap:"6px",paddingBlock:"0.25rem "},children:[(0,e.jsx)(P,{}),(0,e.jsx)("strong",{children:"Alert"})]}),(0,e.jsx)("p",{style:{margin:0},children:"Highest temperature (27\xB0C) reached"})]}),U=(y=>{const b={...l.B2[0],options:{...l.B2[0].options,gradient:{fromOpacity:0,toOpacity:0}}},E=b.data.slice(4,9),C=b.data.map(F=>F.value),B=E.map(F=>F.value),M=Math.min(...C),W=Math.max(...C)-M,Q=100-(Math.min(...B)-M)/W*100,Z={...b,group:"new-york-highlight",label:"Alert",data:E,options:{stroke:"var(--jp-red)",seriesLineStyle:{strokeWidth:3},gradient:{stops:[{offset:"0%",opacity:.5},{offset:`${Q*.75}%`,opacity:0},{offset:"100%",opacity:0}]}}},q=b.data[6];return(0,e.jsx)(i.A,{...y,smoothing:!1,data:[b,Z],withGradientFill:!0,withStartGlyphs:!0,withEndGlyphs:!0,renderGlyph:$,glyphStyle:{radius:8},children:(0,e.jsx)(i.A.AnnotationsOverlay,{children:(0,e.jsx)(i.A.Annotation,{datum:q,title:"Alert",subjectType:"circle",styles:{circleSubject:{radius:0},label:{showAnchorLine:!1},connector:{stroke:"transparent"}},renderLabel:P,renderLabelPopover:J})})})}).bind({}),X=["Default","Vertical","Horizontal","Mixed","Colored","Custom","Alert"];L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{}, {}, {
  styles: {
    circleSubject: {
      fill: 'var(--jp-red)'
    },
    connector: {
      stroke: 'var(--jp-red)'
    },
    label: {
      anchorLineStroke: 'var(--jp-red)'
    }
  }
}])`,...L.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
  subjectType: 'line-vertical'
}, {
  subjectType: 'line-vertical'
}, {
  subjectType: 'line-vertical',
  styles: {
    connector: {
      stroke: 'var(--jp-red)'
    },
    label: {
      anchorLineStroke: 'var(--jp-red)'
    }
  }
}])`,...w.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
  subjectType: 'line-horizontal'
}, {
  subjectType: 'line-horizontal'
}, {
  subjectType: 'line-horizontal',
  styles: {
    connector: {
      stroke: 'var(--jp-red)'
    },
    label: {
      anchorLineStroke: 'var(--jp-red)'
    }
  }
}])`,...z.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
  subjectType: 'circle'
}, {
  subjectType: 'line-vertical'
}, {
  subjectType: 'line-horizontal',
  styles: {
    connector: {
      stroke: 'var(--jp-red)'
    },
    label: {
      anchorLineStroke: 'var(--jp-red)'
    }
  }
}])`,...G.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
  styles: {
    label: {
      backgroundFill: '#98C8DF',
      showAnchorLine: false
    },
    circleSubject: {
      fill: '#98C8DF'
    },
    connector: {
      stroke: '#98C8DF'
    }
  }
}, {
  styles: {
    label: {
      backgroundFill: '#006DAB',
      fontColor: '#fff',
      showAnchorLine: false
    },
    circleSubject: {
      fill: '#006DAB'
    },
    connector: {
      stroke: '#006DAB'
    }
  }
}, {
  styles: {
    label: {
      backgroundFill: 'var(--jp-red)',
      showAnchorLine: false,
      fontColor: '#fff'
    },
    circleSubject: {
      fill: 'var(--jp-red)'
    },
    connector: {
      stroke: 'var(--jp-red)'
    }
  }
}])`,...O.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
  ...customTopAnnotationArgs
}, {
  ...customTopAnnotationArgs
}, {
  ...customBottomAnnotationArgs
}])`,...R.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`args => {
  // Use the first series data (New York)
  const fullSeries = {
    ...sampleData[0],
    options: {
      ...sampleData[0].options,
      gradient: {
        fromOpacity: 0,
        toOpacity: 0
      }
    }
  };

  // Create a highlighted middle portion (roughly from May to September)
  const highlightSeriesData = fullSeries.data.slice(4, 9); // Middle portion of the data

  // Calculate the min and max values to determine the gradient height
  const allValues = fullSeries.data.map(d => d.value);
  const highlightValues = highlightSeriesData.map(d => d.value);
  const chartMin = Math.min(...allValues);
  const chartMax = Math.max(...allValues);
  const chartRange = chartMax - chartMin;

  // Find the lowest point in the highlight series
  const highlightMin = Math.min(...highlightValues);

  // Calculate the percentage from bottom of chart to the lowest highlight point
  // This is where we want the gradient to stop
  const gradientStopPercentage = (highlightMin - chartMin) / chartRange * 100;

  // Since SVG gradients are top-to-bottom, we need to invert this
  const gradientCutoff = 100 - gradientStopPercentage;
  const highlightSeries = {
    ...fullSeries,
    group: 'new-york-highlight',
    label: 'Alert',
    data: highlightSeriesData,
    options: {
      stroke: 'var(--jp-red)',
      seriesLineStyle: {
        strokeWidth: 3
      },
      gradient: {
        stops: [{
          offset: '0%',
          opacity: 0.5
        }, {
          offset: \`\${gradientCutoff * 0.75}%\`,
          opacity: 0
        }, {
          offset: '100%',
          opacity: 0
        }]
      }
    }
  };

  // Find the peak in the highlighted series (July with value 27)
  const peakDatum = fullSeries.data[6]; // July - peak temperature

  return <LineChart {...args} smoothing={false} data={[fullSeries, highlightSeries]} withGradientFill={true} withStartGlyphs={true} withEndGlyphs={true} renderGlyph={renderAlertGlyph} glyphStyle={{
    radius: 8
  }}>
            <LineChart.AnnotationsOverlay>
                <LineChart.Annotation datum={peakDatum} title="Alert" subjectType="circle" styles={{
        circleSubject: {
          radius: 0
        },
        label: {
          showAnchorLine: false
        },
        connector: {
          stroke: 'transparent'
        }
      }} renderLabel={AlertIcon} renderLabelPopover={renderAlertLabelPopover} />
            </LineChart.AnnotationsOverlay>
        </LineChart>;
}`,...U.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"(N,T,t){t.d(T,{A:()=>c});var j=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),a=t.n(j),p=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=t.n(o),h=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js");function c(f){var S=f.top,v=S===void 0?0:S,x=f.left,A=x===void 0?0:x,l=f.className,i=f.children;return p.createElement(h.A,{className:g()("visx-glyph",l),top:v,left:A},i)}c.propTypes={top:a().number,left:a().number,className:a().string,children:a().node}},"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"(N,T,t){t.d(T,{A:()=>A});var j=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),a=t.n(j),p=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=t.n(o),h=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),c=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/star.js"),f=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),S=["children","className","top","left","size"];function v(){return v=Object.assign?Object.assign.bind():function(l){for(var i=1;i<arguments.length;i++){var d=arguments[i];for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(l[e]=d[e])}return l},v.apply(this,arguments)}function x(l,i){if(l==null)return{};var d={},e=Object.keys(l),n,r;for(r=0;r<e.length;r++)n=e[r],!(i.indexOf(n)>=0)&&(d[n]=l[n]);return d}function A(l){var i=l.children,d=l.className,e=l.top,n=l.left,r=l.size,u=x(l,S),m=(0,h.A)();return m.type(c.A),(typeof r=="number"||r)&&m.size(r),i?p.createElement(p.Fragment,null,i({path:m})):p.createElement(f.A,{top:e,left:n},p.createElement("path",v({className:g()("visx-glyph-star",d),d:m()||""},u)))}A.propTypes={children:a().func,className:a().string,top:a().number,left:a().number,size:a().oneOfType([a().number,a().func])}},"../charts/src/charts/line-chart/stories/config.tsx"(N,T,t){t.d(T,{Em:()=>z,Nc:()=>V,pn:()=>G});var j=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"),a=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),p=t.n(a),o=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=t.n(g),c=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),f=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/diamond.js"),S=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),v=["children","className","top","left","size"];function x(){return x=Object.assign?Object.assign.bind():function(s){for(var O=1;O<arguments.length;O++){var _=arguments[O];for(var D in _)Object.prototype.hasOwnProperty.call(_,D)&&(s[D]=_[D])}return s},x.apply(this,arguments)}function A(s,O){if(s==null)return{};var _={},D=Object.keys(s),P,I;for(I=0;I<D.length;I++)P=D[I],!(O.indexOf(P)>=0)&&(_[P]=s[P]);return _}function l(s){var O=s.children,_=s.className,D=s.top,P=s.left,I=s.size,Y=A(s,v),R=(0,c.A)();return R.type(f.A),(typeof I=="number"||I)&&R.size(I),O?o.createElement(o.Fragment,null,O({path:R})):o.createElement(S.A,{top:D,left:P},o.createElement("path",x({className:h()("visx-glyph-diamond",_),d:R()||""},Y)))}l.propTypes={children:p().func,className:p().string,top:p().number,left:p().number,size:p().oneOfType([p().number,p().func])};var i=t("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),d=t.n(i),e=t("../charts/src/providers/chart-context/themes.ts"),n=t("../charts/src/stories/chart-decorator.tsx"),r=t("../charts/src/stories/legend-config.tsx"),u=t("../charts/src/stories/sample-data/index.ts"),m=t("../charts/src/stories/theme-config.tsx");const L={withTooltips:{control:{type:"boolean"},description:"Enable or disable interactive tooltips on hover",table:{category:"Tooltips"}},renderTooltip:{control:!1,description:"Custom render function for tooltip content",table:{disable:!0}}},K={...L,crosshairMode:{control:{type:"select"},options:["none","vertical","horizontal","both"],description:"Show crosshair lines on tooltip hover",table:{category:"Tooltips"}},withTooltipCrosshairs:{control:!1,table:{disable:!0}}};try{L.displayName="tooltipArgTypes",L.__docgenInfo={description:`Shared tooltip configuration for chart stories
Provides consistent argTypes across all chart tooltip stories`,displayName:"tooltipArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/tooltip-config.tsx#tooltipArgTypes"]={docgenInfo:L.__docgenInfo,name:"tooltipArgTypes",path:"../charts/src/stories/tooltip-config.tsx#tooltipArgTypes"})}catch{}try{K.displayName="lineChartTooltipArgTypes",K.__docgenInfo={description:"Additional tooltip argTypes for line charts with crosshair support",displayName:"lineChartTooltipArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/tooltip-config.tsx#lineChartTooltipArgTypes"]={docgenInfo:K.__docgenInfo,name:"lineChartTooltipArgTypes",path:"../charts/src/stories/tooltip-config.tsx#lineChartTooltipArgTypes"})}catch{}var w=t("../charts/src/charts/private/default-glyph/default-glyph.tsx"),k=t("../charts/src/charts/line-chart/line-chart.tsx");const z=d()(e.z,{glyphs:[s=>(0,o.createElement)(w.W,{...s,key:s.key}),s=>(0,o.createElement)(j.A,{key:s.key,top:s.y,left:s.x,size:s.size*s.size,fill:s.color}),s=>(0,o.createElement)(l,{key:s.key,top:s.y,left:s.x,size:s.size*s.size,fill:s.color})],annotationStyles:{label:{maxWidth:250}}}),V={title:"JS Packages/Charts Library/Charts/Line Chart",component:k.A,parameters:{layout:"centered"},decorators:[n.OI],argTypes:{...r.r,...m.jW,...n.xo,...K,data:{control:{type:"object"},description:"Array of series data to display in the chart",table:{category:"Data"}}}},G={...m.In,data:u.B2.slice(0,4),withGradientFill:!1,withLegendGlyph:!1,smoothing:!0,maxWidth:1200,resizeDebounceTime:300,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}},withTooltips:!0};try{z.displayName="glyphTheme",z.__docgenInfo={description:"Custom storybook theme with glyphs",displayName:"glyphTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/line-chart/stories/config.tsx#glyphTheme"]={docgenInfo:z.__docgenInfo,name:"glyphTheme",path:"../charts/src/charts/line-chart/stories/config.tsx#glyphTheme"})}catch{}},"../charts/src/stories/legend-config.tsx"(N,T,t){t.d(T,{D:()=>a,r:()=>j});const j={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","line","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for individual legend items. This allows consumers to customize legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."},legendShapeStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:"{ width?: number; height?: number; margin?: string | number }"}},description:"Styles for legend shapes (width, height, margin)."},legendItemStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:'{ margin?: string | number; flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" }'}},description:"Styles for each legend item (margin, flexDirection)."}};function a(p){const{legendPosition:o,legendAlignment:g,legendOrientation:h,legendShape:c,legendInteractive:f,legendItemClassName:S,legendMaxWidth:v,legendTextOverflow:x,legendShapeStyles:A,legendItemStyles:l}=p;if(!(o!==void 0||g!==void 0||h!==void 0||c!==void 0||f!==void 0||S!==void 0||v!==void 0||x!==void 0||A!==void 0||l!==void 0))return;const d={};return h!==void 0&&(d.orientation=h),o!==void 0&&(d.position=o),g!==void 0&&(d.alignment=g),c!==void 0&&(d.shape=c),f!==void 0&&(d.interactive=f),S!==void 0&&(d.itemClassName=S),(v!==void 0||x!==void 0)&&(d.labelStyles={},v!==void 0&&(d.labelStyles.maxWidth=v),x!==void 0&&(d.labelStyles.textOverflow=x)),A!==void 0&&(d.shapeStyles=A),l!==void 0&&(d.itemStyles=l),d}try{a.displayName="extractLegendConfig",a.__docgenInfo={description:"Extracts flat legend story args into a `ChartLegendConfig` object.\nUse in story render functions to bridge flat Storybook controls to the nested `legend` prop.",displayName:"extractLegendConfig",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#extractLegendConfig"]={docgenInfo:a.__docgenInfo,name:"extractLegendConfig",path:"../charts/src/stories/legend-config.tsx#extractLegendConfig"})}catch{}try{j.displayName="legendArgTypes",j.__docgenInfo={description:"Shared legend configuration for chart stories.\nProvides consistent argTypes and decorators across all chart legend stories.\n\nThese use flat keys for reliable Storybook controls. Use `extractLegendConfig`\nin render functions to map them to the nested `legend` prop.",displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:j.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"(N,T,t){t.d(T,{A:()=>p});function j(o){var g,h,c="";if(typeof o=="string"||typeof o=="number")c+=o;else if(typeof o=="object")if(Array.isArray(o)){var f=o.length;for(g=0;g<f;g++)o[g]&&(h=j(o[g]))&&(c&&(c+=" "),c+=h)}else for(h in o)o[h]&&(c&&(c+=" "),c+=h);return c}function a(){for(var o,g,h=0,c="",f=arguments.length;h<f;h++)(o=arguments[h])&&(g=j(o))&&(c&&(c+=" "),c+=g);return c}const p=a},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"(N){var T=function(n){return t(n)&&!j(n)};function t(e){return!!e&&typeof e=="object"}function j(e){var n=Object.prototype.toString.call(e);return n==="[object RegExp]"||n==="[object Date]"||o(e)}var a=typeof Symbol=="function"&&Symbol.for,p=a?Symbol.for("react.element"):60103;function o(e){return e.$$typeof===p}function g(e){return Array.isArray(e)?[]:{}}function h(e,n){return n.clone!==!1&&n.isMergeableObject(e)?i(g(e),e,n):e}function c(e,n,r){return e.concat(n).map(function(u){return h(u,r)})}function f(e,n){if(!n.customMerge)return i;var r=n.customMerge(e);return typeof r=="function"?r:i}function S(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(n){return Object.propertyIsEnumerable.call(e,n)}):[]}function v(e){return Object.keys(e).concat(S(e))}function x(e,n){try{return n in e}catch{return!1}}function A(e,n){return x(e,n)&&!(Object.hasOwnProperty.call(e,n)&&Object.propertyIsEnumerable.call(e,n))}function l(e,n,r){var u={};return r.isMergeableObject(e)&&v(e).forEach(function(m){u[m]=h(e[m],r)}),v(n).forEach(function(m){A(e,m)||(x(e,m)&&r.isMergeableObject(n[m])?u[m]=f(m,r)(e[m],n[m],r):u[m]=h(n[m],r))}),u}function i(e,n,r){r=r||{},r.arrayMerge=r.arrayMerge||c,r.isMergeableObject=r.isMergeableObject||T,r.cloneUnlessOtherwiseSpecified=h;var u=Array.isArray(n),m=Array.isArray(e),L=u===m;return L?u?r.arrayMerge(e,n,r):l(e,n,r):h(n,r)}i.all=function(n,r){if(!Array.isArray(n))throw new Error("first argument should be an array");return n.reduce(function(u,m){return i(u,m,r)},{})};var d=i;N.exports=d}}]);
