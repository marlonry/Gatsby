import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import { ThemeProvider } from 'styled-components'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const theme = {
    font: "'Poppins', sans-serif",
    color: "#19CFDB",
}

const theme2 = {
    font: "Arial",
}

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout