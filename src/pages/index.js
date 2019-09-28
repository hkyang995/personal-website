import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Resume from '../components/resume'
import Clients from '../components/clients'
import Contact from '../components/contact'
import Footer from '../components/footer'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Resume />
    <Clients />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
