import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  background-color: #161515;
  color: #ffffff;
  font-weight: 100;
  padding: 35vh;
`
const HeaderText = styled.h1``
const SubHeaderText = styled.h3``
const BodyText = styled.div`
  font-weight: 100;
`

const SingleProject = props => (
  <Grid
    container
    direction={props.direction}
    alignItems={'center'}
    justifyContent={'center'}
  >
    <img src="https://via.placeholder.com/400" />
    <Grid>
      <SubHeaderText>{props.name}</SubHeaderText>
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
      body={'Real time secure chat'}
      direction={'row'}
    />
    <SingleProject
      name={'Watchtower'}
      body={'Real time secure chat'}
      direction={'row-reverse'}
    />
  </Container>
)

export default Resume
