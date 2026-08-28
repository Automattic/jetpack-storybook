import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{n as r,r as i}from"./line-chart-D4B53ysp.js";import{C as a}from"./sample-data-Cx3-uFO8.js";import{t as o}from"./stories-BFVMZTbe.js";import{a as s,i as c,n as l,o as u,r as d}from"./config-BY1XuAf7.js";var f=e({Alert:()=>F,Colored:()=>T,Custom:()=>j,Default:()=>_,Horizontal:()=>x,Mixed:()=>C,Vertical:()=>y,__namedExportsOrder:()=>I,default:()=>m}),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L=t((()=>{s(),o(),i(),l(),p=n(),m={...d,title:`JS Packages/Charts Library/Charts/Line Chart/Annotations`,component:d.component,args:{...c}},h=e=>t=>(0,p.jsx)(r,{...t,children:(0,p.jsxs)(r.AnnotationsOverlay,{children:[(0,p.jsx)(r.Annotation,{datum:a[0].data[10],title:`Notable event`,subtitle:`This is a notable event`,...e?.[0]||{}}),(0,p.jsx)(r.Annotation,{datum:a[1].data[1],title:`Another notable event`,subtitle:`This is another notable event`,...e?.[1]||{}}),(0,p.jsx)(r.Annotation,{datum:a[2].data[7],title:`Concerning event`,subtitle:`This is a concerning event`,...e?.[2]||{}})]})}),g=h([{},{},{styles:{circleSubject:{fill:`var(--jp-red)`},connector:{stroke:`var(--jp-red)`},label:{anchorLineStroke:`var(--jp-red)`}}}]),_=g.bind({}),v=h([{subjectType:`line-vertical`},{subjectType:`line-vertical`},{subjectType:`line-vertical`,styles:{connector:{stroke:`var(--jp-red)`},label:{anchorLineStroke:`var(--jp-red)`}}}]),y=v.bind({}),b=h([{subjectType:`line-horizontal`},{subjectType:`line-horizontal`},{subjectType:`line-horizontal`,styles:{connector:{stroke:`var(--jp-red)`},label:{anchorLineStroke:`var(--jp-red)`}}}]),x=b.bind({}),S=h([{subjectType:`circle`},{subjectType:`line-vertical`},{subjectType:`line-horizontal`,styles:{connector:{stroke:`var(--jp-red)`},label:{anchorLineStroke:`var(--jp-red)`}}}]),C=S.bind({}),w=h([{styles:{label:{backgroundFill:`#98C8DF`,showAnchorLine:!1},circleSubject:{fill:`#98C8DF`},connector:{stroke:`#98C8DF`}}},{styles:{label:{backgroundFill:`#006DAB`,fontColor:`#fff`,showAnchorLine:!1},circleSubject:{fill:`#006DAB`},connector:{stroke:`#006DAB`}}},{styles:{label:{backgroundFill:`var(--jp-red)`,showAnchorLine:!1,fontColor:`#fff`},circleSubject:{fill:`var(--jp-red)`},connector:{stroke:`var(--jp-red)`}}}]),T=w.bind({}),E=()=>(0,p.jsx)(`span`,{style:{background:`black`,color:`white`,width:`24px`,height:`24px`,display:`flex`,alignItems:`center`,justifyContent:`center`,borderRadius:`50%`},children:`D`}),D={subjectType:`line-vertical`,styles:{label:{showAnchorLine:!1,y:`start`}},title:`Deployed`,renderLabel:()=>(0,p.jsx)(`span`,{style:{transform:`translate(0, 6px)`},children:(0,p.jsx)(E,{})}),renderLabelPopover:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,p.jsxs)(`div`,{style:{margin:0,display:`flex`,alignItems:`center`,gap:`6px`,paddingBlock:`0.25rem `},children:[(0,p.jsx)(E,{}),(0,p.jsx)(`strong`,{children:`Deploy finished`})]}),(0,p.jsx)(`p`,{style:{margin:0},children:`Thu. Apr 24, 2025. 09:57:23 UTC`})]})},O=()=>(0,p.jsx)(`span`,{style:{background:`var(--jp-red)`,color:`white`,width:`20px`,height:`20px`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,borderRadius:`50%`},children:`!`}),k={subjectType:`circle`,styles:{circleSubject:{radius:0},label:{showAnchorLine:!1},connector:{stroke:`transparent`}},title:`Alert`,renderLabel:()=>(0,p.jsx)(O,{}),renderLabelPopover:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,p.jsxs)(`div`,{style:{margin:0,display:`flex`,alignItems:`center`,gap:`6px`,paddingBlock:`0.25rem `},children:[(0,p.jsx)(O,{}),(0,p.jsx)(`strong`,{children:`Origin HTTP 5xx Response Codes Rate Anomaly [Beta]`})]}),(0,p.jsx)(`p`,{style:{margin:0},children:`Unusually high number of HTTP 5xx response codes detected on Origin`})]})},A=h([{...D},{...D},{...k}]),j=A.bind({}),M=({x:e,y:t,color:n,size:r,key:i})=>i&&i.includes(`Alert`)?(0,p.jsx)(u,{top:t,left:e,size:r*r,fill:`white`,stroke:n,strokeWidth:2,transform:`rotate(90)`},`triangle-${e}-${t}`):null,N=()=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,p.jsxs)(`div`,{style:{margin:0,display:`flex`,alignItems:`center`,gap:`6px`,paddingBlock:`0.25rem `},children:[(0,p.jsx)(O,{}),(0,p.jsx)(`strong`,{children:`Alert`})]}),(0,p.jsx)(`p`,{style:{margin:0},children:`Highest temperature (27°C) reached`})]}),P=e=>{let t={...a[0],options:{...a[0].options,gradient:{fromOpacity:0,toOpacity:0}}},n=t.data.slice(4,9),i=t.data.map(e=>e.value),o=n.map(e=>e.value),s=Math.min(...i),c=Math.max(...i)-s,l=100-(Math.min(...o)-s)/c*100,u={...t,group:`new-york-highlight`,label:`Alert`,data:n,options:{stroke:`var(--jp-red)`,seriesLineStyle:{strokeWidth:3},gradient:{stops:[{offset:`0%`,opacity:.5},{offset:`${l*.75}%`,opacity:0},{offset:`100%`,opacity:0}]}}},d=t.data[6];return(0,p.jsx)(r,{...e,smoothing:!1,data:[t,u],withGradientFill:!0,withStartGlyphs:!0,withEndGlyphs:!0,renderGlyph:M,glyphStyle:{radius:8},children:(0,p.jsx)(r.AnnotationsOverlay,{children:(0,p.jsx)(r.Annotation,{datum:d,title:`Alert`,subjectType:`circle`,styles:{circleSubject:{radius:0},label:{showAnchorLine:!1},connector:{stroke:`transparent`}},renderLabel:O,renderLabelPopover:N})})})},F=P.bind({}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{}, {}, {
  styles: {
    circleSubject: {
      fill: 'var(--jp-red)'
    },
    connector: {
      stroke: 'var(--jp-red)'
    },
    label: {
      anchorLineStroke: 'var(--jp-red)'
    }
  }
}])`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
  subjectType: 'line-vertical'
}, {
  subjectType: 'line-vertical'
}, {
  subjectType: 'line-vertical',
  styles: {
    connector: {
      stroke: 'var(--jp-red)'
    },
    label: {
      anchorLineStroke: 'var(--jp-red)'
    }
  }
}])`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
  subjectType: 'line-horizontal'
}, {
  subjectType: 'line-horizontal'
}, {
  subjectType: 'line-horizontal',
  styles: {
    connector: {
      stroke: 'var(--jp-red)'
    },
    label: {
      anchorLineStroke: 'var(--jp-red)'
    }
  }
}])`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
  subjectType: 'circle'
}, {
  subjectType: 'line-vertical'
}, {
  subjectType: 'line-horizontal',
  styles: {
    connector: {
      stroke: 'var(--jp-red)'
    },
    label: {
      anchorLineStroke: 'var(--jp-red)'
    }
  }
}])`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
  styles: {
    label: {
      backgroundFill: '#98C8DF',
      showAnchorLine: false
    },
    circleSubject: {
      fill: '#98C8DF'
    },
    connector: {
      stroke: '#98C8DF'
    }
  }
}, {
  styles: {
    label: {
      backgroundFill: '#006DAB',
      fontColor: '#fff',
      showAnchorLine: false
    },
    circleSubject: {
      fill: '#006DAB'
    },
    connector: {
      stroke: '#006DAB'
    }
  }
}, {
  styles: {
    label: {
      backgroundFill: 'var(--jp-red)',
      showAnchorLine: false,
      fontColor: '#fff'
    },
    circleSubject: {
      fill: 'var(--jp-red)'
    },
    connector: {
      stroke: 'var(--jp-red)'
    }
  }
}])`,...T.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
  ...customTopAnnotationArgs
}, {
  ...customTopAnnotationArgs
}, {
  ...customBottomAnnotationArgs
}])`,...j.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => {
  // Use the first series data (New York)
  const fullSeries = {
    ...sampleData[0],
    options: {
      ...sampleData[0].options,
      gradient: {
        fromOpacity: 0,
        toOpacity: 0
      }
    }
  };

  // Create a highlighted middle portion (roughly from May to September)
  const highlightSeriesData = fullSeries.data.slice(4, 9); // Middle portion of the data

  // Calculate the min and max values to determine the gradient height
  const allValues = fullSeries.data.map(d => d.value);
  const highlightValues = highlightSeriesData.map(d => d.value);
  const chartMin = Math.min(...allValues);
  const chartMax = Math.max(...allValues);
  const chartRange = chartMax - chartMin;

  // Find the lowest point in the highlight series
  const highlightMin = Math.min(...highlightValues);

  // Calculate the percentage from bottom of chart to the lowest highlight point
  // This is where we want the gradient to stop
  const gradientStopPercentage = (highlightMin - chartMin) / chartRange * 100;

  // Since SVG gradients are top-to-bottom, we need to invert this
  const gradientCutoff = 100 - gradientStopPercentage;
  const highlightSeries = {
    ...fullSeries,
    group: 'new-york-highlight',
    label: 'Alert',
    data: highlightSeriesData,
    options: {
      stroke: 'var(--jp-red)',
      seriesLineStyle: {
        strokeWidth: 3
      },
      gradient: {
        stops: [{
          offset: '0%',
          opacity: 0.5
        }, {
          offset: \`\${gradientCutoff * 0.75}%\`,
          opacity: 0
        }, {
          offset: '100%',
          opacity: 0
        }]
      }
    }
  };

  // Find the peak in the highlighted series (July with value 27)
  const peakDatum = fullSeries.data[6]; // July - peak temperature

  return <LineChart {...args} smoothing={false} data={[fullSeries, highlightSeries]} withGradientFill={true} withStartGlyphs={true} withEndGlyphs={true} renderGlyph={renderAlertGlyph} glyphStyle={{
    radius: 8
  }}>
            <LineChart.AnnotationsOverlay>
                <LineChart.Annotation datum={peakDatum} title="Alert" subjectType="circle" styles={{
        circleSubject: {
          radius: 0
        },
        label: {
          showAnchorLine: false
        },
        connector: {
          stroke: 'transparent'
        }
      }} renderLabel={AlertIcon} renderLabelPopover={renderAlertLabelPopover} />
            </LineChart.AnnotationsOverlay>
        </LineChart>;
}`,...F.parameters?.docs?.source}}},I=[`Default`,`Vertical`,`Horizontal`,`Mixed`,`Colored`,`Custom`,`Alert`]}));L();export{F as Alert,T as Colored,j as Custom,_ as Default,x as Horizontal,C as Mixed,y as Vertical,I as __namedExportsOrder,m as default,L as n,f as t};