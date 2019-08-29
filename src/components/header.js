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

const BtnOutline = styled.a`
  text-decoration: none;
  margin: 30px auto 0;
  width: 210px;
  height: 40px;
  display: block;
`
const BtnShape = styled.rect`
  stroke-dasharray: 100 310;
  stroke-dashoffset: -304;
  stroke-width: 5px;
  fill: transparent;
  stroke: #fff;
  -webkit-transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
  -ms-transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
  transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;

  ${BtnOutline}:hover & {
    stroke-width: 2px;
    stroke-dashoffset: 0;
    stroke-dasharray: 550;
  }
`
const BtnText = styled.div`
  top: -34px;
  position: relative;
  color: #fff;
  font-size: 1.5em;
  letter-spacing: 4px;
  margin-right: -4px;
`
const BtnWrapper = styled.div`
  text-align: center;
  line-height: 1.5;
  line-height: 150%;
  font-size: 62.5%;
  width: 100%;
  overflow: hidden;
`

const ButtonIcon = props => {
  if (props.text === 'linkedin') {
    return <FaLinkedinIn />
  }
  return <FaGithub />
}

const StyledBtn = props => (
  <BtnOutline href={props.href} target="_blank">
    <svg height="40" width="210">
      <BtnShape height="40" width="210" />
    </svg>
    <BtnText>
      {' '}
      <ButtonIcon text={props.text} style={{ marginRight: '6px' }} />{' '}
      {props.text}
    </BtnText>
  </BtnOutline>
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
