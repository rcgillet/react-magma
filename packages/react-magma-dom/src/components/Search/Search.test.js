import React from 'react';
import { axe } from 'jest-axe';
import { Search } from '.';
import { I18nContext } from '../../i18n';
import { defaultI18n } from '../../i18n/default';
import { render, fireEvent } from '@testing-library/react';

const onSearchSpy = jest.fn();

describe('Search', () => {
  it('should render the search component', () => {
    const { container } = render(<Search onSearch={onSearchSpy} />);

    expect(container).toBeInTheDocument();
  });

  it('should render the search component with custom aria-label, placeholder, and label text', () => {
    const { container } = render(
      <Search
        iconAriaLabel="Test icon label"
        labelText="Test input label"
        onSearch={onSearchSpy}
        placeholder="Test placeholder"
      />
    );

    expect(container.querySelector('button')).toHaveAttribute(
      'aria-label',
      'Test icon label'
    );

    expect(container.querySelector('input')).toHaveAttribute(
      'placeholder',
      'Test placeholder'
    );

    expect(container.querySelector('input')).toHaveAttribute(
      'aria-label',
      'Test input label'
    );
  });

  it('should fire the onSearch event when enter is pressed', () => {
    const { container } = render(
      <Search onSearch={onSearchSpy} value="test value" />
    );

    expect(onSearchSpy).not.toHaveBeenCalled();

    fireEvent.keyDown(container.querySelector('input'), {
      keyCode: 13,
    });

    expect(onSearchSpy).toBeCalledWith('test value');
  });

  it('should trigger the passed in onChange when value of the input is changed', () => {
    const targetValue = 'Change';
    const onChangeSpy = jest.fn();
    const labelText = 'test label';
    const { getByLabelText } = render(
      <Search labelText={labelText} onChange={onChangeSpy} value="" />
    );

    fireEvent.change(getByLabelText(labelText), {
      target: { value: targetValue },
    });

    expect(onChangeSpy).toHaveBeenCalledTimes(1);
  });

  it('should render the spinner if isLoading is true component', () => {
    const { getByLabelText } = render(
      <Search isLoading onSearch={onSearchSpy} />
    );

    expect(getByLabelText(defaultI18n.spinner.ariaLabel)).toBeInTheDocument();
  });

  describe('i18n', () => {
    it('should use the input overrides', () => {
      const input = {
        ariaLabel: 'search ariaLabel',
        placeholder: 'search placeholder',
      };
      const { getByLabelText } = render(
        <I18nContext.Provider
          value={{
            ...defaultI18n,
            search: {
              ...defaultI18n.search,
              input,
            },
          }}
        >
          <Search />
        </I18nContext.Provider>
      );

      const searchInput = getByLabelText(input.ariaLabel);

      expect(searchInput).toBeInTheDocument();
      expect(searchInput).toHaveAttribute('placeholder', input.placeholder);
    });

    it('should use the icon ariaLabel override', () => {
      const iconAriaLabel = 'test icon ariaLabel';
      const { getByLabelText } = render(
        <I18nContext.Provider
          value={{
            ...defaultI18n,
            search: {
              ...defaultI18n.search,
              iconAriaLabel,
            },
          }}
        >
          <Search />
        </I18nContext.Provider>
      );

      expect(getByLabelText(iconAriaLabel)).toBeInTheDocument();
    });
  });

  it('Does not violate accessibility standards', () => {
    const { container } = render(<Search onSearch={onSearchSpy} />);

    return axe(container.innerHTML).then(result => {
      return expect(result).toHaveNoViolations();
    });
  });
});
