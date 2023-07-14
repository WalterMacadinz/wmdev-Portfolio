/* eslint-disable react/jsx-key */

import {
	BsCode,
	BsLaptop,
	BsLightning,
	BsPerson,
	BsWindow,
} from 'react-icons/bs'
import { RiFireFill, RiOpenSourceFill, RiReactjsFill } from 'react-icons/ri'
import {
	SiTypescript,
	SiStyledcomponents,
	SiSpeedtest,
	SiFramer,
} from 'react-icons/si'

export default {
	name: 'AQUA APP',
	role: 'Contributor, Front-End Developer',
	description:
		'A beautiful, modern, and accessible UI library for React. Fully open source, of course.',
	link: 'https://github.com/vijaya-technologies/aqua-api',
	image: '/ethereal2/aqualand.png',
	toolbox: {
		title: 'Feature Rich',
		description:
			'Designed with React-Typescript and Tailwind CSS, Aqua App is a web application that is under development. It aims to our capabilities to give what our clients deserve.',
		items: [
			{
				icons: [
					<SiTypescript size={50} />,
					<RiReactjsFill />,
					<SiFramer size={60} />,
					<SiStyledcomponents />,
				],
				image: '/ethereal2/aquadash.png',
				name: 'Aqua App Temporary Dashboard',
				description:
					'Built with React TypeScript, Styled Components, and Tailwind CSS.',
			},
			{
				icons: [
					<SiSpeedtest />,
					<RiFireFill />,
					<BsLightning size={60} />,
					<BsWindow />,
				],
				name: 'Performance First',
				description:
					'Using techniques such as window virtualization and memoization, Aqua App is blazing fast.',
			},
			{
				icons: [
					<BsPerson size={50} />,
					<BsLaptop size={50} />,
					<BsCode size={60} />,
					<RiOpenSourceFill size={60} />,
				],
				name: 'Developers Developers Developers',
				description:
					'Aqua App empowers developers to build beautiful, performant, and accessible applications.',
			},
		],
	},
}
