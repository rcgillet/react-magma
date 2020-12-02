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
  title: ['phone_in_talk'],
  paths: [
    {
      d:
        'M12.88,5.04999997 C16.06,5.44999997 18.55,7.93999998 18.95,11.12 C19.01,11.63 19.44,12 19.94,12 C19.98,12 20.02,12 20.06,11.99 C20.61,11.92 21,11.42 20.93,10.87 C20.42,6.77999998 17.21,3.56999996 13.12,3.05999996 C12.57,2.99999996 12.07,3.38999996 12.01,3.93999997 C11.94,4.48999997 12.33,4.98999997 12.88,5.04999997 L12.88,5.04999997 Z M13.26,7.15999998 C12.73,7.01999998 12.18,7.33999998 12.04,7.87999998 C11.9,8.41999999 12.22,8.95999999 12.76,9.09999999 C13.81,9.36999999 14.63,10.19 14.91,11.25 C15.03,11.7 15.43,12 15.88,12 C15.96,12 16.05,11.99 16.13,11.97 C16.66,11.83 16.98,11.28 16.85,10.75 C16.38,8.97999999 15.01,7.60999998 13.26,7.15999998 Z M19.23,15.26 L16.69,14.97 C16.08,14.9 15.48,15.11 15.05,15.54 L13.21,17.38 C10.38,15.94 8.05999998,13.63 6.61999998,10.79 L8.46999999,8.93999999 C8.89999999,8.50999996 9.10999999,7.90999998 9.03999999,7.29999998 L8.74999999,4.77999997 C8.62999999,3.76999997 7.77999998,3.00999996 6.75999998,3.00999996 L5.02999997,3.00999996 C3.89999997,3.00999996 2.95999996,3.94999997 3.02999996,5.07999997 C3.55999996,13.62 10.39,20.44 18.92,20.97 C20.05,21.04 20.9900976,20.1 20.9900976,18.97 L20.9900976,17.24 C21,16.23 20.24,15.38 19.23,15.26 Z',
      id: 'NotificationsPhoneInTalkIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'phone_in_talk',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsPhoneInTalkIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsPhoneInTalkIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsPhoneInTalkIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsPhoneInTalkIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
