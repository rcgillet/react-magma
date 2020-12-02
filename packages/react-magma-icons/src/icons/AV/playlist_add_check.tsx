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
  title: ['playlist_add_check'],
  paths: [
    {
      d:
        'M13,9.99999999 L2.99999996,9.99999999 C2.44999996,9.99999999 1.99999996,10.45 1.99999996,11 C1.99999996,11.55 2.44999996,12 2.99999996,12 L13,12 C13.55,12 14,11.55 14,11 C14,10.45 13.55,9.99999999 13,9.99999999 Z M13,5.99999998 L2.99999996,5.99999998 C2.44999996,5.99999998 1.99999996,6.44999998 1.99999996,6.99999998 C1.99999996,7.54999998 2.44999996,7.99999998 2.99999996,7.99999998 L13,7.99999998 C13.55,7.99999998 14,7.54999998 14,6.99999998 C14,6.44999998 13.55,5.99999998 13,5.99999998 Z M2.99999996,16 L8.99999996,16 C9.54999999,16 9.99999996,15.55 9.99999996,15 C9.99999996,14.45 9.54999999,14 8.99999996,14 L2.99999996,14 C2.44999996,14 1.99999996,14.45 1.99999996,15 C1.99999996,15.55 2.44999996,16 2.99999996,16 Z M22.21,12.21 L22.3,12.3 C22.69,12.69 22.69,13.32 22.3,13.71 L16.72,19.3 C16.33,19.69 15.7,19.69 15.31,19.3 L12.22,16.21 C11.83,15.82 11.83,15.19 12.22,14.8 L12.31,14.71 C12.7,14.32 13.33,14.32 13.72,14.71 L16.02,17.01 L20.8,12.22 C21.18,11.82 21.82,11.82 22.21,12.21 L22.21,12.21 Z',
      id: 'AVPlaylistAddCheckIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'playlist_add_check',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVPlaylistAddCheckIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVPlaylistAddCheckIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVPlaylistAddCheckIcon-path-1',
        },
      ],
    },
  ],
};

export const AVPlaylistAddCheckIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
