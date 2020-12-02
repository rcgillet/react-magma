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
  title: ['no_encryption'],
  paths: [
    {
      d:
        'M3.70999997,5.50999997 C4.09999997,5.11999997 4.72999997,5.11999997 5.11999997,5.50999997 L5.11999997,5.50999997 L20.48,20.88 C20.87,21.27 20.87,21.9 20.48,22.29 C20.09,22.68 19.46,22.68 19.07,22.29 L19.07,22.29 L18.78,22 L5.99999997,22 C4.89999997,22 3.99999997,21.1 3.99999997,20 L3.99999997,20 L3.99999997,9.99999999 C3.99999997,9.24999999 4.41999997,8.59999999 5.03999997,8.24999998 L5.03999997,8.24999998 L3.70999997,6.91999998 C3.31999996,6.52999998 3.31999996,5.89999997 3.70999997,5.50999997 Z M12,0.999999954 C14.76,0.999999954 17,3.23999996 17,5.99999995 L17,5.99999995 L17,7.99999995 L18,7.99999995 C19.1,7.99999995 20,8.89999999 20,9.99999995 L20,9.99999995 L20,17.56 L10.44,7.99999995 L15.1,7.99999995 L15.1,5.99999995 C15.1,4.28999997 13.71,2.89999996 12,2.89999996 C10.29,2.89999996 8.89999999,4.28999997 8.89999999,5.99999995 L8.89999999,5.99999995 L8.89999999,6.45999998 L7.17999998,4.73999997 C7.73999998,2.58999996 9.67999998,0.999999954 12,0.999999954 Z',
      id: 'NotificationsNoEncryptionIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'no_encryption',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsNoEncryptionIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsNoEncryptionIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsNoEncryptionIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsNoEncryptionIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
