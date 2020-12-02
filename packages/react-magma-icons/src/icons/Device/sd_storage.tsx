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
  title: ['sd_storage'],
  paths: [
    {
      d:
        'M18,1.99999996 L10.83,1.99999996 C10.3,1.99999996 9.78999999,2.20999996 9.40999999,2.58999996 L4.59999997,7.41999998 C4.22999997,7.78999998 3.99999997,8.29999998 3.99999997,8.81999999 L3.99999997,20 C3.99999997,21.1 4.89999997,22 5.99999997,22 L18,22 C19.1,22 20,21.1 20,20 L20,3.99999996 C20,2.89999996 19.1,1.99999996 18,1.99999996 Z M11,7.99999997 C10.45,7.99999997 9.99999999,7.54999998 9.99999999,6.99999997 L9.99999999,4.99999997 C9.99999999,4.44999997 10.45,3.99999997 11,3.99999997 C11.55,3.99999997 12,4.44999997 12,4.99999997 L12,6.99999997 C12,7.54999998 11.55,7.99999997 11,7.99999997 Z M14,7.99999997 C13.45,7.99999997 13,7.54999998 13,6.99999997 L13,4.99999997 C13,4.44999997 13.45,3.99999997 14,3.99999997 C14.55,3.99999997 15,4.44999997 15,4.99999997 L15,6.99999997 C15,7.54999998 14.55,7.99999997 14,7.99999997 Z M17,7.99999997 C16.45,7.99999997 16,7.54999998 16,6.99999997 L16,4.99999997 C16,4.44999997 16.45,3.99999997 17,3.99999997 C17.55,3.99999997 18,4.44999997 18,4.99999997 L18,6.99999997 C18,7.54999998 17.55,7.99999997 17,7.99999997 Z',
      id: 'DeviceSdStorageIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'sd_storage',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'DeviceSdStorageIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#DeviceSdStorageIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#DeviceSdStorageIcon-path-1',
        },
      ],
    },
  ],
};

export const DeviceSdStorageIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
