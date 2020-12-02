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
  title: ['flash_off'],
  paths: [
    {
      d:
        'M16.12,11.5 C16.51,10.83 16.03,9.99999999 15.26,9.99999999 L13.39,9.99999999 L15.67,12.28 L16.12,11.5 Z M16.28,3.44999996 C16.61,2.77999996 16.13,1.99999996 15.38,1.99999996 L7.99999998,1.99999996 C7.44999998,1.99999996 6.99999998,2.44999996 6.99999998,2.99999996 L6.99999998,3.60999997 L13.13,9.73999999 L16.28,3.44999996 L16.28,3.44999996 Z M18.44,17.88 L4.11999997,3.55999996 C3.72999997,3.16999996 3.09999996,3.16999996 2.70999996,3.55999996 C2.31999996,3.94999997 2.31999996,4.57999997 2.70999996,4.96999997 L6.99999998,9.26999999 L6.99999998,12 C6.99999998,12.55 7.44999998,13 7.99999998,13 L9.99999999,13 L9.99999999,20.15 C9.99999999,20.66 10.67,20.84 10.93,20.4 L13.58,15.85 L17.02,19.29 C17.41,19.68 18.04,19.68 18.43,19.29 C18.83,18.9 18.83,18.27 18.44,17.88 Z',
      id: 'ImageFlashOffIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'flash_off',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageFlashOffIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageFlashOffIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageFlashOffIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageFlashOffIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
