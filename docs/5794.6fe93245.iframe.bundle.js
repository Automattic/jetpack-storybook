"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5794],{"../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/higher-order/pure/index.js":(v,f,e)=>{e.d(f,{Z:()=>d});var c=e("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.0.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d=(0,n.o)(function(u){return u.prototype instanceof o.Component?class extends u{shouldComponentUpdate(E,w){return!(0,c.ZP)(E,this.props)||!(0,c.ZP)(w,this.state)}}:class extends o.Component{shouldComponentUpdate(E){return!(0,c.ZP)(E,this.props)}render(){return(0,r.jsx)(u,{...this.props})}}},"pure")},"../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-isomorphic-layout-effect/index.js":(v,f,e)=>{e.d(f,{Z:()=>n});var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const n=typeof window!="undefined"?c.useLayoutEffect:c.useEffect},"../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js":(v,f,e)=>{e.d(f,{o:()=>o});var c=e("../../../node_modules/.pnpm/pascal-case@3.1.2/node_modules/pascal-case/dist.es2015/index.js");function o(r,a){return d=>{const u=r(d);return u.displayName=n(a,d),u}}const n=(r,a)=>{const d=a.displayName||a.name||"Component";return`${(0,c.Ho)(r!=null?r:"")}(${d})`}},"../../../node_modules/.pnpm/@wordpress+data@10.0.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/with-dispatch/index.js":(v,f,e)=>{e.d(f,{Z:()=>w});var c=e("../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-isomorphic-layout-effect/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+data@10.0.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");const d=(x,D)=>{const h=(0,r.Z)(),O=(0,o.useRef)(x);return(0,n.Z)(()=>{O.current=x}),(0,o.useMemo)(()=>{const g=O.current(h.dispatch,h);return Object.fromEntries(Object.entries(g).map(([P,s])=>(typeof s!="function"&&console.warn(`Property ${P} returned from dispatchMap in useDispatchWithMap must be a function.`),[P,(...l)=>O.current(h.dispatch,h)[P](...l)])))},[h,...D])};var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const w=x=>(0,c.o)(D=>h=>{const g=d((P,s)=>x(P,h,s),[]);return(0,u.jsx)(D,{...h,...g})},"withDispatch")},"../../../node_modules/.pnpm/@wordpress+data@10.0.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/with-select/index.js":(v,f,e)=>{e.d(f,{Z:()=>d});var c=e("../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/higher-order/pure/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+data@10.0.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-select/index.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d=u=>(0,c.o)(E=>(0,o.Z)(w=>{const x=(h,O)=>u(h,w,O),D=(0,n.Z)(x);return(0,r.jsx)(E,{...w,...D})}),"withSelect")},"../../../node_modules/.pnpm/@wordpress+element@6.0.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(v,f,e)=>{e.d(f,{Z:()=>P});var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let o,n,r,a;const d=/<(\/)?(\w+)\s*(\/)?>/g;function u(s,l,_,m,t){return{element:s,tokenStart:l,tokenLength:_,prevOffset:m,leadingTextStart:t,children:[]}}const E=(s,l)=>{if(o=s,n=0,r=[],a=[],d.lastIndex=0,!w(l))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(x(l));return(0,c.createElement)(c.Fragment,null,...r)},w=s=>{const l=typeof s=="object",_=l&&Object.values(s);return l&&_.length&&_.every(m=>(0,c.isValidElement)(m))};function x(s){const l=D(),[_,m,t,p]=l,i=a.length,C=t>n?n:null;if(!s[m])return h(),!1;switch(_){case"no-more-tokens":if(i!==0){const{leadingTextStart:b,tokenStart:L}=a.pop();r.push(o.substr(b,L))}return h(),!1;case"self-closed":return i===0?(C!==null&&r.push(o.substr(C,t-C)),r.push(s[m]),n=t+p,!0):(O(u(s[m],t,p)),n=t+p,!0);case"opener":return a.push(u(s[m],t,p,t+p,C)),n=t+p,!0;case"closer":if(i===1)return g(t),n=t+p,!0;const j=a.pop(),M=o.substr(j.prevOffset,t-j.prevOffset);j.children.push(M),j.prevOffset=t+p;const T=u(j.element,j.tokenStart,j.tokenLength,t+p);return T.children=j.children,O(T),n=t+p,!0;default:return h(),!1}}function D(){const s=d.exec(o);if(s===null)return["no-more-tokens"];const l=s.index,[_,m,t,p]=s,i=_.length;return p?["self-closed",t,l,i]:m?["closer",t,l,i]:["opener",t,l,i]}function h(){const s=o.length-n;s!==0&&r.push(o.substr(n,s))}function O(s){const{element:l,tokenStart:_,tokenLength:m,prevOffset:t,children:p}=s,i=a[a.length-1],C=o.substr(i.prevOffset,_-i.prevOffset);C&&i.children.push(C),i.children.push((0,c.cloneElement)(l,null,...p)),i.prevOffset=t||_+m}function g(s){const{element:l,leadingTextStart:_,prevOffset:m,tokenStart:t,children:p}=a.pop(),i=s?o.substr(m,s-m):o.substr(m);i&&p.push(i),_!==null&&r.push(o.substr(_,t-_)),r.push((0,c.cloneElement)(l,null,...p))}const P=E},"../../../node_modules/.pnpm/pascal-case@3.1.2/node_modules/pascal-case/dist.es2015/index.js":(v,f,e)=>{e.d(f,{By:()=>n,Ho:()=>a});var c=e("../../../node_modules/.pnpm/tslib@2.5.0/node_modules/tslib/tslib.es6.js"),o=e("../../../node_modules/.pnpm/no-case@3.0.4/node_modules/no-case/dist.es2015/index.js");function n(d,u){var E=d.charAt(0),w=d.substr(1).toLowerCase();return u>0&&E>="0"&&E<="9"?"_"+E+w:""+E.toUpperCase()+w}function r(d){return d.charAt(0).toUpperCase()+d.slice(1).toLowerCase()}function a(d,u){return u===void 0&&(u={}),(0,o.B)(d,(0,c.pi)({delimiter:"",transform:n},u))}}}]);})();
