import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import watchtowerimg from '../images/watchtower_case.png'
import securechatimg from '../images/securechat_case.png'
import nvimg from '../images/nv_case.png'

const Container = styled.div`
  width: 100%;
  background-color: #161515;
  color: #ffffff;
  font-weight: 100;
  padding: 10vh;
`
const HeaderText = styled.h1`
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 150;
`
const SubHeaderText = styled.div`
  font-size: 1.6em;
  font-weight: 350;
  letter-spacing: 2px;
`
const SubBodyText = styled.div`
  font-style: italic;
  font-size: 1.1em;
`
const BodyText = styled.div`
  font-weight: 100;
  font-size: 0.9em;
  min-width: 300px;
`
const ProjectImg = styled.img`
  min-width: 300px;
`
const Space = styled.div`
  min-height: 100px;
`

const SingleProject = props => (
  <Grid
    container
    spacing={5}
    direction={('row', props.direction, props.direction)}
    justify={('center', 'center', 'space-between')}
    alignItems={('center', 'center', 'center')}
  >
    <Grid item xs={12} md={6}>
      <ProjectImg src={props.img} />
    </Grid>
    <Grid item xs={12} md={6} style={{ maxWidth: '350px' }}>
      <SubHeaderText>{props.name}</SubHeaderText>
      <SubBodyText>{props.subheader}</SubBodyText>
      <BodyText>{props.body}</BodyText>
    </Grid>
  </Grid>
)

const Resume = () => (
  <Container>
    <Grid container direction={'row'} alignItems={'center'} justify={'center'}>
      <HeaderText>Projects</HeaderText>
    </Grid>
    <Space />
    <Space />
    <SingleProject
      name={'Novvum Website'}
      subheader={'Website for showcasing software agency Novvum'}
      body={
        'Company website and blog made with GatsbyJS and ReactJS to display Novvum projects and experience.'
      }
      direction={'row'}
      img={nvimg}
    />
    <Space />
    <SingleProject
      name={'Watchtower'}
      subheader={'Custom data gathering for lifeguard agencies'}
      body={
        'Mobile data collection application using Serverless and Node.js to instantly collect and visualize survey data from lifeguards out in the field.'
      }
      direction={'row-reverse'}
      img={watchtowerimg}
    />
    <Space />
    <SingleProject
      name={'Secure Chat'}
      subheader={'Real time secure chat'}
      body={
        'Secure chatroom application using AES and RSA, made with GraphQL Nexus and ReactJS.'
      }
      direction={'row'}
      img={securechatimg}
    />
  </Container>
)

export default Resume
