import React from 'react';
import { Page } from './Page';
import { Form, required, minLength } from './Form';
import { Field } from './Field';

export const AddRecipePage = () => (
  <Page
    title="Add a Recipe">
    <Form submitCaption="Submit Code Recipe"
    validationRules={{
        title: [{ validator: required }, { validator: minLength, arg: 10 }],
        content: [{ validator: required }, { validator: minLength, arg: 50 }],
        sourcecode: [{ validator: required }, { validator: minLength, arg: 50 }],
      }}>
      <Field name="title" label="Title" />
      <Field name="content" label="Content" type="TextArea" />
      <Field name="originator" label="By" />
      <Field name="sourcecode" label="Snippet" type="TextArea" />
    </Form>
  </Page>
);

export default AddRecipePage;
