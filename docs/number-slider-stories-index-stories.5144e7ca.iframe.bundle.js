(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5781],{"../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":(E,x,p)=>{"use strict";p.d(x,{Z:()=>S});var u=p("../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");function S(_,b){_.prototype=Object.create(b.prototype),_.prototype.constructor=_,(0,u.Z)(_,b)}},"../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":(E,x,p)=>{"use strict";p.d(x,{Z:()=>u});function u(S,_){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(v,y){return v.__proto__=y,v},u(S,_)}},"../components/components/number-slider/stories/index.stories.tsx":(E,x,p)=>{var W,F,U,I,$,Z;"use strict";p.r(x),p.d(x,{WithDefaultValue:()=>D,__namedExportsOrder:()=>G,_default:()=>V,default:()=>J});var u=p("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),S=p("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),_=p.n(S),b=p("../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");function v(i){return i&&i.stopPropagation&&i.stopPropagation(),i&&i.preventDefault&&i.preventDefault(),!1}function y(i){return i==null?[]:Array.isArray(i)?i.slice():[i]}function g(i){return i!==null&&i.length===1?i[0]:i.slice()}function M(i){Object.keys(i).forEach(c=>{typeof document!="undefined"&&document.addEventListener(c,i[c],!1)})}function j(i,c){return w(function(a,t){let e=a;return e<=t.min&&(e=t.min),e>=t.max&&(e=t.max),e}(i,c),c)}function w(i,c){const a=(i-c.min)%c.step;let t=i-a;return 2*Math.abs(a)>=c.step&&(t+=a>0?c.step:-c.step),parseFloat(t.toFixed(5))}let O=function(i){function c(t){var e;(e=i.call(this,t)||this).onKeyUp=()=>{e.onEnd()},e.onMouseUp=()=>{e.onEnd(e.getMouseEventMap())},e.onTouchEnd=n=>{n.preventDefault(),e.onEnd(e.getTouchEventMap())},e.onBlur=()=>{e.setState({index:-1},e.onEnd(e.getKeyDownEventMap()))},e.onMouseMove=n=>{e.setState({pending:!0});const r=e.getMousePosition(n),l=e.getDiffPosition(r[0]),d=e.getValueFromPosition(l);e.move(d)},e.onTouchMove=n=>{if(n.touches.length>1)return;e.setState({pending:!0});const r=e.getTouchPosition(n);if(e.isScrolling===void 0){const m=r[0]-e.startPosition[0],h=r[1]-e.startPosition[1];e.isScrolling=Math.abs(h)>Math.abs(m)}if(e.isScrolling)return void e.setState({index:-1});const l=e.getDiffPosition(r[0]),d=e.getValueFromPosition(l);e.move(d)},e.onKeyDown=n=>{if(!(n.ctrlKey||n.shiftKey||n.altKey||n.metaKey))switch(e.setState({pending:!0}),n.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":n.preventDefault(),e.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":n.preventDefault(),e.moveUpByStep();break;case"Home":n.preventDefault(),e.move(e.props.min);break;case"End":n.preventDefault(),e.move(e.props.max);break;case"PageDown":n.preventDefault(),e.moveDownByStep(e.props.pageFn(e.props.step));break;case"PageUp":n.preventDefault(),e.moveUpByStep(e.props.pageFn(e.props.step))}},e.onSliderMouseDown=n=>{if(!e.props.disabled&&n.button!==2){if(e.setState({pending:!0}),!e.props.snapDragDisabled){const r=e.getMousePosition(n);e.forceValueFromPosition(r[0],l=>{e.start(l,r[0]),M(e.getMouseEventMap())})}v(n)}},e.onSliderClick=n=>{if(!e.props.disabled&&e.props.onSliderClick&&!e.hasMoved){const r=e.getMousePosition(n),l=j(e.calcValue(e.calcOffsetFromPosition(r[0])),e.props);e.props.onSliderClick(l)}},e.createOnKeyDown=n=>r=>{e.props.disabled||(e.start(n),M(e.getKeyDownEventMap()),v(r))},e.createOnMouseDown=n=>r=>{if(e.props.disabled||r.button===2)return;e.setState({pending:!0});const l=e.getMousePosition(r);e.start(n,l[0]),M(e.getMouseEventMap()),v(r)},e.createOnTouchStart=n=>r=>{if(e.props.disabled||r.touches.length>1)return;e.setState({pending:!0});const l=e.getTouchPosition(r);e.startPosition=l,e.isScrolling=void 0,e.start(n,l[0]),M(e.getTouchEventMap()),function(d){d.stopPropagation&&d.stopPropagation()}(r)},e.handleResize=()=>{const n=window.setTimeout(()=>{e.pendingResizeTimeouts.shift(),e.resize()},0);e.pendingResizeTimeouts.push(n)},e.renderThumb=(n,r)=>{const l=e.props.thumbClassName+" "+e.props.thumbClassName+"-"+r+" "+(e.state.index===r?e.props.thumbActiveClassName:""),d={ref:h=>{e["thumb"+r]=h},key:e.props.thumbClassName+"-"+r,className:l,style:n,onMouseDown:e.createOnMouseDown(r),onTouchStart:e.createOnTouchStart(r),onFocus:e.createOnKeyDown(r),tabIndex:0,role:"slider","aria-orientation":e.props.orientation,"aria-valuenow":e.state.value[r],"aria-valuemin":e.props.min,"aria-valuemax":e.props.max,"aria-label":Array.isArray(e.props.ariaLabel)?e.props.ariaLabel[r]:e.props.ariaLabel,"aria-labelledby":Array.isArray(e.props.ariaLabelledby)?e.props.ariaLabelledby[r]:e.props.ariaLabelledby,"aria-disabled":e.props.disabled},m={index:r,value:g(e.state.value),valueNow:e.state.value[r]};return e.props.ariaValuetext&&(d["aria-valuetext"]=typeof e.props.ariaValuetext=="string"?e.props.ariaValuetext:e.props.ariaValuetext(m)),e.props.renderThumb(d,m)},e.renderTrack=(n,r,l)=>{const d={key:e.props.trackClassName+"-"+n,className:e.props.trackClassName+" "+e.props.trackClassName+"-"+n,style:e.buildTrackStyle(r,e.state.upperBound-l)},m={index:n,value:g(e.state.value)};return e.props.renderTrack(d,m)};let s=y(t.value);s.length||(s=y(t.defaultValue)),e.pendingResizeTimeouts=[];const o=[];for(let n=0;n<s.length;n+=1)s[n]=j(s[n],t),o.push(n);return e.resizeObserver=null,e.resizeElementRef=u.createRef(),e.state={index:-1,upperBound:0,sliderLength:0,value:s,zIndices:o},e}(0,b.Z)(c,i);var a=c.prototype;return a.componentDidMount=function(){typeof window!="undefined"&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},c.getDerivedStateFromProps=function(t,e){const s=y(t.value);return s.length?e.pending?null:{value:s.map(o=>j(o,t))}:null},a.componentDidUpdate=function(){this.state.upperBound===0&&this.resize()},a.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},a.onEnd=function(t){t&&function(e){Object.keys(e).forEach(s=>{typeof document!="undefined"&&document.removeEventListener(s,e[s],!1)})}(t),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},a.getValue=function(){return g(this.state.value)},a.getClosestIndex=function(t){let e=Number.MAX_VALUE,s=-1;const{value:o}=this.state,n=o.length;for(let r=0;r<n;r+=1){const l=this.calcOffset(o[r]),d=Math.abs(t-l);d<e&&(e=d,s=r)}return s},a.getMousePosition=function(t){return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},a.getTouchPosition=function(t){const e=t.touches[0];return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},a.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},a.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},a.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},a.getValueFromPosition=function(t){const e=t/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return j(this.state.startValue+e,this.props)},a.getDiffPosition=function(t){let e=t-this.state.startPosition;return this.props.invert&&(e*=-1),e},a.resize=function(){const{slider:t,thumb0:e}=this;if(!t||!e)return;const s=this.sizeKey(),o=t.getBoundingClientRect(),n=t[s],r=o[this.posMaxKey()],l=o[this.posMinKey()],d=e.getBoundingClientRect()[s.replace("client","").toLowerCase()],m=n-d,h=Math.abs(r-l);this.state.upperBound===m&&this.state.sliderLength===h&&this.state.thumbSize===d||this.setState({upperBound:m,sliderLength:h,thumbSize:d})},a.calcOffset=function(t){const e=this.props.max-this.props.min;return e===0?0:(t-this.props.min)/e*this.state.upperBound},a.calcValue=function(t){return t/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},a.calcOffsetFromPosition=function(t){const{slider:e}=this,s=e.getBoundingClientRect(),o=s[this.posMaxKey()],n=s[this.posMinKey()];let r=t-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?o:n));return this.props.invert&&(r=this.state.sliderLength-r),r-=this.state.thumbSize/2,r},a.forceValueFromPosition=function(t,e){const s=this.calcOffsetFromPosition(t),o=this.getClosestIndex(s),n=j(this.calcValue(s),this.props),r=this.state.value.slice();r[o]=n;for(let l=0;l<r.length-1;l+=1)if(r[l+1]-r[l]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:r},()=>{e(o),this.fireChangeEvent("onChange")})},a.clearPendingResizeTimeouts=function(){do{const t=this.pendingResizeTimeouts.shift();clearTimeout(t)}while(this.pendingResizeTimeouts.length)},a.start=function(t,e){const s=this["thumb"+t];s&&s.focus();const{zIndices:o}=this.state;o.splice(o.indexOf(t),1),o.push(t),this.setState(n=>({startValue:n.value[t],startPosition:e!==void 0?e:n.startPosition,index:t,zIndices:o}))},a.moveUpByStep=function(t){t===void 0&&(t=this.props.step);const e=this.state.value[this.state.index],s=j(this.props.invert&&this.props.orientation==="horizontal"?e-t:e+t,this.props);this.move(Math.min(s,this.props.max))},a.moveDownByStep=function(t){t===void 0&&(t=this.props.step);const e=this.state.value[this.state.index],s=j(this.props.invert&&this.props.orientation==="horizontal"?e+t:e-t,this.props);this.move(Math.max(s,this.props.min))},a.move=function(t){const e=this.state.value.slice(),{index:s}=this.state,{length:o}=e,n=e[s];if(t===n)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:r,max:l,min:d,minDistance:m}=this.props;if(!r){if(s>0){const h=e[s-1];t<h+m&&(t=h+m)}if(s<o-1){const h=e[s+1];t>h-m&&(t=h-m)}}e[s]=t,r&&o>1&&(t>n?(this.pushSucceeding(e,m,s),function(h,T,N,P){for(let f=0;f<h;f+=1){const k=P-f*N;T[h-1-f]>k&&(T[h-1-f]=k)}}(o,e,m,l)):t<n&&(this.pushPreceding(e,m,s),function(h,T,N,P){for(let f=0;f<h;f+=1){const k=P+f*N;T[f]<k&&(T[f]=k)}}(o,e,m,d))),this.setState({value:e},this.fireChangeEvent.bind(this,"onChange"))},a.pushSucceeding=function(t,e,s){let o,n;for(o=s,n=t[o]+e;t[o+1]!==null&&n>t[o+1];o+=1,n=t[o]+e)t[o+1]=w(n,this.props)},a.pushPreceding=function(t,e,s){for(let o=s,n=t[o]-e;t[o-1]!==null&&n<t[o-1];o-=1,n=t[o]-e)t[o-1]=w(n,this.props)},a.axisKey=function(){return this.props.orientation==="vertical"?"Y":"X"},a.orthogonalAxisKey=function(){return this.props.orientation==="vertical"?"X":"Y"},a.posMinKey=function(){return this.props.orientation==="vertical"?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},a.posMaxKey=function(){return this.props.orientation==="vertical"?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},a.sizeKey=function(){return this.props.orientation==="vertical"?"clientHeight":"clientWidth"},a.fireChangeEvent=function(t){this.props[t]&&this.props[t](g(this.state.value),this.state.index)},a.buildThumbStyle=function(t,e){const s={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(e)+1};return s[this.posMinKey()]=t+"px",s},a.buildTrackStyle=function(t,e){const s={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return s[this.posMinKey()]=t,s[this.posMaxKey()]=e,s},a.buildMarkStyle=function(t){var e;return(e={position:"absolute"})[this.posMinKey()]=t,e},a.renderThumbs=function(t){const{length:e}=t,s=[];for(let n=0;n<e;n+=1)s[n]=this.buildThumbStyle(t[n],n);const o=[];for(let n=0;n<e;n+=1)o[n]=this.renderThumb(s[n],n);return o},a.renderTracks=function(t){const e=[],s=t.length-1;e.push(this.renderTrack(0,0,t[0]));for(let o=0;o<s;o+=1)e.push(this.renderTrack(o+1,t[o],t[o+1]));return e.push(this.renderTrack(s+1,t[s],this.state.upperBound)),e},a.renderMarks=function(){let{marks:t}=this.props;const e=this.props.max-this.props.min+1;return typeof t=="boolean"?t=Array.from({length:e}).map((s,o)=>o):typeof t=="number"&&(t=Array.from({length:e}).map((s,o)=>o).filter(s=>s%t==0)),t.map(parseFloat).sort((s,o)=>s-o).map(s=>{const o=this.calcOffset(s),n={key:s,className:this.props.markClassName,style:this.buildMarkStyle(o)};return this.props.renderMark(n)})},a.render=function(){const t=[],{value:e}=this.state,s=e.length;for(let l=0;l<s;l+=1)t[l]=this.calcOffset(e[l],l);const o=this.props.withTracks?this.renderTracks(t):null,n=this.renderThumbs(t),r=this.props.marks?this.renderMarks():null;return u.createElement("div",{ref:l=>{this.slider=l,this.resizeElementRef.current=l},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},o,n,r)},c}(u.Component);O.displayName="ReactSlider",O.defaultProps={min:0,max:100,step:1,pageFn:i=>10*i,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:i=>u.createElement("div",i),renderTrack:i=>u.createElement("div",i),renderMark:i=>u.createElement("span",i)};var H=O,X=p("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Y=p.n(X),K=p("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/number-slider/style.scss"),A={};A.insert="head",A.singleton=!1;var Q=Y()(K.Z,A);const q=K.Z.locals||{};var C=p("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const z=i=>{let{className:c,maxValue:a=100,minValue:t=0,step:e=1,value:s,onChange:o,onBeforeChange:n,onAfterChange:r,renderThumb:l}=i;const[d,m]=u.useState(!1),h=_()("jp-components-number-slider",c,{"jp-components-number-slider--is-holding":d}),T=f=>{m(!0),typeof n=="function"&&n(f)},N=f=>{m(!1),typeof r=="function"&&r(f)},P=l||((f,k)=>(0,C.jsx)("div",{...f,children:k.valueNow}));return(0,C.jsx)("div",{className:h,"data-testid":"number-slider",children:(0,C.jsx)(H,{className:"jp-components-number-slider__control",thumbClassName:"jp-components-number-slider__thumb",thumbActiveClassName:"jp-components-number-slider__thumb--is-active",trackClassName:"jp-components-number-slider__track",value:s,max:a,min:t,step:e,renderThumb:P,onChange:o,onBeforeChange:T,onAfterChange:N})})};z.displayName="NumberSlider";const B=z;var ee=`import { useState } from 'react';
import NumberSlider from '../index';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Number Slider',
	component: NumberSlider,
} as ComponentMeta< typeof NumberSlider >;

// Export additional stories using pre-defined values
const Template: ComponentStory< typeof NumberSlider > = args => <NumberSlider { ...args } />;

// Export Default story
export const _default = Template.bind( {} );

// Export additional stories using chaning values
const TemplateWithChangingValue: ComponentStory< typeof NumberSlider > = args => {
	const [ value, setValue ] = useState( 10 );
	const [ endValue, setEndValue ] = useState( 10 );
	const renderThumb = ( props, state ) => {
		return (
			<div { ...props }>
				{ state.valueNow } - { state.valueNow % 2 === 0 ? 'Even' : 'Odd' }
			</div>
		);
	};

	return (
		<div>
			<NumberSlider
				{ ...args }
				value={ value }
				onChange={ setValue }
				onAfterChange={ setEndValue }
				renderThumb={ renderThumb } // eslint-disable-line react/jsx-no-bind
			/>
			<div>{ \`Value on changing: \${ value }\` }</div>
			<div>{ \`Value on change ends: \${ endValue }\` }</div>
		</div>
	);
};

// Export With Default Value story
export const WithDefaultValue = TemplateWithChangingValue.bind( {} );
`,te={_default:{startLoc:{col:54,line:10},endLoc:{col:88,line:10},startBody:{col:54,line:10},endBody:{col:88,line:10}},WithDefaultValue:{startLoc:{col:71,line:16},endLoc:{col:1,line:30},startBody:{col:71,line:16},endBody:{col:1,line:30}}};const J={parameters:{storySource:{source:`import { useState } from 'react';
import NumberSlider from '../index';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'JS Packages/Components/Number Slider',
  component: NumberSlider
} as ComponentMeta<typeof NumberSlider>);

// Export additional stories using pre-defined values
const Template: ComponentStory<typeof NumberSlider> = args => <NumberSlider {...args} />;

// Export Default story
export const _default = Template.bind({});

// Export additional stories using chaning values
const TemplateWithChangingValue: ComponentStory<typeof NumberSlider> = args => {
  const [value, setValue] = useState(10);
  const [endValue, setEndValue] = useState(10);
  const renderThumb = (props, state) => {
    return <div {...props}>
                {state.valueNow} - {state.valueNow % 2 === 0 ? 'Even' : 'Odd'}
            </div>;
  };
  return <div>
            <NumberSlider {...args} value={value} onChange={setValue} onAfterChange={setEndValue} renderThumb={renderThumb} 
    />
            <div>{\`Value on changing: \${value}\`}</div>
            <div>{\`Value on change ends: \${endValue}\`}</div>
        </div>;
};

// Export With Default Value story
export const WithDefaultValue = TemplateWithChangingValue.bind({});
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <NumberSlider {...args} />",
      ..._default.parameters?.docs?.source
    }
  }
};
WithDefaultValue.parameters = {
  ...WithDefaultValue.parameters,
  docs: {
    ...WithDefaultValue.parameters?.docs,
    source: {
      originalSource: "args => {\\n  const [value, setValue] = useState(10);\\n  const [endValue, setEndValue] = useState(10);\\n  const renderThumb = (props, state) => {\\n    return <div {...props}>\\n                {state.valueNow} - {state.valueNow % 2 === 0 ? 'Even' : 'Odd'}\\n            </div>;\\n  };\\n  return <div>\\n            <NumberSlider {...args} value={value} onChange={setValue} onAfterChange={setEndValue} renderThumb={renderThumb} // eslint-disable-line react/jsx-no-bind\\n    />\\n            <div>{\`Value on changing: \${value}\`}</div>\\n            <div>{\`Value on change ends: \${endValue}\`}</div>\\n        </div>;\\n}",
      ...WithDefaultValue.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:54,line:10},endLoc:{col:88,line:10},startBody:{col:54,line:10},endBody:{col:88,line:10}},"with-default-value":{startLoc:{col:71,line:16},endLoc:{col:1,line:30},startBody:{col:71,line:16},endBody:{col:1,line:30}}}}},title:"JS Packages/Components/Number Slider",component:B},L=i=>(0,C.jsx)(B,{...i});L.displayName="Template";const V=L.bind({}),R=i=>{const[c,a]=(0,u.useState)(10),[t,e]=(0,u.useState)(10),s=(o,n)=>(0,C.jsxs)("div",{...o,children:[n.valueNow," - ",n.valueNow%2===0?"Even":"Odd"]});return(0,C.jsxs)("div",{children:[(0,C.jsx)(B,{...i,value:c,onChange:a,onAfterChange:e,renderThumb:s}),(0,C.jsx)("div",{children:`Value on changing: ${c}`}),(0,C.jsx)("div",{children:`Value on change ends: ${t}`})]})};R.displayName="TemplateWithChangingValue";const D=R.bind({});V.parameters={...V.parameters,docs:{...(W=V.parameters)==null?void 0:W.docs,source:{originalSource:"args => <NumberSlider {...args} />",...(U=(F=V.parameters)==null?void 0:F.docs)==null?void 0:U.source}}},D.parameters={...D.parameters,docs:{...(I=D.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(10);
  const [endValue, setEndValue] = useState(10);
  const renderThumb = (props, state) => {
    return <div {...props}>
                {state.valueNow} - {state.valueNow % 2 === 0 ? 'Even' : 'Odd'}
            </div>;
  };
  return <div>
            <NumberSlider {...args} value={value} onChange={setValue} onAfterChange={setEndValue} renderThumb={renderThumb} // eslint-disable-line react/jsx-no-bind
    />
            <div>{\`Value on changing: \${value}\`}</div>
            <div>{\`Value on change ends: \${endValue}\`}</div>
        </div>;
}`,...(Z=($=D.parameters)==null?void 0:$.docs)==null?void 0:Z.source}}};const G=["_default","WithDefaultValue"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(E,x)=>{var p,u;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var S={}.hasOwnProperty,_="[native code]";function b(){for(var v=[],y=0;y<arguments.length;y++){var g=arguments[y];if(g){var M=typeof g;if(M==="string"||M==="number")v.push(g);else if(Array.isArray(g)){if(g.length){var j=b.apply(null,g);j&&v.push(j)}}else if(M==="object"){if(g.toString!==Object.prototype.toString&&!g.toString.toString().includes("[native code]")){v.push(g.toString());continue}for(var w in g)S.call(g,w)&&g[w]&&v.push(w)}}}return v.join(" ")}E.exports?(b.default=b,E.exports=b):(p=[],u=function(){return b}.apply(x,p),u!==void 0&&(E.exports=u))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/number-slider/style.scss":(E,x,p)=>{"use strict";p.d(x,{Z:()=>y});var u=p("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),S=p.n(u),_=p("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),b=p.n(_),v=b()(S());v.push([E.id,':root{--font-title-large: 36px;--font-title-small: 24px;--font-body: 16px;--font-label: 12px;--jp-black: #000000;--jp-black-80: #2c3338;--jp-white: #ffffff;--jp-white-off: #f9f9f6;--jp-gray: #dcdcde;--jp-gray-0: #F6F7F7;--jp-gray-5: #dcdcde;--jp-gray-10: #c3c4c7;--jp-gray-20: #A7AAAD;--jp-gray-30: #8c8f94;--jp-gray-40: #787C82;--jp-gray-50: #646970;--jp-gray-60: #50575E;--jp-gray-70: #3c434a;--jp-gray-80: #2C3338;--jp-gray-90: #1d2327;--jp-gray-100: #101517;--jp-gray-off: #e2e2df;--jp-yellow-5: #f5e6b3;--jp-yellow-10: #f2cf75;--jp-orange-20: #faa754;--jp-blue-5: #ced9f2;--jp-red-0: #F7EBEC;--jp-red-50: #D63638;--jp-red-60: #B32D2E;--jp-red-80: #8A2424;--jp-red: #d63639;--jp-pink: #C9356E;--jp-green-0: #f0f2eb;--jp-green-5: #d0e6b8;--jp-green-10: #9dd977;--jp-green-20: #64ca43;--jp-green-30: #2fb41f;--jp-green-40: #069e08;--jp-green-50: #008710;--jp-green-60: #007117;--jp-green-70: #005b18;--jp-green-80: #004515;--jp-green-90: #003010;--jp-green-100: #001c09;--jp-green: #069e08;--jp-green-primary: var(--jp-green-40);--jp-green-secondary: var(--jp-green-30);--jp-border-radius: 4px;--jp-border-radius-rna: 8px;--jp-menu-border-height: 1px;--jp-underline-thickness: 2px;--jp-modal-padding-large: 32px;--jp-modal-padding: 24px;--jp-modal-padding-small: 16px;--jp-modal-radius: 8px;--jp-button-padding: 8px;--jp-button-radius: 4px;--jp-gap: 16px;--jp-highlight: #3858e9}body{min-height:100%;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif}.jp-wrap{display:flex;align-items:center;flex-wrap:wrap;max-width:1128px;margin:0 auto}.jp-row{display:grid;grid-gap:24px;grid-template-columns:repeat(4, 1fr);width:100%;margin:0 16px}@media(min-width: 600px){.jp-row{grid-template-columns:repeat(8, 1fr);margin:0 18px}}@media(min-width: 960px){.jp-row{grid-template-columns:repeat(12, 1fr);max-width:1128px;margin:0 24px}}.sm-col-span-1{grid-column-end:span 1}.sm-col-span-2{grid-column-end:span 2}.sm-col-span-3{grid-column-end:span 3}.sm-col-span-4{grid-column-end:span 4}@media(min-width: 600px){.md-col-span-1{grid-column-end:span 1}.md-col-span-2{grid-column-end:span 2}.md-col-span-3{grid-column-end:span 3}.md-col-span-4{grid-column-end:span 4}.md-col-span-5{grid-column-end:span 5}.md-col-span-6{grid-column-end:span 6}.md-col-span-7{grid-column-end:span 7}.md-col-span-8{grid-column-end:span 8}}@media(min-width: 960px){.lg-col-span-1{grid-column-end:span 1}.lg-col-span-2{grid-column-end:span 2}.lg-col-span-3{grid-column-end:span 3}.lg-col-span-4{grid-column-end:span 4}.lg-col-span-5{grid-column-end:span 5}.lg-col-span-6{grid-column-end:span 6}.lg-col-span-7{grid-column-end:span 7}.lg-col-span-8{grid-column-end:span 8}.lg-col-span-9{grid-column-end:span 9}.lg-col-span-10{grid-column-end:span 10}.lg-col-span-11{grid-column-end:span 11}.lg-col-span-12{grid-column-end:span 12}}@media(max-width: 960px){.md-col-span-0{display:none}}@media(max-width: 600px){.sm-col-span-0{display:none}}.jp-cut{position:relative;display:block;margin:32px 0;padding:16px 64px 16px 24px;border:2px solid var(--jp-green-primary);border-radius:var(--jp-border-radius);text-decoration:none}.jp-cut span{display:block}.jp-cut span:last-of-type{font-weight:600}.jp-cut:hover span:last-of-type,.jp-cut:focus span:last-of-type{text-decoration:underline;text-decoration-thickness:var(--jp-underline-thickness)}.jp-cut:hover:after,.jp-cut:focus:after{transform:translateY(-50%) translateX(8px)}.jp-cut:after{content:"\u2192";position:absolute;top:50%;right:24px;font-size:24px;font-weight:600;color:var(--jp-green-primary);transform:translateY(-50%);transition:transform .15s ease-out}.jp-components-number-slider--is-holding .jp-components-number-slider__thumb{box-shadow:0 6px 8px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.04),0 0 0 3px rgba(6,158,8,.25)}.jp-components-number-slider__control{width:100%;height:40px}.jp-components-number-slider__track{height:8px;border-radius:8px;top:16px;background:var(--jp-gray)}.jp-components-number-slider__track.jp-components-number-slider__track-0{background:var(--jp-green-40)}.jp-components-number-slider__track.jp-components-number-slider__track-1{background:var(--jp-gray)}.jp-components-number-slider__thumb{display:flex;align-items:center;justify-content:center;padding:8px 16px;height:40px;background-color:var(--jp-white);border:1.5px solid var(--jp-green-50);box-shadow:0 6px 8px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.04);border-radius:4px;color:var(--jp-black);font-family:"SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif;font-style:normal;font-weight:600;font-size:var(--font-body);line-height:24px;letter-spacing:-0.02em;white-space:nowrap;cursor:pointer}.jp-components-number-slider__thumb.jp-components-number-slider__thumb--is-active{outline:none}.jp-components-number-slider__thumb[aria-valuenow="0"]{border-color:var(--jp-gray)}',""]);const y=v}}]);})();
