import React from 'react'
import {
	Link,
	useLocation
} from 'react-router-dom'
import './header.scss'
import logo from '../../images/logo.png'

function CustomLink({to, label}) {
	const location = useLocation()
	const match = location.pathname === to

	return (
		<li className={match ? 'navItem active' : 'navItem'} role='menuitem'>
			<Link className='navLink' to={to}>{label}</Link>
		</li>
	)
}

function Header() {
	return (
		<header className='header'>
			<div className='wrapper'>
				<a className='link' href='/'>
					<img className='logoImg' src={logo} alt='logo' />
				</a>
				<a className='link' href='/'>
					<span className='logoName'>Logo</span>
				</a>
				<input className='menuButtonHidden' type='checkbox' id='menuButton' />
				<label className='hamburger' htmlFor="menuButton" role='button' aria-labelledby='menuButton' aria-controls='nav' aria-expanded='false'>
					<span className='hamburgerLine'></span>
				</label>
				<nav id='nav' className='nav' aria-labelledby='menuButton'>
					<ul className='navList' role='menu'>
						<CustomLink to='/' label='Text' />
						<CustomLink to='/plug/' label='Text_text' />
						<CustomLink to='/another-plug/' label='text_text_text' />
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header