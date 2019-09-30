import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  background-color: #161515;
  color: #ffffff;
  font-weight: 100;
`
const SubContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(#161515, #383737);
  opacity: 0.7
  color: #ffffff;
  font-weight: 100;
  padding: 5vh;
`

const Space = styled.div`
  min-height: 25px;
`

const Footer = () => (
  <Container>
    <SubContainer>
      <Space />
      <Grid
        container
        direction={'row'}
        alignItems={'center'}
        justify={'space-between'}
        style={{ width: '100%' }}
      >
        <div>
          Copyright © 2019. All rights reserved. Made with{' '}
          <a href="https://www.gatsbyjs.org/" style={{ color: 'white' }}>
            Gatsby
          </a>
          .
        </div>
      </Grid>
      <Space />
    </SubContainer>
  </Container>
)

export default Footer