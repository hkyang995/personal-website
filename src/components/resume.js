import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import { FaPencilAlt, FaRocket, FaCode } from 'react-icons/fa'

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
const BoldText = styled.div`
  font-weight: 500;
`

const SkillsBody = () => (
  <div>
    <BoldText>Languages:</BoldText>
    <BodyText>
      Javascript, ReactJS, GraphQL, GatsbyJS, HTML/CSS, C/C++, Java, Python
    </BodyText>
    <BoldText>Concepts:</BoldText>
    <BodyText>Object-Oriented Programming, Data Structures Operating</BodyText>
    <BoldText>Systems:</BoldText>
    <BodyText>
      Windows, Linux, Mac Tools: Git, Eclipse, Visual Studio, Android Studio, Qt
    </BodyText>
  </div>
)

const ExperienceBody = () => (
  <div>
    <BoldText>SOFTWARE DEVELOPER NOVVUM | JUN 2018 - AUG 2019</BoldText>
    <BodyText>
      <ul>
        <li>
          Assisted with troubleshooting and deployment of software projects
        </li>
        <li>
          Designed and implemented features and capabilities on web applications
          using ReactJS and Apollo GraphQL
        </li>
        <li>
          Applied Agile methodologies to implement features Refactored code base
          to improve efficiency and speed for Hyrecar, a company with over
          100,000 users
        </li>
        <li>
          Created new features to improve user experience for Raizzz, a company
          with over 5,000 users
        </li>
        <li>
          Implemented and strategized tracking in Android using Segment to
          collect user data for Raftr, a company with over 5,000 users
        </li>
      </ul>
    </BodyText>
  </div>
)

const EducationBody = () => (
  <div>
    <BoldText>BACHELOR OF SCIENCE IN COMPUTER SCIENCE</BoldText>
    <BodyText>CALIFORNIA STATE UNIVERSITY, FULLERTON</BodyText>
    <BodyText>EXPECTED: JANUARY 2019</BodyText>
    <BodyText>GPA: 3.6</BodyText>
    <BodyText>DEAN'S LIST: FALL 2017-PRESENT</BodyText>
  </div>
)

const ProjectsBody = () => (
  <div>
    <BoldText>SECURE CHAT</BoldText>
    <BodyText>MAY 2019</BodyText>
    <BodyText>github.com/hkyang995/Secure-Chat</BodyText>
    <BodyText>
      Real time secure chat application using AES and RSA Developed with GraphQL
      Nexus and ReactJS
    </BodyText>
    <BoldText>WATCHTOWER</BoldText>
    <BodyText>JAN 2019 - JUL 2019</BodyText>
    <BodyText>yourwatchtower.com</BodyText>
    <BodyText>
      Collects and stores data in real time from lifeguards and beaches using
      AWS Lambda Collaborated in a team of 5 using Node.js, Webhooks, Jotform
      and Airtable
    </BodyText>
  </div>
)

const Resume = () => (
  <Container>
    <Grid
      container
      direction={'row'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <HeaderText>Resume</HeaderText>
    </Grid>
    <Grid
      container
      direction={'row'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Grid item style={{ width: '40%', minWidth: '300px' }}>
        <SubHeaderText>Contact</SubHeaderText>
        <BodyText>HKYANG@CSU.FULLERTON.EDU </BodyText>
        <BodyText>GITHUB.COM/HKYANG995</BodyText>
        <SubHeaderText>Skills</SubHeaderText>
        <SkillsBody />
      </Grid>
      <Grid item style={{ maxWidth: '60%', minWidth: '300px' }}>
        <SubHeaderText>Experience</SubHeaderText>
        <FaRocket />
        <ExperienceBody />
        <SubHeaderText>Education</SubHeaderText>
        <FaPencilAlt />
        <EducationBody />
        <SubHeaderText>Projects</SubHeaderText>
        <FaCode />
        <ProjectsBody />
      </Grid>
    </Grid>
  </Container>
)

export default Resume
