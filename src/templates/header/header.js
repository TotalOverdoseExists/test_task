import React from 'react'
import {
	Link,
	useLocation
} from 'react-router-dom'
import './header.scss'
import logo from '../../images/logo.png'

function CustomLink({label, to}) {
	const location = useLocation()
	const match = location.pathname === to

	const menuClose = () => {
		if (document.querySelector('#l-menu').classList.contains('js-menuOpen')) {
			document.querySelector('#l-menu').classList.remove('js-menuOpen')
		}
	}

	return (
		<li className={match ? 'active' : ''}>
			<Link to={to} onClick={menuClose}>{label}</Link>
		</li>
	)
}

function Header() {
	const menuToggle = (e) => {
		e.preventDefault()
		document.querySelector('#l-menu').classList.toggle('js-menuOpen')
	}

	return (
		<header id='l-header'>
			<div className='container'>
				<div className='row align-items-center align-items-xl-end mx-md-0'>
					<div className='col-4 col-md-auto'>
						<a href='/'>
							<img src={logo} alt='logo' />
						</a>
					</div>
					<div className='col-4 col-md-auto col-xl text-center text-md-start'>
						<a href='/'>
							<span>Logo</span>
						</a>
					</div>
					<div className='col-4 d-md-none text-end'>
						<button onClick={menuToggle}>&#9776;</button>
					</div>
					<nav id='l-menu' className='col-md-9 col-xl-6 text-end text-md-center ms-md-auto'>
						<button onClick={menuToggle} className='d-md-none'>&#10006;</button>
						<ul>
							<CustomLink to='/' label='Text' />
							<CustomLink to='/plug/' label='Text_text' />
							<CustomLink to='/another-plug/' label='text_text_text' />
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header