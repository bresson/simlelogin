import React from "react";
import styled from "styled-components";
import './Input.css';


const InputGroup = styled.div`
  max-width: 550px;
  width: 100%;
  position: relative;
  & + div {
    margin-top: 20px;
  }
`;

const Input = styled.input`
  background-image: none;
  border-radius: 0;
  box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
  border: 1px solid gray;
  display: block;
  width: 100%;
  height: 39px;
  padding: 8px 16px;
  font-size: 15px;
  line-height: 1.42857143;
  color: #2b3e50;
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 300;
  text-align: left;
`
const SpanError = styled.div`
  color: tomato;
  display: none;
  font-size: 11px;
  font-style: italic;
  transition: all 0.15s ease;
`

const StyledInput = props => {
  return (
    <InputGroup className="inp">
      <Label className="label">{props.label}</Label>
      <Input
        onChange={props.onChange}
        name={props.name || 'inp'} 
        placeholder='&nbsp;' 
        type={props.type || 'text'} 
        value={props.value || ''}
      />
      <SpanError className={ props.error ? 'error': null }>{ props.error ? props.error : null }</SpanError>
    </InputGroup>

  )
}

export default StyledInput
