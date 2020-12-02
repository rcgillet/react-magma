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
  title: ['monochrome_photos'],
  paths: [
    {
      d:
        'M20,4.99999996 L16.8,4.99999996 L15.6,3.65999997 C15.22,3.23999996 14.68,2.99999996 14.11,2.99999996 L9.88999999,2.99999996 C9.31999999,2.99999996 8.77999999,3.23999996 8.39999998,3.65999997 L7.19999998,4.99999996 L3.99999996,4.99999996 C2.89999996,4.99999996 1.99999996,5.89999997 1.99999996,6.99999996 L1.99999996,19 C1.99999996,20.1 2.89999996,21 3.99999996,21 L20,21 C21.1,21 22,20.1 22,19 L22,6.99999996 C22,5.89999997 21.1,4.99999996 20,4.99999996 Z M20,18 C20,18.55 19.55,19 19,19 L12,19 L12,18 C9.19999999,18 6.99999998,15.8 6.99999998,13 C6.99999998,10.2 9.19999999,7.99999998 12,7.99999998 L12,6.99999998 L19,6.99999998 C19.55,6.99999998 20,7.44999998 20,7.99999998 L20,18 Z M17,13 C17,10.2 14.8,7.99999998 12,7.99999998 L12,9.79999999 C13.8,9.79999999 15.2,11.2 15.2,13 C15.2,14.8 13.8,16.2 12,16.2 L12,18 C14.8,18 17,15.8 17,13 Z M8.79999999,13 C8.79999999,14.8 10.2,16.2 12,16.2 L12,9.79999999 C10.2,9.79999999 8.79999999,11.2 8.79999999,13 Z',
      id: 'ImageMonochromePhotosIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'monochrome_photos',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageMonochromePhotosIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageMonochromePhotosIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageMonochromePhotosIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageMonochromePhotosIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
