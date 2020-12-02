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
  title: ['calendar_today'],
  paths: [
    {
      d:
        'M20,2.99999995 L19,2.99999995 L19,1.99999995 C19,1.44999996 18.55,0.999999954 18,0.999999954 C17.45,0.999999954 17,1.44999996 17,1.99999995 L17,2.99999995 L6.99999996,2.99999995 L6.99999996,1.99999995 C6.99999996,1.44999996 6.54999998,0.999999954 5.99999996,0.999999954 C5.44999997,0.999999954 4.99999996,1.44999996 4.99999996,1.99999995 L4.99999996,2.99999995 L3.99999996,2.99999995 C2.89999996,2.99999995 1.99999996,3.89999997 1.99999996,4.99999995 L1.99999996,21 C1.99999996,22.1 2.89999996,23 3.99999996,23 L20,23 C21.1,23 22,22.1 22,21 L22,4.99999995 C22,3.89999997 21.1,2.99999995 20,2.99999995 Z M19,21 L4.99999997,21 C4.44999997,21 3.99999997,20.55 3.99999997,20 L3.99999997,7.99999998 L20,7.99999998 L20,20 C20,20.55 19.55,21 19,21 Z',
      id: 'ActionsCalendarTodayIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'calendar_today',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsCalendarTodayIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsCalendarTodayIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsCalendarTodayIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsCalendarTodayIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
