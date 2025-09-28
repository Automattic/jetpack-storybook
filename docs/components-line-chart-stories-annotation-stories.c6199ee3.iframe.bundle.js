"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7733],{"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js":((R,x,t)=>{t.d(x,{A:()=>c});var y=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),a=t.n(y),p=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=t.n(r),d=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js");function c(f){var E=f.top,j=E===void 0?0:E,A=f.left,M=A===void 0?0:A,i=f.className,l=f.children;return p.createElement(d.A,{className:g()("visx-glyph",i),top:j,left:M},l)}c.propTypes={top:a().number,left:a().number,className:a().string,children:a().node}}),"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js":((R,x,t)=>{t.d(x,{A:()=>M});var y=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),a=t.n(y),p=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=t.n(r),d=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),c=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/star.js"),f=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),E=["children","className","top","left","size"];function j(){return j=Object.assign?Object.assign.bind():function(i){for(var l=1;l<arguments.length;l++){var b=arguments[l];for(var e in b)Object.prototype.hasOwnProperty.call(b,e)&&(i[e]=b[e])}return i},j.apply(this,arguments)}function A(i,l){if(i==null)return{};var b={},e=Object.keys(i),n,s;for(s=0;s<e.length;s++)n=e[s],!(l.indexOf(n)>=0)&&(b[n]=i[n]);return b}function M(i){var l=i.children,b=i.className,e=i.top,n=i.left,s=i.size,m=A(i,E),h=(0,d.A)();return h.type(c.A),(typeof s=="number"||s)&&h.size(s),l?p.createElement(p.Fragment,null,l({path:h})):p.createElement(f.A,{top:e,left:n},p.createElement("path",j({className:g()("visx-glyph-star",b),d:h()||""},m)))}M.propTypes={children:a().func,className:a().string,top:a().number,left:a().number,size:a().oneOfType([a().number,a().func])}}),"../../../node_modules/.pnpm/@wordpress+deprecated@4.31.0/node_modules/@wordpress/deprecated/build-module/index.js":((R,x,t)=>{t.d(x,{A:()=>p});var y=t("../../../node_modules/.pnpm/@wordpress+hooks@4.31.0/node_modules/@wordpress/hooks/build-module/index.js");const a=Object.create(null);function p(r,g={}){const{since:d,version:c,alternative:f,plugin:E,link:j,hint:A}=g,M=E?` from ${E}`:"",i=d?` since version ${d}`:"",l=c?` and will be removed${M} in version ${c}`:"",b=f?` Please use ${f} instead.`:"",e=j?` See: ${j}`:"",n=A?` Note: ${A}`:"",s=`${r} is deprecated${i}${l}.${b}${e}${n}`;s in a||((0,y.Eo)("deprecated",r,g,s),console.warn(s),a[s]=!0)}}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((R,x,t)=>{t.d(x,{A:()=>p});function y(r){var g,d,c="";if(typeof r=="string"||typeof r=="number")c+=r;else if(typeof r=="object")if(Array.isArray(r)){var f=r.length;for(g=0;g<f;g++)r[g]&&(d=y(r[g]))&&(c&&(c+=" "),c+=d)}else for(d in r)r[d]&&(c&&(c+=" "),c+=d);return c}function a(){for(var r,g,d=0,c="",f=arguments.length;d<f;d++)(r=arguments[d])&&(g=y(r))&&(c&&(c+=" "),c+=g);return c}const p=a}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(R=>{var x=function(n){return t(n)&&!y(n)};function t(e){return!!e&&typeof e=="object"}function y(e){var n=Object.prototype.toString.call(e);return n==="[object RegExp]"||n==="[object Date]"||r(e)}var a=typeof Symbol=="function"&&Symbol.for,p=a?Symbol.for("react.element"):60103;function r(e){return e.$$typeof===p}function g(e){return Array.isArray(e)?[]:{}}function d(e,n){return n.clone!==!1&&n.isMergeableObject(e)?l(g(e),e,n):e}function c(e,n,s){return e.concat(n).map(function(m){return d(m,s)})}function f(e,n){if(!n.customMerge)return l;var s=n.customMerge(e);return typeof s=="function"?s:l}function E(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(n){return Object.propertyIsEnumerable.call(e,n)}):[]}function j(e){return Object.keys(e).concat(E(e))}function A(e,n){try{return n in e}catch{return!1}}function M(e,n){return A(e,n)&&!(Object.hasOwnProperty.call(e,n)&&Object.propertyIsEnumerable.call(e,n))}function i(e,n,s){var m={};return s.isMergeableObject(e)&&j(e).forEach(function(h){m[h]=d(e[h],s)}),j(n).forEach(function(h){M(e,h)||(A(e,h)&&s.isMergeableObject(n[h])?m[h]=f(h,s)(e[h],n[h],s):m[h]=d(n[h],s))}),m}function l(e,n,s){s=s||{},s.arrayMerge=s.arrayMerge||c,s.isMergeableObject=s.isMergeableObject||x,s.cloneUnlessOtherwiseSpecified=d;var m=Array.isArray(n),h=Array.isArray(e),z=m===h;return z?m?s.arrayMerge(e,n,s):i(e,n,s):d(n,s)}l.all=function(n,s){if(!Array.isArray(n))throw new Error("first argument should be an array");return n.reduce(function(m,h){return l(m,h,s)},{})};var b=l;R.exports=b}),"../charts/src/components/line-chart/stories/annotation.stories.tsx":((R,x,t)=>{t.r(x),t.d(x,{Alert:()=>U,Colored:()=>O,Custom:()=>K,Default:()=>z,Horizontal:()=>w,Mixed:()=>T,Vertical:()=>_,__namedExportsOrder:()=>J,default:()=>s});var y=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),a=t.n(y),p=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=t.n(r),d=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),c=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/triangle.js"),f=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),E=["children","className","top","left","size"];function j(){return j=Object.assign?Object.assign.bind():function(u){for(var v=1;v<arguments.length;v++){var L=arguments[v];for(var S in L)Object.prototype.hasOwnProperty.call(L,S)&&(u[S]=L[S])}return u},j.apply(this,arguments)}function A(u,v){if(u==null)return{};var L={},S=Object.keys(u),P,D;for(D=0;D<S.length;D++)P=S[D],!(v.indexOf(P)>=0)&&(L[P]=u[P]);return L}function M(u){var v=u.children,L=u.className,S=u.top,P=u.left,D=u.size,V=A(u,E),W=(0,d.A)();return W.type(c.A),(typeof D=="number"||D)&&W.size(D),v?p.createElement(p.Fragment,null,v({path:W})):p.createElement(f.A,{top:S,left:P},p.createElement("path",j({className:g()("visx-glyph-triangle",L),d:W()||""},V)))}M.propTypes={children:a().func,className:a().string,top:a().number,left:a().number,size:a().oneOfType([a().number,a().func])};var i=t("../charts/src/stories/sample-data/index.ts"),l=t("../charts/src/components/line-chart/line-chart.tsx"),b=t("../charts/src/components/line-chart/stories/config.tsx"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s={...b.Nc,title:"JS Packages/Charts/Types/Line Chart/Annotations",args:{...b.pn}},m=u=>v=>(0,e.jsx)(l.A,{...v,children:(0,e.jsxs)(l.A.AnnotationsOverlay,{children:[(0,e.jsx)(l.A.Annotation,{datum:i.B2[0].data[10],title:"Notable event",subtitle:"This is a notable event",...u?.[0]||{}}),(0,e.jsx)(l.A.Annotation,{datum:i.B2[1].data[1],title:"Another notable event",subtitle:"This is another notable event",...u?.[1]||{}}),(0,e.jsx)(l.A.Annotation,{datum:i.B2[2].data[7],title:"Concerning event",subtitle:"This is a concerning event",...u?.[2]||{}})]})}),z=m([{},{},{styles:{circleSubject:{fill:"var(--jp-red)"},connector:{stroke:"var(--jp-red)"},label:{anchorLineStroke:"var(--jp-red)"}}}]).bind({}),_=m([{subjectType:"line-vertical"},{subjectType:"line-vertical"},{subjectType:"line-vertical",styles:{connector:{stroke:"var(--jp-red)"},label:{anchorLineStroke:"var(--jp-red)"}}}]).bind({}),w=m([{subjectType:"line-horizontal"},{subjectType:"line-horizontal"},{subjectType:"line-horizontal",styles:{connector:{stroke:"var(--jp-red)"},label:{anchorLineStroke:"var(--jp-red)"}}}]).bind({}),T=m([{subjectType:"circle"},{subjectType:"line-vertical"},{subjectType:"line-horizontal",styles:{connector:{stroke:"var(--jp-red)"},label:{anchorLineStroke:"var(--jp-red)"}}}]).bind({}),O=m([{styles:{label:{backgroundFill:"#98C8DF",showAnchorLine:!1},circleSubject:{fill:"#98C8DF"},connector:{stroke:"#98C8DF"}}},{styles:{label:{backgroundFill:"#006DAB",fontColor:"#fff",showAnchorLine:!1},circleSubject:{fill:"#006DAB"},connector:{stroke:"#006DAB"}}},{styles:{label:{backgroundFill:"var(--jp-red)",showAnchorLine:!1,fontColor:"#fff"},circleSubject:{fill:"var(--jp-red)"},connector:{stroke:"var(--jp-red)"}}}]).bind({}),I=()=>(0,e.jsx)("span",{style:{background:"black",color:"white",width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"},children:"D"}),C={subjectType:"line-vertical",styles:{label:{showAnchorLine:!1,y:"start"}},title:"Deployed",renderLabel:()=>(0,e.jsx)("span",{style:{transform:"translate(0, 6px)"},children:(0,e.jsx)(I,{})}),renderLabelPopover:()=>(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[(0,e.jsxs)("div",{style:{margin:0,display:"flex",alignItems:"center",gap:"6px",paddingBlock:"0.25rem "},children:[(0,e.jsx)(I,{}),(0,e.jsx)("strong",{children:"Deploy finished"})]}),(0,e.jsx)("p",{style:{margin:0},children:"Thu. Apr 24, 2025. 09:57:23 UTC"})]})},G=()=>(0,e.jsx)("span",{style:{background:"var(--jp-red)",color:"white",width:"20px",height:"20px",display:"inline-flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"},children:"!"}),N={subjectType:"circle",styles:{circleSubject:{radius:0},label:{showAnchorLine:!1},connector:{stroke:"transparent"}},title:"Alert",renderLabel:()=>(0,e.jsx)(G,{}),renderLabelPopover:()=>(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[(0,e.jsxs)("div",{style:{margin:0,display:"flex",alignItems:"center",gap:"6px",paddingBlock:"0.25rem "},children:[(0,e.jsx)(G,{}),(0,e.jsx)("strong",{children:"Origin HTTP 5xx Response Codes Rate Anomaly [Beta]"})]}),(0,e.jsx)("p",{style:{margin:0},children:"Unusually high number of HTTP 5xx response codes detected on Origin"})]})},K=m([{...C},{...C},{...N}]).bind({}),H=({x:u,y:v,color:L,size:S,key:P})=>P&&P.includes("Alert")?(0,e.jsx)(M,{top:v,left:u,size:S*S,fill:"white",stroke:L,strokeWidth:2,transform:"rotate(90)"},`triangle-${u}-${v}`):null,Y=()=>(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[(0,e.jsxs)("div",{style:{margin:0,display:"flex",alignItems:"center",gap:"6px",paddingBlock:"0.25rem "},children:[(0,e.jsx)(G,{}),(0,e.jsx)("strong",{children:"Alert"})]}),(0,e.jsx)("p",{style:{margin:0},children:"Highest temperature (27\xB0C) reached"})]}),U=(u=>{const v={...i.B2[0],options:{...i.B2[0].options,gradient:{fromOpacity:0,toOpacity:0}}},L=v.data.slice(4,9),S=v.data.map(k=>k.value),P=L.map(k=>k.value),D=Math.min(...S),W=Math.max(...S)-D,Q=100-(Math.min(...P)-D)/W*100,X={...v,group:"new-york-highlight",label:"Alert",data:L,options:{stroke:"var(--jp-red)",seriesLineStyle:{strokeWidth:3},gradient:{stops:[{offset:"0%",opacity:.5},{offset:`${Q*.75}%`,opacity:0},{offset:"100%",opacity:0}]}}},Z=v.data[6];return(0,e.jsx)(l.A,{...u,smoothing:!1,data:[v,X],withGradientFill:!0,withStartGlyphs:!0,withEndGlyphs:!0,renderGlyph:H,glyphStyle:{radius:8},children:(0,e.jsx)(l.A.AnnotationsOverlay,{children:(0,e.jsx)(l.A.Annotation,{datum:Z,title:"Alert",subjectType:"circle",styles:{circleSubject:{radius:0},label:{showAnchorLine:!1},connector:{stroke:"transparent"}},renderLabel:G,renderLabelPopover:Y})})})}).bind({}),J=["Default","Vertical","Horizontal","Mixed","Colored","Custom","Alert"];z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{}, {}, {
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
}])`,...z.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
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
}])`,..._.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
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
}])`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
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
}])`,...T.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
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
}])`,...O.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
  ...customTopAnnotationArgs
}, {
  ...customTopAnnotationArgs
}, {
  ...customBottomAnnotationArgs
}])`,...K.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`args => {
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
}`,...U.parameters?.docs?.source}}}}),"../charts/src/components/line-chart/stories/config.tsx":((R,x,t)=>{t.d(x,{Em:()=>_,Nc:()=>$,pn:()=>w});var y=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"),a=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),p=t.n(a),r=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),d=t.n(g),c=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),f=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/diamond.js"),E=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),j=["children","className","top","left","size"];function A(){return A=Object.assign?Object.assign.bind():function(o){for(var T=1;T<arguments.length;T++){var B=arguments[T];for(var O in B)Object.prototype.hasOwnProperty.call(B,O)&&(o[O]=B[O])}return o},A.apply(this,arguments)}function M(o,T){if(o==null)return{};var B={},O=Object.keys(o),I,C;for(C=0;C<O.length;C++)I=O[C],!(T.indexOf(I)>=0)&&(B[I]=o[I]);return B}function i(o){var T=o.children,B=o.className,O=o.top,I=o.left,C=o.size,G=M(o,j),N=(0,c.A)();return N.type(f.A),(typeof C=="number"||C)&&N.size(C),T?r.createElement(r.Fragment,null,T({path:N})):r.createElement(E.A,{top:O,left:I},r.createElement("path",A({className:d()("visx-glyph-diamond",B),d:N()||""},G)))}i.propTypes={children:p().func,className:p().string,top:p().number,left:p().number,size:p().oneOfType([p().number,p().func])};var l=t("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),b=t.n(l),e=t("../charts/src/providers/chart-context/themes.ts"),n=t("../charts/src/stories/chart-decorator.tsx"),s=t("../charts/src/stories/legend-config.tsx"),m=t("../charts/src/stories/sample-data/index.ts"),h=t("../charts/src/stories/theme-config.tsx"),z=t("../charts/src/components/private/default-glyph/default-glyph.tsx"),F=t("../charts/src/components/line-chart/line-chart.tsx");const _=b()(e.QI,{glyphs:[o=>(0,r.createElement)(z.W,{...o,key:o.key}),o=>(0,r.createElement)(y.A,{key:o.key,top:o.y,left:o.x,size:o.size*o.size,fill:o.color}),o=>(0,r.createElement)(i,{key:o.key,top:o.y,left:o.x,size:o.size*o.size,fill:o.color})],annotationStyles:{label:{maxWidth:250}}}),$={title:"JS Packages/Charts/Types/Line Chart",component:F.A,parameters:{layout:"centered"},decorators:[n.OI],argTypes:{...s.r,...h.jW,...n.xo}},w={data:m.B2.slice(0,4),withGradientFill:!1,withLegendGlyph:!1,smoothing:!0,maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}},withTooltips:!0};try{_.displayName="glyphTheme",_.__docgenInfo={description:"Custom storybook theme with glyphs",displayName:"glyphTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/stories/config.tsx#glyphTheme"]={docgenInfo:_.__docgenInfo,name:"glyphTheme",path:"../charts/src/components/line-chart/stories/config.tsx#glyphTheme"})}catch{}}),"../charts/src/stories/legend-config.tsx":((R,x,t)=>{t.d(x,{r:()=>y});const y={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'}};try{y.displayName="legendArgTypes",y.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:y.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}})}]);
