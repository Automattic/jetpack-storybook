import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Oh as n,Qn as r,Zn as i,a,i as o,o as s,pg as c}from"./iframe-BrPS4v1K.js";var l,u,d,f,p,m;e((()=>{l=t(c(),1),r(),o(),u=n(),d={title:`JS Packages/Components/GlobalNotices`,component:a,decorators:[e=>(0,u.jsx)(`div`,{style:{padding:`3rem`},children:e()})]},f=e=>{let{createErrorNotice:t,createSuccessNotice:n,createInfoNotice:r,createWarningNotice:o}=s();return(0,u.jsxs)(`div`,{children:[(0,u.jsx)(a,{...e}),(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`start`,gap:`1rem`,flexDirection:`column`},children:[(0,u.jsx)(i,{onClick:(0,l.useCallback)(()=>{n(`This is a success notice`)},[n]),children:`Create Success Notice`}),(0,u.jsx)(i,{onClick:(0,l.useCallback)(()=>{t(`This is an error notice`)},[t]),children:`Create Error Notice`}),(0,u.jsx)(i,{onClick:(0,l.useCallback)(()=>{r(`This is an info notice`)},[r]),children:`Create Info Notice`}),(0,u.jsx)(i,{onClick:(0,l.useCallback)(()=>{o(`This is a warning notice`)},[o]),children:`Create Warning Notice`})]})]})},p=f.bind({}),p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  const {
    createErrorNotice,
    createSuccessNotice,
    createInfoNotice,
    createWarningNotice
  } = useGlobalNotices();
  return <div>
            <GlobalNotices {...args} />
            <div style={{
      display: 'flex',
      alignItems: 'start',
      gap: '1rem',
      flexDirection: 'column'
    }}>
                <Button onClick={useCallback(() => {
        createSuccessNotice('This is a success notice');
      }, [createSuccessNotice])}>
                    Create Success Notice
                </Button>
                <Button onClick={useCallback(() => {
        createErrorNotice('This is an error notice');
      }, [createErrorNotice])}>
                    Create Error Notice
                </Button>
                <Button onClick={useCallback(() => {
        createInfoNotice('This is an info notice');
      }, [createInfoNotice])}>
                    Create Info Notice
                </Button>
                <Button onClick={useCallback(() => {
        createWarningNotice('This is a warning notice');
      }, [createWarningNotice])}>
                    Create Warning Notice
                </Button>
            </div>
        </div>;
}`,...p.parameters?.docs?.source}}},m=[`_Default`]}))();export{p as _Default,m as __namedExportsOrder,d as default};