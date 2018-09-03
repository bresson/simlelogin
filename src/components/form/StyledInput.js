import React from "react";
import styled from "styled-components";
import './Input.css';



const Label = styled.label`
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 280px;
`;

const Input = styled.input`
  -webkit-appearance: none;
  width: 100%;
  border: 0;
  padding: 12px 0;
  height: 48px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid #c8ccd4;
  border-radius: 0;
  color: #223254;
  transition: all 0.15s ease;
  
  &:hover {
    background-color: rgba(0,0,0,.03);
  }
  
  &:not(:placeholder-shown) + span {
    color #5A667F;
    transform: translateY(-26px) scale(.75);
  }

  &:focus {
    background: none;
    outline: none;
  }
  
  &:focus + span {
      color #0077FF;
      transform: translateY(-26px) scale(.75);
  }
  
  &:focus + span + .border {
    transform: scaleX(1);
  }
`;

// bottom is a bug hack
const SpanBorder = styled.span`
  position: absolute;
  bottom: -14px;
  left: 0;
  height: 2px;
  width: 100%;
  background: #07f;
  transform: scaleX(0);
  transform-origin: 0 0;
  transition: all 0.15s ease;
`

const SpanLabel = styled.span`
  position: absolute;
  top: 16px;
  left: 0;
  font-size: 16px;
  color: #9098a9;
  font-weight: 500;
  transform-origin: 0 0;
  transition: all 0.2s ease;
`

const SpanError = styled.span`
  color: tomato;
  display: none;
  font-size: 11px;
  font-style: italic;
  transition: all 0.15s ease;
`

const StyledInput = props => {
  return (
    <Label className="inp">
      <Input
        onChange={props.onChange}
        name={props.name || 'inp'} 
        placeholder='&nbsp;' 
        type={props.type || 'text'} 
        value={props.value || ''}
      />
      <SpanError className={ props.error ? 'error': null }>{ props.error ? props.error : null }</SpanError>
      <SpanLabel className="label">{props.label}</SpanLabel>
      <SpanBorder className="border"></SpanBorder>
    </Label>

  )
}

export default StyledInput
