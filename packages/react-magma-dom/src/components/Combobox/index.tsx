import React from 'react';
import {
  useCombobox,
  UseComboboxProps,
  UseComboboxState,
  UseMultipleSelectionProps,
} from 'downshift';
import {
  SelectOptions,
  instanceOfDefaultItemObject,
  InternalSelectProps,
  InternalMultiProps,
} from '../Select';
import { InternalCombobox } from './Combobox';
import { MultiCombobox } from './MultiCombobox';
import { InputMessage } from '../Input/InputMessage';
import { useGenerateId } from '../../utils';

export interface ComboboxProps<T extends SelectOptions>
  extends Omit<UseComboboxProps<T>, 'items'>,
    InternalSelectProps<T> {
  /**
   * Id of the element that describes the combobox input
   */
  ariaDescribedBy?: string;
  /**
   * Default selectable options. Allows for uncontrolled component and internal creation of items. Can be an array of strings or objects
   */
  defaultItems?: T[];
  /**
   * If true, the new items cannot be created by typing in the text field
   * @default false
   */
  disableCreateItem?: boolean;
  /**
   * @internal
   */
  hasError?: boolean;
  /**
   * Reference to the input element in the combobox
   */
  innerRef?: React.Ref<HTMLInputElement>;
  /**
   * If true, the loading component is shown
   * @default false
   */
  isLoading?: boolean;
  /**
   * Default selectable options. Can be an array of strings or objects
   */
  items?: T[];
  /**
   * Function passed in that transforms a newly created item to whatever format your items are in
   */
  newItemTransform?: (item: { label: string; value: string }) => T;
  /**
   * Event that fires when the input loses focus
   */
  onInputBlur?: (event: React.FocusEvent) => void;
  /**
   * Event that fires when the input's value is changed
   */
  onInputChange?: (changes: Partial<UseComboboxState<T>>) => void;
  /**
   * Event that fires when the input gains focus
   */
  onInputFocus?: (event: React.FocusEvent) => void;
  /**
   * Event that will fire when input receives keypress.
   */
  onInputKeyDown?: (event: React.KeyboardEvent) => void;
  /**
   * Event that will fire when a character is typed in the input
   */
  onInputKeyPress?: (event: React.KeyboardEvent) => void;
  /**
   * Event that will fire when a keypress is released on the input
   */
  onInputKeyUp?: (event: React.KeyboardEvent) => void;
  /**
   * Event that fires when the selected item changes
   */
  onInputValueChange?: (
    changes: Partial<UseComboboxState<T>>,
    updateInputItems?: React.Dispatch<React.SetStateAction<T[]>>
  ) => void;
  /**
   * Event that fires when a new item is created with the create item option is clicked in the item list menu
   */
  onItemCreated?: (newItem: T) => void;
  /**
   * Reference to the toggle button element wrapping the input in the combobox
   */
  toggleButtonRef?: React.Ref<HTMLButtonElement>;
}

export interface MultiComboboxProps<T extends SelectOptions>
  extends UseMultipleSelectionProps<T>,
    Omit<ComboboxProps<T>, 'onStateChange' | 'stateReducer'>,
    InternalMultiProps<T> {}

export function instanceOfMultiCombobox<T>(
  object: any
): object is MultiComboboxProps<T> {
  return 'isMulti' in object;
}

export const ComboboxStateChangeTypes = useCombobox.stateChangeTypes;

export function Combobox<T>(props: ComboboxProps<T>) {
  const {
    containerStyle,
    errorMessage,
    id: defaultId,
    isInverse,
    isMulti,
    messageStyle,
    helperMessage,
    testId,
  } = props;

  function itemToString(item: T) {
    return item && typeof item === 'string'
      ? item
      : item && instanceOfDefaultItemObject(item)
      ? item.label
      : '';
  }

  const hasError = !!errorMessage;

  const id = useGenerateId(defaultId);

  const descriptionId = errorMessage || helperMessage ? `${id}__desc` : null;

  return (
    <div style={containerStyle} data-testid={testId}>
      {isMulti && instanceOfMultiCombobox<T>(props) ? (
        <MultiCombobox
          ariaDescribedBy={descriptionId}
          itemToString={itemToString}
          {...props}
          hasError={hasError}
        />
      ) : (
        <InternalCombobox
          ariaDescribedBy={descriptionId}
          itemToString={itemToString}
          {...props}
          hasError={hasError}
        />
      )}
      <InputMessage
        id={descriptionId}
        isInverse={isInverse}
        hasError={hasError}
        style={messageStyle}
      >
        {(errorMessage || helperMessage) && (
          <>{errorMessage ? errorMessage : helperMessage}</>
        )}
      </InputMessage>
    </div>
  );
}
