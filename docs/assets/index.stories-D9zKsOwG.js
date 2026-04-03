import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./jsx-runtime-DgUv34OZ.js";import{c as r,r as i,s as a,t as o}from"./chart-decorator-D327GYfZ.js";import{r as s,t as c}from"./legend-config-xheDkBs-.js";import{b as l,l as u,p as d}from"./sample-data-CefsxV7H.js";import{t as f}from"./stories-CF4upt1z.js";import{n as p,r as m}from"./bar-chart-BFSnVO0t.js";var h=t({Animation:()=>w,AspectRatio:()=>b,Default:()=>v,ErrorStates:()=>T,FixedDimensions:()=>y,HorizontalBarChart:()=>k,LabelOverflowEllipsis:()=>N,SingleSeries:()=>x,SmartFormatting:()=>E,TimeSeries:()=>S,WithCompositionLegend:()=>O,WithLegend:()=>D,WithPatterns:()=>C,ZeroValueComparison:()=>j,__namedExportsOrder:()=>P,default:()=>_}),g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F=e((()=>{f(),m(),g=n(),_={title:`JS Packages/Charts Library/Charts/Bar Chart`,component:p,parameters:{layout:`centered`},decorators:[o],argTypes:{...i,...r,...s,orientation:{control:{type:`radio`},options:[`vertical`,`horizontal`],description:`Bar orientation`,table:{category:`Visual Style`}},gridVisibility:{control:{type:`radio`},options:[`none`,`x`,`y`,`both`],description:`Grid line visibility`,table:{category:`Visual Style`}},seriesCount:{control:{type:`radio`},options:[`single`,`multiple`,`many`],description:`Number of data series`,table:{category:`Data`}},withPatterns:{control:`boolean`,description:`Use patterns for bars`,table:{category:`Visual Style`}}},render:e=>{let{seriesCount:t,...n}=e,r=c(e),i=n.data;return t===`single`?i=[d[0]]:t===`multiple`?i=[d[0],d[1],d[2]]:t===`many`&&(i=d),(0,g.jsx)(p,{...n,legend:r,data:i})}},v={args:{...a,withTooltips:!0,data:[d[0],d[1],d[2]],gridVisibility:`x`,maxWidth:1200,resizeDebounceTime:300}},y={args:{...v.args,width:600,height:300}},b={args:{...v.args,aspectRatio:.3}},x={args:{...v.args,data:[d[0]]},parameters:{docs:{description:{story:`Bar chart with a single data series.`}}}},S={args:{...v.args,data:[{...l[0],label:`Data with dateString and date`,data:[...l[0].data,{dateString:`2024-01-31`,value:2230},{dateString:`2024-02-01`,value:2580},{date:new Date(`2024-02-02 00:00:00`),value:3500},{dateString:`2024-02-03 00:00:00`,value:1500},{dateString:`2024-02-04`,value:2500},{dateString:`2024-02-05 00:00`,value:3e3}]}],options:{axis:{x:{tickFormat:e=>new Date(e).toLocaleDateString(`en-US`,{dateStyle:`short`})}}}},parameters:{docs:{description:{story:`Bar chart with a time series.`}}}},C={args:{...v.args,withPatterns:!0,data:v.args.data.map(e=>({...e,data:e.data.filter(e=>parseInt(e.label)>=2016)}))}},w={args:{...v.args,animation:!0}},T={render:()=>(0,g.jsxs)(`div`,{style:{display:`grid`,gap:`20px`},children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h3`,{children:`Empty Data`}),(0,g.jsx)(`div`,{style:{width:`400px`,height:`300px`},children:(0,g.jsx)(p,{data:[]})})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h3`,{children:`Invalid Data`}),(0,g.jsx)(`div`,{style:{width:`400px`,height:`300px`},children:(0,g.jsx)(p,{data:[{label:`Invalid Series`,data:[{date:new Date(`invalid`),value:10,label:`Invalid Date`},{date:new Date(`2024-01-02`),value:null,label:`Null Value`}],options:{}}]})})]})]})},T.parameters={docs:{description:{story:`Examples of how the bar chart handles various error states including empty data and invalid data.`}}},E={args:{withTooltips:!0,data:u,gridVisibility:`x`}},E.parameters={docs:{description:{story:`Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values ≥1B are formatted as "1.23B", ≥1M as "1.2M", ≥1K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.`}}},D={args:{...v.args,showLegend:!0},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},O={render:e=>{let t=c(e);return(0,g.jsx)(p,{...v.args,...e,legend:{interactive:t?.interactive},chartId:`composition-bar-chart`,children:(0,g.jsx)(p.Legend,{...t})})},args:{...v.args},parameters:{docs:{description:{story:"Composition API using `<BarChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},k={args:{...v.args,data:[d[0],d[1],d[2]],orientation:`horizontal`,gridVisibility:`none`}},A=[{group:`United States`,label:`United States`,data:[{label:`1896`,value:0},{label:`1900`,value:0},{label:`1904`,value:2},{label:`1908`,value:1},{label:`1912`,value:3}]},{group:`Great Britain`,label:`Great Britain`,data:[{label:`1896`,value:1},{label:`1900`,value:0},{label:`1904`,value:1},{label:`1908`,value:10},{label:`1912`,value:9}]},{group:`Japan`,label:`Japan`,data:[{label:`1896`,value:2},{label:`1900`,value:1},{label:`1904`,value:2},{label:`1908`,value:1},{label:`1912`,value:2}]}],j={render:()=>(0,g.jsxs)(`div`,{style:{display:`grid`,gap:`40px`},children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h3`,{children:`Zero Value Display: Disabled (Default)`}),(0,g.jsx)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:`Zero values are not visually displayed. Bars with zero values have no height.`}),(0,g.jsx)(`div`,{style:{width:`600px`,height:`300px`},children:(0,g.jsx)(p,{data:A,showZeroValues:!1,withTooltips:!0,gridVisibility:`x`})})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h3`,{children:`Zero Value Display: Enabled`}),(0,g.jsx)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:`Zero values are visually displayed with minimum height bars. The tooltip still shows the actual value of 0, while the bar has a small visual height for better UX.`}),(0,g.jsx)(`div`,{style:{width:`600px`,height:`300px`},children:(0,g.jsx)(p,{data:A,showZeroValues:!0,withTooltips:!0,gridVisibility:`x`})})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h3`,{children:`Small Chart Height (100px)`}),(0,g.jsx)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:`Zero-value bars remain visible even in small charts. The minimum pixel height ensures bars are at least 2 pixels tall regardless of chart dimensions.`}),(0,g.jsx)(`div`,{style:{width:`600px`,height:`100px`,border:`1px solid #e0e0e0`},children:(0,g.jsx)(p,{data:A,showZeroValues:!0,withTooltips:!0,gridVisibility:`x`})})]})]}),args:{containerHeight:`1600px`},parameters:{docs:{description:{story:`Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights. Zero-value bars remain visible even in small chart heights.`}}}},M=[{group:`sales`,label:`Sales by Channel`,data:[{label:`Organic Search Traffic`,value:12500},{label:`Paid Advertising Campaign`,value:8750},{label:`Social Media Marketing`,value:6250},{label:`Email Newsletter Subscribers`,value:4375},{label:`Direct Website Visitors`,value:3125},{label:`Affiliate Partner Referrals`,value:2500}]}],N={render:()=>(0,g.jsxs)(`div`,{style:{display:`grid`,gap:`40px`},children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h3`,{children:`Without labelOverflow (Default - Labels Overlap)`}),(0,g.jsx)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:`Default behavior: long labels overlap and become unreadable at narrow widths.`}),(0,g.jsx)(`div`,{style:{width:`350px`,height:`250px`,border:`1px solid #e0e0e0`},children:(0,g.jsx)(p,{data:M,withTooltips:!0,gridVisibility:`x`})})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h3`,{children:`With labelOverflow: 'ellipsis' (Labels Truncated)`}),(0,g.jsxs)(`p`,{style:{marginBottom:`20px`,color:`#666`},children:[`With `,(0,g.jsx)(`code`,{children:`labelOverflow: 'ellipsis'`}),`, labels are truncated to fit the available bandwidth. `,(0,g.jsx)(`strong`,{children:`Hover over a label to see the full text.`})]}),(0,g.jsx)(`div`,{style:{width:`350px`,height:`250px`,border:`1px solid #e0e0e0`},children:(0,g.jsx)(p,{data:M,withTooltips:!0,gridVisibility:`x`,options:{axis:{x:{labelOverflow:`ellipsis`}}}})})]})]}),parameters:{docs:{description:{story:"Demonstrates the `labelOverflow: 'ellipsis'` option that truncates long axis labels to fit the available bandwidth. The full label text is shown on hover via a native tooltip. This is useful for narrow widget contexts where space is limited."}}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    withTooltips: true,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    // limit to 3 series for better readability
    gridVisibility: 'x',
    maxWidth: 1200,
    resizeDebounceTime: 300
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 600,
    height: 300
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.3
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [medalCountsData[0]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with a single data series.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [{
      ...trafficData[0],
      label: 'Data with dateString and date',
      data: [...trafficData[0].data, {
        dateString: '2024-01-31',
        value: 2230
      }, {
        dateString: '2024-02-01',
        value: 2580
      }, {
        date: new Date('2024-02-02 00:00:00'),
        value: 3500
      }, {
        dateString: '2024-02-03 00:00:00',
        value: 1500
      }, {
        dateString: '2024-02-04',
        value: 2500
      }, {
        dateString: '2024-02-05 00:00',
        value: 3000
      }]
    }],
    options: {
      axis: {
        x: {
          tickFormat: (timestamp: number) => {
            const date = new Date(timestamp);
            return date.toLocaleDateString('en-US', {
              dateStyle: 'short'
            });
          }
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with a time series.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    withPatterns: true,
    data: Default.args.data.map(country => {
      return {
        ...country,
        data: country.data.filter(d => parseInt(d.label) >= 2016)
      };
    })
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '20px'
  }}>
            <div>
                <h3>Empty Data</h3>
                <div style={{
        width: '400px',
        height: '300px'
      }}>
                    <BarChart data={[]} />
                </div>
            </div>

            <div>
                <h3>Invalid Data</h3>
                <div style={{
        width: '400px',
        height: '300px'
      }}>
                    <BarChart data={[{
          label: 'Invalid Series',
          data: [{
            date: new Date('invalid'),
            value: 10,
            label: 'Invalid Date'
          }, {
            date: new Date('2024-01-02'),
            value: null,
            label: 'Null Value'
          }],
          options: {}
        }]} />
                </div>
            </div>
        </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    gridVisibility: 'x'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Props-based legend using \`showLegend\` and the \`legend\` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig(args);
    return <BarChart {...Default.args} {...args} legend={{
      interactive: legend?.interactive
    }} chartId="composition-bar-chart">
                <BarChart.Legend {...legend} />
            </BarChart>;
  },
  args: {
    ...Default.args
  },
  parameters: {
    docs: {
      description: {
        story: 'Composition API using \`<BarChart.Legend />\` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning.'
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '40px'
  }}>
            <div>
                <h3>Zero Value Display: Disabled (Default)</h3>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    Zero values are not visually displayed. Bars with zero values have no height.
                </p>
                <div style={{
        width: '600px',
        height: '300px'
      }}>
                    <BarChart data={dataWithZeroValues} showZeroValues={false} withTooltips={true} gridVisibility="x" />
                </div>
            </div>

            <div>
                <h3>Zero Value Display: Enabled</h3>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    Zero values are visually displayed with minimum height bars. The tooltip still shows the
                    actual value of 0, while the bar has a small visual height for better UX.
                </p>
                <div style={{
        width: '600px',
        height: '300px'
      }}>
                    <BarChart data={dataWithZeroValues} showZeroValues={true} withTooltips={true} gridVisibility="x" />
                </div>
            </div>

            <div>
                <h3>Small Chart Height (100px)</h3>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    Zero-value bars remain visible even in small charts. The minimum pixel height ensures bars
                    are at least 2 pixels tall regardless of chart dimensions.
                </p>
                <div style={{
        width: '600px',
        height: '100px',
        border: '1px solid #e0e0e0'
      }}>
                    <BarChart data={dataWithZeroValues} showZeroValues={true} withTooltips={true} gridVisibility="x" />
                </div>
            </div>
        </div>,
  args: {
    containerHeight: '1600px' // Extra height to demonstrate zero-value bars in small chart height scenario
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights. Zero-value bars remain visible even in small chart heights.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '40px'
  }}>
            <div>
                <h3>Without labelOverflow (Default - Labels Overlap)</h3>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    Default behavior: long labels overlap and become unreadable at narrow widths.
                </p>
                <div style={{
        width: '350px',
        height: '250px',
        border: '1px solid #e0e0e0'
      }}>
                    <BarChart data={longLabelData} withTooltips={true} gridVisibility="x" />
                </div>
            </div>
            <div>
                <h3>With labelOverflow: &apos;ellipsis&apos; (Labels Truncated)</h3>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    With <code>labelOverflow: &apos;ellipsis&apos;</code>, labels are truncated to fit the
                    available bandwidth. <strong>Hover over a label to see the full text.</strong>
                </p>
                <div style={{
        width: '350px',
        height: '250px',
        border: '1px solid #e0e0e0'
      }}>
                    <BarChart data={longLabelData} withTooltips={true} gridVisibility="x" options={{
          axis: {
            x: {
              labelOverflow: 'ellipsis'
            }
          }
        }} />
                </div>
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: "Demonstrates the \`labelOverflow: 'ellipsis'\` option that truncates long axis labels to fit the available bandwidth. The full label text is shown on hover via a native tooltip. This is useful for narrow widget contexts where space is limited."
      }
    }
  }
}`,...N.parameters?.docs?.source}}},P=[`Default`,`FixedDimensions`,`AspectRatio`,`SingleSeries`,`TimeSeries`,`WithPatterns`,`Animation`,`ErrorStates`,`SmartFormatting`,`WithLegend`,`WithCompositionLegend`,`HorizontalBarChart`,`ZeroValueComparison`,`LabelOverflowEllipsis`]}));F();export{w as Animation,b as AspectRatio,v as Default,T as ErrorStates,y as FixedDimensions,k as HorizontalBarChart,N as LabelOverflowEllipsis,x as SingleSeries,E as SmartFormatting,S as TimeSeries,O as WithCompositionLegend,D as WithLegend,C as WithPatterns,j as ZeroValueComparison,P as __namedExportsOrder,_ as default,F as n,h as t};