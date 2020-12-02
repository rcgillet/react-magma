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
  title: ['data_usage'],
  paths: [
    {
      d:
        'M13,3.86999997 L13,3.88999997 C13,4.55999997 13.45,5.11999997 14.08,5.31999997 C16.93,6.20999998 19,8.85999999 19,12 C19,12.52 18.94,13.01 18.83,13.49 C18.69,14.13 18.95,14.79 19.52,15.13 L19.53,15.14 C20.39,15.64 21.51,15.19 21.74,14.23 C21.91,13.51 22,12.76 22,12 C22,7.49999998 19.02,3.67999997 14.92,2.42999996 C13.97,2.13999996 13,2.86999996 13,3.86999997 L13,3.86999997 Z M10.94,18.92 C7.94999998,18.49 5.51999997,16.06 5.07999997,13.08 C4.53999997,9.47999999 6.73999998,6.30999998 9.90999999,5.31999997 C10.55,5.12999997 11,4.55999997 11,3.88999997 L11,3.86999997 C11,2.86999996 10.03,2.13999996 9.06999999,2.42999996 C4.55999997,3.80999997 1.40999996,8.28999998 2.08999996,13.39 C2.67999996,17.77 6.21999998,21.31 10.6,21.9 C13.74,22.32 16.64,21.29 18.73,19.37 C19.47,18.69 19.34,17.48 18.47,16.98 C17.89,16.64 17.17,16.75 16.67,17.2 C15.2,18.54 13.16,19.25 10.94,18.92 Z',
      id: 'DeviceDataUsageIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'data_usage',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'DeviceDataUsageIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#DeviceDataUsageIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#DeviceDataUsageIcon-path-1',
        },
      ],
    },
  ],
};

export const DeviceDataUsageIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
