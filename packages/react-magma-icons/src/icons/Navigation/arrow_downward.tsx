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
  title: ['arrow_downward'],
  paths: [
    {
      d:
        'M11,4.99999997 L11,16.17 L6.11999998,11.29 C5.72999997,10.9 5.08999997,10.9 4.69999997,11.29 C4.30999997,11.68 4.30999997,12.31 4.69999997,12.7 L11.29,19.29 C11.68,19.68 12.31,19.68 12.7,19.29 L19.29,12.7 C19.68,12.31 19.68,11.68 19.29,11.29 C18.9,10.9 18.27,10.9 17.88,11.29 L13,16.17 L13,4.99999997 C13,4.44999997 12.55,3.99999997 12,3.99999997 C11.45,3.99999997 11,4.44999997 11,4.99999997 Z',
      id: 'NavigationArrowDownwardIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'arrow_downward',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationArrowDownwardIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationArrowDownwardIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationArrowDownwardIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationArrowDownwardIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
