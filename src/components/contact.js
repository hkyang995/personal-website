import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import { IoIosMail } from 'react-icons/io'

const Container = styled.div`
  width: 100%;
  background-color: #161515;
  color: #ffffff;
  font-weight: 100;
  padding: 5vh;
`
const HeaderText = styled.div`
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 150;
`

const Space = styled.div`
  min-height: 75px;
`
const BodyText = styled.div`
  font-weight: 100;
`

const Contact = () => (
  <Container>
    <Grid
      container
      direction={'column'}
      alignItems={'center'}
      justify={'center'}
    >
      <Space />
      <Space />
      <HeaderText>Contact</HeaderText>
      <Space />
      <Grid
        container
        direction={'row'}
        alignItems={'center'}
        justify={'center'}
      >
        <IoIosMail />
        <BodyText>hkyang@csu.fullerton.edu</BodyText>
      </Grid>
      <Space />
    </Grid>
  </Container>
)

export default Contact
