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
  title: ['phone_locked'],
  paths: [
    {
      d:
        'M19.23,15.26 L16.69,14.97 C16.08,14.9 15.48,15.11 15.05,15.54 L13.21,17.38 C10.38,15.94 8.05999998,13.63 6.61999998,10.79 L8.46999999,8.93999999 C8.89999999,8.50999996 9.10999999,7.90999998 9.03999999,7.29999998 L8.74999999,4.77999997 C8.62999999,3.76999997 7.77999998,3.00999996 6.75999998,3.00999996 L5.02999997,3.00999996 C3.89999997,3.00999996 2.95999996,3.94999997 3.02999996,5.07999997 C3.55999996,13.62 10.39,20.44 18.92,20.97 C20.05,21.04 20.9900976,20.1 20.9900976,18.97 L20.9900976,17.24 C21,16.23 20.24,15.38 19.23,15.26 Z M20,3.99999995 L20,3.49999995 C20,2.11999996 18.88,0.999999954 17.5,0.999999954 C16.12,0.999999954 15,2.11999996 15,3.49999995 L15,3.99999995 C14.45,3.99999995 14,4.44999997 14,4.99999995 L14,8.99999995 C14,9.54999999 14.45,9.99999995 15,9.99999995 L20,9.99999995 C20.55,9.99999995 21,9.54999999 21,8.99999995 L21,4.99999995 C21,4.44999997 20.55,3.99999995 20,3.99999995 Z M19,3.99999996 L16,3.99999996 L16,3.49999996 C16,2.66999996 16.67,1.99999996 17.5,1.99999996 C18.33,1.99999996 19,2.66999996 19,3.49999996 L19,3.99999996 Z',
      id: 'NotificationsPhoneLockedIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'phone_locked',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsPhoneLockedIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsPhoneLockedIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsPhoneLockedIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsPhoneLockedIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
