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
  title: ['location_disabled'],
  paths: [
    {
      d:
        'M22,13 C22.55,13 23,12.55 23,12 C23,11.45 22.55,11 22,11 L20.94,11 C20.48,6.82999998 17.17,3.51999996 13,3.05999996 L13,1.99999995 C13,1.44999996 12.55,0.999999954 12,0.999999954 C11.45,0.999999954 11,1.44999996 11,1.99999995 L11,3.05999996 C10.02,3.16999996 9.08999999,3.43999996 8.22999998,3.83999997 L9.75999999,5.36999997 C10.46,5.12999997 11.22,4.99999995 12,4.99999995 C15.87,4.99999995 19,8.12999998 19,12 C19,12.79 18.87,13.54 18.63,14.24 L20.16,15.77 C20.56,14.91 20.83,13.98 20.94,13 L22,13 Z M20.44,18.88 L5.11999997,3.55999996 C4.72999997,3.16999996 4.09999997,3.16999996 3.70999997,3.55999996 C3.31999996,3.94999997 3.31999996,4.57999997 3.70999997,4.96999997 L5.03999997,6.29999998 C3.96999997,7.61999998 3.25999996,9.22999999 3.05999996,11 L1.99999995,11 C1.44999996,11 0.999999954,11.45 0.999999954,12 C0.999999954,12.55 1.44999996,13 1.99999995,13 L3.05999996,13 C3.51999996,17.17 6.82999998,20.48 11,20.94 L11,22 C11,22.55 11.45,23 12,23 C12.55,23 13,22.55 13,22 L13,20.94 C14.77,20.74 16.38,20.03 17.69,18.96 L19.02,20.29 C19.41,20.68 20.04,20.68 20.43,20.29 C20.83,19.9 20.83,19.27 20.44,18.88 L20.44,18.88 Z M12,19 C8.12999998,19 4.99999997,15.87 4.99999997,12 C4.99999997,10.39 5.54999997,8.90999999 6.45999998,7.72999998 L16.27,17.54 C15.09,18.45 13.61,19 12,19 Z',
      id: 'DeviceLocationDisabledIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'location_disabled',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'DeviceLocationDisabledIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#DeviceLocationDisabledIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#DeviceLocationDisabledIcon-path-1',
        },
      ],
    },
  ],
};

export const DeviceLocationDisabledIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
