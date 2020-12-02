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
  title: ['crop_square'],
  paths: [
    {
      d:
        'M18,3.99999997 L5.99999997,3.99999997 C4.89999997,3.99999997 3.99999997,4.89999997 3.99999997,5.99999997 L3.99999997,18 C3.99999997,19.1 4.89999997,20 5.99999997,20 L18,20 C19.1,20 20,19.1 20,18 L20,5.99999997 C20,4.89999997 19.1,3.99999997 18,3.99999997 Z M17,18 L6.99999997,18 C6.44999998,18 5.99999997,17.55 5.99999997,17 L5.99999997,6.99999998 C5.99999997,6.44999998 6.44999998,5.99999998 6.99999997,5.99999998 L17,5.99999998 C17.55,5.99999998 18,6.44999998 18,6.99999998 L18,17 C18,17.55 17.55,18 17,18 Z',
      id: 'ImageCropSquareIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'crop_square',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageCropSquareIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageCropSquareIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageCropSquareIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageCropSquareIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
