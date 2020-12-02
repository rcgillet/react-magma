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
  title: ['sports_mma'],
  paths: [
    {
      d:
        'M17,17 L17,20 C17,20.55 16.55,21 16,21 L16,21 L7.99999998,21 C7.44999998,21 6.99999998,20.55 6.99999998,20 L6.99999998,20 L6.99999998,17 L17,17 Z M15,2.99999996 C16.1,2.99999996 17,3.89999997 17,4.99999996 L17,4.99999996 L17,7.99999996 C17,7.44999998 17.45,6.99999996 18,6.99999996 C18.55,6.99999996 19,7.44999998 19,7.99999996 L19,7.99999996 L19,10.8 C19,10.93 18.99,11.06 18.96,11.19 L18.96,11.19 L18.16,15.19 C18.07,15.63 17.63,15.99 17.18,15.99 L17.18,15.99 L6.81999998,15.99 C6.33999998,15.99 5.92999997,15.66 5.83999997,15.19 L5.83999997,15.19 L5.03999997,11.19 C5.00999997,11.06 4.99999997,10.93 4.99999997,10.8 L4.99999997,10.8 L4.99999997,4.99999996 C4.99999997,3.89999997 5.89999997,2.99999996 6.99999997,2.99999996 L6.99999997,2.99999996 Z M14,6.99999998 L7.99999998,6.99999998 C7.44999998,6.99999998 6.99999998,7.44999998 6.99999998,7.99999998 L6.99999998,7.99999998 L6.99999998,8.99999998 C6.99999998,9.54999999 7.44999998,9.99999998 7.99999998,9.99999998 L7.99999998,9.99999998 L14,9.99999998 C14.55,9.99999998 15,9.54999999 15,8.99999998 L15,8.99999998 L15,7.99999998 C15,7.44999998 14.55,6.99999998 14,6.99999998 L14,6.99999998 Z',
      id: 'SocialSportsMmaIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'sports_mma',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialSportsMmaIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialSportsMmaIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialSportsMmaIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialSportsMmaIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
