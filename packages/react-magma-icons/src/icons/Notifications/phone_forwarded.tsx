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
  title: ['phone_forwarded'],
  paths: [
    {
      d:
        'M22.65,5.64999997 L18.86,1.85999996 C18.54,1.53999996 18,1.75999996 18,2.20999996 L18,3.99999997 L14.5,3.99999997 C14.22,3.99999997 14,4.21999997 14,4.49999997 L14,7.49999998 C14,7.77999998 14.22,7.99999998 14.5,7.99999998 L18,7.99999998 L18,9.78999999 C18,10.24 18.54,10.46 18.85,10.14 L22.64,6.34999998 C22.84,6.15999998 22.84,5.83999997 22.65,5.64999997 L22.65,5.64999997 Z M19.23,15.26 L16.69,14.97 C16.08,14.9 15.48,15.11 15.05,15.54 L13.21,17.38 C10.38,15.94 8.05999998,13.63 6.61999998,10.79 L8.46999999,8.93999999 C8.89999999,8.50999996 9.10999999,7.90999998 9.03999999,7.29999998 L8.74999999,4.77999997 C8.62999999,3.76999997 7.77999998,3.00999996 6.75999998,3.00999996 L5.02999997,3.00999996 C3.89999997,3.00999996 2.95999996,3.94999997 3.02999996,5.07999997 C3.55999996,13.62 10.39,20.44 18.92,20.97 C20.05,21.04 20.9900976,20.1 20.9900976,18.97 L20.9900976,17.24 C21,16.23 20.24,15.38 19.23,15.26 L19.23,15.26 Z',
      id: 'NotificationsPhoneForwardedIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'phone_forwarded',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsPhoneForwardedIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsPhoneForwardedIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsPhoneForwardedIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsPhoneForwardedIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
