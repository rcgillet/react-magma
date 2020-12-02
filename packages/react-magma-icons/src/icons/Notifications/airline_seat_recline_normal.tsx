import * as React from 'react';
import { IconProps } from '../../iconProps';
import { renderIcon } from '../../SvgIcon';

const iconType = {
  width: '24px',
  height: '24px',
  viewBox: '0 0 24 24',
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  title: ['airline_seat_recline_normal'],
  paths: [
    {
      d:
        'M7.58999998,5.40999997 C6.80999998,4.62999997 6.80999998,3.35999996 7.58999998,2.57999996 C8.36999998,1.79999996 9.63999999,1.79999996 10.42,2.57999996 C11.2,3.35999996 11.2,4.62999997 10.42,5.40999997 C9.62999999,6.19999998 8.36999998,6.19999998 7.58999998,5.40999997 Z M5.99999997,16 L5.99999997,7.99999998 C5.99999997,7.44999998 5.54999997,6.99999998 4.99999997,6.99999998 C4.44999997,6.99999998 3.99999997,7.44999998 3.99999997,7.99999998 L3.99999997,16 C3.99999997,18.76 6.23999998,21 8.99999997,21 L14,21 C14.55,21 15,20.55 15,20 C15,19.45 14.55,19 14,19 L8.99999997,19 C7.33999998,19 5.99999997,17.66 5.99999997,16 Z M19.28,19.35 L15.51,15.58 C15.14,15.21 14.63,15 14.1,15 L11.5,15 L11.5,11.32 C12.59,12.21 14.16,13.02 15.7,13.34 C16.37,13.48 17,12.98 17,12.3 C17,11.77 16.61,11.34 16.08,11.25 C14.66,11.01 13.2,10.24 12.33,9.27999999 L10.93,7.72999998 C10.74,7.51999998 10.5,7.34999998 10.24,7.22999998 C9.94999999,7.08999998 9.61999999,6.99999998 9.27999999,6.99999998 L9.24999999,6.99999998 C8.00999998,6.99999998 6.99999998,8.00999998 6.99999998,9.24999999 L6.99999998,15 C6.99999998,16.66 8.33999998,18 9.99999998,18 L15.07,18 L17.85,20.78 C18.24,21.17 18.89,21.17 19.28,20.78 C19.68,20.39 19.68,19.75 19.28,19.35 Z',
      id: 'NotificationsAirlineSeatReclineNormalIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'airline_seat_recline_normal',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsAirlineSeatReclineNormalIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsAirlineSeatReclineNormalIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsAirlineSeatReclineNormalIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsAirlineSeatReclineNormalIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
