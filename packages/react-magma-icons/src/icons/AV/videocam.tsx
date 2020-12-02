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
  title: ['videocam'],
  paths: [
    {
      d:
        'M17,10.5 L17,6.99999998 C17,6.44999998 16.55,5.99999998 16,5.99999998 L3.99999996,5.99999998 C3.44999996,5.99999998 2.99999996,6.44999998 2.99999996,6.99999998 L2.99999996,17 C2.99999996,17.55 3.44999996,18 3.99999996,18 L16,18 C16.55,18 17,17.55 17,17 L17,13.5 L19.29,15.79 C19.92,16.42 21,15.97 21,15.08 L21,8.90999999 C21,8.01999998 19.92,7.56999998 19.29,8.19999998 L17,10.5 Z',
      id: 'AVVideocamIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'videocam',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVVideocamIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVVideocamIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVVideocamIcon-path-1',
        },
      ],
    },
  ],
};

export const AVVideocamIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
