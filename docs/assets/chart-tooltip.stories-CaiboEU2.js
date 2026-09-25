import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{s as n,t as r}from"./src-BUSOMinT.js";import{s as i,t as a}from"./helpers-B4MbMU4M.js";import{n as o,t as s}from"./chart-tooltip-D6Wn5mvr.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{r(),a(),o(),c=t(),l={title:`Packages/Premium Analytics/Widgets Toolkit/Components/ChartTooltip`,component:s,tags:[`autodocs`],parameters:{layout:`centered`}},u=({children:e})=>(0,c.jsx)(`div`,{style:{background:`var(--wpds-color-background-surface-neutral)`,padding:`20px`,borderRadius:`8px`},children:e}),d=[{stroke:`#3858E9`,strokeWidth:2},{stroke:`#3858E9`,strokeDasharray:`4 4`,strokeWidth:1.5,strokeDashoffset:2},{stroke:`#3858E9`,strokeDasharray:`2 2`,strokeWidth:1.5}],f=[{stroke:`#3858E9`},{stroke:`#66BDFF`},{stroke:`#A78BFA`}],p=(e,t)=>n(t>0?e.realDate??e.date:e.date),m={render:()=>(0,c.jsx)(u,{children:(0,c.jsx)(s,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-05`),value:2400},index:0,key:`series-0`},"series-1":{datum:{date:new Date(`2024-01-05`),realDate:new Date(`2023-12-30`),value:2e3},index:1,key:`series-1`}}},dataFormat:{type:`currency`},seriesStyles:d,indicatorType:`line`,getLabel:p})}),parameters:{docs:{description:{story:`Line indicator showing primary and comparison periods. The dashed line differentiates the comparison series.`}}}},h={render:()=>(0,c.jsx)(u,{children:(0,c.jsx)(s,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-03`),value:1400},index:0,key:`series-0`},"series-1":{datum:{date:new Date(`2024-01-03`),realDate:new Date(`2023-12-27`),value:1300},index:1,key:`series-1`},"series-2":{datum:{date:new Date(`2024-01-03`),realDate:new Date(`2023-12-20`),value:1100},index:2,key:`series-2`}}},dataFormat:{type:`currency`},seriesStyles:d,indicatorType:`line`,getLabel:p})}),parameters:{docs:{description:{story:`Line indicator showing three periods with distinct dash patterns.`}}}},g={render:()=>(0,c.jsx)(u,{children:(0,c.jsx)(s,{tooltipData:{datumByKey:{"series-0":{datum:{label:`SUMMER20`,value:4500},index:0,key:`series-0`},"series-1":{datum:{label:`WELCOME10`,value:3200},index:1,key:`series-1`}}},dataFormat:{type:`currency`},seriesStyles:f,indicatorType:`rect`})}),parameters:{docs:{description:{story:`Rectangle indicator for bar charts. Uses different colors for each series.`}}}},_={render:()=>(0,c.jsx)(u,{children:(0,c.jsx)(s,{tooltipData:{datumByKey:{"series-0":{datum:{label:`Desktop`,value:.045},index:0,key:`series-0`}}},dataFormat:{type:`percentage`},seriesStyles:f,indicatorType:`rect`})}),parameters:{docs:{description:{story:`Single series with rectangle indicator and percentage formatting.`}}}},v={render:()=>(0,c.jsx)(u,{children:(0,c.jsx)(s,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-03`),value:42},index:0,key:`series-0`},"series-1":{datum:{date:new Date(`2024-01-03`),realDate:new Date(`2023-12-27`),value:38},index:1,key:`series-1`}}},dataFormat:{type:`number`},seriesStyles:d,indicatorType:`line`,getLabel:p})}),parameters:{docs:{description:{story:`Tooltip with number formatting (no currency symbol).`}}}},y={render:()=>(0,c.jsx)(u,{children:(0,c.jsx)(s,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-03`),value:.0325},index:0,key:`series-0`},"series-1":{datum:{date:new Date(`2024-01-03`),realDate:new Date(`2023-12-27`),value:.028},index:1,key:`series-1`}}},dataFormat:{type:`percentage`},seriesStyles:d,indicatorType:`line`,getLabel:p})}),parameters:{docs:{description:{story:`Tooltip with percentage formatting.`}}}},b={render:()=>(0,c.jsx)(u,{children:(0,c.jsx)(s,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-01`),value:12500},index:0,key:`series-0`}}},dataFormat:{type:`currency`},seriesStyles:d,indicatorType:`line`,getLabel:p})}),parameters:{docs:{description:{story:`Single series tooltip with currency formatting.`}}}},x={render:()=>(0,c.jsx)(u,{children:(0,c.jsx)(s,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-05`),value:15e3},index:0,key:`series-0`},"series-1":{datum:{date:new Date(`2024-01-05`),realDate:new Date(`2023-12-30`),value:12e3},index:1,key:`series-1`}}},dataFormat:{type:`currency`},seriesStyles:[{stroke:`#10B981`,strokeWidth:2},{stroke:`#F59E0B`,strokeDasharray:`4 4`,strokeWidth:1.5,strokeDashoffset:2}],indicatorType:`line`,getLabel:p})}),parameters:{docs:{description:{story:`Tooltip with custom green and orange colors instead of the default blue.`}}}},S={render:()=>(0,c.jsx)(u,{children:(0,c.jsx)(s,{tooltipData:{datumByKey:{Subscribers:{datum:{date:new Date(`2026-03-01`),value:null},index:0,key:`Subscribers`},"Subscribers · previous period":{datum:{date:new Date(`2026-03-01`),realDate:new Date(`2025-03-01`),value:0},index:1,key:`Subscribers · previous period`}}},dataFormat:{type:`number`},seriesStyles:d,indicatorType:`line`,layout:`inline`,getLabel:(e,t,r,a)=>i(a,r,n(e.realDate??e.date))})}),parameters:{docs:{description:{story:`The inline layout the comparative charts use. A bucket with no reading reads "No data" rather than a zero, and a real zero still reads 0.`}}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`LineIndicatorTwoSeries: Line indicator with two series (primary + comparison).`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`LineIndicatorThreeSeries: Line indicator with three series.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`RectIndicatorTwoSeries: Rectangle indicator for bar charts with two series.
Uses default getLabel which extracts datum.label.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`RectIndicatorSingleSeries: Rectangle indicator with single series.
Uses default getLabel which extracts datum.label.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`NumberFormat: Tooltip with number formatting.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`PercentageFormat: Tooltip with percentage formatting.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`CurrencyFormat: Tooltip with currency formatting.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`CustomStyles: Tooltip with custom color styles.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipWrapper>
            <ChartTooltip tooltipData={{
      datumByKey: {
        Subscribers: {
          datum: {
            date: new Date('2026-03-01'),
            value: null
          },
          index: 0,
          key: 'Subscribers'
        },
        'Subscribers · previous period': {
          datum: {
            date: new Date('2026-03-01'),
            realDate: new Date('2025-03-01'),
            value: 0
          },
          index: 1,
          key: 'Subscribers · previous period'
        }
      }
    }} dataFormat={{
      type: 'number'
    }} seriesStyles={LINE_SERIES_STYLES} indicatorType="line" layout="inline" getLabel={(datum: LineDatum, _index: number, key: string, value: string | null) => formatTooltipPointLabel(value, key, formatDate(datum.realDate ?? datum.date))} />
        </TooltipWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'The inline layout the comparative charts use. A bucket with no reading reads "No data" rather than a zero, and a real zero still reads 0.'
      }
    }
  }
}`,...S.parameters?.docs?.source},description:{story:`MissingReading: an inline row for a bucket with no reading, beside a real zero.`,...S.parameters?.docs?.description}}},C=[`LineIndicatorTwoSeries`,`LineIndicatorThreeSeries`,`RectIndicatorTwoSeries`,`RectIndicatorSingleSeries`,`NumberFormat`,`PercentageFormat`,`CurrencyFormat`,`CustomStyles`,`MissingReading`]}))();export{b as CurrencyFormat,x as CustomStyles,h as LineIndicatorThreeSeries,m as LineIndicatorTwoSeries,S as MissingReading,v as NumberFormat,y as PercentageFormat,_ as RectIndicatorSingleSeries,g as RectIndicatorTwoSeries,C as __namedExportsOrder,l as default};