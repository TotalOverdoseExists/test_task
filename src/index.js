import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-utilities.css'
import './index.scss'
import Header from './templates/header/header'
import Main from './templates/main/main'
import Footer from './templates/footer/footer'
import Plug from './templates/plug/plug'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
		<BrowserRouter>
    <Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/plug/' element={<Plug />} />
				<Route path='/another-plug/' element={<Plug />} />
			</Routes>
		<Footer />
		</BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
