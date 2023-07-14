import { BsArrowRight } from 'react-icons/bs'
import { GoOctoface } from 'react-icons/go'
import { send_analytics } from '../../util'
import Chip from '../chip'
import Logo from '../logo'
import styles from './.module.css'

export default () => (
	<nav className={styles.nav}>
		<div className={styles.container}>
			<a
				href="/"
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '10px',
					fontWeight: 'bold',
				}}
			>
				<span style={{ width: '36px' }}>
					<Logo pageScroll />
				</span>
				{import.meta.env.DEV ? 'Walter Macadini' : 'Walter Macadini'}
			</a>
			<div>
				<ul className={styles.list}>
					<li>
						<a href="#skills">Skills</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
					<li onClick={() => send_analytics('Resume Downloaded')}>
						<a href="/public/Macadini_Walter-Resume (1).pdf">Resume</a>
					</li>
				</ul>
			</div>
			<div className={styles.right}>
				<Chip
					prompt={
						<>
							Visit
							<BsArrowRight />
						</>
					}
					link="https://github.com/WalterMacadinz"
				>
					<GoOctoface /> Github
				</Chip>
			</div>
		</div>
	</nav>
)
