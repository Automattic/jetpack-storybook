import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{bt as n,n as r,t as i}from"./esm-CXO_2LtF.js";import{a,n as o,r as s}from"./blocks-C5X7SvdU.js";import{t as c}from"./mdx-react-shim-Ch-u3C8M.js";import{n as l,t as u}from"./index2.stories-XoQtyZX7.js";function d(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`text`,children:`Text`}),`
`,(0,p.jsx)(t.p,{children:`Set of React jetpack-components intended to facilitate when dealing with rendering text content.`}),`
`,(0,p.jsx)(t.h2,{id:`text-`,children:`<Text />`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Text`}),` is the primary component that renders text, supporting the following features:`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`Typography`}),`: provided by the ThemeProvider component.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`Spacing`}),`: A simple range of shorthand classes to modify the text element's margin and padding.`]}),`
`]}),`
`,(0,p.jsx)(t.h3,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(t.h4,{id:`variant`,children:`variant`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`Type`}),`: `,(0,p.jsx)(t.code,{children:`headline-medium`}),`, `,(0,p.jsx)(t.code,{children:`headline-small`}),`, `,(0,p.jsx)(t.code,{children:`headline-small-regular`}),`, `,(0,p.jsx)(t.code,{children:`title-medium`}),`,
`,(0,p.jsx)(t.code,{children:`title-medium-semi-bold`}),`, `,(0,p.jsx)(t.code,{children:`title-small`}),`, `,(0,p.jsx)(t.code,{children:`body`}),`, `,(0,p.jsx)(t.code,{children:`body-small`}),`, `,(0,p.jsx)(t.code,{children:`body-extra-small`}),`,
`,(0,p.jsx)(t.code,{children:`body-extra-small-bold`}),`, `,(0,p.jsx)(t.code,{children:`label`}),`.`]}),`
`,(0,p.jsx)(t.p,{children:`Define the text Typography variant among the options offered by the ThemeProvider component.`}),`
`,(0,p.jsx)(s,{language:`jsx`,code:i`
  import Text from '@automattic/jetpack-components';
  
  function Hello() {
    return (
      <Text variant="headline-medium">
        Hello, Text component!
      </Text>
    );
  }
`}),`
`,(0,p.jsx)(t.h4,{id:`spacing-properties`,children:`Spacing properties`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`Type`}),`: number, one of `,(0,p.jsx)(t.code,{children:`0`}),`, `,(0,p.jsx)(t.code,{children:`1`}),`, `,(0,p.jsx)(t.code,{children:`2`}),`, `,(0,p.jsx)(t.code,{children:`3`}),`, `,(0,p.jsx)(t.code,{children:`4`}),`, `,(0,p.jsx)(t.code,{children:`5`}),`, `,(0,p.jsx)(t.code,{children:`6`}),`, `,(0,p.jsx)(t.code,{children:`7`}),`, `,(0,p.jsx)(t.code,{children:`8`}),`.`]}),`
`,(0,p.jsxs)(t.p,{children:[`Use the following properties to define margin and padding of the text. The unit is defined by the `,(0,p.jsx)(t.code,{children:`--spacing-base`}),` value.
You can see how it works playing with the `,(0,p.jsx)(t.a,{href:`./?path=/story/js-packages-components-text--box-model`,children:`Box Model`}),` story.`]}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`Prop`}),(0,p.jsx)(t.th,{children:`Description`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`m`})}),(0,p.jsx)(t.td,{children:`margin`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`mt`})}),(0,p.jsx)(t.td,{children:`margin-top`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`mr`})}),(0,p.jsx)(t.td,{children:`margin-right`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`mb`})}),(0,p.jsx)(t.td,{children:`margin-bottom`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`ml`})}),(0,p.jsx)(t.td,{children:`margin-left`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`mx`})}),(0,p.jsx)(t.td,{children:`margin left and right`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`my`})}),(0,p.jsx)(t.td,{children:`margin top and bottom`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`p`})}),(0,p.jsx)(t.td,{children:`padding`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`pt`})}),(0,p.jsx)(t.td,{children:`padding-top`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`pr`})}),(0,p.jsx)(t.td,{children:`padding-right`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`pb`})}),(0,p.jsx)(t.td,{children:`padding-bottom`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`pl`})}),(0,p.jsx)(t.td,{children:`padding-left`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`px`})}),(0,p.jsx)(t.td,{children:`padding left and right`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`py`})}),(0,p.jsx)(t.td,{children:`padding top and bottom`})]})]})]}),`
`,(0,p.jsx)(s,{language:`jsx`,code:i`
  import Text from '@automattic/jetpack-components';
  
  function HelloBoxModel() {
    return (
      <Text mt={ 2 } px={ 4 }>
        Hello, Text component!
      </Text>
    );
  }
`}),`
`,(0,p.jsx)(t.h4,{id:`component`,children:`component`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`Type`}),`: `,(0,p.jsx)(t.code,{children:`elementType`}),`, `,(0,p.jsx)(t.code,{children:`string`}),`.`]}),`
`,(0,p.jsxs)(t.p,{children:[`Force an specific tag (`,(0,p.jsx)(t.code,{children:`"span"`}),`, `,(0,p.jsx)(t.code,{children:`"div"`}),`) or use a custom component that will receive className and children.`]}),`
`,(0,p.jsxs)(t.p,{children:[`The example below renders the component with a `,(0,p.jsx)(t.code,{children:`<span />`}),` element.`]}),`
`,(0,p.jsx)(s,{language:`jsx`,code:i`
  import Text from '@automattic/jetpack-components';
  function SpanTextComponent() {
    return (
      <Text component="span" variant="title-medium">
        Never underestimate the span element
      </Text>
    );
  }
`}),`
`,(0,p.jsxs)(t.p,{children:[`The following example shows how to define the typography and the margin for a Custom component.
The className is passed down to the custom component, while the properties that belong to the Text component (in this case, `,(0,p.jsx)(t.code,{children:`component`}),`, `,(0,p.jsx)(t.code,{children:`variant`}),` and `,(0,p.jsx)(t.code,{children:`mb`}),`) are not.`]}),`
`,(0,p.jsx)(s,{language:`jsx`,code:i`
  import Text from '@automattic/jetpack-components';
  
  function CustomComponent( { children, className } ) {
    // className, provided by Text, is "custom-classname"
    return (
      <div className={ className }>{ children }</div>
    );
  }
  
  // Use a custom component when rendering the <Text />,
  // it passes down the className property to it.
  function CustomTextComponent() {
    return (
      <Text
        component={ CustomComponent }
        className="custom-classname"
        variant="title-medium"
        mb={ 3 }
      >
        Hello, Custom Text component!
      </Text>
    );
  }
`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.a,{href:`.?path=/story/js-packages-components-text--custom-tag`,children:`▶️ Custom Tag story`}),` and `,(0,p.jsx)(t.a,{href:`.?path=/story/js-packages-components-text--custom-component`,children:`▶️ Custom Component story`})]}),`
`,(0,p.jsx)(t.h4,{id:`children`,children:`Children`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`Type`}),`: `,(0,p.jsx)(t.code,{children:`node`}),`.`]}),`
`,(0,p.jsx)(t.p,{children:`The text itself that will be rendered.`}),`
`,(0,p.jsx)(t.h1,{id:`text-based-components`,children:`Text based components`}),`
`,(0,p.jsx)(t.h2,{id:`h2-`,children:`<H2 />`}),`
`,(0,p.jsxs)(t.p,{children:[`Text shorthand to render a `,(0,p.jsx)(t.code,{children:`heading-medium`}),` text, applying proper spacing.`]}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.a,{href:`.?path=/story/js-packages-components-text-heading--headline-h-2`,children:`▶️ Story`})}),`
`,(0,p.jsx)(t.h2,{id:`h3-`,children:`<H3 />`}),`
`,(0,p.jsxs)(t.p,{children:[`Text shorthand to render a `,(0,p.jsx)(t.code,{children:`heading-small`}),` text, applying proper spacing.`]}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.a,{href:`.?path=/story/js-packages-components-text-heading--headline-h-3`,children:`▶️ Story`})}),`
`,(0,p.jsx)(t.h3,{id:`props-1`,children:`Props`}),`
`,(0,p.jsxs)(t.h4,{id:`weight-bold-default--regular`,children:[`Weight: `,(0,p.jsx)(t.code,{children:`bold`}),` (default) | `,(0,p.jsx)(t.code,{children:`regular`})]}),`
`,(0,p.jsx)(s,{language:`jsx`,code:i`
  import { H3 } from '@automattic/jetpack-components';
  
  function Subtitle() {
    return (
      <H3 weight="regular">Let's explaining what H3 is</H3>
    );
  }
`}),`
`,(0,p.jsx)(t.h2,{id:`title-`,children:`<Title />`}),`
`,(0,p.jsxs)(t.p,{children:[`Text shorthand to render a `,(0,p.jsx)(t.code,{children:`body`}),` text, applying proper spacing.`]}),`
`,(0,p.jsx)(t.h3,{id:`props-2`,children:`Props`}),`
`,(0,p.jsxs)(t.h4,{id:`size-medium-default--small`,children:[`Size: `,(0,p.jsx)(t.code,{children:`medium`}),` (default) | `,(0,p.jsx)(t.code,{children:`small`})]}),`
`,(0,p.jsx)(s,{language:`jsx`,code:i`
  import { Title } from '@automattic/jetpack-components';
  
  function Subtitle() {
    return (
      <Title size="small">
        To explain what a Title component does, we should before...
      </Title>
    );
  }
`}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.a,{href:`.?path=/story/js-packages-components-text-title--default`,children:`▶️ Story`})})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),a(),r(),l()}))();export{f as default};