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
	name: 'Adiona Tours',
	role: 'Developer',
	description:
		'Website for gaining insights into tours, packages, social media, and more. Developed in WordPress',
	link: 'https://adionatours.com',
	image: '/fetch-monitors/adiona.PNG',
	toolbox: {
		title: 'Tech Stack',
		description:
			'Website for gaining insights in touring, iteniraries, services, and more.',
		items: [
			{
				icons: [<SiJavascript size={50} />, <SiWordpress />],
				image: '/fetch-monitors/adiona.PNG',
				name: 'CMS',
				description:
					'The delightful user interface for Adiona Tours. Built with Wordpress and custom-themes using Javascript.',
			},
		],
	},
}
