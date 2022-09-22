import React from 'react'
import './main.scss'
import articlesImg1 from '../../images/firstBlock1.png'
import articlesImg2 from '../../images/firstBlock2.png'
import advantagesImg1 from '../../images/secondBlock1.png'
import advantagesImg2 from '../../images/secondBlock2.png'
import advantagesImg3 from '../../images/secondBlock3.png'
import advantagesImg4 from '../../images/secondBlock4.png'

const articles = {
	"item-1": {
		"img": articlesImg1,
		"header": "Text_text",
		"text": "TEXT_TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT",
		"link": "/plug/",
		"linkText": "Text"
	},
	"item-2": {
		"img": articlesImg2,
		"header": "Text_text",
		"text": "TEXT_TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT",
		"link": "/another-plug/",
		"linkText": "Text"
	}
}

const advantages = {
	"item-1": {
		"img": advantagesImg1,
		"alt": "alt",
		"text": "TEXT_TEXT_TEXT_TEXT TEXT_TEXT_TEXT_TEXT TEXT_TEXT_TEXT_TEXT"
	},
	"item-2": {
		"img": advantagesImg2,
		"alt": "alt",
		"text": "TEXT_TEXT_TEXT_TEXT TEXT_TEXT_TEXT_TEXT TEXT_TEXT_TEXT_TEXT"
	},
	"item-3": {
		"img": advantagesImg3,
		"alt": "alt",
		"text": "TEXT_TEXT_TEXT_TEXT TEXT_TEXT_TEXT_TEXT TEXT_TEXT_TEXT_TEXT"
	},
	"item-4": {
		"img": advantagesImg4,
		"alt": "alt",
		"text": "TEXT_TEXT_TEXT_TEXT TEXT_TEXT_TEXT_TEXT TEXT_TEXT_TEXT_TEXT"
	}
}

function Banner() {
	return (
		<section className='banner'>
			<div className='wrapper'>
				<h1 className='mainHeading'>Text_text_text</h1>
				<span className='bannerInfo'>Text_text_text_text</span>
				<button className='button bannerButton' aria-label='Clickable button'>Text_text_text</button>
			</div>
		</section>
	)
}

function Articles(props) {
	return (
		<section className='articles wrapper'>
			{Object.entries(props.data).map(([key, value]) => (
				<article className='article' key={key}>
					<figure className='articleImgWrapper'>
						<img className='articleImg' src={value.img} alt={value.header} />
					</figure>
					<h2 className='articleHeading'>{value.header}</h2>
					<p className='articleText'>{value.text}</p>
					<hr className='articleDevider' />
					<a className='articleLink' href={value.link}>{value.linkText}</a>
				</article>
			))}
		</section>
	)
}

function Advantages(props) {
	return (
		<section className='advantages wrapper'>
			<h2 className='advantagesHeading'>Text_text</h2>
			{Object.entries(props.data).map(([key, value]) => (
				<article className='advantage' key={key}>
					<figure className='advantageImgWrapper'>
						<img className='advantageImg' src={value.img} alt={value.alt} />
					</figure>
					<p className='advantageText'>{value.text}</p>
				</article>
			))}
		</section>
	)
}

function Main() {
	return (
		<main>
			<Banner />
			<Articles data={articles} />
			<Advantages data={advantages} />
		</main>
	)
}

export default Main