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
  title: ['laptop_windows'],
  paths: [
    {
      d:
        'M19.9999999,18 L19.9999999,17 C21.1,17 21.99,16.1 21.99,15 L21.9999999,4.99999996 C21.9999999,3.89999997 21.1,2.99999996 19.9999999,2.99999996 L3.99999995,2.99999996 C2.89999996,2.99999996 1.99999995,3.89999997 1.99999995,4.99999996 L1.99999995,15 C1.99999995,16.1 2.89999996,17 3.99999995,17 L3.99999995,18 L0.99999995,18 C0.449999952,18 -5.00000006e-08,18.45 -5.00000006e-08,19 C-5.00000006e-08,19.55 0.449999952,20 0.99999995,20 L22.9999999,20 C23.55,20 23.9999999,19.55 23.9999999,19 C23.9999999,18.45 23.55,18 22.9999999,18 L19.9999999,18 Z M4.99999997,4.99999997 L19,4.99999997 C19.55,4.99999997 20,5.44999997 20,5.99999997 L20,14 C20,14.55 19.55,15 19,15 L4.99999997,15 C4.44999997,15 3.99999997,14.55 3.99999997,14 L3.99999997,5.99999997 C3.99999997,5.44999997 4.44999997,4.99999997 4.99999997,4.99999997 Z',
      id: 'HardwareLaptopWindowsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'laptop_windows',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HardwareLaptopWindowsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HardwareLaptopWindowsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#HardwareLaptopWindowsIcon-path-1',
        },
      ],
    },
  ],
};

export const HardwareLaptopWindowsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
