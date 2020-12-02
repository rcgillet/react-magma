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
  title: ['power_settings_new'],
  paths: [
    {
      d:
        'M12,2.99999996 C11.45,2.99999996 11,3.44999996 11,3.99999996 L11,12 C11,12.55 11.45,13 12,13 C12.55,13 13,12.55 13,12 L13,3.99999996 C13,3.44999996 12.55,2.99999996 12,2.99999996 Z M17.14,5.85999997 C16.75,6.24999998 16.76,6.85999998 17.13,7.24999998 C18.26,8.44999999 18.96,10.05 19,11.82 C19.09,15.65 15.92,18.95 12.09,18.99 C8.17999998,19.05 4.99999997,15.9 4.99999997,12 C4.99999997,10.16 5.70999997,8.48999999 6.86999998,7.23999998 C7.23999998,6.84999998 7.23999998,6.23999998 6.85999998,5.85999997 C6.45999998,5.45999997 5.80999997,5.46999997 5.42999997,5.87999997 C3.97999997,7.41999998 3.06999996,9.46999999 2.99999996,11.74 C2.85999996,16.62 6.82999998,20.84 11.71,20.99 C16.81,21.15 21,17.06 21,11.99 C21,9.61999999 20.08,7.47999998 18.58,5.87999997 C18.2,5.46999997 17.54,5.45999997 17.14,5.85999997 L17.14,5.85999997 Z',
      id: 'ActionsPowerSettingsNewIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'power_settings_new',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsPowerSettingsNewIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsPowerSettingsNewIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsPowerSettingsNewIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsPowerSettingsNewIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
