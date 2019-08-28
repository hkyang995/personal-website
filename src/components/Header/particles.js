import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'

const Particles = () => (
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
    
)

export default Particles
