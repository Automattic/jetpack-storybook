"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3927],{"../components/components/layout/stories/index.stories.tsx":(x,i,s)=>{var g,y,v,D,k,P;s.r(i),s.d(i,{BreakpointMatch:()=>u,Default:()=>p,__namedExportsOrder:()=>S,default:()=>j});var n=s("../components/components/text/index.tsx"),d=s("../components/components/layout/col/index.tsx"),r=s("../components/components/layout/container/index.tsx"),_=s("../components/components/layout/use-breakpoint-match/index.ts"),o=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=s.n(o),a=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/stories/styles.module.scss"),t={};t.insert="head",t.singleton=!1;var b=l()(a.Z,t);const c=a.Z.locals||{};var e=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=({items:f,fluid:T,horizontalGap:I,horizontalSpacing:O})=>(0,e.jsxs)(r.Z,{className:c.container,horizontalSpacing:O,fluid:T,horizontalGap:I,children:[f.map(({sm:M,lg:w,md:E},Z)=>{const L=Number.isInteger(M==null?void 0:M.start)?JSON.stringify(M):M,C=Number.isInteger(E==null?void 0:E.start)?JSON.stringify(E):E,A=Number.isInteger(w==null?void 0:w.start)?JSON.stringify(w):w;return(0,e.jsxs)(d.Z,{sm:M,md:E,lg:w,className:c.col,children:[M?`sm=${L} `:"",E?`md=${C} `:"",w?`lg=${A} `:""]},`${L}${C}${A}${Z}`)}),(0,e.jsx)(d.Z,{children:(0,e.jsxs)(r.Z,{fluid:!0,horizontalSpacing:0,horizontalGap:1,children:[(0,e.jsx)(d.Z,{className:c.col,children:"Composition Example"}),(0,e.jsx)(d.Z,{className:c.col,children:"Composition Example"})]})})]}),j={title:"JS Packages/Components/Layout",component:h},p=(f=>(0,e.jsx)(h,{...f})).bind({});p.args={fluid:!1,horizontalSpacing:10,horizontalGap:5,items:[{sm:2,md:5,lg:4},{sm:2,md:3,lg:{start:6,end:12}},{sm:2,md:3,lg:6},{sm:2,md:5,lg:{start:9,end:12}},{sm:2,md:5,lg:4},{sm:2,md:3,lg:8}]};const u=f=>{const[T,I,O,M,w,E,Z,L,C]=(0,_.Z)(["sm","sm","md","md","md","md","md","lg","lg"],[null,">",null,"<=","<",">=",">","<",null]);return(0,e.jsxs)(r.Z,{children:[(0,e.jsx)(n.ZP,{variant:"headline-small",children:"Small"}),(0,e.jsxs)(d.Z,{children:[(0,e.jsx)(n.ZP,{variant:"title-small",children:"Is Small"}),(0,e.jsx)(n.ZP,{className:T?c.yes:c.no,children:T?"Yes":"False"})]}),(0,e.jsxs)(d.Z,{children:[(0,e.jsx)(n.ZP,{variant:"title-small",children:"Is greater than Small"}),(0,e.jsx)(n.ZP,{className:I?c.yes:c.no,children:I?"Yes":"False"})]}),(0,e.jsx)(n.ZP,{variant:"headline-small",children:"Medium"}),(0,e.jsxs)(d.Z,{children:[(0,e.jsx)(n.ZP,{variant:"title-small",children:"Is Medium"}),(0,e.jsx)(n.ZP,{className:O?c.yes:c.no,children:O?"Yes":"False"})]}),(0,e.jsxs)(d.Z,{children:[(0,e.jsx)(n.ZP,{variant:"title-small",children:"Is less then Medium"}),(0,e.jsx)(n.ZP,{className:w?c.yes:c.no,children:w?"Yes":"False"})]}),(0,e.jsxs)(d.Z,{children:[(0,e.jsx)(n.ZP,{variant:"title-small",children:"Is less then OR Medium"}),(0,e.jsx)(n.ZP,{className:M?c.yes:c.no,children:M?"Yes":"False"})]}),(0,e.jsxs)(d.Z,{children:[(0,e.jsx)(n.ZP,{variant:"title-small",children:"Is greater then Medium"}),(0,e.jsx)(n.ZP,{className:Z?c.yes:c.no,children:Z?"Yes":"False"})]}),(0,e.jsxs)(d.Z,{children:[(0,e.jsx)(n.ZP,{variant:"title-small",children:"Is greater then OR Medium"}),(0,e.jsx)(n.ZP,{className:E?c.yes:c.no,children:E?"Yes":"False"})]}),(0,e.jsx)(n.ZP,{variant:"headline-small",children:"Large"}),(0,e.jsxs)(d.Z,{children:[(0,e.jsx)(n.ZP,{variant:"title-small",children:"Is Large"}),(0,e.jsx)(n.ZP,{className:C?c.yes:c.no,children:C?"Yes":"False"})]}),(0,e.jsxs)(d.Z,{children:[(0,e.jsx)(n.ZP,{variant:"title-small",children:"Is less than Large"}),(0,e.jsx)(n.ZP,{className:L?c.yes:c.no,children:L?"Yes":"False"})]})]})},S=["Default","BreakpointMatch"];p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:"args => <Layout {...args} />",...(v=(y=p.parameters)==null?void 0:y.docs)==null?void 0:v.source}}},u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [isSm, isGtSm, isMd, isLtOrMd, isLtMd, isGtOrMd, isGtMd, isLessThanLg, isLg] = useBreakpointMatch(['sm', 'sm', 'md', 'md', 'md', 'md', 'md', 'lg', 'lg'], [null, '>', null, '<=', '<', '>=', '>', '<', null]);
  return <Container>
            {/* SMALL */}
            <Text variant="headline-small">Small</Text>
            <Col>
                <Text variant="title-small">Is Small</Text>
                <Text className={isSm ? styles.yes : styles.no}>{isSm ? 'Yes' : 'False'}</Text>
            </Col>
            <Col>
                <Text variant="title-small">Is greater than Small</Text>
                <Text className={isGtSm ? styles.yes : styles.no}>{isGtSm ? 'Yes' : 'False'}</Text>
            </Col>
            {/* MEDIUM */}
            <Text variant="headline-small">Medium</Text>
            <Col>
                <Text variant="title-small">Is Medium</Text>
                <Text className={isMd ? styles.yes : styles.no}>{isMd ? 'Yes' : 'False'}</Text>
            </Col>
            <Col>
                <Text variant="title-small">Is less then Medium</Text>
                <Text className={isLtMd ? styles.yes : styles.no}>{isLtMd ? 'Yes' : 'False'}</Text>
            </Col>
            <Col>
                <Text variant="title-small">Is less then OR Medium</Text>
                <Text className={isLtOrMd ? styles.yes : styles.no}>{isLtOrMd ? 'Yes' : 'False'}</Text>
            </Col>
            <Col>
                <Text variant="title-small">Is greater then Medium</Text>
                <Text className={isGtMd ? styles.yes : styles.no}>{isGtMd ? 'Yes' : 'False'}</Text>
            </Col>
            <Col>
                <Text variant="title-small">Is greater then OR Medium</Text>
                <Text className={isGtOrMd ? styles.yes : styles.no}>{isGtOrMd ? 'Yes' : 'False'}</Text>
            </Col>
            {/* LARGE */}
            <Text variant="headline-small">Large</Text>
            <Col>
                <Text variant="title-small">Is Large</Text>
                <Text className={isLg ? styles.yes : styles.no}>{isLg ? 'Yes' : 'False'}</Text>
            </Col>
            <Col>
                <Text variant="title-small">Is less than Large</Text>
                <Text className={isLessThanLg ? styles.yes : styles.no}>
                    {isLessThanLg ? 'Yes' : 'False'}
                </Text>
            </Col>
        </Container>;
}`,...(P=(k=u.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};try{u.displayName="BreakpointMatch",u.__docgenInfo={description:"",displayName:"BreakpointMatch",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/layout/stories/index.stories.tsx#BreakpointMatch"]={docgenInfo:u.__docgenInfo,name:"BreakpointMatch",path:"../components/components/layout/stories/index.stories.tsx#BreakpointMatch"})}catch(f){}},"../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":(x,i,s)=>{s.d(i,{Z:()=>_});var n=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const d=new Map;function r(o){if(!o)return null;let l=d.get(o);return l||(typeof window!="undefined"&&typeof window.matchMedia=="function"?(l=window.matchMedia(o),d.set(o,l),l):null)}function _(o){const l=(0,n.useMemo)(()=>{const a=r(o);return{subscribe(t){var b;return a?((b=a.addEventListener)==null||b.call(a,"change",t),()=>{var c;(c=a.removeEventListener)==null||c.call(a,"change",t)}):()=>{}},getValue(){var t;return(t=a==null?void 0:a.matches)!==null&&t!==void 0?t:!1}}},[o]);return(0,n.useSyncExternalStore)(l.subscribe,l.getValue,()=>!1)}},"../components/components/layout/col/index.tsx":(x,i,s)=>{s.d(i,{Z:()=>j});var n=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),d=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=s.n(r),o=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss"),l={};l.insert="head",l.singleton=!1;var a=_()(o.Z,l);const t=o.Z.locals||{},b=Number(t.smCols),c=Number(t.mdCols),e=Number(t.lgCols),j=m=>{const{children:p,tagName:u="div",className:S}=m,g=Math.min(b,typeof m.sm=="number"?m.sm:b),y=Math.min(b,typeof m.sm=="object"?m.sm.start:0),v=Math.min(b,typeof m.sm=="object"?m.sm.end:0),D=Math.min(c,typeof m.md=="number"?m.md:c),k=Math.min(c,typeof m.md=="object"?m.md.start:0),P=Math.min(c,typeof m.md=="object"?m.md.end:0),f=Math.min(e,typeof m.lg=="number"?m.lg:e),T=Math.min(e,typeof m.lg=="object"?m.lg.start:0),I=Math.min(e,typeof m.lg=="object"?m.lg.end:0),O=(0,n.Z)(S,{[t[`col-sm-${g}`]]:!(y&&v),[t[`col-sm-${y}-start`]]:y>0,[t[`col-sm-${v}-end`]]:v>0,[t[`col-md-${D}`]]:!(k&&P),[t[`col-md-${k}-start`]]:k>0,[t[`col-md-${P}-end`]]:P>0,[t[`col-lg-${f}`]]:!(T&&I),[t[`col-lg-${T}-start`]]:T>0,[t[`col-lg-${I}-end`]]:I>0});return(0,d.createElement)(u,{className:O},p)}},"../components/components/layout/container/index.tsx":(x,i,s)=>{s.d(i,{Z:()=>c});var n=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),d=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=s.n(r),o=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss"),l={};l.insert="head",l.singleton=!1;var a=_()(o.Z,l);const t=o.Z.locals||{},c=({children:e,fluid:h=!1,tagName:j="div",className:m,horizontalGap:p=1,horizontalSpacing:u=1})=>{const S=(0,d.useMemo)(()=>{const y=`calc( var(--horizontal-spacing) * ${u} )`,v=`calc( var(--horizontal-spacing) * ${p} )`;return{paddingTop:y,paddingBottom:y,rowGap:v}},[p,u]),g=(0,n.Z)(m,t.container,{[t.fluid]:h});return(0,d.createElement)(j,{className:g,style:S},e)}},"../components/components/layout/use-breakpoint-match/index.ts":(x,i,s)=>{s.d(i,{Z:()=>e});var n=s("../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),d=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=s.n(d),_=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),o={};o.insert="head",o.singleton=!1;var l=r()(_.Z,o);const a=_.Z.locals||{},t=["sm","md","lg"],b=(h,j,m)=>{const p=t.indexOf(h),u=p+1,S=j.includes("=");let g=[];return j.startsWith("<")&&(g=t.slice(0,S?u:p)),j.startsWith(">")&&(g=t.slice(S?p:u)),g!=null&&g.length?g.some(y=>m[y]):m[h]},e=(h,j)=>{const m=Array.isArray(h)?h:[h],p=Array.isArray(j)?j:[j],[u,S,g]=t,y=(0,n.Z)(a[u]),v=(0,n.Z)(a[S]),D=(0,n.Z)(a[g]),k={sm:y,md:v,lg:D};return m.map((P,f)=>{const T=p[f];return T?b(P,T,k):k[P]})}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(x,i,s)=>{s.d(i,{Z:()=>r});function n(_){var o,l,a="";if(typeof _=="string"||typeof _=="number")a+=_;else if(typeof _=="object")if(Array.isArray(_)){var t=_.length;for(o=0;o<t;o++)_[o]&&(l=n(_[o]))&&(a&&(a+=" "),a+=l)}else for(l in _)_[l]&&(a&&(a+=" "),a+=l);return a}function d(){for(var _,o,l=0,a="",t=arguments.length;l<t;l++)(_=arguments[l])&&(o=n(_))&&(a&&(a+=" "),a+=o);return a}const r=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(x,i,s)=>{s.d(i,{Z:()=>l});var n=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=s.n(n),r=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),_=s.n(r),o=_()(d());o.push([x.id,"",""]),o.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const l=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss":(x,i,s)=>{s.d(i,{Z:()=>l});var n=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=s.n(n),r=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),_=s.n(r),o=_()(d());o.push([x.id,"@media(max-width: 599px){.TNVxw_ZOJEEynDiM2QYM{grid-column-end:span 1}.Ks8DhEoe0M2rg7i8Qcos{grid-column-start:1}.hPWQqxgVUkTp5NQqrfIn{grid-column-end:2}.H1CbUDrI72aXZoHz2P6C{grid-column-end:span 2}.xyTGpD3bVBInLbgP2lMK{grid-column-start:2}.pEBM8SUyhDj4XyIAYiAq{grid-column-end:3}.xbDPzcogSD2JnGmDyiWZ{grid-column-end:span 3}.fooSursJQahboNx68m3R{grid-column-start:3}.ufTVtUIEIdl9sKOoDgNi{grid-column-end:4}.dwPTqpku444IkQCTeDyr{grid-column-end:span 4}.TpMbkMlo3BQATa8vlznp{grid-column-start:4}.WqNt7hKsjzie3UHqUDJ3{grid-column-end:5}}@media(min-width: 600px)and (max-width: 959px){.FIPb1cviSpE3bfv7tgh7{grid-column-end:span 1}.gJ3mUUPEUQSOLyVyzgLR{grid-column-start:1}.heLAMmYtuFGNteEBNd_K{grid-column-end:2}._Z6bV0ViNirPwmUfTUPc{grid-column-end:span 2}.TtipIIkNLkoby9hzkg2g{grid-column-start:2}.eZ7EWTzJ0eyiwaX80vF7{grid-column-end:3}.BPB1lJYdD9ZF06iU4JqN{grid-column-end:span 3}.mqdtFrxVPqGF69R0ve5t{grid-column-start:3}.W2xRsVUNx4v0bnLZkmLf{grid-column-end:4}.brzzMXJ7uTSUxLhuHlvO{grid-column-end:span 4}.Ua3ENGWSij5OPxJjU4YQ{grid-column-start:4}.Lege9ZfULqw4bTPSEzBT{grid-column-end:5}.R7e1X1OppSwNk7pM_UsU{grid-column-end:span 5}.RXH55oeqA0tzBC268Vvn{grid-column-start:5}.yUqSSBRI2Ba4GULTKEo5{grid-column-end:6}.zgIeYtocCoyRpWMLoA8j{grid-column-end:span 6}.SJgsi7ohYrB9Suu2lwKQ{grid-column-start:6}.evXJXU4ZVmaU3fHbNShw{grid-column-end:7}.OvJtAyKa4CnaJTxrWULN{grid-column-end:span 7}.Tdncikb2MHUB9M8_pzrz{grid-column-start:7}.SznBcu1iExeI62bDI2fv{grid-column-end:8}.dMfdjRo9r2UqnWUO7K7j{grid-column-end:span 8}.RZ8AuwBi2INOYbA3GNes{grid-column-start:8}.gd_tTH3gswBbD0luK4cg{grid-column-end:9}}@media(min-width: 960px){.xOPnT0A5q3l85vlYlB4Z{grid-column-end:span 1}.fYBJDNQ9E5_5wrdSOMHV{grid-column-start:1}.CuviEyxy4A5nI6ZgqQWU{grid-column-end:2}.zir7Y2inBNCuoM331HQS{grid-column-end:span 2}.hneE2V6DFFUK7Z2VlP1k{grid-column-start:2}.JdqTodnmzgM8fNPWGYsD{grid-column-end:3}.pfCLtxtdyfzqKtptYkey{grid-column-end:span 3}.qdvpCh5XwqZBTSQZriSu{grid-column-start:3}.EdkicJW5QtuFGwEtbRrD{grid-column-end:4}.VBsWJStlfQs3FFFuLJgp{grid-column-end:span 4}.TMMxlyKjw7uAASuXktdd{grid-column-start:4}.yOdXvT2PcHRSEAb64oQ5{grid-column-end:5}.k4m90rwEinnOv4X9wCUo{grid-column-end:span 5}.vRMTlNglaIKviScEPcj2{grid-column-start:5}.HJr5rbm2AYnx5iq6yjYw{grid-column-end:6}.f3Wlyk_5EPtXwRmju9bu{grid-column-end:span 6}.DuySSESVIp5ulLCI7gDZ{grid-column-start:6}.YxyyciwGy6DD9y7D7_RA{grid-column-end:7}.T09hcaBcvJppEI8fkeob{grid-column-end:span 7}.sfHLOAucQPyThoatcJlb{grid-column-start:7}.ugj03iSq_LpMPjktSIwW{grid-column-end:8}.O5lpDYm2qg9VuumTrrEw{grid-column-end:span 8}.TLrJVaWtw1Dsta_v5JcP{grid-column-start:8}.OqZ0YRgBvvTNJjsWS7pb{grid-column-end:9}.qr94d82SNkd1ExXHZPJq{grid-column-end:span 9}.H7dCJfM9V64l4aJI2aYD{grid-column-start:9}.xgcnaSvEwWA7naPdo1Q7{grid-column-end:10}.joclYxhsEaNNF4bUW_ue{grid-column-end:span 10}.DKuepavoRxT2sWRScNUO{grid-column-start:10}.LeArlDExZKDiDVBz9j2H{grid-column-end:11}.jhzmR1UDav7Cr1C83NGQ{grid-column-end:span 11}.qeM8lIjXYZiST414vxJk{grid-column-start:11}.sHBullB2KBN_dcAHo02k{grid-column-end:12}.UasosPijxHsKZnWpd0mT{grid-column-end:span 12}.pPlntrGl3JYhJi4XVrGp{grid-column-start:12}.hLgosun56kR2j4m1OdkM{grid-column-end:13}}",""]),o.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",smCols:"4",mdCols:"8",lgCols:"12","col-sm-1":"TNVxw_ZOJEEynDiM2QYM","col-sm-1-start":"Ks8DhEoe0M2rg7i8Qcos","col-sm-1-end":"hPWQqxgVUkTp5NQqrfIn","col-sm-2":"H1CbUDrI72aXZoHz2P6C","col-sm-2-start":"xyTGpD3bVBInLbgP2lMK","col-sm-2-end":"pEBM8SUyhDj4XyIAYiAq","col-sm-3":"xbDPzcogSD2JnGmDyiWZ","col-sm-3-start":"fooSursJQahboNx68m3R","col-sm-3-end":"ufTVtUIEIdl9sKOoDgNi","col-sm-4":"dwPTqpku444IkQCTeDyr","col-sm-4-start":"TpMbkMlo3BQATa8vlznp","col-sm-4-end":"WqNt7hKsjzie3UHqUDJ3","col-md-1":"FIPb1cviSpE3bfv7tgh7","col-md-1-start":"gJ3mUUPEUQSOLyVyzgLR","col-md-1-end":"heLAMmYtuFGNteEBNd_K","col-md-2":"_Z6bV0ViNirPwmUfTUPc","col-md-2-start":"TtipIIkNLkoby9hzkg2g","col-md-2-end":"eZ7EWTzJ0eyiwaX80vF7","col-md-3":"BPB1lJYdD9ZF06iU4JqN","col-md-3-start":"mqdtFrxVPqGF69R0ve5t","col-md-3-end":"W2xRsVUNx4v0bnLZkmLf","col-md-4":"brzzMXJ7uTSUxLhuHlvO","col-md-4-start":"Ua3ENGWSij5OPxJjU4YQ","col-md-4-end":"Lege9ZfULqw4bTPSEzBT","col-md-5":"R7e1X1OppSwNk7pM_UsU","col-md-5-start":"RXH55oeqA0tzBC268Vvn","col-md-5-end":"yUqSSBRI2Ba4GULTKEo5","col-md-6":"zgIeYtocCoyRpWMLoA8j","col-md-6-start":"SJgsi7ohYrB9Suu2lwKQ","col-md-6-end":"evXJXU4ZVmaU3fHbNShw","col-md-7":"OvJtAyKa4CnaJTxrWULN","col-md-7-start":"Tdncikb2MHUB9M8_pzrz","col-md-7-end":"SznBcu1iExeI62bDI2fv","col-md-8":"dMfdjRo9r2UqnWUO7K7j","col-md-8-start":"RZ8AuwBi2INOYbA3GNes","col-md-8-end":"gd_tTH3gswBbD0luK4cg","col-lg-1":"xOPnT0A5q3l85vlYlB4Z","col-lg-1-start":"fYBJDNQ9E5_5wrdSOMHV","col-lg-1-end":"CuviEyxy4A5nI6ZgqQWU","col-lg-2":"zir7Y2inBNCuoM331HQS","col-lg-2-start":"hneE2V6DFFUK7Z2VlP1k","col-lg-2-end":"JdqTodnmzgM8fNPWGYsD","col-lg-3":"pfCLtxtdyfzqKtptYkey","col-lg-3-start":"qdvpCh5XwqZBTSQZriSu","col-lg-3-end":"EdkicJW5QtuFGwEtbRrD","col-lg-4":"VBsWJStlfQs3FFFuLJgp","col-lg-4-start":"TMMxlyKjw7uAASuXktdd","col-lg-4-end":"yOdXvT2PcHRSEAb64oQ5","col-lg-5":"k4m90rwEinnOv4X9wCUo","col-lg-5-start":"vRMTlNglaIKviScEPcj2","col-lg-5-end":"HJr5rbm2AYnx5iq6yjYw","col-lg-6":"f3Wlyk_5EPtXwRmju9bu","col-lg-6-start":"DuySSESVIp5ulLCI7gDZ","col-lg-6-end":"YxyyciwGy6DD9y7D7_RA","col-lg-7":"T09hcaBcvJppEI8fkeob","col-lg-7-start":"sfHLOAucQPyThoatcJlb","col-lg-7-end":"ugj03iSq_LpMPjktSIwW","col-lg-8":"O5lpDYm2qg9VuumTrrEw","col-lg-8-start":"TLrJVaWtw1Dsta_v5JcP","col-lg-8-end":"OqZ0YRgBvvTNJjsWS7pb","col-lg-9":"qr94d82SNkd1ExXHZPJq","col-lg-9-start":"H7dCJfM9V64l4aJI2aYD","col-lg-9-end":"xgcnaSvEwWA7naPdo1Q7","col-lg-10":"joclYxhsEaNNF4bUW_ue","col-lg-10-start":"DKuepavoRxT2sWRScNUO","col-lg-10-end":"LeArlDExZKDiDVBz9j2H","col-lg-11":"jhzmR1UDav7Cr1C83NGQ","col-lg-11-start":"qeM8lIjXYZiST414vxJk","col-lg-11-end":"sHBullB2KBN_dcAHo02k","col-lg-12":"UasosPijxHsKZnWpd0mT","col-lg-12-start":"pPlntrGl3JYhJi4XVrGp","col-lg-12-end":"hLgosun56kR2j4m1OdkM"};const l=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss":(x,i,s)=>{s.d(i,{Z:()=>l});var n=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=s.n(n),r=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),_=s.n(r),o=_()(d());o.push([x.id,".lAAWDY3GAoGI8Yz2Iot3{--max-container-width: 1128px;--vertical-gutter: 24px;--horizontal-spacing: 8px;display:grid;column-gap:var(--vertical-gutter);max-width:var(--max-container-width);margin:0 auto;width:100%}@media(max-width: 599px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 16px;grid-template-columns:repeat(4, minmax(0, 1fr))}}@media(min-width: 600px)and (max-width: 959px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 18px;grid-template-columns:repeat(8, minmax(0, 1fr))}}@media(min-width: 960px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 24px;grid-template-columns:repeat(12, minmax(0, 1fr))}}.lAAWDY3GAoGI8Yz2Iot3.ZUqObxyT7MTULMSxNKnV{max-width:none;padding:unset}",""]),o.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",container:"lAAWDY3GAoGI8Yz2Iot3",fluid:"ZUqObxyT7MTULMSxNKnV"};const l=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/stories/styles.module.scss":(x,i,s)=>{s.d(i,{Z:()=>l});var n=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=s.n(n),r=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),_=s.n(r),o=_()(d());o.push([x.id,".WtGlKtrcsq9aLjqXf9Y1{background:var(--jp-gray-50)}.sIVeUfvmkx0dt8tEWPDv{padding:20px;background:var(--jp-gray-80);font-size:1rem;color:var(--jp-white-off)}.HIICInLaKicp9CX6jvST{padding:var(--spacing-base);background-color:var(--jp-green-0);border:1px solid var(--jp-green-50)}.fnUWSFaBhKfl1Vy7sgsQ{padding:var(--spacing-base);background-color:var(--jp-red-0);border:1px solid var(--jp-red-50)}",""]),o.locals={container:"WtGlKtrcsq9aLjqXf9Y1",col:"sIVeUfvmkx0dt8tEWPDv",yes:"HIICInLaKicp9CX6jvST",no:"fnUWSFaBhKfl1Vy7sgsQ"};const l=o}}]);})();
