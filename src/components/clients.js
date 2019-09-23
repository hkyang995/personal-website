import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'

import hyrecarlogo from '../images/hyrecar_logo.png'
import novvumlogo from '../images/novvum_logo.png'
import raftrlogo from '../images/raftr_logo.png'
import watchtowerlogo from '../images/watchtower_logo.png'
import prismalogo from '../images/prisma_logo.svg'

const Container = styled.div`
  width: 100%;
  background-color: #161515;
  color: #ffffff;
  font-weight: 100;
`
const SubContainer = styled.div`
  width: 100%;
  background-color: #232121;
  opacity: 0.7
  color: #ffffff;
  font-weight: 100;
  padding: 5vh;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
`
const HeaderText = styled.div`
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 150;
`

const LogoImg = styled.img`
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);

  max-width: 200px;
  max-height: 100px;
  width: auto;
  margin: 20px;

  transition: transform 1000ms;
  &:hover {
    filter: none;
  }
`

const Space = styled.div`
  min-height: 25px;
`

const ImgLink = props => (
  <a href={props.link}>
    <LogoImg src={props.img} />
  </a>
)

const Clients = () => (
  <Container>
    <SubContainer>
      <Space />
      <Grid
        container
        direction={'row'}
        alignItems={'center'}
        justify={'center'}
      >
        <HeaderText>Proud to have worked with...</HeaderText>
      </Grid>
      <Space />
      <Grid
        container
        direction={'row'}
        alignItems={'center'}
        justify={'space-between'}
        style={{ width: '100%' }}
      >
        <ImgLink img={hyrecarlogo} link={'https://hyrecar.com'} />
        <ImgLink img={novvumlogo} link={'http://novvum.io'} />
        <ImgLink img={raftrlogo} link={'https://about.raftr.com/'} />
        <ImgLink
          img={watchtowerlogo}
          link={'https://www.yourwatchtower.com/'}
        />
        <ImgLink img={prismalogo} link={'https://www.prisma.io/'} />
      </Grid>
      <Space />
    </SubContainer>
  </Container>
)

export default Clients
