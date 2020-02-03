import React from 'react'
import styled from 'styled-components'

const BtnWrapper = styled.div`
  text-align: center;
  line-height: 150%;
  font-size: 62.5%;
  width: 100%;
  overflow: hidden;
`
const BtnOutline = styled.a`
  text-decoration: none;
  margin: 30px auto 0;
  width: ${props => (props.wide ? '275px' : '210px')};
  height: 40px;
  display: block;
`
const BtnShape = styled.rect`
  stroke-dasharray: ${props => (props.wide ? '120 450' : '100 310')};
  stroke-dashoffset: ${props => (props.wide ? '-385' : '-304')};
  stroke-width: 5px;
  fill: transparent;
  stroke: #fff;
  -webkit-transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
  -ms-transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
  transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;

  ${BtnOutline}:hover & {
    stroke-width: 2px;
    stroke-dashoffset: 0;
    stroke-dasharray: 650;
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

const ButtonIcon = styled.b`
  margin-right: 6px;
`

export const StyledBtn = props => (
  <BtnWrapper>
    <BtnOutline wide={props.wide} href={props.href} target="_blank">
      <svg height="40" width={props.wide ? '275' : '210'}>
        <BtnShape
          height="40"
          wide={props.wide}
          width={props.wide ? '275' : '210'}
        />
      </svg>
      <BtnText>
        <ButtonIcon>{props.icon}</ButtonIcon> {props.text}
      </BtnText>
    </BtnOutline>
  </BtnWrapper>
)
