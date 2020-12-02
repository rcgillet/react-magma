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
  title: ['playlist_add'],
  paths: [
    {
      d:
        'M13,9.99999999 L2.99999996,9.99999999 C2.44999996,9.99999999 1.99999996,10.45 1.99999996,11 C1.99999996,11.55 2.44999996,12 2.99999996,12 L13,12 C13.55,12 14,11.55 14,11 C14,10.45 13.55,9.99999999 13,9.99999999 Z M13,5.99999997 L2.99999996,5.99999997 C2.44999996,5.99999997 1.99999996,6.44999998 1.99999996,6.99999997 C1.99999996,7.54999998 2.44999996,7.99999997 2.99999996,7.99999997 L13,7.99999997 C13.55,7.99999997 14,7.54999998 14,6.99999997 C14,6.44999998 13.55,5.99999997 13,5.99999997 Z M18,14 L18,11 C18,10.45 17.55,9.99999999 17,9.99999999 C16.45,9.99999999 16,10.45 16,11 L16,14 L13,14 C12.45,14 12,14.45 12,15 C12,15.55 12.45,16 13,16 L16,16 L16,19 C16,19.55 16.45,20 17,20 C17.55,20 18,19.55 18,19 L18,16 L21,16 C21.55,16 22,15.55 22,15 C22,14.45 21.55,14 21,14 L18,14 Z M2.99999996,16 L8.99999996,16 C9.54999999,16 9.99999996,15.55 9.99999996,15 C9.99999996,14.45 9.54999999,14 8.99999996,14 L2.99999996,14 C2.44999996,14 1.99999996,14.45 1.99999996,15 C1.99999996,15.55 2.44999996,16 2.99999996,16 Z',
      id: 'AVPlaylistAddIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'playlist_add',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVPlaylistAddIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVPlaylistAddIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVPlaylistAddIcon-path-1',
        },
      ],
    },
  ],
};

export const AVPlaylistAddIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
