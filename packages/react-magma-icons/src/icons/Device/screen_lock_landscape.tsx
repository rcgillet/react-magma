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
  title: ['screen_lock_landscape'],
  paths: [
    {
      d:
        'M21,4.99999997 L2.99999995,4.99999997 C1.89999996,4.99999997 0.999999954,5.89999997 0.999999954,6.99999997 L0.999999954,17 C0.999999954,18.1 1.89999996,19 2.99999995,19 L21,19 C22.1,19 23,18.1 23,17 L23,6.99999997 C23,5.89999997 22.1,4.99999997 21,4.99999997 Z M19,17 L4.99999997,17 L4.99999997,6.99999998 L19,6.99999998 L19,17 Z M9.99999999,16 L14,16 C14.55,16 15,15.55 15,15 L15,12 C15,11.45 14.55,11 14,11 L14,9.99999998 C14,8.88999999 13.1,7.99999998 12,7.99999998 C10.89,7.99999998 9.99999999,8.89999999 9.99999999,9.99999998 L9.99999999,11 C9.44999999,11 8.99999999,11.45 8.99999999,12 L8.99999999,15 C8.99999999,15.55 9.44999999,16 9.99999999,16 Z M10.8,9.99999999 C10.8,9.33999999 11.34,8.79999999 12,8.79999999 C12.66,8.79999999 13.2,9.33999999 13.2,9.99999999 L13.2,11 L10.8,11 L10.8,9.99999999 L10.8,9.99999999 Z',
      id: 'DeviceScreenLockLandscapeIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'screen_lock_landscape',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'DeviceScreenLockLandscapeIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#DeviceScreenLockLandscapeIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#DeviceScreenLockLandscapeIcon-path-1',
        },
      ],
    },
  ],
};

export const DeviceScreenLockLandscapeIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
