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
  title: ['storage'],
  paths: [
    {
      d:
        'M3.99999996,20 L20,20 C21.1,20 22,19.1 22,18 C22,16.9 21.1,16 20,16 L3.99999996,16 C2.89999996,16 1.99999996,16.9 1.99999996,18 C1.99999996,19.1 2.89999996,20 3.99999996,20 Z M3.99999997,17 L5.99999997,17 L5.99999997,19 L3.99999997,19 L3.99999997,17 Z M1.99999996,5.99999997 C1.99999996,7.09999998 2.89999996,7.99999997 3.99999996,7.99999997 L20,7.99999997 C21.1,7.99999997 22,7.09999998 22,5.99999997 C22,4.89999997 21.1,3.99999997 20,3.99999997 L3.99999996,3.99999997 C2.89999996,3.99999997 1.99999996,4.89999997 1.99999996,5.99999997 Z M5.99999997,6.99999997 L3.99999997,6.99999997 L3.99999997,4.99999997 L5.99999997,4.99999997 L5.99999997,6.99999997 Z M3.99999996,14 L20,14 C21.1,14 22,13.1 22,12 C22,10.9 21.1,9.99999999 20,9.99999999 L3.99999996,9.99999999 C2.89999996,9.99999999 1.99999996,10.9 1.99999996,12 C1.99999996,13.1 2.89999996,14 3.99999996,14 Z M3.99999997,11 L5.99999997,11 L5.99999997,13 L3.99999997,13 L3.99999997,11 Z',
      id: 'DeviceStorageIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'storage',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'DeviceStorageIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#DeviceStorageIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#DeviceStorageIcon-path-1',
        },
      ],
    },
  ],
};

export const DeviceStorageIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
