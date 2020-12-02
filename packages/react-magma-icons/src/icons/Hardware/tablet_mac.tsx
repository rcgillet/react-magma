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
  title: ['tablet_mac'],
  paths: [
    {
      d:
        'M18.5,-5.00000006e-08 L4.49999996,-5.00000006e-08 C3.11999996,-5.00000006e-08 1.99999996,1.11999995 1.99999996,2.49999995 L1.99999996,21.4999999 C1.99999996,22.88 3.11999996,23.9999999 4.49999996,23.9999999 L18.5,23.9999999 C19.88,23.9999999 21,22.88 21,21.4999999 L21,2.49999995 C21,1.11999995 19.88,-5.00000006e-08 18.5,-5.00000006e-08 Z M11.5,23 C10.67,23 9.99999999,22.33 9.99999999,21.5 C9.99999999,20.67 10.67,20 11.5,20 C12.33,20 13,20.67 13,21.5 C13,22.33 12.33,23 11.5,23 Z M19,19 L3.99999997,19 L3.99999997,2.99999996 L19,2.99999996 L19,19 Z',
      id: 'HardwareTabletMacIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'tablet_mac',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HardwareTabletMacIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HardwareTabletMacIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#HardwareTabletMacIcon-path-1',
        },
      ],
    },
  ],
};

export const HardwareTabletMacIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
