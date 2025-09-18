"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4304],{"../../../node_modules/.pnpm/@wordpress+deprecated@4.30.0/node_modules/@wordpress/deprecated/build-module/index.js":((T,x,a)=>{a.d(x,{A:()=>M});var b=a("../../../node_modules/.pnpm/@wordpress+hooks@4.30.0/node_modules/@wordpress/hooks/build-module/index.js");const y=Object.create(null);function M(o,u={}){const{since:n,version:c,alternative:g,plugin:v,link:S,hint:j}=u,$=v?` from ${v}`:"",O=n?` since version ${n}`:"",h=c?` and will be removed${$} in version ${c}`:"",p=g?` Please use ${g} instead.`:"",e=S?` See: ${S}`:"",r=j?` Note: ${j}`:"",t=`${o} is deprecated${O}${h}.${p}${e}${r}`;t in y||((0,b.Eo)("deprecated",o,u,t),console.warn(t),y[t]=!0)}}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((T,x,a)=>{a.d(x,{A:()=>M});function b(o){var u,n,c="";if(typeof o=="string"||typeof o=="number")c+=o;else if(typeof o=="object")if(Array.isArray(o)){var g=o.length;for(u=0;u<g;u++)o[u]&&(n=b(o[u]))&&(c&&(c+=" "),c+=n)}else for(n in o)o[n]&&(c&&(c+=" "),c+=n);return c}function y(){for(var o,u,n=0,c="",g=arguments.length;n<g;n++)(o=arguments[n])&&(u=b(o))&&(c&&(c+=" "),c+=u);return c}const M=y}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(T=>{var x=function(r){return a(r)&&!b(r)};function a(e){return!!e&&typeof e=="object"}function b(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||o(e)}var y=typeof Symbol=="function"&&Symbol.for,M=y?Symbol.for("react.element"):60103;function o(e){return e.$$typeof===M}function u(e){return Array.isArray(e)?[]:{}}function n(e,r){return r.clone!==!1&&r.isMergeableObject(e)?h(u(e),e,r):e}function c(e,r,t){return e.concat(r).map(function(l){return n(l,t)})}function g(e,r){if(!r.customMerge)return h;var t=r.customMerge(e);return typeof t=="function"?t:h}function v(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(r){return Object.propertyIsEnumerable.call(e,r)}):[]}function S(e){return Object.keys(e).concat(v(e))}function j(e,r){try{return r in e}catch{return!1}}function $(e,r){return j(e,r)&&!(Object.hasOwnProperty.call(e,r)&&Object.propertyIsEnumerable.call(e,r))}function O(e,r,t){var l={};return t.isMergeableObject(e)&&S(e).forEach(function(s){l[s]=n(e[s],t)}),S(r).forEach(function(s){$(e,s)||(j(e,s)&&t.isMergeableObject(r[s])?l[s]=g(s,t)(e[s],r[s],t):l[s]=n(r[s],t))}),l}function h(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||c,t.isMergeableObject=t.isMergeableObject||x,t.cloneUnlessOtherwiseSpecified=n;var l=Array.isArray(r),s=Array.isArray(e),E=l===s;return E?l?t.arrayMerge(e,r,t):O(e,r,t):n(r,t)}h.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(l,s){return h(l,s,t)},{})};var p=h;T.exports=p}),"../charts/src/components/bar-list-chart/stories/index.stories.tsx":((T,x,a)=>{a.r(x),a.d(x,{CustomLabelComponent:()=>s,CustomValueComponent:()=>E,Default:()=>t,MultiSeries:()=>l,__namedExportsOrder:()=>W,default:()=>r});var b=a("../number-formatters/src/index.ts"),y=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),M=a("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),o=a.n(M),u=["className","innerRef"];function n(){return n=Object.assign?Object.assign.bind():function(i){for(var m=1;m<arguments.length;m++){var d=arguments[m];for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&(i[f]=d[f])}return i},n.apply(this,arguments)}function c(i,m){if(i==null)return{};var d={},f=Object.keys(i),A,C;for(C=0;C<f.length;C++)A=f[C],!(m.indexOf(A)>=0)&&(d[A]=i[A]);return d}function g(i){var m=i.className,d=i.innerRef,f=c(i,u);return y.createElement("circle",n({ref:d,className:o()("visx-circle",m)},f))}var v=a("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),S=a("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),j=a("../charts/src/stories/chart-decorator.tsx"),$=a("../charts/src/stories/theme-config.tsx"),O=a("../charts/src/stories/sample-data/index.ts"),h=a("../charts/src/components/bar-list-chart/bar-list-chart.tsx"),p=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r={title:"JS Packages/Charts/Types/Bar List Chart",component:h.A,parameters:{layout:"centered"},decorators:[j.OI],argTypes:{...j.xo,...$.jW}},t={args:{withTooltips:!0,data:O.V_,containerWidth:"600px",containerHeight:"332px"}},l={args:{...t.args,data:O._v}},s={args:{...t.args,data:O.V_,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{xScale:{},yScale:{},labelComponent:({textProps:i,x:m,y:d,label:f,formatter:A})=>{const P=(0,S.p)().colors[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(g,{cx:m+6,cy:d,r:8,fill:P}),(0,p.jsx)(v.A,{...i,textAnchor:"start",x:m+24,y:d,fontWeight:500,children:A(f)})]})}}}},E={args:{...t.args,data:O._v,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{xScale:{},yScale:{},valueComponent:({textProps:i,x:m,y:d,value:f,formatter:A,data:C,index:P})=>{const N=C[0].data[P].value,V=C[1].data[P].value,w=V===0?0:((N-V)/V*100).toFixed(0);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(v.A,{...i,textAnchor:"end",x:m,y:d,dx:-50,fontWeight:500,children:A(f)}),(0,p.jsx)(v.A,{...i,textAnchor:"end",x:m,y:d,dx:-10,fill:"#008A20",fontWeight:500,children:`${Number(w)>0?"+":""}${w}%`})]})},valueFormatter:i=>`$${(0,b.qe)(i)}`}}},W=["Default","MultiSeries","CustomLabelComponent","CustomValueComponent"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: salesByProduct,
    containerWidth: '600px',
    containerHeight: '332px'
  }
}`,...t.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByChannel
  }
}`,...l.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByProduct,
    width: 450,
    margin: {
      top: 0,
      right: 100,
      bottom: 0,
      left: 0
    },
    options: {
      xScale: {},
      yScale: {},
      labelComponent: ({
        textProps,
        x,
        y,
        label,
        formatter
      }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const theme = useGlobalChartsTheme();
        const circleColor = theme.colors[1]; // Use second theme color for contrast

        return <>
                        <Circle cx={x + 6} cy={y} r={8} fill={circleColor} />
                        <Text {...textProps} textAnchor="start" x={x + 24} y={y} fontWeight={500}>
                            {formatter(label)}
                        </Text>
                    </>;
      }
    }
  }
}`,...s.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByChannel,
    width: 450,
    margin: {
      top: 0,
      right: 100,
      bottom: 0,
      left: 0
    },
    options: {
      xScale: {},
      yScale: {},
      valueComponent: ({
        textProps,
        x,
        y,
        value,
        formatter,
        data,
        index
      }) => {
        const currentValue = data[0].data[index].value;
        const previousValue = data[1].data[index].value;
        const percentage = previousValue === 0 ? 0 : ((currentValue - previousValue) / previousValue * 100).toFixed(0);
        return <>
                        <Text {...textProps} textAnchor="end" x={x} y={y} dx={-50} fontWeight={500}>
                            {formatter(value)}
                        </Text>
                        <Text {...textProps} textAnchor="end" x={x} y={y} dx={-10} fill="#008A20" fontWeight={500}>
                            {\`\${Number(percentage) > 0 ? '+' : ''}\${percentage}%\`}
                        </Text>
                    </>;
      },
      valueFormatter: (value: number) => \`$\${formatNumberCompact(value)}\`
    }
  }
}`,...E.parameters?.docs?.source}}}})}]);
