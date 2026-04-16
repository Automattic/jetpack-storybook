import{n as e}from"./chunk-zsgVPwQN.js";import{Ct as t,Jt as n,Km as r,Kt as i,Lf as a,St as o,Yt as s,bt as c,fp as l,kr as u,qt as d,rs as f,vt as p,xt as m,yt as h}from"./iframe-UEkBF0kZ.js";var g,_,v,y,b,x,S=e((()=>{g=`_section_g2w0m_1`,_=`_key_g2w0m_7`,v=`_box_g2w0m_15`,y=`_example_g2w0m_21`,b=`_value_g2w0m_30`,x={section:g,key:_,box:v,example:y,"value-label":`_value-label_g2w0m_30`,value:b,"colors-example":`_colors-example_g2w0m_40`,"instances-wrapper":`_instances-wrapper_g2w0m_45`,"font-instance":`_font-instance_g2w0m_50`,"copy-button":`_copy-button_g2w0m_57`,"color-instance":`_color-instance_g2w0m_61`}}));function C(e){e.slice(0,1)===`#`&&(e=e.slice(1)),e.length===3&&(e=e.split(``).map(function(e){return e+e}).join(``));let t=parseInt(e.substring(0,2),16),n=parseInt(e.substring(2,4),16),r=parseInt(e.substring(4,6),16);return(t*299+n*587+r*114)/1e3>=128?`black`:`white`}var w,T,E,D,O,k,A,j,M,N,P;e((()=>{u(),a(),s(),d(),m(),S(),w=r(),T={title:`JS Packages/Components/Theme Provider`},E=()=>{},D=({text:e,...t})=>{let n=l(e,E);return(0,w.jsx)(f,{...t,ref:n})},O=({title:e,data:t,children:r=null})=>(0,w.jsxs)(`div`,{className:x.section,children:[(0,w.jsx)(`h1`,{className:x.title,children:e}),(0,w.jsx)(i,{fluid:!0,children:Object.keys(t).map(e=>(0,w.jsx)(n,{lg:3,className:x.box,children:(0,w.jsxs)(i,{fluid:!0,horizontalGap:2,children:[(0,w.jsx)(n,{className:x.key,children:e}),r&&(0,w.jsx)(n,{className:x.example,children:r(t[e])}),(0,w.jsxs)(n,{children:[(0,w.jsx)(`div`,{className:x[`value-label`],children:`Value`}),(0,w.jsx)(`input`,{type:`text`,value:t[e],readOnly:!0,className:x.value})]})]})},e))})]}),k=()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(O,{title:`Typography`,data:t,children:e=>(0,w.jsx)(`div`,{style:{fontSize:e},children:`Text`})}),(0,w.jsx)(O,{title:`Colors`,data:c,children:e=>(0,w.jsx)(`div`,{className:x[`colors-example`],style:{backgroundColor:e}})}),(0,w.jsx)(O,{title:`Borders`,data:h}),(0,w.jsx)(O,{title:`Spacing`,data:o})]}),k.parameters={docs:{source:{code:null}}},A=e=>(0,w.jsx)(`div`,{className:x[`instances-wrapper`],children:Object.keys(t).map(n=>(0,w.jsxs)(`div`,{className:x[`font-instance`],style:{fontSize:t[n]},children:[e?.[`Text Instance`]||`${n} (${t[n]} )`,(0,w.jsx)(D,{variant:`tertiary`,text:n,className:x[`copy-button`],children:`Copy`})]},n))}),A.args={"Text Instance":``},A.parameters={docs:{source:{code:null}}},j=()=>(0,w.jsx)(`div`,{className:x[`instances-wrapper`],children:Object.keys(c).map(e=>(0,w.jsxs)(`div`,{className:x[`color-instance`],style:{backgroundColor:c[e],color:C(c[e])},children:[`${e} (${c[e].toUpperCase()} )`,(0,w.jsx)(D,{variant:`tertiary`,text:e,className:x[`copy-button`],style:{color:C(c[e])},children:`Copy`})]},e))}),j.parameters={docs:{source:{code:null}}},M=e=>(0,w.jsx)(p,{...e,children:(0,w.jsx)(`div`,{style:{color:`var( --jp-white )`,backgroundColor:`var( --jp-pink )`,fontSize:`var( --font-title-small )`,padding:`var( --spacing-base ) calc( var( --spacing-base ) * 2 )`,borderRadius:`var( --jp-border-radius )`},children:`Pink Jetpack Show`})}),N=M.bind({}),k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => <>
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