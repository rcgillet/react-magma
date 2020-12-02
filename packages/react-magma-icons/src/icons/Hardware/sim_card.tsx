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
  title: ['sim_card'],
  paths: [
    {
      d:
        'M19.99,3.99999996 C19.99,2.89999996 19.1,1.99999996 18,1.99999996 L10.83,1.99999996 C10.3,1.99999996 9.78999999,2.20999996 9.40999999,2.58999996 L4.58999997,7.40999998 C4.20999997,7.78999998 3.99999997,8.29999998 3.99999997,8.82999999 L3.99999997,20 C3.99999997,21.1 4.89999997,22 5.99999997,22 L18.01,22 C19.11,22 20,21.1 20,20 L19.99,3.99999996 L19.99,3.99999996 Z M7.99999998,19 C7.44999998,19 6.99999998,18.55 6.99999998,18 C6.99999998,17.45 7.44999998,17 7.99999998,17 C8.54999999,17 8.99999998,17.45 8.99999998,18 C8.99999998,18.55 8.54999999,19 7.99999998,19 Z M16,19 C15.45,19 15,18.55 15,18 C15,17.45 15.45,17 16,17 C16.55,17 17,17.45 17,18 C17,18.55 16.55,19 16,19 Z M7.99999998,15 C7.44999998,15 6.99999998,14.55 6.99999998,14 L6.99999998,12 C6.99999998,11.45 7.44999998,11 7.99999998,11 C8.54999999,11 8.99999998,11.45 8.99999998,12 L8.99999998,14 C8.99999998,14.55 8.54999999,15 7.99999998,15 Z M12,19 C11.45,19 11,18.55 11,18 L11,16 C11,15.45 11.45,15 12,15 C12.55,15 13,15.45 13,16 L13,18 C13,18.55 12.55,19 12,19 Z M12,13 C11.45,13 11,12.55 11,12 C11,11.45 11.45,11 12,11 C12.55,11 13,11.45 13,12 C13,12.55 12.55,13 12,13 Z M16,15 C15.45,15 15,14.55 15,14 L15,12 C15,11.45 15.45,11 16,11 C16.55,11 17,11.45 17,12 L17,14 C17,14.55 16.55,15 16,15 Z',
      id: 'HardwareSimCardIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'sim_card',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HardwareSimCardIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HardwareSimCardIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#HardwareSimCardIcon-path-1',
        },
      ],
    },
  ],
};

export const HardwareSimCardIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
