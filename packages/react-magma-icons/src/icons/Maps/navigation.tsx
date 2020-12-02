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
  title: ['navigation'],
  paths: [
    {
      d:
        'M12.93,4.25999997 L19.08,19.25 C19.42,20.08 18.57,20.91 17.75,20.54 L12.41,18.18 C12.15,18.07 11.86,18.07 11.6,18.18 L6.25999998,20.54 C5.43999997,20.9 4.58999997,20.08 4.92999997,19.25 L11.08,4.25999997 C11.41,3.42999996 12.59,3.42999996 12.93,4.25999997 Z',
      id: 'MapsNavigationIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'navigation',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsNavigationIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsNavigationIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsNavigationIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsNavigationIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
