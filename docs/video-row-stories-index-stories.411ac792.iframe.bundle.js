"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7005],{"../../packages/videopress/src/client/admin/components/video-row/stories/index.stories.tsx":(k,i,t)=>{var p,s,u;t.r(i),t.d(i,{__namedExportsOrder:()=>b,_default:()=>e,default:()=>h});var c=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=t("../../packages/videopress/src/client/admin/components/video-row/index.tsx"),r=t("../../packages/videopress/src/client/admin/mock/index.ts"),d=t("../../packages/videopress/src/client/admin/components/video-row/style.module.scss"),o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=`import { useState } from 'react';
import { VideoRow } from '..';
import { postersArray, randomPoster } from '../../../mock';
import styles from '../style.module.scss';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Video Row',
	component: VideoRow,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		Story => (
			<div className={ styles[ 'storybook-wrapper' ] }>
				<Story />
			</div>
		),
	],
	argTypes: {
		id: {
			table: {
				disable: true,
			},
		},
		onSelect: {
			table: {
				disable: true,
			},
		},
		onVideoDetailsClick: {
			table: {
				disable: true,
			},
		},
		className: {
			table: {
				disable: true,
			},
		},
		checked: {
			table: {
				disable: true,
			},
		},
		thumbnail: {
			control: { type: 'select' },
			options: [ ...postersArray, 'none' ],
		},
	},
} as ComponentMeta< typeof VideoRow >;

const Template: ComponentStory< typeof VideoRow > = args => {
	if ( args.thumbnail === 'none' ) {
		args.thumbnail = null;
	}

	const [ checked, setChecked ] = useState( false );
	const onSelect = current => setChecked( current );
	return <VideoRow { ...args } checked={ checked } onSelect={ onSelect } />;
};

export const _default = Template.bind( {} );
_default.args = {
	id: 1,
	thumbnail: randomPoster(),
	actionButtonLabel: undefined,
	showThumbnail: true,
	title: 'videopress-upload-demo-7-mp4',
	duration: 158633,
	plays: 200,
	uploadDate: '2022-08-15T21:16:59+0000',
	isPrivate: true,
	showActionButton: true,
	showQuickActions: true,
	loading: false,
};
`,g={_default:{startLoc:{col:50,line:49},endLoc:{col:1,line:56},startBody:{col:50,line:49},endBody:{col:1,line:56}}};const h={title:"Packages/VideoPress/Video Row",component:a.$t,parameters:{storySource:{source:`import { useState } from 'react';
import { VideoRow } from '..';
import { postersArray, randomPoster } from '../../../mock';
import styles from '../style.module.scss';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'Packages/VideoPress/Video Row',
  component: VideoRow,
  parameters: {
    layout: 'centered'
  },
  decorators: [Story => <div className={styles['storybook-wrapper']}>
                <Story />
            </div>],
  argTypes: {
    id: {
      table: {
        disable: true
      }
    },
    onSelect: {
      table: {
        disable: true
      }
    },
    onVideoDetailsClick: {
      table: {
        disable: true
      }
    },
    className: {
      table: {
        disable: true
      }
    },
    checked: {
      table: {
        disable: true
      }
    },
    thumbnail: {
      control: {
        type: 'select'
      },
      options: [...postersArray, 'none']
    }
  }
} as ComponentMeta<typeof VideoRow>);
const Template: ComponentStory<typeof VideoRow> = args => {
  if (args.thumbnail === 'none') {
    args.thumbnail = null;
  }
  const [checked, setChecked] = useState(false);
  const onSelect = current => setChecked(current);
  return <VideoRow {...args} checked={checked} onSelect={onSelect} />;
};
export const _default = Template.bind({});
_default.args = {
  id: 1,
  thumbnail: randomPoster(),
  actionButtonLabel: undefined,
  showThumbnail: true,
  title: 'videopress-upload-demo-7-mp4',
  duration: 158633,
  plays: 200,
  uploadDate: '2022-08-15T21:16:59+0000',
  isPrivate: true,
  showActionButton: true,
  showQuickActions: true,
  loading: false
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => {\\n  if (args.thumbnail === 'none') {\\n    args.thumbnail = null;\\n  }\\n  const [checked, setChecked] = useState(false);\\n  const onSelect = current => setChecked(current);\\n  return <VideoRow {...args} checked={checked} onSelect={onSelect} />;\\n}",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:50,line:49},endLoc:{col:1,line:56},startBody:{col:50,line:49},endBody:{col:1,line:56}}}},layout:"centered"},decorators:[n=>(0,o.jsx)("div",{className:d.Z["storybook-wrapper"],children:(0,o.jsx)(n,{})})],argTypes:{id:{table:{disable:!0}},onSelect:{table:{disable:!0}},onVideoDetailsClick:{table:{disable:!0}},className:{table:{disable:!0}},checked:{table:{disable:!0}},thumbnail:{control:{type:"select"},options:[...r.Pe,"none"]}}},l=n=>{n.thumbnail==="none"&&(n.thumbnail=null);const[y,f]=(0,c.useState)(!1),v=T=>f(T);return(0,o.jsx)(a.$t,{...n,checked:y,onSelect:v})};l.displayName="Template";const e=l.bind({});e.args={id:1,thumbnail:(0,r.u8)(),actionButtonLabel:void 0,showThumbnail:!0,title:"videopress-upload-demo-7-mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,showActionButton:!0,showQuickActions:!0,loading:!1},e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  if (args.thumbnail === 'none') {
    args.thumbnail = null;
  }
  const [checked, setChecked] = useState(false);
  const onSelect = current => setChecked(current);
  return <VideoRow {...args} checked={checked} onSelect={onSelect} />;
}`,...(u=(s=e.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const b=["_default"]},"../../packages/videopress/src/client/admin/mock/index.ts":(k,i,t)=>{t.d(i,{Pe:()=>s,u8:()=>u,Ls:()=>n});const c=t.p+"static/media/poster-01.e425b62f.png",a=t.p+"static/media/poster-02.4d95eeca.png",r=t.p+"static/media/poster-03.67dd0ba6.png",d=t.p+"static/media/poster-04.00d054fc.png",o=t.p+"static/media/poster-05.65d90662.png",m=t.p+"static/media/poster-06.f1998769.png",g=t.p+"static/media/poster-square-01.e57fbdc5.jpg",h=t.p+"static/media/poster-square-02.5838ae36.jpg",l=t.p+"static/media/poster-square-03.4b398263.jpg",e=t.p+"static/media/poster-square-04.27e08295.jpg",b=t.p+"static/media/poster-square-05.acebfa62.jpg",p=t.p+"static/media/poster-square-06.941b0f4d.jpg",s=[c,a,r,d,o,m,g,h,l,e,b,p];function u(){const f=s.length-1,v=Math.floor(Math.random()*(f+1));return s[v]}const n=[{id:1,posterImage:c,videoTitle:"JPD Meetup - Barcelona",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:2,posterImage:a,videoTitle:"Dope Office Setup",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:3,posterImage:r,videoTitle:"Geneva Wheel",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:4,posterImage:d,videoTitle:"linear-x-02.mov",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:5,posterImage:o,videoTitle:"Random Objects",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:6,posterImage:m,videoTitle:"office-tour-experiment.mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"}],y=[{id:1,videoTitle:"time-clock-v2-05.mp4",uploadDate:"2022-08-15T21:16:59+0000"},{id:2,videoTitle:"Barcelona Tour",uploadDate:"2022-08-15T21:16:59+0000"},{id:3,videoTitle:"Mountain Dew Creative",uploadDate:"2022-08-15T21:16:59+0000"},{id:4,videoTitle:"2021 Reel",uploadDate:"2022-08-15T21:16:59+0000"}]}}]);})();
