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
  title: ['plus_one'],
  paths: [
    {
      d:
        'M8.99999997,7.99999998 C8.44999999,7.99999998 7.99999997,8.44999999 7.99999997,8.99999998 L7.99999997,12 L4.99999997,12 C4.44999997,12 3.99999997,12.45 3.99999997,13 C3.99999997,13.55 4.44999997,14 4.99999997,14 L7.99999997,14 L7.99999997,17 C7.99999997,17.55 8.44999999,18 8.99999997,18 C9.54999999,18 9.99999997,17.55 9.99999997,17 L9.99999997,14 L13,14 C13.55,14 14,13.55 14,13 C14,12.45 13.55,12 13,12 L9.99999997,12 L9.99999997,8.99999998 C9.99999997,8.44999999 9.54999999,7.99999998 8.99999997,7.99999998 Z M14.5,6.78999998 C14.5,7.35999998 15.02,7.78999998 15.58,7.67999998 L17,7.39999998 L17,17 C17,17.55 17.45,18 18,18 C18.55,18 19,17.55 19,17 L19,6.26999998 C19,5.61999997 18.4,5.14999997 17.77,5.29999997 L15.2,5.91999997 C14.79,6.00999998 14.5,6.37999998 14.5,6.78999998 Z',
      id: 'SocialPlusOneIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'plus_one',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialPlusOneIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialPlusOneIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialPlusOneIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialPlusOneIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
