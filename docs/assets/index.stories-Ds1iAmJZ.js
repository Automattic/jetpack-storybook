import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{n as i,t as a}from"./button-CgwD0ixU.js";import{a as o,n as s,t as c}from"./global-notices-BbnOagMk.js";var l,u,d,f,p,m;e((()=>{l=t(n(),1),i(),c(),u=r(),d={title:`JS Packages/Components/GlobalNotices`,component:s,decorators:[e=>(0,u.jsx)(`div`,{style:{padding:`3rem`},children:e()})]},f=e=>{let{createErrorNotice:t,createSuccessNotice:n,createInfoNotice:r,createWarningNotice:i}=o();return(0,u.jsxs)(`div`,{children:[(0,u.jsx)(s,{...e}),(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`start`,gap:`1rem`,flexDirection:`column`},children:[(0,u.jsx)(a,{onClick:(0,l.useCallback)(()=>{n(`This is a success notice`)},[n]),children:`Create Success Notice`}),(0,u.jsx)(a,{onClick:(0,l.useCallback)(()=>{t(`This is an error notice`)},[t]),children:`Create Error Notice`}),(0,u.jsx)(a,{onClick:(0,l.useCallback)(()=>{r(`This is an info notice`)},[r]),children:`Create Info Notice`}),(0,u.jsx)(a,{onClick:(0,l.useCallback)(()=>{i(`This is a warning notice`)},[i]),children:`Create Warning Notice`})]})]})},p=f.bind({}),m=[`_Default`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
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
}`,...p.parameters?.docs?.source}}}}))();export{p as _Default,m as __namedExportsOrder,d as default};