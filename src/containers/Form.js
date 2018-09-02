import React, { Component } from "react";

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
      values: fields,
      errors: fields
    }));
  }

  /** 
   * Validate new value against field values
   * evt.target.value -> validate(state.fieldRules[evt.target])
   * 
   */
  handleChange(evt) {
    console.log(evt.target.name, evt.target.value, [evt.target.name])
    if (evt.target.value.match(this.state.rules[evt.target.name])) {
      const stateProperty = [evt.target.name]
      const unchangedValues = this.state.values
      const newStateValue = evt.target.value
      const prevStateValue = this.state.values[stateProperty]
      this.setState(prevState => ({
        ...prevState,
        values: {
          ...unchangedValues,
          [stateProperty]: newStateValue
        }
        
      }))
      // this.setState(prevState => ({
      //   [prevState.values] : {
      //     [evt.target.name]: evt.target.value
      //   }

      // }))
    }
    
  }

  handleSubmit(evt) {
    debugger;
  }

  render() {
    return this.props.children(
      this.handleChange,
      this.state.errors,
      this.state.values
    );
  }
}

export default Form;
