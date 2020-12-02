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
  title: ['shop'],
  paths: [
    {
      d:
        'M16,5.99999996 L16,3.99999996 C16,2.89999996 15.1,1.99999996 14,1.99999996 L9.99999996,1.99999996 C8.89999999,1.99999996 7.99999996,2.89999996 7.99999996,3.99999996 L7.99999996,5.99999996 L3.99999996,5.99999996 C2.89999996,5.99999996 1.99999996,6.89999998 1.99999996,7.99999996 L1.99999996,19 C1.99999996,20.1 2.89999996,21 3.99999996,21 L20,21 C21.1,21 22,20.1 22,19 L22,7.99999996 C22,6.89999998 21.1,5.99999996 20,5.99999996 L16,5.99999996 Z M9.99999999,3.99999997 L14,3.99999997 L14,5.99999997 L9.99999999,5.99999997 L9.99999999,3.99999997 Z M8.99999999,17.07 L8.99999999,9.82999999 C8.99999999,9.44999999 9.39999999,9.20999999 9.73999999,9.38999999 L15.77,12.6 C16.1,12.78 16.13,13.25 15.81,13.46 L9.77999999,17.48 C9.44999999,17.7 8.99999999,17.47 8.99999999,17.07 L8.99999999,17.07 Z',
      id: 'ActionsShopIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'shop',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsShopIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsShopIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsShopIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsShopIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
