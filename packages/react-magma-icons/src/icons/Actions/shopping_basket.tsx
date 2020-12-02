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
  title: ['shopping_basket'],
  paths: [
    {
      d:
        'M22,8.99999999 L17.21,8.99999999 L12.82,2.42999996 C12.42,1.83999996 11.55,1.83999996 11.16,2.42999996 L6.76999998,8.99999999 L1.99999995,8.99999999 C1.44999996,8.99999999 0.999999954,9.44999999 0.999999954,9.99999999 C0.999999954,10.09 1.00999995,10.18 1.03999995,10.27 L3.57999996,19.54 C3.80999997,20.38 4.57999997,21 5.49999995,21 L18.5,21 C19.42,21 20.19,20.38 20.43,19.54 L22.97,10.27 L23,9.99999999 C23,9.44999999 22.55,8.99999999 22,8.99999999 Z M11.99,4.78999997 L14.8,8.99999999 L9.17999999,8.99999999 L11.99,4.78999997 Z M12,17 C10.9,17 9.99999999,16.1 9.99999999,15 C9.99999999,13.9 10.9,13 12,13 C13.1,13 14,13.9 14,15 C14,16.1 13.1,17 12,17 Z',
      id: 'ActionsShoppingBasketIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'shopping_basket',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsShoppingBasketIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsShoppingBasketIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsShoppingBasketIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsShoppingBasketIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
