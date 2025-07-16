"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7733],{"../charts/src/components/line-chart/stories/annotation.stories.tsx":(x,m,t)=>{t.r(m),t.d(m,{Colored:()=>i,CustomVertical:()=>p,Default:()=>s,Horizontal:()=>l,Mixed:()=>c,Vertical:()=>a,__namedExportsOrder:()=>A,default:()=>T});var o=t("../charts/src/components/line-chart/line-chart.tsx"),u=t("../charts/src/components/line-chart/stories/config.tsx"),r=t("../charts/src/components/line-chart/stories/sample-data.ts"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const T={...u.N,title:"JS Packages/Charts/Types/Line Chart/Annotations",args:{...u.p}},n=d=>f=>(0,e.jsx)(o.A,{...f,children:(0,e.jsxs)(o.A.AnnotationsOverlay,{children:[(0,e.jsx)(o.A.Annotation,{datum:r.A[0].data[10],title:"Notable event",subtitle:"This is a notable event",...d?.[0]||{}}),(0,e.jsx)(o.A.Annotation,{datum:r.A[1].data[r.A[1].data.length-10],title:"Another notable event",subtitle:"This is another notable event",...d?.[1]||{}}),(0,e.jsx)(o.A.Annotation,{datum:r.A[2].data[r.A[2].data.length-51],title:"Concerning event",subtitle:"This is a concerning event",...d?.[2]||{}})]})}),s=n().bind({}),a=n([{subjectType:"line-vertical"},{subjectType:"line-vertical"},{subjectType:"line-vertical"}]).bind({}),l=n([{subjectType:"line-horizontal"},{subjectType:"line-horizontal"},{subjectType:"line-horizontal"}]).bind({}),c=n([{subjectType:"circle"},{subjectType:"line-vertical"},{subjectType:"line-horizontal"}]).bind({}),i=n([{styles:{label:{backgroundFill:"#98C8DF",showAnchorLine:!1},circleSubject:{fill:"#98C8DF"},connector:{stroke:"#98C8DF"}}},{styles:{label:{backgroundFill:"#006DAB",fontColor:"#fff",showAnchorLine:!1},circleSubject:{fill:"#006DAB"},connector:{stroke:"#006DAB"}}},{styles:{label:{backgroundFill:"var(--jp-red)",showAnchorLine:!1,fontColor:"#fff"},circleSubject:{fill:"var(--jp-red)"},connector:{stroke:"var(--jp-red)"}}}]).bind({}),h=()=>(0,e.jsx)("span",{style:{background:"black",color:"white",width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"},children:"D"}),b={subjectType:"line-vertical",styles:{label:{showAnchorLine:!1,y:"start"}},title:"Deployed",renderLabel:()=>(0,e.jsx)("span",{style:{transform:"translate(0, 6px)"},children:(0,e.jsx)(h,{})}),renderLabelPopover:()=>(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[(0,e.jsxs)("div",{style:{margin:0,display:"flex",alignItems:"center",gap:"6px",paddingBlock:"0.25rem "},children:[(0,e.jsx)(h,{}),(0,e.jsx)("strong",{children:"Deploy finished"})]}),(0,e.jsx)("p",{style:{margin:0},children:"Thu. Apr 24, 2025. 09:57:23 UTC"})]})},j=()=>(0,e.jsx)("span",{style:{background:"var(--jp-red)",color:"white",width:"20px",height:"20px",display:"inline-flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"},children:"!"}),y={subjectType:"circle",styles:{circleSubject:{radius:0},label:{showAnchorLine:!1},connector:{stroke:"transparent"}},title:"Alert",renderLabel:()=>(0,e.jsx)(j,{}),renderLabelPopover:()=>(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[(0,e.jsxs)("div",{style:{margin:0,display:"flex",alignItems:"center",gap:"6px",paddingBlock:"0.25rem "},children:[(0,e.jsx)(j,{}),(0,e.jsx)("strong",{children:"Origin HTTP 5xx Response Codes Rate Anomaly [Beta]"})]}),(0,e.jsx)("p",{style:{margin:0},children:"Unusually high number of HTTP 5xx response codes detected on Origin"})]})},p=n([{...b},{...b},{...y}]).bind({}),A=["Default","Vertical","Horizontal","Mixed","Colored","CustomVertical"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"createAnnotationTemplate()",...s.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
  subjectType: 'line-vertical'
}, {
  subjectType: 'line-vertical'
}, {
  subjectType: 'line-vertical'
}])`,...a.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
  subjectType: 'line-horizontal'
}, {
  subjectType: 'line-horizontal'
}, {
  subjectType: 'line-horizontal'
}])`,...l.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
  subjectType: 'circle'
}, {
  subjectType: 'line-vertical'
}, {
  subjectType: 'line-horizontal'
}])`,...c.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
  styles: {
    label: {
      backgroundFill: '#98C8DF',
      showAnchorLine: false
    },
    circleSubject: {
      fill: '#98C8DF'
    },
    connector: {
      stroke: '#98C8DF'
    }
  }
}, {
  styles: {
    label: {
      backgroundFill: '#006DAB',
      fontColor: '#fff',
      showAnchorLine: false
    },
    circleSubject: {
      fill: '#006DAB'
    },
    connector: {
      stroke: '#006DAB'
    }
  }
}, {
  styles: {
    label: {
      backgroundFill: 'var(--jp-red)',
      showAnchorLine: false,
      fontColor: '#fff'
    },
    circleSubject: {
      fill: 'var(--jp-red)'
    },
    connector: {
      stroke: 'var(--jp-red)'
    }
  }
}])`,...i.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
  ...customTopAnnotationArgs
}, {
  ...customTopAnnotationArgs
}, {
  ...customBottomAnnotationArgs
}])`,...p.parameters?.docs?.source}}}}}]);
