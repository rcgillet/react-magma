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
  title: ['airline_seat_legroom_reduced'],
  paths: [
    {
      d:
        'M19.97,19.2 C20.15,20.16 19.42,21 18.5,21 L15.81,21 C14.51,21 13.55,19.78 13.87,18.51 L15,14 L8.99999998,14 C7.34999998,14 5.99999998,12.65 5.99999998,11 L5.99999998,2.99999996 L12,2.99999996 L12,8.99999996 L17,8.99999996 C18.1,8.99999996 19,9.89999999 19,11 L17,18 L18.44,18 C19.17,18 19.83,18.49 19.97,19.2 L19.97,19.2 Z M4.99999996,12 L4.99999996,3.99999996 C4.99999996,3.44999996 4.54999997,2.99999996 3.99999996,2.99999996 C3.44999996,2.99999996 2.99999996,3.44999996 2.99999996,3.99999996 L2.99999996,12 C2.99999996,14.76 5.23999997,17 7.99999996,17 L11,17 C11.55,17 12,16.55 12,16 C12,15.45 11.55,15 11,15 L7.99999996,15 C6.33999998,15 4.99999996,13.66 4.99999996,12 Z',
      id: 'NotificationsAirlineSeatLegroomReducedIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'airline_seat_legroom_reduced',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsAirlineSeatLegroomReducedIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsAirlineSeatLegroomReducedIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsAirlineSeatLegroomReducedIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsAirlineSeatLegroomReducedIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
