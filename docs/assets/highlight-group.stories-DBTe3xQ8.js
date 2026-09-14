import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,t as r}from"./widget-card-CkmlL3P7.js";import{n as i,r as a,t as o}from"./highlight-group-Con4X1eQ.js";var s,c,l,u,d,f,p,m;e((()=>{n(),a(),s=t(),c={title:`Packages/Premium Analytics/Widgets Toolkit/Components/HighlightGroup`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`Labelled highlights for a widget body, as in Most popular time and Most popular day. The fields sit side by side when two columns fit and stack when they do not, vertically centered either way; a tile too short for them scrolls rather than clips.`}}}},l=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o,{label:`Best day`,value:`Friday`,caption:`17% of views`}),(0,s.jsx)(o,{label:`Best hour`,value:`7:00 pm`,caption:`5% of views`})]}),u={render:()=>(0,s.jsx)(r,{width:`460px`,height:`400px`,children:(0,s.jsx)(i,{children:l})})},d={render:()=>(0,s.jsx)(r,{width:`340px`,height:`400px`,children:(0,s.jsx)(i,{children:l})})},f={render:()=>(0,s.jsx)(r,{width:`460px`,height:`140px`,children:(0,s.jsx)(i,{children:l})})},p={render:()=>(0,s.jsx)(r,{width:`340px`,height:`140px`,children:(0,s.jsx)(`div`,{style:{height:`100%`,overflowY:`auto`},children:(0,s.jsx)(i,{children:l})})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard width="460px" height="400px">
            <HighlightGroup>{fields}</HighlightGroup>
        </WidgetCard>
}`,...u.parameters?.docs?.source},description:{story:`A one-column tile on a desktop dashboard: two columns fit, so side by side.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard width="340px" height="400px">
            <HighlightGroup>{fields}</HighlightGroup>
        </WidgetCard>
}`,...d.parameters?.docs?.source},description:{story:`A phone-width tile: too narrow for two columns, so stacked.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard width="460px" height="140px">
            <HighlightGroup>{fields}</HighlightGroup>
        </WidgetCard>
}`,...f.parameters?.docs?.source},description:{story:`A height-1 tile: side by side, with the gaps inside each field shed so the
row fits without a scrollbar.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCard width="340px" height="140px">
            <div style={{
      height: '100%',
      overflowY: 'auto'
    }}>
                <HighlightGroup>{fields}</HighlightGroup>
            </div>
        </WidgetCard>
}`,...p.parameters?.docs?.source},description:{story:`Phone width on a height-1 tile: the stack outgrows the body and top-anchors,
so the host can scroll to the second field instead of losing the first.`,...p.parameters?.docs?.description}}},m=[`Default`,`Narrow`,`Short`,`NarrowShort`]}))();export{u as Default,d as Narrow,p as NarrowShort,f as Short,m as __namedExportsOrder,c as default};