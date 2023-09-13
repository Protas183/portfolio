import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { Container, EmailBlock, Title, FormBlock, NameEmailBlock, FormInput, MessageBlock, ErrorText, Button } from './EmailContact.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  )
};

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
});

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const Input = styled(Field)`
  width: 550px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid grey;
  font-size: 20px;
  box-sizing: border-box;
  resize: none;
`;

class EmailContact extends Component {

  handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  }
  render() {
    return (
      <Container>
        <EmailBlock>
          <Title>Send me an email</Title>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={this.handleSubmit}>
            <Form autoComplete='off'>
              <FormBlock>
                <NameEmailBlock>
                  <FormInput>
                    <label htmlFor='name'>Name</label>
                    <div>
                      <Input type="text" name="name" placeholder="Full name" />
                      <FormError name="name" />
                    </div>
                  </FormInput>
                  <FormInput>
                    <label htmlFor='email'>Email</label>
                    <div>
                      <Input type="text" name="email" placeholder="Email" />
                      <FormError name="email" />
                    </div>
                  </FormInput>
                </NameEmailBlock>
                <MessageBlock>
                  <label htmlFor='message'>Message</label>
                  <div>
                    <Field type="text" name="message" as="textarea" placeholder="Write your message"
                    style={{
                      width: '500px',
                      height: '160px',
                      margin: '10px 0px 0px 0px',
                      padding: '10px',
                      borderRadius: '5px',
                      border: '2px solid grey',
                      fontSize: '20px',
                      boxSizing: 'border-box',
                      resize: 'none'
                    }}
                    />
                    <FormError name="message" />
                  </div>
                </MessageBlock>
              </FormBlock>
              <Button type="submit">Send email</Button>
            </Form>
          </Formik>
        </EmailBlock>
      </Container>
    )
  }
}

export default EmailContact;
