import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{s as r}from"./chart-scope-BS8OMl4S.js";import{n as i}from"./line-chart-Cyb2Dbcz.js";import{i as a,l as o,n as s,o as c,s as l}from"./chart-decorator-BE9wo3Zd.js";import{b as u,h as d,k as f,s as p,v as m,x as h}from"./sample-data-BJw5YSHu.js";import{n as g}from"./bar-chart-CFSx02yX.js";import{t as _}from"./bar-list-chart-C-oHLs20.js";import{n as v}from"./leaderboard-chart-BGxEe9Cn.js";import{r as y}from"./pie-chart-BowtwiWr.js";import{n as b}from"./pie-semi-circle-chart-5FiJk3KB.js";import{t as x}from"./src-Bu7VA8Nq.js";var ee=e({AdminColorSchemeLeadsThePalette:()=>W,Default:()=>H,GeneratedPalette:()=>Z,HostLocaleAndTimeZoneFormatDates:()=>q,HostTimeZoneDatesDayStrings:()=>Y,WithColorOverrides:()=>U,__namedExportsOrder:()=>Q,default:()=>E}),S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{x(),s(),d(),l(),S=n(),{expect:C,waitFor:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`JS Packages/Charts Library/Global Context`,parameters:{layout:`centered`},decorators:[a],argTypes:{...o,showUnitedStates:{control:{type:`boolean`},description:`Show United States data in all charts`,defaultValue:!0},showGreatBritain:{control:{type:`boolean`},description:`Show Great Britain data in all charts`,defaultValue:!0},showJapan:{control:{type:`boolean`},description:`Show Japan data in all charts`,defaultValue:!0}}},D=[u[0],u[1],u[2]],O=`ectoplasm`,k=`#646c3e`,A=`#4a19ab`,j=p,M=m,N=[{...h[0],label:`United States`,group:`united-states`},{...h[1],label:`Great Britain`,group:`great-britain`},{...h[2],label:`Japan`,group:`japan`}],P=(e,t)=>e.filter(e=>!(e.group===`united-states`&&!t.showUnitedStates||e.group===`great-britain`&&!t.showGreatBritain||e.group===`japan`&&!t.showJapan)),F=(e,t)=>e.filter(e=>!(e.group===`united-states`&&!t.showUnitedStates||e.group===`great-britain`&&!t.showGreatBritain||e.group===`japan`&&!t.showJapan)),I=[{...u[0],options:{stroke:`#e74c3c`}},u[1],u[2]],L=p.map((e,t)=>t<=1?{...e,options:{...e.options,stroke:`#e74c3c`}}:e),R=[{...m[0],options:{stroke:`#e74c3c`}},m[1],m[2]],z=[{...N[0],color:`#e74c3c`},{...N[1]},{...N[2]}],B=({args:e})=>{let t=P(j,e),n=P(D,e),r=F(N,e),a=P(M,e),o=F(N,e);return(0,S.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`4rem`,width:`100%`},children:[(0,S.jsx)(i,{data:t,width:350,height:250,withGradientFill:!1,showLegend:!0,withTooltips:!0,margin:{bottom:40}}),(0,S.jsx)(g,{data:n,width:350,height:250,withTooltips:!0,showLegend:!0}),(0,S.jsx)(b,{data:r,width:350,label:`Semi-Circle Chart`,withTooltips:!0,showLegend:!0}),(0,S.jsx)(_,{data:a,width:350,height:250,withTooltips:!0}),(0,S.jsx)(y,{size:300,data:r,withTooltips:!0,showLegend:!0}),(0,S.jsx)(y,{size:300,thickness:.5,data:o,withTooltips:!0,showLegend:!0}),(0,S.jsx)(v,{data:f,withComparison:!0,showLegend:!0})]})},V=({args:e})=>{let t=P(L,e),n=P(I,e),r=F(z,e),a=P(R,e),o=F(z,e);return(0,S.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`4rem`,width:`100%`},children:[(0,S.jsx)(i,{data:t,width:350,height:250,withGradientFill:!1,showLegend:!0,withTooltips:!0,margin:{bottom:40}}),(0,S.jsx)(g,{data:n,width:350,height:250,withTooltips:!0,showLegend:!0}),(0,S.jsx)(b,{data:r,width:350,label:`Semi-Circle Chart`,withTooltips:!0,showLegend:!0}),(0,S.jsx)(_,{data:a,width:350,height:250,withTooltips:!0}),(0,S.jsx)(y,{size:300,data:r,withTooltips:!0,showLegend:!0}),(0,S.jsx)(y,{size:300,thickness:.5,data:o,withTooltips:!0,showLegend:!0}),(0,S.jsx)(v,{data:f,withComparison:!0,showLegend:!0,secondaryColor:`#e74c3c`})]})},H={render:(e,{args:t})=>(0,S.jsx)(B,{args:t}),args:{showUnitedStates:!0,showGreatBritain:!0,showJapan:!0}},U={render:(e,{args:t})=>(0,S.jsx)(V,{args:t}),args:{showUnitedStates:!0,showGreatBritain:!0,showJapan:!0}},W={render:()=>(0,S.jsx)(g,{width:400,height:200,data:[D[0]]}),args:{themeName:`custom`,accentColor:A,adminColorScheme:O},parameters:{docs:{description:{story:`Slot 1 reads \`--wp-admin-theme-color\` before the design system's brand token. With the admin scheme set to \`${O}\` and a different accent seeding the design system, the bar paints \`${k}\`.`}}},play:async({canvasElement:e})=>{let t=await w(()=>{let t=e.querySelector(`.visx-bar-group rect`);if(!t)throw Error(`No bar rendered yet.`);return t});await C(t.getAttribute(`fill`)).toBe(k),await C(t.getAttribute(`fill`)).not.toBe(A)}},G=[{label:`Views`,data:Array.from({length:5},(e,t)=>({date:new Date(Date.parse(`2026-08-02T15:30:00Z`)+t*24*60*60*1e3),value:40+t*6})),options:{}}],K=[{testId:`tokyo`,title:`de-DE · Asia/Tokyo`,locale:`de-DE`,timeZone:`Asia/Tokyo`},{testId:`los-angeles`,title:`en-US · America/Los_Angeles`,locale:`en-US`,timeZone:`America/Los_Angeles`}],q={render:()=>(0,S.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`4rem`},children:K.map(({testId:e,title:t,locale:n,timeZone:a})=>(0,S.jsxs)(`div`,{"data-testid":e,children:[(0,S.jsx)(`h3`,{children:t}),(0,S.jsxs)(r,{locale:n,timeZone:a,children:[(0,S.jsx)(`div`,{"data-testid":`${e}-bars`,children:(0,S.jsx)(g,{data:G,width:350,height:200,withTooltips:!0})}),(0,S.jsx)(`div`,{"data-testid":`${e}-lines`,children:(0,S.jsx)(i,{data:G,width:350,height:200,withGradientFill:!1,withTooltips:!0,margin:{bottom:40}})})]})]},e))}),parameters:{docs:{description:{story:`The same five instants, dated and worded for two hosts. Hover a bar or a point to see the tooltip follow its axis.`}}},play:async({canvasElement:e})=>{let t=T(e);for(let e of[`bars`,`lines`]){let n=T(t.getByTestId(`tokyo-${e}`)),r=T(t.getByTestId(`los-angeles-${e}`));await C(await n.findByText(`3. Aug.`)).toBeInTheDocument(),await C(await r.findByText(`Aug 2`)).toBeInTheDocument()}}},J=[{label:`Views`,data:Array.from({length:5},(e,t)=>({dateString:`2026-08-0${t+2}`,value:40+t*6})),options:{}}],Y={render:()=>(0,S.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`4rem`},children:K.map(({testId:e,title:t,locale:n,timeZone:a})=>(0,S.jsxs)(`div`,{"data-testid":`days-${e}`,children:[(0,S.jsx)(`h3`,{children:t}),(0,S.jsx)(r,{locale:n,timeZone:a,children:(0,S.jsx)(i,{data:J,width:350,height:200,withGradientFill:!1,withTooltips:!0,margin:{bottom:40}})})]},e))}),parameters:{docs:{description:{story:`Both columns start on Aug 2, the day the string names, whatever zone the browser is in.`}}},play:async({canvasElement:e})=>{let t=T(e),n=T(t.getByTestId(`days-tokyo`)),r=T(t.getByTestId(`days-los-angeles`));await C(await n.findByText(`2. Aug.`)).toBeInTheDocument(),await C(await r.findByText(`Aug 2`)).toBeInTheDocument()}},X=[{label:`Organic search`,value:32},{label:`Direct`,value:24},{label:`Social`,value:18},{label:`Referral`,value:12},{label:`Email`,value:9},{label:`Other`,value:5}],Z={render:()=>(0,S.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(4, 260px)`,gap:`3rem`},children:Object.entries(c).map(([e,t])=>{let n=`generated-palette-${e}`;return(0,S.jsxs)(`div`,{className:n,children:[(0,S.jsx)(`style`,{children:`.${n} .a8c-charts-scope { --a8c-charts-color-series-1: ${t}; }`}),(0,S.jsxs)(`p`,{style:{margin:`0 0 8px`,textAlign:`center`},children:[e,` `,(0,S.jsx)(`code`,{children:t})]}),(0,S.jsx)(r,{children:(0,S.jsx)(y,{width:260,height:260,data:X,showLabels:!0})})]},e)})}),argTypes:{themeName:{table:{disable:!0}},accentColor:{table:{disable:!0}},adminColorScheme:{table:{disable:!0}},showUnitedStates:{table:{disable:!0}},showGreatBritain:{table:{disable:!0}},showJapan:{table:{disable:!0}}},parameters:{docs:{description:{story:"One chart per wp-admin color scheme, seeded with that scheme's `--wp-admin-theme-color` in the first palette slot only. The remaining five slice colors are generated to stay perceptually separable from the seed and from each other, including under simulated color vision deficiency, and pie labels pick dark or light text per slice contrast."}}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:"Each provider dates and words the same instants for its own host, so the two columns disagree.\n\nWithout `locale` and `timeZone` both would read the viewer's browser instead: they would agree\nwith each other, and with at most one of the two sites.",...q.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
    }) => <div key={testId} data-testid={\`days-\${testId}\`}>
                    <h3>{title}</h3>
                    <GlobalChartsProvider locale={locale} timeZone={timeZone}>
                        <LineChart data={HOST_DAY_DATA} width={350} height={200} withGradientFill={false} withTooltips margin={{
          bottom: 40
        }} />
                    </GlobalChartsProvider>
                </div>)}
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Both columns start on Aug 2, the day the string names, whatever zone the browser is in.'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tokyo = within(canvas.getByTestId('days-tokyo'));
    const losAngeles = within(canvas.getByTestId('days-los-angeles'));
    await expect(await tokyo.findByText('2. Aug.')).toBeInTheDocument();
    await expect(await losAngeles.findByText('Aug 2')).toBeInTheDocument();
  }
}`,...Y.parameters?.docs?.source},description:{story:"The same day strings under two hosts, both landing on the day they name.\n\nA `dateString` names no instant, so it is read as midnight in the provider's `timeZone` rather\nthan the viewer's: switch your browser's own zone and nothing here moves.",...Y.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 260px)',
    gap: '3rem'
  }}>
            {Object.entries(WP_ADMIN_COLOR_SCHEMES).map(([scheme, seed]) => {
      const className = \`generated-palette-\${scheme}\`;
      return <div key={scheme} className={className}>
                        <style>
                            {\`.\${className} .a8c-charts-scope { --a8c-charts-color-series-1: \${seed}; }\`}
                        </style>
                        <p style={{
          margin: '0 0 8px',
          textAlign: 'center'
        }}>
                            {scheme} <code>{seed}</code>
                        </p>
                        <GlobalChartsProvider>
                            <PieChart width={260} height={260} data={generatedPaletteData} showLabels />
                        </GlobalChartsProvider>
                    </div>;
    })}
        </div>,
  argTypes: {
    themeName: {
      table: {
        disable: true
      }
    },
    accentColor: {
      table: {
        disable: true
      }
    },
    adminColorScheme: {
      table: {
        disable: true
      }
    },
    showUnitedStates: {
      table: {
        disable: true
      }
    },
    showGreatBritain: {
      table: {
        disable: true
      }
    },
    showJapan: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: "One chart per wp-admin color scheme, seeded with that scheme's \`--wp-admin-theme-color\` in the first palette slot only. The remaining five slice colors are generated to stay perceptually separable from the seed and from each other, including under simulated color vision deficiency, and pie labels pick dark or light text per slice contrast."
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`WithColorOverrides`,`AdminColorSchemeLeadsThePalette`,`HostLocaleAndTimeZoneFormatDates`,`HostTimeZoneDatesDayStrings`,`GeneratedPalette`]}));$();export{W as AdminColorSchemeLeadsThePalette,H as Default,Z as GeneratedPalette,q as HostLocaleAndTimeZoneFormatDates,Y as HostTimeZoneDatesDayStrings,U as WithColorOverrides,Q as __namedExportsOrder,E as default,$ as n,ee as t};