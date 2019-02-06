import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Resume from '../components/resume'
import Projects from '../components/projects'
import Contact from '../components/contact'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Resume />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
