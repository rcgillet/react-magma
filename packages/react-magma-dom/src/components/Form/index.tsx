import * as React from 'react';
import { Alert } from '../Alert';
import { AlertVariant } from '../AlertBase';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';

/**
 * @children required
 */
export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  /**
   * Form action buttons are supposed to be placed here
   */
  actions: React.ReactNode;
  /**
   * General description of the form
   */
  description?: string;
  /**
   * Additional form level validation message
   */
  errorText?: string;
  /**
   * Title of the form
   */
  header: string;
  /**
   * handler for form submission
   */
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  testId?: string;
}

export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  (props, ref) => {
    const {
      header,
      description,
      errorText,
      actions,
      children,
      testId,
      ...other
    } = props;

    const content = (
      <>
        <div>
          <Heading level={3}>{header}</Heading>
          {description && <Paragraph>{description}</Paragraph>}
          {errorText && (
            <Alert variant={AlertVariant.danger}>{errorText}</Alert>
          )}
        </div>
        <div>{children}</div>
        <div>{actions}</div>
      </>
    );

    return (
      <form ref={ref} data-testid={testId} {...other}>
        {content}
      </form>
    );
  }
);
