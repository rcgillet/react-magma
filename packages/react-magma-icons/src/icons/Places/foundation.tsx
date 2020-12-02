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
  title: ['foundation'],
  paths: [
    {
      d:
        'M19,12 L20.7,12 C21.16,12 21.38,11.43 21.03,11.13 L12.67,3.59999997 C12.29,3.25999996 11.71,3.25999996 11.33,3.59999997 L2.96999996,11.13 C2.62999996,11.43 2.83999996,12 3.29999996,12 L4.99999997,12 L4.99999997,15 L3.99999997,15 C3.44999996,15 2.99999996,15.45 2.99999996,16 L2.99999996,16 C2.99999996,16.55 3.44999996,17 3.99999997,17 L4.99999997,17 L4.99999997,19 C4.99999997,19.55 5.44999997,20 5.99999997,20 L5.99999997,20 C6.54999998,20 6.99999998,19.55 6.99999998,19 L6.99999998,17 L11,17 L11,19 C11,19.55 11.45,20 12,20 L12,20 C12.55,20 13,19.55 13,19 L13,17 L17,17 L17,19 C17,19.55 17.45,20 18,20 L18,20 C18.55,20 19,19.55 19,19 L19,17 L20,17 C20.55,17 21,16.55 21,16 L21,16 C21,15.45 20.55,15 20,15 L19,15 L19,12 Z M6.99999998,15 L6.99999998,10.19 L11,6.58999998 L11,15 L6.99999998,15 Z M13,15 L13,6.58999998 L17,10.19 L17,15 L13,15 Z',
      id: 'PlacesFoundationIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'foundation',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'PlacesFoundationIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#PlacesFoundationIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#PlacesFoundationIcon-path-1',
        },
      ],
    },
  ],
};

export const PlacesFoundationIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
