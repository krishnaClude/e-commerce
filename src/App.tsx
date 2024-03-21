import React from 'react'
import 'bootstrap/scss/bootstrap.scss'
import Home from './Component/Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Product from './Component/Pages/Product'
import Aboutus from './Component/Pages/Aboutus'
import Contactus from './Component/Pages/Contactus'
import Header from './Component/General_components/Header/Header'
import Footer from './Component/General_components/Footer/Footer'
import './App.module.scss'
function App() {
    return (
        <>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/product" Component={Product} />
                    <Route path="/about" Component={Aboutus} />
                    <Route path="/contact" Component={Contactus} />
                </Routes>
            </Router>
            <Footer />
        </>
    )
}

export default App
