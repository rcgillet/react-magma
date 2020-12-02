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
  title: ['photo_size_select_large'],
  paths: [
    {
      d:
        'M21,15 L23,15 L23,17 L21,17 L21,15 Z M21,11 L23,11 L23,13 L21,13 L21,11 Z M23,19 L21,19 L21,21 C22,21 23,20 23,19 Z M13,2.99999996 L15,2.99999996 L15,4.99999996 L13,4.99999996 L13,2.99999996 Z M21,6.99999998 L23,6.99999998 L23,8.99999998 L21,8.99999998 L21,6.99999998 Z M21,2.99999996 L21,4.99999996 L23,4.99999996 C23,3.99999996 22,2.99999996 21,2.99999996 Z M0.999999954,6.99999998 L2.99999995,6.99999998 L2.99999995,8.99999998 L0.999999954,8.99999998 L0.999999954,6.99999998 Z M17,2.99999996 L19,2.99999996 L19,4.99999996 L17,4.99999996 L17,2.99999996 Z M17,19 L19,19 L19,21 L17,21 L17,19 Z M2.99999995,2.99999996 C1.99999995,2.99999996 0.999999954,3.99999996 0.999999954,4.99999996 L2.99999995,4.99999996 L2.99999995,2.99999996 Z M8.99999999,2.99999996 L11,2.99999996 L11,4.99999996 L8.99999999,4.99999996 L8.99999999,2.99999996 Z M4.99999997,2.99999996 L6.99999997,2.99999996 L6.99999997,4.99999996 L4.99999997,4.99999996 L4.99999997,2.99999996 Z M0.999999954,11 L0.999999954,19 C0.999999954,20.1 1.89999996,21 2.99999995,21 L15,21 L15,13 C15,11.9 14.1,11 13,11 L0.999999954,11 Z M3.62999997,18.19 L5.11999997,16.28 C5.31999997,16.03 5.68999997,16.02 5.89999997,16.27 L7.28999998,17.94 L9.38999999,15.24 C9.58999999,14.98 9.98999999,14.98 10.18,15.25 L12.4,18.21 C12.65,18.54 12.41,19.01 12,19.01 L4.01999997,19.01 C3.60999997,19 3.36999996,18.52 3.62999997,18.19 L3.62999997,18.19 Z',
      id: 'ImagePhotoSizeSelectLargeIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'photo_size_select_large',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImagePhotoSizeSelectLargeIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImagePhotoSizeSelectLargeIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImagePhotoSizeSelectLargeIcon-path-1',
        },
      ],
    },
  ],
};

export const ImagePhotoSizeSelectLargeIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
