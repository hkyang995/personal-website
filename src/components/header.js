import React from 'react'
import './App.css'
import Particles from 'react-particles-js'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'

import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Container = styled.div``

const HeaderContainer = styled.header``

const HeaderText = styled.h1`
  letter-spacing: 4px;
`

const SubHeaderText = styled.p`
  letter-spacing: 4px;
`

const StyledParticles = styled(Particles)`
  width: 100%;
  background-color: #161515;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: '50% 50%';
  z-index: -1;
`

const ButtonIcon = props => {
  if (props.text === 'linkedin') {
    return <FaLinkedinIn />
  }
  return <FaGithub />
}

const StyledBtn = props => (
  <a id="btn-outline" href={props.href} target="_blank">
    <svg height="40" width="210">
      <rect class="shape" height="40" width="210" />
    </svg>
    <div class="text">
      {' '}
      <ButtonIcon text={props.text} style={{ marginRight: '6px' }} />{' '}
      {props.text}
    </div>
  </a>
)

const Header = () => (
  <Container>
    <StyledParticles
      params={{
        particles: {
          line_linked: {
            shadow: {
              enable: true,
              color: '#3CA9D1',
              blur: 5,
            },
          },
        },
      }}
    />
    <HeaderContainer className="App-header">
      <HeaderText>Henry Yang</HeaderText>
      <SubHeaderText>web developer, artist, dog enthusiast</SubHeaderText>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Container id="wrapper">
            <StyledBtn
              href={'https://www.linkedin.com/in/henry-yang-83286415a/'}
              text={'linkedin'}
            />
          </Container>
        </Grid>
        <Grid item>
          <Container id="wrapper">
            <StyledBtn href={'https://github.com/hkyang995'} text={'github'} />
          </Container>
        </Grid>
      </Grid>
    </HeaderContainer>
  </Container>
)

export default Header
