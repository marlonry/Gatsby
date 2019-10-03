import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {

    return (
        <Layout>
            <h1>About Me</h1>
            <p>I like to exercise my mind and body</p>
            <p>If you need a developer <Link to="/contact">Contact me</Link></p>
        </Layout>
    )
}

export default AboutPage