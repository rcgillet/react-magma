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
  title: ['dns'],
  paths: [
    {
      d:
        'M19,13 L4.99999996,13 C3.89999997,13 2.99999996,13.9 2.99999996,15 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,15 C21,13.9 20.1,13 19,13 Z M6.99999997,19 C5.89999997,19 4.99999997,18.1 4.99999997,17 C4.99999997,15.9 5.89999997,15 6.99999997,15 C8.09999998,15 8.99999997,15.9 8.99999997,17 C8.99999997,18.1 8.09999998,19 6.99999997,19 Z M19,2.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,8.99999996 C2.99999996,10.1 3.89999997,11 4.99999996,11 L19,11 C20.1,11 21,10.1 21,8.99999996 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M6.99999997,8.99999997 C5.89999997,8.99999997 4.99999997,8.09999998 4.99999997,6.99999997 C4.99999997,5.89999997 5.89999997,4.99999997 6.99999997,4.99999997 C8.09999998,4.99999997 8.99999997,5.89999997 8.99999997,6.99999997 C8.99999997,8.09999998 8.09999998,8.99999997 6.99999997,8.99999997 Z',
      id: 'ActionsDnsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'dns',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsDnsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsDnsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsDnsIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsDnsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
