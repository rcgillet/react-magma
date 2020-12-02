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
  title: ['network_check'],
  paths: [
    {
      d:
        'M15.9,4.99999997 C15.73,4.99999997 15.58,5.08999997 15.49,5.22999997 L15.42,5.37999997 L10.24,17.03 C10.08,17.32 9.97999999,17.64 9.97999999,17.99 C9.97999999,19.1 10.88,20 11.99,20 C12.95,20 13.76,19.32 13.95,18.41 L13.96,18.38 L16.4,5.49999997 C16.4,5.21999997 16.18,4.99999997 15.9,4.99999997 L15.9,4.99999997 Z M2.05999996,10.06 C2.56999996,10.57 3.38999996,10.61 3.94999997,10.15 C6.70999998,7.88999998 10.19,6.96999998 13.53,7.38999998 L14.72,4.70999997 C10.37,3.92999997 5.75999997,5.00999997 2.14999996,7.95999998 C1.50999996,8.48999999 1.46999996,9.46999999 2.05999996,10.06 Z M21.94,10.06 C22.53,9.46999999 22.49,8.48999999 21.84,7.95999998 C20.48,6.84999998 18.98,6.00999998 17.4,5.42999997 L16.87,8.24999998 C18,8.71999999 19.06,9.33999999 20.04,10.14 C20.62,10.6 21.43,10.57 21.94,10.06 L21.94,10.06 Z M17.91,14.09 C18.51,13.49 18.47,12.46 17.77,11.97 C17.31,11.64 16.83,11.36 16.33,11.11 L15.78,14.03 C15.89,14.1 16,14.17 16.1,14.25 C16.67,14.65 17.43,14.57 17.91,14.09 L17.91,14.09 Z M6.07999998,14.08 C6.57999998,14.58 7.34999998,14.62 7.92999998,14.21 C8.86999999,13.55 9.93999999,13.15 11.03,12.99 L12.31,10.11 C10.18,10.05 8.02999998,10.65 6.21999998,11.95 C5.52999997,12.46 5.47999997,13.48 6.07999998,14.08 Z',
      id: 'NotificationsNetworkCheckIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'network_check',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsNetworkCheckIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsNetworkCheckIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsNetworkCheckIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsNetworkCheckIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
