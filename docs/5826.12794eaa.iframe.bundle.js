"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5826],{"../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/higher-order/pure/index.js":(v,h,e)=>{e.d(h,{Z:()=>l});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.51.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js");const l=(0,n.o)(function(r){return r.prototype instanceof d.Component?class extends r{shouldComponentUpdate(u,f){return!(0,o.ZP)(u,this.props)||!(0,o.ZP)(f,this.state)}}:class extends d.Component{shouldComponentUpdate(u){return!(0,o.ZP)(u,this.props)}render(){return(0,d.createElement)(r,{...this.props})}}},"pure")},"../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-isomorphic-layout-effect/index.js":(v,h,e)=>{e.d(h,{Z:()=>n});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const n=typeof window!="undefined"?d.useLayoutEffect:d.useEffect},"../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js":(v,h,e)=>{e.d(h,{o:()=>o});var d=e("../../../node_modules/.pnpm/pascal-case@3.1.2/node_modules/pascal-case/dist.es2015/index.js");function o(c,l){return r=>{const u=c(r);return u.displayName=n(l,r),u}}const n=(c,l)=>{const r=l.displayName||l.name||"Component";return`${(0,d.Ho)(c!=null?c:"")}(${r})`}},"../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/with-dispatch/index.js":(v,h,e)=>{e.d(h,{Z:()=>f});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-isomorphic-layout-effect/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");const r=(E,x)=>{const w=(0,c.Z)(),O=(0,d.useRef)(E);return(0,n.Z)(()=>{O.current=E}),(0,d.useMemo)(()=>{const D=O.current(w.dispatch,w);return Object.fromEntries(Object.entries(D).map(([C,T])=>(typeof T!="function"&&console.warn(`Property ${C} returned from dispatchMap in useDispatchWithMap must be a function.`),[C,(...s)=>O.current(w.dispatch,w)[C](...s)])))},[w,...x])},f=E=>(0,o.o)(x=>w=>{const D=r((C,T)=>E(C,w,T),[]);return(0,d.createElement)(x,{...w,...D})},"withDispatch")},"../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/with-select/index.js":(v,h,e)=>{e.d(h,{Z:()=>r});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/higher-order/pure/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js");const r=u=>(0,o.o)(f=>(0,n.Z)(E=>{const x=(O,D)=>u(O,E,D),w=(0,c.Z)(x);return(0,d.createElement)(f,{...E,...w})}),"withSelect")},"../../../node_modules/.pnpm/@wordpress+element@5.28.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(v,h,e)=>{e.d(h,{Z:()=>T});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let o,n,c,l;const r=/<(\/)?(\w+)\s*(\/)?>/g;function u(s,a,_,m,t){return{element:s,tokenStart:a,tokenLength:_,prevOffset:m,leadingTextStart:t,children:[]}}const f=(s,a)=>{if(o=s,n=0,c=[],l=[],r.lastIndex=0,!E(a))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(x(a));return(0,d.createElement)(d.Fragment,null,...c)},E=s=>{const a=typeof s=="object",_=a&&Object.values(s);return a&&_.length&&_.every(m=>(0,d.isValidElement)(m))};function x(s){const a=w(),[_,m,t,p]=a,i=l.length,g=t>n?n:null;if(!s[m])return O(),!1;switch(_){case"no-more-tokens":if(i!==0){const{leadingTextStart:M,tokenStart:L}=l.pop();c.push(o.substr(M,L))}return O(),!1;case"self-closed":return i===0?(g!==null&&c.push(o.substr(g,t-g)),c.push(s[m]),n=t+p,!0):(D(u(s[m],t,p)),n=t+p,!0);case"opener":return l.push(u(s[m],t,p,t+p,g)),n=t+p,!0;case"closer":if(i===1)return C(t),n=t+p,!0;const P=l.pop(),b=o.substr(P.prevOffset,t-P.prevOffset);P.children.push(b),P.prevOffset=t+p;const j=u(P.element,P.tokenStart,P.tokenLength,t+p);return j.children=P.children,D(j),n=t+p,!0;default:return O(),!1}}function w(){const s=r.exec(o);if(s===null)return["no-more-tokens"];const a=s.index,[_,m,t,p]=s,i=_.length;return p?["self-closed",t,a,i]:m?["closer",t,a,i]:["opener",t,a,i]}function O(){const s=o.length-n;s!==0&&c.push(o.substr(n,s))}function D(s){const{element:a,tokenStart:_,tokenLength:m,prevOffset:t,children:p}=s,i=l[l.length-1],g=o.substr(i.prevOffset,_-i.prevOffset);g&&i.children.push(g),i.children.push((0,d.cloneElement)(a,null,...p)),i.prevOffset=t||_+m}function C(s){const{element:a,leadingTextStart:_,prevOffset:m,tokenStart:t,children:p}=l.pop(),i=s?o.substr(m,s-m):o.substr(m);i&&p.push(i),_!==null&&c.push(o.substr(_,t-_)),c.push((0,d.cloneElement)(a,null,...p))}const T=f},"../../../node_modules/.pnpm/pascal-case@3.1.2/node_modules/pascal-case/dist.es2015/index.js":(v,h,e)=>{e.d(h,{By:()=>n,Ho:()=>l});var d=e("../../../node_modules/.pnpm/tslib@2.5.0/node_modules/tslib/tslib.es6.js"),o=e("../../../node_modules/.pnpm/no-case@3.0.4/node_modules/no-case/dist.es2015/index.js");function n(r,u){var f=r.charAt(0),E=r.substr(1).toLowerCase();return u>0&&f>="0"&&f<="9"?"_"+f+E:""+f.toUpperCase()+E}function c(r){return r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()}function l(r,u){return u===void 0&&(u={}),(0,o.B)(r,(0,d.pi)({delimiter:"",transform:n},u))}}}]);})();
