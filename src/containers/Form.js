import React, { Component } from "react";
import { notFilteredObj } from '../reuse/obj'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      values: {},
      rules: {}
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /* get values and rules */
  componentDidMount() {
    const { fields, rules } = this.props;
    console.log(`${JSON.stringify(fields)}`);
    this.setState(prevState => ({
      ...prevState,
      rules: rules,
      values: fields.reduce((acc, field) => {
        return {...acc, [field]: ''}}, 
        {}),
      errors: fields.reduce((acc, field) => {
        return {...acc, [field]: ''}}, 
        {})
    }))
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /** 
   * Validate new value against field values
   * evt.target.value -> validate(state.fieldRules[evt.target])
   * BUG!!!
   * repeated space key may return a '.' 
   * 
   * Handline errors:
   * if rules fails ( bad match ), create error for that field and save to state
   * if rules pass, save no error for that field to state
   */
  handleChange(evt) {
    const evtTargetName = evt.target.name;
    const stateProperty = [evt.target.name]
    const newStateValue = evt.target.value
    // if (newStateValue.match(this.state.rules[evtTargetName])) {
    if (this.state.rules[evtTargetName].test(newStateValue)) {
      const unchangedValues = this.state.values
      const prevStateValue = this.state.values[stateProperty]
      this.setState(prevState => ({
        ...prevState,
        values: {
          ...unchangedValues,
          [stateProperty]: newStateValue
        }
      }))
    } else {
      // Errors!
    }
  }

  submitValidation(evt) {

  }

  /**
   * Validate username && password -> passes values to parent component
   * 
   * Errors:
   * if validation fails, create error for that field and save to state
   * 
   * BUG(s):
   * 1. Empty fields are not validated!
   * 2. Cannot backspace / delete last item!
   * 3. Cannot select & backspace delete!
   */

  handleSubmit(evt) {
    evt.preventDefault()
    // get all values - don't use
    const failedValidation = Object.keys(this.state.values).filter(valueKey => {
      if (this.state.rules[valueKey].test(this.state.values[valueKey])) {
        console.log(this.state.rules[valueKey],this.state.values[valueKey] )
        return valueKey
      } 
    })

    if (failedValidation) {
      const failedValidationTRObj = failedValidation.reduce((acc, key) => {
        return {
          ...acc, 
          [key]: 'Invalid. Please provide a valid value'
        }
      }, {})

      const currentErrors = {...this.state.errors}
      debugger
      this.setState(prevState => ({
        ...prevState, 
        errors: {
          ...currentErrors, 
          ...failedValidationTRObj
        }
      }))
      return false
    }
    // test each value against rules
    // -> fail if any fail, 
    // -> if all pass
   else {
     this.props.loginSubmit(this.state.values)
   }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      {this.props.children (
        this.handleChange,
        this.state.errors,
        this.state.values)}
      </form>
    )
  }
}

export default Form;
