import React from 'react'
import './header.scss'
import logo from '../../images/logo.png'

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
							<li className='active'>
								<a href='/'>Text</a>
							</li>
							<li>
								<a href='/link/'>Text_text</a>
							</li>
							<li>
								<a href='/link/'>text_text_text</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header