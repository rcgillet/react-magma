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
  title: ['public_off'],
  paths: [
    {
      d:
        'M11,8.16999998 L6.48999998,3.65999997 C8.06999998,2.60999996 9.95999999,1.99999996 12,1.99999996 C17.52,1.99999996 22,6.47999998 22,12 C22,14.04 21.39,15.93 20.34,17.51 L18.88,16.05 C19.59,14.87 20,13.48 20,12 C20,8.64999999 17.93,5.77999997 15,4.58999997 L15,4.99999996 C15,6.09999998 14.1,6.99999996 13,6.99999996 L11,6.99999996 L11,8.16999998 Z M20.49,21.9 L20.49,21.9 C20.1,22.29 19.47,22.29 19.08,21.9 L17.52,20.34 C15.45,21.71 12.84,22.34 10.07,21.82 C6.11999998,21.07 2.93999996,17.9 2.18999996,13.94 C1.66999996,11.17 2.28999996,8.55999999 3.66999997,6.48999998 L2.09999996,4.92999997 C1.70999996,4.53999997 1.70999996,3.90999997 2.09999996,3.51999996 L2.09999996,3.51999996 C2.48999996,3.12999996 3.11999996,3.12999996 3.50999996,3.51999996 L20.48,20.49 C20.88,20.88 20.88,21.51 20.49,21.9 Z M11,18 C9.89999999,18 8.99999997,17.1 8.99999997,16 L8.99999997,15 L4.20999997,10.21 C4.07999997,10.79 3.99999997,11.38 3.99999997,12 C3.99999997,16.08 7.04999998,19.44 11,19.93 L11,18 Z',
      id: 'SocialPublicOffIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'public_off',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialPublicOffIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialPublicOffIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialPublicOffIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialPublicOffIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
