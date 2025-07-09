(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../charts/src/components/bar-chart/stories/index.stories.tsx":(C,o,c)=>{"use strict";c.r(o),c.d(o,{Default:()=>i,ErrorStates:()=>d,FixedDimensions:()=>n,HorizontalBarChart:()=>w,ManyDataSeries:()=>u,SingleSeries:()=>t,SmartFormatting:()=>m,TimeSeries:()=>s,WithPatterns:()=>r,__namedExportsOrder:()=>g,default:()=>a});var f=c("../charts/src/components/line-chart/stories/large-values-sample.ts"),p=c("../charts/src/components/line-chart/stories/site-traffic-sample.ts"),D=c("../charts/src/components/bar-chart/bar-chart.tsx"),e=c("../charts/src/components/bar-chart/stories/sample-data.ts"),l=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a={title:"JS Packages/Charts/Types/Bar Chart",component:D.A,parameters:{layout:"centered"},decorators:[h=>(0,l.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,l.jsx)(h,{})})],argTypes:{maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}}}},i={args:{withTooltips:!0,data:[e.A[0],e.A[1],e.A[2]],gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300}},t={args:{...i.args,data:[e.A[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},s={args:{...i.args,data:[{...p.A[0],label:"Data with dateString and date",data:[...p.A[0].data,{dateString:"2024-01-31",value:2230},{dateString:"2024-02-01",value:2580},{date:new Date("2024-02-02 00:00:00"),value:3500},{dateString:"2024-02-03 00:00:00",value:1500},{dateString:"2024-02-04",value:2500},{dateString:"2024-02-05 00:00",value:3e3}]}],options:{axis:{x:{tickFormat:h=>new Date(h).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},u={args:{...i.args,data:e.A},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},n={args:{...i.args,width:800,height:400,data:[e.A[0],e.A[1],e.A[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},r={args:{...i.args,withPatterns:!0,data:e.A.map(h=>({...h,data:h.data.filter(y=>parseInt(y.label)>=2016)}))}},d={render:()=>(0,l.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:"Empty Data"}),(0,l.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,l.jsx)(D.A,{data:[]})})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:"Invalid Data"}),(0,l.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,l.jsx)(D.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};d.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const m={args:{withTooltips:!0,data:f.A,gridVisibility:"x"}};m.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const w={args:{...i.args,data:[e.A[0],e.A[1],e.A[2]],orientation:"horizontal",gridVisibility:"none"}},g=["Default","SingleSeries","TimeSeries","ManyDataSeries","FixedDimensions","WithPatterns","ErrorStates","SmartFormatting","HorizontalBarChart"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: [data[0], data[1], data[2]],
    // limit to 3 series for better readability
    gridVisibility: 'x',
    maxWidth: 1200,
    aspectRatio: 0.5,
    resizeDebounceTime: 300
  }
}`,...i.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [data[0]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with a single data series.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [{
      ...trafficData[0],
      label: 'Data with dateString and date',
      data: [...trafficData[0].data, {
        dateString: '2024-01-31',
        value: 2230
      }, {
        dateString: '2024-02-01',
        value: 2580
      }, {
        date: new Date('2024-02-02 00:00:00'),
        value: 3500
      }, {
        dateString: '2024-02-03 00:00:00',
        value: 1500
      }, {
        dateString: '2024-02-04',
        value: 2500
      }, {
        dateString: '2024-02-05 00:00',
        value: 3000
      }]
    }],
    options: {
      axis: {
        x: {
          tickFormat: (timestamp: number) => {
            const date = new Date(timestamp);
            return date.toLocaleDateString('en-US', {
              dateStyle: 'short'
            });
          }
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with a time series.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with many data series.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 800,
    height: 400,
    data: [data[0], data[1], data[2]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with fixed dimensions that override the responsive behavior.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    withPatterns: true,
    data: data.map(country => {
      return {
        ...country,
        data: country.data.filter(d => parseInt(d.label) >= 2016)
      };
    })
  }
}`,...r.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '20px'
  }}>
            <div>
                <h3>Empty Data</h3>
                <div style={{
        width: '400px',
        height: '300px'
      }}>
                    <BarChart data={[]} />
                </div>
            </div>

            <div>
                <h3>Invalid Data</h3>
                <div style={{
        width: '400px',
        height: '300px'
      }}>
                    <BarChart data={[{
          label: 'Invalid Series',
          data: [{
            date: new Date('invalid'),
            value: 10,
            label: 'Invalid Date'
          }, {
            date: new Date('2024-01-02'),
            value: null,
            label: 'Null Value'
          }],
          options: {}
        }]} />
                </div>
            </div>
        </div>
}`,...d.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    gridVisibility: 'x'
  }
}`,...m.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [data[0], data[1], data[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,...w.parameters?.docs?.source}}}},"../charts/src/components/line-chart/stories/large-values-sample.ts":(C,o,c)=>{"use strict";c.d(o,{A:()=>p});const p=[{label:"Revenue (Billions)",data:[{date:new Date("2024-01-01"),value:12e8},{date:new Date("2024-02-01"),value:145e7},{date:new Date("2024-03-01"),value:168e7},{date:new Date("2024-04-01"),value:21e8},{date:new Date("2024-05-01"),value:235e7},{date:new Date("2024-06-01"),value:28e8}],options:{stroke:"#3858E9"}},{label:"Users (Millions)",data:[{date:new Date("2024-01-01"),value:45e6},{date:new Date("2024-02-01"),value:52e6},{date:new Date("2024-03-01"),value:48e6},{date:new Date("2024-04-01"),value:61e6},{date:new Date("2024-05-01"),value:75e6},{date:new Date("2024-06-01"),value:89e6}],options:{stroke:"#00BA37"}}]},"../charts/src/components/line-chart/stories/site-traffic-sample.ts":(C,o,c)=>{"use strict";c.d(o,{A:()=>f});const f=[{label:"Views",options:{stroke:"#069e08"},data:[{date:new Date("2024-01-01"),value:2558},{date:new Date("2024-01-02"),value:3399},{date:new Date("2024-01-03"),value:2260},{date:new Date("2024-01-04"),value:2331},{date:new Date("2024-01-05"),value:3302},{date:new Date("2024-01-06"),value:1852},{date:new Date("2024-01-07"),value:2607},{date:new Date("2024-01-08"),value:2804},{date:new Date("2024-01-09"),value:3260},{date:new Date("2024-01-10"),value:2941},{date:new Date("2024-01-11"),value:2857},{date:new Date("2024-01-12"),value:3461},{date:new Date("2024-01-13"),value:1548},{date:new Date("2024-01-14"),value:2739},{date:new Date("2024-01-15"),value:3288},{date:new Date("2024-01-16"),value:2869},{date:new Date("2024-01-17"),value:2590},{date:new Date("2024-01-18"),value:2609},{date:new Date("2024-01-19"),value:2648},{date:new Date("2024-01-20"),value:1805},{date:new Date("2024-01-21"),value:2531},{date:new Date("2024-01-22"),value:3605},{date:new Date("2024-01-23"),value:2366},{date:new Date("2024-01-24"),value:2782},{date:new Date("2024-01-25"),value:2885},{date:new Date("2024-01-26"),value:2918},{date:new Date("2024-01-27"),value:2518},{date:new Date("2024-01-28"),value:2378},{date:new Date("2024-01-29"),value:2714},{date:new Date("2024-01-30"),value:3279}]},{label:"Visitors",options:{stroke:"rgb(230, 139, 40)"},data:[{date:new Date("2024-01-01"),value:2412},{date:new Date("2024-01-02"),value:1899},{date:new Date("2024-01-03"),value:2061},{date:new Date("2024-01-04"),value:1939},{date:new Date("2024-01-05"),value:1986},{date:new Date("2024-01-06"),value:1560},{date:new Date("2024-01-07"),value:1741},{date:new Date("2024-01-08"),value:2120},{date:new Date("2024-01-09"),value:1889},{date:new Date("2024-01-10"),value:1666},{date:new Date("2024-01-11"),value:2396},{date:new Date("2024-01-12"),value:2276},{date:new Date("2024-01-13"),value:1218},{date:new Date("2024-01-14"),value:1228},{date:new Date("2024-01-15"),value:1600},{date:new Date("2024-01-16"),value:1814},{date:new Date("2024-01-17"),value:1701},{date:new Date("2024-01-18"),value:1507},{date:new Date("2024-01-19"),value:1833},{date:new Date("2024-01-20"),value:1407},{date:new Date("2024-01-21"),value:965},{date:new Date("2024-01-22"),value:2288},{date:new Date("2024-01-23"),value:2135},{date:new Date("2024-01-24"),value:1824},{date:new Date("2024-01-25"),value:2219},{date:new Date("2024-01-26"),value:1918},{date:new Date("2024-01-27"),value:1101},{date:new Date("2024-01-28"),value:1695},{date:new Date("2024-01-29"),value:1615},{date:new Date("2024-01-30"),value:2056}]}]},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(C,o,c)=>{"use strict";c.d(o,{A:()=>D});function f(e){var l,v,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(l=0;l<i;l++)e[l]&&(v=f(e[l]))&&(a&&(a+=" "),a+=v)}else for(v in e)e[v]&&(a&&(a+=" "),a+=v);return a}function p(){for(var e,l,v=0,a="",i=arguments.length;v<i;v++)(e=arguments[v])&&(l=f(e))&&(a&&(a+=" "),a+=l);return a}const D=p},"../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/browser.js":(C,o,c)=>{o.formatArgs=p,o.save=D,o.load=e,o.useColors=f,o.storage=l(),o.destroy=(()=>{let a=!1;return()=>{a||(a=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),o.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function f(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let a;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(a=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(a[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function p(a){if(a[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+a[0]+(this.useColors?"%c ":" ")+"+"+C.exports.humanize(this.diff),!this.useColors)return;const i="color: "+this.color;a.splice(1,0,i,"color: inherit");let t=0,s=0;a[0].replace(/%[a-zA-Z%]/g,u=>{u!=="%%"&&(t++,u==="%c"&&(s=t))}),a.splice(s,0,i)}o.log=console.debug||console.log||(()=>{});function D(a){try{a?o.storage.setItem("debug",a):o.storage.removeItem("debug")}catch{}}function e(){let a;try{a=o.storage.getItem("debug")||o.storage.getItem("DEBUG")}catch{}return!a&&typeof process<"u"&&"env"in process&&(a=process.env.DEBUG),a}function l(){try{return localStorage}catch{}}C.exports=c("../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js")(o);const{formatters:v}=C.exports;v.j=function(a){try{return JSON.stringify(a)}catch(i){return"[UnexpectedJSONParseError]: "+i.message}}},"../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js":(C,o,c)=>{function f(p){e.debug=e,e.default=e,e.coerce=s,e.disable=i,e.enable=v,e.enabled=t,e.humanize=c("../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js"),e.destroy=u,Object.keys(p).forEach(n=>{e[n]=p[n]}),e.names=[],e.skips=[],e.formatters={};function D(n){let r=0;for(let d=0;d<n.length;d++)r=(r<<5)-r+n.charCodeAt(d),r|=0;return e.colors[Math.abs(r)%e.colors.length]}e.selectColor=D;function e(n){let r,d=null,m,w;function g(...h){if(!g.enabled)return;const y=g,b=Number(new Date),S=b-(r||b);y.diff=S,y.prev=r,y.curr=b,r=b,h[0]=e.coerce(h[0]),typeof h[0]!="string"&&h.unshift("%O");let F=0;h[0]=h[0].replace(/%([a-zA-Z%])/g,(_,A)=>{if(_==="%%")return"%";F++;const x=e.formatters[A];if(typeof x=="function"){const E=h[F];_=x.call(y,E),h.splice(F,1),F--}return _}),e.formatArgs.call(y,h),(y.log||e.log).apply(y,h)}return g.namespace=n,g.useColors=e.useColors(),g.color=e.selectColor(n),g.extend=l,g.destroy=e.destroy,Object.defineProperty(g,"enabled",{enumerable:!0,configurable:!1,get:()=>d!==null?d:(m!==e.namespaces&&(m=e.namespaces,w=e.enabled(n)),w),set:h=>{d=h}}),typeof e.init=="function"&&e.init(g),g}function l(n,r){const d=e(this.namespace+(typeof r>"u"?":":r)+n);return d.log=this.log,d}function v(n){e.save(n),e.namespaces=n,e.names=[],e.skips=[];const r=(typeof n=="string"?n:"").trim().replace(/\s+/g,",").split(",").filter(Boolean);for(const d of r)d[0]==="-"?e.skips.push(d.slice(1)):e.names.push(d)}function a(n,r){let d=0,m=0,w=-1,g=0;for(;d<n.length;)if(m<r.length&&(r[m]===n[d]||r[m]==="*"))r[m]==="*"?(w=m,g=d,m++):(d++,m++);else if(w!==-1)m=w+1,g++,d=g;else return!1;for(;m<r.length&&r[m]==="*";)m++;return m===r.length}function i(){const n=[...e.names,...e.skips.map(r=>"-"+r)].join(",");return e.enable(""),n}function t(n){for(const r of e.skips)if(a(n,r))return!1;for(const r of e.names)if(a(n,r))return!0;return!1}function s(n){return n instanceof Error?n.stack||n.message:n}function u(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}C.exports=f},"../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js":C=>{var o=1e3,c=o*60,f=c*60,p=f*24,D=p*7,e=p*365.25;C.exports=function(t,s){s=s||{};var u=typeof t;if(u==="string"&&t.length>0)return l(t);if(u==="number"&&isFinite(t))return s.long?a(t):v(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};function l(t){if(t=String(t),!(t.length>100)){var s=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(s){var u=parseFloat(s[1]),n=(s[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return u*e;case"weeks":case"week":case"w":return u*D;case"days":case"day":case"d":return u*p;case"hours":case"hour":case"hrs":case"hr":case"h":return u*f;case"minutes":case"minute":case"mins":case"min":case"m":return u*c;case"seconds":case"second":case"secs":case"sec":case"s":return u*o;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}}}function v(t){var s=Math.abs(t);return s>=p?Math.round(t/p)+"d":s>=f?Math.round(t/f)+"h":s>=c?Math.round(t/c)+"m":s>=o?Math.round(t/o)+"s":t+"ms"}function a(t){var s=Math.abs(t);return s>=p?i(t,s,p,"day"):s>=f?i(t,s,f,"hour"):s>=c?i(t,s,c,"minute"):s>=o?i(t,s,o,"second"):t+" ms"}function i(t,s,u,n){var r=s>=u*1.5;return Math.round(t/u)+" "+n+(r?"s":"")}}}]);
