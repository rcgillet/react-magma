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
  title: ['videocam_off'],
  paths: [
    {
      d:
        'M21,14.2 L21,8.90999999 C21,8.01999998 19.92,7.56999998 19.29,8.19999998 L17,10.5 L17,6.99999997 C17,6.44999998 16.55,5.99999997 16,5.99999997 L10.39,5.99999997 L19.3,14.91 C19.92,15.54 21,15.09 21,14.2 Z M2.70999996,2.55999996 C2.31999996,2.94999996 2.31999996,3.57999996 2.70999996,3.96999997 L4.72999997,5.99999997 L3.99999997,5.99999997 C3.44999996,5.99999997 2.99999996,6.44999998 2.99999996,6.99999998 L2.99999996,17 C2.99999996,17.55 3.44999996,18 3.99999997,18 L16,18 C16.21,18 16.39,17.92 16.55,17.82 L19.03,20.3 C19.42,20.69 20.05,20.69 20.44,20.3 C20.83,19.91 20.83,19.28 20.44,18.89 L4.11999997,2.55999996 C3.72999997,2.16999996 3.09999996,2.16999996 2.70999996,2.55999996 Z',
      id: 'AVVideocamOffIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'videocam_off',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVVideocamOffIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVVideocamOffIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVVideocamOffIcon-path-1',
        },
      ],
    },
  ],
};

export const AVVideocamOffIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
