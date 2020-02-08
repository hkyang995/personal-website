import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Resume from '../components/resume'
import Contact from '../components/contact'
import Footer from '../components/footer'

const IndexPage = () => (
  <Layout>
    <SEO keywords={[`gatsby`, `application`, `react`]} />
    <Resume />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
