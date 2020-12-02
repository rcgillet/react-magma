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
  title: ['theaters'],
  paths: [
    {
      d:
        'M18,3.99999996 L18,4.99999996 L16,4.99999996 L16,3.99999996 C16,3.44999996 15.55,2.99999996 15,2.99999996 L8.99999997,2.99999996 C8.44999999,2.99999996 7.99999997,3.44999996 7.99999997,3.99999996 L7.99999997,4.99999996 L5.99999997,4.99999996 L5.99999997,3.99999996 C5.99999997,3.44999996 5.54999997,2.99999996 4.99999997,2.99999996 C4.44999997,2.99999996 3.99999997,3.44999996 3.99999997,3.99999996 L3.99999997,20 C3.99999997,20.55 4.44999997,21 4.99999997,21 C5.54999997,21 5.99999997,20.55 5.99999997,20 L5.99999997,19 L7.99999997,19 L7.99999997,20 C7.99999997,20.55 8.44999999,21 8.99999997,21 L15,21 C15.55,21 16,20.55 16,20 L16,19 L18,19 L18,20 C18,20.55 18.45,21 19,21 C19.55,21 20,20.55 20,20 L20,3.99999996 C20,3.44999996 19.55,2.99999996 19,2.99999996 C18.45,2.99999996 18,3.44999996 18,3.99999996 Z M7.99999998,17 L5.99999998,17 L5.99999998,15 L7.99999998,15 L7.99999998,17 Z M7.99999998,13 L5.99999998,13 L5.99999998,11 L7.99999998,11 L7.99999998,13 Z M7.99999998,8.99999998 L5.99999998,8.99999998 L5.99999998,6.99999998 L7.99999998,6.99999998 L7.99999998,8.99999998 Z M18,17 L16,17 L16,15 L18,15 L18,17 Z M18,13 L16,13 L16,11 L18,11 L18,13 Z M18,8.99999998 L16,8.99999998 L16,6.99999998 L18,6.99999998 L18,8.99999998 Z',
      id: 'ActionsTheatersIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'theaters',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsTheatersIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsTheatersIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsTheatersIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsTheatersIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
