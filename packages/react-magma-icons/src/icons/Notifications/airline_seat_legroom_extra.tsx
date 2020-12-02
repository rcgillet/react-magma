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
  title: ['airline_seat_legroom_extra'],
  paths: [
    {
      d:
        'M3.99999996,12 L3.99999996,3.99999996 C3.99999996,3.44999996 3.54999996,2.99999996 2.99999996,2.99999996 C2.44999996,2.99999996 1.99999996,3.44999996 1.99999996,3.99999996 L1.99999996,12 C1.99999996,14.76 4.23999997,17 6.99999996,17 L12,17 C12.55,17 13,16.55 13,16 C13,15.45 12.55,15 12,15 L6.99999996,15 C5.33999997,15 3.99999996,13.66 3.99999996,12 Z M22.83,17.24 C22.45,16.52 21.54,16.27 20.8,16.61 L19.71,17.11 L16.3,10.13 C15.96,9.44999999 15.27,8.99999996 14.51,8.99999996 L11,8.99999996 L11,2.99999996 L4.99999997,2.99999996 L4.99999997,11 C4.99999997,12.66 6.33999998,14 7.99999997,14 L15,14 L17.56,19.25 C18.04,20.23 19.2,20.64 20.19,20.19 L22.14,19.3 C22.9,18.94 23.23,18 22.83,17.24 Z',
      id: 'NotificationsAirlineSeatLegroomExtraIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'airline_seat_legroom_extra',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsAirlineSeatLegroomExtraIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsAirlineSeatLegroomExtraIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsAirlineSeatLegroomExtraIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsAirlineSeatLegroomExtraIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
