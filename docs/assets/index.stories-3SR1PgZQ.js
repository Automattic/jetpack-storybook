import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{n as r}from"./line-chart-D0eN2fGZ.js";import{c as i,i as a,n as o,o as s}from"./chart-decorator-CdzQMBoT.js";import{T as c,_ as l,f as u,h as d,o as f,v as p}from"./sample-data-Cx3-uFO8.js";import{n as m}from"./bar-chart-BRD2VOSE.js";import{t as h}from"./bar-list-chart-BnjslF4F.js";import{n as g}from"./leaderboard-chart-Cody-7Uz.js";import{r as _}from"./pie-chart-Bec2lSnc.js";import{n as v}from"./pie-semi-circle-chart-D-NJb7q6.js";import{t as y}from"./src-gI8JO5Lw.js";var b=e({AdminColorSchemeLeadsThePalette:()=>H,Default:()=>B,WithColorOverrides:()=>V,__namedExportsOrder:()=>U,default:()=>w}),x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W=t((()=>{y(),o(),u(),s(),x=n(),{expect:S,waitFor:C}=__STORYBOOK_MODULE_TEST__,w={title:`JS Packages/Charts Library/Global Context`,parameters:{layout:`centered`},decorators:[a],argTypes:{...i,showUnitedStates:{control:{type:`boolean`},description:`Show United States data in all charts`,defaultValue:!0},showGreatBritain:{control:{type:`boolean`},description:`Show Great Britain data in all charts`,defaultValue:!0},showJapan:{control:{type:`boolean`},description:`Show Japan data in all charts`,defaultValue:!0}}},T=[l[0],l[1],l[2]],E=`ectoplasm`,D=`#646c3e`,O=`#4a19ab`,k=f,A=d,j=[{...p[0],label:`United States`,group:`united-states`},{...p[1],label:`Great Britain`,group:`great-britain`},{...p[2],label:`Japan`,group:`japan`}],M=(e,t)=>e.filter(e=>!(e.group===`united-states`&&!t.showUnitedStates||e.group===`great-britain`&&!t.showGreatBritain||e.group===`japan`&&!t.showJapan)),N=(e,t)=>e.filter(e=>!(e.group===`united-states`&&!t.showUnitedStates||e.group===`great-britain`&&!t.showGreatBritain||e.group===`japan`&&!t.showJapan)),P=[{...l[0],options:{stroke:`#e74c3c`}},l[1],l[2]],F=f.map((e,t)=>t<=1?{...e,options:{...e.options,stroke:`#e74c3c`}}:e),I=[{...d[0],options:{stroke:`#e74c3c`}},d[1],d[2]],L=[{...j[0],color:`#e74c3c`},{...j[1]},{...j[2]}],R=({args:e})=>{let t=M(k,e),n=M(T,e),i=N(j,e),a=M(A,e),o=N(j,e);return(0,x.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`4rem`,width:`100%`},children:[(0,x.jsx)(r,{data:t,width:350,height:250,withGradientFill:!1,showLegend:!0,withTooltips:!0,margin:{bottom:40}}),(0,x.jsx)(m,{data:n,width:350,height:250,withTooltips:!0,showLegend:!0}),(0,x.jsx)(v,{data:i,width:350,label:`Semi-Circle Chart`,withTooltips:!0,showLegend:!0}),(0,x.jsx)(h,{data:a,width:350,height:250,withTooltips:!0}),(0,x.jsx)(_,{size:300,data:i,withTooltips:!0,showLegend:!0}),(0,x.jsx)(_,{size:300,thickness:.5,data:o,withTooltips:!0,showLegend:!0}),(0,x.jsx)(g,{data:c,withComparison:!0,showLegend:!0})]})},z=({args:e})=>{let t=M(F,e),n=M(P,e),i=N(L,e),a=M(I,e),o=N(L,e);return(0,x.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`4rem`,width:`100%`},children:[(0,x.jsx)(r,{data:t,width:350,height:250,withGradientFill:!1,showLegend:!0,withTooltips:!0,margin:{bottom:40}}),(0,x.jsx)(m,{data:n,width:350,height:250,withTooltips:!0,showLegend:!0}),(0,x.jsx)(v,{data:i,width:350,label:`Semi-Circle Chart`,withTooltips:!0,showLegend:!0}),(0,x.jsx)(h,{data:a,width:350,height:250,withTooltips:!0}),(0,x.jsx)(_,{size:300,data:i,withTooltips:!0,showLegend:!0}),(0,x.jsx)(_,{size:300,thickness:.5,data:o,withTooltips:!0,showLegend:!0}),(0,x.jsx)(g,{data:c,withComparison:!0,showLegend:!0,secondaryColor:`#e74c3c`})]})},B={render:(e,{args:t})=>(0,x.jsx)(R,{args:t}),args:{showUnitedStates:!0,showGreatBritain:!0,showJapan:!0}},V={render:(e,{args:t})=>(0,x.jsx)(z,{args:t}),args:{showUnitedStates:!0,showGreatBritain:!0,showJapan:!0}},H={render:()=>(0,x.jsx)(m,{width:400,height:200,data:[T[0]]}),args:{themeName:`custom`,accentColor:O,adminColorScheme:E},parameters:{docs:{description:{story:`Slot 1 reads \`--wp-admin-theme-color\` before the design system's brand token. With the admin scheme set to \`${E}\` and a different accent seeding the design system, the bar paints \`${D}\`.`}}},play:async({canvasElement:e})=>{let t=await C(()=>{let t=e.querySelector(`.visx-bar-group rect`);if(!t)throw Error(`No bar rendered yet.`);return t});await S(t.getAttribute(`fill`)).toBe(D),await S(t.getAttribute(`fill`)).not.toBe(O)}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: (_, {
    args
  }) => <ChartGrid args={args} />,
  args: {
    showUnitedStates: true,
    showGreatBritain: true,
    showJapan: true
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: (_, {
    args
  }) => <ChartGridWithColorOverrides args={args} />,
  args: {
    showUnitedStates: true,
    showGreatBritain: true,
    showJapan: true
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <BarChart width={400} height={200} data={[baseBarData[0]]} />,
  args: {
    themeName: 'custom',
    accentColor: ACCENT_COLOR_NOT_EXPECTED,
    adminColorScheme: ADMIN_SCHEME
  },
  parameters: {
    docs: {
      description: {
        story: \`Slot 1 reads \\\`--wp-admin-theme-color\\\` before the design system's brand token. With the admin scheme set to \\\`\${ADMIN_SCHEME}\\\` and a different accent seeding the design system, the bar paints \\\`\${ADMIN_SCHEME_COLOR}\\\`.\`
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const bar = await waitFor(() => {
      const found = canvasElement.querySelector<SVGRectElement>('.visx-bar-group rect');
      if (!found) {
        throw new Error('No bar rendered yet.');
      }
      return found;
    });
    await expect(bar.getAttribute('fill')).toBe(ADMIN_SCHEME_COLOR);
    await expect(bar.getAttribute('fill')).not.toBe(ACCENT_COLOR_NOT_EXPECTED);
  }
}`,...H.parameters?.docs?.source},description:{story:"The two colors this story sets are deliberately different, and which one wins is the assertion.\n\n`accentColor` seeds the WPDS `ThemeProvider`, so the design system's brand token derives from it.\n`adminColorScheme` publishes `--wp-admin-theme-color` on a closer wrapper, the way\n`admin-schemes.css` does. Slot 1 names the admin color before the brand token, so the bar has to\npaint the scheme's color and not the accent's.\n\nReordering that chain — putting the design system's token first — passes every unit test and\nlooks correct on WP 7.1, and this is what catches it. jsdom cannot cascade `var()`, so it can only\nbe checked in a browser.\n\nBoth values must be set before the provider mounts. The palette resolves once per provider in a\nlayout effect, so a `play` function that sets the variable afterwards would assert against the\ncolors resolved at mount and prove nothing.",...H.parameters?.docs?.description}}},U=[`Default`,`WithColorOverrides`,`AdminColorSchemeLeadsThePalette`]}));W();export{H as AdminColorSchemeLeadsThePalette,B as Default,V as WithColorOverrides,U as __namedExportsOrder,w as default,W as n,b as t};