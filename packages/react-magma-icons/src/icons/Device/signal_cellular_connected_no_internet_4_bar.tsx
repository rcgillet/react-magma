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
  title: ['signal_cellular_connected_no_internet_4_bar'],
  paths: [
    {
      d:
        'M21,18 C21.55,18 22,17.55 22,17 L22,11 C22,10.45 21.55,9.99999999 21,9.99999999 C20.45,9.99999999 20,10.45 20,11 L20,17 C20,17.55 20.45,18 21,18 Z M20,22 L22,22 L22,20 L20,20 L20,22 Z M4.40999997,22 L18,22 L18,11 C18,9.33999999 19.34,7.99999998 21,7.99999998 L22,7.99999998 L22,4.40999997 C22,3.51999996 20.92,3.06999996 20.29,3.69999997 L3.70999997,20.29 C3.07999996,20.92 3.51999996,22 4.40999997,22 Z',
      id: 'DeviceSignalCellularConnectedNoInternet4BarIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'signal_cellular_connected_no_internet_4_bar',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'DeviceSignalCellularConnectedNoInternet4BarIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref:
                '#DeviceSignalCellularConnectedNoInternet4BarIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#DeviceSignalCellularConnectedNoInternet4BarIcon-path-1',
        },
      ],
    },
  ],
};

export const DeviceSignalCellularConnectedNoInternet4BarIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
