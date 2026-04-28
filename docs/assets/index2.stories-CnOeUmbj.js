import{n as e}from"./chunk-zsgVPwQN.js";import{$o as t,Gt as n,Hm as r,Ht as i,Nf as a,Tr as o,Ut as s,Wt as c,_t as l,cp as u,gt as d,ht as f,mt as p,vt as m,yt as h}from"./iframe-Ci4sHBDS.js";var g,_,v,y,b,x,S=e((()=>{g=`_section_g2w0m_1`,_=`_key_g2w0m_7`,v=`_box_g2w0m_15`,y=`_example_g2w0m_21`,b=`_value_g2w0m_30`,x={section:g,key:_,box:v,example:y,"value-label":`_value-label_g2w0m_30`,value:b,"colors-example":`_colors-example_g2w0m_40`,"instances-wrapper":`_instances-wrapper_g2w0m_45`,"font-instance":`_font-instance_g2w0m_50`,"copy-button":`_copy-button_g2w0m_57`,"color-instance":`_color-instance_g2w0m_61`}}));function C(e){e.slice(0,1)===`#`&&(e=e.slice(1)),e.length===3&&(e=e.split(``).map(function(e){return e+e}).join(``));let t=parseInt(e.substring(0,2),16),n=parseInt(e.substring(2,4),16),r=parseInt(e.substring(4,6),16);return(t*299+n*587+r*114)/1e3>=128?`black`:`white`}var w,T,E,D,O,k,A,j,M,N,P;e((()=>{o(),a(),n(),s(),l(),S(),w=r(),T={title:`JS Packages/Components/Theme Provider`},E=()=>{},D=({text:e,...n})=>{let r=u(e,E);return(0,w.jsx)(t,{...n,ref:r})},O=({title:e,data:t,children:n=null})=>(0,w.jsxs)(`div`,{className:x.section,children:[(0,w.jsx)(`h1`,{className:x.title,children:e}),(0,w.jsx)(i,{fluid:!0,children:Object.keys(t).map(e=>(0,w.jsx)(c,{lg:3,className:x.box,children:(0,w.jsxs)(i,{fluid:!0,horizontalGap:2,children:[(0,w.jsx)(c,{className:x.key,children:e}),n&&(0,w.jsx)(c,{className:x.example,children:n(t[e])}),(0,w.jsxs)(c,{children:[(0,w.jsx)(`div`,{className:x[`value-label`],children:`Value`}),(0,w.jsx)(`input`,{type:`text`,value:t[e],readOnly:!0,className:x.value})]})]})},e))})]}),k=()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(O,{title:`Typography`,data:h,children:e=>(0,w.jsx)(`div`,{style:{fontSize:e},children:`Text`})}),(0,w.jsx)(O,{title:`Colors`,data:d,children:e=>(0,w.jsx)(`div`,{className:x[`colors-example`],style:{backgroundColor:e}})}),(0,w.jsx)(O,{title:`Borders`,data:f}),(0,w.jsx)(O,{title:`Spacing`,data:m})]}),k.parameters={docs:{source:{code:null}}},A=e=>(0,w.jsx)(`div`,{className:x[`instances-wrapper`],children:Object.keys(h).map(t=>(0,w.jsxs)(`div`,{className:x[`font-instance`],style:{fontSize:h[t]},children:[e?.[`Text Instance`]||`${t} (${h[t]} )`,(0,w.jsx)(D,{variant:`tertiary`,text:t,className:x[`copy-button`],children:`Copy`})]},t))}),A.args={"Text Instance":``},A.parameters={docs:{source:{code:null}}},j=()=>(0,w.jsx)(`div`,{className:x[`instances-wrapper`],children:Object.keys(d).map(e=>(0,w.jsxs)(`div`,{className:x[`color-instance`],style:{backgroundColor:d[e],color:C(d[e])},children:[`${e} (${d[e].toUpperCase()} )`,(0,w.jsx)(D,{variant:`tertiary`,text:e,className:x[`copy-button`],style:{color:C(d[e])},children:`Copy`})]},e))}),j.parameters={docs:{source:{code:null}}},M=e=>(0,w.jsx)(p,{...e,children:(0,w.jsx)(`div`,{style:{color:`var( --jp-white )`,backgroundColor:`var( --jp-pink )`,fontSize:`var( --font-title-small )`,padding:`var( --spacing-base ) calc( var( --spacing-base ) * 2 )`,borderRadius:`var( --jp-border-radius )`},children:`Pink Jetpack Show`})}),N=M.bind({}),k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => <>
        <Section title="Typography" data={typography}>
            {value => <div style={{
      fontSize: value
    }}>Text</div>}
        </Section>
        <Section title="Colors" data={colors}>
            {value => <div className={styles['colors-example']} style={{
      backgroundColor: value
    }} />}
        </Section>
        <Section title="Borders" data={borders} />
        <Section title="Spacing" data={spacing} />
    </>`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => <div className={styles['instances-wrapper']}>
        {Object.keys(typography).map(key => <div key={key} className={styles['font-instance']} style={{
    fontSize: typography[key]
  }}>
                {args?.['Text Instance'] || \`\${key} (\${typography[key]} )\`}

                <ClipboardButton variant="tertiary" text={key} className={styles['copy-button']}>
                    Copy
                </ClipboardButton>
            </div>)}
    </div>`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => <div className={styles['instances-wrapper']}>
        {Object.keys(colors).map(key => <div key={key} className={styles['color-instance']} style={{
    backgroundColor: colors[key],
    color: getContrast(colors[key])
  }}>
                {\`\${key} (\${colors[key].toUpperCase()} )\`}

                <ClipboardButton variant="tertiary" text={key} className={styles['copy-button']} style={{
      color: getContrast(colors[key])
    }}>
                    Copy
                </ClipboardButton>
            </div>)}
    </div>`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => <ThemeProvider {...args}>
        <div style={{
    color: 'var( --jp-white )',
    backgroundColor: 'var( --jp-pink )',
    fontSize: 'var( --font-title-small )',
    padding: 'var( --spacing-base ) calc( var( --spacing-base ) * 2 )',
    borderRadius: 'var( --jp-border-radius )'
  }}>
            Pink Jetpack Show
        </div>
    </ThemeProvider>`,...N.parameters?.docs?.source}}},P=[`Tokens`,`Typographies`,`Colors`,`BasicUsage`]}))();export{N as BasicUsage,j as Colors,k as Tokens,A as Typographies,P as __namedExportsOrder,T as default};