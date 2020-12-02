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
  title: ['confirmation_number'],
  paths: [
    {
      d:
        'M22,8.53999999 L22,5.99999997 C22,4.89999997 21.1,3.99999997 20,3.99999997 L3.99999996,3.99999997 C2.89999996,3.99999997 2.00999996,4.88999997 2.00999996,5.99999997 L2.00999996,8.53999999 C2.00999996,9.22999999 2.33999996,9.90999999 2.94999996,10.23 C3.57999996,10.58 3.99999996,11.24 3.99999996,12 C3.99999996,12.76 3.56999996,13.43 2.93999996,13.76 C2.33999996,14.09 1.99999996,14.77 1.99999996,15.46 L1.99999996,18 C1.99999996,19.1 2.89999996,20 3.99999996,20 L20,20 C21.1,20 22,19.1 22,18 L22,15.46 C22,14.77 21.66,14.09 21.06,13.76 C20.43,13.42 20,12.76 20,12 C20,11.24 20.43,10.58 21.06,10.24 C21.66,9.90999999 22,9.22999999 22,8.53999999 L22,8.53999999 Z M13,17.5 L11,17.5 L11,15.5 L13,15.5 L13,17.5 Z M13,13 L11,13 L11,11 L13,11 L13,13 Z M13,8.49999998 L11,8.49999998 L11,6.49999998 L13,6.49999998 L13,8.49999998 Z',
      id: 'NotificationsConfirmationNumberIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'confirmation_number',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsConfirmationNumberIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsConfirmationNumberIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsConfirmationNumberIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsConfirmationNumberIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
