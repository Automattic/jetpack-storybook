"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7733],{"../charts/src/components/line-chart/stories/annotation.stories.tsx":(C,m,e)=>{e.r(m),e.d(m,{Colored:()=>l,Default:()=>o,Horizontal:()=>r,Mixed:()=>s,Vertical:()=>a,__namedExportsOrder:()=>g,default:()=>f});var b=e("../charts/src/components/line-chart/line-chart.tsx"),h=e("../charts/src/components/line-chart/stories/config.tsx"),i=e("../charts/src/components/line-chart/stories/sample-data.ts"),y=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),j=`import LineChart from '../line-chart';
import { lineChartMetaArgs, lineChartStoryArgs } from './config';
import sampleData from './sample-data';
import type { LineChartAnnotationProps } from '../line-chart-annotation';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

const meta: Meta< typeof LineChart > = {
	...lineChartMetaArgs,
	title: 'JS Packages/Charts/Types/Line Chart/Annotations',
} satisfies Meta< typeof LineChart >;

export default meta;

const Template: StoryFn< typeof LineChart > = args => <LineChart { ...args } />;

const annotations: LineChartAnnotationProps[] = [
	{
		datum: sampleData[ 0 ].data[ 10 ],
		title: 'Notable event',
		subtitle: 'This is a notable event',
	},
	{
		datum: sampleData[ 1 ].data[ sampleData[ 1 ].data.length - 10 ],
		title: 'Another notable event',
		subtitle: 'This is another notable event',
	},
	{
		datum: sampleData[ 2 ].data[ sampleData[ 2 ].data.length - 51 ],
		title: 'Concerning event',
		subtitle: 'This is a concerning event',
		styles: {
			circleSubject: {
				fill: 'var(--jp-red)',
			},
			label: {
				anchorLineStroke: 'var(--jp-red)',
			},
			connector: {
				stroke: 'var(--jp-red)',
			},
		},
	},
];

const annotationStoryArgs = {
	...lineChartStoryArgs,
	showLegend: true,
	annotations: [ ...annotations ],
};

export const Default: StoryObj< typeof LineChart > = Template.bind( {} );
Default.args = {
	...annotationStoryArgs,
};

export const Vertical: StoryObj< typeof LineChart > = Template.bind( {} );
Vertical.args = {
	...annotationStoryArgs,
	annotations: annotations.map( annotation => ( {
		...annotation,
		subjectType: 'line-vertical',
	} ) ),
};

export const Horizontal: StoryObj< typeof LineChart > = Template.bind( {} );
Horizontal.args = {
	...annotationStoryArgs,
	annotations: annotations.map( annotation => ( {
		...annotation,
		subjectType: 'line-horizontal',
	} ) ),
};

export const Mixed: StoryObj< typeof LineChart > = Template.bind( {} );
Mixed.args = {
	...annotationStoryArgs,
	annotations: annotations.map( ( annotation, index ) => {
		let subjectType;
		if ( index === 0 ) {
			subjectType = 'circle';
		} else if ( index === 1 ) {
			subjectType = 'line-vertical';
		} else {
			subjectType = 'line-horizontal';
		}
		return {
			...annotation,
			subjectType,
		};
	} ),
};

export const Colored: StoryObj< typeof LineChart > = Template.bind( {} );
Colored.args = {
	...annotationStoryArgs,
	annotations: [
		{
			...annotations[ 0 ],
			styles: {
				label: {
					backgroundFill: '#98C8DF',
					showAnchorLine: false,
				},
				circleSubject: {
					fill: '#98C8DF',
				},
				connector: {
					stroke: '#98C8DF',
				},
			},
		},
		{
			...annotations[ 1 ],
			styles: {
				label: {
					backgroundFill: '#006DAB',
					fontColor: '#fff',
					showAnchorLine: false,
				},
				circleSubject: {
					fill: '#006DAB',
				},
				connector: {
					stroke: '#006DAB',
				},
			},
		},
		{
			...annotations[ 2 ],
			styles: {
				label: {
					backgroundFill: 'var(--jp-red)',
					showAnchorLine: false,
					fontColor: '#fff',
				},
				circleSubject: {
					fill: 'var(--jp-red)',
				},
				connector: {
					stroke: 'var(--jp-red)',
				},
			},
		},
	],
};
`,L={Default:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},Vertical:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},Horizontal:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},Mixed:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},Colored:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}}};const f={parameters:{storySource:{source:`import LineChart from '../line-chart';
import { lineChartMetaArgs, lineChartStoryArgs } from './config';
import sampleData from './sample-data';
import { jsx as _jsx } from "react/jsx-runtime";
const meta = {
  ...lineChartMetaArgs,
  title: 'JS Packages/Charts/Types/Line Chart/Annotations'
};
export default meta;
const Template = args => /*#__PURE__*/_jsx(LineChart, {
  ...args
});
const annotations = [{
  datum: sampleData[0].data[10],
  title: 'Notable event',
  subtitle: 'This is a notable event'
}, {
  datum: sampleData[1].data[sampleData[1].data.length - 10],
  title: 'Another notable event',
  subtitle: 'This is another notable event'
}, {
  datum: sampleData[2].data[sampleData[2].data.length - 51],
  title: 'Concerning event',
  subtitle: 'This is a concerning event',
  styles: {
    circleSubject: {
      fill: 'var(--jp-red)'
    },
    label: {
      anchorLineStroke: 'var(--jp-red)'
    },
    connector: {
      stroke: 'var(--jp-red)'
    }
  }
}];
const annotationStoryArgs = {
  ...lineChartStoryArgs,
  showLegend: true,
  annotations: [...annotations]
};
export const Default = Template.bind({});
Default.args = {
  ...annotationStoryArgs
};
export const Vertical = Template.bind({});
Vertical.args = {
  ...annotationStoryArgs,
  annotations: annotations.map(annotation => ({
    ...annotation,
    subjectType: 'line-vertical'
  }))
};
export const Horizontal = Template.bind({});
Horizontal.args = {
  ...annotationStoryArgs,
  annotations: annotations.map(annotation => ({
    ...annotation,
    subjectType: 'line-horizontal'
  }))
};
export const Mixed = Template.bind({});
Mixed.args = {
  ...annotationStoryArgs,
  annotations: annotations.map((annotation, index) => {
    let subjectType;
    if (index === 0) {
      subjectType = 'circle';
    } else if (index === 1) {
      subjectType = 'line-vertical';
    } else {
      subjectType = 'line-horizontal';
    }
    return {
      ...annotation,
      subjectType
    };
  })
};
export const Colored = Template.bind({});
Colored.args = {
  ...annotationStoryArgs,
  annotations: [{
    ...annotations[0],
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
    ...annotations[1],
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
    ...annotations[2],
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
  }]
};`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},vertical:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},horizontal:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},mixed:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}},colored:{startLoc:{col:17,line:10},endLoc:{col:2,line:12},startBody:{col:17,line:10},endBody:{col:2,line:12}}}}},...h.N,title:"JS Packages/Charts/Types/Line Chart/Annotations"},c=n=>(0,y.jsx)(b.A,{...n}),t=[{datum:i.A[0].data[10],title:"Notable event",subtitle:"This is a notable event"},{datum:i.A[1].data[i.A[1].data.length-10],title:"Another notable event",subtitle:"This is another notable event"},{datum:i.A[2].data[i.A[2].data.length-51],title:"Concerning event",subtitle:"This is a concerning event",styles:{circleSubject:{fill:"var(--jp-red)"},label:{anchorLineStroke:"var(--jp-red)"},connector:{stroke:"var(--jp-red)"}}}],d={...h.p,showLegend:!0,annotations:[...t]},o=c.bind({});o.args={...d};const a=c.bind({});a.args={...d,annotations:t.map(n=>({...n,subjectType:"line-vertical"}))};const r=c.bind({});r.args={...d,annotations:t.map(n=>({...n,subjectType:"line-horizontal"}))};const s=c.bind({});s.args={...d,annotations:t.map((n,u)=>{let p;return u===0?p="circle":u===1?p="line-vertical":p="line-horizontal",{...n,subjectType:p}})};const l=c.bind({});l.args={...d,annotations:[{...t[0],styles:{label:{backgroundFill:"#98C8DF",showAnchorLine:!1},circleSubject:{fill:"#98C8DF"},connector:{stroke:"#98C8DF"}}},{...t[1],styles:{label:{backgroundFill:"#006DAB",fontColor:"#fff",showAnchorLine:!1},circleSubject:{fill:"#006DAB"},connector:{stroke:"#006DAB"}}},{...t[2],styles:{label:{backgroundFill:"var(--jp-red)",showAnchorLine:!1,fontColor:"#fff"},circleSubject:{fill:"var(--jp-red)"},connector:{stroke:"var(--jp-red)"}}}]};const g=["Default","Vertical","Horizontal","Mixed","Colored"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...o.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...a.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...r.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...s.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...l.parameters?.docs?.source}}}}}]);
