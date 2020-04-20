import React, { useState, useRef } from 'react'
import styled from 'styled-components'

const FadeDiv = styled.div`
  opacity: ${props => (props.visible ? '1' : '0')};
  transform: ${props => (props.visible ? 'none' : 'translateY(20vh)')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  transition: opacity 1s ease-out, transform 1.2s ease-out;
  will-change: opacity, visibility;
`

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef()
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })
    observer.observe(domRef.current)
  }, [])
  return (
    <FadeDiv visible={isVisible ? true : false} ref={domRef}>
      {props.children}
    </FadeDiv>
  )
}

export default FadeInSection
