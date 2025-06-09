"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1607],{"../components/components/theme-provider/stories/index.stories.tsx":(h,m,e)=>{e.r(m),e.d(m,{BasicUsage:()=>b,Colors:()=>j,Tokens:()=>v,Typographies:()=>u,__namedExportsOrder:()=>U,default:()=>P});var _=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+compose@7.24.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-copy-to-clipboard/index.js"),d=e("../components/components/layout/col/index.tsx"),c=e("../components/components/layout/container/index.tsx"),t=e("../components/components/theme-provider/index.tsx"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),C=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/theme-provider/stories/style.module.scss"),p={};p.insert="head",p.singleton=!1;var g=C()(n.A,p);const o=n.A.locals||{};var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),A=`import { Button } from '@wordpress/components';
import { useCopyToClipboard } from '@wordpress/compose';
import Col from '../../layout/col/index.tsx';
import Container from '../../layout/container/index.tsx';
import ThemeProvider, { typography, colors, borders, spacing } from '../index.tsx';
import styles from './style.module.scss';
import type { StoryFn, Meta } from '@storybook/react';

/**
 * Get the contrasting color for any hex color
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * Derived from work by Brian Suda, https://24ways.org/2010/calculating-color-contrast/
 *
 * @param {string} hexcolor - hexcolor value
 * @return {string}            The contrasting color (black or white)
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
const meta: Meta< typeof ThemeProvider > = {
	title: 'JS Packages/Components/Theme Provider',
};

export default meta;

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
				<Col key={ key } lg={ 3 } className={ styles.box }>
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
			<div
				key={ key }
				className={ styles[ 'font-instance' ] }
				style={ { fontSize: typography[ key ] } }
			>
				{ args?.[ 'Text Instance' ] || \`\${ key } (\${ typography[ key ] } )\` }

				<ClipboardButton variant="tertiary" text={ key } className={ styles[ 'copy-button' ] }>
					Copy
				</ClipboardButton>
			</div>
		) ) }
	</div>
);

Typographies.args = {
	'Text Instance': '',
};
Typographies.parameters = {
	docs: { source: { code: null } },
};

export const Colors = () => (
	<div className={ styles[ 'instances-wrapper' ] }>
		{ Object.keys( colors ).map( key => (
			<div
				key={ key }
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

const Template: StoryFn< typeof ThemeProvider > = args => (
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
`,r={Tokens:{startLoc:{col:22,line:97},endLoc:{col:2,line:123},startBody:{col:22,line:97},endBody:{col:2,line:123}},Typographies:{startLoc:{col:28,line:131},endLoc:{col:2,line:145},startBody:{col:28,line:131},endBody:{col:2,line:145}},Colors:{startLoc:{col:22,line:156},endLoc:{col:2,line:174},startBody:{col:22,line:156},endBody:{col:2,line:174}},BasicUsage:{startLoc:{col:17,line:182},endLoc:{col:2,line:194},startBody:{col:17,line:182},endBody:{col:2,line:194}}};function f(s){s.slice(0,1)==="#"&&(s=s.slice(1)),s.length===3&&(s=s.split("").map(function(N){return N+N}).join(""));const y=parseInt(s.substring(0,2),16),T=parseInt(s.substring(2,4),16),k=parseInt(s.substring(4,6),16);return(y*299+T*587+k*114)/1e3>=128?"black":"white"}const P={parameters:{storySource:{source:`/* wp:polyfill */
/* wp:polyfill esnext.iterator.map */
import { Button } from '@wordpress/components';
import { useCopyToClipboard } from '@wordpress/compose';
import Col from '../../layout/col/index.tsx';
import Container from '../../layout/container/index.tsx';
import ThemeProvider, { typography, colors, borders, spacing } from '../index.tsx';
import styles from './style.module.scss';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/**
 * Get the contrasting color for any hex color
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * Derived from work by Brian Suda, https://24ways.org/2010/calculating-color-contrast/
 *
 * @param {string} hexcolor - hexcolor value
 * @return {string}            The contrasting color (black or white)
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
const meta = {
  title: 'JS Packages/Components/Theme Provider'
};
export default meta;
const noop = () => {
  //
};
const ClipboardButton = ({
  text,
  ...buttonProps
}) => {
  const ref = useCopyToClipboard(text, noop);
  return /*#__PURE__*/_jsx(Button, {
    ...buttonProps,
    ref: ref
  });
};
const Section = ({
  title,
  data,
  children = null
}) => /*#__PURE__*/_jsxs("div", {
  className: styles.section,
  children: [/*#__PURE__*/_jsx("h1", {
    className: styles.title,
    children: title
  }), /*#__PURE__*/_jsx(Container, {
    fluid: true,
    children: Object.keys(data).map(key => /*#__PURE__*/_jsx(Col, {
      lg: 3,
      className: styles.box,
      children: /*#__PURE__*/_jsxs(Container, {
        fluid: true,
        horizontalGap: 2,
        children: [/*#__PURE__*/_jsx(Col, {
          className: styles.key,
          children: key
        }), children && /*#__PURE__*/_jsx(Col, {
          className: styles.example,
          children: children(data[key])
        }), /*#__PURE__*/_jsxs(Col, {
          children: [/*#__PURE__*/_jsx("div", {
            className: styles['value-label'],
            children: "Value"
          }), /*#__PURE__*/_jsx("input", {
            type: "text",
            value: data[key],
            readOnly: true,
            className: styles.value
          })]
        })]
      })
    }, key))
  })]
});
export const Tokens = () => /*#__PURE__*/_jsxs(_Fragment, {
  children: [/*#__PURE__*/_jsx(Section, {
    title: "Typography",
    data: typography,
    children: value => /*#__PURE__*/_jsx("div", {
      style: {
        fontSize: value
      },
      children: "Text"
    })
  }), /*#__PURE__*/_jsx(Section, {
    title: "Colors",
    data: colors,
    children: value => /*#__PURE__*/_jsx("div", {
      className: styles['colors-example'],
      style: {
        backgroundColor: value
      }
    })
  }), /*#__PURE__*/_jsx(Section, {
    title: "Borders",
    data: borders
  }), /*#__PURE__*/_jsx(Section, {
    title: "Spacing",
    data: spacing
  })]
});
Tokens.parameters = {
  docs: {
    source: {
      code: null
    }
  }
};
export const Typographies = args => /*#__PURE__*/_jsx("div", {
  className: styles['instances-wrapper'],
  children: Object.keys(typography).map(key => /*#__PURE__*/_jsxs("div", {
    className: styles['font-instance'],
    style: {
      fontSize: typography[key]
    },
    children: [args?.['Text Instance'] || \`\${key} (\${typography[key]} )\`, /*#__PURE__*/_jsx(ClipboardButton, {
      variant: "tertiary",
      text: key,
      className: styles['copy-button'],
      children: "Copy"
    })]
  }, key))
});
Typographies.args = {
  'Text Instance': ''
};
Typographies.parameters = {
  docs: {
    source: {
      code: null
    }
  }
};
export const Colors = () => /*#__PURE__*/_jsx("div", {
  className: styles['instances-wrapper'],
  children: Object.keys(colors).map(key => /*#__PURE__*/_jsxs("div", {
    className: styles['color-instance'],
    style: {
      backgroundColor: colors[key],
      color: getContrast(colors[key])
    },
    children: [\`\${key} (\${colors[key].toUpperCase()} )\`, /*#__PURE__*/_jsx(ClipboardButton, {
      variant: "tertiary",
      text: key,
      className: styles['copy-button'],
      style: {
        color: getContrast(colors[key])
      },
      children: "Copy"
    })]
  }, key))
});
Colors.parameters = {
  docs: {
    source: {
      code: null
    }
  }
};
const Template = args => /*#__PURE__*/_jsx(ThemeProvider, {
  ...args,
  children: /*#__PURE__*/_jsx("div", {
    style: {
      color: 'var( --jp-white )',
      backgroundColor: 'var( --jp-pink )',
      fontSize: 'var( --font-title-small )',
      padding: 'var( --spacing-base ) calc( var( --spacing-base ) * 2 )',
      borderRadius: 'var( --jp-border-radius )'
    },
    children: "Pink Jetpack Show"
  })
});
export const BasicUsage = Template.bind({});`,locationsMap:{tokens:{startLoc:{col:22,line:97},endLoc:{col:2,line:123},startBody:{col:22,line:97},endBody:{col:2,line:123}},typographies:{startLoc:{col:28,line:131},endLoc:{col:2,line:145},startBody:{col:28,line:131},endBody:{col:2,line:145}},colors:{startLoc:{col:22,line:156},endLoc:{col:2,line:174},startBody:{col:22,line:156},endBody:{col:2,line:174}},"basic-usage":{startLoc:{col:17,line:182},endLoc:{col:2,line:194},startBody:{col:17,line:182},endBody:{col:2,line:194}}}}},title:"JS Packages/Components/Theme Provider"},w=()=>{},S=({text:s,...y})=>{const T=(0,i.A)(s,w);return(0,l.jsx)(_.Ay,{...y,ref:T})},x=({title:s,data:y,children:T=null})=>(0,l.jsxs)("div",{className:o.section,children:[(0,l.jsx)("h1",{className:o.title,children:s}),(0,l.jsx)(c.A,{fluid:!0,children:Object.keys(y).map(k=>(0,l.jsx)(d.A,{lg:3,className:o.box,children:(0,l.jsxs)(c.A,{fluid:!0,horizontalGap:2,children:[(0,l.jsx)(d.A,{className:o.key,children:k}),T&&(0,l.jsx)(d.A,{className:o.example,children:T(y[k])}),(0,l.jsxs)(d.A,{children:[(0,l.jsx)("div",{className:o["value-label"],children:"Value"}),(0,l.jsx)("input",{type:"text",value:y[k],readOnly:!0,className:o.value})]})]})},k))})]}),v=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x,{title:"Typography",data:t.Il,children:s=>(0,l.jsx)("div",{style:{fontSize:s},children:"Text"})}),(0,l.jsx)(x,{title:"Colors",data:t.Tj,children:s=>(0,l.jsx)("div",{className:o["colors-example"],style:{backgroundColor:s}})}),(0,l.jsx)(x,{title:"Borders",data:t.sJ}),(0,l.jsx)(x,{title:"Spacing",data:t.YK})]});v.parameters={docs:{source:{code:null}}};const u=s=>(0,l.jsx)("div",{className:o["instances-wrapper"],children:Object.keys(t.Il).map(y=>(0,l.jsxs)("div",{className:o["font-instance"],style:{fontSize:t.Il[y]},children:[s?.["Text Instance"]||`${y} (${t.Il[y]} )`,(0,l.jsx)(S,{variant:"tertiary",text:y,className:o["copy-button"],children:"Copy"})]},y))});u.args={"Text Instance":""},u.parameters={docs:{source:{code:null}}};const j=()=>(0,l.jsx)("div",{className:o["instances-wrapper"],children:Object.keys(t.Tj).map(s=>(0,l.jsxs)("div",{className:o["color-instance"],style:{backgroundColor:t.Tj[s],color:f(t.Tj[s])},children:[`${s} (${t.Tj[s].toUpperCase()} )`,(0,l.jsx)(S,{variant:"tertiary",text:s,className:o["copy-button"],style:{color:f(t.Tj[s])},children:"Copy"})]},s))});j.parameters={docs:{source:{code:null}}};const b=(s=>(0,l.jsx)(t.Ay,{...s,children:(0,l.jsx)("div",{style:{color:"var( --jp-white )",backgroundColor:"var( --jp-pink )",fontSize:"var( --font-title-small )",padding:"var( --spacing-base ) calc( var( --spacing-base ) * 2 )",borderRadius:"var( --jp-border-radius )"},children:"Pink Jetpack Show"})})).bind({}),U=["Tokens","Typographies","Colors","BasicUsage"];v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => <>
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
    </>`,...v.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <div className={styles['instances-wrapper']}>
        {Object.keys(typography).map(key => <div key={key} className={styles['font-instance']} style={{
    fontSize: typography[key]
  }}>
                {args?.['Text Instance'] || \`\${key} (\${typography[key]} )\`}

                <ClipboardButton variant="tertiary" text={key} className={styles['copy-button']}>
                    Copy
                </ClipboardButton>
            </div>)}
    </div>`,...u.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => <div className={styles['instances-wrapper']}>
        {Object.keys(colors).map(key => <div key={key} className={styles['color-instance']} style={{
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
    </div>`,...j.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <ThemeProvider {...args}>
        <div style={{
    color: 'var( --jp-white )',
    backgroundColor: 'var( --jp-pink )',
    fontSize: 'var( --font-title-small )',
    padding: 'var( --spacing-base ) calc( var( --spacing-base ) * 2 )',
    borderRadius: 'var( --jp-border-radius )'
  }}>
            Pink Jetpack Show
        </div>
    </ThemeProvider>`,...b.parameters?.docs?.source}}};try{u.displayName="Typographies",u.__docgenInfo={description:"",displayName:"Typographies",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/theme-provider/stories/index.stories.tsx#Typographies"]={docgenInfo:u.__docgenInfo,name:"Typographies",path:"../components/components/theme-provider/stories/index.stories.tsx#Typographies"})}catch{}},"../../../node_modules/.pnpm/@wordpress+compose@7.24.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js":(h,m,e)=>{e.d(m,{A:()=>i});var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function i(d,c){const t=(0,_.useRef)();return(0,_.useCallback)(a=>{a?t.current=d(a):t.current&&t.current()},c)}},"../components/components/layout/col/index.tsx":(h,m,e)=>{e.d(m,{A:()=>A});var _=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(d),t=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/layout/col/style.module.scss"),a={};a.insert="head",a.singleton=!1;var C=c()(t.A,a);const n=t.A.locals||{},p=Number(n.smCols),g=Number(n.mdCols),o=Number(n.lgCols),A=r=>{const{children:f,tagName:E="div",className:P}=r,w=Math.min(p,typeof r.sm=="number"?r.sm:p),S=Math.min(p,typeof r.sm=="object"?r.sm.start:0),x=Math.min(p,typeof r.sm=="object"?r.sm.end:0),v=Math.min(g,typeof r.md=="number"?r.md:g),u=Math.min(g,typeof r.md=="object"?r.md.start:0),j=Math.min(g,typeof r.md=="object"?r.md.end:0),B=Math.min(o,typeof r.lg=="number"?r.lg:o),b=Math.min(o,typeof r.lg=="object"?r.lg.start:0),U=Math.min(o,typeof r.lg=="object"?r.lg.end:0),s=(0,_.A)(P,{[n[`col-sm-${w}`]]:!(S&&x),[n[`col-sm-${S}-start`]]:S>0,[n[`col-sm-${x}-end`]]:x>0,[n[`col-md-${v}`]]:!(u&&j),[n[`col-md-${u}-start`]]:u>0,[n[`col-md-${j}-end`]]:j>0,[n[`col-lg-${B}`]]:!(b&&U),[n[`col-lg-${b}-start`]]:b>0,[n[`col-lg-${U}-end`]]:U>0});return(0,i.createElement)(E,{className:s},f)}},"../components/components/layout/container/index.tsx":(h,m,e)=>{e.d(m,{A:()=>g});var _=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(d),t=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/layout/container/style.module.scss"),a={};a.insert="head",a.singleton=!1;var C=c()(t.A,a);const n=t.A.locals||{},p=({children:o,fluid:l=!1,tagName:A="div",className:r,horizontalGap:f=1,horizontalSpacing:E=1},P)=>{const w=(0,i.useMemo)(()=>{const x=`calc( var(--horizontal-spacing) * ${E} )`,v=`calc( var(--horizontal-spacing) * ${f} )`;return{paddingTop:x,paddingBottom:x,rowGap:v}},[f,E]),S=(0,_.A)(r,n.container,{[n.fluid]:l});return(0,i.createElement)(A,{className:S,style:w,ref:P},o)},g=(0,i.forwardRef)(p);try{p.displayName="Container",p.__docgenInfo={description:"JP Container",displayName:"Container",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/layout/container/index.tsx#Container"]={docgenInfo:p.__docgenInfo,name:"Container",path:"../components/components/layout/container/index.tsx#Container"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/layout/col/style.module.scss":(h,m,e)=>{e.d(m,{A:()=>a});var _=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(_),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(d),t=c()(i());t.push([h.id,"@media(max-width: 599px){.TNVxw_ZOJEEynDiM2QYM{grid-column-end:span 1}.Ks8DhEoe0M2rg7i8Qcos{grid-column-start:1}.hPWQqxgVUkTp5NQqrfIn{grid-column-end:2}.H1CbUDrI72aXZoHz2P6C{grid-column-end:span 2}.xyTGpD3bVBInLbgP2lMK{grid-column-start:2}.pEBM8SUyhDj4XyIAYiAq{grid-column-end:3}.xbDPzcogSD2JnGmDyiWZ{grid-column-end:span 3}.fooSursJQahboNx68m3R{grid-column-start:3}.ufTVtUIEIdl9sKOoDgNi{grid-column-end:4}.dwPTqpku444IkQCTeDyr{grid-column-end:span 4}.TpMbkMlo3BQATa8vlznp{grid-column-start:4}.WqNt7hKsjzie3UHqUDJ3{grid-column-end:5}}@media(min-width: 600px)and (max-width: 959px){.FIPb1cviSpE3bfv7tgh7{grid-column-end:span 1}.gJ3mUUPEUQSOLyVyzgLR{grid-column-start:1}.heLAMmYtuFGNteEBNd_K{grid-column-end:2}._Z6bV0ViNirPwmUfTUPc{grid-column-end:span 2}.TtipIIkNLkoby9hzkg2g{grid-column-start:2}.eZ7EWTzJ0eyiwaX80vF7{grid-column-end:3}.BPB1lJYdD9ZF06iU4JqN{grid-column-end:span 3}.mqdtFrxVPqGF69R0ve5t{grid-column-start:3}.W2xRsVUNx4v0bnLZkmLf{grid-column-end:4}.brzzMXJ7uTSUxLhuHlvO{grid-column-end:span 4}.Ua3ENGWSij5OPxJjU4YQ{grid-column-start:4}.Lege9ZfULqw4bTPSEzBT{grid-column-end:5}.R7e1X1OppSwNk7pM_UsU{grid-column-end:span 5}.RXH55oeqA0tzBC268Vvn{grid-column-start:5}.yUqSSBRI2Ba4GULTKEo5{grid-column-end:6}.zgIeYtocCoyRpWMLoA8j{grid-column-end:span 6}.SJgsi7ohYrB9Suu2lwKQ{grid-column-start:6}.evXJXU4ZVmaU3fHbNShw{grid-column-end:7}.OvJtAyKa4CnaJTxrWULN{grid-column-end:span 7}.Tdncikb2MHUB9M8_pzrz{grid-column-start:7}.SznBcu1iExeI62bDI2fv{grid-column-end:8}.dMfdjRo9r2UqnWUO7K7j{grid-column-end:span 8}.RZ8AuwBi2INOYbA3GNes{grid-column-start:8}.gd_tTH3gswBbD0luK4cg{grid-column-end:9}}@media(min-width: 960px){.xOPnT0A5q3l85vlYlB4Z{grid-column-end:span 1}.fYBJDNQ9E5_5wrdSOMHV{grid-column-start:1}.CuviEyxy4A5nI6ZgqQWU{grid-column-end:2}.zir7Y2inBNCuoM331HQS{grid-column-end:span 2}.hneE2V6DFFUK7Z2VlP1k{grid-column-start:2}.JdqTodnmzgM8fNPWGYsD{grid-column-end:3}.pfCLtxtdyfzqKtptYkey{grid-column-end:span 3}.qdvpCh5XwqZBTSQZriSu{grid-column-start:3}.EdkicJW5QtuFGwEtbRrD{grid-column-end:4}.VBsWJStlfQs3FFFuLJgp{grid-column-end:span 4}.TMMxlyKjw7uAASuXktdd{grid-column-start:4}.yOdXvT2PcHRSEAb64oQ5{grid-column-end:5}.k4m90rwEinnOv4X9wCUo{grid-column-end:span 5}.vRMTlNglaIKviScEPcj2{grid-column-start:5}.HJr5rbm2AYnx5iq6yjYw{grid-column-end:6}.f3Wlyk_5EPtXwRmju9bu{grid-column-end:span 6}.DuySSESVIp5ulLCI7gDZ{grid-column-start:6}.YxyyciwGy6DD9y7D7_RA{grid-column-end:7}.T09hcaBcvJppEI8fkeob{grid-column-end:span 7}.sfHLOAucQPyThoatcJlb{grid-column-start:7}.ugj03iSq_LpMPjktSIwW{grid-column-end:8}.O5lpDYm2qg9VuumTrrEw{grid-column-end:span 8}.TLrJVaWtw1Dsta_v5JcP{grid-column-start:8}.OqZ0YRgBvvTNJjsWS7pb{grid-column-end:9}.qr94d82SNkd1ExXHZPJq{grid-column-end:span 9}.H7dCJfM9V64l4aJI2aYD{grid-column-start:9}.xgcnaSvEwWA7naPdo1Q7{grid-column-end:10}.joclYxhsEaNNF4bUW_ue{grid-column-end:span 10}.DKuepavoRxT2sWRScNUO{grid-column-start:10}.LeArlDExZKDiDVBz9j2H{grid-column-end:11}.jhzmR1UDav7Cr1C83NGQ{grid-column-end:span 11}.qeM8lIjXYZiST414vxJk{grid-column-start:11}.sHBullB2KBN_dcAHo02k{grid-column-end:12}.UasosPijxHsKZnWpd0mT{grid-column-end:span 12}.pPlntrGl3JYhJi4XVrGp{grid-column-start:12}.hLgosun56kR2j4m1OdkM{grid-column-end:13}}",""]),t.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",smCols:"4",mdCols:"8",lgCols:"12","col-sm-1":"TNVxw_ZOJEEynDiM2QYM","col-sm-1-start":"Ks8DhEoe0M2rg7i8Qcos","col-sm-1-end":"hPWQqxgVUkTp5NQqrfIn","col-sm-2":"H1CbUDrI72aXZoHz2P6C","col-sm-2-start":"xyTGpD3bVBInLbgP2lMK","col-sm-2-end":"pEBM8SUyhDj4XyIAYiAq","col-sm-3":"xbDPzcogSD2JnGmDyiWZ","col-sm-3-start":"fooSursJQahboNx68m3R","col-sm-3-end":"ufTVtUIEIdl9sKOoDgNi","col-sm-4":"dwPTqpku444IkQCTeDyr","col-sm-4-start":"TpMbkMlo3BQATa8vlznp","col-sm-4-end":"WqNt7hKsjzie3UHqUDJ3","col-md-1":"FIPb1cviSpE3bfv7tgh7","col-md-1-start":"gJ3mUUPEUQSOLyVyzgLR","col-md-1-end":"heLAMmYtuFGNteEBNd_K","col-md-2":"_Z6bV0ViNirPwmUfTUPc","col-md-2-start":"TtipIIkNLkoby9hzkg2g","col-md-2-end":"eZ7EWTzJ0eyiwaX80vF7","col-md-3":"BPB1lJYdD9ZF06iU4JqN","col-md-3-start":"mqdtFrxVPqGF69R0ve5t","col-md-3-end":"W2xRsVUNx4v0bnLZkmLf","col-md-4":"brzzMXJ7uTSUxLhuHlvO","col-md-4-start":"Ua3ENGWSij5OPxJjU4YQ","col-md-4-end":"Lege9ZfULqw4bTPSEzBT","col-md-5":"R7e1X1OppSwNk7pM_UsU","col-md-5-start":"RXH55oeqA0tzBC268Vvn","col-md-5-end":"yUqSSBRI2Ba4GULTKEo5","col-md-6":"zgIeYtocCoyRpWMLoA8j","col-md-6-start":"SJgsi7ohYrB9Suu2lwKQ","col-md-6-end":"evXJXU4ZVmaU3fHbNShw","col-md-7":"OvJtAyKa4CnaJTxrWULN","col-md-7-start":"Tdncikb2MHUB9M8_pzrz","col-md-7-end":"SznBcu1iExeI62bDI2fv","col-md-8":"dMfdjRo9r2UqnWUO7K7j","col-md-8-start":"RZ8AuwBi2INOYbA3GNes","col-md-8-end":"gd_tTH3gswBbD0luK4cg","col-lg-1":"xOPnT0A5q3l85vlYlB4Z","col-lg-1-start":"fYBJDNQ9E5_5wrdSOMHV","col-lg-1-end":"CuviEyxy4A5nI6ZgqQWU","col-lg-2":"zir7Y2inBNCuoM331HQS","col-lg-2-start":"hneE2V6DFFUK7Z2VlP1k","col-lg-2-end":"JdqTodnmzgM8fNPWGYsD","col-lg-3":"pfCLtxtdyfzqKtptYkey","col-lg-3-start":"qdvpCh5XwqZBTSQZriSu","col-lg-3-end":"EdkicJW5QtuFGwEtbRrD","col-lg-4":"VBsWJStlfQs3FFFuLJgp","col-lg-4-start":"TMMxlyKjw7uAASuXktdd","col-lg-4-end":"yOdXvT2PcHRSEAb64oQ5","col-lg-5":"k4m90rwEinnOv4X9wCUo","col-lg-5-start":"vRMTlNglaIKviScEPcj2","col-lg-5-end":"HJr5rbm2AYnx5iq6yjYw","col-lg-6":"f3Wlyk_5EPtXwRmju9bu","col-lg-6-start":"DuySSESVIp5ulLCI7gDZ","col-lg-6-end":"YxyyciwGy6DD9y7D7_RA","col-lg-7":"T09hcaBcvJppEI8fkeob","col-lg-7-start":"sfHLOAucQPyThoatcJlb","col-lg-7-end":"ugj03iSq_LpMPjktSIwW","col-lg-8":"O5lpDYm2qg9VuumTrrEw","col-lg-8-start":"TLrJVaWtw1Dsta_v5JcP","col-lg-8-end":"OqZ0YRgBvvTNJjsWS7pb","col-lg-9":"qr94d82SNkd1ExXHZPJq","col-lg-9-start":"H7dCJfM9V64l4aJI2aYD","col-lg-9-end":"xgcnaSvEwWA7naPdo1Q7","col-lg-10":"joclYxhsEaNNF4bUW_ue","col-lg-10-start":"DKuepavoRxT2sWRScNUO","col-lg-10-end":"LeArlDExZKDiDVBz9j2H","col-lg-11":"jhzmR1UDav7Cr1C83NGQ","col-lg-11-start":"qeM8lIjXYZiST414vxJk","col-lg-11-end":"sHBullB2KBN_dcAHo02k","col-lg-12":"UasosPijxHsKZnWpd0mT","col-lg-12-start":"pPlntrGl3JYhJi4XVrGp","col-lg-12-end":"hLgosun56kR2j4m1OdkM"};const a=t},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/layout/container/style.module.scss":(h,m,e)=>{e.d(m,{A:()=>a});var _=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(_),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(d),t=c()(i());t.push([h.id,".lAAWDY3GAoGI8Yz2Iot3{--max-container-width: 1128px;--vertical-gutter: 24px;--horizontal-spacing: 8px;display:grid;column-gap:var(--vertical-gutter);max-width:var(--max-container-width);margin:0 auto;width:100%}@media(max-width: 599px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 16px;grid-template-columns:repeat(4, minmax(0, 1fr))}}@media(min-width: 600px)and (max-width: 959px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 18px;grid-template-columns:repeat(8, minmax(0, 1fr))}}@media(min-width: 960px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 24px;grid-template-columns:repeat(12, minmax(0, 1fr))}}.lAAWDY3GAoGI8Yz2Iot3.ZUqObxyT7MTULMSxNKnV{max-width:none;padding:unset}",""]),t.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",container:"lAAWDY3GAoGI8Yz2Iot3",fluid:"ZUqObxyT7MTULMSxNKnV"};const a=t},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/theme-provider/stories/style.module.scss":(h,m,e)=>{e.d(m,{A:()=>a});var _=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(_),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(d),t=c()(i());t.push([h.id,".djlT4MR9mCkNuhbkHm03{width:100%;margin:auto;padding:8px 32px}.zmEyfn93SUKw7X679b7O{background-color:var(--jp-green-80);border-radius:var(--jp-border-radius);padding:8px;color:var(--jp-white);font-weight:600}.cptepdy7B635SDRtLfeg{border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);padding:16px}.upVQY7oNP09IcNbPlneg{height:40px;display:flex;align-items:center;border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);padding:8px}.XcehLXjVLlYcp4wVC5jY{font-weight:600;font-size:var(--font-label);margin:8px 0}.qCBmEXH6omuAdv5UAnAQ{width:100%}.UKOAl8xUCeQBSNAWKqyy{width:100%;height:100%}.v2yW9Kwolj_mxn6KxVXD{display:flex;flex-direction:column}.p_enbTSQGsW1TXy5ZgtA{margin:10px 0;padding:20px 30px;background-color:var(--jp-white);border:1px dotted var(--jp-gray-10);position:relative}.p_enbTSQGsW1TXy5ZgtA:hover .n_ArOp95gq9eLYJU1YwL{opacity:1}.CdI6HKBSL4bsedGTOCIx{font-size:var(--font-title-small);border:1px dotted var(--jp-gray-10);min-height:60px;line-height:60px;padding:10px;margin:10px 0;position:relative}.CdI6HKBSL4bsedGTOCIx:hover .n_ArOp95gq9eLYJU1YwL{opacity:1}.n_ArOp95gq9eLYJU1YwL{opacity:.3;position:absolute;top:5px;right:5px}",""]),t.locals={section:"djlT4MR9mCkNuhbkHm03",key:"zmEyfn93SUKw7X679b7O",box:"cptepdy7B635SDRtLfeg",example:"upVQY7oNP09IcNbPlneg","value-label":"XcehLXjVLlYcp4wVC5jY",value:"qCBmEXH6omuAdv5UAnAQ","colors-example":"UKOAl8xUCeQBSNAWKqyy","instances-wrapper":"v2yW9Kwolj_mxn6KxVXD","font-instance":"p_enbTSQGsW1TXy5ZgtA","copy-button":"n_ArOp95gq9eLYJU1YwL","color-instance":"CdI6HKBSL4bsedGTOCIx"};const a=t},"../../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js":(h,m,e)=>{e.d(m,{A:()=>_});function _(i,d){var c=0,t,a;d=d||{};function C(){var n=t,p=arguments.length,g,o;e:for(;n;){if(n.args.length!==arguments.length){n=n.next;continue}for(o=0;o<p;o++)if(n.args[o]!==arguments[o]){n=n.next;continue e}return n!==t&&(n===a&&(a=n.prev),n.prev.next=n.next,n.next&&(n.next.prev=n.prev),n.next=t,n.prev=null,t.prev=n,t=n),n.val}for(g=new Array(p),o=0;o<p;o++)g[o]=arguments[o];return n={args:g,val:i.apply(null,g)},t?(t.prev=n,n.next=t):a=n,c===d.maxSize?(a=a.prev,a.next=null):c++,t=n,n.val}return C.clear=function(){t=null,a=null,c=0},C}}}]);
