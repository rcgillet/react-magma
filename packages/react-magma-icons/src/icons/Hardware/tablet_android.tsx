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
  title: ['tablet_android'],
  paths: [
    {
      d:
        'M18,-5.00000006e-08 L5.99999996,-5.00000006e-08 C4.33999997,-5.00000006e-08 2.99999996,1.33999996 2.99999996,2.99999995 L2.99999996,20.9999999 C2.99999996,22.66 4.33999997,23.9999999 5.99999996,23.9999999 L18,23.9999999 C19.66,23.9999999 21,22.66 21,20.9999999 L21,2.99999995 C21,1.33999996 19.66,-5.00000006e-08 18,-5.00000006e-08 Z M13.5,22 L10.5,22 C10.22,22 9.99999999,21.78 9.99999999,21.5 C9.99999999,21.22 10.22,21 10.5,21 L13.5,21 C13.78,21 14,21.22 14,21.5 C14,21.78 13.78,22 13.5,22 Z M19.25,19 L4.74999997,19 L4.74999997,2.99999996 L19.25,2.99999996 L19.25,19 Z',
      id: 'HardwareTabletAndroidIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'tablet_android',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HardwareTabletAndroidIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HardwareTabletAndroidIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#HardwareTabletAndroidIcon-path-1',
        },
      ],
    },
  ],
};

export const HardwareTabletAndroidIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
