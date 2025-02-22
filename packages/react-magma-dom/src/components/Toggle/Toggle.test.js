import React from 'react';
import { Toggle } from '.';
import { FormGroup } from '../FormGroup';
import { magma } from '../../theme/magma';
import { axe } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';

describe('Toggle', () => {
  it('should find element by testId', () => {
    const testLabel = 'test label';
    const testId = 'test-id';

    const { getByTestId } = render(
      <Toggle testId={testId} labelText={testLabel} />
    );

    expect(getByTestId(testId)).toBeInTheDocument();
  });

  it('should render a toggle with the passed in text', () => {
    expect(true).toBeTruthy();
  });

  it('should render a label for the toggle', () => {
    const testLabel = 'test label';
    const { getByText } = render(<Toggle labelText={testLabel} />);
    const label = getByText(testLabel);

    expect(label).toBeInTheDocument();
  });

  it('should render a toggle with desired attributes', () => {
    const testLabel = 'test label';
    const testId = 'id123';
    const { getByLabelText } = render(
      <Toggle labelText={testLabel} id={testId} />
    );
    const toggle = getByLabelText(testLabel);

    expect(toggle).toBeInTheDocument();
    expect(toggle).toHaveAttribute('id', testId);
    expect(toggle).not.toHaveAttribute('checked');
    expect(toggle).not.toHaveAttribute('required');
    expect(toggle).not.toHaveAttribute('autoFocus');
  });

  it('should render a checked toggle with correct attribute', () => {
    const testLabel = 'test label';
    const { getByLabelText, getByTestId } = render(
      <Toggle checked labelText={testLabel} />
    );
    const toggle = getByLabelText(testLabel);
    const track = getByTestId('toggle-track');

    expect(toggle).toHaveAttribute('checked');
    expect(track).toHaveStyleRule('border-color', magma.colors.success02);
  });

  it('should render a toggle with an error message', () => {
    const testLabel = 'test label';
    const errorMessage = 'test error';

    const { getByLabelText, getByText, getByTestId } = render(
      <Toggle errorMessage={errorMessage} labelText={testLabel} id="testId" />
    );
    const toggle = getByLabelText(testLabel);
    const track = getByTestId('toggle-track');
    const error = getByText(errorMessage);

    expect(toggle).toHaveAttribute('aria-describedby', 'testId__desc');
    expect(track).toHaveStyleRule('border-color', magma.colors.danger);

    expect(error).toBeInTheDocument();
    expect(error.parentElement).toHaveAttribute('id', 'testId__desc');
  });

  it('should render a checked toggle with an error message', () => {
    const testLabel = 'test label';
    const errorMessage = 'test error';

    const { getByTestId } = render(
      <Toggle
        checked
        errorMessage={errorMessage}
        labelText={testLabel}
        id="testId"
      />
    );
    const track = getByTestId('toggle-track');
    expect(track).toHaveStyleRule('border-color', magma.colors.danger);
  });

  it('should render an inverse toggle with error styling', () => {
    const testLabel = 'test label';
    const errorMessage = 'test error';

    const { getByTestId } = render(
      <Toggle errorMessage={errorMessage} labelText={testLabel} isInverse />
    );
    const track = getByTestId('toggle-track');

    expect(track).toHaveStyleRule('border-color', magma.colors.danger);
    expect(track).toHaveStyleRule(
      'box-shadow',
      `0 0 0 1px ${magma.colors.neutral08}`
    );
  });

  it('should render a toggle in a form group with an error message', () => {
    const testLabel = 'test label';
    const errorMessage = 'test error';

    const { getByLabelText, getByText, getByTestId } = render(
      <FormGroup errorMessage={errorMessage} id="testId">
        <Toggle labelText={testLabel} />
      </FormGroup>
    );
    const toggle = getByLabelText(testLabel);
    const track = getByTestId('toggle-track');
    const error = getByText(errorMessage);

    expect(toggle).toHaveAttribute('aria-describedby', 'testId__desc');
    expect(track).toHaveStyleRule('border-color', magma.colors.danger);
  });

  it('should render a toggle with a value passed through', () => {
    const value = 'Test Value';
    const testLabel = 'test label';
    const { getByLabelText } = render(
      <Toggle value={value} labelText={testLabel} />
    );
    const toggle = getByLabelText(testLabel);

    expect(toggle).toHaveAttribute('value', value);
  });

  it('should auto focus your toggle', () => {
    const testLabel = 'test label';
    const { getByLabelText } = render(
      <Toggle autoFocus labelText={testLabel} /> // eslint-disable-line jsx-a11y/no-autofocus
    );
    const toggle = getByLabelText(testLabel);

    expect(toggle).toHaveFocus();
  });

  it('should require the toggle', () => {
    const testLabel = 'test label';
    const { getByLabelText } = render(
      <Toggle required labelText={testLabel} />
    );
    const toggle = getByLabelText(testLabel);

    expect(toggle).toHaveAttribute('required');
  });

  it('should disable the toggle', () => {
    const testLabel = 'test label';
    const { getByLabelText } = render(
      <Toggle disabled labelText={testLabel} />
    );
    const toggle = getByLabelText(testLabel);

    expect(toggle).toBeDisabled();
  });

  it('should render the toggle with the text position left by default', () => {
    const testLabel = 'test label';
    const { getByText } = render(<Toggle labelText={testLabel} />);
    const span = getByText(testLabel);

    expect(span).toHaveStyleRule('padding-right', '10px');
  });

  it('should render the toggle with the text position right with the textPosition prop', () => {
    const testLabel = 'test label';
    const { getByText } = render(
      <Toggle labelText={testLabel} textPosition="right" />
    );

    const span = getByText(testLabel);

    expect(span).toHaveStyleRule('padding-left', '10px');
  });

  it('should render a toggle with hidden label text with the correct styles', () => {
    const testLabel = 'test label';
    const { getByText } = render(
      <Toggle labelText={testLabel} isTextVisuallyHidden />
    );
    const span = getByText(testLabel);

    expect(span).toHaveStyleRule('clip', 'rect(1px,1px,1px,1px)');
  });

  it('should handle the onChange event', () => {
    const testLabel = 'test label';
    const testId = 'abc123';
    const onChangeSpy = jest.fn();
    const { getByTestId } = render(
      <Toggle labelText={testLabel} onChange={onChangeSpy} testId={testId} />
    );

    fireEvent.click(getByTestId(testId));

    expect(onChangeSpy).toHaveBeenCalledTimes(1);
  });

  it('Does not violate accessibility standards', () => {
    const testLabel = 'test label';
    const { container } = render(
      <Toggle labelText={testLabel} isTextVisuallyHidden />
    );

    return axe(container.innerHTML).then(result => {
      return expect(result).toHaveNoViolations();
    });
  });
});
