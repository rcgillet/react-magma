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
  title: ['stop_screen_share'],
  paths: [
    {
      d:
        'M23,18 L21.8,18 L23.59,19.79 C23.83,19.61 24,19.33 24,19 C24,18.45 23.55,18 23,18 Z M3.22999996,2.27999996 C2.83999996,1.88999996 2.19999996,1.88999996 1.80999996,2.27999996 C1.41999996,2.66999996 1.41999996,3.29999996 1.80999996,3.68999997 L2.64999996,4.54999997 C2.64999996,4.54999997 1.98999996,5.11999997 1.98999996,6.01999998 C1.99999995,6.91999998 1.99999995,16 1.99999995,16 L2.00999996,16.01 C2.00999996,17.1 2.88999996,17.99 3.97999997,18 L0.99999995,18 C0.449999952,18 -5.00000858e-08,18.45 -5.00000858e-08,19 C-5.00000858e-08,19.55 0.449999952,20 0.99999995,20 L18.13,20 L20.13,22 C20.52,22.39 21.15,22.39 21.54,22 C21.93,21.61 21.93,20.98 21.54,20.59 L3.22999996,2.27999996 Z M6.99999998,15 C7.30999998,13.52 7.93999998,12.07 9.07999999,10.95 L10.67,12.54 C9.12999999,12.92 7.95999998,13.71 6.99999998,15 Z M13,9.12999999 L13,8.14999998 C13,7.70999998 13.52,7.48999998 13.84,7.77999998 L15,8.86999999 L16.61,10.37 C16.82,10.57 16.82,10.9 16.61,11.1 L15.72,11.93 L21.3,17.51 C21.73,17.14 22,16.61 22,16 L22,5.99999997 C22,4.90999997 21.11,4.01999997 20.02,4.01999997 L7.79999998,4.01999997 L12.94,9.14999999 C12.96,9.13999999 12.98,9.12999999 13,9.12999999 Z',
      id: 'CommunicationStopScreenShareIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'stop_screen_share',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationStopScreenShareIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationStopScreenShareIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationStopScreenShareIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationStopScreenShareIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
