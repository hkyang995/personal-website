import React from 'react'
import styled from 'styled-components'

import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

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

const ButtonIcon = props => {
  if (props.text === 'linkedin') {
    return <FaLinkedinIn />
  }
  return <FaGithub />
}

export const StyledBtn = props => (
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
