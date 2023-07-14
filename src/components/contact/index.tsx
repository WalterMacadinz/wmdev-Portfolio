import { useState } from 'react'
import { BsDownload, BsFilePdf } from 'react-icons/bs'
import { send_analytics } from '../../util'
import Chip from '../chip'
import styles from './.module.css'

export default () => {
	const [msg, setMsg] = useState('')
	const [email, setEmail] = useState('')
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.left} id="contact">
					<h3
						style={{
							margin: 0,
						}}
					>
						Contact me
					</h3>
					<p>
						Email:{' '}
						<a
							target="_blank"
							href="mailto:macadiniwalter64@gmail.com"
							rel="noreferrer"
						>
							macadiniwalter64@gmail.com
						</a>
					</p>
				</div>

				<div className={styles.right}>
					<h4>Resume</h4>
					<h5
						style={{
							marginBottom: '10px',
						}}
					>
						Walter Macadini • Web Developer
					</h5>
					<p>Skills</p>
					<ul
						style={{
							margin: '8px',
						}}
					>
						<li>React</li>
						<li>TypeScript</li>
						<li>Node.js</li>
						<li>WordPress</li>
					</ul>
					<p>Experience</p>
					<ul
						style={{
							margin: '8px',
						}}
					>
						<li>
							Software Engineer, Vijaya.tech: <i>July 2022 - June 2023</i>
							<p>Coordinated development across all aspects of...</p>
						</li>
					</ul>
					<br />
					<div
						style={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						{' '}
						<Chip
							prompt={
								<>
									Download <BsDownload />
								</>
							}
							link="https://drive.google.com/file/d/1PTu595xzKRHns12DkZjCj81A-elSvlJf/view?usp=sharing"
							onClick={() => send_analytics('Resume Downloaded')}
						>
							Resume
							<BsFilePdf />
						</Chip>
					</div>
				</div>
			</div>
		</section>
	)
}
