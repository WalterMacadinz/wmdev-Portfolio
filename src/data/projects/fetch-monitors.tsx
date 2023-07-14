/* eslint-disable react/jsx-key */

import { RiReactjsFill } from 'react-icons/ri'
import {
	SiTypescript,
	SiStyledcomponents,
	SiAmazonaws,
	SiHetzner,
	SiPostgresql,
	SiRust,
	SiMongodb,
	SiRedis,
	SiNodedotjs,
	SiJavascript,
	SiWordpress,
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

export default {
	name: 'Somera Solutions',
	role: 'Developer',
	description:
		'Website for gaining insights into tech, products, social media, and more. Developed in WordPress',
	link: 'https://somerasolutions.com',
	image: '/fetch-monitors/somera.PNG',
	toolbox: {
		title: 'Tech Stack',
		description:
			'Website for gaining insights into tech, products, social media, and more.',
		items: [
			{
				icons: [<SiJavascript size={50} />, <SiWordpress />],
				image: '/fetch-monitors/somera.PNG',
				name: 'CMS',
				description:
					'The delightful user interface for Somera Solutions. Built with Wordpress and custom-themes using Javascript.',
			},
		],
	},
}
