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
  title: ['nature'],
  paths: [
    {
      d:
        'M13,16.12 C16.37,15.72 19.01,12.93 19.16,9.47999999 C19.33,5.60999997 16.14,2.22999996 12.27,2.16999996 C8.34999998,2.11999996 5.16999997,5.26999997 5.16999997,9.16999999 C5.16999997,12.64 7.68999998,15.51 11,16.06 L11,20 L5.99999997,20 C5.44999997,20 4.99999997,20.45 4.99999997,21 C4.99999997,21.55 5.44999997,22 5.99999997,22 L18,22 C18.55,22 19,21.55 19,21 C19,20.45 18.55,20 18,20 L13,20 L13,16.12 Z',
      id: 'ImageNatureIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'nature',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageNatureIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageNatureIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageNatureIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageNatureIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
