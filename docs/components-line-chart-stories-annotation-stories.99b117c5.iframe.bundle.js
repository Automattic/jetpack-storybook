"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7733],{"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js":((N,j,t)=>{t.d(j,{A:()=>d});var f=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),l=t.n(f),p=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),y=t.n(o),h=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js");function d(v){var R=v.top,A=R===void 0?0:R,S=v.left,L=S===void 0?0:S,i=v.className,a=v.children;return p.createElement(h.A,{className:y()("visx-glyph",i),top:A,left:L},a)}d.propTypes={top:l().number,left:l().number,className:l().string,children:l().node}}),"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js":((N,j,t)=>{t.d(j,{A:()=>L});var f=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),l=t.n(f),p=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),y=t.n(o),h=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),d=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/star.js"),v=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),R=["children","className","top","left","size"];function A(){return A=Object.assign?Object.assign.bind():function(i){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var e in b)Object.prototype.hasOwnProperty.call(b,e)&&(i[e]=b[e])}return i},A.apply(this,arguments)}function S(i,a){if(i==null)return{};var b={},e=Object.keys(i),n,r;for(r=0;r<e.length;r++)n=e[r],!(a.indexOf(n)>=0)&&(b[n]=i[n]);return b}function L(i){var a=i.children,b=i.className,e=i.top,n=i.left,r=i.size,m=S(i,R),c=(0,h.A)();return c.type(d.A),(typeof r=="number"||r)&&c.size(r),a?p.createElement(p.Fragment,null,a({path:c})):p.createElement(v.A,{top:e,left:n},p.createElement("path",A({className:y()("visx-glyph-star",b),d:c()||""},m)))}L.propTypes={children:l().func,className:l().string,top:l().number,left:l().number,size:l().oneOfType([l().number,l().func])}}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((N,j,t)=>{t.d(j,{A:()=>p});function f(o){var y,h,d="";if(typeof o=="string"||typeof o=="number")d+=o;else if(typeof o=="object")if(Array.isArray(o)){var v=o.length;for(y=0;y<v;y++)o[y]&&(h=f(o[y]))&&(d&&(d+=" "),d+=h)}else for(h in o)o[h]&&(d&&(d+=" "),d+=h);return d}function l(){for(var o,y,h=0,d="",v=arguments.length;h<v;h++)(o=arguments[h])&&(y=f(o))&&(d&&(d+=" "),d+=y);return d}const p=l}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(N=>{var j=function(n){return t(n)&&!f(n)};function t(e){return!!e&&typeof e=="object"}function f(e){var n=Object.prototype.toString.call(e);return n==="[object RegExp]"||n==="[object Date]"||o(e)}var l=typeof Symbol=="function"&&Symbol.for,p=l?Symbol.for("react.element"):60103;function o(e){return e.$$typeof===p}function y(e){return Array.isArray(e)?[]:{}}function h(e,n){return n.clone!==!1&&n.isMergeableObject(e)?a(y(e),e,n):e}function d(e,n,r){return e.concat(n).map(function(m){return h(m,r)})}function v(e,n){if(!n.customMerge)return a;var r=n.customMerge(e);return typeof r=="function"?r:a}function R(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(n){return Object.propertyIsEnumerable.call(e,n)}):[]}function A(e){return Object.keys(e).concat(R(e))}function S(e,n){try{return n in e}catch{return!1}}function L(e,n){return S(e,n)&&!(Object.hasOwnProperty.call(e,n)&&Object.propertyIsEnumerable.call(e,n))}function i(e,n,r){var m={};return r.isMergeableObject(e)&&A(e).forEach(function(c){m[c]=h(e[c],r)}),A(n).forEach(function(c){L(e,c)||(S(e,c)&&r.isMergeableObject(n[c])?m[c]=v(c,r)(e[c],n[c],r):m[c]=h(n[c],r))}),m}function a(e,n,r){r=r||{},r.arrayMerge=r.arrayMerge||d,r.isMergeableObject=r.isMergeableObject||j,r.cloneUnlessOtherwiseSpecified=h;var m=Array.isArray(n),c=Array.isArray(e),E=m===c;return E?m?r.arrayMerge(e,n,r):i(e,n,r):h(n,r)}a.all=function(n,r){if(!Array.isArray(n))throw new Error("first argument should be an array");return n.reduce(function(m,c){return a(m,c,r)},{})};var b=a;N.exports=b}),"../charts/src/components/line-chart/stories/annotation.stories.tsx":((N,j,t)=>{t.r(j),t.d(j,{Alert:()=>F,Colored:()=>x,Custom:()=>I,Default:()=>E,Horizontal:()=>B,Mixed:()=>G,Vertical:()=>w,__namedExportsOrder:()=>X,default:()=>r});var f=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),l=t.n(f),p=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),y=t.n(o),h=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),d=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/triangle.js"),v=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),R=["children","className","top","left","size"];function A(){return A=Object.assign?Object.assign.bind():function(u){for(var g=1;g<arguments.length;g++){var O=arguments[g];for(var T in O)Object.prototype.hasOwnProperty.call(O,T)&&(u[T]=O[T])}return u},A.apply(this,arguments)}function S(u,g){if(u==null)return{};var O={},T=Object.keys(u),z,C;for(C=0;C<T.length;C++)z=T[C],!(g.indexOf(z)>=0)&&(O[z]=u[z]);return O}function L(u){var g=u.children,O=u.className,T=u.top,z=u.left,C=u.size,H=S(u,R),W=(0,h.A)();return W.type(d.A),(typeof C=="number"||C)&&W.size(C),g?p.createElement(p.Fragment,null,g({path:W})):p.createElement(v.A,{top:T,left:z},p.createElement("path",A({className:y()("visx-glyph-triangle",O),d:W()||""},H)))}L.propTypes={children:l().func,className:l().string,top:l().number,left:l().number,size:l().oneOfType([l().number,l().func])};var i=t("../charts/src/stories/sample-data/index.ts"),a=t("../charts/src/components/line-chart/line-chart.tsx"),b=t("../charts/src/components/line-chart/stories/config.tsx"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r={...b.Nc,title:"JS Packages/Charts/Types/Line Chart/Annotations",args:{...b.pn}},m=u=>g=>(0,e.jsx)(a.A,{...g,children:(0,e.jsxs)(a.A.AnnotationsOverlay,{children:[(0,e.jsx)(a.A.Annotation,{datum:i.B2[0].data[10],title:"Notable event",subtitle:"This is a notable event",...u?.[0]||{}}),(0,e.jsx)(a.A.Annotation,{datum:i.B2[1].data[1],title:"Another notable event",subtitle:"This is another notable event",...u?.[1]||{}}),(0,e.jsx)(a.A.Annotation,{datum:i.B2[2].data[7],title:"Concerning event",subtitle:"This is a concerning event",...u?.[2]||{}})]})}),E=m([{},{},{styles:{circleSubject:{fill:"var(--jp-red)"},connector:{stroke:"var(--jp-red)"},label:{anchorLineStroke:"var(--jp-red)"}}}]).bind({}),w=m([{subjectType:"line-vertical"},{subjectType:"line-vertical"},{subjectType:"line-vertical",styles:{connector:{stroke:"var(--jp-red)"},label:{anchorLineStroke:"var(--jp-red)"}}}]).bind({}),B=m([{subjectType:"line-horizontal"},{subjectType:"line-horizontal"},{subjectType:"line-horizontal",styles:{connector:{stroke:"var(--jp-red)"},label:{anchorLineStroke:"var(--jp-red)"}}}]).bind({}),G=m([{subjectType:"circle"},{subjectType:"line-vertical"},{subjectType:"line-horizontal",styles:{connector:{stroke:"var(--jp-red)"},label:{anchorLineStroke:"var(--jp-red)"}}}]).bind({}),x=m([{styles:{label:{backgroundFill:"#98C8DF",showAnchorLine:!1},circleSubject:{fill:"#98C8DF"},connector:{stroke:"#98C8DF"}}},{styles:{label:{backgroundFill:"#006DAB",fontColor:"#fff",showAnchorLine:!1},circleSubject:{fill:"#006DAB"},connector:{stroke:"#006DAB"}}},{styles:{label:{backgroundFill:"var(--jp-red)",showAnchorLine:!1,fontColor:"#fff"},circleSubject:{fill:"var(--jp-red)"},connector:{stroke:"var(--jp-red)"}}}]).bind({}),M=()=>(0,e.jsx)("span",{style:{background:"black",color:"white",width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"},children:"D"}),D={subjectType:"line-vertical",styles:{label:{showAnchorLine:!1,y:"start"}},title:"Deployed",renderLabel:()=>(0,e.jsx)("span",{style:{transform:"translate(0, 6px)"},children:(0,e.jsx)(M,{})}),renderLabelPopover:()=>(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[(0,e.jsxs)("div",{style:{margin:0,display:"flex",alignItems:"center",gap:"6px",paddingBlock:"0.25rem "},children:[(0,e.jsx)(M,{}),(0,e.jsx)("strong",{children:"Deploy finished"})]}),(0,e.jsx)("p",{style:{margin:0},children:"Thu. Apr 24, 2025. 09:57:23 UTC"})]})},P=()=>(0,e.jsx)("span",{style:{background:"var(--jp-red)",color:"white",width:"20px",height:"20px",display:"inline-flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"},children:"!"}),_={subjectType:"circle",styles:{circleSubject:{radius:0},label:{showAnchorLine:!1},connector:{stroke:"transparent"}},title:"Alert",renderLabel:()=>(0,e.jsx)(P,{}),renderLabelPopover:()=>(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[(0,e.jsxs)("div",{style:{margin:0,display:"flex",alignItems:"center",gap:"6px",paddingBlock:"0.25rem "},children:[(0,e.jsx)(P,{}),(0,e.jsx)("strong",{children:"Origin HTTP 5xx Response Codes Rate Anomaly [Beta]"})]}),(0,e.jsx)("p",{style:{margin:0},children:"Unusually high number of HTTP 5xx response codes detected on Origin"})]})},I=m([{...D},{...D},{..._}]).bind({}),$=({x:u,y:g,color:O,size:T,key:z})=>z&&z.includes("Alert")?(0,e.jsx)(L,{top:g,left:u,size:T*T,fill:"white",stroke:O,strokeWidth:2,transform:"rotate(90)"},`triangle-${u}-${g}`):null,J=()=>(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[(0,e.jsxs)("div",{style:{margin:0,display:"flex",alignItems:"center",gap:"6px",paddingBlock:"0.25rem "},children:[(0,e.jsx)(P,{}),(0,e.jsx)("strong",{children:"Alert"})]}),(0,e.jsx)("p",{style:{margin:0},children:"Highest temperature (27\xB0C) reached"})]}),F=(u=>{const g={...i.B2[0],options:{...i.B2[0].options,gradient:{fromOpacity:0,toOpacity:0}}},O=g.data.slice(4,9),T=g.data.map(U=>U.value),z=O.map(U=>U.value),C=Math.min(...T),W=Math.max(...T)-C,Q=100-(Math.min(...z)-C)/W*100,Z={...g,group:"new-york-highlight",label:"Alert",data:O,options:{stroke:"var(--jp-red)",seriesLineStyle:{strokeWidth:3},gradient:{stops:[{offset:"0%",opacity:.5},{offset:`${Q*.75}%`,opacity:0},{offset:"100%",opacity:0}]}}},q=g.data[6];return(0,e.jsx)(a.A,{...u,smoothing:!1,data:[g,Z],withGradientFill:!0,withStartGlyphs:!0,withEndGlyphs:!0,renderGlyph:$,glyphStyle:{radius:8},children:(0,e.jsx)(a.A.AnnotationsOverlay,{children:(0,e.jsx)(a.A.Annotation,{datum:q,title:"Alert",subjectType:"circle",styles:{circleSubject:{radius:0},label:{showAnchorLine:!1},connector:{stroke:"transparent"}},renderLabel:P,renderLabelPopover:J})})})}).bind({}),X=["Default","Vertical","Horizontal","Mixed","Colored","Custom","Alert"];E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{}, {}, {
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
}])`,...E.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
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
}])`,...w.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
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
}])`,...B.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
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
}])`,...G.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
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
}])`,...x.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
  ...customTopAnnotationArgs
}, {
  ...customTopAnnotationArgs
}, {
  ...customBottomAnnotationArgs
}])`,...I.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => {
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
}`,...F.parameters?.docs?.source}}}}),"../charts/src/components/line-chart/stories/config.tsx":((N,j,t)=>{t.d(j,{Em:()=>B,Nc:()=>V,pn:()=>G});var f=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"),l=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),p=t.n(l),o=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),y=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=t.n(y),d=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),v=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/diamond.js"),R=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),A=["children","className","top","left","size"];function S(){return S=Object.assign?Object.assign.bind():function(s){for(var x=1;x<arguments.length;x++){var M=arguments[x];for(var D in M)Object.prototype.hasOwnProperty.call(M,D)&&(s[D]=M[D])}return s},S.apply(this,arguments)}function L(s,x){if(s==null)return{};var M={},D=Object.keys(s),P,_;for(_=0;_<D.length;_++)P=D[_],!(x.indexOf(P)>=0)&&(M[P]=s[P]);return M}function i(s){var x=s.children,M=s.className,D=s.top,P=s.left,_=s.size,Y=L(s,A),I=(0,d.A)();return I.type(v.A),(typeof _=="number"||_)&&I.size(_),x?o.createElement(o.Fragment,null,x({path:I})):o.createElement(R.A,{top:D,left:P},o.createElement("path",S({className:h()("visx-glyph-diamond",M),d:I()||""},Y)))}i.propTypes={children:p().func,className:p().string,top:p().number,left:p().number,size:p().oneOfType([p().number,p().func])};var a=t("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),b=t.n(a),e=t("../charts/src/providers/chart-context/themes.ts"),n=t("../charts/src/stories/chart-decorator.tsx"),r=t("../charts/src/stories/legend-config.tsx"),m=t("../charts/src/stories/sample-data/index.ts"),c=t("../charts/src/stories/theme-config.tsx");const E={withTooltips:{control:{type:"boolean"},description:"Enable or disable interactive tooltips on hover",table:{category:"Tooltips"}},renderTooltip:{control:!1,description:"Custom render function for tooltip content",table:{disable:!0}}},K={...E,crosshairMode:{control:{type:"select"},options:["none","vertical","horizontal","both"],description:"Show crosshair lines on tooltip hover",table:{category:"Tooltips"}},withTooltipCrosshairs:{control:!1,table:{disable:!0}}};try{E.displayName="tooltipArgTypes",E.__docgenInfo={description:`Shared tooltip configuration for chart stories
Provides consistent argTypes across all chart tooltip stories`,displayName:"tooltipArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/tooltip-config.tsx#tooltipArgTypes"]={docgenInfo:E.__docgenInfo,name:"tooltipArgTypes",path:"../charts/src/stories/tooltip-config.tsx#tooltipArgTypes"})}catch{}try{K.displayName="lineChartTooltipArgTypes",K.__docgenInfo={description:"Additional tooltip argTypes for line charts with crosshair support",displayName:"lineChartTooltipArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/tooltip-config.tsx#lineChartTooltipArgTypes"]={docgenInfo:K.__docgenInfo,name:"lineChartTooltipArgTypes",path:"../charts/src/stories/tooltip-config.tsx#lineChartTooltipArgTypes"})}catch{}var w=t("../charts/src/components/private/default-glyph/default-glyph.tsx"),k=t("../charts/src/components/line-chart/line-chart.tsx");const B=b()(e.z,{glyphs:[s=>(0,o.createElement)(w.W,{...s,key:s.key}),s=>(0,o.createElement)(f.A,{key:s.key,top:s.y,left:s.x,size:s.size*s.size,fill:s.color}),s=>(0,o.createElement)(i,{key:s.key,top:s.y,left:s.x,size:s.size*s.size,fill:s.color})],annotationStyles:{label:{maxWidth:250}}}),V={title:"JS Packages/Charts/Types/Line Chart",component:k.A,parameters:{layout:"centered"},decorators:[n.OI],argTypes:{...r.r,...c.jW,...n.xo,...K}},G={...c.In,data:m.B2.slice(0,4),withGradientFill:!1,withLegendGlyph:!1,smoothing:!0,maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}},withTooltips:!0};try{B.displayName="glyphTheme",B.__docgenInfo={description:"Custom storybook theme with glyphs",displayName:"glyphTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/stories/config.tsx#glyphTheme"]={docgenInfo:B.__docgenInfo,name:"glyphTheme",path:"../charts/src/components/line-chart/stories/config.tsx#glyphTheme"})}catch{}}),"../charts/src/stories/legend-config.tsx":((N,j,t)=>{t.d(j,{r:()=>f});const f={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."}};try{f.displayName="legendArgTypes",f.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:f.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}})}]);
