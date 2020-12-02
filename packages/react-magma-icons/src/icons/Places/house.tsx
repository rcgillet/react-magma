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
  title: ['house'],
  paths: [
    {
      d:
        'M19,9.29999999 L19,4.99999997 C19,4.44999997 18.55,3.99999997 18,3.99999997 L17,3.99999997 C16.45,3.99999997 16,4.44999997 16,4.99999997 L16,6.59999998 L12.67,3.59999997 C12.29,3.25999996 11.71,3.25999996 11.33,3.59999997 L2.96999996,11.13 C2.62999996,11.43 2.83999996,12 3.29999996,12 L4.99999997,12 L4.99999997,19 C4.99999997,19.55 5.44999997,20 5.99999997,20 L8.99999999,20 C9.54999999,20 9.99999999,19.55 9.99999999,19 L9.99999999,14 L14,14 L14,19 C14,19.55 14.45,20 15,20 L18,20 C18.55,20 19,19.55 19,19 L19,12 L20.7,12 C21.16,12 21.38,11.43 21.03,11.13 L19,9.29999999 Z M9.99999999,9.99999998 C9.99999999,8.89999999 10.9,7.99999998 12,7.99999998 C13.1,7.99999998 14,8.89999999 14,9.99999998 L9.99999999,9.99999998 Z',
      id: 'PlacesHouseIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'house',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'PlacesHouseIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#PlacesHouseIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#PlacesHouseIcon-path-1',
        },
      ],
    },
  ],
};

export const PlacesHouseIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
