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
  title: ['settings_bluetooth'],
  paths: [
    {
      d:
        'M11,22 L13,22 L13,24 L11,24 L11,22 Z M6.99999998,22 L8.99999998,22 L8.99999998,24 L6.99999998,24 L6.99999998,22 Z M15,22 L17,22 L17,24 L15,24 L15,22 Z M13.41,9.99999999 L17.03,6.37999998 C17.22,6.18999998 17.32,5.93999997 17.32,5.66999997 C17.32,5.39999997 17.21,5.14999997 17.03,4.95999997 L12.7,0.649999953 C12.41,0.359999951 11.98,0.279999951 11.61,0.429999952 C11.24,0.579999952 11,0.949999954 11,1.34999996 L11,7.57999998 L7.13999998,3.72999997 C6.74999998,3.33999996 6.11999998,3.33999996 5.72999997,3.72999997 C5.33999997,4.11999997 5.33999997,4.74999997 5.72999997,5.13999997 L10.58,9.99999999 L5.72999997,14.85 C5.33999997,15.24 5.33999997,15.87 5.72999997,16.26 C6.11999998,16.65 6.74999998,16.65 7.13999998,16.26 L11,12.41 L11,18.64 C11,19.04 11.24,19.41 11.62,19.56 C11.74,19.61 11.87,19.64 12,19.64 C12.26,19.64 12.52,19.54 12.71,19.35 L17.03,15.03 C17.22,14.84 17.32,14.59 17.32,14.32 C17.32,14.05 17.21,13.8 17.03,13.61 L13.41,9.99999999 Z M13,3.76999997 L14.91,5.67999997 L13,7.57999998 L13,3.76999997 Z M13,16.23 L13,12.41 L14.91,14.32 L13,16.23 Z',
      id: 'ActionsSettingsBluetoothIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'settings_bluetooth',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsSettingsBluetoothIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsSettingsBluetoothIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsSettingsBluetoothIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsSettingsBluetoothIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
