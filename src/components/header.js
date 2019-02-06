import React from 'react'
import './App.css'
import Particles from 'react-particles-js'
import Grid from '@material-ui/core/Grid'

import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Header = () => (
  <div>
    <Particles
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
      style={{
        width: '100%',
        backgroundColor: '#161515',
        position: 'absolute',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        zIndex: '-1',
      }}
    />
    <header className="App-header">
      <h1
        style={{
          letterSpacing: '4px',
        }}
      >
        Henry Yang
      </h1>
      <p
        style={{
          letterSpacing: '4px',
        }}
      >
        web developer, artist, dog enthusiast
      </p>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <div id="wrapper">
            <a
              id="btn-outline"
              href="https://www.linkedin.com/in/henry-yang-83286415a/"
              target="_blank"
            >
              <svg height="40" width="210">
                <rect class="shape" height="40" width="210" />
              </svg>
              <div class="text">
                {' '}
                <FaLinkedinIn style={{ marginRight: '6px' }} /> linkedin
              </div>
            </a>
          </div>
        </Grid>
        <Grid item>
          <div id="wrapper">
            <a
              id="btn-outline"
              href="https://github.com/hkyang995"
              target="_blank"
            >
              <svg height="40" width="210" xmlns="http://www.w3.org/2000/svg">
                <rect class="shape" height="40" width="210" />
              </svg>
              <div class="text">
                <FaGithub style={{ marginRight: '6px' }} />
                github
              </div>
            </a>
          </div>
        </Grid>
      </Grid>
    </header>
  </div>
)

export default Header
