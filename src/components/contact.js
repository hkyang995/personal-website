import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

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
  min-height: ${props => (props.height ? props.height : '75px')};
  min-width: ${props => (props.width ? props.width : '75px')};
`
const BodyText = styled.a`
  font-weight: 100;
  font-size: 20px;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
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
      <HeaderText>Get in touch</HeaderText>
      <Space />
      <Grid
        container
        direction={'row'}
        alignItems={'center'}
        justify={'center'}
      >
        <Grid direction={'column'} alignItems={'center'} justify={'center'}>
          <Grid
            container
            direction={'row'}
            alignItems={'center'}
            justify={'center'}
          >
            <FaGithub /> <Space width="10px" height="0px" />
            <BodyText href="https://github.com/hkyang995">hkyang995</BodyText>
          </Grid>
          <Space height="20px" />
          <Grid
            container
            direction={'row'}
            alignItems={'center'}
            justify={'center'}
          >
            <FaLinkedinIn /> <Space width="10px" height="0px" />
            <BodyText href="https://www.linkedin.com/in/henry-yang-83286415a/">
              Henry Yang
            </BodyText>
          </Grid>
        </Grid>
        <Space width="200px" />
        <div>
          <BodyText href="mailto:hkyang@csu.fullerton.edu">
            hkyang@csu.fullerton.edu
          </BodyText>
        </div>
      </Grid>
      <Space />
    </Grid>
  </Container>
)

export default Contact
