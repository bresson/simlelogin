import React, { Component } from 'react';
import Form from "./Form";
import StyledInput from '../components/form/StyledInput'


export default class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          fields: [
            'username',
            'password'
          ],
          fieldRules: {
            username: /[\w-\s]+/,
            password: /[\S]+/
          },
          fieldValidation: {
            username: /[\w-.\s]+/,
            password: /[\S]+/
          }
        };
        this.loginSubmit = this.loginSubmit.bind(this)
      }

      loginSubmit() {
          debugger
      }

      render() {
          return (
            <Form rules={this.state.fieldRules} fields={this.state.fields} loginSubmit={this.loginSubmit}>
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
                        error={errors.username}
                    />
                    <StyledInput
                        onChange={(evt) => handleChange(evt)}
                        value={values.password}
                        label="password"
                        type="password"
                        name="password"
                        error={errors.password}
                    />
                    
                    <button type="submit">Submit</button>
                    </React.Fragment>
                );
                }}
            </Form>
          )
      }
}


