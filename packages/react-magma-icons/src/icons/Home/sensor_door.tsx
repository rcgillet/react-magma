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
  title: ['sensor_door'],
  paths: [
    {
      d:
        'M18,1.99999996 L5.99999997,1.99999996 C4.89999997,1.99999996 3.99999997,2.89999996 3.99999997,3.99999996 L3.99999997,20 C3.99999997,21.1 4.89999997,22 5.99999997,22 L18,22 C19.1,22 20,21.1 20,20 L20,3.99999996 C20,2.89999996 19.1,1.99999996 18,1.99999996 Z M15.5,13.5 C14.67,13.5 14,12.83 14,12 C14,11.17 14.67,10.5 15.5,10.5 C16.33,10.5 17,11.17 17,12 C17,12.83 16.33,13.5 15.5,13.5 Z',
      id: 'HomeSensorDoorIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'sensor_door',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HomeSensorDoorIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HomeSensorDoorIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#HomeSensorDoorIcon-path-1',
        },
      ],
    },
  ],
};

export const HomeSensorDoorIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
