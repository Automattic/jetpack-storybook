"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9114],{"../charts/src/components/tooltip/stories/index.stories.tsx":(T,l,r)=>{var d,u,f,g,y,x,h,b,_;r.r(l),r.d(l,{CustomComponent:()=>o,Default:()=>t,StyledTooltip:()=>n,__namedExportsOrder:()=>m,default:()=>i});var s=r("../charts/src/components/tooltip/index.tsx"),a=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c=({data:p})=>(0,a.jsxs)("div",{style:{padding:"8px"},children:[(0,a.jsx)("strong",{style:{display:"block",marginBottom:"4px"},children:p.label}),(0,a.jsxs)("div",{style:{color:"#888"},children:["Value: ",p.value]})]}),i={title:"JS Packages/Charts/Tooltip",component:s.m,parameters:{layout:"centered",docs:{description:{component:"A flexible tooltip component that can display data with custom styling and layout."}}},argTypes:{data:{description:"The data object containing label and value",control:"object"},top:{description:"Distance from top of container",control:{type:"range",min:0,max:200}},left:{description:"Distance from left of container",control:{type:"range",min:0,max:200}},style:{description:"Additional CSS styles to apply",control:"object"}}},e=p=>(0,a.jsxs)("div",{style:{position:"relative",padding:"2rem",border:"1px dashed #ccc",width:"300px",height:"200px",background:"#f5f5f5"},children:[(0,a.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#666"},children:"Tooltip Container"}),(0,a.jsx)(s.m,{...p})]}),t=e.bind({});t.args={top:100,left:100,data:{label:"Monthly Sales",value:"$4,200"}},t.parameters={docs:{description:{story:"Default tooltip implementation with basic styling."}}};const o=e.bind({});o.args={...t.args,component:c,data:{label:"Q4 Performance",value:"+27%"},style:{backgroundColor:"#fff",color:"#333",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"}},o.parameters={docs:{description:{story:"Example of a custom tooltip component with different styling and layout."}}};const n=e.bind({});n.args={...t.args,data:{label:"Active Users",value:"1,234"},style:{backgroundColor:"#2c5282",color:"#fff",padding:"1rem",borderRadius:"8px",fontSize:"16px",fontWeight:"bold"}},n.parameters={docs:{description:{story:"Tooltip with custom styling applied through the style prop."}}};const m=["Default","CustomComponent","StyledTooltip"];t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => <div style={{
  position: 'relative',
  padding: '2rem',
  border: '1px dashed #ccc',
  width: '300px',
  height: '200px',
  background: '#f5f5f5'
}}>
        <div style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#666'
  }}>
            Tooltip Container
        </div>
        <Tooltip {...args} />
    </div>`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}},o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => <div style={{
  position: 'relative',
  padding: '2rem',
  border: '1px dashed #ccc',
  width: '300px',
  height: '200px',
  background: '#f5f5f5'
}}>
        <div style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#666'
  }}>
            Tooltip Container
        </div>
        <Tooltip {...args} />
    </div>`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}},n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`args => <div style={{
  position: 'relative',
  padding: '2rem',
  border: '1px dashed #ccc',
  width: '300px',
  height: '200px',
  background: '#f5f5f5'
}}>
        <div style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#666'
  }}>
            Tooltip Container
        </div>
        <Tooltip {...args} />
    </div>`,...(_=(b=n.parameters)==null?void 0:b.docs)==null?void 0:_.source}}}},"../charts/src/components/tooltip/index.tsx":(T,l,r)=>{r.d(l,{m:()=>i});var s=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a={padding:"0.5rem",backgroundColor:"rgba(0,0,0,0.85)",color:"white",borderRadius:"4px",fontSize:"14px",boxShadow:"0 1px 2px rgba(0,0,0,0.1)"},c=({data:e})=>(0,s.jsxs)(s.Fragment,{children:[e.label,": ",e.value]}),i=({data:e,top:t,left:o,style:n={},component:m=c,className:d})=>(0,s.jsx)("div",{style:{position:"absolute",top:t,left:o,...a,...n},className:d,role:"tooltip",children:(0,s.jsx)(m,{data:e})});try{i.displayName="Tooltip",i.__docgenInfo={description:"Tooltip component that can be customized with different content components",displayName:"Tooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"{ label: string; value: number; }"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/index.tsx#Tooltip"]={docgenInfo:i.__docgenInfo,name:"Tooltip",path:"../charts/src/components/tooltip/index.tsx#Tooltip"})}catch(e){}}}]);})();
