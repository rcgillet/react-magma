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
  title: ['fullscreen_exit'],
  paths: [
    {
      d:
        'M5.99999997,16 L7.99999997,16 L7.99999997,18 C7.99999997,18.55 8.44999999,19 8.99999997,19 C9.54999999,19 9.99999997,18.55 9.99999997,18 L9.99999997,15 C9.99999997,14.45 9.54999999,14 8.99999997,14 L5.99999997,14 C5.44999997,14 4.99999997,14.45 4.99999997,15 C4.99999997,15.55 5.44999997,16 5.99999997,16 Z M7.99999997,7.99999997 L5.99999997,7.99999997 C5.44999997,7.99999997 4.99999997,8.44999999 4.99999997,8.99999997 C4.99999997,9.54999999 5.44999997,9.99999997 5.99999997,9.99999997 L8.99999997,9.99999997 C9.54999999,9.99999997 9.99999997,9.54999999 9.99999997,8.99999997 L9.99999997,5.99999997 C9.99999997,5.44999997 9.54999999,4.99999997 8.99999997,4.99999997 C8.44999999,4.99999997 7.99999997,5.44999997 7.99999997,5.99999997 L7.99999997,7.99999997 Z M15,19 C15.55,19 16,18.55 16,18 L16,16 L18,16 C18.55,16 19,15.55 19,15 C19,14.45 18.55,14 18,14 L15,14 C14.45,14 14,14.45 14,15 L14,18 C14,18.55 14.45,19 15,19 Z M16,7.99999997 L16,5.99999997 C16,5.44999997 15.55,4.99999997 15,4.99999997 C14.45,4.99999997 14,5.44999997 14,5.99999997 L14,8.99999997 C14,9.54999999 14.45,9.99999997 15,9.99999997 L18,9.99999997 C18.55,9.99999997 19,9.54999999 19,8.99999997 C19,8.44999999 18.55,7.99999997 18,7.99999997 L16,7.99999997 Z',
      id: 'NavigationFullscreenExitIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'fullscreen_exit',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationFullscreenExitIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationFullscreenExitIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationFullscreenExitIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationFullscreenExitIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
