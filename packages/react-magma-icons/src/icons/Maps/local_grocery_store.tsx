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
  title: ['local_grocery_store'],
  paths: [
    {
      d:
        'M6.99999998,18 C5.89999997,18 5.00999997,18.9 5.00999997,20 C5.00999997,21.1 5.89999997,22 6.99999998,22 C8.09999998,22 8.99999999,21.1 8.99999999,20 C8.99999999,18.9 8.09999998,18 6.99999998,18 Z M1.99999995,3.99999996 L2.99999995,3.99999996 L6.59999998,11.59 L5.24999997,14.03 C4.51999997,15.37 5.47999997,17 6.99999995,17 L18,17 C18.55,17 19,16.55 19,16 C19,15.45 18.55,15 18,15 L6.99999995,15 L8.09999998,13 L15.55,13 C16.3,13 16.96,12.59 17.3,11.97 L20.88,5.47999997 C21.25,4.81999997 20.77,3.99999996 20.01,3.99999996 L5.20999997,3.99999996 L4.53999997,2.56999996 C4.37999997,2.21999996 4.01999997,1.99999996 3.63999997,1.99999996 L1.99999995,1.99999996 C1.44999996,1.99999996 0.999999954,2.44999996 0.999999954,2.99999996 C0.999999954,3.54999996 1.44999996,3.99999996 1.99999995,3.99999996 Z M17,18 C15.9,18 15.01,18.9 15.01,20 C15.01,21.1 15.9,22 17,22 C18.1,22 19,21.1 19,20 C19,18.9 18.1,18 17,18 Z',
      id: 'MapsLocalGroceryStoreIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'local_grocery_store',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsLocalGroceryStoreIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsLocalGroceryStoreIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsLocalGroceryStoreIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsLocalGroceryStoreIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
