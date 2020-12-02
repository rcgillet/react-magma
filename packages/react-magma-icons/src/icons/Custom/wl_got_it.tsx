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
  title: ['wl_got_it'],
  paths: [
    {
      d:
        'M4,22 L7.63636364,22 L7.63636364,5.63636364 L4,5.63636364 L4,22 Z M16.7272727,22 L20.3636364,22 L20.3636364,14.7272727 L16.7272727,14.7272727 L16.7272727,22 Z M7.63636364,22 L16.7272727,22 L16.7272727,18.3636364 L7.63636364,18.3636364 L7.63636364,22 Z M4,5.63636364 L18.5454545,5.63636364 L18.5454545,2 L4,2 L4,5.63636364 Z M13.0909091,14.7272727 L20.3636364,14.7272727 L20.3636364,11.0909091 L13.0909091,11.0909091 L13.0909091,14.7272727 Z',
      id: 'CustomWlGotItIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'wl_got_it',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CustomWlGotItIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CustomWlGotItIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CustomWlGotItIcon-path-1',
        },
      ],
    },
  ],
};

export const CustomWlGotItIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
