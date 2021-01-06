import React, { FunctionComponent, memo } from 'react';
import { UseFieldApi } from '@data-driven-forms/react-form-renderer';
import { v4 as uuidv4 } from 'uuid';
import { Input } from 'react-magma-dom';

const TextFieldMapping: FunctionComponent = (props: any) => {
  const {
    label,
    description,
    helperText,
    isRequired,
    isDisabled,
    isReadOnly,
    placeholder,
    input,
    validateOnMount,
    stretch,
    showError,
    secondaryControl,
    meta: { error, submitFailed },
    ...rest
  } = UseFieldApi(props);
  const controlId = input.name || uuidv4();
  const errorText =
    ((validateOnMount || submitFailed || showError) && error) || '';

  return (
    <Input
      {...input}
      id={controlId}
      label={label}
      description={description}
      hintText={helperText}
      errorText={errorText}
      stretch={stretch}
      secondaryControl={secondaryControl}
      placeholder={placeholder}
      disabled={isDisabled}
      required={isRequired}
      readonly={isReadOnly}
      invalid={!!errorText}
      {...rest}
    />
  );
};

export default memo(TextFieldMapping);
