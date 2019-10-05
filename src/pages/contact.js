import React from 'react'
import Layout from '../components/layout'

import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head mainTitle="Contact"></Head>
            <h1>Contact Me at:</h1>
            <p>marlonspr@hotmail.com</p>
            <p>You can follow me on <a href="https://www.google.com" target="_blank">Twitter</a></p>
        </Layout>
    )
}

export default ContactPage