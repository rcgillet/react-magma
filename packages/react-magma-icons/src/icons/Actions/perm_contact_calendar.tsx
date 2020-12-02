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
  title: ['perm_contact_calendar'],
  paths: [
    {
      d:
        'M19,2.99999995 L18,2.99999995 L18,1.99999995 C18,1.44999996 17.55,0.999999954 17,0.999999954 C16.45,0.999999954 16,1.44999996 16,1.99999995 L16,2.99999995 L7.99999996,2.99999995 L7.99999996,1.99999995 C7.99999996,1.44999996 7.54999998,0.999999954 6.99999996,0.999999954 C6.44999998,0.999999954 5.99999996,1.44999996 5.99999996,1.99999995 L5.99999996,2.99999995 L4.99999996,2.99999995 C3.88999997,2.99999995 2.99999996,3.89999997 2.99999996,4.99999995 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999995 C21,3.89999997 20.1,2.99999995 19,2.99999995 Z M12,5.99999997 C13.66,5.99999997 15,7.33999998 15,8.99999997 C15,10.66 13.66,12 12,12 C10.34,12 8.99999999,10.66 8.99999999,8.99999997 C8.99999999,7.33999998 10.34,5.99999997 12,5.99999997 Z M18,18 L5.99999997,18 L5.99999997,17 C5.99999997,15 9.99999997,13.9 12,13.9 C14,13.9 18,15 18,17 L18,18 Z',
      id: 'ActionsPermContactCalendarIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'perm_contact_calendar',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsPermContactCalendarIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsPermContactCalendarIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsPermContactCalendarIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsPermContactCalendarIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
