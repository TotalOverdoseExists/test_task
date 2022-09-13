import React from 'react'
import './main.scss'
import firstBlockInfo from './firstBlock.json'
import secondBlockInfo from './secondBlock.json'

function Banner() {
	return (
		<section id='l-banner'>
			<div className='container'>
				<div className='row text-center ms-md-5 text-md-start'>
					<div className='col-12'>
						<h1>Text_text_text</h1>
						<span className='ms-md-2 ms-xl-0'>Text_text_text_text</span>
					</div>
					<div className='col-12 col-md-auto'>
						<button>Text_text_text</button>
					</div>
				</div>
			</div>
		</section>
	)
}

function FirstBlock() {
	return (
		<section id='l-firstBlock'>
			<div className='container'>
				<div className='row'>
					{Object.entries(firstBlockInfo).map(([key, value]) => (
						<div className='col-12 col-xl-6 m-bigPadding' key={key}>
							<article className='m-firstBlock'>
								<figure>
									<img className='img-fluid' src={value.img} alt={value.header} />
								</figure>
								<h2>{value.header}</h2>
								<p>{value.text}</p>
								<hr />
								<a href={value.link}>{value.linkText}</a>
							</article>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

function SecondBlock() {
	return (
		<section id='l-secondBlock'>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<h2>
							Text_text
						</h2>
					</div>
				</div>
				<div className='row'>
					{Object.entries(secondBlockInfo).map(([key, value]) => (
						<div className='col-12 col-md-6 col-xl-3' key={key}>
							<article className='m-secondBlock'>
								<figure>
									<img className='img-fluid' src={value.img} alt={value.alt} />
								</figure>
								<p>{value.text}</p>
							</article>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

function Main() {
	return (
		<main>
			<Banner />
			<FirstBlock />
			<SecondBlock />
		</main>
	)
}

export default Main