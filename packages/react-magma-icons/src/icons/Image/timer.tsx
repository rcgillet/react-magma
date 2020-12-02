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
  title: ['timer'],
  paths: [
    {
      d:
        'M14,0.999999954 L9.99999999,0.999999954 C9.44999999,0.999999954 8.99999999,1.44999996 8.99999999,1.99999995 C8.99999999,2.54999996 9.44999999,2.99999995 9.99999999,2.99999995 L14,2.99999995 C14.55,2.99999995 15,2.54999996 15,1.99999995 C15,1.44999996 14.55,0.999999954 14,0.999999954 Z M12,14 C12.55,14 13,13.55 13,13 L13,8.99999998 C13,8.44999999 12.55,7.99999998 12,7.99999998 C11.45,7.99999998 11,8.44999999 11,8.99999998 L11,13 C11,13.55 11.45,14 12,14 Z M19.03,7.38999998 L19.78,6.63999998 C20.16,6.25999998 20.17,5.62999997 19.78,5.23999997 L19.77,5.22999997 C19.38,4.83999997 18.76,4.84999997 18.37,5.22999997 L17.62,5.97999997 C16.07,4.73999997 14.12,3.99999997 12,3.99999997 C7.19999998,3.99999997 3.11999996,7.95999998 2.99999996,12.76 C2.86999996,17.84 6.93999998,22 12,22 C16.98,22 21,17.97 21,13 C21,10.88 20.26,8.92999999 19.03,7.38999998 Z M12,20 C8.12999998,20 4.99999997,16.87 4.99999997,13 C4.99999997,9.12999999 8.12999998,5.99999998 12,5.99999998 C15.87,5.99999998 19,9.12999999 19,13 C19,16.87 15.87,20 12,20 Z',
      id: 'ImageTimerIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'timer',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageTimerIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageTimerIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageTimerIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageTimerIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
