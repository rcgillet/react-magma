import React, { FunctionComponent, ComponentType } from 'react';
import FormRender, {
  ValidatorTypes,
} from '@data-driven-forms/react-form-renderer';
import FormTemplate from './components/FormTemplate';
import { componentTypes } from '../types';

import TextField from '../TextField';

const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
};

export interface FormRendererProps {
  schema: any;
  initialValues?: any;
  onSubmit: (values: any) => void;
  onCancel?: () => void;
  customComponentWrapper?: {
    [componentType: string]: ComponentType;
  };
}

const FormRenderer: FunctionComponent<FormRendererProps> = ({
  schema,
  onSubmit,
  onCancel,
  initialValues,
  customComponentWrapper,
}) => {
  return (
    <FormRender
      componentMapper={{ ...componentMapper, ...customComponentWrapper }}
      FormTemplate={FormTemplate}
      schema={schema}
      onSubmit={onSubmit}
      onCancel={onCancel}
      initialValues={initialValues}
    />
  );
};

export { componentTypes, ValidatorTypes, FormRenderer };
