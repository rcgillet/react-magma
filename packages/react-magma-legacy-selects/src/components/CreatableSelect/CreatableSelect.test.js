/// <reference types="jest-dom/extend-expect"/>
import React from 'react';
import { axe } from 'jest-axe';
import { CreatableSelect } from '.';
import { act, render, fireEvent, waitForElement } from '@testing-library/react';
import { Search2Icon } from 'react-magma-icons';
import { components as ReactSelectComponents } from 'react-select';

const colourOptions = [
  {
    label: 'Red',
    value: 'red',
  },
  {
    label: 'Blue',
    value: 'blue',
  },
];

it('Does not violate accessibility standards', async () => {
  let container;

  await act(async () => {
    ({ container } = render(
      <CreatableSelect labelText="test label" options={colourOptions} />
    ));
  });
  await waitForElement(() => container.querySelector('input'));
  return axe(container.innerHTML).then(result => {
    return expect(result).toHaveNoViolations();
  });
});

describe('Creatable', () => {
  it('should call onChange with the new option', async () => {
    let container;
    let getByText;
    const handleChange = jest.fn();

    await act(async () => {
      ({ container, getByText } = render(
        <CreatableSelect
          id="colorsSelect"
          labelText="Colors"
          options={colourOptions}
          onChange={handleChange}
        />
      ));
    });

    const input = container.querySelector('input');
    fireEvent.focus(input);

    fireEvent.change(input, {
      target: {
        value: 'pink',
      },
    });

    await waitForElement(() => getByText('Create "pink"'));

    expect(getByText('Create "pink"')).toBeInTheDocument();
  });

  it('should allow for the passing in of custom components', async () => {
    let getByTestId;
    const DropdownIndicator = props => {
      return (
        ReactSelectComponents.DropdownIndicator && (
          <ReactSelectComponents.DropdownIndicator {...props}>
            <Search2Icon testId="custom-dropdown-indicator" size={10} />
          </ReactSelectComponents.DropdownIndicator>
        )
      );
    };

    await act(async () => {
      ({ getByTestId } = render(
        <CreatableSelect
          id="customSelect"
          labelText="Custom"
          components={{
            DropdownIndicator,
          }}
        />
      ));
    });

    expect(getByTestId('custom-dropdown-indicator')).toBeInTheDocument();
  });
});
