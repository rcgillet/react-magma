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
  title: ['tv'],
  paths: [
    {
      d:
        'M21,2.99999996 L2.99999995,2.99999996 C1.89999996,2.99999996 0.999999954,3.89999997 0.999999954,4.99999996 L0.999999954,17 C0.999999954,18.1 1.89999996,19 2.99999995,19 L7.99999995,19 L7.99999995,20 C7.99999995,20.55 8.44999999,21 8.99999995,21 L15,21 C15.55,21 16,20.55 16,20 L16,19 L21,19 C22.1,19 22.99,18.1 22.99,17 L23,4.99999996 C23,3.89999997 22.1,2.99999996 21,2.99999996 Z M20,17 L3.99999996,17 C3.44999996,17 2.99999996,16.55 2.99999996,16 L2.99999996,5.99999997 C2.99999996,5.44999997 3.44999996,4.99999997 3.99999996,4.99999997 L20,4.99999997 C20.55,4.99999997 21,5.44999997 21,5.99999997 L21,16 C21,16.55 20.55,17 20,17 Z',
      id: 'HardwareTvIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'tv',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HardwareTvIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HardwareTvIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#HardwareTvIcon-path-1',
        },
      ],
    },
  ],
};

export const HardwareTvIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
