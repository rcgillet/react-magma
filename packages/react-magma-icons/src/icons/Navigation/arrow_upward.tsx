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
  title: ['arrow_upward'],
  paths: [
    {
      d:
        'M13,19 L13,7.82999998 L17.88,12.71 C18.27,13.1 18.91,13.1 19.3,12.71 C19.69,12.32 19.69,11.69 19.3,11.3 L12.71,4.70999997 C12.32,4.31999997 11.69,4.31999997 11.3,4.70999997 L4.69999997,11.29 C4.30999997,11.68 4.30999997,12.31 4.69999997,12.7 C5.08999997,13.09 5.71999997,13.09 6.10999998,12.7 L11,7.82999998 L11,19 C11,19.55 11.45,20 12,20 C12.55,20 13,19.55 13,19 Z',
      id: 'NavigationArrowUpwardIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'arrow_upward',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationArrowUpwardIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationArrowUpwardIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationArrowUpwardIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationArrowUpwardIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
