import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{r as n}from"./bounded-tooltip-Db1TiBzo.js";import{t as r}from"./src-CdVQL5l6.js";import{s as i,t as a}from"./src-DJpFvZLS.js";import{n as o,t as s}from"./with-chart-theme-B_lLtAoG.js";import{r as c,t as l}from"./chart-tooltip-ByCjeksH.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{r(),a(),s(),c(),u=t(),d={title:`Packages/Premium Analytics/Widgets Toolkit/Components/ChartTooltip`,component:l,tags:[`autodocs`],decorators:[o],parameters:{layout:`centered`}},f=[{stroke:`#3858E9`,strokeWidth:2},{stroke:`#3858E9`,strokeDasharray:`4 4`,strokeWidth:1.5,strokeDashoffset:2},{stroke:`#3858E9`,strokeDasharray:`2 2`,strokeWidth:1.5}],p=[{stroke:`#3858E9`},{stroke:`#66BDFF`},{stroke:`#A78BFA`}],m=(e,t)=>i(t>0?e.realDate??e.date:e.date),h={render:()=>(0,u.jsx)(n,{children:(0,u.jsx)(l,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-05`),value:2400},index:0,key:`series-0`},"series-1":{datum:{date:new Date(`2024-01-05`),realDate:new Date(`2023-12-30`),value:2e3},index:1,key:`series-1`}}},dataFormat:{type:`currency`},seriesStyles:f,indicatorType:`line`,getLabel:m})}),parameters:{docs:{description:{story:`Line indicator showing primary and comparison periods. The dashed line differentiates the comparison series.`}}}},g={render:()=>(0,u.jsx)(n,{children:(0,u.jsx)(l,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-03`),value:1400},index:0,key:`series-0`},"series-1":{datum:{date:new Date(`2024-01-03`),realDate:new Date(`2023-12-27`),value:1300},index:1,key:`series-1`},"series-2":{datum:{date:new Date(`2024-01-03`),realDate:new Date(`2023-12-20`),value:1100},index:2,key:`series-2`}}},dataFormat:{type:`currency`},seriesStyles:f,indicatorType:`line`,getLabel:m})}),parameters:{docs:{description:{story:`Line indicator showing three periods with distinct dash patterns.`}}}},_={render:()=>(0,u.jsx)(n,{children:(0,u.jsx)(l,{tooltipData:{datumByKey:{"series-0":{datum:{label:`SUMMER20`,value:4500},index:0,key:`series-0`},"series-1":{datum:{label:`WELCOME10`,value:3200},index:1,key:`series-1`}}},dataFormat:{type:`currency`},seriesStyles:p,indicatorType:`rect`})}),parameters:{docs:{description:{story:`Rectangle indicator for bar charts. Uses different colors for each series.`}}}},v={render:()=>(0,u.jsx)(n,{children:(0,u.jsx)(l,{tooltipData:{datumByKey:{"series-0":{datum:{label:`Desktop`,value:.045},index:0,key:`series-0`}}},dataFormat:{type:`percentage`},seriesStyles:p,indicatorType:`rect`})}),parameters:{docs:{description:{story:`Single series with rectangle indicator and percentage formatting.`}}}},y={render:()=>(0,u.jsx)(n,{children:(0,u.jsx)(l,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-03`),value:42},index:0,key:`series-0`},"series-1":{datum:{date:new Date(`2024-01-03`),realDate:new Date(`2023-12-27`),value:38},index:1,key:`series-1`}}},dataFormat:{type:`number`},seriesStyles:f,indicatorType:`line`,getLabel:m})}),parameters:{docs:{description:{story:`Tooltip with number formatting (no currency symbol).`}}}},b={render:()=>(0,u.jsx)(n,{children:(0,u.jsx)(l,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-03`),value:.0325},index:0,key:`series-0`},"series-1":{datum:{date:new Date(`2024-01-03`),realDate:new Date(`2023-12-27`),value:.028},index:1,key:`series-1`}}},dataFormat:{type:`percentage`},seriesStyles:f,indicatorType:`line`,getLabel:m})}),parameters:{docs:{description:{story:`Tooltip with percentage formatting.`}}}},x={render:()=>(0,u.jsx)(n,{children:(0,u.jsx)(l,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-01`),value:12500},index:0,key:`series-0`}}},dataFormat:{type:`currency`},seriesStyles:f,indicatorType:`line`,getLabel:m})}),parameters:{docs:{description:{story:`Single series tooltip with currency formatting.`}}}},S={render:()=>(0,u.jsx)(n,{children:(0,u.jsx)(l,{tooltipData:{datumByKey:{"series-0":{datum:{date:new Date(`2024-01-05`),value:15e3},index:0,key:`series-0`},"series-1":{datum:{date:new Date(`2024-01-05`),realDate:new Date(`2023-12-30`),value:12e3},index:1,key:`series-1`}}},dataFormat:{type:`currency`},seriesStyles:[{stroke:`#10B981`,strokeWidth:2},{stroke:`#F59E0B`,strokeDasharray:`4 4`,strokeWidth:1.5,strokeDashoffset:2}],indicatorType:`line`,getLabel:m})}),parameters:{docs:{description:{story:`Tooltip with custom green and orange colors instead of the default blue.`}}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`LineIndicatorTwoSeries: Line indicator with two series (primary + comparison).`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`LineIndicatorThreeSeries: Line indicator with three series.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`RectIndicatorTwoSeries: Rectangle indicator for bar charts with two series.
Uses default getLabel which extracts datum.label.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`RectIndicatorSingleSeries: Rectangle indicator with single series.
Uses default getLabel which extracts datum.label.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`NumberFormat: Tooltip with number formatting.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`PercentageFormat: Tooltip with percentage formatting.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`CurrencyFormat: Tooltip with currency formatting.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`CustomStyles: Tooltip with custom color styles.`,...S.parameters?.docs?.description}}},C=[`LineIndicatorTwoSeries`,`LineIndicatorThreeSeries`,`RectIndicatorTwoSeries`,`RectIndicatorSingleSeries`,`NumberFormat`,`PercentageFormat`,`CurrencyFormat`,`CustomStyles`]}))();export{x as CurrencyFormat,S as CustomStyles,g as LineIndicatorThreeSeries,h as LineIndicatorTwoSeries,y as NumberFormat,b as PercentageFormat,v as RectIndicatorSingleSeries,_ as RectIndicatorTwoSeries,C as __namedExportsOrder,d as default};