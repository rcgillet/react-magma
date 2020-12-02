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
  title: ['settings_input_antenna'],
  paths: [
    {
      d:
        'M12,4.99999997 C8.51999999,4.99999997 5.62999997,7.53999998 5.08999997,10.87 C4.98999997,11.46 5.47999997,12 6.08999998,12 C6.57999998,12 6.98999998,11.64 7.06999998,11.15 C7.47999998,8.78999999 9.52999999,6.99999997 12,6.99999997 C14.47,6.99999997 16.52,8.78999999 16.93,11.15 C17.01,11.64 17.42,12 17.91,12 C18.52,12 19,11.46 18.9,10.87 C18.37,7.53999998 15.48,4.99999997 12,4.99999997 Z M13,14.29 C14.07,13.81 14.76,12.63 14.41,11.3 C14.19,10.49 13.54,9.82999999 12.73,9.59999999 C11.04,9.11999999 9.49999999,10.38 9.49999999,12 C9.49999999,13.02 10.12,13.9 11,14.29 L11,17.59 L8.28999998,20.29 C7.89999998,20.68 7.89999998,21.31 8.28999998,21.7 C8.67999999,22.09 9.30999999,22.09 9.69999999,21.7 L12,19.4 L14.3,21.7 C14.69,22.09 15.32,22.09 15.71,21.7 C16.1,21.31 16.1,20.68 15.71,20.29 L13,17.59 L13,14.29 Z M12,0.999999954 C6.29999998,0.999999954 1.60999996,5.33999997 1.04999995,10.9 C0.999999954,11.49 1.45999996,12 2.04999996,12 C2.55999996,12 2.98999996,11.62 3.03999996,11.12 C3.47999996,6.55999998 7.32999998,2.99999995 12,2.99999995 C16.67,2.99999995 20.52,6.55999998 20.96,11.12 C21.01,11.62 21.44,12 21.95,12 C22.54,12 23.01,11.49 22.95,10.9 C22.39,5.33999997 17.7,0.999999954 12,0.999999954 Z',
      id: 'ActionsSettingsInputAntennaIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'settings_input_antenna',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsSettingsInputAntennaIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsSettingsInputAntennaIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsSettingsInputAntennaIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsSettingsInputAntennaIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
