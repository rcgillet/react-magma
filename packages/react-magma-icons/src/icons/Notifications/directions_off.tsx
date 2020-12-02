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
  title: ['directions_off'],
  paths: [
    {
      d:
        'M2.19404183,3.42692304 C2.58550292,3.12230766 3.14999996,3.14999996 3.50999996,3.50999996 L3.50999996,3.50999996 L20.48,20.48 C20.87,20.87 20.87,21.5 20.48,21.89 L20.48,21.89 L20.3859582,21.973077 C19.9944971,22.2776924 19.43,22.25 19.07,21.89 L19.07,21.89 L15.79,18.61 L12.7,21.7 C12.31,22.09 11.68,22.09 11.29,21.7 L11.29,21.7 L2.28999996,12.7 C1.89999996,12.31 1.89999996,11.68 2.28999996,11.29 L2.28999996,11.29 L5.37999997,8.19999998 L2.09999996,4.91999997 C1.70999996,4.52999997 1.70999996,3.89999997 2.09999996,3.50999996 L2.09999996,3.50999996 Z M11.3,2.28999996 C11.69,1.89999996 12.32,1.89999996 12.71,2.28999996 L12.71,2.28999996 L21.71,11.29 C22.09,11.69 22.09,12.32 21.71,12.7 L21.71,12.7 L18.62,15.79 L15.17,12.34 L16.15,11.36 C16.35,11.16 16.35,10.85 16.15,10.65 L16.15,10.65 L13,7.49999998 L13,10.17 L8.20999998,5.37999997 Z M8.01999998,10.85 C8.00999998,10.9 7.98999998,10.95 7.98999998,11 L7.98999998,11 L7.98999998,14 C7.98999998,14.55 8.43999999,15 8.98999998,15 C9.53999999,15 9.98999998,14.55 9.98999998,14 L9.98999998,14 L9.98999998,12.82 Z',
      id: 'NotificationsDirectionsOffIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'directions_off',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsDirectionsOffIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsDirectionsOffIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsDirectionsOffIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsDirectionsOffIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
