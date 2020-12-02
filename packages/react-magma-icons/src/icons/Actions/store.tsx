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
  title: ['store'],
  paths: [
    {
      d:
        'M4.99999997,5.99999997 L19,5.99999997 C19.55,5.99999997 20,5.54999997 20,4.99999997 C20,4.44999997 19.55,3.99999997 19,3.99999997 L4.99999997,3.99999997 C4.44999997,3.99999997 3.99999997,4.44999997 3.99999997,4.99999997 C3.99999997,5.54999997 4.44999997,5.99999997 4.99999997,5.99999997 Z M20.16,7.79999998 C20.07,7.33999998 19.66,6.99999998 19.18,6.99999998 L4.81999997,6.99999998 C4.33999997,6.99999998 3.92999997,7.33999998 3.83999997,7.79999998 L2.83999996,12.8 C2.71999996,13.42 3.18999996,14 3.81999997,14 L3.99999997,14 L3.99999997,19 C3.99999997,19.55 4.44999997,20 4.99999997,20 L13,20 C13.55,20 14,19.55 14,19 L14,14 L18,14 L18,19 C18,19.55 18.45,20 19,20 C19.55,20 20,19.55 20,19 L20,14 L20.18,14 C20.81,14 21.28,13.42 21.16,12.8 L20.16,7.79999998 Z M12,18 L5.99999998,18 L5.99999998,14 L12,14 L12,18 Z',
      id: 'ActionsStoreIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'store',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsStoreIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsStoreIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsStoreIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsStoreIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
