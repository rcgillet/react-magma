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
  title: ['phone_iphone'],
  paths: [
    {
      d:
        'M15.5,0.999999954 L7.49999997,0.999999954 C6.11999998,0.999999954 4.99999997,2.11999996 4.99999997,3.49999995 L4.99999997,20.5 C4.99999997,21.88 6.11999998,23 7.49999997,23 L15.5,23 C16.88,23 18,21.88 18,20.5 L18,3.49999995 C18,2.11999996 16.88,0.999999954 15.5,0.999999954 Z M11.5,22 C10.67,22 9.99999999,21.33 9.99999999,20.5 C9.99999999,19.67 10.67,19 11.5,19 C12.33,19 13,19.67 13,20.5 C13,21.33 12.33,22 11.5,22 Z M16,18 L6.99999998,18 L6.99999998,3.99999997 L16,3.99999997 L16,18 Z',
      id: 'HardwarePhoneIphoneIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'phone_iphone',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HardwarePhoneIphoneIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HardwarePhoneIphoneIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#HardwarePhoneIphoneIcon-path-1',
        },
      ],
    },
  ],
};

export const HardwarePhoneIphoneIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
