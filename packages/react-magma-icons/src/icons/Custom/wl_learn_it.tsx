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
  title: ['wl_learn_it'],
  paths: [],
  polygons: [
    {
      id: 'CustomWlLearnItIcon-path-1',
      points:
        '9.65636364 2 6 2 6 22 18.7272727 22 18.7272727 18.3745455 9.65636364 18.3745455',
    },
  ],
  groups: [
    {
      id: 'wl_learn_it',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CustomWlLearnItIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CustomWlLearnItIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CustomWlLearnItIcon-path-1',
        },
      ],
    },
  ],
};

export const CustomWlLearnItIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
