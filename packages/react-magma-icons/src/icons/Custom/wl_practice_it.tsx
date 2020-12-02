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
  title: ['wl_practice_it'],
  paths: [
    {
      d:
        'M9.63636364,11.0909091 L15.0909091,11.0909091 L15.0909091,5.63636364 L9.63636364,5.63636364 L9.63636364,11.0909091 Z M6,22 L9.63636364,22 L9.63636364,14.7272727 L18.7272727,14.7272727 L18.7272727,2 L6,2 L6,22 Z',
      id: 'CustomWlPracticeItIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'wl_practice_it',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CustomWlPracticeItIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CustomWlPracticeItIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CustomWlPracticeItIcon-path-1',
        },
      ],
    },
  ],
};

export const CustomWlPracticeItIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
