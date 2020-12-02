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
  title: ['kitchen'],
  paths: [
    {
      d:
        'M18,2.00999996 L5.99999997,1.99999996 C4.89999997,1.99999996 3.99999997,2.88999996 3.99999997,3.99999996 L3.99999997,20 C3.99999997,21.1 4.89999997,22 5.99999997,22 L18,22 C19.1,22 20,21.1 20,20 L20,3.99999996 C20,2.88999996 19.1,2.00999996 18,2.00999996 Z M17,20 L6.99999997,20 C6.44999998,20 5.99999997,19.55 5.99999997,19 L5.99999997,11.98 C5.99999997,11.43 6.44999998,10.98 6.99999997,10.98 L17,10.98 C17.55,10.98 18,11.43 18,11.98 L18,19 C18,19.55 17.55,20 17,20 Z M17,8.99999997 L6.99999997,8.99999997 C6.44999998,8.99999997 5.99999997,8.54999999 5.99999997,7.99999997 L5.99999997,4.99999997 C5.99999997,4.44999997 6.44999998,3.99999997 6.99999997,3.99999997 L17,3.99999997 C17.55,3.99999997 18,4.44999997 18,4.99999997 L18,7.99999997 C18,8.54999999 17.55,8.99999997 17,8.99999997 Z M8.99999998,4.99999997 C9.54999999,4.99999997 9.99999998,5.44999997 9.99999998,5.99999997 L9.99999998,6.99999997 C9.99999998,7.54999998 9.54999999,7.99999997 8.99999998,7.99999997 C8.44999999,7.99999997 7.99999998,7.54999998 7.99999998,6.99999997 L7.99999998,5.99999997 C7.99999998,5.44999997 8.44999999,4.99999997 8.99999998,4.99999997 Z M8.99999998,12 C9.54999999,12 9.99999998,12.45 9.99999998,13 L9.99999998,16 C9.99999998,16.55 9.54999999,17 8.99999998,17 C8.44999999,17 7.99999998,16.55 7.99999998,16 L7.99999998,13 C7.99999998,12.45 8.44999999,12 8.99999998,12 Z',
      id: 'PlacesKitchenIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'kitchen',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'PlacesKitchenIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#PlacesKitchenIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#PlacesKitchenIcon-path-1',
        },
      ],
    },
  ],
};

export const PlacesKitchenIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
