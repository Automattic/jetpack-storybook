"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7733],{"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js":((O,b,n)=>{n.d(b,{A:()=>a});var p=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),l=n.n(p),m=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=n("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=n.n(s),d=n("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js");function a(f){var j=f.top,x=j===void 0?0:j,y=f.left,A=y===void 0?0:y,c=f.className,u=f.children;return m.createElement(d.A,{className:h()("visx-glyph",c),top:x,left:A},u)}a.propTypes={top:l().number,left:l().number,className:l().string,children:l().node}}),"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js":((O,b,n)=>{n.d(b,{A:()=>A});var p=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),l=n.n(p),m=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=n("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=n.n(s),d=n("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),a=n("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/star.js"),f=n("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),j=["children","className","top","left","size"];function x(){return x=Object.assign?Object.assign.bind():function(c){for(var u=1;u<arguments.length;u++){var g=arguments[u];for(var e in g)Object.prototype.hasOwnProperty.call(g,e)&&(c[e]=g[e])}return c},x.apply(this,arguments)}function y(c,u){if(c==null)return{};var g={},e=Object.keys(c),t,r;for(r=0;r<e.length;r++)t=e[r],!(u.indexOf(t)>=0)&&(g[t]=c[t]);return g}function A(c){var u=c.children,g=c.className,e=c.top,t=c.left,r=c.size,v=y(c,j),i=(0,d.A)();return i.type(a.A),(typeof r=="number"||r)&&i.size(r),u?m.createElement(m.Fragment,null,u({path:i})):m.createElement(f.A,{top:e,left:t},m.createElement("path",x({className:h()("visx-glyph-star",g),d:i()||""},v)))}A.propTypes={children:l().func,className:l().string,top:l().number,left:l().number,size:l().oneOfType([l().number,l().func])}}),"../../../node_modules/.pnpm/@wordpress+deprecated@4.30.0/node_modules/@wordpress/deprecated/build-module/index.js":((O,b,n)=>{n.d(b,{A:()=>m});var p=n("../../../node_modules/.pnpm/@wordpress+hooks@4.30.0/node_modules/@wordpress/hooks/build-module/index.js");const l=Object.create(null);function m(s,h={}){const{since:d,version:a,alternative:f,plugin:j,link:x,hint:y}=h,A=j?` from ${j}`:"",c=d?` since version ${d}`:"",u=a?` and will be removed${A} in version ${a}`:"",g=f?` Please use ${f} instead.`:"",e=x?` See: ${x}`:"",t=y?` Note: ${y}`:"",r=`${s} is deprecated${c}${u}.${g}${e}${t}`;r in l||((0,p.Eo)("deprecated",s,h,r),console.warn(r),l[r]=!0)}}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((O,b,n)=>{n.d(b,{A:()=>m});function p(s){var h,d,a="";if(typeof s=="string"||typeof s=="number")a+=s;else if(typeof s=="object")if(Array.isArray(s)){var f=s.length;for(h=0;h<f;h++)s[h]&&(d=p(s[h]))&&(a&&(a+=" "),a+=d)}else for(d in s)s[d]&&(a&&(a+=" "),a+=d);return a}function l(){for(var s,h,d=0,a="",f=arguments.length;d<f;d++)(s=arguments[d])&&(h=p(s))&&(a&&(a+=" "),a+=h);return a}const m=l}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(O=>{var b=function(t){return n(t)&&!p(t)};function n(e){return!!e&&typeof e=="object"}function p(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||s(e)}var l=typeof Symbol=="function"&&Symbol.for,m=l?Symbol.for("react.element"):60103;function s(e){return e.$$typeof===m}function h(e){return Array.isArray(e)?[]:{}}function d(e,t){return t.clone!==!1&&t.isMergeableObject(e)?u(h(e),e,t):e}function a(e,t,r){return e.concat(t).map(function(v){return d(v,r)})}function f(e,t){if(!t.customMerge)return u;var r=t.customMerge(e);return typeof r=="function"?r:u}function j(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function x(e){return Object.keys(e).concat(j(e))}function y(e,t){try{return t in e}catch{return!1}}function A(e,t){return y(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function c(e,t,r){var v={};return r.isMergeableObject(e)&&x(e).forEach(function(i){v[i]=d(e[i],r)}),x(t).forEach(function(i){A(e,i)||(y(e,i)&&r.isMergeableObject(t[i])?v[i]=f(i,r)(e[i],t[i],r):v[i]=d(t[i],r))}),v}function u(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||a,r.isMergeableObject=r.isMergeableObject||b,r.cloneUnlessOtherwiseSpecified=d;var v=Array.isArray(t),i=Array.isArray(e),L=v===i;return L?v?r.arrayMerge(e,t,r):c(e,t,r):d(t,r)}u.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(v,i){return u(v,i,r)},{})};var g=u;O.exports=g}),"../charts/src/components/line-chart/stories/annotation.stories.tsx":((O,b,n)=>{n.r(b),n.d(b,{Colored:()=>t,Custom:()=>T,Default:()=>j,Horizontal:()=>c,Mixed:()=>g,Vertical:()=>y,__namedExportsOrder:()=>B,default:()=>d});var p=n("../charts/src/stories/sample-data/index.ts"),l=n("../charts/src/components/line-chart/line-chart.tsx"),m=n("../charts/src/components/line-chart/stories/config.tsx"),s=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d={...m.Nc,title:"JS Packages/Charts/Types/Line Chart/Annotations",args:{...m.pn}},a=S=>o=>(0,s.jsx)(l.A,{...o,children:(0,s.jsxs)(l.A.AnnotationsOverlay,{children:[(0,s.jsx)(l.A.Annotation,{datum:p.B2[0].data[10],title:"Notable event",subtitle:"This is a notable event",...S?.[0]||{}}),(0,s.jsx)(l.A.Annotation,{datum:p.B2[1].data[p.B2[1].data.length-10],title:"Another notable event",subtitle:"This is another notable event",...S?.[1]||{}}),(0,s.jsx)(l.A.Annotation,{datum:p.B2[2].data[p.B2[2].data.length-51],title:"Concerning event",subtitle:"This is a concerning event",...S?.[2]||{}})]})}),j=a([{},{},{styles:{circleSubject:{fill:"var(--jp-red)"},connector:{stroke:"var(--jp-red)"},label:{anchorLineStroke:"var(--jp-red)"}}}]).bind({}),y=a([{subjectType:"line-vertical"},{subjectType:"line-vertical"},{subjectType:"line-vertical",styles:{connector:{stroke:"var(--jp-red)"},label:{anchorLineStroke:"var(--jp-red)"}}}]).bind({}),c=a([{subjectType:"line-horizontal"},{subjectType:"line-horizontal"},{subjectType:"line-horizontal",styles:{connector:{stroke:"var(--jp-red)"},label:{anchorLineStroke:"var(--jp-red)"}}}]).bind({}),g=a([{subjectType:"circle"},{subjectType:"line-vertical"},{subjectType:"line-horizontal",styles:{connector:{stroke:"var(--jp-red)"},label:{anchorLineStroke:"var(--jp-red)"}}}]).bind({}),t=a([{styles:{label:{backgroundFill:"#98C8DF",showAnchorLine:!1},circleSubject:{fill:"#98C8DF"},connector:{stroke:"#98C8DF"}}},{styles:{label:{backgroundFill:"#006DAB",fontColor:"#fff",showAnchorLine:!1},circleSubject:{fill:"#006DAB"},connector:{stroke:"#006DAB"}}},{styles:{label:{backgroundFill:"var(--jp-red)",showAnchorLine:!1,fontColor:"#fff"},circleSubject:{fill:"var(--jp-red)"},connector:{stroke:"var(--jp-red)"}}}]).bind({}),r=()=>(0,s.jsx)("span",{style:{background:"black",color:"white",width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"},children:"D"}),v={subjectType:"line-vertical",styles:{label:{showAnchorLine:!1,y:"start"}},title:"Deployed",renderLabel:()=>(0,s.jsx)("span",{style:{transform:"translate(0, 6px)"},children:(0,s.jsx)(r,{})}),renderLabelPopover:()=>(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[(0,s.jsxs)("div",{style:{margin:0,display:"flex",alignItems:"center",gap:"6px",paddingBlock:"0.25rem "},children:[(0,s.jsx)(r,{}),(0,s.jsx)("strong",{children:"Deploy finished"})]}),(0,s.jsx)("p",{style:{margin:0},children:"Thu. Apr 24, 2025. 09:57:23 UTC"})]})},i=()=>(0,s.jsx)("span",{style:{background:"var(--jp-red)",color:"white",width:"20px",height:"20px",display:"inline-flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"},children:"!"}),L={subjectType:"circle",styles:{circleSubject:{radius:0},label:{showAnchorLine:!1},connector:{stroke:"transparent"}},title:"Alert",renderLabel:()=>(0,s.jsx)(i,{}),renderLabelPopover:()=>(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[(0,s.jsxs)("div",{style:{margin:0,display:"flex",alignItems:"center",gap:"6px",paddingBlock:"0.25rem "},children:[(0,s.jsx)(i,{}),(0,s.jsx)("strong",{children:"Origin HTTP 5xx Response Codes Rate Anomaly [Beta]"})]}),(0,s.jsx)("p",{style:{margin:0},children:"Unusually high number of HTTP 5xx response codes detected on Origin"})]})},T=a([{...v},{...v},{...L}]).bind({}),B=["Default","Vertical","Horizontal","Mixed","Colored","Custom"];j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{}, {}, {
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
}])`,...j.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
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
}])`,...y.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
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
}])`,...c.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
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
}])`,...g.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
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
}])`,...t.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
  ...customTopAnnotationArgs
}, {
  ...customTopAnnotationArgs
}, {
  ...customBottomAnnotationArgs
}])`,...T.parameters?.docs?.source}}}}),"../charts/src/components/line-chart/stories/config.tsx":((O,b,n)=>{n.d(b,{Em:()=>T,Nc:()=>B,pn:()=>S});var p=n("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"),l=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),m=n.n(l),s=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=n("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),d=n.n(h),a=n("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),f=n("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/diamond.js"),j=n("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),x=["children","className","top","left","size"];function y(){return y=Object.assign?Object.assign.bind():function(o){for(var E=1;E<arguments.length;E++){var M=arguments[E];for(var C in M)Object.prototype.hasOwnProperty.call(M,C)&&(o[C]=M[C])}return o},y.apply(this,arguments)}function A(o,E){if(o==null)return{};var M={},C=Object.keys(o),D,_;for(_=0;_<C.length;_++)D=C[_],!(E.indexOf(D)>=0)&&(M[D]=o[D]);return M}function c(o){var E=o.children,M=o.className,C=o.top,D=o.left,_=o.size,R=A(o,x),P=(0,a.A)();return P.type(f.A),(typeof _=="number"||_)&&P.size(_),E?s.createElement(s.Fragment,null,E({path:P})):s.createElement(j.A,{top:C,left:D},s.createElement("path",y({className:d()("visx-glyph-diamond",M),d:P()||""},R)))}c.propTypes={children:m().func,className:m().string,top:m().number,left:m().number,size:m().oneOfType([m().number,m().func])};var u=n("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),g=n.n(u),e=n("../charts/src/providers/chart-context/themes.ts"),t=n("../charts/src/stories/chart-decorator.tsx"),r=n("../charts/src/stories/legend-config.tsx"),v=n("../charts/src/stories/sample-data/index.ts"),i=n("../charts/src/stories/theme-config.tsx"),L=n("../charts/src/components/private/default-glyph/default-glyph.tsx"),I=n("../charts/src/components/line-chart/line-chart.tsx");const T=g()(e.QI,{glyphs:[o=>(0,s.createElement)(L.W,{...o,key:o.key}),o=>(0,s.createElement)(p.A,{key:o.key,top:o.y,left:o.x,size:o.size*o.size,fill:o.color}),o=>(0,s.createElement)(c,{key:o.key,top:o.y,left:o.x,size:o.size*o.size,fill:o.color})],annotationStyles:{label:{maxWidth:250}}}),B={title:"JS Packages/Charts/Types/Line Chart",component:I.A,parameters:{layout:"centered"},decorators:[t.OI],argTypes:{...r.r,...i.jW,...t.xo}},S={data:v.B2,withGradientFill:!1,withLegendGlyph:!1,smoothing:!0,maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}},withTooltips:!0};try{T.displayName="glyphTheme",T.__docgenInfo={description:"Custom storybook theme with glyphs",displayName:"glyphTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/stories/config.tsx#glyphTheme"]={docgenInfo:T.__docgenInfo,name:"glyphTheme",path:"../charts/src/components/line-chart/stories/config.tsx#glyphTheme"})}catch{}}),"../charts/src/stories/legend-config.tsx":((O,b,n)=>{n.d(b,{r:()=>p});const p={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'}};try{p.displayName="legendArgTypes",p.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:p.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}})}]);
