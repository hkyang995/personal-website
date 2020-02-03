import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { StyledBtn } from '../components/header/index'

const Container = styled.div`
  width: 100%;
  background-color: #292929;
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
      <HeaderText>Contact</HeaderText>
      <Space />
      <Grid
        container
        direction={'row'}
        alignItems={'center'}
        justify={'center'}
      >
        <Grid direction={'column'} alignItems={'center'} justify={'center'}>
          <StyledBtn
            href={'https://github.com/hkyang995'}
            icon={<FaGithub />}
            text={'hkyang995'}
          />
          <Space height="40px" />
          <StyledBtn
            href={'https://www.linkedin.com/in/henry-yang-83286415a/'}
            icon={<FaLinkedinIn />}
            text={'Henry Yang'}
          />
          <Space height="40px" />
          <StyledBtn
            wide
            href={'mailto:hkyang@csu.fullerton.edu'}
            text={'hkyang@csu.fullerton.edu'}
          />
          <Space height="100px" />
        </Grid>
      </Grid>
      <Space />
    </Grid>
  </Container>
)

export default Contact
