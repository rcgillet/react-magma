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
  title: ['camera_front'],
  paths: [
    {
      d:
        'M17,-4.99994108e-08 L6.99999997,-4.99994108e-08 C5.89999997,-4.99994108e-08 4.99999997,0.899999954 4.99999997,1.99999995 L4.99999997,16 C4.99999997,17.1 5.89999997,18 6.99999997,18 L17,18 C18.1,18 19,17.1 19,16 L19,1.99999995 C19,0.899999954 18.1,-4.99994108e-08 17,-4.99994108e-08 Z M17,12.5 C17,10.83 13.67,9.99999996 12,9.99999996 C10.33,9.99999996 6.99999998,10.83 6.99999998,12.5 L6.99999998,2.99999996 C6.99999998,2.44999996 7.44999998,1.99999996 7.99999998,1.99999996 L16,1.99999996 C16.55,1.99999996 17,2.44999996 17,2.99999996 L17,12.5 Z M10.85,18.85 C10.54,18.54 9.99999997,18.76 9.99999997,19.21 L9.99999997,20 L5.99999997,20 C5.44999997,20 4.99999997,20.45 4.99999997,21 C4.99999997,21.55 5.44999997,22 5.99999997,22 L9.99999997,22 L9.99999997,22.79 C9.99999997,23.24 10.54,23.46 10.85,23.14 L12.64,21.35 C12.84,21.15 12.84,20.84 12.64,20.64 L10.85,18.85 L10.85,18.85 Z M18,20 L15,20 C14.45,20 14,20.45 14,21 C14,21.55 14.45,22 15,22 L18,22 C18.55,22 19,21.55 19,21 C19,20.45 18.55,20 18,20 Z M12,7.99999997 C13.1,7.99999997 14,7.09999998 14,5.99999997 C14,4.89999997 13.1,3.99999997 12,3.99999997 C10.9,3.99999997 10.01,4.89999997 10.01,5.99999997 C10.01,7.09999998 10.9,7.99999997 12,7.99999997 Z',
      id: 'ImageCameraFrontIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'camera_front',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageCameraFrontIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageCameraFrontIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageCameraFrontIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageCameraFrontIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
