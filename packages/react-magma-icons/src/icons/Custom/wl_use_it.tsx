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
  title: ['wl_use_it'],
  paths: [],
  polygons: [
    {
      id: 'CustomWlUseItIcon-path-1',
      points:
        '17.5555556 17.5555556 6.44444444 17.5555556 6.44444444 2 2 2 2 22 22 22 22 2 17.5555556 2',
    },
  ],
  groups: [
    {
      id: 'wl_use_it',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CustomWlUseItIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CustomWlUseItIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CustomWlUseItIcon-path-1',
        },
      ],
    },
  ],
};

export const CustomWlUseItIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
