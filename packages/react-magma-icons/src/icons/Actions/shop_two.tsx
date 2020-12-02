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
  title: ['shop_two'],
  paths: [
    {
      d:
        'M1.99999995,8.99999999 C1.44999996,8.99999999 0.999999954,9.44999999 0.999999954,9.99999999 L0.999999954,20 C0.999999954,21.1 1.89999996,22 2.99999995,22 L17,22 C18.11,22 19,21.11 19,20 L3.99999995,20 C3.44999996,20 2.99999995,19.55 2.99999995,19 L2.99999995,9.99999999 C2.99999995,9.44999999 2.54999996,8.99999999 1.99999995,8.99999999 Z M18,4.99999995 L18,2.99999995 C18,1.89999996 17.1,0.999999954 16,0.999999954 L12,0.999999954 C10.9,0.999999954 9.99999997,1.89999996 9.99999997,2.99999995 L9.99999997,4.99999995 L6.99999997,4.99999995 C5.89999997,4.99999995 4.99999997,5.89999997 4.99999997,6.99999995 L4.99999997,16 C4.99999997,17.1 5.89999997,18 6.99999997,18 L21,18 C22.1,18 23,17.1 23,16 L23,6.99999995 C23,5.89999997 22.1,4.99999995 21,4.99999995 L18,4.99999995 Z M12,2.99999996 L16,2.99999996 L16,4.99999996 L12,4.99999996 L12,2.99999996 Z M12,14.02 L12,8.83999999 C12,8.45999999 12.41,8.21999998 12.74,8.39999998 L16.81,10.62 C17.13,10.8 17.16,11.25 16.86,11.46 L12.79,14.42 C12.46,14.66 12,14.43 12,14.02 L12,14.02 Z',
      id: 'ActionsShopTwoIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'shop_two',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsShopTwoIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsShopTwoIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsShopTwoIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsShopTwoIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
