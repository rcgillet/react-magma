import { Locale } from 'date-fns';

export interface I18nInterface {
  locale: Locale;
  dateFormat: 'MM/dd/yyyy' | 'dd/MM/yyyy' | 'yyyy/MM/dd' | 'yyyy/dd/MM';
  timeFormat: '12' | '24';
  months: {
    long: {
      january: string;
      february: string;
      march: string;
      april: string;
      may: string;
      june: string;
      july: string;
      august: string;
      september: string;
      october: string;
      november: string;
      december: string;
    };
    short: {
      january: string;
      february: string;
      march: string;
      april: string;
      may: string;
      june: string;
      july: string;
      august: string;
      september: string;
      october: string;
      november: string;
      december: string;
    };
  };
  days: {
    long: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    };
    short: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    };
    min: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    };
  };
  emptyItemsListText: string;
  alert: {
    dismissAriaLabel: string;
  };
  breadcrumb: {
    navAriaLabel: string;
  };
  indeterminateCheckbox: {
    isCheckedAnnounce: string;
    isIndeterminateAnnounce: string;
    isUncheckedAnnounce: string;
  };
  modal: {
    closeAriaLabel: string;
  };
  password: {
    shown: {
      ariaLabel: string;
      buttonText: string;
      announce: string;
    };
    hidden: {
      ariaLabel: string;
      buttonText: string;
      announce: string;
    };
  };
  search: {
    input: {
      ariaLabel: string;
      placeholder: string;
    };
    iconAriaLabel: string;
  };
  spinner: {
    ariaLabel: string;
  };
  timePicker: {
    hoursAriaLabel: string;
    minutesAriaLabel: string;
    amButtonAriaLabel: string;
    pmButtonAriaLabel: string;
    amSelectedAnnounce: string;
    pmSelectedAnnounce: string;
  };
  datePicker: {
    startOfWeek:
      | 'sunday'
      | 'monday'
      | 'tuesday'
      | 'wednesday'
      | 'thursday'
      | 'friday'
      | 'saturday';
    calendarIconAriaLabel: string;
    calendarOpenAnnounce: string;
    calendarCloseAriaLabel: string;
    previousMonthAriaLabel: string;
    nextMonthAriaLabel: string;
    disabledDayAriaLabel: string;
    selectedDayAriaLabel: string;
    todayAriaLabel: string;

    helpModal: {
      header: string;
      helpButtonAriaLabel: string;
      enter: {
        ariaLabel: string;
        explanation: string;
      };
      rightAndLeftArrowKeys: {
        ariaLabel: string;
        explanation: string;
      };
      upAndDownArrowKeys: {
        ariaLabel: string;
        explanation: string;
      };
      pageUpAndPageDownKeys: {
        ariaLabel: string;
        displayValue: string;
        explanation: string;
      };
      homeAndEndKeys: {
        ariaLabel: string;
        displayValue: string;
        explanation: string;
      };
      escape: {
        ariaLabel: string;
        displayValue: string;
        explanation: string;
      };
      questionMark: {
        ariaLabel: string;
        explanation: string;
      };
    };
  };
  loadingIndicator: {
    progressBar: {
      messages: {
        first: string;
        second: string;
        third: string;
      };
    };
    spinner: {
      messages: {
        first: string;
        second: string;
        third: string;
      };
    };
  };
  skipLink: {
    buttonText: string;
  };
  select: {
    placeholder: string;
    clearIndicatorAriaLabel: string;
  };
  multiSelect: {
    placeholder: string;
    selectedItemButtonAriaLabel: string;
  };
  combobox: {
    clearIndicatorAriaLabel: string;
    createLabel: string;
  };
  multiCombobox: {
    selectedItemButtonAriaLabel: string;
  };
  dropdown: {
    menuItemSelectedAriaLabel: string;
    toggleMenuAriaLabel: string;
  };
  tabs: {
    horizontalTabsInstructions: string;
    verticalTabsInstructions: string;
  };
}
