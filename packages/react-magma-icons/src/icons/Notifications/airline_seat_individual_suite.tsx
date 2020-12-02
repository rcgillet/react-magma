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
  title: ['airline_seat_individual_suite'],
  paths: [
    {
      d:
        'M6.99999997,13 C8.64999999,13 9.99999997,11.65 9.99999997,9.99999998 C9.99999997,8.34999998 8.64999999,6.99999998 6.99999997,6.99999998 C5.34999997,6.99999998 3.99999997,8.34999998 3.99999997,9.99999998 C3.99999997,11.65 5.34999997,13 6.99999997,13 Z M19,6.99999998 L13,6.99999998 C11.9,6.99999998 11,7.89999998 11,8.99999998 L11,14 L2.99999995,14 L2.99999995,7.99999998 C2.99999995,7.44999998 2.54999996,6.99999998 1.99999995,6.99999998 C1.44999996,6.99999998 0.999999954,7.44999998 0.999999954,7.99999998 L0.999999954,15 C0.999999954,16.1 1.89999996,17 2.99999995,17 L21,17 C22.1,17 23,16.1 23,15 L23,11 C23,8.78999999 21.21,6.99999998 19,6.99999998 Z',
      id: 'NotificationsAirlineSeatIndividualSuiteIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'airline_seat_individual_suite',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsAirlineSeatIndividualSuiteIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsAirlineSeatIndividualSuiteIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsAirlineSeatIndividualSuiteIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsAirlineSeatIndividualSuiteIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
