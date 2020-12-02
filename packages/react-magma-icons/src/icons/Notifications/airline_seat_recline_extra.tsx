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
  title: ['airline_seat_recline_extra'],
  paths: [
    {
      d:
        'M5.34999997,5.63999997 C4.44999997,4.99999997 4.22999997,3.75999997 4.85999997,2.84999996 C5.48999997,1.94999996 6.73999998,1.72999996 7.64999998,2.35999996 C8.54999999,2.99999996 8.76999999,4.23999997 8.13999998,5.14999997 C7.49999998,6.04999998 6.25999998,6.26999998 5.34999997,5.63999997 L5.34999997,5.63999997 Z M16,20 C16,19.45 15.55,19 15,19 L8.92999999,19 C7.44999998,19 6.18999998,17.92 5.96999997,16.46 L4.15999997,7.77999998 C4.06999997,7.32999998 3.66999997,6.99999998 3.19999996,6.99999998 C2.57999996,6.99999998 2.11999996,7.56999998 2.23999996,8.17999998 L3.98999997,16.76 C4.36999997,19.2 6.46999998,21 8.93999999,21 L15,21 C15.55,21 16,20.55 16,20 Z M15.54,15 L11.35,15 L10.32,10.9 C11.6,11.62 12.95,12.18 14.42,12.2 C15,12.21 15.47,11.71 15.47,11.13 C15.47,10.54 14.98,10.09 14.39,10.07 C13.08,10.03 11.76,9.50999999 10.78,8.73999999 L9.13999999,7.46999998 C8.90999999,7.28999998 8.64999999,7.16999998 8.37999998,7.08999998 C8.05999998,6.99999998 7.71999998,6.96999998 7.38999998,7.02999998 L7.36999998,7.02999998 C6.13999998,7.24999998 5.31999997,8.41999999 5.52999997,9.63999999 L6.87999998,15.56 C7.15999998,16.98 8.38999998,18 9.82999999,18 L16.68,18 L19.77,20.42 C20.19,20.75 20.79,20.71 21.16,20.34 C21.61,19.89 21.56,19.16 21.06,18.77 L16.77,15.42 C16.42,15.15 15.99,15 15.54,15 L15.54,15 Z',
      id: 'NotificationsAirlineSeatReclineExtraIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'airline_seat_recline_extra',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsAirlineSeatReclineExtraIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsAirlineSeatReclineExtraIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsAirlineSeatReclineExtraIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsAirlineSeatReclineExtraIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
