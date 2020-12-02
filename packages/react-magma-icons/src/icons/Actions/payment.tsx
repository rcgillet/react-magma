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
  title: ['payment'],
  paths: [
    {
      d:
        'M20,3.99999997 L3.99999996,3.99999997 C2.88999996,3.99999997 2.00999996,4.88999997 2.00999996,5.99999997 L1.99999996,18 C1.99999996,19.11 2.88999996,20 3.99999996,20 L20,20 C21.11,20 22,19.11 22,18 L22,5.99999997 C22,4.88999997 21.11,3.99999997 20,3.99999997 Z M19,18 L4.99999997,18 C4.44999997,18 3.99999997,17.55 3.99999997,17 L3.99999997,12 L20,12 L20,17 C20,17.55 19.55,18 19,18 Z M20,7.99999997 L3.99999997,7.99999997 L3.99999997,6.99999997 C3.99999997,6.44999998 4.44999997,5.99999997 4.99999997,5.99999997 L19,5.99999997 C19.55,5.99999997 20,6.44999998 20,6.99999997 L20,7.99999997 Z',
      id: 'ActionsPaymentIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'payment',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsPaymentIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsPaymentIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsPaymentIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsPaymentIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
