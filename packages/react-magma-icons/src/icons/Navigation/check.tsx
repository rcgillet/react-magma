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
  title: ['check'],
  paths: [
    {
      d:
        'M8.99999999,16.17 L5.52999997,12.7 C5.13999997,12.31 4.50999997,12.31 4.11999997,12.7 C3.72999997,13.09 3.72999997,13.72 4.11999997,14.11 L8.29999998,18.29 C8.68999999,18.68 9.31999999,18.68 9.70999999,18.29 L20.29,7.70999998 C20.68,7.31999998 20.68,6.68999998 20.29,6.29999998 C19.9,5.90999997 19.27,5.90999997 18.88,6.29999998 L8.99999999,16.17 Z',
      id: 'NavigationCheckIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'check',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationCheckIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationCheckIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationCheckIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationCheckIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
