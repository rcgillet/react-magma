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
  title: ['event_busy'],
  paths: [
    {
      d:
        'M9.83999999,16.47 L11.75,14.56 L13.66,16.47 C13.95,16.76 14.43,16.76 14.72,16.47 C15.01,16.18 15.01,15.7 14.72,15.41 L12.81,13.5 L14.72,11.59 C15.01,11.3 15.01,10.82 14.72,10.53 C14.43,10.24 13.95,10.24 13.66,10.53 L11.75,12.44 L9.83999999,10.53 C9.54999999,10.24 9.06999999,10.24 8.77999999,10.53 C8.48999999,10.82 8.48999999,11.3 8.77999999,11.59 L10.69,13.5 L8.77999999,15.41 C8.48999999,15.7 8.48999999,16.18 8.77999999,16.47 C9.06999999,16.76 9.54999999,16.76 9.83999999,16.47 Z M19,2.99999995 L18,2.99999995 L18,1.99999995 C18,1.44999996 17.55,0.999999954 17,0.999999954 C16.45,0.999999954 16,1.44999996 16,1.99999995 L16,2.99999995 L7.99999996,2.99999995 L7.99999996,1.99999995 C7.99999996,1.44999996 7.54999998,0.999999954 6.99999996,0.999999954 C6.44999998,0.999999954 5.99999996,1.44999996 5.99999996,1.99999995 L5.99999996,2.99999995 L4.99999996,2.99999995 C3.88999997,2.99999995 3.00999996,3.89999997 3.00999996,4.99999995 L2.99999996,19 C2.99999996,20.1 3.88999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999995 C21,3.89999997 20.1,2.99999995 19,2.99999995 Z M18,19 L5.99999997,19 C5.44999997,19 4.99999997,18.55 4.99999997,18 L4.99999997,7.99999998 L19,7.99999998 L19,18 C19,18.55 18.55,19 18,19 Z',
      id: 'NotificationsEventBusyIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'event_busy',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsEventBusyIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsEventBusyIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsEventBusyIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsEventBusyIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
