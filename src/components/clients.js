import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'

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
const HeaderText = styled.h1``
const BodyText = styled.div`
  font-weight: 100;
`

const Clients = () => (
  <Container>
    <SubContainer>
      <HeaderText>Proud to have worked with...</HeaderText>
      <Grid
        container
        direction={'row'}
        alignItems={'center'}
        justifyContent={'center'}
        style={{ width: '100%' }}
      >
        Watchtower Raftr Greenlight Hyrecar Novvum
      </Grid>
    </SubContainer>
  </Container>
)

export default Clients
