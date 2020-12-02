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
  title: ['photo_size_select_actual'],
  paths: [
    {
      d:
        'M21,2.99999996 L2.99999995,2.99999996 C1.99999995,2.99999996 0.999999954,3.99999996 0.999999954,4.99999996 L0.999999954,19 C0.999999954,20.1 1.89999996,21 2.99999995,21 L21,21 C22,21 23,20 23,19 L23,4.99999996 C23,3.99999996 22,2.99999996 21,2.99999996 Z M5.62999997,16.19 L8.11999998,12.99 C8.31999998,12.74 8.69999999,12.73 8.89999999,12.98 L11,15.51 L14.1,11.52 C14.3,11.26 14.7,11.26 14.9,11.53 L18.41,16.21 C18.66,16.54 18.42,17.01 18.01,17.01 L6.01999998,17.01 C5.60999997,17 5.36999997,16.52 5.62999997,16.19 Z',
      id: 'ImagePhotoSizeSelectActualIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'photo_size_select_actual',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImagePhotoSizeSelectActualIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImagePhotoSizeSelectActualIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImagePhotoSizeSelectActualIcon-path-1',
        },
      ],
    },
  ],
};

export const ImagePhotoSizeSelectActualIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
