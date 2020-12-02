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
  title: ['markunread'],
  paths: [
    {
      d:
        'M20,3.99999997 L3.99999996,3.99999997 C2.89999996,3.99999997 1.99999996,4.89999997 1.99999996,5.99999997 L1.99999996,18 C1.99999996,19.1 2.89999996,20 3.99999996,20 L20,20 C21.1,20 22,19.1 22,18 L22,5.99999997 C22,4.89999997 21.1,3.99999997 20,3.99999997 Z M19.6,8.24999998 L13.06,12.34 C12.41,12.75 11.59,12.75 10.94,12.34 L4.39999997,8.24999998 C4.14999997,8.08999998 3.99999997,7.81999998 3.99999997,7.52999998 C3.99999997,6.85999998 4.72999997,6.45999998 5.29999997,6.80999998 L12,11 L18.7,6.80999998 C19.27,6.45999998 20,6.85999998 20,7.52999998 C20,7.81999998 19.85,8.08999998 19.6,8.24999998 Z',
      id: 'ContentMarkunreadIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'markunread',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentMarkunreadIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentMarkunreadIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentMarkunreadIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentMarkunreadIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
