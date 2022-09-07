import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Header from './templates/header/header'
import Main from './templates/main/main'
import Footer from './templates/footer/footer'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Header />
		<Main />
		<Footer />
  </React.StrictMode>
)

reportWebVitals()
