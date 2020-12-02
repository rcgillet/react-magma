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
  title: ['add_to_home_screen'],
  paths: [
    {
      d:
        'M18,1.00999995 L7.99999998,0.999999954 C6.89999998,0.999999954 5.99999998,1.89999996 5.99999998,2.99999995 L5.99999998,5.99999995 C5.99999998,6.54999998 6.44999998,6.99999995 6.99999998,6.99999995 C7.54999998,6.99999995 7.99999998,6.54999998 7.99999998,5.99999995 L7.99999998,4.99999995 L18,4.99999995 L18,19 L7.99999998,19 L7.99999998,18 C7.99999998,17.45 7.54999998,17 6.99999998,17 C6.44999998,17 5.99999998,17.45 5.99999998,18 L5.99999998,21 C5.99999998,22.1 6.89999998,23 7.99999998,23 L18,23 C19.1,23 20,22.1 20,21 L20,2.99999995 C20,1.89999996 19.1,1.00999995 18,1.00999995 Z M11,15 C11.55,15 12,14.55 12,14 L12,8.99999998 C12,8.44999999 11.55,7.99999998 11,7.99999998 L5.99999998,7.99999998 C5.44999997,7.99999998 4.99999997,8.44999999 4.99999997,8.99999998 C4.99999997,9.54999999 5.44999997,9.99999998 5.99999998,9.99999998 L8.58999999,9.99999998 L3.69999997,14.89 C3.30999996,15.28 3.30999996,15.91 3.69999997,16.3 C4.08999997,16.69 4.71999997,16.69 5.10999997,16.3 L9.99999999,11.41 L9.99999999,14 C9.99999999,14.55 10.45,15 11,15 Z',
      id: 'DeviceAddToHomeScreenIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'add_to_home_screen',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'DeviceAddToHomeScreenIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#DeviceAddToHomeScreenIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#DeviceAddToHomeScreenIcon-path-1',
        },
      ],
    },
  ],
};

export const DeviceAddToHomeScreenIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
