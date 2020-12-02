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
  title: ['sync_problem'],
  paths: [
    {
      d:
        'M2.99999996,12 C2.99999996,14.21 3.90999997,16.2 5.35999997,17.64 L3.84999997,19.15 C3.53999996,19.46 3.75999997,20 4.20999997,20 L8.49999996,20 C8.77999999,20 8.99999996,19.78 8.99999996,19.5 L8.99999996,15.21 C8.99999996,14.76 8.45999999,14.54 8.14999998,14.86 L6.75999998,16.25 C5.67999997,15.15 4.99999996,13.66 4.99999996,12 C4.99999996,9.60999999 6.39999998,7.53999998 8.42999999,6.57999998 C8.76999999,6.41999998 8.99999996,6.10999998 8.99999996,5.73999997 L8.99999996,5.54999997 C8.99999996,4.86999997 8.28999998,4.43999997 7.67999998,4.72999997 C4.91999997,5.98999997 2.99999996,8.76999999 2.99999996,12 Z M11,17 L13,17 L13,15 L11,15 L11,17 Z M19.79,3.99999997 L15.5,3.99999997 C15.22,3.99999997 15,4.21999997 15,4.49999997 L15,8.78999999 C15,9.23999999 15.54,9.45999999 15.85,9.13999999 L17.24,7.74999998 C18.32,8.84999999 19,10.34 19,12 C19,14.39 17.6,16.46 15.57,17.42 C15.23,17.58 15,17.89 15,18.26 L15,18.44 C15,19.12 15.71,19.55 16.32,19.26 C19.08,18.01 21,15.23 21,12 C21,9.78999999 20.09,7.79999998 18.64,6.35999998 L20.15,4.84999997 C20.46,4.53999997 20.24,3.99999997 19.79,3.99999997 L19.79,3.99999997 Z M12,13 C12.55,13 13,12.55 13,12 L13,7.99999998 C13,7.44999998 12.55,6.99999998 12,6.99999998 C11.45,6.99999998 11,7.44999998 11,7.99999998 L11,12 C11,12.55 11.45,13 12,13 Z',
      id: 'NotificationsSyncProblemIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'sync_problem',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsSyncProblemIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsSyncProblemIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsSyncProblemIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsSyncProblemIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
