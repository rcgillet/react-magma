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
  title: ['scanner'],
  paths: [
    {
      d:
        'M19.8,10.7 L5.14999997,5.34999997 C4.62999997,5.15999997 4.04999997,5.42999997 3.84999997,5.94999997 C3.65999997,6.47999998 3.92999997,7.05999998 4.44999997,7.24999998 L17.6,12 L4.99999996,12 C3.89999997,12 2.99999996,12.9 2.99999996,14 L2.99999996,18 C2.99999996,19.1 3.89999997,20 4.99999996,20 L19,20 C20.1,20 21,19.1 21,18 L21,12.5 C21,11.7 20.5,10.9 19.8,10.7 Z M6.99999997,17 L4.99999997,17 L4.99999997,15 L6.99999997,15 L6.99999997,17 Z M18,17 L9.99999999,17 C9.44999999,17 8.99999999,16.55 8.99999999,16 C8.99999999,15.45 9.44999999,15 9.99999999,15 L18,15 C18.55,15 19,15.45 19,16 C19,16.55 18.55,17 18,17 Z',
      id: 'HardwareScannerIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'scanner',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HardwareScannerIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HardwareScannerIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#HardwareScannerIcon-path-1',
        },
      ],
    },
  ],
};

export const HardwareScannerIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
