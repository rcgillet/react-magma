import React from 'react';
import { Form } from '..';
import { Button, ButtonColor } from '../../Button';

export default {
  component: Form,
  title: 'Form',
};

const Actions = () => (
  <div>
    <Button color={ButtonColor.secondary}>Cancel</Button>
    <Button color={ButtonColor.primary}>Submit</Button>
  </div>
);

export const Default = () => {
  return (
    <Form header="Form header" actions={<Actions />}>
      <p>Form sections come here</p>
    </Form>
  );
};

export const Expanded = () => {
  return (
    <div>
      <Form
        header="Form header"
        actions={<Actions />}
        description="Some description"
        errorText="Some error description"
      >
        <p>Form sections come here</p>
      </Form>
    </div>
  );
};
