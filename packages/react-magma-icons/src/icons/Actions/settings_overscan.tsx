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
  title: ['settings_overscan'],
  paths: [
    {
      d:
        'M11.62,5.98999997 L9.99999999,7.99999998 L14,7.99999998 L12.4,5.98999997 C12.2,5.73999997 11.82,5.73999997 11.62,5.98999997 L11.62,5.98999997 Z M18,9.99999999 L18,14 L20.01,12.4 C20.26,12.2 20.26,11.82 20.01,11.62 L18,9.99999999 Z M5.99999998,9.99999999 L3.98999997,11.62 C3.73999997,11.82 3.73999997,12.2 3.98999997,12.4 L5.99999998,14 L5.99999998,9.99999999 Z M14,16 L9.99999999,16 L11.62,18.01 C11.82,18.26 12.2,18.26 12.4,18.01 L14,16 Z M21,2.99999996 L2.99999995,2.99999996 C1.89999996,2.99999996 0.999999954,3.89999997 0.999999954,4.99999996 L0.999999954,19 C0.999999954,20.1 1.89999996,21 2.99999995,21 L21,21 C22.1,21 23,20.1 23,19 L23,4.99999996 C23,3.89999997 22.1,2.99999996 21,2.99999996 Z M20,19.01 L3.99999996,19.01 C3.44999996,19.01 2.99999996,18.56 2.99999996,18.01 L2.99999996,5.98999997 C2.99999996,5.43999997 3.44999996,4.98999997 3.99999996,4.98999997 L20,4.98999997 C20.55,4.98999997 21,5.43999997 21,5.98999997 L21,18.01 C21,18.56 20.55,19.01 20,19.01 L20,19.01 Z',
      id: 'ActionsSettingsOverscanIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'settings_overscan',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsSettingsOverscanIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsSettingsOverscanIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsSettingsOverscanIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsSettingsOverscanIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
