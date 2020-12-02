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
  title: ['settings_system_daydream'],
  paths: [
    {
      d:
        'M8.99999997,16 L15.5,16 C16.88,16 18,14.88 18,13.5 C18,12.12 16.88,11 15.5,11 L15.45,11 C15.21,9.30999999 13.76,7.99999998 12,7.99999998 C10.6,7.99999998 9.39999999,8.82999999 8.83999999,10.02 L8.67999999,10.02 C7.16999998,10.18 5.99999997,11.45 5.99999997,13 C5.99999997,14.66 7.33999998,16 8.99999997,16 Z M21,2.99999996 L2.99999995,2.99999996 C1.89999996,2.99999996 0.999999954,3.89999997 0.999999954,4.99999996 L0.999999954,19 C0.999999954,20.1 1.89999996,21 2.99999995,21 L21,21 C22.1,21 23,20.1 23,19 L23,4.99999996 C23,3.89999997 22.1,2.99999996 21,2.99999996 Z M20,19.01 L3.99999996,19.01 C3.44999996,19.01 2.99999996,18.56 2.99999996,18.01 L2.99999996,5.98999997 C2.99999996,5.43999997 3.44999996,4.98999997 3.99999996,4.98999997 L20,4.98999997 C20.55,4.98999997 21,5.43999997 21,5.98999997 L21,18.01 C21,18.56 20.55,19.01 20,19.01 L20,19.01 Z',
      id: 'DeviceSettingsSystemDaydreamIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'settings_system_daydream',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'DeviceSettingsSystemDaydreamIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#DeviceSettingsSystemDaydreamIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#DeviceSettingsSystemDaydreamIcon-path-1',
        },
      ],
    },
  ],
};

export const DeviceSettingsSystemDaydreamIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
