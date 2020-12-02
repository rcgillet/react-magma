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
  title: ['vibration'],
  paths: [
    {
      d:
        'M0.99999995,15 C1.54999996,15 1.99999995,14.55 1.99999995,14 L1.99999995,9.99999999 C1.99999995,9.44999999 1.54999996,8.99999999 0.99999995,8.99999999 C0.449999952,8.99999999 -5.00000112e-08,9.44999999 -5.00000112e-08,9.99999999 L-5.00000112e-08,14 C-5.00000112e-08,14.55 0.449999952,15 0.99999995,15 Z M3.99999996,17 C4.54999997,17 4.99999996,16.55 4.99999996,16 L4.99999996,7.99999998 C4.99999996,7.44999998 4.54999997,6.99999998 3.99999996,6.99999998 C3.44999996,6.99999998 2.99999996,7.44999998 2.99999996,7.99999998 L2.99999996,16 C2.99999996,16.55 3.44999996,17 3.99999996,17 Z M22,9.99999999 L22,14 C22,14.55 22.45,15 23,15 C23.55,15 24,14.55 24,14 L24,9.99999999 C24,9.44999999 23.55,8.99999999 23,8.99999999 C22.45,8.99999999 22,9.44999999 22,9.99999999 Z M20,17 C20.55,17 21,16.55 21,16 L21,7.99999998 C21,7.44999998 20.55,6.99999998 20,6.99999998 C19.45,6.99999998 19,7.44999998 19,7.99999998 L19,16 C19,16.55 19.45,17 20,17 Z M16.5,2.99999996 L7.49999997,2.99999996 C6.66999998,2.99999996 5.99999997,3.66999997 5.99999997,4.49999996 L5.99999997,19.5 C5.99999997,20.33 6.66999998,21 7.49999997,21 L16.5,21 C17.33,21 18,20.33 18,19.5 L18,4.49999996 C18,3.66999997 17.33,2.99999996 16.5,2.99999996 Z M16,19 L7.99999998,19 L7.99999998,4.99999997 L16,4.99999997 L16,19 Z',
      id: 'NotificationsVibrationIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'vibration',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsVibrationIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsVibrationIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsVibrationIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsVibrationIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
