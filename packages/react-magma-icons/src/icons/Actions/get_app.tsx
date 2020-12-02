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
  title: ['get_app'],
  paths: [
    {
      d:
        'M16.59,8.99999996 L15,8.99999996 L15,3.99999996 C15,3.44999996 14.55,2.99999996 14,2.99999996 L9.99999999,2.99999996 C9.44999999,2.99999996 8.99999999,3.44999996 8.99999999,3.99999996 L8.99999999,8.99999996 L7.40999998,8.99999996 C6.51999998,8.99999996 6.06999998,10.08 6.69999998,10.71 L11.29,15.3 C11.68,15.69 12.31,15.69 12.7,15.3 L17.29,10.71 C17.92,10.08 17.48,8.99999996 16.59,8.99999996 Z M4.99999997,19 C4.99999997,19.55 5.44999997,20 5.99999997,20 L18,20 C18.55,20 19,19.55 19,19 C19,18.45 18.55,18 18,18 L5.99999997,18 C5.44999997,18 4.99999997,18.45 4.99999997,19 Z',
      id: 'ActionsGetAppIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'get_app',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsGetAppIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsGetAppIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsGetAppIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsGetAppIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
