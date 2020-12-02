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
  title: ['tour'],
  paths: [
    {
      d:
        'M20.45,5.36999997 C20.71,4.70999997 20.23,3.99999996 19.52,3.99999996 L13,3.99999996 L12,3.99999996 L6.99999997,3.99999996 L6.99999997,2.99999996 C6.99999997,2.44999996 6.54999998,1.99999996 5.99999997,1.99999996 L5.99999997,1.99999996 C5.44999997,1.99999996 4.99999997,2.44999996 4.99999997,2.99999996 L4.99999997,3.99999996 L4.99999997,14 L4.99999997,22 L6.99999997,22 L6.99999997,14 L11,14 L12,14 L19.52,14 C20.23,14 20.71,13.29 20.45,12.63 L19,8.99999996 L20.45,5.36999997 Z M15,8.99999998 C15,10.1 14.1,11 13,11 C11.9,11 11,10.1 11,8.99999998 C11,7.89999998 11.9,6.99999998 13,6.99999998 C14.1,6.99999998 15,7.89999998 15,8.99999998 Z',
      id: 'ActionsTourIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'tour',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsTourIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsTourIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsTourIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsTourIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
