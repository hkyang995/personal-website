import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import { FaPencilAlt, FaRocket, FaCode } from 'react-icons/fa'

const Container = styled.div``
const HeaderText = styled.h1``
const SubHeaderText = styled.h3``
const Divider = styled.hr``
const BodyText = styled.h4``
const ListContainer = styled.ul``
const ListItem = styled.li``
const BoldText = styled.b``

let items = [
  {
    header: 'Education',
    icon: <FaPencilAlt />,
    subheader: (
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          California State University, Fullerton - Bachelor of Science in
          Computer Science
        </Grid>
        <Grid item>Expected Winter 2019</Grid>
      </Grid>
    ),
    description: [
      <Container>Member of the Association for Computing Machinery</Container>,
      <Container>
        <BoldText>Dean's list:</BoldText> Fall 2017 - Present
      </Container>,
      <Container>
        <BoldText>GPA:</BoldText> 3.5
      </Container>,
    ],
  },
  {
    header: 'Skills',
    icon: <FaRocket />,
    subheader: '',
    description: [
      'Languages: Javascript, ReactJS, GraphQL, HTML/CSS, C/C++, Java',
      'Concepts: Object Oriented Programming, Data Structures, Algorithm Engineering',
      'Operating Systems: Windows, Linux, Mac',
      'Tools: Git, Eclipse, Visual Studio, Qt, MS SQL Server',
    ],
  },
  {
    header: 'Experience',
    icon: <FaCode />,
    subheader: (
      <Grid
        container
        direction={'row'}
        justify={'space-between'}
        alignItems={'center'}
      >
        <Grid item>Junior Software Developer</Grid>
        <Grid item>Novvum</Grid>
        <Grid item>JUN 2018 - AUG 2019</Grid>
      </Grid>
    ),
    description: [
      'Assisted with troubleshooting and deployment of software projects',
      'Worked with engineering team to design and implement features and capabilities on web applications using ReactJS and Apollo GraphQL',
      'Applied Agile methodologies to implement features',
      'Refactored code base to improve efficiency and speed for Hyrecar, a company with over 100,000 users',
      'Created new features to improve user experience for Raizzz, a company with over 5,000 users',
      'Implemented and strategized tracking in Android using Segment to collect user data for Raftr, a company with over 5,000 users',
    ],
  },
]

const ResumeItem = props => (
  <Container>
    <SubHeaderText>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>{props.item.header}</Grid>
        <Grid item>{props.item.icon}</Grid>
      </Grid>
    </SubHeaderText>
    <Divider />
    <div>
      <BodyText>{props.item.subheader}</BodyText>
      <ListContainer>
        {props.item.description.map((desc, index) => (
          <ListItem index={index}>{desc}</ListItem>
        ))}
      </ListContainer>
    </div>
  </Container>
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
    {items.map((item, index) => (
      <ResumeItem item={item} index={index} />
    ))}
  </Container>
)

export default Resume
