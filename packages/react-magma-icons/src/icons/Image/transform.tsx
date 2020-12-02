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
  title: ['transform'],
  paths: [
    {
      d:
        'M21,16 L8.99999996,16 C8.44999999,16 7.99999996,15.55 7.99999996,15 L7.99999996,3.99999997 L8.78999999,3.99999997 C9.23999999,3.99999997 9.45999999,3.45999996 9.13999999,3.14999996 L7.34999998,1.34999996 C7.14999998,1.14999995 6.83999998,1.14999995 6.63999998,1.34999996 L4.84999997,3.14999996 C4.53999997,3.45999996 4.75999997,3.99999997 5.20999997,3.99999997 L5.99999996,3.99999997 L5.99999996,5.99999998 L2.99999996,5.99999998 C2.44999996,5.99999998 1.99999996,6.44999998 1.99999996,6.99999998 C1.99999996,7.54999998 2.44999996,7.99999998 2.99999996,7.99999998 L5.99999996,7.99999998 L5.99999996,16 C5.99999996,17.1 6.89999998,18 7.99999996,18 L16,18 L16,20 L15.21,20 C14.76,20 14.54,20.54 14.86,20.85 L16.65,22.64 C16.85,22.84 17.16,22.84 17.36,22.64 L19.15,20.85 C19.47,20.54 19.24,20 18.8,20 L18,20 L18,18 L21,18 C21.55,18 22,17.55 22,17 C22,16.45 21.55,16 21,16 Z M16,14 L18,14 L18,7.99999998 C18,6.89999998 17.1,5.99999998 16,5.99999998 L9.99999999,5.99999998 L9.99999999,7.99999998 L15,7.99999998 C15.55,7.99999998 16,8.44999999 16,8.99999998 L16,14 Z',
      id: 'ImageTransformIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'transform',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageTransformIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageTransformIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageTransformIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageTransformIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
