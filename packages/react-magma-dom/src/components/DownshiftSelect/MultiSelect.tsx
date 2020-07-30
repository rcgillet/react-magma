import * as React from 'react';
import { DownshiftOption, DownshiftMultiSelectInterface } from '.';
import {
  useSelect,
  useMultipleSelection,
  UseMultipleSelectionProps
} from 'downshift';
import { CrossIcon } from '../Icon/types/CrossIcon';
import { ItemsList } from './ItemsList';
import { DownshiftSelectContainer } from './SelectContainer';
import { SelectTriggerButton } from './SelectTriggerButton';
import { SelectedItemButton, IconWrapper } from './shared';

import { ThemeContext } from '../../theme/ThemeContext';

export function MultiSelect<T>(props: DownshiftMultiSelectInterface<T>) {
  const {
    hasError,
    itemToString,
    items,
    labelText,
    isDisabled,
    onRemoveSelectedItem
  } = props;

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems
  } = useMultipleSelection(
    (props as unknown) as UseMultipleSelectionProps<DownshiftOption<T>>
  );

  function getFilteredItems(unfilteredItems) {
    return unfilteredItems.filter(item => selectedItems.indexOf(item) < 0);
  }

  const { stateReducer, onStateChange, ...selectProps } = props;

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    selectItem,
    openMenu
  } = useSelect({
    ...selectProps,
    items: getFilteredItems(items),
    onSelectedItemChange: defaultOnSelectedItemChange
  });

  function defaultOnSelectedItemChange({ selectedItem: newSelectedItem }) {
    if (newSelectedItem) {
      addSelectedItem(newSelectedItem);
      selectItem(null);
    }
  }

  function handleRemoveSelectedItem(event: React.SyntheticEvent, selectedItem) {
    event.stopPropagation();

    onRemoveSelectedItem && typeof onRemoveSelectedItem === 'function'
      ? onRemoveSelectedItem(selectedItem)
      : removeSelectedItem(selectedItem);
  }

  const theme = React.useContext(ThemeContext);

  return (
    <DownshiftSelectContainer
      getLabelProps={getLabelProps}
      labelText={labelText}
    >
      <SelectTriggerButton
        toggleButtonProps={...getToggleButtonProps({
          ...getDropdownProps(),
          disabled: isDisabled,
          onKeyDown: event => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              openMenu();
            }
          }
        })}
        hasError={hasError}
      >
        {selectedItems &&
          selectedItems.map((multiSelectedItem, index) => (
            <SelectedItemButton
              aria-label="reset item"
              key={`selected-item-${index}`}
              {...getSelectedItemProps({
                selectedItem: multiSelectedItem,
                index
              })}
              onClick={event =>
                handleRemoveSelectedItem(event, multiSelectedItem)
              }
              tabIndex={0}
              theme={theme}
            >
              {multiSelectedItem}
              <IconWrapper>
                <CrossIcon size={8} />
              </IconWrapper>
            </SelectedItemButton>
          ))}
      </SelectTriggerButton>
      <ItemsList
        getItemProps={getItemProps}
        getMenuProps={getMenuProps}
        highlightedIndex={highlightedIndex}
        isOpen={isOpen}
        items={getFilteredItems(items)}
        itemToString={itemToString}
      />
    </DownshiftSelectContainer>
  );
}
