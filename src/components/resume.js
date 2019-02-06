import React from 'react'
import Grid from '@material-ui/core/Grid'
import { FaPencilAlt, FaRocket, FaCode } from 'react-icons/fa'

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
      <div>Member of the Association for Computing Machinery</div>,
      <div>
        <b>Dean's list:</b> Fall 2017 - Present
      </div>,
      <div>
        <b>GPA:</b> 3.5
      </div>,
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
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>Software Development Intern, Novvum</Grid>{' '}
        <Grid item>June 2018-Present</Grid>
      </Grid>
    ),
    description: [
      'Assists with troubleshooting and deployment of software projects',
      'Works with engineering team to design and implement features and capabilities on web applications using ReactJS and Apollo GraphQL ',
      'Applies agile methodologies to implement features',
      'Refactored code base to improve efficiency and speed for a company with over 100,000 users',
      'Created new features to improve user experience for a company with over 5,000 users',
    ],
  },
]

const ResumeItem = props => (
  <div>
    <h3>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>{props.item.header}</Grid>
        <Grid item>{props.item.icon}</Grid>
      </Grid>
    </h3>
    <hr />
    <div style={{ paddingLeft: '20px' }}>
      <h4 style={{ marginTop: '20px' }}>{props.item.subheader}</h4>
      <ul style={{ paddingLeft: '25px' }}>
        {props.item.description.map((desc, index) => (
          <li index={index}>{desc}</li>
        ))}
      </ul>
    </div>
  </div>
)

const Resume = () => (
  <div style={{ paddingBottom: '10px' }}>
    <h1 style={{ textAlign: 'center' }}>Resume</h1>
    {items.map((item, index) => (
      <ResumeItem item={item} index={index} />
    ))}
  </div>
)

export default Resume
