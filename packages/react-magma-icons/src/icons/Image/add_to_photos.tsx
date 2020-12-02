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
  title: ['add_to_photos'],
  paths: [
    {
      d:
        'M2.99999996,5.99999998 C2.44999996,5.99999998 1.99999996,6.44999998 1.99999996,6.99999998 L1.99999996,20 C1.99999996,21.1 2.89999996,22 3.99999996,22 L17,22 C17.55,22 18,21.55 18,21 C18,20.45 17.55,20 17,20 L4.99999996,20 C4.44999997,20 3.99999996,19.55 3.99999996,19 L3.99999996,6.99999998 C3.99999996,6.44999998 3.54999996,5.99999998 2.99999996,5.99999998 Z M20,1.99999996 L7.99999997,1.99999996 C6.89999998,1.99999996 5.99999997,2.89999996 5.99999997,3.99999996 L5.99999997,16 C5.99999997,17.1 6.89999998,18 7.99999997,18 L20,18 C21.1,18 22,17.1 22,16 L22,3.99999996 C22,2.89999996 21.1,1.99999996 20,1.99999996 Z M18,11 L15,11 L15,14 C15,14.55 14.55,15 14,15 C13.45,15 13,14.55 13,14 L13,11 L9.99999999,11 C9.44999999,11 8.99999999,10.55 8.99999999,9.99999997 C8.99999999,9.44999999 9.44999999,8.99999997 9.99999999,8.99999997 L13,8.99999997 L13,5.99999997 C13,5.44999997 13.45,4.99999997 14,4.99999997 C14.55,4.99999997 15,5.44999997 15,5.99999997 L15,8.99999997 L18,8.99999997 C18.55,8.99999997 19,9.44999999 19,9.99999997 C19,10.55 18.55,11 18,11 Z',
      id: 'ImageAddToPhotosIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'add_to_photos',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageAddToPhotosIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageAddToPhotosIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageAddToPhotosIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageAddToPhotosIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
