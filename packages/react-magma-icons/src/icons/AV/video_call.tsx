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
  title: ['video_call'],
  paths: [
    {
      d:
        'M17,10.5 L17,6.99999998 C17,6.44999998 16.55,5.99999998 16,5.99999998 L3.99999996,5.99999998 C3.44999996,5.99999998 2.99999996,6.44999998 2.99999996,6.99999998 L2.99999996,17 C2.99999996,17.55 3.44999996,18 3.99999996,18 L16,18 C16.55,18 17,17.55 17,17 L17,13.5 L19.29,15.79 C19.92,16.42 21,15.97 21,15.08 L21,8.90999999 C21,8.01999998 19.92,7.56999998 19.29,8.19999998 L17,10.5 Z M13,13 L11,13 L11,15 C11,15.55 10.55,16 9.99999997,16 C9.44999999,16 8.99999997,15.55 8.99999997,15 L8.99999997,13 L6.99999997,13 C6.44999998,13 5.99999997,12.55 5.99999997,12 C5.99999997,11.45 6.44999998,11 6.99999997,11 L8.99999997,11 L8.99999997,8.99999998 C8.99999997,8.44999999 9.44999999,7.99999998 9.99999997,7.99999998 C10.55,7.99999998 11,8.44999999 11,8.99999998 L11,11 L13,11 C13.55,11 14,11.45 14,12 C14,12.55 13.55,13 13,13 Z',
      id: 'AVVideoCallIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'video_call',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVVideoCallIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVVideoCallIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVVideoCallIcon-path-1',
        },
      ],
    },
  ],
};

export const AVVideoCallIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
