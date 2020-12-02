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
  title: ['wifi_protected_setup'],
  paths: [
    {
      d:
        'M6.84999998,6.46999998 C7.20999998,6.09999998 7.80999998,6.45999998 7.68999998,6.95999998 C7.52999998,7.56999998 7.44999997,8.21999998 7.44999997,8.87999999 C7.44999997,11.52 8.72999999,13.84 10.7,15.3 L10.7,15.3 L12.15,13.86 C12.46,13.54 13,13.77 12.99,14.21 L12.99,14.21 L12.99,20.5 C12.99,20.78 12.77,21 12.49,21 L12.49,21 L6.19999998,21 C5.75999997,21 5.52999997,20.47 5.84999997,20.15 L5.84999997,20.15 L7.28999998,18.71 C5.54999997,17.15 4.44999997,14.9 4.44999997,12.38 C4.44999997,10.08 5.36999997,7.99999998 6.84999998,6.46999998 Z M17.79,3.00999996 C18.23,3.00999996 18.46,3.53999996 18.14,3.85999997 L18.14,3.85999997 L16.7,5.29999997 C18.44,6.85999998 19.55,9.10999999 19.55,11.62 C19.55,13.92 18.63,16 17.15,17.53 C16.79,17.9 16.19,17.54 16.31,17.04 C16.47,16.43 16.55,15.78 16.55,15.12 C16.55,12.48 15.27,10.16 13.3,8.69999999 L13.3,8.69999999 L11.85,10.15 C11.54,10.47 11,10.25 11,9.79999999 L11,9.79999999 L11,3.50999996 C11,3.22999996 11.22,3.00999996 11.5,3.00999996 L11.5,3.00999996 Z',
      id: 'ActionsWifiProtectedSetupIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'wifi_protected_setup',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsWifiProtectedSetupIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsWifiProtectedSetupIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsWifiProtectedSetupIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsWifiProtectedSetupIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
