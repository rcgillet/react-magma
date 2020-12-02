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
  title: ['wifi'],
  paths: [
    {
      d:
        'M10.03,16.23 C11.26,15.6 12.72,15.6 13.94,16.23 C14.54,16.54 14.64,17.35 14.17,17.82 L14.17,17.82 L12.7,19.29 C12.31,19.68 11.68,19.68 11.29,19.29 L11.29,19.29 L9.81999999,17.82 C9.34999999,17.35 9.45999999,16.54 10.03,16.23 Z M6.20999998,11.97 C9.65999999,9.47999999 14.35,9.47999999 17.79,11.97 C18.48,12.46 18.52,13.48 17.92,14.08 L17.92,14.08 L17.91,14.09 C17.42,14.58 16.65,14.62 16.08,14.22 C13.64,12.49 10.36,12.49 7.91999998,14.22 C7.34999998,14.63 6.57999998,14.58 6.08999998,14.09 C5.47999997,13.48 5.51999997,12.47 6.20999998,11.97 Z M2.15999996,7.95999998 C7.87999998,3.28999996 16.14,3.28999996 21.85,7.95999998 C22.5,8.48999999 22.54,9.46999999 21.95,10.06 C21.44,10.57 20.62,10.61 20.06,10.15 C15.38,6.31999998 8.59999999,6.31999998 3.92999997,10.16 C3.37999996,10.62 2.56999996,10.57 2.05999996,10.06 C1.45999996,9.45999999 1.50999996,8.47999999 2.15999996,7.95999998 Z',
      id: 'NotificationsWifiIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'wifi',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsWifiIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsWifiIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsWifiIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsWifiIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
