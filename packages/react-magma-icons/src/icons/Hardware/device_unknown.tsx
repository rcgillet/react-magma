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
  title: ['device_unknown'],
  paths: [
    {
      d:
        'M17,0.999999954 L6.99999997,0.999999954 C5.89999997,0.999999954 4.99999997,1.89999996 4.99999997,2.99999995 L4.99999997,21 C4.99999997,22.1 5.89999997,23 6.99999997,23 L17,23 C18.1,23 19,22.1 19,21 L19,2.99999995 C19,1.89999996 18.1,0.999999954 17,0.999999954 Z M17,19 L6.99999998,19 L6.99999998,4.99999997 L17,4.99999997 L17,19 Z M11,16 L13,16 L13,18 L11,18 L11,16 Z M9.51999999,10.19 L9.64999999,10.19 C9.97999999,10.19 10.24,9.95999999 10.35,9.64999999 C10.59,8.95999999 11.26,8.43999999 12.01,8.43999999 C12.94,8.43999999 13.76,9.25999999 13.76,10.19 C13.76,11.51 12.27,11.74 11.53,13.01 L11.52,13.01 C11.44,13.15 11.38,13.3 11.32,13.46 C11.31,13.48 11.3,13.49 11.3,13.51 C11.29,13.53 11.29,13.55 11.29,13.56 C11.19,13.87 11.13,14.22 11.13,14.64 L12.89,14.64 C12.89,14.39 12.93,14.17 13.01,13.97 C13.55,12.5 15.78,12.11 15.49,9.78999999 C15.3,8.23999998 14.06,6.94999998 12.51,6.74999998 C10.74,6.51999998 9.21999999,7.52999998 8.69999999,9.04999999 C8.49999999,9.60999999 8.92999999,10.19 9.51999999,10.19 L9.51999999,10.19 Z',
      id: 'HardwareDeviceUnknownIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'device_unknown',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HardwareDeviceUnknownIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HardwareDeviceUnknownIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#HardwareDeviceUnknownIcon-path-1',
        },
      ],
    },
  ],
};

export const HardwareDeviceUnknownIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
