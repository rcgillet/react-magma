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
  title: ['close'],
  paths: [
    {
      d:
        'M18.3,5.70999997 C17.91,5.31999997 17.28,5.31999997 16.89,5.70999997 L12,10.59 L7.10999998,5.69999997 C6.71999998,5.30999997 6.08999998,5.30999997 5.69999997,5.69999997 C5.30999997,6.08999998 5.30999997,6.71999998 5.69999997,7.10999998 L10.59,12 L5.69999997,16.89 C5.30999997,17.28 5.30999997,17.91 5.69999997,18.3 C6.08999998,18.69 6.71999998,18.69 7.10999998,18.3 L12,13.41 L16.89,18.3 C17.28,18.69 17.91,18.69 18.3,18.3 C18.69,17.91 18.69,17.28 18.3,16.89 L13.41,12 L18.3,7.10999998 C18.68,6.72999998 18.68,6.08999998 18.3,5.70999997 Z',
      id: 'NavigationCloseIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'close',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationCloseIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationCloseIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationCloseIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationCloseIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
