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
  title: ['keyboard'],
  paths: [
    {
      d:
        'M20,4.99999997 L3.99999996,4.99999997 C2.89999996,4.99999997 2.00999996,5.89999997 2.00999996,6.99999997 L1.99999996,17 C1.99999996,18.1 2.89999996,19 3.99999996,19 L20,19 C21.1,19 22,18.1 22,17 L22,6.99999997 C22,5.89999997 21.1,4.99999997 20,4.99999997 Z M11,7.99999998 L13,7.99999998 L13,9.99999998 L11,9.99999998 L11,7.99999998 Z M11,11 L13,11 L13,13 L11,13 L11,11 Z M7.99999998,7.99999998 L9.99999998,7.99999998 L9.99999998,9.99999998 L7.99999998,9.99999998 L7.99999998,7.99999998 Z M7.99999998,11 L9.99999998,11 L9.99999998,13 L7.99999998,13 L7.99999998,11 Z M6.99999997,13 L4.99999997,13 L4.99999997,11 L6.99999997,11 L6.99999997,13 Z M6.99999997,9.99999998 L4.99999997,9.99999998 L4.99999997,7.99999998 L6.99999997,7.99999998 L6.99999997,9.99999998 Z M15,17 L8.99999998,17 C8.44999999,17 7.99999998,16.55 7.99999998,16 C7.99999998,15.45 8.44999999,15 8.99999998,15 L15,15 C15.55,15 16,15.45 16,16 C16,16.55 15.55,17 15,17 Z M16,13 L14,13 L14,11 L16,11 L16,13 Z M16,9.99999998 L14,9.99999998 L14,7.99999998 L16,7.99999998 L16,9.99999998 Z M19,13 L17,13 L17,11 L19,11 L19,13 Z M19,9.99999998 L17,9.99999998 L17,7.99999998 L19,7.99999998 L19,9.99999998 Z',
      id: 'HardwareKeyboardIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'keyboard',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HardwareKeyboardIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HardwareKeyboardIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#HardwareKeyboardIcon-path-1',
        },
      ],
    },
  ],
};

export const HardwareKeyboardIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
