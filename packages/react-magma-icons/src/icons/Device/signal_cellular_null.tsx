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
  title: ['signal_cellular_null'],
  paths: [
    {
      d:
        'M20,6.82999998 L20,19 C20,19.55 19.55,20 19,20 L6.82999998,20 L20,6.82999998 M20.29,3.70999997 L3.70999997,20.29 C3.07999996,20.92 3.51999996,22 4.40999997,22 L20,22 C21.1,22 22,21.1 22,20 L22,4.40999997 C22,3.51999996 20.92,3.07999996 20.29,3.70999997 Z',
      id: 'DeviceSignalCellularNullIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'signal_cellular_null',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'DeviceSignalCellularNullIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#DeviceSignalCellularNullIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#DeviceSignalCellularNullIcon-path-1',
        },
      ],
    },
  ],
};

export const DeviceSignalCellularNullIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
