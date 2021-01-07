import React from 'react';
import { Field } from 'redux-form';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import {
  usernameValidator,
  passwordValidator,
} from '../../../utils/validators';
import SubmitButton from '../shared/form/SubmitButton';

class SignupForm extends React.Component<any, any, any> {
  componentDidMount() {
    this.redirectIfLoggedIn();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.redirectIfLoggedIn();
  }

  onSubmit = ({ username, password }) => {
    this.props.attemptSignup(username, password);
  };

  redirectIfLoggedIn() {
    if (this.props.token) this.props.history.push('/ama/');
  }

  render() {
    return (
      <Form
        loading={this.props.loading}
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="username"
          label="username"
          type="text"
          component={renderField}
          validate={usernameValidator}
        />
        <Field
          name="password"
          label="password"
          type="password"
          component={renderField}
          validate={passwordValidator}
        />
        <Field
          name="password2"
          label="confirm password"
          type="password"
          component={renderField}
        />
        <SubmitButton type="submit">sign up</SubmitButton>
      </Form>
    );
  }
}

export default SignupForm;
