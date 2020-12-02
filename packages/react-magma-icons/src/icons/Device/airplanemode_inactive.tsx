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
  title: ['airplanemode_inactive'],
  paths: [
    {
      d:
        'M22,14.6 C22,15.3 21.33,15.8 20.66,15.61 L17.51,14.68 L10.5,7.66999998 L10.5,3.49999996 C10.5,2.66999996 11.17,1.99999996 12,1.99999996 C12.83,1.99999996 13.5,2.66999996 13.5,3.49999996 L13.5,8.99999996 L21.48,13.7 C21.8,13.88 22,14.23 22,14.6 Z M13.5,13.5 L9.55999999,9.55999999 L3.50999996,3.50999996 C3.11999996,3.11999996 2.48999996,3.11999996 2.09999996,3.50999996 L2.09999996,3.50999996 C1.70999996,3.89999997 1.70999996,4.52999997 2.09999996,4.91999997 L7.76999998,10.59 L2.51999996,13.7 C2.19999996,13.88 1.99999996,14.23 1.99999996,14.6 C1.99999996,15.3 2.66999996,15.8 3.33999996,15.61 L10.5,13.51 L10.5,19 L8.23999998,20.35 C8.08999998,20.44 7.99999998,20.61 7.99999998,20.78 L7.99999998,21.28 L7.99999998,21.28 L7.99999998,21.36 C7.99999998,21.69 8.30999998,21.93 8.61999999,21.85 L11.54,21.12 L12,21 L12.38,21.09 C12.38,21.09 12.38,21.09 12.38,21.09 L12.8,21.2 L14.7,21.68 L14.7,21.68 L15.37,21.85 C15.69,21.93 15.99,21.69 15.99,21.36 L15.99,20.99 C15.99,20.99 15.99,20.99 15.99,20.99 L15.99,20.78 C15.99,20.6 15.9,20.44 15.75,20.35 L13.5,19 L13.5,16.33 L19.07,21.9 L19.07,21.9 L19.07,21.9 C19.46,22.29 20.09,22.29 20.48,21.9 C20.87,21.51 20.87,20.88 20.48,20.49 L13.5,13.5 Z',
      id: 'DeviceAirplanemodeInactiveIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'airplanemode_inactive',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'DeviceAirplanemodeInactiveIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#DeviceAirplanemodeInactiveIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#DeviceAirplanemodeInactiveIcon-path-1',
        },
      ],
    },
  ],
};

export const DeviceAirplanemodeInactiveIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
