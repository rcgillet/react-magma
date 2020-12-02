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
  title: ['no_transfer'],
  paths: [
    {
      d:
        'M5.77999997,2.94999996 C7.23999998,2.15999996 9.47999999,1.99999996 12,1.99999996 C16.42,1.99999996 20,2.49999996 20,5.99999996 L20,16 C20,16.35 19.92,16.67 19.81,16.98 L13.83,11 L18,11 L18,5.99999996 L8.82999999,5.99999996 L5.77999997,2.94999996 Z M20.49,21.9 C20.1,22.29 19.47,22.29 19.08,21.9 L18.07,20.89 C17.89,20.96 17.7,21 17.5,21 C16.67,21 16,20.32 16,19.5 L16,19 L7.99999998,19 L7.99999998,19.5 C7.99999998,20.33 7.32999998,21 6.49999998,21 C5.66999997,21 4.99999997,20.33 4.99999997,19.5 L4.99999997,18.22 C4.38999997,17.67 3.99999997,16.88 3.99999997,16 L3.99999997,6.82999998 L2.09999996,4.92999997 C1.70999996,4.53999997 1.70999996,3.90999997 2.09999996,3.51999996 C2.48999996,3.12999996 3.11999996,3.12999996 3.50999996,3.51999996 L20.48,20.49 C20.88,20.88 20.88,21.51 20.49,21.9 Z M8.99999997,15.5 C8.99999997,14.67 8.32999998,14 7.49999997,14 C6.66999998,14 5.99999997,14.67 5.99999997,15.5 C5.99999997,16.33 6.66999998,17 7.49999997,17 C8.32999998,17 8.99999997,16.33 8.99999997,15.5 Z M8.16999998,11 L5.99999997,8.82999999 L5.99999997,11 L8.16999998,11 Z',
      id: 'MapsNoTransferIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'no_transfer',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsNoTransferIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsNoTransferIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsNoTransferIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsNoTransferIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
