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
  title: ['flip_camera_ios'],
  paths: [
    {
      d:
        'M20,4.99999996 L16.83,4.99999996 L15.59,3.64999997 C15.22,3.23999996 14.68,2.99999996 14.12,2.99999996 L9.87999999,2.99999996 C9.31999999,2.99999996 8.77999999,3.23999996 8.39999998,3.64999997 L7.16999998,4.99999996 L3.99999996,4.99999996 C2.89999996,4.99999996 1.99999996,5.89999997 1.99999996,6.99999996 L1.99999996,19 C1.99999996,20.1 2.89999996,21 3.99999996,21 L20,21 C21.1,21 22,20.1 22,19 L22,6.99999996 C22,5.89999997 21.1,4.99999996 20,4.99999996 Z M13.67,17.7 C13.15,17.89 12.59,18 12,18 C9.23999999,18 6.99999997,15.76 6.99999997,13 L4.99999997,13 L7.49999997,10.5 L9.99999997,13 L7.99999997,13 C7.99999997,15.21 9.78999999,17 12,17 C12.46,17 12.91,16.92 13.32,16.77 C13.51,16.7 13.71,16.74 13.85,16.88 C14.11,17.14 14.01,17.57 13.67,17.7 Z M16.5,15.5 L14,13 L16,13 C16,10.79 14.21,8.99999998 12,8.99999998 C11.54,8.99999998 11.09,9.07999999 10.68,9.22999999 C10.49,9.29999999 10.29,9.25999999 10.15,9.11999999 C9.88999999,8.85999999 9.98999999,8.42999999 10.33,8.29999998 C10.85,8.10999998 11.41,7.99999998 12,7.99999998 C14.76,7.99999998 17,10.24 17,13 L19,13 L16.5,15.5 Z',
      id: 'ImageFlipCameraIosIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'flip_camera_ios',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageFlipCameraIosIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageFlipCameraIosIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageFlipCameraIosIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageFlipCameraIosIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
