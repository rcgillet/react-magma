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
  title: ['crop_16_9'],
  paths: [
    {
      d:
        'M19,5.99999998 L4.99999996,5.99999998 C3.89999997,5.99999998 2.99999996,6.89999998 2.99999996,7.99999998 L2.99999996,16 C2.99999996,17.1 3.89999997,18 4.99999996,18 L19,18 C20.1,18 21,17.1 21,16 L21,7.99999998 C21,6.89999998 20.1,5.99999998 19,5.99999998 Z M18,16 L5.99999997,16 C5.44999997,16 4.99999997,15.55 4.99999997,15 L4.99999997,8.99999998 C4.99999997,8.44999999 5.44999997,7.99999998 5.99999997,7.99999998 L18,7.99999998 C18.55,7.99999998 19,8.44999999 19,8.99999998 L19,15 C19,15.55 18.55,16 18,16 Z',
      id: 'ImageCrop169Icon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'crop_16_9',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageCrop169Icon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageCrop169Icon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageCrop169Icon-path-1',
        },
      ],
    },
  ],
};

export const ImageCrop169Icon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
