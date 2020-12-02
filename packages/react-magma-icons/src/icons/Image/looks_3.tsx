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
  title: ['looks_3'],
  paths: [
    {
      d:
        'M19,2.99999996 L5.00999996,2.99999996 C3.90999997,2.99999996 3.00999996,3.89999997 3.00999996,4.99999996 L3.00999996,19 C3.00999996,20.1 3.90999997,21 5.00999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M15.01,10.5 C15.01,11.33 14.34,12 13.51,12 C14.34,12 15.01,12.67 15.01,13.5 L15.01,15 C15.01,16.11 14.11,17 13.01,17 L9.99999999,17 C9.44999999,17 8.99999999,16.55 8.99999999,16 C8.99999999,15.45 9.44999999,15 9.99999999,15 L13.01,15 L13,13 L12,13 C11.45,13 11,12.55 11,12 C11,11.45 11.45,11 12,11 L13,11 L13.01,8.99999998 L9.99999999,8.99999998 C9.44999999,8.99999998 9.00999999,8.54999999 9.00999999,7.99999998 C9.00999999,7.44999998 9.44999999,6.99999998 9.99999999,6.99999998 L13.01,6.99999998 C14.11,6.99999998 15.01,7.89999998 15.01,8.99999998 L15.01,10.5 Z',
      id: 'ImageLooks3Icon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'looks_3',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageLooks3Icon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageLooks3Icon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageLooks3Icon-path-1',
        },
      ],
    },
  ],
};

export const ImageLooks3Icon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
