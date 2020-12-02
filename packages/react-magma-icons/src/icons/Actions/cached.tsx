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
  title: ['cached'],
  paths: [
    {
      d:
        'M18.65,8.34999998 L15.86,11.14 C15.54,11.46 15.76,12 16.21,12 L18,12 C18,15.31 15.31,18 12,18 C11.21,18 10.44,17.85 9.74999999,17.56 C9.38999999,17.41 8.97999999,17.52 8.70999999,17.79 C8.19999998,18.3 8.37999998,19.16 9.04999999,19.43 C9.95999999,19.8 10.96,20 12,20 C16.42,20 20,16.42 20,12 L21.79,12 C22.24,12 22.46,11.46 22.14,11.15 L19.35,8.35999998 C19.16,8.15999998 18.84,8.15999998 18.65,8.34999998 L18.65,8.34999998 Z M5.99999997,12 C5.99999997,8.68999999 8.68999999,5.99999997 12,5.99999997 C12.79,5.99999997 13.56,6.14999998 14.25,6.43999998 C14.61,6.58999998 15.02,6.47999998 15.29,6.20999998 C15.8,5.69999997 15.62,4.83999997 14.95,4.56999997 C14.04,4.19999997 13.04,3.99999997 12,3.99999997 C7.57999998,3.99999997 3.99999997,7.57999998 3.99999997,12 L2.20999996,12 C1.75999996,12 1.53999996,12.54 1.85999996,12.85 L4.64999997,15.64 C4.84999997,15.84 5.15999997,15.84 5.35999997,15.64 L8.14999998,12.85 C8.45999999,12.54 8.23999998,12 7.78999998,12 L5.99999997,12 Z',
      id: 'ActionsCachedIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'cached',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsCachedIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsCachedIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsCachedIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsCachedIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
