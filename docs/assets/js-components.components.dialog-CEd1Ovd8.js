import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{bt as n,n as r,t as i}from"./esm-UNA4re_1.js";import{a,i as o,n as s,r as c}from"./blocks-CpPaIion.js";import{t as l}from"./mdx-react-shim-P3dZ8Ht9.js";import{Readme as u,n as d,t as f}from"./js-components.components.dialog.stories-QObHP-N0.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{of:d}),`
`,(0,h.jsx)(t.h1,{id:`dialog`,children:`Dialog`}),`
`,(0,h.jsxs)(t.p,{children:[`Render a two-sections layout simple composition, built based on the primary `,(0,h.jsx)(`a`,{href:`?path=/docs/js-packages-components-layout--default`,children:`Layout component`}),`.`]}),`
`,(0,h.jsx)(c,{language:`jsx`,code:i`
import Dialog from '@automattic/jetpack-components';
// ...

<Dialog
  primary={ <PrimaryComponent /> }
  secondary={ <SecondaryComponent /> }
  isTwoSections={ true }
/>
`}),`
`,(0,h.jsx)(o,{of:u}),`
`,(0,h.jsx)(t.p,{children:`The cols number for each section depends on the viewport width. The following table shows how they are defined:`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`\xA0`}),(0,h.jsx)(t.th,{children:`Small (sm)`}),(0,h.jsx)(t.th,{children:`Medium (md)`}),(0,h.jsx)(t.th,{children:`Large (lg)`})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:`primary`}),(0,h.jsx)(t.td,{children:`4`}),(0,h.jsx)(t.td,{children:`5`}),(0,h.jsx)(t.td,{children:`7`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:`secondary`}),(0,h.jsx)(t.td,{children:`4`}),(0,h.jsx)(t.td,{children:`3`}),(0,h.jsx)(t.td,{children:`5`})]})]})]}),`
`,(0,h.jsxs)(t.p,{children:[`Finally, when the Dialog is defined as not a two-sections layout (`,(0,h.jsx)(`a`,{href:`#istwosections`,children:`isTwoSections property`}),`), the secondary section won't show in Mobile (sm breakpoint).`]}),`
`,(0,h.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,h.jsx)(t.p,{children:`The components accepts the following properties:`}),`
`,(0,h.jsx)(t.h3,{id:`primary`,children:`primary`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Type: `,(0,h.jsx)(t.code,{children:`ReactNode`}),`, `,(0,h.jsx)(t.code,{children:`string`}),`.`]}),`
`]}),`
`,(0,h.jsx)(t.p,{children:`Primary-section content.`}),`
`,(0,h.jsx)(t.h3,{id:`secondary`,children:`secondary`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Type: `,(0,h.jsx)(t.code,{children:`ReactNode`}),`, `,(0,h.jsx)(t.code,{children:`string`}),`.`]}),`
`,(0,h.jsx)(t.li,{children:`Optional.`}),`
`]}),`
`,(0,h.jsx)(t.p,{children:`Primary-section content.`}),`
`,(0,h.jsx)(t.h3,{id:`istwosections`,children:`isTwoSections`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Type: `,(0,h.jsx)(t.code,{children:`boolean`}),`.`]}),`
`,(0,h.jsx)(t.li,{children:`Optional.`}),`
`,(0,h.jsxs)(t.li,{children:[`Default: `,(0,h.jsx)(t.code,{children:`false`})]}),`
`]}),`
`,(0,h.jsx)(t.p,{children:`It handles two sections layout:`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`Add card styles to the main wrapper when it is not a two-sections layout.`}),`
`,(0,h.jsx)(t.li,{children:`When it's false, the secondary section won't show in Mobile.`}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),l(),a(),r(),f()}))();export{m as default};