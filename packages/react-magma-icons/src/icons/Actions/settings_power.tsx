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
  title: ['settings_power'],
  paths: [
    {
      d:
        'M6.99999998,24 L8.99999998,24 L8.99999998,22 L6.99999998,22 L6.99999998,24 Z M11,24 L13,24 L13,22 L11,22 L11,24 Z M12,1.99999996 C11.45,1.99999996 11,2.44999996 11,2.99999996 L11,11 C11,11.55 11.45,12 12,12 C12.55,12 13,11.55 13,11 L13,2.99999996 C13,2.44999996 12.55,1.99999996 12,1.99999996 Z M15.94,5.05999997 L15.92,5.07999997 C15.51,5.48999997 15.56,6.15999998 16,6.53999998 C17.51,7.87999998 18.33,9.96999999 17.88,12.24 C17.42,14.52 15.59,16.38 13.32,16.86 C9.42999999,17.69 5.99999998,14.74 5.99999998,11 C5.99999998,9.21999999 6.77999998,7.62999998 8.00999998,6.52999998 C8.43999999,6.13999998 8.47999999,5.48999997 8.07999998,5.07999997 L8.05999998,5.05999997 C7.68999998,4.68999997 7.09999998,4.66999997 6.69999998,5.01999997 C4.68999997,6.78999998 3.57999996,9.54999999 4.13999997,12.54 C4.72999997,15.69 7.24999998,18.24 10.4,18.85 C15.52,19.84 20,15.95 20,11 C20,8.61999999 18.95,6.47999998 17.29,5.00999997 C16.9,4.66999997 16.31,4.68999997 15.94,5.05999997 Z M15,24 L17,24 L17,22 L15,22 L15,24 Z',
      id: 'ActionsSettingsPowerIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'settings_power',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsSettingsPowerIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsSettingsPowerIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsSettingsPowerIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsSettingsPowerIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
