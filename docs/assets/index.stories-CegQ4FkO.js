import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{G as n,W as r}from"./iframe-CwObFMR6.js";var i,a,o,s,c,l,u,d,f,p,m;e((()=>{n(),i=t(),a={title:`JS Packages/Components/DonutMeter`,component:r,parameters:{layout:`centered`}},o=e=>(0,i.jsx)(r,{...e}),s={segmentCount:16,totalCount:100,thickness:`3.5`,donutWidth:`64px`,title:`Meter title goes here`,description:`Meter description goes here`},c=o.bind({}),c.args=s,l={...s,type:`warning`},u=o.bind({}),u.args=l,d={...s,type:`danger`},f=o.bind({}),f.args=d,p=e=>(0,i.jsxs)(`div`,{children:[(0,i.jsxs)(`div`,{style:{display:`flex`,flexFlow:`row`},children:[(0,i.jsx)(r,{...e,segmentCount:0,useAdaptiveColors:!0}),(0,i.jsx)(r,{...e,segmentCount:20,useAdaptiveColors:!0}),(0,i.jsx)(r,{...e,segmentCount:40,useAdaptiveColors:!0}),(0,i.jsx)(r,{...e,segmentCount:60,useAdaptiveColors:!0}),(0,i.jsx)(r,{...e,segmentCount:80,useAdaptiveColors:!0}),(0,i.jsx)(r,{...e,segmentCount:100,useAdaptiveColors:!0})]}),(0,i.jsx)(`p`,{children:`Color changing according to the fullness of the meter.`})]}),p.args={...s},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <DonutMeter {...args} />`,...c.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <DonutMeter {...args} />`,...u.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <DonutMeter {...args} />`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <div>
        <div style={{
    display: 'flex',
    flexFlow: 'row'
  }}>
            <DonutMeter {...args} segmentCount={0} useAdaptiveColors />
            <DonutMeter {...args} segmentCount={20} useAdaptiveColors />
            <DonutMeter {...args} segmentCount={40} useAdaptiveColors />
            <DonutMeter {...args} segmentCount={60} useAdaptiveColors />
            <DonutMeter {...args} segmentCount={80} useAdaptiveColors />
            <DonutMeter {...args} segmentCount={100} useAdaptiveColors />
        </div>
        <p>Color changing according to the fullness of the meter.</p>
    </div>`,...p.parameters?.docs?.source}}},m=[`_Default`,`Warning`,`Danger`,`AdaptiveColors`]}))();export{p as AdaptiveColors,f as Danger,u as Warning,c as _Default,m as __namedExportsOrder,a as default};