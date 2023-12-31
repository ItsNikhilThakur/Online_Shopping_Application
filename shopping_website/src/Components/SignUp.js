import React from 'react'
import { Form, Input, Button, Select } from 'semantic-ui-react'

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const SignUp = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
      />
      <Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
        placeholder='Gender'
        search
        searchInput={{ id: 'form-select-control-gender' }}
      />

<Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Phone no'
        placeholder='Phone no'
      />
    </Form.Group>
    <Form.Field>
  <label>Enter Password</label>
  <Input type='Enter password' />
</Form.Field>
<Form.Field>
  <label>Re-Enter Password</label>
  <Input type='conform password' />
</Form.Field>
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='joe@schmoe.com'
      error={{
        content: 'Please enter a valid email address',
        pointing: 'below',
      }}
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Confirm'
      
    />
  </Form>

  
)

export default SignUp;