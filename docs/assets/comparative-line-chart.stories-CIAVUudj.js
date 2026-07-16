import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{o as n,t as r}from"./src-DQmpJRyV.js";import{n as i,t as a}from"./with-chart-theme-D6OMviAJ.js";import{n as o,t as s}from"./comparative-line-chart-BHyKhnRy.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{r(),a(),o(),c=t(),l=({series:e})=>{let t={width:`100%`,borderCollapse:`collapse`,fontSize:`12px`,marginTop:`16px`},r={border:`1px solid #ddd`,padding:`6px 10px`,textAlign:`left`},i={...r,backgroundColor:`#f5f5f5`,fontWeight:600},a=Math.max(...e.map(e=>e.data.length));return(0,c.jsxs)(`table`,{style:t,children:[(0,c.jsxs)(`thead`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:i,children:`#`}),e.map((e,t)=>(0,c.jsx)(`th`,{style:i,colSpan:2,children:e.label},t))]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:i}),e.map((e,t)=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`th`,{style:i,children:`Date`},`date-${t}`),(0,c.jsx)(`th`,{style:i,children:`Value`},`value-${t}`)]}))]})]}),(0,c.jsx)(`tbody`,{children:Array.from({length:a},(t,i)=>(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{style:r,children:i+1}),e.map((e,t)=>{let a=e.data[i];return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`td`,{style:r,children:a?.date?n(a.date,`short`):`-`},`date-${t}-${i}`),(0,c.jsx)(`td`,{style:r,children:a?.value??`-`},`value-${t}-${i}`)]})})]},i))})]})},u={title:`Packages/Premium Analytics/Widgets Toolkit/Components/ComparativeLineChart`,component:s,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[i,e=>(0,c.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,c.jsx)(e,{})})]},d=[{stroke:`#3858E9`,strokeWidth:2},{stroke:`#3858E9`,strokeDasharray:`4 4`,strokeWidth:1.5,strokeDashoffset:2},{stroke:`#3858E9`,strokeDasharray:`2 2`,strokeWidth:1.5}],f=[new Date(`2024-01-01`),new Date(`2024-01-02`),new Date(`2024-01-03`),new Date(`2024-01-04`),new Date(`2024-01-05`),new Date(`2024-01-06`),new Date(`2024-01-07`)],p=[new Date(`2023-12-25`),new Date(`2023-12-26`),new Date(`2023-12-27`),new Date(`2023-12-28`),new Date(`2023-12-29`),new Date(`2023-12-30`),new Date(`2023-12-31`)],m=[{label:`Revenue`,group:`primary`,data:[{date:f[0],value:1200},{date:f[1],value:1800},{date:f[2],value:1400},{date:f[3],value:2200},{date:f[4],value:1900},{date:f[5],value:2400},{date:f[6],value:2100}]}],h={args:{series:m,styles:d,dataFormat:{type:`currency`}}},g=[{label:`Jan 1-7, 2024`,group:`primary`,data:[{date:f[0],value:1200},{date:f[1],value:1800},{date:f[2],value:1400},{date:f[3],value:2200},{date:f[4],value:1900},{date:f[5],value:2400},{date:f[6],value:2100}]},{label:`Dec 25-31, 2023`,group:`comparison`,data:[{date:p[0],value:1e3},{date:p[1],value:1500},{date:p[2],value:1300},{date:p[3],value:1800},{date:p[4],value:1600},{date:p[5],value:2e3},{date:p[6],value:1700}]}],_={args:{series:g,styles:d,dataFormat:{type:`currency`}},render:e=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s,{...e}),(0,c.jsx)(l,{series:e.series})]}),parameters:{docs:{source:{code:`<ComparativeLineChart
  series={ comparisonSeries }
  styles={ SERIES_STYLES }
  dataFormat={ { type: 'currency' } }
/>`}}}},v=[new Date(`2023-12-18`),new Date(`2023-12-19`),new Date(`2023-12-20`),new Date(`2023-12-21`),new Date(`2023-12-22`),new Date(`2023-12-23`),new Date(`2023-12-24`)],y=[{label:`Jan 1-7, 2024`,group:`primary`,data:[{date:f[0],value:1200},{date:f[1],value:1800},{date:f[2],value:1400},{date:f[3],value:2200},{date:f[4],value:1900},{date:f[5],value:2400},{date:f[6],value:2100}]},{label:`Dec 25-31, 2023`,group:`comparison`,data:[{date:p[0],value:1e3},{date:p[1],value:1500},{date:p[2],value:1300},{date:p[3],value:1800},{date:p[4],value:1600},{date:p[5],value:2e3},{date:p[6],value:1700}]},{label:`Dec 18-24, 2023`,group:`comparison`,data:[{date:v[0],value:800},{date:v[1],value:1200},{date:v[2],value:1100},{date:v[3],value:1400},{date:v[4],value:1300},{date:v[5],value:1600},{date:v[6],value:1500}]}],b={args:{series:y,styles:d,dataFormat:{type:`currency`}},render:e=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s,{...e}),(0,c.jsx)(l,{series:e.series})]})},x=[{label:`Jan 1-7, 2024`,group:`primary`,data:[{date:f[0],value:1200},{date:f[1],value:1800},{date:f[2],value:1400},{date:f[3],value:2200},{date:f[4],value:1900},{date:f[5],value:2400},{date:f[6],value:2100}],options:{stroke:`#10B981`,seriesLineStyle:{strokeWidth:2}}},{label:`Dec 25-31, 2023`,group:`comparison`,data:[{date:p[0],value:1e3},{date:p[1],value:1500},{date:p[2],value:1300},{date:p[3],value:1800},{date:p[4],value:1600},{date:p[5],value:2e3},{date:p[6],value:1700}],options:{stroke:`#F59E0B`,seriesLineStyle:{strokeWidth:1.5,strokeDasharray:`4 4`,strokeDashoffset:2}}}],S={args:{series:x,dataFormat:{type:`currency`}},parameters:{docs:{description:{story:`Styles can also be defined directly in each series via the \`options\` property.
This approach is useful when:
- Each series needs different colors (e.g., green vs orange)
- Styles are dynamically generated per-series
- You want styles co-located with series data

The component will use these styles as a fallback when no \`styles\` prop is provided.`},source:{code:`const seriesWithInlineStyles = [
  {
    label: 'Current Period',
    group: 'primary',
    data: [...],
    options: {
      stroke: '#10B981',
      seriesLineStyle: { strokeWidth: 2 },
    },
  },
  {
    label: 'Previous Period',
    group: 'comparison',
    data: [...],
    options: {
      stroke: '#F59E0B',
      seriesLineStyle: { strokeWidth: 1.5, strokeDasharray: '4 4', strokeDashoffset: 2 },
    },
  },
];

<ComparativeLineChart
  series={ seriesWithInlineStyles }
  dataFormat={ { type: 'currency' } }
/>`}}}},C=[new Date(`2024-09-12`),new Date(`2024-09-16`),new Date(`2024-09-23`),new Date(`2024-09-30`),new Date(`2024-10-07`),new Date(`2024-10-14`)],w=[new Date(`2024-06-14`),new Date(`2024-06-17`),new Date(`2024-06-24`),new Date(`2024-06-30`),new Date(`2024-07-08`),new Date(`2024-07-15`)],T=[{label:`Sep 12 - Oct 14, 2024`,group:`primary`,data:[{date:C[0],value:0},{date:C[1],value:15800},{date:C[2],value:47200},{date:C[3],value:40900},{date:C[4],value:36200},{date:C[5],value:43e3}]},{label:`Jun 14 - Aug 16, 2024`,group:`comparison`,data:[{date:w[0],value:0},{date:w[1],value:12e3},{date:w[2],value:38500},{date:w[3],value:35200},{date:w[4],value:29800},{date:w[5],value:31500}]}],E={args:{series:T,styles:d,dataFormat:{type:`currency`}},render:e=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s,{...e}),(0,c.jsx)(l,{series:e.series}),(0,c.jsxs)(`p`,{style:{marginTop:`16px`,fontSize:`13px`,color:`#666`},children:[(0,c.jsx)(`strong`,{children:`Note:`}),` The primary period starts on Thursday (Sep 12) while the comparison starts on Saturday (Jun 14). With index-based alignment, bullets align perfectly by position regardless of actual dates. Hover to see both dates in tooltip.`]})]}),parameters:{docs:{description:{story:`Demonstrates proper alignment when comparing weekly intervals
that start on different days of the week. This scenario previously caused
misaligned bullets because the offset-based approach didn't account for
periods starting on different weekdays. The fix uses index-based alignment
where each comparison point gets the date of its corresponding primary point.`}}}},D=[{label:`Jan 1-7, 2024`,group:`primary`,data:[{date:f[0],value:0},{date:f[1],value:0},{date:f[2],value:0},{date:f[3],value:0},{date:f[4],value:0},{date:f[5],value:0},{date:f[6],value:0}]}],O={args:{series:D,styles:d,dataFormat:{type:`currency`}},parameters:{docs:{description:{story:`When all data points are zero, the chart shows a fixed Y-axis domain
(0-4000 for currency) to maintain visual consistency.`}}}},k={args:{series:D,styles:d,dataFormat:{type:`number`}},parameters:{docs:{description:{story:`When using number format with empty data, the chart shows a fixed
Y-axis domain of 0-80 to maintain visual consistency.`}}}},A=[{label:`January 1, 2024 - January 31, 2024`,group:`primary`,data:[{date:f[0],value:1200},{date:f[1],value:1800},{date:f[2],value:1400},{date:f[3],value:2200},{date:f[4],value:1900},{date:f[5],value:2400},{date:f[6],value:2100}]},{label:`December 1, 2023 - December 31, 2023`,group:`comparison`,data:[{date:p[0],value:1e3},{date:p[1],value:1500},{date:p[2],value:1300},{date:p[3],value:1800},{date:p[4],value:1600},{date:p[5],value:2e3},{date:p[6],value:1700}]}],j={decorators:[e=>(0,c.jsx)(`div`,{style:{width:400,height:350,resize:`both`,overflow:`auto`,border:`1px dashed #ccc`,padding:16,minWidth:200,maxWidth:800},children:(0,c.jsx)(e,{})})],args:{series:A,styles:d,dataFormat:{type:`currency`}},parameters:{layout:`padded`}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    series: singleSeries,
    styles: SERIES_STYLES,
    dataFormat: {
      type: 'currency'
    }
  }
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    series: comparisonSeries,
    styles: SERIES_STYLES,
    dataFormat: {
      type: 'currency'
    }
  },
  render: args => <>
            <ComparativeLineChart {...args} />
            <SeriesDataTable series={args.series} />
        </>,
  parameters: {
    docs: {
      source: {
        code: \`<ComparativeLineChart
  series={ comparisonSeries }
  styles={ SERIES_STYLES }
  dataFormat={ { type: 'currency' } }
/>\`
      }
    }
  }
}`,..._.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    series: multipleSeries,
    styles: SERIES_STYLES,
    dataFormat: {
      type: 'currency'
    }
  },
  render: args => <>
            <ComparativeLineChart {...args} />
            <SeriesDataTable series={args.series} />
        </>
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    series: seriesWithInlineStyles,
    dataFormat: {
      type: 'currency'
    }
  },
  parameters: {
    docs: {
      description: {
        story: \`Styles can also be defined directly in each series via the \\\`options\\\` property.
This approach is useful when:
- Each series needs different colors (e.g., green vs orange)
- Styles are dynamically generated per-series
- You want styles co-located with series data

The component will use these styles as a fallback when no \\\`styles\\\` prop is provided.\`
      },
      source: {
        code: \`const seriesWithInlineStyles = [
  {
    label: 'Current Period',
    group: 'primary',
    data: [...],
    options: {
      stroke: '#10B981',
      seriesLineStyle: { strokeWidth: 2 },
    },
  },
  {
    label: 'Previous Period',
    group: 'comparison',
    data: [...],
    options: {
      stroke: '#F59E0B',
      seriesLineStyle: { strokeWidth: 1.5, strokeDasharray: '4 4', strokeDashoffset: 2 },
    },
  },
];

<ComparativeLineChart
  series={ seriesWithInlineStyles }
  dataFormat={ { type: 'currency' } }
/>\`
      }
    }
  }
}`,...S.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    series: weeklyIntervalsSeries,
    styles: SERIES_STYLES,
    dataFormat: {
      type: 'currency'
    }
  },
  render: args => <>
            <ComparativeLineChart {...args} />
            <SeriesDataTable series={args.series} />
            <p style={{
      marginTop: '16px',
      fontSize: '13px',
      color: '#666'
    }}>
                <strong>Note:</strong> The primary period starts on Thursday (Sep 12) while the comparison
                starts on Saturday (Jun 14). With index-based alignment, bullets align perfectly by position
                regardless of actual dates. Hover to see both dates in tooltip.
            </p>
        </>,
  parameters: {
    docs: {
      description: {
        story: \`Demonstrates proper alignment when comparing weekly intervals
that start on different days of the week. This scenario previously caused
misaligned bullets because the offset-based approach didn't account for
periods starting on different weekdays. The fix uses index-based alignment
where each comparison point gets the date of its corresponding primary point.\`
      }
    }
  }
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    series: emptyDataSeries,
    styles: SERIES_STYLES,
    dataFormat: {
      type: 'currency'
    }
  },
  parameters: {
    docs: {
      description: {
        story: \`When all data points are zero, the chart shows a fixed Y-axis domain
(0-4000 for currency) to maintain visual consistency.\`
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    series: emptyDataSeries,
    styles: SERIES_STYLES,
    dataFormat: {
      type: 'number'
    }
  },
  parameters: {
    docs: {
      description: {
        story: \`When using number format with empty data, the chart shows a fixed
Y-axis domain of 0-80 to maintain visual consistency.\`
      }
    }
  }
}`,...k.parameters?.docs?.source},description:{story:`EmptyDataNumber: Shows empty state behavior for number format.
Uses a fixed Y-axis domain of 0-80 for number metrics.`,...k.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 400,
    height: 350,
    resize: 'both',
    overflow: 'auto',
    border: '1px dashed #ccc',
    padding: 16,
    minWidth: 200,
    maxWidth: 800
  }}>
                <Story />
            </div>],
  args: {
    series: longLabelSeries,
    styles: SERIES_STYLES,
    dataFormat: {
      type: 'currency'
    }
  },
  parameters: {
    layout: 'padded'
  }
}`,...j.parameters?.docs?.source},description:{story:`Resizable: Demonstrates auto-resize behavior.
Drag the container edges to see the chart adapt to different widths.`,...j.parameters?.docs?.description}}},M=[`Default`,`WithComparison`,`MultipleSeries`,`WithStylesInSeries`,`WeeklyIntervalsAlignment`,`EmptyState`,`EmptyDataNumber`,`Resizable`]}))();export{h as Default,k as EmptyDataNumber,O as EmptyState,b as MultipleSeries,j as Resizable,E as WeeklyIntervalsAlignment,_ as WithComparison,S as WithStylesInSeries,M as __namedExportsOrder,u as default};