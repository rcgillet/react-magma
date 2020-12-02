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
  title: ['live_tv'],
  paths: [
    {
      d:
        'M10.5,17.15 L14.48,14.87 C15.15,14.49 15.15,13.52 14.48,13.13 L10.5,10.85 C9.82999999,10.47 8.99999999,10.96 8.99999999,11.72 L8.99999999,16.27 C8.99999999,17.04 9.82999999,17.53 10.5,17.15 Z M21,5.99999998 L13.41,5.99999998 L16.35,3.05999996 C16.55,2.85999996 16.55,2.54999996 16.35,2.34999996 C16.15,2.14999996 15.84,2.14999996 15.64,2.34999996 L12,5.98999997 L8.35999998,2.34999996 C8.15999998,2.14999996 7.84999998,2.14999996 7.64999998,2.34999996 C7.44999998,2.54999996 7.44999998,2.85999996 7.64999998,3.05999996 L10.59,5.99999998 L2.99999995,5.99999998 C1.89999996,5.99999998 0.999999954,6.88999998 0.999999954,7.99999998 L0.999999954,20 C0.999999954,21.1 1.89999996,22 2.99999995,22 L21,22 C22.1,22 23,21.1 23,20 L23,7.99999998 C23,6.88999998 22.1,5.99999998 21,5.99999998 Z M20,20 L3.99999996,20 C3.44999996,20 2.99999996,19.55 2.99999996,19 L2.99999996,8.99999998 C2.99999996,8.44999999 3.44999996,7.99999998 3.99999996,7.99999998 L20,7.99999998 C20.55,7.99999998 21,8.44999999 21,8.99999998 L21,19 C21,19.55 20.55,20 20,20 Z',
      id: 'NotificationsLiveTvIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'live_tv',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsLiveTvIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsLiveTvIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsLiveTvIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsLiveTvIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
