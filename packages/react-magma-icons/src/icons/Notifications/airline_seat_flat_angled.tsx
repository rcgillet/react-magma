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
  title: ['airline_seat_flat_angled'],
  paths: [
    {
      d:
        'M22.25,14.29 L21.56,16.18 L9.19999999,11.71 L10.59,7.91999998 C10.97,6.88999998 12.11,6.35999998 13.15,6.72999998 L19.84,9.13999999 C21.94,9.89999999 23.02,12.2 22.25,14.29 L22.25,14.29 Z M2.44999996,12.48 L7.99999998,14.48 L7.99999998,18 C7.99999998,18.55 8.44999999,19 8.99999999,19 L15,19 C15.55,19 16,18.55 16,18 L16,17.37 L19.58,18.66 C20.1,18.85 20.68,18.58 20.87,18.06 C21.06,17.54 20.79,16.96 20.27,16.77 L3.12999996,10.59 C2.60999996,10.4 2.02999996,10.67 1.83999996,11.19 C1.65999996,11.71 1.92999996,12.29 2.44999996,12.48 Z M7.29999998,10.2 C8.78999999,9.47999999 9.41999999,7.68999998 8.70999999,6.19999998 C7.98999998,4.70999997 6.19999998,4.07999997 4.69999997,4.79999997 C3.20999996,5.50999997 2.57999996,7.29999998 3.29999996,8.79999999 C4.00999997,10.29 5.79999997,10.92 7.29999998,10.2 L7.29999998,10.2 Z',
      id: 'NotificationsAirlineSeatFlatAngledIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'airline_seat_flat_angled',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsAirlineSeatFlatAngledIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsAirlineSeatFlatAngledIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsAirlineSeatFlatAngledIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsAirlineSeatFlatAngledIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
