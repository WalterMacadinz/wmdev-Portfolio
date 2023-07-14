/* eslint-disable prettier/prettier */
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
	name: 'Sedibus Engineering',
	role: 'Developer',
	description:
		'Website for gaining insights into tech, products, social media, and more. Developed in WordPress',
	link: 'https://sedibusengineering.com',
	image: '/fetch-monitors/sedibus.PNG',
	toolbox: {
		title: 'Tech Stack',
		description:
			'Website for gaining insights construction, engineering, services, and more.',
		items: [
			{
				icons: [<SiJavascript size={50} />, <SiWordpress />],
				image: '/fetch-monitors/sedibus.PNG',
				name: 'CMS',
				description:
					'The delightful user interface for Sedibus Engineering. Built with Wordpress and custom-themes using Javascript.',
			},
		],
	},
}
