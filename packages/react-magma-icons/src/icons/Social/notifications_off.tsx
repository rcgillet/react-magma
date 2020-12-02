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
  title: ['notifications_off'],
  paths: [
    {
      d:
        'M12,22 C13.1,22 14,21.1 14,20 L9.99999999,20 C9.99999999,21.1 10.89,22 12,22 Z M18,11 C18,7.92999998 16.36,5.35999997 13.5,4.67999997 L13.5,3.99999996 C13.5,3.16999996 12.83,2.49999996 12,2.49999996 C11.17,2.49999996 10.5,3.16999996 10.5,3.99999996 L10.5,4.67999997 C10.26,4.73999997 10.03,4.82999997 9.80999999,4.90999997 L18,13.1 L18,11 Z M5.40999997,3.34999996 L3.99999997,4.75999997 L6.80999998,7.56999998 C6.28999998,8.56999999 5.99999997,9.72999999 5.99999997,11 L5.99999997,16 L4.70999997,17.29 C4.07999997,17.92 4.51999997,19 5.40999997,19 L18.24,19 L19.98,20.74 L21.39,19.33 L5.40999997,3.34999996 Z',
      id: 'SocialNotificationsOffIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'notifications_off',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialNotificationsOffIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialNotificationsOffIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialNotificationsOffIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialNotificationsOffIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
