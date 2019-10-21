import React from 'react'
import './App.css'
import Particles from 'react-particles-js'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import { StyledBtn } from '../components/header/index'

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

const BtnWrapper = styled.div`
  text-align: center;
  line-height: 1.5;
  line-height: 150%;
  font-size: 62.5%;
  width: 100%;
  overflow: hidden;
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
      <HeaderText>Henry Yang</HeaderText>
      <SubHeaderText>web developer, boulderer, dog enthusiast</SubHeaderText>
      <SubHeaderText>
        Irvine based ReactJS developer and CSUF student graduating December 2019
      </SubHeaderText>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <BtnWrapper>
            <StyledBtn
              href={'https://www.linkedin.com/in/henry-yang-83286415a/'}
              text={'linkedin'}
            />
          </BtnWrapper>
        </Grid>
        <Grid item>
          <BtnWrapper>
            <StyledBtn href={'https://github.com/hkyang995'} text={'github'} />
          </BtnWrapper>
        </Grid>
      </Grid>
    </HeaderContainer>
  </Container>
)

export default Header
