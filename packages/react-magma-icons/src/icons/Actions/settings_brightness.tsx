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
  title: ['settings_brightness'],
  paths: [
    {
      d:
        'M21,2.99999996 L2.99999995,2.99999996 C1.89999996,2.99999996 0.999999954,3.89999997 0.999999954,4.99999996 L0.999999954,19 C0.999999954,20.1 1.89999996,21 2.99999995,21 L21,21 C22.1,21 23,20.1 23,19 L23,4.99999996 C23,3.89999997 22.1,2.99999996 21,2.99999996 Z M20,19.01 L3.99999996,19.01 C3.44999996,19.01 2.99999996,18.56 2.99999996,18.01 L2.99999996,5.98999997 C2.99999996,5.43999997 3.44999996,4.98999997 3.99999996,4.98999997 L20,4.98999997 C20.55,4.98999997 21,5.43999997 21,5.98999997 L21,18.01 C21,18.56 20.55,19.01 20,19.01 L20,19.01 Z M8.49999999,16 L10.5,16 L11.65,17.15 C11.85,17.35 12.16,17.35 12.36,17.15 L13.5,16 L15.5,16 C15.78,16 16,15.78 16,15.5 L16,13.5 L17.15,12.35 C17.35,12.15 17.35,11.84 17.15,11.64 L16,10.5 L16,8.49999999 C16,8.21999998 15.78,7.99999998 15.5,7.99999998 L13.5,7.99999998 L12.35,6.84999998 C12.15,6.64999998 11.84,6.64999998 11.64,6.84999998 L10.5,7.99999998 L8.49999999,7.99999998 C8.21999998,7.99999998 7.99999998,8.21999998 7.99999998,8.49999999 L7.99999998,10.5 L6.84999998,11.65 C6.64999998,11.85 6.64999998,12.16 6.84999998,12.36 L7.99999998,13.5 L7.99999998,15.5 C7.99999998,15.78 8.21999998,16 8.49999999,16 Z M12,8.99999999 C13.66,8.99999999 15,10.34 15,12 C15,13.66 13.66,15 12,15 L12,8.99999999 Z',
      id: 'ActionsSettingsBrightnessIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'settings_brightness',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsSettingsBrightnessIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsSettingsBrightnessIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsSettingsBrightnessIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsSettingsBrightnessIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
