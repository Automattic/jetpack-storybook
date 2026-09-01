import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{s as n,t as r}from"./src-B2D7HIFB.js";import{n as i,t as a}from"./chart-tooltip-Crl0qRa-.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{r(),i(),o=t(),s={title:`Packages/Premium Analytics/Widgets Toolkit/Components/ChartTooltip`,component:a,tags:[`autodocs`],parameters:{layout:`centered`}},c=({children:e})=>(0,o.jsx)(`div`,{style:{background:`var(--wpds-color-background-surface-neutral)`,padding:`20px`,borderRadius:`8px`},children:e}),l=[{stroke:`#3858E9`,strokeWidth:2},{stroke:`#3858E9`,strokeDasharray:`4 4`,strokeWidth:1.5,strokeDashoffset:2},{stroke:`#3858E9`,strokeDasharray:`2 2`,strokeWidth:1.5}],u=[{stroke:`#3858E9`},{stroke:`#66BDFF`},{stroke:`#A78BFA`}],d=(e,t)=>n(t>0?e.realDate??e.date:e.date),f={render:()=>(0,o.jsx)(c,{children:(0,o.jsx)(a,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-05`),value:2400},index:0,key:`series-0`},"series-1":{datum:{date:new Date(`2024-01-05`),realDate:new Date(`2023-12-30`),value:2e3},index:1,key:`series-1`}}},dataFormat:{type:`currency`},seriesStyles:l,indicatorType:`line`,getLabel:d})}),parameters:{docs:{description:{story:`Line indicator showing primary and comparison periods. The dashed line differentiates the comparison series.`}}}},p={render:()=>(0,o.jsx)(c,{children:(0,o.jsx)(a,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-03`),value:1400},index:0,key:`series-0`},"series-1":{datum:{date:new Date(`2024-01-03`),realDate:new Date(`2023-12-27`),value:1300},index:1,key:`series-1`},"series-2":{datum:{date:new Date(`2024-01-03`),realDate:new Date(`2023-12-20`),value:1100},index:2,key:`series-2`}}},dataFormat:{type:`currency`},seriesStyles:l,indicatorType:`line`,getLabel:d})}),parameters:{docs:{description:{story:`Line indicator showing three periods with distinct dash patterns.`}}}},m={render:()=>(0,o.jsx)(c,{children:(0,o.jsx)(a,{tooltipData:{datumByKey:{"series-0":{datum:{label:`SUMMER20`,value:4500},index:0,key:`series-0`},"series-1":{datum:{label:`WELCOME10`,value:3200},index:1,key:`series-1`}}},dataFormat:{type:`currency`},seriesStyles:u,indicatorType:`rect`})}),parameters:{docs:{description:{story:`Rectangle indicator for bar charts. Uses different colors for each series.`}}}},h={render:()=>(0,o.jsx)(c,{children:(0,o.jsx)(a,{tooltipData:{datumByKey:{"series-0":{datum:{label:`Desktop`,value:.045},index:0,key:`series-0`}}},dataFormat:{type:`percentage`},seriesStyles:u,indicatorType:`rect`})}),parameters:{docs:{description:{story:`Single series with rectangle indicator and percentage formatting.`}}}},g={render:()=>(0,o.jsx)(c,{children:(0,o.jsx)(a,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-03`),value:42},index:0,key:`series-0`},"series-1":{datum:{date:new Date(`2024-01-03`),realDate:new Date(`2023-12-27`),value:38},index:1,key:`series-1`}}},dataFormat:{type:`number`},seriesStyles:l,indicatorType:`line`,getLabel:d})}),parameters:{docs:{description:{story:`Tooltip with number formatting (no currency symbol).`}}}},_={render:()=>(0,o.jsx)(c,{children:(0,o.jsx)(a,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-03`),value:.0325},index:0,key:`series-0`},"series-1":{datum:{date:new Date(`2024-01-03`),realDate:new Date(`2023-12-27`),value:.028},index:1,key:`series-1`}}},dataFormat:{type:`percentage`},seriesStyles:l,indicatorType:`line`,getLabel:d})}),parameters:{docs:{description:{story:`Tooltip with percentage formatting.`}}}},v={render:()=>(0,o.jsx)(c,{children:(0,o.jsx)(a,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-01`),value:12500},index:0,key:`series-0`}}},dataFormat:{type:`currency`},seriesStyles:l,indicatorType:`line`,getLabel:d})}),parameters:{docs:{description:{story:`Single series tooltip with currency formatting.`}}}},y={render:()=>(0,o.jsx)(c,{children:(0,o.jsx)(a,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-05`),value:15e3},index:0,key:`series-0`},"series-1":{datum:{date:new Date(`2024-01-05`),realDate:new Date(`2023-12-30`),value:12e3},index:1,key:`series-1`}}},dataFormat:{type:`currency`},seriesStyles:[{stroke:`#10B981`,strokeWidth:2},{stroke:`#F59E0B`,strokeDasharray:`4 4`,strokeWidth:1.5,strokeDashoffset:2}],indicatorType:`line`,getLabel:d})}),parameters:{docs:{description:{story:`Tooltip with custom green and orange colors instead of the default blue.`}}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipWrapper>
            <ChartTooltip tooltipData={{
      datumByKey: {
        'series-0': {
          datum: {
            date: new Date('2024-01-05'),
            value: 2400
          },
          index: 0,
          key: 'series-0'
        },
        'series-1': {
          datum: {
            date: new Date('2024-01-05'),
            realDate: new Date('2023-12-30'),
            value: 2000
          },
          index: 1,
          key: 'series-1'
        }
      }
    }} dataFormat={{
      type: 'currency'
    }} seriesStyles={LINE_SERIES_STYLES} indicatorType="line" getLabel={getDateLabel} />
        </TooltipWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'Line indicator showing primary and comparison periods. The dashed line differentiates the comparison series.'
      }
    }
  }
}`,...f.parameters?.docs?.source},description:{story:`LineIndicatorTwoSeries: Line indicator with two series (primary + comparison).`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipWrapper>
            <ChartTooltip tooltipData={{
      datumByKey: {
        'series-0': {
          datum: {
            date: new Date('2024-01-03'),
            value: 1400
          },
          index: 0,
          key: 'series-0'
        },
        'series-1': {
          datum: {
            date: new Date('2024-01-03'),
            realDate: new Date('2023-12-27'),
            value: 1300
          },
          index: 1,
          key: 'series-1'
        },
        'series-2': {
          datum: {
            date: new Date('2024-01-03'),
            realDate: new Date('2023-12-20'),
            value: 1100
          },
          index: 2,
          key: 'series-2'
        }
      }
    }} dataFormat={{
      type: 'currency'
    }} seriesStyles={LINE_SERIES_STYLES} indicatorType="line" getLabel={getDateLabel} />
        </TooltipWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'Line indicator showing three periods with distinct dash patterns.'
      }
    }
  }
}`,...p.parameters?.docs?.source},description:{story:`LineIndicatorThreeSeries: Line indicator with three series.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipWrapper>
            <ChartTooltip tooltipData={{
      datumByKey: {
        'series-0': {
          datum: {
            label: 'SUMMER20',
            value: 4500
          },
          index: 0,
          key: 'series-0'
        },
        'series-1': {
          datum: {
            label: 'WELCOME10',
            value: 3200
          },
          index: 1,
          key: 'series-1'
        }
      }
    }} dataFormat={{
      type: 'currency'
    }} seriesStyles={BAR_SERIES_STYLES} indicatorType="rect" />
        </TooltipWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'Rectangle indicator for bar charts. Uses different colors for each series.'
      }
    }
  }
}`,...m.parameters?.docs?.source},description:{story:`RectIndicatorTwoSeries: Rectangle indicator for bar charts with two series.
Uses default getLabel which extracts datum.label.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipWrapper>
            <ChartTooltip tooltipData={{
      datumByKey: {
        'series-0': {
          datum: {
            label: 'Desktop',
            value: 0.045
          },
          index: 0,
          key: 'series-0'
        }
      }
    }} dataFormat={{
      type: 'percentage'
    }} seriesStyles={BAR_SERIES_STYLES} indicatorType="rect" />
        </TooltipWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'Single series with rectangle indicator and percentage formatting.'
      }
    }
  }
}`,...h.parameters?.docs?.source},description:{story:`RectIndicatorSingleSeries: Rectangle indicator with single series.
Uses default getLabel which extracts datum.label.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipWrapper>
            <ChartTooltip tooltipData={{
      datumByKey: {
        'series-0': {
          datum: {
            date: new Date('2024-01-03'),
            value: 42
          },
          index: 0,
          key: 'series-0'
        },
        'series-1': {
          datum: {
            date: new Date('2024-01-03'),
            realDate: new Date('2023-12-27'),
            value: 38
          },
          index: 1,
          key: 'series-1'
        }
      }
    }} dataFormat={{
      type: 'number'
    }} seriesStyles={LINE_SERIES_STYLES} indicatorType="line" getLabel={getDateLabel} />
        </TooltipWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'Tooltip with number formatting (no currency symbol).'
      }
    }
  }
}`,...g.parameters?.docs?.source},description:{story:`NumberFormat: Tooltip with number formatting.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipWrapper>
            <ChartTooltip tooltipData={{
      datumByKey: {
        'series-0': {
          datum: {
            date: new Date('2024-01-03'),
            value: 0.0325
          },
          index: 0,
          key: 'series-0'
        },
        'series-1': {
          datum: {
            date: new Date('2024-01-03'),
            realDate: new Date('2023-12-27'),
            value: 0.028
          },
          index: 1,
          key: 'series-1'
        }
      }
    }} dataFormat={{
      type: 'percentage'
    }} seriesStyles={LINE_SERIES_STYLES} indicatorType="line" getLabel={getDateLabel} />
        </TooltipWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'Tooltip with percentage formatting.'
      }
    }
  }
}`,..._.parameters?.docs?.source},description:{story:`PercentageFormat: Tooltip with percentage formatting.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipWrapper>
            <ChartTooltip tooltipData={{
      datumByKey: {
        'series-0': {
          datum: {
            date: new Date('2024-01-01'),
            value: 12500
          },
          index: 0,
          key: 'series-0'
        }
      }
    }} dataFormat={{
      type: 'currency'
    }} seriesStyles={LINE_SERIES_STYLES} indicatorType="line" getLabel={getDateLabel} />
        </TooltipWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'Single series tooltip with currency formatting.'
      }
    }
  }
}`,...v.parameters?.docs?.source},description:{story:`CurrencyFormat: Tooltip with currency formatting.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipWrapper>
            <ChartTooltip tooltipData={{
      datumByKey: {
        'series-0': {
          datum: {
            date: new Date('2024-01-05'),
            value: 15000
          },
          index: 0,
          key: 'series-0'
        },
        'series-1': {
          datum: {
            date: new Date('2024-01-05'),
            realDate: new Date('2023-12-30'),
            value: 12000
          },
          index: 1,
          key: 'series-1'
        }
      }
    }} dataFormat={{
      type: 'currency'
    }} seriesStyles={[{
      stroke: '#10B981',
      strokeWidth: 2
    }, {
      stroke: '#F59E0B',
      strokeDasharray: '4 4',
      strokeWidth: 1.5,
      strokeDashoffset: 2
    }]} indicatorType="line" getLabel={getDateLabel} />
        </TooltipWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'Tooltip with custom green and orange colors instead of the default blue.'
      }
    }
  }
}`,...y.parameters?.docs?.source},description:{story:`CustomStyles: Tooltip with custom color styles.`,...y.parameters?.docs?.description}}},b=[`LineIndicatorTwoSeries`,`LineIndicatorThreeSeries`,`RectIndicatorTwoSeries`,`RectIndicatorSingleSeries`,`NumberFormat`,`PercentageFormat`,`CurrencyFormat`,`CustomStyles`]}))();export{v as CurrencyFormat,y as CustomStyles,p as LineIndicatorThreeSeries,f as LineIndicatorTwoSeries,g as NumberFormat,_ as PercentageFormat,h as RectIndicatorSingleSeries,m as RectIndicatorTwoSeries,b as __namedExportsOrder,s as default};