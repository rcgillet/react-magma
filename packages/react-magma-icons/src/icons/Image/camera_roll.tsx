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
  title: ['camera_roll'],
  paths: [
    {
      d:
        'M14,4.99999995 C14,3.89999997 13.1,2.99999995 12,2.99999995 L11,2.99999995 L11,1.99999995 C11,1.44999996 10.55,0.999999954 9.99999996,0.999999954 L5.99999996,0.999999954 C5.44999997,0.999999954 4.99999996,1.44999996 4.99999996,1.99999995 L4.99999996,2.99999995 L3.99999996,2.99999995 C2.89999996,2.99999995 1.99999996,3.89999997 1.99999996,4.99999995 L1.99999996,20 C1.99999996,21.1 2.89999996,22 3.99999996,22 L12,22 C13.1,22 14,21.1 14,20 L20,20 C21.1,20 22,19.1 22,18 L22,6.99999995 C22,5.89999997 21.1,4.99999995 20,4.99999995 L14,4.99999995 Z M12,18 L9.99999999,18 L9.99999999,16 L12,16 L12,18 Z M12,8.99999998 L9.99999999,8.99999998 L9.99999999,6.99999998 L12,6.99999998 L12,8.99999998 Z M16,18 L14,18 L14,16 L16,16 L16,18 Z M16,8.99999998 L14,8.99999998 L14,6.99999998 L16,6.99999998 L16,8.99999998 Z M20,18 L18,18 L18,16 L20,16 L20,18 Z M20,8.99999998 L18,8.99999998 L18,6.99999998 L20,6.99999998 L20,8.99999998 Z',
      id: 'ImageCameraRollIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'camera_roll',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageCameraRollIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageCameraRollIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageCameraRollIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageCameraRollIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
