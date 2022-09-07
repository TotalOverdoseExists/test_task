import React from 'react'
import './header.scss'
import logo from '../../images/logo.png'

const menuItems = {
	'/link/': 'text',
	'/link1/': 'text_text',
	'/link11/': 'text_text_text'
}

function Header() {
	return (
		<header>
			<div className='container'>
				<figure>
					<img src={logo} alt='logo' />
					<figcaption>Logo</figcaption>
				</figure>
				<nav>
					<ul>
						{Object.entries(menuItems).map(([link, item]) => (
							<li key={item}>
								<a href={link}>{item}</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header