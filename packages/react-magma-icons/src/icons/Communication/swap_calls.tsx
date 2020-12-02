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
  title: ['swap_calls'],
  paths: [
    {
      d:
        'M17.65,4.34999997 L14.86,7.13999998 C14.54,7.45999998 14.76,7.99999998 15.21,7.99999998 L17,7.99999998 L17,14.88 C17,15.88 16.33,16.81 15.34,16.97 C14.09,17.18 13,16.21 13,15 L13,8.16999998 C13,6.07999998 11.47,4.21999997 9.38999999,4.01999997 C7.00999998,3.78999997 4.99999997,5.65999997 4.99999997,7.99999998 L4.99999997,15 L3.20999996,15 C2.75999996,15 2.53999996,15.54 2.85999996,15.85 L5.64999997,18.64 C5.84999997,18.84 6.15999998,18.84 6.35999998,18.64 L9.14999999,15.85 C9.45999999,15.54 9.23999999,15 8.78999999,15 L6.99999998,15 L6.99999998,8.11999998 C6.99999998,7.11999998 7.66999998,6.18999998 8.65999999,6.02999998 C9.90999999,5.81999997 11,6.78999998 11,7.99999998 L11,14.83 C11,16.92 12.53,18.78 14.61,18.98 C16.99,19.21 19,17.34 19,15 L19,7.99999998 L20.79,7.99999998 C21.24,7.99999998 21.46,7.45999998 21.14,7.14999998 L18.35,4.35999997 C18.16,4.15999997 17.84,4.15999997 17.65,4.34999997 L17.65,4.34999997 Z',
      id: 'CommunicationSwapCallsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'swap_calls',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationSwapCallsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationSwapCallsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationSwapCallsIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationSwapCallsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
