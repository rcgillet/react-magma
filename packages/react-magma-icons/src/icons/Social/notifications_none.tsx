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
  title: ['notifications_none'],
  paths: [
    {
      d:
        'M19.29,17.29 L18,16 L18,11 C18,7.92999998 16.36,5.35999997 13.5,4.67999997 L13.5,3.99999996 C13.5,3.16999996 12.83,2.49999996 12,2.49999996 C11.17,2.49999996 10.5,3.16999996 10.5,3.99999996 L10.5,4.67999997 C7.62999998,5.35999997 5.99999997,7.91999998 5.99999997,11 L5.99999997,16 L4.70999997,17.29 C4.07999997,17.92 4.51999997,19 5.40999997,19 L18.58,19 C19.48,19 19.92,17.92 19.29,17.29 Z M16,17 L7.99999998,17 L7.99999998,11 C7.99999998,8.51999999 9.50999999,6.49999998 12,6.49999998 C14.49,6.49999998 16,8.51999999 16,11 L16,17 Z M12,22 C13.1,22 14,21.1 14,20 L9.99999999,20 C9.99999999,21.1 10.89,22 12,22 Z',
      id: 'SocialNotificationsNoneIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'notifications_none',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialNotificationsNoneIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialNotificationsNoneIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialNotificationsNoneIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialNotificationsNoneIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
