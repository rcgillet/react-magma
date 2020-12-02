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
  title: ['phonelink'],
  paths: [
    {
      d:
        'M3.99999995,6.99999997 C3.99999995,6.44999998 4.44999997,5.99999997 4.99999995,5.99999997 L20.9999999,5.99999997 C21.55,5.99999997 21.9999999,5.54999997 21.9999999,4.99999997 C21.9999999,4.44999997 21.55,3.99999997 20.9999999,3.99999997 L3.99999995,3.99999997 C2.89999996,3.99999997 1.99999995,4.89999997 1.99999995,5.99999997 L1.99999995,17 L1.49999995,17 C0.669999953,17 -5.00000006e-08,17.67 -5.00000006e-08,18.5 C-5.00000006e-08,19.33 0.669999953,20 1.49999995,20 L12.4999999,20 C13.33,20 13.9999999,19.33 13.9999999,18.5 C13.9999999,17.67 13.33,17 12.4999999,17 L3.99999995,17 L3.99999995,6.99999997 Z M23,7.99999998 L17,7.99999998 C16.45,7.99999998 16,8.44999999 16,8.99999998 L16,19 C16,19.55 16.45,20 17,20 L23,20 C23.55,20 24,19.55 24,19 L24,8.99999998 C24,8.44999999 23.55,7.99999998 23,7.99999998 Z M22,17 L18,17 L18,9.99999999 L22,9.99999999 L22,17 Z',
      id: 'HardwarePhonelinkIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'phonelink',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HardwarePhonelinkIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HardwarePhonelinkIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#HardwarePhonelinkIcon-path-1',
        },
      ],
    },
  ],
};

export const HardwarePhonelinkIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
