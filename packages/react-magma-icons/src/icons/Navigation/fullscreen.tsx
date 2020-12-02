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
  title: ['fullscreen'],
  paths: [
    {
      d:
        'M5.99999997,14 C5.44999997,14 4.99999997,14.45 4.99999997,15 L4.99999997,18 C4.99999997,18.55 5.44999997,19 5.99999997,19 L8.99999997,19 C9.54999999,19 9.99999997,18.55 9.99999997,18 C9.99999997,17.45 9.54999999,17 8.99999997,17 L6.99999997,17 L6.99999997,15 C6.99999997,14.45 6.54999998,14 5.99999997,14 Z M5.99999997,9.99999997 C6.54999998,9.99999997 6.99999997,9.54999999 6.99999997,8.99999997 L6.99999997,6.99999997 L8.99999997,6.99999997 C9.54999999,6.99999997 9.99999997,6.54999998 9.99999997,5.99999997 C9.99999997,5.44999997 9.54999999,4.99999997 8.99999997,4.99999997 L5.99999997,4.99999997 C5.44999997,4.99999997 4.99999997,5.44999997 4.99999997,5.99999997 L4.99999997,8.99999997 C4.99999997,9.54999999 5.44999997,9.99999997 5.99999997,9.99999997 Z M17,17 L15,17 C14.45,17 14,17.45 14,18 C14,18.55 14.45,19 15,19 L18,19 C18.55,19 19,18.55 19,18 L19,15 C19,14.45 18.55,14 18,14 C17.45,14 17,14.45 17,15 L17,17 Z M14,5.99999997 C14,6.54999998 14.45,6.99999997 15,6.99999997 L17,6.99999997 L17,8.99999997 C17,9.54999999 17.45,9.99999997 18,9.99999997 C18.55,9.99999997 19,9.54999999 19,8.99999997 L19,5.99999997 C19,5.44999997 18.55,4.99999997 18,4.99999997 L15,4.99999997 C14.45,4.99999997 14,5.44999997 14,5.99999997 Z',
      id: 'NavigationFullscreenIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'fullscreen',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationFullscreenIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationFullscreenIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationFullscreenIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationFullscreenIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
