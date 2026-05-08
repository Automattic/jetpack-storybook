import{n as e}from"./chunk-zsgVPwQN.js";import{Ft as t,Ht as n,In as r,It as i,Pn as a,Ut as o,Vt as s,Wm as c,Wt as l}from"./iframe-B17T4UF1.js";var u,d,f,p,m,h=e((()=>{u=`_container_6hkcb_1`,d=`_col_6hkcb_5`,f=`_yes_6hkcb_12`,p=`_no_6hkcb_18`,m={container:u,col:d,yes:f,no:p}})),g,_,v,y,b,x,S;e((()=>{r(),l(),n(),t(),h(),g=c(),_=({items:e,fluid:t,horizontalGap:n,horizontalSpacing:r})=>(0,g.jsxs)(s,{className:m.container,horizontalSpacing:r,fluid:t,horizontalGap:n,children:[e.map(({sm:e,lg:t,md:n},r)=>{let i=Number.isInteger(e?.start)?JSON.stringify(e):e,a=Number.isInteger(n?.start)?JSON.stringify(n):n,s=Number.isInteger(t?.start)?JSON.stringify(t):t;return(0,g.jsxs)(o,{sm:e,md:n,lg:t,className:m.col,children:[e?`sm=${i} `:``,n?`md=${a} `:``,t?`lg=${s} `:``]},`${i}${a}${s}${r}`)}),(0,g.jsx)(o,{children:(0,g.jsxs)(s,{fluid:!0,horizontalSpacing:0,horizontalGap:1,children:[(0,g.jsx)(o,{className:m.col,children:`Composition Example`}),(0,g.jsx)(o,{className:m.col,children:`Composition Example`})]})})]}),v={title:`JS Packages/Components/Layout`,component:_},y=e=>(0,g.jsx)(_,{...e}),b=y.bind({}),b.args={fluid:!1,horizontalSpacing:10,horizontalGap:5,items:[{sm:2,md:5,lg:4},{sm:2,md:3,lg:{start:6,end:12}},{sm:2,md:3,lg:6},{sm:2,md:5,lg:{start:9,end:12}},{sm:2,md:5,lg:4},{sm:2,md:3,lg:8}]},x=e=>{let[t,n,r,c,l,u,d,f,p]=i([`sm`,`sm`,`md`,`md`,`md`,`md`,`md`,`lg`,`lg`],[null,`>`,null,`<=`,`<`,`>=`,`>`,`<`,null]);return(0,g.jsxs)(s,{children:[(0,g.jsx)(a,{variant:`headline-small`,children:`Small`}),(0,g.jsxs)(o,{children:[(0,g.jsx)(a,{variant:`title-small`,children:`Is Small`}),(0,g.jsx)(a,{className:t?m.yes:m.no,children:t?`Yes`:`False`})]}),(0,g.jsxs)(o,{children:[(0,g.jsx)(a,{variant:`title-small`,children:`Is greater than Small`}),(0,g.jsx)(a,{className:n?m.yes:m.no,children:n?`Yes`:`False`})]}),(0,g.jsx)(a,{variant:`headline-small`,children:`Medium`}),(0,g.jsxs)(o,{children:[(0,g.jsx)(a,{variant:`title-small`,children:`Is Medium`}),(0,g.jsx)(a,{className:r?m.yes:m.no,children:r?`Yes`:`False`})]}),(0,g.jsxs)(o,{children:[(0,g.jsx)(a,{variant:`title-small`,children:`Is less then Medium`}),(0,g.jsx)(a,{className:l?m.yes:m.no,children:l?`Yes`:`False`})]}),(0,g.jsxs)(o,{children:[(0,g.jsx)(a,{variant:`title-small`,children:`Is less then OR Medium`}),(0,g.jsx)(a,{className:c?m.yes:m.no,children:c?`Yes`:`False`})]}),(0,g.jsxs)(o,{children:[(0,g.jsx)(a,{variant:`title-small`,children:`Is greater then Medium`}),(0,g.jsx)(a,{className:d?m.yes:m.no,children:d?`Yes`:`False`})]}),(0,g.jsxs)(o,{children:[(0,g.jsx)(a,{variant:`title-small`,children:`Is greater then OR Medium`}),(0,g.jsx)(a,{className:u?m.yes:m.no,children:u?`Yes`:`False`})]}),(0,g.jsx)(a,{variant:`headline-small`,children:`Large`}),(0,g.jsxs)(o,{children:[(0,g.jsx)(a,{variant:`title-small`,children:`Is Large`}),(0,g.jsx)(a,{className:p?m.yes:m.no,children:p?`Yes`:`False`})]}),(0,g.jsxs)(o,{children:[(0,g.jsx)(a,{variant:`title-small`,children:`Is less than Large`}),(0,g.jsx)(a,{className:f?m.yes:m.no,children:f?`Yes`:`False`})]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <Layout {...args} />`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
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
}`,...x.parameters?.docs?.source}}},S=[`Default`,`BreakpointMatch`]}))();export{x as BreakpointMatch,b as Default,S as __namedExportsOrder,v as default};