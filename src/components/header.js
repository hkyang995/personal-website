import React from 'react'
import './App.css'
import Particles from 'react-particles-js'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import { StyledBtn } from '../components/header/index'
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
  height: 100%;
  background-color: #161515;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: '50% 50%';
  z-index: -1;
`

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
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ padding: '3em', textAlign: 'center' }}
      >
        <HeaderText>Henry Yang</HeaderText>
        <SubHeaderText>web developer, boulderer, dog enthusiast</SubHeaderText>
        <SubHeaderText>
          Orange County based ReactJS developer, BS in Computer Science from CSU
          Fullerton, December 2019
        </SubHeaderText>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <StyledBtn
            href={'https://www.linkedin.com/in/henry-yang-83286415a/'}
            icon={<FaLinkedinIn />}
            text={'linkedin'}
          />
        </Grid>
        <Grid item>
          <StyledBtn
            href={'https://github.com/hkyang995'}
            text={'github'}
            icon={<FaGithub />}
          />
        </Grid>
      </Grid>
    </HeaderContainer>
  </Container>
)

export default Header
