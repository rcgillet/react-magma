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
  title: ['arrow_right_alt'],
  paths: [
    {
      d:
        'M16.01,11 L4.99999997,11 C4.44999997,11 3.99999997,11.45 3.99999997,12 C3.99999997,12.55 4.44999997,13 4.99999997,13 L16.01,13 L16.01,14.79 C16.01,15.24 16.55,15.46 16.86,15.14 L19.64,12.35 C19.83,12.15 19.83,11.84 19.64,11.64 L16.86,8.84999999 C16.55,8.52999999 16.01,8.75999999 16.01,9.19999999 L16.01,11 L16.01,11 Z',
      id: 'ActionsArrowRightAltIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'arrow_right_alt',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsArrowRightAltIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsArrowRightAltIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsArrowRightAltIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsArrowRightAltIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
