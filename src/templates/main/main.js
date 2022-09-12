import React from 'react'
import './main.scss'
import firstBlockImg1 from '../../images/firstBlock1.png'
import firstBlockImg2 from '../../images/firstBlock2.png'
import secondBlockImg1 from '../../images/secondBlock1.png'
import secondBlockImg2 from '../../images/secondBlock2.png'
import secondBlockImg3 from '../../images/secondBlock3.png'
import secondBlockImg4 from '../../images/secondBlock4.png'

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
					<div className='col-12 col-xl-6'>
						<article className='m-firstBlock'>
							<figure>
								<img className='img-fluid' src={firstBlockImg1} alt='img1' />
							</figure>
							<h2>Text_text</h2>
							<p>
								TEXT_TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT
							</p>
							<hr />
							<a href='/link/'>Text</a>
						</article>
					</div>
					<div className='col-12 col-xl-6'>
						<article className='m-firstBlock'>
							<figure>
								<img className='img-fluid' src={firstBlockImg2} alt='img2' />
							</figure>
							<h2>Text_text</h2>
							<p>
								TEXT_TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT
							</p>
							<hr />
							<a href='/link/'>Text</a>
						</article>
					</div>
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
					<div className='col-12 col-md-6 col-xl-3'>
						<article className='m-secondBlock'>
							<figure>
								<img className='img-fluid' src={secondBlockImg1} alt='img1' />
							</figure>
							<p>
								TEXT_TEXT_TEXT_TEXT TEXT_TEXT_TEXT_TEXT TEXT_TEXT_TEXT_TEXT
							</p>
						</article>
					</div>
					<div className='col-12 col-md-6 col-xl-3'>
						<article className='m-secondBlock'>
							<figure>
								<img className='img-fluid' src={secondBlockImg2} alt='img2' />
							</figure>
							<p>
								TEXT_TEXT_TEXT_TEXT TEXT_TEXT_TEXT_TEXT TEXT_TEXT_TEXT_TEXT
							</p>
						</article>
					</div>
					<div className='col-12 col-md-6 col-xl-3'>
						<article className='m-secondBlock'>
							<figure>
								<img className='img-fluid' src={secondBlockImg3} alt='img3' />
							</figure>
							<p>
								TEXT_TEXT_TEXT_TEXT TEXT_TEXT_TEXT_TEXT TEXT_TEXT_TEXT_TEXT
							</p>
						</article>
					</div>
					<div className='col-12 col-md-6 col-xl-3'>
						<article className='m-secondBlock'>
							<figure>
								<img className='img-fluid' src={secondBlockImg4} alt='img4' />
							</figure>
							<p>
								TEXT_TEXT_TEXT_TEXT TEXT_TEXT_TEXT_TEXT TEXT_TEXT_TEXT_TEXT
							</p>
						</article>
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
			<FirstBlock />
			<SecondBlock />
		</main>
	)
}

export default Main