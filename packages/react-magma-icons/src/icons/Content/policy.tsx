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
  title: ['policy'],
  paths: [
    {
      d:
        'M11.19,1.35999996 C11.7,1.12999995 12.29,1.12999995 12.81,1.35999996 L12.81,1.35999996 L19.81,4.46999997 C20.53,4.78999997 21,5.50999997 21,6.29999998 L21,6.29999998 L21,11 C21,13.38 20.29,15.69 19.08,17.65 L19.08,17.65 L16.18,14.75 C17.46,12.81 17.25,10.17 15.54,8.45999999 C13.59,6.50999998 10.42,6.50999998 8.46999999,8.45999999 C6.51999998,10.41 6.51999998,13.58 8.46999999,15.53 C10.18,17.24 12.82,17.46 14.76,16.17 L14.76,16.17 L17.88,19.29 C16.33,21.1 14.3,22.44 12,23 C6.83999998,21.74 2.99999996,16.55 2.99999996,11 L2.99999996,11 L2.99999996,6.29999998 C2.99999996,5.50999997 3.46999996,4.78999997 4.18999997,4.46999997 L4.18999997,4.46999997 Z M12,8.99999999 C13.6568543,8.99999999 15,10.3431457 15,12 C15,13.6568543 13.6568543,15 12,15 C10.3431457,15 8.99999999,13.6568543 8.99999999,12 C8.99999999,10.3431457 10.3431457,8.99999999 12,8.99999999 Z',
      id: 'ContentPolicyIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'policy',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentPolicyIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentPolicyIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentPolicyIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentPolicyIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
