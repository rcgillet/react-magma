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
  title: ['add_business'],
  paths: [
    {
      d:
        'M19,15 C19.55,15 20,15.45 20,16 L20,16 L20,18 L22,18 C22.55,18 23,18.45 23,19 C23,19.55 22.55,20 22,20 L22,20 L20,20 L20,22 C20,22.55 19.55,23 19,23 C18.45,23 18,22.55 18,22 L18,22 L18,20 L16,20 C15.45,20 15,19.55 15,19 C15,18.45 15.45,18 16,18 L16,18 L18,18 L18,16 C18,15.45 18.45,15 19,15 Z M16.18,6.99999998 C16.66,6.99999998 17.07,7.33999998 17.16,7.79999998 L17.16,7.79999998 L18.16,12.8 C18.28,13.42 17.81,14 17.18,14 L17.18,14 L17,14 L17,17 L15,17 L15,14 L11,14 L11,19 C11,19.55 10.55,20 9.99999999,20 L9.99999999,20 L2.99999996,20 C2.44999996,20 1.99999996,19.55 1.99999996,19 L1.99999996,19 L1.99999996,14 L1.81999996,14 C1.18999995,14 0.719999953,13.42 0.839999954,12.8 L0.839999954,12.8 L1.83999996,7.79999998 C1.92999996,7.33999998 2.33999996,6.99999998 2.81999996,6.99999998 L2.81999996,6.99999998 Z M8.99999997,14 L3.99999997,14 L3.99999997,18 L8.99999997,18 L8.99999997,14 Z M16,3.99999997 C16.55,3.99999997 17,4.44999997 17,4.99999997 C17,5.54999997 16.55,5.99999997 16,5.99999997 L16,5.99999997 L2.99999996,5.99999997 C2.44999996,5.99999997 1.99999996,5.54999997 1.99999996,4.99999997 C1.99999996,4.44999997 2.44999996,3.99999997 2.99999996,3.99999997 L2.99999996,3.99999997 Z',
      id: 'MapsAddBusinessIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'add_business',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsAddBusinessIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsAddBusinessIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsAddBusinessIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsAddBusinessIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
