import React, { Component } from 'react';
import Form from "./Form";
import StyledInput from '../components/form/StyledInput'


export default class Register extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          fields: [
            'username',
            'password', 
            'email'
          ],
          fieldRules: {
            username: /[\w-\s]+/,
            password: /[\S]+/, 
            email:  /[\S]+/, 
          },
          fieldValidation: {
            username: /[\w-.\s]+/,
            password: /[\S]+/,
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
                        value={values.email}
                        label="email"
                        type="email"
                        name="email"
                        error={errors.email}
                    />
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

