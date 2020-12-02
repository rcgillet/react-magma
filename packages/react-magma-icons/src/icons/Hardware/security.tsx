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
  title: ['security'],
  paths: [
    {
      d:
        'M11.19,1.35999996 L4.18999997,4.46999997 C3.46999996,4.78999997 2.99999996,5.50999997 2.99999996,6.29999998 L2.99999996,11 C2.99999996,16.55 6.83999998,21.74 12,23 C17.16,21.74 21,16.55 21,11 L21,6.29999998 C21,5.50999997 20.53,4.78999997 19.81,4.46999997 L12.81,1.35999996 C12.3,1.12999995 11.7,1.12999995 11.19,1.35999996 Z M12,11.99 L19,11.99 C18.47,16.11 15.72,19.78 12,20.93 L12,12 L4.99999997,12 L4.99999997,6.29999998 L12,3.18999996 L12,11.99 Z',
      id: 'HardwareSecurityIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'security',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HardwareSecurityIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HardwareSecurityIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#HardwareSecurityIcon-path-1',
        },
      ],
    },
  ],
};

export const HardwareSecurityIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
