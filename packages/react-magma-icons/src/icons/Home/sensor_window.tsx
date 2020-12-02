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
  title: ['sensor_window'],
  paths: [
    {
      d:
        'M18,3.99999997 L18,20 L5.99999997,20 L5.99999997,3.99999997 L18,3.99999997 M18,1.99999996 L5.99999997,1.99999996 C4.89999997,1.99999996 3.99999997,2.89999996 3.99999997,3.99999996 L3.99999997,20 C3.99999997,21.1 4.89999997,22 5.99999997,22 L18,22 C19.1,22 20,21.1 20,20 L20,3.99999996 C20,2.89999996 19.1,1.99999996 18,1.99999996 L18,1.99999996 Z M6.99999998,19 L17,19 L17,13 L6.99999998,13 L6.99999998,19 Z M9.99999998,9.99999997 L14,9.99999997 L14,11 L17,11 L17,4.99999997 L6.99999998,4.99999997 L6.99999998,11 L9.99999998,11 L9.99999998,9.99999997 Z',
      id: 'HomeSensorWindowIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'sensor_window',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HomeSensorWindowIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HomeSensorWindowIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#HomeSensorWindowIcon-path-1',
        },
      ],
    },
  ],
};

export const HomeSensorWindowIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
