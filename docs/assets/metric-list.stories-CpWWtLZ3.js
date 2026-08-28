import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,t as r}from"./metric-list-CuYlpZMD.js";var i,a,o,s,c,l,u,d,f,p,m;e((()=>{n(),i=t(),a={title:`Packages/Premium Analytics/Widgets Toolkit/Components/MetricList`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:`A label-and-value list that shows only complete rows within the available height.`}}}},o=[{id:1,label:`4 Ways to Make Your Website Stand Out`,value:`3.81%`},{id:2,label:`Develop Locally on Linux with WordPress.com`,value:`5.98%`},{id:3,label:`10 Brand-New WordPress.com Themes for 2026`,value:`7.12%`},{id:4,label:`WordPress.com Is Now Available in More Languages`,value:`8.93%`},{id:5,label:`WordCamp Europe 2026: What to Expect`,value:`10.25%`},{id:6,label:`Click, Comment, Done: A Better Way to Collaborate`,value:`11.5%`}],s=e=>t=>(0,i.jsx)(`div`,{style:{width:`420px`,height:e,padding:`16px`,border:`1px solid #e0e0e0`,borderRadius:`8px`,background:`#fff`},children:(0,i.jsx)(t,{})}),c={args:{items:o},decorators:[s(`auto`)]},l={args:{items:o},decorators:[s(`160px`)]},u={args:{items:o,fitRows:!1},decorators:[s(`160px`)]},d={args:{items:[{id:1,label:`An exhaustively long, keyword-stuffed subject line that certainly needs truncating before it overflows the row`,value:`4.1%`},{id:2,label:`Your monthly digest: billing, features, and what is next`,value:`6.7%`}]},decorators:[s(`auto`)]},f={args:{items:[{id:1,label:(0,i.jsx)(`a`,{href:`#linked-label-story`,children:`An exhaustively long, keyword-stuffed subject line that certainly needs truncating before it overflows the row`}),value:`4.1%`},{id:2,label:(0,i.jsx)(`a`,{href:`#linked-label-story`,children:`Your monthly digest: billing and features`}),value:`6.7%`}]},decorators:[s(`auto`)]},p={args:{items:[],emptyStateText:`No emails sent yet.`},decorators:[s(`200px`)]},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items
  },
  decorators: [withCard('auto')]
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items
  },
  decorators: [withCard('160px')]
}`,...l.parameters?.docs?.source},description:{story:`Hide rows that do not fit.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    fitRows: false
  },
  decorators: [withCard('160px')]
}`,...u.parameters?.docs?.source},description:{story:`Render every row when fitting is disabled.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 1,
      label: 'An exhaustively long, keyword-stuffed subject line that certainly needs truncating before it overflows the row',
      value: '4.1%'
    }, {
      id: 2,
      label: 'Your monthly digest: billing, features, and what is next',
      value: '6.7%'
    }]
  },
  decorators: [withCard('auto')]
}`,...d.parameters?.docs?.source},description:{story:`Truncate long labels.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 1,
      label: <a href="#linked-label-story">
                        An exhaustively long, keyword-stuffed subject line that certainly needs truncating
                        before it overflows the row
                    </a>,
      value: '4.1%'
    }, {
      id: 2,
      label: <a href="#linked-label-story">Your monthly digest: billing and features</a>,
      value: '6.7%'
    }]
  },
  decorators: [withCard('auto')]
}`,...f.parameters?.docs?.source},description:{story:`Linked labels, the shape widgets pass in practice: they inherit the row's color and truncate the same way.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    emptyStateText: 'No emails sent yet.'
  },
  decorators: [withCard('200px')]
}`,...p.parameters?.docs?.source}}},m=[`Default`,`FittedToHeight`,`AllRows`,`LongLabels`,`LinkedLabels`,`Empty`]}))();export{u as AllRows,c as Default,p as Empty,l as FittedToHeight,f as LinkedLabels,d as LongLabels,m as __namedExportsOrder,a as default};