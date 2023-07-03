"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[892],{"../components/components/theme-provider/stories/index.stories.tsx":(b,i,e)=>{var f,N,I,D,A,L,R,Y,z,J,W,K;e.r(i),e.d(i,{BasicUsage:()=>x,Colors:()=>g,Tokens:()=>m,Typographies:()=>r,__namedExportsOrder:()=>M,default:()=>w});var u=e("../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),y=e("../../../node_modules/.pnpm/@wordpress+compose@6.12.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-copy-to-clipboard/index.js"),d=e("../components/components/layout/col/index.tsx"),p=e("../components/components/layout/container/index.tsx"),n=e("../components/components/theme-provider/index.tsx"),c=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),v=e.n(c),E=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/theme-provider/stories/style.module.scss"),l={};l.insert="head",l.singleton=!1;var j=v()(E.Z,l);const a=E.Z.locals||{};var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),U=`import { Button } from '@wordpress/components';
import { useCopyToClipboard } from '@wordpress/compose';
import Col from '../../layout/col';
import Container from '../../layout/container';
import ThemeProvider, { typography, colors, borders, spacing } from '../index';
import styles from './style.module.scss';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Get the contrasting color for any hex color
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * Derived from work by Brian Suda, https://24ways.org/2010/calculating-color-contrast/
 *
 * @param   {string} hexcolor - hexcolor value
 * @returns {string}            The contrasting color (black or white)
 */
function getContrast( hexcolor ) {
	// If a leading # is provided, remove it
	if ( hexcolor.slice( 0, 1 ) === '#' ) {
		hexcolor = hexcolor.slice( 1 );
	}

	// If a three-character hexcode, make six-character
	if ( hexcolor.length === 3 ) {
		hexcolor = hexcolor
			.split( '' )
			.map( function ( hex ) {
				return hex + hex;
			} )
			.join( '' );
	}

	// Convert to RGB value
	const r = parseInt( hexcolor.substring( 0, 2 ), 16 );
	const g = parseInt( hexcolor.substring( 2, 4 ), 16 );
	const b = parseInt( hexcolor.substring( 4, 6 ), 16 );

	// Get YIQ ratio
	const yiq = ( r * 299 + g * 587 + b * 114 ) / 1000;

	// Check contrast
	return yiq >= 128 ? 'black' : 'white';
}
export default {
	title: 'JS Packages/Components/Theme Provider',
} as ComponentMeta< typeof ThemeProvider >;

const noop = () => {
	//
};

const ClipboardButton: React.FC< React.ComponentProps< typeof Button > > = ( {
	text,
	...buttonProps
} ) => {
	const ref = useCopyToClipboard( text, noop );
	return <Button { ...buttonProps } ref={ ref } />;
};

const Section = ( { title, data, children = null } ) => (
	<div className={ styles.section }>
		<h1 className={ styles.title }>{ title }</h1>
		<Container fluid>
			{ Object.keys( data ).map( key => (
				<Col lg={ 3 } className={ styles.box }>
					<Container fluid horizontalGap={ 2 }>
						<Col className={ styles.key }>{ key }</Col>
						{ children && <Col className={ styles.example }>{ children( data[ key ] ) }</Col> }
						<Col>
							<div className={ styles[ 'value-label' ] }>Value</div>
							<input
								type="text"
								value={ data[ key ] }
								readOnly={ true }
								className={ styles.value }
							/>
						</Col>
					</Container>
				</Col>
			) ) }
		</Container>
	</div>
);

export const Tokens = () => (
	<>
		<Section title="Typography" data={ typography }>
			{ value => <div style={ { fontSize: value } }>Text</div> }
		</Section>
		<Section title="Colors" data={ colors }>
			{ value => (
				<div className={ styles[ 'colors-example' ] } style={ { backgroundColor: value } } />
			) }
		</Section>
		<Section title="Borders" data={ borders } />
		<Section title="Spacing" data={ spacing } />
	</>
);
Tokens.parameters = {
	docs: { source: { code: null } },
};

export const Typographies = args => (
	<div className={ styles[ 'instances-wrapper' ] }>
		{ Object.keys( typography ).map( key => (
			<div className={ styles[ 'font-instance' ] } style={ { fontSize: typography[ key ] } }>
				{ args?.[ 'Text Instance' ] || \`\${ key } (\${ typography[ key ] } )\` }

				<ClipboardButton variant="tertiary" text={ key } className={ styles[ 'copy-button' ] }>
					Copy
				</ClipboardButton>
			</div>
		) ) }
	</div>
);

Typographies.args = {
	[ 'Text Instance' ]: '',
};
Typographies.parameters = {
	docs: { source: { code: null } },
};

export const Colors = () => (
	<div className={ styles[ 'instances-wrapper' ] }>
		{ Object.keys( colors ).map( key => (
			<div
				className={ styles[ 'color-instance' ] }
				style={ { backgroundColor: colors[ key ], color: getContrast( colors[ key ] ) } }
			>
				{ \`\${ key } (\${ colors[ key ].toUpperCase() } )\` }

				<ClipboardButton
					variant="tertiary"
					text={ key }
					className={ styles[ 'copy-button' ] }
					style={ { color: getContrast( colors[ key ] ) } }
				>
					Copy
				</ClipboardButton>
			</div>
		) ) }
	</div>
);
Colors.parameters = {
	docs: { source: { code: null } },
};

const Template: ComponentStory< typeof ThemeProvider > = args => (
	<ThemeProvider { ...args }>
		<div
			style={ {
				color: 'var( --jp-white )',
				backgroundColor: 'var( --jp-pink )',
				fontSize: 'var( --font-title-small )',
				padding: 'var( --spacing-base ) calc( var( --spacing-base ) * 2 )',
				borderRadius: 'var( --jp-border-radius )',
			} }
		>
			Pink Jetpack Show
		</div>
	</ThemeProvider>
);
export const BasicUsage = Template.bind( {} );
`,P={Tokens:{startLoc:{col:22,line:73},endLoc:{col:7,line:86},startBody:{col:22,line:73},endBody:{col:7,line:86}},Typographies:{startLoc:{col:28,line:94},endLoc:{col:10,line:104},startBody:{col:28,line:94},endBody:{col:10,line:104}},Colors:{startLoc:{col:22,line:115},endLoc:{col:10,line:128},startBody:{col:22,line:115},endBody:{col:10,line:128}},BasicUsage:{startLoc:{col:55,line:136},endLoc:{col:20,line:146},startBody:{col:55,line:136},endBody:{col:20,line:146}}};function s(o){o.slice(0,1)==="#"&&(o=o.slice(1)),o.length===3&&(o=o.split("").map(function(Z){return Z+Z}).join(""));const _=parseInt(o.substring(0,2),16),S=parseInt(o.substring(2,4),16),B=parseInt(o.substring(4,6),16);return(_*299+S*587+B*114)/1e3>=128?"black":"white"}const w={parameters:{storySource:{source:`import { Button } from '@wordpress/components';
import { useCopyToClipboard } from '@wordpress/compose';
import Col from '../../layout/col';
import Container from '../../layout/container';
import ThemeProvider, { typography, colors, borders, spacing } from '../index';
import styles from './style.module.scss';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Get the contrasting color for any hex color
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * Derived from work by Brian Suda, https://24ways.org/2010/calculating-color-contrast/
 *
 * @param   {string} hexcolor - hexcolor value
 * @returns {string}            The contrasting color (black or white)
 */
function getContrast(hexcolor) {
  // If a leading # is provided, remove it
  if (hexcolor.slice(0, 1) === '#') {
    hexcolor = hexcolor.slice(1);
  }

  // If a three-character hexcode, make six-character
  if (hexcolor.length === 3) {
    hexcolor = hexcolor.split('').map(function (hex) {
      return hex + hex;
    }).join('');
  }

  // Convert to RGB value
  const r = parseInt(hexcolor.substring(0, 2), 16);
  const g = parseInt(hexcolor.substring(2, 4), 16);
  const b = parseInt(hexcolor.substring(4, 6), 16);

  // Get YIQ ratio
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Check contrast
  return yiq >= 128 ? 'black' : 'white';
}
export default ({
  title: 'JS Packages/Components/Theme Provider'
} as ComponentMeta<typeof ThemeProvider>);
const noop = () => {
  //
};
const ClipboardButton: React.FC<React.ComponentProps<typeof Button>> = ({
  text,
  ...buttonProps
}) => {
  const ref = useCopyToClipboard(text, noop);
  return <Button {...buttonProps} ref={ref} />;
};
const Section = ({
  title,
  data,
  children = null
}) => <div className={styles.section}>
        <h1 className={styles.title}>{title}</h1>
        <Container fluid>
            {Object.keys(data).map(key => <Col lg={3} className={styles.box}>
                    <Container fluid horizontalGap={2}>
                        <Col className={styles.key}>{key}</Col>
                        {children && <Col className={styles.example}>{children(data[key])}</Col>}
                        <Col>
                            <div className={styles['value-label']}>Value</div>
                            <input type="text" value={data[key]} readOnly={true} className={styles.value} />
                        </Col>
                    </Container>
                </Col>)}
        </Container>
    </div>;
export const Tokens = () => <>
        <Section title="Typography" data={typography}>
            {value => <div style={{
      fontSize: value
    }}>Text</div>}
        </Section>
        <Section title="Colors" data={colors}>
            {value => <div className={styles['colors-example']} style={{
      backgroundColor: value
    }} />}
        </Section>
        <Section title="Borders" data={borders} />
        <Section title="Spacing" data={spacing} />
    </>;
Tokens.parameters = {
  docs: {
    source: {
      code: null
    }
  }
};
export const Typographies = args => <div className={styles['instances-wrapper']}>
        {Object.keys(typography).map(key => <div className={styles['font-instance']} style={{
    fontSize: typography[key]
  }}>
                {args?.['Text Instance'] || \`\${key} (\${typography[key]} )\`}

                <ClipboardButton variant="tertiary" text={key} className={styles['copy-button']}>
                    Copy
                </ClipboardButton>
            </div>)}
    </div>;
Typographies.args = {
  ['Text Instance']: ''
};
Typographies.parameters = {
  docs: {
    source: {
      code: null
    }
  }
};
export const Colors = () => <div className={styles['instances-wrapper']}>
        {Object.keys(colors).map(key => <div className={styles['color-instance']} style={{
    backgroundColor: colors[key],
    color: getContrast(colors[key])
  }}>
                {\`\${key} (\${colors[key].toUpperCase()} )\`}

                <ClipboardButton variant="tertiary" text={key} className={styles['copy-button']} style={{
      color: getContrast(colors[key])
    }}>
                    Copy
                </ClipboardButton>
            </div>)}
    </div>;
Colors.parameters = {
  docs: {
    source: {
      code: null
    }
  }
};
const Template: ComponentStory<typeof ThemeProvider> = args => <ThemeProvider {...args}>
        <div style={{
    color: 'var( --jp-white )',
    backgroundColor: 'var( --jp-pink )',
    fontSize: 'var( --font-title-small )',
    padding: 'var( --spacing-base ) calc( var( --spacing-base ) * 2 )',
    borderRadius: 'var( --jp-border-radius )'
  }}>
            Pink Jetpack Show
        </div>
    </ThemeProvider>;
export const BasicUsage = Template.bind({});
Tokens.parameters = {
  ...Tokens.parameters,
  docs: {
    ...Tokens.parameters?.docs,
    source: {
      originalSource: "() => <>\\n        <Section title=\\"Typography\\" data={typography}>\\n            {value => <div style={{\\n      fontSize: value\\n    }}>Text</div>}\\n        </Section>\\n        <Section title=\\"Colors\\" data={colors}>\\n            {value => <div className={styles['colors-example']} style={{\\n      backgroundColor: value\\n    }} />}\\n        </Section>\\n        <Section title=\\"Borders\\" data={borders} />\\n        <Section title=\\"Spacing\\" data={spacing} />\\n    </>",
      ...Tokens.parameters?.docs?.source
    }
  }
};
Typographies.parameters = {
  ...Typographies.parameters,
  docs: {
    ...Typographies.parameters?.docs,
    source: {
      originalSource: "args => <div className={styles['instances-wrapper']}>\\n        {Object.keys(typography).map(key => <div className={styles['font-instance']} style={{\\n    fontSize: typography[key]\\n  }}>\\n                {args?.['Text Instance'] || \`\${key} (\${typography[key]} )\`}\\n\\n                <ClipboardButton variant=\\"tertiary\\" text={key} className={styles['copy-button']}>\\n                    Copy\\n                </ClipboardButton>\\n            </div>)}\\n    </div>",
      ...Typographies.parameters?.docs?.source
    }
  }
};
Colors.parameters = {
  ...Colors.parameters,
  docs: {
    ...Colors.parameters?.docs,
    source: {
      originalSource: "() => <div className={styles['instances-wrapper']}>\\n        {Object.keys(colors).map(key => <div className={styles['color-instance']} style={{\\n    backgroundColor: colors[key],\\n    color: getContrast(colors[key])\\n  }}>\\n                {\`\${key} (\${colors[key].toUpperCase()} )\`}\\n\\n                <ClipboardButton variant=\\"tertiary\\" text={key} className={styles['copy-button']} style={{\\n      color: getContrast(colors[key])\\n    }}>\\n                    Copy\\n                </ClipboardButton>\\n            </div>)}\\n    </div>",
      ...Colors.parameters?.docs?.source
    }
  }
};
BasicUsage.parameters = {
  ...BasicUsage.parameters,
  docs: {
    ...BasicUsage.parameters?.docs,
    source: {
      originalSource: "args => <ThemeProvider {...args}>\\n        <div style={{\\n    color: 'var( --jp-white )',\\n    backgroundColor: 'var( --jp-pink )',\\n    fontSize: 'var( --font-title-small )',\\n    padding: 'var( --spacing-base ) calc( var( --spacing-base ) * 2 )',\\n    borderRadius: 'var( --jp-border-radius )'\\n  }}>\\n            Pink Jetpack Show\\n        </div>\\n    </ThemeProvider>",
      ...BasicUsage.parameters?.docs?.source
    }
  }
};`,locationsMap:{tokens:{startLoc:{col:22,line:73},endLoc:{col:7,line:86},startBody:{col:22,line:73},endBody:{col:7,line:86}},typographies:{startLoc:{col:28,line:94},endLoc:{col:10,line:104},startBody:{col:28,line:94},endBody:{col:10,line:104}},colors:{startLoc:{col:22,line:115},endLoc:{col:10,line:128},startBody:{col:22,line:115},endBody:{col:10,line:128}},"basic-usage":{startLoc:{col:55,line:136},endLoc:{col:20,line:146},startBody:{col:55,line:136},endBody:{col:20,line:146}}}}},title:"JS Packages/Components/Theme Provider"},T=()=>{},C=o=>{let{text:_,...S}=o;const B=(0,y.Z)(_,T);return(0,t.jsx)(u.ZP,{...S,ref:B})};C.displayName="ClipboardButton";const h=o=>{let{title:_,data:S,children:B=null}=o;return(0,t.jsxs)("div",{className:a.section,children:[(0,t.jsx)("h1",{className:a.title,children:_}),(0,t.jsx)(p.Z,{fluid:!0,children:Object.keys(S).map(O=>(0,t.jsx)(d.Z,{lg:3,className:a.box,children:(0,t.jsxs)(p.Z,{fluid:!0,horizontalGap:2,children:[(0,t.jsx)(d.Z,{className:a.key,children:O}),B&&(0,t.jsx)(d.Z,{className:a.example,children:B(S[O])}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("div",{className:a["value-label"],children:"Value"}),(0,t.jsx)("input",{type:"text",value:S[O],readOnly:!0,className:a.value})]})]})}))})]})};h.displayName="Section";const m=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h,{title:"Typography",data:n.cp,children:o=>(0,t.jsx)("div",{style:{fontSize:o},children:"Text"})}),(0,t.jsx)(h,{title:"Colors",data:n.O9,children:o=>(0,t.jsx)("div",{className:a["colors-example"],style:{backgroundColor:o}})}),(0,t.jsx)(h,{title:"Borders",data:n.Lz}),(0,t.jsx)(h,{title:"Spacing",data:n.W0})]});m.parameters={docs:{source:{code:null}}};const r=o=>(0,t.jsx)("div",{className:a["instances-wrapper"],children:Object.keys(n.cp).map(_=>(0,t.jsxs)("div",{className:a["font-instance"],style:{fontSize:n.cp[_]},children:[(o==null?void 0:o["Text Instance"])||`${_} (${n.cp[_]} )`,(0,t.jsx)(C,{variant:"tertiary",text:_,className:a["copy-button"],children:"Copy"})]}))});r.displayName="Typographies",r.args={["Text Instance"]:""},r.parameters={docs:{source:{code:null}}};const g=()=>(0,t.jsx)("div",{className:a["instances-wrapper"],children:Object.keys(n.O9).map(o=>(0,t.jsxs)("div",{className:a["color-instance"],style:{backgroundColor:n.O9[o],color:s(n.O9[o])},children:[`${o} (${n.O9[o].toUpperCase()} )`,(0,t.jsx)(C,{variant:"tertiary",text:o,className:a["copy-button"],style:{color:s(n.O9[o])},children:"Copy"})]}))});g.displayName="Colors",g.parameters={docs:{source:{code:null}}};const k=o=>(0,t.jsx)(n.ZP,{...o,children:(0,t.jsx)("div",{style:{color:"var( --jp-white )",backgroundColor:"var( --jp-pink )",fontSize:"var( --font-title-small )",padding:"var( --spacing-base ) calc( var( --spacing-base ) * 2 )",borderRadius:"var( --jp-border-radius )"},children:"Pink Jetpack Show"})});k.displayName="Template";const x=k.bind({});m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`() => <>
        <Section title="Typography" data={typography}>
            {value => <div style={{
      fontSize: value
    }}>Text</div>}
        </Section>
        <Section title="Colors" data={colors}>
            {value => <div className={styles['colors-example']} style={{
      backgroundColor: value
    }} />}
        </Section>
        <Section title="Borders" data={borders} />
        <Section title="Spacing" data={spacing} />
    </>`,...(I=(N=m.parameters)==null?void 0:N.docs)==null?void 0:I.source}}},r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`args => <div className={styles['instances-wrapper']}>
        {Object.keys(typography).map(key => <div className={styles['font-instance']} style={{
    fontSize: typography[key]
  }}>
                {args?.['Text Instance'] || \`\${key} (\${typography[key]} )\`}

                <ClipboardButton variant="tertiary" text={key} className={styles['copy-button']}>
                    Copy
                </ClipboardButton>
            </div>)}
    </div>`,...(L=(A=r.parameters)==null?void 0:A.docs)==null?void 0:L.source}}},g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`() => <div className={styles['instances-wrapper']}>
        {Object.keys(colors).map(key => <div className={styles['color-instance']} style={{
    backgroundColor: colors[key],
    color: getContrast(colors[key])
  }}>
                {\`\${key} (\${colors[key].toUpperCase()} )\`}

                <ClipboardButton variant="tertiary" text={key} className={styles['copy-button']} style={{
      color: getContrast(colors[key])
    }}>
                    Copy
                </ClipboardButton>
            </div>)}
    </div>`,...(z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}},x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`args => <ThemeProvider {...args}>
        <div style={{
    color: 'var( --jp-white )',
    backgroundColor: 'var( --jp-pink )',
    fontSize: 'var( --font-title-small )',
    padding: 'var( --spacing-base ) calc( var( --spacing-base ) * 2 )',
    borderRadius: 'var( --jp-border-radius )'
  }}>
            Pink Jetpack Show
        </div>
    </ThemeProvider>`,...(K=(W=x.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};const M=["Tokens","Typographies","Colors","BasicUsage"];try{r.displayName="Typographies",r.__docgenInfo={description:"",displayName:"Typographies",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/theme-provider/stories/index.stories.tsx#Typographies"]={docgenInfo:r.__docgenInfo,name:"Typographies",path:"../components/components/theme-provider/stories/index.stories.tsx#Typographies"})}catch(o){}},"../components/components/layout/col/index.tsx":(b,i,e)=>{e.d(i,{Z:()=>P});var u=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),y=e.n(u),d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(p),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss"),v={};v.insert="head",v.singleton=!1;var E=n()(c.Z,v);const l=c.Z.locals||{},j=Number(l.smCols),a=Number(l.mdCols),t=Number(l.lgCols),P=s=>{const{children:w,tagName:T="div",className:C}=s,h=Math.min(j,typeof s.sm=="number"?s.sm:j),m=Math.min(j,typeof s.sm=="object"?s.sm.start:0),r=Math.min(j,typeof s.sm=="object"?s.sm.end:0),g=Math.min(a,typeof s.md=="number"?s.md:a),k=Math.min(a,typeof s.md=="object"?s.md.start:0),x=Math.min(a,typeof s.md=="object"?s.md.end:0),M=Math.min(t,typeof s.lg=="number"?s.lg:t),f=Math.min(t,typeof s.lg=="object"?s.lg.start:0),N=Math.min(t,typeof s.lg=="object"?s.lg.end:0),I=y()(C,{[l[`col-sm-${h}`]]:!(m&&r),[l[`col-sm-${m}-start`]]:m>0,[l[`col-sm-${r}-end`]]:r>0,[l[`col-md-${g}`]]:!(k&&x),[l[`col-md-${k}-start`]]:k>0,[l[`col-md-${x}-end`]]:x>0,[l[`col-lg-${M}`]]:!(f&&N),[l[`col-lg-${f}-start`]]:f>0,[l[`col-lg-${N}-end`]]:N>0});return(0,d.createElement)(T,{className:I},w)}},"../components/components/layout/container/index.tsx":(b,i,e)=>{e.d(i,{Z:()=>a});var u=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),y=e.n(u),d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(p),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss"),v={};v.insert="head",v.singleton=!1;var E=n()(c.Z,v);const l=c.Z.locals||{},a=t=>{let{children:U,fluid:P=!1,tagName:s="div",className:w,horizontalGap:T=1,horizontalSpacing:C=1}=t;const h=(0,d.useMemo)(()=>{const r=`calc( var(--horizontal-spacing) * ${C} )`,g=`calc( var(--horizontal-spacing) * ${T} )`;return{paddingTop:r,paddingBottom:r,rowGap:g}},[T,C]),m=y()(w,l.container,{[l.fluid]:P});return(0,d.createElement)(s,{className:m,style:h},U)}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss":(b,i,e)=>{e.d(i,{Z:()=>c});var u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=e.n(u),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),p=e.n(d),n=p()(y());n.push([b.id,"@media(max-width: 599px){.TNVxw_ZOJEEynDiM2QYM{grid-column-end:span 1}.Ks8DhEoe0M2rg7i8Qcos{grid-column-start:1}.hPWQqxgVUkTp5NQqrfIn{grid-column-end:2}.H1CbUDrI72aXZoHz2P6C{grid-column-end:span 2}.xyTGpD3bVBInLbgP2lMK{grid-column-start:2}.pEBM8SUyhDj4XyIAYiAq{grid-column-end:3}.xbDPzcogSD2JnGmDyiWZ{grid-column-end:span 3}.fooSursJQahboNx68m3R{grid-column-start:3}.ufTVtUIEIdl9sKOoDgNi{grid-column-end:4}.dwPTqpku444IkQCTeDyr{grid-column-end:span 4}.TpMbkMlo3BQATa8vlznp{grid-column-start:4}.WqNt7hKsjzie3UHqUDJ3{grid-column-end:5}}@media(min-width: 600px)and (max-width: 959px){.FIPb1cviSpE3bfv7tgh7{grid-column-end:span 1}.gJ3mUUPEUQSOLyVyzgLR{grid-column-start:1}.heLAMmYtuFGNteEBNd_K{grid-column-end:2}._Z6bV0ViNirPwmUfTUPc{grid-column-end:span 2}.TtipIIkNLkoby9hzkg2g{grid-column-start:2}.eZ7EWTzJ0eyiwaX80vF7{grid-column-end:3}.BPB1lJYdD9ZF06iU4JqN{grid-column-end:span 3}.mqdtFrxVPqGF69R0ve5t{grid-column-start:3}.W2xRsVUNx4v0bnLZkmLf{grid-column-end:4}.brzzMXJ7uTSUxLhuHlvO{grid-column-end:span 4}.Ua3ENGWSij5OPxJjU4YQ{grid-column-start:4}.Lege9ZfULqw4bTPSEzBT{grid-column-end:5}.R7e1X1OppSwNk7pM_UsU{grid-column-end:span 5}.RXH55oeqA0tzBC268Vvn{grid-column-start:5}.yUqSSBRI2Ba4GULTKEo5{grid-column-end:6}.zgIeYtocCoyRpWMLoA8j{grid-column-end:span 6}.SJgsi7ohYrB9Suu2lwKQ{grid-column-start:6}.evXJXU4ZVmaU3fHbNShw{grid-column-end:7}.OvJtAyKa4CnaJTxrWULN{grid-column-end:span 7}.Tdncikb2MHUB9M8_pzrz{grid-column-start:7}.SznBcu1iExeI62bDI2fv{grid-column-end:8}.dMfdjRo9r2UqnWUO7K7j{grid-column-end:span 8}.RZ8AuwBi2INOYbA3GNes{grid-column-start:8}.gd_tTH3gswBbD0luK4cg{grid-column-end:9}}@media(min-width: 960px){.xOPnT0A5q3l85vlYlB4Z{grid-column-end:span 1}.fYBJDNQ9E5_5wrdSOMHV{grid-column-start:1}.CuviEyxy4A5nI6ZgqQWU{grid-column-end:2}.zir7Y2inBNCuoM331HQS{grid-column-end:span 2}.hneE2V6DFFUK7Z2VlP1k{grid-column-start:2}.JdqTodnmzgM8fNPWGYsD{grid-column-end:3}.pfCLtxtdyfzqKtptYkey{grid-column-end:span 3}.qdvpCh5XwqZBTSQZriSu{grid-column-start:3}.EdkicJW5QtuFGwEtbRrD{grid-column-end:4}.VBsWJStlfQs3FFFuLJgp{grid-column-end:span 4}.TMMxlyKjw7uAASuXktdd{grid-column-start:4}.yOdXvT2PcHRSEAb64oQ5{grid-column-end:5}.k4m90rwEinnOv4X9wCUo{grid-column-end:span 5}.vRMTlNglaIKviScEPcj2{grid-column-start:5}.HJr5rbm2AYnx5iq6yjYw{grid-column-end:6}.f3Wlyk_5EPtXwRmju9bu{grid-column-end:span 6}.DuySSESVIp5ulLCI7gDZ{grid-column-start:6}.YxyyciwGy6DD9y7D7_RA{grid-column-end:7}.T09hcaBcvJppEI8fkeob{grid-column-end:span 7}.sfHLOAucQPyThoatcJlb{grid-column-start:7}.ugj03iSq_LpMPjktSIwW{grid-column-end:8}.O5lpDYm2qg9VuumTrrEw{grid-column-end:span 8}.TLrJVaWtw1Dsta_v5JcP{grid-column-start:8}.OqZ0YRgBvvTNJjsWS7pb{grid-column-end:9}.qr94d82SNkd1ExXHZPJq{grid-column-end:span 9}.H7dCJfM9V64l4aJI2aYD{grid-column-start:9}.xgcnaSvEwWA7naPdo1Q7{grid-column-end:10}.joclYxhsEaNNF4bUW_ue{grid-column-end:span 10}.DKuepavoRxT2sWRScNUO{grid-column-start:10}.LeArlDExZKDiDVBz9j2H{grid-column-end:11}.jhzmR1UDav7Cr1C83NGQ{grid-column-end:span 11}.qeM8lIjXYZiST414vxJk{grid-column-start:11}.sHBullB2KBN_dcAHo02k{grid-column-end:12}.UasosPijxHsKZnWpd0mT{grid-column-end:span 12}.pPlntrGl3JYhJi4XVrGp{grid-column-start:12}.hLgosun56kR2j4m1OdkM{grid-column-end:13}}",""]),n.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",smCols:"4",mdCols:"8",lgCols:"12","col-sm-1":"TNVxw_ZOJEEynDiM2QYM","col-sm-1-start":"Ks8DhEoe0M2rg7i8Qcos","col-sm-1-end":"hPWQqxgVUkTp5NQqrfIn","col-sm-2":"H1CbUDrI72aXZoHz2P6C","col-sm-2-start":"xyTGpD3bVBInLbgP2lMK","col-sm-2-end":"pEBM8SUyhDj4XyIAYiAq","col-sm-3":"xbDPzcogSD2JnGmDyiWZ","col-sm-3-start":"fooSursJQahboNx68m3R","col-sm-3-end":"ufTVtUIEIdl9sKOoDgNi","col-sm-4":"dwPTqpku444IkQCTeDyr","col-sm-4-start":"TpMbkMlo3BQATa8vlznp","col-sm-4-end":"WqNt7hKsjzie3UHqUDJ3","col-md-1":"FIPb1cviSpE3bfv7tgh7","col-md-1-start":"gJ3mUUPEUQSOLyVyzgLR","col-md-1-end":"heLAMmYtuFGNteEBNd_K","col-md-2":"_Z6bV0ViNirPwmUfTUPc","col-md-2-start":"TtipIIkNLkoby9hzkg2g","col-md-2-end":"eZ7EWTzJ0eyiwaX80vF7","col-md-3":"BPB1lJYdD9ZF06iU4JqN","col-md-3-start":"mqdtFrxVPqGF69R0ve5t","col-md-3-end":"W2xRsVUNx4v0bnLZkmLf","col-md-4":"brzzMXJ7uTSUxLhuHlvO","col-md-4-start":"Ua3ENGWSij5OPxJjU4YQ","col-md-4-end":"Lege9ZfULqw4bTPSEzBT","col-md-5":"R7e1X1OppSwNk7pM_UsU","col-md-5-start":"RXH55oeqA0tzBC268Vvn","col-md-5-end":"yUqSSBRI2Ba4GULTKEo5","col-md-6":"zgIeYtocCoyRpWMLoA8j","col-md-6-start":"SJgsi7ohYrB9Suu2lwKQ","col-md-6-end":"evXJXU4ZVmaU3fHbNShw","col-md-7":"OvJtAyKa4CnaJTxrWULN","col-md-7-start":"Tdncikb2MHUB9M8_pzrz","col-md-7-end":"SznBcu1iExeI62bDI2fv","col-md-8":"dMfdjRo9r2UqnWUO7K7j","col-md-8-start":"RZ8AuwBi2INOYbA3GNes","col-md-8-end":"gd_tTH3gswBbD0luK4cg","col-lg-1":"xOPnT0A5q3l85vlYlB4Z","col-lg-1-start":"fYBJDNQ9E5_5wrdSOMHV","col-lg-1-end":"CuviEyxy4A5nI6ZgqQWU","col-lg-2":"zir7Y2inBNCuoM331HQS","col-lg-2-start":"hneE2V6DFFUK7Z2VlP1k","col-lg-2-end":"JdqTodnmzgM8fNPWGYsD","col-lg-3":"pfCLtxtdyfzqKtptYkey","col-lg-3-start":"qdvpCh5XwqZBTSQZriSu","col-lg-3-end":"EdkicJW5QtuFGwEtbRrD","col-lg-4":"VBsWJStlfQs3FFFuLJgp","col-lg-4-start":"TMMxlyKjw7uAASuXktdd","col-lg-4-end":"yOdXvT2PcHRSEAb64oQ5","col-lg-5":"k4m90rwEinnOv4X9wCUo","col-lg-5-start":"vRMTlNglaIKviScEPcj2","col-lg-5-end":"HJr5rbm2AYnx5iq6yjYw","col-lg-6":"f3Wlyk_5EPtXwRmju9bu","col-lg-6-start":"DuySSESVIp5ulLCI7gDZ","col-lg-6-end":"YxyyciwGy6DD9y7D7_RA","col-lg-7":"T09hcaBcvJppEI8fkeob","col-lg-7-start":"sfHLOAucQPyThoatcJlb","col-lg-7-end":"ugj03iSq_LpMPjktSIwW","col-lg-8":"O5lpDYm2qg9VuumTrrEw","col-lg-8-start":"TLrJVaWtw1Dsta_v5JcP","col-lg-8-end":"OqZ0YRgBvvTNJjsWS7pb","col-lg-9":"qr94d82SNkd1ExXHZPJq","col-lg-9-start":"H7dCJfM9V64l4aJI2aYD","col-lg-9-end":"xgcnaSvEwWA7naPdo1Q7","col-lg-10":"joclYxhsEaNNF4bUW_ue","col-lg-10-start":"DKuepavoRxT2sWRScNUO","col-lg-10-end":"LeArlDExZKDiDVBz9j2H","col-lg-11":"jhzmR1UDav7Cr1C83NGQ","col-lg-11-start":"qeM8lIjXYZiST414vxJk","col-lg-11-end":"sHBullB2KBN_dcAHo02k","col-lg-12":"UasosPijxHsKZnWpd0mT","col-lg-12-start":"pPlntrGl3JYhJi4XVrGp","col-lg-12-end":"hLgosun56kR2j4m1OdkM"};const c=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss":(b,i,e)=>{e.d(i,{Z:()=>c});var u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=e.n(u),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),p=e.n(d),n=p()(y());n.push([b.id,".lAAWDY3GAoGI8Yz2Iot3{--max-container-width: 1128px;--vertical-gutter: 24px;--horizontal-spacing: 8px;display:grid;column-gap:var(--vertical-gutter);max-width:var(--max-container-width);margin:0 auto;width:100%}@media(max-width: 599px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 16px;grid-template-columns:repeat(4, minmax(0, 1fr))}}@media(min-width: 600px)and (max-width: 959px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 18px;grid-template-columns:repeat(8, minmax(0, 1fr))}}@media(min-width: 960px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 24px;grid-template-columns:repeat(12, minmax(0, 1fr))}}.lAAWDY3GAoGI8Yz2Iot3.ZUqObxyT7MTULMSxNKnV{max-width:none;padding:unset}",""]),n.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",container:"lAAWDY3GAoGI8Yz2Iot3",fluid:"ZUqObxyT7MTULMSxNKnV"};const c=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/theme-provider/stories/style.module.scss":(b,i,e)=>{e.d(i,{Z:()=>c});var u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=e.n(u),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),p=e.n(d),n=p()(y());n.push([b.id,".djlT4MR9mCkNuhbkHm03{width:100%;margin:auto;padding:8px 32px}.zmEyfn93SUKw7X679b7O{background-color:var(--jp-green-80);border-radius:var(--jp-border-radius);padding:8px;color:var(--jp-white);font-weight:600}.cptepdy7B635SDRtLfeg{border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);padding:16px}.upVQY7oNP09IcNbPlneg{height:40px;display:flex;align-items:center;border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);padding:8px}.XcehLXjVLlYcp4wVC5jY{font-weight:600;font-size:var(--font-label);margin:8px 0}.qCBmEXH6omuAdv5UAnAQ{width:100%}.UKOAl8xUCeQBSNAWKqyy{width:100%;height:100%}.v2yW9Kwolj_mxn6KxVXD{display:flex;flex-direction:column}.p_enbTSQGsW1TXy5ZgtA{margin:10px 0;padding:20px 30px;background-color:var(--jp-white);border:1px dotted var(--jp-gray-10);position:relative}.p_enbTSQGsW1TXy5ZgtA:hover .n_ArOp95gq9eLYJU1YwL{opacity:1}.CdI6HKBSL4bsedGTOCIx{font-size:var(--font-title-small);border:1px dotted var(--jp-gray-10);min-height:60px;line-height:60px;padding:10px;margin:10px 0;position:relative}.CdI6HKBSL4bsedGTOCIx:hover .n_ArOp95gq9eLYJU1YwL{opacity:1}.n_ArOp95gq9eLYJU1YwL{opacity:.3;position:absolute;top:5px;right:5px}",""]),n.locals={section:"djlT4MR9mCkNuhbkHm03",key:"zmEyfn93SUKw7X679b7O",box:"cptepdy7B635SDRtLfeg",example:"upVQY7oNP09IcNbPlneg","value-label":"XcehLXjVLlYcp4wVC5jY",value:"qCBmEXH6omuAdv5UAnAQ","colors-example":"UKOAl8xUCeQBSNAWKqyy","instances-wrapper":"v2yW9Kwolj_mxn6KxVXD","font-instance":"p_enbTSQGsW1TXy5ZgtA","copy-button":"n_ArOp95gq9eLYJU1YwL","color-instance":"CdI6HKBSL4bsedGTOCIx"};const c=n}}]);})();
