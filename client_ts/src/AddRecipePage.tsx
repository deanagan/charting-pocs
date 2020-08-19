import React from 'react';
import { Page } from './Page';
import { Form } from './Form';
import { Field } from './Field';

export const AddRecipePage = () => (
  <Page title="Add a Recipe">
    <Form submitCaption="Submit Code Recipe">
      <Field name="title" label="Title" />
      <Field name="content" label="Content" type="TextArea" />
      <Field name="originator" label="By" />
      <Field name="sourcecode" label="Snippet" type="TextArea" />
    </Form>
  </Page>
);

export default AddRecipePage;
