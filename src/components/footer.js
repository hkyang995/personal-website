import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  background-color: #161515;
`
const SubContainer = styled.div`
  width: 100%;
  opacity: 0.3
  color: #ffffff;
  font-weight: 100;
  padding: 5vh;
`

const Space = styled.div`
  min-height: 25px;
`

const SmallFont = styled.div`
  font-size: 12px;
  padding-bottom: 0px;
`

const Footer = () => (
  <Container>
    <SubContainer>
      <Grid
        container
        direction={'row'}
        alignItems={'center'}
        justify={'center'}
        style={{ width: '100%' }}
      >
        <SmallFont>
          Copyright © 2019. All rights reserved. Made with{' '}
          <a href="https://www.gatsbyjs.org/" style={{ color: 'white' }}>
            Gatsby
          </a>
          .
        </SmallFont>
      </Grid>
    </SubContainer>
  </Container>
)

export default Footer
