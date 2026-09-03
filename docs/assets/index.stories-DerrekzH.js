import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{c as r,i,n as a,o}from"./chart-decorator-CR7Psxjf.js";import{s}from"./chart-scope-tYY-F3az.js";import{n as c}from"./line-chart-CrulAyhj.js";import{T as l,_ as u,f as d,h as f,o as p,v as m}from"./sample-data-Cx3-uFO8.js";import{n as h}from"./bar-chart-B-QMe-1O.js";import{t as g}from"./bar-list-chart-Wr3evOHt.js";import{n as _}from"./leaderboard-chart-BJBszjt4.js";import{r as v}from"./pie-chart-Bl6_DXlt.js";import{n as y}from"./pie-semi-circle-chart-DEq_RZ91.js";import{t as b}from"./src-DUxFEubr.js";var x=e({AdminColorSchemeLeadsThePalette:()=>W,Default:()=>H,HostLocaleAndTimeZoneFormatDates:()=>q,WithColorOverrides:()=>U,__namedExportsOrder:()=>J,default:()=>E}),S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y=t((()=>{b(),a(),d(),o(),S=n(),{expect:C,waitFor:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`JS Packages/Charts Library/Global Context`,parameters:{layout:`centered`},decorators:[i],argTypes:{...r,showUnitedStates:{control:{type:`boolean`},description:`Show United States data in all charts`,defaultValue:!0},showGreatBritain:{control:{type:`boolean`},description:`Show Great Britain data in all charts`,defaultValue:!0},showJapan:{control:{type:`boolean`},description:`Show Japan data in all charts`,defaultValue:!0}}},D=[u[0],u[1],u[2]],O=`ectoplasm`,k=`#646c3e`,A=`#4a19ab`,j=p,M=f,N=[{...m[0],label:`United States`,group:`united-states`},{...m[1],label:`Great Britain`,group:`great-britain`},{...m[2],label:`Japan`,group:`japan`}],P=(e,t)=>e.filter(e=>!(e.group===`united-states`&&!t.showUnitedStates||e.group===`great-britain`&&!t.showGreatBritain||e.group===`japan`&&!t.showJapan)),F=(e,t)=>e.filter(e=>!(e.group===`united-states`&&!t.showUnitedStates||e.group===`great-britain`&&!t.showGreatBritain||e.group===`japan`&&!t.showJapan)),I=[{...u[0],options:{stroke:`#e74c3c`}},u[1],u[2]],L=p.map((e,t)=>t<=1?{...e,options:{...e.options,stroke:`#e74c3c`}}:e),R=[{...f[0],options:{stroke:`#e74c3c`}},f[1],f[2]],z=[{...N[0],color:`#e74c3c`},{...N[1]},{...N[2]}],B=({args:e})=>{let t=P(j,e),n=P(D,e),r=F(N,e),i=P(M,e),a=F(N,e);return(0,S.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`4rem`,width:`100%`},children:[(0,S.jsx)(c,{data:t,width:350,height:250,withGradientFill:!1,showLegend:!0,withTooltips:!0,margin:{bottom:40}}),(0,S.jsx)(h,{data:n,width:350,height:250,withTooltips:!0,showLegend:!0}),(0,S.jsx)(y,{data:r,width:350,label:`Semi-Circle Chart`,withTooltips:!0,showLegend:!0}),(0,S.jsx)(g,{data:i,width:350,height:250,withTooltips:!0}),(0,S.jsx)(v,{size:300,data:r,withTooltips:!0,showLegend:!0}),(0,S.jsx)(v,{size:300,thickness:.5,data:a,withTooltips:!0,showLegend:!0}),(0,S.jsx)(_,{data:l,withComparison:!0,showLegend:!0})]})},V=({args:e})=>{let t=P(L,e),n=P(I,e),r=F(z,e),i=P(R,e),a=F(z,e);return(0,S.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`4rem`,width:`100%`},children:[(0,S.jsx)(c,{data:t,width:350,height:250,withGradientFill:!1,showLegend:!0,withTooltips:!0,margin:{bottom:40}}),(0,S.jsx)(h,{data:n,width:350,height:250,withTooltips:!0,showLegend:!0}),(0,S.jsx)(y,{data:r,width:350,label:`Semi-Circle Chart`,withTooltips:!0,showLegend:!0}),(0,S.jsx)(g,{data:i,width:350,height:250,withTooltips:!0}),(0,S.jsx)(v,{size:300,data:r,withTooltips:!0,showLegend:!0}),(0,S.jsx)(v,{size:300,thickness:.5,data:a,withTooltips:!0,showLegend:!0}),(0,S.jsx)(_,{data:l,withComparison:!0,showLegend:!0,secondaryColor:`#e74c3c`})]})},H={render:(e,{args:t})=>(0,S.jsx)(B,{args:t}),args:{showUnitedStates:!0,showGreatBritain:!0,showJapan:!0}},U={render:(e,{args:t})=>(0,S.jsx)(V,{args:t}),args:{showUnitedStates:!0,showGreatBritain:!0,showJapan:!0}},W={render:()=>(0,S.jsx)(h,{width:400,height:200,data:[D[0]]}),args:{themeName:`custom`,accentColor:A,adminColorScheme:O},parameters:{docs:{description:{story:`Slot 1 reads \`--wp-admin-theme-color\` before the design system's brand token. With the admin scheme set to \`${O}\` and a different accent seeding the design system, the bar paints \`${k}\`.`}}},play:async({canvasElement:e})=>{let t=await w(()=>{let t=e.querySelector(`.visx-bar-group rect`);if(!t)throw Error(`No bar rendered yet.`);return t});await C(t.getAttribute(`fill`)).toBe(k),await C(t.getAttribute(`fill`)).not.toBe(A)}},G=[{label:`Views`,data:Array.from({length:5},(e,t)=>({date:new Date(Date.parse(`2026-08-02T15:30:00Z`)+t*24*60*60*1e3),value:40+t*6})),options:{}}],K=[{testId:`tokyo`,title:`de-DE · Asia/Tokyo`,locale:`de-DE`,timeZone:`Asia/Tokyo`},{testId:`los-angeles`,title:`en-US · America/Los_Angeles`,locale:`en-US`,timeZone:`America/Los_Angeles`}],q={render:()=>(0,S.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`4rem`},children:K.map(({testId:e,title:t,locale:n,timeZone:r})=>(0,S.jsxs)(`div`,{"data-testid":e,children:[(0,S.jsx)(`h3`,{children:t}),(0,S.jsxs)(s,{locale:n,timeZone:r,children:[(0,S.jsx)(`div`,{"data-testid":`${e}-bars`,children:(0,S.jsx)(h,{data:G,width:350,height:200,withTooltips:!0})}),(0,S.jsx)(`div`,{"data-testid":`${e}-lines`,children:(0,S.jsx)(c,{data:G,width:350,height:200,withGradientFill:!1,withTooltips:!0,margin:{bottom:40}})})]})]},e))}),parameters:{docs:{description:{story:`The same five instants, dated and worded for two hosts. Hover a bar or a point to see the tooltip follow its axis.`}}},play:async({canvasElement:e})=>{let t=T(e);for(let e of[`bars`,`lines`]){let n=T(t.getByTestId(`tokyo-${e}`)),r=T(t.getByTestId(`los-angeles-${e}`));await C(await n.findByText(`3. Aug.`)).toBeInTheDocument(),await C(await r.findByText(`Aug 2`)).toBeInTheDocument()}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: (_, {
    args
  }) => <ChartGrid args={args} />,
  args: {
    showUnitedStates: true,
    showGreatBritain: true,
    showJapan: true
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: (_, {
    args
  }) => <ChartGridWithColorOverrides args={args} />,
  args: {
    showUnitedStates: true,
    showGreatBritain: true,
    showJapan: true
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:"The two colors this story sets are deliberately different, and which one wins is the assertion.\n\n`accentColor` seeds the WPDS `ThemeProvider`, so the design system's brand token derives from it.\n`adminColorScheme` publishes `--wp-admin-theme-color` on a closer wrapper, the way\n`admin-schemes.css` does. Slot 1 names the admin color before the brand token, so the bar has to\npaint the scheme's color and not the accent's.\n\nReordering that chain — putting the design system's token first — passes every unit test and\nlooks correct on WP 7.1, and this is what catches it. jsdom cannot cascade `var()`, so it can only\nbe checked in a browser.\n\nBoth values must be set before the provider mounts. The palette resolves once per provider in a\nlayout effect, so a `play` function that sets the variable afterwards would assert against the\ncolors resolved at mount and prove nothing.",...W.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '4rem'
  }}>
            {HOSTS.map(({
      testId,
      title,
      locale,
      timeZone
    }) => <div key={testId} data-testid={testId}>
                    <h3>{title}</h3>
                    <GlobalChartsProvider locale={locale} timeZone={timeZone}>
                        <div data-testid={\`\${testId}-bars\`}>
                            <BarChart data={HOST_DATE_DATA} width={350} height={200} withTooltips />
                        </div>
                        <div data-testid={\`\${testId}-lines\`}>
                            <LineChart data={HOST_DATE_DATA} width={350} height={200} withGradientFill={false} withTooltips margin={{
            bottom: 40
          }} />
                        </div>
                    </GlobalChartsProvider>
                </div>)}
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'The same five instants, dated and worded for two hosts. Hover a bar or a point to see the tooltip follow its axis.'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    for (const chart of ['bars', 'lines']) {
      const tokyo = within(canvas.getByTestId(\`tokyo-\${chart}\`));
      const losAngeles = within(canvas.getByTestId(\`los-angeles-\${chart}\`));
      await expect(await tokyo.findByText('3. Aug.')).toBeInTheDocument();
      await expect(await losAngeles.findByText('Aug 2')).toBeInTheDocument();
    }
  }
}`,...q.parameters?.docs?.source},description:{story:"Each provider dates and words the same instants for its own host, so the two columns disagree.\n\nWithout `locale` and `timeZone` both would read the viewer's browser instead: they would agree\nwith each other, and with at most one of the two sites.",...q.parameters?.docs?.description}}},J=[`Default`,`WithColorOverrides`,`AdminColorSchemeLeadsThePalette`,`HostLocaleAndTimeZoneFormatDates`]}));Y();export{W as AdminColorSchemeLeadsThePalette,H as Default,q as HostLocaleAndTimeZoneFormatDates,U as WithColorOverrides,J as __namedExportsOrder,E as default,Y as n,x as t};