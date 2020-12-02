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
  title: ['crop'],
  paths: [
    {
      d:
        'M17,15 L19,15 L19,6.99999997 C19,5.89999997 18.1,4.99999997 17,4.99999997 L8.99999999,4.99999997 L8.99999999,6.99999997 L16,6.99999997 C16.55,6.99999997 17,7.44999998 17,7.99999997 L17,15 Z M7.99999995,17 C7.44999998,17 6.99999995,16.55 6.99999995,16 L6.99999995,1.99999995 C6.99999995,1.44999996 6.54999998,0.999999954 5.99999995,0.999999954 C5.44999997,0.999999954 4.99999995,1.44999996 4.99999995,1.99999995 L4.99999995,4.99999995 L1.99999995,4.99999995 C1.44999996,4.99999995 0.999999954,5.44999997 0.999999954,5.99999995 C0.999999954,6.54999998 1.44999996,6.99999995 1.99999995,6.99999995 L4.99999995,6.99999995 L4.99999995,17 C4.99999995,18.1 5.89999997,19 6.99999995,19 L17,19 L17,22 C17,22.55 17.45,23 18,23 C18.55,23 19,22.55 19,22 L19,19 L22,19 C22.55,19 23,18.55 23,18 C23,17.45 22.55,17 22,17 L7.99999995,17 Z',
      id: 'ImageCropIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'crop',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageCropIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageCropIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageCropIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageCropIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
