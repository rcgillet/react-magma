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
  title: ['mouse'],
  paths: [
    {
      d:
        'M13,1.06999995 L13,8.99999999 L20,8.99999999 C20,4.91999997 16.95,1.55999996 13,1.06999995 Z M3.99999997,15 C3.99999997,19.42 7.57999998,23 12,23 C16.42,23 20,19.42 20,15 L20,11 L3.99999997,11 L3.99999997,15 Z M11,1.06999995 C7.04999998,1.55999996 3.99999997,4.91999997 3.99999997,8.99999999 L11,8.99999999 L11,1.06999995 Z',
      id: 'HardwareMouseIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'mouse',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HardwareMouseIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HardwareMouseIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#HardwareMouseIcon-path-1',
        },
      ],
    },
  ],
};

export const HardwareMouseIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
