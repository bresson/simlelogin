import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from "./containers/Form";
import StyledInput from "./components/form/StyledInput";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        username: "",
        password: ""
      },
      fieldRules: {
        username: /[.]*/g,
        password: /[.]*/g
      },
      fieldValidation: {
        username: /[.]*/g,
        password: /[.]*/g
      }
    };
  }
  render() {
    return (
      <div className="App">
        <Form rules={this.state.fieldRules} fields={this.state.fields}>
          {(handleChange, errors, values) => {
            console.log(`values ${JSON.stringify(values)}`);
            return (
              <React.Fragment>
                <StyledInput
                  onChange={(evt) => handleChange(evt)}
                  value={values.username}
                  type="input"
                  label="username"
                  name="username"
                />
                <StyledInput
                  onChange={(evt) => handleChange(evt)}
                  value={values.password}
                  label="password"
                  type="password"
                  name="password"
                />
                <button type="submit">Submit</button>
              </React.Fragment>
            );
          }}
        </Form>
      </div>
    );
  }
}
