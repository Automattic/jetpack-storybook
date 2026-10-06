import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{U as n,Y as r}from"./charts-provider-DPUfeA6O.js";import{r as i}from"./bounded-tooltip-Bx16gBEJ.js";import{t as a}from"./src-BvmOiQD4.js";import{s as o,t as s}from"./src-CkQt_Tb_.js";import{n as c,t as l}from"./with-chart-theme-DTs7KiL-.js";import{n as u,t as d}from"./chart-tooltip-D5qCQzs-.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{a(),s(),n(),l(),u(),f=t(),p={title:`Packages/Premium Analytics/Widgets Toolkit/Components/ChartTooltip`,component:d,tags:[`autodocs`],decorators:[c],parameters:{layout:`centered`}},m=[{stroke:`#3858E9`,strokeWidth:2},{stroke:`#3858E9`,strokeDasharray:`4 4`,strokeWidth:1.5,strokeDashoffset:2},{stroke:`#3858E9`,strokeDasharray:`2 2`,strokeWidth:1.5}],h=[{stroke:`#3858E9`},{stroke:`#66BDFF`},{stroke:`#A78BFA`}],g=(e,t)=>o(t>0?e.realDate??e.date:e.date),_={render:()=>(0,f.jsx)(i,{children:(0,f.jsx)(d,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-05`),value:2400},index:0,key:`series-0`},"series-1":{datum:{date:new Date(`2024-01-05`),realDate:new Date(`2023-12-30`),value:2e3},index:1,key:`series-1`}}},dataFormat:{type:`currency`},seriesStyles:m,indicatorType:`line`,getLabel:g})}),parameters:{docs:{description:{story:`Line indicator showing primary and comparison periods. The dashed line differentiates the comparison series.`}}}},v={render:()=>(0,f.jsx)(i,{children:(0,f.jsx)(d,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-03`),value:1400},index:0,key:`series-0`},"series-1":{datum:{date:new Date(`2024-01-03`),realDate:new Date(`2023-12-27`),value:1300},index:1,key:`series-1`},"series-2":{datum:{date:new Date(`2024-01-03`),realDate:new Date(`2023-12-20`),value:1100},index:2,key:`series-2`}}},dataFormat:{type:`currency`},seriesStyles:m,indicatorType:`line`,getLabel:g})}),parameters:{docs:{description:{story:`Line indicator showing three periods with distinct dash patterns.`}}}},y={render:()=>(0,f.jsx)(i,{children:(0,f.jsx)(d,{tooltipData:{datumByKey:{"series-0":{datum:{label:`SUMMER20`,value:4500},index:0,key:`series-0`},"series-1":{datum:{label:`WELCOME10`,value:3200},index:1,key:`series-1`}}},dataFormat:{type:`currency`},seriesStyles:h,indicatorType:`rect`})}),parameters:{docs:{description:{story:`Rectangle indicator for bar charts. Uses different colors for each series.`}}}},b={render:()=>(0,f.jsx)(i,{children:(0,f.jsx)(d,{tooltipData:{datumByKey:{"series-0":{datum:{label:`Desktop`,value:.045},index:0,key:`series-0`}}},dataFormat:{type:`percentage`},seriesStyles:h,indicatorType:`rect`})}),parameters:{docs:{description:{story:`Single series with rectangle indicator and percentage formatting.`}}}},x={render:()=>(0,f.jsx)(i,{children:(0,f.jsx)(d,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-03`),value:42},index:0,key:`series-0`},"series-1":{datum:{date:new Date(`2024-01-03`),realDate:new Date(`2023-12-27`),value:38},index:1,key:`series-1`}}},dataFormat:{type:`number`},seriesStyles:m,indicatorType:`line`,getLabel:g})}),parameters:{docs:{description:{story:`Tooltip with number formatting (no currency symbol).`}}}},S={render:()=>(0,f.jsx)(i,{children:(0,f.jsx)(d,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-03`),value:.0325},index:0,key:`series-0`},"series-1":{datum:{date:new Date(`2024-01-03`),realDate:new Date(`2023-12-27`),value:.028},index:1,key:`series-1`}}},dataFormat:{type:`percentage`},seriesStyles:m,indicatorType:`line`,getLabel:g})}),parameters:{docs:{description:{story:`Tooltip with percentage formatting.`}}}},C={render:()=>(0,f.jsx)(i,{children:(0,f.jsx)(d,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-01`),value:12500},index:0,key:`series-0`}}},dataFormat:{type:`currency`},seriesStyles:m,indicatorType:`line`,getLabel:g})}),parameters:{docs:{description:{story:`Single series tooltip with currency formatting.`}}}},w={render:()=>(0,f.jsx)(i,{children:(0,f.jsx)(d,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-05`),value:15e3},index:0,key:`series-0`},"series-1":{datum:{date:new Date(`2024-01-05`),realDate:new Date(`2023-12-30`),value:12e3},index:1,key:`series-1`}}},dataFormat:{type:`currency`},seriesStyles:[{stroke:`#10B981`,strokeWidth:2},{stroke:`#F59E0B`,strokeDasharray:`4 4`,strokeWidth:1.5,strokeDashoffset:2}],indicatorType:`line`,getLabel:g})}),parameters:{docs:{description:{story:`Tooltip with custom green and orange colors instead of the default blue.`}}}},T={render:()=>(0,f.jsx)(i,{children:(0,f.jsx)(d,{tooltipData:{datumByKey:{Subscribers:{datum:{date:new Date(`2026-03-01`),value:null},index:0,key:`Subscribers`},"Subscribers · previous period":{datum:{date:new Date(`2026-03-01`),realDate:new Date(`2025-03-01`),value:0},index:1,key:`Subscribers · previous period`}}},dataFormat:{type:`number`},seriesStyles:m,indicatorType:`line`,layout:`inline`,getLabel:(e,t,n,i)=>r(i,n,o(e.realDate??e.date))})}),parameters:{docs:{description:{story:`The inline layout the comparative charts use. A bucket with no reading reads "No data" rather than a zero, and a real zero still reads 0.`}}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipBox>
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
        </TooltipBox>,
  parameters: {
    docs: {
      description: {
        story: 'Line indicator showing primary and comparison periods. The dashed line differentiates the comparison series.'
      }
    }
  }
}`,..._.parameters?.docs?.source},description:{story:`LineIndicatorTwoSeries: Line indicator with two series (primary + comparison).`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipBox>
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
        </TooltipBox>,
  parameters: {
    docs: {
      description: {
        story: 'Line indicator showing three periods with distinct dash patterns.'
      }
    }
  }
}`,...v.parameters?.docs?.source},description:{story:`LineIndicatorThreeSeries: Line indicator with three series.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipBox>
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
        </TooltipBox>,
  parameters: {
    docs: {
      description: {
        story: 'Rectangle indicator for bar charts. Uses different colors for each series.'
      }
    }
  }
}`,...y.parameters?.docs?.source},description:{story:`RectIndicatorTwoSeries: Rectangle indicator for bar charts with two series.
Uses default getLabel which extracts datum.label.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipBox>
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
        </TooltipBox>,
  parameters: {
    docs: {
      description: {
        story: 'Single series with rectangle indicator and percentage formatting.'
      }
    }
  }
}`,...b.parameters?.docs?.source},description:{story:`RectIndicatorSingleSeries: Rectangle indicator with single series.
Uses default getLabel which extracts datum.label.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipBox>
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
        </TooltipBox>,
  parameters: {
    docs: {
      description: {
        story: 'Tooltip with number formatting (no currency symbol).'
      }
    }
  }
}`,...x.parameters?.docs?.source},description:{story:`NumberFormat: Tooltip with number formatting.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipBox>
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
        </TooltipBox>,
  parameters: {
    docs: {
      description: {
        story: 'Tooltip with percentage formatting.'
      }
    }
  }
}`,...S.parameters?.docs?.source},description:{story:`PercentageFormat: Tooltip with percentage formatting.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipBox>
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
        </TooltipBox>,
  parameters: {
    docs: {
      description: {
        story: 'Single series tooltip with currency formatting.'
      }
    }
  }
}`,...C.parameters?.docs?.source},description:{story:`CurrencyFormat: Tooltip with currency formatting.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipBox>
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
        </TooltipBox>,
  parameters: {
    docs: {
      description: {
        story: 'Tooltip with custom green and orange colors instead of the default blue.'
      }
    }
  }
}`,...w.parameters?.docs?.source},description:{story:`CustomStyles: Tooltip with custom color styles.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipBox>
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
        </TooltipBox>,
  parameters: {
    docs: {
      description: {
        story: 'The inline layout the comparative charts use. A bucket with no reading reads "No data" rather than a zero, and a real zero still reads 0.'
      }
    }
  }
}`,...T.parameters?.docs?.source},description:{story:`MissingReading: an inline row for a bucket with no reading, beside a real zero.`,...T.parameters?.docs?.description}}},E=[`LineIndicatorTwoSeries`,`LineIndicatorThreeSeries`,`RectIndicatorTwoSeries`,`RectIndicatorSingleSeries`,`NumberFormat`,`PercentageFormat`,`CurrencyFormat`,`CustomStyles`,`MissingReading`]}))();export{C as CurrencyFormat,w as CustomStyles,v as LineIndicatorThreeSeries,_ as LineIndicatorTwoSeries,T as MissingReading,x as NumberFormat,S as PercentageFormat,b as RectIndicatorSingleSeries,y as RectIndicatorTwoSeries,E as __namedExportsOrder,p as default};