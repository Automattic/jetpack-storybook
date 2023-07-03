(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3927],{"../../../node_modules/.pnpm/@wordpress+compose@6.12.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":(p,_,s)=>{"use strict";s.d(_,{Z:()=>c});var e=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function a(m){return m&&typeof window!="undefined"&&typeof window.matchMedia=="function"?window.matchMedia(m):null}function c(m){const n=(0,e.useMemo)(()=>{const i=a(m);return{subscribe(l){return i?(i.addEventListener("change",l),()=>{i.removeEventListener("change",l)}):()=>{}},getValue(){var l;return(l=i==null?void 0:i.matches)!==null&&l!==void 0?l:!1}}},[m]);return(0,e.useSyncExternalStore)(n.subscribe,n.getValue,()=>!1)}},"../components/components/layout/stories/index.stories.tsx":(p,_,s)=>{var v,S,E,I,O,P;"use strict";s.r(_),s.d(_,{BreakpointMatch:()=>r,Default:()=>g,__namedExportsOrder:()=>f,default:()=>d});var e=s("../components/components/text/index.tsx"),a=s("../components/components/layout/col/index.tsx"),c=s("../components/components/layout/container/index.tsx"),m=s("../components/components/layout/use-breakpoint-match/index.ts"),n=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=s.n(n),l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/stories/styles.module.scss"),x={};x.insert="head",x.singleton=!1;var u=i()(l.Z,x);const o=l.Z.locals||{};var t=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),y=`import Text from '../../text';
import Col from '../col';
import Container from '../container';
import useBreakpointMatch from '../use-breakpoint-match';
import styles from './styles.module.scss';

const Layout = ( { items, fluid, horizontalGap, horizontalSpacing } ) => {
	return (
		<Container
			className={ styles.container }
			horizontalSpacing={ horizontalSpacing }
			fluid={ fluid }
			horizontalGap={ horizontalGap }
		>
			{ items.map( ( { sm, lg, md }, idx ) => {
				const smText = Number.isInteger( sm?.start ) ? JSON.stringify( sm ) : sm;
				const mdText = Number.isInteger( md?.start ) ? JSON.stringify( md ) : md;
				const lgText = Number.isInteger( lg?.start ) ? JSON.stringify( lg ) : lg;

				return (
					<Col
						sm={ sm }
						md={ md }
						lg={ lg }
						className={ styles.col }
						key={ \`\${ smText }\${ mdText }\${ lgText }\${ idx }\` }
					>
						{ sm ? \`sm=\${ smText } \` : '' }
						{ md ? \`md=\${ mdText } \` : '' }
						{ lg ? \`lg=\${ lgText } \` : '' }
					</Col>
				);
			} ) }
			<Col>
				<Container fluid horizontalSpacing={ 0 } horizontalGap={ 1 }>
					<Col className={ styles.col }>Composition Example</Col>
					<Col className={ styles.col }>Composition Example</Col>
				</Container>
			</Col>
		</Container>
	);
};

export default {
	title: 'JS Packages/Components/Layout',
	component: Layout,
};

const Template = args => <Layout { ...args } />;
export const Default = Template.bind( {} );
Default.args = {
	fluid: false,
	horizontalSpacing: 10,
	horizontalGap: 5,
	items: [
		{
			sm: 2,
			md: 5,
			lg: 4,
		},
		{
			sm: 2,
			md: 3,
			lg: { start: 6, end: 12 },
		},
		{
			sm: 2,
			md: 3,
			lg: 6,
		},
		{
			sm: 2,
			md: 5,
			lg: { start: 9, end: 12 },
		},
		{
			sm: 2,
			md: 5,
			lg: 4,
		},
		{
			sm: 2,
			md: 3,
			lg: 8,
		},
	],
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const BreakpointMatch = args => {
	const [ isSm, isGtSm, isMd, isLtOrMd, isLtMd, isGtOrMd, isGtMd, isLessThanLg, isLg ] =
		useBreakpointMatch(
			[ 'sm', 'sm', 'md', 'md', 'md', 'md', 'md', 'lg', 'lg' ],
			[ null, '>', null, '<=', '<', '>=', '>', '<', null ]
		);

	return (
		<Container>
			{ /* SMALL */ }
			<Text variant="headline-small">Small</Text>
			<Col>
				<Text variant="title-small">Is Small</Text>
				<Text className={ isSm ? styles.yes : styles.no }>{ isSm ? 'Yes' : 'False' }</Text>
			</Col>
			<Col>
				<Text variant="title-small">Is greater than Small</Text>
				<Text className={ isGtSm ? styles.yes : styles.no }>{ isGtSm ? 'Yes' : 'False' }</Text>
			</Col>
			{ /* MEDIUM */ }
			<Text variant="headline-small">Medium</Text>
			<Col>
				<Text variant="title-small">Is Medium</Text>
				<Text className={ isMd ? styles.yes : styles.no }>{ isMd ? 'Yes' : 'False' }</Text>
			</Col>
			<Col>
				<Text variant="title-small">Is less then Medium</Text>
				<Text className={ isLtMd ? styles.yes : styles.no }>{ isLtMd ? 'Yes' : 'False' }</Text>
			</Col>
			<Col>
				<Text variant="title-small">Is less then OR Medium</Text>
				<Text className={ isLtOrMd ? styles.yes : styles.no }>{ isLtOrMd ? 'Yes' : 'False' }</Text>
			</Col>
			<Col>
				<Text variant="title-small">Is greater then Medium</Text>
				<Text className={ isGtMd ? styles.yes : styles.no }>{ isGtMd ? 'Yes' : 'False' }</Text>
			</Col>
			<Col>
				<Text variant="title-small">Is greater then OR Medium</Text>
				<Text className={ isGtOrMd ? styles.yes : styles.no }>{ isGtOrMd ? 'Yes' : 'False' }</Text>
			</Col>
			{ /* LARGE */ }
			<Text variant="headline-small">Large</Text>
			<Col>
				<Text variant="title-small">Is Large</Text>
				<Text className={ isLg ? styles.yes : styles.no }>{ isLg ? 'Yes' : 'False' }</Text>
			</Col>
			<Col>
				<Text variant="title-small">Is less than Large</Text>
				<Text className={ isLessThanLg ? styles.yes : styles.no }>
					{ isLessThanLg ? 'Yes' : 'False' }
				</Text>
			</Col>
		</Container>
	);
};
`,h={Default:{startLoc:{col:17,line:39},endLoc:{col:45,line:39},startBody:{col:17,line:39},endBody:{col:45,line:39}},BreakpointMatch:{startLoc:{col:31,line:79},endLoc:{col:1,line:127},startBody:{col:31,line:79},endBody:{col:1,line:127}}};const T=N=>{let{items:D,fluid:b,horizontalGap:A,horizontalSpacing:B}=N;return(0,t.jsxs)(c.Z,{className:o.container,horizontalSpacing:B,fluid:b,horizontalGap:A,children:[D.map((k,Y)=>{let{sm:C,lg:j,md:L}=k;const w=Number.isInteger(C==null?void 0:C.start)?JSON.stringify(C):C,U=Number.isInteger(L==null?void 0:L.start)?JSON.stringify(L):L,Z=Number.isInteger(j==null?void 0:j.start)?JSON.stringify(j):j;return(0,t.jsxs)(a.Z,{sm:C,md:L,lg:j,className:o.col,children:[C?`sm=${w} `:"",L?`md=${U} `:"",j?`lg=${Z} `:""]},`${w}${U}${Z}${Y}`)}),(0,t.jsx)(a.Z,{children:(0,t.jsxs)(c.Z,{fluid:!0,horizontalSpacing:0,horizontalGap:1,children:[(0,t.jsx)(a.Z,{className:o.col,children:"Composition Example"}),(0,t.jsx)(a.Z,{className:o.col,children:"Composition Example"})]})})]})};T.displayName="Layout";const d={parameters:{storySource:{source:`import Text from '../../text';
import Col from '../col';
import Container from '../container';
import useBreakpointMatch from '../use-breakpoint-match';
import styles from './styles.module.scss';
const Layout = ({
  items,
  fluid,
  horizontalGap,
  horizontalSpacing
}) => {
  return <Container className={styles.container} horizontalSpacing={horizontalSpacing} fluid={fluid} horizontalGap={horizontalGap}>
            {items.map(({
      sm,
      lg,
      md
    }, idx) => {
      const smText = Number.isInteger(sm?.start) ? JSON.stringify(sm) : sm;
      const mdText = Number.isInteger(md?.start) ? JSON.stringify(md) : md;
      const lgText = Number.isInteger(lg?.start) ? JSON.stringify(lg) : lg;
      return <Col sm={sm} md={md} lg={lg} className={styles.col} key={\`\${smText}\${mdText}\${lgText}\${idx}\`}>
                        {sm ? \`sm=\${smText} \` : ''}
                        {md ? \`md=\${mdText} \` : ''}
                        {lg ? \`lg=\${lgText} \` : ''}
                    </Col>;
    })}
            <Col>
                <Container fluid horizontalSpacing={0} horizontalGap={1}>
                    <Col className={styles.col}>Composition Example</Col>
                    <Col className={styles.col}>Composition Example</Col>
                </Container>
            </Col>
        </Container>;
};
export default {
  title: 'JS Packages/Components/Layout',
  component: Layout
};
const Template = args => <Layout {...args} />;
export const Default = Template.bind({});
Default.args = {
  fluid: false,
  horizontalSpacing: 10,
  horizontalGap: 5,
  items: [{
    sm: 2,
    md: 5,
    lg: 4
  }, {
    sm: 2,
    md: 3,
    lg: {
      start: 6,
      end: 12
    }
  }, {
    sm: 2,
    md: 3,
    lg: 6
  }, {
    sm: 2,
    md: 5,
    lg: {
      start: 9,
      end: 12
    }
  }, {
    sm: 2,
    md: 5,
    lg: 4
  }, {
    sm: 2,
    md: 3,
    lg: 8
  }]
};


export const BreakpointMatch = args => {
  const [isSm, isGtSm, isMd, isLtOrMd, isLtMd, isGtOrMd, isGtMd, isLessThanLg, isLg] = useBreakpointMatch(['sm', 'sm', 'md', 'md', 'md', 'md', 'md', 'lg', 'lg'], [null, '>', null, '<=', '<', '>=', '>', '<', null]);
  return <Container>
            {/* SMALL */}
            <Text variant="headline-small">Small</Text>
            <Col>
                <Text variant="title-small">Is Small</Text>
                <Text className={isSm ? styles.yes : styles.no}>{isSm ? 'Yes' : 'False'}</Text>
            </Col>
            <Col>
                <Text variant="title-small">Is greater than Small</Text>
                <Text className={isGtSm ? styles.yes : styles.no}>{isGtSm ? 'Yes' : 'False'}</Text>
            </Col>
            {/* MEDIUM */}
            <Text variant="headline-small">Medium</Text>
            <Col>
                <Text variant="title-small">Is Medium</Text>
                <Text className={isMd ? styles.yes : styles.no}>{isMd ? 'Yes' : 'False'}</Text>
            </Col>
            <Col>
                <Text variant="title-small">Is less then Medium</Text>
                <Text className={isLtMd ? styles.yes : styles.no}>{isLtMd ? 'Yes' : 'False'}</Text>
            </Col>
            <Col>
                <Text variant="title-small">Is less then OR Medium</Text>
                <Text className={isLtOrMd ? styles.yes : styles.no}>{isLtOrMd ? 'Yes' : 'False'}</Text>
            </Col>
            <Col>
                <Text variant="title-small">Is greater then Medium</Text>
                <Text className={isGtMd ? styles.yes : styles.no}>{isGtMd ? 'Yes' : 'False'}</Text>
            </Col>
            <Col>
                <Text variant="title-small">Is greater then OR Medium</Text>
                <Text className={isGtOrMd ? styles.yes : styles.no}>{isGtOrMd ? 'Yes' : 'False'}</Text>
            </Col>
            {/* LARGE */}
            <Text variant="headline-small">Large</Text>
            <Col>
                <Text variant="title-small">Is Large</Text>
                <Text className={isLg ? styles.yes : styles.no}>{isLg ? 'Yes' : 'False'}</Text>
            </Col>
            <Col>
                <Text variant="title-small">Is less than Large</Text>
                <Text className={isLessThanLg ? styles.yes : styles.no}>
                    {isLessThanLg ? 'Yes' : 'False'}
                </Text>
            </Col>
        </Container>;
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <Layout {...args} />",
      ...Default.parameters?.docs?.source
    }
  }
};
BreakpointMatch.parameters = {
  ...BreakpointMatch.parameters,
  docs: {
    ...BreakpointMatch.parameters?.docs,
    source: {
      originalSource: "args => {\\n  const [isSm, isGtSm, isMd, isLtOrMd, isLtMd, isGtOrMd, isGtMd, isLessThanLg, isLg] = useBreakpointMatch(['sm', 'sm', 'md', 'md', 'md', 'md', 'md', 'lg', 'lg'], [null, '>', null, '<=', '<', '>=', '>', '<', null]);\\n  return <Container>\\n            {/* SMALL */}\\n            <Text variant=\\"headline-small\\">Small</Text>\\n            <Col>\\n                <Text variant=\\"title-small\\">Is Small</Text>\\n                <Text className={isSm ? styles.yes : styles.no}>{isSm ? 'Yes' : 'False'}</Text>\\n            </Col>\\n            <Col>\\n                <Text variant=\\"title-small\\">Is greater than Small</Text>\\n                <Text className={isGtSm ? styles.yes : styles.no}>{isGtSm ? 'Yes' : 'False'}</Text>\\n            </Col>\\n            {/* MEDIUM */}\\n            <Text variant=\\"headline-small\\">Medium</Text>\\n            <Col>\\n                <Text variant=\\"title-small\\">Is Medium</Text>\\n                <Text className={isMd ? styles.yes : styles.no}>{isMd ? 'Yes' : 'False'}</Text>\\n            </Col>\\n            <Col>\\n                <Text variant=\\"title-small\\">Is less then Medium</Text>\\n                <Text className={isLtMd ? styles.yes : styles.no}>{isLtMd ? 'Yes' : 'False'}</Text>\\n            </Col>\\n            <Col>\\n                <Text variant=\\"title-small\\">Is less then OR Medium</Text>\\n                <Text className={isLtOrMd ? styles.yes : styles.no}>{isLtOrMd ? 'Yes' : 'False'}</Text>\\n            </Col>\\n            <Col>\\n                <Text variant=\\"title-small\\">Is greater then Medium</Text>\\n                <Text className={isGtMd ? styles.yes : styles.no}>{isGtMd ? 'Yes' : 'False'}</Text>\\n            </Col>\\n            <Col>\\n                <Text variant=\\"title-small\\">Is greater then OR Medium</Text>\\n                <Text className={isGtOrMd ? styles.yes : styles.no}>{isGtOrMd ? 'Yes' : 'False'}</Text>\\n            </Col>\\n            {/* LARGE */}\\n            <Text variant=\\"headline-small\\">Large</Text>\\n            <Col>\\n                <Text variant=\\"title-small\\">Is Large</Text>\\n                <Text className={isLg ? styles.yes : styles.no}>{isLg ? 'Yes' : 'False'}</Text>\\n            </Col>\\n            <Col>\\n                <Text variant=\\"title-small\\">Is less than Large</Text>\\n                <Text className={isLessThanLg ? styles.yes : styles.no}>\\n                    {isLessThanLg ? 'Yes' : 'False'}\\n                </Text>\\n            </Col>\\n        </Container>;\\n}",
      ...BreakpointMatch.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:39},endLoc:{col:45,line:39},startBody:{col:17,line:39},endBody:{col:45,line:39}},"breakpoint-match":{startLoc:{col:31,line:79},endLoc:{col:1,line:127},startBody:{col:31,line:79},endBody:{col:1,line:127}}}}},title:"JS Packages/Components/Layout",component:T},M=N=>(0,t.jsx)(T,{...N});M.displayName="Template";const g=M.bind({});g.args={fluid:!1,horizontalSpacing:10,horizontalGap:5,items:[{sm:2,md:5,lg:4},{sm:2,md:3,lg:{start:6,end:12}},{sm:2,md:3,lg:6},{sm:2,md:5,lg:{start:9,end:12}},{sm:2,md:5,lg:4},{sm:2,md:3,lg:8}]};const r=N=>{const[D,b,A,B,k,Y,C,j,L]=(0,m.Z)(["sm","sm","md","md","md","md","md","lg","lg"],[null,">",null,"<=","<",">=",">","<",null]);return(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(e.ZP,{variant:"headline-small",children:"Small"}),(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(e.ZP,{variant:"title-small",children:"Is Small"}),(0,t.jsx)(e.ZP,{className:D?o.yes:o.no,children:D?"Yes":"False"})]}),(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(e.ZP,{variant:"title-small",children:"Is greater than Small"}),(0,t.jsx)(e.ZP,{className:b?o.yes:o.no,children:b?"Yes":"False"})]}),(0,t.jsx)(e.ZP,{variant:"headline-small",children:"Medium"}),(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(e.ZP,{variant:"title-small",children:"Is Medium"}),(0,t.jsx)(e.ZP,{className:A?o.yes:o.no,children:A?"Yes":"False"})]}),(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(e.ZP,{variant:"title-small",children:"Is less then Medium"}),(0,t.jsx)(e.ZP,{className:k?o.yes:o.no,children:k?"Yes":"False"})]}),(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(e.ZP,{variant:"title-small",children:"Is less then OR Medium"}),(0,t.jsx)(e.ZP,{className:B?o.yes:o.no,children:B?"Yes":"False"})]}),(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(e.ZP,{variant:"title-small",children:"Is greater then Medium"}),(0,t.jsx)(e.ZP,{className:C?o.yes:o.no,children:C?"Yes":"False"})]}),(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(e.ZP,{variant:"title-small",children:"Is greater then OR Medium"}),(0,t.jsx)(e.ZP,{className:Y?o.yes:o.no,children:Y?"Yes":"False"})]}),(0,t.jsx)(e.ZP,{variant:"headline-small",children:"Large"}),(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(e.ZP,{variant:"title-small",children:"Is Large"}),(0,t.jsx)(e.ZP,{className:L?o.yes:o.no,children:L?"Yes":"False"})]}),(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(e.ZP,{variant:"title-small",children:"Is less than Large"}),(0,t.jsx)(e.ZP,{className:j?o.yes:o.no,children:j?"Yes":"False"})]})]})};r.displayName="BreakpointMatch",g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:"args => <Layout {...args} />",...(E=(S=g.parameters)==null?void 0:S.docs)==null?void 0:E.source}}},r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const [isSm, isGtSm, isMd, isLtOrMd, isLtMd, isGtOrMd, isGtMd, isLessThanLg, isLg] = useBreakpointMatch(['sm', 'sm', 'md', 'md', 'md', 'md', 'md', 'lg', 'lg'], [null, '>', null, '<=', '<', '>=', '>', '<', null]);
  return <Container>
            {/* SMALL */}
            <Text variant="headline-small">Small</Text>
            <Col>
                <Text variant="title-small">Is Small</Text>
                <Text className={isSm ? styles.yes : styles.no}>{isSm ? 'Yes' : 'False'}</Text>
            </Col>
            <Col>
                <Text variant="title-small">Is greater than Small</Text>
                <Text className={isGtSm ? styles.yes : styles.no}>{isGtSm ? 'Yes' : 'False'}</Text>
            </Col>
            {/* MEDIUM */}
            <Text variant="headline-small">Medium</Text>
            <Col>
                <Text variant="title-small">Is Medium</Text>
                <Text className={isMd ? styles.yes : styles.no}>{isMd ? 'Yes' : 'False'}</Text>
            </Col>
            <Col>
                <Text variant="title-small">Is less then Medium</Text>
                <Text className={isLtMd ? styles.yes : styles.no}>{isLtMd ? 'Yes' : 'False'}</Text>
            </Col>
            <Col>
                <Text variant="title-small">Is less then OR Medium</Text>
                <Text className={isLtOrMd ? styles.yes : styles.no}>{isLtOrMd ? 'Yes' : 'False'}</Text>
            </Col>
            <Col>
                <Text variant="title-small">Is greater then Medium</Text>
                <Text className={isGtMd ? styles.yes : styles.no}>{isGtMd ? 'Yes' : 'False'}</Text>
            </Col>
            <Col>
                <Text variant="title-small">Is greater then OR Medium</Text>
                <Text className={isGtOrMd ? styles.yes : styles.no}>{isGtOrMd ? 'Yes' : 'False'}</Text>
            </Col>
            {/* LARGE */}
            <Text variant="headline-small">Large</Text>
            <Col>
                <Text variant="title-small">Is Large</Text>
                <Text className={isLg ? styles.yes : styles.no}>{isLg ? 'Yes' : 'False'}</Text>
            </Col>
            <Col>
                <Text variant="title-small">Is less than Large</Text>
                <Text className={isLessThanLg ? styles.yes : styles.no}>
                    {isLessThanLg ? 'Yes' : 'False'}
                </Text>
            </Col>
        </Container>;
}`,...(P=(O=r.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const f=["Default","BreakpointMatch"];try{r.displayName="BreakpointMatch",r.__docgenInfo={description:"",displayName:"BreakpointMatch",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/layout/stories/index.stories.tsx#BreakpointMatch"]={docgenInfo:r.__docgenInfo,name:"BreakpointMatch",path:"../components/components/layout/stories/index.stories.tsx#BreakpointMatch"})}catch(N){}},"../components/components/layout/col/index.tsx":(p,_,s)=>{"use strict";s.d(_,{Z:()=>T});var e=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),a=s.n(e),c=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=s.n(m),i=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss"),l={};l.insert="head",l.singleton=!1;var x=n()(i.Z,l);const u=i.Z.locals||{},o=Number(u.smCols),t=Number(u.mdCols),y=Number(u.lgCols),T=d=>{const{children:M,tagName:g="div",className:r}=d,f=Math.min(o,typeof d.sm=="number"?d.sm:o),v=Math.min(o,typeof d.sm=="object"?d.sm.start:0),S=Math.min(o,typeof d.sm=="object"?d.sm.end:0),E=Math.min(t,typeof d.md=="number"?d.md:t),I=Math.min(t,typeof d.md=="object"?d.md.start:0),O=Math.min(t,typeof d.md=="object"?d.md.end:0),P=Math.min(y,typeof d.lg=="number"?d.lg:y),N=Math.min(y,typeof d.lg=="object"?d.lg.start:0),D=Math.min(y,typeof d.lg=="object"?d.lg.end:0),b=a()(r,{[u[`col-sm-${f}`]]:!(v&&S),[u[`col-sm-${v}-start`]]:v>0,[u[`col-sm-${S}-end`]]:S>0,[u[`col-md-${E}`]]:!(I&&O),[u[`col-md-${I}-start`]]:I>0,[u[`col-md-${O}-end`]]:O>0,[u[`col-lg-${P}`]]:!(N&&D),[u[`col-lg-${N}-start`]]:N>0,[u[`col-lg-${D}-end`]]:D>0});return(0,c.createElement)(g,{className:b},M)}},"../components/components/layout/container/index.tsx":(p,_,s)=>{"use strict";s.d(_,{Z:()=>t});var e=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),a=s.n(e),c=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=s.n(m),i=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss"),l={};l.insert="head",l.singleton=!1;var x=n()(i.Z,l);const u=i.Z.locals||{},t=y=>{let{children:h,fluid:T=!1,tagName:d="div",className:M,horizontalGap:g=1,horizontalSpacing:r=1}=y;const f=(0,c.useMemo)(()=>{const S=`calc( var(--horizontal-spacing) * ${r} )`,E=`calc( var(--horizontal-spacing) * ${g} )`;return{paddingTop:S,paddingBottom:S,rowGap:E}},[g,r]),v=a()(M,u.container,{[u.fluid]:T});return(0,c.createElement)(d,{className:v,style:f},h)}},"../components/components/layout/use-breakpoint-match/index.ts":(p,_,s)=>{"use strict";s.d(_,{Z:()=>t});var e=s("../../../node_modules/.pnpm/@wordpress+compose@6.12.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),a=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=s.n(a),m=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),n={};n.insert="head",n.singleton=!1;var i=c()(m.Z,n);const l=m.Z.locals||{},x=["sm","md","lg"],u=(y,h,T)=>{const d=x.indexOf(y),M=d+1,g=h.includes("=");let r=[];return h.startsWith("<")&&(r=x.slice(0,g?M:d)),h.startsWith(">")&&(r=x.slice(g?d:M)),r!=null&&r.length?r.some(f=>T[f]):T[y]},t=(y,h)=>{const T=Array.isArray(y)?y:[y],d=Array.isArray(h)?h:[h],[M,g,r]=x,f=(0,e.Z)(l[M]),v=(0,e.Z)(l[g]),S=(0,e.Z)(l[r]),E={sm:f,md:v,lg:S};return T.map((I,O)=>{const P=d[O];return P?u(I,P,E):E[I]})}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(p,_)=>{var s,e;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var a={}.hasOwnProperty,c="[native code]";function m(){for(var n=[],i=0;i<arguments.length;i++){var l=arguments[i];if(l){var x=typeof l;if(x==="string"||x==="number")n.push(l);else if(Array.isArray(l)){if(l.length){var u=m.apply(null,l);u&&n.push(u)}}else if(x==="object"){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){n.push(l.toString());continue}for(var o in l)a.call(l,o)&&l[o]&&n.push(o)}}}return n.join(" ")}p.exports?(m.default=m,p.exports=m):(s=[],e=function(){return m}.apply(_,s),e!==void 0&&(p.exports=e))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(p,_,s)=>{"use strict";s.d(_,{Z:()=>i});var e=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=s.n(e),c=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),m=s.n(c),n=m()(a());n.push([p.id,"",""]),n.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const i=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss":(p,_,s)=>{"use strict";s.d(_,{Z:()=>i});var e=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=s.n(e),c=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),m=s.n(c),n=m()(a());n.push([p.id,"@media(max-width: 599px){.TNVxw_ZOJEEynDiM2QYM{grid-column-end:span 1}.Ks8DhEoe0M2rg7i8Qcos{grid-column-start:1}.hPWQqxgVUkTp5NQqrfIn{grid-column-end:2}.H1CbUDrI72aXZoHz2P6C{grid-column-end:span 2}.xyTGpD3bVBInLbgP2lMK{grid-column-start:2}.pEBM8SUyhDj4XyIAYiAq{grid-column-end:3}.xbDPzcogSD2JnGmDyiWZ{grid-column-end:span 3}.fooSursJQahboNx68m3R{grid-column-start:3}.ufTVtUIEIdl9sKOoDgNi{grid-column-end:4}.dwPTqpku444IkQCTeDyr{grid-column-end:span 4}.TpMbkMlo3BQATa8vlznp{grid-column-start:4}.WqNt7hKsjzie3UHqUDJ3{grid-column-end:5}}@media(min-width: 600px)and (max-width: 959px){.FIPb1cviSpE3bfv7tgh7{grid-column-end:span 1}.gJ3mUUPEUQSOLyVyzgLR{grid-column-start:1}.heLAMmYtuFGNteEBNd_K{grid-column-end:2}._Z6bV0ViNirPwmUfTUPc{grid-column-end:span 2}.TtipIIkNLkoby9hzkg2g{grid-column-start:2}.eZ7EWTzJ0eyiwaX80vF7{grid-column-end:3}.BPB1lJYdD9ZF06iU4JqN{grid-column-end:span 3}.mqdtFrxVPqGF69R0ve5t{grid-column-start:3}.W2xRsVUNx4v0bnLZkmLf{grid-column-end:4}.brzzMXJ7uTSUxLhuHlvO{grid-column-end:span 4}.Ua3ENGWSij5OPxJjU4YQ{grid-column-start:4}.Lege9ZfULqw4bTPSEzBT{grid-column-end:5}.R7e1X1OppSwNk7pM_UsU{grid-column-end:span 5}.RXH55oeqA0tzBC268Vvn{grid-column-start:5}.yUqSSBRI2Ba4GULTKEo5{grid-column-end:6}.zgIeYtocCoyRpWMLoA8j{grid-column-end:span 6}.SJgsi7ohYrB9Suu2lwKQ{grid-column-start:6}.evXJXU4ZVmaU3fHbNShw{grid-column-end:7}.OvJtAyKa4CnaJTxrWULN{grid-column-end:span 7}.Tdncikb2MHUB9M8_pzrz{grid-column-start:7}.SznBcu1iExeI62bDI2fv{grid-column-end:8}.dMfdjRo9r2UqnWUO7K7j{grid-column-end:span 8}.RZ8AuwBi2INOYbA3GNes{grid-column-start:8}.gd_tTH3gswBbD0luK4cg{grid-column-end:9}}@media(min-width: 960px){.xOPnT0A5q3l85vlYlB4Z{grid-column-end:span 1}.fYBJDNQ9E5_5wrdSOMHV{grid-column-start:1}.CuviEyxy4A5nI6ZgqQWU{grid-column-end:2}.zir7Y2inBNCuoM331HQS{grid-column-end:span 2}.hneE2V6DFFUK7Z2VlP1k{grid-column-start:2}.JdqTodnmzgM8fNPWGYsD{grid-column-end:3}.pfCLtxtdyfzqKtptYkey{grid-column-end:span 3}.qdvpCh5XwqZBTSQZriSu{grid-column-start:3}.EdkicJW5QtuFGwEtbRrD{grid-column-end:4}.VBsWJStlfQs3FFFuLJgp{grid-column-end:span 4}.TMMxlyKjw7uAASuXktdd{grid-column-start:4}.yOdXvT2PcHRSEAb64oQ5{grid-column-end:5}.k4m90rwEinnOv4X9wCUo{grid-column-end:span 5}.vRMTlNglaIKviScEPcj2{grid-column-start:5}.HJr5rbm2AYnx5iq6yjYw{grid-column-end:6}.f3Wlyk_5EPtXwRmju9bu{grid-column-end:span 6}.DuySSESVIp5ulLCI7gDZ{grid-column-start:6}.YxyyciwGy6DD9y7D7_RA{grid-column-end:7}.T09hcaBcvJppEI8fkeob{grid-column-end:span 7}.sfHLOAucQPyThoatcJlb{grid-column-start:7}.ugj03iSq_LpMPjktSIwW{grid-column-end:8}.O5lpDYm2qg9VuumTrrEw{grid-column-end:span 8}.TLrJVaWtw1Dsta_v5JcP{grid-column-start:8}.OqZ0YRgBvvTNJjsWS7pb{grid-column-end:9}.qr94d82SNkd1ExXHZPJq{grid-column-end:span 9}.H7dCJfM9V64l4aJI2aYD{grid-column-start:9}.xgcnaSvEwWA7naPdo1Q7{grid-column-end:10}.joclYxhsEaNNF4bUW_ue{grid-column-end:span 10}.DKuepavoRxT2sWRScNUO{grid-column-start:10}.LeArlDExZKDiDVBz9j2H{grid-column-end:11}.jhzmR1UDav7Cr1C83NGQ{grid-column-end:span 11}.qeM8lIjXYZiST414vxJk{grid-column-start:11}.sHBullB2KBN_dcAHo02k{grid-column-end:12}.UasosPijxHsKZnWpd0mT{grid-column-end:span 12}.pPlntrGl3JYhJi4XVrGp{grid-column-start:12}.hLgosun56kR2j4m1OdkM{grid-column-end:13}}",""]),n.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",smCols:"4",mdCols:"8",lgCols:"12","col-sm-1":"TNVxw_ZOJEEynDiM2QYM","col-sm-1-start":"Ks8DhEoe0M2rg7i8Qcos","col-sm-1-end":"hPWQqxgVUkTp5NQqrfIn","col-sm-2":"H1CbUDrI72aXZoHz2P6C","col-sm-2-start":"xyTGpD3bVBInLbgP2lMK","col-sm-2-end":"pEBM8SUyhDj4XyIAYiAq","col-sm-3":"xbDPzcogSD2JnGmDyiWZ","col-sm-3-start":"fooSursJQahboNx68m3R","col-sm-3-end":"ufTVtUIEIdl9sKOoDgNi","col-sm-4":"dwPTqpku444IkQCTeDyr","col-sm-4-start":"TpMbkMlo3BQATa8vlznp","col-sm-4-end":"WqNt7hKsjzie3UHqUDJ3","col-md-1":"FIPb1cviSpE3bfv7tgh7","col-md-1-start":"gJ3mUUPEUQSOLyVyzgLR","col-md-1-end":"heLAMmYtuFGNteEBNd_K","col-md-2":"_Z6bV0ViNirPwmUfTUPc","col-md-2-start":"TtipIIkNLkoby9hzkg2g","col-md-2-end":"eZ7EWTzJ0eyiwaX80vF7","col-md-3":"BPB1lJYdD9ZF06iU4JqN","col-md-3-start":"mqdtFrxVPqGF69R0ve5t","col-md-3-end":"W2xRsVUNx4v0bnLZkmLf","col-md-4":"brzzMXJ7uTSUxLhuHlvO","col-md-4-start":"Ua3ENGWSij5OPxJjU4YQ","col-md-4-end":"Lege9ZfULqw4bTPSEzBT","col-md-5":"R7e1X1OppSwNk7pM_UsU","col-md-5-start":"RXH55oeqA0tzBC268Vvn","col-md-5-end":"yUqSSBRI2Ba4GULTKEo5","col-md-6":"zgIeYtocCoyRpWMLoA8j","col-md-6-start":"SJgsi7ohYrB9Suu2lwKQ","col-md-6-end":"evXJXU4ZVmaU3fHbNShw","col-md-7":"OvJtAyKa4CnaJTxrWULN","col-md-7-start":"Tdncikb2MHUB9M8_pzrz","col-md-7-end":"SznBcu1iExeI62bDI2fv","col-md-8":"dMfdjRo9r2UqnWUO7K7j","col-md-8-start":"RZ8AuwBi2INOYbA3GNes","col-md-8-end":"gd_tTH3gswBbD0luK4cg","col-lg-1":"xOPnT0A5q3l85vlYlB4Z","col-lg-1-start":"fYBJDNQ9E5_5wrdSOMHV","col-lg-1-end":"CuviEyxy4A5nI6ZgqQWU","col-lg-2":"zir7Y2inBNCuoM331HQS","col-lg-2-start":"hneE2V6DFFUK7Z2VlP1k","col-lg-2-end":"JdqTodnmzgM8fNPWGYsD","col-lg-3":"pfCLtxtdyfzqKtptYkey","col-lg-3-start":"qdvpCh5XwqZBTSQZriSu","col-lg-3-end":"EdkicJW5QtuFGwEtbRrD","col-lg-4":"VBsWJStlfQs3FFFuLJgp","col-lg-4-start":"TMMxlyKjw7uAASuXktdd","col-lg-4-end":"yOdXvT2PcHRSEAb64oQ5","col-lg-5":"k4m90rwEinnOv4X9wCUo","col-lg-5-start":"vRMTlNglaIKviScEPcj2","col-lg-5-end":"HJr5rbm2AYnx5iq6yjYw","col-lg-6":"f3Wlyk_5EPtXwRmju9bu","col-lg-6-start":"DuySSESVIp5ulLCI7gDZ","col-lg-6-end":"YxyyciwGy6DD9y7D7_RA","col-lg-7":"T09hcaBcvJppEI8fkeob","col-lg-7-start":"sfHLOAucQPyThoatcJlb","col-lg-7-end":"ugj03iSq_LpMPjktSIwW","col-lg-8":"O5lpDYm2qg9VuumTrrEw","col-lg-8-start":"TLrJVaWtw1Dsta_v5JcP","col-lg-8-end":"OqZ0YRgBvvTNJjsWS7pb","col-lg-9":"qr94d82SNkd1ExXHZPJq","col-lg-9-start":"H7dCJfM9V64l4aJI2aYD","col-lg-9-end":"xgcnaSvEwWA7naPdo1Q7","col-lg-10":"joclYxhsEaNNF4bUW_ue","col-lg-10-start":"DKuepavoRxT2sWRScNUO","col-lg-10-end":"LeArlDExZKDiDVBz9j2H","col-lg-11":"jhzmR1UDav7Cr1C83NGQ","col-lg-11-start":"qeM8lIjXYZiST414vxJk","col-lg-11-end":"sHBullB2KBN_dcAHo02k","col-lg-12":"UasosPijxHsKZnWpd0mT","col-lg-12-start":"pPlntrGl3JYhJi4XVrGp","col-lg-12-end":"hLgosun56kR2j4m1OdkM"};const i=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss":(p,_,s)=>{"use strict";s.d(_,{Z:()=>i});var e=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=s.n(e),c=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),m=s.n(c),n=m()(a());n.push([p.id,".lAAWDY3GAoGI8Yz2Iot3{--max-container-width: 1128px;--vertical-gutter: 24px;--horizontal-spacing: 8px;display:grid;column-gap:var(--vertical-gutter);max-width:var(--max-container-width);margin:0 auto;width:100%}@media(max-width: 599px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 16px;grid-template-columns:repeat(4, minmax(0, 1fr))}}@media(min-width: 600px)and (max-width: 959px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 18px;grid-template-columns:repeat(8, minmax(0, 1fr))}}@media(min-width: 960px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 24px;grid-template-columns:repeat(12, minmax(0, 1fr))}}.lAAWDY3GAoGI8Yz2Iot3.ZUqObxyT7MTULMSxNKnV{max-width:none;padding:unset}",""]),n.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",container:"lAAWDY3GAoGI8Yz2Iot3",fluid:"ZUqObxyT7MTULMSxNKnV"};const i=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/stories/styles.module.scss":(p,_,s)=>{"use strict";s.d(_,{Z:()=>i});var e=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=s.n(e),c=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),m=s.n(c),n=m()(a());n.push([p.id,".WtGlKtrcsq9aLjqXf9Y1{background:var(--jp-gray-50)}.sIVeUfvmkx0dt8tEWPDv{padding:20px;background:var(--jp-gray-80);font-size:1rem;color:var(--jp-white-off)}.HIICInLaKicp9CX6jvST{padding:var(--spacing-base);background-color:var(--jp-green-0);border:1px solid var(--jp-green-50)}.fnUWSFaBhKfl1Vy7sgsQ{padding:var(--spacing-base);background-color:var(--jp-red-0);border:1px solid var(--jp-red-50)}",""]),n.locals={container:"WtGlKtrcsq9aLjqXf9Y1",col:"sIVeUfvmkx0dt8tEWPDv",yes:"HIICInLaKicp9CX6jvST",no:"fnUWSFaBhKfl1Vy7sgsQ"};const i=n}}]);})();
