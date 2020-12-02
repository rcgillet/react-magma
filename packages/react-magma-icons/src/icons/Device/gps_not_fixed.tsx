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
  title: ['gps_not_fixed'],
  paths: [
    {
      d:
        'M20.94,11 C20.48,6.82999998 17.17,3.51999996 13,3.05999996 L13,1.99999995 C13,1.44999996 12.55,0.999999954 12,0.999999954 C11.45,0.999999954 11,1.44999996 11,1.99999995 L11,3.05999996 C6.82999998,3.51999996 3.51999996,6.82999998 3.05999996,11 L1.99999995,11 C1.44999996,11 0.999999954,11.45 0.999999954,12 C0.999999954,12.55 1.44999996,13 1.99999995,13 L3.05999996,13 C3.51999996,17.17 6.82999998,20.48 11,20.94 L11,22 C11,22.55 11.45,23 12,23 C12.55,23 13,22.55 13,22 L13,20.94 C17.17,20.48 20.48,17.17 20.94,13 L22,13 C22.55,13 23,12.55 23,12 C23,11.45 22.55,11 22,11 L20.94,11 Z M12,19 C8.12999998,19 4.99999997,15.87 4.99999997,12 C4.99999997,8.12999998 8.12999998,4.99999997 12,4.99999997 C15.87,4.99999997 19,8.12999998 19,12 C19,15.87 15.87,19 12,19 Z',
      id: 'DeviceGpsNotFixedIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'gps_not_fixed',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'DeviceGpsNotFixedIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#DeviceGpsNotFixedIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#DeviceGpsNotFixedIcon-path-1',
        },
      ],
    },
  ],
};

export const DeviceGpsNotFixedIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
