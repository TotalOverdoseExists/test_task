import React from 'react'
import './header.scss'
import logo from '../../images/logo.png'

const menuItems = {
	'/link/': 'text',
	'/link1/': 'text_text',
	'/link11/': 'text_text_text'
}

function Header() {
	const menuToggle = (e) => {
		e.preventDefault()
		document.querySelector('#l-menu').classList.toggle('js-menuOpen')
	}

	return (
		<header id='header'>
			<div className='container'>
				<div className='row align-items-center align-items-lg-end mx-md-0'>
					<div className='col-4 col-md-auto'>
						<img src={logo} alt='logo' />
					</div>
					<div className='col-4 col-md-auto col-lg text-center text-md-start'>
						<span>Logo</span>
					</div>
					<div className='col-4 d-md-none text-end'>
						<button onClick={menuToggle}>&#9776;</button>
					</div>
					<nav id='l-menu' className='col-md-9 col-lg-6 text-end text-md-center ms-md-auto'>
						<button onClick={menuToggle} className='d-md-none'>&#10006;</button>
						<ul>
							{Object.entries(menuItems).map(([link, item]) => (
								<li key={item}>
									<a href={link}>{item}</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header