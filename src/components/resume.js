import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import watchtowerimg from '../images/watchtower_case.png'
import securechatimg from '../images/securechat_case.png'

const Container = styled.div`
  width: 100%;
  background-color: #161515;
  color: #ffffff;
  font-weight: 100;
  padding: 35vh;
`
const HeaderText = styled.h1``
const SubHeaderText = styled.h3``
const SubBodyText = styled.div`
  font-style: italic;
  font-size: 1.1em;
`
const BodyText = styled.div`
  font-weight: 100;
  font-size: 0.9em;
`
const ProjectImg = styled.img`
  width: 600px;
`

const SingleProject = props => (
  <Grid
    container
    direction={props.direction}
    alignItems={'center'}
    justifyContent={'center'}
  >
    <ProjectImg src={props.img} />
    <Grid>
      <SubHeaderText>{props.name}</SubHeaderText>
      <SubBodyText>{props.subheader}</SubBodyText>
      <BodyText>{props.body}</BodyText>
    </Grid>
  </Grid>
)

const Resume = () => (
  <Container>
    <Grid
      container
      direction={'row'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <HeaderText>Projects</HeaderText>
    </Grid>
    <SingleProject
      name={'Secure Chat'}
      subheader={'Real time secure chat'}
      body={
        'Secure chatroom application using AES and RSA, made with GraphQL Nexus and ReactJS.'
      }
      direction={'row'}
      img={securechatimg}
    />
    <SingleProject
      name={'Watchtower'}
      subheader={'Custom data gathering for lifeguard agencies'}
      body={
        'Mobile data collection application using Serverless and Node.js to instantly collect and visualize survey data from lifeguards out in the field.'
      }
      direction={'row-reverse'}
      img={watchtowerimg}
    />
  </Container>
)

export default Resume
