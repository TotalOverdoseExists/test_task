import React from 'react'
import './main.scss'

function Banner() {
	return (
		<section id='l-banner'>
			<div className='container'>
				<div className='row text-center text-md-start'>
					<div className='col-12'>
						<h1>Text_text_text</h1>
						<span>Text_text_text_text</span>
					</div>
					<div className='col-12 col-md-auto'>
						<button>Text_text_text</button>
					</div>
				</div>
			</div>
		</section>
	)
}

function Main() {
	return (
		<main>
			<Banner />
		</main>
	)
}

export default Main