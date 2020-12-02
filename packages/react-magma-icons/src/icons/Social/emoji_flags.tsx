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
  title: ['emoji_flags'],
  paths: [
    {
      d:
        'M19,8.99999996 L14,8.99999996 L13.28,7.54999998 C13.11,7.20999998 12.76,6.99999996 12.38,6.99999996 L6.99999997,6.99999996 L6.99999997,5.71999997 C7.59999998,5.37999997 7.99999997,4.73999997 7.99999997,3.99999996 C7.99999997,2.89999996 7.09999998,1.99999996 5.99999997,1.99999996 C4.89999997,1.99999996 3.99999997,2.89999996 3.99999997,3.99999996 C3.99999997,4.73999997 4.39999997,5.37999997 4.99999997,5.71999997 L4.99999997,20 C4.99999997,20.55 5.44999997,21 5.99999997,21 C6.54999998,21 6.99999997,20.55 6.99999997,20 L6.99999997,17 L12,17 L12.72,18.45 C12.89,18.79 13.24,19 13.61,19 L19,19 C19.55,19 20,18.55 20,18 L20,9.99999996 C20,9.44999999 19.55,8.99999996 19,8.99999996 Z M18,17 L14,17 L13,15 L6.99999998,15 L6.99999998,8.99999999 L12,8.99999999 L13,11 L18,11 L18,17 Z',
      id: 'SocialEmojiFlagsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'emoji_flags',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialEmojiFlagsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialEmojiFlagsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialEmojiFlagsIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialEmojiFlagsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
