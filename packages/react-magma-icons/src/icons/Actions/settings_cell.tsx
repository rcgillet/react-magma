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
  title: ['settings_cell'],
  paths: [
    {
      d:
        'M6.99999998,24 L8.99999998,24 L8.99999998,22 L6.99999998,22 L6.99999998,24 Z M11,24 L13,24 L13,22 L11,22 L11,24 Z M15,24 L17,24 L17,22 L15,22 L15,24 Z M16,0.00999995004 L7.99999998,-5.00000894e-08 C6.89999998,-5.00000894e-08 5.99999998,0.899999954 5.99999998,1.99999995 L5.99999998,17.9999999 C5.99999998,19.1 6.89999998,19.9999999 7.99999998,19.9999999 L16,19.9999999 C17.1,19.9999999 18,19.1 18,17.9999999 L18,1.99999995 C18,0.899999954 17.1,0.00999995004 16,0.00999995004 Z M16,16 L7.99999998,16 L7.99999998,3.99999997 L16,3.99999997 L16,16 Z',
      id: 'ActionsSettingsCellIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'settings_cell',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsSettingsCellIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsSettingsCellIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsSettingsCellIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsSettingsCellIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
