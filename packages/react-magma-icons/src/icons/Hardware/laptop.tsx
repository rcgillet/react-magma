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
  title: ['laptop'],
  paths: [
    {
      d:
        'M19.9999999,18 C21.1,18 21.9999999,17.1 21.9999999,16 L21.9999999,5.99999997 C21.9999999,4.89999997 21.1,3.99999997 19.9999999,3.99999997 L3.99999995,3.99999997 C2.89999996,3.99999997 1.99999995,4.89999997 1.99999995,5.99999997 L1.99999995,16 C1.99999995,17.1 2.89999996,18 3.99999995,18 L0.99999995,18 C0.449999952,18 -5.00000006e-08,18.45 -5.00000006e-08,19 C-5.00000006e-08,19.55 0.449999952,20 0.99999995,20 L22.9999999,20 C23.55,20 23.9999999,19.55 23.9999999,19 C23.9999999,18.45 23.55,18 22.9999999,18 L19.9999999,18 Z M4.99999997,5.99999997 L19,5.99999997 C19.55,5.99999997 20,6.44999998 20,6.99999997 L20,15 C20,15.55 19.55,16 19,16 L4.99999997,16 C4.44999997,16 3.99999997,15.55 3.99999997,15 L3.99999997,6.99999997 C3.99999997,6.44999998 4.44999997,5.99999997 4.99999997,5.99999997 Z',
      id: 'HardwareLaptopIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'laptop',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HardwareLaptopIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HardwareLaptopIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#HardwareLaptopIcon-path-1',
        },
      ],
    },
  ],
};

export const HardwareLaptopIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
