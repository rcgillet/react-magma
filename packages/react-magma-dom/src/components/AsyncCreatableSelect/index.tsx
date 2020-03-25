import * as React from 'react';
import { SelectCore } from 'react-magma-core';
import { ThemeContext } from '../../theme/ThemeContext';
import {
  getStyles,
  ClearIndicator,
  DropdownIndicator,
  MultiValueRemove
} from '../Select';
import { SelectWrapper } from '../Select/SelectWrapper';
import { AsyncCreatable as ReactAsyncCreatableSelect } from 'react-select';
import { AsyncSelectProps } from '../AsyncSelect';
import { CreatableSelectProps } from '../CreatableSelect';
import { Omit } from '../utils';

type AsyncAndCreatable = CreatableSelectProps & AsyncSelectProps;

export interface AsyncCreatableSelectProps
  extends Omit<AsyncAndCreatable, 'options'> {}

export const AsyncCreatableSelect: React.FunctionComponent<
  AsyncCreatableSelectProps
> = (props: AsyncCreatableSelectProps) => (
  <SelectCore
    defaultValue={props.defaultValue}
    value={props.value}
    onChange={props.onChange}
  >
    {({ value, onChange }) => {
      const {
        allowCreateWhileLoading,
        createOptionPosition,
        cacheOptions,
        components: customComponents,
        defaultOptions,
        defaultValue,
        formatCreateLabel,
        getNewOptionData,
        id,
        isLoading,
        isValidNewOption,
        testId,
        name,
        onCreateOption,
        onBlur,
        onFocus,
        onOpen,
        onClose,
        labelText,
        loadOptions,
        disabled,
        required,
        clearable,
        errorMessage,
        helperMessage,
        inverse,
        multi,
        style
      } = props;

      return (
        <ThemeContext.Consumer>
          {theme => (
            <SelectWrapper
              errorMessage={errorMessage}
              helperMessage={helperMessage}
              id={id}
              inverse={inverse}
              labelText={labelText}
              testId={testId}
            >
              <ReactAsyncCreatableSelect
                id={id}
                inverse={inverse}
                components={{
                  ClearIndicator,
                  DropdownIndicator,
                  MultiValueRemove,
                  ...customComponents
                }}
                aria-label={labelText}
                name={name}
                defaultValue={defaultValue}
                value={value}
                cacheOptions={cacheOptions}
                defaultOptions={defaultOptions}
                loadOptions={loadOptions}
                required={required}
                isDisabled={disabled}
                isMulti={multi}
                isClearable={clearable}
                onBlur={onBlur}
                onFocus={onFocus}
                onChange={onChange}
                onMenuOpen={onOpen}
                onMenuClose={onClose}
                styles={getStyles(style, theme, errorMessage)}
                classNamePrefix="magma"
                allowCreateWhileLoading={allowCreateWhileLoading}
                createOptionPosition={createOptionPosition}
                formatCreateLabel={formatCreateLabel}
                getNewOptionData={getNewOptionData}
                isLoading={isLoading}
                isValidNewOption={isValidNewOption}
                onCreateOption={onCreateOption}
              />
            </SelectWrapper>
          )}
        </ThemeContext.Consumer>
      );
    }}
  </SelectCore>
);
