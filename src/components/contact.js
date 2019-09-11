import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  background-color: #161515;
  color: #ffffff;
  font-weight: 100;
  padding: 5vh;
`
const HeaderText = styled.h1``
const BodyText = styled.div`
  font-weight: 100;
`

const Contact = () => (
  <Container>
    <HeaderText>Contact</HeaderText>
    <BodyText> Contact me</BodyText>
  </Container>
)

export default Contact
