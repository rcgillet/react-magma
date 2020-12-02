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
  title: ['home_work'],
  paths: [
    {
      d:
        'M20,2.99999996 C20.55,2.99999996 21,3.44999996 21,3.99999996 L21,3.99999996 L21,20 C21,20.55 20.55,21 20,21 L20,21 L17,21 L17,19 L19,19 L19,17 L17,17 L17,15 L19,15 L19,13 L17,13 L17,12.35 C17,11.5 16.64,10.68 16.01,10.12 L16.01,10.12 L11.01,5.61999997 L11.01,5.61999997 L11,5.60999997 L11,3.99999996 C11,3.44999996 11.45,2.99999996 12,2.99999996 L12,2.99999996 Z M8.99999996,6.84999998 C9.23999999,6.84999998 9.47999999,6.92999998 9.66999999,7.10999998 L9.66999999,7.10999998 L14.67,11.61 C14.88,11.8 15,12.07 15,12.35 L15,12.35 L15,20 C15,20.55 14.55,21 14,21 L14,21 L12,21 C11.45,21 11,20.55 11,20 L11,20 L11,16 L6.99999996,16 L6.99999996,20 C6.99999996,20.55 6.54999998,21 5.99999996,21 L5.99999996,21 L3.99999996,21 C3.44999996,21 2.99999996,20.55 2.99999996,20 L2.99999996,20 L2.99999996,12.35 C2.99999996,12.06 3.11999996,11.79 3.32999996,11.61 L3.32999996,11.61 L8.32999998,7.10999998 C8.51999999,6.93999998 8.75999999,6.84999998 8.99999996,6.84999998 Z M19,8.99999999 L17,8.99999999 L17,11 L19,11 L19,8.99999999 Z M15,4.99999997 L13,4.99999997 L13,6.99999997 L15,6.99999997 L15,4.99999997 Z M19,4.99999997 L17,4.99999997 L17,6.99999997 L19,6.99999997 L19,4.99999997 Z',
      id: 'NavigationHomeWorkIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'home_work',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationHomeWorkIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationHomeWorkIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationHomeWorkIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationHomeWorkIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
