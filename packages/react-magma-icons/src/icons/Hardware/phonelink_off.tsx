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
  title: ['phonelink_off'],
  paths: [
    {
      d:
        'M24,19 L24,8.99999998 C24,8.44999999 23.55,7.99999998 23,7.99999998 L17,7.99999998 C16.45,7.99999998 16,8.44999999 16,8.99999998 L16,12.61 L18,14.61 L18,9.99999998 L22,9.99999998 L22,17 L20.39,17 L23.32,19.93 C23.71,19.8 24,19.44 24,19 Z M21,5.99999997 C21.55,5.99999997 22,5.54999997 22,4.99999997 C22,4.44999997 21.55,3.99999997 21,3.99999997 L7.38999998,3.99999997 L9.38999998,5.99999997 L21,5.99999997 Z M1.35999996,2.20999996 C0.969999954,2.59999996 0.969999954,3.22999996 1.35999996,3.61999997 L2.46999996,4.72999997 C2.17999996,5.07999997 1.99999995,5.51999997 1.99999995,5.99999997 L1.99999995,17 L1.49999995,17 C0.669999953,17 -5.00000006e-08,17.67 -5.00000006e-08,18.5 C-5.00000006e-08,19.33 0.669999953,20 1.49999995,20 L17.73,20 L19.37,21.64 C19.76,22.03 20.39,22.03 20.78,21.64 C21.17,21.25 21.17,20.62 20.78,20.23 L2.76999996,2.20999996 C2.37999996,1.81999996 1.74999996,1.81999996 1.35999996,2.20999996 Z M3.99999997,17 L3.99999997,6.26999998 L14.73,17 L3.99999997,17 Z',
      id: 'HardwarePhonelinkOffIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'phonelink_off',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HardwarePhonelinkOffIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HardwarePhonelinkOffIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#HardwarePhonelinkOffIcon-path-1',
        },
      ],
    },
  ],
};

export const HardwarePhonelinkOffIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
