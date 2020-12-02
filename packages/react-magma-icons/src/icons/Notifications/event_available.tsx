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
  title: ['event_available'],
  paths: [
    {
      d:
        'M16,10.53 C15.71,10.24 15.23,10.24 14.94,10.53 L10.59,14.88 L8.99999999,13.29 C8.70999999,13 8.22999998,13 7.93999998,13.29 C7.64999998,13.58 7.64999998,14.06 7.93999998,14.35 L9.87999999,16.29 C10.27,16.68 10.9,16.68 11.29,16.29 L15.99,11.59 C16.29,11.3 16.29,10.82 16,10.53 Z M19,2.99999995 L18,2.99999995 L18,1.99999995 C18,1.44999996 17.55,0.999999954 17,0.999999954 C16.45,0.999999954 16,1.44999996 16,1.99999995 L16,2.99999995 L7.99999996,2.99999995 L7.99999996,1.99999995 C7.99999996,1.44999996 7.54999998,0.999999954 6.99999996,0.999999954 C6.44999998,0.999999954 5.99999996,1.44999996 5.99999996,1.99999995 L5.99999996,2.99999995 L4.99999996,2.99999995 C3.88999997,2.99999995 3.00999996,3.89999997 3.00999996,4.99999995 L2.99999996,19 C2.99999996,20.1 3.88999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999995 C21,3.89999997 20.1,2.99999995 19,2.99999995 Z M18,19 L5.99999997,19 C5.44999997,19 4.99999997,18.55 4.99999997,18 L4.99999997,7.99999998 L19,7.99999998 L19,18 C19,18.55 18.55,19 18,19 Z',
      id: 'NotificationsEventAvailableIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'event_available',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsEventAvailableIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsEventAvailableIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsEventAvailableIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsEventAvailableIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
